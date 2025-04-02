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
    "2sb7R37eRDAdXGtmpzsZZfV1hDjH3ftdJWVEcoaXuFt8L6qaCoLhAfVh8tG2u7beUdvzobruhipJwtxttJJQtdz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BofBeRoqrdok56UDjnECgpdrqkL64ZbScwoduwPTEyMj8atAoPa1b2zCTnjcbTUh1qHrSG5fb7wmXPSMPbhw8LC",
  "key1": "3Vk25D9ZiUTRR2T6dvjkqvD32QcEfP5UACAvzRxHsf7fzHov9Gw1hWDUp9WvzCo2ESw8xNrwBDeEedQ9r45Xw2J",
  "key2": "51CEvyTLvao69h7ypvDz6uJoAnVteERV9jxot9rS6tuALyATUuEjeQSmnbLLz2i52eGK6b2zVagf7mSKTmqzunUg",
  "key3": "4AvnxFFmLgiKif49W7oNT4CN7xoPAaf5C9UiY27HtDkddwDj2hXStsg9bQ3TwqRJkxzUTDmQrCxXucNYyPez7dao",
  "key4": "3KNmdFHjX15mXJz5kZe24TYhfMdib1Qa5N8Y3ganxgn9tJcQtEc6MKpoeVXQ8UAJZxgDmm8VgUtY7hQFkmko3x2B",
  "key5": "4MdSoe9XvpKCXAsU6MhGecbmPARkD1jGieydHscvGYmeDSiNrdXyQTg8xpTNdXM3wBuFaYHFXN57iHFwEP1mBRxd",
  "key6": "4EeZ5GnPyJaPcKY88W8btzYZYpBjCWZu1SayQJ5DZkgQd9UwhtZ8qHc2RUEbKA7noYJmjp1DLUL8eSpp4z71yXcH",
  "key7": "h11wgiQQPegPH4DDoGrKgfUEo9ur5iwNqmy9k4B9RFbB789oxNafpV3hL1CwZxrL3ist4TVWNWshru3WaokNCj1",
  "key8": "2xrkZEChTVEdPyF97td4Z5EMBYgy2b6y2XRgdbUJqeNeDhh8T72vP7X9Q3jJWT94HZR7A1gd3nJP6NSHALEiniis",
  "key9": "3G4YREcq6F8A44tRypcCKtenp7GKDRC35WLSwJ3me7ynTnyx71AzRa1RvHRcmoRxGScbKw68iT4wirihfmdBE7Du",
  "key10": "3wavLvb7X3PWvLdaULkgC26s9HHUFsL24p9NNUqmBTP8AkG2yiDHMRcUjtZrSEywCzE1FYsoZERsotDUezyN7nw2",
  "key11": "63Jdcmn1AmTHef2qGCjkyFuZWRHc5gkvPeBgEAf4AXD84sHFdhRodfaXN5rfUUMUu5MLmf5b9fSKQHWfY8Uizk6M",
  "key12": "3eRJPv2EQxiXqE2qdnxSpA8FZA4GWsXosWi7zWnSSMjqdGErw4bXzT7uwqTGVrgsBZKkD574ay8nCQnEj9ecFoh9",
  "key13": "p2cwcMfEdS5odfGB8HZuFGjKFkRpvSa6Sc4esocomqGNs1MPT1WNEj792LTjG2rFEXuqG4B2hSjNdcqwXP58jaK",
  "key14": "4oREYwves21kBpujBjoBqN7jtBaGrLqsL5uiWfaptur5iDA9pUsoADriwW33dzJkyQp3TmTA97Vw3gRVHhGnYSJi",
  "key15": "5HAsytycyKcCLkWcrULTgM2MdQ8oxQ8qh1a4eaf6Fqp1bv9mkesd3ujGG29ScHGbYTSdsUXjF3Q54qhadrsShgRU",
  "key16": "VhjYemCstdNiSkuuVFLdU7SHViXn3Q74LkU9vkjtYAVAtpi6QfHuC3azJkXk3cvYsyJx9yyvsDtVNCtGXx4fbqc",
  "key17": "3Dx5QL3Z26Lpj5PJokJ4ihqnCNH6NE3UaMNwaumU7ALaCqJMGHyrerrznHf2oSy1X17RwkBfwbqsjPhyEQUH949K",
  "key18": "5mkw86PmZAgYM3w3ALwEjjg3JkLcCYAVLjfVAvadSx9hgPScMxhs3yMEwNfPjDo53amscp9mdwiWPt4rFLdsufii",
  "key19": "3PH9E4RRfRaN8871uK85BFvjXJdqmuoNqRMv1e6cicHzWwnk1xvG3Q9UuPC28VzRKtBd5w491YgYFcVynLWZYRrk",
  "key20": "4vsZSWdS27Fr8nSpNT2JJgvLGCVAbF47tsJJbDADuLkYv71EzDpfLq866SPb5HYCHkTRrgNtREE7Jrp52458WWTA",
  "key21": "AoetoG1qp218SFaBmdsdCFDD5eBPednKviwTwZMVxqygPM55bdMvNDb6YR6f1eNCyAaSm4HPDGtcFaqR974UYbz",
  "key22": "3aAAuA7rcZGVZNStpCs3ax9Q4KLpfhR9ziqzYWqPwnwh7yw8B4U9aUa1EkuBAHLFYkbN74wF1DCWzWXUnS4bToLu",
  "key23": "udZ5jbADkMoa6h3ChGetRyGGXtQQxHFWfxWXTy3AEZJZcXBrarQeatdfKFHSpXL3mAx5HuwsqorGghz4Y9j67Ej",
  "key24": "2Nx3xTCBcWDMqpAaEs7yC3LASwA4KrLPzSUT7TrrKZsSZMTmHq1G4pwD1yYxsmKVGSXJq7eP86E8pdHMswm8sg6z",
  "key25": "4vHpLci7D59Nfw6GC3a7Ev5ZjKTEZXDtSfmj8qEH4DxjTje2SptHF579FVUmPvfUneTKzni1YCrfqrX8YXzgbLiS",
  "key26": "NmhSLee57KuwkSKJ9u8M22EwEiwqvvkYySfdSbANrTwwstRdExyMHqggXjNQL4iA29XA6St49KHLsnTjUG2j7oS",
  "key27": "32ECLBqzF1KDEaErtNai12rRomYu6JAVpBEYcnWhZw5jDauY4TcK52d41DFwQnTwqrhriM1KM1mXZP97fXDgPXB7",
  "key28": "BLJjceJTAK9LCyGGFzen5y2RPMfx3yoqduoYCshrxwQhg5nnrfWJSLYfs53E847ruzXsuXoqc9vYmymkthtwnxa",
  "key29": "4LF1DtJqo4QhRTwLPxL2JyrNV4z8L1nd3GU5E6BZzhqAxMNeMNLHzVmTH5uBuhzke77knftk5WCJmGNPLa64LziX",
  "key30": "3HknUDJqdUHsoNmyGphtxzdXqZQG7kYKX9ZTZhLaDqpAS96pJCAcitfE3oXU38AJdMWM2tUtsAHPmFuHtnxiPEU7",
  "key31": "5cJWeJSnhA3StdXMDeAMYVPkFGWRXxzksJVcdTvLag2y1uSun4C2RPp73gi8DGG16Ric6dWR4pn7A2MgBDxThP3p",
  "key32": "5ZJ3eiJ6Uo9CeoLSSfiifF3bvBsiFmiVgB5HENUBLMZTeQbZ2XvXh8jpwD9NzpwV9dwoxHPhRuCss6d39yRWKyKE",
  "key33": "5Q6vepRC13jgCGHxpbsuPiDDAP8Gv8E6eu7NxojTdXW1YHin9Va6Ly5Job9QNFKF6WL3VHQuKDuj6LDWqwpqJpq8",
  "key34": "3j46RDPZAD65pzspH7V9fGrmecG54HF2g6ez5gMhtfb17PYv4wex5R9WVaGHi1zfqo4Wcd1u5oUddSe8WU8HRgYC",
  "key35": "HASPZzvUMYKwiu5DodJ8A6A23VbqahX7ei5LB4KbA1rqjvaZuB19csRFpyWzc5rtYhRtwGnZe9hJCjyPE9kXd4c",
  "key36": "4ofovsb7mLvHZykf2xisERnPLwQf49yvJWzTzfYZxBTWVakRSnJhyk7eAnQdPYPkHZu5PWyhuAWgqJvVMWDhs12M"
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
