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
    "3PSyaBPtGPHD36oH3X4wFHVm3Z9BBn7v4Ji6jfievqNtcYCoQfwTgKG6jJG2bv4HmbTfHxbc6YaV3ohqBzpfLugT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29uThdf1LJyjFf37Xo77DDpjb1NKuL3Fn3yo53VjiNAoECVyC98BPhYRSSMSEUGLU6STeupeEmAAywyscGKYK15o",
  "key1": "3zurBK2gHrSrWaSx3w9BS44PXGF42NcjtUvmmC2D18tRgqrRgSs6JwoSVWekpm2RBfGpAH7W5vqAhFPParymKsJ7",
  "key2": "1zJiwpPe1bG8bDP9Aw2jUeYjcachUwSmYiyjJkMh6KKZ4Vz6ty6k9MyadabSUXQhErSZzS6PznLmuymyTy5EGd5",
  "key3": "3QbsFJonuBDiZx3VtzDz7GGKMEc9bjWm4pbqGd1vJH9m37ch44hvNqA1JwxUVh1gPWc35YHtMCsSmMZq4zTbLwYD",
  "key4": "56epCuTAaECGkQihmH1n6VV3wV6gW8muRrJyWuHwGRKAM1DGkjBpa1NXZ1DR4hU284XUMcxgjLMUhBVBHbw3Jhcb",
  "key5": "31mMXaSKZpLyhSJBfhQHkxZ4tprR6oBBxp5GMdE2LMqvBsoXcuNDMaJx9ZqxuKBbWAZE8Dz4z4k1UP5NKGhWErVC",
  "key6": "kthwtQxAf5nXypv2svnTpQ26EVowDezqsVShDgUEMyVRnvPpfnjw9tWsnBpiwggLYBrdfuHj37meHJcXGTs1QB9",
  "key7": "2BAfD5RP5YjhAqt9hN2mKdzwX4ryrcEwLruTYLWQmzT3sfRvBGYRyJq8hYtDUTNpwzHvEPGiv3MfpUQJwbEVS787",
  "key8": "3NsfCYDnwQFLKWxt5Y54mqRkeFXdDqFaeeTJvzCbJfEbRv37rSiXbB5ypTj9MGv5H4Q24Q6YHqiPd5ri8tjMdR88",
  "key9": "57ibBKGkveaPDxYNRLxUsprUs93p1E5a6rxcTm6pKs6P7SeQ1Uam5mx3UYr2rrfAneng4T9XuDq2hRZFqKu7BZvk",
  "key10": "4ib1iQTWpkwZqGEGLiozfNgwVq1RWyAYn6CCJAp1BPbTGApDuTUAoDgpuP2RRvD9Ld6theMoRWE2vZ3BNdCxaTmj",
  "key11": "4nFkdj6xZJu4wdVyriQy81yZ5UoBJ66TAzUzUYscqoXLUFrK3WiZJcG2X1dCA2RPYmXWKahtyZDdZVZPsaVikLqG",
  "key12": "5TroyuyU9qYP1Y8MmjEZfx3yiM4z5KFETXiW7Yw2QqtguE8hK34T1Mi6qiAjoFx15HfVmQgVw7hsatHoP2raghM1",
  "key13": "dhWEwGLcT4Kvh1UPiPgKQbt4i3MwkfGnsMDAy8AgaPu7qXnALNQ5uz74gq5BA9TtAzeMeLMnuYdRjBm8Po5Jgjq",
  "key14": "2kbsri4GPyz5iDEXJ5MRsGK1STuweRnZKbwNESc2kz636bWNw31hGxwSkLgfXtxvjfSDyu1UoYEiX4gQzNmbT6RY",
  "key15": "3f6zjD3yyfHMRQv1V7zjkGQ8TxKoMn9FbHL6ekhsvus8kVZhd1q9376f1RXmYkrXmX5KNtNjDrw3KRp2c2ET5Uux",
  "key16": "357WcyvzHM7ni8JYS4BdzJ7Ji2KgxcJ2pgDTryiRYYEn3kP7yp3PKPzJt1FriHVW4KXykDWHdoGqeuyzxfspKs5C",
  "key17": "MPdYcisFAJjwKZjxAmeDZ5uN7SxBmFShKY1D2r4EVbc1yGWUtHqQWQZemxaCcp4nmTXq1rLWKfYT7y2ZQXL4gZi",
  "key18": "5hEYw9SnS4p2BHFQGfpxEJqJkvNswtf6QP9W26PVgAM9vnoR9Kb5oeyocFzxhoXgspCbFn9FXCJ93CQyvv2sytiD",
  "key19": "5e9RA3e7jFf7L3DEA6cNMuC4eVzzSuzYCJTUwkjL3N55Xabm3vecnxuE9DD33xGWQ2DcfNmAxPi294AtahmweMfo",
  "key20": "5g9ebCLVn5TC9HWvhWJVZKns1KaiX5k7R5eaExLEWmMQRzYh98KXKAKAza4fuXenj9gXzR1hqqigA64TSJ55iSow",
  "key21": "RiyLbVu2cTLWPVuRhnVHzigtHkccNniAKdq97rKyjMv9EZF2CJ6AZ2dLe25iCT4sfnSJ8oR5niJyQWur8wdRaHc",
  "key22": "3XPebihzU6JBN6MagCcb8GM2mRpkuzDvao2jU8MYnvReXdWyHL3qVdbYbCLHm4cEvznN8Q9Ud1RiznqEQpHHKoSF",
  "key23": "3cvW23nkuVinS1DoQYQAGjYbpTkGd97apZT7MVxCvs1ovEHKxKMN8uH6vaWygrkxWCXpHK7H74WvBkRYBR8Cozgk",
  "key24": "2gXTFQfeAQYgUNQDL9V5xBHtFSStQnBgtjdxuJzsC5JrGkJse4veApWR2pPBLv359M4wyBB8RqM8msLu5mGb4dsp",
  "key25": "5DFeD6NxNAp1DBY2qCKqjCYSkJw599B5Kz1qUd9FwGNVosJXzYakEvhrGgZKNq7dYTq6DanfSTtQrBXv9Yg8aKxr",
  "key26": "3PEnL6T2NRniwGidpDkJabwVXmb3uZXp7q6GwNxn9fCBCEBVa8vgVJJbUru9aNWagrMS4ZNpwAVBsHRBGzXudeEN",
  "key27": "2yEZiMB7VBTwvh3g3nzAmj15WdH2Ce7iTerTqfyNK3acKfpE6s7ZUx4wudhir4TQW3M11JJv9aeXTzMSAX1qdGfY",
  "key28": "5ENQXvGmhj82LBubAFcWVgKbDiyyWyGYbpHAYKC4HkCQF6Bv36YeUEdMvAZ8g97hYSgDrK9QpWqUXMVabkda6mYF",
  "key29": "YFHUr8FPBTJ8W4ttfRtWC9j6PmncRqzwSCxjQBESf5BCdi95D8mfFDvCcV4kzqvcwV4gyQQoTX5iQsnKiKb7Qk7",
  "key30": "2urio5d4GNqLYbn9B5FA6n5iSA7Hvxw1cxfR7fDmfZ4WVRFHhF61jv6zDvLHPKjH4smd63xsEfvx8i43KyeUAocx",
  "key31": "2gMqSXazF8gZ2fBXNnpaRiGxs2bt7M8h673pakJFmRkSQ35DYubeqFS4PqEK6zJRZbYC2vgdSsG32xtXi9pYyKeK",
  "key32": "4Qa79mXhCRUSQHimiBTjkDDtA6U9KoYUp67ki8YatDijr5XxVGZy1HyQ3J4HjPYW8QMRneNcbty2N3AaYiVjWeDo",
  "key33": "Gfimh4CNeRokHUwAeMpmApQCe6VcH62T7VuN6pPBozPDjiY77uBqaUJFnNpjWtsR5SrtbFWeheX8TKmCbKtGFKG",
  "key34": "5CTDj6j7sQWRsdRjqFbQBAMFK83Cf4g1ru45AX4FfeZ7Z5dGg8kx94fe1dsD9VH1VcNpjLhBF3ZtxQ4ujZqoGUMQ",
  "key35": "5ib297FHPuk1yLC3fXkAymATei9u2o5Vj9HMJR89MDK69YFQgHEnLyqL5Qx1aNg1r5AxpHuXZKFWBTAJMVKsu1mj",
  "key36": "auUPJYn4moNx9FuWPPHq6ZqCmDifNLwvkprdS5mb3W1nkMA2uep3qxh4PPHbmkdbRPbnwT6s4uEbstHLSThjeSW",
  "key37": "2WMf3BLHwVmnsF6TE9bZQA9oCyjPT6zKoz7GxVDhvXkpvBRxMK8Xf62hsJS9sNV4od856cSFishW2UEqdg1nfKYv",
  "key38": "4iXTF3sxmcHrwMD31PsZkhgfYj3pUnir39waXowhrKrjBz9qAm3c3MBmTo6JiJsUkRgdaVk55dbyyHy7GtHwUKrb",
  "key39": "cX5D5f4cxK2CNWKNpXfKWiqTncVbWjAtuoq928J5dD9N1MYrJuvTMcVt1vkg4SBNRFBbEUnoZ7gbzsCbGRgtEtM",
  "key40": "52mp5Y9bbUCxb2oBDJJFcorbh8LEVKP8JR7qpY4KyYgGuLKjegCnhwbS3hewYcsUnAwwMej3AzjfdLmuJRbwApao",
  "key41": "2G1iYTj3dcXs5wxoa6RLrQT6quZ2zj3BfSWZ1SdDHDWoQBw6AWWXhNTWQ8378Pc9QtQA1K71jpcv9SnWhb58H36L",
  "key42": "4UK3M1JM6mJC32aNbbeFnXUZe1VAQoCCz8232eecYo8Rz8g2ou5j5KFjgZ3RWmoP6TDL49B2dfN7j9iV55czScoB",
  "key43": "5m5qvJ2Qrmq7kKefWtQKbTcaFq4uknshinV4Vs6F4s3qZdi3FkQ9ynG9gyKXcD5TTcXGUBZjcys3KEY8WySCT9YL",
  "key44": "669gJvJpT4H9V7JTS2sJV2M4N64MGVtczdGWRQzanKWymVpb5R9XoLVDEEsEt4DWzFZgtFncQuV9BM7zHauwazb9",
  "key45": "4Sc3fbohGsy9zHAo9qdec1YjvJZWuuXeczNbytNTHacK9dY5hwzEJdk4d6r5gcHfoAcGeNPZC9P1PDUkWd17C3oz",
  "key46": "4fFPKuQAeUcVHeMjH47XiWqvTbK5ciiu6etRSZTnHgSi6eaf18kSY2VC2VmE4yqLk2Wa9wghVLxk5prCAqMFFzhm",
  "key47": "3QehDsoh4kD8gC3M2EpMLj25qUXGw4M9g28JU7m2ZSj1o9hVsj4hBX1HdvJd6anBN4Z85h7JKpv4hNkJUnUeRJWd",
  "key48": "45N8NhqN3opJvrN66hTbeBiFYWTWCxtfU6NuDY13WXeCTs21TtSAU6Jqp9cmJQNeT4DRCzz7wjHJ1Wy43r4aJPpe"
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
