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
    "5hSjSmvN4iVcY2HWXQXCmK7ojRQR58DE78rtVkjaQohgX8QeJSYoEERZfAcA13cM6gSjhkvesZYRPpZrH6mpSZqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GQPdbfCSm7FigjeNisnwHb1nX6NopNWeJBL3CeoTbxT65Bkx1TVVPFBMeP2Hhk11WbRJJ6kvonengUQvhgVgSix",
  "key1": "5i7SxcYpbd35LctWJMohYXR2ttsvR3JXTvZPAjWSNkhnrAgnvAUPZYwQrPvvSCrchkugwXWe9D3TXrEybk8VDfSC",
  "key2": "4px6PiiZs2u77dL64UxLoRz2PWqU4dz8HTDG4EMFrZDFwVHFPCgdyU1Tx9fMHAtfsF36wzFrd7C32tbSgaYTHgW4",
  "key3": "2iaNGoiNkV1NvyHnYwb8u5r8PLVL8FXWboieoHiCxLHExep8T3kgY8g6dxp8LATXBw1yEWRKhVH56159tb1y4EBy",
  "key4": "4LQp93xe4v57DsNKbEza2b8735D6on5tJrUbh9YHQXCxDcVt57AZfdr1nkbZA1a5gxVbFPkR6f7dxPptEv5hd17i",
  "key5": "4RC6DpUbARPMTzzBofnLzaidcairPbVwUYmAh6CwGFxu1ro4Gqk758mXBrZMqXjqZVTmvgsgDGhRfVB5hNb5cXwn",
  "key6": "C89B6ZmpYVpnUgRAXk7qHJc3KMRnzHEzZrzMpqvaUADdmJ3eeZgSJqNVdWaD88165syT8jqAVKyPNm2STMRTvfp",
  "key7": "3FfuJgN66zsKVn5N1z2Lc7mgKjKm6fuUBgRTp5aSUAKTYySmXd4ACnJx8MkNzKV7iUuRDKwFke6euRw7tkExNDMX",
  "key8": "5kcBh4B7WsRg9ZpfdEyouYutMFaMxksANgGRdYdYDYkkaFVYEm6rDYJFaBW34vXQykAz9DHXLdqR4C4BCojXZ8tJ",
  "key9": "5Yujgz53Nyqzb3VqYbrTasbMDN1R41cuSJqjVRCWXBLr15bTUXVSu7kusoyymLvfwYBfgEA7i4SMAUMnPPMwewD6",
  "key10": "3KY6t2CgaKbmVVW1e45nMU8cW6cpo187sYemJqTmHX9W8AxV32uWiPXeqfCrq8xe2gwR5mQ8TFSNYVrrEF31oYSo",
  "key11": "2pw1aVvRKmW11kzvSPwBUsgsgpTH62Pyom3Y9RYadp5wjZNwe6YcrJDJRx48CTo9Ub6GfDmmWbKs6SNXSWZbcqYN",
  "key12": "3a9TERQKtoD7fjneuUtRtsuWptoo3uXX2tCdx2NjrBwCJBrGQJuTFUp2E9Vs4jBsBQPXTr7NpxYHBQm6FMKVcM3y",
  "key13": "5j1TQ6DTH9JYG6wg8xAoKnzZidAsNU985gucXyGQ6tecMuhVVSMyvUJdMnbsrkKa31qTFSDt7JT7Red8DBhq92Hg",
  "key14": "5S1UVbpAGH17bHMQafxA5wZBPfz5BZMp1dknqEjorspTqHRHT5cWhNYAi7Kd2xWiz62yYcQHeg8TN11eCU7dvR8R",
  "key15": "jJ7gWg8c8HRLeUKw7aJWvWszmTjJdCeE6UkFNrqPd19AZ19NifewqLbHG7mgZHKQxEn6Pno4rHdzTdwQ6zCYeiB",
  "key16": "MdehKRnMPTZHnnnL9KQx5Yh4hayJXYamyfseqKWKjxnQ9ckmjyUNMvGf8jH3qFcYPtrdzvtwZhzuSkoZehE7oGx",
  "key17": "46zRNrVzzp1GCAvYFjE6kS5jmupFqi9xAj6VLkvoMG6EsVbMeJBfqVWYrUZfF8B3xyxKUMw6wD8rUs67Z8wCnrZd",
  "key18": "QCcG6srfGrLw2T7nJjvao9Vq4JKEFmH1Qw4BPn7BYNQTfLbQNLk2WH1FM1bGqyGe7xB95qsTSC72Q4GEdGoq1EV",
  "key19": "4WMsyWRpmcqWXVbCGuEWAG3SRnFPNRTFvtrYZCuv2B5gEBo5cC5j6Qy39fCbPqNxtVwDsN1vYRu5Gbhq2uDJTMMc",
  "key20": "4pWYNjVWGxHFzDqfDaweLAJ3Bthb4zi8u17dTRcLF1UMq9L7eshPSWwHmtE1fWE4vGuVdpKqB17MLANq9EZ5jMMJ",
  "key21": "3EdJ7hAsALiJqcX5pPDqsD5mnsiHQvtMeR8cf2TBVQhDW16a7KPTjqYQNop43oAkfmTjGtx6BJdWUWo4QVzw98us",
  "key22": "53QHWkWu1ssta4ddXrcETe2n1VKdUPZAQEnUKDmaUzTypQCuzcwrg4AnpEZTaLsRx8ZYTHg5XjxhxsMXPcZ4jPpd",
  "key23": "GmRrsS3XRwiwVjWedyBWESsetwUPaqRjWjuhXwDFJFPy8JjDVDPzVZ8q8wHgZGkon3rgBNifP1rRXhVY7Jw9ygQ",
  "key24": "638RUK7TgmC5GMZEHj94u3qNW8mGtXTbqpTYTp6ArZMzGCoHxNegjpKEgWnjJxffGyoLHjn8dvdj7A4J8yicPKks",
  "key25": "5SJwBkjpaujPbzvSLEVejSBPrYgKZKmVcBeGCPthg7VpEieXWBnUb5JHhNGofMGsTViWqAWMTydyC4jTwnaKRCgQ",
  "key26": "2LQfVr36TVxu9pboGCVaLUW2Jb7p3N6mh7t7JRidgXv12ALDLFU73ffXtXYFw9EttEnRhw9GyZhBY1RjoizZS8yU",
  "key27": "61NSszmDJSaMWZLQq1TkBgrjtG963bBMpJaeg7CvzJrR2X6J6HfiiKHsfcysmw61y9G3c53iJWjtgHPYQQ2vMk64",
  "key28": "3bqJFDjMGEFM3FuSchSAn8VmTXETCtUxWs4G51ZhaA4kTSTH9ch4i71NZ21XD1SE8pbPsGwt71BDpramfFGsbDoD",
  "key29": "35Rj9DDcqrtZqm8qqjCADnnFqeJoTbc1LgC5JiYMFhHP6NMpxUgZZyhSC1ZdN6UJaxAhCCXEfHaTGQq2GCp1ayDE",
  "key30": "2Kh15T8K5ZWm7h3kR4JfDnnQMA22gDhx7T3H8hu5fowVdAoz4HdeWv4Sg1cvg9V6JUfbFWR73V7QvQLRudL94R4j",
  "key31": "5Jrpz25VzdcNBxnieVGw1EsVscpfm1SbZ6SNeynHWkKPXDdipyKt4ewGLWXQYzJe6vQ5WdNQxxyDEi5EsH5jszd9",
  "key32": "3E1AoZjEo7FQ5h4qbwJR3zV7Vee3WXHuCiSvsdX7FAozzwkqKGBzSHVq8iWZxuMvuFwuxF6QwTFYAV3r1sDYtgZv",
  "key33": "fF4aKBQ4XEsaBqpp5Em4urURaKoGH3LKBKNw4YXGTKpQ8V7ebjKUG4fcUnFjdTaCmAa5yFEy9WZE5CbpDHJQyP6",
  "key34": "5qhnVExi17D8deRXpPMLPQ369t2n4uuCEcBqDtDSSpyS7L9amANp3jT9GB9E5Uwm5nf4YUwDgi6HwG4pJFZQV7YT",
  "key35": "4m8Pm9mVi7jhahGpMaTWo9akLK9J2aizyHLEzUFzW9GiHirYFFPQYLjeizZCDpwEfqBPBFvkbcTq1JUBjjAGzr1w",
  "key36": "2VnHi5csbnCJWJZGkmHHpQHRALt1f1V37dJDmT2r89Yzxvi1EgN1czuXejz5Dcgrj98t8xCQWn3GAKocyyoHMZEK",
  "key37": "3Q6ToFNMPhdFhaXPLpDijsRBjW55CkjaNh6Hu26p3s9EiTHMRy8f22S6JQpCNTENYjc9pZsGsSfE3iz3b47ppK7H",
  "key38": "2EFADBzrcdW4NX4MxqVXBMMXY7NdwnK2ZeJzgAGeq9WpAs5zPytZJR2Hx8NBebmW1s2ivSRCzusJBoBxks8puL5M"
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
