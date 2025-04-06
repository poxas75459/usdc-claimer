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
    "4bhBZMCqb76wHvNgp6B5Krvvq2SPFcrkhiR6xyujE64ixZxZQHQ3pmj1nCq3stF31YJSyJHXjg1pAfAR2qWxRHgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XiJ7wrAKZYnvkGcjbv87diHXLrNBXdN1VVw2MvEBN9reNs6e63JCVrjVRRuq92Re6HC1ebEapiu7siMwFmjUgDK",
  "key1": "2C9AkTzXJyF5Bg5drAEmUFjoAjgHMWnemPwDp1bErtuazZWJN4gvX73XDmsdndX7BJCY6Lxnx1GZFTSQvgACgbdd",
  "key2": "29TSfQoKPkcBtsqqehXc2grrRUVdVuFvqBtnZmnVkW8eXQNL3VnmjFake4ukKbNyDBYrnDjMUyibRpsDvvirD6KV",
  "key3": "NqYPbyihArpJok5BHfwT28a2iSSDTtkHay83F8duazZzAzWrkA1wjeMq17Y3GpNetcFumefpJ51FqmnRKA7KQrn",
  "key4": "wJ1NnGKAQYPwjn6NgZJJKZm885jr69RmsnQaZsjeuZWq5cBpfbwGjH9LnSgrNmG94yRiqoiMHv2vMGoxDDE5mbH",
  "key5": "3FNR5CwSzcqJEtUHnQVWeArPZeVTCSgbUXZKXoFCM6K7FUdGuc3QBZpMSfV1ZsGLrQ9nfXirZbkAdk611JZfNtvm",
  "key6": "28zs8c3aWtTwNByxgzAxZfd2RS9Yw8i4gCcZNdd83h3HzYnLkrKtB2WG5qwnH213BnFUTHEcLQ27vWZm4ncRNpuQ",
  "key7": "2jFqmaBC1eNvDgDF6QEiHw1WY89swMiypMgvrgJv7mHAo7tGqppZ75aE7wXpTvHbdDDtcVLp7t1D3ocNro25mXEx",
  "key8": "3HizWMoe73qPSZ6qvLiL19dSY29juUTqTGbv5ENocH2BaXwCAWkYt293XYv7efP899c75bvBDF1fKXBmECbwgeTw",
  "key9": "2aCBaa1JBQcQ5CrYJ6kXUGndZpvuckJWRU3bhnGZyxA7ho5qVwHgvGbXdM54wDKesF85BUgQY3FUHywdH9ZNX7y1",
  "key10": "5gGWPsypUKzkoc8Q7Bc2dcqGFk4o929iB3qyMv4HrHE5NsPWh6mXYydpccT1G76X9e4ihnUhpY5iRW7L4jbTt95v",
  "key11": "4krkg3Luoyi392WWw3cGgfi67jdboSZw2uTvGQn7ZsPq7Ss8hkrsTpr8Lt26JZzdmvZ2Wq7vMPmBkqLtzByewnJj",
  "key12": "22AK97VoB7ftacXCs7z4TKW8sMmnCasCgyKxZqVgWhz4xvNdHpAPsRvvSjiwpkeKNQABqzhnZ2ZAZNb2qZsjzAxS",
  "key13": "5QPN9Eqh5b17xXPNBMBXbBY3c1NprdTW9T9mz7Fkhdquq2h8gFhtjQaHnrKzFvKtJVr3MmV6QX8YU1CVU6N36BAF",
  "key14": "5PUR7jsMUeKbN1sXiUhSax3TgMrEurY33bbE3CukEnFoLCA5VwtGt81kRA6iYaW9VadSCXa8D6eWwn3EW8vUvh2b",
  "key15": "4iw9TzXS13Dm8nFitpvkypgnxAMaUdB9bn7MdEdGhg7JcNmfXKjiWPWZPnNebCYn47FM7zoEnnGjyh9ewA9gBLRT",
  "key16": "26YHjwvZ5yraMj1LwkLRAxq9Xhu1cfuppizi398YcXm7kkv9RxkD539nm3H83kgrWzXLUu1MjV7QKCWjEwT5d3NS",
  "key17": "2r7ZYsQaPXThUdAWBw1Q1YsVHeYrHVYfhppEG5Ks7Qve98SswKrEFQ9m9573hqcnRH8YTuoRPD2hVQL3Y9FUs3To",
  "key18": "5x2kH4Dik6hmWMpB2Vk6HFpf1hky54JYFxKURL3K8optWaFcqPmcZmuaxS1a55Qr7qrXLat7rnDEnRAv5RvXGRAW",
  "key19": "rrNZTJbfwjmvUSZdWDpajBQaMs8YnvGtMG6V8C5nsJemsQFrim4sj6Qf8udvjX3tZGJNA5aWNjVtR5G7exMsJ2P",
  "key20": "3i9WHd2iMuwKuoXuW5jA2rVke46rDUGXR59uz8LPsL9vWGoaKs24QWmcjuQysL52CLpDK4MfFbwMNWCdpctHoHCX",
  "key21": "4fjrXnXsHA37vnxCf3kttCiUHqYYmEjMaBXwkfNUPWNJcrzXreSAH4LqSbS4o5LTSNWvQZUu4AKAF674TRnHBzgW",
  "key22": "4VF1oUjkyJaQnXMDHoH29tU4hxY2ibYU9jUPhxMmx94gJjAX6vy9j61S873oe9eRDrTwMqimbJYY54pYrEeoeQYE",
  "key23": "5EEFGG58W7bbJMeeNT3X4AtkeeSt1gdszubyvwzy7SxHqZHx7VgXGoNn5U6LRKwHtwAU3oJYgjB7DfqVTNQP8VzA",
  "key24": "43QbwdHVJytzAgo1i6SUYtMpkUzqWQD3ydpEm6Dy6SUnU9pAJe58ECTTEoLitaVr1HNPffZjNTMUbReeSH1FikCB",
  "key25": "kT7s9BvkC3FkCn1rNQuhkL8bNohczu2uYhLroYTPJEidU2smQNu6xaSvRRtZqfHcnzNw8oydabQtkGVF49AS31w",
  "key26": "5cAF527fzKucdsxKTnsncqANtBu5QUuxczirqrg2ovmXdV1Uhv9RgfubUas399N7Btf5kmmkKsgBwJNgGTRKmuqs",
  "key27": "2aFbyMQHVTd4adU9hhUYicdd9PZPcTYKUScTzJCSR4N3TP3GzG2TUyuFBEdv2mju3Ju3MfvBpxgTDeZuzgVsVrKJ",
  "key28": "rExEbaFAunwYW5XyP6T4xWtTYdh3Vv6S9nQFMqEiWoeFSDAaFGNMVEdVRCKpDmbznedsML46VDyEkp9Whmcu9SU",
  "key29": "5vkgMc6RyzvdL3KRuXdBst3sd7v7yNbouERrQPdb4oZJgNx1bGG8cbMwL7XhAbgJ26t7eaHY9DiQacQVR92aPx1h",
  "key30": "pPu1YCQxWAJip98biUKfqFsL4NTtA1fTdMefuraQhh171AuRzi6uCUBftXdyh86iWNJBgFniZsmTA63XVzqPcq6",
  "key31": "53cDxvNRtwkXwyW6nefm6e9PNDeKmjcySnVq5YbD3pHLHP3LahwbG27pXwVQto4RffLBst97utCdu7vq2U2rREw6",
  "key32": "3HRnvWGVDFyUKpoyWtz9GBd7GMJZG69zWswq99G69UQAF6cX5isg4ckxT7mNxDiPWRSdbnJwp7Ti9YBsmK6o5zCN",
  "key33": "2ukqfgrw2pQJpB17wvGpSi4RXZxPZMiq3tYAqZfTcpx5wiqjd27rPD1pcn4xkSH9FsyB4nzEjvRQhUMdV9sxixG9",
  "key34": "2GNph53z24uV3ABEim3DhEVyqNg8FPSfH1NsSGyefh7jfvoippzahtpXtx1GhZ4PAiVNHMrCosm7uNNwj5MQ8r3E",
  "key35": "5Cm7q7uhWryNzWWCCvtiBp8uiL2KHKDQVXooTxQCX6t6xNVn1sbk5UQhBwGpgGRhh8rYynyJ4pa3BuGnkNj8Jk6B",
  "key36": "4vchRd1XhhFM9vT1Aajy65FY7KoQWLQApMHVPEhFaQoc735M3QPeRPfihpXghvgeCWRfnN5Z7JLaCd3iXMNwsLZw",
  "key37": "gN18wCX1K7TVNJtSivNt8AZPXmw4XCgYSccntHr5hbzH9bXi33QcigVXymfmSUtDF6sk2Biny6PGHfLUG5CRP2j",
  "key38": "kUqRox3pRw8jZqCUGj9aVXrqWE3vW9Ka8KKNBZFjeCBnE5kBnMJFj8KThXEvStSrJr2mYeSQcpFkQABaQVQctQn",
  "key39": "3ZGisNbsag51AMvEmsiVDrtw6a9bAzbXULLSv2j9Xdux7PZw5RtVu7r2R61k9WYegrYNpTUo1H1Eovy3WAF8Jbfw",
  "key40": "3EBYFYnV8p9jSCN9Qs54kgQ91qwpUDKF3rkVv8ipUU4f3CkK4JzHJ6b4fG9CGjiezyTE6qhHkFbnWJeccoE11xEx",
  "key41": "Sa9gextQ9kEJMzcfREerbABePUEGVqfWci23HZiEiQZfwCZw6p1JXuSUxesSoxk6Pmt9eR79yKFVKfuTMSEhzDG",
  "key42": "5S4ocJm58uSRrx23qXXskrAcwomeUrcNDNwAfd7ZRVLnL1p9Zo6zf1T45hVkCqRoAfdvV5eX4bGE5j9aExeGAjVr",
  "key43": "3Jbt8cTBTRXUWccv7brXwt3q6i69VSZLg2uHt7X586gYgPxhVeQVcnWmgiAjqufnbRx1R7TQxEQSY9CPtjgrk8B4",
  "key44": "4ZcyVoDVrY6mCFFigyhwX8rBpDbbThKTe4T5XdQD4vWa8gwZCgSYRyRoedJfFTrx3Mp4hNHCp2sydvk7SZ8cQXRo"
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
