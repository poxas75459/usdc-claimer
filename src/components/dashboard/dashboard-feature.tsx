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
    "3FZ44XRXaDxNeRYgKi7bwppgtjEA3BDWAhgnDefH3eJDY7BhhZXQeVV9uSDeuCapU3CnZ3EtGv8dvzpc5vqWGqp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TCZd9GaSjdxrnraDpMWDuEFu2XGedQGQJa4VNGDhp8fyoFiZdV3WiyNDBBeP9SGqwkqvDcHruBVLCCqL6sYREAb",
  "key1": "5VxuAcj8ux3tj6AwjoaFy5LwLki3kUz9SQx6s28u4oQBPVTfoPo3KWGJTqhPsFbkERbeMsFES6hbdbJtRaQbVzLB",
  "key2": "558GQ1wACuu42Gw6aooiWqjaG9vLqtdjbPEUPwbyTvMNYzLpNUmSzJzjNoxGXujn2MNc8RBfzG3EvpsAXzYcC329",
  "key3": "9FvkT25qcVTLBv8RcvRv4tmfdJz4bJG5pxCpCcQ5WnVMZyjmGtS3CbTA1rzvX6FUVFf1v9dTvogzDWsP8Zt9TuU",
  "key4": "2aTwR9tM61pL15JmbSzSgV7VKakEz2vctFKSzxXoeQCiK362cZ4hAr5o3UaPtwPbS8LxWUoVjSuXhmNbApDFf9vR",
  "key5": "5H3ifzknf8neSADXQgYbZNhc7isdZg7iE9TMszGxMyeURiz5zWADXrUiFZGuhcUNiquktGwVjk92zzNhhsvSpk8h",
  "key6": "5vDjDyjrtdmD3C1CiJRSP2ox9AHvXpBPFHhvWAtRNDSqdtU1emPVeWZc2FqS76MK1j54ho54XnAQknb2pU5SWtXH",
  "key7": "4nbhawHkUG41NNwnfLXsFqf3hsohBjNzMsUMvbTE51xCay1NcejvmBEkoecoouM2xgyCFq9NhPvHPSHCJguQWbmy",
  "key8": "4reZrb9KbvqGsp5ohco27hg6tD8nnsEQEsbDvJNSkNrYzr1Rz1ZrPifQbFNoH4ovLPW4NcidvmyxZqMgbAWUZ2zu",
  "key9": "3pXxoJqdp5NUDWAkA9BSkPypK3B5WmdLZYotCMb6rPjQ3cDJL3t1C5mgLztoo7p1evxmjwj4XyBtUUy4NiLcrWZ8",
  "key10": "31FJcTuwpnmXVX23iXCUP5wVsP7wqnjF68FDwpnNsAccGEpA92uzhNxFNkHx1jkpwJzVUBtz1ViGM65ofi1HqstS",
  "key11": "4TmCBpdS1yNDQuHbFC7iSU6E7HFapSgKj7zyPFtqq28KfsAVU3baosjqwmjBcPuYhcB1EPaxFk4oj7Qua8A5fHcP",
  "key12": "bTfaogaQwUpctCjWio1UKw4XvshtiLAtUGuPmmD7A95Ag2841gFJPz5HoKw86msw8AcZFijK7bSx5n2Q4GtAAk7",
  "key13": "3bYQLrqshHaDTBZEyq6FLSrfwXegH1zQ5W438B2uqxwzBkHBTR4y7uCAnpxan5gVQQUnw6hhGHgvfP3yLTGr9fP7",
  "key14": "4pmpiPysHFA5bbbbZUJkWFhUXER58Jpi9nyuSXfEpkMP3PMYpjPSRtcZD1eBSYoANrtmkWbdACBW9ME889iv1FVW",
  "key15": "4KdxH1AaR7eTnhNnWMFaePeBDTzmTG8q1nxpYruXrHW7K34xf3sdLDAMULPNmbx7w1av6B7GZy5RU3kMUWo9qA5T",
  "key16": "44FiP5kXayawS1v7yboVWTPiBhsVSf9GHpjKdaCrawQ7UR23RFpk8EtH2HkGxP1YA12CuhqgyTB9nUxseax2NyxX",
  "key17": "4dE6bMPpsZ4JThSgrF1LedYyS6DZ9Ftf5MfwQnhKqcKLjLTu3G8dBEqZXSw5uj1HgvZ5JRZsw43UcsEkxrFssBrF",
  "key18": "62xACXuAPqQHZHqmFHu4h5WEVdzFf7Aznh7ziWtgnxkqed4TfNE2CPZ3bfRPteJd55TevNhYX9mBuFyt9jcPRDUe",
  "key19": "3R6Yeip1za7YpicFRi9VYUB8gYDpet6QiJGzTfuHB4Fs9aBNw7LJ16rZmjq7YkSv4hdjqDhaDtiTi1dWNjZFJjxp",
  "key20": "3NVqvAcHhXABnkuvdgsiQvAJRzmpY9uHQurF4wo4YkJpq71dNqkB264uhQpeEnSnqN7TdnP3saLRK1jqTW4AWTje",
  "key21": "4N35d8u7projEH3U5NSvmzj41FsYXgRdbjEYarZLEs4R4ENE7NErKJW4KC9Fr426jsuRGb3YD3tEvA8nsGTUby3k",
  "key22": "MmiVbtEEy4k1a1pk7DQs8QG1NkVpjQe2Q26195s9MLPVkgutnDeNdrQxpSYiRa8cKagfqJKfw18SqnMH6RyQpwo",
  "key23": "2rkHcAhCAkPQ6WejHCuPA3U4LWB4URrDxfYQ3ntBEnPJZczecBeP4kqHSD6x5z2g8MNtx2RhEQHascb1j8Zt1YKo",
  "key24": "558wUiheuzYLikcEwZXCQMyvu8o2BMxzzdWNDxYUzNsDw7pa2128L568uKsD2azLQCtfaBK6WnUUzfVPya9Q8nzT",
  "key25": "VWrVzUMvRBVJGqoELtxGUcBybweNcJxrL5dg5qbRAEKNvoz9Gd15ECGgwWGLY8kHQ5FGqTTAguJPCwFtR1Bn4Zk",
  "key26": "2DsHbvf8M5uVpJtv9fv2Bf5msDfsecBr3NoNEY8EegePMh81mmUHRzc5g6FAezzfpe7L3UXisnVXfPhECosaWe14",
  "key27": "22KrthwwjmFwmZRpiF9f7AGi2z296yaqMb1ronWmvFyQ1ekfep3Z9Kmzb1WXfZXiFMgSGq3Cw7Ueo6VzWL6TKeox",
  "key28": "PN2q7w4exGw3phvmQ6G9vHCeTLSZU1tmwHf6oejwqRoRGWNPxpR8LiYDwbaGN7F8zCPpNtzzFcFY3B3nHdraW9V",
  "key29": "2h5S4wg94EedkZrgbmUbz3atQDYsfhJx7NZJ4ijsBwezys77Upo6AJn5rhfgh3uitq29bm8aQyFEWJoyW5iwbnRs",
  "key30": "2QQQssdsdy3AVL5mwEB6fmpoqrXN4PKCF1qTVuvrBDgF2vWykpGUb4iz1VK445m7KkK5tLqWquNrrDeunfEL7u2T",
  "key31": "5523fMa5sjZfjsyDqpTKgcQj1i1qr1Baw47hVBVnGxCsTBik1UrriEqucGBboCPiM1mYdWr4W8gmHMxF67gYaUdZ",
  "key32": "2W32kF1XghutrFxPCwXG1eQt8j3regUqmR3U6yQwVCudQcxWGVW235VLyjP6VqNCjFzyHVgJvYBPLaTVKmkYxEEn",
  "key33": "2GBkwGa9DpYvxwbzvFQP7WwKpWkyQw47pWmKR8bYgdr8eyK9iWjxGVBHEaoe212JsMqcHfHx9Fzi3qeeaEAW8Rfp",
  "key34": "3jWDGn9WaVoypH9XS9TieMiZMCNX4WgUmKKQxB6Sx4rLSjP6x1ER4zu2tRvupKRwhfNsspsD86EfKc86CfAuQipk",
  "key35": "NVzNdhWUMcRz6nCKSmqe5NuuuDXVREhFQpZkoYmxjuXW2kRXaddGnQXTwa7gbD5DQmm3NPYnWPcWH67JzqfKuLV",
  "key36": "5yTCWxx65zciBaDiraiCfMWHNDYpD9iC3WkhGjPCLp5s3DJ8fcgUqjG8pvK332HXmS929RwNbicJ1dygsTg4FhYF"
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
