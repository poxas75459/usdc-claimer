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
    "5EyGYYYyLL6jSbb3dmC2sMhGZQR9nmTpCYwJVQBUgDsui9jGGkpCo9HP8e2skcoXNNRXNaWdpVZGGniTYvxigZnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iJare4YV197dwcRd3qzFxFuxHfZV6GZzcoocQqqqK6NyEA4nvj4gJcu8xXeH2FsemCUh82GRdjzkQrtG4KhJngo",
  "key1": "4yZSteYCZJ1aXm5CNnaJAMfJrG19v6FTcfgAJVnApM8MmmyA5t9GDmp8KgET8sqeQdpqxTBoXR165GfFQXYfV6Fu",
  "key2": "3LN7L8xDmkauWwn3hUFt1G1J3dQQzbvbNWeFruYcGyoDjNoeU9oCCssACLH3GUEhWrKxQeqnnJ38w9geJZ3TmGG4",
  "key3": "5SZkDLWvty2ufgf6pPn9akm7yFJERLWoBPNdKWzKJFchp1nxu1MCmfhZ7kQyWuACUAXXAZgtkoftesR8ZsNuvttz",
  "key4": "45Y9n8grctwtfQPnt8VsfK3dPMKtUazvSmt5LTrhCNu6L6zS4N7846SSoAhFFA1ZU4YfHg2fQyp92zhQ2eWa4siJ",
  "key5": "4MQi1W4S164DULw2V8V97NyuRdLmWpLyQccDc4RJWVMbyQekFuVRu1QcWUMdK7CidJP6k2CkXeC7JWThE1eYrT4n",
  "key6": "3mXsfrWaQoAbCxu88kaMrz3Qmhr7ZjSBG9d84SMS1Hp2W6ShiUDWigxaCfnJopT4JAaBHsqB9pr8PahoixSm2TQe",
  "key7": "5Jq7MigW8j5dhUgTiRgwJ8kYakvCpsVVVG8A6MUS1Lwfwu7urMq3v4x7ugmHPS4iWnnv61q4Cc4X5nicVm79c4Ag",
  "key8": "4RUhjh4QrGxFjPnH315VvGjcvkbVAe9Ch1LieeAKtHc5u2UX2KtdySf8jrrbEYKQhNrud86U5tBgK8rJgtRcEQyZ",
  "key9": "VkaMNT3Hk5Sy3DpSPvrKmuW8PjRPnv55RsTbQMEfPE37QN9FkWiUcmRuBuVEYBH4vZcwuUeBuadc6wj1uwSvr5q",
  "key10": "L1gZbeFyFNcHCKXYPqspGkfHhNzBt9JAoR7rH1TGHzehNMKTENRPKhbaHS3oawkVLHefYX1bvLXfnHCL1MzvQpx",
  "key11": "3uGWPDnQtQPTdCgt5nKntCeSrRobUY9NBfiU6SHn6Nwn1DbrZ1bmCdZca7t8JXdCEyMDigXYVmzg76mY2D5xj4ce",
  "key12": "4EjBE4op3jFneVT3R6sJ1PiafSgrFWEuihndAKkNU9XhSU6KtuPas7oGXigE1K3gi27qkE1ywkPBSxxR2AqqSkvU",
  "key13": "25rW5AnhTCrmWLd4HpatTXtxrQTEqJLzUfyqvhTkBSZrVCUnM3FpALPutTCkHqYDSG6nrD7DSjdHT1UB93x43JQR",
  "key14": "5mkogUSz7B741GZHfHpiVgPPuh2K5DnkVK5GCemuNneqbmukcEsGF35RFcjqWzgrPoy79n6tVDN5iA5CQAVWLx4R",
  "key15": "5GBq7HsL96Ez2ec8RpwhxSVT5wwHgEr5Bfe4Xv2s3XkZAt3Xg3LDgd58AqXCuqXSbG5mn8cyzfBgsdzEusvysQeb",
  "key16": "T2ESfJ4Y5wAytbHKJ3zrwNa2yGovoWzXamQByGdZXsXe2weySktrP8w7sBdW9oV6AYDs52jpZ7FPnkvo84Zn87V",
  "key17": "UcQWxauNbCSU4FmgovJMpsW29poo7timbCBxJhaiB3sWW4EjLdjdW68CboV8G39hBRbFofYDB8CeXnv4BQ6bbVC",
  "key18": "53NfFG7Y8XtuhFMESFcxfKz8yA3d4F1ogxXk4t4AdetEwRAcjrp9Hi1ErYsLxnoFnhDfzM47ds4st5NCjcVALBPu",
  "key19": "iidKKaVvLv2RDVDSrTGgkRCGdSaqL4hywrGCbLjZDvbqxbNmbce4M5bVyjxrJw8xkfY4u9UVXrvx4fz7QrfWPBV",
  "key20": "3n3qRZkuML6g6Dozw6oraRPHxtsb7EJyxQytKwbdkm7eMSxeyLYtxV8126TF3y8QSQWSG9pPrxdFatRNEzDLz4qc",
  "key21": "agLsn43fvNK3932LcmB51vanToeXaxH6pxPt3EFg6Tig322gmJvDJewdTbbZvF7f1eTYMwqTjhz8JhhaiqmJLrA",
  "key22": "3UCs4VzTSkknxSihaFqiGxtKTQd39M7wtjHiU2QHtjYxexGAoMKnAdYks4fkyVMfmq72JGsNJuXvmLpG9MY6QREk",
  "key23": "2iQB99oNZD2N55yTNzVRgD5bWAdprrtSsRPNjizTC5Qaf2zk9FxjU78XwED956BCcrR2TTSfikYG3bWevwa3WUPQ",
  "key24": "5g7AgHrbfJfWUMuZC1C3BBXPRHsNQBK99ABchEjP3WE6mBopvATAieFbNUQcY7oVSTEFBMQD2hgNZG5J3BdS1rjv",
  "key25": "5qNmawY7XTAWpJc7QrVN9F7dT48bqB3ovdsF6w7asdjXogetNPibUUMWgnvVAaFaAj84SXZHMdUDGMYCZhCLmJWx",
  "key26": "4zPig9ksXDhjFT4UpU18n9Ffwqm8BDCRoiycD7PD43zQjGga2bQqLptGid37oMWJtCwyVJWmQy6Hh5jMBSrkQUo9",
  "key27": "4i3eo2r9HNQwaxRq2gbaqMz7m43VZKPTfTRAJTA1rundxoHjiaRnrBZg1T4hYJy5VnTxpJGuUHpAWaMjyRDTuZPR",
  "key28": "5P7fjmXKj7sadKwX2AokrSQmt6AtFFTfGhDDU4xSr1LPjr6FHg9tiPqP2KwbGqL5HLgDYqGM9LhRnzx9r4AJVTSk",
  "key29": "oX7YHJ5v9rjVSfmJjP55ME5V5vvrp4Bt1aXCvSMXpsk8NZanayePiGDbtaEK8uXEFBk5fxsbAstugT8hGVwyFSx",
  "key30": "2ToqkL4jh6wWLL6KY9FoeQ2ChNgJSep6BCCJQ7prwEakorwREwzeeuaBGXBXFHn8zY9TCVowvR1t6jspPytb5G6D",
  "key31": "328PtoGyodQUYhuh6oF59xKMT7PBfa6bEeDHm9hVf6Bz4kG5cY7ZqKsqNMakci8Vk9thZx7sVqyjXGW1b25mbkxj",
  "key32": "4SAixJMFSkyVZqVLhj4UW7EPCQ9hvv4X3fkpRTjfCBoabobCvWhtTCw7aHKyp1g3j6w1wyX5DN1aeKABeZ1sMwVT",
  "key33": "7HsZPfTStEL4tMthUUQ5D1Zc7jy3QiRUrfwjSoJ8ChA5HDTwH2pGxjHYpNMKvq9tYu8sr6wjw21SUXESXH1Jok9",
  "key34": "2TgAMHkEFF3c8xMayJLJgVjGFGykdW1A1vMQwD9B2u57JvdsE5WYv3aNVFhinqxcmMdSDnJiSLPAxR2Xygjc9a4M",
  "key35": "4ySqvnTBQ3f5frdb8RUnQdLGjZqGoGnTWRE5gV5R4Cd3D7UQGXgMeuyq6oveykh4FFkBFdj1bRRpmHGsGpj1pM6q"
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
