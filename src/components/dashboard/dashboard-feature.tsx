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
    "2kzpvmz717GB29vJXxQXGPFMYkkaqGX7ChB8RtKQysvepBzbeQv9u8QHcs54PS1MrPvpxy3GZtfCDPxRRkHUVyCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cJ5sEcz9aHHAbHSBJSSdEctVKLzcDPJFryyaH9qJ9JZXkjdSfXyFfk72mzjXgzKskJ3JA74iBZpPPWA1kVSR1UJ",
  "key1": "2kK3iKS5bzmfoEWPqJ9MZLEgCUFEuZxcs6GhisKpJvNteidy6macwpUCd6NeH27iWZkSwaJmkzj41DtTs5Jwi34F",
  "key2": "5pGUFFB7Ayb4JAbxSr4fWAzuEHn25Z3B5Rv4KnmtqkD41Hw8wKDtjFohJxhdtDnZhPHdcAucWipG91FLGHRe5rj5",
  "key3": "3tW5sNW36CnTDY4i2LiW3PjE98JY6KpAhTaWNbSvjbmWYzDwHbr4f1AoPaaiuWLNJy66kWFHVn6csgDwiqYK8FMp",
  "key4": "4fdCYq4GWhjkfUvH887S3uCvyHnkiX4CE6RPBXhFTT5yXUhif2B2dCCgmZXvKjZZbBYLM9ZG5hqUhmWVEuyxPZfc",
  "key5": "4F1A3ATqtuAcSxZv5udTVuF4ZeDTRb88HFmHCJA2aPCzapJNf5sQgD1dfG2GJ91dAsCHJ9f1k2fRg4ByctKUikPc",
  "key6": "5zRmYfi5E3cLSv5reiQ7k6pRehvKDfSj5SoqEHCF4ZSoUqzdtMsU8fekRt9q5UxNserLwFu4x3byZnFBxXF8a3yG",
  "key7": "5okTDonf2AaVBRxio6N9ocAwanZcwauRMKzjRaFUfh8iwkwcnyAeFh6rCbAyhp65XpGjsccme656aPqG6f5ss8no",
  "key8": "218TstArGa7dHjWuscW94cvNMFFjK8FLebHQWSPR8cN9WZ8ayFXhukYqva4PkNVhQVtRamuFuyHMxEiz4TPexcM8",
  "key9": "4S8TC7qsT4hZbbKp3pPcwganybFoc6MemyDQYSLRmmePuhf9k8qJUBMq6C3zzXtwt9YwwJhgPMwCNrPuMcdsB62L",
  "key10": "52dC2tJHPxhrcSqxK6E1bcgU2TM7fBN7HDGznZD9uCpjhTWJBem2m97yd6AuoFPanad7UzXgAzEsWRWMW3FbwAk4",
  "key11": "HgmpMzcGwEXoLLLJ29MFBtR1vLk7cZzc1A28sLC2Ufhhhkz1BniVX44yj2mH8gKogtKHDTgghRazupiXSjRazwK",
  "key12": "51BDNSht4kFaNii7p4Q8V7HjaZSJJn5PzzwnTT4VywttZUL1McHUAdTxmBTEGywj1o3sm4TgoA2zVrCzBR4vfWEF",
  "key13": "2wYGMBKWHfq5rvD7N2wFBWGDZ32tf6nKBvGFKgdX3HCU9X5jEPYozuPyntLn4L2q5BAukvEeN5A8m4hKyXcoPjS9",
  "key14": "5gamRPJUFvmoDCGnQkGYXdQbg88Su5G71hvyYrcs9qic6nEnTR96syuEgXmZbvrt3gLYkNhonyfmdzXboJfCJmYD",
  "key15": "275uPU6WmrbJZVYom7zSSd5vLEdda8TbiVWcdUFg9YqfyBj3dPsB6KZeZvVhwAN2hCR2g5j54nBHK1MPEkUfQ8Ja",
  "key16": "iJjuoxYTdYp8AJ9wes6TMkvXswjH3hEKRZmJLXteuhrNbhQ9GujAqQQn2zmeTV3WBxA5NDh2vWxFrpEAzebKBTf",
  "key17": "3XpG1jJsiGgo8Qro4tpNvhUC5yTGxvqpm3aYoaQxRzgQbAPYQC8K5h4gBvw7nSi9z7yidCQ3EzQv1z4gpLE4rcbW",
  "key18": "5DztDhroEakDH6x3uDHDK3MrX41Edad1Uzm775B925eXWb7EtjKbDJXTopwynTVG2y3xAnBx3He2wJngQzHQSheU",
  "key19": "4Sk5WgTzuEAyPWUXH1ZbGnY6eYeXNRnN6tiNa4kXvugExY8hs85CknV1JTRaa1H24PTykHr7mGyUyLj58YmCwuKb",
  "key20": "4v1DZkJm6Fgc2DW8jwPVRdJEqoUGyK2cu6zu4Z5civ6MiNraLaCxQ86jn4EeRZHEhJhtVTkZWdVbzkEwW8b9nSvt",
  "key21": "3qmL5GGF4eL1ZoBeknHD1guE9VhwiDpofAo2Fj2saUadwyisYiovXNVB4J73P8YfPR95L4rX6ixPr12BgwmmDyxf",
  "key22": "2PgV5yNVrTa6EZ9LRmJb1HoDB3ffK2rg6M7SWU33T9puR4r1H8dFb9qMCpih4j1YJjyRp6cBMqnaS3xceaSMr6gt",
  "key23": "4hE5fQAhdLmtLWzYyLCJVxGrW182gX5jMszBCDvbeHPHwcs7YwzUo55Mrhbq94v8j8aQh7c6JXuaqGQzuFhoWoFD",
  "key24": "3c9HkTEvKybmxhQW674XkL4fdLg9djmjzh6iH8dAYN2cksRasUsi9Gs1VNTbF1f4tjRbTrSu4uviCAhgYHELp9FJ",
  "key25": "3CyBxJbQP3B6yn8PACZ1bAuCfnaZdwh52VCHw9L72HKqy9HGRL2HNq1XADbXLSTDYCdP12YNkfnmQPqo5aNuYHur",
  "key26": "Z8C9tr27PT6ZCKDhwcNJwKuMZ5aERjsE2jwNBtCThtNoPPg95SWh4DQAGYsBEtoB3VXBU4odcpbKsBYMsf24sDn",
  "key27": "3gUS7U9ARU6UFEjBTc5sKtF1Q1nvrKYBZJXWdBB1wGfEFkPwiwZTqAYPsjTRMgWAakMW6xY1w9b5B1yVhNK7Efkb",
  "key28": "53BLnd3DBDYcunTezQ12z5rAzvaEhgRGh232DaFKJpP4gZ8y7rQcqJypCLzYezSv1iQVZYBUPXfg5PE3Es3wedLV",
  "key29": "2UWGwDcWvxquCv62tkazuXSsETEFN2YqqzEvJawNe7d675CUh47sgS34CxPQ6Gom1mM7Mgiz39PWfePGMPmjeWg3",
  "key30": "5p7LA1F28wsx3EcJwa3iPXJG1CyReTTe7y7yZYFyxfv8b4NgrWoJEJMpKsyDQhDVyR6Rch2WsmHv3yCvpzdWmkL4",
  "key31": "3A7S1jFgGGQnCcwbnhvGaQcCasJ75YUN8ZED1n6Wuzia2xWe39LkXykSkf5xxMZDaCZHHrU26RusB9JufkgsGvsb",
  "key32": "3BfozxNTTieVuCRuw9xH4GDTmxrDthjBjCAsPh9WSFxG5zNUsDBfqRLe8pvZBWAaqa9Nm7RaPobzCijaNPdJeat",
  "key33": "crFiSjSGt5M1PjJPFa3BedyqwPQXVPCBytbz2HFDgcFcr693oRBqLiHSgvS9eovEuXFt4AhRoa4tFkWJ4vTAicY",
  "key34": "3eoPuS7Hs7Z3Bx7K6Fjs5VdNy3gEM9swAr1sLPYBsnhZtgeoXj9mUznFkLUWVGqzHJ9eaaoutG44A7RRe8sEG5KX",
  "key35": "1PayP4uhv21gLQ3mKDg9dFHbBpv1mPKXrdNPRT9b3AiR2aZ6FUQWGerqYFdHSK8fTjJ7bihDrmuvmqsMBXAZnhQ",
  "key36": "3MWWtgfqFkbWGdjcyH9zLAwD8jUwrPDVxp3aTZdTGPiqCNbWnpAUwe6KRswYHxosLg4MzNebzhHhWS2uTpkQhRJ8",
  "key37": "4BA7STmGiqQPBV9KGne1jZJGQNdeUQGEsrQci44RiVsWYNd91iknEaCSfbsAFL8EJ7WZJ8FvT1TtkL7ihZBoYSfU",
  "key38": "4BwhuJeXYoCY4mXfYkRw6SNHiTLXzp2QtEWWq2s5s5Wpwxe5PZDwBdtAxR4fhYPxp8cEwaxuGwEMdPNzQkQp1NTG",
  "key39": "2ABgdUJfjaE5ssFhwBzQAKohnuH5V57p3pZ6Z3cdCq6AhYTokSgytG2ghK7rkU4SoR6gCPmeNiMDnUcA6JPTwRuB"
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
