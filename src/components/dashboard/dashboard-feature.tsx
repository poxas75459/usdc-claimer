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
    "pmczuvNnMakKr8uEqejjZjcRZWoW2bVmbgonx6SvbgA27dQANqBmFjbd3hWHjwvFxuvrvMn3qHUChoUCUgkpU7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e6gzaAdLP8JU9SvkdeV7iX4ncu4ULDNn38BT1V6xFxYGvuEnqv1348jiwGibwcfusQnrJXyKkTrnAqzq4JCUfY6",
  "key1": "31X6168Yey3H67zUtJTTKWVzDRzkFX2nbeGF3zP4RVAoiupntDdTrnJc2koaEyaCJFhs7JmUfh8k5jDt2tp31cGx",
  "key2": "55gbEhJ5B3ZBifqeqwop79hmrSDrWR3PGHW3jghfmbAz5zdscGqSoLm9PnQuRTQo7R2Ue7keyjYMhComYyKnhAWF",
  "key3": "W6SKBfGm4FixUT3ATTj72aJU2r5mWsM1yjA5jBfev7vF5Rap9mF7LyAq421w4yc5tAxRTtX8UPoVU3wEAa8T5N1",
  "key4": "3BiLVvR4uiEXHHAaGhESi8kdho4pReXnVcUiNR89K6h1GhriywmfQRb3oBy96a1RLNfqsfwryDPsVoBbyqvgXaYq",
  "key5": "3UhNbv6eSWAVBdJXATRPLW4qKzMSE82KC7DLvyT1oLMZ351bPhsDrqNEEoBcQMKXm7cWykkabdnsiE2Ww39uE6ao",
  "key6": "2Qkc3AVnmLTAyZwLr35n6EaBjbYw4XzsAyGCatsZ5ujCziavSbsLcb21ibPLT8Tp58eTtvTdVRwp8HgZSUHDWmAK",
  "key7": "57FnRhjYtUkz12tSnPqbZUnS7MTzZh5Di9eJ33WmroXD1RXX56k7zFd5iYmWDtXRgVqSBdL2Y7yN262AiGPUwLSb",
  "key8": "55ub1YWinKVcKVVtCBEoj9FxKBiXJqMPG8RqpKAUmFPGwdT6csvxTjtZFJKEu3CWTuNja1BFU5VRiAhy7h8QfWXq",
  "key9": "5f1f91zKZWiZ1SYm6oV7hgXGKvg1p58xeztxTHehBVWkWMFTLU73nwsXFapJKH3GUQZZoaXVkqXoqkWQYL1ocxxU",
  "key10": "2QkHrPfvQ3QYisb6F7nTdyKYbADcVctK8QUEtpkW4xPbB7cQ7FuN2MLNEr9Gg9F9j5UjBaQ8c5f9X6cVT7GGCTrW",
  "key11": "2jfVCXAWhk8zXqUnckNZ9YSpRdcFkS5TDSpcSVgSjmvBLrnyPS3AeGCmiTXuCgordKJLBxeFXN8EhVacwsdrLhSW",
  "key12": "YUFCf45ftHMgyjLAsx1BxdeKvKdDoHD14zW4xBfDXBSUxQfRsoDDWCuhpRV6WR4fxqQds8p747NvdjMJRwADyKn",
  "key13": "5W7Xdf1WiBtbEH9gbyvKkFPxqdFsqy9nc1McAdEPDykwZEnYJS8u63BPCeWubNpPaAuLGdFJd55Zrc7oNfutX9CS",
  "key14": "5B4WmtEb6zJWVjznjAbbuHgWQTnHe1UjmcWXayoDwKghGFrPC3FTYFNBGRXdPDLHEsYrTNtGaY7QcQDiRmb43ZBF",
  "key15": "2aWJvQsdLpw4SGKKEEWZNZgPCbEvikSdF7gzWpoXnivLM9WQC2NizTmKLW5eTWchKYwDfKn4yuc5qNDdGT1DPovn",
  "key16": "4uEp6fpWyab948jvRuuZRTfGREsdZHAq4nZYXp4Uo7uzTeazdmaRLGgaTGNMX3p7wMdFo4aEFv7FFJV4TBPiohVP",
  "key17": "2WTy5f9mjn1Akm8GFuP2PSMhknyTYfXrCZfn5bRK1Csgp4EamK8No2RaANc6TxWzzd94mh2zGi9VGv8oh4AuLG8h",
  "key18": "5qcHyezV6kNMt6pWZwe4JfKBsFEvEHDA5Rk7DGdAzAoLyVfnmrr9ys8wTfzzjTvaRx9Z5h8LkMzWNaL9KBdnZDWY",
  "key19": "v3gzywAJnrM9o5CRipbA7FPvCYsKYBtiBpEkTZtWdP5qYfjc7iZhpLEq7RbptsaKYmLhR1SmGQbLAwSMzynrnSn",
  "key20": "FfTKauPJNcBDsD9FDkrss2EAav5Z21TbJXXyQ82A91fYUbC5zxD15UvaTfAvPvXf3dS6hC6z1Ehv4rMUtt5CTsE",
  "key21": "67YLWeNaGsbNSC35YsWtfGvATWkth1NJ63jWDFbwFbVkbUBjzVGZxHuVi2MVrG65q5dYWP4HgEWoKePx6MTS81xy",
  "key22": "2ZoGUnKh5nXmww4tBvwCAYpRV3sN6geazYxA2YaFU8VRbeed2ZP8V7Ru7DhNvwi6mFcPNLGccgYatW2u6Z6EGPY7",
  "key23": "2zZB6aZpacEdpwUJhVDb8LVsLRTUEak76oU6K7rmnpkYDoNcJf7DVTVqA1M9HD9cu36JK2RQvKXYA4VUDnJ8mxTh",
  "key24": "2GJ9D3mYFUUmSvZNhw1fftXcQKjqcLBidMcf9k4gv7mqpxhZeL99BYujz36VmgfQPYQPMNuLUjzpPBjyvafrJo9X",
  "key25": "659nY649C2kfpQmVBSXgqVUfV9efwohtMPGDWbFQCyLkVQatk2DDBNEiVF8yaF6cgXcaTJh3uo9sVW3achJXCQdq",
  "key26": "42Lm4BYKtSYMqbo4qhXkWTnJiiZ14wn9x2u7VvxCjvVhYrXqfYLbPY8x8gdrLfwKmeT5jZxGZYVmqEDEfHXN6YTV",
  "key27": "4Eh3PJbmmwnySX1UAaKvCqRHhPvNP9ozfA1yrZhQPPedn1f2UfTrFKbtjoztYNHdQ6m9igAvd7ur8TxsZCF1nyz3",
  "key28": "HUSCmUU1znoPvBT6huePPaNoLpYFPEHmnWWHPUSqMqjCKzXoqLrQjr16MYdABLR1KpgiAqG92J39QuRvBWA4dMU",
  "key29": "MvYEZjeeVtcKmJ5Fg3H7V7heH4awtNJ4unF7Lby1r1NkE3xnWUxogBmEEi8JzhD1YXJFyBfNYCTZsDr9xzek9XU",
  "key30": "4sMMrRAzCr55eRt5vfL787BJ12CBGLWfwmFiRdkw1NaruFoQnfXcqS7iN5xPvde1DCgatcDjWAdune3D9cZVcanG",
  "key31": "pSEDyfTVgBhswvBV7zaxp8g9tEAwVfaQdpW5hSCEmQPkTRvHWEw1MnS37ZmhmXG3GCMfG1cNotahUQrJ9uPYtJ7",
  "key32": "YWkQzUFCMQaPCoqiSCDcm7N7HRERTq7GyjBCCHPDkE2cZChwFtyku43R4G2qYNyjB2J2ZNtA56TAhyBfLPs4DoY"
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
