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
    "49yYifzmaY69yzM1CQXcQS1fSmDV1cKVgBLoSfbTwq1e99et5yLToEqvWaiCfU57ChhpXksMahLbNd6QKGR3QevQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42YLRGUo4dzrnHKesyE4SUU1oiC7h2A1fajHkHTigtXcg3VTzYJiZYdWaASsFbVhLpWCzS1UTDkDMNTGQ26yZwpc",
  "key1": "3KBHUxkLUZ5kmTEHcjcyhR5kB8UowGGnmeUzBMsmBtCa3KHThRhEzkH6QDVpMi26X7yrUCm98TaUMAi3t8eNEMnb",
  "key2": "4uZ3M7i3kuiPnrTXi534AifcKMXqZLENdV46DT4AvvLtuD4EuusY77rie9zEYk7GKjYddirAtFjGaDvTuXvNB5CG",
  "key3": "qfzi6GDu5QpD4XACF4zFPa2cgvQmXvSTPYUTebYGiVoarzDtDMrPZwVJZZyJog4MQp8SHoWPQ9RrbSeZv4wWPps",
  "key4": "2dcyZjrf3c2MVMM5g5aw585wELGwyFn2Fs4F7dBsQF3AjBZYfhsWkSmWxpWfHMBATooBrUWrisrqQts7aa8a58sA",
  "key5": "2TRwH6FbGthjbd9ggnHksVrNRDLazNin5BGtw1VAw14NUcdQDYZEgx7sMZD5wvMPFfDRqKUzLBzBkVfJ9SgJz5Xk",
  "key6": "5ftJrfTWUJt6bCtEMTuANpi1qh9jd7gbTwFyMGzRGwB7AuGodffADJRwA5RWw7F4vJwaVpUxE3sQCbjo6EoESv2s",
  "key7": "TdJqPrxcStnEK4px7yqqwDYcK6fS2PgAjbCroKe8QW9ZpJEZn7NcXLxhAW6FoDwtXeGGmwQJws3NHNuKv3NXnv5",
  "key8": "46ceeaSGBRUaK3tiGJco97r1ZpR1LMUjXXPT5UQcvkbxV2nCRNQCarSw3QbMhLWwY37TLmCZfd6kRgGHCAh6vpvK",
  "key9": "5dYbjDf3QCeCQQ4qBEsqd7CxyCrTSGYJV1RtF4MkcrGtuJv5NZzwNxAC5aDr2bTDMsoxXz1Ey6DPcX8PWdCgWgUX",
  "key10": "28RL3Wi9NqGA7fbWtkFPtxSQS1HHbCyihgcv3xBtif2LJ3ndJZfYYBVCna2HVsRcvPygSTte1CRKwdf6KnXyvHS1",
  "key11": "41T7DME8GnDBWJ7MX2DqvXmrjrg1P1jzD6dGNDarbFwLXj1Wp39TxEtMsxdgd2najpyhdNYGVsC6gb4pq3nNh2ta",
  "key12": "4jNq1LJPmg7LZKbP1skiSRhp79Y1bEbMJwomQNQ2BVBQ7z5adKESr6dVUTSkZ9ShQsYHmsPD49vcSM6CNZZLQ2Ja",
  "key13": "66JjbLPJRDbHD1jMwzCMJvuyAAGsseCx2JAyCgk5UzNZAeJraRVoHDmYUS9Bf28CVPUsHtVpYsJ74Nkyv3fENFva",
  "key14": "4Bvh1aoJfquTPkKa36GjqwkWfMevb5qq7JKfBqyqF9Cr7ja7jE6TNZMUUxPVjX9FqZAFigZucpXqQZPyNcjMCV2R",
  "key15": "5hmRt2E6odRoqWPBSb5o4NoBmWuUTp3sZxuGVchHnjTJ6nVo1SC5QB16cLh1CKJuByg5pe1QuD2VNyCq1vmM4ef1",
  "key16": "md97AJk4La69uFAR6vJcJszhAWpLPr1icWyrzBGriqdq7T6LsBPovuKuWXPHjsJi6BZJ9urS8K8z2SWZjqzsFKU",
  "key17": "45TJqZ43aJAa4zQx15jLRXZHKUkQU14Ssd9ZEVRnTciqDBP6ie2R8Amzb5L44RUkw6xZvHE4PwoQFBb3EvaaFNiQ",
  "key18": "4YTzo6eREGuGs6H8jkPbgiSdr4b8Awd9QPESukNFwpX5QpaK9xZt2XBvJ2ErvWTAN4En4u9y4CAPiqdYYwew1SEr",
  "key19": "5SkL6hbARPMojzd6oaypLrpr3wrRhTbY6HeGvcvx5WNva5tK7oM13JVDdkpkFuyJN3UWePNgqBsBNwDywinVZeNm",
  "key20": "3G2dh1QHcT81pVqY6WrhhbxhMeqwK5cDhHwYqT6KJeyb5qD6E8VuG5npgAQvusGmjVBG8e8pkXNsSZn8GQAKzRBq",
  "key21": "2PPX4W9Jb8R5fdkJxSyqS7BbhMDNGEgD7TTqkwZe69uof4y4w8g8a2XC2sRbtSSWPmLBJB6Q1pyaYWx48tCqL13V",
  "key22": "2Zi77FY12EJTVKJHR3EmKVgvXDBHgoQkGzbvqZwTfobd5mstoapzLV3mLDFkwsWLT7ZmHStxGRH6cM6QDjMuZDWE",
  "key23": "G4HESbAfvdy9t5jCMcnJjQ5sa4jfXRbo6QZte6zzohogkvGK6QzK74R8uWCupLPJdFN3vgtHinuGy1XHBPoye6G",
  "key24": "5toJC68vrQ5JgsikLhywsqSMKm7xwUaQez5jd8Tcagidpq6y4bNp5PXzPZY2PvsbR9vZXnVVwHw6qU8KymrGrHWC",
  "key25": "2ciaYXeyTKFtks57T6XmLswso8tNSrzj3qgHyR4fnQ7nuvuBmcg9mzCL4qiSacAHR7Er6WVNyBBexfGfaCxLa2sQ",
  "key26": "5cUhXtwbCMsrrSTy1pndqbBFygKkcN7a5rp6rBqve3ZiFRkaJhdK6wEziYD2gnDjdkVZx1bhpPL2yZoEGrZY8FPT",
  "key27": "edom8kCFcBLvPpyE9F7b32uMkDXRBMbEY9xk9A8Ey7gbq15Z7kxbEg7NySczE1dms7RTzuVtb38qZ3iq4fsBEPp"
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
