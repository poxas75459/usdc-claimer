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
    "oKHam4dMPfNYLPeMNoQcNw9we5WqzX1QUdGHcoA7RbPVMYhqGeR3y2avU6vd94gEdVdhWoTjcwkkUvf8KMNajEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hFJkZ1SwowPM2Hbaakqu3CJery48rJWiVggQujirJ7GtoJRNpqfJpJ3wiN6JwQwWnGYa21CMqfwC9EhvTJWAiG8",
  "key1": "231oGy3CAVatsJnmQxB514LJCHuMDfHS3S7MyxLVVu7gk9dWtJvZUKS6h41BzpboGsbdcCVHiMT2Py9R5WKcYRW7",
  "key2": "AT1H7b3BefecFAhgP8xreMKr3rbVX2LVrCyvd9rsC2rJ8kT7oVkfc5ki95ySKxCgSKdiJbAQzuDYijiwPgiy1S8",
  "key3": "53zTPcGZH9x5wnGfy5qTVxaPx5Aw8gjCQuPXhQ5kSjkuYm9je9WBbJb9Q92UFeAbUQJSJH9ZeJktSsJnRrdhzG5P",
  "key4": "GvjvbWMzRqJpdqwFmiC4D4Tw56Ka6BBhhFqGtEWASaKDKRdTTU8Jjp4fxWXSLuHGCpk2tEBopTGG7Qz33X8JvyZ",
  "key5": "3qpsKFTbbo6yN4MxAecyd1SeweM1U17HevPMtbG4166M2rNtD9cg3fymSUPB8mQDVkM5AXHdFgvTd2LG4C9Dv6rH",
  "key6": "57o1AWuQ9KogYnLz43ywC3Ehgz3eWhaBS5n6NEuV1Ka78HMDWRJvQ5r36hJdp87UzNhsULXhVR24Xz3MyamF9GiE",
  "key7": "4PC2nFcLmhD1UobdkoSsiESHqaxDuomCZFEjuiVFdzSTJjjeSWDvqJ5chMiDkJJqAJmmiYgJfTeN5BFXvsRBTL6q",
  "key8": "2X9YFXdrEp2xS4EVA49tRLQstia2WJry8rdNo75oEQ2GJrGTWhAL3FVLXNGAbhK5QM487dQUhhnLEzvcZR66hYyx",
  "key9": "3uVKjGxvhDCtzezY5AYtwvnJ55mPy2m6ttRAEGBcazCyLrc7RK5zDyEBX2DQDfWZEXvva3qgUG7t3SBiWinWCcdW",
  "key10": "2sJCEnQBZdGJdi79ypjv4GYgJyDHyQ2fa3QUtmwyV8zf3ce4p8P2MJz8GpmfJiQ6Lq9P8ZXffbwvWqqb1nKrKcno",
  "key11": "2Xc8wth5s6NBtghugfAokGbbzfVZmBfBPidAw3o1qckZd96conSVuPG4pCHjJHMTEiSU62R2pbavA4NyseJdDMaH",
  "key12": "3ABqN3M2woJpXoRnLgPQxS5XKqPwDaiPADgc2EmSFhp2kn6Nca8km1csLaCFtv8YoypiBnVY7yf3EqZLzFGTy31y",
  "key13": "3Ci1mEN2QSGxizKca9Y6oAosmLhWeXr2n1kfGCwTmwQJKvVmsNeCETcE7Jf5xbPzXUeNzTNRiibKQiJEPg1dV2mF",
  "key14": "mxLkHK3Wd2DSaxfVj8tw8zWsxYtyfQQqPr6dvKtuNkxWdfLody2ppWYzmvU1r7PwQV5kPDQXQf7x8R4UkAJ8MoW",
  "key15": "2wYzzeoZwaiuZs7qPRSj1RVPvk7k46w4UoFn5ghgwcK1cjRrkMxfMRg27XQyDx8DQis9iJYxWbM7RzLprqbzRBqC",
  "key16": "2AhPiJKQZH4rdz3qWuUAvgoUAxCeBi5ZVziMDkpS3pfH5kwkbQfXb6Er439p5UXJNYbydPUHUee43ttZrjHk7Ets",
  "key17": "2ZWf3M5Nf4RoUbXNbkXSRjaniYTxvzK4uLAWcxf2jRshmhuuZvwApjBqajFGVFV7XQj1LnWAXE6ERXbVxDupCrNP",
  "key18": "2iiH6eKjfbHNMb3egxcLZ8DaEgrpmWwEXVoLbBwZs5PWcMY2yHtU6f3fHioPsy83QByKtpdVR2A8XftR2EfWMWir",
  "key19": "ghP1PUsU6i4QxPq2o9Rh1zLNEp9gMvNSvtgNyVJiqJrU1XgbGX8TemoRzfYV9YEHnLGaLZyVpjAxN1W9PZ1rwZ8",
  "key20": "2uxbDg2wmmkWQLiigCM2C4FFHidZ6g4UkfdqdVd5ns7B3a4NQ5KzDoTrSCPfaE3NZaA1dFHbhRhV2T8zQrNpToQ3",
  "key21": "qvCgmuyB37Ya6kHdLj3LijAAM3zy8uVRFBFnraHgvyUGCYzfgkXdHfUdTYM7j21874rQx1Lzdj3Fz9JKM1g2aHq",
  "key22": "2cJvheZUp3YhjV2rsRguKnJGvr4F3wSGRjxXY9V2zw3Auwm2aQh1CUbJuVaGi8QRmjLJVE7DEHcptedYp5dVdb89",
  "key23": "2kjrobpGMNYebYVoToUExUW6XStktYiLkg7g6qFzRrX87wss7okS4ZPeuoAAWPynvsn4PMe4p8baeixQBVH5xACY",
  "key24": "2Lkqg2zmmVFPQEfxwizEpPm19X7r7zDED5HzSKvBb2t79fgmBtbA6JXmypaLSTeePpvQk52atzFF15Ld2nGMbHJu",
  "key25": "4BUeY9MX1jKRtJEKXKi8TENivo1hYPUF9gqMxLZETfHfxJNCeaUMroq8qXwq9keUxVyfj1HjdNsvkUwUjHcowG77",
  "key26": "4uS3PY4DQbPi2Uy4vRALa3rtqV3iyMMfHFxjxnDyefv61tYq3PmhU6AqoGmtmrUJwUWdoW7XppZ6pZPVLxWUF2Z1",
  "key27": "2ZRxZWuqJAHo9nd6a76Peb1ZfNyX86c4VP6jhrDoLbjVKqvtKX589bQvP3iqLeojgHDaiFdRreZS2WmmqzSaXzrW",
  "key28": "5d95WKpuYoXUhX8nWHHH4wRL1XekXqH1GM1HZK2XpQM6trv4dSifZPKCcBuLb7cWwb1cCrc8LKZwDbqjxTfprdPN",
  "key29": "5C9iVkbEyrVy8kn8p3fDQocmTVMB398Dvct7vZ7pXGNntdvjD7MgFVjiPHvKxoVuqBVw4RcTW3mEJeaZNmG3WmZF",
  "key30": "4rs3ivtBaVqtyAmzLSoWP1JA3UgkZ4uYggkaMzLYnp1W49GcaebpEVZpFN1xQ3PSBMASraEYRrgtvrxvpMa32Kok",
  "key31": "swwvxfagRtnuPVW9zZqMJ8mzhu9P1zDyiQ2n7KZPJxyPW2cpWfRquiLAJctLBD4qR2U8VBEvMn9zQMfwZndRfpC",
  "key32": "4633LKpm5YFZJQTS58uphzZLicQvtm3xwH2KQ9PNc7QtzRDmqSvLHZJLMQJVomJQwUvZ2Bn6Z9axUn1narCNPQtJ",
  "key33": "34iMdrKrHBa5uLp4D9ZinZ53ycAsKU1XRwPM8REh8s3H29ULf3Tky1fmaBdUoJqwdcmQ51tn4MtjrXSpYmZ7Leqk",
  "key34": "5n9UyHN3LsSGKdQqpxDjUq2oNTLKVh6iJY7FSuVmTy4HSeymzud7vV7v91W9CweYmNGikRuBqfqPHFGeevDUUFRA",
  "key35": "2wMzfDKNcA8imwDBSoN5ZW9ewPtEpUviMCMMcfBuogoGZa2xngCV8wR8jWRKBSGenUedNazhCFXM92i9pRwRVdUj",
  "key36": "i48R4yM3piXXUgrjRebsyA9MSiehrEsYU3F5Z41HkpcoTmZEYgkgQLNSLoMirnn1Te6NyYGvrm93D1XydfYYYzD",
  "key37": "4pgJekpuM1VW7rF21LKsEcrFbcqnJxbRso9voxi8Uizkv3ioffCX87VZEFfJUzDqR3KqZPwYT29Ai6PzF851BRN4",
  "key38": "38eHc613narF4TMNb613nUH6VPgzizX9kXMb664neQNtgBjbrYLXq1Ywhdmc7Hk2QPQcJiMaZBEhDQWBQFY3BGeU",
  "key39": "4BSEKGKLtsywQyzs9i6Vi13bVVmibrbag6d9mekgnczWq6whENdeew6k2W47zkSnV2eMLUreJUqgtnmBBPJ9Br3A",
  "key40": "4bcxY2AKgGvmbmuaR62Nqqr6sa1TMxWQAsyRcVgdKf3JBfF33YgHP3mxC3W5SYE4YoQGTkXanYoMz2Rc1nMJKudK",
  "key41": "4FCAyvcLo7rwASHVCWBNuH76noTu7sehDm44iXH72skta6QvG3F6UAxbJ7uDynWs6h8JJtpNjKi6mKcGBsjWymk5",
  "key42": "2Tp9SGKHxZDhBEzKrdLAgUgDA5Hczghu7FaQsTDtGwNc8xguveM4yb49Tr7qJpj9E6UHDkKF3B3cfi7LMDALQutQ",
  "key43": "2yYeuV7uW6Yan9PZszYPW8QdN3jL9nDZMa1UTS8vQNbdtxLf2X7CtDDYd6NjPSV3M1XpSxaLDdruB1ow4tvU9daU"
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
