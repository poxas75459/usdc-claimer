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
    "4HHyxffFadjRGJDoJnUTCnaDifFGABfwTYtZ9c2pD26bLQweVmXXcsKWoR7WdmkDWag55Po1RHrgZW43UFbt1k2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BifTpFaKpsgnTqCvMEykf8czskNKikrkPgudkxS2hscAUyu7JLZM4yohxcRBPDtFtqMdsCDGAgwt16XAiee7HXD",
  "key1": "2BQYi8htRfRxQyy2okBXr7H68W1WyjhJWQJbxqWJ3KKwKKr7tu5dVFWfDoBFaVL7Ye8pRxYvjMunjLkEcKh7oxUA",
  "key2": "2xZpxTq4ZsrSGtbdnMKdbgT52b2hbjwzhH1ve7jg3UdAio5aeYg5AW2Z3EnCc8ziyw6WhVhtm8T1ShL7CSAxW5ov",
  "key3": "hwgqrRhBtkcpx5UZeNXCHHKovV5ZdH8fw1785TuHrWEqoP3zVjALHC1VJE9UACDSBFuMu5r3oYpoCNu63zujXvS",
  "key4": "3sGdjPctoZi5Z8cXM6bX4krmbLJuRVhqASr6RJiEH6BpjG96QuwkF9eNkQEnwC1X7mRQpTqQ9CWdyeDA3RQANRkK",
  "key5": "3VPkijrn3aXuDqnErYb8a3a1jJXX7BFFyL4pBQdu84wFMgrQmQiPtCTci9jtBXSbHdrPLrm4YJzwJVN8dJYMS81Z",
  "key6": "KVAAfYQ7DPdfbQW5GXDmAcifXqGbT6186FuLtdmVNXZPfrsTZzocNsXAcq35pzh2igKUpTdnXVg3LDzuLpTSiAX",
  "key7": "4Kw8WEDvDkxdWSFNsg2huVfCH3Lgp3wGu2vttPfp2FYr3YSLabPVdJ1ou7eHbd4UVfygCuNpEPLJ39yWk8TcLnAS",
  "key8": "2EACxWVCwnvWFsVXpKGtYRW6kNDKG5cwQ1kKRLnn3jqRSbjj659AeRnhsYnS9f8oWXjhsKvy8Eu21kHPa7rFbfFE",
  "key9": "2Cx2rdckpYSTnhE6YrVTbqdZze4qcAdfCGbPUM1MXG9qD7Vk1EE8iPz3HENLa5c1WRm77bNsVxEqCMZ2gDSqBh1h",
  "key10": "xBuQLqcYW48aYbSUHJtbmSC6xTYzXZyMdoGiWohjf3MDa8wCyqHSrZYyC9rZBJJZoqZ8U5jSuAvKqw2qsUSwgGa",
  "key11": "4BGd3vE38c7qAopAkQba1nz3CPHudEYJ1BvzQqznKUNcn35gHJf29LJCezv2kw55p2M8WrZyvPnvsgZ3vqCHtHoA",
  "key12": "43aK78hxhEWTaGG6XBaikeQWzvPdzPGWS2RGT2WHvCEQBJCgBVWH7eUVfYrreN214EaUnT55WWt8dKWdY3Gqvr37",
  "key13": "59N4cQx79zoqjCtVN7UDfuRTemZYPTLh5uHk3tTzFwRGPJWnmxfFLaHbtboWJ6dosbecvJqt9um3dnpQaVG3SbCt",
  "key14": "5HyvRGnVYCBt8xbvEoAnaWmNL19moZr5UsPwsa9G76Ws9BvG4jQe85bRM67MkeWgrJmUMbzManQ3nSF1MLVvWb2p",
  "key15": "5VQZaAE3SPzWTDbvkWYArjMMJjaJyXj9wbjPVCwEbswAJZQy6mtrPVdVuzs8h5x4Bt3ZMw9dBbMLitJDrCcZ2Ngd",
  "key16": "53pNLX7oQbLzebygsr7TdwUdoy6SFNC39rS58Nr2WKDvpbBWmzUSi8DnzTjVqMweBJFJ7fKVuPuKBb6vzpVqpN4o",
  "key17": "2tXj1rnqW43LBEosHS7cJQkMGXxCGYsXEb6xhVPgR5ExbpNo57PErCAuc3H2JkzyTMc45usRbGoiSesiC1QqRCgW",
  "key18": "2jEASdEUPS5SabHdVVKsNcyx5k43iRJtPXb1BtBjxaXK6XqoPgaSgDCMm1Ug4xJjAH936Vngu542oP56FZ47x3nu",
  "key19": "48tE37fpo5kbGRhrtq7LEf4rVeFKFNbQFLTGzepg2CShfrxF9MHkK1kC5P5ddE9gLUT5eJPGZSBiDRo94mkvxo3m",
  "key20": "5hXyvpLzoLUpcWxT1K1kQK6dUzFaoAPG9aUtmx7nZRfDkwEFFPV1s5M9oK1zARbGPekvmcqCyJRXVHYjYX6p4Hzh",
  "key21": "4jRcX1QBin8ZRbZW5juQQpD9V2vm569JnK5xr8V8iWtAo2uiocoexGZMz8GuNHrzjAu9pq6zadrB8yDtDrLAxJXp",
  "key22": "2PGsGUJNG5ckcFUFCypa5MWPz35s4RvMmSggjY3FhsUf8KEiTpXM4pZUQ68QcMuZQpZoHXSGruXzbk2gGz3ft57e",
  "key23": "2c14YBeVg3MqTNdAjTEo7RxYBtv4egAANo6qmYdbdFpuFMNXHkdREAUTxekUY5P3bTUhnCmHm7BDvz4H7SPYd3bs",
  "key24": "5NcfuMvW1JyCk6fhdq92x2YYXopbg6C4pF5PYcB3h9xsWwsJaYzFvFCjKrFScEkUQvkw8sqK7RyAY65dB3AbqLCF",
  "key25": "4cGbQtf8VUeW9UJ1Jd4yo3ZbrJMWqgQR9pfuaF1T6AkPvCFAgCpxSxUt4u2BDoQKP3LYCW465NWzzFFqHtz75qA3",
  "key26": "5m2RfHPeuCUMhN7Aq2M5hMQ1e196Y9MZBCnintDbDRB72EDkwGA9H3W6WHZtaxTJvyLJQkUB5F1XZQvco54tSMnY",
  "key27": "AGifLE8uQ6fV7vCo6BQQpvHWaF1iCYmwzfMJjM9849jZEhM5cJF7vQTFK8AoFJUaat4raZBjqmM2o5YBXjUsgkf",
  "key28": "2aiM8tZY5MJNdYUb9EARy5v1nhfCcbgAvFiLWY59J9oN8KXifQTrtgmc8gzFLnSBpMyEM9A7QTtmmwaWsuRBzu3H",
  "key29": "5ics6NLKuJzseXp8uKMpoNfbqCgkLwKtT3CAV7Xi6A5idsWdDoo4TXuK6F3ddyE6bPVPjdyLkXUSK2B2dDm69hgR",
  "key30": "4fcLrzpumuvRewABXhHocgNXWx3SLzFaLDXGEBWiquP1WcZcsr18gHynZ371meNw3doXeAnpEH9PtVkcdE84MgBv",
  "key31": "25VUzmqZvyUuvURZf4ZPQSTuMs6cyrVmt3wTBLrFSoyQvNBrNxA5knh3H8EZrC7R9h4EMBjEhCNYcGn1DB3VXceE",
  "key32": "3Xu4LSSohStFXJBbg2pB6rZcVgcfD6gvcUux6mzdQc77BkWfnf5T5Ymux7xVFdb26Res89m56yQdkhKe71MZJD5E",
  "key33": "Vvb6cTJ7HKonSNRnkoKaRfh343V1ExHQ7nHWZptgFbLfQYEakVXZASsAnWLaLtExZQMvuBv7gVjFh5Ey1DymmN6",
  "key34": "2o4BeaXSJvxScjEXp7chDAbAZPToTKk3g2NmT686EbYWucgZ3AcDn9TvpNsndN2SKmbWWimokC5ac3uU8amq8PTM",
  "key35": "2F8JcSKoB5Hdq2pt8xAwCoe2sCawZQSWACDkaUnfWaX4oQGNobzEEin1Jjhwm3AyAaXMJ2e9c5UwHdnh1KhGynto",
  "key36": "4C3BbXwQ9jjJ3VUYfRU1gS9YWYLvzngvbdt3Qk3EAprNUDTBhYt1EAo5L2tmMp9FLVsSHfMpgwZx9MvrAetgMRHu",
  "key37": "3exdJMTXDhKfkXuXYinzrPY8LV5s8KwXW7rJKXJRL5A7atz45vr5Qd3dVJ9H4QyZvXGw1S6h7cneF4iBsKKoF31k",
  "key38": "THcFYXoUzdeAG1nCriPhLtkkWgUSF4j9AxCZ95gQ6xgRKd9s7JE78o3UxksgJq7k22copyRFpFn69vDjJv8JB37"
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
