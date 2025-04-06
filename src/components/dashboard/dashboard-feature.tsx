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
    "2nmqAuXKtrrrQvpC5dwQmvNcRrbmnfe9i6vqZYxvZHXJtbG1H4wF7qMEy5wjzGdQsCCxVWhJPZj1R4oT2pxqhVXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tmbEipRiKacZa4wSYv5D3GCTsHKvr6GN4fU6qEJZ7fdQ91r1BMagD997MUbe3q7c49bmc54DbxsN5Gu3LPZydcN",
  "key1": "4jSeQVWw7jqe7GpdvHZARLio5xejfYwig8xfCvRGxQv7qVamWhhfJjL5v9LQWbQjSboZaBMzJzqxWMD9oxg8tuLz",
  "key2": "4R77TBK81zMAVhvjf2niUS2U29nofjKYj2be79sRmyYJ1tEWqmACgUGoChaZRRmjabFF2ofMU4vs4XdPj49NMnPR",
  "key3": "4BfgGrFVciVjYbuLhEAEBoJ8bFbcUQ7LVn98U1r3iGYDwAaZfaxr2kjeL5tp6L2seGjULqGxeWyuzkXwTDBkodh7",
  "key4": "9ZoBPQLj7cparKUsDTbZvcfAWW1NQEuRgRtUdPDfJJ5bvyfngTQfSnPDLnfNtQUxRa9HRP9KyTPg2BfxxWs2GBn",
  "key5": "QFJm8Gg6efBc4vnuUhg12bj23Pkes76AA1dbWkk4CwUnXNfo5Vr3C5J5EZjyXoej3nTKTWE8ZMf3EQUD4WC4Ptf",
  "key6": "iz1Gf5wX2aymrLXoXkxs5ZUH19TgCKtp78UvHKmDNrBcWH3SUT6CcgzJN27kGe21EQ8tjRR9bwzj24oH9GiDB5Y",
  "key7": "2Sj8qMFkysjEQhFRPcVb6QQoeFA1H7K12HSUReFCTwa5dwXN94dXt62HMhJZvYHihwCPwSPTGnC5kxXpai33AKS3",
  "key8": "2dTc23EZR3AQutxkTZbzUwXCgqYZUMrz4ZuEgBUcty8C67mWZA8FA8gUNPMtfxcSiJYkjtm7CVQWZKUkSeziCKLx",
  "key9": "4DEufVdZXpp79PRCxtnfyzwKzNXaCM6xYds5V5X6g65rdfVLJPERYugW8oMSo9D86Jqd1ssDcnmNGLjTxcoSREx4",
  "key10": "5mGHdEDKp2Uqmcpv7a1hcLgR4Jaeyde4Q7hPk5eKNvGjRvVyrVst72iAGXamD9915dALTdMz8yoUMQNpGAq9iNFv",
  "key11": "4CBLvocRnzdZn8o2f6cwEZQnNVZEe7MyhCSzLiDF452T31JRQ3Y4GDRFoaWWCA9eC3KJKekTxqDuJ97T4yCfwwfD",
  "key12": "4nAtM9KB8bh3bM3D8vrj15jghvYwG3cBZLxzyxZR7RXgwiXvCj8V76sutDrW9xFCALNnSJvuknPtbctGJkBT6ewU",
  "key13": "4P8YHfKGwwXHb6WoQvv2ymyShG2ypAsY6LGAZdsRm9zqhCXtHF1fLjGaYEdUtWF7z6T2MatTAykxUrbQVJ7jUJDq",
  "key14": "3sTPNCVq8XsrKLsUA7uTMZCSZonRkUZf8MygBXKMdLTgFCxyGFcotbi72rqPmXZFoSgd5pidPBBckG8QWhWYfPB3",
  "key15": "57N1shTM3rPoPSNY9Uym6vqT5BRQSKyZXzqfLdHFugHGz3fJqNeTWMKEMVFnJ8JKP8zDWjRLHqZEVgFvcZaBswB",
  "key16": "2QLiHpUe7Yqsxhpmf8FbVL4eyX64fHWDYXE98PN7moDDBDtVBJzK5S1Uao8grJCJDyWCwhPpU7qj8yDtcxAGuDW6",
  "key17": "4qu91Maz7E6FkfVnJp5RNoXVMiFh2FmaZF1en1rQvJ2DbKFmSZY7ED6bMBDer3coyhyMLmXsQidjxcr5NqoKANMt",
  "key18": "4ibfvNqYK2me4h87PygpXS3X59d6zkd7VtCvDzt4gk2JkkuUjeXjewzB1p9nqwmqQEQ1nwPCTfi2j2ZSNN1oZKGn",
  "key19": "2jccWoJ2XWpCPtozvNAsLNzoYt9bYuUbphVexAWtGAcj37aE3vu6AuVEjZw8N7LsjbV2Cf3DrwwrPJSkaixQ7YQ2",
  "key20": "5MwyTjYvvnqVUE83kcmA1pBicDiFRa8EgJhdRKHeva3CNmBsf2TU1arzkeMATt3DsLE4sjFefrEJ4NjgPskivEMR",
  "key21": "4GJ9jfimnoXAz6uGak61iva7DmA1NZvaWhPakjZST756W5DPFvKr2C8f1FyVKkuvU8m5nx3duqDYSXNKKzFkfaj2",
  "key22": "5kdXLuurUXaCSEt6apoRbsYypUHygRcreE4fa8TDTWnDX97TXvEZBPqVpWsyDZnD7QagUmUYcXmtMWUZDXKzcNwg",
  "key23": "2UFPErkSfAmovDyYsimgzNcU8ouEsXKGZySEmon6WRBPzkH3kuRcR9i8CWjBvq8ze6B7hon6db3gbCTxbB7RGQED",
  "key24": "5Ji8phALrbrozB3TcSge5aToGt3ezZaJLQmL5nqg7HkrpMnwURC2pVrjZGYczforcUSU6C3XuhHeDpYdwJ81P3ZX",
  "key25": "4qFQekTPXaKogV2hq5BivXMQTNJaZFhBAx3KRskJMEjuZGErVtzPQLkm5wmy7Udy6f3m2Mu2i8tpdYQ3j3WTakgu",
  "key26": "3JvbyrZmGj9A3bxVwiNqFgJraoGugsB9pEdyVsMcDFcCECeSxkZhKpvqC6cMyP2Tks7ySP3U1gRGSJNGEgfdnU4E",
  "key27": "5af7kmaLBAUDta6cgqRb4LdK5h1faurXpF7uuSgFJA2chkbFQvbtPvMH6kwVTZKWP29RrngHewkNk2xargVdM1Xk",
  "key28": "6zuWKbw2ZazJoH4orftU61wLhLWT8eMTXpVfhDXgCcg8amzzCRqjEeNj7XEDPsdUm1AxSnMi28v2a4H4yGAv7Li",
  "key29": "3o6NKXfexXRrLUKgs2Sd9bxvJL2He8nnzq6qeWp4zxXzswsKLs3hdDeVbh14UJBKPqLWwZ99Pwrud7euFVwgm8U7",
  "key30": "4wBJCh88u5Kh9Hqqxzud55AUa6X1iFNAiA5vzhGoVaMn4pF9zmJWYUFv35whLqE3TxFbDsyPTcjVDTtgEERBevi9",
  "key31": "66i1qyGAQCE5pxY54ufwLNcLBq2JhyEFneBWf3rHtyL6bNZLWDtqNh7f9Vv5qmZTiQZcfAVjzGPn94H64annjUwJ",
  "key32": "L2gwGyBTrJ15AYoxqZirZ2JD6EdxRy1izts6nqre6jXCYecejXDi1HKjrZbvjLrKLkdWToHGGS9KMd8wGjFJQfM",
  "key33": "3nSKBsPom2ssX7Cg8BFDiiPbwwsGkdjd9ZcbBXuKoRH4EoU3U9oZeDGrdPRDX126pTcBEvVNpqW9YMMpx1ACYDvX",
  "key34": "3T5SPmRpSPcX7iBA31WFtDV2avSTbEvHyfZi5C5QuYWrk4uMuns4utQzUZQbKuGpppP83zW9iNc1K32HeftGca11",
  "key35": "5Avw1dbR5hedko2NEBKtqdXaiLNnN4TSCU48M8E8an18iVQJCUn7TWgwknT2vN1KDD1GfYSPonA1CT1Ymx6b7vg3",
  "key36": "TTB3wQDij42Vx6Nwg9gETmPKD1A8PFQZK8m2JRjFMaRuUjaw6dYdL466cAp7fXjKiYxDrMfZgYot3ZQPVejckTk",
  "key37": "5LYjxocXBsiEA4fRubPTZobEvTGSmC4rWHrfTHsnkJ4cKnnboqztTpQDUprEY6z6Lcok98xaEyNTdhQhewtfyhnm",
  "key38": "5FSQ7CgN4nvPvfyeUV14YYyjAQfejEnPYHvcQvLNSYUhFVV5Ug3HTq1MX45r7nmqAEGUz7hYemuxgruKThDLqVjV",
  "key39": "3466tBHcdyQVtxEU6DeGwZ3NBuHDGxCMwCcvkK9bujsvqGv7e3BDwsEZpMKmXewZAWfw6vFs76ejxyGqTcfruYSk",
  "key40": "3ynTDJjoEQxV4PvudcNBX78QRnQxyUXN7vGZpj948XjCQAdG58kE27KEyS9Hf7C1XHvWeGYKZ1bxkBM4whzYVu8U"
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
