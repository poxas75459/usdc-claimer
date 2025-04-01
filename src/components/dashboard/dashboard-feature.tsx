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
    "4HGJpa26Jg59zgZSCU2eDsCx66aJm32HK5Vz6r4qA7AdVJ5JBLCyx1pZQAh41PDo4xDusaR5SRxL59MsiE1E5ReE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KKzUNPzP8Jo1rUCMyxj78hEaxdrc9hs61dP1HA5AqSSJto78wAtKSDEbC654nAXnxXHASoSQ1z7LkDo5B9aWudn",
  "key1": "3cfcdJAi47vZb3NntVsrepisYVRwoaNNBjecsMka7YJ4zcqFKXvQdronbLiquA5GiKJtuMGhoPo5jXH9TKwDLk37",
  "key2": "2FwnESfbpTHdS25oWF9CcZVZWbgyA99K27hBrjoMvQx5DmjJ53vNkz4FPdahdZh9GgeKvSCCCDaMnqV8r1G7X5ve",
  "key3": "3KLhiDRCmMDeZ7CvZGM75D47vQeJvvJH2jFQBPpYkFNLKMZy5wC8RiVhLCfazLxwnPgxVjJrxDxK55KaQyDKBfBy",
  "key4": "4GqTqnqp1pMsPK3uRDDVD31a7RZF9wq6GnofhBMFrk3NDtzuK1GmtGNGDYxFnnh4nHnCS9spvzwjNp5RWGw4aZw5",
  "key5": "3227rv82YXBz1RkgYFPr3NNEPF28o2Lr2xG8bamnkFk9rV9aMvqPJwkatCvzvBP9gLqDyH5A98qpKXoHxeyvG53j",
  "key6": "5fwXkHibQgcs382A5jny9WhEb2dhgqkeMK7E7WiCHhgBAq42kHoqzuGfGy7KHnzJEXG4BeEWTQjXYcqPabDruAeX",
  "key7": "49NU3pN47NkAa6sGxt1w36iZAULNBgAUxsSuFGwzDMwy8jdovmrDzN5ddmyMEgE8HJHHbApkTVQKFQDSkg62xj3Z",
  "key8": "5Uy2r3TVwE6LGEc9x4Mr3oDDUsFTfBk1VXzrE5ciLwavLvi8QCCL3jjot9dWHj3PyMYCKLzCDthG4Spt7Wzhtv7v",
  "key9": "GVint5K6XbjjVtuBEsdemcKxWQLtjYBV7N4rM9xhKsfLUaAckiydEKi2JMwVvsVUrKNvBR2pjtgubTusFKmgwK1",
  "key10": "42B8MWuts87sygdH4qdVZeTDvoiNf3Ua7xaXj4ZYdYJskhWwjFCXNXFLoCjMJVqC61mYELhe8XsJPc2fRWtUM5FA",
  "key11": "58gzwsJe6EdjYHVaXFzXMty5D5wXejB6kJ1MnZe5JfqmQ9P8V7Gy9cqPBVjea2We4tkZVVJ1LJzZLLBHCrwejDXL",
  "key12": "3mZoWXMhZMSefRQozb7RuSPUGBQjeu88sZAf4r4wuAgkiXKiomZ3xg6xrxnJfWPsYENrzusgHmjrMr7djSMZpe3d",
  "key13": "EDm1Z1PqijygQaKKKMUjPCMNRih4WLhbApc2dNQ8D9hVVaxJjvGMW2kgxBydzk8iL5LuZrmLGGzJ6pARG8EPAya",
  "key14": "2eRaZ3oUccEDRev8Tad21UtZE8TkwmAoFCks96gKxHFhLAZZb6LuhmnCTUoohZ4SoNufbjFYVB6LxfjqsTomm993",
  "key15": "45eav82yJswkDKKhB236wj7jFVgywB3M4jCsxLZHPEb4zsPEK7BMx74G6UFJppbFYrHmtHEMiwz9Lg4XWJWgUa81",
  "key16": "YnGfzCCxruATNW4DxCTGY6gsWgy4HanqMwD4HhA6Dq8qzJAp9YM9jBHiv1WuxwEDXPDvdtNBcc2NajoDcV75TYX",
  "key17": "2XpzVsfNxTwP7UisNC5kx1CGpViGLDkfgymDxrNnkG9P7WhRX8Vk2Wj4MGzpBnizUWidJGQruUoUGXbBZ4P8Wfud",
  "key18": "Q928Kbj8brM4bvbK95xQFcxzZvbdgehPanesb3swhxoqi33WPoGtebdEEz2iLTxH1pxHtNSL9kPhG6fxxGqSosW",
  "key19": "kMRsQNfnzVCgW4HVHcVE8xf7WunDLWhcEnm8T13xjdoeGKcpb61nyx4vwGCv1Q62zJcAT4kNUqRPvDFfTUfqKFS",
  "key20": "4pXVcs4wUW49XLwGfhFeFGikuRggxykD3r3iFuV46YYYN5VPDEQJ4FeCFf3UU3R3Cztm4giVYevEMaPKkaw1Nxff",
  "key21": "4VurunedvXphyp7uFy5onptytGocHedE25BRzBayFdEso2cdG73LkeH4auR5T3T8UqX1wAM4cJzG15Y6UCyBguwd",
  "key22": "3BBrFF8UPUzvZVb5FiJ5DVh7SnKAM2QsMtDWBqT5nJUyR9Zz7LfpVJEKwtjNCqsDU8QMUqBRmsCYbg5nPCKxpKsA",
  "key23": "2WxoFnhbEaWMzSQaYkJA8wKWWaFgD7Z4sS1pxr1CQwsKtV59isufa4SgXHFcgvhh8wkGQyxjRWuXkZ2axq7kcS5c",
  "key24": "2cGLFc5mwWvrUQoXpo3TVZQzSbgcot74fohHwA21PptfVgnLBNwKjR1GrbnobYXRzybtH7yM9CmLc9Js6mCBYQ1v",
  "key25": "3S7XGFuuGfqnY5Trc3hHpS7fgbv3QYqLYrf2AdP7ijVN7EMtaAisXw3wHH78yd9EGZvr9ApM6fTccL2ZPVQDnxPs",
  "key26": "5kxfP556Frx1T5KZGcvfjBhheUNjGJUvuXVpF9ER5YebSQDgHwBp4TyuHxN6ssGDwQWdEr7xQTtLGBnWkkqzDEKP",
  "key27": "2bPrHDQrgJr5EbkuZqhTxoshsaLxwt2wtcBFfyNvK7JhReSpPppwRffyVDNDLC2ui4hYYfjjVNSBaTnx54bzamRY",
  "key28": "hNSLWoLtsry2qZ4z8d7ZVgAksTrS6dX2dzrZvyjL21EfUhQBqf6FL1gkrijPS7TFfdbXB5Dgbo3xcQhFxLwqHVU",
  "key29": "5anpYTEVsvQZAjutcui8URfnkJ7sbjLsHcZDgRB14GQByM1D3a2bEJQHtbwqPpwMRTd9QhVwWe2LJVEkK7Hamquu",
  "key30": "2P7E2d7mMnDrw3qLnBUmP8qUjMVZoFDctJiaPiiffXd5fNoxxmo3znrdyG18bZ3JvshZ3KDirrQbwaMf3GTgZprL",
  "key31": "5JJCYNPm9HfixKzTCbrDLnyxbEfAi5WdaLnkFCyK65QfLnd3Mou4hcTyMYV9eRiRY6ubpWeCrjfNHX1E3Tz5YyRa",
  "key32": "5bY1QCgB8eRtKL7UfcNCbGriR7xSWS8pBjJFQRFG9MWSZtUneEa2EPAvyjycdw5Uh1zCEFgHrNawd3MYBNBM9eNs",
  "key33": "4z3c2Xz4LpvQ5K9jcwQMyG6PNodGJ3iVhu3ejgoKoSehiAiikz2TgMvpLfLCvhKyfYSKPYCG5nw8MRGXM9g7py5J",
  "key34": "4zUaRWKApx6JMFmjxCgZpffNhf4eVXZTgaShofn1KQ64K7KSAcT5FancHdSnWR4TS9cVCcttJECHfWathUu1H9cq",
  "key35": "33xBD2BdNCu4Cj1TpWriwA3VycvP5vtFsNUFScaRLHSCvLPPeP72wocsg1KY5nRMZQ2kAZEwPqmXyJFAGpT3KDtB",
  "key36": "4VWEjjuMwR5UtEbUXctW63Zj38er9nfxX61WiZbxts7Fu5i5jke3a7z5ZEmPgWQ1MMKKcVYk7mMrRKuWKqHZLEmS",
  "key37": "3KfdMe68cyGg9eMwfDxkGS4zWmjD9it55hiwTcHJX5T1fXEMPNtv4htqNT6WHAb7t6N5xRqvFPMnnwvgvFLWMfnA",
  "key38": "5Z2gorWhEXVNQHqDKHeXMPQSc8zbq7qXKXE5qTVaXjir3fD25vLQDvVjtFsYyx5A9de9Qn1CQHXQmdRAAsr2dE6o",
  "key39": "4qxaoktbhNSpEBrt4WjPFFpkC5yFzT58Loscby8tEyUA4mkmQHun1wSxuTZJZVpoHtXbSqLyykj7YLNEeRY6Dgxr",
  "key40": "5WeNFwLQPy5sMVsQhgyLGXE4zzvMffSn8k7Ywxamn6Latu6rzDtzycBrw92uyFjBzhUCjRVuXnm2zqhH1asgpC5Y",
  "key41": "2RSeUegAg7gqd3xhCqdzwzFsMfvhTJ9RijV8QJkCZo9N6FjHsqo4xLM9zBTPHvd8Pe4pwSoq5VWHhSMb2zXtYCot",
  "key42": "2RLMcbjUpug1egsF3mm5r4E9psXcib25RV49jyLsx26yWcGoge7euZK7LLwpD4D9qDRdBvn8onBevwHhGNJCGKAA",
  "key43": "EFQ7zvATgNZPFCDthEjNLyYAF9SVHjna34x4Gjh9qisYnBaGSvSfgPNEoJmfaPn75Z9LhtkLGuiWwaPY8azLLGr",
  "key44": "4K4uiB44r6SGy8caGfSxNVhRx6KWp1AEEeNE3P2FQ3bNebxk1MAdH9kgxh7M2cu14RYeBQiwjvqmstgUKDH6ofzu",
  "key45": "3YZa6GU7KVP9AJfcczrHnAgeLKdd1TpJ934fznqMq6MySQMXo1PhpJ6iNfiMMUe69cKdHr8Y8YMyyU7DHX5uLBQ4",
  "key46": "QUhjC2szN5AWB6rhyhCTfD1x1P8wphX2VWzchWuXwKf1jUaQ86fFHVjQ95duiuko7FdWKdPA8imqLy8myUUCT2V",
  "key47": "42wR8RkYFChCtMPMF8y9kJevcsWNBwB21JW9LmCdXZTjW2V6zNy7MEiSs2pnoNyGhGZQdGeqMWEXJGD7Jdq7MBc5",
  "key48": "1b4usvyXi3LShuFsQHANa7rEPcZvkeyfmmsAQ2gqW3mYGapMr5uBznH6PjMbUrJPvYiYFw5utH6Hdtg7GW9M9vT"
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
