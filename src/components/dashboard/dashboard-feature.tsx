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
    "nkTVKHmE1sr9KkZapFirGtoWQZNC8DsdAEMYhmQaWwLVq4LFopCpUfiHBcru2BHN29qKfUsz8UwTEaXSbAoWBCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62QwtXxCG5dwfDzKJRQT8bn7eJu1jeb8wWg8crdcEUekKcUNmAJs3JT43bD4aSShfiGJphPUHZgREh32VtJCS1gC",
  "key1": "5wGD1KC2fapc3Y5ehcU1VCu7uR1mcttadyyQBriYjToovX7YPwEUu4fHGFiUToKXNodVMXFjEyr9JDqf2ir8Yeyc",
  "key2": "2m2cBRwGYwNzvvhrSxDV9PraGdqfZThKrjKnYip9sv6Ah86h2EgAZzmRCWE5PGhmQkWN1XPpFPn1c1ACMjH4euDr",
  "key3": "5AJrj66ZNj1yCtgxsXKz6vYnSEmaDWfjMZNgf1V3kCmNgs9FfjrKbbwHiZ3s2j2q5pgpBL4X8M6KSr8rbEdJDt2b",
  "key4": "21pf6UYSRBCPPPd7SGvvwnRoUzGkvec9Y6rsPpAACFcUSaoeQgLxzDb2k1rW24mfzTJqTQoEWAspyj96oUVRY91J",
  "key5": "4VJcK1ZWjNE1RcfoW6MvpYvEcGDgXoybsSo5A5uxDuYWvEsXZr7QVSarDEbs5ZLGUApWAPQg3Ux4V8PKiznRYSwJ",
  "key6": "4fRFoXVMwnHjChMxZYRyJpe7BSGvaGk8QQX6YYdg3TXxWYWE3UjCfC1WuWTzkEg6TjdWdyTuMT7B7niaxTCJGH4M",
  "key7": "4qZX3VRGukeoFW626vKvrWhBFrBa51C95YC4titQKKhHRq77D3TbBee4LtRdL3fFTfZHHuhC6JW7533yxF8Wjjws",
  "key8": "4LuMX8UrRd9M2hokAzbeoV7uCJHhxxT2mfKLrfWSfZrQaTE8br96RzQvGzDR837KgDe8QUqQyZgbd1ewRqaGEjqE",
  "key9": "5bWzf43LbkJ93YDbMLsEA2NqgA2JMYpYNr5n5LZdNtNW3WrvhEztwvvuJK62afhJjGjEyxeA76GRv5Z8bTAKnunG",
  "key10": "5ApiSX7eQJ8qcaNSr5G86G3o2sJvNnLDzLNnUciJLuqCfSAgihRSGWsHzdYy4pdRqByuees6HsXnTEDGa9bZcd4n",
  "key11": "4syAFjFVhM4CuVvv9hoUCNBEF6tcypLU8X9qJS3EAFrm3PDMs1q2qLDLnnNNfw4eESSqgoY6yRWANKsbHmZDXLFT",
  "key12": "2zLPPB3y28KB9i5LNfwhCWsF1EZQh4y9AvZk8QYYxxcfuVW621jtdBkSfZCiag68ifzvGJxRSFxJNVhQX1iqY8SR",
  "key13": "42TTPFi96XZHxy2Jmq6is7Cm8qPmf9Fv5Qifa3VUsYUvUKn7GbuWeaHZNuJXforkUE1DCo2xeadrxC6GDNpi4hrp",
  "key14": "xCH69X3A8kfwYZbbmrUbb4hFZkqSDGHSgef2JW4sqidYxy2EuNV4N5iE4rwq7DuF6nmBdWnMwtqJHvSXbKSEiq7",
  "key15": "65EdrSnFdYziuCYnUcbChsMFAg6f49VdSbogXJuJ1uvFVfPBAWbfhy1DoPpa35Y3KfDUX44YvWmg7kiUe7NdEejz",
  "key16": "3vdSMubSZAyiBVPWKq349KmjBiRqwyxmzQKLwSDPh4NMw54YdcFAo4F265a6j1kQtZ6ad6Zh7PdwTXV3fXmvfNTP",
  "key17": "Rwj4Loor47JhhvXfiCpei7fSQBhm85HHrjbpg1k5tnx6t1oL7zyGJAiGAfh63rm9jyA5e2fVyJcDyvat6dGJ75T",
  "key18": "5xX3JEAaYYNKWV5GkpukwLGRxTUGWiuaBxdCi5djumY9GFjW1y8SL9kaKLMihkTSVQgmvCDg4oaz4FXy9zydGnom",
  "key19": "54fHkNAFNcCtpkLcaTm1nNH2YBs9oNRLW9DK9d21cadP3QdeGjkTi1uz6cXLvLN32VckzxiMvFq7xtgVcugqV44n",
  "key20": "46znMk22oyfW4ucdu1W8vEd921Quea95YDYWWsUxJgXPzkShcoRD7kDnELLDpSyFiyyouA71mhPaSaJGmS3hLKRz",
  "key21": "55tRcuSXKizAbu8zguu6wJ6J9b11iBTnWj6qi2Xg2AERACEmVzpoFVUu1Ua3Thz9umYWW8H5vbhTn6kyXJA3bWHo",
  "key22": "ezHEWy1KRnkM8kbyeSNyBWU7ei7tMCuXFWpzxQa2S8S3TzkU2gsPbLkZw6PXUsSq44JniaFUGg7ecZymPbsAXZM",
  "key23": "k3YNwXpFiz9upsWR3vZVquRNmzyknPTYMRs3AEyWisqQzRD1TrpXYewp5adn56t4s3rQWwaXE24p1ZAD6foeSiA",
  "key24": "32xmTVpAnHYXCrUJXy6n785nftQFpnWZpUPcKFErN7MJPNLgpeg8AYToJmVt4npFwgvH5haznNgXYN1fVhfMqrnx",
  "key25": "2HUMviLUfMDWY3yfEZbbmk3MoKiCsT91kbGw6SizXvRx84vL3U89xwzKUwFjm78BuxU4DYq1JeWHxGWHDtgr6EsN",
  "key26": "3UitpqPC1zQXG5MT9wuvhR8YzJY7Rm9fGTuVzqAYTi6HxoiSMtzzryEg3f6SepXKPatS7JRBUEsTLgqUWivDR7GJ",
  "key27": "S2dUMC2bmCrnw4g2FZeftZCW17vxHu6Pe3xWgLwShndZ9TbKG5Frpyp5jfQkUCRiqK9xDvuq2BMebGtsNBEyvWK",
  "key28": "6xx5CiAY1VMPKHrheioNsTm2NAd7CqDjdfef4zQV29raXkwNhXecgtaaLTVKN6bcjRY9vZ6riGr78XzoHeEpQ5J",
  "key29": "4tFbhhRGr8J6LHftwMjoDka5ZNSqvK4Yc8ERpAHPgGbsNhCEkjmBEMg1oXmLwBzoihwmwctrzFv7cU7A36DUDdHA",
  "key30": "HwLdHvUScevp8NrQFu4zTfrzJ2S1wJompD9LmW272mc8Xe4jfLELLj4Af4ggPnz2o9Eg5fzfpqpp35sMXnuRKZH",
  "key31": "5QdG1twunuLhsYNKGNb8utbnqFhwN4bveEuNPAwjDcnYimCbCPGQGcaknKPFGK1Rsc3PWLrusPfGNWQ1JKksr3VJ",
  "key32": "3xEZZL4Yte9gYCXmXd7VUxN1Q9hhxWpJbXgn9yRLXc4fUM7JwuiDGq71cZJc1u2qXA7k46QqjoJKVRmA891EjzkR",
  "key33": "2bzxRexAvj47RyPTCZJByMAScHERS7MDQsj5PJE7YYEo7xXH8aVWYtEaf4YYLuUU3BP1YkTffD5q5ZDB8wQgsJ55",
  "key34": "2GLjzT7Nmb2RMb3jGTgsmhYBiUyhzmyCrM83DGXXw7a4d6Bt75L9k1rmhzqg7hf9F2vWXUdCjPKbrUxzgVuXt2aV",
  "key35": "3hph9cSrMtpWCuJWoDf2tY7kDqC2USmHXgotmLztoiYHVJFKn6mBTLUwGvotseMRT66prHJkWypEkHno6fYbS6Gn"
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
