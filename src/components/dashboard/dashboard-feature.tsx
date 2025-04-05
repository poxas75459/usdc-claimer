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
    "3ucwikaVg9PzkH9aAYuELBAScz94yui3x7gmBjEhipUSKBWpgk9dHzkonDXbEBGJHiEkjB8p3T1Mh9ueVhKygCwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UV162osihqg16R5CKPaSXYVjwRpUvzm3iVgVBt2QWeddh9xAh2jwjbAaAcPqi2Ma8Jebtq9dTcegMSsME6rsKUd",
  "key1": "3MuU3B6m565aLtQ1H5m7UXjTCHzt7wkQATe3M5ko5PkU5vs1UCBkd4jNd5iRvXxAHYmBzK3z4zBjw8tvPVjdpuxw",
  "key2": "4APEVgCgeRCAbYkDXH18MWKeKQD69msWJ9zYUWu9ov3977eG88LfbZT7cWPo5pT5k5mGaLZbXD9Vw7gre7Gnweww",
  "key3": "5bnBBxMskRWPHJgmwjza8BbEzrB1Xfh6bfd2njFR7D26Q85sSAcHsjrG8XVGSri3PxJ6DBtxJ92k2CGeskPUuGcJ",
  "key4": "7RNVyeaWiA6noVHkBFPTEftyDfwePjSas54MoffHdKw6qT2Tf5J3UQzxEFci8G1Ygeba69mYkoNgxvvGKjbX4aD",
  "key5": "KsiaYps1aZsFoWaiKSbbYB5byYnzZ4WYZSTPiNBfxYxsbV5yYF4R8d4fFkRjiqvjtcZBu6CvagVtoj5DfuAYNKK",
  "key6": "5uV2d7W7wbYhp7TgN9pdeAWigdbEq8i65NYikoiYMg8Ys3o42iTN3kwpoM2jZcnbHbTxwZAH8by48qUjak7ivUqy",
  "key7": "5rqXu9cH5fTbUkdkhmfWx7GznTERH4Lw4gptCZ729kwzMu13Hqqk94pu1tVeLrKyzPPW4Qnt7VrG45MhqqoTj7p7",
  "key8": "5gtTaF8KymCHQuErifrh3HXd8ozXa8FJAVaP1JD7pAn1W9bG5wo9h27bhWgG3iJkURPJhwARuFndeB9PxJR5NLdY",
  "key9": "3PCRFVq1cHpUaULKEWLeYeasJrCC4QhqPHmSEdFQa9e5D1Sy5kwRusQVmcewfFttj7Dk3tmdZdQPT1Ft1bZQuRdY",
  "key10": "2oHN4yvhVxp7z6Q2xxXxKmb88m6b2XQ1xLyW4GACZHzuE5PweuvGxzhDZPbBcBCM2Kf8iTDAR3jbz26eUgMG1kC4",
  "key11": "3mdMNaMLSA9FD8Swb9jXo9uoUR2A5X3SgGUEnQhsC9TSgpRgT6osYCyqLdp9jtQviiKxuvhtgfDGPcj5SDdbYdmV",
  "key12": "3MgR9ecbw8EfqhUKztTW4VW5mEX2WBXxJo2sEkUgJAi7mFyBLZV5Me9gNzTZKuM7NS7hezyxAr6oxmEWyBE2KHEu",
  "key13": "24Tq9Pog7AKMqXtskuZF6XWnwb3mqDoySNLe1SqRses2T679mGPeWiB6rGMH4f2ftbMkmbvPvWxbViUimzWvppuL",
  "key14": "2hW1JtyNkqFDeejdKWQEuqESXwes3sGcJ84oLNpxKn1Lpru2mfdTpWAgZC5cpCUBKQkBXtvTNLgFtBVxsCbgtd33",
  "key15": "8WKWqkRabd9yXLda1RJUifHNxR1RKbcN575C2T9oE7YvSgU5zWv3HTsBGEtQxPRyjbm8wNEuiJYcTfUQgZ7boAi",
  "key16": "2voeZUCimXm7SZgD5rMJgu7otuuxHH8u76ZkjcRHXrprCn8WW5bRCjp13fiphXtfzWUG9bRbzRahVEYCwzcuDf24",
  "key17": "2jHQsHBNjRcQcbozemUGv5LnWzZYk1SLnP9186VykgxEB4ccchqzHL4wsQ9jZwNqeAc3wrFy3an82R5SNuyzsfyp",
  "key18": "4hh4LQzhK8ne657EM1xtycWzHHR6aTY4xW3c5U5gjX9t8yFRBDZAtxupe9jg8igDFv7YreQppJUCYCDrczkgKUju",
  "key19": "Kh1qhAqiAYsctTYfVfMQVEKG9B7MnCACRBK7UAELcMHvDBcwvCpNw7tioGYvAPJ56FHtdneSaTJcLxGSiy9sNmH",
  "key20": "3mgUwfhq8CKLAvuEzU5XEFZyXypGo4ehNbXGaEwyJfYLj6qVFjb69XW5bQjGzWn5y7Azcasmq6nWSsVmb1TSKbFA",
  "key21": "2TMkMesSsnaySfzRMHNP6wPNQ9rRtmfAht1vm833wv1A7qEGrvLdyp678bpLnmZ3hP5zhboxpd6y8SRDxHVrJG1w",
  "key22": "29Caz1zd6VvuiZJrnFAfrLfhTooSoGMiPRVLQGvt5qrXXhSAg9u5Ypam6xxezQ9XeBhNSCqexKvNF5foQ9vBa2Nu",
  "key23": "5jxu6nzuKrGY4dXvxxmFkQk7xsyEQnYMrbwU75TsZrjUCrKEgFyebTS9jo6ApKXEm7JKfwLj9NTrHxzGPWdd1N8b",
  "key24": "5gxKQvQYsH8yczo5Gc3QdTDBJk1XsV7quLAJv47g8vfcPLSkHrGJu79zV8ky9AYZGZKcWV1dxQanjpEtJYKibyhU",
  "key25": "2Qocm8yzMbkBTnzusJVDTemCpX7kgPgFQsJq9oYR34SGDRwd5osPy5matXD7fiwu7tRGU86cGXSQpB14ZypW7KWw",
  "key26": "3eRwUGjbqcHCSxTgXEGtA5oNEUzKXceWcTA2bBLu9cTWgH2HJkbjwAEo3pcxTSNibPqSweZjLUnSCDfYhgWAAPrx",
  "key27": "Lj7mdqpGLd3EmX6UJG5svRE4Big3FJTCwK5NfZu2jkXVD54RJQDHNrn1j4iqm384qjZJXVKK9gFSuw3HddCRDVc",
  "key28": "3uzUWanxF6R7K4jv4FMMevELMFcSH4Jqow629meqc64WBvCwvBF1YVvh7JJkHh3kqbmzTgwmh7W72doJgdEhiToS",
  "key29": "T3YmBwDip3jgmaz3roZ4YssWawPhHFdeVGHL5HiLybyExUgnK5pyFoEGejUChSgyP5qPmGJmDicnFCEEeAY1hxP",
  "key30": "yQPAd1zpGZB8aEkyBjEKbvSmtkMyuRq9TdVpySW9am2DgdUraR9N25EghSXm92HJZzkY2a9N57tpk1huweqzVvE"
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
