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
    "hWuM7fjt9SaaviebBjTpPRuRLwJRnh5BvFRKzvEDBHCe7cHVCkiWMrmhZbu1tcSU3XP4uXNmhwxAMXYBfUTmiNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45UkxxobApj2iYCae1YTdZPbjjhZ3TKUbw1tunAHdRA141tZ9xRu4g5UxjmMk4HpvVaRp8UeitX6SLYA5DZEyZxD",
  "key1": "3H6hRNBn7vF12mi1qB5YsNGrSFWPGQszhCXYrF8dbHUjZP8U4Dnrncz3Wms6qeAEm7zjKU7NAXEgPx4po6vnAJoq",
  "key2": "YtGKGspKxQ7FvtwQUbqKxvx6B7kWzistZMMCLJrkQh6spBgzPsakRPLkZ8xrSX37Uiz4336qdYUctJk5xn4PXrR",
  "key3": "5kJyDGHGuLPx6BaBYKKcTwPjiDj6iYMWxdQ76MsGUFiMQRezh6TEbeVzwE1TyHcVQarpQ5RLm7ppogURqzZBtPW8",
  "key4": "26Qi7pBT9E6SPovzSyVBf4W3uuRVuGPRjijFw4aCvth4ZbAun1VSzBL9bNjnw9UKV5FXoa6QHSPSU6cUEYQ59SB2",
  "key5": "52sGFnu9y7mv8KrJMnxXwYzZFa6jGFE9jHMEPWSoiPsen4TWQDLo9G5bKEVFQGumPoEF4zVXX6aEbaUqptmJQbAZ",
  "key6": "5Bd7tFpeAsqGdYH88iNESNgXxskRqFxCALR6NbJStz4YeF7Dc1YAYXgfVdKgZaRKMfdLD2XhJuaDFneUyWcFJWAt",
  "key7": "2Xq2cgkQtS31CdBsdCpGeMQHZboBDxWU3xGsjYboFLA3V1duMGa484kwWkpBdjiDpTdaVeGcj2JPPHaHWjnRTfx8",
  "key8": "2Kurn4oW1JCm46bnCZXp4HFbay4u2R4sByHAkH62iuPxh8aKrcEttL2fWFrSsNKHpiFF3sGrkWP3pGPDiDmjR7EU",
  "key9": "37u2ydyFnEvk88Hkz6X999ppxwWQ4RSfRc4WoFJUjvCiByD68CNQGyZmpcKYwiprinKzxYC6uSScQNeNGWVCGGqE",
  "key10": "ZbBSGo6MLrfb1kGMMDo1X4PuZDvJt7Z551cbf1VK8mLpMyLyMKGewbRoKUDfnKWvv7WXhiuca6zoiW7tGytdcCM",
  "key11": "2VY2gnZLbLaQfrozHKtPf8BuWS8UBRxJHn4Xvp65m3Z6uzked2V1yKRQvUY6t4AXpL4op5nQBguZgt3YySyt2rQi",
  "key12": "44bwmk1FytYPexxpEWNr9PvDsfSwPWmcSnRdikJ3j3G6xLtyyQgoEaDFTZ3e1wi18EK1wz1VoidQZy5GSbE7jDfr",
  "key13": "4tCqE6oVvZPGGLL9T8H6skKLKConJGpz6H3Kxazkn4SxeS3cw8Gc8FVnByDx9ZkhnqTzmbtAc4Uo14KDNi2Hr2z4",
  "key14": "5XnMkGntnuoVuG6undtvGevJbDrT5fih5JqSh7Yang8JtTwAPt9iZ1UJFdufRgSoC3DZjbRNzqmWGiaYhiLD8Krn",
  "key15": "2DGwPSb7uez989GsRXQtn36njGgZdZ7FdMsumv7sEAN9mRUXvw7RPR1FCvXMq9Gc6kir6tWeke86DBWxMiUyHgdQ",
  "key16": "oJEUaTzwgAdxDaHmd9ewDHRngBvM7uDvGrsCt2fwJDYRwpr3tWMUYHXUtSfrwrrD846iLP9Z4LntzXHDqkuTTK3",
  "key17": "nrKbZFCQb6vAxLiuyFG6xPDYEr4fLwGEBxqiESV2GALxTkpdVdziAesgPeyS38cjSuY63SJRqJtAz3WcAhEf6yr",
  "key18": "3pr8FD8Yphd7DEJYu1rKN3tbTHxCKMcGNVDKSoypsDFjHu7c1k2zzcTjuXH3DB8hiYtQkAAAdYdMJWkGWtNYdwm4",
  "key19": "437ogfSjMZx26n59NLjDbaCU9fjEL8CWiDwv3vz1ibAp6X6H2hoTUCtr3V81V8QHTvnV9RkHbcg44zfAfe3NfUj3",
  "key20": "532CwBFbB39vXV1zSWzwinwaHah2gZset216VktwnnoMeC9r16vMc8prtLbGUqeow2AaYp4Vuo6x2Kv29gm3ihjb",
  "key21": "61TVpSRDfUQAXeiM8iHNo78oysPkhdyEmssfJDtRLXqFWaBHg84DQRzV2i9RvjbtCiRqQ2wsK2FPskrzG1hjf2kN",
  "key22": "58qX3w7UNkhMzvoF34CcG8c3wzqG5fewwUbRmtqjNkjBuvPbTphoq3fbVAXGFw1v76H9LZFB2N8VpjbRFi614k2a",
  "key23": "5QcooGWfSv2kpnxra2ga2BYyx5PXzkJriqTdMVHAqRi6YX38nXDTJqFHZXdtxH8p2AGNwQoSTLpsUBG6WNj4wBZg",
  "key24": "JdrLmiW9CPSFmY6C4vcDpnc6upGN68xPiyNfS4HTvbBYwUv99qXhNng1oNtNxVz7JZzeFHrC5R6vpCcJgpRmwRs",
  "key25": "4YwyVMbQnGN9PGN8DYtArYV7bYXuQsYw48BQfYTyAPkAqzbVp9n49MfbrHsnUgJ4hZbQDisLDcr9fKXu8pgAXPoc",
  "key26": "4ngVkHHcM7dAsv7ipHz4boCWxEWH527NMzVzPKvespy39dfasM7wnQmgBF899t8L8c3HHPWn9U51Sz7Zc47x43AT",
  "key27": "39vxV18oBvY6NSzGPJRT6UShtXw11tukioJZM6EhxVfCsNWmknibkd9n5yZ5Vz6fYfEfvbEYdV1yrq23qWYAHreb",
  "key28": "4SLtLNwnW4QwwYzb8KPRABciLmvfrdGGv6UPGvoWmkFS1Gd5Ex5zeV845hv1Ta8wYr2UjmgR2iHZDv1KM6FMLrLc",
  "key29": "5ZrYoaq5YJy8JQ4vadxtcBPM7oujfRiJur83HxDXpguzV79xhh2roD6QQDVZ5dFspdjDUE7fJAia458qB18F7S2j",
  "key30": "GUsHoVkDQZqKcUu6xvgzAwtWi1qc88cz66uEerK1MuRzPLp7jQReZcEQGjQVwQb7GQK4CWXbGoQryaJ8xs9v5qN",
  "key31": "5QhDXNFeCtySi9Ca7pGd8nX2bqt2BmrosjoNVfu7Bidjgnni49mxSTRPyQDJtBPT4JCqj3BgZTPDcBtyzsuPu5xr",
  "key32": "2rBarGeQjMVEQYvPCDWwkZYS4NdzguZRCtayd17y7cvPR6VHwo2sW5JGfeu2K9szrxysowoC2TpYGckDiKESurmL",
  "key33": "qSe5G47rGmYkdbNE3qhCBzvsKNaRVxab5MMCztUD9hQ2eEuyTcUmzXvmDrMYM5tzPypYnRfnmdmR2WDWnZk9iY3",
  "key34": "dSZe3cuEJzdfGvGCW8M9wxzexMQqZrN4iudEVhGNDBSWwWN5LdCVTP1qGnELzk5XWeg8n6e2YoigJR9fLMhuPwf",
  "key35": "43jhZFkUMhTMWSZM7SnDvv1jsu7fJvdhadaUCuSLqR7QNvLpxChMKvaQEc9rUQ9tG2kaMmGVNech8n2VRkh8P9PQ",
  "key36": "4Wxit9N5bNrZ1jmiVKnwVzCCNwZqg8WL7W9rRq8HQwYbtX7kMyENrdj5Z49un99uSYSGwFKTD5HwT3DQ2iN6yDo5",
  "key37": "4EyTWxku2UP2S5TYHHBnDwVb9NLvjDZdnQm4555BcK2ZbUTdo6GJiFYQ6zciTgJhcppDM7GzdPVchHimn9Z4YGVt",
  "key38": "4mg3A8zZhFkTe6Pk7qtHkjaLMVq72PHQBG6hYv2xEDvbW9NrMCpFfZuCBqT27V18UALmR7x3whjS79WS59XuJLnJ"
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
