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
    "ErKQU7HeL8frQEKCE2Fqd8AYvr7H94SqdrwFbnYfQ5pkZVZ4xdxpoF3ZhAGtbiwYjJKFc1TyccB5y5UN41AmZLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bws14P2p22V9NjibSLtaW639oHFDsbdzd6zVAS4ji5qkhwXR6HBTj7Xms4KmvPBRRawzyNd6Lh7xCTUQmGRWJbC",
  "key1": "24Sj9d7zUoSFuAdy9j8hrJdfyx4QETNeBjGHesxrxeKZWFjC97p39JCE1Huip3hgE9so1oNZX19397AaDKpPc63c",
  "key2": "4a2Ys77kbnzUQBGEbgeXT9r9T8xq4TY1omAPEeTYcZbqVKgjqx2zjsx6RXfKEf3eA1fqbUmSXoaur2tQ6LpYSbwf",
  "key3": "3gQAz5thGBUiBpcxqQbLwz1oPriuKLqxaF8W9LYQiJ7jKn4gGJpbmCPNUBhE4eFB1tqSgYR8L8TdDdZkC4MLF3aw",
  "key4": "2519WmSwLv7gHEBCqQXDw65ALvsof8ben1y35bCWxT32tutjaWxuznRh3y9y3WYhFkm4urGMT1czMA5ccDoQuTgL",
  "key5": "4J21UQ5aUAGQGq1VcFSwzneysAptzi1hRLKwN84U1hGvpb8DdDzBApAdS3n2BoiCTfmH3hBFswHF8muCxjUimjhD",
  "key6": "4Utki8QB6StGTomaSDGQbE91gnWDthUHU5GEY73Ct8VWKeWQ7SxjYKuz1KUHzvw1sXjzEyPqwoRVHpkYX5kDakDb",
  "key7": "2fzA7A4dv2HsfVq4cJwnE59RQujPCH5dKUDTkWVddhNeGGQa7SKwnt2dnhSfaR8u1DLELqCHh49bcXoxBqfCNb9n",
  "key8": "4V9WdZfUh5bKm569nRFtGpS2BpTFSxxgvxyWYNjne42g5utKHi5Tgn4yN5nB4yxWcBWxwu8QXXupGyGsD7Z6dEiE",
  "key9": "Hyg1MJ9nekccLJe3hDM1im6AMPCZym4texBBqdzyobWVEEqk8kUHPD4SU4xU948zHXJonUTcjqayrYUhJYqrgxz",
  "key10": "DfGPUmUzQq2q2S1a1inhny2fNmb8zmXjkdo91P3wRoETz3qFBEvEveXojznhcRGdB3NADPikDX3CNqoQKdc3D2m",
  "key11": "3nE69uZzHZPVzTkhBsYg2NUfFCRdWqjMxLtD87iij8SAhCGvYBtBdZzkPhuQJLKZYV7DLdq25Kfi55woueFd9XMX",
  "key12": "5fEJFNEXhzymAFL9GbyGaExTjEh3heUS41qC4RrvsBJ4kqwocUXCahkYifDM1kvNnmM7sEFZoyyXcKB3ugtVjYhh",
  "key13": "4b4R28DWfHQCwZZSxo9uPbXDbzgQfvASQ8eqbefWSKG1ciwX1khGFx9riubVJHPn7NxDQ52ZmiNfxV5pMLjXMZLW",
  "key14": "RKDePQGkdRUop11LoY28ifE5YmYfeeFWf1ZeA9zdmxxcDXxah2fqGgQR5EGS7HHqZLtzycJpRrRXqw5V225eHKk",
  "key15": "pAQqCfDUtr1DF7yJYNe8jCipR2FYjUsm2kiH8QsSqm9TZRojSY1KtUaS6RqEY7Vzm6iiZP7XBT4gCAJ5uYujD7k",
  "key16": "54oLrM4KziF1icUnho4hCqpAGALU9oTNokRcY3sXHv42SBsDNZSbekqZtwr5fsERA6hKmwNyRJu8JXfFtfmh7aKm",
  "key17": "4BTEtHqF7LgtcSdW46WebKrmwBWHRF4p6rcfBJHakLHGTUXx6PZcmRFHNxJkrm3zJKwoPMTcvJUraYhwczmT9QxR",
  "key18": "yYZMDAGShFs3pqcUeBeyCgBvPrEjoLWr2rpLHvm5NZQkQqZEBV9CNHQM1DzgfiUdCXfsYr4wfAUhLcqpaekqnSU",
  "key19": "57eJkQbChiZQKnfdJobFmcAaFiuDKuBa8EgyJLSziqq1qeFKwrk9ZxMtX9Ah5Frghc8SXLzo6J8sPt3umsN7rLpz",
  "key20": "3vJcUGWyCgP3L6iou7kkRKofV6GQqjNvJybr3tBvPFUa2vvFMXYPvLdAz77Bx9SSvobk4VTebjy39V6XS6JjKDqD",
  "key21": "U1zzn68z6SVLSa5v8zLQoyPuZCeVxWhr8gMp8kpiLiUd5CFQ81tVYZx1v5hP6grHusk3BhAa2WejhQ2bhcRUdNt",
  "key22": "23CK4SYgENXgMNdL9RAirkYUziQiTTE5smfDxKWapfcAbjPJ9Yid7tajxxXgfULrbcnRRtTJazY3sZ9med4MMSAc",
  "key23": "4juJn3973m3DgHVbZHwn5qqeVJaRQNgpBw7Fznuec9KoMX4Pq75MZD44ARNcPyZ9UqbG5hCvfVU7qBYhq4A4Svbu",
  "key24": "3q2g7HsxFw4ZLFJoFo1KYPwGoKxvHcQhpvXxtzuFXs4VWu8P9Hg75RRLLCTQYULHzqHLxphoLf5X9UzSpUqPsoZZ",
  "key25": "2Uvfcq1aTag7vz6LQtM7bFWyspoV89kkqgQZMRfDjju9wzdTNo2x8g1iPwARnhiSnJUTjCGDwwsaThkDUVU8Pk1t",
  "key26": "3raDgdV9449ohp4A2RJeejPmUmnKHud2sdVWNPQbtuRLnCPnnpk95JPkt4zMByRhNHWDTbzTtPE7FD5bLKhCPteN",
  "key27": "PBob9nAgqNe6HpwVHQCEQQCCShi322wWwUnXpcSf9TMn8xkoaYezKezFqHg1mXUxwQkp2W4DRWb6Xs5tcJ42L3g",
  "key28": "3US18r4c5ieqDY4edhgjB1rURmdTqsgV8q2BYUw1ECtMd5kXbABEN6WR2TM3aV1kpparC4T7vGntsSG573eWNHKM",
  "key29": "BXqn4vvBgMurk4PaSXfGT7q4wJ9GvtC3LaixyTCjJWYqSQ6RzGGBU7LcTFmxmXjZGxnjeXUPTsqKukxnLt3Wkjb",
  "key30": "2nwpPsfRt34PVnReUutm31i4N9mXg2rNj2zEoo154Jg4AcsV7A4aBEJYYhyTEboVNAeDsScZqn6SYAim4UhNKeYg",
  "key31": "5Xz2iz87zZCgGXBPMGTW62Y5z4wdon1oVQhvQw98F9YTKcELbi8vB3YL8sbJu5x6qmf7LxtXJs3UMS8rsA91He3q",
  "key32": "4mQoc9U8CvmP24X1ndATgLH4H91PqKQhA4P5SkYYnRah1uQYU6D5rUaKLbBvV5c5jVdxMWKtykERwmfpEZACFqcQ",
  "key33": "2FzckZrZ51sSuv4BZ9kt9AaMaygvWsjzzXa7UQQiXJz4RCnksP1TzxE7DP6bpuZez4KUXGvkt9HDTbmxNyhACWBK",
  "key34": "3DvsfLAETdLYy1MWgrtUwfeXqVjkVkT6wjBdFsEP77TDFxJecNrcsSUho8FaWhCfW55KvEFKr7Mhq1VfQdkb4GUS",
  "key35": "3DpxSUUzXUmpRN76o7DRjq1WNasmLAB6dEjBGV9wHkD1vYmwhyAMM2JQccpfGQ5AXTQGEr2c5srhBGTZjD6DBuCu",
  "key36": "5hqQLaxbo7y1Meq5KiaSdWcn5CrL4PVRUN8M7e1p2b7Z5nJvHhmXsLNd6WAx3Wj4b3Yspk4zsx4XqSz4oAnggoQH",
  "key37": "2pzTVG4AKJBq75BnRrdqr6BQEPbqhe6TXYmS3JHyAN92Fuu71nETNJXLiEbjRziXbfiXQF5oPEmXMDst1Kj17bW5",
  "key38": "3cQ3cmHR2BfhabjNp817hrv83J5Ev36cEVGwakqDgccPkrX5keRTgJk8TEzBBbwd1GDLj7np5upyyLX45TBwiz1N",
  "key39": "3ciN9GZ8ySVBwS1xnDWtRPqzhRdsGsixtJQsqLhJDoeVnkhXJZ3yh7LePwcM29obhn4sf9niBo5mmyrbuceNxELe",
  "key40": "2j3r5nuSN7eifcMRFaYSatFKdR9fYArEU64gV1gptQaaBGPu5Q2A5o8u2H2ZyfCmkov4Vx8EwBcjFyWRoGiKTvqK",
  "key41": "4S75i9Lk4iku78BFhaFy5tW4mB448vxxbCT1yRCYdzpp2zPJiwJudHLX1K3YkCd91276b5JdE8rqXBLejaVoWVUS",
  "key42": "5LqEeF7SdbwxmTZQ97D7jp4ar6YzHyDHZodcUEbJFfDAUkhfRke5qEE8Fz9M4TbPtqQkLbzMymeDDFpCnRKKppJY",
  "key43": "4buKjm3sHBKcy6cB7KEu8Q11pcvWpTWUztMoW7RLjSLCWHFX6HTHLegjkVS7T6nK6e35UqJz1mVWb6xT5GTF7nDF",
  "key44": "33BeyY8qZcG7AER3JMHsg7UBehJwfEiVwmo8C1j1uSj1wNSCckFRdkKs5rMmThBPRqFVHv5SfCsD6Y7mr6vsB3UB"
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
