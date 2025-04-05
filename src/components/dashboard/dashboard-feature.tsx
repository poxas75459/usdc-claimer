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
    "5BvcrKwgDKt5rs7ZDZHemugAURoGkUn8DuqnG1Yz4BLabMktWvt1N2ohkvrVSVUL3is4Yqj81jwWsLPJ9jUhvTfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n47Paqw7sLnQyrzHVktGYZYv4JtpAvBoA9FuYPWWSYqyYQi4QggpShnKZuCTz5hKjvvfN62gx3P7arnBhoejZMq",
  "key1": "DmDSXgJPYrW5VMcYUySem8cbfgsTs9GFsCi3Z8ei7qdDoYydeAka1RmR1qVDZCpepjAsZkVtfg1BFWqo5TzRjnk",
  "key2": "3BtTc7wWVEP9KUuoE9uTDX7FHDxhXyju8HHVZGuF9hmTdpYjZFMBvEqnp94CL8rhZph99XRnWjxsgtBRiyRdoerb",
  "key3": "4JzhswnYTDTE6JFcxeNQyJSbquTgyxfg1WJCURdDjtZpRZU7F8RaqEGoA3yJjyN6zdGD2U6ZjWb9b6tucMszurLq",
  "key4": "3N8P4qmLkmHfMrM9EEC8HRgajgcjD7BU9HjFrqLdF2YkYZeks4KwMYEBQ1nfnRSSJLzpjgWgqNNhvGdhiP3CEcPw",
  "key5": "3qEgD4KntsYgXmvzhCnGgKLrUambBLVLZ5Cxf6bf637vMGWMngxiPznjb8emBu68SihHVhtdZcmdTi8qPsYUheKf",
  "key6": "5dFMvYEC3ohJM3yCBqTxoxPpHZjZS8q5T5fr8gTaqHe6YbpfahQ5eSNaqDW94oiriso2XTuS1N2uxXS93xiV5uk1",
  "key7": "5YARiQ8HrqE7W9AKMMMuHxDpMPkP9rxgm9iEy3nZ1HoSSHsj1zRENexpv6sUSLtQsh8s95BVzPAJKt6G2yqVXf3E",
  "key8": "3WVdDCFw2KPxLrvTvwuNTU3JeWw2E4EiJmPR8JokewMLDxB8PXFR2Xk8ZoSZtbiMKLneAj8Jwv8AiEtzggcoyBmx",
  "key9": "3XobMrZxugrxrNNoEmGfEmsaEs6Q3Bx4fvv36nrgoGRy8m34Pq8orzdtYBcFz5Wz7vfJ8FPf5gYnegeCPnSzzHi6",
  "key10": "26UadrNuTapxBjhDJPAskdov1GgRKwshrnZagL4tMJYocmHNrauCN2Dkw3YnSdV5AHZxcgjGpyPP6mdEhedNevqi",
  "key11": "5HKsEe7nLrtRi31P91Px24CMzxnnQW9atcNWkep73Fwdis311QHRxwCUh4PaGC4GUw8TkLqL4KCbwuVM9roAhKtW",
  "key12": "K6ENGPnLLfyY8b3tSU1ribromN7UVVoJfaTZxKJJk9ufKBFxk8SBxq1Wtv6E9hnHZzja2Py8Tydbeps89UPjCRi",
  "key13": "3NsGg9mpBX6kc9Byowfs86cAaJWCELbbybyiGKcT1pxgjKTcuGWLkCYBWSPPVB3tcjiL4Tpv65XzjRyaJYxvR9W5",
  "key14": "5quxGSWkaH32WYqoYxuCoLq8VmERZpn11E4LBcXK2KtjjqX6TQiTwE2pKWwty9X7JBgGesn1ycypXxVsamdLSzD9",
  "key15": "2HA8yfJo5sRQ5qrMAfsMEgU185EdTwYknvQXJ7vQDUnae1ofHRYg2J71MBv2WAX9mnWeyTZzu2aJjxx7yd8SjaSt",
  "key16": "3fZsu4ZLSyLg1t9d78B2xy3zSJefk8ae5JjMqnhcZKPrUprKESQ9mJqxVrtKS27NQYYKrsc1CMQNC8T3pQqEu7kE",
  "key17": "2LgQBwUtaruvvHu8eUXMLBUEWUDXMWguM8Y9x4XF5pgZQPnKEBj1sVwxyB61v7Se4YEwwWvEMENcS762u1kHrYJq",
  "key18": "41n9D8REP9CaxJ8C21Q8HGJJxJL457FYT7TCUPg6Eg5p4FYsuEpEuQXkNLYqhFLAmimJjzQTfq621HWgZD9TtU5J",
  "key19": "5YbAKVSCDr9D8u8SrS97Xo3YHtFN9tq1WoXrukSnbCFVBQs6edH6VuzdVNbmY8aDmz562QwgB6bsnr4mFKZDmpws",
  "key20": "3BydKNTsiMcFydaEm97z5UovVNY4vK2GiKSWz9p1JUHrhKeMHvSVTfDUoVnGNHDaYPHJWSaJM2HiSUaf3neH28os",
  "key21": "3P92B2eKMdeRViKgVvcSLjVzgS4LaxxEfkWDQvg6GJJnt1vSNoih6AEKNtDkqfh6dgY5r6q1oaV4BZVcvaa1SHz",
  "key22": "5xRWYejEDnwyAN932B1kjYhs62cNhDLCdoqJ4reyqteSC9hYi29PEQcFGibdMWwAyxShER6YPaN5GcjQhHc68nfi",
  "key23": "4hZ4Dnut93LPhqz5bXyf8v7hsEgHMycdB123q8VLboR65tbhvSqUzeYVVBb7GdzM3FP2gM1nSFmzYRwCsU1Szjrm",
  "key24": "4zsDz24SQ45AUhpdNrSoNvWWne4f68rKTBA99ZyLG6BQrUksfDBDy9A8eoGF6u4FqBxTq8QseofrpsGKw6RQMf8w",
  "key25": "4xg4kuMuCwVcgahumLFP8potqD7xXoqRHUYuMzM2z2kcgJWEEU7eDxKaqhoReEZnnKsJ4HYaU9itnQwADbXVHuNW",
  "key26": "4JBGfC3nFbFWi92JS8jwsDAHznTgCuHnV3m2Kzs2eBqY1MHUTvzKtHGsPH8bR1ztdv2f3mHp4pZpUz8Ta4PAhjAg",
  "key27": "3UyZGUnuN1f6hJ9wVZE1Srmj2ZQ9DgUCT1htwM3kvam8xUeh8S5X6gikfs1RnJv3nGgYZ2a9cGNuifdDhKiwnHNx",
  "key28": "ySzt9KwAi7EYUfz64C3ECiKnWDdM368YRQnsUnMUCKzP9Bms2NzTTcyBbScgFGRpbbjSDdcuHPmR3GEC8FbhUW7",
  "key29": "3qqQ1f1ZPNdURgmiT1aMM5WRyFCwSa7n92jqHB7b9m31aUAzTbPZaNJaUQUqcMuGbS1SYVGXAKKHxs5aMdX9cTqs",
  "key30": "4xnfsAiUn3afVHxVsv3BmMvF6SUsA1n5159wv3jTLwFvJpRqYgmnE3QbbBnjPddFnJ2bR6SijWrRSXx1ARDVC9FL",
  "key31": "CcahuKCSizEy44bcst5tsk5nHBr2netois4dNZzFLKGVhFqGCiW661jHAsMH8XgHv6KAY8NwydCf56yBJucPARh",
  "key32": "63jWhfa5JLeTQJQMVsuoqR4RdeaxLw8S4jJuu9eM3GsSMoFVSxyYG8QKxU8qQpm3YoPFFHv7fJKteByt6ZotK55R",
  "key33": "rZmw3dQqyoetWkULd6yQ5BQw523nLAK8VYEod6UFs8SnqCTWwNK7A2QxDxYvH8gjHXMN8daXGKHnAmJtwMA9T4L",
  "key34": "3QGLbL2NarSBqo29DJpvHniEAqucBVYeZuDJSUzQcRwCDFm1XaFYRYtmQsM2VAS2bFCe4WHySkNretjXLAe8wdjM",
  "key35": "Yva7NQT2GSFFhNHrw2vn1Jm93AmjuwoUwx2TdGzNY492cmkJX3Gw3eekugVSM8bKB9nQWwN6ULSFcMCLRP4J7EN",
  "key36": "4w1c62TFEP48817V9ydpNLtHjGuSKhzriD3wHQdZ4hNRF1RNktBbja1jQya2Dx3obF5KPuXTvqKBoWWN4NXquSbG",
  "key37": "2chv21KPM6m5J32aAc5zu8FMYmAAP1Xuw8jQk3Pi1Wzq5uwiZNrLZo1WqTbK9y3RJkH9V2zgRM9a4jeJ7NtsgMab"
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
