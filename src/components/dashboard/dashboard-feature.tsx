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
    "5fbezVq7SjnjcwqnVyJ8zpSjt3NxpK5n5j72XrcdrTbULPXBidXt8K5zdNQpept6TNkvmdK3UcswvoHkLWZUCed6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CSGd86AfTvwXqJGnyFzBLBo5kHYrfqWAy6624WU2bZnQyzenGs9yS8RYRdQvRo7UidVPKKLRCYENPT66cvgjFhL",
  "key1": "2yaB458krF3VHrtGNUbQe7TPMVDLfSqRVcCUvWUK91XBNTXUYRxjH6wHSKJpMERuLvthcpeCgfrJh6SBY2eiKMJb",
  "key2": "47V6pCVszqn22rFSw4YgFdsr55qF8j9y3XYKKHQC8rWe3nQX9KxfvizSZk9cTeLAr5opGJ2NtnH9DYghodGVFVAR",
  "key3": "3JeGQLqrqbCQcWwStGQhVkCLGKnYkbEuF16989tucMQyPD12ppHvGcfthFpr89BDcJzL8E1SjkcWVEdaedF21Mbg",
  "key4": "4zTLQH3tNu9rTPkpwqcmpTFnpJGiwuRTkiLXVNNyo8YERjh81rqcCdzBnNqzTUxtbkJHnEoXJ6f6R9Ci1ugeCabV",
  "key5": "5CHcPHLyqfhYVgoNFH5T23KYwGrkJ9rdZS3my5ecLRFx6WFFTe3vqTSPgVmJ7TEdKsKq87nSYCmZXQSpoyYWfQNs",
  "key6": "5wUCa5Lrs66AEF7QRKZpiaqUhp7Q3Mcb5XaE97GGXDv5ExitKPngZfKSxLswnC9CEvmRbb7jgJFm3awTkULhzj4V",
  "key7": "2BJLASEhNj7pNSLzc1QWzb8F6bmgRMWLawqL822tnFtYwEPwM7hvivaBDMNNLscJ1Xbz6aqsJATXjsujEZDFZWiW",
  "key8": "4G3PnVHdTnYMQLCuKySkpLvxNJwKQTkZDfoc89nHbgi9fjfi84rbpgRaZcR7RAHRC5wmaedD7dwyAjU1D4ewGAQH",
  "key9": "4KAfpUr8taQnvenN9H8ySNxJTXtUhE2ihR2zQJfvtXLj4QTp9nhbZUbYSyLNfjt2dPPwYcH1w971eiapjPdkw8uj",
  "key10": "51VzPJTx3ZoCGTj73MNBptSmvzGecH4hWuASTXnC49zEUW6cEZmrpzPXcj6PtV5mdcm4kfes69CKzFUGyx8U4Emq",
  "key11": "5QW6jHUzsecVpeXjBiQSoqPofZBH1x2kLWTvhzH7fNYyWZ3YqJnT5TBF4hQofRMQBWw3UV5uvEEqxBU4s4u5umTS",
  "key12": "2Kid68zEV3TJYjkAzpysCXwiDAVKjbTdxMRoPsxKnTS84mUehZTBEKHimFrCjeUXj24uVqBTDdRNJrno4deJRQNt",
  "key13": "4zUGRyzTaDXECx2PNYRaDw3Ny5nwiBaX2GBHCtCns1vVXVobVEU5zWB5B9f58GBWX7g8uicgF3Lr2ritEmq5yJ3u",
  "key14": "52We9Tf2D2XoC4XYGuc9kd2ozyzAXVqzRkq4dyVFd2iVbuCJrJxBnznRFjCB3sJ3scrX8NeRZ8TyBXZm8e51Qiv4",
  "key15": "4sg6JUxNDmipypHQ59C5cWnbTLxDj4U6hDT8kDdBXoE4qRNAjwhf131njJKtVUjWojLGHyU3MjH7tZV8xq5hkvQT",
  "key16": "5giChrSRyp9BVybDyE1r5h3DmqF75mhnsSPjw5TUec13CQHWYQ1AMSbFsohbjNx94SbcMRBfZqd9qr4eCPNAp6xt",
  "key17": "n9ZpeNaZ7M29BXTtd6WWAi2eRYAvrcaud8WS8kTT1PsNQHkdwtDeUf3F5a5NPW9vHtwaZoemHX9vVpSqCge1vVQ",
  "key18": "4nE1Sinky5HyUk1SybBrDFzXaeJNsXqKLo4pNaVRGmGm3nnNHdUw3WK17rbqTtW2sX4ZJyyUVGVVznNAnzXCKCQi",
  "key19": "2tGYBSVWsPTZUJuRfnzESsk9HbgVGHrsKgnGAK7hsTz3YbeK9PbWmHr1soNGQFqdTDTN2hTyxHRLorJ41Zj3JE97",
  "key20": "37sZeKHbiviC5ERTiPa2rQ1b5FVuvv4ZQ4F26JjBherUB1vPUF76toVAZd5L8pY4wuEh1yv1T29D9HQu4Jbu37FU",
  "key21": "sTo7At13B6miyMgauSMn6yqLVRJMXLNAG9es4NxHhJQXTZ4kQQ1sSVSnQMFW6YGktaZejPXffLyNj1ogrkM9BXa",
  "key22": "29oB8jrXML3qu1hFoJMPB7kSt6BWrFKKXrvKMYQqboKXuY8Ad9RhcMRsG1zpdnxJaiPaCDnXgCe5Xjxg5o2LPbuC",
  "key23": "gycp5nBoNwypiuitTQyz1XJNwy8Uqgfbqqo2uvsEcRiu5jpkmqHUfS1qNipWyCooPbtirqKM9jG3B32h75QLo3X",
  "key24": "5CdyXT4wZJ7y8qZssQGbvaFq4nWkd3ibgA5oDGPTH2sZnjTiffiXSraQtpb9Di5z4M3pDXeTJ3ofBPAsbQhp7LR1",
  "key25": "37XDCPeqBCEvD3jgc5qoa8TuULMULwWCvf2Zb4kABwfF1C4fnopND3fi6B3c3gmRPrZWEauxrWbZHnBXtyVVbAUV",
  "key26": "d6cA2qzKqtqSEuGBK2shYEYpnEtaqrtK4LbpSobWfZmYBFc5h1yf2AmEVFW3GCivP6A2pd5py6hrcz8W53CwjzE",
  "key27": "FwXuLFurKWcDGG1xejtRzaxh3bQvpaecZhb1p3ZjhJRHcZAcW5ZDmYSnsd2hxyqj7fvvMN6hHUr7u2bRXu2yK7V",
  "key28": "5qR7iryJSb7aAbMNFy8RD3zdZQZ2HaLCzAPkzYkshBP2zmpDjjo4s5Gb2hmQm598WVNpygLp3Jz9GrG6oBcuarrp",
  "key29": "4fi8VjP1BgsYnNXpf4y2GonBqjtwUX1bvYhasw5SAGajcLWfeUqmwwvDCZ22WhHZJr89vWwdMxGdq44UoF3d9hb5",
  "key30": "5PwhdHNVd9SkGzTZry5jHypeL3TsWsj5EzZumAsE19HPsWNABATUZ9KSSMWVWybsQi6uMsvSiRHeP6si18zQdWsx"
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
