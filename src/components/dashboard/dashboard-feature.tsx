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
    "22yErgGuD9atxdiFYH5oELbY3Y3goAHPaC9RMA9s8i54GHrYAnDXyS7ehjAgmCbYoGa2Nn14D1eqqg1DWbTq4jqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BsBvkukUuJVqJJqja8GBqH6MG7USggkWnqdGsDixHEgLz6UG11fBcxpnQNg4ufXoFkG4W86PPWyY89HpRB93zSM",
  "key1": "2eCwfPWxpiVRhdXok9951E9ub4WD5MkfLtWn5RVHNEzB3wiFiXKdhTQyCEQ4NvmAPVWfpzVvNyNnL5rz8wLq67JG",
  "key2": "3CczsT3NQbDFKrX1MFUB6rJxid3J64fynW14VhvamWGi1XhYEndkGP2UMCRidzK9cSQTRredKuAQPyMT9QKxRP7r",
  "key3": "33DCQa8AEH9EPcUuewi74Bxkbaih3ZrNDK6tLHfeTW6Nme83qQDtTUhiykJQervHcSZYGcVo8oCgVmuVPX23NupH",
  "key4": "5Y2kYZfNzfovZy9dWnQvRjh1m8cVc62W3TkWxGTUnc52oejs1Az8ZsFxd54yuLieR9vjrinWg9UQpp5wMgzqjmRZ",
  "key5": "5jmcR3ZXbuUy3YJyvagBs4A9qDZKcySh77dfriqe3c6NLpU7APCpyNsPvrsGM2hS683525wwFjfmmZtR6dNNm88Y",
  "key6": "5jQQE8eUvgqW1AaXxCR4jCeoSgW1xpcTeXbmcR3GpiCq7xmE2mKavBvxLSjXtjh7rewKLn9Je1wDy5Up4B7safM7",
  "key7": "59kd6w2QpBipkV6LBM4AxW18aJsNtwbYkx9ZUNBK9jobEuWzrPVpWM7XKPEjY3Avov4P5rS3rhxepkTub5hoKKg2",
  "key8": "5jpU64hdvSDxJSqFS4MHK888FRRFF8Qf38qhDyNhuXHeVjANZVoyh61xmc1ThaJqnNwg1VbzWeszSHGXbBScteDi",
  "key9": "B1Drg3gXKJ76kMpdBSzgXGU2ge3cdv24Wrq4AWBfsHoGZNqnXuCxhpuv8KubhazU3orTf5JakWSHRECUJoapcRy",
  "key10": "SnjCuwkTG2RabFFXyXDcB7AGMxHGxNE5NR2wX9ipXyfPpZmwXfcj1toNkp4peajxPWkC66DWYj3MSKJnoU5nbsB",
  "key11": "3orzjs6G4agCUyhQ35bYAaAxdjCeYpXpTn5KruZMnbjDkF7DDSFYmnzb6BDBzmxTADUP9A3mhzMCJuhTdtVEAit1",
  "key12": "5iBoUdF1n68PQhsGot58HGU1SNngfixpxUwFvdGEojAiCwcoMdwEShVkSmnZTLR8i2JCo3zhDBkJa9nSKf89HW4h",
  "key13": "ydi5mMzpx5mtHUp4tcYVXqTeQo5eeQAg8MUtaZyBM9jvyhmjnGU4CfDLWtzSCFK5q3nBXJUUVQBYyQDnQ7nWnSX",
  "key14": "3k1LdqySDV1DfZRWQmtswmUvxF8KVt9Syw9RNLGFqXPU4DChU6mVNe1uYiZhPzAzfkeXcpDf2UL4FE1PmpBe746s",
  "key15": "4yRUQ724CR2f2MeR9emvfsJ9VDWySnXVZq321weEStXN48XyQzoN9gyd5a8dL3bU5Sv9JhnkCAt8HuXeUYF6WQhf",
  "key16": "3yEUxAtnuZiyGmuJQbJ4J1m3hi37iKmgE7MWj1JMMjQzjA4FLuEtURuMKixt7qwi6DWcgLEpRNcF3bhqRzgokQfS",
  "key17": "5rKnLC3ZdMT7Z7jcDSJDrQuJTVQDsGkg3uyuU9LcoHPGbjpzkhVRjejmQwxBWUqbjYW2qt6azP8nAbrmrCGwRTiM",
  "key18": "2LXQoPfKwCDahp7vPvbhKHbuCDQS9Dm7pjBSUnqK5PWfHk4YyGahgmHSw5xa9ywwki2WkUKT2Ae79NU6TXqjotSY",
  "key19": "44HpVtHEwkMWxVGku7124vRBpYLK5kbqkm9wQFHP9c1hH6fKtkJC8JaPrfkoCbfkbecQYQkrW1yMnUk4uBNbJ3AC",
  "key20": "2JXnCbaYBYupfF6o5yLsXefDbvo9vy9537H362CWTJ2D1yKjJ3UGpr1JdCxjBx5fqPBF9729Kc26atgKPfcEcGfE",
  "key21": "3mHFZBVLxFziGo49ep8G3wyCpb3Ly52JtT2cwXMXRYHThfSijTWCigjNWqJLHqAi8fhNf6yWimgYGdRGmP73Xm9y",
  "key22": "5RcnzivbMuptmHG4ubGYXzd4Hk9855woHM6edyqq3EYj4CGZ57HkQ4vYRo1NSeSsQp2EzuAXpFKG1jFfVXPUHMx7",
  "key23": "27gZENbqsn55aropoV2C2KmfHq1dHWpDfy477868h3By2PLMz37ZUcNV4aVyri2jGvgRtkz6kWbEF85nBr4KRhDA",
  "key24": "qctwDqzDb2xbYiKd1rLufwyEgJHo2SvtSS5y4vrdkCGkbM34ShzQZxcYTFAV5w4LmvnJJDocxGAWJtCr5FVcUyg",
  "key25": "2CTBbuT25fDDKqPc9nzBYFyE34h1yBWR5GotH3E2ord5Gc5Pakxb3CsMGnedbE8VHqMDecsWoxcu6SHxisnAxmwb",
  "key26": "34i1UAxKA2oV4Dwifx6UHMEmUbuWX3xx3suE3wkHc8EjYvZNu2fdykYBEUJSx1iNyZPr134daLVfNeYocYW5SL9o",
  "key27": "26irZE7S4uceWi3J11RW3uGvUDbP8bTXLUuT2APSDYspbq7AaWsmqNDnuy9L696dmyRBWu1GPx3LKo42DPs9KE4y",
  "key28": "38yry4UTAi77dEJsb8PwpKxEzkDZMwN8b6gXP3cP5VP1KuiMGuzjZgmP9vqYwaBrf28oWKdqVPvmJoW2qf7pzbM3",
  "key29": "wCEMFRwym2rPsnfSHadDWyitPJC1GGZ6XDHEjT4nk2toAukhiW6qPv3j3QBAyfn7cT4ML4LrKNWsZmiTNhrLYn3",
  "key30": "35K8ejUrLLLvn6xtRvXpGx9XVtjQuV1JhDXvoUqfxpHSeRekmFW4xuEYkEmLyVdHsbrAvq8nnanD1QKAebY9KL3G",
  "key31": "4AZZWLTH8wi5Rbzk61stn2UeLqKz9Md7ZdpM9KNA3cL78BumYhbpqeyQoyYFDeSD6jq3kxkYUBwKNtCzMzuj8EiX",
  "key32": "4iYELgqCP4zV4Y2YixEsTWoAyHK5QP4Z3iQby6gYroDjB18PtQAzH63rgkQtu9aF2tR6pdVtEvHUbW8nULaJcLU2",
  "key33": "45rLgMZwmbEzx64HdLrSQVTW51UqcoCZP1dvmvdMarChd36Uts3LvKPTUDM6pxbpWUjJim8HSji1Bsu44HYD4NaP",
  "key34": "3meBVxvDsrH6KGTp2nsDGWfBcP8VAEBVFFocWR6XwD4sgJkg1vUtixkf1zmhpRdxwP1xfEF7AFcJM1gzZQ1pCJDJ",
  "key35": "5hgXHqp465gZX5G5eMgiT3erQJh9y7pKyBFWPUNkYQmm1E6mRrVTcjP6ZhLwq8r4eGptL79a3FuarzZeG3vuePe6",
  "key36": "2RHmx7ByakSpAC9ZdDX1gdwFELf3dEceWrbybarZATw2eGcVkyakjrUkLRnpyuHgSnmj32UcVponSf1FimevTJ5a",
  "key37": "3TRYaM3Vn9wmZxNcgnD4NXRvbPj1BMcNBwGBqBPWjKQuuRsb4sTWLdUHPa2SiKYunTWsDSM95BoqaUaynaMHAL2k",
  "key38": "48HyfDmEKJQ87mHXyinP6Gx4fcPDakx9iiXqnx1wx77JH89dg8kAHCY1zVYisPHpib9xNqfM32tbcqyUFddX6WRr"
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
