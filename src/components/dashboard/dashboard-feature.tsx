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
    "uLVvhqmzLUtrFScHj1E7zD3b29NbEABF6RTR2MP64eyUyT4wxFVkFkmVWmTrRpqKXtDiE9uh851argYwJT3aqKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44nNBqpmurTCGuLFBB8QEmjwtw8WBX6nJ2eiBPQ7UBXRVzmeZcBwuZrrRoFcBgrp48tyf178NaPLWkUAPm47RgmA",
  "key1": "4tkov4N4fL2kZS65LwjxuNNJTPajBgcH6Lu4zB4QLbmXwJkxVthJ2XKwwu4Tjjiviu32x65eXDTNGGvMTpCig3wL",
  "key2": "66HAgPUpNRbKKSrrLAZ82ysfWsNEuutmNTtLJQN9NVbRcwDzcnyT3nitFe1rfvq2Xft92bnZinfsp6CNj8PXGo8w",
  "key3": "5Rp3N4zDLA52YbQ79ucDhmPe8uoVcYuNHrzxoS9fybogGU1TPEpkb4xP4iWqHu4fQYvNJRkUEpmcNwavfuTbFUSj",
  "key4": "MqcyqvCT2xd6EYjjCQ1R36voq4PAyBXimDU9G7hAJTprTzkLfMd9cqovmAqJZqTY5PYC4bkkRY4FsnMCd85f7w6",
  "key5": "FG9QmonzbTYoFSCYL3p4oM8P9wFPxBmNM9tfMUiqCQC1p3UNoNjmc3QWaRjjiDqA1fE2up3vSMAB4edq8fTsabS",
  "key6": "66nXoCQL6LTV4FQR4VN5ttW5UXv2sR722sbmwgPBramaZvBah1PnLAj5EsESpeQZY1B2YWFCwjmQBw5o5S1P7rWB",
  "key7": "5h4SYHzhrbbSjrj2P7eGhMdHHhThYvmYJot2gzyBQjPRFBnBqLapn4Z6mLf4E2MMq6RUf5yoHZrmh6bv5QM5xvxU",
  "key8": "5qBS18gpCyKyyuBFctXymB4LfLEXMkF6NhGzsrJrRL1jHnY76VKZ5yA3JM8EFyT3FmTjF8Hw8iVXQRDcBggtfMzV",
  "key9": "4sxj4y5y5vaZM33Qb4Nw4CVJ4pKqQtvPctMqYxpf2ftkC1wV9Y4zVTYoqHhtgWvhMrWizTYLEvmNzvEwh5iHwugH",
  "key10": "3mCA2QXgN4nACrAkFhBqmdB79nBkteqx2NExZavDTq4W6YZaTEfj2VWpqCDkhYNQSmg6poxT3WPAF6qswEZfBxHz",
  "key11": "kWssyZJDi3c291akumyHzNsABxt4Dv71pBAjiHxmqz88ESq5CHWunt1BUwpwzYMMtj9BEV24fci6H6ffWLmf2DD",
  "key12": "4dDRddcVa94GzbYR6VnsGcnJVA1WQKn8JVkpw2zWv4bRrpftizUnCaenyEdRjY8tkBCL3CskRdYPvEo1eWdW9c6Y",
  "key13": "4yKstSr8R41VbuRquo3rhhiZca7kmBmodQMukQFS158pq33EgTLQ8cX6p8VfinC42YGYnnsbPhuVHmH1z9hgqDcg",
  "key14": "4a5E1rgZuTuypKYx8rti9i3n2RGGT28LQv9S2PjXNikLS5tvsnSzQFgzbzdnSocvvt3aDu2WuR7ABVDMGXRDTZuP",
  "key15": "4yjXxLum3xKB15XPL7D1nDSnPPoYqc75mT8W7rWyh1BRVxkSz5LbbZrK8NNfgLcRMQ4AQGj3yWsUwSgFvBDAXCLV",
  "key16": "2S2qagQcrxtY1RVqTfD4RomFPr2GMvoaToqnRXcYpWcqsCcTvUznC3knyKSXNaKcaRo8pERvehqkAB1tbVozSJd7",
  "key17": "5iW1QTf7APqLZoaKxrtoCSZN1qa5TySNYRweNHRQcgMhFFwsVseHLdbvithmYnujmcqxdt4fzMRzXG22iAiBR2Ey",
  "key18": "5VzeKkwkbuANudKpvQCDwVSTnACCbguHBRJWdUPrkJk3tPLWmSVYaajDd3o5kNqGPGXjgDcHCBFsPoSFwNjWTMpw",
  "key19": "2PQFTahKrxVnXZARWCK361KzuCb3x65ndiGngjh8rYPd34d9Fa3XrMapUoadaCfiYFYxsREHCGBgVrD4MGoYgg3p",
  "key20": "4PnkpmGwXYRT4NAsZs816iiG2WFUEdh8d2MfsZZRvXhxRdSroAj6pt1QM6zgbk2DeT2M7Dq77qPvxKZL6VNz9twb",
  "key21": "128Ri51K77fbKrXujELedeJQTSrGqzfaTyUf1gpCnfcYDsqVQoUbEYoAYZjVFfYfFqM3A8pnAeLqK3BNgmBK3B8f",
  "key22": "4de1VDt9h8LcrKhVDXmmwefajykL8tTt227zpAUTLZHTXD4PK8YygY26Lhw1sQmqT8MKVDRuArjVpU695HkesNKY",
  "key23": "5Su5mZbZJJcadJ2h36hFNhdiWwczAA4DKoN5xgyfnWkZHf7iszx8zonWDFpCv3FqKkzceNZfaLkgYffH9FSpCBmr",
  "key24": "27X8jvxP8HFvKLa5t5h1AC2VA2NaQdnJku5PnAyxTE1WFu5FonoRRfBSUUjcAfqUqcd53TDdTCkkFHttDQTaedSx",
  "key25": "5JXeaRj1qpfawonXCZUZMaVXgxhVkTzhqagLrznbqMpNMXQZFaoiYcTD72kqRgnvbTRLEXy4eF6DdhFaZkZMShJo",
  "key26": "3ZoJRtc9yX1gzUEFqFsQ8fNtmdneKsXjFAEtTuG9dT7Lw8xwWHnznfLqQZWFEzbVVgf6KLFE5ygvRvxbcAR58eoi",
  "key27": "2DjuyJPej4Hk9AWKp4JL2GKzA2bHmKmBaCr9YhkjP2i4cjtedXCrac9TNY8GgsLC3tZMwSXswiUk3iMXkXyUz31x"
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
