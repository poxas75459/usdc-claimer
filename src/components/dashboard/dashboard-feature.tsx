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
    "5PJRYi1cbWo8L2EoM9hLeEsBdA8YZE6XeytemxNBdf1zKjsbd9VNS4gfBDbzjvktUrcuzyKgVu8PhGQtQFuDST7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EFTntpeCnoEB1VwhHRVnZXKnkVv1TiVZGj27r8siNm8zcR4femiK8qRkdkiMQZBKJSbnGvPxLrxc1A6EfgkXjt2",
  "key1": "4Bo7ZXCYdAyv1EFWmXZDa45ufLg4CtguUKFNCANMT82wcR9R41qPfPvLYVWFMvf8eHc8WnWDLyJKvZfr5tCgSUc1",
  "key2": "4gpMAB9xaygyazqvRxT32thpTL2ar38AjUpwWezrXxbGstB5wAzA2EJHMcudbpPiEDU8UuXEBXofsfL82k9zTnnX",
  "key3": "4AebY9peZSvxaKxd5e1hmc3f4Rz85hU2o9zzuFQu7HSuAEfJdaXjmsWAx1CgdLnRVbVEWC5WhDTcmdrNmBWMLK7L",
  "key4": "5zCJLidggcYdpthevRLEoQyf4ZMcq45sim2TXQeButEqDcL56wqsmhZTwAbZpvJVQc6JRpGmX4SCTbrWMgCiRRtc",
  "key5": "Gtkyqih2KKnuBdPWAahyDUNKNxmvEbxNs2B1AsfkiTYJEdQ8tCaMQ7ptY2mATAN3soAqGfUpv6Sm3k5dFVea7oQ",
  "key6": "3TbywZas52Cb9hYxvJkaRqck6ofMk4JQ64jVjnYWTbieU1tnonJGGenM5bBa7BzqqJvfUJfesZhezcVWe2kHxcj1",
  "key7": "5EtvodUWbQPN4Uq4d1Fab4GExEgpfWRYGVxg47zziMNUxRR2yynDW2hdk4bWKUDc4J3Eb9vAcVkLWVgvjhWN46me",
  "key8": "2rHZC7YpY1f9ZUGETsUMMT43ucA5SJBrj5cPUdGUFCUWuVZFDTi4yVssTncJ6zXqwmhKgyZYhAi9n5cs4osmtqWN",
  "key9": "3euocG3Y2nmWFtbqnTv7Pb2ecJ7AqoX3oPbut5urfcXn2WDGKb4fpP9Vdb7UyPNejXSy8juscssDZxrw9TpPuUwj",
  "key10": "5zFZzp97kcjiSk4H9wKMeddvnNQTZERduHevkS2M4rjxnWYwHXcjfKBS26bVuwLYHT1B6LeSnNdtPJx94nCbhXoD",
  "key11": "5nQvBeJtHZ1LCxuyReLWrBwMCgnxxXuV2oFAusSs43nvHes58MZXVmaaQhcXfcoSa4D94ejsVNSJY54JgmG4MwY8",
  "key12": "wLtS98SBMau7FeivNRn35B1TF5fa5enWNzfsVaFsRdYFhfAs36ytWo3UzFQRZFMpcM9SVc8r77bSqgrh4A3J555",
  "key13": "4PbK4cvmt2k3vjKZf3WB5n3D7FEfUi9CM6cfnxBLDhMrEFzKYvgZyG1ZpkdTbRrVbFNmbuCMn2yK1YkE65wowR6G",
  "key14": "ptWw1ubUNunFz8DPDWaDuAUGQNxY2acmCwbpqbXHGLDthhpc3De9Ea2JLC63PVTEoKmDFJ3xbpZj9BZfmCrh7dD",
  "key15": "5oGxvr2Lv4g5h4mU5dSwctiXG5zKzKtzY9jr4FmH9p2Bt6BzHWi5Jc9KUTxGhLfvsrb9U317PjDxPVSNxRnzjdhM",
  "key16": "2faAwhRcxzeA9iT25gfzQgxDYVhKStny2NRpkxpfASFp3fzXyn26USSf8CQ2SE42tRqJfULqJGGpp7whvuYm85P9",
  "key17": "4qCQqQwrjvLYd5RxNwzCnsAkkF8QDP3KLW9APtU1S4icNAvFD1zYrdAKvK7Jnd6dufszy4e736X7KQWHaPsRgS5A",
  "key18": "4p1WU9Btbdyopr77jtC9QgXVyN8e4A2TsbSiC8CeUenCtooGiztCZXFXDQjoq26ojwGoomyBoT2qQn8AKnKzxUGt",
  "key19": "2YUa4FHoyMFBPujh3KKC5hELH2gk7bqTDWfoCwD7FXqWNVhbx5UNs6EDB6sxLhB5a3M2oiBCBSV2hADcwHS1fGnX",
  "key20": "5GfQXx1Ar58fBYQummP4mEyQ6Fe58zSFsojvqCzrX4qks84FPGhcQKZ8kuaeGbCbPko6b3geEejeRiSiRv2iMVTt",
  "key21": "Jj9rgXE4YdbKpryQDtqYNPsBr3igDSiSwsAAYHtUXKEpreS31B96GFypHJVjnoaQaRuLzjKTGGZudqrKagomdQq",
  "key22": "4FCnekHFMmELRW7WwSWD1N5wiJnmnBJNoj6z1YDtgjp5NC9u59ura1QJzKimHxQFLFFJvtNA4QiDaAJ6huUsvzz1",
  "key23": "2WSCLEi4ouStnxaY1aML8WftFJtwjCdQwrtksgWYHEmgK72sfXhXopxjUJVDVfSzaLBezt9ybPCW6YEXpUJ2cBxd",
  "key24": "4bvgB6UVf1G6yTQkufxv2jan9VE9bnReveMSsDJWxs1QiYmUomcdQdy3m8rcVWG64Ggevuyb9wFfQj2iX15NEhY7",
  "key25": "4YuqjbtvNCuHzXkwr1JUbUV2NVxDesiYmF24FDUpMLgRtn4UD1tD6mttZ3FHmVMSTuvvoTNNksQYi5yChjFzfeuH",
  "key26": "3Comv68FMC3xzDf3BMVw72g4DyAp7e4yA6EDnYovBVeLTNng8XKyuMGijSbqguVGcCx2ERWauaHjVEVvzhG3ygkk",
  "key27": "4xbxTP6rzecyUFF2ePNn7W44yGthgynK7j8pY5cU94SQtgRzEqr2XBEYtRx6QcqYR7myTZEakQBGZbGNNUW2a63V",
  "key28": "mmHLw71Z1wyKCi4AVsBTYQk2gS8r43yotjByQUXzkJDw5vFQ7L37C9SDJi89czzMpx5wtg1PDQUfymsqxoRCuPs",
  "key29": "2Tsgcs3NxuG9y3iYceWowU6wFwg7Y47Pw1c1JVnNCvcFusqWRK9HEfXjb9ujemGmnabdHG8FX9fsV9yngmmTnntm",
  "key30": "4rdgwH31FtWjqT1pX58abPk7MyhmAzkb5kUmYbL6qHZfbbEwqCB6tV9cJumdFdGQBe3CEu8rS2aY52dZGBDWN2e7",
  "key31": "vhXY3BtVyxYAy55J2ikQemcEQpKiCQFsXnX6ZAYgT5aaxXkUaXEoqyYZhdUYQsFK6Mqm86MsmXikEHjKrVN1xdz",
  "key32": "958GsQbPCnrhwDQjcNcho8hGBRAvDSQUNEnvKPc5goMCLm7Zk9GGcjpN4jS3sCfvYP4GRdvMzz3HjudPpBNyfso",
  "key33": "WaLrtDsV6Qq6ZmSAs1idjFrComHBNDGHHcgpMSLy2jimpQDDRPHQJkLHhitSgQn7tFpX3LxX8pkqAAm4TLKEJuJ",
  "key34": "3MJ1QAscBmEhWvGozqjhAi8RNo8Sd7waFZou6XAg1HxAFgkoQkgiFgophfPZHNGTtRmGMmEJHqRo4vu1hboH8Wfx",
  "key35": "2DJjUwMFvac7j6RjZyg2AV3SchPCg2PmsDy2QHXy4qAFRjSiM4iwyoLt7yEiqMY77on1woUU2UbodZDdcucqLAA9",
  "key36": "MWgSXbBz6zPix127eEjzefmWfa3oNJv1kUZQLDGjATZJEDdiSTKerPXF8pXtb5FYvKAda9qKv7dqrYUihej5tvt"
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
