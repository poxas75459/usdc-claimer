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
    "3eD5agSfUYNbzuCZBucvyeY1GjyMGf3CigW28bLKoQGpfYU3pxG3omTCDFyLvChorW9gQEYvv7BEHiWTeSSmZKaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YMGXCBMaMQbf43WDaonEZr3vL3pXrcuQRFAy8FioxCyzYwvwpsXQt5ikJqCj7otxVmXsg8ndkUbXq3YZA1xJfZY",
  "key1": "3LnDsxwFiVDL7hKeS7b69X9UwUtPojyEniB5XLF4W7hHYrGipWsrN5LfuXLFDm5JfxyJJNzpfwF28xQRDsvkjS5R",
  "key2": "8McVsCmFKgsrhbtxrK83SMstEH1Ap6yUdFtFdzSqHhxZrmDZDtA3Q2w7Yxx1zFXyuGZP14Cz9eHAYkc9uptwsBT",
  "key3": "UX4ZrnVqMCszfEsBhRynDC7i1HMrmC9w21ZzZsTV6vYAkMtSScSNp7Fb7tp1TUU5gYhrLuhtXLd76hcn8QMPoHS",
  "key4": "UGg4H9aXaESFZb3m7o6wYBBPJjMXnP7ngr5Wrc4Lm1yDfHuLzPakhKoWMda7AmVj7qPWM6QU2mvML4WMzK9nNKx",
  "key5": "3TYQ7o5gndBkJ7kGDJLqGnsm7XoFsGvxcvmAhDqsy4EZM3CAfanxpqeZ31t24pTyfcLxqyK2owBtNFDqm46K1aLN",
  "key6": "5s5cR8VMJYCCwFLiobCb48j35LzWtHR5mTFvoWcMb6EdZY9yFPMGzVyeF97He3wB7BtXhJ4n4o91GFXX7VAWjkjz",
  "key7": "4FWX45KLvnxMzgy8N622detZiA5fk9Bh21PJ78LWp4ccqo6Bk7SmjWYGTZt3wGZEjZ7J12LG1NPB6Yfrr6HYCCyW",
  "key8": "4t3fkTGa6ioyonYTTCt1egDjz257jESDaPYE1CdZU5rUNXx66jyoMMmKe6aJrHK42uPFw55gUaF7AU6MPfroVNoF",
  "key9": "2P2dTYSKDYLzwMU9vkN6NjnWssjvcm2reG2B182PKFogT1LG7NJZ6hjSRJEyWtE2ta1QbVx54r9qjMEqCEcGsuYi",
  "key10": "bArSLKe8y2v43D16ztE3md76pLXorqzDL54NqoRhNXpY5evJxuR3k4rpH1HpdZyR6sTsDzvbpYai8AfXCPmBQpD",
  "key11": "4YTy37L7RZWB6kFjz96esMWd2djqDYL2yyLc395BoHnLJ3YFvEVFWxCCxB3ghYLiLR4QUoKyEjQJ4qDiBomnTRHN",
  "key12": "y3GN9SZfGcbPt7FPNhAPgW2FTz7sE3T7dmMZMUxpLbBzRMcF2Dr3caKR8uQD9iGB3doxjmqTPqgop3A9KdGDd8R",
  "key13": "X2WqjRyjurGU4bvSyehr7ey6R6gF6VVxmM6yefKZyE67mwPzBimjLdZQp9vsweurs8bvbFDSMNAHqon9DtHKoti",
  "key14": "512soWxjNe2T1buSTUVRa8h3Udu7qp5x8M3uN388T4QbXWER1JFvpuxD4FaNvpZRcTzeP7tKVFKEQcYuksNhp6qd",
  "key15": "28mYq6BJ1dwcsniVo1uenrByoWasYxxGg2QzjTKhdaTaQ29J8jZPUNYj9goWF1YCfheG3oxXfHyj52h7v2cRMFGM",
  "key16": "5ZfnUcypfCdJB194pcEaeFXTuVVv8m9aGLjGgPYN5XTm4nSnajEBsCE83NqDh2MTAvs8mk6yQmWQVqBPrA37U6Bm",
  "key17": "22SbNqUiPtuSVYzFpMgoiYJK7fj1DRAdKNEkttMyPghuR5vFp3YfEWYbV2Kgr8VAshGt8Turf6xyakgFtRoKoUma",
  "key18": "3MKDMpMCwDpKkzd8JuxEiEPD2unFQtVTbkotVUZa7YS81VAWDijQAgQDeKdvBUJ9waMDzxit2SeG5UVfUmwwy7oz",
  "key19": "5kEz1TfZTgJtC3tAVfsADUqVqfeRUzGWXXDnRaXp8MZJgRedZmgBmszq6nvMSo33YBw171bjgHJn7X1CtSjgePpB",
  "key20": "2bAHnaPqshN6NKuoFeALw2Ho3joi5Uz6hpvEnLfap5qVEmaY1HRRYPPWe6hkh15KKtmv5pFinE2P3aU72K8pAuKE",
  "key21": "63Ac4CCimgDmZXDb1jv88PWVfrF7cZDfnSvhEJpCjWLmqBSMMiugmgxE4ndaswRVcrsybmTfj5ch16Aew4g8QNFC",
  "key22": "3eJdvnyeWNudDx8wjx3n2DetB6d3ZhRojuz92PcrkvhcbUgw8vUig6UJF5Ghcg6kv5vaWz7qnrpoY1RzNpVz5PXe",
  "key23": "2HCqSKYbnDWeYPeYhTLu5DEWFstAL8fWBA1nyuQv3VcZZXZ1nFWMbKkD9P6mAhd7AnZpY7u4dVLJ2A774wzLaajQ",
  "key24": "8dpRF1HxPbvmqoSLkpdHfaE9oaQxHQmcoLEHX3M5f49S5Hj4wwKwsmLCRsM7LXo3ZuE3ATfiqAfxfvo8GmzxMed",
  "key25": "3XwjM8AhDRUTiCCjjSUiYHp5V6jxAsoShYFdMXa2djx67LidD2dMfcqHjmmFWhWZPerhDiNy81Vb1HVXLKKiNPcY",
  "key26": "639BM3bGeXJRJXsSeNjThy6SsBTk8kpmFpEw8WGzygactUnZnk221n3gj9Vq1CQocJKwkr4fQeY3sjjAqBR9ToHW",
  "key27": "4HWHxYFZu3rjRctRCHHLi8NLWFWcnUZ9Vry39Fg6oJWNarX8CELkcwWU2uHa75qtSsxxNFxL2zH1vWKSq8Wwd1uu",
  "key28": "5iNMuECWQq8LGLfwCVrZz593NGEhrjriWWyTejJZnUnuJUWH7g7b4aitCGwWMMCdfuVFtVsnpApXBpRs4W9Dm22Z",
  "key29": "4FVXc3zNGXMRqhfi8Zox6oQ9YtRbkdu2RvrHbyPovHWHLkrayjsPyEEwXVGyqYZ2R4mk4eZUY2X4c4ziiBMWkMSH",
  "key30": "66GgmixqsxKqdnBfVbrUibQrX9HBzVx5XWhazHXhHhFDs6PS1BfR7S5xKFm5H97nVaK7BN4YZ85KDMbvQ9RAS1fY",
  "key31": "47nfWsQsdGbM2pXQXRtxyaM7TUGSycrqMzUoVz8U7WdexXR9sL3WxpTjvEd1Nex9itiTT81PqWw4kZJfFRuQhV12",
  "key32": "5KCwzeQauMzyC2H6UbnP5WSxgs81Wd4h32XCKw3ARLRvgHPKdcmEPTtmpLhb6zAxcV23K5mStPgi4DrbwWM5FiHN",
  "key33": "KwWxgg2RVEdDD4BQieoQEzykpPDqH8RihxmY72Cvk4mfgRqhJfGuAVKK2K4s8hnjVLKrjvPTLSY95ifSGAanzkn",
  "key34": "4tQZuKn4htETu3ookrcsqAFya4e31VDuGAJXH4ZpoJfL5HxMBpjncjvj9KWjPuedHyEHY4grwWf6TfJNPFYZqbcz",
  "key35": "4HVxV1gsTgZcDqQc9oXL5r5CzobrLv7UtseX6EMK1HifGLEDwAjABV3fHEaiDPcxWJ4yBHkhVhafUPCsy8mYtoVV",
  "key36": "3Qt2jrmbJqUf1KHFstPoutX9b2pPodWhNvVzE2ok7KJ7F8drSgwHKBARiTXuxBDGjRZiVUXuDXjz8bX4ioNsgMXR",
  "key37": "TLE5RzbVci6K7kWvfHxsXgEUWWRWkRVbnZbPgf3z83W5RPq3UFCF31NJHAsVumFpf4BtbMe9P4Lqh7dp52M5Wat",
  "key38": "5SRT4dFDJiwK6hUpPRMqh38TNyx5tLVBqohPRjbykJZM7kX36RVjh2gNHFCuPRuN8njwFPcPN3h9YpkSSCzdeaX4",
  "key39": "KJ52ZLoGKYu39pb45b8FZRNRmjbBitq4S55pUJoL4FMnyAe3coxrK2WKwQvCSgSTct9LFNiTcsgRuk6Qk3Ntnso",
  "key40": "4Cqk5obKGJkgjD1vmoSUL3BLqgu1zdCZT7Ca7kazJe2uQwqa7LLus25FPWBY533kVTWfD2YhJMbSrS4kFcQ41CeZ",
  "key41": "5rnu71hXZUxTn1UZgGaiwwmrirpBAboWvZsUwsTEVdWJV4cgtYMQB1upg94fsZAiHYngqsTdF2P4RvZ9cLBPUAm",
  "key42": "4YDiE3RTBgmb17dfLQXKd3CbaSCv6aHeAmc3psqRucojUKKRm818SNMwt1T9NSFUFvSPENX1NWfc9wUg2hJzawdA",
  "key43": "5rxjx4ErvJCNEJEsp8kNZNpbQK7wRTWseZXCCNsKXpwCg6ZBy6NnjBPfCP7tFiTUEqFTJPa7D8tb5P9t47KqZL6T",
  "key44": "cJyxfPyKFDqVdMRgnRRPYb8JkADPhP6Nf6tdEpycgzmteSL3FcLSTs5jdY6QESv4EwJwiZaBsLWp5PytmwdvCUV",
  "key45": "3rydbJ61fTbzFyZHxuDhS9Gh1Q5hzQe6fu9UuQrL84zUaPA9mpccYNaJMNzitPD64MA7r4Wi2AFb4ucdLxbww3As",
  "key46": "EAUjreUegFFf5Ah3ZzgrrruNpWFocM8jB4opVGH8hs7T91tQyyhRNujzsgHBVxCcMapjWdDNxryHX8Td7x2zbTk",
  "key47": "RtXiVT7qX6cxRu1jEJ3AWDDURPAC6jF5xiYaKsgLdkYPP3dR8zTt3gVPBMVvgLbuH55xzVVSsNS8KnrvaYcgyyr",
  "key48": "283U9pZtuVitbE5CWdPJfpbznaAfYkmuhY9fiC7pvNumMyhsqGMWisn6y8us3r95L2UYQ8DZsbNH5aCEugteBqmQ"
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
