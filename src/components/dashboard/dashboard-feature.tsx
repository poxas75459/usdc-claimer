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
    "2BfdDZDzxRReCL1K4AzF4HQKsNBamy6qtJ8oWveKCKFUtodRvaXuS83PBk5wpFTJWFsKDEC7GHg9EP5T6FpP8xtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5irwCpjYSwPEGo3FRggJAx6Dk4gdBQb45m5x5LWiZZvjff6ofUqrV9Nhf76ZDgN48FLLmiHCNNVAiaghr5u97tfx",
  "key1": "5wd7Nx5DtU9aV9k4Sfwb1dZsHaTJGskHca8Q65tEzD3G9puniusJcys5xdSANJavb7VhbvDeP9VVr3zBckhiLRdt",
  "key2": "3EJxc5Gdz4iWvVqeUFeMQkfpNRGgN5Zn6q5dLYGyTwEGqFDZBW9Zy51Fp4zFRqLMtcEB1Gz85yMuYCpbKGFdh1FY",
  "key3": "3z2VZfZ8DChXkb6Uum1EYBeocxmYzaZgQpCwfDbdQzLjzShceHkiyMrDj74DgnGugmRiMfDC7FQYBSbYa2zHU7qR",
  "key4": "4G6t1M5WRXqVsXGTNzGgLmDESRmJMUmV96HVLvy4bm97kHbLLZ3xrZNivtRcNQRYCxQzn8dHp8hXmPGsnbVRNUBy",
  "key5": "5i2E2UFze9bdK3hBf5u56BALoQx5TVuSQbTfZjmRa4Mhvg69oxsJRS9MyEmCoFMdo2a4qdAka6e8PLMyKzV99LtE",
  "key6": "3Gp4shDP7TxrQZfZNb9rVG148dZvXhLKozXSaQm2qdaGYv2nY4dEyZxa1ZYbYeshZhn7ie3k3iLfa6tFPk4RxnHu",
  "key7": "QAGKKUF7aCpdhtNSuaTKKcMpS4ATejRbeXc7z3Zbs3VSRn6xTjr33is9USkSVeQYyUv5oC3esdG4DiBviVa7d9j",
  "key8": "4CKdUhZtHiQYTX8QqSsWY3k7XokgPPHo7MXKud9NskYVY7L5X2N5f9WVKStWFvAgB6fZXZnPsDunv4MXXuh4FjbX",
  "key9": "68ey4YkMpQRPuWaR3TfXKFoMBAAYUhuFMa5q7urn2PKHNCUNrjP9aE7kBSzm2NWuzWFkqDafq7FSFArKX4bC18d",
  "key10": "PhccEHkqRaAM8iwhEssGAV7Vi38J9drxR395HXc48zZFrEDFLUWHMVCQWYgebtHPEtkrziunUxhawb9Q7qqT95e",
  "key11": "4xhAzET96VzsQaJgWC2AES2rCtfA78DWoZnj2LKp8ZbdJFZYp2FiCY26ybgvD5v1QHACTEvtDFPKJNYr8kBpHgXi",
  "key12": "3rMMYnFmCULeDw22rSchazmhNh4XHae38Q7jKvGktSfrtPq7ktegkYjGPxK1owoefC6hjQzze6MzTgsnFMGLx8pS",
  "key13": "4MoV1R7Vuf6ir4peHDHPDELfnvrVDuQofvcx6mVT1dbhz7nv6kgPsDGtHtyrrdH8KdqNRLYmrwtdoasf6tKvmjf5",
  "key14": "5mgnZrQUcWsLVdEUb9S1FhAyiAxtvYnH9i56ioYjJBXknSKhmwyvziqu1ZNppWxAn4xCyQsX3cEqRkvmiFmposHA",
  "key15": "3Jd264H78Pqi6ZoaTsKJQCKsiXSNoEqzDYQW7GQ56Fy3K1orZYeP68RyigDm8YXJHRgm5kvWJaTZJ8QFYoRSDm2t",
  "key16": "ykQJWwyXRbgNttFsuZTBw6D3q6awWiEf4PA7ExpNhxt6XU9Ty97cydsS2zNUCVZAXWz9XCNsDchj7ZN4785XLrw",
  "key17": "41RBdsMW5RYfMgTGhmPeftySpU19tUCCJ5dqvekta19s4GpFjLbkwBPEc9r5peaT7LqcUhUHUgvzaqtTjcnkFrj7",
  "key18": "21fytY3YFQ4V5fd1bt8bpc4h3z9sjzKxd2DbeJqwP2GEwRuhBdhyqRx25XcAWkwzzgfRpY55QpoXhyxqMM3wh7GL",
  "key19": "5qhBZL4txuVTJas4YT8AESX44WAqvRy93ZzcZ5Q3D4PVvwcGhrjm2MsZz7yEYM55wh4V37GLx39E9qRMzDw3U5vQ",
  "key20": "3kHuaV1aiCahgHkofVqQTcEAfZ2zTrgtxNrFaHCXpNJtaHnGqBxq1H3r8UeLQ4dG4Gd245GTXbVpZHtan1PhK2uR",
  "key21": "K66Jrj2owDjiUyXWjBDUeuxsskRU8Z5qbZT694TnCMuGQQXRGW4iVFathwC3EfZYZb2bXS3YVpgS3qL4NqU5RgY",
  "key22": "195mHSRUBUpHNHUGY6Ad5uRNG1N56htAMaJMc1sbbmowby1Jxnxn7TpKYXCn81S31stu7eLbZtgt2SMQxM68tnz",
  "key23": "4oGiYG9q5yMvA7yAUUBw3FgXCD6Fuwkji6bucPmDYSNgxpNaMk7WDJrGiorcJ31udMu42sxzSZu8Fj5UsaP5gLzv",
  "key24": "5BvA9Jx3tLjJyMroZbtTvaDFt9ingLPEhFzfnaA9gVcxN7ef19UHU4Vk2W8qfkD6ZVnYFdyt1ETpK9Erv3h4s7D3",
  "key25": "59RJALS6j8iQDdTgBbTDL6VEneo6XhxgWXgMCGyjfnR9rh7kwSsoBpEseMSUrRNLdzbt5tapCJpAoMseUYtf8GUD",
  "key26": "46QArZ6nZnt3stwFM9XVCXnVMfQ5UfKQL7XHZgCv3tm52jebuHaedU5iwNmov89t9qoFYfXuyufjVqzQb5dDU3Cm",
  "key27": "4L44UijoA7wwhwSh1Mewqbw7m9X2g31NeT86GE11zwHzRaNSSmZhdPYRGkCFwAQaqE5zcCaJRHCH3fMTPBbXTo9R",
  "key28": "3PQk2W9v5vmZJLjG2agwDuPTR3vW4fK4Z3FeBFVN2HQ17aDeBTf8MBd9CEKX5rHVMfyZZTAe6v7Eyoi1o8YExSbP",
  "key29": "2MoGtUTe9WwdokwP3sr2e5DpNHfsu4D7uRMyZRLXaLxZfY3FLwEYE3JA5sMLi9gzots5nXstXpu5x66xYs5s4Fmn",
  "key30": "Na98SZ7HmdAevCbtYRwVwAfCB2edwd6pcdC2tzTND53ZmxxcNriMnK9Njtq3kLeE6FkxzZAXiFcnjitkhagXtS3",
  "key31": "3BVG4vHUPDYmKWnyxxFFJnLDmVpvq8KvboLyNiJGLg9ohX9gMAW1Jee4GtMBfRAsF7vLuFKGMxvWGCe75kcstBSE",
  "key32": "5gVWPu6NhDHP4F7P7yqJTM7BJUH3ACyWBsEoEBW8HNbADGgvVvUaQrhXrAWQWsuU61yhnE8wJjKxhPsEuwutXWuf",
  "key33": "4F7pU1nxR3zVNVVK8pwNbDvTg1BqG9iotJK9x1V9NvxPygctNwBFsMppvva8pifDrBX5KWn7bHdSFcJMzga9Vxr6",
  "key34": "2iwdp1gsUwANDJyYMdm8nZPWgwEBNcKgiFfrJm9yjwzBCnVYi3r1nwLVvPW7xJSRWi1dMyw6Mq3YTxJtgPxi4SkW"
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
