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
    "4kdVNTRRLWqBn2LdG5Sp422Geujg7oJaqRAXyuc9Dj6SELpthipNtoXmu9YR2y9YddGcannc6L4TkPb2spyjTfH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vf1X98ftqXPfiFbS5ucQXCpJjaG7FcyxAW4p3AxH8aK2WJoPtJD4TFsChcus5EsginF7VqGhLySaoYdXobJfcJi",
  "key1": "2uSB9JmP9eQuMAkUFk66SijQjjSCYA69BhQAh3WBkX6oEuxj3XkBMpVipw2mPPeSvF2rCpKswxWKsRW3TRSgnRpq",
  "key2": "4KfECLGor2ubjPk4sq7hiuzZ6JZgURx6RL4P32vfB3gYK2Rqfn4NcQmuQnSbRtsEmkWUfbdZwbz8t9wU2m6H922T",
  "key3": "2suY1J6RDaUr4zLBKQyYREvaUeHPXx3ow6mog2ZeYWCaiqYrjkJpZ2TLdPr3vcMv5xfGoXFHeQcwvpaz7xhNSRWw",
  "key4": "2aHEoGPZCRvhauVaTp2VqULdnPsarcQ9M6LKhRx9gBBRsVM1grm5gZmZBYnnR3j11A7pFxawGumQFQPLsSrs4c3i",
  "key5": "4GvnCuZQQkvFKmeoJyCdeAmzzMppZouNMk3YL5bNhs2EPbqZo7ey66QeSbHCjudZLws3fEd5WMiiLJcR7JzQWndP",
  "key6": "4unaYhpn1EbXNYAgQTbpbVjCHPzBzegYJCjWnRdWP7WDbXFmFKveVTpC2WJDeoDj2weRpgoevZwfdC9Vjz3ckzxD",
  "key7": "3J9asDPH7HqHW9hPfKHitTCpb6r3jmu8JxqTYwn5AZwnkns7GtTXgmhnVL8GorFdBKcMqj7FMTExSGg49yNXuKzK",
  "key8": "3JjCeG1a7u2iVSPzrSRytquQ3NmDz8LvNAM3osdHKRdgh4QjFkrKcVsuNsed6mfW77KC8zmjeLkCnkT38EtrpdYG",
  "key9": "5DvP1mkAxKQ8xEc7gYiLUsasEgRUdqnVKVm92YSZBfrPerZ6iaR3u6dgeq9XwF7v9JFjKKKSNpiwgvj2dLx9LRVj",
  "key10": "24hqpeVCKMTneQnqzVykXCAGzuqRhfhuU76uVphrFtnZvKDU4TBS17MSfzXuefKoTm7RLE8cetMEcH47szkVndFB",
  "key11": "2FbbyTteS2c5S8zjrbM677ojcaTDD9dPS8BHxkPhDPj2yCe5NBUTQTKWq8N2UDHoETuLZdPJrz42WyJQuey83vRb",
  "key12": "2Y6Qjq7khRWWJxKj6p8DATKu7GznDQpjdGwVbgHybnaXV8jQJH3J92vni4GrstQF9T64K4JEQHhwgGbMXJN3qEHN",
  "key13": "CzTKMGWpNTNFm2Wb5qzgq53gEt8RvgUPkDGAzVS4vBB5Kywf9i5iY74dLUrsMZRF65Li59Ta4YNgsrSriviwLKH",
  "key14": "3PowKGvv6kMy27Ys9ZDPhVHGZR7KqMddmajnqkP7vui8tvn67ZtSdGyD5jRadWyAVdsVnyxo7E4Kssf9793bVDpp",
  "key15": "5FxCwGR2fpGFhruU81r7QEzqoe1znRaRR7iBJtHKYx4wDH71E4CeZaH9jFxzarrG52qjejLoHKG53RAMVz9SrSkP",
  "key16": "3LDYfow2deWr8JpJanfQuRoxFhMAz5EpURa1vGDwmWG6rpAdUSVbpER3EaJ2mGcYFJmYWuirfgbmCxXwTWT847AH",
  "key17": "2t3cwfY2JKCCbN6Ms7k38XYavJVjVNmZtmsQuLWTgNgFbPDXXgy2AFZk6Yuvit2vLZKHDsnk3M4LeKXJZVLZQzcD",
  "key18": "4od6uEuUFH1DHSH8TModfHen3yFcWv8ukBY2i5nwbC8Wxqd25h2u4vuyJc8Upp7qYxq2TDSa43BpYg8rzqCQRjAs",
  "key19": "4urv6uSat4VKfVCWLdLakAwJmZXkCAYAYbVqx4bp25NzBndrGqpPKaC78AgfBz7RBFVdhzXxVoNwscYbRKTZeTqK",
  "key20": "2vFKMYeu2i6x8U8MwbxPsGpajttFNBhSXGpyjU6AEWCqfzsDGXBBk88T2DCAKw7z31KL4KR6LRiHDbRMYz2FPg3E",
  "key21": "31WL3qmi9Bkubv1sM22EeyFgJz4JGENrJGiT9zZQtjYGQdavWWeerPvcpm25qn2JRdgsbBcYVWMQDZe77cfnFGzK",
  "key22": "4cUT1majGDwVA6YpqN3AD4qX6cUKzT84kyakNuP97Hv79Nmok3wTEmKMSonCaaMy2D1d8sYywdzoBGuFE5Z4ySzN",
  "key23": "5adhTXCgz8oDrWD6zwmvqEXB8CKUFHimvG9oY88YffhQ8sXxRhJhkcSfXZ76ogZexyzcXbxvSkJka5ZzpGWei2dd",
  "key24": "5V1hUMxEzRD3CeU3CFY8rMYjtA2vBFh8nbXb1vQ4tcTBeXvT7bf9Zg3XRxb7riTSsd4n1cbjpSdFkcBxFrE1v7Bi",
  "key25": "3pBzu5Bj7BQaLGpinopms8umaE43oTLqyapvT744YRhYLkZaME9WHbCQTBn8q6rYGcx6Q9SYitkKuMmKkFaEH1HD",
  "key26": "57ugWVGr4H5AZT8MN3X4Ubw5MaNRrSQHuR1MQKMCgqjrT2ktw4o3u5ZcXUtCKiQkANqH1LRH5nTVQGag1jZBa3KT",
  "key27": "5QzXmuH8Ucvw9MobYU22m8D4joDxoqDgb5cSZGup4PDA4NrQ7Gx6n8BwpF3SQ9N7SfQQz3jw1YUKzPqHzcYekpnJ",
  "key28": "58E9TUCrsWE8LWZsVmRxD8gVmQ6sDc3eL5M9jDM5VsjZ3htoGD363hdAcdJTghKRpPL4kNr8eK9EWbeyBZZSnRMV",
  "key29": "4R2rQgquEQWJ69fKYgQpw2UbfRLgnMbxp8SgBgTUZzs1bCiZHLjSjDmKWEiVhoMSE9k85xo7rr69YsMZorf3C5VV",
  "key30": "frLCc7JtUDSxcCUSpoDUonvsGYfwS9bgTNSR7dpQVZsZSBVxFXJVngqDZQe6x6LXcHGzy1zG5NMj543BTg1Qrp3",
  "key31": "2F75Lrui6KW9XDh83upHercMwnyiG7FLUv4MvwtxCNX64Ryb1NgeiS3rGCbtZscZjd6Sf1jR1PZYqHcKqNjUTVJi",
  "key32": "bqMGzayFD5nVb4gSknEoYPSeZ7Jn5zAXyaTmTnpoviwNpBL8pDhGRYAeyDZh2QV3u14JMLo31XGK2X5yKRepDaD",
  "key33": "2Hs2os9S4s95CKXUSxvY1d7zRU3ijrhPvGtBnfMjb9pqWvQH37vwbQaNFspsmn4bpWJMuRcrrHtG2rsrKXNoKqew",
  "key34": "mUmN2gzMKgKaoGLJsSQrwf7bYbud6XzczSP2CuuoMDe8U4xU54DdUgzE6tksKYrNARaTXwDTZreQBfFQ2tGhnFf",
  "key35": "3ueY7PLJ2upZicJFLSw7RPmesxpZfWvWSXkLmKY6aus3giuKDgbS3B2dkr5WYNB9rpRdQNRjb3yhJ7cBmqEvNZSg"
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
