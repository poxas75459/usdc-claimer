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
    "rWU839eaeffHZDYcDkrSQhPYAJfECSN55XETfj1ZExh8Ddr3t9GbLhzNu2gVHkBua7GpKGtiWexhdMmbDeF1pWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5783EfhSWKNJkSoe4yjFRAjpX9VhruyFLWtwNFiQ5GSS6DWWSdcgkbCqvXGpEQh7FLcHvgMTJ8YgkQ4zwQrXhng2",
  "key1": "4jHWM9vP9tt6fy8ziNnrMSVQ9h6whN7KHckf7AVqNpBubnkmGMEPkxC1SVJpcLKaWEHyBsErmTVkYYHDe7i8a7Hk",
  "key2": "ov7gbvKs2QgzBzC2dxxsbqQrF999vRpaWjiMDS5v7SiB2E3NTrVjDeypMN6gSUfcP1WYWof3hX1KXt7g8gt2yzs",
  "key3": "3viwPUJCsrAjjcSzUJfKWvS36U96VxVedam7zi24nxMznx36GHYwsWCqXf5D7Z5jBrR85MRX9hp74h88Gd9xNTn2",
  "key4": "4u4xCkVrEWXWYnr7g5VVKhPAkY9aNZBMG9bHtTe1jhrvRnR52Mivs5sVpgcc9WCMxabswmkfBYCvvwnCyKDSpJyc",
  "key5": "4w8mqkSBdyDE3tL7hjjgfdmZHnBTBM3Ct7fJMjJ1QkyWuPrdxijF3fmgutSNj3seu19aENakBk84Y5Ev8vyj8DYL",
  "key6": "3kmTwEq6UPJN2DRRfCd9vFpDTaynSwqdGxTqpNjrRkQVLNc8huHvuax2PXcqTmytcuCzxouYbpnRsPT3tCaEKiQ6",
  "key7": "37YtNtp3VgWxBFoaaTQNdjtdx4iZBkacdfSYcvBgMSkLh47e4gsBFT5trjep6TBH9a1CxmRztDGUiZwCd1CEHHfg",
  "key8": "4mh7Aaeo5x9RFEVYmQmVvVMHt2ArAWCbdYSZa9Zd9iLrFHKtrGfoanqSREuuwknmpWXWopsW8WYUmyx1VMHSte7E",
  "key9": "5BfvXXRMrpj1Y4wYkDD8gwJwCtphaKxihBxzrVxM7ca9DQgqjcM2zMPgbHtLgF6qSbLmmc9FLKZbNYUEBJVaVF34",
  "key10": "2ZnCE2SFXUHmu7wsSx3GfK6XEw6ZeNDhPws3c4xQtScYfTgSnj7TCXvpMPnPC4RrTzRfYsU4ztQSxRB678h1BTDT",
  "key11": "3Qdq8mnKoDyum23PoSpRXVudRjJtzgbyGoPUuegBGKrnoRKvr4Pn3fm5fn2YHqixaKw6Ys57HwSwh5SQkj5xgQ6g",
  "key12": "fEbyajhenPDvgqQ9hjGJEJH4Kj5WP1EcBDN7SzDULh4CEf2hXvypwZHWbFaMDzQ52WcMbbCDJ7CDPHdqXnAd3fc",
  "key13": "4Ktrt2cqy3etGhbHNR9Crqp1aXPJ7vxyHHPed9m6Udbtvmnx3trUigbSZxRFVyn6dkZB49qSBGV8KFkx5GLNpuue",
  "key14": "4VQ5w68BCdF7hGTTHQ2EGwobXA9HvD5UiAGqAEeLwckxsNyaXPmQC1UeQNFRy6WeZ1zQRd4Hon8FsyX3t1Gw31na",
  "key15": "24ErGxWb9YBddPxC3YXgBexpJVofLbPx9tf89fchgmLBPaFQXzqp1F9jmgs7Xsph8Jv1y5aLKriW5Uoqqr7YVUhZ",
  "key16": "2eU7zCcnRaC1QUchWGR9BVRrRRDZfuEGPqgpm8ANMQuL6Dpf8RDGhniouTeHRFdCSw4A1n3kPfZ3vwW6zCGkP9NV",
  "key17": "3E3JVRSnV3MLVsWE5wKUjvNB24r8Boo7hdJn6aAH6eVnHWiyAp7crgfuN42JBjCjNJhypHiqcDLMVQNFsWjFLpUK",
  "key18": "3M6KSay6b6uDGhUgdavmLZknGcx16DFVHWLGyty1v1u8HQZfuF2i3NsUVm1vYsjZuvhQmWAXirMi7WWSyRG6omx8",
  "key19": "5nnU5r6F4Pe9ciknRJnNozWwtpaa4qkEYbpxu1jNPsdF3B343vsHsj8y84YgdGSjf2UpUMKbjjLHWigYrVhkmNwY",
  "key20": "3FuYFyvZ2UXa3ebmWn72UAVZDAPwqZvDejLhBN2AXXytEM76yfxXYJP1cdpNFujKzcAqoSLYa7cCd7ua6po1WYsE",
  "key21": "5b6oYwQHtAV6NdTCxHBV3ejkc4zVj3cb55Yj3XqtDiAWjJuR3jb6LTCQ9gctxXBBYXWjGwAhLmt9eM9q7bCZ4bn2",
  "key22": "3WGZjgswjyXYdvjMny98safac95hytDJFNgQ51jKTrjwbAczeXfj1WHT4LwY61BGpmthT2qL8N8VD8WARPfP78yu",
  "key23": "3oCAqtpfueL3GWSTyaP79sTbcNPR8yZnrwKd7fhL8ZVjuEfGZwUCPEsGxT5HsUAm9wmqwQNPrbVaKigHbB8e5Ni6",
  "key24": "4BqzuMybABgpiucUNfjtx2FMKuuRHGEw9Yc13uUNy6hr5NveFfBtDaKww8G24P2dfauQq1RUmBcJDY7RZerFiRWx",
  "key25": "63RkoR4bdfYHZVQaugoEAHGpW4nV5HhoYp7bzDj2oXiXZPy1FixF35PDdUT6sB85pMfTJWNNdwberFTQxRJmdRfR",
  "key26": "3HuyCLrZ6k2g76uZAQFGMxehh9Zhr1Qb17tphF2yypgfyaqGSGPbaLHKc1sWmJ24SEokcc4wT4MgXncUyqwuBxGT",
  "key27": "4rkvnpFDtQxR5KFYEDVgfuEsmQVcTQduHH5t1pXtRZgMZSKnzyfck1fqhYcfZ5a8hqkG2eVxLpKJitJLaTpQYHxf",
  "key28": "3VAjhhnT4PZf6h79vhCGBwP4reHi1RtkjCftHURJQ1ScEZ9E9oBEXSo6ZHFuuHWVBRWfE2rCNquFNPtfVF98mWG2",
  "key29": "27ibWMww7okfCu7bWY6kFtW8BMAdJxVMb6WYwhZUEYYXUN3rXksojubkXuAUtx6SyyA4qkTFEaMAoj5bQMJJNNVz",
  "key30": "4jCdQm7tc7U2dcoCBW7pxud52LaboCxWPxHxYxm2xH17qJtBMTbG34ywGZuz3T2gN9oSwVgbQ1Rc1Tc8WhpdYXTF",
  "key31": "3GwnUSwSjkGzrdc4tC9Re7g4rgKAdwaowdu4EM8AEiEVReyRNakp2YvvQWSXcWeZSDrzmoRccVzs9VUo2tw42y2A",
  "key32": "39h3HKo96XzfutysKugdpj1xboChR7P9NxsdubyF2fsKU1s7XAsVAK9rMYRbSh8Yue998Kecqak8izjkAZNc4YQ5"
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
