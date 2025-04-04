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
    "2zCvWYNZSvYHyTzanYK3vkGX6prWsJSnu2YWL5xZw8HZ7MWcctwCYjHGdakdTRyDtkgAM4aaivV9G5mtREr311EV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iViWVyGuJ1Hh6mHkYvo4ydLNnXrCSDP85Z2MHqXYKAofaGUibfsX7jTJMP8rtNJgk3m5WFtr8XQ15DtvBAya6xa",
  "key1": "5jfCYBcf75Z3s1HWaS4AW8289DTDJ42BAXESfwHJfGT5bMFfz8sk6Puyzpq9yjfhfkP8WdTH77HLbg31SUvzHRPE",
  "key2": "x37WC7mtqGcf5vuXri3HHtfWYkDu6w4M2k61MoJ6vJkPiL7TXeRXGk1Ko6LosMP3C4G396ihbBQ7nhZd7A3zqrw",
  "key3": "52pf98dgvWmZmHfjDEyFzBAvy3FokUqdNKoJYBoHC5qmug8UWBkv2fTAjaR58GC9VQT6Ry8JZ4W8uaMsikq1fhvj",
  "key4": "K5G8opEJR4h49QhbA8LKyy4D92ahm6N6Xq4DGPbKgYnvspgwy89go6Nra3ksYhq2Umt6BcDqNuJNFPNcK3rxXXw",
  "key5": "4vCUxC7qUvp1X6CNb2jYx89QjKhGbPHZtVZ3uK2nAMwzRa7B45qdhoUvnyNUFJGqALRRJrwHFEnRNUCHS2hy8UGv",
  "key6": "2hrHEyXQPCFWz49nQ2hcw3QG8tYkbyP55HBXiGjVxv4RaFo458SRKTtNuZzV2tb1i5XVvzxCC6TK2P2ksjiy4Twj",
  "key7": "dEsxbV58JPqmkv5KACDyujaSSSPuBAmzRy9GCfwTAwnzDiV6RAjCUZQAQNYKDewPCSVQz6k4xWMqDw2DraPGS4H",
  "key8": "4nM4oY7q54ctbitAZJWCSisJZKdMeuTWkwNupWryXAHXhbkKvQs415asE1ZzZJUZe8x9z2W5HD5rKHbbyfjNQ7TP",
  "key9": "bVnXPmRqpPM4jFN74JcwbnTmUHaPHNgFxSMqEMvQpkoGAeHbN51mwu2W2z1uraCTpr7evFtCJF6fwcpnCRS7wo1",
  "key10": "45ewyX3kPBi9JubcAEw5mA9Jne6xrWn6kV5SpUnJrnqAk3hvC3rJ2Yhzz6SWLqrtG3T7zyap63D5XVcMAUdk8k9y",
  "key11": "D6tsVT9h2cLfsV4se7Gdv2PpbmXTmN5X5A54Mu7KKC7SZn55PzJc4iXd1EGZVEob8d9heuvanXSxFgh9QBQtNgF",
  "key12": "5L4hwqyTNRn9JvgZfVk6wpA1KBUgPahNVqogxo2qKuNkn7T7i74y1HwBzVXzKXo6Sr6f8ZdQ1iioG327FXeWcvVp",
  "key13": "56i3r2znbkBjvyHAbyPb6drLxf91N9RmudAB9BQPDiRruJvLMXfZfJ9mVKWPR1RhjJTUdfgiHXx7LCkAVVWMKSNU",
  "key14": "3KCdGJecXaHb13gKhkNYQxAFp4Z8iYr1vQVTB8185haY7qeg6BqrMjuGTUoF8g5nGMVjk88sNDrQha7Sw47mCoNB",
  "key15": "98TwXARVBxXAb1JLFGiHtxhecHgWmabVqMhNMPYxqSEWR7aFgo9YVmkVYEaBFfGpsSDPoDwRdGoWB7oohpo9LG4",
  "key16": "wnNF2kruWuZJkpfRonQScu6vXdeoucVFtVk3kEfanCYCjqrpfxJNvaPAsEhzzsVT9LG8fcHE4rF31CWibHaxe2A",
  "key17": "3Mz8eFNXo65yESMPs97TKEe5eUyfGfKyREETvoLQwphTY2Vf39cr6gVgpPjCDx8sK4Ao5EGtNo5HJ5hBUrTbZ1WT",
  "key18": "3JvfX7cwaTpQrsNBShfDeMkegAp7hWcAJcKgxPxFQByzgyDtNvo1MwFmSN9bVGrM6PLwgSVy4vh7rkoM4t7EYnaW",
  "key19": "2zAqhvBi6mfHWtTeo1tMJomWe5wUdbBTgkCW33gpFLiFzyhVWQFHPY71kGBLv9Sz9poo76LrqvrNvqAAfpvESphS",
  "key20": "2V2cAgtFA1GMkUEPN3eszJce2mrpvmQUGJqQjhsxtiJQEFkYjGYw2f42xLdieSSKgsrBuEYA7WA6M74NvN8AVnU2",
  "key21": "5fe5LfNPCVRDUpXgQG8Vtj8PCeasrpjQC4431JPS7xK48rmg9aTfeWhDi6ChR625UrEuKiiau6YnFc82ac397wkG",
  "key22": "yk3grxJMR4NBUwZKSqzSdirPDuD4PpUVz21wtoZQU7XPtKs3r1cY79AtEAV7g8RRrWwA3UFSKyFzNFZ9vUunhHf",
  "key23": "3bAtH1rUP3Ag7osZBKMMfg9YukRxtihgJ8WHwo4aZZ2sv86dB2wZm3MyS9QbffxkG8AqYXUyaw2DqyPA5o15CyFt",
  "key24": "48tWBiZg7un2LXcAbmSEqJQZrCmkwYyX7EEgtLwhMczTpnHjXjKPzVjd8LgAtCWqjkrpBfwgAbxm6ws5aPi6BpoL",
  "key25": "3Rjy18o4egn44WT1QBD89urCmyic37fZ2YoN9TYwHKo6k9CqvLUuKQqhBvi2jYmQ274FbZa3ZKgZFGgNjgoL69rv",
  "key26": "Tso5uWhWDnMZxmBjoPfV4SmTD7W5mMjC1nVncbbJxgHpQfuqBEcL8D6xh2KMB9i1hb3edvYLPrJDEGLZbF2sp1f",
  "key27": "4QDFtxhq3U2vxhYdBvwfKcTMpzBdp96GnqZsYn7ovxXwf3wgvvPi4JfRigg4mrT2KLvV5q92jJa2uPTeR2MSjWy5",
  "key28": "C6VZm7MLdU2aAQEHoc8TYLEsPZW1obAG4Qnin2syBLfq3rYJXV8Z3s4qsnYJkbC7Pci7RsRSRHQk9Jjtincqfg3",
  "key29": "3stmBBAvDsxa7rEttSrZM7THbA5CchVb7VRqNi8WNU7nwqH7pgtp4uD95WLGkt6g4KntXFMfzop1xK3hFA57QbFF",
  "key30": "2ejciokAYzJEm3cSPfyEXZM2vHMWuwYgKC2uLE49gQjiy9LEAd9B3hVo5cV9tTUEQ6uWbzjMqSNwv4CQWKCXR9Vi",
  "key31": "651V5vybRFvfeHx8g1eU2DtcnsdBtmmN2x3rEmJmzj5daALX4dj6zbGMW9699YTLD2W99cS8t7ZYjBqxyabLUxaa",
  "key32": "27FTP4E8eaxh9SSvZULzqa9wSronQ8br3eTr3pEyYPxK8LsRFmgzEVFRjNsVJoyeF3UDWvgusJ32UP6v1PZmjr5k",
  "key33": "55s3ae6F5hWKnC84Rrf1xSZzeTdyxGKx6VW6jgrSEvLAk5wh3p7dWa5aJ5oYxFtVJro7hzCJuy4vUByGnXuhvmZ",
  "key34": "2SWEyCvch1HP6XJ2bNDnAdcp1aTUCMDhurnGS5kPrWJE2ZmF8JNY3bu9A9B7bNPWeAHNwqKAyuXtjUDfzwHdxotU",
  "key35": "xNeCj45pKpZknkXYDkLbFvMmKmVzVjcRXB6uWm9jjEA2ZUuLpEwtYt3oP26Hr8TLhV8YSzs8YktodAXWYurJTDU",
  "key36": "5Un5KsKueddTBwf977hidnWdyVeGAoJMLamKGuLbBTyPoryiXarhFutvF2f4CoWZaVeeLynf817QSgiWEJDCCtKq"
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
