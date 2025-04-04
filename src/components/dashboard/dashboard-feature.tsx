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
    "2KTVWZ3eYRTBsuSrMiYLcXQRUoryuQdqcDg8XKih7JCtSN9DipbcNX2HPhiqH6BfDbKnb2zE43ef6j4aroJHFB3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vAXJdDVEMjyooDwag5yyYtRuWaHaXajDm3W14zVsnLMt5mSqhWkxWCv9JJvVeK2mwVNG94qE2THrwnHTaUruUzD",
  "key1": "2oHdyr7noTpWtNmxAqjXsSb4CBtU2ccv8BRBUaTyphaGv5jVdYzcnnSzgq29s7VVioqpK6ZtBP6C2KhjaXNe91QG",
  "key2": "4cprafzgT4tLKcUz85RGN8wUEaiEV5U77ZDrCau7Pa7Sexc35ZcUfXpodFEv71DTSUiTLNTAkHsAuth4ntrpaQki",
  "key3": "5v2wFWE7yHGEh5RehxP5nq3NEgs1TYB6nQwqWVNLGV6Ygq98qk17HnbB5aEUYMtyw7CteDEe9PEcjLUM53bz7u4u",
  "key4": "31GVrQ8G1268WYFsGBLjnXZwKMzkDQZ8ENNpTGzjomafdMcHE9YsiV7heRNEDLmrHDhu2Afpsk7hJmok8KRTF9mL",
  "key5": "3wznrwn687N2rdekka8WpjaA2Bi45zzNqzqZTHEpNZ6mCVpiZJY2JPkGZk6KrgzquCsUBsk7MdXPR775NKB9LCC6",
  "key6": "3oMdb7U26EspGSDVuFSFCjKGJz1bwVvC9ytrSktjrcffafWnBpqriHrXuiju6p9Gm2ARHuQQAVvWa7KMd3vF2FTk",
  "key7": "2f867vmXBMxA8mxqtDqPmZfTTJsN9RrxspzUMqPU92PQajeTHpVrb5JVeMvv7NWNGEr2oRXNP8UjGn5dA92Bt2LC",
  "key8": "3VxpoRmLFpxNcXQGHEGWDYdiyPS4PUrmvQn7gqEHNuK8tQJkpJGToMdi2SnnHvw8z27xDABKuiJeD5SZrXcJjZNp",
  "key9": "doV6Kc4n7xvSxi9jRf4Hm4HSqq17NKYMcdt9G2LGRksrmxeRptrKszu4NM2eDBTisWMCbZzTFQHZs1qwSokwrm2",
  "key10": "5YwKKPTUvYYbJvZf6XsYpACJ85kqrXd8FAaCPHbQvjnTdw2hnKVSacGgVWonJP5jUQE1PrFZvj6U3nVd7ssNQ7iV",
  "key11": "2AF8o7WX4mYvXn63UpftZ95gnY18zUDpBYtWFQe8vHXZFXZycJftpSTt8JcVnguH23KdNmQ6tXrnzUREJKp4uY5T",
  "key12": "4wK57nPypU7a7HP2xqxLrqBEMuNW1KszatAw5pJXa6bCbwqt3Fey8CZNiczs5bkh3YsK4k3auVkrKQgFj3vvEgZz",
  "key13": "5duH8b7YHbKEb3q3ETbfjjnb9hZyf6nfr8uLAQ2Sg5cKp2aofrYFv8Wp1S2U1Ehu9wU5ek4YXms7RxNTVe8prt8g",
  "key14": "62WdN5hEnogFWwoRuPTpk2GaFNVLywVp49Jyr2KctDVbg41pYU8foE8V1mvCjznAbox9WDcgDAzwo7XVcnEtP2sQ",
  "key15": "qJt5Yp9T5hYULRd9TRciieGrEAh59rBW6TAaRbZnGmYNY7MtDBR9rjGc1uxLwatMwzHdBYtpWw3bYH9XPVQ5tbc",
  "key16": "2b3aQ4YS5KeeZq7ZKxJqhCxC5FRoztPEvouTmqDMT9CnG4kSq8zYwtQkbT23T1wi9gwXaGy17EGABKkhj1yAjVZT",
  "key17": "42V79dfgoH8TwWgHmoZVzrzCFZmcXtbfR2aEbhZnxKZgogRjF5Fp6EFPFHxyKzhtCrUP7sGu8p5b53QbeemawjiN",
  "key18": "vtMFW5WSjSTHxTbGf3CQmboRtbXz6o3wCUoJtdPwosdhCiSBpB6izkmZY45HZ4L9Tddx7dPrBYGagmDRA7k8Sv7",
  "key19": "5QLJCi2Ymzcj4kekpoKAnz3F1mH7w4nDEXXx7Wq2SyDPtwnF4FJbjSdHG183AZ2d1AFEnWaAypomijNhiFCSnXDj",
  "key20": "2se3dbMTPcwCaXAcyquZYA1HPABUXqVRYkQMeq1jNB2QpTRFFFNThdfqudefkh4dq1ADHffnBsnU83ZVdz7YAvdR",
  "key21": "Hh3MbjQEPNtWDAX1mhPqpgz1Be9bMTjb4V8mjLUGZpfWaEZUgGbNvW5NL7PfSTmLYZ8b4kafjGrb8LzK7qtmzQM",
  "key22": "63WAHrDxJuZDmKaxXayqvbr2wvKArNa5GwzD8RenDQJBaWVPGrY7hirmh7WPyfXa46cnwUZ3nqS8Z9BxjtYRNquo",
  "key23": "4TSWZxaRLMwhkHovgc99sczquHRcpiVLLETg1fbaWA8MGezoA1LS399q3i6WTnkegNRMtnMsL2NqqTFjvwmM73rQ",
  "key24": "dtrncTZBxiMe819tYtjFotBU3m9Md8cosK7zhMgcpMT9S2cmVH7YWT48KWVbgypqgz92bch39M9TJEuJCHfACCW",
  "key25": "4kqwdFpCqtm2xFTgTS6KMDapsTN7nuRx1g1noKt8aXnxg31nucsx7AhzBXtwDB27vUMrApHmQjqFr2enM6Zhszd8",
  "key26": "38VYNm14ZuHXKTX2ov5vSGGEQCTBXD5dGehEayWEvGocogxk28eUkbimYYPwQ9587KRd73H89xWAPRNXQCweWf1D",
  "key27": "2HrPebhR6waCUCq6fiXCFG4hD2jj93DZeaeCDshARkzGhvCUhtJKproU4VpTBRsdj64wSoUxnKfX4SMQXS72wbE1",
  "key28": "4H3x2tW6VGSB6kEeQFzHCXMCFmrMiJ7mqJBYa4VYvmLdPW3egohUaV74i38YunkjCbUZeDTpeLkZEb8M2CQ5fNYp",
  "key29": "4A9zQ2bkuUd6nDH7jK422tDW6gA4EgY3aeDCe5MM9KE7NaMBu5aQ1NPh181xqKkv3Tm8GaL8BGUWKPM73mLc9vo",
  "key30": "3JiwurFpFNLBaNj94iYTBE9DT2STgNxHxLbTQWtw3fQ4hW25jAZxUeETWmZJn8fXKHbkQC9tKKr7Xk2jKs9SHT4Y",
  "key31": "87z8xpGYkLcrR1XJKbMj1fijZbhnser5ivxkgrQXiDLNrPqmBBb5xzkSM6JtPoPQEjey3dxsCi24DWhApubv8KP",
  "key32": "53FMd6hVNGq76PXfSdSqynZKXDWBZBoWWKJ7piiuLosGZqTCx2zF9yBqsbKN8PwZQHAmbWhdGqzGomcExXw2gNEp",
  "key33": "zLZWvHp2jCQooYQfzhCfZuCo5aj3sDgNgcqHxNPSDfsGRBfiKxPdHnbVFDvtpBAMBpfnxduX68FwL2GopbAxXtb",
  "key34": "3Ag4StEUBj56JVTamm1i7iTdohQHtLqEFt6i722qDbKYvtTHrNUMSbgjutTizEotL1ciTnpwNZozCc184xo3gnvw",
  "key35": "2Ekf172jRBzS1EWcSz53RF576QH4RBWk3t4XFmNU8LphbnkMDYLh99EUpdTxLGsSxPQiJw5aJbGboJArLG1sn9J9",
  "key36": "2HA2NnfGMUiNujTFWbhDbPbfQdJk4CUtEPrPTXGv5q8aUxBJab94hoEFb9WtNVHia2gs4tWqUG7NqrS4S691FpY9",
  "key37": "4NwMEtM1y5pr7tE4FvRJTUg7LpKnErezW61PMk6V4mZg7JqmW9KG6Zw5rtqH2xWHUrQKQr6HCgXS7sqNfMFQ4oH5",
  "key38": "3zHY9YyTrqvif2XjVXJeqN7ocewbKSjj78nFEkDV6NyAe7uRDV3iQ5sDgY1okSjZABEZ3VagUh6dg5bCkHGNFcVu",
  "key39": "5LJJpS1UDXuU2KtyS8ca4tVMNLLMNGY9kwoU4WtVRyRFF4qvRAsQ9xxpQFiLQ43anepuXkq6JVHqwEQ4kBCjTqPx",
  "key40": "5pfsVBMwDicBtsXoUedbYahneTxjbVAAWyr4NxXdtHTTzjsbmLFTLc3D22MzWdP5MB79Wb7YhiqMDXYTXEpsQjeD",
  "key41": "4KhxkKLDERHddukfEoYwcT2JDmeDwbXYD8ejfF2y6UatoWNi4qoFhhDtBki2PHK521gXENU9ffVjndBnwxCqY1gE",
  "key42": "39HsdF3UHYpCdHk4aNjb6YhXn2UYUtxCRR5mvNhGrf2WEYdaeCboLycHN1Kra83kv8iWCnZE9k7s8ze9bY5CVVqu",
  "key43": "iuvrs2AAPsKVYxgFdzv9Q2hJqLQQmgMmEbALLRmk6Q6ThNXGD14mkf7tUY2bYfGJgY8PVEHXRgCiXojwSvLujsm",
  "key44": "4ZHnmZCiLXh37bS4faaCn2d6U53kJ62QC9UtuPTxMDkGWCQhxnDgB1eiUaZbEyV8sreeHvQzMNxDRfncLbxkMkJE",
  "key45": "3nL2Sdwu2XQiG6z6iaRtfaAJds69iQKpPyuLdeuaoMtUyneaxQc93fRVizdqFiRubfCEM4oMMW4fDT16UapQ8sTy",
  "key46": "24yFfGWrVDKXijGF3errbkWUoyFf3CaeqX71RFw5FgxLy6AaB8kQJ9JwgpvXQqf6fFiS9PWcYe6e7NHoMNWPdBQS",
  "key47": "ePkUJfhA8r87yUkopJPPJbxUXjEFyEktwtyTTNTRFgXNPP9Kw9p8fmDRMSxpNtmNDXe2iJK8kDJwzQqDEvq2zqb"
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
