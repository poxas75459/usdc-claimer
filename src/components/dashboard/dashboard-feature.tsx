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
    "wgKon1QVAzMNbVCxLwdJUyXrVzUh5QLjNj9X9SBwfmn5PhJzHzQ3xpyuDVjBNSBkEcxWsrQ9Zfw8cQq2dYSw1iM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NxcAEMQ91G9n6efHDgsRjwwtTZy7YvkVLztBHvbMVR6HEvjVxhEhu1PhtNnKe3d3DaPwdEpjKwZz8EoctQjrmwW",
  "key1": "634cHvw6zRUxKbxmiu3TQPsMxbK481k1yLVyQcqBW6TSkZpfzkmXcgSRzkP7iH5d1aFLisTc8soZBHHz2pE4V9EG",
  "key2": "2qW2EVB5wdQ6tqsQDoZYPS9uuWEMUx6WQ7ekJoMetFfLyYCqBKXXc8bhcCUDrxqJW3moemgHwfRwNFHWf7Wkrrxs",
  "key3": "291bbH7ykAVhcLCY6D4FYiwZxAQgDYXyvDtdVKCRamP4NfVh7XaZBtKHw8cAX1f2SLrqzCUZrkipyU3WtazU9AgZ",
  "key4": "NxaVqASDoZcD9T48QMa1mThfM5pCHbu8eraijnZviAynsjEa5zR8oAejcJh9Z5o9EqE5j5PHpn1y7Xkvjp9CemC",
  "key5": "5rszkyXenLXmvjS1utAgs2w6hZJocBcoWQJ5mkLUC47heehjGpVUtzSYVzRsmRJa8tzMq6e3xxpUubqYqkuBqEXU",
  "key6": "3Lauz6akpFNU4NnzbStLREc7hFWLdNhqhKpcaC2Qk1zCtiKEPTBjdQgTR3gs83hpxN1GCfkrn4K8xvJyCjTYV7tE",
  "key7": "4BiwKk1s7grCecCEwkgAyoJf4ixtqnyDvjozTH6JZFAyjgkouMhMN784o23HcVovRq8LmfjtP1EU3oWrWAgBsC21",
  "key8": "4vfPx1W7Nm26X4AripZjcaDy4zk7QmhvasUCybo2cdQdbj8moSU4KwJ5JSpmxSgHfxvN4pYRa3pjchBeoWTxBY91",
  "key9": "638JUo6qUj3ArYWFRpea9jykP11666BeAXF8Yw4h7nHbkESiaTcgR8dy21Ghu2hBV14MJbTB6QDfDvVhRJxfA419",
  "key10": "2bFyMi4Etim2nRGRdfMFveePzbcB61P18HuqeKgPLMaUyxqU3Sgka6xVwm9DvcQoLXGHTj5KyPLKYB6i95h2GahB",
  "key11": "Zof6k22wi8JMZ9gTGRH9Z2YbR4pPmgLDN7vWXEK4pMUne4vMmJVBv4D8K8CVeYbp7A19YSrxBLP5debymBBmD9K",
  "key12": "2zhQA9tzwLEhhEYh8jskBWCQPUgdi7Grt1aGYyo3pa8TCYu5J2iHg7Uvyrx8m7zLtdVorKmEoNA9nL38mbZxsY9Z",
  "key13": "4qHs1pzRzHWkJsG8TqUeyfucVCpfgCYZqjFBYjs48ud1fYQe6SuSw7LSzjXhpxAFFQ88q9CsB7u6B5Ah4om7hdsb",
  "key14": "4LGaUfTc4ddjGqoZGW5FBN6Y3gf2YyXcDGT9rSDbsVy9xLAs14sHpcU2Xqmd1qFFBvtGspwfrWrgLM1fy75ckB6M",
  "key15": "4xjUnFZ6Rm7gYsyifnDnzDLuBr6cGyHBmpcqPLpkzYZ6NvWSdzxqT7LKjfXuqFhtygbhu53JARf3ndwzmdoDGtzx",
  "key16": "4BgDVq7qtLNATwNoqFUGUfFoenbaWeg4QZMTJmgCqtTK5ErHyRAp6jMrTtjeLhXDJfhPnWh2U8JDnHdaXFoB5b9N",
  "key17": "41FfEsXeZ81EeEsM3fsFuiJKjMdrLQxb88bz9ALnS5kMexeZix4a2eQBpWApTK5yLKvz11U9bYu9Qcns8qUr78GD",
  "key18": "3WXmC2aY43MKXyDPMdPeeZr8v6EfqJ8A1naEB1LsmT5Y2i3vpGiXK6t8XCJKFonF5DmDSQCvddSKgayjw2Zo2Fzp",
  "key19": "5rEskdvZdsKRqAtQsEv5LVc9hanFcpwYmH9LsuuBrbDtThqwJxBGoA6jE4goHG1YW3jfTo9ZY6oDywhL9sAbaK2Y",
  "key20": "5nfxAy6vLsqmmW8hj8hf9Ana35wo1mz4HrCpxTdHbdm7PEpbKK9BGRso8EkcpAU5jaJkKoTnfXw7sy3qJrPpcXYf",
  "key21": "3Bn17HSYanMb7noaEsCohku9R5RZE6tfJdxcWv8dkwtPzHZU9RrkbysfJ5FUduseT7R3uduDbg4gV7uUxLKXqdzu",
  "key22": "26izWaY6Ym7BzLRsdPUmQxf9Xj9J4LLiv14XomTZd7jG7kY2tsoSrc8Br3V2WaJAkhX8wYifvBFoVRRBeFZwFL6D",
  "key23": "3XxYNs1c8hYH529ZV3v7d3zDZSF1niiR6XkEdTbDG8bWtdwMkeWfjvvo7doqWivSiFgq1Pr9tJ5vcrQh7JRcAkrC",
  "key24": "whVLB8znHuBQnJcxjg9v9zSo3pjP5BAgXji2zqGgQ4c2DGSqaCxGz3jTBwN2PiStgdqtAuqFDckcMoTmuaXmYSM",
  "key25": "3SXJDktgcFdnzrF7hy5YkeS4WYqgDWiG8HYG8WRyeQddCgVGjHWDQRwiQ4yLf99PtkaBAKAfZT7WeEjb6ETbPcbp",
  "key26": "4MXyzCkXbbFgdLhL5BHpM1E2gncYRgPKA6oPVMdFMzDHTL7a1jgyQX1CsV9X4GmSaEvU43D2btevJYRXUhTcEr6C",
  "key27": "5i9hUBCowiSskcPAuErRrR8pNnAqf9hXXPofd37ioq9BYiLLs6DQXNURvmJS4QjioPMSXkL3Qjtrfg9wHc3nrQZV",
  "key28": "2Ruh5onsJo37DaSsLNiMGmfKvHjabvEuKXYex9QnUW1GmLHuPgkzc9B9ziWLGRhTJ6eNTEtx8HySbm34v1LTzhos",
  "key29": "3vwHofoAyiDv4w16fgCFKRQgmwB8KxsPM2QnGUcrnpa3cV83uRdJoy4DrRoK4G5UX2kNY2G1T9Aj98S7HpznWCDa",
  "key30": "3T8pvdMPM65Gx1D6YXvD3vdTDhzJaswJQ2Gw4T7gh8nQENmpNSdq59DKewAz49Aku6GLeP7KP8BUj55n47YCeGvq",
  "key31": "qjV1sLZ4fhPTPCHxbr2vFrghC7te1nxQGpoWBH9bbbDTUjhQ3AxajRthckNW8894v981U3jpoo2dQQBjmyC78gD",
  "key32": "3xT5LJh2TPmpD6bXu8ueaH2ToAtRbdYHvhKiuw5TGqHvsZM4WqR48oro32vM6EVBX4hxKskmPZaiJK48wBeZ4Lwm",
  "key33": "5kvGvScFVaN86mXNVZ2bAc1twxuonPhBoQXjv8KfqYaE2uhBN1qK4HaDrMXbm8zMxjF11VH2kwb6Vnkcy1tXe51s",
  "key34": "2jAm5qKw7oMiqVDHSoFVJJeRViRe72TWHUtvYHbC8xGzw5iS3UPyPeVMymBWCTDPKnHCCb5aQrkcFYw2mar5pdyC",
  "key35": "5g2CdHqrUkdN4hhUPcKGRzGiv2Bjb5YHyk84Gg7gKMJ2uGnSEUMgs2Fh6gWFnpwJR2uyG6ggBLKdoBKS94uYYocL",
  "key36": "2MEZFuuSFezDneHjy7RioqQgZ5KGvreFSPZnd6sWUTA8QJhkKgGNs37PnNYnaTJDxkviA9MUsktBseMkC8hmDQ2L",
  "key37": "4ES5QFRWZiGn7WGd4Q5oHRAW73ydDUAfMqaPZHVTyvGwferxyypTc2QQ5ZdedA24bihGd7garUgGpRftKuSWDnYh",
  "key38": "66HCWF9mATqCyeWNcPCkAbFcwdzXnTzcUsKStLu2amfmer1QUQn3FwccuqAJ4v7HZtRtXo522eaa4LTdy2PFfzuj",
  "key39": "2xj8UnuMWgicVQDKmD3LCtQQGq6pKPe96CMiLmcR8YX2VQrYWvLC1LLSKDzZ3CC9xWYgMAdsZa9CxtkwebvpCGYN",
  "key40": "5WdU5tigJFRXxZibt3MXPHd5zrcT19yBAFiBzgD1otS2VsMAZD1KHV7m2SXSTrk5RGjJSSAYLc3m6tpUpjPVweMX",
  "key41": "1g8BaHWdqS1a3vjSY9pYDoLuQSisU6YinPrExSS2jieuMPtsuiGNPZ7NDSJbVrDsNhBeYbh4665fk768b4QboFZ",
  "key42": "3LtGsLfLoc3G3qQZ35mpnt1kMLUsnj2WcMW5csmLaJYUihZYb3nE3fFQD1pLS8DLZ4QzKeSc3SGjmqzKHirhZrzP",
  "key43": "4TnML66yJ7yoxX1FYWGCxVw4FNDMD3zYL492UAvpmuoXQu6LFfnxRXk99NYd8wMgCrBZPLxM49czyqARYW64rBAk",
  "key44": "Acpr7pmHHJYyUzdHP8JWx6gHWKYGvtUiCEBETxASt1asT4Zezwu7bnMVhEnAPMeV7PzzZGW2QbqXM6iEHLKMfwe",
  "key45": "4cJGFbFoiAoe6mA7c1bqKsXgfnYANKHCe62Y5R95USpy4sWKe7Zfk7ES7YujJ3uXqjKZZHEtoA22nrhB1Aw8Xkk1",
  "key46": "4Y5BWY7EKf39aCLNWzBLGYqjq2goq4KmvgXUz3JHLkvsMwnKi3gLugqchyTqkaSibwiDa6YGzJVVE8zp5pUhTbF6",
  "key47": "3qz91cxSAe9mfaFY1w9UstjbhTsnFYbkfCsLDnMCGfqBS7YPfrNewef7koABCsazH4MtbcX7r5iC8KqsHCfu1WDw",
  "key48": "4bLrKEMwvmPDx261Zpo8AGYquL7LaTnvVVx5vqriTX1VHZg8zJQTRTtdWuiTUqxBEUXWrALhhEiQcrh79PC5WNNQ",
  "key49": "ouibs2yxeTwcK1moLaZtJpKnaip1K1c3J6k7w8Q1nBE5reroKhhd4hryHZSZYnbDmpFww6fAqqhUFGzMMvgYvFU"
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
