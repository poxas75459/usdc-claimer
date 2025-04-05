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
    "fpWiakKJuyNJyWAXxFrTkqheVvT4tbeNUxtHKHg8UkkmBCWdL3tZj8Y9wFAxNx4N8ZX9hU9ho1gEVAXRMV3KX7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VT2evfp5WoSaWA596hTprMfghKbSCbkPeveezsSADCgErkoZLHiTWqJMG3ydYw212PGuaEjoXwugffsAVftQxyG",
  "key1": "uaRVPjqmBYif9G9KQRvXi1DnvES5ugAZjckcRsC4fwVb52Kv6qAo8CsQVqjLvZaXCkY6sfYeq1SBqGUnrEp4GcD",
  "key2": "3ch6s7Ri98DadyHGxYtR5kiZz4vs2Xq7aJJEX5QPBEyhkxH8RPRqvUHprUnEymA9SMphCKmLUucUjNN8ve6spNLe",
  "key3": "3xYrW5nQ9siHNf2iVDmfZiTix6HLMMZNPvC7f1qp7KhAUXww9g9p9qPGcLmrTQqULKtbDdzYjgBi5XKMRW7Qvmti",
  "key4": "4u7YMoUNNDpYV6kNftZr7C98yw9TjfKZug1jdXnyTRvUzZkEPBjkqe7L8GY2RnP4H1R7EsYVMeKzauph8g9LFTZa",
  "key5": "5aKGtt6Gzy9oqit58det63r6iG6Bcn6CAMYohYqBSRxagigBLoRCmFCqPtNNUJpWq8iCKW3HA5xppF5xbG4sMVXB",
  "key6": "4L37goS5skAry9Evak1cMpYCkbh4jrAm8dhtpqX5wpFerMwh4JVL81Gn5k9WqnLNk1NfhWRVcN7nYoNA1oxNhz65",
  "key7": "3cfyahPTVQJZyqJKmgRp6VjnBxX8PKrDGei4c6ujwTVh9EvAQAPPR59Eyun92oGmkkfEY7Vu3f7UtJzVybtx5DKw",
  "key8": "5BGfuF2hgMqCDMVVYCCRdTtRdUMgYmT5uKotVxrucV2TEhTXy3nEa3HnoX2fapZwti2DM5YAgCtumAbHHunKNQtR",
  "key9": "3hxMu8MPdtiiBEJUUDgmYDbdPhariKMZNCCsg2jTemkJrWotUenrM2GJmBKusrRhjdjoxMJbjoW8ex769qMndZEz",
  "key10": "3pd6Z1WnkcLqy5LJjCW4i1dfpWju9yT6nda3AGgg18P3oN9Wy8fEQWJHnBJ2mCbtXnNi92vbN7m2chpp7CXynoNL",
  "key11": "56g1kS1UCfEqUbjVpq5RcmynVtZQbTrnKGRbBot6DuNRNELz9nb7teRc4mDaB2gFzjuE1AiBvKvuNqdgd7KF4TWd",
  "key12": "29nAw2DmutCuGHVnJXpznZRzCkgBeeFPxW7nQ7RhBT1kjx6LLMfu29FVe6Hr6cgPmmJYr8xrGkWkRNiCuvnmrr7V",
  "key13": "2rEphcjGE84UTYEBcduw6EJkiAM9ehWZ9EAGpSwea7eUhTYFTwMNg6ircRFGozn9bVeJiN9H2zhtJzphbHRz51G6",
  "key14": "5exqrYTmTNGtibH9pCKhekkELeRNbUkkJnNnc4HDG7tEXZXi4dyyzLzma7sJKxdZJZ4QpAqYdDaoJqi86fDAieNv",
  "key15": "5GbXUoUNDLtYh7RanAcEiKcHK3yVHv8KH42A2eTQvfPfELAMjfiyxt1fwqKS1iZbyS62xNsYiDdkAARNo6M6wzYw",
  "key16": "c8hXY2VazW8SEY5ofrk4WYzZRx6NdZ2q1yYfausDmBiHGNWDPpAHE9tb9LyCDAWFbP7g338BNUo6JUGuKMc2Bgg",
  "key17": "3K9PoLsSsikFuN6MbUtn7crRXcShpBGQmixpKDDiYNjDDUPMFdZQK1c6zyDjNrL8fFXJNKyXmuYBWnJHk9F1C9M7",
  "key18": "5KqTjciDmVzB28nk3nARPQotrcfyyFfGFRyJygZmybCAzP78YJF8zYvVuKmox1Rhx638vohUt2poXuQBd1DJYtHB",
  "key19": "5nWJ7ESXBTWeRSjcM6wnseDfqzC6BqDcFEqRWPF8h7hww9qmgDZLPqELuSyL3hpHkChF7rNuxZfYF55gV38UNxjW",
  "key20": "x7ijzACPfxW1448y4DYKpc26u751tvwaKt2EmEAWXHs48DCXGZN3jxVh4u3gZa37e5bHBqp9a2f1en4VjeacyM6",
  "key21": "4vD1uVSYX8WcQxXue5V1NbjubwzwmGcHJ5z7aLprU6GFwT6xZNHpQvQxWotYkkdzeBhskih9KDrbSjSUZ2nzkeUQ",
  "key22": "2qwq3bd48tEqrdCDw3nSBJJJQj3Htfe9c7iXUH1EtQHcNZoD1ShAVGJuvd2F1XP5hM3zBzk92DRnhMGieokNfuJi",
  "key23": "3GewhktUGy7uhpPbmZPUkLkVpCb3TdmzFTRkos2USs9FVDgnLDKuqud6hVPHWb4HkmEmN9EvtUkqvVCH8e8u8J2f",
  "key24": "5pu9XAhCca2Afv6XrA5hcYA8mxfeG5hToo3S45uvCSoruQbBY29n2Dvr6mEdSADLkjZvLrNHybe9tvG93rjm6Jow",
  "key25": "b9YZeWwQFjLBCHZ5nN3Xw2Ye2Yh8L389CEHN13nmx7XCJCWvH5EBX8Q2qZS3EoeGxPF2qPLcZ79PU7GcwG5qVxn",
  "key26": "2fQpouTUMYnUJS9JdPpnF1YomQyPfQBLULPf83zkmcnCJw4NUbKj7xe9ChK91ai1Cj6vTwMDRt5AArtkShNPhtog",
  "key27": "wA5cK6xxw2GrS2fRM4Tck7nZSkZC7QG3Yz2t8A1gha96D7G8cYGzRgk5RZjuEeFCEY4w3dFuaCZV5vPXpWi3wKo",
  "key28": "46yG4oWsejH6o5NfHhREx8G5KVFpYrsrhEvvroQTafkE9yJ5YNYYcMfSBD64ZSoWKnaQt59BgUJdPbbJjF6usFPY",
  "key29": "C7SQbynVAfpihzv2U55AtdFLYF6KcJgna8TcJvN8Ekzbq3wuiVd44oazCfYGYDStLYNKx7ZkmKiL6UATZypMiMU",
  "key30": "43JApD3ug1xVSTXwymhKHTgHnt9hnVhkxveJiH1Zf1YjhDH1UhK8uTkCvsEYyngJYvxtMoT13AfoaC3rL547CxQz",
  "key31": "4rFT2Jqo44Dc3y9zvSvYP42GJTiwfVQiU8hv9giVpx5ww35hUnXfjiTbFDJoQhyi4cpFyBcLpiHBAtkWPfhXDwaz",
  "key32": "3P3YfdTCCtikuLi7ibfAK21XXVmUiipzfdzk1LrNabuWjsXYrBQxsYgPcf9jCwnk4CEqw9DCtADgzBMaBXWz2jFj",
  "key33": "4eNvVVv9rpPSeLYwDKbvEJW7EbgYWg18xynJayjtyyMYTTovnZpWTSffcEkKgLkGojam1TzTUh65isDdxQAiw79q",
  "key34": "5T2DZ28GrfSj2Cdde32DbTDj22sdRsn9ysp8PTggNZFirmLEdm5pjSYipVMgrkoH5dyn8TQhQ8F1fHiqnYVTAhwQ",
  "key35": "fMa3hB7YPyyA78pJ8oGkWF6cETF3VGtbWeJiSDENDRai6aRXNQ5Di4tPypCQ7rL1sjMfgmSPJXx6iJJTtjApnaZ",
  "key36": "3NMkqCbTchnRvAptQYCRdd8gwTgpsNVqbrLFCjCyk3DpcQubpaJvzjBx49RcQwg9saaYiQ4K7LQuPoadMndur9ce",
  "key37": "5KUM64maVADZ6mVdK476JacGRJedDx8djYAvvUddjGjKr4Cep7VTg4KpXPvK7VZMFzaeoAZbdkzYb5ws6k1CPY8M",
  "key38": "4JnR5J7Wt9uvJ5jFW6ojXBHJP5txYKmmaeVetEt1pMYLLPFQwY85GT4GhCsx3C2Udopke481z5t2M1d7vHDdeEE5",
  "key39": "3XxUVgHkPPUuCCzEcgP3RLFtL1d2unDo3T8eWfWrrYo16VVraxvwapvC9XFXHFJMj2dfRF2HR5ABG1QfZMdPrTXh",
  "key40": "41uMgoP8g8fZGUVdsgZKtc8ffuFVvHaDhLfKXsdwMwgzRVquA1TvvD1FpQmC5aFV3cqekxb69eWAQTz7oWy9ZpYi",
  "key41": "621GuStX91MjxXnEFCcYVdzD1YUDyzR6BmR5Jw2ACzHeypri2kwP9oFB1NNdtsGBpiFefizJ65qEiJF4xQ2X5ujs"
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
