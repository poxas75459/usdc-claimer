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
    "48qe9qWEVWfTGdS4p3Xn4bph9UYJsojTjuRYuCFD6WXitzpL8TvZmX1a9PbnYzhDtvJ6NpHfXidoYe3deCtpB1Y6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yod2s3UfpFCyzbWqpecTJ8vJTSckWeA1iMXmokw9HSnmJzbhdaFZ5NMX4uFvtuoZB5yxJCYLdgxWZrfioKkATn1",
  "key1": "61xd6p8RPV6scnTkcpSWgsxhcZvM7EDGE3HkadiUB5T7ugofF5wU78vPizWTyCWdD7fEdrGeupx1sJvKeB7zCEHb",
  "key2": "YGS3Ta3bhxQQcF5dhaagkYMURX8FAVz6zkL8JZcFRX2DyysnaZHdfrL2wUDkfetVpRXMScWd6TGnSNUB7wuvrWs",
  "key3": "5xNQDHsbFtNTSvFCyLJrRH8MHsvDe7oKsrKaZVXL3BA4voC14v9Go8XeXsqCFsH9M9KG3SJBryWg9gHwDmZAhJZS",
  "key4": "HcYwE3NFvskbJqY12BSoDrW3YiBAD92RvN21zu11Y8umLvLm6RHhyupogLTKx43BBKkWYk2LZdRhY9MmvziDWFq",
  "key5": "ViLuMAppTWUCSSmKQTbm86VxzLDtspEjXpGcox334cHemSvEdd7XHvvsVayALWHLsBJnZNE7CY53Mp2fUJuPvSc",
  "key6": "54WiiJiH11ZhdPc766CL4kC5yWkzDpFmtZFoZg6Qv2QuefTycPpNCUSfUnGeDBdabEvfsRAoQjj5WuJg5BBUdYb2",
  "key7": "4Jgash11H8cFh8zvaz1UbaVJ8zA1pfpZUTKZkwJnbBqUcjGBmnbc9uwFAWUKwyAj1T7HJn6RDLQpRphvBN2j1Y1X",
  "key8": "2wFBtAKsbHd5Y8rgeVzCpmEy4KfK4DpkbSAYkt2c7HagzYit9puMS2oHZvAuKREVnE3WF5Y1jTRkHfr1xJwZupEB",
  "key9": "2tBh45sRU3S1SndymUQjVNVjicqXvFrt7fcsKkxbzEv4CCryGk5VxANY58w6ZEkABHAnQXRCJg3W6tf8bZzFAA4r",
  "key10": "4u4vZJLAuLH97ibg5e4FFwPbysTd1boyCncMjNdPUgjYnrAbirn4uZfHH3Y1Y4hv3jTEd5iNStGowTR7nSgyxhHY",
  "key11": "2tnPYtaqTSNkoWeTRUEBKu8ZQaBPG7iL3gDfeSu8Z1dY2oxxAncmFMGD2H9Cah4gKM7yyV349YuwapHEr21GabSS",
  "key12": "4jEjU16iRfcq8sZPqcP649nqoWGv71KqsEuZBfRZzKLDKmh7zQZnVSoJs523axsoVf1RDCjBWo3iZCQta53V2fNg",
  "key13": "5gpJ1UqPabmqDzZQa8sAJzyKD724J4EzQzpnNeSEyrs6XMYepAnnKH2GjvTHefo47zQrdGFmDszeMh7wERfb7c5n",
  "key14": "ifSjhr2p1JptzZcqkTNb3BXD8hh9UKfiFnpDDbQknzpMrtsRJDPuKkNZwDw9BvYGFvmYZpsQa7jBoMhuyMfbNzi",
  "key15": "3k1RF2SPgruW2zSpxTB96kS77AWhowPzsUDKbtWqQphLfaafwydik5k47tTMvthjwA2rfSw3nrrPw4v6uvn5pgpT",
  "key16": "4nyLdrnFcCNSxP1ttJP7i8CsWmy6ek2XPA5jsz9xfrg3y3vdxkgH5DuyHv9Q1u76fTVSNHZ31uYmCM5sHcMxyf8p",
  "key17": "4SNZBuxW6Z1ZbpgR2maQtJw21AVZyD3qQu1JdkN6nxbSj4gdQd46cyuJyDpk9hZbAdMtr28PexGzxHTKGywRmmaQ",
  "key18": "4eQ1qw1mYepfqrmGUfKtSW4JgHPDws2sTwctyBdqUMYrHuvH12zjTWJDQYwh6Q1SpafCpWQtvh6Dx8Shv9yBe3eW",
  "key19": "53pMWqXXS4JSS62Eq8oTjGFedecpQRinFMMkA4jwumXvoiTdo9CmFqgx9acSzzPv5igEFq4845r8Ldu6C6qmCnjp",
  "key20": "65jsA8Y7X5WW1TeGTDnY7kYyT66s8Gh2dvvC7onivh1hrGY9HHhg2RUGESAXttNWeK4FEF1zvhoiah9UTUT8XmPz",
  "key21": "566NSVm8TGmVGiSTgeJabG7vwFTUxUqDr8W5jLcHSqUsnTu2herzC5o8XQobvvAtgtCKWCQVFZLRHqce28h4EMPR",
  "key22": "yuy9TjdULAXbody4Mfjh5nmApyF8TMMN1Jy6VdpHfG7FFi3seqBg9vtELWNRxPavwsZk7WY6vdGFnKVzeTFbZ3a",
  "key23": "2cqG9s4v2NBLtx5wAcGBgc25sZh3i9hWZijRsoz33m6xZWae45EX4XUpHAnVdHo35dkgczsrGU1XxRDcEfbNM39c",
  "key24": "3hK9TUMphvm9XtYkzmmrMqPqpDVhSNx9DT2Kt5HXGPP8z9wbL48sZKytTK1oxtd6NMJ8m9Yt4tURZgmz1jtPSuLj",
  "key25": "4oNUvL7SR64Cv78p3g1y8Z7XL3bgqa5chmeRKv9Lx9WD5ghgYJ1GLtgm2DALL1vidfpcSt7F63EqpsaQAbjJKrWw",
  "key26": "2V3muGYBqYduvekUjBd39yNbCLkN3MVRiPudoA3pd71J4CbTCWwN3SBddpaQ6mSmQx85EJDW4r8YcvhbM7aK6dcv",
  "key27": "3jPQBRDotepNHPkSNo8FQdjT6RFdZ6vo8UJeso3YiAuFPGfapwLJLvHQspnmUm9qnak1wAGeqk6FJVoAuVi93sQ2",
  "key28": "2iHkv7fa9LRxvU6BxXwBsskzCb154N3AW3y993Y7aEAqX28Ua11Xf7vVR9AqAs8HKmMPp6skFUwrNvfdCSiYoZ7E",
  "key29": "5t4DNGtUs8wZN8rgrcyMNsD4HmUGw28z3oNGSXR4uui5UrKDngNFwhMbs8vYfETE8q21L9QA9JjTFqWKY8NjdpWy",
  "key30": "45NFG7JQ9brzzzUFnovRB7jHLwcHCcM3TXBDSaM7pkiWRG5GfHpSUEcvEssegz51FHtUVjx7AMkLm9w3XpX9tvL7",
  "key31": "5yM2Kh6BxThJA9sadD9cupJmdeSLUHpPF3jpHsMATuAxZgU3kCQ5p7awf73RDtyYNtdmgEmngcfc2rQM951MXocJ",
  "key32": "2m5TdHZsmBhVoi5CEe8xanGkYRvnbkSjckDbC1q42fNJmTjPRLEdqMVRgtCU6fMmQG2QJumxdQzPrD2yNWY99Xf7",
  "key33": "qfVL2yTkPxdvfGhXDdZXo3oUE6SR1PXtefpiK7hK1FjZvkRQVyznGofupdevtJtHkHyuTyKBJhVKmFHxicADjW8",
  "key34": "3kZqRBq5DooxLXY3bbt9fZL3prLvYXdmuBdYbeyiSKeHHssYJLsbQW5oA7uU387fCaLFNou7KDKjWM3dHwuxJF93",
  "key35": "zF4UDbvYwtmjeUdGiegHP6AxTTsCJczfP5YunydwuCVmvtnVwKKNNJ9Zpygkju4ZuYxUUaXNsXBVyXs9csvH1BM",
  "key36": "5n2oopngk9zbvubVsBtBurf7KH9Bwy7Zi316VhxtDQhZmxbRBcsJ6RDh2MVEnYAKvTpsr2T7h96UfC4DffutLzdo",
  "key37": "PTAmXHmcFKsf2VsR1UGcRMXe5UYv17b5YkEkR4DA2VTG4p1CMYH1tQST6uPYcp81A5aQ1gHjZMBWWia92qvArbJ",
  "key38": "3q6XMUyPT5zfnsjbXogxR5bgAfGMtazb4UbiATv6hVrJDm4euxEXHqBXJdDn3tNrbj2YA1DYkXDsnf6ERrQjLGWi",
  "key39": "eBLXtR56GrvQESSUTUBauYkzWzqR8bbgZ2cwviuM9XHHPfbwUfhpcyWSRyNWbaZp4FUj9Vc2Tb6o3ueehUp1vPn",
  "key40": "4sFYUiQB8uYG3ArV23e2JqWndg7Vpguzaw9vEHeVYQYH4oFCU78WRDXPZ7VzjYcGGfJSuLuUAJVAJqVQAkeQotqn",
  "key41": "4iZakDzvxPFFfEz1AizyFe6YPFYYLbpQ5TACKzADQoeJ23TfEE9XLHvbQKTetowysjFGWuZjnteJXPkvrWGubVpV",
  "key42": "27cQsWRD4SVLEA51BLTf2fBfC4d7BzSyCKt7bT9bzbk71j16MFpAghWs8csfWpqBx1wwjDLoRLHf81YA7b1aRM9j",
  "key43": "39a4eCg5ijapyP5KRPTz8Ybbtr82AKZyckJJ9W4EZEsoTP2ybHXYUKRDQmu9eYHoBZfk5nommSnArK8UYBPcag1m",
  "key44": "zmeUMcErem2V6MH7UgfWSshCaw4e8mCAao5BYajunYsG35Do4zp6YB7FgcRbG5oASRTcRNzFrfAPauoMwhioerj",
  "key45": "SB7QisLsuwbmRmrksNuD6ab8JKCjaJEFA1qncfBpaAPMMm1kFdW2oAuNXXkrooBXcXczh2aV8TtapdwCLah252f"
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
