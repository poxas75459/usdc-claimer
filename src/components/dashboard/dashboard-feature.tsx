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
    "3x1BXSEWrm2UmAQCRJU4vd9SGFFjhtSjkxLzrtsmkyuahnBpjXSE4KDWrErHTjnis1LZDw7D81zocHpTUEBQnhsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ANJGuv2GNU9KsVXhogFeuRFMLqjeiU3pGnzi38jX39pPWns76xNRByCsXv6ZUVuHt5sHJdRws67pZwvAJmqP9Q",
  "key1": "23bWVnts6FJiEbkrzgtCgZ2CBsH2Wnf53VQW8ArXnZ1BofUdMgJkmChDp5s1r6iprzbgGFSVFJU5j2cmcQ5aVVMe",
  "key2": "3a1sjmJuiib6JmF7i9RMDTxwaSyX47YHPtQNyVsQrJAZ5H5GFvdvcup6Vk9EymaXmJGeytPui1zHC3YFz1JhF8fX",
  "key3": "47FwHjm3fTxjc2bJWM9qPf26zCrDiNH88bgS1JEScEW52Pkru9oYpYeebBeiYSeT5YPyhcCng6z4kADzicypSJnE",
  "key4": "rB8CvZVBNbNdL5rdG3xha1xHCphyxKh9xXmhC5uaiaSFeFHtjDSWzgamviXwCd4gLxv4NYpdHQJoknfZNHDbQeo",
  "key5": "4oPmCr3G22YhGCHin1U3TThop7xakVQY4yLQXnh4mKuNnZqkDEHER4Sh1PrLbv8C4bZEc4ZFqJNQdrB1Xnj5gV8n",
  "key6": "mT7SHCvVWxhZ5Q7hETu8JJEpbNrqY6yEE1eZ79ztTqCY9fCEWNPKyavZjcgjyKbW6e3Z6rmZggASWnYnhNeffcR",
  "key7": "324eeLPmnxHG87YXxwKhEVwD9ywd2VSqLmoi3WRGvzMvQDMauJVGdbNNovdzrRd4AGKcLzDRW5UAw8ZH2X1DSAKT",
  "key8": "5hA4jcd7PfRKZJHc8DBfkMiTbCRQTHkdF58fXCyW5t5kWb3rTCLLLjuqv1DFP6HAD7p2LtHVs4begrLt99iH8EjH",
  "key9": "51vNnmzTmUnbZ23RNnK8Dj21RnDqnUs5Z9xsUUQn5zvhXNvKE3LD11131P9aqmjpJyUmbXhjwUHE2BNzXvaA2ov4",
  "key10": "wBDvPqCqv2i3PfiJRXUqzb6o1HqfdRdiAiZxgfUdKQHUWk7JuCRpQHDpTrpH6kZYxC8fV7RAM6qjhdo3SABEdq4",
  "key11": "ckvQsvcomhgEeUdqeynPeYrh7SNX4w43MkbvLtZ8kZviUjvgqMC6gKEeqbPAWohxCNWkyKvcNHbgzSJvqHVS36u",
  "key12": "2buAmNZctRhEURZsMLMCqzQkpxmo4H4XNqpZP5p8iX2PkNu9YBtw7Xcts69aiudxYEuYdtJqSbTod5M2Toq43cJD",
  "key13": "3BcWK1AmBHzbjYCy5CQmUFqSvpAND3y9hYBUFGeGHMADCXTeFmYLUiCGK1Bb2YfzN98dxcMG6xaug1oywDALDb4E",
  "key14": "26E5mmXo3TVatvjCkGtMCvMLEABbdTjYTC1KeWEhT8oe4N5Xb6ucbKVFBvt67Kd615satMAF89ispDAfbFG9nsEV",
  "key15": "2DfK9kn5rUN64bvshufm9j5Tue32TW2GXVvJUxzevekomPeMQoWwaagu4rhap1AritDzJNzjGDzkyPF4XyAPC8Rz",
  "key16": "3BvKNwVJbDSHReNDP22HTzJHFTGdCbTRixpW4PuAjvnRqsreriqwEc4PVnp2ZHHDDaf1sKqn2mzZnXTNKZL1pd6S",
  "key17": "h8PYU4XZMoAimyHYWM6wrtnaT19jGAYVGeQQ8hvHbsb8YAun4x8PHAz1tycYRS479FYQvTYBDGQuKHmceAxjo9g",
  "key18": "4T7Tir7yj48x7X6cSvkAPCDZnrgxYo9HFD4LA9KE5TmTbAjgGFhmksYVZUbRFPCzHGkECTHDU39JZPL5PGXJZFHW",
  "key19": "3tm5Qh2fbV2uJYs4eZexRn4goDDBg6fqvagxeTxuKoRoT3CmZkh6AxJ5yoevZUF8fz9kLLaESRAcEagmTQGJ4Gzm",
  "key20": "3gK4MRprUq3RAhtazmFC27vqcubXP78kW5s2yCQbvRTtf7ppqNBHqfcPsv5ZYKmBUBX1BuRkgvKikWrRmyi4ogxw",
  "key21": "3pBELTohqdxwHGmbNh1iQjEy3ewfkdZKkwYAviYHmLh1b1dk2Qq2nn57GL4a1fjg9CRgy6qwfZwdawGM5r5PQ3RC",
  "key22": "566EAtrHwxR3HPMXDPZdUjnVFDqkT6xuxXabpUWGLte2RkmnHwxcSFdsL8KNHQjtAyhe2aArue4DfDmJXYWqutxx",
  "key23": "3vGyMj16H9ScMfrUk7WANmmLyC5YgNoTYkVDmjNdXang36KLQ4HcR9wTqnoaN448KkMxFPx6BHGLC5CLFT8ysQP1",
  "key24": "5TdRvafSuwP1pdfVyBTA6SmFtwXA5jEzaYyb58TxdfkAf4ETQzbqX8J2gxaDmnDHcpNYa7RZbqKr5bnmwLsy5k6D",
  "key25": "4w1NJGQbZpMnnzELdYN7A4s6S88mW51cmJzrLBTY67BowePNJcTc7mDvfKVDecBCmosayVmnJ8pvY7RHq9bw3UEu",
  "key26": "4NNLvtePUKZTBAa9rDrWH4hxwiDDJ95UfmuhFWZYHQb7jm4rKfNW6osneUc4EU3xY8HLMbmXtbPRF9ZoRN9F8rsG",
  "key27": "5KPmAxfxyHH67pxFRCTk4WT3zW4jBfDeBVY7uSkjSg6Un217iZDaGsK1CyBm9q5kLYAk1k8gMPHVdP1oMy6EEQAM"
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
