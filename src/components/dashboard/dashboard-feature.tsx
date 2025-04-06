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
    "24pWuL3JcxtrhsbwN5EzxfCEWPCNomtiYRwokEvJj7jSed6uy4h7h6m8G4pXvhnFZHiJAUTYc3SmihQbyzBf6wd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BkWGtphBcn7k8vCUBk1Dd8iDSDaKjEQCvstT8PAG63oRuPerxba4NiGx5oF7EaNvFpwYxQ2ciN6p7LxhT8j7z3z",
  "key1": "42jsAKEocfmGfuYegEW7SZzCvs4mQuh36Y7FBY9Q5NAyxTDvao1QSfwr9sDE3a7vhqR5uHTZHbPeNNFMyy7TBh6X",
  "key2": "3S32KuzZ3NBoDfQ1BP94vJqoVQiTGCByQnRchsdzNNRdkUamoevfzT6YBRogmGxJ8gaYLjF1JzaVgjJRiLcuBgvE",
  "key3": "2ozAmLE5GKdgbGV81trN8YbnAFenFvh6joGBe96Um93bAsvskdWLFspjZNAMDwosRHijfaEgUrVoFcKXQATHiruG",
  "key4": "52sdSUYrwkswUi1q8EPEQndmAwTZAChA4dGNAQJjB2oxZwEtZL5S2Lwc3BwmjpACBS1uKmRitTDr4f3Yw3ikVwCZ",
  "key5": "3rCoTW5WXnAruuWq3rwTgnucDaKZyUstGyxbKuxL9BnveK5rDAmzdBgznL2Cnskm8AvPBJ9TyvtS9TdB1JbLuHzz",
  "key6": "2b7vf4MsvZDLWMR89evc5YRRkxXBHy4HQiZymt4aiBXnAnEdZf2rjPYUM1iirWeDEUgGGgvFcrSAUW8nfCGHfUSr",
  "key7": "3iEKCD9CLEYtwbqsmLCRrpQsCSUZGYxKx2HNcCiKp7m9SarwrUYJ5YmDu8wy1PeVyg4sz7jKUzttKDChK2aqmUvs",
  "key8": "5E1iPPwX8vnje6Z9WS9qgbdtqPE6P7fg4fKD9NUyTUFc4J54917ezyhx82VYttojQjko1M6jfYsjzemz5XDDVmqq",
  "key9": "2QwBQGX96ZzA2zp8ZTJ94K3acgLevWqYMJLUShH29Rmto6DkASKSWLN4TT9AsXr7g83Bc6BM9LrPYjFh639hCtHa",
  "key10": "3Z5tLVEh8YaLEhqXDoTdKbtB71TxMQSTnTVZ3fnG6FAp2Nx3hymrzBjhpmb2tS2WSGntcfTgZeb9ZHniv65HYLhy",
  "key11": "59HoxgUW7b1q3np4CDkJa9QADE858pHumTp3qCyyT5j4F2Nkkaqz2cUW55aDpE6B4TVSkNxAd5HAnXS6Kf1Z4w2Y",
  "key12": "4chVremCqAzTSzquracKPHFAf2p4t98KzNy9Bq3sM8kYAhPRXXwU5p45sQaaXyf4qv2vCWh4BWqFG9iN8f5h1kPt",
  "key13": "2wByCvqjjnZodLedpiS8XWTi3RKCurXzGUhJE18x553H9KrQP423gV7MZjVYu2hdSdvRQFCtCyKSzajsPNgrSTKE",
  "key14": "4gy2bLNgJ59dfeMQsVgGcN1RbUF5xTtW6ZTfCAbGd6XSQeAEBQ3WgT64tWt9CBKxHBSNQWnxXDH4vg6GDa8YxgLf",
  "key15": "3Y46jvUohpSTzrjvFi86xFYNmBL1nqBDGKJmN4zZp3XqhwqTeoUGvd1HGHMpyyDqiuf8zNuevrd24TzUKYKvHoM4",
  "key16": "5KvJimGVn8HwBFtbJ2JMrpR6hyeeRtJu9s6S578PT4abCHVqGdJ1iXoH2X5bad8vwi2bdB47F99KKziDtqx3vHqv",
  "key17": "2eG4H8HrBYGDSmeT9Lg8zPjCXz2d59p7YzqYnAYhi8sUeqWEbo4ckRiYP2EVW3ZDh84tLZgxTgddQJjnZ9zntieR",
  "key18": "4ped5nbptNY2TnHa6Y5ZbMTRR81vBrvndEku1QKQQT696xRmRD9x83z86CabjQeG3iALo7dqANrMKomu9bfj7Xj1",
  "key19": "4kr8DCWRbDBuTRyyiiS4i8SHWtkoxDPWxpBo5KSyHoN1wsGTcYsA3QvrdoeXxkNZPoVfPf3PJJTHs8cBwhDobrwc",
  "key20": "5gAF94z3AJFMQB6ubYPyjTAVy9coVbVeXWJuqnR7pv7QLyKxtY5wSjmMV6hAkDuFY4XY9bKBwUAgFueHr1icZgH4",
  "key21": "2W9NfmZENbRJCZUSpADMnJNPyDwWBA7cK2r4MX7KmuiC4vcPhcogZqcHvVDJf2WB2iKHJqjcvUhnSMwcbdWkTPeu",
  "key22": "2sutcRH1Dic2dAwjDyUUoRw8NmZ4usBeewTXSxMrQ9wTgYGPTgKQziLuM5MJpVYk5eaMdP444MwKfutgNtr1em2g",
  "key23": "i4LUf36iF6aWWREAytr7bN5xk6HAT6wxskZDVkSBYvFKjaJ2iZiiikRuHyBPXJQ6CE7cX6h1g4cVz7vLTyKEVx3",
  "key24": "h2EXte2kjD7dBHxeBxtJ84qM8dmLBWvTC4Xoi2KxcUmiabiZdEcK9dK4s4WawyCZ2UMCoBJidiB5b8tT1HRSCZ7",
  "key25": "56cvPyodGRDRE5aXdnWAFrx9LVUmbL4tHQGZZr2HmxxpoKBygFENFUbz6bfZVJ1W5UQ5JEr4FnYUAGHsyzf3AU81",
  "key26": "37UcJ4LPoWZd8Gz4tHTPnZ1RyCBg7qUsKGUH3nGK8hW4sxdEVtqXTNj7WwBRw5NReLgwJ27ebH6v7sn8WJZzAYzn",
  "key27": "5P3MNXFCSKc38zXuL2LKVb4ML8wVZhXYZjQh3rAEAskLJguzr1wFCefNBn2KBNyCddzRdiSs2PbdX5esP5TBjAvN",
  "key28": "ByD7BFhKkPKdVhpjiE9LahD4nW8ve2Ub6FHoGuqzV2SMA8jRoMUEVwxZN5a6vREgvjGDGbwWYVbkoFJqNtRyDud",
  "key29": "495dsmbLNEfecdUJ9vCG9arzBgrEUR7zb7ezQaBAdYWyTtaP6dGbjoB2uTs9k7gThyv4j61qZrxycbBcbsG7LQJT",
  "key30": "4c3eEswxYXdxNShQmkyDFofttKXGxdmczon2sBBMZ59T6B1sys2HC2qBPsVLBPc7WHqNgRgHSsbSScufr2uAH2Yy",
  "key31": "4ohuBBbxzVujQ6BJREzTVwXhzShgfbtfMXT38B36MRzSabDqbn6e4RcBjmgpU9X8CNF3rhFCimaSX5rcbVeppxBt"
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
