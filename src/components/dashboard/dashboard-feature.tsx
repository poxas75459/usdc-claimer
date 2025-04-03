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
    "2P3Ksvzy4crVpy32GWrmg3J7EYFvaNPnjM2KghfFqbGkmCnb3TkPpWNM2RZXBKS26fYyG1CGKVr3bhn8ZgTqWLky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52bWu2M2BRPYFjz5SfaCKWNrkVPqZQfBrkSVX99N9VYyfHkZMsa2eMKMFntXd6BKFqZFu6GeDX8Qmk1tpZYDTTaA",
  "key1": "3o4g7fsQqQAZdpBbZwzTia7rCWiCwHR1L5DARVXAL6UKS7WUHyoPUqLxSt6PkJUu6GiJ5aBU4XzeZVKBqKMLNidX",
  "key2": "3Zdy9ZgXwnvwRdhPBsQ8Pn1PgRDY2FDaGGQ41ztj3exoW2dh3rCRGHTSFXcZJMZQQNwZai7oxXc46tJNiKg4wq3i",
  "key3": "5Uyv9e87MFuBCkSj4wXgjQx9bQivPqCze7gA3pHcvbvGpXCiXoNKg7bWe1bjhyvrf5jG2UgnA1Hw1qLSk6Bh2rb2",
  "key4": "3jcmeHKLCf8MJcefNj4zMPPS48C9FK5zPUcDJLogHLf3MJSYTfgpEzUtq6ThDvRrSZZLWZypR1o8HY2Gn3VFYe6U",
  "key5": "3kuDWtx69Aw4GaXsLxAfgxaExnL8jsSVKAAv3Rf1DHapN1Buy5MfvVGR5RScay8bRjm2cKpZh3n7ME6wxTs1J6H6",
  "key6": "ew9Pa5CFUV5Wfj9FmGjg8eeEfHnFMhtSCYHhEBsBP9PaHLxfnYwQvHSWVtvpnNTo95sABhBbafUmCWjaSouD9rb",
  "key7": "4jHviXZL7mq2auv7f8LyUiCjwTnJWfs2KAQM3t8MfMAArF2oL2wLrMycwgzKGiGeGyuP6obvh14oZs3C6tiHasu2",
  "key8": "4Yc8TKUNCC2V3j6QewnoGTwAmEriWfbChX3haxWwAm9fX1YAz4jkrZDP92Z4r8DWremKvxgYPa9c7c3x2f4p5wQC",
  "key9": "65gXmcRVbeAMvTfEX89tdD6NGPPyhbD7VmPKzgh52oizQDGhfoTpZHpM4JwcgTRW2zEt3uWR4iEDmH4wMcFY7dx6",
  "key10": "5iNN3yxdWtZVZvvoXdPhErppRMN89MKSAaXyt9Y1aDMiXmvTbpzJBrqRW7KNwrbNF2dez4pk3dWUg7EKBKZxmjBC",
  "key11": "4t73MQvgCiotfM2AvLaqfU3ZKpCsK1XY5zjXQTPU12TCWRQruR9qputTge5JNXsJRtEidDkvcxmEuegxEA3dGxT",
  "key12": "4qwYkHNhh4oeHsA9Yfh27WQEu7bofecz7sRiJ6yENZgdHxDagCQCaVMRqv9yDAysmgwTddBj3pCQ7zWYd3pdLa8o",
  "key13": "4ooz7AsLjexyxJyuKUpBpXN9wyz48a7fRu7JgkwLKvGD1F1xEDW4eHMgpRDJ4z8ob5fz1uMDhimyBuYZUwxYLG9K",
  "key14": "4ei6DYxxj4ZV5SdWefWNqXe5vLJjmTYMSa2N1tn6urPfj4UyrhkJzkjbDwb5LXqXxUdSCs2WkajBHuAB7oWgapCL",
  "key15": "4TPoTXJNYLXuJ2xTkbVhZACmGTWgnVNHvU3ShvsiRrs7n4ogXoYw5pn7YHMnbesVtyLu7rRreQaxogFkZdPZP7px",
  "key16": "eVcqbKY9NzXuL23iMD9ngvgaozL1pxV5KBnSDigpbr9s1hmh6VmyAZ3439Xkpvzz5kYNnViJs3a4VahPBD36npD",
  "key17": "iYN6deaKUyMvb7ZDCQQFUtNAQ6VihST8RjWarzqtgaSxK6y9FSiTvwnk7C9bvbZgCNXSABSbvi3PaBToSTKULuK",
  "key18": "659itGvRcgD8J1RCp6W2NhwuT9CqZmCrq8p1QREhkzgdvDGtx8kJVegbtayeqXRm6Cmw1X8sMRsKby5DYgpYJoLf",
  "key19": "5j32hvNrQXtr76pH5FH2SmqFefXVRPFTsdc2t7FxtAQjpepQUJVbc2QQ3sB2HKGfCTn8Xt5XpPmyzyRpTiYimUXC",
  "key20": "NnoZCUsrL7YC3P8V9fdPeV5wLkBi9GBt9YMUmhvQ22SAeMo5K68hXFBRazmaFNNmG8v4cKzuAEW9vBVZgLBMeQm",
  "key21": "5ve8X75wA6Ckc8QiqngyScK9LELFW7L3HXACaPdaxQCXqqJFALvVGoCAzrhQq7rLERMKS6qahN8MoRY54fqaTd5C",
  "key22": "3vdJS4J5BztRRSPo9m4Qayr2QHkdjxWBKR3PsyuENqyQMBJmUXX3Pff2QhK295SCjxAtrhWfaxMrKFQkCQYLhWdf",
  "key23": "46vGvNCQCdg9nPtqHmfMGvfMEmU5k6yF5sxY71bjekzRy1Q6wBDGKsLcm4A7TnFwfZ1HE29La23gBPjTh4nsd73V",
  "key24": "U2ZrrrkGTFBhToU616vyoo8uWaEhbXiD4PP7QnYUmmBExa7bSgFhYERhHVyYoeqb4vRSrwTLEEseidKt6eGxa2B",
  "key25": "2WAJsbjQUy8AL8drzqNdvsxcar64H6V6UpboDtcFwrm7AaC96UeE3RyWkNWJfaJFmmrCu8odajPofrpdzEv25TUP",
  "key26": "5jUMzX7TVgtg5yQ9AUCgusqd2GYjxfdKQimjzWYCS47Uzz2Ge9MqDZSBzCcwdC16JmKtrJxQu7VASc2qKh61gsNb",
  "key27": "YN56zR3xJjR9YMhMCrcMQjGRapbrPPjQtqJGPveeZWmPtE8vgJ1WLpMLk9Qw8YEgMFcpzD2ZPT3VgbTcSW815AD",
  "key28": "54bfyMAEQT77QZ7segbwoovR5oM1nL97dNhSWKJ5mEZQnDDkVQZ8Eu7BPnsiRisXMyfk33HnvfG5jM56eLxjycFX",
  "key29": "3Rb4buYu7fMCjHqswMZAs1oFaC57oiYwE2KMeReWLmQUJiftsnUJCRWtuqejsDmfsMgZ62n86AE5Y5VuN713hseJ",
  "key30": "2HXupoYRHuduvH8aTXDeniKPDB324HeeDAh3P8scNtXmUqAQwQjbKV1kAseL2p248fqUrHCjq4UqbXdZiQujG1C8",
  "key31": "4RLNYFxkvmRoD31NUUZHnGbuVwbUZxovzNv4JmXr7cBnzZLHNA1DHKfFyKmk62M5yzjsKxScr91wNa3Pxgr6TfS4",
  "key32": "5p4bbLiWb51ZFDZGKjTLWieskWcj8JLTdGiqoWNBcykvGKkPHzkcNDzsigin3Hpwm2Fp1Hg3BQk79NtBk8Ym1cbp",
  "key33": "4AaP78qn76f3avpx93csLR9wLCBM6xFymMr2pQEmKQ9ui5KjH4UZSyHQotQ8ZRukRjrXDiMyMBqKow1xJs9B6Dc2",
  "key34": "43vKrBKwa4eBKtxjijvVGsenmAiLqhgK27ABxPb11p9FuRzTW1obtBWEppwEhbWk7RnvUSU43njKGyK9za8EQ7LS",
  "key35": "5rCGgpMgCPqzj9DX6XactQMS6Vm11sQKeQcvPUN8YRt6cYg7NjwykFmwkSU8H1LRho8u8RoSL2ttgxcjVne9TKds"
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
