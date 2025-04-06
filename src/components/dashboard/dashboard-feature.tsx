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
    "XRAPsBqd4FND5ekh5FSapYaY6BgqpUKoDTeJJ8xA6c53PR7ikWAzfT125PnJLJouqrHvTC6VkQAXy8tRfyREZzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qAN8LPUtS2nEpHSF8D4xccR5U3JmX9srowdWZi91ELmWezSPKy3FKqbbHXiJqXpFjeym7Rx5sBDrpdX8uEHaRVi",
  "key1": "32P3xF5yNJJJgj8AoPokbgoWcTBTg5n6Q32rXpaamiPyXP1LxkauuCUpDPKp7C4ueEWrbXKj7hHEnPjfwhfcb7oK",
  "key2": "58mJ2fHeWrizGstVTcuQv1J4D2iMcpvYQULbZaQ2j11UfZqWjELmEdRyZiZbLHFP7wLZXpKq2zzFRMqdP9M2ugf1",
  "key3": "23gom1KihUACnaruzHXufUitivPMmJiQN9Ff4GrDqCqHcwuR8Ae57BGfsF1ERNSnPDrM5bXRVa79mBZQnh9Mjz8L",
  "key4": "2rnVsvpXisFdTEYX3XMJ7Bejj6nSYbdCaDBiuB5cNZ4H4jjTuaUxDmuYu1NuhuyAyVqaWqWcWa2Rx1s4q86Mr7M5",
  "key5": "23zA149QXGpoEdNujL5KmWcvBvuKEUYgGqRsCQMpBjjVThyiNvpgmkq2ckyXybnVyQwP3LPte24qX6L6Nr4kgZXV",
  "key6": "2VW64ffXNHn8Gs9F8tUF2LYdhdr3oE9CxVZ1TkPsRpsu9UC44WKCFQDwL3nrQaPyi9gn7LerkHzPpgccAcXTTSck",
  "key7": "4RVjWTfE4eHP8mXV2AVTGaVe41AnYqaec5UBnh2MCzDmNj8LQu4duXfFjPG5Lukj4YzsE3re2iDrYtUWQ2DUeTi9",
  "key8": "5q7aKdYyGjmLgekdsooCrVDnCa8vmGQRZKJDZAUANkb38gzKnkK5VqCZn8BWGNzrA63qfM4WJsabVCsQCB2NLowv",
  "key9": "42HfE3mA5QbYrvrwzmbiK5gYYZ9UeViHg3Nv4d3TxuX71ykAqMp2LeaL8yjuTDnbefh5K3VaUAHbLgjwViZosjzw",
  "key10": "2Sw3QxDRDUHKMMLDXi7BrHXYnTjbgGDhE3izALtT1yQFSH6Eumw28tTWMgnM86zdeBTTndpenA2MZcFgLHM9LyWg",
  "key11": "5Gk2AqtzxemB72T93JMCDbT22QBAAH1sCWEqbQXpT3mVRwCQzVG1y6qM1NdM22XkBGWgAuBEHPN1zydgtaSNNzke",
  "key12": "eg6cuks8yDxhi4nGWCqNbaSbFy6NnWVnZDGqAdr8nQFxhTdcfartSf5UmAmJitZemcYx2NcXkfSQ47TBYACa1fg",
  "key13": "5nXY4CcreFVG8xb7tvZ6TyyGX1o3rvfknaSZj83b9Xi4RwgxGAP7qty2EyZGJvrT7T6he4pZkeqJNjbEVjMpRQ9",
  "key14": "4Aqjz5QCAKf1Y83Pja6iDpXmHy63rw5wbCwsDwVso69wnUukJkSbic6UvyCg9mqPQMYnpPuYBRquxvAsxbRnQD74",
  "key15": "2LdL4JKAZ2zBHNBdmH9UN5qr3j3fHLgdKw86v12R9A2eZUmKyHe2K5RqMtPTSfJ7FYDZNrZ9751Ym2jQB1R1exhR",
  "key16": "2cDkjQFV2kryJvB8KwySLSkEg2RTd6SbaG7r5kdp7eRtKG23yUZGS5sGeZysJFGuVvp69DYDutHZC6bGviEXcP8c",
  "key17": "nJqMgcxeBEe1hoD9hqp6cXrvxnSkcf7KRyynNKr4yMk7MUfvnYSjhQLftYdyYyjgL2wJ9V59xRvx4CKLJYLYDTx",
  "key18": "aBdhZNbtM6oUps83o5xWs6LfFvgvyzxYC8VHjjCcBMB2FYXwJJYY1z3xfaCoizwT6ZhdNQmruNouF94PF1hoPt7",
  "key19": "5AUuxq9ummb9a1Ti6bsW1LWEcw2vAkhnUzostxVngfyvkwz1YTc2DUFZNegYuuW7YqwCiCjKCrbsgXoZeBFR5dz9",
  "key20": "6vwi1TyzHMKoDfN9xwfrxh6heeFunq8Vv9j6FANx8jc4A9w2yxQFgRq9hdqTsaDQUQFrnHxKKa8dCTDieKeckNH",
  "key21": "5BzzXvLAULs8hWv6DCBdZbcrbF3phE9qvwQQQ8Wrf6dC9znqDU4HbiyAeeh9VDkkbmgXYPe98Wa8Sha5sWiuaiei",
  "key22": "218qCzyeiXqdELoTnEyxEWene7VxMZJu4ALg91B4NJX5vCmjhYzDYWXwbo64bHc2ozZVbJ68irNvLjm7pGGQV8Hv",
  "key23": "iewVxGsdLLwp7iXFrrX192gvXhfSEMe4pwZswD9Fzf8zSfhKr1aVV2jtxj1sYRJZqamst4TA8Gy2aCxmmxwHXqH",
  "key24": "QrRAmKB68tqVyfxYEuE95i9U1uCKMrJVQLXQk5XbfrQyaCZxo5TBKfK2yZZtFe6x53YksjtifVxhZqADo8GRH6S",
  "key25": "4i5h843CgvsUPZuKWQdeYJnwtmYHUt7RGyUJww2znSdawsN85mpkjof7ZtRDixwJjq5mQ5cnZcySE2cpwrsegS9i",
  "key26": "5MAjztG3BCzMNMsoEVfrGaaJwYL3TQJp8aGnMvJgQCKjDK4XznChDSusfDW9m7MMwEMXe9oubXRimea5Md1GEG22",
  "key27": "3ssazzLoQoMhG6yfCx23VfJtY9dCsG5xFprnXjz6NbWr4567M4avENWkrKr2eaghuFvsZ1VtaFGKcHez9bFp84JZ",
  "key28": "Xnh4WjZCUWdWyNmFziyr8TcmwnmtzLwdebz5BDugn4osLqoeseMGeCPBEHaKn4MkUAPsoJnW57AZMrwtxzWamD8",
  "key29": "5dUT1EZ1pRz2ABRUtgKb6qXdT8Tt5FE4rh5gtpYwizeWShZepkQ6wDhKVkR42GMBqyAaUahEzX8RbXPdyZYqGEfZ",
  "key30": "5UDx6u75xGt3gZ5JtNUHiEv6AivvYExHU5uWyotm9imWSGgYsVd3nzwkiR8wv2N19pcWr17do7MWpHvrrZaxob9F",
  "key31": "37seu5y3Cwa8R5ycQvmfp4rd5jEfV2dCTaXGF5EBWJQKM7a1vnEey42bTsPe6pQqkr8SbLwoMYpmf9TejcF9Bhdq",
  "key32": "9y8KLgbLGZgjUZ2MtNiXjBxDieewa7DFpiggsZM9tgNMNkTC2Za7vNcbcf41NQWpmS34oZT5SjZr87qWxnHAo3w",
  "key33": "3ZaGjGeMUZPg7KBX3NthYMXP9E1NWka5LQzEg3zQWjZoS8a2vSrajUjrUFc9BVzezw5pcjjCaPrHEZ6MaUYs2TXu",
  "key34": "briXhxiE5JSzAtpSoVAFgzHtR4nGSqhe1hei8Wcau8YXcacTj1WFYTBXU5NLuVqHtZdZRAKZWcBerqzvaXcZYeh",
  "key35": "4Eypd5vmzpx6pSQUB3aoanPvgdhFMTC26KsJcCw7VRGDYqB7bwe8S6L3443emxiqGcaT7GDqAq9aRsGVMqzN6YoW",
  "key36": "4U4UJ3tNAb8HD9hWTUk24vhrZgT8de8Ls5bvc5KTXapMxHVjnPGBraAkm3KmaWeQDTuKCQiiCA8BiAvkZsWAuN3X",
  "key37": "3AiUK7M1gcxnLKKDaWEyv4AmKi87afzLb34P1Yh1ABWxVrdQVRhTGXXrc6wg8kq9y7baMheprcVQEvd74rVDhMMj",
  "key38": "5FjMVFZT2XAi9mFART7DUftsp4zSZEpEKmHow8cwGvxQqmPwxJugmWb6mf1LCNvToYJNdo9EFPsSD2PzkRWMWWwn",
  "key39": "roUBQQyVjbAuZtcKtv7ahAhnCoZTbDvt2iF79dGnC4opNQke5wjZD6hQobJBxsyG4F9moF7YdbAFh7JRMcRXbuM",
  "key40": "2FicgXjZ2yX7QsQuULmHQsjENYxSFuERNqF7gK9jApUr5JVyxgX82agDpuLsSWwKDXvEyY2BV8eZxWJDpDAdf12u",
  "key41": "3Kf6A2ELck5NbUouKtA8gbFdYdNBpE1yJ4EXd94aAZPYBgxKAujeTtAuEJf71njkTMqfJkkkAXWtPd6qAz5wzufw"
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
