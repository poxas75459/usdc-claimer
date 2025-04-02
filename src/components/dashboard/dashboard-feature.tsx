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
    "5djLrgD5vYuhbs3BBgHBdSG2LZLLYM2CLu5PPGPo2sL1pXi7e59sJNd48HDgga7Fobv91svQtGZdGn8K85AZGgNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tjZaN6kd5ZUJJ3CGsjnvZ1dYaVHuMFPLQ3HSDvLyEUQ7cgGRMEmrB3fbhRDzohM1wuckWaVpzvmwTNL2GF9RYu3",
  "key1": "4J7So4JudmTpRdZx1fqfX7iUgBNceWJdsapmSHtRnTvidD9WhcRucqvhBDbFT4WD2XXZrpCs4DVc3JPW8Pj5yjTq",
  "key2": "3bt3kiChMQxzYbN9Ud67nkGPv4jgWtZt6JHHfjUETVEvG1hzq646uznwfcyovTEyQoCSzguBxf8T2hPWmsvdxdPs",
  "key3": "oHdaUQAvhLvyWtmkoguwJJbJDfaefCjURLBYBnaS3etaSkiWj3KPKjMcu2GVtDgwjhPHSZYsk1jcfjBuEEWWUqQ",
  "key4": "33AjttpnTR1h8MVY6h2jtY8N3kzev941yiq3E3F1iKeGWfeVnSvwZAevMcffhdZCg2yhPsvTBZ3VkRcQgQ1RwziG",
  "key5": "312zq8CcG8NqEaA5t9XsFAR2S4pbobdbWM44NCZEENqSV4UJ5daME8KjjkmfSK3xhdqEEXpmaRthtrUwNK6W5cnb",
  "key6": "36BnKroYhTA3B8cuhfFGjY7sxswMrEz7sgcUmJKgyhe6aGXRXBkKC4RbCAQfowo7knTMcX3FG2Ro14L2nvY2FQti",
  "key7": "3k3TurHGnygru1aXMoihPhTu2SQcnER9MJn3ycHqyKnTVXkS3kxJwPubgFeknMHoLxwD4rwQKwcBUo9EfGeDEgDE",
  "key8": "5W7Eb8tZzC256eSZ4QJrSSUUMkUDLk8ScfZBBdwnoaE3E5koS6nQrKsF9jVb3G4sijC9GAS2U4PD9ns9KRWKMyFS",
  "key9": "5UNqbEmJf5SqLHSLEoGfHYacHDX3yteF8ww1MeYvmdC9WUVetGUw795yT3erST9hUhqhUbWt7Y4ro1XrLnZnSsga",
  "key10": "4XoaVgnAJNWthLCZA83bUWKWPNtApsSKYCn8qj6YqEACZboPTR6amvqG4hso3d1x8QDLMysQRDToHDVv4eupHeNf",
  "key11": "26fn55e4y6xbWRopfGyavLRWvZHj8jJAtsvCabXgZqJ9RiJDyCTqgLMKm6X8FyQTdnnboWoeJVvNpiAZaEMVsHBd",
  "key12": "aAb6QRDTUBComXmDmovte65XGNXdoguCBiinZU2sqXqwNAFWFJbrjeK2ujr4PGbgq3scrd6dGNaaw7eLKBc8F9T",
  "key13": "5eGNfPYb9VPWb64YCrG3RKXKRrRYfmK6GBypPRwJpr4e6CUq4FjKKcp9Vuaz48yTf35WTHgdJjTPfYkexvvn7NnP",
  "key14": "2MCdbccFA7kL6WPazuQhZUD3DttQ8YmbKJxjxuLF9rX3WcMdquKsTh6cyB5BqsNjAve4MZ9wwGrq65Z6MguC5tHw",
  "key15": "4MXN5LqCDM2EJUtDUYgoCZnBsb9TeTxWcSyrbQWAkhwdEiEvLyB3fmWGT1zoRZpWdjEakLLqEeN1Eq1ayFmVoKJ9",
  "key16": "57xBpKRL5fn5xftYaibuMSuvuFRU6Gcacf15heSyWGZroxLbiiDB9J3ibNk57VpNgMBB6dH7Mv4B1CDmG6SYSQFq",
  "key17": "dAfcsZpMZbxYn8KicLmb1CFQRuAocQ7BSGC7ncsvv6D3KpETuNoq8ogy5snDsybzqekrmHbAmoFfDFJzLkDXSxk",
  "key18": "2eoptP9HQPHG3Ssq1BKb4irkJ7Av2GkEozTgMMixd3NEoTkaQJSWttMRLMb3CWLFcZkDUUMh7pm5XWxThANGpPaB",
  "key19": "5vWVDumU8u5uksFoqD66gmQPhD6z4ukLDWDBgWQqr5psedosfEDbWrtRfqfjUa3obLkP3ajUwxR2S7zfwy5zM3y2",
  "key20": "58nXuwKFgi3Ri7ZS9hXCkAhTAjkZGCJeThKP5gkW9EWMJ6ndfmYkBfpXZw1b7B45PVPu5HCCqZyH331qGmqan2Zt",
  "key21": "29H4fAwq5i3xWezLNdGsQRaPX8ypprsdNpNWT4GMp6n9MRCvKTeDhiQAer5sAb84TN6q6VK8uMrdii3M569ePXYZ",
  "key22": "2Tq5rdZNRKc9229p4hNRqo3qJ9fjc1LnsR7C2f7yAhNKkfksPLauoVV2SH7PeeQojJvtTt74r89GoMsAr9yHcNeP",
  "key23": "2U2aZSzcXgY1EAc8Cf5G5JmiU94Z3FkoJpgMxxZs9QDwVRBZsBTsSi6qra3wtPyuC28WTHBYxPmbMCBL4KRDi4p2",
  "key24": "2rWq8BBnawVEMJb4adkfNzGiY72Hi6NpXtxbXm86443L2VCZvuGD2oBuFHU3kg1mu7caNhqQkRyCk8Cc7ryXhDrB",
  "key25": "399Fjy7w242wbqoAjzPg6BdTqMurb3GEb7NRHxXUViFa3HuF7SEPux7WxZNaW14qKp1b3JVuxQjPtfCniZatFKbv",
  "key26": "2BLbqkq7R4AzWqfsA8VQLAQXQNZ5GJL874iouKetXsWpG61mBLPWFuy9HtSDHURGReQBB6b5V6pMrW3Ci9gQPFon",
  "key27": "4DK8stBh6LjJe5HD2koc1yFBBWiBxELR3CtjEk195cR9kG2B6f8EwAvtufUBZsf5gcwcL3AePK1uNEEpdPfEfARd",
  "key28": "3oUcpc1RUnz6xqnF3khJmx2f8ojJYxs8GEcG2y7u5aLhtjMhrLBCmdZfERoasRs4QXGPEZHi5qFx3uQjDL2Lzb8C",
  "key29": "2mSQfogtmm6iDF9oHvDjQrjAMwcQ1qV8P2qwUG3FR5AEjYcir53Huh6ShHWy5kMi6vW2BUEToRb4MR1d5Tq7VB5u"
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
