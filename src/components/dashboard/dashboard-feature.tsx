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
    "ukTeTjGetF9HRqV9k3Hjo64Y1ZoRJvR6EsQBPXodXMz54P4ErEEH8huNBitGbhuQr3gjBLqG5AZEz9yPYRTKeZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1oYSASAsd4BgcX6bhosKhYAHc4UKNoYQzeVxAQVMS9um8yVx4kwucPRqoz694fyLLL2DHzF9275JxAQ7DFCBQGK",
  "key1": "2xDpuYDHpFRVF6ZZBvnGQk8CwfmzBcaMKNiAASRfU7LubgWpfByYa9kxrurMx6RsNt1iKHqqWu6JBp3qHaYKUxxW",
  "key2": "63tx853sWvWHGPVNN2ovKTYomBrMfeSge5MJWhyC4hmzHUh1vnKx4GhmJRZfKvkncc9z5xpHGxDAJrbjx8xiqywT",
  "key3": "4FdV2nPxY1XvNL71JYLkGmGe2mtUR3oJAthgSyEyUmhiBxTtCjJ71tcmkpJvYsYXSfSZs1CsbvMSrR4vScDeMZTJ",
  "key4": "24E2UVQ5tdeiJyEHZ1XSdarM1AQ4yuMmXfy3cqcVctE4jLoHHGyJRsDBaSEdxRMidfPqQySoZcLRqEmvBKyk859S",
  "key5": "BfNJmh6MTk7TtPrTdtzZKva8m2Nn2CZsFFgf8km72rYDyhEJtadBY34MGZihRjakJE8cQcJqDJDbSxFmoLVY7Gj",
  "key6": "5kCxdUaSTvgSTzgDBRHMBDbd7YcUXgCW4jd4kQnKogueJxEYLgBpJstDCjCnAxSkJRmU2XephTv7irNvVY6JuBTo",
  "key7": "2b6e8b6PMt8VimXzFghQBat3zu75vbSsTioXfFATLKkoN5pXKX6j3xkNqCxkxhs1P6MsrnpHYBBt89SL3PwBrfcB",
  "key8": "3Fu5PhnvPUaMwV3jAq4u9KzRUrhifRJgdrksVzntS5dvsBujeQvYXczcaU7AnbgbviqHBY8eZuXX9SYhwuYLURbM",
  "key9": "swiJdE888WLwYav2uTn9u4nLGVggC4N4KyVRArPC3S9KPzgqswPtf4BNLG7zhMPikgTUAZ9tsoMxAxvqpRDHr2J",
  "key10": "5FS58L46shFcsfE1rFgtp7VEoXNkyytuuHU7tCDNaD9jd3Bh3xRFeAZ2w57SLwFdZZUN9N8PKUNtgsntyhH8TtXM",
  "key11": "42dStXgUMAVq3kp65hwmt8Yan2pCWk8UvhQCGuB9tJyAsVdNkPtsqLZS1VQtsAUgahfqdAcUBEpkWS2ugWyzHCew",
  "key12": "55dYpzGA4hjhY5y6pSd1sjATBeSNdrkAucawW1dQXKUoPrLRPpMnT8SCxoZq36xgby1MAXXf94H6bWEtAiMdG6ET",
  "key13": "3okfGVQVpVZRNNZL4WRdcS8an2Qtg5iBYzxQfjvbFpLQfk8mJkMq6JJgvqf25YW4oQRMk1dPauAawqwdMoohEKBp",
  "key14": "5s62K8LMXfjLAQyyosb9F1YWfnU6JyxK5XsuVrt2hoRDwtCBzfe3jteYHCqHUcY1iPVutXjGwk7YG9YTR9Yi7a8B",
  "key15": "37WkZAoEMMFg2RtJdEkALHAZn7a9DsFLdKmmxYP6UZN9gjh8huD4SV6y1V4q7F1ZMsDwAz3jzwSJmt2cGvkhzULh",
  "key16": "2tsaTdtth3kAofYgErnHVBZMECpyLw81UdzBCXGEAKMqDaVZ3nAbhtBkNsFYFC4HYYoP77iHYWDjgauTKsfdDYUB",
  "key17": "wgt1L7oNcA2PSpiqQuuspEVMcb4H9Rkh4W7QBMRhCErHnYXfjzxNieosneRGxHhn1KWJHMw9JHvvouieAkQfEcw",
  "key18": "2nFu4pB2CGtzdEWgsNgzA5iK7m3aguinGSVnK4xnmHXVTt2sCtPGGpopKu1z1v7pSFfhApLWDidwrNtLmLuXK5Rm",
  "key19": "2RPA2URk26HAchxE8wgcuJd63Ma278ow1HWcKuppzMrfHsA7gLdYG7hzZSd3dJbQLjrDpBSpMNvXaaiKseFvjQ8t",
  "key20": "4QHELo56ADjDWg7iWLarwZB53yK5Sds9ExyBgf7DFZisVdBoJ3oYJ8U16BeoRsy1zQzZmwwyTE1W8aTaqGAW3R9h",
  "key21": "3HDaALoBkv3gguDXxHMeC3SW8e8JCP4dQHwN2zuTnNt3ZRKg76gaUmi2VvZh5pGnUeXW1T5n8yxvWw48CvJPWyxz",
  "key22": "2HhsQuYet8PgSPLjaqQEugjWjWLgkMxopartfTpswZwFyuG1XYeLvDnceVZTRsJ5k4ncTgtM2y9deKoVcPoocE8Q",
  "key23": "4nomcsiav7z9R9PeaemqupevKxvUnWwHeSkducqSXFD1ku6GeBND6uw8emiC4VueYgHYf5KtSfFQ9YvgzArAjbN6",
  "key24": "4A18eXgqUrztx5Jh373c3mJaYex1jcTKFuYd41AjBKLF6FwkzX3bitaJiNYYtjQuss3jDp5rWQDoQGegbtpbohsj",
  "key25": "4zbTcagpf6JgjDKPRBLzc48GyB2cVVgZLsYdKzv4zk6SJmRBvs7U4iRiqaBtY3mDh3TcVjTVW8wjaMR7kGix5E5Y",
  "key26": "2bN2sY49jxqQrDRREfp7oAbGHRjaDAT9n4du2RPeKXdN68yrMiKRhCwdme9EwSMyrofGrMb7VAKWWYUyB6E5C6gQ",
  "key27": "5UP5eCUD7dK5WyLU3VyeU729Xg5vpHmrJ3zERfXHtgiGGpt5AZeYEveSbbURQhtspBsPh2hXXE8GmyuviWPPDtnv",
  "key28": "3iK2iyxEqXSFDQ6ygjiAj4QXPxX8sZnLVAWUvcP2B443TuPMpHwFGyaWryq7TnN9uw5qCzqBmzG6hhLQd2qoEKLg",
  "key29": "4M2XDjpYCeX98J2P7qYBsYtUVszgMFFkJUaLyPg4i8R5znbcKhLoNrNv7qKMGC1CfM1G6DCxGU1Zv4r7pWB7kAY",
  "key30": "XJHpXTb1gyY3LpHGrzETF96H8Ump2iBTk7jg38Cv8FX2LCfF7EneuzKSkEmoP9oZsAeHBe5ci9hq5m5SXDKsc8T",
  "key31": "4UKLFEpBsTSjL8F41PthgmHEQ2sXcMd6epJ7DjRfRACBNhouoRPsjWF8Ty9bf1B3ZQeV3x23deb2nvZe16nxQKfh",
  "key32": "fVLXpJuc5T9MPhACjeRhJTG62LKWi6ntdPcVNvWmwWxTYzAZoWX23xd7wA8PL1rWjC45RBzuMinf9fdKS3xQU3N",
  "key33": "4cD1jEkUPsJZCVLGsSeExHoLRr6DJwaE9F7Y1AheS46riaZmFCwaer7BAMK6tTHryK5DXoGmfcdz7TbUvN9Kx6bz",
  "key34": "2sHALqWr6yjMRB2vFGNRi6P8kAuKYNiN5w9sEwJTNkznKCCrGSgBGkqYVbE8ofVKNDroZXc5SfoKGrRjtnUjFoUF",
  "key35": "5mU2hp42jJ1hLrHEDsPT85QAY3cEcxe93Z2d6S6WsZSTGys5Hm3jWZH733eoQaTVkrdycopuMxCdHncvHFRhXPmK",
  "key36": "4D8xiw88zTGjFM4vDzEeF3i2nxYJi1YQMS7Q8FKtDmteeef7bPMtoUimXWgHfuiNRmnJuxfY2TstY2v7MgrLW1oz",
  "key37": "2RPAVp5QY5VSM5hzyNarCsTRu3ABNTfe82LATsy1AjtEaAe5NDpWq5KLpGegVnbQpb8pv9cESofWz7cvMnWKwuG4",
  "key38": "2svvethowPysefPoo9KJVf96NPdymHysr7ASCbjfpf9fRCNwbTTKTy5JfPzdqTKm8KPtVc4BgE1562H9Bw6gKEQs",
  "key39": "4HWUqypAi6DKRXFpQmaJUEPFyTwuedRDt3xU9dz27dmjSXFjTGP6rzw5dwxqoKF9BAbXc7eAKM98UNrkQvFZiiWG",
  "key40": "3i4ncXd6zLXKPHHQBEpoACV2btJqqg9KV87m2PJLwamwogZGxyiAGmhoZAgPREvh3bKHQrR3A2PZJWDtEQ5p667b",
  "key41": "4M8QrXwPndVHVAGCdqGxkVXXjmTuqfszpNQQt6iWAb9q8XUm7mVir2rMvzzfpfihUoCVJbGjtBQ8ZA3XfUTsnwzN",
  "key42": "2kmQWqzcTq4JJvvwSWkQBU5FfuDWjp5G7X9gmwz9cyej1bjteGg5h2NQtkF68aXa9e95JJJnHSsm7A6XkH7r5AxD",
  "key43": "3GwKT77x6f4gewCw2zb9uBiC7H3HeVDj3HYL8hRvWZWbXTToWNxpVbTV1SvPH23BWUKoHxfqscB75UEKX2E1MPqq",
  "key44": "48JWdwCSLsaE2hpMGbrJ3iUUQoEbiHGEMuBswh7Qda5meSE3bhzuRkn5tZAzjZ8SbREszof6SbaTvkMjStk7xEeH",
  "key45": "3CocspTcVfWHgVQ13RM1fNUuVvfVjXX8J9K9bKompjnDgipVS1Mgv9b7E21HqkCfsBkzSemddpTkeRouF7H6PV59",
  "key46": "42Nj7D1ZanDacRfygWERfeUxhhYfWdMqQNd2KH8QMWz4R9XgaYXJ19gsWw7CopBtgQhyGmKYF1MDj1FAqKTLoYCN",
  "key47": "2biL3pQi9qo89KxHRyTaJCbWoCHw2uy2GXEhZA2gBtCa2JSz5kWU2gQEHKvgSQdyRF7ceg6XRXBwGy4St1aNnaT4",
  "key48": "Bfqn1qJ94tcoUc6k7z1J9ECKcK9jgeshGNhM85kwJt4P9VugBAjpsoAwmqdfEa3x54najPpnsNJGCoJJpCcDwPc",
  "key49": "3Zn9sUmoHmaE4C72kQrgdUedAUJ3RJum6AdNoCgbPEKQhViU68AYTLBNosT8SVRffP9fkStXZnuJRG7BRUUtNEKG"
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
