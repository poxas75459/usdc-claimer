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
    "4vNHaB21bWcbLBpGPjnamPmv4pkPVRsSQnA4NEptVQuT1DB2nmwhyykybr9tmN3cvKspetsmUQzW78frmnsFM2Yd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WTdAHuF62M9cPExSsD1vy8wwWtuu2TLALrLKYkxn1EUuC5VL3ZhZRkCigYyZoqz3s4dgFc93Aw6qiqwhGRKSETb",
  "key1": "3g4whZJEjqzCjiZzL89xcVVHLgGmrGNYqSSB7TkzG1exhrnbnMiVpRYQsmurhe4RPcMnK6kyewHCjkUs7CJSzkBs",
  "key2": "nFgvWsRigbwoQoRe6w22R6C98mpDYBTQAv8XadKBiS3L2KZcgv13hmDYH5Fx511kdjykBgKsNrpqKmcN1szFVHh",
  "key3": "3RDw8g5NuAV8t7n4xsQVCrrgMGu8vsqLyCzhEdjSuxecWqaZDS2vPGfLY6C8xkob9pC749kVdqMWdZciKxKAiKCs",
  "key4": "5PBdDCpi3KpjzEw31m5gVk42m6gHnmxhGEzHsAkD94YMPnfChT7RUb1jEUXUhE2VQ6Z8SxpLqQpKmj3fBNzkqSDv",
  "key5": "5x6fZDhq14mSfyJfnHyKEMVkfQEPUUycTtUNQ3kRTkqH9seVyD3jK8qmfUiZyq871JgntY1WkYNTJQz11Bc5m9i8",
  "key6": "3HnhiwABLniuihyiYpLYmFb3wiwYuiMofFL9RtGK91WJFbyx4tYud9cdmwRm8QHLN8rvfCkqiHw4CCQaJF84SFxB",
  "key7": "2BSMvRzN7ST7PTSzZH9sH5D4vARhVU8n4YuPwLDFJAZLboCzs6oXYKP4okitLpz79YUANFYyMKuYH5dgPkibW3GD",
  "key8": "5Jv3tRqeFy46DaKh4rbERCfowENb1fM6miAtPkizJLnt3hRzXUdoKiSjnAFP4TzG6fJwN6o52VxSea9YkzaTKi1P",
  "key9": "eEqRMoVzMWNuexbBx1rwiJwiPwDzWiJ2e7AwUUSGkcp42AwMZxezQScv6qrDtiYPGE9ZkV7idagtatkzGJWy4WV",
  "key10": "4zyTWZyDj4241k24dy17Q1xs4ND64FTv3g6J16Lkqg2sTj3HzumuGcUprUboji7rSnwtCWioggkk93UvZBTrgTDv",
  "key11": "4qXC6ohs3NAWETx2iCzTFXEq6dsD8xM7rw3BysjJrZFiWCo5r4w1DcvRVTL95G8aJHGNo74J7Vm5NPhmvcbCBfsy",
  "key12": "2XsYSgo69QkeDu2Ca1JWUKPEUtQoWu4kGXH7acTvyZWZzTzgvLix3LBpWmhLZWoR6wA61917vi3wNbTZkHjdnZD5",
  "key13": "4SnNaidA41ffyAabfddC8NRdLiggYpdkuMegyGDVdGoSMWp8eANnPkCBqZJVBCHGGK9UDJT1CGujoFcanynsJFZ",
  "key14": "4nmzSyKUuyykg2wVtX3PyoAmeatTYDQMEkA7K5E3y5BTBWqFXMpp7kMhXfQTDLn7j2SotyGtbtvBdb7wsicLgSyC",
  "key15": "3aqdf99SQvjypXD6DVrdrTzGveWsvkTnZWAzopD1wSs6WqD65YbqkEj2jgUPSsrQuvfhQPnvJaSRVeBPD5Q4y8Hg",
  "key16": "43hnPM8GTxnAHLUUrqDRWsExQ4G3sHb9HK4yga4YJvb6LrxYTN8e2M9eVH4bsttj955JnW8quB6uCUGfH5fg4ztk",
  "key17": "5n5M6JzSKzEeAgHUQ4MxQUM37BXsfbQeXeHsQ9gmYDnQUM659RkaeH8kgBb8ogYUoVV2q6XjPesjHQW5LEjwKEKg",
  "key18": "4cKEeXBdz5tkrtAqQkuiSdbPJxvU5L9cJaQ6twbBRYvYYJeGb61ub7ivKFRt8kKwWbLxKk1MxJj8w42Mh9JQi4Fh",
  "key19": "S12NRS3fcvut9E6kfdrjW89xQhLJ8VnP1phWsRW6iYtnPBi6KaUJ44hZfQ7hVAHMoWDieaJzvK3hKTFAdUdvKd7",
  "key20": "5Aj5zU7Ug6UgmhXviweqoMd3fsq3YegfdqnFsUtKxVuMr4RuwZjHL4YgNXM7UDnYoqCwzsKE3L7szHCbbzzdRdx7",
  "key21": "411gBjeXdgH2YDZ4adWgz71TCiZSxMv4GuBi1o9C4b361td3JbAjZ3TZKkcXhnyatDq6mr2jHNoiFpAY67o5KQso",
  "key22": "3r3wuQGfc7XHeVEoNtGSaci4GDvfeD6DaAxb1c5zbGN7HX1NWBSCqZL9nx1MHS58CT3zUxbs1YqbiZTWrBxUeQPH",
  "key23": "2THpjiFj6mKxaL9tfv7rHRm7LF6pPF3G1Ad5sVrc5R7Q1svbLiCvhmPZ7umNCoFtfM9qeB2rv3A7QVR7mdoJQ6PN",
  "key24": "QjRkfk3SM1LBqoNQf7KPp5SrAYRpUCDjxAEfW96qnVYXbgRyYYK1CaKiUU4xCG8pxUdw4ukpTiDMDcG1Efaqcxi",
  "key25": "5neFKkgEunhNG2wUbK3y2VzCSxK7CREYpA8rKLRUiUqjuwJRpuTerGnctjZy1Zc11g8U2JmcXr4tmuzg6nqMQWnd",
  "key26": "4d27HgT2aCPaUm1p3eVrJHGG7ZSN9rcZjRsKjmTqfJVCxkrYyHBvQF4ose7YR2n7PKmgz3Uq36FVvHUZcLH3aK9Y",
  "key27": "J7FMNPeKW5Wo65Q7RyRxDbPzsApAbnYSHmJJvCf8JTbW2oLFB94C386Fpa2ZtVbV94EjQWQa7MF24ca95uSeXfw",
  "key28": "2zrA8GGzmRCZNYp1a1v9cJq9voVuJkbxrMwsqudn9VGHyHSbWvtm1ivVAYfQps5QYBJzjYEUbZJVBMZqxFXPgw7a",
  "key29": "3KyRJQfq7RrSu5yMt9RHN1tbfWMmdAw4JhaoYgcaYF6U62CsuPchzhD61SUsC4QwHASfy3gPD6yoXgPmgdhG6nb8",
  "key30": "4MuuFvHfC95m8MAAxuQChEuooJqV9oYLiwvP7av9dTUQ8nVPaQiK1nTu39LrzdgpQBPPxdqMwV4rXiiB3aAafiVC",
  "key31": "bpkcEK8WEtJVfdeos5srrfMQ8NX3pTwaf4BMHMKrqBoR7sTf985cFKb5JCWpyASC8RXKrPXQWdeDqnbf3iVibwz",
  "key32": "5m57t7o4VaFLQFJW9CGDYG4qwTK1sNVcQBcu1G97miCHmR3VrHCrRkQt82szZwWAfb8gL7Z4gjvXEjfea1aHhs4q",
  "key33": "5EjTQGWGGqMNiWrAQoiBuMCRTbp5QXiyDEVhh18qX575TH96X7ZB26q4XKcTDv71e9dzQgT2d7Ljo5JUanSyprJC",
  "key34": "46btJZv2TYZo6We1fs6TQPfWkkQtLv88P24grY59evVgk8eAnqqBGZSW23ANmz6qw3UfBpvrxgvrWdTcBPRQ7xGc",
  "key35": "fVEKhrF5XE5gJjvfe3smgty96QXthg2jeakPsDfaXSLwrLcBPYfyN5oz4XVk98WVdmEBKaFbiRy9Bq19cQ22PeZ",
  "key36": "5SuMt3YhJdipJmSLqRBLDdK2uRy4nJHQBBcLzQN7yVAzQZuKpsZ22ihnmDWf7xYX9uqQfKcDCSAAXjHMPFWYW9A1",
  "key37": "5rBYUB5jEaASr5ALVoUzvfHE7u5v6G576Ld8c31GUC9FAwHGmSe1AFsF7q1MZ1LwZx4xpQ6kj78SYrU9nGHm5dWN",
  "key38": "5QHoy2pGZUkPfPQsus1xqKGXCbzutWQKtXnEMdUBn5RZcRJxaPRWFZMHHhbMnFA2hsiij4Mzw2tKJz2aWyQAajaq",
  "key39": "5upHWhYwGPdrozc78TwBTysCR3fBeDcGRqVPSe9C4HgBQ78Zt7HtHHeohDZB8sEMYGcWGG4kWrjoPyeHA759E2BF"
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
