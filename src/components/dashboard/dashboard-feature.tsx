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
    "4cQNKQjPGx7Bgi4SegWgUB5biGdEsKaLam82RL4aXhDH31GKv3FiCxjfEPa62iQtoJxDvbkjMSJJifYaQL1wjGzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HsGb1m5HG8RJeWxkzHwevUkFpt51nyvqNAwTAaF3fULHiH4wWZQZLqsMn14AbVF2w9dxLnRWWVF4zaKE3uWH8oz",
  "key1": "62eSruNRWhj3sAmnddWohVaFoxWZgGqcfccfDZt8fz8S7nm76drWa9gnUXEW1wvuApxFt7M8aFMntG5YQGFQQZyG",
  "key2": "4iUXhUQ5MKfREG2gSod4QfWuzmzH8ebzhUNreNwhw1iT4HY4p7GgFM86pBQHsa9yj4r1YD1q9zY8cw9KHtyn2jKR",
  "key3": "qTHPhfx9XUFMQdhE2qY9jBvJ4XDf9x7LgNkvbzEnDBuyV1MwMUe1oLHycUC6zMgnxuyD6anHk1exiVTLTrQ2UJW",
  "key4": "4NAQt8pf7h1xVpZLwrCKQG1SEa9nAWm6P4Lm71AdmmoVi3DmqSmd1mcX7gmKF5rHeP5sozijc6oUusuLXXQeWuR5",
  "key5": "5F9dX1CMM1vNsbt5SA8LHKSgr8HJq1QcLPPVwRewKHiSSogRb5UE4uTLyXZsN89JhQJguD6A1wsmKztzkduvyieo",
  "key6": "26MzPu9GNWEEqxWDKDNLYAfmcai7Y7Yef4Yo1YxBswbH5F8ybyMuiME8XAPn747tw23cVw2NEiTmWvHFjNPzKAqt",
  "key7": "48K4VacmyZG3a9GAq9sowxDQBUVyii4Y5qigZTrJcvcZPki7R7BvGxJ9c3bKDp8Jn6K2DFfCsW68EZYiJGvJEYjn",
  "key8": "41KVScGynj51ELUBFteVVtvjtUWTFiqmti22K3huYfpti2JdfayV7pARpWXQEsuk16HTTEeUjHwuwhYfMorGgniy",
  "key9": "58gRLRrqwbxTY82VQrcszF6C6FKFu9L75gHQ9VSpad9wxx8nbrHXHd63sZwtNjJraQpSvCVf8JjTwxQd4xkzgJoc",
  "key10": "2AcdeQ4WmA24X2MJmFcKEhXfLiiB5jYKrZvPJE8e8AiFb2Bcxw5uvUmBUXb2U4DWPadDaPKoBRyP7xEori1wKnQ5",
  "key11": "3JPt3bRfNKEk7Rb1vxeBei2iius4wXqiU9MRFf1hFFHySzkcnVRooVCd6VKeQgAmv4oqCcnV8JRwMqLg5f3jsdNv",
  "key12": "5XbBeKQ3fhT5ReCj1QJM9hw4dNeH3rko7CEZs6io7QThNCaLaxFU57gpjPoGS7jDjq1afhnLKBxeZvFTDwNvL7Jt",
  "key13": "AtYNMEPqSY65gYdhWTgC9QNrRfnGkJdh5PLoHhREoSCraUM6fwkgsMuso11WVj5mcVjP9enJ13GsxXVFKmSY27t",
  "key14": "5AFVCc1MoYmB9weWqYqy3DqVRHoqTGahsYSP38S7CTAzHRBpYMd5pT9gaqN2qu1GbRgxjPHjRHediKs9iictx5U8",
  "key15": "45oULL2paX88hVedHDLrcVYTmdhU8mH6D2ZMvKSbAEAAYUQGoEYK2MSqmokTojrynbZfue38yVPQAXXhTMD8fFU2",
  "key16": "3uF2hGWLkscwoT7zwxkF14ZFaXFBNUjGebw2YCuh2nvXze725kNUES5JUATSJq1cuMpUYREP9iQhiY1zpuddTPzL",
  "key17": "5aD7SYoboM945iYLem7ehXGMAEdu82DCBzp97BWz7eAygfR5bwuXer4fgQHcKThLzWC4JBvasuRJqEogRZsqCXsn",
  "key18": "2ertiCrMMBmQqx32c9t35WKt76YTDarSKemiApWfd3hVVfxJUMQfhWQMkndU6HRyRhsqN6PkMBpjpF4FnwD2tHvE",
  "key19": "xWfma4yVNCDjgykGZ2yFePNgcpoQAKccLfSjtwpKe9pA3u2FGs4BC6J55KxDp4b7BvZ2sprjCBwbBJk65KGXJjU",
  "key20": "3dAMCQ6Lq5CFfSKNXjRjQdnsFarMMbACMFwMpyjTmK2VeQFRZrFG1j3deU6yhAztdMx7B9ZoSNVue5KsExLExFmu",
  "key21": "yTHhwFps9TmcXwy8fqaPcLhLGVcwjt7y1iYUi1qtwdZcADkFieYANaP1Egq9crCuWthd5jSJHgZY5VyyRZbWk5y",
  "key22": "FKwREcXmsJsZJ5n8u6XztWieoGgkiDJDovf18wyRRuY8zfqxFh9txw9cUcntpkgkZepFbJY6wzymciTqpbsCeHE",
  "key23": "3WXsLL3Aj5cFywBuhBYjqYWzuFr3GgfeRk8atgKiy2iEQJzCYGA9RDJrdoMKSbaTkz4Sf8uXBBw1yu8ioEuu6qmq",
  "key24": "5zcy3RDnxZvHuowgFDG74pixFZ8WP8B4xaoNDDLRwzMk2dq9qgZMK3EgU5acCWbgpd6fFgFpFhdH3x8bbSoBkTTF",
  "key25": "eb7zLgAh8dTEz84bid23uKN1wr7k5ywukg8sB3EGVdPDWbM3KMFv2PKVD7yFvZL2JszDDdPQkuxuDUk8364EhVT",
  "key26": "2BhfLbcrb6sghorPe2WaageGwemi4Pw2K91rzMSH82dd4VZGANenwYBo2oiDj8BbivHrNNgXYdmigRLaRwA3Ubdk",
  "key27": "KS8pD1Q54haAcqbHH4xLYrwSmqF8KHgvUEx6GhfU3opfnCS7Lj3Wpm7xYMHH38g4As9sngTb2ornvGX4KHbqRBS",
  "key28": "3KK7ahNjEc5cBoYQFfodCJJgSeYXH1HLg3TJJPef61DURPqmrC6DmxekBFoJS4pD1kY1F3ei6qaTVKHPrRHpqBR2",
  "key29": "5AWk7Uz8TTTk8YaVRiy9ZgugfJLBgdQcQpBCyGvxJedyZ8peRysSGShRT3o7MefAsh72CBK4hnFqyk3PuaCy23AM",
  "key30": "vZ9FW9i8jkZ4Ewc1msoEXUG7ZyxTXowNrSieJGDZRfE1pCm1GR9mX8RMDbqJLHKaSsxRLFFwox8r5GEdV6Y82KG",
  "key31": "mQyM81SLycFKtp5qrENRZW2zhKyeWLXT6sDXsRFTNVXuV2WUkDRtoYWfkTGRQvxnX3rxBxLXsKSFguUBjmp9BNp",
  "key32": "5iXhSPPeCUUMQJgx6YEsnb9UpYzEg5z9sZDrSdgqd5trv5f24dxcu6P5G6Gtak5qWtfxj3VkGtB9r6fMdx8i6oGf",
  "key33": "2UL7gtHWNQjc2YPnELAFhjpKUf8mLHef5y3DudovHC6LNMP2LagVEwskmBbc2jab1wcrt1CLp4xMqRqP3jH4UPgP",
  "key34": "4uyKDy7xmm4phagCWYwU483VnvPfQKHuCK1tsR6UGLh8Q6QaYGKopC9MTdsBe2QrCmt8McZiHwLQnQmPRPKXNkwu",
  "key35": "Ux89j7h5WjsYCn3TMXaFZ22jTRht2cxmChKwxBLbqm79fYpfBL1C4PWTa5hrnF5ZGZd6gdEUv9bzJNVYUgLsw8R",
  "key36": "2RNeQat4iNmbgHmPA8fXCspdKnwiREhFozwRb1Y1v9Yw972qttvnwSYDu38gBRctnKnufQxHqKaKS7tvoT5Vr71n",
  "key37": "2nWFatVCz5K9qmXT7Lw59B1d7rc9w76S5upVfCxkW8n8VqLqyM6fCgXePWJtuS2GpdMDvapboMkjN6VsRFLLApxE",
  "key38": "2VzBaft1k6o3JNWMX2psDkBbVsNQQeW1v412MBYc6RFD8YfHDwBbwaVbxrcunoYuM6ZZtLpeWE8MnXpaYYmmguUa",
  "key39": "2svvuE11VyqZ7PRFBFXnhybVfwQnXTwVd8vK3csUJ3iAd1VVSc8DWWrWcUbr7u6TmjKqbbYyVtet6K7E3DYstduf",
  "key40": "vTbg1wqU8ThmVddpMxPfXgKC7pwZvxmrqRQ8pJd6EBQqJvxZhZQPxrxPFJQiN1XXFEeSkY185zjrSERQvYmpDqo",
  "key41": "4bd3iHQpMDA2uDSxpvcfLGgoYEYvjVoEBSNjJEu6dcZejWeVSDYAKiiBE4bzk9otRkGbAWm9YG7mCMWvtBVBV3QS",
  "key42": "3vqLoQVR9GRANLURwwQ1VchQkicTCT5UP8AN62jq6xidDABQhQGFxXuBKo4Y9hcTbvP5HiYZy3WB9zTYSipTtAxj",
  "key43": "4rrG8HEB2KtdDbsCw3kdkVZJW8cSCtu2Mdd5UvbdjsvhZPZu8VD4fNErENGKr1MC5VvMeEj6i81YrbLQrxrFmqHj"
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
