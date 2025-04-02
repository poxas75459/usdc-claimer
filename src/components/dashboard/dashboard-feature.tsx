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
    "3xmRMVoniwdjWBKHBpfYMqugjtb6ZRx3rGkUkNBPLRz9UrifKsh5bH8CXNYzbzcWsLALMTNZp9G1xWUE4NaDmdJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CgqkvDLFgM7pyWLtXnW4ZKd3UmV52QtApdraxo3mtGkLxS71TMgkg65jKP1qcvAKgEaNY8JuGLUoojma2aZi2pC",
  "key1": "QfqKKEfCimG6KgUC7RTUy1tMuoc4UvBZwy677Vv8agJ88ugWnArRtQT3Z1cCJV7dnwELhrxzZHY3SPAVZn9yboq",
  "key2": "3Bk2KEDRWAywBtkwVBxD6y5nhEJyMbgpXT4wLJjLF3LQWjoHnCdoWS7N1G6ccyGZ98u9ioiyTSS7kZ4vyX6qCun9",
  "key3": "Sh8su7bHMDbgFok15oQ7huSxhxisdWS2BhvVzLcDT7aejtvvZsZgXa1fjdfiKnD4g7u5gCnAHGuBM3J2Sn7XtXQ",
  "key4": "2i28HViSUGUZ9EQYMU9eaKtCRyMBiLHWmErdwJR3WvANSoC3Lsgo1Zc4YHoz3sCEhUtXpWgi1r9L3V8wTZ1VrjLB",
  "key5": "3fDHCF3NJoR4wnWLwSJFREhVXPnuJ8aMBDpUoPCUx9cxsRJEqxH1GDgfJwNEAzUu3LnZTqkAUC43kHJcW4rMQZLC",
  "key6": "2TYvoRRdKTcKb58eoP2CLVSYodH5vrPukCqLyikH4cSvFz8uUVuVLHBFFkMfFAW97GVQKjCCTWQVBHuMGYgqeZfN",
  "key7": "5iA4bg3854wuZr8iBfLJ6jqbM4smwNtEyUUUsm1pLNcFE43fpxmoh5jE3EUQ3vHNwPBpeP9LsVEv6SQPbev6x5xA",
  "key8": "2E5Feg64gDeUJDCc2yH1H7gWUiqSVEZxkP7sJVUSmq4dbbEW1iyYYS5ysMjPa6xbRKc8FYxMCWvYux8221tHA753",
  "key9": "5PXNbyVN4ykTMJwX1GboPoq1LXyCZnH8CHyw2dqusD974XFRZdTXrbt4fWoBThgFoq52DsXTnqM1NekMNEUh7G68",
  "key10": "5dbon3HAXfRtUiwR1dj9ctPj1zGe4YbcvLhNt15TgNp6Sgc7Vin6ggs9bSqNqtYXtrWqucr87LwKym6Lcy5nCpYa",
  "key11": "54FC9NUYEqbxd2yfMUpfVhTNP4jWPeRwbN95sWzmL6nVsV5FuxgwRxMqZM4sHydRGk8J7kWRjgCgFNGjgRnZ23LZ",
  "key12": "2Ri2H8E6az2WMhXKioNSYTXsCGc3NcGjBLWZJtebSNGhhaVdzyRyouSRJg3sFGW1JDch21Jxn5YAM5cJApiwc6nM",
  "key13": "4tCpmTVRKRMLC2RF7eF9RMYFCprQ64QWCQTLvmTNZZTefQKsbMWpf3CFeaDwb2FEFYPJYU8BDYw3UFdhhxgxpVL2",
  "key14": "3wi6wm51p15K7hcWQXHj6Uy71qTDWn6s6YRCm8zbrvK4iuAG5e7qqsB9pYRNbfsHzx2khDcss5hwwgovYLvD1c2Z",
  "key15": "VNpYVxwzqU5EXkSeZGd5UWAzYurdtccacqxkjnkdo7YXVJ1TesVrP3QPs7Vw4XyvncZeRqsEohar3JWqQdZ4z5j",
  "key16": "6TsrCChsmt7efoKPbiS5kVG7t2ANbYb2AECZHrUvTwrsafswZ266CU2dnohHooWxDHcL26WhECceDQp2FsPqmUm",
  "key17": "64m9WktPP7Y7943dTHEywyF4wWcsCwCFmPw2MN9xG6XjpaEw2RDJoKgqvwuSxSoFx7dcceCrvFD3nygZBfPJqnyo",
  "key18": "2uC22yrMvYMqgTQT4jjeLEkoRR62Xo2iwA7vnf4n3NRePtH3eUJz6RgT8cgcAJRKACcGUV644a2i5xL7khrPvTBg",
  "key19": "XNG7RehrCcUPVyFewvhtsyyomAM2yNu9Z3K4JEA34nB16tAqLVv6QDKZKrrQ1DfsNfLDZJhBiHRdBsFcAgukc3T",
  "key20": "5GV9JBB45svRWkC3TeqUn5L3F9kNkbJxiCEcCJzCWmRKDNphrdWUtrEYGbVNroikCCHNuh7BTQPg5vwWzm163SHw",
  "key21": "3xYGVY9T7GZSahMAoiRmGwpgZchdbxzATZdanGJxMG4KJzHWVYbmBF9WCPHxFgcBXVMwGwkB9VEWY1ZwmTaRaYkr",
  "key22": "4skwB3dxnyjpMbdUYr6HaNvbkuoBf8eJP7izBVmANzEdDLYdexKB91KJs7X5hZwjaSC5pXsDQCUjoT2pSbknMdiE",
  "key23": "3eySbVi3YKyjHcRV2pUGdboojqxZeWZY6j46TKdSAgtM8t8UWy7UyXR4D6kEDpuzA4PanrLbGEpmj7bhWSVbASdc",
  "key24": "4bpd4VH11RRVaUPnWv8FhfpCwy5AJexfFJVnSp4pTULP4oNGVkFYNXdL9PXuTLkp6m8NZ6mQXyEoQZmqqz9UgQmJ",
  "key25": "4998GFjsH1KXA7xhcdwJdH6ALyeuLyfri8oZtY777PYjHMiHBfoZUT8z5AZy3FVakw9ihTr2o4JRWCPKAwEUygbk",
  "key26": "2fRQyGR4pM2TznRfqFX3kT3NjSx85QWjQdUppqUkQrfMx6DdCXAzL8GKZURBzN1fjBXYSLDNLT4Ei7UcmNCsZT7x",
  "key27": "5dVFXApzfbyxSzzRwccmc6UGmCawix2Y7tz9Q4QjDw3gnpUkrV9AW4QYtyHaACj3ycQKhoczsmaaQuaj1nqXDAw1",
  "key28": "5QLVMJRj43ZJUHBG8WagEsJnAkHexgyqi21wkmeCZcAY3zkyPi9s4ybKV9vgFQSyyZN2QiGAmevLgYSmYq4EaHAA",
  "key29": "52vgDMiB9uQ7MEMzmYyzMJRys9t1JtS8Letbr3GTtTzw5yLiRe3YQV43ffoX3z9bF2UqdhLbjiH37STzvHqVs1FD",
  "key30": "H4sgNMJzeQBQWDs96QQCoCZkec9Nn144X4ZEN1eM21Xc9uv2UriFqWRUxqucNDyHyi1NGAGihByvT61MYtKZ3ED",
  "key31": "4tEYnvSQdQNQANaPJGQugR8UAqgV86FkvJ8eWLqaoFGWRejrYxS6yv6n2Hh36YBzRMTLCt7oZ8FwKR11XoTLrMZ7",
  "key32": "5XfhX1mWhTuE7Nxm3nReYZe7TjqntvVwMYEemLy7isBRSRw3PuHsoUcH8N5fW8N8WTS9wMsWz9nrkCTH1zFxvueV",
  "key33": "43RoYWXYhWch9mwEbpmdyBCRxaQM5yBTpBMVzaGPPGmhibBGGfG9HDvGga3FiZsviqjX3oQEjhrhGbfVa1FtMb1r",
  "key34": "2iwNtwEBWamH8irLHEfZFKP6PkKDmkqnsrCLj1kqJJsijFQVzHBbMR6zb2sDGXwBCAJmYYTC8fDrqSP1sLzjECrm",
  "key35": "4bES5uJNDGjmxQMUdxoPZoJMSvpAtT9PcZYC624LSoEA8LsVcWgnZzKF4wH66tCAbiL6ZMRDbBfxbvVgfeRyX1jw"
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
