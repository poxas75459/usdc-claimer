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
    "57N9v6GEDrpGfCVdo35ficQSLjLXDE32tJhGBfdg763KXNvKgSZsLENjcZvVYExavwBv2cxGPDY1CJSVi5imoGrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ccL3R6zjYNRkW39nB3txTmi5LdJf1TTHcR71sMJ3GNthjEDAMBF3tijTgJmNRqRdy72pyNARhGRXKYh9sZ7fDYu",
  "key1": "42yM96Jgr7uCAYFWR5r8xGYE5QekjhKdCfvfEmcjChREdURgDRNygC9uFBFAoZLMBbtaKSEny4Y34MSnocjerkZe",
  "key2": "PuMwKNhtvQADkVtyB9UuzrFbHCqffKxQYt3KF9qQ9xjKGo9XQY7ZQgUJoRSS3bZMXUGqRWoYnWgRcBAgwQtUygD",
  "key3": "2eZxRdRACwd6PAUzpcKBNn7VFECzsBPA9vUW28aE1gr9swfRj3gF92y4z57zFTiKNbrMjDSU7HaBdXsCJe3bjC8c",
  "key4": "5vbssDXSMGv6ywDYoYu2UWjusd8FN3LKD98R8kmwALuCecth72jeezEt7pPwGsaCAExSAACnNQScBLpkb9ciPKq5",
  "key5": "3YYyPbxXYcWrNyNq68T2wgcQd37MoyrpCYpY5AuTCVekNXUMgJ4u5gGBQqokEnyEyRAPxMysisWkKanom6gs14Hu",
  "key6": "5Tz9SJui3wXjwTNsd9p3KkLoA92ZwKwTX5CGTifoqw2kda7wFwzYAVK89XMmXFYR4wTKf8W8bfusHaYfUbTFY7vb",
  "key7": "2R38Eon96ATDHzKpn1QVEwk45uV7Eg6NvyjV3Q9vMNsWjkcBfxSSNU5TGZyTr3a6BxoEVVkpBhQFb5Mmmf63cBgm",
  "key8": "5nWq5jGAiHN381LMyBCBSzEze24JTXXa9fTiiJqjfjpqX5eQKHTFGg5nuHr5iJrwmmcDCuHRgLP7KWDeaoiDCYzN",
  "key9": "5jRQyD1ifx43SVntsVSiSWTBdCBoqCKvB6zM85JsejWjU97bQMPW4eR37hFDxjeNmGH9UwhnzJxf1RRoeKvQgoUv",
  "key10": "4v71tYJEJD8L8Y8FmD1uGvDGxn9dGNtYuhfV8BB5nb9F2XdfAihsGPomJuyyBWYFvdWJEqNBcsHjayn8SYQo3sXq",
  "key11": "5rXRWWZKHxDCJkXESJ7U95gyRDrwH845zdWUsAGmyWjTSmWUszCxb1Mi6ZiXPtXGBX7z36SUyMMUiBpbXFpUhLc4",
  "key12": "5PdWHW96XPBxyLUr423MYgwBDUpJ8ZmkrrshNYzZiAbhjUGr6B3tS2zZphE1gaavWGkZLGM11rtYzhPyWQicxuiA",
  "key13": "2SqBdb2bdZBFTktch2VgsFuNbhiz5vHkkm98zWKz1EcpyV2dQCGmqFXExNQWKkubPsZ6kz47uhpJarvEhCzP1yrz",
  "key14": "5nC12GxmmT72mUjhUL992SzxkqC5L7e9py6eoQnMhfRLPyAtAUWp3SKze3mcG9HUJKBss92smFhoRvTJ5dHYdo4M",
  "key15": "4hFQPbRbF1WTKTrfHruyieW7wihFTPWxLjszhqqnszPtg2Ua1Jr6Q1zXKYzdxBU7gL3uH2iW2VepmmdPfcaMwq4d",
  "key16": "2MtSdNtaUqrUxySQscfTBKbZADzeW7UEVCrBSL6TVnuBe1XsX4Gqe1PWRfYJG4Krd7zSgFbrHG8q2gZatNtGkXmG",
  "key17": "5ypPfTpssamqJBfvAbmoHdnpB7pa47EzEoSysr1EBiHtmr8SpteLMtzue6pQYqDjcpuq3pEuSDdr3gSyhdcQnFTM",
  "key18": "3rLEqWG1XfXE4uncpPhSG5qoxuLGA8WZsFAZ4c79K5xwXKkoZVCMpKbZQzg6YFRCGhVhofxCDUaWc4eZ1WpHYdqJ",
  "key19": "66vpW2qTQSqv1Zrrow9AwNfzc3eeEpT1Peti8ydffZJAatBthvgSud8AmMmu1aQZDeoQe1CXb1GrMXHQHq345s1N",
  "key20": "5LnXk2A75TFv7rHh9CJw3qKEw9fKt4saEn4LNRxS9P8B4YkKfg2tpGy6P9vYG1QUy4TcDmcZ3RehpAMAPN1A761N",
  "key21": "pAGFcGzf4vhmPR1sMadNcLAdhhELWqzQYmpPg92fNN7dZJaYRb8FDoKhhs31ToRQzV8vuF8QfMoqiS2vYqbwWRD",
  "key22": "ChESd6Z39d9AiXMhjVmVebQsz7dDjEx1RGzZMdMDvAc6GMbkRrD7U8spvTrve9WWQThSjaneyf8EbutGhB1Eeuv",
  "key23": "2PjjziXoRmtN3X6Xx8m8y7paf1AkTAyqmXVLuFg3Uk3b33CNihPSzzHQ7rJqxthNw5yZPxw8u8Kk5ew2dfpriDnB",
  "key24": "2s4a8Wqi5zKncP7FnALEtV9y8UkvhBArDqUGTZFwebJTPUpEmC9uy1rgjkWPakmeFTn1sQ9zJ98VzCihLBPwreJT",
  "key25": "5xYtK3xjnwXsnFvmVF2EwXGGiYKA9bF9sDWDMYnvF3YpEZAJGKjGSTRu7jd8PBEiVvkaYvafdUQHfhy89P4fXNWo",
  "key26": "3Nh8iPDknrrduj6Cqd3JQ3KuzWwM6ZcMm1UBbdVBSqv3crtqoQHghJTjH5Nx46z7NDHpJzQf63XHiaeCLuFiW2ZN",
  "key27": "5PA358esYVmczZmDLsUUw87yboUn44AF8Y8ZNiuLNjEUUmk8X68E4WxwJSsRpm2Q1vmsQyYrpceDexHHSzUN4rid",
  "key28": "3JbrR1sqrHJNfupQ1qFCvSsfbWiS3gcGsbRpHRnvYY76ET16SNrd4qVhjLETktv2QxAH1oyi3igTCTufUWwSTGav",
  "key29": "4XhZKPJEQnmoymTsJ7dz5KoSGqogRa6rLqHwdzEqjS4hqfQ4FN6rx2HzuZuNjeiJfnCiaZQzJVvozGoQ5vuCDBXK",
  "key30": "4hamJn8tnCn4bzABnwEyqyomkwXtcK4GnxUqLWcNmWBaXq3QGm6ykYXRwGGHWdc6bMG3EWEEc8qG9wpMfDSoEYmq",
  "key31": "A1BiTbRWKf312Mq1MWPhj9aPP155Fs6yYAZjpzsQ6zXhJA4jXvEcTKxFyjytPVLf75zVpSP6oBBzof56ADsYNVm",
  "key32": "UEqTUY1iE2MDMd73Eh4wpmnzWbLFKXjaP35r1AHsxeQ9nv4pzFACrVAdQgtHbjyMUTNuXeAkzs9NgrMDLusa6qj",
  "key33": "2kjtA6iRw9GnT4ipXNNrpYhwjHqavmxUJiUB57VknvDTDp1d5pHoQD6UXARamMJG41rSTCPzLm3WfQ275Umu71eB",
  "key34": "4aRfZgLQw47SJT6rUhrEGQtfNV8XKbCP1q4ube3V3j3uXwdoSyBqCycBrKTnJzcPVfNf49ftaYkF8zuP1mbMXAeE",
  "key35": "4RwVxcjUt5o3b2NTmHAJ1YwupSc6REkjjrGCMKKpHqzaw5QGqwPHXdzJHHsdctMB7mJ7aNspV8wpkh54yiLKFAsF"
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
