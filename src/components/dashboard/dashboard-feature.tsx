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
    "2h4HtKM9ZSdoBmv6a41M3kgj1S8ALPYwWm4zZcnrDyW9KjWRwkpACoWXWz1t1RuCSCHDTWnK7ewhoi3uYxK2wMBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36fqCm8VLLDkqhp69asoFmcVjJmcBaf6LreaKfVmZRsn2LNGZ3QAaEw4Y29hw71PPqmYL1WurB6mcw4BrS7oiRm1",
  "key1": "5TiDVoi8EKJnCWGjTz7AE9AESecivVVXqj1hD6GQWYnEmharDHFoA6gp4zMt8vESz5dnErWU4wbsJrVz6o8pupw5",
  "key2": "4jroNhf6EjHCjhMmdHXGMqdwfS3TaNrBSsfejhe7sQfFVJeRpvqDsM3VjobYfTzkzdYUpAyRGuz4Ne5a6Pevo2WP",
  "key3": "4jxTtKQiyvG1k7ii1R9ePTMC2SiY8PZ9WuGgJ4JK5GfS9pTqEqy7bTS6j7YY66ckQLESM41FbA4fZS8wbnYTH5aq",
  "key4": "4Wuz6mAD6JyvpYVXXFgBP4jTjsDeFQqwe45oAyqYjNyHEUjR4nfkqGxWV3MqGvKJat7bW9MKDbyEdoJGoTR8hwL5",
  "key5": "383UwirYsKDQAnNUJeGVzGgzKexkKRf4gXR6UQB2T8FTQmLp6VKxj2JaTV2bFzZ3UaF4spUUXbjm4Sxi9f6Mxssz",
  "key6": "5Qv8eDPiaX8fmBoFDTnCpanXPUSqqwPPQ7SjUzJwX7Y83Lw8BDdhzTvszo9U4s4HVJXPTHrj1oBicDFaxPbq7Pmk",
  "key7": "5HNFYw5GD7s5GjzgXR2z3nq6chY44EBQhFKCPz8vYWi7aNW97GFCbq2WZppNKDZ1uv8RoGSuhkb9JUwPehW2JEhq",
  "key8": "5hLRTkYhS8xcPjbxpJz2ZzmSuVyUcKaa57gq1qQMbiUK3aHKvYJzfCiLUCAbxHKTUHZK76WX38VaAkjt1NYNRroS",
  "key9": "3fDnBexABZGdCnAMm5uUsn1RgMZaukgpLnvm1cJxf7ycVVjKW2X13V97fMS8t43vjJNgpeqbdkTka8wprCkScMq",
  "key10": "27y6y7ZgMbLKcoq98bCDoVq39hpHpzTn1ZDnXM8N8nSqLtcjVm7Suo3WULRtrGV3vkqk1gYQZBThcAD8QuPXojEL",
  "key11": "2vP2csHMKkHpvkJtanXME6B5wWAjguAjX8fyJahSgorsAEGjCieKUc4svQSGcUtJzVzUFuLGvQycnqxHSgD4YDtL",
  "key12": "29CV77kDGKL5pW7nt2gncH81LggJffiMNjpFrDcLpVcYASq27k6cKTnbU6k25jX7CC2uWB4ccPKWSPp3oQhtwU7R",
  "key13": "WdGx13dg8BF4XaeJim3NB3VjQ4ju6762ZNEUqxz22mvKX4r8JxiUfFt6ZB1rsJVq6SaVRwRbYLYhh4rqf5q1XY7",
  "key14": "3wuC4n2Wh3wPpKSZZaafxFiieCnrcAAD8gw7HB7MaN1uvJNdac1EDwRHmsmA6fK2Zo1rwtmj2RNwe3yqCK4fbB5C",
  "key15": "38DeqxenpcARP1bgdm9TAwYUy55i5H4MZ78z5ExW1SsQmXSVi11bWdhGsDevygwtMLeFavs7dmS8DRWoVbkVAqkK",
  "key16": "4TNZjiva4tgcnJsPMEkHty8qdCPT7LvHYYwGDTGY8MSvLJvKErELfu7DRAADUj1BahTxb72Xu8yVVEDMWGuzEU3S",
  "key17": "ZrvxSJCD8eSFt1M5hC7usmQqsGS667cMdfNfUGrFukAgsxWis8iPQBh8N9ecpBPdBYZKCHP1Z6Uwfuv52vkPcwp",
  "key18": "5KpJb2hiHk7hkMJy16vgvYDv6R7NDPRWEiK2UAmgYfkE5bT1tkg9sEXD4LbZ74yEtqgpMXU4Zuexoy8rbpHHKTHH",
  "key19": "2TdrfxHsfob1YwEvBjmKwf9TgLh7vdC2rfz8kxXQiwSfj314PPPFyAxYvxFs2NpDLYDpf33GEMM35A38YSiMtKMQ",
  "key20": "5JJ8GDXtWi1vxts73PyZdq8YdYj6efX1K8Lc1o9F8wF2mwhCcYNGVxHs8FGEvVeDDFYutwrdUtG5cFt5bRywZrka",
  "key21": "5fzjKXhjSStAzRSYxzEJPVwNeagWy4pieq5SJQiKmVb6LprBKDrA6fAw5kgcpcgMruKJ3UhNb3dpryUYorFBqHsz",
  "key22": "4WY5ud5LoF87ewPdA92wCc3mVEi1dCgDAXszqQFEc8bgyEjWnCnkuaegEJQzF1bJTGDuXZwCL4pr5TTp9aSkSpsN",
  "key23": "3W8aT3et81EJYHBjTbXnh8Z1QZBYKuQapeYw94CuusEs2RawDkqzHNiVa9dvUFDM13bN4G98z7FcecpktBq4CdvC",
  "key24": "TiUYSsgaLRc8YhCX68UgmEhonHBtHCcjA46EiQ32aKEkHcj5KtJFf9jrWkjFMYTHJs9pu7JeM1eNYJ9YkiWv81Z",
  "key25": "4E27uwNG3CD2tazyx1b8wKHu15NYRC87EFxiSHwPzFhGcoMfMxYpJjoN99AK9vpHmjdPhf99vgbu8uu9yKTPH7GB",
  "key26": "ua645PXG3a5NMsnMi5wzFvqYBEWDJ2eVtaePaLSUNkbuyrXV7QVJ7YohtMTKW8MgksHNtj9S17Af2PJEWk7puZo",
  "key27": "3fh4vee9WpBiiJu2PJ9GAQNWAXAsRKZAHNR6q6hQzJzenf3aHkSpQ1YHRearmbQTdJ4aW9A1Cpiobjwr8bQXMfYQ",
  "key28": "4KYxkuGGB5MXCVJnK2nH6wdCxsSKsS8EwgKX1mvZjH8f6PhvRbnjXib3bChMTGS8nGPXm6xB9dFaxicR1G1zVEa8",
  "key29": "2fdomKPBDsFER6NtStFjBJo4gWiqWpf3kPpgBzAQqpmNHp3Mn5EUpLQkveD2T3iavJZbHoY52vnUskgo8FC6p2qJ",
  "key30": "Ni3T4B6uvTSvyfkWf3VymQ19TLoow6pnuw46HyAMjRFHUWrdNzZZgzjygJ9ioGeUXG4EaRykLGjHtia7Fy2hdNi",
  "key31": "5wdReosNwU6UeAN9BvwhvMfgYyXa7CDGV3He9quqNCXsosLR2ty7tiCuWLdkVeb3Ydz93bjZH1L3oAXrS964X1qy",
  "key32": "vQH1kDwdfHkRx6Kg86StFmKSTw8Gc6Nyt5Rh8Rh8o5wJ7QB2vFqNKM7i7oQmd6edkruFp6TzwA3LtU6TooGzx7N",
  "key33": "2h1Zs9hqmQKbnZ8GiRW2jYHVQypRGaeHvBa5TLoqwGNBoaKVdMepc3FopRqXeQLMbbgWd2WFa8L4aJukpH9ccehD",
  "key34": "4skfjhJGdoNQczm67ksZDgsqSctobBg85HRDPKSuSXdQMC6A6r2WGJFLhSzQMnvGUMgmJN1xTR764jrPaQPDPtWn",
  "key35": "2HbEKR11kUQq8fKBeQonDMP2RSAaVMAQJuQnXsKweJ1pGWbLb2epYbQ14bFKJKbfEeqJ2bpvwRXu9jNJhGRpaP9d",
  "key36": "kUtSRUXzXfT77ehVejJjLayF3aA2LGULj1VjTY7MqRj5JdLuDnS7iZqRdps9QDqyVQ5ecKF2v6TiMVtJKm6c3fJ",
  "key37": "3XnXSoeQv1Vv9Gtj1cQFfJMDYQ5GdRNbqEGqhxEHsrTZCrQXbCcB9x7QBb33SQvfZTzbZ9S2HZzqX1GK5QLdgDoH",
  "key38": "AGuo2pK1KVEVPcR6TLq7t92g3X4yAkw3pNaMjg9gr2BUPv25Yay4Yez62sYXqauuWXuzUyEdgfCPGHnSnWWK7jE"
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
