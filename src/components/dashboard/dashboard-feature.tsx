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
    "EM1fAqzpV4ocajC6mcnH26hdQNytKLZNeQLAQwaJWAcwKFGgCBfejtgKwFPuAJ5KrWLPXagPYRpkejqQBaekVtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "355WcHad7R6PYSVFjXRCgB6bFEDrpRaUVMNAe2TVdpDZaFpdaBbm86JWpcTXPCmGNEpGfKVaXCzNyqMKJvVXjyG6",
  "key1": "2VKQu7LEVwXLCcjYZP945zNW53ptnzpUEa99Bb6By5CiMCq6Wqx2DaRKEYwM8DGAsyoRoDvuy5R2XUmHziJPKDGj",
  "key2": "3jRB4AJeCdLCboEdMdNUxwG6QCbJ6qdmCP1aSDxhdrdassXusP6iEoeV58QtE6V2E9pHKaJvU2qeDaaeUxiQHBoS",
  "key3": "4oxza8j5Qh7hPVu5YY3jSCgM8jsZcTjDhC7VReXV5YAPQ5unLAyPXTvp2D1rRoXEaSgSwYJX8vpGGJN4DctVonih",
  "key4": "4ikKGCDf3THKUQo2fgZTWVRyetkvhcu9t7aEoUZhVZN12dSbd3x1N4EJH9DbacHneWAoRoaqCx3jKHENpVAtUfPr",
  "key5": "2uSaGXK7DMQAVcUbwqYJzdJsgoJ1mMvzY9anBPg9McQ2B49dPTCDhoLAsFoagChGr64RJt1MFkNtJokHaJVBHWdU",
  "key6": "4bJRnxgXkckYFwHksTvqgtXEANpEP7A4vkew8ytnH49H2cmSvVW4kc7yUEi39a3aRhenTyqqPfGfuFs4jd8Uui8p",
  "key7": "3C8bFXS3zYBwd7XP8CyKEnKER49yuVvH4H3daxgkuVL1aJMhcM4oC4f92HYpa9CwbrAM34TaGYEePrhJErFDDXsz",
  "key8": "5yHbK9WVM5GCMyNgovJivQkvkgKn3RzPsX9QJGqQzbZyrtMW2rAfHH5VR7cJWsGkk8gREhiqDkTpP7TP6Ln2aeTY",
  "key9": "58KqT8tWhMcVtFqgQi5CyY99b1fbsnKCEZNaDMXQhYuCWM73UzdvrJW1hVqxduQi3qtevmRJtcA6hMF1j8j5tNck",
  "key10": "5gEbAAKwm8KQV19boHbXKrT1wrASprUaWYdNyw24crRxsEuP5xRDe6eujin9YL9VEcFVJLLBiuRrdMKe4vTDcso8",
  "key11": "4ECDBwrUnyeB6oFzLzCbF7U6KENRppr3hAKsbxjn4H2hk2ZRrWn8Csw6L6kEngZeWiXtD9HwMvpCWHGnDN8yJM84",
  "key12": "2FTbewtooj33nPwKBfPEebkHA94SEK9yNa9bZXgQWtKF7zUS6VkJHz9KihYySsyj6NNS7FV1QUyqBc3s2uH7Vaym",
  "key13": "44J1WeyrmgZw3qa4wKW4et7Loy2hEDbQ6uWYtjsXiWuuEriXJAiqisPwd5dyh5RzmaHU7oAs89Pjc6CxUAtYqt5B",
  "key14": "MKaEbNuMiF67sBSR4JjDL3u128cwnGJiVBHXfVqTq2UiLzq5Vk6qHe5fwn9A7VEBiJDxSKSvvoTttxXaKq7SS2M",
  "key15": "4sMiBGd8tKmkvJfiPtYMCDbbszEeM5VmvMMZhd65gentkrvQ4sEHog17h16UoJEdJTbbBixAmnWAS7AzcHvTXzJ9",
  "key16": "3FDUD9B3dxnrN4WaRZd3DJKs4iuRmsaMjXfLM8LNbfXh9FjrWUPr8BG6oToYoxG9y2sUykxB44p5LRh85L8Rm5Dy",
  "key17": "3TZqy3wSBVRiKpFDraPamXf6jdA4E1Y6Awujc9YxMHs4WYv2ThqhFCRaTt8W4ivJdfnDgW8S5WNyLUcUJTc4hR3Q",
  "key18": "41ccCjviU1ity3TJkrJ8X1vbt96Tm9EsEry5fUUwNMXUxoeJeca6MG7ByUYKmo5dWjkAEscCDcKCDcS29hpyHF16",
  "key19": "61iXNPeDJM3GraPPpt1YBHkmuHrCcjfyRyWJBo9n5P3s6k4nLqTLibiA5MYS6PuiqSFFjgVsFPey4SmWmujdBH4z",
  "key20": "ASnmnTSMEAio99bMcEzoawoZ8oMZk4tvCM1MtbZQWTJNj7LCDadNjxYaCwzYXG6cHF8jH6mbFkjEUAzDtRith2F",
  "key21": "44EsGe3ymChgejdmKXcSjuVvndHFwBHgadNBGrKWX5YH8Nix5TwUDh4ieAef2i3vEyj7BfkBJeFn7S4caoYg5QEY",
  "key22": "3nx3Uo5PMJ2rkaWPVEqwXKarNvPdX9K2iF3vNNXfgaNqXcGkDFdGioC2aUCMV1fSoCMsB4TBXzs6X5M7hDNhhTKf",
  "key23": "5XuMAxvT6XgQLyuyUxWBy9f2Eoq8YG2VBQ5A8SECEmxeVzW9LPAmohEhgZMhRufw8dBnJ48UCLGJoaSSP6wBZQbc",
  "key24": "3zQbZdrz9rK7ojx585TWKiWZYZUacf9uu2BqoGzd22rF6E3gitz9UrDN9JTm1crwN8tArhkdG5zeqqLYjj8V2hPs",
  "key25": "2GpUZDjmVmRNxWxccUozQZ2WH7apAe34kFKPT5QRz48xiWUHkcwDEcwHETKp25wvXpic7GCnszgqjS1qnEvdL7HU",
  "key26": "4NfrCYJj2AAYuF1ht4RxMaDq2BSu2yDaWbVFzAqM4uBVKjLJ4xt7z4ixTbYmfar6w9Fd3z5Ax9tinp2ozwZtvKFx",
  "key27": "46xB9Y8c1iiRQjGvSJvYBdDp4XdrFwMGPLsYvQb7gGVARXq8cKvKT7UhYMawKM6JsVQzWC6h2MkYXdj9kMTnDr7m",
  "key28": "5zdt3fQc3dhUgqXPPxdqVG9bYRzvYqV8QzFQxBJyg2NaUcA7mFexLv6n3EFf6h4HvoL4KswgAcn2YRNCpGeRiMug",
  "key29": "4xSs7vAX6SrjQDyytcbT16E7ZopAHrPUoFBDr2UJcvfUg9YbbtEkJvzJDtXPGYtme6ZkWG8D1eKPddrw2pJkn9EB",
  "key30": "4tB8ZioV33t8xmCqY9T63NXsrYByibJEJCfL8G7kSGhn3uyZvns9br4dngQhSiYibUxucyrtfEbS5Gx1manVyeJH",
  "key31": "2JmHkTiUeumQtdHDuQczHwNRD2m1krqeArzqxH47DZwkwBbvWfVJngoMPRPqyiQFtSew4jw4PKPVs8ZqsuV2HuX5",
  "key32": "4WRJ3dvVH8RB8XnYWcj9k2yQN56BQPzTpqYAfQfqR6KRyqDPwiDNPbEvRbYGsj9hTU38dGSPnBoYtiDTg2yeojgT",
  "key33": "5ttsTCCDWxLDtj4K5ac7Dn7NrqhCtTjQ6Gtiq2BgySrfMqguKHVuNo9AHbQBfEbeUvVWFL1DKemi6ktKA7dgamF8",
  "key34": "3JALX36hJZUhUFgQfXHF4taB5zWu3dLokmH6CeFMyGRHeHHrJwi8oBYB3HSQPe4d1oZrHBvMAfCV1mJihpa7VJMh",
  "key35": "2wzWDBeHQ1xK1cpuhEefL9A6j1yNXs8aYQ2CD3y9Tf5SAV7tqPEa2e6kHp3cnYcnXwRzFj21szmRhSgc2fGdP8we",
  "key36": "4k6ujkYiTL4vWbi9sD6gZH8PqVPtUwEKXqCDW9VEaQh29tV8VNUHQSWUfaCpMEYVJnKYJxeGFnLLgxM8LkJEpHgM",
  "key37": "2Ux3w8sxxPNWxfDCpPLwoTe8rXSBUoCykfb2HGf9uwN4XiQzbGPur8B7Z5wZCckw7bQCweXwo4YBXdyH4Y3cjFdV",
  "key38": "42tcUJtKHpet8cNMoPzrh2tYUHgB6rxjCgbC6xH4oRxWFQcx29BwnDFUNTRacpTeJtuV3xZmTWCSng3S2L7DKZte",
  "key39": "4RheYCruti2MMHFTqFWPqFxYckzmPj8aMiQ2uyjLDxkEZEUSyqZqfb6aY6xoKtQwab4azBzvTiTWDJiS8L2YX7tZ",
  "key40": "2msyLvgCsGAHXjgKPm2vzRWPXgVP7H8EQLimgh5tZwUXDyT2HH2updLwzctcTgdzC4M4rhKZeHLyoE8GUafiaxLN",
  "key41": "QwjvCw8Chq6tgzAnJDip9G4NeC7MYuQLPLZfEpCXwL8QahnCqCTqGAHE4u1K6MX2a4TxPAczMxeERGjiSV9oN6z",
  "key42": "3Xn8g4b9UDevBkz4XEiB7gSWR7c8BiC9qYMoFt1P5EKxH1cbmZs6xQPJrJcSzBjQoKABP3HJY4NPr7UBrd2qut5N",
  "key43": "9DqfSygakza2yWqtspYPRV2szxUeGxXF1aGAxbbgrmSsnyVEXYw915bGQSz8USn6Tb9r5uwQxsPmyeF3kLFihow",
  "key44": "2AMrZfEYGKiB3vMD97UXrr4HPooVsbppCVfN63eBVSjtQRvUdRYejS9snAm644QQQGM9qDecsfG4CrDxJEnsrzhT",
  "key45": "gy5HnVDAqXUjevSSkMasTtGLEsBgjsM1H7ZPNhJyhbdayNE82SZuSLqZbLQwwvNbd2wtBJiS9vyE888EX1X3qjL",
  "key46": "4KPnztSpbsbyf39CtNbBUBJ1TYyfxP13bQ7PTphF9AguNRQ2QL7o1qSvAMqcB5ctGVRcjjSe4fb8z41ZukBZDE7D",
  "key47": "59tC1acWJqUm9zJU1m2QSQuQH2L3AsZUHRaA1GmCgs2sk2oEU4muant53QAb2X2vLDcUpoMtoEFUj8NCTyeU64js",
  "key48": "fUem58AuyK8JU5sJ6uv3iSXUGkRq8AP5NdUXdRRjFpy8atASWtauPGxaGTqkmQqKyK7i86nR66HF3pzKupBQqj3"
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
