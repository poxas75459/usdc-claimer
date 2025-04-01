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
    "4beBKU6iBcBdkfvoh8PK3mABKEyL1mDaVjj5SyHCHnF5ujx3At74wjaifCW47cHgSxNV1jtVBxKCXZTQjZGdR2Mh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x5WWcGjuNte76sTWcVojdMa1X5yCssbiVWRoCeLStJcAWLsMzZgUpu6PfdU1MLttNFnHaCjYcM1T6L34fA6yXXn",
  "key1": "1ppqJnYHGHwtKvDabKhECBm9gJ2b2MzVvvUNhFrGjM63yWPHsezTAhBY6rBDjh5WHUys412n4jWwbt6kStwn14b",
  "key2": "64UPfN9jraSgE4hxLSKT37eT2oeH8SpAc26VHTFbP2LMfEM27JDDvz6aPvqWqS5zXbcfH2SeP2fHHdNyUSGXf1tu",
  "key3": "4AE1QN5zdvYtzhxLWmtCRckANA7KKEfnQrd72Boaer3RGKDMF5Nx6HZos1uw62W8jZwkQpFjyQ2JZVCvxQMazxus",
  "key4": "FPXtckMBPxH5EfoKWwMpayo2tA1ABgjisfz3Lm2ioXb2G896ShihcPDpRGze8NLdoJg8iwk1wKgwdhCLhjm7G1t",
  "key5": "5iehod3fMzAHYgTQ9q6iU3QSpq6z7acqqFqHePU7fNfxgfN58nSygWV3EtPcTVAwjdUxURPgt1K6FsLRHBdQTU4D",
  "key6": "5ZBxT1waMGxezaQepHhJSaY9fxDiB5dSPaX8wHN4HwXqavX4sC5HoyR7naweKyCQp2bfs96YFFCSC2Ps5ZWUv5q9",
  "key7": "3MD79HDvCvgG8DQHWQRAx8RFj7oqWNJGpzz4fkmNmoF5kw8Hq6ufYkDPsmWYCHXx2WrgZJHUK5nsrqqWSgncM3ZB",
  "key8": "cnUUJVrYNa1rANjf5gvdtdvy8dq75xUDZunqGrY8cnfLAYL4JmrutbQfzHDmNmThei7AYPJPUMXbH4x5bQoeXJr",
  "key9": "5qLsT4CnrJj1FaDDJpD9HcVUWaiRPf15BMvvJJGPNdxWxBno4yKpPhmK4qv7DR86kcJRQ15SMuQhd4ZnSYHkUguK",
  "key10": "2ZP1Fjh8a6RGSK8koNTPEwVk7D8zkMQnKUxuEr45pk5zE6GR2M12YgG95ZJP8E322P6WK1WwwycqBV7C3GQRccsT",
  "key11": "2y8ftPaXs14KPiLsu276Gb7pwd84wng2sLBUMDurxdXEqhgwhmqoUcLCiDqxRHpUAyFnCGbVAdeojoCT1Fxup2Aa",
  "key12": "4PKJbjUthp9wnsQVjqXpSkHgv92coXVMWUCWFfRANym6F65jQby76KVo8GCTXyLnBuTvcoLBpR46aC6PR6WSg89n",
  "key13": "4m2RubGqXsRkTPwBZ459Smnti2tyAB88pXCTsyreHhWA48C8dcPvzkUuY4MAGeneZC9KCobKbFgPo6XrieuiUk91",
  "key14": "JrhU2GtcPPBAuGgTkJniC21PpoLWrVNBdtY8ThfjtrBPLNcgMrhppEbJEzkimva61j5XdAcy4sJbY7146tLjygX",
  "key15": "3byk6JEV1HByRbLBdJ6Gsde9xdRTMbmQSBnR3SnRYKiGSJzboHeiZm6vHme78dn651jP9yfEY33BF6JrXmfrMADs",
  "key16": "56q2LEyMEhJn7uHVvCnw1CxjHXgnY18uVenLUaNSDkZ521SqQGn5Cxzdf1QCosvzXjAegpygdr879Hv8BG1ptEXx",
  "key17": "3g97DAiTMsv6SBqtAapmiA81RPmYBfXQsKVbE3GoMAvaPSJWm3BgjcwPmLwrGUA19WDBLWzao5EGC97tfWrNyKfH",
  "key18": "5Nu8tsRa5pdrSWdXvVYtbkggHk12NNdVSrsqYp2VrXYsPcR23vnyViwuv5V1WCcnYYifTphTHvTpepgEadDLyAE3",
  "key19": "3E4oeDtJaTcroVsNemi6miuARksC9Mgr9hN8TzWV1u6pXJd4doDBByDGAGvnksUcaNRehZV2karo2Qyrfu6pNLZm",
  "key20": "gLBHXAkxP3WnnztazSGWpJBCdCoi9qhaQhPuq6HHAgDskFGEaFGMneT61MGCz4xbWbqufthcQbHjScAQewC3rdZ",
  "key21": "GGcn462s4j8roG1ccG9LxBvJTgFGFwP5BMFBRSP4g4Gbg8NpUra451wRTjawDftG4rzMG7xSyy5KE7GJTuL5DQ8",
  "key22": "AjXhgRMJeGGxtd9bAqp4JaXMn3FAsvaNWjx9dgTHivutTbsh43rheW5DhWU2LPhXvpKQtRQmhtkPHEZ11h6zJxE",
  "key23": "33UWYV6Q69MLpb5exmr5iz58KWXHM2ocMcFQRY1SynUEYQ3QZpGAXtmaoGmgivwdYNx4L6cUCFLNHf39Fkcbonz7",
  "key24": "2dPAqfUwKmCphXWJAwWDRfLSAPBhY86DcYieKMCY72X2J4JrsttpkPXjW1aFCWLiZK23tpSjkjQQGnRMsCrxj7RE",
  "key25": "42Vt6YaAeVDHeySSY5bgtMhQbptQxqKukpCqcNUDYKpY8YF9XuPQsfBF3yhszMEmeYCZ8KWn6yRoHHesyky9chyw",
  "key26": "4ACM1V6iyGdn7amjXGvSW4QSEgpNKNmSd2Mf8RVkegLubVGByTgp2mVKeHdaMU9pvyrNM7gSuU1vfHW5Fzr6hpY",
  "key27": "5LQjQrQEpdH3aM9Q2XE54bhtBYwVnuKPkNNtwneKUDYcCGZ3ZaHCdUAjLDPF6XsST6z34KZufEwbaVyvwSTpUF3g",
  "key28": "2RUkV2hVzk6kcGvFxYKisDt19VZ198fEttabAocgaTfH8rqgH4hDBNQsPnXyvcq7gBqKNFMiZHb9REW4otNXzA7r",
  "key29": "4AtxWWrk1WVbGXrYgXwqx61FRtTSqAxx4exEgu9fKxJzuP4Q38phJbdArxbFd8hQSHrYqrgcKzXkDLrjMRYEWRDz",
  "key30": "nNVSgnvh95HfqZjyodxFrapsffgMPh1oseT2WxhBTqCxoQUHmoZMpUtQsdbDPkYhALtFj5cYBC2Fp1L1e46dnBB",
  "key31": "3EhpzgsUrXYppW1T6Gs8gswsxsHvLmCyV4EsUhNoKknAWc6JBposn1tk3Hrnyu75AGwY6qB5Ko4QqqbVmCy11xmv",
  "key32": "1muhEmEJrX4h4Yr5yqVGmycxif2P43yzzeWKfP2VWUmAzviDbKPAZYstAqLQ8f1Jq2jGMLnciy4LpoMUePePYoV",
  "key33": "29rjAR2KiAx1DCP5z2ULYJHx2JVJHjpJY95S7aDqzkAxnhMUndJG7h4Y6YbooTo6Ujdeqd7yYjShnvvRgcWV9Eor",
  "key34": "28E3HVHE5X1Zxa8YzsNdQ42ZcCEikzTGbGnfWrmaCvR6SSXerYP9M3sn4GWBbuHg5HeadiHoddc44FLx68nwbF3S",
  "key35": "31jMPy9y8qCUmQXWRwqhpmtKoRG3kGYVW7QYNQcsXtgBiKmKoSxcupsLu2oXSoMh8vYEQVXH3EGCY1EJ8o4fhts2",
  "key36": "5LjREqkBRamgYX7HLXRbxsrR9YpoJ2oFRmN58hm26zPzVRQCvnqtW8kp7n2Exs7X8f7KWKvpKmfP9jGSvM45M5Pm",
  "key37": "3MhEnNw8TF6wt4PYX7RMbP2aLcCCtGBeSBJRKL83kHf7TV4Un3oY15N9mKjdFQtEvTi5vcfZgTtZyVia8fYQGaq6",
  "key38": "2qVtfNVizd83ZqNsqaKKb8EERMyS2HN1thBFKNNeTEHWD3Z8FdcA4t6ghazV8jnt8e6LuZPuoEBLYsbYfoeGFxb2",
  "key39": "4ib8aPVNyagN8R89X3YyhxDt8fZwwgwz5vYd9MBLA96ZpiLpaF3bTnMX8Kh4FbsvXzdXbNPSta4B1w85H3mefL1D",
  "key40": "73fKuHVMHHBitDn19RDUWjtn3fTG4PftmMp1eXq5KoLmNuVFxXpEphCea9hrVa6Xq34Thr2iAaXUujRXqu2rubM",
  "key41": "5CaVfkz1q2uwCL3tc97x19LKwd4Wk6otsP5FC1RMVa8GtoXc5sSbsfqUrohpDJiGFRprixQTRfUJBXPHSC19PFer",
  "key42": "DYjuN2nfRNVYCqCDoBkXa9eaTPgWRwUs3PMFPh9tpDU1v91FZSjTgQBs8EXnHjSdG5rkucM3Zzd2Sw8BLHg2YG7",
  "key43": "3UyjJqd8gi98a9Th7T4n2Auqvjj2Giu9S58S75StpqtSrVDFwhZBzzoo1nAhSuGCQ8J5Bh4utT1rvNaN9Kwi5vXL",
  "key44": "63oPERNjFjqKH7inK5oPYdtwp7NZmN5Rgw65jKq9EyWNvkoNBQD6W4X4Y2U4YGrzmsG7upS8AiytZthmQSVeemuX",
  "key45": "5J8ohR9S7riV8y6e7vN8KkLyPPoxpND3SqzEuHViweKn2FuVt256GFsyGPtz8aJ2rS9RFh1a6Tz9XrRsiYngkpVh",
  "key46": "8oNX62Tgt26JRvFemDnH6Fg9C3KgCyDxye4dJ8ZFUgBqU7azLmrbBufmML3zbz2gRAB6hgzkUreRf69K4sXnWAU",
  "key47": "2DQrrR42pUPSP2uS3CA5yJWRvqKcPAsLjeMRXmtN9B7ohJLc9Mc3FBPpNnDrTxSa4TUQ8NFq4BXuJV9cRmqmWHiz",
  "key48": "GLcvKPPLtg6NrJfzW9gmULf1EwqP9QBpUy9RDVGqAdoxDyTTzQDskmh966pPtThL2hZgCxjzhX2ScVsYa29KXEh"
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
