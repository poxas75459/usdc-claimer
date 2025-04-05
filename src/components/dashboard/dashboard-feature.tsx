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
    "5L9fASvV7Vx9dTj47sg63ZdwmU1efr76cWqYXAyTkEBHeaQDWyT7x7mvxbsZ5Buuo2DDFpSQaP7EKyxCkAemUfWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZmQNVbogcJVNePZMUsPyskH2XG91kovLCviCfoN93a3S5a599LBpiRBp6qCsLDHGJojSpgtzCYg1vfFkYnwKQr5",
  "key1": "PZW2airxMg3nFaR3LnxqMX6rrwSB7xBziJXbLMRV8qLfmTkK71bx1Umt5KBRDJQjrXzz4R7rYHrdKmZk1SZNgH2",
  "key2": "3T6xKeLGX4pps5WVBv6P39E5xzTGWkmbokE1LgZ1EBnyd2TcRVYwxBSeJPx4YXRTvEBS3Z6kHbQDeJp4RVyx1YS7",
  "key3": "7k8VWuPUgEgneUuiYqESBnFSVYh6TTeDuV4iuzAcj4pR1FaXA5x62LwiUjSKSQpaFHxfTSKEZNmpkuhTQEacqUb",
  "key4": "5DhaLgQnKydL43CKQsFMoFrEbeKLJBPB55AChyz6jzZVPs6F3tNZAoHgUWLKN2magU7ixc9HqRnjHK8hRkTWbkUP",
  "key5": "MApJ2ULDHrqd8HhH6STtpki8qV1whpxXt4MVzK61rLtAFMQPJSpH2zFDCZFAaEkDW8KJDZEWr8ANfzvHW94xDp9",
  "key6": "2zxxSbDu4XMReN4VzNDHvwTcmVKqv77moEWH8u2ZDmw9GxPktx92vGf1AjdU5AcdAkebzYNApUpaVCVdkhr93Hcb",
  "key7": "5p6M3FDiYZfNtzh764msDWBP4gzsCyi117gNJ9rYXCK2nCQXgjctjYXvGgvB3UBVP6aHPYmnNftEfxBtcUbLXQCy",
  "key8": "5Mm7TTaGKvgomfdHvuHsAVtzD6tAesfEY4LefEE2oqNA4ayxLj9QJn2RFUN93RjnPJy5rZT4BcmMY88RM4tUkLg4",
  "key9": "kdkbo1P38X2bAA9ZBUWL9iWeskdE9CtFRFyNhJcSL7YJpJVikz4kBQ1RwfyUEQkLbpQXBnHCZ7tdnsH7wZg5YaC",
  "key10": "4vVA9wiodeUTDmswN1cLHUarwzD4gYNosLYRdHDY9gn4WBUnFVa9QnajQs55pLJkSGKtQxqhYytuZiD72jvdLhXz",
  "key11": "YJSfwtt5MxvpoXRNy2fzxiT5kuePfs2nCLKHvXYomUXcc6J6gMXzHvmbsjXJz4FtoHA3fzFvPiArLVL3kML9uqs",
  "key12": "2B7PBQtSobwHY3FprWELYh4fZXvmM4Yzba8mKW5Zq7RQr5toP1fmGLckSJ4wTQeZphQm7nQ1x2aSdr5TJT7ZT46n",
  "key13": "4Ks9bHU7MJAYgEjwHjV3qo1rkVmjeqsEpcVFCDJuuU6cpo4kDj1vgcoapqcmcx3p5s29i5vdNwUK36yYLStaTMz1",
  "key14": "3E2odz9uetNEn8XsPPHA9yrJdSLPxugL8VNFLEQ6gSYDLyu4zzuuBJRovGB5pxJjBvXSoDiMnYFUTVdp1kz5Eyjf",
  "key15": "eFePoD415ESub9TJJLeYjneZU55jq6tHYWBeQro1vRJ5Ruktzzz3LU21RxgyeC16rgqv5nEhzUpF3n7gQBQyZmb",
  "key16": "2E3FM8CUumYAKUNuhYifcqD22h4n7baRXwDs2qxuny2L1e2sjfLHjPjWB1PNUkbNPUHCR6n5a1tchtabSLFRPxv4",
  "key17": "3qdFPf9wTqCPPNuoVAZJvdLo2xWBhdkvjHwE7ic7qzMdKetLxxSRMdnG5dyvw5mUJ9JLnnKGKJwRtBuTjFrtvVtx",
  "key18": "2oNdQwqkC1jBS4NcN67ni4LKGVQPYkNpwdZ1ieQsSsbB4SP9FW7ShNJMRmtmRgdXaCzPEBJU4Sr3kUsgu9gRGo6Z",
  "key19": "2gbbzs5yYrk29wvvhxEcqmLh7Y6b86d7o8wBBBSY4A4A2gkAyw3kwaUXqRd9Z5zaiDAqvQ9RAbhn4WD48ZMnCCP2",
  "key20": "tQQAhcSa77dMNtsSioKip5CQxWe6hyyRZ8tQaZdQSbVnbNyJ1VvJ2HcJzLWv4Hd7aPFkF3rH7zVztHSUVEdNE63",
  "key21": "DTmQAHUGprzBooRqoD3BuGQ69TedPGgtwq86vXHBgabEWrDnSvWp7MdFCX3gmNLTimADxux8iixjwkqTtbxvn7W",
  "key22": "3nnWFvwxQA45EPRj9PLSaQNDfNPVudsbLeNgKxAKJ8zstoAsvfCgx16441rTdm8Ypj7hY4kpwheATouGNyR39EeJ",
  "key23": "3QQuZRygJxWpCstbbfFQEphYfvpawqZVz9UVDgzk5cTwLY9aCDckXiiV2MaRNGMj6wjrgdVvRcHuTXBK1Xewr5rY",
  "key24": "5Xs1dnqTcLLX5ADupPjHHcUkLUESE8d2NG48cPUFyDBw91rryi4br4i8YJZpVFRP9SqgB2oSpwAiQkpaGhbwRipH",
  "key25": "4jvEUbCwqnBMQQt9VATttk5jFhsbnZcnuf4hLur2sM37BJ8ydeJ3jfFBDqwmf7Fr55Yay2wdmGWcAfLarFQyreZ",
  "key26": "2LAM2CA5DTfuNXW3u8cYGY5T2nHRdjfrhBE3fsFgCvrWQxjp8nr26pLv45SYZecHrcKSwo2JPtWu4CEKBGa5Vf6S",
  "key27": "3woYZ2Vg5VfJFs8zGv3XKMkzgCvjJeRLtqqVxmhtDzDcazzUAZoPkyEVHewxaRHR2aBZ7TFYbLmCbWfEdGQWbwAe",
  "key28": "5QX6unSJDpA2gTvzx6RiffJ3MjYy41si3auxGm26v4UeNb668QKxQo5HbmdjzGVU2zieRFc7nULtpMV22Z1uevPK",
  "key29": "5rkxT6dKaCfVFpcU5hcZWASt943W7bB4j9ZUEe68rXPyuXzTXF3URX7mr7QVviwrN8z8qfWz2FCSPmNuBJM185Tu",
  "key30": "2VoCNqo7bqXhx3N5hD3FhKguehyQEH5X3FpPEQRwpuYgGwDu9TBBu3b54UYtprgprHzBfkehfuMuesDSGVCFVJJM"
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
