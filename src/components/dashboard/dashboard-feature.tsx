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
    "3D9Mt5XuqQL9126jMeqNWpjmMxTVCSBa971WNB4w9YWphXcvyV1owaB6xMBPTK3xM8MJWnkqhEMWFVBtoPLfvrdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PQpo9LudnAHQh97AJ222WSf6P72Lhe4KwVV5vGw3rJUyHa3sWSp8HnNSJuEHRWCzzrzk9CPFDVdSLjA6KRdArmF",
  "key1": "2ui8hhDXScfUmnebRwZDmbsA37Z5A4R1PnTxCa79nTZ618yNEsyatoC1hK4cZdgNzkvobZ1JhBMAFNr2wwa275Fb",
  "key2": "43fyXZodBPFqq5RBUWfqWDEnzigivF9hBWNZwq66q7fnpGvbRHtX3rEfWcBYAP9sbE7237XwRvLxfjP63M7LCcSE",
  "key3": "2nUQ3Q4a7cY5tdv97zvXUAx5PRHoJSyRPtcA2mG8SwLq2YGRBXLTKfbVTQmiHmCH464X8QqEera17SrMffoHzWiW",
  "key4": "4wzTG3RdRzzTAzZnJDQ3dHU6NecyAopubTMuga4inpLHqRdsEzqqhxZnFEGyUBfirmwVVqkmSc7bPjdC7ydeXCoR",
  "key5": "4yTGBA5Ki3Z8bdCK8dYVXfvn3rPRNEUT7PeY8wexMF5o2ksgLUvUEXrR8qTBNvMHv5zYujmmrVZMKUmLFivRb1kF",
  "key6": "3X9XaNfM9JsULoPMuS9ki1Gh99MnKDvrQ3ZiaJRN9VKsJHscKert9r7yH6uwU6upDj621ScmHagFAbkwjtajU857",
  "key7": "2Umsef3GPSf9sWf71aVxqf4zzYZZ4Hd2Jtw1MSehwEHbdmUm4j9VpYuiMcQA32jUgokYofoL7iuXZHgGAzezKZsg",
  "key8": "3yuHMSK3So4eXfBjzttqzjthRigTsjprSRkUxpwC9Acxez6S9LJhwd6rLLfpYbbMdmsQ42cbspNcE17kevny2uxy",
  "key9": "4p3J9rqPvXNzmGpt9WNMGz5PFCHDrMjmyr2gpTbJzb89KxSEVWsCMBcU9HGajSyC6EobK1GW53VJH3BkwubgPmHC",
  "key10": "21CxwmwGaKRmSD7GMH7EkZ25vB3w9mgbujqFgUa7xmVGgaQPqSCYnoRXiQo5Y4pEjtGunwevoQMWe6GTYvRyTvUd",
  "key11": "5U2LD8VeUV6mPApbmG5VDhC8nfusqYAEivmzfTcr5zFALmyBSXPLSd2Cq5EKNEf75WHLGKWqqbttmwqPrJFgQqES",
  "key12": "35R8CJRpQ2PGf2qtgzwfhgFXMpMRv4bavwbcofCCCTYnvQMBoQHNSrZPRRrgEETAhLoxhBU49EewipbD1Mj4LpdZ",
  "key13": "P9reBt8dA3N2CQNearqDZmso6cawHuTkDquw8YzDCt7ntRFgv7A1gRb6jxo3sNm7znf94TcEWAGvAbeutnyA1Rx",
  "key14": "55ChkmdHBYZErquUujKzN9cPm2qAVCfti2tb9hr5bfWSR4qzudNpMtysQPvvKHox9nFs6bNZAFaaBB2Dqonqe4QS",
  "key15": "212DE4YVMhA8ZQWoxEKJWcZyEirW9rn4ZpG4Pef3KUT51mr32iPf8GG1svrLqse9S7nLQnHR9NoopQRHaCmkEjm7",
  "key16": "67GW3ZN5Y2ASK2pqhu2uqrLarcnyBfhdMAR9Egkou3eGa1J9gxwUai1n2RLydpQEotGVMD1eJ7tanNxSuvDY69EW",
  "key17": "4Qks6WDYkHneKj9jeGttoytSpg6RBaEEUQ394n1nzdpyj1NV8itAesH2Es8AVfpfQUmh4tu95D4K4CywDQwumwH7",
  "key18": "22KYbfCja9fKisGkRoKssKKAep3eZsxZFfrPb9rXdzhRTYhWdjLSHob3vYTiHsbree4bZNxrWYbEKArgAA5j2nYD",
  "key19": "adwLvHsSYitGXa7DkQBjjUUwrKDZYFLbkaYpP2y42hDG36K7Cj7x2xfinyrLExqogtVjYPgs3pgVs4mq1G4RDXZ",
  "key20": "63HHZJnegYnkqVjdD3AbPgpXMSxeMiunjW214gxiU5WBmaNE1i5hbTamVV9hVkRUkErT963iC3zTBpEV4P5qwZQD",
  "key21": "2u6NTwBYWxfy3UxLGicspDCoEFJ5eZtwXYh8nWxcV5PnRqqaQHidP1dpp7PSrpWnH19JiJddjJxsrTVGZrTQNYTH",
  "key22": "5DwzBbzfM6B44pdVzkUYH2zpTqNZYypU3QmGDdGrtnb3UnhArdG4QGqvzkBvzbYx3kNrqecQgtZqMGnY2z7WpVco",
  "key23": "6ZqQUGyqcNrKrmX3Z2PGeWq77p27U3iYFVgH2LUX9Jv7HRR79G3Xr17unKUh6b5LKhVNjimG3dnyJEDzKkCvDA8",
  "key24": "5NPR13UK24QX7n7u3nY9iZu7ecHe8Cj1oxBGmCxn16V1bMKXR6hiTqWRbYc72c7afinwJeZcqh7DrXKJAJCLaP5Z",
  "key25": "2WMcTHLU8yBRfj362MJEVUgQfDsuMGk8H7sHUwNbkAV5Q33C8xaEqKPu8PPQaJxJaP6XU4jA6EntrcJCLSXiSUVa",
  "key26": "3L2ftbxH2zLqYEB7qhyD6u5ZS6FV9PV1CprK6zXDiZARbQZLrc9U1N2GS5pZ83GxcFvLtReJFokpmDZAL78sXnyY",
  "key27": "2VE1FHZEXchkPCqiMpJJD2hmrg5pxoeNphrtEqZZanLBWsUXZTJbCMZrcEg894uFvHtg58xbgMAhC8c5spD9HjyV",
  "key28": "59xwh9z2z1HXhFx3ALBjXaX2Dp5zouecpirkNCQBoUSp8KcAebCzwnQNXSihZJyg9hdyYtkWCwLkFJAQih37Crx6",
  "key29": "3n7yVTaYHoVmAQmBRcrd8yKD1Yy37fKY5VhbPApdEAvHGjcB6JSYZ2ZMRWsyLx9pkji4d5UaUbT86xoN1PTP7GMF",
  "key30": "2DrMGU2yLcmRAcF5fQaknYSkMP4mCpgX21fguc1bxLcWaqghvUU7zFUh7sKyLccKH6VBQgvQfziGZt2un7D4yhtZ"
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
