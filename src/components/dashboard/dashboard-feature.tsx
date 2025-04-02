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
    "2nBRkJCfXsMF6BXrQ5VXv5o8LUTYQw7b2AeyEMZfLemPvdiiExwz6HjLqn9T1wGSLikPp877zJeLvR7NB9GEeUky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s2DBGmdyksZnf8RBdEzS1x8UshHJz6G62HZ6SovVSZivXEGXW4Tb85gYLZKuEnzKEUWJNeAiTvoM8q6WEWLiRPr",
  "key1": "23YHCvDhCaGff8irqPPUPwqhREK71yytfC2tKt4uv1TopioEXFWNyJgw8v4oy5P2VUkpFwmKbJ9EYcTTzqJG5ihQ",
  "key2": "2TUbEjyK3VzBW5fg39wsMPyiGxVT3Pa7G7XnK63UR3juomB45npbxqZug4gpQZdEMjYewXGEAyEYHVcKvsdWR9AU",
  "key3": "3CFDZr57qMSjv648CWA4MhC1UrNC55AYwhRSGfYwKyowyjNP1UKbZBsjoPTYet1uTPZE6T5u8qtop4i6FPC9pSw8",
  "key4": "3MZL15tHGi2MdmBUBrAJBYyJKKac3XjX59WAAfiYXKQR9rVZm3YKuwEPaiKUw4cPyojB3DzhsrukB4NYf9qZPFVM",
  "key5": "3buh37w69hMkKYsidG69osbUcZVBeggZXNoKX4PZt5frwXWWc25H8oinzrkxXWArRn5TP7z2iMzBCkE5nYicbJDe",
  "key6": "2Dg7hZoG3Ycn46ZBGEoqy3RwPXdp3xPgaGZ6ibQgUUq6nVZqp3AaaezT8s87sCsLMgisnXAuTwnzhTShxSEzz6pX",
  "key7": "3HH2XnaZQX8TjMd4vcuLwUcY45pJeVWDPruScLCFDq8GCx9DxNHNxQz4zKKecaCwLN3bo7HAU6Nf2q6fCkig7CFm",
  "key8": "3ya2WNDGkJBhMqu32nVEa5c466F21a1is6JXzNumZvALGMJcJC2vAfqmwi97cX1jxU5Jc6mRGJNZ2i7sxiAPvtzy",
  "key9": "4bwsaKAPz1V7UwCHGQm6iNrncFSUftBHLCVsVymuRvTGcCXUwG5c6Ya1fsbqkc19xLZMNaL2yS4BGqWVegxwjMHv",
  "key10": "4NZTtRcShRbBuuqYk6jV3xMv66T18CEwnxSWcw3fVws1pbjJQMKknW8uNNZuZuQstcMxmQ8kLc8wn6XVoxsHdCh6",
  "key11": "2m8qLBR1jhhWGJdoRavViRbsK3ree7en1f2ExpzVaQtTwVmzA8optEbTy7KWc769RPWeUbqguU1jrpt979jEyHWy",
  "key12": "2PptZ3um64V4DyHDRUQ6D9FGKxbRTyxvHDgJ1WuLUFF736ubZ9XpRG15sSJpGQ7TkTsRdUSq9w3PcAMfDMNq4vR5",
  "key13": "2XevXmi4HVoWCWh27W7TfwRzuFfBRV7d51UYsgdtBJBTS9uDjMS7rmwcahvRUPwFRxKiKHehjiCxez9eL3jxpvcY",
  "key14": "4TBcEYGavocYALRoG841wp8ckKmnamDF2Nd2BDBJPxhRo1utzATuEh5tPswjaV1kuxQtxPUQEvivtBwcZKzwaHCn",
  "key15": "4LJp3PRKQfNEjzJBsqFHzuaYXitCNj4SVvMPXk1pNYsJPtJ8wSogPU1gnfrnUtoFMPPHy7etoWG4xtHKQ2nRn7tu",
  "key16": "4TQMj36cgug4wj4ZYHG7iyC3LNBVqL4bFMDs2S514KEVLAmXY6Jjc2kRySkRhShcsAiRbiMp5bTc18prwRa1W7DG",
  "key17": "5ZUmTpzFbWqvz4tAKtKAJrJVXjeqjVuLhpho8evtqnL6xHzkZbAeaCor4K3sPA576qGWhPdQdtyK4Pv2CbjJemGe",
  "key18": "5rHeDZ3ov4tae4CEiKCjdrCyeFEZ9VCTk4ZSSqovZifxoYT8WmpZXgB89SBnnnkRRs7DW7DEz6wZrCPaZLDBe64c",
  "key19": "Wd4tdoWiBcLDX36jwVyMceoaKiRZL8GqrVWS21oPs2KcBj5HeypnJdLxKBwBRvep3NrTmy4WNVRC5C5f6Dz8sw1",
  "key20": "5fw8P6ZPUXMeRjqvLjJvQqWkk6Re6VPorz4g3vSJfaZxVJmNqk7jDuqTHrJdU5kCqUpscdUMpvpFZoDJiYxKrRnW",
  "key21": "5dQfynEw2nz7VgN1x6khjwX5QswKSXL48vmAKEWuyoCaNq2p7gLd2zYHiKopjC73QMUhoxQGcv8KgPrHpQcwaSmE",
  "key22": "2W15y37R4QquCiKAgzZC4UymQcV4KisgRnAATrcBTTnjSNB7q1K6V4yERrG1exs5dttJ1mFHthEYkgwe1gn6Mr9K",
  "key23": "3X7H5GQeRmmAL3odSi9PnvU51zc4uZFCCWfTy6Hk2GDsJeJF8V7P5PdpuxwFhddL4WB1rnz7GPb66jLkrK8cE1av",
  "key24": "nG231xfRC4wQnYkv4KeSGnEANqxCFJZ6oRFJyjQHoMYtygVT51mFd4xyNSjpYDSaXMcvxKPSjkJatM5TPZe6Z9a",
  "key25": "p8BZtM9PCZsdeJxpjaksRg9tDJTkHBciQLz3tk2uD8KgfgYzFKAKV9YdgdvMVuhAKxhb8pyLFTTTxKAf44hXjhB",
  "key26": "3kRsWjjDEZVDWGS8Xknp2zEUQeuiP9YgYK6NQYLHdoCZww2CvqrEggBK2JE7Y7xDcmZRUnxsMJYzLnovsPAHxSgG",
  "key27": "BHXehyvhEEqXNzTNpXiZi4hhMvzbLvS2yYHoXn48h5245t3LZCbWeerigu1CttDVqRiXCLMUTrHVe6fr59CE3Fh",
  "key28": "2W21LDC4uEc9cAuZn4Zchxt225j3RwoXSNYnwVTm6UwWYgWsmbBAAnKhpR7rDsc5Dp7n6Uvv6aHVGGAU3YndvPiD",
  "key29": "21KZE8V63xbouqU29GkwkaQL1z3ZzHkzD3BA5aVyVbcGPfhQzCsGTdKQc1wcMQGdSsBK1WXYas2SfzvSwXu29CKD",
  "key30": "5ZDDT1AVyZCNcnSQNTyu7NJG3oxwdSDVQ5QkeNbKWBJB4vg59ajjq2NdkzM9cRxQN5htM2nYpXUDSe7H5TxJZfpD",
  "key31": "5Jga8SmnLQqgmk72e2ocB9sFt9zk6qsyuX65oFKtp8abWCkVxpwAQz6jkhrDfttJNBRN4HW1Z5YXQXfXcDKQy4Yp",
  "key32": "43UzGJd6VT7d39tuCJA6gwDxaEbMuCkpV1Byj25h8oLXU7Wrs7JJfG4xBk52CKyjqduhNd8fpXwzFprAytPvRUr1",
  "key33": "2KukrrThx4Dhi2NWtmxyzn2gUsA92BWSyQTfgT6dyrpJU7br5ytwkCwoMJCNekWursqpZCgPdj5KUrURWM62Q2n5",
  "key34": "5gQZUzXyjE3GK2d8Xf3LsmMaFgG9ueqUGcLyjNZcq8mJTDAezoo1jmPTGPS4SAthtuAitjq83ULBnibG4SSyjw13",
  "key35": "5Q9ofwvtb3h8vxaP1vpvJ3KFb1q4iHQtEqQF6LFJThwcyMjZCnDbnLoAsZiXCcGAnxaDfmEdNwu5HQHx4aiDW45n",
  "key36": "4tEs54URgdMniffiG665JbN1zqNLQL9zBPu574mizSUhDjQ3mufxsd9UatXa4eHRVsnJRox6XmeGFX4NDBaqFKd3",
  "key37": "4WzUfrWdvonV4iWDKminu9Qu3awrSeWjTDedcGpsmTczeoqUNSWRQ2Jk11ZQ4sK7FicEE5f6sH5ZagvouStsFeDQ",
  "key38": "5tyhkEMgq2uH52YMsLJU4WbzqKiRrrJXnwTtrLsjFSGTRP4ubUjcchX1eJyrbyQ2uYx7kMyerdaMLn9E7VVm6d8G",
  "key39": "2RNJFZuczmCnQuGT9dMHs19ScUXuB2bUPKiCf8z1PL7p3hK3e3QMqmYWJ3ozQcMSLZ2wMVzsb3kdkCQjqYrLxXiJ",
  "key40": "UVGMg21yvTVH2b3AT3c4L7dqv3nxbcW15pLNMNXxpqeMQzqfNYJimcZGoaMXS2pCEbvJJuk8pu6kaPnLnxVwvjA",
  "key41": "3fDpWA1FsBwmxS5XEwDiwx3vhZ6AkQt8bipB37Tdsovvpn14giSiK4eq7wt4bXkbUsqis3b3F7Q2Gs6HsSwDMhNa",
  "key42": "5B4uzXSxRAeEyTEyZTigT1QohrBMVFNerZibQ7k77xUbK5QQEZQJaQFaJ7qNk6GJF371QvSPPNF3ppPcK9sqbCkT",
  "key43": "Yt39grLsyjU5kuEbzsXdg31JP4z96uWV8GLuVQYkDn9qs2ofnViEmSTN8jQxecAhEQieBYbXcJV9wnoc5Qu59DM",
  "key44": "21HKRRcUqDf274Hevrs3HpysPHxymXbTqVvdgHNh8Hu1Gb1RHpjhQK8J46ptdduJy791XKNuia3fdqUKpj6z7WoJ",
  "key45": "3QB2YeWzU5DMByw1PG35xZpJwcmxCdgYR5vpbQZvV7cU6JqRwsVY3dWo7adcRj8X5GBQLNXiRqSBjsZ5jbVwaVek",
  "key46": "4qqWZ7G5a8oHcucAxY2VM6QA3NdmR5cBEjvsuQQE3ULyo7TTrCwNv7C2FKbcP198zGuTm6PaXsRj7v9zx4pN2Grw",
  "key47": "62AhivkD6qYaskSAdZFYdas6g6ct7EemiyNCFZbVBu6qSE5jMtSMB6MuXDxAesHkf5T33fFZRKmJeccor5fLMGZJ"
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
