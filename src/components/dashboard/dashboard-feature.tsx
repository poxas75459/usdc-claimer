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
    "5krf7Auys3wULDrJUYni8e4EwQret6M8J9f3WBHUiNaMFsuo4ovesho9Re9UH4G5FU6Bea28m39KUsX81VqvWXds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H4GPnALZvJpUsFHsfrdNw9oSvQSk7cKZfxhvQeJEH9cF85rc3J9q7UwhKGsAAo934z5WgPz8i7moogYYnNCTHtW",
  "key1": "4SPdtgJyRUniVBLMgGyrrVdSpWqeDw9FCjg2rTCBvhA6pwyLY3ALwuAGUbJhgSeck2qDzfukPdzLWobeGA9AZ4b7",
  "key2": "321PQchBuiyYRXK74u2uUK3D419QwFT5iAemHngStBUfjLrYMY74DP57YZXJcDnWQsxP947r9NYnj1MBwZ9XCPLo",
  "key3": "3mWpciqMMWsGnrLdzC8Y4MmKLaPkb3qa6TuAEvcybWsLQknqVS5CGr8UxfhQDz4khXJcCaUz9mEsDX75xQs1bQZd",
  "key4": "4D4bLfF4Kp4hPA2KkcNMCF4CHAGjtb86gmRM7B4u6nJcbzn77vbYKCpUkmTTAPpksjmZ9XbhZaHVRYe4X2sy3Fen",
  "key5": "3pxmC8AuJXYWpiNtVSem8c5keA57ZWa6E1uoaRuPHQkzPZr8H119SyqpcoaV5Lq7fDvNkQAZK6d4ZPGo9dUi8uiR",
  "key6": "2phapozjA9HrMak5JxZ1guT95ybpSWwHiM4g2uqmdAzkhuCXeeW8Df9zTwV3iJerNFCnHgCp16K9ZoWJPCcfGcfs",
  "key7": "S5JipUnWCWdYqCdDN5BAsw4iuKgtBUdzC3GiqRK9PsJpDS4sCFfpWKk2HueNiEjz81GP42giSv7cLZFbe7KJ9U9",
  "key8": "2MWFAsbzxBTSQWzodQvH6Kq48LHH5R7pfA4VboSGZKpVuv85sQCdb1LUnuUJjGNygyR9PZvVVA5jRE8nnUTpSZTZ",
  "key9": "5wK91HNPK4kj3gQ814mqpTvE7L4uMrsRXnZBCDQvoC6LuAwtN55FPpg1Ja1XXBKmzktrPYyzaniUWsFZ2L6Nx4iH",
  "key10": "53hLn892JFhYUfVYzYypYQwqt3VHTiy54R6G9n3Wt7MFuFvpHsuWLxtJQ3aGLexjSdq5TdY1mqTVVyiHaH2LaeXe",
  "key11": "2JGDKiiyDE6czd1tvz6Pth1RgFBHUDJUWCiSrh848FLxkz78te2HKRHMxVAtWSZy7Q7R5up1RsbaBJwfRfnpq1QK",
  "key12": "5kgvAt5dX4L8G1vnuXD5y3Rw1BTPpNRJ9JeS3CYEGqtGPC4fJSW4iVE8sNKMZrQ97A475FHrEHMghsMixggQzUGb",
  "key13": "5KP9FfQ53DSdKs5zE8U4sJXcWbqtPeJuCos866wB43jWeBMnNfHW1RuhQAUU2JKYaB8cBUKDXCJqNztW6hnW8xjv",
  "key14": "5eoWeTykJjfd2ZLwnGkLoRVs4LTKCGM7s7S4u6eqY8h2j7W1emsiGoq7kbySNewaxfBE4Ye1JvwHsHoaBqmsAQHy",
  "key15": "2Svf1fxyHJeCwfUcDmY1TutWx622WKvUZa475psiQkQftGnMKo4M1GNX6oWw15SXmWJpo6kBM4AQ2nfpSmX4x5aM",
  "key16": "448WskFjL2xfV6v5J1ZHSC2bXxugBV3hmrdnqYEJiRWuAD4CRVATyxu97KNVDdiv9Hb1VFwJPN5R3q1LHufFW8XP",
  "key17": "GK3EhHLZapqUWEPpTMxqRQM5prDcDos9RwxbsajM8vAXEDCPxgEGTvFm7DXALiMwh76fQHzFyTYZobFhcUk2gzU",
  "key18": "37GxieP5CaoSP5HGRxUzdCS1Xjn1bryTbyNdTJFRLjFu2kn6qgrhrDKLhjNHtETiNv9JpbsmwEWweRWTqcQDqAwM",
  "key19": "3TgLhvYZTbjB7773HAB8xZqoYRvojs3SeqDVnoTQ8pTVsFA9LjmbpNpTgxFH69atvRqG8s58thB5xRkMA7Ye6A1s",
  "key20": "4SRPD1dPYzGZYnJ2rYx9Eid98FvrYXJJn1CZVq4jR4e7hkJB2D1jnm3Qo5fq5De6Hze6FNxHfr8YtjWmYm9NwayY",
  "key21": "HnsdYDQ1muQjSwHZFXaN2JXjhSM9cf44P9k181afLjuKQ2B9i1H1GVt28sxKFBkqt4mfvHrquFeErKkyxqQVK2x",
  "key22": "5Jjabz1Bv2JgvjkoctsueMCVtRLS9cczeGPBPrQChdG3sUtekRyvBnUD21Bp6piPkHtxgzdTQZsvJDTsX5yJDZsa",
  "key23": "3M18WrKrGFhVn9QmQggAoyYEb1pb1qvHGFpJtHkNK7K82ZLWRAUo5H6D68Bm6roCBf8wLdcLJPY7aUeUwXsruvY5",
  "key24": "2sD8V1cdxZpg3Ep8HBLifpDsStMcwh3yNLMd5gq2CZUh3ZLpzZcVG1MDSUvriEazTvY6Ra7vjZUoA5pKqguNaCMC",
  "key25": "5542xvhWqyoeQaBn48gWnZuApj3D7zjTEKi2T561ipre5zrpcf1RKmTWiEY9tYuaFPXZaYjwarhnDV87teSWTSfB",
  "key26": "s6vrWuMYvXrhkqw1xSqb5sonHoHspS7BXd2BBkVzfe2J8s2FkrhUCKN4bJ9w2M7nLrbVzxjj8kVXwS5VJoRokmz",
  "key27": "337xcLL1Kmk8TD2t2A7zE3RqjZuvwwY8edigf6bA3nczoHFEmY7gSeveJ4W714pv73SmnH5MhqauCawRwPx4Ytrf",
  "key28": "Yv4UU6N3oe1TEM5mn6KcfzURM2y61jTb3Vo9ad5gW3kcW73LnYVfqyPEgjVWwCdA9wLk2DJkE7TB8iVRJ3YPbna",
  "key29": "4uNDuX28EXsvmqQM3q8moGo44bdSsLoR3zCrkiPBMSBL5tENCPcFmuMMLWCcwanGJ7KDZ8SMto2AtPYqbVvg7B4L",
  "key30": "3SjVG79X45dBfyS5NHx6NZGWWtZEEZmd1c9osywn4Ch6Vn867LngPKrPdBDahmNegKRHanGEosSv43zodfuHLihG",
  "key31": "5Xg8AXmd77bfYUL2qyzqbXEVcYsBFRiPoJ5ioBoa5S9ZzAgduAHjrwKdsbhmvHm8dvruRUfgWCm9KAnGXEhAiirY",
  "key32": "5QhLyQCwCLNYgXJpxqaYZEwBrJjnKUBd7F7dg9xuQhhfxCFRvUe5tNkNRBnYZ5d5FLK4kBWroYcEfXzWiNEzoNCV",
  "key33": "xYfyPY4qdgk6xxwYgk3N7RQebvWMwGkrRjhPia14jeAFaBSjoKjNVeMkiy5WyYdzSw1S4RqnJEuhNKvscoVKEUn",
  "key34": "4gd89F85qt2FdJpDKQZ1SCgx73R6AacoxMZ74TLthUbpckqVsZmGrhh23fcXrXcrbTqQkdmBnPGnaffgknGkwuJk",
  "key35": "4VAFNdFtXoj6muRiJcyfvDjSscbuwGgYVrLcBn1n9wkGrKFR55S9iP4u2ACTH9WmQ8kKdjxt51fsb2pARsjpS3sH",
  "key36": "467RS7WmmngMfjvHhcgT1QKb52NuLGPuY8RbSqptzeftPtMLmwN1e41o9HKcddKzK1CpALEZ8C3rS5kzhemFnAec"
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
