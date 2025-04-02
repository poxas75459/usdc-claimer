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
    "2fVsd3UYTyRA8F5h91X71MUQh9SfPHB9mi3QFQR3PVAe54rcuNjKoZYsCjP3JHd4F4wW6F5m1xfe3efiCaGCeHq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rii6xY12Wb6fTTZxssC7YHZw6gDttV5vfTabHvvutAivnPjfoXUXqAxdjAhDJAeZByvG4GLZT8zmnXgZhxMxa1N",
  "key1": "2yvtRqXLq3gQBdVBYcns73YHiP9bXiKp11rBfguBxku1GLgmshyBrow1M4NPLS6bkQrtKdDMh2MiM7grV4Li4eC7",
  "key2": "27QnJP62KDiLTUzdBxLB4BqxjzSkA3etSrwUAxchWEQA91UBsp6hXH35WGzLSW1zPs39xCqPgVSKVvFFk4KWBJKG",
  "key3": "2C5kRqTyam9dkiDnWjTgGjCyvznbr7jc9du7XBtKH2YZyMUFm7BjViVwMW1Ctx13bm9RTuta7BoUTtXg6chhUYvh",
  "key4": "3aXAp2DRBFFk6jpZqfL7FSpbNpzNdPZ86CV5jVUSy7znhjkEBQohCkrgJgVgxGSMUxujQCSekosrRtr3wLfVFEev",
  "key5": "gqj7nhwo3LZcyAkY1z9tuUSwDgA6JjDKaD6u84vxeZaRfgHecf3oCcLy1MfcZw3ccTN2VQJmsce5yXYBqBPjbkA",
  "key6": "45rFEpkDAvE2vfhEYWazkhPNy4f4f6pCkgs7CB9v8hdHszusJrszmKk7DqLitLGwxabutiEPCAFb77TyBJZs37Tg",
  "key7": "5HRZF5cTkBaQDyNyLp7izS5iNHLj6wzKX8c7drYSYXUNJPdTpgPE2WtJGCXUhwTMjjmZz8qufMoeSESvJT5aYgFX",
  "key8": "5GJth8JDomi6sHAfZGog1yuofR994hHDchxa2dqaDWNybNbqH4PC38kEsNSvrbXk2kGxN3LHmquhzHTgsyUjGe7m",
  "key9": "3VLNv2Q7gZLnCKWzg76B7KKJxDmMPNEnPEjyQdUv7z3VjcN5fsgSoZsxTDikhC2W3c8E5aRpkn2B3M1nKDqSPVtu",
  "key10": "3WQ7vdgGK1j8U2M9XcT4mayiTKNN8MtCqE64XVQh2edeCEJhwc5YMYJktKpkaFDFwvAuuFySZdwz4tQF2m1Bwxpy",
  "key11": "3cPS8TXT7SyePJ5dNE8NDVwktTaezRWGSocCPzfbm8trSTHqPKFyzUhrN9xtKVcjF3kYW6SngmtaaDgDRsZhTK1h",
  "key12": "3m6VVSUBpXmXvpqA3reWpZ1V5oFg22hDnfatX7iU876K1mfZmoLcGY4imGCDMrw67RPk9WpTVJ3sCDcWJP5sBus1",
  "key13": "2GzVzawZafEZNLagF9rvhkNun4NrE7zKX7eCgDgHkagNFbi9V2E1N1jNXFgqr4W3vDqvc2H5iGECn1K49VsMFPxA",
  "key14": "6phyYubieYpsBFCebWtbWtn4EdLrgA7KqGsQSzSPEpzNrNx5aTVwGrwMs6xTXV2Gx8XFTy1PB78QGp4yHLfGW5b",
  "key15": "GNBqUxaFqj6p3a524g46spZueqcAjfDKSVKMdUbdBFUjM1zMDKvbseke5oWStf1mB6oa2wGVvbv38VKZ3532nHf",
  "key16": "XCGdYZJWAsHb6rRWn9tUD7sdjtntj4FKN9G9PqSphXYX6GHdhHZ6xeXp8wL96HWKFV4j4cZ5wm2YHqPKuQHUwFp",
  "key17": "Ny6pPJ93HTBzX1henfxHgPErbRfi9saAXacAdNKeMVfLQqhGBRnbetVPfs5R7btA2bWqFFYxsExFH8vF9qGJTh7",
  "key18": "5rBvKeP5vQQFh3c7vNoqTQrxbA4RXeB2rGWwGoRa3du67wKs24HybEP7aGDzKBmXkb8TU2hWhTkXUcWcUMydKhGS",
  "key19": "3muiFkGtk9YSyC8ynvBB49chLwTB4tBKexRktAnyRnhavv4WbEXfAyf2Z68bUXuSQhcVBJLEsmgoEXmhAUFFBuQ6",
  "key20": "4cX5Td3gmcbRvnuk6VTQSuwyWYjEF34cVCzvNBNNCyBLSpDDXcsfpiW2of7WMJuxoB1qtQgzj8WbEFnwTVb374CZ",
  "key21": "5FEXm9aZ5xaVJTGMVvADrxQSBToNig4UtRch1cLoZUu3jgbrd6b1xm3d1FyAChw6mqWRvMb7ArQmhjuPnwvWQJy4",
  "key22": "JSrcVbyE6urr5MbKM8DURcmkP6QJrsuGH8FQqwmTtTXdFrzHh5PL99Rw18dCD9nVNiUK4LCtb6KZ3ZugA8gx6et",
  "key23": "YvStDqi7qp8V8BZpVPUZ4NnLB2kn5rscca2GnjsB3MbejeSvSwCpTaeKZB5nzdaHny4NcTWureGzcHQFqKyrKYQ",
  "key24": "595D8iMKFvp5y5cWSyjoZrnPWdjDWvBf1xcWFeABipnshGCbgMbio2zYzWB93GpxiuoNqviCJitafekRkFjT9U1Q",
  "key25": "5zBsUCbrzwHovkLnxfQGMwCM5oBDyrn95gp6kSzXS7zeBwswz6nosyxkzKZJoKcXAd2BDHfBKnmDU7efzyiBqhxW",
  "key26": "5xMHFLojLGSxU4ZpkwMRFHQ3ANhXvtQm4fLUm2UgpPh8gKRkoR6UtCERCzny78KdXo9eiH83FRUGzaswfz3G2Z3a",
  "key27": "3t1aj3vHV9BRU8gBpuTkGPUN8UKtVdEBR5JoC2HBSm6Gt6QJjHtn835rkdkNDgFYW8RfmmQT1nLNry2Pn22thxgM",
  "key28": "Ec9rf1qE4LgQHhP9oRYLN1pwxQSUHwPcaNwSFS64wpZrfn1F8HL4ak2Vmjz8uG8P3e2AQvgoEUt3J3rrz4TQHKK",
  "key29": "4Fg8powzxy4x82UJqzmcY85nKSS7xEGMjKVKJkUz5TBBcYVgaLZLVpWxMBSRd7x9TrBcCSpst3P9VkjaGLRboTBY",
  "key30": "3ubDzyBEXn6SXveC5CXWyaczeGxQhDAbYyngK7BDsv7B6baxYKCvxXr6XMEKeiLj6CwEKmZm7T9UgTmdSicV9kUh",
  "key31": "3HUMqfwCYKDJdRRQX7CwJ3VSSbFxE34gURju8F7Ao8WXSp7qA3b9rHrUGLFdhe497XCAnNnd22yMvTNnrUkgQBFG",
  "key32": "3mNYqWDEUEQPoi3cLedTWn99BWxUXmJedJQv6DSfUcseMLzFTjvagSyqhKouF8KADvfPBGKTaz5xYEofboJctSSe",
  "key33": "3Wjzg2qkhcTbgxXyHAPouzAPr5LgvptaHJRN6v8Dd1C8BNDxuw97dZkMSZQpKQhEB6VajaxruS3gPjKxsyYCKRQs",
  "key34": "3F4kSPhXLTzHqwgrp9dhFXDgmpNfZ8kmjLnZbepja1S6arga66i7bR3CacXwaxrJrahB2DxghYwtcL1VQeLXuRxw"
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
