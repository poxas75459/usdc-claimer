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
    "4vESpJXV1EvEPCy8WBouV7K5qJ6GU1WSBLp7zEJVkNyza6N8cgJt4VqYC3L11QMEEtFBJ4xr1iCmVdJcUXsuQFhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pZzyrj1QMeSv9RDiLEwVv4Ccv7wx7eaiR8oc6737ugb2yMvkVhAhGGRDW5Pg1dyG9TnitgxY8dGSwFJgmqHsHRb",
  "key1": "5MmfaaBP9oq3fWKrte7NrZjwWWZ2bfojjBdYAQXct2MrrgRiZG39nncnQzFUvDY78j95uuQUyQM9BrMvf3aJNfov",
  "key2": "3PzpUHda8carWB6cZ1DuPB4MyW7i85A7CMD4NiqAwrKszLPBmjT4PqqN2er6RXTHE323KMpQ6Ng1TE3oM3tSRkWX",
  "key3": "49NP5kzLxw1zjq3fofj9FTGqcgVAgaY1Jb3p12rUbzi3aT8DrrhmEfGoSAoy16k9YzAPQ86Bgw6gHtKZo1e28ufW",
  "key4": "5qaTztFooHLnffh5cUTDpJhK8Rfm6eVE1f7AyTuMgGqyRoi45R7833KPdyFUykjTJxseBuENA98PSPjPJrLxFQH4",
  "key5": "26vkeYW3d4sFCvnCWLgEpJ1Ai86iLu2oYiZy3jZmrDgz3UxL7xmx1VCYkyFAmZWueip4AXtUsE8vmY7k8bAhtqnp",
  "key6": "48efm5pPmKS9CYm3NKNXeDaZixsinY9fxMNJg4Siy7hiQdeezJ2ciGAp1TBRe2uZKAnEGnrPaLvDQEagxUo8fGoZ",
  "key7": "4xEjXvFgbTymfYeqPYgS5cWzycqiYCfApD8Zvkzkmq9DQDUtNw2CFaUfPJGoQVCM1hhDGs4fMfvjfaaXWCZhJ6Sy",
  "key8": "4gPthRBMW8P4VyoHyMcDVYEMo8xEXKTjV1rYwJ8hJXM2A9AZVwtSQ6cSa4LaUQPtLEZXrBKYCsPZhUrgGnM2sVfa",
  "key9": "5zJquEwF52MguLTyM9EJ3ipBRuYeaskBBt7rCLzX5V1J3JAKB78xJ4v8nt8v938SsE3E49BsdTvVWjLj2gvPBVkP",
  "key10": "2RYFvcuxUQZQEwWryp4CA5fFWVdmZ8hecGLxP7MQ5bjphTnB4LfKrnLua25sgxShuAJRjC3QzWy7HCrDkhVEBZJS",
  "key11": "4eRvkgjY5p5evpqqqTS9RpZJk1PHTXwAnr2snZrakgSJL9RG6fMLwtgT2XoLHdVRxLm569TvJfpcWsNKtX9uQ7qu",
  "key12": "Wpj6Q5NjHeLbdV8BFX1XjRURRPU6mNDBNHhf7jY6kn1bSPdFcRU973cN8NrbxuxXUuqJavV8jfov7ca3Eekt7vg",
  "key13": "5VskSJVsWv7NtNtrgzhQKCHaNZGx1DKKtAhzfLiKZbTe164M3C3U5UUViJAvGmQxVhouB6KEhPx37Q6zpksaF73H",
  "key14": "5dvduHUxQN8hKto1AhZ9HYJWWP7cGZJ8bqzdFodBEmbF3pKqbU29nLjVdZy354HZwcYuouUPKxbbRgeGacXSp4Xq",
  "key15": "JkkTdmcjtZMVvK1hXf8L2A5KN7zmKSnxAESfnfoMJtxq5JdgAE5T63k5H8s7EGzGe5LFy47Mzf62XmqrSLbUrow",
  "key16": "4bmvAMhWu827YoaTRZiHxnJhhkiQZYrgbgbcEid1Ro14BhPTLmYSpcMUFsJkht6k6e9uRzhpTHqaWkcrq5LgtFjm",
  "key17": "rjDG6h7Qfd3whxQotUhWxLfDGC4Gu1n5ySuRA5eq2kYjVMVWPSLcaCzgzNm9gY99EHmMgKgy2WKPSb7KUv55f9o",
  "key18": "3YvvGqb3hwnqnCjb2sca12Qyi11SUKHeJYrK86gyzR5pAyb1SP7sbtgwfKpY3Vk6DbiLpWVgQzM9RmWRXENnpXc1",
  "key19": "2SS6k63KX5kneDVCpZ7CmSsVmwmedZ1anpFoSKHZfZ4gqrNYBRRGsGmHSCZHr4LqSVrsDo964jVc3fwRDYeGT2a",
  "key20": "38JRq6rNBnnDGiGjvJh26wDrFrNfzbVdKLFn2fLWPKYHUCyNHCCMpkK2NGcCck9BDBRnjobPf4MDsE3yiimeExi1",
  "key21": "5zytsBNc2H5d3j4s3ddBXQiVUH392sk9VQVM1XMzLvFGYT5dPzn6DJy4TkoZEXKvvVmJkHW6iXMV55CUQ9SeYXLN",
  "key22": "65URw1ykTpjrtTcaguBM4VQjRFriFYqz5DQKA8J8ougbr5tJm3r2p7n9XnCLBYSfd9eK4edACnrdpgySk7rztbLq",
  "key23": "4yow4TpY5GJooHyiwch6nFHEXwWAfqPxJQcqP3HFZyYaSDstZjHLD5WE94HhayhRTRC3SKy8k1EgAhVHwhRx4XrS",
  "key24": "4wpwabgxxJvL6czB5J9jV1eWt6fpw3rEUhLx9xx9DrjdT1nu5z3pn62ar1zj1jvt1TTBJgdouv9y92y5HrvQbVRA",
  "key25": "3LsZPJFSkgLVAo1zu7RbQfuxMhjwvMTsyYkysvXwJTNia4xo6zUnigRV2wenX4w3atV58CUKFdbHc7fX2ZQrnx1n",
  "key26": "3KyNjQBiYGUVH2r1U5WqjbWvizAKzZ7mzoWtpotziVnWWhdfe5UpKdpyQeMpQLUbHTHwDesPq8qsEuxh8HRJC7w7",
  "key27": "qw6sjEvS8h5Hz2rte59NfjyUKAqR9N9Ah1ys7NVBsBgD25fSKWTdhAC5zrMKN8zYt7GeHSxKxF2VQEzg8xaFEBQ",
  "key28": "3FTRLVV2DFks5LGqPoco8BUXb6ek27PrpPupUHeuAqQSCZyGowbBunHXdbrZkGwk41GpQNiHXjD9XhtqvwTTEKbM",
  "key29": "encQK8wxgLubhsZyt3RjRreor7oRjDsk1W29fZvjMnpbnsyQNDbRbXzPz44188gfBa8naZYhd4nmXBRZBFNLxSY",
  "key30": "2Bvfuvy54UybhAP8uzUQFPjLPcDJRt4FTdBPKAjmxmVjwoGHbt29DMjiFUuQcCYQmsbMbJLtfjuUdCHCLi5RSKmt",
  "key31": "2xsghhqWCVsAoXgUn3khD93AGYVmXefwRVD3wDFNRoaj8zE8soBTVecFSFqYQMccyQB9YWYjVB7uWffd4ubqpxN8",
  "key32": "5xkYE15EprNf9hsUt4KQZosa77hFQV42EzU2BnwVBgLxZ1VZgzNB6qBFg28q13ZYU5YuT1Te3RLmriuDHCgnuzik",
  "key33": "VJSZDv6ch7RiYXGexKhTfYKhe2c9vPaDHEYpiYnUZZjfbRFfxMQ8qtGjT1Qmk8smvYkiBZ96FsYE8drJ9vdbtSK",
  "key34": "3ReuZCrjaeFcSAuKrkybgHWtSzdM4gwkXJWjvR9hH796uyLRoVBiDmZbwkhigodvs5V6imsgWmzBQdm52zNekRzG",
  "key35": "457ikojD15e8ECvRgusmmh2vXvieyjacVVXoKRryt3E5NVeo9H6fw7KdXiKczKzASDeZbkm53CvbQ53p3jkwrNp8",
  "key36": "4msTVFbrhXfHqemPuFbxcsUUuV4kQULLKLcnbUW8C3BeAucoMPz5piMHosErRvc1GRvqtSQ1wyyCvq14bJy4zg4s",
  "key37": "4rRPop4Bpozg6ARLqHoSkNdJm46KJwEEwJHn3fNDvhtjHgq3r87RDFPRfNogXF8ww1ta4yXJ8tfiweSfvjsQka8Y",
  "key38": "24rxatQniFWF36QEJgXxavVYtAT8UofULCiDxzGEHGdAoRCMDosTKP4m8vekh954wcG3DJwCFpnL3ofzGDDbaVS3",
  "key39": "5tpjQo2ikC5J5tr5Rz5svQNimAUjZMv3Cc7Zs7s2viUKecwj3KaBkfRCy1kyfW1wiMbA5uiMBNH6uvnZHF8UWkWi",
  "key40": "3tFMpxLsUE5XBFt9gUFmviXLTzg469cKAY5r1ULY3nCGrhQWoSqAPisx6c74mw4otr5EAVuEivEDe4tYi1BwDw2x",
  "key41": "x4XWeS317XcsEysUw4cyybiF7dxsRmhhV2e3DKJFcoUzhYysmitkcZDptTZvxeWZ3oMz2KCUS5FRdnUS1Z1C3qi",
  "key42": "pYkXD3xCwRcFTpvBnTnu7GGXf9Y4UMXMqoFwdmw7tdsMRhfStApNDqYygaw8qS71MuXA5mMWoUn8GfmBMrc6PAK"
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
