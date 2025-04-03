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
    "4crLuMoxUVBN66Edy5SegYobGhdNScUB2HsVXcvc4nqVQ22RcDqvJa9zMYpBFooJMvg1D7ciqbScvYWajZkoKW3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w68yCTgLhUhsz2qYFdTRdBfueLKaBYVA9BaFE6T6cVQ6jXvqhVGCopkyW8nQYkvBaF6urx2o5kMAnvithxa7dxR",
  "key1": "44VuD56eTV17yRPpV3mt68jfb4aJ6knSbivVpTv8MnbgatcQ7JZ1oc3meAkKxp7ebGxntxny9VuM5D94Ve4e55Kq",
  "key2": "4SEc7cZSQ2d1UsG6SyVqT1ysD3z8u5beEMNsxAdmpKkroP7n2wb5Vo4AYrykXp6eLaK5Wv5zhXpKv4cMUPZ9kJRm",
  "key3": "fYogT2GDqT2xxkHvAy5pErf9riYHV2UCbf5kzbwwztBxf4tMxtCHwKKRhQtmRc3Tz7FrSpqKW1u5C73ELdLKAVh",
  "key4": "YDA8t9pAxtgrLxpphmUq93pEhW2KSt7bc6y6CnDbrLmgZ3bPpxF7yULs24ZqQLGKWMNdhgH8shLmThCVS7WXzWj",
  "key5": "3qXhXU9uFiAmdF8pi6MuYKWcjf8tEAECR2hd72RTyUtDLZERzCb2DBwTurwvT5myR9pfm7TxJz8SoTTTfbyGtKoq",
  "key6": "5iDrwbmMhCyXyBoEj5d1LTRGpJBjoKjognn7DeSbriXuZEPmfW9PjJhFoBsGEu42WymQgAchtA1mEDufv8VhnNSh",
  "key7": "5t5sCVZb5Zu6eWS81oP9SK5yw2SAzu2QTXb9ijpyzftJbGovvBGAGcp7H1kA82kv475HoTq7JkNbd9SvuobwNBLp",
  "key8": "3ra5aqRBbL4YoXut7Xvfca6W2NqoGPS38B1PqAgveoVPToGyWtoD3zUjBH9gHJQF9TYJyJ6yR8HFoPJTXg5TAFyr",
  "key9": "5nbNLQp2eccuoQePSjhBrZHhRF1mdBpY8rCu3f7dZ28Lr4mB41bQkPVT1P2CtTv74dK938LhgQ9fcEFgWNR1zwti",
  "key10": "4kyLcwZZe7FV8nRNYPgsRaE5UsHnAQa3cNTZwyFvrpfmjxnfgTFuM2SkwmpY1omb8QpqzfJmPueDhVXNXxhWeemQ",
  "key11": "25WWAZqKvSiocf8ejE3gUAvKwJ5wbW1UnN61RdG1CrGSMX19kdGkjbHJ2qMRnX1Tzbgo44FA41v6cPHBtv3XgiA4",
  "key12": "Hh53iU3yyNz6BPe5EcJrP29hsPm72RWX2UJMjMWbiDHr7V4tUio7Fs3wr7aWWvaJGe8v6YX168n8NsJ9pGzN9k9",
  "key13": "3JNic4BkRu7dL3crAMg8BFSjExRAQLwf7e6Wwbm66k21B7x8DTrbbiB2CU633EFQ7CCiLyeK1446D8T3jDiszeB7",
  "key14": "Pcp6ByJhVerNVsnSgkbZS3C2ZFV5ZkMDgq2h47xNukbvMg5KiKAEfQXubRGxFb3EVMpzbViRgRYy3yKeCMFCLzS",
  "key15": "TFCQ4yw8NjhT63E6uaaucHPNgRYitEVcgMBpPjdJ42VcxbooAMseTPwjQu7uNwfSR3CMbXk31UA1o3KeUJhZFuM",
  "key16": "5XJdPZ6hXAGa3XP7BEqr6j9nGDTYi7EPyEbspuS3F6X9fVxsnLxgNarZmJrsnvfJ5i6ziLEoVgq9CXkputoJVeDM",
  "key17": "49jbbXeSvAejySKCnFydoLr1qqAJfMS6xohw6cU22wX2SodRAbkWM5pMdsQo2bJv6FvQrEg734x88WrygVqeeULf",
  "key18": "GDbHubvpeADitK7smTasFMwykTdWhhm3KEYTtodviaWJ8ekqXGvrED13sFywD2UyDMw2pKuUtGk5AuTi7w6mL59",
  "key19": "M93bXTM2nqpMmnZeEDA3n7gDwWgE8BVmQiFduLcSAdP1Z8zLMko3mkqTEYEU29hKecjy3DgLQT9vd3gqGU3xNi6",
  "key20": "4kUocKcXmezZoVQGVVpP43k1Qm9gBAoj8bKuWkjLfpHEANsBaoqqXsE2JEgsuyrqEKiaC5zWqARXsMRN9YMgQVfP",
  "key21": "2jtBZwdkaft8jxgSAf7X3Ht8CuThu6QNAe88cK8VPCxzh6bFGFSrUv1mETFzARZbs6CUzRWAFvN6cuD3EtSyNFLG",
  "key22": "2rQEw5DZPL5WytG9tZgzb2jFJppEgv4dzpFkktaJww1rnAiboZZGcmQcjWJeD3vXD9hvpDPcUGaJ8TwCGpvhaGQA",
  "key23": "7zMQGhyko6mAvy7E3UmTfPZdmpYL6qCiDRGLYCLGCt5qKwYJ4mtT6qobG66CWMq8dTuqDSyqM2h6znNAfi1Evpo",
  "key24": "64zyWXGDMiBQjhETTTFq9edFn5C5fyMedEbc7EJvS94izFUedLKeDQmxjekBJvE3fZDAzjJx28cBMbjfceYt11oL",
  "key25": "4BQrCH7hH5UDPS14qP8QLxwK2sy2uFhicuGcYh4KJS5JHQqL8MBUzK9ZAkFQ4Sdoczo5jMfEz2qggQt7CxG6u9vt",
  "key26": "3qtbX9mHHTyFLgRAvxa24G1nSjypBc1vvKAfSunYWFkAK5xyWtvffBCjf3TBLUTK8Dpv1PEXutseLd2Xo1AZ9ZKz",
  "key27": "7qp6aaQiX28ts3ZsxnLFAaFNqoKL1hkYSNE3kannKeVkPxVipeK8Bj8o2WAxZVpLQyp8i55y2K8g3uAJN88whgN",
  "key28": "2iFwnypvHY85FcbuewiSdMC9qpCEmnNwiWUUM7jcmgBbaHYy3Fd2Qci1zYit45FVpRUE6j2gAamns4eEm9ef2MjZ",
  "key29": "mNhrgJ4jg4vbo5jWdXGUXAwBc4zWYznFdbP19J4axR5wA6wFeKGCFtqq3Hp45t8nkLFbmQ2iaqd4jcNP9iuHDy6",
  "key30": "3Ps6wFbT5yJgJPCrRQM4TiidBTMCMddSDk2CKMdLCFNwYDqgwRsvb6D2eLjgzf1ps9u9WFhB5Yca8AQHwPzhXHgp",
  "key31": "5P4wPyFi31qD5kZro6EJWaxxCr8KxnwTbujZZf6BdxyxBCWVjjkaaF3njcHBLQv1mgzEuN3f7vPuUxq9nWtiqv4t",
  "key32": "5SzqopUYCtQtEMcZg33f7voRrnpKfYiwUJHnVF1BfXZN8RS7ygpP8bKU8VVN5QZUevnkTQgyt226HfKaMvBZvh1Y",
  "key33": "2mvryneJSJ5K5mKHvmfRvKnM2Qgq3d1pYyU8dv2BmpCaQxMNh9wCDTUBsL4nza2diuta2Jet9K6kVRruWX6U4tBG",
  "key34": "2qZgDakKegnt1Ud3ZcGQyqMwPc37Ax9aoR2J34aSfUNcgWL4MPwJhsHSXCNMmMTmiVKesLiyu4uSuSVWkY4tTa1n",
  "key35": "4jvWCSQ29Ebe1U8GyKDn6ULwvpucNWy8JeY4mign6TVn3sx12KTUwaQy3XQHP5k4VFsvWfYqWFPSppSi5ving2vB",
  "key36": "32o7B3qFkxVnNvgfYEYdaSDdcuNxzPkPZ2cSZek4TqFWNwoqw2GvnEM8ozcQ5jDyd7RicL1P2CKHnxs8cf2vzTRF",
  "key37": "2qvS93fd77LBdsMtMYr1TvjqiEoCJ7629PhbiLD2dkRhXUphBJegZE1oWQha5Nr2GZ3ji6uWZrx6mW1r6Gyr5Gf3",
  "key38": "4af7LZwoauh5zr3wUAJwzLv8zvQFriB1TRppHMj4JBTPUUfJM1dWZem5cmZcReYo2m9GJc3cXyzdTgQwMzrppovK",
  "key39": "2XtDNM17MFiBP5Cvo1GRsHQBADqL5rv58w6CJxG9T6ajQnHB3NUU7V7crBQooiDz7F9CgYVtqZvyG7giDWS4cfWL",
  "key40": "DZAghJA88FwE1BL5M66Hwb34RkBbLjAxMMxD4hkMB49ifDKn2hVS15s1EYyPt23A5PzNNTTGAnMkhj7Pha9mEmg",
  "key41": "5rzHpSW8x7mf7wFkvZkJS4fZrbSEu97Nm52LEv2FTxxbtT2mBSkv337xqQNwLJeJEbN6eEGgnYtJqfa5X1vJ5xvZ",
  "key42": "JgUXMWRhRabVdQQMW2BQaiNxVWckaSMjWcXPKmBja6Vohs8nHHfzxacw96fRjCGvgkJWSfDWkXSX32X3sR3jvCU",
  "key43": "L62byy7SqNHgN8y4VQ3DyEgUDmACSfzwmJTnjnX9eys8GKE5krNvLYePftYnYJrkXXLkKQw1bNoYyieptK4kiEh",
  "key44": "4DuGQSUnBWnEfDt4iBfXP6W81AQpmrjAuXBQfWfKT12AWnf389U98FaaTZrKicMVdtDQQP1Qr8tAZnM1S4ifdKE6",
  "key45": "5xBXkJWjtgd8czrdzkzbAGgWevskh4KdatykmEy1dQyXwAeG1PJ3E33N4gUetwAUMmDqvXmf44846iDYXZMRen1T",
  "key46": "YW4brKzjairXTfsRFbW65s6F12XoGf3mUfpPJ51ih4WipvepLEtoeMVKyZqFaGZPGs9D41s2tKfR2u13KAh4dzm",
  "key47": "4oyReZ2WFeFr8rt9N6tGHHbxhdWdU2nHMe4AtnYuAkce3fij6hfwmPPDcmewXD73iiV2zTUVfqxrWEjx7Tv4gDPR",
  "key48": "3d7oQ3JrcoPyEjLMz3zb5gRLTsBG2jmhwfWXyN9FEdNnTZhehbJbJmXk6kHuoBFRQe1BvBUHcqiysRK4uU4yGqg8",
  "key49": "2JjyryjqDBfNZEHUeKjUq6QTZagkmEvDQSrkR6XkTPgMeKMKCcw1jEtKPcUw7b8YYEHLQP1bq9Rqxykn5uqZaRhb"
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
