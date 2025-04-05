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
    "5RjmE2gumcubZnHsTvjMemK1oWSz3qznUq7eFrpSzvqs4NkW8XqpDnc8AJRV6TLRBryEMQ2S9cLtX1WESjw7Bgiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JWrbakCc5NUYDLr3KU5keaoTY2Ju7Eot6LpGW2mVYDjNrxqmkkxoGQGb5XUkQ9zdUEnNDJw8eauENRt592s8hkW",
  "key1": "5Z9B43V7UhYcneqcyEE5eHhDn6PkjXqUMMaSPZj7yc2zemXHKyaLQRyL9h3U91wu2XzxP6q5QDTyvPLJD6x4sgJq",
  "key2": "5YT46bg3shnyEGKVjr1jaqqVSbEYFcT13AKMNqj2njFCcHctZSMQVscmhF5NeWuGqLFGuwgj8ZvHbsM8VjkVR7wy",
  "key3": "5Y1cuemiBLpMPtomNegFnmK21DKAsK8GYQ9nYzSTa6h8UmvLRHvHkN3DSrkLzU2w6nj6HoWty29kLLYNiNUwirp2",
  "key4": "qepKS6CCuytnd3DveVex4vuYYZ8F7KaLxHi43RdNKtYL39AZmqNsfo5VCfuqgNUrQWH4LjK2zbEShMTsMMY7GpR",
  "key5": "2vnqFn4BDLChPu6nrCTFf61x9EiU792QV3NZUC2H21GaLMqPCuzRLpQKzHQp5ExJKwUTUyXEEzJx3R5zBC6hUXF2",
  "key6": "2QsaB5pDnz5CSuXsk6ktGsyRWHqjD9LdZxsjBbjPxfVKBVHTjEQFwkXifMDtPnoeh7Mv7kxJBCcRu2r2a8oRWa5h",
  "key7": "4o83Gke2T1CXSsUvgdGDNwPVeobj3cKMhDUW8BN4Bnpat55YhKneXnaJu7RMC9EMDyDK4W21hDMFNdPDKu4V1uw",
  "key8": "459mtYbgLHP5r9fXvwqDnXtSg6NLVpTg4gL3aUtqbtiaTZ5cHiMthYe3foYWKU5j7LEy8uQrG9qT9dYPqQPjR3Ne",
  "key9": "2bw5redWHw4Pt28iUf1u3m8DkcjfPWHyWsN9w6tnnBZXNzhGeRCtKHGFN5rfp2GS9XHKCFL9zS2ojAprM1tdxq9M",
  "key10": "3vFFLsnNKjfUP7cmp4qVPnhvK1LT13TXPFtZqLxFfUst6iB6PC1rjTyVQypnzxSvZaAZ3BwC1GvyH9jHNAd829iw",
  "key11": "3FzYise3seoptskGtJmm7oq2ywrrxBPJEsdpTCzcCvcvZn7T92sisvpP6FNfhVRdnqT6dKhAwX8s4CE11vB3iR1P",
  "key12": "2GwxKTmGwyG49xoVrg5f5LRiJ3htL94uSCma6UZJhnyz9sq82o12TcdZvJSzoqpVhspM9cb5ZPmvNhqGW6S3nizs",
  "key13": "2fXQWYjsGJGuWXK9mBQBx2XtK6QoXghaZFsvFgeMfv8YcFNzWXiGNR7EC4czeMQuiHyUFEBvDDkkjesGrnWeM1Aa",
  "key14": "3JVxZbbFHChEZPiRZUMK414PdcU2G3uM8mef1RT6XVZEwcqzYwSohQVwF1pxcwytNHjuqWWbYLHS5d5ugSNeoVPo",
  "key15": "59ztrujyFu9YdbjBtvXiNjL6TQRv2ePB7BpUXkfqYU4FvT8Qz2GVFNe86phsqUCSbHmpJWM3E2pwBNK7dGhuuUZJ",
  "key16": "uWZq93EXWSJpTMY1wF7tjCntpBHBjGJY6oo6cGn6BfW46xqPB4m3sSrsoxD55voZvf7tR57tE1FW3FrVAG2sgfw",
  "key17": "56P4EAqm9NchozjCMZqQsYevmeAK2MVUNbekLPs9Z8fp71nF4KhQMsqijiKtf1wytCeQ7a5vBYANYwEUZrKRSbb6",
  "key18": "1KRPXYbBbYpBsY9q7unhJ7Xd71DXKSzfrxi5biq2bg2LsctiNA2faFKV13bqAUCQqYkzaoUB8NsW3zsawyuUby",
  "key19": "62Y6MK6xwoDhnmDnSaVCdwS93EEYxzTUJHqA3YsKorzEv2EfhS3wPUWrLyCBZr5nHN9JwBkETtF9hKP8NmZg5wfN",
  "key20": "rkfYmnDPexVt2aaAu1n6oJANE6tRJvDfmEjpTxsVv1fWsRw9wetq8D9MT1qgVz5ect2Zok4nPcwnW2gZsBJRtp5",
  "key21": "4HH8paQfoQjifG786DGm3Fxriy6i5KtjnDbE11aNZAGKmBgfcM6YHUWSykMnxoAxfJcUTSvbgj7ggr2BPG4Q8j8h",
  "key22": "4vcySs65agDgqiqB2MhhjdMFjmHvTmRBrWmeg5fwFWPdAGGKueqDHmXWv6Xq81cHnjyNYRkjCLrPUDnqCJA7iTEz",
  "key23": "4YYXHaoEF1FRBmCSamZ6GMxN3LmtJYb1aMwSfechas71G4GjYUDTw2yvN5eh6wFhHh5NU1NAKrVcHY2GLesz8gLD",
  "key24": "Y7qyPsRYkLhtMrwAHC8tGbf3TAQ7cDhgwbMYm81w6KVPJ2JRAu7E5xjG55LfHkY6xzbF8mHhbGLSeG3BYZTVrQT",
  "key25": "EMaUhbTTrZsE4zmPG6MgEv65YPNmX4zrgekFYjzpzPDxPRPWxdJhwT9Yt8Ut2vPVVarADgBgFR9s8Rd7xPeRhzh",
  "key26": "4nbaWR3kspAnVB15tpSkH3NXekGVicY1PZYdQkwtVrinzdo4ydJ7t3NQJLKkxnkNS9cdnHjo7E84NBWkoC9TNXLB",
  "key27": "6qP5BeiSfNoRKmtWBSd41xSnnXvUbcbzePYThpjjzzZg8PamE8b9wyFvuTR5ESHB3o61neYUp2eq2gWRcWafRDv",
  "key28": "ygBN3EQSZrXTtJ824x5ZaNsncMrt1dhAdLSYHF6rxc6yrPKqHgwFv85sNrSWzVPe4C2hS1QRNcPELU7hYN88RAQ",
  "key29": "2KZPkbuBiurwkyQmLxtKFpnohBFHdtGzNjRZfUFi3qC6ZuiKr8reK8cFpPTNf8i2erpQEcGjjzMVcYugu1BqL1s8",
  "key30": "62pnUF9y7xLrGPHqxzqrDBMbvZ9PNLbAFQMagucbTMGNBXFiALoVn5PfgAjVqPrCb4YtCLVh1ay35BuU9AQNU8ts",
  "key31": "2kHYZ2WdpXhMq7oUeAdty9eKUsNDkXQgAk57wJT5KfX6eAFq6ST79tS3V8nxP2KVQCDBLbBJwA2TA1muAWzEU4ar"
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
