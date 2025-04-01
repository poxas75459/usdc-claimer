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
    "63b8AGJqiuzvXKVzij2YdfMVZ8RGrPWKZP9G6uqnJj6UPiph5LLFaAUMmbRRhmzUyTDFaswdj3cugNMznnhvtZuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P6sMVesT299q7rfBv7yorzYxS2hEGwXpDDZ7qbEGZFQM9DTqDZ8AEpT5h87afLAcTDmV1wGfHWLdv4r667Pr6Mv",
  "key1": "2WGKGucY7vthBqqbm9g6UJsiGbh7MyFv8f5dZFcQtbQ74asgR28yMPrQpN9XijmYx4FjpLBJHPmEvgVWknSSWpG5",
  "key2": "27qrTHPfALbhFfMw2o56KMTb88fFThfvKiZdZS9zbtyEF5ndUg5E9M4FqA32d8myQGopqWrL5WvsN1j6nhDgaDMJ",
  "key3": "5HyZWhFogdda3MMQXNqszNqm4vZ7TTM9Wy9FgSyFNfQVJnXVi6eLAAi4Wp274GuFq4UhG4SxL7HKps5hyMBUreRu",
  "key4": "SbSpPgGXWPmTALBhevfCDEjuaRwqWhp24226AQFvWGbmaAoE6sMEr71cAwTuMGJ1yrdGrGe4PjztxfLLqqJn1mH",
  "key5": "22ou4TqARWDfCqwkR9fYfyNFhrwpuCNDzgD9pQHEj75B9rHNYUHUbh8A9CNbEeHfi3zf52nBbwfn2h3ZvEA5MRbQ",
  "key6": "2skGY4ta1RJSQp6Vcqm4SnCUwX1DBM9NZjXPLha9gLa6W75xWMmPQfoRQKzyAC1eTQiJTr4v58rhBGQyxJSijYdL",
  "key7": "2pmAAXDnv71ebGFfSDX5o5wFxeA9VRTvoHTQ6A8KAxAJmi4n8LV3gnaV2ZkFHMU2TneEURMgE9WTK1dgPqCpYRBj",
  "key8": "4iLpfBonDYRPqppb6DFAKZg9jsRrhTAU5Z3YQmuU7WmHdFvCaVkBj8gwDn3tSz9gXXsDhSqdWBtqFyYdgfwR6YtY",
  "key9": "4TN8MpoAo2Jwfnkmsp7N1Sf72buR5w4ART7Q6N28WVDvWRw3B6LBAjb8K1ts4K2C7jryDb4GrEAUEGbDQZsRoerP",
  "key10": "2M8u2aqApor6R8E4mYwL8AKGtkUVnrBDU7phqCX6TuUyDNeoVtz2FDwLrBnKEBdvpqNg6x6Xi5JiiYxWBCuB3zG9",
  "key11": "3e2REsVZRrxuX1Ys8b3ZpFJaASn6ocsVJHr9hDwTDXp8MXPPGNY1zmPsMkCcegzEbAWVLSHt1AjW39MhJxTBLBJC",
  "key12": "459hCGHUnqDjz1YAEnQzZKxYgtog1ivwVQhDwqhErDAkMkCaNNEfkK3Tyvs4c5KehXzp2y73Tf8ZDrxHqcuA5Mz8",
  "key13": "icuqrjCchYbRBW4k64PR7THRmVc5EK9EqpDiGZgSTXmz98yw78rEcoh9Ra5FvTAUS5zyjHaYfuGABjWQ1rVfz11",
  "key14": "eekbouKeyK2xsiWtjVTRqAAZUz9ako1zAdfj6mgdkS7Ec3hAVfyuDnzm6tyY2xSB9HvZYUhYs6YfF2Mm5fQ7d9r",
  "key15": "uM45mgfsBvPhHxqeeJxkRVJUeyctTKiyXTcW4W1D9Ck65bcTUAb7XPuyKfMCESJDhydgj9j3Jzk2RzzUrgubgNT",
  "key16": "2f11rzyQAenDYdUFrfsKLJR7h84mi4gxGVtL4MHQ9sBkHWdTXLE96Sc68CgnYU8rU8fMds3CPGLPcFDab3SEd2H",
  "key17": "3PRZ8XiPXAQwatms4E3o9m2RYd1VvmXdgx5sz9ADmXmvQXxUJZGc3s3WvUeNS4TneR9Az5P7BjBvt4eQEhsGNqqv",
  "key18": "56XfJTDxcCdsGPpVxxu6ZVbgiNmyiNSa9tC9Hbog1kuRdfdspPejaVzRcDhgqc8RSg2tEsCEQDfrAGqd3hT2zs4F",
  "key19": "3SKGL17XZ2M1aDiWAkTs3Th26NXWxGxPevVbMkBdUx47rTJ7NMFNT7YkHoRgDxrWp1qaJ2ziG8wf6FbGKcBvstEV",
  "key20": "4mi178RXmwLpMs8Luy1iJr3PrqCHcBvYAhfFEG4J9s5acZDsgnDryND6KVyfeJgdBNtWsQhYGGkjdNPADy9idEAN",
  "key21": "5Nn1GhfhkTpAZxkeDk44HrFJABNc3c85cE5ZLeReW3CA7n3Y8xFRnRmHuVi1RNMWZifXvMt5FopWxQtUEQqUHnAK",
  "key22": "33KBYJu7HwxMYFzxipSsafXNd9zZqETo9X6rNzDjFR9JMez7wgM95rYFB1437b4TyJc5ygW75wAPHT7PwAcyWHV",
  "key23": "WAyS1j7VesNBqtUsyVCFciw5qRRbcXoLB4AQnSvVm1BpMvXDwWzBT8GxmUDNQAe9dfrMAmG7a3TEVR6Hc4hQokg",
  "key24": "5qScysX7xRLg3zqWYGTqAr9Xqs5tmUHTL4zfoPY1tiSekuCBQrAk8xQcLXX6Qk3nQdm7Y8nSeEN5PwKAcpvU4GSg",
  "key25": "56DyNWFpmhkL6GKVJfgqVBF8w1iR9Ye5zbYGKfPg5MBAvnGn6Qbcrc1P3fhnmmA1cuasPxFFkBwYgqXVr1ZEuLzQ",
  "key26": "3ruULeQNmXKsXuF7f6VDMNK8vsHy1SvLHF2i5ftYAg2YQFHbkzDEojeWdU9L8rteEMRWKjNzwfQsU4fwrpA74j6x",
  "key27": "2frn15MVcpMW3w27F8pq572nRn6Ge3SLnzCzMAzVRFS7rv3rb2qjCrYRyUB3dtno6gyhD2aG4GgUfNavnp4MZGqv",
  "key28": "2WJFTmbEvggcXCgQwCW7Dz2hNPJ5htiMTf3EyKsJN5HtBdGP4RvJ7rj62PEY5JmM1umg98qfc6BTkJfPJg1FcNL5",
  "key29": "4hqbZNDZRdMQyAH9p9S6eruGgNbNRTffq2fArxYaxjJs4KZnc7TKUf9kDTngTuZUBt7QaQR9cV6BuxUnqnZvk2mK",
  "key30": "4hHdHJG9c1EVe7d89uaC4wf84LhQH9cPUxkyPvXy8mJLXqAxSZ2JdoxtmBNug26NNUsNgoYfzfLT7p5pzcmVTB9z",
  "key31": "5MAnf4AHGngGHNSANwsHu5jj3iLyt9SaLqecMTYLp7n5mnaqq4qY6YNF7XhZJ5RBZyH2dTZP9da3SvBX1XxiHfYG",
  "key32": "FqCunV8MbZgVKnTK3eN2LPULWLHyhGfVzqRoCRDbmhGqyYp2jt2XdvfS7v7ZsFaL2otxuoyr4DWebKJSaJDgYcz"
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
