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
    "3s1jExNfDmu33aNkGZyceDtauthsuJEpvpLFESQ529g4DQZJC1W4EEQ3MMnD4hesRzsBVJQq27X8ELRRVeW63jgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uKSm6xMxBvkUCnw8oW9C8riHbGdD9GrhoMHwGECoYBxtA84VbhuRxbkydZiJSehEaRYYXjAExGUDeT2dfhmZd8d",
  "key1": "rSMcqxuJRxt6WZMpj4BfRypjHtH4n3N4quRy2z1mWCqrjSaZ2AhEiUj9d2KLxzqd6cdoeExZcknFUCnFekjSxMx",
  "key2": "QyvdBcEMVa6TnKpC6gF2xEiWwsfAPkH7aGXnmLiv2U5STjWFgdAjMEi1Esu311uYTwRddGepo2acjfaG1di4UdZ",
  "key3": "6WGeFHpZb7FbzcsTdszUN4dE6RazWcjBgbTT4KJt9wKxC8cJU6zfUaEKvXd8anHsHii2nv9s1eWj3TQanUui6Jq",
  "key4": "7WboGa1S7oRJAfx66QSfDwe93w1j2SP9Hre9JxP1grnDXfCG9mC3QgPuUT3pTdTHyrDRxr5Assva6w1uCYeRwKA",
  "key5": "evF8Jt3kwjmfVoFFHo1JUvmFkbRfmRJFeY3FDDBfWBhtBkFeSZcMsYa1ZpgNFBQY3hZZurqe14Pg3WawJpDfTtH",
  "key6": "2nbrQba8iG13yTWT9wT1bCazmvhjNbYAskpRfKykk2rWrTSNhDC4ADPBLAD6CajcMfcqUezean2wUJDbzgVNbpyb",
  "key7": "5xGg9eHZE56u7gCdiWgxNmuRWzwnjshbQATDbrb8HBLfzKYrjw5iLyXQ1uP19Hfv8K8FFy62aSA9EkaNoR17aAtU",
  "key8": "2hiQknrcMDsux6Jg9YZ692FBEi9fdSXysvQ7eaW4XqhnAVgB5CK3B6ryma5rUQTjGSR9tCyktdnMpHx6sDQoCPsh",
  "key9": "3q9j5FLsremp1Ec2hUiEbpa78zB3nVcLkbcT2dAzBqhjbFEZYy4A6jBbMXLDix9sMypRcA59RRvyBSY7WKWqqA8h",
  "key10": "3XfLt2vGwSWZz9fmSh2Cwpmz3gG7cnmZfuof9A3KBgM9dPDDGrGJufizfQkmbBu7RdwFAHAQ6dRvKVEdMJv3iqAE",
  "key11": "5MYi2vdur9iDBrCrMeXb4L5edB2BstWvf8Dw9aN9r83BfjUw8WNqCsvT5FNujyEb5NbgFeQLDzpEm9jS99TqpCzc",
  "key12": "4oc4rjWMVuTKE8HXNzAsLtw1QH2ZTzRvm6Gjhe8XXgLwZ8x19ppX6T5me9CEaeQ8Y2ZZqoyZs1UjKkZCf1nF21zY",
  "key13": "kwyh1dY6k8ALE3L2rBhwcRNRiAqvQshTgtsfjtfwGja9gEdJ5xwDK9skdA7gdv51b4jLy3u2Y3MdyYGhYKqNdcH",
  "key14": "5P3X9t2VxHiAWEr4iSB5xo5XS4q34sM4NYoyeKMNyK1nyzyFeAHnsyW3GYnz2Lo1QX8NfzoxVGw2PoCz9edqchUp",
  "key15": "GxzRsiUFtRsUTasZDetW13mraW91bMRgBH6T1cgiS1WYRnotBxjnEtsteVEmDhG4j4vqeDgYh4RaS3GjWCGF6VQ",
  "key16": "5NCCzj7YLKDftf2yZcNF7YoFmfrPUzLWLzo4HyC5qSZbEZ2nfscYktSeTp6GNdcAafUq1e8japdVsUkuYBjisVN3",
  "key17": "4voFzjWWsu215sZfqM8SG3b9kSwJmMPebwgdUpkR5siwpwraBGG68xSagpZg1UafjGUPGrrb4KW8FuBRf633ANZV",
  "key18": "2Fm77iVgamZUaFt8FsDDoqVeuDX3QTA1bbWFzq3ayRjTa8hStSUcjwxEmhepVGGLurh2HfmpXTsrVNZQvY6SjvNU",
  "key19": "4Vbq2bFRGroTgmGvprfbiHJDTcsqXpUaybZYrRPGqf5nzNjnXYNwKFu1AFoiynE1xHrXKjZTNJUQhQwgvRCY6kvX",
  "key20": "5ERQoxM8phZrZCwHp9xy7qKERWyTzAewTzXr9M3zyw2EoejuB53nraFGCfyTqfBex7uEknqRuGP4KCJnk6VZnE6L",
  "key21": "5fCDQpwp56AH1A2H7Ac5bRN5rwx8FYmW2kVFE4dwna86vF4daFqYCPbdDE6mrFr5uywmbuTEjh99T3FMRBFLDiSu",
  "key22": "3gNmu1RatHZw8ztFSvxB4SDV2uovVKC1t9yyx2SHz8L4CTengN45LnZURyKmmmVrX1rc1u5Quha4zFm98iVtxyAB",
  "key23": "3VC8AntjQodSwPPDaCWcg7MMMAD8qW9xHeEQ5cZkHsj9n5mfX81QCdX1CyVxuyC67vebK2xWgMzbqjRgZSo2BvNr",
  "key24": "2hrmuxSuYX3nyKfo15XiWhKNnT5e2Ta9hSAa2LoiEYnUJUWxX94VX4v31N9A7nTbsMHcdsBfxDAQYrfgzAngZJbZ",
  "key25": "5rVQPDtoDUrLZmpSBjaCH3JHZG8csfsThYYSpgBvFKDdyjFhvC4m4zW1NW7iamXvFi3HL3Sk6trtLD7EzDohDHX1",
  "key26": "3h1a8hZnBPkc4gZqBAc9EF1zsNyZJ2qscTzrfGWYU6NkTLteisWq1NhsrNS8DjCTt2Gm5UTa8W7HJ4oh7w45vVss",
  "key27": "64JLeEN61pL8W9Ydb6MaudNiR3KQoSqzCJokdxfr3aLuvAdKq3WHZ5etKkBbw4HQHwNydksPHMW32wxhKkbFF4pX",
  "key28": "5NmDXDQ6mXmWgDfyrtUhwdcSCrmmJ3G1rKx85nXLrL25Dw1atHxvxmNoeaqqafGUbgAqnoh93DJrLQsYcBDdJKdg",
  "key29": "527mynDyGz7wXanyUQ5AEfZodsRrAAb7WoWgrqgvKnTGUh3XDqnyqhRy3yrt44vCGZRoHcgHnuxPM6GT6SuGcJxU",
  "key30": "2F33iDbQZr3YsBpoHx1D7XrbMa19wT5Lpryq3aNqqTRUod8rWqcc4xtXucEXij7Bfka4XGuibJCnziHA4WS7gCMx",
  "key31": "215DmdaEqrH4edypVnB8wJRG4DGkBHC5qu6kEzuJ78C33XTKfo19SeqhYZMEakwcrtjpbRZncWcWJAhDthsLJ33x",
  "key32": "4Xq4fDTJWHtvaSnThw5EYSsM7utBzpcwhVnH2Ad6BV6NfeSg5dAtx9pUiFBrxK5e2jXtasxB2cZ2MReqGkZyNLZs",
  "key33": "3FuixhmGqPWz9FR2qbYodGzZ4jWVrGjkr7vEKjmenSKtsApyVzjkxjeuaMCYFFrsCVFj4Z3LaEFDME5envrsUbax"
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
