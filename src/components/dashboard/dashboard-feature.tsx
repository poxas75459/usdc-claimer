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
    "5D2nhUAHqnwHXeesHUSezQsK6STocugDUgKEMttHRrDKY3vRPnoe2WxxxbfJEhLPZDcGjtGz6k7nvFkWor4dDpHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QZgZXV2okx7aqxkoeC9Pj5KJb7DtYjVTJz2Jw1e2qNUEUHwsH4r9RDQpx5Y82ekSn8n51L11xBdiNgBtdf6naW9",
  "key1": "2vCT65i6PJTUBH7hZ9MiNrTQZ8PwaHff1kJH7qTLqGj19WZ3g8bkK253FihhF6dYB9EAKfyMamxE4x85ZgsYtkjk",
  "key2": "Ggzyfn4oR7ZDfvkHduM6a3NUpH9RGUCnFjx9npCxFJY4UBDGYBkQfuP7UpFfWip16FL43QZJ76pyUggokQc9uAm",
  "key3": "3zmYbtL58VY7xU79m8xkfDf6KiHzAZ293GyzotHMPu14yagbawimZ3EWJmfdvzzFqBNKC3HuL1EgBEeYPGxBSrqU",
  "key4": "4Rna6Q81X4UuWtMbvEKyZFKYAGB5dtE5RGaxt5pzq9BDmcADaY8tzQpv7TXEyF6TU8xHT4oE5yb6mUFVAVRdQp94",
  "key5": "sEFTTqci9rxw5HuWieXUeiwvQdiefzUi7jCgpwtdVMbW6u3PCXNLNgxLd9XHBKYiSqgyNxZ9iTkcPE39rP4eK2g",
  "key6": "4QYdPYK6jiGVY66EgADynJMBcaMAzbSftXuBxAZcahnc6DbEj69xZpA7o5H38xMPLeKGcrxRQHjwRrZEeBPCE2ZU",
  "key7": "5MMc1joxUbyUGVyzHXsntpqE2p5n8jGCh4bYibjLipTJMDs5XrJKnurTD8YWT9wSDYkwdybXXZpW8ZTzB4AcrVAh",
  "key8": "5Wqrd53Gwiy1xWJxXgdj175w2CPtwJroLFZdbU59gQs4rQiMFngGDUNhmWesUiQsMtKMXBn72W9Fa3Hm9wM8gHbu",
  "key9": "5HfcMxd3qBAU2TaALts8yTQoJUbGf4RD7w6dJR2p9HDab7CgeCDb32g3WbCH67sHwA4RrqoTfuBBABDi8d6zhGi1",
  "key10": "37LTTedSo3g4eD8P2dg5JBAGspCkt31Qnzp7kEroSW89SDxR547szpGrSK8uP1ruV6kG4ZjoHiMMAJsUYDyKthX5",
  "key11": "4oicTPqkDDrxdVm6gcJaw1TGYXDw4Ew52ckCxj1HhRCSGSaf3f56LCQMiMRve9xve5cFEoPJ8Hp618gWCYqGvcnN",
  "key12": "5MXxmdtT4Puc8gJrBbGyzBrK6FucajhGgJnULUQcnjbGji8BEEqf4DkWrK5YRMFPuhaYJbYtevgDvkkmYjUBV2kj",
  "key13": "5PZKHiiEJVJiFXgPNthmMoveqPuDhwZ6HSQAaUGc1yNUVUxdiJQAu6iLVu4CGpt6wd98aJngPDiWwYvdoJ9diWd7",
  "key14": "4fdnv9VCCBtV5wgy4jvDo7eZbAEAM9Zu54Z9SP8hbBn46SxcAmXLPb2q1NVcRadD1PCuXJxm66yRvtmAprhMg15K",
  "key15": "43kMG2Abtx2PJMsd8sBhE3kx8LfyqvFzqdakMFZodB4xXDKHUwBtq9gGidNjxxfgUNxqxQq4wDGBHdYHCo37iGXR",
  "key16": "yBnbafdJ4QG8pheXokN85Psnegv1Tb5qZvCJQA7681SF64n9huT7e3YYs5q9V5JygJbvFAcgVZjtLAV5FgGn8v4",
  "key17": "FqgX8Jt27sn7wis7jH6qVvy8Kr1Ki4Q5fz4kiuSr3LNW4ZRo6dSuvLMV8FPDuFkhrKn59VLkYqUiQLESQq3ZePG",
  "key18": "3WLtZbQ5ex7QSyY35DzyDw87hHBMQcGJqZcXacWJdBshSNaHAAo1v225Fs3Y2J1YEbM4vo7qfzj9R2geFgQAwEmR",
  "key19": "5UWHUdmiGeQ6NoUvQfwS5LfEQfsQdoab6t1Qyxkydf6Rtzcp21DLpy8m8QqjGx7yUZUe8yEfMQYvw6yDcr68db9P",
  "key20": "3ULWGdu2y3oK6oHSkYS3d1WBnkoQE2PJyaAx2bSBpRvm43xZS8z3fjmjSqoQ5C9psA8pnw36mNJdSb1fDoYEvVaJ",
  "key21": "2mSXNFoyFoCtr2xsbXHp6vaPcoZqcVYR8DcAo7ojugzxPJQgbmyTibPowEyichz626HKoGME1khZVbaixiuLVrG5",
  "key22": "2Vm5xcBqbwjyuZEvSdXZaRVhjnfa7at33BiS9bUA3wui4SPXwHKnGzWnQRKUTY11kKEYacbZZJbP1SretM9avsjG",
  "key23": "4RFjGmHeZE1Ubgbzij2SWQa8srCUAtUCEWAejKoFZ9ruVRp75f6j9qgRcsZYxtQ4fLK56zuTWrGQ97k5AbKdcFcJ",
  "key24": "4tzWWXasniV3ty1NFqaxHzkPnEeUQESJskiip8dApUKRXrF6nDvjGjbV8GiXyi2TMHqPTiWJobDknUp9j7Qu3N7z",
  "key25": "5Bzn6oZVp6s6b7VrwrZ7voA2HxydurZV2wXu2A1XRmhDngnBJhdGBj7KFgHEso9qgAusmrVucE7DsgHfPmSfZgwn",
  "key26": "UE2b5qjYTQxzxnrmv7gnwrZDfcWZVbbrKxTjbwhmiMSsQuZgkdAcakVXeBK9UXLqnVCDcoNhCF63jp3Yu2NWHnE",
  "key27": "EQmqBcPYUAj5De8mBdsrQXari9B2p5aTPeHVdpaP33i5HBggiUtCWYm3FGW94y2JsSapLWevuUGrcMMD3bD4tAv",
  "key28": "2fKpTHLNSntyS9F9Tywesd2iavqxpFp3ksV9tdSN3nmuhHUUG9H4FxyMaBb7sqy6NWS4DJBjp3dTQapGaUgH4wab",
  "key29": "2Lyp5AkA2fHfXac2uWAhZ1aZN2m6ANjRyKmdYT9hQveb4NGUueqom4Wf3WbR3ndZ2jkRMwfo3DyCkMkB9tozcw4X",
  "key30": "67FYm9s9TxhXxxhnraq73JyvraQ4VgBKgUizenNQrMW4Zm9UhN93zwouC5zWozovbBkhrz9F7nfbwiEVZYUDdPv2",
  "key31": "4WwHQwPuFKDoUBkp3qT4gDgXjwqFB4Jk6XXmveAx8nGExD7FcQgv4WPUVFXstg4wLTNbjMvfJfQkoNoeBP1veJSh",
  "key32": "4h3X3NoMtVvzp3AsK6GBurzCWSDRKXyGQBjwEqabdJJLrXsxkynY66kYzb9HQxjnqfAVRofpAGqBn3T8VAmQuD12",
  "key33": "5Zo1ZsNBrnqCAWdyu9sRmAzseW2VjSMATLuVowSgFMvykJHrrzpuV1QaetPuBw612KHeeF4pJF4GQJU6NPSTzqJY",
  "key34": "4bGxDQhMgVqNyUZgFHrECmM9HExcFBU9bgnPekZLxG4donp2XW9P7jPDCGh9BUWbWsVCVKeHL8AYV8pA5SchCtv8",
  "key35": "42T7hnTWSzYaUUpQ1zesHb389fbBTrxtoHZpoha1zSNvXWiLmU2ceMhyuk5uUCPs1oNw5u9Mb7A972ffuEPmLCYC",
  "key36": "4XPVqxr3AJLdQ4f7o8g7uj1bQBoS7pNhK1v2gxY4FeUQY5mtvys5FtnpLNu4RAmqz15VbyK1nVB9avyW4fCNoMiG",
  "key37": "2bnBAFyUJfQHL8mQCMXqaJSYURWiekasRs99i6o2ZiAJRKNHHaviYxRy7gJLB48BwkARUfJDvrUYraqS1kA3jHfM",
  "key38": "3wCjuEYcqWsWUs9bbhSErE2BiDFngDLRwpANNdJWrTrKjkmoAf9nPPVa6U4nW3V8CPcwmGQwLEJb5cEwUNppVEG2",
  "key39": "4gdPkfVKafuwh45JyiaoJb6y7YemehSDrgqwciarpL3z8ERmkbdGEVHLgE1gy9pQ3npCy3c1AjpVFKNomki1Ase7",
  "key40": "26yNXG96415mnEKVCumviA6MuDGfu828BTZwyLxQVMyVWhQtXogWVUvLDKvhmbD27ZNp3itHkiLw5fae7snQfcNP",
  "key41": "5N5NYiwhn8K3H44Ba5rT7Hp5uQbsPxQJxbpp1Jt4i28AUvmifVmHNy5X8jc5p9S6hs3zmS1g7ekNhKryHHosQiMd",
  "key42": "5VxbEhzDGierEy5pnHxVu2VYzzhVq1ughC4RNhbzGRA8VsTKwknAVFigyUiWMN1VmVYuijvHfLAt7xVpeStvSFNT",
  "key43": "3zusWhJWkPq9SosFgJU15sZfGTpigXi3Gg9PW7VTVrCSdjWdZTZfPPQ9RF8JBe6pRzCAsH1YWM65npahu6JpWSDe",
  "key44": "TNg2cangQa421F3eaYrZFCR9HwYGqPttfFZc26camtbtWAitfeLWRG4j8BdXwGprMpVgP9hVgbac1Qidz7MbLJ7",
  "key45": "3yEjigiDpqGPmhunvsJ4WXn4fUUm4ury7UBEgpqpgVaB4txrxHnTLZH1dCo4B7MAxfG7WEHz2neyqcULArQ7Gtfx",
  "key46": "4abU56SM9SYEYPDbzTxcRqQNBQLncYh2F1gucdn1f4VgGMq3XonHzH1C5gAi5nJo8jkqbNAAfSGAqsD724nFm4cG",
  "key47": "5Jf4bxQ5ZzDkufrBHGbJCheoyyQqSzkzEiABgaQU9mBDWSPz4zQh3NhBqFzhJhwoGr3sjzByb9h8qCnXUbUsvVdW"
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
