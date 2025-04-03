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
    "FSrveUYB5V4ugJ7Ln13mW6yLaGojkUQjsJ2DTQtfoQt2HYVC6H4Bd9M48eJpyrADzm5iTYHRvsMHXa6WoPicj6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KvfpUmddWkbCuCwyfAYF2NpweGxgDLiSXLawUs7XgwJSBxHYwNk6eEwV9c3TkD98QkqAbdVBqjrNSDjD5zeWzMF",
  "key1": "45HDLHQxShDeMzjqEPQFW3xFhX5PiYsTmL7EBCBey5KKFgp2EA78Kjn8JWjkLSpjiukdanhyHLJLzMyLw16r7bP3",
  "key2": "3gdVtYnP7WSv1spE7hKpgwVA7MBdfS4u2eF28iCYCBqNaKxCQD5gB1qBkQGg9QoTdErVzBKNH7iWT3RSrJPmxoes",
  "key3": "5i98KKxbwU21BEszKj4An4p4zpkwSdnDnXs5PaeRpeUmChTZeqjfmShQTwS7rveajrFLUpLkHL5bPCBRKuNHRjYD",
  "key4": "4SZXaD49LLG2iHQNfB1yEhARAZ3HnEM2A9vnmckjkS1i23FFpMFdjw1wuZv1J7M25QjPT7JiAKb4U5m4PMXCkqzZ",
  "key5": "K8S4Ctuxs1oS2Dh2TF8Rkg4eEAufAQCdEXGZu1Mv6AW3KqyPru4PjjDR3WcnmsVH5nakX3M5pyUrMrm8tB5vmJ8",
  "key6": "2pmHtuB9usJeYodd5Qxw7jQRK1mR22Lh2v37yXjafFhpKYWxM8bou6mRwaeQGLRDN4P8F57qB7XipFdQ6VfbmJc",
  "key7": "2oiztBGnckQmdvVF6tDSYq4SNuaJcZYZw2cd8Qu56Y1VRv9FgWjmKoPYSHbU1YT1ch1thfNGq4rUsYe4sF9P5DPw",
  "key8": "2Ywr1zEKfHHZGLLUN6JgrECx2dZMRzuP5xiZeNYnPH6aAE1NRyrRKA9VwcPHCBQJmjvWjZ9Lsqi5t88P74hn7KGx",
  "key9": "3yCw7PcMZHfSntXcwk1UDhgsXgPwJxMqvjeKbes4LsYhbhKBswnR7xY1G8KBv96eWdtC9iHRT2jLojuCptdid7ZX",
  "key10": "3ZBwJFLeaHmTEPVRaUv2YmugzdqijXcZJvEF7pcQPzA2NAAqDC19XVhHXa1UG4Kg9kcRLxVS2ChYoNhJmfSN8cgo",
  "key11": "3yukhDou9ohvLuVp4z2cqB1ypScAGmN1WCwzeMNjs8ea3xDNmSDZ51xQeKkCcq3ooMX4g4g14AUH5sTG38bWEgFd",
  "key12": "4Q5URDWJnhkWdtXScqtCat3k9GYAYJxDNsW2iGt9hWjYzCaPayfNWg8Rb5wnPNpKpHyHqBsesomFxcaEcym326Lo",
  "key13": "27tPEZUS4zRczuXYGVvjwUuVni2yddgGfWE2et2G9cZhSNcvHKKkrf2988z8bhpbeD9T67rJ7ejk51z2NfPEtWDg",
  "key14": "3sj9H4Wb6YCQ5UBLyqvXxXGDmeHG2gTSLgdiwFh3Tm3PMCNaui3UdXyGMmfcPz9t93WrwFTdXE64AcW5rC4pmy4e",
  "key15": "4wgr92pXepouwy3S7g5At5TwBg3cWM7uNkvFVWpgjX5DyNYhUhjpJduPfiBb1DCfC5VsSFp7rRXQm5aaCjJJJFLD",
  "key16": "4oCMwKw4gbXRmCfH7zw9JcCxgNCq8ZghTQMcpB6pFZMTEnZ3EMu5w2SkDsHcH6ryxdb1sF5PYfftC6GyKKYcrp82",
  "key17": "2fLANQdH3N6xjdf6KynUC7VCfv6fMAmAKphev8hL7TX86W1SMTwSwM7RYGTynWo4ErV5vRWocYJY23Y6TW3cV7qU",
  "key18": "5HsTUCaftpaVctZYr3NNSuSR6pCdFYoW5FQPmJ2HjjujXKiubUMpuayCkAaew15Lfg96NRVJqfuPty51vbUKW1Yv",
  "key19": "2CSyX8G2d2eyvPudPD94yYKgxGFKJo7AZEeSsnZGUWn1ywXA2XUBhmWpJdtcEs2NPKjq9v9cNYv9j6EkyM62k8tv",
  "key20": "1ZpFRGxQkzdKCrzy1uwngeXXKN2dcZ31CuqrkcjNu69mYTPLJGf9v63kJLS4BovWs4hvkqurLwWDxpVKesEsah7",
  "key21": "2ZjU8o525Y3xok94TNcEu3xwpRCg7GtTWgfXjVN5o1r3TybH9ieuvjYez2DQsbi5SD36xKQg6aio6y5vw5p5VzF6",
  "key22": "kqrYErLF5Mzge7rxo4kaA5dT5LiB3To1VGQ8iA83PNXWfGDoJAVTP7GSXhLmgqecKqJTURnwhCgFrvAebKNggEV",
  "key23": "4oLo31HnqrZ419VpNk9yRP7KfoavptcMmDLAhWFgauhXQ9iLCQQWj7eoTdH9G8S8ffqhXRHY5jx9ZFvgicoqiprB",
  "key24": "3iQxbnTjTY2qUY8f52x6f5VJ33Fo4F2SdqfKsjWFkVARJXMXEPkcyN36PGPPrX7dPRjVjgaEoYPbm4eFjjXcCcmk",
  "key25": "4r639qfrginm6YHkYvcRmZnwUbrkLfayKckCCMLmNx7jPmY9b9H32YhtAiXhGnvBEb5rAmBigt3zhkSbeztCZyxm",
  "key26": "5zTbfpYSC1GzronRcsf7LJQDpeJbzmihTC3dHhqZKXghdhr87ZG2GwzHyn5MqJZXu4aUQTSM5gNiniMBk7WKrkAN",
  "key27": "3rr8uwYPdVJKP56WAYQShBVq4MaFrM3TZUV5xzxYxzd1q6MQyxk2J8XMmSz1Wqc6i2SBTLPS68jbXKg5zCs8AYa8",
  "key28": "3bgUeCNHE8W66R1FrMTYiwsiGJaYCCEps5UQVWQAGk1N215zitDXfe5NqepSysMvTcEcee2mMikxvQPQZHAfpuSJ",
  "key29": "5ej9A6YbrN8SRBgsBQ8PJBKEGMn6ToUWUqLvrVcB7EjnuUjwVz355tHEcWc6riBdr4gkVJAy448Xk6dXGh9eaedv",
  "key30": "2ikJb4pc5jQhQm4mTwJeZVXRvavfoaqZ8g5wg3xbDF41TydfXCBNLuSA2hbQ3YRuAsEwFKxbPdQh9Ru77zfZd2SV",
  "key31": "5euNBA7aKMYoHKh5UfNRGCRm6zeZ8MTDaSnQvsSnkwJiRzPAZDg9LmRDVLPh7zxrRtG99cg5MS3X3oMB38RaexQ1",
  "key32": "5EXiGJdwG1jKsjxVUFMA7NJcU5z6LWfRvcHKem9yz8d2T4qT2zxd8xCkQKkkUQKjdLHAaii6KiqBFDdrYssW4dLS"
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
