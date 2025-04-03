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
    "5N6RCdEE7jW8gWSCu3MMxDzKKVpcQdADFfcyt2WhFbgtkSXT5TsvVPoPdpwFiHP6RMivbKaUa5DQb5Bfh9Mo5cTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UAvSGJ8z1pJamwXYPdGHnFeg3itvGSyKvhgUes9yhiKVeMXgk5Y56iGkDkLiBQcTWDDpcPwgpgPcAfc4V3ojKNL",
  "key1": "46WjxzBVi6DDikDQgpeaZ1N9Mu53ybEBNjRU7jEmWUJQbX8sGsfTQorchSebxWfXCYxndgLBXLpnjFVT1jC5zBp6",
  "key2": "5aHdXxe9a9LJimuW5ypMzmbuidAeVRg8cRA8ZrKQdp6iyjJxrfokg2Xv2tT4oqTh7kWbuHQY57ETGc79aCCQkSKt",
  "key3": "3QJxwsVPi128jVyjbATpQ5q8mL4KVYGsNCTggbRRvSUD7dcPzaGYy75wiByaUrCND7pX814TbExQWShqDam17gB6",
  "key4": "3qq4z1MsnYWAdh4xFZhEHfS4xcQojRCYdZ2wmmQo1uxzTH3dfe7B9cowDWeMPmBLeosfja4pguq1Bq1omqd24TAx",
  "key5": "5UZrKRQPnatAEdZwD9HyztWz8Rbf972YsMXFHfVAnzoH3reJySajxtgh3XW3ResMV5KJcBYX9juwnXMjZNntGGfX",
  "key6": "594QAmpvTbkZEJ62k93G47uw3UNhhyh1rTPqT2YCP4WQUafaJALojCUPrDaDVXbAP1nrTLbjo65Jcxja2TQUAFK4",
  "key7": "4fNGFhgFmHi3BMaEw6nzRzpD1bzgSygZU1m6ckWWs6NXkqENS7pc2z39AyKyaRebtjVpwvxYgnKt3tVybTN4pWtc",
  "key8": "3zkfoRnKGH9woXFKtYDYSThzp6fQqVsZqDnAAr72hfAFygd2iVMBC9kYokFe4evfjTTRP2SdmQ3XWxDMyrJsgkWf",
  "key9": "wgZ7J94dyrgmPzQ8kmx8nVu9s6E6NHJXucshdEF6Zro5jfcWkFvY2WshXLpTErupM7g6w9ZNE7GwPKYGUQN4kJD",
  "key10": "2jm2EwHGoCA8JCsMG2cY56jTnp7EyLYUyArhz6DRnZ1Siajom2x8qpZbp2sisvS9uMzDEW4JhvYZ3z7qKL7zFmmp",
  "key11": "5H6D6rZif1fLJ3ezkEvdsZraiTPaqKe7Uz8BUi5Sj3dMSTxRWRnEafTiuMjj54pY5RMjfbD1H8v3sUFp4xgPgGTJ",
  "key12": "33APjdNwEXuz86q5rapygMYTEXP4op618ive6LoEtaE5tk3AfJiDm2bTwsMzvMHXLQLwcqTm3YNLXmYkLqXsUCzS",
  "key13": "5a6oecgFW27eSefFPDaV3UAcrXBdSgozKKnTdbn4yDMfriEtm3adCvPLhJ1iLjCUN2u9iU9pswh9aDqrN36dLfDB",
  "key14": "uqx4tsiSNxtv8YemEAu1Zx4QSToHVYvTTwHEtn6Mcvo1Y8VDp4ZdV34hBqKr67Q2e7ur35YBVDkhdkzCMLd3Ppg",
  "key15": "3XT6Q1HUoMrpKVJm9oSFB5XXJG6r6cGtTkBkwXxcg9Sxnq4XkDx6bUQhQhb2wCmEJaoHJjdkRmbzVBXTyoM44ffB",
  "key16": "3NNs3fiFdtRiq4FpCmYC33C5ddn7eNKcT2gvycrKiPxjH9dMKQY8KcyqtJq2haT2SutJHhP7fAprL2qLyiM7htca",
  "key17": "VQ1n7fnzzv9NWcWpmUst8n51Yv5RnNZGhEMex8s2z39YbxEyf9DhBVV7XSTr3SPkKS67iJDh4DnuywMjav1KXdv",
  "key18": "2ZmTQNrUX4Jc3igwFCGXpodhvKf87HFi4NWJQLsW49LXrcTqvqHPub1eR7wdb1yr5kYdj2C85b797VPuThZLasfm",
  "key19": "5kDicAt8fFNxju9JFGEW3yUT37LwqciojBy8xikS2eok7sBLoVtXcEouWjqrhiLnpENsZTyJUMkSqbFyHSk64xUs",
  "key20": "2VybEwYxrUhpEfxrYs4Ahvf1uC6iF5CHdK4U8egZKB17km1bQfEaWGVDMUyG7JJE9qD2GwpLTJHoMGKXbqznD7SF",
  "key21": "2NgW9TdvZzQUz4RdzMpL1SjcQHVM4ZuVTqscsD4hNRDh3FhxkP2QES9TfovgniHKtjTEv9KqbofsNsUWBcsHsBFn",
  "key22": "5gaRBXrpGAJANVpQR5usMu76aNevwr188p4ZKnyYKBd1fXhYjFvZn5NC3buumeVbpZdsW6undTc7MKD3B8B7QXeG",
  "key23": "rD59huizx9NECWh86Ln8wPpFJwLGg8SfdJiX1tid5tFaJTMEjrynApBcqxBuwrnbVXRGpgzE61QRBxMATveT7op",
  "key24": "vJjjHf1L2ibi6EebD6xk9BX6Z7pTYVAHxQv7G9vVJ4xhAf1PVbKKounaMxL6WsVFb29qo5dJun81rDAs8AEJ36k",
  "key25": "4QpA5fyadvPaqbRRY1e376jtjMjiU4gzBVJJ2aAq99ekx8H5m63uuFGhXcFaHB2jprqBXipXvEynux9mRZGJPbHc",
  "key26": "xoufC91ExV8GURYjmKt76wm7tJKT8jCzxvceatk5Lck5THKHMKMqxiaQsdgK568crxdM1astzcSiXx8GokpGn5Z",
  "key27": "JsE2c1DVjjLUiryneH4AAiG2qS4frqXvQPjH5pgbBbxkHBmWvNTRxjDCKuwCdUTCrju5WuZK2cJbLhahsbtY1BE",
  "key28": "3jGbUSqMsqHGGRcdjEPS9bt2x31saTTXsRRjnkr73DnVULDWG6hFdAyzK2u49ivDftoZh1gmtfZkWLTdahr5VRg8",
  "key29": "4LnVuQe5T3ayXRyJpcP9XQE4oaD8dGJ97dyiryrwofcqH5PcEogB3cygaP86mKJL3BbXGwJZBAUvLUuPCfDAA8eV",
  "key30": "2qiachbmbaUKkyPhHiwFCQEZFtJLR1ar7jLBQmjPGG7sBpGU38xkYySptx69uFQBB5hqZPBvtSNHQHNajncfTtcY",
  "key31": "U2zZVbvRzkXDB9btSrzEn9GT7VfY1pJdjKKn4ipZ9zwEpbkDpsMUi5mbUURLg6b6uxFDQcNWofmDbzoB1H9Gh9Z"
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
