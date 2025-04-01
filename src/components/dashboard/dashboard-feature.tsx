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
    "5wgcqUBhcTD7DhBYZK71535un4DiqYFWDJnxgAMSVK7pH5CMDm71ZxjEXUzcGkCntKgqBvzZzuDsUWerUUTFLbz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zFcZyL39ejhTXDDKVPNwcPCATWqVaRTnbw38mpW7Q5KjhvqWZ39QxkT5a2ngTbFAWnogNQaofLn1Wg1s8NvFUaq",
  "key1": "5JRnYe1qdz7hdz5JdMDUwUR3Zy93ngQc6S5Xu9u5BVXkZByP4x3g8dEE1zJQrHKf3WRWa1AETTzt975KgBrxxSGd",
  "key2": "4ezntrCuAvn5hjKAEegAo7EAPo8ku6mXjvLkKA2kvKnffeT92JGwsBxZHRnzaN6dQbBvsbu5VTsrkYmRUy9To5AN",
  "key3": "2guEkd6QZNS5rvZGPgESreUBgyzbjMxvxkXiCwu3ZWeEGL9Yhhy7vTjtXDLR9cdURMadbzVJuXg45Rm9yUHqJ11L",
  "key4": "3Tc7ZYmvHM3de2wZSfzb8r9jFWQSPxvgqFKuUfRhzTdSzM9fEAj8m1DAUFSdsUjFgnzKkK8oM2HW7UsNLkq2U657",
  "key5": "5Y5VLSxhZmsmbdGdL8cMVLUqkq96vtHton3ZEmE7k1GmmZLti1vzFG6o5DX2nBRMk2hytivaN5dC4D3ozErdg4QM",
  "key6": "vdKaqf6YGJ2WfEiMsL7x9bMwrBdifroU8xgBPzWEXtgWstwB7QWH3yaZEWqRVzzRJuZir59A3ANNo1GsPieBqc1",
  "key7": "5jzNFuEAQeKkKJ5QTsQYxvnpxHYYs2dWFgeUxH4wSdJMBoCddCtYRsXeyEjDJ5KJuXb51cw6QWF3iFcwYou1Brxq",
  "key8": "o4n1s7AEZ8aU9CVY4gvUR3Xrx9JLfsuAR6kr1UMALBF5URDyoHp1h6yhS6XkBvhUAmjtfyfKqbcGJi8v1naj6By",
  "key9": "3mVpfY8sTSkcRwKjEgLw3h5njQASZJsX3xBzJdYPbBJfbThLi16MTJVJwZyn1M5HhERDXasWcxEiD6cvFM842SUm",
  "key10": "4dqGHCcbQkJzfNMN3nn6ofKAHsQHNa9jX8LcWJkBuSYqcfA1dFxYCPt7oJmku8T9k2tr11saqPdtZyyTE2qBT8Ug",
  "key11": "92nL9tj4tF1aB912P3UdZBXTiv6Epxv4cuhbKMCPfNHMgoRUavYmurCwadGnsQLujHMynhPVA4waFa1F6VXiPXc",
  "key12": "LU9CBqjLWnXvj7DoExP6Evf1uyQZeePQVJKzdP3JmM17U3MHmwnMjymTTjBLhy6npSCbUyxFUkLLDExfCtv6TMB",
  "key13": "2dKYj2EZo9r4jApSw6i2zj7aEQEeiBQwvSMkVhszEJ8dLrvuk1vNQ2AmUTHKEH7SUvr6to4CJVnFpbxX8daGt8oT",
  "key14": "53PKp5L9aScfFUbXQrr8cRDAvVYLws4EWjmuYAbnvcLhotRKMAiKZoRHih6rrfW8Ee3REyF8oAoDstTtpJuDwYW1",
  "key15": "5gNTxp3TaJg1NPXhtWz8reEC3NcBGfkeWdpGQdfKv4fqU4hzFa5pXd2k3gXwVdrQKzH8uJiETrd9XULhcA3CZMNR",
  "key16": "uvUd7VKr6UZYVkMkbT6YCJP52hFZFPtgEAKc1QJU7ZKX8iqEdCZ7xT9oFL42cYG53pC2g3eGzbWLnKKPc91BCPj",
  "key17": "2nge6uRGH9m7T3qhbXEXjQFnpN9RFCm8xU77hX6t46VcjMtm5dnmygPdjzGqUH5HcoEkwG3Q8qH7TRSJRvVELQi",
  "key18": "2jWE7nWZVdQL11rzz1RztDZaKHd7PVREXcSMYsNbUT7UzcsCp6SLcbzhnz6bFYQv6kkytgExZSJ2KbyDta3F9LVM",
  "key19": "4PxXYXoyZvHP8kQckDabdvMiNVLvExgREaDUyRoeej5yQFC1JJqhx8y3gqvUEiUuE8piGJdq36mMpXFUJdrZizF9",
  "key20": "5fpax6ydS6tHFe1kQTmUPZ1qAinG5TeC7UidieqhHpFX5qb5qKhgH7FisvmtRSH747sJnxgD6X6feZPf9M7zHBdf",
  "key21": "J1X9A7E3SMwpmWRGg6NZkiVcRnj7WUK9oVbzPHb4iLK5BtyBbWqJBHouBHcFjwecr2yN18bw4Ut2VCaPUyRd9nG",
  "key22": "5VDNBenknQ3JJenoDcbUxKamcvNmj6X5vs4UVa1VhaJxvKgHAxTac4ffbZESRFrLAzyxSkeQL5fUAFF6EJoEeTAo",
  "key23": "GjpyQonS1NgbSzta3BudfKq59yvDHveDxJrscwUBqpi4AqCvm8GoTUcCMzCpPM8YfntdfRvknvU1UKiTKNfgdJk",
  "key24": "GFgqSHq5vTGfeKpFNFesUBzBL4zMRT9KYnbRc8pJGvuQuuwTpb2yBgKqtrQS9EuwZ7GHGxrtwARr5cHfdCHemPG",
  "key25": "3fcsGzuonkaUBNKAmi6LwofGXfLxtnziBhnYHBucga7C8zqN6zfHuEfkxJZnaPZeRZPJKS2mt5ip68p1jB6SjG8y",
  "key26": "KV5Lk1qqWfUb8KDnR3mRFueTuTADapkLzDi4tZHZGLhWQ5xozthdn94fjKeX9eYDDy5H1pVTJEGeYuKZYLMsqqv",
  "key27": "42sKCNFZNN5499HZ1Xw9oYybKLMccpaemXt8f5CjMwssCjaRa3cXzGnTmDFboGezJve1khnVSy8UM1764D8g6mYy",
  "key28": "mh1SUBJeQXja4SRwpTDWuEb7nBxbb6ZhJcR8gYUt4AivnBKEjB8ycJK3rouuLuHbHRCtzi1QAmRjdUvsChfi6mp",
  "key29": "5S3FQNhPqkQuGk2RKNTFgfruvGdt5QZNSvvxxeCFwm4VfptVDyXNcCynddP1kBGPPoFpXNXWixC1a62vcUWdYPuA",
  "key30": "3aHhrZvwpmCLUQPB1SXvjU6TJRCuj5Ko9ig3F4Jq2CgsWdPHDxqNFaedLpSCTCok4tRZwZSQ3jepws39psUx8o3E",
  "key31": "5MHvsaWRJsPmLFohyXCu1NUvJRkTFDHbKGKsKh3R7KkfLLu6Bb7fpCuNn5D7kbQqeokgWPP3M1CG87sZvDUExmbv",
  "key32": "2k7Qcyv69pukWgNuRyRksK5rFo1gaZRArCUxYNu5L3tcwjZAT1MC6WppS4ATwpndyJ3ihP6cAUHEPAG5wyPL6H5F",
  "key33": "3E2yXjo8N6gS2pcvv8WKmHQ14zHKsYqMhV1mxzy3h89LNUWg6Ae6hFfgRkxyhwJ2K8LpJGyo2k2WYdxmEuMyEPtK",
  "key34": "2pu6zPLHBr3RSXkYysf2dp29gSmnndfMx6SCqEm5EM8sjZPy3ANrrjPVMnTQBgn2yJ6xbLHQx56PjRnTZ178MzQ9",
  "key35": "2RQqERFBYi4o5Mpa3ws6LYRVGuUd1S1wz8iHKeMgCEd1dXoSYwWBbWQ6FNsg2c9PiqAEaoZFbU3szGQzgEJngewZ",
  "key36": "4jpDe6nZrLGdU8mXCMyW1neukHY2fH8roZrQ959dJJH1Q7HwxtjidSo8mN6s8MZMPGRVbi8tpT6s9MVWBe4tNC6y",
  "key37": "2LEbu4DtdesfZRiuYYpfjn37PTBcvwUefjjmNhPH2a63bp8szc3MXkuayCaPzMnBrMJMxYY8iaNhDuzQJjTtfsJA",
  "key38": "3gD6bXAxpVcNFmtMeEcUK52fo1N1n9wLksuGmxacnXs2KxQDjyC3mgFyKFGn984VrHx1EoXpkTH96Jz6FKPdjP3y",
  "key39": "3R7cjM3HgAeexEWphhpfW29LEp3K6iGXCDWh2VYxLcwzrijGaVU16ZkqvVdm5nC2pAK7FgzZB3xRJZvPy2nLVKUT",
  "key40": "4WnH6gqZeRC42SxjMfdRKznsMiYT21QjJDExs2eSdQrYDAUAX6bHAvpnn1uLDPc3qJgNcKWrzXP4HT64PMpMWj51",
  "key41": "Ts5uCuum6YM7y4rvDDEe8tmVaHEvHVFRzUq4aZ2hNiAVv9kev1TnrjFZZaGhR6y6QPvB73tZy9wyqvrXstQU2hz",
  "key42": "5yrMhAyHgGTqwiiEjpuzQCLo8FrhRXSzvHVrUXsEsvaqWcJvKKFomLLtCeBVkchAsGMVxVsKkBaPku1FamfG3Coh"
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
