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
    "4dUo8nKpvBUXvueVmAMJAgpTnjagmw2k93vTcnTQ61qjWG7NkeTs6VdGkSBKiTcuUGm8UBs7BvczS6onMzXS8XE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37qbXbdBicJVkX1pg551jrzbGcyUDGuk8kn1FnvtojmTTu4WY7pvV4Aa6PrwAZ6KKerKyViLoW3smcfckWWy1bh6",
  "key1": "3sF37bL4RJtg8QuJNQTK7LVcoqRy67Vd1c19udq9b2oTsVjNRWT3dPSQz45pwGEXbwqdk9qNQR6ey3an3FfYoxJ8",
  "key2": "5ptpbzQxXMmgk3rqwsQbkoCB4LzmNRqYUsAQFVAoCCLsNuaawkUBWb3nnpxVqz4xmRJFzgYmu5W878EiDmpTQBh8",
  "key3": "3vVrbR38haQW13XdvR2iVAj1C3T11DBvxkQwesqRknnKpf3ep743ZCWue8qNEgmYzoJZk2m3qea5L3xrSGDe6FXC",
  "key4": "PCUWHwvBdY354VKeaJr4a4yT7bujJCWbH9DQmpFC2oRBfU6AhLpLeqahftuHRWMSi6CS63AxhGjtEn4ihttkx4C",
  "key5": "3d94H7SjnfUFwij6PDWQCzzpCRxMkT6cuhheUoXznmpeXtoH5DkcPZiBJ39BBAwUFfFzmT9JUDbGb6gsoWcf7v6f",
  "key6": "Qi54hKHoai1EihHxY1krR3sLwXVNYmoqL2GPFxZpn8AqHyQjc9WqXZ2p7A9cMGUQGKMxbM3JtTBazX4cBMJqro3",
  "key7": "3mqNAohxuMfRoCSzWpZX72dLJJ9Qgmeww8UUZRbugJFQR3CrAXVkh7Afwt6QU5AVvezYfDfxMFxvMiow92Aaqo3e",
  "key8": "4EGJ331ZfJsE33DXXsdn3BeQ3ef7S7TyM3dNgbZe4abbrC5rDU77MpF4kCqVhkVWuVaWT44MLSRnbUgjpPkZCotj",
  "key9": "4AM9K1udzaMj8tkt5syWebmLyBbQsaHRmDmooRWfg4jhAx1JTzihjMWLtxgXdESWUwLHqftBnWNkV25HfYxCMbLy",
  "key10": "4pLciRZCTD6hQMC79jUA6PWNJfTjjfJZvz8VkYHEkCxPrvgLsnSEF7SD8VxJ2ugQoUR4yCrL8NJctBTJfc67TB3m",
  "key11": "3Rb7ndJpuZE623x4usrMQC5qXwWLEMN2CoHdN1kRPVviLJxJx6wWFLwcEp6BvCUbcSHYbRtKYXESs6uLsmTQTNcC",
  "key12": "2fuukM6kY7PNFFgHWaLC28jXLDp1c5TZkPrejRyXbNUFNjVCwY8U3fFm8fXNphFuumcGwcgt9GHakYNNKrbrsxwd",
  "key13": "ZvixRWqAeyyQPzVai3o3Nn3jE7c7XsHFYJaWcq7w9TgQZCJFCi82fMXm1kQtFmuKzcUM5vvzYdGbvHKf8hfeGpg",
  "key14": "3QDB5Pr4btUUnriPJjJF6X1RUK2QcBy3joRMTA38N9vgpYqSLyFxQpdVnAcULi4AqHLdeEnazyb84Y6qwwuRa9eJ",
  "key15": "4qMzUFpyPruh1z5XrrU1oXrF4ppt6RmgDTB7XqfTCvr873wKcP1eUfLMwa99HXzf5KFU9T9XfkKsgFBHnhsv2rY4",
  "key16": "5DG4EHLFVHm4gkLt6XoFKfJXcuM5JwUgHw4FduGMC3mrCcpRgUVuBw42fbn1rSS3q5WRBnqrbpUbvpFQbxygPYUd",
  "key17": "3dhinNwMVJ5DXQGGpB3Szz2eHRVAbXR2YGUa5QvUK8L7Szde5hHRB1vXBwHW6ZcaMJ3nwq5F4WWuA6gYBkundZrN",
  "key18": "61D6QjGx297yW5dt4LiXBzYN9eEoJwWTTEkkEF3acL47EkCjCWdvmppSVKDmDW4beNf8TqX1qtjvtfngvjMUetr2",
  "key19": "2eoMcdfxP7hoZJhoQNeXAgEQcNAh6K9awWatvEYpHa1hnPQvs8NdNc54f25GP3DXo5RKKq63rC4ebPEtxfzCXzBp",
  "key20": "5MUEhpbmkEvjU5Js7kYQPNR1obbn87qHUmaP9XcoDuZgXNi7YYanptVXkvEe69cBSLbwKt7SEQ8U4YNy9izLJdDb",
  "key21": "2tBw5GvphkvFYTZ6xsadouTumhvEkPkUqBgULkF7Ro2mKs65JRatx8YNPECyohu1gxxjpr2MZZA6uZXNGcXBfGTk",
  "key22": "3TmWtoRFNauGnop9jzpJyQhAieLCBUhxUM3fpcxktmS9i7LoJTjWmbiBBtsQfqABY6mFbRMd2JJYH4QhnSbrPUyF",
  "key23": "54LGamVDZHyX7TXrGAowfaQXzBMrWTuY3jo6gzZqtXXgLNXvyvDLfeoNMMYTWuM3bjmKbXEMXeVgBLNjA4Q6cM7g",
  "key24": "5rJq38LuUasXvss9toktmWPbrx9qMZDCJGnLGmVqpb241TzaQFgmdQFKYLrBb6WGNw2dNNNR5s5Ve3HeAbTjPMnr",
  "key25": "5R59zKGqnmQ1av1eMEW6uJN82dJsDoYGM6D2SDFB264LEuZT1XcLv6U4nnmgB9hfA2oq64EwHjhuggas2LijV5Sc",
  "key26": "a4MwP5qehYBByyZto2S6yPWDZV4dz4S1ucBABE22LFywWWd9R63tQnXqw2ZrtfQ9pV6TuSmhy2dFgzzpLH3WspV",
  "key27": "4Ki9CKzPpwEYqWbLHchiDoFUtM7AK4S43ahS8oVSeATixpjK73UxDvdvSDn3t4DXdSQujwBLdzMELvzWD4csQjtt",
  "key28": "2SPabW7RkAtuezmV2zjNpF3q1H5HyxreaheiWAZ7tufB2nr9XEJJW93U2MWd9weBW9Av44gkfSXCSxAd7tLJ69J3",
  "key29": "283Mu6QFmxgAxCd7hGt9Kj2uGoxN4Au97BtVzUr56zDa6TtnNXxwXh16SJArzaiGhex7t3S4GTABTH6xuQt678ft",
  "key30": "26y4UyJt254dtrcorK5dmsdkhS1qBAswRLRMWQwJqSQFnJmqux1Hwra4zjDJ1YsJ1zmzyKMMu7GkwStUUx2hcRXS",
  "key31": "5VdkQsbCwu3J1bHnT9nRwpNRX1G4NdViN8aVfqCM6ed7PPnTuK5PkNNuakPy7fKcDG5K6MvhBLJX6cw6Aw79UUXz",
  "key32": "49qnDEp32xyf7gvhonNwAYRuppFXH7vkcDzwyvE6PgqUi5AWKefL25rNcQxM4xNxnwvBHP3c3CvGFvdBVnMePy7q",
  "key33": "k7WLtp8dfAJeFb6QboNPvdqVgMm4GDPJ7gzXspeoY97czyanbDmht3JZKVHkUhWmxRzEmhK1DS5UdGnd4pnaF3y",
  "key34": "54qnneT4sioAVBSR46QZD66VwgqyjGCeoMriT5bvK6eYcBbGDzmmLqPDbALB4cyg77v1eMgYLVpvSXoCMtnv3WUa",
  "key35": "2AzHUg85T8xKy5tgzB9tuMK75dRz7aKFUy2m5GNqwT7h3XqftLtAaHNcMirf4EmpA5Yx6Hhg3A6XeAGobSDdd8kQ",
  "key36": "61bYLpzhEa5WD9K4bU8oMvNw7akJcqSMwKf2koQPft2KLdNk7y4TG8b3b1bqCc6DVG8fgrihEGUK1KDiE1DXpg7t",
  "key37": "EPNUe9Xx58pmi8Bj139Hu27mSTxVkbc2VkM9zx9URBrSZbwr4bT8XziRphBnxw8jkGHxoBsqDfizLqLAbmagVGu",
  "key38": "3mtgFNgQ7V53fpJgGNrkkxazgus5VEKmpD1q2vZkpvaCTmP8UMgbp5H1j2xvqAcrYkpSv5mTiHyaE6TpXQHvrQDn",
  "key39": "2Aq5vWGz1TP7bwPu1LyBKuaUNj123bpQvv3BuQYPkF25YxAvQ2RqYoFbWLRtvowVZi1AZX7MtuXA2fAyzbYVpCYr",
  "key40": "3zDRzhCiffj8M36sUmZ6VNMjQafXyD994Hx7scc9AzKp5Fb4Y6hSFUhZChooVk861TJ2bRrvFZeXmHxCytqM8kCu",
  "key41": "5kgB9QCcwwAahsmYZAbzP7mbPeapggS44KpAW9VaVMFVhcAPYVDyuaapAY6dfid5duJu1Ub3MzaDTCjChbWQs34k",
  "key42": "2sgKE2QdBXZutZG3QsqUxJNNWijVrtk3EztFejFCG4BgQMi7cjQRqurHL5vJQ6jNRTkRm3oDxYSX1Ki6vY8nGDMg",
  "key43": "5RE68QF8XFZVvaRxTY5vn39tuP9tbfMR5RUBdyp4yGXJpD3Doyy4CPsxhsbou5bZmsz4Bzt1XGZzghcHipA887SG",
  "key44": "2UmWE2uEg8TvGxUwoG3CbbuTZcYMGKVUtrWsqwydEGpQkw5eQsT4qF1vymrr4UjSNqw1kNeJp38Jeuiz7XYpuNMq"
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
