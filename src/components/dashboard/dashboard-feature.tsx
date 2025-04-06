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
    "3sHxvh4QTE4jjdZJ6Xjabc2iZTqn8xHb1jmLJZ8zjB8B4Qbd1cNaYke7ybX6KZfwwp4juSdF85Lym76kXMKS5ca7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33BnqkTUNaqHPtenPi4g3tejVuFkY4PnURzJsGV79Kw3jhxz1SpxNZT5K9WSQmtdEcQaPF2ud9saGMieWDvE9RWN",
  "key1": "FtkiTQ3gGdrigCB7LrpqURYzFrLMqUjzT2iAz8gudB1M8VpVcVbzPHsUFTMXnh5pmrrxVPWEi3LoYCsH5jXFn9K",
  "key2": "4SmkSf8CyP3ieiuY8S1eNfdzP6ngkrLoCN7W8XzGfSvxPQo2beRNcpyKWFRHfwGJCvD8ZjX9hoYCvHkpQ9tRxrHs",
  "key3": "5axM2bTrDsbij56EyKVztyPEpfF1zroQN7o5wxMJEnYW6hWXG7UpitKGqNBSd9AQaRaJP3mLP6WPxegaxfCWQM3f",
  "key4": "3FiRULoEMDv6WtPvWP38eguP6mwr8wxrSXn7KYmeyMYKNEZjyhZvT1YPpo9w4SXZSCZr115udzznXY8AS4CQMwko",
  "key5": "635FnRnvDqum6LvTDeDXgDZ4vrDNJjgRYyhhQAiiY8H4tyjQcAhipPkt4q15D2VZM81obRJn8xfMr89hiedg1LGx",
  "key6": "2qgAjBd5pJ7gKLdTYhEjq76NNyW4g9xf9ypXmP9VYysVciM2w6fYdFsyajUV3zz3CaAm3kWatQPHiKrVqrm93jic",
  "key7": "4VMxj5Ykjp8s4iQWpfmZTGE6t4pC9N4dXrxYhbuoHPRWkg2Avg72YPh2R1hWDYF3BCL8UUEZtUQQZhj2LRzUA6dN",
  "key8": "2fWmcBjuTGGFhtS99W1kgmqwa33HjiPi6ED5Qk6Ko4rpWi3b3UuN8ZByJhP6SsQ9PWoJ4V13jjiGkvQVq9y1Egxq",
  "key9": "3V5NnbDUryZ9ixt4JY7DwTeHBNnh9NwEkMfCeZQPirEWGcPK9usyXQHHTc657WbSMo8ct9wRQP9nSEJ9FWqium9K",
  "key10": "2q1jKJe5g8RyF9R3zVBWBVdtdFC233MJqgHDfdM2JAvbwZ6qsXocTU6HbSCuRQzuXgCSXPD4zRW69DLBcyPhAAMX",
  "key11": "CcNZEmXVRtEngcnLpovXi9LgZa2w9EzdA3g5t48GXewLf4Cv5TsJGxtANLWZEaDDqXJNRe9kJWgaCbhoYrkxEiL",
  "key12": "21NaV5KM7ymywE3gKyyaLGX7mh7CrSAyJTSAqNTsksEuZ92jsvYv1wbsEckV3JdZmkdNDzdKERAAsUaWabUfP7TA",
  "key13": "QJRQgB51D4HDMfhYRJ8Ahr82PFCAGQWy2yMgB9QWX9f1wiX21c47W8oh8cHpMWtrpWsmasDBRHkzUCMvh1zFq5b",
  "key14": "2wiKKGGiLYcsAetiypqw1uqdhopxGKd335eFwFaBGduYdwhbRpHgVDm6PzSPn91YRMXRk1hovRssrYcrPRNyTxbU",
  "key15": "3vTK3Nap5JZVF1Yr2tUzdpvxcU1JqT7pCWm1N78AcYE14e3unrAg8LT96uzPJvgEVHk8Pivf9UND9ePNvSDifzZK",
  "key16": "3NpBbAyZxGLYRpwYXZT4C6hyVtQ9HjWfPg5LRqNx2U4JLXV4B4Z2Ku8MGQkkT2VvEUMTT4dgAEeFfUJaz9EC3TvE",
  "key17": "5sEtjmtnFsYsF9EfuYA2rfyvrGK5cC4XWa73XZ9pXECTQrcNpSeJKShrLKujUVMV7hCYaSuGLJESfub87jnAbgWP",
  "key18": "3Y7hNKaGw5zH2w2QVFNEC6QVuaUqJDPQu9y3QM2tvpY9viWM6iVVemcfiwCCKwVrkfuXCuBcjf7K5JHcozef4Vci",
  "key19": "2LWUVAxFnTbRpTtuhBtxhkaMzKgxip8f2GuYQDC2zjoCNpeULMt3rJWckhKNschSCpaddAtkhAyJR4LHmHzGJiGE",
  "key20": "5HsE5k84TcmtQyf12hvCCrVJpTYPqgnGzzrz8VgzeQkiGViJfgKpBKJCtuqj9yUQukdsvhiyWkMoGA4WLTCMgbgu",
  "key21": "2RZB8XYr8nEZ4FcDjjRG49sm3fivdedksxL1osqmjLjUzQv9KSJyxJjnVaa62Q8By6wCB5Gb7BoDXRi5Sa3BnYUs",
  "key22": "4LpG5t3Du1gbEU1kTghPHBXp3RiSNy4NS24XG6s8DrF5kYETH4tsZsbt2GHrycQQscguj9z38YUAHL1PN9MrDhEH",
  "key23": "2azVogt1s6gARGj8tQFeMXBEuH6LsPDMTsnmSjFKxbMazgs5XmmkWRKWC8bV73kGG7vHstdwgXkZixCBbw4KMJXZ",
  "key24": "3juMtS51hKKDWtD9hAn4atP8P8HpwQedyFVPkoqKQ9mRAaf7xXnwdQDic9Wx7RMxgZdfpoaXoNqmYBVwt6vrp9GW",
  "key25": "5purrFuetuuWaNsUz7f5v3rAL4xJZeQdypbZTpaPu4w6gM7GvGDx99y24mdTAMpQJtWHHU34rTf1DhfHMpGGKFrC",
  "key26": "3BA2uxxgvFcmgq3xDNmsNVNx7pyBE9cKZRNiUFTYgN2NQZcUeEN75cMrxRdX5kYhkacLR5nEXdAoc468KVm4jzHP",
  "key27": "4ZyTstknzBCu1yZUugjuy6rvbkhJzAnVizoBn2GFciC9uEYB8EkRnQzCTLXXr9SxP2HwQkMV1Vw1M2m7vhpz7BWE",
  "key28": "49kStDrUsPWFsivGiA1UpS7aobiN83wLNqJ4t3g6HR7c6XLden25QrfkFRw4Cqtv3b7MS6McobxvFVsZwpQGQi6B",
  "key29": "2EnsbFunQamG5a3KKrFzNgFKFFGKFcc7qJkdjTXRfxRSWid5kgMxky8UJYwgNCa8wjJ9chHHKqqZFkKRBJjpFSv7",
  "key30": "29rZ9HtVzVnG6Us7yTYkBcxs4n7i7qVVCC5qAMvt9Szx2yb67oXTKUiYEjqgrW9Gwr4njBmxki88K3G8bYYbtjvN"
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
