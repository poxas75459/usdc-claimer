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
    "5hNjAGRhgofyEkMsAVncSufYdMEGW6uTqyYW3kEeiTbCs55ngGPv8zG5W9ojPTWR4MpthSXA8dbzkAj2RK9fgstW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "678Ax1Vt5DthEvRmT1tDy4TV4Bur5iGy7KeBXo76TdmDQAh5PFSf1yBy1bwtLQiiuir7mdDTg3otBwiXJKq85Bcj",
  "key1": "K4QcBM7MdD7wmauGTmtUiV6ewbWLzfyV4YCSDa6fdeTHYMZSWmvxETNuEN4KPtEGcswvP5XpYytqfxLSnsZHSQQ",
  "key2": "2zN8QwA72LwiHWefMyGE4w9cA68FKG4aiyHfdNnEwznLUPNNpWWyffxMBhBbAZwkFXTH5VvcvveBpDheQvynVNZx",
  "key3": "5xrDbFq3pxovG77Sh9UygsKWi7Y7zHYWUwVNuPgZb8ABiUhvoXkNfuBFpyJsqp8owcm9RqEs568DDFivpPgRAyDu",
  "key4": "3PumVVD1bW8SPYZ9V4R31D3ienK4aY5VhtvmYQFkab4hRv7bbtNm5oiqSgsssvW5pt4mJUvBmvKYBHkDRagcc73r",
  "key5": "3XH4qK3wQ7Vx6RpkGN38U4nMJcdmq3iHWgRpdo5dAHqpJxDk7kXhrRBzTo43TLZrRABx9b7RFUYx9iRzDZvFCBBg",
  "key6": "5y3HDVLuZqtmuEFmn561RLFcLvJF2jxsgsxEer9r2UuymXUokZNWyRSijwbnCMPziT1pvBAQT6Frw8qjK28QYxdZ",
  "key7": "5GG31k7SV7bhQ7EsQdN32cDnuCUTjsJgoNyMEnVAecLFitD681HmAg9N4ZYfvTFH76wLL6h9VUMuoPNqWtaN3hv9",
  "key8": "5rCkrSBzbpt9YwcM8Syu2dypCTV8fWZzY13Ev5jF5oZXVMvRddSCERTFxKSp4RaFiwbg1d2Mfcck5E6DDZTFTeFR",
  "key9": "3czddYATZDUF5dBRr8H7JfGZdjJTW8pCF6iP3v3Juv8DiK8rpoFu4vbAqiEZBys4aPvNe5G36SscNeMZkYePiHty",
  "key10": "43W5zdjXpon4vtVQ8roSjx9sjW5Qh2s9FaaSnY6V7rwyPJvKM77cQL27bHcothop61PHnHQVNh63jBHDqqQNmMgc",
  "key11": "36HvLNmkKxkpC5ohGBHMBiFqhECK8Hy2chAcy6VHQqktpYgb9gpXfvbpFw5boC46UWT1mtmGC58SisscdcdiKR8U",
  "key12": "3AFnhjm536JuMbJrHFWcQUDFnueR13iSLy2ssD3FmoeDW2nE8y4jePYvLXd6pcimdDZ5cnZr6V7yQQDSZorgsbo4",
  "key13": "3X5jtAJ2UtjGoi4AL1p7x5aSgCi1asQwNEyhvp2dEwS2RbMXtKtWa5McqSfxEVDKmJJCJsfzarJVgie28MERyKBk",
  "key14": "5DreDoKmfpbi1LjeZSBBvNJmN7eSbNCrLmsv3WHuzYV8EwkyvZmNDpWse8i6BZ7A5hjg1xA3fk78zvdheDUY3mnF",
  "key15": "5cLcduzQ5MFDA1RQUhtPnL5useAFPkbLNnAPJ4orQX6KR4bn1P4nXopVgKgxL17Zc8oDNEH1TvcAR5aJH7r49FhP",
  "key16": "3rF5yuPivm6ps4qL5sXmZyZoYT6jsU3wYf2yL8EeWJ4Dxw3XqEYtXLQmkXZTmyJPrDxnEM5XYisDvwhWivGNdKRZ",
  "key17": "5AGCo33fQMjJSWC6HmnaKqZCUsCRyYSCn31vnsB23368z5g3J8mzGhZgjJwNzULzPkjf8ZvhGBL5ZV2kEjgzvCV5",
  "key18": "5gnMXFJQjHaeo2qtuyvHdDeSmSeWHyHdmFSy9tbFmNPYfXrrRZ6dnuiXR6bN6cXouf78NDSxbo7sRfM8UERpE93b",
  "key19": "39JcsRvVuKzXZpih11DUgnRDKHk5Z6x1ozbiHMjHyv1vbRXp7V8q2zGeVodHbUjdB9uBPNXgKkVUZ8bdrAdvMVU7",
  "key20": "32UVFtu6b7d27ZKpyK5tzeBG1WsXUVb4QDD8WruY8eZXNbFAxv5spuYDfMM5voay3VHFZfdytiDUTxmNmeksxKwi",
  "key21": "2ux2nyWvqustjbfYz12sX9kk6s9eekebw2qCWK71fqzdjthDHxraCWukgC4W79u33RsjanV9LkzTnqdkhnghqEaa",
  "key22": "cdmNTPUDYbXuDNwghop6s3D1x1CAy4EumjahxpEDU633FDVDrwH8J2jsJoqX3usGtFDvhS5pGqwi7PEprxBDaQE",
  "key23": "3aYnfUvAzqBj16sN96aFq64pqpfHy2PH7hz4rCwo6CXBksgjTjjbGr9hCTMWmBUzfVrnEH6zVLu2PU3ya77LSapf",
  "key24": "3aHXUytVqS8ZYWBUzNTASspoS6P4gNVdzuKj43GodCexXsaYeuGmT6WFhroFzpVySKmPHwjtWJ3qHsg3PobpqT9R",
  "key25": "LVspP8eY9E531tLVz4bBVqK5sNnE5u5phboikiTxHQRYv4TA3w26NVkpzBVmBRAp3kZKpvmvFQ2ocKdW8sn1jGD",
  "key26": "5MkZpUMLc63ZaSQKaiWBv9EJMXqzoaYV11rnkAVLwGFzPamdFttFMqAChCZTw5hyUNnivzMuJTiiniyMk84CzCVh",
  "key27": "4EFs1ejZGkPS4jUpveMR5gLCHSeuuSvfwUmyFPHyjuazH7syg9mh4LLk5kPuyaPbssztaUKzRmDEnWcs5S149fYs",
  "key28": "3oSwMyMZb7Z4VVE59aTff3Q72hzwMM8HTdWZWKvNJsy14tHyxp42zuz7Hewv99MsitybdukT89R1ikgwKpFVquBc"
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
