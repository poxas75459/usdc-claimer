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
    "43PU9F1b5ZsjNsJH7hxktvj2g8nRcxY8eQvKoSvtPwyfAzUfe2QK1ZPnSRsH53YNFij1XyAc5c2TfZeh5rcudC7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TTfcJicWra3L4B2KWcC52BeeYqPbuPrM1m7FRtdUsEDBvNdjsY75yNQyiD33rLiTZpAFgSEcLerFK1fYCrLcQrj",
  "key1": "uR2ZSzxycnwk3j99ufKzJ62skpRH4qTVYkQ9cdh2WsSW2rdd3C1eJo6rEihF47akz78FT9GJLyy2B1NXvJptVKp",
  "key2": "NxA5qyj61q4r8LyZoq9HVpxar11V1b8u9bZJGJqgGueoLCVTUCtCDWdZ4nPJobMRNKxzvMDyMd8ZRXc2jN9GL6e",
  "key3": "4uR9AoPj1kTMHXjE3bLDqXNJX87c55BmdG9S8hhdMMFYieFfVRjb7PYHngarVWxJ26x7frcBaayDq8cmMLZd68uu",
  "key4": "33sXdUoAAKToYRV4Yhqm5UymwNudR9LoKrRZxsBxifvDNrW6pbErb974x6dkf9eiiyBFCSKWwLnqP2pVcvjybp7c",
  "key5": "27obvJnskcK2Hdj4rTtpq4Vxu4jAVH3pqARu6f7ddZvj1uCNmzRCg6bLkQq1b7eEZ2fXXMZBzeFTVdeqpVXF22u8",
  "key6": "32FhBuo2Ty3FfAot6m5ZaqfRLuQABiQ3dvYBw3ZdfVwosDTZUPAeTTUrzuioo2qfLCdF38dPcg3xanQXXg1xFKgY",
  "key7": "5CgisEeyDjqw2dtSBGgLwJogoRAZhu8PacGhML6zXGkgvCZwoEXXKgXdo2JrmbYqTHZAc46a8JkphYvB9kXa2Lpy",
  "key8": "4bjMc4zJbUHbafSkupW6f8gvwAzE7Tc9f2jH9xqRjCwuH2wEscMcSsVEvdYBkcthTfcEpQU42SrEScAtr6rvUyJk",
  "key9": "4XzY7vQZEPyci9kyEgJEsU2iswuu5HWp82mcSqXP4DZZ942wqUHFqatT5NHF95LXeNzDRwTXmVJofZgpYvxNPmcL",
  "key10": "r5BTA8FkshAfxLmAdzJ1jUbppg2VPXjVzjZwvWR2RjgvhJFyKpb9B1KgjpZ9n6yDytkG3Bkn7UPBWncwMAiK6ub",
  "key11": "DVMciUQhTX1iCkT2Ktpm1kJJbvGs1bPuqXkbyNBvv85kj4Z1cUBNbCS47f8t1h3Dz6ukbvec6gLTTimg3pvRUaR",
  "key12": "44sT8JZ3xdgjpCR2pMMpyRWWTtApB6bVWVRXEF6K8g52UBqSwLTi368pe8AQ6Vo8SVEhWbmYVb2feUZhtEJedYhG",
  "key13": "56w1eWUgiGYqW6YUW4367MoCDV22U5URUCNfywoRsd2j3Ka8to8YxNvSZ7piVD93rD818ekSE4aBYkyHpHWJQ9uE",
  "key14": "3HAdNMixXYcQeXYv8dmU1CHDhuFWxEaEyRCbRN6ULDoEMcX7JCmfJer3UAQ9Yx547JQV9dU6CRADNTxuMGipNGtg",
  "key15": "3H5tK2gKJMyCGBZmYDnSTTzb7sc9SZcFNVZbr2EAo41QpomMc2JE6pcCz4QaqQe9MMHmXkcgEQUHwC3WeipFYYkQ",
  "key16": "PnrpJqVfeh9PqroL3KMmwhM5DN6ypLmJdLVUfuJV8fU7XH6vFGcGKnEk7SA2Hxnf3HrpP5KUeCxTtUsD8jiTQ64",
  "key17": "4Z1sYZAic2LrTfktor7XqbuPrsHwX4ghGJDCCz67v4MDn6AKKXVEtT2Sh2s2sSEGhpDWDao9EmEJS4WjuyyGPLpo",
  "key18": "32EozB7hin6uuLK9XuZFLw4NPr46S4uT1up41qBJXJ5UKdxsyhZsmcKevwmcfJbpAXpdq4YHZDr36HTCMCzpvva9",
  "key19": "5ut5pR9MBP3u4jkSW1ZsP1JG34eFLQHZ2Hz3yMXj19RrYT4yPyJYpPDtRhR73yWm8r99Q7etvoUWd8PeeeaFpwp9",
  "key20": "esHDzmNpuBJJLdTMYFbjn2taR5SQ9T8QWbWxuF5GybfEYq1GZ4ehRtajQUsKin5xJV2SXgCZnusfp9rH2Qar5Zg",
  "key21": "2TmkT8ZeZ5KYp8r4zVeRvE65rCXFZ9LuGuDakkSmJ8DJjwMUnNk7wg9XNHhJPpvRb8BMhVSGLxJhzfbYtKmtxEmS",
  "key22": "2eevR7ngCHLvoWWLcWyrBN5CpRLQVHWmTchHt79zgUrx861GUz2THrQaw1Uswv8oaXVm2hGiCQDV26k2EJkdKWMi",
  "key23": "3seEyz5dGabVx47jJFLZq1fDv3hgsRj6xRqHgkKZR3LMVXhBrosMV1wBXtf1kz8138nJhXe2qKB6WXPJjKg7KhK9",
  "key24": "3tbXyQWmUEQdYq2J7rqAKvX3rkJJk7o8wgsu4oagjvgVbSH2NKCUJb6btG44pyrc7ibpvPWY6H7vEejZ3hFGkYo",
  "key25": "2nRMRSARLWJTYjbtohQpF9C3azj945M4hCLXVoQuGyYfUfeUuRvvQMivboaiuzkaERed3MPSihzkme1MqS6wTGpa",
  "key26": "4wJVoUXStXhkKFYqMFvBN9bY9p3vVfXpNyKNWKaRjEKmTaHu2DrSWesqqxKsfCTF8VXoB1mNavzjGEBzoTP4YoHk",
  "key27": "5x8gbZTwQDMypbKEAfC2EkVZ2ChGPguWEzusqQJwDR5y32uc4v5GCbbqDVfGDgm6t9JqzWhityPLmXYh3a5ScmA",
  "key28": "3DFXEEcYujnwTmBebuoADNbCoHVuCXrDUvpZha21RvBJzq7f51yMrVRoG4oWC1tren4dUc37g7DSBq7aDxZ6zck4",
  "key29": "4kZyp4djPsEc7eNoQo9HgJhU639vMDNpNUz7AAoy67urCx8X5kFKqB4tx9FFXgBAtkexMtFbt6jRa3Hajt8sFH3Z",
  "key30": "42ym1LyjKAVQK9T6isAcmXWioc4ondXkZLMxC27jAUMbzakXVP4oYaXMnYNYX85NLNurAcAScpnHPhP4udZwkZnL"
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
