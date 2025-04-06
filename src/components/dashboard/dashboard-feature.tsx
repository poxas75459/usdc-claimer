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
    "5v8FTcNXRkALxXZJnkJkr51ypiVnZ9uJbzStpwsL79dWDbZEECrFW48z1P4dBLSGznRxfapdvR426467qhcihjF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xb3BGYhtX3J3uLCuevThsvonZTPGbpGUga2MDstEkDeZAfiHCyBiGitnuhDtmXfNZTD1sx2axR5NesgXnDN26Sc",
  "key1": "3cF3MuY9eBaQggaBubRyPrqxT37La7ut9cjRAQnaUVGgspQoTgKYbmQPANHgLtCSjpTvA9DfTLDPZgfF27gjnw8X",
  "key2": "3Tej7FHEHyoJRhmaqksgqwQdtNrJS9tADdobohQ8YNTtVSyGJVguRmb51DT2Tdha45YTt3cQfNnvEMASVbfV6b1D",
  "key3": "ssRPAKnVYtT3nfck1Pcu2AyE1bNyGNQRTd6f5SDj9tSrW9ASXqMYhd6qWiKH64ifrwD747gpsBdkGkXgBXwoJbR",
  "key4": "2NmTf5geUHddsoVLxPoebdW4umg7Vfb4AeqiYH3UjBBuxo9PobTjh2zuZ5mF5aqWZowYVMBGHnxzpuagJ41gLswz",
  "key5": "48pfZNmRSR8w5dPePzyaqvsX1fLLzjx3AeMY4r2FbnoRMVruwDuPeqf7p2WpKpG7M9xd6jij5MhtGjP1q9hRW5jh",
  "key6": "2vM7N3bWsmLtdHg14AHYjEMpXP1DMhXBgLVEpsqm5iy21HfoDpXb6v7imDpEkB1LBEX4ZgXfY58Sm33VxrNsXpH1",
  "key7": "45BJEk3NWhvo5TFmJxYGsC8VbTCGMwM9DnafqXqF6ZnLW76Wm8hXnWG91nXsu4Wub2RsanWwMMp5u9UYiZJebp95",
  "key8": "c6zf5p2dD7r8G587WW3NRUaGsb2GiFFyDP2D444ra52ZZACyW9H4KKvm7k4N7L5uvTN9pAsGuCocynvkqFdBmx1",
  "key9": "53HFwvH4txePiAx1aZrTZmfWwSEUfhPK6vgTkYoqsH4w529YPcm9dsFqQEz9oXXMttZfFN4Lz2rCkxXnjKYdXC9X",
  "key10": "2jBDBMUB2GbLJhsR1okQKbsmQeV6ijE8FFzWtjhD7r3moWwHDub6A3WM7fY6BjAiK7inRq1sj3dusWK9BryLLr82",
  "key11": "3sjMZKTwNyM8m5GVr6pzgzyihSLBzzpV8113FeKnJyJ16mWT2YgwXdD2KBUq3L6WnwU2fYNSCbdYYKPgsyUBYKAM",
  "key12": "26asbQ5huPhNtDjoQrTobKa9r9oxLbboXSHGkYmpvKVBWZwaJUjV5ixevPmqsXuymEKCek6jFc8uPYa6b4M5NZeZ",
  "key13": "3ww216PNr6yMpmDD2cbrbQnw3WExWRRFyiB3QeS5zWGaB7NKoq3PA4nEvQ5ijmw9rVSMLQTdgR8AXEPd9poZuCRQ",
  "key14": "3ndAEsuSSjPnrnNbzGpvwFAUh91rA8eFEA1qj9Q2uafHVdzNGxxS5SJL36iLXphqasfaJWrXUyuvSVHcf3gUVi4H",
  "key15": "3CJgtDbSDcpK6xrJgau8bznDB5hkjfugdBCtVEjNP6S7H1uvNoY9JF93NsnZTe2Jd4jVcocZUC8B3MSQKYwU4to8",
  "key16": "3tPiDqtDo7LQziFd7UQbWTrE62uhETD3UFEwNLYQJBddYFQ2KnHyba2uSCrhujaNpd2D5oC4yfbsXueEA6RrXpkY",
  "key17": "3ZZ5rhv8RznYAotHgLNHVVeYzB1yztw9NgwHNtk2XMUSCCAyEkkEPKGALY4D1h8D79dbpXsusvqiNqYWV7NqRTc8",
  "key18": "5ZfwxGnaC7jFj9M5M6Ti4akoFJGd1J4datcHRqDnbKwMRWHmN9M5cSHJ5MKrXKZ2KEtb3xvzWMd1RXvdKT4dkmvg",
  "key19": "4tkwGhc3vPHAgXX7WG176U2e1tQLodCHYHtXMCgjb5R7uKD655d5DnWvNFkmkjEVuCRyB8wsLYGBgzJmPHEFETVJ",
  "key20": "dSgagHMyRdST757PqssUB25y3LHHvRrnsTkJs8ziMFXASe3iADWTPihqYGTEw1DZ9oGPbtst5M75iDPCo1sni8m",
  "key21": "3XUsHWHgB5ECxegHqgkPtEb2JYtgrToaeZ4QWZqXQ234D5dGPBWhX7NiWQzyiiCWrKJfgw9Y2tisQxEAG6D4Xgom",
  "key22": "5XJtgHP8Dxt7rnYT5zecX2NYPZqossqDKBV7hvhCrrWVc4bmtNCfEzidsTwprXHdWFGRJaGas9GgvPoVQkbZqM4n",
  "key23": "671PAoruycsE37s3rbmLEMca5GdNHg43ApqViWVnUosxfjTtY5TG1ERQZ2cEfa3WuY9PKGPuQK8K9kGi8dGpVa7f",
  "key24": "uqAUzrgEHVtY3NmWpy8FTmaJJVXm4RQqYaxQURa9QmK15G5zRWQirhv38YKSKv6kDdWVCP1KYV6UQgALxvUjeem",
  "key25": "XcFRMoFtrF45pSNQDFXYJ2WVRBL2yszRydwqu6sVL1MfTLXtTymvSJzr5C2sfCYiHtaHnvnMkLbwjWAiiBwqUng",
  "key26": "4g1UMK3jwp74hbpTtVt7VHEyxuYU1bu3KXKMhFh22AYXkJDmJBtPeSj3kC6TiSWknZD1kjphajAgeifLirzVGGsf",
  "key27": "3PS5x5Ejbi2Pq5C2wRUpn7CJjbWdHPL4Epjry3HPSbCqqKnWopmJRj8bmcthAurfMrJJ2yoYHeknBnJYgi6rw9Yx",
  "key28": "5pYfkvY4oLHFtA5bodPp7z6GjXkovNgQewcVnfHCVPuJaK7fNLpNAwmr8SQ59UNNCHA9npv3GUrJ2TVq8seG3J1c",
  "key29": "627unw6VtQC1uobjwU6Z9ATqWErpxTKrDYpNnuNoVkV7KpqhMzgNxLcqFkfKGVJcfXi21Z38qNqUH9vZbYy318Vh",
  "key30": "4tLkDaGGDvQMm4iXYj5FmuCWQbkoJfzaJyz14zGK72HQQRTgAbPcx9tFkzMsdnULTq28rxiQqXiegvrEGPZD9zS",
  "key31": "4TRN4tJ67YEypQ4iBw4ixTGx8o1wQPefxpiBvtCa1mcC8fJn6UZgyCJiPoif8H5KnNj5LMDB1DcAZLGF1xg51TPd",
  "key32": "5YMoFrQiSQmxJAy1q9CpDh4Wsjk1B66NBbG9sAGqSosQsP5A4uMjXXBpbo7WzTsVUfKn5SbRDaESmrfrLZZYGKDf",
  "key33": "i4Qxn2uwmXzEr9wkT4NQnY4uEnMuvNkVfcGUpwN4bUHQDeyyJpnRTjWkJCMN8auZwJtQx5tHhy1n1Zj7i2dHp9M",
  "key34": "4rzNBcNv3KWSD7jaUX9nxe8XjjJkuU8wgy884284qd97QYjbtAtwbdV5DyqzUzJnF8haHgZvcmyTdsxh7Kbg4Zdx",
  "key35": "2u7BYpCgDJdJJF3AUpDnXRWNHQdQD3YUXNshrbcozeHv5j4JxN1rMXhyUi3Xy7SQC7Ktwa5bxSqeUYnSLn5wsqDf",
  "key36": "5jdw4nSwWzxcuY4j2ejq38Q6NdLjn5xZnee4Y83LjijKPFjp1Up22voCDw6XSLugejLDgvDxuanwEMwKqh9JXdZQ",
  "key37": "4n9PaXW6uSZr6RFHLLBFjavKAdF8MGafmHVpmu3g4CuMcc2NhmMLQjjH1nJsN6L1QatErFbCgwuWGZ1jGAE4UFG6",
  "key38": "3dJdUpAdrKhodEoe2w7BC4wqBucefAvVWitYEcaCL217ksPViTtekeEJavmYSLfwc93WZZodtGF3XsvCGAsh1FPL"
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
