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
    "2eDB1vYNyqHQqWgbg7GKtEeqb3XyEkvRLbSuVv9duwqXu5sioo4DX3Y9NpYSfDfZM4SBqkD9cYAJEvnP81zuDuB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5egfbZS1yLBNsXnFTiKUQw1VvHMqKyP4GrzxdWDcttAJXZgj6bgEeYhRNc1Dyf2wjAMzuTPRNmsHMhVfxaFfZrRP",
  "key1": "5Kfd8bi5yVdXpmkurS5HybQ9MAC6sXx97Wak4ZSkYdsxcYMcUwfuCWGh9jTg1r6KvhD9oC81KPVJcexFSEtAuhQS",
  "key2": "5GEge8WbRpBNw2owEJKR1xrYumfP99aABro8rK4jMn9ZY8FD7xoww9UecpreUU2j8mTvgXacVjGxYQba3B5ruyF9",
  "key3": "gQpz5oAnFrovZtt7u1jw3StjrSo1ScuNVCG7qqXPZDyeehwgMLV5xgeGafm3xhuZGnHrbW8oseUG2YaC2J6cgM3",
  "key4": "4nBFSihCbLq9Xdk3hS9DJZauyt4nvPMVCNXC7uyJmELKohpuFUvxyKZ6WJJZC7CFnVNacfwVhLUsP7Qf9mKoGBMx",
  "key5": "xT9EBW8fHf7P92bZ85dtiART3qUCDBoUTpQhudLcuHoNN7X4QM4gHKqwtNzJfUJcq2bX32hAZGQjWGEYuCQxXeq",
  "key6": "2YApsyrgvW19reSqhcfYcWLFcURzZqip4B3LemuKRzEQJATty9WzyuahdHoTzUNXKseFZvUpUnStT9i7xHxN85f5",
  "key7": "pxqkFphK8CQk2Ze5Qy2G7pikTcExBy7B49ubDCsRVpqqbQELbVYDc9KZoJEuwzwucT4GYeswwQKHBKHgamqCPKB",
  "key8": "m8UU3FimRkwxTT9LrV44DHv6xuziqTLnmKQhwrUF5jVVJtrids9sAYTEHeoMdEEz4mkCNQqyRjVkkPhQhfFmznT",
  "key9": "57e4sMfguRGt8dNrgtpLnPv3mHKv5tKqLfjgvntbxCgiGX4hw6trhRFPgcDQvK9ixEHVn3nVKwTvo7dNgVfjos4",
  "key10": "3jSHrmjZ8pEJNyU5gFgL5UVRCtQg6YY3BAk4MXatLfmADop2VEKwhxdt83drfvbkF8vkAxJxQwA69XqDpVoD18QB",
  "key11": "31xpeQbkPbNa5AFScPAB7NFjMUN55da6Z3xXEj8gkxiNwUPvhSFamDVxNFPSM8Nk9h4UqcgjDyaAiDuRxB2WWR6D",
  "key12": "2wVWRWqB6RjxAX5NCdRRtKEYRJcm31srdjdgAhRnayexDpLJKddeJkvrJPvPQkX6XMPvfHPPz6BuAZKB5rVAJ18i",
  "key13": "4QjxmZkqJNiC8DtynJwLWm69puJqDBNThYgrhfSfJYBGcmmkFyw7wkZ8sML3vKiHf9TYmPx4S5NcKdhuUxNwhAd2",
  "key14": "2SzQDi38eaiw9nkiiDuDJRDWUJuHFxJgzvUCgJc7p72PMwnnhMSmkTUbe9BueiQU2j7wB4hSyTPyAkKGFnVcLESM",
  "key15": "2PBv7Hhb4Qoji9jvMWKL9SukgJFRvPZf2YpG18m3xP8uBQ5moJmgyZcKbq6RWK1NnXexQCFBTy5Vp77qaSeG4i84",
  "key16": "4mEskwhfQ3UrhBrCLHTymY6CbkKbgpCgVZwfjqNPjcRY28STu2ZVrYsMdDzn6YCXDMgFQqxJvaeBW9jsLysnGeDj",
  "key17": "4kgjYCRtgEm5UPuGevN3Dv3HBTwiuwRAzP9QWcn9SYvB5pR7hCEmWS1HfdoQD5uByxo2fbQ2r7gfPuJQ98PVSevJ",
  "key18": "3KBcsnwDGigcLpoefzXFbDSoH3kRaeRfZxEPi2ihWytwZjsY9hWe99CC7ifF5kpQuQsRyMAZqWJXXxL4yRgeHSJJ",
  "key19": "cerE2oXdpcMpSz8cuyQr28h8wZ57ey2jwtaTiCCrUYRtBFC8iowbrVMHQ8A1TJ6jH6of5RR2D5Kv5zWqtr9VVXz",
  "key20": "4tPjZWXcasrUu9epoxFKD5xJv8CijbCMgpxwjgLoJLR1rThSe6hrD3kNVq9dtwXPEWY37ZiueDyShkdKNRWbkSFY",
  "key21": "cwMCujghJeMjPQRSkqV2Crs2eLrVk8Qf5bVefmxsxzc8VoXaHMkxncEdX7Yhnop1ngkGLRG7jwUrrKaCVHZEcvr",
  "key22": "4Y15k4dFsdLAqATSqoUSkVoB3yR5Mc3v9mNgFxHPuHjGb9C2w2z6tbHSZN9GDTh7kBGa4yyqAvUMLBtrt43GU6wK",
  "key23": "5fDZQBGysZEc2W2aphPcFKoyNkFgfKKAQMZvBxWWwCgK6sW9Ma824HmG6r8uGhaJ5ojkX9VgGJNCHbM6TAQYKKYi",
  "key24": "3AywUNjwdgs8Tj5qNCKG6LxrYycjLob9F7QwzUdUjNiATa22n3AXv1AmZToycEWNcuKqe8BWDnjSuLxu7P325EGD",
  "key25": "28EzfiA9R1juPRqX3PXux7zMZkHvmCto26mQTcT9imkZiT9fAgt5RwB65qCAVfChk1Ws73UUtRNQYx7V2wV8YmaF",
  "key26": "5LaZGAW3QSNc8bLd7htgjdNBKSZsPW63tQkpgQra7jPh6JJy3oDjmXDws3rGHGsp6ty5SLHfWu4ECcWSCfxkPEi",
  "key27": "4pNXf9x11tW1eJ3LLPtGGCTzEb3p9VWbGhMEhyuE2foNfmzuzDDRJo9wRa9hbYSckNYfb8C7SW13apdZY5aTFBv7",
  "key28": "4S3xFiVUh4gAoESSoAzmuikrERZhLSmWe478MKFgVZUvno8eZMQ375kUbgSZ38ZiX5rHK97S4gQfmWZTZYwd53Z8",
  "key29": "62VYvudVXBmMCtSv7g8eLPQ49PByB2Zd4pu1D3d2TMhr49mdmVtbeSZWRjwxfeYuJzRFU7WcPLkAiya2RP6SznGx",
  "key30": "eNpup8gycG6rHphDLrmcStwUqW7tPzXR6MAEvxgYU1KFY5aqwXPSKAxN9mnmJq42CdRvyie5qS3oJEqBL2q7bwE"
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
