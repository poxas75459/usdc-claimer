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
    "4bsY3j9SsoafE3ZZ7CrNeJtTp1sd2XMqy25ptk9ZyPp88U1sJ9YS4HRokAcqaPUXWGAF1PeGVZT6GhXmAu7aWDoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SdA6WwuU8XGuhxqifrcfPAv8UF1YEbPYdcozjGscFujFmp2ToSjLUM1qPP6a52mURqgWWPBj5dmqjcGuaXXzYxj",
  "key1": "5FEnv8JtpBf8SJ3VPhVmSQksMMtvmx8UoR6pBVq1pQcgrjyThyK1MkTwiMF6nzon7NYUvP8nyZJQizQ5XkmCNQXw",
  "key2": "2Ud1abiqG8CFRxrNQ6ZxNhxbtLTp1GD7ktZqQq9ZxzHVejG3wQZeBgvyCnjKrQD2GD5odgGkSgeBqN3CTrNkEMQA",
  "key3": "35tLL3Ze8NtDw4Do4zR5m4jjueiEUuuF1WfCrSwH2hH26E3grdCECrX8SxWJTSP7PcryStWwG49KGAUg5pecP8GT",
  "key4": "4N8eBEbutuWjoyK2XgYEw9jymSGgKb2oHSpABn5sXjedfJ7bUgtZyGxqeKxaoRJStp1Ut3uXaJsL77unDHs8cj5R",
  "key5": "xieE5BVxXbziYBV8LJcQmJ4pF9KsnzJv6et1qjUwy2AApj6ezNteW11XbVYnzBFeFN1b2zR86UyPrL1idgmuWNg",
  "key6": "4qwULnLmbaqV6AKHYgwBqVeFfwmzP11bdnqNxBo4kpQ9Ew63pq1yYwdYfMM698bbsA8dTFNgQ1KZb5RteerBt1hX",
  "key7": "2jpTa8FMFcZbXtxBvz1cAQLvdkfvoEShCTkf78bkPAVV9hGbCFmsEMtp57qTxXoLCHJxLD3wuVivMq32vZnYogQD",
  "key8": "2RY3n1HRwKrfvPZgoEJgbWuiuVBovg6io5cr4JqcBPTWq4JTDergCDVdAh7kQVwBASFsDCMgWqYMCSM7WJwTvwvP",
  "key9": "BHB2Nw5jfVFD2eGan2kC7PgVvUJEdR3N8wQaemvLiV4DndzKEPurXypa2MFfq8cc4ExxAiKLvntdqDxtx2ay93i",
  "key10": "2uam7MaWK4hZT1YPNsBxc84fbeABPKUs5ujVYD4RiwTkCRsYPa2iQWdiURSaP9ngNfEcnc8PNpzjMJowtAmBKEGo",
  "key11": "3hrvzSHxkTKevNpsgksmf27wDnFAJZcj5hUwvtAJ3WE2MoqBpp1e7GcM4dw6gdDyf4nfXnmGKUNGP28GJrWZW17r",
  "key12": "4CzQVhiMoFp91J8MSbGakWpu8F6aSQxMK6ocjZNPJ61GtLutY2Ke1NSiQdkbFVZUyw8rEAhkHwf1d9UYzCK8bahh",
  "key13": "3ge5shVBesftHQuXx7D6VU2W9HeHuCPJ2SmSt1S1ahmiMJvStWCHHLUEuEjfimfqfF7dxB1Tsxz3o42voG4KxY8j",
  "key14": "36GK8dcw7bX1ncTmxDcAZLoH4ZaPDTSdxBPPaeLSwhug4DdLCHpWXTguVU3pwjcgLgqaoAksPP5oxth1veWMomRP",
  "key15": "2CFYFGXR3z9Vthdz4WBRcUWWf2xRNumrXyBykyF4YKDfT1y81fFeoWnUVtmGTpge9XLGdzPG7L3HxEKwuehQmgF9",
  "key16": "2DHvPc6B8YeuNK7kkE5nR8ioqBTLZufMT8Ljpfy2KYH4z5W1K5aJFZnsxXRYLX7TZtqmBZqPaQKVoMzzTSz1owDp",
  "key17": "41YWrcQU6rVVruVfxB7xJ5nZ2K6Yx5DN8LNM8ydGRrq6UpxFMkVUMPNkWLjbsQRkqosBT9s1b4fPAbxdVewTESJL",
  "key18": "67YaP1JKQW9oGr1ZNUnwD1PG5WGJkkSzR6fPKCKNkWx35jEqzwhXWgCvyushHySD9LSWFZ2u6ZXEBpLbe6B5Rh3F",
  "key19": "4DxFSXstcrDn117sh4e4nKFme5wzkkv9FLpeTxNP2JRDMUSdbHBTXFpnZYvHmGGfijLKT3gejMY21XVgSjYLjr4V",
  "key20": "46kruRZYvdFQ7hEVCJBGrZg7F4Yr2RsBgk9LB4eQGt73N2LNqu6xC3jURNnKBSUTqkpAZFZXK8M8c4QgDiBVKNFZ",
  "key21": "rja3uogVjM5XeCJSueMhjCNDPrrUpgjXH421AD2uJdmDMTVBxYkFsB4UVa74WUrjS2TXkQW6PZD9hFabgXTeWeB",
  "key22": "5hTaUSoV94KpvC7VvFCRaw2avFEsc7mPVJLHuvbsZSxHuhayEJSpTDWywE6jidwgCwuaapnAegLvKeSL94fqBXGW",
  "key23": "4EhgP81TnkWwihUFPLiYLNwhVGHVM1ygcpTdoA3Wm9fsEmF33o6ez2mNWbSn31joBUHRrv8CTz5RfZTB77WPikm1",
  "key24": "4grsQJRsnJwSAnR9byau9hvtJW3Dzm1vJgytJVWWV1P9wsQyvSiCp42LHU8NKfuVVyG2ADa2iER4y72F8RzznQCv",
  "key25": "ikKngz4vXCKMe6TrgxcJQkDawJYnMPRUK4sEbmoqkBgquto77FSWenBtbqeMFjNNQJcbpvRMWf3nmqUt8ESCkr2",
  "key26": "41nq7CPFuLJuntxvRgfNanmeSHqjCYndTnQ7549Fe7HtVTSTjRggoHA8Qv2LhRDnnYhciW85bA6d2wScnWkJq7uz",
  "key27": "Ur7B4VkDzeYUnKGG9Kwait14MEbacRE4myT4ux2jsfKVtJW2TfSx9dQHZrN6SSmLwzranHCm3WMKGoX1MWsC2LN",
  "key28": "3sf1pyeGr5WUUmwtkTiXJhgtMp9Pxmw1ocoHz52Y7faTqnHH56wbtkJ4vnKMVTHGBWLKy34dhezzwKbAzMRZfPTf",
  "key29": "2BHoRbpmirJTM75wKrpXErEiUAx4jc3zQgE2cu5qcUaTK3rzyXmw8nKeNQdr2MgWfcUy6dViSX6wbGKbPpt7GUW2",
  "key30": "2DrTF4gVc82NUHFfzFyyStCaj4JVrXKGKv33prCJ1uLyLB7YqFAWAyHsT2TkdPjVkmCMdELfF9iTfJoD9byumoHv",
  "key31": "4AZC9hcVjeF44grq3nQrzSy2d6n5NuNJKGn51Gcym3n7Tz2gofXv54PWN4gkUCUmkNdRNEzVQmNsKw6hvGrfrMPC",
  "key32": "BDwzSh3t5M8EK6NLjypqSkfHHYVysdYE2WH5DYy222qDg1jL61zEuz31NxLKV8DVXJrK8H5WsPG5GtTxyHFTTb4",
  "key33": "2QBNTrdjXgV6ee7fCw48QfT8ZW9Xp5otsNGu8JKVDYsVZe84A888F1spqYaYrsVEfHoTFUxkUhx5pdkq5ptAVtC",
  "key34": "2b1tnxEc2Bev16yoFGw9MymXi7voP55RAtqkg3afWGAcEuTv4r2AErFgcTDLLDiZCALEvNufiSyuQZxqFmbZxoGv",
  "key35": "5CbgAa23tRTTCTc7VMzizD49MkCrCoXMnP27XJ3HjGn6hGb2Q9MiMgPjdMqhhRURRJDfLMN3WKfhm79jXbPbtZzN",
  "key36": "3aNd4TEQVKw8WWqmNT3CX17TUdHw2XUKAmJsheTc8bcsgimuCiCSeqXoXgSheiA2VWw3UVVP85JLBwU1kogjx2WY",
  "key37": "2iqgg32abw3LAT9roUqhaxU51MKrbniFcTBL6bE6s2QUp46egbPmfS9ycuHjsamftCmsaoxQ8VP43bMSL7qwJE26"
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
