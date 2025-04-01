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
    "65M5R6mfydrYADo4pv8UYXNzNfEbPCPFPUs6YpyzzZfVizCme2Peq7dPjhNVijMx8LuHLuxArPw6DAkTaqo2bNGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nHUppksqBGReaBARvrngGwHNAvMahfWVPx5gAvsA5ANCJa7Wfxehxwitjx56yi6N69HJhhfMwDuC3N5dK5HxmuN",
  "key1": "4E3o5bH1beSkMHMFVmLxo5PnisznRugCS9btscsmrrXQB56hXsfHcTcnrgRkpssreHwoRT2jgim9cDdurEL9Vt3k",
  "key2": "3YKJ8JdUxANCDMP9WBZsjmN7LiNgCtAiJmdGkmey6DFnntEY2ewafZ314WqCBz3H95Zt8Nmczne9wb3xTQATUWSg",
  "key3": "4DhBiiPH9xGYDyqFgTUN4cEEPV85hjf5CC8whnUvQgj3WofAd6hC7C7NFu8haSviy2mMiwVNr9ft7CGMUxbBZyBw",
  "key4": "31s9RHdhjPKKJF2PqLDpALEVbfvwy8ggBohZ1JgzL6UpMVQDn3sW8ELjynEGhgNuzvc5AKWsmbFcYKeeuGPtVkUD",
  "key5": "58irJy51PxHZQPBQWdLcEnpa4W7Zkfkj9Nuvfa4RZ7kCwSMEx6sbew2foCiWUUcct1qXYpjT4Mn1oEeaZqYVzje3",
  "key6": "5E5E3hg8Jfoh4HRjNqGGwYhAWwjSJP8GGTiBtJusAVnhHSregqij8mTKN6rSsc8SUPEp2dnnTvAxT7u5qtXg5Nc9",
  "key7": "2syToM7TJrTeLSZEQEME1VuaGpLrVxAzLTtQiHAeUmBdroxUn6WtVpgW2UpRiXTV2uPwX5R4kgjrANL1qq42bbrm",
  "key8": "5pRbWvepNgXF3c6o4xLW7d3y5xe1jjt7fsGwnkxGT7zmB2xZnhUGvZM964cwrVAqA89BrZ6JaWJwK1mktC4oEfd",
  "key9": "4SonPnxQiw9hjgZxKKLQi6nMigcPm9Gkjsc6gNL1uSchVLy7cGHqwvgZL8W26urK5nzcPJN3k7grMCboXLwkHcBt",
  "key10": "ksQKXzdGv64gzNLVpctNLXnXZJsv7c2wFCfsRuFTtCKG5u8aAUfu2jphTHknSg7N7Cfd6DXuSrFRnrsbK7gvbq4",
  "key11": "3B9A9Az3ptraGvFS1nUSZz7zyPQrXb4fh3UTJfEwQggzyGZ2rsieQFAP9yg3b8jEjzJnP7ghSJwrrZR1d4LDZwKh",
  "key12": "3QNuAEeJ4aFVzSSq8nz7EAv3sAGk5obvH82E55n13Zj6FgymcCavoz32emA5Jp7p7qkzpAVNBUrAnQL6BsmPvJVC",
  "key13": "3zdM53pWHitRBVHshEDJtUcZq3RbywUQSL34ptkMX2oe7FYJ8RoC5xcZ1aPYWnxsbSEbjLmmHV6SYKTEXeZch1ke",
  "key14": "5XT6fnMSGGfXtsgHYVJviQmR2K8Y5hD9JkAGY33VSXJGMRHqhCjW13Uo13oboh6jV3nGGReKcmDNqtn11hr3JGKn",
  "key15": "384bQo2GFjGaa2yA7Y5FZEeNL7bmreqfLdnswVBXZ9hNei2rWF7e7f5KmCRMotrS8pF3J3Rg3da9Hk83fB2RCYaC",
  "key16": "2Kgn4wvSRTQD68JPjDSv3sFMfAKecC8ZWsggQDCcBPM5QgBLnSZjGBDN4zXTBeCrgYrpTBAMq85wV8fXXBVBApPv",
  "key17": "3zdS8EQ3ZgnxzNVp4f6saHdLWs6fZj5EiXWb4weiPf255iKawL9Ycf5QzmGH62ZjJb45zVoPYAtAhF6W5qPG1Bmb",
  "key18": "2Mnv7W5tWWdTdrpzmN7EouLrMVfXBBmHRKy74DTsfkRHY2VxqEbVhY1XvQyZzs7Jp7qJ4LyG7UgfvqHmqVgGCXqQ",
  "key19": "2JaceUxACEcJDxiNbAw4gXK9DRQhiW16CABFQAvSpdSL7GDJB1nnEGuXT8qRYAHMHXmLXECSV9Fh1DJFrmNNtHFZ",
  "key20": "29MkraArxPb2GNh1i1ErMWUc2gTkFPzgimhrHqANAM4a71SDLN6CKDYBzPvWnLNmg9BvTrszkNaxKPL9XnU97Qmz",
  "key21": "4VWf2X9U1VdWUB14Hinuay2AgcrWyaFwjdY7zkxHK3wgydPboxhQTnBhQxD7aCsRpjCf2itUcStKBUMyQzkWThG4",
  "key22": "4oXGAwXCtv7mjQZFrTQjqApZ9GdCQHC5x3mevJkVmD5JKp38Jyxn5vgdgiQbGtTaYSLkUYvULK3zq8wyQfQtAbqe",
  "key23": "2o7vBeo6dTkcb1KEWKysNxFtkbgKz4UNh7Rt9BBhMzFeiojX1wRptz5FQcipRP3DDLsGeFMYYaN8fmS7wEbQmPst",
  "key24": "4dRG9gMx9DUhDM6V6nYVLe5ETwBBbGCBv4bSW9Qmwu2pmXPnFGMtfbcLbZvhGeYJ7DmkmLtwuPGTpfv3HTtxHwNm",
  "key25": "3JPYK5yrPM9BSayfBz8dnsKNM923AnitwaPqMjQSbx29rsZshgkpxCsm5g3En9GSbLb7pCrxb7ti4QcempCzvtRB",
  "key26": "4bc7MREkxNJyzcxYEx8Rmz1bkfgniDFPqsNcNY5cruKha5ZFr3jUcitooqy9XnST6CSg7AT63xsiwy5n3pu2QwRx",
  "key27": "4afXPE4WsUn2v75mzPyLGyqW24xhG8cFykePAQvvojL2MThG2rBbaRF1XLsfj6dC8ntdERQGunKdsnSEKXqqpbKG",
  "key28": "4UZKqwiAnHhXC41eEk2UyRG5mAwmrwLyaCNxuhrKppc3yzdS2xNgtMReGNf66Tzavs1NSYTvayBaK7R94S4SWjup",
  "key29": "5zef52keiSh7MRaz2oMHUcoXknEXgk3aWUpqEN8R5APU1soMH9wvhEKXkfNphRVq32gu1whkndnvuvK2LJoS8J3n",
  "key30": "33iqbzBcALRd7Qm8JnL6vRNe6Lu8r1zsQxWnw46BffgQMivP8pnQ7ero42HaQEB1iymQsYSNefS2v8Aad1tPy7n6",
  "key31": "3RafxQFbiJFhLajazMi892Vr2a3GdEbVLUzmHy2xY16E8EubRh2M2bVscXthpTUAbo17e5PRo17wMwdiNs7GBJXU",
  "key32": "24ytUr1m2rRWS4qELYY8eyKo4BkjNgspUfRND5mumBevZ9GtW8EW6e7NhcG8DfUASjCmqgxzsgM2NQY2woJrn3uv",
  "key33": "VwiAYEi9uHiM9myRbmuiX29TNfC3igQTwxnjXKnMoqpqsbS2EYGoMQqv6ouu55HiZxwz4zKWw7ZB96j6vyPWbQe",
  "key34": "5iF4WnDfx93DcYhbjgeEYk96GdqyZJCBP4EQZBF5RrEQvS5CEQLJhwyzeyGx1pi8ivwZLvRJtMx7WEdS4Tz8YhMK",
  "key35": "34YvUKwRhqwdjDT45SStFLWY44ggALyvEzGReZHL4GtEguC92RrZjcnEuvb6HWMBrotBTJRc1DzeQFRQA4cuyiUd",
  "key36": "S9F7LmKB9w6TgqimUEhRc6xB3sfmS1NSgehdevRVfa4cjcMz6eDWG5qA9CADmZaZb76r3V7CU24pdxAPKbqccVK",
  "key37": "2tYnoPvtLqc1DX1VKuVW3PYkjqb4kXWFaZJ5qt3scyjyZoJgD37uUdwhhJBX2GcCSHWZS5xJBiFVkcavowb1V8rz",
  "key38": "46vaGTTPJncxDgt8vqFt7d8TPnxrSC1SgtkkY2q4Jt6K7jsUNaLyPH8o5RSpGLXuuKDRnTQSaGCVAunuQQ3pmuNZ",
  "key39": "2mGrWyxEbKkUq7G293N5bK8HCSFouCRpn28eBSd1HPX4JWEnGEow5SymyrTrwVb9bEeU5dhbd1GmRKKfmbVp5vzs",
  "key40": "23V8bTygiyPPQTnVsK7NcEGv2hgaKZeiPR9YEbqkqZik9u7ytUHYbowqQpRXMzbjYXBLGPWJbhHnYN97mDT3wfc5",
  "key41": "2eK4j9A7rEoNuAh54DJDBnvFtjp6VU6ZNEQUifM9Pb99c5gwQqE2Rq7zw7apaEgDsYwUwNefW6EMkaPutQfFMZKL",
  "key42": "2thz8zhefUXxN6XMDyouB3d8FNakjNaZxudfbeR572hP27e4Sc349Lg2w1nZc2gyJVQ7D3iE6okBGkXzsPttpphT",
  "key43": "2LbkaRQDFqHEP162JoHaFt5v1wLNzVdkMycFtZnHju92e9P2F17R5jeov3ubmhXWRdZ2J5MYW9nX9zYqK3hVbNjv",
  "key44": "3emR5oRAoepaoAZGNQQmke47iLdd6PKAHM6Vo7RFYNF7ZzbnYsoviaZRB6gQv43Zvd9KMBFX46oE5NuTM55cVxin",
  "key45": "3LGbCiVCeqTVyBNNTDxCnpgUmXrP9er9awxMcRfET9DqXdbNmxcKLYTDa93BhaqmsPvLEMeXvaPJL2hRo9uM3ZPt"
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
