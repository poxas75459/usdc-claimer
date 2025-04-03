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
    "VBw75Rfi5roNtNUgKvLj6wZzbB1vRCHeifJeht2YLjU9zpBG5wMzFyA2dK7szf9a2YpVmSzjbaYSLMyVU6NtK7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e75mTZcrTYeuzkNJDg1bwKRH6ETJdtHkQvPZuLnmwUurkK9BvbFS8WesgNoyUY682xVxj6LT2k6TZ1xF8rknoMU",
  "key1": "2XRTHdoWeKcuopxPr4abqBUENEzgEApZpMjGnboooCfLofQcbBCtk6EeaGR3EMeXh815W9K9CThfz7hRwnvP6e3j",
  "key2": "5B1dY4WCP2GpA7TqA73ezfHctHEKfrDXyQ8xr1HtJtBVy8TFEB4PTTS425ddmhnpKjjvbZ9RQbT3GdDPYQVxmyja",
  "key3": "3X1FVooTMTYbUMDawaBrmuNU55GW6tEUnSSXjLpvaSXULZDde3P7JZN3qixMpXphXmw2az9nc7uLK5UnSxD61rm4",
  "key4": "5V4LVKrf971UEucpWyuNpHUv8oeFqfS5beAGwGuQUn5Tv6WiPevopJxCBHUUGV7KXWeuLB93Rxh5nzhg37Rjy2oo",
  "key5": "4p8x96oEG8FBokhMWWjCcJozCB2fFbVuLvumFbunrpZfvnrtQyN2BAkph72zqzpxm1go4TTaVGh7zbtJj8AKMBn2",
  "key6": "5S4oSjTvgkdfVTkzuSthst6Jh8myNgHSrzw7rAF59UtehHrJGpcWLyQYrYHaXDjHKgdYZMnpQX39b1tM1CCuiFoM",
  "key7": "4oB5Y4ysEJCTB6JH45qAh7aHHYzqjMPuwzVm4fqqdV4UMruQpFeuBwSYPBTHk8p6KmhiNzPHycyw7d1B9d5TY8wE",
  "key8": "4Teuv7xXgM97V5g5cgfe1fscmdc1JrcNva5g1np4PLcDBpBar6xPbjNcUCHRC2cWwPUArF41gK7s9xR1FFEMqYFM",
  "key9": "4QhDnhhkvQnQjHcZ6ZriHd6nea83pxAfzNdB9AfQu8x3bsmxTgouvJTqibUqNbq81LHjvGBLxiXQ7L9CLv9FEqp",
  "key10": "56zefE7fGrTsMWR311xVbboSTzBA4wokdi7TAeEnwFZfonRDGiBTao2g5Q5KZ8Qoewsrn5HYH7nedzLTeuhGexZ2",
  "key11": "4Q57jmf5D1FUn4kubwiegjxUQBC7Xri1ZkszeF2WY5S5jRRepjy9rXt6tMBDechgQ2i7cDnHm48MeCtwSp94HG7e",
  "key12": "4mkKZG1H5VPHqVpCqoyTBpACZtBMDp2oTZ4mQLvPqK2Mnx4qP9UbLJyFXjFr4naAptzeZJK8pmUEWDYkiWWB7dEA",
  "key13": "baTVH1c95tffXsL7KskrsD8pfTJXDoHGDsYR3sGhnQiwAUwBXQEM4QmomeZHGHNsRTyrQMSREmo6MqR2RbAzFxW",
  "key14": "5FfhGuZoAoZebuFGNFFUjCSX5F2dsukLkA58qyVPmrpx9pDVVopLcwgRZdgtCoST8FBaCeZ5EX4WgP8w4nfnAz8V",
  "key15": "34tx1kVtjcGDCuSvryH4wCGApEvWTEmyABRyT1xLrujCnwrudTaeQJxLckYR7UNyNmLRM3WD3uHiMrWnRB13b6fe",
  "key16": "4gwTvwoGgvEcfQQoayhdRaCmSXzUNNheTFiKf33Jck7PnoeM2eTjhkH8PiUBeBLJnPk64TyJTzxUCFPPQUDB11b5",
  "key17": "wS6n5DoB3wimEEyD3R56JKiNU3L8UinEozVbn4FH5aNqiAfgFenst8q4LCaGgc27MyEna4yV3V1Cjszwfiftdwk",
  "key18": "6Zib3sgzJn8Ly1H84VBfb67j5NgJwVsz1RNjkidXtnywNk6rbQrf6EKijuk3iVrUfsgNYA6jL2vJvjFvCe9tDVi",
  "key19": "3g9jqtEYkN8vaD1WU249WH9gWjH7JHmh33mwsSEj93YshJm9SMajoQXstJForw7YhAMYvQt3BLW3WUyN9QFRiWfb",
  "key20": "55HV7BdfEyaXKSRzV86e7WM2wuZ3DswzXFw4fHEsRLLduMNc6Fhz9Ru4v3KLYkSjcs1KPvh2FFWdkHxBDi7Mzco6",
  "key21": "45FXaa6KMLieyNjUpiJxiJhe12HyJTiP2LByxhV8r23Tagb1cSA7uzMyTDZAuyPW5xudJwkCiVYFYRTAUcZpfmr6",
  "key22": "2QCno4GXEu7yenmephMTmoiNecGhf2MsimP5jsiQvJFYLU3VEUcwp2hYoC8y93kzg8s2XR2aiXKLmuRsm7VjMA95",
  "key23": "3gDdeg2McwGYM1qcKaBSGg7ENcaFiLU2QFNZzFKHxWZmHtbECjeeycqgEb3qa3jk7pQ53SYtcEMKHqAvjpqHbrM9",
  "key24": "5AKm1LZPdGEuEUNjd9VxeY5GdMAwstTfACQn2aRABnYa7o54dELa4cZVWWqZnhUpqVqoN8U4gqgBPyqaw1ie6M8G",
  "key25": "4ryn7Me2te9TP2VKoZdb1KkuXx3LDrZyQXgV3WHTLasKwmGWqAqpJdbbt8NNZLbkHrr7dvB65Jgp8yxtXDXbSwui",
  "key26": "2UkFwL7FG6wkxvYsFHsADWFjZsaazw94FHvsjwU8AZjTgWTyoyn7FQvH4iARE1kXtLdvZ7CrturDy3tGEeJFkFR2",
  "key27": "X8vyFwtscHmybn2bQvnRcySeMeQBS1hgosqykczfn34qRvi5tP63EF7bD8R6VFksNzcmkuV435qxqLgXc3twfun",
  "key28": "2aZ3BZnNWa1tHevF7gmAJAx6EdottPzS2h4FPTyJUVyqaK3TRX9AetYHpxo6Cg7Aniwz1NGsgMjbftppbau3wto2",
  "key29": "2wPLAte5JRtFoPy64yVRWsFgvkTFkUEAjxXc8CxeS7RewazAonizdieyYFAuAxTcjMq4VHXFq7Cpgp8LMEjc5uBW",
  "key30": "2JpknTwYadGPzTHjGWvwNaDsZ9NxY9Tx9WRL5nSHNdFeFBCH5uEKGMYRiMtrUMJfbdH8yRJfpx1T7hAPVWhwvUYG"
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
