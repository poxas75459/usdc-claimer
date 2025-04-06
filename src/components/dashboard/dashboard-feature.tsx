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
    "2JUizaDeVfezLN2iKVuvQmugBtoupgBDFZYa83BoCBD6HNFCKToUqRg9Zhhrfg4CgWaufGYAcN1qQUdDc3fB5v1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4814PWtEuxpZu1LUYVozcAoGyPtMaEWwmzGXa7Ud51ovL1UetTnAHKCcwKm2ReqnnPCGgS2qTjg4Qwsncki1ZFPf",
  "key1": "PkLL8ujTo3eHPfawh4MqLAnXoTQhacEAezuSSYEzBV7rgiyd2iupLo5WiSVnjeX7QAPxDEPRjk7Ed6CRPKh9Cow",
  "key2": "3DQyA5GnnQejiQoJSTT71EUWAwjLkBsUptz2E9TPr4sMWCkgHsHrN4RsneQPb69sJG3rt5avypp4PMPGE6h8fHov",
  "key3": "3xrJpfmeQ7eiPmV34x168rbNrqmqZPTeepaNrKxeh4ueqPu6qU7giy7Tp5Q14Yt66WZcbBNrVFojq7TzV3TcrovA",
  "key4": "4eEcvt3EjkzLgtf1xDpW4XKrXvmw2dFmg6W3ofKASr3tfbqAF58EiRfvaJSfYHrAXAFhKEnK5dXgFwxArvb8W4nd",
  "key5": "62ZJLvH85doEQCxZz324ySKJEh5gdLyBeSXKF6d2S5xLuJR1UcAZe1EnnmiE8JUgkFw4EFm4uKVgzC1fwUfExU37",
  "key6": "2pvmU65DrKapyKmsxUcopPMhUd6FHxKmQfRQaPcLnnr8VsykwpgkXidSZaULcCmLejeCsTRK5noeC7nPyDy6jhV8",
  "key7": "g36L8yNtE4eT4rZUWxZeCZjHXKKrHpfL7JWE1XwEMUSuWBFSNRWNiWe1v4pvMXxEFMwFs6n48gEbMxac8G5zapm",
  "key8": "61Hrn3wFr5M5qd4FMCZXeM4VxQeHAHp2CSnkCjnT7z1y1Ba8fKvJ6QkAaUUU6pBZp9XAi293vMPsJgUqN2TERpqq",
  "key9": "3qwT432o7FyfGeXukMcv2uFP3feEJuoY4LvCJ6ND4okzfXB1rA64bw4nvrMQQSuos1kTuxXRN8MGneWLfjbU8YWt",
  "key10": "3keYtxgevcxwSBwN8xGNFA2NKNsUWrNTonzZi24p2RWMe99s7Y1kJqpdxo5GvMUTAyWbdnN4PLoWcqjWH4roSqij",
  "key11": "48Nxh4nMVwab5EJF3MEHS5dwYMeE6mBPKyvFx1ChG7qHakBCXb8fu5tWcKT9Z9emMRHsuTv9anDziiob1hSew8qS",
  "key12": "4TdygrM3fpH9CDQFCQpNUDDjs5a2HaH8FeMTJUF5haPqW9tKxU9GzGgKA8Y4FPTmtRUD3fLP92eMptAGp9PSiWrz",
  "key13": "5GVtEc1MNjvux1e9As9UdTa7thuduVTadkhAQb4jDUmgbUigkRDK45zbQYqgyXKrSH4tMR27eP4o2wgtfGegHN9w",
  "key14": "2FCDaJRV6FbBm6n4dbsfvwV6yzoDXpGEuhc9Qnvthk7qeJPQtpWC36DjCBTDyytSo2uckq4cQ2KmCyD48XZ3rtEw",
  "key15": "5mSgeQGP8F1Jm914LZWdK9qzb16cWYN8iMAjNUYkJyxfL2z3UaR6SY828GmtqoWMXWukNRqzXDJqv47qWtbiWZSr",
  "key16": "3ojdX8AdshBt8CCgXtMivToPGDx7dBE1uABxQKHt3XUn4ahwCKU3YuGYzEcZJcDgFH8WUd8xLSFdhkF8Ks1yPduu",
  "key17": "5UMrAKrGc2y6KLCNiLoX2qSjjsVUwYGpYt5byA6dTTjVnQWAzvHv7anA2jqKqvAN2Axtq4cuvzsDWLgLSYuNkLhS",
  "key18": "387PYZkmN59v5YZmWPgxDD3ffJR6Vbbp2igEfsaxHo5MUzN6hwzXkTrz2fspNMzBR7RbhbEDH78gq9TCjY3gY2av",
  "key19": "5tBomoEETWNEthsbJeTXdiWMFyCRC2mj6PqrFbczRbnN6za2Bagk6PKp4dxPRQZ2EQGhca2G7N4V8EsAHNrYHhvN",
  "key20": "3ZBKXUP7RwtrYmiV6xYYpWbQVUxWJSrVaRasbb8iL135jfUvRTe55mMcMfiJvqTL69okb6iWKefoFdUZUDidT7k8",
  "key21": "4Xncj5cUrivnzyzzg9GpwYkcRGZrhvdVgxkfj8mXYhsVjsicajJd4utwgMzJaYasucMdLnDuHEAeHPfJ9rBzokWk",
  "key22": "mcc5Ax53WFT1GudDyKhhuq4UmJCpgciauK9U2Z9y4DQMeyqUDBfQGK3oh1qrGr3mkZJzBeBp2Yu34P2Vjsu5Cnc",
  "key23": "BXGYvkGJWhWFWHh7VKQBtVh1aKrSa7etyT8uvjnMgThnnqy5L76D7SeybrA31kEUVtFpWjWvae4jHxKRDHyNC6U",
  "key24": "31aGqn44f7zLUZqnjwRWaTaMpq8k4w5wi6ChaAmr9vwkrNMRqCkX7ZeJwVi67hP8Kn6ekMhCgEz54iaSeQZc44Ag",
  "key25": "5kfbzudFYb8fnhipwMNbtVXTbiNetGqLgyKn47j9Ba3JqCC7zfcRS2JUun3wNnK6nQuiVhkdpwriJqKW1yyf3gaV",
  "key26": "3AXwXu8sEkeZ3dp4ee6RZSFGVeCTyV6HYczbhqam2ra55w5RdKy6Q9GRFzWT9UEnSxb379n8MrUoebiep6tmhj9a",
  "key27": "bfyyPUrTp2jC3dYstxpUBai58oYnY43TwWoz9DY8EiQK4K1Bfo3Xoas813wcSKk43PixCaEeh53FGHk6MUGrfAU",
  "key28": "4KmCKKqM63X2R9Jp3Bw67F7BHZkgEZzFopvhJKJFaKS2x51qLvy4W9rNcAGBEBxrdCmuVoeyAwmAQUdRegbtZxY5",
  "key29": "4oFu5hVCr7xaN9rw3T6EVg7JDsECZaYqVEiQRCeSCBzzBXhb8wYQCeTBESUcqXfusC1dW9UabTHn7wMcJJxaTtCp",
  "key30": "2XNVhTEbhVA3ZfXc5xGjfeiLLQwv3mKafhf4JkJK722vo6uFq4cYFZTjmT3Cr7dxDBijM3hmYksGCryLk7JrQzsU",
  "key31": "GLN8YLWRNWpb3FzaeNMsjW3jfb6D8H5WKWCFZLXWB5VaUpayMW8fo63g7oqnKVUNd77MYeUfhU5bLsQ6AnE8HeL"
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
