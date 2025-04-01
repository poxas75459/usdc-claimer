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
    "2hwjm6e1dL11koYMD4MtYVrXGZsf9fuyYki3WnUAiqksezXsuncUuPUCqEvFCufYuCNmDJBnMynQ9GYxPnikwHzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aSoCUavVqWh3PPeiw3porLnZMCeJRsTSi2xho9gXVquDpTbSyaLRzHKi5RmcHa1NbR57uj76RNS6uo6rVokDryV",
  "key1": "4K9Ah19Cspbupw9Fvnyuu75NfK1x9f63kHnHCjydbZhPy3w7XfWZNQhnQ3wNaoKCpQNqRmJLeN9hgoP5E4r3MWqy",
  "key2": "8dUUjg2bh1T8iC5TC9VXoqeTFZJGcPPaSXWqiD9AjSC5rDDUMGcxSB9HWZbh4E6k25m1CxFnWqGQVCFE41U9cWE",
  "key3": "24BjwqQEG28rqHJUeg1s8ptjLRGpiq4k4YcthhEKoJxKktPoYsDZ1F1dv3yoXG6FmZSRBfUh3yZsB8Jq2HcEtnXu",
  "key4": "5CNifJYxytxLQ8AVWWTobN2MZRtLpwixWX8WeNSewvgkHzyf45U3EdtLcn1MFAvGj8RFCeX1ekX2A92ptN5xW4xQ",
  "key5": "4EGdbon32mRG2RU6bEQYucurDcMJ3bS2GTTKV5Zqau5jgMqHqbf5ztAyhMUG9hVwgmzk4sk9CvBYaxWEfeGBrCnM",
  "key6": "4TYAC7bk9SL1pXkovjtzuieGRivbmM2M1c1yoY3wgMJ7RuDiKYKj41b2KCkSTj5pxoadrQ7uD2NhP5C8QJCDbX6t",
  "key7": "4ag8KScgUMiR1hTSRXJSqoUa3T8bxXpRw8iFwuXDJaXdabeSVTGaJ7GN8LGTcEiudfksSc7M8gGgjDf9znjNJYi",
  "key8": "5tduV9ZqrcxnjcBYru9uozzJgy6KNJdzSKQxAZvyNe8pmu3djdcwpZpTThH9q8rGbn3K3KRHNQVHhXs2rEaDykyP",
  "key9": "5g4orX5QrTSjSGqPcPCuZvkAvw3YDV41NzVj3ZA2azPPC4SRoevHNC5tgyGnt3ETZpomHBGc274r4CoaFNBiJuRE",
  "key10": "3wHpGCBxxTSZbG2xYrQJ1U6URatjFW2FFsw8JkHKntb1fHDruxHVvN7oQXyKK7aphaeBC6DPuqX4XFA4cZu6eEZD",
  "key11": "5x8DFXatX8F4rEBx1dyjrkNrGhhbEQUW1dfaSy6aDM82tnSDpC1rG8UD5cJcnvpCFNqEHeu3jMusjvsAvEixLy1U",
  "key12": "cjJRnhYkYi9vov3tTaTu8DbBtGQgnQ1GDup6gezb524fUYb7zk2d3WeKB9FVq6GRDDZBf6WhyiQqAr8YnwTCK8b",
  "key13": "2Ra3sA5pduH8zUC6UCqh25yqckL4PkPcahyWWCRH5z6qzWHiE85AF3gYW5JZfZLen4AqTn9aNRSyvEwqrBkadE4B",
  "key14": "3DE6qBbCfUFnG8Xiwo2e1VSQBVT7DT6BHHbXpepE1TwpWFCLanuiq4mxDJT9UYKjiM5ho7hAWGu5HLsGJaG15s9F",
  "key15": "2s6ix1uctAsMPnKjSR68x7abSX347TD2XSVTv8dGjGUhY2vPYGhpFkmhn7HEZiBsPxwMrHLXCzc6rwW1WnG5nzoz",
  "key16": "HiaK9QvMkHdR8Lv7HwhPPbU8GhQCCmWGxUGTTLGExXp5LSgRrh4pYRhyH1hxqooQYN7A5AGC6WmdcgMFiPK5nm8",
  "key17": "xQRRSwa4RpimVxhhbKwnNDPUG7KcVNqgVjp4kXtZeK8riKa5nLAXEPyegGpFvA9o5Wvw7BqGaHckh8x9GShiHEx",
  "key18": "58xZZAwkFtih6BGdC2PMnEpVqZGgqmzFNMKoYgDFXEM5nFrat5JW5u4FHguzGD3zP9YKyiqECdQUAW5qyd9ucKn1",
  "key19": "2dyPrRfRiA3Zs4uRMngd5ZUbkHvxxp93VMtzChAodmvzQZ7dNgPTo1afA6chMMPHjdHjZAkiiviC8oDUwUbMUF1J",
  "key20": "3g8GQnJkKcZUCwAnd8dFv71Cfn1SGC52G4rB3KGfawhSMbUdPr69n8hr7LwwLZtFiHaqKVHfXXqWkZvGwrjWzuhJ",
  "key21": "4nnH4nBm5hJKq315Kb8S31BRh8pohagkUwCCKX64yoSXrof3AcDiMoL54R3U938WgkFqYUK8DURSmwTR9gbP6zGh",
  "key22": "64FD6rJMnbmTjQP6EgCiP92ACi6Udm2YdSGaSkgphZ4LvfTrJeN5kNopXq9sAGTPJU2Dghtbn5psHG2ZoaMj4ZJd",
  "key23": "UTqFKyXGsq5CVd5YrJ8dTJ6vM62f5jZFzZKBqmvj8UeKd8pqSEuEVjihbiSMTaL3x9vrrANTuEREo6vWMQCZgTu",
  "key24": "3PTdBxFCMi2tucfocjxitxTb8c18e3epf4BThGA2TVk7EBvF2w1QUdh43unLhydpxKPAAv7gV8C2mf8tTBsd79i3",
  "key25": "3yywRKRZHqDXi7ZepJN2WUvnbAWaLQDjUo6DHPxYEFHwbsZSXLtKou2m5JQ69w1DgSPVzPHdujijev4LYunZ6Hex",
  "key26": "4Sbcd35fpq5fMkxDawoVqquVFKp6UG2rJcXwbS834aPSirzM1Nzg4bwHhX1NPJKBtHmgW4WcQVpRxw2RV2E9uGHH",
  "key27": "HRX8TdGBdf4Vz82VzQLicy4s4WbZeYPNHRQjDRDfjAWtS1EHALPg9RNR2yk4aGdY2QiW7SsX8D2GvKUQDtu9o8e",
  "key28": "4MCr2s7anxcK78kgfmrjN9N27aHyqfH6wR1aGg9FozQ5EQ8am45quvY47p7rqnpyL7cYF3rwEYEEN7pHnccan8dL",
  "key29": "5SP938edRTq2y2GGkEiGZYhqWqn6QZWigFY1KULnpC45GpeinhZH4hBLu7gZLnFxxSQU8aBR9Zdz4tH95fw1Gsho",
  "key30": "5wHFY3v2QT83fkGmVr8WXuQKDn5FwnSUpaDTS1jDhDQYQ3QVzoNmiX48kZEiLZ6p7SVof5fn25ozcKpPnw9gtP8T",
  "key31": "4odhtobwcdcT1Yt3Zuo9JuP8EVtkQV35E1Y9gwrqm4MvjkNPHuhFAh8UkUpbEbnxiwzNWhqDWouuGkpWg9ZRMdaG",
  "key32": "3Fn7JoTSBppLV8p9rxD5FiWmgvXfLWfnjgVTjqL4GfBTAeAzAZe6D3JU89KegCrGY3qYeVKLZUHa9SLDR66NAjem",
  "key33": "28q2jfNrebVTctgkSnkkxLBGZsDTe4FbzgEPvDd9vacpzxKVbX3PizVA3m5g2GJcktY5rrEkm9tpAXurrnNTyrCs",
  "key34": "2Ezv2VFBQku6yuyNZFBmsdGUQiqUwRuFFDggyT9rUU5xzka1vLaJGagnVMgBoVjvdV4M9PudjVLdFfB66KdbYwy8",
  "key35": "5ap5wHJ3Q1vtucasnWpwoYNoJKDwjZPfpXGHLb4iBDwLCbSYX6KA9CLofJ6x9wBGjyv86kd4gQJhLoRcgpgTvGho",
  "key36": "5ZnCKSbEPqxj5gd92EWojp2SkmR7eLEBnGP6Dc7gQ8xJrR94JTwYfCZp8rr8CKcvcN8QJqE9RYCYTxbCH8Z4YVB8",
  "key37": "2vuqqV6vfiNEX98P5hn3rETfonafdJmnhcopHiLawAQbFy9jRHanQCDuzXwAgGgfNawVpXTJPam1RC6uZKZnpy98",
  "key38": "qiz88Q1Sbp995RLBMCtTT6MfyenUEjUJsJ7otGCCGM2Nm724FpWinmwh6RfL9RzauzvERMB8JnLsYLF1tPhWguP",
  "key39": "3Wdm3r6KhDj2LFJKbs7rkMe4PzZcqqjEnCj8arXTfgLfZ8u4FfEB8Vx7Ab37wHjyfKgsbSePLrJ4wr5VoiqZZ31P",
  "key40": "m5xpfG7ZxuqTnTE71mQsSxhZjMQDficLJ3acKZ6FfS9G4jVysr2QMBWyB1nQfzLcUx2EfSM4YZoXbQw1u4YQsKA",
  "key41": "4QfeWC5vEk2XLrGjLoERr8b5cVLdv6y4FbxjsX7zB4MFi4Nz6tbxJuCN3Rd3dBywAo6aWGqdoymE31eKyTmH9BsB",
  "key42": "5K8T1HuEaztBj4Z7hr6gr6uAFnRDVznStSRRyhxLE2MJbqBS2mfH3VhPzWWxXQjVQMUXYoBdior5bfsEBnzyfy4L",
  "key43": "3z28jp6mJtQfZTPSrS6a8vhRb98n2aYn29qD79mCFSn9PTzGrJMWAj2vzZsP9hKXhvioEPwhp2TsydKwtfhEt1Kv",
  "key44": "hTessxEc8aUpCBGixJmz34YxjRavqHVT9aFHt8Q8Uyu9nqN6fEd5yTcJ7gVz7PFUYEUsjjHPmG23F3c6vYTL5of",
  "key45": "vUWcw2E59cAHx6pxJMD7sG5guKziSpy8gFVq9BKRCAih17HQUKSHEZBBQWC5i8xH8k7DsTnFWYYMD5MxGSCwAWS",
  "key46": "3EPbYAJAF9RUVjYt12ewsMyT5dKj9gaCpNoaVNbqgR6DBCfBhejBUrSpx3y591chL7owd8wWz4bFHcJnoRyzJPUb",
  "key47": "MJvTUA48sDyiaLkQBvN444SWY9tmVVsnfDo558XdY7rN3Zf9QD2tvCDxzyhkjxrf85JBzzwg3h2reLXRuzvFXZf",
  "key48": "3AnAcg5LbFb2BXJC8XmAFSM4QZzfH3oEQ3wapDX6d5Byd5kxtemR4nqf6jA1GU6LELSPvgeKh3ZBczgiYysRVYLn",
  "key49": "4TSQQz9FRkGzT1YQjhPGCmY4XBJcGWM82jsmeTEaHT3YufEySggCYpTyZinzgUmJjKmUSXQL5ajhEBkZBck58FDL"
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
