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
    "5NHW7npBZDApFNyKe96BQMbJbMQGCQxy4ymGibNjezPJVyZjYFWKiQon6YNFLqdXEvobv2qd4xYkhv9mbmn3NdQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dp9g7bEsYbrRPD67DDFQqeW3bSUcZvUr9oFAFNDXaDJxrmYxDEvE32dkmbLXiWiUuiwQn6jm4myFTHTLWRJaoS9",
  "key1": "28qHQKGc6zmwFDXsDCjyMgmqXKvXeQGVqDV6bQNr8ssq6Uha4R3ztF5YnyYDZ87NXUvZgxuWgDqWPPJn2KPnarcQ",
  "key2": "CRvDpLS6xiuk7mCbCZUyt7gfP5fLAgMJzBjQmYhqKhdxTh5vFGYcEQA7ZZ9QNczxeXdFUc67ZS1Z2u8tiDusFWs",
  "key3": "4m6g5E4DVb5uUknqrAoZUjKtaZYV3xE8guJ46krw6oV6zRVRF5qVWMybPmWYyoikFmb5v4pCsYDq3rbwnmUyUGet",
  "key4": "jpHg2nNx1UP15DrhySDBGd6ADnK3xoTqiNKpLtve7RRayCB5EKWpJkGPsYiBFWnM4BiussMjRFPgh7LbPuhe9jJ",
  "key5": "4vXcQZVPQ6RKESqo597zApykVZQLBEgDi8dpA2hgCwQey8tMTkH5HpcavFknjy2y8ccPASu5oBuv24vwUwexCmZ6",
  "key6": "aVDWuNnLSBP2Ryui9sg3jy7qvXM38FmeRzaZWgDSDZPSuRr1hELab49ArEgbUPxoTDaXWwFmyPDCf4AU7TBCPjh",
  "key7": "42guepxzvrouJPQtQWB4MKLgLuDt5Jiaj8qR6PeVajemtLKoBvZVnJnPed7MoWJyde2VQJqz2eMQTg4e7rw1Rj3w",
  "key8": "2vRTV16soLSJ6jjA1n6JB5ZQJBeKHwDkviLsd29U8jkA6C4xbn4LRizC1RvKfhrrTXCdo25MdEGvXvZicrAffsqR",
  "key9": "2qU64CSyAYkjVuzhvj6tr4EA3MqwKiUxJfLNnHXEUES6gDgQg5sWYtqEz3pJhag8o6VaY4hZRGhCkvHCTgZWzWed",
  "key10": "4oPpL5MiF3cmid1ecCGKMBMSz47q3JNAYq8LeCwq5XtJHnH88ZZevv9psz6E76Hift99gXK56QK18r2mF6ZcQyVW",
  "key11": "2Lrh72C9ycZ2VMqHG6HxEQgLFMYoWWs98TK4SkyBkZSHa27h3cDGtHjHZ4GzBh9H5JLLsLq2JPJt3Ps5VoU5PXAY",
  "key12": "23gMjT1EiLUYBQ82vgUBLoP6eyt5pBDBBXhP576V96t8RRatvFPjkfiqJQYC5Sj2YGLkpsALyjCazSiAQu3enqmK",
  "key13": "2jSBpNtWvjQqVBcW8ihKffiWYbu7SEezQ1Q1etbK3zaCH4sh9ycw5Sc8cd7pVMhrvZb1gVtmaBzya9vGvGCB1EmC",
  "key14": "q6hduecdHNTojNdBW1QZ7YDTdrDrYyNCjyH1xD4TokL382oRNfmo4rLr1sqarzHfRr3m2wT4DeembcmK8ZgKraW",
  "key15": "51mERPtQsEvF3x8ScqyjtUZ8kDspFUGasc3uG8UfLt8UMJKZrGK55govze96SwykawFxHxfWUrgyZ5QJoBKi9jtn",
  "key16": "58eVJ5bPSD2hpjeTsaQpcH34ncw59QPqPz65p6cH8AbdH92boSEb8mh1bXnqtdGcupgzFNuoQtjnmjDX9tQJfKhH",
  "key17": "4ZcEescTW92Gznwqi3FfVw8DG81rjBQpsAcrwMEhWmyiQiXXaTcQWY9W4DdAKGsy1FY3oxuLdCrW1t2BKr4sQ1Nq",
  "key18": "9TcLofgfazfLzyYouFBcxGnubxNzhuf5Rauknj9ZFUdVE7AyUrsnkjnNr9M3VhnJLxJbLDvN7bi1VB2fxTUehHT",
  "key19": "4AvBYWWyGXnsnAd5RcE2N1nJnJJ2v7BVBw5mihbEksJMq8ucdKDme8xLeetnAjLtkFgZiEL4ems5SsULBfZtjCW8",
  "key20": "674HaQowpjdCXoqme72RNF2Uy18ouQHzENezg1nefEAPgkb1C1eGTZD5h7ywe9r32nTMAWvvqkDz8iT9qnzvDw1K",
  "key21": "2pnLmDqLU9QgcfWAkP9BTQRsBSNKZLqoZbzsbE6m7gdRj1nUCJqJwuGcXNs8rkZakTuMAobn3gYL5tLPzkoeTyiH",
  "key22": "NNZpzMMDcBTCg8owFu2JHhC216bKssovLWJoVz9hedkvWE2BWG4GX1RkGzLP8nMgtE4A5jFzMpBXdgPXphXhE6k",
  "key23": "2gqmsqrVf93WbtpmimHbA1ELatxTxTX4YNDSVueva7AhDURH6Hua6D8C3c86iabzsEDoBoHxh8v7K7BsA477F1Mh",
  "key24": "3gSDo52Bxu8twn8NNYmZkyFSQ5GfRjxWCR1rLYYsYz31jXLbFFte3yrU3UnrRZoXWGD1KmeQ4iQxkKr9bZwwypmj",
  "key25": "3Z21m69KpTSgjDxri5htvnUTSdk7S3ouPiMjNfohQLUHNbATKDfBa4gSb2Pcj4pejyAJHUcMt2V4Cr9VLbsveSgn",
  "key26": "5nBdV9RJ2mjEkagwLsaSkZgHvaX5ZHCLreQJQdRykV9hvnMU3gehon568MNc3fyRaeEp4LQgTo4KrQDGrbkbnQAw",
  "key27": "3ukzWemxoYaNhRSySrpkaaH7znoohDshT5kfYnxo2wPSfBxSKjYs8ijhFuvdWtbYmRMQW4sexuaRHxGM3MLBmFw9",
  "key28": "5pxp8cCpKHaYS5V3LVui3anh8GBRrM6Wr9z43y5ypvXwRDyw6M7JLmaddtD5q3So2BjKymhxvPFUFGetQXL3R9pF",
  "key29": "aFQ5ADRhPo9EJzXk5dT8XqEGZKvugt1WU1pB4SRfaoFmABnGoRPnoQ1MWt6ZFPoTDkfQeSGeESHuLpXWUL5uzvv",
  "key30": "5GWswUrPrCJBkeHAsxpeHLENsax2M9jN7WPA7X6CABxSrx7x5CM4m9yhQvodPJoKUTRZJ2mjMeSaobN31dmZnkCN",
  "key31": "2eZBMVmF7kFABnfuF2cLjMaSYEHj4ArdCVCy2weTmrZcT97Yg8cyD1SRmYo7YLdvPVswnvjHZVwvgabTqPQLhcUS",
  "key32": "2ADsocQzmquhBeuZCJm5B2i4d7UcBiQudEqe7QhnrrugQgKC4zcMBkZfYHzrMVzN6AvpfdgiuoygQMGJHeTpAK5d",
  "key33": "5Gv5YG68hkjFrHDTkUZVgJhUBTHyN9BShFMt9GQiQuqUiYTnsCSLER8M3px7wV7r6H8WJKwLbbLJVoYEZ9hMQUT5",
  "key34": "4KLNAhRJB3fbRrSZyqigcQ3Ee3QtSpacc6cTK373Dfyu2BSmq1vGw32vEXwWCdgkdM8qtLxDr9w3i5tgV91gq1cH",
  "key35": "pASn45rq9AqEGFKNSiVsi431BTZVg9tF4fpHBuEvBZH6DusARsD5XNqcuaMHesM41KdVm2afvj4rQbvScUvoMWV",
  "key36": "4ozbBXvMdbdxYWGHmPkP7SF5hx5HyoEeaaao11oXyibLW6DpRaYBpoifYuog5bUNMajRxNyncrbLvBFr66xnYPje",
  "key37": "3uXUDBheqCCwqfmUyCUeHDbnbNoV4WPM2JhSp2k2wabewJD9AadbiVthqEN8mNeQDVYnLgV7zePPj8a8F3XE8RR2",
  "key38": "2Qg4Qx6szafiz8gVdeDPGo3acsYFzU47FNifQ2itXnAifo8XLqyGaVhq9x6P3pzWVLVc2p9DyYmDDNHnUuSpsEkP",
  "key39": "ueZxdsJsHb6QSSaHxo3Z6BDah2kQzFPY2ewxmLmbPZurJyMPj1mUJFAMkZDPinmb9siDpmSfQAXz4m5JXnqkEs7",
  "key40": "2LCxVAmWa5Ze9MLJMi7cGCkUpsrP8NDVjDJHgozQ2uQiBXqB9FcRGoPjiKdpeUJvf2rLKXt2eSgrAq8i66zoqbq3",
  "key41": "2pezetXvTxi7WZ9F2XbnYFTg3P4TqMyL29QAwdnQaNr7TMLdKyKLyMCVn6SebEH5Q4jZBJJSCJLMXzSQGMtJ9Thp",
  "key42": "cfdvZUxMARBmjr1qWup4MUJk8o4sKisUmRmiRQndaAQXCYtQdre4uu3LK18DjnEFesCvEg2SavBt5E2QKV6KkAP"
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
