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
    "3H89geNT9Nr3G4LxuDErWctGUJbPLJEJ3nY2rff15TFiwfCZNDQYyZ7AcPGB3pKmch5frdebYeVeqThVf2DUzsmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "373Y9oe6RK5mWW7oGaqtVaBTAD5mAQiN8NnFYJDixzMYmHLr5MTCRjCHFwnKw1MyC5vhvwjNrz8dQfHNq3Y6x9NB",
  "key1": "44Au4cnw3VT3GDUMJicM5yZWyULqyYoBUBZKyYxbSXwzPf98yWhV7hMtKB2pbQMNniUJ5xDrCcvxbvFHUFfaxno8",
  "key2": "ssoLBwuucSwwUpcKVW73wBVTWSVfx85utqdnxTmHhWHDQDegmAofvCKZqEATwjUfXVJ45trNQhykqWNzxcxFGkq",
  "key3": "NBJk9wfHrmkFNfwN8zhDbjPy22b9kVU4uTmxoxDZEfsxBcQM5a1MhTZ1HjLxuxZgKpysCHewsjJSvWowtVuidsr",
  "key4": "3Npcomv3HTQ6s3FE36jDJmC5LHWs5UmYgdWmhBoRnVWzfa5cmUS8QQoP7byAwwvNZ1fVJ5EQqCmkhAqxsL6wbFz5",
  "key5": "t7RtK2hSo3F1kRUYcyQaCyidRH7TyutzpkArfh2YsaPiuZynru3wggf9Kn1yj5LGZ47aVpTcVdWEkR5KpuMbo2p",
  "key6": "oxvQV4cc9HsJ2S5NfoJkTpaS638dkUhqiUePPdyagd5i57JZdMpMoLXXBqGx7GdfgehrHKTv1RH7CjMYQfLbcMH",
  "key7": "2vaf3pJNjeYBmHvAVf4NAHsVYnsHpL6XwmcYr1VvQiBLofnBv8naimfUjoMF1zRcUH4dyebz6b3gBs13HWNbJSpc",
  "key8": "4etESbD1zGoragETaGmfL4jBipwpPCgv7ZVhdkA2UwoKeQyP3jdpgVD49BdWsRdVi1Z7gXyjKr8UsvQyAhkkz2g9",
  "key9": "UcUuraRKD1BVNgKyT2wsdLeZm8gRSNzKwWDMGGJEJueWWKm1yAn1drvb7t69WJgmVNbSuV9hqCUxKgBEvyGz3x4",
  "key10": "4YmSWhU72zhhe5aMtgUUUrszZb7YofYNd1BowGVmHUKqWyWKox7ucD5VcJm3f3xDUykdPErpm56ye83ttqPxaNEy",
  "key11": "2BjiDRadmzMiU6nH8zdfNE9U9TfTviTgCMQ1zQm7DAti39yWVVD75Y2NT5w6oet6JW1GFVVM7wajmjGVkzoUNisr",
  "key12": "MtdX4rF92a65RStV5ho1n1Z4EbMAEHhQELJKL7bJwddiSE4UohtWXhEbJQvLc2Wk7v92KBtL4Yp2G5GxKi6x5Xu",
  "key13": "2aNrEzNKKQ1f8mQafaqFLnJhm1Sb8ZDzEwcJNk1gF3HNyttHFdnENpybAPcZmLbd5RfUL69kjY8es4bcqnEayCUd",
  "key14": "2dTMd4HjWycEuJNxBjTVdfTb6FvpYE9LBaLH1WkkNQF4Biiw9Z9P7uafVnvm4hsUwg8taiJufHSftozbs5d2L3bE",
  "key15": "27g6QkqQwehjnhCwtzuZ5RZ14Xk28HKi1d9cVGghmQCu9fLyetCVCLEbJMdhvFgU2EvVKXV3f3ZABfYeG6ZrY4Mb",
  "key16": "4nskhLTvQj3jaTqvy3xPrRM6fd7i7C1Yx58SwhJZFeURKagZTSTBghYZPKkaQnQ4NQ767nKuqvbLZE4V8y7Zu8Fu",
  "key17": "5sKtxpaXGGWNCdJdNZqimppkR9vVedL9VLkynNtQFqGi5RbGjEAoNM5igdjciDyV8TzoidA3WJjBcKyfCdHeHE6N",
  "key18": "3fNuAiTpHSS23ApePyTir4UWKRb2AbuaRLq3ixEqxgqstvVUUrgGULth6sNP6Mod8BUrypdq5VEui6qF2dVEUhDb",
  "key19": "65TMFb5kgxdFfLkgPtVzbhg6tuRR9mywJKw5ueRwJeBnr17nj3GDZfNTJd97SNrDM4xtdWf6pNvpW9gVhDhh9e1k",
  "key20": "nnQBeUG7xXaJTb7UQjLTSYtrbefpVqrm48hrtWPC9LE38MqoNLv1cfhFdvprLoBnJPqtPyBzzQpJ96bwJttRWpt",
  "key21": "2mkLsDdRQJ71aYtzXYo5evVW2DHRk8j27PJaFVj91THhjPkASNXEfTCHpzNfxt5yzap2LTSfAV8DiNTyEBk59Jse",
  "key22": "5H265v5TNxN98ZAf5aDCjpg9vWrssREeBcs87aJkjjhXPFKwAeC5YQiwpsv6qZ9DmXa57gor2PkfebGAcGeu1DZe",
  "key23": "36mokPWjSUrd7sRqnJ4J3LksHbXGpuqYDipmjnKrQPeXAudHcSgjDApCLNoKc4FmcGibQT9otJzDyqMNQ6Q9bsqp",
  "key24": "zULuKaCzRzdd8gjXdg1SV6B1dRCWH1jdjSDDKQS2QcrHwVuVX1XfMurN9G3477qq5nDNYomaefM6PjrZEz7Md3B",
  "key25": "4KfqHzRrS3FQAbK7DhttqUvhifKvNXQvhqvVDMQvhcJS9arEa4WtiNBS7ZcLpeaCxfJCXTMyzARC4kVwaVrKoc83",
  "key26": "LiRGDf3oofQwPJZPVzvZyDZthFUvLStviZkHLmBRSRN18tes8fng1izZuTPFJtNHnpzYXNmKUVTZmoXA4Y8rtmD",
  "key27": "3MMQcyR5Fa6akawT2jz5GbDHGwyAcNujxRPfsVgLZ5S6Q8NpYdFa7gjiZY7uhJhL9fNxk4rrtK11wqhEipiqWsyn",
  "key28": "cSLU2ciX6ncshTozFW9USZERxYH4279pp19n1tiie6FNM24tfBsoe6VvJuUVyHu57QvXEC4cvxKGVfLoucU3m8k",
  "key29": "657BUtGnWjC3exygaEF1tPGeLknE7ydGbg9WhLPg9LmJ611EmUD1qUfeoKJkvyJiyRrUNbVES84DfsJ46HEodPCT",
  "key30": "34rxQNHNMBYeTE2HSWZuPLZQrVDeefPvxJ5bb9XuoKiqQPzRjSqFNiQcbBq5SQn36MwbgvuvP51MCmJ1xEE8PFZe",
  "key31": "4yR5a1jC6gSuGra8gupFik1Yr7Z5T8Hz3B9NXN2YniY63knYG8GtfubtCre4yCbw7aLcj4FJKRMNY4imKt8mFhyz",
  "key32": "2XGU1bPidvc55BoUzmTHVDPrGeS4gJWcKyaJUFuEwf8xmm8HsoeLMKcm7eU2Kx1NfAAWSHEw3aa9M4mdCwdVZ2Rh"
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
