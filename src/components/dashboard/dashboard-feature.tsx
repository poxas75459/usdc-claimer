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
    "Q5BVKTBnGSxk9T7G7BijHfcCngVevASmmC7yUGjvqYCRL4oE29FN2NPYSkghYToxrGLJwanJz3r9e4wUBb26ELT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SAUG7jYn2VtHoRTFV257ffKi6EaAZypuWzFot4WCxnPFVnRTupayehb3Z93kLMzoGECJTqFqSC2dFC4DwWZd3d3",
  "key1": "ZEJuV3w7k45eDAnstnHdHfkN5FwNeawGCqQrou8UaDSknsJBp1fZQUUowx8BZA1dgvDtayh94UkC5dx9JRu4PDt",
  "key2": "cSpuXCbkXtsofG6i9KSuJGLToFa188Bhkbpkc4mVD8nFxkkXTZVxYoPyYBeMQLp3SnVT95bX3jQ7SU4ndjYticK",
  "key3": "3rxMaQJf4Aky73r4DnUkVtKjkezEA8Mgomf2YxXh9WqEhe8wqyJrY6NAneiJiHMPJqkvmxejGSqpH97scNaYNuVf",
  "key4": "5rpMXM7zR4k2BkLrC6uX9PBJneXbPpge7urL6y2uL4yv81388iakZ4qWAiA6XTiKBJeSS3jMCvz7xeoTMfy77Acx",
  "key5": "4GgdXuuLabz7c52wQbiYEaNEHr91ks8F3datDiSWt5BM38wSEhhrTnNox3nMW9j9BnGXEpeuLZb4gFnfKrxuj51q",
  "key6": "5pnRSSnEdbTzSZNEnUURWrSy1QP9y7gtzLp6yjdfduK5rnbPajxXV4Jbk5P1d2RPGw1c1YXdvQCCWgjstddSmBTi",
  "key7": "4o3KLGwaEnbFBF7ZmMAmwZXy29tNwGNdZHuuG5JXuxArRi7pWiH2im4KBHcDHuRukABa6ed2sdaPTZuDdavWZXjD",
  "key8": "2XS33jEn6Xng5drK5X9UYAKbFMoT2sUeDXufFh8UyPrCbKx4VyoV1zKuLctWgtehZCihG9avxeNsvtdADzLspcy",
  "key9": "2XKcQCueGgSacLszgQPttjkHBJXzXsyCuK7G8JfUMft3THKTEfRkDk6s3Sv1Pt6SoGaFxpizNR8nu1np6f6WUE6f",
  "key10": "2uuekmSFZTqXEieN7XTcVFUNHQHjFSyX8zy4BaGD4fHnvrjQeWyWgRwHRtRC11yWMy8GWMLkxRfJpPoMVYZEgomZ",
  "key11": "Z9reW2ikYh35hYwEpKgRKDAEZyo4AMNMQVo382ZwLD2ZE8Y6GgcVLjRvnfo8nghyYhzE4VVawHk2Gd5no1ATVSh",
  "key12": "5ff8cvmZDdnK7HF2hS52ZeF7EujJZX6TjgTbbgtdC7EYPheJTmsY5idyJxiWBYN2djVjM9wPPBYzzw1qFFhwfKge",
  "key13": "5oZX7XWBMeHquC5HJY3ttjM343iKqHB2FC6ZC3P6VYUtbpn88nspYXCTppzmXAJBVe7toa8WwgA8W9dFzwq1NqBs",
  "key14": "367XupRhc1LHJhvSRruqUrXTxkXP26TfYqVHb8ZdxCRZdAdmXv5GhXUAN8Z1cD3HeCeCJkFR28Rghj9AiyTE77Ui",
  "key15": "33bddjJA3seRBfcieatSVzfwEsymn7i3E5msjnSvmtkZHdKy4c7rB7pDmAKtV3Q36JnwPmPKM27LzsHJRREiZmQp",
  "key16": "5TyVL2L6iD8Rs5xwnU4626eQqfoHHZDu9Ga5cx7QffsbCY5dh1NeAEVa7rhSGEM4cZ89j6u85xwqv7qqjGCwesJ4",
  "key17": "346HCLaarj2xxWsi2t58cwdG8sSke5ncVwk45KhVm5xswYVnahYtxhS86n4Em5vn4RqC3QP4vP3fq2gGyHXhNtGh",
  "key18": "5cBtfpLrkm6B5nJ5gwntvLzwYSD1DskZzZNd1Y5zsH8donQ7Q3rqia44zXnr8WQNDjXiwwZcSNhvrzx1rrN3uh3U",
  "key19": "3Wk31VPwD7RrsDVwX8Sw4NKbc1jM2AppLoxUvqku2DaezVCEHZrmV8PsyfifckPeNBiWESwtKXSxgZ2tpDs6o42C",
  "key20": "2mtfbo1k6q4zhTsVnkJxXiJEE7FpRgSzzNGjRGE5SeriKcfjc4nLHbGNpx3ESTgB8nXqWzbHnTBKcv3vXvUq8aP4",
  "key21": "4s9FJRGznQjtTSrW9teffqN9j854kSYzNbYHHMh8UNL4SGSg8nndEjdcPjgkXXBauArAiuv9rfYxYLPUW6fr4rBP",
  "key22": "4y1AgDKUWfyp5SECuhTXZmoTT7TASc7ApCnrZ94sf4GHGJMt16pSiaLEHs7Y2J6yVMzncjD6xrqJAC78sR9rggqv",
  "key23": "5HNKemR8aDCJvX5T2FjuEryTj6n6CKDpwoKydb1G1NKtG4LGwwqT3LFuLu8yEteUA5q4HqtPTp6fntnEgdKiUGqJ",
  "key24": "4dwBKYWvkgYtjSiYmtmsZ4quupNKQXmitn7DrQ7LCRoc4aiff9gLN1PxW7wyUtH4KKtAKCEyMLZJo8VrV932xzAo",
  "key25": "4j1AiivFs7yoJG1vwwKxuCuT4JSmsgrPAc2Lpeoai6trLWmEuJMDuwwQEM3uAnA7D9244D4iJgjnwF9y15m96XWv",
  "key26": "5qrdqySYEjze4mduVr2zhYuG7fNMDqPt3GXMBx9UKbYffzajmpHf6VaAtZSupFWuN4MRCwhdTAJfMVGiph9gqmDE"
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
