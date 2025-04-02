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
    "4UtUcQ1VaZfwRP484giyqqrXRzNDgjt67zdNRhDnNBoqesL3GD5KSUi7YoothizHRKiCmdFtLBxiXb5T68YQwPB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jA8uhg7n9YLWBkgtJv36s4q9DeZYSUvtp3645sLe39fQtBszfKSr47EjewdJEKhXJX85WbQw3woattpCRShJkR8",
  "key1": "5cUCnU8mmax8WCKSpatmyzGT1grF8Xkjx7f2wG3t1fwBkZJZkmFdS8D7vrZ8okLuirKfwvrFPzDiokhDW6FsNgjL",
  "key2": "5cXM6qq2ciDK8d6Ex6njuUGz7hXSgrqdusBkBK5FaiayKR8GcqTAZPxQ4nV4FRrqLEdcUUmyUckdjQhsdVoq1uUv",
  "key3": "3kB5c4rVqrRhtKr8cHe5Ec6Wrqp4fGczVe8ojzN7dVctn8bGHejEpYajkkPkW436Q2BTPakQS63b6CAg6rzepQJe",
  "key4": "zivRXSbk9dydnhAnZtQGD7qLPcfvWUniTXWfFnYQ99pEsDfim59re7LwFLYuWCXVA8dwEP1b7BENK6Jv1Q7ztJu",
  "key5": "2V4qDxeqBtJZ8s3GLvSJnSkr4hdArJvfQ5DQVCVNTa9kFuAjLZcy65EGGoLQB2VuvRUYUnatbXsHAZ4bUWzCLTAr",
  "key6": "5B6Jsc2Hg4XL8vQgM42JQhozmXiUcALTbrUvKNUzphj911VoY72x4WVVg8sc67pT8Xnu8GGcnx789p4xtmiVe2Nq",
  "key7": "43WqWvWA4CNScvCLiYUFAo7rJypANP4vxaJpMvmeBM9b1weaw3skuCythrxGxem6HwAkWoWrtwiTkZ2Xejxfvfau",
  "key8": "5J5mNDdCP5iMegAB7GHciZUZqYXtYfAxLZ8VNYN2P6a84qe3hqaDTPB6y5VkHJpdFxJAghP7uLmo3ZgFLpnBXusq",
  "key9": "2Uw7vcKgLEWR5eLuHPnuJAG7gWesWXGU2aCC4S7kpb3VMzdZQdUVc45ajyyJmJucYvczSNJxqZ1qhfrrFp998q6Q",
  "key10": "CX8BBPs3FTFibTUkz84bxXh3tvZa28Xb8U24RKfiGmn4YkREwNKENZdnE2Cr3R2CKEfDjgU89imsNg1gAA541uZ",
  "key11": "4BQ8vWq12dPxd3s1gGisUV2qPY8quGd6GNXRif62pTQ16NWjQHsna7GSHqSfNAZ7bw3WtMixzrrhW5VP9tsEaX7B",
  "key12": "rebfuvHZYJYzBhs7cBQ3AKeiPZzD7KaKs5s2iHSBDnuovHSUKauLSqLqgoRWm5AGaLV41HqtjJUFmtxB4HF44hX",
  "key13": "4ma6LTuA6CmfUmqvbjUJpLvSe4LE716aUvHqzsb8V8bKGygKxKAbh8nzL3SRPAWutchXYVMWjPd5YBMix8UULydM",
  "key14": "5wuNxnVWkqs8fhWsDWudAVJEfKo6hRJHFMQnuqxvtLWCwK9zNPmeCURrvmjpzKPePojqirtjin7Mj5zRT9MUTHqE",
  "key15": "3NWyKYVnRceNp2KuBvY1PcWjUC9g56Snsfy1wksdt6QEH5GKoNQv7BS9iE3tQtqRfE6Za4oBo6iK4fPpGaZa23Ln",
  "key16": "z2YmijoJPjQ2WeySH7wccXpSrjUzkRyvPGspcNvRE1s1iEsTJqKzDC2L6jFXfuc4yUb8HwVbvod3LNzjzrUaQVA",
  "key17": "WoZtyhWMdh23zSkcahnyKUs9gVzTLhAjE8uGpbPKYHF3bMSazvrgdc8kAUdH8cyo1FMpRX7Ey5Z89yWdAnSR3zE",
  "key18": "kF773vFfrY8MAac5BsfSY3zHWgWvwZK2EhMb8hsaWYFGr41sYc1KCHxkVpkq1xEWyJdj3sxp54F5JGYxJ89cc81",
  "key19": "DRsaiunXTxedmXAQa3bvfyBTZAa59W88JuTSPEAYW6G5TghcZUacVxbFjx1gH11hoAHCwidetZZpTfhGjGw8H2H",
  "key20": "55pqEumNXh612AoUjNcMqN82q4icyr4JoYvLgQjvCc95HubryMQcCb3QBWEFak6zhxSBX8et2bmBA8CBVBnnXM8p",
  "key21": "Q22gtp3X8wAGKMHSmvZUWRyQGfBkM7h944SHeEoygfkiWqxpC2jdqTZXaAHjYs9YpzA7r1KG8Db91eyLFoEAmYg",
  "key22": "5gYJfeayTV9e8sUT5dWU1aHw1aWaAfyB9TbcEVFiAypymVRsGQZ9rng2ehhPdwNqZNsWc96CxtueguUsqJmDnR1f",
  "key23": "4KPXmUgnP7mj5UY8PQywNWpEh7AuBwjir8BDAMknbPZumjteGZ1Nz75at5omYPE38A1zUwdUHQ8FxUvVpsVnnY7",
  "key24": "5fiWDpVSc5Bowi9bqVSYAsKKBbzJ5x8M7LbB9LSPMMAm8QdRAQxhEYn3J1WUG45h7z2FMoRX4XDp8XnULJyb77Uc",
  "key25": "2qu5Dkgj88heDC74u9LFLtTTQDQzSjbNkwxCo1xQUgnaXH5YnnD8KaQJwukpJgro8zHbxiwGjYTjAwpC5uCZWS4h",
  "key26": "2ipTfTy4td314VJbkEhPsZsEUZ7BVY2Bw7WE2mW8UxMDE9EudgY3qjaLQ5v7Yb6th1GJFXt5Uu228FNZWDVe4N98",
  "key27": "3svWyyuAxNMiMZyjf52NwREkQo9jF397rinXgNkxQuseZfWY374DzD743jon4Eczp41coDvHkp4rExYAzyffbBSK",
  "key28": "48DtFgEyf1JZmxjPBQpAkGoChq2JCTtb3yYSm49NF4NvVRWN2EyYuCgBec2mkpK3EjjqXzwaJGfpV45GiwEYNiu3",
  "key29": "5ihKfAjyP5aTYZFjP6smnK3zptyMfuyvGxBVDXytr1x16gARqP343bVc2mDKj7LWRZriSqtofhrEtwNDCHGt5btG",
  "key30": "5RNBUfX8nDP4fZg5WXkZhMg6kkADNVFVTEjhf3u5nURtLCn1Yqws7d1QKZMm4nNwATGFhQ4pGLMFypqkavVzNxFP",
  "key31": "2ufMFNMKnitguewxRscvXMMnt3uBfuHM7Crb85NXD5pqwJrftbGhrFUJZRZNx7g1xwU9QrH15Ayb7qYE8iEAvsd4",
  "key32": "3rZuVT3L92oYtXfKNnhJo7A3eNDMHR7oriVSxQPC4Qir4gkzmS6q4F6sZYr16K7Y5jUminJEJkH54GUTthpWYviz",
  "key33": "56LMuU4seWHmiFFBLjtkzigYGfZHDeezefQJjyaqqYGqzC7Ze5JD3yY1JX7AJ8eJbg3LoEooy4C1sNHkKaoPfWQh",
  "key34": "2thbrdpTbziXwCEo8Fqu5pDsGcbDNBm8KLZNUAZ3fB4LgRi8zMXXrqw1bLZVWkaxKSaA3MCwrYVk42zbxxq8kF1U",
  "key35": "2geArW44rLdJM1SfUmJsxkZA12JoyMs8mU1ce7Mox7WnzPgUrujEu4cYkKbRiZywy9Vts8B9GtPngeBWGAxe7q6q",
  "key36": "2GZMA1CSJCJE7AiuVwQLWRpJZ978zVmdH8RTfUXVaUpkPyMeCGGNeWX2i4ktbG3bRxcMp1w58jQFVjRCbX48R7pD",
  "key37": "3SjjbkwQf15tvau8Sa8ENWuQhRrKNamak4Kgz5duaVhQ7MKELMmT8D7ePqAn9yq7EwzgahjZbYiYcvZaaUUuca7s",
  "key38": "3ZsE5t9UEg56xnuqn2vm1E4Bx5zr3uLYJwisfzpCNPfx2qeKi8uMFSYKbnJzR6wQqoT4sYA1uXg3CFntKKF9SpxT",
  "key39": "5eqHupEn68BTaYPkYB8mDy83zANVAjdV6rsbUBmnLNYJjMUbPVUBUSBsc8WmWGHDFm5MoFsPD9H8yWzmp9ruABCZ",
  "key40": "2GbLSNc697d8YZ5HEaYhNDhAsWm6ckCiaHu33mhWVq5ACy5NcFqmf8URkJpvhXM8DWqXnA1cUhRSYKvEuL19D6mT",
  "key41": "65eVhi63BjCJRvtMUSsxToyauMUdqF2Cuxgm3PbeGaMwj2ApCTqE8Ndk3QykePYyUGMCcgH9CoiyUL8RPS9Z7ugx",
  "key42": "3CoVJGUnDuWqLCbpKRenfrHhAHuPcLmBpYstxRumrRAvx4qtRrCsTHAhtRN4rZC8pf29PcBoqgjaieVSxUpt3Ava",
  "key43": "3WUm6jjwcAGbWbpYMJVEnS92L6rksRow7osrceMF6AaGkcW74kU3QYCisxRLs2wjDqJoLN6TFoCBdNj9S2PUtNe8",
  "key44": "26FXjkNVZ6SSNyhY8oDdEiQkETscibdQJAAs9Z7BUXPdNXZ2CzpdNyMPN3Eok1bLtBCRMDAkGUrw4Rya3LbnJaU3",
  "key45": "5niyZSmWondjqpvFpxviTbh5vWrXZqqzmGv9HKm5TBYR97MkNPQvXQJaW2mcforTdmdqtb6dV1qN9yBXzHLifxtg"
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
