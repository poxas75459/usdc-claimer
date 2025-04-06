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
    "JgLHmR43DmRuN4q8CQQvFmbeEcdDfM5Si5VJVnKoJgXXvqqKsrJbssefbeunPrS4SrZft96EZjsgpRMH8V2iis4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AQvkuwDYw6aYc3SUXLhPDLqdNLfhrnXsyT728coxZyQ8BwZUxyFDbq7j5wnVytcJCsyNwXztFFyVNr5fX5S8Kfs",
  "key1": "6459E76yb2GVS6HTohp9wLMnDqrcDbm3qteaT4nxeJ17yPCPxZWuYtBPhcoWyikt7U3EFhF2fLZhmqu22AcF8Fea",
  "key2": "CF2pAv4y6CRjku5NnXAS8Rcsuo3GzxfLozSvDjJ8qApfqB3J66jTJpp3XRGWEVvrvsH3QfDgfsCjAP5oxHqmBiN",
  "key3": "4Zw8kJEYzANEfkMa8SJaURUDcyQJ6yoCkKE2yN3KyAco68iTD6M9fYwNKVBXArPQJnzFgLPrtbPuUZpaAMxkkrYH",
  "key4": "2rara9QUaMj8PgxaxKybyg6yX6cZFWVVKVhgM2jNkiHPWoHn4GA4FMsraExs7QT4b5hsxZWy4Q4Z4HbzgZPR6bDa",
  "key5": "4UwT2Hnor3mZtToy2k82bes2ZT2KuHNa28g7aGBZVGHMR361Vbtpe7juqmvXJC3sKaH5WzzNF9BS7w5optHa6BMy",
  "key6": "3ResoKfKJKGZxjvaXtSwJew9uTy78kc4aJREVBnC1ptgwtFASMtd89xwzTFU9Kn7M8g3HKAeG5YfME6AqTbsbEHq",
  "key7": "4na52nfDy1AZGrgTBYyVYMQmeN9DLTGuwULtqidw1pRL2if7Q6DPXWgL6Cv5WtJ2bmxzkf8j4R965usX76qoML94",
  "key8": "5gRqZdmvxwCkdGJ9XYiLQDhCn1zEQGrgMoRsftbsEqcQRqCw3hPzvctC9HKpCF819WQZqLFmBmSwN9wsB1FmZwpF",
  "key9": "4Sx8kpTMVPj5c2qN457NqSxKddEokNbcwwRDs6PFnW5CVGwqxF1CJHZ77CK2w4w11Jbmb5xBxm9BLNoZTQDDRxQS",
  "key10": "2DPAqtGQJ727nav3PeVHo2eLbMKypJhXPM3gYqd3f4WzkF4Ec3SFxrdvhcZNNddGQmq3J71ka46uApDvt8jqwhaG",
  "key11": "34RwfNFmhaMHjSgNTui6auS5fhwHv1dgUHbZrpfk2NzxR8R4Az7UcvZvWV5BDDkzSAr4Nud9HQ7zu5ebBvyEz7sx",
  "key12": "2Bgu7nBxfcV8z2jCd6JWBRkJHzS4uUfN6zAdQQMRL7b8urXKCyYKNA99tn1GTAbpMAv7EsAvsLXVhwt8opwPAmPU",
  "key13": "4MU6TVCqECzNFQk5cWeUT141CwFipMZCJkJA5phJhnDYu57FfzgKRpccFSzAnKbCc1Y6HxG5Y6T18YfDy7yjUYZB",
  "key14": "2tei63H4cULBYZM75xTACAyGAE4JagcFJHGU1SZA41W97k3c1Go7dmKTqNJMTkpk7YRrZxarb4gErawuGRnY9Rnw",
  "key15": "2gpwjHRCxLko78kK7xQaVGiPe5L1AEivXS3vsu4QkGCTeJciUN6vEKyVj6qSp35cc4xcxZM5219oogZiDn4C9GBH",
  "key16": "EdtbsrUkkwM9URmCjDAq27udtdTPuTn5JSHcyhF8z2v46sjfMR63aazRSneq6EWbKqA82EDiGoGX3EZ9Hqq1EjV",
  "key17": "cVF7EJRc9imfEkzysC5136e16f9Ag1fG8CfRM7mdaCa3GWrfAZECYKRwF1XVi5tfXqHdd6cZWQA2ovz6UMcXteo",
  "key18": "2SN5gMVQbKQZFxARCWPb5qJugqsMoQqRWT6AyT1xZ4eSM8PcyXKuExXU4FU1CDPxk2y7PVPZF7jpeiY7yyAHzXqB",
  "key19": "2XgKS7FiHERn5gND6eESMZYdUQL4QDkWbpZwbZZGbChJqQB8sSkc7wWXaekcEqDnzwMWC5Z1ox6wpKS5HSU19URS",
  "key20": "nfsyDcN5wVDwx433btsWPwPcNKGZ7Qomxgz4kWWp5hM3rZAcFag8c2gvyGtGcodWsLmSTZGvKBzqhEYHW6kFd6q",
  "key21": "5JxGGdPJxSbiSx3JDV9UXFYur8SD66uCiwyYSRGAsTKHrjfQY3BWrAv76SKgbvBiYnEEtTBwVAxmcPAbFtKW8noE",
  "key22": "4r4VFhxMyLd9pnudDJcQJUN4czJ3xsQVnZHKj99gX4cf3zio5LURqSMbdH5kwoPPn1KECrjMBQfRbRSM1FAH5qmL",
  "key23": "4dkWbiuepjhHTLfF65FTNpoyXQCuLGuN83aUfYkdfFq73U3GCquqaBd1CX777MjtT7TU7ey5Y2kSG7yiPNLf7rMU",
  "key24": "2iwyWmKgvaoacgnLnGPQyNsJ5DTM6Fzt5mQSD4Dvx93GPVYA6yjND6Zw6URcwo6wxkuFdT8PW3bEjB7t6KTKsVBc",
  "key25": "4RNQZcLaopnRB4VPKMTFJBTJm5wdCgn3K7y4uaKe3vx86FFkU8hhVisNBJLD8QYE6JZcPCXH3iFswTj25NmwwT8e",
  "key26": "2G2yz222vFTEumr15vQC9y7E6hbFyuQx1CRdpDYCTFYGBPW67yCAhk1hhzwd1jpEqmeXtgDP5qbtmB8Cd9jfHRNp",
  "key27": "5wPcZfgQu88PYdGGmxWoT5KkVfqqLUAGkECADL64cbGUccf7fjB33BomY55KoT7G3VkUS8wTF6bhbfLXNNwPyvk8",
  "key28": "5xqh7GH8Lx68A53wBkKVTYdExy9dRJ4Qq39h364iexbKyFMJBLbVS8a2Wfpzqq7vvpzpzXeYFPjuWCQdHi2sSP8s",
  "key29": "5kEzp9k6Ax9JSCydUQL7kefMSr3gjGRPahujwxFa1bL7aEm8bsiy4BXnWRxvXmXmiddKrpLFgrHw2TW81F4SbUqH",
  "key30": "D63nbLAtK9PqhddnrbTdWd6YHGja2KzqjX7zJCJvFY6hXDucrAb7ZgCnVhqcK6gQW4e335F46qKd7HdAnNuPDib",
  "key31": "PN8Wejt8Ub2gj1BtHtVqxqzhDgtm2YCUt7pvEt95Ffb7g192Ew7WqiYiaE9kK9CJM5Cyi9GSibraWH3QnsbAVgg",
  "key32": "21nU1Kt83X8NLTX5Nm1yK2SviboWGByAb34AVcaq36eKh6F1wmwLzUs4hQzwqf8RJycXovez8vjXTufvU5xHdXQ7",
  "key33": "apZ8xNEr1MjhstHiqYVWZvnEv4sw7VatHqDGFDVh5HjRXcnyZ4MqmyG3aJ4MZbkkbKVLh6ptELZc42z7yzF4664"
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
