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
    "Kr73wVE6QzFWnEwxVzbavzjLxiCR8CZgGRLnwodzHJ8ffBRdacxJDxFdyu29rD2fxusHkhe8fbtKicgx1BH3QBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sHxS7gmMhuwMZ7fPLxbSsnyxgA2fKHRzHN7D5EQ8BpBaTDQa4PqtcHie9dam5QE6yQfZNiZEM9PJjcZqgvQwLEh",
  "key1": "39SiVz2Fv4ciQn5vwKmfX7wSYvT6w5rhkvNA2XVHJSSxk7CZoAvfrCeQ2my9PptJdNRdbqzMaJHRyqmQdMAZ63GN",
  "key2": "4iFzUDp1JQoKdwLsZAS9heHyBu3wQbNfBdfJHH4me83u6humuG9EmBj7yuShHKVKt5TocwE99kMBjJhutNzihpFq",
  "key3": "2TvLa51ts3RG33EDsyS3Q4KcZUr2ct4pJvumaasKu7wrhZw5b2PRmLPxiegN21Peb6oTmgVParpNqxtEgYu3ciHQ",
  "key4": "461AYAupi1sXVHEyupZenw3SAKQffuNqzBoiNsQRRQk6V2Bj7Ns6dXci3bhALznzeVSAkpG6Kr8cVVie2SshREGA",
  "key5": "2K3HVVF5YRJmbrCkXMQ9ssjNWBtK1Zip8hTYj7zdGVHzX9wf4aC4NBSqG7Ls8WeZC55mgKapy82jwYo88U1Eh5eK",
  "key6": "8zYcqBHrA4e4CGfW6vRi2naGhFidngzmXq24BizVvd1tg58Wtt6dNRAiE8zi4deAuS7x48os41KJSY1AFTeS1rA",
  "key7": "8xT83NrikT389WTeuixRvnXy3bLL1hxEaiegCHoyhW3EKTEogE4VGjPaDNpoFrAdMiTZPDE9oC5NGz1D1zEJ6FU",
  "key8": "2yo6W1Xihj9mgDuZ54wvyWpzfQYNqjDX5b4UwWyi3PbAcLrsGqriQxommk72p2uBHMPZg6XQfAPFCZwteFzgn1wU",
  "key9": "2tRjxU5ZTD2mHELUq3Gans3fHPoG26ErGTRsFA5BvL9aMZxczZPjqCcHgwSkkp63dnjLNJqk6e7FK58Rcpq3Tniw",
  "key10": "5irzVyxQNdSkmvbAcoHf2GZj4Ju2zdSnggdPKwxYAejxkYjd4d5WNQ3BUQUuUDVm4JEnwQmkNc6D84ZXwSvAR1TN",
  "key11": "5HxTf3ox3yjD2GnYFqdhPfKeT4bLXeA6o2tD845mM5Voe1yBcJbk1aJq2EhGKCyWMBZMgJCQfDs4fQTVPRE6gbxp",
  "key12": "RhSMge5mfz86RoXMzQy67QxFU172XtLomAH6pJPTbMmSDHSwsDttXFpsAz7nQQYHvduVCqFEcjA95LaFNnL2hg7",
  "key13": "4GLxV1CJTdMojYWQ9RnYL6YmU7i8URsUYV4V9aYENgvQmL6RH8oD9TeQDQDP6ZTetwYQWu25UBACviwiZq1dMhcB",
  "key14": "tEiFpnHRfaMsMhdUi4F8GbEEbaShw9CCVq1omjeao82gqJdVaHXTfaP6qJ7WZiP8ZwuGFdBD42cyQY2pQ5XG4XT",
  "key15": "44uqhUHynZw3Cobr5vfzoGZfazxxDHqgtxSi6KfdKTdaCebo1qN1nuxD2LUBcEFgx3m6MXHTQTRh4N7iF5Ewrtpm",
  "key16": "2mjFJoxMN1HimYHpxAzHJedtY8cbDnU38opBqmeGc28zoihpyVWPMxhTbEvjW3aX3isTET2gBh9H9RDpbu4pRPZK",
  "key17": "26XadabdDFTGxPLwNn8exLM1v6Pb6BqJn259uQ8MX632L8jTuYBw2nTFijou1MRKWTWXp3q6qPKXUtwfqzKK6Rg1",
  "key18": "Dzg6gD8bZ34CNBMiWDowEvq4E5rfm6USKeUY1JrWGzd1wCyETZoCGsGqgzya7tz37rzhMSSQ2zey1mJZ24pj5Sg",
  "key19": "53uWkT62YYbCFvRtfkExdEpf8Q5ZUDUrr8hdGkRM4XsdgXtmw6PH6cDjM8G7VQwakXyxFudHdYr2pHrySZJT9z5V",
  "key20": "4G5H15MQ6f1aeyq5WAZ6SWxpqNG5WHR4HsEfLVPMik2DvUkogPhbxJUeiDe4QjX6LGoKg4uMKfc8zsMw6pC1G7eW",
  "key21": "3X6xHiL71K4rTFkAMvZEpT6tNLWC4Vvs99ZeKptrZQ5HC8BNZ189GaHAegTpmw9SKHU5hWXdpKgLh9wtsyLpmWmP",
  "key22": "636YXLd3wEVgm3ciTXWk6yKHmapgLz3R8nvaV8QuEMVyMBjnFCKhk21XkXtm77PKRznAZJtN6d24cbhEPx73ct4U",
  "key23": "4RnH8S1Nc7i8Knio1Ub3NzbcTLd3LfbA6rEcevhb18ajNn8q2cP9ptmfWs1oXg51oNuttaQHhocaQGaGNmeLtTqV",
  "key24": "4FxMTy3kLeBAhM7RvL7XZPfoDFUts99Mrb2ZAeNMj2a7uYVPXTxnckMQKiGCGqxvh8MERYJjHvmiuTdZrMPx7F6N",
  "key25": "54nkj5y7rJhEnG8uiE1D9C7jbw5Zri96WbjzRdTexBriham2ovrsXKM58irZgGr7DkjVPqeEmiGZhNpZMkBauyDG",
  "key26": "2zePJKnV34ySx8F5nTZiQjuoPGrNLcvTiaX278WCBKWHMN3jmJEe1ySNTgG8ps4AZYpmTGYAujbLs4GEPtYhbvC2",
  "key27": "3JXzFZjowNLqucPWZnu7mgyzWAp5BMedxMgTSwJyiVCwnJXFATPMb48asm7d1HzZuXZeRizmDzCUx5YDqzJRk1PQ",
  "key28": "63xZi39EwmUQyXiZz2FXXSnkzoyQ9Riqba65iSwjif2B51dBg6e63jNprGiz26b8F9ySVeBuBzj6YGAGPSLHAj7T",
  "key29": "4S6uxPNEYTMhxhDm7zGLq2ighJePeAp2HyrRRALUTHiR5yoBeyVF3dnVLD7Ku2DjhfVDdpr6G3iteJ24GPjbLCUr",
  "key30": "4tRfs2484Y2o2poSKeGpositqSdu65YVgmauLdy58ybAam1Pca1Qm9vwEkrvxYCSJMkZAvbELZsXgUxq5nieWYGp",
  "key31": "5AAhR5YvCNBmy3fSRvc4dzCf4uUroq3WVpa8GX4j5epSLWWv7Xt5eGZfUcoUiYeACFfgkvsvznQP9qinkd3HxCzE",
  "key32": "5bn118kkyXEbKV3qaDUihv2MZik5NJ6iRKodQUEXDxQm8zNgUsoBuoxWirpvCkmB4dX6M83PDJKTA819VxVJjGAW",
  "key33": "Nva3D5nnTmuKGffSLNi7mDrV24ZdD2e5jeVbNJenLwM3nSLdEat4Ud32qorr6QMqZpLiY6MioCLyKHbGfhxBQp5",
  "key34": "mKmFNxvyPjRorF8rpTKbj1afa8zRD1gcCMAWdFL3FqBonaaemAW7o1T5rMBMiXKB8Xn2PwQruByF5F2GZZ3dDPP",
  "key35": "49mwhrLUWgBoVMZUhMWmsynUL6YYLHD9jug6JnJSSRXayjQUhhf171gmoAh26xgbL8tapAYCtpsCqKg6jYckBPsB",
  "key36": "2CaJv4EP9P4NmfLLxRgNitvVhPfFyxnXoUm2MVeZ8f7gHRgxyEW2TwP13SCRAnACv7HHX8pLzgmKcgQnujvJfWYf"
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
