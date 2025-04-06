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
    "uAWm6Nqe1DMgsJ1h8cStMtUtDRF6xgZo2GL42vHbK86qPD46ge41epuQkQMWYEJ76PgZkPyyKXps6mRv6kM5w6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ETWTigW5kECrDCFUHQydB9XruuoW3JJ6Pz5dKFe5TSb1oZSdnpeUquufu4JZY5GRWyR4bLVhoY4TNd7VR399GWG",
  "key1": "6hN5m5ks3Ld7ZjMVN5nGVAu2n28eUFksFcC33JAo423w64L3GHVi2hP4cDWVLDv2fzMP3ZbhrG9CTDgv2Ne4oWr",
  "key2": "nF5ovuV3NhZg2ncAcNR5EnKVf3iUxFNTdEkuoVzs8bfSQeW1rjZL8ejEfV8QBoiofekt9m9JZmns6GqPdqD3VQh",
  "key3": "24NDLzWX1UdbFMoNoyBXsfvxC2HJn9NpfXteoJgAX54sh4FRGPDjDHZcZorMq2zCM9TMhsrDKui5vkVDCdQaX1b9",
  "key4": "3mHiwMeYLrMwMC7cLSFRAhjgxV87rZmf6mT5iMLS6TJDcgMRjZA9EdU3ZfW1hakGpFD6GwFZ3RWzkc6ZtxeerGtP",
  "key5": "3imvJnnyiptLzuEGpPfkyLGkSo2ZasdxnSnA1r3bJ5etKNJ8hERdvibkEfeCWSA8dWRMt2fbdbC88D9ad5rwLboC",
  "key6": "51kpfDXRtbYPaY9KCVVrMe8ZEdATopRi75H7rxZ3gUka646mndm4QiTvR6cJPtpqasQDLQh5EHMKx18PBfYSHAa9",
  "key7": "4TPnxaubBsNdLBMsccT45VNHykR3DPPh8QLb7Z4rBjZdSwQr8uLxA43FpKvtnZy28hX2BkaK5ZacAHk5KM93bj4n",
  "key8": "2h5YJe35puL8BFvNzY7BpPLPyjf8LQY2wjq5WQKThF3tD3rPQHYCZBLJNv3794jQA3Ea13nqsc7a4tEkXiUSsbbX",
  "key9": "5JxAis5GcAxQsc3kgoN7M8bJQZPKeahfZT5yiTFdN9a7F1KPnY571pWP7vJ5WEJuAKiPsU63ZALzUr9RsQctE1yF",
  "key10": "4zHmTNPTv7SCfuzTRmQRSvKS17jNEy5WqRJ8JQbAPVuZXnfrzk5poRREDSLEEKLEBDVcAZwPrtLPebqxcEvF1gwD",
  "key11": "3PMTbZMbJ6bD6tLYVqpJ4Vjzar7FJjXoVig23HyFonNKFKFUn8722wa8KkksrFQ2ZVkEertkJeeHJFhXG1WKTKko",
  "key12": "4qzAhuU96hEYSDUW7LekdptKBRZLdfwN8PzbYKJdyVfvnWtAL9E6xRffGKVQB4wFyNvHmQcFiH9YkmEk3dPfX6sr",
  "key13": "5p7H9S24Z1WdU59uLqqtMSpYjUmCJf2kBMdJfNXY7PWhq29v6rBd2AoRm4YsQDo9BQzcZTJu4CD3Pifv3yrJmzsN",
  "key14": "4Dex6DksbetAwdc2TnsghLH1o41dpRHpqqfAbHurwS2zThpE8rEtL6xKc8eEbs9EcqLgRnLQX2wCmgufNG29sTHa",
  "key15": "4U1ZmFQuu1vRaAeim4P3YeLTbbPKXtCCTGZjTriL1Zc1ibk9TjYAp7Eh18B5WQRQFxyfpuFb4D6oVRD6WZGFXMnb",
  "key16": "29aiQ3ScbtCyeRk98XJJPy2TeFcS912DYXnhEgfaJL9KoGvSWbWsqAkGDEPCqVS5gRvVc5PyiWc5TAKJTyhLwxsJ",
  "key17": "5FjJ6CWEWrTZbt2m1iPjDb5ADjg2qAvVfEhaKrKB3o43ksCFXPtXxFEiReXDbTPwwXbwJaiAbWDsnSZ15rY6qDrX",
  "key18": "5C3Pr4rt49x5Qw7XsqiDH8EFVJ8tehWJvwmgndH9XgG6wCHQMHevrHWWaMJ9QPv1JVzWvqDxqbGkVAteHX8cfxj7",
  "key19": "3wUjqsLovZYe7ZB3YvyUNNmRkzGQL1bPfudsVnFvR5hvoup6zNkEUgMskjLTwU4Rg8SVWsy2haPxrN3xEdSJLrg9",
  "key20": "35oYp3B5UgqRrnXCpDtB2V5gxv3meKomzJB5PTJEiryVgksJ8rQqpHnGRRDFshrhPwf8EnCnW8v9FiUgnvQqaF7B",
  "key21": "5DcXKg3Qn127nK4ni9k3xpsQi773jJPuCXKtzBsicLZ5GLoJqb3g49d4spjeVVn4fXfTHYVux5RHWWb9duaHah7i",
  "key22": "22JTQnimQaqaDtjMrmavSzdDDuPhLv2qqCVaA1TsdB1QbYeTTW435x2gJMT77uN5GEvUVrmdDoDHMooMmGaKKgeM",
  "key23": "4cgM5tY5Vtsb6dpdh7d6Sd7Whq9G93SwzhpU5zwEDSQkufa4UhMwQVHtvYddaRS121VAwrExw7RbfuVLiSSf24rS",
  "key24": "38dJ72Rn6iFi3ZHMQwQMLNocg4SitWfsDj61qPpKMuARb56cpbvx2b4C3WMmmeKXYqc28ypqXX9NYoAzDs7ryM6h",
  "key25": "3A5D7E53bBZHw8Gk4oCBBYCBUxQsSRVZCTpRXcW72sJzZz9dRSYZX96DxnaUhheBGPGh4TiLjSYV6sPqTBUso27w",
  "key26": "uMrAZqkUBeakJQzdbfqJWZQmVnnGjVZTdDE7hKuinHQGWngASerVdMSTWhLcgy3QjCUwvt5bWiWMNYTf98apV3B",
  "key27": "4vb9YJhJoFoNgax3ZuTzrTxRMmjjHyB68Byu4nd6S4myqMyuFDCZYbH1spkWoWMTeUftBjbyfKY4yQJHjemcQZiR",
  "key28": "2AWKGyuEouqH17MxY4uHRiBRLYBBhFW5UKCNkMsX9L9LDMHUBKLsqj9spHM3uWvz4qaZEzq5xgLhgNbzc3GFVgtu",
  "key29": "DeAVKCB3jrG5EhT9Qg2qJCKhW16PYZPb4LjkLDWJQgXBrnHAvsuuRMWGAqyt6rS4YSWbE8unveZ8xAE69rzYg2F",
  "key30": "4J4bpeC8eYWiqT29niVGp9CGAsbc2JrTJc8PcCtrogpoFbFhGa5iy2MLs3CjK6dAwKGDjCgxJzi1Zyx7iyBsrq5X",
  "key31": "5AoyxaV9XQFM3reUjwV6rmCbEArXW9jmpcdTks7mCMDpKhjx9c3SKyccaUBi6hiRXZg3hDtFwsDgfMgfsR65mDAx"
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
