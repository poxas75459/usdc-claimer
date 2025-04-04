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
    "2U4ygh6SMNC4taqo4mNwQRNcUzRGGRDPiZQP92Rz4jEff5DG9sGQZzTvhMA1tXvyYioiqe1DUmk12oZvvvPgCoMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fqe4ktH8mKRhBYabFi5XaD92pb8AWM1RJURih2CDgA9uwbHT7Y1b18QvjMvtXVBSdKUfAnjqEBoMJvf62ZsQKrf",
  "key1": "2wkdZdztG7NdKoUz4NsRL38NJisJ1CQnqRCmTPnvdBqnssCSVabwN1jKt67cfso716peuRgE7v3m8zvXLwSGp5AN",
  "key2": "2k7qYa5Cr5Ye2dkV4KGE1VuirWjpN25N53wYkEUutUYgDeAkHj74xcgAQuqWgkZWFD7mLSeRtavYvjtJFgrU4LiQ",
  "key3": "5Q4bXJtRUTNtyVcXUk7TQPUDoMGzxZL5L9s68HVq1DeynkfkqpCX7WM8x8CT9jLcAALtbHSHmnGhtgxY13beairC",
  "key4": "4fDh7SkYWuebTMqcHuSbMiavWTffRNHv1TQuqT7yKjkMPxSyQ5oZGwQC1VLStnDGCc4e5nnEXT2k9AzWUHHoTf8g",
  "key5": "mU1JJFiG2QWiiGoVE7PNK7fAto1PEje9WEKsfr5SpVvv79tWUTLorWiQ8Jnn7XjY74gu1bHbbyFkwJNsZZpZzQX",
  "key6": "3Rg28UswMug68CL8w7CUtKQmJBoVuBbVeT1m8gW6rnXZdfp3ubkUGwJZ38DgDN7kTB4baxZwn3sJtghPb4ccjKkd",
  "key7": "65ADuoLgXrFWnu5W1MbxigSa2jPRSbR7ewsXJc1McqU21nWb2iCtb4ahm5CZ9nSX8N4sFzpZN9Tu2QTyjcVpCQFM",
  "key8": "gzC5BtkbcGTB1ab4vBRquGXmpVE8UsU8vfdJDvxv9K5axbmyDZDp27AXe9jqqrFdu2viFhCJTuSEM6A4yjh5nL1",
  "key9": "jc6roRKUSEACUkCBrPk7FM8Kz1qbHX1BLNedahWUHxUJY1zYbzUambLTtN3YXUgpXzaozpP2wYgMKqgZjvUn2gP",
  "key10": "wB9TKA1ijeBhadaJmrmhX1Q8dN5iCDrWCq2NwDSXCdwbVUyZEJ4JSUi14i14NHVDBeccNUqzyD9Mz2XPeGvnbmt",
  "key11": "2gLqX82Er4wAsyrN2UspHD5TEXdHfQsTYjnJGunQJQPZGcqsKK9SR7khTBn8Eipb6rRzdjTTEhuy332AKZ8QKG3E",
  "key12": "4eGHTfjADUVTG1bkWMBN77fhoG1qbb3VmvnsKS3H41PKSL3JHRXVKnZfDr8sRXGXTxPVJvq91ERmBqyGm7skWuqu",
  "key13": "2FL6NTbcBpjDvk9Bi8PT5omVnhtPJBAfnbqHiKWyy9XkGukqLPGcrCiNhw6t3CgoJhpJR2QQsGU1vnLUKzNx9Q9z",
  "key14": "3nXsGAFJ7ic3TwMEKsCqHuLDgMcQgSj7hjbpbppWZW5FDrihGbnp1PnbiMsP8GJRrw7HkycZhdg8crgyrLyvbnMF",
  "key15": "4doFT7WywVSFEcgj4bRfFrt8EdS5EB8vCFvd5NDG9KXvBsAhhq7L9wkacqbLdacfP5ecdD4fxTCQGkS6pM87o4Jf",
  "key16": "2tWnND3JKEZUns3P9ddogdq6vpecpaNYswWhaUF721ZL9h6nwekqD6pRx8yhmwF2Yh4gmek4w6fUw1ab5q7uNBaS",
  "key17": "5837ozLmVge5rHwJufhEzhqZ7KjPuGtzfJt5US2Bvh6voBWQDcgJQPex3dmTQBkasA3KNLwyrRkusYS8N4AhcC4M",
  "key18": "5dBiW7QQpjMxbaFAWbhpC1YsMKwA2a8xVCUkt7FYJVmiLXX3CqrHH3hrm4wxGnyfMh1mRHcc7D1bFPRTEpWLxs5u",
  "key19": "5FukrkjPmnX3V638Xr3UnYhJbFhVzF4BYKvrwPyKvgvAo6Fdt9qgs1thFZeWRwaA6zRVLGX7iuMtucRvQYKgitho",
  "key20": "4MniKJA7MRGuTAUDoHpjQae3973xKen762m2BpaigqUWU7ZwPeEmWd9JGvZSS8mvfYPNruKzEuLQfkxqVAAdTZJM",
  "key21": "pBDmuPcVFZexGTeg2oSu4ykE3Za2uxtHvkBGLQeUdLW916APx9stqH1y6GK8s9zwckuMyL7zD9NfRYFSb5XwMqr",
  "key22": "UHw1yqas7Q8KnczbqLykYMHXJzFJcgUBGKt9P7gh1WnYVX9mnaCvgXeBVVu3kEXp1hf3wtayhLeJiGumrSX4EKV",
  "key23": "348HRtMRmu135JjUQxyF9nuWmQCPgNDuRE85WL3gxNd5TbZdwmKKGHgHxXEFe6jayKVso7JaM1WaCGcvhXfxFZth",
  "key24": "4tQtfdDmNK2s4L87M3mYbsX2j6pjg7SP7MjbiLBfjdeoRKJ5iiG6FRdq9EqPwQfVqnASgfi39oudCydXgAaSEVNU",
  "key25": "2dTtkzq43n2zfezuavHqnCJjJcns7J4t9bmoRnJT9HCAuWBmuafJW2EzqW72Xhi45xGHWdEDtvKXh57fKZ2uGJS5",
  "key26": "54zCeQPVMz84HQgvkqcXxnrUDt4drZMsfAwd9kkP1v5951hXUhHRT4HKTWy2KLnkbyd2zUy37NBDZNNnYPJzszkZ",
  "key27": "2Bd3zP6aX8BPMTpG9Pzx7Z95YE1TbTeb2GveYTQ5ik564FzNxAe7ActmwknobfTjiaSCcTbp3qWv5WeJ8DKvp8ZQ",
  "key28": "LNn2YM9v9qTN3xcPLjvFEfpmEKdnZoTFbGUwdWinUPmTCxpdd6Sg7qbqi4A8JUXmnx8KoUWCWZ81PRH2ML4n9Nd",
  "key29": "kJGiCgwXaLgzzUaS9kdG33uZme3D22RsBuCaMYqejk3MB5NfcFTfwjHTkfeMW4PPcS46tMmXGRS9K56eu83qWv7",
  "key30": "63pJ8Z6738gx1iYDZfk1TpgKYxBW5w6PZaGvj4tuSVDiffbr9fRUmN1oDMGwtePcjCs6vGM8ifkzWZasn6cBHt3Q",
  "key31": "3PmKPwEVXkqiarkvs1cyVSVnzccG7cfVWaKA1zCeU93S1tvrM9HHJ2nbvbhiNwHRFZGFhkooCpfXaCgVHoz7PKhW",
  "key32": "2oT9REPho7rAmXCKrbLTbrwu8PJcytTShRPhye1JnsU8sVvUoKvhhMEoCrSGCS2urMEwiEpHZNgjHyY4sN2QyB12",
  "key33": "3aHSPZzNQYTmQHX9aRSkhb59dNvjL6UkvJHca2TTTeeykg7ar2zQxLrZVcMjpXsu9Q9ZPMpkjFS9PzRcxQ9m3yyD",
  "key34": "hiM3YzGsx1SpmLD7tbxvYMLPvAEDUjsLtHofnVLdCqVam1FgEh2fuRidZBDHatTtQi9KMLwD9zkH9gEDXbfzUCS",
  "key35": "5Yp8a2NPNtyRr3edQjPLzKAhGKEgJGc736zUWeArAy1cXDxi6PDQagb29eubLKfzH3f8SFnCGLAKc1mJXeRQsLzf",
  "key36": "F2WZiv7TYRNqK53cVxM8zfh6PK4hTt7XKar8ct8QZfg7ufoa9Z8TyRjFsC8ocuWYiPNRAy3ugtiW5U11Y2REsTw",
  "key37": "4hJKRv9vGCV78DpvuKpJoACiNxXth9YJUBTmb3hK8MhRSBReHDsFKrMcqd7puqYhuQC1pWLGdd6KRY84Tis4QcbB",
  "key38": "WEtCFXiYKd6KDvzqN2DFuQmqjEC1MyJhtn28syF1GRN8QqvqvYugY6V6FMvisspTEWGpd9WQxTco2NZ2SWXQgzt",
  "key39": "4Shk3UsRsH5W9k5si3tVgTNWPeAr9fMMZFeBkUDumdDSQSVGJPi6FbALS1JLEUiwqD1sNZKpMVYgPgfZRF5oR27x",
  "key40": "2hjnNJc1BfAXip9FuXYB3uUAMfhKR5RyRypRU2eszhCv7LEfrufjrtssyFHbC79yTSWDX3CGRAA7EJgQdFpWTBHT",
  "key41": "5Wf8aWHt62NBhpsyYabB6VyVw8qeNYhnzVYUu29iCv9jrvuAnregFdXA11QVq8MEgWDibfVBoSiU1CKb7WyqupK6",
  "key42": "4Wqwpr4PfBo8w8biycKx7zXkxiomNFhxYPyvc6LKaBj6u3zRE3j8gz8xykrS8KcRpXcXbmziicwsojW6g8bZH72d",
  "key43": "Ss8Aasu3Vg5mAtxoW94N2WvebhGZX43AqBpbF85A1RTXqhkvDpagwFsFjFb8atYK8Dzeg1RySghntwcjGYKbkwY",
  "key44": "4efCd3hTiFHaeBp2i6heTGgsmxBZmcwnbdM3gmYsXkEZBqAq1JCssWf6R5vQj3Y6AfJVWqqUhmhxGE3PUD898CBF"
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
