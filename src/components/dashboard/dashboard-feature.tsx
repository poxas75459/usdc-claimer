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
    "obk4YPsNYVsBp7qU7GsrmanbMw1KwGXEzViFZvDLy1zHRDuR85v4uYgBwS5pA7TVBAiehLTLHeVJ7rsqYHebpXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wMvccv8yy6DGsT5ka83fNVdaN6yiTYA8ZrFyUB2DAwi7WJHwQGzcpQLCFkFhjwJCetYmBcs8zH2UjodbR4ZvFqQ",
  "key1": "3nL7umgVpCgYv8QLgsiEDFxxpposMAZ54esGEzxzwphx5HqniByu2PMS6REpaa6sdnQbrCWwLKgg9Rm8uYsxCfFW",
  "key2": "2WPTkHY2cKize8nXSBjipVC1jRDph9kd3E3wPYuKYg4c9hSZo7AZa99gkJgfvrDchxc99RTLHpmJrNGAfWGDNGxE",
  "key3": "4CxxVeTGV8uihwJuFsvUkmreGYJZhM4b9ohhnurxFSuUXq57U5JfN9FbD7jJ6tXAMspcPF7rSHgGFgT5KmhSH67m",
  "key4": "4whE4HVWsrqbnVNrWqWtiP4Wbsavkh6wdeKja6LdMg6ehdkdqbXrUptkXxiYm6LJ3hk3ccgSmYQwx4Pr8wKDZK82",
  "key5": "5gxjd2CQyEUkUGU3B8HoAhfAReWVujTg9dkD4VNPaThmmf4MEViK3BVYx4qHo1fh9uYu9ZrmxwvkAdbSokS9rYtq",
  "key6": "F3qnXD6Q27a5Ys2NBXrJkZe4qCkjYqTSukPnxsyXK6gSUKGrsAxxvTRkNW6mgDzuv1C4gnx8UJo6dP9BcurdnHT",
  "key7": "ACcLzb6NjcypfoqyWNXaRmukZJojsgTtwAvnxwttyddAWesCFEq3oxMn9SsnY2ibZsyYq2KgkeLgZUzkhm8Pyd9",
  "key8": "2BRQdAvWXf6gEX3QmrM5dyZH4xTDKq3btvq3GUQyrRYCd2bujQ8nvKd1mBhkGkUHyFf7oEUB3FrPtW3HZ19WBR5m",
  "key9": "45NRQLDyFs63WuxjPkMpyTEfpqLZ1XAahdVkn4xuFgMKpH1BdEooEPoPRxa6EuyoExxEaSLyj2cTNeHEa9NtBMvo",
  "key10": "oPKnY79qfm8K63dYsHg8DKywGnoUE6p3dwvm8WHLJzDhsFhxkuSQaQPuRu6mnHXeJRyj66waShPHTuohuoxjqmJ",
  "key11": "59Yz5tBXRpyiukpFRMftfuuLjCZBv2GZXpu7DJYw4x2pttD2QUaRPXsA6DskHu1oJJXRKzixrfXinbtDgiE8mWMx",
  "key12": "3VwHYYX2BgGXvc8RjbhLLNNAGH4VKanXpXVbikMwrx7DHa5TS2xJjQakamgvcsPKKFVEMhyfgtC6KoJGg63dawfd",
  "key13": "FJQRzoJuRH8GrskVNeYpSELFvpZi49EVShSNDVsnXNLHRtDZrqpXgduDoaNQJHfHJBjXdokemJGb6Et4tHSEjin",
  "key14": "2VgjvVAmjfPAaTvrnR84sxijhP4rHLLZBgk2zemVWzsJXbbwxPHwuLEbfiikDxwvmLXH5nQ6YQbHZxzrT42nSN5v",
  "key15": "nm8B5P1J4UB54wdMKMMi1Jh13yDPAhtQ5JazMkTpW8QzfSKWNg4xixHcxLjXyji7FHEiefJmJUWRVsZF99GN9gp",
  "key16": "LuEHipz7gav9zaasMoNAa55H2mqCcp2xWCBvg7AEJ5sNf3deT4TTmBttSUDJjmSLxPvqrZd5N2Xq5nXtYer7m8T",
  "key17": "Y2uMigf1YAt761WU7227CEgefENkbZni8dCzwFGNMXT9BgMrENy7irnCzkeLVfXfwrATJaQpubFf6GcEZLekU1Z",
  "key18": "33JnVoMfCezoU7oNaaSzWAyGVbqahv8uozSDn4wHV7nEcjFePsBgR2pytm8Geb42MxydEXsTCKFCXGZFBap4vj1T",
  "key19": "rzb19gnu7Ljxsazfrmhau6e6aDFYbmzya5MJfAJgAq8YJrK943FJfH6uM7ceGqJJvdM5XtzHtpT6asiJ4sWvxTB",
  "key20": "4y3scGv7hrpD5yS5Vkgk565cHsyYoYa9YLu3JuWwjUpYJ8e9BCgQ5oE5epptjBYMLF7AyUY63dSDS3FzCPfBEyt7",
  "key21": "4s4cQXiraYB9YgHqZUJe2buGjb3TMTaXyLcuEGCTrSgaxvX7tT72bCG96NtUo2p6enuv2u8RsSH9h76ujNBc47MB",
  "key22": "4aarDfy8HVmpzeXrhxn6gEnGoka6BgTKoxXxWbKvvi69weMsvH7sLY6FkZGkD95t4RmcEuj3ppuvH2FisPdm7HdQ",
  "key23": "5z4dpb6DL4VynR9BhAMwsUrk7zBSUw745NngJG8dt2RyK9WSb69SMYQNQVsEJLTcMSumLR56J2pqCVHiAwHKqD6",
  "key24": "5qd6T9HFc4BTJupxCuvbFPxGx4zgbpwEzh62cS2UB2GjgrUi76QNKxC9c6AWpFrf9VxyPTjNKFYmFXm8wmdVmRsE",
  "key25": "5r1xpHTVuc4QRYGF9PxaV83KHNKKEeNLFWBnmtazg7fVrq2YemMr5ZJT1hKRmpGk5kD3HuA5bLihojVZvrHsMpz5",
  "key26": "3Jwwms4pcV2GTvKRStQRiRaUnMNfQuYvgxT5vGBgXtL7PQdShztkRnokbejLZcSaCNu4R33BjCGCuH2MBZ6WQje9",
  "key27": "5mdqBxhrbvwEsqA1RTjfU3npS3ACeGhaJugLjmwg6NtMoaW4et7hTBuiVsm9GfnZNPAzJXCywa26tTsBAdKYbhT2",
  "key28": "4ZMN1pXr8gsWWfqXDdApDQW8JY5dUcFgmGGJoxbCMK1TzzQCtnUbC93XddcZuNP5oUZZMdQW8QXcgucG8Kf1VqqC",
  "key29": "3jA9PGLnvwLXY2g2MWEa8ZkJtFNYT62U2T3HMFDbKJmiBzhVLD7Z6q6QtJNq4Dato6D3xqoC53jRicKAiGxms7aT",
  "key30": "44HMQQAAKTsQfB7oXMcmoF6rL9rpmrmZCEqpY8fhKF8cw26eekwHw7K5Dy3xVGu3qzK9v6SMjoL3p26s7VrejuBJ",
  "key31": "2AMDuvUtVNbZgtEdHDfSLvdwGA7mmPMcpedEZ6af7NxgumknicsSV7c7xWnXviL4BQXaty9i9DkozfpUfidzCeLh",
  "key32": "2KR9GctC1LAyg9mKghUGFwAi8Vz2iTyoNRuR5JtSZXngm5XUDwqfQuw5C6LrKsvhN8G7bNha4KjCm2GMXHar4jyc",
  "key33": "25haUnJyhAgXu8BE3VxnBYB4e5tt4khjfgUZZkBTK6GXUYvHnx9Ud3wSZdgduynYqyB1dZ5mEuPo9cCsV8aJm8kn",
  "key34": "5mbs4dgzCsidKp6UhkGCQ5Q9HoJfVJv885CMCQNARuHxWFbrQ5ZkwHbYet8ERcAqPxZuMMcrdysoJkbu5vsF5cn4",
  "key35": "4c7vqsCZDS58fYn7ahVqmkkU2Ls7XuKDZraccWjYvq9wZy4FhUDrmhPideXpoMXpH5wCo4a9Y7D7adTs6GhjzJcH",
  "key36": "4yBpW7FwShSXrWs8U2enGMcANcrGo9Z4edvRfBgphqAxkv3i3irZ8jpu7mpaxmztySnReYe7Nygde66chXrmL6em",
  "key37": "2Bw3DoMzi3m43ahYF6HdxZyp8b34c89akuUa762Y914Cjz7Gyx9ob3zU8U387bUNZv2Yd6qztYsnWDjg22dFBZVA",
  "key38": "4ParikhcLy16tuEZ5j6DvDnCC6N42VKHXu1mkNQbbBqdf5iy54qkbi1voRWYqVV7gFyhbtNX1p4vk8di3YJdtJYk",
  "key39": "NyNiycSP2mAywf6eVkjNq1hnCuC8G8LUmWmNxdM1VrKW4vQWZKRrzwaL1RQgwkaFBXvtkHJaTcccaW2dmW5youY"
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
