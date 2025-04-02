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
    "5ePR6jEEAo6RnG5rpm4D6vXU3GQekiLS4ScKG5S8iCgtBqbgGD6veqiKeCFhtPZ2qJDZUHrcaAMdqk3r2qDHWvJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FpVm17UdWv1KeMyzzToBdHw1fz5nyWyXrPU6BdoKZoQ8aAF5nDHdXS8BEcpBoP1VHfmvGyrZgsrcz8RendT3cDj",
  "key1": "5HT5CvTTiCQBkXjChRdiqY73zcH5CyDpuTpQegiELcX5tZV55yASzwCkN9V6Ym6JiW3p8t3skPCmtQ23BqBbawcS",
  "key2": "5LaRPo85WkxPgi4pdpp4H1XhCap5nr2z8wijeAanTmgfx5rGDAcDzCaJTdALEGahGBjCepyf65R63RtEDkaPAVex",
  "key3": "4hrpWRvjdhXyQHDvi6fmSWtFN2pH5xR8tEEXMhkhRYH5URMAA6Sziq6fcZ569vaSV8kPy9na2xdyQy7vB3GTSoqZ",
  "key4": "4wq1wHbjVrafWm9fuLGaXEf3XzgotefBZP7kVmRYzBBa8JKZfZi2jfRCa5DcznLQnw2GZo88mMDihheAQWquHaR4",
  "key5": "45W8HuWcJst6RjxRRwmJ4EAjdGBLTFiM4a3B1SweAGCkYjmWNmctCvtC21CeoXRis3aWw6M7eMG6VQ7439QSVwVb",
  "key6": "4xAK65ftUmEtGUL1NTGn9tHp8e6Ax6KojcVxupCV7nB7SkJKSND9nhcFnHbS83xefeXEBdaeBJag4A4aX2aCJq95",
  "key7": "4HzNnRVnuQJQRSa3JwcW8nYcUju7tyaGkChoi1oB5R5oD8rnHM61DKz1wCPr5EhwVXtP6s8PyoQFwHrYv4cLDyuR",
  "key8": "337VYBzV8qrQrhERgU1pRvYQi7TBzbu8FEHsRy1FZWaUjMdmvQqhjZHKeVUHPmcdppvG2UhxJFr26mRYKhNCgbZC",
  "key9": "4MtTM5kf4er5q4pBhMCsWnusnQBndRqUaf2DxGmhsVqQn7EDzFTePu6wzvwuUc1h2dXqdqXM8DBVT72WuvtHKvF4",
  "key10": "4U3CpLksRk4nV1agCRr7RurU62B75ZNFBUiy4phwSnZzghYo7xBPzFWg9WJo8q3oq32qepjpEdMsPqEAz1mBQwiR",
  "key11": "4byix2BiqWqwFyYkZWV1Jv1a1xZyDLxi4PNj9B5fi1KgoZS3eGV6xjPLyhUxm7T8NJirn4PXAvsz1rJzABCqbY9i",
  "key12": "AaycrsLLkGBgJwppFb8iDLvctUtSt4CAYbfDNPPEJjBJ9a23PVquzxoS9R9JDeo4Us9CtkbzfKs4tCwmCiqRq6f",
  "key13": "25drrq9jD3Yr6NkzXAqoVTaQAfx2fWaHhE42xqJ1qGrANEQViTHoHqAYpGGQgJwJtr7hAthjBt8BDpj5X1SUaMkP",
  "key14": "qrs7DNtpyYytAc9UREiqu9N9vMXNVSxCLG9titsEEimfya5UG89CPHivaYcLBgzmPD3j7yG7LM17V8kBTCP2Ndh",
  "key15": "33vN4AsUpsCAosQXeZNyjRZJM6jJVkEgRHyNYYdoHfAugbevmLFrLJi9REKVN93SgdNDrKRKWkmzZruXQUStZfM",
  "key16": "58qkuheaUiCg5S2zhLz2gTjywjkMKdPBJBFsi36qMLzVUEfv5YgVc9UZmpLrKELtwwnyVZ5ACEbJ97phxoPCZ8xs",
  "key17": "3eBexJABoKt2428dRYAcvcnf7Nb1Uz2jmZxsqnh8SrCb19RW1HQ4wgobF8mW4S8JmBCmQpSKXBfouDNRWqkXFbqJ",
  "key18": "4ZR1L2XUyMXEKddVYGwfDqF4VTjyjMicZjhbhaZ5TqU3o6kLuLEVixhD5JS9VMRoX8GbBZW2gQaGyj7mPsTtGzF7",
  "key19": "LCfenBNtLC7G6nucxGZoarHft8LmuQwUNJyizYzDPceDufi3BTUyrWccwqbvboDASKnGoeZth1UQWDCp2dj1Bcv",
  "key20": "2o5Y5ogXykD5P4EYALyhNrN1oVsrxdTYCsX4WFrkbdZW6xLXgyZNgSkb5CQ2dexC7Rm8YA1Rbj7aTap51yneZQDu",
  "key21": "5St4Ukt2PJALMzjjtpLC4Nbaqf9vzT1GsXXRg78EdBSGUaj9kZFsHLjEd3QchbTY77nJCJR9bsjko3kuijv9sF4j",
  "key22": "5APaqgMCbgzBPYT1viVgeo2WgCQPhNxhymMMuW3SNGTK55TP14BxyjXVNfcPGVAfuqBAMbZvH8My1B6wNNNahF7V",
  "key23": "hrqEyNfo6iStH6nEXUjMJ5xxTgCAouCzZwvbCXuRtxiuDt2x15sZtpcbX4Ck4TFAs6VR1RiS5sZwYTup1EuibBo",
  "key24": "3gCcpbk8ay82akACpnFts83RsJsaQDfRtnGG5daa7AZFsmXwwXLuAPPGNogFRjJ8yjgB9wYqqVQCT5uebt2rghBY",
  "key25": "3XLxaQHeR8VQHHjLZgSgGdR7ZSVNBAXcGHv2bJ2qvnN5SuAn1JfbyaLJ6Rax2Mv9jkyTrjDHuhLc9qf5TF3ibDiQ",
  "key26": "5rFdAT59LW7p3pMGT845GJZ4HB8uLQKjCQZMatMrZ1Wz5jYm6VV7ioz7no1Mf6STk1MTwAjYoRi3eUzBHW7rhc1g",
  "key27": "34JUpv5nhdoNA3tYUYtEKrqtwS6YQikpuSiTgCjuNRQ66g17pbJ7HpTft2pub4zTQimzvwvbawE8s4CQkTs55ryK",
  "key28": "5gxuU1ryTStAWaFvBnDtfhXHNsDjqRZBWfWDaDfMyrZgZMh5tx5My2Qx6Ykm7qxaSiNDmKB2g8gZVwDnRgdV3Sts",
  "key29": "2DM9UwatD8ekZ2Cr4H3VLQEKRDFzNLLdmMo8RQdBu4gqPEzEjWsP7XfvodUN7R4iayZMnFMTbfrv5i7zF8jdNEfr",
  "key30": "EHxtpfBeZaz77TQShohn5tLKLj4HEa1jy3VRQWyWkBzAvqjzeKorvnyyL8qY56e1o693JyPGqkkVouKdpGnVzvr",
  "key31": "5jKZTVysemXtepdmeaQMp3jmndYrn61VJrdLtHPCZziU5WxPR2RAERS8SaMWnV6jbLg9VJeBf3C8P5wFNVNreADz",
  "key32": "2sobHfMftvkiBuSBKnJXvAmyis8D5HTJdEuCpF9q2PznjpLmbY65Mj8NcoBewSdTzn6S1p7QtnSkJDCXrZNf2cbh",
  "key33": "2qvNh6GrM5qYjaScgmpA584oeLYFCCgxtuyF8eQprLc11YVccPN8Giw6wiXRvo29KAZuDwzAVEG96PCTm2KyijAm",
  "key34": "tJ7kkgDVrgb2Wjeo3PC8neJBtwatKuA1SZtEyJrML3m6DQSZZKie1gFXZfb9uZskw6QN9JJRwTWPxr5xKe1HZJw",
  "key35": "HCctEfkvZNKsqczzZCzqBa8cTB74CmkUe8RagTQmtVAPUWSUf1bKMHQYEjxNNmbzWUtMrMyMtG6NPkEeFcq7guH",
  "key36": "4vwmF8utuEc13wUPHDiuDk5RiM7fcMWBrhfJSEpFoFhHgmAu8rDJDCVhagGnS4C9Pu9tvPDVw13WJZLHDRk5oWnk",
  "key37": "XXLj43Xo1McgVbj8BthgZZyDDGBciRkUc9iPqvdDBKnK2vhzpcMJpDomGos1dFqNuxcv6fH4zoTCscBb16BfJg5"
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
