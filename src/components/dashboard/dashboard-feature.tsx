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
    "5WGzBUQFJk5Uu7yUsJKfrZxHA8o3i1qffRBGnFjYTWfg2345dQe8B1ifg4v76fFy1cFxwqT5Y73e3ivfJAcGoEuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WpXKvr7mLz8szKFAMQemtyjEPzQj73TeXDVzK2EepdZzXkSqtuDb58SmvoLRE3PveGxfnFY6AyTJ3qzFjmRH4fd",
  "key1": "4H77EKmjVd7iWdBZij5njo6RZF1MUq4mp9TVkTLhd9cc3Rv83YEG5Tp3wqaUDcsLyj5CTadGd2FKPJTtK7GTkK1F",
  "key2": "bNcwCj53VKZnm2E1EuFKSioCBvTXfC6tiq829aX7vD5Km4uvri2whdhhB8SgCcdE6kCG62DCdBujv7PN5m4JaNL",
  "key3": "569DGBNjo2ekVxVtwT3ijw6TYwMB7QqTUoPtB79Wqz9Li2UvcAjE1TMcA6QAW2PV5NiKSaXGM8kGBzJzrWAM1Pg3",
  "key4": "5RU6LhZAow7xaEqgzJ7HyDdCZXpyM2tS4iNmLMhu3r3ZQRvYKeFzwqiapE1HDLeyvUx72LfiVCCjEZhjZ7T735nu",
  "key5": "4eWoLAe4Ev5ysfC6bm5UZbKmr4exaco8RoxRV7NFTrYyM9p1Vo4JiYHeZPCjAiinZi3xHYWEKjAqfkZMtC3cvRuJ",
  "key6": "3JJjSGq84XFXyu5zJfxcaLKSdGzVepvRn3UZjwJ7h21gpjRrZo42rVcrEZbmPSrdWEW6ZZHqGPvhH7AzQeCpty1m",
  "key7": "5zAceiJbwCZjogpRq2oXazUwYCSF4zSzbw1JZFdkvomeKipnnpTZKArPe73opk5Pjo4WP1gJAGhHujBhHZvYL5Ue",
  "key8": "4cjePtScKn7EHNZf1qmEbArD4WQHhPSHRvMs3EB4XYxo7oJaxkmCESyD3dBkCxvfMaZgmZNYWR2QRbKnA7BfsvpD",
  "key9": "3jVtLa6PaNW9nckAVauoyeDvXY1b914ZPxRmApeiCdGBnnwEtWXoVQziKxpRmftg99tEZCK41m9gcSP8VfwMTbRJ",
  "key10": "ng7F2QfJvTjGVxbovu5ri7nMwaUqvS97bfGbnz5APgTxZDS5jQhSRoopoxqS4z9SeXEGGEsC6Fon4Fbsao87Q2v",
  "key11": "43AkrPHYAVkAEWCzkbfXZ2ad5XDQgSG6VH5Av5ojoSy9uWcxBkkToWY74MS2jLSL5dGCTSRo7ZDCfbLSkiFkEjXi",
  "key12": "jfbDWzWZr1vVVzbZaAKvF3FJkc1Ysmx1fGTjA6z6iYypPfeBy8dcTbLiUALMUjUT6PGCsNji5trgvEE2arVQwt5",
  "key13": "62tqP59YUboqk4LSsBnyTwAfgJX38eN5AqDZRkHndC6mfWRqjkgaHbRQpktA4W39WAbQZ8ANipuDsTBXVefYE9ci",
  "key14": "tDavnDzyVXveaaiqaU2hXdftq9nRZAipk5roNwJHfPm6QGzt8ma4dbZd2fVoiSjAoia6Aim5jmS649aSPxCLBXb",
  "key15": "4iXWoFbuuRnDJgNMb5TUmUoLPV78QSF8t6PQFeeR1rFvaavYBB86cUFvvQb8ayDgHQHWTgx4A26MXakjFBNuknos",
  "key16": "2Sm2H5QA4xQC8EW7kTpcLfgBMvy3EuNdNtarN7bb5WF8oYV7vfvZP9QCcizD4wDJg6P6Nw9hdvvsV78DvDWdtP99",
  "key17": "5ktxdv4QCUFi1VcWMWyVRQ7LZovum6grcQtC9Msm7iygs3N8W73XgKqN9ViESpXkjv9ymV5FkdsunU82JPFdrAoy",
  "key18": "3ep5UBsAjCvqUvpVCoEKrvKshRNqsArxBGR11nN1xWTtWTDHNuASU8Ao6c9vAw1L9PtcBiPSQuTPRdPJQzHEZwn7",
  "key19": "4v8pmgNophrkSZ5fPQ9bpwHiRgHaXA3kH8pA87m6pGi5iES1A4m2u6bDUi2Nb8KLY8otHCYbBEiKASr8Q6NWA3TW",
  "key20": "4yxbsTFFtyJfB9bjKBnNoqzjrxBupyXbtrWMYgMnWxkjNrYY1dhNWapm2LEc1yastXdrUDMyfFCCSJZYkdS9m6FH",
  "key21": "25NVE1snEAXPemGvwBGatQqkpa9bm4vXciWWXDAV1dtDoAfAmgGNjauvE4mgCN6Y97Ms1c4mPAEhAHvsJUBu1WT9",
  "key22": "4vAJBWDq2nvHP7NcqKXxp9RM2eF87zurbJRehDerhsnsfQfBvR9wWALHyQsEnif2jUPnm9XsRtnmnPTdXtFGXZ3q",
  "key23": "2AKmiLH9cTj39p5dw55R6mVaBwytpwC1j21YfiFs1TUmdm2NfmBudczPjvoMWpDKyMCK3MFhCtmzAZc7ZkYo7ppe",
  "key24": "5vUr8Sht3kE4oACjNFNSR5ABM6WHcNEDPsnRLhzR48Tv7MNM9SZEjun6moA8AzMcUo564NuoLqVUcJbXfkx6hkAt",
  "key25": "2tcGfhGZxqkjYkoUwJSvMn4te3WnfpADHyekJdaYYXQdsb9AFejPzz3AJdSXgfTk6pyg6DH4zVKjgPRHffmDwY46",
  "key26": "3xAXUU3zGhPBC8jsXY8AyzpcomZirNq7qrMLSP7WToAmPh1nitfi1cR945TXLin3xYdaSpiF3qMryW4W9w1AUXQj",
  "key27": "5DDtjn4D1JTB55WHnuoXWnQZcnbWak1CPHx6tn3e3dsL9gXGJxC5Zqi4f6aETphQS4EbKhwWca3RrTp1FoEon3no",
  "key28": "4BwavJ9ccZBuKkuwysdmFYg7kFSdrWGNAa4Muu2LFAjoDPdVjxfFBfrYi7qxgNRCUnrZt8xEEFKhfxyskwTJsdmT",
  "key29": "324Q3oPySdt8gmT8Tk3F8C8crq9U6GqZb5pntdCh9FCPjMrqXryAqkS98c4KhwJHfrX1NKZMM5DgDs134YGFCdEb",
  "key30": "5QQUtoNFiEoPZVs4DELenMMq5edea4CPaAYuzak5HVs9gWcbUoX5NWFAoH9ULJ4Z3qxBWXV3Dn5YyiaqntScUEnc",
  "key31": "5tPCK3Zknj76GGVbQ3kFpS7SQvuZAyfv8Hzb3kpeTkULAzgt6a2Yc2tgj7Vs25anp3NTaTdAbt9epX3J973quXbD",
  "key32": "5hrVgpzYKApiPkGtboERfcwfpff3ritzxGQK7D2Kq25AGaMnr2CNLGkDPmUkVN8zNstNyDW1FqFc3ZiygwbyMubg",
  "key33": "2vhQLRttG9AYUxqWEYBAY2V8BfyQhtQB3Rs6wtnpH8dnYR43Ry113mgiwzJUuYFrE7mn4QmVzQa2dcXS1duH9idJ",
  "key34": "2TFo5gzZxsucKCCgwGtPekszTQDF735BPezVrSkSDvUVtFpVXxXaM3AEnsRfxieQ75oapVDBvKKiRXMz8BJvQSWd",
  "key35": "4QTfGs6pSE7gRuaD6TF9cuaKa7dSUbLnxizoeLGmmL4KVphTvUGegVdvAj8dpsqnKb1EH1oqPEGhXCuszxQQzTF"
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
