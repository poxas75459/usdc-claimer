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
    "2vDoW8Z6KJhmdM7M6fpsmzoXX75beLktu6aNABVVeagZNTjYQMFHX5y8FiWhiGg4rNLfWG731VubKzNYSiB3ApV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66WXEBRyVepnHMUvkmo7TNNAMPYMLZUb2mpWZu5X9St1AQKw6FmbArPKkdhSBD9wA1UFGxiUPwXrLA66tR9niRTF",
  "key1": "5Nob7DTycr3rRNCrizdjjNXnwH2oZvnsTMwKQTSa87RxDQhJt2Tsd7MTenYijPMAdCUNWuJ1HKo1Fz8hCosu9p8N",
  "key2": "3nPBJMStUg4pjEZFjZvqMRTxePwyuY1x78hdArh67BpcAVau7hCVtq3CNwN83JXHvzHDznuscj8dXNEgGmZCwFjP",
  "key3": "5d2W523BhYVnsGPfbToTwjztXUPjH2KHHMHBQfRSC1pdoz4Nwtw9FacuLdLRvtA1xyLNkzYJt1SykGxXTF7jDmYy",
  "key4": "67jQM7efqKGmTSsRv65TU7GiuCH2VV4dXT9bBtB43LqfMxyLSytEAvB7Bss56Xtftqf5ECMrmMTDVMfpJQZmPLvw",
  "key5": "BE9vPnQDWZBqDbpBAauyE5moSW8W5qLQbLmUT5gDAGNqHj5gkKPS1EUZGaceZYw7UTskQTcJPseEPgvPvhmsKxB",
  "key6": "2YvpZYCfzVvWn3m1HG9jggNP1XU6GLh3EaNNnsYnJjKSvzvkH4wYnKzoWgQDBYyqWsPNsMmmPqAMRp3ab5E3MYzz",
  "key7": "44CJKaEs6zg56j1ZY98nikenAqqqQSDkkWabPfu3wQmuq9kkBgCrTSG3hPivKdiiKSAbX9KjLUEM947xCScwWKEQ",
  "key8": "4z7UQngKMDVY72UgLPwiSezFuKzsUd2T4bro3BVZbfE5TMuYdBYqhpUTnqXUhWUV7HtyPVxqx9Jd66rda4M1He4o",
  "key9": "2uw9higfxDxcHgtZvR9ptVa2VUiVs3riij1e8hnujpCSmwr6VNiEhodPYErmrn4kXiUXftQz8qdTgYZY6Es4pvus",
  "key10": "3yMp7HEL8zuzQuXTTABgYT2i7rgg9Nu2ZMAMBBtVqXEonQLcyAyYAxfSerVtxBPZu5b4GMYS7rHz5mCdFS8eJicp",
  "key11": "54cNcCS8DFaRUbFsciLkwccks8SKpGrrdJe94GE6QhhG9KYfPVmnN1zYCpJmcN5byCkdNcXCfwy6mf3L2ZyU8bqQ",
  "key12": "3MSF6JTr1weo2Ar7YLxwwXvEY1S37TjWP4RnwHDtFEgiCftBog1xCrLLhSmMr3YTUT1YZYPTuT5VNaAS3Mqbun6b",
  "key13": "3kUgKgXdG5BnYehfb1jfq7gpX3HLFgV4b6NrnVxqgDhfuBSF45WAxSydosML8JcubPrVQ5NABigq1oVckoFAZZbm",
  "key14": "4v4WraR79xE8TzLfjNQ7rcRLY8xetzs3UrbmyYFCxL65Wt8htUjVjBPVHpPAcmMvtfg25PEhyzq6d3dGy6ySnmZK",
  "key15": "3eRzqWAVsvqLRHg3rJEnq8cGG7JWdyim7zK4SLuyF78VxSz8D898kGpt3RUWjezfKJTCA6mEp8xtL2tv3XVCvGNL",
  "key16": "28ke3VxhPhmfNWp3UsSuaCwGsxUW2ZLB4pUVjgJgVBwPXWYyBX5Gqxka94WzuMHr2aT18pudyM2xfiq5oMt8RuKr",
  "key17": "5iS1LbJ247BeeKVLEAmbrmLkoouajwEcj4p3TMeXEeY4MVdCSFPg3Gkkp7tsJh51JCPqFEuJzsRZd5PtctzxEmeR",
  "key18": "WQsv7GgV3RUfnqy438mrAXV1ezUng2EF5isJvptote7NtvJcMocUpE2j4VDkr98ZLjwmLDehzSjT3LVSNuUyNaF",
  "key19": "65hyf5451RLCy5Qy5Ad3CQYS2vx4pqq8hF75518BYYPxNMRRyvKVLAcW9ZQmSxae5XeXWFwKpc9RF6cctuDR7rC4",
  "key20": "34m8MNcJ9vZZcdNYDiBkCMGMse9hAe9vomcAqADaCMRG9oyyKWuRYJQhUoUTr16m89bfoEVwd3pKAtLkvmy2eYST",
  "key21": "5DXchFkP7gdQj4QmRuc27qbx5FMHqv68CW7RqxbpnZj3cW7vGtqe9APGEu9kKRZ4D9WG5PY2tCafAWyWGdkZdvEN",
  "key22": "4jLHFXmWt8RFTj2npRpQQEoZ7LbUCwK7kwiwSiUN5aYj3u5AM8AG96uXyUxRCNhioeE6xGhHZqRFVstWJwHWjo8R",
  "key23": "4av6JtyBxJHFB9PYKq3tnfTvbPCFXxutnYyJa1uMZuvQ2XkzPseRSf6t6ZCg5pkzVVX9pqKBnL2u9nLWvtpskny9",
  "key24": "NSRFT3AZGm2zUaG6CVpaDX3Bs9PYwcvqboFBYhovCbyPs8pgoPGsWhdJhuphT6ofBqoa51mkQB4JLAhVJZSUax4",
  "key25": "4ubXsvAsxcbB1h5iBbLo5tJpckuwcWp4mTpUdk3M7B3mAHQuhPPYKXaX4CZUKmmTLL9vazR6VMBe57LU2WBqZnYa",
  "key26": "63kPbWQfAm9xfj6WGQCGAUCi39S6a2yMnxTLXU24aw6jSXjQb3KwjSVHjzTkiKiKpxfMm9zjfbahELWXbh5uyxvP",
  "key27": "652mGmF4oKKo6273VtH2Xm4HaBHXRLUUJdFsCESNfjbHK9wYgNf6snvNedzd9RmjQMJWQcKXaBGK8foXv39zp9su",
  "key28": "5iV12EKCLG8ntThqy8V1V66fyfi43BapkzdKAhc9tdeSh4Rxgo8hMuoGwmKn6r9HwW2sgVfCeRgmgU9GyYX3f447",
  "key29": "3XzP9LBvUpoQRcK1bjz1YJLHFq38LxzpNRASULcPspf29SFXsEXB23v6GJEEhjKFjtaQRww5wWX4kWnj72nsR8Bi",
  "key30": "2QJEumDnAZvd3TYcD1tq6LQpZFqNRyk6vt1azBoZ6S7VQruWkwMGYQ5NKN1nHrndUffpj3cnHtTHwJrVmd2y7wKd",
  "key31": "5PJoPQzDAjUTa7J8enonAf2q8ZxksK78xA7F67uxYQYSstfeeM7biG9d8E4V1SJAQdocm6HKRnk9E2pxJCDRQb2E",
  "key32": "2hR9JvSAuLFTGR2Q9qxgnd5zV82gjsUWZYusA3CxJDU3dVi9tFBsVkNnVyj9rvMARwx6DRPBLC4qbYfZf3HmkSAA",
  "key33": "KY3U7oMamC3DqAubyq888oyS3hvi4Nyj3h34Avc5jW7FowwMduS3gqfz1gUMHxGYn4bazNLTuJG2hhTRhrMNxZu",
  "key34": "3phnqUvqZFndcasWJMqDfs5mhRr8m8zxfj2D63YEmfotJ49Z8BfxpJf3YMZCR4z3BjPaNPmVKQNZ6vCKSYHv5xP1",
  "key35": "3unMmYUq3gVzZmKbQkc2CNHwJRMR7yTeQj7zqg6syAA9MyxbJGbaqYgAoUv8VXsNXFLsJXYM77nk5QYvoo9Ki59W",
  "key36": "5yDfikbTApgmXKXF5cvwFVDox88Z1x67fYHA9fKf9kady8kmDvCmE5rbyqe4SujrM3Ev19sU8WTNwkuoBxiteDeN",
  "key37": "3zyjoPq5vbHoQKYbBqjPuy6R4L9wtZSyZ1SK7dFc7eTyb43LiJyJLyXm82JWj43ETKBeanoojYrAsx4j5e7jQ7DQ",
  "key38": "UdNapHm1m1aWyyahY97KcmDFgNqdPPXFHjRnuKVMqRHwfKYtsNrEVWnk2CSqxqFBEzC8fiuzPEcq1xTNnYdxyos",
  "key39": "vPighrHkKbXaTCqESbxA2kVqusaeGzE3oodWf4a7KjZmHst4Teo2nDr2rFsZNYhF1EPkZ5K1VRVb8CAhrNNHpjc",
  "key40": "3ZhQpN3KjadqedrMEiqVEKv8uUkhodtuzT6VesvHZQGMh6SQU49Rkc917g7vHDtsDXprSV2X1fN85WAz7F4NnEJr",
  "key41": "2Pw2dz7xYGJ1Ji4LtkkETSLududs9XFuj2HMRkd6YmgNqTAb2rbQ6fyb3eUFvUoVXyAHB48zNTMoexkYuiPoCcc8",
  "key42": "CG1cHhRYAwjHUHLjEqkNRmPeKckUEs58Uv6XnLv2SpbjKu59Lwp1a3qppTj3oBKRhCuxWbhoeTt4DgLD4kxtHFF"
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
