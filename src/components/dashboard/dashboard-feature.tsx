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
    "2RudjH3Ef2aRiu2pCz7FiVXCPQTEdBn4QpMLu4wdcGvhPXj2eRCDdDAMHZThNm8b5KFTwDM4H8UaMji2A7yuWZG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZZt29rTTiLYVPUFZzZMWsXLCc3TyzSNFyxBhXRdTnR2eYYU4cpwbn4Kr8Eu16m5XjnxzGAJKY5psJChPoJK7MCC",
  "key1": "4PbcMq3Lm8dteEs5biUhES7UpwySwhH6VNQGtvppjCF3eUn2n4DYrHbSCfuMDufh47XRYdoS3YZwqQgMk7beTM7U",
  "key2": "jHBrrU4qzE3fvhiVgAqGqwqUDNuneeJoFpdH48D52Td31fwpd79fXigu8JF9sCpWpfkwFnqkiH5H7npRiz3B8yP",
  "key3": "dLtcyaTsKvB7Q6JEjhdebXX8N2RreMrkrptZ7c4X51J95wCiFH55FYQDYcpo1jXeNoWUtFmfvg13vq2VJeA4vds",
  "key4": "5k3k84t2Jzr7jSaiyBAqwHNkmGRRExc16CnNrawbKH7pSSy59w1xSfdXyH2cVjZZoqvF13jZS1zj3Bp5SWsLu829",
  "key5": "62ajmM9kWLmh2BSFubevYSRKPMFX5UmkA2Gi7ghBDpfuMYfZSgePkSTVGda41RKFape75k3Z8ct5zDZs2b1hJF1X",
  "key6": "4rvX9WFvZK1qrGK8H36bwTak8EYnG4HK3pBxUutQZZ3GwNwEGqn53SB8JhnXwSJfcUie9en5E6Q2tdfiBpKrMLkE",
  "key7": "9QQZvHuJNF1uzBCw8E7ZtJcrjSzL6tNJXwKU1p9QV8fmwadU6jDMopN5Cq1MrgexF9SfWcmnRHzfjRTfYxM3VzJ",
  "key8": "eLH6Xpx3Hoep5S6xyAJkt7LJVs75Ajme6R78A7YvpqRmFribWzsZAVbfSa11XTfYktujjdSnbUsF2RvvZ7eXei8",
  "key9": "3o35GxudHaKe8MmeLHJ3LGcJUBcZtb2SvPDoFMurAfN89s3rZ2nc9rQLHeMYJV2UbyHWoAMdUdSGQGAhRB59oY4w",
  "key10": "3fqktRUAXG8qwNeNtvLnTK48Faqtnssr3TC8gzMUU8bM4CA5XKV45sFmxhXeZmZcMbh4nNeiyxQTt3oNgFCMR5uk",
  "key11": "kgK4DLp6gbPKDdCRsfCnrusfy7m8aSVaeQnv9nN7zRSssBuA6jTfzzxyQZ2xXnBgaQ5Qimf8SqrooTymeZGtdqg",
  "key12": "2ofSXT5LBze6tDUmbhoD8ddvrHFovHXxt1te1bC1Wo56FFNarfKLdbkfyuhTszZts5KSaNx4pMCCnz9tkkSB9Yhr",
  "key13": "9Gz4oV6NoCzuu6LLedvLaeTzun4yFoXiEJJ6GwxV8FTdAALq9BZCGVmnszWj4V8ZbNBkHUgymviK3onbMTtycAG",
  "key14": "uRFxWR2oNPqnpziNauJzPn37esxHg2chRjLoKyxt2JS3R7FRsz3RzWS5w7zijX1aivACEpr7hfBwGeHQoiTgnpr",
  "key15": "2cjiQmTj1WqyYop1DyAy89TiZgGQtcqjhdv1RBQP7adJpLCFLtT1JG55SN4AoKH83Kipp8ZHQf714RSz4WS8fxR3",
  "key16": "2MenC7HJKR8vHWZnjCuTTaRD59Tqox6CedLN2eLQxwNV9TvBrFUvcoyVJRc4KNL2CapcFRTEw1qQAcAKvqsFpNfP",
  "key17": "2eHE2TuN9eiet66h1nEuv1GDkN7ExCWrK8ww6a76wGroJeCEYxzpyqbTCnoYs6qj6kyM4AcLJVqZSVTXgP15ZYbM",
  "key18": "4NJyyFwDxrmTEsLXqH2jcPuqeJXevSzuG9hwHKY8WoLn19yoXP2H6FvPueV4gzer6LtuQZJTNXxnMLtLyJCJEs4X",
  "key19": "2iXu5AZaWZC32V7GfoF3qkqP9472sWvzZndDcFaSWnTmxSPL2EaifjvjM4GZPHLmnYGdh382ZgAPbFzfmjbPd4XU",
  "key20": "43hdNyaLiv13343PZhn8hKE4CSBLgayQxv8MmUKvrMigc2FhzD14J7bZ77Ke47v8FQVpCNdymK89Sr741M7jP6DP",
  "key21": "5qvcXhemuhaaQE5FWug4nosFnEcaDXj7YTKFePfdzpADzdG6V52FV9W7ayGJv3RqBFNR2MbS5hjJE5ifxgL6JW1g",
  "key22": "4xm7LrFeTz4TQyZQPsCjYyzL8PUgUfSZw3arn2a8sMrypXFMJ8cm688pjijNVxHnZZDBsrK2zwMKYuWGNCCVxX3b",
  "key23": "4iguYYwzbKZdzcGueXmBN26FYaRPxFt46o3CcLHnQsrJ4B7UU12jN3CyUJpuNNFkxpa6LiN5PfXpfdFejUn91c5G",
  "key24": "2NjDaWbve69WxE3Zy6b35irKqUQkrqiSanqkAbFaojQm1C86juXetEHzB7yMCGFJ2tQ1aKEvM54W5NyJV8C3E7Ts",
  "key25": "66VQ8HM9B8ciRMF14jS5JCoU52sFGVF9betLvQmRsApiKRnk4EppmTe7VgdTCgrKbFPt28wdbECHmCUbwcBYCGyX",
  "key26": "56m6iuadd5Cyg9YwaEV1CaDtw6B4XZAc5dTK81usjGxRntNu3NkrXPewyC1kXfuxgQBeMEQeEGEQkT6zPU61RQS9",
  "key27": "2t1iuuq44oxzHzGCdKFY6n3KxyxioSUXUCH9G8ajL5Vc9Lmfp2ZvTyh25n5dLs5p6KrcpzWkTomingFNcVx5SJkB",
  "key28": "436dVSYmAuEgkQqBNRWg42GfoyU1yw3xs8n2eEjnNtoUPTRFYnmPArjMzEPoquztQne2CtPF8jZfZ56DaMhK4Mkf",
  "key29": "5syUfQpxeJfFGXxb6NyyHsZLGtgfJ45NYHQGVQr3nrpJkQFK6wZT6CmeocZSAk4aXH6Y65zVwYDZcC99KKjtxJWv",
  "key30": "5MhbMq7mTEGzPBxv42FVaEU4woBdeperFTYVPJWq5MBq3gR8SEjYJT3xc7rCE7THpR45Xbwae6CQqG4dGQtH7Tin",
  "key31": "5oZX2yYJsZc5ojPnvkh5C3SCoGF4u4Z4p8GtdV5xmyW8Eq6yCtodSdBMTYuuUoRWaUFpjpGByaVFxg1A4mMfFfgM",
  "key32": "2V5XVAxLcP9SBKKaY8WfDRjTW3drYV1DX6rz4spEDUCvzQuX7fHMQR9mSvSZYRgeGpgKgBZZB4amcXAwdsv6McUx",
  "key33": "2TKJcfhAABVBg6b6DsrauA1noXF68GhXLZeusHqgYffbK7AqGyed12DXBUqCAgMiq1hUypiJ5hqqhrCu23zET7hS",
  "key34": "3uyzpU3rB7vEULGZjuDGbxkW1rC7a2o7Eo3k9p4FqWWYp3SdZ8VoGKeWnbx6pnNLXM8uL3QnwPAgPH1mFKGD4YbR",
  "key35": "47Lcmn3aPHAJssBrE1h7Com6dydGzkSSc4Ypo3y21XYweUHgA8qr14x7gFHS7QT2T5i1myZtBXG4m75zrNfB8ybh",
  "key36": "2YNdfonBNqfptUvwjp8Rbcs22WntqCMXLeNEZDCwdXkoTgDpN2fUgviqm2JL9LVAY4NjnqpkcJFLoiXABBFuLffs",
  "key37": "5LJvC3aKf2vYDkuKzFyyPNy5SKjBKkvRJqSFnBh2H4nH3B2isBQ6997xB79DxQzDoHaaBQufoq9tCqBFcoUGx2W2",
  "key38": "2KZHj1ckTqCcXVUKmJr4s9UYRfG6GXLvbvLEZ1kcUU1HbRuRLSgkRgVTX6DbLhdZUCPKx86fq15RmP199wk7urXv",
  "key39": "3Bk64oRdUrZfGH7De9D4CsVRCwb94maZBiD1hYXT2CvebKRGc7tF9dh3JJfQJF5R1uWAnhKhtbVRHVJafCCVp2Ys",
  "key40": "54TYsdnFDFckmbkTSunHP6vtjk8fFvVkpL2D6wWYyhRKny3cQsAsBsew5z4E9KcwXitwjAVLnXQ6Wfg1A1AXV8Ha",
  "key41": "2ZHBosHAKnBkw697Yrb8Z1v7ga3wG6KTdKK6rucouLpJJgmTA6dQZdqqNTT6Xd5tjR74VKppcmvNtNKY37kC7hFj",
  "key42": "SyPq8ucyyxmmCs4iwdBq3hpbvsUUsNmr6TBqnggL27gZUKpShNHyRiZGhpMnvFjdWihxGKNVPVV8vj8RJ4nncWq"
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
