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
    "4AopRCThEcndBasH2b4drGdtEC4Hx5Hw5vZrF1egwNwndM9unqEPn3QiWpQdURPZyd9fX4avGPEDajSAr2mxeDGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F71q1yqDRzGJrg8LPgVaANfbfUeazxBpWjGfQqeXf1QfAa41zRTLpev8V7uRm6jWaxyK9wjfPzJKkCoAitYRctK",
  "key1": "sQcDsDzo5u4tWcTdfEnSbDk4ypLvTJ3SLxFtTXmB3rhG9ygYqDDkgp75mMEqhf91qs71yHBEEEyqjjT9KyYdoAo",
  "key2": "2jAUBet1QLnVL5KUNbKp4p552Y2Kx93zNt6oJyAsfQ9jPdPotxBg1isn6F4bUgzWNu9nEJMCTcJxpDuKb8trF2Ro",
  "key3": "2KDRUYbC9o9d2uUSjvsZKUToXtJX6DumYyzFSo6ZtqQcdJbof27SQa9E4jwGQvEasDp5ye7ncuGYqowPFyYUS3jt",
  "key4": "53V2RqgKafga6and37UKNsW1JTqCbr7nHQ4d4QJoVmgVkw9gsF3it9pKRi1xSVUM5v7WhrT9AD1agFgsfB1Qoo2m",
  "key5": "5gF6bBk4Sn5wTS9XMPQgLhXvQuzeJqN5oNDECnGaYWFL3VuV2WRiYwHSnHLy4tA3DUdgb6auKnXDtffy5kFmGtAH",
  "key6": "37L6A8U9MRMDz1QHEHSTVL3ntETvWYKNYVfFDBAVxJ454ZGfPdNNNR2SQE9rYdNvH3DBZ6tMjoCu9AtQkmwwKizy",
  "key7": "5fnD537nd7rcDv7wokTnJdkmcWsSyJ5HJCkSiXEe4JQ7KVw5mQ5imzqKjHAPzyibmyAdYdAiFt8biVdmxepWftuB",
  "key8": "4wVBpD3qaGjsUkvNsgcohHC6Md5oWJknUcJfmkUj9uaJddbArxy3Gc52R32XeWkdYTejWvwCDqknL6qALD2Cb6vq",
  "key9": "4F2EtXm2MS3WAEWtcBBmiqDPmUXcqNKrJyZwH5G7i2Mj4T3QT36qPreLYov4gVbGPkMDYa31tXtsrjy776D88YKx",
  "key10": "65gn4qEet1vKZMvn96PmNmvjPuvnoBTWR5maqhu1VK9bxBUWaqwinhv6o6kkzKkRRdXaqhENJ2HxXchZJB4iAoeg",
  "key11": "4ydK7NXaZxF7haSKUH4nDJyA6wHeSyntTHnMF7rU9rkGMaGQvxg2LQDcXd2hfdRoH6yoiGVKM2PZxitBghNKJAeM",
  "key12": "UKKthKtkRvzzQiTaFtbV9dM6QBNX6h775XGQbApDnrAxJ2XMzmoX3LVQxoiJSX5ZPWpUJLpfKZ4NpaDRN3d9S4c",
  "key13": "2hDEvvmRwkTeos5MT22wC6SbRR4Zv4o3xJ271JLVXJfjCLGSRRMY1SXfqdnXE6nu4riwjsrsYtsQ5a7yEp9W7FqJ",
  "key14": "v3RugEmNGFQFP1g5ozzGcnxGw5w4M8c3CWCkfQoMzowyfMRg77th5ymuoxSsj5EgYXGSvFCjBQ8QdEnX8MyxLx6",
  "key15": "2DcYhba9oT2uGM9LjDoo232sXqEDxYubYbLdWhXnp9x7SYWhU8P7sgNpzGWHUDCDUbZMLYvW8zfsUFBm3EkhjuA6",
  "key16": "XoTVbb1zHjjKRBa6BN9vv8yrFuezYpyMp742mbE3jCRPsmcuwWLj2vs1C66iMPWP77rx79po5NN7mSmFT63aaW8",
  "key17": "4Vm5WvTBcLYMkDmuBLaw5CViRSC4zqiwgXiddipAEdizSVQUo5kgd8A96yrUTqhsa7D1s4iJRTjH4FajtwUsJGnu",
  "key18": "5REzY1P5es9E478CacPnWYA8jVuQAD85cPdbLwrPQFMt9UQwnmeoCbXL6qrXf2wPPET1wQGt2LKjc7tuUK1wUSfa",
  "key19": "44YnZVVC9z1EnysF2JnKiUUBrsVq6ANk9QXLVfTmehZfhTnFWkmaafWECAvjiKhbPDmBwK3hRRGYyXC3s88HAwsx",
  "key20": "5CMmbqQ9NpgJFyqXoieafvQrcmsqWNJQqtJ5Gte2Sf5becxx8Qo3WajboKyLxffTZWdQXve9sKn4TTbRz3KRy5pj",
  "key21": "5CiWN652zrLjhSSBfpmWV8JmSJi7Kx1LUEPzun9zzhHwXH6ozCYy8Yz6Xyi1J8tPQZtkKn6SzNKBepqiQNaq7qdk",
  "key22": "49zcyi6S2qeAqR4v6KoQupePsToC7R1PqAUVLcQF4VaYBeEJHzHEiJ6uHvy9dcKpZTLVftot7H4mAwPJzzraQNxQ",
  "key23": "AKqgV4gygxx8wnwtf3Jua4NFWyT2GJNoSQoducciMwjamPsdhp83bgyQjeYRm6p1BtXQ13EYfVAN249PUUher9D",
  "key24": "3rK7mqB9MakQRBNu1vT7z2TFE7972zf8nfrHR3V1quKx1durZy4pUMX64cqLuqRud5Uj7CpH75yQDUkd9eSCajoK",
  "key25": "4ZguzBcv8QSLK6gYNrDkCUyrcDtS6h2BPSKCY5S25gkRajZ7xHeZfKsS1Xsqcy94A6TbG9zmMjrt1mzFezkNuq2F",
  "key26": "4AABJG68s5xURKHs2aQmLgK1qTaWtm9onnshuJpk1PUGNSdgwm2QEdvoNs2su4gX2mAMwN4jrCARsrJLpYCSqpJG",
  "key27": "4tiZUEmrcwPRHn1ieveSEs7GePjDjZH6D74JG84wjWBiNmTDy46MPJoPJk45xZgxkyMxkRe3eohgRcKsqpb1HnMB",
  "key28": "35gap6QiMKhWS7BQEpjF73QJVZ5YNqe4zkgFkFb5QKuESrWJNhfPH5AW4PMFa4mQt5gYnJV7zQ24UsTZBiaNjLz6",
  "key29": "pJbSbQ9H81tSoUKMEx5tnVWtn3E4wAz8unaqLS2PLWgx3vRNvpyXdLPtGiytpfzSoXYpNRR3izhBtP8LdDHbXju",
  "key30": "42coAT3sXD3G2CFvDtVUHFWcDDyPyXZK7s5fBCM45QLswt6YKzhHUz6WHUx8HqrW1Mnnn7dtjPKYpbsAaHGsEmD8",
  "key31": "5xs68DvpwaNFd8EF1PxJ1BxpzmYVM3YnJiUzx7J3uJvczRVVmTpsXtS2fQRp4FFy3qoAEFtr6Wn2Gg2Bq5PTBH5R",
  "key32": "5DB4rKXhB8Sb5N7Dc7B7eAAyzqKQ7kFpWaFwyqBkZZnhHe9nEFsjSTRAHjof1BdyRXuvbWLNTj2vSYbXMqfoyjHs",
  "key33": "41N4bGsWsH8y4QV2v1U2Vve8ZfDSQ3XbkYfa7mzJWnJhX9cs1y3uPrwSf6urGnxWh3Tojt1p2kzcJNECXoyENEQD",
  "key34": "yHhmHX9fTkoUHhqrrAGKwY5sT6ncRsTREddVaB6xrLW3pk9auXJFcZX8YR4swuVL8b8qoSQe6BpmbqszjFT2MuL"
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
