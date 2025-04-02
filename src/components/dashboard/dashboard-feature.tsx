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
    "8rC7dYxaXrU8yHdsDCwVsj68NLN5xuLQtqHQFurHtemsmx96jKU83biU2EwjXxcFShgKjMatacmXN38b5AMrncP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hbXnusfRgLKKExUjihim3Zs7RMbQMbbvWxdeGyZrTzahRS3YuRqxAjeYB5CgP7FwbmQuPUJWLqaLFSp3xLqo8gf",
  "key1": "4CXAsfSBHiZLVogn4itCPaD5LpUvvgVVyJACesNGYSYGoVVMZD1nj5zr2zX25qyvSaRkiAGdq9Ci4uyaZCmcjCZS",
  "key2": "22FtCcKxsoVH3QFxEC9qQjb2QYhZ3num7LaXf2iXAL3Zb9QNfPLzTqA8ymSyXpvSdzngRb3oaTyzdNJk31QNDJdy",
  "key3": "n6THaUwoWF7LAwuESgcLxS4F2WmNHx5tupA1FGAqyxzvUquBXKuFFEmEnt4GrDVE6AUMRStiuyNXE1Xw5wukgzH",
  "key4": "2R49gzbBpaNmRZ6koGyJjA5i711saH4rM156xTuNRLeU85KtQi4ZunVC94JtLcJBHfXQqLxV6zjBkt2fDX6zpScC",
  "key5": "422C6c5yXZvqrTcAMx7SfBcCFujqAb6b5gHG21FbPx3fFMbHXRSxmjzghPJNCx8zAo866JTiNpREbmVoYBPQtacM",
  "key6": "2zVJKukjvCqVBK4Uvb1WDFoWXF4o4Uk87gDDgngBYgYTEBxzhDKBwYkuJg7xfGaPEwW7QzJofBpmhXCqxahG82iT",
  "key7": "3beEAy43gMKvBE1gS23qJWyKvJFStZRzc1wD6y1tPmCH8HHa8cJXcpZ7MuHG6mdFyxAQqq47Z4xD5Y5kXyf86AYb",
  "key8": "Y9vXpWmt66D8DW4dBLz3r6L87Ra6NLKVwngfUZsinGiVb4o7Ry8o3sinkYfzQAPMiWjyb6cfyLCtgR7jQNv1T5H",
  "key9": "5CtJGHmhvVseogrteZHfDdbxw6H4hUUf2bfzehsFUUf1uk8TFTGds5WxSgHmLS4SSAMEK7Qxc3bAVywZDeQ8xsav",
  "key10": "4V3SzceUySsFri3LQXPj5BXYjRU8U3oMqSrUz3DPHBJFoc6Bwx6aJYNt4d19CJxiyE1gUt25Tupn1iZJNm5A5X4r",
  "key11": "2gwi5zafnAXMdNkfgptdNgoTYPB6VwGZQNoJidHoikrhHnVart2cTW4uu5KEXuGwnwwWuJ8yt76hJ5MDbfQfBHgP",
  "key12": "4ZcrUvk6ERNTfkp1yu3iehZB25ZQwutqa5xsLLtTG26nxPUff6k5pSq3fv1wiwzAtuYz1eKQtabnFGomHCWfLfJ6",
  "key13": "XtbFLiKWcYM5JQg94B4tTeXjkX9T5YL77VaaN2HzWrhU8GWHEDdFKrVhra8sUe57vPkRpsgNHGwYQnCQcvL96Ny",
  "key14": "2zWCbT5uvvF4Jq9iFZkrFg5pSYwFnEeKcVCJ5o2Q477UQeHKJXy6EZoW5vemVwtyTA5F983dLzTUjxyhaSYUEiUd",
  "key15": "3ZFKdjt8pu6DrGXEp5Umm91KNTQMkR3pLVnTh4HjAhnpCetfHFVJ4VDDbsdDgpDCTktoQS2yn8uCyCi7by3pY9CW",
  "key16": "3BA77fHaKLDBZtdKwtsXcT12iiSQGrE3DcLEGdyvmja9BPPAqeEcH1RqiUTbBAjxuxUw2XKhka8o6d8iA7DQ4qFp",
  "key17": "2h6LBTvdtA4RP5fziZW2XBKc173kY532WTMSssAkfYUNpCmkJ9Rjoq9R7BjXaQP18F8owTdqCcKGL3fmKT2vGZi1",
  "key18": "4pcrzhT4CJW4AsbEsdeS7hc9S9aYdxmzA6MGVay6gGTgz96SgTRTTHVozsJ9p4asYxyazb6e8JuFH9sLENornbiS",
  "key19": "5mqd6DwC9SiNWQ6ap68KPiEw69GuJ2HVtGngo36qZRrMKzfHDjD1Nq2FCiDTcU5dXBi2aAdExRG7hh9CSdcE39nF",
  "key20": "LPN2T3frpLvYNz176gER76HCvdrMbayotQV7Q296JsN5J8NUKWt9piRBqp65BzL6aSfSMCLnJJmhwz5oJ9fE3iM",
  "key21": "3RNHgUwvZV7MD3hf2sC9J8jKXKmfqjb6ZHYwpfckGbbJcUVuyTa2fqMYckWTK6xRfbVq2xfy5pAm7QKztLQdikoQ",
  "key22": "4fBoPBbMZL9M8FZS5XSR8TRJb5xchX3k3wBD5QMZGrLBVdCnpDG9H8NA8GxEedzLhVyrCEZ1Ftfi8okCxq4Rv4t6",
  "key23": "3mReygmB4Xb868cUa2dnRB39xthxixEjthFr4qMC7Ap9Joz2hNNDVi2mKtU69KWqEUAGVw7KJx5mAvM2ixC1zdPP",
  "key24": "5JYdiUb2E2bmqzpATKmicVfVh4fR5vKYR335CKLPREMHRU2ZNEeKPNhTpbjgT4na4sr1aB4JDUUiwCkC2jrZYwSb",
  "key25": "2cfSA3CffVvfJoLWvDYAAk8yN3PZCQW6RUqDR8hUpf1v51eg315mHJuh3TnPLcgRWvpEqVVCoq8FK51ggrKVWhm5",
  "key26": "2bBSwhDEkzshRAa9YoqS1nizmoJTyJDYgVGMyN6qRxeRh3iGG4kydK7bYfQWU3VSVWo1LoTnfQ7ddbbxE7WZ8t4T",
  "key27": "C4RsJs1Xy1LCZYTg5GdF54aaKwYa9wyE6zRwYEaT9sUoFi95ePEE1oUS2VpjhpW198rydAQrYCgL7x1WQYhWa2j",
  "key28": "5WrLSiSJwC6RWRoFrNjGLzAPGHy1obe9yPWvjxJ9HtUbdeKvAY1fuzrv1WphHgj7KoXTrjzaHXogzSZfVceGQAtt",
  "key29": "2vPeptACJBcMXy5sNh1UeahQxUWps7jzcotfgNtMHKyiABSshr3ALXSKGAdnAdWKeQXJ29fQKSv6YnpT5Pa1VHou",
  "key30": "68f1SSrqoGfmR829w4VbCeFAEGYxGR9F1ZhRmCHMY18DZKjm2QeVJ6oozGZ91ja6kwTx6hyNB9nceUY9em1t6kA",
  "key31": "N43uWBRTskvqCqzQd48PP5p3ScGGYxeSvRtRguJoBypX8iDV6Aow55eA1MJ2eMnLEUjgpELeRvMmhwz5K9hrQ9C",
  "key32": "czoatp8fJqUMcJ98YNM66LVceN5oRFgKV7JJQ7Tz2aWT5y4oEDnXwxHpJWayhZvF1HozTDcMnRQigRbztxgA8uC",
  "key33": "4tJLtq5xGfvqpsHsJGWDqwTrdRzHopNxn6LDBo4CsAsFgSubaPRSqThFNTfKoSsyWToXorRwS6ADfVBPqen3mEk6",
  "key34": "cxvf1QuzJfr9SUdvbSiDm3cLPmFxYE4fNHqJGMbpdBc79hF2kFAmqURQgKegpFwaco1X41Z61qYDC16nx8RVCUg",
  "key35": "49usE2H33vivpNRZS5imUbATK5Tmyw2Z57g4Qoi8Baox6GG2FFXbwzRw62m5BaQta74KCyKSkBMzBePWLQWsTfos",
  "key36": "4b5NFiVoev8BqE8eZiMC1nnNUiwWzLrFs1NV45tqPrw7sYPwdaYSYTeqK4SjsMHjfYBXRVS4XALBPAVW8HFemM3z",
  "key37": "5gHNrLq2itcsS32k3x9qTPCYgKXbP1gnKxwnR6TdwEbgGgBFGYVNxRpf9j3FAzeYbEiwr1eNTuu7YXB2RrFMWn4C",
  "key38": "ByETBsJpHmYQroxA1u1dRtAyM2uKUe3ombpYxQuN4ez9WHyjADoTMtgy9D6pckZVwpcXHsfjJRcH8vaZX9pRgzv",
  "key39": "4VU5wP8SurRxxkXiyE9mWzoU4Bxehk7hyc5RWhNYpfZuBwyzEcJcHf8ZTNosy8kGUEsJTcMocrxKq7zU5BKUgijE"
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
