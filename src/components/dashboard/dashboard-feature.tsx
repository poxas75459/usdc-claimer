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
    "1RSx92vDHeiZgzBPKiCgv4G2EtVehr16tRmfso1Jukux3HZ1t3su4dxUPthjvc49RhPMDjAAbKJqjUj6zYQjpVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zu7GFrKfaBsh2s6csd6Lj3DYtY4BGVbD1y59BAzgQaczWh84aaL6DBXVE5mWaBokJqY9Jhs4FgGWKgFxorDy7wB",
  "key1": "4skNREvnRV8oWd23uBfB7Z1aFpn9QdRPaGzyjzK3hUtGXFKVeevUi6eX6MJSNm2hJcSs4P1gge3n5EyG5xziPAsd",
  "key2": "2SpBAF9iZmwAnu76UsiAD28aVEcgneTLQbvSpfRapgaac7cGts2zE2dAmi93sEQQd9EsochfJuYcq9s5zCFgGKjc",
  "key3": "3Esam3tSHtJ59hL9aFg4KnQTFVMzwZqHVAMHKdzgUAXn3jg7aALzshpcwgCyzNFEDiBAAU2ZmQubPR7zJ5RnPrBk",
  "key4": "2V9dUDe7dfvzDGo1WjpfXX9sTyeo7QuC7zecVWWw4pzz3vzvr6SzVXLY4VKDpJXAUaexHDHnQBcXotinS9BwgQYj",
  "key5": "L8Lreg4yHghGtX7MLiNxeD1gta92w6ZPztWKBLYctGhVyPLeoHgxGvrSX1DUcGFw7AJnixfxf9DSSaZjdJ5wvk5",
  "key6": "2LTQMSsri53rYN8EbC6a2NukPDUBy8BYVJdyivZeXN5wkeDfMR7WtEi6Xk3gFgfk59gdnY5QeGCepgsPERpJXmUA",
  "key7": "5Tu3zDgUfHLMqeCoWPSvqbA42LKV1X8FFHbBWc5ToV6GvSH4TYdKbDoiEGeiDscNGAHJoLm581XwLMVbdtUTJzqY",
  "key8": "5hVtXxguwL6Kf9zpM7eoAjbD1ZFaQg4Hsv3cUt5texAKnd9dXMbrABKS7yKoYvXF59aCcBEtN99ak9UqsTks2ZeG",
  "key9": "4x9wU7DBAW6RAi2KJxfN1sTBtPNG5kuqPBYE3zvZ61dPxMb9vP9bGN7onkskzueefMqKqWQi1jNadRSEvckvX9aT",
  "key10": "KqtjmnD5cAymWsHbBybF3rTzaN9CpQpEhzUkLey2xTRU1hJammb6yhVyTicbnCPfX795Fdu6EFwztW8dYDa71ft",
  "key11": "4tjf1v6GrxGdz7R5EtiFhXmieKA5r2fps5MPNU8roxGdChMGmM8jsHoQSKyC4hY9txQKE5rC93dEJno3Bthzu55v",
  "key12": "nqn6Lpo2SPz8XyyVbEsjYZsp2fwxWpnrHKwp443RKqCwBGgshN2XVMgSXF6ypfXtLKssNntoFv2KS2GVs1PDjGt",
  "key13": "2qEmRR6LEri2DnQEQ25DqjkuN76XDs5LR3StYbQZpiGYe6eT22pY6kbr5cUG5uaC8VhThLUuX7onGFGfDrrFJspz",
  "key14": "3pWKjUYEWSiAcVB2cmKFJkV3Co9qd3FDjwfNzqv7SWoT4Yprd7rcVQVJkPpUfroFyjicjCZJNTVc3XrN3BBRmWzq",
  "key15": "5tUdxoSBzRAXgvhfj39goJonKue8iV4LUvLTms78o5wAej923WqYXDBJXkFv4dTR2UJaNMFqwFqvwvu7ABmmq2cf",
  "key16": "GyQdfmcMcY14XAqTZasckYfqtD3Zx862hronwEfUSMt7AAKGpNJXGrbUVAvnVdBJqp2sQd1388yPvpjTNxJoSYq",
  "key17": "5sydQFRibByxduXDp8oo2Ku75TuTxNb9vTBuBYxhJGkmPe6m5LJadnUTWftgPtdxtAUqSv6NCf1HwRbvtmyjqGQN",
  "key18": "4hCWiXt7jRmt3NQT8aPYG15xifdh6CTdX7C78Mw3QeLcKAdw3RXBDtfVzV5J2FCJFGnP389M1nLWVSDc5cxdeRjS",
  "key19": "27dGYbFMqrUm4qC1JrYms5d7EPH1fvMbSqpkHhWs9aHZvgeKX51a1jGbYg4fv2DKGaRGxcbwpnf1NkVKtzHHmCde",
  "key20": "22QPN8w8hmQbDGkwz5VojskZVnmiC5Z62vgRCai9KQeXr36cRkv5XHS743AsBoeUM4cueqHrGbWrZzYWiuNo9Ubc",
  "key21": "2Uu8fjYAgtr5YjFEPutkrYuPywbNi5o8yZFVRN8HKigii788FgVq45sUZ2eg65tjz9UHqrUhp15YgaDao436TwSu",
  "key22": "5yganDfxrVae1wwx877TLURpPQzzZxmsDUGSApu2VS8cJcTeMNftq8QPK4VM8HGr6aqBs9Dis2tviwG4PigmY2XC",
  "key23": "xAEAuHQHkA2g3rNaGjm4nvUfJYG8BmWJjnK3TivkNqfctJSXD55HBzKSjsbZgm8Dg7hfQHpas1TjogiwdGEJJk4",
  "key24": "4ZTC2cwqxfvXUX5XrVYKgSFEvXPRXRwGbmpcKrgn7QrKJo6g9dmw9zABDHCUTmNu6mCvRahywYQ71qhEJ9RPq1QA",
  "key25": "CAthY7XWoh3poc3kWBdAoYdGGrzsf7nrfrV7TKTBgZC4i2nApaAqZ7sbPe1SFkYzpC4MYLftoZCuHjHktYd61sw",
  "key26": "FXcsajffP3bLdFiQXus1JCN5KSi8nVjvZGaN7M6bVC5jCHumWR51yF7xQ2AqVYy4i2dn6ZuWGshPvxpzAiNf4e3",
  "key27": "KtApk4JPpbuMsEMJSeKBCPhzLT3jJP9uYwJy6SA77HGGR18BU4xLucdrTWv7h3YXdzwK7yKZkGVSa4UK5EBRTti",
  "key28": "4u6FaQqsFCLfa2E6apGAA3hrsn3UdbNhN8GcKmqmjoCsZv7MBdK89YFh8NcRSvo9E9vC1RHinefdAs3kMuZydeVr",
  "key29": "3jdGcMd1E3eFaka5ibHg7WfKybdbFfTUTBoZUssJzosr5hmNxVCstRZgcLoRyjQGNMCDqGkxUNguEdjm2672X7qg",
  "key30": "2D5KMcdpJL9HzLU2LzqczEpC6wfAFuL72P1ahRLRpayDSQCsdAswZpLn7GQ7feuCbKJr3CJbkxEFqFEQpCKqWzGE",
  "key31": "3mU7J8NUZQWzTtYLC5pWc3ThdDwWMCJuaQFSybq45GrQrMmJrPyv5TFrVWJ36YLzezgpvVf9vDhiKrQp1cC2su9L",
  "key32": "5E7CbMozLdWQRrfttrXqo5uxUjBUTsZc5dSGkaHXyjMBpgCLSY8umgzRgZzX358GophB2fk5LfmWfn8LENJSdBNC",
  "key33": "2Kcrh4J9qdHxSQL2tT6F25jbPdC7akCbXELfsVjYkqm8KQyTUduXGRHZM4vRL6aUrTEGpcjGsnUwYUmjXKM7vzDE",
  "key34": "3Dd9WuXo7saqacSrKASviQBY3tHs7FEQFY8EWJN8gYomyga4KsxcqHCM4EiTPhtrKYTn4FSVeymr3bQu5PgbzDtM",
  "key35": "z7r3SQTMiYiiaFTrk5cUx1DjMAxzrEtmB71UWJM1vZvzrC7nheRcHU4SgLePNLBKJtLZrpTL5yzh6Qza7mRNnzT",
  "key36": "55czDFNE7vPf7WjPMLSVzbed7z8vvrQT7dU4qawQzXMtBnY2gurWdm4hYgSLozuD6nUwyoYwRREnSVkS9quXrn6E",
  "key37": "CouC5jYSkF5fo8zmqF91NmZz5fmrgu2qY1ucGXDYUCMj4MBvELaSfzHTg4FFEwViQSZ9fA6AS77fQNeAesq7aMY",
  "key38": "3ZcJwrMrYGCyy7AvmxZhqmUaEiqqhN9CSAvFhFsfbJeno5UtpVq6PPXzFE59UoL2MsAnMFNLZcyYVe6HL4mzFUBr",
  "key39": "35wrQoDuu6nzB1AZdSy8uu6NBLNcv278KLRUopb346z7eQVFLVBFeTCV4ogLU9yFqFG5wC52Hc1VPdAGoThSjEP"
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
