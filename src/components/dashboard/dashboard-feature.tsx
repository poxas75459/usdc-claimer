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
    "55ehF2xra4uoJAzSh9dknTF2AqrrD4dMNUre1vhKXkztDBqynB4W6ZXANjz7Ch1HA2kUraxRn3MkQuhA6aLeck9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sPW5TxrmbU5oSHyeSuL5qaxMV2enKpBQh6KcbxTEF9Kb8tKHGa2yswWa1DkJFWZ9FjJEWVLgUTMDG2472jGywkd",
  "key1": "442JWTKQNyUUFNrCvPAcPMGDK13ncyLabzLGKDZKCkY7U3q5kk7L5g6k3faKphDrJxNw5U5xVVKVPma7DzWRo8P8",
  "key2": "eRM9XxGRMAHa9hwqsh8X8em1PkXkQLMW1BJbY19DQV46Gg18u47B5EFz5PsrGZP5xAA9WWRDpmEANWDJG3wZwan",
  "key3": "3sn2xK9Q3wZ951jf2yrawLsGY5xtsySXoVFm9BZL1fM7DWk17otJBsjkzr4375J17LJpPKjUnDLyKcT3SYgHSuRc",
  "key4": "5br9wuH15Jnw16DL9voNyedqZ98ZgR7AuktsTm2nSWgdMUL4nmRa8FC3MiN6HpdfYyzDkXyWhP1LbKhEBRbvMLB1",
  "key5": "5dm796XywuT9Gobjo6afQ7uy5YjNZmJ24vqWFH1kzTGh7UqEjhko3oAZtd2qLJFknbr3dru53nG2QpEyyZLMoBVS",
  "key6": "3wR1HUfJ1MQwdALG6qo8bKbcyoJ6an1uV7RTFJ9eqNKNAmz9vkMWTuNMZTNoTMBqLkanyfRE3s57XSrotBcjPX5R",
  "key7": "4WSDJaAhnKuj7RqFY7C4QCMLds8ca979gEasGEf9XcTTbVEc4gd7VM8FYsYnhH9ms21obbLtyxvUxHeiMtdBdEHP",
  "key8": "5yeTgdZFVb8QykjBSHKT4Lm6Hy1kMHh2ZL4VqBsLCCXAaBt4FXXR9pfbwHU6x5aLkrghW6v2rSGY7kkQcFpV8rbA",
  "key9": "3RhoEShcrn4GiESzPq9YDRdgemKvPnhwiW3SeMLiVMbP8NrAar3tcVsVmakfCzryriHB9H2KoWiYd1FZULbmVRE9",
  "key10": "AuUmKFtgmGSLTvGCBffBMFQJo3cSXUPuNbfREDzu2mSnNa6JSSZcih9najgzgCPetnhR8qWPq1a467ezgd9UHbC",
  "key11": "2GYsKQ8eUqrBwyGprqXZptTDqzk3SNNLQ26AL7GDfZzHqQpyUZmbha7Y1w1Y6j1sHSnDmZi3uvjC8gS4Gh3Nt9bP",
  "key12": "5TwWMyfTuwwiJmk7eqcBVahfEquBJ416PJZZaQsBWJrDn2rCtFTdiUNRedYugvqPYw8aa78uDUpKEdbAeqjMGY8J",
  "key13": "hUUcLLtuG5yhnV8kZun6Sk6wZQB33wcp4ZUuhSxg5iXaHsU9j9uFwy69YeJYPTWmBT7VWEELxb7bxXn4gUuMr8t",
  "key14": "5RBohorSqpVuJutYucVzGMxujTSexgQiet9Ne5BXuv7Q3ZLosHaS5cmMmmuFfwfET1jLHsJ8TRDuUqhowvZhvcj6",
  "key15": "5pXL98MammQqugWqCsYBAsoJtt3G4TapSe6W3BThkhFJ8oYBx9xd71yre5nJsRYY2skjjaiwmTio52zMFc8NDwCF",
  "key16": "2HwQNexkVNB4j8dvVec4h9scM92VNN582S7ehr4b4tpXyVsjCR1kgeBoJ166ij6wweaoDfX5gHVj1iTtHBgk4f8n",
  "key17": "5kwJagzjFYiBgoh61Tv8WLQP1FZqACoCbyTg4sc1NBGCrvh2EG87VT33SHB2D5uuyouavmHUsmPzmnJGH7FFNU6i",
  "key18": "3kLHg124R4NR5rkKog5vs9s5gw8dBj4UqY3PDD5vgsw6ik6x1MBGj4RJB6Gfmsay9PzfhQSbJnjtFkk8s5QGxYJj",
  "key19": "2CPyK3SBbSzHmZdLSRXySyQw9gSFCj1Yic7axbRdd28gWrRpBRmNPMxotk4UH6aHL7UoWo52hXfVtmNqCW736qa2",
  "key20": "3fpyvd7Gt47Q8AuyrrWYnpfSPyey8dhbEfayG2s2nPj2F8tvAUTTKCoJrMEjNwzBMd8gPGLAXDUZZeiFjQPkMd5i",
  "key21": "4H9o5cspchn4Fw4bJJ9WJjePSL3auKu4Huk8wRTKdjBeZMwevAfmKPVKJ19mdHqnN9PXHvTjXmXMMmvgrSuNCaFd",
  "key22": "5LuepbU4m1zXn1HgVYcZKvDqPTZT9NEz7EmgRarSbWVPBV6CTR4XnVwdSiQJL6tomm7232UjGeqrWS2J6Sem3AER",
  "key23": "4df4B7hnF4FaVosg1yzBAazJfci7Uz6yodwt312DeukU7xqvQooMNTWUGU2UMefAdteTP96cHZJWbQX6torzJcWX",
  "key24": "5tGYMCVmZNWXfARAzf3PN1Vh9qP53hzmFeBzTLfMPQtJS2tVNvTroWwxzb73NvyxrjPKijGAbf1mwPKDYxYMBGFE",
  "key25": "TCvFa8FLV2HEnCiGNYvM34emai6x2xsk71tpCmsKwSvgDGF1qYhFkj2snjqvWf5Hui1gVNkbEvHfVQE1FY5TPy8",
  "key26": "2DfmvCufTfpLDbRmzpTm8YH1nTZtH9svnFBjpqNMrf6EprYx6PFajN1PQzR5GENbUpi1R6Nj69Bid9xNUh7ykARU",
  "key27": "9sqqsWwRcr9PjPMGWdB4whdDF2XDGp3FrhJc5SjV9dHbhm2oMiXpFBJYCdT7MMmUTzEUJuUBwTxCjXqKPaU8n4E",
  "key28": "4SovsQv8XNd1UQZfoYjpGrs7jHGZvNfkspKLkH1d6pXFRQqCiTZ317jtB4Dw8EoF45qR4D1kGBNPmECNNmhHkKH1",
  "key29": "3y3Lp2SaoB4NbCGXaHRyiAsCaE2swi469jMPZQTr3JCSuxqCgcAzdsUZ8ACbrBdQp5jfcpgRNF8ApH2uXQGABcDR",
  "key30": "fUa1DRDLdSWfuGHNxpK7tu1yKJe9soyT5jq82pjTceceHAQjPF1PxuFxZa2grTgnXdLAJazyRnViJudSfvtDeP7",
  "key31": "4izhSMjw7gHzX47xMFz2E8ToJU6wFRFWLyTGkWR7Qo2VR8qUCA8PX3SZuH9zYqL8yoCDhZdXCVZ2T9amDgXh3wBr",
  "key32": "2oMSmpKZfMNAyb49orqEo2MhwSdYJfhNUxbNDu2hkHmCHhtA1Ce2pRiuPGkYzwE4pDrR67bezbFAL7nJM2ynzjqP",
  "key33": "3baBJzeGTiS5SFi83oCGxxNcXyBYzBg8PoQ4LUXwJToTrJ7WPyfxoFAjDJhXSArT8HJJfT37KjkCx7LKJmCWRyE",
  "key34": "qbCcvQpUZyqe2TDGQaF9R9Lns9PfZ4hL8J2SaQdpXKp7SrGwTQBmPB3DKemN6ZBs8ad5SKdnR2voUUQZokxjxjn",
  "key35": "eH7tNJBPnesscSbgEYgPYCThrCw5A7MXeZomGcukwcftYLwcbZMj1isnVAGYiqQX4m3cXjQ7pqsnE5SeDn9V1WY",
  "key36": "pH89pP6WPdLSx5GUnn7hYUF6eYSR53YVc5pdcUHBbU6rq2KznMCTNC2kT5nwjFrivC223q2jhxBM59MJWrvEWF2",
  "key37": "4zSm8rHtz3UmZpa6MJ7Nq3F7TnBhfL8JKMSWgNYn1EzAX3C3BC1C26KpiLUQbm4coMiYXFgAkEnkxXbR5VwCbD71",
  "key38": "ih5rYg5G3t6r8h41HfhPPLRjBSCWhCD7JFt4CArJRcKyXHEwegTis8g5iiz5fAyUYyurJeLfCmbAef9YXYLqgey",
  "key39": "3EuHhGz4nbKT62TNXfMNbS5JdHp5HcL9vD8PFcmpUXYaNku8fRm3vR1fSUjmKKhTuqrPejbL7PsZ6u5YizJddGHx",
  "key40": "L88oWnDzwadz4LnknPg77zGC6PrA1PvNWpJKKwzSgGAj5Ka8UkQR9Bpn3AsJsmKox5faGCq6f9gUWB8hJNdyjkt"
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
