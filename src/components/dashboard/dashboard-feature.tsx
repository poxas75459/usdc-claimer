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
    "3vg77FPQy4C75SjZ1GdgBk4PTZByqZdQ7MiK3J4gdC8gZTicaXGVJostHoACjGeoxKQCc3ew5Zzr5qp1uHhGp59m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wE841HZeSAzRhGQzAK1bepTxPdwSUJsB3xdawbcCmkgt1vcAYVrsm9Jah1fvaVxFBFQtpAvhycRntMy9WVn3GQW",
  "key1": "5JeGmPpKcVYeRPLQURQzp213kKmqVwYpaU6jbKVEEZmVccknVcYLG1gMuDPp9Dz3178zLKnBR7JAu8BVSnzsDpEt",
  "key2": "4YtVwxnSAjRbfKiNF1udfTp7XjM8fZEJh6XNL4y5WVFe6D6PcBKsQxL6VzaMttL4G1QuRGHWouTrNGzXq7giax7U",
  "key3": "5xpZnWdzT9QZALproEpWgeqWT8vqPaH7xpjxMKCbYPLj2VicUMn2t9ePGcZd643jHkTe9Zbg9DrDLK8grkZ4wg8M",
  "key4": "5TBJnYxFvw2arDCssZ7MvEXAqoxtXuppMLsqYPqtbXDU26XUXJ9WkPxZUsjiTsWfX2AM9xshNpW48gxkGd1kWABF",
  "key5": "4ccU2ymutKYvR17BPDG85BhZfYbgB5aVTuABGeXe8pgJRAThgAMmJTkEWxER1aNbkAjT8UHpV6vCd6Z1AaLt96Nn",
  "key6": "3D9VFqEvqmgBVxhBXhfks3AzvvEJ4ZvdzhePjm4kw1dx9kPD2JXpJNwyzDZezN1Nd1yk2fJCiRJhECWX6a5GFwAf",
  "key7": "5aBrT7JNENAyXgjakZDbjwAjnLZAgVJJapHHXqmBgzpXvTA6tELRmZ5GekwwbdZ3LTAF1vJsfZ8CrgNqm8LaCguo",
  "key8": "2BS3Dt2so63K6cu6sKuPkVMTgEA84jUBEp3NyrEKua1S4crEpWopzzKPewrYEyb5uWffikxzJ5j9PhkZ8ca8fNX5",
  "key9": "5prNEQE1HuvumhdB1jRxDrbNugyHm4eKhyC1B9BDc9v2unoKbbmn9k9EEji2vmdK4EnucxgnzK7jhodsCEuShsLV",
  "key10": "3EsK2wFjJvwPYQWk3VDGmrjf7Xg2FzUou2Jt223TKAUfa8uCJyRrFG276ZEoheL4DcXpABSBKZ2867FGCVHk5FtX",
  "key11": "59uMLwZoBiszYaeh31wTattv7gbLGaWS9kPovFT72WVzyPd4opNjipZAyEuGhns6eeEZg6RZVzgb6DPiBqmcYnEn",
  "key12": "5mbeGygrzqwghZxpf3KZttKFDfKQe1nkNoMqaCaWWaLhxEP7AF2PhMPHF342CHkq1RqLxGVsW13nQTeF5Ef9PkjQ",
  "key13": "qevmgZCk4Kp563fx8d4qfEGFPC9fJMZA1Hb8ywR7C8zWX8vuP14YupaiCtD938ZiPBfEgFjnjpqtLHeyV1oFJi7",
  "key14": "R6n62tJNqNcS43JkkBJFdqPX6MzJv6n5wktTG9TsAv7o6tMLpSk5mFcaBHE3swgb9XkS1fWnMSA1UBWuh1Rvkhk",
  "key15": "2ykNmWh5NPjCtT27N7dAYqbzEzBHsLvf944EB4Q2n3UrnkdD24ChsaH994KmgakDY9UYYs7LJj1oXDLTH8z7AgYW",
  "key16": "2XtHsRRcCB8scLs93gaNfLPbCMU5cWjFnScuthgVpr1UgM4Q29DY41vJhTSjVgSz74K6UjteAmrjhezAZDrVW1DQ",
  "key17": "kaEibkmoPGbK3C7fWKyk2uckB5hRbkQdJ8Vk94H5ykfhLvuehPwDEZMZ8Wma52g7B2P6vs4RnbGcHfM3WvrXUPM",
  "key18": "2ZyibayabpSgjtrf754dcbzHD6EKp9aqSgM4Vu8GZnLQWCgALDM7BqyPPp7FrC5xK6b3AA8b4BuBNjTVxq9s527m",
  "key19": "4uv6m1ESibciPP5oGmJWJ6sfnTuyHVEGFdBn86vMmnQDd28bG3NES62R43h71CPPsh7cVFr4GAcjKxkxUhBJF9KQ",
  "key20": "3EZ38gPGteDN9yRJTLrPYJPBWSGpx4QNvwWtFikwkA8Ts1Hg8a1mojdLXmtDozgNj8LPDYZjHQVgLmSoLDwS8pdW",
  "key21": "2aBDd1QYGr4TdkWfsXtHgm1KbEhECk1q4LPsTkmt6ZutAsvsMcnguATqoqsHTz4bLXcUV6FKy3RA4HSULZ47uZ3b",
  "key22": "3o9ZFfwbhDsbuGK9afy4QwX4hx32pMSZGVhgzuVm7NycxV8aaUAeUrcub35jqcu8i8aHUC3MsXtbbR1NWEABWJmA",
  "key23": "upMLfZk4xjEdNXqNGEPtdZvuARUQj1jqBYRBn3qYgtVbsN9hyeHjZNLNUx3HAxWqBLiQpexjwsSTSZqZLmFUp9e",
  "key24": "2btXqBMjL7knn5vB7Lzc2z93mSa14sW35kbFgnRDc58dCaLPvMW7VswK2FNF2PbGzi8f7LDVfhvNT5TTzGHpjnDW",
  "key25": "4oQow76JZtbRATfahJUmkGkFCFFHtwZz23NtguR3aLDumt8Ya6YHz2Y5FSwWGqunXjQT1FrWCCVnAfU17dzVGmD6",
  "key26": "25naZMoFkXHrzEPGgE8Hm7KUcZExTWkcLiqkFwahuE13oMseFeewZ4LwSyy23zrxw4YJXUguVapkR47e1wE6J9hY",
  "key27": "7F4JdPVpKCYKtwa45SY9HfsX3d3c1xpHJ9hZaHyvGE8yiNp15iWEh8DCV2EE5YLKLeXGE8eDocHY8mUDt5zwDCQ",
  "key28": "61hS9kjXSmbtzv6A5iSGuKpp8CYtxFMaQ9oYsKToVo8tRge7yeT29dUqnh3HJbi56dxyu1RaxScPRm4cSEqRa2em",
  "key29": "ypYC45fR1NEXfc355i8ctSYD3mKuWv4PyaTnc2HNoKzpoFCiLnHxBbv7ys5npUC58N6L81mzjobpJYJzzSDFTpa",
  "key30": "2KyaDf6xUXxju8pNKvbVLkkYRcJYD6Q48yveMfzSZZwJQGrbwrcVZTtqc6R6v71p6xAuECwvVbYRsiYPWgeBAaG",
  "key31": "3D2WzK1HxShUCDsaffYmnVbajTSoaQfjpKK96XnuyE1r6pE4nq3pBUB7uXs3Xgypq9tt2J72X3HpwnDHWnDbQsNJ",
  "key32": "3L7LFwHkzDsCEJmX45eUMmFFeAE26rU8FXn2xLYY5F9zTwRMQ3ZhMCo21VE4zddkP5kW8nvkZSWLbenuZCWLMgv9",
  "key33": "45zc8gkyxUa9pVajb8ERNanHWthoT5bzQdrsH5hwLzWGuXrmkTtSTXmQEKT1K8JXfKAc5yddBeophGUBF7cJ2GTA",
  "key34": "3n2QZabUFrR8Qimi4mHZxJWG2kUycj7pzuH5TwDt2B29ev2oCfusnmtc4zWJ14mGYwoJNpFbvvAhD7NXPSfMexfr",
  "key35": "RXqAfE2YHKSn8HEtPtXKfDZpZSdM9padSSEKFmuePxKQNFryqUqQfyLskVmigCye1eqw3p7KowQqyNRuTVabh5e",
  "key36": "3Qxb58huLKtNAzoG6NvVnSsmgu9xeZX3BTN1Z4gpVAbgxAHy1FYBaYKQJ5yZsW5CJYpNdXJnBT1kDuwzH3Mq5nNm",
  "key37": "zWsbVjFrZxvSC7tNk6UNyjcnoP9LWmdwisJgaWASmTb8tKnGGoya78zfV7SuYnwYJQN4KRBEAfPEyBFS6fgbTFz",
  "key38": "5xGAmdbiQyUfCvDYmvQjsGPG1wGGJLiw6MkadqavSobh3qkKPtfLYWHq23PxpWQpR3d1wjtgp1m36AnQGGvPtFs"
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
