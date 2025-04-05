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
    "4ZF7DpGt7mw8hZDj7bq8onv3aNnhLT83BL3GArRUzDxe8egEsEuECXPyRP5q4cVGk6LGEDxMr7NSCsG17Vpr5Q3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vk6GYfpzY7vGfbytjUsbUhFhL9g8CpRMkAZE2oLXjtfAysQR6NuLJqkLuwhgF8cpHb4iSASJU7FU7Hcei1h28xP",
  "key1": "4t87iHxSLeXrRs2xHWnEvxaLwk9W8ZrN6UiY8aQze6TcnzTFc7UvqD1dD9bwjvFyBU493gVi324AapErMs8LT5Lo",
  "key2": "4hnV2HooG5gAQ4BPfjEg1ZETtA3XGDGTd3zehNpwT72bcfWqRFbHDhGuBfBo2LrWghS1vvWdd1NUDhh1kG1aeSEZ",
  "key3": "2yLKgrVGaZ1n1m1WSZN7rJFLVBtQXRQsrY6FfcvGc5BEuTBrZcoJBgQZLExThu6FjcEV8yDsCA2ziMxA2n4Zys4C",
  "key4": "2ZXUXmBqvgxzEF7pV27AU2xvpHUcXSZY1Ug94y18C711YuhWN8ewXdarzFyBCEPtztTb9X1zMFWzadQeEP6r68XB",
  "key5": "XohZWVoFJ2oWKPiacBuYzGX1wLe4aKgkBuHDMRvuq86E4ARdCk9E9ycJoLScbD6oFroyfRa7Fdkf9TvT1pw4UvL",
  "key6": "4BkWcRQYxezFg5jrjC4n2CRBESpQyfRxYHKBSMNfzi45jLhfom6mVro6tsvPmx4dmBoNQS5x5anXPNBqPLqkNqAc",
  "key7": "2sdjcLSCuvGQiK21JCUibunLYZazFCU694oZnqfmMMFRUYVSkrV8u2ShwDyuSBkpG5tdS7WdhXfrsPWxtHEBqP3B",
  "key8": "1UMHzFsaXhBqZepMFE7mYY9kVRPktUCuUDmYn22cyoxaU7fv7usr8goqtF9jSAq1wzuJhudkBVcLjb9SucmhJRU",
  "key9": "24u5UTHgfRrf7nVZwD3wjYGpe6y1SSgkSQBQVAJ46XrY52kDaVmLwtpL4yg3pUREqDDAhRFgHWnWCxnQkqps9az8",
  "key10": "3eLyZWiJtAthr5ri3zH8uEcAWRu7MyFcCyR9LBB5jyPCfRYpFFPi9EV3kPqK6gpq2BGLkr8RDV4t1RAfv8xiMBjP",
  "key11": "5jfbPtJjZmKbAHuBq5e2yimYTj81es7USvH2Wsap2hPtfLQMkToSSoispBi9m5dcsvZptsgtNjmmAbiBR4TDoBQj",
  "key12": "3JoQ21ZavSXvTEVCpSchw5xzEWS6JVEFJScRnVhXeNFrMseNmyj1bvFhwcMhwhMV7pPNWdUjKpnSRvSibZL4bby9",
  "key13": "4gSxUJ6HdEUYWahKTrvhMMR5kecQNkgcJsfc7NuKx2bv6cXqMSGuJbtQ11DoL1YYX3UNfLys3pi17QUtLbWEjDwV",
  "key14": "2LPTM7pVK8FEdhu5e3yZ24XoF7ZjFx92gJuSJ2Jh85iAaCNktKPtDx42FoA2VfXSBXvGMYtN7Js4nZ1S8X5xoiem",
  "key15": "vKg6KTbC8aR5osNVzmTiELvynia2kVgRxrZSg9BjYKFFru8ENGqjKH2JKgrqAg7oN4abjrTVcBu6vb8474GmsdT",
  "key16": "2gYT1E1fFvHhb8XABZoUEi5bDFYbZqvGQYu4JE7UYQZauMGxAdAnpHsgzD1KeKLZ3U7MQ1knoojddym7Mw53zQei",
  "key17": "5U9iLmCcjkEvMJczEw52WyytAq8To2PhoVscpqFbL7nABxDcnTxASFsNisiz3AmTrNHTLeTveaRqDSrdyAzBWqoT",
  "key18": "ki7tMfASnSk3BFA9JKRLjv3MfeHbxkJKKjgcaC2FtwC5CUQznVdrr33zG5o3QATQx8aa5FoUtJ9NBBXAjUpLo1r",
  "key19": "55GJsEmE1DqunCqLEM4PwCZ35CetdNAwdSBAoGKZdViCPr5sTrM5p431YRugnJA61BbiHpTfBRXPXxyDAUB1p1Ja",
  "key20": "3wJbYX59cjT7Xok1rCruMM6kWsLM7TWLUaYnFJPtqM2mMT4TzSwsTQfw22QNL7iHdvZmeSYwWxrFJRC5NrgnqXcP",
  "key21": "4BBSRB9AfXNvj8dE4yHr2UYas2CewqYx9bbhBXT6ZBJ8nom9f6a8KLaYz4nUTw2cK6xDzvbuTx2VuWjusbjD3j99",
  "key22": "4S6JwoaJcEeubDq5oDsoPos5euccFUxZcxC9qhRu79gBeAET18WGCL5Fzv7HUKrbNYcpbNgKKm8zT7dcrvL1vUBB",
  "key23": "5LbuyZ46tQcF2aPbrpUiKzp8CJg7nai8oDwyez2xvdmbPiyDCgsydnFnervC18nnEQzkxj79oYNHmtkkYCixDuM9",
  "key24": "5vL1h5CUnGWyQaqeGWFuVqYXUnjjvUdyZSEXH1JzxAmkjg5vK1X1K7tvm3x6RMbgS54oGHWpAKbhiU6bGkkJ8a1u",
  "key25": "xs5fmVnPDrBuoBU7FzZx4zyKTD7aDvU6AdAj4FPnKuyRYmGJLXCJbGctiu1vY8DufWVUyCWE9WbsfYBWhJw9GnH",
  "key26": "4EdDozs3hAArVcNMRW7MPbeh1WAhVyN5SdEj11mzKZgcKsDx4BtxnyDQUoZJ8XHVptH3spNRRUVXZGLEfyoW7s5X",
  "key27": "5B7xiUtpoDuSY9UQBj1CESsehxmx7mKDhS3h8ZKDdZ3x6tXWGTMvs6QnFyA3m3vhedia8M98Z2CHCqjoioe3Vmzv",
  "key28": "4U4C6QiYMYkCaUzi2jpnQiHKDVMiu3Xyow79WR3XoKFehuvB4nSMATwEZ17kY637MoTakvFBzL18Re7brkr4Pn4g",
  "key29": "5J8N6zdtfSHZHvyJqPZZPKHttqZp8FYkWrYuXw7rfniq9MvsBZkUsgNdgneRqMV54YqJUstunszv2JZo6WmnJRDn",
  "key30": "xgFrYyeRWoofpWgHyBqAsN34WpkYBQM4swPYzqHcnFaKpX97BXMe2rRrfwJCgB124ZC1ncGqPWpPKdfa6XWgUi9",
  "key31": "4kJwTwiisupmSTaeiieg7WmmgAHwBppfZr27gvD6MsEp1PGS1uAHXKkiXYbzJFRajy2peAjQUTk65PPLsC4nD3ca",
  "key32": "4GQToChfVdkSMxUCENMSndSFiJsYV3uHeXBDEcKgAbHjvD7h3foX7hTB5hVnaUQ3KgRgtn8M7U6xomKeSRTaKvGv",
  "key33": "2hExTGNqmicxRMgEfBFC8qrg8WnD4w957Mf4PEP8eYA3RVo2aNxnrkWiqZrX6xaPNyU4pdZzwJGjRdd5d2oNaRma",
  "key34": "2MXHjVqTM8eoJLpDDN5LbLYUHpzPyDzDKBTmcD8Tejn2GzxZ7CKBpb8PDzfCLzS6pmTPwJkgoXUSB9pJnfLyPjfC",
  "key35": "3ZHyJN1PBYF3uZK8pAwo1RBYgXpH9tkzuSYXY7jLxA898acmLooUJC8wLThNo5XEwo4Rto9gEwCaJd8TtL598Bxo",
  "key36": "4eVJA3qqbnJ24R99csTZBfgZfxcyVBV5TmfKrVTyL5f79UD5s3n1qfmQuFCK4NBAmN9sYX8hUMUqt1j9g3AiUWaB"
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
