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
    "3vGXZ4d6nYyFQ7RDbW6HhJn8GRfTRqwESkXVqL2xjEymSy5ERxHHw9WVWvGeUvur7M97bX9FJpenrVWUzovxG7du"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39te2NieNTAnwK8pztGGdEdEXREa9GDnSyXWgWM2KzTwNiuSSHdmEVvcQaEAi5bRjq3THFqG8AzCDDVAkBgtJpks",
  "key1": "4avfhg8f8dNARSG4ZvmEV24rmvBvZtpx8oGUDdQhAx1P3M3ufNLnKfVeK2HKzcVg3gXsapWGf5avveeYXGJeY5C5",
  "key2": "57BM9MgHwgyn6oWHa2TJkBy8hL8FLXtBxFEuxthxBh9NHKLjyBgCT4ACuiKjHZV2ASWhwx26boDqUsZcaxj2R8zi",
  "key3": "4uygoYXX6gg66rwKDx2wLzcVcPFqbLsxwWzZDYMjK4ccnZFEynp9n74orUeqGkpGynnjUM7Ddt73Y2D77ndB6vA9",
  "key4": "4v719exXxv6AFLn76ACcERNsVYUXmcqNXBpa19gJgYzJNS4QHXAu3cDHtANeNnj3QN7kufawUUD23P81zCyRvzuX",
  "key5": "BtZhXmGK9uNSpQswz6q4Ycdk4cYmxfmGsZx3L4LZJup2EwspxE49sHiT4k4sjiEax2yu6R8j4ZNWnWDB6WKy8bi",
  "key6": "z5rf6kdB5DcQEKwWuNt6aXCmwCBoJYy6RGAwR5KvPXRCDhjfwNghXuZU2CvuEAwN9HYMjQKYxHpvBiFe1v32a68",
  "key7": "2XRCZW5nymkHfFYiixPo79y5s4thXNXaJJR7nCrnf7AATLdAWzbaj2f28s7CqkShNwEkDMERpk6BHzUbwKjef8Aq",
  "key8": "3gBcMquFkghfNdVa4Lb2UgvkAatLjnbBRwky1JW3q9tCxa6XpWsUkKUHw6LpkmiCMaZPNcQcrnoKghbRFwA2u2va",
  "key9": "2tAqmc6XR9dzMpVUAePuP3N22wPE3eRjcm3XFHU6rTUKoz2pFuVNyNc5FezBPPDNxCcoGTkLY8BK7frTvz7NkwXe",
  "key10": "5WdA1g3RYzi8aM8xip3RzZCgwydSqmNfcW7PYcTLsYZqAdmyguywy6ojSrUxMiCXFkoHyjhtuhoMo4nHckpZh9F7",
  "key11": "2Pjo57AqLBfgHJQE8RL2H9KB8NtaJ84LHB2ULWdoijJxvBJvnNbpZYrrCmQt9dC1Q6A6pCovdYw51UFybmdqYX73",
  "key12": "3P6rDBQKRJKPGEkaqRvehCorf3qmmF78y6pqGbTEb6RFQsUTEKsG7DynjtYuuQUJGfhYphn6McwBUvWQENSFXuzp",
  "key13": "3kY1CkpEuyJBkTG6xjAC5YAwFQsZDN1WFU1tRRpicXCp1GbGzSHLbUrfjERpNzuNE8i6BRiDNKdtTqHJZUg92TsG",
  "key14": "2ULR7ozzNdLvaf3YCwCmkjzi2HJnJzEitPav8KL7R6V5ub3P6LfTk16jazgVFwpZUUC8ZzHywqbDS6uK2MKbXPAS",
  "key15": "4optZS7Sp48oUYWJJe2iSYpQYpRxJWf1eZJY1PoFhGCBPWNXrTtdEvqjy7km3TDYGt5XtHpAPHjPWpkCNeqxaKAm",
  "key16": "4n8fz3pK7Mh92GSmU8EmknSz5S6F5XVQ4mqFY5tmnLCjhDFMynS3uCP67gqdkc4rC9MUb98waR6xp7fRriPeKSzB",
  "key17": "2LfzRcrmXsGZVweywAR4KNeodRF6TLnu2N8XMvZBCuTcw2G15oHajFaKE8sbandT6bwkdpmddiwi4jPUi7oGuDcx",
  "key18": "3UjkBjZeTDaHQV8unZnMit2zuoQnmrpN7nNqLY5GLgmoykMVbb6crzag6WjUCsD9Fe6UZooF2vk2avjMMsLEmydV",
  "key19": "3YQh3xCF97ZdszDEkJzRmgR67BdRkXB8BHJa6sjWSWSz1Cn8ZKPMUTMjq1ek1bBuKBE7McJKELnupXepxqsdhF9U",
  "key20": "4P6k41cNZHNrWZo46eVVZCYa3XpJvRopcJQJtSCufyqdXUSd1EYJ9FUSeHtkhMgxr1HHiof2unxkeXmTVBEghxPh",
  "key21": "3xBYKApedTL74VPdXyRjT3Gi7ascRjMZeMpA4HH9u3W4VwHCS5fNRkqfMizGiQWbkyzE6Lj6JKyc1yHxevzH4SLP",
  "key22": "2yKt4Psn78KxhJuEENMvCwuc5ErXuHYGj4TMNQwshRZ8G6pLCubwbkTEwqtrNicky47xJqWKnqVZUtAJ8hzWviWu",
  "key23": "JvzymKDAEcJVFCuBJY95KiPxxpsHdXAUemPs7BRg7jwd2b9ifVAmsqDTvzgNVeRWSML5EWWdhhQg1uUcdvK5Qq3",
  "key24": "5KXqpFJZwhV56sS7N1xdrcJ821VJCmL919rZgXzTrXj9M2tc2JqCHUo51Lp2Xy4xnQYGDPW9LMx5RG5mTxd3TZ1m",
  "key25": "5SrsEayeAzwDieVArrVewkxoGxsHeCK4WmdXkB2UkNHwnegq28WscnKtdqKXyTvZJCbNrpJnMDPjbZ3RkC3615KL",
  "key26": "3ubZ2uFiTqUxVU9mtGsW4oSMcvxfXfKJiL2GfqV1o1UwEAt3aQXrrRvWwzmMA4E7WwW2NW5wmNKZRhrurLCMA7x3",
  "key27": "4WUL8LRXdVywrYg3wG5FsTxsVD3vqvaiNgv8dRPBUEJmfM1XWjDVPxHBNwC7SrHbBq1vE17Dw6P8KbymKqkbWPvT",
  "key28": "2eVL2Dkz4Rzu5GDv4o5urVpKFYaVVNUGkCMboZAr4xictJZ18aZEjZiEufXYTgcaDi9hXL7t4jiiDXmwXPL4T4G2",
  "key29": "D6tgZQyWg1ucbDFXcVPqx1S4KxU7HCRPoLVxkHd9tFombadLFdPhdCL9RMNzZFvGaBKvQzkU36mSfwxMi63zRxR",
  "key30": "65drCLps2uBmy8Y2xqBnZDCtewbFrZJ5fLvCUVPUcDr49tSctmGy61grvzgF3hsb8ATsXqgXLYB2WsPPSSxhdwXu"
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
