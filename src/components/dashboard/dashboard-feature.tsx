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
    "3UJ6UqvvRi8DSkyNMV565LchJCEUxB8i9zdSgHDxQhai7HstTG97Km5P9mAbVX6hPTf9E7QbVAny9CGqK7BESeeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XJyyeoUL8kj8EvHk1i4Vvr1Ehr3ym5FYv57W7VLFUy9VY54hoTesdbUi1iUSyw22WNQMxyheRRW1TpYzKQMvFet",
  "key1": "4uUwHi7aXE1aiPk7nP54ZQZLoJusARY3FSJMHxUBZdcpn8o1iQ9ycoK8hq2ZDSah1WXGTnZCECmep6iw94UMSZFs",
  "key2": "4mnFTFUbTWumE693zKkCRBE3VgjYSrh1o4L7dXwtB9U8VPQeLPEHZNUp1yG1m8W6tLh7u9z4KKmVvXsreAwtn9qB",
  "key3": "3p83uQvZ4HLAw433A9DyMcKNMdev8FJube93UQXuftf5hgndCKSmSbEbSw9iZpx36Mi6mRtjACeJtyhCtkodepj8",
  "key4": "2xgKPDBN9bevwJDMKVq9Dara8d6Wm1QzQzpumd9B3cSmLPEt1FNCgAhhwqbT2WuFyMZgGXWQ9Y9dqa561gHz1YnW",
  "key5": "5cbYNxJieiv5RzwG55Nm67hXiLn6vfLEcLdMmHpJ3U1VUqsJ9gAmMR4cycG5GoU5a7e4G7Ks6ExpEDJfxkFKz4ud",
  "key6": "3w2S3ShMWodVLfoeYnPcyatHqPCTaDoDRGbdr1RBHHRbhANt8ipSarGu54Q4RbPdG7YPrG8XLJYyYLXNXspwRuha",
  "key7": "3aary6aUp6pyxDZ88yL6wzpqAgSMww41dsbnjA9psdbewtDfXgXAohG7VJTV4fDeibaZyBoyDwMzQ74S7SF2TNWT",
  "key8": "52GrZ6Em3hnKav7XL1y4148aFCos1kKrb5Fu1ZBZXhB8czqDP8T2GtEs9YoX5trdvJf343oyTncYLFTiKu7vvyqJ",
  "key9": "UvMxWNNBBbp6SzshnkbisjX84mPn6rYhzAHHUrzsxM7AhgPzm1urmSf9V5heSqcu5fwz8sF1foesn8kM5fG8LBh",
  "key10": "2t5KyCgNGpVLPrN6u7TBpgtJJiDtuimSjefMCtkwCK9rBXfGHZZhK5QXwmfRWwqdqP1fpAS8eyKnwAWBDE5bW49t",
  "key11": "o4VyLrp3LruQ8mYjz949D7oHWskkfaKBUx9j7dtRsLVstFbEkha85eoyPXNWKsitmh9MPdHrB8X3fHyryWA9hQK",
  "key12": "31JV7UMRC4RVa9AgRu616fZ7pwLDoYBuNpTnksCq66y8bsfvZ38TVseMp7MXfzGgRYcTNANzrQz7mYLjvAugShGN",
  "key13": "3Mvhc7LrdNtXSTuSes5VBkeQRf8LnoJN8BRR6diGvgRJDFLsT9wHTzV8F2SpTbi5d5BmR86qdg9PMbwwgoHx5U9e",
  "key14": "2VRu5mEUDh3BKsFYk5DsxR9EY62SrFDHirxNhdk3AShAAJTdgnAbihpGUWtozEoENX57msSXG2dqfTit9qCVMGGg",
  "key15": "2nbVs3LbVvBAT2Ng28XpD65vzHg5sHf5wbPfBgnP2M2gjQPeNfz46y4gYZtVppQKWL1Hoo6z9BdzutMYABS9RDt2",
  "key16": "65QCWx4fBYRYG2nPA6D79uRaBkYfvuWMmNTn6Tt7f9GeQ8SbpXr1aCKdE3JCrz7ZbrnKLpgGy6d3JPv8uwBEmo8J",
  "key17": "2zzcuiBL93ALt2eDAjBZ8gNM2nTvDP5WkVk39YL7eWav7cVFfAyGZWPA45yaBFmhSey1RQZZMYt3Y5z1Jy9jnQLf",
  "key18": "4d8eHDSx3vv4x2eeYwxrcAvkU5QqgBkfMV6zkybxjw9nd2wqA8QTdfwWUhAXWPkShymBJdrHuN4p17hmNFbJrp71",
  "key19": "B7VAcAursFx9RxC3ZuTDCgDivnAhbpB6Ao45aBR75bHYSgmvwhExRy9cSQ9KzCEYpA2Js3WfNidAb8PgG2NscuB",
  "key20": "22cPMTNqhyFH8Uq3R2g4ckqqJ1wz25tNSJfQHtpTBJdc1GrHZgbhBExXKJDEmapEVYF2kjbX1r5bUta7xfseDDor",
  "key21": "55cwNy1LWJzGxiSoUYUuyZBCBuk93yT2fv7ZcpFsGVJi4Fr9dchakTj2wxPNDSaPL8FPdzZk7hi9eaChit9rkeNb",
  "key22": "3QjJHqE14uxDeRAEXPsFtR2X85z8SJSzL8fA12VVXrzLSwgeoukgQQAkbdknyqacTd2QjYazm6p7EBWeuTdGNocE",
  "key23": "3j7QRupR5uSvZ89Bnj7UMBSpCMuExPykxEtjV7zjfW9yHZRMNXmswqCacfouSgqjrP7nFtpdgekoVQNLbeiscotS",
  "key24": "4tUajHsYpFt26LTcUaX1NVG7ppS1xVkVn6piLDkviMW2SaeHxWvS5n5hBnn1uEYVN3oHvvMok1Nwaz4ibypHS1KH",
  "key25": "3B3pq4TGApcy6BYHUXDKKctyKjNbTteJwP38PxkCdnw48GvRbFrHcXQLoQ4tiZhcHxrH4RdNwWXfNANVBz7Rwetm",
  "key26": "4zLwPzVBsKjWSi2DsKyKkESb2m8hr6cMB9bwEVHEGJW6ik15ZVqEBBsygtMSGo6epUsys6Ut4cvgEYYAHnT45DTV",
  "key27": "4QTvPBs5eGqn7icP5aZaGgTq3nFxAq42Frc2d69ickZdU4RpNS4LXP5PdCwjTmB1vVGBGjuptwCJ968oBBviVrYf",
  "key28": "6427JkABdcsuLkYjLrqffWq6VRcHQLM6DyNe2aPiFkypA668CRC5qoEuMYMEqdxoRMYJnhZUD6rj8g8cGxkNw6t5",
  "key29": "jGNNoyvNVf5C9ZvSiwKsVeueBDVtXY1Ae7QLDRTB5uctw1kEUJKbLACtuijyxjhjjVfhynGMveAkNbUA4F9HSAC",
  "key30": "4R5Y4cdyvrnWZqKp674rSP78obodTNRoKqWTrt2tEprrnM6SYvkpBd4Ev6xLT491Ec3eGXh52rf7W3zgvmjrEEND",
  "key31": "4PnjVfs6ixjNwxqvPVseLXNejTEANjRzayqwFG52ozJMKcVLVWwfKzAo6QbGXSVXED6aMWhVjAPWrs2i98pBbfWi",
  "key32": "4aBZJZtPbGW8pk4KKoqSCNm88LMay7qPa56SHnWoQpvfo1esrTNseiPAb8quSopJS2SXqk29JYPeiFaXVAo587BP",
  "key33": "63qiqeHHi9eGnC1bNfi13iPYWb5seLpWhGE1aRKZvEXri1GE3aNh3MvdDW7mvuJZyxbrTq55mtgSrhuPVNCdVRSh",
  "key34": "32m6xphvEp6W6xNvQXR1qsyCYVwYmrKBZRaQxsxYTvFFfF3gPJKBFMm3dxme9YN3TYFKrSp7a2PRcHsdZVK5eJ3F",
  "key35": "4x4MXvdYsGyRnXTib37rPCtqJp8zYBGbTAqpWsH45534B6W42dLVFMRxeAtNYESkEMUsRbjhqU7AiewvWsELyVHy",
  "key36": "2oHCix1eGiT6U1Vus1JK9bsEPitLqSe1TyBxvc94mcehohaPgY7YsuppP8NnCjXEVAMfQ868VENwNgkjfZS9Jmso",
  "key37": "3bc7iskNXDr71vFbHb6goknF4Yx7pbjMK9p9N35edmmgDb5GJ8oshA8KXAXnyvHSerFnwJwsPoywCnMZUWRyRWWj",
  "key38": "4tmbUFmy6EkV7AGCWNwQoRYddhioQTj2BpXKhFqKWJfkKFxPT27KDkxJ6ZWffahRyirixQo1byHbL44EEh856b5h",
  "key39": "26rhRmRdWHiaEHf35gE5da7Ndpz8ycKycXMH9QZLJMtn4W9kzywQ6i5urV2U3vGNwDt3SVBayvufh2s7uCQ9giuJ",
  "key40": "4J1gUi6jsR1xhPbhBGYxLEuukANSqRrp2pYqhzLGmbBgyp3c3hHtLC9rBaPvLmsvvrgsZqAojgQPW3qz1wbtrdaE",
  "key41": "HSF1QhEqdBfy3zTMNe2UQRTQPRw8SVtKk48tDBdufej7VUCxa9P8YWQtencxpiZvGDUJFMeDU61gtWSAyUswh51",
  "key42": "294ug1tP9Z7iF1Aye7SSC7uFYiEV5q99NnZM4bnw6wiEVNuWzrknJPwrmg8s6dAKVups3Y2kNyEypgX9TtSr3h4h"
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
