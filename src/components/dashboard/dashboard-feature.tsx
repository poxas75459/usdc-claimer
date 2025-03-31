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
    "5XNyhCn1hVyxZHAU7bnwKJPrsUyAtnqHcZBiqo9qW3cYWZLEW1XFRT3B8BAUabjb8cCJi1eDstcCAjSApUqhCCeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P9mtgJ2i4S5k6vq5UGVcNbYR6X8fBNBiWkBJD8gLMWkgVZ4bjQuYQBAHcsSiWpPcgk2DU66E8M94Ek4uYT6kQk4",
  "key1": "LoBthzCWK8YKB94UNiHkhhBVMnNFhjD1VN2RwV1mSDmf7ZPv7c7c5t8n74P34kBK4BfAJsTcSDUtrjY36HqjxYh",
  "key2": "54pRdjmjVByt5be1SkYiCbuXLzCy6xR9Z75pRjEvodSfVge6umRB5G2iYmKxf8Agy5UZWbgVZseAPKaDgETXr91H",
  "key3": "47hstSE72t2X6VjjJX2rpSHuwFiTMYHeehNV3UC7LaXKgiGAvMSydQKKT3717yD9TDwvRVcKxVv2LYqfMN8S2inA",
  "key4": "4nw9KkwNKzQFVsZcZtnQH6mZgeprV1cNxYwCefGJ5RwprDAAYWcykDnkHRcQvQSZsDmCbjvgHsuFqT9nXjz4zycA",
  "key5": "4Xh5kHKCCxjCGQo5Dxm9TbC7ynrCRaY5qkirZKrxw1VGu9StZeQBeFskSScgjEjuFPtdvN1BNuYaxJNZguwbdPEv",
  "key6": "3zfuvYSwWKzn88GCepx9AuNa2mbrwSNfxmcVCjAqxPixFD53tfug1RzzsTR4FzZbFzoiSw3dcfkvGFSZThUY9eKm",
  "key7": "4ARLVUBnmXjyVwK3FC2rMk7tCykM2YnUJQBCdKDmw9t4LKSXWbbHSs5EkAjv3AiFQdknwTJ7vLawUNZENKu9Pxok",
  "key8": "DFseinYtHTYQ9PHUsXCugpHzQtt3CC8dt8q2ndPJoAzqVyjeR3UhHgK5NvZ4YcjBgoMopeCSgs92Ryuosk996cx",
  "key9": "5NsXvjhSFxLpVFKqdeR4XHGkWojSYNiXiRc7dKqgiMu3Zniq3YYN18vA9jReWE9iPuixXAea2zXXEfUybVM2qTDb",
  "key10": "4f7nnacjPan5YnJts3j2Gm8YybGsWm5SSbHRzPuPjNpQ2tjSihsiRWUmvq4quN5KkHFG9oUNBaW7A3YVvvinqNpS",
  "key11": "2ExUCE2b8hLptv8XTRUD2KotiC5ka4kHkoshBaAagohZwcPCLxUwBo4W9J42A5PWcvCqyCi4udzpBtU7aR8AYo6f",
  "key12": "46MDLTyJUQs3VfSfU4QvgPTrwEfskmCMKh91zXW2emq3yhS3TNmt33qsnPfeFUGPMpPYR7kS1RB6r6nTNrDzajBT",
  "key13": "3nP6CyunXxreZnXoHJNEWULeKy2CwdHoWLKqm7h2vZC2DiRrNPS8Qt5MgxyL9vxtXHTzNFCpD8kRyaWmzFDmRu1h",
  "key14": "4na7d67d5qBBQ7sr5t1S1h1RR9AQyxWRVFScn4QtfuX4M1UMDzxiWigsKDLgpnLdxVt3dakCNiPG8WgXaGfrT3Gy",
  "key15": "5YpLGQk8GGvJ9WBroaVcRbHo3CeR6n6Kv64KU5Cf1v53aBHn4i1vbcrU8LYcB9NHnns9uHXZirKntDJms8SqC88F",
  "key16": "4hyx3FPN9ke9AkAtHJUXUBuWJh2tPzFbPEafz3T3gK3JFM7YbowGCWjfa7npFY5M2vZryy7hQcYT3YToRcMFhGMQ",
  "key17": "2tqgaWS77iToQgTij1zrvu9r2Pi5NgnziK613zAaodAcBQuT8QyGDf6xjFJA24hpSmJcC1prPc4VpdKmWyQbpLiF",
  "key18": "54C4fZKem6CwVKADuMNabQCT6TpGBqiniYAH6ksTnUWv3ThMqD4rgSaqb692ai8u1P2m71HG8TtoSGYXtjxRyGy3",
  "key19": "64pNRfSjFmQXjADdrVG87rDNBNfkyXHcAYWjpE7ZipXsXaQ9xqdNHd5Hz19cmWqJm6VHGNLbBrcnbqapoATFLz7C",
  "key20": "48QB2qTKS4h6Tpa91cc7mzEMAvZ3ghWAtrJ4xrnyooayse1U4ZoK8fmcWwyBvP9rUKViFsWhXU8PwkS6KqzZas2B",
  "key21": "3YNVhggdperabnpqM4M5UcypNE3LfLDifVpQo93seBzrU2EDicJJKdF7tK7EBHVc2Dcg1wLu5q5izNSRqe5HVtoe",
  "key22": "48j2oW5qauFYDbBjsa4xGk8dt1rBr9H9QMAHES9F5tPSVU3MreAPhebJbTUCkGmAkzFSFxXeGQAxXF5rrTbTzdGJ",
  "key23": "5DTpBj4A3LaVoLuuv2SHjNHrmTCMoE4ZMvxS4uSEZJp9cERaBhy7jh7oPpHqYRQ9Q8TXEyFDmE4tSd8SNGaJH2gE",
  "key24": "3VEpYfDzHk3DLh4sMvfmtQPGdgmZxbimht4Hmsq4qs9UAvnyywz61RWbKDc61rQhkRPtCGEYX62qerDk1tAyshrh",
  "key25": "3DoppFjaPTF6LLuUpUJ7Nb98Lt4JkkYnXx8rkWytSHUMDXFJJTYhfjxZUPZPGwvd94Gwm3vnNjxAPscKFUeB8ZCs",
  "key26": "57gNeSZU5kaApzQBtQT4gFXxiBGfRyfJAKi8csMMGKDZo3g5fr7NGFjjm77DKsviPz9Uorn4Z34ypBLuHd9g94vg",
  "key27": "3rjXufudSc9o8U6gigFEj7Gtno7tFAyuzYPLznR7CJtqT5mTqbLNHfNvUFVsoHr5jajGNBE1NKRGVjNwSQuHVq3Y",
  "key28": "ZwrMRFGkG619ujov656tKGrR9pGUV2uffj3XRxXuK6ZJRuJHcEYujmKG1mV4yVtBffp9HWistcRW1cjx4cyVbNJ",
  "key29": "5W8kYWJzYuueaKkuAfA4GipvobmrLDsTNq62zD3FuZGxNPgEmz2dDVDRyf673cPz8eG4kUDQ4kmVYdiFX7LkVRG5",
  "key30": "5bVFNPrSkYqZp1tkbvTT5qedQr1NEA5A4EwApztF2T1HRYo6M96zg278VXHesid5DhcjTjqdnPQY2tDhaK6VFPob",
  "key31": "3ZBfGnUEY4ZoideMkwv2Y6ZgHTqg94QaAGNnaLi2HwQa8hZwzy1NHuLQWL6STkaJHZikgb3VRLt4VLjtxHxdxFxY",
  "key32": "4wNHEiZjHMu77cLPh3RzATZZmatyZU4YtTvxfxGtKFvmGYMsQYgbRjPm2JAhfNb8jzsG5XxzRJAy7yYvzd5NGrWm",
  "key33": "2MgLoeP7LzBc1tfJnQqiHG5A6ZyHTvtXrraidPkesdBKd98EBdQ5DEMBbvDAtpobXGvVkfnV9KJoSTmUEZkQpQG6",
  "key34": "3fA1TkgQmwHYJzWkTH7XM9ctoC6oVYvYgZj962UfQvBiZ1pxZeiQMomsHXMwrD5mzkXDN74DebTuwjnEWdvdQQXk",
  "key35": "5MZZyxAaS6Vv3TfvArF8LgCCGxPjJywYmSczNyi1UirvKkAdqgVB15uk158W7Pft9pPyPVYo2tB8grdmgzos11ww",
  "key36": "prPQSkz242PPtUBK9TCHSxB3nHLwLUELJQuEbr4rDMGLpV8JBafYo31pYdByJwx934cgG2M9KuygiCKEXekAvfi",
  "key37": "3a1GRTBX8QXnfVAnbfa22eiGuWi15NknQw7H6TPE2SS9ZX7iz9SnUKtm4WMMR81d87aF4u5YjLW5PoWKSNgCwgud",
  "key38": "2R8g7pya2ztLNJ23JVW2bdoM16UWzbJqRzfjBkA4havDKT7iujQaLsFSUoYY3bYLTTETFaeWATkhXzCM6SjF8q2k"
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
