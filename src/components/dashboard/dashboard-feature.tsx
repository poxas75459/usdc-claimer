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
    "53aWBnmGQELAL8rJ11X5GPVfQLBNj1yKnPMvDWRHrmhwnUePeDf2YuLQoPg6yMciLsgHzfiwDogtG1g8L8mxxWJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VzCR3n5brBGnydSaWsc2giLvKLKuG931zkKiktiz3w2d6jYKWeUtHJQdDnjdcmekQUKAvcACWXgWZz4GDWHuZ4A",
  "key1": "5XdAr5tc3bSewMoacEdoKibfqDuQZJCvCy78SBMLQ63JgonY2yMa9Exn9zwJJcuhoLkpwwPsxrXy2BTCSJLUcihN",
  "key2": "4WieT63d2pxM2fpKQY8Zokd7iLa73DJh23nhBsAupvH8VRTWEtVggHResJrdPtMkPcT6956gvx6Dd3dwEFtH4BXg",
  "key3": "34Usr4SxdHSj4BsLDBCsSfRaouGRQQy7YNnmWbk8f5xkKt7cK4TdW9JEUAAVKrhGSZ37Pp66Rjn9DVNbNd7UDz59",
  "key4": "3FBRvL5VpDiwaCFpm68D3Gh2MjYNDUE2FWsRr1gj5quDYPW1rm41EMANQrqwSNrrvJpNhW8NVvi1DAaKYVt9z8i1",
  "key5": "33VNDPZqTxaKW5pmxsM3wzMMiTLSkCyjXVJ7SzcpQ3dqGq59XDcYLFoFX94HgiCi85ujVC6PYtXLwChDiNgDQi56",
  "key6": "3vcqQ3fACdiJo16j3LCi6isDVhLKowUquUQ3pAXHmPGAub88qBiNY4kBM5aoP3LbMDcnQeBkcZHwwgUu7fJw9Edc",
  "key7": "2KzYSGeSn7GYRYucfUMbxHsA9RYLhxCBUtBvBeve5DVWq1QxG4jhFERcP9dtk45GBLoR1NbdgTwyALxrcnMATmnq",
  "key8": "3aLEs1d8GhK1gigvAtQkh8zbNedkMKSqjF9puExYdY8qyqErEkBKQED5g34z34usw1Ph9TCkBzkXF9LvAHuXF1Jq",
  "key9": "2aDE9jHAKHasaE4PkbdbPbcRXYcvq1JrQzNVPmuAcR1CtvDhmW4Z5z63XXG3TpGCRXvxfA629PN2grHSmJJgALAK",
  "key10": "38yaEXUy1b9gUENx2cm9yw14cXxyCbzsmCkf8obGGSg5CPrRmPE5zTEUTA2ecsJsUNkumeG16nNKLs4FVSvkMLyC",
  "key11": "2ZUgJURurV153vSS5Q2wnL4GrP68v4XFpEirrydzQsSynSang6ssyC7pNDeudsPDh9Yn2vdxS9SovYVuDy6Niomc",
  "key12": "5DHiYgDWb1wFX5TumBNo731CQuNMpJZYuKtdHbJmBBoArg9HyCmTUb6fccQswCXNeWFNSVTztKLWHsnPpVZdyBJK",
  "key13": "2741yueSRNgK43uLm4X54P7CRRgtPEW97ZGEEPZS2Fhv4pGj1g99Gi3N2ivxETxrVsNDEjvhHywpyCVC7zwCyxJz",
  "key14": "4HgECJPBouCr1EAcAh7MC4qMLJdSGmVKLJuuT3dFrkLCgHCaVeLdxZ1x9cfAjJvE7HCBeGU5tJAo7VtmmMK3fhtn",
  "key15": "4GFjBLU9teYzuQWmAnY1azshkfn1YMUzar3qUMVw5uG6rrSZgGyoMBmaTJXE6xzDHMMaeDnKRpwyPTJP2SxFztvr",
  "key16": "3KwxngBKr56EDpZ9ww3aEkZBM72Wo7jxqvk9VNsJpxGDoAigRKokqz8Kd2jSYtTsYTMzu588j4zWfRVsKstMbUJe",
  "key17": "3YCWBLyBFjdGUSv4sgzD7JJsK9YAT6iiiCXp1PMARUfjXC8BuAox6Kbw1g4zkUtofegFHhkgx3wFL9vn86n4rb4F",
  "key18": "2vzNCAfzYmiy4ZnTJPFBkDuhsSZniNy1ajrpPrsr19CRY3zhiHTcFRZcXmd9oWgWapDKxiFVp4P8K4Gq6aAcZ96T",
  "key19": "2DoVryFMXdEqyxedWi652zYHSo764LifJH2qshwCQ3GbB7UKThKApQfb5RkeZKu4ZpU2q65xfHzHSEE5YAiF26Dx",
  "key20": "3AebykSLkFbN9rekKw2UxqJ37B4GZUNsvjF8dnrQ1DBhakwaS79tvw4njpHe49VKzFEsqDU1YuC5jZUU6U5aGcaF",
  "key21": "2eesDwkBpRb9QpfbGTtS6Ngfxo1GdccQaaNNvCsmeAsrVeC6u8exdZUTNEbo22WFvYTP9uYDWJAeo2ZVjLt9vcHf",
  "key22": "3CkeHTNFXxC49iE2VqiBbu6Hc5hwx3PQdyufYTum6KfDD1Wj3fJv6RqWZQKtqhAWEKntCey6k16JYQv3e8toeX6E",
  "key23": "5S5jvMDiTHm9hyZ3adkwfYEnSo2EQoVTnio6zaqG5kH5VrdWVH9bnRe1mTvYFrLefcx5TzsiXFkHtciTPcynJkm6",
  "key24": "2Yj1zoNUdv3YtVV7UsytuEfytaWiFUoznwr1UrXeWAyVmG2VzXcqwejcy3JtFqm1F1VyhWF9o6z2NZJp7KsPW2pe",
  "key25": "4a1eaykc1cKQHbrwhtad9VonkPj2fJvzNfeygLDskEU6brr5e6PPLwWB292q4o3xt4impH3PaZMbd8x4bCjUuTbK",
  "key26": "2LbS6uoBnACZwFb2yYKZg4H2mkQZsHzLpdQZ9kLoHc8RAvEzNiYgBZybcoqtckJZnYp1iRyL7iSAVnJMH9329o6g",
  "key27": "569bPQeRDGjQsXb9LU6CubtxdShKoVczDbhqkDsDvzcRrxSaBAUNjsgK5eT6ihGJN2pTb8mVyGcDSXbrC8JsrEV2",
  "key28": "Ar2gQwDxrbGttKuRsSJso9Bg7xbUhxBrfj5SZv5sg2dTWgUZ5QmSbWHTZF2RAyPvHcs7R6KgqE6MsMJMpe8FXLN",
  "key29": "79TZZnpbgUARA4pJAZJSxSGRX9oQii5ACTKQu7mXouaeAFW9p3t8DMmj3kiKuGa5DxLGvebzDRfHP4VM6PKgtjV",
  "key30": "53fHApBzfir5AJzD5TFtFZrZC5TRBf4DL8LwS4LjnF9rjSamvtFALsbPVBdcAWSpoiTfbwjrLRAxsbsdbZhiMCJS"
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
