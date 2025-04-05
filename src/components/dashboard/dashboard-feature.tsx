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
    "38DE3FeMUKCPeafUtPJUuczeFfRWRyfqmjyoym5D7k6bCMVykeXZCJEPHzwvKit8p7qiwyerUDFcAnuz2Tv1ZmV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tiu1ZAUt8ZzhV9pPnZXfYMUKHVh3hgyPkMc9tXMU2xyFMzUH6BjPyPJAmPaQdg9ZNSKZH51VEnPFNGkemtJMkrJ",
  "key1": "2ekenFqM1EZFwvbzxwv5nQSgCBvmAWXKyJXnn3ZqHY4mo1MeDw1GZtTzyAvJr8cvHwajTzyts8xbthTZckn54bzA",
  "key2": "8d9u2eSUcTyZRzJsWyo9Bw5LXmGu3LWS5opa26rBcGGoenW9pVvAmcngy2PFizbQSN9zoEigiM3zVXLy4ZtdbfX",
  "key3": "5XeoMpzAstxZ6MrFbsZ8GrnNStk9sQSwtGCbvw4pbeTg4r1QMZPr9KpGhQHgdNSSMvqpFWjh5gY6SfsCDP97tS4r",
  "key4": "3ULNZ3K79pkHNgi8YnG2iJ8B97C9c88p7G4trec1K5xzYehNum8Y8UB9N9UfhstRNakm7kHkJMcKPhBrhRy8A3Wo",
  "key5": "2c81MvicQzBQWScuyqkycRdUwMb5aQFmctVuqvn2MZ8uso9zsjB3xQ7XqL7sNXPLFV48LVmRQAq1zwDHBoaXmRqR",
  "key6": "3ZgPPNf9EwkjHZ5NoPJWa57utYiQrwZWtpD942ZFLCeWMSgBDRgaqaZfiRnvoQnN7pXXCTc4uKwq4txnwhfe6Hck",
  "key7": "5Q461owoUYRVJZGypvEXkQ3yPo4vaUXcPsiDFvATUHNA7EyMdnGkn7FjpHJnqSguum4a7duSVXDUGbJgzxpamJx2",
  "key8": "DUq7bXh7kuFxj2c1SrB5fdL5khu47iJLpA1GLREFqCJfqnnry4dLcRCTNuiSkT4ZyHVRrsuZv5pLRncQghUMFti",
  "key9": "2FenpP7aov81nYRZ5J5ZnKdy6JyxmTtY1C9d9Vy2XVGQXJ7hkZUHAx8v9nSjp74inbdckJwMLkxvvnu6ySQfhQZG",
  "key10": "3oar3hWHHkvfCYE9LcwGg9eqM2PTMpGWnePerunHEctsoncY6gCt9z5c47J76tSc7hXJmTJc2bpNTxdyZWCvD3Dw",
  "key11": "43EUxrqRcKDK1f4TCxCyfhPRhGhuRxq8cy8UwDsNwt9LA1EFVhx4H6x9tQtUJsNjs2V17rRAx7HoTu4GU6FYL6is",
  "key12": "29EkdBWWKbwXvzdLU24EBV1hq186W6MiePg29mtCgeA4PJh3iHyy9GkoeQvoj3PS5CpBvMWdnjctUeQA6wwz6JnK",
  "key13": "5yVQVG8XNDhr4DFw6ThcZniHuT5akhVRkhruXsF8hDsUNyntQmaCcaHb41dEJyNroDWGWTvVtT8znYyJFvU5vGGc",
  "key14": "5yZ4dM4cTryvgYxMCKvMK2haJ8ZJbhjdBARHefBUHzJCauVvq8ed86udH3usMCSFvnBNg8pgHcMkku94cA8akkxP",
  "key15": "5N5VD2Jm2kLPBS8iBvT3WCAR8hCSazQ9xWcK653cDkZ66b1NjzcUvo989X3gcu4REVT7ggQbonXqSwo16KMijWQw",
  "key16": "5ptgusZJ1orJq7dJSLJHLu5HAvKj4xJsP7axunK3LeX3CUoy6NfQXz4RtxUfhGrZBDFscZMNspTHcRRNVr4g3kCo",
  "key17": "57wRo5hfv1Xvi3ctcqC7wKvz8U1FUmJgW16tSibjimVaktr3x1GMEm2so27g271GMSctBGmq5nbvUSHLfBZNPY3K",
  "key18": "29VfrLWdK42PfHdemfTZswYNVoZDxA4VwGSYYHxuuS9bPUfJv5jcrH3NmafNwWtApYKMchfDHAFsAZG1cmoASJvJ",
  "key19": "2TeV5bXAAeSMTCzYGF45SN1RSLxcTHKscVTkYJNnotCKCpS8NGHtgbAEqHZaQxNSCZs3EUpohZhYj6xQBDtkzHMw",
  "key20": "4K6s1aEegaUTk1fubVA5RjZMfUxErZQ2UQh2dwYizzA1i2JHE9GjAZt2h2v7NJQ6jBiQf2koaXte3CzcVN45QfDX",
  "key21": "2w8iCgg9kHTJYBNCRgcVc9rJzEeUsfxdoGzQgv8uy1EWkfrYctVDbX9LEBN4ry3ggZYj7nRjYMj6KFxD5SAHXAhH",
  "key22": "5q4zLGUooDDdiorkfEFdNjK7ewmT2VtwWaVExgD9qGwp3EZ2XwUcSUZsD7C54Y5wqmEvs18LXJbkgHUo1bnVeUN3",
  "key23": "5wt7EaETECHnuVtsnE47XRrr1zY4UEbMq4PnRFvv6hkF5kwh7wgoc2CZQJ5PuPUinpBdkihgdD6kP21YPHP6sZu3",
  "key24": "64PqAXjxYCw48caoPdWVmD81JCMbPALiwxwsA2JDHSjFpny2cSDeVc2tfhvCz2sWnSBAf9KFypHBdPM1xgC7ihAS",
  "key25": "jdhZX5ffknzGxpzfAwLRjbv3tQQJWzuQDL5a6eJETG6iRJT6v6Yp6zFtsZ757groDRkyNSw2tw3yh6VKtJcLQaF",
  "key26": "LAZihgBywzmxLa7ASq6hcd96PZoYDBxjMN3rL4R9Dp9cd55nJy1R3tSPPAstCPuMkMUtbfphRZU71rZadRZA5Zh",
  "key27": "2mMKLfxufzJ8FD5NQXzgPLT3jVHZGL9iQgUwsyscXrbPPnnWobp5k8FZiJNJQc5Abt41QV9rYoVJchxDEooDbs5P",
  "key28": "5XQQhoh4FVnpGn99v6nyRFft4bngY8bVfZXcEyoHHEoxYAJ3HJkP9dZHsUKVeEFGvzenZgE5ZgPbm3zf5BVJV4vk",
  "key29": "3mumTPLpHXan5qKVtdy9KcnqdVMu1tvGGNLXV5vw2AdPyZ4mqJUbhvSFC21kzhAB531zwR1YEJcEcoaNfiAeiHQa",
  "key30": "5Z5eDScK3G12W9cn1GSsffjwHB3SnpBuK8SM16FfFfY8zhshkxH4GnmCQcHCLsgw7Sk2m1htupcV8pjyQ4KJexJe",
  "key31": "2kYe1DidVbrMSUFSBDxiAZuH6kraGyHhJVrunc9yF25nRfmm7HzwHX2Ftz9aHiAzkDqX2PqBUUQvxGLDxDiL9sRj",
  "key32": "2nMv7sRzFfQnYPh3qjBAmmzmVnZBbhTGZNNPEKY9eox5VyazoP7CB4x741PLUpckEoXZ3JTRzS9jtDfHkhYpDB2N"
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
