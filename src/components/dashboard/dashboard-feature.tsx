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
    "2Tbk4rEjWBgHgdyFYCL9QbEWSgQC1Q1JdJXJ2oCkXzRb1yy3QdQ7Hdt6N8HdGfQsPSRpJL26UgPXMwcJF4zC7KtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wAEsZpgALhAV51ccf1aN45mBqGiFnkyFWD2P3ucdZdvA1MGvrSifznbPnDSYiu3cXYDBLNSWhGLdnih2WPGBs5Y",
  "key1": "4GBkoQ7Efx2KFtfEULyQxUXowcAC86nSzsPnPfrDC2epjJRS9ZKxG85nK5hBqEdpHXz9EjmVkXe9by3yQLHyUMJg",
  "key2": "5cNL2jHtV9RZ6u2dHcNmh8QXVut9HHaHZJFpWebSUjEQ5U6ZXiBK4i7Q9MNPFnQ5aVPedkW2Ke8g1Q1KTLqVnAow",
  "key3": "2Zb8ySPuHcZdR18PT7CBdcULaWAMRKXSrdMHQAktmuj8TSXzFc8YSYYuPgP4ZNGfmfYkyqfuYxRyGVNyQCgsFf1b",
  "key4": "3yLQ89znAzPM4E2KsfpVi94xwMS7SWzPib6kkuQsTsZMRKwrf34Anow2ZcsvEpuFnGrK6zfDUSgvVLn3Az5UonKQ",
  "key5": "2LyAA717iFT3CbEb41BY3qzWccE4aKpm53svNpwHgggfeCLr3MdzudD81AxsZ7ZEMpHeEKKbcFiWwJ8vWSY8u4bF",
  "key6": "2AU28NpxKoHUcsjYmfraDPHho8ZK9xjzCEUmfStSAczFnWwHeNTBv1aUywZhfwBTtWJgK8ihdULTFvYZfiSeLnSE",
  "key7": "415XyZnjWE2z6FmV7rBh3iEvJdNc19Kgs6vPwHR7HDKyMx1XXCBXdWRSpn8HuZtpxjP2EP87cXeiUbkATDo1SgE8",
  "key8": "2ic93mMTqjrq1cbMRM1bFtkTjLVCkNwfy2qkmwbUKHhM1Wbg9Td3PPAnemUmrAnrawk9E8y9bRkbrqXMtcrkaG3M",
  "key9": "7H8ME775KrAgi6CEW4pSKQcFdrpS7bH5PifDEdEYm48s8Q8rX9vEasZdejmyLUWAWLroYXaTwftKBnTVyjdmKvr",
  "key10": "2doADHcXP7tJ6wRNjvB1pTSojzzVbikaea2a6yabzNBLbZ1dkKMbnySszcmx8GTQdVjJQrkpTZPthjmCNAviMTKf",
  "key11": "23mjCaC4JPkt7CSM9PKmgK2sciwoukB56dtTKEmaG5HYNEJR7pwnnoRV2P9ZNa7AHVe21AiHPjHqeDAuiPR9NdJc",
  "key12": "KBRyNV6vZ5QDgehGnTVyikrFzNkySEcsGN8jsoA2jGgCtPydHtW1PFAimJmsnxLV9gUaZ32eJgtMPZFQUZRL5sT",
  "key13": "5hdp8UVHoHWoYaaweJ63UicH7YqMk8pn91q45DViuKjEm4rJnSSjP4iAK5uB1mwTB1e1N5obMbaZfyo8jTj7iW4n",
  "key14": "VpMxCogUpteQErBLBXTr9PM3ehVadaqZxxoSBuq49roeNkNe9y8YaVLiYdHTpw1mTFw1ZmPo7ysFsq9SW6Mzg8E",
  "key15": "sAgLKfSRugAYTNA2RkQ5WeaTx7wLHS6t37nrVNKiQx5Lh1JLhiun6kBgMTpMf4AHSxs8rgPc4AsBM63o7t4bCvk",
  "key16": "5Rs3LCcuRvSSpSmhmqiFTykb2jXqfEBRND9QFH16HSxG1PkeCySxhMBztNMdsp8sLLT91duv4AGacroVzXrtLYaS",
  "key17": "5p1t3Rt7yqQ7HMMXdm9o6Vx9BHnKxfXDZhTb3gaKvYwWu5W3QvpHrkYVZ7H7cCAuPe1U72d3cZeGrgbHYHGtqGzC",
  "key18": "2u1B3YQonT24Gaf8NGVWhdM28kk1ey8Sxy1XC5jFVhnLv5jhm5vkC4HYeKS6nuCPkKS2dHror1rsZ66Xw7VGdN82",
  "key19": "2yMx1A9SvqNZJDUtNERYw4aAQBSJ7QE1E5MTSNR9t4j4rHTKzCwrih6TcfqVg1WmCUNo7rxMxgGfE2EEPXx2gv2j",
  "key20": "5C75UFHvMjK7pzTa2cDL6A5MDeUUrDh7yLXcpnjHt8VQLGBoaTNu3M138b1aHgT1mgkDC3hpLuwgtuJFzwQfB5Mq",
  "key21": "2Z6LEdttrY7nT1PeCG6aehTqtFc4HVKJpDdVkoAakE1f3HFSKa54XG33myZHwrGy3bspJYRsA7GifSPB1C6mnx5A",
  "key22": "2hUZSymU8Y8Kn7H2CCJhFBy4DzAxq4THRjW1NFsteWaYMfEEgdyrXBdpf5efNJ3tLCvJicETJQoXTS9Usm8LTF2E",
  "key23": "cv5J6aJw5DKC3k64jvbiuFbremrNDUQZf3mbMzRVXifUopNYfYZC9S6WmwHVnKHiLU3AEauHqXvpxgLC9scbYiw",
  "key24": "YYb19BhvwokwbfbdfTy1uvycCdQNiw6a4zsPPZhRdd22H8CdzquHySA4wZN3fShRnhVBRGT6ay2rpPXTNYbqjLP",
  "key25": "4xezMxy4HQrsQ6rVg6CArDYAWH9pXLrdixFvsTqfyGD63BjgsGUeDrRyGm5VUDfRHgdjEdd1bmsv1Qwz2suCSaVF",
  "key26": "34LRE2DDLiFtRc7FpNUwSQbGLDFzVbhRUj39wkirLvNDD1fgjWwVZAfzrj4TAHVGospdxFuV9CG6cGUEn3x71E6G",
  "key27": "4R1S2QKEbu33ruywTLkBLQoo9MmWPMSeJ1siWJhubQ2R29JhEugSXQuuhXnoobpX3GPVafhYg5GH5ovq6Zi6MtyT",
  "key28": "3FJNZ9cBDJXEUVrNKgEPq3umQghohmFkVyqJQGbCEJCxLHrJKGQmGD2Y1q1g4EpzsovrdFtt7xQ4QyZ9s5RrgSze",
  "key29": "4kUYiUDnrZAByjcNP8i6E5pUR3jJkr9Nyoh5YTXoBMqNksAzi39Zrwzbrc3NWj37qRqKWYCmM1dY8KLntRYjo4pa",
  "key30": "t9KUctvCiCuLUe9TkTwE6xzjnEjpcfpawMRgekjoxqxisUTyojdgHbwKjtq5rb3E4yvGPiC93BrsPVyHRZijY9L",
  "key31": "4t2H74DK4dthpGJLygZUpy7Sfg1ev2FPQ4iaxJUE9WRGAaofbVEDE6gK34AKGxqozF5fFNLKeBiprzc3yxfRCaAT",
  "key32": "35qNHvHSaZy32q6TcXXvTrfoLjqKX8foGhVMiANbpPf5XzbuhvyfRKUoC6yzAoMKejSohhW2xKNf9SsRNcLzmzsq",
  "key33": "4LPY2WFeEQu8oysRxdVhGzqczQ2D8esakWtyhWy3x9LdZJ4wwAAVEmAZbTTgtitfZsBNwpzoR7F92nfCwnscdU4v"
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
