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
    "4y1BpShHZySCbonsF63grJiNN3BJon4V6AAGgTV4r5maYeBkdGPHE9nZJdMLkCqQuu72gcspykj3TBjgU9vKNHRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hDS5fyL7mNW974CMp4o8nnAP4HvwwPemamfhfB6TxJqRmBbH8VutjBeoHfteMSdx3hA9uQhgwne8W4mErWNDKN5",
  "key1": "kLi49W8Mx6CvLrkZu1zVktYowWCX3XdPKWeVqcshgNQTfGrMX8LK3xbicoN4ziSrNXRf8VPPvd4idWnb4Uw12wk",
  "key2": "NmLETVpCmkUe1LBnoy9MzUNJE9o6dSXZUEP39ipeJxzNFb5jbdDyPjFxnkfW79nmE4xZU78geJGZQM5zHnLJjmJ",
  "key3": "jHYJB4vGmf7sam9np8Wz8qiWgYoUKFTyFfWKnPL74QmCphxcuY8F5xrDECefKSrPxwoogSdTAkPUqHXGLsMAV2p",
  "key4": "39E2UG7TssGWpyaYnGovwLGJEmz93s76v1JJ7Exae8BAqiePcEgHrdPDWuFuin4J5M7muU8KACMGNys15r2EGdWN",
  "key5": "4Drgo7REp3TwQaSCVJ74cntRhxT6aFpyUqhUDfHXkuQMvmqwVubUK2KD1XiMYjAktoAYoCLtGMgibXsT72FHkxKS",
  "key6": "2xXuK4y4hKcYLFdYGkacUxfFcBH7Z6kQo9J3FhNvqH3XJC8XfsM5KgmPe425oubZr95NNzeSd38egcoQonho9s86",
  "key7": "7NVoihQEzkidY8n1EnYZqBfKs9m68XBssgLGx9e45sHKQVrnyawn3zqGYStyKe6nNtisTcDX3mMugPPPNMHLUFe",
  "key8": "4db4U6uZRgRZoDHokGYB7Xth4tqr2hY3f3pXB1BpXGUsizXJY4EcofHUCFmyfQ9x23yD73husR3EV9o5Z84NoKST",
  "key9": "4DXv7AbYNS3RWHw9sm1hMRvekvHiNYQDbinWuJ2p7ZfjQeRDvp1oddeeMHYgtxLaD831BduFmBSRmHojknNtNwtw",
  "key10": "2dXdxsv5WX9XqXwX81vcr94sT2WcauaToDPmTT7uo6A9KfxwtwTroYFXU2RE2Dj5w7oewScM9eniVspgrq4Tzgsv",
  "key11": "3TJCViKfC2ngc49otfTajnrwaRoTjnpCJAK4EE6bQHzoc5AKCi1H4wMsy5ZzD8saop31xAeYM5c1Fb9U75S5LZcL",
  "key12": "54GsRU3kQCd4HettqtPqTq4G5jmt3CQi74vF9EasYvdWqPbBNgvz1R5pD5Pedvdk3wroHAMLCLA5y4Yq8jZpZrWj",
  "key13": "4Jgau5d4AWhxbyj478wxVw3UxhbhYmPpAcQinDmGouBKVyuBK3PQowo7pSbyXu5TpQoSd9Q8sx5ftXWxn4RpFRY4",
  "key14": "xPHyJYo1hNbhZLdoJrabKtbtB41hU2ZCdpqzaFaUULzNKhm7wuGRN9ac6iq7ExMXKx2K44iCzhhmXzjAZ31GdMg",
  "key15": "4C5Pme9Ycdikag7cFn9iWFes4kML7dMCBhoJYCybyFRJpzLrkVYct1zjShdY9yBJULUTsjNCFip4u2pHBmNxxzan",
  "key16": "4SA4WgVvBegTuxVQM3RXpchJppqZzuNTYX6kX8UcJQ4sRTehm1Kmv2JRpueddGgMLhorNiNowrk6DRgq8T4CwPKk",
  "key17": "2YRYvnvdZuhyQe9sYnxy6pQG91VxdfCXZiH4utfxRhv5MKF1Fv51XeDjLbYmnYJSyqMZUva1LpsNAM4UtCEoUpJ5",
  "key18": "66JGZReFeUe2jRnAtBE2gcXcQ9m6jVdK6rQWxEZN1sK24mU8HmgpqbKsjqWNCpQ1vER2wW6L2m7h7sEUN1r469kM",
  "key19": "dcLZ2haZCK6cht8ApNqmPN8iUr1ykxZU6DxNU5g3Snf5H9phvFP3Xghj6ovJRUExXup53dP2FgRCAzWPEyKtoUs",
  "key20": "62pGik72x2KmxQdp7XUYtSdojwcDZs5Sr8d6LL9ftzEo847jyGrYfce4c1G5YkMcwmwkG1akxaYSKgPTnn8ykyYU",
  "key21": "42sZG17iohD7pcjqymQbJZ8WMYsJUZ7sdMM817U4qfsUbyiCmRvyWmqwNGsoCfbZLkWBw79n5i1LeuyhGE3QGwu7",
  "key22": "4XwzFa1tJUTmdZXeuKdhprRbaKCEwc1q5gV6JdjEFbvhzosjqYdn1ssaqpK8USCWngfvcsHaHMYHZ5s6gqXhkAXY",
  "key23": "3DZ2X4dk2aAEr6WxZehDEFuHZLifvHH7qXHA3EJvkzYzvGtyNFWjNbaw9dZ8EojjC2TU9Zi3yCjy1hmGbZRNwQzg",
  "key24": "4786pyKjDjgK5sxxEYn9JmaxRAFTD7RrJ6WKe3ujRTVytfXHcsyaigqZDX1EMvMeRp5Lpubh1aYQxupaVE5VY3ZA",
  "key25": "5AtENL6dVbWhaMYY53o5LCrkYzD9m4Q4F6vGwMcHod92g6g8Gt2znmfZFAtetMaKVcbmBh8UCeTwHn26asEBwLhf",
  "key26": "4B9fXqVt5FwHUppnUicPVQNKZ2oCphpcE6d7ymAgwsXa8icQPZuG14QfPokNRR1Dsg4it6Sb8cKKjmei8Sk6camq",
  "key27": "3pFyg8gML9Z2zMsH5bXKi1mDrwC9kpyVi298AiBseKNvXBpZ9tV5VUgtTAJMBYDue3xGuVvcWEYmsvme7y9KsD8C",
  "key28": "64QfcFpV1HRSH1tHSwSe5pC9haFCCwzu3HF1XraaBjvWUwdrb6rpZpM6RQFWWkWmGA1CTfN1LZ25janQycoonvuQ",
  "key29": "492jKZ1YkVLif9eegJrXxSjZnueS6AWdFR9HdwnN8Fwp3e7UixRjA7Gkv9UG2agXBGtHVHpQu5WN1HJncTzNuJ6Q",
  "key30": "61wdU6k5ecwRw8WENmNmig1r69RB4k4F8T33WG7pSnf6EaMZdSxW5LK5KXoqrnLWrGsijWYEVhyRQ4jbwKYMNVNs",
  "key31": "3gJZNfBoJyQuD5SrBBoCkY5KGf9mqPsKfNQJTdu94zwRwXVwWAhAvQNdVXr6zPeMxnK8BQLHWMEKbQ2YFCa4VjRG",
  "key32": "3pkvbSA3cwFsFpZN5GpcjV5T93BWCpTHjykvZozZp34dNrEe8WT5A2rCeCX34T58iAkYeFkaQEHbW95UsSPNrUWP",
  "key33": "5bkjJaMkhGamJ847WJF9kB5GyNQs8jYFKGBusfiainmjSHDmXbYe4EBH8GcovK9DaHVp1LiQdDzzZxM6C7zZfURA"
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
