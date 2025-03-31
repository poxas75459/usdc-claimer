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
    "5schxasXuWqVbEauLHGY9zhATzGg7XVzo64pCEmcpXPnt8wwxNKZsGrkq94NPfSPKkzpT5oUhhSnkkxt8DVqVMpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qe4SwbyeTL4XtbDshZBXiDBwug9r33aUoqJ6Zx7X7jQ1JSmWGZt4dUNPZBkxh2yucTym42zsVUcpZ1XnhfDUAVP",
  "key1": "22EnMWdGSKNCPjcDrJthqm8FJJ2L76eE2u5s9hswhWYSw6DD69f6UgufDZaqoCps9guZyifhenJfyAh9ZStaiYyL",
  "key2": "2HbrLiZBPaQjetwQdmZZWvbjxfX53BTXAhdtNn1ncroQaGstfAaG76JXZjkAe5aRemM3ARibNGBDScxTFqYzVC2v",
  "key3": "4XnuxpMLcssokjKCJrsN37ag1WUQHrG5QjKFXkKNHMMYt7ckcT6vzyYhABDrXHvsXff4cuPfbQNdN7hv2P96Haxq",
  "key4": "2VtUVEZicKPZhab7XULTXE9t3W61tg1kMEYTL2ZodhMVwCx35NYyftM9QuVRHAdM6eheVJ7CWJ5E24t4rQZhH2tN",
  "key5": "8kDdQXPSVb1AcAEf1qDvWWJ17o2VMjJcgYZFtTdHKXh1XRkD21kFQVX2kd6BsQarqP7Waqnh9vsSdJ1JRHaRhvx",
  "key6": "46UEwSiduYmqHSTJtNv9hvgXLVXpXQGPeT3XUmxNDEBLTaQtmYeQjbteavm1juwkQRdWgHGBeqBooH5av8Biu1Du",
  "key7": "61kC3eZxdqvsYkr1bB2DGssN9uiACZquatAVM5sPRUwWPzYjHVamg5HmFANQemD19JpkYo97NUrGiK5QrditUEe8",
  "key8": "3Ba85uyF66kqCxu4eE1SCmsdVSDxwDo2shs5hzPkqFJfwofEocA7N5KUJcBMQmePW11PiE4GkfwvwS8e1hq8vbnZ",
  "key9": "4EGr7QoFXEKGV1tXiSPuddtWsCb1YcSAPsR8izfa2j2zTG3hSe3YZXShZa95H4zAasoczVFePAx1YiRFthYKzRUj",
  "key10": "42GrFfvbPBmHhPBc25n8hYfs5zjuNwAbbxVbKE3jNB1yqX7AsK1AR5zycPMnqKDk3fE6fJnxJqfGedH6fvbtJHuQ",
  "key11": "49QX793Kac5EvKLyQT5j3uqT4bSHTJEpoKFa5ocUsCEqq7zbz65v2v6ccvYskJpPkumrvDNPqoVNgu28ZcBck8ja",
  "key12": "25hZC8m6ieBH7yff7VJXpeCSqpoGx8QVNt9MAhrCFWuvCVP3JuqygQXa2kS1kSSZW7dxFdF4DfnxsgEcMxH8Zfpt",
  "key13": "4A5fHWnmuPhkgfv4amydp7hFp4Umd6tey9SDqzMoDTNBHyvYpZo4ZebqbaCE5fXWQuEB4LZW1h7Wuky7BicCeDLn",
  "key14": "2J4urocT7r4jPRS12xukonvsWUPAoeBm2fBmFQwrVgdVNCLdXJggQFcDao76iPtC1zBWQjL61XkP1ztSC6gYsWye",
  "key15": "2R87zuG43zCQiHPwzFU1767kv7Yj8xhihYK1yXNn7KDyHz8n7WVhJa7qFMjbP8YrxipVgfqxYBPKH9pGFwGVSQsX",
  "key16": "2APms4XR7Xb8Ca7p1fSrp3wQkTc1MqWrM1fMHV1BucJS2PvDcJ4fCrsWXRcanMuFzrmsKf6zdCLbrEDjg4Wb63Vd",
  "key17": "5dt2FzisdymR3Xe11fqASbj8XAn8oRzhj8W8P2bVH1GmypXYxkTXRuLgFy92cHgtAjdEYqt9N1kKqyoGvxVuuchN",
  "key18": "5mKTTgQhBFTWDZtAnzNAexyA4bJFX5pnyCaJkuGFzo7K21fjS8qP67QABGC4ikdLwsuhcFCFLuct18kBRK1U8QWZ",
  "key19": "2Mg5iPu4wKP7DPZdDqk1vL4wiXHwSmFEpRKhdCELeguvVVSo4rRrmUed1DRjYmkGs4E1sveTaBH14QgPyF1PgM5g",
  "key20": "vw6ZUPC5StDvCW2poWHeATHX6kZb6kGG4tbRSbWKmunckrjg5i8rBczvQKBVGLouZ8bGZbJ3JSA6AUwgRPA8HdT",
  "key21": "Xs6fu4gADRqjmuvvBDuvVUpMS1CxhHnkQNSVUmFdnGfsFT8a964WP9SRKmCbzZCDSjofmKWMhbRe4tUMc4xTA2F",
  "key22": "2tH9J9aUnTa61ZzT1HFExK7nU79rVKnsrsnsHTMMNi9phgxaPKAcfwHq9JMHcYs571gVx5YpZHVMTfzeVQVbk5T9",
  "key23": "2iqDTb8doybhoWog6jbTcmZFDJYz2Mx7w4Sm12VDrpprDmLLvcVNyTqqgbqgh6TxzBR8AjQvMoWBpnaW948CbPGu",
  "key24": "28s2nrGbLe7bXzykSbon3cDXDQWHUkSUXfs1gsSGkZNmiLXamuQ88VGAn6Vye7MxnmvKCtWFVDqWQN88p6GDN31e",
  "key25": "e9UT5krEai2P2HosTn8nS7FS2a4m9ZxhtRAecgsdybLcZhUgzVY7DmFk6voDVrwP5dYiSGdwYRv7da4aixRtrTN",
  "key26": "42epHtc9VB75yD9Cna6rS786HKddWMp4N9xfS7sqzLLXkMFZGo719xkdxAR8HWmKRaqeyQNLx4A7sZ1HgNbfUKFS",
  "key27": "2gFZhfTtz95usRUEUmwYNospFkeCcF8C3QtkSQiCtTUBdaXxhDZWkKEmMexfuWLEzvRyogDzmVZnP4WmWj2WwJF7",
  "key28": "3A4ze4cEWyyYPjjHEz5cfyQEhVncjJANA5gbr9vEvcG2mwCtxmpaQJcb2QieJeVDkUa56ZUR9PKhRq6ym7CPBNRu",
  "key29": "49Z9gM43BFea6sWntxGubQm7Xa9h5oX4an1PcRPwrKUioR6rogqxy6EcgSRedn8CNirQZNXXYZs6qKakWMKnEY4F",
  "key30": "48Ygui7UKizHS3NRDsRiPVpv4V444FjfD6wZAwVPppaV4wftKcuba9PtreHk6xEL6M3d2xcwKyM3wAzANvS7EzJS",
  "key31": "4p1JHsYLJh7cMz2QnfZLXzFuSvLPNT5tQjdVAxGgxUrUa9k4y3iEzNRkHsKJDDaBRh9K9qLMxpgKeNnwgVuYWT3T",
  "key32": "3vZDHpXhbSHztL7CC8Ehk5k5aLWn7GGT1Zp6uYM9EcAQxq8BUMVwpnUyfySvCYNLXbefUZPNRopG8KVFNPscRz96",
  "key33": "2xtUvt2jsbqJUCtFPY6nHP84ZucsvJy72i1q8JK5witCq2vetRN46ks1M7P2Q39kNosAqop3PJSdiMo9iRnWV9C1",
  "key34": "2BPeoQENuSnCysx6tyyL4dM6x4Bj2jGkiAb5phANvSzwKcYzwzLdyG3wphJip2vSfihdSJc3VkMhtQ3yRQYnHF9Z",
  "key35": "4n6A8ThvKNU5wMNVUPdpi7zJDrMtrmcyTfGCLB1NTE7JEoz5Rtv7yQS635KmQNBXan6iYzb5Te4ShMYUFmvDsQJq",
  "key36": "35s4W57urDr5JF49x3yt9rjjigj1MbU7p5iYqcNgzYsyfQjk4G2c7y6MHzCnsD1FGHXMWA6qnNtzNmFkezuqUx2j",
  "key37": "4KZTJsgCVkUUeXgYYgzvJS4qZCxxgRRaMoXR38wBhqmGFYb2RNCyBNKdYANdQGTzcZ21PkxNx1KBmesGF8DSXW4S",
  "key38": "5nXb3pThG3cFWX4QyHDW4zLrSm4wYKW4aVvvvarTGikSMRpHFBLbBeTubSXhvVn9UmeVLh1cDq9MHyvAkYP4oV4t",
  "key39": "2uTU2Nbmnr8VXbXJ5CjWWFB1yeyYD8PEcCzngf5vDHpSXwdWeondAtUtfxmvhpdiFwKNAbwfHkBYTiGyfbfQij4e",
  "key40": "54DP2WnbpJzWvtUqSLpEVW2trgWxd1u21fYtc9h1juP87HCUewXiKPuXDRkyR2F1evXmHiTRyLVdLLSniLuH9pw6",
  "key41": "2eooL5DqRWDJTyjenEGknECs42PXi3h7cugQr7E5m6cayPnuyiBBxJyfUrCNzAeTDqzX2b5bkiDaQM4Nar78ufem",
  "key42": "4h9RANaYAzMciXH4MrGGsadueAuyn3zBxiZcR4FErySAFDETCsngeVNRmufesa6GRBBCxB5pkq7sdfM1vC2eRE8H",
  "key43": "3G7qKKNqxXpYmFAHaWWNinAdETHkYSB19ibhuNYiMe3meF4T33xCTrLMFUqJ7ZMKqEEs1VJFdmR4Cdx1ALQ1MTCD",
  "key44": "2rwNJbN4HR24QpeFjqRp2nHijFNUZzdJJJwqLyXvQB1ucEgPCWv3ZXdHRZ9nRKnNHDeqZaFq7v6kMcWJCs8nDB9o",
  "key45": "4Bo9ZUcWi68JGRYn3dV8kkAhKK1cuC1Uwgjxg6iYfva3WuZQ54mYCTed2HDLJeFTsdPWzthYMGjwW8qPU8RuKLk1",
  "key46": "2yLQFnNeobX39MsYpwyDsJqt2BsxczdfgYia1fCzxQhpAeG5XUADfrbMj5pgLAJabTZn5moBfnJSm2bpHnrV5e4a",
  "key47": "kjmiHboZvVGP7RVjPdAkqt1xycA5xtJRCw36PAwLgzJJ1tP7vdxCrks3tTgvnC6quvQb1bX6Lxc3vLqfqfzmv6J",
  "key48": "5zHCiRGBN9v5wvHqB3n13yDxevqdS2nzCcRgFXyQHkybXqYDAE4SkfXXfFZK64qDwC6vteJkwi5TpHM6dRL57CrB"
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
