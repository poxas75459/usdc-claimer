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
    "WTPyTVH2ZupcjipNLSJmwsrwdpxqPmMuRbubMF5MFvDQDB3vbhz29PAGqYeWwHFrkxckQVkzW4gye5uLjHnYwN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CtAx9ewMDpNmNgxnmMx5EzTqQySnrirUdLG8S65gmAkVByHJeKmCSGhUpXQARXf5AiSWNzZVwbYgupJX6aMc1Tf",
  "key1": "5tFtSsPqjUfjB3J5HzohFpLjCLk1Z54hAF52Rj16ENx5jPtbjdx1VJPbayGg6WWqnaJJM9Q73xQapGMbQf2Hsep",
  "key2": "LQKT3hrKSZ4uCHkH6JT6rXkrCzeas9gK8rTpsH8DwRToxdu2Pjp7kggUmxAgtdXRhEQNvxx4nYhQHhDGkQZ2Cnc",
  "key3": "3EtQbSj5Jot2uFGKJQoGZvc9iYYSEEnwvCoMGzWCnM5ah3VeMcFzGRj19hYQLQpBM2DyRR4a7efz5yVg3NjUdGw6",
  "key4": "49oBbqkqTTcenCDJoXehs8ZHnpV3JPEfgxwY1JUgxVJv32LwFERMXkx3xU7B5mvMDjCYhDrKmdozvqB7qxyYpn8n",
  "key5": "5mc2ymjMtyxYsJUZ2Yjm18jpACBuVX5mWmvN88AxydzpBqHkLDn6YfLKuCYPFfH6d3616uZstjbXCLyACC88jdoQ",
  "key6": "4afhqDYbuJr28uF1HVjpHLQ3w73G8yFfeXw6FPkSH2THxwc74wfimu72tjKUTMbCHeD4g6aWnYtC54LdoQ7mvzuN",
  "key7": "oU9efHhyCHqWtUn7rAvUEoEXtykikCjBaEB3qC6o5ByZhnxaJM6BmVoAChDtAHCndcE7Vk2SEp9iCyJLepvPkp1",
  "key8": "5oZmE1ZXTcvs96hMJhAcbksxGsQXRcK7AChNB3yj2DaUyYYY6tts7XHUUG3gjUd44qG9NbnsenQJA9GTRRnzTqVo",
  "key9": "64qsgYNKGHRwfabPHGR4xEi1Z1RcH2me6FzcDcmD9X29p4MWGv3wybp2LTmgt3p32eJAzVm3p6vdgMd7aUcks5or",
  "key10": "4Jwrci344GfPZbd4Mtadorz8XyW2AhW1zgPconcUEsmnhJwd6nHCSR2NE3gUsAyyd9KwUon2y3GXt3v8VSYCJJ92",
  "key11": "h6TUMGRPDdwjJJycyeBhDYr6GkvFtBChUhN2ZCWMMprNyRrzu1RhuxFfJ13xXkSjwGj5FSHLonXCa7DFozztqKs",
  "key12": "2WFKo6S55c5uJv2RVCa5Vcuf12KNcaa2tLUquiZxYNwY7sDqvSWMxoRefR3vmR3QVTmP1yf5jMs7DgJSoPGURqUi",
  "key13": "39ohm3G6AXLJxyzd7Bgp6FHA8vsnErZpbCqjdbPBTjNQKjj2dXCWLGpU9pXSQVckrSx5RyHt6gvF5BGcrnNkzqin",
  "key14": "4QWMZD8bu3jZmqMpswXDLuG4t63sbpEQcaG8ratVBwmpN8tWcvCkp8mybxAjcvjtttVqYGws7iiPjirTyD6bZzCK",
  "key15": "5LbjLw1ssCv9oQNuhcsgoZReJhPRNRLpTABeNPMKG9HJPGBuCHo1CE5S2CeaEhuN95Rmp8wts5CNwFQ15dsdzgmQ",
  "key16": "4fd7Cj1o69Eq9z6ym5bpHsmzrwGHtUJdeCz8vfmSd8Azrv9Xs8nVu7VVc6wXhZkCZr6zZCn3tyjppWNrDS8SzzXd",
  "key17": "5p5EHZFbz7FijhsZs1BT7BANjNpZdstWAiW9SaFwLVBbcPKcAqS5oj9jPHuU9G53coMfZBrbaK3Eobik55QdF9yg",
  "key18": "3XA1f9yawesyNpiepXxbB2jaDMiS6KW2V14VcuKbWbTCPZDyvnLcJ2f8eu8j11P6ds3BMsQpxmw8os1ueSGBsTZC",
  "key19": "CUMGk1JvGPC5PQgxutUJZ2hdrYTCXr9hnWVmLWKWBE1UAj4ayUipBPbJQmkEvAb3WA8mpU7StPnT3fLfGDmMaJT",
  "key20": "67GqU4d9wLLiBG7vi4BubaQnQPKdWctoE1T9Jrhj9EpU9ekMaJQgDCivYSnjwvzSnXFdVFR9Vg851rq6wTBBkYB3",
  "key21": "5buTHKTHpARvfCb2VkD8U6Jw8oU2NK46Y5uKLxPBVMSUPpLxcj6RXKyaX41ty42bJSXcG2yu9TycPgBpyRazGKnT",
  "key22": "3J7ATC2HmJuVwrHtyG1uokWKK6DcQHknWp7ZWGc5cDRZKdRMxTWEXj7PY82WUEoBWu6ygKy3SMciwT3vCGiq5njG",
  "key23": "4wVM2KpmsHFj7o2Gvv328EmwGMRu9HfNgvsYDqyHpBXcZwMprDqFZwoeftZfrS6wVq5SZGijPdqWmhikGoJ7v3uT",
  "key24": "q9c8zhxfpSwikJUkFXXkuUDaSoaHrMC8BASQ1TSo8NVdL3DsvvuVjJYcQLmhMw9zUgKt33R2qkrfSR4vo2aEBeM",
  "key25": "59w72MebxVoiembr5WSEZW8qRKZaVaA7gEdS2LArTFTA7enwyjwdxrPPrM981JYXpvCL1Dye56L18ugMZ82mDyey",
  "key26": "5HEnzjqE32mSJFV1A1fKZBzZLHUPi27twF6XnxNGnvXdQznLHCyU6K2dhnsLNUCMdPzxVGNLr8e4tc1c3y7tFtiq",
  "key27": "2SjvY2eTQtv5QC7W4SQN3vJhhZRqTgGyzCxg9QcWNYZKb3UPud8TxpfHxQXdMy6T6DkD38BRcZq6S8EXSi8Kmk53",
  "key28": "4Tz9aqfMbw2w1eLXseCHPW71VeibtK89oVHBxPvpShxQfJU5MXhtWTFbDahwRBbZNbBnaZNKqVPP7owpbnAbPujE",
  "key29": "5P6JvstoU9sgShZpz8ozfkZPXuRyz6VhpeeNnMGTgwMezNpSH2AVFDvfHuxfMjjeCHA9AinnVy1AW7Qqt381VvJu",
  "key30": "4eheaZGgxgEWM9QpuYpAmH2DCpcWU3fob5gMGfeznLdGtogJ4JSgEaYuCXHeQ3jqDLQwUYVT2siVNCMqCHkwkNSs",
  "key31": "AvhMVuzXhX131L3LJk7Z2FxdFhfsWsD9svxhyBszVJaSbJiTNeDoAR1RhZYpQn8c9VLEdvPdBRMviVTVCVkF6ta",
  "key32": "572AGudsk1HqftMZnSNyPt6cj1ffzY9wVSUvfp8Psf4fACWfqMurhBRqda67L8ZZ4B1WVuCa7jfCvv3ssZfZbner",
  "key33": "4PqoLtXSGKjyec85VmfZdxmuLuoPvnztV2gzJ87N9RUgBkBC8MC1D512aCw4ds6zV7deNwE5HUAjnFH4pz4jFpDF",
  "key34": "pjtkjRfnDz45j2itgZW524T9Jin11Jw8s84qChH4pqDSVFv3B1f6Jt7Htjw9fmGGUph5o1nEJU7iuQncqDoUnTH",
  "key35": "3vHLvz9JoukuTv1CxdTJwzcLMBppBBHPbQE8JxdjfiZAbLvboGZQyUzoHKN2s3Ce2UmAYxresKBa9Y8kGNx2okGR",
  "key36": "2EWvLtAnnrwmnX1yvwENUXGMVi7ZkiWryZCeo7MPYgbsVWVZ6fYFwpoKwHXMxZm54tKFepqpC6B88YV2dbrPfTat",
  "key37": "3RjwAL8CcrTspxA9jndU2TbxJA9hahnYUzwJ8qkKFr3WU5QgTtgu1DdQcmr5VKqiqS5xTHByp7LPnMZyg65sTbjJ",
  "key38": "5U1v84GCpi7LPLmBNviL8pZqfzDdqS3nGNoSE1KWEo7W6wXFbdW9BZWkVSSkiXof3QDx8tw1kw5vSqMQLtUbTMMe",
  "key39": "4kiCi3ZAYvBjJcvdWyDKuScDJErDwwczb8a9HmNuunjDjme93t5AR3oxtzPGFcRcNGKJ2w1QEZZvEFqMpfAhi23N",
  "key40": "4x85vbt7Ko49bGX3mioKBroZ9ymFcJ4bjrazTvTNseAUNAEHRbEeQxXwo9baSM14yRM1g2Zv3Fq3AbJvBccUY3Ys",
  "key41": "3RAqaLagZo66DmN2EdQpw3k3PJYe1bpt9NiWVuJvY1THGSiu1WQzyasGwfZH6QwYRWTXu1rcEfEwYFrkZP6YKCN",
  "key42": "2AghYticvBg5DZvjTLgjFzkV6TEDyTgC87oVWSgXCsdbuDCEbLPuz84gADXzSyu79mcGCXufcgU9zpZ5URY1ZqWf"
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
