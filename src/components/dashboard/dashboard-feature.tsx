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
    "LnLuAQxaXAbhg1jwQZ2htbJ1hWtEF8ZRdchC8o7XxSqShzANjuXeRGfiP9ETcvFwNpoefbUfmpLC1op6chhwXtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uRm2yAoBSKtgErVVwxrdoB1tSJSFs8KAg7JCsFzeL1iYMNrXyRS77YKXV2NLFFRjBmtgdLzjvCvcESFWRsUanpP",
  "key1": "4duARHmr7cJcgZ13WoZhsSNTQq1NJhkT8Z98p53PjoQ8DkbfscA5GoayqoyCErHv8M6eKBG2qTm6Dcrik9jcTKZK",
  "key2": "3zLQpKAmeCNwH1Efrm9dmWkmizHCF5UnRApnT8oEGHtvELwxU7oVJUWQrCHeTiDonX2SHrpDptWNfPPWbo1MX2gs",
  "key3": "5zJ4TRFBNvjzxTsB8n6fMknh7ycme25SfPakDgJcvzhu289TuKvwf4mrnnZS16d4UNX4YocdPX3qrndCxvdZx4Li",
  "key4": "3pMndt719MdgrstWWqLaUvt48o8goAkLV5ZVS3d4mNJx6ocu8hBDmcCj4z7TGHKiWggVywVkfLZWAA4m8nb7bxX3",
  "key5": "FcE4duncAvQYVwNE95rb3DwUmUaUQSNhBbjizDHrsDeGPz895paqZiyvjqsmxj3jTEozEAYbULAhx52fc1vQ5vP",
  "key6": "3doZPKmiHcErQc8XHmNEMkVhP6UcX2RBp7rn8KK1meJw4Gbc9KS3GudUqyWaxmNv5iuNuYU3zzFmoMiZsD85zQyB",
  "key7": "4NY3XwgK8ctPfruQW5cX7Ho3VGAo1fpXX7kYzs76qUnTtpcRkPQp3yKPBgqVffEiSZuYSK4j9YGJqEZWNsTxj8Q2",
  "key8": "BHK5JQ5rwf9UwWjuSaAUTQN2JhgymwXSCbMWknaJQBLttbH7CTbv2LHMT33XwQ8T5DmTfdd3Jn3BwvPrabAErgS",
  "key9": "4UH9A7hBei7ATRwM87V7GUZNLx73JucnBKMAxJRxE5xCaeVNHe8kTfREjLH2im8BqhVFaBdcCtcdgK7oPvsidMcA",
  "key10": "2XgdGSTWurTktvkQjZ3La9AkCFquSXWvenwFwpsDywpLgmfLnQa9gEhiFEBEnEcPWNPRNVkmdoym9FiKMj4Sjr2h",
  "key11": "21xLFBioFHbngBE4fCPLbtR34CWy8QxfcR6jNQMqvdF2CnKYUj3M7ysMKBVz6UT6P6F671n19R8N3fPBS8qR3qYn",
  "key12": "2huQyfkvzEZGt5UJbR2Pb183hANB7nG1M2HBx2fi6FBUMmqgRyiHGgmfG7kHVWj6gJYJQt8TLQaSwchcJbkAuttY",
  "key13": "5EaWahLLdVZiLVBxE7Uzguadt4NHGh7V9JpxmsxT39xTq9a6T7izm6h8S3eYAf5gKuJproVwYaPUBSBnCtv4EUKt",
  "key14": "3yaK6ceiApNGdbn7XtrfaVx73q83GPHkE6zci6RJ6PeckjooUsBN1PSHEAdFd8ZS6e8MnNj2VkKgbxd3NiGy5NXG",
  "key15": "2rrg9MtGJUGxqCZQXZAfmay9w77LUbFa9jK1cFuW2oJHC4yRMYsJN9dbz4xexvqGqC3qbXytNZkbhxxwvPqDqkng",
  "key16": "3iHQbVJgttWaFkn44CvUTrzbQsPvyo2FY1wqiLXr7F9fQEWXiP7oBqP4MwsNA9GBTGWLpw42LSpi4qkmnbUWWSLi",
  "key17": "6q44YotCZftLeYDexVrBqh4bgGctqEE5pemD1CdUocRDwsw3NeNesKisKS5BP2EvqqABB76UczpH41xMGY1uLVH",
  "key18": "2J2VXoAG9dCrbvWwB1fasPEtUM5jJ1C3in4GXMqGSSzcgRpCEoe4zLJPe1ADSDsgGbsAGQ2EHW9dm6UEqgqc75Cn",
  "key19": "5xejTZxJdkumH3RaotZ7fbjiRrrU2ZeeSYyKei7XXNnm4KdUidgKLstiuj94MGXfJ6uB3fnjfNnfG27vbcUUFkgH",
  "key20": "2aHN1xXUxrhgEzKw9Mf6MMmKA6XGJ7vz7ejHFUUyTdBbCtDQuoX238j6GTkHa5w8cUFHYLLqksuVVza1kbMXjq8q",
  "key21": "3WU62ge6bBiZ5za6FYkjaFCu6sCspPNeWRCm7jFZHaYhPkRHaCnEyqqVmdZmo75zmKBf4CPuxQJkWx4dr1RbbGdU",
  "key22": "59Vpzjg2hupQhqh1XvvHA4XfA2J4K562mVHrCSQ9uvPPJGr7dg8xCQAD4Y8RmLVk5cC9VLNyEAuGXxj9mfeg4M4r",
  "key23": "43vYnmsZA7Ld7NL5aXwaGQaH41o56X5jzRDso2dkZ6CoPX1C4EF4JYcCX49ZtRcyVxiYLcLnSAFAgoLPHVRr2Cup",
  "key24": "3hXofQrDJZ1dzuAPouPf9uaEwbpAazzeCe2EvjJLxeBfD7gaJHMchKhvaYrUYW8GDkXKKPDWk8wZeiSV5uB76SMG",
  "key25": "4kGa5mDpTiyD7H8QQMx3KmDfsisXX7S96AHAsL7RgsxhZD7r3iZu5qKcRg2hezerBW3Di9jGmRK4LPwte245cjgJ",
  "key26": "2JosWT7zBsJZdqNnMskwCjcM467FLZhCeRCuHoi7dTa8pr1WZX9xGmqmYrW9bYpUKJa7TyQVBUXopuW3HU5cjLkw",
  "key27": "317xe6etwzgqtkhgusRGj1eaPj764A5Qf2SHep99pNgcDscesQaumjgJEb3yHFwWyUL3aht8gk7h7YcEfo8ZXjJh",
  "key28": "qbi6eS31d4WG7obESGDM59fWuHTrJGcfrqotJnmWRa2rgfkuik2Gd81txDt92jLHgKPXALjKExxZEWpY2hPST7T",
  "key29": "3qW7nbmW1LfZ6wC3RiZizm5V7dqE9LTVEMLTQZeSDdZz7tKpJtLjgVHis2fFzpEazpmza2zt4Y6Uj9y8LP1TZtz6",
  "key30": "2FVHPHnJyGZs7JUfcaJ97nR4kskLiT7kkotiDdrCYAvGsUtTyCWKwNVsAyPQdZ67GTNK7qjLdrMe32jBQeAYNMuk",
  "key31": "3Qn7pZKZgNrcFNpMGkqFJuVCYGjqf6w63kdRETPkyGmnz1qERoZWp4hUFDiPhNBYNQHyLBU2va5vdecBXFjekiYP",
  "key32": "2DTnqYgprdP2rYH7C3GnANG3ozmh8QbgnG41ZjjJsKEzRABTDyzUYimriuLbyiAap1i3JmwaV7PMfon3G5H8ohXn"
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
