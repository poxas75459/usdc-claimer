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
    "DQSABFE5uQxzTroBKwmRSdPypvxyf1kP13X1WnGaaFJ4jTEGLG2hyE64DYRmUgpvtZMms8p5zKv5GZQFEhMAcaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mZjaBNnyDpUcEHdVDxJTZWGRFmK6ehxtDkULMYdoWcB7YoZ2Zbxo8WCWDq8LfnXUGVGWb2ckpkc1k6fhAkwXhbi",
  "key1": "5a8gLu5VkeNg9uo7Li1YJXS4xsRhy42FoMjpuaLkfEh3DHttsL5vGuepEmVFF7SvaqNybdSPA5GYMo3N4568oP8e",
  "key2": "4ViSh3ToGu3MbYvApiimaizPu1v5yZKccgFdm65GbRP8txXithBUNXmXCeqJWU2xAayAXxjAHAiTZoj7A4DCgLte",
  "key3": "3ZyKeAYNwKarpkXRD7S8Tbc6YdAU2my7C6e9AY5mScLjNJyn4bJCAX81rrpvjvfaUmBzub974t5Zcfe63R7MSh9G",
  "key4": "63Gz5gF1oQ6P8RUKHJFioFs5rnDJo3qVGBwUgeEDKwirQajinjw1JjrFpiDEax88CsmCyisTDp1PB8K8kLhQ8PQq",
  "key5": "4UooGJU51zyLhY9S9hrFPoZYv146kNZHwt8mKj3cij4iRvXE6QcxP3E4hVRjBaV5GY8fXfpBxurkBGBTWrtXLoH2",
  "key6": "3gZHEFVW2HM2QACTTeBmpYT9aC49pdjRg419RpHnFjjWYmCNCTrNAxYcJLSMwUxiTYSCXsaAyf8RHBnGQF3HmTrB",
  "key7": "anE5xG7iQVz31arJBZfKueBb7HJZFrv7HiMLEFMUB2z9xRQxasGFMMQcbAxLN26c21dSYhqZ3sjmLPcfDn8nuUG",
  "key8": "qGd5dvVjUUmUN22yng2Zxomoz2HARzFazkhY9MN6Kxbt4sL1XgmsRmb9vspt2JocXqwug9t7onp9bCnr3S3xqXE",
  "key9": "3xSHxz68mjym4QyeVjDRQRDhtGua1mAomXB35jL6FJaD5TnCEwxAyxuPXwBDun1DEpZ9eyArGrdNvq4FhiaoVxRQ",
  "key10": "5ugPUAWVsGJqPKUVxwFygbsGyrH4mauMEkNmFaC4Cnj7fqzrxyYh2kk1xPwYC9FMofSyUywpPZV9MhGnt6e9teiz",
  "key11": "FMJn3qBcC28CPBpJ7hZk7fU7wdK4Gx21S5zwYp5f9mCiwtiUFozsSBmC7KPaWtsR72XctrprKBfuajQJa2YhWUF",
  "key12": "65GkALezdQ1zRGgNWEJa7EdUKyqvSSDVvjCMXxzQR4NSeTrhstBs4n3CPSxE3PLdGUD4dgzpiwydAGYXbPJEQ9Qq",
  "key13": "5aJYAZ1Uh2JioVeRSfqeWaWBiyQYtYTstw7Bx8HX45yL99LYf5MKhnwTv2dnK84mzEcZLnxr81jv6TTLNniPUxpc",
  "key14": "2dGveh5GGZpXXcpmPRpgDfXioBSrosmcd5PQPSh64jvAkfxucdFchGrQ1thPgex1K7Vbc9ESShEYa4vwe2U46jRV",
  "key15": "3P3VanPeDQX6anTYvQod1Epm6hz9xNyVfSgqWeyJS5SCMzEGFyhFJcHzTG2RchUYrYb3LNkREYbFTM2B14soEAV3",
  "key16": "T5P6THXJEEi4GgabUYDap6VWdrvfJNQok5FcEeGBjVti1Bu1bRUXWPemnaynmMdQZyCvjyF4q5VHNx6XCqTyfHf",
  "key17": "527iX8r9S7ibBEZ9Vo7HVFi6HU1AiLsMYLjVLw2uALyDKwHKLpj3NeRULg4Mkn29juzW1dukEyrZ9riwTj1rVXU",
  "key18": "4qPLVv6d9sW8cPvR6cWZ8a3ogHi1Kx83M4ntCHUz435CBEqzYzSj6HEooBAqJvgse1Ug7qG4TMNYZPQBM3ja12Tt",
  "key19": "rjHRkgVAfWuDSwC5gdfgQefGVxwBLJqQG4FiWT4miK4DpSy2yHFEbNx3syQUY9WedQHaAPE4hTUxeTMeiE8v1ry",
  "key20": "7ZXs4Xzab3xNkUF23sXw5sYWw9DFyQtZFY4RQriP369BqvhzibC7yGbS6NYbRXhy8ad82NfufLVf7Zxk3u5CPnw",
  "key21": "3dX8u34BYcTaJ7jfkrVM5xEXLBa8ygMmPgcRRDKeZTmyy1N2NmzoEY3NKsQCAmbDi2JkHnMRaTBCAx5AhaQmGok4",
  "key22": "3sEtvWpbBvDFnZpcJwRYAzXzE9Nio17byo38tpAhQHsiuswQvDXfuEBFB3F5Ej5dLpnvgXJvHZMEWrejQ1axibrS",
  "key23": "4uQGHxpcHhtNjQN3i4Er8c8N34TMRtWr9Un2tfK4fciF8YWjuuwFd6Zt1VT8ydq46yKvYRJvYeyu8NLyfYBPRPJ2",
  "key24": "24fixUQaPHeQwLMAaQEAeJkMmgacLs6b2QeXXDqadKiAaZhQB5rKWCbbGYm1izYf48d6sxG9HiNTrsyx4Vk8SVkD",
  "key25": "PGCJD2enzaBXwuCjrkEvT5ARZqqrEu9SxGjz64UyU5u6npc2ixbgYGNmLmHzxuYvz3Lea8919idVKHMug4jpbgN",
  "key26": "5CHbvjXLJrW3KCQWJrLfcrHtMUmEnSGA9t5FpdCHKnCS5H1aRpmiLeqrYcsG5Du5N7SUAm6ziqHNNKTAPPjhDGL8",
  "key27": "26R4fLREaJqSQxZN6xP9dQqYyUT792EJARowdm1QNJbzbrUtg9TydjsfL2hknHfdTomXzJS1qYY2cHizmyd1hSa3",
  "key28": "3SBG4faapQHoYrnSqkGQoHV4FhPz2jNM5VM8SP8MQuwn7hVg5n6vQPZrNR51V5hMKD9fjyWmDG2jir9TBEoWrxMT",
  "key29": "4ka3pFixW2k85NPBTX2HqKXgufNTXRkWGiiZQweGLK2ESFsfnsyaY1nYoA9Tz164SXLKmVajq46pUVGKAJmwgwMC",
  "key30": "NLPmRTF8LR59STF4i6XhLkCPVzT8eqZTXouWkXp5s7fJ7Qu4MwLNEmqyVpT959v6jpnj4whuciZRiVoD4rvvSZe"
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
