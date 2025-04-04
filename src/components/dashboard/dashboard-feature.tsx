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
    "3RytQxuxwREGUMtXsGNLX6sdQCaJWYcu4gJ7QqLSojkStZxyokngMwbsELSYpskotVCdmXHuzxUvFU9ML7uR7Q4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r83uhpuhFkJHWqmhFrXgpSY6o9R33SZeF18dVxuuwpttZqqucXQDFbB82nFVXy8VmeW7gt3ZNDwu6LaFje9QRTF",
  "key1": "utbows6sd3EVnqB4ENnso8Ryjdbmd5Vui1VQo35yG7Wr8AiG6MNxaZmRfCSSjutAFzumvdJC5bN98Sjdq5kyQxh",
  "key2": "41XjGFuwneFZgDNVz8n5X99w71ihuXu6kySp91ogpAgn8ANHUJSjBh1g5XaJNJNpyjUsN1TgVC5o9ovkF2osD1hU",
  "key3": "3JTCecVxfSAaqZ2VxdTLne5MDWWfHHhhfkyNEpdHxDgFh26fLgRArgnSSiH8Zt4MiYHH9UW62rSvy8Tuzp6pZY5A",
  "key4": "bGWAoHfUAXcDcqptTLVTy98Y6BNMTNTtcw773W2T4MGWzRwAfWQsZNroebg1h13UGJhhmsteUiFBdxoBtPu9G3U",
  "key5": "3aLj2vwrC9i35ihUv6TjUBW1DSq2xbsB1ekpuP1TU9JWveKBKV31bL7cWJcEMBRy4D8PrwLzS8FANJn9mzDhuGAz",
  "key6": "tGYQACDoa7DzjDdDt25LLjqhgSnZq7ZMhNKVqbNf9rxfmz7qd1oDwroXLBg3cnQfY1R4F9xjjk45iovrQTPHwCm",
  "key7": "3MXoC1JURQJZREwYcmuF6RWWXFu16xZKZjCsTo2pCZBYf8SuZnDhf7KJXHVMSGLvZ8qv9jXTt87oyEACmtAQ1VJm",
  "key8": "3GYaTC2imDDyWKbJfmoARw5S7jHGUxvXQUoVf7Bgqj6Zd8iHi5SHfRY8BpJv5uV1TME22TQ8nnzbNVqK9f9ArtfU",
  "key9": "NkkAct82SXTnAL2KqaTUczzZtmzzo6kn31nHMSYR7oYd1B1pBfGbrgygaGCK4R6k4TaLeQszK17WYYQX2kCNi3r",
  "key10": "2gz7YGLBc5kQXQDbUFHKcy2yChdwwMnHqwHu88hpPK7q6DJyYFtxmwJHLrrTCZ7nqzMjVMPWsnHRRSwfxB4GVoKY",
  "key11": "EHMmMTbzmfYAppthjeDm7kWAn9GQbW9RNzNXtntZXVVk3c8YyR36vARSkevYBLGVjE82Q5aQv8Gh3CtcQUADd2p",
  "key12": "5ogFFmRYbKjFqAHP9LaVdEstNS5ChsmFF7hgrksT3jMer1Gq6GWHuRwLHk4NCujtYM9oHS2uwwgdFBDrbzsrnchL",
  "key13": "2NZKVYW13kBtVHj4LgWQGfLq1Gy4gwbbt4KAhNaM2uCxEEBMrRCwPVzMeYWDUYbghCfwHo1CZcCrNBYWpXukod6K",
  "key14": "5v2DuV7GSH59uNxuCmkcWDSQFnXajTSxygRQ4nSaNy3Lxke6agp9Lt5wegfJc9JE9yQVZHMPEifCw1rEJS1UiLqp",
  "key15": "5ZyEZUkMFHEoJYHgLfYi9A1kWyzwTBtYiC23AMchKqAGUqQZwz6b8YRPKGdHB7afnS6FZe44QwxKb482ZKTtAWZH",
  "key16": "259CW2KnTTb5eQKY7YQFLN8CikfABNKxJBsegRxGUbvQC7tDQkdjYMfa2rP3ArGyPVRkvQ6BiQ2MvzjMgGTsDt4h",
  "key17": "4NcHmvYQCvyVoUMNJUkCboHsXus7bn7Gn7STsvKPAz7XUdzU6NXxBc3G6vNyA2LAsHzs7yyawp85iyAxUZR7BVRt",
  "key18": "77EAFY9sMuviv7EDkegBUxzXbbmSWnvwKGij9HgjfqnNUiay8n2YpkSTHQue1Z6LmRvHTkxdggeozRwx5WFqdVn",
  "key19": "2SUjZVGNUrfc3eBuZdYY5kSLJi4wHa6Ngxmp8kmAasG7AdMFC83xov3eQbJdPQ6xX8kYWR7WjaE8C8DP7FfdhW4r",
  "key20": "2jcGspSdW8bwMABPdMRhyUUaKaak98c4Eofr6stgynEdSxASqJYQDt7RguEm5KEmCoBhC9X23ar794KY87wH8eiP",
  "key21": "5LsAAxefpq82E5W2q9AjRAWeHDvkr2FPjbVPRc398KR4r6ZyCHTmbcd5cEovfgdtiJ5qqkgLTFNjSJTp2GedFHvB",
  "key22": "28S6iUEzEDJP37dgVNNoiNDeTMyoq8N9yVLw3P4mtAP3kDyck1f41tvsfr2nA4LEUhZK7qY3RpdcAyT2LfnKgxVT",
  "key23": "3PHqnjYZGRfRzsTqySWKZTipEoXhypT4VhNenzdj8nF9eT7oW4ks7V7NUB8dnrAnZkkpMjapBuf9YRjfhjymqZWu",
  "key24": "3W77knNipzDQ9YdjFo9haE2HH642PhAPijsmEKJQ6JTEci5m9gDvfHCwDNtMKH357Y5gpSZBZL9MQB52aYnnGAkj",
  "key25": "4d6jDfK5SiaLowEqJ2Z1Y5KPtNvmGKzrJAEnK9Fg4Rxrj8NiANqFydMu2PtMgmRu5u655nmbwDXHN7KQtDhaBT3f",
  "key26": "4PQ9pc2QtF1GAxacYUPw6urr96Rsvqt63CnV5R6JUFA8YmyMp96hhE3PdyTLfGgQMrv6Hwr5eQHtAr7HkWgozHDb",
  "key27": "615tkaqJXjUYkKhZYLmuxp5ZF4SfFk859L3aHfmX56cTesEUM7WADhKWZnu4LW3qEUHoCUoz3czu9aKq58WkJBNN",
  "key28": "3eSwLDH53gU8kNTC9e6obRH4526HmBScwXcgR7Ve3YtkjSGq7NAEFEyYfrou14Do8zVxvFRJrmj7EQ4tMN5WxBRg",
  "key29": "4Fw7yBt6imB1QY6k4GCkr8HcXKjDTnazEtFHqFTcSj49X7ssEigjSLTnZkTgRwT5mhopuoY6GiQU9Wmxmuc4qKmq",
  "key30": "5wCoeeCqFpH2nbEwRrKMKzK4h4oUN5y5BiQDnFEK184JVrvG2N2485GmB97CfNNbr45B6XzKvkRmUsg7WqbyvVPZ",
  "key31": "3WVX69wBJhsi2EBbhwyBNRx1zTgU6NMXCtvpDGesigJrFsoAsNChWrfWjhg5BBudKxLzTV6QfYzyqXCgKpPaejrH",
  "key32": "2K5hUzviFqEofYMTjBTHu2XdHnB6tZbbn2qdyupjvJpxZHGcpHywkAzr77hz3ywytWYnv1ZzmFmZhhMUjhaQWwhq",
  "key33": "2r19mbVVYw3mWzLtHAiFzdK9EN3ncXbjQs4yw97Cog9matNsQugqka6fDNC39UF4JY6tkwvAW6SjKZWuSri2Hqi9"
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
