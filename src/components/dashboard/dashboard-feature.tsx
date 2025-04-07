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
    "5KvUXb3CUQbtMGfBdyoAKHyAZrgGEDyChvkzzRX45f11u1ypCB2joVdZpmwLGpu3sCzh1pvD1DxQFaf9dCQnFED3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "561Pvyar92YTRmx5RuggM81th3Ecva4W492t6jXp6AkyLpKVYGAEAHG38yxuddDbDhw4Dd8obdvqcwDvzxfN6a5V",
  "key1": "JyoAFkNar3or8hmzsL7VthXpHuBiwkof1P2AMuZZhdwtg2w6nmSk44jbGwPCFac37CRmKvML5XQiUkgk8Mk7oTF",
  "key2": "5kHufdKYikBWqhLwjYfRVzxUUZwXPcA9iA37g1KygvWUizkyLnRMqwdh9Jo275LRR6NWCbzDw13Tz1b3B4m5dwbJ",
  "key3": "4EMmureDdmAPq8A3V2cXGBt9BWNsEksFH5gkBWNKdkq9MxJnb1EFFA8TjAosVrSm1QEquiRMk1A8Nq8cQYbaprtx",
  "key4": "411uqauLHbo6XE6c1TjJPfDT6fJF6zZ6kW9pzrz5W3JStJj4hmdanG6rPbqr5VNEsrQFvvFrfGwBF1H4e1pPA9fS",
  "key5": "xj3XvHY3vPggExpfZPt7pNanhuxdX6EwWFmUuUbNqaTLrREJAy67gaUjB8SvDJ9BqM8pXakEorbXabJtGK1uQ1X",
  "key6": "2LkpgHrb7GYxRntoSHDWe5zk8UfkXfZpbxQQepGSJNpGeSdTj9cXrYBw7RAwvVBaqYpEHBG7bKvzjuQTVxfUFmFT",
  "key7": "5ZXSXi74feEgccoHcVisrNa7TSN4MDSWRjEoernAmjpE6rViPFXTfBmnUZYgYLdjbXCZx1VBkwbYp29RYJKitYu1",
  "key8": "67qEDh1bzgXYj6bt4c89e6z29dzVFzdaU5wJgVyPDUv2LSTZTkLkwRTTKRdByk3Dy4KA4AJFnWhRVDpFvZ7Eezpc",
  "key9": "46G8c1h5dHk7tPCnGxpfbApcXQungwWELQTiVWHYeahugVpQVFeJ8Kh9bheDcsYHSw3yUJQiGHszfMp49mipt3UC",
  "key10": "2BsFFy8UZe4GbsXRHbxURFzV7iCzZZFUaUpJqCAt8rNXq6FTvKj9YkHb6RtATKxGTm4QqWuSiRaFp4tToto2fduE",
  "key11": "33MAGKse2EmUjCEjsd2FFybSvejEFb7vJGAqf2VhduFweSMxiFv3tnMkAXJ7GBedHLHgi5RYdAYgm4BBYapUurj4",
  "key12": "5u7k1FGQPCkuhmPn2xGFPhf8RN5kfQLshoZ3SvZEy8PrvSyspn5iYjeWZAScYE1N82YpsiTTwZ8mU4mVLtJpKXoj",
  "key13": "4LMMRSX7DK3rXLcna9QJRPrpPKtvK5XLNukPYFN8k9xw1QJqjuDBz4zYirLbm6UnrVv6W6wStdnBzGp6zQ2hMUt3",
  "key14": "2336SBed5zcZdi5K3Ex6B4argehTQCUpvza8FmAwj9BYi4v6tBon81GSvK6eziGbXX9h1MJ6bzT7MKpcCcKCi7LT",
  "key15": "3aei2ceKSxk9rVopoyRjq23s1wPJk5E1dfqdBQ47YkFYtgZgR8NbexWWTbrzvsQSmfZpaemGMBBX4hLWQ6K7A6DE",
  "key16": "5458n7tCoa8iTCf7AyyUte5mbNFFj87Z3gUM1PHjvYYFXnZbvYtjGpK3TFcZVhGbTw4oSz1xaLD7piTLPA2Cn9y8",
  "key17": "3VA9bhu6Y247WFLLiFL2qWfpJ86hv2s42tJbB96tLjGatm7VdqN7n1wYoQnnw4xBz5vUFEF66T7auvi21vmzJNDT",
  "key18": "2PWcbVCd7z9Q1k4JThL3XpnXfRGFPsvCehb5YxMJfV73jeAuRqxaLuSa1pUcTajXpqXrzwb5A3Y1FjuDQss7A6wX",
  "key19": "29cmnAXcbKP7bEiZUGdFinw24tWjSAV5udUBCuMB9pJ6sKHnNJWFWScxGTivEd8GwCJnitVHTnbQPEsMpAWd4SeE",
  "key20": "27hoq84P1sXoNMcznHaoqmGG9ki1nwS6SCYA4GmjStj3R9G8acH7bkihLXmGox2g5oNs2vkur2nkRTwnZpofjTGS",
  "key21": "2Lo8LU5LtrMsSRQYGPScyPVscBQRWPCqsKP9L32WSJPAmt3wG1igL8VjxfDfBKJGrEAjwAkSz4Fxj2bfqdukt8Gp",
  "key22": "5JPnppgG4jTUaYEsCZEWPJ7KrqLrwP7YFXY8Q7Y4zXa8XeaitqpATo7VsuDYZpdFgZQM3N2pM31KCx1bb5K4yMeL",
  "key23": "2LMJjMX2QMqNwL7YLKdhzfjLdWKwseDGZ7CD5ZJKtuZT8YrXuZNJ6BFsRbLFqsEozrks7XsjQVYb27z21mZZUsra",
  "key24": "2wrL3GmehgoDscucrHyTb3cp8uLd1R4xqrJLNzxf5x5UsMDawr6h6SgZDo5ZjnvCwqWJDcUjyCtz48MRXMCJFQ95",
  "key25": "3FKTFqDS1LZcmL75uW4eE57capdNXdfUFAmtYb4X2NLbZxcmEDRJ8m9GwYAB9fFBobFUTbAcuvGQd7sUGAiY7U94",
  "key26": "2W8FjaYyGHGwBoaZGYvh912XsKgV1P4Kcq5xbRvN3nPC4ktbD3NBALvv2sLeUGPimpLhTpjNthhG8AySnZ9dpBPW",
  "key27": "34rvgfrj1od2xroh2cnbVJtANpj23PmuqyDfD45kWFVLdwD7EzC4AXKqpgDvYmBZV2shmgkUzxxJGM5mTg67TvGn",
  "key28": "4SJ1ZwCinAiyMAXeQ1zq6P3rcmxi9owiUpo7QpBMvNHccstReZoS88NvQMceqpE53KrxVMTAeJsNQmu7uzUAFXug",
  "key29": "4iNPUh5VoLk6JxtZe1oywtmghfWoTATJJQQGy9RgdosSAc5egy3gwCpT8kGc4cC3qVwzt956iW8kcmZgP418eozv",
  "key30": "2xtHb5Z2zkzKfQKfmKNqE9nDK372FM5hrpNDFTAmp4rnA8Du2SLvM7rw7vFjCsxGvCtQeum65SgQHyZfhrTmqpeA",
  "key31": "PMadgC2V1nkhERNLEPoMKxv4vqxDMRAc1UFYMuqYSjtXKo4WGmTyTBmXXrvq6iDQPBiuvxYotdmJLLV8uxrp7y9",
  "key32": "5CNoSP2C55omKKm83wqDmztL1XQRke3JoaG3ALrv8S1jaeHCmCVEzNUsZhGWsQMRuSpx2zdz7nhNv1Qfq5BsRity",
  "key33": "xZLkdjzzh6T11pM4raiiowfymXJnGWuiQuVia2bnbopHSfk5oAjE7xHPqjnq8wzdHXbxvcc7b922tGTy4fPH4wa",
  "key34": "4QnL1nAZDxy5kwTejvFNJLrc1geDSmWH7zN4aqaJ6ZPyQ3PGXNei1ExiUebaoa6tWPtTV26ur1B5wYP6Q94113rY"
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
