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
    "5ZsQGM3Wsv59Z8up5Hgedd4GMPjK4rfPQr5UAf7GHGYzJQo4cCD1XrQvwCHbkpbC4hMwGjGQgUukVVQ45okK6ZAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SajrJpo5cpknK6W834DspoLffH8iFnohdBh2LTN7phcBPBgHjJVzcTevpvX9XteM8uZ2USutj3FfNaqrQ7JicEe",
  "key1": "5ScT9Etg45PyMyxVtGBx9kHfUMrndyUGxgWmQ2Zp75CANkhjbBNmT8NoeBMvbx5FXk1vYXA2xwq1gBhsQG4i7SAx",
  "key2": "5BnnB6K6phNfRT4btv139RRsVAHmoSrp2Ht6PkPhEFrJ1fwXN7wM26QXSgTa6fqr9Ysbsk1L5ik3zPa6MyxckMF2",
  "key3": "4aahDX8v2BjV65jccNftk7gmwX1kRYYBeJcmoNWV9PikUGbGyaSKWKWgsS8snNjNcckSH3oXWyMyCAXqVBJXEpMv",
  "key4": "4D5SMzHuNgfkbDRgnf7bwi5REj5uxDBEuEegmw6WyndopEFuhpj7KsV5fbPqn3n1x7iREBhhMsi7a2KVXTyn7pZr",
  "key5": "3BRtmYJWfGBJ8C5UU1haKHDQzFAAU3XVvG5jsyYrHMvBbHv67VTaejx9Fab6w1xKNpfBnUbG4u2JYSZjgFqLSoRU",
  "key6": "4UG9Uvnz1BF3C7rBhvgKYP8c3hwbSuYCNcT2WG7ZXipGB1LuFdYrEoXSKhaH6BvaZZaonRiBAUBHYHu2XTpa9s1K",
  "key7": "5m5Uz2JcVdChhrDscbxu8zN3sP1PmzreuPHnR5ugNYM7aixuW72PscvUFdGvi1J1QFp2f3WvhDL3B1vLvajZqRXW",
  "key8": "5yVy8YpWtR3v2xWnQt3nzd3Jd9MF4cVU7jmr6TFGGZgbNwsYqvmqNwACm1xK8JGZBWprxGBKXDRYceLapyfqkBv6",
  "key9": "67g24hRTFJz5XtVifjGcfGbta635JBQi6z4VoQLEWQFidbdnp3AQAsNyMsC64gGSVaZrePKLw9TgiiKmWtG1CJSX",
  "key10": "3UBpgspVRVAQQDXPSjzsaiZ2B8iZ4wAZkSTzpHGgKQ6aTDBaS2dLRFsidvLrYV5pTwEEQ28Z78e5M2Xe2obKsF7D",
  "key11": "5bsEWk9gYgHH4KW1qu4SGNWP68f9P6ezMRwwRGbptVikqBU1D2kpeFm1h8qukbvJivxGgA2koSWEbqiXhABNT9ov",
  "key12": "5NtKLTgLuDJBHzHr5B7igggZK2YMS8vcGzpw7nsUqr5cXBKsFy5kfczohR4LvWFz2xauCqjorB7HxEAqhww8347r",
  "key13": "3PwFoz8h4xg1382jALZvLN6HD9y1QYjvQJetj8xS3FrySM2MXw9WifdW4DhF9yz7JKVfdUZEHh7sWeDEETL7YPaz",
  "key14": "5J9RNvHWELnDorWZcuBQBZ8Yon7ZzdUGCapBrTneCKS5nEacuBSB37UzHKjEzw3pUdgBFnyh4mze52h849KGgNZn",
  "key15": "4d6gbYF864BNM1LYH9NFzbGH7zKvmsBy4CUUk6EXjoGpd9ggRRU69Ci5itU53xxnNVRM1XFdBQCAYgBEDzRESPti",
  "key16": "4tho8CEprJ3nSWcsdL97cB9CtE2RAEfxmz5BwtfP2ZDcXL57uARo3Pqb4ePTR4VaT9Ss3PDCYUiVL45dimfPji4k",
  "key17": "2yPq29LLzeqb82PvAhPnUQGBJjkWsa1FNq5QcY4w4QRNgE9wuJs4kqVqGfocowrnUYXQhHXoAbhYsyZNKsZgVDiA",
  "key18": "xux1EQPsMMD92yhuPwmnjTfvY2GBPjWvj9tQgemFYAfAs62bg7VuCMkPYH29SGjBNrfSCHhiRt6DuLzdkRL1CwQ",
  "key19": "54GQ5s4x4mGM8oKfWcWokdZitjRbihhE5Q59bTubuVLCno27W4kpWXVxjSUToK4sHCYb8mtCYczUJgQUJQ4Xf2da",
  "key20": "4pzVR89W2RiLA2ohmu3Ry1h2yrqwVek1ftRgpuHa6XKkh6N8FXBCjNiKwauXfu5k6tnQySbsq85Z7mfU9UVRCDfC",
  "key21": "4iRrEXoUcDzx48aW5p4REezv775QsyeyRJ9H8sMAF8wnMMhgNwAVQbzNxWwL2hkEpwQu7qEFMpe9XsJo4rUU5Hmo",
  "key22": "47pLS9zzxHiRxLVAL9QmYsfiz6VWv2uNpc1GLEASWLDGmaFgRC6MyKigNNKxXBmJu12uNR4rSBRSJ3LqTtsLDgSr",
  "key23": "2z5Dk7jvuomusVDKanMnT9qsSnVMyBNLBS2L3mDHZZ3pfgQKQLaRscL3LGxGg3DGisYo3m19XzHuPUfUsNBrGK2N",
  "key24": "29AnGNDozfMDXcFgZpPt1dfwJ6WphgVtbMbHq6X5h1JQwhHkt7drmypttYxZfUaz9mUizxaYrbNuLmotuQp3EDrd",
  "key25": "mGPURzQCQiZk1oUvRsgkoeFDQPmGWdLV8QHn6W68v6jmMtJNuRb3FZcotTXnHata7BYHXtfwUjUFuvWBpKpC7Tx",
  "key26": "4d2kM8KWZc2P4fbSDf58mJUC6m7Si5W5SZ4M2Auot4yEazVXNfWTZUjfo81B4WbS9tx5ttfEBn38zj2mCXs6spNu",
  "key27": "4XyKmHhyRrK3aguMogRNKoLptpJBB6HTna9qdabraxQGVpHg6erUBEUYsjpA2SFY81Dw1ZGiBpQrdETv14BDpdQj",
  "key28": "5ZVzU5GdgZpzp6ix4g7R3Dw734hQgbuCQotVzUb4dG2ufYNRkA4XYF5hY8MgDndNfE3PKXuWpobB7JpzBjAzCaVz",
  "key29": "3VvmQuYqRZ1aBtWuebN3k9fNwth2j7JYZGDZLKmWU8hfHZwn5XNZCfC5LRz9HeeZUrKquE4QPPx7nCX5ytXsT96U",
  "key30": "GJYUS5AJ3uWVSSpN78qtQQsinRuJmh4fn1EP5ny6UxquXnrzSVyjU9Hg7FwFGhuWQACFrH194iAke79pzSQforU",
  "key31": "2MG634jx24BKXw3ETEMrX5uiJag5T59EzBG7wELkQAWdsqDoNSpx1Q14aFv8Z7zZ4S997jBMsNEtY6iv5kxHtQtL",
  "key32": "5bWkyuaUMzqw3k7iezhrg5Ectn4rLPPmimwFBNeanuiSxZucB65SSNa84dJrdTfsfCucj5MprWxpeUqdriTyHbHu",
  "key33": "5mqVQLJiyFhwntNt2xsfiwvAWGZCQDZQ7my3oXV8An9pYaFupgTZJNP1MHQXU2nG4wTwfwCbVc4krHwJ1BsJAz7R",
  "key34": "3U6Y6WhEYQrLo2FyqsK5BudKVUBvo7wTBn4psQPR5e8gfxHThUae48YbonaYDyEihBjaaof5UsfgowtENRUdcNdQ",
  "key35": "2RkpQDbFRy4iNQjNe3gavuUPShjJYrFzUHz2WQsmdxJaSFX7g17RmiX7sVrheNuGzzMSfLpzUMXqj4iJMMmSeVN8",
  "key36": "4UfXqwRYsUbTGoMmEQst28UaqFsYLySEkqtppmEjBBpggxkTptGuE8Z98Shy6tgyLZZXQFLmLsReDdKgMKBAb4nf",
  "key37": "45eSSawzYsc7XUhjiz2yDjoAQ8GTGLSLU2Ex8e356tfSyeXi6skEQMpZDLksfJrBcJpTwZKy87M4mxnoi64KNDbs"
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
