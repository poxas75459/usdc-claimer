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
    "P4RhNDtCKrKx2wh5f1t3psS6UaHXsS7hNVmRPvNMTVzYUzi2zQpXBV6eooerM5iP5bCJa4jNFsSvVbSdfiEMye7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58sFfBcGzHJcGH1UYKfvdtSFbRmoEYCp3vMLvAWnpFN5fjEDAjNiPvJegFz6dfBQHKn8YRoZZDrtcM72NBxPiGdX",
  "key1": "2WMUCvmyBDu8qxyEwhpJQYKEDtMCr4Qir3igMhnkFKftRr8gznQc3n39gfcNQcWgBMnAbmbum1cs7oqyBTWZZtom",
  "key2": "3i5S2y4niEN6Pq7c6VPcbkWyaiEJ7jVCz7wxpZChwyMaH4sC1o6fdvGCEH9HWBrAyiZQjvq5CXhWhjr1nzGi9eJp",
  "key3": "ayqAEU4GSzRcYGB2pP89tZh9vtYq5Wuo3JnWCuZ6iyA85BdBxNE9HoXHZoyuUonw9Q8c2yPLDbdTkH2FWoa1b57",
  "key4": "3ruQe5XstSNfpfWCM27bVLfRA5tyzpNN2HEKqQA8Qw46h9pKgywnPMquM4FVVFr226ZiNNhim2gi5Eg6MyfDx9FU",
  "key5": "3Q7sb6iixsamhS12xbLdHpj2TFSWZgBUUcem3yXD8G5kQd19H13LiV6YdWysaf8Q9pJUMhKtnQWWfrT2rWk17XTK",
  "key6": "378CEHqBzzHu8eY1ASAngezERW5Hjwqi8fHnJjEZhRMtkjDoohHT3tSGnZMCZTaLQ8HvcTfbymW54g265LnL784i",
  "key7": "2su35ay6RZ9WxDrDUNPif2qk72EKNvaMzVu9YGAGmW5MdEyYDrugAQLyibFU1t8rEjUFHzqS7cbHqf6qX7GZv3hJ",
  "key8": "4pkxU9urPMbbUtM78q7LDZZArh9TV88TF9yPjjkCknBs1NkEGMuTBtypofHuGoSm4t46XBsAfvaLmiXTchnBZo11",
  "key9": "54upB9GfWz5JPrBbajh9nj4zh3zxy6fvAb3Zm7yzqZGFfGWmVgxovTNHPudNJdhLLoMy96rhWoTSZKrnizcEJUdg",
  "key10": "3BGAjFHHWcJHa47QHbhghmTg8jC5J8jPX8yPVqFWSfhgeSkBQkQRoUgXwtAgp6eQwknCN6CsTv3nHTWJBvAumsTF",
  "key11": "535FZsKTWDoizGEdhy7pCFMJ7LyTv94pJVwVJbJSxWhT3Nh9J9xGAiPQNqEsUVDk1jE1WEZAruSZipisZ1zQaXUr",
  "key12": "o3mrDoxjXJzCUpiVHQnc7ZoW8p6L9Di2zZnefibTCsrbasuxEGLRtBA2RZWC3z39x8BmAhyGRzuQCRPs8XSeBLM",
  "key13": "3kJJk6AEcQhZQZZD6oD6cMCDRppGjkPPFJcLPyCHj8DZgKfNJXi4tqGNMbubqwEw4K3QZYQXmW5ZMBb8WsRfSbbd",
  "key14": "2DUEVR8A2t6AodWR8Fdx76n8DYF5wTprvcof4BqUhxQcPVxG3fMHptWyH5WUp4PzQbD7rqEqdxQVT2unqUeQJLoo",
  "key15": "3fxLLVGh7BU3ndyJeVmyZTyHLbb9X1g71JxPoDiTibZkXNwEivXPkuej4ESZ3VCwQt8HVciUaLYDvD7BV5QLqhYD",
  "key16": "2rRqa1ABuDUwCC8NigngvE6jKtGBuhbBq9onu3jMV22Cy1X5tcpDAiK94s675T1MT28bBqvG3319BnYbW17etNTR",
  "key17": "2ab87vUHtAbt4UtTzmmPCsA4TyVjjWiHJcFXsjvoKrHPrjA9WSdi4mS7Gqj9q7Uv7mfAoXEdLy1u3SfJQFtzH7cB",
  "key18": "24L7rjMYrqA2xCdqTmjdvgFfY7J4Tr4iBfaFSgeE8io3kvPQhn61JhUMdo5BNpQpg9ZYsaxWA4b9qyspidSh5PvA",
  "key19": "5VWMatXgZaVsMVEHjLNTdfDB55RBo8V5F4PvutH5jKkz9gUPo7ooWeZcykX5hv2YHZNRUKRBz3HJb6WevkAn3J9G",
  "key20": "3RG2YUnavSCE3MLKjgDoA1Wr4apNbhLk3nJvDwCDqw93Pb9jY3aNhqwKb2wVSgA1SVDDSiJ2o4vQ7z4gMbJrb13w",
  "key21": "WGyHMP2yxdRYDaXnrwqoXpG7ina12mwY9sGiW95DFSGuBSyfLYBdsv65m5LgzMQDK8pFA2a4yJhaprgaiPx1FCU",
  "key22": "4a61cUrDq2ETNK37AqWRyeSbhqwMgtQWHhLXJiE63erJF4oSd2atpYzQWR3Rdts8KDCuNPnjH1TZtNa3evSZ8M3f",
  "key23": "5Fc3CFSqRawV7ZBeJ4yeCuZPQ52gWeNUAxSVrSuLLMf2H2BDy2SaxT8WpCa93AszAQSd9vUg3WpUZ2XU6WydyrmR",
  "key24": "ACtnWvdoiWmMztqsuEp52AWhCeg8ujKpweNan9rWzRysPxZxRJMdyhY6nnXkWwJkVfU9YLvQEqaWpW5WLjm6U2r",
  "key25": "4pugQ9k6NTyfSRjtr58MxsT4zgzMFuYgcyeK5LpjevJfAiWFdxhGk1iciGuVpWGKqj7yxzv7U7YZhURmb2pPua2b",
  "key26": "557ioA5BiVgGvx6thYmVFf5HMCj6orMPBzKmH5Ku6kPvuAYbGtRpWfDqkkU4vGGvxBfJResKwDAJB3boZyQM9K6k",
  "key27": "5dGRgYPicNPaVMoP44wdnKzscVc5cWLvbhhzu1x6jzeLEDqAbVuemWf4MCLfzFKU3Jf67mjEBYSfLi6MGWs6u6gv",
  "key28": "3nf4yj2MJvyrv6uH4bz3HUTncPdnMuHZTDsjFxsBDAcVdXH7PGSoo14pJTvSj3guYhu18BhdcNHb4g72g3pnWj1s",
  "key29": "5rbisabGZnp1W5zDy79rZ6uPs4y5f6EyLMw4cswrLG5wFouwnP4TkDcfq1v7UBn8FnMs8bsBa8P9rAh2A5JMTh2C",
  "key30": "3kK5atWpWshUbNKvSNg8UxcNzWtRw2qAx3xh62nucpDbkfHyRcyYzUXx4XxaDN36gYsf56S3rWz4jMJd3ew4E2FY",
  "key31": "56DEeMP2GcUTYwhVhAJMugkEoGWwYrTdFQtLQbtxhabTcoP369RZmxFiafv18HSseUxaFkjMMU4eCSQqEHPcNgcp",
  "key32": "3j5cERTceDsorBiASmEVntgSZCvoEAB37LRyDdqZWCUtCU8kyd1MHVmFL6M3tpa4kKLnF5GYFnxy2drkBntDHUcN",
  "key33": "4AVJyZxTWcyWfFSSa6prcrfdNR54WEHxGH6eSa91uiSqh521fKF3jwmqePWiy3RQtPiRGP2T8jdcfN87gkgTugn",
  "key34": "1hDFfdYBUKyk7KGpcjkjcR24t4XbKSmhJWenr4sW5vmFsYzFvLFC1NSUwyGtuNFo6mXdWeYU5yYR833bJp9dBiQ",
  "key35": "4iQUgEWUiM1pn41dx65BPRFziTMRxFKLeqVcTo9UmXEoG6SPyqjMmwR2NSCiKgVkCxG8WsFajS3tvnU7uw3psLkV",
  "key36": "4P5EctQNDRvVvrxBEpqfnZ7Gav7JTuMzYuNi2KY4RofmAN2JL1vGjcWVCYmKCvbNLemNbHHuZovZXUrUHmR7Zyx1",
  "key37": "4Lgfgi7XJrMPUFtq1o188EvhjE7rE53i1THpmDdn2VVXrJZqhaiTTFVXJZhamdHFBwSAfNjiFBkVF7ckb5LwY9z6",
  "key38": "5WhnKogdBfkb56y9SGnrx53YbUHUb1ED4kQ3UXFvuv6ZrdC1fJpdDZJ5GEsn1352SsW8GXupDE1FLpxKankRbyD1",
  "key39": "4BWM1L45PzTkQanbsqYaKWErQFVMNVnEuRDrcYvLJ65nNsDQgYgAxWv6nV1TYfjd2Sf8ie54WnU6U8jGtz42WF6y",
  "key40": "4TZvKa1s7jkU4wnWP47ZxnT3viCvPs6R5BgQ2HcA1brsEttXvd9mWK4dnYRvV5YzzFWGHVaF3cwqLXbS5p5smSpv"
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
