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
    "2KYQDEFUgzZq2Cy56261Q333bL2b9bg3Bh68GXq1wpgscev4f2mZ8DYc67V9a3SB542WVeTNNJhhCrCmqfEMaFoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zRzV7UqSUCMvaUHWK3JV1RMLDXGwmQyf3TiDdmnMFAwS7pQWpzdxqWkM8ugD5z6CYHTeEfLFfvFZuGAjB88j2yV",
  "key1": "QqKNo4rGm7aF5m346iRgRNWUPkS78nQAjfV1N6zyu7zv8ZDiv4e5QE4qTmKG7rvWn32nywrfsZCNoenLw1ANh7N",
  "key2": "4T2fkzVAHz52tgESnszSxf1uf5AUPagdBNAabbENkvTFmaJfs8YCELGB37NjekefWpyXxHtn3kFbwZDztnjYG5ad",
  "key3": "3Jkmf9Jg1uAmVc2f16nB9jNhUoTxkaVhZCB7gusqHGjtebaGijFnHgcFqTfjTG9kRxXJmsr85b1YEA4tmFefuUnZ",
  "key4": "5ci2FsqqEeEWUYn1Hc52bt2ZqcpuirTU2z5mV9kNS8tu7qWMA7Seuyazxxr8mv8mzbxuPmWEebJ2FHNe6HBLrpsE",
  "key5": "d8QsVQ2tje1kwhqEJ4Pm5NPsZhqounNG5SZuHyQkErPajgavCsf3WQD4WaZ9TYcT2jTzzVciU31MsKUqJ6PHjQb",
  "key6": "2ovPQURi3qcE9uoLsRiqX9cFYduVEEotZJCUV9USPfnM1efcxGubWQgPXhVxKCtfRtpgYdhjx2VyhFhtWkSovZui",
  "key7": "2o5GiCc1JxxYk4mbV2rmCLFLidjMVZrCophw9YJabiPbQMgsHfRvnvYWntsJbo2ok7ZpuSZJ2jv2AyZ6bDhMRuTm",
  "key8": "622QLzMLTRNoFy22yBtKUNcgfnXUD33zbUF3YqCmy5awqGKtVWdTyH672c9UbSbB1i2sW1e73nCnHknL5qfbEdBe",
  "key9": "3FWg13obvhL8GgVyEygr8iphrVe8UpYcs86jxLx5MzK871tsd3opBYwgTWvv4aD77dDumHSvUQTUNoA2QRaJrhJo",
  "key10": "2Ha76u9s3oLdYSe7csj85EJeas5RvnCfL4fbFJh89iQPvhYsSiaLaAktLK5FUgC4UgyDnUHh8kgndD7cS3aofr7b",
  "key11": "5srj8L1bgjnJffKijxAMjPgqeDK1sWHd6MHV4V17LQxKyh2o1v9AWAWZYqVKGW8NsNXmtUvtnkjyK1PA4n9U1ZPx",
  "key12": "KsAJE2nwDk1tCoN8w3hFnuWZe4t61L6wmqKdpcbsBhBm3nPBBxzpqX9sPpodEhz5xUVq5PGXKJKQmtmVLyWVp9v",
  "key13": "4p88dU5GGmqfPkaQLY1cVzPXuz63fNWhZz5ENGwHo6vLeHfZQ6miStLZi97ywb12ko9L5pT8X42FT6i7M1Nyxh8",
  "key14": "2DpGijBtjjPZb6FmZjrCjzuFC6JWwFLr7wizBKQEnhXmqVE7ao8h7vCeS9xKmX64Tnk7SAN6oGw646dNw6BJmZdA",
  "key15": "qQFhbGLHE6mnMpzSQvjbG3SPcvxaDx2fWdMNDPM7akFpghptGjkzq8YAxzCLTJsx9ygmNamHcseQJq5w86ynEKt",
  "key16": "5dd9pfLa7KiwS8oRap5qhHZTB3uNTnY7nDUvnTbepdoPbvFqkKesu2fokZzv8U3CH2Ab99uZ66TphzgqSzx2vVq3",
  "key17": "4DYvnSf1NJgFfJjuWwnbc51BQ43iSNQLxhzH9FGDk2UT3U3DcGnNcJLPR8f7Q7baSZKUZQSqU15XAUZyCL3u99Mp",
  "key18": "2bdVErYcpobC7dCaFgfvFaPg2xL88nq6kxgooqofmzxPCFRxMgkU6seADyZ93ynzcjpQ7FzvyVWBhbUXQjaE41M3",
  "key19": "3FWEKYEFABmW6Upz4vqLwcsC6dqdNDMkPqvhQtGweB1CiBWY8pHAdwT4VzX5iKhA2ukJLcHz6rooML4swx55NUZe",
  "key20": "5UywCAvCGEE5ERLMhXFfsMVzMjiXRiJJguuHVpYFvBuu4ZoHTcJhDsFjfkFiHxxriWmypSLYB4mAgmKureHfnup9",
  "key21": "539nTpudj9jBrzoLaFztCaxkm7wUWdKukRAoABwFGgVNp65aPdGMBwNPqyU5znceupHwWKDgLxdqunpq5smqFXEm",
  "key22": "4YrowZJkC7a1KtcXoCdNGXrW1kVZMXs3Uans29kSBHEorZoj9f2QuapBd4nSsfd49XJAd4EnpEPjN9jjxJNrnkL9",
  "key23": "5NP14LDLjQJFNjfkQchGAHwcuttJC9EXYg3HUihKdHGNpPW43GBM1depjK3ADRanvp9CBuwgSyEZpqZaG8MHbkCK",
  "key24": "3ZWpn4qwubtEyC9MJsdGCANcBy5EVVjQAn1HgSesBjeoaTEjN6Q4ErQAT3ebhxU4SG1yzJPFNE9vdg78Ro9Eetvv",
  "key25": "2fAJXDqGqPY4DyiY3UTEY8rKaRu4rZtAQpQPSDyj4QbRCu7oJoKkmhzfa1fj4gPsp1RVZt5d5gGXenkyYy2eTTf4",
  "key26": "3fK2LLv2YmSYKabnmcrHbJe447qrFZikmN49FESE46xxKYMpk3AiQX7vXL7bVWF5revFmxSxvtoenGNQ497HD9Bm",
  "key27": "5Hf5txHQgg6n2qQrKXnhoBiYPGB1Smo8YtbHxCbiremvEDkqcRbjjb3wSCB1QoNbkVUmMg4Aon1hwJw5CG41fq9R",
  "key28": "3MaNRcczk7cj7G41L7iSXpLpgZx2FXgTFCYHtZ6yWXDo4jgo7rkduoM5uVMuLxHhcL7x6TiFBEmn9dRzFozC93mh",
  "key29": "SaBRcPzuxzs8JVZBuFxWmja57zNTq495ieaL5qBqRCvHTTkNjBQ3ShKD9KZHQcR5RqvGwB7mTkv8NSYoZZ4KNHx",
  "key30": "2Wkrfr3Axk2c6vs6HC1UZtfQwbyHABLvD2gJvkugWxkEWFwRNhbMYHSQoiFTufNeqnVc2FjWTBbqNjbFaZGrmMwv",
  "key31": "2wpsWCmeEuz2X3ffs91d8FpoanmfwSKuoW5dGPQqvYjr3mBrR8wJYU5tzaoRX6TZfpfekxbgpdrBLC8iWVqiGWi5",
  "key32": "3LP4mVKayiByDJy5JyMw6mLqiN4J4wYKkhvw76Qa9Lp4U7NSjhEZEQ3Z1Aq8AbUqH6WJhjXi5xpAJy2qCxtEfiVW",
  "key33": "3n4vAC1pb5bgKNkU3DLJURMt4bt7KrRMGvnpD4QTTn4i9hHERapvxYG4b3MwDoemMX3fNKRgzjK6HFkydgQe2ENc",
  "key34": "5b7VHz5zvs1xNuv3vwXbeUtoe39NyVsigiVwLvo8jG1kmbkebmgoCQNLHGz81w9mbyQihnTbuamp5cgLJ9SrKLKb",
  "key35": "9nqyuizt3pWHT4a9NnvRo2jN6NrSCWgBCzXYuUe16NLRVTbZB1AG9udxAFbvjvYoq6NTrNBbmyBqgGuiT3MRnCn",
  "key36": "2fnbriPLeAa8uh9sELQKfj5CwH8gM8QUsV4iot5iueYujM3Pi8KcSqgJbLqTYXJe1STCtHAtovYp1RNCWorwVgMi",
  "key37": "559h5tiDyYD4EyfVnbbBhnNoa3ho9ygayqex1ngvDjqc4uH3uk2zTEoU6WDT6oubvCpnPKBLpTs3d48GK4hyiVEE",
  "key38": "44ZfWKLuZ7ENjn1kZCFCqjpjwGd45u7ecys783PZkNswAbau2XcrW5dy9WDAJ1cYyyZB7cddSJhNivLJ5Dr8yxYr",
  "key39": "BkMzAHqaEMHb1XvNf7zLvJR8nCJwAN4EnoX274Q7Vnzo4JgrsTSqZa5JeSz3dKWhG2BRrWCC87NPuayYJzmuJ9K",
  "key40": "66QAGpLVKKdDh6uh85Rrtpgrw6SLgkvfuKgqwGGYhkhTHJCvMRJrM5tFPJxY4J3NCwf7JDSy25iE4XF2EBZMjtST",
  "key41": "24B1v9WaJHuZgQYjdmJU9TgDRJGSdWCriYF4Zg4n7vAPD4r7f8JrryxfPmccuxHshvi7yD8afpjeyN4ojUyUVe6T",
  "key42": "2mQsAavGbtv3BhAy1egCimeThDdRkdzuVDwN14qrbWW51d8jxK51Uh1U3fZ1skg1XzjnWeF5QF591Fe4h4wscxuw",
  "key43": "5dnqB26yK6ftPpJu948KRVtNEuc1kk4AMB3BH3daXT8L1c4eVDM1K1hvznSvjgPmLqPraPyEGn9enKQBQKNkLhDa",
  "key44": "2XSiCQEHjxJJAWpWXBShDnpkSWFcWKmEBZJpFvV4eCZdbr7uUUrKydCGNW2F9sFAKHWPUPziX1nvCXF3ja33WmWs",
  "key45": "uMYqP5tadssBp9hMgT3iBxyHC7Gry5r6zAA8xbP1x3E8xPw5ZMpvLGZ1RSdqDGTDhbWTrisAmU3H5g7oyaekfRz",
  "key46": "2P1FSSZHKmCR7AvueSKxMSDs98kgwQKGaQqLPdsZfWNQGSZxzhph2Jks6V3FtAavZfgAU8gy9awQvwe9UG57CLvp",
  "key47": "23Mcjchmrc3w2SswYFKDnZexX4izkxUVbe1GeCxQEJVbMFePz7Z15GHBhQ9K1JjSGwHh8Agaqh1AxK4rhMNHdefy"
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
