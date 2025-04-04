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
    "3DhfE9DZgpgGt6rNjnJ2cd7mtJdVrpnoxy9bbzKdcX68PqgLaHFw5v7nAL48UjJzMCxe46Bvfvcozzs3i2yKNf6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c2Q2VJRL1GBfb2aGE2NSae9hLz5ygQ7p2RVmuSuHSm5mpHzP6QUwz9KSfLQ5JEv7zSmwXWbN2ns5oRYFayaSeg5",
  "key1": "3u1kSt1Lx28gf39uNhEwNbGNNkhrm4LvCrVZDq7iYtBvZt9XRkT2sTazGMuhsrCSNTPsbTAW6z3HEbGB3dwi3P7W",
  "key2": "4W3WS3ZkayJpZ1ZxgSCsqqN5X9pSjY2Qsphb6gPHyropZvnFH1ErfJL9BMmZxaK7yY7MPkPfgQJuHcQKedBiYoae",
  "key3": "3Znj2z44UXWsEnigEu1pcr2QfJdZgeK1uX2fVSuM5WYLT84RpkHu2pFHs8tdtjeCBTM22YTQdsH5vsqb3qMncmc",
  "key4": "hfvgGXmVYDi15MtLibdMhaXU1sQTrPx9xXCEfAUsoUcKBgGqVQfAACPQoJhbHozimvJoXx1D13CDwTG7w4ZEB97",
  "key5": "5h5bGKNCFgaNAmXRyjTPFwbcAMjtfMxgEGdh5Rdnm5j4Qfzp7cQQHy1GpZyiPfV9J7M67r8Bhcw8KbrZRsfoJeAj",
  "key6": "4zTKf5vnjhZ5NUujzEWLuBPHTBgyP4BumcAjgsEtLnmBY11HhVTdqoaMNDVgQeqGnfKXXLxGrZrMqsomEz9WKroc",
  "key7": "xGZ5AwyKZCDH5BQvX1yY4KQcNitCh5tw7Z6NKeZ1PEp6MTqMqEyzpU4VfAUtmUpTsx4445mLPzKE73aF4AxmL5j",
  "key8": "3NgG38NEzuhDpsmXVtvm8qnWK7q48M7VNuWNPQMRUHTsjuhq11kUEs9VMNyYySuUSKXSRiiY7Moir9Unc2UsW5k4",
  "key9": "4fS9a85Q89U7i7sxT82gKx6iXtxj7TWDD2oaMHx5AqhhcJ9tqkZWBwAo5yHGTdf6Puj4rR79xwbBdjkq32aU7ZrC",
  "key10": "3gmQg7FdFb6QXq3tMaeqWYXVr4AKyyDaJ3Kkfe5WeeT3j5V5vcJzivPU3o4xhi7FPGty4fSjdH6V1D4muGVgY7Mw",
  "key11": "2gqmmcZpRvWpy74XbWsivHDo9Uqa99B3WX8QuKWgKcRcPvh3Akm3LiZfjbm1rGdxaeSTi95yPsNzExQUXPTf8bPw",
  "key12": "3zKBJKzeF9Yde8n8WN3DFbhUETnc54B8UrfmrceM2sFNPvBgFnwgdygwSkXZzAtkPAHiGwqfHPcEtLdGwiWMBgJS",
  "key13": "4XvADjksuEJsy7bu2vksRRN5f7VEasNJy17zvVnCjq67E22q196jmyD4BjFgFtcBikyip1UQkrwmjSRBZUmgyZ5q",
  "key14": "3uw7am9usBNLef7VKTfwgF8o1UFME1v95sjoXTaWwM7PeJ3iM5SdbamHgK73FjGSG54hEZ1dphKuCDnZywbSN1ZM",
  "key15": "25vVYRMhWfiZzULqtbxaWdCkL1Q7hq1SUNaEFh2JDskiCdJ4wbMgzdgb35CaDFLDERyzx3hrQDUtPXiAxYHLbWNs",
  "key16": "5USoA5jqkC8jDAMeuY3Lxb9GcdvhZ51SetyWQS1z23q678gjXH5YmzDprnFQ1k6FasJzkG1QUWZC3ivaJR5Sunme",
  "key17": "m9Vn4AEGo8buW63qzVTXuzKk6JGx2uhRmBQuhtjLjo21QU4TWc33yFSW5R792oaD7ozjjdvxoAvK1afUegaAqZS",
  "key18": "d8esgdnFziaX1YjxJhW77M8wv33wRm9k6iq7Ry4N86Cksxekxtp8cj715fDQsERxCcYHAGQrbopUX3G9kCgPafj",
  "key19": "5pNz3EdKnCPgXqYxMfxiZt4Krn9CPxLqcc6UB4mZ4PpJGoRhN1jTbobYahdvp7b1Y61pG71oggpyNczyuq7Y4ABq",
  "key20": "5MEQQ4tJJ2ryE5uBP4LKFk1R3LfNKxMT73ezhFaLSmTiEKe8t7n9BCtf5T6TbCHLcPeu9vHfV7YvwNX5oY6RymvM",
  "key21": "4VJsVXBHUkpGQtFXBSVrWdRRCwHJcGkonudhnbqcGf4coiUBoruGdkVJpDvg5yjGceN14gPfwJgDpufij4evYZcN",
  "key22": "v9iw34ieiQQ7aMixkXJ3absUM5HibKhmhb7kkNBdTkNSMXmJgBSjhJeLD2U56YLQehKnuqpgXC4w6gppZQoipWu",
  "key23": "3CcRD7nXEshEGXzQep8ApxLonX7Nx1JgeTqkEyVX7LeQF9wDHLzbUpa3p88vV7vARc8BU2P76CiDs4QVH7NsHjzr",
  "key24": "24jjfQH6KgvYnV531GPaoArSzZ16uUqbtJRARVpGCn6PrGhb3FzJaoJmrfdiDid98djimDvTsqkYqWA9tQamqLPF",
  "key25": "5tiECFTFZk5ynq83ssCNP9rFLtcvejTmh2Mj2CWAivbT85aiSbzcssvr9XMXzGksdZGcmTikPAwzUGb28tWt91RN",
  "key26": "5oyUgWyz8cgL7nShRjhToQdrUubPeDkxBDTDrHFij2gwAZjEp2Qiafq85E1GpZgfRryyNVqaxFLx17nAqywfHP5X",
  "key27": "49pwidzjJC39cJuhHiRf71mdQEh6zpjYs7JCpXZVWcVZo5gj1fYVM8QfAYvM6AmrY1uFbMECvXqZsFctwpHDjdU2",
  "key28": "5UgppLkji3ypK66ZECwZtFvjqKhVGZGJarxmhnmfcgySWqNHXQrcYy92EUnJhFJVMCVRii5sVaCyayLwpykTB9ma",
  "key29": "yiPcw2QKLUHkqkqgU7x8ZQbVYG99nmjPnaq8dQWGnvurNBssZA6MPNd3LHougdDZvhNb2ETs9Z8TaTuyFj3MMFy",
  "key30": "3P6dUi3ff86nc6aLewRPwEpMzJSpfSLr2LP1HntWNRGJmJ8QQ4jaP2U6wxYG65yg2eiXowYMTnyBYE2scvXt4HkT",
  "key31": "5sBmrJpVizsEUMQjMhwq3pdSQQyPMxECWr8ckzTLcLWyaQRHAPU2685jpusxEx6oKfvz7qWfgX8gprc2N8dG4cXB",
  "key32": "3qvtFLZJy1xdazU86EwTUqT8UB434ppmPZWSKR6u88L7Gn3LUMpVEzU3ARi9WBqBfPcu1P3caiZ6XjK4kagtwy9c",
  "key33": "4UgAonfKHjHLu2DqSMZJoopPvz5on8hnPCybGN8J8YFk6UTVtH7vR6aPke37LPn6xWF6hGdX7iJeXTRs9M2XzTN5",
  "key34": "mY7QmExunxktEvwVNjoYjkWeMPUbmWkdKnDZZHqTiK4sUUoWePCdSt2r2Hp7FLqMEZmcFt8zUnHCVrNHcZNuBKb",
  "key35": "jpUhd7bnja5a5QB6aJJ5XarnuzVPngfDoGnZzvGERNXgTYdgUNnaa7btzTCnXB8nBdygQectVkWMNUqgrt42WKU",
  "key36": "4CQp2b5giAspYiTmGvHSiB7mMdtUiV9BwXRKB2mffqmHaKWw7bi3u2pHvCWpRyDfin1BnCLHD9mTPuRPUpKEFBHz",
  "key37": "43JypfZJNyfKm6yKxPj8oyuFmzbQPw3HLDujBryVtpX1Z7EHmxAyjrsSGeXpyneqEatNMgGqgQd2FHRqiSHboPkN",
  "key38": "4EjivGs8miL3kywB1Eigx7KrRgfY5DKjsWpPG4F3GsHGtJXrpcD9StZJKbqNavyTNbxZbjqjFnLvebYAjagYawB1",
  "key39": "3UxwHEct2KprePvKXtVLFLQQ3d2fry9rsBYzwEsJY15SFFTARo8bLNT9KkyZHarcJzPb1CrfsrC1TcQCh3L8yAom",
  "key40": "rdE31DcxdeJRD8rCGNpD6TfMmS3zTiRqS2d4D9nTDo8mKhxi6mU2BrVAXhQbaBuk4LHP7gjPNu3X7H9LqwCyoKU",
  "key41": "3RLCNXBXJ58bs2o1TtoGNxpCeW3r9vzPWpLKyyCDGzJ2C49s2dpM7WyNvQdtjCssU8pspmnyKZdymA5Fv81u8DqZ",
  "key42": "2QMrRHjjuZiqk7HJ4kiNCagnhLhrDauHA6NyHmQuTNCmT8ypjsfKB73t4ib2XkTRxjavDWamDcMuxy88Pxh8RNAb",
  "key43": "2XhbdhKE6QYfgu8Z5uwVFoqjHV69dhHe3ira3qM28zTuuD2Dwg2U878Vye9SogjQF2TN5iNtwhacq25SKFxaJyc3",
  "key44": "3f51m83nMyeqLwZb5uPhoDWYoYfmeVyiGH6cjsPJmJTY4fRE6qeMicHPvxrKJMxXC13EeAZYxG14GLmcyCmRYbAY",
  "key45": "538V2tnkdYpWbzEt6EDH51BhBHkBs1aXnk5bj2amc9uvi8aFd6SrLurwCxz2Vn8Mx2GnzF5Di3BHcWnSibiKczPF"
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
