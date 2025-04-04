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
    "QhnoKv5TXJQg4hXHDZodamqJrAj1kULFjX7ZVK9nh3etDGMn7zLPY2Vd9J1pbgh1dgyrQjikioDnQoJLyNp17XW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EdN5piiG26TvdknnYc9h5Zb9dJyF3xKHWfFMxStP2Lb24uKPpzNsZ1MvjryuSCNkZoh2yxrncSXhZKaz8G6xLY3",
  "key1": "5DS4Z6diYcawZ8MAYtkitkJ7GQ72xtMKqnvGxbGapB1ub8SFvMuKvYDaz3EKAxhiJAv7XLQcAri1bGUuNMav9z1P",
  "key2": "4bQQgWTb5ZX5pARBf5xYqmkzkLGH7uxpaEBedEZTmbQxf1wBS8xHeN7BnJRfnBAYEVAXmUiCsNCWYNW6Z5jErLwj",
  "key3": "5asMhQytpcG99eHp8omEzTxkqBTB1YZ7dVcXAkRYdkicq1fgc4SXH3bPNjecNBqAS38ZsTJFiKRBxVh36oC6h9UE",
  "key4": "HwoFoES1p7xq2mNNFoRcWHo45uZcFV92M6Y3ccSPzfBCGeJcakiMd2ZG6F5mzQFKKD7J9X2uZzhaRuXQrVBpRDD",
  "key5": "Gg5CQfKNBFAsrmmqxpxpC2eXAcFKg49tyu9Rxs5edaTmXrhEAWn8c3zdzCvEP7rqUexrwLSqRTNKjsgmLQCarjE",
  "key6": "2FuUf7RVfLyiukotPKqJwQ1KwqxUbWZ9jAnb5FzfdfWtMxQPSbEaxCXw9KVtNgMUnvcKq375a3XwPWNya2rY9sek",
  "key7": "5NevvAQDXVGo5fzpXF8CcTFo6Cud3FAXkvEGyANTrWTDkNWgsVvgnZKSDiBSa6WUAFZvDTBdo9XiTDBWtSxRhqhm",
  "key8": "3EiHjVWzhVLEeN5Jd1V2RMBg3QXG9WUggbP2xnBKiymzTbc3bqtAthxC2PmNiWD5C5b5i8KkWWynACBAup9CY3Ku",
  "key9": "qECTYJWSCDKPFiCRTXkjUSd41q2RqMSxeiEWTzkJJiYPg6xVuRzPt4DW1kxX8swqtovJEqS5EUjfH58QikLRz5b",
  "key10": "35GWAG7sJFWzjTxS51Q7k9s7nufn3o2oVJmCLk9bRfKDHnHVVnTANzrP7HLyY1yFVisfjygHVWT5ynBCCcHjsGnW",
  "key11": "4tH8t1hs8cjsvUeXHsvjZiuUjJyXCjkMHBZC5E8VTag7ToDuL4qnPfzWZKSJmgyr9bjYq6PmRo7ZfQcZyoxXwX52",
  "key12": "2trynp8AavpL4w5ZPyKg6rgqea7vBgu4PLn3Qw6JBighgTGZAwfJpp9eb55NzbwbqD3EBcdxmba4JGQTkWZ1pKhD",
  "key13": "535GStEndNxJY9SzGXWFpFLA9wvC9WP66ijnTanok3fbCsks1R3g5iNbUbviadx2PqFqz3qavxWa4ASfbh9Urzuj",
  "key14": "4qkMzjsupsTcT3Uw3hCVGConCZ45Aarj15dmFYUeT1aoLKnmSwSpUnf9MF5asNcCVZCGv7PaTkzMVX2QxF132w3j",
  "key15": "cinyujNBjf96HTMtCPwBCRCXdif7rgLseQgz9D5v5mekEwzNdvZ19sawbXTVyi5JdXR22XMu11VZ4Q86w9HSykc",
  "key16": "3QMFEPmDKmE8F2TMy8XU6BzaSi22zgVofc82pPsKrAkAL1aVDJKcT9DnxW9eXjb8iNSJjNjapehn3PiJh9JwKAty",
  "key17": "2wQzHVTU1p3pas3WvYBjpbAzu9Rj1musBm9JAJZPY9BoRKq8HeNhzFE4JjY6XE9nnB9PxDZirVTSNqSyLsqamYSr",
  "key18": "3y9Bmx3dorZq25PuSosSwE1KtjF53V7Un3LWtsqGhNzZHbUYWNJANEHu7KQjYEZKKh7BQo6zAQ2c82snkxYjxjfU",
  "key19": "2dUyNqHWDFwiEijqfucod6BjuMFwVmMuQ5eU7tXDPExPoTxaZNdvK7i6d3JgtpkrU4iJNUo3FW9SxcW4q9dMJ7A3",
  "key20": "3BYGQBCTexv75raqfGaRSbDCcacSdkGuidvVLa7sQyt4NzfpGfhCPdksFUbLSFNAAFLGohTQT32rbYDcAVGA8j5p",
  "key21": "2Stn8Pp3FzTcsPd63gE3pHha8UHg8XZNxUvteKHgTmqpQYbewWcFtSKisSGZ7zmQtEcb1STVae3kRcP8Y3ia4eRS",
  "key22": "3X6pqak7XdtnmWAVPt8c4BzJTSUNebZuH7WPAYkchxn8pRJswZWAHTjTydDvXT6PDwHei3KBa7BBF2oSc11abMxW",
  "key23": "rpHZbKFiUVYmo4tAXoYYXZSYe8288Pzrz2z5vR8rpmSeKdMJfCQiz47XJrkwkYdL14FwP7oUs1ia4YR3oHpvMu5",
  "key24": "yj1vALNhL7K68UTFLtXiF2e7Zj4Kwf3PrBcUonkoTRGDSDmisQHZsfEhgixfh4cx4skoao5TUxEeFEbC11wNGFV",
  "key25": "qF2sp5EG6Hxdh63smveuw2pr1RtuRmqamBUXUjc7fEFt9i36BqA9YmHuULopB6XdNz5J6ZBYrKGK43H6z9aBm5h",
  "key26": "4YBwwVuspoMNyd5z8CZYKJfchEMAEEp9KsujLBtaYvoiaQzM3k4XjtXGvkpo1F6EZtpxu6NsZKhVYg4FKj8BCu5T",
  "key27": "3YGQV9nC4uevwSmXVD1rekZAzBgMbyWfKmoTuV74xU8nWM47TiQhyReTNZNbXo9Gft9JUdrDrdoD77rdfG67bQtB",
  "key28": "2sqbRKVmZJas7tHBFuDDfWBS1vsmx3m4npis5VebzJGHGEKXqU8WYm1HB53mfCjqYgMuMwVVdGu8sb7haRapsHRv",
  "key29": "3yEAP3jctfff3j3MsVepFqAQXEJpf73VitG4bxyvkiFuyM6MQhPW7sLDB4Vxk73sdiGLSfhkL3twyDLJsRYUmopP",
  "key30": "GzMXJ7QRMrVMkriB3DUZsWnNaiQWf3hifLe7yepHs9LLd3vj2tfoRFtmyim3ZRpNwGG9kxFV6qbmZPMQtBaSPxx",
  "key31": "jWbiibF2zsjoq3sPWzVPGeH44jr6Qr8w9upwsEB1rNUnf9s1CM4ccoXwXUT2y1t11Lpt2AatS1H7MGQCANn1cMG",
  "key32": "4kTW9Ha4sq3q2Q2DfbaEr44vRqYqU8jPQe8Qsz3i6wytQRKnuG325RQkPu57KWH5KgRSGchG9YrXmgXYyxHabKXx",
  "key33": "sZS7faP4X7FcD7jRico83wVH2ZL15Y3rL5Q9Hu7SxZPJZQ5NPPzZJydgg5M5SKDZ9zbZvSGpoKU3mMRHQeDiTVK",
  "key34": "3GJnBgS3XZUPnKdXppzYtsAgA6dugD63mBCMQGezR1WKnTVZnHJqj7WBipNwRRgLESDNJ7zFoKvue9YnKVY3MzMg"
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
