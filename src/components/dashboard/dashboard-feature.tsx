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
    "4t4uGQoid6zrtUcyQdVSChV7MAELXDQV9rYNArB1dxhThiAtHwrvVGSPcVQzLh9fEp2YNKEmuwqwnAQbMnE8v6ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZyCaZHReUS5xY4ZriTh2F6CFtoM91ocBPHj1MBpLETqdfRYXtsTMu99xHGPmq6DwXnZDo6W75Qcb3Dq2gB9K8hp",
  "key1": "48ayUzNZc3cEhksPZRcds78kheQ4qx5yLWZbUcm6pMvv8ymuQ2wczfhQYbExR2URD9wk94AwaYdFhqypbNXaqrji",
  "key2": "2LEgmSYmXsNyN9DpnAx9wKearoViexpcaWaZV2UzVYZDpZrGPD2pc7PwDP9Jxqv2Z6jhSiKG8CZ3t9yEkpXLxNEW",
  "key3": "WJ9YsQ3NA7Faoyq674qm8KKbvGDhTUvivVfUoW7qvWmdxLp5JPVqhkXthVKgbahXE277yuNxGzVuSGhBvvH8qhi",
  "key4": "2XnYFHoKPe8hXX5yuJVjZkhLnBCvV5v7kmMZWPfKtJTii54udfV7DBzQ4JT5GTAQbrPqdDxmtB8ZwP3xozQ1vZsk",
  "key5": "h5omDx1ws2pM5dFXcRb5MHa4Z6mNZsf7KGi3dHVXED6wMRpqCca9BJGTDfUx9zHKkTm9yRoUobTesXcxP4AudrK",
  "key6": "5u7XBwf1viHyZVeSeYTuvr4Drgpzam84Es1e47M2nAfq7k11tdbWaNzzc8jfD9n5MMLpVCtUrAMJtxtB9EZZkkeC",
  "key7": "4Xfh5VqAJzn8i4ZYwftQchR1mKMfHG5Sto6HZ1jE3LVZgRqQWgJXUphMvUriuATmNhoiNd6PwAaddm1vzD6nrLeM",
  "key8": "4FfaT8rRbdyT7dKAUUKxi6QrtoqCMGtVY9d3mGCfUT4psogGnRwuCbHgo2Z57ZYEEioTKmw4A7jVJin4cqq9AZRg",
  "key9": "59BNjqyZ1jg9ue7Z9x5miG1W4V23aw9cHd78Pk8RG2Ft1gbtNzwRSbZnLtmygCUjqned3pLjc1kBAoWEnGHBjLPv",
  "key10": "3cyHMLFhUoRqYWztsfGPCRoa1vo72FPXP8wdP8DYMumEJHcSGp2VcbckErmRNMQFZaEbR6hbwB23ekt82dHJmLyz",
  "key11": "5EKsoTPm9fUFw4zhCU15QRtyvu8Gp73BztCzB1SwaTUXz9tqQzdZxbeveQT4physo3yaBV3eatTRNJfXuXTdfbqq",
  "key12": "3Xp9EMafuYxY4w64Pq6DdTRGQwYeFV8J7oj9K3DB7ixMZZKnK6fykYEFKuETZpyefcaoeGQ7v5DCtktpSw9Ni2Z3",
  "key13": "4TUpxTEj8kGRZyNwe66c6pqWTUFbwQNPsEBUoV4N3r34NhWFm9GftWQVsmA5VRPNX3FfNYAHAhPaUWTaYwFw7JRw",
  "key14": "3K3ohRi2TNSykaMB8ApgcjhcvzthB3D8DwxqHDCoCAbeceiqN35XWS7JiNrYwsY4KfmjzoLCcKEqySKHy8DT1s7y",
  "key15": "46AzMxm3dvZjDgS4tMx3DKs4Uo5BRXiH3tBtYPPvFAJY4g8yZGCwAHruFr7ze8f4stS2MzvfYNgXWEFzm3m63b62",
  "key16": "57ccbJ7PFecZ5yDYAtBsPjs4PrS5jjEV8E5WejB6qtdnaxfKM6TCKXVtj7nSbkdxtVAxzzNzeWStGd9wjWsMZD3g",
  "key17": "5FYs4nbhCUKcWufRE7FsNMFdWTBjVjug1Ue3nYRfQEsWTfucSZvznjtFjxuFWpwFJiniEoiMcNwPd3B6J5UsWjSu",
  "key18": "3fy9gTAHyzujKNuemmwk4NSKeBb2BWkrdVAvUyRaH3KqsaKSQk76oDtuCV3ZU4hCFhicMg9cU1iFgkMB9rh3NMH7",
  "key19": "eaSMM8Q9DYdvtA6NNgSYEHU4D1bxB49cEjryX6DQNhiaSCUDuGRSJ3WTKVgmsVAF2BkoLqDygLEmAjELJepmmF9",
  "key20": "4FRtegRAY5xdzowwwRBGU85SVyTF2kSTLv4Ge8RrLAmGajWSyqffqbjmUTJXfA9Kkv6N9JzQfwYacMJ75scxnJ57",
  "key21": "37wkEsK178er2HZVCRkduQGhrHQddUyZzbXrAzvXXnHRdzEV5LhsJy4iUCjkWZhenP9eZXdeSSTnzJhsEinrAmbG",
  "key22": "3P2a9WHFkYA4dUKrrc8rh5H7qwJDNwEVJD8Gfwt5tt4E1uM26vorExps8goneUkK2B5DsFuHwuCQb9eXFPee2UEw",
  "key23": "3RV1VNbx4Uu46Zq9b2FYMRyPQzQue7ntk4c6fz1cizRxn7kVMpbrxPm3jv5HBmjj7AcAg6F4ni3Nx76RghCXQ73x",
  "key24": "5aSs3QXph4bQkPvugVoL4T2pYdj35Qkryn9Dbq9xwP8kMycGYs838LaFLKAzkHgBNN3bb6ZDXYu2j1wFBma8mWh3",
  "key25": "4JERX1x1NZGAo5vF7Lkbqm8qNiVw3NumMkfr1WVAWWFAthEkZuUvZU3rqZsBiVzntfjEnAFqg1kw6bDZUAVzK2uV",
  "key26": "3qdtMTM9nC2ouzLNTYLJScp2QdZ42kg7ngzwD7kAi62GwDEhKD3t1SnbReX4ViWhNBx8z2gjFD56TH9ENGue3jiE",
  "key27": "fqwg19qPgcmQJ8LhhjbfFhok11qJtGsa1XkqqyMM5sCAA6oTPP2d5xpnEgPNWS4x3jZcX1yFguv7mPYnmkVYSZG",
  "key28": "65GiX5YAGwai4Df3GcTt1Yv71MjvrJ7dF1T3tkygsDz8zy3APVpdYKB42AiqjmmfL5xd9pKFe8RLChuuGRTZGwzJ",
  "key29": "2SuD7urjNTS4xEGB4vvJP8ZCosdFyYBNCxQu6YRy7CPCJA7HDxCTaydLNWeQ7o9GowUWemfJAjW22RQw3r4vZksq",
  "key30": "3oFMp2jGbXnAt1Wd9GDD1vx6Km8n7qMz2W3Yhe2zEswK9ASwTskWKCPX7ZLtFLzvc1W3kReU97aZph3eWcj9gdWC",
  "key31": "4pAQ8QFpjNZeJj3JV9vYb6MpWt4fS1UZX8uZJWGTUAiuHfaW2CkEjpbMPZ5SnAWgd8iLxvUY71mfK9q4M7XPRyq8",
  "key32": "fcEist2EF598v2wqMwWHGew8gsq6iS9Ww4b11ZjzAZej2n4BitfKnme4btDmdZ8jNWi8C54qDSD4S5wX4CRTW8j",
  "key33": "3pAKgEBQHAFJgvWdC1eyXn7MC9MZgDM11EthccW4C4QhkNYiiCQmNjiXbj8ECk2wJSW78hRrEkkzCzruqYusrA52",
  "key34": "3XG6S995rnkeQ15Z9CX1AxzgV2RETVMw6dj1SHartToShpfNDvdngHp7rGmUcmHTph7VeSXfgZdNhW1qFJCTvywb",
  "key35": "6B5GPPzheDwRAGrVfdskqG4U84xytqmvvGa1JxJqpC2YBVuXMKswvq2fnHm2YjVs3R9ckcrY8Re29TgihLEnSdL",
  "key36": "qgbrZAKUC1d8EjeXa9nUAwxEP4a1xzBhPHaJs2ibtfrwH5ZvtybMFkmCmvX1nq8J9FGPhUHCscqCnWrCceCTTTq",
  "key37": "5oDUM7YiFAUpAefEzgHzcQbhC6c3Gwe2dB6VYXNLwUsByW7ZCGrvFpj8ua5KCp2TQDFgGCEDgWPNTSkV2V8a3eb6",
  "key38": "3KhUJwbseXjhR2D9dK9codSs4kx1Sa7mjpzHkJtsNghaDWfTqye3NbHSErE8grojch27JjrSfuUxeaaEevkAXTYh",
  "key39": "xsBBSFpzw6Ki7oF9xZgZF7yyqTm9DDSRCitBgnjPdktLr8JFwtVN5UzMuc7JHcVmnSjM7p7H1xqiGQ1jCjqkZu5",
  "key40": "5A72i6c7Lu81Etw2yQkWQFAsEgbYCCV9RnE6dD24Rf6rL8TCw3TN7jfmY3XupKY7FbP9vvd68N2EjGQfK76j3LfB",
  "key41": "4S3zf4kSbAc4TU7XePAUjnj9VPhNXHE1Qs3VtVZKdkmN8hMgqaSVJ42jq9X58ifPni74mbEttScq3F6vS1j4KiVF",
  "key42": "5Moh5XYVEqWmMcfZduVpQZ9UvsnntcwPeC9VjfXeeeT9qHLkq6NReNLdB1meAMYwj31BcrdKeZtLTiM4KHQ4smGV",
  "key43": "4hWWFZEHYNXkudtz6WY1GrzEvaVmDGbsRWh3kPjLewy99okmTB5GCU4Z8pguwMq8LWGZH4wV5wz2rsbezun92EB",
  "key44": "4xKiMkonejtGYU9B3mM5xv3QmPHhAdMdTMVWofoMGnA9q7MmAxBNrreqy5VXbzfdBBU2EY8UsN8mXPx9G4EqeupT",
  "key45": "steSpeUNwJQqm7PcYqnFcYMK4mkBHC6Tu2AB9JqJhxWZKrjXFRbxEKQFNG8R1d3KoJ3N5xoTTfN4Lm1V4g2WhK2",
  "key46": "5WrhfgHsyuPshZTpVtw3w2WqNZwKgY9xBBYVWMeokDi6HnPzQT6nYc3QayLULp6kh5FrbvC2BXQGiwpFKFn3MnwU",
  "key47": "5amtMruznmv3iF8U7srZLb1pU7mYy6TPM8uooJZE5Bpccx6fqdzSiYdFGbNJhrz8kmGVsKujV8NSmM7paPuyKW3d",
  "key48": "3KNJwwded3V8hYWaFSWa5PTFJYpfQyGbDimPES1Ua9eM3dy8ZMgVru1qhxP6mptGXo59ZRFLnUSqmBQTwUa4rG7",
  "key49": "vgxNjm62gsxQfv3wZmFwcrST67xP6VdeDMVLGpREFumZaQPSGWgTdj8GfCvjheUGUAyeS5niHG1dPsy7NTESA3k"
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
