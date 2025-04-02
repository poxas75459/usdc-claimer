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
    "4VcMX7AD36EViFu3r7ouRwDDHkZFx9jyn3dfgjk2rhUh1XxKuF9noXeVhUxsbEKKnJFcdpqrLvC2aZMAsVCcjSBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yP6RDJPJF1WQUGvf276LnGA5jDhLmCjy4An3XaHofkzHhEQtAipnVYx7sczE63hxRFcQhAwnjxPX79L3aEbiFMa",
  "key1": "uymrMtc6posrznSjsXiBf6CPJjbrgmioww1UDURMQMxq8dETWbkmuVR12aS945kRVzWRcVyaVNFjnfsD12D1JA7",
  "key2": "tCzCMmQ98brPVSvRbkCSKevqNP23GUjCHiXaGyDdtQompuUiSUyHTUByK3eoMnitbD7JCQ7r5xR9E7zEkiYnHoG",
  "key3": "2nmnYpt9cAHZ95vp4xpp5JLkVawSQ7LZHi1AzAhz7w7NHGGAfVf3b1too8fX8DiFj7o6v3WpT1bVvnhF2aKaV4Bf",
  "key4": "2V7h13KAa7siNF2KgDGLQe7CGuoHtgKEz2ApAkUsiCyipDrjQK9tAzBBxTcpnRGrxZHi9qFhs7fk6yhboHKpXHmF",
  "key5": "4gM8WeVsLfA171rXCf6iL36DnZe6bHfuTsoq7n3gqfgxbAKgnPZCUpPCJVSUZ4bVpk5RfGZ7HwQ85MCx5KNZFEds",
  "key6": "vSShyvAGWN4ZPE94aosf35g5QuZ5EbCdfB3kTrR3Lf8zMQ9wzELAzBnxn3VhzXUQ5Z9qKt8P3LTfD2M4YB4miDp",
  "key7": "4G3go2YiELJonuxYNV2mYDv6diCffz14M1hT5kAnwEthBJ7LuHCpTChYSwVNzvQzAVE5oEuVPZYFDrtFXig8tsGL",
  "key8": "3MVt8D2eNAKa7Bvy9SgTEGktNy66gu1ppMHAFwi41h642YPAzZbURzvjpZJke3bq3a9BDiuAPgsQ9qUXk4jH4xD3",
  "key9": "3Bmryv2PqzHvyyXyQvAARHd6jMLG9qWrUABqXP9dD9EpmnzaXHrd3Andto6obcpTmchu8Beakh5dv69DtBLRVfTt",
  "key10": "3jyXhkDVCPMJaK4URwAfBtBS5mHYqMjiYsPqr87aiE5G14xrRR5keA6oHoNYajC7pQmy82uU5moKVbcTHnDVPmg6",
  "key11": "3sjzK6JisjNCNLrHytWWcMaSjeLz6AcrL34iW99SctadLH8bMJf8XLwpGjzTB6zgwhaaG9P3d3tfjdGaxJNn2gW7",
  "key12": "4rdKvVSKLq3wmPkKMAcbFKMCz1beH8TjJkysT43F9BJFDcxg8j8U6tXbe8thA9oTKrnPyGGF1Diwz8nq3KQPKTg1",
  "key13": "4qbd27TTMiNsLFzyJvQkPVBe4XbvE1qz2mnnh4SjM8UHXbquJorsg8b7eQaKR2oAYr2J5S7d7WvvpDii4hK1icdD",
  "key14": "2bmaVZpxKdxRz7u6nJ38ahqeHRVozQLDmW2wBuzpfPh8JbuU7FoTkCMFw9UpjkeuXZd6XyZak1VdKSTpKEoEKCfV",
  "key15": "wJnM8vn9mGBvKHLQfeVQQ8xbKcQEyBxjxqkaF3W5PZqBufcLGYgvrFsHTkFLY3vyTWsyybBUxrUjKryM34VS7rD",
  "key16": "3VKCTnKehBJRQKnATpuT1dwyH7DwxXWnUe4g2LZqXLDKh917tP4V9xQwXY2r8tfPXKLfTByoB9QZu1QDtiERxJS7",
  "key17": "3aY4oDQD6iDm1D4jn246CVQkhTz1peD5QjDU4vdSbt75bbUGQ6yhyof9KDTpuazqKfcdmQGmHxtxr3adSX22m6hq",
  "key18": "5ZEvf6CdbH1WGHEr7hF6H8QwegyUm4L9pa4q2YivgFVJkvKBpJHQpTYuh3k5xfgofv4xKdJ5CN3ursjbCKM4GuZR",
  "key19": "oq4gX3AHksiiXnbHexFq1ejv1sR41ood5bfLfzC3oddeuPSHwvkkJe6XoTypfhjU62h63gKSB2qro91gdh9mg2E",
  "key20": "QkegJZhUCFwm8cP5gcuTr1M7uKiu628bjgLo2jZ3DfgqynePy5STgSR9Dhz9Smwf4ycxitC18TtiPdJscA6wMh3",
  "key21": "4PP39XAKP4g9CHgkLYk1xgTr9QW1NaKV6jxdWjfXKmGHNpsGmJKBkAQVM9E4rgYVV33b63Bxm2Cvsx2kwQvx7z3U",
  "key22": "5HNKxqd8pZEvZCeJ5B9oZVmjJ5AFZwwmL1LmBjkzjfj14aBRoCjJQNfmbhEHTNxR4AHAzoPn9JvcWy3PUoyBSs9t",
  "key23": "3xwFh4rmyG5MHjMnk9qBZwRpuKcLbES5RaEhBLqjcw81K7bQPb8PQr4ahU1GdTKZsyLtbSyFCM8BRZ31aVVEhpeN",
  "key24": "3Sj75v8ogKfaHvWAnxF4goTMyWHG1DjmVGGuLy575pi2Eydfhh3KUwZwC81BCopkgTMeFq6g2TiJpXtrUoLcNuuC",
  "key25": "BsWaAepoBUnv1EvtKpaE4nL8EnYQ6m7mDqnpuacK4vAFTzdU3cdP8JUyP8ytFVWGT9UFcL71fnVK8G8He6NoSxe",
  "key26": "4QqWZiNbGdCqdNrz2ZSsciqAzbrSm7DycLuwQ7Wyzmp9uGM7yTGW43tSqLYVWFnwDFZ9Q2wVBgKC6wK6y7GYcPfz",
  "key27": "4Qdk3whDYcimBTsyHwmE73189EwhRuNrLzespUrzDpfXqdLL3sFYe427AfKQpygZ7wezY5jDg9kdaEkNzjioqBUk",
  "key28": "RqKEaqEsGAX6GEwBcPG6kTD4Quk3DYdS8D6kkXv9id8rkhNrV67cAnecinY19mfU4UQgbbYCwDFQ8gK3pbHbp1u",
  "key29": "2v8CSbJcx9wb9UUumUR5r9rwccrYW66iACtMMqajHhTXY9pgMP8uv9M691QLJLbjHZi9gUpTkgqEydTYSxZx7Ekv",
  "key30": "62NpoMyEN15jYo1p5pujK3RkMnJ7HH9mNJfKS5nn89AHEiR5qMvkfWmHmbKoA14Pt98zvQvJTwWo8EREGqr6JsVe",
  "key31": "4myLuYZ69JV9yMtxuJRpfb8wWU4hMKZg1QSLJxoBEJxPHVmuFeAhpvD18hYHF9L6FnEbwJvZum1zdZzjRC5RXQ4L",
  "key32": "5Auqmr174ys4kJN3WptvLsbWNjYx8kqgMsiRswY9kY7Jcs44YT1rveDWbLRkL1eFGSuyoFzTLLfpdEfFSPeEQ9hV",
  "key33": "3YAKJv1MrZk4o1xmcz7nPYwv5DtfZtg1r1UN7ipuHJ7aM3F6y7WVjw6UFN52QMx5Jttftqa28PBiehR7h4GgJ49F",
  "key34": "5P1T6WSC1meXK1DrXBiJLhie4k24MH7nECeipNjCbyiNsJfZG356KpBkcmu2ZR5m6Zg6KoMxFZXB9Bx7VJVrbWpK",
  "key35": "3tDsaFKU52mPPGdTdtDk1gQCtH6f57yhbcPvw8WvQmCFkyfTmsPEY591K1N4hnxjz9o3Y1m7JzDCyH8FEVxjyrXu",
  "key36": "5PKVoobj3VidWk3fnD5JyELSYrbU9Jtov9WarJXsPKrM7qanjodU7TGCgrtJBNt262119GXtd6dc8Gkxyqp19aAk",
  "key37": "59WXr2LySQWy4CmEyEYfiDEFnxDzTDBU1Sqv9oq8ebkBnNMRs3S6V8GPpd5rLbDTsu4oiv9wfszn8pccSEn6AJSs",
  "key38": "4mSviAjWeoGA36mWC6aNxWf1bkTmkQBiVpvpmMa14PR2g2Dy9jU8KNhSSS1M2bmNEAADoYXUa5Lv3XbTEpaaKk9C",
  "key39": "2J9xafy2mtCSKAxckorY7bgdEchf1igodigG9hu5eAdxYX2CjnoKdJdAhv5gbjgSudjfNhUt4TKHTgavJ19CT3Vt",
  "key40": "4HvBvfuJrDdRU2maUUpEpZ73xPoJpg3DeWPW4PdUuktHAakcGLbZd2M2ASk6FZU4hRfsrWvtyWNbwZtqptTGuN3f",
  "key41": "53crZXMn6mH6UiaojGSQHs5TF6NqXg6pZVqwXYkizfHMJnqj34phj5dcSRAipcNvWwxFbMUkkzqPyxoq8nq25fY1"
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
