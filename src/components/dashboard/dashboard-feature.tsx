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
    "2ftmsSPWiuhkkMjH7oybtue2U8pBsh7B5XAWkUywh7LuUAzx7nGG9TS5jYhwLc7VdmWJogddpDTSY2V5QB6x1d1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fiB7qAbBwvjvjvSiR1ENAvCVPjksBuYt2hVTCpiSdMV4VZKXeyUhSv87t3SjqsXFU47jYv2e5jjeQ5aSYUf2V9K",
  "key1": "2PLyY6hrXSSXijjZMNdBJ3kMmebEcKxR1q682aXiHfD9VJUrZrJKHbTPZuwzv1g8MQchfFj531ddZuTk6DgMnhbW",
  "key2": "jc3pUZKrNBi6eTobUqmyHu9jHJjSCssk5c2MXH8e6CVKJsosd9c8KVZRDSnE16r1uQ5Jet1GReigkmnJFBit7Sv",
  "key3": "5TusBjpH4ZqhoHVXJ2NVsULZT5cfeRc1Hd3knR5RRLWRPfKb3qqzPF9tEiYS3k98J18aZJcCd8jmXFGUnav8TFBd",
  "key4": "3ED3wULfMY1nHZ39SkY9BeJkZH7BzcLN5cb8bzeHhurjCFqZkzHZVpCLqoG7ohSvwjLjJQWSUukWUpyY9hS4x4ck",
  "key5": "3avQE4Pyr1FnJLjjCSVbMqvEr3Mo2N8A9RdcfaGWiwHXtTYRygQ3DdAjZYj8oVrm6UdfteGLhikokTtxqx3pi1nB",
  "key6": "3b4ax5Pef83E7Ar6qCeXakhvk319sv2wYchMGdsj7viBtL82yo9e39wuNZHS1qDQMAHfAfqBQduQLMEd13deVPgB",
  "key7": "3PnxJ1EA9cLAPyKgbhtuwEVvviWAoYdQVuShjBLazLvWVdYfECDsBRD7ApyencR3kXxM9ozF8aKFywiYrchr9DLm",
  "key8": "36atF9mZGsLdsu1dLkpat3Jh9mdW1duWoFEv3ZjnTk4a5EUGEnvvrSEJsVX7GzDA5KGnSr95bCr1mq1HBXLwNc4h",
  "key9": "5n2hgJRCHAtLewFeCxTqDovdhtoSW8DB2jf5J6bpxa4P7EjzzL5bKHV451W5ed2XQQ4E8HzoTyFvx5jfsYFFQDQ9",
  "key10": "4AqCrgfDz9Z1c4pRDKqALondKjVzLhq3dgeJxrinpTEQZjJcPz2ijRPNdedSBbx6H7nHZ3zaSriY45WX1iccmUdC",
  "key11": "ggBVLtZ6c1PbGNx9sDKoUV2UseR4BqUeh7CePFhSEWMouRAVy7sPQT1MWNDNDFEEhTm1GW1BoHDWYaAnk48D35L",
  "key12": "3rvTdZb3BwJafW6AUtSgWjG6wdK8wyGLYchTN7UcQB1FJG4npk1hS1PipsELq7dNSg5HRhB7qPGKHbnivZuQzayg",
  "key13": "4vvwJ6nrpmPMVhVzphcS1g7zJRAgFqwYzM7iUW72ns7VVHnkY6BRUzJm2NwyJ7NGti3zL24ApHNWDYeAa8Y6AivZ",
  "key14": "xg9oX4XC1dRL7oQi9F86MUeDCvDP5PBgnZZR3wBvDHZQswcvQyBNgiZwvpE4M8vrSv7XeSyhaB1ZMHtwMqYGbrh",
  "key15": "49LZuk1zjRhFqi2qYa8JW1iHdVazJLwkCQXh9aXCVEx9KA6AV1whog2GfrG9qVygyB1Mn5igBQJjcY7wVVgUsmGo",
  "key16": "5f1wgiQYEH2AJ4rbaH5rd31eqwEkVNhiAHNHMnBnuwwbzmtV2q9WParaLYJauuAM3oLJ7DAk1QiFMg27NL9cK1kB",
  "key17": "w4HoQ92bstYwMYXkagULZev3pmh2YeLLyzfB6Z6jwWjiGVqp6LHptoC17e38kFYhr6RU7cMYGgkuNwj9jWzY8qJ",
  "key18": "4UjYc2T6kLrcchzM35gr2cQi7DdNWsi515XG6P8Nv4cHHYSJPpQ412MJMJ8NaLciuqpmBomZcwLCBS2rBXtGuuSz",
  "key19": "GHv5Ny33d3fKjrub1W1Mz4qdE62ZqXrDXEPxFYbHCjPeZmCo7i8X4FKiaUDZmi1dNDcj5ZESPm7GnFc465vogch",
  "key20": "3Yskn6Z9yofx31oiKWrx51Gj8V7NPE5uEfURcSqJ8qNP492fC1GBCZqefkXUzVmsiYfPxaVEvuXifvtTazEnsMwb",
  "key21": "CGLxyXxnyqRuqMFdftGWsXdy7MLGLENgUYwc5b4TnuCUW5tdGVFMfmweKUtujCWqfgfqANL9GZqa41Qs2cUYtys",
  "key22": "284R86ZZgdCduvESXYJo9FFZD2zRveuFVwChoLYSCMEo2UNQPNGzTg961X1fr37LXwZ6S2kYX5U8zj3zD8GY5N6q",
  "key23": "3PhCBwmKzCSLYChDi1dRr1f26dCQLrdVwfhM7o1AiKLNJHkAAYPuqH6uZ3YhaUS1vtbBWdXC6a2sHLLwR26RuBF8",
  "key24": "4PbUNhwpcR8GkhLjpJTihxEAdAFmyx1WPHR4PDhgFHmgffAvKESUh4aB3cbQeLwzgD3anGR9x6WV2BMKy9VzetVg",
  "key25": "59YCrNnAv8gaqTLmvK6HFMK16XZVqeJjf6fhxRbxV2Jf99hLzVjWBHYWfbFn6UEmF9xqhCoYjg9hZuDFj5u2omJy",
  "key26": "4mskt3Rck3picEkd6Ke4qDQKkNei2dMpmfa1T6AQhN51SDc58hX26n7hqfbcMJqk6izPCm1WKp6RckZ92NjKAUpk",
  "key27": "37D2RJnUL3orjkRdbfWauWVFeBHq8sLyvtnHmqnrUgQottjPHBc6bqeE6Jao9tMkg5mqtDzfjtqYT4ZbtbEmaVxU",
  "key28": "UQqdQSUrQ8tpKrrNq3ihUeKJGTcGQA8tzoL3kfsoBQQiRnRoB15JKxGFT8htcysQ1XZPjiGqMtTbvxjjWn3iRAz",
  "key29": "5vELNWrNaWfiFBvyHEia4cWxxvwZToGQKzBUnsENri1UPpP2csoznwrVMFKFRqZbK5q63iHupWeygEzKJkTF7bMf",
  "key30": "514373iXy3mvUtX4rK515s7jmsc6dtDkvM9NQ4x4VSTUozM5qQfqVLPNqLo3GT9Ma3zGPivG3WUsuLQ4ySWmgivh",
  "key31": "4h3n3axFnYySYfemS9EcGogzfy7grsPhgqHLR8KiL3wzwZTtYnLaWa5XNmQgUT6ZqHonZAi9VdwE6gY1Fn41kED",
  "key32": "4v6iAFLGiH3SpfwZ74TXvLSZ8ieN9JETVbZX2qM4YsCwfVvSwqCL8RyEBpPP25QKH9by4mmJGExPsEBkCPB9QhqW",
  "key33": "2NV3fmNo76oKpXGeoZZipoQKJSh7P3UwadyAFkWEvifQK3wfG2h9X3BSnBZ11CaRA2DNmyTxxQHsfPJ5CuLdVe9C",
  "key34": "5teDGKDynJ6Q4z26bFtNqQiKHtFz9PKjgwuARfp4MH3Lc5iTGNaTENFXs4FvnqkJQmijaU26Q8ZZ8qQRVNnsNoab",
  "key35": "2JcUv3PoBawk4JekCt2u1v66SUpUsrQow6QzhGP9GiiEczpwTTNva96YA2xgqVcM4xFpHNiPrd2qDfU1sW49CLzp",
  "key36": "3tz87oPqPvT559xY41B7CyZBcDRM1wz116fysa5Jq5xg8otNPxnXf4RoNRPTjcZJzxwEHCy9cbeqG78P9zDw4PFE",
  "key37": "4DsFeaX1GWyBfphBZEWi33HE139kqpfo8xpQbC5Fj2tkzgR8GQfFFYqVWmitKG9f29TM8NcPyZqpUQKZC6Td5bSa",
  "key38": "4mDkzrgQhNQ8dhDCy2WrsSfGRn8d4zihKjSKGRyge5Cpa67wVKMrqyHHFEHYV6RvkUspSAvwgS9BdxMV8ahvCfgR",
  "key39": "42YRofwTzsHogvsuUbTeEKKNUUzxbwxo5VzSW5ABN3qkXFG6g7rXVvK3UDiPXfcVTwX6wCyq8YVg2cqiiHmPf1Jw",
  "key40": "4XDFuiYET51wyfUbR6amU8LhXzPNY6QjB8TxwuGL6GyijVfyScLZYRuXFwvCjTc7PMPpEayh6E8eKbhhoDbQkesQ",
  "key41": "4484Qwvbj6pe6jziCXw7bNE4tdrvZ9dMnAzmJSXYhQFthwuM3mRhPdJtNMgnGhULAX9nEA1cvhTNNhUZLiuie85m",
  "key42": "2qxGrfYd7BpEiJAXVWQNne7b3z2HtzKvjAhbyv4aNH9dCkZKpFqUVBwvEZM3g4MAtZJKcfg3cGWehS3PTN1nQ7uh",
  "key43": "2SB8yVmaFd4wSAkzthk5etLZ2EWBzkedmGweTjZTgqNrhoVrRd6z4Z5vqeVxv9P48n4PZDdM9jntHcJMstivJiun",
  "key44": "44Q5SyzLtiZTevQQCiD9Z8aRZEHeg2VKvNDH7fBpbqHqVJ2pT4RyjfiUWsMC4WWyoaJHaoiSs9qXxTfoPsoPpVQo",
  "key45": "A3b7Au4PXrGN1JMeRhGxzdVL2m2yD2xkb1P11f3dcitopu9WV3y7af2arTwqKbzq1vjxwTy22fxUonhJsPj83L8"
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
