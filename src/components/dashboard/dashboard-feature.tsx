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
    "qYyWk8aaifhQt6gdLaXymCV1vg3dh2a12stuFpxSdJHnMSQ5eAoW89if8MBELshZ3Wkwu5EjtGLeJRGd82buve1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Sc4B7YS4wteTKmzgyU3DbCW19tdZMuvZVQCVymirfUEtpdnnE4ZfyWaGYyXPuyfhTQbCfAp85yxjEuTDSKAkEG",
  "key1": "W6N9JiSmkdQwtEyv4eQKf6cTVSas9KV7cg9c85ZEB3cZfCWkW43bK9ifmuz3VdGvcEu3hHDiKZRP2MMMcksamjq",
  "key2": "3H3emyRUu5g6kvbsPgA6ua3w5C9GRZRKsQnEuwzgidLQizP47DrS9TQEvA2RurJ7AbUHL7BQEuSUawezQj6f4cz9",
  "key3": "bnT9uy3sT7LpC5efZuc9VXGncZZ5sftpgAyc9cKVqcokXxiHBL7HdXcRT8ciCCxVBVGtAx6ZpKkzVeuQasdsL4B",
  "key4": "6j4pbqhQ4RY4phfumb4ssbGcuDHsiTirXxR8LYoary4YEt4F4vUWtp854ytdg7PN2WUHyfWdQ7Tj6fk4FCZ8mDA",
  "key5": "4TRFQEXVmHQu7YbYRTqQ2mzZ9aQLjydcT8cbA4RiZ3hHuTcPQ5ABG4gJUi12U7GY7e1X3WEnrEXJ6FCgxyCWsAgK",
  "key6": "3U8tR9xNYBNKi39VVZJqRBHwj5K42WNMkuqEYbBZ8C5RazmG8qd61TutTfpYXTyPyB7N75vVdUCaut9gdBk6Rov7",
  "key7": "2htApNiynjk5rAxdkHbK4Dxq5gbK5zGrTFrSkNR7q57EqWS2yYsMvKGV6GzkX1aydL4q3UrQthgLbJJt95xUhCcN",
  "key8": "21kWrMoa97JNKtNVWXJieFnNu33jmmyKdcVys7q784c96QEMvzJNLCHJKoj5vGDCy16YrKg5mKrUP5mxZts62JDT",
  "key9": "44T3Wfi8nJiTP1dnqKMTVUqQ1VxkLXbd3fA5dirfyHZ7kTH9msEtRVT6ZrTdg3MtbCEha7TaNtV4TBuo5cHKmGVr",
  "key10": "5Mn2HbcaTN2i1tNbKWnkTLhRps2XAkxmcX5NzLxrpzfuZ3LNJ3uyw9YiDS6qb27os8RntzNm9pRSzX6doPniSQUx",
  "key11": "2x6KhvTa9mZ1Ptc66RYi8m1TuM4z2htboETvyEaciSDHQBen4fdLB21PHbxN1qcgfbcG76uMntHnZksufu1rnmF3",
  "key12": "2Lpf7M8aLt7aLPGUHkpsiR8JMibbxUGEVJWhWuQFpqd2uqThbMPfCfGBa1ysWfRFbiAUDGM8Q7Z6EYU8uMTynjgk",
  "key13": "2VLUAJAixeWYxVXuzd8oqrtYFWsuy6HBd7RZ4RZDQrJujGYm7i2cNGJKPWLzyCNYsH8VgdgCpSm9LrRMXAiGPEZD",
  "key14": "f8TSeoQTZCk5aNLDkZDhj9Gn8CrUtbRPBycE4QZvWKAqYsDA28q3rpXEkqva6HLzHnwRWWZ4DjyL5CWzV1n66aQ",
  "key15": "5LWXrcqGVYDJiseBSDGiPvkuaGGbeDQM5wJ32GMqw8S1WDNcFADTeiA7rTJ71v8fDpX4JjNjF8ShYxeriPQfRoZq",
  "key16": "UnjxAET9t6a7uNDxQcqYRFWnXs4j4x9414N7hYXKJqmui3gZf47xFnJeWwQctknHs8atU4E6fmxmGtjeuuLJuJS",
  "key17": "cuig2RaJZpUBxWFAB69iDUmAzVGwnYi3zhdteFmNgTGdf9R6rmHJW1RaHb2WaKf6ipw8HS7tDJ1KU9Tr4SfGYBu",
  "key18": "5jw8TeQ4s6uqpRUHvrms7ccxQYxV376qyxfqMXEpDGPJ7KSPPgSLrUaJmLHTuUfnZ6Yp6dds7gvfWeaGBjzcmdYD",
  "key19": "rF4zYjqWJmRLrdMFecrMby7jmuLivcGX89uQiUw9NbZSoqGFb5VbgXFW9sHUv9eDdvRZBZ4DkDou9k83dtLH2LM",
  "key20": "4zDcv2ZJ2vQZCV3C4Gw3wN7MeUKtK2NBSF3n7GXWZZyZBvz39KpN2PyNTTLPRtsT6mjbkFX2YXrYC2XLn4Y18doW",
  "key21": "4v7hGNw8JJYuoUBNhw56KAsU1BG9X4p2AAs9BTd7kswScZmZNzswa94xjsawmcq8BdqDW7zwyMWH8QHfi2YPQcDZ",
  "key22": "rW6KXtKF4fbsCoCCnKmLXYz7fdPMez3kXqamQ5P5i465HA7RVxqqu9JfQZr6buyRN7MTF1hbgNkPdjXVwvVG42p",
  "key23": "5qMP4BvvMdu9cFE6yQBijS6Wy7E3CpqP1EBvyXWd7A8e65bjTkZC7ona1RWMvBx3tcLs2uZYQae14fLfHyFgHNi5",
  "key24": "3TsR2F81uCyc7xxj7YneRrx4fg2k7EjvbTLHLAWycdiuTRHXK55cNDczZj5gymUULqcY2H4E2xrPAYGxdDCQ81Fj",
  "key25": "4HN534tuVGrV9ro9dW6ZiScGNC64iwvL9Zja6C9qtdRu2qGPfdhdaht1UQhHYL3beY53Djfkstk58MrwMqmQDSMp",
  "key26": "28F9c3AP7QKkPYzemobpyVfqEqi3maeG4DxxkRBKi8RJv1vqks3N2FSeHQSiM9DareYAJA6UmcaawbU1ryJGPgcD",
  "key27": "5txheR5CxLfuvccHZpsQDyMuXXphJrbs3JRrjGQnB86s97CTcPEmD4VVGqWvV1Ap4QAMNcLGk3tSywPxJYQLRpeu",
  "key28": "4yUH22o82ENxG5tpa8mXj6qAYLZmCJ7ySM1drBViKdfxAH8gbSJLxQ3E1ZKCJBGS8SUqnz6TVrfbtFLvL4D6tZ2B",
  "key29": "4cKy49sK8mqX8dkgmmjSWPD1AaTqyCDh7Jf36r7BR6HHG1UArbSnWMh99MQPtyRFme8XibJnwwEvKF1Syd8pfYAJ"
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
