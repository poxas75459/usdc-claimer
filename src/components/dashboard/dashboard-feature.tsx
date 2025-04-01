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
    "ngP1zwoAydUSfeoq38NXxSgDwFiDiqFhBHWUxSXm96m82En54CgHFB3QH9JeEs8nqPbkLRN7mBMfF1osyA69G1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ibT17bcLH5Gqof1XrQt6Tpu7tiEC3NgBxZepq2LS48is5E7888sHz8qKquhTNV5rBZ2UpcqgBQefvqJxoae4MSJ",
  "key1": "5U55cQZK1gL7hy6kD4g5kr5k4RFz82UvLMR1F3gNLjuqxRF4dXnPdM5xsP4x4P9X1Z8CP2nAeR4wLvC2YgpAFeBg",
  "key2": "mKQRRpVKE58TsQCNvCCAvq4cMjuki7h2YcB59MGsy24j14YSpvdUmoaPvY9CUbjecrpLssoHCF8QMR7DNZxZiUN",
  "key3": "4YgLB2Xi8fN1dr1eX36KrndPhmiJPEqWQuVNKmeojE1rrqXENv9GbXg91chnhersFLhaQu5eJnb1FmzdddUJwJEW",
  "key4": "4sweNaPDjaVkqfMVhVQc2tM8xPRbDeV2JKgdwGu7gnixLefJxtVBDq5D59M62NSAJtSjrjRLYWvWoJWzmTFkKw92",
  "key5": "3PtU2hMaxrtHoHaqkhKcYKxYXeb3Bp8wAoXYBM3pJ1rAEBqqrA1bnpozqc5PdFkE1pFYvEqt1XQffiWA1YmBJHJo",
  "key6": "5gQMZaKf8yiQTYjU67Ceoe87NprrmViUcBSahaij2xzvFEo9HrnV8J44Ajwrn7xhgXCFne97zGvn7h8RLuhdNgF3",
  "key7": "4By9pBzYSAYNugCDtGxnDdHVD4X6jHR7NTyARSEYnuWkyDq689351nL9EvMJPHFKQnY2Uuqo8br2MP4AtHjbu5vz",
  "key8": "5fvEtr1tr5qFKhe3hL7Zfcg9uoKfrB7uXY1ytooBynG8yV7LKqDwuyaWw6ap9MCS2Etv8ijZsemSnzCVhn6YJBws",
  "key9": "4Z5HbLrjvQg3hRMisT5nDDfQ1hsMrpiFPicatcuUtLKZH2SSDqAQnPS3fLkfSW1E7WiCv88tg2isGxKrdzuGJum4",
  "key10": "4f5s1yS6bMV9QvrBSTRTv9RRtdMqtu9YG33HDoJS2desryfK9fxDumLB9tY2RdocpGpXTvRs4o2mgzZX1Qf3DVbY",
  "key11": "3oerkyckhxZeKT3WA5pN5hbZEw8dFgLuv8yBMdWzwkxguPKUtSTh4BKTPivhFZiarfKxtUZ7rxHJHEubt2pJG5k5",
  "key12": "3Jo3vrWMVrQqzugkQcTtX3R4rnVpWHnS4v98Z2cRbVhKTJfGZ2iad7vchfTM7QK96KgtWPm2wfvQrm37JTiGMWxu",
  "key13": "7PzaneRdznPs1Co8xjZW5FiASEbM2swrYmacyjrzqjZHfatN6trcJ83h13yvCcaQj4ywevbNKLSEwBxWs14dgjx",
  "key14": "3RabfrgAXxmopxRNhLYPgQSLpNNgcHGLCxfC4pQHFYDcEELsv4gySoSTkjctfRP2A5tXfmFyeB6cW9k1pGFURsH4",
  "key15": "4jFU3f7mcuHi9BbwaWd7WECmhRnrvtsUpQcW74LBGyi2JbU3TaAFHZS5BhfeEU4dPzkmGmc9v3syLDFnFuvWXtBv",
  "key16": "66s6uHntYuLsUcBmywwyewNskyNkrjS6CBTtMjgsSkfht14QHmuRWQgYZU84yD7d7fQXxqRkadERq3FNThbH4weR",
  "key17": "5ZSLbmhgHM5posg6fByH4qtekEegYRvK4EpC9dXrYtxY3ft9YX757eVHHuGPQHVwpEiCLdUvLEomH62WBKhc8Ukw",
  "key18": "5gUBZWSuQXRw4EgzFVjtbrpdWYWdfZEMxTnCuw4m2bdBbn5osY3RY9ww892oVj9Pog76CDPjRwPc5wMPxpf8W5Pn",
  "key19": "9ZxougG23vPqdZyob1QcPXTcB8SgzSiY5KpfouxVftGavxVUzWwPCU3HdfZNHQq7wA5aNo6RmtTdGJ16sMNh9BZ",
  "key20": "2yMAXUgjBorWjs6NuZWv9riEHkis3JxEFyLZ9F71rdkPA9WugMqiLkVgWoNo4AsFkeTQQp27T1Hqbq4zYb8y25mu",
  "key21": "3Qo5zN9ZnCTwonEXc1zGFoGXXFTzRqQXfkstzSATSnWTzDhfUZ6STPGbn7QWRGwChz2fmbARv2wAeg45q3BcFmTc",
  "key22": "5uftkLkuuQry7mGTLUgfsqt7twhXHKJLr3Gzu7mRhMMK7pFDjGc2A6A8pSyAuApGM8krvjWaDkW31ug2qc1UvWGS",
  "key23": "3Fb2ZDWp243FNsWszHHVA4UgLdX42BPdK3n9PpqHaU97AJMCPk1srbmYcsVoaA53Wqk2mg2eEQnPFddok6hziEv6",
  "key24": "4tnRpStSUxGhHyfUStQ63i8yMizBRLgLFcEarvBMhmbJ8xRXKE7gnxWjq9oSLr2RmhkCiy3aWWgXmSFnoNBM6kxb",
  "key25": "3zjsDwyubr2BvSmaZ6mNN1HuQLxzdSkPrcrqKmFgKBzJm2nrF6gSmpSp4xXcG976L7JJX5mbd7AMahmdtkk1VkE",
  "key26": "4AZRbxKibWJjPVK3Qe7nTQq8Mq1hysrDUANGUJaCZ7F8cUENhrvVLvjvVGe8jUhEEBxfZGRZqwCooFiTNtpwEDmR",
  "key27": "42FDgwSSbWMga7JS196KMTuXs8RB4yLEEc3XzRQz6k2jwLFMYFcVz719Vv6d5Bh3X1oidqUWwke4hjvcLe945Gzs",
  "key28": "4DcxknR8TJEk7TS2X2zN2mqcSxZXkr33zDemFwXhbvXznnaU9LjJGED1LfLTcNgDUtPmFoPzFKDq7RDLm1fT4anm",
  "key29": "VwpLxb81991Xix4wHt3hMYc5WF9mhdgfnGdv7tFHN9Pm4hekWvuNF3s6mQwRiTGLuywuK6Wxkq9sPRD7kCkAuYc",
  "key30": "4uJ8MNnuhmJumbxMtDqSCN1t8fFhj9yq3DCPWJc6oGvpZAW9kC4Mssx2LxJJNKmusLgTfZ8KcaM43aZyMQaKD1fr",
  "key31": "4uXYAfpB53Rywbzps7BLa3ogUGaSSkooPe4k1Rn2ZGZM2qjdVkAQmN4NfgWZ1WE8o9ZX8giBg3Q2fVbD36PFEG15",
  "key32": "9HXgvtFyrGVvbvMthZrqQ4zujqLfzFNFepEXAsWQNyTF1aqBhm5CLb4nft7deeV1XfcozBF6SUkf2KKMpPYjr1L",
  "key33": "2rQDC2omPZYVzQGbLBmw6zPSC7ZhHsh3LBF5FQXEyC7ZtLgnBAxKn5Xahzd5JQmCDcqftzib2YcNqAchfHPZPfZz",
  "key34": "sLgfdENWbdRQdBAKba8sTuG9LnxYgxuPvReGUWQcdkTDkwaJB5xJ943yvfNcumkA382LCSadDaM541bnX3UQ2Vx",
  "key35": "oZofnjHg8wwbdB5XCSiW6ZbVMCYphz61zqDjJKcHaLtqSC1GHPfUi2QvyruUtdnuU4UFvziP2jJKbaYQVFiBTeS",
  "key36": "5fzAQgZEjgPfcz9bnFSsG2aTYPQGzVSdFdt63diFnnGyeoYzHcoiyFTaUghV29oYuT8uA1qHHeafsHMkx3aPqwga",
  "key37": "9u6jMm4gPTxv7gCKtirpSpf8PjXu4HJQnQRzxssFXMxSfasS1D9kiguxzpBwAL9eNR66PmfmonaKaCtvM2cr68f",
  "key38": "24ykw1YhbZMaMhP936ctgUP9EnveQ9K7pAVfxSzkLgJX4DxFWzB5jaM5PLpRSVparSfdT9xFj61VKkm4zkGHWee9",
  "key39": "5ShqPhiQxTzGUR7xWixUsticNcAuv1cWRvkLZr6JWpYDVgSX9QEuQ8VKxdDj7uTEqXpuAaRFXBhx3dFeyZpcNVgA",
  "key40": "3EXCs7otyy24vU9bYuWU1sY5TaUAUt8ZiJ3s41i77gb9dBfNZH9smSaTWGn6H9xAYPCoDEPwkXezHJRAVGa7Eu17",
  "key41": "2L4ye7hz1VHZWifRKkneAXJn4v3ad9Vb6wXeXczjABgdnLRp6Gq7Yr8MmZcgRLKPZbQv72wRvW2t8HEsxyHEpA9V"
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
