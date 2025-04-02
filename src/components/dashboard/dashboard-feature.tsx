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
    "38CZDHSob5tHHSZrPzFkCSVVKCiEN1hFfo87JyGzpT5nUCXSABpSVmDedPxD15vBnAa4iCHa8k5QdgguU36nNp44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eNCgAA5BHCRd6TwMBp6c9vYV3QACx1zFDoi3FqVLEby8icD61WupVmfuk2NbGvh5MgHTRraECNvwoG3dy1fmn9p",
  "key1": "5KUAwULj39amJr8xvg9RJk6gMYkJT8ma7FW9pkaGZ8fgLGa3cDNS5CbxWuJMbocoGmHNwrzzD5c4TQWfbcuWseb7",
  "key2": "5iL82Q3LC4txhRBo7HgmsERraAEMAj4cEa7D9NuZ2H7JNK92cLuXcSUUrun86J3iiVJ7GTchrxFJPAwNtVhRyAH",
  "key3": "3FjUGxpSC8nFq4FJAtonSeHnX9awH619E4qMcjxUu1RvRMzXR15Pi9BkiFGu2pwRUCKBgKKMXDNhQDxsmfVcEyY1",
  "key4": "4QxhzZYzhMDnnSWmZzEpoxcrN8d2ZhHn5iDopeFsLAvwpbTwD9y8iv2s4x8SRznu4a6J9XAdhZ6sdP2D9aiVisi",
  "key5": "WHaqvwdMSPcaiswhvuv8ugx7C2Ymdyjzxof1rYSS5xtz6B5jR8YZdaGPfUJoi5tnqYGRKfZTZ4UYYpbsvbQpffw",
  "key6": "4QuqkXUPA3PDV7jhNpSpEbwnNzyP1v3UfEH3oUMyB8q89ikAsbgLaPzydRpx3UK8mM5FLot6hbeMKmaWY6hZdko3",
  "key7": "L52498bD4BRgBFokhwCVcL4pzyAk5Lt7G6kwyR9n6WHb6qDcC1wSFk21Einp2dDm7iz67qujiCzGDyPKRY1m5eU",
  "key8": "3e25buohmxeXtDv1YyLJJ9HgEp2hkvUofhDtSQMsz5VkC9Arx2kz2vDgFR1yKfk5H1245ibJJcyKtxCiDHc6TLXi",
  "key9": "53KhMGNhBNrzMCU6dk5aMt1q6kSyZmqHuosuaArUndPzisCKdwDa238gXHxAaPwiDLFKSbC3YF1BRzJFJomwjEtW",
  "key10": "GUwFM1yB7BwbQ3x9k6AqNsYHsCNEuVhG1iRimP7ST3shdvifk8wiT3a2MGmEc7H6gLZYBwLBKM83vLpADRqT3Gs",
  "key11": "2xLUcrk8ouG71PNdGs6S2KDx1Ap6Ea92vkuxTEWhdAhnQ7SZFbssSWhUJbuw4WVsxJGEUx9W4fLD4f2aFJbA9SVR",
  "key12": "5acfq8Txb1MyyhSXt69XBxLCGyN8PP4qEHYbJuxY1r316pH8oXgkJxQ13jnT4ZQxLpn8nzG4GKEG9fpYnFQAiJug",
  "key13": "4JmUe6ZFzzKxTME7iccPMxGkwx8spwcdY5cEHNf94KFd8yuTtzM9t8Gmfuxo5aeuoVynQkcg7g4sHGS6o2gQsAho",
  "key14": "5TP9LaQjBSFy8ofEYe8zMKmXrszvj4JA1NCv5DTvVir4wL2B7uBGMS4D9jPRBXAPmwRq1gsfYpQ4Zh3ARqfFZv1s",
  "key15": "5j4rV7Qk43SyNCiyLi38kkmR4SsFpGSVUzyCFzwnroNAVuDz5iE3Z1RdaKRExt8PVYjYnroY2jSk1j19yTA1W3pE",
  "key16": "2Uh7YEZfSssWtLfCmUo6fe9hM5EvbcLBGNy9Nm7sjh5YNk7rLZnFvtwXeaMeNtPAZyuNLs6t1AocyUYQaP35DLd3",
  "key17": "3BZCeFrEfVc1Mar7MD6Qm4bwWPhcFM33gZhgVYGK5aCpymfVHQCspytgTECK8cXKMDjZ3abiFcdmo7wmBsbJc5dP",
  "key18": "3nVzw7eaUu1wH2PJxn3vhThdAGUypZm38gcXHzNawVv248QW8Mc1HdVRr3zGeHWhR9wNMu57CYpe1mr6ZXEU9SWt",
  "key19": "4Vzg8kMeB3davT6rX4Pk7ihJjyNe1gYrnK6fp95P4jpkfhYft5MsmSNVJgNWpSTZhbSBxcz7zYEbTkyYKA9rMQy8",
  "key20": "2LTXwiUUD4sh3KPuUGKTEG46CV5PVeKLZ5FoMzcqrzqZrraNAQjiPc8TYdFpbk52MunVHiwUdaJF5CabmPpB1CyG",
  "key21": "V4CSiUtWBJQTww6fbheUpBaDC8ecRrbWPVFUwwSEDFCSmb4i9e9K6X3aCVPMBbXXyJm2tJjX3endfJaBhdJN8sP",
  "key22": "5pzDJHQJWBRdGBSD56EAqZYQLBBEC7gvm8xJeVUeVxZFtsKdfYL5Vt4x3sGf4RM6FyFAw6QoPbKUZDs6CTASPKVt",
  "key23": "2hQzN8BPY3DvDbg2pHWPBasqkLsPfEKLqfvWvuVSs2AacRVi1YHWbcS7WrRpXhc1tLfnP6Tjr5tvEC37hswD78po",
  "key24": "4GUFHxM33JuRqWutHx3jGCmzoxfsSha973dEJPw5eAz5zUAYzqmxqRz25vUJxVpC6UyJan79fh1AGv4nyjkaMjhC",
  "key25": "vkSBAumJc3heqhPpnACqNvawUnoxCBsV9BVWp7EmrkmaYJAQPgUNLJkvmEYPwGZ8GRVb2dt14TnanMDkZyFyYK6",
  "key26": "3hAWhJX4AARKeaaMQ8UsE5FEx5bvRmxmNd7AgqLEEo3mC1hvqdFzjZAhuqKcaRtAjKnqHVES6HRMP9NDuG2vkaXW",
  "key27": "5tEnK3WsdYpzw2HGUNSdXbFNCiGkcPBeogF4na8umaXxTA6LBGVNZWxqNMDdPZvkgrc9wS9KC6EiNFuwKpMmVNjW",
  "key28": "4xfXEiDiZNuWxrHTj1sj3ssnoJM4msEka6A6yJKq3keN65HYmNpSheSpnLWg9i9SWXYEvmwJbeuftiuQEsYdSZJ6",
  "key29": "4EC9gSdw4ejWgrFje3xbUceHmXpAv8cgwPHoK48ELWAa4BXkhQ2RSodyrCuSQPCLehA7hGFyhQZ8WJi6f6vQ7ZST",
  "key30": "5Wt9NidT3zEvtLurmbTdyzuiBBHtdB6ZLtP5YP3mMC4fQioJVpvTowYAAwWg8k8xu2VBb8JdDCxWWRK1cUkftfMa",
  "key31": "JeP3TRE1fAXz1rotyQMtzSFav1BByt4YBaCrFtFn3poNavvhd9jiPbmX9LBg6fzftzrmJh2pyeJBKwjfA4Jkxmp",
  "key32": "27fuDfxiWXPVCJFiHcEKKGUWjg5ew4HAgBD3qSEi2A7pk375pcx6a8xjAKEAMK9MwhpWaWpMihpVG42xUXDf3oGm",
  "key33": "2Q1h8v4e9wPDqKDbjMAe51TMGu5rgTcwUUSCncQSpawYy1Hh43KeCgt7kqhX9ccLP8zs4srcCgHDbSQKZeudCzJV"
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
