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
    "3xLHe4yt4J8ZgTUhEzbGv2twhMjeGJmm97JE4ncf337musCVFad5wGTa17ihybLjVzoWCXY4Gk5J91MN7RmR7p5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Prtar4QWPr4pep9km1h1uqJ134Ln8Z9pkdy9oJyoBKxJ2YRH63V41Ri1EGGFvYxCvw8kVQ4QqcKYGyJZLR6pJLL",
  "key1": "3tn9rkjiafnojbPS1zt2oCggK3QS3o3znFbTLjUqg27Ajd9GAP3rkTG3zbdfGy6be8eAQhL5YZJ9vHfjv7GYJFGQ",
  "key2": "2KUW2JDkQyFF6XrUtdkQXdDgFw37GPCSst4QWWHW9rksYTtxP5GYNxfurQrjfEQmUfak16Z6fPtgAa2i7DZBdiQp",
  "key3": "4JbWvEdo1g2uB7Aw7uBbc2Y9at2GuCzHXrF6gw8di93RC421JsC8rvFiZivdvvsLMTqfXT6jHm2e3hKdj9ooJ4Mq",
  "key4": "52fNeejFyELuFeg4AuXSd9A8aEGHQY917Pof2QeddkmjKfueCPVxGbTeDgjUBM71jKEAnKx4vYegDxnvEjD6YdK7",
  "key5": "57n9A3tEjnJRYfxqvS1fgZ5uHyqDzrdo1q8xjuRpMJV7N19TqnWkgmGtJoE7ZsecBpNYf3vvVm3nyYzR1fEwbWs5",
  "key6": "kFZ6uGNeHoRSKwbU1XmASSkvQepv4uWPB6eqS9j8HDvt7fqm8cdUgX41zeNcDDxvh9xLtHrXwmKMpfKgVKTq8px",
  "key7": "62SMcXXDowobszoXSzffjoPmkBuc9sg41nCsagYpovqM8K2vA7bXVAyxMZzkBJpyKd3XqRuv98WSySjsMbHSZVFY",
  "key8": "3Uc6wfYCmD7xqfgJ7m18P3U2W3nnu1a1vhugzgayy7utfEadr4AbTB2pYj5TU883BNGs1CXByHmcMVUTVi3qVWb4",
  "key9": "yJnUQhe3UJ6Ki6gY2zShCunudgoi1vsbrGymQG6myaqP8oWH2PLqSS3H1fwdqDbiggtHsUkDjBQH4cVYyv5h43S",
  "key10": "43KtUbmmkfTD988VTm7LNcYxxvN65vpbDbSm1mKWtAmuzrZJu5TWfxoQj9qsCbYD1xaXUmXW5v1wizgx4PHc2udo",
  "key11": "3LgBGetujnDpUwHpsS4vD9wA6f5hHjcbzXF71mJfcTCTTMvBsKS7rKLrQ5Wc5L16fBbGFQUCE6jCrEdxycDLL5iy",
  "key12": "2oUNUvES1mjjGLhT72vTGWbHrSiH87jjhDVRFjsjCX5zSH9x8qhMuRnC1Jdj3PWMHCxCN8xexUT3JrNVxYrPLF2Z",
  "key13": "44Z79MwehUcHVnQDRRJbHisaeFrvaWfCjx6sXo5GKjmJGfppsKZeLganPB4PcFY9UnMg3JW5eHHo5J8yLkU1wDt8",
  "key14": "61U55VpyzKGeYQtvUfqqMvD64kr4aDHz8MYh9ig24tkmTb4dqTfDrbnFnwq1EAX5kpSJL6xjXqhEN12TAzdBMAbX",
  "key15": "33QYUMuuomREi958NjhkUCmgcqSoXXjVGkZGCgYmodmAd9FqG6mypSn7iDe9SBtGiFr2SB8DyrJufcZGHNi8Hjni",
  "key16": "4ciDxxmYFXUa8XtyZFQ3y7nZoJCSG7P3yVvki4t5jaLAKViowA2xQ9T3W2RZYfWfggmkpkeTQzb1gBXBqe75mDtD",
  "key17": "2opEtngvxYsrCTHHGYBXa9MTebA2WtuX9rXupQRnDNQoTAVXxBAjFRz5MUxdqkX1RvN6EsXsQR8AtPwVWzM8zE3s",
  "key18": "5h2HUAR11HyGwrKC8PZYLXCMNdAyV4H1yfnyUHh52iUGAyedEaVas2hdVXFgTiNAFU9ps6HcjyzbNy2AGZR3hmHf",
  "key19": "4mEJDKhZzzt3jmbSoTXRGiH3aSvzkbhHW5Fa4NLophFL4Z7jsSS4EMdXrbM4tC7akJVK7YtcF4VJ1JctpwwMj4zg",
  "key20": "5P81R39XLFvSwLWZrFjm2WS4q57YzETaosE2qLqfNB3e34YeiPQQxABCJwiPga5sZCfnuBte4R1jwuUsdJoisCcK",
  "key21": "4LkWxRFmz5opsPjuf1Q16gfTR9MASqTVhfduEwxHZJW81RhCr7LP7GSyxuYyoemVygvtD6sQSjVCjqqoQoQWk94g",
  "key22": "21UB3a44M4SADSWRfdHgnMu9CXTYn3FTebJC4qziPh88XHphSWg1466RqMt2NH3dteJVxxZuvhsHwiXJ3w5wYpEb",
  "key23": "3PDjRiSX57JyxUajCjoMDqguUCcCHwFHbJACYVjprGEkg148LRFovpMKjgB1B1Q7jvqdXzdrE1yVy1pHtsd9obku",
  "key24": "m8RUT5ZbKRJBKbxJKEbFr2Fsz6XojVyVeoadB4xEZ1SF2xp2CPWvRz4NpGnrTtXyFoPrSzxpjXjxvBPySf4jVrW",
  "key25": "3mgigfrQxomr4xhvygS6hjqAXPGCG8BEqstHQwYvtFxa6su6yXbCqeisL49djLSVETeRKtaukKCwiJuLCyJJBjCH",
  "key26": "2LqVLHEAYF2p99Qi5ogcee5w5TZQ2gWPBpTjjxjM8BkzGXV82oeEvH9BnSd2yDLBuAdPqMKgS1r7pvRCB1o1gQDb",
  "key27": "22YoBKPDCfA9VyBvgQ3djUwZxLXuvg2RwpSsnVDKSop7n5qgbMsjgMjg1Lauu8HZV7DG56hYegHCK1tdsAGwJxQg",
  "key28": "fhfGoXSMM9p6GrGkkV56Pw8sjS1WnfF7KMiBoEUMRSMcdWHXoqo3g4rJudLxGym2zVf67uJk86hsszMUkpggM3k",
  "key29": "3vN1SxkFcS32o6SuJKWmDj4sXLaiMbYSgTKSPM9pvrFnGLE5ZyPBHMsgZdSKMdcgdDGRtyiDmqkP6atMN6abBb7y",
  "key30": "6iqfW2ZuV2ZymsxBfjMe65eUzehndF5vAHav7DqKAhF2LZXue54VBjANwMpcvVncLCriafJ8e1jgEyGZDLunaU9",
  "key31": "3JSXbRSBe8aoW6vsEULj9hnjnyb2tVGphXCN4QHfUjmxp8SQQUVfRErV7AHjyi5GH6GuZtts3jcRcE6XWJVZ3iM9",
  "key32": "bzk5kptAeVAH7vbojTEiXhg5Zxo4HbTwtypvyNZictYqLa6tBAke5szy7Wf2q7sESZUfSX3j5Yts52bN13dkuJi",
  "key33": "46jWj1TFtfnQHQPzJmFc12aPeAHQrbb5YxReiHQXCvoSeAJ1scwLHPtpRGcWcjmp1vck9zzVV4vdPdFULJpk7pkN",
  "key34": "5948mBdqGL7AwtjAaMZkZxFMSVZFgdNnaAMsFrFTfbEayLSmWDxx8feEx9VEns3VYsQP97tnrf7qX2tcSa29xfkF",
  "key35": "29kdgJZc7ZYUZxcZDUTWHH98i3T1o9frXehMH83HAP4GdzNa5wYKbhJVVBugDCGAuEKKKSJCFpBuK7Vj9u5ZTMTp",
  "key36": "ic8CThqC3CbZexhFnWfUXiFSWj5yPy19WBeBGevnMVKNeBhaPcwos2TwqX8coyPMAimVUJY3nK4n7H12RLsDhsp",
  "key37": "4jYqciDm5k5sEeG6ZVd2Cjr3aquxnAKkYPEbSQKNFfi3L8zuNAycSvxSRM1v1XvRGL9jgtSSYemzsY7ayFZT1tM8",
  "key38": "4JBb87c1EZQ9pWxb3DkvraCqpa5RkUBpHVJXtFwty6MT3odnQDzu2SWmHi8isib7Dokhki9fyYcP4UPgqQKiJGje",
  "key39": "91q2D6ETvXcjRCvFafsMhpNrYJVVsEBgsfV4kyzQaayXCLchG6t8rM21hRZf5TS6Hbrxbu1k8fDPA6LQPQkkJPs",
  "key40": "4Lz67kPYKAFgCp13iLzosXdQ2CbrWKJrcN7TUJFt8BJY4JYFi8sLCSQXJ8n1b7s2kfd5dKh8LoxHGr2Lv43YAtrh"
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
