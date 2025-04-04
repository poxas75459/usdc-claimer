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
    "3Bt2zhhqAukjjfJEp71nprGEtin5PJ8Uax4WGkcrjg8Dw8AKEx4Wgjs4iLpAGT518ysSSoeiQ6oGiD9H2P7idP1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dLYosGuHhMDK8o2Q3X1D6MLAYqkkWUQFGgYciaMDDwXJ9GCgYSKxxU4ryo4KVQYerwRWd4gBu8KEu9orfm2s14o",
  "key1": "2pNj2NL6KfaWiWxxbjxrx2qQi99b3V7gtJ9DFYNEfRRwqsTCiJAXJuCwTRY14D8BgXaTnULapmHE8g68PsMQQCsC",
  "key2": "2sfhYfjDTtopLBiSmmFXdKscvXeVRMnXByqYdViPMSJoqX5HKw5dMyH1BNYLxeTWXd2zqBMVznJS3sTkUetZ27iX",
  "key3": "2HSS1jfVL9YBfsryc4tGPELtPGWHsVMQrSkToVdePaH4Hkieiyec3rm9m53adFBiNt9vcqrn2nKFTq7jwXFmH2x3",
  "key4": "5GK4tJvW1MgMkYFg7kfnkrggDaRAWaAZQAS9zZUE4czFbNLu7P2NcbvBunQ3iNXUPCMycy2Dm2Q9tg4ho7LsHxfv",
  "key5": "42HspsSeoEcow4WVKsNe7CrYjEjLyLi5pka4psk9Vuw5tbyav3o9ZADAi4ehfnL9yrQqpF6Bh3EDWmJnywVADhdK",
  "key6": "625UTydPPU3LabUuUZr2Pt1U9z4iN5WeCUfYcVnsxz91Zqt1yuEiodhgGsvXUPQFG8yauKtBqUAbA4J3SshRiw42",
  "key7": "635D8hJcp1VMrNJxZB8aB5z7aGyGZGeksh1xN4ZPnE4MRPikmEumGmFaVsARCZJigwe5arBqrEQAJ3rUXhcaWzng",
  "key8": "366tXbWWoC3zg2G7DvtaUzXfQbNFWYt6aaBxGNrMHtB7wzyrGsUqg9RbvcXNVAR5pNanSeBRtC5GC5ZEJvN2wWYG",
  "key9": "56bzoVbF39y2h6CpB3LnTBFBiCiscg461heD1trAEF2feZ8FxW8n92R7uMfLNb7L7r1Ety4QtpWHZDL48J3P4dFp",
  "key10": "4awXAPJhcsvBZ7vvMJQDdjFBrPxx3JXx6RiRWKKGcA3WKeLWmCXS1VRKeFfam85fKqKRGymYDBLoVZMvJMf5ibBY",
  "key11": "67HaUCZaLXcCMYtwhUB72UANwmnHJD94rZto8WpKRD4Sip9W6pKCc3GiQPDhNXz8VCi3C1e3DCNFYWThMZvHxZrg",
  "key12": "61v3MPXF6dTHKFG3xm3pgHGHAYYnFgAeSwfq9eBPDXXjdqpHQeVe9qVvgddFK7upKjWftTAZirVz6C8cRb2YkEiZ",
  "key13": "4urXQVzzVkti5oyb3xAWvR9jRBNRMwZQpA6mnEcMqJARyxpDCozXHYBzgMrQWkormniYrM8dPt6eN2XFbDvcWjga",
  "key14": "5K6hMkyb7g4KQLp2XKT3mnYqRmsPv4vVTxm4QBrMZeRiLmEELguzhRxnaZ9CYRTTTzcV9TatyjeLyKZgL116Jcmq",
  "key15": "BZLcTKmNPfjVRTQtqD8MU49kCbXq2aoQsm8pEAr58u2iZaoNqoGduWP292EGBfyGPc773w4j6QMbWnzLQKigJHt",
  "key16": "HeHGS54P8J9a9f1DvWQsnNh1TwCGb9wQhbsSwpNW9K15xYeZM83JdtU88qm2XV9mhUze3RdkKS17rDXoEthaNzb",
  "key17": "56iz48UpVHbczAGTdoVQQeZZKEtZvgpvpyyfQEHXGx3NPqAXbRWqvgCkVV8mXJgha9ybThrsqN4V2i4m7kWkjS1w",
  "key18": "46rYgmRKUmfhXsYia8o3iG42oiQfzLUT66S4WZfvpo91NnLLSWTd6CNBAY8wiGZYPWjGhLA56jSuGeZAUCGHgC5x",
  "key19": "4km1iT4Qn6VbRDweBFBsS7Xz7ZxmhdeSkJR2XSgsiDu6G2znLY7E2vYCqNpnpB6uZPEzkiqEx5GzzDKgv6wcyYNk",
  "key20": "U4sAL2e71GxH14MHSCYmkDqjkjdw6KTwZzjdc4xDQJXddubqZu4nendZswKVcaZ6s3fT2jsXAA8kGbGBHykvpUS",
  "key21": "4C79z2LJrsAoVV2XKXyUm25j5ERbWhnK94GxYnbAzb8UfqCXmmb5sqZeRMR1iZMV3UUWofeRqfgKEWeMJT9ZoZqx",
  "key22": "46m4rT3qYKcDiMxTRunieuAnAvmBTsGqLf5mbrkeDZaPCCT1dGLixdgJgk6AkvhzfArxVyaKEm5G5TFML7uhdeKe",
  "key23": "4JS5Lk8RH7YiTVb9BTayuKre1twqcZE8sQ8eWFzFcj9BLtJ52KLyjaP6tjSR6AsMC3rMnHMQouhkBDSDm9UtjYEb",
  "key24": "1XWTKE3Wnc2VpD2bFUyYmgLRFWjc1xEPN2gUvHav5FKtLqKmNmP94jirYt3QCZEJwpLpnUUdN4FDwb47tw8fA7y",
  "key25": "3jANr9AusZSguzHR8ijdAata8DDa7dBGwf3X2T7HnGmsChEHEW3KTyy5gi9Da1tTeE1MY8G3WDptMxnp6kDa8bx1",
  "key26": "5S2DMpL4CuiQ1XKTBHEZ9xrNXKttheDktvN2KPMGRctC7ZiZR4nNWjWkCtuptuH5r8xdsyr4GUwCSYP5Dbm9cEPb",
  "key27": "5XQqrdHnGF6uPHk7BXVRhQJiugNF7KjiSpDZmGK2grgEG6dUyv3SJyjY6pST2y52tB8PUd9nb19YP1GiQtuqpSHc",
  "key28": "5BYzN6sZ6y7fTQx6Fi3si79h2ykQz5pDGHjiJvjx5MzRaHjnEMs7mJRJjfRTVawzggRtvFM9YjL8ZXMB2yPDCkgN",
  "key29": "3PgxC45vPK1VRaMRwRCUeRuBn9T8bt8hfm4DEETs7aHAv419PJtRy9i5A3KzEdmK82rndR9qDXfUmSpkjLw3cB1Q",
  "key30": "5LrVNHqnYUBYuDas3KqtSWSyBeb75fLeWCuNaEhEyFtWzu6FiqYJJoL3P9nB8f2sk6WykBknAbkdtJ1j3yYd2JBF",
  "key31": "3wuMUh6SPt2zHCJ2LXD1MEY9csEuSyN1cNBb5EFmdnmCBHFYcbiaYCRQ2e5ybKAEjFB9DdQRA7n1FgmmbC2SsWTg",
  "key32": "4QY54qzCewAaL2KyEd8Zy9B72FTfqeHnZsug3kaSopkPr4dp1JruzCgqMMmCFspnzLC8Uvgjp8GDoeBg561VjzCg",
  "key33": "3tsXYBntoLqZhrkowyTKGmPyJuaJ5z15Z9CRU79yJz5UnYviz3j24cEixw54xMyq9bDo5tWn3wVonPMyFyPoVdUa",
  "key34": "4EJeEB1vzLQeZNhPmBgvVZyEtYaUJcAVuWxW7BERYwsLuTbExuPG8VJWggc9PUhhQK3tZt9rdEk6RK94qhh9ihUB",
  "key35": "2QZyGwdPuh8BYMvjZjtR4Tp424DMgK4hhHubVRGbzkz3yiDTTXfWDgnNXx28jTdBd1xtTcQubotCspf4pxMGqFXf",
  "key36": "4AdTB1heUS6NzXhvPPqJjAhy1rgci4D4a37MVj3Dmk6E6uasEARjoRM1xkvwRSs6ahe2dXE6Mr16Z7UHPsET93YZ",
  "key37": "2S1e2QPojuEiK2WAN8tPv4EuGWiZrCazoq7o3YW1LLj36Hz5aRrttxMgPnGcjoq4pg1jap1atVAuSLGxDi1muppP",
  "key38": "3cHNi2PrWNFHRGmmFA7MqWZMtEGpJZCSGmFCt8psL8uCrfymcss1K3rx85ZefESRC1X9dT7K8j6s85FKTKgRKXU9",
  "key39": "5oH2HQvyG3Eeqy5Lvt7Lm1uHJ2X5tUKjmLJnkBWzL6VYDUpGkjR6hHZy73FhV4fjkgL1EExEbJF6Y2yQicX7bg79"
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
