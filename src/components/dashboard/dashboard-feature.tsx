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
    "2zK8z2e62wGXrQUrmQ3Y1Mx82c33XAiNNGv4xkPvpGFsYqary1Y263a49RFvudgaX3ba26KCJE6EC6M2MRayUeEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s2eTLUUM8o8DLVhMfUtshvfdP9Jzj1to8A4jRSQPV3MZroyAHTpKNPJaKA4qeC2HMmmn1TVvMZRwHS5TzFBN8Wp",
  "key1": "3sRdqPCJgfsm1vFzG6GZWDCLG5Pwyt474dWsppShcBEjge59WW19L2h9xvEvvqaNq6SyopvSPyCGhEV428NZwbNs",
  "key2": "3KVYzRp9Cn4zcAMmJkbJegrR2W2ienuFGSrAe8w5u3JextKhMxLJ3CaULqJaLhZefVFJkLUyrvkSHPHC4fj4cQDs",
  "key3": "49XksjpwF5vz7DuLDAgG8oSBSedQ7Cjvde8bLVZ11txQVVU27g5MVgw9MqymQJn8v1bLS3kEPUcUKQMhXshD8dsV",
  "key4": "2TkFGzH8EftkezkJk74PVzTFnC4TXixGH6rCSiUFSCoQZk3zqCJbL4mjBpDozRBdQd92CKELwDbw4A7ibsRyNPZy",
  "key5": "37EbGTB3i1VPeAjfwkat8tSB8GzoFdrbKnzXmNhi9Zz3fhB9MGCuyjTLKLGRcf8HQY53Cij5Y9vsdAmoBpY7iH9p",
  "key6": "5mqfNVza6GV83TUAHv6QDBVNx8Yw9gLgWMn12YN6rHx3kvkgHnvLK97LPEf3N8cQKhNSXq9zJ2iQfScKosRMWgc8",
  "key7": "axgLwpCSJLsbJuRWCjsywdKjN9dZoNWoae4w3vawiuVePgFm449ZKFxMSaMw1DDjB9rtxpbroNPdWVmQho9bdzz",
  "key8": "2Ksho6F19NeZMaGQdqaxXGXoUakFWz7SAE6KpYZePC4yWMDsce3Xrkn4TuUXfPKBccUKM3arj28BVpKxfFkyqq11",
  "key9": "2CSPkoaG9bfPdovcQFAVSAFq7MSqwURLMVZWHLxsCdC9vdy964n2cnK8wqporHVQg1om8UiegEd83vfJgMSt9si1",
  "key10": "ngujywePrZUad67s8BhYv8Vg2xcs6Jifnxc4kJpuBDbA2fFJsuGvy9ecth1LV98s4qhVWGDZ64PFvFPtndLs9qN",
  "key11": "4eqk4CPg9CU4sqV1sVUfAPreoFEKjkjBQYj8fWnknYVBADpvzXxEEtPV5HoQuLiqY9h8x3PhiuBsCHo2j14j5Zks",
  "key12": "3BvBL3hpPMMSHnkvSgueLY4V7MAMvwLkqskmkH13yrnYp21F3xR7jhWUQZ9RTHvnKBiF2k8swbGyqJvZmJqCXRHT",
  "key13": "WA7t2Mm6q2DajNaSmT62WEDVK8v5fjN2wmEZNPxjbBWXUYqFX7NFoYebSqnpCMssMGXWzieb5iKEMFnKKsJzcRP",
  "key14": "2amVTZtcwXee52cXdcTocC8iadiZAtMNneg3ryKGyHAh9oVNtiKSi7tsVmCvRR2XvfqDfZnFopEj9kV2RpGzYuRS",
  "key15": "4QTjpRixJSjrqrMRQuuJiHAGaF8pEUM1sjLGQBkpFRo5j1P82EUkDWYFZYddXDBMQhQakgVo4fX2G4beiM2WMaA",
  "key16": "2nuNLvcV5cEXnHdu1wt9jnKpYt8bWBZ1eS5H8yP93sUcp1PtLzPxZNv2kmsmdq6YipiXveT8gE3H1pr5QNVfMHmZ",
  "key17": "2yqAhC2TvVgCnSqV9HYsTFbX45VTJQVhZqFpAPsF4uGa2ReMfx65iUnahssRuLAyoGGYx6oLNU5NakTxwLFr3KTm",
  "key18": "ywn2Q3sgpUyX2F1hRc8aHdkAtvJ6dP2sEnrVQVPmypSsBhSpVr6EBZT9zLgfU8uMvV8LcqNk5buC9SyaK9cuHHC",
  "key19": "28EQdcvonceYQcsUNszbpYcPC3tUURy11cKHrdqQdiyHXaN6AZKhazHHvAw6MuYdhv8t2V1RtVbjVppGdFFxaYX3",
  "key20": "2Gtn4Ar4C4appQLp88Fv7JECR6xKS4ydTvdVLpGRbP1e58aNNkMtZ3GT4WUDmExX2HQ9WuEcyDCNJgFQQaaPHWs5",
  "key21": "2pssu1kzhzJssYNuqgAonvbdGwgyEGZ1AQHqv17ckhsnnNmssvNfupLkgAq4r9PznKvx9YPM7hLseZAE6pLeQk6s",
  "key22": "Bx76dJ1ou11u4QiRWYKSeGkRWSkhvKS7nUuLf2V2zhUi3tg88PmS1LacTV9AVLRUABah7tJSiNQU2osAHv7CCqD",
  "key23": "56vKtQdYSGCZ6W6aDUw3RhLHhmb9kZ6P7g7g8gmh13u2hzrs4BmyWMwWWMu5mEFUzRpvdFMBBmaxrXVXChEFYLBp",
  "key24": "ZwGig2cJZzPNwdW72D1LNPSnwSM1NBqYKG1PK2CzxDWqZoM1xptihNBYZp92krRvK5YyHnjd75abXmKWsxzQ2Uj",
  "key25": "4LuL25tMUsi6MsecNU6assLfB1YoAoyeowk5ekTsh36UTojCoBUmW1Vy9JpudN8b3HbdAcwKLEzGkGkueSpS8Hoo",
  "key26": "3VWoYfXidnV8tNaiv7j3o2n2jAeTvHTN2R656bWa2uxGGaWhSL1hS2ujZ6idDqMa97iVXinmyL177tp6TDirZLEg",
  "key27": "usWGTSuYr2A5yc2eFLw2LTLATnuhRrzwqxTGwM61Xc6cVirwHs5TPiegbfmqSoQxq3PPaxp2yr7uau3Q3FxiN16",
  "key28": "49LEeCQyPp15PQgATBCXgdNhmX3kFqGZgWpJ8bJtfEi8vTkhcyc322C5EuUKnsqHWP3w2nejAWNzXQQfwJcMkJhj",
  "key29": "R7FygpdjCx4QdC1btakb72dCu87SnJnaaCXpdrDw3RtCW9gCVTNLXhuVUEwjyrsCQGPp3boG7D1gkb9MJFvm1AH",
  "key30": "3ifr9sh2N8mNxKoBDS6THgf2gLUBxDYAWBBANSSrCmJ4mnVGhRtLr2pM7zmbsUt3znbrThixynKEpLDaR9edSRZn",
  "key31": "xCUKx9U2aVkBVb9uL8E6fU627a5w87Fz8ckYYew5QRM7gSoiu1x47yw1n6yiHbNba89UeYLsTdzNA64e6zLAPmK",
  "key32": "3tXqCbhitjoX1zZxVqjtXeNAQpvknnxATXpZELP8s16KbkNmZJCwgFCpgDA8ywE6SmHYhWTXDAV6bbfLevqAe2Yp",
  "key33": "35q5XpFsoco4p9XG6taNrNAtUP29BPZZpkJmjhHikSbs1bjxhtyBnUp1i5ijzq4GX7yCHa7w8QDfty6XHZwpnC7t"
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
