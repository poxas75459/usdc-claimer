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
    "2QLcpwhw8gPGfN6KVkFeSmMrAf2bh697mJuEEX8BPXvn5t3dkv78FNw6k2FBp69QNWCNubrPAj9SprbsC6Nw7hYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ggYsx3xFhXCqsPNYZ7ogTU4UbqGqfwtQMft25JqC8XyJ5h72BefEiroDnDB4wb3sM1AFbMVT7rYygnYLenvfB1Y",
  "key1": "3PGbhCLL7mBBgTXtwevL4JgJiBthXjAAsY2EN8GPRsAAxKWnJTGpiFNH28mg6trc9Na316VYJwBTuuLQnA8sxKWQ",
  "key2": "dZciuTn8MS3perfCbFBi8DddoZYxESSLGoyBRJidcKXhWxHK4DTxyxRqYYM9RDjc7RK3oECMpCLDinXQWe7dh6J",
  "key3": "64KCuTZc4NxuFTddC18qXSaXPNiArsvWLsRAdvTpVVLsxv5K4UAAB6U1Dq8tEbCSrNrsRFmnybHSJtFeXTBwMPHB",
  "key4": "5MNYjzNc4n8WSh9m5j9G8fxLhBMkdSxbjSKTwnagpPZha3moX5pDJQcURr5uUXx1cePJoepXQ2iWLLYDhNMJYCZH",
  "key5": "5WVpLTLwAGfUuCvSrD1knFdTudxf61PKxPjhq6wWBQBDwGcL4x7NATpsk1dV85yNbe1KQ1TVeRhog2VDffmxq6uS",
  "key6": "279Qhi56hpdeXjN19rkMe8LYC3BbpQ8uYbxjGCMAGcaP4K6TEAbdQghx7EBB4t13FUweiz2b85WHmGs88ZaxWPu4",
  "key7": "5sAm4mZ7YyxMbGvqo1Zxv8knVrXX68R2qZqL92zGeEGs2Kxg4s1zxRutWSwqkejVdzkaxBg6JHmkmkkJ6DeSs19o",
  "key8": "5s5bQatGXWo4F4aUZkigTzPjLgaqch3Ew329kAnRQZ9t2zAyJTjE2yrRPn5GwXmwkU7HJtgc7o1Vc7RwaJ5sv3ir",
  "key9": "2zboN3H3FGRrpzx1CTpfY1oJYFwRLny39TyaK65GTirx59K8FYKMXh91kL83hGEREeLTBDpwMqYWbdxCCwqbjzbi",
  "key10": "wykW7jXDY4uXSdFaD8nY5Fu6Y3P8qwrpH5mm8oz7ivCNg7insCLCKEBjXAKu6tBMMNaJ1V5rXG9A5ohWi3w3tCU",
  "key11": "3fAa2YoqrJQUU3bBgKTKKSPgMcNv2x5dCmGoQRCyzNiwQAv2uV2eGkz1ot5jXe2CPpBX7u31MQdKrpdvCQWTHa4z",
  "key12": "4FinnUW14ok9nFHBGnJynTZqGAgPGKuB4QdKK3W9hCD4XRo65nLrwFK6VwgwtZJqvi4AS2oASQYf7qe7wTVLo8pv",
  "key13": "28eL3jcCbP1qBdHu4h9GYy1UU9D7VNHp6eN1knrwkfD4D85sw5Xfz78k8y8NZmY3qkGdDRJdr4ECWgnkUJZ8UahU",
  "key14": "3fxnYmY2y6wERYJeoHmbPUHeAv2ucR6kg5J12SUyTXQZ73aEu8n5z8Jm2Y13V4CihN1FrTsKyc2zmqm25hz8rKK",
  "key15": "4NtqR2sLSMxgATMHkUibYhpGrSvzm56C2QXNX9attAT5JNQFhYdz2gSBd2EMCt4LGYc4TnBauGTEpfGpTH1JNzkW",
  "key16": "fnjsu85Tgam88xd7JaijjBrNEMStvchSWKZTFKAvuDMZJrsA9VVbMmeVKKzPGMGcTGGq8wxFFwE5HBe34C3HPgC",
  "key17": "3W74kWUsK79x2XeQhMSV8kLoW5T8q5pacPGoTNw73hYGWBbWBTJdieDgG79YfRSLRYSJLPp3fwq8BGTH6gtQ6Ut8",
  "key18": "4k8Vk6ccdPzbBmatqA745yjTjFgYkgThnasZsrLj5EPSyyRtRbzPkvwchVrimL8u3P4QwRXfB7nzF6yHnh1XGsqR",
  "key19": "2ecRUAfEaKZQnjh4iXvxpadBQuXTW6gwjb8dtFRTbXakv3ck3NY9jYhfffjaLpxwhvqXvDdeZWH5xT3fmJ5EfDwt",
  "key20": "45ihbXvqdj5XznTeiRBtq2LsrraLkBF2VUeeRzWQZkjXpQSD3W23Z5rxL3RManun9FQgEaEZys5sJwWuaVK8Fis9",
  "key21": "5MV8nMb6pqL3JUJC6WF1hwnVf3BXeCUUHKJGEgRwAF8yxCS9eazSoaBEn3A4wbPS43iwBS6Z7EppbNZSXC4q5TPT",
  "key22": "2nLeWWg9R5xoVtN3NAKZsGZxMAcpsx7yCMtyvaGmhb8WUQUbjcnsZjfVpjBq3oFxjp8SjTyeXw7e5xU7QsDRseq3",
  "key23": "3hiA97jmc9U3ycb6REXj1p3jBNyPFWgdh12NqCxHC3xcLjvYwMtdFnj9KJLYtxskYTyaanDjfJcxm4ypmT5cve5W",
  "key24": "3Ehh3Lt8EQS361vFiRaVCjrRAX1qdctx9JJ7soJ2bseiCjY7JGWSkoB9X62Ze5BbMWLUwRPfaS5H3Xk9wwQR1Rv8",
  "key25": "2ZPkXR3A8YGtwfX13dgdTerMatmikohXsrn2vKUUTqgYEWDao4X9RRE1rx2gjxGAawYdAyzG9GWjHd4jTQ2Jf2tu",
  "key26": "2JEH36JNUQypdaY9yAnkDWg4ZCVbFb2FW9LdcQJZYxdrjTcsy5XRxjxuvA2PPBrEAETiYnLe5Hk1E3QjdFy4hCnd",
  "key27": "3PLcNsFQEDi9qXKwK8in51b3SLaSYNJGt1RcppFJJVq4fhTNAAogteAhgHo38Tfa43eoqJp2hBDPpmcBY1PPRj3w",
  "key28": "3k5jxHU7B9efNgMLxuAyuHm9x1CHJkPsJTcWq9oWHNu6mnbavzk5VB1dkBgXRiCmLJhExXhUh4huCHiHE57uqZ1v",
  "key29": "4udBbX3U4dTsa8jC8yyK4UeBq472x7E6PAzkaV4hX3cxFHmTdii1CaMiRWsyTMDU1GuoV5Pq5c6ci3c3Wwmw5UEj"
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
