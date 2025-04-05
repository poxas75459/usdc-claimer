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
    "5YDjVCrd8AEuJ2X6iNRNsD8P7qsnyZGxHFAsXQPdDXyeHD3rg9CJpF8MSNeZ2MENhkKNuw2534C5hpNmjQ58v4s4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VX3UCKWAExHTK3PR86V5xXNbC16kiLiG28mLmdW7BYZErNnq1KhbwGtEUJqTXjveWrMY1UrRnbpoMcic3SYK6cj",
  "key1": "ZsF574BBdbCpiDgnPoGF2dKeEAyiGroNzdbsAt37QD1NjdYATogyaT2jVCvTVU3EiTduo4gSCQGG5iMu4PrmMSr",
  "key2": "2PSzgEMTkbyFCzuDpGASGBvGXLXKZ44APGKBNSR2xguyaXF44zaY3GVKLKR9GnSSFKZZtVs85QbbjQCxeJMzo2Jx",
  "key3": "2YBB8u8SxZbRKDNHQfqCYbgyAXkUE5ghptVdPSX84U9Gw4XpuE278vpRveT8Gkthd2zCxE9T6r4usMYNhHuR8j5N",
  "key4": "2VybY1aKWkBCpoo5Rg8MtBYU7GtKubMaNGVhF1yg7tz6d2XSujmR4WiAvttWfXpLbkgNy7DiSGJjjGoJjcRYxqkH",
  "key5": "3RsCoBFyipxdJvCVMjZSEGugKUi77DEpsaZgcins7ckao3jDtZXrpWBBP1TJd3FbW17gqEKhjvc9zjsMDE9npEEV",
  "key6": "2SG6NsT7Hgk6LXUBtBgVPzyUuo1PU2ixWnH64J95FyKi1SMhSheQA7LgKEHhwFsttCsJQrjBaFQt13BgdJuR8nVd",
  "key7": "4RHXNJAfAEktF4b9VCeGLpFpTsV915d12BvtT7WcjWTcXXzTnq8YutHpQjgKw6Hw3b6anPhdUQqYTGtBPwGNMJ5P",
  "key8": "3moktujCYPdzkos4xMzh5sDnsDuJUA8L1TPJi8x2JQNCpsvUMmcJRGAthqDYCjQoLcvD83L4LpneBMtiEfv3f1Ts",
  "key9": "2UBiBFATLrXnDeijDm6W1x7nogR1mkpYiuC77sw1uYyB7N4wFwxwegsPuyY1X9fEY3ZNeMEbMaUUaim5tGAGZsNN",
  "key10": "5B2YLeVniS4CTyxdTfdLTGUBknAdGRRgnEF32FdTvu6V32mQxcn6ZH9SLtS3XwxHovwdrxRyLTJ4pFadX9aYzFPz",
  "key11": "65uQNnsSxKSksFmaL2tbjeZUG3NDZQPBKFS74FiSpvf8VXpzjKikdSnmAgpg75LuxoLjfWoDQeySV1hftqdgUEjW",
  "key12": "4JquXRhkfbbXUJuSjJ6k6MVP9RetG5RD24KgH71KxMY81qFPBUBeKfmzVZFAtwVpEubx1JE974cW5XyUY7RvhGTT",
  "key13": "zFz1JiuJHoynEgxsVy4QUaaxgp37M7VvXTD4WJEK9j8dyiiNhvEWUswbL7fbn3wiNRgrKmbxxR913uFtNzhBeCh",
  "key14": "4iCMyj2SHk8r9iFzwoe7KXuUiZ7SgDmY1TCkES5a5jvginEozMxRDwqnRNWtepXiGa8U25Yz6diweftTVtuMCF37",
  "key15": "3jksA9i8F6WrzhLj4AtLCd7Auivg9jQgq8nr31B1voF5VFQiMa3XgEB2i3nttEDqocD2rtqUMCeXiEcVV6SibEiG",
  "key16": "2uxUsmdgM1q9FDV6ihK5Bdz1mi4jLhttY5v7nQTRsEA6qzrxBJ2pb9HimA5JjCQ8ecDkXVAmFpynWVZNxBrHeepu",
  "key17": "4uqkgDMUMmxyprndmy45xGJpkicQKVAiorv7vCkiMkyWyq16Jqd7AFimPUe3RSeWsPUkNS7XcHhJDrtcp6bY52if",
  "key18": "5o4rV37KkCyGScGRGorf8mc9YS6HC4tvHPVi5c6xWJVqqoCWw2mgqzVaR4RJ2iFyXhcADtECFtViuQjCw2PPNVfC",
  "key19": "5XgG9yQWcp7gqxSEn7t2DT9i6nZNP59ThuwFEt3xJZpf4XnTr5eWCuUCjLwzpzEPLmCpWMCVCyupmFVeXt4c3u7U",
  "key20": "23tqmfPnWZh9coDNV5aDaVwvD8k17C8JE6KX3VTpMJyjNdHiuRmGoP9Yfq1tsjkRt544FKg21AbWAsr3KM7gKMLF",
  "key21": "2GgMSLvmN2RtjZKnSbDLRCUJb5k4X4ig7uHnSHBYjerQjzB2oKj6J7QHBJ5DSZEyPbtP3peawPWH2fo9bLhaxHoE",
  "key22": "2Q26CAhqbCp8zvyYoyRqAw7muYP5uCSwjgwKv2Ec9YRrdnjy9bsuNysKgAmuFwYiMqPDtjziAuatnXEGcq668sZy",
  "key23": "mWAQKoygRfQH7NC3zAfnasRj2Zr5aNFppXo8fCX2ULS3D8CxX5WPWTfVAuE4iSyknAZvZE8RPaE1ue3YbQRuR3M",
  "key24": "5BTXXQM3zyheydnMGrnrfHrwD5yusVLJrLdJAMpkMpiBdhzvhgN5W8qMWP1a4kGHbdRSQBVnUfMo2kCRhQKV4NMZ",
  "key25": "48hWyf2hVod6eikW3ZSnVoYCPibaDLhKgxiA8fH7PFUaTZ2EujMyr6egaMgrWA3k2nWryNCAVec8BU7yVwSvKN7Z",
  "key26": "LHNcTaLqH5wXV41QoqrmwJLvxraXUcQZuaGNWF2hfcCGfmTbNSptcYpwLfQ39Nd6EdpJcyoczZFo9Xxrsy1ME3V",
  "key27": "39wn1VGsqvYKybZM9Mj5FqVZ1cPwreZogAjdFcvs8j7pH1vD9UUtV6FzfBdi4bMxhnikaTGQ68upKs89bmZV1onR",
  "key28": "35nnw7mvUDYt7zTspvGJtPi8MGEFeYBjcM8vaQnd5JdC5J7xYKv2D2wnZYatYLYVsZ7JA4o1JMxAFXwG3uKW8xsv",
  "key29": "5DEAdKiTe31WUyVtk2S43KKT2XQwgTi6pYnpjcKoCMykopZ3SNc8CPVVqbsZRbBfZ9icCrrX4aGdkuewxoWJMJp2",
  "key30": "2F9CFmx6cByaR3hk2ZP1JJ1utE1wYZV2rPX5LUndFeU9zwfeSstqkcEA86d1gR5Y4Ku7MfGSQiLWCjcHGKGCsAhZ",
  "key31": "2orr1VheR5tnaPKQwJQF9YFpHUuUgvy6LtQhRo718Xd7JXzbEvj3FZHDugn85U1YXKhnkyqowaJTzayGNv4TeZsy",
  "key32": "4zZ9ENaF2EiiKq7bD8CmF7tjkE3gYqsia9RBb7socrZbLtkiDb2jg5XoRh9khhMpaPieSa2ej7pED7y3pAX9fPKS",
  "key33": "4ACbv1LAnd6ganY8KnaVNJ7hUxWteYortEnzbYvDZkDLDtfkvGf99eu31wrGkDDJrNMCDvdrKXHNh8CK87YbNgs3",
  "key34": "5rZ6W1SLcCPvRRaqZ99iZm6hBCQPGQeoxrYHjijoJHh7KGx9YSFR1wL1ziEUyTkC8Ca117tuqHBJAdHPpa5cqpX3",
  "key35": "3iGzwx7uvzoWrKbDma1cz21bJmtMaUF1ZR6JC7dKeJqMKU66vpLrvUwJ2nCZPMEmhXtkdL8Un5FRukTxpduno6fc",
  "key36": "4zg4j9vkmsjCQWku9E24kHQ8q9p48zfnQmxY9R1gS4NvieEwqBuQCjazBtFu8NgffmKxjWqExzLiRx1UQxrKHxi4",
  "key37": "5PTEvtrjAhAexgjdxPp6vxpn6rVYEmVigS8c1RnvHooou14BV64uM4RYihVDswDeG2gM4LuLbSmh2imCaTh8U5vR"
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
