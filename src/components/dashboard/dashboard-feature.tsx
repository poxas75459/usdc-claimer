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
    "43HW8LUmjNwCDZR9RhcVacn7VNHjxhnTeXKkmDsK7D5DPctn5npteU6VAKBBVZxCGnFWpcJjHpSoswBmiuRxHfxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lm5hT8MZ5xJvrBzavicJ4jxcHYC2jB6W2iLUXq4osYzHWaJiaAMwUhsX37hQd3svRaqz5P1nScHTgfDbxkkCgvy",
  "key1": "4pRmhTBqKbsfE1q2BHBmkVwFJ2uJ36CmV5yXsRma8WKeQhXrYT3PX3HgnUckhjut8QsAC47Wnvo2ZcNuPQ7F7ZHd",
  "key2": "21QFoSCPZKMUswcC2uNfKU4gddGUUPVeT7qmcMauctUt954ft4BkBF4Q1oQhSBQ7Niu7Ua8vsgbdqsA6w5T4ap6s",
  "key3": "4D9yHp5taGNXnFqc5x6YkQB3Z5aSX1u1my7JsbwC1JWTr48NFcBRXw1zmdkmbxUJ1quheeujkdfy8QHLWF1tzh2R",
  "key4": "5X11nZzVp5KRgp31jRVMiYe4mo6L9qh3g7n4V3ScMWKVEy6xGxQoRuKMzUzuf3We9Sxpui5vaVTV4rj8jPYfjbV5",
  "key5": "5SV4w8GNb5yyj2D7686iNqFxKEHzrVrLT4x7MdqWoEzJPSfvAMup1EPSZSR8yytScYiLbR6qVcjomAGBtce3N5LY",
  "key6": "5ga5ajtjMqr2jdAd6PZPwnDyvXgTEnZuPQp2oStzA8m71giz4VQWX8V19cJQmcmkuS9uiioTzS1knyPNPVPmVB2m",
  "key7": "4L3PgwTmTuwNTGs5A1LE39s95VUKGDxTNkBeQn7JvWr6b1cJn577pxTUG2nD7cDyLe9a6bSTKkmhpg93ehsY47AY",
  "key8": "49N6DyZJmG7stvjF1hUg6EkXrL1vWbqHyne7zsFiwkhpnCgf5SMXhW4vs183k5Cmvzc1Zn3gUa68duKs6tewWERA",
  "key9": "2U6dGCtWdmDH93QEeCSp4aq8C4793wMZsGtphYf1d78wokLVUJe1PSjWHx3KhqnjMrgToRgBJfgSaZ2x3NqiARZm",
  "key10": "3vz2aQEybouAwxNfQHHcLzH8mQy8WqzHHo8zPi3A7tp2r5R32DkUArs2QyGdbbV2VcnHxtrzykqtzJ6EfPUm36Wc",
  "key11": "5v7x6V8eZh3s7faoqyeTcmhXvhit3heKxG1nZpi9hwzpedrPjx5eVawfdQpMLQTceGQFsu8NKwHBYj6hwmxSZmiz",
  "key12": "3SYgfxg5WyCiMtH2k8q1DT8gtXnXyZkG57jBzT1R2ajhVXUfSXMbvsMYnrA4rC1BPqXEpppv4Nb5eXWechsixxim",
  "key13": "5MU5G8eVbAYFyP5nUWVisaPqjJJotHCeuMktf8SpdiNLwDzKNv7jykTK4RcyRB7PnpSkJwX1T7VjcbCkDtwpf8ge",
  "key14": "4iNNu59bw9cN18hU4cfiTiVv2FUDD4aRT5Qr9StDCzcyaguMMYZQfd8gZBv3Jq3SqPqh31ieKVGAfPoSvMsJnbbB",
  "key15": "599eq1xRW8LxwFHvRw87Y7v9mzNiouK4Sy9tm5hVTnpNxvNjECkL5pLp5WzRTkzQG61utEQsXTzazoJ9M3LBZn58",
  "key16": "2ew9GskgmZmui8Fq9Y5Da6mno48iXdQGJNwzy9rt4qg5ZD1LB9NXCQnPXDqsZhnspUzZgowdLmF3LHsBpxmqfBMS",
  "key17": "ETKs4UH3QBbkS2WSzTXw7PGo34AV7f8NjyMzcXJiSSfaRNjotbz4pmMZWeJwLkBSinb6yTtBFuz6hbLm4uWnwfh",
  "key18": "3wMYuobgPK2rWYQgzwC2WjDaMFB1YzdRLmKNQjcXaphKDec6P6x3SK8Bsr2gRBuZqDAqq4RhhiLiBnVovqQnaF7T",
  "key19": "5REBcjoVrowmHySoKFPSezyQDFa3BwV6sQkB32gbrV7fvobvdA6beZZo1nDXwHe4aovWaoe7Qfj5NuRf9oHEsGZ9",
  "key20": "3DAKD6GspRWYVvzSLMRr17ihPkwhED3BMrMt2hkLRVmu3rYq6yEgX2ByMGuV8EuFfVRZ45CFrEncKd3XS1iwJ1Vc",
  "key21": "3ehuVsAmtzELnDRW4dysHhgvkpeFyWoYS1gVr3PJCAp8NMxocrNWRhqhgfgQdHTiCMkiTsvFfrBnUSjqdp2oXBYf",
  "key22": "5k51wJphdm2huGaCS6JhP7UtfGkakwz6XMMn4kBsWqhoGQH4XxLnAmtmfi7N2SeRqDEZSqg2wzpvmVE416XqznpH",
  "key23": "3xW4rHPuc5oSAh2CKVPRKX2onfzXnmySGHyWbfhG4MKRskVnYwSBbGkaE34DHasVTA4RrXTZ31NVnVxcMmBLizDi",
  "key24": "SDpqMi34yyrpH4Hr135m1nxzgqvGp69iE74EFKJZfvnqzQuPr4X9AZNR1egdazNrkZSkYAHeBYL9uGbfdPRsV4i",
  "key25": "3yG8VNesnF54FjKXZSPvW4PCoLmdhzAwuZzb4VYP877k9PU8JTio4uJzy6qXshy2AxgxED3AvXbYYcSBN9YNG9pv",
  "key26": "4PzfnQsYwE59PmstExQbYzdXFS1swjw3Jr7Ge7APs52mBkgFUL6q3gbpVD5asmVqtDYP6kavgsjvMTdp4fnJJX8h",
  "key27": "5rnieAV5PnHBZCCZv1rMMQeB3Xip3ibTG4XPEmBxh9FyeBaft1E5qPgS2MHMwiiYWrK7LN76WKuo3qfUoSKfXDEr",
  "key28": "3pG1gPpenz4pCdwDvMGnyJjHmf9dRsbJZ84Yvr3BgQ1oqCT6ix4Nm1RtA5nqZbgV86ZPmY9k3x53sdKcpNuMHuXT",
  "key29": "2jxAAnjvYaWTA9vYRLNyh5KGZ5p9PbcGAQzNLedtcJ83tnQGK2tFUz2Nq6AR1PwnK1ot9N77nST1SuRZf6hL23UP",
  "key30": "5ULCugTkQMoDV1vSoK37w4CREhAVdf2QhCxtzsDUB3cmt2tsWnm7YbQ6mZwPdQA6WEgEVvTdkgVru6ef5QzmAu4q",
  "key31": "5eRUt6nrXiYEkpinLXJms31tTvuSGm8NuebFtDP4C5SLH4sjoVLodvYnLN5JLrS3sxMDkynaFPybTzdUdPDZWV2e",
  "key32": "27a9jJVJCCZgKALaFgJJowHd7yboKzhVdbDXFRgWK76QqR3uL7PDNde2uayWjLaRhsthCK3PocKtJXNRJK25bW9S",
  "key33": "26Q7y87ZAZc9k65mmaevTcoBRDsKe5fsCHMruZpqgKZgCRUEJygkCR1rEUKPEFg351HWufrUsC2TNRkZBdd1cejW",
  "key34": "3qoALwW6nKur6pT6t4N4DK4TfeWn7RRJLPfRfe9NuBQZgHydbyrvutvYbEbt9ctUrREkvUJSEuWUBgfPY4xqd3Az",
  "key35": "4TmXL52MtpyQSt8eSNF3Zs3AMW5rHSZUA5S66Bogxj2xHsfXFUvDs2Cg624WEZ9V7X2MU8wwXc3yaL298HznuDrL",
  "key36": "34u3dQduyWpzBeD25s8FLzyTR7uzzW6PenqLrWyH2uVRNHUaNRkQDoDuGwn9QwHUF6FDPHxzpn3NoVWeumvuqrWT",
  "key37": "wmxBGZiVG5dkJXVj3Nvx9eV8oUfCJLUoH6PBxgoSoMB9TxrounXRoEhQEXATMLUCUAd6Q718XEm25uoLtUQYZb7",
  "key38": "B7VYmECkk76pCRx6dBhVYp7K9EJHN6X5WudoJfdqh3WX2xXKzrYAiksL9NWVNwFK4wZtvdcDRj5NLs2E67PHJGT",
  "key39": "gw5u7uwjWX1d8ajekRVALbmmck2jK8Yfq6xoDgPX9DLC8kBAkGLs14tWyDA7UHK1Qt1S3smEZkmmdaqMNBc6AJH",
  "key40": "5RwV9LhQqTo8y5oJYjY91Ks9EduPCT7UZeHHeu94aZFqQiG5CD9Tv1q2EJVoCm74unioM4nRhBcPKPwBb2hQnfqq",
  "key41": "2t53A3TYwKKjM1dSL4gvSsRfM7erQqE3sdH8DsYeRBFMuaG1mTGPRoWhHgv9wrX2dUh6GE1n4VZZLQ5bvjN4Rh45",
  "key42": "5vhAvzQA5Gjzr2QdLgtj2vJDLjiRZ5V4wHZhyCJFitw2Da2fjz7MwXXrU8HgPM2Qpv2Ka22Wu4j8XLj5WHvVRquN",
  "key43": "3iSTw29JmhZeSnx2k6cSHhQpYV1nSpXQpPRgYLiWdN8emiCMqYQDhTxJBaGrDhWZC6ZsExXcAccJBMx1hj5PZdyq"
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
