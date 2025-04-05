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
    "53n2PW2TjymqfmXVvUoqX3oT8wPiJRDx3p39QCaQAp5LUdak2oEnp5GprkKjZ31sh4tmg5KNgFQfnaoW6Nuhzy2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sguZJovJjthmqCt9V1X9oxSUFZZEErm33HXBXNxBhBeZFqgdzdiq92xhpwYiPgsooxrhVExXCHHfXiz221wHMZ",
  "key1": "45XhhoxzDMcHoJDKAUAnyJLZYek755sJrU35BUL5dY2fRqgD79AeYMMN1UWHemygHc2hTdsgqdi2QdWzJn9aT8Z4",
  "key2": "4QYCsMuesumfGcfZiSc1KLNHRyBB7Sg3GS8DwvFF8rRkiY6vM6VYtGVWWaL7HU5cqAcbGwDwWpWshQJGnZBAbAgf",
  "key3": "2C7NpKGK8wfV9rcrtV4QnduaQ4NNVLT6Jc2en8uvdHNRZxHo8CwWwpHVtrNzxQZGCwsTjdWwWM3SPtxhPX1FCqB6",
  "key4": "4cmsLKcbjVqDvxjmauQm47kTfK6dEc8UkQrgbBkCLHDN83YVBgA4R7BduPTmGYoxeMZMZJfnA9mkPFz87b5Wbkti",
  "key5": "5VdzRJ3gkjf8R7MnnSo1tnZJMqm16cmk7RGxSe9XqtPtBkUFCed1xwzHAD5cevF9aazvnZY32SeUkXydQrZp3CBH",
  "key6": "47i3aa8rMao9N681YnpN6bKuWPsa7vPqeWigcgnbuBMaT5dN4V6kRJJG32fLxmrgDKJpynRFSB6ABkRuSbLSd1MB",
  "key7": "2dunRbUMtpJvo3WrUG7SCQ984noYLjPREyTQBS6qGpKbdrt5u6eo8Ta7pprRe4dv6cCYBtpj6T9CiGikCnyft1te",
  "key8": "4ijs2wFo26BcuGHhqND5vz7jBr5MNkJpniNWrc9qeKwF4s4aN5eui618i2CtBgKd4tesjJaJRBq6Vtcb8i1egWVs",
  "key9": "3GGptp8DHbbQEQnpKoj4H7XKHsd46ArGVKCnJ2fHs7jFF3EXvU1mKe7btQTKvnaCQj4LbtWJbk5EFppwtEfBnQ3g",
  "key10": "5cEhe2DzkckDuZFSUoBKcjd6H2gxuQ5oQz5bRwm2GAcQGFs3uMD9bkg7o2gzP4U3K5Ru8mNMHNfMbiqz9g9riYxm",
  "key11": "28zpn2xXQg8mC5pzZsXHfazJn75NGR2bdbccCLEufo1AjQVXkd59CjRgSx33bDMqDoMv8u9y8cSvKDQGM48qvEfH",
  "key12": "3uyuvWBD8PhQvb94tpDmvHPVQmuP8NMW1JK7JDS5iWCpN8vr4xfzrN6eEQUy1EJDn6xmjcUUGiPTXnCpLBEvensx",
  "key13": "4owhKDsDsyHarE9bJBWKvhLqidFRu5ckjpzcNfiHVnJhs7YndbpNv3HWVNsP11KxtiAa3y3o7UgrowkG2Uejac8H",
  "key14": "2NWMjNfWbRN6xosTinJ9d1yT1AcLKMzgEgcwT9qVT1QL9RLjCwtEhbZa5p7QsJ5mPU2zZE8HzZCoZxnAZXJkYz99",
  "key15": "3iH5y3MS68Yz6i7T7km4kq83pHGqAjGX25KzefEj1hmZj6j76dw23vpf8gTm8ce2mcyV2k2ZdS5xYBfZo3UxZRxA",
  "key16": "228b7W9JLc2dmsxuykjqLgddnP1NTDnpE59USmUJ7VJZPgx24cFdkJEYt2NJEsa8dJPYwp454PTXNtSA168JRjFi",
  "key17": "614TWSgzEUCQWHXBojT1aD9kYqiy9uN5KiommBtF86eAe28xfrnNKB9mxwqFvxGWcs79PPFHQFzULcxuzHbTXL7Y",
  "key18": "NR6jRwQiKNNLFgfCVyUfBx5JWcYUHTgbdMfB8xwcm4GBG8LyNJSvbQvXqMmXoAYgaVQgaWopwwun3EuwCvWXweB",
  "key19": "5uTvyPGAPuhRDT282UDXSxnZz5ReS1HjqKchfXaTgYTnc2UgyjAKuPsS5xjY5cQjfkamANgu1mgGjqunjMhxzKDF",
  "key20": "NfhfaX6CtEpUdCVWTDbEkzBYjGNuHuD9LXiyJSH1z8gtxtVMroeyCVJ5aFwvbBU25oMsaf1oU3HiM8UQ4hrXSRQ",
  "key21": "2ZgDqcZDGwrq16MTZeNQ134t7EZuhQefSX9R3P4FqKDuCb2e8dKaSocD3kUgxfodsCaJuEiEvW7ELZR9gXCJ12th",
  "key22": "3tQVHDsvwAPvAyGmrrNJJn9xPxd2d1zmE2sMydDYwRN8b9kLYTpWRmyqQWhSj8f4Kt2UtSnf2RfMUwoFaQYfPXLy",
  "key23": "4AaK4ZtsuNtdywBKscgnjdtiFZTTUVMUAgt7R4UeXKBqVWPKnP9UB9jeGkvSSTMYEwW9BCfRZX3cew5ffmVvXkVw",
  "key24": "57nuUM6Ch1Mgkdr8ARfp3FvCZM5C9mANAbBPGLY5SXbfweFmMgp2yXHNvJcvFaEPnFVgE7PzFw1rucnGp1SuLQBq",
  "key25": "2uM45GwXbbQFvq5Y7v3bmpwcS6UBkyhT3HLd2uzaG1a93SUtkxGqzhGiXHLnQHjNf45QWXk1mrN76uBUtBY3gnfQ",
  "key26": "5D8rtKChAoRdZqFYVWVv3HBuGvkosgXPNYP4nskmvGbnGuRuKo1hLkXmuso15vB98avKgin9mLM6J2oaJsv1K4sV",
  "key27": "5WHX5CqdmvtvXWVfPV4RngNvYvhdFethencqUDWECVyAU6TYZANWWgMLd6KP8o8CWNYBLWw78fT8BQ9QmCQ8DUx5",
  "key28": "5K7ALd9KPKEy34Hmz2mDvc9V3cHA3GLVFg8c2WjQk4dbngbBTJ2SfkMFg9X2bRk6eMkK1KN8QLiKp6Hm11bmRxdK",
  "key29": "4VMqKiNGTVjYBHysrGgGHLskey5VGMWe6ykixxLoDsuVTWpsteZyjZyywPyTYrowtQHt51jCr1G6CsxtyC5d8XmR",
  "key30": "65Bevhswhbj67gDfrPdNnez4FqJYAK5QUPJYQxpH1N25r6HVmr2uNMMrTEQHZSLG1P8Uyzh5nLmnsYwTM8W5esAL",
  "key31": "5ftvejVznG7gBxtoVSH1tqAK65Vso8Ccdujmmrxepgr55Bq7Cd5pBXb5pjKj6TdBYTCcj4aq7fjZ6pf8rgWikdP1",
  "key32": "5T9DVRvj1ATriSL4h5tw5wNiXf2AcKLtXkswUCyVWMsctEsiAzvekkZPfADKRSwp5H8MLdzYT3EYzZMGMfCjoH5L",
  "key33": "eiA5mM3k48EeJ6wjGFazznRs1jg5ZNhdaF6KZiYKPpBSVWgQud1rviJVUWmTU23Y7skpRjniVQcmtB54f9Ai3sq",
  "key34": "5mjDa1ZeBzqVKqWis1vc2gs3a1D2S5zhzwvMP13r9Z9UX6ux7KV4cduzrj4f7jyHVKgxBruzAUcGdR31pifqRvYV"
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
