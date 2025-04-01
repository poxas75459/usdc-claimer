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
    "5aDuhvWrdwhbqXEhV9Xzr3qCxoHUmoTQaQBmPVb9EaYtGCJiKxi8ynQ6kUaDaiS9q6kPfbrU1rhhxixmoppK7HB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "veWYNghwvAhVS1gikTH7EtTM7WXpJJsN7gzQ4nT5E1dtVTLSDjttMLAJEjFGD6iiWjcaX32Apux8jANkxhtS8hB",
  "key1": "28BMsrX4BtNb75Dx6Kt9S6mGjuWcsiP8USEFi74s48PeT2upgW46f9F7cjysBWJrmYnJDVHfNU3zXUErQomYM8jV",
  "key2": "2oAJQKGVJLfRwduxC4cVtmhs3NNBbRayW5CCrkG3L2Vk3gGK9c4Dqo42x9phJL2peM1pRChLdg21XS9TCEFB649f",
  "key3": "54Q6S7jpvidzdjhNaNLVXSTL28981r2o7Ru9ugqsp3BJQ6wJqtCAoFSTkFcBqjJrC8E7jXggM2KPAgPDuiL4wxBa",
  "key4": "3YKPi2hSxyAjfZc7mcHnoogeHKqtgMFmDfHxpkT1RPJW5DQBhaEwUtyspzp9WrBELvd8RV3Xg15GwhcuvkBnAKT1",
  "key5": "3E5ertqV5zGbz2rsyc7zE8sHt1gotRcEH7eAvXxQwiS4jM8SKU7T6vhsJjc3AZnZeGXqKwVonztjDLt7iChmzQA1",
  "key6": "4V1zRGr6a5dQN6Z25p3ptk48k7mxdG2E7bF1Qp5aagTG7Y2JQrYjvJ6FCmg9QmwHxdvbb9YPAo14NNHDh5vgUGUt",
  "key7": "5n7agjGe8vXeV3aN9fsbdAFkxZzjKg6Di7bBHnrqihwspZHpDhNMnGsPCnfUdfXxqQy6WxJ2bY2pf4AgBpef8wps",
  "key8": "5FKzxAfgkr1qraQe7BP3fWgPAyWi45XELoTut8ZiG8HZmVqTLZMvXMFJv8wAtdr3YqGxfTSUXLx4azf6ANpSv6DL",
  "key9": "3MWL8jzo5hG7VYwy13W4uc7BdhLST96RjYh5255Xwc91B1gyXMcGWqH438nDNHtBSccSMziYoQFKaDW6SNqP2mJs",
  "key10": "2GCTxC9T7NojbWgdmhPM6dwBw9X6gvDNMkx47dwz8cGJCboxCtncppDMtrXAWYAyEDehm5wn2CnF44dsApd9Cees",
  "key11": "2vVaNTpsoz9dmg6s261PY6Qnn774vGFZHX7aTdEG392Ekwb8bncunNDQxDj5fzg3HggyuiitJkTxhvADTSFk7M8n",
  "key12": "jpsTEorVYdW75sxwSZp7BFvMJ4pF9c2RKokT3F2X5m6ypdmxwKdjaZVux1v7o9svkQ6GsEUKUGyY2DtfB6dN46x",
  "key13": "3xaXVK5HiSF1dsd9koiAZM63SXx88N46cyG5YPQTNsDjWmdCbdecU1k4okJAhjWS2Mf7JSQ3dSJFV4h4Wm22Pd6Z",
  "key14": "3qoeC5DTAcd3p3bWMnA3u9vPTua3Bua1nZdbEk4n4G6DKzqaJA7C4j866RQNufnqwWERa7oVyV6QjWp4r6FjKRXM",
  "key15": "3ww2spWrivEhEjybZSovrQXbFNrHBzk4vJDLF1KupJr8BivkDqGRhHC45xyTTfQApYTV5vWgtb9y9AtGH2uiJAYC",
  "key16": "61UTeDxz7ZDHH7QKtpTPB8rV6ngr9SKuVb3enW7nX52hZbMG4xuLgQXuGneD6EXYU8uWCwViqTLhg7ohR7QtKNxV",
  "key17": "46aSvmW2zSW6xGC32WoTPnJhSjhadUneyV8kTA5SLYp5juR3UdboKBitZSn99fZFsra3c4XjSkrYCGP7yyTXLcUh",
  "key18": "4p9Yf79nqGxPtaioxxr7mHnpLMRUU2yawsjL1vUKp4B2ep73G4t7THmEBvqnisFS8ArSBMiYwaGivFEGuUXqpo8r",
  "key19": "j6j5jgpbZfJyHjJWL1AVfr1KhkV3JwQEXy5kdJpFNc7qDG3VrDau4Q587sgQTgqkLJAzNLX5nQ95pnQchNLwVhm",
  "key20": "3CHeqZHqEX26ehmQ1Jr6jSvX32VcvXT8ynqL4TEMZBYcPGPYZNSgvevmyJtZRhSXL34LoDdVYSirkRwKtrraqanD",
  "key21": "5aXoqGXwJHNiynh4LXrHGWZ1k5EnHbVjb29e8K2RxbbT9WaCotE4bHiustzJ6HUJ1PKSs8NYsTSPFNdSRFV7zBtd",
  "key22": "5V2Jww6RzuhNrDtkTHyJ1PS7WfvpukWLDE2fTjy9fM9fkfzNPCRUn3AuZ17v7Gjt9XPV5GcSgPBZA8d554Jc1KgY",
  "key23": "2Mjzr5LKQ1dbDkDL2d9PefaY2Rzd3YNSoL7s6Lhud4MmoqDGXDbPvcM9rC9L6WQ4Ysg7QoiDBSLEktSz4XPvLQNh",
  "key24": "2XUMwdyMrMMLJR9Fne3FdVQASEwb9MYhFjZChTnPPMEVk4dqr1BCTb2m99GC9aZtuECcWV78tvnUxtaBB4pYY7xQ",
  "key25": "5TNGE8eg5jh4tUAS7fB2rGha1gnd5SfYqKmaRKukPfyfgKxicr85yQehxSF7ACN3q3YPsQ8JgChJjHJfwmKzhWqf",
  "key26": "5UKFnBHv7coEGXyHejKDr5AzTe1tEuoDBNsN289XkLbG38j8gjvvzHbEvi3ezqJ3ji1gNkarv1qdUsNiu2mdn95V",
  "key27": "62scdy56MJikdpmx1mPUs7bydceiyRbQrfRAygjFQM3JCtK8gZ5gA7KQsyCpXCGubbfZacoo4xozotwzzwR1jfGs",
  "key28": "3ykD7BVVn1r8GZNnAr8ZE35bh1AiND11Mn1BaFhjfhR7DNGU242P3ufsz77QoQmAPnDtRceHeuJ8Xp52bkTSj5Np",
  "key29": "4eGUkdAYBdwWiQoN1rpYeTyJJtPSr67AKE3QnafFC9TZgWaTGzDYw3H7SbihWdCHGYNeugmLD5D1RrroNDWLTtqq",
  "key30": "2ZWrm68A5qFJYhW56GGQoEL1Wao6rps5PWmAtPxAdskCLewWVG6RCWyifHsx64XViCLq6BQh3dWg63FKmEfJGUmd",
  "key31": "57Jqrx4U5vnuYzutfWERmjfo8d2mtVAYq6rHXNLzzHwEHKDuXKqa8kbTopca8uEEtefJptKXqzkYCHC93DZnfK6u",
  "key32": "3DhV1R7TGBaKTBUJh3mAJNERYiEJaKH2RcTMb5JpUPdW5xCzQ857EmsEDzHDdbjSYRXChRhz2eZ5gvs37e3789os",
  "key33": "39ZhLRqGdMqKwuVsyau6QE54VLbMUdjeZveAmqzr19wBCdS1ocBBfTknK3SHQb3NqiT85TfAS94BgxyufFWD3z6a",
  "key34": "66RkBbJThjjYbu4exb1zxPxhsEMUz5txBnTYqomjDRt1pEsa91XG9PykFbVuGP2PyxTvTyrrv7Cmj4DFsgrqktwZ",
  "key35": "43UfyaoVm254qHFSBXtYM69hToF8miBS8GRr147w1s5xuoLuPFUZdVicwQPYNQdg4zU25ZFyWQGddNYU9Whn533b",
  "key36": "3csDNAbgRopNw6sFvmKkvhvCXXvh2GhnmRn5TKwXY4MjJjimTCpytaZJx6Nr97zfikebk5C7a4wPHAVYhTcxLjD4",
  "key37": "5vuHPyQoPrNU3h2H59ZZSieFScayY15cNyQGKhogeA44H4jGWG4K3DkhiHDcNxc1D2XFYJ621qDo7TTU7WYJKQcJ",
  "key38": "4fMwy1hoxGNnru2pFnMLgQ8WaV2eJYs8NXo3ttXFWVhFqp55FnDJqeqVNi9QCTehdQaMjV86v9LaVf6jAf9N8fob",
  "key39": "4FmLMKceLukMRusUZUTDqyoQwkSfs26rjuEUzTFaauNuBg4CE5fU8WWsx2NYP1NWbRCZGBPr9hZdkEP5A6Xfnxwz",
  "key40": "3tsvjn6Lysik8m7yKqgc2Bsykuf66kJhDtUPKAW6fRpRszK5koZPKnhTX9EgCYNi7hYxWK6ygYXKHwgWc7mzthcV",
  "key41": "FUACM5PH5zBj3FTHXQYKT72ocKSbUYFiD8KnwZCbaKYHNPx3Q4R3RamLj7MS5ei9k5xc1qEJYvEPZiJnXLpCfS9",
  "key42": "5VRCiPfkn8n6oaASJ9bNVo7oZxVgFe3tcu1n9zPH1VniYLUQjnRb9v9YH8PEBptABsVfr88hD5cibcatZ3GaBYuM",
  "key43": "45CjZHyyK9en5jY3t5ZQmPH8vez7do9va7n84P9wG79TNNwcF8LvS2uDnhzCuYatydLgxqY4jgBu6iYuEgXEG3sL",
  "key44": "vX7GKNUDBpUQuqDWJNikcsGWG9rzL8KARRcYwKgfj2Pz7VSyHBTTZo4JBYDm4Zru7WgxV4TvjAEKL1LMESJC8c3",
  "key45": "4dVpgiDnH3fKVmowUTQ7p9yEfeXLCP42JNorKTLBK5bG53hi78dJgXYVNgsa5DhLGCBDQA6Y1iNU3nLCq6hnVw5v"
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
