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
    "5yLiZ4sTK5aZgXrUixV3RMsGcPqdcxnFk58WBQTZkiirEERWqVjrbubm7Zrvz3tdPCEtfZLhC3WbFbdMARAmjH6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44qvDfxpUNXa4vdcbwLXTHKbLtXVzvNKgRjcuFp8ajT8LDi52CU7u3Td3wmNi3VaNHrP45zqvkPTjaGrmC6iVY4e",
  "key1": "2PDCTaZmvS9ZnPDxHnLbL3dy6iMSfP4Kiy8GtPDnyKmKaUTkGaDRUZX7z4LamEJKfJrfJaArRiLb7p5oZHEXzCHM",
  "key2": "5Su5ska2cm8rA9u9aLYEdfG6CgwRnA8uKB7tnvXjrA6GcWffgyokKbqMda8FYTvuSS9UZa9DFSXaBvrVL7BMzHCE",
  "key3": "3Eih3xtfPDtgmvY11bkGAPY7keRHpViCRmjJkEBJf8jLRK7M2fdNYh4C4wop5MrLiTYbkuffyKb49DDbRa9ywXxH",
  "key4": "3nE43P8MqXSXRQEczEYwKPGAYftjXt4iZoBdfU9qHMB7SH4e7GfrCHN9SLEVCRWNKHxPVNrJLLGC5VFw1ieMsBEd",
  "key5": "a8mKL2s4bzLURXJg9t2KVdHs5LzK7PZT8tp5MJ3439puQEsKHgvex3r5E8t1oSdhRSYKxHx9gU5Z9W9zYsDD7sb",
  "key6": "W1BxEVP7Akb2SRfe9USpf1PU7JBiHM84EYLqeh1dtKseoKspC7fUii9C8ZyS98QSoHhu9sGg9E6YfK5AQcwdUgu",
  "key7": "5MUA1fCR7AZ5BEjHVdMFkS3cr9TJeTmHVoMeeXNjwhZJ7LZY9qJwf6wsw8DiVhHu5FJVyJRbWwBFBVEDmDA3ph1X",
  "key8": "26Fszmuhsm9eZ3VqHRs4NzHNZthaWnuFgRqTq4TYwKc1dBXDFwep3Ua22fsWtrjCCoPY6QP63bKc5HrEiVxPSnae",
  "key9": "5Ve3wjvtuv5qeEiGpUCmoCnTyELXnzuXeanpUSuhvbCCzE3139Ub1J1EFVzcBAUeaaQWMxnhww6FPdMJKCPVWjNk",
  "key10": "41dGWTxZaNMZFrBCZjuzN4ZkffVe9QTMsipNvUh6wFdWoBmAQ5iSHH9HQXyxefG9r3QeKnSXLxgVU5J6jwsnSbpo",
  "key11": "2QNndFrYP64ZwdjLG3r4HjzGUUAZYoc4W3sS8avPLknN9oFMd2m8uHc2EXFvfd2axhojk25bDRBfQG7aGk7fEzbs",
  "key12": "3Rq5nvuTKdpcD8J1iKR5gKJ3SFDryWXAjUNjS9ckpAbgFwfnFDvboSHRmSFK3fF1hnAFUnNbezHyBMcLGhxUCVaf",
  "key13": "5ivFA6Yb3XZJYqpoHtRJfVh8nRk7AscU81WZY7nj4jbFekC2NRbU6KjMR3AGKNP6HYDkuFsiWid49HRJStBw9nmP",
  "key14": "5HSannTEEJBty65miquVjPCFhrK3EbB9AgTxYFxszidmXYEj3uceENKVkWiy5Xm1PZTEkf13F8NZUdQfDdt3eQ7k",
  "key15": "yr7zzkkzEouP2hYrhUeL17o9tFsrXfAEygSwZa2Fvfo8yTtE8inZd1ECUymsmFFwTfiuH3MrwnBQFeJqqUzjJ4K",
  "key16": "4nmQ5VikpvRqxi65GtnFGLhfcNJRhAmbLfZVjfWEbU6K1cbZ5eybmDpmREh6YVaP2niDwiW2GAAn2iABQaUQKXYH",
  "key17": "2hK1mBZN7myhnGfWUN9Mbs8bZuzYgNg4TpqJDif9eitpf2fF4ZzH1jnYT56eZcchHi4J27fWXwS1mHCbSVuDrFYd",
  "key18": "3znfdsLdtCVaAnjGtPtMpSE84ziXgnEsFMCBLRgVWqSB4X9UEbU6ZW4SfGQyXDNSoBkToSTT5q6pvfkVqoMwVL58",
  "key19": "4hKi6TSdTopYf8CF7WdXtLu7Hsrfc4cjsg1qeXFm6kSo3DhhYKeJnPe2cwGGAPqXVzhnzy9s83VSRpWH34LnCApt",
  "key20": "3LARpoLj38ZCFS5FU9a1DkB5GhAY4NNCgPfHajiBkPk7n4ccE4YmvV7uoFXJvJSDDfJu8xfNJt9o7ELgExXQxFFM",
  "key21": "1hr9eNV9V8rYoxm2YfLd71zMDTSLcRzsTn7AbsHPtCtTWon6FpmdAXqKbkAEFQHjZPnFguB1nFPFsJdsQHyY1vN",
  "key22": "u8DN9W8aVoFx1r9iyG4Cc7Rr8Y9dww1rFBNzoa66LaHbxh7ogBzJn8ShXJ2LGAxASRrpbLqyQHGk34j3trbB2bQ",
  "key23": "2FPunHtBVdesnFrkMSp5MPeojADDaEF5Wm6pMKzY3tko72KfyH5t9gb2xSafaechvofprYRjJBFUmhT7DQxkCbaK",
  "key24": "34TVnSrLUD7bv9BE54LEXokdBAfGpT4MNkre4MRGpnijTfY87svGr3XmgWLvTBiXH7ZkxRdAFzT2fNEpDWxqYtH5",
  "key25": "2fUhxgnBdaXfL2VnxwqHNLQBY449ndGQerxLfrUJiUF63q2UgBTJPmxtBmnm52WAxJKdYiuPENLhe8HAty8gzReF",
  "key26": "YrxSZ5jqSX1vBSJR4eyZ1s3zj31r8N97nxymRR6Lh9GpD9pfrZfBHTwh4fy6EW6ydUtpCjHPnVyPVtszATLJDBK",
  "key27": "4oHEQGzUA7YpoReSBJs3LK7zPdG33Fc9XQgJyqRMhALfp2c84yRL86MxSd9GLb4oynWdE5H8b6wwUPrcNPUh39Xb",
  "key28": "5DmQBfTojBqxv1VygjfHsFQ1fB7qfUMcpgSi1S6VHK947ToYEF6AeUCFJF4WKPm3eZasdMPopHMh65XZr6rd7bBC",
  "key29": "4iqMNHRoRbXhj8tKzmsWY1Eqi8vBvZ9ziyzbYztMevh9G4rV8CF7T6VK2f6oLKLvdqExrwjG93DP9XSJZoXZbvJs",
  "key30": "3PtcaEiexT5Aye6faBPmihNJYkNrTSWou3RB6RyGGkKM5ELVMfGgirTQUuGCdtvRSQtsJ2jXv62nt8LthcPFuGss",
  "key31": "5BJFHv5dkxLRQLvrpnDE84EN5iaYBCqn6fZCgQj34KXS47HNc7agPQ6uFyabx9KiDYDmRGxuzkzoz65EcWE5Xz72",
  "key32": "3Vy4kchf446hegjgKVwXFKHVDo2Nk7FH2ufirzNjjXTK7owpGNtCT1aBJEqHPpumU7tQqDGF1ChARRvDkHPYyNCz",
  "key33": "3C2R3zW7Yz6jikZCc5mJe5PQcgaiBhgUQURrYv8sSmmBNKxSKLCdd6TWPmgrKLk3HDZMJKBPmL6PQHatw6L3uKdx",
  "key34": "655RpguS2U7aZRcNXScbtmJrxuSHVVhE45dV9oxEfggXsp8pHLUXwDT9hjzwVA54j5Y5uM4rfMrYN4REv1p9XZgw",
  "key35": "2ZznbZRDtoypBfLeCDfAQg7pUAAVYUzhrr5CWLSmjJMXd1JqLpzsD3yBq5AaLNpyLvw9C2Ztje2UtNJSESXTK5RB",
  "key36": "3H1erxoVyPAbJgd7S9afD7WMARHM3z3zSy5A6CPEYZmV4jzEPCU2Aftz5nfsSQEy1MYseBFVNogkNAz3KBdKFxCV",
  "key37": "5azauZ9Y68eZ2vUjQ6meURXC3CZGW9h6fs2mC78A8AzatAH4Dbaw1SFCyRBSWYxuuT9VNNC1Hu4Z6dBRJnQLK5AN",
  "key38": "2EtqFU1Tm3nqndfcyXEGG4xsLdqQnZpCoTEkiiNb1o8irJvjoVMFhZoxtur2pcxurp2Dpf62qDkdmPe37WLMpQgY",
  "key39": "jXT5JinK8gxELWeWB1E6syZqoiiw8v1qbfbXxGxKe2QKLMh5fcijJ6yfeYYZrse7TikeKSMUseJL5Jm9yAUALa9",
  "key40": "62HYzFwBk7eAPuu1LMbCCjePp1xbCNMh7rcuK9mWxRidLQGdDojDVnC1NB1NVgjpRuCp9yBmpZVmacewBdQUrh14",
  "key41": "KCtTLT3HmkmfQDodZLvyH2Gi2se8uAn9e2HHbQh72teHnUvgfaUqKprHnq1gYBhYorUWXB28DC6GTV2aVocj4eU"
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
