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
    "5nGLQwnKaTqNAX9mf5qB6DRVVXvXUHjJo4BAvhSSQELV8UY3v4wQyVMZKThWNSGeRvNQxyrnyQHgphx6iPD5CPkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vn6CumKn36Q5vBmsVBJweyHcskLWDWEKp3C9tHjqjtqnKF2sSxBS1DXaC4VSDus7LmYQzBJRZHXfN7sGSJ4FD7A",
  "key1": "rxqmx1j4kdWLBMtdsmKNqJLDVSWfzFdx34NDHdkuCThPqbq7R6XHWCeufiidnjYN6ys3PdbG78vrQWSwGizsbE7",
  "key2": "3bXUg9vy888jdZDqw8hUrVKAC2UWaukXvGiE5jFxrGRG9HL3CoCNDfUqB9JVLSgY11hPNCnUnE6V9MucQdASm4gR",
  "key3": "5NzT9CZ6tQ1BP6Q5FGJY8CcK4Q2BoT8k1xdRJRrP4rBJ5U6faaGkkDac21YbWfabi3X4ueL7gwJUGvaGDzc1WetM",
  "key4": "4tRavyL8uVUqRZYRAU5sQSFCcCDjXdxn6XGs44N2o2em6zLh7MrNtCiuhQtptP9Khdqz5cGjLqiosiPCAyh7RvWx",
  "key5": "4sbCsdLhV6v1xJ16f24SRwutSM72HnBzx8CoGgaeC9tZiWtGWD9m8CsEZGRYTnkiR3o7QZq7LY8vrSbVGKZGYXuK",
  "key6": "2BBjFmMm4HnDfB96b8TmGQNRy11pDeTDE95ir7YkdqMZdja7dCDG8YcbgrCUYgmLer54U5J6qxFdP7bbDszPbfgW",
  "key7": "3rSLzGjUnd6eaZh1PTwSvkxAsrip2Scu3M9f2tcspvzFXmmaq7gMTNGhFpuduBtgmLQJPATss51FhfJGswC6FG3h",
  "key8": "2hJdMyDmTnzwpSDUgZoAo6i161LGZekuLPrnz1r4b4JkRkqBSWMfM6QoDcuqb4cCPwY5kmuKKVw6RCYhEibsB1XU",
  "key9": "4FwyTJNsTssuhvB8r97UM8mkfaPWqLkA8nhRFNFMgAUNsYFi6xSLrZoWfRdJejZmoZsAxJFGuKeA5WAuFEN51e3",
  "key10": "HrfnSzYRWus3E6ye3jCxhGwkt2K6fLN29Ww25gdAdrENXaCbrsbnAN5tS9vXt4Y6y37t1mf5F4PeC4AGaSqATZP",
  "key11": "3N2hxCtg9cX3pWfFRbCXbqA65QD4mnUTdFjZnxPA3R5YcuTbkXrEAibnM9eWn3LDRKpABYKcBkeeD35oST3SxoJv",
  "key12": "3aefunVNuXJBUrTHwkkr94TS3WC4FR7aPZEdz8rqRpvSaPWaRgcsxn7q4a74j9Vv9391qpeUduSBsWoTYL11wPAp",
  "key13": "3PyGV3K9gjurjNFH368Acd1Mns7zkUkYhynTaatzWuRTcy8cMERxEBQ4ihW2gc4pcrpGb6g9Mwa1esGfjtNq6A4M",
  "key14": "ro975i31GR54vNu6vpttJGRoSFryNaPtHwmzRUr4tEC1xbdqUi2EhwRH7bn2ADxFpLJm67RSzVZkXuU7TTdUBfB",
  "key15": "1r1MsWzqjtweemUxjY14WaT3D2ULAhY9ZVjzUCUctHAMYFN3YE14qxiymSagFK65qGu7BFy34pc3anE6fiEFyUt",
  "key16": "5J6V4FWWZpCyH8DwHV3yEtiacji5eeeqq1DKbkCEDrhj3mw1wXdcGNwkcp31Ywx9QHp13DqLRupBsLi5t4RcrhMr",
  "key17": "ckFWaKKRWNaCHaamXnPEscUj6Ya9ESjBbGc7ToYtdnFPJGHWqzZTvQmJi8Z7XBH7wEMo5E64cjYmiYg28zirtQx",
  "key18": "4yCKozZ6WQv2cu9gkAn1Y7WyLYzH1k69HHGZAKb8AAS2JJREojazCXtTyJN9EmTCrhcYRGUhRu4gg8YjhRdKjsa",
  "key19": "35H9RNjMThfkVWSXoKMevQn9VjsDqeDLDV7XBBKUyYL7xGbnhtdmWHrhdMmni2VXyXPVxEAfednmLD6WkfT4zceJ",
  "key20": "2YCJbkYbopQnKq6v9EYHmfw53BNPFoncFGjKmc3N5g1QfGkU9RAp4TYQ58ji6vV6z3UGC1ZTtE9sPegX3Lgbn4Rm",
  "key21": "32smhDPKWp3AE9syVjdbquy1tqyLmQh4SAW9oWpB8UToS7H1fPmi7MB3ebh3pjp3y22wz3MMGK7rDyp5aiJLwaSV",
  "key22": "53vqWNPvzbmryC7yt4eGd6XvXSxLo4qiHrgxbWHgGmPRNcbQvBG4RcfLLryAhXNYsBwhWUXEZ2D7DfXJH3SeZ8Tb",
  "key23": "ByP5VLW757P81AfxtJ6FNP7ntgrTFQhYsJNnkqz3Yr6KQ5ybsipM933rsTi2k4nNFbXmZ5YsGdVfG3Tee6SViVs",
  "key24": "Br8EcCGSf5tK5qhz6ezAWAtjsTtYGbuVQoywZReqNCnnjhtk1PTcGUSbLrWqYgXJmjCGjXUZGnCqfuKbfXgBxiu",
  "key25": "48TsGG5TpG9d6Q9gQpsPxcv7kXPsfspLrvgH4waoz644kuhuvqkkf4CoZe73d4QT1NpJZXDued554oHAhqfKAR7i",
  "key26": "3zo1bsMmA84Tt1HKpkA4AzTg4y2yYYMZU1tdeiyNknNRZCB5aXKUi1btE7Lw8Bxd75Fm2deJoU5gRLWh14tRirr4",
  "key27": "5WFhw39XSb57hMzQJNb9x3oaqoyp2EcCWdcmCoUyR11MUdRTo5mbSQQyHcxBAxzZbFWFjecHiarNECpx5ifP5jvT",
  "key28": "3yBrDkhHgfV14SwSNaoGfubyDAGvYTJF6cJ18jLKs41cagokTu4RnsBqM4XjDz5HSaT5JgEmiRu3NAZQghWe613z",
  "key29": "5ag6xFZRMzNEtS9rpy5k52DiXeSmgmM6r8G4DV7BcVBNsaBzgCECS1reDnKW4kSkUAqiToJDoMaNdjRxoareETe9",
  "key30": "3ucc5v6thgvNYjKPp9aiyw7daCPLrLFYqr4J5N6Tir6ibLsDq7ffHPngfHMiBxATRBDdKi7tU4XZWkcXzNDZPdXf",
  "key31": "4zCpGkzaALDxccxdcRUmW2KUJLKvaSczZfBRiSg9beCdcyspQLuHnnRffDMWWUP1m7xwoB12xeSpo2x9aacvdvaA",
  "key32": "2oNTP7PCZrrkSSfxMnMhmcwb1vBrGXaupaKbUnYwdgCK5tz3XLfZoPTgUMAS7BJd6oqcUTdmzZJMuC2FhvdkYxrm",
  "key33": "4uYPbeA3PmekVvypXnMy9LPTiTzzXB63AJMWmDRK8FoFeR2o3wegQYHCP45GJceGo7EzAR4P3kt8ZJKqDv9zzi2J",
  "key34": "3rA32p7h6LUrbKmRJJGPSPoeiGMmoxz8ATsSNBW6GaP5RdrJ98dsupT8t88PuwP5CUfWXsD9bGysGqpNCcLbMREk"
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
