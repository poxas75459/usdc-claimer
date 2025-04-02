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
    "5dNGjytZuY4txkKX9WaNumUw4baxqsezj9BzPADLjtc6TEw71DFtQAfQ1kbBvDwHvARUX8THYH1q6zipzA5VibHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47QmoCzB41x2DEdBeekvJuZHbkdcf6UVH8h77GTNQCdH74MFS4AETW12kLgtBFjwwus5C9CuE8b9pvgnzVufq7LS",
  "key1": "5cXN3ShXxA2D7CMmYVHznN3PNxMUUQLT99rimUbLC42kperJUK545h4xJhA5TCLrbap9WEYSNvYQXpiP5JQURC3m",
  "key2": "2Z9c3MWFNhvhrd6qF1cqNE2J2JTqDxUemxUVZm8C5yoxsB9powD3RowrcSgEkBiZ8eJbDh6QTFVGAZwKEsT9G7K3",
  "key3": "3eMP648kvyGujgJfYaiQJcN8JGJdGgTzfqiV6qq3cEZCSSUPWyHp4qUyLvVfoWL4zjKRXQ7ZNoLvBYPHV5Vr5w9V",
  "key4": "2h3qzfry3q1t4KjjNW6K4JrXFYCn4Xqu1zSDaesBa1iRsErmnbB5GQ5iMPvGemJNRTYCMFxTXcaNiEXYCsbxYoft",
  "key5": "4cLXeGYoZSVkeXd4Njs8ou3oPC5eH6W54xto6gV8PT33aebmCV3QhEYEX49SMvKsJxgfXXEqpFnPdN88EeLFRGwq",
  "key6": "5o695qPQwFdzTs25b6D8boQYb6ZyoDYwdDnprGsBuVUajVwCtNPSpj6xnfsX2EQu8yv9bC2cXBvM5e7GTfs3hN4r",
  "key7": "57gUYo6Dr3rMz31D3TsCXBRwVhuDJHyZjCB6yKvVJedefcE7jLJNW5SZeVM4PGYCQZMgdEAYoLxLyH77BZDntujP",
  "key8": "4ekdWBJRfEZZLVdoEMtbFU3pveEvacKomBVuG1ym2Te7SZy6ccWVD45xcFUGqmH9t8JzwCwpUh8vVkEuhfWfNec9",
  "key9": "3cou6Gqwrs6M3CQG9w4jvRkiBUSPaywYUCT5Q7iRiX8AMAKU1MgSDCuqUYYCkC18Xz2rUY7Ud6Hy1ksdYsdraSo2",
  "key10": "2HDM8N2rHaGVFAYkvcyeepgCuunyohwJg4VyPg9vyXyqjiepaViG1Hyi3BQTcE99PSkNLHamviNbMFGDcoWud8VS",
  "key11": "3PXwteoqPGSnvWg18PmG5fPUeaaNXxWkrH5fCrQrybxXMCEvfdmpPtJFQqGMyE6gQvRWXZzN1fvF8zsSJHZnvQSp",
  "key12": "5qdMH3Dmcphjpw4YXQu6nxzbLhEX75Z8kv4nGjw7TL91g3kDrpi3UXLSRq6E2i6bTJ18vNsJSdbBsJg9Rx6ijBqu",
  "key13": "4j2NUxGJAwY5AxNyFzxHPRqVU27aTa5p3UZF4iua9NAjuzE4syt7Em8NixbSqQo215Hz3Ez61TvBnccvFYhwgMVV",
  "key14": "587AgXLaxRxZgXsvNFreaCBcVp2YwitLozarUEijkEHFZow6GUtGygMWGYg3nXGKix1LkTPtXzCUx1Y6VPxFeyGC",
  "key15": "42Uvfv8cfF57LeAG92tDuMboWL1jzn2fxaXp9s8jZf1KcZNTTso4UwHrqim7ATrgrW2e5cCWYkxp65qjPwfgdUsn",
  "key16": "2eQEFJ8ATK3T4UHW7q89wpkRttYQjZUwYEzbeHBSa4c6CSppLmY9swTJE3cU48P7kDihoCqZ1pjUz5d2XEf19iR",
  "key17": "uR8wakrzcNii4wS4Zo8SRUX3xn7WA2AP2wkyAf8GExij8iGS5RTw9XBgdQc1frANB9wSp3gWzTzS24krusRUSFN",
  "key18": "XiUhHFB3KfetG9gM7A8sqy4WWvG3NbQsXWqraweveDAGVTiTaUKQU8Sz74PuLvbx8koNv6wAwgu2sGTSX3oYgaL",
  "key19": "3beX2wYH6EL1ZDWvavFNzXdxtMkGogqpa2qfn9qy6MmdziwNkxzTWsbf3ntERkTEb7SthaUyGkuhemd2rDUwJkfk",
  "key20": "3Gb1ycxkKT4DEDjXB3ypUuahqREgLfnmtcMzxx41zPvnPiQjbxmFJ8Pyt6mxB5NrU7FnaEAmMEuFJnPCD1NidnMG",
  "key21": "88M4y4P8TxkQrHvBU93KT8zMzd465S4nxXSQhbrbdGfCkMBEc3t7rNYWLHfN4rxrC6j1Qh9m5LcEARoa9FZ53qF",
  "key22": "4VYVa9tDNzNUZh477edJMdTbGPspuiM3eCe5vwZTUUjgUrv8NJT8XppXpx9rw5FfdmbyScgLTqPJaX47Xox3CYFN",
  "key23": "7J6gLrYcFHhrVQhqUSTLBf1gieJMekPnp2GEv9tLFbXXShi9dUF1Mq6kPj8e6u2vZy5uRQ6CdxPbqeqj6YHDsdM",
  "key24": "2WXBKUgqn43iKRtraEe7qPwUAeieNt4UqWYSBw4qAz3QRaDdvR3M1MuyYAKFtgivy5Rv5PjnkVxnNyrQFfyUsHPz",
  "key25": "Xwcgn1AFNSTPqoHwGT3fR1mAD1kTsY39XCaPqbErzWjfRtGSk3QErr5FMKKq9Hywco567y6XvygumptTotXsMVG",
  "key26": "4w2LZJpPdYbY8qu3aytcMTkDepmG71BghAB77hAmtNgQitXq4rHSANNzGv71FkUmybeBtmntrANMWWfsbwMN6yXz",
  "key27": "T4z7DHjzfGE18g38h1qiX7o4DDXYGbcKcHA5Tgsx9Vy8fr66W7Rtk1YJmauVxd7MyBKNXn1wQVTgErdf3cDjsdY",
  "key28": "3Ua7NndVNNLhKyeBwBvpVhMKY7EmReoZvMubrkuV995D535PhWYnM5FRwkSBkzub8GDBgiFbptrA3cSe6ERvpYuM",
  "key29": "532bWwr7AHwPCGbWuwf8aABzhFRZdcdaUqLEoTz2LVSrzmyokJcQECFiQc367UT7AwmqZmkJgmgeCLHKHmNygkD"
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
