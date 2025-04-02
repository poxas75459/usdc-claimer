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
    "62K9b4QyEirV8D8S1zzzArnwMFePRVJN9aXhCct7xYXEYviPwqC2qHsdE1mvE8HKNzy5osR5s3j4HMjrxBWivTog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VZ78s8NXBagM1asjWtJUyfqx7owHTToe7GobSTVqLEgs5XpdeBYkk4T95UDBSjkx5PhFiY2Vr8F5YoAPWRKC2pV",
  "key1": "9Yr78fr9pRqXnjnPdam3Y2hQuyAzDvCR8toz3quY5wSELxhNJocP3noyvZ1qtRvpChaKuatWeui1rM4JLY3cUqC",
  "key2": "nUWz1VoSevEpEcsWFyvP94jD6XX2z1zfoKFoud7Hjf5RwByYG9EHUnasG21BYwbUVWeKSBj4FwQX6DEe3Ax9N3V",
  "key3": "QuDDstXGbeu4daJYLJKxP9GdeAWuwDAoxQkRvAST5wBsY1ifyhdsZKPXGhfsQJGDWcSpCoF2eoTbY5gwirg25D3",
  "key4": "2ZrK3E62vdojEVHz17irBkvjh3NMn8d3cZbHo7Y9CvxxgUcotMfpFdMHiTqJiwC1Hd71N3YMB72t1uqVjNyux7rZ",
  "key5": "oHqrG5oSjJtxzPmnpHVWTtdY7HAb651VRbYyho9mQmBu4ePtkpritqJdgPRarbPmmqRVsM9uuVLFgpjSYAK7GvL",
  "key6": "3N5rcPR7ffXBTwN5HuCSTWsng5X9a2EPtZVMrs5QRcm7YjgWM2j3qTY9EX964524joCL4YttNmpyoaKza47CPS1n",
  "key7": "4UMm2VNviNNdM4suX2QLLFYFvfjTE9ghF8wjhYeChdmC9SNY6PG5UgtLaGUYfsMNzPh7mav7TkkHxsEQdEpZ3epx",
  "key8": "W6UDyedAkRqAGBiLz5PDURqHL985zAYqjDRbz7saT5JTwG28gW3WF5qCyHcY4LETt3y2DBLphGbgM8yMer9KGng",
  "key9": "3UMPPHeTdJ1UYM5CAer1eUbJsScNcqd97CLGcGy9acXCffyNEzLSjezvSRYrmooMczxbPF4B2naGjhJRaLwxHji9",
  "key10": "i1HyCCyrpF4YynnM1GZpNiDXTNsNrzDcgWy6sK1BNwRLEEseWSpi4d5SFU6VT66tXPbLipUMXEPomqaUm9pun33",
  "key11": "29CSCXTie7MS41Zyyqn34RMgPDBnbLQ92BQbVRFs92y5gaYJ288zqTKQG3nzLmHmDYCwEBXV8GvXjnYE6TcgKq8j",
  "key12": "265n6rj3XHAddfCzP87HAXPHiw7wsREAho3teAefsHbVukjrrjyGkC4oE3iG9kdCU24ZhN27L3As2SJNXWLEixLL",
  "key13": "2z6Q3NhTEdXyE5d2unUD4m5z1YStWAf829jJSzQvv6PPryyrZqKcJjnsurb4QHcoHPb2XkBNT1hRZZwRniagBQft",
  "key14": "3eEXfRfjbdNwWYwHjWN3o6fLTEwW6LXZbS7xm79VBFwk7pMUg8JiPtiY85pAUsx3yqok5hdGF8X3NL5cCsRgatfJ",
  "key15": "2N8As5vMQzUQPZG98XgkJi28ypWs5FRRi3vLRj9PZFSFJFJ2UZXbPMdLENWjDLGNFNHqJCwRyRXr9HQ9ZPjsVXnZ",
  "key16": "sHtejCeQWXKAgjhP5cTdrZbgwk4qRi1WgbA87s3VpKnQXfAEhdEwmwS2t5M2hFQxqD7XjQzwjE9Pnq7c9JoWXnB",
  "key17": "5LCdvCvCTADhQpsAVERCZh94JFkC3NfQZeucEo1x9iqkRGq6aHRZnzNE37LdXW3eocTxtoCnthbKgowyRxzxwhh6",
  "key18": "2D4YP1c3vexxrPZQch6NwgkkhpcggURMy4Fr26YZ7QwKS2AtyoGpVKuC4G6AaaNW5oZt3ZrWwjDvEErqFePrztY7",
  "key19": "2hY7V9zsvMVNHiDFqzR9Q2AcBSwqwYi6bprRvnq5jAwCNGXPmu7zkQrmP6b9iaRcrcn82LbHpJuofrSFvqozrdY6",
  "key20": "5QqWxxmaTFc4ePtJiaC819BXsif3nsEs1tWFu8v71Gn7aJ3F7Hy5fYFqhguHDtHpxsuFcTwpbA7GUEGJdaXGJzQU",
  "key21": "4aryNTi6o9ib61vs5eC9ppDpak3CiHjT3JCbEN14EvKDNeZLGXPPVvwb88GpC6pn6YcoHuJuxZTLBBDLBL3Ny5NT",
  "key22": "3bxSGAN719pqyZWWUK6whqpHxsPuuoJF6Bjn2goYBJ96tnqM6iYfr7e6SD1QorxzH84VW7rCawg6ddKRDnDF6eSs",
  "key23": "zG4g8zudYNWJVQeYVq4ivco66qjJjYNoHTGHetV3gn8f1FDRv8UDHnNxXRXQUVMNyZAh2krvDPK76VUKh3Bj65e",
  "key24": "QsigCsMvbDwM3SwdJBWJKWwK8VLoYKWQ7C6rRBhvB6TMxzNKGr5y5XoHtZ9nVN5WPJCw7AYkm8iEcWaqRtKiv4Y",
  "key25": "4ju4AXaUXfYbgz8duAaRrqMxMEhZyy2aeHJNQhNmjDCpte5PQjAYnGx1rpKu83kjKfKfKtvdMgoTAP9vw4jZn1LX",
  "key26": "4QAhTY4kZJvQFbV4Ghrmu1T8RQL76nArd9sFeU6ashw1GDAb26LHdcwnAHHD7hyZULcf88Bqs2mLEgR6cXgBmucb",
  "key27": "3HzNs2mWvEjnC3bvEvqcChRyH1DUkhw4xcjhyv4oskrUfdbds5g4W3AN4YDHRgiqyqMobheH5agBGgkc2RJbE6vW",
  "key28": "951LFdXgbwRqkQU5TMZVUbtuTqEUUBwMWdUa47hVp6xfeL9QaCEcVC953vUCJnhjJduwzcnu5YtjMXE68ZCJYHb",
  "key29": "ZSBrfB4TbpLXmdhsm6w7VhqJLbLkNKWAzWQNnobA1gHy7J7TUQpT9v7U9v2Pv6kHeWJqfobQd6zCGYpgRzfaWzs",
  "key30": "2RFDoHtso3TfBEotcyRs451UfRok2Qmy2eRy5XpskU3NavgKENYdFAnE3zpsbXhiLieX64VMqbNa1JiPW2c6iZ1p",
  "key31": "3YsMXBFQN93A6PA3pHUkRqzzhR7jGMC3ASHyBCzttyEJMyPunwUuik8mp4RtNpA2zmH4JXiLC51NvCGiQsnKH2dj",
  "key32": "YKNhxunb9upcrin1cjoU8LGFRC5irKUrezuCSCQA23pXZ2giG35wQ3yBBeGaXMkqurGmHFD2wR3ZxNCWCKjfjYG",
  "key33": "2k91npCBKJLQEm8bLRCXH86VmjxsF8yrgXtYiwaX46xqfXU1QmSvwzEChKieGLVzuRW75N7sarpEJidnuoyFuiwD",
  "key34": "4ZzcPbnnvMvATAnJULAXdzxwn4ZhDnsRGpdbonEXHJB1SvuPXpgtun2BS5RkcMQUnYF5JyVvmXcfrkuMHAd96kXZ",
  "key35": "57CLWtiZUZEqsJasduZ4AFmc92Eesdj3JMs8NYN5z5X6XAWZWE9mhHqV4UcRAW2EMpkyUsDcW1NZka11VnUNWxsV",
  "key36": "5EMhDyGQ2AJCyEk1sDYyaSYH24TK1oL5yxchGYFzLwKAJCZdmoy5xELc7v7u6J6dSfAMfQsUqh8u6k7o64R5EPqk",
  "key37": "3MCKVM3VZJgnCrdQ3JdhgxKYyHDTGqGXn1jJ3j9XqrT5t9ctFG3DYAaRKnoExBCzWAuvbanbUfpSekDbMvTtPCgg",
  "key38": "3Azmk6PeaXgnmM2uxUfndinvGws8PjYepXmR8rFtUqbboH3xLsk4YQAmZ7ptDVVwr6VMqTTmBwRKHD4hdDJtGDxj",
  "key39": "4GakVF1stPW1Xd1swMk5GBdURsWcM42XYEr1ZqnHM1KBEeN7WbYPmKGF2qFXMhqypN8S5mbbdUj7Wq2j2UNaBx42",
  "key40": "5K7Uky8p5SNVXYoCyHpBEvQMyEz7wKp5MVDu3bWehPjzxBnaw9NQ3AZPk8V2vneSJmqp2wqkeL5Svm3V8vddYCUj",
  "key41": "66d5yv6Vgrmm4umZ2M7CfGyb7ix1FbJHLDxmTcLemrig5MCT8ianRk8KC462kj2pfDcE9evveXVP3oLphkBNiRoB",
  "key42": "4tzYNvjnFpA8c3FTvHqz1v1r1Fg7gFYVjKtSJ874HAzZxydmgvYYgEdC3xECsHurtTebGAfrPjp4gD3VSJr6EWdK",
  "key43": "4rgNoWRXyAN1DCYt7YpYuoXQPLsxu4A1sbcChCrkK2YXkN74S7AdouhzuSkNhwV1exAJQmm5uFnFZBQ1m7eATArC"
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
