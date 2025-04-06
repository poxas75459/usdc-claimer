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
    "NPYSWEe6up7qcJ4QqXpJa9ZSTTNtLHL4ePT73ocW9VvGKr6RKGkQsv3dfUk28HpxsRGSSnFZxqQQys26RJAswM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zgbWLMdRV2HH1rasUCxDQtmp3UQNJd1g5VaFCGtuPD42tsQtctE1RzeowjZt2RfrUvFLuzomPHwX9JLHCETzv4z",
  "key1": "63PGRuGjG3oEMmif3gsX5smvjJ213uquSqm5psxDGHozpsywvxcAoMWpZNxMGc6NKSCdd5fUS83EbxMcLwps1hzU",
  "key2": "oRfaJnVGLdhBCavBofD3NkBz38FVcr1MVhGssYS1oeUWwnPi5Ej5st45evPUU7CM5z9TpcJaCTy49sS5qcZ4JrK",
  "key3": "MbdkHJDF54djwzLUjBdCiY4BpG94PudHjjVasNdKybJxHYJHZm7S8SBWboNJFEXkteAEjXrxtgbD4s6n8syqCZM",
  "key4": "5vxUQK8QCyGscZ4KwABLsboJpsA5vZeghAqXtnKjNMpWDaSBKmYx9pg9wGrpiP7cwmNpVHQbNyhY39Q7k76WaeAD",
  "key5": "5k6NqabbZ7um2cX17v147K9uu4d6mR9wnqUktdv1EdT23ssUZb41txacE5d2dFDHzwieRF9P3zeFtYLBWUbrcLuW",
  "key6": "2vtnv2kvhgTyafpUJ6nhoEwoN3KTesuTf1Sxnf6ruPkek87idghBXp91wpvq5P6M5ksL6KYU4UD8yr73ctfsHqM9",
  "key7": "bXRrh19SwppWu3fPe8ZMruAekKcvXneTigR1MMZFtqrrMUwe6d1UyFPbiWEU5PBkXHMMb86TqaL8gX6gnW6FL6B",
  "key8": "1Wa3nxmnu2NEYTZq5iEF29WpfVvDDdYWXpwi9mjPWdBuAyeXbKF8snanuJok1Q6b7hYAwrrZKLHuLVvXBZ8sNTQ",
  "key9": "2tERUEBcWdFyjAeM4kNL4nnU4N3QRSGbxZkQgyqNisBJNjCCQetmEAVD3QxpRHt4TgDZHFmHp64ZKZoFQpT1trVc",
  "key10": "3e39aRwr2CrknoNSj7D8qG3dkW2tFi713XqUFEKaXowcfiEH8Z1ZEboFEyWnp55j187CVBKnssZzczUem1sAC4NH",
  "key11": "3zrambZ8zsxQSsjBMEcFBY6hx5aM1yKJsDbP48gri6mSvbATDpczhNzeEpeuntE768fnw7BLKmQsuRvRazrp6Bie",
  "key12": "5QHyRmMvWqSAbEorARcjvCgU9EcKX3dPoUs4Ej9kcyus5cp26g9k29iCchMJu6h415bDM2VGZhQCZGcpExgTSWg8",
  "key13": "49C61Qr7qXiwfjqtFvJspGdjzt1k6Ya9quduJ4wLgvtS3MKnMFtuRbnTJorquam1dz5F7gZEX48LqsAoZi1ydx2W",
  "key14": "RPh9A2THP5QX3fQAz8wubs9H9imYyZHLaBqZ3atAke8vEXYPKB91JkWt5SprA8L9bmEpzdq2nFznNmBnJ4vWYQM",
  "key15": "4sMQzgznUSgYbEwhU75zU7ERT7FFtipXU1DfLatQZUiUoJBNAUfwbnrjv59s6tojgQaCJXCrhUxUidcBBcdaoDTC",
  "key16": "3oq7sMPYbK38EdbNzUnxZwoHWmE6MH9FQ7BsBJco9w12S9MHNuEFKHVNpQ39Z3HNhwzDZmpAiQP4BrRRMvisteWH",
  "key17": "2hU6FZyqXqApvVH9V62SDjxGPA96QeNWr1iQtkjvp7FZf4RXMeg4JxEBW9XPmuuQpTitEwrRrKLtVong8WxxDcpC",
  "key18": "5wbLz3QhDi625521Jggf4qPy88UaTtdwW8Uy7diAssjrxaifq7g8wbBUuJo9UcWTMZaCQdbj8uYfsmnaWviW6tAh",
  "key19": "5XiQXp7tayQtj7r4K13egRt8GfKe8Rcd4BU65n8aJpZukyUv1iUPApu3HMZU6oYLE7LHa7kcnfcKHiEcxpqic1nU",
  "key20": "53GP633FTbruNPepfJLuXM23Qxc7gD8Kbc5QawDgHUBuSNAxnyw8mYP4VE1QQp4hdgYY4s5GE5XyfJd7dCLnJrm4",
  "key21": "4ivZ3E1cGFFvbvNiYMjjGf8wjcPoJ9LMQULnA7S2GjBt9vSkWDckTGQgnVZ9xzsAZdcskcocWDZ1JttkkCWPQZED",
  "key22": "3t6aLLyiQp7AryMDWvWuGzFkUopbV6DPQJPewJorWRGDVWEUrtteUE9gfofUFtjp9jAA9tSJGCUeQ349P6hiRPK9",
  "key23": "491tfcv2Qkw7DbhKK8Ntc3GNGjxXwNvcyWTKAEg1pbhCTPRsK9z8BHGKzqJo2kvGdxhHDngkNRodjMTCeSRa1hGs",
  "key24": "KMrpK9G3YYm9oqDkW2FU8mm2R9m8ReR4YGuTdpFhte57SvkwxirvFo3fWYQVg8Y9JG9TKXXuAFaaRp5D25ipyBQ",
  "key25": "4d6tmTMqchWKQ2BLHv4N4CCEdkDLUisHi77UqcwszUEgHZpvJbqYeYdyMqnySLHFujuryQH6NSPUQWSa8SWRt25U",
  "key26": "pXKGk6vidYGUgb7Dhf7BfsiLp8yXUezRxayqDriFj9vhUuc8qHRhB65mwnrmXnzKA7ZPAC6x1Ur16Q3mi4eZ4Vx",
  "key27": "c217sXm9sP6MFKEkiigDC8iXho8kf8NyKmA4D7Xg5H1fME3fMe3itkKGm2RLzo8ucpjaWAP8CUxdspKWGxR34Cx",
  "key28": "2wzki7ugMCDWzoKsDQzghaqCP8LmdTMd3L7M9i6miHby3fQWfLdFszARB9ACCSm8cwwxNMUGd59vsZxYouj3wuJJ",
  "key29": "4VhxhSyszfnHsYbqgK9w6dPX4i6nvpUnJyS9bUuVQAhwJvHVNjbxvCKoim1R5h88TtckxhH5c5xzKZHtK7rWxskq",
  "key30": "4X1pZ7o7rA94W5d3sBbakiVsMtMTbvEgD2iwjN6QWeDn8qtqdzpKmCtjk1yFtfmQDeWKKpsS3J8c6JUffFdxecoP",
  "key31": "5mfrCwin5KaXGxVNsb8ZYsXFexS7YKYPoW8cgGkELPbQpne77BdK9Po2VkAaQcct4yVYUUdqW7sLuzySdm8gapt2",
  "key32": "4CrEgspB2kygx9BBwSSz1buJJZi921QZhG8k1scWSEccvAyr8hygR4tZ35X5XmpoU1STYgqTgbmZgcLWsHAsrUYE",
  "key33": "4RewA5s2EiATQVeXTESy7uVL7FUd4hwneCEQRNxgDaj7vhfGaAXNrtm8GmCF584EF5yRJi6GS7AidgQ1bv97PCVX",
  "key34": "5M3LsdKMh32DKbtXJNqAbQH5wufPUj8ZjkvDnFdQXtQkHntiezNcq2gLqTGv5NYG4oS4BSnwmLns6HqKKLL2GKtn",
  "key35": "2c4sAnPchnz35cvrLPRu9QtFo4HaCQfEYsmWCTKEDHNHnLnJqjr8cK9zybS5SmyPoTDTm6zeNe6EFkv1Y7o9X73i"
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
