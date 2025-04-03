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
    "53N4U9EDyGdxYWnNFwnyU3puUz1tN2am1mR85uR8gaWyBUwHnKvey7T6Zm4A1cuVfJXFTWgJdRJ6rw8VrNuA6FRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cnJ32Hjp6b1F3cUMCyV74V9BHwADkytpigiiBL55S7AEfjNtKg4GDTnkzmHhyxvSga6iyteBH2ZgwQ6PgGXPHjL",
  "key1": "5GzbV5XRiYxZFs2ATmgbaiEw6qwmWFtqZ8MiDV7op8Doo9N3zoERHB3UtHavhrgDADrhZibLwoxDpXFkw8RyiQ3c",
  "key2": "5Q22LP5e6L73gXRSSo8zNyBcsxAZLmRX8VKUKJMFy7cb37GkWeMLf5mLPgBp5xYz93uUXZfrUUnSnwHc8F2xMpEu",
  "key3": "5pP6Ao4KXUCZx5WfG5oQ5jdJseRdhvN53Gt1xjWmCof5pQtGGdGP984GuW8sQqp7tB9bCRzPDNqvDL5tUjcg5pSf",
  "key4": "XsfVHWNA571PJ99DfK2ZfFZKQdnMdC6nVFWRFRwTXKnNf1rAjZXrFDdv2YKyN66cvN1wxaVJtNdrZ4Ctu4LVyQu",
  "key5": "3gyLHY1Pf8mPkmXVbCeZ5H1bWtyLRQfK9Lar8rP1wajMXjtF5QxX4PrBuDAFAYRrZPp6pgQJNbqR7Vhyzc4j5Uqa",
  "key6": "3RU9KWoFHvSgq9dMfr2nhGecdc4Hzab7cuU8gQKGgo4gY38wRTUa4jQ4qxD5vqJgYuvMwN84HcCCjpDui6thRahS",
  "key7": "3tzkyUawFH3XDiexYHtBStBdwyCbcJvxF1cV8Mt1DA8jt8rocHCUaryiVWHTiKgMdgcEgtqmzXQ5o5cZ7gqm8SUt",
  "key8": "3qeMY54gmL8Qub5sQZq6bR6rAnaQDC3EJHsn5q2XcqBhatyxL5d1JUnfjmbcdn9txCy6Fdewu4sGEL64koLjCHyA",
  "key9": "3UYivzGun7GMm5iMPgY67FRpfSdK2Y4WianBchL427g4cH4kgu2Ki11uCbvjvRqhP8C7cFugh7TDWZzno3xjmk8W",
  "key10": "2E8nXXK1a42gYHf1VAyWLBxDPjhLv4LEJjsUMxKL9Gse84PAuvtxof6vU7Rb7Q7BBXLmAPUUFnXkgND1pjyRzMUM",
  "key11": "gk8hZFqRwJ68KVxB1LoRKU8n2Jpb42VkTjc93R2e7erEcAGEfwLEb8Y23viEP64hgGwiTLktEXgrrZVfa4D8vGq",
  "key12": "7KAryzi6caNFH6rRJWvUsdNsDnRszEVx3WY5muzzkek1eQxkxymiqKpU1pdWTbsUNeepYLerKBgn3i93L6oXQnN",
  "key13": "4eTe8iBU6wrGVmYDkARU6ZS3Ge9fyGcX5AyGKc9kM7ZqnEtj6UT3g548sLr4y7DFXnCztumMqFgqiVgCyo5XdZDj",
  "key14": "26F7sPwS4LR1dhFULb5H5HBCzGC2nGTnvkdsjcpK3rbikPuBKHMMBEq91Lk4MZMw6z1aK8C3FdnDMDsiuFiH4Af7",
  "key15": "4L1f5wV5Li8cjFzGtH25Lrbah2z2Sw8P4B6A7isnbvyWSgG77orbZcYARPyM8M3Fnw1jpg49HJa66eBqTtfT1GEC",
  "key16": "4mgvrn8ghiVjTSK4LNQ7Enr3xG6ERGFsUcSKFQ3opaWLYbNJtVBgquH2NQANjcgoYkE2bWw9LgHEC3yBrCXoUAaD",
  "key17": "CRfKqft9BjUptBRe8KCjVipk2rsBkYs43THPSvUhMCYfszaSpjgAaDah5cY99J1WsufnA4yaLe2AeYKDus3NbN1",
  "key18": "4fJt1MVyrZfgLYKejNPjgDu3CdGZZqU4TuYSpBTkrVGxhAkZ7Bx2Qogw7ZHiq5skrVdJ9yaSkYnXULYrTg3ag94X",
  "key19": "3noMTiFpfpun5yt4v3cye1pSQeQrhevWDQJFLcuSsWsuRJhSVrVPXkTuUysYre3a9fhp4bzeF8vX4J7wepYKZ2LA",
  "key20": "57bk78LyHPgMy2YErAA1CkFyWwJgBn2dNxWQqxF9XSDwkHP3EWa8Jsz9nhGsRSN3UV8yQE5HWYyTCwKoJUV5tx7h",
  "key21": "g97iFNqtPjqyhZs5GGwqhYVtY8hrhAPJSqMgbTNZwDLHbjpWAwbDcZJU8kRzsRdadgP2E6ZEYVj2cpx7CdouWTf",
  "key22": "3D6MsVmANnhbNJgrDLh9fJhye63P9QUbh6CR5UZprrwKUps3LHWJG5doweFF7U4cqScMt33gsiW8p4PTPxmxYj33",
  "key23": "chPa9bDqqXxJbrQGTTgzxQ9RDUEEZ6axF5Wv5TTDvJyn57JCZC3MhCpcz3s4bJ7U8XmzFrWJfagHoMHWeTHdap1",
  "key24": "21SzRTEcVmSToQgpBKW7VjddLrvJ4LYytM7cSk5adfykvqAxdTYHFJQjERbzshWHh8unA4xfWYsxBdNHsv8wzpEJ",
  "key25": "4dZ7ZMvFkzbtKgJJYfkXhMMvmRuywi7QggwhMZjRdRm3eDM6iHp5ypZ7Uvo2yfG2oihC5vCt6XXM6qDJGh3usDS4",
  "key26": "SGLrgifr9y7TnN8z17BUg5hBp1QuiXK3cN1Nc4hPX6d2N5eT4e3g3dfXqpqa5FiiVdoNydq4MmDDn5c33iH8jGL",
  "key27": "4kCt7ymn8CC2uEn9S9aoqPt1RDEQRuQdvJNsdrWpWnkLepqxnBu7zdhZYW82hXQDavSj3DTsy8hoX9kc6EjKuaXR",
  "key28": "5cjFg3segUuCdat9swe9FhpjaLCzEFhwpW23YtRFC5fmUYvfAaYnEGn3T8ukra62YT51csSoECjuyYSTPPzvwmEn",
  "key29": "4ayxFhGqiTYGmbgGVRUzXey4K2EM53JJ2haUbuQkZ8vVhk1qM8otwiTvodriDgCFrF2xa8iE4VVc3kKQFZkgHpBE",
  "key30": "47YBU6u4Qh8G5upksz7axgXZLxs12dsgNfg2V9g5GMLHGSJLxiR983Y1xR2REaMUdQe2sAzsKTbKu77CymkjDJQq",
  "key31": "2pN7zu5is8nMZmCPbaXSUsLz4bu4riYgxRHGWhgKXxgdrypg5qm7UvHE1y8vF74BzXjYz2a55McV32kXkdCeXLVK",
  "key32": "32PYX2f32jR1Cv3fLKCdMkHfAxbWfUc2sPfUYmff6yx9RHrhp7FcJhQjCXSJMHpyv9nDpCucmeCsLLpbEUs32N9G",
  "key33": "5jnX7yvhZart753k985Q48ZjYbMZXP5VU2KLh5PVcipywWvy9urvAfRhYPWiN7Cv2yD72WD6kq1pgVeddhmJ94qy",
  "key34": "5gJKJCjUnzgXSgAZgbjjbD9yV5BCfjBDfSAZrQZM2Az51AgK4mYX7LeT5GmeEFzq8JcGRjyZmEbNChFPFZLQYwDC",
  "key35": "22GQSzairm4ago4SawDwBgHL5kzH8Po2kBygUJ4VfvaroB2pT9TW3SMscHcvmcLHkju5ccZ28wZJEHWz5dwcxMdD",
  "key36": "2dtd1ofpK4EpKb4sUijjwTtCZ3c93DNRjkWbNJi56cPUfL3mgbo2WjQLRQ6aNon1dRH9zPKvtgWMFaZkPextd6nF"
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
