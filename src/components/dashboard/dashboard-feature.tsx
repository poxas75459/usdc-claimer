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
    "qCVdvXy9NvKvHJZMMwYqwYC8nruNqYJfitt1CV6MTezfBwrWujNct1DAkxbAjRteu7RaAgu2A9vuMJrc5Vyn3B5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gwZP4XWnPvu6stSJeX3dN3y7a1qx8vBapb4MLXwJCxBszuxecVxuA24LiByay1yyyxbeZxM2jreXiWTCYroTEhf",
  "key1": "557Pj1cnY6v1999vMnDaJtWdKFjaDD7pusLp1yQZ2HUCa88TyEGmt2fkzHHFWFwbnN1Wd8QHiz3hu47zpYiVbX9z",
  "key2": "ozoLjLZ7AnuGstkzccm7Cz4M6BFmEytDLyGv2edbw98e6tBbZS9FBoHhsymQAprivwp7BP9tmMykVKoEEa7VsNX",
  "key3": "4UzyWuqPZwgF3iyAQfV1op1ckdgrJ4FttDmKBK5YNNSDFa3XpVAcqfvoQtadEDaCcfBWxYunh9b4GTaZ6rWCEVhg",
  "key4": "5PzxFABigwZT9e3N12HF5mLYasJ1u7SH6eixsKV3nJxopx8Bws7h4ET1oBY9ZzBWz4VVMo81K3zR9tj1bgWnKvST",
  "key5": "42Sh3sSAQfuYPTVtLAvBaF7cZFko5zna8NFAE19G4hh6iNMPLWeHHv3JietcgJoqm3N8j3JBjbnVB53sJwrXpqoq",
  "key6": "2QeJWsAwT86mxH7GGW2vt3ZmqoRx65QmoZUANfTdx8r2d3uQpZ8Dms6egCUYEDjgd21LYnNB24Jyd5tT44dEgq5N",
  "key7": "3PC1m3QgjCqhWUjQDDosAkZfSWMBwgBzcKi2qiWnN5cPznrboUfxNwV9d8YdjRj6GbfWXC6aKDmuGXtLW1w9EvDS",
  "key8": "3mKmduU3SqQpPnwrqez35CpfUY3xqxBuNaGjJtTv3tZ1NLViAvsYfwDEhsAoDGYiMyqrkRAjt1TswntNGzJgMo8Z",
  "key9": "4JP7phv17QCDfKmWVMKn21PEwjNr6SV4nJNGMpVaPYzBzSNXAUXF72bHAqeYuPhAbxSnHN9fR2B9thVgAjnBNiE4",
  "key10": "2JFohg9YPizoUBdR41BEtLVga4NvYkXEmfTRR1YyG9zsVWptNLjEY4qLJLNcKkt6QigQ2os44SjLsDmPCVv6WGbh",
  "key11": "2f3TpZVRpXyNoMjP25Mgx48vZDjYunG3NMCKiKwLL4LXoxW632bz5rWJLgxtbXH2nf6vxkoGs5gwcNKXDN4LngKD",
  "key12": "5uqPAdGfFWzRM4f9LA3ZuEYz6dvumNBnkXyxKVTKG4ufgEMrxygFEx81o3VoF9cmXyLtxuSPnGyQADRCEHeaUUcp",
  "key13": "2ScqVa1hitR6xVJPQBnNEr9TvXdq85ynaMzQNMVTrHDDMHmCWnVBreEtttv9X1yX6PKDk5fuTcuxnhyk5LyedqNs",
  "key14": "cpt8g63TeziaAziWKf6RCHT4cw7feBsuGNP7iXi4nN9MFPYKQbHf8EN8bPFaTqTfDg92eG6x4GEavRYpiRVT99Z",
  "key15": "46iTujAXB56EpvgB2zL3Je8W47DBQZzzY5T9ARsimkST1qir75njaxKdcU2EDBsnte2ktCaVP9hTpvEVh6jnMjMg",
  "key16": "cmbJ3bgkLVztpysNYWAyHzxMW8U7xfbxp9yKko1sXVrY21CxNrztNBYuYMEYJtQNoPFyPCXGDGS3Hdcp4MzXf7A",
  "key17": "4D2DC6ACEcmZjcCmozwvoHG9PjF4NvQnxmKTcDjqi6mG8pPRAAhoJo7EMmn6yuLE1utzt9RPZrXGwmoFTWdeNWeG",
  "key18": "4YbN4mK1y9Zf12iV44ncmiBRJmbaMqwc66N3ZAF9aof13GrpFWZHyYQShgiLycfkvc2cTiwur4zEaUAbJZKrLqZ9",
  "key19": "cMcVbJwPA9rmfwJFb65kj2n4CoGMjqPJ2mzh41Jep8LLfjMcjNRU42SBK51mo6KzHqaikDuLb9DwPmENeVayD8e",
  "key20": "58udyQ9VTz2KjBDAu7ZLuACji9AMtsdFJXsX2SKF95YEbqge3JnKKnqdw65SJDcDNiNZMt6gViwY3EQnTk4FJh5B",
  "key21": "keKuK4nLQ8NzSVDrt5fCmY11DRnJ5mqa1xLHveUtkqoWVSHp85Ae3RW7Nfn31M2TfApX9ucKanioKyqBmCEcE1w",
  "key22": "3VoNv4nwKsfTmiyKxeBQdaMpuDHDqodcqVSAUd7B5ZviGByAbdr7HFJUbi91SqA1FWgfbNkQxGqUFfD3qasTE8px",
  "key23": "5hsL64bsTQ2QKa8V3Rmkiet5aTDk38sdbi5nMZKY3mywpJ6KJLU4Ve9bDjDNpaiT1WSDHYvo9sMXboySjr47YUWa",
  "key24": "LgaTqgkA2sz4LWVPDYBiNRz47nmr3oeYsYpdNQCqqqo2RmK8yNg5aq1kfeBepomFCxDvoM8s2eXXmmtQvquK63P",
  "key25": "5PqdY1u7FmA7KSmXMdA3ZXbX7dsUR7fu3oFDSFvLYLRBGJmiCFvKBkcy1rVXhDKETeyZSACUWCzJdzBCkTCCCpNt",
  "key26": "3GzTtpq6f579FbeQw9EoHCGZxB3cz3FDFGo1QxMjgnLm3WEQ6AzZgb1txAmeF3yTsLLCBFvNn7tMTD2gaFf1mkfX",
  "key27": "3yEhcFnDok8c3oijh6CLYkEZDwz18siuA1SDV34si8eGKu569h8Fcvsww57KvBxGKdPNxSbMbfDCNtNvNgN6hJ9S",
  "key28": "4YDdQ9RGA1jaEjjY4vPfxiY6pmHkRoGXso3AMvXXrJLXAmMadD1Ci62DeWkHHfvL9W3hRgxSv76S8buz53oHvKz7",
  "key29": "3f1ZTGFYvtro8KfJLDT28U5skG21avqvxbYpQBtiuHiGbiL9d21wEmBcRZz8gJwzhUEaoLWCwe5hMfohd3zYMAdH",
  "key30": "CyWv8skFtZXi7g3HeomnBWesjFAZcCKakjyu86Sq8gxMaz24umnSZ5iZnHbW6yAYiEw8wRwBf4K3BkhNG3yuVoZ",
  "key31": "tPcw9no7ArSXEYELrYKVkWabLrPXWnKVKT3Jt6PtXAj3fTDV7mxqawK48yCNDe26qkhxqCxo2cJaPJ8cnTaxkhM",
  "key32": "gXshufPSSXooBfecXahzV7XizqResuZpjres3BRUruCtPp3TqCWwa2ntukCpBSVdJMdBoccrTNcQU8d17wgMqyA",
  "key33": "3VqvPpx6m7qwA4HGj7dWN9QYcSVLKZ83svnS2GPNx772RM7osopMRvJqL5bXgj5H6fMhyKSjwfFsXH8JZxVH4Q98",
  "key34": "6ZY6g6gCAc4xoKhvY76jTDEGtzM5Q4jV5QP1SoHm1TjigMKomsvVyFZ7PS9LVqfKraHVz3fFPB2aPot7Gc4PCZc",
  "key35": "67m3YWiELZhAo9FwxkgQXkE2yWeW3aRu2Gy89rYjd4fvEsJrsiNtvSZwzSwtVngMtQntDRi6yv35xvqZQCGjEBFc",
  "key36": "2hnXL5zccKY7gmHd2N29KQPWZDB6mgU7NTUAaVDEJf1U1kNjGqrffFiNHtJN5LRv75X2s399BCZ66SWf1KZNJoaY",
  "key37": "2c3wAb2nA9vdMdVLhkPL86jgn8VgAj3HomcXvnUa3MeGyYVgEACWYsbtm79vNSN79b6krFNmoK1UDbJYnZvEjwBx",
  "key38": "2CEzqvCbgzAqkbjYrx1NSoyqZZ9nTxwW478F4hAkiWJNSYewvdpGxnN7JYoZgunNbukUfbnDos5QCBPtXAEZHJi3",
  "key39": "2aVc57QrWnAEMAmR1VFgkjNgtPkyJNbVNVGp2uZsKEsYBWFBmAEVERC6FM1E58gi8RLAzXcY5hDG1sanH91QST9Q",
  "key40": "y3u8x3T4YCVK4o69hWboaYZYeu5fiFs2cEfmYfQe8mJeWFE1n7dweM4JXnxfwDW7vTVVGKzUS6zMpUGFC9QkByn",
  "key41": "4xbjvvqo8AgB39WqrQ9NKvbvr1263nr4Bu2VrdEWtzaPaWVkzsDGHdHYg3ftTT62xpmMEuTvrxNNWMpJ6CCk1dWb",
  "key42": "4TfCpFc3SNe84Eojac58avL6vJEEihTD2xKhKHheAJLfdfr7yYRi7uusaa5fNemjZGHAxfv3iDwVsYeJk3ENdXf8",
  "key43": "3ZP5Fu25TQ6kDfeBrCJAReZwvuw7b923D6H7w3KNWNoLBtb7HboYzihUkgBKEqDZiduSv71Q9m8C5Jz3ub2GfQyq",
  "key44": "4hNsGAFyHGpy4BhQUBBE88J5DfPSro9G7jTs9m6UHPb17zZTncViaAhhRgWgtqVxZfdEbtam9WC9ZnJZQCrkg8Cs",
  "key45": "4WzLh4KiGmVthi68A6PsRBC2hf9nRJVw5qhb9w2HETTAZEsP28dSZGUpEMh5H3PgRVziuPS8fZKdPqVQYn13FzUu",
  "key46": "2rDu3mnA5fGQN4Y3e6gJnXvj3bMAo8NtKiQgExZoaFhqPoG9jmoqtwTGJtgRp7kFyuZoDZGtRDjS4rJGjPt3Y76E"
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
