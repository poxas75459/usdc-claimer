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
    "4eLmZJrgduXdTG9nSvgZqPiNRYi7qWALiVxaCKpLjMFnG9CfE5HhLNYc9XnUTPaxhoFmX3sySDdKaGgPBRF6nDqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UTY3haUey6VbW8zCtMweERq7Du9n3f9tSvexVgwQerXsfSsWjQcQCxhz6TNSs4Q7icQRxHMDJS7tGQU4SShL98P",
  "key1": "4BEpcwmss5DZSVcFGe3P6sFYUhECYdmCzYxieRwJq4xJKAPNGdDG1zNcynak44Hf77eAhaNjof5rnz7VJUiryUvZ",
  "key2": "f1R68vJHxbs6JDGB3SbRAjXyn5q8NkF7UQVCKerDfd2K2eexbRksibZvs1HDmRBdwHixeJ2GmPEho5n6RGRKsQ4",
  "key3": "4wJ3K4iLxZRYHbNgE6akyNKFcEdHu4ev6FgLegQqrh1n9C2Xt2KoWEdVFVXgk6KtnKKx9sQtwpY92zD7urjvuyHy",
  "key4": "ouW89aNxHmicYSK3p86kjDzFhVUgC22esXvuCVAxitGSNGzjydo56ui2LJG3A35ZHDvHgfFuc1eUYG9fwLdoA6Z",
  "key5": "46LrPd7r3zvUdfN25uMo7KxEGsWuodX6NxVySddbiNoCdUZe512JbUz28kZ6qb26JM1SYS7dFPTgKeGPC848Pgr4",
  "key6": "4aXBwdbWYnxZudD2NvBQVw3Rg98tFqM6K3LDkM7ZY58j7qmENmYZHfMdyGsYvtAVQoZr7R2LejZcGAkzNUxjmhgp",
  "key7": "39C9ApeJ84n9Azcjo8civc3vqppEHiVLWYkd7fxUa7eKGoXhaR6Z4GALxGeKpYsu6nCVnNsHyoVs7DNrCZANZprV",
  "key8": "3Jy5kUurZakhxtYJVobUW8iWNxHwXhQQsF8H5mLVXtyxUJ2iMUXcuNem9vKKNoZV8kGuau5cPv1TPsQbc1Sibh63",
  "key9": "39NG3MnHyZAhfu3AZazPqFZJSHCsfdQ7P5E3K5cSj98cwsXCaWxDdEzrwpvxZjX99PKmXXUvQMZdfY6zGvc4BZXX",
  "key10": "5mKPwsYCCiDyf1Zdg9RAdf2ajcn6omQqJiaaCpGhPLf9WdLzvxs4C6WPnJsGY7VHpVDu42P13TddV7ARZpq8Xcpi",
  "key11": "eYpKj6WPLx9PrhncfgXgXRRPFu9RsoMJUW9rXfHmRY354FsuhYvGRTWp1yGE2Sv6o7E2csmdqwt28oDF463gH3w",
  "key12": "3FK3RHX3SMD1grsYEJxwkwCAjBm6s6CzAGqy2uDMU1ojvtrT6Cq1D8aEnKZeS2dPPrAXjqSLsvFwSAgQUJQEYPLT",
  "key13": "5p633bgp9z9hMB6eD7pmxaxCs3n4ZXrmRVwgj8dzqwHUb3LUgGHrtnyVsodLpCbCQFYYP8h831iPFAYA6NfHuu7T",
  "key14": "5pQ3C3q6vRUV96HcqE4tcjQk2zr62dvsNjP2wk48KecTz4Nh5BByKjH52q6UmSWYVovwncjL96Yh9zvFrnemcgFi",
  "key15": "TqbsJxnbZwKHeSrXDVn88PkRVezyk4fujmBRS8w1NXGuLhSNR9erXCEa6PRVUbE5c6BnbRaFHaMVh7jyT5cH6Nn",
  "key16": "5zvwNeBY2ZkXdJ4WMxGyidHc6AwNVEQM72AJt4xG88z5Yy5yver6ZGsP6LGKBQ4hgX5p5ax8vtJCFe4sVZc4ZuVu",
  "key17": "5ZmiEa2xJ5CjDMM4VETK2bzJZgtZB5dMFV2hoacmabqC1wFbYKzYWFb232gRdbzkSsFXzJKtRjjXtv497Z5rQKqH",
  "key18": "4nPKYHDJdM53ppKQiVaauX6rhq2p3nssRQcfmvkCgAdGVcx91qXZk7adwmpiJC3cGAsqAvajjAaWti4fShRDf7AB",
  "key19": "5qAmPasBXEoSSGq3todEjpvb7q8GatfDwE2MJw7AKxe4XoN9Ygmye1S9oWnStyu5nLFhKmM3F63NLqDtBk9M7szz",
  "key20": "5DjsJaofmJryf1CY9JX3igi1bJwL4i6rvjxNSM7hv3KbBx4q8oSou8sCG6maDKfXQSVumbrnwPV3ZitxQ9Hihv4Z",
  "key21": "4F4ox9PHZZczVkzUV1rDE669e6gCv8pXrTXFUy7scT5vjoTw7gbvPrxiprqJwdAbFsdP6xhXJk4uWj5GzMVyh5nX",
  "key22": "66qPYQm15adPHKGDAv4xXNDzVRdFZUELbyCSPzwmUbgGMDf9x2kcwhU9g2gU3k5ZyzCQ3Jt4z5YmMudgveh2W5Hr",
  "key23": "26sQq3hE1tD3Ny5c9zTR7v8mc5ue9wWk6Qjxs4XEkuz6iTigDhaqU784dCk7XFRxWtu2jN1kE4ZYaBtQ5fR1idWK",
  "key24": "X5af8TyTgxGMs6KToFjWVpzszsPRYnvgDYtJuSyzdEhmp9DyoZnuxvqRRsMKCP3YJD3x6NyBoLjycTsuNS9LaUL",
  "key25": "42A8QhCqaEUqXx9rVzcsmcBpUChsidKvqVmAqZXmvq14QaUX8qqTXh4VxJuU8ykVyqcmAYEdJiFeoUycyYc8S4a1",
  "key26": "2xuTdNvhMs4o37Js4AiXCbT7xfB9sh8F5n9jR7Qv5i1gkCpNguWR9xLrAfycuLdryhZHqV6SAeRbzCpDYW5fCKYF",
  "key27": "2qzV4ypwuHjfSvPXTr85ek8edcJq7m7PSntPzunGChKj9teMGMhE4yvz5XurwZWyXVyXwaiUC4z8jRttiictY3ze",
  "key28": "3tqoigzZpVfxDrk64CJhSC33sQ6eqttdAoSoWyQqkoYMmKMyL3tFTXFzGeTbg5wtrxgKswMgaQiA6sK58CmBAovY",
  "key29": "38AENottU7gM9yjscQoghY66gHQcRSHR8QxEek3Suyjqp4qnLAkDKPNjFcNo1C41ojqqUdRHNHpCsSC9viGbFjw9",
  "key30": "2ssmYRpSDrgPMScpx9Ytxbs81zRfXZvu1mEFiD4Dc835u3VbmHPGuNhmfJQpCsnZtvty85wA3PJcaY9fQycecV6A",
  "key31": "2hFuapaPovtpWLZFyPvKckiX3uzwxJaXFFPGRbj9JH95GrxGWj7PSjxYSFh3mCkhzUkYmYcjoTh6hhi8o8tdiRjc",
  "key32": "3NBgPheLxdK2gC9HuyNH5rrHZ2gKmSfEFqD4L2auGsBzFNpQuWgRYBpdfY8Ffp2yMXjyy3gQtRPTgNK6QsqDCunN",
  "key33": "2qvQA4absqCQZjHyQTRsWyjC4fhkrqCe9dxZsXjPgWpFnLAs78rNXpAZ8PiFMVd2RQLg8RyjhdNx7wzCtNVXH9VF",
  "key34": "2X7hbQKzhd3ycibKzyeVp5quYzoQCLmyhzuXEKcn99y9yCHgRoUwd1kTpJr1tWxXud28MNAPBD2cSZod4TwMqzpT",
  "key35": "3aDkYUqWyK5pJ35SdgyFgMTnp6pvcxtsxSdTQvJ6t2WziFSnPfheHgUHM15ePFAALAeuain2fnkMRtpgDWhs3yTT",
  "key36": "4TdLF7x8bJDqrHqheDNn5VDYJhbh3QRmokWo9YmJrTMqZwqqecrDhKxDaSFTHW4ZgBiJcqWE1X2Lr4Ej1gUzCArR",
  "key37": "psZaKo3hwZWebDLznXSH7PKFcRJ8tGQRJtHcvopuzdX1i7cZgf6Pv5RgsGLszYoHfyHfooUJzPnjYS8oiP4UCmz",
  "key38": "43r8WebhH7S3gknsnEs32d553uHQUyLFxByQh7TZSwAva6dGxgL5LqmE6mkp3m2Zt1NbVsauKU27pfBnFuQxRqJR"
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
