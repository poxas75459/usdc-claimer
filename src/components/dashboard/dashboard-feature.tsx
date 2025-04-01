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
    "5wtqEjeufLZ8wxogoRe7ATLN8LoM8qyh2bPZnvhXzJGtJ9C9YcoEXy6EtqJiftu5ZmH4rkcX4LGLJvKpmsLWYy7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kY2yMp87yoBJLf6cdZCDWpJFfjgjLhM51zEjuPG15SqbDPPd31VpsuSRmeVi4iMMRjvxDQUNHtsWRnPt5TpaeTV",
  "key1": "5tMT9zPubiCBwXra69Gr6tmU8xAEwqdYyn34BYNXQKYVpcut1xgNnZrZTkE1urdSdgAQ7rqJ55m8mnnC3HkaLQjs",
  "key2": "3BpWhDDBqjHFVsoDhZPQJxD2UabcG2KxzW2rtozJ4namBbtJjZ1PjVmFTQTJTeSPxodEKnKaSWPAUZeh7AWp6VMX",
  "key3": "5ghk1SqWwAPnkofiqNdS1a6uQAYFTxxn7VMjnENZ351D5xWVZ5sPAZC1kWSx1oorpSBHFFLcRbFE7CAhHQ6NsJy7",
  "key4": "My4uXQpVpcqQ9gyaGyn5vY2SBuCYhVmc7mWpjv4tKqKr37sGiEP1RUTzyojasWmjuGdBHfviqxWz67Ps5mBDDJc",
  "key5": "61tcHTM2tenPJZ7eBDjf2C5Ly81qnPVEMDzvm5qJK6K8ynQfM1MEdkUSvQ4TRwYNAm1BB3GMAQx3wR6oS3GUjZcR",
  "key6": "Xr8EGnHH59psD3isFcamn2KRPcu3p8N8XQpu4RMdpdG6baeXkRnAf221q3Q3TQ5zeaMLo7LGgEuHSi5fp2HY3Uz",
  "key7": "3uJ2JZ1U8hKzqLyqxnWFYQrPogSQhtKxHVRUS6cfoZZ1Qs2SrgdrXcCaPBSFN3rzZFMK5xD7DqPERzVcRazup6gM",
  "key8": "329LMfi7UouJeoFXAofLxh7Jye3hfF5thwu2JbQbQD9XXLAihASqp6bJfZ43udRM1DSjfzLJznhnp26YUTTEYcBk",
  "key9": "4GEXG4eZ8x2q9sux4AwmbVM73btrhrGwtVvCG4XChqJwri5v3aqt2YmC7ZfkGvJRpekgo1TJ2udQQJfW3bo4iZnZ",
  "key10": "3iypqQE9gqsPPhD1coD7Q29eDsPk5huJSWDUWDBvZWFRGtkdWnpAzJF3AqCmup9BEB39T7GNsLj3fJvtg1JTAY2V",
  "key11": "iRsRxZDvGAqniJHkq9nDd4mpU92bStxzrCzvvNkYwNnBjfqPea9PG7cga8zJP14HMzJb7mAsCFu898b8fNsdvyD",
  "key12": "31JYekzfWbdi1TwAKhksVeSaf3U4dq1c76rgGqVQxD1PNVpziyYhffwh679jLyMVqR8JZP2chzUMsLSXdJ4nb2ua",
  "key13": "48xJbB1tfNgkBfQbyjmFCHkZ63U4LDnyGDEYvXv11puzoXejoHAzCZv9M6GdSKEF2RNJ5w2wz4BRZGHwm5PkGxP5",
  "key14": "kV1hocswXz2rEpwKL5CTSKbR7gZLW5MJnXhGXgpTbVvmtpkwatrds1Jjud55fgwZXPELcAq7wk8iWAsRUyArhoJ",
  "key15": "5DoHApYKgAbZ3zpgdRXoDXTpSj5uGKzSAMAvb3ZL6XxbGLgtMkYMLSp1AJLH5JzseRpKCizKmToqmFn5c1K1rZEV",
  "key16": "2avFVQUkV6TDzQGLBXaqs3nSEGo7TsPfT4n7e5qaxaMKyjR9LW77iMHdBS8AMCzC8aEYveB4vvEAtHapj5xj1KQH",
  "key17": "38y7QdY48TaxYtEVLuFDqcKbyYR6cVnNKUWNw8g9Ybbja7gUJCfDXBT1wiyh8SLT4dRhYyZCbEmzfPjGo4wYkAH6",
  "key18": "5WNeyQgfKhcC8nq78fYEp9fk2UFLmb9hnfNFtWVb48igygjDxEKwjUikqW7FaRJNPWfUkhsqw1nbezT62Ak3izJH",
  "key19": "4ir9LhdxrmzPoKwkyTSWxwFFBhsxhgVFxieMVgmNo579AwRfqG8DCBDMbQ7VKuhzJSxFmxQMaGZ4tGXekYbYvQx4",
  "key20": "HUicEDFWSiB694kQC8CQsokBzQDGMcjy2Rg6oYss8tzKjEgDDZNamxVcUjrzpNfTTdM1rKsjomu4o5kAXmH44d4",
  "key21": "3LmgmPiqb6MJpnZFCrgD5vC1qGKP8tri3WDARB2tKo2gQFopDN5CqkYKgeGj4cDosQnk93Sqtsom2sYrjvMnPTWX",
  "key22": "4fB71V5ohuaMrGDQXWykE2Js1TRaH2NnqtcJA5JNHaDR1SAvuKxMeJ4Jab27uxzZg1iMpU69t1RPc9pPtbeCqHuD",
  "key23": "3ijUu6En2TXj7MBiKJncenR4STfJEtb3prhD81PsRB8iDKcTDtypJgBQUUMz9DYdEsUJjzNtZBvLZ8XHoGQtk4Bm",
  "key24": "mN1z9Y2KJywcvCt4SX1FwsMkjqjTSRjEjiBJWvw6o2tBk4FnDm3Vq5RW6SzvnogoJ7VyhBQwqU1iYdLi5NkWss4",
  "key25": "3WWDjJwSj3wLtS12TiPShYUNkY8TQki5QxPTSYGTH7veEqai72Bip9ugGVnRUV7c5ssfDRTUr1RXraw8H3sfctqp",
  "key26": "3Vy41rvPekaeaVqZ5QWX3fjVgqRrsDEV43uKpEQAu1eSqNS5pFzyiFxJmTc94D3KWWVhye8yVNARnoyGQS8U3Ye1",
  "key27": "5AmMnvtVJcukXny3mMBcgjcxRCUhpaBJqfMhXxca1TXjc3Aj4ofQTYbQVyipVn4B6gr9Mf9z3HchVwcc8gm6GxKy",
  "key28": "2Kqx1by31FStZsZ2UVg8ieF1dkAjxS9ynLGapPQvWwHjq8jtLEw31b3EsGYRQxY4HHtpCpyXus9YkB7d2NcLVJcS",
  "key29": "gr8K1kiJuV6rAibCHSzZJG2BiiG88YwZxvq5dbNzF4fLvTMYKxryY4NsCfLQSGnhdTUuSckSUBpw8zttSQEXk9w",
  "key30": "5MarzXSgeBBMz5PcmQFJbB5wPyurauT41eafkVUbBMvSxLVq6z3QeakhLLVX3awTEmb3kgKJNbdMj1d1MU68Kaau",
  "key31": "2CBLrP7GaTypYFCH8kRLjjaMmekW1i9nEe2Kpv1M54qo6j7HYKQrfjNPRwfwEBKHxtLAngPtUdL5HxCcsbqRNygq",
  "key32": "kouZGtMqmXkFXxRobjKbUtekyhpHLrGMcbsZqjordUBa8MvChhLPbUuvE6ZvdhmFJ3RBctBk6w2mdmKxYSVR2Ay",
  "key33": "38TPx6KfjfDjXYYnxrYpAVphfoSJYvDai7Jw64yoMGuhzWLd2HJYYX1Qr7sWqESwy3mwtPBJVx4MNBqnaeUHfUEU",
  "key34": "5CgRXUTXWeQAJ7zCeU2pfpag3un5WpzwrGFRKk1Zzd5ovcQQpBgcBYLmKy4p6ELCqkEP2msEUFUe91brhc3AXxBN",
  "key35": "R5REsHeDmBT7DZHVkBgvSaPtEEHmxr91Y4ZuDvocfomjiqzw5jrkxznnJGkFDTEC8fVLSX3mrPkrp6VeRTZKFq6"
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
