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
    "3ZBMJGKrodt8egnGDZza7ucenp5zf6T4cna79HBJehwczouWHvBprnTHsK6dVMZU2LSSPEhDedaL8mRWBaQZ1CFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YbjwYskF9Q9ig1FYKFJPjDrDjxBUuT18qgNCSmdB5qmQ1L7D8SashWFYz1SEoFoh8H3HrJB5DCekmr5rafFBayD",
  "key1": "5qZwT9UiUZwNs7oh6qdiQodkKRRRZrnB8uiHc4Bid6E5AvxFsHF4hYiLLQXBQuE2sN7RgbgkR3eV2VXuXxruSjna",
  "key2": "2utMq76T3EQH9zav4DMdcz4ardhV9SJCu1uA7GL7us7Df7mocipBhnnmxbRqppf37Dx3X23mVUQVD4tKAqxgZTQ3",
  "key3": "rXGqtmSfsDKUUKov5YrbMSaMXqrdusuSiwgSzEHgELB6fMHgQpTECUnXm6WqFTxat43asMbwpfbj7TW9LdJQUPe",
  "key4": "26nXoSN2kcAWaAH69NTDhg2ua3rWep8wLgmu126PFsSXm1TfGDYbZF33CcQkvJ8DJPBggx9pqsdhd5nzK3QoPK9q",
  "key5": "3zQJGMV2bREasgiUNxUELYEvSjzXWQAFV4xAmNPSrVY4fWv12E85ab3tZMbmV29kgEWms12sGEq9rMvSLEbFQbJV",
  "key6": "254mPDGA3L9QN5j9H4v36L7JXDZwg4uJhKFaG3YmWaat89RNkphXes2xuM5bWLc85QF5A1wWnceuVZu1iQsVEvRG",
  "key7": "54hzueexYJakDuM5zb5d1bzb57WHskstNuhT8buaFsCzctJuSorsDAg68j3ye5zGBkJGkMShphg8wLzw9nbQ53t5",
  "key8": "4C6nsAcCBninbdJTY8D4EtLnNYW2vS2zufPkJjFsU22KwamYC6gpRizoiSpTX9DFv9EEtQqnYWk9DMT2Ce7tsKt",
  "key9": "2eH5sfq7JtU6tFD7SzJPL7SupH6YGjPKbsdbat5pW2u7AMT9n4s4kSLKkXTdKGw7PEwZQera8fqQudpn77RPco1S",
  "key10": "Nfhhg1rsR7VZyzEs1M98YT8JSxW4Cn3165zwQbqyr3SKzvqKMuhayMHse5VjHHkSJCxVN636JobgbXWXeWScjA6",
  "key11": "2i8ZxbtfsxKYA9QMDETp8eA2nWYLMxWaQd6AyYttRnpFQsUJumabqRzEyeZKjDeezgvLUP5FKFy5H8zz4gZN3p6c",
  "key12": "5tR63q13quLNMbQJNpizD4Qo7K4dXqC8qAoCAcVFddoXeYxsupMuz1DwxuJCvsptrBm4twtHwb41Si2TYmMr5e7P",
  "key13": "4eMhQJW8BS3LkuqY5xfJHumV5w45twFyF2eTLPvsduBnWjNy1dM8KBV4r2RVK7JFSabpPw9wxWcijB5wHk32kZ83",
  "key14": "3QXafKFt1ghkNcFcx82kUMmD2jrCexgERZkqHtDgGWp7L854a1jyfUtqbjX4YbhUJrJL2BruXQno8ZgrB1foDLRe",
  "key15": "5kPyRBYs7KPgmetrX5ZV9fLt3RjdtoqPNcmjy7Vx9HgA7woCQxu6RmCMDjXmFjBMvcuJL1om3ZdvazEZfkHyFJaA",
  "key16": "37TaYKMeZDtB5RzD5o3haWd932r1u5UcX8WRRSy8uzrh95UpCjT9nNjNWebso1CZVM8BqTxrLhk265oxBnA2Nmv4",
  "key17": "2PK775XWxXfqNm6F4UZGdaNZTM19bVJFRk8H23P7hhUGvZ4X3ZjGMPBErDz6dYnd1gHJBYKo5Sv9PMcUjFguLNwP",
  "key18": "555nsiLXuHc27fTzrQCWzuQ1u5bwcDYHvytGW61xiiyD5LUyT9craB82iMNnhbrY2CMLUrRFap1BwM12dYcCuZmL",
  "key19": "5GhcizKDTVCkY43R8DNmPwhmKQxRR2EZsYVbV6nApYBVxqxZeFsgj9SGX1UEHLTdnAXdbJxJMa2mJi4jYCBN7cqB",
  "key20": "2YMBDqtr7FjZeYxPvddN1iU1nchdd2zwvn8o5mFdJs7uax4JhjzEAkKtYHrH9DNEtxHHRLK2TgRoR2ikkhBMGmTJ",
  "key21": "639FAF3o5U2xsswwbXxf1jcTsS45YS16tdTJC34imZ8qKshYKLnz5sAwQEX7aYqcZtJacAgfV34H184sP7jTZy2Z",
  "key22": "gX9DUoHcnZoETaDVMZEdWo2cKu2SWEUoF7sXiAJFmRUqzVigwqmRde3QBrok7FyocTcwBEV1hF2MdrdLpcCvc3a",
  "key23": "3ppcHoceQu5GNSnPDtSbYpJVRv6WaicxLxP5Vt5zasYvDzkoFmfozzHhx5uesmXwZBCtxrDoU7GvYaxB5RLg8qo8",
  "key24": "659JWArnQPRqqeAPdgkGi4cWL6RcqhwJKKyZkdgZ86hZwcP4FvLLphntegAuxpWigLeUSJbeiSZs3SH3rQ6z5bog",
  "key25": "4JHgWwKqThSvuYE7Zidi1eL6esMh9LDfHJpSw9Y4UYGWsazZKrzupDHcRNj9PPRoMxqarofPq3Ro7nAHQTtqnrkY",
  "key26": "4N2CV4rAVPDpn7VEvmFtGuQqYdzTST1ogqdnNP3qG5WgnKjvKJ59Ag8BFEoTXaE2DJPnLvywP19mwHhjUwsDagVT",
  "key27": "2X2fBt3yKwysVuPS7fw4to4MsLQ7H3S9VXjhQLtR641BfiX4hVUrTrq2FFF4CpJYaaYGM4w7ZXKAnHiciaLsi5wj",
  "key28": "3CE9FnGJFEfJasJe7A6fWzfFQPedK3oVZXqwaiwnTJ6PuqDDp58pN2ejFebJLiBHnDftyM3RBqWqEtjEGUyf5CB3",
  "key29": "bMNbLYAKDPhsNUnoXa3i6CDpfwrqrT8UtbfgzQBf9k6hmRTqz5ejmaBAVWdvyZtSM9p16UJ9bNPyaYpWhFsLewe",
  "key30": "4CNb3PhfKMXA3yJiQDkoi4DqqW5j5XSRYbfH5Hgquw9NASYbuWBNg52tUdG5zfofiwyFEgHq4LJmbdSgY8sgWZcK",
  "key31": "5rNuV6vE9nZCUmSns2kUjcUs9tTcYsuk6NvFxza4KB9z64BijzWWuSmJwNYqBp4nBDNRvNhjjtFYc3tggSUtE3DT",
  "key32": "2u5A1bBXB7dQrwQmLG6W2TBm4bACnHM9TVcMVdbqXWKRz4tAeNrTUBcUSKsDMudfF5BAvnrpzmbdrLGGd4Ybs8q4",
  "key33": "5kgoeYJnGDACnPnnaFQYnzCFCG25PBatBoT1X5naKefnMjUbuxesiX9PPJf4Z72NuySSfHye9vsa2t4b4m8k16gX",
  "key34": "5mdcJqU7XN1DGMzLeZpKg8KjwNtMkeCbmpiWHQUgnudKUsTtbaXFoVcpuckVKs9SRt15EzyF3S7zJMdGsa3fgztm",
  "key35": "26ZccLVS5AWVh2TYTfwLGDVoFtkuWhdjA2PBA5Fm9MusLZhAxkipEsm5UvpBkGyYv2h3hwqCekkp9vPn2R8cAJuZ",
  "key36": "5t1BE4WRvcYWNnYt5drPxJVWoimLg4sZUdAwadL4C86MRzqo4Bj16iVkSLbM8ogsdfNbT8ZX6ZG8bb8YYve7DBCD",
  "key37": "4qHK9oSYkr7Hdey8CuV5Hk1pnM1j4w4ZwJJyzcDybcWuYCwneewnnMG39NXARgYpfX3cfSRce2bwKbXeesqZTFiS",
  "key38": "2zwCGwyg6dM8C5WDYTDUdznLPYyM4w3uQMfn9UcJUwB3TML6Pus8bSJzoVuFaQtBaeU77idMUn1U6RHo27qhyVZm",
  "key39": "zyyerW3SiCcfbzWnRdBHfa2C65tSZ5ecRUWWkQcHCYQeimT2QtGem8Y8GZ3WrimCyG19oynw8e24JTRYoYjSKbE",
  "key40": "5hT4fFXN7ZhGURSb5TgKxPdBwh7WycqV7px9NZXqrFjGbwqadCpaFWLyVCUYsvzqGL5vvfcxxts9akSTUUT1TSc4",
  "key41": "3uqDQ8KaxyHX9Dvsq3WhSQEaR4TDHi2jFhUFTXxmH5MjQMzjESQjEEDvvkjqDggAmo7pWXvtJwDP1EubWHFYtpov",
  "key42": "4X3NbnQ3eA3yTEaLojSgqvpywDkQVJsTa9NWQkxxcaF52JWdBAUhA6nM4vYNgAut1rXY43hLCSzhEDtrq4bcVqAi",
  "key43": "51Ue9p7wnWsGX6KfMXB1NVLHi3zViXeyhPkcKTvMaXkAe7ui3hi5awNwL2wdaXyzUNxiZmgKfNckjiDzgd9dZX12",
  "key44": "4UCjwcnqRc4wBTDpkUSbHSV9XE2vk3jXZHPZZRBCgejgD2zqCymuc9g8pjyRQav4QsGBGgfYKHno5MVPUam8NuJu",
  "key45": "5gvqeb5cP3GQbpsP7rZwuamBKMbzHhWukVRvK4kKDuFKc3GXdwLqNmiypXWvuuYtKP1tuyMPqNzpteE36LbZ1KyL",
  "key46": "5Gk5VfNNJVcMKwsQyn2oouVuRCVy48RgGLVAvAEM2iCGY9PjthiwWxDyB4FdJyR3iDRe13zu7VWqy32fX2zC12fK",
  "key47": "3dfw3nb8KCfm3aTpaDgEhz3Y9wCmdtxAqdezPCNaK6rMUzZr81DQ7eNrD5My4qmNWPr5HdKtvztpY7rQriqkvytf",
  "key48": "36EzRfVKRZz23VHSJonCbiTys6bH5oi4qtvn8ZKjqGj88rcx88v8egBjExXcjxWbsacA7ErBYkA7GqTHeZapDoFf",
  "key49": "4nT32LsjuAcZUM2fEmMLAUA8bHVSm8QRtoQ3tzKr24UAxDaTKxnjU8i3gPwADyUozjqpEtq5RXkn3LiJnFmNZFWM"
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
