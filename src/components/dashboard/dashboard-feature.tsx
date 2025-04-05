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
    "2DzhbgUiC4pPjzV8iM2XNqKc2RUKSmYY4wEkH8qiA1coDejPE1xHiA5vQkJ74W8iD28cUvoaaJ3pdvGPG17GHusE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xvnbtbYJZ8kvXQw8c3hULindnk5BQcpAaSTmPiC12ACsX97M1xVGMihom6MCKXnVevoC4C7VqK3SXhLoFkyV197",
  "key1": "2BLyE4M6pEtBoQkiwRwbs1cgFKxd8uJFY4RaeeGcGxCV84dKr1DQzjZs3BtMwWeLF1WYjGjgCvfmU9viS9bP5RTo",
  "key2": "3VpAtAqZpMF3JXWPDezhZBqPRKVHB6dJ2qMpW6ywofEjDuvhJMXGpwincoVb3gfGqj3vQ12XS8xajfMASnKYxW6V",
  "key3": "3KhyC2yaQX7LKbyPt9ywkPjRQpj5vZvoBzTRgfLTtV2TTPqzZpLrunhMLsrZxLLHuQrZfZ2PGyZm3MQBC16oxiZm",
  "key4": "3xc1NAqbXKrHs137w3sYfKXcAdp1iSMiNVQ6GxJVCU4emyprVVszWbtPbSqwfaNCZjh4sgLGMyuehMVjmUUEAgcE",
  "key5": "3jUEwy1vwq6HXQ9gnBQACwJWkhsQz7cHHHUAE4rKJ8wC8WYYQq9tpaw5LRgFEzVbQhLKkM5tHTtWN5rJKcgj9x9K",
  "key6": "4FANvTUn9eCabuJegJLWXzQr37icdyjLgHTk7TCMgrFD9qunFaME4yaDgceWPixGMSwqNzwCULAHys12FVMteXu6",
  "key7": "onLRbLYma7Me4ToeFndCMw9yhDHKdCqoUrdoWLya31xnJuofDeb9wmS9ZFPVwxvHpjKvzSQqdKb7saNMaQXoYHw",
  "key8": "5NEJYJRtBnAwuCFSszq9XAGduCGXPXKwg4gA2V3C92A23GumRoq69XguemjXXWpGBixryBGUeJuZEFNmdpg39C9z",
  "key9": "2SfUUKXDwxrWgXWDHhoh9rBDyQcK4QuKMghxdcNgur5MhFMjWxP9FNp4rxXmtDvBk9fKcDUKJAdDEMBu7FSmyYCw",
  "key10": "4C2YZRAo8AyFWyUxzdSNxSXGce9bu5LDJW5JvQ2kRaL8qN3Jyak7D3pDigM63RYSsjtDBb2ydF7yTLuCnWQ362X2",
  "key11": "27UnSmpbHHSkuwYdwSvX9E4jSCUCfGmQ6hNnyf5nFm8Vb6BQP2MK7ivDiJjBda3G8Yk5N9uC7gR4sRRppfWyiLkt",
  "key12": "53cxouKHpyNmRsJBg7zN9m1EfpFWy3gRWEveWQJoPgZkjpzLWLPRrJ8DxgHz8xu6JAmwzSdmW1hS1XHaxxuCSQU9",
  "key13": "4jhA1Hw2DDc3JUv3dcXRPtRiSk4bQhWqs2hBnfMf6NYTtfGjmjeATvqxMMEaYoi12f1YkQeq68WkEEhw4cK96SY7",
  "key14": "4mxdsXc8PbtH5xCk6FPDEQfYGauLVUPseRT2yFaC6KfHL8wU1TzTg3UgHR4tWE3fNmcroZK6VxX42vQS6nne8ReU",
  "key15": "5QCPGzKuf1ack1SfPbb7Acnt3iCSFeyctmhPvH4vrMRAPXRKKz9p96thb29D8hZy2QwmD7ryT9LGXZoa6k3XckeW",
  "key16": "4WczadXjtxxKoA4S4pupF7obJ3iqJfnbATSsnmu99YdwS78F7h2xu8fXTeCYcG4hmfFrUg6YYXP9R32paoBN7Wns",
  "key17": "4hHhCNY1c6yJH89r3SxszqcdGUoKZmDrZrag9NbAJ8msqdEUNX2sZs3n4rHG6jdxmyveH5tFc4f9hbaK8uB81W92",
  "key18": "3RreTynFTdLpfiPMGDFiDWseotagyVAe3fz32FhUcZr6DSBY9S3DYhZqxSxG5rdqvBnEJJzzDzH3HJiKzroK5t7c",
  "key19": "518gxx7sBLhfiFkNPaYDG4xTYPnJMtd6LLs7jb7NdQU4jicaAjhR2ENVxvL3MUP5rKFwQ4P38S8MnqcrJEaR1GDV",
  "key20": "5d36eCYB8fHAopQc1UTjxxD3Re4rUTyPRtakPjhRLRiN8SNJgxsGaycYLpzQWicVAjammhrDKg5adZm1Y9XjBdcp",
  "key21": "u2ij6xD4vn4YRxjmdRwwAtur9bkFvQFhkXMsMfybQiawfrZGXARrgKXKjou8Spk8fudsFi37zeJjiqgvP1rz8wb",
  "key22": "4FKiTfYtQ69BEvsfStpVJJyFmoj8KDSj9dzDn8WJzVXwuDUbMdbzk7FH35RSgqJD68qEEFvtTzQbstCKzakK1H5w",
  "key23": "4bTdxdrvQC4icVfoNXaMjENFqAsNU7cPq2U8mgAEJ346g9v6xhbBizdmEjGDf2fmnU6WGW6KAbQLcynsczK1ix4C",
  "key24": "4VaDSMSNamtfaMM9Je6V3ykB2ifRceLHVx895pmGcopwmwC1mxLeUmXXDQBSBKAZNkJgqWJtkx6zf7VzcsfHipGS",
  "key25": "62XGwf8W4b93BDBjmZvc5bXMKhG1zBS9AfTDnXfhq31jMVif1iQZvpzBBLpHq72nHhwDZrJRmHfytL5v9UoPgkMb",
  "key26": "DgBz9gzbuCWLfx2X3EEf8qTjeRtsArNC3uTv4n13foChySP2iYANbVhDsVFfJWyWFYggcfHs6SbfAWNd2EawMtP",
  "key27": "vk8MUCBs3Vjf1UvHVGHTQ83aQUvnfJEn5ikeafASXxhkdVsr9svbgapRDVQ2NKiqWr4umEqKdaEpuAj9XVTdSzp",
  "key28": "23psKktbigrhjndkc7A6GV9FbLgYSuktdgyVkWovcZYxh1oYgNityb31zj2csZf52uq6AJmYBukkzchxSXMrhk8X",
  "key29": "3berZxMNDorjkFgczMuhUM6dii5QRbbpf8BBwQmLYbkJCeeFJGiKM6TUCQe7E71XPgQ7JRu92fQC3bu8Sw45Uvwg",
  "key30": "j61cVxmu12vuJLoXv7Jbsr2rjuwybRUV8YP6mgQAWrERc2vWEUcVBRYKUYd22dotCr9izpETzBfVgAsprnp5BJ6",
  "key31": "4Nku9C75aa6rLpvfvhnC5UEbJ8qQ6yyCiz1AhFXpMC3WsQfagRZx7q42KsEFSiuAR6fh6GmRMrW9zkeshjm2hfXU",
  "key32": "4dtFqD4wKMXKKHp2boBZn82rr7yANDGxusFbFSsqG2J3a1YaoY5jA3k6rnrRsxHcScfX2ahnkWDBE7bka3ZbCyox",
  "key33": "k2W9PXNo5UbCKqpHDrrUHW1E1RNRgPwQMbBvGHbLUXdnaxiK4k7bbZhwmZH98JqNjUnrNibnQa3ad24ad72CbuS",
  "key34": "5r5T1zG6mqyjet19pfxEQ7U8PFnGRi8eAKjD55Zy64U5geSf4QH9xLUmG9wYBbySkZkcqE3skQSTujqE71y2fgrS",
  "key35": "4vr1EL38JxKiuQL7jCkFSmH7hjXM6aHjFKfJ3WqoY6zNWuavmdsunNX2dzoshUAWUgNVE3RH9hLY8JJpFM7LmPaB",
  "key36": "49SR9e1oV1QVwgwjJKkXRGyKcPdrRMrT3YS85rYgXY9fYV7zA1dkZJRvJdLRAHKpt3ybF71DWw1LbuWopL1YKhYq",
  "key37": "tsnpEmunf253T6eHw1YiJWjK2F7n2CYBJYCfuy4ozMUkMJhA8sSQD7VR5y5Z4Ek8BKgzgUtPZnMYNhqApGarVum",
  "key38": "2JxCKm1Gy9JViqPCW6ZhN27ubUAevcnbjyS4u8SwLrGkQZVvaeskwVpQ8bmaMyTSjKxwv1JoVjHq3RQ1bpCSD73j",
  "key39": "ysaSQqFyM2Bezp2kd2YNYE4CCi1BT1CAGUUetgBKePRig5ySnKXPN763aU1PvZK7ygcNBE6pfLL8eLtBpmv3VQe",
  "key40": "4xfQDZDSJtM2XpvK8Rcxd6tzfAW94BLSiPoqZxkbC9rMH57eUGmwnzFnk9bwBnvbvi9fE3vR57Jw8Sg9Qtxdv5Wj",
  "key41": "327ms1LhrGf38z6KdRAy7DpjGxzckXeoKW7VZKciERiuhA9h1QrA7oKBJQmoXa9vqmTbCNCkcxJk7A2g4aKpX59s",
  "key42": "64XpE48L9DZvNdfKpnFezhcGVdJ6gCepu73EPwKfzDZqLAxd5c1LZkJ2tBgWjgbrmxroYPC8ei23MzonSos5R4Rf",
  "key43": "5oCtkFRMLQ2iNXHV1m3RBfTaLrQPkmfZpi4ruQDU9VmTgb1jirNFApmatSUXcbKnyu4onJ5eP8fhsminihV86LWC"
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
