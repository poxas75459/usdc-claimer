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
    "5bUW3f2YCFKHT1jWPnZFBS11cw1rXchaftJdeuwJhftSYfeTw9MyrGx6vXapF4n4qKkvpfScZ1hDzpimCoVWkDEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XW2Hdeq1JyFDA2tuW6bmsGUJg17JDqj8aPyLPSmTjTamwqDRDS5oRq32jckHYBHcZZSY59ibV7YL3xtZ6VFZXgf",
  "key1": "4PDa1a4wQ8F47yPqNNYFzgWnZN2UzrYxMuryd6Tp3C35L5PKuLfgDZWXzr3Vptwq1TJD9RKz7rp74PrWHYZZyMbB",
  "key2": "4cTr3L3375Bt5vjMNDXA7HSNhtJk2oVFuLrD5Wxi2ScXiFD4tWeigYTew9DSWx8Bmcc9EqXgMyDjthtcJbdLp4pP",
  "key3": "4A7ffufMrYo25ko67R2ZV2s5hg3m9Ys494XbSSQ5DHTYFQPWARFMqZNWmGg4Lgd6U96NjdFMbDgED6B38DmzNTiB",
  "key4": "3Pd3EDr6tdarkRkreBKtzUbWDh1TNzoLvXXEZ7DW7fjc3VfUTndTVco7giSMuNa8vJ1oMKLoEGgwfVM6SveCC9PN",
  "key5": "4boYL7sRyy6qb5nvSKz4WfU6WCAd4f1TJo5R2gjQc1ovo17Q3qYmqT5ZbrgkFDAzt8vuMu1iNQFq6pBWcxEiYeqP",
  "key6": "5yVxvF5b3Q7uEQLtS59wHD1qbgB1rrbcHe8cuXfmV7i4ZcHAiJesqFP9Psk9uwt7aX6HQgnj2WW8YZ156Uf5gPjf",
  "key7": "4GhmFuQs5iTkoTeA5m7yQVH2umqtre5vdfjVGznLaNL5JaW2GrS4RoZDXRQ4r66nAYwyutrtu4LicFQVeZHyaJ5X",
  "key8": "5nixhdcRgKbUTas1jJkagc8C8ebUm3XU5aorofGoiRz9fVAY23fokVHR4pNTQwvMDRsLuRZfxkjdk9aPsT4aZBpv",
  "key9": "5TsaseaRRS3pgjAqL4eyVjXFe8tef2snkSvKszs3kTqkqKiQdDHVCwKMRp94nREbcxXJ6aB9ZYTAYQ6VQHcpeaYo",
  "key10": "2GZB3B9EP9GjqAWurbCAHu8oHXwoENoS4VEKw9DdCBVBzJE1kW6snefJDuTYeh1RsA1ZPPxNvJW4hAwCnvLspMcv",
  "key11": "2M6vgznTnpFJrNuZsZS7LFXpwH31YqDR7DAnz2Gjks7TjYquikYCYoYaFzozstm5gSbkcbYBhXNqXmCGwCLUh8gG",
  "key12": "5vcrYTAZUxkFCVBAVDsKBhoHzwVztpsZbzbPBwDNite4PvFKLaMZG8MDEdYkiidqqATKYcrW7XAM4BGK1DDGJQkr",
  "key13": "276sMnLUpL82H6ydUU7gryeSJTihTsv41GdwfkwoTg5UsmUneNPXqNpzB9G6uAngTqhSiVuTz5fzePCRS4qMcCE9",
  "key14": "34TxbrACXxAHjLcfP2heS8b9fKfMhQPvD6fsoT22AxtiSwrGT2U7Z231tgV5BznDZAaqmVxVPPivLwgt4Q45iHJs",
  "key15": "yiEEUHJs3kbNG4dfChMW4kVg1px5w3r1WLg3PiSvFCX8wp7B8jEAMRVDLsTvGQJ7BVFsAP2picWjE6vAj3Ngeu9",
  "key16": "4FPEDt6KHHCsnPkhHvyQw9PvSaWssvKEp11MWZde45RSkNSpsLXDDGuynViU4aVSjGXYbkcHSci2z5tBpJ4mq976",
  "key17": "655pYX8mTDQyKyGqVAukkTqyXD9HoQDHchsiu1mhszs18d55h2ixfn2rQYMtLMjMh6NuCNvrbjGTYhqysBgcAqYs",
  "key18": "4mDKQVqwAxND9wR5jzzAq6QZXEkKTMPotLB9yg7qs11jE2X8arDnAj5eKX8tq3RfWbG6qwHTGcRppdsaJLfJ13aW",
  "key19": "4jq6c9s7x5oGAvK5rCgrp9h1thhWyVdEW9ZzipHiBsytGTuHvuLLaJwBBD3NYtKxmCYSYJbnUuZhysCwuUQbwqAv",
  "key20": "3izcYQ1YTBSFsqZFmi1yTyVe148UXX66feHBMD6jadeiMLho1yF4UbScp2bQzBC6DnwkehHpJpWMPinorMiGd44a",
  "key21": "bux9XnPNSjWbr7iRcdtoBsbiLC4f3jxhbqvaezZnGs1V95q9uZqCLYG7vtk6n9V4knjpss1uuRH4rhpNKwBxEgS",
  "key22": "2ScM82muqkZKyk7caBKYpn3Dj6x79SrHYXkEYBiqyZBVF2G5owZcq8LZyujow8u4CVACEM1RCnjXJwwcsN6X481o",
  "key23": "5pWCzT6TL5jc1cYJwMT2o4BJ8LALkDS5QvEBXbADPnHQcyRdcMRo9XJKhhsjoTko9MAPDE85CemGuyvYp9Reh5mj",
  "key24": "3rdvAXtoG9GzSWJpHgsZHQZK7EUmrKdaH9dSjab6oKaFDVpjGrUv2Yp7m7YWqzn4KprnwCwUTUQVyV3vvG6AmQBu",
  "key25": "28g7jfMB4ifRTAeT5VTsKWbKew8RPTAAP8ch72eUBm87MX4WzY81rqnbpGLP5tJTK9jbhsM6p2cjTnaUjgJvUhtk",
  "key26": "5tnwY9XzfMiM65ETC3rmC9xfLxJLii2tDkmntARcJwTMtj8vfcEqZ4U2BEscdaowyKNHimSktPHCKEDKFraw5o1W",
  "key27": "uhfhXARkqorM7X55kZ2nQt2J3T9rHhKPjBZumtwjHu8NNzuUDfE5DzEmvqhfpBX3LrcuFmmdUeK7wxyZfisuGWe",
  "key28": "3jHeKsSzQgojSKtsupiugNPHhfz236omgWbqX775gyJdDYTaTudVc1QT56RCuPKxXJQhnPoU8YLR6KRhB1RQ7U6m",
  "key29": "37PSuC2Lt4qCzoMA6M9otkAxNrXnBK5JfBnx3L9H1CcuW45esn4jGJLAFDJhaY9X8V7G4rtpVbySNvgu9gN4Dq8B",
  "key30": "2fqKbk6JzBd9nvEBdnH1Zx6a78wQjJSRhimgPLK1UGHJD2vQpuvLoEWY1gipVzv9T43DyfPdD2kv8MMn46RJJXfA",
  "key31": "28QEkxptUhhHqAvBfcZ9cGhipbE9QnawDtpiRoSLedkmjpKUj4k8KFfD2ibqGCJq9kqca2bnD5D8k8EUBXqppHGd",
  "key32": "2rSXgPoqzVeoodXZNeccEowqSyLrF29rPLUE3RZiVCd2UxgiiFvNQ3owhdm7jNKVp6j9UoVFTzbMp5RHNx2Ti6TM",
  "key33": "3KngaLNEFaDB2J9Q6ezD7M2MdtG68HyxYUH4ZnqYbdoFEpRt6EVL5NqX1cpwTxZMXtsx3v6gMBzCZTcjYdikYskX",
  "key34": "5y1Gzbq9UAXKFQnSnbTajxYp5os5eraBhUrAHDDBD9J8hzeR9EzL4yHLX1NFDGMsHGhwHvjLW5ntq55RmCigxXpN",
  "key35": "27WvHZhizTN4v6FdYcUqqEsVifrNmBa9VKHeFkDGbpxNKEYBK9oonLDxGU8z6eiPCziYpDyPZXn7MM7n4JusaFZw",
  "key36": "2ELVFzmfE3XUPZx6jgtPNhMqEzqCaqNTjvsLcRAupJawmQkJKsz8jVRgxxJJrudtwXarDeKqJxCdEn4EDvWiQk57",
  "key37": "64QUCBFfTateqr9B4pb49pk7EDKVjECdJ82kc7desE88FiEDmRxV4cb1taXpMTCHSbkMk6ne6N5G2mkU9W5HYA1R",
  "key38": "MwppKJrUbznqfV7SzAWeMUKLherUhb6GhUv83zSnJqmvW8Uv6SaEnbFFe92FVCxfwGGpberKU3wFEoqzRbiYP3m",
  "key39": "5TiTVBr1Z1SnQ1RJgTbEdEfEANuAx7gsE77ZQg2wwAFx4kTW3SmQ9TSfZueJ6enJrfuWDAasg6M55qoA6iaytJMP",
  "key40": "5BrJSciuzw5M6PKTZ1RTBuJRZXfJGFNS2Q2Dyz7y5j2mBqNY3CAGQjb4RgKUZd9ghWjqXiUo8aShSD9goiHgd5uR",
  "key41": "2GEeypToRj2FYDpEe3xyn8fxjVKxK9LY4mvM3nLUPxWJNT5M2jBJ37P99gz2KcEE9tJYFkHbGUKrmsELXgdUuHrV",
  "key42": "5eb6aVRMgoc9rQZGESTwgUZov4itZ64y8SCCmYYJCnMPbzfwQUqPYr5fpR5aTZMDBePEmongixJVuUkehHQ2VZxq",
  "key43": "3R4q8YC3cJBJ485ZZBurzpQ98NXqKAH716pNZrrBWkjky1Cpzgk2mgQeQzS4Bw5kfHj4FaG7twmaAusfFe1KcVMN",
  "key44": "3fr3qK6yrQPTyhzaQg6R73ZcgKcQRfPoXxouUQ1mBqMSwkpb3QtfFExks6uWemhco4T1yvUKfanDHm1tWK9iMnrW",
  "key45": "4mmwZ6uXdBQXZgpQK83vBfrPwFvo49twSckWZHFaXjqrnyb9i1KdTgVAHTbf28eWJG5UpHNtLRtKbCv6sCsoUbRd",
  "key46": "4sLrf2nLN1pRstpjLsYJoYDR3QGsKJFaGsia3JLo5FiPdRcYuchW6Bwj7gvqBQPwsizXxEHtNVyGSsZyk1ggA2y1",
  "key47": "2gegbMz8P46aepN2mQx3JEFznXbZzWnk4bFskuSyi7HEwCex2YnvbCShYKyCKXmf61bYwH5V1kQH9TGn3P4iMXc6",
  "key48": "4q4TCiBcXbgSDZsSMM6tu2sseEi16MaZGFtBmsbjFdGYrURBW16ChTZLG1P3UnUMQkKbA1kqeYYdaKYfRYT7x8DM"
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
