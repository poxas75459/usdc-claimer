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
    "43EBRBnGWLCPSKmqeREHyqK6CZ17QkNnYvKrN7dwqjy8ck2HGxYF9HjMY1fGc3Q615rz9JjGE8h559hJjNVkVKPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H3rrso1qeftmaQk69ucDEpGGMYbkLof7VSwzpCZaYMV9z17JsPBk57RbPeUfUikmSnBzeqoBw1sUfcFF1bxLW5m",
  "key1": "5pbHgFNyRacqqF3DzMF1uPPtGyQhybey7D7ryKyEzYpyEU53Xnn7JRYZLoh4iKrtCrRrx3WBDPrmz3bo2WZW2JaW",
  "key2": "bmpgemjJ6QqWXyRsKnXiKiH9Q4kwDyYjEuzbDwXVGBZyo9YnSAHBrpkHxG7eQZfHigWLFG2WzQgwJrYZRg1wh9B",
  "key3": "3L8SU76ku6kRPq2BEhco7rhSjfU2npoa5miAwsqigS3bskV24L7Mia4te677HQfxpYiT7Vdkc2rGwtQMWBntHUUX",
  "key4": "43Uqmp6fAEqDmqDVKsYExkRcEa8KqWtafzvYjZ8nTgNC2PfUBrigf5RmYLtzopwYqdt6t3VFR4xWdAhP5eKF5WVh",
  "key5": "5DHWv47p3rTd4sZwQBcnYtw33F42fRGs3hmsbyWEZqhvfikwQC5jieWLxJP7qtHaLcMjzCf2kpKuCmgwECBaEZoy",
  "key6": "5ax5E4WTo4w2vGkbGrWRThcaaNC6PAjHkY4tBs8CmDQ8ZvDN71z3SCs6R3AVf6BZRTpa9gov8Gk6YoKK7ojyiqDH",
  "key7": "5bDdqzQBqx1yQQ8zM6VssSdTDxvnyAxNLmecUvvRRqC83qqM3FyzCmmF6gLwMJxSqDbJrT4htZ4Qob49KZPWLyMH",
  "key8": "27K4vJaJDZkGCSrdXrD5rr3Z65jbtNdXwYC6Cz269oWBAR1yWFNRwHP8UiywQmoaVa576wFyhMganTh5P3dPNeAW",
  "key9": "2jxrfAYTvi7RPKJ9sybsjRUfBkYX3wAz8e82Q5c1J42y8QnBVk5tuUK92yFjUZs7jJqWXzAd8wTbUntK2eHMeHxp",
  "key10": "2WE1NTHvvyUF8ZZKHh4RvMHF3epkXUCyF2iRiyp8stAUHidwFPykp6QvCfe6kuPJJpibqjvhBfvBhTd98gtqzu9N",
  "key11": "2hbZuNRghZoq2iaBQpvnbWNFx1pT2Xm9DZS3jkR2seHML8e5MA2qcmpY9Vx8BzdWJksm9fpLDj7Hn4syLqdv7LhF",
  "key12": "4K1ax95JsHWejokpUFi62veUCr4uifYSkbd2beZvCoNUcSFneeZr6owuZHFJXPCNReAA4gacVynpv3nQYSUNz7vm",
  "key13": "3GXZfAR1N2HvYabDnPxaNHQNjRU1MwMC4CSNM1iKEjzF3Uj4bdMkYox2pcF2yiacjdCjjD3esFjTJAfXE9R7CPpa",
  "key14": "2n4arSoDUBLwk7F2DLcAatuPsGrR2qJFyFUwRY1iiVSwtnvXq1CjNxAiyiU3Nw5sfKXnLbnJoCwVTcjAsLs5JoX3",
  "key15": "5Hmvm8rMWsmvNs9hAosxwf5CGNcUWsnAZusq46rQHEnd4bAXkgnGP1E6aufGU6pyEdwYTmApVpBLzqdRfK2g8SUw",
  "key16": "2wKumYUziEsZEJizvaecZCFw5WNzswMKHvB4Y1asebSjbujfhRTzGD4yReexhPM2rsRyaLSWm9YYC9Nxhw5tnihQ",
  "key17": "6DY6U4n7TavD2GZ9WmcSKNNwDexQpfTyzBJsDEJfgehADo9w68gCv5hLTSiE8FLmWCAwtvA1BTAoceHb1ftCmcv",
  "key18": "B5k462JpdTSAqgyoiR2MMSGfTjbaHeVcyP86cCNj13xa6BPvV7HUmYXWnwmcNP4k1HpCi4Z5T2qTHyvckhRchXP",
  "key19": "7VWaCW7PMxzcwQhZVwzZFa51mnGkUhvGQXLY928vh5mQL3bKd4BSkunnUnXfHTFixqLHTR2YAh9FAjNMQ37KKuk",
  "key20": "5mQgDXPha3kmsk25WYiy5q7QsYm9ve2i26vpxhi7BpWRfEpD845Y1Su9ttRMLqVcFZbA3frasj42CcCYduH9oYrS",
  "key21": "2Q1CVjNTiMC2NyNDmdx4VNn5KK3uErab2rXQYJgsRgzW2XW7Lij1qMXXo8h8aes7gd9r7sREpDBo1wsbGHm1VDRA",
  "key22": "WGC5uphp1VW3Giz2bVZUUzrQSLb6QM2HMVFh8zZcugt2xkg5sZDDg2sVgroFpk2mP8uBQtwLwgeR6YJShECkJvB",
  "key23": "2rf7Sgk3HBfH6zmapFU3mzm9sbdFtPMp6yJcC9aDjDCjwxpR2Fn7hnj6G1y2zwN15psnBctMm8n2Sfgb3vhHrhVM",
  "key24": "ambZo15uQRUhZ2iqvcbR7anAZUSxSp18aGm876kFmYz1KCXBuqJr1fbPcWcG5pX7q89cpT4sroz7LjdAX5s4Ahq",
  "key25": "9TNJ6mcZYWRbxDG6kMgUbEkHnEVgPZoTiyPKXtos2AyH3H4xAefFQ8V6BU8n1qhpygKqHvdi3atSaZYcGUEEdPs",
  "key26": "5ZfT4DvEsKYEpbaQ4wS7uNiPG68jXuQDV68dCH2QZDbFNZkEcaq95JTB2VY3u8qth5SNfCahHrC93AWKR1hewpzE",
  "key27": "4ZjuyHsbSiJ8BgVq22As9CWEB4VRJPbNNkMz9sMJMTNzvkNYJGvViorqT9LeowwhHRRGVWsJoJUaewucpmLdnsPY",
  "key28": "5UykpDp2r8Tz5c3jNMv6SGUF4SKxD7EP58MNxdzbCcts1FPiarvGFfnece21PckidNDdGcoJp6S8bgnPxfc4FB64",
  "key29": "jxJsZx2X2vhfxpFk4h672nW8ztKG7ezeBMg7NaoFhHVmcfcUU3Lw6vegCzjGZYA6T6MFZB9yQmkVeLFb46ZBwYD",
  "key30": "jgXhNw7cXAETvFNwCdBmqo9bNrrFVBGiHoyEXeyHXLbm2CibdmApFwJoW5eKAA8LXzJKsQXoUsWTzNY3Wu37eEL",
  "key31": "292VsAR5fdbWqNSsAXGsCnnAsEKzYaBgvh8f2Dx2mQvT3pqFG7AnbrGfVKfEz5PUnb8rDvYYgEbLPy9CoNnkFXbC",
  "key32": "2ktp9iUUeeUdozzvSP3dzktcuK2q1gLz18zF4U1B7Q4zYHpbi2ZVUWnMrswjEWsU82sPsm4GhUcMRoxTUxqnWq4R",
  "key33": "3PqKQudKXyPYdfjhBMVaWjm4FtsBhuDnk9sgXddhQdjTC8nQLQQAZYHHSjPqMHQJXH5VdazG69FkYLEEz3wmMH9p",
  "key34": "4XTkPekM41oW4KuYwqgYCNtSWntrAV63n4Yyeo4iXxvZ1tZXWPdTWHLKCdFeB1yMXtGLLipRLQQ7CpQsxq4Bxcyk",
  "key35": "3Lt8oU9dF83C9M283hmaawQfh6byr5E3K5hEpZTaro8gzhnHKNqnkFX7wkL33n5ozXrXs5Rijmnzma5NtiP3j8Lm",
  "key36": "9jFyZxaJEsTM9CNQJNyfCSYXDbuhquF8Zy7t3sc5WE4onz6vxwauuREmw148Wz4cdj4kLqHaH96qLu51aTiA8Lv",
  "key37": "4EnK36GGVk1TUgxaWakmarwE2r7Gw8vdonkN8TeDLrUc9Me6KMNerTVYEa68hC51QQUWN13XYG8dxNbyTVoStQfy",
  "key38": "4rq8tHLMJHix2VCWoMUSragRdXSVpDqdoZRFQFvvHAwjDbqVwBDKepXiMdmRLc6fAt99N6NrMWAHboNPyNgnGvoy",
  "key39": "4pTGF6F8ekSVmqU7Ubt3eyDcWeHeHyvpiY7CTzPc9so2ExFqgwAUvykeBR85hrLDqSm7UzHE6ZHcMyeqSCX6mfev",
  "key40": "MU92eoK7getbDiBYS5Jg7L9Bx7yrtGSgUpzsigzWZSEQUdN1g9UvwmX1AauxHYpCQjNZoYCze1d8QA1HxeNoeam",
  "key41": "G5GFRBwsu49971Pu2tvab9uTGwcSdFGC2QWN9n1BsHwnssGps4ryitsQye1c6ogUjyspheneTAEBVrXFpdeCV2c",
  "key42": "Y2EGnkeDvWwUo59KVNRUXrqsizrhp9g4V8Myevx7Q6YsZyjwpUNZ2mn17xCukDdSexLagqSzzM91ZuiDUJitdyz",
  "key43": "2Rq6AysQGmNfq1L6XNQGueoJQKfNXTSYeNiHpfpFNE4cWTrCicCRsZ19P3M5EPjT8zYW7zQRY5S9hXo3aSaBpGvv",
  "key44": "5bUrK7HuG4JaFasnAUeMHSbb2Hf9FXk8yw9SCuoGLA4v4g6vTDNbmKdCn2bEHdECB8cMnofvDNoEn8US7nhUCcyz",
  "key45": "3hw1qzdLEX15C4aZJ3upsjKVwR2hbdef4appchYB29ZoLCtgcLZEvQmtaUJsRmRDR1vUqezuFxhmWRTYX1HAtcAj"
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
