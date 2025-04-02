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
    "25y5LFiP22cVTb1wVH82a5HLqrrtwcVk7TofVc3qnxUYkuV2VfbzisjSMRgk2SBQAoEPuHMcxVnf7nv78cA1CLzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sCU6MNC54Tm4CQJcWd6jk3itQLLphFwesfRmjpx5vkMA8cvUBfd7RCntGVY7uEzcBy55ipZcHJa2oouv1Ykxmuu",
  "key1": "4C6EfH21vkF3jwCcf8mwv9vF5RsNx8YZx8TUVExGrsTotiu36aaFaJQb3VuGep2Ten4Qzmr3NYeRgrqAE3ZQT6Li",
  "key2": "HBEuiAv3KFr7bMfqGTHzrKRgwWLZUL21DaqB7yDrSJEYWTxbcXnsgPyWR1LpikiGhMNsQomSpq6QdAo6nDqAWWx",
  "key3": "2xbTx138e2TUni9SwenhNX8gHj4VeJvrBRacNQXydx3eQsdQJv5AypPTkRSM6JadgGpRz66bt2XvuLmab3uFyckz",
  "key4": "46xGXJVs4A6EDVvE8ovBn5bvz9fCo18XErFrdqECyjpgFYmJ8URoBtGq5u145Hbc1Fn1GvFbYeL8Nk2u7U4EeHnY",
  "key5": "2oJY49DmhPnQFaTp49FRGvFuDaGH9maHzQ6M1CkdWfQzXv4JCMFMSSjugQJobxi5G3nrEUAaXvy8E36wfV6ho1yu",
  "key6": "5aukHCgjsSv43RgAhZgB3wAYbgKFSojWMzbE3EbxMWeGKDL6oEns3yvnfSuSBCiAM52yni6S7TGab2Td8LLox8ZQ",
  "key7": "2hqfTJvwbZdRA3EF8kkou5gLzn8NTSadnZTvdV4xSfYUV1DyxJ2vHimS5KCcabdw2e8BqPSGzKZiVYPsZGFnu5bg",
  "key8": "4Yh2huhDfcyWshsAScKRbkwN7cgteU5m3hCmejWmCB4egPMdFhpc4G9z8Wxv6aRvSCAF8YPv4D2c1TRuydQRB1B",
  "key9": "4Kqrw14iTYUu951KCrFeqoqQkdQQvJyxStWT4EqywwKM4BWE8631V3P1cQvcrnotfwbWovb5uLFTW38pgigfzTPV",
  "key10": "5uRQE4y3z1z8qEbmgn8BonDVFfr5W8XXmaAgNcicpQuFsMJKD5NQHBGdYqRdc3BXpqrAZ7AJncfQG4V51guahjzf",
  "key11": "35gQKcXasUhYo5wBnwq21KcXzsokox8GF6iBSDwqw6hMkLvWuiGSrrEMDR7Ro4TiV3h3XWHMJ5YjdvaBRL7SUDi1",
  "key12": "2oz5vKzxjChBy7FzwpKj2SnJgS6HjqoGSi4esuiLB1tB7WRJjvfmSvq876TL6PSsMsMoZmvt5gLKDr5MrJbdF1bA",
  "key13": "2i6enPfUHC8PhKdqWXGRUJdDMbCH3zKMGnRwZusDdWuw2ZQz3ZeRBCTwGidoJX6gSFvghvE5H15e3ymgnfNpJZmR",
  "key14": "3H3XwaoD9oWhWGzVk1XPUwZQM22afY8npTBx22eBNc93qRrod6zVfunwn9C5hBgjqDkzsxYsnRDbYgdNx6WzqoKn",
  "key15": "u6ipjYFmXx7FGoV1VCobPHJy1QvncsZF3MfR4SDZWE1zAsWBXRZhtkx7SaTYCsS8YVZT5ZZhFhSKZWHZhe5xRHB",
  "key16": "xgg3gd7qyKTMJji3j9oVstbijzFzLH92cs7yyGSApHSjmwdCkkRfRyEGgMiiDmV5xdDLDJjP8rq98gErqbB6be8",
  "key17": "3Msigm24anLzFDTRqYprz2AV4SGFR9m2ChTHUYMAnxXgL9KgswEoqdJefNFFTrUCBhx9yVX1tPPme6Jp6QGpnKZc",
  "key18": "2TUuogSjyKGZGVuWkaw91ehwaPa2nHbskvh6VY1RD4BFYZoAng4tHZUcPLNH7649PKoWca89S9eMMjAwrDwWU6ZP",
  "key19": "272Cb4pR9TMkD8DQ63pU3Kjco7Qz1zJgoEQCDE6vcvUWt1Ciq4smN1LLpR7ZHmMqmuGnu8ZBB7dYb9SJyWYKGafo",
  "key20": "aFWsKFMaDbARZfVSHb2pQZEdGN8VXWizujHHVYXxjSpHMLNMFGgT62dnZRoaj1Pq74VMJcGcjmYvwrkJgPAbpF9",
  "key21": "ckLg1gp54mLG8NnvyRuB6Hs3vUWa68MJmRT5TAod8ghingzhbRF9Vnmx3eDcs8LpW1vY7eim1ZD55P4q93M42CR",
  "key22": "4UUgR8ZtmPqeNa1WmHSf1CGnUXNFRXb3GrWYPcfBnGzKjqnDmAQKYaTYcHsGqjKRceC515XHXgZFgGvWguiamjFh",
  "key23": "3ARymxvWw1gA1jhDdbEyBWJrk7nYUyMugZ9YoeQsusvWe9C7VRAMrZxDNryncyPhtFgTbToEHHr9ePcad4y1fCzK",
  "key24": "2WUuxkWVR91D9QLiWqT5gRsqoEintKUJXJ2UHXjUBMDbjeusLndP7g9RzTAqGRkRBYZWgNa9R4g1wAF4oYb7qhwu",
  "key25": "2iUQVwPvkiXnZA5anyhHpWh5JmuowB9MUcXwx3TtiJrrme7ba3bmxHtTRfEGzLF7aDjEeWxqeqi3469PRXuDQb48",
  "key26": "2g8nCG2r5NEqsuim54f1C5712G482qbL9mAsGUW9ehuxpm3zAJnQYqgqJHA6mNyk81MTj5En1aow5zeDYzEFwMSo",
  "key27": "3d6ymcbnMB1kUSHfzDgdju3eeMRZSJ2rUmk7CrsLfoKQnuypgoWcRsRoZio1ycZX5u5xy5uKBJqkk3BwbFCrB6Gw",
  "key28": "3JgYPvYzEZ87wUHXuE2xWxKnDbZGxUKQSD7xYzgHyG9qbF2oN1ssDVVX4yQWVLQmhF6z4iedNJDpVGduuWcZMa8h",
  "key29": "2pFKUSqTmwA9kScRWyWG8ULE2k4Nn5qSZxZicCeXR18cnUmyrXdNht1um2WXsDUeVxrkuQKUZwXukyDy2VwerP16",
  "key30": "5ow35ivVaHxhAK5UYLEDazV2VqiUovNhp2fPEZgXbgWKDTmPVc8s9nuBVU4KBCtXnEnLuzY9d2xoGfrCPf7XUrhf",
  "key31": "3DWvyaNbttsGw9y3otnu14U8keqNicPKTYurvV7m3t22BQ3Sqpp8ZEqZcYxoAos9aa2BpXCPdVSwHTHGbjndsvb6",
  "key32": "2yF47WQEFFMKHaULbSCaZZnXbt4LSWwPHMqWpGd526Vnf1w3559AWaiDhwDzghRGGDwXjPdiVL7Vt7g5QKeG2WcW"
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
