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
    "289qRVEyz5ZnZmt6atMCDjmnRiMnA288j382wTqSr8se3HDRYVzqixaqa1DCxDujktxknm1EcFK6UHkoBGLFBF4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ps8yRr1eSJwJ7HyWqSCSyEDSMWnZ34boURmX28SFrXcBrVxTpZ6kyRCo9aX3TtNSuEwFAyQhwSR93eRD8mhqYsg",
  "key1": "2fUfRo961LA47Zc7npdhjjLQLPj7MdnLM4AEtQzJr1QAH1p2mzH4MwVVTKs3DAxR8rU7epbaYFyxq4xN2bAHXnVV",
  "key2": "3L2gh4vU3NxkHMxu8vLXntVQuscPht6EXC1xRRJ6v1yPTh7394H9eMLk93dFqNT2Ms5z2AKQqqBRW87wQUDfwoS",
  "key3": "3bCWvjMXpV24fnFmWeg3kfF5tehUtn3Lcfd8FWhSNp5rJzK8xbC3aMY5SKhoH12VzeGV7DU2HQ1e1GU2BXhWrW7c",
  "key4": "5AxHyRuDG58FLfq1LZw5G7rSneaSq6svDm6UsJc7cWStFrXHMNaq5XK857XDhto2L6U9aabKWQAqfjMAdkkPEFhn",
  "key5": "2UjHpqFeqA889nV2jRjtPVeoAK4h8Ev8LcCojV6QF8G9XDByFkU1GZ5XbhKNEvNqztEX76u4Qc6hww22rNN2iXa1",
  "key6": "37p5s2tM77toXSS8YvsUHCNWdLc7P8CSCTMqeMppyMqN1nvy1kfJuqc5csdfNH58Ps4nR2w678H1sFCvNpCPP5oq",
  "key7": "QXCJDmN1HhjnbNeMH8QtqynvcFs37phmKxiTpUPShs5Zg6XbnvcvBf4L6xK2BskxcLVTVvRTQ4qyKXA2bMNh2JW",
  "key8": "36aMMkeERKY3h9K64Z99ZptuzUaNiyNo716S4Ysnnoj2VaHbwZPX72goCFku44keHF7fau3UZT9e8eC1Pt9fD9Yk",
  "key9": "53rKUjk3o9BxD8qFkkLNfXkmTSqX7Vnke3s2xXJEV1utbGJU1Txq98mhwyxmrU93Bzk4xZ9bg3QK8V5Qu1XXoEEH",
  "key10": "5soDkPuErMvLgWERCwPpfSCzS9VaKeLQWsu5VMKGHGM3bVwdh9fXcNYBPPorMNtaaisqvQNFNRYVnk5JfNVZquGJ",
  "key11": "4vfsbeH8iNattmDptpZPog4sW1rnx4Z5Qd5JzRG6Ak1ucqs99vSoC833tPgKuB3x5fo9hqgRH8PL3WwEAx9dh5o1",
  "key12": "5coKtF8pTMBpWA8MnAep7ampp721DZQGVHZDNktdxyiCr8uu7gkJcNCyZPhRN6F3TKF3N7sAeW1QstGLgg1fYqek",
  "key13": "J5nYzouSa1t8JaeKAAn8akTE8XjqFHXmDyodFRxRY7LLwn3G7bABjah51KAqUH6ERVgEEuBVs5UgZ8MTv3azQ6b",
  "key14": "28CvZRNKmpFenRcc27WK9Cd1kFGCu9tpVMvXJ8t5Dyfwp3wi2D9CbsnPX6Qpam1KHqT4ejs6EZ67LNJYPBfsyeYS",
  "key15": "3RYTPr7JdmJwSDgpEiLFVcSfi7hNc9rCfe3FnPeFuApb5hqfD9Xnacg1DhkL6hgtKSaht79QgLbyZXvkavp32nCT",
  "key16": "4zq1MqoQnByaBdPeGAgDhQctmZAy2o6UWsq66Akr6Q1RkLkeU6GcVwR1CcaMMZGm8oq5Hy8ww6BhPnyZom5oyorV",
  "key17": "3ixaUgRoNa7HByrqmyHyA5dFm8JcvQBsxsQDiPmf892GW3A4gbZsQNbVg9baWhSKsyBF5tcPeMTeAsTHcBuPVpRK",
  "key18": "5rfYhvMeqni5v9DuJS8m9nVHXYMuxAGF8TyAiGtkPyZNjq7muYsZ9kHATJeTQvwY68DzzML3mctbMH2zQkTsZ41G",
  "key19": "67MAbTbVBnKhD5aVoHxm7GP5uUnb8Ex3eCPDwaenxVJwEUTggVdTVH3Hq96qfxq8wHEFCkTt7AU3ePfTZoQeMQiU",
  "key20": "561qVEWAdcNuMKBPTUATUfCrySUXTg22GpVnDxr7xKeNvBuB2jeZohisDYh2AeVqU3N9HkpZoeT2VjnFMXfRSS3e",
  "key21": "5hxsV1sDWPWY7RhtFkCUBeUmuBNYYTAumYvtBGKdGEbLXtLQRMG4mPaLvoPaSVXJKe2vGNsHdCvAVGWGmdP15jDv",
  "key22": "id4WzF7ErzJwx2McxLGmGPEwt52FLdGQj1j5zY5rdRCUesHjmPaqQkJGdRkLkWBo2zeQzCfNLKpVB8rChUULDhQ",
  "key23": "3sD86T2wjYUktZZ7UjudkcUxZPWtiUjMhx7r5RVKJynWqH7bhSZFYEwUbwbnWRBsPPwLUMYVUxmmtEyjfZaAbPd8",
  "key24": "5ZyHBqyCow1YwbmobVs64Wd4spdkP34T366fARxe9VXf8qrhML71FM6AiVM7KtY7g9tvA2C68hQbE2vQZGvAbxmA",
  "key25": "63vxUiaDcZrw8uRCD2yyZ4ZGDZJpeegd9z5SKTqpoGHZywx8Qro6rVWsXdJGzJchgVFAz1hwF8tojgG5TQkFEJSX",
  "key26": "42Vs3JEWoFGSzsXmTTPUETKsLeK7M9qSuXMAaP5AFcNYYgJbbSoNZXh1r7V7HgrHFBzyhBKVRtAZyxHvKtJ6taSZ",
  "key27": "2EkoQ5taHpcPTxrx469tDkBq6FHAnarwMb1YpbT6uPRVtvbvwZYt7bf9RmfUagiMj99wCGx9o3BCHFd3qZjQmdM5",
  "key28": "59pFNvoKNt8Zh5obHnLrZMxVMFo8YEaCEMx72EStAtPf3THrnfnkkfaspDURLS3yVHy45vSNqLN2rfGu9nmtDVFP",
  "key29": "5V7HtUFAa2rxE6oP8wCvnrFfjJ2dpxu8zqRZwJNDoqVnnpGuiixDpV9eEks1yVonbZjN4VZvz7Dv1J41NUkr5WYd",
  "key30": "5Fj5APFoMjp2x4Q4hsqGvErofcVNqhsNytDRrZ6pjZDDpgSAiGmieJr8UwgcpjnXanfdxRDz8saQJUj2VPweHJMx",
  "key31": "a4TWJ4gYhK1YyLUMpMdCsDb2zQvHjTu3ZdCTiehDrVcKtmZ1dMmq4tcSDYjxYG7pcU6mbBNv9vV3R4QGWw8a9zL",
  "key32": "2GGBJvCyP23nanX1e8ZjfQyCjRYSop2MnhvZdswJgh1TZ6PZX37bDwmg8eYYQoDTm7RDzti4kWPAjmgGBkPwziF",
  "key33": "5zb8yG7XgsFxHDCUFEUp4vuYgAVkjWEY42w1xUg5AXo4o5A4Wqr8ii3MS1sZjEHvx8Y9nhmwMtzdrxQxhP5mbyMx",
  "key34": "5HwQmDZSdM8wY67aA9tpTvRGWGHkrbwFMpX4tLt9EXBgFsavfBFtrmWLMpzysxgZAhZAoSdsmGLKiNvoorqbd2ey",
  "key35": "3Kh32BHALuX5PRjsXsaw1q2cRVnVe87xBUXfMQNddBWPrGUx1m3bdKxAgxzTu8uup4W6BhhquxWSKKJmyTPnEneE",
  "key36": "rfaEF3twGMLxsmpbvCBMxD3bRcmqJ4R4a3GSm7FneL8k6aW37W9HQAvB3Qe1uD8XNXXH7DE58vRpMJ1PRjr6JNm"
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
