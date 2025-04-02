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
    "5GgPGxfpdvDm6GGueY5byuKKxmiU3pLiF8x8ybVfDras4D2wimEkTe1MpdQu8XipcgqK78aoNcmGQFWfBGvfSBaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gqn6SqgpJ3szR5JDK4g4A5p1LYJa2hF3sU7Pz3A1eiNbQXAhgda2zT6DTKDnRcQgntGYqeKDbirwM83SwHQeHfE",
  "key1": "5XUZyayCLJgtmmZiTivsFjGXrSGKVr7SxJ5dbjU9hEXBvXzSAikqk1MujYEzYWyRMiJaGJU6BB7qidzNSZuga6KX",
  "key2": "31a6cbRZ8n49Vb5ikEM8eHUA1QERdaT5P5fX6BhwAmsM5BPaw3XbH3q7D8zPe1HiRbv2kq9Q36Lyp2j9rw5ti6xC",
  "key3": "2DVp7Ggrr8p1i3dyB18YB2Gt6gkrQCozv3pwu81BA4G1tHYaBQmGVZ3xPDekK4YcNuVDz7wktVfUi5VqHUHLBew1",
  "key4": "3gsPPvKTiYcubseSijChWYLoAKvTtswoNZGzvLvomnwHcd1uXCnAcCFe3xabeW4beBuk7ny8rpcsxyW2agSLgjL4",
  "key5": "64NCsJfwNigtXmh2bqyq8s46XXQW2qE8kiqu8TJp5uBLTWrPEUrnwwoPgiwqUMATUjxY27jRTzMUEvt7AS4DtBsz",
  "key6": "we2ZPsHdsaXNMZeTeZPTKtVLa7es9VnjYHXPVSYrYFBwfBbxEnKHt4AytM8Bos7QwoD2BJJTwTKaHU4jjXJ4G4h",
  "key7": "2Jm4VeFp4UgqffGwVMx5x53hvbsro3dXstvSRjBFK59WcvwFYhJj5VDBHLgXdtFH87pLRt9xiLaFusQLuHonaMac",
  "key8": "3aMd6oCPWCkVfcTVaqpU6MeoP2W8WrWe5wa7qb6mV74CiTjvJiAfhwneLiP5B4ZZhFtbFwo5LczmFK7CAnrdLBX2",
  "key9": "49L9FHsfSTXwqeok58ccePtCQDKU5yc5VyVP6UuxYkcq9833RWUXgZXsHBJLZ5k5kHAFWs6XMxvuwoQCvYbta4TZ",
  "key10": "2rSCUVJQpqabdxtUXrPhKi9BYL7ZeMyXoY4CFC9AjR6j6Po4a8GojGRYHvvHe22Kx4NzGTPoMe3bnMpkjSpKkHxb",
  "key11": "2DQLn2NM39vXm1kncU3KksX3DWteE5edPpTyU5qoyv4ScfAqvr5VqPmMQPdEwzZywN9nX713LMXxcPH3PDtCFBL7",
  "key12": "32WQkdb8gNf1WfQtiVFdYPkfATestN63Ty7bqUsXFXBn6vcoCfRbio6nyamWMzaFYBhZDmqRUyqHMUq3pFTb71UQ",
  "key13": "5GUaNJpwFn3qkkJ4CNtiTK6CyDmMAHBGwrEVgovHgyUAuNuDSWcqBoKPhbf4UGxXPH419DUGx7cGQBj46R2cVGzc",
  "key14": "28kqb89qZU2LNnQyABsNS1Hcpn23GuREE5vc12DdevCAe7oXdtDogwgB2n8eRTRPCKbDixMtZXCsgx2iS6UB3baK",
  "key15": "fomKv9osduVpP3BFnkv6DG77hfULwL7WzFjnmuQnYDcaLQEQSsPUgYKVJ6N341znnASY7xVdhGy637jm3DfLBmg",
  "key16": "4H1MQnfHgke1iyyW5ogJubr8JfrZDmERZKxyyAk3DRXfFxWiXhfHBetMUxgxBa6tBN8Fwoj5xTSsUD1LRACWsUo7",
  "key17": "4tLgpnw1DDVSGCCvy6hyFjoFrvQxNwPEbvySKcJ9Bm6bz3mfdG8w96ZfvZ2GZgtd6hf4r9E6WYeTEHG2nXPYM9QX",
  "key18": "65PVKYDG1WpSpQnF51bXr5z9bGQKKvczSojwiAGGAA2Lh7sqqdgyx1n5LGffhUFBe65HivnCuu4uvxU6SRUkDC9X",
  "key19": "53YwGX3sXwQXVu3bU8NBQnqei6y91bnfM9AhWgs4UffD8eYvD8TnUhH6LSLgK3y12LYQWZwJP2W1yBqnhzCGnyWR",
  "key20": "3uQwkxQQQxfBjgJsPUA8Vbsy4MosvzDiqPJupdbGPkJVEvJWDmdTbBjBtXV1bDadhCoU5aYa1RGYp7VUtYPKeEt3",
  "key21": "4rH8aqzgMtVU48GxvS1A1ZJRGEzwd7v4tYzJwG6CWS1V9wXHETgHWkpmERNwuTeRbXrAwUpd826ZYjC7bCVNMzNN",
  "key22": "4N3nbAiTKrnPS8jWYwq4hvHk9X4wnZRreZspaBCisb7zmByLGWkurChRkvNoSQSzr678fqx9gHnQ3TxQtumBj5cz",
  "key23": "4sTdY6EJiVzMrht7ooYsuWituZmzmhwDL71ESdxucro1saiv7GmD8f47s3Nz4Yxq2ZDbftXC5tSgrdQrKBBx8W72",
  "key24": "4vZAEaXpXVReUCwrz6mQf1U6j92ayKW8V4hDC1JPcAL9qaSGosF1w2YdikhjViHUjcVMSTnawkcNxt9SXnGaxQLK",
  "key25": "67rLmBSqX49myEsqX6iA4wSe1JURdHiiGE3aYLXkUzWNKVcavZ5QV3ws73kLWn9sMENmDCKp5wfCU2rEuoa6EAAk",
  "key26": "5V1GcUM2itRkiY51owC1MPKWxihzegSSQ9pJNrVpxFPTpzS67Gg1a6JtCf6UWqjgiZcfeArEseqfEEAvz5F7xEqC",
  "key27": "DTiZg9KoELebH6hbQbcBaYwdEfefuiqphRv6pN8VC1yNU4NFAspJRcyGyUmuEWDsChYPKAfgj2bNVsueUraJYb9",
  "key28": "3EspnCHdgqzxBxikN61fm74chf6rcBmZ5PvfCkUjXMCh2amSgL1w75m3bCaxLxXUyMJFueZ7VJ3Uk4cY1PRkxk7Z",
  "key29": "67XxX5u8U9KqF3Z841fNrTMs1izvtNk4mZzHE4LCSGwooiVybUxzMsV1XhbmufLBdBLiC8QnhWmcWU1zH7i9VvU3",
  "key30": "h1BsmE5uPDKS2kd8He2R9MwVdMNpJM7ZZVKGPdkAJDzLfE8iB8bWktSXPV4f1KgRd4N9rH2cLif2t3MCw3v65wF",
  "key31": "5iZDTm6saUvyfZt46Cq6yJhyU19b1PzeQqnBcmdGZdqpKq1hTq7FeotUq9hsxWy3f33UENSZpLWxcPooipNot2Ua",
  "key32": "3ZH3GtUAsfy7sLWWH8qL3AQXsENYhfyNkGgZzCaXHWV614AWKbDUdtK34L3BaRczpsmmMkTCaz5cHuxWkhbw4FMA",
  "key33": "3HHbb6Yvs4g5o2jtBE7YeZ47RayNBT2PmQ8PiksmbziJQJ51GeZAA5cxdjw44eCFfWaixRsfQ6fJq5mhGXVBcK66",
  "key34": "2XBLQ2Unhdq97qzgS1YQkecSkbWF5AwY1XW921C7ofgC8iGwCtKZJG8ijJSkTM1ftMXh8B2sVvKQrJ52BHxqb282",
  "key35": "iJN1NiKbAWd1D1ivP3GffwoXPuxzX7Y825Vm8LYSgnzF3UdoCxVD6iVn9JsEdWqKPvSwf4cxPYmzg1p6os39DZk",
  "key36": "fLeShpffAFUP2wvt5EASWkojx9X2EnkMzre3hokdTz8spD6hP2sEBnFWpnqtMuftGVJ9SgLUnQ4Nj9YKfWS7RTf",
  "key37": "5MPHoPpNpbpBwcZ3YeBKgWafPsxJj2J2adhjwkN4v8LcdN2B4JUBG8DEW25273BnRt9X6Mk9qHNrk2gvGLEi1m1J"
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
