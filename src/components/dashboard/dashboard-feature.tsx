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
    "3W4PnMA4SHDFKfuwvUAZfuW9PdWzn9FsLyncRnn3xC2ct6z4mky5QTgaFcp6voa27PSwesfWAc5KJrRnTbGBySxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21mHXGw4bRdtDkK86t9uwUD3A3VQHFS7FmZHUE88YcQ5YD5Q5aWyTW359iWkeyCf71LY8tMDGd39FXYVDSff3oKi",
  "key1": "5wGUDewZp9WBaejLSh3apWEdgLErUff9NHBYB9wqkd2KLrGm5nAtPRHHdhB1qXMf9RLp2nJYjqv59auP5aUNfCrt",
  "key2": "2AuHeuFDDGSXqoAXLdSzcKgayEpRJW3qRaodwhEtazWVgoa9An62nGgX36Xdx7ALC8iTF18PtGmvwy24m59sQ7F4",
  "key3": "3HfbSoSpHhLrbi3oG8h3VchjrAxBS31h8aNu8gDJk1PetaFk4MryPbKBKAtQwE2GiC2wed5dGmvUaTwhvgSNThjh",
  "key4": "5pqsAxVv9GxV81U3P9BoYKX6yYobn19gP8nprdHCgHFUjoVjCu9f51tmbyuvg5e4acg6XQUqCx8GH7CZgEqcNE4n",
  "key5": "2bPLkCjrCdEwVkEUHkA1veepyhUSWdTgKWBiHoQfwnPf88AUQaXk5D1GiMgrss43aHhC5FiPjS4dnonR3qX2J6Yy",
  "key6": "53Pzo4xDwdRRjJjeuvmdZHzALZoTV7nj867dnnhi3R2NRktis5Swb9XuXYPTZu6VSFzqkDgnb3zPmnehkZj9Ztp4",
  "key7": "2tLcazY7fZfHZEGHffCu3KDNLZFWAeVUbSe1HAZKXC4tsdhgwVnH4w7t4GuJjfsa7A2taNRcHmrcSXpgYdAvzDce",
  "key8": "41gGsodZnj87DHnFjMoYdp1bF7UXL6r364EM8TKYbm5DocpxQ5L5FBfCTScsKoKLeacUB8HjMkkL4uN7T1TWkexJ",
  "key9": "2T25ZAoTE4LYJj93saUTFfua3wBxGgFyVfmB9yuTPGAQV4JkYhAHXnk6p6LSHDu6B5ZSvbik5XRKKfdBcM3kkfLz",
  "key10": "DXxW5MYy3euNiYzoesHWcyx9LbDmCiDaPXf5kAufHNdoTXkQZKkvDnNYe24XFVS9331ZhsiLF2Gcu3FX4yg9YL6",
  "key11": "5RWgdScx1iPYxJJgBq138gubUjEau8gHwVje2wBXxjSm8hBLcQ7KFQ5ptC5zKJPzwfh9h6mum78DjNRb8e1pGVP",
  "key12": "678eji6STZEYvpefRKYKEWkcEFAsYtv6dYtv4yB7z8aiYSEdmwhMTGTsC4XK6jy4PF4vKWKmHmYH5LXnsLLZXeaF",
  "key13": "2RJB8TrLPhfWXbsmoAifaQ9nawykMQyzr8YBbEPqpQETAPYihJ5ZmMHn1fnJGGu2ycq27GMVxMdi1cusCbu2FAhy",
  "key14": "5UZ65Y7haZ8aJhgk9DauYhzhtsxHqugAD9YjWJVDsRLCkzQMPWmzcZHEVsCQnnScbWgchCKeH8EGB2WzvywYuZK8",
  "key15": "2pWNjjzEF5emf7z9ZesDJnca4yMuACi3WUBBtdHP5A7JPz8WZhDDxNeJGzChQktFyRvCCnY54iu1u47V5nRhauL7",
  "key16": "2iaEEqMRGwV9sSE1fEfErx85S8HTdVsicn8MoSYrPN36tYjqNMfoivNCzbmY2YCKAuea6JGXxTMdunE3aWQPcn2z",
  "key17": "5NqT5Tqiy11mdyhUYtSMHkUkVgDFkPHBpgFmy4T342ganV4tJeAjEYAWh6TUJ7Gt5JXZBUr9FYL2As58ZFcfUjx2",
  "key18": "QKN2mh83dVibxCXNwskuhUYkj7soabKZWzfzJQ7txdcC1t7fDrFZr7ZQEtYVETgATHt2JR9vsJUPALp87oPrAqL",
  "key19": "4jmbxXab6nWqySUqnRBrN87QDvLoh75YXp5VsRv6C8A14kpRfqa6d7kABEMf6YGAtAfUvTbBL8ZZ8nSAWNzaxhj",
  "key20": "GU7X7tSW831om6MXVu6sPzXEfDqMcGnhxk7uT5CVbcc8f8Lq3RRBdMYMW3bPqPrW8rXYrvg6NYWDmCve34C57tK",
  "key21": "4XRK7Nc5NrrZopo3i3HgoVRiukrQ91cGpWg2DHi2oXxtZRWqs8YBa7mMtByuhuqFFKxbaWqtxHbNbBLTqqnBtp4B",
  "key22": "3QQMFmfQjFRWCi4dyxKpkAyrtWHZXcGx4BXnVGviu6m684QKPMgmFYBhhZcSG1bH52S1S8jaN8w6WoEG5MGXt7F2",
  "key23": "2au6QS5fk9UEkx6G2rd5vx6BZ8f9MdgVmC9MgZvmbbPnDXiiAWetzpj2m6Vy36UYDNZJ2XxViW74zEaAYmQy4bKN",
  "key24": "Jt84bssrMkgr83M9rsaiY5wZNfK7AhGs5fBsYKk5Usf4n5wr4j5RmL5DYhoTrK5nudq4qzKzKhmqLstt2DGDfiE",
  "key25": "5wgHnJ38oWsCAGQ5L8pPA3tGVxeNnj2r6wZoKp46jPfG9TdKHLD2ipngkL2axhvqCwiFZHqEpCkDKvYF8XJajRYF",
  "key26": "2uoQqy8FJXH41UFG4ycNHiYunQmXvGDyromXg7NUxUTE9b5jAWFRZotXtsY52B1LxxbZ9dKVmXEUTH9mo2ht9i2r",
  "key27": "5AsoouqMFWXXVon8iiTYuXDAJktPpkYvhQLqrCHVqzqVrqPWoLafxBkG8G2p2QZksiYwi2qCp4qT7MjKA7qazBV4",
  "key28": "3hZSP1Jb3u4Lj584GwWEdNQfgDkihYWVz4T4WH81ShDWR9rZN9ZDrW8pHhC8jxgyzf1wQdj2TKrzPA9LFDK7hRf7",
  "key29": "tVNtaBrnKaq2jAEZND3yc9JG5eViXbHvcHMxzbFnMwpjNnLmkPULCbuaGJshY7WGUdhpHoDAEXxEUAtrQFEqdRx",
  "key30": "2Wjew7c6j28KezUqTjY4PxSJVWc4DH6UaWJdq1FZ44HS2Dv83gTqj57FBQMBUeDkRv35wbgYmwgd4GwQczaV4Vvk",
  "key31": "3dboaGCezWxK2oAyWR34ZGp8MbezdghDMwqe9LFMB31fRpv84T1dqo7m2yTNjHrH45Wo2wnn2TphF3MrjSzTE4sC",
  "key32": "5fm2Fqy4dEsvR9GNnEuLxEAERGeiRydWpgxLx42NSzeXbZAsFEGqqnL57wueRDSaDvsZgmqVfo75hGW2AkuRAJqu",
  "key33": "3HjvCe8WuD6G5NoZVyWYwFmGApqWneR7JBhtBEBSrE52UNgoqxYcqxBMDvocP1mTypTLgk4YnU73UQgpyn8WBPsX",
  "key34": "63zFeuGRTfLkbUaEAWdkxeBm6A8XvkJJDB5yMiGf1bpQMKNpQxQYLJTLwtoy2MQTH79L17GxKtSc2bvNY9iJHfjA",
  "key35": "D59gzfv9dABxXrEGUUUQ3Pbev5YUUTnMYhvqftMwJjfcLBkbiMdZfGe8MFUVyLVgvfFh1s7dc2SrLYRHabEEz8T",
  "key36": "th96HDC9NwsthD3Y5Q82Ak5dGMVpajyG4gBBfUuXixEscFidiDZaT43oUjW5a4F9LXDUmDKpbPu3CmrGJhbtNxP",
  "key37": "47Q1yXYne9YXUPr4tJvAxr6GbFaXG4LL5XwfrZuSPBxnFdMC5QaUZphnuYiHFk579RkykheDHDB9ru3CeN44vBDZ",
  "key38": "5cT8fES9zcomNW6suZfCDn3R3hh3XZ9pKb6jToEn3sW9oUjTJQHTUrhCh8LYT9FpZ79EhA71oRo9rCYDpc1fYPNT",
  "key39": "56KYjiEvMZLdzo5xFxD8TtQcsqAD8NeHukS4H8rFC69r1dLS7aqYW3DNFTBVnZYkHC5F686mkUqPUWuTVSxev9hQ"
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
