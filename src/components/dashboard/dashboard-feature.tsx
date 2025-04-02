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
    "4JEADakAzz1SH79XXh5qtbmqxCyVz3Sh8T16FUTpqHm12fow4Btd3NBoPhaUsSZQ5BbEyNfMe3mMDHF1Xo3WBfi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uoW9aMQCf7V7UYWqQYugAYiJW22vgn5XEg7TEXn5aN3kZyvZSCQZaCGfdfgDSEVTj4C5YLDQ4ZZNot7V6b1SBZ",
  "key1": "UBPi2z5kYYpJLCP98dMuRQJ1yAtEPppe5hr51j9gpHMWQwDoedwqM8HQncpTr66RXV1xb9RhTzf2iAoxfPBJRav",
  "key2": "b6HyqozFyyYK8x22W2KMbf9tC8LP7d3jkDGSLjEZVxBMQ399TiQ2ETgG1mDfrQ6nE9JAVz9kGN4ECnohiLs4tcu",
  "key3": "aB987Pt4LJCLjKuQn2qUdv5WjrfMUod9kUMQQkk8dvvFxzTZ987HoB7qtxk3XTAVii1rksFhriyfboyXSV3UiJj",
  "key4": "4iym42xgv6kQ2R69mAzLy1g5KSrSqiHq2cpi3MMMnnPfzx6UAJEG9j5RYtQ1rux6Fz3Jji785Q24gBsnV5zCG1mY",
  "key5": "2VreRdQTFzk6ac57itDnJ8jzkW43xFQ877S1vhckMro1ymc1e2Xg9ZH3DDfXbHpQV2xxJBXcEGWpZNuhMTkNHsCg",
  "key6": "3tEEBGyvQ9F2uLdnmtvc5Zh66fbYGVqRjsWCKHkdeBmaCero6MKfkFGNchd8bD5P8HBmuaJkXZzXiNfcT5Q2M1br",
  "key7": "3CQCQrcUeubUEHDmF9bL4vzPWZpG16pyjWH3dKfczKSATmuYrR1JX9uBv6AKDWVxiVovZxVwH7yikjMP4FR5B2bW",
  "key8": "4P6NDFT4qcCJ1Vw2KLwLSHmhGTJGokkLfVHjwqoEUZkgnE2QM5wu1Q6tiz4frVBLgWZE7EnqcVFKDCGTq2m5KV8X",
  "key9": "473YwyveLiEPuWxdoKD7PWfanxvvLqcPS1H9SLuYoi9yMoa9cwatPJKFTjPoqkFRwpU31n9gYvQ3C6cc6Z1xgvbM",
  "key10": "55xVcnhRCFqFFzLLjZgtoRdxdtPx5GhQNTYvZiPyW42bSJUUpcaipxGoXDQitDFS7NqRRXMR9u26bdcYyjeBXrEX",
  "key11": "DQR1qGEXkHCKvkh1RCyec2rzCg3QVfPiprWHEJ35KKfVubTEH7vZp84gJrwHoERR9LujCBvv9yB1XgMCUdAuv2Q",
  "key12": "5U9GvNjZFc7wH5RU2jmcpxt5yrAP4YdycoXTWrbhoaU5m3QFj11o9t3zYcMDs9Cjvpt7MFnocirU9bcSJmGZa2xf",
  "key13": "5v4Gw5wYrBNk3a4g9yoZLCtkwMDFxCc6wJVg2TTKuvU7ZuqoKfrJVTKFKLVpC1DPmeVbUfXXqnS6wSi8nJNYmgzM",
  "key14": "wAQmaCe4RtPdGtEvULr67kSxYeVWCN4QiXgrUpNy55WFH6vbiJ9M13hfHSRMyvDpmU9jhVih6cwguSVzUu4uD6Z",
  "key15": "2UeA9hvJ54HFiQhngZzkwNQSoJ9671TuMSC2h3MpGvzGCoHsfPou3pYKBV8SvqVZX4JVujga4zWn2RPv8xRaYpTp",
  "key16": "2RypcRSLeJScU9und5wkHW9gPyqNcgz34aaJELXK3jxRdtmiivAMunNYKonMH6xiEy3LLENWADPrecy4W42QrMEU",
  "key17": "5XHsMNiNxyWXmeryCh98fR37KA49uqse2jhz2hNoPTzuC1ojWqiZ5E8ocxomZLcMWhynt87fKnhzNyB1Qhwx7Pg4",
  "key18": "4cWBoWw5LmhugX8dbBRLH1UsidGw3AcSeoP6J4RRoz4NMw5jCwnB9fjiPXdE2gaeaE8Y3sdRqY9Y5iiBVqTTjuAW",
  "key19": "2zRxKymUsKUZ9Xbn2xDaDx435GhSThniWQjCxFh7dv1LbJZ9yvDkqcDWJ2TRqq9J5kqEm8Ek5Yj1p9rBhYBbiAMc",
  "key20": "5eeqe5dVv6NQMdBghLfTQmUaGxHRgXeG66udjHwUpFzKQ787yfJDXC5dWjcgp5aBPZFbJSiKYv7CMihTFGnSZ5R8",
  "key21": "4kZ45tkqofF6LHvYY8qJaY93C4k4CL4REZENULND2JH94B45NKV9RUKxwsAVjCuCnsJSPNbapiiQujPuizHMNTQg",
  "key22": "P17Y3wEyaCG4Mww3C4JzQLEuLiqLzPrqV2RuG8HMkbQt9c1971VR3haqYQCXX9s7VRUFMkvfVxGbhfq3cuKQbiG",
  "key23": "3DUbiHSeWDCh36W1p635pCucugbzAMUQJB62BVbEKyXqqcQ8x62a4o3iX5QcPpc1x7T1WHq5ntDEZoSiZmev9SAN",
  "key24": "4ZX1BQZPpA5HnrpuEfMe7TmnoyN9BpbdZtMBDy6QNEDVq1qVJEdxTfHgy56wCESjSMk8jvJggAVDcTT7x7rKGh27",
  "key25": "2WnZEL3CFQJA9iBaDimUhQP7tw4uuHHvfNNKVG2WUdoyhfwC4cWXTkkpB7tgGYTYA9MPnXGZfwApmMSw2J7yjAAU",
  "key26": "2GVVEFNyXgvtf8Rk3czvCf9yHnQTQ18XGY6kW6qPgPDFDpFWkggSwjnRUQ3WwrmyxsEwcvm36ZL8hdhnCrMhm9gW",
  "key27": "uhnLwmyzDBw4dgp7yjBGD9GyEDFYLr9XBXgZmT7n98ZvSPf3uEjtVyJU3eHckELhdhHsLUEfKuyKzMNVr1WNDnN",
  "key28": "kURjEqqoxTPHo3DaQ1wt2AAbZCYs5ZLYKtP8jkuBALhvU8uobyZLRU645sDfuP1XqyqzjMZCmHpXyyVAdwyiqTF",
  "key29": "4KUQZ5VPiWCFvh4SqYf5H91tCExaNCFiEAHZJGjCE738becSYjVwVQn8DGSctBfraxF99PZXHCNmFRafC9BvKQDo",
  "key30": "2boJBarePrTKMyUkBcjeNmEn7J1gnU35kzRrJSaFtut9zwfNsFrkKXdvAk8qQ9mvfHpfhemcRQAMiLTfp3sW1dqM",
  "key31": "4dQsSF8ew1QrW6ziPGjvJqbPzWnLEWudimPTmNwJdUbE8f1ixrBAKRCEia74oeyxHgUpJNzdZjnSrmYc5JjkaeXD",
  "key32": "4rQUPdTb6V9pKLnQSwx6gYPqnqcUAbnG9QvwW8ksQeMMKKasZmm1RuABpcqrj3G6bFaotzGuKnJbV4RVjFBTuTXs",
  "key33": "3mSurtVDtTHQJvvyXZk5LFEizXY1GG9KcpaXhUUj9Q8HCYDLVwqCfNyYXUxxF9UK9pKvDnUAtnaNbcgdkPjZ6xXg",
  "key34": "35BD3VXN6W5rHvtwX9L5T1Bo23LBhQY59FrGVtwQrEoKRQUehjeAAU8fhks6Ps2h345q9RzPiq1v7G63Zuoi6dth",
  "key35": "4FjxaYwonsDzsyiScdiaxmPNjQnnJKG2bjf4k6sHX4dTcMSQxQxiDSG4ArR9PDeMLNZLvrd2AZNCiZVwquiGene7",
  "key36": "58TvqPqemJyQcJPVPfZemmcmuuQq8EYqCFQ5ThKED84ou8rr31FPAa2YhSuTfRJaWdUnAdg55vNvAWgJa1CBLM6w",
  "key37": "3KtrUWchEZjp8WcUCKxt3fc7vtzpTFeqEPSR5U3tPFSVWx7PXYbYZNL4p1K5d6uUr16D1zfCwzv9wMgPbvrtu34L",
  "key38": "3uGgcGtZ5RMUuAMn7AqyrwX7wtKzooZHPwHkJ1BfT9g6jzfRg9gxGENKQ4JFiExdYx5cYS15kaX8HgY5tV31Rt9f",
  "key39": "3GbEMqFsMjiCaCqFyy4DvtwDp6uZL97eGDiQfzfWDJ7PzbUhzeZkSvbhvUQp7jiMFU4uTWA2kjzZNWoWAbYCkf7T",
  "key40": "4zVSkQKRATEFpw9HDjg57GtQgRyCEFEf2KDiTU68b5MP7guZfgoiH4UYS8Vm4XcHe8kDZ1YU6Ntk8QAUpaciKDJd"
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
