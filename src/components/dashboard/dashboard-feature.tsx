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
    "FyozceF8vGoDS8T9ogREFLZBGSMBrhMvR7iZprJXAxecMpbC5pkJpvcNaCBs6aN6kz48GB8Jr2hTLMRRQdNRgjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sexMa1qh2scZuggxm9EwVRB9hE4rxZWbbqyFA8yQAhy3r6gNhse1x8J3qPvcdmLXBHkH86BiWd6jvoxhXaXcBi4",
  "key1": "5WUmEcJYmSWTHLqTRVcCkBg7cP18JqkaAVrDxfCrRhUfXiWyeJ8pSjhJZGBXbk4b8DRvm112Su3fePdmYgUKmkRj",
  "key2": "5i9kjpj9h4eczdwtmPZhN2v7EX5EmebXW1eodpuKXVk8fDQ7GNHqjC4u8mdAPLuuLhuWs9GFcfpUYsCwaEn81tbz",
  "key3": "2H5zsormmZqTXFZ8uH345RrjwLjJPt1tvq8c2F4kJz9NSM1mHLBw2PQWT7tC6SNuRFprCEhMhRcGBer992KuQHEU",
  "key4": "5TX6nN6WdFB2GVFpuJuot2FoMEyb7ovyc3qM9TX4oVD9sfiQyFpFoLNyDgeY6s9RGyBLGGv1wWVBgky68unUBxqN",
  "key5": "4L8AwPFVGzFMZB1pivD5MVq8T7MipRZejEc5MPS2nCiDjuvXgPzCcsXmv9EYJg7ZXt2cucdNqeb8CfVm6fvUNoWg",
  "key6": "4AJtAcyYKF2womodaL6SAYNy5z9yJZNXW1gutyEdagPBMHS9Lw5gTfivNBBkzGMK6EXV6J4tJdpiUNQxMomP3Y3h",
  "key7": "4LZ2wGCmSoctQ54QwTBpiMyLEic9EzVnLu4hce2hRJBawWnxpRj2KQhYhMUJmE8T61HyFJZ8j5A4d4r9E4o3xcBn",
  "key8": "3j7LvigoGEyyrTQhXdrJfbxcFjGMhezSMk669AjUuqVtU8qqLnREeYEJX8KzTbDgLF6DL9MwETyLjpAgKTNLnbZ9",
  "key9": "5hT7GzV2mwxUJBvTzi2Q3Te2yvsnPsL7m1o4gNW6EmRzw3pKn2NQssjKGvdJGvKv3UhwvJqv7RG6UcsnKWQdUSBc",
  "key10": "4g1YwsHZKkNVbXbweMGYB6sWN6tgSTWJMH4UjJDs5fzT98tYFj8EDtpXjbZQ6NQBKUVDbBLLnxJqy3VdHcYnNCVh",
  "key11": "4xz2nkt9xVWFkZf7gFxAgsyPXVzPicbmmpkeTVansnuN9mWnc4oRfGNYt3yMgvPPZ4kGGGxixDJVEREbVmEnPhfV",
  "key12": "jp3hgdaFQufaAJepJ9bQMgDHLwzN6CWVV5XCsH599A8HkHCXaY7ChLKP8jDdXJSpr1zWXWM793ReHgSc7tmyBHV",
  "key13": "23D5tSnxEcpUDHFAg77z8YgGJB3eGuAq5aDjw5yB9EKEpS14Z2fGv2myt7v7YhBkDBA74koF2kJycNNuv9o7jo89",
  "key14": "5dtcUcqYXFYvEokMRWTevQKJuazEmZV96krEL1JqZUtB2zG5W1hi82DBr7VJXi2Gupg7VpjVk6bTPSyJaktfAUvh",
  "key15": "3qx1oEgLRfV6yWHGyw4DURP2FMwtbVegSpdupd7cKKFuK5LQHMekExP2TticSFA7F1hq91QKixoBQNMcUC79Ewe6",
  "key16": "3fBG5u7mmT3BNYHLxY9e9XCDJMTJiMtGzkLogZoQTjqmWnb2h2wX1nYPi15uksE7aptKSBibrZhSEiNvvF8KVQvt",
  "key17": "3UGwZjJsUsvCgnAVZX6hLB6DUw1hThPD1Cw9bHdgnjNm3GdYvipGocrZxNA5BaU4GuWmo9gLRcNCx3Sdr6Rt15by",
  "key18": "3KjNLw7azec8P459n1fMZ8sb7Ys81HPE3PnyFbg5vH1KJdSL81esUUaFtRUVmtGJo9dt4TU868MSvuCArcMQenn1",
  "key19": "3URHwkT5pocWAp1Y8h2nkq7rGWSJ48KmYCmeRXA3knQbREZL5DZcRjCAcdEQRhbpymXxUdEPhrRVpk4GQvbAZ8tL",
  "key20": "4k8UprUFMrkbQ14ZdnkxXL6k4SaRkjMXuZWLCiEU4nH2KFmW46w6JuGmARr9Kmr1ceDRPbvLV3tUtvTuR13fwqLQ",
  "key21": "5SKkjcbYb9LQdjv69ic2HxM9b1RkK9gMQeUSQJ3uUZtYGDmLX4i462peLKBTop6tzit3E8S5KwUCpQGtNJsuFpML",
  "key22": "2Pb4b8HU6Wkh6Jc3M1jCX2vHUgPyCHVQcTVid5aPemSmj7riXRU1uWtU2GRDKvGVN57yeh6TrJdG62cYYn6KpM8n",
  "key23": "4XnnXxXFqv6rG8uF1B1QAD4s7k5JucAeiKkxRYAxzgsMPfwL7jM8LHTNskTRLGG7XRveezW5wQJiHi5VNewaDxAL",
  "key24": "4CiDtLZiMsdFM8Aq1nwn6vNFxNJ7RDyMmtVBACTKjAds1HGmC1xqsCk8VMUUKRL59eL2f4p8UzBYahcw66nEPPbr",
  "key25": "xceLLb4vG8kAZmfCU2E9iwAshUc8guDB9pU869c6S2JbHtZuAHzSacrNgo4qUqMfYhSv6xWDqZLsgqunC136L8E",
  "key26": "oTtBpnearDRw82VXLGp6C19FVoykB28E4kgdBLxZYhC6jEqLHDfz9wceMZs26kfQpM7WVLTQ4gMHEukcfgxb6Dj",
  "key27": "M7Pk247yNTJFoV9RZZphbwHeZjqnkWQJ2sFYhQUuj57S54w4tsgZFSNbSKRWocdyiBKsNx7iR3Ci9eJU9LDvgdY",
  "key28": "A5nJ9cWgwuXZsRks3WXuruzUJXFCcE7ByrwFvzd7XF9L8nuN7JMXb2fNG6V4JkPmiZ6HgdjCQmiG1tGsH7DYd2f",
  "key29": "35ynBapoMTpWC6EYaSqNFQEeEhgAeP1tpm4gBTVu7Z884Y41kqpjZht6sEyVerzm5Tf2Jf4vEoRBS3PDYdk9nTbR",
  "key30": "64giRqQVhC2meCMDwSA4KEDbEXGBND9qHFfReH85L9p4wUkrN3QDjJuVCQAuQjbBVciKYWXMfAMH5CDXUUG73Qkx",
  "key31": "3RtTvJjKJyYUPNyWvWyWYiDagBFUdWxGbaww3ZyyQEkgKarCLQDeK4drtgziv8ENzkRxRqyBMhnG3yJpBgmM6LFT",
  "key32": "5t8wYuBSQZvzwg1mn7phNjGEyuKYXSPqj4PXaeLX6hCynRZk9sNJ7AN37XUKkw3SgnfdhWccW6j4vVqqup6Eg2W1",
  "key33": "3zwdPnCvro4kX7KtieLi6ysctjN3DQRCxaLyR176v1LGKxGrBX3vzEbXfBTokAmQtTVBksANgiVMHkEDVctdfeKf",
  "key34": "S75fUZzqaKW9KnxtMB5HUNwW2HKiF7psaxTxNtzGRrDQqxM6V64NJH8hLT6X7zCCra7BWuAXfi6i1CY58WGJkME",
  "key35": "prEKdoFJd7VDvvmwKYuzR3yfEkq3SXP2LTYsRcE2e359L5AaxzQoFuLyCCkYLRAyJ4NdhaQHy5idiUAFXq9XvZp",
  "key36": "5PxWybTXrfw9JnAaxg5WTfSjBtCnE1KUnatH1LSvpj6KkqCC3YfyiozWeJHPxqLPJ1KN1JrNjSgsLCA8toNPhyU3"
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
