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
    "WSLgG4rjYm76VWzu82aZgQbvx8pHMMZkh4GDp8qUBj1CuMokjLpGZp4GwWFUy2KJG2jhNVsXWxN5GHXSTRqntu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M8XRTuxbtcW5ddyiAxeboxT3zWgxT84trYaE4Ew3rvjgpms1hWecS5H2fAxRg6bZvUiAvuh2wdHdaKc9GysD9bR",
  "key1": "4fQ7tB7WvLd8jPFSb3RE9sAkpLJGKt7XPPTAw1joUqyvQzSxZTFH4Zn5N5Cifq4daDig8dJ8fk5LePY6n1TjLqx1",
  "key2": "5EHffc8GmzTsCBxWNgyLp7PaTySYnygKzcZPQNT5YZPft9LT2kQs52nAmCBDDMX2m7VkfdizqsTMvXzsbQmj9Te3",
  "key3": "5DJNstsNiu8ErWpUPiMc8dZnoNPY2wnC1nFeVAaKQ7k3EBE52t9gkP6n4t6Dc1vaBHb4HiAjvGvumuBom1km1y9u",
  "key4": "zd4eWZiBJQ5DbnnbmCDeBucwAbUqsf4Uq7F7QeQBnbZ7TVzQrGXX8E1fgU3UREXLb1Y2XRUhkYixV4zed91XDBA",
  "key5": "2wiE8GqUPQpYtmZEVkWB53b7uyeWTBo7MCKW3aRzvkSvvKGVFpeEcrMgQbmJpZjc9AD2V8ALQY8BeW8GsJPDN7zk",
  "key6": "mgarfAb9vKKgq7VSTNejoPVr2YXvezkjCVPc1G5UKiJmqYU23HfFmhat4h5q7w8tLvoaHBCMqf2779wijau9gRg",
  "key7": "5oeT7RSmrLJNNHq7FvUuwp5cZGgz9kzngKWzdNKsLYjE9aD8Z6k3MEJjSt8npcFaJd3Mz38XuGf3ump8CHKDpT83",
  "key8": "3hNd5bTHqzSb62Dgw5vzSfMVuBkFvpLHPusbRSbgetd39cKvtAmfk3nijXjuScLteVyf23GubmYJHa3NKyBQRkRU",
  "key9": "22cnkTcw6fdy7rAuihd18qfdvARnMqAiN54SEPzY55K7HuKWywDKWRf3HNro6GbuWDReLMozor3tJxo94M8Mn5TQ",
  "key10": "5FAJKmxHPdM77mWjYfRvZunqgVjJyzzifL7qHdzNsxwXJFZJj3Hxf7sqWLFBxq3botVyrAHitR5K6SnMEHtFNP7v",
  "key11": "5GR3PMuTiqVDrsXe9AdxC6G7k6MPA2opR6dKW9eU7SMeiZCwkbe4vgspLR5ixdobPbaXiXJsgNwpagmmwCkJ7T9g",
  "key12": "5CJMvzNL9CrYT99ctWEchxSyHbJdaHu79b1N95oZaj4cQJGUxTg1V114Vq3y9igDj6UHuf5QX9nMrgQ4dzmn9TW5",
  "key13": "2qjYYUg4T9A5qConcqHiQDs46xd4qGm7cwtM1kP1CcrSigckDTCw4zCJ2uuDTccCN253iHoz2pxKpYrxzJvEzag1",
  "key14": "5LiRdCTTHvEmkXs9piXKhNy6p6hJbDNhNcgvgLtqHWmxHHyyLniGT3SNNxFsXsHUQzRUaL2mWw9LKyaZeXcSWKLM",
  "key15": "3WsYkMge4wVHz3xGGDWvMjJzQsKrJBvdonFMLG9VVvBK6DNv8K2dCjMJSiqg4uxKCZbhiDK8aZRpBZBag8qGjxH9",
  "key16": "62xTvc8CZ4biHCAxDsLDRAASqv24GsWPQdG5WehKouj9kp6L5WaKpi93YNW5PhgQfpxQ48kqfHAvdY79exc782nV",
  "key17": "4F4CRu1vMwpD4hGMxCeRLpmcckBR8ZRBBHXP3jYhE11EL8tcv19rNVp4cN8n7FG5CF6cgWdeH9LcE43Jqq14f5iN",
  "key18": "63U6qYAPqhjPSrN14FxbW41ZmMXr9W9Hbby9aTZrq9nmvZryVopfUQu7GdpZxoke8xpT5cs3g6NmDoZjUxVxpPTS",
  "key19": "5dSBuQULmsQW6Tb6f2qYptPVJC2pyAyXa4HUuczfmmThMo9wHZmMDKjWJ9bq7GSqGczhh7kYV3Y2s1nwqwTWu2zq",
  "key20": "4WNcmREEdGAgw9EaGAq8fSxFrH2eU5VNQ7QDp6gjNoME5gx35N3h5iq5cxBz6RWyMcFSzj5hj4N8gtJuYZvZGCVx",
  "key21": "3EghNYkD37mAQUbYziCevWieYJF3QrzWNgPJpRMB7FCSmczKeFgURKiHC1FNTYDTXhQ2m1JGs4CWF8brLMwTC9TN",
  "key22": "7fmUaPH4XFY5KieCJcbaNRbCq3xn5tzf1p3aK3me5rjhoSDui1JaMCbQzaoMsKGqjTEv9u1Ta9t2ucH1VS1qm5y",
  "key23": "2qqMo8iwMLMDYzMnpK5sZF94xVC9iKjKeY8iJnMn5F4Fow5d9NehBXPiq1YnKxzWAE4yC2AqgnWHQHB4ghJ8zWni",
  "key24": "3YJvrQMaSuBNaLGuCMVf8Vdny4MY8S4ATKsWDbjm8twtLqkyPJ6RtYGNyvB4X7RZzKixZdXYBmx2f3Hcy5uK8xap",
  "key25": "46g1JjQGn1HNTWqwAUMpdRfw2yB4jqEwe7rE5ypLoVfDgnnwUC8ZGfKtE2vVWPTAXLeMC68hwqp3cVDJXYARQQTo"
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
