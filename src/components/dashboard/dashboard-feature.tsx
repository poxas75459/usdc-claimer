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
    "2ZivaN9Ritw9SUHqcsonPuC69Lst17SddYbLpYsqTXAqDbrBhj3kqUDUjZjH4UmgW5XqgAE5U16nxRncdeEP93Fa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38CUZyNinPXhbzMgzt6v5RwhAG8z2cYLMeTj341USKQUukUazMEMd3EdyfdpehtvPLAkQn5jhPUBmYnDvor1uEdk",
  "key1": "wgAcs7Gi9CVbcP28VdD3isLYb5ZGXnqgjp3ZUnVSsz3wPLqi2CQGqDpB4smGe7ShGqjhnsidWfaFqFuJTENcuMP",
  "key2": "65QtCYEH2KQoJdmJe5cRkS39qytQ1AH1NEotAihZVjFkXnpV1APcyAuLxLcaunjrbhEQ39BnLnYsjYRKWVLx1zNE",
  "key3": "4kKPsGjE55HWpdMwYYZagHSqNnwhtNsTQyjadWRF4jw17L7YafYNg9BD8tP5XzjZofq78KJkFPbVbrnNWM9Stfbd",
  "key4": "2hv6MkdooUAscCd94ZpEXZa51W9A3iT9TX9zffiBW3dJurMu8qJU7PMDqG9gfVK6dHEWe3GRH22JatommzoMhBhE",
  "key5": "4U766NvPyyy6wsxa2GD46n1PNhWUotAq8P4yqAME881D6GwWqTpZuVkfXBHgW6GBXMV87usup6cVw8ee1YtPBz5N",
  "key6": "2EXaVpzfkANaJ432LRFWA5koDJ56FNvoixDLVthZTKt9Ji41ungyWtbXeMXaVTERj9H79MKroPwoDjbnJBBafQnE",
  "key7": "4vjKZUj79AQX5c6o4VRcEvA5cfeKCAGvRywkz7QddSnwBcrw2oG814Rz6AXweAmGLvCjzuCV4yrDm4Szjdrp6nxd",
  "key8": "2GM7qBAzAeHmSVchRLuxrPHYcutSdh5P8YoPTm5TqVgSXhAAFjgfQ1i6WCtTFXBPPVZ4H5PaQF1zU3ZAMBx2BZKV",
  "key9": "4KCvCb9YVhE2JrZEx3tgwJ8bfjF6Rx3mbSywnP2uhKtF4f5e2NtY3DbhL3JQNgvoRqKUzBDofnjFDzkNguND48fd",
  "key10": "3EeEetBZi3HS64ZrVp2BkFUNh24EQYJPHwCDdezdFAuASyrFY7Lotn8JBUwqFXjR2NAJwN9hH7uoupmVEYQfcr9C",
  "key11": "3JPQxhyLb2Ps8xAHAkX9SYQKjsk7trUEMbVMmo2B6Zyxhca5Bcn1k6Cbst14JZxJwb8tZJoXkgwpnYrwGUPsGLud",
  "key12": "5KrFKeHqXt9mhDVvnk9vogKhX3xWhvXYJa7vKgdkcBoePphfiG6PgfLKwKNbNLTbT81FCyoYJEbnbGVGtaBkMYLR",
  "key13": "4v3Ad1gjGbrykiLsepe631gVSQkkxnR9eqEzNLEcGiFJFPs3Z1GwhKxnX3Akye5JAGg5eEBUsoVbg99zg7siEJZD",
  "key14": "28FHTTDypLXyJuqmSdfVPJNYjB7nihPAFSrbNkBvtba8WJdQhtBTZGjkPu1EFRYJ95aSC4gYRwNxWmjnnGmqBaun",
  "key15": "3t7s71bm91NgJckKDM8sRCSCLX1D3NzQJ1VpCgatUHy43mKAbN5vmFyn8j9ootoXVqG3kkuaMRSu6nJum4ioXTPq",
  "key16": "2xzJQezFvNKqbQ67VNhxjpR3B6LhX1Ek3EbYBJCMNjzUFp3o47qMUqrb8oavRJQ1mfnUKTSgpbpjMuKGktC8bhSU",
  "key17": "4csxhT82RRSXX9mkrt9VB3kaoioYHQQ4jkttzzY6z87Zrggkj1CuT89hUjjk6YQMSBjZ82fNqJtnbMpQ71KSBm6T",
  "key18": "2HxBGi2jmszxVkRR7C81G7YfwR74hPxZTsX6jvKqHC91YmEb74tswQ4QkU2KYjUFCYVjKvd43BUP3kJZxLnNtzT",
  "key19": "2uMgJGwj5dJZsAKDdYhrU6DbrqgWTzHDz342aokHrHb7kbaPSvNQVXGXyKhEhvgkd2WvstrqdkagN1ZskwuKq47D",
  "key20": "43j5dQt1oqdL8GhubDsLK2hCS2XTiBKxs5gRnErhDAy8BbYsLmUL8B5w8ZazvpGKkpvNqabyWRPAWzDZt7dgfGE6",
  "key21": "5azqwXkkmJG6M5JvTdYTfBffZVrzS6WKsf6eQL6VU6sfA9RbSn5rBBzzi1Df6a3x4ZBMCpRw6dnFPdcJsMG6BXfc",
  "key22": "3bpwyKZtMkKye3ug2ZQv5fo1S7Y5jrZf6rVbiKopqcrx3J7y7P9p5Y4PfBhJaNkzEF4qABqNjrxsa3BWBPc9z3AL",
  "key23": "4tgFrWhsKoyWrLLARvnD8VDYtXAfETMSkw3Qs3YjSMGWb4dzzVWiXfUwYoJyPEmhY9Peyrf5jtJ7GgcT8KAuSGBQ",
  "key24": "2rAwqK9UrxM3xfCYUPhKtV5EmWk89bT7avdz3E83wTtd9tnwiBUKhyVRFBFhwm1xtG5VtKe9gyuGWwS7LqfVGvyY",
  "key25": "weiehKJCy7E5M71hqV2B8k5ntTN7hecDNZMLDhbdbHNT3qbfbePrg9BZGjfsWynP84u9H5qyLuGegQ2kmdvo5pT",
  "key26": "2qirVDygQfK9PBwRDbhGA4dAT7WLqBfMpioSWyJDGR2Ht21MowZEnGj1JoYfnLcpmy5NmmkhreLpcgzURiqa6yv4",
  "key27": "4e8jnfp15hAUkEFmimXXL2hThT5Aqnzs8V8jC7N8hRAXsQZK4jGs6VjzEk2Tu3DMrtLmCV6WVDTxyGTQ3degDwqJ",
  "key28": "ocxad4SKC5BiBjyYUPmg9TPjZgvoT7Wn4FvMVs38BidDP1XFzUyqdybYQMweFKpc8CBmG8m7mnw1ovGzTsZnxoj",
  "key29": "4pPLwppjwBUyoc99CFZykT7woFdvsLxKbq1rjg6fUiMHPc1UsSRR1NAFJwnDybZeaxpgy6B58hHiHAuUSEQbQhqG",
  "key30": "5uBQm395CCdWXhmMc42Zg9ZPHXg5meUr4zDJbzrFpgJzof7eu1VP7H1WSzpEbB8Xp7ZJFCew1G8Je8rxWHq1Wrpu",
  "key31": "5GEAMcwX9xCS42v4NzsYsoBXXZgo79AbZaUtghTLeSDbcZta9fL3w1xCDpCfCV838uBHUAvHggWVGGtmJNfACCsw",
  "key32": "3vdietQ2r1odA9GMvovmQDn54J3TZWfcuByPhGMCe4cwAZPA71CdPrCTs44rJFsigrTyBEniqGUprHHxxrS5eqhi",
  "key33": "4AxfnNmBT3tpHjwJtHvyq5QTUEH8tdJPMjTENY9ZVCwcwngGV4xVQu6hUe9h1r3fUyNdFZ6vpsfUhAzApqyTw9Uw",
  "key34": "UcGo6GZBrF5M8BVsPq6gzW8W3sJQXV656q7kDModSsDnWazT4p3eUbcyZ3wwzatKgtiHKE7Rnaa34GfzHoCXAf7",
  "key35": "qUP4sryrydXKzvZATxWmjNwXFhTjfV7ZC4eYU3GwSr3WMFdnbKVK3Xwe3drxvCXLzzK4X8MjWqwXuWkgezwqDiu",
  "key36": "2JDGmVpD9nRV55o68A53RFBGbLAKNAJDpjSjPeeWpM6ud6PZf81LaM5ZdPjMymob3iZhhY6Ct5sezyi6xpo33kkX",
  "key37": "3vU1JtGGjFjoSHQCcmXpfZf8NnHMnKjRs4kruKDpd5qrY5oHBHHMmshAgHp5B9AzuU23wCtEnAwZBMt8xLAtSCrM",
  "key38": "3CYPCAaWV9nzpr61QV9pZkgk2q2EkJ9N9s7npyuYxKiFpjA55zCVJZsiw5xTRz6Kwu3LFfBEcvriyHdi7cvnQArU",
  "key39": "2q12z6QfWUr19PYP8EAnAg9z65iH1hMHAzraWTPGVs2TA3SAsfNsw29MYYJxHF7uqQgb7hXNy8XXHaa4bWiMskY4",
  "key40": "2t8mABanrV3makdCDrrxVvMU6WMr9vEfKTvCDJ3MirVQnbxskfaBMAckCwKKQN1rZNuZEUEh94hdeP31tpYMZJdp",
  "key41": "5WSLXBAAapqABABnWX5o1dRTT7xkrNPWTwEjLcLK8gzrykYMJMzphsViqf3Pxr277tov4qgGcfxzLX3bSigW637k",
  "key42": "pH5qWMdpmuEHWBenmR35ZXky7zPwwUXb6PGh8e3xQiQ2i2MyYf1GMocJgYFT47XnaSkwZwHComtqQ7wGoeyLUeN",
  "key43": "hRe3EJ8A2pfF7KXkJNXy1z5auPLZFnk59WrVbrr7nogChCqjjPkzXN8M6GK3oJciWvqjm21dJ7SHKPB9Sp3NjoC"
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
