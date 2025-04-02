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
    "5bpbViwDRuURzGRyfdQdw8A8aSvzJBCqbMbhvxuhT1GeAUj8ApPZWW9QhTRC1Xjg2j5pHsdQLvnuofCuwEGs98e2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tgSVoY5pVnTasKckaBYwrcGYGDtd2DAoDyfhpnUnUKekTspU7ATdetSe1PyEGyf2exvX4fzVw2kUGtX9J7WvmRE",
  "key1": "3KteAcojduFtx2VFLWeFvR8RozJTmJdomaYPqVkxW6a88DVXMHBZk5Dogmof6UV8PSow8HE43hEZU34dCTCApXNT",
  "key2": "3DGEFoiSLQcbRdJVjN8eTdbWrTs9iotkGFYrSBqHySRPyzwt6MPPmQTAtb9JX6NGdPpBCTq23kEgP846yYE46rfT",
  "key3": "tZCnh4ynjaGuQNZiBbCUcjQ4aZHvXcRcdJ31w8NqPNMDj2pdYPS54fpiUWZmSj4rXQ4cFGxqwSscU2QRo1pJPdM",
  "key4": "4fNFSEdjXrCNuGGdwd9DYgfSv8LTwdBcCwr2EW3M2dL81CefZXVxSUrgngBCwqjCE4LLN7vGp7Tb7FXec3fUxQij",
  "key5": "2DiL5h2eXE6YnW4tTEQu8V3ToaYwFfCQGSqCkt6TJgRbcpbw134EiGHQY2XwnZfyoJMq7TMWLXTf3UzcecxTxdqd",
  "key6": "2puQZwai7L6sg1ConnFTuDSsrDK6XiDjCgh72ZxGe23cA3kwrkadDNTKxauzhN59BvidXoxMqniKxadkp66n7B4L",
  "key7": "4jsab8fGqjg76Y3wBTMjcv9ZS3HephfSx3o6Lx6ifkGyPfPAjbBtnVLkmiS1xtoYXnvRzk8dC6yDprYL2mCX4TvB",
  "key8": "4KXFFQN8zHCZZL3ZeTosDy5p6rWXoKGuYHhJoUDot93TLSg6ogadx7vHnmQai5YeUpoCVnHmByGXFJf31khpWDx9",
  "key9": "t4mvUL27x2TFMnWCvk4Y62xXRV7vYUTLRAH9HXBb1J9ZYUr9Q7Sv7i3RPkcUhk15nkxcvQfwGMnxmnnqqM4npbb",
  "key10": "5pBKEtcRLuL9K8ywqvWEDcbfqkgQXtjWnmhwURGnuKWNFmK8Ae5u4BRtaZUnGkedvrKynqceuAVxpaqdZgKGy3bJ",
  "key11": "4FHZGsRff7o34YPQ117YusX1NQKc8VtjUbcsbxtiqnbpUYd6BGGtTGZr4xfRHEA7nMMgpanTf2bHHvHbPRQDJq8K",
  "key12": "JfByymhekfmCr4tTASw6VdrzahPWPJqx4zfpoLaXUSorNssgEAuAKQFTJVFd69J4YmTuy2iPR9ujkKrkkQK1qNj",
  "key13": "2xmQ3aiGht89bL17Zd3ympSJ7MAtVWePyRujgGqc1WebvwTQudLZGu4CUxxpwWGSy4bybbnZoHkNPbtSzqCAmNws",
  "key14": "rEQojmuXL6pUknMYEJYLzfWQXvjuQVpig66HDAWEWD4ZLtRuHufzJYGbF6H1YBst3UzdqD8wKghvqpAZS7NSLEm",
  "key15": "32xLwz77SfR8ebohRinFsuJHcCHteEmenQGsRAsYCDi5xtwgYrY5HffCAxjT1PEgDZuKoTpRB8sBTpG8BabCTBJP",
  "key16": "4ce8jxQnvU4eUQ1jjbQ8oYSN1HimVWzzNFaKKL8RRae92VaMufxVoy4b2DPRS38pmKedxPbvxPF39jvDdLua9tVg",
  "key17": "7NRjWpY8skgrfDuQu6FkmZeSYhMvFe46kQbNWDvFeqvvjrKyDMjZpzRFqXbizeCn7QReVJFNc51LdkqYHrvAjt3",
  "key18": "5TBq6ZkcJ5K13tcHQwvt2Qaku5xseMBVsHFzY5encX3jmYcRwtar83JPQWfhJWpD5RnebAfV37af8nyM5AnCcfi4",
  "key19": "52KiaswJVxs3NBXeJ4E8gSPC1A25x1D5nBqwrU67SwXf3cP3UxQP7XAEtbPzDo6x4hRs89G7AZbNqb7786PAQ85X",
  "key20": "2Vwhqt6etz2DRJudGghVpN5Hk1mBz73YXkhuPjWmy29V5uwkvoaBjr2wtxBSB2ZkLPKJ2afY1sujci2EmP7m32Gd",
  "key21": "3WpBc3nM5YYL1k6QUMNx7nhk814fbrHfTkAVHpaV9vkQkmg3hHU2X3gECg9TqCwYBaajjX9cj6LWf589jE84HSXf",
  "key22": "3Fpn3JihENrjf2HbWKCdJPMoPmEEsaQyTZzAidNUFgjdEaxZj1TfyACDL3HX9B5FNoZJqUocK9iqBdTJpSeMkpvE",
  "key23": "59qyKGz8u23f9ge7hsgBdA1wJbZysZnVNJE51DafNceZKtpun6wtJHmkFVK8pUBe1QancbvwF8RpVXvjXqgo1e6C",
  "key24": "3QtCF2mwZ4BZ5Hfgbrty9SbcqoqnPN9oAANLvzyHDfbWJ6iRAfUKZDokDJgJsRoV3mKFnSdd5cJQywHuRXsNiuS",
  "key25": "4dXiAXedB83k5M92wkkW9V9TdMbdBSNmN1Sa4UeQ9FnggoX6P3UJR5KZw6DFduiDoHvYszNLyv1n59ygwRrcqruu"
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
