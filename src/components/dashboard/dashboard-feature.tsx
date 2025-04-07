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
    "23Qgow2apgGzrBZr5f348UHVyqQdyn8BkzihurxSXA1A2DQC7rXaq181NN3QCF23wuGcMLy1cyGiBCk4P3eP4Cxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oAef4b3FwCZNbjRZZbks8aDphQVR3yTpTHXc6FzHJWd81ubtMTZ47YDskcH6hLk94Dwdq4K5hvnpnLXHU56Ztdm",
  "key1": "31q2sTCnNcSjmKV8FTQo8jEqqigJYPae1Sao919hfGTJoe61oirTMwv5qUPpVKYwLUU7EnJXcvJpauHtJMroSoZ3",
  "key2": "57kU1kPRAPQKVdQ7Qyt2rVLQXMWpZ1ykkbopfQ7hrFsXJB6A1UQrPNo3nEWHCLBa4L5fPiUucHjSB1fMbFPyoCTa",
  "key3": "NvmtSNRM8i8SPTmDU5e3Pz4Q2oxoViNrrJqVnmWEFD1z5fKtqirinMbxsi2EscqRhfEMVqhYYog55VZwYv6Meky",
  "key4": "55MRKHcELfag2kVKao2NxSSrti8fQDxZ6ZsR5Zf4rmAvCXV4iGZACipC9DV2AcrUnSbLj4PWwaGjrLvddfzyVHH1",
  "key5": "7JSZR1yFGMw95cHzd3qmH43PtHfKYHXpxLuyhXo5u5bVWkEG6C8VT1p8i75GpZwLoD6zAsWkjESJxkLjTLkxNLW",
  "key6": "2muwSK8TXMkn4xWSa7TqennpoVY6QwgDvJctFiMgxPUCjasTRwyBdEsDiznKSG6ApkLfHYDow5QL7ahUgZAc8yRv",
  "key7": "PCXhbLVG1AWeTk3XvCNDKjFQzxQRyBq3Hvsb7aPVLQsLa1obr71pjb9D5n5JX4VNhMbp9SeV6HJqhfbCDVZUN6o",
  "key8": "4actNJZ3TK1c1CmQ7zn5y9GGBjwXvaKZCy8t1AWkyJB8bnWUkk3o1nMfjFsnhCyagm7g3PSiKKq994757y7juVT7",
  "key9": "3ef8zgj6GDaYoLRny8QG2M4r2v49rYd6oZrqcVn9GNLGZJHiLPFL6tf8wjsCya6R635H8LPEkq9Aofv9uCZK3QrD",
  "key10": "53EvC5bqqqeDezpWVQwZ2d3GxEfGpDxVHmjJyqS6EavDxKSTi8XCvcn89x2LLqAXuMxQPxojGkRey3wy9tty3E46",
  "key11": "2feniTfit52Pw3ySb1xRfDAtEvQdyVWpkL4kjfZp4Y3jaDsoovnkDwjoJuY2smnJwv9o49QQLWq7FXoTfSLMyPpw",
  "key12": "5NenV5n5RwJkPpHnV9yYT6uRNB17szEHEL6i6uPdPiBP4QjThudikFPYHeNjZnwWjQbRmLJvpDA7MSb5pXPdy4go",
  "key13": "4CAa5KFpaq6gjkLNjeLHpuX2tnk8gUQoTkWkdtyZUXswQfTDdJDLTawERJzpMci1QJaVMGdJCoNF6ip4Yb8F7QCa",
  "key14": "3aEENBSPeJHE7r62ZxoQm5aBtbZ6hghA22Yjn5uKAMaQjuBae4UyB5Ya55h7qiJ592ydwZ2h7NWuADhthP68iiZq",
  "key15": "4cSjxVCN5ZckYDKHstYwLP9dNoefXpEY65dcsA9THkFjQVGmhy8y2bP6FisUQVqERstUvhGRLGU3zkXk7sxV43sS",
  "key16": "2adZgNTsBP6xXV7g8oaF4YLvnoYKbopLmmhYfhKjyXbuPKm25JGBEzHmgXBXtoJF4FwLifbwetbxZYxeeTXDjxoD",
  "key17": "3WGyvM4NUCXUxZF4JkswhqUKA4kUyrnEmGqhJVSnXUKn1xRQppTsUhGPxTjbPtZC7pR3xn2xQnm7Xh6S9KWcKgSs",
  "key18": "5wPeiLG2GCvXTRKT6YMXR4Z2Aa2DAr6bRGC9sz2MiwJYxKw1pT2jzzCyPj6usYv1EdCqYQWmh4JkvST7sbi6xG6A",
  "key19": "4p6gGo5ioSg4Du1K6dqt4Ezi3GLaT47cfwRRdMW93L8ZZezQ7jxqNcMoKCJKXeVxtoMaG2gtRYmG6q2FKTXMwXBf",
  "key20": "2cmUbHcDQRqin46MSdPCBTxMZh1zCPiij6RjU4CSUuxMXUMiueGQbw8XEewVq7CYEvNGZWS32QTWsu5uaemjZxht",
  "key21": "mmWXByGiYe2rT2Y1E8ZeSbWPNTgpPoaWtQBA3fM3YdbE2Zv4abu7f9jgBf2DJkjpFsJBXb1pChuU6wy5K8n7QoR",
  "key22": "4FnRdqGNqLXJiQ2UejdgUPMw3eVh1uu74khAtXrPt5QFXYgAvFk7d3xCqb4nmoUw9wYbawkRRxYahfbY96knLZYe",
  "key23": "3PZmiGMWTmv4A3kZMn3DQNY5cT4imABnGQ1J345QnYWwUnXYXhEugMMdzpyzFDEjYm3zD3yLZN8qm4JgafFewriG",
  "key24": "67eFYAv3oujMQBkBH59KTew1mUr5PRrNUFAEgVutpjV1Hws3G6fCCLpYVxWWTHuG2kvDcaUZ91DZMnBcUBFrs47G",
  "key25": "5Sm9SL7LSq5xPEkYpNNS3VyxBzYQwCuzVSL2R3mAdm8RdcPw7mDDQFgHYbWfTzp625GzgTi9x3jBMVss5Ktm82NN",
  "key26": "4i2SPASDuFNbamJpBLmC9vL2pKSxDuPhsWBNsbBvqd2KnscCg9FMYABUQCFffW9y7tdEkm1Jts5i6sYQ1GprbSHN",
  "key27": "62mfTG2NyohiHdZts81gz5KjCQh6hrjC2aavUKzDPaH7dsRn7x4eUcuAN1PMEmxrXM76Co75SecqCPjT9T193pgi",
  "key28": "3bxFqMT8SXH2EqVJBkXUDe9vr6PGrwRPNgptKxsyEXzRCQcE4PwYjUEUnTFbYpxmSWFToBjRtWkvk5HkF2HV6uAM",
  "key29": "he3zxiKmXZfReKTHjyBZ6cLoFFtbSy8Xs9HYEfUAxUmDx24r6s3N8rNWuJWM7JFK1T7iWRUNtvNwpT8jctUk87Q"
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
