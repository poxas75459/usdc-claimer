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
    "5d9fkecioPfexyFRhfWGW96retzN88mmYrexVAW6G2nH7sj3gucXbqToVWEPBnHEdK1VUL4p4845BxE1pRg5n7D9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eG2eSebEyrsPUMu4eZDdNJTngoMNztsyUfsJTei4ZWLzpL6eiuwrtJGrfzEL8GrKSSshK6kSagpDpPUHYB8uek2",
  "key1": "4GaXqWEArDZntJUYo5SwTKLzwKSG4eZwUivPJbQ6aahGKKf6r3iNMUdDCa77CZBNup7Zh4Pkd42SqTPtLemcwQai",
  "key2": "b1WwCdicGkFCuB1yBqWeuUXthqTrdUyVGMACXeBqSQ53CzxXSF6x9zXEsjXbRBPhdG8q11oY2Z3iheXjCyXbbKM",
  "key3": "3gVPztJCedvMnLEcmfhq6LBjs3sADjKKNydu3mJQpyUPGW7UDkbYBZi3KJhrnTWkj5VHtPtWQoEvhPcgFTBXEmXM",
  "key4": "5AspaAyc6nmGN6biebTH6mv4wT1NvbARuQWqeD3d1Xd1JeYMxj2NsS3AZsgfFCoQGbwB9H3MZLyfUiJGUkEY1ZGh",
  "key5": "65kyxudCQCoPqHd9Yskj5LRSXNTDUH7oxMfgV46pVoB9bn7z8PBrE4JupFp9jXqBGBqa2RLcNW1rkobRTQxf53yG",
  "key6": "2vomfXCqi1dVkrD7u1LcSESTwWjsZwvcLhx2bYsQsNBB9s5wAsH4xcBFfSNWDfzwsiVxZCvNgrBMYtSJfNP5u1ic",
  "key7": "2ADMrVgxkAdw5PmRpnEhBorrfwG31UmkZTaEBsKKaJ1fYGw93fmffQnh4cWoFvt3VHG2kyoR5Z7fPrDynRYy9WsR",
  "key8": "4FCPuq1YRttU6SWK2J9T2GvUx33v1H1NRWkcybDjqnreBbDprWpZWKK3GXMnzYUTCWkbqsxB6n4t1C8mgBeDw2Kv",
  "key9": "57FdYY13nHaSH3yBi9SjGAGe8C7HeTjoWo4UyLB9BewyZzUs3GAhKcSSjzHo56vgNVBkqxdBMJDZZiUEQrHKkann",
  "key10": "33mY9Fi1TLKACGGiLZk1XU6hxdLoyTqpFfLv83Umb6CHyMvqrX3k8ZJ6bunNcKhYq3cKHAbekvgvFvEsXLEPbchF",
  "key11": "2RbtCqwbSfaD1ybE17szXFhgZxRBf6cLU2Ap3XXbFkgu39JUHfcFkFPDCBc4iWv9689idEn24ye54VNcSh5g9zyy",
  "key12": "fJzFxF23LunrXi3xMHTUiUAjSNcP944saCz7oEEHd1JtRJq6EqVwMa1Ywn7KjSQaMfkYfrxSB5bScVXzT9E9ptV",
  "key13": "2HJEjDqH9VynUYXTHey6TXPJAJF2AAfPXjzg4y7abx1WTDQ6VNaQKtfobRd2eE3cPhX9W9Ts4YSGELGayyr9DYHF",
  "key14": "38m7JGfXvdUm8vneUXi1xTUFUVScNx8EbH4VNixWHKMXrpktqiukmwojSp1LdYpuLVXnAgugpNvXt2FArGty883E",
  "key15": "2A2zTNvQvzXCJt86pyVBk7QvdWo2QRcMej6BxGsMBpRyk73PfiqwRP6svPjmWm7kE5Er59n9yHjw5bVEcVT5wgUE",
  "key16": "2iBQ7v9Jh6qnpkFqadthjX4T1Lxd2TTUGLv3hRNQ1pBbYQUZwwVqpUHJjfE8cDU18NXXqkKKKvW6fg2v45ZhE7UR",
  "key17": "2oCZ34bNHkBjw8JSVmaP9q8T5TUHxXc3VRTZm6EyMcADsTe5JGhZ8wWjNPDmUu72WNERx6aa7e75LdM1R6BXXx74",
  "key18": "2HJ6fMCJwJ8J2BjU4a51vfjgENpqj5sMnbFw5CD1JNLNNs1yjKo1ykvRa2JjeimAaLqryAxjobQC9pDknAr8Z77P",
  "key19": "2rLV5GQLCd7iQ8tvKuNP7biytVmwnSZFbFtcrV1HSgPSTpzWvoJUkdUxUEDcYFV4aWqv9EUfHKAeEsqLEiKTZE1p",
  "key20": "2PHG6R4Zc6CRMtjCtAYRGZPgR1edKidTWEwyBZZ2aL2NfpBZgZkFof6XkNnb2C3MRcB3vJcU3CALu3W7QKhmh2vE",
  "key21": "2ZEpuDLxjoDFCpjsu3edX3LdBkhanxe2AEXB8jfutfz9CLkVuoXwhE5QRSgLt9N3JbZGw7yreeDQuXFA6WaK2nF5",
  "key22": "2gR7f7tereHkAXyW4eu5odvpNGcejJAhkoGMo8GLHvxabXCkpD6K7wXCHtbW6EmCzJHUhCry5JvV7hXQk7inH69J",
  "key23": "5Q1NY9LaXE7rUZCM6fnKaURDPHjrra7nSyq9uBXQhXJmEGzWJPpwmRFVg5REmgGpC84RN8scVhFscaZwjxTwQunm",
  "key24": "Z235AbsmLt1bqycwcVA4uR8QYGFHTpzmq4SVgH5Gk1gdGN7xRSSbA5jVdoiTi5b4bUrwYqb7S5FS1W3LjMj1oJP",
  "key25": "4fiA3Lt77s9jkX2MzuRmVv2R35w4b7CRiwPv3SeJpHdckLbMa6xmUpHjePmhXTBQxtEKGS6pYkqJUPgstPCHFkZC",
  "key26": "5Hs7cPqGSqRZG8w8Mpt77ASBjkvtsMcsGPwpVTJ3txn7HDxRjsJeqsZ9FNSGAR4yREzKFL45Dxt4w1iMMNvE9pQx",
  "key27": "32kduaRW3eLiKfLzqBjFUvyEbH8Fgi5PYMcX9jCNdnuirCNoadJsWwRTj1CTXmvfMdYs1FfyHfXqKGabECmQpSQ3",
  "key28": "A78LR5wAiBYBR39FQKtYJ3p4pcXb2ma5vCYjpkN92K3vt8bdsGBW29NmB13Gzw3J9jRt8kS8F9r4LFJJgErwwtp",
  "key29": "3N7vctezuq8oZufriFLYy9Csy69dSgynuBeNwTdswc4icZ8s1XBtU1hhQ1wEd83oJMXfAFgE6ubnNwn8ULNctWNf",
  "key30": "n4jQmyXuBoYUhectcE2zh9R3RnKsNYiVVjr499Pa54YF7iz7Z27p4CaomCiAPbxVNQgtxNm5uA1hH9SHfa59vVs",
  "key31": "4jX3V7MPdsxuxBeHRY2B5BJ6G4MBonSnSLg6Lh73WrLic4zab99GN2UTPtyEG1Uq6gNC8W4hoeqPasrqzLKCHc5q",
  "key32": "3yWoupBf6oSocgo7o9PRPMnARu8AtbkzSqnjEXDKmVVnTQCcXfrk3hSVKKQf7ovQTXr9F8BuwHxjPbx8SJCDxnDT",
  "key33": "2NrUKizF5BzYqxxQipC8Ern3ie3LxZ7H4D88eRkgTh5pMbG953GaGLSjh2sdcPgDd8LLwosv56UwutH9rPiZYJtL",
  "key34": "4LARxZQSTKr34wDb6abX8AeSrCciu5JwWHGWxWPteLBgzUuvUy8MmhdPg5b73qm1vZ9PwfbcdpzDj8SykyGPMNm6",
  "key35": "57M569Qv1uAKavWypHkgscERZHzwtDVsKRXSjXNbJ62ZWeuXfAyyYYwziBwGuuSKrpRTo8V88fUuRBAYzhtVWWh",
  "key36": "3sv2zNEDywSXs4xtFBXGtnNgTgqf36ewGvqxqjF5t8UPFFVe6PqDNatvkfUc8mcXBNaveUPeHsRW3jGZeeuEm1qV",
  "key37": "3TDS2nkBn7CoccNjKbK4o6zQUHqP5XmgYqnckoEiUzFEaS1z5cfd2daQaAva69BqXzhdNfUzzL4vnXKTc2nNA4Hd"
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
