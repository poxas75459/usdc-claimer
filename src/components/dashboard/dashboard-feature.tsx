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
    "3ZtpbHZjkYPSfGbA4MuqYRSHtqMGGKH3PFtNvLq1rkFFAnUsZTpSKASjUfRbQdpG7xhDREAEMSa2N9S12yfAocQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6547bSS48cmfo9dJr2LTgTRwEZcz36eX1raapPQbt3t4h21zCkMjx4LXeZjXdYEeMJYthVHnCD1a7zhEY2YPZfsC",
  "key1": "2VsCEHuyHjoi1o8TMbhemgGUsKnH17z7VhggwhLxe69gDsvfXf5UwVw5jQ7JngMyjTfj7MyYdtZPh2jqDUtVK5ee",
  "key2": "3tQvZtsvMycTr6bxLYvT9W38VjPYSkqo7rs45VNW492qVWBTEzMD2xhD8gT8wF6QWXAJycn2oZsUEVpZK65R7rLk",
  "key3": "2PVSdAAcnMie7QMbUu5agQYhPqaNboCfSAci1oq9nY3dTvFmJsAxvSdqsxTN4WkNytoAyHu8P6BxdYJTJVAMFF4a",
  "key4": "59jQrTGyq5kCQaHCHKw1JpBCP2TG9GocTPnUL1jVBBCxLToDZrjxECSDVYBpcD1ES2RqG7he3LcSxdarWxuW2RJF",
  "key5": "2mZJbqkxVz3jrvnL2CeyCQGrZq33Ut68xjBfjEvRQxcaYvYqh8Cvqf4Wc3BydWxgyh2prYYJBHqk1oJiyeEK6LRX",
  "key6": "3zoQ23Ns9AYpP7q96Ze4AJBdgZUsUsLNrz6eA2Xf4jqRx13mmphR5864Fjq5S27Sz99nhDKkJPs5q6wQoJzKyZvi",
  "key7": "2rdmmdUoQoMCutx2y8CoHF48JYWFaRKSP5nrJU1BX8wKSMMsihiW2V1j2ydFWn7NcNVkQKivetjao6UGZRQANSSg",
  "key8": "58K8pWxfdegix5huqppsLwJ5sD9q9nVvUSQaJaMuMJyEJY2epy1LZ9FciWdCnGM7B8KZkuq3iKuw2qFVySkgfPRU",
  "key9": "3qkAELrg9PqwWPRboExfdNiENR4U6FkKWuWTwKNPTET2HAtjRQhw7YV7rpkbcfe7gMrj8VB6FMXCnkLEuD9Zf4jV",
  "key10": "5UAsGiwZ25imPSaRKEgppnqZmUpKkGMejQQFQ9UTBr67moaEy9vJUbKeAauZ3RxCe2Bv4zSnABP1dPWx4PZMSvwv",
  "key11": "3RPVAmgzhrZjiFFTuXv2iVTvee4g5vCMwWDhrG1Wwq4xZ5YBJoF1ECZ9zh3NjrFfigsMEiHsvEZVhbh9dLasWpz1",
  "key12": "2YanW42np4t4Mra2qabzU7SPP6sFR5gvEWsVkLcsGK45Gs4qa29TAW62TYcqZBUjaeU2bSqPeQNaXBHf6upUwg29",
  "key13": "kStdzhZFs6fRprVFyVy8WPLfGQPJTwZjPbxfcZnUwXFWEqRnQpr1TXXmwUJWrcDwWHHrSXdZ65Tk2LxpLBE2Mtu",
  "key14": "5FSSBh71uE8dF926GkAqRkx7xNobVBwMsc6GXGEdjuAsHh8HQ42zYXSYc9nDVjpmLxeTkTq47z63yx1cBJ5WLSA",
  "key15": "4rJdpXdqxJdkrpUCbGnxx67xCJTwEiNP8A3ADTTF6EWHTrx4VMVPKhoeatyzsYk5f4UzfcebhUzmJh3aR3NN2gsy",
  "key16": "JbzawVNjkMNBureWvD7iPVyz8Z18yVQuWCcXVXkLWrEAhFkz2SuB1b334M2St2MMCM5FrPohbMaeWK8AdyrVmin",
  "key17": "52MnbpNArsE8oETjGcZ8o2tBqpvFjfJ21yYUKHzeG7i567Yf7SD6VKLmDGfYaRe8pXJXVzPQ46K5HDw8qJFrxh38",
  "key18": "2bCMjVJTq4MdQqG9d3gNx5mWygvpwfFcV8pNWHbPxfQfo9onFK2H3sxxsZuyaRXSshtjNvrbPF9rrym7NDzYoQZK",
  "key19": "5cSXJWVVWHhZuaTin77NjnDbdBB1qtiZoj43jVkMD9z6D8hWu95gC1Z53ChssBePK7Fj3gC5DFJdw4nXLfHYu1rv",
  "key20": "2H6oD2xvrUTKr5seVQSqJQ9bQEN2pSkQnoZ7f1DQjKBdJhCAwyTsnBwwibBsq8kfUiu3oNSjfPW4YZ6DbN1pez9i",
  "key21": "4ynXdbqLREkfqK4fVrTiFtaeP4t4ZeneJ8LdQVubBfo3ck8CNTyUoquqXcDCzJPQnbgZPRKLcf43Qr6Bkwk1jif4",
  "key22": "53vzqpqgacj32bFf3BvqD4JbGd4K1e65nxT6foWvc8NpbMdNbX8xmYqfKzmqyHrMxbvThSSA5oi21ro8utfatR3Z",
  "key23": "4mzoWJxquch3vV44ptdijf42SG95ip9TYib3ywBMUJpxmdG6CDccD7iJgjDs431eoD35Po6AXg7xXDLyd4YNRsG7",
  "key24": "5AnezSUFwvHDBJhwdktfEkfS3xEWbd9WTpTbkqAFgG4EDiXn6eaK8XvKtGJERCRVAqLff5a8Ze8UwbBUp1yMWJMM",
  "key25": "RmHdUndt7ejnoDU7KBUbEubeVkQ61V4MjSakMJCRZ2y395iWQP9114oWNmBgVDNtf7WhD7wSbAnhXCDqUfTMWyU",
  "key26": "3NcbZhyREAqBVyuBqudqJ9YpbnzBbznokxFcjYpDFeHfWhiEuNWdAAhdzCr9c2p4oBuFBpyqPBEAdDht4ryko1Y3",
  "key27": "5xc5sVLFJvZKebkQoSHm6hySbCEr5gjUMLutE2Jk2eAVmgNzuDCvpw2zK3iRrCScQJXXMagy6RDNfyvB6nhborci",
  "key28": "i5nKgEiy6jP2qPbSACRg45SJE9zPsAg1gCjpDBG4brR3U1LFBVcprMSypRKduxTDuVGcxDdF7VEiGJfseX29b1K",
  "key29": "2WL6HjiZaJtEVHFm7a696upWkL9e67BHW1H868sxyN9RZkYuD928VomARUpKxRWif4VktCfxxssDUYHK4FcpYHMr",
  "key30": "3KVpGX2JBiWUMZ2b7Zp3hRuWxEVXU3WTe9nH2Yo8wVpHXgHuD6PruiWzfzaXXBaeWDf5yGtBye97MPJ8ieWJn3Ar",
  "key31": "3Noa2Jc86Nmgcz5HwvfmXpT4mj5XiTjZhPVN2TYrBk2KGegACU6B3zDC57669WsPGnNeoTmZiVGoq57UZt1ujmRp",
  "key32": "22EkamrZgXyfwTwsQNxivBEyvegfsAZHmN7fnegMLCKf8difmTdfhdZk8ZE5SPXuJvFszwuzs3QEAgb2HtpPEZ6R",
  "key33": "FwxWpgnUb5sdbZzQXJFCRqA2Y4nD9T65nkDHFPuCvGxMVPesSm1J1YfE7i3MRVK8SobEcjsPW3SGkQDYYe6ZJrb",
  "key34": "55LsiVDzJV95Y2Y2kA5n8sNmaxNvnQ6SMRTaNBePaofK1U2PyuN6S6gQs3LcWiVYjJUMwuPV2WnjNVoonrpUmLw2",
  "key35": "2agUmakBx4awN9VMVK3kHn76qfWm8dBotrJNAGqw9zn31xWqvCTwVzURy2wfFxaME7VAr1KjS6suxipi9rmxGewm",
  "key36": "3fsR3G63QqdmzWTCqqrooFLNSR2QiGoDRz77q9vsPKyaBaFuMNHh2AzFGb8yhZu3Q1e2TXtRCoFnzgMhBWqo6qRd",
  "key37": "35Eb15vDCp67Sxufkc619h54u8CJQKHQZMhH9J27aLoYGM6UyuG9skYqTr93LZnPnTiSPrS9qeWrgHrSU4sQW7pz",
  "key38": "E5Lpz5o9bCn33t498jhaxLaiVRdrpx1NUTWDSqar6oskmZwFPHU6qxWsEXp3TfoViH1m7ktQX8fbKWQm2kwhpuU",
  "key39": "39Thpzr3M1gP3RaUjeGrDuWpMXugbUEkSiuNEXksAvDy6QGUGBM2eH9fAB5XpVBk5JFabJKF6pmqFXdAFZxLLcSS"
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
