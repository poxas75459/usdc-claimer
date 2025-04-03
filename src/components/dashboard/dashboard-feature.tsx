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
    "JV7TgrL4taR2axdPfc8uVbsyTXMEpNCmE4MGUkr6mWVqQbHSPPdrinbt5maZZD1mR76CQZ1Zj2YtCHStTW6SD8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qxwsVgsT9gpniYBB44NnN12DCFMm6R8GFX1gU7gDyAAQ8r4ezTjJNjtA7dRUWcFx3kmVAhDrtqWuvFQjPjonmtu",
  "key1": "2rCEoTfCSdPxaqe4YHk7yL1qr9nUG1Ti5UTWVQUP4Zw196zwBVkAJUqb52qPXd5pDFsEfjXzqmk6uHUxid2twS5",
  "key2": "Bd63LqRd5SGjS3FQF6R2wBw5wjbz4MA7W7uQHYA1xXE3Fts6omCY8AJbgmnxtbreykc3eZcBAiM6wHSe1WPcKmd",
  "key3": "3XGKDM9T4uMQUS1WTCkbcfqEAnAsZjUtGMLSmiByNPBBxCjU9iqtWcA7jMtQWAWvy6EhKVWfFm6XRbzKg6DkVNm5",
  "key4": "3eJ8ZugS7xjYpTJXnSvjuyeuKJYr2mg8zdU7jZYnchDpJsJeG5UEkavnH65sDU7bg3zAT429tDXBRkWastnfL5R8",
  "key5": "2oybrLPseUJVBhAToKW5JrPUGj3qDQP156nyMbKEvAvsECuRd87oyUJbn4fzQciwub3qZGQoWYGoEa9ihcWFvwf5",
  "key6": "3KiGCvFxTXwsUwPYpy4YM1Dekw5uwceXvLst27CjYKc5MFkjFmmSWtf8mL4hPkhUybf4H6JhxfHkkVzrCt1UdM7v",
  "key7": "3JuHVS227yumLJoSiH8UeD6KfRSjNvbZjib4F7m4NzYpHFVn4aovMm18mUbEv66uTmFwga7NKnz5DR8HxDKHLQKz",
  "key8": "FjAZvr1xbN9F1a22Lku5FcxnCLqbFhzSnCRawC44B5hcw173LwnurLLoLZyqjr1XJRWjhgGoj26vMbckViNpct2",
  "key9": "5MUdcDxjXf2LyD2Fq25DjhNSYPFEfQqUDyxJSyTHU6mAjnv6eUnstYHFAVCwf39M31Vwvvjeoe2JA9mnVjbYWVgY",
  "key10": "5YpXwzuKjnkywwdQ2PXxtqrk1zEjrU9qdxGoR3BxYkq89yhjR1LRfNRwReKVhrX552qQnh7BHFnyFd1YBB6QWVDM",
  "key11": "2Fuiu4TmcqWfJCAB9qTpEbFFsWaoHmjYruarTKu68PkPueEtj14DDb6S878bqKt2WDw5mRzi6bS4947SkUPaE4Ai",
  "key12": "3RaStqd354X2mGaFQD4zh9aCSvcVWHH6EwoQovgavjUBDqsnQ8XoC6bYv7r2o9W1anDyvkBNbjxCBv9NGkg9yyDE",
  "key13": "4387E7yseWhuro95DQ2q9YJXPJJrFH825yzmAaNVTFqbcBvGgbFSEGVjvQ4AgRt3XMfa41zn7vFTTnPsXSrn5Yxt",
  "key14": "wdE9ukFjqUTJTSW54nMUZWrpwPfKQWgJ6XNdnr65b4YuMq1KTifmZVVyoAvgABw6HGw4YFnWruaAc3mnNEVAoj8",
  "key15": "497cTSQJvSSzr4BBbkccVjAJEdVDKKQoCrTTL3Sdps3xtn3LBi6CvobBUSXKDsci5YeYu5uhdrBJgsJ9ixNMHxHx",
  "key16": "2bVTkLLjmDAnaqGMD9j1tiEemczPc9YSwJMAKtfeM217y7bFUWF2FLTP7w3dqZb7A9SnAQLUQoBitCRrGWdPRxdU",
  "key17": "5mWgmLfio5XFvxCc1CLHesV29fMLLN199Aa1tAMvFKfZqzqfavU21ueVG6RghdxgtLTU4dbzAjT4STf9yUmoCEHc",
  "key18": "Bgy15C9thL9UDZoroQXRisMSfHA8JnSwXsaxniWkmi61n6LDCWaqpQSj94rY1piPgZMHfxHTZ2VYiYyshHCJSam",
  "key19": "4CUkLMoSLMUjTAtGLeFNyNHbYQoe6K77V6qzTyiak7UTgeRbW8hBYbVYhrU2Y9KkQ2DKozT9DUxWAfQ3UHRLpN8n",
  "key20": "2y98rXYTYTR4CWTxUyGAdU55V4KDw69BruYNKjkHFVPEGSyooY1DTm6uuHWbGkRC3eqS5Q6js3p26cvenAK7uAGg",
  "key21": "5ik21t6SLWD8UgSXQDNewj3zGYEmy9tWdjy6PUv8eTNuSGMc6HVfskYJYz1MqeVi5tf4cPzXSscC8g2nV5RkanNk",
  "key22": "58c99gmDsg44BBLpUwcbqPejPtG6keu1WvHjNdoQ9eJkz9pDtEScdxi1NAexHdsT5ry9W2RhMPFn3CSYZc11V8Lp",
  "key23": "PTieMsXFJhnmo6iurbFqJ5CVi92Z25zx2L2BRmLTekwDgZuegEorjxe2gM1zA4v6mhtRXSSNDbWgq1KwRc5Pknq",
  "key24": "KHm26eytLgL6LYSemN1r1uN1rwd8NH591TdindyiPXYmpETrWCqFR4TBVE6451oasUB8qPWyL1Qkm3r53EzYLXE",
  "key25": "3eqSMpUBLbR9vF3cqAx8WYGMKiBzkmx4tVrSTvweCM5qxefhhckkY2vUaHLyYPBQ79D5e3MhsvssajPm7pH1JCmR",
  "key26": "23uqA4qZ2t4ySMY3wwDVeeUVy6sDwchGz3hZB5qUfn3HDAYuJ6hJ312ProRDKiHCQn1N6XsqTQ2d2kgPbnVpYWz2",
  "key27": "NY4szeVbEa4sL8he1tKbd5vLNYvYq2AVy4q4nfq9P4bQZFxWpRQ39E18BaqCauvuQV99cc2DRYycbPyGw2KcjYG",
  "key28": "4KaSTEVY77YnYcLwqrw2cGPfunAL4p1arRSE5gbQS9Yo1PQExcSupyapyY4JW4YChB79cXxQufbh7PddgmgDUEae",
  "key29": "5h7R2uT7yKsUxY6bYANXTBDwEakr3vY8dXsBxSzTqgZdkbYmQoa7zCvRcjZRbHJgL4MGFaexbfUN94Exx9ehsDV6",
  "key30": "4CLieeHy4pJ7T4wnvBnmjxZgoxH7J5Qfu4VgcCJBiMcNXzEB5nsun5qohxspHKHJ5MbNnRiuoTi18nFSvvWdRjQs",
  "key31": "5K2mDz1jExwTTzUt7WSr78Hu2g2a5gk8tag6riW1akUVamabQxcUngSP9hb3KUhCHe8ArdJjHUngyyLtbhsM6vg8",
  "key32": "3DBQGhSBbTpALXM8fUN7BF31MycXW7dZDd1H5bSaerwkaLSxr4EujZWbkU7XiJRtyCYJU9S6wCyQyhxecUGbH28L",
  "key33": "28FoUhmugyoDnJjtVmQTeXT8TM2vMJWLszZEjkkNsSbF8wZSVLzTfZBowfUBnCtFec5TJqEVA4cw2d5LMETz1eAH",
  "key34": "3NPHjV24oCUJiDqaSacxxFB4BaawDKVkDFhDgKrFVXvkGP6Xc9HNdaUDF9A2HtkT48gRms8rkW1KND5QS5QXs9w3",
  "key35": "2nYsJN9Q7eC6sripnuaizTEmmbiXVzti7hefjtaf9xWqhHSwhMCRkeJY4RPyzoictFX8HBZS5yFTbhsi2xMcjMwd",
  "key36": "5cn2fYK66HTYXVjrHX2XkCgHf1Zc7oqdjX9qrnU1HNsxHygMc8rGCaZgD2736A1bnxTZCZKnQgKaWRicYmVcoBqB",
  "key37": "2SsWRPf4Bpiq1mvtDbzFbhUzzvvNBv75RDpy7YaGNu6QuSbgcPvN2YSEbn8G92K3Q3gHMPJxHgBSbmRFCCLxaHrj",
  "key38": "mExfLcLYSg6SY94P3q2sd46cneadvdeAPgfm7H5Yo43xHdMcTibEvMw22iPKo71zZ2wtcSakGTYpcFH8tczcFNL",
  "key39": "4wAgVWnPpYrXn1BvnMUmGQC3Q1R6amq1aCqupwVsVzD2dcLRJHSBrQ9nrgCywTSxuJBP4dXs4TpP75H6Uph2hTAG",
  "key40": "2NCdZaG3UFtcYhH2h8DPZ5WpictTjsFy5Vhmhpy5zYV3FuPuiaL7LyzQUvR7shHssGSiBeju76XeT5P1hg6GML7N",
  "key41": "5EQvSGfZXa297VPyrRn6kpW1wUMsAVkehAanzEhHLwLNQPQCf7zR6JTb75aA4WTdLm4XcC6euzbgqJpcp4kuNqSq",
  "key42": "FzLSShCH544zSz2Pyipxqbx1AE3BuoWPhwHXD3iJxJfx112qqCQRRzPQkwsX2rW8Kuw9HiftkUQzTiXZ5K8mYjR",
  "key43": "4nhXP8NJZbwibUwRD5Zyfu7qwpMj9t6kR6qMuocTvjUwfKMWVpyoXzi8ZoaszEC1XdMP8ND3oJMTGEsdY2DBDgjx",
  "key44": "5TzseyVcLW5YrhNTBN54tWE6zVLooubmFozS3cHneCTruguBbtxU7KaVuVZsuhsCsCb68D9yBKbpWLVfYXin2zGf",
  "key45": "Fp7CNk32G3nUYg7wm1xmVUVmRS4CcAa7fL4qQwFD19X3ZBjqadw1Xby46sGfeVLvrwCYC4MxcZz4wBp9DA2bktU",
  "key46": "61s84mMLBwC9NWGv2yX8HkaSqV55WTt4xSJhx65T16CbZLnENzwYYS6hRHWthQuWRAaYBQnWXGn2X4J3W6ujjVKm",
  "key47": "xXApMZoazWGb8dPCTHUAAdUuJfsHthcwTqh49oohQX7dotMfPWTEEzwuDZ8YzARqSnFFFbyni6D1N6AnFhoSWZB",
  "key48": "XY88QrKzA2GA5n4eGxEEM9TUxzZd15UdUBmw2VdLmDGwAuSqXBxnzrPPwtoFGEg5LESQzBQ6uwQ7UxN5WWuKYBq",
  "key49": "64Wzvhhwg2ugz1u57iJa3DdZSRYDjSyXPKxy7Qx5FG3DSyceJAGVZBCY68yRns5ChhBSFQ6k1xxN7Wma5dYfJUv9"
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
