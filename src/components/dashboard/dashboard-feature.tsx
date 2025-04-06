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
    "5wyWjuA9mf56wrQZrpnadXFoT6B8KjeKZfeAhquYZBZ1hkhjcyb9uLqymZSDaaqgUp4DsRLgFcW4piAxFetghRL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HspB4ugBciNFivzUNiFzbhhLUKrYpL3UhDmwWBo8DcWkFFUsYbtKRAJAFzypDXcbjv9qGv6QT4ydppNC4cH29KK",
  "key1": "3fSgQqQHNC2ywxZzrwYDzsF2QuaV6pDdXp3jsFuCthhVUnHieSR4eYnhTFN6xck2sxHLAdfnBj48az3HrjHMtTMU",
  "key2": "KuV6Cdz18AfkFU1qWNo4TTjhhUdSz5V549ti1SeMXnaJJso8C4YgtByVw8Q7J8yLf9yrJzAdR4YPzQntUvfBTt5",
  "key3": "4qnEnbbHLcsR7tNNeXS3WFP4yu2qYwp63thahFi6NbfFeZ2ib8KdNUQACT9GiBjuaWXVNXaPDEBv3gF5WEyUU7Zo",
  "key4": "41xVz7kvTuVgappP8eQj8QcTsaKjUq7RUQHsNSV12VtxmqT4qdYTobT28Ke1iYpFnQsYpB5BhzsgSWuPHTAsSXoS",
  "key5": "3uovTGBvSwASCMkUAW12FpyJUd7v1HVbfqqzDpmMGML3Q3Pbo4WszSsmLsQT6z5sWadq6xdogpPqRwTarLeGsnxQ",
  "key6": "G9QU3jEGpaJFQgLXKkwS7xNDXNZAUVcXYU7SBWpYcP7BnczffTZ7eGiBMhy24rdogQfJMWEW7MXdZb3eaTqDmwh",
  "key7": "56atfafrFBBy53UFDDHXKxF4Zb5kpjETDDNpCCJmjhLxeaaox7hhuQNybw7qjR3NFaYos1BLS3eAYp29Lbia9GAZ",
  "key8": "3H261bx6zAohyRmrNT4ocUNwkb68JeThv6oPhSHBg5wCHYdPyV8dAZknk95QmTq5nzkaorRixX4Yu9jZVLSZK9WF",
  "key9": "3LEzU4nGbWZrD5vGgiT1aUcnZMz48JzcggLEkNNsi44aBAUzddpaHkDmMKQDL8MpUGbWYPhu3NkaS6EmeZM7FT6C",
  "key10": "2zRTz2okkef7v1s7TfN8hMRafWSJXUYTxCwEMVrFPLpaebah24JtoyX7q1ZyCZpGCARqXCjA8FXrR2VayGMTkBgU",
  "key11": "2Zn7t3zMV7TDTWNq1fRyeqVh9e1wG87Et7TaZ67KQ8E2Y9qCY6fW1WmRhbJ3UdQqTWKVFhY1zhB8qnci3xiWBKjG",
  "key12": "2fyKXCQg19PkM1TaN1z9K6NYdWssP8khtjcPPvdMtv83qhBZr2B9qDCbpbu4PjSUKrkHTxS4wZ5dAdhEVXD5cApC",
  "key13": "3LpZ93t7i8atD8YCgNDrooq6DNP2yicpLtyUN7c2EsoRA5kJoEm4UthJeaQGqktHia8d1MxX2KQTmxbMoMUy5xn2",
  "key14": "5YMipz8i2btnWDiQZZRUKrdod9uATp1x6nwgy48cxK1xWi4WVGoaXVC2bykjq1Nswd2T8AiqZGBFKzFcayivqqKx",
  "key15": "3hrJUwVPQmm9DRU8fKTZHUHBM6mbowHwYoMeAfqtFxMEoCvmYWYQRX42RB2E9n8iBqdsSsitqHNxwakh7vkXWqJw",
  "key16": "5y9jw1MdJVs7bXMiG15kULyouVYh4myDihxXcLC5NuwxK9jmRJvf9qRXeUHSyJgHTC72aGdCfXuSy4NDvALeuPod",
  "key17": "57swro7W2No6qZnUBk5UQVLdiDYpRSJeRrYradtVBhvo6UYUxpndNJqxV1KkvVcjRnAJsRsdGVokrhpZtEgr5bpw",
  "key18": "39Gy9nhcLR6k9sWD2bYeacukTbJw2LdeCmAFxb8GhXCxk87g1ixjRUKHM9NWNgGKU5JV8aEmd22YRKGPwDLTR5ud",
  "key19": "4ZiBVVoWNq13epiWbxm6c99aB9r7EtZPtKVci7yC1DqdTtvvf22e11JqYPSAXrFrWJuye4p8dLrHGVi3npCjFC8H",
  "key20": "4u745BHeyjXMn4nMm592WJVZ4Sj71F9BxmdqbhKzEnGijVtvLHzW5Wh5ZYsjesvcoaGEKmrM2VXvdJJnKSsGZLrR",
  "key21": "3SaQ6hRDLtTJsZZyuZuaS8gDJ5D6vgSGNbiomKPygxzNDzqYHT5bAQ71ZsuPfK8bP16nZG41BBypNLHhm7EggWV2",
  "key22": "2o8XJVzWqK2Fz3RajT43PmRLAQ2UFLtSmntoMvc46Thf15QAoGm1gvSp1k5XhoQZySpVSFBpEMmf1Xcmu45XVxMJ",
  "key23": "3d2K7iwm8p5shyFQUmJqtPCf4G9vXroBfaf4YVp9VUTEyPGuSSGNhwkxVRe66GCjUieMa21xMd2bbDyYYyijBdqc",
  "key24": "LcwXVTUc6AXKig6F89RsfZsdRG6ixF6wN5JsBgyRQttyAXejB5WCsVPKVNcSXardtARqVZzX1sGyaqcKgiXpujg",
  "key25": "2zB1VfEX4njhU9oR4Zs8fn5of2zx3A2YYN6u7s4b9T3tXL9Ge6NRH7hnhmuNcugHFugmsK1UirWHbdNoj3CsgJVk",
  "key26": "5HyTpHQSJ59k95t2mEH6HkyUYKF74AivvQMYtCsm13HQEd5XayuTRMkLGEdqDsNFspHVoR7adHuxeheTR25Qu18F",
  "key27": "3mByMDvA7P1PhDzTbvPrguqaWWVd6ZJiqM2qS7VQk5Tx5nPD2hdzKYnKwwmNgoNd2MxZhSthyCL9G3udt39PVPEY",
  "key28": "3W97ZRYACTfanNW7BW7UjTZrkRgX63gQjXDrAQzC1Lwxu3hqqEJeh9tMvHv7SxKchMMtp8uox57ysHr9KD5UyyjT",
  "key29": "2A6WS4Mh87fRRgc7jcGWP1EcDz2hSoiUqgQ8zExVrNKBmtGwakcooRos1WRJVNo7zuSsLmiGvGvmayGyEKgn1spk",
  "key30": "3efr3FDjZA7AV32REb6vSS6HMntFXY7Njjd8WGbwgo8kDiYdMiKpAZ3ZU7hUV2fjSFvjorzpivkVxzGy7ksx3j77",
  "key31": "5DogBmaW723c2LfBk7kJCNMN9WoR1bArAgokzuY7D9BWPsNfBxtVAqfX1pJSoD5GiGWjmLZ6qtT1kXbbTR6KEFX"
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
