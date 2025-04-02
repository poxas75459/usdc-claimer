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
    "3ixxHLX4nuvaBXKwQCBHMuc8huQ8JPzkLWvdqF8A7uZdkWrezyHRpDHuf5AMZHaQ9DiMp3dpLCR436vPhVxyr79C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RwGSMJB2AM2sftPG7kaZg5cabTxsbALCz5t67WhA23JMp9tdqE4wGuociqik3qj2HrUhGQPLL5MiBWHRDhKhDxM",
  "key1": "65ZpeunpM94LyW7Mt4qdqrG7qdVjA5D5KeW59Hv5rZuamqN8VTqAqsbVs1W1dQeZ66zesyEJMWtfGgJCtwUHD2xH",
  "key2": "2y8WN4Y8g1YWy1XsvD22L2RUzbpABzfXWEy7KGhPS91qDM7Ax5MsQBuEwUXp8CAUkVYxJYFKWpDGfEzGxLyf6ysH",
  "key3": "2we6omKNktFamjn1D2aHcTQkSMi1yAhhYiGnAcxJa4aXU32ffC9pRYHH7eZEv3f4drXXv4NLorbtAT7JLFJnFAJi",
  "key4": "5xRmg3Xjs72WFrZfweFcSXyExjnwT5HLdmwfomSndjkVgeA79oLjDUzs1Gd7hULNuzvRZMAu9V152U1P4vab2HxW",
  "key5": "5N9wFcSAXfm4xbt512SoCZ3oGD1evpc6Yh8mUc2hx5BWbNLgsWCgtMurTXhztR576tLH5PNZ6zu5fYg7Y5NJS4ok",
  "key6": "45QBZFheikL8JdC5LpPUW6kvYi4Mso8qpPUNaa3d4f2qhu9nV8KYGDQ8jAtmaZo4xyTdT8BU2KZgRnMkd95QgFrG",
  "key7": "4yqb4behqA4t67yTbqvwWuwXwdLvK8vWiZbBTvvahKRBN4xXp4T2ZonwYdDaydrDwd7ny2zxG8PmtJ2HrAQ4CTBB",
  "key8": "3Fjsvi3iBVjos19Zf6ubqih8Xo9ZwSnVsNHYiPCmBhfjsRwRRpkinehoZPmiozikLK7qMRN5e3gPD53obwszDBZh",
  "key9": "4xEsUkSpWkgy1qMyBPsSAKWnBYAC3Yv59U57Ssdr8LnxkTM6w8wptPpXaYKmeQhUs1L8zL8N7yhfUdXBiUAVYjne",
  "key10": "3dk36VBMrjZZbh8TAqmQVCQhRfL45bGi39S3xzBfc14RBQHi172zDmBDQycYcrmPK283ZFK3vMu5xXBEPANGH5np",
  "key11": "2QfzW1LSdurrLUP7ZNBuZpfgTyd2aKEuzGdxRpP9YhxRwBkuVdUCsDPtvSteozcry59KvyuCS1PYJ9DCnntyHdtG",
  "key12": "3pQkeGQHVVdmtC2iptNvUrUUhCRWFJupLAW4REhAjAQYtQ22asWi675KXtg2MpJc6fEyjHGfRpcSghSAugtwrLjH",
  "key13": "2VV5WEuJJqFqJjibaW6mhLe4LUE2WK9DwsxeWVsg6td2AFKySavvfp6RmZ6BFjcXbpG2bjfGtQMyJdSDke8uvGU6",
  "key14": "5Jra7wWNYYfRu1pMBkmVLbLQCnPtBC4yyQcis99N92ekA6GhmiYKkdAATP9bQgH4pmMQi5ewEcCpZJnGrjGq36UC",
  "key15": "2zqsS9j6myP2pUpxdcfDF7HpKz6U7eYn7VxKACXjPQgqrZXHputfkRAvgFda9Gen9eaXMmFQroRz2wSa2G3yCEuT",
  "key16": "66XmezMNUznWwD7qA8AmmHut7syfCKXip96xSfKFbYVHMn8L9JvohmQPE9KoqoaHxFyocFFmhMaxfaPkmViK5oQ6",
  "key17": "4eFmsVnGBNQahbC6NyLU81nUqqG5rEuiMmijjXhqeZnUtN18UCAWMNmkp68HgP9Us3NE2U9aH6GTxxgdyejbp8ps",
  "key18": "4n4JDH95VjJtzpidnYgaSpdA2ceYyBc8xCd4dC5PGUboyw5LiUreXymF97K8wUJnXm622RB8pRerpD1bTyQNhJBo",
  "key19": "5W4JxcpY8v5oupBmtXmW2gU3LZy7FrHw8NQu6HuiMW9Lp9UrNDqQzs7mw5dRmZXRzJeoREd9rVKAqmfqdNnif9WX",
  "key20": "3JSTwC7oJDHMgX3Y7EV56LtiqQHRBGzj11ipSPjdrUC5vMFS4vrKycusYDSyDgzT5EkiKyD4UJo5Frqapo6S5doT",
  "key21": "SveLP9nWL97eaDneBYkEoR1fiePoXbDxgbjaDvhfHYZq57T7QbaN9fu1h2QcRCSRRt8c2oUQ236ZdHhB27FBMvo",
  "key22": "5ugWovJFs2bYFLvv2Q5Vxbs6Pwekv5rmupBx4Gt9Yf3y2c8HkdBMr6L3naE2gCHC1nrNYDCWZkxjui2Euba2eRZn",
  "key23": "2M6wAvSbxmdYRubrCvL3HtmzqvDs2ndVXcBtrTqKksijVoZQWiWbUJBWffNBahS1MHvvSUiDyMT5aNcbtYrq9A5v",
  "key24": "2u8iwW3pr68ffLcVKM1dqJiXtA7d89ok7DSB2xJtNREBTDQ8RxFjYiwfSwLo2pW8o7kdTa71wwzapESrFEk2rUi3",
  "key25": "3HWKkrXFy9WAt2vnPpvSdctpuQPFfggehdYSEktESavq8W5hBJiupoFQ65FBDVeFHZMVKnm3pA3ru8JF5vSwizcw",
  "key26": "3fz3QGkyspT3FRZkeYFCxVAzdYgbhnQ2LGidiAMNgCDrkVDEXko46na3Kczj5zdtNRG3Jk9uZSych6v9vGXFyFWW",
  "key27": "3qhrFmD6rQrqjDf1mDGhRBJ6rP9HrLC5kozhStETwABfLVCSHHMriaxVUGqz7TedNxQbHijobyfuJRexyNDvL56W",
  "key28": "3aDsEBufkMAesykL2fAeDD91S6YCJCHDyd13KFLstZdeaBLGGX85AcBV4StCeGtExzNGSPV49EyYok1KpgVStDym",
  "key29": "tGNUuY6T577kHHud5Ain9D5NyMQD6uZgvWRBimmvi2nyxs2GQTEBKJmCsaecULHiZ2FJ1Wx2Bb1tXztwaVjZ9FQ",
  "key30": "5pxHueJYGHxMR97jdymxzJjpGd5jMcWKkcTAc6ZDYagRdcJ3DW323KbYegnG9JNYHrRpg5xNzLvPudRSSryLYbux",
  "key31": "5xxr1J9yrj9bSp62vXFC1vYc5tiDMTmaYkVr3Uh7d29dEgY5pKKmBEJw7UV1E93c1SGqR4Wn8VYv85cc715SoEMn",
  "key32": "cLwB1fYEFXFLMTq7Q7Jyp8khAEKrri6zCTzW4UeKyBQ2dgeGUgJaHimFPHMzNeUyHXUd7FTRoc2Xonrxv8kB6H9",
  "key33": "5iapKmSn1aedVXEUJ2bkQK7XhZdic34NCBiK76PK4csev4VYm3u1ijXdXNTzzk6dexR8V1tgeYbDAhQ4DaGu3Ssy",
  "key34": "4B9x1kFNgbJQLGBJFVKWfV5h5H8gcb5FK2S8QPRWDKGDCeY9mkdDbPqf4r21xrzKVhBrJ9SXEZZvj5iAa1sKatZg",
  "key35": "or5Dyayo179BcpoA9DgZeHto8Mew1K9E5CmeEiK1cgvYCE9iqvXmKbRe6K7zXrTTZbPKE44m7yEc7NnfdKq7fGE",
  "key36": "3hHq1xQ1mYnuBY6argbDsX54wLnxEH3yTsZZtfEGX3w56B3ksWXcJync6GSEmu2iJjx3X3TLypeuPhnzc7hTF3dt",
  "key37": "3VUxR93ZcdGhfc6BEujSDDNNaoirF2h49sG85Urnb5CzgL9EaocofQf9chTxqPjvmGZHafn6B7huf2jiJswQmqNP",
  "key38": "4eg5AwxEAAfeDGHqGg3bz7A8xuvokmNJF3QDsVvqNtsCwyihXJTDjjprSrUHtyKKqBTg8iRoDXCkQ2Kqbd7f9YBV",
  "key39": "5PLVgZkqaeyM7XgkhqyA67BtTcjkSVMx4oGwiQSQeWAThVBM5FqB5H9nsKPb2uxKUkS1Ngm36UPvvScfNk7ctGyo",
  "key40": "y5N9rwu6bzJ1GcpY3YiQHcqFueBEzKpPJg3Mxd62ac6co7Eyb6tGjgTDjKQ19SyJeuSULVXuzgJtxsnXc3VTCp4"
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
