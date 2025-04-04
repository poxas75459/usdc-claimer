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
    "3nX8a7HpTt2iD6Q6YtLfgXGeXDe3jJmBU7Ky9zvvRQq3nd1Uaea6L7iNgTBSgM46FC1n3XjbwgK9XunzyRQySyXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49RDEhC1uVEZQA41oHjVMBUHEW4fuHotib94VbwEQ6u1csbvMChuxLF17sKk3bWHwCza7RpFA95BqEc89kvL1VxW",
  "key1": "VeW38DgpHGECwsZY9A7ZbhV5jAb6Jn21DWSV23UV7AcMxmX4ejo89UWp4gmvAiTnKji6F1yhkzgZ8Y5aQpCdaDy",
  "key2": "2LwTsK8qMCP2j15mUY5GtwPyUVm49pjDh5BcaHnGqMF3F4paC9QqnsByHPyvpAwxHjkQcffAeqNXF8wmt9a4UUoQ",
  "key3": "4mQnf3qDBhFrhd6eebcHfDx5GodrogvJ1htBV8Mqa2iZGWDS1kX9RkgJxAgSK4Dn8Upzka7ThxVZDpNawXWfQaU6",
  "key4": "5JEAM9TXr3fiAyrZNiaEv3xaebLgy3ixYCXuipRgiByjAYkX39W4DZaDddoFFM4CGvHmSxU83Vk1fh9b3E8vJqaj",
  "key5": "cHaxuovoSiHNxFW2EvXV7rXeHA4m9i5eMANXzeT2J9cRoXQ8PPWGcr1WUjbNGsQYziqNcFn8SgT4hKseXgTgjFt",
  "key6": "2aaZ5Ep2cAL3mPaF2sSNeBeAy4NVS5jj5cVpsuM3nw6Mm4m2MxqxGUk78m3XB4ovRoZLToKeUfwZeziSUsHJc2is",
  "key7": "5C2LyT1J9yGWt1CUvf4gQMugkXhtPuMU9FxanuK9p8FeRiyqxvykDUaeo5PxHhkMgDgiBTeH817QuMXoLm1fVdVm",
  "key8": "xVCVrQEKw97FgGoGbYr3reKns4ZUrzvZz24SfAMvT7ncg4wYkHz76yjqfQwdQEJtrQX2SKtV7V3ciwbdKnMsRTU",
  "key9": "4JfPn1utjf5BwhbM4wKS3uQWxZvZqAoerDC66CREpZVfXx3w611zbSteM1sMggeBeAucMnJo8m6sort6ErnJZiWY",
  "key10": "5nNZqRk1QkFwfPgBucsncmwzHswDFEUc5A5ks1kh1CADXhJtwxo8feCJG6wKqXgZ9yTr1P3v6ZVMLutPNLSKtWjN",
  "key11": "1KsppS2TxGjcgyif8d7LgQQPUo9c3iwoR5SP6PYzcQ3GxtKuz8xKi67b1VMHH4SaMkfLsyic5WdfK29C5x5Hdy8",
  "key12": "cP6y4gYeKpBB5M6vYmaivAgFdrnYPBWWcW1zeQFWMp8RsDTEwB7BXcbMBGwzci28ELowDkYGvN6LjGZEAXLTvjx",
  "key13": "3uXydTEzfx8nExcKKXbZ4ZyoKm1jF58TmNvoN4qyQaRXHvWFzycE1UK1bxZ2KkKYXhaozLPWXG6NoDqJCCUJ9xeG",
  "key14": "5acbMY2aTivAoSJWz2GwHHgnq26QJTYui7g7nC8H9hgc9b5McBxWHBmp8hosChPYYNPsEoZw2zYd2Kmav3hkDvCu",
  "key15": "5SYZHZzd6aHCNgHooruBA7XfHTozvisBiiGJsfBjGsj7oXesXpNiAppCtGkkjWnxdyzd5m4Y6npSbxCHEzdvFnz",
  "key16": "5kExkuUQa1eAaEPWW4ZEujJ5LWvJEh5ZSR4s6YFMCJCwSVkusD7bWr8b38zw4fyBJJuBGksnCmXswoBceA1gaKCZ",
  "key17": "3opxrKtJu1yatQmgVTfLEhcBRztoQARp4adEFHtere5HSbkx3YbfrTmDBEaSTjTEUcrZNQJfUfd5bfLgYnuuUoXj",
  "key18": "VkCQYX1CpUmzAK2dewdzHvPP56uARxVMAd1VQQdXmqyGbGQw1tbCCFkBjgBkyD6WvgN9Le84rh7AZpJQvv5KWum",
  "key19": "3wbvpEf6AYz4JRx56sechXCfRGX99xzhk1Zr8kFnVAKiLfRJuKen31MSZfrTRnfqw9pMMYWC51Z5bAxk1DAQArHH",
  "key20": "4m8TcZf1PC6Mc6wgBxx3x1QQqNC1JrAXT7AZXE46Ymf4L7npG4s33fCyzLhMHXtQjDYfebEJeGGGGp4axTNoTG8J",
  "key21": "3n6BjwrUGFMmUKKZ5h699X84rXwuB3XgjkBmWksdKAzfr9g4yfpNRivy57w62snra7q7gK8JbsifAqJUZhD2ZiHD",
  "key22": "5uLAVaLC4XJkEXwAAp6DgL7fpMnVp6dwjFdmiMvK1tvWG2swTPgNiH43dDrHL6aMvPNF1xgFxY7S7uzzLzop7xaL",
  "key23": "3A69CxasgpF2w3oHJwvvbtAscDdaFWsScft9fsmkJAcHdWy3mVmaWbg2AQztLX6Tup3aGeELPaEWWBZfGhDXLQeu",
  "key24": "33QavyQ1RZYi8X4D5tGCH4wA81Y27U34PAsjWdA2JJBJ7ckr82vq4zzZ79giUjSW5RQ49WMxZ9r4R9dWYMSQLsfr",
  "key25": "52vGoFrF4yqhFsWRbBN446H5fuVBmFeoCvLJYHGHjCLto5deyMfiVv7gdbx1ayktVEc94QLUmjKr8HT4P291WLzm",
  "key26": "3LRkXUe9zJQy6BLgZUyR5aXPBaXHPhj5a6BChxYgwUUGjHRxUQEUc8KPuetfQKLGswpHMgiSZFCRcFjZxYoHcdVt",
  "key27": "4EcnTdNnckqkP95Cpj368VfuRfWjf6gYv5rYakWui9zMhPGbqMVowaMgnzpsMM7XJjkCMRKRHGjx7FULvzs1weKY",
  "key28": "4nwN1ai99Q1iUiPTPwenYyWaKUyiyDJZhqJMKkdJdJ4xCfyXALGwUW1jDs2jYxit3bPM9YCmPzuzAoi3KdgFmdYk",
  "key29": "q3ZHWUZYjgCi8LXmPQZwSjZnfGK7zqy6BGmaHZbHzDa88VMGVzVzLbCt3pN2DwvphM2db7vxVLHhzCCeRukm4yu",
  "key30": "5Scucm4qcJK2YxBKkf4v48v5UfXdWJxkLntiWHxPcD593CdxTCJHbBRnSgKVVqBC1tXAALaYXnhX1C1jRHRuvWkT",
  "key31": "2tfKuq4fmLVUdDAEnpA2tBpcaLkLqmdZyPPsRjtEhDTiqL3oCybTvxqN8RLgCeaKKGvLuH1tXzpc5c6AJx8CxXos",
  "key32": "4cGEgb6oDUXcrorgodHnuMsRbsRevkgba3e2BSu48ppJhuRN216kwe8k7d8c1nrvyN5SaQ4CRvMJSqMxgKYyJeWu",
  "key33": "VhwJ9QEuxue4RzhCMRtbPKS4ZfuncyAa2D9vd1NHXRhogSM5NZh3RiQgAKbobEw82nKesiPZ9hrHnW7t7Zb2c1k",
  "key34": "2oip2GnYYoRr57Fdk3QTFNVrrKKz2hCuTN4RvUEssUyP2zyrkeZz1ULw3HqmqEbmVgo6G1VLZfYa7pfmRspt7GN5",
  "key35": "39k9LkzaRkWgu4E4nsG7zaVAuYtPhZW5gS7CATc8QV4YmLTrNtSD8Rmrc2AkPpWG441BNhj4fExcY77Tk2qLKNrh",
  "key36": "3txbtUAquBAdh7TmJ2gCu76cvJsbCNJsyqYFkG58amMWGyz12YwP6FjDP8pGCc7JvQP762uHQeE3WonxvPkhM8EJ",
  "key37": "4pGav4br5uCNACQasydWesWzeHchpSXLCwqUbSRsJvEpkEYcktfRbwkUACQ1B9wipVTTTs6ZrZcVvrp1BBoMztS5"
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
