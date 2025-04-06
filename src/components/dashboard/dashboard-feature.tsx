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
    "YkRjHjK8szRUZtJtXqzcdCr2sdny42QUrswwhpFsykPvYKhFWwpVHaZjQ6mAcXkVg6pjvWsNoyj2yNWMMrV4afb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37pzDqgzCZQeftd6NzsdraF6YrVP89rDSheMrJmZZuef8epsL5kXeVk15UcMuwnM2z7KfZDjubm2WpGkcsK4wNr4",
  "key1": "GXYTGSFYhvRLQ1qpCUpyYiGyF5KCAFq33K4qvd8AHAtw688vYtDik34WvavXA94DLRC7M5s1apvTKYSJcSYEFBG",
  "key2": "2VVCaUSkMEwodYxWNNHwdvHe43ggoKjciKj6MEfcTvjCqQU17MqGJMsjcuvenBipdw3hUv45joAX3vSyo6a6VRWF",
  "key3": "3Mp3JrvhuyYnq4bMecG1ttRijKFo9Hr81G6UeJ6Aaxe1uASNGfB21c3akJdkFEYymcjvSKWeDAmAHwfneRmiCcXe",
  "key4": "5DgtaE2JeJMMXo6DaTt38JHpNa9otKdfBXEH3gSWaXtp5Zg4kAurNyFy7ksXFJq8v1xbjkNpuihYrLRQpoUXmkzs",
  "key5": "25za51YDvnJJF41nMiwpEFpjcdDbzbfwFrYRm3ZZ5DVC1ecjBGSDtVrq3SUMWcTbhuqaddEFJpnUP2TGYrWJhudq",
  "key6": "2yjGgyeHfkxcMCPKWG6LKsiKEB6eVLmkKyPiESruiCgXe7bmDuezmYVsfAiA1HH1wBGa9kM9AHsExCn27yLfBaQ3",
  "key7": "4VLYVGd6ez1jq1XJ3fTgEDKGntqoxp3f9poP1AtzywNjgsxa3qG333SdZDe7X6o8zw1BpnUW8uEqD8rMvViLBrss",
  "key8": "3WehsX7YvjQ5ye6DcpiRdxXbizP6L5Xge1XoXEbTmpydJ1dF5zoxYwWjcqFtMZ3xmd7ay4HGg2p1uy36pkbBWeNk",
  "key9": "3SteKYCRHgKWp5dyPoAtNe1uT35LtH9jey99K2bVPAAw58RBT2JsUnG3SxzyXFqMQpmapYuELZ2rrqwDy6SfPTAJ",
  "key10": "3cSS1rCj6NCNoSsR55UnfWVXDDEkE8gPVSfT8GUdNpiQa2znnYa1g1c25TyNCsEvmPbDXXvBSq9PuV2FeiQXNWa9",
  "key11": "417VAEvBGZvP8FGAFhEmsoWLqKGhN6AJ5amhjQZTUGBXLe6HkuPTuuGkJ6ZsnNimqpfBE7CYH6cu67c1b3uk1yZB",
  "key12": "2BcrmRbLg6CMeukxsY7ac4yLfKEmkcsuAB7B9U1Zeun6Z2mJKADoRXRRLHbbLkvGATWGNG7DxDpMx9j7jiowqU2g",
  "key13": "4MZNjaKTmncLE8tuj2cd3MmS4TGnoPabbbzkhp3zcjVtzGKgTNkJFqmzMYTWVhwzd6PkwevdcDpJVGmBL1xDmX78",
  "key14": "5SURvhQo135MZSF4gnJbdtSKxbwXCumPTD33uBdH2qHxxsMMQtqkhuEm4kfa1SVixoxU7f24Ba6ozHBu9JC4fbDr",
  "key15": "4yHBx71sMSViNPwhmQwroaSvy5k1EvQJEk2VZNPueFT7bbfgjFEcpNf1XYVh127suyPsgFnxhkpM5f7pXuFJCL6Z",
  "key16": "PMx5FgobYYGuTpouhWSLZoPAtHRQVmVpAyGfQ34NeCAD5cbTBHx91HtXP6ssCM7dVMjLF39NAwe7QZcn41pRuo6",
  "key17": "49heQoQTkpM7x2HrxT3qK86ZRtPmhdSuMoBwMvVgdK9Y9Y37UhDpH796PQZyeCWZ8FSmWTPJ1G9acfENHqdipQp7",
  "key18": "6wAQesAr3bAcpJCHkHxct9gz8FVkvwzBoNGbJQJao1DA3C35iypu8FgcGXjp724SgXyzCVNb3MVESq2K8Egp1eK",
  "key19": "2Q7nJ7LiUQ73gQHWdY5ijvin1QqYdWxodfAXEMSEjDx8zhdKC6GXjBxqRGrGRfUPXVKReJRwhvMAEMmPJGXUayTw",
  "key20": "67oKCUf6Yik2Wpix88iuUp1ZA7WDoim33MEvLefYFu6QZUjqhcEcqQqCXppGF4pujQ6jNFAS25rtXJMtUSoE8Pjb",
  "key21": "iqw9YzqkVGKyJWK2ezX6Ghc6rdhBFWbuGQxHMdC2hygxnavm6YjBPYejqhWDe4Qe6rksLvrmeihiCmKeiG2Xbwv",
  "key22": "xPh72excdQtp2E7pyqtdt9YwEEt7wqCj3CfAp83zAQzYZdQE51mrA1pHTKQbLjRgAW3e9HKnPRnz5RDHebxALwL",
  "key23": "5pgXfNyZJSExsvChBEXwZBPYauYVYzuFsXNLrjubMFV4JDUsCydTVhUVbor3QWdcbbQaSUkZajx9Z2Af6dwjPPnN",
  "key24": "K16L2DqTvo92uiH8EVeWNZVztQUsXSi4BX8cKLyYtUmSJwBpxvE6dZ8xfgJGgfSQEPvNvGys5haQFhmgYWYkzD4",
  "key25": "2P9TGif1W8SWYD7qNMz3dn7aUhGBeD2mAnVeu14aKXQfwrPC8wjzUd3s6iH1xweD5vnotzTu1eBvbFRcbUcDjAVJ",
  "key26": "2gMC63Su2LgWxpr1E3gsvjwJDoJBBwkNkNpyX9pb5pctidPNmdX47Qmzrx2FicFtzC6vTRBwuH4mzntZCiRtCaRs",
  "key27": "58rnisGFuN6XXEFRNkW7aGEAzMuYeEiKpvBPvf8zLcDyyF91bNNcUv2bj9JsvE89EdhenjQXMxvP1aN6wTyLitQ",
  "key28": "3E6KUWj796tapSWkmNWvSzmPbb5LMDKeHMaLAAMtidRuTCjoXi9hqWgmeEqu1kCL3vChbLpX94tfL3HCx8Z7S6nB",
  "key29": "3WaPGrx5niMGujCkxvryY2nCaw4wur1SfPa5kCKpTQcxo7U7PC3YBTXKXNN4STPyzfqZP9tTAEuHByDVEVvtRf6X",
  "key30": "49iVgw3FVizi1aaNzmrMwoEmBH6NUyrszs9jGSqyjToqvSWRqdKigzi2o7iHeKyBk27wPDC37Br81SqeLwvfcmCC",
  "key31": "5f24GUcyY1f8etxAtuXosLUrdUH6evLoxfydcvxkz21jrqwPDQj1gVZLupt4z5kFuwtHPnAwFNdfo2NL33wA6w2",
  "key32": "3VCxM5APibcVunN1HtuoFtUpxiSePNzFupgMC2hkUNH8myUNLu3viYcQd1FFvBFZc6gtQpYX3umTUejnrowCyihR",
  "key33": "4WGZ4u3zrv9uzeMXhg947wbqGy1oAqxW8asgqWmzBqBhRHTGZkXnBbELtCXgjAxhJjWAxsq9ZJW8g3xV7a4a2usJ",
  "key34": "2RtCqNrrrZ5faAfo7QUkPprtRn8oQhqY1EkFLGzWjZnRXTQa4Kf6GxD8J6B6mBfHc9ks2LMvLRDt42Zyr764yTph",
  "key35": "5FM3CgwwnoqKwvTiyq76sCMuqibV5TG4pcqsqW1DrxrhJQBGSky6CehtSDAptNuhzjorpik3RNTX3N3jo124JVwU",
  "key36": "eExrfsPMVX3vN73mgU9j1TPRqhsY1YogXAWGpXMhc6A1rHNfFZY4XpiGeSbxCr57HMnZHj4Rqy6VtUYttuKHyQD",
  "key37": "2sZhKmgo8zwFhHH9aC3xb2BBVheaGM2P8t6REmUDCSfkfSifpKwUPr9LnsLomx88MvEBjXuPqKGyTSww8b1dERC6",
  "key38": "xvzbo8CcZKSdQUEZmhDTNusUHFzoKT1ubdgZ4rAM1TeyVJWiHcb8MFwkiyqjhoH9Ppc9oX6gAghfd6Gp5vnsCm3",
  "key39": "2BXW978rQ3YpzcYzg9KxugRgrXy22UK4EGtYDpkAE8adAdm7WrgAvfiY19SjfcX7pB4xq4zZ9YdkjiKNo1WxexpX"
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
