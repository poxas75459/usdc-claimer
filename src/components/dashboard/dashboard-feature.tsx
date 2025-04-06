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
    "5223HNoyjQX1RjDqYfkEZZigvZUpg8VCn8srH9EVVq8oFJ4JW9UDAjwthZUURNH9PAuKZRctLH7VWvkBoRBGpQA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41c2PH5GPdhWUE3cQaqHMjTKv5ocx6sASaYz21bJoq5w38AitXP32tSiFsyAzqf6cLbF2U2GkALrchoReKs3HRcw",
  "key1": "4eoZjKP7EvLVrFRuo2cSHEvrGRGTs1DSdyrGqdxYT1HVh3bEbvv9gDeSRCnEqR8Znmh54j7bTLsjphffAc9knCG8",
  "key2": "67gqNEpgNYEUszpkKrqdyqAkqp2Kr4WzgJbdwbj3tF2ncLZwJnnZDrDfmjUXnjmQY9MFFsQJah6rWjK7EvKjuNSr",
  "key3": "3w6iGNhEzLRdezN5DURmULz6W2jyVwWHMEGageF1H378xVBcEcdZKHLx1yWvuft4LbDxnTEy6NKpfhwxcLNLL8xY",
  "key4": "BXyRV9beYnVzETvNo2icXELEcmxgGMiNU9LMj9wqaokBXfMf7E4ctjxK1Rwab2gcFNjPo2tJkCCxR9XtVfPaBth",
  "key5": "3aPDZGbGuBHdsMH2VYBNJcjv7hkAmn8yF1nnPpvKMNhQsHD3E1QxXFVqdjcMPBGro4vrYnVSqR2pbH4apJZtWrFw",
  "key6": "64yFM6XMiUXqpmfHKwNiCh1BpLXu8pbmY4ga8KaSf6mWKpqbfmMyFM1zAVQB3DJwowjsLELQW74wggox4tbadbJ9",
  "key7": "3AThNd9zTiovk7kmsfRgP4jk5yREgfZWzzfRFsyWNXr3CTycmVCJQPwnGZB7xDq9FWKcUVoS2ht62WgNoue73iZ3",
  "key8": "uXnZ8kLQZqfUZCPQFyLpEmXFuySkKbrbCGWXFhTW39gZjZKNt2dRaHR4AENrSvJPNKcmf2gRbC3Zq1Cizx48Njr",
  "key9": "2arvXtGHZ3pLmfoMh1CE7jFdm2cb6UTwTktNYnbouLEM65L8Hd17VLa3WLN9hAuthAaF2vmDHofpJ9UmrpA497Z8",
  "key10": "4Bw23C58V1VVhTX8a3ryEEA4bZGCRiKQscjJwjc6fDrTbUfwvsobM8Dbbpcw2hB53ZgcSzVJC1ACWFi8CYGbVrS8",
  "key11": "4mtGVWh5pnVq7iSVgtGFmTG5Ru4d6pbdeRwGHpuRMgrwvFcRTd4fZsr3jCPMHU8Wju15SKp7cnoj2TqgMExWUi6h",
  "key12": "3F91XJsbchwPFvMAbc6XmcYWC9LA6FjrtVmrRrZXFZa97pmrfs6k6wV4xCpYucoZUYzfPvY8s6UDq2gt1vhJp7i8",
  "key13": "53hnsKFfRFT2BZm1JFnTfZ8cUKKj4rqiMPDmkBrnmHzSqgDc9BcsWawu4ho8WeFspb38rZoaU6tw7RVSX9DdcufH",
  "key14": "5huBgYgspVBmVYTmLzKyVBMdMtLrS4CkeBbNVTLJmgVd51Pc65Yzf37gHbWoMVirmvmgti59tZyoppPVEReFeBr3",
  "key15": "5aN3AktPU74L1rYFrLNi4mGhTEDtWNn5LEpZFUKeoYpPgNHrMnXA2zsWFVhpuPd8LPrA7BFcKzjgSYfCeza5Fanh",
  "key16": "4c7YW51ZJ55Zc8Gu2PzztWuXSrrGnxS8c6AUoXQV6bVZhZoC1Fose7KH4Qp3Qao5jaNUzk3TuVNzDhy4erWo17xS",
  "key17": "2WYMYDJmArEhABDNcqDYHhwXe6LGvboEx9Vpzvi4DXnXhgxc764kxu2yzYcPqm1SsKA595vDW4pnv9w9J8MpchuT",
  "key18": "2M8jvfB1bmuLAtEzstWmhUEWq6vZ45TED2BNRvFVKviooRv1KtTWRV3w1Yj9AR51pdTDcLeFTFbBqjAnhxuiQU85",
  "key19": "42nXeW7q4vaHwJMseZQoaw4P4vTsabwyPXuz54ArjvwiaikyQqcFmZpzrW98HYns8yvGHnGmH5aULdAL2JMSAsrk",
  "key20": "5JmBgZtcbo1AZRM8YjkeJVgNgTNEM9hCLCAtSVLz8UK4g1qJYZRTmAvNppwPiwv4qP9rRGiDvcojkMwhKYePfy66",
  "key21": "57dpUqukb1Vk445hdxWTYhkL7xbBdaNgHoiyYiTbRTJswRZbZsX2nNhByedg2eHWaa3Fexvs1s5vkFZHmbF8XZ7S",
  "key22": "b2BHbe4BEccsARJZeGP1q4KbMYQMUNn4unPFtqYv7rMypRYoT5bQMcZQCN8isWvqZY36Y9PghVRLXgjezKNeAKG",
  "key23": "5a3aV2VH3RHzjLqeg44zD2ddyGHiEiSGsk3fy4LVri3vVdMUT2WSBsHpG5BT4L5DDk2Zy3i2CT9gi2eRbsRc5uwK",
  "key24": "4H15xHAzcYD8J3o9yyL6ujCjVmK6qmHydbXjH3jD3wQzP4SW8UXebKE7MmrRian2TfYqrwsMh4oHrWrPRPGZkEog",
  "key25": "4S61DxgXBuJVFfCBMXTE1XqGsazHxYaGn8S8M7oVjBaLqnA9haFvPo4KUW1zTuoCJGJRVvsbadyKCai4uM5CGK4L",
  "key26": "3WUGaxaK5BhrPbcG2Rd36iEWJ9XhcPvYU6cUw6YLWbMYSqdsMmhb2wMgqQLSEkzjnxcyYX5LyYaM8LCnyffsy8Vg",
  "key27": "5fLvmpYA2ou34Hx4y8Uttu8nKv2gaGzi6e3acuUdsDXqtM4MMcr18JNVqSgfAHUVUb97qCVGRWmibDeH6t9XdTvQ",
  "key28": "2xcqwLcDLXy5SZcbjjSMwKvJN1d8VrKsS69y7m1fAwPM69wHPmKDnssDNsxiZjfUUB1awpEFTN2znchHSR3qpwQZ",
  "key29": "67LpB212YpHjS9QpZ71jPm21fA2PqFVXwKsJJk1ffevr1mAAEeM1weGMvz1xtHZBudBSpa5QSTGUgjvK8JR8deGE",
  "key30": "5ZQsiDJVnUByd1BtsuopMCrnjjCUuUTPaQFrfq7cSzwaMrHjk8cG9fmuooQB167mps7wjQR9znrzfhpSxSVhdtGY",
  "key31": "2m3Y2mQfetHWVbDm7i8HqGRyYmA3LGDpXqxeKGkKaXQaXhWoNXkbP77GCLKQwg4kukvxBXQNYpHDzv1rnagYycsG",
  "key32": "4SKKgb5LdghEjxyJRjc2jeD3FQ64AsjezfkpaoKoPCoDg7AqWgN71ivgdnEz7aCohqxyXUprXBRyZsGchUcFwvQ5",
  "key33": "tKFboW6RnEth7uFpzDAG6egvusPDPqnzrCrTTheCixyjdv5CRuKHdgJYqxxyQdNqDWMbSFpZ4ysz4894QFKFfQz",
  "key34": "3brKD1QapStE3tBhXE58xjocNb9kquJjU1LMn5Bm6Z1BNpx59Mew9Sy5gqS5ZFMcjWY42t9tQZDoFVEzWNYoeGc4",
  "key35": "54emp87yPMaGGUUjqkvzk4mZoFdPT4LQeqVrMKjmb9aF7x8E7zeqMRdeucunR77hYtLvegqSqjaYu3nZ4EFyKMCH",
  "key36": "KYn4cYdR1kgm21r5yA1TjXnTAnCg3xFBxvGXdEHgo9QcZQtz5Grr9RrWjdyfmTCuFAvCM1D6m8NNC13vZ1f2QEe",
  "key37": "3SHJjz2UGVRQWwTFPyvCezfeKAKiTfJcqpVTC66P2zCUh4T96A8YmkDNczDwvf1bexDGys63WhJnjSdjdDkvMVKN",
  "key38": "4kV9781ANq3VNrXtW2ELYWw7wFhVdE73LJf9xS116bPh96kVKxJtZiRu2wRTuaR2LjQNTn2jpRYonQF3G5foAw7z",
  "key39": "3WpXmSzXeB5Zc8kx14ZZAq4rWANDgZxPZyxfSiM9i99B9veH58RzNWkXfxP9w7vMR4kP9gKmepXdcc8xSbFZA68y",
  "key40": "PeEe8A4zhJGnv7LFWyCden6wJS5YGNZW1oswigPD3fp7ZYSGiSHLJWMFqyBZXpfoYzPmNQeBSi9PGryN6e3awHH"
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
