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
    "2SQErBxwLGyrfT4A7hq8oYejfi2SH4xD97bnjWYULj8c9nUryqaf7v7uKe87ZwRaZhepqkEGcsoYiT6eixEVamh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kej3p6K5JewEmtzgLrJV1Tn9UwV4RmLbHQCSHTFcGFFc8H5CCP4wCqeSWXhoShDnktiXCFc4qBycmPUz6CEwXRC",
  "key1": "5Dhrwd7FkmZDpbr2KTeDNbQvpeWSnnLvkCWwbopmjCDi2GcWf328h9AxXhXwFCQmEzbKK6yryqwF633wUBnfgBkg",
  "key2": "2kKikwMr36gGhJHHjkuVnj6QRsDJjhmG8ApnqFbgtUgjmjDEvduYzMFWthe5b2eHh4ckW2LjWL9vcCXEctArVTnF",
  "key3": "2jG6KNNN9nAUX1iSGShWCS1eb9pNWfhtYKnQaKYSrMe37X6p9KaXDoP3PDYru98DUbunGK5oLjR6MD9ubjhqNcwh",
  "key4": "hqpfZvQueG5MxmtMsfq6Sx7RNXkTa24rFMuumGukpPKmAAYA3bmaZtS4uBg1uZ6aqrqMds3exshNcV4WqiRk8VD",
  "key5": "2m2t6AJGvV8x2Gu1UEdef3F5UowgB7o65931bPwJCUXBXrMJ5ox4SfrqfJcyvPL4eqibTbZQWCH7AxV5UxUG6A7K",
  "key6": "4cDUwyrW3hYjSJRrBR87YeuzBccT3NW6rVV5bHuikdhJucUisgqqX76gRM2XKJt14KcajGmTrk2tqaqaQ2yQWK9S",
  "key7": "5KYPmtFpyX1GyTNayGBrZB2bBCufFQSyKBw5AwLRqvYZPKhrtje2kQZLQmRuMrLjJvStREypnRhgRsu5h2E6cQko",
  "key8": "3Tb7rCncNPexVp3C2EekaCmm11ZRWCvP4Dh3qb7euCKZvC8V7G1opj9BceYQsXQ2sk91cJxZdXoHgusbUKRhc2jT",
  "key9": "4shve6SB89729Jq4K7mxQsZdFTejaoHfXr1hZCQX5u4wtDSBMeLn1EeudX5TDEW4NUgNSXBB5cXYN2mrQi1Cq7Jy",
  "key10": "eCFuBs3qU1Sw7sXkyACMyAvVAZyqr6xRf6EpHo2Qt8kfoNAGSBQ61zz6qBbhkFoPgJew4B14sawUZmch3cQX3ui",
  "key11": "j9gPciwgSYxxtcivhV5isn25qTjp7f4fgMtaKqZtmpBTMKzTfKhMxPicjNLpsZNhtgjjrrwiCKvs3svrJvVyq8f",
  "key12": "4YRyB1s387QsSWy1aX1MYvopjnVV5gocqTKQwt8A1iHpwidWHHdgXNoZFcUiqTZG4UDKbQ8a3CdGJLQcNm8kv8kg",
  "key13": "RKG8K5hWkAg3eGx7pD3bMVYJYRz37fA8HJxuGQp8VrRpZENuerx1bN3pkELdV2GBszsz7BtzeAjyTzphBEDQBXk",
  "key14": "3NUkPxjzzuV1ES1uRRPTavsLa7Q2EHnc434Xn9qHVB9FKQvWYroU5irXeYWatytFJNb4G4e5Y11VUHq6rE9cDbqZ",
  "key15": "26CjLPpuEUC64gXqyMBA7nfSdcAV2yGprmnYLc9ukeDyQsmR6cWBeyPCSmX3D2t5xVbHvicbBiCVFkXuXv2HhuFq",
  "key16": "4y26KqVRPwtroRTLG2sMKjdc66gWp9gUEXTB8PGKAcGXqtArm8Lzv4fszDRAZoDnSbZraTb7iLbeW72FEb3RtHeU",
  "key17": "3LGXMr8z5f2LZxXjzXRA5XS7HFk9zYxPTH87u12yT6hXK6dG8waB8Wp6v5DcgqXmAEef8s4m5UYphZTS54TR6ZfX",
  "key18": "b24UJ6kvMegsvGJ4BFhgguq5CeFgeE1D14jgLjZtxLaceparyAFUnTk8Xoff4ovcFZPb8vC3QnPaxDcX9AFshv6",
  "key19": "4nMD6mNRoTwf3cdosPdeHGd8j9c4JhgUqpNSUSiskFcpvXu7g2KMN8nGGtRyJE4nvhjdoG5vGnYCejKrRWBt5CFe",
  "key20": "3VwpftmdezZ1WgUvQRL1zxSKoZGTQMVUWX3P3iCTouAWQcYdDQFiYgRZkLkU3qXGxBpge8xvsWuLy48j3pbh6BJU",
  "key21": "4PNuaqJfksJTGcG9CB3rdQEz4fBboGRMfWJBmg6EpTFJgKmwwYquq4swdwtH3QYaR9MRaQ2tUDWgm7MZbnW49eqv",
  "key22": "NGjRyzWv4UVcASWZMggCnm328kSZrj4dEpJ3in5iXn8fjB6X1BohXd3jaLLBNNuJZ9BJpoDBjYdV8FR9cX3T5B3",
  "key23": "43MjEaqmNkCYdT7cxnTdZkgpPjTGFpVQM5goWSJ9edGFPQgM5Tg91JjCSYncqaC2iRYFL82eP2NbQNZJvxYCuhvR",
  "key24": "5gccEYxCZNsqFjZoA67fWzY6WfMKefoBtfiQK18ATTsyiFZw9ZKWWA89QQHEUV8k3h5UKPgcxetN1bMHAnHtJGkq",
  "key25": "5CCSFBSbZfdgCyZvHAt9Bdn1ZuxBpzNmSEAHozXTBoJ5SqhtboNv4EXQGPVn2g1T2Thi9RsundM3ZxNkswudj2ic",
  "key26": "29tWMH5e9herTb3cZcKJjzCBhdM3mN4KT959pEQMmWwX7kpYvzkmzuwvrPF8gYvTJ5XAkVBq5mDFGuzUHrypKuoY",
  "key27": "3w6P8vN7WRKt8qRQ7DtyG5SZL5FbPDvVnarYmdCkF1R8zuVjHToy5mBSNHkFVP3TLGd1SWD3RcJmZzzBtkL5omaB",
  "key28": "5haEjebePcQJSCVzWmLZYnyUKht8NdX8ouXsqsYoxQ1AGEkr5W7zWWU3z2KpcBHcJNzw7AZ5zdC6f5kb5qzUnFtH",
  "key29": "5okmB3RvoM3hy3QJbS3DKYMWo9yhpp8u5fgUrB8NPbfRr3tWYZtNATf3g7HwQRy9Ruzb8XWXhMt6tRRXweAJuEFw",
  "key30": "cixjg5M8rFaWnwJHajhBqH2dPHFdKrLMht7iCmjBPKLyjbfwcro8Eke5kAS4E2QnyVr54CQsHT6bWFNCHeToAjC",
  "key31": "3oQic9nv2rMsNbve9S1geJKSg2twEiFPaHg1QsD4STcfpKeVcort434zgRNBPAZaRJhuiS6gDHnS58364YqJTnEP",
  "key32": "22XqYeXbVQJMYXbQg7DMXNt4RSLsYaGUq5DkxpBZTTUydA5SCsuzNHnQkw1FsfjceSKYbWKfyQ1BCvUsSoRCeXPt",
  "key33": "381Yt9mjRyfy2XWgj9bJdjLz3BvAFZ3RQAsVmPqhW7BpTowAbSqGFWhrB7y1DaBe9g3swyMHjZx1SCK7seGBhNVJ"
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
