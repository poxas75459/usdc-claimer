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
    "24vA8qYyGWzfzBV2UbKjYHRvc5uy7XxDYLmbnCtz1xpS3ftoifBsv5QByNQFtbD5s2mqhcna1GXWNJg1fEqZTRX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rp5cxFgrMf6jxnK46VXLvCqGKqQdAoGNgdrWuis3VFGMjzJvC6ERujDSM7WrwNE5AABToPkSgj9AyzHKofapzcv",
  "key1": "7qoRpmycs8WTvgoUQZHfpjZySDePqty5jh7QhMwHjS4fBcGvxL2uvsyBhWeNqJxPv7b1QAU5oLFkcMD4CwweT29",
  "key2": "23F88tXY5zHBzbQJaZTZkypRKT9FxGpwtUp9JPP3YmUasmWnHM54PHGFjfJv847GcK7d1jbi9oRmnSxmeZDXmq4T",
  "key3": "37sMb6o4zGyihbryDV7oQMjuLQ3hBPTrC2GxrtEHJ8oJeZgcJQPwXMe952Z6gx7PypKr3AR1LKSUCtwqGrhXfsBU",
  "key4": "3C7TuQFYo8wSSXwvkm7nGYGgfrskPy8o1pRFbT35EaASfVrD125z5r9k6P3cQWknyxZpqLvrs3fxyLU9Te1mnmjK",
  "key5": "61dxifYPfYQ2fVFF5abYBdyNidJWCEhnXzx3ZD1ZqU3qqp2MjjWUXs33GNR3w5UJkhkZ1nPvzFxxaf5NbhSj14La",
  "key6": "vvxygvb5n22GknD15uv76993tUkTqHzM2HQdJZ39MaxA92G5sY89fhSGEVqRqUncDDwTM6BfSmMWsH4ZjRuWnSw",
  "key7": "5tAMJA6mbCBzjRYTXMVBDr9zdr99b9FfRSBAQGSBK4nxSSbirnX1EK2ZiJJsjMSwRh7idtKji6oR2QorybyiMc6t",
  "key8": "3uioKn6gDLQQZHLxodnHDrCHpCgPAtXxunXEJNvoXkzKBu5WAhaqo8FVxE6euwPNbM8fVFiwcru91NfSh6otLkZU",
  "key9": "qakm1f9sGTWKyr37N4UmbomTDptShDiNGEsQn2HoZjGG8spSBP1bmkSm7sBnQsBhgpqvoVizPRMvn7t8PozdwFL",
  "key10": "2xUJJYBKYd7QvNFGTp5HQadSY4UFdJNTJFKamY9dthKUBwcWRKqzAvkgQSvBinuWnAMj5z9TNGSLrbyvWjzALeFz",
  "key11": "2Jgndu9pQty4UzwMxMvcM6HQfoTXbtFUer5EhQowbVeN2JVXCBkzxzzLxh9sQg75s7K9wAzAVmikd2GBzCDfaH9J",
  "key12": "2MAQv3NAibzAfL85YnLQpyHWVS8B3pMFhaUzZqtsfsaEwjgd28reDvmY4CJUMMC1S26HasitYaAq1vZzoXcGHLCH",
  "key13": "32rZCBoPQarMyzUtv7ELo6g1X9X8mvSMVTkCtrvNpTHHRDXpDRJZLBDKFvxtrbtGZi6xda5bkXwRqqXEK2MNFvw3",
  "key14": "4hE7wmesrcADc1KppupK5wpHZ7Mn8gNbAjjwGik6heKibuK8prS8Y4F2vVXsev8aZ7FjzdTR6Et8ZthLuqLcto4s",
  "key15": "4ZaWxcfRqhAyucHy7RoH1D2XThYnZfmd8QBcqXLCpiGGpq5FWAyvTxGdTxDG3N3V7tFawpgPiGgRBVqxXk3sD7gk",
  "key16": "4g8LWA6aDLMvUqYs9KDfXxbUjcg2QTmpgRy5J4w9bmzVDLYsGSxrxW89Ht6bdfkvigaVaZNjwukTfntWnCtnqeCi",
  "key17": "58kSMJ9cDwityvN6srmDhZ7EyTSzyBxpbEQwUFhPczTxZAkDU2YRysokjDs4imrcUnYmLbxqGPHHnBU3mynVvfmz",
  "key18": "33isgEQ4HAKUdHwjk7grZc9JJmVM6L25qWCR1FFcM26eESc4pZ4Jg7nTFFQpBf2UeoNGW9HJEJPm53TckQDKVnoR",
  "key19": "67BDLjLejEQtcCfNHuQzbVGBwYHDT9Jwcmj41nkQc9hYdPUTqt9n8QSDHrKFN2HZWcVT9yexD1jKSam7T4qKqQgb",
  "key20": "BarTB9ZnHcQUzNjrahx21SLrYYkTiqzdwMWiQyt1d1FT9L9LDgP781QFYsrt6bT9FLkfiNiFEWgdr4VWndkoyF7",
  "key21": "4RYCtuBkqz5eLFE4poU96Jthg6gmeR73Uw1Mvnp12uq81dcyxrT3z7coB8ZQCM21zrprVcbvsZrJQQRuPU99KYd8",
  "key22": "2YSgo8CB5T97dnGqesC4RDA4oyWhULBBXkPegvnCQ1tpP6PgJQHDNBpxgnBD4SRtXfvRnfubGQXrTyb8S1bo5AKQ",
  "key23": "5FWAC2DQGDa5d3JJyWFMpfAdXYPpN2eLh3jFWm7NpY3SnmWttQz3uE5JnxRMzLM6eN23ntpngmKW7imPEBq7k87r",
  "key24": "3XzMS3K4FJVWghqfx6v17dtU74413kpqrjWceLv2K71nX1hbbg88psmzwXEdZEGowbUcW9WRKSyoDqKnti1WuzZB",
  "key25": "4JGnMuuxef37RFU4aRQVtPGXVdoBebEB8F4uAgBFnoSthwc7ccisKTCasLVJYTT5rGDGMK5vN59zmrvNURfW6egp",
  "key26": "4V8JFPXtmmu8EGJJQHXRCYRfTmbidakgQB5KdaaVa6tbkXfZhpc4LPeXQJqvJpqLkskL6UtH1xMZPH6HLMgSL4Tw",
  "key27": "2ZeLc4XWDnYVYT8kWAuRmc5S9Rcu4S5YJfV9LdsVrPjKyr7Va23ZtD8Mua7Cuioi2phRnPrR8ChVwoxt9oWvqcDx",
  "key28": "27kLKdMrabNsjoygatwubn5CYEe3wzwA8x5yRL6S96aCozgu4dmRnzCSb79rSkcGMDQtXEULv3kkhZUmUvE91UGs",
  "key29": "e9Zi6JchxjT5VhT5SWyysbVfR1C3J8cjc7iNJ1S1M5REtdU1Ehsmc81475SjjPg1v96qMwgkt2rdUayoPWACKGh",
  "key30": "Kg7gZgLApch1HzznTpU17kYECyAEzR2Prcw9jshFQSivsTrRQfu5eHEAU2wCpFiY8RWTTqMsL4XDuuP4HDDvh8g",
  "key31": "3oCj1CGUSMmLHAZ6gMZ4BSErM3me9g1xD7KDKZGTucYzEm9kqPDjqLVFTiETdevHe6E3PQoWAzagUz5oChAnE6BK",
  "key32": "tSGznTPokEdm5bcUUkjtpCgAFsEF1PBeQdabhXsbtz1vazjsyYffSsx4gyeeDdo6W2N8AXMBs54NwGudkkQkkaM",
  "key33": "4fYggiRXkAczvgtouM35THXzqMVNb4u8zJKWYdfLzhWJ5muBhXzZhYAgJipQ7hiKpeqatbs7Ymr5giRgxMkMGMiT",
  "key34": "2X9ZvaFKZeYaT661SexfsWEbMyZ5wRA3mKWv5RzKfSCZcpFL1qKVEBTdYRMVTgfbDsX4CC736bYJQk8H1vpBvqx9",
  "key35": "eu9sNKxhmNuCZr3G2hHCGREeqzQqUCgtNubUbuQHy9hzApbWy8QFkLqNtMHTkFQE3rHDmqLobZg9Vcgzdc7Vm8v",
  "key36": "4FrGpjWs7XAbYzS75Db56crRfq7wzqPCuqCMqyskgAxV6iUEajodyNtYugS5TtHeFv3KXWNFs3nD8v9XNDxJxDbW",
  "key37": "5jkKiBit9ndQn66kJtq38PJnmcfJUQRXAR9WqfWjEjb2Mg3RkcwVSE5Hr4Q6G1pJZgizDEfnjcnAeeQqv13FDSVU"
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
