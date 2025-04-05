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
    "g3KHxAg8t9FJWGhkJtFDBnHqErBuR5K5bwGtAVQaJCxDsRyVaceN4KPzgmE1PfgewD4qcPSt5heg36c8EEDZVZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BreqzFZXzgCStSinxfZqitR8sAqDpyfCx24t18CWHmvuSwt8cwFZBJfvayw6KTaD3hP6PaXyYeuvGc7UPceVv8y",
  "key1": "5r5U28n2vCrBqyS5HaXGrkYHXr1x6NAqVqR9EjQhQBwxs2Hevm85uyuVRJNeEEpnbgwyPdVw8CRqHTgJimn4Dkw4",
  "key2": "4xyR9YL77d9rWnPyTE31refV3zvTzPeJWW2D94svrNMPJW2Xxx8XWsahsycqdGNJattGAk4AgKYj8Bc9Zy73tfYs",
  "key3": "tRB1dPjddWE1wUeyDZF3zo9s1ge9T3dH1sJPwy94GbVg4hFwLBFHh8QeVcDAjZzrVWmYNgzY2QXYAeUNYJCubyE",
  "key4": "3En6YKqU6rU43sUi9AobTJtifbG1UpGdVPLhEN7BuwXu3bYK4BsKtuMQPjS4NA3akhDbTnRQh1JL1LESxaMhXiDo",
  "key5": "3jY8mbfTA16U5pKWXpuFKxPawcTC4qDX58N8zYK8UqhCYEazueaTKShyzJ7B2uNuwrBr92HHdwuFC7WWUT1aD18N",
  "key6": "2wne7GFNHqszdB1QwsVHehNDaTvbuGEmV7WEf8q9pRk6x8DELjYkJR3iKmRaKBSRoxBxjVQ2XLcZbuav15ypqhTB",
  "key7": "3owxywCvDwEG9ucav8qWT2oSvqcNrHYrthBWnSxHhhpMC4k5Nzmo3BsKmwHtexk6PWgteeAVKXowjokGWJbE7Wki",
  "key8": "4rz4jcvxnnzV1Hwyb85xvL1Cefym6ndNLuYyF2mSX3vHK2yQVyWasN2FqvnJwnHnE9HjwsXNUrgczdabC7Z56bih",
  "key9": "5QDHZvfHm6VUY5CSrhKmz2ou4ZVrsx2HRP2aUjEdXTHEpxRnZSVkpiBwKRkv8N7SzLicmeUyNW8gzpLgCFozzJgR",
  "key10": "2MacJWuDrRYfvkADAYUjd6F1HnLrzQtnDvxKy63wshzZ1sT6cAsN8MhYMxaSzaB5FExqvDhN2TbChChUECwzjazF",
  "key11": "2n4Gej634pLnBQcWkpp93wDeg77qZSqgdSqJ2x4vNHhQsjmY2rDMb2pgnnACNg2LshAWcgPFBsxQXb8mRqpD8ReV",
  "key12": "2BaeDkbPhMoM69a28cmkMtWQ7Hs8suTjSa32sEEfktgttHh1uRjgBWuyvjsS3FA6wA6JuDfK7CMFk7Lr1XHyejLs",
  "key13": "2LddbHPaBgSzqeActZCRa1d5zqdKcRUKtmm2E9eDihXDWHTMcgWGBcYvPEzFGv7TRBrhGGmjqX6UfNP5SsDirvKG",
  "key14": "58auEeGKj8ukZzuozHtoPzT9utjmomo36CqroZSBiQt5tMFPxFQiQNZncq7jtW48yWPFCbnjTFw8u4f5M8avDVYX",
  "key15": "kinbEUdx1ye6D3iahgkJt6BSHQZgbhH9EHc3acLYah8UmDHrCoPy9QQZ2qZF1xkAoGCYa3Qt53Q1SwREAygRQM3",
  "key16": "uPzYXJw8D44WqawJYHWW6izEATh7s4k6gcJHh8qp7PZq7S2enzWjw1jfPtam2As9vVvJMwgzPbsJ25BTz5eRXoe",
  "key17": "4rEdj8AL2yq187b3TmhrVYw71iasc5xGA2RfscwkX9WhaJgjvsrnfzUDeSHAij8BizxtdA1z6WcoTqWQuiSYCA9u",
  "key18": "2HjaQSQTjTfjKHicKkXjMB1zZJaTEaDCTwFA6LbgjhpmvnbEapTqFwpGNPrHDFGKRVy7W7D4Nbti9VVPToNaACY3",
  "key19": "24x36XbezZZMiipZTJuuCCey925CkhjneKXgywCknReKWgiudFbPpEto4BjCLy4hfcFVnHJzzr2gaaaxmidFVphv",
  "key20": "5JJCw9LhFWYUYfeEK75UBxJQbjPecnH7RYF4oCpMdjmzVmcxV5Kb42k2zHo73WLhwjgXLkXCYVcBgYQQdADYiK6R",
  "key21": "4EmXwK6ANqWsSMzKBskp4S18xvEvkJ8nQYhhgwCPmqQRrqCEE5M11azG48KJJojjDSwMAGmmoTtkQ2fPy1Coi7dy",
  "key22": "5g567cEGAz9yKgzFPQ3f5PgLQU4ksZvHpdNBYgAwZz8AENdZZadm5Qp26x8BpeUjUkuyWyB7iuczdm6FDgs8PCvs",
  "key23": "2WFEsqJCzNXfpLGymSVzA5qf9ozjSdXu22MbyRPx1SufuTL7X9KBGFnp5xtSWPNwNhQoQEnY2AJZM7TpTVTadygj",
  "key24": "4PxUq2J5Q6dzMQWCHBCgngz4wn1UcJtGCZV1yWg6EQzX8WgYD5uuaWYfPbrjPDbrD1fTGzXXfvTeATYpmRU6Kbyq",
  "key25": "gBBmUX3bHW9Gqv8HSgwhf3TWyaP6uVuPXrfY3C3Q9VdSHCmFSa2ABu8gtN1KkydHDpFzgYYxdLEp864f75kTuZw",
  "key26": "2jzXQo6T5vXcqV9F68W2j1DbwjR1nn83s1EWHeyJjeZZC4zoxmjqZu55NmpWR7SMvBVb2aJQgYGrtZuGkFFFUD1M",
  "key27": "3KDvvxpJDrz81RRpR4XkNT1PPB8iVbGoA5TKw7Qxz9VH5t3anpMkkDjCXj7qMFJj3wd3nhHh3ynqxf4qtU9MHhsx",
  "key28": "4KSM4KhfmyEGfQZu7dM21G3uWSeRsu1kz8PaSG3MkZMbxnFh4oFFsRvp3T32kkcM3HGZxsT46NtJprE3ryHUGgcf",
  "key29": "34MG6BVVortwcTgwSMRerU3q7tJffivamsEPVrVme1NgdCbDPWMHFNhP1GzJzBgJPyYb2gJzWhuLy4DwWUnWsqr4",
  "key30": "5iFCCqkww5haVrAUmLCX3vKVXymknobA4F1bX72L7ytxMpfcbs75V9iiJcuRDTYzTL9uChm6cQdTHxXD5DtsKWCD",
  "key31": "dTMArPcGeZUB5p9SNcQ6W13nnNLXvE1sg9Q8YmVJAeWTejKFNACFTsY9W8Fq4ksKGzVjewJ7ByWtso7F3uTWPWF",
  "key32": "4pPh2C6To17UdPxrRKR84WqjcmL9DwQkV9si3yKt5tGr13k75aM78LkBLX2TrxwpKnDcMoeEKA6CCKWStrRVLcAT",
  "key33": "3aZgeXSaSf8AQhBJKyXj736esxYdnMZPMGHDxjqo5d7PMrMh5teozG6isesvs1kub64UhA4gsufu5QtfehrcU11u",
  "key34": "3G7ooXmTtpvqua1PkrsZATrRDQTfznXUnPfLBHz7M3gadBB4ZR94oV2vQJmfvAesMwrK3YXZpgn3MGUu7ZhvwsrF",
  "key35": "2r89d1gL2qgEqzjQT6L5P5vWsvjkNc3CfpNFuSY2MTMXEH4ExF5DcP5pQeSrjqecpryWvbjQCNpBZWHaNr4kFUJL"
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
