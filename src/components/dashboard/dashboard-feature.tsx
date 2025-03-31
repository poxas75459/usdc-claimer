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
    "wi5KLjnTMbhi4Kb95YXtyeCoX7BDPjjFSTwtUZ9o7NDvEkz3q5BsuPTBfjDQo5sTazfDzLWsYeFJzCizYvXHYbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JrUjiZCh9h2sj669FoCG5UFGeAZE1obX66UNb7kcyAjZ4sSNrxiTg3anWRvVKNDgUXAcQLTLsq9ENyRPVWp13gW",
  "key1": "5qvrURyB71g4XVWVeWgEDyN75BfLjuEJvDLjjZ4QtHjCLX4sn7311dR7j1VSwgJigw8yt1CPNFmz6xPXEJMmSsPs",
  "key2": "3c9nmtBMR6p4PyCarxavYY6kScCL4V3CpoTZEf3SESCaHDVW5bPMVLkcoBQeFpg1vWTHJPXitKy4LW8p7undZYgP",
  "key3": "5LLPGA4NdMv7sYdk9BX5NV3pJHwHtSit33p5LAadpZdgqm5ZztgB1DFcwR9a4zykReAW3ppLSayQLbiXv6ronFz5",
  "key4": "1MduUwLzKYTpYjY1rWyrCgg6MDiapRitzLC2pv4AC9pNELkv8qpN6iQ8n9uWebQcXSQLAmRy1CTzuSoTMnLJ43f",
  "key5": "5bMnGtEdJPHJCCfsUjdkJAwc7TfHJszZBWNwiAVbSGazeuYswtvdGnZ6MyBFv3jG1Nw7SgxG2bQx1FmJHAJfN9mM",
  "key6": "2NgfFTTXRSAbHdj9Z8jHEPJppGLRcQaWuSjhAz6XjB5jeMuxzT7PnzddkG7rUtGALTure8oGAu4RhhkwEYSARSvq",
  "key7": "mup8PrHuCexrbmkRVQVTnUp3ifqAstB4ALdBoUpEyE5tRKvPLDAWR6en4rWR42FvXKFwJYwQ5MBDjWD47ucw4Q5",
  "key8": "5m5H1gcAWHVoDTpTs51PowgG47Nq921ptskrAUBDeT8f7mhsFevNy1gY2djbxxGvbDgNTXC2kFbnTFX8VA13HKc8",
  "key9": "5GtfgWHANLYQUkrXFF3g4wMjexpeqygqcVC5td3Rd9aThKx6p2pybHFVGsuSgEG2cpVV88166SpvTbTAGWYkM3EE",
  "key10": "WLHfbahMnGdSkBnQJjeHqHcqEGh68Yq6ykBJTF2WtJHjQyG77U5NoSP6JwPyMJKShn9CjJJUTznzLESUS8JPujv",
  "key11": "4YBQG1tp5vudeWP5oWzhT4cypbLGRiRNKPk6eovCBGd5b74vmHD97w1C2QS9zRz6FimDzmXHTboPVjYNeLzq5D5r",
  "key12": "GkWjStDRfm8iPgkWtwNcNoynqt7uD2Cyq8PGFv3qBqwPchh5naEuXo8CimMumeqNWZcjdHowVwHuY4X8haEuRgK",
  "key13": "4v5inmz7qJtkjBm7NGAqhceyAiUKJLS7Vwa5bTV1qkLGRitpJfXojTCz8G6XxiD9hgqCgEqjAhSYuyYnKYvWpkSX",
  "key14": "1vu2ut8Zn1vxNXHjhxnYmuRd6DdyhS7e1uDZHwsrZ6JfizDp7AJxaq5bWpgiUfqjRvdo62tsz57QutnMTK874XC",
  "key15": "4jh8YE3cyca2mzLKd1mcQjXAxjZxZjr2PjWBYgNsUMEGBPrhEDk2DpmQuu25ZZm4Fnj86bPu4RvhRT8u3nNrEjbN",
  "key16": "pidjhrmBgAZc7KBv4yUeibBWYUQmaa5WPrxArxf9PJVzCbE4qZrN3dgMxD2pAAcgVDLiihfLypK5Y6UzFFPWbVN",
  "key17": "4WKYJkXXqXj5BRh8mCuPiNpdHZ4Q3jkoP4oo6JA3ZkeL7aAokyRXWeq5UVR12zrwbyqAfSQxNzvF29GFWeiYg9bj",
  "key18": "PGv4KKpkYmeBrM11reYyFK3hLqTxb8AJvRLx7CYega2ZNAAaxUx8gXEicWfJZ6kkve8PyEbhqLetK1s2XmYB5vi",
  "key19": "5neyE81cUbQuw2qxendbeG1B7CxS8cHNG7wBWGSsZboC9rm9j6hSKHzLa5otngYnsKduRmjxFXKsLewtXUpDYmYi",
  "key20": "5w9uqJgBdciHwCUK7hBHbz1AhBLVu9UgNnr3QLzwJtS5W3D1nLx5q5b9rb63r3kLALTu3c7WXQPsKW7qetzhu7WQ",
  "key21": "2enoe8ZCh7oUPWWnc3ggbtPSFBjb7yNFr8L2BYtAprR3sm8qm5sDLxQEGxpS2eVPFrFDrrE5189a89HyZrvoja7C",
  "key22": "5GDBGfey2T7ZFJC3v1XicGWg712GFxdvd2EKrJkDhpdtKRCadHXFwouCV8vRVAC3xkRxZDfzL57rbzC9ZhPPUcgs",
  "key23": "8petGuKyNxdTumy8jaa8UD3gXH6RNDWPQ8vrxgibWq2k1cc2f9DCZKbnjRFR5fDZyMqedLi2qbFkX9bC53YZYKQ",
  "key24": "2onv4AZgDVG49znk5HZCY3qvvzaGGiftiZKWiFdhttn6stXLmBGpU7Cxk4UpPnwML4gDa9i238wCoaBUFk85u92w",
  "key25": "5WqRzkZGtw79G4r8YqJqTXErHEMoUZUSvzDGeMV9S5JUXw2mdCNuBzgw4m3AE5qiQeuGSvwppZ5w5y6bYsXSvZrM",
  "key26": "25SCR6XZz2fdLFuiL5oQBnzzTbbT3pVQ4UMYXmPKJqEFVatcHwvFU6LQFLhewHiudCq56QppwyhpXdaXZSWwZ7kY",
  "key27": "4QMDCwprMp3T4KHFAhyLjtfkbGJgFYvX2YjwuFc8uADoT8pS28XEkBDAmS7jJdz4yePNe5iYJAEyJN34BVhNDWRb",
  "key28": "4mZPN789xPSTTpqsMJqGQZs3kbyunAWWqHU7k6NTqYvZdqUU9KqKPAQse8oq5CxnhHEQz6fJapUiLN4KCPe98C7H",
  "key29": "3yNtgNqHfurgfEDAztFgQKY2vHqmx8X6E9jHPpbGQz4tgCsZ3W51kB9tVbvsforyL4KjKjiffZusuAL58igsoJiz",
  "key30": "mtGH3HiYVSsiAMjYtsY7EEymxe2KihSzcbXmMCQJWCxeHk9Vuv1Ghy64Z9fbJL2ERgMMZskjd16qrqyT8n7dVMT",
  "key31": "nbNqN54Aq7pseSunL1zdBZCrHSN296aze5eaSuF3dQYqTzHaGtbPjuyWRAxynu6wnrmq7uhgLyZMLfH2Ewst9pj",
  "key32": "x5hjrnXmZzrob65edg2dKY6rbpAJpyHVBuujR3oHGZJJuqAKC2neuDRwY86cmP67f7G2U2FEUL1jjS7LJGVDpS3",
  "key33": "4t7VWKArbSbkSpXgkf4gzdWvjtqegmBuyewhDAL3RHuCxBS953CMEPCgvc7Aq87wkumDwaroAr8x9xFntbf7k9MA",
  "key34": "4WaVm53bmGdRqyUPgdUntLS4ZiKiahKVfC4wtde1qftWvM8JZiUzogMcATohomUtyYaUx4whcm6AfJguHiGkVWjr",
  "key35": "3dKbCv1hNEebDZhF9ow2YCCcSMQ9Q1V6PgSEPTUkvcpPEm5akfSxEPCEcqqKidQxZniigzSWvRjmhV3yP2Joq5C9",
  "key36": "3xTAWHykUZMTWsxRmgzx5fEpVm2asLQ59h7WVgMYZi56a95G6YeTk6UxsmBYC8gkZ4oX5X71Ywd3meyHNsuFfpWu",
  "key37": "4fGfMm3eqqXirnGrCiD2hPXHqaZMLKta6TAwWVwATNjMv8y7C79Gd7WZth2XqLZmLuRdcdeWSwr2Ti6s1ZYgWvjX"
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
