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
    "TKwqT1dZihkQen3Wr6988x8SVrH6NWCrwEsCAH7G4X4NePkNNudthqFCASb26cTnmQRGX6pRd6QhemG6x28MG8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aCXJnqCw6GPPHeCBaCKEYPhBnEbgzYHmHg4S9VxJH7pGbmEJuxtGajqNPovaCbKy3biutm8gfcjhby3uLvj8NNH",
  "key1": "tFoaj8WdCcC35G9YQn8S6j9qUR5oYi4uUrKhhiprZ7Tzb1gjnGxvhd1xt6NutF6x1JeHzFxN3oexEs33LMqYJts",
  "key2": "37WS8ffQhgNs5FUWwbek1p2dp2FMdc2kAtqV4z8kQ1Wi3sqyAhJyUUxqwBjCKucTgQSJF45Fv7k8a6NmU9hWapgq",
  "key3": "4brbJDeXhtcuEdPV8QDXumUEyWJQRPBDLHnEGfTuRmPqbVU5oJbEBxRTKGAWE39YWqD9AAKRUtwrx18BQVWhFLzZ",
  "key4": "62E8ecYaH5o9sbksvLxaAPxHmUew1vdwAskke63GRBZUFygdswU7PjQCkT8rpbL7BBdCW1SiuT5o8pjgNBxnmhN4",
  "key5": "3vWyP2TRm7VakiopJB2b74BrD4A6DJHepTFkTQmwxLDi9sabr4gKyMxYsLqH2YCqyS6obzaM1djNPE1Hu3kit1ry",
  "key6": "3dZG3CZYyE1voh8T4kyWGv994a7JvPCTDc2QKxcAFW6LsgS9xD8CptBaPcMYX6RSbmCYFLJvAZpgEnMujMM5yvd4",
  "key7": "4QGApAKZefYSfafRckV2Q6EiGM9wmjmwSwLJfwxop7cMpz3hFq5S3Y891ZHG4FhUT4TMWfkQMh5HVav4QtYQnoTn",
  "key8": "4XKDMqz56G5DxUMHZyWgrvU3QGwv4RG6yQrw3V9ozN4mAWtc8imjQfGbJgxyFW7Xhq4ibW6yC9zGahyKLpHKadLF",
  "key9": "2SAgF7f5gZT1UGYCY2kG5zMFLYd9mgZyYhmB5U2huiUtsPw5VJ6VmcsKU41Ah9Es1msZKsdUZ5tYKRJoRYXt8tVZ",
  "key10": "4ehzexpChyBPdXCXXww7cMAAuLVyVfp4jtD8Bq2YXFiaVrCSUXxep8F4DfzmhJChNa4jGVHGXwMFYBHD2f6gYQFj",
  "key11": "4YGotwvh5RYDxBcp75EF2wvfJ5nfTvaBPQZfqtKugDjuzanY3qgt6hhmZ7xvN4nwouYG5rhMMUZNXPVhrc3da9Mg",
  "key12": "3tzgDg2rFFDy7ReGegitQoH23mcfRbhzthyQjGvoei3YM6X9jrVUDQNm7x3H2va8NKdiCUDzknfFBaop1pTG9nkp",
  "key13": "5LKvfo8DGtscaWdHWQGDHFo2Mhn9pUGiycoy48gCjR2hW5Dgv5Hr7t5Pb2yYUCh6HTvAniwhiVdwyBGfittX3BXf",
  "key14": "3MqJUc9czWaDxNiUFtGfu6YbpMj9Pc8vMn5DhAfj1jXcLSuM2Mefyqwde1YuxYsGePbWWYZyS1EcutV896ryvXPk",
  "key15": "3wN4npKdgyo7CypXxUmzSTaUjC8ZPjVXyC6BQxz9eY9oV1u6oSBeHFWZeLBQxvBt55gMrTkRpEsbEaqeJ3UZV8rz",
  "key16": "4KGa7m5qyFR8qjyiQDTjRd4RHq7R7Hx4V4VY1byBZenwtLKFDhzh2rcfNZK6BCAU7piGARMwwr2V1wupdxmdNkbF",
  "key17": "43GQoDE1wjQctRKiF9Z3k7j66EwfvewGEjjehN2Z1tr2yvCVUXuWrWdPuV4bby7chbBMhbeT2JagAGtxsSR6Bdrg",
  "key18": "ERUxtHoabQvZC8YqAVSLTwy2duD53PjQs4zRPKHvdyymoPwhDPhRJHjnvVhfDXSo9KSjXTdqu5kEAfxNxR189fZ",
  "key19": "XWV8UMYMVMzavS56EquepGd7SVHwfUW5j6E4wj8MyoDrim6rF9khQd7m5ef1HDuJAsDFf9GZpqaBAsYwNz1niZc",
  "key20": "4LBxWrs41m6WXieQbpXrjG3XQjAWXJ62tGU4H57eLbjMhHNvBZBSGy6wyAfRFDc7Y1zFj1nz94irWDEuSqRoefKM",
  "key21": "iAVywVWha6tw3LMVaaPHWiBQp1NQNjk4wHAZkQY5wpmEfoLenAZpv4vDdHQ7ZXnBB3Zuu79fkxvcF9tHhFC8hWq",
  "key22": "5z74N5R9J6xT5wMZpTnSKQDWmSeC9gwXqq9kn1PtxCQHMjyDJHtYYniUSSJKrx7hi77xWb3Gt8E9s9z9AzSt6jem",
  "key23": "3r3Jbetxnf74ZbmiNqraVUeAzVEKSNVq3haLkA2yAy3QhV7cPLwsVNkGoqqHJmyWyQfpeMGT9qLTdyVcj6ReE8Ra",
  "key24": "3ZXFbVpmkv2xCTtcXRYguhL3YziRmy8M556rVLa8wEeQQSdpwU3otQ1Uuz9krcLaVbc8SZQzZUDw1gCQD4SD6hrT",
  "key25": "4J9c5rCz2iQYzkTp2qCNBrgZGdxrERGzsove2FN6F55iX7HJemarDcqiPckB8NCZ7HsPMaxgz5JsWNwLehNBYton",
  "key26": "TTi57idDjbcFCstFDLKKw6SuvUozKyFDQBAa7oBWEUCsAYXiimCxAnkwgPsaEhQHCvsKrTYTdeqRyEMp49y5tNx",
  "key27": "2xeg6rTBD2UPrSUBEakVnBemku5vJwyagouTq9Pf71e4GA5LXmwW1jjEZXfiRgx3oiWZhK8bX7x7Yq1iomxy4WMv",
  "key28": "2vzA2kUKFEEVJCPBX46LRaFSPC9M8ju9erPD2xWmdpzwGRm2cBk5jTc6XKpxjXrMZVpVEgcCBkVuWgrX7nYTTdbt",
  "key29": "3Y53XjgZN9bnjESBm6RRP5fKXgZWCj4cU8DgkeeiHsiRsqVsuHJVeFfQJRyCn6qGgYLW7CcWtNhsQ84z9TMa4GiQ"
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
