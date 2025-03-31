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
    "4B8hDWurcuLDxvRUHU8RH34tY2edJ4N1MH3F3kbB4N2RZoa3JN1pkqyPDoBbAcNX6ZPh1d1msHeoUyVmDdNx1XzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MwyCfBYA2ArVr73qWtkwhVQV1ysLeFFGJDnGW4LwR45P91kVELufsa7XEeE439EkfN5PANCGw1dUoGBVjw94naM",
  "key1": "5VMGQfCawdXkDyRcsPqZgLmxsJBGm93qHhBhTiDf9nqxxLVf12S7G2xKVxzdRWFjpbeeVSfTnG5nXjfH7RNKoqWe",
  "key2": "4Vo2NeqkFLSJNzQp9Hf81uBiVpbif9Ydv6qgVo55reafjLB81nQ711DikAcKGMdLbV8H9aoSHgtXNjLhFcbjWwkg",
  "key3": "44q3qaLPcUNEFFAWjWnaVDs3nqb4PR2Hvxu37CTNmfbPUhwnacZLWEAF9yrqFvMaZTWCKNikdHkj8rEKpT4GcpN5",
  "key4": "5ruJyHbxMdh5GcyESYLCfN78uwwM8Ap7PaPm6d9YVpkhDRBGsnRfNJgwbMRUQJZTBsXCeSKuezZFxFcJeMavsb6M",
  "key5": "4GFcxBkCjSEnc3kmaZTvC8Ww628PRaqjB7sSeKrg3yvzyHQZozFyA5oH16pMG17oCPQA2BWHit5QXFbNCthJ3e3E",
  "key6": "5hyLUR24hQLGkvNcdw35Bsxq6x7uQQBBkJiTWu75ZypwnELWuVPiz4q94iEqxuEuet5mywUYPHobf35JSVhNrsJd",
  "key7": "5kRQzVTyU9xKexLfdNtgX8gpETC8qwik9v44cTVjE6pM4wvchSgraZfvcPh8VxySKnHxy5yidfiCoT5SeDoVuUgk",
  "key8": "44ycmZ35AgUMjVTezBJ1yB2hVmvG9aSTbXgFFcudtaFyraziax2QJ3YuKkckc75fN6kso1nCG2y6S5rQuUCvrE35",
  "key9": "3wjMSLAFFSFkWHTTexx8DdisXXYb3Yh9ZNnSYTogPqtnaSsBpFBQpGganTC3WnyCjr6AEB53QkPhoGd1Cb3Yc9KJ",
  "key10": "5maTCZvzZEpT6x9xC2oo5R77666ipxqJ5ZMP7urS1mpnHYYpBQQWpKLSfMFoPRZG4JaWuvLWu4ziE3hi7CQAV7WT",
  "key11": "55opSb5Qg5pxt6oBW9gBuvv9ejDS62eKT3aiaGWdAC7DpVUJfpqafW9A7aHjvYB4ZmtT9oCFB4tYijNj4LUHVMpg",
  "key12": "2QtNuUwUNJmGxE7jspSjBSaGgbbWLXLBcv65skQtM33u7tsgVEnbSQh8MrfPaqfeGCr6x3q1rWhGjNgwTKsZgNKe",
  "key13": "aLFMYAXZjKEtV5G66A8vkAAhddsP5KZc3GFRLB2VbV5ewkXdrZ827DNvV5TNMhL5KArqkAGUTGELSMPfvBKqKiS",
  "key14": "63PxCY4w7PBbyHnVprUkz2s2744HEJs9r6NoCTmdmjRZ4cKZdaRMymQVeinjMPdiKwkkrMJgcQzRNVSLEwzT59UT",
  "key15": "Q1fszbfPhuacbPXWWzPSh2mikXeb2fxSZY7B2X7bWBRbFkC4NzUvK9DbygfmfxxY85f4JPpBpj2UrC8fo5Xq9Fi",
  "key16": "9GBFwdTcWSGdimvsFjvQCdFpDmRuzbaYZY5AYrszE5rBn8EaXkXZo5iaqxV8MjwnARzizLSjud5ZGwDnBUr2xWB",
  "key17": "3cyvTnL6LxSb3LRKPzXRDgyn9WYGJwmb4yhUMxPiyEb9EsSt6pjoHqwLbj8NT9bmRvzuexBqaorPCFUS5pJdz1Di",
  "key18": "3CHY7sKfJveUnCYHgfp13ZwjEe33nsmD1QPtjXzap29x4QvNf34T3tdoa6H3DepYDMgLNYHFUX7YN1stVQhfGspu",
  "key19": "42kp6V2eyMW1uCG8Aoc6eU9RX1fRf27wQ34RNChJXYBp7ugUKrajeTRV7LWEj6dWRhtFn2GwkeofCC1KEgrKGsoS",
  "key20": "naLatX8oBkYP9E4nhtujSQPjeC9yrmeYzG1XcdNeKgU1NzpRWMapSuDt4zSvhHuBQ5W6KtTf4ue6iCMA1xBDqrK",
  "key21": "4srtVthmGo9pXjWGKuJpeWt2SqzMzqNVqVyrL5XCWQQnKmD3vjHxNzUBzpho5WDXTbWPxfTnPGGHhir7f6611dUd",
  "key22": "2jtAVghdXeUKLx8fGi8ZpU864ZKnbxsmEGpki4nsTMdT58hBEE3HGA7r6CmCU7fdFbB6iWras8b4dQr5weLE4qvF",
  "key23": "5fb4t4tjuNBVaMSapESN4mCjNuGyRuXVAYeNrxYU7B6nPCoHMpBtYUX6fCj96CpRHXtRXEVmaHQcTVVM69HxiMXc",
  "key24": "3VkRzhJqCFz4w6gBjSwcwrXx69hHJd7uEgxzYbABa5r2LtqE1Evz4hmdftk74vhhZ9dQHwQZsBFxD8GE3oMxdzz",
  "key25": "3H7UdAv163Sxh6nrDw93qn4rUW7Zh2Zj5NnXxmiE4GGCwnp6Q9jiu7Pgu1ZxHPwSBcA74UVXwtJU5vK9UP4G4ubk",
  "key26": "2DjiYua4DhzwjaAQUFL1zhQRN3ZwNku4WV6XrQMKC46VArcrFRb2uzD6ipqUL4dAoHte9ghwHH2ocnW1rEbQSTu8",
  "key27": "5uAB8XZZrLhi8mshyqdpzXpVoeixx7D9UGegnQqxoHfrkYaaoKBLAFJkEqtN6ypm9A49k7DYHrCQ49U16EefMSad",
  "key28": "3MewbnqcEzayxv5aU3QPCX6RrLpLt4DAWtsb5zHUyWGQyXNcq5YoQjqLLHBzRbaFRvhVM1AsyZQ8csMU8k3smxTX",
  "key29": "2tkN1P6apoabvp61XyykYeH47vehfvowNRNq9N78ZiDHTDzGSmzETZHV5RXFqFqfEi31Kpci1oZZuMyw3xsnmjA4",
  "key30": "5RmifthN9WMe2SEMiLNgsFDH6Hy56bZa6uxdVLDvraqpDxeQPLuGyCv15zy1cuyWpNZKcfKMgtoVUe4Ax6b8ajKH",
  "key31": "5DJA9qvUnHocnDEcBb9YKMqrjYpAX8XWf18tkeEGCG9AJY6awbSxXsoHMDyaZvHCnw6nfnvvFYaUGihLhXXjWpDy",
  "key32": "3a1o9Hdpxe1H5uuGAWgSkHxotVJsQYCMcnUt1UJJHDoHU24rSjgoxMwEF9pxY81THD452saymhjvJgUjvVJSqhDy",
  "key33": "WkRq6gTGSzS3khJLYYociD4czD22F31XJsx69pQd58TenYVAtruSq1bTnAsErR9qNdCZp9SFwNRTGdAdKowT1aY",
  "key34": "5ZRc1s57sAfeMwWTLLLoE4AnbVNHNf4g3sYEk15bN61Ckt4TQtiEkzEEQZK64J4e31mK626DQD5guGAjaTU7NAKv",
  "key35": "4akibLBxfzVuTQiQ8BCvV6beZ3N8nDsB7XoJcDRDb1U96ehLEH34cRZwHrTFN72YvdQZn7PGERopHzaFQT5Hmi8g",
  "key36": "iJovZmhdFfrgLdRp6zJ2rcDBTAKqNMh2LnucHm3TnrxBNXTBPFFoFgazVqC1T3bUCUEAKGQRTziDCPdeYKXr5Fu",
  "key37": "5Qaxz7B6zvJUia7Ehut6xFAKZuYCVyyef5o6S1QwDRz9DGMdbdN3JF9iYHTiqFTC6Pj8R4VoziHNRNrYtWHGxaLB",
  "key38": "uCPkbQ6zZ8Sm7dac1RSktyP3tGzypRvm1GwG7sDGyhQyuBWyCtU9LrgBmEjvqLQEaQ5XTKo2VtHEkvvy54nMZmk",
  "key39": "3XpCyUk1rxjtA1Bp9fi6yfXFsmYVZQBPdqzK8918QxseEeziTgHAcNKFaDTf2fppr6gyVizTfsVyiS7RrJTaVVF7",
  "key40": "4pd341w65U5L6fxSxTcMHvSPLf4AYcruFQKo8yMgWFGtzCWhqCmMghGLgU7yJ1aApzKvxzdudKF8TjaHe9f4QVn2",
  "key41": "5Eod6ZKQfWh1YhZBZBvx88Ua49gDV3dkr6AUFRuVBuQHX4LmobEUdDkAFmPCETypBQb7sRA8cfaGDWsS1fQZrF5o",
  "key42": "3mLqnb8TKMeNfheVqtnfJ2mUFUCmeLs3KaTwWyzNutrFzdLgQbvbeUr8fq6qb7y9jDQxRe9ZDmyj4ZkNjATeKpBy",
  "key43": "bqzZ58NPzSoW7ood6zw86PdjBUrsRBfomfXkRT3QnBnDXSRLnc2JUc9vMziLkDqD1mTgyMGtewCHduFHcAaXscj",
  "key44": "3npXbtPZR7gpb65nTTAgzLNScZTmK85LqNZJhBLGp5kD6t1CqJ3P5DBu2BkjReY1bzxyZ6u5skGNefoLR6GuNqoC",
  "key45": "2NkrcrTsGkLKrKDdyQYgFpRdwuvmandCLsSNwLWvQ6wpxfTqT7YdVKAZofwx3vfmsM4DzEX7jgrXsHyv8ZgnMrdX"
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
