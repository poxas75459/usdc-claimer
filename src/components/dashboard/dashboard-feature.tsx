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
    "2AyPDF8odW877p2aBQobid9jhhdhgeGKbmKQngKwDsz1FMCqrNsHXqB6S3MN219V7UofZcfyyUP63EqazFaXbFJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24M6TWJ9EXKNrVtEDZByk7UuYSo6wEdS2KTMcJpGcPov4i4khspkBcJmxyYbj7DXwFTf2Zbwjt3vDGDfYvrqosGA",
  "key1": "3PXHQ6Ya2cPyTPxqMBTbhZpCqGekS654Jn4KqXbbVKWEWb72P1gnwjhgZtaJVubkrn8gbDsmJTXds54qNMDrCG24",
  "key2": "2XDK6E3RS8uKMPqMyoZoxb9Lj5XqSvRmz7aFzdMHtantfEEEGgCYQ9TeSUmrqK4UDi47kfnS1HULeszzkzdQZDtk",
  "key3": "4dKq1QpexrsDJ26wUEaa9WPmQypuYprTDffxs5FzJi1bbDft2poYDCBrt87YjwpdGbcvMVbyEDsnu8bg5H8RJRCT",
  "key4": "ErN4XZopF4Zu4cvfZorF7FgsbXrz4LCzsura9XzaknzzTWf43sSV4LSXhpofUwAFcUrek5oEWRSgjh6LQD6pRrT",
  "key5": "43M7EVBiFh2u4fTaoxsD5R6xHS89MF47bRCP2PYjTHzsTmCGnCtsnkT4vZ1BRMmSYL6yJk2ZVzJto8K9LVDs8egR",
  "key6": "4NNiSUiS7RHmg5DRji7G4hRjQnxiLEHxYogX7uJGZGZGbFqmnqmET5v1YTh3x8C2Wkd6v3WKmFqhErr1XKKxZLAy",
  "key7": "hFkJq79Ddn34nusrVjPZafGbjCZ6aXuMbx2NKo9fXdHfUngS3vRkScBvrCeZioMgnJZWhmBfn9GFmcinb23ASSP",
  "key8": "2ATkbN83XJM9FDoo1YnxJoKgbeCGD6h9VSZsAFH5vvyHUZzfLjk33amA5M5xNcXteiwG8njGgPYUW1FaoATs67mj",
  "key9": "4eVDdwRxGzLViLcFsgFhubv98FRdZAtDa9sQeydiTJvwPgE2KLU3PyTQ1KnQjSh4tbMGiuBMv45E7DbpWb9vC4Vx",
  "key10": "3s8joLFsHcXLDZqN8ih7swvSYoavtUqKt7gP7DMWu7yVo9MrRCWVAaPJggrLBQmtNSeDF7aSwctupYHHpiARo83L",
  "key11": "2bVoVqomJdTmgkuGvPsNpuqDucFvQDwM7t5H6VZQJ8EyyPfuFMmdfE5hgyc2E5A8kXYHMmJpnFhSLrhuwhTXWecX",
  "key12": "3BcGHLD4bPd1DfhMeNdw9iWx49ik9ydpE1bYQf6hRxEz5ucHbvYzSTtmpZbsmuMq2vCmZQhs12iJWZbfxX1CcWhf",
  "key13": "5zHT5LDBNCVoxtC8F4WcQwexxV8zDCaMFtqKeWMrsviXguq7oGSboNdoj1xSnz4qYsrNVvvD1NTvbBm3CWSLCon4",
  "key14": "2858V8My2gZAq7dEeTBkLNNHB1kadv94pWrELGkGN5FS2D4buymF7kiCRmsx9VVXXo51JKjsbTfyugPJf32jP9i3",
  "key15": "5ytyGBjzaqsuVWDV4ozTF2CHbBh4GDcPt3cuSjUTDtHRBUfAFDZ6WZDY4uyvJD6tMeJ5t3a6ze5imN1Uv2LcuYH7",
  "key16": "5BPoQ59azjpReVionTD7T7zuGciebY1ySmYUujyUcjAHYtLA96r3V9MVg1dodrdf7EKvB1xunwtwsvd8RfHoqVcd",
  "key17": "jykcGfPLPTw2VGVvX7ciBK3teYggvHeq1qi8oYScytspcNabGe8cz5co9Ed1u2Xq7mA7jYQSh5gpJtzn4qsZqH3",
  "key18": "3rt7iHcD5Hcen9TKs31ABYkZ4xdGHBtvJVwPEpup14f1NLF7tKXPgoGUpWEBWbjyfXhcBStcHs1vYuCXBdRkr7t9",
  "key19": "2gdL1PFNN1HWm5TbBeZ5SEKRLwsBvLUjnYDzv81ytMVK85nN2ejgdqFiKKuRSUQLthzmNJKYXM1gh1fPVVWX8Kv5",
  "key20": "4y1supsveHDGRm3dvsmdds4eJESMqYyjPF9UkMjfYGJ5dsx9Rh6mrq2amSwRbo93SgpdJZUe6jtGGjXFaSAfXtRf",
  "key21": "2R75qBGdxa9svWjkfsVgShkhJsANVAN3vUHXdpCWfWTMYvjF83xBRtvja5ZB8CFDCdmh1SnH4nma4vZR9jZywxaL",
  "key22": "4sP19nQesTQAbNU94NxVJ7KyosZmUJWmeirHppUtiS25Br428YQd57hGoZg5usyuG3tJXfxXceMUWwgC7pXoQj8k",
  "key23": "4DDAv3RDozqUAipDqWEHvH4hMEpwvQvfUxUQaRHFAQaWiMo2CEiSgVSpEuVTsTc5y2bfuWJdNhN2AiPd3qgr15CW",
  "key24": "2bupz29P9SGj6jPwTPkQNeWDq8JVbrycYqFdzfkxLqQPSZ5t97zmqinpyAeaPx8FnZy9GR7CWA6ZMM2ZxQyTUhVS",
  "key25": "5iCWHKYUmeJDN6Fmc8Lc92Bpxp9md6u6Ztx1bR8kCbuJ9dZ6gRQE7wUKnDdUWe4jdDwpWsFJeVsE6T22iPgPEKhf",
  "key26": "Mry2hA6rZJGD8XmL3bTc9Ge5zxRmce4Pdjomz2vuWBUT5xzuaJMFYgi5raiqSEEiTidGcHTMa1pVLmQ7pKTYCRC",
  "key27": "2qcqBDifT1SYRbGcMMLeFb7XZHx9Tpp6qziv8ogN6iMifn9Sw1c1fXTar7uHdsyvC5DceyqN5m7n6ygy5pakfChY",
  "key28": "3f2NBM6drKraMwyPQmxG9VKhfjxq8CD4FsD7AesEHtcdK2gchG4CvdmTFuNQPQYvmLJEcB4tSgGJgQxRtXNKnhue"
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
