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
    "tw8DGdj3NkDYpbAnmfv3oaPxofXJenxuS5BttLVChUjpjBfL9hoEedRXbmMYsdTJCkhgsqfhwfRp8AfFqkL7tj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "596mLPZkvitiScnurABqpPG7DBGq6WTu8BLZuvsi3vNvyawcdCdC4TPat3rd1uzi6s7wrc8HLj82MrC7MyrAs5KS",
  "key1": "5tJe1JB5RSnWJDpKQwygTB7tRc5T55dkjvAwdzrvvBjWnWc7Gq8PtNnfykohkFWBDFXrf1EtnC9pHk3HfNySCCNV",
  "key2": "4yusJhY4v1xR6igctHKsQNWATkeqXxoDKEF2Leoe8HgkBzAhRbCaj7erhfUHZZn9bjNvAGisw4zZyqjXSvyCyyFu",
  "key3": "5RBU1wZBS77mUE7PzPuvBuFFSSfqdhD5AxxZLxcEaPAZ7kJm6KTLdmpG6mcnHaoxNV15SUTJuSGgbczcqCtFjCZL",
  "key4": "btiZWk9W9Pne9dAFK63oa9aZLRpJTjjDDbzgq6keU7RrXLqWpr34G3ioPqMoAVt2e945bD9tFXnvXebNRZpLjHe",
  "key5": "4KXTMfSiLJmjDgxytm32AmAQRmsTfmWYVK76vAsaHrAo1LArSgD6DM7HkaUNYc6yhzqiruuhPhKB6atWSvx4GCyy",
  "key6": "4hn4g2PHLtehfurzAPShG7tScgFNQAShSf8XJ8HAx6ocSVYR7RrBi5nScdcMCWZ338kuMUwC9xnGQbs9xPYPTLDb",
  "key7": "5tXv8jGwahndys9xaFX8voz17Pb39EV1YaXdriqvG35gSJwnS3CSPY5GfKRzAkh3JEfeGpNasWq32eW3mCscepYp",
  "key8": "2HLXxiqntX3ZAecG3pKsJjoyfefXwZqBQ3PJCa7v9NX1FTq1P1xu9A4AsaSdPv6j4uSw4WF82CzMRAaVvWzczKqP",
  "key9": "T3zqDoAvXLu1sy1ytfPU7ZkogpyWfbRBhvDDuVTHL88ACVnATjz8B6Bckf7ABa2nq4ihcGUCMsKAMjfwcf1ixx7",
  "key10": "4hhPT9ww92FQ57knXUXayzmv874nMAWfZHcP2jWW8ZLu3Wd5u2fyPHVA1wxdhaWFB9MePNm3URFdq7ZnyeiMk1Uc",
  "key11": "3ZoN3EVrtjgEfa1fuCNYp2YqC6WrDjZe3CHJ7x5hJboBWVqbe1gDSKC4GmiykjB82TTFu2zLr28BmzJaEmDdgwFm",
  "key12": "3am4SNdAyGaNGmpQ36xWmVjKdKQJbYtUift2Vcoj9abrnJ6RtWNjSRWJ8kwSp27rsHS7efjaA5y75PBS2myeUUtG",
  "key13": "VyqfpuBPqg6wzzxxa7yFCLYRprqLiYWw61WdJ8rTKkbxANwVvgNjvYduL81Qq4MSzAttgDMxvWVwVU2mYPJgXsa",
  "key14": "386Gr1hzQeu4ap3fSSpHBzBoZH4Y5SrF6uxHyaPpfTKrPbpEDvAhudJDemsAcHYuA1hj7pNnnFxh4kVrcgw3hrfs",
  "key15": "5c6UVBgBdeC1P8MVKcoVpiEhnyitxwHeNMMZdWkRhk8drduJ3kV4WVKC1ien7gd2ephohuhV7Jqf8uq3xNQBhKCc",
  "key16": "pMYuoeERsGeJXHj4HwpTDRGhr1L29d8RzXDVs2sbyCpPdjfmWk4dhQR3JzLKXKDYSRB5J7Ez2Kmu3J7hX3qzHNN",
  "key17": "3WJdjSoVNZEtrBYaD2jCy6L8Ujgfa1KUUfQym9R4oyVXhuKVVRT6a9ojpAd5jSmMKvKASWiirRRs6pFyQREUokRy",
  "key18": "4qVf59ixiDie6dNthB7jTMmn4aoUCAtqkGVczY2zMT3CDfnw4eZAk224wQz7d1rctpwkU763gFoGkBRdunaWbzic",
  "key19": "3RnB33JXWHMLPr5tdtLpVHz6hv4vf6aYT4gUHc9HNVTJvnio9Hzx2asRxS6Qw8zUMhiaZZMdAZwqV1NyDdfua1sU",
  "key20": "3fhTSdqnfTah6zd3wcXKZM5CxoAX1cGBRKyjqJgPYWMzsRjkiJv6Mb3vCJCuZy58NpTS4eDJQvCPs4Ttd5k1Dusn",
  "key21": "q3macWresT9DPyhuF1t6XMPDNGC9fAcDPNsNE2zZ2ForgpbPBXkicTviJ64x2wcFkJiHEwY7xt9zG87r52szpL7",
  "key22": "sJsZ1G6abHzk7gBP3e4ebH2iA5d9xdqMLRoQwYqGsxHMkXVdYVRdJsNFr9J2vKVFGyjmaXznFiVH2yxKn4ZHyU1",
  "key23": "3iZX1xQumW33qbCzm51UwGDYXG23gDrbGc619MpqAqWHRWfEipF7UfZutAmCtsAuM1tstQxkW5iSKaA5Gwp7wNMg",
  "key24": "5UTnK1GVCdaaSwgV9caUVY9JQ4D4hLNcukav84asJJ7ZP3Vd28v8u9ANJAMZJdghb3xWgcmrgftk34FWBr1TzZcZ",
  "key25": "5hvFh3Z3VqFqaLS8yfAra7Cwg4tN1DjPCnDtczSpymbZsvJzg3ThZBx2sHhhc7zFJ1E4Ny7vtariUenf2oErg39g",
  "key26": "3sPFLqXWrviiY1KbwYS4yrHuBs1qpB7hgCtTRUBg7mNqHQfYSG4ZrDWbw7x2U8yrUcPhxS1ZnBDB8yitiPNH6aB9",
  "key27": "5nyBwVn4PTeD4jzbxYUC9RZ7XB376fdqsTf8qARtjj5qfVXBeNQbu1SUrLyTVfUwSmoYkseECPt3xC8qMS3mpFGV",
  "key28": "2BpFZebfmxjvxRBR6HCTpBCx8uU49kmn6ZfKcqn8fSe4DMBSMTkQNFCgUGeRYYLJaS9WyiRgpneBpPDxmbT8Nwfp",
  "key29": "4vWmKK6E2fUq8W7Y9TvVLczwBXpH9eyCwzmZe32cFTuEAyvSHk1JDELbzq8EdSCYBwUpq2RZy2niYa7pLDuzSXad",
  "key30": "4cH3rNMGtMaEFAUkv2UxcyaEfSNTTNdWfMDHyAQKUAd584yHhgwzruybKaPxaE9JntDHagrhgisNX4ioJHQoHuud",
  "key31": "2PctuTPgQ9JkgRLzngqLG3hMG9ANKJqSqrHZEd7ZknvgnjUyMpma3sEUFM19L2PHMqkDVn9DeyBqgZCBAQRxgTEh",
  "key32": "2vwzPVoAohBUCC81YAzCy6V8LkTQVRwTVa78nLzEZLC9PLCdMNPVJrxkuGSF99qnf72DAXGykwy1cCFysa3ogHnJ",
  "key33": "4Kvqu7d88mfdciEYc7hsXUjoqnccisTogub8GNxPtpLbPrpmq9e2V1bAQdqWxTQabiy5vn7NMCaheRWEVs9qVWsR",
  "key34": "3ArwSQSmxnzYik9vvwEjFkumPQSaudpRRH3DdHEngyVgVodBagJKWETQhBj1ZbBxQHfVSJQCzXEmnVpUy8q2itPk",
  "key35": "5bKhUELN3SzRkUJd9uEmVnxcDxCqesDCq5VJ1iQvmWn3J166A7186zwhAwSgPz3z4hhT6VA8tk2wtMVWxE2CQJJc",
  "key36": "4sNMtskfAerLUm4dddrBfskTWGs55rwbQeJDQRYNaCAQGECruBCUTH9Xi2Fy4vyvdMah8PDXmUYPyCbz4qiiQhQx",
  "key37": "VzMjwRP7uNPYFU6kqQrCT1rUBDHUAHH9KoHvmBbKpQTWsCQ4ZXBd4iroNje8ey1kmFUqNGBqoPWrVuH5d1kfDDM",
  "key38": "4wjz1nQt3bUuyBLgBELq8iLx9QMLmdfS6stwsLMw4VsZ2T2FC45pKar8DBJTcCUbC5Su6qASrTyznFu6QDowv4bZ",
  "key39": "zV4oCwUxqKA4Y6S4HEY7cN3UwvjTJvZvtttF5EmaPw4E8KVim3jPMFQfKWh3SjKRjAUZvWnZeMfnqtQ5Mo6ywZq",
  "key40": "5pAGsLSD3RyXqcd1Xq58hJCmE9rrrWELkLoL5ZjHDv1HbvLEVcpAC3A5ByLUZVuPW2yf2X31pbUgDtopoWCgH9sm",
  "key41": "2691Lqp7qyQA2pqgBmx9BS4zk8fessuDPtqAfy72vyR8ATSBnqkiDecKWqNwMEBcUFsJFzPDLgYRrdVPCCQGk1Bt",
  "key42": "3pRFonyByxD9pGDUewihQmmBSu4stib1WVXEhuYT8UMz1vZ6ghK54n897AYE9ExrVc99mauAa7FfUyuaALC46PCD",
  "key43": "XcqPSje8xptXtQtfPAyE45jGf3j1To233M7VBgt1dWtiqYj4vUhXdcmuLisE1cZN8QKKbs5EBGHnQBCUudvUkLC",
  "key44": "3bnhpV6Au2qkbi9sYpnnDDQMW4v6vdKKXp2pZkWwh29RMPE1n1kyH1mZKmUTDbGDpmB4E5MCXLaheQUhWJPtxHuQ",
  "key45": "3P9vUSDB1S5JXPhbFP4BE6APPxbnWvFYU1UKj34YikLx5G5x9F2AXqUmYg3hGGmYC5dEJVVfVBu4kwKG2sHxE8Sg"
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
