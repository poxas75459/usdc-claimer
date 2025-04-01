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
    "4dVWwRwSpcSRZbPv1Hns3fJNZiMRgNjBWt1cCYDYqv672BFW1CMZsKeimRFdLt6Rk62CxYdg2ZoWzDLsPxwLBNEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gYmycuSc1JEgn29LdvFaqzNiQZzyAEZPUTgpG1AEN3fR1AdAoetBHAf4jgKeaRyHvU8jeefwQ76swKA8zPcCsdQ",
  "key1": "4X6KUJRBi9LQqvagxCCRA5RgNEgBCEtYm2Vk9wxxAKMQuUFmrMMH5VVbQ8RXsU69WnD7AiDUD8DeifrFzTQm5mcX",
  "key2": "2cY8Y8ioXRN75WBihadtgbJyMJZsWcZ9Rx7v1K9o4o2A7mWRPoV19vpQLn6yppCvuuQPNLefDnCnBFbPQkTFKAfw",
  "key3": "3RWxPJw5pRELvposJwVJiX8oJ7svtyMCzmtZYvtvKvDP27W9LCfm4K2PK4isg1yWZDyD3gkdx3EqNkqEJUXMRHRb",
  "key4": "5DJRQ4TB9jdvmsjaq2jHPmwtZcFG3QtQptmMVueBDeyi7PcbfRw1DxEwMvDeJfTMkRMUQXU19xbZN5t8hK7ruTWD",
  "key5": "SoVjy5hDuzyHgamj2P8XzjsAZD1ctPKuKWeQJbhLomGVByqpqg9appaUNePRmZhy5vuHw7jAwx7pgLdVYXrwtsN",
  "key6": "2GrAbs9PLPzN4tu5Hzd3XE81uhsp75dUJU49kLHYpLjciHJC91P3Fb1EAjysBrrpnRqYCBfsErfu2eWoMUCmCgLr",
  "key7": "4bodtELMFfKrhbQdABGy2Kp2pSh4Vdwj8wjhTeQrAFH8KUjU9Rf2rcg5twfT2ziknDXtFLzuECG5eCScPprBQJ1N",
  "key8": "CyWXFKfvXJC3wvfAhoRpw8446U7DC6SdRoBB4k9XFse1sXLVRK9zRJtp2pfU9LXNz1Em9ZMwMZCsVskY7dwMxBh",
  "key9": "5ZuFHE2jpivuTnjiqpzxv5og1kSDuUb1MJXEf2BvhrVumE7w2aikFs6aAmfWPRnYHsTXY8t38RcoAwnzrRhAHUu7",
  "key10": "3Pg9dwFh9DCvqwJNkkX8sisE29d5UFmGae1VJhNnbVvQQx3aSPT7DqY9zN3hYxnEMWHFgZggLG4nhhyMUx5iEKiu",
  "key11": "3uWWtq5sRQoED6H1v4ZmmoxaPUJaTVb8BTTfymLkquTXzdu29rr4RtsJeBQgaCSNyz9hMLtn9ax18WbPrVAutkzJ",
  "key12": "51HYdiTzkx88PcU2RkZjFhFmTcJ15dUCDPR9pVGUgvsAMunGRzHPZc5CQzKQg89Jj44rmeNiWdBsin8g38U2KgzR",
  "key13": "3yoS9YDhJpCnvSFKXqFjjkCuiV81zmg4ivC61DKTm6U5RR8WbbzgKgvUUCxohZae1YtF7vekvsuq2rP53MgmpSZA",
  "key14": "4YhZdvgUpufB6MFoQ7McFs1WEHHTQf7iBaLq2uApjNV1q3bLaecLprXjrAQB3TE8THo4GLaoWPoifJYtSGd31Swf",
  "key15": "3vCDYugNrgsMi6NJm9JcAPabJgMmfBUe1muyC11PdGxqqKcv8Yrrk1cNcipjgtnxgfe5YFR8C26qzM4nJSEpQMZE",
  "key16": "5HK6o8Hk5oHZLZGqyCLMEZR8MrEd7R8Q8zczn1BtD1QWQEGpFUwJNY22TEaAFRdCLSWJ8w4ErEWXXXoqktowuywB",
  "key17": "BYg56fpe6qKjUazWHFHUA483ouoXkCoBmEpF9ZAhtje75BrV9yyL9jS6P7YvK4UsnSkm2mT23jhdyFtsfkwaGhg",
  "key18": "4Q8oE1ntGgBCkDtAAxDXsaG2kDb2cuYewLnk31ncDPyY6sk9r8kpax3VReZy8KDKW1HWZZmvC65JjRZVognX5Wf4",
  "key19": "5MWQmCKuJ1yPd4oNwdvxRr4F2Czbsd9hR6LszGVfkYxm5fstsmy8rEbf9FhxpgQGsRTggsbVNxhjYz4yu7G3HdfM",
  "key20": "581nxXDksJfMwtFYeW6VCksE47qT2JgqeU3YqMZinP6wBWV1NSkCWg2vkBwNeL3jdq9eHmJRhroaqGPdtUF16PW2",
  "key21": "5eJbWnf74Y7WCrLL3Pv1GzQPh16KfcfCqKb1R6WHCXeSntFzqs8FE19zbyUVt9TNw65PVLKcqBNL7xXLB3m9kV9Z",
  "key22": "4VwjEgJqxGcdB7qeuAH3KezegiDAku76CxiiXV9A42hpn7mCKsCaMRTZ6v1dsqTWeWSmLmNRppvQCo88vDKPkc1h",
  "key23": "3F7qAvi9kGLSQudMsrft8hQrNmAszGvzFreQ4YaWG3UZjFayrhMMaaS5c3zB2vSuTcYoT145cDoosi94QkHb7XFw",
  "key24": "5CBcijk7SoL3YMu8gvui4EWaPYMX8A6n8x5H17bPBEq8q24wZpBnkypnu8DifQW6mF156dHFzevBWi6mTdzQxW3e",
  "key25": "MTJsYhtWRm282MopYahXnQX1N6aV1wWjfnyAXUaRfUZcJDXx8zYJk1f5VkH6vsVJBDfSWdjrbfvbfiE52rrUQQP",
  "key26": "2AsGRu8dQYs9PMAQxDzjnFsWbJh9gtpyoR5wooVMqbfHUA48Y2GYRib7dNBFXwJcvtGejW8QH7rzF4CocRq5rN4S",
  "key27": "4kfowmK9snxyoFokc9SwY84g6D8Z9zSuSofChKEhY2kAmY1LhpR5yGrLftsJM8MXeFiP6zadrzgg7X6w7u1ivZ7p",
  "key28": "YemWvEjTvvhYN2r9iCjwKuXMVSd9FVzZ3SQzvwSDY6VnNKj1473g8WrAYJSfwTMKRhKz5dsuGZGWHUcjJN79hmz",
  "key29": "kT2Jy3yWScBdgTTsviHPQ46R3r6FUqUx99sEhJfmCSxQFib97xGRW7G1jsJabnuYitcmKLPg9ukGt832MXpDkoq",
  "key30": "3MxXpuD37Yrr4MqU6GJmNqcDMr3uic4UvXaWhiGHJ4WkpUNFiHHHypZZfYnHFfJAWp3Zya452MegQbnLa4jaB9hp",
  "key31": "4pp35X6cwyW8WtbdC8tZdpCUheHzjw7TCoLMw1RWyQ5fYBsg6mMNGKPvUMHZno5dw6MaURRULbADseG1twgucJKd",
  "key32": "4BAcQPwWeLcJRZjmjZ5Rmb3YEStNLUrjA8gsSAZaHe6mGHWLnD29QhDvkBeHcdxox9MU3SvyAoEg2ejfvT4deMyz",
  "key33": "3tLY4aF1va7G6wt2HMvfcax943knxb3i3g3QPnxEd9PzQRjMedeSKgHdRVXLEuzuTgAXGWY5KZJfkmTw56QUKuRy",
  "key34": "4SysXdYxpHc1aHFrSVQKFFa3Ug4uJgvYs3uP6uBxT6fbLhkYWfWsvyensh4tMWSrYy5vz2xrrMPYw2Lskmn6KM76",
  "key35": "2367Mf9dog517fBRqbEyKU1V3ukHgRXbTipe6uUPYuh4QTZEQsxEwyA87zkZ2wXVL258NFWJarhqLfQ5mNASn8LD"
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
