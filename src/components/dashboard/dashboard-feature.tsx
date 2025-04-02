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
    "4td147e9mWThyH7DEvBbK6KRcfY4P6eP2uGH2nkXuFKQ6171HKtLy5nW9gSSdXh8uEpc5KDN6cTWyLWgcCLTgERZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XU5tWoZQrWhAEsWBbbHgVMPQGTFBK1JZCFioQrMQacQqKScdZNBz5vxkFZwqLSpAPHc7op6AP5kWhUuDBtpWUYK",
  "key1": "5koJYhT73jFUiSwEweNoCEzTSfWe6HtoK8s9zq53eLKakaAKNZXz6btSSnEDQRsmYduVQUBBEmrebxhj4gjGFGYK",
  "key2": "5bGxRiEWxsxeMGz3DcLW1u8twRuNrprqScpn2ZmgTg6mqVZMCsAywKHeuaLJEwvinrR19ziSb8NAGE28uEy1xhzT",
  "key3": "4ZRqmob5MPmgt7tkX91XE8xcDzowG1hGtP9jtnDfUFAhP3h1cX5c8CAF3WYav3HrMQTV4rhDs85cyjQPUjEXAsqD",
  "key4": "2G3yCe7zhhY2YqkzRw6XymYVjdAux9GQxcQHHZcwQwq5ZsAJSkrdMiRso5acP4mZSQ5bsg9C4roLdKgBgep3V4E2",
  "key5": "4pPuazC8utNwDDbBEC1TsB8vDjmBg2Phat3NzfYTiE8haLVoVNCEwWENUnW9MGpqKqDfoQYeW3zVLFi3XezXDzHb",
  "key6": "5ZUY2ZKX6j3nvZ1mhEKmJDjFzngBUT4LNnECbWDdnRpv9PBtYMK3kkowjkExoDQjnQahEjgqjTP3NjCjPNNKVD3E",
  "key7": "3vgE2xFYQUdKFsFZDHoGu3mxoNvvhnziLsUGd9Z4opdRy6jRVjtdaGDPZD4coiHRJfYRz2ifV21a4LahRfPKQ4vo",
  "key8": "eNA8rGu34tCpRLHfA6V8vf9gHkwCo2J3S7renUBNwgTzcVxE8iUd8Xcwy8Z61yTH9igkueSXdLi5UGGSw4ngGip",
  "key9": "2e2p3YqMGiTPYeKJwsKsHxv5XLT1zPBrdpRod5Y4oGot6XRgbqKsSnnzNncxKad588Ka5nkgGyshEQkS7dNrNyjU",
  "key10": "47eiZHAbUGKELa9xUTXh7aSPVhFqm8UQKo4r2WbsBcreE5P754NShhJmVJnpkr9Qi2ait27VQKGiTL9iqf7FrptG",
  "key11": "4GCnGxF5heDTbkb946easVRFGaFuFoY5aoumAnGq5p34PsfGwku1CMeBp7MWRvMcRCppDzp3D6mpSjhXkJUYZnJY",
  "key12": "5u1PXCPbSfJpuyKq7NgaVokUtTYRtXQ2yYGkCSorSBJ77rbi9VchtGsVLGr1GKHyDMsPQPxjP8nhxXKKjSnWhEhr",
  "key13": "5eKuT5atVf3G2vquFPm8bTJ5kEVzKhx9XcKz8xge4qH1DZBNBb5yCk7NbArc1peXJ6LJ4Cb2wnn8BiojKvU4LMK2",
  "key14": "3KtiEbTGSKUdK9bnGr6YApdhtVSfEiWnz8o9og2p1v1cSzJ6AJW6mrJ75Qs9CLzSDePK9nWFq9esxCnCPkWcpD9H",
  "key15": "35N1ERMv42BxV82CU5ARechAeJ9w81w78nzaFGw3bzmeuFT2DL9WGQB95c6hFonzg5Poy1guV3BRPJRKBVuXcZ9a",
  "key16": "rmCRWZrTif6NpaaFvNFa5V5jnTELVVKaNS8sCASexPyBo6c8FytTP8adJiAWwSdumGBswKjcSE7XFnCHfXWDZPr",
  "key17": "5SxuoMTAiSmLuhQiKWFf7PijxyPE7YUr7S84GBNFifbAtZeKTCoamYq9cZ1cUp84rNrUiitzCmiZUe9qh8rQkhTB",
  "key18": "2Up5kEyL3KvpWvSDPUwh3TtjtQjUXKF27vP65US7WWe815yrHmDMLHUpba5gThdL2CUYvkeqjp9K3XNLLUd3LYnc",
  "key19": "3YLsGXKmLyxB8UmUZW8i373snjVcveuiefDKbACQxCRt99rdF13TDVqfGzAr7yC1BGwDv1bdYqKCraNExXMStcxY",
  "key20": "4P9YuYugrqRbVDtATKa2m6UEqTkhTCJxAv77DLQMHfSrex9snvS2eQAEJ68KH9D6B8BgHYcrqdwBqc56FRXgrtDH",
  "key21": "4fotCK9RmVcTdsM7a3wQDgDPA68cAKk9HXMp6TaYcJbGsCzveR8LaSU2qoGZNe4H3X6tB9pP1yL7zVDpvAhry95e",
  "key22": "uRmVJ7tWUu9ehj2mQpTSRVaPezZe4Es2fgb2HQe2kWuhLTfMpqykywXS4w4MAEMYqpUiMyBqQiE5TPv56ziocVh",
  "key23": "NkVjKuFdqdCEVVk8dsyEXjLdHPNE5Pi7YvJ2U9ubSnrnJdsRkhsHfTMnJwtWV7C6aUzSzmLDSScSR2575iJzUDQ",
  "key24": "NiEMgYSYx7eBTPsMQW9CmuM1wGJ8o2qpVnULDaHbQ45qxQw3N1cxZbDT7SsyqZ6DQ54XyEDfUU4k8kjMekgYMG6",
  "key25": "7LX5RoGJM2eQCXmHjZLoA5We9Kni9fCyeBkoyegJMJuPW1FPiVFZ1XjHGQTcdjqWojy6pJTWdB3oeJ5TGyvEDhs",
  "key26": "4PfjMz15VnYU4boFRJr6D72ARFJge7ZVq14hWhgZgEAEvV9cCDskQAQTzNdfzg7ihXWq718BKrbRFSEhhvm3BWF9",
  "key27": "5a2bzQevDmERqMVgr9GJddTLU6ErtkCgykH4TQRnNzZLLtoCfCeyijq2wqTgmiUKwWsEb1fkxVJEZepxAa7mJPBb",
  "key28": "2vj8mTNHaVCHHYZHjsWLqn2FSRerntqi8yXrqxa5NC3X9G2LnWWkjQBPGZonn1uEv7D6AreYjRdDthPpmeoNgCU3",
  "key29": "3hHxNYMJfdhcWLMoFgNa71C6zJ6ba84U5xNdPT33fbaaDmTMn4w4XiN1J1uKwuhLFgzsnpVQJQ6mUkruirAbUzZm",
  "key30": "3QDrAMqcX16EWSHzH5UHGh6YyJUkcavQFVExmFxJNfNHNdJRT5CQrZNDmSNRs3YU4tyWQ8WW9mVooLMLdVHf4vaA",
  "key31": "36iYVpCwEP6629DUBKfULY4iM2bUCBBeTVxwDBSLrS8SCMxGwvPBjBEZjSpN9rPJ66znFsShSVo99MiSb4BFJqHj",
  "key32": "3fTw7XLihkUSzPzAVKe5HG2qxvam6EsFPo7vctikAYoaY9zy9qnnzK22Z3KjqS9qc9iByRa9WA3EGVDnVNcMjYW2",
  "key33": "4KuYVJEAeuqbtgQoVKH1yKvd1teUPg5hSYNCJMSWPYV4qjrxT8DHMAV4oET2HLp96e3kN5zcBmvQeSFcwMqqkk88",
  "key34": "5agvHb3DqNwQdYK7XnkWbMzzm7okiQMUy69eSGbMf14LYzkPYGA7U68uHsz6p5QRu6QWktjzNVX77A8sZype69kn",
  "key35": "4CTcCMGox77fHNpm2o28wZm8SK7Gxby1yTmi5anMH77Vo65pMJ7BKJE9e1aDmak9LpTuVqAt662LAN69bJX9rWNm",
  "key36": "5coM7n4jTqV2MNHJtmYjKYbb44w9MzY8K4ndTuT1usUbUC1u7EJFekNWj99YdwE4pNVhNZxLbp2q2LyJSBjN8GB8"
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
