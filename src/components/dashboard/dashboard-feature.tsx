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
    "29z5bz8UxkcvVt2e2oMTRG9QZDM8TmemufftGwcULhFpFbAR63H8enFaHV8auciVRtGSPTYAShRbRL4a8ndUT8ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CAGX2WCgL7hU6edhm4QLXxpdvb6T6khZwKXh3nSkwyg4jpZKj4r8WJFhVViTh9VomZhkHX39ZuKGBGXGDh7YAgQ",
  "key1": "5CJ7PRJTNxPZK9FnRA1SYFAwGPZBYPf8VUDu2aNQWFT2j512CkGWBztBg8zwyKCGoZbHHGNiXYVapmRPPyzXL1bC",
  "key2": "5Agsd7K3ngEKoUgN1fWWFiLecMp8MU6gpkhECDVVtBFJGxduNjT1xEE5qQfjAtyWyZCaNDE136WCCYuXvGb3B4dN",
  "key3": "5xgnQ94T7dndJsBJ1qSB8jeZsScz9CedWjp59ZzgmQY4hv3xCwDs2DfBjN8JF6nV6ZXvR97a34X4q8t7QeEavBbN",
  "key4": "2D4F9cDURBE5T3reV5zGEyYtm6ucMMMpEsver7qteQL7QatPtt8v8WJaurwoWArHJkUvden1yee2iDLP1zQCEVdq",
  "key5": "41FTjYgVbFHncL12JL5jehW4ZHYTWC5CwsEF71Hadp8v2tySTRkM5vqMa1ZcMnRVu7jhZkCRmxe2DYxUEZCQEXrR",
  "key6": "2AL22WfwkCpES4AhAPoPzbKZ3MjW6sV5HPQajDGzGh2rL9bzf9ZmDaXXkLWN3DL9qaZzo4D59b1F9gakg9CyqRN5",
  "key7": "3Gg5Rk36zsY64mjPi1es7rkFuwtuFFYQQcRyduKDrm2vZ33RQcMe24EvzepmbzCgrGDexxX2dB1GxXYDLrodqhDN",
  "key8": "5nn2NsUWCQ4Pt8NQ23UR1Dgc6XtNh1fZeDMLPQbPzFBMFr1Hjy2ibqP78DuBLypWVMVWZAk3Bsn93YtTzgZCiMFq",
  "key9": "67RSMuWvw3QoqBGf8UD5bYB7JHkM1AvqcRiSs3eb7iznaXdoMSJM7GH8jenWtJiUrQDqkumV2rdSVgSC7b3PmQ5K",
  "key10": "2L4gFop15oafLcrDz5DCopVcJDeTaPAq6qYZgcPbJFShrLukYdoaj8GLuYd2NbQ4t4TRvj8RC4tNYUvyAb6Gq4Zf",
  "key11": "4ZfmBmNB3R2uif8F62PkFHLN3pmySyMzH3Q5SAqPcfgzcxmsfNFmAL8ASqf34RUKd5cdc5fA7Zd3tZhShMHGX8Ny",
  "key12": "2uj4g1o5YKnTpG5U3KZ53StHTowYrRrWMmotxDZQhTdKYKgqTcNoj5GBHNMEdXJwN4VpuRybAt9KKzCCtEfpT2aY",
  "key13": "4EYb4Xeg7NXnBMZtjDrgRcSAC2jurAqjrLJV5kXtHCG49LGEThkaPuq8JRHGoS129HsRd7Br1VYHEznv2mhvHMBt",
  "key14": "62vqpUfxZ6PLDMTjgqN9kFf2XQsvm3JLiyAGJu3K4UPFpWvYnC5HBYKsuZJQxDtTw1NtvCgH8XuLuqFoH1zgBJR9",
  "key15": "CgVum6tGkp5Y6vtnPDfU3TtRJ2KpWFQippC1c5y3L9MCQFDK5rSfZaG3jdHtZHGBM5Kwiiya4V8ANizoihTDbgm",
  "key16": "4GKdojNMwQnV9vyzkqtfqTaLbK9VsUCc4VSLEgZbTgHZocSvgTyZRdfzVmK9XdQVxDqCj5FRQgMr2CoctEjv3DWn",
  "key17": "64R2EcU4BpbKQv6DficUbU5fAQ7KAHxC3g4S5TfVJxtU3QLdjvmpgkTCWd1Qh3Qc6TWT2RQdqSnpsyqgTB4CApzK",
  "key18": "Y9eXGPTB1WVRLtjasHRc1bLVnm7q2YMXTwvDnajGq9U1vb2xBDoz8rcQ4siwgvh6AhjW9NweoroVogV59LVCuMF",
  "key19": "4jZNqp93MyCV8nKUT4ynYr269Cpvx1aPejs1rhSt6z8k6Cejg4hmrJFUgaCXKXhS59aqRRAp8yL4x11eJW3rdAVf",
  "key20": "5BBp6VsuJ7DDecFEPRwZwuSe45hHQ95TdtEAW164Upsat1KDjbT34J8KtdP6f3egPSTFwwvQBwfnhknHghwhCjBc",
  "key21": "5XNnW8pzaXYv1X1my9CRnpVZ8ojLsauVcL6aqCF6THFH3npF3X1pVbGCMjqHKkpQWbdYhS9TDyNU5CTHBZt8VDhm",
  "key22": "4KCmMExwNLGmZv33XxpMYRtsdFMi6w9WLYQZp1u2aR123A1yVRuSAkL8grrjK3gQ84ouVCoG2KB16eqd9APNfCnE",
  "key23": "5y4QcwzEQAaAo9kzuisqpqtsnTNnGpxxAEQcxWSA2Mf8uQXkGBpBKZrBEe4FhwMenhg1M78x7c8xddvrd6xDBGSR",
  "key24": "5bTB4CjEtmDDVGD5XVN4Fa3AFT1aVeZK9eXeYcCk85AMoztVLAMiSVyL1UyiWCHB8eB2UbfGbGJpkw1bRu8aVjHb",
  "key25": "2M3f1UBDQHqWQUDFNVZfQ9ANfayzVL6ainVr6TtjcwefojcPTRTDr2ovXPgHFQrVcRAVqEdaA5KxyYzgAwJ3YHaU",
  "key26": "3fzjR7y66phBPAoqqEtfuNsUWgyw5QNXREdErMByV2sr6gE94MkeNrqFfukz37M6QbjCMd3psJz8T6LpLiXTq6NB",
  "key27": "3xKafy6uiZJmaGZoRKHm44tHn12YKKwYnDNLL6SeQHGNrrViqE8E6Dg75gTZmShkmtu7uevWWjfSnK7zeYyA1Rnv",
  "key28": "4HAom9aLGwUWCMS45DGUAn4o1Fei7PprfFysDiM5gRD1XZ6Fycw1fzWkYPJsnCJ5PSmgRvmdK8fT27vMqQYq1i8b",
  "key29": "5D9RMS51AsuzLmKNSyAXsL4gbL2AaKFRhsLVgm7ys9TGVKSQsoesSBFFzRQgbzXRv4HiZJ6ZP3mPtPuH8KHe1XK6",
  "key30": "3w1rKZmt7AZB8RQU3W1c9KNbk5EKVBpW5oYwtAczMB8XGvzSE7oaWRWG1cdyevdgU9CpoZT4iwYiDm95DS9Y45cc",
  "key31": "54xiwHNsaXfjn1H869mGY5w2StneSqq3QBqVpLZyFmjvepSm1K3cMpsNk5epZur6rfaey4AoAL6tknsAc5A7G6Tu",
  "key32": "5nefDH7hh5cAX3iaem9gtmwHSi4p1Dn4ugfVceirM512xvaZFn2MPKFQAeffvrGCZAB6dDLp8R43ZEP3GmBr4ftM",
  "key33": "WrNDoj4E9KpmVuvpsPvYk1pu8vZsK7JTscrwhrVrENg7rVQMLtxSqdDNNp28ymPby1RwnvYyk6jE4xvajwJSHdk",
  "key34": "3EqWPoQDNVuXmvaJKMvugJPF9W3tdnBvyppQ8QpqEAfn4ceqbFJ8WKCSWyT2Cx8inAQidGsannhukHRR96nk1HuW",
  "key35": "ckeXvLrKX2QYtQWHUbWcckfQmG6Z26MswvSx4wb4ZN21Z2Eo3vVZ1cZh5P6agsnick4RVFxVh3EA2jQXjSwhDhL",
  "key36": "3z1hudoM2egWDa4QVr3aJ6PMj15YDkbq2vkUpsXVmTnzsDD5KLfywRSAwUBmivgFsAPSrksyUGrAKnGbYdZVjo8c",
  "key37": "468uNq3dKfU57ktD1ZxnwAsEN7hkW7QfdY4YmBx2zQjDGPwxHEahPY8t56eq2qRwfAAohxeoeWQGcWuUK5yFeity",
  "key38": "61PgMWy8xDPW5UV7VEwP2bwUFuZvUj9B3S8A1nyKu6LPEChQFJpoYw8MjAPrfyfMs4daaKcoeTyfAL43azMmbLBj",
  "key39": "SKL2NoXVg9TuNiYG3t8wUL3BhMfXDNmngRwqBRkbjEK1MYA7oaQGBjkgJqAa4KVK72ntEE83wCnp2q2jPH48uXW",
  "key40": "4h8Xaw3Mw4DLAXNTkKb38ygDmv7HNPmVsn3ajRxfTJTTPw7ZzqX2zPoqztJBeuNixoRYz76aUgwtUk8TJiFavMA2",
  "key41": "eUi5rNHaAqJJLCLsYJ6w9V4AB1csFk7RN84ATxkRXRsooBf5waPuaj4KyjenV7Pikp2ewvcHvRkxe6aLbw6renv",
  "key42": "3ipneeBp13ESxomjUput5CbqKnYHks4dGHQWJg3rNmVbi7UdQWR3mtRJ8PjXq78qnGL2d6e8sw6ZadrzEW9njN4t",
  "key43": "2CPHBFpFR9koRD9okdGwaMok8ZFYo9WBZCMyfAUzTbMJuSR9HY5mfCUxMp6J7fyUNg3h564pSJW43HvKsnZ5P9ee",
  "key44": "2NwxXwGvcesUxNAuKRaZhbGhLif2n1X32eksV5fT4ZBzEAzd3PphHpRiQMsT4p55Dr8BKexMk9eiFuicBXdBALE6"
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
