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
    "NbFANEbHfMnWRnj8ffvQqnQALtgQW1kE1tvjDYvATiDqvUx1Se5N2ddZK7UHjjNE9bvLG8gPP45gFHYRmRAmHNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NCKFU9fuagm7K95RAspCzpcPAGwjiGfu9iyyuTMi2KwME29PkmYSBqeysnzhdHdRzNT2M5D7iicBinLgSjEH1Sj",
  "key1": "U8Kz4ipQH7iPDGBQn2JjFdVo6My1RCcZvQtNdiwMAcQYXgTq1nuTUKeLUT5yXsBuN6y6Cc4YtqBUFKZAZa5AqTq",
  "key2": "5GS55s4QdvjkFqbrMq2GB4woaYCmXVSb94eRvcS2XA4ySjWum5NZV55H6ZXVWy7h57Mar7TnWYMVHBmGJvRLcSGC",
  "key3": "YNMgvAazD3tGMizXY6NUn37TB3Tq95kBxeXeARM6sebp3DZo5NWE7MdfUtgZz3874ZYjrYAmtzi7RTUPKLYnvnf",
  "key4": "2vB9Kgu1VqjpdmJvaMkwwaxoTiCpN6CzvJV2pjftcVPKf6CG4eowwBc6Y7ANd7ZpKXDGsLuK9s9Zu7jbgUSpxJpU",
  "key5": "5YrrFsMRQXU1NRTeAeKZEFEhMjH9rzXJWYEDMLaLrMrorXx9vCBbxs5XvgK3RT1K3hYahwmswXrBdWv1gmPwfgKU",
  "key6": "3iyuQ81nMU2e38FBStuEtNkCbjMMgmQqn2Mk3vNzoe5w3GGrEDLWz2WBEqwGG44YizUmwNefRgZWZnMoFGj8qsLi",
  "key7": "23dSEq9Yb2euusrnJWigaBKZa5KLMsiW8JcigJZovJTcmgYzUfBtAq51M7iMdZvmX7bG9j5aKyVfsBERucSgLFjb",
  "key8": "hrqXPYsLaFZwVqafEEh6xqs7hbtCdtV2zS7X1TdUto2oHcqUSZSYLCi1H7n9DywAGVnuzosqZQEoix4eRV5aAW1",
  "key9": "57iP4sF2yucNisSuJYHfCWGNayPJuWBLQdru24GM678RDS3Z48MUSYWvbn4gt7PXzFkCbEJApJdKcnhVVDDhqZd7",
  "key10": "MBTuE2rR91PTRkdLeMr8EJMMFMkKjiVaYGboAZvjoTQ4XdFu5L4a67WAFqkNWKfMNWCH6VXzXucZjWpvZd3cnaR",
  "key11": "49D7WVuf9Ekqu6bHY2QVLNZNSnhxxbRRq17svVNhcdezu8LjgXxTb1XyE8WXMbpUgMnHMzjezLENaHMKNFGQchBQ",
  "key12": "3pohSqtR9YRKfxWPZEyzQXs8rABnh9r67APQsVkBTQvet6rhArKdP4k1bHzvzffJzEQNbbTNmyjPrZ4QYxaCMbqJ",
  "key13": "64ToheTbSUDLhwhibmhkYYyy9iHZqkZGpEEAtFeYW8qH9RZhrGX9ffhMBaBUyBkio9QK4MqrUep6LuidGQfV92nT",
  "key14": "4GDCkxoyJRSdWQu7Bk2wsmm9T9aW3v8vKX4oKYr9qjbjBiwwitJRLtntg58aj6RYcjcpneSCsGJLe3fdRk29cqvZ",
  "key15": "316DQQLPyyrz6hehyW8WuKUKKtS4Ujo43gRGivCjMnAd4akdyVePPKxAhUqopKbbJzajCbqUboyVPTvpAJocDJvF",
  "key16": "5P55EyMnQKvraxchrQutqTzkQ8LXJeUTMsnf2bdYxAW5v6gVxWFYL8z6VktPDigayw9KzbReizREbxCFFBUnPPvf",
  "key17": "4UrVcCQuQCNnuC28cJg3f1SVc1Az6cuvhZeZo5mEPN1ez9iatRtf4jWF7BibAipKDdFvVrCjmetr4fnDLXiPiT7N",
  "key18": "4PAXeJjx1adR4aQnAsvYpzUCdPmCSoXmpgFabuR9cAJvkgTU3Hc61ASraC2EPEL5N5p8uQZoBDaebbea9ycsh6yK",
  "key19": "5mAHS2oineoRisUxaMDLbtmFyiGjVCMzq6D5gBHQGx5SJMA8CEy8bMQbXvupb8tkZ7QDnwr8mPoTBgWQdjL8eiQ6",
  "key20": "oB83ZMUeaxqdBeeZFeTdYW7nMB8oEJdjXNRph3v867v9Nm9PVP41u72di2jaZ4b3k6sKamruevFYGyJ2Ra8Soff",
  "key21": "5Fn7GqFAyPLRz7m54oDtHmVMooF5LyuhNzSzLvpJNPbNCmyNeJgCw5wMT3EuVtT8SzqGN1KRxxVDnc36PfCirssa",
  "key22": "4AFTDgcKcFd1YbkTzipM1htbsrKBr6mcUys4GKN8c16AEfLtn4uKVkyi6HW3RqmodK7LdXEJjXgxnnhoysyodLvf",
  "key23": "45PUJtDuC7wHjV85URvCXoCXLtF13HS3oc4AqGmMcEWBjuB1Tm8q2xhJ8Fyzz3PjYyNLvDU6bbVKxky2rnXQ76rw",
  "key24": "3wgZjTf4bDVxwMjHE3mMV8ZxCb3XjeUC3ci94iHYwzGpwwFd91pir6GgKgzoSbGxYckUoywkHBGNdhTL1cUpqvEA",
  "key25": "5F595zo6S1r8NnaNsfJFacsM3vBUgYyr7f3mg85B5rv94ypzn9NNN963enD4Z8XuAvz19v96puJ8bxFyTEJQWpVm",
  "key26": "4A1WxvkT8DQCusEBoTUCmbhYYXr6f5z6kk58bbgdAcY8pC3ELm73vKGZ3HqoeMFWpgLdU5qQ3E9Ebtgqk9ivSfrS",
  "key27": "3CSGsa9D3W8MtobD4cq5y8DCyeNcgwEeVzaCjwd27MB1pgEJFizWTnLR2cpWJvbz39PSsyKwnoUs5rWP4knN5NVz",
  "key28": "5pEhXa2mafNi8Xis29D2tqzccG6hHEeBQxrbtM9NBC9G6wqARn4wyutvKR2WTJyHQgNPE7KQxfFn5VU6CJPcYYEs",
  "key29": "5YsMiBMs8wuyy7dB8orm8mPUt1WzGBFppwNHmFFHWwv6zKrk3L5DL5PGUBWXeswuovGUQmNzFCJzxCwzjcGg8NdE",
  "key30": "4mVBd2Y8EFY2YSTb2zG2wNLPLkBG4b2nJRGFXimeYdRUU16bwSNeuJiTczFaoXjV9Awnzq9up6JYHneHiUUeo5Tm",
  "key31": "5VtHaTmHFvDZjVPVw4ygVoBa2fBdaD3uFcEhAEAJvxkQQ1N9e2GE9NAGn7YahvVT11yEQjXCDpwuwiL9SyzaCKrU",
  "key32": "3bcjKcrwuyvFfH2UnXZLTRt7tudcJee9TGU5MLFpLNYCtS1WRBeHGPvqavo7wyzNaxs8yDvjG1EkZHLynMSpHxY9",
  "key33": "42HgjdwbpMq2cNecnrvayejqfQa7oEFnYGAx5reQzjEtGqUktQeyKzsxegHmM9uYVDMxV6tQqwpmphtopF5VccE1",
  "key34": "3cBhcfs4XwHdbVcdLeW1tcijerbFm8tL4btcRdhogTojV73vAGN1gj3q2zBHYEt9ziBUDJQaW1CzMccYqfbXpXWZ",
  "key35": "5xtXNgtmn9dRsanRYRjq2DHo2iHgYhD5HV2UGSnP3cjK3GigxMo5zyFwjNxBzKppw565WfT1kXyFPzU1prBcAE69",
  "key36": "3dVBRFR6g6ateve3fFioi88shbfi7uWMb7JsJuhmGh8pDCq5mKqENosv3qD1WQbQHVGv9m6Nc3nb78hv5ti34ejL",
  "key37": "5LvHM9EFV83rMfv9TQdzs8dFmMU2zaqmynGvaPcz3dyUMJHAR76wXfpcJgTVL4L6hy8zwia69aaMaEhH9au9SnZs",
  "key38": "4Z1ookQmwtzqbn4uc2CdgUssRtzjYrrhuj3XeWxmycgVUEXT1i4wYJvojRWAkqRdfxDdesfkna9fFUMdLeuiN4ds"
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
