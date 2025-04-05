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
    "3cLdb8Wk59FZXNA9DgzEwwpp4pv2Bioen52v2rK9MSvPsNRKF7fEuJGGFYjPjz412pDJRTwLES45knXWeUaMHR2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RBB6A4VPunfa56H2kWD44TNxjz3xtRbsqYbhSBdqWBMWf8y8pAmqcCgikwXqt2BsME6CAgmViAGN61ENusmu1Ep",
  "key1": "5cJGcYRTFS6rBCJ3HjMJidZY4DSabhQeujCkSrA5HvDjRY9pRpREtgzirwhzChNN3kAjT6ESW2heWMBtwu2qcdve",
  "key2": "53AWcHmaiXqrrNPGHszRopbnkUaUMVSNSGSAJV9E5o8tRMBVmRUa9AQ23CsJg1VTpD5oEVizDNH4o5i6spkE2AfH",
  "key3": "4sPpMR9xS3GPyi6e2DRrijSs2u6LFbL3qDhZEgBL2dwHhe5HnqpnQvpaARwrQSeMrKz9kNfJ59ofqPLvReUqWiCb",
  "key4": "jmshAjHUBJ8NdtmSDB3wBHwEw6jrFUnnmDdUPwPjtvTR8ifH9AKCAJD2BF5PQpRZvg8hFstmhLihD7X5EN5Nj6e",
  "key5": "3PLjQXCLEHMJz1dQRMnVQAcjeZXuY1t1gXKnz5PvBMQaVGBZYYxKqTWGsrGn3Y8YMFBdhijwGwq8xYDJPScwjaxe",
  "key6": "3Ueye8jbwd8HSRzZT1mPrp5113V7WnP5J3FjBzHuEsACb55KFwEKxsxdHnMdxBnu8S5WM62pJwqwGiUjjzasRXLo",
  "key7": "48ELVgGY4NHi1JFSTRZeFovGsY8bBGLRwPCkNHd9ykV7Q2MjudxU21oG6RBrqAZMVK8M9aqrqKfpTmPsphspiucw",
  "key8": "2s5S6spCqUP6knEeYHtus44myy5m8G3jW8arQBkGsqVQUBqC9H3AB1CA95WrMTtRxLAsmK8ZaVWiWQvgR2UyTnuv",
  "key9": "33Dt4KNrdZvb31FcE66ouQLftcLFL8KwpZy5P8caYvXSQm7nqEj9bSZmrWeCb1jobwaYxRtC1HdvMsmTH52v4Xb4",
  "key10": "5wYh9XRg7m5cvyooGt5bTk8LmqbwjTMsESTARpf7J7s3g6XyRNQbujGFbzjTSugofeS6mchMXosPVKAPTVZTQo8H",
  "key11": "3bqPzRLA9oScrwc1SjYp8YHza7L54gzXpg4xnStTfepq4Pr3tzpuDR9hLxLYFbcgB3AzXFwaSVm4retporeeAtxs",
  "key12": "51N7FYADkpmhkmqu56uXZeUWMiYaxXTrZdQKEBRCvLYiUAHPwWMtEps8br1q4ir9maeqdPe2hFefhGJydfFBKtZg",
  "key13": "3eLL1TmgXCexAPaoWnxmZKk8PXVxPYyfT9cx5kPqHNJo2NAqXVJR3JTP7Ynjk6rrzmNqvWt4L5ifNMhC38VTF7X8",
  "key14": "5Lw2WBJZf63EFAa8BkgLEgAYb4G6HurQS3pX1jpLFUmcQWpwiqY4L1s3PuzLUStUFZ75dSPoVepg43jXaBmQ7feQ",
  "key15": "e8BFPxqp4i4xe7fJdAUvedt1gfTm7DoPN3cnKzqksgDM93GEeEKg8PAPY9aXAh89wUpFKnUPiXftga3TFVscyoW",
  "key16": "4Qv1ekk51A5ThQCHYnjeuorbQb6YUBqjvhfPm8SBWWB2pst2f1uUMATqVnLxV4nmMSyKCaNYtinPGHDiSvVBGvC6",
  "key17": "5Nk2rxfB4q9ZLw2V1H9H3WLQ2fYo6YXcubKfufLZio2z2Yrcs45QKd6UZ3ypzctX3UNjWhGvKUoFRKD3sQEYKocR",
  "key18": "VZuMyzzv9eFapVMWWEfNfwkpWHmzqPmQm46vnXbaN7nMdAVzccszYXrrbzBm1pGDAaS3vwqhnWhB87He6e9QbDJ",
  "key19": "HmP4oeWXD2fR8MvrdwaxXB5Me4WU9Kr2kubUp5351LpTyrD6mu2deaPj5KMajio32yUcdjUJUYPmKgd4ZqxARAJ",
  "key20": "2jtfUw2jdDrb7tSDSohoZ7Vm6GTpccciQ662HzBsYDJkNgcKv9hqGUMtWMCrJ2ma6YQesjmEFCtLK56t15E63DPr",
  "key21": "5TUz4QoM7J35LaSfKRU3f7YQDabDpqz51Hk5sP3HqqTrfUhbrKshXb7E4s2t1VzNmuTEnuAXf1qPAgkXnRjRoUjV",
  "key22": "4QhX6J2MC8B97WMYSXqaa5nTjcuj8cXrGEyKRFEGQNJ9YUAHfpcGGx875fVWKAVALScPLkGjuWJn54kjWSRq996Y",
  "key23": "4TkhH8xrDer37jPtQGCWTZ17QFnN7oUNcnAdJLwj975E5iVDasJnFHeaPrXNKHcNf8jKNthBdd1JFuhufwdW3LZZ",
  "key24": "3eXeBK5QtcEBJtzYjUfPu4Sp52P62ifBJcESB2xrdbZQDkmMKmGXYPqRTAfw6qrKUsZD6oujFtFfa6ePzdiZz91L",
  "key25": "3kcbNVYWupzoR5gtN32fEPMuDtoxJ9NNyyiao75CfxosutppxYc3yZVqexdZ9mernnVvTwSNNVCtvbGg3nM6eLyK",
  "key26": "3gyL2tc5eunm9SoscswTsGuEnnvjWfmfs5GPunu2wVJ7MYD1SyrUmCDoYf1zEDvZZ9B822WUs7K5CwSuxtefpqmA",
  "key27": "34cpdXjLiVMdu3pCQThfAFvKyJ4CCTgSdwvrDBvY7chpMH8XSUFvaT3539wKYzfGhGtyQ9Fkea4rJg7ng6sTDMAC",
  "key28": "XvdhkZa8zDKGVkazJL5n9j1nowWXgfJHkd4bSTxt6M8jtaJyLHV6YgV52bSd79Y4KDwHCsJ2kJnZ9HvyU68ZMqw",
  "key29": "4X21TZejNd5QyzhAWmx62fHYZke9B8p2nrGZsRM3HgKrcyuEJVys6pvHD6fMLrg7cUSmgTdJgyQDw7giioDKxbPV",
  "key30": "5zwMEkGrJVcUSZB5QkSsogtF967BGF9qK7Zpxj425bGXP1CMhY9U3XbAC53GehDjVgYt9NnvF2QJJV1B12dG6o8C",
  "key31": "47rr2KzLMCt1q4A2186pzdyLQNyXYi1CToa8cEg64biyt4t2mgFmCHvEKdLTcj3RJ9rqTFYzU8ZDtDzgjcPfp7eF",
  "key32": "22XQDBDnRj8WEtT956B3EYwjpPSwFvongRa2AE6VtMj7NBj1oaUcNa8eJsKrCfTJHaAXBa5zSwn1QNJF2DfdGZBZ",
  "key33": "4N5yPHbn9M2s4rG6LvBsUn8Tw5mEgYScnyzX4j4mRq7XEFrM57GsGTBJBM3qjSfK45Rbr1dRDAiDatR4F1nu6iYh",
  "key34": "45ysoSUSCB9wsQtzHJHfFXrEs1pwaxmGqoehZYqxGFPr8qpCTqiygUEA6ALXR8AoaQAVTL5DJMPGB2sEXkf71EXe",
  "key35": "2yP6QuBwKRGFrMJn23a7PJYyrgXc6yNdqP8Wcf3C4J8ri56nfxzEUMt7fWwZhvomJRCJS8KbUMVaCNbLac1zYDSn",
  "key36": "2yVkpP8NMYFue79UzZ7GU2B5UXRDkizn4ozvd9hTpPgFdUwPPbNA7y1Np9cTrrM8s7c7Kjp6EQLDU7nUN1QuvNDw",
  "key37": "2sYtTZ8SRVT8jr5QTBboZDZtYNCSpqKiyTejbmpNXd8pgF9nCBxQ4ieZw7ixftJ4RkEZGkFK9J7r5quwDEhEtoVu",
  "key38": "55q5RwKMkDwe4ogznMknxHe4tg7uLSC9vHmFMjQbqiVaVSC2PfL9VNSfu8jHFEYf5Nn63GvuctyiZdsDY1HT9Edj",
  "key39": "35LKp7aX5CWi8kDF4FBH9z1KfBtki2kUrcQWEetNfJYQXieHXUcqYjBT4im3ojVCyecpSk54X4XmNP8zoLSuYUjJ",
  "key40": "4vt1cTC5g7Yga1G4Hej46m9LMffP78AoZYKMji4q8CEpDX1pB8tWe4WhQiSPRs4jmwE2PecWmKk8Q4WZQZt1bFp3"
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
