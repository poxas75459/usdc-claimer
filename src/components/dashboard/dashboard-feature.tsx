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
    "44zpMqvzKyDqSDHQBvR4zvvnf2oT3fG3ivkKBw7BnNfK6LPJM2CR2KXxKxatNX3CqvqzqRqKhLNSTp2toAz8y7sB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XHyX1YGicUUdDbbMU7Mt1upr33VLyGHG5g8m9AGRnA4LCA9QZg6tFFt8AnCdQmhdysEqqe1GEfdu8xEtpCivDZT",
  "key1": "5TeYMWU9dxdeuop7Yio3C9LB4ZdpqThK7aSYPZaiSx4LHtHohX64aiAz61uyxhGLwUSdXM6hpQxanu6EpASQ39BM",
  "key2": "3vauPJMYWGWiP6vjFGP9ePmd1eRz7HSi354muvob1nDX7bKJk2CLAtjVCkiWsaesBN2CA5XNNsagXVhLHrwipAKp",
  "key3": "5MZZ2tudyBe3vko6NvpiojLGSTpuFL5oMSXdGqhdGme7jyT2Fo9nFufJbFgRnYp17gSy5Xz1Za5Fhirreyo28zH3",
  "key4": "3zg7bwFYA8qjkzy1EHLnyphscHPfZr89ygDVys5Guv3njon9UC9kNyZ2hJe9hYan2pzifWD5d6C2ZoYKcxJQU2Br",
  "key5": "2p7th9eDPE1KqP9AwSN4L7CEXG2tVimPqgXAZ5SCZSRVDz6zywin3CAis9XCsNw3s1CQNqANewd7WQujLTpDw53W",
  "key6": "4BwDMmD9HQafrLhwhHSLH6aKp6fYVRn4QLvztMwHy6ze7eaX9hhVPahidUSYSKnEAW7Cg94zenHCddWyzUVH8mDm",
  "key7": "3qjbiZD9fJS4tu3W2SGnjqF2ZyfrARs4kxbKFX3WS5ADk4JangsH2DXU9v57FrYGkPLTBhpjhewQoYmUpGWySk4h",
  "key8": "4oix7RhU2UKsHvfkkAaNoeqcakvfD5sfr6Zhx2cusHzzCLhfiuhgRkM7BLvcVq5Dtu6M4s2ivtJKDREBZcLs4wBY",
  "key9": "26WhV6h2ujp7oRCk7FS22YqM7SwxLBnWpcsLcPmLJSUXtpczPvbwyKoun8hN5RgBaPhqgPaQtPo8yEpRMyCJ2SdV",
  "key10": "5nJKXm7VBiqUXUJHdnVg2YRpeaV1f9XfQsHEu5HMeWMBKQ2TCVLrQzYvKrzLXan5X7BfSsayEYkSb5dXpMtqBr2D",
  "key11": "5p1Jh9qDRECvMzQpn4eTAAGDkhpzM71g3C5qb1jLq8eKGS6CpHXuiv22t4H75iBPiCCDNXW5e7nUCzhqsm8s8tqQ",
  "key12": "493GpG4U4NCTvhJcQK4PPwPezB3woC3dznK58UKX9kR1ovJFZe9tgZqD3wcReovBkjAibXGA3mFWjezXzEFSqeJ2",
  "key13": "5Ftpyjv9DeA3H1wH76ALHsgLXqsLcVrNmbFSzvCfXHpBumGkK8TwXPLjvMLd1EdbdqWS5rzf4NfZ4myiR363qFgV",
  "key14": "47JwnLzM2e3AgLTv6vStBfXnqcQu18y6XaLLzP9WTSjyc4A7Lt8JNxxi6LxSBpybHQ4c3btChjazSfrNpAa8F7Ar",
  "key15": "2dJxqdwdDrwS44SbXwVbqDuJUnJXoaEC5GHbetZrqSf4LbQHXBotPKfQarezpseLSrpjJcuCDD1LvNab7HRLWWxm",
  "key16": "3ufDfChwMGTFJDaGBKZfhm3uQezvQAQunpnHPL66iDgH1dT8sQum49CBDSaqBeCLxKR4AGBYN42gQBycubzVDWTE",
  "key17": "4dKJVo2NBUGnzaZ2CAju7QrsCaDeedLgxaxKfHMcZiGP8fZwr8xShrN17EndJ2yV9vGTUUWg66DGdGfhPWVxKVyt",
  "key18": "215ruS2CaPR5rVGXyxwvz5W43mZbGFCYocn6HvjtY4AVS1jCpYkXD9K6zZTfLoxVPZ4Hd4uL8UmjvSQXnc7rbnYd",
  "key19": "5E5pibVEWvY1L28isso5gAWMTu9VwCFMFkngdPECGMBmeuWx7FGnyCBr8Xd1momUzD6PMaj1gFGLjuyadKE26NPb",
  "key20": "5TpcCZKVaFxwJJAX4c8VFDL3uYdL6m9Nhrwt9DJUr6jGbDj956rjTYyErakVQEhePiikxLYUkgYS5yqs7Bs3MKTK",
  "key21": "MMCrEk3qgkbQRsZR6LVaL4aA6gHhCPSDAyVbtQ952ABzXzTrj8yGmgSFSqFx42KQ5RvggiiQNB7Po79gw4KcM9Y",
  "key22": "3fp396bZWuchhPVQKvRSfm8NdNg8KbVX8iTMdzEpdSjbCdAY7YaZCtHiShYftSNJY2NXDDrFJbXbQXeGCNuzdt68",
  "key23": "5KDZBpcMvNUsQN9Yz3q3PEAMvtbFFDzo4F7FxezQavzjBWZC9EHPbGQCxoA1j9mUgSWMgmuDMS2C88htKQjKcAfv",
  "key24": "upNACqj6iPdv3BR3yoYtAsRQzuLfw6GSKVn4cb9senWfCQPepuJykW58saMX9LwbSCP3LKh2813jw8QqDXwavfy",
  "key25": "4cNeTb4oyZmBUE54uvim6bikXh658w9ife3JczsTs4NX8NWaeshHdpP738EmR6rfMS5NBiybRSe96q3KXgiZjkwM",
  "key26": "59wyF44j7mExR8f3E8k2SDuEkKLw1AmoX31NueJJBXGykH3ZobyPBB6HXJV2pjdPFe6v8HvG79cPxNbdBYoj8yvh"
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
