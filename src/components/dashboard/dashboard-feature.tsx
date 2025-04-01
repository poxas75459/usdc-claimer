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
    "hrSUtU1y2Y6WMzQfVXu3nidP7NPfZTtikHh2c9XGscmMovxogZRg63cEQJm2hfC7zjBu6tCdhyi5mv3cqSzx9k6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ohUqejX5T78D2voRYPGvncr3HGkf1R5MNAvuCArB9KJ8Vy2pxZ4NC2B9kmPgUrHnos9Eba7uc15GkxBNbBEVWFe",
  "key1": "26zAkJXkZkwCapA8CMERUFqNnHCJ8kXQ7jJftg3ZWL41dTFXhipq9pr4Fz8BXAkWzCcMTMntkTE6hSFKtn12oJuz",
  "key2": "3TVCA9qqNMvkayKwfcurvZ7dUNr9pArtrQYDJM2z7CxuVVnASga2MPujbDNZ55XAnsYZLBtHvnFR2uM3J557SgCA",
  "key3": "4N938qFKvsmrvnUAeDHsW5tfjJkHPDMws57p5jPoh1hADsMMghqGiGYXX1jerUT3rDEs7jafW3YzNRzktdG7ina4",
  "key4": "yrszn5JwZDt4vRhPw8K7U9BJAQKJokKNd9fU3k8wSpYtn4z6jUjyGo7xoJTwmqHwD2MbGnt7FxnjayoSjKNGS98",
  "key5": "4UBg8Etgnehe4s1eFJWNxgg2YMuSU2y1EziwSJhXtXbvccRDeUSUmaKJaYaaFtDTziGvKuZcqTPhaKDK5gDCycUP",
  "key6": "a1WD79j5MjR2ifjna5U9eg546yCC8ZqNSiVtSBfnv2NR9wrcaKXKmUFPUa2QjQw9p9RBNm4eHZQiJmFyf4VZYKD",
  "key7": "2eDdmeRoYvjrdUqDRjDeBhaLYjacs8BvJzBomjGMXR3dooCJgvkGGyXbJsr3N8Kj8hNyHxXtumERfVpqdfdiM7fE",
  "key8": "3ekB6Tz663Yk4P9ei3x5QVsiq6HBFC9tTJ9T2KD9bxrRPADPCEqe9yDv4rRg9wBfXXgqG7DxKkq8QL6iPqoELwLJ",
  "key9": "2Ly6995wraLqN3MCemFSzh6U3ZFhEN62RngvnaXD2iWuxP8hcmeUcn99YZbehmPD9v6MwM7mBgduLBx8v9bfg2Mk",
  "key10": "4kCZvmoggpqAmy9vUt21mEqdxMm5iKNUQX91TZycugdzMLD6ZYD8xXtoWMdtm4f7tqghvmZmMDEuUMQf1ykRxVE6",
  "key11": "mWBKGRGwHpxMwNcNzgRj4KERHHwhw9mLVdV2bAHHob6pnGMYQvq68BeqUhfXpqPXUCiCi8s4Ae1VY1CaCso4Gzu",
  "key12": "d7QrAviqpeHiuQhExtJMmaPK9z2hbzUaFUmhAo9DFJAvA7r9ar8HN1Q2xYzgUe8Y9PBsptdy63Xv7oyYrFJHM1o",
  "key13": "L5PwDLbUvizKKxipPvkKAfrkidgu6QWpFTwR3KFJq3cFGbn7pVjny47PXpB8HAdC1MzDNNLR82xtpt8Lscs4rhh",
  "key14": "GZtz7kNytyAGcpEJ2ibXoAnfTeHP1oYSCncBn1ZjMZwctXXajLi4Xk9HNzLgucR7JiDjYsZcnvx2JBfHWBitdMz",
  "key15": "218JfFoAPycM9XzLdksAXHhrGdai2kgedUnxzPB4TcTaHTvyEakNgCT2kgtZbVG336GeYpTK6wV5woPH2GB4piE7",
  "key16": "2v9i5pET1RbJuNTSLTVd5XQNnWb6ZULcdvUrPpTf2PiYQSXdKTipLBM5dpJ4CKJi67GCXCDaGTCrQfy3PT3hYDz9",
  "key17": "46BD4wTAnJqyTESQBnxmcN1VCPUjqGb59cEg8RfKJH642SSy3GjBv4UUot9GdSzEYKwQ7bms6mtPwezSqTE2ycTt",
  "key18": "2FFaiPdMX4QfR9WggARoTVbuNTixfrfpbowSpEpHJPfqDbXt8fKyTZvEqgzUdBQDaGxEJMmvNsXMZ2RPkv2fnzLj",
  "key19": "4BiC9jPaAejS1LP1oyVHDAzna7ZdT1pstBy3jc5oyTnj2khyYJ55qvkcCTPgXj6iNsQCJU89SCKiqnDRuG6FmGUi",
  "key20": "SsQ6a5AdLhJYGoMcx7ontDXnfS7gdA9cA7c1weQRsQWumNusZbWALSEFZBBXFXYtnG3bzseCNRn78zSZNchqjvF",
  "key21": "25EfumBPVfYgXE2gVGHFBNKjELtxr6LSedcQbErFJ9Vdu3GCVYkqjnjAxNvqYAKgJtG6jscePbE7Qar9dMquJb2B",
  "key22": "4erMqfT9kwvtGUYmTGFMaiyD4BtgvVLv5jBZJKGW2X9ptkmoFwtRANrjwrQRdoQYhceBMDzK2dHgSQTa7vYXgcmo",
  "key23": "4vfveaQgEiTE6JDW94UxeRhCHZzbF4cVVvL53HVhC2gCcYhi9KTDhYdszijLbs6EFQpJMeYeLhVmSjdFiLD9FjSP",
  "key24": "4e67bjJemEaHdEjcZhgNW5LL9wj6kQg7DcyUY6LxsfKrpvCz9v2gY64PmpDVFEdbhYTb8G1sbVBRQVdVdo9ZXivW",
  "key25": "3n3Daa1gZLi2zUi3dXhzHF47kt2jhtbjRLz8N5SD73FPgpQHGPzhSJJgFc883rjJzMvY6cP4PyZJgS248exQ9Zv4",
  "key26": "3wGqtd49GHZ8oNxVBhfoqx8m2EyuttGcYR28LXjbVJ5S5Vahs9wsah6QYes5uQxMcBTFUW6jMaFqWExZWkeEmmpP",
  "key27": "2hwEwHVAGfNDDwjxmBo5B95nbYnUU1W43LJmpmsHydt1GKpWTFhJ5Nqs5jXGrBXoqoHqBD2yVwHUuHybocNTM14A",
  "key28": "23whHdTfUieCPUMQXR2UhTtE52xaiTy8F3GPe2Nqd7ELKTXuwZb5XeT3bZZ1HutBUNTfKtMGQxuRGqsDPYoqaNCf",
  "key29": "243FsxC4EuroKdQxLxHzHcBAu23EzJDQVPvXDEAq8bV6CzmcUe5jwkADdsHsphTqwkyowS22dtuWPxo311oxUq1E",
  "key30": "GQxY1VgPqCq2eaMHpFCPcnQEcRuWv113UDVX6Qo2v51GmLJgeVjE9UezMvG5dEG4s9B5p6ZYGRSue7beY36898S",
  "key31": "5czwFMfp9ahaCYBtyDiGeWzUUGiuSs3PysDfDkJaN8eMNmUt217fvocyryVDs5zGZgfh2UALZFBCgPupYzpPk2Rt",
  "key32": "HWKqiCPgnj6ptmU7NDiiJoGdjRrZcw8UnzbrwGvJzpYfTd5eJkViCznDCwLDdSgL4uVNMofJ4686wifPWs95pTY"
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
