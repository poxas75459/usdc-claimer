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
    "614hw749tDsWjdJCm6TSsY9dikG9poK14FGnjfgj3awqB9r8sefnu65sKe8FrbNRbk4oxuEvu1htbmQMURmsk5o9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y1dyTvnkff3eG95A9XxD3LCMEz9CudSpt6epP9D16MHgZ4HZB8eveGs8mzVQZ9b2EpkewbgUo36cSP3ME25sH5k",
  "key1": "36moGcCo3vUSdXhmYDzZA8GQzrQ9CdiDh7fNCJx2MsXPBfzaRdaT9S7kdCfTWtfGr5ZjAow9NGpCqvNJ3ZeCaUtj",
  "key2": "3QTeF7WC1h1UAMAcEBYLCzxffwgaDeR2u8p3XxSQuA1RbxW1pFasufNTGK1emSL1mZKr78yAxjZSo3Gzh1oyGBE9",
  "key3": "4Edez89YHzV97nAsmzPmKtDydrM8VEJNuBNtUm9jDiq4uqEidCQpnsEa5y76jqU2P55CYDC1yAUUZBLvHaNxZ3r3",
  "key4": "2DZ5wupeERyQpPxtT7MJY8tKNgt5Mf7EWsGYetb8r6QsBs9wdh4MUpvzMnU5AjPZ7wUn2pEMsofTa7qtKw2iUXrk",
  "key5": "2xnLQjUioxVvaZhuXFo4XHzm1DszQK1EtH9ScdTwSDH3pe89LYKsdF8zsgQEX9pqNpvmr8xsB3t2TWq8JpsAFZRG",
  "key6": "WLDcvCeKa7CC3TWuf4EcQTgk65VaLyjEJy1cb11zTNrmFyegohusBt8t2b4hiLiUmAXVk3m8uFAm5DCVHZzPp6G",
  "key7": "2tvYGBPc4b2AJ3itBG8en9xohWD6fiqspPmQ6VDb8GE3BwpouEdtfpuNe7uHkmh16HEqPeNT67xGL6ePZf3aHYuL",
  "key8": "33kQQik22N87raKh8rMyHMYuemJVAQiEbJNfdezMRWZNMsbCDod91K4L6ymSbjqAExcquBBDrqzRD7GpF497HQot",
  "key9": "1Z7r39fbeJqYKiT3kyPe7NFECfCXEwGRajCCh5AgBUj9hkeaLEuAMiRQNNzg8c3stPF6jU9ec5DdkwajH93vQqg",
  "key10": "34ExHYiaXai62XXx3F9Bzdf3namfnzKqjm62h9FCNa4YZX7SJmVHUWRQtkcApcUMwzawyUy8SePg5AeFJ8uN5GQy",
  "key11": "5qTrZoyP9oszVKsJkfjy9PwofkZGTqbFzBtN7WEAkHybEmqQsd6UzPAC9VVALthcjjUvETexq4VwKF2BVb9LEKUL",
  "key12": "31cuQTdMsmijP3uKdsmY4sSXjdfem2yWsF7RaxktYcc3ud974qeraVd7zjc2BtFx9V7fkZsqbFoDVgedU9jGRV8s",
  "key13": "4ZzLbN831N4f55D5sGD8VKVY1w9cJorE7nQAxSWQ8xdMwwQkbWLQEwB6iaG1Z9MHDq9rjaPZpYU5j1DXPrisFzL",
  "key14": "SufqoB8Ph7TWd929EaQCxU7Fd4iavyiC162USsCnHTkVkvmcHceLVcnArtMwyW3bDmqKtbrQZnHhGkMstKjArz8",
  "key15": "55YKSmiDHTxsPpLYLT5eaUvtuxtPja71dySr8yTx8eQxAZ1snQjyYqp2qauMe4au97xQ1giSaBEZwbWSppJuw5SZ",
  "key16": "4Mo4oeAMNeboxpssCamgL2yy98vCnfLbC5Pw2YieF2zQk7S6Xf9ZPyLomD2Sr5fd8zzh7KXXPQubaZ94iLmEVZE8",
  "key17": "46T4V6eRmAJEKBhHp9mhtz3pNAxRJAxRv4DBiowWiJZRAq5y8tr8GdYawmGkhxzTB4tJHQSt1JK3wRTsBwVAhpSh",
  "key18": "2ssKVuZ7pTTApeZsD8bFNpJCbVN4AHVDRojhA3Yi8xSnhVXGrWuBqhdUZbjZ42Qr36u72bGTVdTNnvPDs8DLBng",
  "key19": "5JzaYM3LX1AmdFM7Fjymz4mY97Ro6zxUtNasptTYFNnudegKSaikKiKgEezq79yGLjL7KAXT441gjGvEWkm2oHbo",
  "key20": "2F29Tv34nz8awex4VzpzWputvrhcQMZHp5A8bpJX59Jb3bc8gK9FM9nnU7yfTM2ZhoLHF4tQ71G1E2mfJYkGh78X",
  "key21": "5qp4xPYod3JEXFxmcAYSwQrDanyBHT6PXpVRuzvRxu7xFudyW126iBooAJZWj4FTQxDWHRQ5j4GAwoNzmQTvzsvD",
  "key22": "4yjTR5zCgXm88WY62gNi1tkLmeq8H3B5iJvRJ3nY3MFVDhzMgdvFYLunnckFrohRFWmwUVCDvBocm1h3GMRmBJLe",
  "key23": "4js3aYHXvvmQsit2SQ3PdQYePzffZ8tVoVtQWhWRmgZPbrYFBjVX83dFNaymRTLr1DywNTbSXh9cMvui9YaxVcWy",
  "key24": "5N6Ubumk76XWYAd6oZgrWGMDnk2ZUfdtgsfSfE738YxEizdk5U4Sv3oD91p97DutkUzAQ66LBBCrHXkCeWkdk3rJ",
  "key25": "4TzA1xxp1UmSa1yK7As5HF4TmT1gnYFfJ8AiH4XR3FEjVa5cJtZrTZ6bfJUv3hNPSZ96TGvvqNTwTZ9X9spaW71P",
  "key26": "3ZMiTCe5HZxbQLsNGNB7JrMMESoa7mQXY9RDqFr3gZcwphP8qmohYoGST9oKdjjt7jk4S2yw2xFFeWgkZeu9QJDc",
  "key27": "2Kdoea9ZZq5Qe51V43TYjokLWTLZPrtMBxsgdtU4owVjiH2kk97KFYrTnraDLH4aukn2Q7qSEAAmmqDVqaBcvSxC",
  "key28": "5GYCkBgVkiKNnmBr4qTX6Sp8gp5LbRGQogv4Bor7VsnkgEcUM3hyqzWW7yd3pVWJU1VXquPf8DJfFvJLXKSpR8uA",
  "key29": "5YHxqxvv6JAu3xFVUsDG9ZE9yEJdDuA9A2i5NE5aQC9kmZo5nA6yEj9tJFwn1Axwg5DvddUcEF4jvZofc3qzcTSf",
  "key30": "525g7K3eSXhZcijK8Pf3UpAVg37As5gE6nfa17TQvouRSP37bFT2iKzixLFgfd9LGJc2i3CjsdnRsYKmCHkigJEc",
  "key31": "5nW8Y1t8Hk23zX1V35ix3JZMw3TLE3LV4F7626wYQAzAcYBmLwEnuM5nT7cPAdRacUGsyon9PUogZ1qnthT9C6Br",
  "key32": "5XcG7EuFKyKZ73wDDMuDgnhBhHRcvYPCJDU4zjzfdFcHabX1gDYX2FnVx2g5YQjsymodGzvM88fRqbwJtjcdjHzU",
  "key33": "2QgsG89ctirM1473E2xzYdBtLgEUpNACCdBaCCCKhmwFooV9Dxd7tv9uTJQEqjUw57nHypHhQgBzKkrHLYaTYWfj",
  "key34": "3ctc4TxfX2V6ypPP9rhtEwhjPAr5QtZRhXz5ZKG4DDLAX9LAb4SnXBv6c5YzFmNeeCTd4vEfs4JXPWB8zeeCh8K7",
  "key35": "fRE9JdC4qZxbVXfhVNkLe3BuTrh2n9oGw5S5RPH2DG8ew3rPio2gPFAFbzgW1ucrXpLsDnyqMEGXu7YvCf34SVx",
  "key36": "2BcSZujuWNaHpqUty7MuST74K3d8C9NNMiXgDqykb2ieT1CbKskuowo2V49ubuNrZznBDsF4aazLJceJe3VK9Hj7",
  "key37": "XtnX1f2ZyeNufG6uP9wwxmGKpSbWsuVtvhcy5b42W95pN5fQb4HoNVzsetuWatN4zeQDNtkHhf6o5QyVnT3X6QA",
  "key38": "nZRgBaS1CWgjacFKRRDJ8BakFiyRWAtKqyZPZrYEtL1cvEgoP3UqV4txPYWFciYT2kanxB6SuJmV5x72YgG1rm7",
  "key39": "66WQ3Ryw2yWB7J8wZTFBdSi29uwpqJ4J25AcN262UzETzbucppfsP4VY7GyWWz8CGpFytRuJUHcR5XVMPkRQi9S5"
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
