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
    "5ruvp1y2gwk4smW8KW35dz71eUUDfGGzECmCqoskeSrPPwoCty6J4pETwQhWmemqZ8zejjjyQEk1v4YGYGV37DBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7mNfW4R7Z59SNmTy2ihSDF35qTfa7AEZX8tV9TZnRBjjJB2zGsWxapw5dLFRWrEWoNZueaot5Ztm8o92cTgCHPM",
  "key1": "4WFguvJFpksbLt8LTMo5F4KnYnTuBNck4MraSYKqgSz3yxdZW662J2GPsVwxpi9CEsc4SXi1Wi1maDYF1JB6GrBo",
  "key2": "2xHj1w6joJSLcksPQwt5375TDVGbhHc2o7okKzmV3o1stJDst4QSNnWx1tGCro26pFVkUS1rLwPZHUf7AwSgPNQA",
  "key3": "2xidybgfjR1hPBcHdTBsc2WoMyhddyWZGMZkLHz3TELTj2Y2hBoMxHfYveXacdWVN1SpbvKbom2dKw5NBvrMKZAj",
  "key4": "3VjffNeJEfmsBjgMHd4aavAirCw1wSaNur6o5KthoJXLvahAnMr4oq2htQtQ7UA12PSAnZeEZ4iWvCWBBtUKT2Kq",
  "key5": "5prchtPxJvJj5ZnXHNRWyPrY4MTfnWxtHXCJ3Pi1ZkY8Xe2jgtLth8iarG2HwU5QG1gV8mkF4UfnzbApq93PN546",
  "key6": "5kkyM2ye5gvWdbdM5dvoRXkFAXb7cyjDAA5jEm2npurmhbNPnqhErdj3WwVFVoKzd8jrVScPqg1ZSSypGD3EYuVL",
  "key7": "2QNf1icSzSJnVkGVhEAuwsVy2SD4t1wH7DqckKaYze9DMAQU4uJSU9DxtD2VqVs7gyzCs5DiPNjVyyBdvDrzN563",
  "key8": "363X6bKdgbq8oDpjFhd4Zk97Jqy43jPLQWcLiB2BSeuS6SL1FczbTdSpnV63gYfiHRbLZGpPyjH9sH47ykLFNnRF",
  "key9": "4PVMYChy6xoKhHvEvdDZa2dWSSFGANhdT74h3a424Pr4zu4d3ZDRJYHDagE7ww2W4azXJybA9dWSmUnQ18Y9HjKg",
  "key10": "dx6N3dBRKPALxyRCP4D4PhM1T41GgWpAUxqeXWBXe3Gz16rLu2m46gFg5syfiuFp8YwKQbNGn815JmDVWWQqTQT",
  "key11": "4yFycKEQTjBBw1gu6GeQqZYsYwVMqu8dru8DnQgBYa11MarXqEL3sD3WZV3Xfw3JfWhBBJHrDCRcdVyC1PSGoYQp",
  "key12": "5C81KEs5ZrPwo2FgHjiQNx5VYWHf5ihZs1f4CbAxbxw5f3aLCDXUJdNUgwp6MjptsC9H8ShPNwgpsrXg85CJN67U",
  "key13": "GRwsUCgDgMfeW4XL5RdNoRzv253fZLFgKTZskUHvxWocMF8uqJGjXaXEgkWfJW79Xxa7MiZ883uNjdoHaF5ZQtG",
  "key14": "T7bFxkjKAtZ9yF44WoSwM7WcLCs5dsDvVZwqs6bUGNFxQn4CWYqUn9Q5GRCiSMjuREAEwFFEQb5qqgMfyagRnbQ",
  "key15": "2qCDe57mpE7uwi6Ug698b779RBPNeuHYwqERbKGL6ov2VbSjB5YkNJiSaDNoXP3T3uNERk4DAee7M9hCHgMEKZhQ",
  "key16": "5KdC6NyDRt3Ha64FKfdKGzyfn8xZVNTcmcscr2LnauU4tmvFG7dLS5uxM3iKeuamzh85ih1LjYiJTuekP8ivAAuV",
  "key17": "3AnHAjp8eTFVgyA3BBj9t3ZDbhtAEdwSAQKvfWaYJrRQhT4jFK1u8V6diRKTG4ikUWht7k7YsHEd3D5TXpwnEZwx",
  "key18": "2xw2nURZ4PFB1p4SvHgcbcbFbkCnAGqZMSKmYFjAZ4HZy9Xuyuv7QPinRs21BA4huTcSrqFYZ1JHXFiHFVBdQszH",
  "key19": "5RRocExX4MKwDQEA6vLcB6KqrVxWLCKT4ixa7rjiV6NgmqvXcwVCCfLmfzZacGEoW7SurM7CzghygrsDnJZ65bcE",
  "key20": "2h5b6h1hvPuyvavH6XorFMRzHD6ExmTn3MrUUb2pay6gxo1sRLnj23yrvLwPQpT6zpZbpkpYv6QUsVswaYgc74Sv",
  "key21": "224eVzFeqpYBjL8RBKXmATgsEkLFzJTYDbGoK3qpAfK5JkEbBa6KU3HBD4Lwj9vdVL5khHCScm1Hktyn1Cz9KLUa",
  "key22": "4EoNQB8dvMPnKyVCo9cny33JwjjzrnbFFGWqz28bhRxq9ahWqSmyuCcckNSjSDvR9tHV3LnSCJ4ow7WjbgfkUHpk",
  "key23": "U3Zw1FpsJ1YwGZFPtaFsZp3pFgutp4bHCY36YdxbaFHvfrGFPmNJ5jmRmtigwmtUcvTvyAscF718wzxGyQLNMg2",
  "key24": "2WMYcwHaQUUZzY9jYYKJNsRb5WvivjKFs3cNnxvpfW2BAPYA7iuEZ6UETUxL5yR8mREsEd1SnU8FRLGHgPBD2rNk",
  "key25": "66GLUfAxHJFb29TgDkKgxXhn7h4E8uH6JdYohddQ3HnyyYmoGKwdwLZU7LkhLp7aQg6Vz9pbRifpvWGWKiks3FX3",
  "key26": "2tb1W84fj7C8paeo3Sg5piJFs4mK7SKUFMUUGXEp4JXLsWhniHQ7iB5qnBRkAaxrdkapmGyQuHLXE19as7VNxcMm",
  "key27": "3eg2gpnTKzM2aan4YGzkqQ5RzSjWhVYc8KT4Z73zLQ3Liq4zrgZAj7y4bruw6av4MgeUuJm8YVcFB1Aigh2ibcjG",
  "key28": "2DcJXmRdvvoVrut7NNY4HcGRarzLeuD18zzShjBWYu57v1pQ1agmU3SqLk7m2TF2Gowyz6aNEbVtaQ7UUmzM4MkS",
  "key29": "555qq39V2PSF4sz7Lb4N7mAZMR2rXRkJu7Ktjm9bUg4xuAqf4vWFnDb7qBz3HXApY3htXRNheodvryNqvb8gCUVs",
  "key30": "3Ms451ViJr518gdTZBkfzMcY5v8Jj4GUbFYsCWv48Y8SMpAouPmpi9rrkMc6wKkx5chSFbkzU34hC7xpjNDTDgyT",
  "key31": "28FxkjBgvissZ8UU7jyrkPFj4nAgZWdcxntHBj9Ag45a82KJpp6WSNKs7rzr3Q8XAmBTo6GmHPKdJ3Pmt5N9CazR",
  "key32": "43D5ggJi6uN2Z8cKKjhC4hJuk4RK61igK7b1cwm6gBEKHfoBQqbYaAecioj49hCV6rSyGLWpk4rynXruYxft1My1",
  "key33": "qnNHAoKXa2KkohcBMRshcRPQpHDcWULwBDHsKqA23sWEGNbqrNAWhcGkqWgyFoGhj2pxXfHjrQfKgeEBgLQSyuB",
  "key34": "3UhY3jfCVC5e6XDJwX6sTZG9U7jYJNwDq2T482enz11p7UNJykd6Jer74YjQQZE2gxw3Q5JRSE6NqpLNm1voFsuW"
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
