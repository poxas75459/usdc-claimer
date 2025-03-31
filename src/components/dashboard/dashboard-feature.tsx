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
    "2T9L1jYzvkpg9nwxXgoYevMYxtVQPsCwDFXy1KsqVdHbmc4EJDtPfJRCBc1KNutHhVHwDnSWcGUPVUTeKV5D4utu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zRygJwPMsgjEKHB91waC8ebWHQJPC6hXt8ogN9BTRvCYFkX6NeoPfVa3msfRnKToW1JGak1DnvNWiqeJWXWPRb2",
  "key1": "3x9Y25GQzwYQHbgN2tKvdMLkb3yDH4tPZVbuthnxDbrbszV7gZXeA4qWpoY6S36XApo16WUhNiJwAoxSZxdtDuEA",
  "key2": "2UowxYJivNs6muRP7UN78T162MnHjRR8rTEXa5Pp4XwSPDsZn4aaEGENgzZsSou5DoiukBc9v7rNtUKiyN6ztmKb",
  "key3": "4jT3YC417PQeCHz33kYmKH1W8S394vLRbeAe85hL6qrFpztzgocNDtvFBWvr83BJyqE9NZPnvRbiNnvz49tVWgX4",
  "key4": "3xUHWcsjKNLFEybMd2qEKwLBr2wxeTMJtGtyhGr3tq17nnKH4TsZGE81gwLzc6VkEQ3JPqHaUaTmqYPnpyssihLG",
  "key5": "RS4QHq4Tbxdn1VTXCHmdEmjVhU7rtuZAy9XYmgeUivFsngYRsCRFGb46miYwym3u8WWwhHG7BhfEWeDeNL4RdGU",
  "key6": "4J7YTbcc8EbsFpHJHKt2uHREDdWAwH3kRZLdCxGKXizXss5DrGrfCqYraqM2hRj28YeK8pceBCTTXBAydYxitd5w",
  "key7": "Poib5CQQbvhDqVkDbfLEKDwv7E7GwkrtUyc1HTvrWaSCA3UjhW8VJgZYTee6DTF9Gh3upZU4hx38asi3f3TCnk5",
  "key8": "2wi1gVnSD7nitSQNfGiEt2brhstM1VAcAjF1wVgkq1xFPVsRNq5bZwS7TJteQnTtnGEetVNSvTdRQVuX1W3rNwYY",
  "key9": "2TJe3jHFfd7nJyY1zjaAUjVpft8khnkc4VXaubGEVrwd5zNLpCGfCxGJopkCXzNyogtVX7f1dNaSC3FTd2ij6jPC",
  "key10": "xeUcDs1ZHDkqmqcuC5S9jQK66kjQ3v7bvkab1hj1EGLVxqR3XP6UDaxm12mh3dFjfbiNSPsQ8G817ifdK7PCKaB",
  "key11": "2UeBvbjhw4JQyuuK7W9PspzcSqiUqakVqgTbqyWK7FSDmdCiPVFvynwkH3KX9muJeRgPQujRb1Wgtq82KmxZrgAX",
  "key12": "3EssS5E4KScFhiE96wSgnQL1nDYo5e9mBVzDk4tnYrXNxArBo3aSpcSLvRQYiVs5F7AyKkWAbmzCBKeNM64MrNEB",
  "key13": "3kLa5Wer4AUMwMbo7i9zfwu7WCAkTm9Pqb5hzUDSs6uEHA6WVzmSJoYoAWaqvGyG8DrxiPCboc6LkEmvGCoM36Tb",
  "key14": "2ATjKozEVgrpncRScJoqcatQNR6hhLTKBseuTo5qcAGBfJCiAT3Cqq8X8xdNcbU1YP9pUnD8HxSohuVjNBKQ9Fde",
  "key15": "25pTRAzo5uoPshc4zqpHJnQBA3XcGMerXcR4SSEsSrVyTX2Qk2N8XBQUUrdPkrfDmNEr3HtnfQcivtsiswEvKQ36",
  "key16": "NGCkMYjs22QWYcq4xTaJpGtcXGdXrEFQnG9HYb3PWLjPJRFhsWY248gBYrex3eNCqD7db2wrTqG8ssAzwHMKid5",
  "key17": "61n8CRKTMV8gbgEuhx1QGSTxaZSV7HTdw6sEWb3NYU49doWU6UK4AseVdkiee4T3ybfhaBKppCMNqTQaq4xpKvts",
  "key18": "5AypcAHSoPf35jkKozZ2cFKZYFVhB8TEtw1HjeGm1YTJEbaSWAvk7QgDtfhYQ9QNByo3mg1qc9VKpCS4q1UPLTeZ",
  "key19": "34ZottxZjFBm7YKNT7FmfqBvJrjXLmKudmLBEinG7vomuuyozHPDfnQptV1YWzenVZ6M77CiNG1u7QrKeHb7ZJ4W",
  "key20": "AAheiFZakMyCi8h3qURQkoH99oxsepDNMDWwfkhZBWQdgRNfqHArKW5XXhvmrQbQ1GQKqCmYJq83d6Tf5TCBygn",
  "key21": "5Z5CupDGvacs9sNNwYfJT9Jr4CxR3vuKZT7gS6zeBJBL4BGw4NYBTwL5Chm2GZBzGy2jcR7T4eSJnx8b55fT9S8j",
  "key22": "4SYgb2S32VaZdBkRev154DzCQMFX79y4NFatPWM6EmWh3KKb442u5ZFqfcgxrodeS2rgnbpEo3Fv2wDfwZvsdyEo",
  "key23": "5Br6smkpwqZoQDLzBQ8zbp5XgiMGuzyyURbw6HW2YcE3y3Y8UeTsNVF7x3br9zLTrCea5PntdkNRTpW7qggf7bKn",
  "key24": "3cSdKT52CLWJ5aLmUdtWtWJ1hVaWTK4JxohXRpHwUneEh9MZ3vydJAcKCPqyQAX8HP7R15oEw4u8BoRLQHK4hqzg",
  "key25": "4ifprdB9PJVMmqnn3jNGRwJAeoZEXarQSgdP4mff9Y4WkEqf34DWW4gDWsFNPwxXAWWsmPA9Vo9emJmejH5eEWAk",
  "key26": "3DJ6jEjghQnPmJcAbrT3A6Q8ewc5Gi5DvSjwcRRFLWsVshGv7Xzky3uApkKF1xVHYVymqThHxESciWyMGd9dzh4m",
  "key27": "4iorskZg9n6RTeS4LicmB1t4iv3usXNPrtRZaT2xH3XARFcohvTEz6kaKAuUxf7nyHSX93myw8aFCHKhgcs4XjrR",
  "key28": "4DGsZPEagzEjnusaC5ZQ2bXz6H7LEUc6Uhf5JWCZRrJrjcL1nHVTFQzhHhWaQbERH1HvxhjMYewJ4XUUVBNAd5Z5",
  "key29": "4zMvijgmWb5mq7RVwxmdaz9RXFV2kUEXZzTbhhhfn1ywtYfjefkh2AhKpg1rY1w7QF9PaEvYZwTaToMokxtjZcMq",
  "key30": "35JweB6F3GpjToiLXWYwTgFwbVxyphPYbmv4NamsgbicoengQC5LFzdxM7cLNJ8tXyQM5XcKdknZ3dTWUa9sHVYS",
  "key31": "2KJpVJGEcoTbyQK3nnr6GjxALz3Pnrn2756km2tdt7Tgqh12JEWLBBeXhvBUC4wMGtJvxPrcTao5jEYKNVzGitj4",
  "key32": "4U8qAa6uTKNwHp1BrmTQ7ZoZR5z7TUQNzPDtw815H6LBLCZ1bcxULybT1zrMiusukULDf8H9Ds1KfWc2Hj4musL4",
  "key33": "587EFFKcGr3w2hxRuRPamRHzRBSnDFFukrYqh8ffRTZDuspeoFfGCoGsWDhX8WAso7oE67PtiDrG5oiG7DEMMxyX",
  "key34": "3WGGyWfzU4E9CMBTADZWZTAbm6PW2abacKGWVZrAxDEbNeRTDihUZeyda2aGZmWQAJu1SmRVHmSEuqA1XAuNpEH",
  "key35": "4Ak1Wz6Zo8muKypvZvgNETuYwtnTqKd8zpRZxE3yCQBFJpURWNZEGiu42x4CkBTbRqdvcYy35nz1sGbPNNm4VRE9",
  "key36": "5BZHhdFGEkGTRULM6EZXv3xkd3WSE97RvJK2ofZH7QCtaTpdeDJHutAnTLxdwz6zxHN4cnzDFty3xHt6Aih8gW81",
  "key37": "5VyURj9PhSnuSda4GQTM344mgyRv4foAsCjvY3VbxCsZEDNa5A6wWX7V2XKs7q9RukBv4BhPVRX6GiPXaWxPdYor",
  "key38": "5TzmhwZbubKkRfiMDr5uSfVVGqgPmXrUTzb6e3GMnPQ1yA6NQoQx8EbGjoFPn86BHg1Xad9KBw5Zcr9rPF4c28D8",
  "key39": "5XgzwxPYPbDPGN9dXzHYyds2B66fgei2zha3E3JbXLjMvXhguzGyMqC3t5bpKY8uREh9ohu5JAurfTprYynwyZAx"
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
