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
    "4stQYov5amTvz4HLLBH1q2iqJC6fu4BtqLJ7GFtJxhPBcmTvQwis6UhJgzCTq77gs5jjQbuu9NLeqqJEoZP8db5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54dyMXwWVgaF3bMcHoCDGckToWW1HqGQL4zJsaEeA4h9C8y6tkEgAHnW7wH1EZyRi1FJcrezbrwg8ikMvX4fgAV8",
  "key1": "4YxsW98UJH2hDvtBW12vLb9vJKy7AwugtfVGh9c6fXuhG98w2Gfzvyhj8t9A1QhAkMP63sAQqhcbr2hZCHxXTmbs",
  "key2": "5uqom5o3FhGxCcaJWDEhp41uKgBUf1zj43dYGgCjaHb7hpj19FT1KCxo2D5KYT1iDCefAU15LkdBvefUgs6TdPMn",
  "key3": "2cvpobxwxEfy2T5JUNs4SKhBdpo9riJC9kVC8mad1ST7ZetpSUS2zpry6cWN7zCQ5Povn6nW1PWHPZL92siuZ1yn",
  "key4": "kvfK59PVCK7A8V8Qv2f3bjSMSkNLdDqryveq654cMLX8UPfjXj1gXpanEPXBxxinEFPDQbUnufz37eY2gP5QsKd",
  "key5": "49Q9ZjhzYq6XDa5Csc75wHdMF943myvRFRKV9D82shdyPcHHm9A38oPNnh5KjLG2BC1mp7QvWH9hLdLHRu58MSRT",
  "key6": "57HDE78wLNB62ShQdLVG4oCX6gjEPQ5AgE1hdeJYPGA6XLxcBBH1PFHMs7UswCEutimnCqX1ugm8YHwt6Nv5sM3e",
  "key7": "Tf3qHZxTsQk86pvuieW5mWLQZZRaGo4ohGH8LcBuYVVJGwRd1XYGKJmsG27UTBkPUtZqParS6J97KZDrcrLmUPu",
  "key8": "3YLJLq8GGM4zCUePUuqUHs2LK5EgNLJGTB9WdVJ5yxDnQ6BsmpTCmjjyZq7WuQYFzi7kyzx5BfkfUS2JR8U9Su5t",
  "key9": "3p13GLmiDzq2LmgXRmeBAoLRNuAUk639JRS84Gw7YXYQxyS8xMZc3YwPGhURXaiuw9onLJNDVQnMRWWcUHWPaGME",
  "key10": "5s5c2ZU3dx6DRYytQ2dfsyAdf2n9eUpLAGNFVbBohKUoAPQoQJjGN2txeLop3qGyst8ctBgiMX7ADoxBFk5wgFJe",
  "key11": "3gEWTbqCATN7y6HzVBZ1DyZSLpFP566QP2DdnEodXi4QXLfShDEQsJmd9ubmFF9imCssjt5Fr5JsgRXM1HoUqsk7",
  "key12": "49bZhddwrFgsKAhhek2Mqg2dJF6hqUxpdLqg9YBirnTScipx2h1bQ7u3vtbkvg7HehXTFcYA5Cz2CLqVYQPcNi6o",
  "key13": "58vGmq4hBK9mmPj6rhce8rhjSU7WkazrzofgvKnGN8WjcugquT6qWwSP4EWmahiP4saSjRNcHYWbfeuvjzSqTgge",
  "key14": "2vypAFhiL8yTsHwMsktaB6EjLzczxNoVJqeAU9zLrnFQj5Un6wpURy5pJueGzTKniNoVs1FcXMsuZdHbHZgafrrL",
  "key15": "CLuXRN5T2GHEFRceYQde4jiVfjzvKLjPM6iSt3HRduFtp5VqAGgGb19WpDFzFExZfRSxxYvWH97Lnhh7yWup8cu",
  "key16": "4LLGD3VeVdzkC7NRNcX9CHqV79jgbhKh8R2dCJ8KjVGBsqWeusLuZG7GaGB7VT21UPwj8rFpHeN1Ww67HzA514qe",
  "key17": "623JLaf9xEfrDEWAHcC1fLspYceCiyVMvH43MdYF6ou4wFzTNfW2nYX8YxtQUGZYaNxCDH8qetchwMpPVsU3UfqR",
  "key18": "2vnwdWm7Ac5XB4Z3pFBiD61aiEAVfo6TYSKp3hDYAYGBicFJ8eXeaQydirYiDDmSV8m5KZiXqsYEZwDDoy6xQT9E",
  "key19": "3D3ri7wmo1FRm8FgeariKhhpmcxxCzNVmzKH5isZX3NKhsoQqfQnpxAfurGZNFFawZEmxnWArrrx5FP5iubPMhJ8",
  "key20": "5UFHEZiNmta8LV4hdbHiNK2ma1o8GzAMXnHWy2XSPfW7eMEyBQbnui5dyAVjYEn6GtDS5bAzZFCbXMvoKhgWw7rb",
  "key21": "3xRW1V7wNujsGF1J2QwHca7Xu91MinaEG6fmaYEvSz5qaRjWjQww9BWkRDwpT4hJi3RLNfwcEK65DMBgvHtxGQGw",
  "key22": "5zXS4UBLK9CawLXNsARvTWAFthuK66Xfuejptne3ok6zGd76xzQxU7hbcHPmCPsNkAsWyGUXNkGkBU9nLCRAramz",
  "key23": "zZtV7Jm4c8JtbndMiokDo8hNHiFLy31ZskCp3GfLAMS9ZePCfRGPLHcHeiNShR7jweiVRzUUViqb5tGeMVSyMvV",
  "key24": "4N8yo1CRnoD2Fa5c7T8tqvzkCXUvC9qJeo8ZmgAAhschAKw6wRmi64pjG2BDqSz8bEGLNwsTTpEFKnTUJrHPU8ff",
  "key25": "3QjJt5jeZGtkjVJJa8XbyqGL3wet7qonbNeSpnVzQ6NSHzNdqHwsSAJp8p3xNS2pbqtpXYCL7tTWkRy2bZ47rjmz",
  "key26": "5Xx4qrqnCZeZw1r3Cz2qnX8qhwwBPr4LNfduC4UZfY7qRxjvvsdAz94nj6FCnAzJFyjq1qkhdFLMZ5rzGVhGxPu1",
  "key27": "24Er7Xu8QvX6vcSBjHwRA9viQyhnpsQTfXvhhEGb8X7yX4ubE7HfLWqwH5pEwUkkxzmLtEFaTKPsamRuLTerJUzu",
  "key28": "55nq3f5CaskAyKJzY8z1vcByvAxx2s3XB7VKdnKCFDvN2ux8YTMXs8je6gqFdaZgktyEBsqzFKhCecAMpDrEuXvq",
  "key29": "58Cy4TEtA2NL3EYL6V82EBxc833igbPzAvk2UfwRx6pzX49kkGoFaZwmFnGA65PznMbrWAFTf6NvgEVEAC2B15Ft",
  "key30": "2P5kWR4LyBsswGfRFYZ2aN1HqZ7SZ64M9gB485RxGjRnjBEvDtyDvXkHKmJHx4WQUsjFwRUg9ZC4hYkEfLSfWGKE",
  "key31": "523cDCpojDzwR39BiUk95tmYW5z75WNJex865YTgxmfLmq3AsmYSW1gchf2TwNG4Br68gudzUbZv6fNAhn3xrqA1",
  "key32": "4kZVzdexfkxG8CwuKW2vimQnc7AUy33A2r4Zjd7HcapL5PWNDqEK4G71aDH9vFEiSgWALBsHeZS54GTamVYzo2EP",
  "key33": "4zUkFQjX4Zd6UpdEMxQ4fBL3NYJko2B3vybrqZvzN68aLqbaxvWZ7d6DWVN476ocJdMJysE5YieCsewY6mjMy4PL",
  "key34": "31RvwmoyBQ1jCEGzNDCXyDezz66cC1eaz7QjJ6HDEvfdFtnybjETgPCXPLsFUc2tXt384VdxYN2cjvbrUs1G1oD8",
  "key35": "4SLHxSj3RbMBp8ExvM5nUiGQxmc2nqgGRJEZVoxh1cwPTrnTMFohRAXC8FbStqF9xVnwAeHbe8qv6TgMJ84p7oSk",
  "key36": "5JZcig5s2H9UwMBwtZKdivaCjdDNLhZnQcvKJxWrX775QgwUfCQgaiGKifuhR18UsDJyddTLLnjYd4rUSxyeK3Hc",
  "key37": "DHPDGiUEbJbqasG4ymg7oEDs298RyrkbBuTQS56dKdGxGke9cg1ZkzVaHFKEJcfkAe8NyXKbgCrBiKYggjV9hGU",
  "key38": "oiW738LYusjxSLKZ6xqMQBRnKoP6GcejCw6JaoMnizaYEJALb3hBKVnn45kNgATT4r8xLomDc8G4MygkVxMDc4k",
  "key39": "5Cwc3VxCMQeLfsUxUTV6DrEQmqWbxvPyWqcMVwhQ7y3onv1xNrnocpWg4K3xEQmrsk6HhMacfMPk1yHpGR9oJnBi",
  "key40": "ihHZZ3NU4yWbnjB1MomGjde9BXSsVxNtFybbxF29Xy8s2gJnhTc1UwXiDBvo73pRcpXEmSwjKd1FzcoVveQzgR3",
  "key41": "xJML3xXW1Zt4rg5JcMTQE9KmCVfRfpup45btzfJLFwBZGLks89HpMn21x8cavWxug69r98dx9G3wTugpm5Fymde",
  "key42": "23bNA3VhqvtytogWMZ7FRnWzzrM4u11JgTz9SaYvSGHo13NkU61bqdPfZTvhPR7sGEW7cELhWf5Dqtfv9NJ1tye2"
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
