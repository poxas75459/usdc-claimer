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
    "66tCHnehhnGjJGWazRodo32nR8LNyuFcGdin2j5bnXSVbaJtb4p6gYmbubWNmM9oBp7DioT6aQ4mAeXxKSa7LuGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sq6TSmKVymDe38tjsWEGshT2yErx6FKQwagU39euSVRvMj9jTo75C3A81dzfxuyzEZxgWVG5aRGd38AKBMd1B8c",
  "key1": "2RYcwntw1aVkdJhGaiSfFkCQr5HRHJHVGCKDrz4q5SBethqFj6G8c3Riy1fMTBJ8YUezypErepXD3Thbw2PoQFin",
  "key2": "5kXdf5i78Xhpa5g8MBfUq6YC9CYnwmKd62bdRGCDqRF1b7M8iPAnyfhkCgRkjUxxGqLLyegAcP7fQhFgCSqGNAQ5",
  "key3": "3HuJQeCecHJgtYxtroKrBSgHvxLctav5jUptetrPoiXAyjge5rN1crRbPg9L8r8ybbnE1Mcysx1TebVYJhAnvypD",
  "key4": "3V1c5ABny6iGtqVfq5BtKdcLGNdzGtA4dthHJxgrdigWpqtiPe4aVi3gmUqVrZwUBZYUmA592nCy6koinCErxJD6",
  "key5": "2pqBUzHFxAeq22kGBB5gZYS3rRckToDYCemUMtZTKvhem9WzsdaH9mhxNz9boP2e5mGhL4uknML7bxZ9AP9MNpD9",
  "key6": "5CU1XD8hotYsASarowm8a2EspFQVWxRHdmJ8VhifKRrhRsFyWx1bYdXgzpBrb3HzejerwrDPdwUerrLFGoGYjLMY",
  "key7": "2YNoJGVmM8fn3ve1g1zF7qYQUyK2wFV7XMujamE6M4ezauAtpExyTq9cTNryf4ERqyC6FfAGS9GBm3QYoNkpGVy7",
  "key8": "3msaZP5SFbnfPhC947i8W1PkRtz3JoqckXjRSuFS1U9EKTQXkrVEwPa2STcLZyT9AMNeT8jSSEc5b6w8dhyqh8fx",
  "key9": "YNj7fdEQeDFnu8ZV1gNNpA8K6WPwbA99yT1mC9L1xmeunqWFmqHeCMSfAhpEeRaeQYGyF624sQCD7onza4TtXmA",
  "key10": "4j1jV6SeLWBTQbfiNgxJTUtrfBEzgKdDbib3V9YaWvRCSS4RzCEXy9Xy1odcDBX3Wu2A7iboJHh7uaaEqba44XEu",
  "key11": "2DEN3hyK1PojiZoRQ6EGaxNL9DUSaXczEw5SwRdpfvoAuSWeU3woPo6Zt6zVHEGjTQDNKP8pdbDRSaUdd1aoBErC",
  "key12": "2zRbzTofiehAzZDLnSRCioajjM66XfC7fWcAecHSHow6SpYkWd9bsTaUfu7ABa8En2LStq2s3NtdN4HpGvgr7Wg3",
  "key13": "2KyU2BTb7eR2dZvkZmRymADomTfcb5DBQqa9FQrUFMget3UHCaTrnf7dN7EtxP7nn1n6VQ5gHYSh2ums4NtQVkXo",
  "key14": "2ZjGawtpJjKc3ZjnHZTEvKQJ7xeLFW7XeffEEgMtFfLjnxLKw82AL8wGepsUKhFMWLXpUh5WXxr8jyyueNSjvztK",
  "key15": "2U7pfoKHsTvbR1sVSU4SaQZLr984y7Ji5JA7prUsdrdv3HAHaqycbqH8Fvh7MJESXcDUgt8hpfr5LbGQtzZ1hd4Z",
  "key16": "TpbFukW2RQzk1tEckDnTt47pKxxTT3DPm9Z4XsqZGNbrW1VpKhQUHRXxN2jk6hwXcPQY9w4PoSW8in5s9iMvUpL",
  "key17": "62N1YnvJVYAoVZQrtqLCCZA8pdMveJbW3NMg9wVxWUEdGSbUR2LN1nBam9zb1MCi4Swavy91oBwZmqrm3m7itnSz",
  "key18": "1X5mqFDi9KyAm35i7hYBpfumzMWWsvPUNsT1Q38vuwWDCV2xAMkzqNJeAK2ZDaAbrzGivmNMWMCRfekjLh3zEms",
  "key19": "2obhagzMAmhHtYcUhd6HX8SLfw64nM9GxBdRuUxnzfpkxvZPDcqRfBV3oHoC4e26ivqwuenLRdk53tBBULq5D6Fv",
  "key20": "5AHQxx1woV2BmnNAawAFo9q6D3VXpLoZHtPTwLEivscrK56HPQX8xaFut2dYh8dAbHs26z41iQu7RERA4DZWPqJv",
  "key21": "JX49FTyjLB2SAuiWm8PpkigKQrCSdDRTvCx5kWAd9JUf8xJFG2hqprgb3RqTd7fNRpWSXNsGBUzYS2DJ2Upj55w",
  "key22": "33YUputkoFsvQCDqU7iVAWHA7SrzMzxeoZjQcFeZPHGMpevWsWJZdSGKoADG8yvvZrssJs9L3m3ZrdfRA2Kpk2z9",
  "key23": "5itHiSpG9o3QT1w9Sz3NrnFo1AMMW7RkCtxKZnR9xbre8S4KhyfQucvob5B9hsLA5vHBCtwybtdiwXmAQkMxJrkm",
  "key24": "4RvKPHB8xTK2sHMKeSJwssnZEspQw7ZKZ7NvkWj6QfntmyhpQHnLu5TjaAiWB7J2Rt17e92VuekteSeSQhHjZzxv",
  "key25": "3cbetwe4nTrDxGWY8oFUf6sdYrXUQr3DMepnK7P8uxTnA2vhfSRtR5enZk89E1n7u2v8GQzJf5JE7ARLMEQJzq6Z",
  "key26": "2wDa6hwA9Xozqvfanw8UuKxvt27YcwLVuMppyYdi4kMw4L2iVhrXyjGoF3siMEHLLm876kERNHLY315o4vRtkAKd",
  "key27": "374bNR5a4Br1NVciJMubBparXPs1RN8dLyfqyzgGqAzid3uy9vJ4vf8fF48VsXASXAecDpUzU4RzHLspf8ZaAfc3",
  "key28": "2ChuVHKuqZGBTnAtGC8T7bV5GiEtKEjSt9DATizFjn8DsvguLTfPeautP8zMeUnrnvUBa5qPT7tqEwbftTqYLnDZ",
  "key29": "4w2iSqwbNfwSnUC6N2xrw4hT1zMcCmZduy7ag1tdsfBxaLPHneXzpkNYiAuzZvsCt38pGyeRZRvVBcbpWWh46ADe",
  "key30": "4PygcRLe1vTEtxXwVbprSkZHf8QJmVep9xigTmcnP4yMSCG6guxhYtNnxH1dBBAC9hSs8GadCMXtBLZkBhUiu5Ad",
  "key31": "2AomzGb5a6CRqfY9otZiKN9Coi1ER712h7GphicJGc39DR1weUfHQbgNUpWx9F4dhiwjqy7kF9VgHWttZX9613Lj",
  "key32": "3pveTjVygrjKWvRrqNtDr5C7egWR3UEw7eNK6WAqnLY5epD8X1rAusH8LgJkAX9VKLDxQf71pfgvmbKHCL9STMrR"
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
