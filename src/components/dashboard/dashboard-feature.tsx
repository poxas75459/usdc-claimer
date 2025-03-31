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
    "26K6mA4TrdXigTm2VoYS3Per16PwJAkFsUjZchTvuBgaD5mJSyrdGQ4z8KwgUeA6v8MmvXRLCfRJxM8oDDHEL2gX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wR4AHoDHP3rkqa3nTzV3hMVqK4uvzLvj6scXMBkakBQa7wu3TguGt2BRne8kPmqiKTmPWgq6SqDHcg2YFJVZND9",
  "key1": "CrJtyD1iwMMMcqVEktFkKDiimdaRtTW27TJuV2BbwBkA98trSZBDqhNh3pTJFF1EE9sPhzATYLCRoVwVf8zujpk",
  "key2": "5yovWCkrCKkrkCGj9n6fzpHfc4yS6eEV96zBgZTZJkLnEKEq1kbz6me8Y67opr81kY4ajLtRwnK4KUkAqLExHE8M",
  "key3": "goL7fHkxiXYaz9nJ7Bmdjto47bhD3ddU8Qi484qeu59KtQYummsaF4Lhy5duS76S7Tpw6vzBP4gQNavx9qTJAzD",
  "key4": "3gQdHzbPmdqFWM6pD1X3WXyJJVHnrQo3RvSQBMsMJFcb335pB9xhY1iQcHt4ugM98eBjomsggafGgmEt2qWTMGtw",
  "key5": "4vqf3qganTjhVG4k9cKGAeNo7JQ9WhqbeZkUg2f81AauhimvEDsAKG8NpRe7W1pwqRjcNkH3amWHK5XkxjDRiGt",
  "key6": "3qvNcjhX7vdWpGW7GjtiaZzbQsVoAnzShwAkpJAqemjbycHyK9JRQK7nNAEn65434ZhvzwFBLavHeu5iXK1dN7zJ",
  "key7": "3kXFcFYRNMkCqWpa8Jkzfz2BiVv29ZVdiTc5vhiJ1h1QY9y3imM2KXhiemtE2fj9suQrZcRLkMrJpKkwBHBEECF9",
  "key8": "5RR1AMPDdDYZgLLEk5wMhQGReNuQ4nVyJh2tQiEYZzjApXEFnBnM8hvfBSt6iWzFsKZ5NMLbG9U77HcRHae78KVo",
  "key9": "3vry42sqNbE5Ku15nZnmAnrBgWsgrHFPiF6kY8LtQowAdVqxaCFuXw6tr3wXPn4zpnAcB9mRg7vjYPwVaz7CHayZ",
  "key10": "3m5GznUQrec34fuX2QLRBqiN5YTQkoiKMiSwPU1rerTpsGcmUs1DEjnud6zd72BRkuUiNAYFjWUNEis3Lpb6fN11",
  "key11": "4a4P3xUEtNh7tq3yUg2xLHBLCrDnNz2HxcNoZHj7JNYQ4ZhWjHZ11ckef9eJExqKdQFZ4s5BXpRiBgn2QDocETp1",
  "key12": "47iT8XnwqQ9BtAcs3DepxdraoRmTzpW7iqb1c9N5E9a2JE2sbSiNuBZ8ZgNduXPdM6h4PVqNZjssQoz85sNMzowu",
  "key13": "49g19SzGihKfvaGB9dA1G5dq3ngRVirf3R25BJssAPaseU7cZ3ksE8tEQVnC6aBEtNhnD4eVYGPfWQXnW4gW9vMd",
  "key14": "2LXrGKr7B6Eb7hvS3XxrHRhnvTiPRvtLzitqEpXudbA6b9EFLCD5mcMERy18iZ7yDdNriViPa3fDjfWJxt62yCjb",
  "key15": "gvYgNeMonsUWVo4Xa8fSUWa1Fix5kJjrva3BAwKGa4Nhhm3eai69zm7jupBKvvekdPkhxUeKuLAk1jaDZEFEzYK",
  "key16": "45PmW2q3URx2R32sW59xFTzUkNPTc2XSr1HXoGiBLjF9mQCXQtWi29BhcbLccayxsJdUzZzPcjKqTwgGtNTrsjNq",
  "key17": "3D8Sa2JHzns4yQPZrYALqvxXjyjjPuPihRvsgWwMyWiQhxRWhzf8FoXc5tcCES72a4BYVhsctUy5A5At2mbXRx6F",
  "key18": "5tsa7iKRMCC3zsPNVahYxgzoYhapq959oeGPXP5x1qckoeDnG7H7c8mWj6fe7yHg3G4QonzY4QnFSqsqZmcdrdzM",
  "key19": "5f135f9obCjSNdEvoWDgs7MqjKbgmcKuTTp9vqj7VLeg3wqiJJVyMH5W6DS4Tom1y7hMSTP8miChJhZGacjV7sa7",
  "key20": "47peWuoJr7E341ojkfyDZm4ypx2wxxCVVDJwoginkQehENpemQidGmsGeAiTc6yn5e9XTUXK9rPY5SVDp4Yf57DE",
  "key21": "RdzRz8bx9bf5fuLxdjP14NFUtu8k9zMaAXUTxWSZWQNVCwhefqBo7Mqdhk7mggN4wxJaxMkaXz4sdDEwhc28x8J",
  "key22": "2rBVqaww1X45VwYwUisQj7euQ9L3iX2mXHDDx9jWJtAzKMtXHGi4XsHkzTtv4BD5GKMtYtkLsN8evS9WnRDJHeRx",
  "key23": "36qf539cnGZMjcrGpctDSAFzrk2swyaUiXus6BChAbD7FugBmmboTSzeG8uQ3bbAhGq7ngQktieoLJ2cwx5LBjs8",
  "key24": "3WYEDk8seESEEPACkgjq4yh1v4TWBzGSDDJRfX9N4ZbCnGAxkxUepADfLwnTnewygJyYDK9TL2X1NeX3dtUhUGg2",
  "key25": "55nq1V6swie6NjbfR3gU2mSULEE82tjxChrXBFXKqpSqDk1NBc2FNE6ZxCWpquvxmm8fKSNUJBLjqGYUndojchzG",
  "key26": "3MxPpXfswKm7nQisu9dzWa7X9LMhmMBwJrMKZq7xekW4BraCk1zrh7ByZGnbvXfqr5z7k2vkCbzNCmBQxVDfmhpt",
  "key27": "3pNH8DVMCQ84aAV2X1cMNBfysxkvFGDGq4a7DD76birgKpNasRHkSzt5ysJtkJj4mWPjMe3F1UBNCnU1obTh8YJt",
  "key28": "68HtBdCb7gzqUgaGWiwSa1ZH4XwtySgBB9kSqifqgLrKfCrGHjStWLQY26QbhdDWbufGdr3a5ruwsRhW3EgnVrU",
  "key29": "4iMy7GqM2gzmqNy9ubpQFtbjQ8H4LuiZuVe7faQkEx5ykEkuUkiiHpD6ZuhFNNzsqNafYkJcvMdB8tNqa1sy5nCK",
  "key30": "4hKCXA2kRcQujQ4gHb5Jutd1LuX5P4nZgHg2cNqWVgEZNKe9CMXZZc258tRXPoHfDBhH7fnVy3LwyUPXJi62Ccry",
  "key31": "3pXy7YdUNfXZdtZH9S4M1yPifJHPEVvyKErBeRYo33orGZM9w6F2NP2z38RFWLv1vw51nj79PL6xhUqg3osAzyhz",
  "key32": "2MiYXd8ECXaC3zTxZ6oBx6fvngj9NPD7PzJ5YbKgxKGxFCUHaxYnzjfh1gNkmdc6AbqMy2NuHbyeytNo1S8z4X6o",
  "key33": "2tscPgMZRVfLzQ8WEi1QqKhGRjncPV5BHjxuaVrBbkNMMtvUZc1DxeKaKWX4EfCm5CsbpjygM3h4MsQTQDoAYdK",
  "key34": "3rsM6kwtMGBLLq1KjczhvPUkrqj3EnU7mtEYQmQkozqUUghi8qeniJRHp1vwCWAtzCTtaQfhPM7vdDh2prxYc8e1",
  "key35": "4NQ1miU4HK9R5mqc2wKk8UjroMiUVU1cK4jNCjKf2Bd2H8f3b2CYB5SAMEgT1rG3PvwFhDhgDHaKP6LjUZegZtTQ",
  "key36": "4Lbyr4v7QZwSCb1rnbFyFLfD4C5TnKVHJ3b9DCkVFDkfh9c7dfCtt2dnaZpEzEkTNZatz2RJLt45VruvZwHcf84W",
  "key37": "4CdaP28n3QjUseteGd69F1pkBCEE4sLpgrw3HUumKRpbHj5bJM4HyqkQB5Qbz1h43gaStB35cWeGHAu2YJY4qYCn"
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
