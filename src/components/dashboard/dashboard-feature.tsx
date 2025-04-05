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
    "2bdmTrtUrCAJ4vEae2tm7WF7J4GKw47SMvuXQCTMvEdpBW6uxYmQyQkcba73rjsN2RGzUZfoi2uCS2tBgVeYyFNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bDLUJJQeVV8LvDqVqVVBg8eP2vHAprmF3xwhNjNjdWyHccYUYjTtkEX76RS5MdWLK3G9ocsERgb7ZaUvRLvGAKh",
  "key1": "5SeP157Nqf5yqUchG4KegFLjE2CNoWKMAUK4YAxNZN9LMmPgrtEc5RU1eJtY33grisx8RWuYhUp9AsiQ38J5or6B",
  "key2": "4fYxShQc4PrkKKMv8NeCVjAKygBxeHprii5dCZKNbkmDb6ypX4cwfSzqKoAYMWjoDtf9QzcqefaxaUnRBA7414nE",
  "key3": "5Mhb9aPF3MNB8hsnXRVsds492LMdrhjQAXr86PCUNn2sPkMRKYeTxvxkd944ff1vJa8LNWhVpajZixoXCYrCuKgo",
  "key4": "4SKYK3rsaYUThPUWHeAcnm5cxM6TwAptge8J9MKRz1sWisKW9sKp48J838N9KrbNBa7gAUSbU4XPBguHMnFTqZno",
  "key5": "5NYDb4xWf34KhiXTAuD33nz7rSgYfd1jz96fZvVvSv1kn8zpit4Y1eaPKtLtdwLtTpS94M31UHsAuh8yMCDwfxKq",
  "key6": "2wP3KcLGe8xZdLmPSrkpW3bsRcder33CFmcQeB8KBecH154Vpv4p8jtZ8UzsnqSyecPRWy3cTvoA3vaec1nv8DQe",
  "key7": "58tRiZLDPtAxdbaVva8ZmNS1DHdhh8ae4kG3m22jEN58geGL5Cf3m3vbcNyTYtFqZDEvsUD7PrH89oVPES3N7MUt",
  "key8": "5pBPs85EfZFKuda6CtdmkaRZUDqJd21rb5chvqnk55QbN3cQ6WT5ddprLjeiirJJ4sEPjsWnm4u3DT4e3sXztyAG",
  "key9": "r8QfaE36ikhVh6QMbfLsLsnZBPVVEntbzCD6ifGH4gkNW3NNLnKVMUcCTaTcyfkhgqJXp4PyPcB3GmxJi5V9CBa",
  "key10": "442kM5aRDBFgYVSUwM12K3ysTdWCfgjYEWMmbLib7q5Qg5NyyLPFv1FgvrQtdT4wtZ3r8fNqZ61Pr1msbMAUb9iw",
  "key11": "3fzdQ2yuod1ZxyDGDxzVSGmpEdU5rebs648HY6K4vWtw9VT8jyfcre8tXzSwfc8DVNT155a2Au5zL1jiBQYb6FyQ",
  "key12": "4N8scmv7vSHhRnMQDVv8juQsnsvEEm3E8cuZibiHZMe3pX5qZckDFPrj3d3ESavKmJyDFpoomMaN4V8jNMnM29TA",
  "key13": "24BRnevEu9oxNwMQZQjPjZHzwirVyJgTd4HyXHsJtqQAu96jsY62jMBkqpddtpguAUJTLH4AqqAiYS5okbAa2pzw",
  "key14": "2JavJ6n6hDNoHDxZDYQy7i3icCS549UfQJNAiPHzEF7Vq36pDb8B7WsnvADV7zXB1VgXPeSpVS3GTP5yWUu4gAfR",
  "key15": "3sSURxj5tVX43m6nEQLpuGDLHaSNFCuK6g3K53TMax2fDVy6pWtKYhPtyrpCMY8vjKX57yvkoaK5Wzo3R3rFU1FC",
  "key16": "2NUeRByGxW451386znoYJdibML4QmtNSZ26kH6oDPoccudUtYhCA9nBRUwLXFZCnEJNagTdJTFPhLiNNwgrNL7FV",
  "key17": "3hAq3i2Yb6iqngLMzg61K337JWd45xq4BPhtUfPWuevoUyduNHu2oVTSjpwt4cYAqQNKUUSGnHLL63EMUZQpWhRZ",
  "key18": "hC7ZfhV14WovfJhXMVgEjcskgyYQcYXp2ciTgqtN74XxhoNByaWWcBBRcYbXZRjCfzv7gJ3UVmDq4GnN6vfmNGX",
  "key19": "4q5n6tBeDzwJvFFi2WkruBgGv6ohHfGE2K6uwjgwxkjXs1TQwn2j9nza7xSszrLCvy3d8r2ifYpxRf96vC69TnHk",
  "key20": "2PPASiWnYhEWu7o3pGmreByD4BfrBUGnzm4XtY7f2fR6sepcmqD9ZtAZhhS8n9psbPgZhzbEJeXVFwoeiFsj6dhm",
  "key21": "5GPz59zGrgqv1Xq6QPxqPQPfn9j4Xg4rbBFrCkAhhzis7xad4bANdj9cL22rzPdqBG3EWtxDuiqnPwRmrM8dV6K9",
  "key22": "348aYWNgsaCrCnX3iRDT9Qr3bxoVdTLdd7sPCjnUNLjZ21fDETcG6bt6wChdu2gM5RdfcdStrEdvJakpSiPHxRnL",
  "key23": "2hsjT4hvX2yM8cBvKZGnRiD9MwCpzmLzuYb8VJFtL7vozrJQt2njGKCoCs1tVYpbtGDKUiUyScJuVVH8gu8fwsKD",
  "key24": "4aCMJ4iQdduUd8Zd9QvM9sJ7hJaWyNGedZ7qnGN1kFsjjzCWef2U2MRzVvVmgdNVcEu7Ckgq2MJHLwBUt7VRN2Km",
  "key25": "3FcWwePNBLfs1mkxRZ2NvoucPuui1m8rP1KijBiFrss1HY5C2KJDoU2RUjg46cvV9j4ctc7PwQK6GSLT9mxNcvQ4",
  "key26": "3M8KkUpkAVi6kErnNctSjAJi7jefTcmWnJgX4Lk1PoSJb4yTm2TauY3QHkGHjzkzRUBjmEcHTiwMbCwMuNmBEcNP",
  "key27": "5dDFBwbbvALCE2FaEkBeG8agTjCGhWZ5p9H8pvLMxdHuU5gXFS8EFcPKygZqkBu8AqKxQn4pJ9yN24fCXozoUJDQ",
  "key28": "3SDdT6bGBax1T8aoovDCjWFwEbLgqHFX5zKQmpNvMAsgzCmNh93ZNuxGtrA2Msp7sdYP9DfKEFH4WqLFmvfmxBgM",
  "key29": "399oENMdpNqCAxC7L5z6Wbz51Kyr8aL55GFTbJPmGGsFPBPHqeK9AbPJDa6daAbhFXBQgY2sjfimGhNvFdWV3za8",
  "key30": "EcLzcBhh4pTc1HDxZNxhx5Eqbzbu5GSp611YWVn1iDGsk79ik9TJsnZZ8UcD8vPiC8NDdqoyTmiXvCj4AJp1Dx8",
  "key31": "2iWsBeSBQooqo5hWb6QsoTpND1L7MMgfi8y6BdQ9JWmc1oSzvhCroQVA4azun7HAMQiLAF9mQ9VsWx6UDPz9Vz9E",
  "key32": "2fcZXuCfeAgMcQj7MUDzP1287mXGuajXXXKwazWEDC5F3GR3W2ip1aCRXgRPqSh33cFcEFn719cUU9k6fqCuvv57",
  "key33": "AqFw5i9c23xSSoog88QZP68oNVUYTaA31CRma2iwFKXY83EamWTD9tZrbPA3mBBfE3YKUSHqsNNAseVqc9yzXHX",
  "key34": "4MA53uLvrDcNHDyRQ82YbYxvLiqX56a59kmaJMPcUKYSBKw9PoyUvWKL5m9dnDmy345YuBUn3ZCgyUamQGwEDNY9",
  "key35": "3XMTn66dA5NYS6erUcMGPejCftoApL1fjJCsHtJ1NBXtqiwv3MQoS2y3Go4Mxe4mFKDf7TKt4afbARmRDMzDnKdq",
  "key36": "3ZJfkyLYkR15VkRvoonVwCPVrPcRcv5R1W1VV6yimHkSTRcsLrgAGPX6ad2YEqLmwcMcHU4Ujf9urUSz9FZ3EtN3",
  "key37": "AD4oQnkMsRyzCBFJ8SDx4i8fduG7Ypx1cdbpMEjXzA6uoyF5UmunR16G1Nw2Q6QYuuaGsXsoEv7GTv7B58Ym4TD",
  "key38": "3bd8wA1GnPjAyYNvBmEoV7HEozXg1by9d6KLV7cx5W1SBGopYMDr87QEAPBsTr4qUpWPYFqcyLj15gxM7juReDV",
  "key39": "5AdqVYoPVUeEoCbYp7uAB5g1SBjUP9j123jggrvxaJiSDysj6w8Cry4ko1w89kBQm6Q9LhQoRGRnFuRv7RZ92Rkq"
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
