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
    "4dV2EzZwF6TsyW2m1fD8GtqGhCuUyVHMv9XiTqBjLu6CNizbXC4r71tNecpHVdFUcNZYnPU2FJpvpn8LgbP1smTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZretEnSGJrEbnBdxorGhEAfXmC23DLajojKWu9qXF2L8y7DAMkfPtQBR8tmmw8mmbC7MwGQeyWf9YiXKkPJ358L",
  "key1": "2zbpfhmZiCjxn7wVdBcNP3c8VhNaBKEF53BpHwLgGUcVhEovTUQpUu8EBoLpT9a3aLdL4CC3uEzU9iXB4EQnQBke",
  "key2": "4dzhT6daqTAd1r8WUQVrq2pjgS3xwsG1P3qHKCCdzTiscbm2DNia4QspwQtetVi9Ho1mmy32rE4wtq5DUtmGAcE6",
  "key3": "4fJ8BRUXRBGhvPBPpioykjEFmm5NLp1d2ENfcZ3ZwEaMR8cKTMoeL6KvBFhhmfW6iQWwNwVKQopZXrpxB22LyFXy",
  "key4": "5BFoqjBw7v26byi6CEFLuY7CzADGmQn9YJBxhzWzQ3CSMmgGx6RVc7fP9jXgoRToQVPeV7go24zEe3ABZjifq6yW",
  "key5": "AWYTdoKSaNdrfBRpBaAHPdQs8uHr6JZ9MEJZmmLk1gSDxoNNeKNcDJhHBmrpUmFFw2pKQk78Nn3qvmaTBYhiDSg",
  "key6": "3rWG2yPiTjjbdrkxaHS2kXJP4xMne4J16Y2dgAkR5ZnTsdgEqvok5Z9ALC4Dj88Laa6d4GTtyAju5Lp6dGW4TVer",
  "key7": "4Q3kVii1N6BmpWwZqqk614vYjAAHvV8c6BziJMiHtuGaP7tQhdNJT7wn4FmpXDNv22p9wcXroRStHtamnhZ9c6qT",
  "key8": "57itDHuv4yfNjBMSKLZN5s1Wb2sSguFcUibxbGmMQDLj63WMXtHHmsnKsBTD9wZPkCLJDCS6c7YBJ2ygypbip3kF",
  "key9": "qFxch8W1jHxxsYKXLFJripLyCC5P7NkgUJuC6TQoC3R4hbZ1Z9QNDeJvgCUwZinknhTrmX2VfM4dSwcKrsPXDUB",
  "key10": "4iJ89Bfb5BhksSLkS56vmq4mepfT9LL6c1e6EDtbfgPo6bwCARzMPMwwC1WYizyLdAk9eudLVrNVcw8HSK77wbmP",
  "key11": "j46YV5enhEsvRHAb5gT6sSqd9ey98zhX5rVEJvwWgu5wBsTqKnj2GTYQX5ogqhRBMxDJYWJoxBe3dmAgrwEudr1",
  "key12": "2pCkZehCZ2U3t7SRNTaS1LCtFsxKrQYKJdofFScjzRFAom8Kqa8Pq8HzQSNX64uA3FBCQK3i3m7UvTpqdtQBbboV",
  "key13": "49uhQHwb6pyRxwM8C9z8vmgvLTEAvBX3LnpKb4Hs8CEssQJFGEnc6s66kQgsgJ5ocPVGnQLGeJLDf7nsbR4ka7tT",
  "key14": "5XH64uz1MDkyka9Qu5Y8gF6m8ETZpDoFbM8G1YYcbRT88jDhpAaLdFLpyW8W2iDp6a4i6HudHPFstQTc4Mn4BXSU",
  "key15": "3CUhgXg12MuVyRnNu6Sr6dK5dz8bCdJex4vJaxMRGvR47RgDPAAitANsjgf6TJsQa7dEwt2uJnzZoPYMt3EkzDqu",
  "key16": "zPU1jekcsMCfbw1spA3fCVgumCfJNmT4eBfanLf4QrXFj4UrYzYf4bDbZvPLjEvJ9zRJ2GZ6fF96vUA1WygdBvU",
  "key17": "3nsPnLMPggUZpLS1wSNxBPceoNiEZaty54qXXUFn13B5Ziw2nJK5tUTKc8exQqfwPchNj57Sw55y2pzYfBScBCEL",
  "key18": "3cqEK8Gfo8yvMPajXPccCwCS7Uwc8aucgftkJtiVGUyjANJVxsA51mGbC8LoMCFAfaU527gaq2s9wDSixnPLdfTE",
  "key19": "4QNdKx245WXEGWwCc18Sazp6aSoqqdEEC9xsAhZKGztXqBmAvPr7BRdKkvvabm7vT1GVdfMKhWJycFHeUNMWAn6c",
  "key20": "2W7FGa5jbJwjPUyiHrCTgaVBkXBjZL5uZ2oNTJazzmbupyVNZXo5m7o9FnvnKJ1bY7UK4h914B3q52bXzs3AmVMU",
  "key21": "QabJDsrVsq8ZBcLVtHRayxhSt9qetVx2cm36ge8paCxgGQjQx4Tx7xjogVEPxL7xxfnqnVQyNvRG7sQNgEBdjn7",
  "key22": "4CrQkyvHw9FarzgshgY9PENaguiKgWBgZcQ8YJQBkpD1DFz2B2GiegdFtXjqL5eSBCVMU2vqoALttF95pd4EJyVj",
  "key23": "43dYw6g15Ey4p5bhDoh79wyq1YvRjvKbeUjDaJgzk7khcW8YBRPos3bJq3oNQiqSQV48tW9U1YhoWJF6McccWLjb",
  "key24": "2guwLnqpKLGuXYkp7WNMy6cVL3buE8RmYo5ZrvLxewnTpfabst7yx6H7Mmcp789UiAdVtDhftmMLi4zxS4gGKHhC",
  "key25": "59mASfZPmn4dhQ9gQWivQMjPuimTWjj8uay5y7XCQY5zH3zyc1Fozg7tzcrwZC4L9zuagNvwkRVJ7skJ3qDGinHg",
  "key26": "2u1edcxnWWfxMmBWS9Dt8mpMvWMJyLAiKXMYEzbQzdiX3Ysyr5vL9jk8vNjgtjcb62Len6PVcwMRtCxyACq1WoeT",
  "key27": "5ZrQ9poxgtNrRbEAX6Fw2Tn4PiqXrMSaTHvJZtLFFTieEDcr8NRdEdeUBu119ik8QGW6TLu22GzNJL4thvReJKMe",
  "key28": "5SsVxC5CwBudRSfEWj3a8u4f1eNP7qMaMbkXgBg3PhdeqQRHjBjyBCDC2cndYsH9MPLgrbxbqdSaMpy4UAuCgUbM",
  "key29": "49Edv62eMBxoU4osMDEsQBaM6brSeBMWZ7fzvsinxzqeTsvn4hkFA54sJLvQfyPEoXX4BdsVqQ1i219hwuvts3Y4",
  "key30": "2Tehoy1PNRHCmnQ36qf9c1tz7hmaupModjKZE5g2iuY4Ecc4wX2m9fGDR6AykmnAySQxwc2jF5FJyfamKic5DvvD",
  "key31": "4BfyYhEYixrTkTirfYFDey1EWomxruKqpeoxQwCRD6WRhkRywmy8ATDFrWvsnjQNGNvao3hK3Xwkv1gxsedVpfju",
  "key32": "23BCU9EPM3TamWfmWMos6VZPna12h2aETeJ6TRCnEpCWnZdbY8qkGZQw7qKw7yvEgGHMF2btSZjEZiK7Suf4mRtb",
  "key33": "31epHKFfHFopfL3oz7US1rJT6xP7NBRBRiXWfs8Mycc87JMnMNcdUExc7mjDrmzi3nnCCbYH8dv23HdL4m5NuMic",
  "key34": "hVWDMqUN2d3n1Xt2ptALjcS4vzTdMfLX4uvARd1F3exvvX2fXhWQL6dZHtJo39EGH9PGVbVQsNELbRAwp4r9n5E"
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
