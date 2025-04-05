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
    "5WeeUmet75vkH7bNT3ymYkEAyU9kpbLg6P8orNEWLuvgfoWVcxsJNApQouSvyrXkRsEcDeUPqrxmwgAbHoYKHsvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qYs8cWjLcG28YYjvKQm5RmBPxCUFspWR7hpW2DWRSYxQJBkHvZRbXjuM4jiqgpJHiDvQgNFy6iCndhBUGLWhnpB",
  "key1": "5gKmap7Ti9VeSdygjGt3g8mFuBeK36MaCrcytSL6StQ4Cau26tyovYx35VLYdZG8AZxxx2fiM6aMbr6c6BLGM7wx",
  "key2": "25ACEbWF3A2hdswfKdccGM8K1qnjjupoUxNv5MtowMTHPCx12oC5neb6y4QhtG7Ta5kL6B63dMUkYkrEtiFPH5Xg",
  "key3": "4BLxUymJjSQGAu7MAt7rP9jf4k7qpZ7iUEBWreGUyvbwUeps1ekjwSRwPGSX8y6vGC8TVcfXe3vrSu2xF7tt3Rcd",
  "key4": "4uubTRUUuZwHGh3oMvhoaLeZBvkJZUMoueafoV1Gr2V84DkfaNFRu1gATFsWBQMPz85VHYbtMnMm27i2rHAT4ru2",
  "key5": "57K7QsWLv364u9bRhZvERpTE1xe99RYFgsPf3CoJho33mZz1rkph3tcjNXKv396daKDAXDd7e6JXiS5p2yGRjsnr",
  "key6": "4YU2CG5iRjhCfqDVhXfuw8zPMvwwtgB34CEtmp2Yx836VopRh8xv7d3bzZ7c5sjjQPG1iisbMtsGZz3NTGHLRv26",
  "key7": "5TZ5GXSyfRWouSd2mXQjM65VVqTXUWbsgic5FJbkN8Uwvphh5Jj6ZzvTniUefkbP18qjJQ1Rwu4on9sNWWMEz4rR",
  "key8": "3JPMS6bCvS96kotqqPy88zNMHFoqDMk93rbi7UDnM9mFHFxifaAFTq11tSvaqgwmoi2d6xxv1NVtNteCnPkGxKWr",
  "key9": "2BG49Lq7qiQ7L9kZLrx6jcDybndLa6t4fzUxBGHfW8GwfuV3WqdhV3u2XzxikqPS4biWVzszKgm33gcaxNQTxq9n",
  "key10": "2R2JzpiHqADrT9mEj5Jfj5iC8NSv3gyRnwEFmDP6XYqX3oQK2Hh2te9dM8B5u7UDrBRjz1SrJKofq9jR4HXfpbDw",
  "key11": "3aaZY7Rn5tZNK3AUtHPePrFi5LwbKYWW6FU1E9DY1EcK7RByWzAyvvVvRP7puEVSdjXFJB4rmUC3ExKPyj6kTyUG",
  "key12": "3ymder6Vsyh6gGo2MRaJrRkrqREVGwfNd9PjYWd88EUrUFjQbYmLgSFjySsvhLHtc8qotk9UVRBac1QunssdUzxE",
  "key13": "4z7K4yHpjwqz3hQxFKPaJxyXyZ2bY7JWZ38wn4xeog1cEQPgBavVJHk8srbd8fJuGV4v5KCRoHmEhWySHuR84Hai",
  "key14": "3UDxZMzPxtABdtaQQReVaadh7AuUR9H6REeRojgcbtj3KCrYpRMj8ny2KWdQaYkSVMVkwxtDJ8FBzEm8DXsogmFr",
  "key15": "b7wZsQSSMbBvKaYcUo9TyQUKRx3fj8FhS5wdaHbkbB2ERuF9swwoNK1yvSzB1URHJeAt9jSJJYe9LYV8SY7ozqm",
  "key16": "QAL7uhxZb3MULW1rPMPaBh2m3fM3dgKyV85iPHmza8BMhDQhCn5zw2whFrcJPGLLVyZ2hwEcMSaRSQABWu89Ju7",
  "key17": "49Pr4bGjdsydZS5AXQW8gk9kEA4PA9NiZh6dB71YwNj1sdosVvYR6W85PwaRKnpxncec3wFmj1StzqyJMSp64q3J",
  "key18": "5FxpGNY3zqyRfx86sRLqFchuWdqoyeavPuYQzbXnXUuiyACbtSKQwWUq5VpPTmHbQQ7nZHiVrwuPKHQ9F82fYuet",
  "key19": "5tDYdDnxTYjgGiVvnnBU8HrSk2wBEiCQXZk1MmF5YfuQB6k4V26WQwNDrF69E9JJmsPfJpKtRhf74Gg29cfZiXwf",
  "key20": "azcGvXYxmeJwQaPFP7sbWeX2bVVQtBLjg1tfhVZt8tfEh19bhBf6w8tJcD1iBMe27AZo1pdL4znPj73udg5g3ED",
  "key21": "4EccinDzSUcQmfwyDAv5rPgAeYBwjeHEAvomPozrCvLQU7bMRDGGdJdbAXzSwQJ2BrfWSTFWXBPB3ixbTKNUUuC6",
  "key22": "6nKU7FMrWf7RzWje4uUgXq1aLJMAZGcngBj63QpKbVZRgA51NuA15HdQcQtZXYXYoPPrVFXKmpEfzPPYiRUqUJn",
  "key23": "2DrDiiGh3jBPKMadZBGWuUgvA1KPquEQ6goKdkaGWeoampoArZEpTob28ZfiEAFps5Ezxj4f4HT8jyDswXeHHCsB",
  "key24": "25KGqxsZC71DPUaFiXxLfpLpbmwUXzheaMTkzJZ5JXwgyZvgUhGFvcMJRBd9aRhnZeoPy2PUWcyfTePPSfrpZEMW",
  "key25": "5egtjDRubSZ4uweB6ZUgWoAv3hyLrKbX9jt4EfViyaobszeRNyss3eUrwgRACW5Pwz4sxWZmDTzN5riFQnqZTuRD",
  "key26": "5s7NVjutJm27wDXfMJBSRU9XcL4x3s5g95ipeRNrNdAx7RzCiQTucWrV6biufTeFx8J42kY62An7bteXEf43RNzu",
  "key27": "1DnHN2dz9kd3n718Z15it5xaTPHyErGkpXB5TgMX2uCczRHoMgB4vgTz3h5rR7QFVYpTqWdx1tYhPcEAACF4bgt",
  "key28": "42pirc5zAy7E5FBETnveYSAFEevxB2BLVUKgDpc6ATJQoW89a37FnV8QDerGST8u892EGcypzZtNWkHprj2VDGSi",
  "key29": "5Lj8p8LKDuzVApADx5PuSgaF8YWPTiNuUfpd93oSX2n2Fs9FyX2TCLUQMNi6cp5cdU5xYPuPsKyGhuqybarmrSoM"
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
