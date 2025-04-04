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
    "4pGbKQWBxpbfEYyotv2NqJHtrvzb39ndUhuBzHmyuV7nGJmxqWnGsuqGL4psCHzePuvrSkxCKBLJ6AqetzchwBqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5drn2AHVfHgE9PR8j9dSwN2MQ9hmh6GTbcWZQUDYsn4ws88aNKzegiT9Fo7K46qBs8r9XvRqNctq61LGWEM7NvB9",
  "key1": "39f75jeQ2P9dBMXBdYTvx1VymkNVmi2foVN2rd85VA7DJVwaz51vD5T7RLZQwkDTy7Y2sC3Vu1cfAMMfjGsoxC5V",
  "key2": "4uwz8FMeqHt9iWC4YfPq18tEpTNedJ8vYbvCzJV4BDmA3Bhs89dQ6EFRZguv6S8QvmyiJUVamZGidVJjJ2DAnn9V",
  "key3": "4jqucbHaixzMSJGLLEJMPmyQvkEv3guPWdBHSNsEb35FUCorpsJsz8RhpXqQnTi4rAF1YgU67XUGETNi7Vb97Sbb",
  "key4": "3LVyrRi91V6KfueJcxWgfJJRoNo7Gjh9xEczteAwNX6De39mrg4VVEaau9CrtyH8Zh1SYJtqz9fHt1HUPRZSDr8d",
  "key5": "3fKgxPy9PxptwD6B44uZwzNmhQXwvCpWMXHr3uNecE2KLZ7ncMT9vWcjLAH6JGGaKSq4uZ3VFCA9zZhMsTEfavx4",
  "key6": "2e7P699Ffa9jPLH56Fc639y1EZhjiGsnokmenXusbJ6oqmyro7667mZSYShfNcp6qcU2XjebdAP341AhaH1QoHd",
  "key7": "39N4v5veWWpGMcvuqm2CtJqHPGzLjdXZFzqowAqEQ4pdt9ZXaybfd5sZoc2sZwYefMCbzAUDiNbVUjVg8DEUckUK",
  "key8": "3LZPdZTDXQv5kgRq977zujinEqdA9imSMNc41rPBbXRdms2T7Vn7KjDoEWiExtAc7GGiJ6B7DEuYZSwtJUB2BG75",
  "key9": "3Hq4dFmj8YBRRb9EiBvyjk7HMcK7ohMQKWfkLjcBngr7fZPXpMv1yjxWCEQMWJxzLWyhXQx5kXhvNXcENYNu8sPE",
  "key10": "2hbNqnkySPZCwLuubKPsEVj4uoncTb4fRhxjuDBgzYGpSxSCpNd2GnqQNAQSord1bMoTKiBEf4jYG8Yk7c6VQ6pn",
  "key11": "3EDTYeLHu1od3JVpSQ5FQC9H4mU4ewv4diRvGL9nSB8pi3CFrtyoq3z4HyU3YAmndT5yAFo2iA91h9UkdVVBJiQF",
  "key12": "2DpV4bQKjWy66FcUWWvhUJSUqf6rJdHdfnHEfetyrqrTxzVV9uGodxrDGtsQZ1jxg28dyJrFyAVC9K5jqDV9RwD4",
  "key13": "B4JP8MD3u2sFesrNkm9CkEaVQUzDaszmssk3PYc9aCSuF4MDeWiaxGojyp6koaGiwxRCFeYCyZe1k2b6AsBjSrJ",
  "key14": "4qWhVjUHktUyHaTJjD7GDX9CTJcD2iFdxtneyWaCCvUjzaEkv7NwKV6CpswMe8yW6MbTv8NRc9K2gqUjBZCQV95k",
  "key15": "2CMd2NJBVMwLwvgJ2pRLTZpgjk9goFmoZsgDLk5HDZvyasZCoZ6W9A45VYdjXGb424zRrFWrKQXvb1RRzSzjKgjS",
  "key16": "5vnAjY2oLjNbg52vnBfQKNSPkegfHeV1T9Gydp9k33VMStnkQXWRc8YR1XXwA3JZfCXM6SfUpt9VJYGvvo7GQ3cw",
  "key17": "5Ad4nDZ8dxvBJT39WPvV61QgfoeefoxFidmeUC5311hgobT5BdfUEtBHaSTfB23YK1e46qqJa3pcTjeTmSn5sb5L",
  "key18": "4XW1LJLeiSqSAqcqJrDjLrxRg1sFK8giZEZCziutV5mYjsrUNo7qy9LcEnK3fxwiiwsb9TyGFjUQjHx1XYGqGDeV",
  "key19": "44N4FqqabTzSESum9dPSZsZSyekrGtCAWGoS6eUf4bbx6dVEixpAffmnu5rvYnSgVxpJ94WpZkiVNqZqrypYJX7S",
  "key20": "5HdfEm9DCxaKVRUCDsDBohQYyFcbBgAUhUNV9Hi96eGkrd5wUUuNXs7sW3n3k36GFqkGAqM96dd1Qi3DkL2FwKQQ",
  "key21": "3wEiwxUGupSWNjKwP3U5WRTNYxoSFayNnfdXxgpip6vPtT4XDx3jMpEr3r2c1nFDT7pRtFhc3xpz9CgD5CmkYtdA",
  "key22": "3kWyStRTyf5YUH2z57TCjzcPQ17hFQWpQnQ1pjJSE5DBXXA1FSTPFqfyQHQmFGaV5ahqkD2mB18Vd7mJrd1xsJ3P",
  "key23": "5QeUbnv7bvTk3BHkCMBWVD8H7pqtnNZrFdndQQFBYxE91i6VSVHAc4B3ZpZqT4xNKYX3sFARSrJbnBpjuXRZhKXq",
  "key24": "65bYDmqhr3ChxPtWUoU4nT2GPkx7RUfyaCMW4uLkA24TxDr5WVVA5dcgvemhV9NDiQNEqbW5WxCgWgKyu4g1TEun",
  "key25": "4FW5WeyQBEmouJGFTLY6dZxRsQjhrbjbtpHrgwMwuzU7CActYHxbkMeRHwmfmfRT5ZJ6bzYSg3FxQk8xEEQWdpPw",
  "key26": "59W2RVtyKb2UWF3neVyRjqJAv1ndtpxduAzJCgUwaV5pmy2xVEtTpM5MvT7CSk4WBcFn5ZtuYcLMafJBz7ZYqtVZ",
  "key27": "Evxc7aQuUm5yJP3PDUhHqevtg6KsJcnUEJMYFLvkUetYQiAiGQqdxsSbs8JSbFWiURtP4KQgd3YDtD3zvkZSo1e",
  "key28": "3zZFmdkZrrcshPm2Lswim3CwxTuwoGnRmMXbH6BzK8Cy1Tso36dQQU19DK866pxKakGzjJWJbsEdD2Np6exXwWNn",
  "key29": "9V46WTUSby1EQRJmWH3ydSedJdrmnAXsN6emNEXgDAeFsuEGNoDRNyLtYXKPNdmLcP3eCyUHVPQDQHtrsLan1qV",
  "key30": "5YpfCgWWgtGTegTGVw1pvFT7HrTkhmaJxcBQgk3jsR9gQg7wZXKbnkVVtQH7EAFqv6e68QbsSMqJnDNvZ17kJFH",
  "key31": "3YucHyc4TuV5w4LzqH73iawgXHtHF8vXP3HaAuQrQF17j5t7ZHZbzFFU2fWSWcMogHRNci5somAU8fwTUYqRzmD2",
  "key32": "4BVdt81dQYnGVoNTpxZp8mNgvRRuRWG94Z3Yc6AtKJZecu6azMmD6CqHCZTjK8iSqg5opBjgGkPbjTTstQtuycS",
  "key33": "3GGijiUxQncRqwsv5sPvYXj5167jgixU2NchJ5EgbqwLSWzcJynk2gRgc99sUdrxXZ1EgqB2X5iRPS37NvEGgB3A",
  "key34": "rSPVSvsTm4q29C8D4ZpGq62oAt5Fo49i5rtHtSq5kX5eoJtweKYkGqTAXDedxdav9ZkwKGnkZ2fYAaADFc6xuL4",
  "key35": "qGxV9T7oyXHMt4VjpedDsYEtnjQ6Da3LxUAjhkEazjmPUqPYubdniRkgGfGyLzU8vc428KES1xwWeje7QheFBvp",
  "key36": "35ebBtscRrLLzrWjiR9pDosNGNUG4MR7AgsCwefEuM7UZtoZZPs6Hh85Azs1dMz7yeysqKfjuxJor16f83CcW3Gt",
  "key37": "5adURbfzBTRzWwhKHfbZ8tYvsG14WzZGqr3HHTWgetuRcDrVzLwDZi7zic3m8rQHWFH66A8oMV6SatNQ77JnqxKA",
  "key38": "25rBDECbSiUFscn274oYYWLMzsMAeXGtUAVUb42Xj16qWuwiLut1zXgn3oejXbyBZvBoeK8ZhmwszvtaioyRxazp",
  "key39": "2ZcGvYtQZJ7eSSCvGF3ocFqksM5dAdf9QrSdUP3jyWWbcdftyMjRaSvKYNpeWZNJzFm4iDSDeUab68hC3VRqm7x4",
  "key40": "4KcgMt2KRwAVSZrHtwcKsSfpbsFP3nSNwUQRw25CdT4H4LkmiUcuEvk4rPWsAdJxrbtAL1DQBkPZE2hD8eUcTsu"
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
