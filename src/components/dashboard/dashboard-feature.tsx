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
    "27mKLJS1GW5LRM4vCtHUp58R8i4rJrF35nde3yPcPWneGA1qKyddixPpu7j8DNs6by2XUdeMym14poEmZPBHNvq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JzMAVJHH6XShNM2WSFdbTm4yyWZPmCkv3NFThFh9XSBy7vy7RuFMbNdiSfRXaUf4Rxos5q47We8rWazjt3eJiMh",
  "key1": "2xC5gJHGKVshjLtxDagftUenspBBSLE7TXUDL4ACmjK3KQZHuRuEZRofPWjn5rWUDfkdsukhcc5KZ6QLBHGLUUh9",
  "key2": "44mcczaUwUYcdCyAxpKX8z9YgCBZDKBBQJbeNPncWAExNLWfbKXhLYAp8rKFa4PGMrarRm3mA3Buz1PrG8mvapwz",
  "key3": "36wDXMxXD2btF89QKoh5beuqvTD2GvcNeqik8ds3QU9XApv9VAPdgSNR8RJMRvEekRFD6rFKYtdi2wj8sFwJuSer",
  "key4": "eE27BNZdTJ15fjANiz1YzdzTs6VvT4NQZshh6ymUJYEMzoGwXRpnRFVBoCpMkzrR6VffyjXB1pssbAiQUFf9h6V",
  "key5": "4Xgx9fWR75G9BdXYZto7iX6m6ivBo9jZVkRtNULpTL9dEBUvYseFAnVhhmiks8gnZRt22i1qeFUZCU22YtkcMm8A",
  "key6": "2EdcxPzGFa22BUWqNGML8snax9HZ8MyHdeAhcvfXysKjMjHqF3oim4aYYFWhUrX4kR7suVzas1KE6vBMM1CvMbAH",
  "key7": "XPSAPEPzT7SyMX9kXage3XeS98Eu8MU6Wmvd65JxmcE3rPGoznJ7ZrUMY4aATedii4ZYrL4D8wbqJCEjSsF2FhG",
  "key8": "2yxFzJMjYMbgieuvwuiBh3Cv4PnRmhtvYTstRaNkB68xdJ9vtqRTeo5xks4HNUL9jUYJpzV4frKh3nr9LcPcHJVa",
  "key9": "i1s2bXnD5xBpctTaW1qMuag7cx17ZWht1JqMT4oJ3SaVBznEMfwSXe8aqKXgkigmL9AxqCVZ9TDHNRbMcy3rNi7",
  "key10": "4o5bqL6ytd6vUVAdDcP9oM2XPzkcD1mqiHzzJFXMwkZGNQa35cBttk2v2t3717GLGq3kGWAF5r3hpV9hWaE7kUAN",
  "key11": "2husd43L1Tn5GdXXWnxowXXPdVWLoA54d7wsuxmP53aQU2E8cG9eohGQXhibLybdS6joo6WLf5ewd2u6qyYQEubQ",
  "key12": "3K2Ncun6UJkKYd87Jq8L9yZ5zvYpc1ZDsV4jk8fc16jmoXHSSXgnEPg29JXGnahpfJZb6qSToqV49AtqVm7WitHD",
  "key13": "1DomjsD8pMr7tFtyvzTqgaNkPPYiCFt9joQQW8m82KAMY8RtmzMDw2JEpDYFdb9mha62YFKjZfF5rPoWUrYmf6x",
  "key14": "5V6bmGray28uMirg6cuanjZAGyWdqtkdN1gLv7vNg4yHqFfTazYsQsydpC93Q7G7kfkgnaFb1nNo59QnmSVLLPSA",
  "key15": "21cApsuuvLAcKMsEezCKfon5ndAF3e8ZKzMMrmuKLdp8CskGnS7FR3cQxyiebPRyYzvvyQ5s6NmLKPDj91QgqtUV",
  "key16": "4rxfvctiCmBegmhZqgQ3FbttWQ98Zo3NAD912tQUbJghKvEKddA9VJgxTgx161hVa2zUxjM7bbVoB68ZGkmvbudr",
  "key17": "64UJcN5aycHznovh7LZt9tWUsCi4vEn1m5EgxrDpdrgkmdwa5yRuRAsyy7TYodU2hcrkwyBEnyRiMS9L8FLxpXZY",
  "key18": "dWYVnSHrg8fST36Zeu9MFS1qdUH753HT8M9PKoXFsnCiVaPiCsUafWXEePXC8QD3NzhuRS4NwM7PsnTKmUxZruX",
  "key19": "2xofxa8MfDW3RWPvP2XCwHfb1ht1TDDtMvXgkHqL4DjfNz7DhMpTifV4YbNSvTLPfvMEeXNuQL1sVnXGMrgsxYKp",
  "key20": "2i1JC2tJvmx4J37WVRwz8WrXXCf8dV22PsFyRVVMahxYQ2p9B6bgxRxb8MzN519dbJDb43k54RGdxSbaf7jW7Qbn",
  "key21": "49Wd5VAs4Ew8sAXa2J56AesyPJwprAtmHcRsqpXf18gi6VKV5ZBqpJhLjaKHLHbFDH1y1moqhkJX9uMDrTahWYnk",
  "key22": "2RJu6ViXnF1sTBkvtdCRcXzT7DBf499FyN5UTCqKSHAHhVVVVgmJ6rfpUA9o5LabzvWVbtCK3v42GWNoAfTBDGYq",
  "key23": "2DKiKm5T3mWQN6r3E2X2DjwwEi7Ym25otnYybQjBmQjo842n2vf2KkKaoBe1ZSjg7TUpJR38H8u5Cjrr6tJ3QTCW",
  "key24": "3p2f4vek8Q8tSAfcacgiCCACGp6gfgxhzUzBEb6YqhkyZ6pvAbYFamCRCBuVnzK5s61mmkZWGYEFk9doFtqDkQX1",
  "key25": "Xjb8KtN4XPJQASYvgKdg27eUC7C9qmvsWYLQfeZk4yTipE78gfRtWwmCCoMM3wfocDA91RuwoaS6drBpU7Y7a4y",
  "key26": "66WQ56Ciap9oWB3DUmjH4ri3eUkygzhER2EQg2nc17XKucw2S5WqMgZgR6zxdWnJk3rWbjD8ids3m5q999azPX4U",
  "key27": "TMmyWfuX5dJwWgzkVtHsSRa7MRUCstJXbPCPwFrMGrkzAu7ZmBe5zfLpgjGgenyiEdkbZgPnonYoLfDfz4xkEk3",
  "key28": "3F5zjerUW2oaNV6hkFxCxCFV38pY9AmqXKkvcVTi365EXCeQYvh8qFHx7SN9cy8GkufzUJCQ4xJoDoSAqGcmcQUR",
  "key29": "4rbFfAMrDfd1cD8Jh8q6iLijeQYqMedgbo4cNEmmGJgDuU3hc9u3MKq8th1u2XFzbwEjZAAGUaBLAEB8qq6EyhRG",
  "key30": "n76jKGydsMJf9BxdiJexaebnqoXfatkghMnGNZKyckHzcPYVnuJtHb6TFF4tnJkfDrV8Em9MUMkSeyGNPA7ofKu",
  "key31": "4Xt78hrrxXVVjw9HtNpbw1YCASnVGyT56tWH4xw9z2pQdz7RqfYY1GmckLPezsrQCvUPWvZ17GbVp9V1qZrF9HbB",
  "key32": "5FLXs1vKhvcffFET3EcvUQS4wkS2d1zv9pZPYpHMH9zy7fCTTBs1oKatLisLQggVn9ekBNeZ7yv2XnWxygQdHU4X",
  "key33": "2AvzbjAJZRgL1JtX3B4icbKeSrD1t7EQcJvoCnsEhYw4ELa4wLxBmerxDir2NjfHqP9MZnE6he7NckuUSCTEZx6U",
  "key34": "3vqXHx1qRnxz379yL9pDNJ7UvwQnoyoZQpgENXyo1x4ohFz26vjTy6RhpVtQvXwGeffZXuUCPMt8dGk2TqhzYjNu",
  "key35": "21k6WSVx5NNtDv1SQDMS58pD5bgnwPTsQVMudmEv1DvHwGtMYdXNw3431ufYMxXcWXXtkdRzb7kePz4KGjUZGDtd",
  "key36": "2gc8FU6imd6DwrqrYt9oEpxcptQXgPMrKkGmn1DQLFqg58CbwxemHDXfcy5FcFFZbbPzF5ZsrZKRtCkG4fSCQ86s",
  "key37": "4pdSRkuD4fB3VNRJHtzJcEyXvb7GtkFHmvSMjhq5fHba8TJLZBhrreXVU9FPtiiVgLxsw16WtxXdD1erCAKy2H61",
  "key38": "4Tj3qvyyB1gM3xMB1dMt7PCXjVnQgFoHJSUc3e1kHsoxEJWKJ4X1JZLarXVxS7wHmqvtzAFy4WdUESNmTntX1xRH",
  "key39": "3BxfrWBRNubxKyrmNofDQWG8xscaK442rficJuR4rXnjeLXKRjn6aac6NG7cN1WNF4DJGUi2MVUoTHkkxsX1Suy3",
  "key40": "4XHxKfeAmUjUJuX4t8RwTWggbq1jp6mWLLC7WqJFXEW2KnRNLX1w7frmQsXHTxFe2SeT2UevrdNSFEgofWsXEjWr",
  "key41": "HvGfWzmTpGWT91JMzhxUQiVBhQXnFgXhogQ8FRcvfshgeBpP8TWDjs1Qac3mt1YKjirY7vvXwzpQqLjZaKKvi4C",
  "key42": "4YAmSqgPCcmTfTZzrHjuooKx5tKHhJQWqrC6SWvsfVMGxmRU6tro436vogPgHmu8SWYmAFh9UZ4PQXgkiR7Zoa7E",
  "key43": "2AHPMdYLFjgnX8p5Xi6rdcCCPNbJXcpK3rM7BvBh56CxwqygTM3vBHXZXqURAnXKE9rFKT8gYZ8VD2zV8NgfghaC",
  "key44": "2sh1XDDpeFEAg5QK8ksX5ZwjZ5SqnD5NjfrmKPcg9oA5HJLHyap3kDhnmBGzqCoUFM7siX2wV5h4oGvUsdz7X6eq",
  "key45": "61Ai1EgB56zGbGjwJdZHvmFFf4Y6kdaF6UtAbLCiAnr46ffPxihwgychMa3HxMqSmTCLqQjjDpEuXqmY8znyoLAk"
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
