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
    "WFZvrzMX5PbHWmrhiNzgyfpikc3c4WmvAPx7n56VP2cXXfKts3e1ue9gkpj6Eber97QpumW2dxDno8XSfTE5Pz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xLddpT7QSjLixunRyakYp3ktAfGveRvgUkZ42zrZfzD8Ay4Vv4GinQ7HnvW38ZMFCYrcvfw61azM7PECnamCoDw",
  "key1": "62sbqLbGWZ64UDnimsXKh52dD7yN1HRM79JSwbNgLYbJwpgw1xHvGfvumkRsSpn2JYojHcYV2cftK6j1rnMvokwa",
  "key2": "3yKzmt6KEfW2b12xRcCTotpQaYvUxzxVZmor2sYZ45hxB28F6gakGbLx5fYS5R1MZPLjN5fkL2umgYCe8Vnfi2NL",
  "key3": "4ppqE8Z2XBahDPMNCT9eULUyctxpjGGSXWXCQLfftf1iMDX6fi8q8kCgkHndPhweq7raCCxCqZzxaUSqTDSsX67B",
  "key4": "EDAtV6DcqfSFJpP8ttQL5ScPCaGxmodm4JoaEjt6VTox3UfomHc1ackzPyibGxNYhPUeUqT87j2RobuUiQ2Bveo",
  "key5": "tF386Mppif4ZmHtkLWbWodxNtohK2nHRt2dNH9fdLPay2c4PYQu1Twdd84BpbFAb8q5XpdaqzDw2ZNkeUE5QgAQ",
  "key6": "5FapJ3BVEuhggrwAH3UZXshTHSVRPVFSd9EHdGds3wuuv1RQaxqTW8ULzbLeNVfjaDFz95rd3KNkHDG48jqv39gd",
  "key7": "3YgZKzFspGySHRCQb8zbQf5Y8VennNArNoBXvug5vbKUtVuYMYjyvTjhWhMG8Qt3i3UmGgY5GSg3mRcQmv2hnbmD",
  "key8": "2ctmue3dPwX6BWX4y9u8a2oL6zQgjMqiyfKnYqdqJUaZ7Y8BwoUrW1uks8MYq342TQE4pDvp3mnEXcCQ6fLMnaFh",
  "key9": "5PxFp48uBGVoaNECWX4QHbH6CALLt5SwHsCXPviBxML8dhH1qkbjh5ziZw2xenKZhCGaKJBwBReCuGLt1LJikbJv",
  "key10": "4KvvBdSs6GUwXRrYta9rVEJipCDcvFRE9ZrohzegeqAGxe7Xmq8QZkTTG5QwmfXaTDqc3Zvytz374qqqCskiiy13",
  "key11": "3AcnPmZrE23WPmzJqLPF8ozuMJQWpVRxPLsQmQmULYb1ipSmSb9MdHdefFYCj8qfP63xne931g3NhUQMS6EBt12f",
  "key12": "5XUvVG3WxU6nq7SLP9TwhNhcyw1AVW75JMJW6J2CLHrq5shWJXpsPuBZq12EprZfMgmU5P5mP14fkGoaoy9Tht3R",
  "key13": "CnLT3v4zf27XMLh8QpMbRoutsoj315buVhSZPNd3Vcqaa7qYo4YPoqFfB1Lqnb3qxzv1BsSeQ9t3UuVT5eG32uP",
  "key14": "3nxgqAcqVaYGEF3mcuSwp78BQhErsx5Zut9QMEM7ZWdP8Y66bMpmQLLq2WeR7Po6W9rXZq7ejD7BMUcYdD1tJnZ9",
  "key15": "27mn7V3EDTibVqEV95Tq9M21zVsiPxCzK4srT2FaRDVuuEV8jQuS61b5URLMM2yrLJ2StFcskAUPhVGCdHqkEMzE",
  "key16": "58ms9V1uQYtirKpDMHyL1F9aaKWwSgPZpSghpE89VSwTPmbxcxJtLs4Js78m8sn4nSfTroKttvMWwC2s5K6qXnpA",
  "key17": "SZoaQ2tRk4i4SknW96edrM3fvedbeBJfFVpsLef9ffoq3w2DopMhD8f8ZyUUAVAthQ5cE8WVj8mNPmcUV6E6hrY",
  "key18": "5cMnkw1Euhxtk88HNEi9x4Nd39Y7hh5rEP6QG5eRe2GeoFV4cm5j7jx8vAkqnAgCLFveq2QZRx8oZXDg5gZ1vfuU",
  "key19": "2pj5DZZncMHaEwMx2eSsfXPAqcCmSx6LEshMY4dmg3rcm9526cKG44o8teRoXaqsp2fmuP5tgJchYPH65W18BMYp",
  "key20": "qKSy2vRfm2EVcfgAJCdqwUUMAAW24gVqMMpaDAv2ED8PyTzLnRQEkYDpe6zbF1h5KgvKEtSS6YiBQsGv5EuNA6u",
  "key21": "8nF9t1sKNZmSAt3SL9nyKqQQ1hgE4CZasWJYiXefzLtTuZT4FafrjBs3Y7ZRS5fJEwNeYhHXY9ScLqWodEd1Tvw",
  "key22": "6ytwsVjx7hpxcKvUGhZrQKgXfrGFkWJKApb4PRMZ5816De4K9WTLycDUETJG8UAEJstCSGhnrpgcVeUxYB3JJ3F",
  "key23": "66gmtPgYZnoJ8RybCVsoN5GDpgSYfNnBgbmi6WPrJtiLquPqB8s3kzzusGV4zRjyjY4QB3WCKSqC6D2XVBiTTKgA",
  "key24": "2Gz9igNHezaZKG5pyM6VuKcNcezaU2FA2ArFG6fSUByB4WqvYFAxGKjWTos8F5QHDzY1f7EDdxd5FKJctXbP4QRf",
  "key25": "7Skj9UYPYNsmoBrRrk6GXmMeSQdYvksMtG5syRoFeEumN9crCcYTHnMsgFkDtCtxmNAARE7PiDLT8SoGxtS6ErJ",
  "key26": "5qov9bWbgEgpBtzYtaWSJebCYS4nPFB8tWwXAHjgY4vvPYJ7ACiJ5HRnND6HJ237Tf26NvHbfJMrvRs8N9yPoQah",
  "key27": "4z3t51PoFguaae7NWLzHLZqMsvwWbnPsHRfZ2p8U99GUZ48mXwNdVXhuC184uWTKAVpuNstyeWAKS8nmpXKYD9LQ",
  "key28": "3yauULQf6zCRijGi3AxajuZPUyWHMPMS4o3X7VuBYjJCwX6hvvK7VFn2hrtaKdGV4NCGNtkJXb9v6e98CpaCvsTg",
  "key29": "4FHmfxVYpXLiRZrQM2gn8PvUVncqyoBX4qJbM1yniwyTPdx9HKtRkNnhtN68Zj1s77ACBxi7jjpJRkxnJRrwQvcm",
  "key30": "5rrhQiSUEs8A1CDXPKWUTCAw8u2VKPKV2nUgMAmoDzwTYmoEcPCsthvhono9fEKBfakxt88DjEZeJAYqLQfnhAgZ",
  "key31": "5bkoYToafwvGXo7hBm65SkvKVvsTKq4n2rHJwEyrgPMaWo5UYLmSeH5q5gjKKEkWmxZFz1XHahBYhKUW8gmheequ",
  "key32": "3MqZQ3kpuk1kHhecGoTRLrBmFCPQhWn9XyMNPn4DffexBSqidbJqwVkQCiTbA5yrQ6edbJvym2Px4TjiqXGktLWP",
  "key33": "2usgLEQvZ7Z27qFV9L3p8oQsnN5LsL8aAr9GcQfCb78G6ryVkkoUf6s7ArE6uXG6QP7z71maCcmG2X6tW7qh8qhB",
  "key34": "5y8Whe1WtkfRjZyVymN9gzsM3DQo3eo1frDFqFFwsQqxU3MNYXqmRuKbcY485eksazqJxKKH4F4GRwrtcvvYe64o",
  "key35": "5wD3wBWvhGZ6b2EaA6cuhVVLhjfJe7ybMTHVWHYtaZUL7BqtSUrKUxBEo8bjS11CEV36u36fNYov1r1LyyXuNTcS",
  "key36": "1DijCcesSXeuJMge2XG6wpmsqkYdMqQneL2CVes7X3nbYzokRg9oFVjXS2sr3GBYN1pVLRG3n59cY5XiRte4q2a",
  "key37": "26rsgYFXePCk38W8tbiBYbkW6wRWihReimVeBuJPqVD8zLaDx9P6G7xkyskwfeiUWLASxBiWhYZDW5u3M6ZCm1dH",
  "key38": "4oVW1Wk7iCs3UZ2EBNpmQWaVYkhewELyG1x34XDhDPwoBgyFSCDSWzwPazH1pr1pEZSxg6GMD5ZQDfzbjorvAnPM",
  "key39": "4cvN4oaYh6WMcPfmM8F59j9CZ9JVaBMafnDvSXYoq93db95ov855msERvtDnAo6gV5vYe2pZ4SkJPkNhjjk9w15",
  "key40": "3Ba14bYAhsAp4CxinnG4VQibhT8V5wSSTDpMDqY4mitYu42hCeS9YzPBBwAwzqohpmg7mnZJGZCVxGz1pXXgUen2",
  "key41": "5L64hzXFxiGSx7CieVZGvTUcUW71UnJTNvLBSYQqiSHfCWNWTDaFzzz7g67hndAAC4q35ebkEJKF8H7g9Y8gk8Gj",
  "key42": "4Y1TiNzQQ2ME72N8MHkU7K1gcX7wVPqeDymyUUWUNcNbicXsidtnHiKcV7Eudx37DSXJFPLVwxiEWBCNpzxQaiLh",
  "key43": "5B9RRGxJEo8Tv8LX4bcdGfDd1xEThhzeLaDX4K8WJYaBJYMM615DtP1mo5K9CYjSZ6oAMdA31WJChD5vJssxzdMs",
  "key44": "5Y18mtYVQVQYvJt9Mkakip2eqvbBUewQKoSCGRWtSy5v6w6mZ7Lt4ENDX9uKQRocWd5v4UynGqnFrnHsknxbwNoA",
  "key45": "5sQwpJkwpcB5etfBGmQm8Lfzfriv3uLWF8WfLoX9tLsR2TmB1pVkTTb1jjsifnJkubU1dPrugQtFhDQNy6jutDZz",
  "key46": "K8B7nqETCWkE7idgbAQGyHApznN71dV8FXxEXgWddTTLrkPnWm88PU12oMgwYk9KyFr6qfJrZGomXvL592EaNDi",
  "key47": "32fw4muyqDaPqFFJunjZNWmjkotqACrP1BY1ZzMjtwCDuUjnhFUuBoUJDtQGnffbSDu1eX2EpZRzZX5KkK4U9feA"
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
