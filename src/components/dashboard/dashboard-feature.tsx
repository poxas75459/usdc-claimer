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
    "bV6PEhAZDo2oNT67PGfSJfcXoQcFyror8WHmJbswAsEQTBYgb1nTY1uGZC13R8XSTVbMPf7qqus7h75bgeN4oS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2faw6bCAL4b5DKhBwJK7nDFDJ1TCf86h3iWthmEzc9RByXnQipSRXfAJ27LWFeh4A4hHn2sjDjiy96bUFUvdDX5",
  "key1": "41TZmkUbYvnbx6e51g58twYTNBihTyge9i1NmiU8E59LWuN7gT6rmUXy5DEgACNMaW94bYZgKmf7WD1KKMSbUmMU",
  "key2": "3kB4VamhNQRbQm6Gjy75vgKSrtUKaHUafZ89sYyBJu4RuXCzYgSximrK9tjfKxPQPHFwqUJLJLhrmK9iEP89BYR6",
  "key3": "46sRm5ET7uYKDvmxi78XaLDV5Cgw7F8SeWC29DHFXEWL5KxUjzXQtcRi9GqQoi4bZg61LaPNXn1cdX2qZf4bRtyR",
  "key4": "5UvYFcUjEikr7S1dorECKYNDjSj8SvZgAeLAW5UR3S5kmc11koHjDD67JB3ViRaB7fNhsBc9dENMWkRcxXcZSoNj",
  "key5": "yapFoZNiTodkH8zMJtG9TRKuv8HChAHneD9QBmQFaQLj6cej2jnjUEWrNkTxAFCFWkW9ioKabm58L6f2cT7yZDQ",
  "key6": "4xrGFn3yKi1yfvaNGSE2kLjimHL3AogsYjbT9ZJiPoJumLcu1cjisELRfE6o8hisPrfvoYLu9LCwEcLDz6Vq4MBZ",
  "key7": "41NxDKvfWNiEwjkGGtnRn5XgzknMe36oKLGxLvXusfdeqzeGRurQ64JsESxzyxxRBNgR7vBMWk9aR5nR2xC18bBY",
  "key8": "GTFTUJzbQNhBgTANSzsWfSeWcecE3tohcoVKYp8ZQGZ35vToABKBb9J3Sbrk8g9ZpsBMobQVrjgZaqfgj4xwoN1",
  "key9": "3XNRf5x7yA4TuCetPR31vQpyzabsx1jtPQN9DhSm79BgKeJXvw72jt4oN84brHCJbVpLGLPVGRe7W2CVRfDVYw5C",
  "key10": "3KWsKiG6QxgRuE8KK6pCufBTnLxBzXadvH3m79kqHureNKmc3wXjKBDYduzbpjpK2tGBh427N1KY7J6PfZV9VABf",
  "key11": "4rF1qL1WJT7qwDg8WqzJoK33fKcx6TkwLugSknBY9oFVYs7n5TcuHEjtCTW49xmKhqfgLEESafQs2gG15xP8nHW4",
  "key12": "WFtpKiGSJkHfQMNpNPryfWzBcD4NvntMT9YD6hj1FnjeyzUsQAqzbi6bMD8wULEtArF7bHhezWMYkcdy43aTsJx",
  "key13": "31w1bRSAHXpERf5q2WLNzsGjZh9dZ7iVqn5r34QxpMtBGGWLfPrmoj12c8Tb1sgMJtr6hmJTi5wMtSTArz66mFpw",
  "key14": "4jAiQmpgM9f6sVAu85rirD9ztEET5q9VHRVM2wpHAY2WhDwnA4NCEoc7SE9WGBNssJzkHzisBUK57mA4N9dHEd3t",
  "key15": "4PL6rjTeEUd282BxzwrMPJF38AT1BKnGSwCcVYTF3zSt8q74i7YBNxEnH9Y2N8ZAW7bxfwVq7ADb6tQVqFmCTnkk",
  "key16": "dwDQm4VjrPiYww9eNYT8HUzvjGYK6oRYw8rL7k6UDb3LtLUCZQApXn96Sdq9MyFUjYNp67JkiAfSfFRz1Xmhx6x",
  "key17": "3jiQUkudWkr38daTR77Xf1GPBAF7PYGpmNUn2cvtfxp8G6QgjB3diEy2KC6ej9HkPbqoLUhzD9S33Ss4KnFd3nBh",
  "key18": "4kJXAYm5EsHoe5QB8iZEGPjBGgZm8uUHX9HEg2atbuk1uF5LN2dPT8uvHiBPHJMYaMyYbvfWehBBbF62BUdUuFos",
  "key19": "5tF1nkeXxeYkZm5prxyqWoJF18abnsU92NGn4jDJxBSZQV7REUef5WWYawS9hcd9VbyLnYJZ5onD1M7tkuzmNhzL",
  "key20": "jYQN8nrzF4p3WLoZ9Qy1FHLgp9iQT8ojXrXHPwGZTuKvFN7uSyhAGzW9FvGKNTAoeyMjNKJ3BMxo9zhQ2ndJrpW",
  "key21": "2myyihRaNLeBRFMKyFmTjPHVFx9yo2NmJsLfLvf6FzbrLT1H6xBgxZK8wfSE3UnBzpLCVyY3jNhTDW5hBHb3bo8x",
  "key22": "2PF7uQxGKkBB3LWdb9BpajFP7tgbFJvCE55R85bGch9aXD2E5UGZQW6Z9CyLZZEqb1ML4gmDCgoEurCUxNJ6vUpy",
  "key23": "ACrBq1j7zW9vmD3aWPNPNnyxjzK6y2JtnJb24iTxb5BNe9M3Q1jWdooc5QtwqK1k1WJHLqHWipPQY3XYpSKEAAd",
  "key24": "3sQ2eBiBHseSnRRZcQmP1c8TKgTAxontjagn16nCyYG4qj9PYrHQoWsjpGLe4pPecohhLgwCBrdPoXhsPa9TiD77",
  "key25": "4cCuTpkHBoHV1U7YXFWr2fy5Q9KrmuR8oPvc8N32YeSpULf6MEinWon4k22gzZMru7NoGVUiKyXB5iiZwPyVpriX",
  "key26": "LozkEmHz6MsazHkQPyEbFesrPXduedw794M4prCvxYP3hvEBh2ouYXVvcfTtRwT1r14tB6ar79zje5DBLG61G6A",
  "key27": "5HZAPBJbhkTqknu9Bnr8SceY9mF4Hn3srjrfZMo4DJziYuXT7Q3xomvYSBB31j3MnqdjYtHjjAEzTJ1r1iKZgM9B",
  "key28": "5MmVBNaXTHNrAroW1dficaRurtbWSaqKwqWb6qGr9XZXkG9jut6GZgeRJ5HHC7z5riTyJW1fcWiRsAxMvjP1DJYt",
  "key29": "QobXwo6EuDJhXFvtQjKyGkcTY8Xf18SMja69LeXcxdaE3Wyjx5XkGz9cjrbyBSgL6WMsZybT8QtrrVGRhMaKEDo",
  "key30": "3QME2xcBsCAmcdgB6kZmQNTJdjkiJqa7yNg9SpzNbkCAdc8TshW8dT3qBiJbUfgkPSbhSou7ztBqCFrF2reFw5n1",
  "key31": "5JNXyq4H8WCCTc5bfoMDktzkzpMKDYccaUvo4xYVCC8T1W5y6HkNLkP9bkrmRihjB4UcSt7KDisLtzpuK4Pj2sRb",
  "key32": "4ajF62P88QexfcW3PvFqdobivfKbP1aRVYfJrZjE5gBVbTB6G7rq1FA5emjiGHhpqXyFBDFghX46EyBA4NVuv3H",
  "key33": "gh1wYY5eShLyMeWxZNQ4NzpdaydxvzeEtHuax15CecgBtnEY1cLkUpC1LKu9EsWJHwpoYycrEV7PuqiBqt8qmXf",
  "key34": "53d7T2y2kLysGriNRM7p2CBEXJeKo2fF9AS7YNc2ngHp5hyEE5DJUbELUEr8TWMdf887cXL3SL86BnjSTvdQFX4D",
  "key35": "3agHLVtTrCV8HtMpukPnyWu7Tp1KjvuMXGub5tFKn5UaNrFXNfqt3yC6ySUTcjFoUK1cmX6hUrG6uPV8EViz76mY",
  "key36": "X27GpBd5ijoJVDWHaCGP3Z5eyQ31TEgXA2sW9qXdAtRuyeZEC6sNXWX1sRrVipY28BwgTuGBB9XWrCKHK9qqvP8",
  "key37": "sZf4G8bro9vyaPdtZRJJbFiNSsad1fNbwEcnjuHCwXFuvJ9cxFkuan78xR2cPwJc33WrhTKn3LfR8PY52RmunAw",
  "key38": "2Ti3H5dNMPBgigBz9XG1c8fUKPMzbWHxvqV36YreZjsbY6USqqhycVRiVwSVqQNayAoCcpFGduSusSKYp5hc61XX"
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
