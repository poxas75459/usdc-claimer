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
    "5hRAjPBd8SnLjU9vDQhpEzCn9oEwnzRHXUPd5utpmsvnoKsYbm9sbVKunocXNqmMur5XxMEMKU5WFZs6M5nxPiQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hPBdqU4t7r8hS4EW4L1MHhqvCUSrs6uofpqGhjVg31zJGfT6sH6S5CpjBKe6gWP4CQPVm7eDcSTitTWoswBtx1y",
  "key1": "3cEvxWCsEoMAZapmdxuzxFxN7DCSHLR1Ya8SqWh9rKGeUSuFuETEx3qxwniDpKGRcq4RkbVhs6vw2TdcryTGXZU",
  "key2": "4BosBsmuttSCsSG6FfxnBcCZSP5amBKqGvc5kuZdxbLzKED5jndqU8mz764upsr4SPBqjT56nRMXrVKjxySth5po",
  "key3": "4qVjsqCWkLhzawU9QSr59PjpTNtQsX7cSnbYS12d1M2btRx1dvs6W8AYvesuDQCDcNME1xkNixFqvBdnbtEXyQCm",
  "key4": "3nELF4Mze5kg46qtVLi2uHhpbAFSc7BT5pAWfJ2xtv9Mo15ge5Buo5SrkB4VBKmwM5KSCdRgWwCUR1rMW5oxWy9C",
  "key5": "5WLYrjm4897x1CDKMXmsLLzkMd9BZQmD5Qxbbc1bqHwzgbZGdnuUhAPhLZE2J4HN7pk11kH7oio8k3wzoxhfJkXm",
  "key6": "MwiJ7QJWsP26MjmjpHh8J1jNZy9MsZyEvF6m9JSwyhbhUHsmNmyr384Pnzq47uVXm8Fc4yXaSQdS4zSijATLVCL",
  "key7": "5C3eiuFgQ8CbuLDewxMyFYuXj51XBpBv6bzHcBhKyYDAaCSMA9Zj2nKH1sB6yifZfypBf94ZkYes7LiCMBwEPddt",
  "key8": "5E6aGkJkePZasCgRSaSfPydYZAVT2G1LWZ7fVhPBSmv5HD4Dq3t79LicVG3fAVwS9j9ycnoRseA1Nx4JzH6N4Kkp",
  "key9": "345J86h4upfytV79tyqkHrNpt7n9tLSUYiqN6f9W3CZmksJ1BPDdzsey8Yvg76oWT2ggV3mBBmfSAE4jX7wkbgt9",
  "key10": "5bpPuvNVmXNgyzDBh2bUJkjZq93ka6XXYox3BrU7AbDtSHAcqPSBjcG8idt7fL9C3dtiaEhgwBfNhSiXFT3fifSA",
  "key11": "2DoKXGfBiy4GrTaX7EPeorehtbi2e76YvSmuoTBDxR9HvqTyhwM9Sjddk4nVxx2iYJPuW69dvUuxECLDkyUfThny",
  "key12": "2Zw7D4p9ys7ZQmQ92yXGEZNigfVSjPiCMskBEamRgtpQ681xMTXpe1b3jy5rizTvKrPfQaYHHVHqFsU17cvG3dd5",
  "key13": "bTE6rKq7tEaG6ChprTTrRJbS68fpf3HLE2eVq2YRtjE1SzFK4gya6iB4LniwFeW5SUSRdjkfSUN6MJGeysfJq18",
  "key14": "5pFhTMSUEmQiUUs4eaASe7Vw2aouy1Qfop13s4cohBt9X5Kf93ECNEaafAbRXFSy1zWGz8k4KDjm4H8Eq4yfku4M",
  "key15": "4kbFomCjbJNKh3XRMj6FWBxc3GYNg3LWzCoa65mAafzg6K8yYex3dEmPvUC6o7SCdL4DjJkn4QTU8UYd1EGHjNuR",
  "key16": "5RuF7SogsQwqdG82FqpUvS4XEXecA5HnNr9vLrqcGzDkCtC5uDF5xeRt51CdvTLXaVd3fFNKWAGTLXZAk34AzUub",
  "key17": "4ZZeNBDfGrRKKzvAswqwbHS3ctohYtyD3mUrz48SRmtDxYaPSiA5gQvRRBDz4isA4KfESZN2Yfjuk2A5rM5q6zoL",
  "key18": "mD3bUsQoFFEQ2zzhkP9srpaFsVWn4DWwAjPfSd1jBARUv6L7zA8Fb2AiSc1vDVi1KtanhGUnyZXPZUnA6NCWYTH",
  "key19": "3xN6JvRzNsrwAveKxfiQmAyBBi3STQSwPB1cg87L5Ap5dTnENUSbMx2W9gJXRLyPkAMffsVyJBu4mnPFghbUWgqJ",
  "key20": "49z14uoAiBtKzzoyVZ88kzph9zRbqaQgb4SdFS126xJwpdH7cMqPFbBanQdGCroo6cPLMDU6WPeYP81DjCopFdP7",
  "key21": "2Tx4C5yVpGzMyUPCNGGmCvUw7qQT5SuNdBW8Xa1yNdhsABXkjGFhQF2tQ3TdQm4YftyA6t87oyZNBpGZZpEemTAy",
  "key22": "2xFrsGUyY9op3PGLeZt8nSz9v6NGrbxUZ7W934D6aV9KrYfDjDFp3NjptmUvDErLo5DsTQ1wDpFVfhxTo4CdEyAM",
  "key23": "qFjPFwRqhtJUkcHs7nN7vAcicPdCtzHd1BcvLukVFws6cNboDZkBn3EevnS3yYBx6xzbQF8msWyfv1xZYq18f9d",
  "key24": "2eehrQGTsPESNgxC4WkCMLTTxKqqUrs4sBYyB6PYvAXV5HqshxigLD97DZF444MHKRb2o4L536GBXZQr7sgGzqmK",
  "key25": "3PLhgA7nbVor3cBPMNpqCMD7JFMJqJ66QTCxUxRgzKBwBSzTrLtnbqgmYEqd9oXXN4yy17Ka6cYYB7cVxBehCq79",
  "key26": "5gNYkhbPnH59owQasbhqFPibDmY6N32hQBTWR3AHmGNKerBorzHzpWm1jHnusjP5gdfD1RjJ6UFSQqC7eZgSMGJr",
  "key27": "2Yy6JYeWxGfcJPgmyTyEqry4PKr9r48vvPFFMb8ojeeiPbEF8EQBYorCLQrrtX2HqXg7EFWAsLHWxayiSgMiC3nn",
  "key28": "3LwSoJLffW54rdm9g4i5J53ARt8pX1azHMEjv52rNkekMFzRfQD4HFGwknQrvqAhWzDm3izuQEu93CmX94F3B197",
  "key29": "4rDrXzvYF8ztpeqDsPDp3nBL2DwQmd9R1WgLzGrGAaFSShaDiQEooj97cZdrA9FWLj1oqSJr1XHtwZqocQE83RLT",
  "key30": "4aPHGYGe7eEf1iBYo46fe13viby5tQxuNfVSL4mJEVXyn8zxUpCgajmm2TPUSJ8ie52SJX3meS88LcShkQEFosSc",
  "key31": "3pWjzNGT8YxRNYAhDzGLLgnSmKDzfBXEdUjnuK2DsFxkRj4XuZLbx6AAZaGb2K4EuSQKWdofweJuAHA9qaCYGzkK",
  "key32": "5uTd29Yv6uxTi9JeC7ySmUaydPbxYydC5TF4gMfw8f3m7u1oYa2Qk4aGAZFazbFaYrrT83hNwESjAaVC97tf9oBA",
  "key33": "5yaPmwxxFy71J2JZSvH1B8VgXvcfgAi4Cj4jgCThFexsb8nshRtJhv5aM3jduw5pjpjRpTDSDAPmhTqWtaNobsiA",
  "key34": "5xj8dCRixw2d6rT1ZPWZtTrBV9uyTaLrMrEaj4fHsxsyQCAhj3gDsRG6KviAfqET6itHdeorttywWLyGsrrEXhb3",
  "key35": "4WP4RVdDTFTSrMvK6R4Tvfytx3JUEQcvorojzGVpgvoppazeupa8xWaxPkhWJcYvZYdMrkBbJkqGd9ge935RQKec",
  "key36": "2uJzJZCzwo4qwsqTbiQWvpRNdugrXzPWjTyg15FHun1jNz1XCm1xYs9kzHaQ8JRoUbUtTAXgavEpVtTVDyF6ocvN",
  "key37": "4CnNsnGCwYodWPJY4kpoimPtNQtb1wWfuUSfZsdeLaCFjTeg5HSfito1egD6ACNWv9ULHVW8qVg1eAJ8WXh3zi7S",
  "key38": "3QZUGsDP78GtfaZdt3KJhUvXGpFCHCNp6iPG2sMpKCXvWPMkUx9arTBEz8YouwQsvXXzD3oTd357ASvLGPQhaSoN",
  "key39": "xeuRdo7WpVSB7KFriecnT9DSwHFRWPb2hpS4HmiM1v2U6Z1pqDURbc6GJpoQyUHM9hrB22J2LPRRwC71NSB25wL",
  "key40": "5Wud3REDBpEf5SGfLKwb9z1vgCA5rwNF7LfvWxHcQjbLZuovqmxnuvTpxZQeYuYb5v3PaPQmetBBaHGhfUTCrKSA",
  "key41": "3QiZFtuFYAXNejXLjZtmFrERP9stwzMcDySnVPMvcLRpcwpEMEA1Va5Lfg5rGUAA7yDzBUwakMSKNhhu2sVvCie3",
  "key42": "4Qrc79ao8ahEb3VbRZ1vN1e2EYSrJGobSZcZKHKTPLgKNZbBZAN3RXahAaisUmEhxTfHmk97p7yDX2XKTKzT1Uwc"
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
