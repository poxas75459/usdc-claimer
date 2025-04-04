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
    "3qPXPHU4Jfwt7GRyfEBBqN2neum12mNBML7MeRK7w24UmkwpW1qMwppg5pVecuc6LYXWG5QPwgaKhv8gYZg87uPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CttPrK67s6Zo1Tu86GMXxNyTUcqWooFF8hiLMB3BEHkRzm3FmzvrpRshwvuHv11fTPCPhxmh8mZCRzj6sb5WGgR",
  "key1": "o5jrrJ1f4dFeX8beeRaPDfVgwtZQSQwcqBbRdjndFwDZ5vRjq7MpUs4GZ39qZ8QdDN67R6cY7BKLjGve4HsqK7g",
  "key2": "2xvELtW1thwnG3v6V2dwhzuJtwvdHZeb4W2TQiUNoB8izHwy8CexWAgpWpU8jt26DBPzj1bG6k5m4pvnvgCo3pug",
  "key3": "2XSarTFUGdU8exwvh7524v7qZZKi1LMCw6cHRYK3zvnNKVmwjsAa8cAyXf5xYUjfSxyf2aTTYCFW641cvwtxs78g",
  "key4": "448G6kwu8n1CrozHP9LfXTMBdCYMYrM64V4CLyvPRKHDMmFEDomFBk7vnptTsc3Xc7wkAjtJ2g5fE7vtWtQ2qARM",
  "key5": "3wZZJCrLLYABg2YKUTLd3CQPCTDCDViUQfhwdmqoYTay9jjYxeNkZndTQ4htHvJUaksbXgr8EDhtfwConAwb49Fb",
  "key6": "Xic37N79oe5iU2ZXCuQBmS32JiczqA66HKdWxCymtcdcH96FUnESED9zcDFFcxLGtsyegQpqnF94CTrcAfQRZ1c",
  "key7": "4HRErSNL1C6nrDcxzcVwTWeiWqdMqCA2KznDfMPXdSHfpFQoxa9ihihp7qrZgh6nRwKFrTAZnztGHKwHP1vpL8VG",
  "key8": "58Ud9Mga5N3gnLFAo5zRg8dKQ5o6W2c1h9pE9dQvYoRdpM4TXM2KNE7ZSpoHBbaaExgqD3sySPuUs1pgpCM9oVR1",
  "key9": "2d8t7YAiBwFNQ6pPzts3EbJpUgazZqvgkDjgJWGw5cipD5t3dRtys7CpRnZodXs5rKa4DCD1re5Rqw66DZwaW9UC",
  "key10": "5ELndexDmvdZxinigRmxU5rDYVJ2LiLyDxByFkLBxiA2aZsKr7fNwCchMTfS52KStRa3JhrZNMoYihYdP9Z3Df7f",
  "key11": "26TZ2qrMuhfTZb4Tbdzb3f35N3QQ5ATLsN6ZuRWAQYBhAnuLbmJYRwkTwYb2cYqNKDXtP8diQjueXbCgkRm2ETKi",
  "key12": "54z42BRAiD994oPR46WkoKogjahfVLek2LfoNpHWyHHwDRKJr6K7yKbgUb7kQyQ9SELhP5ArCrKAtr7TtACR7Ds",
  "key13": "2sgfwp69DhQFBEeKXNxKKpNtzUHzZLAgQbVLcYnnz69KRMV9jkfyFjCa2YP7fSYxtnfZ2iUtLyhgyx4dhLsYrjLH",
  "key14": "2PdAYaKW5YdHG7bTy5zEG4cpq5b5oCqMtx4kimZG2Zmzebb2rbNLSDY3JHgVfR7jwHoTbTUhEF1Kixc3SsTp6r4R",
  "key15": "63YfZD5Pnxpq4E77GocbDwZszgAQEhiAtJnUd5AhP8mx3iy8WYQeZzmG3Qcq1FU9nwf6e18VFVNhFQRr8pJVGQea",
  "key16": "5tR3tfx1axfzTrdc9NcS3TPiQktSq3wJ6dNetrUc3jW812PVZQk3XqbaoCJ1LAHxaDwKqsrErg2qV3bmBaUnTCiA",
  "key17": "2gbBmX4q9JUz7sabHmmt84owXPg54MGn1UPQGuSbn1pJqCJ5j4hRpie6sbsk6FXrV63jrt3poY4Xna1ZXRznNKMx",
  "key18": "4Yf5WkCVsDgN9igKi7Ev4xeEhFKNtQLYHaKbXVTxsMATusGJwFqEYAcgHrnWBMucUBJaBqQ2em2z3WEjCK6uazqx",
  "key19": "3m94e5mVJUS2ufdrMboTtLekqQh56wHQbvNsa9jFVMpQDUqgHs3qkG1Qk1xYzxhjzaup4w1bwgTKYTcZc8yQttAz",
  "key20": "31BzXegWMZXZVfvDhP2vXqn2YqEFwJ7JJB9HmzV3D7skSjPQX2Af6Fshwr3TCVfdt9tnERfEEYjHYfoVATLbchGi",
  "key21": "kYhV5tCBGSAaxKto8TQUmJWC482nncj8TDSVChqgHR7tLqYmNWQ9FVFtWrqNrHqKGPNLFRNiD8hFey7ypp3FuHS",
  "key22": "TEwdTrtbuxbG9Wqr8GbUycqiUbiDjjEydzuyKkf4A1frF8VrA4hgwwTp4SJp9QSX59gH8htzDyx1jqpipJr1U3y",
  "key23": "4N32Fd8rNCSXKYYakYPKTkuUgtjCKsi8Zsu37WjuPHAqimVwq7mfaGSfn2LqNZti81mJvzeNZLUf4WgU9tuJ9QX5",
  "key24": "5LeqWZorghsbCFGF4K5ri2nTiaCh4bQYWtWWJi3hBghb55rrayDtURYToyKWeifGF39oc9SP4X3ia1DpQkB5k5cV",
  "key25": "AMAGy5tT6DwzLxmom3mfSX7FgK1Wf7JKanmJLaERDuab2CNeJJEqZ25LxcJpVAuTw5n3kvemap4LUwMVKwaKJAE",
  "key26": "3UBECjDfuHW36XbTniNzQS184q73LpAVh4HNpo9MrHbtHSkF3ENbNPFbP4UPtY6RWo3VfgS4ZjpkxFsP9bfinQUs",
  "key27": "2wJXLSuMEvxzWnxASyUwQ8H8WXXY3PHw91jazXXAoC7nNDRvJQaNYgfmDzar1mZjmAhcHAL3JkAES3Dg1PsyhLDV",
  "key28": "3qLTXDThuXC7oi4mWazsUyknpbR2jE8p2tTqxtCEPpcD8fXuz4ViXKyA9LckDzBezxXED9BW2gzLnDrFbNrb9sbW",
  "key29": "A7XLk1gSm2BEQA3j5LAMzrH62aLXViA6D8RuNWX6g2UUZXAjh6bFYDpmrSzWKMmVkPXSf6mn1HddEVSu65Fvc8b",
  "key30": "P4CJjtbPK197NiLyXJx5mFJKgxBipJH9AS3tcTFE1UkonvBB9xzfxTR3TW5aUCwndMb5fWGFkv3FfXJmt1n7svf",
  "key31": "5Cej7gWvcp6Dt5auSw9S76ZEF4SEm7UgmN6QmTYMHybwAQEK8GUzbRKPmfmkvggVJNm6WfqykNyRJU5Bkjki2nni"
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
