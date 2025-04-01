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
    "xHMVUEkmeBFyShgTgc6hwvWfSFYkDToELFmrUMaG427gkgJx7tcgetusYQr2kmbWGumPGe9YVDyHnjWJa1xacFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uVHF7ZP5sNqsZ6NmhmtoAjZQeG8CHnY7EwKaSX9Qy4FAQmBSiuF3DHVV1H2C8NhUH1oxEJM84jpXYSBusxbA7kj",
  "key1": "3R6YgKjZEgmQCb7LWudKXCuDv2bJmhS44JM2pzzShzTtSdt3ckAQ9Tjf6bM35ucYfeZTXdM7TcfBSP5cso5fAcam",
  "key2": "MSBsDepZFH7duxjKvAbfchgvdXa8WzBmBc3sMnxnW6K1qwnqmR7EoKpN7yv25myCPgCG6xtF1jhwEsngdUFygyJ",
  "key3": "5nYqHzyvy1KTAVhtgkegnG7Kw4Zx7RUo6hZM6ZEBi8nf1wJZDoQsPWiRmMWgpTcGiDJQRwusGNPVH9WncbW6SVHK",
  "key4": "2KxDtGB29uv9S3QMRAKw9EdWdi1uVDs3Wk5c4G1NvspvFeYXKuDjCjqu9KCvYYRsMzd4hsjP8R5Eg41Xu4zBhCcq",
  "key5": "26zHHCXFtFDzf1oKQRBSn69WdQMsyoFk5gJvUJgQG75gxXARSYpf8CZ69bDZA5xtj2BGdnVmTUiuyUoJFhkj6kTJ",
  "key6": "3me41ZrMR1Jt9cmPHiAMHnSqnoAqKDfQx4z1Dc5g1Ja5pEifktVPTvou3Jgs21M1mW1iMUpjqxNbdKXLL7qn5C3x",
  "key7": "xioLQf3mBgTrenY4ZxuWKshj1KchQ74bWuF46diVLDPpWjkqvcHD4Vi2bdm6zuny3qW6aM7mAcQmTev8MmAXDpR",
  "key8": "4dekjMkLTTFL5UiF6HSUuuWgWR1vsXzDW5xcrK2tstVBNWZyu63Kj5BTzWb1JWffw6omnCdWZivw27LwCXfB6vwG",
  "key9": "4F43TfSmqPftcLCyDrRwT2nPPMSVwyrNxN7piipCU8QkNGe5go1pDythVH6V4yzeVh2ESdC38CW2yg6tVqKcVcTL",
  "key10": "2DkUTEWTvSjadbWMbNLrisNEuDKzoC5Bu1d8tX2dZdfxSixsgLAKqEBcussyAk3yCDGnuWwE7wqmBqWevycQ1gdL",
  "key11": "2qWNoqDHGqbXoTdD8CkZrZu1CHJqGRgSTNsSGuBLkWZYQ2jEEYucLqiAkpxAcaGDP9NKw4Jk8CUn5H2NXiFhV5bg",
  "key12": "5484QxwNnNGfM83QJeTmpUr2UkchXAqFGYmTAKXfvxLZmyVtm1cU3C8pvtvX9sz38BPbEeucCW1Bct49wBwVJRke",
  "key13": "3QEmcd4osaACsgHU9sxLLCxckEh4YSKBdMJg7KQuB63H3eGdyM11FbMxY5XpzXwuhGBKtaZoxtcx8AHXZGtHHPcN",
  "key14": "4sZr3brxxDn83cERcmuPV4DcR2mFwuvhZaLhipcH6yp4mb8EokwT8o15iDNYywKcUK9FSfFUsygxBSENM1qzwRwT",
  "key15": "3EHaxh6ivT34aUar3L9VFNAcQp3ffCZQXqexsWiwi2ZpXHhPCRzzufmozTQV71UdfqCP2e75TwvWDRdtbgH9XEGr",
  "key16": "4ABnFmxJqeQXcYijNoxaZDr167d9aJLmRbNJBKmFGQuf4XN9W3me5dR5oMXKTknktRbhz1Tj8zHzBbJc7WBjAZXf",
  "key17": "3xiP33ZJhX9bRRptzWwXWLNJBi3h3qdJgx8hpq5DuHaP5rNWE6dE9coz1MahpbLxKBDkuq3q1DGtz2Tig9EvRTS1",
  "key18": "2AJFuRS8h6yqP2jT3ieppWzPUvvwGJtnHBKi9PBqi6sT35DJPw2WSXquWWjeJk6GqphLKc9VDGPvqv3PMot2Z2fW",
  "key19": "37qLVTTDVU78z3XHp4gBS9xkbwwyrjFVa17xcRCw7KP9HfrpEFJYRV2Xy61a6AB92unkd4uSfC87Ghs7Q6XMQFPh",
  "key20": "5bHHBxJ7WTUg8BxA27ZgL87FmjYTdBjN3v9HHfP5aKxJhZCxN8S9yLWN1SycutHoEYbV9rHC2bNUXofiqgA1tUeR",
  "key21": "4a4k7nZkdN8xs3JNFxTUnCJyhVDnTsJPEiyzRECTZcbZk93zPAyCEE6H2YTJBTc1GUfxRiZ3zaPgSFvqFmQ34Qns",
  "key22": "5orE62iqKsBRefuADaBbQzav4G5KskmtWeqga2S4V6jFRZVBPcdg7suDqBmrcJ9AuNYwLjtDKrtn2KqDuwCCzPAy",
  "key23": "2eEyCKW7G3KWvTSq5kD335r2tjEypNUSfZQeZxytqYjGXvv3nT5EqU1FcUhxesRx3VpsGxGYYeDCqnVZCuhjsaq4",
  "key24": "2sQcskJUkmVZ9t1NnD4musWYihqzhTu1TfSjrYt6dFhdjsNESPe8gUMdYs6itRqFC5XMv9SiXL8ZKTZGakbJbWSG",
  "key25": "3gApYMNTxzK7LKp7zpEXg9QneijjTKF3qS8k5WHeFtqEPA7q86BvsdKP6Q9vmo2NrbGJRFfQnCX4q89kiCPSehZG",
  "key26": "3r1L9VVw7N9mdyo3Q1hJPqRJV8FMXHrL5cJYP33o7wkNro1KuzRY2vFo3w8NwLQrmw9uCEo74KJnbj2MN8txwuLV",
  "key27": "4RkFN73z3KrsWe771BYdLTjwjtRZguekWnoAzTZ7N9jjepPRHDCzprB7qnmxf6mafhg93HjmsfkSPaWw6bVEpSwC",
  "key28": "54tTiSV3VMzMHFVsMLTYTNbEbxKns3Miryyk1XcXLRPUaGE6rag2iqfywUwrzLZVxKmbMbKSW9ehpKyDf7S9bRgC",
  "key29": "5oXR6Mz2jdsUYiS3zbYXRobnQ8y1TrsKsesxsHjE2mJRkgpLvpx94nmJpYPQUAgvf1xDcv7wbvbpwuLcJDqwNmWo",
  "key30": "5pZkVwzJB3KCcdMKSFnKWNvEeBZrx2N2FZXuQWbY27cCLffbsZPt4pVrqTQdeDWKMm9HVVP6zf3jDpGEqgg5zw9J",
  "key31": "3zkiaPquZtJ3gBwU3bBCimU5XRCNCoreWzNvCYNJrDf1d4F7MbJkErEvMsNxUJ4xVnPWXE1kdHWB2aSaFqCkSowS",
  "key32": "3m5n2LFUBQQD3nswXbLMFtyVZ871gueyu1GTxRF8B21EFN9zmFykhWKdzBeHP19QArGDfpWQdZA8LBQibp1ZeEdo",
  "key33": "2auVnmKdkXVXToCzrWRc9nMLqm7zyPq9KvA3FMfqt3niPZrVvzDEuG74gNd6kMv6SzAakNHoJ1JS32DAzzJJx1kS",
  "key34": "2eaJd5xsSP74B924wg2dKbix1LZq6fXKE5z73BuMN2SBtZXFsux5bGXQpd1zxrq2Aq8xo82213wzpryGuLU8rKu",
  "key35": "3ZYxLwkaYKSJh97Th8oTWVZQUgn2rWdhuJPgfqeYk6qyUn62WLhqG5YSevvMbgrF959wzBu2JZZkP6F3nRPqrrFc",
  "key36": "2DT2qwmVHbvKJuVVX8Emt3JfFk3LtAVMLMHMdc2KaSvyG6aa3dcTiUM2K5k9v7eiev3s9EgtPS6d3imNBWHt1aZ4",
  "key37": "4roYvwUxwh4i3DPDVP7aejBaFvZtn6muveHvwYgUPwYDwbf78eBFHVWJFLVBcWtFVQBSS6jowDNAqpRv8Ro4uRbF",
  "key38": "HuWhZpCBi1jCp7j5n7fAyR5bXuxML97qC9g3qQycrEBrRJMP5BSRGYcdbQSj9ZcMByYkKV5hJWzyEEiXrYjZUd5",
  "key39": "54P3sugkmesHU8hCrjGQg16mGgXS3eZh1psCjHmbRnXswbCAAxLF8naVSetwbrBVzdfQ5mSmGQP6H9EEMfxsYUh7",
  "key40": "341bo4i3qhZ9CAt4juWfyNZsDKMx2r1MVp3TdvChjaZFpm2j6mu49M6q2BiYnTR5YqLohg2Vku6qp27DWoXSKKnB",
  "key41": "YBvzpBXQ2ckaTfp7dVsEtSCaExBjBemK8wEkBkxpE3qwzZc9M7PNgiicDteS64C2r9SHjgH8syUCVJ5jXoauPSP",
  "key42": "2yNmjVPsrvkFBXiTYuA6UnrnaLPsWC3JEKXUfe6jVRgoSY2zY1HdaUvHzkUXLM5JRqQfP1WLMgLGmcNDmk8hEEgs",
  "key43": "34kvhqiKvpL42GU7o2rqCQGi84jbEbnqRaaE4L1TYPuzWiRqKu4KnJqVx9mqmweXobzBr5Ymt1wUbp26vEofakhh",
  "key44": "YTyEARKtbU9tmyzveJ9bDTZsjdYuJkmAqazuh9sXsTdcNkut5LFJMGGCgynv7awoyPGPcirBiLFSR9KCCkhMapJ",
  "key45": "4UCQdCELkusja1vbhYQSUjBaNEY46VFdyAdS5NogPjyVEn8qrgNbi5aLwh7R8pBxhWbRfgvyXKiHHHmNv48k9s7d",
  "key46": "3KcUvuwnjEw685aV29hbMMo2rFmx6KyL5cVPTZHpzH7MstKNdk9jmj5nnEPvJQUbdGD3HTBccefcZN18s7VMD5vR",
  "key47": "3ZMUekebdzUGqzKTSvzfkFyHr9SQEU59MmEAop62dsx4We2V7JiZqGpBdq2S2TudDT5u7sCAk388XWJ7Ls7s1EFp"
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
