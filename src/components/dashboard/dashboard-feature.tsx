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
    "4rgWVAykXYKEb3CjZmrN3cBCAqwX9sPTeHVkTfeDJLdn3m9dPpU3z1CvAZHzTe49JG3UsFsMbUBXLsDZuMMvzmpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQ6Wbm4M8Kf7HBQMq4L1J6nK62mkWdCwKKKWwiKYKD3VxUngU7FYyfwUxy6uH9yWauths9hoLoJexgry4F1p5aN",
  "key1": "8cqCNPSC4CSePKHam569xNP6nXHeZZsUMoP5SQ9CDNQfTQ9Y9vXQ1QBu3PcJx15RGQyQ5MYJUewGGNuM2RUeBu8",
  "key2": "4LDHsbFBXsTLFkusbxHEJPLwwpw9kDDuPb5qff3j7qWWCwbyRERea2H1JbiRqkcWi1GnR9CSbHVKFWujdUYAjQ27",
  "key3": "56KTVfjQa8ojLpAUikhPjYrgPyLDPP7XjaASiJDz1NsPJJtghXd9iuNLaRyV3H89zfueJctAbTHb35Gn6a3b4Wu5",
  "key4": "4E9tUbuEHEZ3XGqfFt3cDbrsw3sUTsLnFykHBmsFHAV8PaD9z6AG6uBN1GRxnJuRD6hrgJxC5veeYuyf3XQDqCGC",
  "key5": "38myWYmtspXvVWYXrmuRYerxt1EzevGYUaFz1B9vncc3eUqpayGio7VD5YAV1LctUdZqfzraFBemTQio7eBizzN",
  "key6": "5rbndY6xd9FTdjQjSxsFP63YVG269VvC3S2NEGCqjAEBywiyBi3YTymW4qXpBjd98yASYzH2BHC3C4ufVKHkDgvq",
  "key7": "nC6LVoaUVXafSYN9CMBdGb96bAcx7xpvdUTK4CcPspdXPXkhKSfLXNsRPDYUSUzySZ2auqAgkYmh6WW27qxELs3",
  "key8": "49NSE8XNiAz2XHpY76daQGeFzZFFzmSPAeAeDKhn4AawLBbsFuk2ZSPLa3DZHtP1xLvtN5iDvXX7PERJt6ev2ZGC",
  "key9": "5dyrByvZSeThsfYGMZB61rvw8SM7pZno44dZ7aTzqGcfsojhtPxUgbqSAaFNrfaicpLVA6WyW7tvcgdAd9NBEZ9V",
  "key10": "4ninG8QrZvE897WQ2BQwGHN4zsNa5C9ygmoksKks2TkiVxnoDN5hiABC6uouKkfe1UzSZ7s79wXwpWD1kWa1EdqH",
  "key11": "311czb2uVXefeHxoJfgVm2iUa83kLn9X8SX7B2WmuxyoDPe5TqjJ2mJtpsUB27tzrU69F14eTXqQP6Dx84C6JoYY",
  "key12": "3z5AFMtv8APZ2Y4FiFD3fFs8vQt5uLLLQSPwgV3QfmpVtegjDgKyPSNdGQy17gMdJM9srZHmqGbdGtWwZ7RLBhX4",
  "key13": "2yNHnBkXQZqQTDwcJWMKyQxh84ZxoEPsf33BipZ3Bp7egUorL3AsBPn8kqoa2tYt7hczT6eQzGtTNXm4Rb84NxoJ",
  "key14": "5Pv1942TuoS2PyRiFAKUwSeRZYxmxjMDWDeWHron9bWSpwPKzrtkeAYaWXixfD7Tuifqgg4aq2Czb85Lkb4dG4kq",
  "key15": "3ci39QGFGVCthhDLFmKqQtArnuE6sjdzuJD3L4MiHkF4fKw7ZmHkbGb3Dzryvdx1L2JsAYm38DmCfzSs8yT2JW3F",
  "key16": "2R4RtajzqkBiU4M9Df3gvtHGqCHucUeJFM5CY97v9rfCHLbwmbCfiVEx75zN4HhG7ZJRQS1EJCayN6m8gY1haRg6",
  "key17": "D798ZbCBhpDNXe9SL4uEF1Jtisjv79MB2UMjufrfBmBxpF4gPFeitcKAkDrr6tVn3XRTHom7Kdd1J265hkqggAz",
  "key18": "2wkVXvnpRf7g4gG83AhqNS61PZAKBrTR3ckuk596zkgmJaWgB1VFdip56wNafdcnMu7Ven72yDaMcq7KfJM5wX3z",
  "key19": "qYpgPNv9LtHeDcATKFzuNhsMrQUZ8QkTd1uQMnmtmHzdf3dtPwr2h3WmcCjdgCjvgnUWbaSHbtdduapwBMvGay1",
  "key20": "2V9ghaWtqoJL7UZzi5Mb591fRLYLarsyFcVRyiZ49Ez3agjdMbwvbkDRrfj9tprrAmjpYzgSB3CSjLwNoppT88hs",
  "key21": "3VgU6wWR2S5sKYJcjvCJx6WmHEbmQGxSpz43PCJRSjDzWmd96QSLTPmBVFH1rZxCwwaNqPBn1teWKiPmhz4H5fNG",
  "key22": "5yUaMmvMnZUSUkMNsAXUSioktCDxtY3QuomHtsD8ZXE3ZbwsgdZCE9r8DezHd2LNgsNYLr89HscWy6VSeN4muuzW",
  "key23": "3Y2nQi5kXFP2MDSPJYECCSL7gS6Fc7uisKvsLrcRpi3D2B4Htf7P7RuRKHLGCXDji3UJ1gM4mKXaDpyHYQNnD13w",
  "key24": "Sb3Fb7uiTqaCiEXrfMNwZzTe2Uyn4nfWnZvWCrWXjXou62QPr98r88L867SYoy52nAPTZuKz7pnrQXx6GnWJNhg",
  "key25": "cWphn5VW92w2ifMFTTtdJuvEezXrTtKdofR6oXzUrrvznxdRSSWwPqhsPdCPQxyPSqDztmaUjSELjCfyRPob9PT",
  "key26": "38cYDYMrkWxJL8CaCzTJ3Soy43w5etwmYKj8X5DcxPSZWoD5Zv3qyVW6XRGugNvwVrELvdQxK46FHvd7i9Kw8Zzs",
  "key27": "NYHZfqFTGAdCf6TMXHzCiN5Gdh8LRafaQuYyanJcwi5HwDDCQ4FW4wYChbVZYmX3MFTcYGPGNQGJBg65C6iUYRj",
  "key28": "5Ww69c6Pbf6vKUt7NWK1nnZsTxEB1spfa29rbhwkDZwZ6ACUQTLrofnu45zDXuKx1McDLmnuTujd8zxHZtfiMPmg",
  "key29": "4oAwmEAUTTokFUKs8T3kvHzMNtvU5TzwCtLwm52rxtRGGpjRD3HBddDC5c8JjpmicBhUUbyxwhUiAHTvNACpGfmQ",
  "key30": "3hwDEdkansbJnArxnarhG47GAXHvLfmP2d5881xHiKMUcGstjqMbqB9bMhd4hJAoGNmtT4sCtrFJH2T49wmVHw3U",
  "key31": "QWt9Ud3eDSgqzCkSyhvj4nVh5hQGFYTVq58yDW1Zvp8s8ghAPzannqM5DQbzT9dEjfnsPTJNWb8X44TKXo2W6nG",
  "key32": "icCkTsVhpD9YpTrJfyqEU4kZCcBpLdzg6uAFeYRUeDTqWe4f6MLYDvBau7wAtt4uSSVFiVMFU7n4cA4S2yvR4Y5",
  "key33": "2DBT3s99JLUtxxAYTBPgYRJCdFsoZZELGQTViREXkzgBhVRZw5ZN6huuaaojCPCg4dVdRPG3uGQGCojuXfTh7S77",
  "key34": "3XtEAqnxf7EVMwA7iGxrnwCkcoMmwDNobuZdWXF3VkazLxVYDn4ERdtorp3XsCXLVt7yaUkZ2pukrFGau9BirqvF",
  "key35": "2pw8Sv1NP9DpFmjnrbLDojZRWLQsmTF6RA8LPRmLzifFky4YxjT8TDJ4TjHssG35p1Q1CSqydQworbEbpNkVK96c",
  "key36": "2yQh2gp8EN1knWkbk3bikFULTwu8vxKPxj3pZfLWjgHGeyxr9L8rBucTNNicaVTqTzDjf8BY5SCScKsUw1uDkiVH",
  "key37": "5XfzJkassKjcLUtWu7Cdyp5uhK7mNprMffnftCtSqhZJHNTff9abyFQu8C4xynixAxscPbFidu47fVc8BZrpwsWJ",
  "key38": "5Jkgjp9fEJQe6kwJc46Mkevu5uYDQ9P3KVUq1PvARAGgeS2r7rXnKToZZfMUPkU4RtU9qnR1166eWdZSVppuToAX"
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
