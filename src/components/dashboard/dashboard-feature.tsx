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
    "2YyMJgpUkiN2gDGuSoNFMmRQGMyoSYMFT21URE99dCjpAtdvNvsMdLpHhRcs4U4nYbTj5mJkn8SZGomoXA7vD1J8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37zvghCDdUVDTZr6B1ij3aybCfJPWRsUcJUwv5gDB6ecnGdTQHm1J7Tzz8ZWCkb5PmxM2VXHDy9pYHstToagq2Vy",
  "key1": "45D5VKsb3SGtNuvgM4kyoUUAGr4KLA8QbbrRntfvyWhbszJnedk9RFnWrYDPuvcJNfi8fRftT5T9pjCx4M93Pyo5",
  "key2": "4eWt9oMBTWh676kcQKUpRyMMhjZTJuAGxnjxEKbrj99wMeU9R4fDjcCkv22E4gtSgFH4SmR6CFhs3tR7DS8bbKHn",
  "key3": "5h6niJsPdxBkZJTi8TV6SAJbWGaqCKyQCixnC2UFwpuWrB2McTvfTFAanZjgU8AuirqbhJxfqbdbayP5BbW5APiK",
  "key4": "55j4QS1Q9pUgD2KTHQU3gjKz8aqzbRHXZgPRnC15ycJLyWxKiFA4yWxU5M5m8bGkiiorDAf44BA8x1BgUNc94PSK",
  "key5": "4SZs2BHgnB7f8hRi1XcHqXo9Pq43Cx1RnrrKbNkgTNJS4sDhcU9iZMEBiqC3X7ACoR1PRXsQhEbHhad9zMsXtHN3",
  "key6": "4YZPLxfjcgLGdGfuVFsAhuUZF8Y8ry5Mz4ZQKiGy8zDV1Wd8PwbkXMX5xTw4D5G75RG18rwdtW6cTkPYRLhz8tMY",
  "key7": "4bc3uNsetp4afFDZUwMwyXrBCyhixSzvAPpnCMDRqLyTKvRXTncjZ1ZUttEd1mTyHjMrDQQ6ijwAWM5JQpxSYcZa",
  "key8": "5J16Q7VeQ4fwTA4846JN5oEZpSu7a5yNf9duTyYnsYAybYQxxNQv8gY6yDn3B1iH4tyKtT32mUYPjX2CarKGsnbb",
  "key9": "3oCak9tU837qvURPxNWMEtFdY8jPJq6YWJUActCLqMAHmFDBD4yxcCQ2hpSe4WRyR1VzoRAfHsLW3yEq5WZY5cjU",
  "key10": "62jfwSb8DspZNE1SUaGYvwyHCP5PggX2hALuBieka1R1KggZMrqfmv42kUDRj7C9ieCTNbgtgjmL2PS4doZGaP3Q",
  "key11": "5Lkag3tH2oNpp5qieS1BG4hx6uVuBqbTXveqq9PtsH3M6QtdWV7qqsGX9bUMuTp9W6ZPnAGNaFkuH8DdpKueLto3",
  "key12": "Q1Hw4jnTRhXNCsnHodosZSt96tktbB5MB3nudLADJMLWBqdNVCEP4dicCteXQyCxqKiQbq1dgQW5frobRdqh1g8",
  "key13": "H7sSAG1ujx6nDt5Xb481brUDfSwzNXdaG8bYLXa61KGZoCCpUP2CeRDBTAAv4yWvJGjpJY6kCE2nf4bddfom3Zv",
  "key14": "5Dv3ngFGnL4uN9LkFxAj1ywLempfhNFQUeB6HSVZyjKKgswNM6i144drJztMCvr5oRKat2ozWpRemckwLQ7ThRsT",
  "key15": "32fcbuobNwfBwxCQzbfT6YoMjS4J71fVoj65xPY3iB9bKvW5LYvdNiFE5df5nvBWgatrYWc899EgUfhQxT3z9e74",
  "key16": "3ZShU9ap6bka1HH9q2v7WgQxCRzuJwn6rgEYXv4twopjP8nThZP1x1YAJcFrm1g717VFSw8KBaTk9LM8thXPKG2r",
  "key17": "3QMpapq6CjYMNRGjnw2VHUFBF6j7i9ntgMK6riEaJ27AHvj5fsbZeYT6Uy8jYgZiubPhkjZU2nKP1LaSuNoispHH",
  "key18": "3UJjan74FjvVaAQD6mmpQZFgyqn5JriVtYNcUK3Gm4esKzQK9No1QTNxbTpBpHktDf7tAu4JC3g3Nrfh3wkGNLXA",
  "key19": "JsCiCjdGeVj48YizLfoH3F7Wy9eQnGSDGHoAGp73G7zK9kaV2ERXhaiihJsdTFV3owCe9aRRpGRfoH1ySL99gvS",
  "key20": "2Nh2dLKgEMUiBAyifY6gg9A11BLATv9g9TjZLRfp7KNfx2LWbHEzDXQar7AEbKcbfDTqfEutATppWHwjfVycLBiN",
  "key21": "5SkDQPyfWkDzBQdAyFnfj1AEycHrMADKwWkjJDhaeuAE8mzmEWM8CMusKwocrawHQhyJNGxq4z9JtMVSjqbgm1HP",
  "key22": "2AJFs7gGA2KPrSzQp2xLaMPGdnRdpmsnWrcEascdgqjrEgkrLqccKrbkCi8fjRzqYi2Gt511qWPv2cQd17pYBQ4Q",
  "key23": "5ieiBSGYkHbDz2tyhtzwjbjHp9nVrMqtyygjYBZiU9qHCx8ppfP35fV2thFCH3HF3gmzWWndvB6McCHXZpkacBYg",
  "key24": "4Ce88obUFogEdLkh46c3dsRfvJBRcDRctyHYWmKgybMSTqDgzr1sS3wWkCjfftWzuhB3Jw8thRkdksmpKVDcA1bs",
  "key25": "4vU8EymspBo2KuzZykgWv9KwTMkXtmYjtssAbjWMdaLHcy9cKhxTR3sKTn9E2zz42JiE9WcLgkUoRpgwXeeSyWez",
  "key26": "2BfP8BHVY3wEmUscT7Gkv3CLDE4wWpVXFGDNKrHHcAvhHTjnHH8e4TC1wuFXo8sNWF3zzuVX5s2yCWTRCs15B7CY",
  "key27": "2akPP1BpB65qYhBBWSY9wHxC5Tv8GNPShiVuotfcJA4oDrZ5Lut7P41PvCdvRAfdK3TidiRZKrqJF5xwbD5EdeVN",
  "key28": "isHrohR9JALhuhebzZxHAb1tNcvAbdLLRmcEawqgjZ64v61tSxFJHCWgoUAi82s1yaBBSvtwkshSz8cMekSVLBg",
  "key29": "yhtZ7UD5mc5DXUbqpqXcTHbBcVyHtELxtbRqvN2a7timRzU82qGEuD6aVc5pMgA6GYxtiL85ESQMVJvQkcsDnZY",
  "key30": "3mZBFgqKrku3eRYEdRGXMxJL2qfFp4XUv8EtNRKCLtCk5ywAuao8DEPZFUbM5Xt7wUbqEoakN257bxEGPE5TLftd",
  "key31": "128yXUea5gnXfd36GAApT9WjUsLTzMApGBERHbb6iNxnA1cx4odmvyCYyv5XuA6ou21B9jF4EVra3ap9K4SvJrwt",
  "key32": "3HnEtdpzX7QLVvYzCiGZ7Mc3xPuhQaxdT5AN58AZ2pRn4U8jmdn9dReu9zioQnEE84hmEa4Yg8vQQsPKQVGiJDdF",
  "key33": "47VkfWaux1xyxH4FXYcSCsJAU3zcWDuHx32Y5mJ3GNYpWeFhwbqE6L1e2iggNRXfhkaCoYgWAZyUwcGL7MAMmqsZ",
  "key34": "4Q8bHXa5pqFiJMWZMuxfhHzSbTZUouAhy1CqiMX2o3PDsZBe2k9FHYqviDcX3cfshLnkxsGZ24qKyZwvFNFiVQFx",
  "key35": "2URsUCuBpTd5GgZoPUTVvk14XMXfUUodeXB24udvnUsjc89BTJCeeF291zWV8ecRXdWfwbpXHqx6tWYSJnHtR6Rd",
  "key36": "4sjAcW1FxwLjXLe71KA8Gv8TQtPYcFe8U1q3d7ifhKzzHEyVhwSC5Q8psPfVrZP86yWx24B9JSyUoRKVKQAThWNd",
  "key37": "5HVUfnD6hgMQh5kD3snRyKkJ9ja4zSRKXQcSiGu4NVb8ZMuxYhMj22tHGVxVi7Px8r6HCrgvuuw2njJM2U8DtKxL",
  "key38": "4L7nrzXfxyRPEDpFLxrX5cntVJHx9dkbCStNCNhSWDbUTjEs5jw9QoesXEcQvkLnazzXmAevnJgxtXwAVxsfWK3Q",
  "key39": "46VbZuscpJSc62is6TKdTKTgshDFsmYusXBpcHginqG7B54ss59NUVwbTZWVudmJAnQkoCozz2vYzRaCzJN3mk7W",
  "key40": "4BNm1vUnoAo828EYw1cVx2w8XT9Tus2CFoy7yf2H1v6FhmBZNteRKYT88QSAqLWaxK8Eq3yJ5sorPQ9uZPJPTP29",
  "key41": "M2mgP6c9Vj7tD9XXAYYKPs6vXc9atkSZzu1wSuFP9mTC6C1g3TaMajR9BBacA1LMGNGxH5erimtWJ6GWDGdcdYH",
  "key42": "3o9TsgYAXh5wGpaMgtQqC7BUWFUJXwpUViNM9a3e7pkyE6W6jNQHPDGDXrd1qRzHTmDiyUMytkVGNVCKGT1G7GX8",
  "key43": "3t7qSMHrFLGnXfgPUCw9xkto3d1RkRUyWfAK6qxMcNgjegJdWmPPXxSyNTWLRmo5Jb8x4aCxvf9VN6KcBkPBdPwx",
  "key44": "5jdMCuL7gbnWK5qxcANa1VocZ2WwtjL5KSyBkgBWsCSJLE8LTDj5G4S2uHythnQ7Ffo49zqYZ2NJ5NfeLWoeqSBk"
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
