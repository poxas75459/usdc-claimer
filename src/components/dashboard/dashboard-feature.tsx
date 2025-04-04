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
    "wsEmpWXA3X11HC7bKWWF2vJZ2RB7CHkLra1TLSGi5sy56jLySvTjrbTiT46wcjhC6jBiQSzpbvWA9zQSKq6ksop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z51KNGWVbWTq321Zv9fTGoWhPKetLAshVtHWcDc31fbpzoUHpkAiH3vyGz9KeoTiny9rLwhBqMpv1Xh8Sg7oZdJ",
  "key1": "3VDKMbZsH3ExeRBG3ENLK7Sq3ES2hxBrcy1fUDE51mjqA1YenEatFyumbK9r6MMYabEdmGEEja43RT64aBkcJH95",
  "key2": "3A1QbhRt3gbZipV57UZLbS3T7mQPGbfx7YZ28o2PGvHf3FSo3u4k7tohhfn6No5HgqYbevVL5dwjJi7ohHmg4XG6",
  "key3": "5NsGSKZ5RtTsjZtGExebgsDQd6U8AV8ThNmQ6dvRj8bHiDoYk5VHVCo1Ez3JyC2aJ72aR6C2EgSZ9ABkkXpoXoFg",
  "key4": "5Pv7gF6HAmbMg4vPfmnfBhpxty8iQAV5ULJhA5HSQ2vrTN1cmuoFC2cH9Rxn8P4suaSEQy7nLX2NBqSavSuLST3w",
  "key5": "2uE5z3Z9ZR3EYGsG1zRtQDDNcsLBM86yfis3ndmbDWzYLTUttN2UKaZNgPes7GrHGKXninVQwZatkBd2bcobjWxy",
  "key6": "5EY3Qp6C2zwKfCUy1qfE5QdUUEKxnqWaBef2oXVh6fJk8jtdTB8jnDxDXnbHUJocXWbd1gnWSpDZMmRua4DVKXNT",
  "key7": "2CrDMjTgcdt7ASFxUHQZUv5T3zkfWxFmACoo5RrqWmg7yb9ZS99EBDUubMoFNmQ4MHaCxATvC5VYk9GStjkocSi3",
  "key8": "FNt2pngWG3DkUGvTJrE3dcvYshV7EUXcgyopf5cRBLfswYRD5PC9y7AinfVRAEdFJdTPgNceLBjJp9CG9WCbkGN",
  "key9": "6642yCXAYUjUj36wuVwAtvdVKykHi1BLFmBaTR8scoKgzBWnR8SzNG5YWtsGRJRJjVQJPzMdzTuwQRNmsXYASGKi",
  "key10": "4LufisD3jXRLZubKGd5h8KBA2QCqfsHot4HPpS3DFCVZP2BADNa5inQBKnXagTGAoaNr9QMWZ9XvYt4J3MKx3QXE",
  "key11": "2fYnQ9maxqW3jauE7iQCW3KnJ6DcxDuCqVuEYoqAwuGpJAD6SCyDdUhD5xYLGcFcG2aYvtfbsYkLY3caKUwipngR",
  "key12": "22ngLxDVHbhs4k8yAYyuugMQWUb5cmuDSFy27dmtzVobFRBdiC14WAYVJXEaBojMh4aEc3oEDmxFTqvgbQiH8vPK",
  "key13": "3sEz88fk66ceH3Z4Q9KoApZy9cTsuDpgK5Mw1sQvdRn1WPigyAvG8TXLTEew6SeZPCmVCDqSnCxreSqT99iw9JBp",
  "key14": "5bxKcocBRAyE83DJ3Y6vZqr8Ya3NZLdGCQbUmxK72MXF7BTAwZ5AF1YD6mPDuKTJS3HFwvxF263tdGX5TD889ehN",
  "key15": "4Aq4jJe1sE43ZsvNWV5T3m7TXd5PmM18WGHPyKzRvPdgRuUf2NwXdnPpb2DYaNscWiPaRyxMuhfDvA1sB48aMppW",
  "key16": "z7LbcaCBW3aerSqhPyzZkuzMLfgqH2mJxj1GnHv5FcWo3371x5HFRTosxe419g1296C4ZFWVSqwQJmhFFZ81G9R",
  "key17": "YJktiQDP22LQgJocM82znj1LxokjWpvBxxFoRB9k4hEReVRvwLDfnbFp94EGKoLzbSPqvzS3zuV4dpGsag5sUUF",
  "key18": "FnWz69oMetiAFxxXSGppjYNBv5VV2Ms7LdBfJkQYg9FP3VicoBQspiUyiYN3HHPQA7F9rTWJ79zZsiuHmNxzfjb",
  "key19": "5hfjhQ484daauJZmqAGNe3rtLNZDJFmZCq6d7ozt14GuAi4RGe5eP2KGrbFT3RodhrMdCGppDCqayv5P4sKehvtB",
  "key20": "3SmW9ZkQeo5ixsRgot9SWPfdWrxxNDgZww4YfKR89LASXCxsghKC6AfyLWmppymXBn6nSvLmFef8GuDRxu7NtGhq",
  "key21": "44gcmHpZ6PqdxKwBb7iUXkmMujzHLKC8SKfk1E4BqvZ755LDbErnYef8gBhVsRVUQ8vL9gJzAraor7xAEFs5F5w2",
  "key22": "5e5pcJ8RL92YMdjtbhAaKksEB5FYhmUrDm6WHXnr5BwZDuX6eMM1TK597gt7hrKRuHGV4fuHs7Yym2Yb9qB57uNv",
  "key23": "52WBgNPsUHa2BuiTQNYYQYQ9MuP3ypZh1zp1cxRVG3KVXqetjV2MgT6bHTWg5Papxdxhfnjh1Wny1Tw74YcK3zJi",
  "key24": "5zzMXidaUBs5FTgAS2FQAjZnKJJK5XpfTaadYWWcTiP1oMD9mbUzsquwxMz8sYKNxuPwfWDEcKgHgCHGYxDodfKr",
  "key25": "4BYBs4aW3bWkTLpnarmdUErB77RCM58rbasCLbAdXhtxqKmnqGZ75e9YEh4L7cfvU7Meh4macBKB9oZkXX57Qa6w",
  "key26": "66jFdLzzH4oUec8gFS7gB8FuYSq3hLQZyJSfnzxso9dh4U1hLDYbQB635nb3XDdJocXVvK6rznZL7Yr33pxeiAAU",
  "key27": "5ZovgL9qhWsg1nL1MMohW6b7vMsAxQMKWdQiMYUFtz9A9TEDaEmYQoWUJSSdLNWoLs2f6ut45jEvX4YbzdEPbaQe",
  "key28": "5zcAoRJjqCPEd7viDhVBu4UMj3tWuB8rd8rsEPZimYvZXCoDKZBFbUfx4CGfrgHTPo2sayoFpphVkssATqbcRrAS",
  "key29": "3cxhjA64LFY2kQCNFC7fP1kH6aLi8Zt4jK1DtyW8D8qyYtfhTzpQd8HWL4UkcZUg2Htmb84XEcwbugqFCGA2rUcE",
  "key30": "4zUrLpxukB7FviLWUgoJeY8AYqzD96QqvM16hRoRMJFua8fd5cNcoXZ3fnZYdy3Js14YHxeBjJFc7hmwkcjJwcqj",
  "key31": "5NyV1L7TS9M8wDXajhZ8LwAWpcsYy6WmYKB3dmqAwThsTJbTRWc3t8kY3AEzTuXjtuxGBccU8xHFmj122BfxRbhR",
  "key32": "5CcTY3iHskX3RrPM1ckAVe8rN1QZjiasL1roVQdodagD1QgosQQdq2sJKFeq9MDpELF6npSjzwtQ87rSuwDF2tAd"
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
