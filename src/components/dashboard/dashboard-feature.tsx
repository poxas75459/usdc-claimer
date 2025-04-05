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
    "5dNBsBLujixzYH4J42p9kzcpy9qqQLZsKjzgigtio5EY2FfFEHNXik4JzU3ojoCKWRkvntpA5f5QExXXCDhfFSJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AguWLY1Ys8VCxLxwfdzzNX9zfM2v2oajSTbHcrSkDhQJjxZzL5xNvoJRZ3tcTwsJBKvABVY53AHXD9ThW61DRmB",
  "key1": "4dz5syonhTsSkzAKPih8Y5J4DHGinN8V2DAA8SZzYbuE9hYWepGHcVSn2Ujw5pnhPm4Bu9squV4FmWGe9C3L4ven",
  "key2": "3yn4RnWqtdMRaEqGN1E4UozGskQfFk4fkodo3EDQ7wnAahNj6vRxgvkNf8ShsMMkkX4mLHYXRs5BKyvCFUh9qVjc",
  "key3": "487b1DNeZJgPcWx2fgVGR2tCZPTEQBpWWX8CgTtTBf8dBGzBZRGAaUuuorARZLH5WsTfz1AnEG7fv2RmVbPQgd66",
  "key4": "3EE8xmJJhRM8XqNwHF7KWux3d9DjmDVxRVh2roxgg3PpVxG2yFV8rPsUy7wC8CGEsBpu5AmGifbdairZPQaVNXGM",
  "key5": "3Zp7bzBi9Be3tpmDaWAQ6c2C9EZLJA5NrP7XAvXsTAYBPsFyxW4BkL3aGJGUnR1Vq9mejJADuuxgKfcZBfnGkgP6",
  "key6": "27KFabAqiDijx99uS9i5WPYou6Guq4aRGo4bLU41VVwc7cN5R8EEb5ayGCxAuwLkGtzdgMgQ7TZbr9n7TBa3EBte",
  "key7": "4JtyRsYsvoceV6Gkrq1hj3xMeyrJRQyLuvg3xKfg3E96Rg4mDLXQ26nW4aBbN1Vztz8C9DZw6HaCiqzrVcDkxbEj",
  "key8": "5TWA7wN556LE799toj4aSm3uyELb5me5zSc3XJcv5prXDhJA6FAtmkwmCTdeZxUw3U3pkdob2KJKsF3aeWoAp8Jd",
  "key9": "5zdbB2X3TeqqDhFrQdf56epfPhHaKdpPBLrmwss4C71nZv2NqqM5yAtmgS6cMmea4tYGiMGm2DC4sQ6qCMH6rq52",
  "key10": "ee8QinjKH7Ysurxgst9zB2974Z8wEeYdiS3RycZvfaH8wNqXtryekKxu4JWwKVm9haLmzdBqZr5JHNd5ZHo2yb6",
  "key11": "ZtpwiMKGhgzu5zaodGWgV5nF72EcyTffH26Gst7rrwYyPRSqf1CSvYT4m6XHphEVtSLVLRsSxao816GUnGJCQ33",
  "key12": "2oynXdwiMdWc5SQyMA4ZGMvBVBbWhvRoZbwVbbwK6XUG4UKc65sKK8M9HQEbGWTaxHcZhub9EpdEBA4DPtHEJ3ud",
  "key13": "35C28GLFyHAuS7rW2v1kUAwTxDDdsjMHmHXGpPf8SF8KBTq7F1QNkN3itdtHZzJ5RhQD13TTYzCwL9M6QQhN3mb3",
  "key14": "4J3Euxy9DatxMovgiSKiguRNTPhvoNRumyMLcToZ1oPDGEW2GZZEFWvgKFygNRpKVS3d7MpgauJ1PCGnKCaw3jez",
  "key15": "5fYcb7Kp3jUeawWXLzq1eezJ6oyBjH8V648NsC9WWZE64k4BeVyRjDNRfvfjtjPASu5D97nRrM1jmcyRgM88Y41J",
  "key16": "2nnojiM82aii6tSb77QbmozEsNSQF492CqbSbbxTVDp43oxhVAkyDFEC1YBj5wk88c4bduF2LtYfX7kryfukdsoU",
  "key17": "3ZR8q7ERprbvPUhKXv9XdLMa8xbVZDtbfmJdRmfQYQePXU9WrN5JHhmgojhGUYtUZDrixwMr7SLSC9q1VzMEZsG9",
  "key18": "3PdmBVBGAXaQyRf6Szy5Wjz6upLdvZLtKv4Zfd8n2SFFu7jZzC9V5o2iz2qSKSzkBffn5tukoVNX43QXiNesDZtL",
  "key19": "rrM3fLvim6FJvceTZ7dvBphMrjres8x2Pe9FgrzBzb2SebQ6zmTReiYHS3LVyWggaBjwCnvdyhDVB7z2QxJf1iw",
  "key20": "3M5xqHSWk22szPnWaBe1Z76SPqVMZn21HeBpvQNNXin6nCC9JEYiKLBHWU1kwW5WdyJACBq2NLPKg37Z6MQqBAWP",
  "key21": "Me2BMGUd4kAqr9VxnRYLpZrCiASfLLQoG2UBskQy4KQUE8fiUWKCKQDXUQSas8UJtyLF2SP91RsScTCJB1Ag7H6",
  "key22": "56v4nd2eLTTKj8XZGMaahJc2LNXrCnHXb1Ld9PNKXLvrCuZKAoDsWHmThtXgeTccyjmanSbf3vVC5nEzhf1tnk5H",
  "key23": "5RM9nn8YHyGyyX4DX1tixkQboWYXqyEJ69jpBwDeQcM8jSAwgLtzBd5sTJzQDo1FXrZPPbWJUGFugQPyrJNkJhgw",
  "key24": "2xRyz7rsZ4R5kLbRzyR7XLLRTsijWy879FVgQMRvZtgmCv2sV6p831Lb9gWbsSyAp8PYF6Aw2dHr6nQP1JN9cj3p",
  "key25": "GU7bfAHrfiUVAF5k14JbKkdVJ2AxodvMd9BHavcL3Xt1aXSupWY1Th62X7TmnzEmPBv3U3dW4yt1us4714qyr18",
  "key26": "4QbiZRY5Nz1sAKRs31axtMES8bCAo94o81fS7gMicQ2eihHZRNWtswDh7o1eUDcAvFnsc77A9do8tpF4h1CVjp3m",
  "key27": "2hSe4xCRNv1uZGMmvC6Syfo8WSmSgYaNdf4bkcq1YjRPdFczB8XUUeArTK5WspG6vGLCeR4WczxD1unQM8JwvHWJ",
  "key28": "36oC6fFkJ9YtY5fGAUz1Uhj5pQBgRy7a9QBU5Tnm6rWJtkmEv81otRMVtEaLr5h7bDZXHY4qwQ6FZuhpLufT5fN7",
  "key29": "2viD6dh8r9tzJXDu9voqAMyxTjiKE5dbb7jNzEU3kCTFTwLUVovwHiYVDQUxZSxfCiUyQhajvRY8igRiiSbTbn4t",
  "key30": "rkXfPAZkyHwjKfkZesNFWdPAGaq8jEpYV9pwi1uoZyLKjQsm6ZLPSt9QLuYVPkuHqwGg7ycwkVaTMXnWKYAFpu3",
  "key31": "2oDKTUi3v9x7PoNUnDKofGhkvNovGxARhTx3TJCwBwJ18EX9L1aguCFpVpQTQZPLwkgisP4TAkGyR17dLQM6EJr5",
  "key32": "3LyNnhnpTK4JkbwNKY2HcJ1RfCyxpVPGtWabMa8Krq3zpraiRg28Xuk5mbFaLeud9dKeJHu1kooXM2ZQNZhwb4sx",
  "key33": "37JvgPiJYzYZ8jNphuCJ4hHpXwvkcCnpBWoz3W2jxSMje3WUTR1d2PYi5YvbHHEwJnELsqN5bGDn2rEGucjMhMpJ",
  "key34": "5Rs7DgMU2PA72hzoRkZ9eJ2qbsqXqE2EdH3cUDA1MgxZZnwersdWF6DxJAF5GtDL6VTFgS1Cmso2JqXHrUabHSAi",
  "key35": "5eGztghTg61tTSzi6wEQGFHhX7Wg9adna1ExBKNM3AZpoNKtCH345i3397VxwLx1Bq5LvTjHR9KemCMSQnMoQZYU",
  "key36": "5CfviG2kxqkB2eBJhR3u2Lhr9EnUDPV5BXmpkmePeLJX94EKGWhNzSzPpMHWB9GdeU8mYeLTQ79Q8AMjfJFq1KZz",
  "key37": "5B999j2mnbEJSYuEQvejUMwxL6DTF2VqEuXeCivghZsfwkQPJXFBY5cW5tBRb4zJFkmMjDwmq4rj7v93HEuuT1MP",
  "key38": "3LusB6AawDkaiBULT8wGGRD1uDMTMz4JKqeDAtYWN3KdTNcenNpgdGT2ZPiNSDRntQdGjWPqjpqunXxdEWuRJXaS",
  "key39": "hGKu9u8be2Lj13VpqE83qrbUqcjSmNMypFq9YQ4yYQdkH8DNjcDPvD7W6P9eaAPhbaS2ChyRBQNiLhizf4G6DUV",
  "key40": "QjM1pxz5Dn7Un54egzFnU12UKwhqgPsxP6EwBgVk9CKu2RDNtm7drUSP4aakcGx5KJQqEoPYNcofP4Ga1uVhhqt",
  "key41": "5sM6VwinLcoxdqiihqfxnugpSTBsXF7G3rNMgfEyTtSj7s5TS5Mq9rV8ScSuKJLw3fZNtHJ8A6d2VbM65zno5arB",
  "key42": "4z5d81Y6bqpaYf9rA9Eh8sDfyuTEetzcj1pYcYER2rFqzY7Df2zTA9EBEd6Y4ALVsvs2HeTUbjQ6PL6UUhrFz3Qv",
  "key43": "R1rmzSDA8TY14EaEGzZhSRVPx8SXt8P8c8ZM5vPf3R9sJwAxqz48xVBwTTZQ5nNt8yDTE5WoQuxZuoisbZz1MbD",
  "key44": "5yrfiWD5doXXpFzTC9pUU1DCmRJha5vJjw57zJ8k63Zz4YWQuVRycX16wcdqd5TVzMF6eUJRHA4Jy5g8u2uvKzmV",
  "key45": "59RfXkKf9LuiwZEkiF39hvMQymMNa2K2sTwHjapuseroqkojRgazFxwPRfGcRGFQfogReUBn4HfY5jr2fkH8AF4N",
  "key46": "3tNykhp7QJDuYV7pJEExfnVFLHSLKmxLc6qyoWDpHB5AzL4h5vKMz22W3xDdiAeTkfJPND3XkRQq4xH9fvpo17pY",
  "key47": "3SRYDsi3oRhjvwSUrwbfLxMQpA4iE4RaHqXeCrgLJc4wTUfXtnCJcNK16GNdb8Pou5KtTY5QeZcyAzerds2BDobW"
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
