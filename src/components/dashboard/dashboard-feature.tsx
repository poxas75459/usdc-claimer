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
    "64J7Fttgb7TN7aG1YdQ5Zpwkr1uk6ZBhemJ8gPHVhsotjeYaZM5cuMg2EQbnzeCFgZyi1TwcgbBMWHcudUbAp15h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "435RPUzeVbjYVgyhBPJ7cPAz8Q7MgF7tqx5kTjVCTaEWLuH1shzBP7YKnaBTqrVEHyJxN4Ww1ywKRJQ5JQcv5JCn",
  "key1": "2jkKd4yzr9qxJvCuqa61A4eHnR2iryR2uX4yDyfnBzuANxHJcQSfqezvuE1kr1D8vUyyJivLpwxwM2t1VQgBiwwK",
  "key2": "g59a9F7Wb9J27ccfbcR3JRj2bWrMHTWkdLH7hofTb729bYCV6kXChB9qoYSwYirNu1yLUb4VYmByRKHcEJ5dE9Q",
  "key3": "679pWy3S776wVk79Za5VqpbmiWhe2hjk52pg5DN2VXqNqMkMsWjqhkdFvz1orhfqqubJxudbrLyqhPMcwr8CZAC",
  "key4": "hcyqpdp1oCTTAGkWqE3nvt5SW2NFkFbuWhDYbVrUaRv3wpgYQU2Vr7GiUR9VxM3v6GX9rF6De2znNLhssywV5HU",
  "key5": "3GhUi5qTYR821ywEKvLwxg5JTek1MmoMjUTidmXF5YrcNTmvmxg3rE9r3jCoZ9PFNt4H8Rhwu2aJbb3mbqxhTyq5",
  "key6": "4ZUQnuXFaTKL83Y5qectBnsuCXnU7sfU6LrdLCTA8NbB8GPCkMa7VodVXNJwZBkomnCUpELg9Q11ysWNSE6vy2zH",
  "key7": "j5juYpTUMkEmVUKcu4r97YsDDJmH7ECjzS7xMKSTGLYadYMmWRGX4dWFZHK811SR5CbM1Gd6WwtkMpQYVt8BTJR",
  "key8": "3CKe94KCjYYc5DeETFpAoP5WPHwe1CiR9EhaFZFaRvMdCmA4NSsKds4t9US585KhQAPz8MMhVKzXN1x3mfrenrub",
  "key9": "eFN53tEPnkst71sYRDiCUxRkWMJu2j2vmNDThaL4FXxCabUGXjY5p8EWMeWqWeK6p8NUfJffXsZWvV7tEJMEVti",
  "key10": "2SHCLFwK9tzBYN8a1KeYBNUQDycHfoRrUqEfhCvVVpyUL2ZyaQ7JgvtLACYsVGssejMTQJzYePX2gSh3ZULibPpq",
  "key11": "5pGNqxhJm7b5f6Xjv4gg2oPhxbAzVDurKEUqdGCa8W6Qh2Y97FPKxxi52mbiVEHgwbCnjNBh3mAZET412gBWF733",
  "key12": "29TLre9xYNyJPFHSntxKcMA6mvmevfsPqsxvQDm8Xqoi2DpB2Gh29XjxcuhmfLUUMN8YQFaA6k68noqcspSgTV7X",
  "key13": "4Uxu9FfUpVtKDxxCoWK4s1kBpDCV7A1Bj4JKEvkoYYPZKFU3m5QxgFyE3q7EDa1a81jUjuCqmhCVaZzeR8Mn3aeV",
  "key14": "bbT5VbV6f3qA7LziFsYBFcRZxWfka3kyGJFVHSRpgrrMsNdqzEJdEBKPFzyEhLZYseWMUJqVYf51ECWMPrxuc4o",
  "key15": "4VNd1APJzjPsYKLZMNTDUPZt3zCpsyXVY7aFsES3apVS99RaymhSQqMygwTDFts4Gb6JbHD74gkkBnE2wdqN7Bns",
  "key16": "54XyfpE8zEuaUub73FP9uyqrDfGdTf7svKfjPP1tS5jQ83p7eg1qE6QGaQB12j9rTNx7FTj7gB4wTn5yTUeiFCuj",
  "key17": "4g8o87Ryd2NcrBi7NN1AEQgxSv5HfvAXH5CFJmE4ocjiNv8tCZKy9DKkAQt7XgS7ZbNvHLYVyuauLnRR2QvawUH9",
  "key18": "4GpZvXqfGBps8nSx9i246GKttiwyTozFM5hppUD9BKTQEmXHQmssWTc5cQ1RM4any69Pxzmd2FwYvZy5hHBaaaTe",
  "key19": "5fVon2jKWqK4xY9XT7drHGSYzHedRdy6DuPhg1gQMuHK82CecwJNnnTzwZqmQrjoCeLCCLpFun62vTUyBPtSzTmL",
  "key20": "42xTXJE3YP7SSXdvLBgJ8vcSXruouZcktV4y6RZEwX3MMniKUMxscFAwL4ktuY6BiAVS2eD4D5Y2rAhQzNMSrSsv",
  "key21": "63T8iXyX3sq5DSexGH9AfSkEfhqr5ByDnuW4k3VMcbEx3MdPGABHECCCg3kANEaW81SWmqeFzAGtG4jf8x3z3JGb",
  "key22": "3AdBFmr7YELfnvPhxmeib93wP6ZbVdRinnu4WkL6oqiP12hpiTYBTyiVbx8vkTKESCbQdu1P5LtAv8oWrhYt3TLv",
  "key23": "UvXmkf8vtuEkMdBJQjCMqvheHiDUmnqJ2BDU8XKisxCtfwsDiKmsFVe56HtpVNwZ6YjWaPLCxdCpKD7fQgHirq1",
  "key24": "3XuJbnDR9fvuAQVs4mGRXaMmDETcDyxfAYsUTW5ZjRCRTVEwQDFdo28Z6ngg61xwYAjSUxVGFNFDZpHkEMADBYaB"
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
