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
    "35Yj8x2oiEBWicSUEBEhqnsk1V4fc4kp6QhB2xxL9thg5YBtKhqvGc66sciYdacEsu84gAThBiCkMbtvU4xvEmw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vvrUygBH6oK7VrzaPVS2qyLkYViwxcE4GccptoGQF59dkym99ryL3ZQrmA2YhNAZCeuNxXQpmbkbRMmpZhCBgfB",
  "key1": "158zBDVV6bkZW2TEBNPzmGiQSiFMNE81ohox4EPWWhaXxHZAe2Nv4wXxLG5WjKDRR5CQFBn8wSy2fLHVKHbZUyp",
  "key2": "2iXJJwwEaYzc6Xp8r7mR8WXB2oat55ATanCAYMWk2GReqSa7FxZXSVZqcsd3qwNw6aBB46CrVksG63eNAz3235RV",
  "key3": "48GHWQz5gAKDX5GZ9kcAr61TqxggSREZYAeHCPnpCm2DbzaUxLxQ1xgK84Ufvnw2UBBmuhFwJqGDeeNTW5j2ahtL",
  "key4": "2wLqWkcCWse3FiqfMrznoEEdpQ6gvgvnTVnRdm3WXKhM9D769zjh4ra2QqH74LR2ruHpTYRs5ncH8NE9YabStX1C",
  "key5": "5hsSW2JgiHXj22tHCVpr9DBZLB4Lzgdb24Rw6rcMWduPR6iaBvGSfY3RBKxnFKJAr1J3uqp85cB1MoqfTKeZzRaX",
  "key6": "4h9gkrGPM3uAQmEtBZLxfm3M5bjFtwLPwb8ifvLmhjpUeqp72Am7KfvvCyxUStDVUie6px44RmbMFw79Q5vetmJb",
  "key7": "598rAcBEZA46i4q41ncGYTe2h3e25j3kKj4bZb5UYxvhuymrcETQAcMZgTL44rVkyP83vnbZebqTmRMo6dhDzUqp",
  "key8": "5rTzEuNDskxcD9di96Uw5pKeT51rpvAUsCTdViRq1ty5u7rGn9QqdmHCCVkqxeiRco8RVBFgHSfJb8nVEBss3gaG",
  "key9": "q4UyrthKHYtZvr7GUK3f57YAzmt6yPnESGnLGhVBfvyESYB2avhohdgPWgEJQGzArNaK1J1x3YDdSt6oE7SbqUL",
  "key10": "4C1ZWqfZsUHTcf89YE7afdpKxumvC4MaqC2Wf3SvQjCbwP1A5szecWgNZpzUKxVuids5N5qjp85m3LzByjReBPFb",
  "key11": "4D7Gt6GkNXD5yEkvNqAAK92g6ZCV7xtW3ZKeYStrPSTy7MwvnbgEjdtYRGvRG5waLPPemxVroSevj6bD3DFYbv7F",
  "key12": "4CnJxawGYMAoFgZpgB1MEhvWjqvvvxC8wz8J45MirNGGfTPHLZ6Vr8p1TRWt3XgT3g96bY4GEXgRyYXMcL5BQgJV",
  "key13": "4HcC44W92c38UWxzg8ZQrCsBkmmSHgPoWr4GsZTUy2cgRPuWMY13xg4gzZd9X7TUELkY58SXYeMmAXGderRrRgga",
  "key14": "4mY7kf1XM6K8tjZdXv4Yo48VbAxxBbo6E7ztCyJWqvBM6BADugNcq65KtXXeW3gbcuPeXZsxMG6HH9nff7FQgbvi",
  "key15": "5JMXmy5YmrZQtkWqNeNA85PGUeHgyKGZA681QrkNQXB6zNYVg8zHzS72fSwqkj9RKkgnT62bULbEMhCiH3MRirCW",
  "key16": "5tFXucMz3hk8PrLkAXAXT6ajttrUnoE6EQgy71fBaTseZ1Bde5W9mgRs5RR1rrQ3ZRepAD6np2rVAB8sS34fbxw5",
  "key17": "3vPDjA4pf2K7faErM1NwUnrJHRDjd9EHB6BadTzJLAUFc4zBTWU8ohyx41LR2RU82Zq45X7krdVv2ctGu3RDdpZd",
  "key18": "5jHoxCQd2k94C6G7a3Abw3w4bccfvMUpYHi1yaewep6K93JXdFgJLp3adjLyfY9H5rDqtCme3QFhNdLhNDwsU1Nf",
  "key19": "2NDEhgLqSUAWHqwjR8HRp1A2UzagAp6dJRa89jwPAeSrJc7HznQfyaW8BuJePo1U8dSVHMRy6oV6St26p9bj7XtE",
  "key20": "3Nsr8fAsxFdfLrbk9g3Fri4sR8spnYpg3DM5fwfNFpAvSps3CHddAwZHi49UprHfbN8Vrtcz7bQs2PHdzDWhgm5V",
  "key21": "4bFwi7dLJwnQ8xMtz5b1cpJuEtYTPvH6tM4JaH4vfeerdxxJCdsE5F8f2UiCEnmZ7zAgmVWEKS55MpBcKmwDUg6x",
  "key22": "5B7MWyWirU2suoFVPrW1gJVTVipzjqoXNJqURu4sF7wKHWW7q7vj1tLFHVheoqG3Goe5DSQ8LXawhVWjmG1qTz3Z",
  "key23": "5DLFhT8vGWLH9GZrqJM3U5AeybJdrfXryC29PxWHXEM3EBks3FztWRLo4Z7jhtsTCzUJicMJ8jWQubMK1fbiruVy",
  "key24": "651AdBcJvero3XdxC4sKZ3MfDoRLGPgxTQPFoaZyeGEBF9o47LWAex6b8AspPGZRHMRBWtqcPwT7xXafUcCFn3iV",
  "key25": "5ikRt8Q8R39nAJQgDp1gEHcVhzvrqzyi7n8hwERG3hHf4xRranGDcA4xpR1maiYWfE1JbKozUY4sNoC24kqjqh2C",
  "key26": "2SHqhq9C7bkJLavt9qoooANCN7zAMyATguc7Ct1KPW2XtnE1STJVLY9bHL2Jt6bQR3fUq5PQYgNhNVU1wfRuRxP1",
  "key27": "RtKrbzNhihBNTmzTfoK2ZdjixX8oWQjfm9kHP8cgfsaEmuouTV9q23DttvEubKYXbNoyQrasXce1ZPjwnLjcU9V",
  "key28": "5PoNHksHunRWD58Er8UdVDg8kbksJkUZ4DeGeKK8zKGT1wVt4hFpViXGQiJxVkFXyuwRrwUw9F7VoJsf1ub89VfE",
  "key29": "MZ2vkrALktW2FPhon821UDd1wqCBVo6tUf35k3213WjDAGQbhuBPrsCWVZtn84LRx6U1R4GZqiXPFqUaZaYkyxZ",
  "key30": "VbpEMTxyzvpswq2buvtxHUWeNhoCLn9xMmxsfj7hDJPttAdZpqRk1nmQrMXX9aJUM3wFkqxenyqd8UeKqRPcTdy",
  "key31": "2vsRqvvaiP2W6hRZGf6CDgh3MqCQ6E6Lf1yifxDa5SxJG7GwuwTHhTRsZvPUZaYwVX7YZGxVLXqRzgoZZyxthCwq",
  "key32": "4nEHWWqJFEuKmiDVGWgLeRBeZihDi4rU8kigXf76YJhhfFNwo2PPUhpGSToPTaqyimDE46ytCQk2CKYV8Ez7vDA4",
  "key33": "57QqaqGLLU3dZR5CTknhDfc76rDuu7p9Fw625tLzc6o69SPcMLgcXnb2eAdvkPS4kMPGm18H3vnpZ2f3czQ8sHHL",
  "key34": "2YQCPxc1AMVq9txFQ345YS7QoK8BC1jojBBwMSxMhc56fX9wNEjgXfbEQ2uTY8JaGdY2fHi7bmZHZRcjVLS5hXxs",
  "key35": "3pDPBh9s8tAXkjJcXaXncT2KbybaVFiSB74es95zDir4awzzB7L7sNydniLuf6LdtiBFbKvgvP85SaV7CFTcZ3LW"
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
