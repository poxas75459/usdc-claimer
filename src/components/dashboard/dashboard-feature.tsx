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
    "Jim9MPGpe7JoH6CKYP4tyVxvjEqznDK1UCMJWyTKBhVHRdaK1pmSsuJmA4s45qB1RE7XyehLWEvBGHoSFxPoXEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "877HCtS3cCidXX1NDcGGFwe6bfc7JqmKDC5cehCKYBxgU8fr4TRdNCgUogmKuZ8Mgx6Q8HwUBGFFcLGv5oaT6PY",
  "key1": "34rnJBtsSNVXosq9EA2DQnX4XSj55vqVU7L5ub7DQ3tuxzN5TWQXnuArEaA4Ls2TtPvun5JrM9RyjV3z8LRxrAot",
  "key2": "5s3X6Y9vrJZc8TeV6YTgY6npKNA5Tt6h5ExL5Ho2i5ghk3eGR8a5hjaNeRJoPGdXKU168HaGNg9GwMEKg9NHEx9n",
  "key3": "315gYUGTu4oWTeT3hrBwLhziKjW51uULrMBX36GnU5FuKT2bvxsJvt1duiZmfwy713AHdUqcWP6QB5ZT9HPvr72G",
  "key4": "4FuAmtmDf5bGjUijHt364N2mQ7jeGvkvyGkvBv5rCJHnyJ6LP1S1w9PzaQDmiuVGYeSPnjPFuZAt7X8Xk1Knxg6n",
  "key5": "3iae6UVg36tR4HNkg2hYfq2A6xospQnzgb5qdw82byhEaRw6uZQp1iyJwaSog9csxpHm3Qw3h6QaNV4vrXGhCcLm",
  "key6": "4DrY9GqkBKMkqBtefV68pLuPtR26YLjL6GV8wna1SGCE7kDVavPXwsMiX75y1ok9chEvZQdz9LpPfJrnWdJdpnvb",
  "key7": "AUoLHMqTbqvhnFi5XsddPqQ5gqbkHYLD1wFgoaCM7DiqciBe5UESKXcQbXhAp9bBUAvfcQXtDRbe4P5iMtWnRne",
  "key8": "4qZD52nrLniAapAeYMN8vTY6Enyng7HapZ41Bjhg3QYywfcGqUJqecPUoZTiChbPVAV2tbgptHZmUa7o9zkBJ6pK",
  "key9": "3SAGReExkq7AZ7aV8AUnYFn9mjHTQQHtWFm4bCMXg7RoxNPNzvhSH4dotfNTqmvtyWoW2tzTqTM5nsBg3mEhzQt",
  "key10": "5FoC4y66KF4yR6fbaujbco4WNAUJ7BTjuYq3b5Ffrwpn69oyaiT7w5TsTz5HJaS3G4bFSPfbf34bFiPDUPsCC4hp",
  "key11": "3SDcyxZ3bzXQxh92Fn2tEg11qHLkhVrdhNWfNHVGgYE3WnMvMoNceZGLJniJnXM5nqCDjdQteMZuqYjpJmsCCco5",
  "key12": "2Q8MvfkXcg4g49KxP56xjFtz9uwcHkZsSX5tJAXZConBhtvQvBhe8s5JYC6vpLign8UtiiJtEjgFaw2Ugtemearo",
  "key13": "2fEnKifXGcZzc7R2g7sn39aoDXGtjFJX4NDm4TVobrs4RXMKndzJc8iMt6oVisEhKhJzrLXCqwvAjUTypdpEaPi4",
  "key14": "nRxVGL3cdg2fgQMckQQin8bmQDPHkq5Ay3ZJshWeghGUARRL6TwnQPnr3hCKXFrpFDvGeDpb6XFZVRvdNdwNHR7",
  "key15": "3H6QXEqxfqaJNH9GUB6tjpRoD9SHXbqfcGA88hVftYkY1VEtUnFJNQ6Jz5ahS6ag3yZ7i4kzgtVN8bvL5ex59rgi",
  "key16": "2EmqWUdctPwzB7zDNvQVhEViqPzraiU4Qpsi26uFNMmQ868k7eCdZ4En96pZnJY5jDERUapveGAJkwKJJkk4fsAU",
  "key17": "2f46rhwS66eNbuKyrpSN3xPs9ukUzRsAMgAfedkcKUkgXPWCGyMviFLtvLEz8R1seBwbfPfEXFPMxnKEWfEvGUKj",
  "key18": "5NBwC61xSQs7CmHxSdyBN9vx7n616Ln3EpzLACtxREUy1Dp3kvKEw4GHYWnTaqDbLmw8f9pHbk3FsVh3fQakhR6V",
  "key19": "KQqGqtWMhiWkgUmaexkvX5tixuYUXu1eRbJK7PHVFc9d3iZBrf1JwcJebF5VH2UfkSi3zvZHRmdFhcamgRjLnpk",
  "key20": "2eFbHHpQgxgaQMX9H5euNQL25zWPAp8eF92VaehrgUHz66rtfKbzMCB5LhwVxogkp25fBvQ8UvvjHyJj2JvKCNbb",
  "key21": "34mM3Ak3YzD3FWzWnUuWtdBWH9ap7kzJUbNTobH9P6McjPtA3jkHdUnb41kszPXyuU9ruweeDTQHU1J36rkEVXep",
  "key22": "9NrECSHdVS6mgpudCiCnTffp9nU1DDBNqZtCMFPkfLojPDL7irts6cnP67dh2gqjQagZ6tTTgRnRqqovbDdQgeN",
  "key23": "2hjcBbSmdbkSNgXAkD1gHKLqjDXsgW1TZ2f3d5RRb5nFLGeB6SACVsgqabA7sjfGbtW44bRSoKKLCu4K7Ht5ypuE",
  "key24": "3FHp3pB4StAvyTsFjDEUP7amQEjrw38W33m9XnhjfrfJzs7P5PMDFT1DSFDSmvQEBBvUsBhthz3a198pzij49ubh",
  "key25": "37kZ83ZV48iBbiJMBWYaK86ycipj6FpPZAaxVhjvwnMtrDfzejX5hwmRAux6n8KXCjPAH5W4N41tVR1avg1Y2cq4",
  "key26": "4M5sRH9VqfV5WfNog33WJAv2qaMFxzo3a6u2J2kGscfLHPgSUfDJRYZznUeGfMrvxUPJcJCpcvC8UtFjmSDd2Psu",
  "key27": "ufRXZisaPrkby6cstE1NvJeXrMVpUY2dreEqLbZYvpTtcou7JQmF12if5bsk4vQ3VLgJ72QWPEybEAiry7iCUFm",
  "key28": "5P7cqrLC7PFWjDAUGT7XzAKPJf8mphDvyaCd9fztf9KGah2KxBtgABq4svqikY63EZNctDtU2UR1uUbBoZTcnXnL"
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
