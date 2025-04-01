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
    "51cFdXp4bvBdYSFx52egKVg9hsFc9PmFLWSuH5jubpMQPmhWLNBzgDbQfuEJBK1TGZ849nz6MjKcW7WRSrgm8wNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EXCwYNeLHizLUcoETuQWvP459Dok7t2vhhivm8FPZ8XbTCfShhW7m4Km9yPswxWdZn6ZGsGsF1ja1yKK17ZZrQw",
  "key1": "3q3bVmK2mEHoVB25y2wn2EBpEFFvALpwDdV3TLktRnZTv3U4CCT7p78SFJtnmr1NU3HY88E6FQ98qmmW7bz52eyz",
  "key2": "2eSWydd5RRwFbN4XaMNo4sPCBD93anmWg4nDyQSvZNQtkLodwCKJbHtsPWU2RVU5gcBP9KX9Hd6nzvUVxJ4ZGgVY",
  "key3": "4N1wXbH2ZKw5f9WWhVoYDWFaDtAW255XHAETxn2NR2PNVzCPQ4hQiq8f5neUTJgAzPQSQnrzqYdeu4tMbxzqnFVa",
  "key4": "4BveUwU6mM5Yyg314HzcoxCXn63pmuYoK3eZ7jnfZ4hBsqtJ8F6VXE3VEDogKa6X665fiCqadcvKVr2q43KwMMmZ",
  "key5": "362M9pzbk3xKx9VTcgPGpV1KCjR4WKsn6eyhGVaGRwpFbv3nsYL7Njevz4g1xkgKpXjcbjFP6kkPygcYhvJzsci4",
  "key6": "577CS1PtjMxvfSudrXxe1ZqgMgRmUGWZUimUd5cWQZVbMDYVK726t26YJBNWeaxpQ5ebGVC6e3PUr6Jf59m9gtjN",
  "key7": "5Q3Fb3PGn4b86eQY4xoyq972rd3rjgENQUWpFt9M2F1xP44k9V1qGku1BtKQucfvXL97B8iG5JdqLfPQW7wwyoye",
  "key8": "3ZjW6iDHvi9TkpD1ttGTVxV1DY8Td1Cveb7X2zi2K4ucMKrSvWFKQAVuM5VvT7ui3BLVxdrvzBTMoTu7bmx5wS97",
  "key9": "5aPz5hKb3ecNmgbhyFtkWtcM5VNmYH6vfiAsz1autvFv7bmAoQCGddv8rn5U2YtScXdNG34vfLVnjEjJvhpJysfu",
  "key10": "4ajN7yAgr8qxKjuFhhzEd4uwzcEeL9G17aL1h3z7nptkeD5bubtsuJNW8CyA9hhRJz4AXDrvaPRWxvegjqkATfhv",
  "key11": "38ihCGrgwShyXdsWx8YGSxh4Hqi9Zv9jV8MhTdTHPg2W5cxjov6tYWtRwwVzs8XGYnMh6GXXHJzQ9Fvzq71LC8cS",
  "key12": "BVNbD1DUw4skkm1eMQSrJqwtScuHT5bZapgAJfnpWm6JhoBZjbSVM6U2pjRRntr1vk1rXrbrqoiBh5D2reYjCoQ",
  "key13": "64kdaZm8Tx26QswzP1a1yjMFi5PBTDwyovgp1ybiBpetXWRUZiADAc8ozUSm9MmfBUFxA14sJqLLc43kE4YUT9EV",
  "key14": "5PguU7BpoMvPsiGFk7P6gA4LRJVy3Pzu1EMKvfcNDAFzv9tXy1WTMehHLvaxucVvSs5kRn7uALqyDvLUTqnivzjc",
  "key15": "47wdQAdnspvukYA89yUauN1t9GmQ7JvXoRgrYmqkynYLA5MsKR6rMiM5CR7KwNDjTrzURt4FPteFWL2ngZBA618F",
  "key16": "AADY5kVsKpZTq8c6rYyWEkvqd7YbUQYLX5Xk1EBvbxYAPD4ZBnxg4aCFX1C5i119j3EqFfz6fiRiRfq5HaJnQcP",
  "key17": "2CjkAPPvz2h3nof5NqVG9WVZKxc3bWHfD3Xq4pc5sAztqmbTDAvshsNmcLuQ3fyJ8K8pZE3FchCz9Nx4vQeRPgNk",
  "key18": "BuVwxiBTrAsc5HUN2QmhytuBoxgrawhqyFKLywYYf5PwCdozkDP2cLHqiTsgDoKZZoPThZC22XDjf92XUfFZ2Ms",
  "key19": "5jTMWo7QKgSuyGQmAzzbHairikmV5VaWfBVfDUWMfAfNZqU4WviQahsXnV29zNSuzt1nZrTHExcSFJ2xnr9KvYaz",
  "key20": "58dZd4Ti1PH4fQ9RksKyZW3E6ah3V3aK83NB2akGFF9yQF51FQt1SJQbJzwhRb68c5hWk5SPG95pYpUc8D6mVFk5",
  "key21": "f73aaZ8XtomZmd5tGYK6bDkEyVp6ihamD7yaMWYTAUhZXwJiRV2hF6beVFLpL8Ny7HgxHEoh5rzgwHFD9MVuPqx",
  "key22": "o7u55t61k9EjsWBoCV7wjZy7FJLXBypMtkcjzoc3ZeRvE4rKur1Hq8xJv7YdEX6wJAPbsVhC8Qk3kQJR8E9vSyy",
  "key23": "61GqLBbZZ5Fx5G4krodAAtE7Yyf6t84NzkEDXjri9AKHmdzGkwe29Kwm6si3S6bui1YgGVek1oeUDeFwCr74NFsw",
  "key24": "4ZYowfJTajgAxnTtFfRMuPHgN6AXfW73gDb6BwQD5rXbVrfNZPrWeQdV86pYUNTdqSKCvrqSnNAFduztv5t8ifho",
  "key25": "44QmTk8BZPSczDt8BuNbbjgCjMpbdFc18Riq28wrV2KaZYUfGZ2Cq7433eddcoBgPfdPvqeszNRudKWAaini8Ldk",
  "key26": "2ZWEGmh3XwkoqCY3qyzb9P1oPvtcx4a7AdijUWJDXs3Q2y4LPsqj16N8vWw1VGnWSRsrJY7cBWku2cmiwF6P3pXT",
  "key27": "cx63Za9qfAXvqWm5gx8eMyt3o3mpSoyzcY2kdef5P8usfSKLqDEw6TESH9s8XaktGmCi3efueFdaJac4gUayWdJ",
  "key28": "c27ZLeUWUuPTHDDs2C32KrqnQCRZjArvDWywRYPpcKgdZXRwvh8qBVzE9ph9QrqB6Q3ZqMhKKaafdXPrWnmwHxV",
  "key29": "2foeT782zfC4hJQzH5uaPTMhuxADHTweCwybDCKX5V8eAf7bzuZjknKonxgacP7d1mH6k3PAE7xWjUW35KK9Xyme",
  "key30": "4NG9pjBuiNWBPTdZmSJx2Zj2Kc38D9bLgezYEYRKh19r7DMs7o74NSLGgneUBAWSY6JqrRRrRUuPwLNRCHNUALQB",
  "key31": "vTQdRFWsd1odoY6AmaqX8k8jZTeT6PemeuhYk5j1a38hpBGhehkivfbTCGyyMebA8fttNZwEzT7ba2hzSipWfZN",
  "key32": "5yRZ74qNne29GTDQi4PKRRf3JmVhkPBGyLDZsLa1YVGLm1pFDxHUkwCCXPFi61ZwVnYYxRsuTUbkHEzqWuse1psU",
  "key33": "4mj7zEbad9s7sojQ7AbSnvYXxBgd4DnC7WarTfSRFgfmHvASs6UjyNo7ZAcAZvhEQqWDGrmbiQb2RdJu3ptUVVaL",
  "key34": "3M8g5Xzx1j3zxmaF1bVpqEuTifZgD7BPkG4Xfa7qz6Nhx5E2pSjtnfVbjL6XN8spt5M6RZ5L4HmduJdwYxsX5y4t",
  "key35": "2CahD6ybsSnHur6aTkC4JWuj5WLzrns8EDci52owJktxzgifWtn16XDkR3Mpnj4D8bhZnJX5KdeBxkMvU6ucSCAC",
  "key36": "4nHCjTuN8UpPsZHg14tAWuV7j1eDrYQ4PctGEB36FKSjHxJ7Du9DWHEmniFX2rLJuABg8iYLkFSFo9D7THwyH28w",
  "key37": "K5xmQJuc65JSnoMWkU18KgGb3az41eEJKHMZaFuH6iXRyxaJthqCbs8X4NVHDULYN8c11cJ1Ts75QqnZM5eqFTs"
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
