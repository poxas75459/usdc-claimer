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
    "2jETKr1SRhNH9LHjB7CrviModfJnzU9ZsmbBJMySkT5Xu1Y58cryjZoiq5tnwd3EFEpzeSdN2o47YZcYYQmbytd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tSHSHAnpjCYAZPi6ecw52Jsy5V1PHAM7WaKFzB3RiqYeNwtFg9Ud2X1NSh2SZdfUAAEbHeUgMCbPkLZaBmHmZAQ",
  "key1": "477kgheX1gsc4MeyHaUURnyW3qm7QEiK4G1kiqzByT7rcYDTfxqwq1jTfukoA3XNMwEqjhp4A6F3zkcX3PxjfbKA",
  "key2": "3rzSNr3jUpZGkWoxPLAsYbBVqptAfsqkhJ6FPoYWqxhEgHwfDw9tvJ1jMhD6o3ie1PpYQm2zSVUC1vhURtZe6otR",
  "key3": "5QBa39yK9q2xgWDrYW53wdZHpPbaKQkJf5xPT38sHdcGvWyLL77PeTEatmbfLNgx7w2vo86ienWBtGnAqEnCtuRN",
  "key4": "2rctxGBY6Np7RWKAfkthPdLqJjoucRa7HeW3bw1LrzVhXZxqwxRoApCysicJYykmXJULc6Yw1rJzeJ9enqmNWrgA",
  "key5": "4mefn63ZYG1ebFoZ4RiGjg74nUS9PggGs1oTZZQvQx2HLQW75QT1ABT2uk7BwrvxSBw4vCXb5rqUuvGZfbE37Wqf",
  "key6": "5BBjTMaq7YFJjQT5qdukeyLCEzvF5pZB97DEiWtM2vmNTT58KN8aWdsycCJGLHhJreKgqtTDaSe8W6UNRV5Knh6M",
  "key7": "4Ps71diC8WaqAQNrZpo1Z7RrMPVWVeMxPF6RPwkD4FDG9AhmtsaAzDyXXLEzyYe8W8Gm8kmxGopJJ4XcBCt5xPjg",
  "key8": "VeMxqT5WfNjMT9G4jUnyCDTnuxqgQAhbfCc2dt3DdYq8X94U74T7ct6oYMDXMFrHXmuM3ZBZ2dmYSSdsocAAV2P",
  "key9": "TmcbqfT7GC1pdfLssCvF73YmuQNReat7aYpGYnqruagHhyZgUqWihYsz7tMWbg3VG9mMwoNCAj8SbBVDsVoQMfT",
  "key10": "5SYhmKvaQCMZwRLxPCzZd7PYrzEJFsRKjgBZDXEiLoBa84Q63zNVwbVJMyfCHMG3EebhDVxHgtdhRMhBWDtWzT3e",
  "key11": "3worPsc9LSYKGo2s1Fv5iPCJ8WudCcXLf4c2NDxAPkjFAExjGAsbgTrbYdLzEXUnDoT6eZR4SuyethsAMEUJZY9K",
  "key12": "5oBdSAjh2K9QJX619EmJVrzAD97LrkuYXrNRVxwbLJUrUoXLbWxHvGp9A9K1UuqssamqkjL9nToHnvJGJ665A31N",
  "key13": "4AJpqQAkrg586LWXcf9HPE1XTkxE9nNbtMw34oehouT4TX3sPZV1LqtWrCDC9XPMdArcXPwMjD8s5FRuRq1CrGG6",
  "key14": "4vgoLpChik8donuVVS7aCbC43dpkM1xQFovVgKJdXzHuFn4GEKphDpLvaa9mqpXwYJRVMBjbyg7VfvQ2G1tF8284",
  "key15": "41sKpHajg5KPHsY3edSB7924UgSwiiD3w4JzfGDcyh6HiUVvDgDJvgufYRySNyKRDLcb8NieBa5PXyJkUA8uu9qY",
  "key16": "2KLmB3w1dmoFnTHq4NdHYvnjLrjbpXsBun7KL3zix7KnFhNPmSFFJrFaV5KD2nrAMnc79xXDvSY5cFRyPW4bERXU",
  "key17": "3vhLjYQqsruVSyjQo1Rup6GHwqwuaVS4LaydVbmsPeAj5kNZvt6m5kSNLWVShQcJiK73Dkgj6bXBpV5bu4Fq3NAD",
  "key18": "5JacNAJpQ74V66Nw3KiAnuZSwTd64jqKpxNhpmmXGk7k5DNq8tNKKgh7y1H1hi8XsZARDaGGXJEHEby7rcRrfF1e",
  "key19": "3GU3jz3XHUZZ1S1iQ9avLjdLgTBqn3Cbr9rGR2FKAWnDjaoGqEjvty8Mk2Kkr4WKkAhEjRh3RNzSTsku7iobzdnY",
  "key20": "41dG1UBJf7DU8uRkaieMSRHyzgGptL9C6oo32M2UGe9UBGMmj1RyzhttCBmGW9PzbhK5mW8BB2jp52kec3U6EMpS",
  "key21": "26MHao136L6tuVNmurQeeEnCDtP4tCubHrLgWNhiV7X5WwvsKhYoZNWu1ycxfWuWJc3Aq2maWtW8kVokj22M1LJE",
  "key22": "2QaVNM6s49RCChCBMfctWmGPwhR92acg6Cc8VscpCGX5VJFnANJZxLUdAtYbSPYVc5SVfo7LuFQh9xDNgxnnBH1e",
  "key23": "3a28PcKqnpjvoFNaNZBUKyaqdW9Aek8ro14WxkMGNm1jWjpE15ViWEP1uAuVZZmnehx2Sy4kMSceR6cz3oqL2gLr",
  "key24": "3AyMxNckUuANAVp7LQtabNGtWSZfGo18bZKGrUVJwL54C52j87xMAKPMzuQZhCdzaG8BPY39FtxC2j6LL8RkB8VE",
  "key25": "3ySXQa4iX7qZkj4B8ovxLQxYviMiZPBJSWJMe7ZJLQCNFbsHWkqZUxmZfJFGmzvP1ZQ2f7Z3bdDSgxZsM5K4gFwU",
  "key26": "24ZH7bb6aKJCFHZ26kFshMjKgm59Dcfz7B9YL48RdJA9RoC9Mth7DdXxdXeCMfuaz3Aeu2xFKD1uDK2tFWmacPAa",
  "key27": "35z3yawBWStDapazdRmDmmczJpJcTJt2tWUHekDi8cvHdaHeNATCahQbNASMTVSaxk4XqDavU8kmvn4vND5NMYyb",
  "key28": "QfY63jBaE5Q4nZXa1gvjCBYnXHgmKdhueYEGVmBnW4qfQTxzJniZLnNyZxATMEM6LfzR9a6LBBVbXQ5PfJy6WhL",
  "key29": "2TVbnH5HkUcpA1WVZbNk9f7EjnMyiMa2Mj1oZX4JmGDxmF69LAHRJyZYaSb4BzYMG5ZYKZYE2QaFbfAJDZ3pkBwq",
  "key30": "wjhqZqzbwQ7osQCb2peGr4ThCoAp1f9HKEhtm96mtQadRCjkzwUUDE1tEw2WxKCggNiXaSsqEw3YeJr2uyDt2Yi",
  "key31": "5Ym7hoJXjKQxhUz3D7uvGKMN2wpeVgz8cvkD9W317T2kfc3hGJnsYEUpwAG6bxyLsrzADKCkBuHPAUSHMWqCCrLz",
  "key32": "2GohYRNoGqhKie1Pn912BdG6yNFgBKaxHRm1RTYLFuXZXavY8q5T7DKpVSvf2CNnh5aaymke5u7FLkhf9bFakGhC",
  "key33": "45Nfd6bn2ZQkQobHuoaBn2MidGXPKrozRmzHnUdAt7CNJiq23pPCyuJojZn1Zz9uaLExLdvgckoF9UnEwYqurp8k",
  "key34": "3yRuvsKLDdGeZiEv1Vievx77m2ohe951BDTJJevEmiyL4PF78h7nCWaRGBxxJiTR8U1Z1CiEGwUV6iM2jnt1Hqr3",
  "key35": "5nnr6XoNJzCKhmbXNNRXbMhK7P3awawNHw9YozMou23JerdaA9gz6z8rWC6btxUXGecFrovpLkCAK4jcsFTWKiKk"
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
