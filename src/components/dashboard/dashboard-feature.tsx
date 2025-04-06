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
    "AW3cUKYG9y8wUWauY38xw84fEZr7QyvHBzK6W39cqwum3R2zEsKwW1XeVmHbREKZvdcEmAhpwNsHitDuYjuhjz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FGDHBakF4G9zeCzEeBsMwCVYR18aKuA82ociCxKHSs2R5JwWinPAHS96awgyvgzYMoZX5JNCpRoorKiBsirQTWv",
  "key1": "5cHdv8DyZYtbMut98z3XWoH8GvnT3U6ZRMioTzjPNw56zAjpZFJnABiJ1mPpxqu5iQ5S9b4E2CDPUmMT9uzfLJwC",
  "key2": "2nh9UvYwU7yHEGCe1QPScJeeJj4sEWnesYpKWR6w74mGC1LJTSwGFkevTSxf2hJF6VNyNTxGKHUg9yK1TDTjdHPc",
  "key3": "3MSSo8SjtG5JzNXXNYc7MbSspia29cWFbwZCt1eNthW4kUEuXkiS8tapn7LoPywfXK8rr5JUcv9aRqe7N8NpACZU",
  "key4": "2mXwzTxSosaj7gCBBwQqYiqk7Xf3wxZw2u4Vjg3xouYrPcDH9xrkoDkNhiy4jkYoxbUnjzewhU7Wb6KPqGXgP2XY",
  "key5": "4eHPZj3rMyWwteFWmkN7mnzYPUGB4N1jPi5yvj6y2Lg4JY8GPiRHEPjCLA6sK8FVKwkgGp4ufFuBmYb28bMyzZJo",
  "key6": "2CQScbpHGaGyCFmGwayH59EK8yCMgjoNkotX5GZP77VGcdHQJ4XBM4a8ZKLUJGxcR1ktGRDuuZrVxxuoNg2ebDvP",
  "key7": "4BfxqEigBei82PGVMha7fgY47QjDq1cjzS4nKaLnqGeEufzQeUwyCjRWWTSn7Q4LujFZnXbumNwRLgcNYzoQ45N3",
  "key8": "afctPXnwEMY3PoHDoYHg446RYuTHCiCZXj6UM2GTVK1k1y392BEYek2QWCyamR2Awq7kRrrBs1qRf9UgFVHjoCB",
  "key9": "5vSwMkNnALf2qtuTAvczwJumj6CLqfcs6abX3M1wwSkFAmusYvHpV8TLVxckRruMwe9BZddzpEra4pYGL7TFVyXd",
  "key10": "3x38cXS88mhj2RPeqTqA6ZhpqFD8zQFRHDSHnW5TopJRQWe78wFb6wm3WF3bE9FFGHiVxZWwyKSxpeNT1xVFn4Z7",
  "key11": "4Dp4Ak8yKf1kNDehmgfzqed9DUUaqYUxqFTAXWLWweRAUr2eEDNHbGFv5rvuFMZq2auezZqAKwofCxNWxyM25yxx",
  "key12": "4z1o7UKkujpFtidqQEP1N43HXbKQUGd2GaqN8NodNoBbVymKeVgAdQbu3mWau6AMxB2kTDAwfi7mGdmo1CkZr4rS",
  "key13": "3Em7QhwJjvRjdEQs2Xy1zNRi13Yfiuw891n1ASJiNCFimne8ZDDLPC7uweCZJB8UQWyvJXh3B7EVcPvHLQa1vRab",
  "key14": "4k6QJx1pWXZJsA2b51sQ3yrey8dPfhfTM2Y9kvGQi25r6i2DfxJDAPL1uZ2mebyy3aa8W7fCKngYjJXGHdRoMmMR",
  "key15": "2TxZ3T57vCRZS1ya7xGYsxhmEZheCiQMiTyVMcCN5AZZQ6sTiF6phHqDFa91s8bDxKzvDMPiJ85opRUwEd1nbabU",
  "key16": "5xCmcQo3fBS4oDJrWvq9jEnVRmkDXZjnAK9iP5PNzR6mJWozQ41TxfV4pENzjCiEncDZzpSbUbPu3Kyfr3MPRisq",
  "key17": "36ZVBYDLkfCS8M8Z6Vdj53mY9vn1XhXVy9YN1ZE5rFgjkDUD2V2NNLprkZ9XLYBnpZnatcpXY7viVNWr6eVwFwkt",
  "key18": "3e4ksyYvMZGqrsE8cWso2k39C52UKof5TnHPTSx6bDSa21oEukt1zN33mrWda6PfamCMqRjoJc2dKFHPmu2NUP7",
  "key19": "y4y7rj6H9UjfHtGrG1s1eP873ANizex3wyrmjnJ7sLt8Ki3zX21dAj3tJ6WbRjB6GZ7XkH9erNxmczM21LgBJzq",
  "key20": "4u9wWnegbncocfJEzYgV9Ue9tp5AzvB2SGrg6N4JNDmQ6Qb8RRQ4wriF5VySRz6p1CLntqU3NVLSWynXjEmYNbuS",
  "key21": "5U2Dnq7WEPXHXnrNd7D5AZkRMXDA6B3c1S73L59f8vuPys46EiS7G8sXv85aFxEEU1ow2MLvZ5dgHaZp1md6UJwd",
  "key22": "42j1k2zMb91TwKUPB87WAc1xf3QqRarVvdXnY2HPyFH3HdXrAu4yUcwTujGdGTi5yWWGkHyhKooPGKzSUvWbkwUi",
  "key23": "31s45XunS6amsMobQ9aASvdkGwWW9FvDhAjeZHhLjggiZsL8QjW2Ym85sogPeUW98RuMDPp65WYFDscNrQKh9rAz",
  "key24": "5bMuDcGwwYGLysBQc7nLRzTtGyfzaEsGpWgcBxgWiq41xycJhXa2XuxZfsGaeCF9CP2bPzSs6ffg4pWJ9wndEtUu",
  "key25": "3dcCyLmRkHD1PN2qXA8DJ9abLknWJdqoX36CZ32t2dfQ11PCZW2Ve2KSfae1L46mx28Lowiad7cAnzbyA6Mt3J64",
  "key26": "qCyjJdQAVbQfgD1LH73d6AYARziH28BoEJabFhAXRXM9jfo3EVrZnxt7VDbX6Go6HEYyCAcgPqj7jmQaZWCgXuJ",
  "key27": "3x6SiKvW3Vd1Xvtmev1v16EXKz8JXSh5BFWGtw2KoXoH2J7BaU6g3isZ2r8fZXj9hSC7XiaBHXHgZRPwpcXZbxiZ",
  "key28": "4d37tyCwYCia1pPeEw7T2e7tYxMcaiHWBtQrm1mHbUEWBCCdj4EmyJFLTU5AQHfVpV6ZtugwABqTsBWtW1bEXDMW",
  "key29": "5ft5zW3moLc4t6aT1WAVFFHfU6UMA7CEvjvEBhYZszkMBUeLssEGR9XwDYoZoH9RLgn8oTnJmCqxfCu7bRZybF6G",
  "key30": "4yaAphYEamtRvLt3QZJ7bmsHRJziRyBYXNpokdMjUyhSAnJGcVQEkLT6f36hKQ8PVz17cWYALWZBgAYBRoM25Dx7"
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
