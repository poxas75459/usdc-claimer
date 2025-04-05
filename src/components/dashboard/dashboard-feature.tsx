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
    "6yuLukcNCTkxADwsg34mQG2TXTMtzPmd29vGxYsaZgeyp7JjWNsYyDoTrfVxcT8QBviE8bXt2kasGYeTasCwtqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bas7FK1F5oQ4wo9b1ZLuPHDTiXeCHZfgKqDmaYWUFcEDo6vJgmHNLNbY3MkspTCUDZ5r96Bbp5SPxfeqrQb9aqi",
  "key1": "pnvMAZvZuskhPJuqrLwFxN5v23pPcGuarbjPewtASHppCJRNSnRdYacRRSN56dcCztbBY59F66HRymSkuZ6JoLg",
  "key2": "4QJCLrJuggpFrPWUU3W8U3KN5X7FbgztgRyhzP5Ngn8PShaV2JQvz7cJwBoDYf5qtfLWMVJjGGX174tg9i3ooTWT",
  "key3": "UG8BfkiaqnppbQhhpSHwnHnfcnPdp8X6W2B9o2MAHazs8nxwmLMoiuA2tcwr6QKT7kWQYUFuyJGhtf6QLhGAgWE",
  "key4": "4sYSrUnZGgkz3jrEH2zsx559wKnCA9gibg5QV2YLwEiSmBXw6vkvsmLY622Y3s2NCJt84yf9FYwwbDVLnAoCVumZ",
  "key5": "3JLJDvDszzbX2Fd4FV1itooUgJLRnPAbnnZaoJoKyUJTGHbaTdGeUMcghjQdCukd5Z7sWGN6u9rRMx4K4heE1dyz",
  "key6": "2Wk8fAqcghAhJZ3Urw8VSNqptYrzPsKDMvBXtidWto8Qo9oG2gugGTjiNgqCxCVbyce88oA4orjFMJ9NiKDUQnPx",
  "key7": "3k9pYxyG9VQPbcQmZieNuqTtgWwQefPmDLiZD5nugNuUBbiQcWvsXpP4NcWwhB5xPQMhm7SsQjHbJWTXDgMFULAC",
  "key8": "4eawChwq9sq54fceKkUwdFmTG6uieqn89efY83qi5e9LamSZB1b8t3vKbmKbCK4fwEbP74cc8R51h7tm87Zt2ica",
  "key9": "4cVFfPX8qbYiP5xsobdF6fqicyevST5BZAJRPJW6UJWzR27mxag2G3c5Qcn8DH7HxfixNs8NL1WJnZMz4ctSoi2N",
  "key10": "4cPXqQPMvZNpmgafg5TUGVKSNoTs2eRecvZc25RLWUgGwFn6GswNjJdZBtN49YaeVTVC5oRdBL7bjnDHdUKVBDEL",
  "key11": "4dPzAZDZEaLGQTxUUUMNMWVzsFxgeqemsgdPSZdcB7sMPco8uBaWxJT5HWK2kzopxCYEBLLniyCmkc8pRvpTHZtK",
  "key12": "3ntp2Vsj7awXHMYxAvkt2zK52cAjRLKtx7SrkEbC7ed5PjdGGcE5aguJX8uME6wsvPJhAwbTDUk25fCpFteaqMZw",
  "key13": "5e1vux6toGUUnNNoPTtgeFyEaHuj2Ehdw6k9hkPpFUEuzfoEMxosFnJW6p3f5YMKtEcqesRAdcKpbzNZ93YhBnTE",
  "key14": "4oRnfK5HSd77T4cC1rcX3MPDeJgP72ZiVGjR2e2sPmMaExgdHfhesEHp3Y9ybeJ2HBhmV1MmrM3rBjN1uP3VTMve",
  "key15": "3FafbLV4qPfCP8v6JDAmzi8pKiFcHL3NAzjv7i4Re27ZAhX6mkruVrVKHjsP1bLzCv8PcSSUCWuFLL8xRHnmXS4p",
  "key16": "4tbvLsqNEU6bvij1Gin8MurCF4zhAz6jNEHf7WWhFv1ogL9kBQXAT9GpK3pnZqKzSbFm1Z3jNSHV96dY6egfrYUy",
  "key17": "4PxBGrVJRUQpSyVkJ28pLwYT5Wm9vcaA7vuPe8AVVy23YnyTNq3pECKLo64V1eZi6tsDnPFWYdJhiLZuuoev8d6i",
  "key18": "5jS832gBLCwqZTgJt1JQ7WYe3x1AgqzUoovp8UjX89orCGxMVHhiu4tza3C5BV7qJr8hW96ATA9zxeoteAPeo6TR",
  "key19": "5oNrQV22161ivcPxX5orYLJsbARkRMt1Qge8wzf32auBwc3j6nc8L9jjVeYbE8TAvmVJjBvS3vUFUVsV2uKXfwt4",
  "key20": "3Vcj8jVQofJA4AwFnPKHr5Lzj83augRSF2RpRURtuefnxGdhfHzZKMkPujgF7mbZJaJk6jTaJ8v1DoaTJDDy1uSN",
  "key21": "BFxyZo5WhHF1LpQd3AYeC9EX69yTy9dE37wte2rL29wnrbguFe5Svt5fuW4toeQHs6w1vhfzyzuiz6nGaqDWzBT",
  "key22": "62WhtVALSHjpxeMQqU8B3yMKp5zweZAWPvhfhP5FAPWqwh2r8pnuNmky55roJB49aeq5gufzjy1iHwBxRJtQha8x",
  "key23": "4SHpzkdN2o8qZk8LQ7YgWC8Zf4szVACSnETFZ5UwBRz5FFNuA6PGrGmMXtpfJSeQ4zceX8DhYiTsctdggcwCnCFq",
  "key24": "4ja8VGv63k1okFbYYS3GhfsCMUjSrhiJMpLLViEVScCgKdAq9x67JDyjZjzdqAeNq63gMtTjN69r6gCiyMB48Bqm",
  "key25": "29MQKCg9EdtcLyNTRZPJbHCQXByUhsnAk1kbtFbpvo38WNSrWydQMzzKFttkKsUnMaKEhFWts3eYhwtpFVc8gvia",
  "key26": "dUZMmjkrwLjJ9vxTEp54fF2zoxWZM9DBCSyuWwqN5QZbxTVRMWV536BAdbbpmcEwPxEpNDNRjqbVKjEs6T8Xaww",
  "key27": "3wTpuynkAeFRoPnoBERax4gBaPhgm9h4NaVMtP5tTZcXQ3AQNR3zDmcTwf5HiAaeVKzibauKpnQZde7k92Yww2Bf",
  "key28": "5PgEYodbxRpJkGrh2wU6p5t4MwhcbShEXyB7YaqSBFfsEvoNkR6MtBh9hM6SoxqpJTBaHqWUxHALDDJSivT7DFdj",
  "key29": "4FBBz6fazcaQH443zaaTR6eYbWLexsP2F45uTtjgXaV78UagoDSm32vMCjtUrHTVMjUcHmnpq2EmWYZNAKHecFVj",
  "key30": "ehmNAw7rt8dbNnLU5Lh8hWchB3kJz5pVae8pQnNjYnGJeHEhyopBBpM93J2UWeCiJR7fPoEZE9pdYdQTBgGWYxY",
  "key31": "5UJZzG5rxPeoejF8ifWjWUevgZRyWn933us5gMQfvwyQPHdvSxyttWpTTHD87c3RUyz7Us8w18JdqjZWA5G7hGkM",
  "key32": "2AW3zL35M8MuEJvLQG7w1qRcBiREpQXZXcpQ4ZDEL2VqU3kzrMnuwwDaSDT6ctnEZ5YJbzkx8U5tTrQUB4rrBdj8",
  "key33": "2UYTgNjctmSAwaXrbq43FCKK4wF5PtodvLCk7DR6sTXmGRPDzjJR7ExmrH1HZFauTmbBA3i6howQXLtZr2kgVXFp",
  "key34": "5D6K6bVvbwQyeWxprx6VaCksBt3QxN6JpYmieEWktY9psVe5TrGbmdkNFBzVoJRrMMusFjsVZ8692W8cf91aU6qV",
  "key35": "3eFMJZxSr1o8tqn1XG1DggZZYfpd4U97b62PNgS1Efy2tmBsPTj2XW46Lcv4Xx3zD6TrRCqhy8UqCL6xdqbZXx5Y",
  "key36": "2V6se96BP7Y9sHDuZQW4BQoi9kp9ALJEdmt9tJkuH3kbr6yFbeS6hqRdV5zLzUERoH3neGNnhidz6joXc1YkfVKV",
  "key37": "4wnxRoq2rppMp3zhGQaZjdmpZUKuaGUUJM2kTpCGJ279P1kBEdzuvTMbKHb1DqLhYz4SEJJFkpJJJQ1NSz2uG3XD",
  "key38": "5kNte4Eyg8M9rkXrfxwkJPi2xuGT6PUQTnMsjVvyS498aNMWEXyMKUiDq5JiB78kbT7kFHzg9TaJDZZzhN6xFN8c",
  "key39": "4UGJRCtfGU2Jz4nKJTsL7vPRk9SsTcN3UB75Ku6z4HtoAYdQwbE4FAt8d3jATCJ8U457rZqrfNkPzPKwnUFjoX9q",
  "key40": "2p58u8AgWCA2dCDATqtaqyKssH8DLrEd3riBi4zGgztgJ5N9TeqJBaLGWw1Tok2iw4DUXrMdpGTXsqKRgaVx6Cye",
  "key41": "3fRvNNRK1Haw1uRW9uG3ma7HEe4V9ZJcq2JdDq9hBuGbEkrtL4SZyzGNNzNdtzpGMqaqfebYqARMCyCTkdgj4ogv",
  "key42": "5U58S4zgn4TXizSRCkvDme3DMmeiknrVL6BWmivzV6L6Q8rJHNLLSNK7bQHfn6Hauusr3xMKcS7cGv7ZV3M57jqh",
  "key43": "41ZgzHAh26XkS3EEgfRyqTjS4ZaiE6MTbcXhawDeDMnzhBqztcu9Z1uEZtMAfN7izngrBQRnNVjg35R2Jn77RWtJ",
  "key44": "5VRbrEsgSbe6vFtMqVPfCDYQ3sUGcDU22p1re22p6baHb9NucKCGfrQYNECUEqGbhccguDQAGD1hq1eviwfSwGFZ",
  "key45": "3ciPHMH1Ho5RjQhYZdHGT2aBLaqjynREjdJDTb1LiFHFpEwZJAseSxzPGyirLvnHSfbLyvQn43VULwca9x26nxdC",
  "key46": "5RiB2uphMemMzyKGEnyYdVNJcdu9QztvC2Ribi41HaPZA8nyHRdvsrHcT2q9tUsiTg1V4gZcZfiSU97ZPDDc2PWf",
  "key47": "kLhYLCjkW5jpzX1jD1Q6UvRoShZ6qzKFftXvF574SFqqirLhpr8Zw5B8LSZ88BpRQGq4QjdUdMe2vpnhbHtZF4t",
  "key48": "Rmgz1ZbvgxmN1zZ9JnBDfBLFfStc1ystRsmekwX8WCTvTLCweRBAnGVZDZxAGCwftVadEp1G6yQeuLiYKGA3wFj",
  "key49": "2vfUUYUz2eJV1EzuCBw23rAvZB9WTckjBGjonXD6nyCueaZR8te8MLFeoyEZjE81HwYqNkUftoPQdhjVVXUZ2wPA"
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
