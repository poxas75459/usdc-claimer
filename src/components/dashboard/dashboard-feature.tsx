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
    "32QkMqaEiG92RRGX457yAFy8zBMpVdvH7BEJJfFv3vL74dRwzDQxue4h9yPP6GEMMEetcY8YXvUTLDBrKGVZ26cH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MLRYdD18q6dhwnCxLhRf9jPmETmaWCUtCjTux6ZehMJctLnpjZxHm9pspVgFMYw3RjpDyp1s98X5qMufwEbPSPG",
  "key1": "2eWNYrhn8aUMn1aWNMjgUvN6tTXF7T4eFeJa98iipYGu9ySPeSVfYEGdDEHQc7YLNBo5SjBCYwqAVxirDVncBMvP",
  "key2": "3V13znmovP9VJNkUE3h4LfUCHDE8Bggn6iD35Kh6yS9tMJsoFMFe3kH8uduqN4CjcNBLMqp55wtr9qsc53m8HkEg",
  "key3": "PbqimW6AJuzBidNFgpEtdepptZqacX5eHHZvkKUkBMbEkY1Kgjv9HQWq5JGFD5fEQj9J5copDiLpmqBEVRdTZKT",
  "key4": "3J2NFAzoN57SvmVfcwYGnNeDAHASFTq6gmPVb8v8nqkkyrMWU74HfEoYr5AJN653XpyyBrWnj9iC2NEQ65zorq9T",
  "key5": "4fkmXK5Tx5aQYkwDJiPW73ddXkZLh3c7UbGtKJMzsSErwb8yqLEbUruoGynVLU5kcCvrnQVjrsS4V7nujvxvDE5z",
  "key6": "2QReLWmGEdp6U5bovXURsqoRtVds6j1wGyvwv3B87mFrVevnArjhRV9zpR7CgBA6PyPzbU7jFNkWtDBWMjUKaBtA",
  "key7": "58qcKxE8JDTvW5scqoCfL2k3GWaFAFed1PW83s6ixaMZwjdzmMsvxH2rxC8GZv612Xvq4d9pyiCRgGNq1HLU6wpF",
  "key8": "2tyUD7xiAd1i57QSt9X7Ee9X37EnadmUyjPdfF2fWChpcJNhmLoTcMXhry9TctxSNhWWVxcNK1LEcDc5pBm2nxqr",
  "key9": "3WLCEb4rTptRGnJkvmF7tBQb6qBpiMpQtPHyiVxoomdyHz4GY4y2Y4ymncuYjCVz4WDj5awiJGqb42mC4r141Mb4",
  "key10": "ALXRMzS3FnAEpjCYC3FAz9ooD4ZSTHHSSiwbj6HVieMtVWxhibTL9pDofawiDoEe8ewTSn4goebryTpyaDPNxDa",
  "key11": "mUJEf8QjWUFTmz5kn2h56hcQqqCQb3UDmmkZQq8qdrW6xcmSWRz84HaUXMaLGqRaA51tFq7LPRNgncSdjNj6mNH",
  "key12": "3XAr2uNNqTvXNmJdZBbKzhZZeNSNXHnuvPD3xda6r74Sg2MD3ZPH1wJN9WSeFeDXwgt6DRNirjzS4SUmgmPYnU6U",
  "key13": "47mtZAAuhf1wT8Wwd8bb68UyWj5ESKnez2qkw4aJRv3bNQc4oPaR48snHvPYvfDnekKHoenqF8bQUqy346GfZTud",
  "key14": "672d3SuAJAxABsYozQtARgGXvCrgjQn6mcwq9DhSxFqn6Qe6UN6MxNykZ3VtRNKDdenMLAUqDVvbHkxmhH72zQFh",
  "key15": "tAfmzgLtgwwkGNAueC3sdnf7ks6DXMHSbKxjjYZRxgoaSvQDoX9hqJTMdP5hKY5Lyp5X1Wm46xRpYG9KKxK1sMx",
  "key16": "DqejCgFnv1YR6Q1yumRZAekHubfmmHrMKzpRwm4KqzfuWTwAT4r3jhWh3yG4je1hzf8P1qQ2vUJTzgF1DUskTEi",
  "key17": "4rSuBwCZFAjVGj7Lh4cCWDgQ3ZJ4iwcq8C5JhSCLBk7rmPvd39NL5ufYWH7z2TzLKA6ywUyjgWFAJJ3yEKkBZzvg",
  "key18": "4uixDwdrQ7WVbWJUqLSZdn34HV8JKbVMcTR4479zppfpgAagGasBc1N74vw3BriWF5Hrg8WqtogPd7kyroRN4DV9",
  "key19": "4w9W9mMEfY3XAQUtNVd8s7vUXQYCoJWS8EXr3NvwdgqgaqKZRyQySskDjijXM6uMt4NjKgZgVMKRVZdPWhzG3KmF",
  "key20": "5ifsnMYCJE4ZUg9zxN3YAn5C8kDyVUrgvTyDjT4HGYPjURPJYtmzUh8TCdCDwtVZMHXzL11xaruk3kQzYzPs8uwo",
  "key21": "3zk2LnzTpiPt7TMsiQp6y5VxrrbDjeKhyYvj55UCf5RQUWSEFB5y2j6Die94iCSxzWF9sut51d5tZZoNWGjWqitB",
  "key22": "2WKxcEEPYyMQvu3rbiVwEprgtxV9ZEPkFXmkdYrPtQuTg6Jx3eDXtPGksW5QqpGTcr3tkH898msqWS1e21hcJvRE",
  "key23": "675ttQwQbJFom1TLkh561zvG5sqfxD2tYRsCuucTvddQ5Cs1o9jdMesSAp8iZpWSCDpJ4SZYZRjbGj6AA6HZD6wQ",
  "key24": "3oAn1pVALVrMYBViQzb7gzuzvFxSeQhcffrR17RXgXeJ82DyBhw9LQ2Pxop6xWHUSvgjV7FmukseC1uAZV5hpcGP",
  "key25": "5qWSjA8EZr3TDqujyZQXRhMCD9aEr2iKUjbgg7ECSqH7bWSgBXkrr6S7gw129JjFndngWwVxqkb6zTJJfVPxJXv1",
  "key26": "5F6uRaYwyb4d5CFPcAYxjCqmBcu4M8Zug1e8Ww1AsjuBQaQs5b81JaxsKwUhQ562wKEKxLaNxYLgj5dd21aLiEPd",
  "key27": "3xGAdkJnFYJgeoV3cw37tEA3NU9fjaU7ofBitosNdda2b4SxfU9YeYv2TBTciCFSSsG8qXPsKxhBT2FBiXsajxgx",
  "key28": "5QgCVj4EhugEbmPqMnbiqEPqUzFs9NZVHavRNCrVZwUjZsQPaSZocsf4LG9HeMw3uu9UsbQcXgGdDn15GT8u9ppE",
  "key29": "2CtKxkvmV3a2uvAryZRTUqpAstcExv8yQxFv8aq2uAEeusR6eZMUKzsppZ4ng8svtoH6tnzL4GV34U3LLJXa8Adu",
  "key30": "5Pqq4t54rHNvkFunDQ1YfCYkjK1cDnMvQDsEyA4pruCuKaWHuqbLQzX6VWAgtCU7hsMf6sCmqrpJavgStUZPAdb9",
  "key31": "35bEfwFrNKmhHhVTYGrr95SJxkVvRENu4UEMGBzJfY76vg4zDjETBNpJz5KaQbYBR5j3JKTLPDt4CMxbzUyUxeew",
  "key32": "5wSX5qEbBTcf6DP1cHQ6SLv3Lpavje2Ppo1nj1v5LufDzTTnM9NdMoPQvAVgj1v3u91fWW3njULj4Ygf6N1EyZkc",
  "key33": "289GEV6PSuRJQr5CjXn76UxB6oU6jLH3fZwhzoFxwVFJSv8un4oPdwsADK9NWiRtPDmTtYYUmZVww2xSp3XPwoxj",
  "key34": "3FhedMH3qiGN78NUTsGKNfyjZgBjuofgfFtU6nHnL6tjKNqRHzjCYLZ16CRsEywkyBudptsgYrGmLhwL9mBYLhkh",
  "key35": "43Um7jwhWpFWEfbEuKm9pofhpNowh1cxfw5zz35fqjnvjhpbyHzTYQ1DARYNDMrPuqcGT5EjvxLFpAfeBMLW7BQR",
  "key36": "4x7RzREymrW5HBsbqqu9DcvQKDwUSVUP3j6Cb9MSA3hyuwoctWYWeH8bKwg5NQSgnozZRRzJNM9GQfJvtPtp2Bsr",
  "key37": "NiJxUPKTs7AzfNh2Lb23tSt72izrDEiKwa9cqWMhjTapeKysAD4RpiXBaexH7m34vgpHEomFywLGiiFas3Nka27",
  "key38": "3iw9ACp9HaZrWrSksg9qr8nHGV592gT9mEpNjoFVLXGYwmupsatHS49SLZUWLuACEUCzjarj5Uhu4HAXi8oK6An6",
  "key39": "41PiiQZGY2a6hZ6J3mo7Dp9gdZR4hTP85xF4KU4BK7ha8uwNriP26CdTCQujRutfNPJ8bLFfvceBDJXe2uZpfex9",
  "key40": "5DTzQU35zAnZrC8wuU5RMX2FnKxRBiVYzmKi4rWYF6vVHKYDKbKnaUC3ufrRSYUPAAUQdjQngRNcXcFLnSYRxm2z"
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
