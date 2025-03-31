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
    "3UazbcZtvu8eQfggYzcDr5tkVEbstgbsVn9H6zhLZJNtK5LzaW7GCZPzPYQvEWRPqKHAVxLmg4fFCi5g2STMzdWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TMUGcwy4ssV6big5dQ81kwH5nv3QtacpLvUUQYF8bVuKnRyBz7q4BcvRrDYFvjRfiVjuHLgvxYp2XFgiQR1zdRP",
  "key1": "5XJu7bDx5NMxDXGtMyrvSpPsgYuimzRA9SswaHK4PxGCwUfdJRQPfgsTCmLvtw3nS25MNnqVDw8yxT1epMd5UwSK",
  "key2": "4p159GgSeWEVkt4UG8NNWfg6Cmxn4KHgjLxx6R3VWiBi8DZTm9N6NXn5FrfhRXCQqrsZPVDsWwmJBZ8DPzhuuqU",
  "key3": "4hgkTNjW3aawUtkUwRKSBqC5bcR7aEWbsqaHRxneRDSFFqjMYvAa54g78txuwxg4Fgiq78LTqTdq8yZtDfMgNmvF",
  "key4": "Mjr7sxdYDPUvPKMXiWoSi5KjsDckEgMAx6tXYMy6fZ8z6rMs1pPHktVkjBnGyNkL9RZKkctKw3fx5iqBvSKm68R",
  "key5": "4jvqQ696eywdhCsW9ga9Wx47bHDjiswtYZceHXHHNhMADVGBfq4qBEbv2aaKDgtQCqPLEqjaqQ6PsSiA32VpuKzq",
  "key6": "3qQ2B4zv59H4npkKUkHBAdYQE7bPaYkgGxoyYv5jsStATBhfPp9vCK9N5rCfPNGrPVSEeaqMTgbptK4XhX8ZdsZk",
  "key7": "DRxmhPCtiQ1aYUuoJ6crCp8tCqvgANXGbUCJPmignvUsEQYhhuN9FLDJZCwAcbqvZ8Mx9aD1hJNBYuKZCNcQPFX",
  "key8": "zMWS8Z7qSgct4UFj94vR6D37FTBxMiTDYgLyBru3CXtLSDJfwCZq7EbRYWAkrSBEQug6UMN5haFmUSzx5XWwpLg",
  "key9": "5sB7enmf5r2E6ZkZd6B8a6CBcRNPxhUN816QQrqrH9QJju5s3SpaX7QdzrfrCuvfUSD4nTfg3GccJHxdVUrmQcHL",
  "key10": "4DErHG52pbRgCXH78WnxcuhKSBVjvLmpc1eBdacmM45arxGhnzQryYHS4ErnLtgfbSWjsD7zQTN6xw6VjwcbMakP",
  "key11": "4QzXaXqsLCXnCHHJgBjtyuV4U5BgjzgyNnNHZkzJ88FRShUCn1xSBPkxg9GwNx5XLn6u8uY78dfgeLT4ZyDfm65j",
  "key12": "4ZRYxnT3fyqrGDGRy6B73enRbCfQdfh6Jm8wGr1akDkW4jkvCjJpwCx82hFHWxcGKAkwncFKrt1MetRmS2mKrVYK",
  "key13": "64uq4AWSqKdaUE5GtM9z7Cfd2usx8UBqXqhWtgsLyFTy9tEpW8dyfWkFWUo4U7hhpBk9rHkkeLaSC97u6GtNM8M1",
  "key14": "4RMmT5ZmqDLtxHrb81JtFbR4AKfKMDz56KUt6KKFrSCyg7c7GFZUaUnujB9tzyziPrz1rwpfqS2Dx9Cub4LfNAGR",
  "key15": "3gFLPpzNNYKgA7Frw5R5r5UZMJnttdgjbFYNh8hLyo7W8xvce6Fcw253PHtRPLeCZnxAnaYgRR13SBcfykgtD8oi",
  "key16": "3XicN8z6utP2nn7SnM7PF47sCj8Rx2F66GsRPdqFeJfz8VWAHQmEC7WUYp4jd8MfiXSB42kbmqjN78V7TXgY6HEF",
  "key17": "3dGowNaBadzVW6NDTivzAtJMtWSqZKTohb8hb1vD5kDK8WwJqEEtnfkAK7TTYof9QFB8MxjSVeGr9sN2yaiSj3y3",
  "key18": "SM7awPjH6hyCfybCSXSqVkuYibwSxux4tGhzxdkvF1tFj8MdSKdmF7x5xWkwfwwQjVE8Nn1gCque6FjE2FAMSWX",
  "key19": "5ya7p7quAP558qGVgcsfKFKAy151RVP4GscwHc2pHT4UR2UHJTxcsLLzrv7RQTbsZBrbnrw54sas1B2zv2okg1ZL",
  "key20": "XwYwY5z4ES21cPUURJncFRGeLhEise2QvNgGkKYCsM3WU6AAqQ5tgH3R7sTpi7CbfShM9Wsg7EkFDQWK4NdSixJ",
  "key21": "2gczjHDFmEasMdyQtiEm5x2Vsj7e8yJM9jjHBp46nBx8uXKYGCgjjr8Vod7a3NMs26uRKhrvN3TJxDVRyuRqxZLA",
  "key22": "4zYqu4S4isoizM3tFUQWt8pXsGVuYs7DBdP9Qo3Pd5eTDvQyRAGwu1oQTXa3UWwXDf4EEvW84Yd2p7h6wm6HU2qw",
  "key23": "2YuApmmV7TCpJnN3jPSzcsc3pSVCpugcrR19SLdpK6ZA5A9zgpELxdoQXLWmedPXt9hsfo2dbubjidswLCpEP8sk",
  "key24": "4XtU3ZVUEEvaJzzwJbKEGkdQdX3ChF9XoVWKDAAWt9VC7rFASwmcAUamxd7qsqfvasVhBchurRhW9LEcHAbZvCNm",
  "key25": "2ZdQN3Ec7EvFk4yizZTu3HutLuwoGhDLfEruYLC1UmoFyeLr4LQvxZAucLhnNRVUDEeYf8oNqYBhuLrA42jMVzhZ",
  "key26": "66HusDhDyMx7GyUZS3qg3DvXwPXz8eCd655MLZC1HknUqhE2mL3NgPBTPX8TR9kZPaLKfxdgAzmkYf8kJBwHaAt6",
  "key27": "4LeMR9MHZ4WooZAfooJFKna5C4XPxvyEJfsFgQKtN5KHpFj6yEXY1EhfNiUGJodjQ8qfzVLpxLKFG4k4eCGbELYY",
  "key28": "59Cn3nGEdRbt8QaDvDiXpk1hU1mosKd4wMPpYNoki9eMt71SPAWVKJCk8eFnqGj2Ledomu7jP7MYbHHjZ1FZz241",
  "key29": "56sk7oayG4q9s7oMhGXoai74rnGsG1JEw4ciNcFi658exzeHsMSKpT41rsQPKw968aRXCc8PwwTZKLZdeEMuv31x",
  "key30": "tCN3BeAEnCThz9J6hpiNe5PYQ31JWPEWz5qCHjMhRJS2Ex1cBkDc6GrVbn5TsfKhfvvkHo9E55WBvNq23wXeyR8",
  "key31": "LNbhxLovkxiZxQS94h8emUc2Ej8YngJRmXNsaGBj5fgWXpCugTu1D9AQu5XXKMPu66VJKZzSJE8HZktm927sysr",
  "key32": "5sPfnRb2Nmu9umcRi3pSDyaYtpmvVDkJd6UMa97gtCdr6mh3RZGYp1XhaNDdd9FKZp4PMrJfQzpqCuK2fJwzmpdf",
  "key33": "UgC8UJeFL9DrBqAwfywx3xarYuokVGHYm3a3dNh6EEXXXbUbXb7Gp4Xninc7E8wSuTfoSkZzjk5mmdvDg3HHoHo",
  "key34": "2LoqYtUfLGgWS6mWnWcHMHPgVQPyi9zMNMxESTxFtWaxjvg2RQCHBauJ6AhtoituaJcsi4To4xNPDLudBu8hwpub",
  "key35": "3ZYS4r3oDQiMyCC3dwdDvpqPHFBZkbWqbggdW5hdtQw65Qanow8X4RXZ6hWNsLeHLmH1USMa3ymbro9yfVyyTLAX",
  "key36": "2tnvdNpXpMwXkttHtWVpekECMMR6iFZBqB43hD9zLB13yFZmpcYX7Dkdax6ivUH8NP1QbtppGptpP2YfdyDmEsWf",
  "key37": "ZUKfPpXeTNLVFm1VjvaNxRzCXkWFJS7TufNSqV1z4XnijoF13Yt2fk2oVGQFjUNL6xZWPyQfjGUveW7VfAAxwSF",
  "key38": "3XGGkC2DgLasePp6oS9Ar8Rwx4hm3BJpN9KSVXr1gGbx88yzMDBqimcTuqwBu1p4JDj7tz9JPpY4FR7maoUpiiDx",
  "key39": "2PhU7Xor3YegQcMNqct5iGHYNiaF6GS3GzQqSb3pYdKH6YRZHQJnqU8NW5ewqDZrq6NSZK9dxJ2m2ah56EYPjM1Z",
  "key40": "Maj6XNyniQKMyMsQ3L447KsoxQQK3fxSJ2sBa8Pd12y4pVqyV1iXbNqvrJHJDGfbJbdYmZJJZu7p5HR7rYwwTFk",
  "key41": "516rGA7anBR8acJDJ3BvDvPwZpsof5a43MQULwpZN76F6X1G8p7NAdsnb86ffW8LLW1J4ewJJ16vr89gkGedSakq",
  "key42": "AqoHxs9qQPEjGu1kQWZYoeLQGYVkzUnm2nmB4GYXds4qTQD5ZMZtpRfxJMDdLN6gZTBLJxxmpJAidyGpFsEY9xv",
  "key43": "467AjmDqLknqcg5o3vpLAkoqMRAQHwfp7x3419xnExYeeRQ9kUJ2Ucsc52wFHFo48Nd2QhXtzPwdYrmHLMbFDjVi",
  "key44": "5QPEpWSeRfcryCzNpv1eCQCK5JYjVfp4ojmxxCcqBsvPME5ZMG1ftFhFnhqmjaHdQ4YF2TkLTNEo1bqEPE4U9smj",
  "key45": "3Eg54jYJJ76pmAfVV3NMEEQwnntgTNh4FAQzPxc94EcbDSdmC2a44JaN6xChFcbMN3FCSpQPe6Hqh19cxV7GHrVn"
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
