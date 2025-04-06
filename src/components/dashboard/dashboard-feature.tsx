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
    "eYmnz1WekBvHU3U2qgefkRaM7PFYMvNw77JFPy9AeXqbQRekTAaweWiKMwqGije4xkcQmbFEUuPNL5QixmaGHMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65q88xoAaPiWQsCgTKQGbRaC67VpwvJ4cKgweVwdL8PYywmjAH5GwYFxSvoAcwRqNC1ttsmL4DudaWBcnTHJ46i",
  "key1": "3sLMGxiSXvoc63z6F4zyx5ydUixtiDtG1oW5jgmBqw5MWdfr78NmLUpf9r1fPwvW7p8AvhtCWdCJL2dSX5yqhHQn",
  "key2": "5BBDhnNiRPWQdRbjnTDjA6XkngPLiMXWphVUEw2ZXNCsCUjnXUL7EN45YUZgYbx2f6d1qYqWo2XpU457CKYfAThM",
  "key3": "3SR2viPMCWdq9XHKPHRqmDTUB7qVFq9JwpUq6MkPe2vicjU7KuZgpPxS9fG1CtMLFEWgoZrtPoucVeM4ZJQopu6K",
  "key4": "3zRRUagE62oYf3SvEd54HTsZdM7uprEFj9hXwjTqJ89WgA9aMWcfGUiSJCydCbX6XpBwVv67b7tspF2iFMpmmjZ2",
  "key5": "3zPqPZSiUjrkhRFMAms7HRKsN7Mj336nJwNGNBoCm51FdCUWX5DQED6C6SsJ8aMCSLTS7mmgEYRt7e1xphxAHmbn",
  "key6": "4nwpdMTJTzD9bChXYXuQ4EYsjgSx8H2AsQvxT1Q7jVfGfY3sJKs8d4ZauyFbYCJQqABgtGtNPWqvhYUsfNgWaYDN",
  "key7": "31aG2w6F27vnr2LZWX5GpGRxioukY1dAJDxNNGAKu19hz3GMDUQDG5JFoy94Q2TPCYZo3BWGaRaS2iWTXGwXrKnA",
  "key8": "2L84onDgt8wjADb9HToZkd6EnJmFnMjYani7S2JFStnjvrWHK5QoWyHwsbBvrEM5sSCCxjfGj1k36zyp3WNJtPRc",
  "key9": "4oKTAN2yqDup8MgvJ1eZHTVpkzkJhuL7y4jiEVQvLFSjksnC1Z9pzcsYAg29RUkHtYXT7v2KXmsfrJAZUqJ71WE",
  "key10": "4Vx4b9qr6FNixxsRBVYX7m6zSdRZjomv8rcP4nRvdc6KfWnkUbfkkyQGMvE8UD1CirrxKu4M9TEAVAefsnKbPgtt",
  "key11": "2WRuL4GFtLrF2Mmy8tNQjjBvLVgYSGv26Sjn9dJ7caZuEehMsjdx8FsBPvsaggngXm84WULmBY65GVMTa9iXVsa",
  "key12": "39WWSyiiEG8o1yWWCVWcDbYsKcdREg6eMMLyVDnAkcu5jbAKudc7SigfSVbrWbDLc2sk7WqH18pZ8oAcjdFFphnL",
  "key13": "4b1SJ7eYpW3W9W6i6gYhNqRrkUi4QD1vhCEvNNGVwuSNZYNBdPfvYtqZme36XfnGP5CwcrZBVsQPs8NtuuoAY7Lu",
  "key14": "1mMn86JVJAyhBEx3YztNMDMn7mKpSmZgC5crBxoArnQnv2PYhBgLNaaadzMhxFV9jW89hXqAfXA7XSTUp93rjgi",
  "key15": "4PUkdnfsqunYGseks1LpyXEuzcTSVXCZTQwWLYEZ8KQA4S7zNQPt6jhovpXAPrvanxorbvHGqeZY5sEQjj8dv7G2",
  "key16": "2wT5q9bWy4sRGpGsEqPkqecdPiPTApxXP1XW95nAFLcU1Bw27NX6AuhZaNKEcXmgc4frmE4sw3t1dMroHyMaTUXW",
  "key17": "5aM8k52MtUwqap4FovRn1SjoWvMNkZpykBjeetWNATWc2iG1YMQDx8aZ1dfQcgxfyoSMxPWd316i7vBEDoEPcKRX",
  "key18": "5TG4fLHg3wxFVWFy9avTtnkBzQYGRgZJeuKKZYoXYhgRPb7wSCCSgqjcPqwvbquX8KEBFDDaEsyrJkayB3TckhTA",
  "key19": "GCbrjFhNeV27VA81A5Y3EAw9RTLCQFQwAz5j3XDn8myrpNNvBiH9gHm2aLMGauUaPQXeXn2WCqrTYSimBbiVA5B",
  "key20": "3Fpx4QRLreQSgiesw2V7kAmjy9JdgjpJZRWd4zFu1REBQwT2UGw4AjgJ2AcKBXe2y1QDYo5a6BYEBkJspZ2J4VHv",
  "key21": "3qi5JjdQAexhwbPMoNpkx3DN8R4yKUSYpCjBPMLMtxf4CvvuuXHwamewT9cT77NgXFBjkCzH5RU78t2Pqt9m9paV",
  "key22": "5LoqsF6EUG4ShmuZK2nFrrXLKDNF6UxnsPCfjzVvyL4CRPJnuZ8R2qkUf4YN91i26EW3NvNNDs2sC7dJVxrNZcVG",
  "key23": "2neuspsGGnJsNjTwBMDmRiWNxUZvh2iF7L9iQPAUky4zMAxK3rnMXbhabZs1rt1TTZqFdjpyNxYyXTEN8tsK9zpA",
  "key24": "3FfX5eG4EeJxRKKGKa4gF8FSkbNzrNR595NnrtUtE3xGk4NTsFCHBSVupcnpNHd7RM4Ur26Uv6odZqcND8xnqtuD",
  "key25": "3pTRWGBCKQ7JjisKN9nWxAhhkny3ZMDFjupcC3AeiH7PpF2Xk5TJx3EurUm8oCCDLi51ddZXwE8Us91UPfP3Wj9R",
  "key26": "2fdhQhNzYpFBsQmNkq1167o3wvpvcHMHkkwnUd2zySqsw3AZ5cnYU4FpTVWzjrqFr2cutiUbDEHDR3YSF3h5Z7rB",
  "key27": "2UiDNjMghZ48374jUMf2VzVXi4s1vmXLLLFeryYgVPRQYWcTTeEPPqnBMh6zqAhWkRSvQ8WwyzNYdRXRQMGbPf5L",
  "key28": "BctyoUshsJtx1cyPLf1Yyg3kVMScp3HiLBAqWXu84FsDXCfLhzLUfghtiXQcQD3uLZrJfdZzsKxuSePsaC5D8jW",
  "key29": "7gYWTB3HDHF92yYRXUe9e3ZTRQbZJUhWSKmT5kv1Df44wBbaoMfeYqcSxGkzLDwqvshh1k91WwgtVDLyTHVN1v7",
  "key30": "4Gyuh4Y891wTzVEMDhdQ4Wae1gx5UPfFXdKKViWHhUK9YS3zWu7JTqD7QcJca3if6SqztMhDrug3qUEK2fQPjPVW",
  "key31": "5fGu1XpnMW1WGkmevJTMiqXkRpn3c7mDcbsh3PzFWAEdLrhW6f8KTNE6RFFGboobCiWwSQrunaK6StMtav4DSUBE",
  "key32": "4XNnBLpEXDKjXwT4yYhptmhFgbXR4cEqNR7LymWQ5vRq99KdQQDL2FALMCwE6zeQxTTHHUSCh4KmYnVxkBHv7XDT",
  "key33": "3XGFLtgHnGwfbenoj69osJxtpaXsxQ1ygg3tckfpbeBvKzdB9aeSDaEhLkCBuzD6j7vMqLSn1Xyp7BQKUA2D2TE4",
  "key34": "2gEbDZvN9b5Broo6GZ25q1sfkadVXN5BqqSxY7deeRHMsCiVo3YwTm45WcuT26Z7node8k4FHUxb9h2Co7FTx5r7",
  "key35": "2uaFTm1wp6SA1jHtnuk7t6BnpTwxaUqGSUCevPpdSt9tvaaHoVkrr1FgqxbDvyZr61Ez78umEkzXS4GNdqxZDcTx",
  "key36": "osnwpxSsbD3VxSQrhRNjd9SXFhZ1JqdD852NwbHcS2NZQkdbCHxbXsWheJytKwmnSuwipapUQQxAxMT841kcwQx",
  "key37": "3rTS1K1KajpziJrUbWuFSQJpbGbv4Z5WqgPrXH1TZ3BXZMwU9TwCTbrneBXW8wVVMZPkoVUJnPrHNFsVy9yS9UKe",
  "key38": "Wqjd3gEBUvt8928iRwjMHUNkkr4gFna2N3RVbVkESN9DgEofDmT7iyfsxjFEZgRNWQCAqc78jeCdmCpgx9RfSYc",
  "key39": "2iKCXVU5HeEjx1uJWPDgK1Ew6LdjpSFJejZmPrTcwgssF1BbKj2qiSckgyGTc3XUqvMb185i4V4cvuVfyQ94zEsW"
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
