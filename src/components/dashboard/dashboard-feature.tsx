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
    "5k5JpDEuedCudALPLgBPPHsmMnjQJiEceYe15JUpvCEjRkRS2H4Tun9YoQTAnCBmh9RUd5M3DHysfU6BFD7n9NVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZRJdyWaRYjV5XGyoa1cAtYGy92KFLi7Ww6gfyryF18FseaDgZQyozrjK8xSJ7XHRQWaXdqUhvxvdnxNb9NnNWfx",
  "key1": "5SB9wKmVNvasF5krmP7paEUic19PyePwBMYF8d4HzgiyoAdKMzCrTEhDYj9k39Zvxk33APArJrtyiKdvFa99VANh",
  "key2": "yfbGt5LScuPQbq4UxPgWLqsX83LaB9gpci4QXgQFTR4tS8SLEbLgMUaxFdDTB9K8kGcMmMrEDMcw9wWx1TYfKHJ",
  "key3": "4atzydceCQTz1tu3NtRwBNjT5By9D68g54KokJ5V6FYWrT1AcxnaztJkLU9EJA6x4MGpYbiBx4vhvfrSDHFcQcX7",
  "key4": "3CCb5SkjwPBmgFJhFYxkWEmUVPjtNn9x4bhEZEkPtZx5YonhC9NxtEQ7jTZWRZVV5qPWPGoNP2NutbZfUFQGJU5B",
  "key5": "48zd5A3ZtFftfwt3VYYNsRDzUJnEvuyHh3qJBzUuUhVM4WUP35pBq5higgRYBTyJayewoqY8RFMatcdN15FExRej",
  "key6": "24r8m1fx4bbKLfabLjzGk6Uurq7rLCY7GzincQdspeTkmehuhWXAoUFmvMWqjLqwLEWHQaFoAz1LcAZWkDVTPW4E",
  "key7": "4YtyFLAdGhwJqzcBDqbGfdbsSkkSQXC42zLkaUzBaQ5rsfKs3BFZmkFjMYiWP6Tb4uKQ6ThZihNhiYBpgMJzZoER",
  "key8": "2vJh9RCm5xWViB1xoMrdE3gdrUUjwEoHPD81HesegoZvuPnyaBf1r55XKeEtraKdp3zTMCKKCk1Q86UZdWoG26rf",
  "key9": "5kcfkq7vSrh8KWh998zSnWGGmR6YvRbRsUR1YxUgT2RXSUpH1cJah5kzjBUokyfkNXPGkRFVMn4VzZamd9maRDft",
  "key10": "3LoikCfEXTreC5CTZ4di2wxJaP6iATYzwvMxAWruRSE2mqQPaiK9PiskXaJk5Jf34vL7tv4xhaXpLusFTQLcGKbH",
  "key11": "5KY5D3cTMjTwSVAkHkLDZbntUX4wnb2Pw6UKAzq6VHNtL5nhmFCrW8DGRwPR6rtE2aUzCK2F98w9MVvXE9A9GRtk",
  "key12": "34n5yWP2sSf3oQK5nJ9yXKEvCi3uFHKCpArNfL3S7ZMv7C5SqsSvCe18AkQ6PL2YR21SHYxkoaYVfqbddUnZKRhz",
  "key13": "4H8D7kuKv5aB5unhwPv363ENDktVJAx7JQge2kYoHr7dWtd9c6DCn542qtKm4rZKkD7vEKwci1dqJ4jdTdqo8e1k",
  "key14": "5NoyLdA3sbk7HjatGzHCNfWspf6GcNyGwPuZDDLHByZDrhN1MY8v8g94G8mg5TCx8axgagFjzCz7hEZaNyYxm7wF",
  "key15": "4VDokqieyH7TXuCEEPUT94ayquU7bTWQMNEyjMQ1nX6NNfVr73Wu2GWMCUwcNhwPAdexqG6HzQusC1tCxZwPn11x",
  "key16": "FMVgASQu12x95eSeaGNaDjeBgTQbNp2GQP8WgDGbbXZcSHRFF9K8jcbF4r9aE5kNtCGXwHwgMdfe2snVuSLDgvE",
  "key17": "6t8ufKKD18LmmfaBcAQZ7WGZNwbVpQZjBvoqw62mLFmakr7hRcz8iUP41npi9EKSWLUkgyPAuvvvW9rNDhJgsWw",
  "key18": "2so8hS9wD6fuf8tZ1BadnZiN43VAtceJHoufVSYzjEQJW3eeExJGGQcZ3RmPnLc4B81Mj8zJm8NhXwvZxq4MYuNu",
  "key19": "3Zjx9f7hCj82ihngorLsb2cVsGSFMk9PJfaa6uAuTzKnkK6zGmVJ5TYDJqsKXriregbRMHH2mSFwLDvy6qAs2peG",
  "key20": "3bsaDW4HMoDwmUr7BM4coGcRTKD9Axtupu9Z6brLuXNmNrEycLzMnR5zXrhfuEVwFoVZwvMvKVL4F3Vny4xFEvAu",
  "key21": "4jfgbJdUG2shAoZB9Lt5ANgKNwkzJTWX7nPLc3XYwcwyJyTcn2V3J689CqHjnBbD64zLD8P1JuUgdBHKwCwBe4QS",
  "key22": "j2dhgZ3jgmx2Jgaze7onwqRfw9SLg3GUgi97icwUfmsggBXLhLuKiVb2LkhSKJ5d16LMpWkLvJmunrxAb7K8R3o",
  "key23": "4BGx2QyWTGD3Co816XdkgzcKg6u9i9mrXTm3QLBefiGvtXYAFnpNLq7EWbdBYT5LVQohuNF4NE6Evuvhu6A5bWWz",
  "key24": "wDzZwgwkqEKq6ntGeC43pk2GynxDyE63UP2RcYNtVHk99QZ7AFXAFYmDUHhRfvMEm76zYPFrYA3EV7SJidiZTuX",
  "key25": "58xLwQpvLSgvEZHMngkTRiXgKwdNEVv95yskiMiUBz7YpHqR4EhDQeRSmB6LN8MnkN3SLsUMK5vrsf7g7BCngvko",
  "key26": "2CW6RESNhQRS9YCKn9d37pPy9UvKap9ig7oGE5jVf5e3WXJa5ctszFf4zMZAvNczWipyvrASLTipyiHtCnY1W4LZ",
  "key27": "Kwv8dSHN6SBGsaXsCmU95Zdk2FjgYKuaQSFc3LoBqRayDpnSGupVwvmG9yZMT52mfaYPXiBpwCs2qVDDsJ9nVhQ",
  "key28": "2LDvvPsXHTdPXdyCY4Zubd6qytjkrNRK2tHpkeDjSZm7zbqEsqorACrjMxhFx8AevqTgMGHSWEJozoxAJXqfhm6Y",
  "key29": "87Mw9kikXYhFFyFKR4eMYedvAfrZY8DVG6C2nRnNYDJj9WF3fNi5EHuYUdUZyrkrN55xsaVUgc64LA66aWy5Gzy",
  "key30": "26KZpbdXek4rwm1x84PmnHo8PTNLJs8SX4kHNWPiRK7veZ4bKaE9JCegUf241cdmzrb7yAKz2tySHF9qU8Pf7QmC",
  "key31": "4M1cthGoyP3QjZdvYw1Dw6ExWkCMSJWFjp9pS6s5rQnLBATPMbYsykbEB7mkUrQgsXxc4fQwWwMenN1ZNrQq1P9D",
  "key32": "5d87sjeh7eaUsDk2yjo6gnpHE5og7bW4iN53ryVNQwspUp8b1bGjvo5V72LEt9ZRe5kt7vzFt5BkkprTiLHGcsom",
  "key33": "4MmoE1uXDMtZ3ri5ZieD97cahAzMyb4A2xJv5VJ4VsW7Tyaz2KCkXtgy9gyTVZFtAgMQ11Trk291jUf69MNkeSm1"
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
