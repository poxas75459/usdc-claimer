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
    "3Rf2Wc1424GB3rCiUcRMZASgEZxps5AL9LwRKUXUwXkUsJ17kUzCQMsRhFE7M742ocQbTEg71dp6FLwDq7Gigf2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fdem2DwLMVKU7tJC6RrVrKEwKNyU6iqLChmjQAce8oLhja2hN6889sbB6dxd8W9fm8Y4NNgSg66fZvAevoQZLVU",
  "key1": "5z3vqC4Rgj847g9efrFgYGgySBfRpfzumtAygJu7dsUgw53KE8ic1xgMsKkXdEgvzpxoUvx1ma1Sk3B9TR1pDfRe",
  "key2": "PrKWzGaDnvMPJh2D4Q5zQqfM8Lwv9RWBTB2kqGSM8cLRceShbGThvodDMuvPL1Awb4sQCckeqT5e9ejDBALihuN",
  "key3": "7KYgUQwmtcscq4532EVC9bQXKAJuBC7Ct3fQQ3qGT2Mr6NzzCn1bvnBK3Q2nVTv2nuuCpVpRLxXfHYx8TmaJ8t5",
  "key4": "3MmbD1kwGs6MGEdn7wuz15jps4NbZ6FuUqBEunXpzZTm65jShLAeWeqbo37TRLVMDwcW3Ae6wC2H7F3eT46zvoZR",
  "key5": "2c6fVHpwUSMgBPuyKR8oUBvZj6r9jfPWwN1SqBpZAiNQYv76XvXTUohcdZrz8StttEQa61Yvf66ntPDHFCUvhXFs",
  "key6": "A2F6fpHKzAxj1hMd7FWeYoBNNtqj3X4cy9Cyk8ruB1PobmHgSu1hWDCF4EhYodey6P7ULHKNVbj1cCmH77wt8Qm",
  "key7": "52ZTmfTuvmuLuDJLCJpGA2aw6Z24JwnZYjSidSkejL3txR5c3HQ7RHqa1fDWXZg5JKPN3ruEHVamF9xVBm93KtgR",
  "key8": "3TNopBGDKbwynNLrZnZEeWrnhxvZd1h46sGTrpVrRvYnHuTuv3CiwfahDUwyRaBq6VanjmoPGcNG3UNgubuAP46i",
  "key9": "3Q7JMV2nYVBgbcjaUe8ghXdy1hha135G43tC5rYKeB2QvvqSnzwyJYFcQ69vdmGuN8gSrU9XpfhDcu7KA8Z9umD6",
  "key10": "4FtHmFoAtHCbjL1VCJaFyC6zjHRiBAoDT2G7G25J8GvkuyM6mC1VPD2bw9pBrzvRA7nVn66PYhWMSnRrMUaqvQXo",
  "key11": "4TgeLM6HLRGjTSsmuh2fMMeHetgYDqwttX9WD8vQQCLo4nydWuGsEvh4HoQuMCVjZ2yx2rK9pmotptLgwrFgbA1i",
  "key12": "npsJgq899LKbYkLH2JXBRvhRzpBqGXsJ1qYFv2SGyXfvU6imLAQ3wyiyRLiby2cRFrGtj81xJsFPVVb3pX4h3jT",
  "key13": "2semHTTEWNuQvFUpWfbpjkzVWeoZnobGeJyEYCAKmZKR1EMwM4NssQVhYoAVUNWP2XFwtCevxo9EG1V5aQf7mcDH",
  "key14": "2mKNcASu8JZ49GEXy1E8CxnA6AmNxjGWbRDR1UCRdGTATj2WoAGyRxxLA5KUJ4v5poEUdjg5hqvUwiJ7KXh6SfHk",
  "key15": "5p6XQWVX2DZfn198T8u3PfyD36dq8f1BcNHZ8H9XoB6LwynDKgufaW5xBD3Sic81yifL1XGv6YzmDvmSq3JGAMyR",
  "key16": "rftsd3jGbPEiAea2BKtTUQadmCmtmAQ4MQ5K6D8VJxgd772S5ZcrwP1AXW7FMcvcvW4i4wKABA1gkxPohkTXw6T",
  "key17": "5VH5orsUbJYsbMZCvXb5GptL1vGUeGT5zSLnPS798zE6vSun1SnDSdyHb5oW2x7S94kv2dc3VnMVTpesFJUidKAR",
  "key18": "5SbKDNuU3Cd39z5hjDp341pUF99mhTht2MNQxSw7fForW3Q6xMVKEnaBfphWs3W14n4G8oCFTertD1DgmQM7gMRL",
  "key19": "2k5V1faf7N1JdRCtWS4dp4TGvR2HpyteZuzA4rDasq9yhP4AYfxormsTensotfek5MwH8iWdcmdLBk1k144rC6AF",
  "key20": "4pA8pP2uKk5Riu8LN8W3mRNZv5kbmh9CVt5K9Jxep9c7ztGU92KFWpCqaBMjXp9GY5t8RfaY67smUuNSPLcQm3aM",
  "key21": "2KkswoccozdZKbvfNhnUfhzgTCXg3BtE2ZG3deBStKPXejB3EG7yMi7Qh2vPfC9qC1F7VYvqvKJpE1B7eVcSFqQ8",
  "key22": "2nbCZqX3mFkix2djsC8gPahAYXyhFfuMk3jN38ytNHCj4d6vdfmXb23vNChEuEqDySvCwzRrzDY4UAeYNeLEAsVu",
  "key23": "4aqzXTeJvxb4MBFMNUxriFM4SD9Hzb2WSAGsrMaGwv4Y9pFhEJstMdRdYsYKVHNkhpasBc25zGbVkkbRM3b8V27x",
  "key24": "5BaeUiGwMV5Z33qdYeqgvNjiCBqyWhiim2imHQnDXH8qJgdW3hkKjWaMKP4cbvj7GPVdadWEBhbEvhZQNdGvfyLS",
  "key25": "4tUtcBETnNQ7WTgtmB1AFtRDZwJGADZ8k16je9o8hvHFKCM6BRvQjNs3JcGBtgjXPkm4DKxHKRq7HY59ecnPqj6",
  "key26": "G98eq1xKPF97CYNGy6KywFNU1uX2ESXqU6rkuefyS2awSizvRkBkDUz5QP1roctP5Rsdi6Eg2KNxp9RxoydcNUW",
  "key27": "GndUa1Vau5QVymaTgW6Xt7UWHj1G8netCx6hNYT2gg2hZJXdVSC82CNrsL4evpjZjwPYhkZNMcBoEJLXK3Z1ri1",
  "key28": "5LM6gvqnxMprkczxhfTtCeEXNcLd3L3zqbRPbwj6ZryN9onaoCZwkTjdYkzcSSdeqkXUuop2GTAWr3e26uMQK1Vo",
  "key29": "49wuUbdZANhEbymCNRiD6kEfzFTAofRWzjDGgnbHZE1JLW9K3Tf2P1DM65hGz3wwXvknsCafPaHFgT3NE27WucBf",
  "key30": "5bMD8xUuacitV65LX5Dqo9h4HJgYbSgY83rgQhP2jrm3nHyKK267RhwmTCr9kuHHUdJGU5CXSjXXHdTDy1FjE8v3",
  "key31": "4tauneqXRMmCCUt749K5BZz9HnDhbRxejiBJwe4zZtzseLvHUWfVPDM7mHuMnFaiNDpP6AAdQsme8eYa6pkeaL8X",
  "key32": "3SbowZJxR3qAe1xSN3cygDeMBB2QE6Yn1GdtBotjWZd1kiwuzxVCPNrEAosnahAYYjrdEGAGRD3XkzYbAa7wte1Y",
  "key33": "4LhyBiWTDVKx6qYfAcnnm7XApwGu21nPjcKZ1ZqyjUEm5e6KVXiWDPFxA9yVroiYCRgQFbGSdtVLiZfBsmXWAf7t",
  "key34": "5nZV75vmXqyEJRyqT3Z2BBUTPRECrLdDLviU35UwWGeF24C3MxkgqAieF2VjhhiCGSApnFRSXfRjC6Amfw9fewsw",
  "key35": "2MvADSAcfPLg5CVqi2aRDEHm3iP7TBMqKRc7UTvbkc9UTNWzHMbWDp5yx9bXYBdeinSPYAMTDQvZFy5gvJW5NoeZ",
  "key36": "66WHGE2AnFDrTVuSCmABKgGKCUrkuN1mRgtuTVcj9U95WUdoS1pavS5GbhGRMLvAsfAKgxBDyfxQttYmpg37KAnU",
  "key37": "4XFXV1wEeJmJ9bqV2USxpqBctq4CFkhj2jYPJaMn7wBtWbpekT5hC4ofYyRGpt49YRc99oXAufis4KdBXQxDfhB6",
  "key38": "564vTnqx4nBNadY4ypx5CnyWaKpQHco5H4T1751Nrj9o2m7fEyDjCSRmgHKSuHhBxnECEfL4HcBvMcnF9yYweNq5",
  "key39": "529FxVzmu1dNPadGr63ajjJb7nfDNhsyTNYp1FFqeDWrUHWX8stHTVY2ghvmsEViknevBiXKcVsx4JtjwPFk6wnc",
  "key40": "4n1vPbAP6KgQtHWWtYCi6hLEZXPzZdVzGfxU8iLbJrJuULmtYR8cgDTX5FjCdH3udGYmGaq6MqcHYNR122PQG1eF",
  "key41": "3SkJC1xPmjzdyyw6YbT1taGAuzGr7dKG7FshkgS8ZX49PAkjPfnyb31s12pZDAG2caPWJoQ8rznG1PxVw5qFz6Uw",
  "key42": "2Zh63ds56VVWgP8aYos7TmJTyudxGxZmDo8jhx9CVsqrmLZDXkLM1qTz4zV8hFXQXU9UgD3MU3Msi2bLoCiWwB7g",
  "key43": "YZFwGaU34Drebdub1u53PH4jY28Rrkx5gmknnYd1gU9GfjQmiVL7txpUF4AUrr2JpGdWjAEx3J98mumQhHs7G3J",
  "key44": "4oLxi2R9vPP1sSGqm4RZhNryrNXyBwGPZFKcobjaKsegNFT4DQCURxHkBknnTdHRy4javyo9tb8vnfYW1biXocqr",
  "key45": "2pssxyGTYEFeo33wJywdZPpBk54vvcz86ycjZ7gbW5DEHqgGMREVFzeviMv4dmp6uLMEUywt9NonRAPnBJiWDYpF",
  "key46": "42m4TBKVrE1Q8eEhxLjjXcawgHZmJuGekF3Q9ogJMfnVFiTC6n2a3wnhskDV5X3pSfHraZhK899vDDbr6EgJWLxf",
  "key47": "2hfsg5DPJYrGPwfZhBCjZaNXVf2QoNQPQ6eUm3KByL1gxJJ2zZ7UxtcGj83qww4douLHjtrTSb6oS5Ut4VieogYb",
  "key48": "2TceQfey2gJcsqqVPHevxnRXDq2uFvBLLc844RmiKaCCGE98WgdsVwABwDy5WLtrNLZSok7wxLt6rGPwRfLkVBe4",
  "key49": "yAYsqKRZjfPSoxanM8N8K2yHoZiED2zno3rwGQhDpa82vDSR4YLfBuehp9UDtc6Jiq8gdQC1uWtrhFm2dt1oDhD"
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
