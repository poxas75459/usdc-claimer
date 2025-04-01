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
    "4rwMQW5HMHn73UxAUpSiMi45Y5AJKd79AaEvYEkeyVbkT5WRHXoHnAzZLrN3TvvosFW1HdDdrFTm5k2SDiTwZ3EX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CbfFKvtYt1xC9EeewhJS2kT1cdJWpk9LhXJzFxG39RsmSMf9xg5y5TqrQKWBbap95dkntqXpxdy4v1qGKEDrbWF",
  "key1": "5hVWogxAUxuEqTBrqeYh9CSNZd8z23DRBAiWnwiGd2rCRa6WMtj3s9FjDbhEvD2r3UNYxTh2nbDLdfctgrihPT4p",
  "key2": "5yeRUvCpxp9eFzsyANGrr4Yaox5RLtkVzcSHx4FmHsLMS8TVCxRqGqVv69SvHQQh6vkisxP9giSEYjCiid1xJER",
  "key3": "2YievZuA6R2mDksSBFvbnMnTTxdEcLSbyQm9R2Lq4A9fYGxuwfqcHKx7sQbGihchYWUZxNFQfiqXone95uxDgumC",
  "key4": "5iL1FuM5dFWDxM6kkcvWwLZw9pCeoShUnqndwvNjFAmSyk5AEmwVLSxKwh9hJ5oWj63Zh6RyaABPM6dQdosD8SPA",
  "key5": "5BKbRtfyoLV74c5AuRuV3nffcFVPX9Y4muPR2t1xx3UeGbto1BEyH7xrn71rJpyXwscbwC1wyVHktPaX6djb6qFr",
  "key6": "2aNeYRLDdBCiPzD1SmMJ1acisrg1bxifUmWRNe9CwdVJZw2nv98dGkNgRAmnC9MnHWZ8GVKQTPAju6zL7DruBXsm",
  "key7": "AzVEya26gzwcodYCrD6qPnFH3HYc6xWTtW3y4NDPBSn23hAfWSHqgAShwNj5E7VNKZmjkTq2rQxxpS3fnaNx6qe",
  "key8": "3F3YSFy4diqcVqfPAtxtS9zfAKic4es3iF38TMeEmhmNdJ9KuTabRRwpEjtQ5L4watqhXAjwRgj1Mv3PdrJAgs3o",
  "key9": "5VJjiL8DX4bnk4ymfmNQBjvAQs73FSzyNmQLMx3sF8XamFJ8VPM15omBXRPpKEMpz3VkvKMkZhxbW2ziTe9itqxu",
  "key10": "35e1UNw1WRAi4jEga2PWTZf2kARfWhUnSp9FLyDSTFDFHa4Z57T2i4e5YKQXJx4F9TTTLgWqgdETceAG5jjG2Teu",
  "key11": "2nmRu1YfgB3MgUokg94nuu9LYQwpLmm1xJmTWP5oKP6mUBvBzSo7UkAjS5BjqTd4BYM5ZrUEgUkD9QvS29JT1MgG",
  "key12": "hPCLAob1DE4vsuSTu3WauLm52fbvhUaT3z9GHypzz3X71MZ443Fh4q326VdH3TW3NPCevkMmkTMBmBvQmbsnP3q",
  "key13": "3bVYHd2pjGnG1LwoNwSWuFcCcDcJUgyodfEsUkHMXHyfngPdBGpp1GdpNswTGcrn8zwL3fzCYpP2FkBwG6fC27vL",
  "key14": "do3mPuAsmrF2VcS3fv58a5Bu9mfrpfQkAunvSB74bWzLmaCyUZsdJnW6hKTuE9Y1ixjidpThXHav1TPWhvWAPSE",
  "key15": "4BQiwMSRYXAHc67utBUbPCc4vwv7mEqxAUMcpW2Y5UormTWM2gswDZ8Z5H9iNCTPMYF295FLTsSY8ws4cmLhQS8A",
  "key16": "XtafaMJ3pUCiBngzM25wMtn2upT5Bu9jqcEwX5L37vVpUm3n3AnKdkTCa9bofYqMvS4wb9SmMSD6TMRzZ9wLJPh",
  "key17": "iKrwMKmzd1H6xxNUB3AgqjKHvbDzNgpJ7cFinvihx2w2znz5ueFbhqd862A4zeotSdPMHFY5SQP9h288rn1URhk",
  "key18": "3to7vMtMMjei744h9kHUrkFoo6VUNGqfdCf4LpbQhS5SY5DWYfWQpPG1NQTQQ3GMEELenq4FCQo7doU3uJW4W8Dn",
  "key19": "5h7o3Vo5Sv6SDBb2zN59KeaUx3fsbrx3j4b9KtfytXXStop2YAsWSKo74daRgXNQ3SM113ToA9BFLdyuW2GA4oga",
  "key20": "2BGYBkY9CtAB55hSpRuLD5n7VxUQm5FgRxeuC9WdGLV3gJfxQUVNQokpvKJYYR72SDNdQdCmVYz8nGDvAmLgSQAL",
  "key21": "5Ni5sdR1GszJ5rCS41TC9sYhaWqAz7YzwR6YvZdRodFrJJyGZssUytZyga3T6hngKCNfXiTonEUyeqAQWyNmX2mb",
  "key22": "3t1GgFc3VaHPDZ5F74BgBELZSqnvBV8wwW9Zjs3pTwCP65qJUc7g3aS1P1RKzEA54TS17DamwS1ueDmr6SgpPboT",
  "key23": "xu8rz5RouL8mM94CPxt6SqvtnZQwq2dTmWjpt46Gun394K6gEY9waRcemSR1ctZu47LrT7tUfwt7NvMAWHP9LXz",
  "key24": "Nswx63HPwnWKdWam5K298jxrqyo1GznMemizrqKd8ysxGF1TSuyF4cNM3w19htkHPWoyXEoCph72voPX6AvmL7m",
  "key25": "4gEkfoC8bHBaAj9nJKdQ1XNdbZCAudC8oaj3YkbaS1bBYNSjYQsF68QJhjUmp637dpsMoEgydeacnfwNvoSXdhRN",
  "key26": "3nLqTbGE3J36ccmS8MorUVXU3rWWNXgc5VpoPT3pv7azZFiE1HjVyjo8D2EVoUzecGBDCKuyW8mcXgDrgXAgiDqy",
  "key27": "3CHasXSNdoRc5hP5dzSwyeNqRDX1uJWceP6cwMPyuVzykyTvExw44uLzL6UZEuadawXuPtTcMLBrmVTPFDFXrn8J",
  "key28": "3cKm6oJUc8psCG3TJ8irW9z661fbrEb4YAaDioo69NNx4dsnyKRh9UgKaLkFcRtto2WzRSVmV7Ed1oDdxZ4FkcbZ",
  "key29": "2BdNsvxqT1EfUtdKrbkh9YfuoLQDpvqJmWhyPt1TAx7c3pudxAitYNZPyiAXrHa3xMLvMRZdwz7pPFJ2miiPFN9o",
  "key30": "ooeSMrXngDiuuPWPRi6emj1gckUfvxqtxXuy9BzZ5yFPUFtkFSTRwpB26wa3zQCjaomk8kPebhxketCFP7QCX6Y",
  "key31": "5xc6fiAo63wb459Xe8VEWp9PAF7LcvEyX8hsn2hWqf3RnJzS4EAhv5Bv2Ko6fGpC34TnJA58mFfF5SqYNDf4xjEj",
  "key32": "bnBhXHiG6XX2AwrcR7mvyo1mp6QTmCyfnxQpFfme2rBgBY5vagPgDFFg17K61ZiUgin2Wds7ZaRBE9CLFbkwCEh",
  "key33": "4CYQqsGQkBMUbCkPQT2wFysXUVmG1xhYNcmNkvjvAWGxsXVhUyhcUdhfasKrBDCwgrTjnhif3Qg2VJHsuRwBvmH1",
  "key34": "VpqxWhH4PS15fT7gZT9Bn3C9EZW22fXVUReCrHafQF7r2N9ahsqdTLVX4GnFJNXq5izS7DnKnNKpEcC7iGLksjG",
  "key35": "3cTxKBwGdqDN1Ec5ghZX7voCdEJPCbLG8eyEtxkU1vZxavZXM9jKBaMXqbaeEzjF6TUZ9FezXMzGFUd2ZrhWA6s6",
  "key36": "3fjqh16uBLFcRAmELuY85DnY87VtvDzVDCrtU9yV6cbHEsbAukfEYScdYBtfMf7JcmnuziZSNs11ZidhcbNTCgwi",
  "key37": "5CUmLGe1DujRFePsE6jGk7p7DjqRbWGNTQTKPzph75FcYZK8JPezjhvQ5TQMgWMbhMYkrZdzTxuNVLMAQP2Eci6V",
  "key38": "2rXdqPtU7vhToJWEFuNy6uGcaCQ2Lv1dfRpjWpcLhhsjS4bYvJc4PweoHXER4A4jFdywWHnmJdmtNwr2tUUjqoSj",
  "key39": "2HM1U1aCt2FuSkCuEFZkY4jLcYXJVu6SFJFvQcDhJCC8CoxAGX9GSQSE7KBvpaWVALi5AQSjXpX2DXxZ9gmjvzzv",
  "key40": "TtgzAuPALa4JvGR8URWUanYWTMUWatfa1iLzp87kNCRrvDQiYmwWrPYXWdqLvF7N4uy55t3HUtvZiFGjy9iKiuX",
  "key41": "2NdTwXmaEo4bi3obWgVLehCdYewSkzpEaP3t58dmso3JNvBM5UzcNvZCWoG8XqeABRTMW4y3LNcc3UkbvdATrcBL",
  "key42": "3ejdrcrxaczo3pC6eL6oVNPnxXv2fWzUkLJSjuVigzY2iccy4eGWMDhNJJidTtxtP4cDbPu9aXUCenPCwSF6MQd8",
  "key43": "4Eq7pyaZtvxXsTsXbAa3D9vyRBeJKuCVYs4vSUd3ZrgxxKagEZGLMzJfCu6cudCaW8xcFKFihRfSiZgTvvkeZbaG",
  "key44": "2JrHZ5emjbJ2866TLSfSvAS6zvKRnAKB7TsqjW6W5V8gZ3Dx3oqJ8DZ7Cvmj9rYzf9cDbwCbf6RLxdxmt7cLmKyz",
  "key45": "3Jybkv2iqHTQ9XVoaSWC6KvU4KRQKSZBo48q41rJptMoKV29BZKJb2CuZhkS5E2Yspo7qqVmp9bL8QwqWbZhyAzP",
  "key46": "4qfgtCQ8cQDgwoCBQJUAXGx4vJmmiosoz7wLMBy1wJxddik2ktwrw1nvVQCUfGfpKQZE28D1S7mdjk9ptcWfP2pr",
  "key47": "4cti8DwL6rgYywx9WpKAmohexLMMamd12qgLi27iKZ9kmaEAC6Nk8DrZQuHqy1ojJ4yGyS5cdQtm7WbTM2J1rPGM",
  "key48": "2eYV6rWLnQBBYGHB8BkZRMtuBTMz1G9AXG77b2MYs7vNuWdA64PQboLjuhmWsSTkhrETvLtd42bX56gA9UaPccCF",
  "key49": "3HdEBNzq7PVKwLo7T6wLNr7jXpUeQuyjAJFnv3r6fCCaRtXd7Tfr2RPihx8SBMs1i4ucEisb5qxJMH73a4BvBLyU"
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
