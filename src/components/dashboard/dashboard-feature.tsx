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
    "2GuB7vQtCjFaf8R5AyHuDxN2Z4B2VR2AjcQAxqjPHH97JunWZSVyd4L2RpwcLPuuyKpTrskxtBNzPxH4NsJkrDcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qxL75iw76QXUMoVqFrPtwu2Dof1UMs2PJFmgo2oqm45KMv35jwW4HjoYtykwXWWcsotyzoJiLmDDvpDLGEggnie",
  "key1": "2v5HabnjBpfVxBZgiAjT4MHdV8oGhjjbWEFFDnLFAEqpYCPQC2d1J5vzTtWXLz3rarwc4xZsLPpyaioNWJLv3tZD",
  "key2": "495E16kTqvDxEnRxQqHeENorsaybH34EXFbn4Cwr8EoDHAvEcetp2z6epFcvb66NnPCT5ziCruwnZs3bSBY6NFeG",
  "key3": "fhLGVHVhHznBNvnf8jHUFAiHj4DntEpk5UAL13Hc1meu1ftA7MuVZbtakjeP9QMwFddXhScE9rdCuukjv2y7tp3",
  "key4": "42ghF3ryhMJ3a6MGodYhf5rkwxpoPeMUV8K12Pq38sC4oJcnbUTVZL47CpfySgqw1pfCC85XdYjNbaNPbEEquWYz",
  "key5": "5BCZL2WdyqoN6pJP642LmU4v5XDKq7dZgwqmrcDYDmp5K9JJ7Grph6nRg5T3K84bVMwLGMtGi7N9MbY1Xtpxc3ym",
  "key6": "gP18CTksS9q69NwhUd7EcLf647Tce1V6tPLoHB4djaZX5LoR8H1mYNxNBS9pWswSDJVjVNsWSL4fcbD2uNZBkWo",
  "key7": "66ee7u5bRh5T7D1dQBo1pwA2uZzu1LJphyVjudcVRFwgPYJBSuthE3fvBNzVvTK6dvGj8YukMg4LeSTAEfUTkQTz",
  "key8": "5sRcRmQ2Vawi1uKBGBKpaoKd8bR7Us2SeLMy8DwYZZhvUphrwTBYRiKrmDNJXr2wJrxbJ8TUDpXYJi4qDY6xEskh",
  "key9": "GVRcbeUpsw8fdrJfjhqK1TRQjnEyZcX95Y5GB5NVRBiQFJmwS9dvDsdtdwvByp3dhsCv4iArFxyX1Ty4GMA24hY",
  "key10": "2Q1WQEkvmhXvQmAo6zPs2PwCLD6WrnwZ5ov58scSaiFi42Z1D2GWFsQmmw5dNn1v3fp2zJo3QALEi3TdNhcz2Eww",
  "key11": "2xWv33LhC4WAs5NzXhVtZmMEAshWg1viQDKQdYAxmA9iTLjMctcw2rR5gQZq5Dpwypdmk7oS5fWibeKiTW3kLHEK",
  "key12": "29sPgBWzDVQKYwqdWAfgCB1oAXyepoMC9kYPv7Pr43P16uCnSTJsnmh9GHvmH5zm8HNaHDcCQS3XR2W9jpSjqjD9",
  "key13": "yM1mDvgmPfDxXZKpgbm88hwaSEgTHjMz5rDFBjRkAc9xaDyd7Njp4mr6Vsey6aTYNDHfk26cBX2BuERY3De6Q6A",
  "key14": "3AdZQViGTbpawPMyUcsKCJ7jr2LvRbiFqCapkBsZbVDBNZJaR1vR2LNVQeG4BLFWXj1wT6YumUmM3AL5Yp95cML8",
  "key15": "3AUNBdguGJu11Yq55Bswn9HDva2ihikjaXvyRNjMrtnsvSzWB9qKgGbZp64CRtbzSNHy71rrxbCNv7REQdkaXUcT",
  "key16": "5RUFp2sexR5LbP2xCPAJL22EhGVSsJ5PLLMuMWkcuDQ6xK9N8MzEZ4JNhvgmHrGW5pywCZSYZtv3G9KLptPpazhT",
  "key17": "3ts9Po97HXwzi1AzeT1BzPE18yzZ6sUQ6HUa6TA77HEUXaHFgTZag9RMdUNHSVic5YihwgqqYPmnj7uVexSjNbYG",
  "key18": "2oxHQCSLASuA99mcDuzS29cSSHBQSbxVsMzrj9tECvBSmSD7hNvdCA3VPYqqKAnosR9CAvqjuiJaGAYtRZ366G2q",
  "key19": "5kgDB5rDB1fh2QPop2eAXLnQcLcYkPVCjGAVgSiaWp3Qk1tWNqok7LY4zxcExF98hC24CLKBh9GKLwdUxDPBSh7m",
  "key20": "5STEa2euSuZzBmVFyDHRM7dtHByk28VWgEtaKYGDHYGtrgMz5mNgjdXHGyRcutBHPhGY59uwPhuQtrkyDf6o5QgJ",
  "key21": "3Vb89jpJxV13zbbbmXELaFvyeemZuW3jMxZhHConjp6nPiHiQK2m9HZw4HuLimQtdJQLNnbvhzDtdiHMoVyhvPZ9",
  "key22": "5ub6VuwtA66EEKebpNhhsQt4mMFpPMM7MEAG3ETTK44yPBCqGzY3CtfQzXCG8RW8MNKh938wB2hWwujBGJVbtx23",
  "key23": "oHJVpv2y25mPGRqXhH3hUN6y8FM6e79peWcVtbnacNCRNvGBKoLXXxvWy9EmW8D3AoU16NDdGHt4Bqay5r9Whvc",
  "key24": "59prrhhjWYStMbHzqUDQRmcRA2JYUgkkbhw9yVGQBnNq5PK9VVQSSWEdBabC3NjhQEJ2Sh6r2fwnpGB8UzkaRaJC",
  "key25": "3R8DwHD3SXZxYwdeBFWHjWiTAjpdDJor96cN6paQggyvSoByEhqQ98pJdBoWduk91MbZ1bE5ehhJw2XcX9ByJHzJ",
  "key26": "47u5DUW8EyGT7PoZxRyNY8fsiAwBBDo5Kj6mjDmrsxt2QnHYVE8uNFwVqbnsqBj83TPTKGFehPuGvegbsp65xLBR",
  "key27": "DJ2vkR3LLTGZ2jFvqciUbw1gRojCkogWL8vrURZcyvy2fDZWUHJwkVr3pe2ZC14djsZNZ3LtKxgZUbNgbeMHWiq",
  "key28": "2s6nZtHm7Minr6CgMksBytDMdPdhG6CTxYf4rpiMvH96ZvQQc4VFtzNU6V3X8yhHkLhPetZHL6LiJxHmXHN6UNkm",
  "key29": "2sbrCp7QdtXkEnjEisVbN8QLqjn1AwGdcZ8cQQ2ovKMwyAr7HwpHev4ZJVpUZLMpnJNNWkdqLBbcCxtucpoN9kaA",
  "key30": "5swXrrLVitjJdGzBjufFPfvts6SyjvrtRLSV9LjhQAsT2jbkP5tLMKxosUm49kstEdwpSgK4V4c88LNoCTNJ6cyW",
  "key31": "2yqVPwARf3fZrrZgnSZqxArudhK1WuRrySrGD1WtHAFhVq5nJMYB9FRwFh8tdnvQ7YxsNEHmhoHrBi5boJoVjWWv",
  "key32": "4FxLyfVz2CFyAbjiZ74hxJjWW64T5ffZkHfPHH5fSwVFAdnyPzUJ2moXFqN7YjPbYq3nkLMSZXan6FLc1XKEuyhs",
  "key33": "5TtgT27bt7QfFdBYFEUozBjvPCc8fBLvzn8ZLgmLtcchSZt7ZvifsnsisxVpdAddABxEgWa3HXykdtpVVpZnSrvh",
  "key34": "2tGHqgKvhvHkrMapNBwhYgtuscegiDF2EqtUo51uUMt7kEiMLjaV1e54axPSZpuSyppCnhG71i9FpydJudMUNJCF",
  "key35": "25T8PQNV1Wk9dx1Li1yxzPM2zRAyH5Rszx4P3taL2BxC2AMF9H8ivQWUZGZt2mrtBGyf47n5iRPGf7gdXBFut4JH",
  "key36": "5H5W9wgYssLU62CeKoWyK1vVyBLaJJ5kygeY1z5H96mSbagzEkMCu6i6KvRnQEeXv8t3vQUTb8kqcva3fzNaErbe",
  "key37": "4f998vnaFwpzM42eZfJRQSDt4EBNPb6dCTMkPSGUFa6gt9SMvQh43QFs5xXzZMzBEdMeTxFsbuqR2BLZKSb3GTzV",
  "key38": "2htbYLPbUeKqoi4xaUK7ckuJbi3QtCBSAVDFkLkDXeYSLNvNPm8j8VvumfEWT8exmrQ37v4XVAXaecEoP7crdoqM",
  "key39": "2giGibDZSm3TmdEXhj5RFbSW3efjcozwKcFgfeWZuTde6ekUtozGBLGqDnmLrzAp3QYDLdz9BiNV4mjja3itbxeN",
  "key40": "3XxL4faNe9HGhiLLSQY6jJvGRygidUKSZw6ytR89PT15vkAh5iGewQje8YxnVPPqGMhSKzAA9LqjTRxFsGYMkxhc",
  "key41": "4dAGKp7emKdqzRMsQigoqi481HoZFt7T2pj8QvmyYwMAa8wr1xASBneni25qVimA27j1aFEWGfKt2WKFKYZ94wmP",
  "key42": "5jYqkU45QckNngj7xSUZnXfyHwYCyDbkJwtD5oUeYVxYdq7t2Voz7j3TymL3wUoJPYXVBr2MHe2A7NvFicVtBYMR",
  "key43": "37bmfoqJPu5a5wihGERS93PdTHqFHYTFApG6tQJAGoEJhCRy1xc5UQSySu4Kc9R4mxYSTe9oYbqYUHxzJFeDCxb8",
  "key44": "2hjxFeGvWtBnsUuBGNA2sahN79XocW9swzx6PBfmJYjQ5pTsSD3ruRKnP8FrSM445q5eQ7Mrn6cua9yq3U544APc",
  "key45": "2yYbD8w7myoibAxzjbH8Q4hJZk4jnfQ7KszRGVBh1pEroKxsLotkPiXPAeTkWfxtqjb7vxsW7UkCGURPnFnM9Kb",
  "key46": "g9NLMGTMwsx4QvoMiRUgWZKXGFLrauwDqjyXnZU9BcNAM9oBH9mzhBqHYwvU3dZhsTs4fzTeBPzhP65X8usmbuA"
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
