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
    "2c2gvUBNJKtgnTxU6y2m1wfMum31VsQ41scCT6RDDhJEWDwNZA459nD1Y1VboYcmH3rDkjb3EG1fRYTdG7iUMTR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WyhgsKyRSAn75nTQSpekQBJFQsgmh2bi3rEeeky2K9V8miRw4Ac4SiAcTLxq6ZxqUxT3YdcUmbzQSQeLu3LJTzF",
  "key1": "67PMj1zSAqpVnLTUBXRVeZrjcA7gm7KjZnxb3Lku3BGEft762jjcW9L5Dph9bqFSso1d84PE5owMniWYmSGnASsS",
  "key2": "2ZxmPPngUZBrMeSJkGuVx3jeQdXb9eZ1dce7wvrtTxnk2jnwhFK8nggUCMHcHmfrtGGChtK9YkpVHfJAYCv79rzi",
  "key3": "2hYXWA32JzEq5Xr1tqAVxNvmqhmSnVUyhqXEJh5CvnsYKsmULHVumGGxcGbZ8CchCTc74LU3Bmf9AESHkgRrDPPV",
  "key4": "4ZYqXHtKm5z196wqEUKSqzSeUrLa6d55i1mJjsMrbseumwVqe4jGzYxvxErBrg8GRrdZHRw15BcKL8NmtzxNY7QH",
  "key5": "3t7rnjPmseJXh71x7psG4c8mNw6cKsRj9MwaLyqqkLD3dRQnJqHXr6pqoiXtjKJNtoZToVU2B69QtrfVSUdAXB1o",
  "key6": "5HL8KbcV85ug6xfLzBXhCVjmDp6HMRqnkVwEodYQfCbgqMGcrAYSZopUysvHLxJtoL2xL4yYWSVzbqnKcB6d4UnB",
  "key7": "4uuzM6SRnjqZULxVX6JUPJsmmM8geJcQQKFf2xx7e8PZjyegXZkgUEQEYKCXcAd7ZB5yCDJkGg4R4FxWAwWCL57X",
  "key8": "434tnYz5We4hmPxna8HDNTeVWPmNdHVH6Q5N3GhHiynfpGTqJmJzjnijipZ3mqceCeFfeW8xpX32mhddNayMN7zJ",
  "key9": "4DP8RkKF2JmZE49H7rrsmQM331yg6XXWD2zZe2goFiqq2Fo8SY1QLy5DKxoz2RPZLAoNGaft7DipmHRs97v3xZg6",
  "key10": "3fcUer2eaWKTtoYe9p1EpNjs57m7XR5vEzyNtQaZaPyqkuwfrAFHdiWqbxWX18FVyuKW5ifNAky3D89rgxM4y7qZ",
  "key11": "4wmomV1uCdn1XE9cDrQAvfoU1Wz8vVUgBExCDdj5pauX82SHYzLgAY4hrtCHEjnUdLQazcxXbvXJhtFwVPmfQX9c",
  "key12": "33Jz9VmLgh48yY5iRWP2kUSCFtjbB7tJ2y46A3CFAQkFEmFqznzFjXhQ8TqWbiMr66ubsYTHKNkQjRXUK3CAejKu",
  "key13": "3Aj23joJ48bEbYExoB9gUsaLnGmouMLS8mj1hVmTfFRejp1g5NtwYZHP7StKPcaiVnCQRXranxRnNm7YrvZKSJbQ",
  "key14": "4mqQvcJcyg7eh6Q2jNC2B1EYNNLKsXFC85YCVYPn4J2adie6X8zSDurYEw3sXEmVnjj5RV6cjvW1ZjanD2MM8U9H",
  "key15": "bLggtDCHmYruXoaoUkn3GWceoHy94roqjC86QpiiVnnwe1XANYs9FrsnVcK9wyzLNWFz4tyWiKhey4VfrWDYnGH",
  "key16": "2Qsgy7vDiZhfotUsSmKfoZhMJh3koRP9xszdPVMbvXM5XrRKWZ4knGMLhjNAFyR6BMFryX4EcpLNjNr7313VSswD",
  "key17": "5XE9SYwBm5kYW1aFCp6216d4bZsjPW3yzn728xeYcqSXoCwUCXpBZan4mtYSkpEUdkL52PimGosst9yoWoNpNojV",
  "key18": "4eeZgxTnU9YyQoVjKKAStA4ZhQkVzKTWYzwVVqfxVoL53sKZg7A9Rh8oH5Vm4sJ6stCrFnkLRFQgGEh9XkGEmoQN",
  "key19": "59TaUQ9mCyk4NwCzSu3X5zVXfmpZkFkbFt167ESshjskw73PZoKft6BuLW6wN4Uu3yVECr8GEsDzgc7dfcWdN9tC",
  "key20": "3x5x4b6YMTG4EUqG5BTxshFBDMAnQ3MDQfLHpD3U757933zAZsswx2jM6ofarRGo1tcjmrhksNpyJejpbaGt1K7i",
  "key21": "49S4nSWrteRpFzXAhcEViRYaB8TFsWVTL3ZuiLgdLrfy6uCWsoooFF6Ms2b3CZbmD5sW8Sp4heyYkcjinqWii5RN",
  "key22": "iQurZW5s97fSAUp7NuwMyudRG87JUMo6CNAtDqoCvdgR7zS9ycwFkDy2RkuipyXBdtPTJiLEddhQegjzxPAtk6V",
  "key23": "5fZxLeqeKKrWKVWbBCFqhbmWSuPostYKqqmnvriAonzomTUYKu7aeZuuLVMFiKnnNswKrxcU4ggwEhSH6ZSziuW6",
  "key24": "4THdtBBNowfoczmBK5m77imFMPjw87DCEhhs3cny7HA2eRQAXcSLzPZ1vkuREfebX6i19hFtVV6z9Uu3phWAKtgh"
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
