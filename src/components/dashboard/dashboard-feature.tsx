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
    "7kubSMs25WVpgKctvxhPFukkJ7y6Fns3Z4qfKRgMSd9qf9kCqstrp4co7LGb986R9p4K27dpNgvbGtCHHKRJ6sR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nvJ4qeJLjYrhVduEfbbzLzL8CVBgGpQ6mugbvLWyMQkcrRYGSW3QTuvtFz9YTBpy5yBMB7bXTr3BY9P57grxicP",
  "key1": "4qvWHEnhtWGCkjshHDJbtxW1JfQfXJtYu8reFrPcMYLQXVeMQLiEC2mSNmBDjGYBe9BmWQRpPLbo7y2Rzz61pgjt",
  "key2": "ipKiNcrWU2cCRLHgb77E2HvZGMJ9DMhwjRyizn6kri9wQaNe1edVvXfZ8oMZUMWi5Jy94YiKXnMfahHWMTjBtTy",
  "key3": "2iei9Qf8x2igTdeWvXdBcRyUnJwdjtENpXvEw2EJLaEPYCzGnj9s8yB1nEJ7tEJxzp5Rw9LaeL4pMw7sExaBgkJM",
  "key4": "5ZvdHcKUzTqudW4FfowBLpC7sf4d5UypWvqjyrC8EGhm7BV5Bjvdr3haQUCsrmxD3TKT4ZRd9Fd2hbQG29BFYB9m",
  "key5": "9YeePDxzubJPLV5zZSLVgbbNQu1v2b2fHECzKDKuu44o1HVtPGgNqvA495njgcDgPkTsD7LbhGBm9QWwMYGNa33",
  "key6": "4wGbGx7HdmfcLpSD1pv1Dfr6QT8FAffKpo1UcodsVwZ9vp5KvRXKjj15efMJH3SqNRtQ5rEPXECjdArXsm1L9jRK",
  "key7": "AMDGfs22hMQsLFMkKNFbEwL47WdaGJjLwzwgyXHVNW7Dz2YtKnT7DDwpTaMQ78uSceVP5DhVX1xhK13FBjtnbna",
  "key8": "o9uE5EWRMGayhiYYwmAgnMGje1Q5mbe8Cse25JTyPyj7Qff8K5VKiRcksc3Qr9HYDDDr6CpVVQNsUE8VAAvxC7v",
  "key9": "27kw8rsdQ84mYdYsTJ4qxPQWaZhqU5Wwc2XMLAB5BzpgYUUUMjNQB2nLPGphg2pugPcZEWUcDcHqND87ejgh4oBg",
  "key10": "xC9aBQcAtDv1LeQ2139wwSmTTSFMSCVsT9TqM68HpQboN1j1TkAs6asRKaEn5MbLngQzkqZroBp9G8zVaY13b4s",
  "key11": "5oKhCCo41PkGKCSurzgM694KPvS2TuC9MVHgwrtcmjbftKwDpGPxTLiBDPsCNCikGdZFKqAw8XRW4zAUk6qCUYBa",
  "key12": "4T4dkKDusE6uGfyYjnH42itMSZm1dTnHCgeSQ5oyKyu9SfDM97gHACXxM1teKCRVkHyQLvgv6cT6GC7BCd7t6ym1",
  "key13": "3rqpwEGWo5HfsBMydA633mZG3bpeyKaKFWVjz2RUY6nU1dwRvLBMf1ttQ2epFprnDwxMgQM8V6U1YovzQsRsS4CZ",
  "key14": "5Ghes7ZWV3PJ8pPaWjYqitydqCksdapys76scbYyCHxQL6VsSeYqjwF7iw8dBJpzRWKekySsvNnyVXNQw8PyGDp4",
  "key15": "zg35KXAjdmbBpL3RTyiMttbisPUtVf8ZqcU6BzpmSea3NHmdF6W4aoF5q4ZkD8jgDXQgkgB26Lt1UPB7cWmkir1",
  "key16": "5vXHGpn4qWoYvkvhdoXFGY4NsPp9f65wtv5XEhf8zFjotokG83Ver6u93xqjJk6rcgG8vXiinP6BpbvV12QAatwF",
  "key17": "VY4yaAyHBQtzN21YueHogr6MeMBVoyETWsT6rYNDckcvYeq1onmd6aDVpZSHmPFf4jL2AzXGZqcTGr9m9pddD98",
  "key18": "A3SmoJp8E7eMskSMvQf44MXAzdZvXmxYyKA1NVQe14sPPLrnDBPrUpKjfs31Px32Ds31ES4zoQyfxKYRuk3Co84",
  "key19": "5TzP76KvQdMLPHhp6Kb4G45gNmoMZqWM6XEhwjeSxEsnDh5inUXx2W5JS157FkpCb7et5HfgJUSkttMGEJTRjmB6",
  "key20": "5oqyBnYP6ATqAz9T4aQXRu9hr6dx7zG3DdBffSQ99MhVG78vQsHrQsuLaBY9n6aQvGLDp8FfKnSfGxZKrXX69ypU",
  "key21": "BwX5HKsiPceApTwq6GEWZYpg3VKbw7W3Q8FBjmLSdPoS387FsJzijg4bFGydavgqUcagtvL4xnNJj8ivAB37CNZ",
  "key22": "5twZwPgUL4Hv4B2hAZha2gJeCn7B7mNybWUEFsiZqhBVRcDhQzXnwh4o5ijWHyGi5AvDGQH2eTN5S3Dz3DWMRPmJ",
  "key23": "3BHMkf7ZVWpj2r86GW57CQpK9Yo2yTzLHhSRABiTjKzGS8c2jQbCWiPmnjQXesh74LFXbDeEhQe4mHdgysePeGfE",
  "key24": "5bM35f3oBvNgQAyPnN6WcA2Ad3M8gvFffW8ji1nWK7pg2mt5eLBc4Q18ij3iQTuDTHEuN93LrPkBgZpWcYNurgY5",
  "key25": "3EKmYnCyADmzqHnWcqm6WAs9zTXzrqK4t42ESVMVzNj7qC2i2MtpsLTzKU8wvm7Sd8GGgPfx2qD3swjc9VGrWjgt",
  "key26": "2juRNvJJj1BbUbVzDkjxx7se5E9LsXNwZ3NfoVwWJSD5m8fbbRi2HVvU98nAZ7UBvCVe5Et8h6BtS7SaEzQBTseJ",
  "key27": "FAUe7QhEbjhTFKRUmw2dLVa3KygdTeVs7oLBYmPm6gLC8ZWtwRxVeJsuEtBWKXjvGtcuukW1dwtEmSw821dDaWN",
  "key28": "5yb6cWNGksx1m31ps9QmowfVEv9PJZDe1n6nRnVZwXxKYokpbsqxNBewm8cxhAb2mUehaL4muoyrVrgyoXscGkod",
  "key29": "5Y7hYbfzTg1w415uM5oRgjfFPUDQ6oeCtAwMeDCJU16ZfEx9oHHaGcTVm6MQ9Z4fKg3PP5KpcD1Q84iFAnnUDtDV",
  "key30": "394cPAtXpuYk7VSZhyGyeDNSrSdsWUVaSVPQmm5etjGciHXhQPQi8QnqsemW2jQ5aS9pRQ4oGXHpUxN59WAQuE8G",
  "key31": "47V16FMEdR8MAMrbf6PQGAmxtd8m8XvgtKttfNq1iFrxAaxyrMAWc6chMeSeKmt9XxV9ueusrBdFEmfQG1Hzhecu",
  "key32": "aM4qw9MZEkpZG2irASiRkcF45F2REAMxyazWuzd8sPrbysrWHi69N97miWXqqpu3KX88brqiohkYQyBo36Q3yu9",
  "key33": "5qUW5JMrVoH6zyZUdU2VHWz6JoYr48BESd9BAaSCBeH4SihcB9g3ogtXg6Y2ap7zm888LjLtH9jPu2XbMjwJNKc",
  "key34": "2RiUxexhQQRFLeX3k26gfBJi3DxfAXd7iz299hXftDEwja23KybUo6iVeAAKzYUKpguayspMNgZVh9SUTXrPdkaR",
  "key35": "67gmETgT8wjjWmP3DU8oqS4fx5t1x9Dy2hesdLosz4ZWT9HpwnbAyLj4J31NWHkkKbgWRibNYKnciUno5zPiWAFa",
  "key36": "513YwQuxaTohNiusw2VUJm1NXBYg5qEaQnnAJHcS9GSvx9EDXYs7TYfu8uiFXgtMxtPNQA3zoWPrFgWn37YQBTxW",
  "key37": "22RLeHxF6SW8UG9HMm1HvuL37StzsA2JxE7BNhHLmVeDMFVaeSwRTe8xR2dTyGBkWwUQWWyuL3V9Bf4YCb7F3ZFK",
  "key38": "4aYZZ26MZYM9fVxfiuDBBjC15snxQAsKMMkBYoeMSoG6hqEA3U5AW9EDFKRAanqqRNQ9XsndaCoJJRGEJa1aywZD",
  "key39": "3op7RibyFUXWShADLuJ1H9YW1D9hkLfTWYFoBVg79HSPwKtBWRvdBqfGjwYTiSKXfmUyUyz2aNom8s6rbbNp55H9",
  "key40": "5Da6eFHwH4ndJfhhX9bFjfhu7dp2LUGWRE4LJyGWFWJudFrGFQGC4EaK5Bdsn6zeTfdefgPJRKeWBJLNLrZEpczG",
  "key41": "38fjdkmMGpLUJevPhn9oV4GzMiuT9k8NH6ybKsChri26aMyU1P6tUuYWEoqeuC7DPHRgYugZNpZGUT3YCy2mFBU9",
  "key42": "2u7qMVE8kpHh9t1rYFC6mQiyefA3WuM45hAQzaMxsu56fpkVPCKTFAoyGAQiuhcYmhjkomJkxMn77t7LdEzKCAqy"
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
