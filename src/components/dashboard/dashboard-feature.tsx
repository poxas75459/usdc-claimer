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
    "4LwK4xp4eUdoXT2KosbR7NZRHLgTFAwumvNTbdZPHMkuC29ggiDfgaucKxUExft49QAger5LFyCoMR44hhoVZyrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57kBVXNr215yxLUdv2SouM4DS5VcpLKevsmG7JXeL5Zm5jZtyfAMxHaScwJ5MUSKg8TLm3rSD7WbPAWqBdMV25Jb",
  "key1": "4HGZzWmxKJjUVuDSRhRW7jn3cZRDputGmXCmdVsnSQEWK5zQoePzbfBPRxmi1Z9r9hL4kvn2tuiPcN8p8LVAXbbw",
  "key2": "5e7dhjBYwfDhUXEr7CvErkF7vS4PoJFPZjbrheU63jwUYJGae6Tnk4ZwXDy7QBEG1z3F3Kx2dHYZqw99y43ArGPA",
  "key3": "XuMFhjrVc7DTMpBSyQAMrF4wM2YpfpuLjPgRSdjxhisMQDXaEMAGCP3ULgu7QE1mLs2fvMhX75Ask6ASxuixox8",
  "key4": "2uFreyDuaTJLU15caVzpJtsEHyMh1i4tfZ6DcitXf45VyhwsMcv5FxGUdWodoRYW5SzznPWyHXPYokb5yp4Qvqqp",
  "key5": "5cnf15zfxhcD59uSTmbE3hKwB2q55vySfTosKGXWMtZmytPgfKcadmvi1d6WL78WW3VmFkaUsPTu9NHNXUY5VZeD",
  "key6": "35jQLMs1rndvrsBNxCRktqqDZgEEvWr6K6sZzvy9A3x5VYo57zfnzjxJ7UkezWRRknfcFfnDxszxpv6hvSWWd14o",
  "key7": "ZULxjPVka2jkyKESHz8Y7k6B9MpY2qMsSm5cqEs9RfvH8U7pLFpTokEcR6wxQjfT6ziSJrw7k9gRZru7hRDX5fd",
  "key8": "5DqBkouVzzynm1qzPXCYYjaZTSgUYZUFgNqvRkCNN7CHzfC6ZEA277okmAtR2sEqxtKaXvdGjpYWSrGoUxkPk92Z",
  "key9": "2AFnsa2dhPUv7BVtZiastXsGi3KxoBe2qNv7Ak3TF8fDX6rs98kgaLv1wx1QTeHBE9QMrVSohCbTKF7QKPWqEuun",
  "key10": "3jR6VRx9TFvz8L6nGKCButpk7t5LX5Tskgkre97aeQbWaR2QktwiaNb9BXGv2PqSSFdtfrUBFaAvYiMTMVU7SbqU",
  "key11": "5JaGaQXyg5NmZ6Va7mJqC5MapzLkrUwVr3SQGUk21N2zmeve9u48w774L3w7F3CW26xE8ioxe1zJDDvzAr9LmhMK",
  "key12": "s9nMEXpFk1kijdhVw9PX54LLrvLbcjdm5t8TDXTsNRdzkHR3NG9aLXeKXR6d1m4QugdkkKtBMMyVShduwPzqW1V",
  "key13": "3EehkzUBzLF96vofA1xgTtaajbVkhKTnX1RVEatRbN689hF4d5HjbXDCxEpq6SFEHB6QX1QqK1ezaA6N5CZTfCmZ",
  "key14": "3yZvMdkU6KL19KzBS7nHvuYFECHpvxsULHaXi3bm8YfMH17knWZBWZuqQBYraMBjpW8dvaPvZ1yEeKHkKcSYiv2N",
  "key15": "5szCNeLoSEdmX2WnrG2DL22T6g5cUWSU3nKcFTmnyDRZTiHLGeMEFcP6xdPmsqVUYYj5Jo8SJFiaX23nqrzLa2fk",
  "key16": "KwAjVPrDCvajG7kRCh2DrEwJ2oHZ7fvva1doH3s5SUNBhCfnpQm38fDboxU5dBHbGoEXstiigCLAu2yspQ9RxJU",
  "key17": "27ZjL867uAhL5KpgXhmnPj7H87gctEGxrJNGFDzo2Z8rz4cMMjutGB8fY1h4E8qHEKHKMKSkWdfm6Ygs9HtdUPwi",
  "key18": "A9tNqtz4nh9Smy6HMtVNEpkbC1w2SPzWwZUhYiXzHG5WUCwU3ENdA7jiH2sLUPCHQrbtoigVnhWYB3G3dtM446X",
  "key19": "4JxyuDNrHbQf7QLhHmbA2b7hBZ1JkWq56e1czhzq3nqq19cmqfm7QLZsijvP3cHcJrKFQqFMcA4Vt5Tz7DNg6csu",
  "key20": "2hEiChDCs9JH5UuxUFk3HqVDuqqqfvrno3dGXMcPnVUKx537K2hp3qFTPcj6dzjeDTuQmCMxabDm8jWvWEfjub9D",
  "key21": "4vFyif6Gi3G4SBoG2RDsRFPRaQmu2wzZkn9ezAPgrC6s7aWj8tijkmt1vDoq4feSU9LNeRYjqpJPBxtkoVoRA3SP",
  "key22": "CdG9X6UeCAQpZLXCew5RK1GV791c4DBUHfAQ8SBBSZTKoTy6Uz23YNFQTJYUFvbbfRzaAoAXaFRb2mYRVo3822v",
  "key23": "4ukWw7FLcGWQZzv3JVBp1CejkyEk4sZR51oebocgwbuMBZppMsXYEt53uJmfBMjkoKfsEQjeVkCewFR8bbTQgtof",
  "key24": "WqfHG1gKXZXduHbBucG9htbumUCBbBqdgegokHCz6a6Li8bVVYeWTm2Tg2Wg7A5KQDbMBztNgNHeKrfPCzq7q63",
  "key25": "2GAnFeyCrzAzmZmZTzFEuvvrxb37EnYJNDpHq5ecxhtc4SAUGm4rjVbQkFnbirAjLDgBK6ZM6UFHF9e5mvh2A786",
  "key26": "444NET2FG7TXDsbrM37vsPsNdxJstqCctj5J5Ti88r8trXLQ7vFVvhuGRMVAxoopRKCGEMQ8KdYPfDbsXdyynnjB",
  "key27": "4VXR6chBEw9S6J6g1MYeKsqcE86rGd6XZzx8nLPHxCKhqaKqB7SkU4m6QEWaavsqhGBy1sopY9PFGxdgnnCSpTZy",
  "key28": "57nwEZExHeZCHPJbGX5gHaLk5eBmVkUrH5ue2FjBX3NUS3buGPg7XLayAHKoraWi9tLasXJjTNfQTdhxhuFVUuri",
  "key29": "2BNtsvBzf9JGTatpqrYoAgT7KVGPc6Fja3vvb1TqJMjQki9qp6HisMsmg9v7WH7gD9NgY4NZvE9wUUvsyHoScz29",
  "key30": "3xyHewwBA5QJCDijfR5aL4Hh6J5e5kQxDMg8rRJfPQt2RrCTrJUEKoancZDfR2U8qfYpL1b17YWKpDEEhDmxaXhc",
  "key31": "3iPNHDi3ZgS65txzaad36hZ3zqw2S6LatM2ECS1wzvBEP6K2odbQyXw4aWPcWkRkEBgShYQGoVEv6daGCw97bZfL",
  "key32": "5DxvZero7GENcmVr9K1VBGt1PV1Rm2zw91CkorSrcRd3ZDXtCs1ReG5SqFqjFW1jR9BxaSYyMHqu8RFCPL8aNP4Q",
  "key33": "3hmH2BatxiTyx7EVz2oN7TTqCBmKt9hxNBg932kf2fmqzFhAtb6hqmbNJJ2Y4gYvSMNHJNCumVHufRSA9UU5M3ke",
  "key34": "3MUe9KXWtif2QaQHEwYj7M6XgtyyNYubSnXJjy5mj8M4QWV4R49ycxrjx2xmrUTgLHQjPbqpKzAURJBTfPQRBvhY",
  "key35": "2nxyM1bf5CCDjEpeik3JizHgJUusRG22H8fKzeYFW7diQRmnv5tBN3hUZurNCrZpgHFGSsyuyvvseg7r9A6NnUNt",
  "key36": "2gM4ceKUUwAnnfwYM3aXWtgHZ9L229FzHrapSDbPJ2CDFBWBBTMqipBmWyhyonE6c5QABNQ7w5NtgsDYRr5iuFJo",
  "key37": "e8oRZN8CtxBywWzxPUAe2M2tbDBPzCfFztGBhAcvXYCvcKNgpcVGBTaghRzeg46hSLXH3kAyV9BgpcQ353nAeVK",
  "key38": "4K46epuiVoUUJQrKZ3EpfEf5jyjgmjmXa3EAs2iDPHaCfm9YDBiSuWASjhG4KPQg44a8WnPdFYBBxk79Pw5GtwbJ",
  "key39": "4BThMnGyDx4U8A6xTPrS6rGZt9ju8WWpsXQPFnnzxHRd6Qh7Qg6ty6L3MQDiYvXxdfVLKyEkUGBuSxX9KL48X5FX",
  "key40": "53A5PSMyJ4dfCLWZyJks6VEh3QKgZ8mYwtGdBWRVtd4LHz5P2Vpgv1ECnikbp6dTDYheP3Cgg6FfyHoSTN59EAyE",
  "key41": "3zWrr3u1drkjWo2Y3i1bBukyBYG384vn2mp8VqXLvLyxmTAMfmEMQo9VuuWLQNpsRJEfF9qaAXpdLxXoE25fiRbu",
  "key42": "rgsrD5jMhXq3AEeB6F4AKx38KA6ndP9TBC4ptk76UaVYNeLiitYYan52QLtiVcGUfhfPzy8Uppe8WzLX2UbjH94"
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
