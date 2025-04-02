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
    "5U9XT3kQwXfL2zDpQfMfgkR1vKnMDqMLVvmZgjad1KXup4Fkcfhd6eaGXLw8X6zuvvRCy5FX2G7CwWNCygfWu7Kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JUeRivEwjWEc9gEDTBUaby3cYGBywZrTXvHE5wm87zDWYJeVvC84SW87HRrWj6HmMhju988GFNPGS4nvxYym4jW",
  "key1": "2mLT2pt9PFFjGdwH6EgSmB37vtmKEzSdRzzcVPkVNgebkVAv64SrydakeAoxdjSJmNTBdPTdgyiDZ7HeTQYLYTT6",
  "key2": "63MMh98jwbhre6nszcwjxBHEukQET1f1zTSbo5cwoPXwtT5JkGvPvgPhcjLfkQ6URDgjjxj3bE9VL7XnBEwY3XCE",
  "key3": "v1ikEDGFBScSB4vN7fKRQ6dgpjpC8NABaid2zJyUVh2bBCwmVfdgb3XWVk1x6Y4SHq5WfWagMkvXdGAoTrPTJMc",
  "key4": "369ooBTHbkaaYC7WcyrjMR7URJqRgXRX4R9gao3vycQo1wBJgqfH1tu3MXoixknQvAbrpBSqbWQe5b36Sa2cdhEV",
  "key5": "5aF3qXv39CUbrdvTg9RCTEqdXFMdJUubfLcyAiRS1opu8Lc998w3UdWVUJfoppLAHVRCqM2qr9521kBKBLMKZYEK",
  "key6": "2JnQDFfFTjPwtNXHTr4szRuv7iYjfsrHRYpgUgUSSTTM7BphZoz484hJrnyFg6UnrrGZxM2V78wK1Qe1ofSHHqU2",
  "key7": "kGovsBgy2quen62bMfx9y9gDE2PKgPixTRLHKdw4jrXy14dG5kqqggHmMCTUp1vJhEdzTzkVMNCezffPjn5vZ6G",
  "key8": "4TMrdEGz8iXWxHDGnaynzY5qyWRVGdyCAgj2aH3zMjmkuFSr6zfHKraGTfiCmkb2Ve3Uy2fcCZzmMm5EdqQpbepy",
  "key9": "2RmHpDbbbMMULQWu6VJikNUAqvHXCL6uDGGdaxVZ6zB5Vge9AAHh5rp5yFmsmG3F5EbgsrnDbBmRLc4jtk2jAXkf",
  "key10": "4HtP5FwFy698dankm9z6hni6Z63UgsTThXVq7GpHyEVU2zF2QCaB8SWJNUAaswMUahEqkunWdFGnEhKbwhU3gQCi",
  "key11": "2ndsrxAUADHvGjSsU4X4L54MS5q2ZDPEuNqWKT4pq1dSEeQtvSqeP16PRJ7borNKkdo3TEf3bmg6cMQxhRo9Qbea",
  "key12": "5qJdpESgUPEdDKoZM5MBjSvhHPmxXUAFjG9L29qeJBodFvJp9Lobk994evENrQFLuozxF8vKeujagbjLUmgo8ZY4",
  "key13": "3u7BHhfg7MTEv1kR7yHyXZcUhj8GC1TM4VMSuuMeoJ6hQHYRar1r6LDqaY6H5U5sJGJ8DcCruVAZ26bUXLEPYGL8",
  "key14": "5Wp7Bi7XHGGbPn3JR52LVrBwjjJMgU2zGsavKtxzTPAgTgTNGZSZps7kN4otqHikGW28oa2iARiWmhUU4nXdir7F",
  "key15": "21xHVbpokC9huvm1SZm61Gzrm1ZmXe9ntRShBypqZkJc1xCqUMQhZrHcGnM5FaA1nH2X3hTNLvhrgUpCKisxHLFE",
  "key16": "5qepxVq4K46Xy4udG5DRXWexskSx3k2MUsJXxo6yhuajs7Twe6pGmeC461cZRhQZ851hvdU4LA9VaMDNoA99TfnH",
  "key17": "4VtTukWcJ9DidGQHdLFrBC3m4oaUubYu2PmG5t2UmVnXkSdigNRMoxKSw89Uu42T1xmsraboXDHkT5BWfEm5Ce6L",
  "key18": "TRTK7dTjS1A1CUipM5HF4Lt3LMxU1DAGwqzuVDL4ccTaANdenqthWw8NXdDQD9nLAFsjvf73q7a5MMKbouKZ5XN",
  "key19": "3bvZoj6RYucF8hZZaYfGfPYR6pQR3F5K9RBbS2r2GfXX9XVXyUngVULjPHjUi4bvm69HrihGfAmUNuda55CTTARm",
  "key20": "5BXpqnQMkZKEPsAG1qrH5rY1WrXr5nsEzN3we9PDU6gKkvwWrKUy3juxUQWBisRTGnXVA94EhTQRjEsdUa4cKLNs",
  "key21": "2w8npWQei7tkLkq5rns5E5YEbaLsouc3Zexw4tbqGtWn8mzxjFABnX5EBAoj7jyyexScd3koVFwixjXKabBNxM2q",
  "key22": "45cPx3bNBopbhCnUNtF8CXhuMZgRRsVMp3RBwMKg6jJJSuxiMzNmV6EomUEhdm74c9qDBRoL2fC8ozC2wQif8NfA",
  "key23": "5x1u8dfUUJUzxJqLKg4ZbmgHNZ2B1EAdCUUjCp9YmEedyCbRcYSsy1nnpPaVtuTQ8X1gEQi5uRCdYLaJJohDrVHZ",
  "key24": "4DNfXRKGfhpGbkVP4iqFhjUGPq2G1bEiMjTPi1YtgFngGb41qkfvxY5PhNLyZioJm4v1GFuZf3AZJXnFYiJwX5ZH",
  "key25": "3ho8WQFs6VkwXf679YknFGGc14sgdwWZVSCsjQaX6ZPTxbo7uo4nWaX3Zg6XkaGmqKdpM3bzLt3S25h92dkAhuCp",
  "key26": "5fCvsWqeHEFH4WpDciAprp3vGmogWznp21B1xASYP9weMB5WPPicpN8p3CPjCb1eShmDYtKrwMX6QugcpQEbcFsg",
  "key27": "GJdCs7WrzSonju1zgQUhtQCMEbJWppror9BdC4X2Axy13XBq9JaMtwjB8tzKeX1GXxZWgqFDPTNVqGgXXHv6tiW",
  "key28": "4agxWdJ7M7VStF7HimBBoVisgb2uiKcTuM7sCpLW7shxJ5C9TPGBdYCNfTT6GdYAditS6vHa5yz5oVYDETd7mYFS",
  "key29": "jE7qV9LUfURK5bhZ56Wvrw4ynDS9wi91QNpmALrgnWYZkaxxRsj9YMEF8yZUQKmmxk6JQcB9Hm9BS3CWknJ1XiJ",
  "key30": "3sDDyGQthLWc8U8byjARhxmmMvGZavUXTJKXnBNXFy2786U2vuKuyb2iLoycU8tKGpvLvJZ3fYY4Ri3ZzavKh1Er",
  "key31": "2EsgDVqbxi76jGJVQnHXufXPEZVfGrtJ2HbgVNE8dNCTYs6EMC8DoYcKwwtqKdDjiRotEQyDUopfUvegaHBpofQP",
  "key32": "2Bz9oxKrSU53W7doLNGpT38pch2uJWHGDuQewcB94JudHfs5tU4rbanqyZmzxq44P7G4HcM3GB948JZ6MKWsGmcs",
  "key33": "5TY1EeJB9YHKADRzsf5Y4ZTvYUAES1ZCWNgEAKSjukv7zvvWiyS1ebm13ensaNVtBJMv3w69ceRAqUcHvGEwUoA5",
  "key34": "4ay8hAwFg2Ycd54GrqyJSfAdQztfds2wSgDrGqkKaw9P3U4v9uckai2djfdMGRmJawejn4NUhZ2AkLok3H9HF3bB",
  "key35": "K9XD4KK8GvdUNtBxyEceEX23TiBqtqX3FQaWfqSBe3SVA3PDGSyxtzRjcjvycVhDEbuoQXHygX5EmSC9RQxE7xD",
  "key36": "hBFjFkigwHwd587PyKerwELuq8zpK8kDNQ2e22Vn9Yfx49adcbVYeYuTmHwYRiKTSck6FzrDqzH6MKevQ4aKgNn",
  "key37": "2zw6dmLYyqR2QE7ewft3ztiAs9XbCauB3VvaF6Yu3P8VFKETWL6a4MqeDkydxqftmvP18jFufd2g7ihSPWdgbpN",
  "key38": "4hPdP2TZgoyawjfxEP5mqCPW68kdWoc6fgNSpaxrtAG3RgiPFYmGjGEHAKPep9DgRugqemjh62wtme29Ri48jQwo",
  "key39": "3MUZAq7oCFVZ8aqAuf1YA1tUT9QeBdKwMkV3uskmu1F17U1DspHuZ7hbuCcAXrDA4aUwgKP6qZExNtQBvWd19mZw",
  "key40": "k9uKtP1fkL6mUmscqb1A1WXx4cS6iN44jhPWLajbhXZVcQmhDSgwXWVmKHruNPzHgcs9s4yM6EJu6VuLswbmDzh",
  "key41": "5SMouaEuPunE5g9p8bn3t3bdCmJAvbFH66Kdtci5u78J4fwvF3NEbJAXxGb2unYxLYXHFBcmdZtqvWPg4kPopK5Y",
  "key42": "2vfEPuNYKxfgjJeATrbNmFLqd9XXUk9HEsX1upsCDtHgp7HuwYKzcjd5Rm2RytjU8jYibR6atdiuTZnkV2y7oG2T",
  "key43": "2mRiVvjBvMwwUNF5NSoRjFqLwx9jzFtEKZbKrCqnoMpzuah4E8TuabeNPJCUrdrD4WAq4x1NJXR5zfBo8T1Pu6gm"
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
