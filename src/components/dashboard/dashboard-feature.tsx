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
    "45Ynyosvur4tsEwmY2JTQzdAZJJogDbp4QcYxwt2wiL15e3zLHzZbwmJG47okG3JBXU2sfAszwfJgrQz3jnGN5mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GrZWunT37ULP5ZJEJHi5brFGei1P6pzVf3BvdAuSSWCMmysppmJtX4gvUZKEs2SHoSmdNr4EDd8BEn851oCuj6Y",
  "key1": "3JudXKJE1BXPQkhpXHaW5FyLejwMcTrYxRCZRompKTWiYkLZSXFQqd3Gv1uwYjjdrdzM79i3Ffg3JQzKvghWFKtH",
  "key2": "BVDUmphE6UgWE78JNWmwGHxqAfQwee9B5FWgySV6uJLrsKGjbWMg28gUUK2nWZnVDEXpE5cFwgqqhRb9DjKRNh3",
  "key3": "5aH9j4ubJJvwhXp3znUvB5t6MPbsuiEGUGTLggzSuegMYDyn1G6aADodNx9pWU7DwJrNAzCHgQSrMVhUCmE99vcS",
  "key4": "59ktv14BsvYqWhzo2ndZAGceLtG5deeaFBb3spBnvg7NUVrBWMhgVLzcxFRjTMZ6Mx4wxhmvdqGqGHRGXxuvkDGq",
  "key5": "91R2ogBQQmV6ifNWWjEkHRKoPSaDzJNtihLdBvCH6ujWfPjDbGbcuN5TixNKTMftQeLb1nhobt5tcNxoa2nAzyW",
  "key6": "3py9VGB4TXSkGLKqneNhQZYyp2pcpjCewA27ZMVRvh6vs7AsYrVka7AixjsLCEqierRCaQRQvDmoM5k8FfkG79j4",
  "key7": "kJ58ahtBFu9KmysQuGit5Qz7V1aLZ8E4DEbkoXEiai47mf8UXzFjpRKD9BGSdhz6txDs1d72Sgw9ih14xDY8jjf",
  "key8": "WYcCAhhToNkVLc7ShquCX4KyFfxvkxQUNrCr5y32KwYUFxeyji2YfgU9LYVP7QzPZYDvwGD1K2LT9ntgAvoRTSp",
  "key9": "ERVvcSGNdxJLekZohtsGruqTU8Bd92n5P46ShG2AnvHo9g8BypLjkqcRtEHUefRCfma1ebRAwbq5YiiLJbFMBor",
  "key10": "4vqJfuYDqBYMV99MJe4uwLWMfKRaAeKPC7hMZMWsVqvv7gn6hE62D8xYnAp45UdhZ7yLF1mt3U7YAr4fvu1n2Sf6",
  "key11": "647Hs1UesaH5zvjMyNQAUFzCHyBqZt3uxpubSdmpvM5g5xtLEfCG6uzzmakkR4bKMGm6PKTith2XndpDeXDFvnsZ",
  "key12": "5WmoiATMts3eyzG1cmyato3RLnkztnYsoRgSnHtDGTZo6hY5XH5ABnaBwPrAszzrtjDBnBUgVYVRqRgw7u7MBRff",
  "key13": "25hRR8vLYRVTHd8e3fDu8bW6SLHKyQu8trn94JWKCX4xYWQWCwG6r5RUAkGToHUj3S9UdYurKTashiaixqyyChKZ",
  "key14": "4PvFuLktGFZXhq6JtQEBysV2YfLe1ZTUvj9iBoQemeSEbrtT4MM5Lxx6Ls95M6yWGYvr31VteGq3GXDgv73Yybq3",
  "key15": "3U9GVVRG455YNUyM8wqqaNrureYAP65YDmDCPV2Mih6msjtMaSafZSNVwoJmvCdN9nUardrfAXhE8zfQmJLGsmqM",
  "key16": "2YjXCzZpqUrFprDxn3oYsBbN3SbD9juV7u9hiCTbQdDTqt1A6sbLNUfgMjL7KYYRGnGnVt9MytHGuWn4731Jwv1G",
  "key17": "32pXyagNtPWutZfHJgeqDxLmuBbZcKsYJuQtbx9NvLXN54cAk3745LkPXFBq781By9qpuS5yJEnepG9F1imWYMDm",
  "key18": "MF12A5YCmqEfBS1zurF7MDdzNrFjTeiT2X6JTyqH7XTM5KChAaHr7vUJgR1PF5bM1vzXracJauJ3FMtVqo7T6Gz",
  "key19": "5uYWx577RUbsRZCrQ5hqpt4hsjaEpTMYQXLkwpVunKDYMbKPwDcmyw5ASM5qhNz7SY1Z6xbekLiuGdg6cQzTdq3z",
  "key20": "3rPkNRipUjCqy3E3jP9jG1Lw8iJ8kWuBDRx2tnpcMCwz1uLbAUjqW85Es18B3phhJXhLSTi9r5tApQqgRUgywKxT",
  "key21": "4BkmVgfrC2Us97aSWn8m4VL3hmXC1DXxsyRnJPQTnHemdzJmsLHg1xMUMudLbyWva1QxX7xzTm6XpjTF7yDvgyn9",
  "key22": "5i5mw1Q8Ht6BGy1DcCCnnUwJXgF7ToVSpw5sjFeSzzu1xdzY7khCStghjEi3m9NBh8f16Bp9pirNirz2iSgwSMfd",
  "key23": "3RL1axAr1LqfiEhB5hKzUcU8BDNnhom3HRJMXZyFwMf6yBLXChxHoHYCrkCxKPJszbeviCKrECM4wNL6RwP5Q4uv",
  "key24": "5nD1XrZkJJYMzhnKqPVhMMDSvWbc9Hi22wLq8gXZQPEAA66vxZNEdLvuS21HuWgfdEWEgAowUxeUJF2acVGrMzsj",
  "key25": "42mcuFbTTXM2fRuvLYmg4Xb8AHiMcQKR92r4HFB8Ff4sWXVyYrqR7FDWQNVWBwFQZtj5k4jLtR7i52unf1NJGEBG",
  "key26": "4DZDJyZj22N3XAfXZwv9nMTWMT1ZR3UAujGN4iVgEbJNDK6cYSoB7eUY8M8XWKURgmNGb8t6TNaVuAhjsMX9HTPM",
  "key27": "4zttExypMpCUhq8L1d1XV68uc8mL6MMPyaus7U3Kt7ygnbZcquusdoJY5Wxi8h22Frr4MXuWgFzjKuWG2ySSqaxd",
  "key28": "3t1qzSdw8LWZyLvMTys9V3eZjKvCv6Q4gh2rdoLwYP8iuNumvihJuyZF84xLSxTpRvVSJswbcixYSktZZGQgKSQm",
  "key29": "3NN1hcawreM3WDXjeKCkKHw6QWyxDKzqN45eHEvvafyrEwdT4pTY4sBpg43sk5ReJifuexh2MjPEmrJZZKa2VmVZ",
  "key30": "2XwebhXCw1WSB1LSDjgbvHHnCmvzqpAphU8sfqLSgv9ydJthyY7gDJozo1BzVjyBoAybzngHkLJwHudC1d6mEhyY",
  "key31": "soa8oM3fnVFnGkW8yoorg8CZZ8EFqtk7ra6ufwZPNYdYdo7rGJYLF7Dr8sPDYfTY5vHU3YUyBrHyZ9hXs39eEC8",
  "key32": "34vEWq94mfMkxBd8Csz6oSL7Tkm92Pp965b2PAURrCkr4cm7Aim5nRAdXwSDmovyQKKJGqNSqczYjJdj4D5Mweup",
  "key33": "62Qp1to3Veex24y39ZdJGeDdDDCNAbavoSp7S366AFehsBZJD3CjwASyM4PxAz2nGXJio6S1xW7Sb7QRBvexKgF",
  "key34": "3SLhYopPyVDvRh1wvW3Lnjj5UAwYsPfGRKRKiKWDREo6XpqrtJcdmFq5UYcEBCbUsieS2y2LSVyk1vknjA4trza2",
  "key35": "4TbjCY1vEFMFPxi75rQ7hdLseVj39Lof1N5zFh6No3yKJLQtkxk4K2S7BxsRk25djZxj5DrrgaGepiUp7XtRkiSc",
  "key36": "LseWSXBaQCgpFSay6qqj1QDbVMsaraj6i6py4TpGJ5NBYPRtVeFa6ZzguBKtntqFRSNsZamSosSYWunwf3ZA4KB"
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
