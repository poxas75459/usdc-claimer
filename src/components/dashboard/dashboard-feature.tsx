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
    "52nWew4vjfPsbLkohGFtKa3ADP5zZkuDbkcX5TuM8YRYjF959JKWahATDitj9EgcmVni7T2cfXLZndpWnbnw6kqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42p8MDC9WgxWF93cZs3sG2GcN6qrWoCeSgQGNRoZMztGvk3ASqttA3KvyE2tWCpJpouuXW9eBAKtJEy7gh8wLrdn",
  "key1": "5wAzyRRF9ADNtmFzGXiTDt8Qo82vAy1m9SFE7PKTBLGwhA4RbCnxFRjggudmBgnePycGYVfxV1w7JWZM3p1JrNif",
  "key2": "2aLDnhz4B8WCKnhZPeWW5Q7rFikdVqmWX6Kvub1g5UXXt5K4A1aLfNB8NPqBJwJo733nZEzPEQkGLz6u2Nfjsr8j",
  "key3": "63EFxLbrKdpyUuLLHpGgYhNxPzDickjM55raurd5PgiZgxRzbohkTYAcwzQKhcxBW4fMcr9Uo9QELRyGGHCuBgHf",
  "key4": "gB2rqptpCv77KGVcjU1zxa5b6f77cr5PPY9fWtFe6aaJzH733753DmNs4ci1Hbcm1UswytBcHffG1d6jfV6J4MT",
  "key5": "kuKQhoA3ZwYfn73Xiur5E54yNHVYvQZDUTtgD9888xBeqWzNjK3wufyAvbwY7ujya9kw9xhfMVbvuiir8vZnqpR",
  "key6": "HJTDQKTNgsJ6AGWgLKw3PzbrXXJBYbwv1wWkkyzjLVdFsJsNPZcJZU47ZgFDdFJnXiNSSi5dGRbm3TKMEGUtsUZ",
  "key7": "5pocHRi8feeakpAKLJ5dgFZtzzLEY6Z51grxNQZRsqCvpgjfHsiB9BcB7Azkp6DhrgyxGeorcytapYYkwJ1DQVbH",
  "key8": "3wax3p8dLCLSwmbL1hNycGPPrCVQ4c66xYm7NU5QdBNJ9FoExoQ9mtxJdS8ozuxv1srP9LoFPFphms56vXcaKpzh",
  "key9": "43evb8ZZpExfAC7Z4A5vmZDVXxCsRvx34E3F3pn1vuwcSCMqQYN4BWekyKQPmpYExiut9zuJc8JHTJC95dePqSAY",
  "key10": "2YQB64dcZjacbDfvnUJWU1XnYGin4mzC2YSb3cgP1CqgY25xuYcaayrBrcte5gpmbFu3FyxDNPVxyHSJyhaTgpG4",
  "key11": "XoUvz4SHndTJrDD7saBmyiqHTaYpUivpNENVTw8MKJ8MdUgWHEVwLhsby5V6Qawi9m6ueMjaQPKmB7pecpuVzRS",
  "key12": "5JjxUDLge9TxciVJW4pDo6Ae6fRMjdZH1DUab875eLMGnBigG7CGaExfG8EZhJjy1Ht9M6nmpZpFa5gF3vEpnw4m",
  "key13": "3r5GUGNhyjUF1tmti9LnF1hoHEgNDacH6ypLGq28zNwcnKWvRjmirZ1pTpRXCXanAR7oEqJA3wd39RLPbtwVvj8M",
  "key14": "5SKkm4mcMs7G7JzHZwHAwZ7umvUjEkETRupY9PZK1WC4uDqfJ5f5wRDx1J5m4zFxDwpbNytEZ21XzPXdHF1VGP1C",
  "key15": "2gyJfFKCv6QRLfUmGJB6aBVW5ZVob2Lep1WmY9pFwK92dPiWx9gBHAgxSDXagDtarEsdZpeYu8muBSoa7YQVWu8L",
  "key16": "2kmMYzpLDREziGCBH5eDoGbUd83zp5hMPuYF1deD73QvdD8bWcvqdTsSNfdVCbSyMKfXsRDaBsfyj5H1Uv1QHbGJ",
  "key17": "3fx7kMH9du5gwcw4fwCuUdEgYywQcAeQj32HmzqYZwjPJMW3zc2zZNZLfeTnLfrWU67qxuWnDYPkb35SLdpMFQuZ",
  "key18": "2Y1ut7wjPnNWwWqgPpK8pdX9Qk28aYynn8NvJ34WwoM8yzGMKdoD1pniuSsUnWdGX9TTBdCj3GnsYhmDKj9XEaCJ",
  "key19": "PJPtk68eFAup8fdzoqQDVUFRau5uDqtE1iz5BLNfxmcDMX9BYwAvUAKYqdjZxp6K9VJLt8w3KTiUUYL7CiuumqD",
  "key20": "3YzSz7hzNhwfr6L7m1oKwJe3yAarjoK6bDGtESj3qYMje2EA2K9TzMT6iNpAAo4FHE5DqpzvhMmmspbyAgXSo9Wj",
  "key21": "4kj4oYp7UPbdSy9STCcpjF1jqHFEqjk2GPUxavhoypGqRy4vbZ2xjZZpqoZn1ifJBg7JGwgYvTgZE6QD8ryiq4Jo",
  "key22": "5ZaHXixXo2nPvqnjA1oWtE3VnA4fjrsas4etovLzLb1k4cW4uELe55BW7bBQesucD9JgzueRQpVgh8bg9nE5cAVS",
  "key23": "5NxkjZrEamTBewsnHx5xpwQAfcJGf9TRCBPHXRoL6MuvjyGuWqnkd2ckeXW9j2SqRbjYeFYQqGZ9YVAq546hnrae",
  "key24": "5BRig1n8x7P5f5YbkQWKzKtRB46GJxahWe7BCoyEDbHdenbzCvakxt6nvSJAGm8dwR1MacrDXhTgM5d8Hh3xmyKx",
  "key25": "23Ptfye6JHc2RpmP3iiwVCk7qMse3fuGT5MR1wzRmHkMWevuW92wmxAbSyEe7LYH99p5UkAS9f9SHs2eWuWwNF7w",
  "key26": "2vw8pF3TaVaQ1gJg7NQWQjacTsEMhdzyvLmSHYD6LiynkzYksx8XjggAmB22c9U3V7Wb75EB1zCX5H23h2jWHorh",
  "key27": "5a5ruyDETERL94B8Edj7x7eRas46HckuWCVFrmWALznoSznobcARLgzxR1kfhJSzQoEAdkgMmKMmreVguQgWXSL3",
  "key28": "4bnhvt6NwMvqXrNEnPyj7JbG3nC9ZHa7DMJmSdc4FFviLK6AM6LfiR6iw6ceC8pYan9DAejVpp6x4XXRdybKVBn2",
  "key29": "3A4wJogdXjwWczy4J3F1yDR4vDZp9s8rMxhDEFQ6J3JNSEm1p2ex34z3A39RvzxfL9Uesv7A2uwsSwQcFuso7rMr"
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
