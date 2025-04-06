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
    "3FQVYqkU5jNGHLspKbziBiq7uykNKDjKjTLmdFkiFHkGNBAYQ2NxaWGHWZAwyqMVK8wBqQnxbVfLyRuq1r87jaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "621t5woL5SXaQAxw73dwicnwRUUc5RjCxw5yscJ66naiNaEsGAvSeAr6wa2HGojfUPWV88Y6K33Rq1AvSZ9b9AP",
  "key1": "5KTRXxtoWuWsuGjyzuvNqfnXmN2MeVMGaMMYK6tYzVfE8k5PLg3FYMAf3FcRKffEJKH3hTr6VN3AUR1p8uQyLhc2",
  "key2": "32pxGmpbETgQnhzubsQSvMG7PmJTqWKPwP7jWQChLqf1iVQ8kvBq7y6s585BUJ817VGELCc2ZH4Fc4zQhMBruNsd",
  "key3": "3DZxsz6tXTsAkMV3Xz1EAqqZztVsPNJTipcdK3HMQgHLPy3ajn9dwcSrAGJGiZqn3EbH6ttPQ11qtrABNzsss28j",
  "key4": "5xFP2Mm1E1xbczuKoRKx6BZtCpcJuzJVwhdFnVkTGeDu9xyCgPWtc1Emb9ssCHg13ZDwg4GzF5XCjvXp3m8mgHvi",
  "key5": "3GJNKm2jhHwbHLYai5R3DTn9srAFNGYpWAL4JtdNHYfb7zNqWvbeSmCEUgLHaUHzFbt5rvV8avyBfai7633LLkJG",
  "key6": "4nt36yEMg5anmYQ6Zy2ovKLrhRJ26UYtvN2bWkLrm1wCsvFS8xNvGbec5y25eodNSKuYqQi6cSgyuqV4oiQfPd8q",
  "key7": "3UN1r3iL2nDj84kz64ypqxXdSG65rKkRk7CsqRPq8WFVX4k4Xg39XzJhEXhbTNBGDcejNm5a5yU5gqXMLpL37Me9",
  "key8": "3Lu9q82sVp9HQhXhK1st8EUQJz3CDTmqdNAHGC1SFaMizxniUW9G7qBUYK3jEnsi3mETsR4esALVUZz1A283odHW",
  "key9": "iyn3eqT9dxUvLFHNeZCpp2ityR25ViQ5SnijjJucJiXVBFnunVPq2mZW9oLiBs1qA8LL6LY8y8bmbgj7fcaQEk5",
  "key10": "sk61o8ygSmWzDiKiT87ex3A42aiZfYNY1HrDAADPra2juzmZHCaZpPSNhcmVCLhBUsXkNiV8ipi1wdkvatAZ3TB",
  "key11": "LJ9sGEs3Kqu4hQz7i6MG18wDg8jBbDWaRq45UboE7Lyo1Brh9SY7KxQeFuAevmucD1G6Hv4zCJSARz4NursMZv6",
  "key12": "2BZ3XXc9eGbsF9S4hwkMVM841G335u8LxvS35rRr2uyAD5iBpit7vW6FuHEXHQgqRa8w5Z6EGJTXyF91krwbfURE",
  "key13": "5GL7hc2hjkkZBbG4NntRBi484KeixY1fxBZKeyN6WAUhsJ3ZVk6BetshH5mPcfeqiC9YErRkawZCkoJVG7Ut8d77",
  "key14": "4neG91XbgZKQxoNdKhR3D1NtmC3sEj5PKcoHLX6Hk2PpfyJ6TYRqrMhDZzdRrF97L8TJCCCT7WvHqAqWwQV7rMgi",
  "key15": "5TC4HMpYJdeGyGLtMzjFKZb9YyGDZ7veN3WUsKsMD7EqqccjgQvsyHM7EPTChSGNJxHAMowYQHLxPv2SGLw9zpdm",
  "key16": "2CcJvWWwWHe1JyXd5CLuLLgFyhkMiDu47jna8EiBWNRB34karSxs45AebWHP63S14Nkok7DrATXALGqxXSUmmkHi",
  "key17": "3S6tmocevrxkZkvetEtuhcTYWyWYvtDBdRgieZyQMgFXXzFtLNkzwuAQ4Vk11pFSAc37ZE5HQxrRMpii2wnxYNjK",
  "key18": "5qF5kZZaRMmbK1JhHTVjHHxFHMKerzhApm5HAB9RCeQvWP5BAGVWyb64qFED89RChzgDTPMawqrDm8kML9vJys3P",
  "key19": "5dqLLfo6eeGpD3oG7hwebQ518WoiAFtbmrGhKuhUNULG5YgdQTEQQy93qTbhf4pQMCLrEMcRgFeRQsw9Hek7dGPh",
  "key20": "5GUUHcNBofRdL28YhbkLgmWx6QCNYdLebXzj8u7NnHDvaCrxSPsVDqoDqTMbzJeEZ8osJxVCjxo2Ks6nFzZzPbXK",
  "key21": "2damXXravt53ZgwEMEYWZhsKeQbFZM2yTzqLsXmW5q5QWQ26VoznFvz6sp4AAhg5L7tqSsrKw2wSxQohyTvhMkKs",
  "key22": "3B7Y5zBeeZVKCMwQbgRJkFYTARJyakUPpve3pbpMmm6PZaWhqP8kehtWH8Xdb3qYgqwbHjyFcYTUaSFdSrEs5yem",
  "key23": "3m3Zn9yWLLsQL7WQZTisU7AMRMaEPaBLoZCvvrfGLfg1Y5Lez5sFn3YUz4y91SZDBYGzY2QLP72zHBbMJoC7YzX3",
  "key24": "Wi53DkWbAHmWVDfSENadAa6rjqJvJt6x3bqoJyZLkUzoL65aU3BqmUioQjiHD5cVeEnCLEcTbHwrMbWdS7ZgGpX",
  "key25": "2G5WKMWuEMW1EzRZpyR2VrLc6gQVm1kc8Hf8whqAdMEWCkTkfnVu4wuG6fBTvkKmuNAF6GzPuWWAiWQKtDfowEnY",
  "key26": "2wDEZPsqCjxVL8bWKwnsT2Fm1iRNE9hvFeCxPGnMPU61GZXP44136V4daeWA8164jc8cvYpQ4APb9Gr1cFLpsqix",
  "key27": "2gFE9XiuDPgVR6LkfJVJpcQzfuw7kcbHT6MbqjNhhopYvooPA1SW1ZSUwAP1rcyaqxzkeETsJNBuYepuN9mw67nk",
  "key28": "4eDyUUbAxJPYjtojLCD6RQWbw2KfknQbRAjsbQ2PJmBgDJEms7KtDdZH13vAKXPEjHjt5ri88aogJNKyx3Ptc2F1",
  "key29": "JtBy9s1aKjz8DoWJ51jfz8JUqgYTo5AWwykJvHksUg6oTMWaVXQMkS6JDkQFZxK25WQUoTNV1mV1EGwonja7Hp9",
  "key30": "5ZYpRbVigUndDWhsZhAs6D7ya4XhWMLqw2UTpbfpab3kMFJgQDa9QcJGMbZdGU3KnKgYa5puMCvzfmSyFqUdDVWu",
  "key31": "63pPZ5FtAUZxRMNJB5iUysS3c4tPiZTnQZ2YE2NGdx7QMg2MYNCv7jz9NFhgyLu1eVwrY8uYz3QYV3oefEAfDbjN",
  "key32": "446RyT2WBKWYKuxWBvgpGR8Ba5P9rBGj1bMxui4CCiNzMr82V7kTH7LZrFmoDZN71H2CcDdWuCmJnxDkWMZnbsLk",
  "key33": "7Ni3s9E9crgSahnSL9iohnPFYjRKwRc4JDeaPnswktMpg5BSoDXsZcCmXrYutwgXXpPooi3qEAWkHU17YdNRmfy",
  "key34": "3oPf2RsWqMtuG1Xv3X5My2vZpkMz9xGSbTtjZiauVd1uwk6r7DD6pohpEPPP1rifQmySgs8onALjPtJfSPZvD5oH",
  "key35": "4Gu87T7U8QD4sCERCdNE9YXS7EcJza7dV82u6cQgnfVcztos5mdFY5b77c5dsE8FdZoftezEHCz6kxAN73PurCEH",
  "key36": "2JrKz4udPo529D2ZqPAf76f4udmMA58ntALnSD2RSFE2szfXQcZyYnQbWgL3NC24sewjfb2RvPFCWfv4y4Txn6SF",
  "key37": "23Ypiv5WLfGu9VQbndFuVw5WCYskZksiUkbFzWeZGBxVxftA2c7ukdHpPLqU2aNUjFFBVQtZVLjfRUu8tVgxVGNP",
  "key38": "RJ5LpPXWGpL5j5MEBdB1WHpYN2n8NwJqToYwxuKqmQZLVw65nFFHjFv1RTjBjZjSv32LjjfLYyTKhQbRkZrVLHb",
  "key39": "4nte7648bXPVtVy9T17gw29BuZ9YjKk3Fm1rY1nqAKMCwZbedYmomPVW81TYpq8S6QKWB8X3fgqr4idxPKQ7TjwC",
  "key40": "64Z4UgUMaPpBAFE5PyzwsoMvQfdLoEPwVdf5Jcnu1fhmyRr6kF3UL2M6K5HiRrdtWCayyZaXBocoS5shov6x8eNA",
  "key41": "4J8ZQzyo2xEPgKwk87MkiQMCB2iABDES8EKDytcWZeJM1M3ovdzHzdKSrUQwnZ6s6DgFt1GEbuQpcUyWsMbFtfkq",
  "key42": "3jk3SPecCDcfP7r3uomKN7NwF47v677QattgvBKsufC9xcGmG2Aaho15n1KUpgcdeDAkLJ9GpVnbxKKtAK4LSByA",
  "key43": "4vEG8LJL53zYTgBcQCt1iiKxBwLpXZauHsVsjbQ6C6SMWBhhXcxbbXATzPCSvxfbedRkP2yXk8R6bh9nEqvYPPEA",
  "key44": "anoV15gaftETU9SHpegmzPG9SfiCKqy5EfX8sW2GKnx5mTxFBLfEqpuyF2rVWPQs3k95bcDWBSoHRETwJhRN4zD",
  "key45": "4pMrG7uxA5CM8QhXmDbrrWeVwM2Svenn32JvL1VfvcERYJ674aBnT4yFYYvFQd1ZANMh97ZWSaZD9yNDYUDQnh7J",
  "key46": "Q5NVYKfAcv8DAdGdQHRW8E2gKe36B5uQCiPiXDQoLRJme1a7N2FRJ8pyv9mgjuR2fHJgcbTAcUgPPFZmfMUxiQt",
  "key47": "5qQewQzAmFH9kYnb2k2giNcNdNudAr7Cq8pdWySopFJywoK8MW9gNaGeES2UqYo6TLHcQocmjXpxWJ73b3gHn8vT",
  "key48": "2tU4tbfwD13jGn6CvBkUpAFTispPxGbL4V3HjAZocKLLcEcoXqTcoqEDBXietyfxpcuEno8FkbnUzjiFrWwJzjzL"
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
