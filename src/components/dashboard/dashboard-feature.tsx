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
    "3ckV9NgjUQNwgMpB3CAZwx8CJkQtgxAfHz8nHhGhubRqG5sfWoQiF1gccJth4TH8HnP6NoKNnnhkdja83D9maLHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H434KUYLyxP9uQvf2v1WyKs5VXHZFwerDArtcrTvitSXd6LRghVEg1BDrTCbA14SvUTz89Csn24ZpKXY1SGrGRe",
  "key1": "9rzefLYdusmFooCtZBXiimRo4QXUPTaKbRUs9ahtmZJGPeQmJ7ckoSX2xoWyy1GWh2hSFH1HNGuE3E5dYfLTQUX",
  "key2": "5so4tyjxmsbX75Sh5eMuYoNxFdLVQsaggv1iRttGq9F1UkRDg2KU9qy4fJwKGA6ZNmhsApqz6SUAUHZgAR1DctqQ",
  "key3": "3wr1aHjeqjfQdhijzfneyqnbtcpMB2Nnou4UEQAxGWu4GLw1EJfzMVqZUdEmxbJ5LqfxAv2d8aWmVQHZw8APBofY",
  "key4": "4HzkUNySHJF5VXcrLweoLsTvGMDyeoXN8WPXkVH4vqdVFPVGF9egJPVhqWM9JVGenCtDk6uCVFFbB31Tupyrf7nw",
  "key5": "svpByDMEWbUoyVBmkFvoYqEvsWVMqi4GjMF3TCAgCimHN6JRBLMg6Ek52yY86p147Jn5kE179MFdmHPDcEKG9EP",
  "key6": "5jY25NaUJ7T5WKzBc7atp1gge6wEVbvZAX354Yy4AowjNYYxbGva9jWXQYcbp7rUeDJDUmMx3QutS3t18X82afdq",
  "key7": "3pexUspby7N7D5xasS74JjdEW3ZycdTxZAX74dAuCAaTwhW8VMmAxCkkLZz17RAmvfVBPVteza4V6AUKKvfVp78z",
  "key8": "4DdGzFQnijMWYPkwJbVX2T5t2dKJuGuJN7y4LUhD3TcwBGu1eMbfcj4iG1wFyn3NvgZZUzbTZ61tc1zoAxTTtrum",
  "key9": "2UZNbyXeYSgwX437HzC7Quejf3AAd5WuH94gAtYdRadUSzv1ZV3VLbQVbhAEEgWXNwLShJYAdtJvAm1uAAAJSfyX",
  "key10": "395VmpzYM1HrxcHZtYtYQwxLF29FCCvzvs91p1R19T1E9iqvsoqnTPM8jwLGenvLQ8CRV3y4D3K6dVYBUswoFVkf",
  "key11": "CcZPno7tobbumHMo8R4zAjEZmGTczDrEnK7KzJeVVHFmWaNHpc2GF4QK44yqMGwvSWn5hrGmMjYRREP9wMmKm1v",
  "key12": "4QpACg2xP2pPKov88VUNumrEHcQrbjQ17BYpA4kfXsaZVGDf3wDNpXGQMFjCEPHuNed2GF3Eqgxz2sXPd9cPFKkk",
  "key13": "YdLpzAkAU1GBZmrP4SgAeCYFso2a7Mk1hBpskA3SBajVyr1mnd34kvrsXHK54HqxT4LUH3tY438Mvkm6KeqiaXC",
  "key14": "2isdeqmfyyhuTDeURUJv1Dap2Rpzzx1pApYtbSJvtr81eYSqPtM2YKLHLjNr8kRtV6BYYtqAqZdaKi6mtKdR9qLV",
  "key15": "5GegwXGMdam64K9Sk6MSMaTwPaLicS1PFxdw4ZiCjkupqb4kggZNrdzRoWGa1qt26YWEdzaWWZcf2SbH5hRypxEJ",
  "key16": "qEMtRRB5QMawT99mPkoPKy45Rqf4A7dAUtMj4Cu43Qqd2ZUNUccdj25eiyLkeCtTCWfhBFTPQPmvUJYkYkAJphp",
  "key17": "4dxZQfNATTsdk88nwsx9vuwiqVYPetN2r6JvExnxCCJML5RN8dJKBdELsV9UqLzUTgjHiYVDVdtjPoSiL5ZMqu57",
  "key18": "3vGknLJrEWcTJnBpg6KDfXwChAV938XqKj8EWyqdamRYQ9xigjK6v6GScFQsdE9cJA2z28QiY4nBTJGhngUxgeLy",
  "key19": "3Txx4bywd79A8qkfGZ4Gs26hKdYxW5D8HqTW1LDqe6yxnD7TK7J4pMdvhxY2YWVcuEiMHv5qLWtZo5SvioPYHFfs",
  "key20": "5rRdE9ycjK1uFFMWJDF2zoRjKkG2FF8ouJfiGgzs8ehE4gNDZYp36y2MEN7EjHstHyM4LdSs6juCNqLU7LMDeATN",
  "key21": "4vKWyf3JSHhTwoDpxHtG3UAcAiEGRijSxLqsA1bZrrtsVFsfXH7YNokkMEib82P5faJhQT4GdXsTDueH8qFzEhLG",
  "key22": "izEvbwE9wTuzkK5ap5yDGyqv5pZiyMA83MPCbzokiErrDm8Pz5xox4qFWBgYNJg8k1sgFPK5pF4TvC5paAcxySU",
  "key23": "4wbtWHpVv8Hsr4HRjP64f8nEVZv46UQnBvjmbv4Trkup1LWSe54UJtMcCV4eNr3Pprg3S63fuaChkoHWQ1oYer4H",
  "key24": "26kwb9W5YKKqcgPpBQ7dL4GMkJ7nvmZxXKKqCrr2SqyycMd4JGRoyo1RMKKxUWvSsQ3JuFffqE7WdshfD3XsfTxe",
  "key25": "DBsgjvXf7N4g546JXXLyKJfe9YQUJWA3L2UWfegEzECVA2pskNWbg1TAnaKh5vLwj8T2WbC9nzQ5R6Go2uhYziq",
  "key26": "4Vs2Ujy4CN5NhHqNAR1p3f8taXDTBxaAX3LRKtkdHyTmqxitqdURCjQJtRxYq3Tb7U2p6YcKZbxjWVYx7tQZqo4m",
  "key27": "2t2YStjLKrCErx6f22gB9Mb9EE5cJqirK8xc36WGswHuKZNLDX5MYMZ56uuxVFCgX4Sty33qT55HZ1HTvczqwFia",
  "key28": "XWjAgnEfrfChSJx9QyWMj3NXWfdWfPjdWUxk4EFbJoxt9Kkb2b88KitFUGEXtpPZKQ2FbZrZgnN3L3qqASPbpok"
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
