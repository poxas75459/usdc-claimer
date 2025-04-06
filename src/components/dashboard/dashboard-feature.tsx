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
    "ukhPu3bs2yTfeNfhEVwEEXJpkd9A9odqRZyvXLqAfuqFap63TJCKVrbP47tboSm1omsKKQS8Jrn5K5edDLaEgFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52WXJZhQrYikRybA1qCXdTMNPMkLd3FBVPp3Jk6bFDm8n1BqeC8GsYND93MLn3ei3Y66ehYxs1xkoS5CxYFZLUF1",
  "key1": "6eThDfbAPvDEe2x57M6uq2ihhauWTUd8pg9hDbqoZYbowdBGQuBSHgHuxGqZHaukkywrQDKyDdBWrmYh8iD6EUn",
  "key2": "zLn1Tz33o7MS2VUUP872ixbsyM6WbkEd1n3SJtQ8tsj5kzPYxNGd3nyvLZfZvztqpaiGFvibN9zaREn14sWwcpQ",
  "key3": "5r2eMPmpdk1CERUjbqi3hzVsLgmwnQ2epbp2Wt8FceCkdTKL4zzpm7GGiQsU6oz7WjCgpj1k2tMh1hUcqRDrxUzj",
  "key4": "3EsMHV3Yr2UdHW8VaEtek7UMuUcAz742TBLsN7bPkUKzZNCfstTzNYuvP1pFTfEJaePd9dQCJaYzqts8s83drWQy",
  "key5": "3HpeUgg2Vrmx4T8vKe1jdJBRv98Y4Sy9PHaMaPb4rSs7KkPx1S9xogQ4cqDHkNCZsAm2YZgnR2zUavdtZMGnMSnv",
  "key6": "4dm9kfuqrXVdTRE4ZKtYJNHFtNA6wZcqnggxkaraK3KGSGBagGMVFsuxkw2G2zAmL9U2aVLV8rf5aSK9mr2DCpsu",
  "key7": "54dcvKowXeGXpdXFRgm1LwMm1QJiRXFNMdqqnpXphPSywxhpr2mv5Daz7ifKLTsWQnQkSLwjgxyGbnFVbEfihwtz",
  "key8": "4ahsXEjdQ9ozuf1VzzxaXcobt7QCJ3Zmh1UwdWpyxDh9mis6e2hj5vgsFeZ9NMupU1kCN5JN7HCDYLbwiuCT9zqx",
  "key9": "dg1WLcfD7BzTXgqugx7HQ6ayVXqEqQC7pD5PiT4JuCCtc4hACaaihuxovyEJUz4mvc4wN2UrWqejssvR5exkBjz",
  "key10": "2Gc3kf6RgqhBQdJTvAQ3DEFeDirVKefde3MKv2zevhG6EKQ3B4wytgBAp7fjWnu8NcsYqvEwiZh6eLYJ3VzaRoNV",
  "key11": "5wyvc6bxA7HZVeTWwyDW9yRsSHy3aJB8oo5ZqPrrsz2o6D1bFvDaNFT6KQMJ8djJ5y9VbQmqnjN6t5kifgX3gghs",
  "key12": "4c4bUunzV49Enm6yEt8sfuSd4ncXayJiEKaTaL12bUVVSUbPrx7CWHxMyXuGdgAc8VR4vdf8HaQT8bgcHGWGac3E",
  "key13": "5eYgWsXmBSkhfx3gtaYFkzdoSR4g9rJDEV4A71tKBKUSky1ns3uBEwPsnxaG6TmmL2squjpTz8cuBtTxdTfLmhec",
  "key14": "4KeyoT9nU1hHGR3gXizUqc25SeFatX5coUK675A72vEsNWxy3LQmCxx6WFusNcLyMjcDMScTJC1tGEeGywYKbgrr",
  "key15": "5cx95ke7xqX6b41sNs3tx2VmQ7xKtbE6dhtKDhiv3xxfTSJqzjUrhuEX9L2wHAMWJgnZXo6VNCpvfBRdKgyxUNfx",
  "key16": "3NAzkznjNH3Bed5JaUqXWMrsRoSXEDjGhRDRe8tbRQq22mGJpMESMhyyaJNha2atbq9QixANhgmd9omNnX7SboCB",
  "key17": "3pM5j6ox3XzvqaQmkjro12TwJF35stxPddcVoS7KfQKt5jx2PZZ3gPwwDzpwYY3tDDvuAu353iv79s8LVaWCX2K7",
  "key18": "319zPan6kYeGpDfTLsCsxeeXyNYtncaF2Lmqg7P9oSJUbpvoGFdCtLmvxy4sthuLsAVQX4g5Uj7r9SaMcxKPC7U9",
  "key19": "2k1SXta6D6hs23JU9bmEUrCrwiKoHVDHYRrRSLSdTXEUCQs5SoL8jovxSwDjd8dYA4titMBaNyyrEnmudYKB1JAL",
  "key20": "65wxKNzkLVwvM5V71D3mXP992d7g27yyoaDfb2Uz7UQzi1KTDXCuJ86EY1eMoePtXU7erRd9usj8yXvoZxWtKQcg",
  "key21": "5DYJ1BLnKLGSkZqBfwcmG2eXHgNECSnzek2PY1SSV551LDXLwgWbTsg72xDbqf4AA188qhL2xJb8P2SNNumKLJZF",
  "key22": "2HrmD549fQiD3fxQi9kA8PQNvKhfsixwHBFpAL77Kib5vkcaidJDzGS9zPnfkT5rTbLWJ9kMJKtgWdYDNdxViey3",
  "key23": "5bqA3SfnhfyA7exDscqtFTgsfAdqMp2opt3ywh2gQVVeB6qcyJXhnXcAi9ZHBdFnqzoMf9mS8BWuP1TJEJy88z5T",
  "key24": "7EfUWAKTBr6gvrB2gJJarAEtRqC4yBgf7bdHeUjj1MJ6jX4XSGx5MBQqa9nDJKmVipMxdKkcP3L4nT189noBdyX",
  "key25": "3HjbmwFWgtFdK2VtLCHEU2Z5uX2hcw9fotq9TU5BgQeCW8gcTo5xrmhAetS3wdgSQqHwDzzGhbMhVxmijcd4M7EK",
  "key26": "3F12mNUPTwaGur7a5Mp2ZHbwxsLQ8Hp1gbuxn1Mer9jdfD6QDaUtMxvUWoAi63TM5xE89SLU2PgsbW6rNaboDiCy",
  "key27": "618dg2V1u5uevg1rMpqV3RwcdMUT5gsL3y4m4b2UnFA4JUpe4CyArhoj3YLQpXadfScoMK3KRKwYgsGwqXmc7QLX",
  "key28": "4MfmqSTKCC33ndVt2bwPoJnvfxLzH4qtqRdR96mt8aYcNFAUgsJvcAXWrPfvaCY9FGkzbD4bnzqy23AU81PhLDYm",
  "key29": "3xNGmLWyVfEqCy8LRAMokWKSWaNi41wLGyJBMbppL7TfAeXjkBxuYKPedf1diBfp1MBvVScp2witPFiUih7M4hR9",
  "key30": "5oznquBT6bPCpbDDa3HDAAM3CLSLHjLbRuGoBjdRByYupe6MNEgstYFCoW79Gz3qtVnMmH98bbJQceRsS8Pkj2AB",
  "key31": "NdLwVMktWiVcsoxqr2zEBemJdHGNSPSKzArLz2AqsNgf1NcAp2HbRHqLwZKxxqQzkmFJisqRjXZttTEZp5pmzqb",
  "key32": "52nKKCyhghxAM6yx65H22PhoEHDRM1hhKj3VUuY3fYKySc9B7qvPw4KTTXwovLhAHXwtFQ6sNYE2nnDewXwPCZTj",
  "key33": "YMgCqv7ooB54RuVZbDnXtbZAs41W9BPqjmJ64zGQ5ZvMFjarn6gWkb8eK9fN165Lqpg1QwSNAak3YFb3Q3Aawnq"
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
