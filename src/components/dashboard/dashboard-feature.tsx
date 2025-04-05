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
    "2BunWEvR18CApPizoCZzXt7FrcAGQohApFBLzns6JStYtVT5soBoWswc3ocHLVTMFHXTDDg99fnmeJ5mgX3oXucy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qs4XvWKwSMkPdq8iYiijwhpb6Fro3NgW4PC5NESu6mPoqxsPyarQTXh24FAVKTe1N6CMKMsRgvo1htqckmMiFY3",
  "key1": "3r5RJvUXGex544NzAmdgwsMURZcpWoxqW831XybbCxGZ71eJqXEesKwtEWNgznFhELXNUjgogVy1QXXAmq4nFc1V",
  "key2": "2Wxh6FBXws6CiWP1fpHyHivYjC9pnXsBbPn8eZvw4AkmjVWR6LaNM6pSdyH6cEASGKiyuy9E7HQgcudQsp8AREx3",
  "key3": "3ctMXJ2LcpL1TgvMjiJbREJzdfqgasjBpPq8jKst3Sbz89oBExW4Qqk9SAFKVyLkcRC57GdLEfyRvKXqqMmW4p7q",
  "key4": "3s1rjSwM8SP7aqR13WqeE2P1myoaKUtN1kLbNgE56mtyjLZxv2awLbCGwiR1iezGNsP6D18SAbQc8we1G52eXLKM",
  "key5": "5hWVXAjRU2aZfJ5pFb5VsZT1o7QxkWQQ4pekYCvi8NMgQugHULeRFmMYjfb85R6WEki5D7bTRRfV3u44AvqFfSZk",
  "key6": "5yeYNhHcSztjS2muhn6tErZtvgHFDLGeh9reXwPBocDNPFUrVQfvGMbwKtrDwSTh1Go4puok8ftmLc6YWSo2kCc6",
  "key7": "2qweBbm5M7LxdrJMjX7qBUBZokUEZtQiMDhb6UmzpePaBUsA3LgPFhSq3TDfLsg6N1hjigZsJvGcFao7pHFrUPhT",
  "key8": "2ZgxNRGP9xfWMGmn23Mdc8JUZzWn351AVWfLHFBsveP4k1SvatoSoqrEYdijY6TtFjncAJQCJ15wZ4XwFs5cXVLn",
  "key9": "4biwmtg16hTbNznV5gkhp1zd2zBXZ4xbEexEoiehSvFXuDudfe9B3uLvacST1crjYzMe5HYG1pVfJBMnA1S3yXVq",
  "key10": "3cWYpnhaL5UsjiAgMGopLH47AFh4w5nio5pbmHNUPdNqchS9XjpUFt1sAWrgs41adtnZSXXKDSWfs9sMTa5yrFnV",
  "key11": "46vVCTNE39AkdLHjcazbwjVK9BD8G1xkeKWj1iKszryaoudAMNghbkZ4Kdn9Huc5RSTzPt2bd7kcHXosNu5cLZm7",
  "key12": "131RSTcoANB1RMsb7jHPU4iHUsXWZDZaCbhjzMuGCpwai97aAh5GX1i6bKhnUd3xmiAsWjtveGsuBsXK3ovg1Qd",
  "key13": "5y8xn9JYUEEFL2y2LTQuYRwgSzy2Sc6MjooJUEdxxLPd7ojwTtLAeK3BqK3f44EbQjRxr5jksp66vFVwjKNeExoL",
  "key14": "3eUW4kCErSodXzyYJUKPp8tGqkkN9XFFchpZYieCoRQ83YxkK78vBhAHyiKs1bYC9GDG745ZYT2jnARRpBuf7d89",
  "key15": "4VCuxTwLE5MNci2nshGxr99FNiSnN624tgNomY281i3Jtv5ECC2GwcPqm5U9ixs1MrE5dtRX3pt1LUnyQXGkUhuz",
  "key16": "5evae8b1jEMsoAbsQ2VX5CqALjp6vrTjoXJf2WKBN7zKs3fpqLo77j6G3g8JCJhabwLrxD9Wzz2GqPG8Zj3pTqae",
  "key17": "3f4HnF5UgBF7hJskNamti5jvUooQazigyngNt498XnJT27cZrVkzUkB14guS6TgeCD1WKuKHSLWmMqreXaShgChJ",
  "key18": "5bPYu3p4BnH9RTnpXrbRazKazGda5fM5vbC8WrjdfUigZ2JpqkkP3XHKYU6HV1DFdLdyKjCgnC4Fkxtzm4sHXYPS",
  "key19": "3uX1yZaJkq4ESFoZdip2EVPTU4pMwUPoXhWsVynb8pKtLnbYVxLx3pfYscgsJTDT6nuLhzdHD6YemsH3gtyPi8ka",
  "key20": "2NEuPL9WYg5rKxeqQCRfWE2T6Hfs2WfVtscSiboR7dCvvPMGznjxQBiVLcLcUmJ9YDADB9Cwm4gfrk2mRqrmGFzV",
  "key21": "2vAaRU9Qe8uJGjfNDEopBZuLjHXg4vE8rP8N8dmpS4vSxfixqNPV67qAZsrU6ShVMaU2wi6rCsKgzwNxPcWPqS4m",
  "key22": "5hpnQ6HjXeM2Tx7xnLnyBLK2gzBU1wivGbUJFSTmPy1obJqLN6vzv6Lya5pWAPxv2shFcYGca1ss8Q3S8FFws5mg",
  "key23": "42vgpJWmdahEbJ9a3eXbEbu2FYauRxcDiB8QLXYWHbhL1eRKmqf7U8NYje8SdWfixMe1D9uBYRboPB6Yph2oQTKG",
  "key24": "5QckJAS3yHtReLwjgRKYpmd3quCQp2Qx5ySxTKrqieDmSiUfDLsf1s1ifgyJ28thLgTDqfgGJHk5xhG28tHNVo2J",
  "key25": "4NedKTH5SxeVHGQwEtKXivJAJkM6KogdZhtBB1dtcHKH1u4e2qfFYunbAub4xGDfVKpETNYniAhE3yKRGwDLYPFc",
  "key26": "5ZRtsuyWrkc6jgSjejLGrtw8U9Dgk2s6PygPtpVRfLnyCohpCK6AZmviuxMy3ieSHtmZzp3fWR37LNZdJScwCtcG",
  "key27": "5W47z6jWfmz2fgZg14RmuGD76a2ehFwCNBbjCM6tW7x4Rx4KEfD13GNvqvGh5haqtSJTWoyiAtn2AAh3xMLfE2fn",
  "key28": "41G6qVJGJAsFG6qRCjfWkHVDetrbV9mZoTbaoG9nrdgNpjaRAkbobjSDQwM8zv9rwdPiqRFon2YKbaPs4wn1orm8",
  "key29": "3Yuff4KbALrLSL9Tx8xDYKwF6TJQ68w5bEovDVgHuUubRzxJuRv4XGUCcpethSR1NavCmuFzMSqQtfHWMckqDn7j",
  "key30": "3WWJWqaCoAhPNxTLxmwy9piaKE5nLq8eePbwGPE9oLorv2Dw88WqfusyZKBSJJSRH7QDGWbJTBmyEdkVbziCerCJ",
  "key31": "KQ2gXde1hXoiQdJsyL57DYgS1aHQCqckGc9y6PdYwXaRdfenMz4bQ9HDzD267Sp5nCE3i3XazBKNtkAzMVTEReQ",
  "key32": "42GgDKEW3Tf51eaVvBAQy6RANacuDDJitwdnUQ52qHqykWzriMg19iiULhEgpf7Wr91yis8Nj5eDAYmkqYVrfbB7",
  "key33": "32oUxEssNv6ZxRj5dYkgpDhWNF5Xt9MXESNbzZfcLMpSRh8wjp5dCGSemroXC5o93H7EfZUFh72j4L7GD6hzcFs1",
  "key34": "5T9eSTFUTkBbeYPwad8fqA5k6MexwctzQbpCe5sfY1b7fLP49QpGn1BHqNdBQ7h6BVTqCFdKrn1EczTe6poMBUbj",
  "key35": "27Vjw2jiALBK1sSFYJv79E7iK5Dhf2wcSbRmVo5VCRAogLhuy13xfrwE6GY6FGdBVjXoUYyZP83CfCT3QbxqiH3x",
  "key36": "n422LQueCbW8XrngRJcr7nMaYaKvfGddxDWvfRNXrVSaoRXhD22B3LBcWL4fuJhUMrHYTMuAjSrm7Fq17qmRC8b",
  "key37": "2yp2TTu4oE8dReBkKLDLWgjmjRYKb5f3m2a4tkMMLZ4aH613npQ5fwp15LxPfMpCMHdCe9KGL7yBdeEZDBJiYjJ2"
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
