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
    "5kmRjAshkfRB5s6ASoANQ5S6bi4TtzhJRKTz9DQ6sjCafse9WTe7owtyvKJSHdiSTeCBNJhAaQJeeT4ujJzjjhr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64QViQipN4f5WirW9HYzj7vbk7vjuvw55oc9SP8PiccLNg8FzRHbskq75FJYGdBWoQyn34oQxXRFk1twkdeM2tR6",
  "key1": "4CoxvLhbbxfdnz5ts7GXtNj7gj47ESNB7qgxDUctZHmpG3i8Jnsx2fSzXqfa1eoFWnvJVrpyU12VPcLf5NpFrdK6",
  "key2": "4u8PuDhiqjyaXJvkY4kpBhjUa8CP7mNykwdDaxLS63Z7v1R8eLKk4mHkSn7gzoM7BNrGaGSQeqkCSEW2miUyA1Fg",
  "key3": "35BdyefbPJ8TBGPBmXJ4f9PX9ppsPMFrvR4F8VTSTL5ftqrSQ8smtEiZPB35xLvbprNmZYW9aziCgKkz5jdQ2tRr",
  "key4": "tWrJDMa89XY3ZNDDb4UoydxoSF3DFQJiWtPVNWkYvB1mZrybDc5GhK1rjd6c6AyA9DbgNpYTaEBn3jGrQufNa9e",
  "key5": "2wB6qv7geX1AqFxwLAMHQ9dZ7DxWgLoo5abuS8wLd4d1AWscdqwmZH1uEGYq6GqiYMWwnLkt9Zg9eEtszPZDmxJT",
  "key6": "21G3ZMuNmccPoo3ALx2QrsbP7BR6gDTk2XBy1wvrrUcKybG3Und67JPsbCqwfujsry1SNFS6XigPwxboXz7P6Wpa",
  "key7": "4kK1EuhTqA9hfsgPnY3CzwuN7oqj2CvEraUAKq2fGgSKyLWyoYn3o73ppEPKjvXM5y8JRzhErVh1WFnSKiPj4oKF",
  "key8": "6t6UG3w3UdmoKJEyPbSmpKLQXoWab7Ki5uDubyvtPDM9ipKb39jNKCjdbu7bzooKUCoya5ZoXrbqR3Fd8vMY9t9",
  "key9": "54KQKre7SM6PNvobkB8KNHZF2W772kSHENpCPoAku4u84gbQNDsbnnPBTaCKWvY84Rkgbiq3UVTYq8Cx8V38dCBf",
  "key10": "9CoBWk12TuBRDkwEgXSH238A3Y55AH4w27ponZSUtJqjRHNXH3Pvzdw2uxbyqbaspUwNwkqRaVbRycsazXKQvEe",
  "key11": "4s7gDTQw9pFX5R3pW5vhNktvHxC6F6WYZiwNZwS8sMfbiwhymcanLwBBpwZ5HCbGPw1ss7GyxSjeu3DDZLXcRB3F",
  "key12": "54tEP8wFJT8n8iU6f2V2BPYfafA3KqXUXR83ym8H8R5JyrUsnPsERqaQQw2BrxU9EjHy35651bqxj2utRfCs9gZ4",
  "key13": "5JdkEJF7sjARrsvKNWeTFgywX6NNxguX2V8FkVwVzkoR7M1pH6UaZatrc8qzsY4PpvVFkEZNh5odRFoQroXJCbRc",
  "key14": "bunP7PeSVjsV8ERzscZBoyMbBhioTXRDfdu6E8wXc5tJuUJ6QeB2bFYVoLMouiuKgUDz6JLSX9YJAbAoWCxVgGF",
  "key15": "xUwrTTHvDfp4wpyp7hPYk8rVezJGVDhR2yZXNoKW4tWDaasHkKETsLDUVDuZ2esGZJs6dCb81t2sZq9kFxf5aox",
  "key16": "4bZKa4Fea7qS6tuWtkVa7J1ujbL1rBACQ9ipouYfqKtCrz2VDEqWRTZ7y7anWdkUjaNC3S2jN9EWdnUbC9ZZk6Dn",
  "key17": "Sn6GKNHopBaVXY9vcotUB2UoAvR7wL2qd8PKNq7UkfFXEG78uAfWTcwEBimgSDkYPKbkw4WqDTr23CunK7D1v7h",
  "key18": "5yEzU81ejEgeBvesTo8qkfgVdXUfWzHCDbYzQDHgB5mFDnTmPLCNAiMAHbommLa55BKxv9nzv7HAxjFPaYetAyGE",
  "key19": "3XjLHUpgSk1TXnKBxgVuu6vQS2MK3t6rg9vTLxv5D8hBSec9sJRws79dc5US7WWz1JjVsErr5SDbKhZaPr77TF5h",
  "key20": "3AZzd6VNHqyWF2YtAG3n9uUGWffaB5i4UCd2h7Jy3E3MvgJUCmzxfdSJ7o8AnTzRMHaQgk3MyxxuiTE54bSt2Exf",
  "key21": "2d6KPe8SHtfSuUSvScu3fVnnCqnNphw62Wq9Hxzh7veYvCS4MJr8VmPca5M1qRHgR3ymSEwGNgrQdzTnrf6AymJc",
  "key22": "38C1Ey7w2mcs63MsSmoE3T4L3tkdUz81Mx8TXbyvXjUJszSv6Lbx1sx9yaGNZiXB5kM362MJKUiNQ2SCkwuGDCVf",
  "key23": "2tNzgmBMhCCDwmf1vAtVBHTzA5CzmexhBVsDTev1QkZVRczVfAjny9xSrFAxcppm2NMViamAkFfjBWcwF7XxUa8T",
  "key24": "3uvn5P75Pp3NVgPpKcQYGD8U8Uytg22mVCgEG8fkBs2pz7Y91pY8rVjDWDSVUMJv9ioKDfN9PAyfVLCLQN3WSLrB",
  "key25": "4VVDccmv6a9SdEQfZGXgTWZJCTYacrUTMLMcKtn1ML4o6fVz7aHhsgfJzMs6Gh2rGJMHpcrRR2yCCbFh7uUEDJgq",
  "key26": "2LRDnXDFz9YzCTUMah28ENgJJAcVbmJi4rwHrYhmhtNntENg5U3B9BvEaBmwiWQAQsHbNMym4BAGbtuJZ6raqYXP",
  "key27": "34ncHQaEWNns4aJBaqWDUYAPwTJnvKxt4QyQDeTTuHZPPhBaAQ15qvCHdAjiYdBqDXkTLxVeZn8cuVrxGPhCf8ma",
  "key28": "2wnv7E3AmDgAZKHd73bKQ3xWF9N2711CXy3xgFwaGv9KvV3jMT77G3AMjiAbxnGA3eoZUj2QpiM9XNBtRc3eRAWD",
  "key29": "3Udjtb9M3qPuhxeTmyA5vEZ6koa8zYFQi2kigdGTfkKQ7kCHoGQCodtd59DnBgdA11u45GGou6iYwVjLTFh19yxb",
  "key30": "3ZcyEhth2ZynNn3REFHkHRgmt799PJQrwxH1MnEybbaJbJENLHdKzj8W1GjxehJhiR3YpQQAbuG3SCeMEpD5cqmH",
  "key31": "2nxqu6qNXRrdEUcnGy4rYQmnP7z2EMCPG7H7Ti5iNu3ALSq6Svd6gQTyLvgKLrqgkjRb48AdBRsduKdtHiGM1GzL",
  "key32": "4d8iYrVizq64yqBDeNx1jjnXhB13cpJhEo5zt7P8UmyBo6qugcGvDrB5BU5D5bYvGSU1zRP8LcMmtUS8CYZxqUS2",
  "key33": "2RKN4QrNnMtZc6SaLFj78D49NxFgxcwimCtm4TK5Rr1idhaJEhoBwLLRrWtyCgh7dYiBa9jo3aF1Jbc3GrdGieSE",
  "key34": "3rs2seeQnPEzUVvkr8gjquZ7cfWP31PkZKe3f4HnXkAWmUZEuHVZ3UB3b9HdFZWkeAWE1K67K9mMaApxA6bZPWiB",
  "key35": "5MHQ3UsJPwRpAgBeZSKF1oMQhtGApqR44gmKtK1fyVk5LWXvnmgK63aDFwyTiVLPyqS4sLyXJYh9gbQ4YUtsJaG6"
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
