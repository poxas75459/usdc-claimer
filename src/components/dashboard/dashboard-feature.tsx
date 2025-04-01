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
    "5JjGbiivAyFyn8snScvrBnW8T6RoWC7uPM7iSqBkqcvGUVE1oBscYBamsizkfEvjx9Xsw3cS3QkuLkU9gEzN5JHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HE4p6ZhTzy1gduw9YxmzKL4rvGSKQ1s24EYTTyF125KJqVMUnKnCpVBUX4swe68HK7CBFhLB1kMs6jdNMMGhG9C",
  "key1": "51w1663T8UE4V9g3mpFBfV87qZCn5zvW9KpMeknK5baoLgmSvYkcbW2nizLYibVqNyBSWQb6AxEp7bjSJq1AuX2f",
  "key2": "5FqzxTikWTBiTtJMJiAxFvGdm27peXFnyPzn8FwvJ1kz55NxBfREkDm6Qx2U9pfyksM6n5sczqNUdzqprkQPPG3G",
  "key3": "3kMkcn7Xbj1c5NY4CH43qDPjgWs8Z98A7MdxZVuxLS1zbq3eNPcsNu6BGyu4B2TdjSNB3yg6brX8n6EJtwkSo9D3",
  "key4": "ugPoEwSpR9UJye6Z3jWG2Z4x5BpFPF7HJLwq4Qh9qoA4qfpvqVRmTMSPBTF2M8CewLgjMZD2sPBW8moYPr57oSn",
  "key5": "42aYsmtEuWt1GpveJWd6LSzw3YnkjBcTGcyCSibTgpPTdH2iSWWzunzBzPrzcFgmpFYbtRZkLguNnxFWVLETRq9n",
  "key6": "4yfc2PQXR8iW3BiChpEm3bnYDMgq2ZRud3e2aWCa8AvZAo3y5JVhAnfS2QZRys9SirkTordbNoJjvn2JN3Hy85Ce",
  "key7": "2Psj81Dnzzxrxwsk54Q6bnpP6kkaxFr3wrqDtkv8DahTGpuTTtNr4knn6N1mUcYEFysSDqd2eg2hQegX2UEXii9D",
  "key8": "4unaBcT4o1ckk8vrr1VPhtYbxoaX4EvT5QWnPqd5L6dhKJciHyjXYkCDCmdd2o9ZMKcbjnPo6hF5zMXWrUh6QkMn",
  "key9": "5A89T2AoJZWsNs3eU9WP1Wk5ATNkwXuCEPyv92qyg7Kz6kHhado2NWtQfUXTPaxAMcWotViQcQiGovYtYBnECc6V",
  "key10": "2BedcX9b3zBU1AjvZjby4sD6HnmNTvfjQ318EZiLoD2p3Xx44ZkRyBY2wrntnHi26o8iwJRhsmnSxyzXb1SAy9Md",
  "key11": "ioSpup1PcJL92S5sL3SZceEmAdvTNtsCJPsPDCxBf6LrgFb2ittZjDen1oxuPk5Nr7wLKqR3kXAmkf3pwSMrLBw",
  "key12": "3NQbNVzdqqFvbpF4c58UmXtMESpkA6ttmjm3q1hP5NtqMv9v4boREwY6FPdCNs9bnVfteuXCxYNJ4V2NSWDAgHfL",
  "key13": "5n6WihnQrb9MdvbWPpbkbjYYG81mUcpZsfGmDkmbZqvBsceJ25HRE3wU7tAyanqjVLRWqCrRwvcXDeGUbXD15DZQ",
  "key14": "3J3JTkuHP9PowuC7QJKRYxfYaRiAVqjyFKEeGHhUAncTAey5F121yDVmWXPKXr7zNN1WujH3962wtHSf8WorxtJD",
  "key15": "sJT71D2VTrvWRFMRETwUYjJx6F6zqGR7toxFJZxfZQ2gy6q3mAZiACz4RWNa2PzR8SKQKc4QmFPSuwiywkYrGNf",
  "key16": "4W6qvZtzwB6RJhyCP2jEPE8orqkEdrNsUZWHQBTe37YvWTEdiNUJYLxupirQuMUtbYjGvPiYQSv7tjcAh7RHsh83",
  "key17": "4F4ucAtHT6DQscdTW1HZiqMbqt6JhkP99rePn3RDyWAi4SX2nUVW3Ap3eSsTFRKvwwbx5Nj9mBBPod6s5tomXnod",
  "key18": "3rRw1WTvECMrJAcjyKevcLbe9VCGczz4YTDg9FANF6DEn5JTVA2bVeGYiZEanV3qxskJj3QaxeY6im95eaD9zVWV",
  "key19": "4sN7k6nPQznXECZ1qa3WiAdSyFRVYSWLPL8kC8vcMkRsq1f5ZKKZ3dnTuf2ePwUjCvH73vgenmKVYNP3u22EnRJi",
  "key20": "2YeFMaDFiY1SuUMJNcrkRdK6FVR855WSwq8zZ5MnqFnNmACS7a5zndcUziVcVAqYj5wEhF4SrMh2YS5DnywenmSb",
  "key21": "65tvzCEfE8zEvg9AvEiCLQhpELN3VxA5V6kJegt52a82funh4Evn8ztRraBQXprGM83nt2qQWE9zMcFsaVfV7giB",
  "key22": "4kDp8f3oNquHcG1EvHH7grmZEhsrEc332HdfKyTs7BVGF64hWRc3PXk2Gh6hT8sgpER5XtQdUaMKexpJ4mNCjAEt",
  "key23": "vzNYqBVfc4xC5D9UfE9p3YoCk1q4Lp4PDGMXEHYgsebn3ivtyPMAXtJoGbL7qNSRKShk3DaiXDTXgs83vJokSBv",
  "key24": "4bZ6X4SXW35Xc2nmb12h5JwWfwPF6myPN8GFcLhCnHC2oyEtL5RMTHUf5zLbpTTi4MzaKQKPvkJeRt3JJLWVxaNg",
  "key25": "45u9mrhgc3MFC7SUys76tsENNHdzVDkmg4TVQU3MvKtaXcumn25f4GBab9qTk3teG9qxAnHQGZijhaq5odtK71un",
  "key26": "52tg96qdpLMtKNghPArn7xz9mYHkhbW2JiYiQvhfGpyj9RyzTiZ6tdypQJjYFwLZyn3S7xF7uYeE1jpToGrFL8bw",
  "key27": "5bFJkya87TuQm7LbnC1N5QaAf9t94i3vgPkv6MBRM4f9xR1ByMxt2i3YMUVdcQAj5K3wedFsy9y5TBBeBnd19Hy6",
  "key28": "4o1tpH7nqLcD3QBhAmX6jFzRJ2togsmeFrXYSHYcYAdNs2MJn6hKfnZb1NorNL6NaaxcRj1Rie5FrFaU3veb57Uk",
  "key29": "HaXRZ54L1dbB8fmvCgGbFZ1gPeGmrGi1ioBv7fHn6mS91oTL1jjThvYxdvLu3f95b1524mYvmKvAt4FvhL7eB1F",
  "key30": "2CRP3ZHcHY93NNtnTgd1PqG1Fr2KwgLPhdqkyxEKGvC1FAoeLXzgh4rpjJpDUMBPnuNsuzgxB5vuse1AMXvLE1fC",
  "key31": "4ppzqPkYmX5VMMHyKS5Q9iCXjsmvWeQj5spTmcXAEyU9S9QswJREEk71nJPWKWQSxszFjCNa3wguMErbb3kudKGM",
  "key32": "2st6hUA1UYT8chBHr5wihdUWbKZsgZhTXz2pGuJsxRfNgWuEPaM24hK4h6cTwWq6EstaAyX7WXpx7qNhKDqLwpRy",
  "key33": "4DUUY15bUVk6qmxoxtYZqHpWDaJdtFDFk8YW3ixTc4RyeMBJcL4xkGzVJBMgvttqoCUTafWWLbwegLft2pae7pbo",
  "key34": "hL5tJgCDRu31GnyaFKbCGFieF69BdvQqeugzD9WokUXuKogzQcR3QywRNSeR4htdGqQYaz73CDGF4K1RE3uUWJs",
  "key35": "4SwHibKKghUfRLT6ktGQEmrdh2RwhSfJdQqsrFVLLcxknseYchTdkopTb3ivSbWNxn1LWbE8ET4mhmZWPuAA4QVC",
  "key36": "2qDJZch1nAiLe7gTHSGnDkv77FUgYGhoNmhNiYmYgAXUhzACKFZd97bRWywLA62e2gz9Ex9gR3yJs1mwUJmM3mmU",
  "key37": "4jXxdhhqNSyAuxSxn1fi6mnCigFAEMyYejCCBNkLxk8c5GrLwFkaPXuHi6xtQ574b2LN3ibp88JioCSnH8tR1w8E",
  "key38": "5oncTYdDxtffsnDq56sCkvCy9xSaotmKuw9RJFFMcHq5uRfy2WAXr3HDv4ujqHheKxSRBaLXfEMLv1KwUFDvmdL5",
  "key39": "5nwp3VTPvbboRMr7xLKZ8MW9PF691WZ6vZJQUTRbVK4ZSMnUKmecfhKx79aZCTkHMzbnvxsFTMNrHmcMGKQbBbLm",
  "key40": "3kCgzEUREkhFUze5s7bRHXDvsvhNsbyuzriS78sEJnMfJ1cm8psfzgXBymoqprUsnuyFmVr236fhbuY2a67Cgv13",
  "key41": "2TNF7Wi5ZKkbvWycJESc1xwkf1VSdPTh7b5JpV3bV6ZwxLb841My1DUjYdBfpDjHMC8U3RvTtspiQtePnxf6LRjp",
  "key42": "2s3RD3VZeNz8tpC3EVaCSADF6g1FYxXTF5HcuwraKtWdhjnrkoELeSaqRAAHTCY2FBiKEu8EKZJyB3NuVVT8mJg5",
  "key43": "2PAPm5PAb1JqwmPeeKcUNG2zKoHae7moXiaGymqznGWp9HhuECKiPbwPrhfbaLW4gBA7pxhXNZ1mWy6YgmxuSHi2",
  "key44": "CVPFpMgVsZn6MmKgXNXC6ByovS4CSmyFtks7Kg8z5LxW7FTcVVS9DbsysHk7GPaNZdtwf1XnEXdzAqhjLvGedk4",
  "key45": "5WVcMzhvnoNQfgFEB5JJtqwPogDFrXi8sLUnWG4K7mAJ7bueGbuddtd4LyEhhns3kes3bh6npDEDpofmHDJY7Jm9",
  "key46": "3JCi4DrvpfdXtmTyeJgVizoXJAwuEX2DyVkGmCxtuFNUu6w7XUoC4kgSLZq48ACmmFAC8cGmuqeXiJDqYtZ2rVi2"
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
