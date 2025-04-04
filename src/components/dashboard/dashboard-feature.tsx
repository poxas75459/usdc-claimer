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
    "2xMAkt4XNKL7sMeBHs1xZnUzuWuDM2mqenDpQiVSdEr5fQWbhwiwVQ2GzM7UveLjpy2WdfrVcvSyBw7B9zEEd4Vj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48DYYoc1e83BEe2iLMAevd9UGsB51CCLBZrUWehNWEsPwtrmgAsXFnj5zcY59WEhWRqG7TKYJ4yUECakerzN69iN",
  "key1": "5xv8nYuD4D8BYrSp1kzG2Ty6mtthd1pUjkLZgLabH4tbgFHwr3qJxCHWD3FKfLMtNiUYCWUgZ2omRJdekzsPDbPW",
  "key2": "3S5A2PMpSLcp62hDRCg11K9cE4PRG1w5bA9iFNRhAX1nDtCTxS7mJ3bdZa3b5egFEZS2yYE8DJNWrmCi6HasC6em",
  "key3": "xoKvcYMfr1RVzePgVwbmxXHbuSx91SzhEDnA3zteXdDMUUJLuEkBp4QPHuZTVM2X9AaAFFgtzctyb9JB7Qe2bmE",
  "key4": "iXbrSvvG9SC3sHDfWT1gQfyx1QSyeWgXMUAktGSGuGnEco9H6UxiQt2T6tDZRhVCCYPTsKvbUGAmBuhRZJweANz",
  "key5": "22zAuXHWswzAypTDke8aEKGGYZuZQE9vUfdeknicM814o76me8gtwmmZHBAv2MwzAzvANacAkSsn4Ypm3143fQAX",
  "key6": "2ea3KMjPREHu9LAHdeTPhqRZ26FFRUezKAJgiPMGw66iHathQFBFEahhni3XBbKCPr7PELaTufVSE1hCbssXgPgo",
  "key7": "apKZuSvyP2McmA35AFvrfwzDHmWhdaFPKDg9vXYHfWCHjizeWkukhgRMism6rJ6VWYXPaLeUEmCJNukE4hfsfjr",
  "key8": "3rJsnyhG2aF4vHAoqAvW2ikbpjzDDTNjqLoPXJun7xuYQEryqvo1s1CRKXUUm2TMiLYEiGw7GsdPHsRS7DjobhS4",
  "key9": "5Qp6uGT5zuvoyix3eJjxkicEs91nyeMR9gFoWfwVwLZo2SjLuGetAWEAnU7JSUVjDB6YQ9bTZfL6NM6kWDc2Nnza",
  "key10": "2axd5or5U3GP4BFUCUiZnEz6T57Lspocnap2rkcjobHFnfs1iXqMXiy1ejyncnfQfvRYb4TCSEthyKyAhMCJ1E7U",
  "key11": "4at2MLtRGExLMHjHXjM6rudfscvEPWYLG5KNcV5hHSBWib29nJSwJqh2zAuEw2Kg5yQKuGQ1tZ7Vn3PV11TALnLq",
  "key12": "5HwChTUSo4ebJhCvcpQaUGHikst6ueyjK7NPdPMreCN7S49jZkSgvNbGUcqrDBcNKR2J1kRwx8UDAdvsvPomAUo4",
  "key13": "4bL4EH468Z43VJYdysGkobWok86iUJXfP9vc6yCHcnifzwbkHSrzcNwyYGNWGSk9QDP1qddK4eb7of3M7LjNZHoo",
  "key14": "5RZNZwMYaJWfF8w4vfgMXEe5aqgEfZ8nUpYkSTe7bVeedGFVJxwYSTKcba2nzSRVoKHFSMnGwVFUyaw2SPm86HGE",
  "key15": "476VRSRH39UB6crehSrm7fNT27vcC39PmhUEVidNQh5weojF7rPcfh2xT1Evbs2ZssEgHYi1SCjsc64CwZo5TcoM",
  "key16": "4Q5wf8Btf2zNtc8ZzuUwhxbnXLcjHjaFR9J7Ukx1epSrT6VPZ5abKQLuRgN2pF4TCTGgYEAHAbPk4Yrq3NmgGU8h",
  "key17": "4P6wzAG39UD1bQrGHa7KN5Y4iekWoJ2kaYGVBzbWPoKAWSZcJuoXVQ6opGtYMbkcMHHfmDSDAcUTubQiz978aigy",
  "key18": "53zWez175pivKjz9X4VmMQSPGqYPnrA3LFu8fiYM5mNGkZ4xhJUfEHrH5bm4oebvXJLLdduWyVWH153CZiopBJC1",
  "key19": "5dk2mwrZeZ7dqqufMkLHw9WuzWs942eTz58ZJkoxLftJumLUYzh6kWED4XC3dJTMaRKG3XGTAMn2sTEvvm7jg8io",
  "key20": "5aaakpvMi68KTNRCCCBfdeKWHUEFbNW1L8StGfva1Bb2vhmLrhYDhVT2zMVy8t7s44MTQjye4mTs6sxCLXRqxaUd",
  "key21": "2fwaZgbjheF7EQK7nbps2pzeb4v5rGsuwsqpZ8pdUnKPponwZ3gBvduriCCJQNPLXL9JiZ6x1e2wyeW8SN7hyBz5",
  "key22": "4kBZPG9psFn13AxQsFbKSfPfB6CRpdZhJpCME7tnBH2y1d7AUdAGbw3j4YDUB7zoXeMQAUT8xxwakptzERwNP2eR",
  "key23": "3eGucLnhBu2EnjDNxwVKsRNnpjKHQ8VYQTQUW5G2C9ebm5gktyK3DSoKv8DTZaXyppjCWvnKdhrBsPkm51HUatus",
  "key24": "5J58KWGnto9a2jCfkCbuVdqV5HqZAoWNkgEzMF9CrYXrd2wRshhapbLHF5wSgThQUXSzjC4ouUepLitL27ozAnic",
  "key25": "2oLANArmTcegWQjhocDtfeJ9PAhd2ZBEcqcLhhsVCzuSZ9jTA79NpjGHZHskCcdfQ92Rm8Y5x19VegChFmsX5beS",
  "key26": "42ZT7jwRB9crLLCdrBpRzAneU7N2VmQ9YKzqRmcvPi9r1FMKT7jQdQEjwUwDY4i5JDgTeCpXtUi7NAmcJcu1dar8",
  "key27": "3DmwLGgYnj98FCKYsLVhBxsE1HUcaJVxLX9gncnkG1kJvZME1XE8uYn3JcW49WGbu5Wo7HZ73PYfCvk9nMs6XLYF",
  "key28": "4HrxCBcG2WVm7buXf6RoyVfhW8fWabRFUD4o5fDS364kY638c4YXPzYxi5dBaefrpQCXAN5BUNKEPc1GfSHD7tjS",
  "key29": "2kUrwrbynqwp5tp2cuskqZhDR1QcjUdWAPCgVUP5YNvWTEqvMez4rvS7MqM216pdG7Hsjo8979rwxV7r7184Y9Tp",
  "key30": "3qiDpxqEsubBHbCSMHryQeGuaq2ruNgJZWjsjzQuhuEfXMLMuSiRd2pZP1x7RtVgw7gJSrzFwrJR1578LAtUaDiC",
  "key31": "25eXCh2GBaf658S7GT4ZtXZU8xLD57Ddsa4bLWsvREEkxK3t8n2mHFgBeTWpRANmjxbhnfuqMYqrxJeKfgnjfiwA",
  "key32": "d6k6Dg5NXq1CmvhfGHd6NiRkhXzFFYTqnNcPajwGVf4Dxxv4W3DbkbFzyDaUdfVLS68fpAxbY1T3ZCQVhdadyKK",
  "key33": "3A4KoXo78biYYkYxeqhsaUQ5giPcFUjvkPMjK4hzN92KKR1cRgbssBmFxU6CrZA5MhWRsYFEnCbZmcCCok8Gxe5i",
  "key34": "2vt7Q8YFd7icvT2NLm5h7aC3b8qTCdcTUyiac7hjA1z5GjtMm8dyQkvfZP9gGyd4m827KiaQnAGj25uHr2gEyqAh",
  "key35": "5haSG63sGYrpJxHNJ6UeGXBr8Ur7CLttrGk86iVS5Kb2dNVgPotPnU8cUyAXCX6MsUEW82iTKSzVqdKNwgRrFiHg",
  "key36": "2UWnMNbcGhV6t6tWRsPdVkWEGrPoyx5veD16kKgwKRkYYyiyvZCCuCyhyW87MBPqvxuut1mvZZRuyDY1YdUz6h96"
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
