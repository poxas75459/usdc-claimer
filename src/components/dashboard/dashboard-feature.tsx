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
    "3yJBFsJaXSuVcRVCV3Su6osRR1YKM92WRQvgPDwucbCFZMQoYnCUfUcPQYQSUb7kaT1bXVrrnfxJsEtqWk1busRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rKd54Cp7kCfkzBQSYvi4KpwZpi3WZpQ7BCm1rHhVF66Y1HnNqokrE6vjRUMKV8SKFr5WrmekY9uhA7yCjPneLKS",
  "key1": "FQksAWnTJ4m64xDakgQA2iu8eHtLwmcNjrxotq7JM2JT8V9csKBFLmD2ujJ4sVt73iSiKaMj6SCfC36wJ6su9Mh",
  "key2": "4FBo7aK4XnuMCwDHx6m8hG99B3DGWaEgAL4J63rrsZvBNPFrmMyP7MJDGv4nfXTXzwVw71cg96z2yQVYDPcFgsDk",
  "key3": "3xuitku62NhQ76eSuof8xw3CsiWwoSMCTH8RfmoBc9hvPiL5WVvT82hAqUNziBL5tX5x36JKaNNNskoPWjnKhN74",
  "key4": "2jZkMLtyWP75WbmyS2u9Latq8uf3kLU12bc1uv3451HkUFBkF1J4zSugeVSajxZj3JWw8VSRXuv1LQy67K7rZFyZ",
  "key5": "gWUYR3HwB8bdB1jPhA4BMQhQuJWPC12f3ZkauERnrDTDLFCBFcQKmUD9sjUQwR87PA36RaMarVt5vBiCpqEqRai",
  "key6": "2NAeuGdAdaS7jHBm22BdRKKJYj3z3yPzDjvhgteBnLPNd6XYQKxmHNdAXwGniM8YGX5vHMg8neu11rGWgdtukBCT",
  "key7": "5kuvN8Rb8ZtCaCKj8TciNdzhGyABcQ4M6vomdy44E5t33ZbhvTesEoxrrMye7TgG8dFb9Fm6e7eDcdetVbATtDJf",
  "key8": "3d9oUvD5X5dEyksQB84kpz1B1c9cbkKJ3KY2QijVSyPSn4MoDnp5YRUhvGzS12XKCUjHSgYXXwmnhYvP9hCvB55C",
  "key9": "5bXQUE5fSX3EaVrr5nyL1QVToRXBS8aAQuBWquakKHAsexNSDXxX6Q6DnwaWEuKCsrTfzRLHvsZft4Ynqc42GGr8",
  "key10": "4kotttzXyVyuNe6cW7ddxEF5y58a61gKPEN4fDJxGmJu3XPDMYTWF5KFBfQmRrPMGF56GammAsifzFUwQa7CUG3p",
  "key11": "2pFanESRE8rsmXVSvCK4Q1SvqQSt9pFupmpVHkeXcEJ45uSCv8fnLrqGHbFqjBpWRvr2B2z1HDSLkogCC2igLXp",
  "key12": "5hk9jUgiAcHZFyFbhvRJnqFc56gYXeTWVspUaLFx1oVz4sQF4ESFBS4GCt5UgUU7rrpSVS2qEgdhioTYDdFZZZkh",
  "key13": "4mBb9PsbuDfJYfEEhpKQsHnDHWpfBU55tdoDc3ProGZ7718FN8TEE1sRoQirWhtCNtYbuMWmxmLm2TYXiAHqU5xB",
  "key14": "3oM4A7Ht72wtiMbyH2dSATZjQxXj76nrqSi6ZoW1kJ1sVP7Nu9Wzm9TTXpQCqghhoUvjs1GKhTh8moEHCPswCnHr",
  "key15": "4n8ZTsP4jHB5NYkmWCe51ALzh2d11H6uPQ9e8jYNGNYpJbZfPiuispAX3qYU3VXe6ijABeZu4AhDZaJ1bXsLAvh2",
  "key16": "3g4QGFr8eR8f2Pg6s2VZ4wqPgWmxgSAWv2TZbBFc2YCVqQJuwmvrHjUqRoTgBh64cZy377Vm9nuYpz5B3Jh4TNs9",
  "key17": "4RkhmLBWCyxjgkjzNQkcXfmW6LBG76E6E4pSvRwKfjAWhSBhfHuyo3cTpxy53Y51EWDdG92fkAXvnU6rx5QaGPzF",
  "key18": "3WZbVhx44AGuaQWur2SJ9LSTesXJha14WsCdArSwretwNpwzT7yZwbFrswvfWV9CD5J3Sc4oabwfzUP9HSr1Uzyv",
  "key19": "5aC4GxR53CUuhfrBTmSQ6wihZhi7qfU6dBLzQvbvJh1vyFPqHttX2k8udvgauLkbvkXbWGLes38ANT7zfGno4RDt",
  "key20": "Sny4jfPPAHK2Lv8EAG7LkJmgsEwpa791RL1C6jVPwfFUt8WJk7giyTcUFEiPpmGrTY3KnBXTeyp6dzNthCGWfHN",
  "key21": "2XfwvtFZ33SgSyNJ9m1u7F9rQFG9VL23ggfWgbqDSMquyKK2Nt59HkYncFEurnRESN4Luz9UiDQtdYiZCteHW46e",
  "key22": "3p5Hm516LvKrKofjcQ9EVnSoagsk7sMp6LR39FzJt99djEDmxDMPG8mYd6ASWWL9PbvSuznHXTVEKzz7YiRU8o91",
  "key23": "4eEAxWqFrFxGMi6jzDkB7knpwQJNRALG1VP8UoEojcqFiHv3xYSneGM2RD56ytJQJzwTH6AuQ8MPwA5u7nPtQgTR",
  "key24": "GPyDaUatKKatyXysxkQragHJS5uCKtTfePUq3hXyLnMX5q8gYWPbRL2ibEzrdkGVGPNbzy2XpmsGCVbsnx1hFzE",
  "key25": "4PcHaXB87Dg9jnsVJRSMt6LMpQdVBB81t5TFVENr8YNH91RAwxheNLUSoUj73WLJcWNED2GLisbUAoerUrGGDXo6",
  "key26": "5oXPfB5qvyGzhWkk746SgduiFGaMDEYQEBcEPxjoLgDbaUYVWNP4dAb6iGe1RXuXfVH4C5ayR1HLadtKqeWDLjFM",
  "key27": "3B2qxRWpfxeh4Jo9aFdfxm2ftbf9rdd4iB8eBHSRepRuttWFpd3BnU8Di9AkvF41Dj3pfNfGeKmZjnZRACPut8HS",
  "key28": "5HB9qhDpjnwbhYRstQA3pnSUEAgAxLH1s9BBqBQ2xLnapC77MLAVJT5nY6LwXXge68e8Mkf5NHAKHFh1i1jqmeek",
  "key29": "3dPJQgz1z7rdsGWWdxSr9RGhpgyv3KJ4FpMiDfpPYeYMCdkTwx97vEso2ZuPW1PSw5ZackVnWFww6Ck8FQeMzLNm",
  "key30": "3bZgT1nm8829npmRobMjfbsVkf5wefDNVBgQAcGJtBLmYRaDXPACGudviZ4J6yRzQbAHm4Jmk6q3AUA7cPxhpZuX",
  "key31": "3B3muvuajXTya1dLCZNtjVGWdgE2D4hLdiW7XBg4wjMyFAWAWcfzQ3fg8LMtECvUkk6LuVb3RYEP63qZtGFs8Wyp",
  "key32": "4SHxkoBaSbxuU2iDSJNwn862ZnBbYDKLF1WwM26vWMzYzXnMAgBKdcmTZPUeDTb7TVt9o6zFy33JqPkHtKKoVZzQ",
  "key33": "5zs7B8hDHyqf1FW6k1ExzuWqqBsTJMuEjwqv1iZr9aqraow2XrXZgC1LqrvzLmFGnmKrHfxbG6cYFoQXMbizi47x",
  "key34": "2KoBQN5M2JVKPphCQQUpztLDcPwHipvmBX3wYv9iUJ1cy6az8riHzyG7zK1ZkrvyqG2co8PcUiu4jLAkvHAwXNHK",
  "key35": "3Ng4WA1fd3yfJfJsBUNRvjCepBnydPAjEMK8pgxij3Nc4hVGXMDtM7RYnmaJX5mDUdPZWzisEH81ZUBbAE3qXVVj",
  "key36": "2YjEs1WNejxiTpSCtJyTgPTbNJGw25oRGnmxKB6kU3tfyZPq8q8ASVWieXLKJgNVRNn5jidK4XBYXcRiuTrmZEWM"
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
