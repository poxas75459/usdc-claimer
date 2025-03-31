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
    "2GTydFcyzQkh1bZPAZV1ApfvkL9x1s3YkDmwEHm36doFN4T2MQayTmNdui5JuLQpajvygeMWjznuhoTfxHovAiPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3heAZ2yXEGv6MehUTAVWaH7TbMnrqbke2ztj6f22BXvwRzWQK92d2s7tnaHXbd9txU9spbdGetGkaG1FGbm7xnev",
  "key1": "4sQMRMpJrRfPEm1MHUBCxKSRQuBD31CynpxFpjxSP6zEoYCStzttuNEWr9Fvo67irYz5Kny1qmWSqXR1FmC19tqK",
  "key2": "5jzeDJz7JoGotcVwihjhDBV32dVKsy5sr6WKWBV98LbNXx4npMbnGjHHDCBLnujg2vLaJ5ZWkYDmkrVsZt5zPG6x",
  "key3": "36bNtTESajTYWWqxboPQxKFpUMG9KuUi5f5RHy9FtQcCzAdXf96doQaqhwXhshLj6avfFZwZBDXGPZ1JnyxsEbaF",
  "key4": "LNXVoYBswoafZJj4zjFgZm8KhJtiunPWD1bgbkFTQfcE4zkqpG9L9YV4Qda9LMcGowNCjnm1U1KWWkCu3LnCDsy",
  "key5": "36KhmbnC17XuymZAvFEakwLs6pXh3XW2kbpGPoeZwU8ZtMPpVHdBuWtjeXyzsA6kyKJYv3BWT5CvTPy6fjTeiQtp",
  "key6": "55eUpXibF1sNdUYjaPg4tJhCZPFwA2zUBCqJHMmx8NNekaow93RhPemstXszzrRMRwHyHa5htcP4rrJVQdcBRom1",
  "key7": "JUApSD5FRM3sy4RUUt2KYjmRQvah3qhLTnRFqhDsmSmuuoFTgpPpZCuBrxYTCz6H1NFhwDygY8Hepuvg37Meyef",
  "key8": "4X2pHfcbXz9xYk2B5PHReoVXbHMvNCtrA8An9DqiELcwttZA9wGmpQ3q5tYvUq2KCBMpqfwmfruRB4LHybfPKdbW",
  "key9": "5CU6wJBN8BVJbcKT1ukAgwFzhkgGtLFZN5dMqQYPJXWLHiAdVnPZwnvuzvjDPiHUYoBfeSpWBMeZibHb6xPFYLDK",
  "key10": "bi34rF1PdCjyV6nudgCQTwmZBCRZJyE6N2PDJFyBNg6gckPfCoJ1j8ys451eVDKz7FD5cDH1DtmjUMnAcbRRzoq",
  "key11": "3noVYzLEYM51dRMWLzCcTMcTuQY3e9YJCQZ9XhvnHcyL7eP5RwytYfwpeXxajjrPWitvh1qSkEyXfYLpANDiJZZW",
  "key12": "3VZYVQuMGGMXaZ2w5zWmjC6SnzfAP61CbxWfYQkcPRX1eB3gSKYaKoKtZEmAD7nW7weEFguWAqpxQL1WUGCvU7tm",
  "key13": "3tEKQVvLVLDujZFv6p1DcbZBhhJj5RYFpdvsADiHXKtqp2ya6Yq5D2QjvDgW3BzugLQSAH4Baf8cCQdKVudNKWLs",
  "key14": "3jqdCe2cjQe4U5Sksr7FAFnWzVNfp3EbdgXcjRAndKcQq6qdACSBKbMHpKFhU3CM8PMfWCVk4axjZkNGqcWr9jeT",
  "key15": "5YapqtSbEo32gwN8iE8qzsvxFEszsUqXsn6KacJt3QqahHCo5TKe5oZJSJkq62TABCi9LssLYy1J8F5GjyRtcrmt",
  "key16": "4RThsk2qPzuG6VW1BcXdojgCLw9uXbHrDmVqjGkGx5rSdX8KraKaJtsU26MCcB9pvVtRubPs3HncFJKVyvXi4nWb",
  "key17": "ud64FKbjadB1wxJf1GGqE2DxsFV83nSbfGGnRxrD7uWKkQQ8tNU5YixJFNC6Eo3sEQiFBHNC5V2KhpEK9VvQxrF",
  "key18": "ANJxtbe76qPcWXx2WkFdbzKgbAUmfFi9n7K8Lefmziss4y22EdxGwVqT8tK3ydf5fPshsT4Y8hM7GijSqRieqyB",
  "key19": "3cd2bNG6xwaesCBWqqX7gRmjaBJQHxBj4Sj7Jix6AhHauaHNAGinAieMPj7LxoR6D8qiWM6vahdXqUGPeJsHHMr8",
  "key20": "26szvvempBhTmuPGqcckPy4iW8rUCToBY2tc4bMsmkyjzQ7VbUD4P2BEQTYiLKCpQP1ghcf2sjwKWeWrvhKisv2V",
  "key21": "3c6wkLF9Sa3fMwTuyqV6LD7mMtpUfro7pHg6KLfmVPcGDApNwmniYTK1Vci84ggifmiNiA2bjfduHmUX96QNHRZH",
  "key22": "2AU8DcXsPWb5JJDbPmaxHxfYGTRji1yAcH8tMRQ5tLTUxUWZtSqeHgsLBNydtMU9zt3ZcAwUxS41Adx6guMcqGxk",
  "key23": "2FhKDHQ55pS5n5XfsBPkZwPTMJLLVFzTKrvYfL2CQMSbAXdWPyt6tKtyBkvGGNtzr1WbBmtK51QrGdjWjYYYzZis",
  "key24": "4BiURBT6bbr1WJqCY61Ak3f1aZ8UMQWo38v8ugjpTtwvW8uNG8neUcGbEV2TsVx9zAhoqgzuEK2fQ64JRDYK794C",
  "key25": "4RSgvD4A91pBHitzzUvRPFDGqNBQ9oT2mHzkUk9TW6myeMcKEWqCsVP2Jfgpc55gmJDR6Z8XT3prTSX1yURrTc1L",
  "key26": "VU6ZUpHpziwgQg2SQYcNpcpSasfFLKRB3h54FroTkane9dzm511NGwL9ERnhpPevmK2WzHuhntDWc6ovRua3zG1",
  "key27": "4uBQdgrdaZVoYi56X821YFv2CmignM6Kpr7fApfz55M6yCC2MeKBB9RtZhiejwS5g2ownnT26TJtkrqnHVtoYV5j",
  "key28": "3fQ2XHVBuEt93f5HACF8Zuy11APxzg4He28mnYELYj2DsK8iu7PC9JFrNuTioB1M11MNvQhBoMiHZKd71zi4cbvG",
  "key29": "4RayzCvFYULHMENPx7AFPzwZLbWsqjBJsSTBP8Q72x3wjcERkSMmpJrHW82Ga4kRyUZZnNp24iBUjyk1a63Qc4X9",
  "key30": "2ZDWLWUeGZpvgP1wAvZrGFtpSuTk4gWJarWmCxbU4R2UWmbBz3akd5dfaUwVSCN7QrRFvU3wrWq9WGWj4rTuz35w",
  "key31": "4DgHWTJWhKzQbFegEMJu4fcQhtYhq1SJCHTENTKDLSymFyP21HuXsjroYX6xDL4GHNxS4xFFkQmdw5KBdruQq78c",
  "key32": "u7wJf51A6hKK5AuVX1ttsJNG4nqn3wundPcpPxL5xJx1D975XKurnCEs3tTVAEPXSY3iP3evQpQtER5Ckd3qJwy",
  "key33": "4yz4XzExeRm6WUHvaQnTr7vFZJkJQA8ByHRAxYocpgVnfKKvgVPMv8brx1aTrKBUvdhdDzRZy8C4dtFYR1uakv5r",
  "key34": "4czigjoMRjmEuArdqAodu11gXEVsWfCWmJ8XuTCYo8r6ATEtMLn8vGuH9UdqDHbvz5i5xxhrYnUrMmJrBcH8ZAUr",
  "key35": "4xWqqhm3psqHJKBFpTzKFKWPgoVatPEgNuZAF2jZdE6WmMkjqtA5Ded7KqERyCdoYkwGnQTVE9fVjwMHRFjf2KQE",
  "key36": "4iKcx5yjDdhBXG97Nd7DrPmaZFpVkSa6GvXufuvm6J5gZpmL75oQq775rSiaZ3wUoYkCSyHHZzw1PFwL4BarjANo",
  "key37": "2k97GpmyK8Gv76kpnfs1PPW8CRyyVWWxmxLCgA5hBU761YVX8oaNReAoUQcTg3NFGwqx6sgFw2sCFXeXcXof2MLh",
  "key38": "2NC5dJnBKybFqNtnaqxNNshepLpXHbJaD2g7qrp53vs663pFXzCAuPsPwdW5TqUCYBDW1mwNSh3kewUtVkMW92YT"
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
