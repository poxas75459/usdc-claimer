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
    "3HXUC5YgFTnSCMjnPYWuv6EbNXKvHry9DGtnz3Cb7fkV53ekpickwf7FZ9Ndw5ep5E3Zkqs4NgHoSRycK8tWgXBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DSUfnaZo6P2syNaaYnmXyJmEu2tVwSU4P6XmGiKxGkma9bNSkwxAC7PSRbDsZzryBzbff4wFWAmMbBjTfM7hdb6",
  "key1": "4jh3KctKUJzePrLanz4qHbXs3GBYYTYTcM4xvR6WwEeC6hShnqdHMvmTnEHTxk7ZParPTZhz9uYrVVTjAiXJyygA",
  "key2": "5WpMs73rnqqop2hqk5YziXsiQVVtSmTPth4BfoNYFpuu7fSBNPRnS9waeTVNBE1DyrBgSFhhsGqqh1rudUycZ2WN",
  "key3": "qnoPmTSnPuDef4NpNxsJHQ98JJ4o57xAjWx5bYvKUr2aRkeAs4gYxYgn82S5VNtyjcP1FdbXg4e513FRy1N8NuB",
  "key4": "47bscDe34ApDTmRWpeEsCkhSf5JKtUX2XU3VhuS228uDfVofpGsdzDL89JJJBXtczdBUxU1hjFr3p5LjgJiakwVd",
  "key5": "255MrqLvHLnxjBe6xz4qwHC7SqxFBFsPjSMuAeZ9i8MQyeny1pso2uSxCQDvdcmnaMTNYt6ZxZAfpxbhVdcN9AaG",
  "key6": "37P4p8AffE8QN8Ta4WmswxFH26SKRHiYB1w7xPWnuQ4wpVMPTzqPusSpvCjpC714VoS6DnJjzAWpWECkBgqxqurH",
  "key7": "2eGyZrmoG7mZLwdvqxH7jcC6c6QsDvHfwsLeNXNhDiJEYu9sb37uyn7SsUV7zZjvTgyUReUJqemQyqvXBdHVb3FW",
  "key8": "eTwSk3GeYE4gjjVfYEYBa4NrVmCtFiaHVakKvKtWbPaxwkngSNgGdWKicKVEG1H2cvXGqsdY7SWhTXnNATmv4dD",
  "key9": "54NwXFNGRLRryLLbobxFSrVKNrRUDmcH6FoYToXy4vKkQzcdoAVRdfoxSsacKNbeuHj5yTAtnjqw4RDyzvz22tHq",
  "key10": "42ZVtcoLjNngbsvyK61JDNehJGGcKyxrGr35DAhwmEg1aUC6Bv7KudifA92sFCmdKszbRiCHLpod91FqLUdJoGxw",
  "key11": "5nLvezoM34QW2WC6AzqBTFTA6833Pa9BwjR538YzPuPW5jptm4RMfqncurYPPmtoj8Cq249VwVyHt5SiEg5CyNFx",
  "key12": "26JYxpF8DAbLj1GPxQ1vZ7PQCMDFHuCowN8Qb962iqCTSPn4U5dRfZiWC79bgC1mJKxxYGUNxWjqmB3Xx97jxLT7",
  "key13": "9VEtERvJCMfLCNLFXDegenCjMBSDvXUaExCh5a97n7CUiEfV4TSBQX9QQbagXEhhcMYTK9TLsds9u9khXxffWZM",
  "key14": "3qJnzz6XtyTa8e2TM6Uc9jqiwB2kc1XXroip7fSaR7bHH5FtRwgsrFKTfrUqZzK3Ks3AcUyFHkgWBjDtha7Z8Zjk",
  "key15": "3GPbXAqFGDyrn3154QsSCCDbDEGzTWwKTtTgYxraXZ1UhuhJi4NDN3DD9VyAo7SbRNN1qeoKZ3SrTkVzLdDTnJWs",
  "key16": "2GiFzdjDM1rL8m7xttQifYdi3B1uL1QrZGzHp5KGGg8RvZDVgSQfm44QC5SK15oF3HGC4WJj1Ef4MYfkstnJtp5Z",
  "key17": "2iAP9frDXXiwdyuYi8ieNy85GN1bk4tWfnx2hvkQ42u7vczix9MTaJ9xmJFPxpYR14Q81hd2YbNtGmR4gt96yqq3",
  "key18": "3KvpKuafMgPrkCFntpqs7B4KHNykBwSoNvKEujqrPe2grhF3yvs5JXAXAVpJUy8p3PkVUNkaNFm82Qr1MzDi1ake",
  "key19": "3hBCJhXHoWupGCuQGGPQpp1oWK35FmzTrK1Lw8ehCsQcqZDPWtbo1i78WpLwt4uThoCVkR178DgyyEyu6aJFiFJL",
  "key20": "Jyr9wyF6PuwQZZ5MGrE5rJcQBmZrTJ6cn7g5dTfoNJgAet5DZTvWXyN6MhsNMGe84cJ5ohVsxaE4Fz8jwChL3NF",
  "key21": "2fnHYiwvyYjx4BU1D7uA58DDiHA2mCmJ1Ho6vVah2dkW8tMSzQTmBJaTU1M5uiSmdLvvZuY5KNvtHkjHqvX2RyYQ",
  "key22": "4nFyGZQWmuvAgUcCiczDbR3t6gmD8Gn3SX2TAZUJnCQWnVpZmHHgtzb8Dae19wxTEj3Ak7M5c1kZDMK2R9bwQqHr",
  "key23": "6V5qKMg1f9tPdR9sp9XNRqvXJxuquQa61md4o3Yfkdgixm6XwxGyj2EQFdJy3X1tSQsgfdtvXDNtCNAKAya3FgH",
  "key24": "33wnxMvrT1MjCGMM2w9RmPke8evbSTAwijuZjj4ZBPm2HMaoUfNmTNErofNkzKbApjo9NQfPijMnTcbQecb7xQfy",
  "key25": "3ZF1ifVYYPCtVq17CSqm6u5xWg71rMpv81ddZnW6Ui76Wzoap5JorPJDtVnMP9hZG4tCoNVUQTTq69tSx4PFu7Q4",
  "key26": "5PCokanHQ3Dbps7Hd5e2y9fayPucEjLizSoiaV5z8KdPMF8gXPBC3kFb35T4KR3xWDDBw1TYFPL3NHZ1MP5gHevX",
  "key27": "PwZitVf8K7WjozX69aY8ikzu9yZ1oc6uzMHGMHk3DmLyAHoRMEN9xoTUu8J1MR4ZfDRURerWtgWAXTm94jNht6D",
  "key28": "4kkUPnsJDjHwG5uCU5TuDx9UcPkb7BSxVTWkNcWXh3uWJVoLHmYNjzdwkSeC9gAf8Ds9C3jwth1kULZVKN5ShRbK",
  "key29": "3G4D3DAaeQXPKo9kPY4xi2wbfTj4RKwWwZ43Fr4CQaMFpXtwozqkCoUHR7xDTT7Xy5U459kaNpjHgjKzeYzSMAHh",
  "key30": "2UWggKdjJRt69JMnq2zJuzxFQdGMT2DDG3CNoyJqofmYhcqYTzWXj2ppvesaqAQsBxZmfRCUjgjKB5sPu2atb8Nh",
  "key31": "66q3wPYutEhVNDYUHUU3hEibnD27w4bsKjztP6sdytBP8Kb1m7mP76GaJCtSNbNqvB4qhRRcEoXp7gqhwiK2kBma",
  "key32": "smEgMW5zdGSp9DGsngttF8DHsEYQvd1drNwAbii5SsmUP6Ar8p5LhMmLdNHiRQ2VDif8h9xJW22KApzPwx86YQh",
  "key33": "2kPQrMEJN49pvwQjZ88fcjK7EEGuc2XgY5wcZNp3QqrqhtsJcKBkihJBPDejffQGmadNQWaNCh6E1Sc7ELeVUYzj",
  "key34": "3688WJxbLBFiE2UzuYABeHo4j25C4UkYfQi7L2mjHwRrRcbCJvj19i3yqMMQerA1fAPNfAFgywdLWxU3BBNWenVS",
  "key35": "3rEtZsmBAwYAhi7bTSm6hmNNqUie6N1XiFeKtP8s2CjevYrkrMx89CrJkCpi61uqzLsp4aqej43HxtkkxeAVA66m",
  "key36": "4LoyyLmL7D5Y2AY6dCRNbDxdTgQsE5okHcY9eFtcx6y2nbPUdby8LcPYFoB5NUhX4G9Hnj6AGYK9tmeXLhvFmD3G",
  "key37": "3n46AgsQMMMA5kJrQ3DLrZ9vm6nBUNMTj6TPeB6qif8Wpg9HZ5f6W5xWSG6M39Wrg8U8EjCi1qJt8iKtMisALwox",
  "key38": "2pAFi8txB2wvAtuaqXPK8c8KZPjQ6ChhmGHkKLEZEUVPBVH37MhB7dhA6Y8faWifwzAtS7SvoHWtsnEMf7ugfHms",
  "key39": "KdDjsq16tZ1wMvnAKx5JrVMjcLQgmgRFW28mmgnnfXXkbY2y8kA9hiJiFUvaAKvXy86tWC4qbHQqZD5S2qU2Ky6",
  "key40": "2jge5scAwqYmVsSZDquwKQ3gqDBjtLmRNC4ReGTkpEebf8Tdhh8E1geGpQa9AXNkoGrPNSi1pnAoUsUQ3CKzUBco",
  "key41": "YyMbjPj2utKZfdyHPEnjbKtw78QdUWzH5d2Zr9tZF6xdCwgT9o2CjL1Vq8D6VB1eKgaUFBpyFTfrmscC2P76htT"
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
