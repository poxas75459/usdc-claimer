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
    "3akn93m71UxhhEaSMujY81cjaoGxwMq61GedzDe4aRFSrngGtPAVMp2diUjUdzdFrs2NQaqxmSXz3o2f57VqhQ8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h33bGz95pXqhrjoGSRzSskKKhEaszMHCqq4w294VWHUBeh6c3w62eErh9XYLD3g6w6xBF6ze1X5ZcK3mwRgeYNE",
  "key1": "iGuY2M3B2j72KkeaG12q2zZszhnez4oJUfRVe6vngQ4UNdPJimEB697WEsUfEtyVcUJ39jzVqoKwActEEWaTC6a",
  "key2": "5Qqqq1jyM4Xd4nzoRSKPJDm9Donr1CBY5FbKc2v4y2Z43CJxKM5sqehoJyz13zaWEzP8A3ufG1xXVBDzhx7bkjfn",
  "key3": "5VACEfbzub91JoXsqW8wxafCpBx9THBUQjRdvCBRSY9baXmAqPzjsg3nPFGqmJN6xBFScK9H1MCCrTRqhguGX3ow",
  "key4": "47bBP6tqmHvBRWxFoMqbeCW1F51houABA6emdLCWhermBroKZzoPkdBHy1rTwWCrUqecS57JsQovprLfNxfcStZn",
  "key5": "4bsDZQVKWEYwE3cPYcTW6x9UkudNxYFfBoYrGMHrWqow7fpV3iqqebMwVkRbkZCaZitxu6b499u3F58MrBdpvKaT",
  "key6": "4cByUGd7oKi1VhGkVXcq8Npo4UQft48xnN8vx2AT2ejY2YNDRemmhLhS5G6q2gTMpmgAgSHutmScqQ9aEFwvGwux",
  "key7": "4XuXBdVX9BLusULoe9YbLE3kvuKcnGc2JPcwxd7BMddsPYWsX9VqJpiWC8EXoAy6My3CUaMrWpuAkpz12o8NQ8a",
  "key8": "5djo2LNvQULJhz2ch2oEA2nAy6ptemnNPTCN9c5U3qLa3V6CdcRqjP8DqWYuh1URrLB9JiKRS9AtjVLueJKVMEM1",
  "key9": "4DiMEgffwQ4GdLsUM9WMSfrFVHJMKjwQD58UhrWgsUDHf3vXUXxLXEjeuFmC86TkRK6aC3jUKmRmjDrizLxk31Ge",
  "key10": "QSnFibwKbeSSw1P3Qgye7iJioFLBKLDydt5mn1StzR9dhgEDgHuQxNh4eTjroXe7Ah3SwDy54NWkZuMAiprffAD",
  "key11": "PQR9ZZUw9usNnfcugLb1vNuBNmB8S2dqUEGeuoxodNDXYAz3mwiB2AGr3sbPvJyuwzUiVNtBefHWzwP68sxVvwY",
  "key12": "3NY6wnnBsNPg4abqMg4W2BPrZATXqXFimgZyjHK98BpTXM6QYMiWdtUQNE2ar6wxCa9DEtqfKdzgfKq82N5K4AF9",
  "key13": "3PG1MLd3H9TrDunnyJkehEqFCdxnejwsDFwM9BXiQBJcV9eJKLwEmVAwSP52sFz5XC1exYAzZ128N4x63ESmGZsH",
  "key14": "5jKwkMBEUJh9p6HhCCjipKuwaHmAMrQWT8KfCzt6JpmoWJbapmcVR7d5p9L8x8SRpU4euSyXV2VxpHMdmLPfXm24",
  "key15": "4vK8rL71n9i5uPJrmJuvwdLqhUqedrH6a9Xs1gUeZXtAiKjYK2sEH8g1og4pTf36d8QGnoeqwz4X81j5YqhUyBpH",
  "key16": "2Qo29AYsEdy4XvKZwkJ5Ht8SYeEkjmU9J5Z4jdKThEqZmbE3TPPJ2rzpRdV46fJMCvsmG2wAZTZqeHwW3EAQG8eu",
  "key17": "4akBGUi2eTa2EBej8Ap3qFgaPf5cbAyckQMfbzVEUzrcusqM62RUamEVroGjK8ppWdp1EYHUaThC15eANuDzsfM7",
  "key18": "3zqBoPwzp9gJEpHdZa488JmzDEhmvDTzpcicLrc3JV8Uak9wTbJ9v4ANJzp5khv3pKXePRnSXtXLqSwVnhFhouWK",
  "key19": "385YdXRg25RUdAJhfWTwRMrxAGu1rwrVcmYSZbg1QgV3JBh7JcFFNN47iByBsqKoWDCyhVF7AGARhuVPS58RdgU9",
  "key20": "2diifu2VXUTgdzCFtHMGMdVS5vMRr1dR3tSnz7o51XpLSeGypUdPhEJpKVJFinaf2gjDTH7dAFhMYBAgoLZz54z6",
  "key21": "4e4rhYA7sjDGfdmr4dpMuuHv9Rz42s1EnvXq7JreRQSJ7h21TEKgFykFWe5HSoEv6SwGn4fyeNCt3RAP94JtFMge",
  "key22": "2CZc6esEQu5cT1kaoaZ9p5LivBW9xeYJLgjVdgeHau51uM3MwWLFGQC8CKLkHvdvHKdmqyNxWQ1aTSujVDQsob2x",
  "key23": "4Z3HG1TXV2G4ijQG1XVmHtwdFFEJyZMZi5E2hMfbPQVgHGJ4FRu7LWcp49WRzjNCEdPPH4mPTBFfj73eG5ShDgRi",
  "key24": "32AantLsVaAErjvcxaGHZSqtRyZjbhQkcofbBsh5yteAdB37pAomvsbAjn6d8tH3VpGwJUwvYg5b5LKHT51Rk3Lq",
  "key25": "4ko6X3YrdayHiUs6V2HY6qP9msGbxhC5QJo4v7crDUuc4jNW1RvRgumTJMjSX8DF1jGckkyCsQy22QP6xzbJKXwk",
  "key26": "5xgRprhon29mpMUgdLFYFFM7wEJG4tRCWcHUo2g9eaCdEB5cXtEMBC3p1DpwzACMUbbmgpvQpcboYnYw4jnuT5dX",
  "key27": "2iVhTJvkpv1gyM6x7V2haRLWEGxgYa6TsF5ahmyerKw94eArW133yCbSeUx6PdixFBUGrXiVaULHFq2TB6RgTaUw",
  "key28": "37wGtPynqUEtfDw7J6BNV9gdHEUV6F4NRqFX8wPsToyGjkwjURMXUKoskv6cqTqiuzv11a7wm4gR9MtYuj6tvp6g",
  "key29": "A6F93VQWYHHQYYDLQkQfkUiis1EMqCjTXaC4V5LcMwr4xTm3SMVd1L6qiCNV3xPu5vZ3aDmhGGSZTG7Q1em6yrN",
  "key30": "3pahaWNX4fL2TBHssgcZdZPz8rKU4tgnwnoeADZY7yvYTdfYTT4iSkysc8JcWrXYR7VNktPA4GVYSpTH7Snq5pdE",
  "key31": "4FshMcZy5bC66fng6J97TgfygNWfLBvZmdj637F38qhsc4wZsXq1boBe2aNYGDJKrfsnoJbHrw88NGZmwBQHNY9r",
  "key32": "4cm4qQxwJxGueWNYb9YUGuwZjSRYqy3sx1ipT1mUfFf5Hx48tvdsbL6nCZSdG9avG8HVJs8XH4KSa8ndRvRet3fp",
  "key33": "2KQEU9zRTZPTyatjt5JBtH9B5NAz7cikoRMvJbccRvVgF1pWju2Gva9KMTn8jmgMT1VfMKSdPWUGQzV3n5hstAY7",
  "key34": "2W1sjCqkV6NfGZB4QkrskBoSNjSV84MULd33ZUbCxw8e342eR97F49aA57GCKc8Vha6eaLUXVNBGqjrGbN5ZoDn",
  "key35": "373Beqpna19HzMEjPYpd6nqshx8vTrkeHFRpGxGEzBTwUh4u9UuQ7kP1Po6MhpHTUDp1mwANQxnpGjVH8pk1TxHR",
  "key36": "45tC3eUfEG6Zt52wVma5Hx8p7HgSJuf2d8gF1ZGzMKduHJmzggiNFK4Kp1q8SfiZ3k4Aq1VNdQwoG81jBZBvKovC",
  "key37": "Ts8uRCdNKMccpQ5pYpXLvXSdfzgKTinYGE6oye5jCma5v44M75MUtL29Xeadr9GD6p4et8bTHDtBhQCkqv3rBTW",
  "key38": "3sY3rM4y9U5cJMonWhHHKoFtcZciwHfQFoqypxWVXp2R2rZGbvGcFBZ25EuX8H4FhzpjgRoFDjZR1ySyS4Vgupu9",
  "key39": "oxQed8QJUEYNy5qLvHTCGi9zY71mRCn6a9FFGr2heTpPR3Zq8F9T8iAYmWfByJBXoyQBDH8rDnNnKGFFEYewgis",
  "key40": "2kx74LWWe2Hz4qMRiYpY5eYbBAVPRV875M4e2oegM2vcxA7bjtZDE6fmdZd5otFk7rCZApKqicjiRg8ZBAiTGmAu"
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
