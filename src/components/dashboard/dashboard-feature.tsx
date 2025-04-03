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
    "2s6N8c5WaQUNV6QahHKsoydhkPsZXfD7GACz3UPesPZ9Et3dn8FoYvRkgNhXq8uZsvE8oDVp76MKGvV3K6yoPypn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gocrUMAFRCBCD9ufZaNGUK4phGvYgeXDNXT1aJJ1E6qPNCioAUHbFQKfDFH5RXQgZYSjttFx3aSYZ3czGBHcPyi",
  "key1": "2bc74R34Q8nekmVFYuvYMHX3w9R3Wdw6eZY6LThF2Z8bjiqZyWJwjSV6KjVoCnjUxxBvgMhMZT84dRrLgR9gvSCX",
  "key2": "3WZRUzgPodbi1KNKGBfnoUcVhgRFotdCYVwLab2MsyUfY2HoG2gkjftFp8zYGMzmZxYN1dLGttW9mAeUumdGYt2i",
  "key3": "4T3K6NqSA1muQY1V8Q9yd4Xqa8Hc4q6L7ui4yNzGMpYxCpBcts7EwRX7ivpRaFBr9MoxeXLhXgTnv2xGnqZdWe3L",
  "key4": "2XK2YJmd6ujaXf4umhnNE5DPTUZse83avUMPMXckNpCkg8aBsujKbicvcrUiPV226jibyZ8421pvE7p3kP4qEAqq",
  "key5": "2jhn1vu1DjTpVnb5jXZwBGxKshzJDsyUdBMXevsBxBfS6asvSkVYHvwbdMW3PoE8wBDryJAm9S5mwtvEHFyXV1HU",
  "key6": "QoFNTri6x768wx1mb5KGtaUSwQ39Xf4G7HyYkyvGC9x4z7aJp55vr5UhhpHYAqGWL4uWmMgyQqatUR2MN9mYbgB",
  "key7": "32e3uMZSQj9QzU7sADNhmovoVTmv7FdUyUJCFuQfGnzfVEkaonDKS1Kh1aKwnGziHsid4rJeiUSbN7188HUVqehr",
  "key8": "2f84paTECNNCDUVy6E7g9ZymaCTAZqcjqMLY5hF1Cbw3fp5W8NTpUiF9pnLQCUuxodGt2ZXgrWVNEAueofXN5H3t",
  "key9": "4M2BHTKJjYx3u1LGfJr5WSCG1uEEzaLx2pduNYjXpTHjA6FwmtEV5jKNHoDjUrHQ414stSaQPxU9xBh7Q1MbxRmo",
  "key10": "672omovNwhZKnV64K6znXeCTV7HWdjx2VhScRW5mNUHBxNLvMVuHx5BfQ5q2Xo7i6akfVbyNrdNr2kJ4an3mtiQ1",
  "key11": "cLnfaCqMbEXABZVWvvNyrj8gkfgap2DWffSH17YoVwJXqaJTPP6BrhK7LcCFU66WyfgXWhncrWoJ1cUh3Qhtzx3",
  "key12": "5or5omBeKYZCYaZwaZawTG3Qw7LAsYPXjdL5Zk7RYZumQqHLLGoH3mH6bgAjPoJmvtR6j8uVrwGpvPomvXgaTyFS",
  "key13": "PUPdbUeL8EnfFpJgF7fuFHw4bugYPnu9B8BN67XFvD7wcmnxFX49aRAu1GBAs3X5PgkDk6qmqXqeWYzg36Eio4S",
  "key14": "2KWk1R4FqtHU8FRKED6WUKKi7czbtzcCAoYXxGxjPcc1R1hyZgMwrXfXeYFmgqHZ7oyhdzaWJuxChfg9agxaJgS2",
  "key15": "3x8j2yQXvKkuXPJVa8CnEPMjcdmCb3vXBtDtqGbsLDXYzQUC2HSNXrMuASDgZ9LRbv16zf82XPjYagmcrVZEmv1W",
  "key16": "zGQ3DYVqJ6y4rRabQ8DxnNpSZR9eqLMsJQ5Wd1wCZdxukGwGn6paBifoqchytdUV8yhAsRBWjYStcB5L62eZgrh",
  "key17": "5QmY749RxvsDbEaMAP3aZ8qm5JggjGxuNep7dtD11wm7TJqM72CrLb8NKjhDT7AC82qgCi9wnRLNWvdYMgPksjYB",
  "key18": "4eCdPoVJ2sMnTAsfaUeD9RNYXMV4nqbr5nj89CHPBGPW2UQiSU9M5dbYtF2KxBbCnhADCNtXUxuYzx6QmckHki8J",
  "key19": "5ng3fhisWBfnnozXua4nxMcAcj17gFbLscHA5v8EZNyZV8Si9qahw5XLtprVg11i4k2YWkJne42Z6J9GbbqDGvA5",
  "key20": "63UJDFFsXsRKSUWStZjMExAUesD8sFuaEmmtuEDQdpuhnVWtKxXi3cWJzKZNhxZ3NPA1ToaUmST1PDZFnRDihA1p",
  "key21": "yoAgLVfheUwPww4CxYx65sP8ZH9cRzw4DqYxJ3gKfuDuMMcyq94EohVwsy4siXk21njmRdB5wxNa3RM5T1yzKxi",
  "key22": "XxodeE2KrnQvYrwhJobJmceo5nq9BjaBbe6W3eusftjrpSuVKPnuxkkLdBCViWKuKM62yPkxS2Qe31ZnZBnc6XB",
  "key23": "4DmCURqaedzvQs9vCWNSHj2vziALYjet77zeHNXqQHyLHVGtoysLLmW1an4XjRzXHqLsU7vja6Tko7Mz6inFzaGd",
  "key24": "343HHH2R1fshsk6GHQR9jUcVDjMomyu2LuUrqXH8ohjdgd493nTh1ciXz81t1avwPew8NNUMVyabu45YTysxoMej",
  "key25": "4DXw8Z6yeNcUyW8tXRb3Q2YVYY3FxRpYVLtj9MhEE5foWdvZQFq6BiugVKVmBy35PFQs5pF9iTuJzs6YbqthhB3f",
  "key26": "2CzCjXX9DNTish4vbq6gvGMCKWty4JWHGVwygsCj1gTt4FSAUGRnQ98wh6i79Vk4n4tmYRKpDV1kaF8FzanJrrTX",
  "key27": "2vHbohqjLdsAEsqb9hsDHaM7m1kSCGj1ux5o3nMvQYk2ZH6CZMvjTYYWWpnKpNXa85fsT65pN6gJtU6CXFk8mqHK",
  "key28": "4LLQPGU4NPCGzoweMVia6txgGKk7x7BQtk9ivfUBz6TztoJx3qhSCyyEy8qXs4XT8UsCgPUnJjuKFCfPTyCgTEis",
  "key29": "5znTpBswEGR8Z6Lh4d3Zyq1ZE91CKopaPBiGNSQpkHKfrj4o4BTPfVVm11RvsGZ4w5aaX1mgwVW1PVRnjZDauaAf",
  "key30": "5Nv9eh16KFKFdoQR1Ttref1mtZUrX4wDhQv8ahaWjPCdQ3v7Z1NmCqiihvjbWpLFWzCpDW56dJz4LmSSGW2ZQr7N",
  "key31": "4g8FfQQGseLUgSs5WrPk4RMyy4TZ9QoXdaEbfG3Es4DULkjoTQSQXoQ7gQYXJeozBvhCXM6kgDe54pHcm5VhgN7H",
  "key32": "4esB75pTn2SfuyvC57bGg4ck2jG9SBZMR38xYjGFqULSMPfGxHyk14z942SuiuKno46cmoQvxtxY544TyNyPCYqf",
  "key33": "67qBuJ5VAqfKq7pTEg8SeBK3xx5vbp4USVVkS8XQ2fpJAeeUm5YbGPE8VJsgLn4mx58abeo1vd7JRBBohMn8bydE",
  "key34": "qcjxgzmXewJvKkYvNd9Liqp3q3kRJNRNN1Ag6VaTQ6VhNYkgu5T5rWCrPfbN4T84fYhLQsv1oAGH5NprNNiFzit",
  "key35": "61QHPuftg8sVM1oUqLk7LXst8HdctWt2vwrsYnz31JE68424b2Z6FqoG9b7vaz7i27NPV3EmnaJFb5KX4MGWfdWa",
  "key36": "3ZFyaq7XjuNAkVduM2g364YFBqzu5SJTwgqCt13eFhnyMAcxu8P8QBm5BkGDc6EzbN7ckSRLZ9i3vgC7vb8qsqLq",
  "key37": "4cYX9PFZTEKBDPm8zLBuGngm1kcF1wmzXfS2yciaWoHWp5PwpthjrxZNfQsogWD2npjkR4Ngmi5UNmNnM7n5eAYo",
  "key38": "21h6gTJk3MGJ43vyVvN1yBM4PAWq9jXWnh8DKbqrnAoRhDxwTdrSaN64rXkHTBXR3jrR3ioXFM8MVjiG7Cjwdeir",
  "key39": "4UaBxem9j8ej2PR98kXMU6kWwS3PK9rmhvqCGFFZDU1VGXJ5uZ8WLx7P8v64qKGzgifszEmaFZ9t44MhLM3Gjm9H",
  "key40": "CJ61n4tEKKKgvEaQBTgJUmnThHCQUPMqwjC6xiUHzqqMnZMCdrDXGdxkZdibb2HwLucQc6Kfzqq8RWnXoaAKzTR",
  "key41": "3t3CQNFuoanL5ekTUJ59g3djvVUX89XgpjY9YbpY6i1WhBhL6XYhoZ3RLhjThi2bPyZm7kxFkYGPD4qREy8bCwgg",
  "key42": "5JsUU5MeQ3CGRkQmNhhsmUsQzzxU8h1gHC3bxcVyPVqMpMyryLd7DZ73J829Sw89BiHVawahGfHNCWZ1enkyYueu",
  "key43": "w6ETWX8XG75LM3aEhqnb95EfMGD6uy3qHu8cGjCNzza9jeYcuT6EjWRuaQCPCY1dFS5XHy1EYFRoAKRnDqWfqC9",
  "key44": "5Ni3D4iLLaXLYDWBvbhRWkbSAqyyx6PgifYyU7qWtE2XSnonuyuuS4iaHW6mqWjbPCa5Thi6iZXtgH1TtrtddD4V",
  "key45": "3ups7qB4sayjHmGJfesHGWTvCvsW1jnkefr5qXhjrdQmG8yDQkmJvassKaTVt2bqb6GMYpf8X1EbXVU2wadJNCph"
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
