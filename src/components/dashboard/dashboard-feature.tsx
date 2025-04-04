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
    "3TcxgETiwvbcCj41NSm84i6UQ3GiaiQ8Y4tSQtnKWvfzRKPzWe31cu4breyPtqF893sMTFiXmEjYonQ248kZt7RE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rKTGrMav2LpDxayEzZVpM3be746mZV6GSguKJZMo4dtgA1b4f2CU3fkwRQ4fw1ZBGc6Tt9RvpLUNL88ibskDz4e",
  "key1": "3S9S5b7yDXcrPt5vxVEWg8oJFatNZNsfNJhoi48nqAqRVW3EkE49MQhFz8L4hSoCxygk6RmdqKEa7TPJJNmrArUt",
  "key2": "JXAADp9TiLonTxbDoadpMFLSR7ZkP6omT6fyM3RuThwFwLLaALUT19pWaB2S3EnUqqT69sRDjB1FhpoDzWJNfPv",
  "key3": "3DsKbo74ZMXhRCTjmSfPJHjiRCUMDHRtTtGQYC6yVqCpuY4vs9XgNr6wZeX2kfdYMv6sfRD5X1UcbxhHDsmDuiiR",
  "key4": "4212D1r2FkYZFs3ckkkbRf37v7zbrnCuVwxu2wTekKD8fs4mNPGo7APm3dWReLZ9JdUzbd1sgSBgLZTYoUYBqn87",
  "key5": "4bNx1iUhJNYWtnLAjHqzTYNFAar52tSjomkv4BZ5cCPnXKM7PboVo4EPPDSy5yqnWcwjCZKRtDVNUpSjeEK1TdGB",
  "key6": "4FXi5c5jZ5WLqQBbNDGnDu1Do6zeRtZL1TJ6A2XSYAgcAPE9ifJKGv3sRALFE5T416VzegeYWAkLGQ5pvsdpcSRE",
  "key7": "2cCYqY1stGmVwhghFhgLFSEQK7eALgfig1UAJbFEMRMfbpWNKSXEaGVzWJWeq6SMoEgMpNBPHysnQHDQt8U47yvR",
  "key8": "26mLZaHNLaVznrZJkFbcXyXqFrBUupkqud2P69ZuvucNDtcKY4Cd8KC4a1fKju736BqBma4F4cSPM34u8SrfsMbZ",
  "key9": "5qhQf21KKRwEr4fA44Z2LUxeVmAu2t7kjGnZKKMidTC5qb7s35RWxqXDVavciTcThdkwQpGBS5p6pnrRVhDRwd9i",
  "key10": "4ErfvzM9TYi5U83c1qoXUfefLMyfSxQMWE2zGygcApcTrdT9a6v4qjgMmAAXy8xzmsxFXiDcmSLCU283dGxnkdoq",
  "key11": "4EwhBP9GxNw239NyofRDtHkGsxqWTjMnr1dRgmwiu7FCXy1d6Pd3TwCC4Z4UtzjWjDpZY3MxBQMHL8LYKrERQNcY",
  "key12": "2qZoNP7yxmvnB9SccPLV3Re2mRCiZ1odJ59BFg9n6tgC1xT42chAWDkd21Sg37WhRDmDqeg5T1C2NvpNN53ZwnJL",
  "key13": "CAo1GBxjAu8nMmj8WqdtEWvoNtCVDcgJrTpACch8AZZjgkuk3dQw7teFmm5fKvXi5q1WfZZc43uSVXedzkEcxBD",
  "key14": "4iFpnhwNV3B4misJqgSRo37pQ6G3Rc46o2AJjQ4xkN7GQFqtYhWLF6BHjtjZv5f7PEHPdHVRhjVXiESp9Dh3C91Z",
  "key15": "5Vm6f5gF52iFh6VvAttcQLoe9A52viSbthx1U3p3D3nAHZyzw1oir5KdKBcQFVWYNu6XFuCwUufozrZz8EbQgyHG",
  "key16": "5cuJotnkwAzvgkAZdvddLvEXFtY3Q39BgEq1gAuYzB9CR9T6BdvYmxK8WdXFEU1nhb79zC6G6qDYSzR6F1FXnbdR",
  "key17": "24jcTShwxRPBTFDFNEsBqnAzqJS7FTVcyFNQHHKGsLNg86QG9KSoitrMfxAFSkCvCiGDBdoBCyXvhFQpCJUZUf84",
  "key18": "4z9vRMasZJdNdXxWj2eHczS3Ji1RgfjwburbDhMNhmonqjxpJ2rf6VTHoriDgw87dHFa4ZnhRpU6NNNCQRiQs1Eb",
  "key19": "3GfAk8sFaHUe8SwvMadgZWHyaPDxPbLGr7JE784VZs3tdu4BzaX3okYTJt7DUnpbvBcit5PfFBqpVWpZt5AGqw3A",
  "key20": "4wAzdi5wTMSzz9JjneNQRzhNEvJYivjkkjKCW11pE4B5aAdZvsSkPKevidp15Dtv47wAU8UL6a3xVRyWcEMdV6wk",
  "key21": "5aH6sq2XAHa4C7Ajh8z8t2ZpMjwZohWvbpmR9C9XtwYEeDWWiKVw7qYghrFXmy4rauogBbtwF3JqHN1qys8qPeCS",
  "key22": "5CvAi1gNkLGSfPWwyfJHXgFq6eUjkYVg1ziSwgJDLU4oSsRFtGZubWCkB2oqixkgHYrP6QHSkzNrzA4jEJnstkjg",
  "key23": "3QZbYHRv78sLYHKpNZc7go9h9NmCt3BgUJVGvBiueRdxKfdmhYkzwBcPafscVvR6AdhzhBzPcBZQk7qDuE5pmSAW",
  "key24": "5qoMuN4DE6Bge3kju5Smx52AHvko43m5ziR5MeCsoTZ9GaukfiKx6tACbEqMExZQjhQsby4ySkxVisEF4JvTVUzi",
  "key25": "4VF7v4aFBCM4EEY4dUvRRYG27azi4JyHjUW7HqLpjtLsBCevvQ6bNqA1E8PNf9pW1YECQ6K7EgunhSjZdZviekXE",
  "key26": "3yJhHH9Xz4a7LvJfifADmn1YgSBykLX5qapRd7EiVdqF1eh8qwRTowNxg7abetoewj7CcVykiqdFZXhe1QWgzEKe",
  "key27": "2Fftf11daMmF9aAoUrg1mxK2PikFe1Asq1xUUYBNVHJJ2YNZqcdryav1pFAgPAJZLb718pkcau7moWGcFpLJ1tAX",
  "key28": "yGuCjTLMJV75whWrAdins24epyuFKzrkC5aHrQp7patHK9jAcciupeSq3rUR9VLdPG9QGrjiMsYuMqoaJgfrk7L",
  "key29": "3zTrAdDpkHMasiPgZzyg7WGHfGYSnPiYzt83DnknXBz6L6CThAeqsxCbPjufzqT5AX3ktU9bWr9ivk67TXRcyWAt",
  "key30": "2FTkaq7jg8XbmTN9oiWnteUqyzTptbFau7JUL5L76nB31WMX4pr1vSzpcCj9HPw2KLXXZTvemmJwmHdo5A3AZBfn",
  "key31": "2B7ftdqPeTDtttBq9KEY3XrLi3T5eLR3PC7qT35uXU8jEK16oSGmredqiSVh39U5c25iWMAc2GrGp1nvfYyXRJiP",
  "key32": "3AUhr2ZNxCVV5vQF1g8o5CDtyjswoJgxr7vkUPvRRDybwPZTMfG1o4FnyqLm81Kobsqd25uC7sdDJgVmdg3tDerV",
  "key33": "2Gc6adVHsGenpXZvhVyRQMb4hBo8UJyKPEtUtXMnQ4mbHH57xxy8xZoiaVTwvnLjSzbY4MN73DWCXhrFm49kv2zX",
  "key34": "3KeyjZrG8f37tHUPWWCQRUqP3epRvi3L6WX4qfytJ9yGhzQwnaRgJ1746HHskguK7mscQacdWr9DJAysNicjuQGw",
  "key35": "48z3zAGDQUWENkwi7ep1xPXp11NPQJkqDQbL7YBasP56NdtDP5pPLRBYPK4wzB8fFJcMbvsCvv1WcVF4KPcrHzej",
  "key36": "2iRMm6sEd6ocCokjFn2PyJwXN4dgVgejgaSr9U1zLGDyuY3z7A2U2WnbNcYUemJY2Juk3qzGiDWwZmKQS14rFyoa",
  "key37": "eghN6aAYPbZLszoZY3yVzJzYxknV9N58zcqnJgGFNWtsyoRnPRD3FQKXy7gQ1eXXzMV3KX49rzmi2pXY3e5HwvG",
  "key38": "5DLwRzcirRZ9oVtq59fU6YWwGYk9mGxL3ZQ48UtMu6ULBKEoFa2iA6cCRZsyJYhhXpykMPpxhAKnmeupsWDc3ZgD",
  "key39": "pxuVyoY5jKmq8k4UvCYdYtUPurxe1kuUTrQqDCWH5aENmXSSGPyB1z3SAyMgoXkYPJghHATM1kuuJks8yhVBtBZ",
  "key40": "2DYE55Ssgt2FXMX5AYDn7gTzyhzPwy3x6PHTZPN59w2RHw2GucAbhhwQyti2dk2Eec9pAWJuUs5M3zvhVh124dtX",
  "key41": "348X5vn3mwT75R9JEE26G6wgT3T6haN23g5vu5UXjSy9v9giKZUuNAUtv7ZPJ5Ve57prGJsggZsqHeYg5rYakmNg",
  "key42": "5BephUu7Q8bojRrg8ntzFpinzn3mayJQZF4F83NkSuS8Kro5g6omcp5unZqkgGEfPC9vJtAZLaW4NVFFTFFPQvKZ",
  "key43": "5YndZpfxFPfqWBfDyFTKw8HMk5zBfsYgfHuuoQhCtD2kHPy8F4CuveQg6iFQaKqs8ZHYkE847ZxoLumHH8PQr51e",
  "key44": "5CTfxx6cZgrHT6opzHWnW3up5wAobgf2MqD2BBKUC6rXgsEV1Y7UCg3fVqdDt6gte5J96LsS4aS3kk9XZFUtqbZj",
  "key45": "3JTn3WXbjbsGgXQ4DKZPZzCJyYSWgXB1i3SnL1XwmtX6jfCeGZVckCWWfWZCYsSykv4q4TmNJ5Z1SejFiLvQAMfZ",
  "key46": "3imwxuLV6jV2VyZuRBJAvbXj1jmsDmajUYDxUfccX7PCVFV1VdWDf4gX4ArWmeVGH4uG56dCwTgEMdDTEHQ6iP4e",
  "key47": "4cW5udkZmCytk6RfoCMb6A29ueZuVX9TZBtG2z56b1uAjbL5m2zGipNmeDsHx1pfDctsU9Xop31XdBtqPK8ztRsX"
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
