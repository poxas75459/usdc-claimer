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
    "5XantbekgCChhNLPBoo9PwNwETvhUoDr6wYoW7r5xXoHYZQQkwwTrNBL9Komk97y6zm4FHagVbUuj7r9xdkmQ7c2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R5a8F78VkBeoXv4pycRyyXgzW3w7sVUci6bRAUWxVjAisCuoajcuPwxbbAyqEwVTrRvAsYPUuvo4AByoFBqFwNb",
  "key1": "c4hs3vPtLhv6bg5ewuzq4A3Ae8sSqvtiuvk9TfNYhqi12Ha89NzMdFq9b2KWBpJN4h7WqbLJ5C9pUirJaymdKVf",
  "key2": "vWCnHnDnpMRNfgptnKiwbrRwh78EX6bNVpVGo84GYTJZrf2LfbMjiYcp2N67RT31m9JyyTF1wXbyp4bUhYx2sMC",
  "key3": "4EfVfRGPYBmif3TcyD4KRMPH8APJdvwKFY3WsxiQkN2AGsHgwH1hm3jf9TBxXkEupRP1L8wrKwBSv5LwP7xNgDaG",
  "key4": "2FBmergg5sCSFUxLLrSMsFLmZ3wzmVyLcaJRM4CPM8Fjdm6zuruJX7KyNkzh6eKrzjzwBRbGxjsHS4QxHqyeXrnT",
  "key5": "2iSYxN4AAYXTEmijdMaHPLPmySCeum71ZcerAMhSkY8xZxo4FAfpPfV7u4aD813vwcER5oovaHmKdhMzEVLRK7th",
  "key6": "RPWFLo8zHfFjipBcUmA6sKPahfeNffVMd3JvbXU4b1krprUC3yqjNAw6SESLhD2ARRCDVrvQ4i41n7X5PhmVpUg",
  "key7": "3adsr2SYD4w1tGrDre6f9BZPhjzE4jvi87VQpLMDJGEke9jFP92J2iXEmreyzdcXny2GnrPaUq9AGUELXv53f2dG",
  "key8": "3f7MAmtgBmBHMM1NuycRxcgMkjioijfPpXw6J8HztfmGufCPo9JDa2kXD1C3KvbLGwYbv88ZMm28HVtK12Zy9P7S",
  "key9": "4kj8yfPPmL7DaRmuyCnKt5vJfXhEBjdcAPjehwP77U5WXuJk6yeLkr9omLXqzTP3Dn9kcMomRgSXhsdmJkLkbz2Q",
  "key10": "43GjW6x9GqhnMRWHiZ4HMZGJgcL6caNyitotN8KH1YXzvCmZ91gRt6CjJKMJCgtT6fQ7ue2vin7krq5rctaUdt5v",
  "key11": "5o5jmPWEUPTP8vqydggiPrTeqombV9bipBcNE3ioKWFUZ8mpj8UEvbQdrQR2Xgo1Fd5fCmMKmmqFedKxAWFZGScd",
  "key12": "4y4zhZwJjAzcSVA9Z682eXZ6HTank1714xCv4abLu7EYeNi33in7vfZPksxocEJSeJNz4ym87Y5dB7vHrcM7SdYT",
  "key13": "5y7AuXfcW2cdPJvrnnzdZvDGmWgGeMd3YuFj5GnH3TC9wRBYm2rGUVgCvU6VRnNMBBdy3pSqdh26Bg9ydkPyhpo2",
  "key14": "x3mfgAaH4kKGmk47uDRq98CTPusxLVWWqvvWAW3YYotVfv8u5YVp9SP8AUsDxafNohTH4KD2oLighcqZuiJzHwG",
  "key15": "2QZrZhR6ppHKPAgidQ4V394dkiouUrjY31y4G5RCjsCmvFBPZjdPE38AwQA6V1gkmDDnqKdbY956jGxxrSgMeLQG",
  "key16": "3qdskXM3cht8fhA6NhmHGYfQzSSW6ugp8cPpwV5oLtjGu9AwXNCqZjnAEHaikJ4dAEkidBFRdNuXiVx3qtHQFhcw",
  "key17": "4KAuNKxdSpyBiDhEm3uX1PTXiRT3igUGRfM614fdCPU8pa6n1NxReNiFKvEnws6eSmci3L5C9PQrw13F9T9h2RGx",
  "key18": "3pLNVM5VvtAmqANfeWUobQ2JsWXY6btt35ZVzjesa64xSV6N3k2tnjNAmaRbfXz1w75cZjP7g8TJokzSQeXZf1Pq",
  "key19": "3sVC7eLanTXKp52s3AEtQeiGDRrZD4GSfYYVg5uj3RiEzSJ8j1TicmY6ExZ6XgpDVrNu8MTqjLy2HeUVfSqEbRo9",
  "key20": "51adk161tVw94GZFvMPu8now527BYN5TSAvjG6KGLgWb8ps1GmWNiVkC12UVa8f3tkRou83pu5WELefHZLBocCF4",
  "key21": "2cEmFppy2Cu4JR5FcJm8BNmNgrAraTwVuWsDpzz68pDmwFdFJgqaYkpMv44FKTiGjrxbezDgunsLQwJMnbbyWPz8",
  "key22": "46hSCzzSMuVKkvqh53sCiZqEQzZQcrkE57bCZCPhqSkMte7H2xUHmpPuMfG8jhhnoVEBKM8dawHmz7uHnDaeEmnW",
  "key23": "3m5vf69vdvJo4F8jUoBeFMzjLPK7Si6gXKHkJhoAgidjijNRFcFq2eDPjnJu5fzqikwwCXhumKgmjpELAZuZjEJe",
  "key24": "Md27h5BbZJTn7tDDc15wQ6wEyvi6Faj6toVekr76ybK2Tnk9NQzRmhw9rwPkZK3RoyFeZD1YvHHnvrzYFHYxED4",
  "key25": "4nBWhzy6wYZzhz79DxwriTdRTA4C7eJkw6Tt9vJiWPU4XmGEp1AmvgZ5BVP4DE1nQ85bSnDX35ZanTmf3tj2RY7p",
  "key26": "2GVuSAbBqEZ9ZtgZgG93GT6Mo62fGf8JDGF51pp11GLBo7kJdzDAGmB5PQ9YeJTa1yXQbVgeRgk5ETxfUhBRQwrP",
  "key27": "yqbE7KZvf9y68J9PrMAjWQnyWxmRaKziKQa1vhrNxcWkzP3Q9XoBoUR8kTh3w9qhW69gXdTSZwGYDtXAsS71Mpo",
  "key28": "3hjg9Yh4wLKmxKwjZxYBWBk6axDRZ297HGyLyR8CVKjkEqjf158vzUNjUYX9Aq3gvwNWRsYYn1S74MTuZ8DFzi8d",
  "key29": "2ncYfAh7pFVZEpxTrPKhsCDD135cHt8rngxSUAsKhaoCfmZ8GVUszA9eKmK5cMGqSooWjkow857tGdrw1FzHs2ds",
  "key30": "4TREw2DaTmJzASwd7KoDhQ2p4G4BdXMGYxk3ar7kpiuvvC5audKU8wJM2FevQFzAaGtP3ehJxG7mYu9ivGdhFx5F",
  "key31": "61McxFFiKhjc2qEfSh5hMW7tCK6omrLAarpzhgu8Nr9pxJnozyVSTAkAfkprBv4oRknUShUQQMJn9jZffcE8dUrA",
  "key32": "4eMYxKnkxHF7nCfE3ureMACQRXrrP1CfkcvtZBK4VYPz6CbnE1cQmRdAZc5CdS3jHsPuYP7tg6mRPZQYth1zDvzc",
  "key33": "65kwBEY4i6AYuzVXMG8Qkx5pNQTRdAopbYY8LruHAsGTMTEB1NgMJqEZAuEQC11pJN4rh4gKjLnbS9734H8453AC",
  "key34": "4mDMBGoJw6vbuvUX61Rw7R44gDWRakwVqERPx8P5NMYSrsZTAnQQVupvx1g5RibXywxjFFRZ2oDbuJQtmiG7mZtW",
  "key35": "4zfiD1Z4i65ga4cpqkm6k5xXtL7FMZRgzttvviqx2PqredqmZPwuASENpJzjCCqvcrDQFTUaWXD4atDdq3dZ6k4F"
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
