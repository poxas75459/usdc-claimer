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
    "5bDGoXAtpG4QPKWi7m34SJTx9pcewTSmXDS6HhP4zxNAN7BRbQ8tbFmxW6JV348szYk2LqVFhKZjc3ApGAy45GCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uBGTnxpPi9ZQqpWJYYKShz128Jm85AE8fEmiFAwovzQSuy1NcAdUW6m7NZ3nUwVwzF7TVRTysmpc6zbQhDBCpiU",
  "key1": "ZK3a51DS9Nikz5yiiC1h6D2KTCtkR3D2Zjyd5t7Ne6fhZDbpMSrtnsgqAnMdxXvS1yerJxRbQQBEYCp5FzbCk6J",
  "key2": "q6TywRGvKS7S1nudR24Fjra3zjZRQAVzcRNczV4UM5uZgxY2EB6LjjpsF4gnN3A1dh9bU12Sa5QmwjxHr5cj1UW",
  "key3": "YBek5RiEZTAhg6fzvnwXS7ZHEEVbTuFv8PU3ua5vHpbqfycujD9wazaTGxwj49KaAh8nZc2YNQKBGAAbNbwX1qh",
  "key4": "21r3MyQyx6Qzs918fUmXqT8AAUkxszYCkTnRDHudGVYb7ofBwYxSrGbepLaXXwMH3dtVWaA1wd3kmF2uZymN3FJm",
  "key5": "y33fJVkgqMSzbKHazWmv2WA1x3BnRnpGZtgNZF1HxciZJTfE9SZT9B5UTHd3DPGKVHHqeXn2gcG5dtR4M8zgXKp",
  "key6": "38S8VhYSSJdHmqrk4QHbWYDhxTEse3xn9vwMQoPuEknbCeaL8fsETeZQfJZbQNNY8ELQprn3Q2cH77kH8bDCXb6a",
  "key7": "62vrShskHjSWKTSg6Sw1jfbnV6AgXzCFqFwGZa3AFUq17u2TbvYZdYtbwJbFN6AF9xJyuYk9KkYJfQxREP1qQdNq",
  "key8": "ddzTkoyRUcRf1mkrN3SuNtEXZHjic1mFZN6PEhjuyuez43Ktu9gpiQgQy8Mr2BmUmx9KKrRJSGExXRBiNHFhxR3",
  "key9": "41PnEGKuLGtJX3v1YT1ZPj2sokDU7AzqEBPaDSUs5AQ3iRyBNb423Uxx7KW8rYKM6ekhwqfdSZJBvzdLkq6YM3Rs",
  "key10": "SgWyQLfiupMhBjD141YLwTHxPxSzitJbgcYtHdGvsd1bdcRdQdV6wheDwT3umwycVqx3fnxWm33ZVUh9nX4Mcjn",
  "key11": "qniNsfpsdaeXm8WQDF2HBjk4hmdqKEvn9JxM1dJAZycp6CKVaNAJNWZKMetmyPvpmn2ZWePqnWELyS4QmUVteXU",
  "key12": "5GECSzm7K3NNaPJfMPJHBTUkns6npByrQnWizsDxYvXAv22VZrU4dGYaMBmNuXu3scensH4goUWnsS3NCn5iqZ1m",
  "key13": "X5tTsZuxcQtt3RmdHu2TeWiQoMm9dULKoDDzm3f8NiRpb63hwJhADytuPKTHknneyrXu1AM4toASLMKRQTazKMT",
  "key14": "3HfwB4tPJAyBvsuzUzXm21bSBJeAm4cGPye2WdDXE6B5x1cG8fwHn8XwUKA9GQYU4qxZ7vLv5mnaFijKMprjodXj",
  "key15": "3CVDXnSg4So5WpSCH62DPPFUViAs9ce1ptmaqCJvhreYvhRjsAeXgMM2bZKZWUSt7sncX8naEEE3wJDrMRRjGck8",
  "key16": "3oYqu6KMfrFGgcZTbiWvba14qnsx9pX4Lg2nd8nTmzk5b8BL6Hc5L1KNBMSXut8oSBVj73iR92vRzoWsmW3Z6rqq",
  "key17": "hZ37DwrrjC6WGH7S5DxhH1Ws2eKALPVhN5aUm18CxV8xKHSbPxxddeUMF36pLwGPgFYr1DueVWBWkdUymzHyfYR",
  "key18": "2VbV7RtdhVST9A1VLPqDYtcTQNsVSB2wCvh4KXCC9r47XxAJAzRei3Xo326aayGBbEZn1u5shv3qsjsxiiGMBNJp",
  "key19": "3StCJ3cgWtDHwZ4PtK5GncMLfnJetYArmNkswAXFZKm2WLn6eutouNqdt3gknMfCShRyDzY1EJZinUkoYuUDLiJr",
  "key20": "3RGmZQAqkXbXgKPJyfmaLbiwBj93o9QRr59RbWbp5bTidZtmzQR9tHT2UoLZWyw7JvncBAMLTsnHtQayZYzDXTWU",
  "key21": "CSNeh4mz142erDp7U15qHG79eYrLhs2c2rhqYzqEgQFJmsGoTv57YVQiCh6ojwvKsGHgWfbxxXfVYakf6xZSjfQ",
  "key22": "41AdtCct8YKXhdcrqsRJ5GTc1gfk5zGZB3AetYR79Fi1e65MQmn512gYjG3tMPQ4EHc8WHHnm2yHqBvASqz5pqNb",
  "key23": "2yiRLhthQM2rpZ56Ao6osyNFZmDELDkaNL777xDPRjBLM7abJaJR9N2KQq1pHT52gPUo8tjsu72vGPMcydf3fZn",
  "key24": "xC6KETjyb85n3BDfwBXZmTifefJYr5V5rX9ryFqwDn2r4HUcB83tLUfyK7TZyqYHUzvkb9VtnJ4fGdVQeuYEPJ5",
  "key25": "3Y7nWyrvuYZ78GgrJs7YAcDaTwGchCvKpazBaiXFmKoDbSKCBjrfGMVQCotgXc4tqmaDY9njEyAUdVVYKsmZBw1R",
  "key26": "4yf8MwUM99vcj4mkQzhr7L9p9cnuKRhxDFYeEoAniU9X5y3LpiKrRbM7Qn7AyVWmhbkU6YZ8U61roUWfEqPBP93q",
  "key27": "3QZQ4cMfZGHSM5J8LD9vYhktxtYHp5FThWA8KhXi195Wm8VJF3qxxCddMvmfVfnYxhziXUkCoZrrxtp1JG25kGJu",
  "key28": "3yNL61t9AuW1VLyPxMo1wgJSvh23DGuEUJGuYuG6pj8hSfSsFUrSwUnQu8rduvxrQmPj4JD63soQyusmoZrbz8j5",
  "key29": "3cKqc2CvmLyDCiEQeJYiW5jCYjEqqGopEhAcooRZ6cKfgQ33kyhoK25Zwb6J75zWfXfKzYGZw2N6QhmRwk7vZrPj",
  "key30": "4JyDK4KUeCMKrJMfUYY2DamTsi4Nb2abvzncxgeRYoY5wZMeL7UaPHTmmsdjNLDoXoSBaSNhvJ8naVvj1dFja6Us",
  "key31": "4MNtqDqEKq3Ay1iH3GPiAgbU1hpAPnYUuNXCeWs9tEojYtHBzCqFfvmJtt9JFJw7pAMtTfFzQHw8R4Q2uFcyXB3x",
  "key32": "5ZKcuiVNvtaHaZcQL6dx7LkVRpjt6wUxGTbH5eV6TUEs5ZDTcofezZNfZXzW9y6n26LcT4oS25saTyDNZ1475Lny",
  "key33": "4t7Lsv1eh4RY8auxudNxNaokjVbZXfn4is86FHRsdU8yCxcRqcPg756MADQcpebF7aYJS2P6hq32HydB7Yk1byXx",
  "key34": "fuUVPYXKE5GE3dzTZzS8nXBRfK6DB42EVuYcLFDH6wt7u6EDSpCmfpRCkEbMCwU9tVQmEgAp6QGwk1kbE7BCGfg",
  "key35": "3Y1ktnqzmGG2aviRvLjyEYJNkAShYdtbnRoe8wMnT6JWZHrbYct3qPY2jfPo7uz54hxoPz9WaZTxarqxzwV2KQZ4",
  "key36": "24JpVTXhND8EBSCwyqE5vKtaP1iHG7bLwTNQiF8HSMy6QQhYy8RxDGvinFfCj68ZJminduz9bZQdbDyB5UUBTnvg",
  "key37": "2eGjgmys4XZ9B6yHqGF2MBqHGK1twWmSjZT9Fia2f7HFrWcxjEg16X4gA81ccXoqgVqM3AB4L7CK9mPcgLA19Qhm",
  "key38": "4PbrYPLGLcnPso2wyYmmDPpmQ3fP7zFAzR3USRjJAh7r2f99ADbkWX4NBKAT11kZfzomBAhui6hkpruiJcEm5U5X",
  "key39": "YAkQZTzEHupft3M1C2tCBpFaSpkwtWWZxvLKGGtBX4DYUYFSG7pfsYG6mJF7L8THxZjLjZTNvT75yzZ6mQT1vAD",
  "key40": "5ZnoHxuhDGinxcJyntNB8y87DRBjmUaMcQSWWy6dW89FqJpaJRJaPQTjCvyJa32TFncVWYgAE94BWpV5gbsxJgZx",
  "key41": "3kakmEQWpdag6PuM4Q5TzTCmnVSpjmzWkJNB3aG3girrPmf8jUPkVqEzP9eyeGeMrc63iJjfzTqaDRGHTwFjY7Sf",
  "key42": "5xwstaYitx3HrFz3vykUjRMsQ2KN9TgfvxzZ3rmeoRY4efZQZ3dTW2xWwbvfLX41sTDCeXRDPLCvU4CgVJNvnc89",
  "key43": "NPwsR1kV8rbtTErCxkMEpPA2cGnhEzgJojUTarVupwov6wyBxGGQrhCHbb7WvykBQuYeG6ScFwRtWKV3c3EBbeL",
  "key44": "3P1yWwKM2Yqod2F8jw9ZMxk8wkyTExDBTtopjhtmeDpf8sYiqFDuweMkEJDxtFis3JUUXNunAQxZGfgx4FZDNWvN",
  "key45": "44ZUZ4Az3dz49K2ub25qKdh7zGzMntzD7rgA4CacgicxaETrRdkUPdBJtyBUU2Jag2V1HC5hAps8h2hbqEzNWbpi",
  "key46": "5woyqsAGGAQay5vJSmeBCYuTwPJXTGuafUBD9aFe7WK3UFr8dwgBkx5K2DdYJwkhPLhxqKwcCej4iYBrUjES1sgN",
  "key47": "4ycSRPNumaiZ5eSDfYV3UrVGRzE5KWGrK2nfwxpQX7YWTky6eHfa2uadBEkXqUJkNQdPjYDWPrA9Tvf3EoX6n1j4",
  "key48": "4nV31Wi4qsriJCmEu4eyf4WSTkGwfdr5bcXgRBhkESkH695qdwnd8Zg9hxrq66EazKuNedGEh35Yw8AT3aJPXqsY",
  "key49": "zTsTmqSvw2boAqBcRTB5XyrdGCbH8fpnTXD8kGgJdncpRnePVRBtspf8vhUnzWas6aArZm8D64W3eJvSgWRw9Hn"
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
