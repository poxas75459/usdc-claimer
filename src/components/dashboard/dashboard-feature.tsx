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
    "4rL1BZtEvYybPFWYWMcECLUpzJS4vsdfmDhmbEfgVrhivPqzH9EmA3SMDxRxq9m5oTfYNJhbHYayxPHXVvFGneMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LdAXJLU2xx3i2vPh3vhns7bMa8pw9AGxaXKEW8296WsgFNHnqNwzSZUp5xaV3WDT7rus6DzXhNxGgxqkoWsmMsZ",
  "key1": "3NQcUQ6qZALBeXyDzogy7PMY4zsLVn5ESnutQbVz3oKRFyheg6pPhXTdKPQQMQmKihX8sgCPGdYL1L7EwRMVny2D",
  "key2": "cgmB4CGYw3yVtE9VzxzPXcCayCvDjBRxrDUReiEHhriGBQWgHiMp5r2cGes6UeimRrA5itDbnaA8YXTuGaSWfbZ",
  "key3": "ioPYA72vvz8MVdrvi9BYr9VmrjhD12PxcUWfQ5vhZn4bYoW9X7f3NVv47WYQcmo2fJ2d2PbnywGyVuV2ZaWvveD",
  "key4": "F1S9BnHuTEL34WKvMyCHFeWyra7YjWgrVSajtNGzJEQzdNL9nNutfpaTbnYQwerTsrmGZefaGGHee1w7Vj2LT7V",
  "key5": "2gvFjvmy1zQNzDKGfNXBG9xdyW7gL9YDwGq8TwxMAmM4ZP3u78XTDXvRtCrUMVV5VAhcz5duRwgEaYp14hcVxzCC",
  "key6": "EJC3XsLkXhgxSu41hayBXmCVDKxodXyvnRzDRYNQPCqKdXFGSKdRTwe23wDWuH17NpZfmfkujdf1AdqdGyE98bN",
  "key7": "63KZ5rsEqwt7Lrw7fEyweQJd42m2aDEyeKGbXZH6kv1tAejn3bkFGJk9eidbHG2q6S8J5tjtY1jxyhubwJqHEYwo",
  "key8": "5GaNSE6nTsHqAL5s7Lewg9hyAUM7LJkmGvZ6PaPp1AqHo3x7rKxHKstAp9t9LPGAz4GSGHAPx7T3fxK2WwXDqq7a",
  "key9": "5pXgYfjv3jZGC3doon7bN6umUmj88SMPeRGp1sd792wA5LLeAudQJwxzAgbxGRobpKCsUkvJWs1YVnkxwuJhh5nR",
  "key10": "5LdZqpipkRbRn7LMLTRXjq9M5FjdErK9GsuLd69Kth5bTHf21fkPZLwekSitafNEv1DjvMppwFHV1cMBnpKchGbT",
  "key11": "2jbcrp8gXvcLB4tNQiFduG7hVxHxW3yKywNnHYmkUhXJnLSVNQCyQEZ5APB56sSHAx1zb8Cp6bZKC2LSRGYGffvm",
  "key12": "cVGucPbsSDED2rg9ZzsniiKneqBk9MxV3o5y6VaG2dZzVsahBG98QyT7yLVfpREoGGWAzVeTfXxcRaqNPFhyVj1",
  "key13": "2MobuoGY5c5dZSsKgXTkc5sLWWmaKRyTp7wNiJzkRDEftGb7mELad8iwibfhGR97nENWHsDMckjZQ47wLLfsqiDy",
  "key14": "3uL27AcytxHUC6ordFEtwMBisrJebMkgbKJJ8mweoktAmy8gNyKpZmZuVZHiLPWZhdo55rCdK3eXDUZ7m3G7dgBt",
  "key15": "4HamcaeZtEzRnN4GA6qmeFTnUCrJppD69F4iMuM6FtgHQWS6jYh3Pav3PCvmbVNfor6xkhTRybawmx4a5unvmKL3",
  "key16": "2tSguxjoo69HhNeMSH1vvwdBxgJ4B4phV444dvuqzJjjaKQJMFs6Xm5wnCaiszEjrrQo4YxrjWnZ4ezHJFMC62cA",
  "key17": "5gWWbXqZhvumFuXamMzQR4iXNNoeX3kZndHP5VB8zgYkiB1MK1EXgm1eYjbVZMB7icsKq9UuS3UNvUSURm8p8vKu",
  "key18": "3q23oomunQyf9Hgec3ATRYbai2jLfEfX4BM8LnL1kUg9A5y2nGTXp99Jyf54DRDPf7S2FQW9VxqCQk4yXv9f3xo",
  "key19": "2z5vND5MRkJUmtJ13YxnJTdFxV6G27giRjhbnWwxj1zrkDZ4oNTkBMuXY3U68JsLL7sBYqZajVFFB8qHixtojrNw",
  "key20": "3sWgBtMpx8ihzbzJTg1gSN7PVJxUGzzdnHqV39ewRXD9S2oEHKDbrxvNCdy2V7k7ZMPoa833MTBU4YAs9fEmMsi8",
  "key21": "b5pBk11gEVS9g6Z9JKf9M4x9WD6tbyXLxAXwigwYein1fhD6z9psSwDYfDyxNcqJGWcBPKk58BPd4ziDy4mUg46",
  "key22": "3yWYC5vQqLByZfTamiHM27QzDzQzkDu6eK2VJDN3bcNeKNxS1ygcutrAinHc8ss6NXWFXTkTSgVVtexbbhzDYbtx",
  "key23": "27UgP1MwE9JWj5v5AYmW4MkCefPtFhGZPnzqzavcsJAPnwZSwEa3VJEQCnrE2BXTh2Z2xJnXkxzjfupGNaK8YSFd",
  "key24": "233MPLqj18x8FwZP1atGTfFDhCRHKok28ZYzyXQqnRgPBSNqr7EE8Dt74CrcvfgXXTZrmw6vZwW3DVca6yjrfF8m",
  "key25": "2PKWQaYLtKKXWp5hfgrh2736QeYnZ97aVtporDE8eFZMvKZjj47yb9WFBLBnC5F7XY43ncTYdcqzEydHxM5rq2bn",
  "key26": "2TmuDdEcZ1Fr1hSX2nVZPHEXbXK7AogkBPLS5fyZmHmrEzf3NQPZzTJchktBTDGvmJq2XJ5Tt19c3RXxUJJWHsrB",
  "key27": "3vVfJQ86NqJe5zCqzLPosKewtW8cSbELd32R62LKd56QaYaFuUaLs7KhpdCHFcafrdQXSGzpNunKyfDKLvqLmPCa",
  "key28": "2LVkoig5ksqz4bSm7RXHfZC4zVgNfMoRUZPGPuv25DfLyDxpdH3cJY6CJUQW5zk5naXg1Yw9mw1KekPFFe4FWmza",
  "key29": "HtGMS3jjc43EX2KDZgm64qe31UbmdEQidN3N9NzcmdNNrWVgfbhv43zVWouqLP5mN6yzag6z2ajToA9Qyqiq6CX",
  "key30": "rF9XtafsZeXwAELXXdnemJQcGjzf4zz8HQc1Bm3YZqCuyFTties8Px9EkmcaBMnEqNg4gdJBcu3PLGRuUADshPq",
  "key31": "2YhLK1YbThQiQh9GNLBFy7ptgbbupsTqsAzcrQfbC9L1hz8tzhW6HpECjHrXaBktsToQBatiQCmVEJrPQQmHeGC",
  "key32": "3F6ut3vzWMFiduVWBwMPWXSVbEcAr7kUeZqVVPgFxfyfWAcJQC9kTSrTYrQsoe41F2VsjZ5Q3Qn2kfb4LYwSzCZ1",
  "key33": "58VZQEX7xMbE1dW3vNd1VeWLcUfEhgeExYSGk6rzvgXVmVMhYnJPUVRWY2dNqCy2vdVKytYtxpukta55oXqNLsL",
  "key34": "2G4REXmFpC6YaX3VW73bBrx74jVGjoX1d7D51EXELr7QCJYmtQXN7rmQ2oCQjAzHLP6W1KWm5EJmNGWfHWpBnr1H",
  "key35": "5WH5yBbkSrjbKzE4SRjeAVXJTbaiwGFU2J7TFs2v2Xx63YTYKacnNAtAX5YwG23TxpnBn1yBChmS5yjiHn8udJ3B",
  "key36": "5kDQxtKNWDQoc6wcptCSaDv7c6udBUkTgyQSWS97bEMCVuJWzNoyvu1dYs936hVUfNzEMpFvHnBb71ueSbotD2nM",
  "key37": "4BEcuD4MvtFAgu34nPE1DJ2M2CHvvfioxJsLANa8TiTGGQBoNp6j7qNSTEbKC7kANNKt1dqMS7sbpfn27bM2N2uM",
  "key38": "65bERU4AyYquoujhw661wHM56XssarA8F7zUtL4cdKCjVbmnCLEKnBaSW4fKbVn88NG55J9wEeDC7Ds1QfD2SPYA",
  "key39": "5RVfA41NWqtMcBexTfJuuVyfXRfXB5XLsxKzBn5srrsC5dTy2XKKa4YPu2kMKhZbQA73iczUCYHW8VfDr59idQF8",
  "key40": "26xiJhpJqjhgmWTphSzhxByQxvcM3tyvP7NvxznMbuphDCKPcFJMy9YZrHGBfX2uEG34zuWy5DRcub5G8yDJkb7f",
  "key41": "4YW7m71QGpaQYCDDSr1Yk5z58higb6JrHzQm4UGMMz2oEWPkoXim543hMSDQm15ZPJDCyuaZpsvqTmNv5z5sf5wX",
  "key42": "5b86ywGR4vABL73pGQ4znTbEasCDXEEuZ3atiMdndPrsZxiGVKMyvmx2QZ18hRHnEy99CKVCgd5bcBWbmKowYr5F",
  "key43": "2moL2eje55nbHTjTxBAZv2ye2GN2T8z7dBLrtUgVndCnY7WMP2XXt5vQGR7TfaBHauZK72CQMJmN6jGGzb8PBAti",
  "key44": "3yFyi47HVWHe2WjkXHrPVZUKpYZTcLwkAUcjSpAAeAAzBUHiZYZfPEtiwY7fEJzY982aEZ4wJbcF8cQkn2xP53AS",
  "key45": "2zrHnA4ijbu26FxsKudbV9PnEpXL76NCGMHXs8MgttCXcwo5aqMiPeNW38zxfz24Ldyz2dwius4eUR3MRM3Be7GV",
  "key46": "3X5tWbr27LXWxvMc9kGdq3jut15JmS1YtSEKtqV9Y1MrwfDBhwHCXbZpS8FqH5TiwcNhya7dsFG7E3jZpTHUMXtt",
  "key47": "3hvB6X27mdapWQDQF3bNAZAdSMaepTiPVpnnZRtkDQZUqx6mTBdhYNScUfQaxoXpyuu9Yj1vgzwCmSjXtW9TfCui"
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
