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
    "2hzo2pvaoiXeKZHd4uuQv2CZtWYu3dpPNvotJyTRLxnoipPSpu1aPnPF8DW1PhQ6jkeMqBnG9sp71s9WCZSHCx2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eavre9xxD5oCmc4t3aZ8uQDjR2wHxP7g7MWGCTn42NMyFvPPMij3SApiW4rLpA5SNEyeTqUwWdETtsyXRiVsfgE",
  "key1": "6257hpQJSU2M2hvhrgQEpkJNZMgByK7JySPsWV5jntXiN4hNPAQLT88sGDfYLErh6h6Etsyur4mXekSRBB5XRqKS",
  "key2": "5LHS87qY5yi2nsoCVS1tVbuFZhEPn3tni5PEcYMFidSFQjnXHpTG7WKY65UERGj9uygKQCKo5QxQW5M1XXoCbkVJ",
  "key3": "5Wk2KTmPsTjQU9mfApCGZSDpCaZb4Vk6onxbQxQdJZKHQKY4UEeUywvLhfsMweSR9tAjPutM3nLgE3vBbsfku2if",
  "key4": "2ed9CJrU7BUMjgP5bhDVwSR4zs5dy5pTLq7bdWo4YbqSk5FhXxKLiD7gpQMdvabJKUnUYUYgEqw7yqjxLmUwYDxv",
  "key5": "GFWQyUQPLRnYWvRpAqevgBT8EonmUTbrbMcqWxSQXT1JkZRkbPZKoyS5vhWbdyj3vJUZCMtJtVEdsTeKeBt3Kzg",
  "key6": "5Xw69xmeh3D8B8xyrYaxukZSNpxdrirTJihovorpVo2kGJhTqbAccR5hKMEi8KeLZT5LjiMQXzxDi6kqYS6AizY9",
  "key7": "3JquXXAqUJR7QEhBiHsSsnz9todah6LAdXLzMX3pHSCyo3z6h59xdhHrnSEmbGz6g4sCPw5x4BL1EWE1da2Gkuws",
  "key8": "5K8biq55CV5A9p73Zm2XzuCMGBDzqfPXgbEm6y8KVoFzaTA8L6R86rUBmz7CaSKqPJ9BTxaQbrRRKvJTL25NDmiB",
  "key9": "4gssnL19xUVWawjWtDRx98zDXF4bgfdEMa663uW3jtt13r9QCQQkq93ijaQSExRPTysequxuCvcJqvhxDvbbzHBm",
  "key10": "Vpz4eK2g8z7g4zQ9uogrrGuuqdmWTojDgs5TY643i9SRHEXizH8JB5CJSPhcYM4ogjpJ5jmmqc8rtBsYhKj5nwW",
  "key11": "5qfgjhqWWX8w8cygAnEnzdMv7s18hD4PbVnvMih7F1KbywWiNLbXaJFVkd6SR7pRwW5r783fbBZErBUvufVzS2ap",
  "key12": "5vV7bC4DGSF6eKnx5H9pPBiwwkJcU36iuQnFAEHRqo7QSriAzTwPX3xzu7gEwTHKNVMegvJL1m59pCEUhjHkuQxb",
  "key13": "4rENydPACNwvckUBkfPKiJLb2sCQ4QXxr9AG7bRX376xgqtVykBtpdNDvSdbryPrbmS43oHM22nmoekywu6icXh1",
  "key14": "2inxfZ46hbFbru3A6D1JCCzLEihbdGPAvm9Fidf71VTQdgU6Kz7Pbr7NqAGVyeCzJE8tJf6iLQJzQLmZNZsmyfEL",
  "key15": "54dYskMpJvwWN1y1aYvXSFnW1BVh4Huy9kCaMShGxgacszhWSCziut2VypbKoiJmqeC9vsPEWz7Pzj6TUxpChbeN",
  "key16": "2qc7ZmPwHqBQxh5pEsqJ9vvYgJuQP2mdRV9LgBiwhkvong8dwq25P4XSKU1q95hek4yu68UQhrMxaXYYgDkfQbJE",
  "key17": "5V3tsnnxZ8wxen4nhBvGht75WrxnkofRsnCCxUJver26N19SV5FhznPwQFtNmzsCcKSvnFDd8ZTsifnJS398hVJ4",
  "key18": "5qQy6qdf2TcdsU42Lrwsno3ciAGt9JVPv8jkfW2bM3Hwi1wahQmWXZkHE5YXVovFdSfTaCYLADZEuN1tSLJpKB15",
  "key19": "4MYJt6DR9FYnDGgjD7MtdWs2SSSLanhGtJ5u3WXufSbH8fcSi3yfPKmaU8KZY3qq79fzxEi8htjsBviVEpFRHtc5",
  "key20": "5pWunWUbenTjZYz3BgVQPKPbf45gfQ7ozs89FG86KJvkKuZEf8QiDpmn2rQBKihaA48thvE2xJfJ76VWD7PKxu56",
  "key21": "3w5TkvzLEPoK4MdT9XGtJgFZFKmEJDesERVG52YR3UDTzq3ygQyoEz2yym9pqDFyCCJoBLDBuyu4FqaDxoHLP4Xx",
  "key22": "2n8QHAqfz7jaSfHqdj8LUjs2dRifLeXkt82xnsbSKaeZJJoyBgbmzeDbtedQggyRTXTYmt3beoW98ArChgPJNSfD",
  "key23": "24P7Az6FWfv8suDCBEVQzUVFbtYettwjmVqdeZrSUc5FvcASayo9z6LG82mhFm5PLnD5eF5mT86kszxZUriHB3ZY",
  "key24": "nZGzopnxGVuQaUzG1xYGA6jbdGAzn7t1CqLmmc5UwfvaBxpmZ36zzmr7LCfzpqcMXj2eJ1GdgyrgJr9mszaqDN7",
  "key25": "43DffHSjfEHewj2qvB8Q45KhTPzcr8iJDHBy7WWkqkuof7EjsJGGi7ELXnh2AgbGoYU9GD2PMYudkNDeZzYR7kzF",
  "key26": "3qpHLjtCiHCMXjCMN6hzY9NLPibcYAaxdZoqbsGjDngY2tT7UiiuNeGceLiFMYX7Lh9aqqkJJVy8g4vsKomiStG3",
  "key27": "4qy1NWB76KDhcwkKsrKzWGdriUYSMbzDUj77k5Ss664vP3ykubPrnoh6Ddc1tSjFh2nt6RAsD4Rj1P5oM1cy5AhY",
  "key28": "475JDpx1uNiMrZfHx6HdoidjhSXRBAKoPczw2H7ciSjrGE97YDKEFMkTwBpNGdQ8JDRDSQNogFPzkrSQp7czwjbx",
  "key29": "3FJ2FFHuLt1yXVXJfLWVcjfF5u3hDYChQUmoDegUmsDtPH8XwYMDfyWfP6zegBP8CkrNkjb8tzhzsSYxotCjjwtK",
  "key30": "5wtvwx8Xs8S5hm8LahhS2pSKE9AbrNRAa7wn6NA7pVovfgQoTge4b4kWCyYQ6jkiz5JdX8DGymPK5dqEw4mSZn1A",
  "key31": "5srNXNEzhmUHnuuP4zwGnHKcwk5w4jG77ui2fAJkpPrmksz2TKrVSXxkibZbnTUrm1rur1uKngfU6i8TMCmTfoL",
  "key32": "S4rFfza4oCwFkgcqYCb2qoQF7jtFCm4rANQSndnwLVefdAGbgYN1prKSoqbiZTkbpYUxe4M8DgoGpSFri9uvm1M",
  "key33": "syakqa2c75KQbV3DKGpjQSnRPNpRUHHGtzScVh2MRbnY6D5pqoxvStX56rYTxLzsHztmq7BekA9vyN3W2BVVn6S",
  "key34": "545zzGKgi6vMgYgiMrD1pUCgfuMW7ZYaGwCAifEqNKDCqaQ7MbSYzT89F8S4zKifuUkestk6YT5bW8Pjku1vYEh6",
  "key35": "5F1UicodJCR7nfEbKMBvWiERG6V5zxSWwFyg5gFxHzAQp5AHBEvcLHKmuvD3A7qWKAMVMoXV5pr4Zwbe58Jyhw5Q",
  "key36": "3FNqwvFtjhJELiWwLf3NoW8QhoE3xVUqFAXv9HdSXVp1MB1HYuzzEQoo49gC54YeJ5jmAs4L6tgLKGmc9U3YbSbn"
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
