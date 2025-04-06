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
    "48KynXbP73a6zQJeXQcGBuPEWVkj6VyqrbvauR29oZJ2zeivttNSMbDauvNBma7TdQxau5ZG8ELrJn2ExYvEDoMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aHJngJpm7ErSNWnDKQkMJ9Ksc4Mq2KPQ94N99rbfKQPnHRhVnh5iPZAd9vjbLhs9pnuJQv625SPG4d4DLm9dzDK",
  "key1": "5thEBJUxvdZYTNX8o9NpUtAbjuAw1w6d1kmnsPjbWybe98ivA7fPopPZbPtuG9ephssuxbf6MqTHk6atL5bppBPv",
  "key2": "2oHSq3uKTTjav5usDoSPuyEaA1i3FJVEzXrm8uJez6ucTvDhKPzL28NBLF9Kn2wfgGHmsasgVKsX1LYtt8cksnXE",
  "key3": "8BwpwjHkRB9gKn7CYc686htTVLYMFaB7esACijqvRF9WtS4pwuYZcADwSGf5bR3nt9f3THrFKbgGLu3hcwfhmwT",
  "key4": "466irv2q6bQYUBnQZZ7VPYCBuDftLDa56WXwzFw3w4CZS4bKCtzbDiNjKCRTcLyNjXZk1vp17HtcSHtVvXLNjA9V",
  "key5": "uBk5efn3EtBLQb22hMcxwF5mn2NPMFhNz6WeZjCi5nYNTmxhCLm8JKctBEUyp7FqvkyC1xvTNkpW6ttxL1PSras",
  "key6": "5TLNJgCyxFYrULgZuKiJ5JXGfahUMwYMheriLXg8PsVSCDiFX9RJg8mRFRHe4toL3tZoYgMiRi8ofeYXUuJwrht2",
  "key7": "2Rwo9LsVW5usguBnTaqjHFZ4dNc8C9433rRtPnSd6vrH6NusMGWWkcvJZPKxqXBxLCjS3YNc5Zdp4YAWqTFZyBJC",
  "key8": "Z4WbeocvKmjNhfvNWEto34LZEmJZa8DLvdmRjPnVgTW2VSAJFr922GyCHvbbK58DHyKpgFFEKtSHEa99sQsxhR5",
  "key9": "64211VLXouxRi193ysYS1fPvmPuE3sC9Ek159n47eQbPEMyGDPgKPWAL54cbYw8ab63maKgn7g3Gg7eSURr8AM7u",
  "key10": "p5LDtC7dqB3AAVB3S87gNX7w5Lr27YxQMrBTFYu4iN8HDEbxnaYRfaJxhTjGmrfJVuHa38cxbeV8uoNwta5q2ur",
  "key11": "4ojVHvzar6dnAnnUMb2TcQg42A7VuCHx59tNuGC7ijAiaUVBXq4UrLwRt8VbioJDUbmnBZS3AzrkwqJMDTnGA5Ux",
  "key12": "5ZUMHfNncVpx91qicr7EdQpAZ9m64trpvb3daECpY1nLE9buCgYQNNnHXDaJ8NRuHzVMEZpWMaArqJqn7zjzXecS",
  "key13": "3ofuvMeMnY7VzmEsKHUTPHYyXwYA3P2DhTwZ5JZNmJf5tZE7eAL1Ri5bCSWyHfvT3JMYAjt38FkKNRRvGmXiHDvp",
  "key14": "2Mm1AphMczSj3eAVdar6XsAhpwxdkiNdoqGFwwuDwhrCfVxZXUk5Ae9Sz8aYbK4LBWqSJW51Cq3nU1kJkJqUWQnp",
  "key15": "4eZM3ctcXmyboErbMcwsm7LxDitvZzWbauERyB3WKbKqQvaFDqPxiEHQ2FigQcAVFSiUC7VYBDxXQqnpP1VvhnTt",
  "key16": "2zZ3C7LQQ76w2sKo7jUNttBzgY2a9UXEBnY9CqmEUFoaGw83wLkrvcjLYc6AA4UZg7m84CCYaQgScwouKZAeeAkN",
  "key17": "3mGr6xP8h6ArR58ffM5uXzcw6R2wwXCrLwppP6LU799ywmvszUQX7M4GmwkP1E6uXJQJUTuxzjxTRviAQUoLsGr3",
  "key18": "53FKp5rvffmrxxatrSMhzDRgSYzpKbPi8s8bMxV9r8oEavRfAFPV71BHQVEZ4wbhrbYsKbvQ9zQvgGm8gLcNjSVx",
  "key19": "3CWNMcfUwpGTmh1U9U9ZpXQy8JtugcZZqsrCSLAjaGmmW6KTq8Z64Ky6ZK2CsY7r1Rav2Pntz7Z5jVLm1c6Bi2qM",
  "key20": "2KthRbmHMMCj8ounU4FpnLiWbYZhsv6uxf3VjFZ7SSLvSbcJHU29LB8MybLCYfUs9boiUvTN9CPRnaSWbBUPqYP3",
  "key21": "5Ac3NELhpRhaSYAfweBPcK9jN8DUtoSxqnXCbG1XkqpJXjUrXAeWoLgxbcs5yKJnRi8AgZqmnSm3v8Mm9ZNepjzq",
  "key22": "62WSw676Y2ZQwMq5adKniJwBrsB64oACuZv4UiL3Wh6vuvsgEYRoUsdhdEKdgwzGoi4D9Au9JLfciVH2jHP5mmkV",
  "key23": "4DjVv4dsxctkScrKWV2Pw4ygqs6Hz3cpn63nYHggJZGmMvAyH2Egb17TddrbovoTgQarhYqTLJYAUpBVAR8Q85A8",
  "key24": "55tv9zYPm6BmZLHJ13hXeKh7CnUehrBTy7R8h79WE5c1UNkLM155i9o3JBGQM8ACwc3SrkRodTCqXKRiN7TWpLYB",
  "key25": "21eLYSaLWMYEFPc7a8LKUDBqZewoiNHp57bRvC1choLLxuZLVmtgmYi9TxRXrj5KcnmauW6HEnPgQGqFNnJ5jcdL",
  "key26": "2Y7P7tiwcs6Dv7uBa2xH2ma1wpx5VE8pH6HVQAKaGcX1AokTa7bidP1sobRegrVWkXyHbxYDH9eFZ8PvvZoApycj",
  "key27": "5QF8d86CnmC9fjrh6UZTgHwL4jHgfaPgzyYqaBJgc8ZvXTM1PraNzj4DmMGrtHQPZrEVzcpZXdBs29rKv6prUJ57",
  "key28": "44GqN6DHXBxKpDsecmQcTXK5UhzcikDW3VMN4VnV43YsnfNWa9YpeUUc5Hz285Zf8d4ETkxrSQLQqSmMpPAvDhNK",
  "key29": "3Dpe89Lf4NtaHxWPUAgbcY7r5zE5d7oaa3iyotANYTCMwWyynAYopMm8wQYmbZ2DsK2mg5k8Yez3dJ87dBqZygTJ",
  "key30": "CGaiZUwc4QL1iKmjdvVMZFuddijbpLVtiksa3G3MgvmqNk5EQNDriwUzNa6F6rtXUGJAkd2d1CVdEokyHUyMYkV",
  "key31": "xEcJB4wimwdyF2nrFrGFavyDNShoWpnbS1pvwpkJo4unHHLreb9Cw9KVHSnoWRcnPr1Pxyx172oTUhGxw66TCWN",
  "key32": "55E94e1XPGAqbcKE2pfSDCnBBDvfPH1F4ae2eYZ7mJhyRTYYfvDPQ7MU9Aad7KvUtahFYn8MbU2AoDD6YexwGc1g",
  "key33": "2vyY4wa18D5rgpZMATzhW8DaDDL1Yf5dESfr2w1Xcs8vgKMsAR4fb4LvYNFVYevUZhEg4kQDU5zb7pbgmtVQeJvL",
  "key34": "4uXYwB4bacUS4H4dd8hKypynxD3cMt2km4Y2k4HnXv2RU8akrjNBk41NyLZSQFmbf71hoE3ck5qykeR2dbnDGz7f",
  "key35": "2Yow9dRQFRShUdVknQuTyJA6Gjz4dVbFW4LLKZd8yg9bNUz6DieUL51FK4xS3QS5yKCjcnrUEC2viza2j6Jjd5bb",
  "key36": "2pPfhWJS22pu7UxcShtGaADGF7KUpL5Ynx9M2hZoFpAbPFNvr8UijX7hQByYYypEnyqrK1sHUoAoj9uxgYAMjDy1",
  "key37": "5ybKgAaX7KSeZVwvCRmDQMxayvviR5yyHJD7dZYa1V8aKDfAR8FdrQrac6muPpfv6sK1acxafH2f8KxNSgmvDvEp",
  "key38": "4fHpVzDRPW7hR93ZornotpwkM3S9kN81qVBe7ezQqAPiVTXBXWiNNXKXVkLeGwfjqdPuoZpEDW2u71UDX8sdeA5z",
  "key39": "5Piu9e1iR2GW4rQdScF5F4dj8VWM96HG28FfVNgHiHg8sPMU8Jc8KMDJxgNEcrkqXkh8sNsLyaGHPLrRY2PKizjW",
  "key40": "RZEXG7LamdzDEYgqPkALgeKjhMBFqUetKJDkjVzcadMg5GdP4hQ3jEE4iwV8igTQGSbkejitshKrYAuxsmVqZBn",
  "key41": "437NsCFSu2UHNBRQjs6Nj8vXZBkiUxPEWXvaHUtf3qTnAsCCpBdzVNmEgYVSRGeDnQmEaLbKsDqQTXGL9dDZGFpS",
  "key42": "5PR9k4z6du4cVek8FqFhvDZjxkHJbheW9HUfAsoziU7PvVisyBV1ju3mafxLkNW91fqkzmDjcsa63TxLoAiwgTro",
  "key43": "zKyWPqLwumrztMVRn1uiUH6u6VmKkZ6S6mM3LwHUCLpHUHWxyDd9SJkcA2r5qYt8rNc5J8WNucQwzDAeghk2W9c",
  "key44": "2i7rjVuJh6FjAd6PtWrgiBrNsCQeu2r5GpRw1wC8h9iqGnieNy6anbguEerASD57yuWXnk9rkLYAz9MeoRyookBp",
  "key45": "3inXe434gzTc7SeRttUMjKaqrBxE4JgPvcM43wD45e4NqXqoPu4mAnk2kyPdYKcL2GHTF1jsqaxr7Hgf6W2dyHV8",
  "key46": "3akztfi9SdaYm6krW6sLMkdygLJNA4d6RAvz12ik6rbrz8Yadaf2w8Ld1nH2wt8PQa96M8pgekco1w1vo8hV7WXu",
  "key47": "3E4eTWzeETvrdFE2pugpv7xZ9AfAdd5Y8igHHP7xFJfLRNDcujTUWNhkcRotcRLghExDbjWYLy4QbfCWR3fv9sys",
  "key48": "2qzAYm1p4sN1BMZvkWhTMmi37MAarBmEvugKRfM6VvR4LWGaECuxcx5YNQx55e4R6fWTCuJr3ETDHxRTdApyEE4x"
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
