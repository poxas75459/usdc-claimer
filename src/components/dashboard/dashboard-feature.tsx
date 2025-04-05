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
    "2Sqo8b4UmxPrwoffy2XmezRvn7fG94f6P57r2GdSqQsEWLSJVTbcMGQ83w9XvYSMwEqFKAhGbvxrhZ3UemrcM1Sk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CS5k37m3HpUJTCRp5rsmS9bdfLKwPc5FuARUuicSEwPgJCePgzNobEftLa2qXQLHn9Q1ThCgvaXa6i7vLzrsV9A",
  "key1": "5wf95YpycGWVXBM6SSSMTQwyxSTYKXhQ2YxqBi7rvpwU8VJvpuL24DP9vok7F7URYWYBMC83i4oJtCLeBN7KPJ6x",
  "key2": "xRzcAuvNTvjvxdngQXbA7LjTAVNXv4RekmAMVx3yvG4Qhkjx6iUakeuoCaQ9RuHRvsyEfH5oJDqqockJMxQV9E5",
  "key3": "2iLH4PefEiBaBpQs1qrKHzXGcdXrJmgYtXU6xhwdazucq6CpkQAyWcWhxkk3kZnfVrGaTwhuXmPgXfmnquTKJg4R",
  "key4": "4sjci55FCP3kqnfFmrsohmNAHG6pD8KjA5h4pK39jcn9uENyBaXRiS6d4WhFxmfJbHXyK4mfSMLvnaLQo6ucrLJ2",
  "key5": "26hmcHMZKrouLSo699rFBA95ooWqm2UAhL2MshdEyLYre3BtTYyaJHSdGSmVo5g4QfhuPqpi2bKUYrdnJyz2GAWU",
  "key6": "4vqDBF5JvRgsbSdQeanZ7eNWB7hEwKTABRHhqRKP7F8CCCNrbFDmPZe6Vi8yu1SKW9vgqbikBayFt5ykXDhd8QBE",
  "key7": "2BpeVNQE1HsTz6R7KXVJoxXhStWx1EEMYhd9aUCcUVTxczrW7ybLq3V6QP8J8XXvNDxm7wVgbqSUckvHwL2YpA7u",
  "key8": "2a8Ywj4Kf78UNumaxksJ6f4oLhiJ7LBJv9aAnPe5Wk1FNDhyXb69Z9xcXWhTr6C8CzUm3ZmG9no5jR6mYXNPQzLP",
  "key9": "4sCbTmQScbKVRA7N5RdXPPEuiR2v196CTXwugRQPsEiwVvDtjkDjri66UmFNHdf7RVohtRhXyhfuqxmTFeiFYjzT",
  "key10": "B4bh4ZeG41B1YCPW4Sqhr7Yrq9ubLepCwRHBCQ981hPnFMiDiDRvCW5tDpJwnkRrKNCjRYe47yJJyMJn3uXDZyh",
  "key11": "5fj5dNWk7Qt4nZhyGJNzT3iEzLKfFe4omuTUbC7emhWwDMiyRP8Jv92z6aeqW4Ms2Jyac18HhpttHr5NBdxAyRDN",
  "key12": "3M45P21ppuZoaEQkdGjxKtiGVLCYpQGDuAcpodumPEXDJGvcivPo3YtuyTGbEzY9oxaT8sHZpCTkYFcKNZxRLNXz",
  "key13": "GThzQNQyoCPWtdgCtkQrFFGLxJ274rVybXfqQkmbHLywmKWgaqxDsfDjt4igR3ZBxYdc8tSH6kdqBvTEPgTzGCR",
  "key14": "2sUACGRWPcBqQzLfjXdjR4AAD1ktLbK4qhiVJVYuGGiDguKxwJEnMF1te3dA9EZcpM2AcmLHvJfHDzPSX62pL34K",
  "key15": "pdE5mfMPaCg7HdkakbnG8nBXYYaSgZqXg6fwzC6fReqPfJ2vjH1n8ctcVvKxp7Jbx5Xd79f3jX2qP9pa5Ee5LeL",
  "key16": "2iRhdzEPHXxAtMmJ9e9xfReouSuVvccUbXBM1QCjyChGso9uTJUneBxfKt8hzVHzm8nJEvVQG1gdCAQxz4S2Bwpz",
  "key17": "25hjtYC7ArLugvAa84bJtvSAFo3bMA5t5c28JkfrYaodASg2toP12iBXS7yUY4VjDiAeu3QcN5pbNQtYhG94PScy",
  "key18": "4vXomy35N9mBEhyCZMZr97FS9F9sq2HcHUHBEuPhKNh8XQrQZVbsYnTGn2yg5p8Li5tS1bu9AokBQhxrXFtcwK26",
  "key19": "3uHYJozSvdC1spAWFFTkEYqm2rGJdDtMdfiVPp1hEkTRwNKCNjRi7mPKsJWv9P6Wf7YBxZYUsvQ8yh9oxCogSzBv",
  "key20": "2iinPprwsVALa8Z4vJPTSYdDjFSnsx7Qah5XF6UfwgD7A1HMcBbzrH59VwjuaCg6VptmAWMJ7hdz6mxafEtZ4z6a",
  "key21": "2wU1KxVhEfikzFCvCTLn7GxEXNTMjWZP288N8xJJ2Laaokcenynn4EKJmP6p2uUH6RSgdij22PMitxy9omy7rSMW",
  "key22": "4pChxkKQKUwT72oGeYKh5XZXVTaZmYxWCRYLRFbrBzqskN7cMtMyNHGFfHrgtqLQ7CASgVBPcQziunRG4iontE79",
  "key23": "wnL7giRCbHrrM8oCkLCzgPCBnKHs1VKCzVhSXHv9rbwunAH8WbNrQSohxpoME1iG2v3pzThpczXrQJngS87ffEd",
  "key24": "2NGTThQfUeDw3HadiV1udBWGpyK6cPXPAe9Yjf1NkTB33k4ZjP3GvumW1jGdqziQNP3H7VDB1bW16vrBaPJfBmZ",
  "key25": "5J61sCRaUsgiB3Ud6FdEHdU75vAwLTdfABLDj54fV6YukGpuDEMddGHuK9yFXK9pen7hxD79sX1Ggb3ijrpE8BuH",
  "key26": "4MCazZFz7qb9DE1nqY7YQQSU5bVbVkZTh28UDhK4oarPHHYKLHUdZoQDyFzrsLmNTfRNQXFFBuoG98DY8TDyEU69",
  "key27": "kT3WT6o9igexwUWHynuoBM1Lo1CCyPaZP3qupFLmVF6fJxiRN4r48bpbUt6gXoE755jWauZLp3xVCMFc9vmDHmY",
  "key28": "3oEEU1WSDrH83VXo6qYfYeEJbmhsEy48suD1JztmJfpgfYcJ8kL8q9VoQh7N7axLLLokbYvKNzGnspsedV2zhxFx",
  "key29": "26JjVJhWrRHXh9NpxMQe7Qu7EnhmnvAu8vRAnJtAQTmHpCRAE3PUUEMPqZPxKy2H4BY7DR5WxkyESJzNpnNnNMbx"
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
