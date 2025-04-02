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
    "2rqhbVRgTNTXPN3KZXFYzBomhFiXPmxUiY5bLDiQY2P7Ce4kSDqApzjk1DDdiGSXdGiF7mHKr6TzYZB3AwaU1ktr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57WkQYcU6hXKktg9SF3RdNR33rDtjSxTY6ra8PtUYCe7vDfs5iQ4PWh1FZd1RMx8CoLG6BD4qXsgH6qgqfxnMTp3",
  "key1": "24tu9xUAKsfZStzPz9t97Cdat4evPBHu9yEcf9gqNQXbeJHDFm5E9YbW2C8BpjH7aZZYZhExJ9aYYvvFwS4ku8QZ",
  "key2": "4BkPUkZKoreeuHiJ4Svjp1exQqyuLS38aRQkdxsHeqcAkKQfYpNkLdzMVPRGf97DkSeXAGYR9s4HpW1KwtsoK8xN",
  "key3": "3PbXrfzqERtY6KF95bVHE9WBXPKQZN8YPYYbHhntqxsVzygQWe2SjAM7Q9ymSDpAQiVqVHTKC1LxJDSAD25CH6Ri",
  "key4": "2c6rfDUQJzjN3rab1ykoKszTSmv8BFHVyv8JRNK9XSu5wJKwNoLJLaDpt52S58h2hdJTuhQtT6AiM9dHDGzssRXW",
  "key5": "7SwbvsAJYjf9XeA65PYekXenUhHuDi64pdTpEDpAuCUKerhbH6GB2F3hiBHruXJtcAY8WyJMz6EGi2vvJnai13i",
  "key6": "3DTWJennJQqBVwxxP6Kccp2wAv1FinourtbV7drzBWbHhDv5f6LCBnssp2kb5Rhi9u5kDzmRJYCG9jvVkvmTtBnE",
  "key7": "3uVr9XznBHKbYMtgNMgaWZg5sp6xLKsBZwcwKxcAqepv23Euqq6t3wUFxjwjQHgFBs4bJuzf8qdkH6NTr8a3r938",
  "key8": "58M6gtej3SuXQFy69TdXXYL6HZfCq7o9nhN6HggDYYzw27pYpGiQUv8bYPSP5ApLXSY2TXD4KwqhyyDdL7BD8Haw",
  "key9": "3kZZRFNJfgXG4rQkMSXNt8G6HsgCQrurWbjTDKR7f8ExzratyCwm2NUrAYv8R8ZkPu1hp83b8G1rEqzp8YXrC1Mm",
  "key10": "4wtnpDQ23ze528n3GBFXb4FZjrZK6Ew95hgFKBxGj7dCb5AeD2zyjPmQR8mDQaREHpDZe3tKBE9ggzuGMuH86dcL",
  "key11": "4oqQr6Caw4R9NbrgdKHarzF4NCSJoYt3ngAjcXsWPWsuqFZay5Mz8N7tAnqcycHxnBqwYHA616kTJvYphLNE6Vi3",
  "key12": "5vteqWK5TaApbdSRrHYNdeGqm7DumiX3rW8mpNNK5iqRi4CRG8YS7DaxnjdSVzCfhCXcYxmYkbVcC3VHnxqjvqrs",
  "key13": "4hy7uE4AqLmpE5tzt7MXgHU1MLsuTmV9K3WTnysJ98SNXhCrHFW6SbBg4xVXLUDbvtX9F8ei8H71mQ9bdAgUcXre",
  "key14": "5jDix4smokXzwTse6me7Q48YVnqZr6ESisijdh4Fk6hnjNPFVoBpGjFdrNgTQppyTZfXoRSv4A3dsAsoG22yMXfV",
  "key15": "3WJhspBXan4WvAekoQz8eTYasqUoPKKYs3QiVM7Cxyy6qqQ8R6gMVd3u8SNLoEzCExbfwcKXKYrQQCdp2r9KTKtb",
  "key16": "56z83g3JdRjGc1askj5TGjJNHqhazVNjC2XBPboFPugYc1SJ8Vs8oFMra8fnZAjr24GMGtRJG7YJFeX5RgGi1BSi",
  "key17": "4s3JCaa45nAcVERBbkt7vEHtEwdbir72QogsEJFsMAsruNKyfz2ULzU5kUdiYcEpGYc2eADp4qBhQrH94rHGbX8g",
  "key18": "61gLr8vHUbN26G1VN4ZnqW4yaFRZhVWcfgJ2CddiPNgdHBbLb4EXLjznRmgMnDtkyJAptZXN2wxGjrDpJaFEDXwC",
  "key19": "25b8mgzoD5sQjsLXMYXgeY4Fxu3SNATUfZyVqzkmCjJmLmn1MF85Kn8XZBE1sLmfdfFN2FqC4sg9xt9WS5JcsWi5",
  "key20": "3gJL8t2apmd4i4YMczL6chTN9jjTcEztAbNFqhReE8PJg999jD36AyyhchMQfTX6fLWd9NUMFeqNJU12mw6tUbjz",
  "key21": "4jaFi5b5XuSQ1mY4b9NEMkbkZrvBRrqAm4YpfDgH7Q5eRx5CiNfzJRxqVkuBeX3sYvsTJ6WhnfNj2sZtuy6Bwjce",
  "key22": "3XfrfPNnyw2ZUgoWEVqpDPw6osLrfM7qux8Cq58cBrrHt5kJiwoKcJ2UUHgjRPJmUafn1xYoLY1Aqa78cz5ytaSb",
  "key23": "52Lwi6zio3KjvypKseV1hxzSitWsS3xZRHsL5eeuDdYK4x1ZU5mgT6825aJ1MW9pZdWWJGUn7mR2vs45j4q4FMt5",
  "key24": "35japnCk5jjEhiQokQenMkNXey3BcKkB48BxYc5GCgGdyD8Cq9cyxa17iVEX2bSgSLJB84ahKpg9CsvrJZhfFHxA",
  "key25": "3qUYZGtNxX9nASGpqGGrd4WB9nb8drVBcXthRSy76eL9i8MJq4GXjv5NsNTqhuv2Dz6LBmb7UwNwv1QTkNyx7n3e",
  "key26": "22Zh8ARBoXWzv2vBayxasQwwqfAEoeBp5pnaVajzBHQZytM1ufpZqUexvHTwCg329kdtJDQ157x7SKRTgrH3Rxpo",
  "key27": "dJLFT38WQsc7eShy3jRVA5a2rfuB6dqgvY1P63tKSgxCCPtvgsqf7JRFyFDNecm6EEMHtDgi2L2YubYkVQjFjec",
  "key28": "4J8g4anJoSpyXEr8egnpuc8RonFyauKzCfkTJ2Zc58YZ929e55TkqoAYicQFJmkquAR2wu4zcTtP454Rc3KLG1i9",
  "key29": "3zhZ1QX1q5scAvzYbPwMLzWWaA8HBH7xRDnM9UQuy7CiEGNL7TNQ8gRMwefSmvqHxBbtH4qv57ErNqHBykLnSASQ",
  "key30": "5McoGGPzWkLY9yAfTrEogdRydZ5peyuLzLwAosf7zcD51ZFuF8sXiKPhUoDpb7EQTRk8yqVEjferrMEVjJFxdPbL",
  "key31": "664oPmh9TG8MWBoS9kbBbgN51HKop5CHRKNax5H1m3n5sZF2ZsM8gbRpNhUVrwRdRtWc764gsz9w9jQWXHvtLGv4",
  "key32": "53QfVF7ZnL8yEWFVRZnmR1bvtwKzV95VpiXkf6Dd62v1a5p71HiNZH2H1cf1zt1GZn88bksqiKwmSQN6rhzdHCp2",
  "key33": "3WeniJasqGpZ9LX9cSHqBqhSjCgxRBhKpc9CZJ55ggWAAeRC6PK9kJ9iLjXdW7hySKU7u1saTmjQqiD7YKw6RweE",
  "key34": "3nB4WjBHhUfiA7h7F1bMr1TzhhaTwnMnDq9TP4TjnC5U7VKnbBbXHbAPg2ATvhboLKopsgJ7qu8YyPT7R5xkHC5t",
  "key35": "2342gqjZxNpGEcKo1tUydcHQujK3GL2DaVigRTfpsxtRonchwC6U5sDyy4UptARridVKvLuiAp5tsxw6ciiC9kJq",
  "key36": "3ntW2QacLZWETDY7nrKYrksuNrgANDbQdeq679CZW16f2NGskJAKKwnGHPJRWoZPRZnYpsS7wTCPQs2HhLefjbDs",
  "key37": "pqpVF45gqmmjJYgCWeNvuz7cnR4SFvb8SoENr7Uiobna8FG5dATyRm6q8k6EESVsd7Aww5DRYA4b3FiUZ96QdYu",
  "key38": "2V5xtdUtmSESXr9aJU8meRCPC2DMX3UnM73FJn8fC84foCch8KLwy53DVemirN8aj1R3rRgiAAKyW3UxWFoMbyRf",
  "key39": "53cbnYSXDRVzVb4fHwNi4FtKyR6ZcDPtmrmGwA1m5AaRwL3RUJBuR1DTZLpQMdQfRUZUKhxHteJ6pUrvemGC2S3s",
  "key40": "43dqXX8fZk9ufKiPxSUapMvKM1vMK2xkgjLho7WxmsnvG98FXU5itmHaMHR74dSsNMDPQjA36Zyf2SKKxT1PrfuX",
  "key41": "jm7UG4Dzy1b6sPM9FUqevkuXt57JKjvxGz9p99YMkT3JRhDLzuMxEqChBYJ9B9qesCwJeE3WYjspcpsWnjHqhZQ",
  "key42": "3P8xibMTNMnrCdNv1f1WJbrKb9suNdJKpuBaAdoona3rN8CscvPafEC42ziHJfPHHi3AupU5C7ieXLFG8So1Vsz7"
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
