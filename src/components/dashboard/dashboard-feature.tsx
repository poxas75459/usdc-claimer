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
    "oj5W1veeKEmxLsw8N4c82vdMsaHjsm3DDbfqYTyhJtKYAbTHQkrevZFM4n2gT9fsqZb1Cy429xDn2SKNyvNefwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v2fksbA6xd54tXX4LpsyaZUyp2cc5K2TNF6eWtQpAHR7S7LrpHubLNCEj1rco7uAQLbndm97db2oJmR6WwYMtJj",
  "key1": "4gE55xQbhbFL3bMjZT45yLPdPZeqr9NoYhi16iousLitF48UX8ry12nXWZiJJEU99rahYQ29zbxNMDsHSmAUj5dU",
  "key2": "3vDG4WZYwVvaJ5nT4f8K5GFPSy71DTPwzqs7C6b1yY2eHVcngcKh6qLGiqPATrUxMewYSSq31SMQ9XHHQkBZ1zqn",
  "key3": "4b4qLinqnEqBFBQdBAe41ZP3v8kh8kfj1DqticFtiKdA52jkbceNSRNzeQr2v7i6x5GshFBFE9vW67yLiPhFTyPF",
  "key4": "4T1rHFq2By3s429Zufsp53T6HVNgKe371a1onRbZv1HukcqwEm8SegR3zUiLabsPx2SEyWJ9LWQf7SaeBGRAaWpY",
  "key5": "5v2m5pgrk2JJsnnL1UPyhqub6wUmeP1rPSvMLNTM3u5cpaUapeAzEKs4CxgYDsm77c3958oii8dgUW73BWNgDdEo",
  "key6": "5xFtL38MpKBNY8pMNCYhUpNprL8yDw7MUmBBqPLmpzwFnc5wCS8HVMco58gmZjjSkVG7h6n5GCEG7UnCXYbC8d8P",
  "key7": "49cQ5zsXtcFKbkpECzHVnDZFLY3VyMWGHA29ecEwu54sHkzDDwdaw5ZAK1uRQH9pgf6bQ5CEzVrAFB266eamnbUT",
  "key8": "3kmxbRyJxTpmE3twsdzUTV4pG6wJzLHgHgsgamxosogx8WaaFZV1ckuUKdktYk8KVPyfL2JPJN5hzyPo4tZ1qZCw",
  "key9": "NVu9CErbvTavtfLaaqGkf9vvqtNvo56aV1six2LLKFH1uX9MoXeSex6JPPDHkDZM9wKRB3wM9FhZJiECLahS39N",
  "key10": "3cDH4HVT35zTr5peVF5KZ4h5rYn3aPRJPVRpczZmtfi9r6yraeYdfqwmkKw6PdnbkQFwsWAzz9AdMvhUi3jP2ym8",
  "key11": "2rvgWtx9kUj76M2R6NQ3p6gKGoHKw9eNyZdusnJUEvCCDkg9Zw9YRKjbhSJnszBucUGth2UNADmmDV8W6VrxWT5T",
  "key12": "3RTSbkXHnD6eGMaPsAXWSKYLNdyg2YY9e3ZogBEnrwMk9aAKc5vaXSBQ382p7A87QMTZsZ8greMnZJMkkn4kwzXA",
  "key13": "5htKEu5TNccUXaPDbib1oNsTVguGhw9kqSJYJoCui7PLQSBEKS3qiuykxg2AowiGHFsWLa5rDSJD4Fu2a5xNgEJE",
  "key14": "4oGa7bX9PDCZrrKMJUgLqxr8LYXKeZcJx4jpQKecJtWoEwSntcWiDJSQw4UrwgJUiWDWLTHzG6W4kEy6JNahjpda",
  "key15": "ALbWAZmRVVZKSXs2SibvN7n2XptEanbfTaWZsksBSHBA3Bmcbukkuz8dBNjrRaXBDFLVHKmP6KR9aehRvwqkarb",
  "key16": "31GEkivuJ82hN68w1kBykzqfUZEJ4PfJaeqGMzZD2UAtXvmoWGeikJStEAXNzprR3ovMXBh5jvx7rkAXvBhggaJ9",
  "key17": "32mEA1Sm1YxKELmLubfvvt9ZW5r6aXrPRXesR6DxMkg9h9cuTC6z6GczB589YDDhpfcWRbkpr53TWqGco25zDT1w",
  "key18": "4htSwaaNucxHPFFrWS5kKY56mwWRVLJHHET92koyEKRH6cWfJUkWVnLzLwY55kskukxPQFjBGxXqQbrcN7o9cGzX",
  "key19": "ej2uCe7q3MRAS9GunBBPjUpuBibs43iDJt3XdhFvLm3AcmGRUp1MnAgEfCVcjMtJKAB61pH882Q1cHYx5NEtqwE",
  "key20": "4i6YggEB8wx7pkpkxLWTMD7aB1KPQ6PYx37JEXRZMdxHxQzknWuoYyprujKdSq8Ayb6UKWgCid4V888WFKSbN5Fw",
  "key21": "65HV7qPnM4cn18K9gbwKCJutnuyMRPzcz7Gy3GYj1ou79UkLy8PRpNXXjoBcp3G9MF5hAJuBhAtHa71YrizDj9Mz",
  "key22": "67EPDBo8yrA2MWyYJb1SqDWtKFHDm2DpSS6ttjLePWB3AR4SXdndVvfmJio6NMY1yTzPxGtecBTkkaixG8t5NacX",
  "key23": "ztHPTqjwQpy1siVAwZpV7azmJoUDsKEM4CZa3n6J2xrd6xsVDbgmqe5yPkYvQ1tWY3qG7kKrPhuqYFF8hmzN4RY",
  "key24": "2nDdYp6pgqhALT7HSGMRXJ3HDYopMs6Nop2nDY9Sj5S6ZdVQvtEisiiD7GaNBzk1CjdXx5y99EQTy8fkGhNGyzfN",
  "key25": "3cGF5tH7UaajvjDVAvFX4FS3ptpWESfbtdzXiFPE92LUNr83zz7QkQn3ZQ4EZsYpAVL5vvaEBNHK2TcUhcJB3DZN",
  "key26": "3MziT3kSRZHJj96yN1fkQMi6hr9URy6B5B4iJhHvDicfDVc9wpxhTbTDKvVRFxvTiRrt11auCUEoefBEr8342dC3",
  "key27": "5p1rzADo1V7LQ2xmZHWiBdyoahFTU1RktUysjZRrD7aDuZF2DsN6JHXwYZKHZqmrgDckhUD9b7CeekFmWNgjfoSN",
  "key28": "4BKLBbsbMANpY1MgXm54Ga4EUn4jLmuy4xt4MoYDAce9u9vjGwyqe1PMuciHeQ9j2FXQ71K11TtSw3dZ2SDHgyAR",
  "key29": "3G9NWb86eeQtNidWGVny4PxRNXqWZYzvZ9UyHSiLoY4yCezfq7hJhEsovyZbQmM6SHDhRiAJRaxF7BYoBFmrii23",
  "key30": "5u4ymuP9sjdzGCzzSGqw8mREzow7JutVUALUCgA9oeWdygDwDi5mDLG4CcVGTkrjvm23w6BBiqknWpXFyjsdP3SY",
  "key31": "62BMcVzvjBFEAMXgs9wHnYcH6Jhd5GajdVDaYr4Jy7ZD1mU5wQutnM7JAx8UzdwSoLvD6JuDzdckbrM4iaykMNaU",
  "key32": "4vZoKga4fgcQ65aexcnTUMGswnXyVFaXEXFgyk2mswgbydfUYx8F6M5nLXYS3rLsGPbVGHKjpnfPnJtrU6A56HJZ",
  "key33": "28bnaZuMLuFA5ktGeHz6N3nJwai9yKaazkW3GPKSapVVS8vcWAqqcA43gd8zcia4VghhtEzuLmtTd5b6t5YxRALE",
  "key34": "2A4jZJCYqVtm2DwQoSZo3if4JoHTUc7hUHTVakn9XPX4sJwJvdRsW363F4ZEF26jrVTeHGEankEsgi7YGyEfaq4G",
  "key35": "5KpKH9PGkUwTqU4h3asRVefPQLdsRymYKE5MjxT52i1mHhJAd4jfLQPHgXfpVPLwCL4TgZJ5LQCimoqJDSpyL4du",
  "key36": "3iLfcbiaazu7xK1YWsG4tnnd7GmFvPaf5ve9JmTsoYahZv8WqVHixUMHPTuoq9AsWgXCxgUto5HjgqSSyzRdninh",
  "key37": "Bn8ejLFWemUfoeZurHaxnm1FVo3Hvtr7rAnhUcqGJAcmZrFJAw5quHjU7M627KxTyLiTW7B6vkFtJcK8xynWBvY",
  "key38": "WBvSkjRr4F4JZynWSZXS1CQ5XA7L6X5JdGigJJaADM96qmd4Un2Lu97raqsCcXiWLzw8rQUsYejGVvixVqvcABX"
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
