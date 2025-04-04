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
    "cvVFRoNJ2N9MtMJgx4VrnkKpSScEHx6jrX9b9EKVm5U9a9ZTUSgL6EVKGD3gmMujeGfAsYtyc9qdhgG4f17pSx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nNKjQNpJQEz9j5C18PzKgpt32DzAY3XrRvLzEkcdbbQ7nvhCS1PzjLSQfr8XegcSpaGHai1cPWsAm7sTMci2183",
  "key1": "2FVikH7ftspb5yq91G66YemucivpBWvQDLzenaZ45LJ17cuV1BikhD9tSGuR14HUm74JGBMUhJ3kFWBjSwsvz9xq",
  "key2": "2BXLhd5V4LW34bCXso63gPuiF8Kd2F3Rs4uWEUsiUeetYKTkHNoZdMhBZhRuVVVHgV6f2SjGeK8Lz88uj9eEYZPh",
  "key3": "2m5z92mFEhx8GMLMsLRKLLH4Gr6u6cm1wJdrtvFMCX9bFRqoioiF6bugQPzExZYsoqrfivQwv4sZpnsAgH7dFu9E",
  "key4": "4Q4AQ3T9GxCwTQGNXQy2go99uC5eKUUUaxbka3WmbGmErzcQ3QiU7K88fkdZCjGTBFG19qDEBAQcEfkMGm6gzxTt",
  "key5": "3DF52qQGzD6VHSM2WYudNY2nXdriusuobvHvbDFj4zPEA37ExrP6FgFVxYcYmTBwCHwubW1LtveUf27KMLfrc8Dd",
  "key6": "3wF8W46iTDRoVcbUBHZJ4APAYpTHWkzucDGDezdEhToLZajJyjTbGmfeQ5KD8q6NJ41HsBjkRE1gikF4oye4U1C",
  "key7": "356SaSQnnpG41Kmb9sGkEphRvq8FKDpDGoZ3YMYgJwgb6jd7KKXf1JqSuMPHMbZrtbC4CZWSoHup8rXrfK5p6nRV",
  "key8": "4CVLPKoudbwQV1qKsMNedPdtPTiK1c1jSuRbJGQzZcyZZETiy27NDYvTfJBfWhZbxQ6CyEvZeMgKe8bJEPwx43t4",
  "key9": "2cQcob8CX9EQBEFjmCAHrUbguMSHtiaVsyirsHy6BodjrXNNXh2LPJ5gHG6XU4UZiGtbJAFcWJg5nXuSL2LGnAr",
  "key10": "5V2A8bMaz3YrajQ67hXtN155UQfq7MPjSVNqV862L3mApRfnBNYt8JknFYNuvoQpJAs1dUkFfKg9J8MN8koSqJJ2",
  "key11": "4Q3hduWsQ1LEbGA3Xx8T3ityC5G53xgi4WF2fZGMqQj21kLaCeotRH8FV3yqBRJdW4yqTo6AiLnYLvW8fgfJrbJB",
  "key12": "5XJVNFKqpUqzqxPQN4X3bsVX78NBMznTaNrw7o9pwuE5kwRP2jFn5mLNAwhDe6yZEcAHwrFZzG1xSy3FJrWysFMQ",
  "key13": "BLKNUFuPTHYuQWjsE78ibisJGkvwWScwiZGUNNYVJXACX9X1sbsac9qJnsHhyedgVZpQaaLh1mSwg7ybtHT7bGC",
  "key14": "x2mYCyv8pjPovfwWbk7oFkdYuPuNoX5Eyou3WVkRhVzRbcSXxhBw9sZRdCTPNRsRyCpBxkqQAaGQU1fiDdpxQq4",
  "key15": "35pCWooizQm41YTfc4bFWGHb4thgLAC2Bfi36MacyXdxky2bXwypbe5ewAk2t9P3MWdv9iREcaSNaVTqXXq5h3mU",
  "key16": "5SQ2PxXvCU44xGCGNVvP3duXeaKa2jLym1DoDj7yDHvTyJwRKUGgrbecKDzf1Ph6eerGt2ycyDzWNmJSnHh73Km6",
  "key17": "4JHGZywHe5fku8GkVuL797MRG4pwjb1EidoDfLX5FzqMB5Uz9C55a1cZE6Tjja4FB5ZbFHtdDDXyt6Y48SEfR1U4",
  "key18": "3rQfB6f3RhXz5U6ZZGdbmiUsnaqi64cWVkLndXV51VeshEFqC9BjypbG84cfCbrKgk7MoujGu26jjgTCKK6NwJSJ",
  "key19": "WdeTxEC5oLorRAnpohoa1HqiUWjFbzJvt9xT66hgAQ4oQ7r6ozcUTDx4Z5YwCh52kzQo7TShV5UqgsrYwoRSHVB",
  "key20": "qsYRANfT2xCZCb7EVZyPwMM365qZuKDtDToCx6rJaik2BQfW1nwmpNbEy8sstximUUDmNtw8da2fNATUY88F6uR",
  "key21": "23d34fGJCVUG2GAaCaR2opPvUkdaZbx4X8fuKyw3zhLnVo4suLcHNqzS1vxGjmKSuuBtHHhQrQaismMMMGN66joJ",
  "key22": "3nxcvqFnbNysZPZUJYnhAH76HDAFm9g5dVXAw8uqALHFCNKbm4DaY4RHgTWxP3fNk6dG8noY4bvaJGrX8dap7UJX",
  "key23": "bEXtRNKx36uSV6tg5tVQ21diQrBmLqdGm1g1Q2J1NhkhHsKohtSB8Uj8J1dcor6LNbCTQ1FqryEYM8nd91Q6acY",
  "key24": "3voyd925Q1dqEcEdeHCePApfHd7ucFaZyGq9S3aiKsFRhdV6KEEKcc4LouLpKk4YNviYxRa61gFB4o7RF1QM6Q5F",
  "key25": "33FFu7DbGAZeZSWwYJ4VMXfJ7RHuqmYYr6VTp9UuZUCEa1DpF9mhHTs4JCJkKxGbvwEJqBTBFRQ6XefNnFdrGZL4",
  "key26": "3tEPajCTUupWfWDHWQm4n62vThFccdpwvgSjaoPUtwv5rNvtJ377rkefkCNdEvhJQmvgcaSRJFHKxzbxqE1bfa6c",
  "key27": "3V2fkXwpQG9kKq6ZQ9SSjcBa7C6C29b9TQaPcoNcKHjMoPebKycSpm4CiSjnkcxY5hHqdwazQdnfvaaLMNbGDb9Z",
  "key28": "2C38e5owSVJyQNXAzD1BTFgLduT6Uv91RhDGTcKed38cQBsD2Fa7dZRwrd8gSxusA7CRkZUztgbbZMyifQwSq3UT",
  "key29": "2cubANrSkFjPq9VmjoxqVEnf4PzzYw2tsiEXGUpjk7iUrDq5nvfZaA1RkagEQ9NQ7LGmzBr4KjsaPfP8ZxpUf2Gf",
  "key30": "8vqP6EggWP2w4UmpcRfGRhFwQh2DbhifeAcHK1eSv4yNzF1a1pDmAQGos4MraSYh7fd4rdbM1RmvrEGYQ4t7Xpx",
  "key31": "fmypEqrwrx8EsmYm4M6zQxtfsjMHXJViY9ePiLtEH46gf6DrDktFSAA6jjxL9U4QLP98uZsYr9M9V4kgCZUgM5n",
  "key32": "BzW7ujhyDU38CiCdCPCj2tz1oP7yw2CY9LWsaJSJMoaEdFHwVQXrwSKr5bFhLLwci9LAykNW5j7mpoRVr7fYBR2",
  "key33": "2VyBnUrmNVKELppgf1rUM7FDKd8951yeF31Xe71LhJ7nXTaRDD8kRd6U8zRqWNRujwRg7DrrUSbCd2N8GSWBLQFX",
  "key34": "5qjXhtm4xnQK3Wky2PjqYr6xazYeAcEGUDNqoYH13KXuLMbuVSzaj6BJ5EWewpFGAWdh7bnYvkLAishN5cxsS5sc",
  "key35": "ZauPqQZM3RV1DJVXuQFU51pS7wZgofodMUhpoQneq8qV7gv6MLmXj2G6KYiKEoSsshch3Z4hAxoFWCsdFb4mLXr",
  "key36": "4xMW8dH89VJTjV7paK7DRCv7SDVd47aVhK5SXkEsESkPWcDKmpk6UWRnmLD22xjJ1PrufYad1V8TsPHYc5Yjmr7J",
  "key37": "3ywPm4a95RGMfpoVr3axTGpRGc5urX9bQdFjW2g7MW3he9ApkCNuCWUDPaoVEyrbP3mdS5qMZSUR6rYM3N1RR6wX",
  "key38": "2oSGGK6K9Ncc5XR4eAgYE2aZ21FiETy6hVAosMkysdz5TDMGvhVmXeT5bmaFn85Jz1d24TrAdLp1DjLhkLjxSHea"
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
