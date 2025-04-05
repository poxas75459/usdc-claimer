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
    "66vXVwJKxaN511Ey5D1vjhUsWRtdxAbHfQT9rApLBX6jVdnLXLYfmWgdk36kD5FPfUiQHSJ5uTJVc8o9dXwc3tJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38jfXyuetFMPX7uECSMj3u47DoTaTcQWWHA2skN2BapZ2mewdfed5JdRpx3tV6YS41k5w8gRNozDN8LjDFTUknBm",
  "key1": "4SxAMgGGXVnc6wgcS3kbEX35tUyfjvqgLPWMTkvCrVTGUXGwAUMxEkg6SMj5f7sYtuDNieAibZxKNqH6HY5uqiUJ",
  "key2": "inpFfhzLSoUjpzAv7YJTsUptrxR6MknjLvKyGWftSsEeBEW8G1p1ZYEqgWcQeTk1TXWVBpjZ7aUdLoeaWg3dgdV",
  "key3": "GgB4wY9yiVxPJqVji23WyjTzmS55PLB7cNq9z1ZhuQqsENJhxDvsBPpKXSPDzpNTvBJ546VvAB64eFgUmebAAHY",
  "key4": "3TJAF9BXvQ8DRXmK8UGaJ1o7sjUBQZYQY53dGQyqwW715G5dHXmHt76TvnjtQ4xGJuAwNbiSUw64odbdigz6Qp3N",
  "key5": "5CitLWHJxjp7CKucFvDYYaS9ozKZTv6EfZzCUiYwJkCXLmiBD7nsbQhQH8uw9JEnJ5bCAqXkQcevkx7Dk7eht2qT",
  "key6": "HNqk6FunYneHk8UyefioDiFpq9BgHuZbAks4is5YxDV1sXEKvZME3A93WKqcE1MwFAkVU9fbc84zQJtBKKZ9KNw",
  "key7": "3jkRpBckDgw3vdFEQz7Xa6QkGfp8X6SPjRHb2bZrqBP9SMMTgoagGz2KSFbjCBddQ5cWJKzSdjgT8gcZF2ZzdGJA",
  "key8": "4GZg51pfEfk41546drEgssK2RWjj8bi9kGmhnhftrt8CwDqT7JzrhWLxWUh3tNk864oqA3yCjLAGQcsy88Tvuj9D",
  "key9": "2jy2QgHyvvzcqtHye929CfVZydJ4tGi4o1YW8RKgGF3awzb7QK73LrH5mTo3xkCdJH6iMbCjC31HsAjo8dPgr1DS",
  "key10": "5FbqB5KgHRoZUenVnghyawtdYs6PdQccTdFhfU8xiWnbAeygcy8RRZWDJY85F3bYehbhj6ZBUtRiLpo1bns6KVTf",
  "key11": "22dCuzhQur12Cfr3f1QeebUH71tAEWsrbWbtZ7isdFscfvEhYFysNQ7NZteKeBmCFWb2Kfv44vypndErBjywzB2Z",
  "key12": "5xDZUuACBNjbapcfYRqA6QCWTnAkhGzuetiJvrytAu8B7mzhWeo9BvUkDjMApYaztTkYBpE1AMytT3CoX7X4zZZi",
  "key13": "2VKAZTyXVu88eMSXkTVQJ157MCjRdvj3JGGFJcaKcUepHCZcEaEmAh8Xcqq7WPp1uZG9QEGYiHfSovPPHAb6Uw2b",
  "key14": "5915Kvcmkb7itCzF8ramoSZLp7tdr2SuedXV9H6Ex8rZ1MeFUXfuWYXxqnsypGqRcum8FdZuXgRqtyprevztzm8V",
  "key15": "4UwzsUD5QgE2W9gYgm1ZnAD3zZVCygewXDCJFYein2xNLBT9kF5w2C92riXcs39AqeAKcY5deoyUBgX992gJgc5X",
  "key16": "3C9aEQwRDyUVUoAnM4sruxeNBsL1xfvwboEtuqmE5PFwiAY2tyvCczsiUdzcgwvMLZE4c3y6W2NkK5pf1idTSj6S",
  "key17": "5TUcxgXw5k3n2yDJRSxcKfaUT2zhPX4QQk8dfDmcQohubbubEwS9FTCoRmMWrjziX51A51iUACYtbJYCb3BPZTyE",
  "key18": "4sRGYaqfCaXrisARdhXtLVYXSKAh4cw33Qy6LZriEArHrMofhqttt7KLU9rEuHwuE89JLr2bJjQwLFTP28g1vvA5",
  "key19": "4zMwKc2WcXkFphbMqJbeV1afsjY6qbhUh9GUSXHPiUeYa6GuYTnwkTB54LTMBf9kcMCdr2hLwLkPgHio2nm2xm75",
  "key20": "2BBE24d5or7rmHV7c9bvfUzQ2S5ZK1BmJesbTmj14qzuGsDq4wqa6KPrX12nLNBhWA7ADFork1PsuQaDkvswLizr",
  "key21": "2tyPdkhLqmNiLKtAWiXvp7FmmdtACEnAbG1saNEn3N7UoZoJMjnu4BGTTm4jyuuYWZ4VRoeHTLmPM5LCecLhHaN3",
  "key22": "J1nyA75j4bvYN4chmZcGEFUVFPSoqn1YLnW7JCWXS3DZbDMahAyhiyizajB3a1CTXWsXJjZifYoBkG5UspgGKjM",
  "key23": "3UcLvf8PkLtJxgNhyhbMdKk8UL5Qwjutu3Rq52E8XFrt9Y3dn2Lzgw7fryKVHjYZatYLX7rZZdd8LaYYM7dTasv3",
  "key24": "2YjhaTYaLuQCgrwuVAvwaW6a46t9kGaUXf21DYUymiTjAdo4BQdv8SDo7B1kvFpGDKgN6FkWYJb9rKqNrAH7LWjd",
  "key25": "2yz2augyTsbpyaMDX82bG1B5jW4o3VDn7Nw7UE96X9w4K2p9NGHzrwV8FcF21p8QTeowgY8Tz9pw2e4rfogGsoB2",
  "key26": "65jUBdwHJv1Nm7cRVSZvWDLSbXDEhJN9G3WfgZmk4QBNdG1Zv4wjTVuyrrrjQbANid2wNXkHXf4weQBdQAvtzcKK",
  "key27": "2822zheqhgj8KhkdWugo7WhVCF5ys83jLpGcnYAGxhCpzHRhTiVu6p42CHE7CNsrRaH1UP2mhwUbrTe5Z6z9ugk8",
  "key28": "54Jv1rbMQdC78K9oGc1dTkmm2XC6u84VEhWMypqUj48gxTShuzHhLYoeW2idiHK8Vq3XmB2jnWmzineRShNmPKup",
  "key29": "5nbe1Ram7242v7zLzZok8q6zARZsEqrBGKGh6RrCNNpW6DNZuCPcjrVMqtcJvAsxiTYrMvnPXFAwZjkzy2uhaPbj",
  "key30": "3kf7SxUf8exPu7oNmCAzsCBw1SeuogidNMXPJdGBjwKP6CdxTwWh2uGoVd4MuxgeNdZwqoNsNh4MB4h8LbQHuYE5",
  "key31": "5kam7cvwULToDGDndFPUprDXqRh76cv1BgHhnKshoWk8iCvvkRv83waLPK4o2tJeip5ezvtybL66qgsFnWY6f8Gj",
  "key32": "59hM2CmUpHUim1KL3TKKkj9PjXgg1ouW1a5qaE3SBGpM43QnXcM1oR7ZCWf6SHEK5h8r1J1MEReEeafeBYF67xDu",
  "key33": "2p5XKEHp9nbGwF9yZpwnQS7CRGk8oW3BgQ72m4YYhaAVZTjw7WnzKywa1HX71uZ2Ddo9bVm7bv7JtBdAhT2QURZd",
  "key34": "DYU1TsLzqZom8veuV9mfffUwJWWkciVZpbuTqDPBnR4mzge3w3oAMgX4kukE5fSjQcYM3GRXFuyY6nGNbRNHCcH",
  "key35": "23BSpeB5sGoy556Bw6vXuY2MWtVHcW6BiSQ1razyUe3KYYnVJNz5pFsd1NGYRZNK8oiRMQFdNzdK2tjiP9mcgSog",
  "key36": "5qdvYHpDoNo4NkiwazK9UCHqzwtc3TsfTMW2uakhAyJeyrg9qWzafj5EBAX9recEtxXozLbHtmnjaEuRqABRon7b",
  "key37": "2vD2dWhNqpGwjnWe9gjh2A7L6VX3s1ZmN8Ki4y321aRCp97KMm4NfkzHQ26zGefvJpambz3DrxLZEeMGgYKW9aEo",
  "key38": "2UdpDpGApscUWpLiM4rVMLgkopFzzquBKsU6kt6MG4tjNbnWykRYx99rBjUcWUKxTZpyrqG6BmUzvn528BQy7KQN",
  "key39": "3NpaqUjX9dgxZBWVwvEA3EonRsW1akx8MZXU6ZqYmGivJVJ5q4NbDFSfSPWtwUf1qRMHd9BwAAZ6JXJMKtfzN1mv"
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
