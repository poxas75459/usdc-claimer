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
    "3ALt2euEEFPou2pccBWcag7sriA3mVPW3PW45wQ9tFRfLy82cpGZKuMAJo8j4bHMYcq8mnESLp5uBrauSK4uCBR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "541DG2M4wfgHYgoCidVZVcXY1myyNiGeCyhKx9eUGTMwKsLFnXnSgHeV6Tm8JYub1Fpj1p3VwvT6RGnRG66wVuGa",
  "key1": "4JBiSaPumv8ZMf172ADNzMTjbVstQy9SsRR5VZsRBbwkx1j7jPCJCFvGNjYZVxyCFmiU3vitZQcmAGRHdCcdwiaM",
  "key2": "3udYUequVTPNfqwaBUMxensBMRy7UmqCWmL54vYeQCw142hpa1cTyfDjpxb3h3X7YKUACSDkKq8EVLfpetYgpfHV",
  "key3": "2xVQj6dsA98E91CVrL2cz4GiKdhwRoqomfDiCq9HmFHFBaucjDLqyjMmZERE687u42bsVkL3UuNShZjp5NzPUX3b",
  "key4": "2H6F63SZrtZ9QZ9e5GPgGVWadfhPhDAJG7Uxbztn7T5uq6vZKv6VB2Sw7i33P6drzT1akn1wvdtv85rEL2LLsrRc",
  "key5": "4euqPKWuoQ9NVsqXX636YcwX1oDMpokJmVMDyk2dDHQAoekJ2ULSLvmQMSufDqMUUyWnDsF7KPcDPZq85VxjeZcn",
  "key6": "2ga5Ka18ncwFtWXDgFvDh1nBbNU2ZXM7VYUhc2cHTBGiU49K8eBV8jHqY1sgog1EtkGiYTkzFdn6k8ksH3xNXJYy",
  "key7": "214rCVfDgDLKJmmSW9FPnCFkns2pwBZ2dZPqbViLDUHyGCu5JgQ25zqwTgdw98XeRGGjp57AoDLRi8tEiQ9WsH62",
  "key8": "2teoPy9E2fYSG6fmvvPuHVeAQ3UP2rtssDwphDNQdYtdUeS6Cb6FXFJyqeS8MdzhwurprAFACPzhHQn2HoGqqzKh",
  "key9": "2kWHqLiTYAL7Am7uK6hRLRFAYX7h6AxuT8fBPSAT4E1V5XbXnwrVxtaUGssYUuMHiErXxgZw1j4dAM1t6619XSRd",
  "key10": "3gjSxLutCDoYg6jFnUR5db2XrR3NjSsDMMdZPodTJonJK9mRyrNXadT1LgWBmwBFxe4MGUzH8t4P813UhRoeDtfg",
  "key11": "2WC9VjgF8fKDtiZ8hXta6uhetALf7gWai2r5sBFNwVGVPEYR1QbTsSHkMHuPV5zYJP1ouC8C59eFA7kiZTxCWSd5",
  "key12": "5tpfBxwAnj31oJtGtaNBcb7usybhxYc9EQZbBd3bhh9wUZhSj7qjhsA7Wex2R3PnuMY26qdQnsEWG87WCwBptD2e",
  "key13": "bmgKmPNBZstwiXP7LnbGUtHr1ttdHh22Sjn3uFViCesi8eydgo19yrwMG8qLbhnNznwDLbGtS2WX8H32ZAJKMPm",
  "key14": "5zejbBTmnzh4KqFbi3SBESfVV8T5uXrzqxsj82RLb4RTxq2cesnQcu8fkn7J2Aw8iUPDREYdXCXJceci6tEYfuqf",
  "key15": "2jmCw6jkwjSWEKPNG4ft63RVFzbek4WBDcdYBjxb3mqh5gxbDprXYN8vfkfYMDmQQcoGTh2fzsWGawbs7k3UjJBR",
  "key16": "4pQaTjLXBpvh1Z7z8xGY6hnvaPYxedNELSeBTW2garjAi1t3iNVyWTQSB2TCtU5TCzZ8r64MHXVcwb1TX55EQmH5",
  "key17": "4hEXHV7ijzem694jWA5j9GYoro23ws3QnddJWb2HnnXGfNscYZ4yc2WjuLh98DcFY5U3gvZtsUu5Z2xfLYPUVaNv",
  "key18": "fRWVHE1xuWUmWGj5moQWtwRfCkXWewacJSdDQNzZdEzYs3bsxHPtRU6dWFoRJHbe236yQQyi53xQ8V1M6uFuw2X",
  "key19": "2zRz7VBD2hCHiqrghiZdQEqxpczY6yvU8q1G5MfsJ9AcToUHLxRsRgozVdKeEpsBQJ4k5nwzoNHURVqDr9UqAvvX",
  "key20": "d6Ldc6PjPY3TuLYT3zNjcuMkxuLHaYJLuQgjUZPTcKiDGW7xFSJTTXFy3L7uzyFoAwUNH6txZ9g7cejXojY99pD",
  "key21": "5TVyHt2LMqcELMbjrLrVEjEkzrhp7cydYiH7BTvyWrUXGzU5NfsnoZU5SYgv3k9KZp5DQAfSTfaZTrgsQSJPi6sv",
  "key22": "4HiF8Y3KVWnRuQQgH7v1C9A4c8BpQwhXF2TB9b5abVoFSKE8vZg7Kt6oya3p2emawwWDD1GqgrHtd4EzNfGKzed1",
  "key23": "4hypXGiZWJNh468ovXBidQ362w2muaHqeTAUf63RDmUobFSpvkTfP4xhB7K2R7HeWkw23Cm8ZCAz9ZEHKWax6pZ7",
  "key24": "3YiJ2EKrYkjyYitajJM3KLKfFYpRS7Ue2PuVxo5RVGUSET3weY7LVgKmHyt2GaYnkmhT2Sabj1cZWZrudYqnUdgD",
  "key25": "5QWrEPVAycqMwk6RB2JqHkzbK32PuV6w1zCk6byCR84VgL82Q6qWAZEnM4U7ESuKePfutTVYS6ai3igV7mrdvFcT",
  "key26": "34bFPAPsE4knu9YHEN3aytgy9q6JjQZog4so1V4CKKUaNDND9CrrfVCs1qQuPzehqD7ANRAaJX1V85aJe7T7X6q2",
  "key27": "38E7sN2JU2s26vH4PREvbdthGN6vT11DcEPcgSgBAfXCySN3J4Js3uU3NZ9y6BvzdFDLGUvrF6XkByXk1gZokYxX",
  "key28": "4NVrakqxawhDTRrw2a6YsBFsr45YHARGvrtvxA5d8dUnPohzMmH9JsFW6cAhTSDYRrHeTNhjkSoyhnrC1UjUKJ6g",
  "key29": "v5bqzcZP5ho4UdXsvn3cLgqmvVtd5gaD7M5sSgu9YkQjvkfv7sZcEz57bMuUKxr1VBXDMGzLFrjYzhbJdi4nXXu",
  "key30": "5jFSNPtaTRXAcfXf4Z9hAs6CctwXuWLJHb2zSpsY6V9CBfJqWjYBdYuUhX8km6mcTLygyuBsbKDhT2b8Fgvy2taB",
  "key31": "4Pcq33NYbb7rt4ConqDRRf8uHpDKyW91Pk6VLnAAgz1Rr8wi3firbEmeo9neER7qwSG9YKvGEKYu4cFmDWRVoo4e",
  "key32": "4tUSg9QiBrzSuaGY7jSDjyr8PZvVaDyEU75c2RLbP93Tkn69Vc8R4DHA3VKfVAjnM5MDkppfG8mv9KS9yHDnyTTG",
  "key33": "48TuqT6JFgbCzptJUrkwwWm8G437Z7EzzZ5udxUXhjUdj2MKfEmRUxUiJs2Y2WtiXxyiZvX2Lar99QJfsWM9atu7",
  "key34": "34opYZ4MQ9fLmnXV6Q58HguD4bqEKQgPbWo6kgMk9yrN1Vtz5TTnMNzFYjbiFjqP8LjmuKksMduEWWXfgqxg29tT",
  "key35": "3Cktzke6dt8KNJHzs6eNuUpt9ehaf8rdwBHBtkxK3EJwDaSLtvE458234s3sWEczSfyJt1Nfhitodi1CkQHuqAKh"
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
