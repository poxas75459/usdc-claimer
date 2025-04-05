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
    "3oJFsbxv39yDxFongeHU7moyiHgYobrP3w9fnJHBUg9AriskjziFbiGzWv9SataLSqd2XRKNhMz2oTNCwc7r9KSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PiismG8nsD1yBiftq1RQJcSVurG5pZPyuPjzKAfowbVMC22hx6sATJCFxmkm2hGrN6uBXqUa93rWxuKhiMCGbYX",
  "key1": "495cWV8GM3MWFnfGnL9PMKBMf7Ri7PAv2yR2NVwyLUoStVqTmvjYPdW4xap54PrtWUoMqjzByHrjMT84FZ8Wdkg1",
  "key2": "azbpiopAyiAaepgnTNUJ5DMQwSKPW4LjYkRPyNZTVhihbqmt6r3iEe8qFRkkdfMzaH8yqWKCUyb1r13TuMJBC32",
  "key3": "37ym8QJwNDmuU4NAcZyYzGAt3SKof5nevNytj5tAHy6yiLVb9hG4eJkNT8yk8NRHh6TqtAcSUvDaiYhqmTkxjcqi",
  "key4": "2HsHRJzZg1BVthDSrHbv7xu7pheYApdMfTpDGxv5T1Ci8CWeb7rbgBdQfX8FAGW4VdCcfaG5hxa72is2cv1iEbu8",
  "key5": "3S2nvnD5gqwGAtKzHTtnPTsYQjkTmmtNbiM6QZ68JLdQJT3RqnqqXg22HschL5z7q3wnj6A9WKKNWPJqR6cF9WFh",
  "key6": "5WRSGfuYQGmnbuSMyjnnWfpj8vpuXANhtvc4W9FAd5x3zgX6pTzxqsZDFexZtvpvddpBkr73p38DoczW3yKEmfuU",
  "key7": "PiNfjXPGSUyhjoZqEJQ541wkm1n5aUH6oBzMZLa3GmaCGxCL8x6QWKNVwQDcjnKdWRyzJ4nkNDLkJrHKjeWCUHz",
  "key8": "4L4aTFdEQCSNGFzMRC9F8okp8GduKVGLbnZwQScV6hch7isQhngjKixtBNFQjrBpESuGzmwuTFx4YRot8WutMMQC",
  "key9": "559k9PU7dVdG5pLkXT4WrPC3rf9gwBuxHFLWBJiRMWQp2ecioob4TFFY7vAX76StHkxXYnM7HdnKgonbWUXrsLCy",
  "key10": "4ceRJVGboSpgbPWtoX4WLD4VZqQZEz2334yZpyMQikY3hSUMrqeHsiUJe4JrAEredeBngQEuCn2kfazXK2t9M4uB",
  "key11": "5fHAVECRiCXWokQ3pkmmu8nUc5j6veJB9Jye87J9kUpLc1EotQJm5MJJop97uZjdCTxnNCqSdYiorBjnBTKH1Cey",
  "key12": "374y6wGnRjunUk2naQ8RCcBPhgCjFpw4RJ88FM4ACdSgS7Q5JB9BN6FCcBZfvpSim5X5mUJ2MQxmV7YuBGp2QAAu",
  "key13": "3gADaD43KEFW4fuGaTZBHisUUhV47hBHCFRaheC5ScKjHt6SzGEfyuui4iANPv1CQ4jicZV4ULFGoWE3MnE9sTDU",
  "key14": "4Fuoapv1k5okjt9dCKjV6x8hzVjhQqE9C3aDdcQFra1zC5UH4QgsggJ4hMN2UawGSiNR5NZn8AMorA5aGV4HEgiG",
  "key15": "Er8fPhqtkTmG8Uu3NAVDVNfeqjSZJWLNDzUEELoAyqjbPW6hXXbrEkqzZMm4iw2diUqRSfNd4LZv3bzUQ6UYXn5",
  "key16": "5ixS5beZxz3zVV6Sn8ferDV2DngBBsQHAjLNoyJkaYDHJqsD4DWEdD4SUHDm3QAgDjkVYQFi3j4nUJbsgRdNpqY4",
  "key17": "4Dtiy6CNZ22orLxtwPznYriZn9BTwnHQxcgSzFBDVxmLhTZPECM6un21fptXi1EC32azASbwxq7meQfNZCLReyiV",
  "key18": "3t5rcfuDxm4RibmDt4SAPnpXUdq6EWE2KQjpjSz4sBJUM42xF4kgmkUmobFLkfPy7T9eC9rBjEfmBJguR3LhNN6k",
  "key19": "4HsEf9yc4P5kRFHymvf6prDF7WpcpCLwpTYn8GqHTb7mKF6Dp7RYWv7zQN41vNZLNHMeqAHjbz8qN9T4EdgoAfkH",
  "key20": "CL5rcQj7ozzd2seMYVBqVwzmqnHCCDhmxmvLYayUYnMHui8bYsVSzDvwLuSHFHtfeLXdDccuvkiMEZVtGgBqzoJ",
  "key21": "5fD7fGVUfS3uNcEtyWvA1iqPVUmQiRsxanTQaEhnem3LNZcLqrAyP8aqzoZJuDqDpyDM4eHrhPKHm9W35xAGkHEM",
  "key22": "2kgY8iWVEnNxP69Dgvk4nGgUTYMqiQXusttrAvdXZbxAQAS9ob8B3FrVuQVHuWTGpcPBW2zrTDsdCrvU3muPdn3n",
  "key23": "3D9o8gRbt4PKW36ACVjG8h4d47aYWaLmpiBwvRYHE11q7ZqP2hq1etAfrMBHZPh4ciKt2iBpf6VAhNYimC7HCB9x",
  "key24": "4jKPBKYTZQxdevLqAuYv3QAswNxiT3Lk55PCYabe6e4fTiZekUBfmgoUTT6iWFkqhzxKdWiDP96XHuGmYrQPqyh3",
  "key25": "T7MKKKzVXu41z2bsVp6hiVwvEJ3oYX7rPanzzwCgnFexV3jd2NqBZsLqXtEAxaCTzzrZF2YkewVSDEUBTMwStnG",
  "key26": "5x6keyErZtYALbYBjyqHKquiSeQF17F1zzM9LCgSuskPTiVnpn7tPbQJnecKXBSRFdeAhYVbSdFbKE5zYNEQMwxn",
  "key27": "GnjTsXZqyyTsJHXkuWH6eMpatGdh1vTHMGsRXsY9FfeyPUqxYPfsif9Ao9ofaGSKbJNTvSTXP47CqvGVUV4o1qx",
  "key28": "268ScoXrKKLze4iCwvGvt8SRQEJxUPGps7j3CZ7teZP5psAYntn4g72vschG6Fy1ftkS9gfU71S69PybSpfEnR4h"
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
