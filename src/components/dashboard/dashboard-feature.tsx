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
    "3fqcoU6tDH5Bd5Qrtn7Qjq8ZgV8vsQw75ASx9oVER9BiBmAT9XRP2MUKFyCcXCZpbLhjmpYnRJS2VjBBUy6nWzW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8L3JYm5aG4Y6X8AyVE7GM6Gh1qHDShpQ42v9cgsYdN3UgJLzJkMVyLwd6ahZiunXsrXrpDBFRN1bEcUm3Nwmfab",
  "key1": "292QuGreXA6ewLUZA87xiREfaGjyXxCKwqjd4Ff1Wuhng7AaXQYkAKHhZvexV5DAd6x1kziKbPHvSGY9Daei6djM",
  "key2": "4BNEjTjid4xeTMSQ7pLBJ8cHawALES5qLzZ5WM8gLsL1afFsD67SoczRxSLCUPBYDbqeie2TCkKWn4sk7gQ7ap4b",
  "key3": "4qFegwLC627ZdHwGnJKSXurChQoTZu7eQqhiSKkjDuLp36hktQyDBfNcQXpPZCdNPembn8kHzDZHtPZHU9QLGyq3",
  "key4": "3iNJRVG8CRab23G7RSBEquYF7hDM3M1x9fz13cDf3V9GnNuyGLbThukeffapt3CwwsnYjToDuZEUGozagRVoNB5U",
  "key5": "5xUiQyh9Nv48syMD9us1LVFBxbfT3WwmaXgN2ZqPsonbX7KoYDh8SkfU9XvjMgYhG688rQAS3gmnbTNtb5QSty2Y",
  "key6": "2TvM8LBZgXNsrKC38wJXLZ9GY6QuUv7p6vk8SAsVCqQPYTPqGiCrFwszJCArfeBGrgxzuYu5cvgybGqFQeVZdkWW",
  "key7": "2DMWJoC7uEf7M3rJw4SdCLdREWRXRJMcFmeBXEuRQbYnhx1Vcgpp7WzWHWYN4wCfeGA5WpCZpT6wGJWqcXBjdB2e",
  "key8": "4yQws9XB8zppvruRoEenGyKAWimuoBjyhhsKKU14ASAC9WLoYtvJdSdHGwPWYxbG3mmGDwcHVWZdLM5FFJr8KjnJ",
  "key9": "2RK32CeoYscR6sqe7ku2SUiXj8Xsj98AHCrWEh5G2DLoTrurhCgmRthYTQy7cVnrbKKpo9jBP8CiBWeRXLEyzxte",
  "key10": "2aqBx4P8GHxu5dPYJFeZA34oWQ4EQy8zYMQkvYqgcdbLSzKDukJd1oBJh1xgAoReuZwjLm3Jzb4D7pKgnTV72tmK",
  "key11": "2e8HCarsvgRFYZEDr9p9gTL8hoBpUApgzvKUvT3wNPzaBr83omdpjBYCUBieC1pFncUbmPB6ryoWfL3rgbMZcNGA",
  "key12": "2wM5uP1FCPKpNEcard8mJSjAeoa4XpKb2p3D9fbQYQ7hXCtoHctSgyqbTnMit5Dg5Pkwb8sbwyTfrWBgyQLKViVn",
  "key13": "3uZ8XwR83GgHbZQzRFAsk8FfbPVfeQxFiZ5pSvkp86rohETN6oJe5agUKbvnAzpb64pNSw5YRQ4C2QV29ng3XSRF",
  "key14": "4v76V94kiRsHRUeRxVam8tbEUbwao4r3R3P9MY7DCDbdbsEohoXMeCEiV61F1fwp1ehhUw1MTk4BzAwyibLXmAkH",
  "key15": "52wxZLuFrY5YAvU8omRtwajaKrgW1wZoakQdjoundL8UvwR2xLKo3KZX1YUGdBwQfsyPJ9auhAQY56FQ1jjV65g",
  "key16": "3E7qSsH23z47HpooWWUce7hjS13iyPfCjBayujaGi3RrSHrHRY6RCnYVg1UmLuvpDLVCWQJ3zG2BLEvP6NwFxWUX",
  "key17": "8dgU7814dnzDvpAi33x5MxPaDzaFCD3ym41tX2WWE2Tog9r5RXrNEN8waePn6z1iWrnAAkxt4HMHkfssT86TfeK",
  "key18": "3aHd8dnwxgSvxB2d6VhMEz3R74wCJJh4XSMjhtp213VReHYd69YebiQFawfCv2mJo1N2n73PLBuWNPhchQNNpayM",
  "key19": "3yBb7XEn7ACFPGZ6C5dFe7ktEoPmadyDAaifJZnEB7KHZgRNBoGamF478iZyL39Ds13VaT1DMN7yG6C3B2P8PnKA",
  "key20": "58R6Wh9uf2A2UGJJ1VPNhhVLmwi9rz9qqd36WoB7ox87QaQ4oKnQ3V2hP69vBiaeCm6n3axf6rzLGeWSvACYDxWt",
  "key21": "39KXWipGV6f3UQp6eRRYpBcuHYB7xvbU5EppL5GV9iG5hdxe51v9swA3wdfyKckbvvUdbMHgGvtQ8fx24CDP4qh9",
  "key22": "5cRknjA1jvgZTVi4PfCJJYBEUsbLAk22quBJHVaXR7X8dAfXDDYBcGNzMpE2c7mhEkVx7SjnBD7GRJHxKidWwnmP",
  "key23": "5y3knQaWjdCzwV2JLGY54SmXBVRdLfw775JVugYtvwNGdxUuXd3fNYhnymcqm9CgdDa9fD5JrnTkz4EF6oHNMFAH",
  "key24": "3HvCFoj7LjQAdGQtGR3UuDZcCsfEhRwNKRub8JdXfuh92sAPjsNfZ2if59tsAnbK6d9YRhAtxdhR2HgMnjuwQk9M",
  "key25": "s7xs5fbJ4CXTY9dgRGCcaetA5P3DUawXDJQe6AZLiToUsExzyx4LXpKTaqJdtqS8WwQrqDTjoKtuxW4py7DEWfC",
  "key26": "2Rg6jnmossDpm4cuaG8Rs5vazm9mAGjmbwLfVtNRcHjUsatMUE8FZXaDTwJqgXVEBF6wu1Gv7k945ZDQTCLs8aq9",
  "key27": "2npnVoo4Zmgck7sVhd4gq5f13xeHDGgeUk5czCo5pkDWoRp4q49bKuYipFjQ9u46bhQyWqrMWHwWQEV75dEtY3CE",
  "key28": "2GGEYcytS9F4WFe8jKpHUGzDJVD3am9EMhrhD7TjWvEGQw2BM1qa9kCWyygyuoctF9q7k8BPWBSG6dXrDpp1tKgv",
  "key29": "5W2KVmwfk9yAzqsqejMifjgxPMUxJ37EVpYkn8LNJ5EreMmAYtMegtzCCwQKEeZx1DKvQsp7JJpiad6824gr7SCM",
  "key30": "5euswKai7Tn3iAPSt2dLCS1RBEYbZiR1GHZuDR6sKRJCvfhc9CVz65fu1PiG7xwLASqL21wPh7UTdVey76crbU7F",
  "key31": "2eE1dajV1rXsMDxFXDeqvB6u1JzUM4ATqmMa2rYmwfK5qQKiEymJE2LFFRrndScZpexRNfopcfCRTtCzbeCWAD52",
  "key32": "5to9q2dCPiuBSXS3TrS33ku8T8CUaHth4FxWgAhdkizu2mfefjYNaz4ATdannynzr6oeTrVP2DYCvyFKzYJdZRGm",
  "key33": "LL2KEVuceG5X2soJTZMSzbfKvY4RxDcEhRG42LWnrroivtHysNvVLF9GNwyUqtTDfvf5ccneu27QoKNZgSWLY24",
  "key34": "cYUMciQ6Wonf2k7hMhPejbKKGhfuY27k3XkpwiXhEZfrwCAha5W3Kipo8GLMP6UJ1qLXnLTUFxbAd9JjtcqP5nF",
  "key35": "4bAbPGWKoKVZccGuDNgpKQ3bx6My6qPjS2Kdbf3VvZNmbwkXVkwRNdYJFajw2tWPUyifmo9V4it4GxX7b8F15prp"
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
