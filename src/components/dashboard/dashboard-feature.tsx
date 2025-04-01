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
    "4ZJDGWfm69DdNMou3LQT8FxFdXefdCFStB72umG7AwcrauHXNHat7B9GSFft3vYBNBGctGyAcpimnfA8Qy1MzyGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51GXrqRqW22Pto2aFVFduAUpCtgbcQxMFUKwnRC545EGv9XKJR5MQqfJ63Ry3SZ4WrBLoYC1Vt5d9k1AMtLWFhBr",
  "key1": "3zmLb96KmE373S4a9F8eZyp3m7F9F3NGniTprMHsbR2T2spJvfMFNDwm9dCYHg7TgHbeTp99D92xbVA6JuB5NmSQ",
  "key2": "3fsJqN7QmQ8rtuPekH4w9sNu7Dvo6tZYtiHuwhQL7E38p4GVXEyfYu7A6gAyqvvdcfLzJiRNfYKdwru9qr5xifR7",
  "key3": "hFsWC4keiEykeqBaRQeJpGqrEPQ5yKTsuFab1ucdKEJkygyCWzu4SFUYZauuSeE3WDLzCpRpvxMGm5tfrLAvKcq",
  "key4": "3Vto5CiaMGcKJJnxR5AAiDgWUZGnEVnpnJQP3hDG3cmpP4nBqVzEnt2qZRQiRLns5GCKbVe6RuCzxfAqGmAio1pz",
  "key5": "fuRecrGB9unyr4kECiwHGQWWHbeivsV8jksnXUNJbWJBeh7tB74W6WJBwE78Se1MrQXMy4peEyADbW6b6YTPBUG",
  "key6": "WeVJBVqH3wvYPMYfaZZ5s72KM4t66jsX55Vb9dFu7PyVMvyTVRPa9mfU9JDen3uB8p8Mxh7yWXYFukvFvrdJ8bT",
  "key7": "N5zNCatUevKxbLy9d6AG8in7uRvYGb3DrMDPVgPnrJfKd9PfU3JDYNGaTKfjkp5LmRTq3KQAkcj5mK5Q7UsBaEq",
  "key8": "3V94G3bscgs5TWhJLLvKq5UgtLug5SWFxPwozUo1X5mZcCJXaFoAxKPmCRREAveuq1xwy1DF6cjRcKY7qL4oKoAK",
  "key9": "49E8Lhh4nzRZ5cr28NJYC25MLxEQmJoMZCTTWLrbGJ4er3WxXeKuE5miwXXJRBDD1zrG9PqtVdQKHYnjN3wKJzn6",
  "key10": "3cA55jF6X1KZJtd59sy9dq1NYwHMYXYZUXyyBKJiZpGxRQat9Sr5ErbSea7VxzbMUtzhiEEDgeW54QSPA9MNWB4x",
  "key11": "XYuHEy3NZG3gfRTiRGJTZx7oZAJBvM3jRgFjZgkjWno3NcKqFZAZfbfLanfyij3SPRAq8Uhs9gfeGBL7YeeFrRb",
  "key12": "5jWvw2ZvgcDqcW28xXPTXUe6CZferihxRvj4sZbfHA1fZ2Hnhif83mQzz2YqaqTs5dt8i7UhyBKhmSrq6ZHab7j9",
  "key13": "2CPBqgKeTi8PSqztC9VovNy9nvQMXTLJ7aEcSo4o9BK9SE8N5x3zveca3LNn5RvfV4v7Bwdu81ahiKAujwj8zmjL",
  "key14": "54GXb5SGTvtWHVD6XMDV3xhHcDYJNUrL9tm8uZSFQtrpCoRQjtf3TivRWKMaZuP1vx5BhQMhfqfn5jKdH4iVEujB",
  "key15": "5fYDtyp7Vg6fhxjm2u13qSKeDjuc1VHpX1LSzbqZpFuMzUAGzSQKyMXRxyrUHHVN26iKTMhpUNFh3W5VXpHdudCC",
  "key16": "67kfE5vzePGKViL7j3DHcQSroyVxEdunic7yEsBYgipDVDMiRc42Y9Y8CvByTNjB2NSPTLnufPEbTmvWd5CPU4TA",
  "key17": "4cdbKg7gFMkqTFtY8D2k39ytkbXh8YRqH2jDAqxAGgwuxHi2c2YgGyKJ6Bqt4zLBdzm7mJS1Te1toa6j6JsEEFK6",
  "key18": "UXG6uXDpjvB47UBU862kxn4Rd9Ux7a7X1ixqciGcTTCBj4EMF4wqowEtxQ534rybVbHX7podYAfeoqBhP5UwC39",
  "key19": "2sFKXk7HNm3TaXsd26p3FCg3CtBEbx3HujdeBcMrDSsFWGhDan8BmBka2nQ9DPn2A3S6wv5dQE1U5KEWuT1pEwLv",
  "key20": "5pVQqoMqWdEyZqEnnGDQm4JtRhoDedRGWviUarxs6n3257YKqE7xnTA6iy1RTfuF2G1srVV8mzsGkSKoMrksLKBt",
  "key21": "2u6uEB2usoZt5aUJ8S5d5nyK6UVrzFathZcbRCuQt8uxSxECLAzsP3YFM9D22FqWt3GmjT8MY1E5xaZuRjJrqvF6",
  "key22": "ep3AqgJMFbvnQonKqFGM2qt5NxdS8oUd4FHxuWKWR65Aeju7bpQ9Koix34ajfUHskPTdD9zPj28fKbGs8T5yfeD",
  "key23": "5LwY97b2dW54WSM11eP2UPdcykWF96s2gfjFDf3KapXymP4csMX492hc2FuECF8Cks76iD7B1Lwkn6cCA5F3AnTU",
  "key24": "2oL188hsD6BknHmeFms54wE1Y5eYGpZXHapBQeAvkxixmvUvRWMLH6PyGoMNWszBzfc8AC1P5DHJk81RtnCjJP5i",
  "key25": "asEsdKUEUZWpy3j3Z1L1Q8DFkSuQCsJoyqtoaRTXXqqWLgBU6TnSeaTHq8vMmBg5hQvbGkc22JE7wSwZWVw48NM",
  "key26": "2BE1fYKxs9VwHC5VjVb1UjtKCAt48Ez8qczRgMMoTk4rKmcbCZi8Z8kTPW9zPLs1BSWy4C9kzc787WW7RyF4LeUD",
  "key27": "hPqpfSGNg9haN81b4wPKzjatFS5ctiyDUQP3fQN5PZRgB8F1woGLMTuqZ8CydgQPMj7bqxq7o7TxRuNH7kxQizg"
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
