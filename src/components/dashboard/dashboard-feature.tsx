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
    "Mb1t4trNEySdUC1MkNULpHnoK9ijJjSpdba776kKDgKSXR8oQDaTtwcwaLLKJ5NjCDQKJkQNqQnRyFti26FLHCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oENZxYR1ASqLoasrPgj5tp2jZ9fswmAvDxHd4BBZRUv9PifbNXqcu77o2XBHowwyvvVTNAuREZ1nVuWDZYDbz7e",
  "key1": "4vCG21E2AAPeL6gDoUHtpyeahKsSeqwRZK9dsHCLMBDW9CiKaniba2M6ukqkt56gV4D5qL6b3xLaqzHZeZ3PFdW6",
  "key2": "4u5fyvfoi3uR9zRGYouXJc92TvVi62FfKGTcxB81v7JPoNH4TzTM5cx9JFuJUx11uNaMgXu6awA4htoT2AE4H7XR",
  "key3": "5zyY2Wcdz6PFfkft5SG5zAzQ6Ei1y5z1KvLfJjtjL4vqrxRbLka6DSw24zxDBmrzLaX9EVgkQ3bwSbzc5q8cHqBs",
  "key4": "5FPMpQPsDda2GN327Zxrrc4uhcyKfRogxDkqBSf9WhK6MZk4gp56ehGPD9EZvd5DqrpUgNaQxbMarUSdRz93JkU9",
  "key5": "3H6Cvi9WZvYT5Sq4pw8DPTLS3zGG1kRT69Vy4DqRc1mc3y3v2CmsHTuUoYVc1pmqkDCaJ1eDaykiW5Rw6J8TTSUi",
  "key6": "2V9hWGJUhYcDaj1REMikEeU2M8G56iWg4cKnJXL3VFJPbWCePWP2Ra8X5rMi3tZgmqXBBdyfNrHgQdFrTmA97RFV",
  "key7": "5gB7GDh2j8Exvm5E1GqwCENqevnG98LpQ51xp6dKgadXX8A1kaBngYTGzD3zwEjjqfbxWtCJ5jBazTE64VAb8kvN",
  "key8": "2e5ttDTmmpDdf5UL82emqiaRq88o96T5Ptkf98SyAVVSBU8aA7uffR4EWpuXQMxZBcGNaWwnkUfBnjdoWBmunpXg",
  "key9": "3ExaRfDnrYHyCQxvwLTwWZtsURku5rx4iagzisy44i1gZSKVUGEYP5rZrVRvMzVoQnRkPBzvYhi7yamjCR56JqEu",
  "key10": "5DRv9eipPUau6W8bLyQkYbdy5XNYXT8R7ipoaaaSwVLQ48nxHd8jcgcxRPkXVnTrAk5vRjwBqaycW2pDzxUVXCTe",
  "key11": "3ch2trqKfkoKUEWgvR59r73n2qpvQpBhis8AWVLPuCvEFhJ8u5zdcn2vYXou52WBQTJ7HeH3PrMbN2SivNDD2kcM",
  "key12": "m3HiYWskR17mVrfJL5tufjvGsLvoY5eoz3DRWgCFZzksVxgVEd8ARWKxNhTW4BLLD4v3V7F5eYQfJjQaSYmnbFH",
  "key13": "5UCtuQJ7fJs9VkQFBPXRtagSapeJsKxJcz1gi2dyMKh93U4TyCDWLRpytDBqnZMg2YVxdzL8qVP8WMxwtEWf8kXz",
  "key14": "2MZxogjWZ4GYyJrPkJEfXF681M3JwuGywmF8FhCgj2HJ9euqytw9o5RyTKVLxD1QNh2L6V9mUZJUwUZVppvcM3jK",
  "key15": "4m5kYbxtQ6PCCMoJde3HRPEdo2igGfo6FhZ7Scg8os6wQjGP5DwuufzM9WG4kRKxfPRtcwJ4KASTHdGdcrmLRCqW",
  "key16": "5fyJJeJLPog4iFTvTvJEgxmiKcJH642ytNct8Cpbe1Yf3WPmnUD99HsMueFeDbrCvKVE4CvuKUPajwpbWGWcH8Z",
  "key17": "2guefNMSv5AFaaobDchiVyjBasfqxYxXoBzaPe1CzTtcWNeYuoHHWujkeZioz9YbzFhpkUCh2TCcjBtfXA5u5T4w",
  "key18": "4W9JPzQRZXqeWcDCd1ch4Nom3BQaFfxZMMoVY3EwUwKuyDxvFc7LNqm1DrKbK37L78epX5EHSRVTaR1mAJtWNdZJ",
  "key19": "26sBSB1wUixwn5yL4RuaTba9t58m5eSDVrMSCLGHBj5RU37K2DPUCGgtwDufA1JGCeQNYnFHQKWL3yFnYDTDG8dr",
  "key20": "3NaMRaGDWbSBnqwPQDD2Jk1Xv4EEfjpwAfrhGJekweVfuzyv1LcYEVGSpNNocuATShzxAuepWfuiAMVLNz8bRZfu",
  "key21": "ruBKRNG1y5TYVxHSerNhUKj25Qnc9peyAZaNegz9hgF76F36o2FnrVJZNHhKAeQMb5f6ULfNuUD1i4thSAgJw2C",
  "key22": "3PLoMgoKxoeAAQkzQCk5YuSp67cCZ7G9fCPHAGUSvfWJAotvtQzn41p8BZ8asA3CvHiGqzZHUD73yjRN2jF4Jd1u",
  "key23": "5Jq1wNoQSUkzTmk827DM6QGq9FyuUHSBTKGwvBz3QNy7mQeF5ZAxBPCt1PGcXgkGra1jgmF3gwRiaWfVhUMjJj9U",
  "key24": "2GBtbgePyRgHuTr9MNcqHQfR8Z3eat8aAWAVxYEM1qa8UEKM5LTyxMPFQwXiQXM5gBzMmxopV2BpgriKK9PRvmu2",
  "key25": "3Lrt2HEhurGpaEW5NN9H2MKojqEYrmT74sxpUCzdKYU9whxtmZTf8SFoWxZNrH8oyy9VujtAXUprSnYDyGr4hhZi",
  "key26": "3aea472rTbtB4gkqLuxFW9y4FQZryZxEecZkUCBxZsHi5rmiDrmKFRM466GFo6TYwQANq5dpNo8aFRvEnEvBVNWC",
  "key27": "YHKzgodMqaTN4BhRidDDjHpnXNDDxycsN6f5TNWXpFEnp5BK3adBxCuY95nwGLZQ183NnrFkkXpggwJ9jmfEsnB",
  "key28": "3Lg6zbv7b19xrJj1PuNWsKX5PumPX7nuTYU3r8cimLisqbsr7kbhx3X9AyLS8wq7RdqrwJb9i8RSkHsUM1QTHtHk",
  "key29": "2Hrsmmv8mZ2FoFwUdgTr28PfQJEKF5XfzBYm7x1VKA6CVAuckbDdxE3fVMffnX9RV93egjqtaGQ9diEi7LebvzKW",
  "key30": "SC9SaFwvmyqQZoXLuj3pWkUiVr5NFgb5YwddMZCenkTpagnTnD6wuvvDLN8DUML8ytv2ULGyATfe6qpc9ifzj84",
  "key31": "5q5fmjCJrg9MkLXuG7Zr9dMvQqNQ3xUv8qGC5yCx8B9sCAmQhdWb1GpmVZ4FsCFrhV5o3PhqZW5bytXwKMV77zed",
  "key32": "4pSJMS6vQAxcvv5v91PtX27RaWNuzm1t9aYd1VKyHmE4yAHvvdouAD37e2wNi3Z1gDbSqKL1HpYbho7fLyanjksv",
  "key33": "ww1gJXsSqhNhTYvsHjxgucwcdyB5Dd5AqNjiHZxEQnFZNwMiS8JKEKG4QMLmj2hN4QT1JRcrwEWQFcbw5KMKcs5",
  "key34": "2MNRqJTJC2xCE6qMPLn1XfKHGDnacDj6jPsGFGxT7s3HnuzYzWjJpdpvCZc87mXph77CZjbyiiJCP5qWvz9GJYcF",
  "key35": "3xtxFyq8EknizqxG6SLx5KW2Bq6vH583pLRYwhkGgStpTaG2m2ReFiZrYmdK6BRh7s2X6EYr6pVHhmSNXNQjjwhw",
  "key36": "38jhcne6DQCNbgdiCdJQ1vcSwch1PCfoN3hmXdzJQ1YFrMoid2AK7TSt8Y5x4UXpTJ9jUaxNxrNka9j39A9cM1bf",
  "key37": "5SSgVUZ3fVLqa59vhi7cN8yRJbDhKw8UjYQ4pkyiFkfUvoWvo9AgaB9knin9QDtHg2mJsSkvcBw4tyFCLaLTGUMv",
  "key38": "3TyTdpDwZoZvNcgAhPyoC59CtKykEeySLAP7iwJX4H7rF4aHkVt2ZuRP2syto1zc7cbXTPzTkFE7RKzqPw2pWZgt"
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
