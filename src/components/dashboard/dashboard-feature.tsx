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
    "3rfQpMzHp4WY1Wd9aPqvJ2ubyiJKModrKbfJ5usfU2Rg6hnYaTKs5zJacnc2AVBEm4FDRYrnxjSNBgvLAUfBK7fa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pF2v5kFEg8ayAY5epEhDBb1cL7LWbd1EX5Fk1fxaWvUzZsrbn7ubJaN9uBWWsF1jJaPPSP2hkD5F1oXbiqrd17G",
  "key1": "4rf9mQs5tfBra1iZPHWqVGWjDdDkGTH5LYTFqFbk86BpdYxehYMEK2CettTna3BiVhViaCMcuYzvBxPZtKoeZJFG",
  "key2": "2fsLmVaCYGwbAQxgmKJJd7Juop5CRp4XAXEiA9jEAvh27JDdGCu6JcXMGbR827qoWfcMYoqePmZKWa3LePUzij1y",
  "key3": "4iw2ZhHY8Rxm1BXcaMGvSLVDs1oxzguafXcsKGdziSciWraPm4to3mf6CmLpFofkx5TcKJ6pqsyhPmy2z432juTQ",
  "key4": "3n7VofGjSJa4y6U3ekY8TFP8gf8v7HCeKAcAGrjdCBqaBdkpiTeHK6Tznv6nvk4rK8sk5iZADaLzk4WcKcqz1jhL",
  "key5": "5n1BZUGFp6U8FRfnz1qrQwgJxEsCkg7rPj8HNvBqVz8bYpZnAbQjTLWd5mz3m26WFkZeX4AoWrPbnZZGc7JC8zT9",
  "key6": "3SbJCBLksSvdmuiHQmGR5J7AmJs6BMVENbdjbepHfpuivnJ1zb5y4THQ1x27PCUHR2oMPU71vCKtxBm5AsAQNP7z",
  "key7": "38cxpFXg2Duq8G3vYJqwwZyMrbCkw2ECMgsRWhZQFUYUjdxG374mnHCXrHWBv7yPXVvHyPRL7eB6pcet8qmhZpZR",
  "key8": "5X5Q4WxvCmBD18NiVwHVQtmqzLX9gCtfeNMgYiVVUoFM35QC7E7uFhumXvqBdtocaYLxqhjcbzKfXWHiqMve3QYp",
  "key9": "2Zq5dvDEGhqvuPcBMofNcyaKxGksQ4UbwVCUoe9HTG4T9yHvoVBpudtGrDPTRK8N6AAh76GWprtMcdLL7PLqQQW6",
  "key10": "4Uy7EjGnmY8siVo6C72jK7HdvXUVsaVjtrBcRqxmJVXVxGQPxx7qfaGqK7vAoQ57qbRdZMqztg28s5MawEAjjsqd",
  "key11": "32pSa6kniKpCM82AckihQgBypKFFvmF4onNYjF4xUgPvGjffqqMxVV2qMUmCzf62C6McjzYysKvGkLVvUHi8KESE",
  "key12": "3pGEr712v3pvepbpD5TCRZNvCJdGccNr9ieYMYSYW8Ffep8EtVRoybnqfhXkJCqoMgYEvg7KvDEdddNRSde4UV2K",
  "key13": "2q1nybbGzY3HJHUUbxNHi2oBLT1L8zmVasKLHFEwbcmG9HXCxVMDodQfkRnXXFRKoYgEU4fYFNoH6utT72iQAq7t",
  "key14": "4uK6VAo1scHYK6u1zrLfXm9Fb2CKn37Z2hVDUbsUJmVARuvycyWTUiKJBztsFxjNtYjwKJmEaGb9JH98RnrQbstw",
  "key15": "25CLjoorLaruEVZiK1kqJCztdr2rozQLWPYc6AB8WuUnpihsuFbLkizAoiGcAMmu4bZ1otkByGitBW3wyc7KxpDK",
  "key16": "eH9FRWgEVJxWEBFAmpHCxfrFRRAgHpDvc4p3oy55WZsXy9YjarPTxojQXoduBY9m3WKd7BQzJYEiMwL23a4UPBm",
  "key17": "5z9hYeUff911NQMzuFcRkm74PDb3tLT9SAnhSWb67fjjhjdsWKv4a879nEdcJ2uPbnXUt4QKoc1T5xoBsnkrBgex",
  "key18": "5qoedn3NfSuBtn6UdH5zF5oKtQMUJzNphrj6LFyRZkkYQSaF8AVXnwM1K1KBpKPfuoeNYKVm9Q6qcmuB3qiJRirQ",
  "key19": "4kVEyvAbnqntMVyvR7CFHuavt5ipCNUfxSAabxjcPremvepj9scCQDj19JecYDCQQQSFu7XxTJCH4A5Vo2D7hxL5",
  "key20": "6M5MkWvh9HSvMJcFAgcxNxekPaKm2HpP9JX9BRGbVR1S1y9WKjS4cyzPJe4v1hoNuGeacB1xPdrvgw33tuPbuah",
  "key21": "4wZKXSYQdVmh1hjejEESfKumpbhib6M7K3A4fRSqb1tP4YcJVMUiDub54FKbV7Gi3Ptj3ybF2nNbEF821FCSm92t",
  "key22": "4NCensC3Hs77uPkjFzwhJxFjrM8SGVNKHWABZhbzYVsbC4HmTsVv8TSDeGZHwfMDcvZTViqzxc7YMcyieqm6EsDh",
  "key23": "4u41fHXX6Q74Bqpj412dhwAM3y9aLVB6hJ6KHVAJEs6dCxkXKe33RDwrHYXYcPUJKHHNFHksMSwaFeKRGkJNptg3",
  "key24": "2SCNdApYPTDrC8DCuwioxAhXCrgs7tEB3xvxJHfutt8JMTGVgCS9LbjVaAxEQNBFirXo1tujJ2zq4Jkio6bEZLc8",
  "key25": "4gK9Nn2tDdHV8oK2Qkcu6jZUWMreevAyrjCfKaCqHvNSFhGnX7bcFNPwAMeV5nKiRM6afTXWgtZkYqe9yrRGjqux",
  "key26": "2xXNAymPGGKN3tPPb3aKdH8y6jJ1LhFFAb3RabdVDW9mjki89WVo9sV3eHVY27T9YUcS5GaGc9JMQtzRrmHFH9MM",
  "key27": "63m629bAs7EifpWhs7JKKK7ehuH7bLEBjaZwYk4qwzTmRTJwaHozwtA7HQQ5BWnXGJWwKs32DHSpKe5JAtxUpgZ9",
  "key28": "K8uEyHt4pWwXtRz1z3hAGfZvbB7ZpUGQts3j3SLfPf8Q641gMcd1pN8LiTF4NPjkRFhkuSofBGj9kLvPLHMeWfV",
  "key29": "5NSjxeF5FNbARhWvzW7n8JRjc9pU8YcMbL5VwYBTKkSoZQKJdfz6149wqUcTqdRS1bYZMmShriST8YSrcib8Kffm",
  "key30": "4zrUHJp8rawBFRUM2Y4LoE8FS6bgpoGg7uhvh6rPd1bqLSnjGpQhtxHHhW6kcpZWejwmQWDijxqsgLh5bdDgrDL1",
  "key31": "3KxARVJ8f7L6FouTDcJwaSoLcVDJ2L2GpKAbWN2G45GuwGrB9BcVKdp8kCcf7BoMey4MJnEkmEGx7iU7wdeHSbB9",
  "key32": "4xkrL2WUD8taa7tjt6CeMcZNQd5TXb9d9AgL6zJ68PnXcNEep4nzYk3cSbzQDE2WhJ4TMGYCmFoJ3WQP5cHLKQ96",
  "key33": "3LbKSEDULLW6DnCpHmmbHtNDRMPmrYBtrhxaJ7a2CYxRHPVFPEDbW6vePaMoZnj24krkZuf4vsriYinvkmetoKmi",
  "key34": "3k1Be3qoXNqnGJw2RTB72EurTK74fHG6uEJ9curAA2KTQT7QYLuqcNxzpDv2QXgCRWggEUHHyFjhi47vjW15nGtK",
  "key35": "5aXFVo3kGMYKGse3j3KMxuPbAjP4rcJsTSuVQ8sKHyTfRb9ugKijRHRtFVU87w482j4v6SuSEDj5UdwR7Nb1XN8N",
  "key36": "gkoSV1R8HKL2U1cAJCYRFPmFUAyfyvtiTuwnTdey5TE46BRHUZTr38MyXknKs5B2EpcepDtXW58qqN8e5hYwvd4"
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
