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
    "rqLddqXag9NJWJ48Q9QNU9AUhfVECy9WG3xMnaWfJWq6iWnrP1i1qErEdGjqLqPyTFVh5hfhrbooxULPPb3fCDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xPGRApJLbbjnkhjGAozR1cnYJQ4CH9VK6Vi6a972EZA7soD8wCHcVxpbGhWAHA5XzNgLshonaHFSc1iV2RJSGtH",
  "key1": "3LKfqLEdFtvPshrdTQLjmCEuetwpC2X8kc6JxCqLrxFnnjbD8M2ojEGyToAgVRvmKNRXPpN5gMGqshqcfbeDzqK4",
  "key2": "51HRs8qsnRmeQAzkoTcFSGpNj1Q7SjCWk865Enxq3A11B7ejhrf7WYy6xD8dUALqvmyHvQ6sSGoAPX93eVhMwjN3",
  "key3": "34Eco75xVsM4agAEWVzKSqnF8eyx7ZruxCFAwknyrzYecYcnsmFHT9BXBr3RfCa7RAt5ogxXZ3sjT1EmLnG8yagA",
  "key4": "4iSLbKCB7hgxkHCmjBVcgPJEz5qCdSjsTz3mW5Ti9EBEWLERnL7Lf1RSSVZKDcjner5hLQ8P83TkZS9koSm6xDWY",
  "key5": "58HoR8WeEVVQ3td6ZbZbFu8pRyRhzLTKCjLEkQvyNJCqugejU1oaAZJYu7HfddiXKpwUZetVJ2pGb4jU95gL3L4w",
  "key6": "44Qan5Dzu7x1LyJi3BWvJXifQx5vuj6Fs8UpTKGLiudAsnb7DGLKq5yKVNs6NeJ7krujnRd9YBzYWoD5pxp2KTgx",
  "key7": "ABDnB8X9BPN8smpRg23eWzaxjq1VCnoS2CaCHtR3yMDupcxakjY4XYBYNx1LvTYX7siUs6mtcNgtZF5GyHYDYHZ",
  "key8": "5tYNYBqTZbeba3Heucs3Q28RAvx8KiDXTopj82EzmTZGxpPF4wYTqBCaoknLGv29cv1RLhu7nRoWqe6YoPRa5qwU",
  "key9": "4w5mrKhzxWX5wa9VRmY8f5dAiNeh6f35V8vKtStFgqCPLGFvyv4yqFCQggrhqW1ipK4HSS91gpzYZAeiwMGk8wGo",
  "key10": "2MyCGx2cCaY1rmVUG5x5i1KYeosQv8xgprg9Y2e23NXLzkwJTJw23NQpK87KaN3pGAMUPfg2QJYbgEuAciBbYkzL",
  "key11": "4fRvya7U9MuQ3CxLktxHGwg8fyNqGkWvxJuDwDEg8b6Y41KQpL8yLFMNwNwSXKGe8c5uP1raxBp1U3HonbTWXwVd",
  "key12": "4Gqdon4aUSVLTwuR4pEqarP9uWWwkmX8Gq3Q23Nrct9VJPmrfVNWx2dexxzosgkaWDXDJh2R11T11PJesRV4ig5K",
  "key13": "4Q32SLRKHhpBjwHJKsNptEJCNMzZQG3SsKDpTrsRMD9w86vPGyAaDFPHYLUiSUbKu5m5i1WWq8Axtyj5wm8BnxQz",
  "key14": "51XnksEWyWRBvkUS1YvJuWz17UfnyJzE9eum7nV8NQ4aME6fRJzWZQctbqpQkFCgb7EPN7VPAvFsXqkY9aZVZxoR",
  "key15": "4bHH2Q6CyCTa38Vv5LByARAhwB6QMKf5HrVK8AHbxs8UT7aDvRsnSSKTXtFjbndVCRG4HeTw1fG8RfJ15RaxoAQF",
  "key16": "37355mnsnx7hpQUTjpGqo6bvzMhhqVz25LWLh8NWv6qy1WJD2K47g9HUsE61R6LZzzZQtGFPPLCLbmEqon5dZJfH",
  "key17": "4bks5uNdUvEswHoJgEtn4Tr6yVnWzh53YWVMYQ59wqgjWc2uA3SVYPb4hr3WpKJRyA1wykJEzUdXYdHSUBCkd19v",
  "key18": "4Qg3s5oiwX2qQKfbrPQiA6HNgvSJL11iAv8W2mjnTYKjka14hPqNwnj61gppNztSC5JrbS7VqgrpLSUavcTPLFw9",
  "key19": "4y4SdrvnVKE7PfcyECb1tKCh7r5J8hmFhEG6eF9f49yA5PMsXdhRA5SYXX2Mnb8sAUgUevfMJ9PZ3r1R2xsuAu3e",
  "key20": "5ttT7Q5eRqFKkF8W2wMwhCTNg9wXtZPT9qsVS3emErqN6rsHeQf1b5xmGLZDGCrKGzuzCXE1oT175dXVv4vFrHaL",
  "key21": "26nrHtrgsWdtuJm2yNNNtBLNgwZm5aTSHcdkZRrH9sMUwSwmZtEMe6Cz2xZEzQ67D8FM7NDAzzneMaBPjR9ikebq",
  "key22": "3NHgGTNfR1K1kb5Vnb3whKZg1TgBKdLMbvXxM1GXJREgS6vzqGnx1HPK3kiQUeUzT6fLLWjyUL6cM6pkXFwqBnrk",
  "key23": "33hxwWsRNcnXkH6GzqHZgFnWprJJxB71CrFHkjTmXXtXXDdx3Uj5L2bb8jHTEu1Uyk6tkQzeozfxeHZGUq9kGo9i",
  "key24": "5KJjEjEqygbGpMNaDxqacfqco4GoTM8P7THAh3ZPBz1gvfkd4pEpSh94YJhuEFvf69JUd9ePCUWqj9RHpuiSjMoC",
  "key25": "36nKLUeDJy7EDUJSMp7CtmuAPRQShovEQSw9CjKDfsmkuh11H4gUqU6Jv1T9CBTnTSWHTnu2a9YTZ1gDQ7ydSMwp",
  "key26": "4BM813BHfYXr6kTvnsnxkHh1XUGR5r9CkBDhPmakM7GrVVzdXQBQdyEefczHVqgNH5YXxJkWRYqjuNg4f85n6MAN",
  "key27": "3WUns4T2HqC28W9cXeLXp6iMbk4cr3hEYo75oCmDixWQHT3dVxNjMYfqPnV9boQAoVfiAdW89d9DwFpms9fP8zCa",
  "key28": "3gd5BG2s1cX7xyjU3Azs2xVjJoPt5GcTbTYGhKrPQCTpy7dhWnzyG8RjVuP1V8kXkCRWDxGVtsi7Q7d2dmQi1cD5",
  "key29": "axmqeKVXMu7461AKPnsBv2NSoScGngumQzYuNHT3pLY3eG4PEdqSDNNEVo8Adb8CS2rSfYK8VqofpcKxB4Hcv7B",
  "key30": "3WQ9FbPKD3HGnTNLPFK7zmA3sXe8aBJpi4vqQ9HLR3TTTuVNDM3TiugfDzWG4SA86SkjKhxsRTBN9N4TFykwfteN",
  "key31": "2TtkGTnsEKqFgE34FtFTrL2DbFQpn5AyC5dj5Mx5eh5V2bjQbJRuqHtGGiwzHju5p8VaVLam5RYAkMgmyhUkrXvq"
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
