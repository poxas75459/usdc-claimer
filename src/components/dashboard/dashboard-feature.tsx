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
    "3K9EkbXaoXG91A6SszP2Dgee563oqhZDcaAaALbcjDdkfJHxTXNvdUbaVKMaBfmQ2QjkPsHnPPGMwwSMumS4ikW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TKc2gxR87nqmoNQYu973HTF85gxJZWaLrB61BWuHnkSByMabAwkNh1H7iLWLa25i9Rrkdurd5Ay5VLKRiTViw15",
  "key1": "2MM1BBXjEZSZjMGdyh37EF18VCHgWY5o14RqBFm9i8kGcmpJBiyLZSkG9A9M5pdRnyL9fUxcCAxDc1WMFHa487FY",
  "key2": "42CQaKLHemtst2byN5B9ocNiQ71WQwVArZoSuh3U4cFVKjv1DMg5ymKjvRe4t8rWzNxzY5Dc1NwJ5K5wpbRMXPDP",
  "key3": "4gN5AgTZNgsJfGuuDE7f2spb67HakThc6EUi2SJohqWNu1itqowmfMPFfQgdWQQEdvbogJzXnixhjKZEj6FpCoYy",
  "key4": "4dJLoxLUJU2q2vwupVsYxpfSCoj9zL4Z7nLXMtMEnAVMnmcAsB9yg6ZEt7HXeqxC7HLNh9hiCJqcu4q1KFCe6K5d",
  "key5": "3hBmqiGGJ1rmgKzDbNd6qynfWUSAvf393upNXoiGdE8XffdhciYQGrudbV2EdWv4Xqo7Xvt133J25ZDm2qSVLbnu",
  "key6": "2R8JN8cJ8NhPEZoWMzWLN3T1GRphkbKKNbLKqn7c6UaaQDSfSCG8as9WrsnJ38pMrmLQMsAkHxToix7TnyHonepv",
  "key7": "5iqiKLnWVDdE8Am9mgqUjzyj1g79hwYE4ogN1G1K7KMzQH5CNBt5TuUCthXgTSyZPU5EfuiD2Pcspbj6mZdCNAgm",
  "key8": "5mvpBKbRUXLfZAYZ6AnCqpQdNFe1xJFhVgc95vndB7AZMEZv1KMQFJfBMerx7iPP7CEgHKQmK2BDZvmKPKacuKkP",
  "key9": "3YLsekgqLfToCfnsPuGcuc91y6s6NHrDYDM75QPei2StKKxC2FGHT8SLeFVDK69XEBwDsfCsy6suD35GeG2UJvwu",
  "key10": "2z4GEhLxue4V2UNA9F5MAedLurBfros15kp3RdG6dzbtZyKp5WhhJ2Ayd2jBKSKaGggauBMc9jvTznVNNb2oa9yY",
  "key11": "3fUbx4rEaP18XNVuqBqDor1A424MNCqgjae5AtPdkqApLWGDzFhQwUdBQiZyoJ8AULDKZ3AisYK5aXBhhqJ8Jv5X",
  "key12": "4r1NmhNjGMkGnxWPNaQPmLtasHaQUQrunJEy8nvJVxhMHNHDhFcRbhqogJPdNrmE6rCvSZi7kEBkyYjunw4bh1yG",
  "key13": "8NX72S4XjV68QkWvengRNULJVY5bvhmdXw7vtSkw2HvuwxTxo9qA1GMiZtSWGGx8XqgVQpSYMXoqRsHVnMtYe67",
  "key14": "4cjHb9hWjqoYWF36F3i3Qb94mQq2zxeCjRq8QEtNw34Y8RN8rfi2qXszY6TfnnWZi2mu8dA5zk4JY4gzvrPDcG4t",
  "key15": "2h8TpwfKFeYGBQCcy9kT2THSDJhf8tpwwmXU6yQ8GQoFQXs2xbbo5qWNHBHPh4AfKc6Zr2mdTFVG5NFyKac8W8R",
  "key16": "2BQjecjrrorYD7oHMKP6xX5LxBLqtTkFnJigCH9rv7Ks4NgXgzdg9gSC7KsLqiJshPPdV7AQfwqtszs1hNLnDJwm",
  "key17": "2RQb6j9sp8aPMAKqkjjJr5zxmPvevQdJF7ivqjoyCSwTqpyLoYVhX1gh14ebpKuynDzqJf5ckk7iMMeqW8twVGJG",
  "key18": "4ysbTTwviKQRH2gPZn4yLFChu3YyfkS4fhm8kQ4GUTtAgDYrth5RxEChiRj5a9F7jT5Bx9By27eaCknZ3yaSVhWQ",
  "key19": "4qiQqfvNbAgMBaHizAkxQ2f8Z9Y1Ve656zR2HtrWaDcvVjJP1NX9a42b92MWAotzSvkfmgF269auHcLKbBCR1Szm",
  "key20": "2pZW7UcESVryJPYLo4Lza7guRNnQbf1NFKyg3BzQhWYCTaL6nWv2Sqr84Y3sG7GD36b7UmTX4LUXwwfXt7yrpB9L",
  "key21": "VUFG732xVjbhQJDLhChdpp8FUxFzKswtDg12smArF9DmEd9dBJ21RADt8yFUt4CoW5URcTognfVjkK4S1gJC3gq",
  "key22": "568sq55GUGDbFsTrrbxWokCBU7i7EMpswCEzSXLhwroLZ1pa4w2k1R6AiwXHUeS4Yx5frX4SWJ89gvhUgcHAKhsA",
  "key23": "VZzKDTSQhykbQTzGx6oSQLGujCkaidK57jzT1iHcsrVV9jVTWiiRrxxxoPgdpGFhyEbqE3HTPsqRtwPwKCTJCpX",
  "key24": "5Fqoy2eCp9bjqUDLHiKHgh7xoGPR2b4Pu6r1uwtpaVH61HnsnLb95h2zJbKGksNnBgcZNUBXm2i1wXmYngZJVBSJ",
  "key25": "2na4sGxjB6td3XANKMgPLFwj4V4LxWRXHVZowiuMbqF89omgxWcCs9jtfygLYT1wrVAfT7ZopDdCVsttLPBBYwz5",
  "key26": "3QgQ5GYv5edET5g9dFWg2XjCEX1aLsMpqQ7au7tpM2NVDX3Kzpg12jBZPRnLvKrZzvtaLsAS1cde6SuLtDEi2vdP",
  "key27": "5uJzRhNwA3dNMdhi3tmeNvDNS8Nbonvm6GGYvAgGdrEALkZBRKLXQq4iZBCC7JNGsUaa4k8uHeNSMomA3ULxnQ2p",
  "key28": "vmAAkTw99vUDqhiUqn8pYcLo1mKK14UwoxnF8Qb9GTGAnEdiu7CusEEVPCpZUpLZAKc6pqV841Rn3wpzqkXgbBg"
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
