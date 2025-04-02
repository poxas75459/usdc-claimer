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
    "dcFUEt9bi2eSoAkAMyedd4RdRR2RMyXBSBgtWGGYVvP31d6h4FAc4vk6EPXNUZVboxYwsbkxG6qbCHVgCGDofs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tbfuFQz4ETY7dcBJyvqQSW2uc6pCjqPmiJryRhPTt1KwL5G7yyaFnn1BLUmWSFFfjXrMo33HtNxMwu3cZMxQrD9",
  "key1": "3wFhBxVVVqBuMRmHQccKCejSvyCd3jVVSPLSexnJaHYA6AyWQTQy7KJzE8UZLWZVo4eMEEZ5zxBVzDuLWdiNPQ5",
  "key2": "3t9MbcppxgSbhkue8pJd89boRk74Qxo2jJHRXhVYtkxajgvYc6yzCMCacTSjX63UrhVTWGxPqjyxXqCH3Yf7WeXq",
  "key3": "36n2puKC2H1BF1wLoHFdPDmmEcyrMTdLfpHU9GxVoBts39Ew4nH25CCykzDoFUEzBVe8ghEBoQ3XD9fZmYC5YuP8",
  "key4": "5hY2ZWrWQ6gt4h95JvVSvAmJwiRyjUdW47dayfJGSj7pxK6NhN8PduXrJkCwuTerzvHLgnsoz4B2xvr1dcMx4Hp9",
  "key5": "2DXZiMqz16dQyQ2pf4Gowp34BLMxBdiuKinvbRJ1DGeYsUeZ7oiS6AhtBhWmSG1ebtdoon28mHuHsd168CXqR232",
  "key6": "35pYFmN6Q5BGA5uniWbeNVSfQDVn6nTovCPnm25kKFUbLhc4Nyf4RoZF8FJBUVYA4RL4ntEsciyZBd8HHMc1iEYj",
  "key7": "4CUXigAnM5Qffm9vRL3ZJnjuYqpuBAk9S5fwDKNCEUrbZ3ZJnmUtj3QU3AqJkB56MZqV4PRCEMcqNj7AWwV6bXLU",
  "key8": "2euwyGy3Nvm79f1Buogvmhb8KNdczpXLFd7S5pu8Ec8JrL4c7MihngUkY4MRMqhZ2JBV3RQj954YtFGNevibPMKn",
  "key9": "ftzmudAmXVw8d6PQGZ1S1gbUC6FrobQwha3ppLC56BBHhRmLacsFgivAYhsAjt4eT4RB3X1DbdmZFSHwuCbb8MW",
  "key10": "38SWV8bof693FoQau9B5ppGAXP9eJkTjPR4P1vk1i3Feysa8SqFvjEMh1Lr3rCn4FnEhmJtZCjNzTVXfkcwWD1kt",
  "key11": "4mPvL32uaLGyzEiezdtehtB2M28TE38ag48uCg1B5EDxJJGq6mVxGvDcv4gdM6gNZBf83gXGkYvMxYKojGMe94Z",
  "key12": "4qh7t4hwkQ2JL8SqxE3PTybyes8Sqeb9AT8x8Umy8kKHn9uMgYDuzhRQTR6t1UR7VLyeWaNFQX9cbUJEXKcjBNnc",
  "key13": "3DRcizcU77tbEupgBcDFHrHAcJTuZWbTvQsbbBQ9HDyUFntAm56rNGPxmyaHZcdjoSLDtYYBj1zd826CtBEf4FqD",
  "key14": "2sSV11BDBkRiWnGvvx2HFs1wgXcWY3zZgJ62zo4vdZiJwd8oycRRExm8xie6uUa1p5ay9S13pqmWtKZ72o6F4tJQ",
  "key15": "64FHpwa4dtZHNV5Fm5jYaakTS9SNwPy8BKod2KfRN5KkbMe89FV6V9K7RbJZL4PmK5buSCu16xSnK5JAG6EcYiyY",
  "key16": "g28DmKCxScUCbDpTMpBVujiv3Qhu6NBaW7oPgU9n8uo14NxpYfV6dADH7vWEPpQs2faeaE6hh7h7oeM5afiPbXb",
  "key17": "3UvQzZo7WPNuyVBXgcwPz39ZmyAdZgsKf5u9iKGhA1E8QLqt8WCKjVbqyUGqevVT5mKyKgcAmsce18M6suuhF2C1",
  "key18": "6vSFaKoBd13HNo3dArvtsCf6zFgDwBM7kzNpFFdScnzkRbjWLQNkp7J312te2PwdUYR4hszBh961Zo3yu1eb2oJ",
  "key19": "25p9LG4yNUhSALKBsXBrzZfCs8r9S5hZQAo5b3kNZpkTAvJzM8T9A1XPg8oxUmuXa9fhzt2jYog3mj7jJkvBGn8K",
  "key20": "4gTxGRBvitHBthqnK7EXsx23Y3R9JLBRSNmPaKct3puwddqoTkaHKDdBwFCEM5yHisJdJTSL5hq8G2WpNCDq71TA",
  "key21": "3EC8W3ygsT9dxM71z9fD67GgujM84WPd8m6j8utXV9MFXTXSCh5k79jcgtrREKPzc4yTiY7NXfTCDvUGHsofCZsr",
  "key22": "3LCZd8BDnmVGEL8aT4tsu76soEnaTFxsWNFYumaz4nyd2TWjGs5mq4PFvHLzSSkoUJb3gDK1ErVR7xECK9z1tP2L",
  "key23": "5aYVYoEw57KwSo5qnnoGB51eKFUaktDCJScfaAYU2G4pBFwd2yajSdXdM9ekiEU4uc1WaJ3F8vsEVwScULbu8hoD",
  "key24": "2dLRAXd8FxNhADJr4KE5pjNq4krLGUQD7Emgub5nzgcvRowJpHbsrHDwSmg3B6bJuHnzeiD9gPcntDbEpk7fLysH",
  "key25": "5VUh9fvEd75z9s5CgJKws3T7S8gMUSrX1JNMkPP4oYyrw5RZmXAYZeiSjUPMQ8hwxL2RBNiUc5N75467sKW9pHpe",
  "key26": "5TAC9iAcJQyRqhbsyZGEReCUXgRnwzz6mW3f2uWxZY65JNByr1rym8MA7VxVCYtTXVePVz4wYpdg9pYdAHyVKgtx",
  "key27": "4UPPrNpF51TLK2psXW4Je7rsxp7qZexjgZavgjzqf6U3gSquPnXDmhVavT33aSaBrGAgoAerES7C8bQzRLaVLuLa",
  "key28": "EpSZUrP1pmm4ciM2bY21y88VjMzGpkBgEtfuxKJKyVEkx4HV79u16qxHy4KNrWtiv9tdDZWZu2r6nihv4R3w86v",
  "key29": "u9qDU1YjMsDfTz4bv3aZuYe7nVPeVTeFFVRenqM3PrapbUGcdidA6xirWcwHJkxfqY5wN46rp2WKD2KU4uCAkV2",
  "key30": "3pmHbhu2LJoqaZZmzEB6LgEJ3FSHWfN1ZzhbmfRNazPkMGKhpEhC7dobhiC82UxgS4x4mvh12Ji91Z6bm4XZe7vp",
  "key31": "4SgCGp93kcTNT1xEvoD6N4fKTfVsvdeTokduUBC3mnSnnK4yyGWumt5uAzWpYeRyERz5Y1Wp38YknPma33fANu1g",
  "key32": "4rSpBwLX2iiDjap76CHrTreJsWKmocJvsX7ZgTPQLxMQeY28urUetBFCtoAX9LjtB2LGwX81Yu1GywLZ7vSng47e",
  "key33": "2K5PZdGDeeh6NA9HdtEZJxreNgZZN4Q8LpYLHEiY4JMBUrSs8MXGh8Fedv5rLLZCwikTeF4J2xu83U6vyTfSAWBC",
  "key34": "2tJmXiDVjg1JfP7iMBN4ckZKuVog9zhYFn2ZPLuvVL9QtcpbVGQrZeM9mnDUAdzi8TnZN5HLX75FvnpqVnmJQhtn",
  "key35": "3URUVfa2bHUXX96c3NsxZqcMXKgUymNF752atwMyqBWoocZmGdw5NbrNdi46KyXCmQw9LTZEr8y9g1BuEZdXKdiG",
  "key36": "46HQ1h6wSKcX2cWNd1duogk3RmFPA9T4giBvhCqcUzZrvURv3UdJ2ngzwmwoT7XchMca4Jb2Fm2dXD6MG2G7KRNm",
  "key37": "3vXbtgeShq3MySFNhXcRVF1q3yFKu62B5hpadPyL66w4CEwU7CdEinvc1CMaRhPfmtQ2bLSSpVF8bvtYpBUmE74U",
  "key38": "3kvJSYsD8NuP43RXw83Z4ZNm3AjACYdTNayY77QnRzPPso6r1ArU875QPggNHHrbiXFavb4zoza5NitLBAiGezX3",
  "key39": "4TPC6Y7rv1kymteoFukSzN1xUdv2u1RChG1ZtJ6AJgHEJGKa6NAookPbjfZ6fAxY4zrfvq9gZgcasqNMpJavpfFR",
  "key40": "3j3xP5JYjGRyneKgSzXcEaDEz7CWaHVVwE3wQ7oC2waXLSUAE4oD6Rg512pQnQVpy6HPtFy5syGCkXhgZYZQc8TJ",
  "key41": "3y3aB2mEaTqcfdGsrH51imcNRVwXzkJ5qdUevDNyRNLc2QUv3wrv1wUFzL8d6rxeLb2oDhCHPCSDxdgfVT3bgpxM",
  "key42": "26v9k3vNkVQHT6mbvmCBRG46S1EvgJjYLFo6cJFesgTp3LTsnjGTWYhC6HbmiBZFpyHPAHHpxUuZjtXErbEoPfCr",
  "key43": "27rgNx6rHp9WYU3fUfFMSqP6Si9cU5gsyHKeAsfP96VnqyVWvFNKV2hpVCzPSTmG3Uumcna9pTXMwhFTxYPcw8Yt",
  "key44": "42ksqkBbwdiYBK4DAukZuQxjWj9vNMJzThxzHwHz6XUREuyZxaekAduVgfDe6QR2rwVVPuFz2EeZahQ5Mq4Q56UM",
  "key45": "2Cp7Vb43SHXXTbXu6bSvjGSgsWZcoWn9Q8w3HimmasrczVavfkTgm2iqzrX8aiRf4dWYdihbM2JHLX2RwRnydxYB",
  "key46": "5GmWuHx6VnkTLWrXDM2EMqm6w6mTuQE8g1jT2Php8csNK5jmSQDN23XyAt6QiumLtwb7GYBn64Q5cWfKkCgxkq5w",
  "key47": "5Hs7mM3hGVPFUMuoqHeT5dsBtbbAWkJwYm6hiHnr4PU6JMXXyqj9MYonaXTGLqj52kcQMCH8duLkSSQBkZrGBiT7",
  "key48": "BLKSmcGyj6wMUxrRn7jCNhJ6pq4SeSidwkKgUZShn3cX5gAjFAqMMU8oZvbymJAEuHc1GPBNTjraidmxEZNmCsM"
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
