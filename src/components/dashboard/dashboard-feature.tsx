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
    "yWUPEoi7K5HZNKMvbJZrNP5gy6xxkPqkbCncJiW4xQi8sbKzDMm88TdBS8dzb6kAJ2HDBfLDQghkDqoA1aaCmvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ysi8o9qZ2wZipx876cnvWXb6hjsdJwa4WFwjSZgCwAXPeBSeLKwNtANo3THyHT4hdWXPM8GcxhKAe7ug4iaDPog",
  "key1": "4j9HmPYriN9if5fLQZX3t6HsfZ5TpHe3tDuQ2dG99Rpw2gTkZf6p6DsE5kz1HB1z39GnXopyDZu7snXU8gtFXw8Y",
  "key2": "kGjoU9eyrXPo9yciD6RpPAUCfnwR2QhMMT8aFduUvREnWRR19nazMhDioaCju7An6ZrqyXc7Q9Haqhx7MLrx7tG",
  "key3": "kZaF8XB9qCpWpsZt8sKG6fQeDKbzLANSGq4i1bbWCZNtvT2QdEr8txsoDNk3RTYSbGXLJ3S1nFP2mhgSTFmnjVn",
  "key4": "2Y8AiLLUCEJMgLyPLFNaZggNYHUxJot4aeZsZf7tiqcDJ3XPVYj5FjFG6Mcr6gG9WYZybddxc4qyEnVixVpWEunQ",
  "key5": "5PFsawJ5YztZiWAffSrGBquBEJ3o4ZWd7fio6HMZQUZHqkBqffvsrB7rcJQj4sS5aXcZFDkGf3RHfB9BT77kX4E2",
  "key6": "3UM84yJF4u2rFgd6LbEoH7AhRJGsmK1jchuth7JsBTyGhoRrxv6cbivrko8MQ6s2cjvxAzAmuRCh7vT3F1iHqSwH",
  "key7": "4NnGYSEWyUHJj3V1HJikFnr1xdE1CeTJXxDQ4jfE4nvJ3BHia4979gk9mGFDRGvVKBPjZ6RnQtndY4pFJHUyrHgf",
  "key8": "3py4j4WnLdCcfZxJ8orMEdF2nzZA9d33qdx3QzsVL183w4vdZyv2TZtb7M6wfSXEBU6CH1Je7tLpHqEkScYBC8QV",
  "key9": "2bV8MpXzYETkX8Po3y9f6HysbMcXY1rUGQ1XBHP3DYBXyPTrGLH3vwDr58K4cTMsiTV5AwRZ1FYgodJmeHMCW2y",
  "key10": "3aBK97h2X1PBf1oE43GbjHfGQwsmSNTHom3p32kHjmRXw61Cd6sakvz9asM13qZqpsyTpqyApv3wZdxVF2zLdond",
  "key11": "5UhPJStEFDGzGpchzoVrvXyoUecr6priZnwLw7JYWHcAjkEJttFSs3MYr9Q2mZTsX1f7EyL3m4iRTumEzzHFMvoV",
  "key12": "4p1cUKU2PcKLqBeMAsgApUdM8JNRUhgQXyQoY3aAvrzgHDybFEXusQKrXTa7Ngp6WMthPTeEkX8YHMer6rwjzYFS",
  "key13": "tHnqB8TdqNbwJGrFQPGmzCvA5vYGADi931y1NYt7qhLw1PjC8vdjZ9xDxsh2zP5v3H5SHCVAQqpGhyz9nhX4A4f",
  "key14": "3oaEv7MKEa7Macm5V2CZpoCryUkwdLZy3VsSigcp38bRrNEQABWeY8b1cm4KvEJJkS7Ht7c8a7sPkpsYU9LmqQEm",
  "key15": "3usRCZvTbKYKUup6rhi8XjAcxenndbWV8Rg2vccHBm3hBkM3vizysjoHPRYhcAQxvHMmu3kKhTek3z5YLx5RDxLW",
  "key16": "2YhHp1NRE1XQd4i9zKzRXRPiZtP9f7xU4dhnUgd9CvvJLre5b3EGzanxStuKnRSiWLbPvgdnLRiBziRBfHsVncM",
  "key17": "F4fjaSF889UEyLtf3xX7nu5Ta8a2GEuag31LV9BhJeJANGe14jVTbyWPbr847APncdH3L1c3fQVip2dConv6w5J",
  "key18": "oQFENm7Fo45F8WeDJohLw857NiQk6pHgMRYrBiRXYtYp9Gx4izbtYhi2m2SyaDx4jUdbDgk1w3WDXJJAmV2wCPT",
  "key19": "2ZiNa8UgiSdFDiGsAJDYaZssMRnv8mpmAyrgtLYBXxAvPuHMyEmcxHtHWXGvpzwXM7Nmq5PCknVqGozbxAqokk9y",
  "key20": "42igLmfbhqL9rSqyetZLTBdabMFudVKwP7piFq8TQu9RxFfV1E8YNpbnSojCXX3kb934ZuyWBmYfQzsSCTVSBxMq",
  "key21": "4SY3ndfHmfxZXoAeKz2QSEwYBRCx2cjNCizHFT2uUaUUTaibSV6FSGoATdqZzJiSi9qXn9kEPyE82MpAPzY1Wyv8",
  "key22": "saSmYiss9w3V1zXpTcUSYy7akQ5DHisch531KgAgSAUWkEPv8xTje7CktcF9tiCs1p3ueUadb5xjBV7E5DrTd6T",
  "key23": "53erbVLLxpRdTUf2u7SaHGCBZ2Ltga3kJ9Gf82fJRYVJ8mhiXkgub6si8YLjihEVgYf9412z2F7nJ7gPYbZtVxhG",
  "key24": "axjN5w9n7AWwAhCQyHSpCxdSaw9XLJfifNSiFWwkuGqnwA4dDx6EmNvTf6zsdK7AksvUv9xLuNp6BcUu9EoXQq8",
  "key25": "5ES8S9DF3k5CiGUo9zxexXEKyD9GvazxmAhkU7ua2y4F7ma4MPt1U1chFke165oxiD7217dnfHt4bs8wJXoXtQ9G",
  "key26": "24HJ8mzsQ52gk9gTAwzJezEAGwbbrxtiLvjPf5VyVRsVcUPECsdNnmyW3sT2vYpqU4kVf8qRuBqVhwkbPxFBrLtg",
  "key27": "KU61rKJyCtGMyeHr8zFmk7nQVCs6QyACfmViMoXVBNAY2iSNjHTazB8E2Pd1H9VQTNh9eTfQKhQ5XxdfS8ash9r",
  "key28": "386WFERNdKYJf1tJZSsaic246tykckSugshK4Wp9DFs8JbdLxcJpYcUZMxCgDMFkAbFnQUvBymUweyXRCW2okghL",
  "key29": "2REgX1e18CdTogqhgJRDETZkeGEZftUKMtBCQxv5683GphJbEutSSVR7hUHZEc96JHvNGCxAwVqAg6cWFusBjHA6",
  "key30": "FqcG2V5VK1TThos3xkrXvJiVWS8qYszJbpXspRxTosuDmZNgQvqph8gA4WUR1aHx5Y5cb3bSJMHTMm7J8PyxUpp",
  "key31": "4GBXE7wW6Y99HbBatq8R1EKf8HhdZ34SJaofSfvC9cLvP6NxKeJVgjkvQpCfhVdpKcBBSKFdfyoyd7fBePjDfGSf",
  "key32": "47wyB2J7cF94g9FyJc6QhuCibdF7v4CQFXSfStRWDFWgioz15HHopZ8CEQpZ6AjUcXJtkWn86sCysEFWfsQgwEzp",
  "key33": "zWCrdhdHXWWF4yjxoBvbmAEUVaRof1uMeei2AvsuiHu513WCNGXojuxNS4b5iWp5fjvAZjRzdkRZNWSanq7nX8U",
  "key34": "5dfLcqiiqeEBDEv8kYCZARJd6YvLYK2uz5wpxjpQnFewQhYc12x52eYAjdnGBsA15L8WFhAiSv6zgP2CPUPzoqGB",
  "key35": "HrDHsxjThrPbBrDaNHfq66dnptLADFqQwHoFHuPo7eyanSxNGvK9EUgccgirk3vfPiK1pxnJ5wnsrBJ1kRaUMfg",
  "key36": "2tBAYzpgYizVT8aEBejB14b2ETYpfH4d56Q23kevu9RP6zNPeoLfbNur8YeZ6SizM5kt9pZGDK89otZr9LMQqWFA",
  "key37": "4xT6P7bbPUh6J71AWbYh2kSxpT1SrK8TRh859i9PUksj6WvWuKmhESH2WfhDQCi9SRz5YxqiUDgNxcRp6bNFB1Mh",
  "key38": "rzzWYK2LxARsfuiurPxwYHpAtUrLfNzAodcL1mGpvyfrAQkL6CuEuQcdb9UBm75heVkJU8531qTnux1UdSg4hDE",
  "key39": "2rifM2WjabpD9FXybSZ3arSpK6d4mxj213ygcgEVJQQHTkSZmhH8cF88qtaPnUP327icK7KQkqxo768hDNcJQHev",
  "key40": "2vhmPtBjFUHoYqqE5NJPiT6J3nxQcxoKgSs79DLfQid6ibHJNXj7ZGwwyKWFiZYAUvRdWRCtKN3dbX9R7Bfgx4kn",
  "key41": "2wrzaW2K33TQWtrpKRrB6ArF9BqSf4xeTGQfib87Ak8ATC8N3FNKavA6bJrVNyuEQqoS7uiNhPWeNN3rxNmiMWPS",
  "key42": "GWiu34tGTyAs4BNVtKAaPUixAxyjo2nTMNP88BAhCB9fhjuvqSJqHVfEpqf1MPMFn9hPsUiCtGh6Vzpkv88TAcQ",
  "key43": "5ogYs8yBUaLuDdoYiTu1JMn8UgqDYxL4DsCUrPNGnjma35Za7EH6R4jHBzS339Bkjm9FXYWq8ZfjUomk3GuJjHuZ"
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
