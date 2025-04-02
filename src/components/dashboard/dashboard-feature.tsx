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
    "4KT3tSwwuaPfbRQDibuHHpQkinbcgQstRZyoMWXoUq98gjRXhQ28oAiGU4WsczbigkEGfdoYXedNFSp2xSVgNYPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PD5oMYTpwtBXxnkNq8xL8UBbs54wKXCTcBnZkZ3e2o9ZVkVZ45mtRWk2btUnbwj93iq9GZBAJhyrxGq6DEJPv9q",
  "key1": "5CZP5754CdLdj6xMhcPkGC82Gkcq5erugg2dFsfqxxTcKE8aFdPR4v8ungs2PqxyGMjYaChvCPjeBMZPc4WopdXV",
  "key2": "3oRqxEfgiEdgD1h4MzgeSsRRn8MWBgoEX2JM6zQhjmFudmRJmxQUWrrGoz8rWf3mMsv8D2rCE4BNhBB9mHaEQKYp",
  "key3": "5JJHWDr4JSQCfuDbjqKDGMzermGvTqM1pPqYM61DVvivXfzNPz8rrXdRcvb8UgvxzXVJ84JxR1jmUi5UYsQdJ42F",
  "key4": "5DzXqmPyh85vJK6MVTeTap9qtyFVk98qyAMWuQ5YTkG9vx8arENW2RSRVcEKKcfPxTZjYR9sHRXyyqh4cj4QZb7n",
  "key5": "4Gwe83Y3yqeqLuHzu3U8nRvwH7NJNJpfuGSXiV1uUV6yCnmLAT93BhEH5RX1pSfevUjBEaknjT2HBeyfhveXo7uK",
  "key6": "3v74UVzGW4YtX7kchtLLjyxYDGte8zZwi9cDct1re65kSRgc3xn2VPgzkDAqn3QTgbP6ESYY9EGXg8mGYLGn5TLE",
  "key7": "4Cb4DxpTVPoEKqczJwEfQFtYtxALahYaVX2zarGj6kXnRzsgFb81ebC9jL44h2KEp2npRYHex7NgPT3CUAPCVKxh",
  "key8": "wqLvxH649weo8TTd87r2oZUvsac7ypfJDUCYCqvd4Aq6wfiZRsc7e4TMjRgZ5ZrBa6NMQUAwFJqKghz6cDGFSrJ",
  "key9": "4Xo7cfDBch5e378DY78JWjNBx1vvscqo6t4gJM2Xi5tHhMtLdqR3EyjHCuQNPgk1YDx2FJ5Vw7RaxtJWXuxEtWkb",
  "key10": "38m7GUXUPky7YyqpbL1oXEBmnVyinudnkcZ5Z3BrLWwtDUGEkdop16Rb4fsyyY1XE4w9JsMFQE92Cq6MttsB4WDz",
  "key11": "2L9xKwmyJ8N5Wq9XBi6q9BiyG6mFfvcAPbaj95fw4mufsTkojbJN1MWs8kgX3mDLXYGo6BcWCXfhKgHM2dkuxoTw",
  "key12": "tda62WMcrovmmqNHbRvJLm2uyMST7JUzigQXXge1RJJCySmZiJJPEtXv1gqjWKmMSkLaq33s8qg3qzLBzkiPTne",
  "key13": "4ToSX6AWLCwwEi8dDnxajwGVaf8bddVetDx3btCf6mpY6A3UxbJPAbgiv72eskRH4nHdChsfP4Fz8yQC9TU3cH5b",
  "key14": "3mJJ5eiQPUUFfDdCskX4wpfLenYEGNffMaANjiVACVWjzAp4uuoqN7HaGWWWAoXNqKfPdt4vWuYTpUPwFQYHtrwn",
  "key15": "2iYq5CMmxQ1feUr9xSDq5zQZCTZ8pPyoLNwDttpcpqxxY3YYuWvZSStGZiKomvirSU9A7R6HGaGv5aB6PDDnQwwy",
  "key16": "4c74s2QBitDKMRG8W9DU5Z9wwKi97c42y1Weu4QtTiN5T26hvHsyUNypKMs7drdijpJ9nDiZFXgTFSSa5TubxhqY",
  "key17": "BR8GyVrr6aurgz3nEJRkUUNXEjxZFKhENh5iC9PNf87wfHEay543k6usynvozrC2mBKNqv4zUsWKN7G9UqkZuE9",
  "key18": "XJx99zacJ3mdpp8DbTKtLfNhYkvBokyq1rKdoRrswmXKUFByLjN8av8FGfcjXvurpHKt79JAphZSjw1V4mPkF5h",
  "key19": "f6bBVxMxoxBPmRjpX4uo3kghLQXD2Sqp3gPFA6wGk5SNnCfxHDFqf5XCrcQd6tzpuFC6VcfupXQkgaNFaTUGmUz",
  "key20": "5goLR7hhfeYQxMDGAJEcsXav3emgeohtYqqj6MqEmoiYk5xKbYdggJ3byR2bNjfbGwZqb7Y1iMJtLF9cJD7W6N3K",
  "key21": "64M7Xn4qsKWtWiZa9mNzD49b9oY4Lh68uzLjVf1ApqPVdseTGepJkAtAo5cAdmjjjmWBDcHvwzXEjouzr4o6dbNh",
  "key22": "3kWrFvTAFGmvNsQ6KbkYXnTLW9KdkvbYjt4VzsDVVpQga3WBAmNKZJn6nGzrvDpKiHD8d2eJfNs2fafReyjGq8DE",
  "key23": "342mFsiRuYq8qvDhU9ccEK7aNctWvpBQKPAeUCsNq1GEKRrQb2nNmu9WK4QBLH9A7jtDYMKyDJqT9RyUBFpUH8Qu",
  "key24": "huwgj1Djrzr4TsUS4n51uQPG6DjEG7HmiiHJ3NaomJa8nwFUNu8NFkmiR8xZxKDDG2SMGH9YJ4pnrxjVwvNUkKi",
  "key25": "4rSiPDRjYxmxzCoSTxzP3XoofcFa9VKPwDdthP7VjHtDZNDys6mvnVQpTqJ9K48ZsHDY3M1wbght73hPxKsq5ZXG",
  "key26": "3aNtE7N4tLE4sEeqRfKgwY4eGDxnDsdfdWjWyys893y5z2d12a2pnnexTdGKof3kN6VvHxcpGfYUq6B5zHdm4vyd",
  "key27": "2jcUvS14i66XwjfdT7CdUjWpQTxW8dgg2aCrGS1C7Ay35hqoQDnPVUBrmFTBT44b5NejV7TbkRz6SVN7zBjc6P7n",
  "key28": "3ejAdgv9xeiLwsteFJV8BWLJDDt8K8PqRrq8hjNGgJXKN21NikxvFb7PiJdJufnAZHhGsuL1vBSCy6e3QoV4mqai",
  "key29": "66CZQuyCe7ZwAVTJ4bufkKaxM5YVN54SGm32WRdbAKbEeozqmymi9PUtVg7gzJc3ac5WacHdZVyMjRfyGBHUF9WB"
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
