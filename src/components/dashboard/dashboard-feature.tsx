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
    "xD2zXpYdQAys9wNcEQUy6zYpmm1cVMrbQBae6o1DpVZZ7VCRWAKyPsMoAA8p1hWZSnLrZrWZpgPVWgv3qk3GjSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dcxwy2Ze5TDMGgjBjUeQps5nJb64o5EPuyyUjADabEMpZLRXAYx31TZxV1dRnsKMK2CvQrEU2NRLBqn7FgZUyeY",
  "key1": "5zxeoDeUodJLsDrgeUy4js7vcmq1HEYeuNY4zHDER6ccD6eB5wKe9yz7BR7G8wRboQAT3g9gyR3MAkoZsUQ8ZcQx",
  "key2": "3SPTVJqvC3eh1q4sBz8p2nBgrz2HBjgo9V6mVYjJLsXGcLNdvV71PvbhyFuxmF4zAR9rtVNYfsgFZMSEDeyug6cV",
  "key3": "2A3B2a4774FQATaHbHSoKNnnZ4YwrfQJvZWh5F2dXY94VCxU1UUnA1NhafjZXEQg6bhsHLchn9dsAcRtE2JQttLW",
  "key4": "2uZyaoGJt3XTAPnnudLe5yLBr6K756NwTP5gFkVnLqYnqg28ubpacRZjsZQzXuYuho1aQhjkzF3MzTNSqNayZQ2R",
  "key5": "RNsdtksXpvgAT77aFBNdLmWqGMMiDT9jLjzijbQMGRVWsdaZhppJe4tu58GQJeYrKANAhR2kwM8n4wKdEUYYZDE",
  "key6": "CgiEsRKokoGjPvK1DNvvGqzQoev8eB3MYkdoZWjGY6sAgfPF3UoE548WRi7hCKS57uGBMBZjwokgqYCTuY2NVbA",
  "key7": "3pxPNW1pEHXSiEd9JqFY7ejAovytTbHnzYMmAeBYjE9tBH3u1ufVhng77AGXwPkAPL3WzMAEHjJt81z2MBi9knWX",
  "key8": "5xXtrgKgaBjBmbkiRHoM5c3d8W4eRGhAnedrsbcsWbjTyrdjNbPrKyGoXRQFkvmd2dTSGE2BrQU5YhybWd1q4MoS",
  "key9": "4S3p64WTy6EAopeZNVKMTeVCbj1YDLPybCwB8E3fPx1JWQ4mKQxXny5SW7EZq2gSKsMDJLu9ophREneWQcFsvNfx",
  "key10": "3RqFg6XBPDtEewAGNTkngYNwrBEx7PPTzNAcaBQAat1W2E2SLQV2rgZTukdfwcGW2TvPoEepNW1WQv2Qmo3Y8LS7",
  "key11": "4WqEckQSB74Tpu72GsaRjatbntr7dV4tyh9T52A91FrxdDUqGnuDRFGL2zUats86B2kUJtkNPxGNhANUFAgJQRLt",
  "key12": "34kE7NTcxt4fh2vwDD1qy6hFTtefTHDn5sBjx941PDpjRdP9ZHwf6yjDGWqjZxbtZv2H2Wnp7cGxRZ2qshuCzFgs",
  "key13": "3wkmNoC1yXT7LNBPoFAgBRvj2ZfC8B8DzL6GYKNtwi2V73sGTrT4zWcUkCb2ShsNEASDhzbFBAyFUUckQtMvCTJa",
  "key14": "GCvo8VL2jUHRGMs89FophL2933mj4s4aC6WSPYnggr65aJPRqGKEwc3MUuHaPohYwrKKVuYYbqhEcToK9zXcKzf",
  "key15": "2rq4tjxRzw8hgRgcg5WtkYdiZCtaVKYJZQKKX2nrdGwHbbzE2AnzPhg4FLzBBxdoEBjuD2wN4u5jm2voWaSjGp2t",
  "key16": "5t6WRZpsUtJ9a8YWGZBgqdMEzJfUuEmdKo9xTHFJUF8x55KacJKr3ymiYGYZ6urmQRXJpFsbPz92QXqMsRdvDeZP",
  "key17": "3mG2ZV2zY9AL1RBLa9Y6hEpR4ke8uHjVzjVw7uxrCEJRiaXt965vchPm79g3hZzjrVZDoVe8f4v8jB4LWXw6f4zP",
  "key18": "JGP5tCXiH8ihg9D8wo4TBqVJqzMNAyihRLRsJJZeqEb5mCVNQRJzjUTTn6yMQXYWHpxLtofaXn8UoxCPMyq6Le7",
  "key19": "2zhsXpntcrQDutZQbHjA1ikYh2bppErftsKnjF2s9iwFUZDubHSZNK2CHs9y9fxcQfxiCQjJUKrbZNfPjGqntkwF",
  "key20": "3mHJyTNcKc9GCD24BvgNhDgCGUTirzgzKXvS9jdASkpSxojKvEpzSf4AFyvH97td25cjWmSbsyv4AXqD3n4a2Nnn",
  "key21": "63o787XnFEE8GsTrqZHGphGDTWPcvjkpbEUSzh2r3ZmPhWhFzG1C4BHejDU8Qc4LcnbmzLswLmHwAdqYZea8i7Vx",
  "key22": "44aABitnKzG4c8tHaKUdonZTsTNB2mAkixw4RfHb5REAnizsSctPQF1TuZBrxPpEWQg4y4pa3bpJ21Bju5ku5zU9",
  "key23": "QyLyTwv9RUJGpbgzYTW6E5FRqRLyBcyfmbgJY4AooDmfVmyZLDPVQoUWxhFieTeyHNnZLMTaANc9jYreYkeYKtn",
  "key24": "3ospS8k6EmKbsYRWEwA17sYuE9moS3Aa2mGpKLLpJcrb7BdLUR8YmuyhWz348QUFKRexyPVhfYBwmmHRGoesmirU",
  "key25": "5f8F5sSwvZCeKCME2zJ9w7gCLqhhUK4UHZruFx7J79xh54w58jVrrERMkQCeAFaxGH9r88P8BbyxLSh5VNysKFz7",
  "key26": "5GMJDhUwGaLnNMjfd8ALCyQRor5TgkEZet3DSiBZ83h3xc5dJJsXdtp6FXfDnfnaa4EtmD7EQRh5jjofQzB3JCcm",
  "key27": "4mF2n4Y9LkGPUmz3kepkxFEWjqw5wbaGroDuTbdbZxQxD1CsopHmfDJab5Dzw1CpeSzeW1o1g2YcfH1mLyHtxFhy",
  "key28": "e1RZ6rjZbov4Q4zTJB6bxh3o2myXwnxk7TSq16SJqVWC6yzAFJdFy16uWSF8Zxy7zSEGTGjeySyxnyuEzFGZ65f",
  "key29": "4kLEcSYRAAUwbVVqtxXa54nsYv2jHvB3vTqeU5srpxesMgHcbYL2nnhzi7EyLdHnsCvwfKcAsvqjvaqgMtPAYUcj",
  "key30": "2nYuvddhHwBjozPedgcVAGpthMLiz4jHns2dfbL9Km8uVEmMdu2KWw48RNpe5Jef8mfdAErM8RNGbvekn6PCSbqu"
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
