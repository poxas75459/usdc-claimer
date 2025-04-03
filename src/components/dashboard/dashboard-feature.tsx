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
    "4f8ZTG5wDUR7EeiM5yuqJWiuvS9U9LafxodB7VdByFhJcur7p8VY9putgaDQLnXecbrCKSK22T6TAQoWiyhqBnNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C72z5d9g3NhfeV5MQ1zRZyJuAxCzZb2T8GcMJgUNQwUZLZXpvN5pz5NmTM9BvgBM4JdM5KTNMiUMFsJ8jrMwiyD",
  "key1": "2rFjeBwoFaYHB8hUpb36MtKPfWJqfsPF18KsG3twh7YW4d1adCxWLrJcmcowUkFWP7pVRVgGGtRND1X9h4dcNVMi",
  "key2": "2zcZ4forr72CNQoEzSXESifbjizYUTp2gTF1M1oDDcGK46GCAat3q1GiATErQCpCYA3jdjrdJ3RZYsDegDaUD2ZQ",
  "key3": "3sCGqN3vKe1dssufiTVdLYDknWVsRhW5KM9CjHgcBNyH16CUKE5HvfJVpkt73wgqzaZhdeGGYX4z5EK6vptFXmAv",
  "key4": "3smfZuVdVVekbbEWMe5H5RvnrGKPH4GXQ8D2mm3jq6nEiLLoM3zr8kZofhGmkwn63WGKgL7rNL47snMW4JirkTQB",
  "key5": "3B1qcQzTgUU5Yypy8Txg3Tx5Fc1AvEVigpYGZSXjyinYaXHftR7A5iLdTLmco5JQ7BjiSdjVRgxoLMF6fy8Edq6Y",
  "key6": "38bvRsycGXg9pz81FgDuqRdPbN4Q1Gvoi7XCQBzpZGkseWEPEZfYAEiJ4ovgsDrKNtzSnF12gLFKYzAgYZThJeYQ",
  "key7": "MBjcSrJbqY14jD6MPHa95kHHXNGAvrtYzvFxHATWxPRByj4kFLscQdZJvH2LmFTJ1GGqnS4TnxwiBpuy3H6iHUT",
  "key8": "4duoQhRStTqnzbUtFBJyWbiHwEsMetTRKER2KJYCzpQgFAxnvtvNmB8QC17wtSVi29n4NiEqTv82M29Q2S18f3e6",
  "key9": "EvphwX4gCJ4Xo7UffBKTVLUCj2uRznrJxjfzcwi3MMa76WoYAd486MDNfjBxKNJ2akJjoUg6mAqVRGqxjJ8DZGG",
  "key10": "3m1iWZD32iDoKkD15e7CKuQZ34a8LtzRLnzkwjG5kAfEaPRTeVTWfJUNpnWxbpU9Qxdc6A2ptZB9CNoYPJC8sMHH",
  "key11": "3KxFx1hqr5MZkp4qrbwqKLBHxoqoNHiR95tNopdcjv1UVBdyJ9KJ5G9cPRuwG3LBwZXS4Sy6Aondsh3jfQvVFsXa",
  "key12": "5ZYFeyDad2fQMhqjATLdD6amTNQRfzKcVkQqCdAmsiVMHyVPeq6K4nKwkCWPR5AvGKSxq89nwsUDNU4m6NcLSvce",
  "key13": "5YB4U3XnfdKuLEXnKwZ4mrZTJ84fAggaUPCSUPa9SUt6VJj718TmCBDqnbrhgyyjCATHeSKTsu7g4uZFzaKhWYr3",
  "key14": "3REmyjkbKR2YH2CzQjoyTKUwcJfkzFDFVRPX4cFqYvePZf7BnGMHc1Q7tK96KuaZUAfjfaWCTS5FWVjySrtzt1be",
  "key15": "2Um5NBA6Ztcp1XCLvFXC37exG6WdPHoJAvXU8vxqsjZUxqWPckRHUWTF3cLx46BTUagf3UJZCTRHXGSiaK6JLQZB",
  "key16": "3UE9KfekuGTpgkZwSM86F3Ugyb7s7qygL5w2jSCCbKTRY3XcDWX1LpcGPYcKSd5KMAcSX9fKXTERjZr7Sj9hUrKF",
  "key17": "spqnupy233GLC1J7hoQkPXDptZpFeXiQV9HQNYV7nkp9a4ZC9hGK21ZeHn2KwjMABBaEp4y78f7hq5b8vQA6wes",
  "key18": "2Why3jcZSCq8W9wwiEvybcWjYHNpjQnu4M7KncmKaeNmEvmn3t21ZNQUZFmQCawt7emxAVrdGuds32ykqEqNW6YU",
  "key19": "5V4DDT8YnDRFESbSvVzGBQ5AetQrJyifyAjLZs2jKabvUcvhQwzJX6zKZRvcL1qZGgC61tRQYSdkEW3SamBgtbq6",
  "key20": "5cAy4WSpwz7ooCoWihBRy2RCe1NEuQCgx3FZiKqHfcNGp4LkRmhmELjtULfV99Xa91zGT6gncESTkCCRWmh6chA2",
  "key21": "PziwMTPVt9frrpJDo8FXkh6UPYb2gtqGAWE5kNL1ViDnJdM7MKboVsrqDaftWLqsfjY6xaR5sNEwNBNbjaLFZXp",
  "key22": "58Pq29uj6CpPsMrzj73ypWQToRj1uAHw2foqSGf9E1gL1cwSLoYfUt1dc2ErMt2NVuMJGu5xcS5rMjJc1nYerHCb",
  "key23": "2SxZQ1oFzctXbpPsCv1GgrxKHtMXtZzZHddLPzkFQgF9tF392EHneMLgfJTsfhvBRXLgoKpAakPba8pPQTFs8ugU",
  "key24": "MNQbhhXwxpjF42ziQ7Kx1XVXDWrxaTbKkSWetgnSNRnahZqLWe9zGK7J3wMGVPE5pBcTNvhyFwjsBjRt8c21KPc",
  "key25": "4fM6LvFEcyw44ydVS2FecBTTn4mhb6JMb8PQsCuhKtsfECZe87VZebATbHN2uvz8so3stnqeVpWJVqxcc9QXjjNU",
  "key26": "2j3ifAsxfC3HmovQaQBqV3ghWbMJMz7KQbk9o1M5sCSb599gAAZFTce9irozfzyu5WSEsViDkCL6PFhFyjgtY9dU",
  "key27": "2dpr5g1AY8YEXZtH4YEB9fQVe9pJXbEvkiW9AyPTaK7CugWqAedvVUWNKWTU7qUroTn6PYohqakUEskYJZFwcW7L",
  "key28": "ZcvbcJHXiAVzP6BGhL9M7KpTmGdpgTHZMybXjMQ6FAEMSSWvDLi17WQVFRAZvpbpbG1dQBAhvykhKu3TzrvdGB8",
  "key29": "49eP5Ps1CNurGGNTXUwF1VA6MMSBvbsfRMYihjqq9SwTDr931mRgrjbph2Wre55Uy5uFfP41Q5d9J5vj4uW1j4Js",
  "key30": "3bAE1gRSAMdPgvWPTXcf3EC8GqZbQ7pFe36xkCSMDss9JnPix9DaoezKyfjedKh5FVj53uHQioL5Wj5bNDCtPq6q",
  "key31": "4UW2LjdrTBije2h6eTeHXqJk9FWM97Apaz6d9FDK8AdkayoFYjJKThMGZWb4x2PmRVtRwxCPWihGe7MHooKHw3Qo",
  "key32": "4S7EvCvg5hYe9xJ1GrvbPhRGsaH9ch26zMsx9ayVxXM1WNeHsb12DXFuoKhFM7qbBg6ta4uRRrZpj3fKTnCFoS7U",
  "key33": "5VEpK4EZyCt7pMnFgUy2AbionbcXFaJtBAwVePC4nDAGi2tNZds4daZFVivPjR8ea5zrEb22wsjH4nPkYirkJDsq",
  "key34": "5UyAJZHKniyMwohN6aYKq85hx3PhYorcQYJ4NH89QQ8dLm6Mr9fSKmNW41DvnZuB48hBDmnQD48iHUUeBZhCnkMi",
  "key35": "5ZxG8fZY7wBJ4MzoYntkgjrgwzADJuD8MRiYLXw8KoofzTLFxPox1Cg8By2Bbz1Xw1BFttCh6xUR7E4hVH3zJ3r7",
  "key36": "3TyQw1LZtmaJt33FJCvQgKz4Zu1ZpemaE2RyDrzUA1VdUKVE9rzubkkWneRRqh7ryHB5guaA5WFAmtA5pgH3WA2H",
  "key37": "5eM2QBE6MZpXvYjcZUHEwBRaM8MVoVr69k6HXP4YK8hmu8SqHg1y9epSFmPXSduQSi322L45cxGYhzuVARcia3Qf",
  "key38": "26TRx4RP9D38zBGeM27xCyQ1XBPkTbESVi6SnMirmvpWo6hFNxCN6WR6UXE2fjTdLZ4qcFMZ8sBWxJKHyHNN2WjU",
  "key39": "5JiPjXussMYPWJ9ehye53YfboQ1iPhKf8R5y3mu1iw2xAcUsoqrg7bWJeNKTZZyJo5Ay6iF8oNpey3geTBHrcfhx",
  "key40": "5NfzbABBcEFpZ9WrFZh85jAUAswM25X8D6pTfoinCEdLURVXfSrT5aXqcreuvKCVuKKmVgUXeQvsQL2gCsP1hznL",
  "key41": "4ADi3r8TmGA3uvR1PF6sLdxFNst1FDkUQzao2VAinGgSkGEw6FcJtdy3JHEnHq61xwjvvPctnrz7Yha5abf5JL1V",
  "key42": "4SRFAyXbFytuaYVk5KRkLnNuHH4TPj78ShGg4GH1SQHdTCpr7fHgshL3tEnUUMxHupbLpuuSa9Xo4LqfoBN4hsVD",
  "key43": "52asad5wJv9mnvyKSzpNQHwHBAn6M1w2cB6xVjC1XgAQ6H5eaRs3yewXEWXNLX9tdby8XjcbEoLd8X7BhBDAhZv7",
  "key44": "4fR7T3yXnxVqibw5ovF6U8B37i8U1gbo116StKLVeJyyoux61bq6BYfrkHA2Ex992h7sSPzjk5Thuy84xWmQDAev",
  "key45": "5jD9gEJUrJw4aSpTJMesuZzLoCAxj3JMdFWQDj7dhWMQ7RHKnNDKdLiHZp7KCEpxrBy9EkMKxDFHw7UgdXV2GmzY",
  "key46": "Bnd7KJTyceWzXUrguGcWhVYyaXpxvELqmdUQ7Vn2UrzG9hxucNuSPmBeaRHRu14BiPvAmUjnRDTMcSAP46FCqQ1",
  "key47": "qUrohawCwM11WymBbgFvyiHbH9n6PRX1kWMTvT2Tt3VxhXy6buxn7TTmXDYTmwFgjhGjnFMwYGzSjBB41CNfrhe",
  "key48": "2Xs8KgZVLg6uAx4d7WbcKT9YCZN9fmRzn3RTPpe9YfySARFZFRs3XuZfFsZY7FhVHxRzojYFqLgULd2fqx9yYfkn"
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
