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
    "5aiis66QrqN8i6nQrmWqd9W2ifATCzRia4Q1Xw3t645AUHbtPNhAzM8br3Hj1qSsMaL9Dc3yimiNFtYmxLXff8cE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KGMRTRBEX8aTyBY1rMmCyRQTUjpRCuJWqKqTAanw36BKjsHLF5DBNJbGAy2DbELHbgu4UXcWLh1njRApDyn7hpd",
  "key1": "qGicHBcvve5KnE4ZYLrRa9ZUsUed8AJFo9E18xMRfP1VAmSLxsoDmaCKxDbVWtNwrezsMJrN55WKoBREw1exCCa",
  "key2": "hqTmVPcHuDPTBk7B32qRuwFKQvwGdoBVdVMJVbv5usHZ9z2iGqa2cZfv4Y5qj8Bf2ZHqHttwxEq9ujEh6MstaSM",
  "key3": "5zf9nzwC7QFaMzQvfWHyoYy7YydChY7zdmZsp7PvjaSQrsqnB3aftzTXNKe4gbB2ms33vNsuqXiDNoH1qnxiX55A",
  "key4": "2FxDsf6ZRwFi9S5ApoWve3hUuuGWNHf1T5x4Xb5XjFh684rKLmfbHXQueUuxec4Eo2iaSPyBzCQYhKBo2ZCvdCpk",
  "key5": "q6NigrhQ8HeUABPq1YSvt3Hb8r8J729vM5UD8sc6MWbRDMjeANk4zKEqVhFmyoEaW2Fw12SaPYLWkMgGKPiTmEq",
  "key6": "5x5xpd2F4v77hpbVck57VvjiJS8LSqDftw8gw7dFZru9ZYcEGZhEjNePmBEp8XYgKSagSFaWfPar5y5Q4PGvESzZ",
  "key7": "4Gs9rtEcf1SB85gKnHKB2odsgkQaToEwGF7rJr79sbTbg97Cj2LFquZLxW8ZYo78SL9rGPxzj8fQUhovsv2Wp2B8",
  "key8": "BNXQeqgSnoVn65TE1qFjW94gBs4wwmJmXhKDrGmvxkegoUq36KK2PJLGeEuWKMKhL59d6USPYSSkBGZwt5fg2Qz",
  "key9": "3DkHwcdFkou5rwb56PcgGfewqDqyGP7koFixxJJh24LNGwW1iRk42Z22iF7afTkx4hNoh7D3iufFw2irDnomsa2L",
  "key10": "2mjDCRKP5T6YSLJEDoNJaaD3AsWckSaWPyY5jTZ18xHqcQajbP8AB7caTwA6dc8PYjpKiyNpBw2FceLa7yDRdN6T",
  "key11": "2MyN6gS3TrXMivkuQs1BzZnaykm1TSmKuXVKcnJvPE86eKnJbBpKfx9edqjUdx3bkUMPeoK72MW2BQuoHA3Bdkgd",
  "key12": "5VSX4EoyveZ1Kz5FDChvMAaQiGiWQKK6JZ3qsoMjvF6DodGYi2wJZnMAPeSbyy4VpQphVFdZ4wJEGn31r3gsEziR",
  "key13": "ote6M47Rb9VSfZThsvLf99bTqpe7fiACztSirDqUemPZNnSiFQgEVvBii9DAPi5C3UtcpN5HgtLBGTj37hEzQNv",
  "key14": "5txUAugFN64MNfUNBaDACkWU12Nzyemzy14D733xMkZTkhW4UmRipESw12eD8ZNKPFHBYhELb6swaCK3TFMRGEt7",
  "key15": "zYhw9teagEUdCQCSv4Nne4S4PT8jFocYPm4sGXYhDifCnMXkRBwmGLfEFqJF9moBYLNzwRd4knCD6XqQa2CWzaP",
  "key16": "3U5r5m7HVowuumifXvDVKNZymQG6cGKFGMWHh251xNmDdBbanL7QyXSTRJvmQY3y6SK2d36X3rpKZ67D6Y53m4Jy",
  "key17": "3zqKKsWXqRZT4Rte7896E4ztCy44YR2nP74hQFzJJPWZXV7XJ29SD1EPu5kSMA7b1CdCcUhNmKA27FEbq2h4SR2N",
  "key18": "3guJF8wmb4Qvq8EBscjfoyuCQtNzDnDoU5NPH6BGPLmkoqGE6VPLtFkwsMVJGrsmRVydhZopML62e388YkwHmrg5",
  "key19": "ohX7ECbFdFraih1b34B9pCP3UjsfQpmaJgrVppxXKVreZ1PidkmXi7YsksQiFJqxnnQrsEwuPvxThJX7R86wxSC",
  "key20": "5UJfTS8J6bP6BVGA75iTRAeaRmcngojHTXQ5pxQ5NC3pC1VZihY6K3TTAKkpwW2XEhpdSutu7MHzpfqVpnteJiBv",
  "key21": "jWehmW6HmWkptq93p9Cue6vTnn7nf47m8Wcknz5e64jT5Jzpe82KXHB2Cq9pwUYRY7kN9NQWcGLWy8ATTd6q6zk",
  "key22": "2TumktXnamSFQ7uuoiZ82nUCV4pc5MzkhxG6csBbcwWfGRSSALyhQhcMdT9afjAZg4PC8MF6qexSBm3mNzuRn1oC",
  "key23": "5e8zL3VmrYodJHjD9EXrKUqmMBKrmBxnJUqqQdfRDThaGYMfTJSKEMgVhzVyxUA8h9zqYgnvZfp2vBuPVqHztsXk",
  "key24": "3Xt2ar9NMx69iX62PaafNhpMxMg3iTzit9aSET2hYEojVmztJPeCiLkWtSCMVB2pviwVXdjeWJsXmycyNhW7GV5F",
  "key25": "yTxSnosZ1yQHfWbejw9ztG7bNmWtVWZJ2tFSgTe6mf3wEJD9JieuCLLSA5knaf8m43gTssK9wfhqX8gh5rRFreK",
  "key26": "32Q4H5VnHmoLZwuvL7B2pSxFPmuRYDXFKrdFZbFzWVyH48Rm7BTA7bm5X7bKK9xySyrfNjLVPyc8BNRUosZ3CQPs"
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
