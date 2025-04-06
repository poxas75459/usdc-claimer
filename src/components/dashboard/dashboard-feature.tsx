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
    "2z4aC9XVgxEj9SZEueYFgDCRbCEnZbRVeGpipjV6jEuoZKU4gTr7P5PLWodtVUFR7exRWpKfVBnmZa74eWy1EscX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ndJ6PffWYYxeAs4xYZFLLPYZ6kBGV3oM8SMkTBhPrPrqUVyakvmdtmP7XDwAEdtKjgh3wcWj9uoWktxfnKmq79r",
  "key1": "23QPhPFBQRt2r5fn1Yr5hvWtJ8RjxWa8XrxedZ23oJ2HkcgaNxsv2X1WScnkjVP3UzvqvSHrzNwr2cVWpfVVzWWJ",
  "key2": "ufmeJNqqy1VkDDBjZVV4xUzaQBRFvg33tqw2nqdWLgcC2c3GRkTmtLZJJcPxngjHp3i2F7e8rUk3N6aubgCRpwi",
  "key3": "3miMbWRXQ11xrhW4QMaKXZSzDoUFzZAWxVX8yNTR5Qoyb6fcKhLwJZp7J3wYtFxNQ7p89sJzzDyvhqJp91GJTZPy",
  "key4": "4URi3B8RRufKh9gdt4UKEdodEkysbHRZSDpiyN5CatqrEypj3pjuvJREgGu6arNPiu8iZLKrB8FkuVM7vdMbjB7q",
  "key5": "3LVmSawREJ9td31U2d7LvRmGjFBQoK5jh3sTHx8wxGaiaD6svTPwVJztNSWkbLuTwgb3pjQetSzaaTVCaYNjfVsx",
  "key6": "61JwR4SZyeWXPJxnK8EJu4qMubhLTaaGQWe5LMbBANAc6uyDtsjgSHszVudCcDtCxtYKGwJEaXKpt3JfhnkA4Fxw",
  "key7": "211DcabaDytsj4kwWCKGiuvVVS5cQLi2WjapakvfKHHb6hVshNuoU5VnGZR4iSy7D7kHg4MeYLw38jw1ch5oPccC",
  "key8": "3vmiXSxKvdB7yyavCdqYB4GWxdrcgVHzRdZVXKCvNcS9f1P9UWWeNGbXCedf5p8AX1QKMAjiu2ga2i2Z95fcvH36",
  "key9": "355dcGVgCvhsEc3Voyu3Ley2iYdieNQU9tZL93sWapXd3feKRB8nbQ79yuWFFo8GkACW3ekMYanKyWprJsUNkN6Y",
  "key10": "4xDxvmHm2LPQpfBEy43g6VqmZpQWish48DenwVipK5bXc8LNw2C1HyY6tXobvCS3xYG9GVP5aipFRK7xJ1fypjsx",
  "key11": "53umwTUYRXiZGAC4Mmc9u9FvBEAAfToNas8P4aowXp3G7LRkV2yaTdDAPxGL2stC7Z5Zj4bGAKFqnSYsPJMG3VJV",
  "key12": "2UpTEGyFR2pMM7XvuFXfeMNrjRVRL4xNs5N9eReMaxiZTTHyJFDvBM8DLWKgH7d2vfKVxpLcfR98MNSL1aug6Wnh",
  "key13": "4BHeoNRSz8hHwdUDsJ9g2GpBeQhVy5AwHQTGwmzFdJZcomV28eunhzVyV1sgWv9VLNuAr74sxfGak7HRGqNisWvH",
  "key14": "24DdvngdcdP11t84uwEb64RWDhSRAUCXHZ1fDCfZcPgAH1TW4fTUH1iimPdcd5B2zGB2YKU5o62Tz8S4g96zv1iU",
  "key15": "38wGW2uqF3q2CMUm4xiaF2uWqDzfxrZEE9i329AeSxqhB14wShaSq2bnBu7x3BvCbtvy7d9jcicRTceGZiEuWtUo",
  "key16": "49KF3bL8BWXRmpkwFqAtz9jGgDBZ3ZF1VPbUppsXJobHyukMK7HtLUU4x3BnUd4AMC4vv8bpF6D7GLq3oNPbRTZQ",
  "key17": "5rBatghFqfQbDNgQKYVyWvCmZ1UL3GnZsRPSYmUAUoSnuCMbhNxQzpZtJYoPYnD6q3DVwZ2mDMWUU29Lk5vDp6MM",
  "key18": "3NbJ1JrGyHSMuBpfe8R8citzSLeZMwWSYNi6HCYufvMAoiqMLtfYKMN1TPRGcPCa8Bxdv9BoexPMBz3GNPq9ZLwu",
  "key19": "3s5hnm4vGL3DtXrNtj2xgKKpx4iQLJ7YF86sUHEpPD53NypHFBt3Z1x5YZHgoTEyuHNGwn6s8joLGhFKd71hFe1V",
  "key20": "G9EuW7LU3H6661sLK1ZeAanTm9UYqrZXBQpd9AnQWs9YqBvocLEfwTBuYTXj6xCRBopGyC5Qv1aGjnPB6SvByi7",
  "key21": "3tiYLQduXfXaoBqJKJSybKHAHokeJZ98mATmbgtMQvuamZJARCv4bo8Nd6mXoqnM3bgtBrgpmV1ko1FRBtncjLVt",
  "key22": "2dBhDW3CUQTXua1TfznWRRCgY1fwhH4yE35P4CoLfL5gEE6dkRB8UQTizHFoxNVUtiDkh1q9sFFMeYegpe4vGGcY",
  "key23": "3DChuVqmc7dC5jS117rjEwDdNAMzt3BiVDoWVxX2ccv1c7rvVKzNsvAkeoKBHWP4mnTPf5PVGB3ppv9vsJN8V4nF",
  "key24": "LZbqG3x3RB8wjF3GecKchYt5gMV6F2TPNKD9cLFjwDC3P3hfSm8sjUwUkLYUSBsKDEkyHdBsZNzFzFdpCyT1Pdz",
  "key25": "5k5kJk8yW8uNshUwRpmXi73vgUmys8bScTWfRXg4gngqjbnEqaUeackP9hu7MRiG7KgZDtMXwxCwtbqTz23Eb2xZ",
  "key26": "65qK4nvs4KptqhRYYuyAXmzpJSmCue5vpb5NEzezet3kToUCaAiUVW8v5oxFgXUguPCQcybLSCmfndiYUR3qB3ie",
  "key27": "5E56C2LYqcKA8kM5PSmiYxTZr6bcQrRqYt3RTjguMC6PnMQfwuhj8wGRchLvofq1Qf7ags2YWfm1qgCiHv5h2odL",
  "key28": "3Rq6MR5676Roba799deN7Ei6veNeGtjXGLc7b7JvDek14yof6qewvJ2wtmdDrn2ppQn1Ttc7GpfntJWuVh1AJgBP",
  "key29": "5Phws8qt3qJ4R5m8XeU7ygKgQjYbeFDRj4E9QwmyhTMMCVUose38HEBUzW7H8Uj4EjBBRmad6GPpMJbazh62FZXS",
  "key30": "5MCQs4CdUAExHfFf9KM7Sr7ZMpuTYxASzckgPAKfqR9kQzohQKAUoT43pFrNsSHwsU5mvzn3kVzXKdjDmxA4oqJM",
  "key31": "B5KVVgvanWM5hfBd2xddfLcxTdvST11bM85HuXof7GcoUGsTkrmzSuNqtEUGc3BNBbffE88wH4TGRUtdFwX3F1M",
  "key32": "3VswWZZsTcjsJEpUe7owuYpTN3fguMh5MQRvPqXD75jdCnghHKyiCyioSgeqZkKyfYakjYtXedQuvRPhSVc2i21K",
  "key33": "2EkDuXQU8VgkNnstK7URAyx3dWC4EKeC1APf8fFY5qz278HkkH6XGFFS3TJJWnkdjZTZorG5Bgs2aVbHLVW8UroL",
  "key34": "4FAyd8Dc6BwgfteKbByfUs5s33uE8MBxaMdadDaHJNhR6MovmF97sHEZ7GGuN2VSwV8HNXoBWT8pzppNFAhNA7Mn",
  "key35": "emitjLWyy4WwfMn8ykD82cuUkA7m7qhynDLZH2x6Bcmh8m8b7iyFz5atCPBfy7pa3f1HuMrB81aAD6ZPJjRT8dR",
  "key36": "3B7bxnyuTWDBefXMiA7CMUQX3XJxvu1iKnd27fssqRm72eUNgjpo3GhkoLeHTqbnCrKGyJqpLG9T8V1zwrKryBsq",
  "key37": "FgJgH3rfNhCmWX9HTUVi74GvsrTeBa4V6HvyRBdZ8TcPiPB2YUjz1tnHnQLfFhoPqGpmTjek3L9oAhiCSCTGk7C",
  "key38": "39exruuie4hmkjUodGNEc2y7jT9HWMSKBMZt3SfySugHXAaZktpdQuco5oPK8ETN9DbMEUF5i27Jfjjjj43VRKyt",
  "key39": "DiWaF5Fke7Ds2JQVMvwjC5piwJ1jKjCBzPf73QTy7vQh4RuJVapMSRdDTgrRdKEGsX76Zer2FzYdJYpLjAPfudi",
  "key40": "3fWyNDvVzZe7mTRdmPjQ1m5YHsHfjP3ykYSSM5KCfUtWDP1L419DB6BLQaHoLY5fiE93gXjN9GhmUxNHHptF7xnx",
  "key41": "4i9FLV9PwVUyjqf6R5cyBf6tfKgY14M1qU8qhTMQEgdvwA1k6c6LJ9rXYymQfn5jPzr9oPtp9H1D7mgvEGCUhQ3d",
  "key42": "4PfMA6k1drQYt7CCvYojtyQupkRf8NLB37JNg55CxkqjwFjepFkfo7VU8gVRKfsqdFCSccvdc1U1cf6D7PmWmiuc",
  "key43": "5RasrTFoyWLj2BETcecxKW92EP5EwNVLiXPGow1WLWWShBKqSVwpqQMWKPaPSQwMx8nFC4dVfyYyJMZXGcogCVkQ"
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
