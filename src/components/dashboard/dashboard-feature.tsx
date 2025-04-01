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
    "uSBhHFWAWbsa9aCSjxZ5jiLjErGSnBwWv7hoABwQaE9CBJhHf2EKVp4Qw1ZFhn7DdaRb8ixaXknYkdScmzVWjf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bhU3oRYaBdVYEFnZg7hTY2t3ygUUXFr9Ku5a8oVb4AN6pw3obZZ17w687MNsGxynAxLFytw7PynYdbjA6X6sDkp",
  "key1": "LyFNb2nNzGsotof8we9urTvvC7hYetmACCkrBGyshBKQhio417yyfdk3Bg4czPawzpyysiD5K5R75UwsjNCgU2P",
  "key2": "d2KagRWb75jkrh1fnEt3wgiTcCye4AgpY6QN7j4MEqdc7aqnjELNhjz4qGDDH51xfwCop2i1L7mitJha9Q7n7EE",
  "key3": "1VDXBGZAMK4J3bsFWqtBGkCrXzCsPYQrrvrSRLuhNwjKDPrwzFex3ELody8JfmuqJbGZXGZrEfdnNkjSLLr6LES",
  "key4": "BkQef42yjAjdx2gQaE9ozoRxtHjLUL1zNAPSm59JSi8L48sXwpUwBFTgn4v7mZFjV73xbwmfpPTYuVsV3mZBNXn",
  "key5": "2TSkJzivaKzZDt9tCHdJ5GmFWNz35Pi36LRxTJT82THLxrW8VvjYgPgaoo4ub36hSHn9wJ1ntD19ncZ3JhTLfR4H",
  "key6": "5vc51g8EWH3PnV3Vr79xKKvQjo9R74TkM1SdGcfV8cv375Gaeck1T3nkNsCGRxxe2CjQ9KCCRt7PEQ1YHz1fziSM",
  "key7": "29gA579MXDP1y7brPQZuiCdJxz35psuypdnqXVfVFWaBgU2CZV7XZ7S18YsfW5Fpmhi7hUmuCiUo8aQ5wzKARhwc",
  "key8": "3JDjiYGjpgZfT2UFYDBeKsPoLv5aD2iov2MqXPQre5KyUEvc5NQGwtjwBWhv3rTkDsNZa41MFCaMBwduGg5iFXBK",
  "key9": "2vJgwtTQPFLc9HUxgXiVbKpzm1W9cAYTR3WxFr4a3cxGCMtVeyMtPtAKnswU1C5mxk5GjRMAMykRiqufxBQdDc17",
  "key10": "xkHzgMpC9BmL9oCmzSaW2vy84AJxR4hFw2xb17Hc4r5MMZKjMwwmwWERhQFY3M9pHsHAdkNhsHJNvoiUh2zBTU1",
  "key11": "2ZM3d9822RNL3cP8AKT5xS8WRS6MSN92vs2hzrKh8xdfxxX2fLN9oyG7qcW57G29yXqaNizQyh2VZYyKMbtg7QPk",
  "key12": "3iiqGmiUAdSHvzAxscWfeQJok3gEkc8YNDhomTue5mnuZ5fJQBRz3eL4h6ZN42J5qJa1266FQ56y4LJhenzvmjUi",
  "key13": "2d637fMXGaSuwaHn1sZYoxpV4se7uzkxNiNhEsNERBDW5sogCgXU8wr56AWBF4BPDn3EDBHd6EBPuudJB3rr7wtu",
  "key14": "4ux1cnAaQyC4C3LKc667fcL8TjPP22XEUQLufFjkoYgaijpTddsWY1uZHhe5B4hj1MHhy8ZHeDtLo9nzQQR6qD5j",
  "key15": "PLh8542gcoy9dsF6EC2FNjGdbtcJMXgzYQ8fF9cGRggye6NjjjPR7Bhc1FyN7m6Ev4YxVZgfWHZZVgnYRGDVG31",
  "key16": "24P1ZYppUGo2ugDUFU5UNn2mg74vTKYWC2VwESyucwtojfwNVYdvJydisY17YuB1J7A3pbwwNqo6xCsuF112Np5H",
  "key17": "dr2yMnLCiBKNoqo4UaCLFD5yv56FXLC5xGEo4id5u9mo2jHgqzt6XsmhEPyK8mP6Z31PGBd16SGmFYSLBasGT3r",
  "key18": "mvn3xuNunUyh5K7ZPU4Ds4CiBDoUK8jjbFcE4QK249tHDV4HyDevugtTaYRvdEmfQjjsCYXmPv9WCxdeRB9KrAR",
  "key19": "5sTidHn7J3UFnz6Amato3sk1mEWzxgjGQqWin6di2om2UeTccWbZMF2VctSVCDRgYzWg6xwLoY8FVhWGFGGntZe",
  "key20": "3MQgE5yfWkCNxZYeSgWX5hAWte74mHeNpP5BTRVvVEDN9DRUzg5KLWmhJWFaASam3GA2Gk2Ph92NmGcsLdr3m5VU",
  "key21": "7xyPEMKHdUSjwb5X5vDhbEVe5Yxm9YphHBni8XEJZY7WdXj2r2i1fAjtmqHheoH4eXg5SAKfUP9uYh892wrT2KL",
  "key22": "3m261stFzyb3gGY11SdVcwVPXCRdpxGfQNkGTydSgiXqaKXihvLNP7YHNBJPvLUo9dSLPbtSNrzBGiTadr66HqQ7",
  "key23": "kz2Bb37zD8iii7YqFbgzDZLAT6vfz5ZfVmtnHHrWj1JUDeDrT9ubmoHag4m8EQwtGTAU843HGjwVHG4fSxNp6pd",
  "key24": "2TCigawasM1FW6it8JYxWzrkbw7e5WNNCq3qepXh5UfSaRUaxiKiE5jfWzJ5trrJab9KGr2qt3Xc4NiFhKLbeyzy",
  "key25": "4RJEVDXpsbAWDwqZCwbab8ftPpSoNVG5xvADyotkAKmQ3EWDqY1YU9wTG7DQXoxN3WZU5CjRLs6PmzJHLTL5fPh9",
  "key26": "5p4vWwn92V5Db9rdhAwqUMouExRpJGYL39zjbSnG5vWcrWLVwt4VgZM7kDaCgVwsyuWDn2TYPKLPpT5cH7JZ1PeM",
  "key27": "2AzdVGVZxXiXBdZujnBUVSjNRbGJQF9Y8fAUpVMMcbtyYFsMnB3e1f1bwt1ndduV94JayykYj1uQfXRG3RV39zwe",
  "key28": "23EDdDRJvAimSwMzCMvPt5htgYutVSXke6BytPt4FfydRmgyi8ktUrrZLGbfTboBaTHzDHhf3rDncHY64aL5cUFe",
  "key29": "5znWWbrputm2JxVQcwCmwUcmdb5CrZe4u5vcZ8D5jPeb6weshzEBxJdoFFPZvdxbrxEuaxtnLz4DE7nRhsvADqFW",
  "key30": "2U8UzAAwV4dGxxNJZSZo6jNrCpSrWQ9GQ48qSTHwqSaAzkYEVUvfnHHpScrp4GRC4FbGSHjD7t7nGywToGFcNjGZ",
  "key31": "2tgr7vutRWKRBVf8S47L2D59y3nDrPFCW1uvVZBUHZqrb73f9YT1FiATSzAY3fuSXVKSq67czC3LfCk3fW1zCaWU",
  "key32": "LK6PHUt84EVQrgNjEGDwTFKFH5brZ4y5SamWdQ3YG5gYR4aUa5UMdaVizPzf9kgyhFA6x8NJcefubBogPAXLNyc",
  "key33": "3gDgszfiEiVK954uYV5gdv322NczGXms7H8RYVafrpbJiPzX6GhjLnorDPwjetwWacwoSReCULDvSE6hGwnhzUXR"
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
