/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4KtrVrkq9GjZXURkj1t6nC9TaebuFJ9pbnAmTpK4UocduRuvJ93iBNyRVc7W3BjsLFNKm6mTTNqmj7pqdQwFZ4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AVKwBbPq3zxmD45A3r8UfpZXinauoKggaxqosJv1ABKQ2zY3zLK6nSSoXwhtBsjfRkGavR5EWv8wr6jAXCfRPZ",
  "key1": "4Dih9Rv6dNQJ2XJgFfNU4rzCR6LjPUeSWesJUPH7dUJz1LqmMiXWGo4SqJZ9GWwisqJAxd8Z39CoG7auYeT8uVXJ",
  "key2": "5T5oNKTtpsvyyUCK1nM41J9x1FaXZM9PzUL55vp36LfWpq79h6gdL87LtXYdu56pRmqya3QJN8Zmxb1WnyQV1p5K",
  "key3": "4VFPcC1BNEy89dpDeiE8EtHDHFBiHZzjgCYG7UYVBkETxLG8Av1RydDVkDyciAWJGRodNsm3Sx2dsNTYv9rQPJB7",
  "key4": "5xypNzVUXn2QCV16xS7z9V6pe8Bpw59j56gPfeUeLv7Y9qzy5ubzx66cgEhMwqcjZ54U3jvTxULt2bjrkGbXnb6j",
  "key5": "5YGbqdU5XBANsur73St8qzQkoGwHe37NxrPTF9G3V6gBMm8w4db3JiXCKZoGLj2tgpkxv7JMaYi1dipgQGGE6nq4",
  "key6": "38SG5KGaJB4m1Jy6obj7FDa2Jx7V8PbwGX12iofQaDmuKjJ21kcvpAiNVD4xQnzfCL36Fd55gB25sbMDVxRm9kkS",
  "key7": "4bKoofz4RudzhPtRD1DAsjqRsj8hxykouKV3J1dEAuMXGRrRYbQPV2BWob7crkTaybW5ipLJm67EoMSZLErcZFyM",
  "key8": "2bn3b1Bsm4XVB5w9FNVKqtMznMw75S3zmB8bD7V8gBLY7W6oNw2FKgwiNshxLCSgKRHHbSy4pt14rBgWxUf4Htm8",
  "key9": "5my8TgDgF2X5Swwd24rkpZJVA4tsgVuVoZNWoiat7PaDp2GtN36f8xnuYhrCknTydTASvtsvmK7CcQpTv64ibKLe",
  "key10": "qFVds23uEsTtvSeVMSjTm4nurgEtspEdsxmw8x5jbNHgXbHVDVb9kjB5A8y8FL8YZXiSVwwm8QstFZSD6mXhryi",
  "key11": "4E4bfi6Ewo7eDrSrYGiYkyvZ6oZBcDWDNjpNukAwJPfSGxciNkjQXEGLD9exViUsNgQ9BX6uxF7Xt2yyzUAB81W2",
  "key12": "CWgNPXTGsckXQGn865u2fqrh2QM2Wiq5hVn9775RtVKBz1SGswwva3D9gXmKYbCkjWAfj5rHPx7GVH6jn3DHS9a",
  "key13": "jyFisoHBGNR9HWXB9jDj8f7wfRiLCoNLuxvjDvqjP8DEViH3HoVpYb4VH51tAfJARdXAmuiUCUHj435GHvrkmxt",
  "key14": "4VjQvWbuDe8Vsjv1VddQSDwj1jJGhqcwxrFS9Jk6ChvPxDsvEScesXpJqsuK5LzU4y5dmt3k8EDZsQYz6dvpBSEK",
  "key15": "kGFo98UMwwFEpgtMWAk4K17ZR6vAsFfDW7ysoH95UDNuVFrPXJL3Ti8Aw9RCEY8Arkg9GjpUqMwrEeVUYNg8nUh",
  "key16": "33TaB8GTGtZfhwFFBL2ozqoNtNzCBH5kiCvkTchnC6sFeaHvaWJVcNb3GDMYH2FTSxgvfref8jRkAacb8SxrexAf",
  "key17": "T7yJBMoFnvhxTD6VGnB4km86NUTCMEr4mJnmqqpF7dYNxMDshejrhWgGP4dRenFiMWbqiqnmtQPfNVCYjLXnUfW",
  "key18": "2CEKGYmCJQyfacDazByaXnxX6p3MvMQJfKoNpgzhkeWhRKCypV9tHkbsmQvKQTqBhqen5sBDNNDV6THnU3yaubth",
  "key19": "pUbkwx1eSZZ1gpM8trCmkNdTvoPqPrGNZbpsRnPJuvvqeH4ts1SL9cydZjbiBc36m1DgnNYTad3kqUdAXvLcSFk",
  "key20": "3yPqWhYCuMHcEgBrStBDx9PmBabD4GPPmrrCLXW13FV7zxYFnQeNrDPtF1PczYGwZtThQUaUwKDKFb9oenhy4gx4",
  "key21": "355jaBML1cX99Q6jpmFfHGPfb6MMAi6U1pmNVCm3hg5qYTmko8hPMnxqcsT766es6f5cNbtkNbK5rNe8dC5nhFA7",
  "key22": "CCiSn8YGxfh8cQrHm9aYCuw2AmxmYadwj6QvzrQ9E4rgTVhWht3CXJdpuFLZZYr1fMHAzXgcJGZ4FsF5Rvrr4TQ",
  "key23": "2vUrx1A4eEpncW9pzLY6fabchTq7JwcdcDhaNw49u7GUWDReYh5QkigECGKsgiGEzKDCEJxYpQu5EsTodDjwqdh1",
  "key24": "3nXVBzzUWckjmUccSp4F3fCxbPDMixm8uuUzcoGWbZsyw9L6yk3kFMhzP3r8sW9NXd3X2ZwKY5876StpXk3fCk7o",
  "key25": "nvH9TkFoBwfm1NcpJAq1urLs1jxThQgtxDveKJg7MpyxAsjvBbk7SPkYsQ9asH5dm82i5PcxZtifozkoHXr9Dya",
  "key26": "2YMLijYZsAvRUntu9EbhRiDkQdSPoct43J15RV7DyyJ5M7VWUWRS8DPWq1eXe8me3Yvd7pnM8n6pCZZCcK4k4xth",
  "key27": "5yhcho7gwTRJg27Zem3q6vRVaqTEAGfuFaxdKLWzaVNtNAoZBXdphFkcqSnNHBMsVYgwcEpeGnApDjzD1eJmErU4",
  "key28": "3ZjFdSGd7c4PDDN4gTzBoRq8tMsPL1Do7kdBZqj8xq11p8cwu34CotvR2wdVJcrQ5y3aFGLRDwUrA8N5676vwkJu",
  "key29": "zoMVG3Lz6EUSPJpj8cdom61HgoqDbMXJqAsmG28UMt9j3ahVKfgg2nVjFtDzq1mjNhmw6tWiJhR8gXJkZV1zBj6",
  "key30": "4jZPxMFDpgYXMH9JTG3QkvhdmcC12Vwnu7fFKhEHCSTkatf9AC9CpdqGACjQFPgBonT2a6NWbshLNt332z2hBsz9",
  "key31": "5yWf82iu26gr983hJjz7U3ETLZj2pVXuJ4LRiwHz5aTVgCf5XUXQPE3dN2hTCfKLcWtypcFuVBN78dqKmuGESHiT"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
