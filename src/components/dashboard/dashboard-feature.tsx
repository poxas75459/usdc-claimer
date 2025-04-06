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
    "4y7dpP74zhNGn7noM6h6FYvsFZaoYHddGQwD2qcx3bpyzb6ZsGG7b8fySp3fszCLV2uDDBsc6YTKAM8ahiEYzLzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TR4QxkspH9z9A1B1M9EXEFjt3e98fKrqysKkzRhckdNmNAK1MsmnVegLd8dTmVvi5jQNgH3SYR5mwEUkPzUpTww",
  "key1": "2Fv8DC9Ge2drq9vPhKAujcuDpWVS3pXN2rXomeiWxa4g7DFhiep1jjLf5A5R3GLYDmZg6ZrY5YboQrnM1XJTQ7J5",
  "key2": "ndATg2crjc7tKc5aqoy7VZEsJRLxM1QDXVRk5PkuuP6aNAgkykft7JdbjC67dYwoE86L5Hn1UdcKY8yqgNjQykZ",
  "key3": "2b8Df7SPwrMP8cjLnzvmqftCaiDggMjCdR9makZrNd2rpAgDhY2Fw4psBkT79rfSKasAPUxjw2SJ5yQieAYw1j4K",
  "key4": "2ReiLqeJk1QWouLzLkyCELaXtwmj1jYc1jPDnGuwvFSNRfkxEKZNHjcrygh99853hWqP1prSqzm5Hxuz7QrtpVTo",
  "key5": "4agQwTcWK7kYSwR37atrHB5Bq5zF6P25HHy1FQBg6cV779u2xPh55rzPHcbrPvogHfadGeRv1XYwGi79BVKRhdDM",
  "key6": "aFRUcdbCTnRxJJiFTFDSyhJKa1atYKHvt1HjBjcH3LAnoMtG7VmuabJQocL8VDr65WKpfTNf5gA3etbFRqrtZ8G",
  "key7": "nqcpMmxMqszmY2wf12p5gk8qPUY58je97GcvwRThRTizEBWvAyqaYacs8phhi1vF5z1UXdKKgzLoAmJ54qh7RGE",
  "key8": "5u7BY5cGEK8HREfy92bXgiB5BvN6bcHuBHyDoeE29rYNmZFb46pZdNEiUfGYsTGxYvHsWdrexbwzqpVFfGk7tAAc",
  "key9": "4bJaURmnirFhzUFqSkJPw56mg929GaZgNGBY3grbS7ewpYnhXdAKA6wqFMi68NdonF8SYidL18aXi3rpGgwxsmkY",
  "key10": "53EowLLiAZv8shqekqFW1sjwMijVvdT5ZPkYXvVsFCMjGAeZCB4Ech4KLzHeK3bs3VAVVhr8eM2xtvQkyuQt1auA",
  "key11": "5kGvkMkUqszwUUD5JAigXHJp3dPmvX1wJ1RPefJuHX7rSbsLHhE2fwuv7EZftwbznLSSZSXTRebXGfnF3XsWKsUw",
  "key12": "4BKjSJ2YDx9ewhVBmXeYmQmDYo6PyHGjpLvG468Zr83rQgYSkY2qjb11JUkmboYwFtptaX9Xtk7uA8LoNNhwDWjo",
  "key13": "8xnq3eujcum3tYn9KNaZqDog8kTqtSx46zo9Mxyf8dp5Z4MzfCKHhHaoY3wuNwZWsrnm52kQyVoWns69XACjU9b",
  "key14": "3fwKd4D1HegtLcqAweei79aTGx4EikmXrBFJVu69fFtHHwMemRWc5drK7t6LDU1Px45xXxbTC7N8R2GrirjcNSGe",
  "key15": "5xb3XQvNe6fSMUSZFmbReoQmqjiC1odA2V5pLmoBSzZUxjqpXvXcErX8hqB4jTwQNoKUNX96FYhL2QxS89LqaH6h",
  "key16": "237sbmc3696tTBuFFp3dUEZf8uAX33kZtG7G3y9D9VPGZ79CNgAofBGcQ156kfAjywB9Suu7NQ5cWbs1T9THf4qd",
  "key17": "5iyK2E8ue5GHNuBcp8tZhPoujJkhGHGRCB4NR2DoCg1U2s27W9ZN4RuRTJopbkzSucHQ2kSNxHDitjxM6P2vc5Hx",
  "key18": "5VJbB5HdE6aaYLeG4VN2dCDx3w9CLGfWpYzGc5fTojvjaGWp88jYkNtPdTU9xsgk6jer9cj2ZPgCVtCruUBRYMkV",
  "key19": "5VbFrTKkE9vtXRdR2TdVrwfvJXJWHxW8nEk7fjtg83EfURSKLsEGUAv18xZu4x6Tuckzqxo71DbvBjnA5yxHqxkJ",
  "key20": "3BEZ5qswVCZRZpv5sQ1dJN6UHFH6V3o7BjnEZoLo2Yny2pVGc8dtouf1xBW9pjQGzh9MjegnrRWafzbbjgC8hqsr",
  "key21": "3kHsGG4ZXVMGPhvtTkZmCkpxzUn7HyJmrpG5QRG6PEtq3frWCPwfJE9GGWgzPBuBfGjGSj6KHr8U6myHH4VinTch",
  "key22": "2GENTkzcXTGMdv2XRxBVoGvQPrvP8xmmh8REJAufQxbVfSxVXyzu7oeUTUxGvPdGaicb8jqXxVMnRy88V2nzNT1t",
  "key23": "3rEihKLtqgmkL4frVqpHrBBj3RW2nifQNHnW1Vqx7ykVgPahqysJq3kkJY2v4jJHo1oUN9RZZGSQqkrFJLHYCvRB",
  "key24": "4eSkDGTYhh1zY7eUoi3SdJ6jf87rGkMEgJY5erj6vwkANoC6DgzuBvA2yxBKyrVX7c73T1vi1LiPwewARfkNSsdM",
  "key25": "1ZAN4PZxUwHLfqapCbxcXC8tmY7jx2mfX3sogvM2Qzt9AfoUCotxosSag3bHagUs1qrqyL45zdgJHQmPnF5aF7q",
  "key26": "63635eSqa3Grky3wmKZEBNhiGhCB4qDkEMNEtVLw4dFTQWG6eCS98RSWyH1TZ17jJfJ8DGEeCLwkzXrErnEx3459",
  "key27": "4sCXVpJ54nUEpcKVNcCkGUEgu3WxYUR35Lec4jU7LBN1euMswxGomZXmdeRLPvVK2g9MQY5ASHemK1eL3moiXy5K",
  "key28": "Na5Laqxt5E148z5FS73nNuBjjtGhHpbRmXNS4XtGvP8bDEF5nrTJr18oaTyRiTNToNWtt5b5ssV751J8dRiozpz",
  "key29": "2vR89T91VCoo6WepUXAFvXYgwUST4mdyn2C5Tc76JGsH655k6ceysHom1etxV2GFpv2Fqoyn3YyH5srgjsUnQ2cJ",
  "key30": "5cpuZ6hc3viQV8SVPoY4jMKgiCnh3cshRp1S5VkYMdcViLFps9qqUb4Hq81yYP2ydjdm7GpRHxkFhGa879ZvVk5K",
  "key31": "4HTPmvhGxFmsDtAfuZC4oz2rLVS2WU5zEDmHU1AfnwjE8Xq7Hu5xgT8kHfCTMTdW3fETLJFPcrNb1PnhYxpN5PJK"
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
