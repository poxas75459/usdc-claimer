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
    "rsYCT44VxkgYSp824nCkNid3fQuH623SsjVWuZHmdh6q3ZZjwGrWmHYJ6SFirpbBy8Ymnra5XjaqU6qasnb8nym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jG7TvqG3JVshN1Eeo5rixJLQWxV8iHdNfUCniDGwVkjXXFQv7sMrUksA4MDeNeEdHpXxZ4BseRyYVwbrb46TFoU",
  "key1": "45LDVsdtykeFEtqDxTmxS98wghWHzrXnMQaxhzUXXxgopoFJug63Q4mDQujamAmijeJPsQ9wXpW494Z6BKnqfvmh",
  "key2": "3Yc41d4b283S4nyxxsWEJ7EcsYGkoTJbHnLH4Thu2GLWEPi9oJW5fcHoBrb7Mo13JgXu4qVPSGrV5S8cMy7bXLxz",
  "key3": "4WLr4KQzonkLXQtZPhvfekaxbHgRtsFYTkfBgLgCwGBQTpYtHcS5KgE15RuAmExTDmsCgFW9UEAC2gV8S5q6XLoP",
  "key4": "4EcAifeimFj6qNCqhT3cMz4vR3EeoRXcy9Ag3YYeBdyVN34yTiFBKBggdaU8WxWhkTBTqMfpfWFnR145SrdWMzob",
  "key5": "5cRmDoQV6Q5RYRMcL1FPMVgd4o19BPypQyHg1aebmW9vkAYAR4qqKXhijEmooAygRVbnZ24FapLmybXfVoD6k6nK",
  "key6": "2KsaeLbKFTRtpugtWKvNu4vTqjdoK8mhdjTrKerEp58GK7J5eeB3eBdvcjZ9671wJG57fxCSWpvjM4LionRrwowo",
  "key7": "3QXEXP3y8EmttSP4m8fv2zP34mvHMpXJqPpxEKLdS2jacnhkvEBcwZUNEGygXjN9grQoLYdXpe3ZrxdMgf415c9z",
  "key8": "59HzhSXyfEG1jGdKVRHtZMZfu59r6e2SnP2VmCwV2RqVDhAP1BKpUubcsrNnQejfeKDW3jnU6gpf67t1S6khiN8J",
  "key9": "62quqNG7fguHLHi43zGkZF81ZC5np5y3CgU3zRYv7A6cGQUvG3WCNjyiDtDvfeJqMJ7Pmam7VX9uGrVAiY4NeGrq",
  "key10": "616TZ5tzvXmjncczqgcry4Cs7w7R3ptQ9mMkK6XW18vBSDbJZxDB35USLmCsQx8UZqcbeLK7BXG5bfcZTdSNHvt5",
  "key11": "5WcYqF4BQc9HHCnHGF5yXRhN4sgkF8SpNPFgyoFoncVTfDT3W85htHW7LHovGVGW5YtgEG2QPg9UhFZK7v9fQUNT",
  "key12": "2nJJiTqQmTW7jcTsmQHCz4yieb7Bg2ybBXhTGJqRUw7S46QE1aUwQvzEkNw1ggE4UuZhEp4Hn29GXZHc6czvh3F",
  "key13": "5yuVvBXSbQkdN7t78pE2B8Dn8Bk2eDDJAjTAQrEucvC1wUfMeySRSqd4Y36bmea86UXV4MVDsbuwbPgz9Y5it9D8",
  "key14": "2hEUMzyYGAbRy4J5Hejzrsy6kef9vQrjYYqqeAbGXHZQ7fjAkyxGy2ZkJ1xwZnsyqFkFsTY6EDdrQQyLyC59C4rn",
  "key15": "3CbSQ3WGJdGcRHVSYV8MQD9MvoFUKMAswEPpCf7YYvUtKYdkKoTxn3ziEjJKdcvoDm9oKiT6yhzecA3o7j8a1zFH",
  "key16": "5Tn7wVWVwmxUDt1a8412aqZwXgpqiARHF1dWRaBermJikduWKjkRnZKnVtuGX3M5VJppswGvGts6X9H2HKcC31CK",
  "key17": "5D3v8EiWCuKehUNFTB4iZRfyAvby1EmzLqwSyDpR3ixVAsUnNRaHkVXXTpTBTAd38eTxwfXoQe1X7ZFPQVoWPfJA",
  "key18": "2DwQFFhAQVje911rQutaApy3kVPz8xde1Nokr7vBXGp72EEcuz9XZYdC3X4mSyCb3HNKDsCGnZfPy28RvB9ntnLb",
  "key19": "3XJD3TwgLEVaYw4BiLWMdzFusBR4A1BZ3VMxXGxKKYaRwEfjgoFeFn4qK5X61sA2Qzif2wcYkWUzCp2mEcbdrhma",
  "key20": "4E9sHKTHRp7vNeUAwbQPZwy93Pi1qJiBGy5wbkWFgEXUnBFMUntVJ2ZZxFH9R9gJHrpE7pEo6CL1ZbK6JScjiFrd",
  "key21": "2bKhJMZ1bP81VkWos6RD9aVKWCeuNrciCg7u1vKPFWvuuzkUZdTxrtJFV2kmhf3zarhKxhbMAU4EoeHrgiDVpNyJ",
  "key22": "3CbTUmpPKUa3GqughR1JXQ8xsJ5tra4u6kjDEsWT4qtjGFcegJEHsV1nGc3mG6sVLUPuNhyGBqftDDrnD1xC93Ty",
  "key23": "4ZyLUjU5e7xtEPvTR4TSChN8waWQMm3GgEe6qrotQH7nyCrJMhVvpyw3eAcwMiZkCDAhz8nA1P4GYRNACHLQce24",
  "key24": "Uz3NaeoxG6mQRZX5EteUC6t266uuyVwS5isRo9761Uz4mfukLJNUJyQDFgMVQJKte1jfd1i1ZR7znYWEvD8LmxK",
  "key25": "zfWajUfpG41hMap1gyg33oYkYRT6mFzjDBX8VRQPbUEKbySEdJ8aAPfYk55zhZAzNWGeP8Q6FUZA9RfggJETGw9",
  "key26": "122kZVcSUGCwjNXSBvp8DmjyQaVAE8oy1pFYZQucScfrpzXRvN2m8eBUvGmZcobEJRqeXoHovF8iJJCH5R7Fedcq",
  "key27": "4PRxUQ5u7B1NbNj4yGKaXb817cmLPuVi1RExcXnjYtpD5x9s2pajSdXXbGYvfLdekoVec3SyHj9tAPEAvBXP5dGh",
  "key28": "8uLazE5QqFeSDB4d54jBrGXpBhKksujuZxcdW85SNubQouufRxHinLgUWrnD8fa2VocKx3dzPmKjWEgrFBAwBaf",
  "key29": "kig4edzUNBsmcEaviHNCPBr48diGZPEeah6QDqSGHDukVMYeech3ci3DY28QPFGSdtyvv75GXn4Tf751rzAQwmQ",
  "key30": "4gZfjGKkW2jXxXbRn7Xzozo1rrPND95yyUcAcFSBccRPLgHZrmZiczwm2nMFmWgaJvKJ8aKigowD12srSpW4ejqV",
  "key31": "2XYpzkXMaX3mtuEi4ctWuWpbDmHXnxKAXHdTwJj646D1aUCWnpVB2udQsUeWGHwb6iR9sa3dHeG7HMUq49TeHqwd",
  "key32": "228XQLk33EMbTf2y9p444FtJJHvJTcmG1zkddZ89LKLLS57bBoSwY33imfWTZpZxHAuGf2WTNDHHHMFG7pKiqeSz",
  "key33": "h9mBatKnywj415rPXVK6ryCw6qRkutF4pAVL8X85t5WV83mHYbRLeU5u72cNhryk7Erj7vCMPqWqwYX9w7qVht2",
  "key34": "3PKqvTR6gitpiRm1QotFNfbNCnC2VwLMUeCD3y8Kf2rzAYQz56UkpTZU7z89KHBGW1twQKiMyoHxJFBPhzDbZUqk",
  "key35": "3DmXqWhM6Ck1nDMzpdtk2nefVGEwR2sn5SBQd8wSaoUEAe2rUTVbC44rW1CzPNjFGGzLRBYLRkdRAePiPsjkfL8Y",
  "key36": "4Uv8aDHzXhrRnr4mPD5o5eMr67QkEfgX8TGXJsWeMUj9pKrom6MqTVs6zsc1fGTYsPRYXe1S1BuQxNYJoSDJ2NrC",
  "key37": "3yW5CJtSauD8Xms7mEfaHxL2CfDJ54i8gPj2PiNufeyG6H5vCqrH7wkaEmnsrMRzsS1uKVVeFb6onhFU3H82bN9V",
  "key38": "3jJ6gBhFAJwQbUWdJvdqiY9k1k5EjveSfbyQ6HmndGKP1rYPx8iyJAm2VVC9kNrSTeLuSNVPd3vz9JWJ9nLeaQpv",
  "key39": "5jpYraqipA1yTwcJcnLpThG2wWA3rrJbm8Q85ePfAyF35ZqfDMjD9dgRDpzQLqsfcKuPzMK12Fd29tD1qM7Yt1sS",
  "key40": "5VDKWPBEJvDWfey9dW6J5eXMjroFHQ8XJJCYh8PUTasNb5GQ9C6ccRVWJM9AWWtwfCqD5xeWLrjkxPsRropdmwcX",
  "key41": "2PWvh4izc7qwTaRaijJh3i9cBsbdBgNojCwkHLg3hDxcnRFLNaNffvRNT9trMdirCQ2Lu881KTUCFhZubnaGwcpv"
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
