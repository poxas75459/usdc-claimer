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
    "3bfJAGbhPPS8UvjXVq5Z6WU4pXw6sHfmWoCg2MoZevscUYXZcGVZuSqUq4i2o9vbUaTj9PZnNyxSSoDWuyf8cQ75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HnGANPa9GnSCo5iGcr261s46DmAMjM7bBbMtLmjkkRfSxfWa7u5utY1RF3H1LnwJQTv3A9hvpzG3HJUETD3YUk1",
  "key1": "4BtzvF5NbP9AEmwzHWLkzMA6kFu7GiaJKb9Msj6tvqWTBg1umDb7YMGSmhQgNTJKMyhwR7iW9vx7iyK6S3qyfUnD",
  "key2": "3RVD2cNbGcXJd92beBDzqpH36TUcSEN1GsH1QPEpPsbVurvZF6UmckPeWv71G3Ew8YdxX8P8XUQzDUqEtAWSQk2V",
  "key3": "2i4bis8kEcesWLXt8YANT4GNEyhm3KW7U7g7Dt7gcsUyKQpgW7xfkWSKujAMYovKUKmGLUbr7ZxvLk9WBA3cUn5K",
  "key4": "3AdWWondFxWCEyeJDhz8ENk921yd8MNBzHNmpj5BrMmVV4ykCagTjVRA3HDqR8JcqysSJk9u57iiejUz5JgkFri5",
  "key5": "5LrnYfaxaCdSVb1JwxWCdnSrCoqE5wLHJk6fTB4bG3pDcCgVCxoUuTWaxQBfS1EuATm7r8qYRg6hmHrHNGWe2TvR",
  "key6": "42nsnYX8g62xBuFgsxx87Bw3aRgkZvcmmnohNUV5mmieMoXUgFWkyjLmJ476evjCGUrD4o4vzQ5cFV4hmsqGSvc5",
  "key7": "29ohCV47QGu2ufK4FcJxBz4suTEF9FmMrA8xacrifZo9UQ224NoBvaf1nw24uEMhCmHJvR558Ymd56HXnznmgpQb",
  "key8": "4Bp4oxrnLCJwuNEKqMgaEYi5y5gyKA2wygABbkfHjrshVyoRknZ9CQGCamH8hUasJ8xU5nos7xFNew5nCzbZAiR9",
  "key9": "2bhEe3Maq59GdQF1isp5bLB9KvnpZ4ATqBZFs1gbNuYidjNXuDTum6d5aEf5RkLHvSuAVYVwiiwiQMTGFCuAn33E",
  "key10": "4kaY7e7XPG9dGuuFGYcQFHx5HQQ45zrSkFtsZCzrcbUP4NvANWSJbx1Qmtb5mgxk3hAGY5AFt2HiDycmTmEx4CFt",
  "key11": "5NQ7eDrq1snGxLTC9daH2QGvnGBsvEsBLzGgfMQ71kh4rynBP5bE3WbCZuL35RvxDzZ2JEKFWo6uZB17KCw21ihf",
  "key12": "nMnDDryCGFit1NATzfGU3oLqS8kaoR66bTMFboXEdubuEHuoscju3N9QgHBzwLykN9egtQ8XM6Ffh1j7XEH3jzv",
  "key13": "2MPdNFqBwWGubhBSPWTUj2hh5W11VNwXcbBP3H5uTZHENpgXfDkJbFESaCe9W1XEN8iSRUHoqqNGXpWRbipkiCHV",
  "key14": "2skuNWgLpmpjSaRX3e3LWxnx1N2moi97YBL645KvQ4t6mUrPGSeUq3AzFuqcM4kErvg1wx42YEQTd1RRSBKLs8Er",
  "key15": "5Aw1UvUYix89S8iSvPVY9er2TmuDrv7zJ6t9VMMKHBqznaMgHyHxu3nnJzUSEnE5Wq3TMi1PAK2UqVd81HAotibB",
  "key16": "5TyVqgj7nbDaeX9MjcqAZSy1p7ELPTQA8idyaDrciCfwTGfuEK8AdcTtiXEu7CDtzrsg8JUi1DJ1cYTuvkYJFVUm",
  "key17": "3FgyQ52pnB7DKJeSWJhM8hExnPML8a9QZnZHUsHvD1sP4CsMNnCyAeFX6faN74Ke46vYSy96JKdAmEkJC43dZows",
  "key18": "3onmtfDTwBmPpxHpkY315BjYEmHvDS432QXnxKthSDu8HMGq1LZ6Aqgi7bjZCac6QFRjS6x8fZd3SKku5SYBDu3R",
  "key19": "3qbUq2B3dJ3UsYTPxKNFTEP12sqL9qjA7y9KFGenpxvhTUv2hx9zSanHmDeCB4wrZZC97oDWGajA85kmo3eiUive",
  "key20": "285CgCRdXwq4JANqPhm57PgzCgkdNHKz5YexwkoqCweu7f5xdMBB4wawqk6bGxx51MCnRWqQ4YamgLrnKd6Ze39L",
  "key21": "3xpF7Nb3VP9AVbbTB3Lr6YrEpCkLPiDoHj5dwWyxqCXrUswcvu7GB32JFMhReWnjqktyD2gST7WMDGPSWt4LBGiL",
  "key22": "u4KSZAt6GriUuHugbbQTWx8DHLk2AcQKVWJpQctoZKJVyya91vfgrsafNDNDpW6jaMbQVitXoc5ECgzknZd3EsG",
  "key23": "4otjZrw2Xs5AFXUtKYi7w1MoWBZzn2Ek3oYD1U4rNnAK73YFpA7Lur8XZS4NCKPY6LgQvuenwh34Pk8jFJWTrXJu",
  "key24": "3sgFkNv4xfVMC9cqGjyfXYwGEDZRYXK7FwE18SNGyqQAk8sy3RksPrrdZekZXAp2mGQynmUszV5QZJEkrj5vVvzt",
  "key25": "3A24TbKw4HeeGUHqa6AL56Nsr67qQLxrwRLNbCKxbNumLUBreHP7WWC3sS2fRg2mzeRa8gY4rN6Kmaot3WR4f2a1",
  "key26": "MLwqXqFgUGgyWUjLr6s6y3K2m3wBmnB9Hp4rUqKeYMdytgQDc1hV6CgL624f2k4F5hSQ7ffHNAj1PbUrXEgGp13",
  "key27": "5AJMLYPC4W4CuwbmyqHddjv2JRaE5JbpXy5AnWnVQhDb3oV85jG9sFjktgpxtwepfqNgVBuebHXrLKGJ8iyGuYZX",
  "key28": "icNSTSWbPft7gQTHjuc9Hb2xCR8m2UZ8VpDugrQ51WoQR88qy6S9HZbyLtrjTbwZLLMhRyZEkkgydyGZkenM9ou"
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
