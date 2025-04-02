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
    "5VuhHKxKeCSgw7XbmKKJTJxdnMSG4Y9uMr2M5Qq67PGUuRdxH2J8WdmCbXMKuffDkpFgjKzeHxXsMk7MySMHEzoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8t7z5vrmaVj2vWGB795kVGbiGc3imJJZjHqsmK7YqrZySviznbvJUnARy3UPnBa9QR8jtzxqtHm1v329rfRVovA",
  "key1": "2VYc3ii56nhddwr5yF7mFCZNLX1HN8dwRpe2bAEKPkneoRWc3TweQCnCdBGpzJsEZtBBYnX3z7yEfsYn6aKn3t9D",
  "key2": "2QUqukargBbZuCPfRCpn4KUPgKksyhYbheJkWx2UvMpkmLdL4JTAZphUumgezLoYR662GfBscrH7ibv54ikurM3k",
  "key3": "2TzsTkeZpY9K82sptnqarLKxSeTdMB2XjmUsNcYrUJkvj35p1hYK6SWYYaptxShrkeYUKLxn6RbwVu3u11foaE1k",
  "key4": "2iPCYhX1WMFMkcDbHpoeEvDeZbaMzcTCfnQa295XWEEnF8ZzM9LNaL9gVG7sT8p8qhXWGV8CGdGHnS6GRvS1nM3c",
  "key5": "9HBYv3DZK5671dn4jtDwpWXykkCJbrbMrAXzPJmNR1jLE5UUskHhKBddhVnyjzBr8Vi4VLp1ShVPuxhqMoCGRcp",
  "key6": "4MTbVxDDPuA1Rv5U9bDuYocq55x8uZvV9fguygppuRvqUjkFKsd2LhnwUsAx2WRFE25xsY5SaL38qxJjYEj5VEZN",
  "key7": "5fr1GVB16ioGtB8UvuVBPfMQZfRTexH67PBuYq2H969oea6PVFXzVJyDTQ9TGMFpkrosUcC5Tvx5CN6x8GKsK4g",
  "key8": "2D5aJUgpNp84gvPRAUxYKaCaCDVP8zBgAisrUi4AodLQyEZBsoexyLtN8TXqk8Xjsufa3GhpVrAQGuZtFLpvjnAZ",
  "key9": "4aoWef7vQ1pDVNWFQS6MMApZDaMpmu7A3Uo2JvWTyDbiBYvanbsywCZvphQ2oxSi33LVMQyvSKFqAaL6i24FaQFJ",
  "key10": "3jY887Kjh59eztq883G3cMYJNv94ncSUVtwQ1zbxbmyCW9bDWeH3XxdUVBDMgKXXmsJMZbCATdSUvKzCo2CfjTxk",
  "key11": "3WwtYQkiZGKoMsSJhusXAyo6fz48PUsFXvAjkSTtdr4mdN6ArcAoUs8XZCoM2dTvYxtYtXrcAN6AEeG7EdGfWk9X",
  "key12": "25a8PKRhexwcwiX3JqjXZRA4PWGo9st5WVStxBxS8641pGDC459C9N51VnZG84MrxoG4aL5PSeCRh3NadAawGP5a",
  "key13": "58te7FZoJ2d1VJ4ecftqLXZ3H1xyQeXhWCcWawt4urSwxTYKuzcdKwCG7yUTHHp3zfUHoAT9cTzzwLdG5vZrb6xj",
  "key14": "zgVwBcifcEsP8Dc1ZNkqMG26DEyzzGercNsp1QDrztGjXFHezPE5RWDUc4HqiEULynwwRrc1V5SGYvhjVxA2VH2",
  "key15": "3DMy9B4BnE8T9YnDZ2LRG7bu5g4cbZYHYvywsuVuvqhKGfD2G9VF17Wq1byoqBzSZjRZGXXuhbWfDwBmjYQ6Z8iW",
  "key16": "2jSKe5csBa78nu11JSkq1zUZ9z67JBGfB3MFkZZxQFjCtPEVW7B7GkV5HVACsbtHJutEmmH2HfPMPhzUchyidKgS",
  "key17": "2VuE4t8QjVvuyArKrCgJWi8x3LxCKo1kHRLAX8HamJMa51Rfq2zxzgJ7QVXHXwg6qtQ6hzceYbxMA1huBxyxWCUD",
  "key18": "ZUUU2DBK75YyLbL7QD7rYoh3BLduHXM7MTR5M9Db4m7JppcHitMRejY2iHHQUybFU3gaSZGM7Z3Jp5TcgVnpBUS",
  "key19": "41wgHk2Fghh4JPTvkNUXqZNJFwpWiPpN4SCVcdarB2qw9k5MKU3KZBrYSuBriNLSXbs5tQ4uovQDNBG9Tcs1Q9yT",
  "key20": "QDFMQb5EGEMV65kKwXiyzDsvoHi1v7Jqi3ZXw4iJKUaPjyPc2dHQfDQLQjdrV4RLuKxhGjSLyGuB4daCYhffEUY",
  "key21": "4demwzJmSUnjfipsW6xRexTdR3N1KLvhaecwLAgmsXiViqTu4oXCUdUE9zKhxUNTvRtChe8Lb6t76Sx3RPaqrfQ2",
  "key22": "5sECbrzKaW9GzGCmNoLrA4euPDeSSLde7BzrRX116yoVVtEH24nZxFjjku7JNb9gmMpPwPAobeQwjBfZzbd5ehUe",
  "key23": "3hBqEW3Sx2nAfYpAwjUi2PPjQhpW634dfWNJMsSn5xuCz4TR3zEQADhHsood3nH38XUBMgr5W2tFdfMj2qkgggFq",
  "key24": "3Hn55H7mPfC7tKGWvQxrjRwwe26JX3ixpeSLWG1XWJx3GseZck936q9FaK6fvPMzF432TNQGTcsx6oRQQJyNByH8",
  "key25": "33v3X33LfdaEiG6e4cDgFhSxxSom9LLC1msxbsX8b5tK8TQaKq4Jvg3Ai1Hn7dUxfjcycZvVY2BmgQrT3CusvpJF",
  "key26": "2Q2r2iNjBcKLNsSwdWVC9VWzT1fMqeehaFWQexWtrVwqHzNDoXkcw6ez98sXUy2UhmWSCvhn6VYdT9SinQegbmYn",
  "key27": "4v3wy1sRWqGVUNumAjJ5ANBjVZTY449dpQ2pmaS3Y8oYv3ABqSREChMaFfx3JhNCqtCZVnxLskUWhHGrKLSFcr8h",
  "key28": "5XD4h22kBstzzfZcUaRda1H9Rug8PiRe5T5Ri8uSAoZ5wMTMaXX48ps6nTxc6icQWt6RCpSFGCMjCUGArHJ8B1ML",
  "key29": "5dr6biQHb5ddyN2ymcnWmeiq8kqjGQYUqYrdZHunP62cXVXT6ibk3XXrXmQ73L2FWcCSNhM5NwQa5vxbWTZuBA1f",
  "key30": "DS49o1voehNiXCNsdVgwRj7FbtUmbK4N7QTh54aFfMNDPdyci1QiWr4yJrgJFa2GENNC4y3q6cfKaJizmNpdT9F",
  "key31": "3L7XL5J3L8RZWngYtdWe3YaUHBYQXwhPCxgjAFxNCh8r9aupdZpU4B77m6gUbVAyhcstFqe9qmBxVLtsyAEfSBnc",
  "key32": "5BdfxMg4rVmYeaWw6adSby76EHQySEJ8qoKfGHZAVgvvYFBKzcYbbXoLaiS3MsGQNTWA9QKfENiJaUDxCPhv6o13",
  "key33": "2q49KDnmFmvucYKc2t7iGhqMVRrCtet3hTYyTkGHdL8kroxeLqnQDZx6eBT8NscoCKpyY4Vhwf1XaGcfm6QZFAdg"
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
