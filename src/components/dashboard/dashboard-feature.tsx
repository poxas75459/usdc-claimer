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
    "5ykHJck75ZJgRUEkZNPPKByXX1XkbzVfx8j7XDHgycumiRGbojD9xkV7EHCWJs4Sj98dAYWmCD4exMF4F1RgTwDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GpQ4R5NHGzPggQGDtGBoMbtvJ2XedHMW2FLNS1vD6zt6DzTtpACYNUS7SW6iisDP13DBhqBqdQm6xomsVPqAKE2",
  "key1": "GPucHoyueYmSAhDuMDBQ2ySpiwrhPizzKaoGnE1PbFXAnsWycGM6XyMC4NSd7QLVUaHY4mUyegz5AhC7JgL56pz",
  "key2": "2fawTCE2XAiZkq5SJkzeQxAE4PRXmUGc9ScnsdohCdQfx8vLjhNFxypjmVvZrPzvQEkv8CjZB6x7XamanDbu45c5",
  "key3": "mypkxjQnYAvUuEM8G3Wi6YKp3Ztr3QrEbHAMWTS4VmBBviovRjQkKbMk3SanyQGb43QXesucE6hUJhMHDqzVuX2",
  "key4": "54bBGpnReHjfh8BS9FF13tA3XphUkMRDDPcJhatrGYWZSHoD3SRkaDrgsc54aM72wAkKsFqHS5VhBNYkKA6FD1Ck",
  "key5": "B3FCMSUGfHGBz86QruJzZNkz7mvbF2LLGjhMwSZHkFrinNYwAuuM9ADiZdtDd4GnSofFQxcEfjemnCpTJjEa456",
  "key6": "z3gUJmzmxSv8S7Z8sBoAJd6MP74U8pa9PD1WXQzQZDHWc8fnkTTqbVwyVyJsuxjcYmyYS3MYZ22FhQBpuMLy7Rv",
  "key7": "54erZxqoFhBQV2gQydf3JUtVZJgk9NsSo1g9MCjorGJtF9ZBZ71LPvDVmFJALC3MtZJHsrkpMWuU5gxzfsmTEZep",
  "key8": "2v7UbeZ8NKSk9VXhEgWaYV4oP22tq93MaaKxYhCVcYTuVBXMRZharh67ibzKq8s7pnYKuU8PuYsx9R6i939shNHQ",
  "key9": "2pqjqHQYHmVrYKB4HH7w5dGqENmxzmsojuMH2e7qT3qg87GBfSELapVFkuWm7s5XuMCqXcXWSUrEMnAjPrcFLiQB",
  "key10": "p3bQyCizgLvQYFMuQ4xcuFiksVNNkiy7tUuLsHfy6QsyHPo9propCoFfFqDZS1ab7df8A23xAPjL9JcBEdE6MVZ",
  "key11": "3UVGNBZfkXh8h5MfoNYyRB6sp4ouRwrXDkpeTSdAmqrUhKzAtYLSXh37C96wqA6WVtKDkGYPQQTSSpxrGWWHwCTn",
  "key12": "5Fe2ca4WLpzwtq7718gmAu6yxrb6kAxGJjnFNXmhr9tE6N687ADm7NYPyKEEmiFZCBBHtnJ21F65B7CzbZWg1Yp7",
  "key13": "2NL9VcCbWyzFx8EZGsFCAjNiH1nB1jFpspD53C5MuctQMmtRetebGQeK1scDhF8C7GBvpy93DeZgrb66FH7AGvLZ",
  "key14": "4rLUWGyKrsjvA823bJre4kyFgBXc2RpnBeNDyupbxAgHKJ87GuJy6wE7G1kEdgZqQKzfMt8Du5vCA22vZv2F3tRX",
  "key15": "5kneg8aP62FXpQMsPuHmV63izFS3URLsXKCpRgChEtJ8Ydz1d5k9ax2ZfiudHTu3YiUNVz8qiEzoZkPzsYScU6dD",
  "key16": "4wpRceK5NQgwrbPTz29jyMgG3EMoCUpB1k6NU3Lq3ZCRWXFvigcPbwtqwmoeuKPJpfQMcnLDGiMfqJRepkJcfMJh",
  "key17": "3Lx2seYQDmgjeDTuqhscbREdBXLNqMm5JLBiWh6grGmcGpiHqKTeHVdd1zAZnXBhffGsk5P2d5ioWYpv8SBKH1ZW",
  "key18": "4EPdRzq2ewZ7bckkkmjDSmkv5ib3e1CB6mEHNspDQzShXuzahSZFHJJe4yth3zDTeiJ8KKwiWnVLL2cmdV3WQZ1S",
  "key19": "5HrnLwdNbziVgEihmo5Eyxwr2e4g4YBRYFzUmFPfRag9FgPLxWzFgnK4r5AWkEoYeAQr1ei2vsM2cu9udDwFjz2k",
  "key20": "5FSS8Hqnij73h7jxMoWmArs8oKBenDDPn31z1QsUfqhinSh8Vs6KrhFy5BTdqG2Zsp8Rgu96XMtzfAidnyzMLABB",
  "key21": "4PpQB4DPQ7QhBH5ch7gXgdFJyLkvvgZaCQ5BMDoF2DZ2LozHuoBzKPv2rS8oaNXQRomLwNQ7XionbQhumrZ7fRJP",
  "key22": "5f5ukfmTBNjPRxzJkMiVSfsPGpd9qdGWRYbnMJj5HgmQrCsrKjcakCcz72dsjm4Tt8SquU3n5qMfqxNbxbiwPFH8",
  "key23": "4dFb46FDp5NNa7XgeM4sqeQowt6e9wda5Qv4bBe7RhQZRMHfdj3drkZwVXfD5PPTGhtNQxbiKns7xTRk4z8QVgG4",
  "key24": "5rzLUMqvVtEaSmsvxmwapgqRfWtMZG6CKvRN8kkFiznXXajiFtNXmNuAQkmSnzQALxTpphmtiVars73z5MhKKbH9",
  "key25": "2etRDY9Rp6aT14AgWSEkBGr8NfLgvCYjDxtEQ1yMQf7bYXxQVr85JASuohQHDq28AkG2UjyhRZLuZK2AvJsHwq8J",
  "key26": "59dLuyVQ3usZRo7chj8JFn1wCUKNyq5FX7yPevnzzny3B5gcQDmgt2acNTjUznoELq5ziygYDJUcp5jmqQs8eVxe",
  "key27": "63NbDdHgXw6jYB2ujbBUrjT6Kaau85YpZP6f8mwoXMUXgkgechsKX3W62id3eZUPv3fVyHEDJktrRqapRiWi7UBQ",
  "key28": "229GzqdJeDSWagXaj5HK4PfK6uYQRVNxmSLdeWv8Jxe8aJxE9P7G1AnStLPnsjTS8dziTizFwXPeRrRcvJkzoys6",
  "key29": "5vfRqwn4xaxj1cruexQmWWRsV9mXBtkekBdCqkJ5VRhRPWnRiGnkHSXjEu9Xgsgdm8yAXHpzCGC5upmcWAtv5Rj6",
  "key30": "28SAwctcfim4r7J5RJWeUdMx7RMcaGPWuXsh2bGkA9Ad8Y9TPTnegyZixAG9Y2uHfaW8qzjVxCoUMZ9NixTpmM8w",
  "key31": "3aKyjHnJwhJvR6x4HrZ2LTcsPp2ZTYBXFro4THcrAH4fjHfZtdfzmo6dF6YmKNPGTVcttGj8pgfUBeEN3A4VSpHR",
  "key32": "5bqha9xQqsDWBaTiH7PSvDckWgneAsKy99Mz1h5M1VUr2GMuSYZxc2qCo3yjY469wHyT37tKJbr5DDwdy2EA1pJn",
  "key33": "NwVaASxuXJpkDmzrvTYc8HgPAt2ZYDShXpiEqChkCcPZCgseXimFNe6hEJQeF7LpFnCKTymQ8VknY89byYt3Uor",
  "key34": "3JBaZ2fmusUKizi3CVzvxphnZqfE67kg5aaHSRQf6x8qNTFxy3oofrAD9YBp89JtiNnHZH6y2x8YyUmQsY1Ntp2f",
  "key35": "wDeNTmJcFTDcMDqDaSWpEYcnBhCAY52tgYSDXbTQscV4Koe7yn5DFmG8L1Hcm9KqYrmGnhHJ7aBCcNR4gCL7UCG",
  "key36": "VyF3sKyEv7JiDT7dAw6nYMHe9occSGwWabgp94txtLaZn4LnW9cZK8QxPkyjRVwgmKp5FJPELuuQ7VjrXVz94HU"
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
