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
    "3pRpESFUh1CtNvqQkz81vbcVz5xRYCQNBekGudoc2HdXYE9NUtB4JqefpeLbAeqa8mBe2z4TR146XfiJoMaya5HA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jTDVc4csxSksfzK5g3xMgPhywVfnsvu8pEz7bqHcJ2WNrDPRJRemGXYnLPuY6HnVQ6UToWQPCmDyFCXdEo4gBiK",
  "key1": "4TPqCR9YEhBkpSr1PrRBACdMfosUGa99vgpbZyh2CJtP9hyy9wuRdKBqTJ7HwtFtBeEf7QrTLRo2wEPyUjArKu69",
  "key2": "UHCRxx8QfFPVGwBNK6PGF34NmW8LMZiYvgjUQVfRFoZBWZsByuiM7U8vfRBpmhoRRQq2oPv1qcApwMTdaAJFb4V",
  "key3": "5t7HamhEn5w6LJuE8RoMpxwLmJ7VHfgftmo4ge3C6n1x8Zzk3FCqLuZ38fDyfA8S3CRw7Snc55PS4JwVXQEV9C2X",
  "key4": "2eA1nhwqt46Di4GPcBChEDXsqCmMLJykyV2rCWftrY2ve9KqydW53Zpc7oTisr1rv3BV8krkRmdkaph752U78LiR",
  "key5": "24bWi1LtpM9J17LXb596ASnpNastWS5EkuWQ4mySxgfkipgHCLwTdu9ZzRmzK8jwK46jabRnVqPjAftj1pzumPS4",
  "key6": "5ydH4wXE8fqJpTWoRJiheZmjNXBdcYUQv42EuyMMhbiqgmgR2npG4Rr385LxyuUc8RrX1yakJpDpPjpcrPQzmW9A",
  "key7": "4t9gnnMZbMsT5RCKwVEhC6EaQ7LzCa68P8UvdSTmozs4BFqk5n31nxAA9d5qYRLin5uNGCm4vnunUQqhczwyRton",
  "key8": "VHueYzb8o18tfMFScEK3oy68Z6wiF2FFEvDP6XbFFTFX4Z3GfVMzFZf9qPQwuSrjkkPCzitZPqbTdAEp1d9jmWj",
  "key9": "2837hJeL5kvuA9dh3o4vFv9LC5hw9sQrJUbw9prnzhb1fydAhwVFcU95wbgKfib4wstFjzwpcmnEW14GZcPgUJQH",
  "key10": "5UqwxZ5VY5hgPSkZTAyJFDr7ZNznoTRZS5EFFGjGP2PyCvCNtV7iVeYJvgEYYSCeM4NL5mg5wd4UGmsp9YcbXawy",
  "key11": "4oaTvGWTmweHXSxmtNRcMcqsyp8xRXeNHXCZPueGvsXM6Qa2xeqVdprpDWzPoCdPcZrxGWLQBrUrQiAFMDixR1sf",
  "key12": "4oGJ6J6LcSDwNPrqN4g4533BFMpRwFYGCqxqMabLrvt2jjSEfZy6ut5m9HYxJgggnufm9auwmLhxgBC2iE1jVSpZ",
  "key13": "ianKG9ZB4gax42tHF2BXUXM76iBahTS9wecieve2bWmEM76oBXP3sW9xyZcXKA6eN8k4MJ6xXNRMeTkVy5i2xt4",
  "key14": "yoiuj5EjL4HrEYZ2LXxJZxgXErM38MsTUyM4m4WzDZmEmno3m9AaXueWWMyKvhFnyYXAkM1otpXE4BtfRcmq7fD",
  "key15": "4Y4xXbqErGLiJWTohqQSzjrp3TSmYq3H5rhhdLn3dVmjiEB9PaLyYgXotRB5ihMtFFZyoTps8g2WQy9JCrqGuAUU",
  "key16": "3jvTWNKvSrFspmyHvKPcTeyfStTs26LPUU1DRvxBEhr2iHpZayuVTiaZCEd1jB88eE7eRVwD9W6hHUwTMdjrjYVd",
  "key17": "2JL1WJy7zTnSxmBKRj6vCA36pbwnasyAptMZVHeJ7xTbXCJYPAD4c4MyFb4JwEs9vrCY1Yn9sNVqNQL4KskchNn9",
  "key18": "3T3gZmXH9WmLZt3azTwExnEwPfa1GhSw9KdQhcQTTLzVChXdDfC9euYMn7APUCPYEqANXmPEzH1CpQrFh17dWCN4",
  "key19": "Y4npBwKx3fGD1j67Wsk1CdTwnSs5WztXwxuFqoLxKTCoW6R75Lr3oii9VptuM16cJv3rxB3iZmxJz7uDCkquXzW",
  "key20": "4SkvEPfghFXHxB6Jo5vHQVV5qawcC8YUzYeJwiaH8GKPeK4xTNjQvtfDRTkwB2G7UeRaXCCRXm3G2U26iMnw8wmt",
  "key21": "kkWz47efi2Hfge399od8vecqHUAuLD6dw2CGfTrXQvGmNzpJuZNx5Y6JopQAaen4zSY1DkExjVRnBQGenNzJt38",
  "key22": "2f2Mk7bPATNiWjAMBMZNHDStExXTioxFfq5qh8eLvRNFX3DVsZgyzik1zBhwdujb4NhcFZzrSocciR1Y4M4or1cz",
  "key23": "2G73xoiEdcPu6CFHvqCouwtUMW6DMMeqtinMJsrAdWF4B8KN744FWmJKGdwNc88yrZncVQABmGdXfB37eL4vAbJq",
  "key24": "3J2ReaCpNhjZi7DygxXJkeQ6NtPLUCX8GghVzHETMi68UQ2n5xcsBiFHMN5UAVhPVHKMm86uTrrffyW8qdnVEPmr",
  "key25": "2Pcy4U97DkxBXP1fQTBRS3UqLPU4k3b1aaeqvQnX5m7zwAAPF1PYzjUP4R3tLPcbrA2egSQ5cn3DKZKL3yLP417Q",
  "key26": "2UDaSmB3JBQUJVZSCbM2SSC52fymEYbuk14qU1JNXz2cwW9u1oDmdjwBgEp1m1XzLcsv1yyEfKXZvvi1D68UKEgE",
  "key27": "2WNTcoAWxTvfa6EVopw3qFCVjJoyB8FuzVqvccFb2eE7Pukr6yxG6ZXEoLRLpH4cNNjVK2xbwRRpaKxJyj7iMNPw",
  "key28": "3ucgKtmRmq17zr2bim1Qzr1u1gLHMBmiAAAUMQen7hhc1dKsv8ZYd6orVhPcb6nt6jjFA2NRdAak2GXadhjS7JKs",
  "key29": "2VQF94x8XsSwstUXLL6ArvP1qBtG9xQGaKPPLqhqRmTevxbpZP3uqz5rZqU4UMocXhj7F14AeAQPoG81F75Fnxzy",
  "key30": "5h2qwWZbYnj2Yt4rpMT4n4NPVeoXbttJA4N6qbAWeMCf1rxkncaPQLeX3EFPt537LquLzS2R4wFd6f1iDFfuZsKe"
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
