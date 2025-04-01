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
    "EUFap7GqNacqmkWjWeLC6ytsxD7bEAYWZmBhDhCnDgxpaX8AaRjRVehFksBQoQAmTnBww3Skh1TZUCjrUFHizd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uKMfQBRxrcTabrmRP3SEWeKHzegaAoYEaQ7sXipvZCbNXz6ouY4WsVazheNsnPN1W8V5KQ6o4vrEnWLWi8re1h9",
  "key1": "4y346d12F5KTt8i5Sm7qBoc582nBGmYDitkMwFVsStCAxeR3KJ21VMzAa7yarmFhwy2MwJxPm6RVnBNDjNU5S8kb",
  "key2": "3oHrHEhUWu8orp2s3cC1QN9MvnAA7JZihMMeswpFBgJT3BZei1YwTa1yyxxdENuKj5tytckxH5viCt6ZDzLQhuxU",
  "key3": "5bhHrzve3nB2fr3Jem9AnTdbf7qzqiAN13AXfBLCkA7EcFLqu8oCV9we1vBYR4UYzZaqw8XDkZeUyaGU8FXrLXrJ",
  "key4": "3EEE482kajMd3Hnh4eqyEsKVU8T3gGTtxdt9NbXadYnLWnwYZqpT8QSNvH7CTak7zfLkzDUtYjvHMw4hn5rcFE46",
  "key5": "42nvWnkESpnvZinqfgjJ1aWyVrCbok4ZGu9H3BjAwqJRYDzsENp7B88o693ehWLDUkfPhxuDPncxxezgcM9P33sW",
  "key6": "7PsSPJtR9bLeLbJkNahDNgNFxN6iq1HXGM3Lj21SEYFFZeYUi6GPz7GNTBiEG4Bp2DuFQoD2NmDwbmdSvHcEEZM",
  "key7": "2USHmFovoNaMmFUrNpPsGY6SrWYcX2zqEicmQ4fV5mpHf8x3G5VKrW9ws73iz7QMTPpRDiX7keXg2uxYNeySG6jx",
  "key8": "3DU9hR9F5jX9oZ1RDxUU1Kx7GVdb6iwiZ6EZyiY1Faqsz9X5Z135WhS7QCrCfKbmmAaZwYS9PVgWKmi8eiU8Nsyn",
  "key9": "2AdwCTP3d4QPREBx47eEwkfkgehmCdBrBybi84ufaoRUcY9SjQHnpf13e3TynJdJR8So5oskfSSzmqRNqra4ERk7",
  "key10": "2wMMezuwfna8693Fag9ZKDVWDR78VAduuuE6cZ1vjgiAdBnYVsu521AXNwsKzdXoEcpBzqLPjzQhJTYc4RuLdtnW",
  "key11": "56AwtvUcRqZXJ6f3EvMQuCUNuZjKETS114kkLiRGT7vU8bVr4R5uh1X7QWU4Y6GrZJ8Dv34tUpuNCwjvo2t9W8Kh",
  "key12": "5WvYtmu18noXvdUN2YfTWzRM2DmzKgnC9KhLTL5CtWEk63PUUR7SX6jwwvNHrmvqJQkRCbE4NhZkdiwg6b3yCbBp",
  "key13": "5eKWfvmTFxXkk43dpwmmocYxVRk2xtq6ZWs9beAjPxqyyzQ8AdG14JvBqRdkTFQxhyJrMzNLhQFViTxw6dwZZAPL",
  "key14": "2KstcrsNRHytnmtQ2R25CLFt7MoCLVBa8QqyFKcsHjJrMhszQ3VNy6WZwwHkyiqP4nB9cYmmZYcB7CbG4x2zpAFR",
  "key15": "2aFjbhqG4ueEdW9e9f1JKx8Gt7dPG8UovXcpGKKcwSb6BYKgb6ukhWABQupEbdD1jMLmMfrtT4UcM9wWyKEF2tJS",
  "key16": "3Zj66RaPAx8oEZtHvxw7M2jahkZ8LMRfk8byDKzNWbTUaWFr8AaJhpKhnLhVZ3w3GryoZjTeR8gJAhaUZvuHGQNW",
  "key17": "5T1HdDHY1cMes28sYWpA4ToaRYhrKQUJbQy8MuLxpPgGk4w3hyf2ay6grR84opBK343HWfwPuc4D8P8bRoAHAKWF",
  "key18": "4WCMijsY4neEd3r9rdHGjEjYrJp9CYpiSodwjgKFx64yyJzkoWHGVM8vTyGqqvoMyuRuRkRpfLq7yJVUZauAp1BH",
  "key19": "MTf84tLvjQSEHLKQepWqcE4zy5kv55sMh1b8Q3Vemjf3X9eENMHamcBv6Hf5F4KSSpMvjhwGwZZQVZdxeYR6uVb",
  "key20": "2GcyvnmVktJGYCPQq6myv4RvCJvJw7onWAqsZGhNwRsVoNjVdZ9tyUTC7AR1L7KQTafhApXTnZdPXoCFjdnGygP",
  "key21": "5skorpw8x3TunSZubNhiWZYdmbMq58WEKVaq38ypeifjKfcCoj9GkTpKpuQCdXXkXUAawKxCZpitoCcvPR65c8ej",
  "key22": "66JMq8V4jDGNTG3pNuHcXX51qm97mrtHwA7de28B5dU2mmF4RPq31NMaLxd8ZHk2hpJx7t32Lm8r4retPEwey2Rh",
  "key23": "3foBpLqLVLjjxe1zddhGtxzCT9N5LjUD8rx4H3Sq1vRAsF8ymchs12TS6X9GHL62qCZo9JjmKFSQigvryQ5k6Py7",
  "key24": "2m6kUk5waBVDZzv4zC2jrHQrkrfEMG95rVZcGgvMvx2Z3i5JfeSvkNqqZTq7vLsoB4THJj7kLxJ9kSaPKBt8MgYW",
  "key25": "2uGtZ4AsRDCudrpmu8DVJc4A4qBjm2JSuM9ufdCPNbSphP8SpQswbWDpFvMPMXFdVuPz7HEPHFdjJfciSCUyQ9qu",
  "key26": "2VJTgEkF6sBrdQ1oLzGJ8KuKq4FrTEMW31pMNJ7NKxGSdCYYibsYKGqmuPf9sXxpPjD4E9DoRirPSJNgvFzo9onU",
  "key27": "4yGCHik52KuaqUkp53mYpFcJmx2erWfHaopk7CTXGB4SRSXnx3LvJQP12Map8hKmn4SSnPGH3d9Zb5WQjqk7g3AE",
  "key28": "4R4mV3BZhu3vecFZg9xcFuKJeQd9SFUqcuUUY29B5rhoaYnbuFQWS2v3HsbXKPZRDcwcm9e3c2yEfZxB3pch6qrg",
  "key29": "2AjtS88Bk9Yom2vYdW9Nn3rcyLTELi3JzWFMLcgcVnA9mzhorC4fZEXPHmRfhRkBynoTBhgq7gf6csNqg1BMRJsL",
  "key30": "5Myg9EYZWn1GT8pECV454gdV49SbezouXMuzdP2YvELtSkfabDQfd9mD2iqCw19FkqbmV8TuK2hqcSgKVRsFvU4w",
  "key31": "VxRU7HnLh27Vc81WBaRRcV72rAvPsrAmjq8fcMhKar7fYnQrfXXkLbJnXezDnWNuFfC5QWmQaaUcxZTCGyr8ZvM",
  "key32": "3Am9jQf2AFLW8SU4yPfhkKDZEhGDUSHG4af5bi9dtmZpGNCMx71A5KLPvGAAbLPGE6bhE12sLWhF8wUixwP54Tq1",
  "key33": "4ZaRmQdFhCvw5P9Q6ZH9LwtD9pjhiaDd2srYqoZhhDUNvKPor7mNiR7FTE3J2KWRCLMRMrtA7MzggSt1NQeW3SRb",
  "key34": "4F6pkkKo3iZihmvAKgHGr27BeXu5DfiziGbrkQGntXCtVcZ5fs4rnx5d1WTavTMhe8UkXMNSkS2d9oKR9UHP692w",
  "key35": "2B3r7yHaNrHh4Kn7HgMzrz15igLhHiYBvGsBdsbytZ5BSnqU4uyeuKzzvhuK8eWqcwrfAjE9to8YnmhamEDcBLvM",
  "key36": "2JuxGkaEzqVrgANJNyjUa5YYqvRJpU63cFGFo4hPWpuCPMYpx1ac9sC3DcneeP9Q4VoDgAgk8BHZrEY5EDHaUBza",
  "key37": "r9bP81aQi6zW4PpGzJr8bKaizQeSmfPbm13QB3U9WYZcsV1jbxPhe98ZYSNsoV6MQEmdW5xC1JPL44BczV9yGyw",
  "key38": "5Xvz86PCeBhPNsWq4rNP1uEJHxkvVyDmgiHSP7739PDUvRW4E1f5tDFBEtCFg6cTtXXVGxw5UD9Mfh3EYhKCmdSQ",
  "key39": "4Xp5B7k8efnnTX5kDMAJBXL1pUZASv71eq6jeQVqmU8c1vFCZEKGgJrQFDYo4VGSFvPAAtQKRyNcNKTA4JZFrTGN",
  "key40": "36Zw3zYWP7tJ5DgUum8kKgkpBz8CGUe9BWzcskraW3svNthv7sSzFr6vxjhReXk1WM9ae3dygDC6P8UTEjyoKvxX",
  "key41": "4ptV2QHoV9aWwcLJnnC1TRbQSBiZ4smq5PfKkJpXxaDBRTK114oHXea1mLB6o426P9K9JtUfpSx37jnomSYv9sc8",
  "key42": "64Rrbduvb1FuRVtmj9HnrNzgMobS3C7W9ZJ68UGUqRLCc164QfDib4up1JzzJ5jMsrwRnVDC8Sjf9jYWiF32MP6J",
  "key43": "4gd9BGuoQQqjkkBanY1urVSen8nWXbct6xUQP194iSidnxpYUtgmurzzNnw4atT4tGgHF7ZXkMbw6XsqCZeQ8mNQ",
  "key44": "aVaj7aCkGV3Gr6NkSjeRDLryJKtHZSvoQZKQqWbi6FmuaKktGmJgUZsdtJWx7mfPN2G5FhQ48X7v55bXbDcSF2R",
  "key45": "AcdFpH6KWqZxjSMQsWqf14SG9MWXLo53pswpCaM3dUfF8NXRBJUWHotpnYR3jq2Pcy1aaDg7crQ2LB5Uap4nFDd",
  "key46": "4DJh91UfoSLtp2hySnVu6wjGsUpx8h5uAKxAyuSqo69GMH8JNDuT5S4ykViH7BkTKucBRcDx58MXzhewDvp7Q1EK"
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
