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
    "5VHHwfK3CPGzbSKYxNzQezXHZUJCFqxnHnf9XMSFDLCQPdUkA6xH913kXWaqACFtcyAgzXcJCeHkrjgfM2SFuw8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4oLZ8q5eeNFzco789vNyhRKgcLQ8ye9E6AAVTuAx43rYMwu2Vqhu9GbmdL4NTrxXhYN6rDt5aFm6CLAWAEzVRs",
  "key1": "aDUPra3mwpmSuk134La8EXQSafrYanQ2rAZYVnPski6bNSBbWrNrGqCKoJmR5Pa5i4ZgrsTVwMHWnhKwxp1xPq6",
  "key2": "6SbHbV7wChhSr8NKbkYHJpYehkRRfbvWcPG9LPB82cGYsMoiAemigwMaQysu4BPrsgkqTPqiz6GMB1pbWzRN3VP",
  "key3": "2cTYfduHHmNChuUKiBfzqQbYMH2fYwt5gaUz9aVkKXQGtdpjrAksdFstvj7aVyBQj1PAwL6ZX5HhSkaKMRa3eu7F",
  "key4": "3LFUQpn45GFkW3CdkcoqDEfiDqrpz9qhkGsrsXBt4aN4KPhjw5czzEbtxWLQBu6Q9FrwkXi8US3vL3SvZvQp5ih4",
  "key5": "3XvVkYy4vgZdCH6kNndvjQDywiR9TrwDAXQokBadMvZTT73NwjX3wAjiGkJzXHTp9zkrNWybhuJuxayPNVPdFwtf",
  "key6": "4tfwJEeJ6pgR6H9RrNuCKa3CAB3aGawEwJ6AzF41BcmnzJrEKkG7t6k59iCLnGfhBDpqdQ2q46GTn4H7Bog4XKwP",
  "key7": "23JHJ2gdSegqrGNWujurptm7AbF9DWC8FCu2YeXLYLmiegWPBrSp8n2b1ip25M5NYaVoYJiuoWEpfem8up2hZHxs",
  "key8": "a4cBpZS2qChVTfUsf6cCx81VgZ2nZuwfuMfeLkyQgCZ4vMd9AEVdtS4vtvZrjeKwVZqjo49EmwrPvAyEiNTog5Y",
  "key9": "yrisy7BjnxW23soZoBvnDmfUnUG5mfNo6kLGr8TsVSh4SHYGv4Sn3qat8Geg1zxCN3jpnSafHmqUsnuhmrc2HEN",
  "key10": "4tcqSrabaHGxkByoMkYwLj4FTNVFgTv9UfsgVYcejcVQY23pRGq36C8p4XxyNY8jv2dgo2R34iPPikkxe6GY7rca",
  "key11": "4ge1L4ta5TbjJ7AZiGpyxVc2mhV3pnyv1DUAembBZNvdMr258GkwyAjAud35scYXSZhRR5SqqmoRT3ZPcc2C5MRS",
  "key12": "3ss9EBnVuEdhaM55GrVJQ2QJsvt4JciwjYdxZDQ2eNmt2RCRvPSTtZ19xbFVfwFHHrtEWfdmmjr7ATLTgnXSBNp2",
  "key13": "5x7ZRmWtomdFVRhriHT8BmdS9hrgSM5ZVVMgFoM4P8Fbr69eT7xuNCBLtHyVKuEBs1LMZM1cAgtqpTfkZhZRbumV",
  "key14": "4jewaqJApz7WuxNrHNX6TNBdGxj5qhbAXg49vTpCyGuEb1nZBCXZ79xAPB3hn68aNLH4cSWKaHTm3VNVnFrUyxGS",
  "key15": "5YKbPLjucZfSbJU3cLFpP8c9iLRZ9zsH1UEP4xPS458pvpKxWtFdzTQevi9pukqMSdp29xgRtstLgY87tUEj2Tb2",
  "key16": "43oJ6Lm97mrcXera1qVCYnca3YiTYPTaKWT9hNcDmVQCm9Cd2ctLuCJG9Znrr6d7t3xdWtct2kVa257b4ZeQLf49",
  "key17": "3Z5LGqNRGP81MPt8gP8KQkbWg4SvAcAyjRdqNZKH2tqhwhdgJ47jTmWU18vAuHrt9kYxkyAJtEgR7YxXZZ8wNrtx",
  "key18": "57j4eobSshFZTWmGUEK2CYEkCj1ocxUYnUDE1Y6iKfLqXcFfzcWeEM2MvxrYR6KFKXov27w7LKvJ7cY8DV5RuzpX",
  "key19": "2UV8SzaX1apNTtggpkrn2afoxi6mgR96s7JKFDA7LxtMGuY85dWnKywoYkWGZwP2B4YmfMGc8TsfEPK231TjRHhV",
  "key20": "2irParuJK3ZJ6oa1ZAyWCsVjG9fS5QSEjZuyWi3dvr9Q7EJMt7DUTRdo2XQwGP3BHQSYWkxfVcuFwkgZXa8gabwt",
  "key21": "Eg5APrWBystUzeP3mCfB9tuRfsHqKURU9JZ75fpmeL7d4kn3LYxwdiBVFv3TGKzwustpkpRVMhkdJ8Hw494AcUQ",
  "key22": "3BDoActdEeTXZqUp2ong8PrT6QAYT6W9KfKUgP2QcYLz9vjUadbjztPKJBmyB8zZn3A3jLF6fgnoqyXJcf841mNR",
  "key23": "4t3wBkJQnE7DLvuazbS1HsHiWBK9S27thXwfN9VcydnzSsErhLTjXztWDn6BUmnWsM8TwKkfjepkxmh5xwDQQb5T",
  "key24": "xQ3xGv77G5dVVUNRmKeCbiyDfrcd3D59UNRj7t3XY7iKpunhdwtcuVEJhHUpkb3eWjn5hio5fE8AG97xBcRsAgY",
  "key25": "3B43bW9hwS3fTUpdatXY65BGzSEq1rHqRXRgDsUTcss5aTWcdMNZ4hhAZwF4gZ3UDGCNeM12TfZqBSQ5SGKaj3Wb",
  "key26": "9GjfNNWaPkrpHfxxqciPpmGoD3zvyLjw5BNvNWofHxdQCEZNEQSYmvEcGHro73KDs933VrgU6qRhSq8X5q1Yfsq",
  "key27": "4KhMGkT6fZnYBE15pUkDP2NmRtNW6Dbr7691TqbcoUDtAPaC9kaxMyJMzKGrtjrMSucmoUUnyRjtXXyGgBZ3s4DP",
  "key28": "5Ym2Tzjb9hxVLvApsNsVknCtt4HtVfndbT37rj722MFAoyfXu66cJz7NwUfuNhMT6SEzFpkyPi6ZKMddBBdve36U",
  "key29": "2NYorLWxfY1TvaHU44DjeTpsX6rB3kQfxnWpymEfM6wxvy8mKri8Qez8ovft6omGYDXcSHerVkKWwyet25GBKgR4",
  "key30": "2hqSe9MiJ57BiD5mWFWxY5ua6TTnxKKAHq3G5KFkUUpRHG7rwYWCiUTvFLKeKfkDnUcBA4JD21ygpNPkZXHfPfWf",
  "key31": "BnnUZXdVoT3mEWJ8JFtt6gYubeDuhivuqQRUysqDhmSWauWjny8HmDtoRjR7zFvTKS1mqXgKU3CFbAF2rPvMbQc",
  "key32": "2XPYHDQUyCM2M6wXHKkVKLcSfyQNbfFKq9HQKHGk9k2DkWGtRjPC4S9KePDKeCM9dakaMieZ2d6Ei9oVpd9d5bXV",
  "key33": "5rx5A3yPeg7Pq6gyW5FCqWUyJqiGLTChzsPz6ZMmivfZH2gyf3ngKmKVjBRDZZJi2rq1eTe6xnxjHyczTq5oP8Zx",
  "key34": "4kThYuBwsUFNdiCGyG6PeYLTt5QNhtWQzELtnSPvSnUhRQTKbqG5E7ZreYTLCBU3fvzMEz3N8GkpCC9LGidE82Wk",
  "key35": "3JBTNGe6DetA3R6UKq2xoKgWcEzP5FRcfHE8uyA8rYQ2pwiApxKrpJTECxMAvGnXJk938xwF5JkXFD81HGrR9mun",
  "key36": "JGyeibmQsvn7XKsdMUzPXL1Uhv2ZZTEjT8scmJe7sfczDK7w59xibWMnU361bXWeDwDJnzaXTVUY3W7skurN7DA",
  "key37": "2z2bEm1oRitdoGgj3cuKG7kii6p5XbtoAuZfDwuFoxo5E7dRVVSYc3AfrVZEvjcZhhTt91uhuc5Ly2aUzVH1LWu7",
  "key38": "jshvUepWcTGpVXZnCSveyfBN4q8GgHqB8gcpLCNP3bvpvxM71tYK2iekFfS3tEBMQ5qyPTtEHgrjWMDGGjgtyy7",
  "key39": "4XvhABjtKYd7t3FnXfMjw9YneJuwLVC2mcswNMV3AzRafaurQikrJaPRkyQHyzi8h1zJhaygLeP8s6r5vp4u8RK",
  "key40": "36qPWuY66Xwwm7Gmg8UP6VwXqDyLpTBuahqoUQk2ZXeZmFjdXb5neonTp7y1Ey5NhNKuEhbgALudgjLFp9DbaRnP",
  "key41": "nayrHyPfQvjaXwGJJBx9V7Pgf5BMYCGHdhCDBm4CZc1goc2eAKcMrRwagmiU9u8duGSnHtSregYPVMZY1a7p8Rj"
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
