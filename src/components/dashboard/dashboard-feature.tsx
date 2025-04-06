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
    "mWmycbQERcdoxwc5GPLr7ToAmVxPGjNV82oASGV2cDaq83G7BUovoQE6BS8KutXA6sJARrFY71af5wZSBqhbzVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ftsxhkCRMkzA9obiE95LZpqsDBNM7SpWrQZMSFbYnMe55P53APWHMRX8nMzbd8SNVwf3BmnCBNMGf4N1kmPFnVi",
  "key1": "4GAia2jysYxZHYaf7ZBaBDAEczoh72AqdG43f12Bh1PXDM9uiBfTn3QrJdgXpgCV6f5yTgbX62YE3K7a6CYao5U6",
  "key2": "imy5axfYsmt5tAsRdVbW5y9FF2xrKVVirPfCSm2cUmJQS9XkkVArZMbSDbXi5dEgYDS4rxXaU4KevhteDgkFEBJ",
  "key3": "3mk8ccamxo3pE2H4zrRL9bZ45ZUnDMPyETsNd25PLnVHHsEvCFyXTZsY1RXmYQKSn5jr95co9Ba2B9Jwcd1F2MhN",
  "key4": "2cQ3jeLidiTuTURkCkucgKVNNy5otMHtKPk79NPibLuAanNYgoKd1rMx5bX5syTvGfCEXUnV1W4VsvcAup2Gg5U1",
  "key5": "4w3y3P5gaXZQi6gwbZAm5oXUrowaGNHaEEgZJQjh4oi2pbCgEeJDLdB58gioLDuk6Q6ZzZ4AHNQEc9nM6Bi1grZR",
  "key6": "vyZqtrfjZcvn5PUy7GD3VKh4JLHBTb5qWrMR3LXtFcBNWLBhZcxF84ZWVPcAVrHhBCsFpMvumZEE6MEvbCNaYA2",
  "key7": "2FoP8HgSZrPCSvtkzGcHJBgzjYWEELC8RvRRdBzgaUKHouC2MoNxMTYSERBaBzobpFcU5WystubWUQ1Tp2xNa54D",
  "key8": "3weut2xb7JqT2h9ijxQLaCUYntai7Ev2b9mQXK6ohtnSfcyAFzVdvZnMMwTjQkQfcdXsgXYAXLEx1XLnjEVQXaK3",
  "key9": "2ABY4TdcAWiqTqQF2dqJGSHQfSecgYWYLYuy4dx6CtF7GnDxhuu4L9uAxjn8HVsWed3Tm87MBzh5KFEfR4fSzgUc",
  "key10": "23R9QiEGGkzHXxdvDCQgndBmwTtwUyyUQRrAJAfgA8KQKvc91dhB5PS1a6mVqq7VMvqxLqjrj5MK6tX7eFDAyDhi",
  "key11": "7ZSrwg9BBDt6QJxo645XDeTLb8FzDaMsD26rGQqico9Pgg78Esojo7dBk4zkpywh5UoR67iFvp2m5eSWz4fhT8V",
  "key12": "4FvNCg9Qy5uezRrrbhpQrfsPNukbzXpZ9reL6n2cMuwhNvosBi3AHsDfp9C3KC84UkkkNQMdB7DxkTrxa5HJacpD",
  "key13": "42WTkwid961j3gwezduKeHsZt2hUnAzrsvaJsY7XhhNPo7env1wtyR6sV1WjUv18CDZGv4754n5ExcMe5Nog3n3U",
  "key14": "2eH3SqosmH858TdK1EJsJeur1j2wAHLzqE5pkp72xJewnrXBitvLJdvRQmeUR3VJtzrhiYUPYnKp7Z7B7HxLMcc9",
  "key15": "4eFBLNiWGapKqq6GKpcouPc4Us65GEJguFZVJPmW6ngXJwCPaAZ5eBAYy1KKAWE5MzM8cjFSfeeQSkKFSpdksQZW",
  "key16": "gkgfoFs6u4HZyy2YMJNWzvFikGZ1Mbc3uP6AM5jvESmyGD7U6WmCkSHkWKR43pREsKm7HYbiqWbMZL7CGY4UJXD",
  "key17": "2A8n7D5UEvcGki8T6efdMC7ewZToDDGt7k1cjyxweqnrzTxi6W8orcgLHgYYxkjJnjRTNk1KH515dyrnPJ2FG8pW",
  "key18": "3SbXgYsj3eyFNTaeRh9G4g98cFHnxrWkLe4pqRdQ9esZapT4mdPpEBpjRxiUQZWk2RuWnuYy5wDtAAub3DBrgACC",
  "key19": "3SMTExyk4oHgJcciCuDVR46rgpXsUBZ8RTHMJ8bz2zYNXaWZkHDAT1tJfK4DEPSrVDnnn6GdQyKx7FyJJvAyBPRE",
  "key20": "2zKh3UBYGD3e15BMpzfhJgjLT8pNRsHTVDNUEE3E9c2jCVfP8QkvzkEdAEM9DZeumtSgCsY2aW3SoLXjEbK2vMUS",
  "key21": "2qyGcQsBNx7ooWJHnb4PT24eBktG1NRbAMDuaW4JgPk5tNtmbj8wbQ9Eo9QnPvUPrBxoWgcmRH2UZ1gJwoHsPV18",
  "key22": "4eiyyenUnqkZksimXtg28bpSyqzauckU2BWa2T2UPRaX5rVgppufoDs8RKEJ4gSzYNUrGo2teH9TZ3CXuM7VeRus",
  "key23": "3LFqUAo2kuRR7CYDbUUo4hMxRqutQ5raEwczJE55iRaBYnxY4BiST4CPhAmXFaBoDLTXUoLtgLZ6mZAkEVw2Kmyq",
  "key24": "2YTaBscKTiTyHpfLvWTK1cp8umcRys2BYzEQiYpk9JUuTDLWhMncoTF6411ncu1SXeCxcuYfJzHbsUtQ9eoySajC",
  "key25": "4rcP2Co7H5sUXnaqcFkASy7zYddxVV4zkuBiKK4f9DQdYFf4KXXLinVKf9HEBFJKfN4Bcmb48UXX3gdPv144714v",
  "key26": "QfRWDqqQuvPZdsYgFmRnChLR43GLSARWUMzau7X8qpXANXSvmTCBJyDwZ8kHY9sbkHNPD4snHbLbL7ZuVq8iY8h",
  "key27": "2sAubhKhxk9yzmJXbWMWfvAMgCUqWfa95ertdLcDpWo89rVUt616GoLG94rcJSgPLwHCzLn7anev7ygoVT7iAEUW",
  "key28": "44GroRs8J1kEsShQCzfhcjHtbycYjeCL49tQXDYDcpuaJFEo6CeRgwEvSP4pATLXWeqB9BZQBzjhskkwYXdgnbCZ",
  "key29": "5kvQ85ybQpGtkbfJVYXNwbodQhESKQkbAYS3GjgkoeqeK3JmQm6NFTGe4b45D8Q21okbo7AiSXYU7rAPSXf6JUiF",
  "key30": "373T7j4YRCJg8sR3W85nq8j38YS2FXWrA34VNsSwzhN8kLdJU7KqwCuWZZBZ1XqyNf6zC1SgSUvHjKGJ2PGyzeoN",
  "key31": "2iDbBDQ8xLhgBDYytKNmQW9bbyogJGtDCp7K9W2H5Zp7m7AqMQGGYpBLz25pEbVfPx8MgPzPMZDf5ih6JAcMchbq",
  "key32": "2W1HcSw6FcoptjUvPBxbLftUM614XtwpqPBnQxe6eZzyBSzmhcW9LpfcBpxaCJa8AWC8i8P331BdCbcveknXxJdf",
  "key33": "WLhy64chaAJM29LiuWNGijXoGuerNkficT938ynCicitGFRaW8r7iUUtD3sUAzyZRU4DoaUpYvBytrMahYetVQq",
  "key34": "2tvjPKqs6ZdRnXxjnfX1PvLhnjLNmRkmEdLsboVptL1k86cE7nGhsQDBq8F6Y4oSqjDLRWvDcBfYCAoei6sTfiAD",
  "key35": "3soqy8M95qXfJpXKoS9DukiBu56ii7Vac9xE55j683ZYiVHdFgPTWmXxCRYxVhgeYXnqzGPkfghsMqFsvMc8zchQ",
  "key36": "2rahyM55TTZT7TRqtKU5YY4Pbg1CPZd9SZRAJkh2RZttfNkttCoPRZgskfbjrYQsnZrA8sLZQyeBCn9RAwj2WET8",
  "key37": "4nd98nzjFNVaAkDFM8w2XPntwQoRFALftWpajrLpUsvj7fNcyNDCD99mK2t83yGBHLEPrDANBxNxRGziAadSx5SE",
  "key38": "2rV2FJmXJum9gSpMmN5YsMjT9rEuozzMfGqW49EU2m3952q7oqEjCrZQ9bTLSFZk5LRiPVwcxpAFksBvuoFYe1b6",
  "key39": "2RZWex3Zb5pBgzzcDoUTtYNw63i99iTMFADqGEx64HEu8yhMsZdL615GxSyzrzWn2oCHWhy7x3YWXMvwcELATdfG",
  "key40": "4bepx1Pm5Bfqocaa6KnC2Tjt9UUkHNid6HAuGW3eihjMXcb14vq9bSty9Tq9VNJ3P6PHU489LSK2Z7oxwi3C98Lt",
  "key41": "DXJAZZ56TowRcfSeuL4Sa9EXEyc6Sw4eq7a66nKY9TEZ7bC89Dny9t58q7EUtLYquDGwobPq5Cy15yKoiARNXUk",
  "key42": "3oXJVq9T7YABcdWFhKCVTtVzpvUpFgnrZ3y4G92bLvq8Rou3dUofCvoQmr6WWhBNX8UJj8NtUimaxgafvrTgazGY",
  "key43": "4gQvUfoyDUoAMi7wsYPEBSDf5qSCLueSb8E85PVqqAwdohKUnmANvqZmPmxwJooXi9zA2Z6nVt89vmr7B4cpxk6a",
  "key44": "4HKbpD6thqy6tADZHymhf6RK7Fnp1pLS19wFjjzqvAPdytxG9NJKvwKnYtMFAZQuTAm5VQpRxKoEz5tp12iuAXLx"
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
