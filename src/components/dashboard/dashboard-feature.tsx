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
    "4zeCJhTzHjpA25TRtpeKpJxvYnbMngWfVduxJL2pwTznHgna83111f6Z1Dzt6HeSG9HwdXEy2QFyzeSBuMxz3yp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MWVzY8kFvvJksA1g9tN8aaVXz1JecV7sCPQbmxzCprmMDb8presiw3e7RU1geLABbXB8fc8cpi2dr6ZE1pwaXAH",
  "key1": "4rXEetRRrohZYqnGaYSgqqAuCeQUN6YkZWgtrRA6gW3TNXw2y3h1kEoCQjgeWWmkKVHxPk5vVJDv4GqD82p1Zvyh",
  "key2": "ncunSn8RmMQRje6FG8bfvd9VbXtCZNR65AgF5kZnaHYW8U2kphgPteJz8DmQZM5MiZouSeDq1MuhjRGqHLCHmHk",
  "key3": "4v7VU9G6SVmBfw6WcfvJrhGR9DhK1opNRa6B3Req62L7hjiT7N6y3CYws1Doz6LWAbkvUH84YA9jAts9Ysw16UsN",
  "key4": "5uYzR9yWHfwCPWcsRhbgQ8ysMZDWVN3BM12qWPFACApGDa56cvvHsUGJ7SnkDZnrb8vkMbM3EPkF4fW5hfUMjbGg",
  "key5": "61Kho3oUqcpmCCidKcqBwGcNYjqVr3bAoZNf5yxsPDmvNVnHCgCz2FhMJ9UdSCQgoFZYAytyhQ6hGQKZsmxmLAva",
  "key6": "cHnieNKFtvr7XgmhnPYjQhLTPCLhqDDydq3Ja8RmHfqsNaXgJYtgYmVVbi1nDGWXHvzyApBHiAuBTf1bSWA9k6E",
  "key7": "67Vv4nnYzJ7psaf6JPbf933R51r1nUzhoghxSpRRtgYU5zW791MbGNT3hssdNdzZrSpurfZV8Q3mEtip3YKTamzs",
  "key8": "5Szz7VgxwA24W6pY79TVKvAQAy2hnBH4k48oBe94TeJBrkcPHnA9jRJ4K8e6ReyogHrs3wyZ4Whmre6JCpeWPufv",
  "key9": "44pqAgkC93s42NWSCZSPG6z5HqG6mLFEuMs8eJa6S4hLotEv8brc4cTXqDMBUUZjzhMkEw1X8zS8jd2Jxro1Yk2d",
  "key10": "2RNBp5QfE8F3kmJEdx8ztN1SBRJ4FPQ2h6k1PBzknkaSQzUVjTsxWYjJUu5VoN9QAKKE4vJLvfhACupp9Wf3FJS5",
  "key11": "AZ9Dq8PWUdbiH3XSSMmBCocaJFzwBYB13ZcHk1AX9cEfm7qLQVdm9furCP3HV8MdfNzQfX12ZHXoUfXx9x8f8g1",
  "key12": "xjf8Pze6GVEwnRSUA54CHybfzg7ZbLgk2xyCW3V1vs34rKm1EhMNRbqfquU8JWXZEF5CMwn5iVEcLxzkzkHRgcw",
  "key13": "Wx5K4LhSeLD69rLPwNmpSQn6Vbd4kTG4BMa2sHcMBuoLscj7ASGFSp7fkk9NU6DTvM66qkCCp6QaHAqsYCY57co",
  "key14": "i8juKKU4z9M4Gtg7HXZGQYiPjNN7dxiJhEMiZvgE8mMb1QbjuNpkwD5nmkP99sq2DpyhGJPsimV6UyJFoNCPWWh",
  "key15": "3VM6sLqNXNYq64ptDJMEXURtswR2wQFRC61xXddCp4zDvCcuHHNWZdAsayxVZPKE8ZF1RCVx69yUGcFmc5EtRHvK",
  "key16": "4LvA1TJ67H67cFdH6cXUEdNa9DJsrqyF41kT3h7fbJjb6UMHxEQBDEVcHxh3Yveps9nrRk196PBuqsJLtyoTA74D",
  "key17": "5YAm9eATCHuFpvtbPPKFhDQmHiRfiuQtzLkLsRvvjbMz6gzuNiJpzL5PrmoajLBVmGnPs5c8LktZDn2bdytHjcUc",
  "key18": "2tWZ1FohHjqAg6AjVABJFUM1gp3ZeDtKbNErMXC4ohfcE6CZ6XpMWRnpBcE6D6nE7ChBkJxYLgT9VEmP9XHRmTUc",
  "key19": "4y3P56AiM1dpQGsWTUjDcMXJSzLjouR4BA1Jh74UE8JdGU4iLZBHczsE3CgacCcvb7VTf6AXpqwtqeYNo41rNJUR",
  "key20": "59mQ7czUvZvEfJvdmNEJVHgtL8SzmJ1NbMmsLakGYMDDE7qJXn98xJ8cftBjMpr8XgJbFSPbnUonsfQhfhrsUgs",
  "key21": "2omndWu9i3omkpJaVoyetgUW1BsbszLz1VJFCNPdnLMDVX4yKw13hBXmv7NgfcyYXCdswqnAiYWm9Go2HsraXLbG",
  "key22": "39aogA7YmdZmQ2ZCzcMUDdN2U8oTMhiL7D7H6qC1porJmLcD3hv6z6K3SN43yscYGzh5cR7wqSTa2DrQQJ3YLr82",
  "key23": "56MJGMjdQL4BfFxdjJWjQErjm1DD7vnjqYWoW4Ddn6uAXtBrJLQMuUhUWTSmGpFfEfNDeUxDzLrJAxiCm2pek7Fc",
  "key24": "2Yk7GyKHn1y5AuLGrWaT9NWBU2dcxKatyS6oMrK5AndKN3YzRSyXL3CXKVqxQqwPQBJAPMU3kxmHDuw85uqgzofS",
  "key25": "4zBce35mTdSFsVEmjtWSZrwgCS3BpcMnVEUG12ejQuUTSw9vxox3jMSq2cPDSkXZNUuJZow31X3GZQp1pMqM9G35",
  "key26": "tpKGTMiR9AFRtoyZq467TTvHtU1KVMDsRc3rDZVKp7hKQ7BWGxm8CieVWV1tMitbjnLcH6CWu3ZtzNov46cA1PS",
  "key27": "51BytFhdEyMqdoDoZ8r8vt83Jq69nDUHrdTf13CfQYa7YSccVUbyNnpWPvJCNDeHgX8bj7UMzbDjwQEzAURnKDrw",
  "key28": "44jtH1q74g7CYWGFnuGv8P1vXyLqUfRMadpPcatgGwpM3YNQTDVfabTKZZP8T7bnTBa75xJe5YQaSyReoYLy2ksx",
  "key29": "35bF93Dd6E1JvWa9gZrbdeCWK7mKahHgGxE8DtzKc4DYvxfscjxh8SaCddm3wsdeYUYhRQCPywtzAdunmJt3Au9n",
  "key30": "5zdYENuLjVThRjMhGG5Tvpq6HTTuoV49tkvp4eSpdNwJJRugXGJveXgW4ZTHijtqrsENXPQTus2RdEyCvNj9Aec6",
  "key31": "3u7sYXLQfbFLTPCi7C78bFdN6Ai9r3rQUUVRLkiHaLbqdJN369dMbsuKW9Qujn3aDFix1P6kv7PRCXuTd7JG7xk6",
  "key32": "2fsbwE2qkHT8o3qRCXc1NFWt3PYtCECo7WH69oPLTa1twDEKq8cHhCJPNaB9ADb1zdcYRBXnkPqkjELi5pLU7Ewr",
  "key33": "99QcHShz7ZQPLYHf7vyhSUULP5xoq8Fe4cbwoCG8rpwkesAKAHrqetgpdqX63Qxgt9RmWXkJPj8gva8gAJWCXcs",
  "key34": "2vMMKrC3uBneaL3vZ9HWF1k3MkpY8zcSoyX79kFcyQwYD4fZ7dYVktkCB4wj3Ject5iomYb52nBnrPCQVaM2H2qE",
  "key35": "2iB5XAGUHGhbm9Gx9MG7svZTx9YugoJ81MqRmjYQrxBjwVYbCiZvExdYUDBePykiJ9G1AeJ4zwgMMK11a7ZEsQ4S"
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
