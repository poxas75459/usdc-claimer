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
    "4c4wfWR1T4AoVZ824AnPTtRHHPofR7cgRVV3g7ci4yiZMfTBPgHjEaMQbmgVcSiYozyto48DsdySAMGAfPYhhQ9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63RTZzXmTvM84ZwrvT5186TE4uzLhYn2KJKEF3kzeCkCzzyPBXCpfHubdeJzkoewMVDf8LLKmA3G9xwXCB2qoeQu",
  "key1": "ZB8CWDJYs3mXAEwddT8dG8wFd8b2Yzk2fPHBRkQtVoR45vM1rVXqLr1hmATr7Uu5CJfKgKUEM4iGgAKiQkK7zUZ",
  "key2": "2VMNHRcEWL4dJqhLcYdLFFDtLGa6rnV8cxnQ3HQWDpMvPJGUy5puf2sYmS8xwTCqkNvCf81oLsyPS7UQ4VeMPaC1",
  "key3": "4nnTSyGjcNx2sWc211JpZb7w4ZfzhYMdr1h6BSepRhc37L3t8Ybk27ka6TsGi6jF9eDCV6cisQwBipLc33u2RpFo",
  "key4": "2w94RBoKTbWGRv1mbsjf4EXpde8k2TCDBjeWcGn3osQucofW4Fxa15putxh5uRAEk6sX1bdDKw9rn4eTJiuwFjy4",
  "key5": "2Hj33QBBBa91nmACEBrsP3CLvzd56fDwK8xLjuJUDU5sqAaLrtMbXs7V8eGuuaRqcxsrBvDbTN9YhfYZk5f68YzY",
  "key6": "n1DEs7DZxfh9VxzNmtdE1LXjYNZgNGfFCDCBR6nj5u7wruRn5XJJ2DB7xnukzoaFipxkFXkJk5z2CyRUoZdByYZ",
  "key7": "JHTCeH6GcmuonHX4sGHu7V5kzGYBH8xcHmtoLPdXqJFUHD7NsfYtrB2X3SZazjF4233Z1V2w9STksLhC16UwSQZ",
  "key8": "2agENDwsUJoaNSuFmenGhPxTWzNKTKkrjRjmYuEh4tdkVcXu2BuQwG9zfFzbm1Lmpk2BfbAY8P67LqLz5icQeXeB",
  "key9": "s1hstunEfr8bqUa5WHhuPADgjoeLiV1cAUgjYyxHrvUiZnBTfyLuJpcCnEU5YnTHup4g2PfEZA9tX9kCR1vM6sM",
  "key10": "488Kp3KStAJoD24Y9Jx4n7VWwbuccp9mKK2eM8sBJEvB95brw8x7S7uHpGWkLdTtx1iH4wjocVJ4Sd7M1nuNEjBV",
  "key11": "5DpPVpwUhtng9FsKjkrGwy3RiuY82bhT5CFu9owMbeVDET4QtFA7YZaTTBP1vwKJwVcUee9sQxR1RmNMZpMZn7n3",
  "key12": "63g6d5M4MtpDjQ7UFqerjCwV1y7t2vLpHdKuV5zm8Ccdxfw2yhALw6AKozyKEuhHNMDFqVXw4nsVCzehmX7DXVQa",
  "key13": "5xJdhJy6HRkuL4L1SixXhs2Xx2zr36NR2JfPnGX944i62eMdV8ReoZLBmXD2yKzHYoNhUDrSiwRbJDyDLCpb2n5",
  "key14": "43LPRFQyxNqQEkJcg1nNjjoNFbjK8Ri5DZASQnzhvhbGA6uU7ABytXbaYsoqw5W5ycurqpcmnUkdGPN1brns56LW",
  "key15": "YQQMeyR2hCfucDfNPGcEPKzCrjSbjT5udJJ78GzSmG6rYoo9gzDZbHirhL6dWbW3oymYBc4GvXa5k6NZ3v9LSL8",
  "key16": "3QafnZATN4JbgsoKS3YqUGHdAU85Xsrri6sWSsq5Dhn3SeKqJKn7XPA5bMwvCvFRR9De2p1oPg4CR5CL5pWegMcs",
  "key17": "22WgREXtUV2dkw8r5neByoKvgGTbk44b96fuFKrX93uNQMwy5oiFH3pGPGeMBoVvqywgcD9sShSZkH6CYQHMG3rb",
  "key18": "5QkNwLj8n8YWKh83apPFPqDxzW549KwgWTddi6AY2xp1Xv5C6MyVM2oN3hYNMegKDbjj3JfQ88d976Ur9eG8Hz5k",
  "key19": "45VtXjqysgFuxksStzutCXLkCidYaDmfuhVtrFyQ4X74LRyJ17YNsJRQ2fJwjGzWzhtAj5CapkEsUqqXeLKBxezZ",
  "key20": "4jx29j7HuJbPAfRGsBvvg5mdJRkuKamXom62jso3CcGQ52ym82CNziBUEbNm2oEhfvofVkPAvF39buwGjHcEdHaf",
  "key21": "5vGaXqj55h6SsmMFvJeeivSf6KoXBb5XnzA9i997xaDjen4uzdDTMqQikjYoDScFzesTdawrTigKrJf7pTrWV3S",
  "key22": "svNx9fbnJvXJWrr9tHAUpNpueLKCT1hSSq5ttov6xrc2FBTddGFvuxCeCjyabhTjv1nsGVgUMF7WoxJ2nX9Yp8h",
  "key23": "4ugASYtF8EgkHNovKa1q1Vmu3Rq7AQuWooaUgcK3gfP1BuHriKhUiQhK9E1HsiEXmkJsdUpHZ6z2oiSNS3E5Zfo1",
  "key24": "55Gw64zUrudZecGvsVeqxqREoACV1EGwdctb112bSQFQKCVjx4bbTBe2RWoaRaqA2Ugx75m5mH9jSjK5kMH9Eg9w",
  "key25": "sFHuMbxYiqNkPsVQEHNN3sG5uz3dLt6gxUNZmAoxfhfuUiCVq4KaWtsWVRp6xowsFS4Z8FQ4ToV7tQqckf72mVd",
  "key26": "Fp5KEkCfauWsiruHC3dnaadTgu2RyHhjvgU1P1FJVEa9iqaPXzt3vquNRHcHuqH81axjcdzfXyrrqWWnDZHH9J4",
  "key27": "4sNWiLB9pJRtJiSTaZn5yFVEk1ftAh3YcV758YEU4RL19S75V1TWZKXBH5hVvAktCxZCTN54jmopgazVcufkrskB",
  "key28": "5y5PhXeQrDMjFUJ4WRBxeFhc9oZKcgRsNRtYNdyuLiyYfgyqBuWHfphT5kzzjk3GvdULanrVKeNRQSL79XBHtfJ7",
  "key29": "JYnsn7rWVYCBU9M6Zz45zEXksGRExAy5WpXLZECgY51nbVRo9GRZVbV8MmEBpiKj5K8y5YN2uKJN6hqaozrcTKt",
  "key30": "3J4V6NkWgygbXpKBJmHYvpFXXB6iqnTes7ctFtE5qCzxRwyvdZxXZcLA43Xam1io3KadN5274ieydm2E9DurFuay",
  "key31": "2ZpzbzKF1c9HAMqa6GygoYnTcLvCukxzBSJfZRCyqdLVBC4mWu9iMWWsQYeyKpLQwMo89sgddAZTCRCpCP5u3VFa",
  "key32": "3NWTN5vrdcTwg7g12KNkp9aXxk4y95RHMzpwgmjzJy1mdyM4RkPSj6adZEcVuBTeaCbdWwJYbMbD5uPEMFuHhVgk",
  "key33": "3Gw7qZ34Ziv7qm8c5N7r7e7qszgQxVZpBPexwwedaU4Y7zR5UgbgvvDaunHneScEvZzG6pCy9KPoUsBX21BMLBuG",
  "key34": "3UKJNSPkVP4jHd6fjCXpndWBd2miEhx3rsnkaU51dXoYu5tUZRpf1m1h2JzDfhXafWxKUZkoTurpLtX49BoCViH3"
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
