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
    "5BnPS4XoiYVTwDwJD76Kw7myfUARWsDSNf2PXY4CiFdYAk4z48RDuWLpwGuXAUb9KTdBThckMXxquQHRUzF4XKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64xQzB3SKWjYqKXw5WPsbR8Exvb9YNywjWip2an6ABA7xuqh3NyaSRC6abGANR56pJrDdyJzbQRCjeuwPhwVnQpy",
  "key1": "2np3xxbKWCj9S6Zi3FRFbp5Q2A9n38t5rfRtZwT6XechAoCHYDJGP7Pdfpi9xy48ZDHRnAcNQ8RJqndjS8aun55Y",
  "key2": "63MsPHGvGfo1VDwzcoJFnQUMqQQhUpFab8m49sZcjwZusdtyRe7hZrY5typYqWVmFai4LDtKFAiEE5ZAZJm6pZ6V",
  "key3": "2XxKhNK7NUPVREUchvsmbmLyK9BK6Te9yPYePBDFy7p2hbWDVugAj5zvxETLJYRDaXDG6EGxeaPHDD5c64tmjUz7",
  "key4": "46tZJBJHjKycsnXDBQGh2vnUayU81aXf8wSYezwRNBfshgje3nSqDRrkYKEXqiCMHxWcadT7d9P1HPMTpjLheVvB",
  "key5": "auypqDyUiG6AWLkr9BworHLjYdR6FnNDMBV1NSxk4kuCAHCrspmbGjf6kPmtLoh3XJm42hwWvEtM5dPFELEsx7A",
  "key6": "3jmapDpBD5Vh3y3BSv8NxGMLie7seJ4vt8QwFXXsPqhzWeBPjTitzdGgr7R78CeAtJ3jBhCmvfGtN51ZcydCQ4fq",
  "key7": "2hSgYg3AVQktpJ7FdyUAxzg5UMqMDTMWz7XEwMtd3J7xk1Es5ZJZJKLHtTbbmfnHg6CU22D7XzUTvcDTgG8Q36jL",
  "key8": "5UghKmASnsPbUDWhcgYbemzCh3ttZi7hvRPELWSimCuRya2DcC3CyRpgvsFm3ARAuwxFU7ovYrmWnj4AwXmR2iRu",
  "key9": "4efVdYw6CLyhRxsGV52SbTSnMkHBzXLD3HpnaQEtFRsjuZyBRB92aFtPoJMeKUezHRQpcnmtFS21sYCmrmpiHscU",
  "key10": "5tTfC9WPSv8Vfwht6XYtCJRNk4TuRH3sdT2VmVGQ4tsjQdqJKLXFgVk5L1fJb3apP7gHEM5z23ZnPuJM9dDCDKqG",
  "key11": "2yun5GjD2iaEb8NNRncu4kfmmmGsbJ8J8mu4yCjg9EQNEPuWwSY2XvUpWdgzVx4KahSzhahWe378reDpPNiG3SHR",
  "key12": "5vSp1gHsHhTUcG7h6iQ8cV6p5a13RAn9cKRiFHSX6iZ1cYkQHyTuCZZFKmWxHcptoZDoEJU4n2BQbfkhWoTGMXxD",
  "key13": "3N9LtsCnpyHSzEqq3iYYv1KYeMhQjuWX6LRGoBGYywmairf3KCKaFW2BgaKYfrcfYGcncNLRn8mHM8yGMoP4ZbvE",
  "key14": "52GiAaL29FQrvSdRgdZ7D2V3FxMcUVoz6AgRuTwmC9Z6CAFFiUxBCdDE9r9wFMVK4zZ3pAb64DJNHEmKtmnrdTi9",
  "key15": "nnkutxyqjztkjaAGJyEdizSGgcTT45ynnAaKjGEFHm2cvEbsDdQVuVCLru75rUVZ8JyjSKADEWfcmjneLaEMJ1Q",
  "key16": "49YgXeyJcMz3y8DGT69RLqpjAesbbjuzbESdL5NKLWRpLE8wf4LhoCvHgr81WsgSzKbGzgGqGPTQuHn9uTokQSCQ",
  "key17": "3sRgJXmw2AFresXaZxtKWorSGimGm7PmXVP322cGq7V9M66TCrmyPH39eM7NUczNajtPmhfbM2dCoz9Hxj8ZqwqY",
  "key18": "4mDD49AEsiLEe2ShBfL7iJoJckRsrf38AmX9uDyu4ZfAW9878ogaBfRGgz6jfWQM9ntLWBX5cjWpbH9YWrV5eHj3",
  "key19": "3cSAWZns9vpWUnLFFbZ9MKsgWoW8T5guAAu2stjfyHdekgUKcCJQTkPzEXEkegeWfsuJYUzXsBaDVJdgMprP5Dfv",
  "key20": "2irgJWhVZBq4EwijUVam4tY358fuo3ukPbbVhkPCsuGLQztuTVm77WTutweUThK14FgqvdBcFtA8TRdkGnr7tQ3B",
  "key21": "4iuM5ABJwDuWtcKiPi4HpBx44Spzq8HxWG1XkEF9Qq5ynTa17n7BBgmrY1W3sBuA6rGrETaSJiS7WfFRBXYjG6Re",
  "key22": "e8w2AXFs7jvh2UU6je9KzV53RVnTsgcUtjy8388LjDXxqvEKzJZRAPJ9WcKhpB5oCSEFWcpQ9J1KVotnVR1nSMu",
  "key23": "ff3pBDxPDS2jwdxfG2UDHaSJgn2TWp49mxq14xDHsuMrWd6qwiQ5HS57KZm3f2oWPoed85qHbuGSkgpTXPSTV6q",
  "key24": "5L7sg5HmUkqxmCnMYXNqdsZmFXhEUn8J4C8DQFfXZyWJFV1nm51qGDvkGVM57ZQT2XzdzzbuHtnGCKdU1td9iWuW",
  "key25": "4kgnsBBcfisqTaZTo95Srn2otD3Qy7bATgk5DiSrfJqqBsZB4uPYPNZVcU25KmrJBL5ZYNRpVdxQkM1TujFQt3Yg",
  "key26": "532S3PF3ur9FsmXAq6RU4GJ67Rqw7eZ9hz2QsSVayfy18j18TP5ywT2dBTsNJyZX7Ytdw3qTvRuF2FLsduwGaPJg",
  "key27": "4AVE9UcLP9vZrv13VWTzpUcvTdH2H5rFiD9zgTd6X3RSQLyPkjGjZRvGBwRbpZxozRN3Exk9gEFtrum36i1Zm5ac",
  "key28": "jF5xNgRuyMUDCsQhCP18RNsgKDiw94aCgJX2WYnXPbbhJzEeromWfWC1Q2jA1GXqX2SDTv1rnw67UeNazP2xXbn",
  "key29": "4J9keoDsEcxfvSMfLLoXtdt7yovaJWBHbA2o3H658BHmFxxagjF6Sb4g8scgsbAzot6tjbHj5EK2c8CTQE5ktPXc",
  "key30": "2D518WWRHSamqxdS6CuQ1pyjQhU9tHKvrykfVMzrhX9J99trXvRyY1ZAsPMGDj1hrJjFEvejveWuZEe3w8dPcjS9",
  "key31": "qWpwCJjV46hUEzb8R13j3pJsmmEmffPaHTMNJhjxctQKEHyvRtegyxhqbfUY3KUEVLefnetkkPJrtCgDkWeJiNC",
  "key32": "4dQzfGKjFAKoovUZRyEKzdUY8cdg1Wh2thRzUyQMVWmW4BihbcSdoo8AuRqwBm6ppVDbEorKz4dBEDT7uZaJtzYq"
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
