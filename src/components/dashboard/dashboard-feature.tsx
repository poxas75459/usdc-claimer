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
    "4JrcyWHvJofrBnotExosbBGLxvCfYNLwmQARwV3Xhc7JUziEmxMHELQHL3z47JfyJoScZaGepSfQjWH2wn1ARspe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x7WuuyzF84qtwuoaGsoN56BCjkJiHNzxArdKqr5q4SZpy6J39SiqHCwNaWUs9bT9tv5K9Nm1JVHCbSRpnSgQqs6",
  "key1": "dKZFnts8eKHU6cSVVC4PXUrjNYmdx5EioDmoo7JwuZzRkJ81CBcC7hMhLemKT49A6ZvuuvoED5fecuyWhkJRaXK",
  "key2": "3vHCbR1g6GpP2YqiwC4yqVwvcVmHTwQDP7BSVxaZv65PDToasYxDPhXvHVcDmFWU6asDpYgq9dFHAd6mJXaxshwx",
  "key3": "656kTgf5KG6Hvwpt6fLqJNhpHW7jriQaqG1NM1TfNS35zoSaD8ZUHNhNMDXX4RwFeFzNwPEpmNMnaUSprQJyqVHY",
  "key4": "2krSmhJu9aanJKp2f3EprN1iy32Zu9sB6o6CmhULsJdDPrk3GGP5ra6xUUx7uBGbgDrZjZUjGzTphNBeVhGxHmkD",
  "key5": "4k1w14mcNvmcgwP17aakvGC3wupLonsTj7Rwi9aDk7zPGbDwE71NJJYfDSCVr8rcA84rBS7h4nL1i9debFvQHtyo",
  "key6": "26bDM8M53wD7NMjZj67fLjPXr1pgmimjaSnrn41ssfYajVq5ebLuUfbQzbHZfieNmKVmJyUjpnGWBrThEAZfUAuu",
  "key7": "3K52ewW1vbNVgrm9o8A1jNg3PuxiDVAoyCuzv7MXHcaVkPJq7pCKxeq5dLYySNLcg83pT6QeG2jKcFFzqDs6nAXW",
  "key8": "5REgAZTWw2sroA5VNkxey7UFKE5u93PAFXr5mKAac1L9DQpgEzRPqsbpZiS7LXVtJJD99EM435SGy2cFbeG8tHiP",
  "key9": "2gwzyTfb4vn96oDcpo6sfH9Z1Kf4pTZPxj6keUsLERXS6Brrhkdm3RcxYBAxQEq3LSfb2wHui1N3kNcVACQzv1KX",
  "key10": "2sUHFiQjirumQ7vghb51YyTbZb2RwTCeTUToBBBENoTa6xoWCXZMTSYojsk317Nd7Dyd6embUrJHXDfv5U5Nm662",
  "key11": "594WSa8UJo9ceFpN3ZPGFa5Gf61y32ag9sg94w9soR3UGKeo3RViKwEuyoEX3uKnnAUZs6pSbLmdjcSq9PXm1tqe",
  "key12": "48vnhQWrSRt2fdxDVhNwmWEXynCevAGHxR8YjnA6xwybBq1QugwqRPWXytCiBUtUtAu9k9Ssics6YsumHHdFhb9C",
  "key13": "33vnaoEu2PiBdPdxseJ1aWYH9bEZYJf4M9dB2ChER5gCgQdB8T4xvBunDJx9VKz9F5E6xzghkjfzBv3uQHYA6vfM",
  "key14": "44GvqDhyiKWkyqQhdfwsbRFRebFQxKgqFoCgejWWyAqhq6ABS26ejnf6457XNmiHsf4Ep1SXMFXLk3YVdZy5WJKm",
  "key15": "5keNzs7CzzSix428K6HAXmumpJHaEosG9gxgpq1nWcuvLfZeMXeLNKLyePE5u2NBmWJWX46sCqPX2LBorLsrFtDZ",
  "key16": "2tcCgScdkxFM7feLNiix3YAoizcjvvzHyzBZAHw7bMDMFkoQJCNMpWSWFMnocrhy73Je6gwfQH6rvHZv9NryadEA",
  "key17": "heNmCariuLMoVFjyjcRGexCD77nvEFUf4TKDRSqXm3N2mRzsbDQ55NTvjaFqXQUpAxpZXke38ckRT6BbT4vtaHG",
  "key18": "4zbDesgLGAR5p2py7fhptvZAKoAoyegesqpzBGwdCKLXvpEsFgZtxB9Mubo1xgHDs1VxqjebSq9HpsW7Jae5bSk6",
  "key19": "4xhtsf2jcDPdjvYAXnP8zkenDeq2qJrj3ivTWmjFERXfGAyxYWvrQxvVzrAHM7tt1HZ2S4LqMzerwjZ1wrVkr6Vm",
  "key20": "56QXMfUwuBJRiFx1aJ7k7avMjLx9rEZwSPCLPC8gzgYBuZs5QQwq2bbMXKqDkn7dExdY9Hbq7qCNjqPHJjTKnaWb",
  "key21": "2xCLCiQMiqzZ7eL7m7g787Zhss4w4HeUqfrDwwf8NFb1fKMxdnf4M5AbzJ284RBxLBPEVCrvFijMg76kTuMx4tmD",
  "key22": "2DWf6UyFD2VEKuZvNZDuekJeS8e7CcaQKuoHADzS7h4yca549TSwQsRGjVXJYcW2yAmKQaefZGnhWokcKAEz7e1K",
  "key23": "3mTzAekcYK4RCVEUsXFiUnxUXEJsQ1jXCeU366sHc8ErnQ7q8aFDZtb6N9KA6Yd7nCHLD54uxVne85WzuNV1hToy",
  "key24": "BeW1SNYNbeYDQt5Rw1TdYZLAoUyHcsZrHLkc2peDakepVsDzYxL37sSahVx7WM1LSkekAtXjUEcnMaTq9yUEG28",
  "key25": "UJKcNsUiqqyANU82FkSxYisQK82jUsZcNwatobNEmZK79BmUNzAjRW6VyGhJbeZB8ByDdQCXmpwZP2PSTSSZfk2",
  "key26": "5oHUuQXa3zVNus79t4SkEuD8ZNUaWMcn8mt5RBguEhM5dVLkJ5ESC3tyinprB5vX2CAQL8oiMLyWuKJRXNSRPPfc",
  "key27": "2EX8TvXDRGGxaASUsdWnovnqgyrE39mARfsR8d1ELuTY7nqBNonNF27A1Aj69RvrvPoPEr1wPf2R1XtQkJnRECg7",
  "key28": "62yrkPMQcDyUPRMguvwKENBHtaN5F6aXZ8cfcTkdv3d45KBDatowtD1DnbEPMduxm45UVZw4kPv7gABjHNqSh1eK",
  "key29": "2yuSfDwiNXoknbBgLFPNEhjjpsvo62wZRF7gC2H8oXYsVsvut2y9QD9fPdcTpwwAteXMyx7Ww4UACrzv6qeycVsC",
  "key30": "v7ESc1GyQ5tNfdhhh58XQRPqaTcGJYfYn7mmgK1SCAVkAyGAE5MKcViBT8wsPBmCKaJmD2QXDF28WUYbZu8xySD",
  "key31": "3jwEuNZp2PJLmJ9pE4hRSrvHx9AQxWuhiq3RdN7qaA1U1NktSSLiMZnLPcC7AdtaAXFU6pmmw8esua929DBxiCdZ"
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
