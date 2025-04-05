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
    "2CTQi5MtNnsqjPgRYnSCVt1xjvDsgxisDB1pXoSWg3CAjVCuiViPngHUuY8LGEfbjf1oF3ryq2oG35hiehpu45s8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ymSTerdLLWtFuXFM66bagrx6nfRG2VjJCzUA8J3asFEB4FJMTicBZTPT6wpTMb1a75waEttRFZfYr3DW4DbZ1z",
  "key1": "5cayChB7Cgu7poetFLUGg9Dsjs61sYctefL1Lmqiuiivs7vDoq3cV7JHH7EZf15wQPBBNVptBYHWNJ4CjQneEL3s",
  "key2": "54EdJXEaMAJTHKvGuojtqmoYgAA4Goo8Et8CfUTNLoqGcQ4FBnZrqzEShJa47oHLUb98Fs7do8V3xwhqAzSXM5xM",
  "key3": "fk9s9hkVMhGmdJQg3eJmumWvZ7tZuJgT9JoQXpa1kUHBXouQb3C6v2Ckc6TmGZpsAiNYRf9gUUkyza8vFesZLAP",
  "key4": "2ypjTb3iGzYsuPuakEhzX3rJvVtk45TYinA8567G37r9MVaDMonRr5yoYYbEKWFRqGJsaBtwF15hCyXwSFBtR75F",
  "key5": "5DyFxejRo1TM8ignfYSC2t5Ax9QJptDyouVh9daiPmZLkJ9KKNLS2tZZsYdcXmfWPs6sg95JM8LYCrTKfDho3ahA",
  "key6": "2MUe3fPhoBZjMwB2T4pDiHkSFXSKqUoAXw8eFtSy3WuNVSJbRa83DCrhJWYyKvgPQqSb1eE5rw91XZKwqAS9AkNQ",
  "key7": "3Wwkahge4bF7wdoUHzkzZJZVFasWua6UpR563ZjLfckGuzdE6N7QUkMthg1n1TYsqopK36BUPw8HqrKYcVx5XcbT",
  "key8": "x9yXqymbuVevKDnArC1iyg6gdKbXgx7NaxiJcZZF2yvMT1fvr78iNnT1GmZ3gV9fQimixMKiewUwwGn7sqehR34",
  "key9": "KzL6PBHNsgkWhkXePYSVFR1FXpHHp8g7JsWqLH3MaqeJETiA81iv88oz2M2XvZ1VKgXsEF9Dp92UkYZohZgyhH1",
  "key10": "5jTTYXVcD53XcsjBXKpQu3SAkGiE1Y3E7JkH74xoQR2r5zAUskWLHT51VuWQxncsSZSodtchjcMgQU4FtsG1C6ML",
  "key11": "2BpBqXiv8sLwTE2mZhZcdxmAB1qKkdHdfVKJdDgBjJuDSZJy5sZvNDwj9PkY1Y2SeSCASukqxUVXCPxYecrJPCCg",
  "key12": "52KbkeMrS4jwj9ip3xnwkvPVv6e6YLbDHWR4Urer7vTFmSEVPUA45ZfqDpp2VrFX79bgKKXhDgYLDrk15gBc9XFj",
  "key13": "C1DeW9Y2cm6tDvYrqjYcjxHcjLhdjvvp3zz25ojJN5Dm1Re6Wk9LWgh4VHgtdKihT5xenZsqxFJSzkzRVf522pc",
  "key14": "xdrp83vVJdLAqnGhRNjcCMcxn4vaftxnWpPdxDa7fUP6G19JWTYA3Zx8wcBX75ZT9mRkzGUvBV37evaPVV9jmRr",
  "key15": "N6K7Aa3EDsicKGtEmH9JYiTiGyvAEY59ktG6Y3wUdp94tquKG9MBqw2Mh2hZF6RYQ5qr8McMKyhN5ezGnC5mR6H",
  "key16": "1VEbVtBnQt45UPJkVwvKq9CikjkCtUo8XEmNWLY1UQH1uRVPTTGndeBkxhAsBaQcT2wyemEK2VYBAhe3Avv13R3",
  "key17": "2Vkr3vZYrxjmteXZyV9UvucfvqEP4uALn21XS6L1NbY65ohUJBQkKhUE4vMdDUnBQmrq34126q8pQ5P4b6eeLCKt",
  "key18": "67cABUnokn6r8hC7EYbktve9zimn9Cb8E1MR9p55wuPe4QfvZXk9B6w1Cd4cATMMBfVdqaRo3bibCiBkeMrKGwQZ",
  "key19": "3DksDPE4hrykf4VPR83M4WPzoZuSMB3fXiAbSqwJdRqRyvYjZ9UuAraMXD2QZfB1wJH2MYYnNhj8EP5tNWazevEZ",
  "key20": "5uuy7RKQapT5SWar1seYT66t2BZziArUBw8EgJpxceDHi1HBtB91MWufFWETTdjVmGLaaU8mvD3vUc3ocTNewF85",
  "key21": "4sdr2k3e6a7HZnQq5rXRih1TAcXVc7nScQbgrWsABLAZnMhot6ogeqSUAhXmSPs56EzdKfX4dAexhwawJf7fVCr1",
  "key22": "2nQRb1FBoDGESSw8heTv44JN52ubpesohz4PTw39HXo3zmg8gYwuPMHMMoyNPBHiQhpm2ASqHAYeWN7n6K2JHmJx",
  "key23": "41i3j7zPWGw4zxg6KaSScg5nuyGCR2CqhUyw4TNG5H9jHnP3CTNPmQd9LfuuGKobsNiUpoy1w3bQGkxE6KBzgU18",
  "key24": "5ZGy9KkJbqTKZkebg8PGnb9ApL9Mo3esZejahb3JZtYn9YbGuezFjv6K5197M4qs3M3Zhigtgiaf9VRB2VFHNMhZ",
  "key25": "5HCiPbNt3HV431RLz8uHfSvRncC32iJjopapv4HCMk5g4vmdiHWL1dCTsds9ZLF5p358mzeVafwe5nCRHZac9YPx",
  "key26": "5FEN3WZAvtgmkiqPKA8HtV8gLJschJqyguorDCTwuN3k7kVp9DeX5KgZtHSHKzpRMrVhtgMeizpKJCRFy3TUhZwS",
  "key27": "2pmG9FepfffsXz4SswFrUrH18drfLhDMjjsPAXUguPUQKMvTAsqeJzKyC4K1kSehmm1E7f5CdBJR5UpYDkPL5q4J"
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
