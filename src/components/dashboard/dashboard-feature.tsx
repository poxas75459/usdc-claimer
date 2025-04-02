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
    "33wDJZLa4o6FjQwFnxgzVgSMPzhrUHzNhLhVprZRDfXVWzu4BZ9cSbuiRrZ6bfxK49oy5LK2WMyy3mR9LwmFFD6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tkfAn2PayDmPcEzjfDTHdQr18neuXYZ4Ws6EKBDUPpxarQ5tRkbTjnQE4UZPsUWfb6Dh6NZsFT7xWuWM9SFS9Y6",
  "key1": "2sUXFz7WdQkkaKwnyQxoxVRriSbeBJT7WqATJgDk5Xtop4JnSXjXyv5gtHkorxYjsexCFJ16xHbUkdxeDtxmokfN",
  "key2": "5g3E8R6pbqfuSWpK2Ra5fQDJt2WM8meL8XfD4yhJbJNWkZnuA6Q91nhG1j1RBkGjWQngxJYbvXTNdQpuChtrUJZN",
  "key3": "4tTqJ3rMX1drQ44Wq3DZHQBxvQDyYXQFcGHd19ndWrENY5aZdgUAGDohH1Uuujz6zbJ5SeCGhXs9sioREFSUNHob",
  "key4": "4qHmUK2UKagcFLi8jTKY6vsXw3yYbktZoay9zZ6GVa4VvFSF9shHinibxM7sMxgTc3svoAJwF1pTTCLcmP4g9fEF",
  "key5": "3QgNzTJMPeHXtxuyfWTximjRn5mkrs66Mkso6aXDG9U97YUVB9FRH8XspXfrC3TZUvkXQPr2MyVf4vVKLB12RshN",
  "key6": "5grJMWW5BnvCnH6FEkWbeuNoZQgfCr41Qz3fj8nCYgx6JVVeCc4YbJmXAqrnEX4a3jEkkidpow6v8t3Hm73KMhAD",
  "key7": "5tFwgDJBGnogw9wSRhU7DkwSHpHYGmGbgdvp5vByQeFDnt9HUgAP1Ub5PQkXtoV9KLtRMTSCMJsstrqmCy5N1kvK",
  "key8": "4pSxXW5aRAQWj2zv1tF9XM1fi2tAEVaDBH2cBSrdb7DBUpRckhX6xLMgf2JirMqFMxcMAKHzDHMo7Q3cAfbiruUw",
  "key9": "5DVx1y8DqhY3fAsphaDyTZ6CUhdJU1KKzuGrAZ9sx2cmJidSa7QB9ZZzoSkafThxcDEV7biYyZQKrmxQQXoUjQG",
  "key10": "4ZZJ9bZxhKAZn1zx2zj4pbY3VwtEA4px6kXy2tvDLFEKnazCZmzRdKQVqKWXueEM3oG7x7FqEmYFSG3YEBm2w97u",
  "key11": "4b8rFw7rvuFPHdLJzcJmz3w5qjwWVRjPg7cFiej2p9rMjE7JWzZja4zjsMsCmjXoK3bCC22F9hyPnkHuxStCZNMr",
  "key12": "3AecdTApWGPCGaLXZvkUppxX1LJRTQqXP7MP4X1y2bHc3XiwoutNPXZeB7Ych8YtT6fNAi9JskbtHAWfx8epYS3S",
  "key13": "4aXnrRmai6LB6SNNFqvrHjnocJUaL3kFMCXYodRe3QJovyhrLSSVkLzVW5PWmS5DvPGZe7sjri95sGK3vrJWm5ng",
  "key14": "5H8X8ZRKJDQPHFK1fS5ErdCnhSFncQ55CyrTT5GzTP6nzdzfNr8BGYWtNx2ZjCb8jgCnQwtMYN3PvNaF5PkzA3NN",
  "key15": "4L93RZKvrtKSfUzXBbS4K1sj8DNTYBEHLpkErDqYxRiT864K2PrZVQdFezTpdjtMKq6ebsBZatXSuTbyjb8C1LuM",
  "key16": "pQ7h3cQ2f98zgCK9LUhNmNCMoHKuXvaH9QM4bX2WHZzDJApGDWVpb2WsZiVUrPZHbqX1rjxzRaMR6gPhY3t6HB1",
  "key17": "3jjSPriER5FRbQY5baR9bv2Ziv1A1AnnsRn9dcijSsBASkr7mHCDCCTGMjDsUFiB4ssCBPPnqXEX1RPaQQcVQyVu",
  "key18": "yDbMHAnjBTnKajoWCkGfPcYtDiTBxmQhqb3NpbLncn1ZKU3j2FB4F8ftNkmgfWDqzgfWpcek3t2EjkknoBEHsro",
  "key19": "3RZmL6UqQdpGqT5nsWEh54PUVRxXMp6imXkmnLqqDAjEyc9uEE1DWfD74huCiwjsFed1P9eTHpwX2mbwwQwtUgT9",
  "key20": "5CS6s8AKkyFESN1cJEfhmwnEMgWmGvKqbY5bC82GGzBAAwfsXycTbXoxs5FStju4KmTFdr4UCvL7UEjT2yBt9Fy2",
  "key21": "44nmtJHsGzET7nCGmJxomCM33ddR2n4epwpBNspgNFWHVXocJ9EXTGNzGU1DBcvCb6ZAaj5Smc7WPxni9NAVaU2E",
  "key22": "5BzbooqbSkyGW3nSomhT1DWiXVhQfdRVEKC8ZthoHnWp7ecdJdNy7KzoyFPpuNg3Enxq73TMUVARwb3JHYV6C3zd",
  "key23": "24o5Fg9RbxdCR8KpxhuUrTfUdbCjdpQAJDz3wp7p4ygJECiygRjqQcqK4t71e8gordTrjeaExEUk1xZyruC9eyeV",
  "key24": "4Q6NbzE7QzF2s9zYC4x2FZfXAUze8CHK7Rzmw2bgXcwr2UfZy3jgN6SHnsN57r9LbqgbYJizZ1EPdhzZdVvxMDyG",
  "key25": "3hmusNzSu74BcjYj2vPs5CqGFqVQpDKHiYGKjHJFFMJH9hB9RmXF6s6niAVtsxS79EKU2hVa7Donig7FfmwWFo7S",
  "key26": "2tgywa6mhFbtyM5tuTds2xtHKcSrEqwhnjES11ThjUQ2vL5UVvLTqJJAxhG6mcJm7qh2nfK75XGc4QBQHioHGJji",
  "key27": "3QGZqUvA7hJPtJaxS1qQcNLo2Z1PAeXihBFqRTSjcRyZQ92XW4D7YRQo6j1M3cBNYEENTy3n6jS1xVKLcAnGNpXW",
  "key28": "4hVkgoTAiEz85tgqfdnZ8gCcp13tFi9PzS7iGMauBhqZYGdRPm94BgQMZSNg4uMa87jAvruUfr6NvixLWzaBMhEy",
  "key29": "28JCCWTdMQAs67jeFFjNVMc6QztuKQAc82THMwJsACH6MyGoZWJSKh9DrVmHh8rSXLVh4zGYSxPsqeJX1Z9GvKsM",
  "key30": "2qUiwFYbNhmec1doJBAEn1QB59Cyyj996EQoxaZtXx7UKcD6aUiGcw3hz9s3TxZouRjt9CMLmeCpRLj3awqYdhBf",
  "key31": "5DP9z1NmgNUNXcMd7gRqCHiy1e5BobKg4TsyBV7HcyaktgkZT1FQjJZjd1cUxt9d74XChbJdM4mQDbyAVuc8e8dq",
  "key32": "2Zhk7ZiziRdXT8k3zeNX3m3y6SVgSzevgPeJ9FkjZxaaMcdjzaixJ5sp8p9TPeEJQ4sf2RhNqLi4uyMt6pP9Z5Jz",
  "key33": "5AT7sD6b9vavhcpGePsnybCtir3rZaBdTP5UwFuNZpJ5PAycPTbU6zMhjJzXoHz2kSwbk7kQLoLgUAC2P9Uq3YdV",
  "key34": "4xjscbrjCuPk8RNsEXjuNBExBdJk7noDzQQjPSwqaxzGBQVQGfJn63PeB26468EMh2muvGmYni4keykFRdqMtw6j",
  "key35": "LgUGrpat1qNJvGBmJrL8VPW2Q82B3N8yLvuRGt9C3ihRh6m5uxA6sZAHuBjG2T1dxot1vNsC9XAyvMZ8L72fM6m",
  "key36": "2RMggDMRmJuwRg94j3p5JWd7eSGFBTobmx5RMaPgQBEYgmuWzCmXKUcLjiYcL1GUX5kmBYPYjoYr64Syxjm1ZGRs",
  "key37": "2jpnND9g1XJM1XmAdaoinSeuH8unEabL1eFzzjA3FYjr2eKdAD1M8w8RMF6qwQkrFnZbmi4dQDZL68nvZxQL6xov",
  "key38": "4ZomLYfKNJqWjo63YuBi6Q9ij4EfaeBUWqeSXhVSq3D7LPUjqLKHJVMvn2SWeFVQM433ViqahSMaHj9J91Ro9x58",
  "key39": "322Waw7iajqee5Q5bZBVsmocD3foxMPWsP6YNLED6wMhi8VtemjVQW92kbPQUNmKd9teRBVuwdi8TbddAs5fWpL9",
  "key40": "5BKUZretwXG1fVZfgEQjF5Cf928nNP3o3nyTCxD1LoCaAM5DNx5efQVdJUdeYtWsGUFkYSrxy2rFJsgfGqjMVvmS",
  "key41": "5MnkCvuMeZtF2FagcdQzzDqwxKtn6j5ymbSoGkHhFvTtwRD4ErHpKK8dfLHu3NoQJNWJx85BTrKUB45MC6GCx3EK",
  "key42": "5NmmvA91vBTmySGXq5syEZN5b4QcpRdJQzy2uh1HJW8Cb5at38Q824qS27BQDrWsskvpXbL3bx1peCXrXBr8Vngc",
  "key43": "3XSxLKbWUFp6VMpANehhSGwwmRCmAxUnEvp4w3pkCwvq4qh51Sk7XwVLu4usizGTJh3arQ46V2xkhipanRP7YKz1",
  "key44": "64u4eoiXfzh1UgB4tBUD5ctiMRxBbyuHSeeFK4E9PyadxpRssHhwLBgBr2VPoQa2s9yn7sScQC4J4a5fiwKtzAbs",
  "key45": "2T1Ztfh5wUpZnBdbGNNcpecZKZ9LuejmhziegJ6maPWpYu3pf8vicLkUVAXo5FRnvqQEv5f75a85iJDtcKS3tZXx",
  "key46": "2a22rScevmZBureyvGGRjQnVgUg4P5BcbM1G2KxeaRSnRt2j7KXxiyUJ7nPvygdGoKR3Hxfy4wbtKkLSuT2peqXA"
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
