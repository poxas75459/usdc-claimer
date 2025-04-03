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
    "QE3Gw47Neii4uFNouXgFcp2PxuLqksAbdpAESwShU7JB6mDmjmSa35czaruTtcCq8bTppMva7Yorn2DY3WQ4FS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5orCsjLBkjz2yqjcKGW85TNsJnkToqThNnGxoZ3zn4imkac5H421zVcQGSo8PMH7cHrgHyzmwGDB6PzVHDBjjYX1",
  "key1": "48RW68AWdMvuWmiLzHs6HnXsZe6PDV5QkARKsvtjr7nEN1Es6519qewdrrqWBMHiJfnFYfZT1LyU2KMm2bfwaoKN",
  "key2": "3EfpDzRyKzHbd6XcVcjU13uSKs1pUfg5JVDNvHnnMMZuXghqx3Re4ebG5aNj5YNE3A8C8RHf49Phup7AnBJAMVFU",
  "key3": "5vPSUFpu6Rk9Nq6AXa3D3qMSAZQrHUpVRAiwyN9tWbqreneWWCrWoZVwJ7mDDqtwsQWDJb3M7HDsPpzm5WMAukQ7",
  "key4": "2AcQACZk5dCBSdNWo4kjZKhDB8oMCXq6aQoeEXM5xtD1p14mirz7kgWQiYD94tqiQs3aS21KMSyJe22bYqZejztg",
  "key5": "2Fb4CPGj1CxypyoCBb5LVL8gX3758dKeWKtCC9m2X9YWhVukCct4FAxW4vRAcEF65tgLcbzUwwt2AyMPdS2hdCTx",
  "key6": "aiKGyhJRhd8BSV63X86HwEdWm3X9WemXZtoUKgHuVejgnSPjvtBLMDZSHj1t8jEFpaWVVhpPV17t3pVhnRbGv1o",
  "key7": "28a9SAX2FCeFhVDm3mocoTExZ8EHEmWqTJPzB36SJ5XEUveNHHLWhFNdxbHWUD56A8qivj9HKsrTscLGNrBv6cbN",
  "key8": "2H6g4aFSjkJHnu4QzZuBuF9tmWKcw7wEEHsogt7Ud2NfbTTYRZSFNwVireYUXxxeYsV2Ftv49RERrrWqaxfMdSnQ",
  "key9": "5wuLm83yxcGQQYDm5bWVK2W2ChhUGeLvehbDfCviPG2B56knhgeFgQxVcRRjAB6FudcFX5UYA2PtdL3jrY8j1cSB",
  "key10": "5oEwTWaxsgtj8kpSZTmRaeAnVzAqcwT65eVXCeL49eWjsdWoRshPDkskHiwJnzYDjMdL3jEeB3qeyJa6cRchr1oQ",
  "key11": "5eJLjmhAduypaHtedTN7D7wb21azzT9oLdGaedY5E7bonehcoqjx8Eq9khgDXBqqPEmtQF2LTWRDuG2AMHeQWTjt",
  "key12": "2DtFpjFUGGYf6JVVWxpbgnHLSzCWTMsqZh3VuCNa9qWDWoLFUXkTtjMZagWdEEwGek4YkAL6Us6SXSsf6G87chK5",
  "key13": "5ZZkrNfYJU3kSJx33ykEZ7DhJTn6GGMU2xJ9GeeJaDzC8USdTxdFXhZqF8esX8bGG2znj5sSJHYsgmcPiUKhrAEp",
  "key14": "5FQuFAEUiaZAyPAH3HiWj8NxnkmnKtXxyergG8tDRY178mYtSRw9Kap6PX8NChUZP6vwyds28i8FPaAZF8GApoxN",
  "key15": "2qe1na2dq8Vsf6rcEXbDvu4b15XibwdJNr4sDRLCn7eev93mrAQiBjAqyA3DEaZC8WC6fKy6nSnFWXh3g2etDjp6",
  "key16": "5jswCQp91NJFP69Sg4Aq2hSzvdrduhF2vF3hthbvdapkafWBPTCLKAj3oycDuLjn7SYEvKxJ85ApS6iZWfFndEyf",
  "key17": "2ummXaBPRPNfKCsa1eovkUZNmupSYJsjzGta638EMycHaTnorXZ4GGJi8QgXTV1EpcQT3wPf8zMdtJU2y8KbNtCj",
  "key18": "3Dn21RJXsZk6y4VkbwRPy3UXVCE6F7Go3L4KatFtx6Z3wxqadh3cb9vwtKWPh6aRDFTqMpt676pYuA1HNQrKGpKh",
  "key19": "4dh7wsi7Wkpv1Nb75Kybs7zN3j2y37fGYk3dbSnJdYXcCZaBGK9KNFj1Y7JX4TrcDKUsshhgsAT6HDsQ327oj5Zg",
  "key20": "47i33FKp75LjdbwXKJSRea61owUNsdjyCdBvY26bHfZigSVK3Qh37y3Vq6T9wvofTNKP57dGCi3Yv7icuzXmcZgN",
  "key21": "5ZD9a7iwajoRdGRvuwVZ2hSeAJPq8TE9eHn4by49yj4PK6SFEWpwbSv7rDteonctoKjoiSuWTaJ6hsWLTwkaQdWT",
  "key22": "ZMhoR428jjVxMJCXTy7iaPFCqXCpX3kw8RhRQBQkkt2C4k2oogooVSussxMboGkwJsmpGW531rs4MPWqQcp5eR7",
  "key23": "2rePzuoHtXGjfNSGdgwNzSaeNLiayJcim1ZK9PEtYo5uCYnQcBd8s9K2NzyHRxkmXz6q8w7FZNh2bMH1g65UTJ12",
  "key24": "3N2vWgRAv9mkuD9uT5jJkboytwPh4exNPHcMRVFoqQAppWUrnC1qZPWBZTS91LnBLfgG59mAKPr79Y1edwD87rz9",
  "key25": "4a4qfqTyWWja7Ta8dWRnXfs9SvpqgSp3tRzsYcJwRhQLtP8kzmvHw9yH4SjwpQjotrufQkBKauq47uanJwhedi8o",
  "key26": "56fY8gW6pHkFCbrYyHLwaByBxBH7Kj5aUcRn4zMAF5Y1Ah3LAh22MfjCSRubrnQZytg299SCvFoZyQhdGMvP6CmT",
  "key27": "5i49qSV1E9Teo2piCfuYLUJqcd3imcPBjWHhDomiFJPkSzhZXr63iB1eHr6NDrg1qkarDG6LbkYyykfg5Xe3YqdV",
  "key28": "5b94nz3nLrvf851CegtaYenrRVCLqkNi9SX9wHYWRjpJLnE4HhvdNNKzzgisUrCgwtzpqNraoiUna3rdQhx2Wzew"
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
