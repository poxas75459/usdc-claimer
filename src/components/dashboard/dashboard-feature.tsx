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
    "4HxmoTS8deuE1BqPyypyfzWPzHAE6KqRY48ochf55Af6MovbLgHd518gxoGDU8PVR1hhaFNjqu8RAmKApfoqCT3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xqS2xBZbuT4RQ1VVfejpucf7wrrtgPH4SQQMLLWapc6oHas1uBgvU2hiwbMN6xdDtMRRBBpJhxNdmyTGmsdFQGy",
  "key1": "62mkWuvabvnsiF5XaC5VJ24e6Z3VNvRDbxbkgGQ9nHnXJ9YynX1WUDzD14KDAaAuU9mWDqh7dxptLcxXPpYXTiky",
  "key2": "2QSXviSUcHEikx6bpEwf8MxmZX4TpZV71rDi7Ls6J4gfZiyQvss6ULxptnutmScFs5JmJDSwK4RMWHjF7MczYvZD",
  "key3": "3NYaNeQLWNax8ewurBNL36WDUj8dNGpyNjLm2L6iGk8Ko41ttSHPHLDi2tYRzSRDP6hY3FwLyek3DouQYRJneGck",
  "key4": "3vC8hoHFK6eKgPQiKnQ7nqwQyanG2if8R3Qt98pj1pScBHkHxaZQ24acX6FtzHcc7ad1xUDEiAqe3jnM4zcn41xt",
  "key5": "36M1r5FH4fEhCw6f6SnmwH6U1N8M1wkSvoVvnb9URSZj5cHKyNaiKxxH8vbffa6UxTq5ucdQW26knnPcyLYSUmM4",
  "key6": "LZmBvexGBBbvr6c1JBBEmhn643gEdGyhQo68sWPpWcq7BnJFSiciagMjTfCj2zF6HefYjiGEc9MahUFa6ALWqrs",
  "key7": "pBg1cKEnjcsfQLzPkiyPu9QeDqnm16Bk8SkXmFeJSxCqBHz2eRyPZzGDSKUpzQJSv7tQZ8227MjCFdqg1CoDkYB",
  "key8": "4Kthun3PDcu91iZaPttTvmZUyLuUts1fYXXbom5gGfv3QatXAvVjNJC6UuU1QMJ45m7mTpHWGwdugheWadDVnb17",
  "key9": "Tkbfg7P9qFr77egemyi1bWB6KCHdFNo9QaM6Uq8hUoywKD5phKqhv1PvRZPWFnm8ggvTEZjetCWhtt5g3cuNn8y",
  "key10": "5C9PUX3bbjvGaCfxX86wx8sNxokChevtsqkEcfvtL8RpZpEoYaVkHxqXYsg1taSN4QcmFy9i4p8uqDazcUGeGG9x",
  "key11": "2xkuBGfcftQDw31qeQ7jnDX3njdJDScTcTr3nxPFiM3p4M3LT8aVDttVsBonK89DfphSxMiecewXfFNMs8XFqou2",
  "key12": "31dDjroJjjvCv6Z2MZgYMxvprWw98RoesWfMkY28HGkGUX4VNeHQoa2Kdxv4KkkSyjYvMtTghRSJwk5n2ubd3i3x",
  "key13": "57RK7jPGT6JHeSnnTCp1YgnY2De5o9quHt5PKo3E9XJnbGuzwG1KzM38UfQscNh7fp7Qptvfbah46qziWixJ2QNa",
  "key14": "4ysDSPxzxqe7QD7JASBHKW1F43PMPCYDE9pUtJz9Apx7x6TbRR7EYT2Y2Z4KXiYGYiuDAupWxxRYFHVKbnjTspUn",
  "key15": "hVfxAN7MMszV1aNCU5WJ2xotXRsGzonWwZxgmCWWVALPeSG4SV6bvs4ETWJ9BzyjTNxxwU1GK5m4C5N7rLiP4bo",
  "key16": "5p1D4Qq8wA34ZJXzmacsCVhfxJQYqUDSSVgcHt8yTuNGPZ2MnoVVPc4or3r6BjHjboRV81HWYAAJiLxUxw6mDqc8",
  "key17": "UKUePhh754J4H98zWdvnJXsKu9xVkztycZQxw5XTYYngyR1Gm4JEG6twMzfHombbZMc6ixU3NGSFv2t8NDqNwn9",
  "key18": "576XfpyT653fpFEuq4WWmJxFJXey85R13rvGTgRLWdY2K1sqFvbfWhHrzCJncwtFr97yTKh4GVf79Mti6zXJG4AE",
  "key19": "2dMoFTyXaxhnCKhQPQwZps8mVEDykJrTEfCKWkX2PupHmsSofDAwmpnqj5ZvUtZ7uQsytCiUkJcop8mB7fjzh7ya",
  "key20": "3RW3Pep2AVgvpcrzWXnHjFuHUch9Mrh2nsDivw41YcVeuj7BYZTSPiphDyuUkeNbhSPLAaSTeik24KkEf3dgrRQ7",
  "key21": "3jNdngLFrCqswC6zhwA8QErt8feGLSCHhyMckmmpmsAFoPzN52NmXMaxHPHHzncEL1d5jWyYqX5gCnXAuSiCXV18",
  "key22": "3obyR48uFMy5Gy7DgDfjJ2AgA2YmT7etmv2rSVh77jHFwQ2x2nzDDGAcTkfs6nhCkR9PaLY7gyUk1xefpS7ao2xk",
  "key23": "5gK6oMgFNNevaDrknvHo52GeHK9Wa4MayKhJEEL117gg9YYGxcNW4HkppWuNV2ifc2M3t1mZEVqRfcHWF5GmP5gC",
  "key24": "4gt2zucgMrCeZm3QP9fqm6gNyN9dzRgZBYjUbMQEzehchoQ5FZgXWBjhHve1wibdAPLyfoAf6vNb81KSXqvDtRxz",
  "key25": "22FsSVjPymdAu5eVJPErAfkkhTDC3QJHmZGuRRQKdt4p76PT9h8beVa3JDqbbLsZA9oEwJg4uqTnStJtj5NpJScY",
  "key26": "nHHNuvjWwiun4a7AJpdEmD49A8g3vsEBug9BXhNp88iAr8W2KJGpHzokD76TqRD7Fm19L6hqiDSuPuSkSjTL4ma",
  "key27": "4i6ffTFhE1WfygJpSrGg1Z9NYhrnSe1ueQABJLdU2RrNgH4XkzAEY1uGNoG77tuFykc5Lcj3aTZJyosQg3pcjeFs",
  "key28": "RsXcg7ZeGfuoHrfEnQLkjKoZM9pvw5rzvcpYLszz9hEiATrPgNjSeMsuE6DEWLUnTDz9YEv1JQbWmYF3UzMd86B",
  "key29": "5VkWE51cDMRWCbdaj8yWwCZBj9Fpa1Kmu3k4LVTVjiKgkfcV33D3SRksKGHXA7EMvYjHWf6Yc17cAjrUJZ8aTD8s",
  "key30": "4enZ3oJvhyG8UysFNE4NezRnSseQMG2nJvvrqLdWKnN1erESP59qgh3GRakCv3EBGZ49eQEvK1y4m1qZjC4bh7bE",
  "key31": "2vewvybqRaPJcFCVNMvkkxjF1wf9KBR1anGA9KpidAzEEE3RM6KDnChYx8DXEZK6HN6NFLZDEUvxKVpNnMioyrKT",
  "key32": "59ntL12EWhZxMurNtGxo3ohTmAovsT7ig9Nim1qfwqUwZLPh4eoMmdu7cQHfyyPC6TqEHWs2CwYGxHAYBS8w4GDn",
  "key33": "c2Sg1xE9y2WzWcN82GrDEktJcdB2nt5QFPXxkmBpobdEikeQqaCRSfdzfMoYwZ3y6Mx8drECAJie9Mjbk9bx2rx",
  "key34": "66puMtgLDeNTsaWe4Xd79BQLuvufjcoK2G6ku74GDYetFVMEBkiiXFouhPcnwUnn3GgSAkC6H5XJqmqErm5yHHMD",
  "key35": "5Y9viLCoe5N4wi7GnELBZofCnYoZSp3TC868bDJWqEKvX4Pk6H3mtcA8f72FURwoh81bbuAXx8rhZVYYfjpsVj5T",
  "key36": "3fatLdDqdcr4GzvLBwE5t6rrBJAcrZSiGwv8EsD5sUEFgHhsDweNpMUwDv7VFxHHVVgXxV2ukSRLLszTRvKGNEmS",
  "key37": "4CdCvbxjtipxm9nP4kpRgB9J3JUdocLnx77jFJR5JjvqVWiS4FCmexzT7PQVdBcMYukLaP8sehso1bhYSJkd5dd5",
  "key38": "2ZwRShfzsfQU4GoZ9TRcjVHy9Lh8Yom4UFsLg8ZhHCkpinKvFjLNygbR6QFnQUcKEDxpN5b4piVsDYnxLcdanrEg"
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
