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
    "2Xfxcofiok5pWjjdgrPWAXX7zZAWf1tP1iGHrzFofwB6fMWeYC2ZQjZbwsgXnCjnpeiNYJPkSjqbYfqxzb4ugbow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bgDAJvQfQhSdnuSmTYEDveBPuR4hpc3cNMaqn4g9awrb8MNZsjdjLyftaAwNjNDeqoTko5zfZz4iYzCPqQhcGe4",
  "key1": "2dQx8vivGbqxBAU35HeLhXYqfAmfrHiAAzwezUoXZjzjNQMtc7GzVCeE9XitSjyt14hEuFSraegqrY747Sfp3kBc",
  "key2": "4q8kZP5gfau5LDbK7WJ6GvR5seLS4TU2Rvcuuo3FjkxQ9pdUQa2ca2eN29yrtJ7FUQ7X52y6sXAhNKbXDVwsKNTq",
  "key3": "3ik7MpjpuDkuhc3bSKv1joAs5hhh9d6jhp4cWuPczaT3QBkQ1taMqE1cm8Bv2aLBfMMwmdHu8SHybvJqrehfyrD",
  "key4": "5P4pnBxby94Cv7pTAfvswesWq2T1yUqDC58sE2BuxsaRFBbcWADgebM8TGy5pwm6CjL2X7wYm1EQU5MS6vigKECt",
  "key5": "49X8pWhaMPcKAwp4QJAsfqWABZZSDHtvqvLDXirf6mJhfHSnzGRr1BshRMd1mnJCCs3XYbpt76DL7Dfr3khk93Bh",
  "key6": "54e9j1xMGPvpUxwwKheSCPMHSDCXQGtUpHj2s3LXH7VPn1jfAe6SAQpdM6HzqtC7zhJiUF4EQGm1evBGA1a4yTkK",
  "key7": "5dGWaN1TP19UBCveT3DWUazD5kaGxgxJHEAfQX1vWVre2dvfEsASRBhwD43QhjGuw7xrLRnwLmWvvpnRCnTNBNxW",
  "key8": "4K3zNxjiGjgLU5YeEF9VvsoUS7BiZdRUrFDope8uYXdc5FGA2ia6gCQ2No6Xgzs8KuHm6Exk133oT42Xsz4Wz2dk",
  "key9": "4NZQM5VZ9TM46MyqLjAfPyby42zM8P2dzEkwLFHZY1ubDQDgn7E3bo94xwQ4YLzJTH1EQRAcVHcW1Sd3C1mYEMCw",
  "key10": "5FrXCg8Ne7tsPDcVv29WY7TNMnLKXFZ4vyjooJKjgoa9ysw8Erac8RC9sKYGZYJBfwQ3HCLKYxsSCGrLNRY9aphe",
  "key11": "2JmYk5RWp6dhTmk7PXCJW74d3AEYtcGLdgmykbiTRCcAB1Lp2ujx1zVEAYPxn1P2mdYScJn5zbpdELLihWUroZcj",
  "key12": "5UFr46pPHFb5kDTm3igWsdLYhyeyJBHK8UpBsRKcyqPLr82pyogauvX5R1V69fRG7SKv76DPknC5vXXWQLbh37yK",
  "key13": "62JmdQqDjFqDgp5RpWtAeGDsH1Ni7VM3htesZtMfDFv2m5UGe4rSRbMnzc6agFDFxM4CC9VSkJrJJEASiwF51Fyb",
  "key14": "44a74P1kz3P6HrgpMdS3aMNwjtrKtT3xPh3TbD1F9CVPpFJmRCdsJSJNJLaD17sfHbkiyLMD9L4dLXYfPBCyow6Q",
  "key15": "4JWgzv8FShj89cPZYq7nfPEUWfwL9UN2AqGdMvB7JBkmgCwU6eSa6e8vSHdKhymckSkAuAruzWmv728KQ6bpnAQs",
  "key16": "2r5Yn2d5Ryo4BStTJuTrRtyQcKGyg862rCGmpgSVwRDTYcgHPjom3gt6nLZ5MyqZZci7jZM1N3zvocT2qs5NuyEn",
  "key17": "3pJcz7NVovGV2ksH8btcUKwvV6fHjojD2W65DCq8T5m6oC5yE88KzopKz1aERzboBkzi8c5JnH4dQWRtbkq2E54b",
  "key18": "5ysVrLiJusu3Y2H8UEMrRqJqZQ6QNebzEmy2TKJLT8q9E2hCpCptpCpibM7hzyNv3Ai9wMmqsxjiHhB3nMrZ7v8b",
  "key19": "27iZWqjLh23s8oCywmpUnQ5AccaJgNEFGjTM3QCovPJWiVyDxgpeTxGX9MyJz52EfwZMBLm15BhzEB18CoBLfgbr",
  "key20": "4CvwLEWGSM4kDwVQCKyUohHFdLHQYpPtfHqwC7zoFVE3vjBcG414oPjUgNzTDAQNpJwZZk9aNrQ5JgegLschQMAQ",
  "key21": "5aDfDUXmQDEGzp5zKrWiUdYBdMTu9Enwo79BxdezKU2beqh1o8h5i9JrQ2d6KHUsskSpDtjBpxJSeaeS46iem4nU",
  "key22": "D9F9PhKfYCGJ9rqbMcAd65691mZhgffusTZ3kRkof4den194i3cXuUsLyAKcuPQVCL8Q1S8EB4GH3YSVVQdfU71",
  "key23": "3u2gzvrmyEetA9deJLdybzKSxELp2YjwC3rCTyGybjt558QGjQsTGa3GcVxiaWejPh4hA225PB1s4ezuiEH7LDQv",
  "key24": "3rV89bUFHyheyBkB1ZsHyUZaYQDQ2tWi6xeyGmJdiSinPPfEWhrhH7SBHAK1mXiMBBR5JTc7EwEmEWX5rUAHHPes"
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
