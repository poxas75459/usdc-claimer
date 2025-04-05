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
    "cgBpoqeuhRexbeX9WVbiyEFypHQyjQyeMCLQn5JoY7weiLuuAchFSsrSuA92gpcYmRZrfZJGTf3H9Yijy3qiqSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LNtZcaXpFfrVDhmHqj6eycr3Apjs7MQLfFW3FUBNuE1hkeFtMYUv8tYyrPF5jpbVSuo1Ay2YU63eifgceCzbdrJ",
  "key1": "2QdV5eYyVXVN23SXR6UvpgCCthjQfrvcvXq841jgPCFK1oDweEKRp729uEr8uidcxQfzApppeuN8NhVPe8CWoCUA",
  "key2": "3iU7gFMC6oJDrXpEFX8a2hnmwutmeFhw2XUYTkW8CFJ7tANh6h6dDPhLPR3UEmNxDPpWyMZVbGyLJX8GranUEKiR",
  "key3": "48FHrxyq48cA6WZ3dJMtwym6ZS8jJd4zkHFCAFs7KZMxkLDoF2yq8xr3zxh4NR98Tnwi4K3aqRtiMqB2xVMjn7zR",
  "key4": "3hFmcdTsnG6iRE2Zs4rWHtmTZPKxZnmMrghCezWbtWUzZZMokCuFHfh82WeC1jFeKDZMbZ1Z1eHEffWSaHN8Sjzr",
  "key5": "5nrJyvjHd26jjouq7Xy3DRFce8c8NpqVryRz1TtBxY4f4wmWLFkAwvxQLVYAiVMjNXAVUk2gcbcjP7Uo6jmKHy4c",
  "key6": "3ha4WEh3UC1vK5PNqC4q89MUs8aN7C2LjCy9YZ4PCj215rWw77YQV43e3dXqNrHLo45X5iqLrdLVwdcemc8KFQMs",
  "key7": "5rK7HmYx7agYpe2L7QfDeUkjaemdQpt5ojnVmJBoE8Mk7WBtJKraLUekQwCgwgdapoezrddaQvV3JT7VscTRNH4u",
  "key8": "ZEC9PatM9KLsAZMFVUpQoRo4DzRK4VfVWJFj6y2Md7jgifXgGLLovr61skBLMbxEXu6hXDL3xqrKXSDSvA7MRRL",
  "key9": "wBUyZLvJfU7RJkKmZRW6yZbZbH68TBURRSamFCRFhBB4qGwwoAeYMicc9e1rP59GgcjttFPtJqkFUt4TqNHK2tn",
  "key10": "3F2Ajhpt9bvDhgEJzXZ7ffVi7T23Kj6W6iY5d4dzxiQ3EydXEdp1G2yiLL8a584y7r51wgacifgs4Bsk9RXHTTLC",
  "key11": "2WKMtWoCXZ3iisUnZuPJ6Do3Ro4kDTPctxiTStfKE8nKpyHZmwC7q6f8v7VUuedT1QmJKn764CopinBMRiasEnUy",
  "key12": "2Xz9szQMzVNL6BzDFGPvLjGzakUkxA9VxAx7x6xmNZcajK7emS5uYjEHfwU6geKvJkuY1uhCjfpuNZ1ktJBAfQMZ",
  "key13": "4YgHPmV3mFuknSaCYXUXrQ2mWk2Gdzp9FXcdDaqhDn4X1VMNAccEgfu9QfhvW2Fig6uKyJtYhmbj6FBhoVzE43Bs",
  "key14": "3wrRwkoFcuCXAsvpG5TGUpug7vk8D2kwoxJkBgS8QnhvW9fHH2GPKdj8mwc5LmSpLfnfmMp9s61rdUZrScnKnWN7",
  "key15": "3qKNEtFLtVh3vsNghPbPYg1ikqQQa8gT3fpq4dVrpdVBni49nkp2VHxYzuHGP89kNgMEm5fJ3mZ7HddphA61swUU",
  "key16": "5mfvYAfSTSjRKzDdXceE4bHxZHRt5jhpEdNmRG1n1EzwEWP6HANLzQfkbFzHWH3h7xwDgupihjneHNWs44fBcDdQ",
  "key17": "2Q58YWLKgUxAjcbPwDVw63mJvmdw4Cje5MjZghfVuZ1wz2fCMKNCqfY1g7hjfMae5StN7GCFV4wvHh91aM8fb9pZ",
  "key18": "tS4bPWtsDr5hKT943AtXhsbUdE8nrJvFSTYfPW2PrnPYn3CtNdV5P2yEDDg8zUfxduvNnJHJs9v88WVtCjk1UPv",
  "key19": "3TmE8UL3W34icyWY1YMpf8X8uKL1eeNEayYWvUxeAivzbzYuCD33TMt5Afpz9kxJarGkx4TcwrvKMccxWC1z5qrd",
  "key20": "enUtzjgWtUebqw9vPbnHgsmQqpqkKeBmb1wHuj6ivMenSskg3yvM59xHTi5uGBqb5gpjPVbFcaZtrnvcgkm6wUr",
  "key21": "5gubJbCscjmKviW4k7E9mb2FomqUDWayoAAfCGjNiGf3k1CpL1j8DM3WSS2TWgMTtZC3odE1r4BV28mEvN7ZeGCA",
  "key22": "57amqj5yUFwWhmShNJQ5xiF4gqqz5rYH7Mq4xtLknXwRdvnc57YRQvyUyx5A88qssXQPd98F2rfaWCAVxYo1B1Jq",
  "key23": "3ZjM5cD1cEij1DVtn7izBCpD2sEbHTtEVErNRGFUHLCrprufQo5eLRawBxhQKNWwvCr7guS3nz5NzjUyi6fuFTVq",
  "key24": "tmiTLU2njUdAMc7Yv5qJYSjZ7p6jrHCmdEtXnBn9j7eStDBkESbjSeGWVDMkZPequKfGh6JS6YcecTpDdbEkdcF",
  "key25": "35Jv8fHC5PiUmGmpbU6pygeAH99b4BVR3ofbDUYMRQzNmYQmtyc6JGtqTuow4U3wp8oikhDDbyM9Zu9tw76cPwWh",
  "key26": "ThaADviP7en3F4CHZACw3dxcgu1Js6EFC1fYfgoveDYaSwv8xrkpU2sgJXKNADuanoBNRME7B5yAPEnmQ9k8XG2"
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
