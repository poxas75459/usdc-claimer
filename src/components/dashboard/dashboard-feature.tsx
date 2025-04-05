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
    "5XkeKi1967dn3saydWbZ8mdHjMw7CqVskydoCxEL8rJ1wSzVuwyDzLRckc5u8mBab8tFUUKH7ReWVsqrUakQfCwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5umzjna15aJtigZ7oBgBxozLL25pzRx6yCCNXU8KSAiopEKJGZVjBuS4yPsVDVhGJTgbGrw9FVjWeeERwhx71rzH",
  "key1": "5RpbnN2c1Xy2kHd4WLeohhoEwXKFCFByefUvbV6dPtaw9dggouReYwuGb2V7QeY8mqJE5FbppR69fqfm75iHLy2t",
  "key2": "5pMWcYJc8JozoBG3VTaFESShFVudUKdkSfJgEpkmcTkX3UpFQ8oSDaZ8scJQ2kg1nPdkB1gHTbDsSnVZBQJDuXFr",
  "key3": "5kS35pN366XJspmuaEFrSmsRZWJhyXyqSsroJXxRDaEmpE1xmevA6Y3CBKjwq2UrRkaq2ocbYQWUwVek4tQw5QkS",
  "key4": "3ULwn4y7SWCX8BqgqPDHfjWFx5DkfmaG8XRmXJrJ8ddP9UL5zRnKLBP31pQ3JUq3WqnK1eUz4at2xa4QSgNdijt9",
  "key5": "5UurvtPunjssb2WCpwPR7M2iMQzVznWBFST9fyWecQcQUoeHPPafmTxHNzahJExNR4FnwwicJbq8cDxsFDMfpAh9",
  "key6": "3S5McXiwukQ2b7k6uQEuLrUC2KD45A3w8ckAyD6B4WzAHN7eM9XtV3fzvm7HMK3QPgUUNLN9KXnDV17o1k8XQz5n",
  "key7": "3maQq3YeX32jJKJqayCYHkkxAsFE3hFnhCxvixi6F47ieT7UTdDFL2A56mEYmM1wvvRShqtz3Hw4rzZw5ynDS2L7",
  "key8": "3D12zoJ8DyYJdNHVPBsnA8cRo5dy1Za5NDNo451BTQD6jXuY4RTXrEFLE4aHD92mZYmL8N6HserVhxGRje3M3dpe",
  "key9": "iBoNqK4UpAeuUpdUu1Uf5K4MQkgBK2hHF1APrT8MPVUxdtqHK4JrVuic5CVZDvYvXiZzwAXFoQjpPsWjySLVq6Q",
  "key10": "4EbGV3EyjZHh63TE1TdMq3cu9fnmiWJqVWt4ZNHx8Bya12UQ4rScjv8S3k352neV8UJYwx4PQpE3VzunnYFVsD4N",
  "key11": "4bU8gLSRTN6Mwoy9Abk5uwgoXz2Rd2V4pC7BDc8uAVQGCsKXCgg7uKghuQjaj4JYL4ukJvJWMfcuhBzgewmPNR8c",
  "key12": "M1unWaqZ3YVsgXTaiM3ZdxgVPiuGC7aSAY9tcXug1VhmyywQ93Pyw4UYFwMvYhUKJk5EPtqMgspZp2qNaQgk3i2",
  "key13": "2HQ8Btwb37VXXazfA9Nk9q92dupC1VjRTZffDnkJ5CorZdi9MW7vaiFd1eV5qANKAQAqpPRbwrq5GEhqiRBbFeik",
  "key14": "3UtMMPt8SntLi1B13hP6gbLXfEMVtLM489rz91xzeGUWivbFgh7c76EFeZU9HLxgjGXYUGMrHusyy6NXisNpxUDD",
  "key15": "3iH65A95pyBU9xZyxgBgizoc3HckVEPPeKpj5inaj4Nyx4UUp166TUbKtKKEwjrbSbSz4a8k5FERsqh2LcPWuxLe",
  "key16": "3BrYJmWXKzD4ij1XR8Hz15CahFhKX68GQgo1QzeGhVLPA9edVsVFFJX6vFWPQWrNYch3EM45ANm5w3U2u26N3teu",
  "key17": "SGe19M6QGav6gEXmT7toXcYeEWav2RJRvmhhgv8gseh3iofUYBWUDVuHbsGeY9Ghrak8tAADNi5x2kATx16QsCo",
  "key18": "5EqnGLqfAB3MRKK9gTNiFLRWyD38LX6pw5aKhxXEFvYwHBgEzzHKDzMp35Bjss4Zc4iES692x7mMrmYVJBC3Bumd",
  "key19": "2Ko76acrhTVKCeyMedHwYRTs19HtHYudZckPxkaQprfZVDD4ZkSsQe2j1CmMAHgjAARyGYvWgUQgUKuAc6rb8kYD",
  "key20": "pBDnhMbWLe3XyiRCLqGGs3eRP4pBzrQMTMnQBirfX1JbiEJsuvAkKMEq89tP2Ag4c4HTGRmLntW5WinE5UVf4TY",
  "key21": "5nNoawFjXH424d2RajD3HSmMv5JxHct3NVzX1yPxUhJzMZbZXxJ6MDyfzkkc9uFM8xaqJNK4zSS4FiukVsDf9HsT",
  "key22": "3PqfrajtkxzZkDMjugKzwxg3zHss3hBWVvYfiWgaR41Gihcx9KoywdPnjZFiNiXU6hdYGwxrF6iuY2SvNxF8KNKj",
  "key23": "2SBuvHB1SP34W8G2zKdpZ1XS4ygyvMLW2xR5YqDqfH1oDUZcdTJTDV3xEWRc6Wxwpj55PL8M8y6sR81MWBUqsr5W",
  "key24": "5wdRVHTA1kWZLgnEPkdRP1zd3cvJWjkHnymuCKGiTW24WEgGCDh5fNTnX7wYCWmDF2FKSzueoHjZ7dfgzfGGCzKu",
  "key25": "51bL2eCyGbwgT8aS7GCARMrmjihacqEwwUZGmWbseSXxTYDcdfc1YPFT8WZrxcbF2zrKefG5MDX9Sxw22Mv5vvZF",
  "key26": "4Pgvs7oSGRhndMj75ivhvsKhmeXc3d9kgvZLuyNzkKmXA2Qa63Wd1MeNyCp94c6BWCNP7sgZXUYPi3Ext46B5845",
  "key27": "5X25RvwBuLSpEiodPbWwNUvPJCwvHxKp1zLgpBsEv6WW1hLdsxyvd22xCMhVNXrQFFkd3XcjxHMdaDJYNC4wGCr8",
  "key28": "y7VRHspggHC5XoS53q5PKzNAzm8euCBfpHV4SWxScCVbzAq5L689rmm3YDj7LoQ8uPuUKrRUj9F5aV2DNZ4ubmZ",
  "key29": "3we54T8Xr2R7UKwTC6ZM4ViZ3KWPNq8g1QqqSYN3Fdvyun7ziUqYvSmvAv8SNqr53SC2378pExg4Wt5jXQbnHQph",
  "key30": "3CavM5wEyrC2w8gxGShjEMDE4xAKZTAei1ycC2QpiFoieTpz1HC1jseFH9vBXRXmadpk2UeV8u3YeR3DFcHCG7g3",
  "key31": "3v4Rm1PkdGks37RojFFiwJ6PR4vtU4TNmWMyBXszX4BvhdPm1tdudei3X1oX7fgMqKYLjWJzAHGDrg1Pre6SqHvX",
  "key32": "2TjGxF6thBjDMxN7vXA2bj6UCjdAdK12yQCH8UHqSCfoQw9vyeTydLgqBDMQsJzrVSsrJRJ5QseAbFAihxAEYWKf",
  "key33": "63G5s9Ju25wgwKkRPfXgjcS58RGNWNUDKrrXoC2Ug9nQ3cv9ZqHvBuu8ZvQzRYdqPKMdRjELQQjhTJ4Cbxy8txk9",
  "key34": "VuEiZk6xbGGJ7TcR1vAWWwsMR8hU9gwALJdcUV3jmi2BvKXj4fiM88WBGdQcXU59g6S4NBZoUf1FLqUDHcvY27H",
  "key35": "5DJD6ZGzZ7JAB7Vf8NUsmBxeULzPgmJNfuR3u11uoSg26v2kXnwHt38QDszauudJ2msCnAaJqPbLEMCJfZqRyf46",
  "key36": "4P9e9vupLZ1gAxGZsHEdVUJy6ix6JSC5JC2ywcYTbaf1QcSahB8YjdYEcCxut5WKvWmameFewfEcedRSyfygawQ9",
  "key37": "3L43X7bSt8f3C5N3QBq4norc2jsBQTM2muoLem9PGbecoQ7gkkwEoiXn6VJMBufv78wmae7YNjYMBpLVRhnxpyvj",
  "key38": "3TMHS2tYwpMjf78MmzYuzxfC5NCqNPRX8Sbrq88Ka1f7FouD3sFWGuDRuhL2vrmc3irgPSh59sMK5KrPzfhdiwCG",
  "key39": "3VSw9RD9hC171SRdfiDuTuJeFytqm1fYSkq1LFCxovCC8oYD9YZde64aDBTJaFwPCvy2JVJLKRRBF7UuchCNJyLZ",
  "key40": "5w6cfw2spktGSrBmERqBGwXPq6WpiZp72iQed2rD8X2myfA3aX2UXjdu7Z7pqEzxbaTdsJbfV7fi6DaTTxp4LBHy",
  "key41": "1oj75smtvxkAvCapCHxpNem9ZpKbEm5LuNXUPuRHTRZxSpoSfai2PfvqwxMNpvUiRfTjmeVTKGUSofQe52p5rGz",
  "key42": "5pjSXYqRewS781fFzQsCu55nubW9nkTnmWqZRj3p5n9Tw7fiebU63Vc2RFYMiYCewEWzQ2v1BdBBjSew9k5J7KTz",
  "key43": "312h2AQEMdEMkyubVxgDkyka63LcriC2Cf1JyS3a77oJs6hA3kjJj6DTgaqabobQQsfKDD3bkEGMbWFmpHWUb2Sn",
  "key44": "2HXeXeoFZuz4D7KTCxqoj63rw12T5YzEMAytsup3bfmLCGEZ1Kt13xyWjHVtyhij6eLjtrYVzjWMh9U5FqGcPVpK"
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
