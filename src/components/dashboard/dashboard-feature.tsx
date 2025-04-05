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
    "5atcZE6q2d7doAtM311CA4kTZwdjSnxZcpxpm8rBqg7xKs2ppPcvk2JSdVBsnkX23BrHSqKSekgUB5c5qVsnYxXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2okP82u1ZVnJ9Hn2814GUF3krH6KHoJeNwiYsGkWNjR3CNwz9MjSaD2UzjUipLzeyeqoDK4ABwpEL2afKA2Ce35h",
  "key1": "5aGQVxgCqJgmZoC1vTyLiKqsVMrx3HG7TsCXEScGihttngta4qhX1NVvHRJVRMuqaczY1pdhT3np6ArksHe49Nig",
  "key2": "5AZRY5fbGvgY2Qt7rZR7vtfSmYdmW5b2Vi9jwnBkXVnb5r2YQhXWo5BNtGZpaUsMTdYARhaAh21KUhRBkvdhCEK",
  "key3": "2cRvVUDDmCcFKJwECcddq6sd99PVW3NoseqSKVV8DiPThSe7o1fwTqb8jPJZm7AWEMiBCKETjCDGaVXdjD6Uko6u",
  "key4": "25a2rZmrnknL6omojrYasUcwwgp45B52484nMkxJL4eaZTkZ4UezivZGmSnHbiWVFKrqXcbrkJ9wwBpTNz9bBBXk",
  "key5": "2HMEudLrRfU319d4pWjGh56yZNJMqD8UBhKgF52g6X8J5im6dqJKDQ8KWy4tNmfyPHYFxD8Lp8KMkXrzfcewFB9H",
  "key6": "YXSMxr7vm6b5oVLK5bFfD4MmjhupQNYV3SodLoqM1itZNqqFj5w48uUdiPwH8px12inCWrFdeFwXwbbup6qP1nS",
  "key7": "3ecW1nNmmF5ptkcdAVuMbHrMTQZosQDKnKYKGB2b5jzypMripQhuMrWfA2CHoeHHwEFCqdXKWFz1BYSLXUR7CuEC",
  "key8": "42Wej4igKSrKpZQmvgtG8LMMBQjfqZ8EYvgUR2KLZhfpVDYspefM4yntT1iL1z8yetXitnqmGCb2jbxkGiwu8uCP",
  "key9": "5fSuP7B4Mvdo4zPmXoU47Mv9brxP919BhZ2kF7t5Vf3jcqswSNuf8bn1L5jLHcwrNniumbQPygwqmPqd7e2qZduK",
  "key10": "2nH1gwdTVoAokLd7ksnbLdpfVSohwZWZ4siKHJhf7zgoKvdymNisRiKQQpAL72iiTvuJw368whUvauPGDeiNhE4c",
  "key11": "4SyytMBbEsJShxMJeEru1LP4ZK4CWDnfktQN8kPV1TVnafxkqBDupUiie119dmPCL6UQcEufviszjvXjzMAG6Lqn",
  "key12": "4sg5m9EPpQ69VwQi7o7UcEGNWrGAMUFDNGzdYzLcoioJkPMmXt4bggbc1FfmcJLUK4cAw6diAURHd94ek1nBUi8T",
  "key13": "yqErkDXg3VN7d55RTTEcCHXXj8nQkhVLotNMvLS7WgW4C91qoaSkT7nNYYUS9vcrWicQKhi2Jjxrc7FZRCFjzcn",
  "key14": "5ArA8TxdrTZTqyKsmJWMrg1k8m1jLU92AjyD5BpCQxKiJAxn7MjbRNo4KXpJ3A5nFNjUMtpSHkbmN7Gk8kjQJwV2",
  "key15": "QGmF7EbPJD7nhXQZvbUHBDRPNZNmNe3Ew8TpDFyvM4siweALwZPpDczez2PDkZUjP6NX8Q1rq4hFxxXYTVbA9rK",
  "key16": "3UVsTY94o349hmtXorpXaKNM1ygGmyxv73diDUdNjh9GAPjtMeXFLMKobUnKpJMvznLrBoryjaBwfuqVPjeSWu8s",
  "key17": "32zH6aWoCr6p1PXfHnf3K2TQ7Bn5PqiFePCWS9Ax8b33rctWX5KDLyp4M4dpDP7R7VyqMh4Szu3Qr3xb5RER4vnM",
  "key18": "2bCWX7fpUJ965Xh6mv1biHq99Ap6s12EyiwC5RsQ7kpVFGupY3HMMtYJXE1TL6bc4ErkbqUrVCK8bQmHcjmCqHA4",
  "key19": "3VU3ow7UJxJf2a3hheHAPscwQ8k7bBA258g4nRyEkvk51pU5oEpAqVQ8HjBtCPScwAVPC3iRE1f7E2jNX3yUNNLW",
  "key20": "5mK9EckVB4c9VDPszURBpYonZxfyTnkqq8vqhMiBG9wnGwidVddmfHPR45t3GeLNz9XnXB6sw3mfDoffBuHXXPG5",
  "key21": "3gaTVU9kG6bogNyzYbcawRd2owFmpjwgvvvtSYLXKaGvnSg8EEdYoNJuh3DvwaQBmHCTG52nbSEz7LMSv18ymJ12",
  "key22": "3uVX9eCWZ3CmGjxGy3mGHkbRkYFJsr7qyVHdDeZPaiKXuP2ZPMdGuXyocJ5rydAtmkcAUVfzjkHzW1j5Zydfhg46",
  "key23": "4pPAWazZroJuEa8on4zTqMJGYRBPQMnkk8w3i7VRgHCcFBeaShdrdTghwWmFENeuM2fdVjxqPKvsADgiBwSmT3zB",
  "key24": "5FvtZf2xy2oACkH6gn6RP3XMj2BxQwQz74CxD8ohjqsFoThhkyUUHuUU2u19morQxi4TB13MbCLAJ19LHvTkLU1b",
  "key25": "5HvSbwqf5eh4yN6bYctEuqDWJiWpTSWFEPksRTf2radQR65ypt7LJrkLrSaYe6dFKTSZJyrT64QCugki6ZPT6wsY",
  "key26": "2acg9GmKj7yew6AjtgFLrDDNvYRNTtauYjV5DTNzatmpsDjoTy2rtEor4q7cv8PD3NFoK8p7jkyoeDGEUi1FFX8L",
  "key27": "sxA5bRnERyy285NK8uqNwr7BsoDsXWDc6YQbVmAAPW8L1UH5kb8r33oi26vYtNtHmP8nYtYTso3PU17EWPn1ett",
  "key28": "5UhYDR7NWpwRoHZQaApwXFoxbssL2wiTWj1TYgS4X26TQmpeP94v2HcZoyXpk8HqZ6hcfbXiHLnwSFZFmnrHbNpU",
  "key29": "3F9DmwqqoYehEKJSZo4UF8mUTSpsbq1kFQR5ggxex1x1aFkdzSY92BcNJZbDaQyXnxxHZQAMDj6jYLwLLc1A8BUV",
  "key30": "3zVacwnswx8y8WS1ooxNi4mPrPzNcf84scZk2JJnBxUXc4AJpdGeDHaHVtNUKo2R3cXV32JuGtoaqRL7UVPAXxKQ",
  "key31": "3dYWFFq7pZx2Mcsr4xxC47vaMZ1kLaGxffgyRRWDXfzS11EH792hVRW9S5sHUXe4YTuwkYvFAs9YbxdGBwPM5UKU"
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
