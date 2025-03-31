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
    "48TRN758pEN3HSww17wycatU1ygaR4ftJmzTFxx2zEQ1YMcPKxDxk3oF9VH2gDaNdkpLvZGJogP3WUTiUESyNKmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hC8zMkmEi8h7Ck3RQthEuwTFVeBBqgiJGYm8t3opqERABDbJnXosjnHu1aeswG2oxpng4KKvpoa2QuWgqALqTA8",
  "key1": "kE76FibSeGRahEVjevr6MdXrz6R2rZsjicDkBbmeGreY6DcmEXcKovHSnRmWDE7xbwZgWpXBaf4BZkax5nFJ3XQ",
  "key2": "wFkQ4RwJgaCycFTtZhy179ZGjRgzqHBmhPsoPTNEEXNwdibGRxCWtXLoLx9iWNcHAVA3NE6dtGWWgqqXzw7ZUwZ",
  "key3": "2xFrDbQV8jqtPHqjqc8ojrT9ez8ZTZnFBgaQwZeFKuN7EWmHqFndjkchefz1Tfkw7aXxEwvyUJ7QQcZEBsYnbZQK",
  "key4": "49iHAtE3N54nPJeLrh4MwbxQA7XGJpUUnBQL7uKrYqkagdDuvWnCx6yYdLcfCKESJmAcLeYhyPVXhyXxF4gGtFMi",
  "key5": "NSymn3TMP1Lbdfw49bT3mkMf4FQ9Sy8ofe4g6rFcEULLUSTWpfyfUXgVBWSG8XFkVQZMvABSNiA7HfziN9xR7Tz",
  "key6": "DYtdCHwvooe2GfNhq4MmBicbBvs2qqkCJcoNZZq3dGTWfzQbYvK5G5qfKVVLhTkSST1ESctGomam91okS6SPLzJ",
  "key7": "2vpDeboHTwbaQ4GfV7NQEtbcX643hgoekEnFDadrzHRGjmcyubZxA6HHdca9zrZG1kaZJ27aF81jDCwaTZsPTS8G",
  "key8": "32o9qsuu7yvmHKGMekmi4DkPRMSYYideCzRCQJJyVc4v9TPQZUFANGEq9bSDi6vW87mxTDrkKnofUENu6qs3wE8k",
  "key9": "5vjHyWGPMLmJznALEupFhQeAat3v9A6swJnahMtJy6TNm4S2sr2vhXGSaab3QcHMcCVESFq7HESZ5h4ALHVqNdBk",
  "key10": "3xfxPxvKsSmSPccZFgSmKiV4RQMr71svyv6AbdLuxS5sifN3odmYvQ9SzEdoqT8McmgLQhadqTiKvNgFot7vE5fc",
  "key11": "NjTR8qg2D7yQiRn4Go6H3rjMhp7wTt1F2Rttrpt5gmrbiD3fBsWmDrsFFfAwt2apWkH1A8zT97b4QnDxQSfDu2G",
  "key12": "LVUdyoX634CvYpHBHneeRpmYr5CAGfc6Ap5qLz8nmwm8yux18bhjxXrv1UC2QLoZAPV94oa3oC1eVf9DLLgeFKQ",
  "key13": "UUK5aVfkrxxEfmWWQDpGZEPcQTFt3Z9XTeAgeSSq6AMGLb2tvCCrC864NkHXx9ETw5dobGQbQ3x5akodVJpeURU",
  "key14": "8LAWEFh2PiKmferQHRbUxCmNuYoAMgU4fhzu5DJVMezieBcxqVizwqTwu6N1rZiyXFj45waWcoyiruA4gQbPZHG",
  "key15": "2owUTNLHEe2t7RWdEfWVz9ay8mXmFNdjcJSLCkwR3xXc8Gt2ZHPaQb3CLCJZfuAjoeFLVi6SDTu3917BnJ7BJdVY",
  "key16": "5UV96UBUU2myQBtgsSzogYdFqhwDxW4xRrjLdoZsKCeuMn3uTB6AyM3Fjj5wDuEsiSmX2GpaAVnFXGxE56xYu8su",
  "key17": "4dZNXKV7CjcHhTc3j6JVCd3nH242U2VwQCSzzWoDp8AJRmCi1Y7kR9L8y5kU8ayjMUmsw6VceqNqP9Lhpt6owXZZ",
  "key18": "5DjkGETV2HkiHPruqscUHwV9Uk5pmkRuZ849K6kZG6ZGSzpBKyaDYfHZ8be5gqbwkEVjGXydnwZejUHFJ4QhyFSL",
  "key19": "3ZQJpwrr1ahw3ZvaHMypguYrG4xsD2wqdqBZrmi3pH9B5X3CM3krAkNawKiCDrabdLW1bYg5PLaaV9atP6qXTTG8",
  "key20": "g6QpYtTViWufdWCyD66DK3wJ79r481Vhnknq5JcsA6UWGkXLBDndkQLKUYJyNfi67A4RfgDhtRUZkNGgTj5UkRT",
  "key21": "42YMzUWjKjTmqhKAahUNnRnh848JnLBYbiQYGyr2iw9yvXPyFmiAVmeTiDyGBVe5gtioKWC75tda4fZTq6JNV8b7",
  "key22": "63d8odXS1DBNxcAddQAzpEFonr96XH2TTHLtiF4mEiq6mLhU9JjKEd2p1qySHgArNfoeBLvMNgXLj4RxY9dmMCxu",
  "key23": "5caYYCkZkDYy1P1dHX3YXwxMEJ4eS5Qt6d9d2mb8uV22c7FogvhywbEa3Bmg9EPYqfmQgQo4g6U59Ur6k1FY4E27",
  "key24": "9UJJ6HZKHhp1NgK9VMs5FhmVfXoELY8DvL4zdzzjW6Mwy33XoyMvoe2Hp1jhFc6ytU9TiNJRFRhk716pWMJVRsW",
  "key25": "5fddcqiKH2EXdTMDBYipfr7VJeNVSUheMV4S3oftQe3JhHzpG7qYtqra1H1PZdPatTCdxicsoRdeXrTJ2n1g6axJ",
  "key26": "uXmnev2W67D5vyfWWccCckir8GAjxaqNUBjaVpXkTuisWEp2wfPv6Xjx3F7dfiGPga5qkM77PP2AsfLnybhYGb3",
  "key27": "4EnQAVmjCjktxa98VUjdu33Rr4hGson9ThdQbDo5VRrf7vLxrHavQgvWUaHDR7dv88oRhtjHe1qLpSa9aiuhN9kb",
  "key28": "57MSKCAYYPtGWQJoP3FcCAmi1YUxBesiFe18ZW9dVFMzZPiZ18G86MfQ1mZWuxgKN6AswGUtHEQ2eXpBXqwE5pFF",
  "key29": "3KrdK6gJw6ZuzSjRfiWZL32zM8Sp6UU1ZdLtjaTZwX3HibL7iWYWCRc5cnLSbS5hBWrfgwMcjWoAWXcgxHUeZBGG",
  "key30": "bG7DKvoynejFK4wZcf3dSrnbQ79eUDwLnqLw2wM7n2ef9YQ9nss6wbifnaDys1bWxnYX6sx11k2SJrZZte9BCf5",
  "key31": "5x2vKEThYxek3JV91WApaJDWBmWqALLoPE6cHYmTcNw5YZsqLG1boyayrHkffC4Y7BqUudzCZPHQ2hQmjJhwH6LW",
  "key32": "EBtuwHpfS4hddnanMZXfh1bT8tz9qJMQD66tEfKTW7VP27zpzusuuBDygUg6WBYbHtmfc4KDgwNXNPdBLyemvMu",
  "key33": "4JTnHJDBqqmWPSNQ6uebRMj9qh6VZKqCGsDnY8TexBeHGJxD5HNXMP6x3zo8dw4c9eorHzVXfwsoecUKW3BQb8Z2",
  "key34": "3y1deXigA8omxdaCm18hURpMu79iT2ZohJ3q2hwBrm7rn2Hnh7uenLp2vTQKL5YJqdqhyeU5VhgubfDq6XV3R3FT",
  "key35": "5TQrFoPHeNYKekEcgmW3VfUrEZYEjKckg15mt3DUMuy2p2jBW2zTE6tC7EuUnT8Rwu7U36nxUWAZragqMYiTqf1o"
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
