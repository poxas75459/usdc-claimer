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
    "5rA3wCkALLfvtK5e14cHFSG8DfLTNJZ5XizjN5rqV7xdVPA37g6LQoHXoUmUBsuR4hYVJogWZV5KhRimbdQZtDdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66um1z7wDPsQtK3XPhFH6JKb9SVooLc8hz96isZv81v4G4gT5vk1RTWUxidWpn1dLeUk39NjMeeegUf7MTEiKbsA",
  "key1": "2vACmzTCRsTKjozfKNDez5xqi7x5cjZe97HZLMT8HWr8w1coZXn3NkKejSDpXuYddpKMJdPYx4ub1kveRbqQxEGE",
  "key2": "2ABiJ4mAaN5LLTrzcno6TURvVMfLxWAr3ZBb3DwwfqmmnJBDVGNz7ddzjeUPTshLmniY8oZMzZ3znSHCuzTqPAnm",
  "key3": "iQViFJGGBboVeeQDjx4AoegRUcPLvDpfoGyEDLick32Z2HEkhWCiVnEWHJ9bJYC1JNa9g4BvJPghw1Dp46nRN6c",
  "key4": "2gkEerNWjaUxYNDeK1ziHvWz47m17Ly8TciqUfKSQyLryGGs76U8mrTFtFWXR6tWNbKtkuBvopYMJ1zE63Qah8WX",
  "key5": "318Sk3BqmyhU65tg5kqLvRcinUTd9EKQkzvVwpVRquX85vNJwvT6g7MdoQWKTBzhHzSJ7h3fGbtkTDPY9fGPZRCH",
  "key6": "36BGfYLKjBj2SAJKsph5gi51dCaUqGdLbYASyeXyhagf9vVynbijGVDAC8oenQRp73hhUrSvquTabN15LzMU5L5N",
  "key7": "24ZTDr9joLQEiPScK7qG9hkuse1VmGKCWRSU8YVxrfDeVmXi6c1ztSW2VHLPtPYYPQCJHjzdPQepX3MeJPT3YcPv",
  "key8": "5VdvkC1Lfua7YcWpUrkgKemsASv8RjN3BdqENZBtiajnd8zRBv54QKbMMXcKAuA2zEVK9ELapjnDdnrBAsYYjZdp",
  "key9": "4bhycjJFkThpSXpTpqSnxzcyFmtQvxu8RFJtbb8QqN14kkgL16TR8LsvH7e9Sy2W3apZKUfCHk7n89u2SgPUSaJF",
  "key10": "3CUAAMoCbhHctb5b8xtwH79MygzbqMUBuaaQtGrAFx195WFiNghBCD3BSe7pnNp38LTZ2GKfo13q7RVQ2uwF2cSd",
  "key11": "66DdRkxMdt8HGEKNL7V2o4Hve2hXPnR8u9ZEAR9nEyaRUVQ6QwvcVwL6KWzLUbL6tZk56GAeQuGsNLLAuVS5JFpn",
  "key12": "2dBAKQdefSeP2tybpejzT2FQDFSHfazXwFmqYsv4LRztCoiSsCwrA3ow2akHFgnHmqi7NjVTkR2RyfyoXVrVD6bZ",
  "key13": "4GqrggxKr4Y6Eqy5JkDSZmN7DmiT23BNnwkuDHoqBLL7289nqw86naR1Bb6WXJyhMmisJyBcmuALN4JzdiUXGb2R",
  "key14": "3Npz1NFhgAdbHtAU5t4HrDTmtdYnVCX4Cx2JwBQpxj1ZaYH5kKiXKsaZUUZPiebsdeDCjoBev5v7o1oVtcfKB3d4",
  "key15": "UWtgdMNfMY1nL4QnyQxSgS5CstWDPpAd3AhXys4vzzbihVZtAKpSSwCzMUagqRRAjwC3kt2aDqrCZZBDAvtritQ",
  "key16": "5nfco5ZuLo2TE7D4y5kzMv5uPFfJhZ4NQx5Nzhm2W4SQQbJE7UdiJq5JnFyAwkiNSwbwX7jv1QYx4sPn5E7r3R1J",
  "key17": "2BVBFNkiWekKM8KbVfQL1rRgd1pBjtwsGFAmDskxMSJqcBixJbeVPZxtxoqxVN3SfZuWonRXmfkyzm1Mnv1BMjb5",
  "key18": "5zRMd99beiNzJsA3ERu18FGJyGWvhQnq6dhbb42t7cffAQHyoMqRjUcJNC7PEHt7PiPXapMDcSQPSm4KqwXnAkdM",
  "key19": "4W9WdihTsqra7BnuAVSVg13k9hoSqzcxDDhpMjRGhwAw7AAzp71PHFCaBAsAS4WzSxc3DPCWEmrsmTLA8Sw3rr9E",
  "key20": "3H7XtE9GnEWSRt3dgzctTsQwgR2S1UTHRTFnVApTQVyyz3mK8XZYRvzDdcARqxcSKimLCYK93FcsjZRoh3zeW984",
  "key21": "3s91oiPyUDEQm943SF2s3UkP3X3CUjkNWnEXuWmwHPo49j1gYAPEuXWyBXQ8X2E17VcAYjK3yXJrYd4gTP131tP",
  "key22": "26MDpLSnYVWXf2Xg3s92TcTF6KzQ1eCqPZrBUqEaA1wzo2RQqvr7EAuZu2qozgkTkS9sMZr1toe6gF5rRaM33JZk",
  "key23": "NDa2cgBbX3uMN6W6v6Yv4Penu486roiiG75Rvakjg6vFReJTDJVg5keK1LPrBJueEnqei9qraCBFmXM56GBBEHi",
  "key24": "5L4oPQy4jU9SPgzku6wN6rEnZGqxUw9z9DAgvBAhYMynPVArNQPhVAoyPkyNUs8oPNeWjJaKxAckdchHd4Evhnau",
  "key25": "3BKu7Ww5svLQBHZeoyBN9hhHMQiJwRAyESS4JEUxsHmtrVBcan2iunqwttt17eA4tymreWQSu2wYWL96B5zd5sVf",
  "key26": "G9AjEddnxKRsCarkPERCApnDC4GNKF4fUujXwRN5YE1EKFLLHfpQaF5r8aysw7irPQ3Q3XcADcu81KHKTCKFHr1"
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
