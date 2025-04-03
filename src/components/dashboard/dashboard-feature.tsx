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
    "4rLssszSnX6AJ329mg6jD5yTBLXh4CwGMrnYhLpyNKYfc8xxsd22YNg355vJ58hvCTvsafA76mvHMh8dZvNm9XEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "znihsHQh4rv1inAkSGWXioZqhkkbtBJYQbaFhF8w2zc7VzPZ6JpcVvefWpvj7U6L8X842ghoasgocykN24uGZbo",
  "key1": "38NpNEaK5kJfcDQ5SifW2dFKq9xgdrgyq93j7NT7rKzQS8c7tyiReHFsW6qCK5zWKDqi1ycMmroGAjZcSrebbEmS",
  "key2": "64wMLnBVSuYrM7CLt732rTKw1mH9BHmAuKk2zAPUXMSxBY6oaL7y23TFzM1jfHqTeU3g7ugSRfNgvDkJo8hTHw6Z",
  "key3": "3NofZNT6WfCThyoHMEtgBJisHdi6PYrttLXRxoThqupgh6BWv2LSZabdbx96GeRE7f2AMUhNqLB5FtYdRi9uuj9q",
  "key4": "3rrqvfmTQa8EV6sDtyZZFTi1cDom4Q5ULnTpNBSE41CpFqbgjtjKu5QvYMrfwt9c6SKtVuEmozEXbRtzkwosfSDW",
  "key5": "tJmCVLVFscR6qW2dRZSMKn5cEaK5vwcvUDzGuKymqNPTJXKaD7yAD2Pw88VHPtyZWULAD3YFjjmTYRPnrAWghmb",
  "key6": "5StcXLcujnCFrXgxmF3JPXDwsMTwiXrYMgZEsMJZoj6mDLT5Biy7RQZufL9mpjpAVC925qu8nWQ6z9fVyFyzzpV2",
  "key7": "2U4h64CH8DiujcbTRmjkrTpRLk1cYsWxFt13RCc8Q7SLapP9PEdXkB47X3F6tAK97yzW6vQjMUD32p7CwsVTVodM",
  "key8": "fLyt9RhmXFLrbFJSQNRsNrGmNKmHTnAmCbAd74pmt7qJ8uqGXRjLfFN6sn3gRUwW4PcALgCSULKcbD7VPt4Y6aT",
  "key9": "5oxpyFcBH276pAL6U6eb8uqakPAak1TJ6U9FiWm87NHAja7FV1tkBMgj4C2jvZvpJpN5fJH9wM456gVM5CV4uGYx",
  "key10": "3ZuhxivRLhSEazUryWR3pemNpoZybBazDJ5eo1g8KDxZ18QSELn5ibMKZEokgbigaNbzCtVGZUBzcrrY4v4MaLa9",
  "key11": "3kHkTJAn7ddWYra4A144gNbUv1CW6pfWE5skCkLTEB8vpWRRGVf5cbg4bvtgNpg3ZwdTs9S6j6YiH8z6XaQ5nYVX",
  "key12": "3Af228mC7EhXGFs4acX7usGYSZtte6GjeGdDM2apfGB5jRvHsgh7wJzXUC5wEfuKvogXZpFAGEGfsBtp8Wp4ZuS",
  "key13": "2gnf68jYFoqDpJkWPM2VuoARyQdCV2xwv1xVZmNcjEeTq6YBQw5kwW9g6sVMNyQkiyUzzVSot67WhEico7jap9m5",
  "key14": "2vBqySXQcd6pTb41fuoFgLfZtt2ZX27kHfEsWZYNixyagmwgkjF3AEfAoT68ZGHXXu3WW61yA2Hb7Vvo1PApABdT",
  "key15": "2d5L81nEUbiJ8k2wPoPuiHouYd9ZySYMnvPBEyh5J9KpRudDgTEanXQvkdUp7xcosroGCxzDgH2cYh4FWTutyn9w",
  "key16": "57W24Dx7122Wfesrif9Bvt5QkuV8HyjUp9a2VyTqzWbEJJ6YhqXQcW27JoSzPS4z3zeZsaaFj9yMxzVZiA6RVTLm",
  "key17": "MZCquhS6XK2xbNvRsMbu6ntgiFXwrVSseZcanBGrA7fERGmC6Y54BCRw4VFu9TaCwZ3dpgY3rdARoUzV1QT8Vzz",
  "key18": "uiMXnnmETkWxeeQMwirowD2yqY4qxagRQYEBRN8dXuRzhyyq5J2azG9KXcVp1nH78wBsdz3B4GyA6mANPcspTeM",
  "key19": "46XMQSZearLJBvh6wRgG2uduxNoduTN1SU3Aa6tMzZ2HtvcniPNDa2ts2onZJ4Jhpf6NfVDuMKgFUZJjw9VtFYnW",
  "key20": "4nj4f4EpzGGBqCyMjREu31RD4YzHfjuQoWHdwd1Pi7dq6KqW6UHj5rtqgfyhbNG7Nd3H5idEDYD2oR7ByDB64XZF",
  "key21": "3JP5PnuJq5UmgnJtaNN3o8PviQ5rsAijW6oFPgs4iichpDNtEHYwCemGmZWHA2NiboPqqM2gXzypKyihghZG3Pok",
  "key22": "kE1u2fdDB67KJNLfYeXTARAqEsMYMwKMpjE6AE955SEG8MvYYdRdkvGXyMzuePqbHK72UfjSEKvj8vFwokZP2Vy",
  "key23": "4PoFBsMLvNLArJTpt7hdMLc729AKntM3GxZfxriGz3AetAQyHXfWCwFZ8FUhmzBNMT9ifsZFVEpFPfQVW1YDDRaz",
  "key24": "5RbEPw5FynAQ5wmFC6aDxR6JV3KHpnDpjoks4KGgnSSPvtQQteHo4q5CrnyQGXvaxbgVuSx4FyqtnunR2KdGjim2",
  "key25": "4N1Gz6FBUvF1zEQv6uYC3u1fKz1gYNuqt5WA3E2tr42assk4KTZY2XvmFpgGckRrGUbAKS9yck3Mtak8mULvkxX5",
  "key26": "Q8PUuDBv5ex2eDrfpfzotaC4XkpnB9U8QA9NSos5Z86hZkHt2tdo6j95MLqhCwFxk1BdsouZCm8rFiUPnRxZUET",
  "key27": "2mYC8ezFdAca89gVkC5xWHPQDm9dZm9SAz3mK6sCjWnJG7BbZEy1HbNRqzHs9X6TigNnwVEmuohwqqc1stD7nwZ7",
  "key28": "5LTnDcyuj6meZqGJbKKAhckx3Y6GCsuqFHjxuPTuTYHk25kvFT2EhKReqS7zaN3yXMvQK8Qt3Zikbs1qMJYuNHju",
  "key29": "4EhPHtrkgo5SRJtaDwivK54SZKQWMG27uh1cZhSD62UQ8sRTa4XfB7eMtv6ggxRtQXWeFtjdbFg1hEsHjQRyAtXn",
  "key30": "42Yoqftq25vGq5jfknnBExNUGJJEGZchFLMVc9QuG6s77CfM2AD9bmXHeGWx21vyezTMyfwpeLUUaHg8zhwonPj5",
  "key31": "FjYqwD8UqvSGURXPJ36FX8qZ1Nshy5hoXJrjkiyfbaXvrzYdav6R12YbPJcrPWkvoTmBgBWPNm9hBNQLv4YFhb8",
  "key32": "5mwn2ws6oKm7YwJ2vPLQf8AyuJNRkiYWwRZokPS4QrpzEjGi95GVLfjzzjioWnPhDGBu44JXemgzTjSGL9QLEYHf",
  "key33": "5esBNUfBKmTTMzCK1kKs1UkHKXnkW89mEkh65SZDyQGkrDjsbMN9deXBXmqVziHgab1H4Uz64GRhAgXWyzazYSMh"
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
