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
    "2LjDYQnXDF66gYEF8iGbD8NGQdKJeD5ohMZkyCRE6n2AGzS2WuaLBoRxB8adSrvEgVRJGwSu61MpJwhdiNHbUaXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mthyh86QunexqckGdJDfsXoMiskcwTefR5U5kDMLg7vW1mWeHdhiy57XMdjpsrxVYnUU3ypdweNDLATRe1y2EHS",
  "key1": "4gkYKy3FoCF29Mi5XTR3dPZ6h1yTZw3fAjPmeDMNUyjAEx23eSUAtV681t7XBTdUTwMasjwHqtc9bf5dkzRswNp9",
  "key2": "36MLgEWXzx6HtUcUBgzYAkbL7hKYXg3hyefYz7rU6MmKqxVreG16U54ia9pgkE1MFxLjfXxqiFiwevPzCssySXTi",
  "key3": "5cEvnobN12yMcsCJ4DmYroZfYwXpMPNcx46pcgbS7igPwY7Y6MXbRdoxCo2qtDTAkbenJinWyqF3acdqAdkMCeV8",
  "key4": "ZjkMv4esLXuFoSJjP4uZV5HvkrSddCQSTPKjCh2HGyVikD5j3CwbrSgiu4bzPAzMJMEX8TscnW5NWZuDe17KG3e",
  "key5": "3KuiyUDb9AojeaWz5MGjzx7Nw3zi4KHTBnNs49M3jzWxSBgLUPudC8L4tQbVCKVgErq9T6nqp2NLn9NdN9LApBYY",
  "key6": "57BqiSBGT1UmoN3qHdjqR1Ee1yAJz1hPqS6PZ5QTDMEDEmGt6MKrrR6vhMrSMdmMTqfc67V6XuE7tERv28cAX9d7",
  "key7": "4Hrp3KPJbJd2R21vN4eLeXgjAM7eW3qGQaki5V8tmGYq4jCKixAYveGDeXdwyvkiUAQfhuP9XcAoZ5Ynt3R8xiGs",
  "key8": "5bpoHfWPhAWzsRHB93UfdyHb4E1egEm9LrZPGmUuNrZ2LMgrqvhniGTT59bBoCU6oxbq3QBAn43Z3m4UikB2wUKY",
  "key9": "52HFm4ePezTBWin1NBQXpUUe3EqCATsgQGJM1AkrvnumXUb7zBouGVAPJn8PXkRDX33WNunhqYuKJwGXwCSXwmUx",
  "key10": "3r8uJE7vvCbAGpeAau89tmSWH3Q1NxHVxJCKCrSqCNDJ2fUey9jsQJpGPXrAGED8KJFqeTFQAGH992nyTjjugzE2",
  "key11": "pHKYpeKt4RyQc2UTjTn7quC6ctsZiwHXJCnjdDNKsXBj67fnZRhyCZfaXRxszwEFT9MFKu2F5uDtED26shNiKs3",
  "key12": "knsQP8rkDqtar6Q36FRRkagx81MccCdN4RN9XHAHdBSQf4gMEwEqyDxLbKtEjxeCGSwsNoi2znDEXHn3vcjJPY1",
  "key13": "3ZS51jTTmZxEQWFaxgXjHp5orZtqsuKgb4yBuTzbrQQtzNdJ9VrqqfyQw6ZVky6wJDd2AvCV65HydzuCnM4rUB1C",
  "key14": "4BgiZpeGF1diRaMk77jh657hoySH6Kvu9hjvSH4rtDhSuAvnrJHRu2CNxX7RiMB7qHU1vcmjHBcX55dYuSjQBfBz",
  "key15": "2HXZwVfgNQ9YVWQLuEvQwda4AUgYGuSKKdTSgwk2rwahQJZxZufQsG1geetv2K442qFi7uY9r5J5PrttEWPnL1SZ",
  "key16": "mQMfdt76V5TuWvWbUECW2iReqJT5EnbSwZCNCAqax5r9eek4ch9CW6quJoPfRDgEh4Gs79rdySkN3r8khjsm1tj",
  "key17": "4jgYooVanPYez3FXsk7FUiDu8HEPxxZh8KrPrrt91KNkt6mygWJuFoDiPBghgsia7ARSjrKYpnxBHEcsk9ksbk9E",
  "key18": "sfpJEc4SqPRioYPiYbXsQPkMmZBtHXv8oExzecSFegC7Qt975yd5Z2jWPiTeEmGCcpLfYGmwTBbWjwJrmQ4i1tr",
  "key19": "4agCdSZjfZPy6C6BNbGcEk6noVWboVPECRUiX2jY5hkL7aRCpNr7EcPGE3LLoMUgpsSpzPzmCoFJ9tepUYAYyTTe",
  "key20": "4QXfu9N2afWhCnq62aJk5kkU1mpevhtsfXqZLpzKZmDE8gvCB3QyjsFYXXqJQg9dRUVx2hdBXBtWF8UbG6j9MmJ3",
  "key21": "4efmHgREe8itdZMq2eobBJvB14WqEeQQedy5DhpxcrsMthLLfzZfWnu275z3QqEuQZc4UNaL1j65W1ZmfBWW7KUY",
  "key22": "pVWMQbrrXxBJmZobc5pV8iXZRNK6RXeJ5yvRpAYp4qjz7FzbYuyY8THytnYUcwKSWnmkamFPkAMtJ7Mu6Ed5Mmk",
  "key23": "PccdCVPcphDWsYt6JAkxk2YVC3Q9i3odcgx5uUwuR2xNfauMhQc9kzMcf9Hnt86pTReMDZkNaAv3LNtrEogBAMK",
  "key24": "5EX52eKsXTDVuDDsfxGGV3eyM55qUNUqanN85CLasJGFvk3AzJiXPodBh6B3RW3asRfedVij8jvcrSgsJPrQrJRd",
  "key25": "UEZDBod55JTG8E1yrWob5JP6n2dHyhh1LMpkWUTva4N2cZkqzQ57DTN7TiL2nBCZAHCPsspXxkKeMrqAj7hbdPP",
  "key26": "3QafSaQ9SeQBhoZ4RY9MnQoLX26VxDLS8szavTgdHP9iFUdmex2JQfbcp5tdH2BoVLqxPA2KmJYs62aGVfWMpEzP",
  "key27": "2d9HmraRr8Bq4Hib3joiqzuoH9oqhvXktQAnQ5VgJFXKtUNTttSqNShSbc31ugfCGoUE9SpefUTJVCTdbeNhPbLp",
  "key28": "tasD1YPQ9UUdsFdYAr9iRCq55x1xKU3coJ4xe7NkDn8r7hc38FP8weHssfb9mE224a6GFr6nKck2WH12pY8bkbx",
  "key29": "3zWungLdJZgSLSsCG73tsxQ7NE19sPALboasEoF9qpK4XU7rRWAs8Sgkp5jaAa8YMZevehPQc1GA9oHZUcZi7YGJ",
  "key30": "2QJ7ArDJhpNH4BMWwUUcWLXQmz7Wo9bFfQ3SZiELxurq6RHuhxTiZWMDE175SwhiGcLTeEMZDbKSDLSmRXAjSYtj",
  "key31": "3DVqPYfj7hjxqd7copBd3XqQEtqK3zzFCKAqrmnc5GZ7KkMNA7mjFgBhcBT2iTtajLAhqaqfZ86nTCB3sDYXyTqb",
  "key32": "5GgR5WgBAQS9pWrR7gEGTGD5JkkKdPDjreWc5RJgauncEZBCCxAWkRZzjnNecQ4Gfc8AUUTbu8HoU31Bfq6C7zEv",
  "key33": "3znw9DUjVx8CXJvNrSEgAPWgsVkCke1bh4gEs71JcKHr3EQktn4kQqBTAdtquV6z5qdr9xoGZVeFegoxwp2AxT9b",
  "key34": "5KicYmSjbfzwMC2umnxWuWMWjPUeEGwj2vE3uYBL4ryDfb6jsyUt7Ehavrz7xZEGHDtGwBWnCs5AYEzV6miwW3XB",
  "key35": "4DQ175n56C1zfDjf1gAen3kJNtRULdUGCYbzDbC9Cpnn7kqY5GgMss6Nw2VJRZVaQ425q8jvFt6zkU9h3unHJxMX",
  "key36": "2HrXyuHkdfes4RsF4e7UYQMRNPRaG81WZA8a99WG1MZpfTEQx4FJZYoGzEj6dRWuKq4n2avGzqmRWkXQNszcnNTD",
  "key37": "BGrkVYxhaqvJxGevZpsDcMh9MmiM6fnuCrxXrFrX7mxYVTxJzBnbrVqZ4JBAF7c3Xugb7wFjhrRU2pGQVTrKukX",
  "key38": "4pzirS47kP3ULSuN39eUVqy42NudDvcmLiJ3ZJry88ehh2eajWtWM6zLiPuCX9uCnPe7Mi3ruD8asLxP2Jei4Kiy"
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
