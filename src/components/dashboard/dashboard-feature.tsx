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
    "3N2fvqZ7bkRdzsXusBBkuRqvyyGU4WUKaCU6wnVe3JayRfT1ewn4yhKjAkLvkQAr7sVUfXSwiSwmyV9w9y1FLa7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s7LNm6eZhXnFFS8w6pzsZuvita6NYUYhtYCgp3mQRRAuvP6D2DwCDxTuarbrz8qGdA9ZsySz1KcvH9CPnPLPL64",
  "key1": "SS3CE5vRFpojKwnc8Hv1SfCjtqwYBc71h9jfKirwCfEdxcXpXgxdxiPPXAWJ9mAxSKUNTK18Y2dNkSkryNLZ74Q",
  "key2": "u4u1aabvVg8NdaXTdcuzDtG77jLtopiuTkg4Vv5wArwNQnqFSno2LSn66stBtLsbnf5w3PMvs4HiFovr9qEuhi1",
  "key3": "4L8qdxXSrGdsPru9rzpiw8b5akDnGUg4FcsFAr7VUhCnPpP64HLuQE9LxWbbb3oUWRTdtanytnVzoRs1Cx28eTGc",
  "key4": "46zSd43s8Xn721SpCNoXgfd3aXEs6v68vhSCenqn2PWX5vXoRnut8iE5kCrBSz88JorJqMpXzvFxFiF9MCK5MhyW",
  "key5": "3KV4jDLGn7Qsc15scJ7HWNseUNz9Ab2dSRURyB7ZmJSxMuFziyQUHiJt6v9CBL5YSWbhLBUsj1WSUiNYKqCuF2ki",
  "key6": "2HrkSVtk3sPUp1cjh7sFAfUHFudyNsopSwd3Jf3u5YM5rJSXY5drncM4eepe4EU1BH63RfSGJHALbZJ79vTBKnYA",
  "key7": "5z74Nd3PUb2nZXmgmCUTQLFUYvkbgADcitnuL3Qx1a9iTwSJmcWza29nynNk1bZhzpAToMCzTz5Kf8ebiuJB5wQc",
  "key8": "tPZZJDKmndydKXVtD73osU9zWjjHbuAgRAVCiH3zavvfYXxiCyTTJvZ9N5B8EnKy7QdpVAQKkzxs3Rx7am9HxKh",
  "key9": "i9sWoxxbFBaHquAxy23nsNjMc92JVy9oZVRVHSGUVT2maRfy5nj1NCxMh44DRVAetoxFo3wR8eXrXCKQRDFomM9",
  "key10": "3tauGaCUKrTkNzQ5WyAZqsFo6qnbZW7LwSf3WtQ9RBzUSDY6de3m2fEfPN8ow1o5tVyo3bZM4LRJYAm8C6o4ymbf",
  "key11": "2bSpfcdYe25xpkKYk6S9TmWD1e5LP94mQAcMSqEVmHAgfhe3bCtLNnJJtKSnNzYvjkgZFH7Yj1TG9zoic2m6hzwT",
  "key12": "3pPbvXMHdbZgAxTfQsxnbpQebnffmLeauK5brg4yuiaWt49SEm4e1bGwPSeeRaPsTyfPuTEQxM7ryFGqARnRiKtv",
  "key13": "5ybh1SVnA7WJ1iD4NNbgDNhrofjft8TaQZGRaFPdMFS355U2aDGq8m2qcsevKkE5AJLXjdUyA7ZYzt9NL3uwyy3Q",
  "key14": "4VXyUhbzBmBE6JfsUwYSVS6NY2o7VWv1jiBbBLHLbuzL8Xwkj2jG5v5G6DUPWxY642Xzq3fiCHG7BnqA6pGrQXhd",
  "key15": "5hAh5yPA6GBsQM143S2sYrwXU3hinFjZLEgaRWWyRzvcyw8Z56JZT6vEyAYgfG9fawJkSn7Ey4UFmYjToJdGZeSy",
  "key16": "5aYVeSWFmXo9fxQvMxyHFdHZiHmyDWuJDUhti7pVHQz8sruEAr7nJSTT69nAaLgFUByPsobXi9igNcPb6CKwfvyX",
  "key17": "tCYpwkgszdyjWGKmMzpsSyiNQymbHBTUfHM6k9RtiZoAMrx3QkAoE4hPnniWyBotw4UzsehBz3oieBgMf5kQwdC",
  "key18": "2w6wbuwWrs7Fwh3sFySWnLNAtM3J2AZeCh4T1P8A1trC79Lo3EfsfAj5HHuoYZxND2C5K4kNis2aUJh7GiDY9StB",
  "key19": "4ECfzUYSnzefgGuErginKAnJKLZvTDEo6jcD3Sgb6GZswBz8N2Qph61m6DRKsmJU9UCCtXfFEMkTWVLAkssBMzp6",
  "key20": "5gt9976bZWDw6iZz9C88XMjJgZpwSQNRS9khXSccCmAFuLey2y4aVtfAK5WYSpJfiMgQnWwb4qvTBh11WPyGoPct",
  "key21": "2mDWxaaqAkw2kfGAd5s2Y6FMwN8FgYY5YSBRrcKLvKZzTEi6dTKEvC3CUzkr8D7RYsaDcz3smtAq9j4vWbwLrcyz",
  "key22": "3P6Ur2c2buZMmcvQ1PdLN3q6zkAhnS1RBdvZCuFLr4Z3DAHh3puzdF1Ka9hcLgL1jeNfjYPgsmU8GPFKkz3pa9TM",
  "key23": "5JrEYJo7Pp8393sHy1Q9h9XSCptmxd1StE3bXuTRn5ccsddcHgkprx7VhNcVVNdUtmZE1yNzNPbjVCzXvq5RhLjC",
  "key24": "3kQMvjcYBHsmY4mj98GRZDeXFY2kLdqJrhHFXxEi1iqZPUd4Xp3AAJkwTmtq9nDwzpsd5CNuYAAMAVhdSYdcPgxT",
  "key25": "4J9wz6J8xDUcuAL7ZTggKNeiuegJFXEM6fmXcxL523jEgS6K6PHgLUgLNm1pxy51fiaysHKmHGBdhuhaiuSWMNQm",
  "key26": "4rPRh4BGJcxbq2w1JsECgdbweaNzrq4c7kXckyXK9Pm6NxAVrFGPDx9kv1Do2sbRnQfJMpoJzS9KHHiDXMPMVHhm",
  "key27": "XRiLbLvo8kEBKwZs7FbT4wAYHNNvp56TSrVTSeCsaU5yqkHG27tr2Gacjk6j17XDqcWvRgMKaGxKvxMGutUDs1e",
  "key28": "2YhCkFgt53srdZtUgvCtmoUhcPidF6QYPLgp5q8hhNa6gtaCBwq7Kd4tuHpaCkA7wdRK7fjQnb5HZb8ymS9i6vu3",
  "key29": "4SD9NEL9Jo9ZWWMvz4PXmPeScoq9gTcE81gaLvAmb8QEcc2JYzd6jKuhbLwxMB4DVtEsG9ovQbDpLQCoHgM3fhJ7",
  "key30": "UW17JHWJy2N37BFYamBAwr2BtBUTx8FztBLrK5S88Rw1jR9qWVRqDQ2aBtuHYMpJugBx3PzFvWR2ViW5Ajb1Faa",
  "key31": "3pvrYA9tb73Eu8fdnkvue2thsoSuRozDpZug2guSFCo2qb8TU6bcC8x6mJQNEVHg4QhP5KvStaCaTPqL5HiVQovA"
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
