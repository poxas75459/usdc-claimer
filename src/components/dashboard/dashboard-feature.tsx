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
    "5HZ84ufbhKT1tMHubXL5g49odXzefLN5sfgMA8Fky7JQUrfyDvwZM6Q1tDgtaQYfZ657iwX2esaCJYXHPWkqkc1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "idRvFEaCMK2gEC2FrFSDnoU5yazsQrnMmeio39cHuZtEh1SMTtG6mPGcScqCb5dfmPhA249VdoSxeu8DwhSuqPx",
  "key1": "3BwugUfxWjYcp3LE4pqzYg3kCajBsWtoCrHgDdGJa749mbL6yGpkQ6djuZy2rvq1soFZYcYL7oE7SzcDTfRFWW8S",
  "key2": "4yjuid9wBCm6JkqUfcZ4VpQ5UoBnCyJtqX73ea3g4bCz6qt5qcgbcCxND1qcvet5TsUYH9Qw7Fcx97MiogXggxPh",
  "key3": "3f37MHyZBQDtq3NVtZv7VhNpYku68Y3LdBGDdURfMoZap4Wvoq7idC6SHcQ4xZ3bbP5KxW77Ze4N3Ce9R3j3JqFN",
  "key4": "TrwrytDyLqjCe9BouR3fQC9FCxwBYMNEKxLB7pe4Mt6QtFX2GNMisnYkRtPEjrUarznZK6SfZuVfswVhhTJGkuh",
  "key5": "4pyF3mSs6Kyb4RBq4gZcPmFkbNzLLVBTGjuKcKTKpqYXfhPWnLCWXarqQcP9w2RbkxMKBAPad6BcmmA1xThHzjr7",
  "key6": "2Z7WwooPaU5AfNujwz22bUoyavKQpxcpvR8enkV8n52zfERU2atWJEkyeawhgTdA4H3QLacDS4rxbFqpkkty8nmA",
  "key7": "FZ2TiEqVrBygkqvZQYwcvC2xR8BDjYPX5j5Su7bcp5Avgd79Z41Ezrnd3WryXHbKsvk96ezUYdFbbVDCn21ebph",
  "key8": "4Gf7nWSDtTimSVk163tpSGxh2kTpNqPwTZDJWmCgkLrVsCm7fJb7QZqpeE1ANFJWWYj8DL9QSHFNguvTDQNRWqgh",
  "key9": "4EZJZbQsx88XB9WkqSGG7JnoGr3Am8qAZex1kcjmx6ByESvDYHsg7A6gkQPVE1K1pPQkhrLMUgm7ovfmu441Um9k",
  "key10": "2Wfe9DuJN3prgUBpCzHrwcyuVmTiqEc5JUyU9MtcRt575Z2dJKzkXaqkgdEByQNq1ouTiaycL5N3zJPfAMULDMbz",
  "key11": "2ejq1pubG6ezjMbd7zRbKZEUoFJpsP2UWpjCcH4So8fmSiUYY3Gd3sXbjbmQAX6JCr9NU5aeVS65Gxn4KkxkxeqY",
  "key12": "54y9V4oa29YxEvQxKnL8mygQ6oBtVVDWeMd3KgUrmySXk8G27QQydYz3hAwpVuM359r5ba13WWaf1Ho1cZi2EWqf",
  "key13": "2ShwjbtEbBd3peVMD3dChtwmZgSnRjKoAt4ybwUoqfVrk5FsmrRVY6EixoQyQH6TLC2VVRS4GvVVKKZVGguAo4Nb",
  "key14": "2grfympTNVZNeKsnE6EoLkvS3Vg8RQtvtHEAS84xb8QriSnhKKEqgCV4whpLqq9NLgujN3TTJa7f2e9hawT2iRhk",
  "key15": "5v6T3QgbqYhaCxsgca5pgExV7aFUmzPxuxXwN4Ka3pV7CAsNnAgxRUN1aYjbSVAqX8nAUdF2oC2UHCupyGTfDQe3",
  "key16": "52sSdxWHPekceoKYZp1jVsi7D5Mzj6qjjYitLb4HoyTPL3XcYnDDQazrVaZJB7y9TcyvQoEgLd7cF1YKBWq3poQq",
  "key17": "mx8hLaxQ5ip1wnoTtXSGJjFdBwQUCC8qeDDTdLZaXygMAtZBibcWWXwHyMikFmLEZaerBJT4M7PGbk7QqQWZepU",
  "key18": "4DEMHJMKCRgiBUXHfeYPqJW4Q8RixT6G6EHQpkerCkh6vptAi9gsXzTLjE6R6iKRCVkAVDhCzaeh6Pn8mC6VUQiw",
  "key19": "CzCeNashAjrYW8bx7MWgendY5GViNgQSer2ZxHsTADAWXLtKgdSHvF2idzLCotxozLVa8ZC85Z66QFtwRZvy5w5",
  "key20": "5HT3brtSe6rx9mxfd2gnEw2sNiKK5Dut6uAxH2gasimpnrq6XtNRtMwRafY73JEyaamXDLEoVARNnFERL7er5zMQ",
  "key21": "2QTycZzwEFw7sCBATW7G9KHVWTw855nVEHrzEmak7b9ectCEv3y6L72zg5WSExSHkrtECZ6SHhbLLgNu2Kxk53m7",
  "key22": "MBaBgSfJQ65RpLm8nYwkzCDZ53dTm8fA93qexZuEKnfrqYRTPhoJ686UU3RcePnRX7HHu9HthWDXjFpoi3dF5uf",
  "key23": "67789ja9NDYV1w1sU4LGM84otu7xB8a1gCknqwbNdZ4fi2HeQKxcYpFz3uncPfuztyPnyPmyPLiZcXVQUKuLdr1o",
  "key24": "5oCizi9msWwrrQxFaBJPEEwxyehyDqvZ3iN61hvgk5g6EJnXLenmdpZ5YtJNs8v3FrhZUCN1jp1paetCefK3cbDU",
  "key25": "5unaPg3HWncXXcPUUSv453UVGsNvqXfzVJKPqkvShHhtCr2QF7vGSvXm1ZqiHDfNwxMeooSQhGryCGMQJ1CqQtW6",
  "key26": "2KJ8gLc6YeVC3mSX2fHMqdUTuB1xZRRgA5uSMVMK1ENs5HeDrUm2HTYtEoZFCY6Arr2avFkuoyS3XqVBJAuFRXve",
  "key27": "3rBgNcRcbbsaUveSpWAzVGkwJCuCeh4PHA3ZSEhBxME762xtorURDMQPffjZgVboYGt4DNocLyZqRGAxaUBUdU4P",
  "key28": "3YmBsWpWaTorYMUazBMHbf51nx19YazozBVUx9cDRCKjo7oamdz8N4qxZSYcP17PGaaHW7orMGANtxm58y3QAsVV",
  "key29": "5W9xNR3exxiRSu3fENdNnS5S37hoGAzdSDHB9AEHX7NNamv9pRQsDaSBCtTUd6cidkbZRWoiFMp93YvBH4F6V1Pg",
  "key30": "5RkjNdCELBvtxnmHuVRojrxuYZ6fzWTy2UYJSPCiMhxognEU5fqG5TpmNwdC1gYUyXrUneJjE4hmDkK1ktntBpuS"
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
