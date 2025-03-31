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
    "5xsmLRYDm3MJzTgiq4GTPxb5N7q65rjZHvho5VgnSg4YrZQjDGC5Rgus9gFwodwcasWWz91J6H1TUmUoxwrjoohF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c9ySRsgPkLjQU1pAscKGU6eRkf25bNSET3R2inUtEFvM1AfQQpUwaimSoa8DCNxra8j6v9GG6gCTiap92vDzYqA",
  "key1": "2TgKx7E8TURRbUAHpkHGXxXGtkypaQJpftMw2gx6hWL4rx39TzQx3SFto8KMPf3wubfhG4Utnw2U6HaFRnL619Tk",
  "key2": "kkED69gsnywR17G5BH9qAwHYuDJ7snJcGQjBnhWwJS82KGRDPLh6yNjvsyxdMaXVTKBQfk8CsM6MLVVBvkur2rc",
  "key3": "2mGidWnGFmnfkYGYUyG75YZn4Prma98a97UGnKFCxNKioRZoBYP7gqJS11oUa2NiDQg4PRx4Z8ZJZ9KKYTuyKkte",
  "key4": "4CTjDDPi5ZxjHghtBxyRSQ3kr5rnCpdaaLff12WvBzKzd5qKkG1qiZVpBQw3jfPFTkd9cbVWPBAJAdzNpFgnjGkg",
  "key5": "2qMWeUe1HXNHqotoPtHoThogB2NpNiZFk9ePaxXjwXgh2P2UQucRcD3SsMXgJy9L7uBVgy2aFT8DoRYDZqiivYbP",
  "key6": "2dF9EpU2KuFEBYN3pS3HPDwzkmsuHFweswHw5bMzYaK5ciaq7nDxeXSPqHY5vMc2fuECmhewnG6oUUXvWCYf1L5z",
  "key7": "mPL6zkUmWuMfTa6tKoRM44kWfYm4DvddFbmmx9Fps4oS6fsXY62N9JxvMg5VFGdaGc47UF6GfyEoWMgRvQXvhQT",
  "key8": "5ZHaPj3xMyJgJ61KGQ4CM3rdpthFJhzvvPikGsyfDMhFugTzWsZUmuJecctJdyWu99ZXZncqNcwUFZTaueFVArm5",
  "key9": "42zAauHwec1ZWgwZd11Z2mpSi9NZfxbPLSa8VhqpTH1GrdKRLmUMrne3eGmGR9LCp4PrbDeRWV4mQiYnZzys3Emz",
  "key10": "3NhfY5XTqhyqL1qkQinbiqVSsduVzgFpa828cRhJh6TKStovkFFqvf6r54c17nP72DtFmyiQ7iiZpte9ArBrUygj",
  "key11": "Bo7Rw2uViX8shXiDvQjx6JxygBT6ooNEHB7jXQi8HcwcHWsHoLeouq9EXWARDiwHaQR9DdncwxwWKH7pkXSfFZr",
  "key12": "Pqi2akwJ1cdRTVZvUM9D4FfZHW4mqn1o5ehVQqjPoZRwne3cZ2rXYvxAWxyFdd9iKRg8PUJrv86zhhGtnoRJPDP",
  "key13": "3mtPXhmRMHxUWJjueMe1UoqDcGqt2ouNrwwTeo217dGJPphJtY4btbcpf1FgdcvK2HK9sjBEQCg8qHyiXv65EKA",
  "key14": "4DqKT133Eenwxx2xaeQ35AoFYyK6hNuFP6erF95HxuaEbsp1omgghiV9i5ams6j6meKMyRpj7HdKUsLbByyJFJ8P",
  "key15": "53NmNTgcsjU8vBnRkJHiy4czDLteeoJ8AesYudb6gKfBymkHXm2nbCsyTZyR5vcPnaxX6kKkgGrCCLiL2QWufht7",
  "key16": "4WJvrVSJjrXvsmuWDmmK93Fijen34pdUF9tuFs28sBGQ2cY8GJriHiGUKSGGNKxBViaPJYFuwpgq5HPeecgM3cLL",
  "key17": "2R967GCsLfDdz6XcnbncjHFCXN1pDtznRUUz8eDZxRwBFS7zi4irjuVptcMwYLSmvdLW9a12xV2jiUcEAsV2BmXw",
  "key18": "3nH2kBS7eQSKdPo5d6NXsSy3rikPdQFoW6tgYvMAZA7Ec11GvgCyvjejtg5uH1WoGyKPPMdk2Mhk8xmt1RvEhjPk",
  "key19": "4TUvCV67HNYxmbCJTY6tfKqZiRdQ3xjG9QfATgsaDnsypnmyeVFCA6Bk1TNNBeAmaAJqbDL5ibLGYD31GMkbHQwF",
  "key20": "5DfPU9Fc29EjkXqjrtuJcGY5YgEPsf2RddfdCSJqGQeLXnS8ZMoBGjoad5SanajYstRoxyi4oTfHkB3aDt89uqxU",
  "key21": "46arbDBnw9MpGubhzFNuKHYvnt1P17NVnTgqmWZMQ8crrdbXY4t1rU6SbwMLWRovmuPmd1f7mwyrkHEW5BsDg1Qn",
  "key22": "4iXhyeibpqszYwzVQ5w6Rk5yCpAbMHUgL8UUXQ3H8nwntdqjaCsd93FZWmoF2Ybo21eRGVAzv4y3onDSMMqLhpDN",
  "key23": "wYbLcJ37KanEETGKw6PoPxoZZYSs8H2ur8FLR4XMFHxjy3svkYcXVReYet4iMvmms7cpSga61bE3wk2pKAQYthb",
  "key24": "DRnR5JjNAom12dCvwRhamrcGCab3Zn1DgNZPbnUTpMLCohbB3awaYzhYuGLV3bYm99QQi9DujEuxdibFmmrZgJd",
  "key25": "3aztNAaiZkjFZtGhbYVQNGMMfQoMwXf8FhkbPoeKeAqg25giS5BNsXugeWBEbGy5C6hBrdRJo4xLQ1kqSKPskHA",
  "key26": "5zafVcs7UHg2qpuvU2TnzbkZVFCnkBwLizeumEfoYLnsJHEG4ytebAUfYZ9uctCKRYErGhN6GhLHxDH9oUnvmh2S",
  "key27": "5CDVAnT8FnQxQZP64HdCC3kx2SV4m1b7UTANa32K6rGPpt4Gx8zyyJCNWNhRAiAZq5RE8TwXaH1jNnYzJWrikmRG",
  "key28": "26tXLEgvdJuiwgtZaqSA3kaxp7mZGemRFtrsp8FhR6pjU3kY8tqydWsPtLBZVhrj3qCYTuaLXp6AF9brvQZnANyh",
  "key29": "5HyDKS3h3ZYSGov7s8gjcw8yFgXCmptnR4mjP2VGxFWFm9Cj63kaHxHVDM6eFk5gRPQmjezQE1ip5GRuCAcCRaXA",
  "key30": "56fLLpH93Pj9erwDqQNW7pneFJqQo1bC7rqwd3fEt1gbWkGBbLnAWdgUJPNvWLaC9hzodctJcRz99bRxoMGKAB71",
  "key31": "2w7Fd2SNmoXjDvqa2b2X7zAZv1Fmt3MCMdzKHXWJRAG6nrjazsK84p53YdAMYGsGZa7UMuMLnYy8pxEd9GW11x5q",
  "key32": "45ossffru9zFvFgadxo9pNJMMS8PDWZ6y5eK2vHVZuBTmAa7JEYw7bECwUuV3b8PmWSKn8npQpVWotwNXBszfMd1",
  "key33": "4FNNjmQzaEwB3faDF4Bs6H21atjTTA3nmQNmH4WWSHDcTm8TFp2WR2H4QENKuRfZJX4bp5ZWpBAXmyEysK3ZmMXu",
  "key34": "5ZR4A3H2Zm2J8nSzCPeSoWPtw8QvmCnJ3zjYTMvdjw4ko1ULxpxgLxJKS9NPrsajiQrThUXfwfuvW9MN9eCCAADE",
  "key35": "3iNsbKUU4qh1p5ZzLXodG6sZj7k77tVEkXiSCH46NVSTSHvGrwbpYnpUe2FrTUxCbZtu46uqrjwiuCtwZAmDc6U5",
  "key36": "3hxxbV2ZKe5v7agbh6dKxgxp5m798qneb2AFNSiEqr6NDyxcpBsBBGbKqM9K5k7YQPg4ey6PUMHEsmkW59e67gUN",
  "key37": "3pMApZSp4Tfd55gtph1yLSFWJqurUcasB3fHSJDPnZ7oSvFwVg7orizspFoyY84WP727oZ9nZKhfTsXTqYWWvLGS",
  "key38": "5zT1XD3y5pDuEYvyZKdYb5uWZuMxZ98pzP4PAYrPtVy6G2aHY8N1SbJWrRSGiaX3bGzvtsvgvFTnFxKVzGcJTfNm",
  "key39": "4Ltrk6G2FSSVmfHBJDYStUMmUd2aWcVWgpnAQ5VyyQrguwjrJMGCZGne94C5yszUeF5mgJnEApGSLUMgWRCVNvyc",
  "key40": "3LCCaGhmJQ8Gd8PBeH5pz8RVfEDh8F5jpmnU9e4coTgjKD5sSnL1iiFvDER4ypngrz31sXvj1nM2c36J5ZG8SHdY",
  "key41": "5PgXqfDd8QSiirPGyj9fKcsZEYgndR6eW7UpvUtKTQH9AwZUL2GaSinRxFELFYEZ4JcHt4T9TJAQtdgHVw6j7aQ2",
  "key42": "4rqf8nDo2gfyCS8VgGk4dzVfGgdfaBWyxLaZGX5ZvXFxpF5FDqPiJS8SSwZ96QNVGo25tyik8b7B3P1SLPuA9htw",
  "key43": "UqSqkChvBahTzYKiQnioy5b7YYFp6JnQ18biVpkKmgy1zwR5657EwfBJBBtNyoCZoQoKWdFJXcSDBCrAw9LE34u",
  "key44": "jLwLAA8hBoXiX34tWWZ2KDipqbDQyyXY8Fj8RsEoEoG9FmeAeVmbXad7ynj7Gwhsrr2C2KBNxUf6m6BsBNHuoGQ",
  "key45": "5YnvggU2oWSwdbErc6qf8ruTM6PNUs8qrNXZ8ArHjQFfF8PprfzaiDim2aqcHmNUeWkqKKKx6FE6U9s6uvEjnbdi",
  "key46": "3o7aaYaCFKitnjjV1PUnG5tPccRejQH1TPJDyGtRgE5KVY6LkJwwaHACUFRDaB8v3kTanTQKQGgu4xCgjWRLdudi"
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
