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
    "4MiDnrGitNgz2d9P75mT8aQE6gvrKcnrPmYP4SdCUEP11x1C7GiqgKFJ7yFy1xGuR68v6KHxUGEvYmm4gGfza7Js"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63DjWkCdTNqF38YgQKrqw7iyAG9XXQrS1P7dVT296SHDf8FPuGgE7YrPQrtCnY2VhoRbRPZS4V8bDQhpeCesKfZA",
  "key1": "Z6yxrDaggaVqp1oBNtF84f8Cycc6a2dtcofaHwPN7bj3EYFVZ26ag5QYE6Y7mPm9E3YL7TBppiN9Y8eFBWzXNjb",
  "key2": "5bYFeygp9pZR74Eot8cRhH4TFKrwJV4WkhozeYLfzLV8M71NxcfDx61p3kcz9bEfeonKgCNLZPStpRbFfK6B1wyD",
  "key3": "KB58VdJrzXDJzRywwLrCwgDSnmeaBgJiAPt3WZb7QG6P37D4BZRkigY8YsVD8NC1pimPbtFFUC76sdt2iNGZaxw",
  "key4": "3DR5zzetBKorAstDenykhGWByWLaZpGSyxLUB1EXqSZTDpwVP3bR7JxQfrrnoFecyiK4oiW6QnfwCUhhkeqSuSPo",
  "key5": "ozHzW5CkRFHquNS6PuShPbviW2yWUmgJY53zW4bNQsz3MX1WTcxUL8ag37BLyQ4M3GNCWZVHRu63xwCrLWACZBS",
  "key6": "2RNT5eNTqmZWVWWjX5xCyBnfuB4Z2rgpzh3cokAPCTZVrKBiXVHzLTJuJ5kLRdSxipr7A3jqrD7xrbRE6afeccPT",
  "key7": "3zhzRnFuXz6bXaik2toC5PSGP1NuFWePmWCzmFHzSHWWQCS7GHuga6S5AiHnh4YAmJL9WruTb821vDk5L5BPxx7N",
  "key8": "2wFowLKYnUCHMscHr5MGSfvfHapttgr6V3QSRV3kynQKCAw4G3LaLtB8JdHnQEhWeWPVjjM5b6pKCDi4hYd3cGim",
  "key9": "QwFxafbVJiajUUKn8QbhZyTapz92FdnFmqWYXbczMwgbsNeeUUY84bHz8miD5NZBLjsnXTQenGkzbpeSWir2tHi",
  "key10": "3XEwqpTM8pY9xtJcpZmxCENGsQ1iW5CLxYrP2CiFvoziUVDGfeEf4rvAnboR5H5RvJThgeiXAuhsmx9FY8xNaGrT",
  "key11": "3zgMnr7ZV5ji6kG7tubJjYMkNoxtE8S34CVyUBzWbv5p4WLi9RheKWxvTsFug9Za3zMx9vXUd645DScnjWopvnF6",
  "key12": "653LG5PEMg4p3h1QYNWRT8CsnbBWBSbtD1VskP7x3HREZpofFBqvkXgvBMXFV5qJZQeYUiru5hHrjMHVtSkeE8gm",
  "key13": "24n841XzAFmYtSwhLEUUzfmhaiwywWjfvJWwt6tHcaj3TCo1uu62oiEaL7WmmaSZ1v45YFZZUHSnWBvH7TtECt6p",
  "key14": "4xvR4qwcUr7s7dRsb3iQ4qUnM6rzYB89zi2W3FrG3CUWhjRdtvhkYDpqNrQ8KGGssezPSLbCdZgBv1nWfGnCkvuV",
  "key15": "2w23PMybLdG1DhtBS72BWqkXSZD8pvJF8vMskgFnbhXV8sRKkUCXjYvFfVDfb7H4taYvZdU2NyBd4Ajc9kaGH3ax",
  "key16": "5K3aYNNBTymQgGUheibCjToEnzjjw3TsqftRtcV7DnagPfzuTKjoh4kWkaWgm36wb8sGmJTUfgB952Lom1KHsCF7",
  "key17": "vASZrrmrxA22wps8MBGu78FrCLZd4ywWSgiZyo1z1SF31uuwy4t5hfgvGpjca9KbHYk4anoyE38Xs2GxZ4VeUaF",
  "key18": "5MKTFSED7FonENzWQe7eB68FmovWowFkk74k1fRyfr8iRc2BdEiuRvX3KZYfcY9h8vpi4vWrpUE268SZQkKc5rQj",
  "key19": "2oMJXxLEd4GykT9hovxkMeoAowNTDGanVDZkZCAshhM7EinpFnisqx12grvyKRK5CbieFdfVyH1sQ7hFiqxncXjD",
  "key20": "oTVvpWzgpdEf5aC4fAkZCpR23jGjLwYctVvFagCJSyRZhUUqs6ea2u8LWCfw4kw21WgHS6tUZvM7uA7BkCW4pKB",
  "key21": "5pWf3gsMHAUJgqJVZruBvZQP1EynU8jgFwGgzf93gmXkQmL7GyHUGEGMWb8zc61ViM337ExtsRJSR8rf4BGGq312",
  "key22": "5yvetnknrouFwf6uwuhZ6htwh8RhzBtB5FkAR1ZmH5YtSo9dxwWRYoVrfstxc1n9Nn19PYu98VAyzxFz6j1BDstj",
  "key23": "36sTh8BLXBiwCfJReFjEAC86DVfZ82ZZYafPutA8Y3SWtz1e77E4hDUS4G1eAEvg6EpTTV7nW8DAzYvhynKTLA7c",
  "key24": "3vxj6CmKMkwYURN7pE8jjzECku8HxyUYqdawthmBXWU9BjsKvNeZDtNHo49jkUYbAybdizeYwrpAf5rbBKGFkptN",
  "key25": "2NzQHcpNhbkv4MnqL2vrt7q7mBY5eUY77p3kLvAqbZ5MxkhF3ubAMWNLV12zeYQ4edXXSGRJ1keYjLSy4Pa2R7nV",
  "key26": "BPUZ4ZrMfKj8QCccZ1GyEdvA3WsYjzVwbv4dRNYsdTopk2gexvipJeaVsQgJYw8Jq1NMt9kS6rzckGyk6jhXEgz",
  "key27": "2MSRxEzkNZjnxhkX56oLBUpgfSeh7tJ65ahmcG4h4RZmnPZd5eJZKrYPQBKJCHUu1Pnz8UgT9p81sLB8kfoV8WqQ",
  "key28": "34kEBYbu1F5jd8fdbuGpm8oU5BYaTUHXnzbJd55m9vZrJZMy6vV1idjpPySqkt24gCzykgSJeWGacmh2a1jSphKC",
  "key29": "eV4E5e7XvtVwAGBAWpkn4HoB1ij4EX6Z8u1ovVAGhy2CDwtvEvtcqWgVxp7Gz2FAaF6dp1NtMJui82YZeWmBC6c",
  "key30": "461oMJY9Tzs7CtePKH7ejDdeJmBD86tEEEFAw9yLU3ChFdbCgV1oCg65tNFMP4ypkYceLXH4jDr9LwuopVgfPEM5",
  "key31": "3SLYFUHfLBqm3MpgZninV4Hgu2cQ2JoqsqUPjxpDf98odkiMxcesAJ719kZAuvWYWuh8pmYa1gT9uZKz8iYFWv54",
  "key32": "5mhjGUBcYt13hzHY93Gmeq2NDgaFbKJFoSNjm5EsdcP4yrYuJD9UaFA4pmioMM8276uMHXZe6Repsaufrgti4rmH",
  "key33": "5dHueK3w59Ff8aVcPUPQxoLjUKDVFsZztWkho4UbUiMdDDvAKWB2MqHjx3viTgJ6z4AR9JRZYCmBj18QEv3s1fT5",
  "key34": "5QazdQvJPuaudqd7jpc7V9eNWkBn1aaRUeeWh2T3JPZusuhiht4ez2jpCxV9G8fzrU8PsN4JEVuoHufNX8eoaPJw"
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
