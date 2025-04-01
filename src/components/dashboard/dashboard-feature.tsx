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
    "BagNW8mgDZ8LNyYnnW7J44y2CuMxEg2HPZZ8EHFaVyjurgQwvapzvsU2o6Yra7KLNrZXwrAiGeTqjDXSQYmuoin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PVzvnc1iRbgQxf2D6fngtH8sSNLJrggS8jD61SaJbn3WJeUjnvMypjMuU2jdbQu75wpFYz5etQACUBhdzxA2huU",
  "key1": "3ZVyh72poAyckBJgCGB9vJxHip3JKLtLJVTuL7YQWwMac9yGVYdDPh8mDFoJUvL4Pwi1v3VA2HhqRkjHbQiebdeb",
  "key2": "6m7Z596EQPbcLi1kmmCUSguXXrzUuATnPrMRJHRUgc3HHxuuqH7KYz4V5VdYssYTAgz5iCj9BbZa9zvtnoqzMf4",
  "key3": "3ULqr1rxXLjPRPLNxLyX4wJ6YbJZAxEQArpjN1ecpVmMA914Kr26Y4cWkRCD6LyYeUiZay5a5zooFAPnf3BQSGHN",
  "key4": "4EjayN4a7ZpYi5D5XM3JibAT53m8VshfKFiy7TqrFSKSotoAttZ6cSbMomFu7BSpfZnkp5RVM1PD2Fz85iqth5RA",
  "key5": "4y46xK6C2iqRyZZX5sa7vbBX9zZcaKW3MqxGn5FgSnySAkNXMATHJRYnmAEZZKvxhnRYsrhRQm1PaQz6V5N87GQU",
  "key6": "4UqzHmdtWr6n4hwzDfM7wKXBhyWeQHwiL8P8WzHXAtMfTuJS8DV76VLSLVsgEkGs4MJsRgcydCeFRvfJ4SJBbY55",
  "key7": "4QfwprNcXYKe7yMAznK1CLD17CJzqd1KQGPFKkHJHvnu3QMqKSkb2ABKd5o1BmPjxNmYd84EtMaWLf8VwTFvwj58",
  "key8": "3eQ8NtpKL7HezKp5BLiQrpWtTfsbs3AAapKF2MHm5aT5dXeK5z9DCdTZknHbdiy7n4DgkUvcoiajmRQWjb4eqAmM",
  "key9": "4QW5gvo2ZfQy3ZUQXsxuHnTFm9ej24WQam9suBKYevVGdoSazzW7mL66CNQQuYqRHSsAha588fW2twJgPGBViEiv",
  "key10": "tc3u6uCuLbFDD73T6aaSgh2CzJDGufsTCeziDnvi3wjGggh5UjdZUoiGmVCJDAnTfv7Y8nsELWp2RJsQum7rnPE",
  "key11": "jeMiBt7tNpwgAkj7DoD3GaX84paKyZCNVzutCMazh836PuFhAQUx7aBSZchkqctQYUHf6Kj3aokuSmwuNPMwpBJ",
  "key12": "424isuYXSBZmQDcunZwe44eRd4AVQ8HwMQEN7jP4DDaS6t1p8uEacazoPTifs9uwZ7nspLZxC1yQQuiwwttC5ZQd",
  "key13": "uf9obBhmMeGxhs21DFmzbMVkXYUUDLmwSuCaSa78CwcxrXmUGbfJ26fLcnLHhdbwF8qzQ7nGhsD9ohmvHTdwoJi",
  "key14": "5tV7YUd539pu5oaQ7MFctZgFBLWcByYtTjmQTCxHrgBhSCsJJ9JZgr1z5GMsds4JipBmYKjkJmFJoD2kWm2HPZJe",
  "key15": "3LxPgdVes8ByDmFde6gsGgiXeQcvJykZPyEkEJk29JoQ1XKXppjtsZwEbWKDMGpWGGc9yfoi5jDGxkLn1VHxqGth",
  "key16": "4D55eC7ZnyWXg7RWhqqq1wKSZQHR6S49Zbm9duG8rR6GFisPYRSu4Wdqm6PXvakv2xuczoQ3a2HDNGDA2hprTm8Y",
  "key17": "58TBT3vwFD6FWWC3eRYfFvZCVtQQCpTt4hiaTbc96uw5bu6DKnBK16U5fFevXjMAoxfv1WzTUcwLc7j5PLsau6o",
  "key18": "4JXR758t9eok8MmP2BMaqFVTnk3i9XTHfYh8EibrAuTwRs6gZiXCqRWRpatU6p33ohnCzry8dHAsnUoXDLnGMfrr",
  "key19": "4qcdUjgNBqSjur1fziF8sWpS5kdWmLyyS1QEcZKxanbratbegEQPnXwGcqamiE8fcmfwVPZs82BSgyX5mE5Av5H7",
  "key20": "4hydShz5WP8DkxNcghg9cDghzVGHpSq4bNj2aCeiUF9LhqCr6VYYBCP7wWg3CyxP66KYFBdBGZ8QbXLY8dpYRGPJ",
  "key21": "4yjxmXGAssdsKftsMBs5csh4iU1EZGcVGpcCnBZ4qHnQukw3zqPRqRBXWKxZsW26ugrKSB9F3axzgGs4DxahboRS",
  "key22": "2nW9ajZq7QFuwi4jscCfidzfDNsdaL9LktkQrBkVr2AoBDPhcGBqWAcn6MYEPGjCCUKMf2wPJQYvau6XtBrF4FwX",
  "key23": "542f95qA8A5PQoKG4ELyTpnT8b3YkGn5WeFbXSc6GSxkPXWE6VYUG87psj6Dg6knSxdAF5AqYcnGqP6jgSshKN9T",
  "key24": "ohfWbmXzNdycMnGMyCSYU8dkLQy9bBDJgSXRwmiFw1xpLWgK1skut7xGCP8isPtYDtiNQK6BgLCAMgxK8XQx52M",
  "key25": "3pJsaW67KxmeZZXfMU4xQwbrB6SNgRWnEYxny8Kr1FfXytoGz73BDbUFyhv9jw5Rkom1dEtKLX1YbfCXEs6GCpT7",
  "key26": "2fTnrvjrHyDXFqQRELUaNFCdYEgqh2Uo8hW2wxfttnJhzUoPWfQF2YPPMF76HfJ6iFrGjtDkfTUhogcKUdhuGtQs",
  "key27": "3d7tZ9XN3XoTTfhwMEWsKBYXteHPtr1hQEpfSTe9EFjhtQMTQYyqh2Xi4Adip7XJAMZpr75PCLnHbzmEMFWM49tW",
  "key28": "4N6MvsCdynswDjZRDf2D1JPeWFbVMpGqLYEsYoc8xsWz97i6WNnxtXdHRBMd7P36TZoqesa7QuqxkmKjLT8YqkYF",
  "key29": "TdZZvfURVU6WwknDYiM1dXfBggS8rs5B2r874car18DH2Zuf4dbey5VkmmfKRLv1xNorh8NaPYFz45KcmTmrtKa",
  "key30": "3qTqCrNXBgHGXesGKBFVuyzvtGeSWodik3RPizmjmLqXHd2VXQG2ZqoMjMtDEotr5eHuMa3H9oqP3gzs46JbDv1e",
  "key31": "2jnBetk9ZD1ThEoVTDbR1HtN43cCNZk14XUsFbNBLjAr3WSdXyVxkuNik3PjpM3VRCGHbwtHGuBYyPNtAHSP6VcH",
  "key32": "4VDrkuphNdRjqhpQjj15bM9HeYdx12xPqACDWubdrp825pGA29z2WWe4SNhz5y5n67JFL6GFDaEMAjGeNmH6Et2x",
  "key33": "4SCxFAPzTRsyA2HyjwjPYE1HPhA9X6B5osAaFiYxyEan8uZhNaYPAvPYaHzNKUovRFcxnjpLtcNCRTYGA6Jm9wZh"
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
