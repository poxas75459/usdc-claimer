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
    "5ahe5siF91dxuwSZS7uYguV2EDbqN8wSpQ5aDXoQtoQHKeiSWYZh8zuxLj1YRdgUfy9vgq6Hd3tehkFfSuaSQN9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gw9rs7YHkyRZCucPcyrnrJAL5yB8twYcKzgszTFcidGFi8aRisT38DgDWUBvLCXTMu1E1z73GYPnyNHvanBgx8z",
  "key1": "4y3ueXZExVDck71xZ8aiwpHxgidboM716MySYkY7ByfZJfNZktTQbonf37rTBCg1136h1iLrktbVRs9gsE11GE6w",
  "key2": "QWrY6ZfikpJRKGvL7MJubKuDioAnbEyYFhw3AwhW5xHsHynT4buwCSsBHWqedZkDxAwNGTVweMNjR1PNg9LHZrc",
  "key3": "dYVqSqZ6TT3isj4sk9vVmiL4ztRzzcTLY4ayLvc1QTv32uASbFsAnJNoZgo1WR89po2C5ADfgNx14WqFSXTMvpg",
  "key4": "22DYfbRbR58iDbtGf7TjRp9JcCPSqfdBijJQsXiagkQmdPBNqXT4HAgSSmVPPhmVVnt94ywWKkvJsjM6vdeMQHDF",
  "key5": "3RvuuctADUPkAxWnTbgBuSzMoVgZp3aSJCo9mPuw8gYdg3TKeqaFQGF9W1mxS84236w4ftPJZtjGHPW6i8RXPd9d",
  "key6": "2QGrYFR5ScsdhpFoaCLy8ycB4tJeskydVZim6VZdxNSXroXKq4fFzsCvekyJWxwpS2BMhQFabzcTeNy6xLYfbgHN",
  "key7": "3bCvytsGFVb5J2aanFLMqZ7wNMqMMM2MUQSuLynyH7p95S8V1cTTsw42hUwRCLVAWZUqn9XydzNxV8qXQx44HiG7",
  "key8": "5VFBDtcYWrKzCd93y2WYh2V1tC45oAEn88SpbuWwa2Y7VGtRKt2frfBvmZ9YtCVFRbbsoA7uZchqVvx5EgxFkocY",
  "key9": "3hdDQyeaj9sdArk5mQX4VNBrRksn6Stpp7o9j4X5W6n5Ew9c2tG6yZKpjSxtLgSMaKKsbtfeqdfbCdVtTk3GcDyK",
  "key10": "5ApRbZzs7Je7D1sXqe6dNTJVKeBG5h56XJJTkhBoaDPw8B5onriVoSDygdicyDE29tCEN6my6WMYJ6DTLqMGfHDf",
  "key11": "2cHKKJH1fCaPGqYKaJGeaB41XpHxSjj8mxjrVjZnt9RYmQkhLc8exeoxNc3VPowARhyhsY3sawCH4PSf7KaPtZH7",
  "key12": "4rZGjTKhHUcYdiNNckWM9QdCEW1QoCFtrqdc77eJPxDxdCrz3teGHtbs5mGoiv3x47oqVkXM8T6tQvuHdZzVNLFh",
  "key13": "5HedTEwLyR4W55RAmqESWEBoz4x1QnzDui9PYqoVqCkvguENaTviwmE4Eo14ApVJHhczQfSXoLhBjci1shNQQb7n",
  "key14": "2NWhs3YhdDhXMrTCx2ZfYFq62JSTgHUG7HSnh7JUGijsuCDZxjWbpBJ1TkYLvPCeik778XNSjjYEqrxVq6ufdSGy",
  "key15": "jSfKbaq9MnvPq5yuB4Mx7ohnp4pDbrE4ARZLmfAvbyZtEVM3ETaGELtrFr5wzSPXhW1KdL76t7ZoAMBEZKoqZhT",
  "key16": "tPrnCQMM7KwDrVAZgvL5KgbNFP7Ae6Y1gdyzevCMibRRuJZ8YLmPYnTUPyW8QbhNFTVQZCEJhza5t2qfbP3ryT2",
  "key17": "4d7xzGZEaZHV6ZiMscyob1cSSd4E3dQ6V2rhPX5fur5WGafNuiysrgZjFyXSLcdtjpc53Dyvx5VLrRc11s3fg3yH",
  "key18": "2nfrcesUqnBCWGPumcRVCgAYaYGAqmwJGJAVbosz2cxT9qWNytQbhYpaPkyqtB8JbEREGkLt5yf9uw8yvLSWw1xc",
  "key19": "4GMKW9bXscEWVaL4Ts7eDhULUU5napxd4van4hzGUaU4XZN43vBpkqskTsSwG8NBaFL232MeASKiWQrizCRsZAvE",
  "key20": "4dJwgzfWmh6WpswcjRYGxSfwiLrtt9p4Q2VzBdvFaHbDJJjGf6sSaeHEBjFfHNEzkYVunoDu7i25cyZw6gRjc6LY",
  "key21": "4FkogCTGzXQtAHMxU8xRWdr3ML8pkEDTy7UtQ9YKaD8QmBvXTrJNEcAVD3jRvYNEyxWVnguDzUYgjhFiEzFihAUr",
  "key22": "4rHZzZQVyS2xrekmupvQErACvfV5mR9vBGXDgCP1SSf5hUxy2ypsnQc9XJxE723955jx6xDbc5KC1FuGBGnHF72P",
  "key23": "5NCQv722JU4MwECRvQ2rtKQLcAN6tbCLGjVNy4d9xoZKJPXEM5iaGsrHTJJPBKBFUXZ3Q8KTXeUtLoFGbCx9JKuD",
  "key24": "9xsa2n6ba7Th5e445aE1PoAyMAm6WN7kwihwK2z3AV38qtUtg75j7dfvXmnt9A8qzJaxiTT5y6Qi6XYGSoa9xnh",
  "key25": "3qX6fTEHh6Rbxi3FtCpQLueVzgzh4FCbhR2xuFUTFfL9WzGZeBXhJ3m3gbTzXtfWSmyBDT6EgQfFF9ZsXR8vnbYs",
  "key26": "3t1rYiQ1qsJ7uTGop1TcE7h91HoKRVN5MpmxPaqTVDF8n7QjU494ZzA67md1Z5cdBvPhHc6PJyoK2Z6A94A2TE2h"
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
