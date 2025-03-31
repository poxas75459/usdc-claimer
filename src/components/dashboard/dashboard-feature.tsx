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
    "jvVfsNujoYNdoK7S1Vjspv2AiysSy8ffACKe6KvPSU5vcMbpmVpbv9k8W4usNbDAavswYdYeAZRhooQ3eiCf4Ln"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a79VqJFub2cbYchjKyZuMVAzWKjNqMqdUWgdL2sRy29GWgLNQ6m6ZHH1qzEPZoMR21Jf9gKFVzRvfYFMgFJcR27",
  "key1": "5GVptTsibUS3UC5qzdntELZXE4DHPahGQT6qtRCrf3QwoWrfnW44mJk1V739xZME8ttGNBB7nPAVzgE81hpDEDmr",
  "key2": "5eFJAfZbjytHMyhEPVNMAiHHvYKTXsAxVeWSeAtzjEVbwhZNVpebHrjwVSX4SFkUaBph7sc31HJmcVYKdw6hwp22",
  "key3": "ZgddhGTfbjB4eiKmyqpp6g7MM7GxtKUK9isKriWHKBgdSCyuAfihurf58bRRPDhEFiHAidVPVFD9bpHDp5syJ4h",
  "key4": "3Sn8DPK3RFJB5NA4K4EiUQP4i2ouSLQTxxCbfYLc2Qy1GnFQFnTb7cRAHhYatAb1q8Yx5qDhX9bcrmtJFLn6cDHt",
  "key5": "4CwqHzjKNGESJb3vreNHY9xq7D5knAGRBVGc1tuE2rPV7MPFjPfYCYWrHXYYj4NUMCRJWpyPEPrBzJuQHWafzs1L",
  "key6": "3VQDYq7kXRvrkWZZbvF3SaCAVqg95Dby7LRTk1NuL2EhRWG7w8jfdEPrA32juCNaB3FP2oBwScR4fP4SfsQPQJYp",
  "key7": "ti4cCCQMFYeqgyGbBqqAyMwje7hr4igCXYJ3xzf8Fot4dbUukm7VpFm1Md2gnxYmXaH8DjjgeXbbCByWJVbNiqN",
  "key8": "4Z9TdJzHppFm8Fba93EfZVb2h8CpVRwQ2GkbwJg7mA6YUspXcCMFJz8ZyMFudnNKaEkvnYdFg6RusUzFJQ7SMHAq",
  "key9": "2U9vBn1Mw2zycTBnGayvUpRLYB4YnRbTSi2Px7LEVcVe4k6QbRyeimGDDZiUsHYJrtskQpTj3hmkKEePcVXzJ1JT",
  "key10": "57g4ufNyqTJfm9TPWjzpAptL9ZhDW9dCiy1PaffgVjsHRTwHUzWy3xHMoV75A5FYgf7RonJ2XHr6mQb7BrNpyUe8",
  "key11": "2x7pCQcfwtekq9r46xM6d6K5jyr41XeHAsxxC5Aqaye85icTJeG4wbb3JkoJiR34jn1GAytTFoLLdnVhSymTnhwU",
  "key12": "2zc2FUrPoATMD95XnUMuNjJbVRuKn94Lk6kZVTcnipL9riNFASzhfNzyDJYyVXfe2GBXeP7AYt5k58XjqQD2Pf99",
  "key13": "4cgWyyxHLXEqnerw4tY2WSAGBdDvW2jR9YEZdhXLymf26Vjk7M9GtRLXg4NqjRtHLFCcBVaFrBFdEQcX1V1DFrxp",
  "key14": "65DHgGgixSEETRHxvcA2bFKzBj27qKBwsAiTgWB7Sz5nddpewXe4NJVC8bCkrdHEMMJyE4iyqHGv7JptVoRSSqWC",
  "key15": "3wzBWLmFD9acJUtqRuXkjwWNdR4WazRs6GuJpvcywMFbD2y8qpd67QmyXgVbamC5D4e1s8RSMrvxLCecePyRYUYi",
  "key16": "3Q6VGcjfnpW9CCHMcFhbPXJ9i2JavZpL74CfgRWh5bwaAJ3nWnTdyjJQACbTj1QSamUzfVY69Q4KDCk6KBdMBoED",
  "key17": "4ffonj8WiPFxCBU1s5Xju3GXNMuvjMa1Fk6CWSWRg8ZG5E6k38QBmn1hC1Bx1pRNF4FhpCE9uHtej1sX9tQnXBJM",
  "key18": "2apVbRqq4jjeM7DjMd8acnkYp5vGM8jCrCmfYYcEB7bH2BW3QbPxGdUjFCeNkApBmTbh8f9rN3Rv6PemaQzw8jKF",
  "key19": "56VGxevaPaZQLMZLy5JfUQxD2NtVcZgUB6GhiK9mnrYGJH5gb78Gz25NsFuZj7dzfgHN3L5WkwdNe9pQnRbJvnRZ",
  "key20": "2ueHVuEqq2Eh7HvLJQFTjvnKGWHYUqzeYGz4vNZX7DDZEL7gyB93aw751KaDZJk8mAbbfoZUBLcfLjG3awgeyLET",
  "key21": "4gyJTHQW2oGD5Ws47XL7xKvw2QVWkqkLibBGTJwovvzi7N452adsipfUbRqhATKniDCDqGUvMqb3zC27Q9Youp8t",
  "key22": "3QVVVeczahyBxJdc9fzcgjHnwi5wZ4QCFMXX2mX6EwXuXygeLPLaS9X8MVnpB33VF2vN8AfWyBBWhYaUfTX4jv7F",
  "key23": "2r3AkHQEuiv8j1LEWBBwVm2Ab4jdKvTZPyw6aJsYhmY5AvZ7wijxQLB3t65HGwRneUN8fQrajtpAQzc9Mbg6YKFy",
  "key24": "3npfPuCZ1ajufsq56xXXkDvjj9UXogkzZk353Ru9GE8Qw9QUrtnF4NuccqTrsDd9A5du2oiSzybakLtHestpbZAa",
  "key25": "3nVNzqEA7VugUn7vBRpdxqZUDWm5xDFr9wgitGA7LUDD9CABrtMcw5owGaAFjRbWBDQdBxdjeUAGbAzE5kr1gJ49",
  "key26": "6weJvXLoiPLCoTSbDakPJDiSg8bPmDK7EYgXY6D2Sjbfw3JvzhtenJvLZDtWj7Gzam1BKAAx4rqVrdu94GXzhvV",
  "key27": "Eo5Gvg2KZHiypEd3mdCVCvz8wGP7SjguvCm22QYSyQqmT5Hznu5W4vpBbyvQoHuZJhjswcuNFuQdYAdk1RuvMYD",
  "key28": "C4eRGKNaiy7oyLnjkaXkaXq3yj9iDqAh7WwZE5PA8qjAbTNpjdLzuqiVKbDFYBPH9tpVB2dTXnHG13hRyFwMHej",
  "key29": "5MM18amMxhWx3LHeMPDaSY4TkCRGZvHLXZUqtU6JdChfoTuHRw7phmteNap6DR4aQ5xL4umB6FEzF655kQqhenjM",
  "key30": "5FtniUnzjUummznAw1dhmwGXxrSXD3pUvtSiuYuRNrYBnMoaDx7uM6a5mhZjvnKYGMerPcw3qqY2UCyugy74HceA",
  "key31": "RMw1drk6sAVhCRh3SgocEAZnoq5EcQPbW9tj96r3SLnzgU8Xz35jb6QPHhEHFF5u5EAWGonPFH64gdvM5jh4Hip"
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
