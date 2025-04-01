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
    "skxtMMbShZiWPbVv1kkbHxAoxS7qRYsWaTSqSehp9AaQvD17fq6hbJQUPqC22A262xtSABGszCXGg5YCsYBHaTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qt6DvY2HfC7CUZQgebrrp7nfh49Y75uZWMJdW9dG8FPk3GSpcQ9Nri8YWdwy1JcNGfUDJDAtP89AZJeM3BWpwRn",
  "key1": "2TkrNA871G6smLTc97xYmKjdfFmec1u6zygThJSKNoAXtRJDsxzFN6a2XzpfjtvURapipMkNjPvxS9TgvzVrWzdY",
  "key2": "38iHekVgy2a6HaQDN9vuLkfzap1rFJQ11irBU1dwzRzVNVcLJ2eM33LYigtSJMf2uWTFtBwdUg8r5bGeiWd28pPf",
  "key3": "5TjSUBhkUyEcWxtbd4m2ardJpXCZzKNyM4guWMhnN4iRKN4AtufuVrccaQdzkSF1xWNrPnKKfYiRYBRBHsTszoQb",
  "key4": "5bokAc4sBUiy1AJh689hqmVHzSuC3UycaJEamBJYonSysrQ5R8yCKsN63EGbZVox786LuKW5myMaFChNwWkvt1qL",
  "key5": "5qkvuEjtk3dywDEaRDRkPygK5ntkD5qAZgTJNYhUKrbWRohS7DMbmCVupbfgcNyb3Cvt6Y8sH7KDYcPvsPWwWKYs",
  "key6": "2FZ45oM2UsQ87XGjKjwYhHiuCN14Z9Dk2BoR1FA3jWKiBG1jwGFsWG1pqzUU3Yk92QRwdY6UN9KMfuCDWrpeoWgz",
  "key7": "2fuU5cH4U67UTXsSQN1JDVSZiSj6ndvix7mo9rcgzdxBoVcbC5ap3MHBbo8gwfX77rYYFRCTDojKKyqcrKYX1e7Z",
  "key8": "a7EyYwtjS8hJZ4cWgWfo1WL2aT75XowvJSvFggh2gwk6CEu5CrtAayUassJQM62g8Qb3cPDFEZ4eZc2xFExr2wG",
  "key9": "kMNqVLJvaS8Cvatre7B7JUY8LYiosk6XipBeRyPPcac1x6mMfeHLvvCU1U1oymf1cVkNjNXPJou782AK74FMMiK",
  "key10": "35AgkeWM3PMMq5CgREfzJcpK8oxRMpFrpkrvCsvXzxz583CqNYvLZ9bDCHAhgKmLZhQPaGS9amCV9KXJFvW2duFh",
  "key11": "5RN4UBCmmHfAynJtZMENyjQLAR5sVD2t6qTzjdk1eHR3vCPHwQg9LbHHveM65uKW8nAoUcnSZMFwBJp9FbNCjpXv",
  "key12": "53JvkW3J6o3RQTiwGuHxggPrNAQgVtXBR8ncvAgbmBU4qXeMBjEfGsQ2FA8KAocBMg8XsBtkUSoHb6aku4MfTw4j",
  "key13": "5wYDQ4dqK9FmwLZGs2YLUf8bYFWcaQcFLHsFFTybCwM3wg84DZhQ46CRKgrFeu8XKfErTC4V3r7n4nXfGna7Lkhm",
  "key14": "4J9jBKU4hjWJWrFVoGKCX1gWmb5WHLmd7S42Pb5svQ6d2vpR79v9EZSf8Vrj76U3JLQ6G422am9ss9vyzkhXn7VX",
  "key15": "4iZnR4ht9qMihADqgjiH3sc8B8wEXMgnvSEpYC9HLnDv36GyJGCQuPR3P8CA34CwER6gxrk3oBnCDcaGEJb5JXdq",
  "key16": "3mRPbf9CF7rJbXkFfwpKtNngiUjgTazAzmQz4cBcmUMg61mEaWb1YdyDCsCGwQv9ZQt2C8X1bDiwxvj9b1Ka6KRQ",
  "key17": "2faJNTyV3Vz7oCCMqs5UGXFstAnbQSiSLXpyuULFQ8GdtKEbf1oBukPefe8ixzFSJZnkJhdwqybZanNbgqNuwduF",
  "key18": "4ZDVPcRr1YSaRL4W5ZjSGhD87N8kCNopA54rySMgWwHd6cc9U5pNCMMcv28LE3ETdo5HT6HyH3tewbMMefLigg7z",
  "key19": "Cn7mQ5gFtRZR5Vp966M4vwHWRaCw9xePo3z4QzguHZBYaeoDKHxY6etiBRsXenrrbFyhV3kHpyGnvDenFMANDiy",
  "key20": "3TFKX86o1Gk4uJQXo7Gp6SYPYC1nRiJAwJNk8DvUMnPJ9tR6aCv9skxBsKqFFtwrAELaopk7EF4HZJMgSfxZKcVn",
  "key21": "3qr4KaU4oBoYWzzXnMmukvF22FBaBRmQ3PfW5r5zwfeobrx8FSUA4EDHiof7n2rehj9fY7Hf4spRpqdF3FjzdDU6",
  "key22": "65i8NZYcVwEubBgG2cSDXnrno896sNNMhSH1RxnhQ8cDUosifHJSWKmquiUK1NFHHR5ENy1ifhw6dfAmEffVQmbg",
  "key23": "2DnqosmD4ZwswTG5aH8mGQKfiYXAUXJzPg5b9Mwvp4ydfdMVjexEZz29jHSXfWKZVxQtNDLQxPGo7ti552JAjJ5K",
  "key24": "2vxEkpS6Ypqbfk5XHAW7LX9fWijsGhtySL684pDDyEQXtdKaSGRVmQsjTPvoGpvcJRMgB2zRzfRkyzZLH1aqsrjc",
  "key25": "2YVmcX3n5QxUqeKXvMaCX6u5sahnumUhov44zhVjCMs8mSzpvuarS2LfFAuXu8Bkwp4aAkJ2dznnbsa8CZa4HQ7v",
  "key26": "24VXJ727yCQBJQmtEA85jJ7W3skRUiWDWRWCJ2Be5osbjDHJy5ZcfoahjpSovwApDvyvKyrgAUD3v7KpwBSuMh8w",
  "key27": "2Bc9knqu2NGribfmz4icxWfbxrJ7jjvkqTwn9obQ23rYwFUBg7RaRSuBBVBsgL3ca745R94KzrXCLuh2wCH4oLUQ",
  "key28": "5p73yt4xN57NqzYrtf6rGkqd9C4UoKizoJZsXyayccW4VMvSYdPP1gi2prhhisEYTq6d6RV4KMUzhJmRSBjfnLaf",
  "key29": "5xUPvNXDwP9vEyTj8RY3dWm5H21xMbSHX3BTFyHcHwzWtkhomd5JyxZ6WwDfdWxkEugJnW4C9SCqjJvpBk29u9WP",
  "key30": "3JKy7LBA2ogUYCVPqXrHKaiYp1snc1u121Hs21s2mAGeyWvw3jidXBtqCW2AWhQkFzBLiscQ4pmUbsMrREp9ZgwD",
  "key31": "5MyFN41nV1SWCQixstPy7AFM9peLSAV5mPZDnTkBnAcP38mjHXmciR9qe6CSn8TRNgMfnVZY5h3Qmzi1G1DHykvN",
  "key32": "Vt3yBQtTLTrfesFMwJEym5FiPbxyZwTCe3x4rZVbsSSsLk12wes2WdLRdXmQZrffc7By5kFqQ3tK2Y3qJLFLChc",
  "key33": "4FSL5khhVvaQXvdxKke9ZpoDFFYFLyRQjRi2gM28H6qnW3NaGXdv8yG2tng7P8hLv9X8NUbqojDZ1xQEuYU1LDJN",
  "key34": "2te2QX3A7vvS75M1yFp4WKqBNYp1Wtc2xVsyqpHQso7PxR4fVa9DYMPWDvVtACEkU8tDBb8XbSJkqHvQeHE4yf9w",
  "key35": "M9ZLKKTFvZ8iDTi7mzgrMWR6mWPDeYXQ99G5t4mu3ZBBZySWLm1KvFwSePNwXHsEpZ2PNPjEPgM9uiYDPQsXMEC",
  "key36": "5NEEho6rCwJGGynWpvPkY1MnGk1qX1Heii8GTUVb5Fn4pSqQMTjwj95aCGzrqM1EhmgApo2X4WaMz81tDUP4aGMQ",
  "key37": "R6iwVFsh4RDee7F9NUpqvnD4H4poEzSuBmkc5FSAtYcYB81RoFk4DZtWiTzb5Jdpw168YTf6oMpuzo9UhkdEVXv",
  "key38": "26Mgb3EQBVy52EN64KHKQTvTD7rtftDYMoh6EZ2zGEwgXp21VFJXGbwZ4ub7Cvf3P9qzhF3SVbBzyosbbha8Y4ap",
  "key39": "31SQoFypvMTDuLqAukyScxauac1fHyQgmiEuz38mKu7JhX5UHLBaqnKtTkE2ffKp3beTgG6LxvRct4nkS1LDZKJe",
  "key40": "2xe6K4gMeKjSu2DZqheftcM1xNyzPBCNHLXU7tsac8nNUuED9KTogt7gZPftoYVcKtAcPk5x8FRrAFABk7gMQetJ",
  "key41": "3acrqrPEfaQAFjYvFHMUdE7G1ERsNS88B8nQaoJwPSweA8MtdAA78kucqGaLsGD9chZp4htVXDMU3oGBpMY9Jxra",
  "key42": "zwJZcsZJ3zRicxZH2xFES92iYCoL9wfpXeAeoSU1of1HJwVC4KekizemoNw8XsawTBGDBkhaXZN1kCBJywbbb88",
  "key43": "5Qr1PFDdrAQm2nP1ubwv3xiebAJRKcyYU4B5fGfhjESByhcvfAALHv6prnuTShEQ1beHSRmKweAr419HKy9Rm7ZP"
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
