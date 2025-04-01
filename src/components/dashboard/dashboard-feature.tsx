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
    "4EazfuQeCJCPZ1q1CPbicbX4j5cv83B4gdFfBEzik2Lx2JD86dW9m5VQu7fKJutSkbSpeRp2VbSmuqK2zEHk7yMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cubx4jvVU5HS2nzGVMCMeLK3Q2gxBRiXAYYfkbqAu4QdDfioWAQKNN1XLqRMncKTo3ayzofRXXN2x6ot4VLXY8S",
  "key1": "2YdMT9AfU4bem69D7uLjoRUF9SGHCrDoDw13K1K81qSTVXtyPetVzQm8d91E4VEa3m2jaBGVc7GygGnAbeZknhQw",
  "key2": "qkFPbNZ1fUmJ2PHPy53jWPBGisyXpd6xFEVxhRi4vFSSYrf9oHEsGkcZm1AG4Lpa2N8Lr9qZHNoAoeGsn2g9Xtg",
  "key3": "fqm2pmQ6GeTGKUAjMpnXMpA9hV3ouQ98mAvwCMrywLesFiRnSR4EwqBcG7ndsdm18RLjwopggLJJ4t43ajmfJNk",
  "key4": "fHqekCCFs9X1fC31kc5T6XAxD9fzZAsKXYJLKEPuzXMxpesstvhLm862SMDgcZreE3CUgVrJo28kCo2A1nEfijG",
  "key5": "CJGvvqc2iSr3VuLtLWQEMX8W7mpWNaTeZSqRZTr8KjUnguWP38uVFQKcXeScVJR7r7rKf6vc6kk4dCEXF8KFMoz",
  "key6": "t1P754FFhYRhjuvUkKyKTGWrVjsDPMgVqFUx3ibwGo8kkcYUG25bgxpBRCU3AQwB1Uz6BYJo85f5xEAWjoTch36",
  "key7": "2Y2b38ty4uv5JwvYJZJ43ybwGNAsaRnGmG2paaa8yrxNUYRZYsaMGUPKcFAxbSJr7cN1YieYLbhEAGhxDsUdVmsV",
  "key8": "5cw47chkzYDXVmCvq6fKKeF3KkWs8ksE4BRQm3okuAdMoganAaWczYwJerjxvAMm1WTkWKLiJz1Whh3ZjezfLBKb",
  "key9": "5311WunYCkFLJsEkz79nApa2NN4uGuNDG9zB66XoLQfgQmAbZapXQJQJPajCMdyjjFcymVgcijGMQv4GUbqWKUz8",
  "key10": "iMeeegSE2uEQXzMQPyUvuyCyL4RdERf1B1giRF1daozACeX5BER9eDZ9qV1nrBR26eM9txRAEHQGERxUQ4TF1Wz",
  "key11": "9Tux6mY5a61FMw33ZiQibB5S9DopmAj8wY8yjDfPqrdB7xSSvn8bHCajdZiicb6qaemwF5fiuSNA2dM1Eh9uJov",
  "key12": "66nGbHccTatyy4kszaxwuYF7NVp1Z8b3jSauCm6zne5ibFcmw81f8FZA3Wxaun9JJSuSnwaVr5tNwUJxqtF4Ndoe",
  "key13": "4baJxbzta23LN1dsH4Qv5Qzt816DfeVgbW7dsfW9Usurso45f6ubw2qV4vpPd4JzUQPsS6Bo8xJjxQPD5YSpjsBs",
  "key14": "4dzVfw78XMDCwQwxtoN6mU7q1yeZscqXtNFoCCve4vePzsZFEmrhhzpvUtCgHdipoj32xH9mUEs8cb5hFjc9YuAN",
  "key15": "4fyhVLoqjLngXWK66U5xmCpvian2MQVefT4aKdsPxhZbCCo4CBTahSWuqtjfjYF3WdrcU7oYPvimMcdWKQhYuGbj",
  "key16": "2FahWz9ydqa3RZYpCM3aUoNskexbi8PTdRAjqo3b29oxReYxUqy87m7iWzG5igJb9B9cKKr3eGzCzSAK5vjQcgCx",
  "key17": "3Zuzfjir9ShxHPE9yi6zsHcnvkYxg6E1NZPUk7vSdN1Dcj9eu3suxwZmWCM7eq8PPM14jiRnDjAGnfd5WvUbdPrf",
  "key18": "3ANCAZQ5ovo8VptBhZeEXCU19X3Pz7LJTLWXEijxktP7q8NCUL47g6eaxPLqjnJ4RhuXahZxGLWVNTAgcnGkg693",
  "key19": "28CjyBVop76LgiUT2UNwqC6SmhGPjwDbwdGWcoY3ruJAKkQUCNQDNjmCCRg2TsF5bC384j5Frzpph1kKz8rXi28K",
  "key20": "27MhXUtYCthfjEDkYU3rbSDLafQb9hbhsoUECfWv8FLfLueKgwPDCG2PHGAgzVY9P8vW4qHDQzUt1fbePoFcNpVV",
  "key21": "32Edp8ZtJR2vJD3n6twkSRk5Q5kctMt2U6fhuJgr7w6ggRSXt1KnXtK5mwQAwRpp5vBAoKPubpDZrFKE5eWNkHp7",
  "key22": "2rCHafHzDRXRfwsvjX4d4QRgDK6CW6NLU9UME8FFFiQW51KWgrUL3UQ2EXzmEemvpnU9Y4aX6vfg2iHyhyiieNc6",
  "key23": "FnZhK4ZjymJRo2rbesZFrZskwDrhqRYMDyvVi9gfBUknxKSyb5cnsc9pXzn9uNEAKg3g74LXUkCjftepD3TtTMc",
  "key24": "5gqRagFiVXeEwVXATWsqQPKitT8ZgTTkgHHz4aLZFZ2yVp74a2YmK3RUy3RAdDJQDRmwVk3XRpYi1Dqt7H8SKknA",
  "key25": "28mejhzFxVnbi4XBdAwoxRc5oohGpR4t84JCAfn6FN5vxiEGMd5dCP4toAe4LX33Lo1TjiMhjSkd914su4NtE8NX",
  "key26": "b4pD2TzDzrZEccqj5BJVjedERjzGN2Z4Y36F9PEVUtXAuGsC4Ryvj8GwafM2b75JNTudvqwK9mjNaX24c5p2kEH",
  "key27": "2xGRQ3JqcaSN7BouPA5cpDRCAjVGxyATYsMaEbMHFaBGSpNsyysuwX3X3Rpux6qAWTsRgBHLxgwzPncuEr7VRQFp",
  "key28": "3Ym5tfmPU6MPgyDQaRTQehqPuFF5kGNCwsJqf3ETFK6TbesaW4PB19B6gqQL5yotd1vvwYw4pnUzhPF6Qb7UQaFj",
  "key29": "5J79QSc4v1QdRXktkWKP8UMzNwSHAvBWFNENY3nZXtPHYk1wQ1YADDbXrzskBpCizH3WDm4scZsxE35duCJCxknf",
  "key30": "3HneAaMEDGQ8T5ToJ9kkj2egVER1wq3ELyodf3bYRuJ8RYWojTyJZ8eJaiMsiTF6B4XSe3dvtJVoT2erS8zQqt2A",
  "key31": "3gZo2rghYq45LdKrz4vqvQmi6NQa4WRysjyfYDFpYHpiHQdNGacMPxBTDBYpdAbHVPD65hR1uKF9ew5pZ1SKUqA5"
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
