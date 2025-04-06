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
    "2u66Zd4XtuqP25jfnyBfT4sG9BNNzStSxftTpUygEb63fSeNydi9iJpdbdd6HVKTnEKwUQPPyWukYJAri6jbU3nW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41NV6XoAbUhxMCMN4KW4WzgAiSS9i8CkjHuS4NhQqxnkY5hVEYxSjBDfDDx1rdEnLDBCjXFn5NLTTcQoUwRnyroe",
  "key1": "473H38wLdegMLJDcD6efLvKCdo6nDXgXjMkgXh6cs2iRsmCrcwatAr6GQ9PmGPqjWABx1NfXQiJevcF9VGaM8Gxd",
  "key2": "mnADvWsXbQuSnogHurhWbdUAbEbtBDXaXN6YiCfSMishtf8ng2f9Z6Nxjv3koouKyhV4nmRf4ASTuLCN5Yt84Ch",
  "key3": "HGsomqud5n7SkCa7xznKDhLp1ue1JFb3PDHN1tb2Cz3TeYrwrDSe7qDSp9T2hVFC8Tq8P8vFpUDk65nc95UmtF8",
  "key4": "4En1zPSncr1iUKYf5xCrbEz8cE3PjEHA8UwpctD4ScS3ekgN68Tqrf1DFYK9buuYoJHhyrw9AMVt1DZiW8uWBLop",
  "key5": "jWeR82hDL4fqz7YKZE6axumuGqQzTaMAdUvrEQihb8QDN5BSxZysrojhLGzJwfKgwATD3L9GkJfMsutWEDq7ANJ",
  "key6": "4PBwJC55MzH1WX8GCprf9mEaTt3wNp4cgaZhhkfqp7VbhagUje3Ej13w9qnhACHwGdEXTpiYRBsjhNykEYuhEeh4",
  "key7": "36BGGqfNce8F2WQVLCNL5UFdBNdxV8Q3dPYZn8FdsJVfP5ZDLMYzfzmsKkUpPFFvEsy7HWfGfWrihySHZ3Qvqtr",
  "key8": "AwBpG95rjX1pxvRBTHugToVRVwPhryG1DWRcfBB8qSqVGHFEF9ZNKGqRwkNbbRyLKhMeBfBMAuu2e4czkCPHFBP",
  "key9": "wWiQYMfxaNghvp48h9uLDARKnWGR9dDbcvu9n5mgYJ4jXHWQYXzZuV37CLMcDZuFwxdMGv8gcqBg2xzF96XfYaL",
  "key10": "5fK8dAZNAR4xoMjG7D52xXrcSMuFaBNtucNj2u5yiiUuWvV88ydum8j44jfk4XrZEYiRjDAX71u2L2nVu7ekNpb7",
  "key11": "8Z3bW5hMB3YbUex4FYqSZt82JxbQXuPrUfMW2JVNYeoLdG1DNgb3R9CyCoFL9n5B4GpxiuWJBEkfm6uUJ6DL1Yj",
  "key12": "2w7CAdL2T7ZsRMycQ56pVbfKnSPFrKBuDVZwBNdNUhakvDgig74LEzcUdXSi6EBTU6v52a4oYBgoShXr9yDb3mfR",
  "key13": "9uyu3hWRbNCHz5Hs8HY9HWnJZfR2PHoJ6yL3y25yx51xBMNhnE4aQevTHLkmr6jRm9N5K9FrPVvshxnrVKDp3J2",
  "key14": "5tjVhkptidPfW96QjEg8yMaGnsy9iAErMYW3EkV8FN3duicZNKYRmiZkyGfNqjuPaKDLfYzZhRZaSnejKM3BgRgX",
  "key15": "sMuNNCWaiT6yDEdCBRALt6y2nWnhoSpe8WY82GQGuCoC9NBK4XUEPwofGt56Td7pig7NXm63k3cHzUjspAB8eWa",
  "key16": "3KuQp6ocge7ccsVvWhjsnJ4zKWGVtVXPCs93NDjnwJ6vCEnp7bKwYn8ujKwdDZoAn9ckDycjGBXTmodMQFX25keu",
  "key17": "33uEziFtKatUiLBCejo4Hp5BhPPgzRmzfWgmGThdEDgAhU3HNTxicgaf8PTqWLbENskKMd34Murv2KnwLfsE5C9X",
  "key18": "SELw923Cj2ThQtR75nhHkBuUQWGUXij2WagCGqyxk5Yx9Sm35BnRzu9x9Qn69pMGthVUp11ufkBLHdvpsdobBPn",
  "key19": "2gJ2xGMzk4ngwLXeYpN1GxJ8rH6Ls4SSWMuBYjCiHMjWieRH13yJ49YZbdAWXv6nbgSupxwSyNoy7DTDWS8mxSbo",
  "key20": "3hQLAj3QGnE5Do3ZZS42u9KmHjExp9EWjgeJxS5Z95HTLg24gFH2A8jfuHBCS48XmjAwL5tCAcPc1yX9WsqUdFU2",
  "key21": "NuFfX6kTWpy2LW4PympdPDAcso6P9UhiJUqdEKKqPKuSwaEB2bAasC2Q1cHSYwG2hEPPAmoLcs8npRZ7pbESHex",
  "key22": "oJYNvuJtCyrY7w6QUyGHqBMU8w4yevoVvVNbqkpD46fVH2MPKVRpJRJ1GiYLcSci3Mby9Y4M1eF4DYLJXBs88J3",
  "key23": "3uZqfNGp5WYW6tccK5gEdqgrkgCspNbNbxG6ecrivYd34G2CdzyZ48oissBDaz6A4g8sdQxego9wPy1WX8rmzksh",
  "key24": "46Cr9yTy2zktoK9Zz5fiMaJWK1tXr9KKd2Wmjsu2iyBgnycHmKcmwGD4zk4DYBnUtasyJesGujGPxQtnyQNwexce",
  "key25": "61Qp5u1NctnYRZYakE6X3aKSLcWoVE9eSYgfaTuRaFjnCCPbrfD4TqYw6HRnRcEf4Bmix9sn2x7aTNo34R9DuXNW",
  "key26": "5ti9McNZ8pvLwH9FE3zKTThet3ho1SuF63Nag7Z2g3LpErqYbA7NpEJHreTTVZBZdACaWZBGdGD2oqZq5CSiNuMa",
  "key27": "25H4K8NTaBU5u38WnThqGRgbGWLbknMC3yqeqhXMQt1TV7b4g87yg7hL6FhHGnVzsEMotWBySRh9CpdQaUqAivzs",
  "key28": "5kNACP8syirctt7aCihjDEDim6yfHMKjHgoKm7XrMvWVmmY2yMv7knzJri1mGxm5snjgnKiCFhjmSNySmaDyg9xR",
  "key29": "2P6cxyorsiGRcM1mhr2i7MoXA9TLtaRY1raAv7waNNnZos5tGVsUpKtak3ZvarB8yZqTW4b35qKPTB3S7kqJoanE",
  "key30": "cUWZcybeUupFrBQD7hL8zmAN3mNtutcuVPMRJVoUBB698b7eGhgc1FNThswrssFni9L1VSH4HuSEDwiFKgrKcyq",
  "key31": "3uk3AvVcsqC8qQH29Jy3UbTNAjLCvkKwiygJsrjSsrjfNVMjBLmTtbqAtDuHufvgG7NWxoDjUnrQs25dagKdYQEL",
  "key32": "X84X2fwjyFE62T4ZUF7zsC4SUMzRdEXAxP4a9A9DHbeK6z8Z9Cqbn7CpSkkYH65KEBAHNWC8Hk4Kv3JGbm7sbot",
  "key33": "mwof5iUXYPGsuUX6PP8C72b9iQBRPce6LoakQzzAqPhmdBhKvZBvBTa27sEo5RpW7FnHmZbRDkgPrcZVRRXGfVv",
  "key34": "2uvq6ihwew84ehTGBEUY31t1t4uBQNgSm79nyncZYiX1edorrYpxJ3CRkKbMiq8jbqdr14fSLhQJ16a83XXAaG4a",
  "key35": "5jwGTKrmDrJia8Eegh2ZF9vVJNRqTEYmVNf9qsgBxdb8yUSEtiXwYCXsUUyh3q8ZzyxN9CvSXPdvBaE1AwU7dL2J",
  "key36": "4woahz1ifFeu81hbsD8a4jQe1jwW4N3ZoAF4zGkhLQbT89rRbUzjTVXD6n5PMKJct97fkkHZXWtc5ujo3XB5Qknw",
  "key37": "31sxUMeqG2V8aPtzjk9a6EXA8Rkfc8ofrYgTK9prA1D3MbAsLoEa9ED9J2wPaB5T8Hft3SGufukceak2H5QPumR8",
  "key38": "21M86CzgU8xavFfF7hzB8qfD2mouNvjoWkJU1wNfRAxhAaBpHMLhg1nXjX5PJsPwgqFRAGMKxptrG1cPXUQmKDdu",
  "key39": "3JGon4pQLBjXxfBc6dfjM4SbKeNGUT9x7Vn8gRkPaEmCHBbMkmNHwz8z9knvdoHvJTdLjn3KdjN4gzBZXiwLYtBt",
  "key40": "38AydxVx3uN4JBwC3fWbjt6TiegBxChHtufNb3L6ZvFkHP1pwnzbmMUhYayV7eYgQxpvxLE6HcS86kZ1hzTA8L6P",
  "key41": "3pnNzUQSTXtQWZd7P16bvc25z3VM1FxTxDYdDfYuaciPC9mwSD4kewpJoT8s33YiRvi8qtixWEqvRjBJoobTxSoy",
  "key42": "2kEGUaTy64STxqSy2DyYme6h7FxSQNd1CpPM6bK5nUBPLjY115MquCjTsEmboLXDmBBF4RLWncdUe15V3CeHHknp",
  "key43": "5dtLcddLnUUzVv81atGwnesov8Wb8EwAy8wjqYhApfFr93TMSK44RtnT8x2Zapdmu7B9LMhW8g7KoRQbDoHhNRWK",
  "key44": "5M43riZKdjLGB3iuvpBvgDN761NZKTSHrRCBpvrg3EMEQ62L8YL3RZX9tsdVGRFTm7q34v1HXL4GeiKunhnw8tCQ",
  "key45": "4tdjJJFKQTCk6FLkqxP2gjn7gH1ESSWXv9B5nYsLPy17ApPPC2QJLYWV9jW6sDJvehGzjrXurrsEEWsBNCqE51C6",
  "key46": "62ekwrXFwjUF7TGZmJ1EZT6uuL2Z18tLK6MhQXdC3aBH9RScGEKFMJbcyUbfGmwC2RsMM9FFbXjbBTi2DjiU5yAa",
  "key47": "4B6U8JZSMdxKKSwmKimVkzwz8mSPFj3fDMAuVV9KFnGeseM6yyNWGL2QWGymQXcLGaTqA9MQHPezE2TDANaK8yGQ"
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
