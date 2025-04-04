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
    "5TyT7UexV7TqQSujEQUFH1TufXkiZgLnRpHGh5psrQCYR6fjMMGBvwxZoHnVWcE4WVAAPGHaKF4Nc8HAAvhnmhN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VYZHe39ZhitZb7wRrNC89fMf78emfKg88QR9EcMzEAwdvKexcEsebk2B7L6yc94cE1X5vZDkaBELrRpnWNyMrk6",
  "key1": "2JFfojR5t7xSkDESfvktZM1ZGkr4MU8HCy7uVDGX5kCLN9VjSrjTgS3rSLj9JJguXwjJ8ohpPF2A85Tf3knXJZY9",
  "key2": "3FtuxbNS5NAEMDFdJKzAmx7vpzw9g4Lt3mQeVfHDNz5j912VhUTKyyp6CpQTXgAZUTxqRnnbJdK5ZrKiBD66eU5P",
  "key3": "4tPwx48L6nymhqUBYyiHPG3K1U9zDnrGAyXSfFFMtexSJxrvyU5NA4pUf58h9CgPyQZmR1MkZmJtn2Y4rdLf3kJH",
  "key4": "4Ev4tRGSpV8ZHJ3JX7wTy7sg6ggaBFZSrQqpoR2P5bbkAs4B1is6Yu7UxoZ5NnxrT1sV5Pm8L7fa55VWLAD3jUd9",
  "key5": "4dJ7wMvA8EJzCEbm3kngDfrp11MmTwLpq95GT45VJfFWStnTbkkftpxHJVdt2iVR875rvXtNiwyUeg11ypDMY3WC",
  "key6": "3YdjzkXa9udnSnj21zT91ZJjUKxSQbiAPTXGLK2Hk7x4eeKE4sy3bkwPjJv2Gk7a9GyfbL89sWbjj9xbPijYZhKf",
  "key7": "3mRU3WKYUGcGaTtZiFjxnocgXf18JU64AmSeoPC1M2NH3FzZTVnYXkQrhcxcXKQLpptGT3Je9a8ma7NcVrwjFQrD",
  "key8": "UZq7v8G7r2x23gwbF8MtZap1jfBjdWhY3kYT7aYYFpBiVdFia6bShUExMXxhYZasCmScJmKr7rNSg8vadH8apAk",
  "key9": "iQ1VrhAVXAoRB8Arn2UcNB8m4dNrv6kT7i94fGPkPwrTDLmH8zoDntmFiMFbWToiKFU9XjoErop9E4YgDQZdLrQ",
  "key10": "2USpFmpGvitH7j9VM4jBqz7VfHYmQU6mdjwQB2Aztx9GNqLziwArN2YabaJ9Lses1PFpYzBEj3eeT24q6BiTkrcH",
  "key11": "2BaXNnCBKCsYVL9KnUTkthWm68MhMadBwwLhqHetnyKYwmpDAYRhYAeLe6ThTdDaSvAKs3giaHtuhpwUQsXsyy9w",
  "key12": "29dWN6TefmGpxRSpHBfYD8JrBByoNqUTQUicvc4rpz9LbFt1QeGb2U9BDh2xQ5dy62yvK27NownRdjt5LDCiMwfL",
  "key13": "3BQ1dy8wgnKcCte5dSupownS2PR1T3DawsJaRsrXkX8zuH2TRyZgigNjYBUtedErPoJFtuhn52qeMkm1KyxZ7krX",
  "key14": "4XEMxHnibRmrWhsbtV7JjD1gUwr4U2UU9HfBNQGUsmFJQzhDXhu88Cd6KMFnA4DqwtLqEPwrGe1PxhUk3wXdSj66",
  "key15": "4Bs5rquiwPCB5gYcESyQJjzsX2yiJ6FvcvxNobWwyJevqzw9mpHyH7SvdyRJqZ5gFuW6ZQf5V3H2RQNBq7wa6maw",
  "key16": "3SVHkLGgmDpYirR1RUkiwigHtohwj6ZeCm5R3zpkPrbsVWo3JUKHXAETR6c6EtPLMNbuFFBwaeCQX44mSZWpQXHT",
  "key17": "EhaotJD9Em11AmF52QQ3rhj7WhmtikJ12H9VX9WuM5onjaaqYocYFqtQvzaDKCvG4CDQjQMpqJq5ytsQ7jHWguP",
  "key18": "2FLRTFmV8YnUHpGjiepbgQ1BwsKGgPSBAo948u5RbMtdr5bgFmafxk8cFqbXaVhLX6rDF5T361WnhcR34hkmQyrY",
  "key19": "4h7Ac6mgxgyucALzFiGjZVzuQsTuBzugs3WYtxWtnqfCQznwQ69LoJ1CRS184sU3FHikgJSQffUmqAq6NwYatuVV",
  "key20": "2aBrTLPqeroWmNq2nS9uUAEEu17nU56UEiwMJ2mF4iL6EZVo1Uch8h2XEcgeCfKs7UeKJnnwdmNKzbqX4YvpwG4W",
  "key21": "55CPgbfH1MtVy8gPDkMtAFp9HPTmDoS7Gh6HwaKc7sHQUdXusyP12mDPEwtkfjZV1HWeV2ajsy37KxJntwAoyZxT",
  "key22": "57GcRyKBistATeU1H8oZh7VEqDj9DCU8vjuFJF87BmVZVhxvXUSQM3iDoMRbRumakdd6bTLctrx7HeDyRYhtEyMG",
  "key23": "3bABm53ahYWM4JLVb4xHuJULaNx88pBA2Vi9WcyW4vc3SzScTbwZr7s663P5SxPG8wPWFNbb6SAvj4qxSnr9m39x",
  "key24": "3Wj23zoDxRhnmmGorBh8HcXFQzXKBvW87acNhJV5QKTcAqxTuD8tn9q5JKb3JJFhUuR41RKjD6RuSSrYEHEptimz",
  "key25": "54nCdsxWF9SsZimsEep6jYHgNvqnF4P7baTUi18R1VC2n5uavzpkZUK4V2Yjvf2EMtaVmVjo3xB4jt4AQkYT3E4x",
  "key26": "41kM2KemnU8JSsMFYKjofKTkZPjc7sAU5e8cAkaeM2rgLEgsooV4MMYdM2x3bku9fxVat7W1mkkWFDfUcUYJvS82",
  "key27": "4JKhhVHZeHfouSx2ZeAXD7TRLbRGFSBtJt5Sa4dx84ssvzCvVRkw5xoqsu4f8YSsEkwFtFRcXRkR3uM4hzrCN1SV",
  "key28": "29Bg9BQwjwnix58bXPCAjwGdPxFpNSPDRvX4BhcFcLXYfynQzzUqVTHuP93PwgV29rETkMRFv7xueaS91zNhGYSQ",
  "key29": "4WiuK6jwa5bsKyzDVqNwKPVayjvYVhtivT3bgaxuYJas9keEjzzJpgjC5su1PyxPXC3ALAWNY2Z8sEeKL4qqDqJo",
  "key30": "2w7fzCiwfwLnqzAyyUZM5T7Nd7KMAdQaecJujWt5zoPkhNZAjiXWhYup7hNSiw8WSMLUzEigbD9nhhQUXKKfYCC9",
  "key31": "5tUQRUkDekzpUBsGf3g4vaxyxnHj6DRakdZmjzYDf3oYGKdhngjs2ruA3zPugJ7GRDX3rVDmBxVPuAXereweic9W",
  "key32": "32Lmr8js8HeRTWh7BvrcoCptXG9CkJtqTrapbb5nXQd3Gcg4Wryok2jpPbPG7SVxN69wgy2UfVe7fZuWAVWvV7GH",
  "key33": "YENpfca26hPpttFaVbiFQ3KjNwgPYmHTUUuBu4EKGMdvmLJExdJAxMyQ9kBx6XA7wYVkWTtos4nNTtbwjUBGdqt",
  "key34": "45zt62L3y3Fm7V4EywV6P79SoD2rLFFqC9yVJZRERVHiT9iRW169C1JQq7Gds2ujiBaw9zH9LeRPxetWLvTUUPya",
  "key35": "3wZ6GpwxzgCPUrAbv8iF5TZVLXnT2VW9e92mrwKWokvffvebtXLRt71TMZz8dsRqZ6VLkDN321NtLPgK8wtQxsJn"
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
