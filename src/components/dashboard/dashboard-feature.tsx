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
    "3BmG4mSND132BEaHFnhHURKYnFcHnKfqEAXxvzsx9qixPJu4e4ufWuQq7UFthKNe9nGkaaMNC4un898gKWMrqqdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e94Z8SJuuBUmq1xjRaxRtfX39KR21qbcfLZmGdyJ7uYNHvfzCm5D7Enrx1GafsV3PtfUaafK4z94ktBKygMhGUp",
  "key1": "3TqsvfG1EcH1AU5N8vtmZoMx8sNPKzDQhhMf5Fbs3D3HmwHCT5SeWpMBTTpWr7Ai9RMGnAUrcQZpCdmMCihmKBr7",
  "key2": "5H4TvrUGtRpwehnGSj2Rqm986YgGLhyXCqLnWNV5ug3NYeKrsYxv18xmMDDpURxUFcotn6j8s4yDVk99nRgXYVgj",
  "key3": "41kxkjQEz9FJ4JxC1B3NkT9jPz8CzUxrV2QdWSbJe5kFZwybrDde3ehkmXpQYnbD4Jx4DWA7dd3eqCu2yjW1wCqn",
  "key4": "5651FJ4Ugdzc5wJa3AMxnyy5tSdnF9sTy9xsLQvwfq9SHXiNEesy1iadc642VSRhuqdeNNc5LZCJ3eSfQig7QCdX",
  "key5": "45KZNM2pRwL9Q2eqjKTRAacUypYfABQ6TpPWkNsWPf1R1gJ8rVby6jmKj9TWWhTeBCss8z1fWWEwtC2hEopYXpAX",
  "key6": "YwG3fcsyKktwHrkFjgNY6wtdXcFr75XeptCJFrUYiLJuvwHYsM6mcEmaSJYuaC1AcdcByFP9boHQezyuZe7YZ2K",
  "key7": "41WdWcghe9zNXbopC8mR7DcdkfPU3yt1qnt3GewFsduC783wvrLM5xRCZxNVdLLqNR4mrcpkjgRKNTRFNsYYeyZt",
  "key8": "w3ovCHHYb6FjDdn66G4JooVv8xYrBY8ZnJ6TFRhhJgr2WNJcBSvFeNMvbRAJw5mXDGyEDraCxEW1ZQZsQ5qyLJY",
  "key9": "5UvbEuT5S5jkE7RmiuG71RUxNZt7mH8ZJkJKqfdzuLcJFM1VjCBiqxifnaiyBwUNLAJEXVhuPDNbErmmnhRFQP44",
  "key10": "5HzdPeuKPuhkyEfuQDLxXMfUUDj5aDx27FBciBdKqWScQB5a1HyAe7poZpfsyXoZuLmp9Ms9a4x6tsB7u87BH5dM",
  "key11": "2aERGjgQRxWTXSUr2c4rkJYeH3nZD2cnaeK5cKgQjAjJGyYwey8HfY5cmu8fLPZLBdE4Kxh4B8Fc1HAFfEnqKAyU",
  "key12": "33F1mzKV1Ga8NcCwbWCW6H7CTRXvMAKsDSRMeQBRwBHFe9wrewp98W4dsiFkBEgbVZs6DdWUH5hT82AJLPkJDBXP",
  "key13": "qeBRFctHXhHVnmnjVssgaxz5KJeGuS6xu5W31oDNxyYBNXpwcwkSdfjXCUrajGhDfDopCLCSyzJSccGhj3u1C8u",
  "key14": "3UigYKGgsoUed26E54iebrqfpXrh3f58jgVAhQt3SR6WFvWyAL4JMgBLHiTqtbgYRkYXCGr6tbiAJzAE5qFj921h",
  "key15": "5E3H2EL7v6sxcLFfvgBx6D8ApJGChKSHYV5X1vr8acNn8Fb7SfJ6LD5x7Hat43teB6hiHM5ooX4tY911i7B4Exb8",
  "key16": "21Zx9nzyg8EtotUXLxUsEmL8FyNbpCBr6QeLaVedZ84D4QVo92ADgMJEQ2rSLGPZCTFNrBWuJi8uHwTkMP3sycAn",
  "key17": "owHJti1Ur9qkjbCgNPQodjeqf6KaUDVMcanMBruGzB91HhdS9Zi1UNGaFATBPyPJ7RQ7ykizhgZBmQsX5SmjHw3",
  "key18": "2CASL6W2Qd8ogS4n4W8HGSZHUWstpyntxobhhzpifWCmu9zhkcxssyAtCRjqum9Fd5tnTApcq9omvhuoQ4rAicY4",
  "key19": "2nPSUkz8Yj8bHUMnaPFc6nnDtoxfRLr986c3MbMnvwXVsNJHb63hy6NcNpq52PvtN3zvtjwa8YSEjEUnwzsg9Nsh",
  "key20": "WnPJuBYQ3X6VDjKzwYcn2uuyGhMUpARn1NtjQ2Uo4NSAvjnfDeLFs7Sh7T3vzxKyK8sSiT8GoSgj2byJ3emHqcg",
  "key21": "2iWFcaSsuuUV6iLRc4UWJtZFKdvb3j5ohZ8HmAa1CCYhk9jfWAoz376YJTtoxWpSTCjauK2Uh9tgYRQogiVXBVkx",
  "key22": "5PLyB82eVoURQ63WagCQG6mXtrtCeDDmNs2jwxfDxb99C5jetQmaPvWa6ZqD6UdhEhh95KToqAAWgd6ox18VF7Jt",
  "key23": "3akmmuapqFA6hUVMYseDyK7nSzdiib2AdNvQf2PyciLvmLFvMAMNnSV1Jf9iW5vYozY9fiSAW49RqDzw4KyUHXRj",
  "key24": "5SAqJJV7y6ZyqLJ8F7aGKu1zzs86HA2dSmAzqh8VxGiNmSghrmqWMWa7RxdTDZXmHa52ctiU7kHNAyaENQ9GGgpJ",
  "key25": "44JaVKKNx3AHK5v6jGobFmsbFA4hbHe2vfygD95YCHCcNjJ5A6VYnZ6QM3paaizKycGgUyshQEKYsdYiA5og3Gji",
  "key26": "3yWqS1SzJysxkAQeoyuJhD9qhxJ3Gi1AM8ZAJK3aB4CGGxKhoRnGrM9dBiWAnyhiTGdJSPZgJLyKvRdqyRf5bwFG",
  "key27": "5jW5yHZHz7iEDmJ1EiLcTgyghMeFpbDqw7JD9JNbET7JoXD5tggTVJ1eGmsZHGd9nHfwBz2XRjVB4k7437Tu6TPf",
  "key28": "2jyhnmtnQKCSY4az8nakTXD5m9ifksoA14vZbi1QYQcXntFYVnNzpDB8tnZtQeJi7RBk6wsdmGV6Ed5o2azj2CmR",
  "key29": "21RxZKpNivq8BZ6jKHnbdAkhUaRsf3HWe1dVbKAzuytfb4mewvjYXKECnE91mcDAYymukZ83ThWDPdeDYJaVTPpA",
  "key30": "2TM2DjhNXnCwM8oYgzqkpBPREthpPrYiiVyEahK79igFK9fkpVNX2vi1cEB3LrXFZd3Yvup3uoJwhCfW2FUoaHwE",
  "key31": "4H6GDLEygy5k3m1haZFab5FU9aFERAKw2jvGKCUNN9RpnRXUK3nXghMU4nSa2MczayJkgym5ukKtQGiuNU8TFP7c",
  "key32": "2J9JSJJsRuhzqq9WfQpUGjqcZSki441M5jNkucapKwPktSz3Cr9a9BoWofgcZDwXQ82NzS6qSAbrtbiBtEQZGKyL",
  "key33": "5Xdna28BkFLXFoHW2WENMwooJ2sVr7VW2QecEUgH63tsm9QRG1EFbAVF9grTjRMsVMQPC5EyseMwU73NUtsdRg4M",
  "key34": "4L6g2ZNJAGj1fAhiA7MALcMJG5id1RFzPeUGicV3EpSH7jAG7Hx1pAJYsHm92Nn1co1T8MLYwgY8znFv4cRQYCqB",
  "key35": "5iegrEoCC7L6bsTj8M9gmipuoS3J46iCSR4Yws24qaCjuxfwaoUCNGLMGqtiA7JfLxB5yJ7DvX2QdvZSXB84dSj2",
  "key36": "3YBS8EUYsH2T8hnjTFS1HC3fcxH9MBFtpqDQfoGKffvsK9VqnCLtonXRrkSDjjWJdYeaA4FX7q34dYmuPCny8x8b",
  "key37": "4oYRJ2eASoAp1dS1EfReGhzad1xjEMFANFrZDV7srRZqpAuYAfK5K9jjd7yVmN8X7ZiaHUFCTyRPbnoHPQLLcp71",
  "key38": "3AYNZpxYy48cTQpUPKmHDAeJfhG9ztFGghc8pZY7QcyXxnuTySDb6fQU5jGy1GBqjqCGg9N3yNwa82uxZ9a1S4GY",
  "key39": "4B4fZrJo4b75pcLetp82569zpqgkqkQ4hd8hcKpjPc85S5QNybxSfD78ypSYGBujDN7QLcKbM2BXYGnKSCosZLSL",
  "key40": "3dgT2DmzMvPQyrUsmYLTA2wLTeu9UMPruLrqeZV5GAnZoMHwWVaBb225PRWB4ESUQY2KyMg1uGaRP84imB3VfoVC",
  "key41": "25XtAAtWPeLRwcMgyRdL5bFoojpkG7E73VvLKe2NTAbqVf9vcX9CpVXKyJFdgdGqKQkM4C8G7AaSpdJNpU12GsWB",
  "key42": "5yQa3unQ86sXjFaorSybnQfeknVM7wkUkHp3UN2kU9maBWSzfNryhjzScPCmbnojmrhXSr7qAkc1hTx9AUxpyWei",
  "key43": "4pFdMTYPj3C1AfQAVVMsrc1s8km7rr7cUoh3rR1Xj3nU32WYzGD5Gfqb4pwsvQ4CdJ7fYxAQ7T9VYDZLsWfbpswY",
  "key44": "3VbefhKSZu6xUE4QGyCpzUmwWbAAuygVrzkhaeKoUgvaShWNNwNQR6w4fjKG3kEoA826B9zVbuitAhr8xmBxDTju",
  "key45": "anDc6FbrmRZh2DoetW5LpovQZoH8h59gAEv2kjWiCk5rBjDC7NxRbEnpZsCEDnjgRzxdhvkJUxwqPqoGu1toRmx"
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
