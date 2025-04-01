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
    "2vz6zA8RUymaTThMvDd4x8PAKDJ6qvd3wG6tBuPy4LGeGhy2epipj9rUYEctNCkEYfTCNqHaZuv1U4GmdpiCFazV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nEBpeu5P6odatULNVXnSBwQeMzTzk7doAB9dnismYasYT61W5Qsx9YwPu445JwbGEDSjgtbAq4aHMrKaZxEe2yM",
  "key1": "5rcdb627bKdJpjcu8Jk24TaqzegqdVjvxuYhmrnhRq8xWrZAeVnkHpmHx5qbA2fduqXFJaehqcFG3wrujrqrhEaw",
  "key2": "5B8CqVq7wyjm6xLtH9miUyBm7GU5rSX14EGGC9Zdd9vf2q4AzwEhT1Codv43ryh4bRrQQjefwLrLftTXDnkEtRaZ",
  "key3": "4LHFcL4yi1GrB4WUrE2Ue2NEZFwo1g3L5QSxMXwWpsp6ZduVoEDoGH2JgtJYKSyG7fB3bQekhu3VNnfp42x9CEfC",
  "key4": "3T7mHSPU29bTrrmguvkwD4EiXxceUF42z4n6YSPphVxkcMCQTkE76qiAMfemA7uqVsdvsZHdWvH3UsKZagjr3c3v",
  "key5": "4dQkfVSGrQVqAFXZtsNTRs1roPEfCUnCgXizpMGhyi3WvALJE3VUEHQU9EXrmRXbPiRaKKs68ULigh6QyKvdPVSr",
  "key6": "5eH2E4qSXfvP4AhixRVoBjdtWBmU9TZqd87UoYZqJRcpPy927o5xWNTQC5W12HBqwPAN51hptyvKr8LociQVxtPa",
  "key7": "2aPSUfHciDsLEWDQvWxVzWUcH9u84PCbm7kwc37Fjyc26RvAMUwY68U3nMSBDiLjxbdSBREYt5jwa1UanxRWJvdb",
  "key8": "4hvhDJpPdqMW5RcofPEQn3ppzjUPohvHJaboXHciMTeSHub2RRb3pu36dK7SqCyuJYnKm8mEBX5pW32BdFvw955q",
  "key9": "4oVSAbkTLr77WvaZoyCzgn1nAEKa2Z8Lq78VQXj9LdcNsYn62VXJ95q3KjPwgg4fM2Ci3pJxfGH8uaiSoWpHJ6E6",
  "key10": "b4NocFrWT4oKxwzKcX9fkxsHV4tgTpvXi1Gm4YnHtdtE3LLYTjNWnpKrkxPmgGM6EbYppduExxwkdxrzoESJfn9",
  "key11": "2chsbRfTU7Xuy3cj4xVCJyKwGKWVVKpttPAmZPRPvRn5czm2qGtfCE5yow42JSLMnCNYfVATxSS9z3cbMwZTgYCZ",
  "key12": "4qM7zJcVrTtM6Hyku4gMT1ZnMZoBPVS4W69Z7XKGwsuWtJZ6FfwPtr4SpySjzqYc6Tn1o6QVgqasVX8bKDHipcx",
  "key13": "3C7VwsTirbXn89HjS4R2zkFPZRWKjhony55PCVfs4zJxFHdRu1LSVCBHZzyXvBpg2NsKbRkQtehMQYJK6G4S7Rhw",
  "key14": "KZnQaodEeJuzLtQzzkrd4tydJxRqTdMBnVnvtHr2T5SYZoiPD3TiG99tJWMfSbscRTnKqwXQGvq1sDUSWKsuCLc",
  "key15": "56TP2xMK7xSbvjHwgDX1ngC2t24PWdCnEf8p9BbUyB4kxkEiKvZQi7mY5kjZ4jdd4PGt3DFqtQpeSeJ3u97qKMUJ",
  "key16": "24nY7qArszJi6ZGm5XqFGbfkjq7ngRZtyc2zFfWgAPEFh9QABy5SC4K7xgrLVKWxDmfjtz1ewB7zYRfVdU3PpxoT",
  "key17": "23V2U1Zrxk7CUqgrnv4BbaYCUJbb9yStv8bqb1TyCK93APHhzsaUTaAHvsBYUsZaNKC2XqLWxYKzKQMx6P9anLFp",
  "key18": "5YdpnQejNn9BmkCe7bXN9boARRvEiUFERmtsrvtfcnT7ujTjr39YVMcHX2VnJes7reYfqDV88VwNRi92gSGD4fWZ",
  "key19": "dJF2iAHmgXZ5686PotYs5RYBkoPmrqETYd9WumjWCS6ZpJYiv1Yazbw4sMPTCqAsUCbKphNV5KoDik8vYV7wQWD",
  "key20": "2YLn7eYJU6GWciCSNptrFXWJtikdkHmPqA7fv11H8ZdYXQx5CWmgzhFrTpf2AiW93pqvvBYzf5qnvGgoCZTYCFTC",
  "key21": "33NsH8y6yRoAKy1AP7kFaVYxdd8aaeni7d2dADvLQTB6p8Axt6PrZwKSXr8z9axEpGK6igRv5UB3mtYRSb9fNrDw",
  "key22": "2L36eZWorR9oJ91ixoLATVT9fjzujY9yrpiMWcdCM6skFomRBTQwGzS7UsPyEpUGZM2bV3jjoNWsovnKkDh8oHY4",
  "key23": "2v129YoUUL3mVMUCJknN73Y8C1KEW1XGKepzBzBPkcGPZg6DLQ3nhBVSyZugYxwQhmPygKZcK6GKHbkmLqgBcSSH",
  "key24": "5p26b4X3Svigx2Q612WLvv2qYuCEu5XjJ6AqNyvtLRmJutBSGfE85Z78yFbYSEnUN8HhD3ZLMW5qgeUCJQChj4m",
  "key25": "5q2dg5bBQQFc5zfD24gy5wptrt6erYq9kAjCGYfp1N7LiyySs3ek7Staje5tfPWkzmjhXvCFc68g2KqNHvbZ34gy",
  "key26": "4LD3A7qodUUeRER2MxQxf11MjZ3QBnYrJpxHGWmbdizM8k2w628X2HLFGNQRVVhQuGUtCrwHs5cZhTHoQ2bGrtVQ",
  "key27": "3LPvD27J8qsPdtsxEjBY768d1xETJMwgjnYWJB4ApAZpnVVubDNQmXMjFCWH8ACphQmWFHR5dJPLb7Uohxp3tqrk",
  "key28": "67H7EBT8QiNGfYE8JBJAfdAyRdGRZT3Qi74BDm5Ew81NVAaUpwqr5CVubU422LrVqysnc1XBgsLaCXGgA1WbwM2",
  "key29": "vYmb7x6RgU3WruRyvnnPjeqKH2xsNA7a9JjwQdPwVnzQ5bnB7X7nSxPac4Rch7bNc4uQqdrhQYmBCZhty1wNhmB",
  "key30": "5rwcfo6bbyCgwVH6wZVSGC3pG9p4Sog8CjjMWD8vyQjnyczyEXy16dufSk9VmtnX8AsYGL6Q6FxbKghCfGmsPZQ1",
  "key31": "92QuqgrkQsvWMrA3r9HVH432ZWVJrnL5kDhuTCQ8ytDgQRfbcdGVfyH3bw1hZCse519YikVEseiQc2E8rsk5hDW",
  "key32": "5mMsHeoZMczt5n2ih3zdV44yNz6CN54trFUmw5Kpt9ZfgLxCxV9sbFKumxQqHWfvmcqDmL7jw9p8MGZvSDJFjBqZ",
  "key33": "jdS5bhPz6d43LtMwoseZRFxPXUbsfLTkNJdKv3t4YoGA4QMVHCgMn4s5VaALz9iLD5XUJZbuZHWKLjzgz42bJzZ",
  "key34": "2722aVc2Y2omGDmuzWrMS1LhSV3Hyozm8oJFzvPthUhnYYsJhDTZ4gFyCCXD4BBN634MeTj41Ya5dEYgVdd54zGD",
  "key35": "2APjxVY7ekmkxop1npKRJoevMumNPNpWs4t2ZtDJXhSRq9opU3P4WoJ9Gx3rybZ4dTESvJ8e9VZxEaFrn7SP2ejW",
  "key36": "2NLHEBFPRt3eu7W2sKdTtVRqLUusa4TKyDVvSZDTjVKRJsRiaA1woaTetaVTadkXPZzpHf66UzpzjqnzTz3oBhws",
  "key37": "3ofccW9A4a2KZCzDarbGobWhta3ErZtynsr9fWVBayGtmKx6cFg1kGER7T6vDZofMKXT9U7dFQEgYt7kzqb8L8vP",
  "key38": "3S6k5UZLQ7JeuTTnrEJyLkTEyFjTVTvrYqoVfvZyTpFyoxyReBXCvKPJWVayua5oKy5Cvkr36cRRBGtndDZP3BJ7",
  "key39": "5sSXNLCAq12NYno6NZUtLEPiFL1cv1t3mFqtonmUckDAzxW5J6Ej5YNQiQe3cbV5uGCxXkaPDBJvSENYBqx1bKob",
  "key40": "gDEnuLCsEi9AqSdRmKbgv57MxTZMgFZ8tLpWrLs9wLkopeAyUPwyERqHbx6LAMoN1RQCzY4BBdF17HFKDhpjpHC",
  "key41": "9wB3jMHXcktvbm1sQsww1whdCkjh4jwkimoa2xwwk2TuyiRrTrvKbYDEAp4UBzajqvS9qEdoqGAcBLKaq5eZ1gx",
  "key42": "2DVSyxTCxmB7rbKot7dtKZSGn3zqygXiK6rDPQAySGNP8hTSK67FAoDXvkQUeSy7njrAetEnYQB6j5iwdwchgaeP",
  "key43": "2vVzzkhrRM7WUbwi3K6qmpztBF43PSkZ9DuyEjhgW77mkrsaH4VjVf4p7hcX54A1d6HwLLQVtkUnJRdiZdaKnEMY"
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
