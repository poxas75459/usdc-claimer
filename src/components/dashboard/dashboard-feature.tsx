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
    "3F4368TiEjVhJ7g5eY7v2DqXAqympySqQQgamxngBn8118hzezAopADvTzcr25A5yuzx6qhVE1hDnYd3VEp49Y8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58zY3zDHkSoUJ7qKx5AnqFpucuTn9e6ueRoct54SmoniTbScKwLcZNVEbLuYJ4HLth4bZxF93gCqNy4kuYvXA6GD",
  "key1": "3bYwgTKyVkLg5UmwhyTN9arcTXzg8dB77q15zk7SDeKWe5LUYnk86E9BK54zKSWJFGWyBxa82KM7xAKePPCGmBYf",
  "key2": "3gDKRGn3Xk3gzPN1Twi8nU2m29Lsu3qKNrzsasmB8fFBZHvPbZjsEYUsLmEhBSYr43oxmLX88ZVy63fnZxHQKuWV",
  "key3": "4X6wRdqDfG1HN9HtRAY7zki2UJtart59PpvW75N8oaFZesEK1wByByi74wJ4fhhZj4yj1A71HY82qWiTQcvF3TTP",
  "key4": "3yNhk5g2CTNkGrvsbVQbUhK4m2SYwVNJG13XWeM896NMGm9mVRNNFVuPKnGTVa6sqWhZ3hCvB3avoRk1b916VZF7",
  "key5": "5hcXbdadjLZDeyhmdeR6awFwL4mYsHX9WJuumKkrxJG6GsrDD4uhc6PWo8WaeHhEezaVuGWje85dtqDsJdVn4xe5",
  "key6": "5eHMmScw8Ci5PRE3BjgdvniocLi8A6iZC2LJ8iUjysVfLeePc4JapAtaWK8515VPkcti3NHoLALajvYJuYakuroh",
  "key7": "4LLUYUqStmgXYGbFvH8wypfAZWWrMXrHtiQADGgjKFDaLczLc694kjj9N2eZw7y17yPhCCxEipMdSwcPmekz31u6",
  "key8": "xcAkQ5pdB4juckmhmeRkknaHqboYw6LujSHAyqitmTAEHarQ5Wfm9Zyy8gPPvV95t1TtaERgAj59Sru4zGSHVbZ",
  "key9": "kzohpDViZBE1dtbY4Mh7nA5AkgcNCv4SqM6ssMnwamN8yY5iBcP7HJ6fdhctKPeLNhVKfdbYovjS4HtoqUntnw1",
  "key10": "2A9dnH84ia8gNtLTZEgvAsZHu6m9wqKJE8Xj68U9qaEJBaR6uhDsjoeCXkgw1ePZ4MkTiNuWve1kbRrMAW99pHSb",
  "key11": "35xrQbxki2bwkTmGCXmkRisBKSnF9ns8oed4LvMZ5dryGcPzMQoHHnAuaWkQjPrWGGnJ7LDYiKEyfzcKohYBbFPT",
  "key12": "5iTDxNm3H6sMp6CndNxvbHFfrDt2AegTLtZTeH7v6DMPM1XnryV9FiXbQPujP1nenSn7DZ8z3KPSTzUJZ1JpPaYk",
  "key13": "28uF88MJahFkRbzCCFdgcq5Bn5SkhHzQWfSSths1N99WKzokoKRDC1VqoGDHQfxPHZk7tk8agkvEazMZvfV1XJfi",
  "key14": "4DdD9pvjbgZny61y3bBQSLwUB8YfjjmWHizYfbJXex5noBZFueEQPbYVX51DNLPeYCVyGfrMA3wtgsDi7kSyY2AE",
  "key15": "4euv7S5riDPr152fNw6LRyHqqd6h8LnRb3tZp847hRSEhj9JhebeYBbR9BZ5vfXtk2PVLj68yQn1NFZUxpVzgdPV",
  "key16": "yR5njjJXFRvpLLXZBqcY6c1QGvGMKLWD2jKREBL8WLJUPSFPrPbYinNvfJCp4DAySZzn6Q4FnoVUUHGMPFBCZE5",
  "key17": "4qiUckrHce7Erc1Pt9imqEfrvmCFLL4AGA38H9vAV9PgWE9eVpGifSYqJmaWK3yHQzf6yohv95AYxA1ELiekupjw",
  "key18": "5McoFCv7oZKKf4EC4oAS7eU1bSSrCNMv8p4camyMzFxmZ3gU3m12XYwNtQVFvSNByqK7V97XfdNbVZbaCapeJsW5",
  "key19": "3ShwHvSeAdR9hFD2RvYDPKV4iitGcYWeymg12LJYpQRrAw1ZvZojYJH6oY5HWSCHuVDzBR7BKT3Wevox4XTx9tTy",
  "key20": "2dRPJZrdLjdt9D9iuLBUcnpVgg33pVmdihVw2ZDnZLfCJxSqEuanWHjK6hi8QfARTT4bB2biLgboUJaW4RQX9sHr",
  "key21": "3M523QG4Pf6Akvqth4XCEHuoYhZXByA8XC9piRShtxTduA5YcmdUyU96iEQkSR9ksATQsZMcwQtK7QuJStLZVJfQ",
  "key22": "5eAffwUrAvUrC71upmJ4phn18gUnH8gtARLUZXaLjpSPFpRzGzwKeJ1p5SSRDUznX7N9hoQQpWogjrLQKpKQaJzB",
  "key23": "5HkYury44gbyvu41Wj478vyWBWwwCNYA2H1onaBuP8tMxSuqSC8MTANJmnRtCg4GBkpPjjgG5Q44fQkm8mi4hypp",
  "key24": "4ciL9WMMmTeQXFSyj4WeUcW2rNxURDoV1rCft5MEYDVMNaNp2oRmaxYPvmH6fQt2QpfHQYU1Dj1CvVfkcHdgc66s",
  "key25": "2rbQSFt95rBRF6LfrwcPCSMe6PgJbzZVpgr45g67i4r6U9hu9NEftQ1KiFCTApbGPorkUfpVfsNHkFTkcPFL2oSW",
  "key26": "4sGx8urtAG5i7j95tmb9a1CPqfe5recKT8xufdq62j756fVzqgwHBy1HTxpK1AJi5RaSmf3fruhi7YkxGGx3aHDJ",
  "key27": "r2uvr7v8EzbM9wjBtDR9XTTh7roqA4umKx8GyZ2H4Gdb763paGaZjsBtYNpP92SCR1G6hbDTR5efyoiz3PjRUGE",
  "key28": "4LMBsCJi6B1Ao2HjXnFeWW8Qvv96Hnkwas5Vxaa4SFLo9oPWfQQR8KKYUwLWQb2uafaexDKjdHxtZX5UsEnGsADW",
  "key29": "23TXba2TkXQcvHdaw4bNWbVpF6GF3jHYg3RfWvJymuXdMjEmdjudKvNWCw5N3vFqg9yp7iJXBxJVqWYM9MwQGuhg",
  "key30": "2rQ9tB6bXCSV6pAMeyMqHyvbrJDTMkpXfPqDFXwDstD9itVCiLZAr5LmUqxvo9z3sgP6TXy2h8cKYvWw4wt5siTq",
  "key31": "23nRdrxwzFrm1JPQTTCz71J3QPuJqMXygKQZ3SPJxyvg1PFMDs6HjuK1vipmQx7VT7emc5RKiSETkqARXjGwqUkq",
  "key32": "XoW44s6YWV2opryvapNDMgQ8Xq3cRVhEahprePFTUBetCDrZbNDiiecwjCnXtQ3keskWXZJpJF6rza8Jdn11Bwa",
  "key33": "SNysYL5KgiYQR73Tf3G6jGrWmAJayFtXVm9umHdjqaNhUbJZKTGGbANszMJCDSXX48J8kKq9JA96vupdmozmnZf",
  "key34": "3BN25SkZQKx7docxNDQ71ayp1gikUhhbkT8LdojnDpST5yH2SBYoKTasGrZQww3geG24QvTjC6cF6s8mpQEkJFoj",
  "key35": "48VnaF4Mg2Lud79Qj6gDgmt2PXrbtcUAFnokECzeSrxf2qVzXvKTdhkFrY6jRRGzrCaYiNri68bGtgt6uZ7suvNL",
  "key36": "4pM5s5a63bDjAg2feieJMAuoq2x6EJBdNAYd2zSWxheitepP1j3Gxo2EqJDzojeuYg7ByuBQbrg1WNPoAeeKWXAi",
  "key37": "R4Bw63697ighygKfhPHQtgMBojsVbr9EFF4Lfr4roypFyhMwAiZxGXFewJhmsBzNraW124Y28xun19xa2bJDCeV",
  "key38": "4m8w9bgQvEF94Kf5V4vrHZkzUtWvqcRnNXbDK2ZRNcLuvCwiHjEiWSr6Q7JfFcbNA5mXU29Z6mSp1m1NmmWkHX1P",
  "key39": "4fdGzNvj2qqUykyNv9nGrsWY9LrbFrsKz5G1KGMgHsATH3PWVTMVUrsB7yDsc3KahHST1YWf2dPzSjZxUPhLQ58E",
  "key40": "4idcbKfS56rU5JHYbC1jzztNur8GBGQVt3rjTp5igYrVuQKvEQPChbxEfTzEVGBPr6DwAofKPB4uX8uKLdgNPK6m",
  "key41": "CfL7ttzr29MNyRSMf6m13mhofPsGr76kutejNyXxonsihSv4cLXrifGUqxrbb4fLtS2d8ijqHeUC5NarFKFbT9L",
  "key42": "3StnAHFmZdFKowEhkQ8bQF1ZJyJsbLT299qev3WNggP724z7tuiTb3qDhqdKfSWhV8CUGqPH5e4EEaMcsmpyeK6t",
  "key43": "4e4KUBndYgUHbPZcuwzpgQFJwAqfQR87a7v3Qmp1Z2QBmtghLcBZQqBLnW5kQrmBGjeZH8sCtocxPgGt5bF3dyry",
  "key44": "27469pdvq88xkCfJGAu6mECkhpEt2BM9XeYQHZ6oQFy58uP5F5gxP17KU4vFfebq9bTW6KNcrQaJAGumbSfJfmAC",
  "key45": "299tUiU9CMGuvDe9eesRKrjD4NVSqUktJos96TBBTWxBPJQeysdjntJb66UEpxA92Tzepc3kw5nqi6qmNnJX8QzE",
  "key46": "5jUCzvp26q55z926Nsqhfni7SpgLyzbJTcugiCMiVQb4HvFc6s6Q2XtAxAKmfwtU1iT8Nzd82Y9pyXoZjjhci3A",
  "key47": "3AzLYZiscp3HUV7dyuVec8L9b3F2iXfX9Zn5R37D3dLe8UJjr4jP1AyMH89oGwDipbMWVXkH3ci8sKgtSmzxrsKp",
  "key48": "3zcDAGk1sPZahLVZ6tVugnnrMs1fjTDPAx1dudBNTZGsycuLLvkPHxpJqdv81EWFKHnxUhztJuDzmC1wvQZu9Z3z"
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
