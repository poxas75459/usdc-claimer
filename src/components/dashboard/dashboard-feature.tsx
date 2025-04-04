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
    "4zzeMPAF5Aec1p7EmPoNbuw6EcKcG3KkdctNyawRQu7n8qrALszisPfgc1TY3rujmE2R2N3YKom2cqaoTzA81Yt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C2kLBvaba9Zuy8GDEFmjJtoXDKj6pY6RxtSuoNk5Ja7eVKZu3RmeBx5ZwdX1JduWtZZLQzH7UyECZPxTMLvVgoK",
  "key1": "3J37NaKSpHdZh9kCUcqB6yQ1qVttHjRCanPsL4qmhTNgRSMxH6jCiNh8Z3SmHqvKjGWSEYSLjBEbnLf91wtC4UVv",
  "key2": "3wmVbWJHH51bgq1FjFVFDsP4uDb5ydXzhD4rhPAvxq5GURxBV6uv6JaL13f4giMSQ1Cip7nwR9vs8czBG6cTjJb8",
  "key3": "3qydYo6ncKZ8Cz9E7gv7WmyAkuPuC13cSgK6bKCBXzmXX4GaBSMsR2kJ1gD8uKfrqV9Rsg8TLyAPJoQpsq71LTS",
  "key4": "2eMRdLk1hxvNgzdf2mGNLTCkrLWN2MgemcXDHzhbVKr3nHdJGjiBHtsQoFxUNtCLCMHtj4TYhJPQp6oPgF8ew2VB",
  "key5": "36kPEhWyXWanR32kWYqvAEHxt2wkZmzfftpQhvLC3Xty99D139MW2qwTFkhtoZWkTdY6jdvRe8HMfAezpbvnr1VT",
  "key6": "3Sbi2ZYehtwved3axQ8Eqxn6hZGYSSCAUkAPTxR9NnB2eej23Z2775gAavJFrNvUo4VZiWQDQS7zZQEjbvE8msmA",
  "key7": "4LTmApchdQqX4vs4UiJfpzQasDiXMQbPGzumnEqirkmDF8vpY99KddCeJbcXCoPPHLkfZkyQRYU8bUWXxWEVdzKz",
  "key8": "5m8dK2ynRradh3DvFxXWqj2YXpcrCSibAskF9kQwK7Q9DZFtEE77a41nukzTpaHDGQ37sFGvwcUfm8o67DEZ2D1S",
  "key9": "2D9WBKCs57shqCmLiN629zbFce9gFqmq65H8dTRfYrqAG2YChBu2NL8jCJ2jMBZZbT11ejp9QbhBTs8V14bh6mQS",
  "key10": "3kLaeZCkm3CS3MrTjhpmFEU2gbVwxsS9WVjMchQwHk9jSu1PCGqj5jsa2iFAM977GNpJt9YmmmyBGs1vTE1wgVor",
  "key11": "59gHAD9M1Z4Mi8px6AZsp3fQ1aDdrmv5qg2NGaN247jw725rSvYxFBMbBnwg9jBcC8wW4SeFr8tseABxHbvQSmQE",
  "key12": "5spmhAnMsUMKiRJaNBP4W3DbyxGLxkw1iRvysfmmWo2FM9kyXz9ZmAeRGeFJ573iRg7EkcyuAYis8ozopU9UJbR4",
  "key13": "hVfuNJtoWPkucSWfsPvnybMaNFnXYAsvYM6wsQ9awTqs9jpnEP23AfVnkhAEXEeXjQWRQ7V9T8q4kYNp8wkiA2Z",
  "key14": "3pzBWfZ9s6PvWr7rFiVqTvTZfFZvRVycL5BFsNr2aSCdJ64zuuXeMbh7uG36p1KhZs6UtSMB68nk8yZomtDeUDqw",
  "key15": "GXffEvaspPkhije82VaocYZZs1gNyMLhLzQVAiSwsfJXnTaeiVqQEeg8SN4vN4NxEgs8zZPGpsk1f4CQgp6rW62",
  "key16": "LSJQTM57CFMewtfKprJPwTQNoBayZdnz3RwdwcGjKNUMQJRJa7phvXdRJ2j5teTS7RoBvz2usH17HukUs7BYVqQ",
  "key17": "qcNwQnYFD8pFVhtQseVLf3W9DVmJBt6SYyD3vbsepQ7uywjHz8RxAfWNfAsAnm7w2mUFvTeTysgEhk6NTr9tTzU",
  "key18": "FAAQL1VJvQMkQ3N2rkypNxhseiUcX6JqBJp5sMebTLo24cJt96HBgJCkZ47PpH8THUX4tgH6JCbj5383PXs9WYR",
  "key19": "y5kCYTmTG6NPBuVpkJsorkiuGHXs3UFcASmTLAwf7CwvXzg7YvcSsEnKTqeLNVJbHD7o3P1oxtp7eGJqYtrnWFC",
  "key20": "1BiqtuvZnuqn37uCtKiryaMnM62h57xPEj9QVpk5JZvhLTJ8QV3V66JRTtz3SeQUd1mpqvx5juaLJQbCgkiER3x",
  "key21": "Szqitj28uRpn443yMqqE1DuGGnu4mnYPkPeKrxJuBBhbfgUWdVe92R2RbRv7UmJ3EpMzCqfoLSaqDbWkLxLwkur",
  "key22": "3tYtSA9RN1reBw2A6Jw8gmd1Gz6KvfENEVsU74LCexXA79meGhauACQwmiQRa23GVmJKdJD3DPY114GYAHFEfZvM",
  "key23": "zSF3b5tUygETVtyAKiDagr4bpuwFhK6VYLRwdh6RDVcVU3V9Tcj9JfcPipDeoSD9WUZoLu6PbGsQGNfY4do5sPv",
  "key24": "Gd2jw1tdPNePTRXjxx93TzkNH1h5yrGKkAJKshxUCfC7P3eMsAxH5YkTLcJzULYoseuLQbcCVj9S2S2bsGguT25",
  "key25": "4RyjiH9aPe1yCuY96Jfq7VDCV1PNkgECo3bSYXDaTyZwkgVCuSAfoy1JonTgkDfs2UamguC5p1uhrBK5yiELa7fF",
  "key26": "2HhZcmPCKsojaqyA1TLJbe5Rgj9DC3PpnhMDMDgPZZ3dXbWrksFr2VsVqjLTWcj9DbrYguFskcynTRcLLMnU1tsk",
  "key27": "31jD1P9HqPGVGARmHGJR6s1DG1mVNs6dZrNSK4bLZJqL1KH6J6sPdtfeUxtVs2MNvggrjq3mcWgv1L24b1EA8yrN",
  "key28": "4fbUR5WWtdij9yvu5v7TwKFz2HNjqfG82zy4RgQH4g6e1ovgnLkz2FfgGz8kuvsPrXgPcfYD6S4SWkbEXByLcqoe",
  "key29": "3D5qmnPnjbMPVDLVA6eYJA9KG8R7BaJfCumADzeBXN7XQaLZT3LyRmLTRxZ69x37W3ReNJBjaUPgcFqKxsWXRdLA",
  "key30": "5GnpxPMVbaFWpynUKy6aQTpxdY8d7XWeEHEB1JieYGNkrsK8dzdzj151QMWiKxWSN6NMC2rgm7BYRXJivdTMrkVV",
  "key31": "3zWfnJGo4E7bkXQz3Lv23qVS83yBheXDP9KbvHv75WgRgyMvgr7fREVS5mGeoX2KtXrDoSqnYoQSjFHfGrnX96ru",
  "key32": "5guaCpxzguMpZhPLegp66CAAdf9Ndky6ZQPkboMZg9iK1HSay32YuL87Wz3V2kyx5PuKhXsw7pbjsC6yXUFnPYgA"
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
