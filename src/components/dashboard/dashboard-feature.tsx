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
    "5VStuCWVAeQBn5uSUY44kER9P64GYkdwWFeiuFaTCVsPuttVWSQgf58RTVJFpJHhdGbXp8ZJqt1i4mTFWehqSvMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a1tW36JGCxhcooahXgNuVkJJ6GGnUpBqkHuB7YTZWAqA7CaGcHRENsEMwMobYDTpj1UJRKJwUo6TTSr7YVKvztD",
  "key1": "XsJQKK9Lyn8778R9GTxqaDziVWJCgKQAcq75PYuCYTWhYHdQ9mR3wjkQwGkS29VfuhFLHU7X7hByFgbT8atEceE",
  "key2": "TJJgJr623RLsomkbVGaFzYkivK9MWem3GThCdBpHhxy1TZFZTSjMpLYyTs2ePJkKwQk8jFsm3ZhHHyjDYHHkncq",
  "key3": "4tbH35zCty3cEGzrH79zg7VNrJxw3i2KBxEhpj7G6ditoWtjofVemjd1pk6vQWitnwTPhrPabi3Jeq5ooj6yuPav",
  "key4": "41J52dDmkht3KyYQ24NbwMGXxVyJFj3fQPqp5Hw4TSSD5uJ8bG84iNs9FvfnciwhVPvgswgL7SafYrcEAh6YfyrA",
  "key5": "24eCoyRbvfAwY9jbN9JZ6HSSsLkj97e78mTQEEyKEUwNwGVwBpcSRHou6fcXsCsYH8qHYvyMZSHmLnWEbsuGDLBq",
  "key6": "3gHyz3bWY4wQV597odh9XiMqUKf2D1S5S8dBH4FaxX1yEn86Upjow2AZUYj6uJCScWxydqmMoF2C63bfSM9rQJb8",
  "key7": "ZsMp9YDrQ5R6FH49dPwTnNUh4MsxANntw2YiRPZbzJ2wEYkzUooCKkaRDMHEkTg9vWvnKAfDuzbX5h615viwaZW",
  "key8": "4Tm8hvizHb5yF9rzrNrbmKRQ7vxkALB7ZFAMYjVAT68BZCG1uG6DfKRE75GHLEBJe3yiu7eWtkKrjz5mahsk9n77",
  "key9": "5dA6SFvf9iGQGX24tFcgy8J6WcVygNpq7NrNzNJGnfgmTRjoxXrC4DZcWpyUYAyspisiYFPfpDpb46zs9oEhdfUc",
  "key10": "yZ3e7fkqq5tCVGFpBjm4G53xF14kojq1D5m9ZigNmNcuPrjHqsyJfVEbNcAwJmxsaMCt8Seey2kgjPqmYTFg4Yk",
  "key11": "mVRsshk5zbyYz2kVGm5KEhUTWLMnr4gzgXfVwNUk1e3iCj3QWaw5mReGp62eqkgaFRTL71u4854PgAf2ao7XFdk",
  "key12": "2FcGqaFUDVV6zcjrU74rgG8oBDr9XNRq7NZkZsLFqrg6a14QreVcgG6uAdyWokoM521qY9LvQxJfxYawXyxDfWvT",
  "key13": "2QG9jtEYseBYAmoJtE8Gx75umYdgr7Fdku9KT8qXHyAYfJxy16CbAE6ggXo22H6iEBEWoMJcH2vcd7buSDXRJCjD",
  "key14": "4WBNjw1vn7htP1EvHdhthLfUq8hx5DnjBXDy9cWpY4wZKu9DYzAnqDiy6u7GsqGYjPPWKgZcCjH8YQH5dDiyohTv",
  "key15": "44mh4kBG8okFRP1HzCmzw6QTneG3eY57qtUj6HcemQcuaq2LGnCfAfLi2kPxwCTEc2TxTetFfg7KCKFaouaNrUUk",
  "key16": "3oKgUGj9m7pqVw64RdDL5vxQdCApuWssM1JC6HcfFZ63TAQ8jBQUt2Gs6DLziZN4uKxFXDvA48EPfj1Hy9txfQx6",
  "key17": "44z5KncQoZGP6S1XCaAPu3cgvX4GxoSifgMnBQfXd8u3Qogv7XHBhK7ouLRfEZMb1BYmHPJRsuFvaKwRBaJwgDz8",
  "key18": "5Ydow5uwECXAfPT5S6QWdNe1BrngL8pD5ZTxt5fFJmdDgB1PyjtbevJq96DEYxjeoK2oKru9pHbVXS1kA3JbSqDS",
  "key19": "5fYrzsyvEQuJzvp1S4bTF69tSG4VRJZ17Dp6boS3uqLVccFbVkDQZha4AE1T2kdnv8Kz1icQFh75uXmjDTXg7uyi",
  "key20": "4mpqyxdVSm1yoPbTsw4oLBHJZoXddt7D99W87MKybKCwYasWKmD2FBzoxivPKKbYMT9v49RW5u6qa5wswLu69Xba",
  "key21": "FE7KZ3aWHaqdjKPTfmjxN9LwmgqKDgBdyrKtpj1wgoBCK2wwD2p57yz31hgx6hpxJVXoGQKACRJtVWUwAzK5wcw",
  "key22": "4Gj9MMdu83F8kDhS8ZY6z3rSSAbn9n2CzKKdvEwzD12viaK3BFkH9XJdrkXAKeVgbBHCW1CtXVF8YW9n8EXEECWC",
  "key23": "LnuhrxKZNbV2eGJ22BQt2x8DnzvwdMmuNqNiSFnAEaQi4T3NFYxTxx7oMiFjQWUBps1FUFCMjGgvEhRNSBdoL8y",
  "key24": "586SomFzxrynpM5QY6t45A7upiFuExkjPXe1fcr4iZfTx76J8VmjYKkDwS5ysbBFXNXnqtEfaC3CngYK8qBkysQp",
  "key25": "2rXZrQEP931XEuLdHaqixBQMiYxYr1hd8M8tcahujgj1QxXnqipwqg7WFFSyw2WDmumVJi3iUnZkzLqhBpvvcW4j",
  "key26": "4JiSocR7b5HDsEhQEPuSaJhjQrQuqpWXNtNpYNDmboDqRtuKUf5X9KDzZzGjBPnXWmsTtP5xkkSvMo7Z1y1be9zq",
  "key27": "5Pm3wNEhVYHUf88q2ChYDacZfYuq3Fv6szjggUaR8i5s3vmJ5jDYBjmwCkUA68eUX1jvPsxsWeN1y6aiNb7D9gfg",
  "key28": "2UVzDK3hCFapPnuyUTJ8tbWUxsyVJUEfqnrqXqzSv3AChdRcCMgo6hiVrBAf8re1REBqhTp7tyh8AChkz6nNaT5N",
  "key29": "5pGzRqgCzK48cPL4oQ1n6onFWUNe5J91FYmUV5B2sgQdS2ndtttjpue8XtGMWeTTPi7GaBKBu8kG2r1NVZ36G45G",
  "key30": "5vppDpVMCpj8CyquxBvMeK4qStYw6GDqEy13YThuPDuEyC5JXPohRmkZ8zhZmGE6WRsivn2LVotEdiEsGPKxpfdF",
  "key31": "56HdQ1zzq61fVNuBAR2RjCqsaBJb5cFPLYaxT5a8uDkYUSvG5PHDMMUWQkF4SkmPxaBsp1dV3Vcpryds1qdFkxGZ",
  "key32": "4EbrDFVQwoQdVVtDa4BgNLv4yxvzcPis9XqVU78h1FqEtuB7N38PcYXguPVKbd1rZEC7N2n7BBMv7hZhPqgjebeW",
  "key33": "3TPjKcBg7hNzNtiL3FEvj376kDUdcUb9MrmnvjJw23jPEhNjsLruxPGswbVF3sMFti9irSCcs4AVLpP3XJQNXNQh",
  "key34": "3Nuv8G4ZK3e8TB327oHY5oyEqSmRZ21oZoTYJAsETSmmzhopdzM6WZmdztcucburtaBb9zyA7iRvbMhZJvs65KNn",
  "key35": "Vax2ejcJty2CzpZWdxjSnJejcqVjBM9ccmfwVafBTQHTbm9WFWpsPJRyNUFpXP73V1T2kkHsXxSv3ZJmRXb9yg9",
  "key36": "22ZFwUvaBicmpUx4qdyxx6ZEiuJVRoqo5BUGHBdigECAZvnyUYHa2f5NtprEfgS5gv3kJnzncVq4L1UGWTtxeEhm",
  "key37": "5eV2LaiJM5KN2xmFjjtgUUMbkcnaUZ8RvhFHHyQTjpvRRJJ8KwCHdbwdzJ9ALjyf2mSRwB8mSeVx9FPxaC1oDSD3",
  "key38": "674GwHC9E1Day6TQWCtU1YzGH4HJeSDLSBDrBy7USN3etWap9RYCcB3NGNwrxFkJzzT5gxRGfkeC3PjgaZti4gC2",
  "key39": "qsYUDrw3MDtfyAPB47ctBrnx91riT8TBUnPFTDykf4gABw1uHUHvAWGU6qErB41qFFd5vDeQmmqUQVpePemaD33",
  "key40": "fL4JD1qPFzd3xCpg4Z9xhsQoUkUnnDQPCsFQz6Y3aU3drYeA6hBBeJKXgxyFeFwDJs3viSgggm6XrFZsfWhGhwj",
  "key41": "4RFHYqiPFvjmBTVq5HkUNcfLvGdYgFC8Ad1jPy1HhQ3wY8irkBcGBP7c7dExmoegczf8j8CxcAZKiZnwLcxKujYn",
  "key42": "gtuZ6qYLYaqJWvNnFCTGmti59PZSJUiZjn38BQTA67SEzSqmhrhVioXGSiFBmF9QK57VfxtxP4UoXVWzc1kVgA2",
  "key43": "5WasAzPzpEaHmHiYE2YKthvVkd3VD4txw7dK6QZcSLLdB3nDmQXr5T9ATm5BUo54N66yTWVuobjb4tBoJBbsnUqj",
  "key44": "58WuVAtx5CJENFymWpfh5GesmbmLUC3VDRtVNLwRJKrcCe2W6XZbe7sPovbj1w559CNzE9qWeTfSfPdGbMvNeQ1y",
  "key45": "QPfpTQFPhXCtKUgWTkmNpcbWGB9umhtwA485KfeZy8NqtrMW3wWdRt8HpLKWpDVLDiYjYG5qevXZ6ebsUetBzBL",
  "key46": "vLMeU3h2duDdgAiKVjMm59jBNeaW4SowgYbpn6k7dRJtPZmcVJhLd2EhYk3LDZRyBGLSGeS1yqmAfRtkewKs6LH",
  "key47": "4uERPrKzs5XRrEfDnhUhBr3bJheeQzcVv6SXKiFZEfDwLaaNjwXHmetMHkqbeadp4UgEh9FK8C9H7zE623So6Wy5"
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
