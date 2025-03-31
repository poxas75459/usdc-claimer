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
    "5G556BGw6sUPuThXHWhY5Rh4ssNbBNc61eutvpkrCUtZnSkkWpYNegUtP79Bodd2DxLpoR6tqgKmXAHZC75izKjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o6rDKRho4CAkJHf7dvwnZY8AjKTZu6PCwUd7gxQQUXiKo5u19LtxiwFkg8cj1WrBxBuogm2SMLsRyWuVpo63Dgc",
  "key1": "2FUuud1MCyPy9wzoCxMywSpx5J7xvrXbDmuVJff4aNrNBhPq3vePTZrLfinn5nYbzpR8TMxheSZV9yvBfsXaUi2L",
  "key2": "2oWSJTeVqijCtJkNLWWN3Do2jELqtCixfQWt3Dg5RJoA4ooeohv7XfhVgp9HhJ85cqp4SPivq6csc3bH2c8qaRCK",
  "key3": "5SMqKKWEZRSZYUZuE782DkD831UXUwk97ySsX594c8b6Fn9r99UWgoA881wPWpHM62vqpRkT27ve2WqpVoQghC84",
  "key4": "5ShupMZHo6swJhekzA9UUL8hPpMuMkNoSEvGctRk5JDFZoZikjmsvpqLMjVQLgiiBGoK1eQy9sXmNCZsjVwUv4qd",
  "key5": "3pCmCm6c39FA6zgeWcfBb79A5fCkPsyxnALeUREBt338Lekko1nYfyscGXu22YVPmbH347GsvvVcyLoShQHCUdhS",
  "key6": "4uXPuEWXSZePkGMibTNfRnYbgp9EiNzF7e6G25dQ7tzrUi4yFtEZJi3g6QUPEqo66uH8jkGCQ8Xp1jC2QuFifD3",
  "key7": "2pMEiasewfoP4zch6FyebwUsqHDcP7Z4oEhyVBA6RXePukfLiduoZD9vnf5RTKQLB4r9x9Uiho7WanGkf5VMncxA",
  "key8": "PKn7sPdg3PiiVdX8CbAaHhGrkibTuy9wVwNq91dqHGUn53RW7paKK5FZbVLJ7gowfgXwGMDZkDWaQXy74f4DbNY",
  "key9": "3E5oYu75s8y3ktYmVd6MBgPGPxvQXxXVUw1mXifpB3x6ntUra1hCdAgqzvbeYWaYvC2TsARDJVmvR7Z9JG7iGEF4",
  "key10": "QgcrRNkR4N8jYPWZfnohkfFsQDBmb3UK7K9aFX36FNtqfU7q9S259DJbBxb6MzhJVeg7xaoL3NdHJTdSnTuUDh8",
  "key11": "ueBcqGbKKH6sPoi7QzYL3rvTiU5kDANsyMvLLQxn321SReHf4cbtuz3d143ST6ZBNGAYi66SSKPfD4CnvgN7SUH",
  "key12": "2uZHHT68JfLBLNqvVNwUKAxTVs6NAk9e3iug77hFowXqpCwWHNDWfRdn7KvyF6XTSVNeFtbLmSMVJh9V2s4kzt5a",
  "key13": "isE35NkPRSPqpPb3Xt3b7uii8U85DNR8G9ENUsabpxDhfSFMnseH9mJ6eBrbRgtERA8m7zxaiNZtBFSuQXEvoMq",
  "key14": "3b9sVAZY8SL2FGCtf1JwCe63uxuR1E1aBWFvGDZgirrpH7dYFSZcnHovPitct6m3YxVfBHuRYKMtfDDfT3foGX1D",
  "key15": "2ggjYCwcNd6Zn2qZhpgH8AAECu3v458ASXHWkKTB9DYDZTumJBV7a1d5DJ8QArVrj7HRHGp5geMq9X8ty6vVTdEx",
  "key16": "2dWw254Ng6CgyYCNSfGie3zT1vkrBniMZ6mz2oS8uzLhM7hdLeo7Epupmw3HTYpTVcLruMpudNPpWB3cdaGP7APS",
  "key17": "4P376PGizLmPvNZM7gVkSekckcqEKTHVwk5efXmELEyLMF9mvQ1LgYmL1aioC79mKhxG8UeHq9pN7hpueeVU4hcr",
  "key18": "4fBTRrXUm9DBCEbRZgUiyB71aELyjcc3eH3Ja6ckmMC3pNEAsYHx31hFb4CBC75PZAjwAzTVevFpe9uajHWdnvbM",
  "key19": "2xM18nA47nbM1cC4ezdsuBjqvZje5zGS6QaXvCq1wTY3M8WKCN2BuytuwUNMYz6HVdrr1hbtajmGdpNRxy7MxATe",
  "key20": "3najsATaiYw1JfxSM3SxVjv3gU5gc6o7KhciDWeHrrqpb2cZNe6XBZxm6buN6ZkHD237TGwa2Awjr24yrFhka5U8",
  "key21": "RfTPugLWEEfBYdMMeteJKjfgTSDPoAA5HeQ6fkHaAzmeeKVC2XcBc74QvhwtamC22DMkA7zfirBtFKFnZvsbknh",
  "key22": "tPjhVCjPLsNh1VZG2sPeKnUxbyWesBJRXTVrXSrCXdzNcuq5tj9cqpMhTc2TBxhNpaszVxqRsTCWerTfnvbMvEW",
  "key23": "3nJSpQNZRiAwZmoTs9ftrGWAMuKGm9GCjZ3gdkPoji7KWaEZWTytEErsv1eNYiNzLfAFXq5Wpvj4PAhk9AbCN3kt",
  "key24": "5hzJxPoWnixrEjovxre8MMUBXWVy8MyjsMyKMmwf6WzovnBsfnXqZymB6i3sChXQKii7RXD7GSXBm7c9bKRPH29n",
  "key25": "5bnkfhNaZCFgmu5q9tAvKBDKDPt7DQEiMyeKAA3iaMNVXDnSNkVtmWvFUqY2J9cu2ToPbP8FyFTjJswAB43rbp9S",
  "key26": "4TRXSzDkAK3gv9KmgBiVWFV25PoupwKeYjbq96qYy9XAWsN7wB5UpDqbnE6J62M7exGir9Uhd8jr6uRz56NgD5P2",
  "key27": "GL35QLgcfqKyEKCYn5X6pj2TuwT9pMRno6Hd5LemNsouftmHnEoDcXDwqy5xd5W2T6WCY5MXTUoxaU4tCsu7MoD",
  "key28": "3DyEwDRzLmAMdGGqpMsmZ1k3NygajtXdJY81pcB7Vbq4XJvdeNQXMexZUveMX8nJdDb86sa1FQ6vuubKfKavvNzt",
  "key29": "5wJ4cvz3kMe3ubEhJumTJZAEpdXJ1XoaRBd7BHz8x66xdC1VbdxBpYavpkCUriQ7ueZ4vr8oJ4FAD1QFgAgQvnGS",
  "key30": "t9F11rk8XoLVKGC3EULBfrk9AC2sxYnJbU1uiE6JT9vmTYoqvs23PgEDV5Qt2FackZbtFc5LwtWGmKsMQ32tKsf",
  "key31": "4wAUChQSBtKfyCBVSTzUELiJrcxKmxhdCyX8qbzvWRfUMqiWZRzS1s8aUSc4v1EV4KrA3VF25vDGbs6w3RE12zjG",
  "key32": "28TyA8sgcebMt49uQK95rCFB443LfK5XRkQUvaTvroabkWAWMLC6Dq4hfLBsw4PKUzb7EvLYo5aENze4hjWXXyXo",
  "key33": "5kok51BhWpQF3EeLXsqE2gLKpWB2V4FuuT2img9VQxWvQ3oiHHqGkc3CorMFUi3R81wTJ8Bkm5hZXZYczuHafARP",
  "key34": "32zWrQm6jpF1er77ZYM1YSQdWTs4onjVWP234WH2UcgUE86wyF7AMYpQtiLSXbzbw571oS5DYEYuxM5MXfBizF6W",
  "key35": "5jxPZVkF4rE2SomdVoy9vhmjCxyCwCcmxpJbTx86eGsV4GHPu5S2M6h8wV4joKEzrnTawswUPxxycFhy1mJhzVvP",
  "key36": "3ZwpaiQkXyEx3kepQnT66rAkvBTKbZZFgm8VTQgGXyDiRjDpsg4UBA8BshRsu2Cg4iNpwYDCitNMJ7N1v9KuHJU1",
  "key37": "2G1DeFTGz3pSJsgbahvKXKtBxium5ZPLPnRqpGwRnYZwvtPEFgsL2FvDkv1dRFMY2MYALvpJatCsvkcQGWCpEb2L",
  "key38": "2Anriv6ZBUG6QaKjnbPkqgJy8QhGaU6H54Z9XrAef7akcZcpScmuzAaHtS2MnKKtTEn64jYSWmJJ3MyWKV2K52Ax",
  "key39": "wWkwXChjF1MuHGiKdW3QGDgwA3Ufw4L1x5hbQXqYXpm42GCMZncJWTRnzVMwcPJimwCFp9XDuiMQd9ALhSkh2UG",
  "key40": "5Cu5uiz3nF6mbGNtFzgLq8Bv8KdqKQ6huK3pTfUPwVDWrWPvonar9zeXq7HW21fba3CVSjXdEx8bZu34mgagwFoF",
  "key41": "zY4iu3wzyZce4WHLcmwmz3WrRLmX7tV2XsXEFjiLvWziE86Kv7gnmETqqASJ8Dv7WtpLTthpDXEYEzXmu3W3MC4",
  "key42": "2Rmz1cBcD4U2HgSutynurc1m3qnNWEfy51vt14Xr1HbQxi4AGvv5EFZ6MW4Mrqsds8Tf9vxMszL29rTD49r3t2Kn",
  "key43": "5fFdfQrCurpe3hvbnU1rru61S7mzrHV94yVgRLEM9kdFDSYc4XDztzRWotMmUJry2c5igpQbsCCft7sMLBaepYa7",
  "key44": "5brHRMyLTLTHmqqYEdz3Wn9HeoRqBaBGxiqkSpjtN5EmmcMu2PZ5PzKN9UvBViioby1rST7ghMv91ALDCLvv94gk",
  "key45": "4RKb3dWMhVDzwmHvHjH3ZpTGSqRTkekdEYdbmgjBGHpSEyGskGa4oBau7LkEL6vJTF9Aoi24qJALB3TbB1YYEyb3",
  "key46": "2ySULV43t3oVF1KvbazpEgUhCBqkjiFxhQ5vaJBrZzAJ7oP8JzXSMAsp6bp7MGit1koLNqvGRjxULpJy4KQxNbSV",
  "key47": "5KmA4ASh4rpzUUDG5EKTsCLEPjcyjZnqmxWa4u4duXGQUG98qBZkwqZRxRbZdT6jE1KzHzgCHSSzR2gmNjWRTesy",
  "key48": "5KveP2GC8ymbZvFMeS3r792GYMfpwef8ao7wxK6ht3nzTBc97kwNQrtxM2NAhEp5qi7NvyFrJZ5FCodde4W63hDz"
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
