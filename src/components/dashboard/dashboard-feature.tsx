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
    "3wTypHD1u8gndHg3nuae7PSoomjYcity1bViUJdFT9SCEtabENnm4gSV2s9FzmiQdH9tStBbdt81nPhC3zMGGGXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28SXWx8xyfAju1FsKxmW2YbjQkzi4AfHrcmLtKUw9cnkPVQwBVTsNtX4MsoZrnxunWEK5UPw2AEnamkbYGZTFgmU",
  "key1": "yxUmXQGJtiowc4uCwtPbDwKCEV7GXkkPTrA33oxMBXqEu2ow79xzaYRPxHWiThG9S82iY1zDvLZ28ZMcQRKE5Mo",
  "key2": "4vsLZSYXHxBXvwJwtqJ1fQV11zk4SXK3T7PK8DG8hV2cthSwkdHH9nB7s5mJgSjfp1DMnoXhNgmgM73LNN9bjSp",
  "key3": "bdg2ReoprCB8kfpgGU7ihSBxFgfac7GXn6YPu5Q4rHJ7qpWW6WFCziHNh2EpxizBwKMDxSQXv2TpQMBH2bpCBw7",
  "key4": "kZ3E7XREwd6womH5m5KSRSTD9egVZ33Um38Ar3hh8VZRV3CuHXbgaWvoMEyBRTn3YrWum9ghEZkPxmPthtLXTGY",
  "key5": "4NmJHuqnXYQF3KrQsXiuwdPxKfAd7qdHuHezck8NV9cBqx44MbWasyk3t6jF52erRfVxeoZfKKG2eX7Z9a5ZWQwX",
  "key6": "3afzLB8RpZW4zFRCELGrkkxYewipABPAi8CBgJNyrMjRRLiux128PDKKm88fpsrzEjtTRx51GxJKN9WvmHGEGUv1",
  "key7": "5hYixGb9nwFSKHEUe1BeYo2K1Kpv55FwrEazV5c5MdtzyVWQq1GYK7br9iescZWSmqPvK6F8NK7K32BQ9awEqqoj",
  "key8": "4asfy7w9yaM83Et24RFLWMzZiLarFxpCLSqbr8iG5fEXtPUbLdh2Gd5tzuvaDcxA7KHVPc1rsCAaAmAhUKGUz9cw",
  "key9": "37nvvzxfz6AGGxvae7kCV4YDhMRAuoqgp5mDdoUHF9G2NtpJ8rTqcogQuX7ZYHkWpNeWr8FW64xp1FZeoFggSsFK",
  "key10": "5wSNjtvWw8VFfLkkwVkupRoJSAMcQ4ABJwMZzDHByFCseNbWGRE4wQYZxtf9jUBmgTuRBpBwBdN28XqiXykm66vz",
  "key11": "3AzZsa2vDvY3sekzqzCXp1ddxzQVtHxuDg5Hd3WDhxYbY7Ynys23mjxABMopFdMP6pLegdsRYNmPFzmqiZy4YETN",
  "key12": "26Trpz253U1sXsMRufE3gqz6J8Y3wrdRkHTVaF5UVkeXVgfqREaL89wd9SEoVd6TEz1rMfjGRD6n86PZ5i16d4L5",
  "key13": "67LHt43qnso4cnS2Vng51Ti1VnGjCtycwfxPjg2ssbXhtBMvE9gHFNTzcycEHDBbuc4FoDvn48A9KBRfx4K3TuJA",
  "key14": "3NJoVDxJXfJG9BSK82AYQH3yuC9uRxwCkS879kJYrEXB3x8v4k7wicx5dz8og7QTVnvmgX3y4r5TNdPYxryZ62n3",
  "key15": "3FR6ZFFVBQ7vpdNgR7orTLE6gCRjzdVv8vNCtmkpZwRt9g7txGBPQB1p9wRpSBKEP9X54r9vQ5CdLt5TUWVjFM2z",
  "key16": "4wgCHQPBghRdnnZme6y2FN7GopQJpHbjHAs9Ke3uwYWbMgGEeSNGwhvArnvE58ThGPU9HEa2mnxp679xqzzRfPBQ",
  "key17": "3zypkyxM2827jUETLBZjABQw2uzY2vd98K3x8yRQYVmbKDzwZTseTTR5sGNZXQLnSBNuRhsPMEiV2NiKd1rF7Svr",
  "key18": "PzQ8ERE5Mr8EMmGnGXn2X3wBzgqj9cKVs3qgpKYRPrCt3KugUqu9E7HWCVYsYWZP7v29mkCnP5CSWaXecGL4xvw",
  "key19": "4xa2p8nGi9nczbnZ8a81QCcvg4q89UFcWAPsQmRAoKepnH7Y6oSxExST5VzxYq1CTHtFQYDT9HjSz2YPknuGhJRE",
  "key20": "2NFN8gjxjx67cTXcjsHpScFKL5pGFTMvG8buwNg1X4AHZxvDP8Xdhu1SZcuYCXZUeLWtUfzXyusUEkgAXuWpgnc1",
  "key21": "3QhLQ6zJ7ag3Qxs5zgbXw2gYLnZY7hnFHr4AeYytAEW9t1B4RkZDasamo8NBrBDSee47U1njdQzre5v1AZMpWapG",
  "key22": "5h8jqM9Rwp78VZZPrrFRBLESj6vPMeNbFMhtHCihGtRWhtMvJFT8QCV7Lev58o1mUSxXzFR3Ftum2s3cXJkzooV7",
  "key23": "4zDouUyeccuy52pe69hEuLnMurrgHqoanycEubxhMXS6W3wPmMD6B3pkyueUQwHVPw8tmNYmW3cqpjoWGBJuviC4",
  "key24": "4RA2bKYqDfBb4a3XwJZTXbt7bNJ5BiFEbMymn1vtWbZ9YtMmieW222nD9yvEdkTC3f9rcqEWAyQJkBXXLh5WscMn",
  "key25": "4xwJQv2QXJprFm3XYg1i6vSJX9Lpy9pjj5JSt2j9zJy7RQF7gqR4d3vJgXmBDgi8cf1UsNUJR3smY7uZCcwfF7Zn",
  "key26": "3qxZTYVaiqxRoR27mFgFt9WNb7Cw5s6mLwGzBCQTXRXSvtsqFbp1pYfdDLhFXMzsvJF6zxQGi4STAwnqFkVmPL8m",
  "key27": "AHT9iDM4K5aPgNNSPMqAQoQgfyg3gjTjgBHUvbAdAosgtCaAvh5mBTH7APD4gNgLqTj6v4xVpaw6Cbj8FRUmZeX"
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
