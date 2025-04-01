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
    "5Vh7VXTndrwKScNEQUfTQEyo6FanVUeZoZK9mFuZJ5w4zatQ5v4KiQw4ieU5Vf3rZrESgrdDNyZtQWX7o9qXp6XA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25En9G3JWQ1Gbg6KNUQvroJx6pBfyHnqM4fDm2vA4oXnjHTUxXHzpoh2fUqKpa3DvKFTZLR8HFwELLtSN7WnsEkj",
  "key1": "2ozbwmMpizVofXv5y99TWHhRfo7Be6AHNhRH6mnVPLj7S4c2MDobgG2TPpvCzCeYk9EUdE7enqJkTeEpyFq62Kmf",
  "key2": "567rnj56k8s2JkC13jvDeUkL3dQtyCjVYzSNCWNCiRdcQGir3LaRFyrzebab9jKtN6TjSzuQ79XykrNAWScdZ6kG",
  "key3": "5453e1cfhqjFeZTcMRAYaRh6U9gJEup8AX8gV1MJxg8HN2hBA37ei7UrGXYxZ8jFL77pNjbWZjyaVzhBK58m331r",
  "key4": "3mcF2Fnx5Y2cntkftBWXMmcMTAGtAUeCa7eZbqMyV46BMieFzHz8g3KYQYoaYJp1o8KCZFteqMfguL1fdfZgajuT",
  "key5": "3qcsaQ9joHJxzb6PfjAyF83pTvg5x3wFeH9jopqR13kMtK2y4eYaZ6XeqjorUMsfE51nx4z1j8agCrtmnZuCN2YF",
  "key6": "46tSiYBAhBVhA1hz6vAEQ1sWrnFjz9KwJGXhFizQSkAqEjGJ5u3w1HmV8cvqQLLQD3QsuiN6fsdH7wDejNDP4NPZ",
  "key7": "4hHovhLqcQgDnQjTYhmi2bzWJmep74N54kGYV8aXetGEqhtuCj1uFLoqqzbB6rYqFphaciz8nuobTcoiThmN9AWf",
  "key8": "47uLVknDZ6j6MLbreR2PxJ4rJ2Dj9JrKoLthW7YAJiArHCy3xhEZmdfsWavnh8zbnCJFJhUCyHBENtKaQxb2ESka",
  "key9": "5jDCpsgpLogJHEPAtv9VwkzoUbQGjZSak5tXT4mNJWPUqRpA16kJsHbTaAAyx17bC5whYJ94wCHEJGH2icwvtaqo",
  "key10": "nQTDT4g29wFpVvgM3tcRm1FxBUwniJ4q2eUdxhe5jzcTwCqeEPVowTdbuggRZxjYzeTTDATUxi4icacYy4BrZYF",
  "key11": "3obhehBNM6CDFwT4y1TWET3DMchxgV9X1NTdr4izde9YCVUeHuwk62oLdk1JS22PytqFe3TSQmFuJvfgsonhEq5",
  "key12": "5qFJkEXMPQJ1Dj7WGPtXDAsVbR1j9xmhLR4ZgVLL7FHULdRSbUu4eFXo6zF4WxfBjWRSqpCMZWYXQjPkmaLVFBt1",
  "key13": "Z4G5tiSA7afszY7zCL2PvYPVGW8dN7y2N3gFTtyNySSADt9kPutBqZiLDWsCCoG5UV9d6TNiXLWYRG634phoamW",
  "key14": "2dhaESWMipG7EkCKdPC3RmC5AfJxueKCVVVfFDHvwJUob9HfSt4aGM5bud9dZxXDSuGwVK31DZrKydJwUqg9d8sk",
  "key15": "2kkoC4Ewj38qidcF4NHZxHbANJrhrNMEs7t8suL35RGRxcdRz2dCAgCYrBe3Lti1VXGdaom6oYwT7GS2epxQLK2M",
  "key16": "4beNkNmX5s3E51LXJhUmksh9cZ3eGshCkmGB3AwKKimDiFTmEjstvQVkHDxFjs6q2zKokt3soLdxoKR57YRwxEjn",
  "key17": "65djB9U7YzyhAHgHHNQQhSomrjCTh6sGkon7ktqhwdpUGTsp8gg2LRoARKkR4CMJdj42TF9MFeojSXAxNkarZQn",
  "key18": "o6fwxZterLNrLmdkPJcuhEjyNUMYZPz4WEhhRQJBCSyLEBoMMSevKyJD4ghe7pZaMxNdLCWm3EoXaPaxtmpUBQK",
  "key19": "5j6iuhHQnPzbt1Z2eQFraafi5miauKstWzVFRkb7y8w4JF917LeX3eHf6GN9u12DAyiVAeugdaP6ty5EURmMkXcG",
  "key20": "3f7ikajBySx3YarxpRvnzjsixU9hrQ62GTWzNr62nQhgLXyVatXyvde7NfFndFMmmMhkUq6YQa2X6E5LjVRGzXM5",
  "key21": "3nDjrM7DpkpgcsAUjXZ8bfGaqqHKTXsLGwaZxS2LEJwh6hJWC8GHiG7oD3Tf8yNkEmm6v2nmEkMSMiGXK57G5s7H",
  "key22": "3UmXhybCnM7w5ZpvYWYZGZc9weTF6tmWVcneER8jKdJ97UqvfmRFJPE1auVv4bCos42f8tjwJVTXqJCWHHMA4Tum",
  "key23": "34ApAFCFfvqSHVvtHTBSZaa8YNzC66S1ytVr2WsyNEWy32qPEc3hLCd7w5FyHUxKsRZUwQfWYGGURNXiW7bC4ULY",
  "key24": "5FY9wV7raVCEJcsiT9zorL3XBXDTN3bkyb7AESDpTmAMo5jMU3TTp6joe8XpURcEmUUoWNtQRpXpcAffNubpSKhu",
  "key25": "DqcaSFUAYj3ytctctzzHjxcq41vEkLPBBQDzW7jiuykH3V8knvgUJZqvMPhoUmfEjPnRmYBkqEq1nqgCTgbQqvX",
  "key26": "5w77y937KPaTNzx6PVeghFXhY4CAHiedEwT5ZTrYWwU2qR23Q7bH1r4NAx5P8ReXenMGxYrQ4UBzGiSMWM2GQxhR",
  "key27": "4jZpmd4RmSfXmm3jFU87GjEurm3W1kiiVYJzBaH199DQRsrg5hkYNdt2fSpz6S6HBhLd3ZBSveX6DE9tw3aG2We2",
  "key28": "tA6zcy77rckUfJbvaYCTCyFu7mGZBUmFWsALaSBNZe9t9FJ8WHGXMa6zyof75noAp4Ko33gyHaXVyRPtPvQJjdN",
  "key29": "3wS8fbbftgP3oaeXd2gXPBTz69LTgjNzArpTV6Dukwr5rZV5bf1PrfTfbbdySbcfLW8baBQs5ym227RWfX8QkSQ5",
  "key30": "63m7RXaWHHB5EDxQuE56NED6QEhBXBYys95NUHHkrgTNb1gkZpnPpheFsUYDkTXDVX8uiw2JzD1xaoftejEzeka9",
  "key31": "AUgaVVYEyoRWoG8iT399dfuzfrAYDYUDVV959jYR5nm2wfQW7k6SMd8FsLsbVcbkSQYpeE6am3ygaGburHKgGr6",
  "key32": "s3oePSNyTc9vpncQGZUZNKKqvEo3wgV9ehH3y8LgLNBJpbRYRU5jMHyqMV8joJV8oGkohL9b6EsjM7QGYvMRmDo",
  "key33": "2SmUh2HwPosZCCExMskL9D6cgaDQn6tCjbZXZaccfa8xqWH76owNKJ4LmASS72ChDQMZi4AR1QNmiQ1DW5SPVnHU",
  "key34": "oF7i69525WEnZmptRFN6e8EPdLesygcYZbsGqPzuLspxS8PYJGkCE92nvGyevtQZ6X4X2ahjqTZPRFULG8peGiU",
  "key35": "5f2nqjEXWps2YaGC1efy5v5ZR3CZ5VxLH6eSrGhkYUBPK9gQKWHuD5Jy4doGyH7eZ6ZysWnW7hiuQKfKZVA4o9dv",
  "key36": "4gcRZr7HgkWeXx2CtFWfP3wLfspJdhWaLLk46SSUUMg8J3u3EDsN9GQwdLwzN2RatDCdEJdj6T9kfrk8K5qdWM3p",
  "key37": "3FoCtPpMP9m2rgX2xo9ZCa6btGZ7ArcGK9fiGf7nzsxQLUM3UR5d2ZeJpzinuxzkKZhZhBpddkksBCJHZfrs26nr",
  "key38": "H8wRuAkM8KTmZYk4pFP2G2B73vDgDv6fRH5JmHeoDhw9mFTAFd5APiH2WbHxvFyknm2tUGn3CTBuzfnmJ2FEJgx",
  "key39": "2nQwSNSDEzVtUHw2hKuvqZBLyTcHZwQ1S8ZehAAoABxrrnCPsa2GrU1b8G8oifGjsdVAc8DLyuzWJ9qGZfidFArL",
  "key40": "55vN5Y4ZWbK1dtiSVYvoD9haNsEuNy8cTEmrMfdkxibA7K9z4ajbaBBmqbgnZ9mV363UTeB5WgfZVUiS366jtxP",
  "key41": "BePixhFc6zo9ZY6Ydx17Wj4XPeEYF2NDJTNgk3PFCNhVwfuERrURBdvn6EB4MG11AN3fYtJxq271oBtTet5C65j",
  "key42": "3hxZimHuSiGjHZDvs4QqQz9zPgADpbYBJJnxY2JYCSo8Ldj25ejuS1Z2rZmAVeyGx1uX4rN1SyTQaeCDsQXUnJcw",
  "key43": "4m5C94pGj5oFXV15D8uc2a3CDfQicE3R3JCnXN3RkpD4QzKFgtyshWowtoNbaHj2SBQEPhrqh5gyJPPGuP7d2Xce",
  "key44": "3mdfNUxfgGU4XeVMuMgY3ELQJsF3zCUU4LwY1qHLfejornvunyUDMYJRmBNir8GYYmm3H6D7s5DWrL7XuuY8qGpB",
  "key45": "5dcoPZKBEpXR6ZYFMuxn9Yf5Xe2DeHFD3YEKhkcC5V7h7XNh2PndVRc7xhVSLhBm9AU1MoZj9GPGnioQDV1PoheW",
  "key46": "4JXH5i51SWT4L1MdmLzUCkTCHbySfinzZj6ZwRq8MiefPM3eXpidRoUxHt6JNE2GmKaYdqcLBesg8QbRfqVKPFeb",
  "key47": "41idmeSeoGbvWq4jWzp1C4u4tmTVB6iL5zUhjkbo7ZcUVryrNT4fiKE9KXp5rQdDcebZeDpUM7LdiTRMP9g7Nu7g",
  "key48": "4owB3FoVPTNrQyEEYvYGCsVbm1W9Uk1k42se1qWaRAT62duzhMfpAnUrmH16PA75WTD4dvZwgNHEgTitcEJ6ij2b"
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
