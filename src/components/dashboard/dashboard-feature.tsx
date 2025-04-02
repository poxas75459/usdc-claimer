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
    "4JhgeWnGpBqdNvJDP5n3vxPKQbKvejSDWEy116XzyMb1bmTQFxvYUjGFYx5fMtQmx88obKtXH7bf9M7dF8NU3U32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5ZFGKGyHChuSYcoS6wrmN6Lc2yGfGi5gfXEs9MtBa75zndzuGfW9Qy6J3RBUKoaDC2qkjDKqHRNfYP5Afrstr7",
  "key1": "2V6kbbRdDJ8kNicmNxF4uoM4KdwLpyKzyihjRHZrt9mj32oAptRS8vYomR2iwmKDdDSeiKwcY9v1T7cbxmeA8cir",
  "key2": "5VnD7ibbsBgid87RaVcFqtkyRtJEDriY2WxNVsJNqhxMDymAEYMXebDtT9jgtj4catqdkptUzj8GPjAcJa4gcS2x",
  "key3": "eaFbtA5PtZWbFaJwWnfzmv2GxhGnNZf1F2AFbTqSJeB7LsHgHzURSLWCGTA71pVsPMzZXuChWsrREcNQE8UcSfo",
  "key4": "4JHB2vGWJvo7sWt7pU374qHqKhEcwq3F9xZiU6VFxggaTSBvxXaVcz5VJVow55Sam71JUBSrnHYJW3kLaC5nFGpe",
  "key5": "4UowKBx5b18jCZYkUEQCErXKvkEukTmUHg1ovq8g9KsaDvG29FvJCribXTG6WXvJbnRSJJXvYqEh3A1Fmse6kDLU",
  "key6": "2G3odLeq4iWRfYT3wmX652Qa7iW7HhrgNcwToBTTWcsJc7dYhrDw1kzeiaJWhHDCokBK9jQmpaPebg7c2ackQhtA",
  "key7": "3D7yM3qGdFqNKfXjwF4iguCoj82LMsoUsbNG5Ltt1yJysSqyLqQn1WwrhSAdVsP4duKMHrghApFnmW9JWTLukQ2y",
  "key8": "2YNksXfcPkv4QWkRWoaSAuJ8LERzBaJu5ikWoFKo6Jo3LVu5x2CWytcXVwr4JsK67rs9JPbV511HhioGQxAPyRCB",
  "key9": "46S6DAAtiwzSFCF5wX2DjKZubr1ddw8ouVXppjx399UwVpzUZS3JR1nQBSxhZBKCnMtr8JG9VzyLNc4Nwy5F8BRp",
  "key10": "4Cu5gBWPnnCbLgm8FF4wWZqVFzmhektgJ2tmdW3FoncPmm1Zd5mDWk4kA3dZfMozguc8JBH9eSz29np2Td4iM76J",
  "key11": "4pJurxn4G5Tms8w7g5vJBXDTCKNM1caqXiqkDB4FDbBxn2XV4XGcseduAPPEfArhEtxSvkREMcBAgsWnzy6HbLi2",
  "key12": "4hyztsXLK2h3UitmSmWsbQnmQ6P7uPAmobRBoramw16184UXAWnR8kszwS9mJhB4kRrFUPYGjYyQVTxxiJugBm9Q",
  "key13": "j7SpgrTt5SerwEj7R1JQztiNeLxnwdBXMZWsKTZXJuUdSA2hHRFit5ufGJ4VYGuEiUiCaZDnwkWnjnzV7qsWTTd",
  "key14": "7zGfEvVevJGZmRLoWi3qG27gEhB2iEbot3KQWqXmorkCRLKFX5jqg7w4Jk4ukNcbfjH7GKEopC2SFtKBd5XDmhH",
  "key15": "udyzPnjRca2G9BZKHypThbPQDco39zEf2V1pALqJdHmGQf8pbpJrfvVEaSga34MTU7jrQzoKv2Nw38TWH5SBVy2",
  "key16": "2zdmNuWckk6CjnXJva1Hi8Ek3dn68yPXQ4BvmZc1jKZLXdWwjjHy1zAYK2b8MPUcLHnXM1jgWLgj74D4hpeuYrHh",
  "key17": "3KgGevTt4Lq7fafh6tbX4z3aBaoYXGFyYSJb1fPaUjLC7QgLAKCY2fmMKpCrzhMs1xsQUcshmj7n821KnPnaJ1Zu",
  "key18": "3PwggpvtRofctM6yDpQj1G3XFGJX6xcUkSb57JV91m2XUoAYpJV51baHTErVnaGPEFYj3YfrWpd1A5DstEgUNzrM",
  "key19": "3wSh7ERQnHH7Xw2VawAB7dRvu3ytxXaqcYMinqCir4smWpDxy777Fsgk1R8XsMLdi1YSKj6ef9LWt8sxwSoH4nT8",
  "key20": "64NzLq2ZuMqRMjsA9wMBvpVFewm5mNjcqkcFfYZD5Vpu9cFuFthEsxbcvrNknsJJeWPDcMuuZnucydZpDbJNyQjj",
  "key21": "45sW16CAF5fagiK9m341stTDNS3YfXpLzuNNxjA5NnhmNnwxKmr8Xs95HjHnbGtxJA5yTGhWA7HArkHWZzgVVeT9",
  "key22": "41kpDscJvaSEsavXAuArzGaU12ijzqRo2WMY7JJjzkqytY6CAKmGcYxNhTMA6SvyfASkR49A39PGU6yijeERWRcT",
  "key23": "4fL6MnhtguM3ijDuCjMnrJXiXopi12imQ7F1oo6hx3kaV89BrgSBojP8XA9XSz49EQ1V4ichaTdg9BJQPgAvafoJ",
  "key24": "2d9JCa7o8yiwu2Ro2Mv4ViHtZ8wRJ17UD9AXmTY7ZizPUNw11ZfgFzBW21GbKrJx5NfbC1Pqd6MP1UZnwH76TDjR",
  "key25": "2UnwMa8cmFb65zb6t6bgNoH2jTrKNGLvakFCPytgX9pjNbSpyF3y6vN7xnCaS2eXzLnfrC1RApNY8g9WfCu8tjZ9",
  "key26": "4ZVezn75qgh6BbAY87NxYaUEt8vuvC5WmwH9tKWB7QK8hJKz3hbAN77FmsF6jcmyxJGX5nQ5C97nZeVeiNTEVZB8",
  "key27": "63cPkVEkznfWigHAKbTzbQh2y8TzCNrqxAZVWKEcf6WyJfLY88FJdzSk9io7XUGg6CJrC6QjPuWtZKSd535UqL2N",
  "key28": "4Yc3LDUjfBv2KKyfgpaLJT2gdJZzcKkon2mwBPH9WggK3f1gqHCRx3poLewAAHnmL2LEtZCuLm59oBzLPccEht51",
  "key29": "2CgFQW4dqkJYM69WfU3C8kNJxDd3UCnKHoYAdyyQdXHtYL8AnykLuB28bLB45ihNkbQhhgHPzahJqutdT8nHSwfz",
  "key30": "2FRZNms1iSCH48bH6ytgMdvd6KAHmUqCwXyKYRRQhfrHuXwLgWUNfnkHXyZpXKbtwq2vFgnD7wv3CDz6foY5DpAu",
  "key31": "855WUY8KEdViaXa92cqju581Hgk7rhP5PiYYg2pMPTKjbUugEZzzNmvS6gxtK5wJUFD5ExURkDDxs2SASLryJ5t",
  "key32": "UJKYBiAyhREoCU594EgsawrCuRcN9EUciEoxck44NdUAfZx1cSJo8BtR7exwpj6pPYTXXqaKdD6rr4v1FYLUk1j",
  "key33": "4piAMUGxKhH5rk5YP6gyy5qVciDzmZaEKVBnQKQECbQB7zMAcurmBnkejBMNtWF7nz4hYrZ5iagMv8BHwcPNWLsR",
  "key34": "5hHYWZbSiTNWhWnqrpxJrahq6YiijdD7TY4dWtvADhrE3JV7fKedWzPVQNXiAJCgM369C3XHFnno9Ef13DArTab3",
  "key35": "5xRZPaL4ozkX4M36okfaXv2knrdwBNEewbXzeKXKyBDd1aSqFgHoZDgWjpoYGUZWK89Bh59FBrm7aagwRPiCEBjc",
  "key36": "3PLuptzaRtyKjyYS8QE7yGqyL813m827zAgE2TB3nnAvzaeK7zjFWWoqJJfem6RcX8FFZwEUd1y4RadmGyhuxMuR",
  "key37": "2oLyYiKSWptuEioff3dkMsCybWqNvWRgsjqJZJRpCVtZTSJZicSUtMV3gBuHTrnfhtxZQZ5AuTpiHNrCq4ScMAhr",
  "key38": "5bxpHgokHo3R5tm7LC31xVLnxJiQQGrrjuKePesBjf86DM8pNUn7awcxe5ibhB6TD6EE5pJ5UArr93bA1L9sLx8X",
  "key39": "4C7vy7hNcS7Yd4SHTxRHNAMXpNPoNSsfCMdcgtYPZL3d4nZo2u5ZjNcBoBZtsrvbLWmuAeXz2AwLfo9B8arDJwNC",
  "key40": "YxUcX3amqddFTnTiRAdXGucxZTSGuXV89VcY4j4Lj9LWx58k6WQxurUA7qGKzi7R2utbFLjXiUriYit1bWuwfT6"
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
