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
    "2amAaS4X5nPBmVDnuMtbsYwAMxZ7dQfhJPK65d4zxwKhvzjtXayNdWRjf2gzWWTx9hc1Yw9CHrKE7wBNsMj8SPpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZWEfsT6GvCFjEkqa4Mi1CEBByAqYtkJU9bnuqk6CPiey6MroW3pmXxfNGTqt8RPWh6SZioYTWMEKUrAEW4EYgWe",
  "key1": "125GCQCpaZRqJc4Hzd9hvDiReUUoub435GX6AB5qbFzeYn3s71hbE9kTUohyxXnM5xYAEoPp2AUfxTmzMRySPm3z",
  "key2": "5ixpGaeNksLoWipwB8nRSEyQ8w6UQv2oeqXbB8mmYwjdzbqRBv9hJ9yvJgzuiTtJNewzevnUkHBxr6ToeG6cNHxv",
  "key3": "hroDpTg8pRbq8M17xJZ9ZjwV9MJY9q32RafafvUN7tpuQSfmYkC7qeNotaPkzUPN1k5uosjnYPArALEJpmfSvac",
  "key4": "4bG1TBo3bA4f4o71mK236ndxo5qtiLMN5jffGioKyjysD4CjmNTEqcbKuDJs3Uthth3hcqd1zLnygvFFivDk93UG",
  "key5": "kUHK1koTnAqcVBLMu416o7QGb8Pp8qTm9dixFzp8U7rnpbgjpfrw5JNS9b7CmZ4dzG54sLFYFZAakuf7DeoJrND",
  "key6": "4XAwM1c45fsVBaS8t3d7sTApSNLACqVu6HehgsqDu4xHMUzeBpA5K1uh9exZX8zguydvcPuufMP3r9HJKFic2m2D",
  "key7": "2zDdJwCSXZadkDxNwL3TQpjPgZSK9SkU2nWhJHfwGKDNPz4bfy6g6YpuTuBayrR48xFFZ9tBZMDU4N8HLxrEiFgE",
  "key8": "54Kv22nibmoY3d8qsXvW6W63CDEtr4Z6v9seU59UzWicgJG1EYUinNtuMxnyVWKWutY6VPpRuH8qC3j32ZW6exDA",
  "key9": "4FDtWMzc5VrfgxBPoYwKDXKCFpx4umSKthzj3KUra7hxtNmcCyz5zhfdgMZY1xRJQcYaXnXBKNFQQEQqEYjoev8p",
  "key10": "uaAQi8uVq1a1w5ABAjXbFfE4tYQf65CExaYfsaQzmqZEUsWQ2Vv8eyLuTzonPEkeZuNhCSr4mYAK7EcZfKo3VV1",
  "key11": "3PMLffeAhopEphmFhgdoxTHLnptB9PsKusWE8vAg8TRgEWc492Td1iMm2AHRaZUMwxjQKeHQ99v6RFAAhfta15HD",
  "key12": "3rBBx5H1cPUW4a3tu96A99YvL7ZprucJmLDf7FZQ8EUvpjn3E3XXV72VQ5utD9k8Q2VukQs2s4swBRx2VcE8BXPn",
  "key13": "3bxst3XWw1RMgA5p8ZipFeTNE2tEP1FAtCk4aKtfyermwL8F1BvP4TiqsEHAPuu4x6YiQ6biEWKQNLp8xAqCGMgc",
  "key14": "4vsWwdzNXzo8g9dih9fKHNo6H6ne8sd1zSk67As2uZtVq5cRMbN3hB63QS3e4KRqdhCwzkE8vpEtHmTS1nbf7UGh",
  "key15": "5Hig3qVAZKE6aRcUoMqNR2eTWinbBjh5WuzNj6uMR46D7DAkjqxVFGCiw6WbcUVSXQJrnokBY4jAf61qTUTtoeof",
  "key16": "2JDn6Qnxwxp6Fp7yxkidWcgLAYH4ZZsDuJrEsiU7uvi2DYRcUMrJLK5bJ4NtmTVZXHTktaGaWPXJk8HCwgVNZD1H",
  "key17": "2ZmBqqwnjURQcRj3BheNd2iw8961AeHNeTMdnjTEa1QTji1a9cuK3SRSBGMCSFCSdakABmRRoq85wzWXhrr1saGx",
  "key18": "63DSVSYCd9N8Vpp2HHCtYYJ4LQSkcw7AhRfvWfuNsazBukdY1uhuWQiNVp5a1MXxFg2oCDWA4n8kqFKFxEJeaXYa",
  "key19": "5La3eMs8CDqyQfQNfQcTJCWURbamPhmah5cQqWpsK5Xm53gwn7c5SG6TuqEFa4mEg7PgyXc1sd3Jm1PbHoMtiu92",
  "key20": "frRnEaqht6dfWty3zEcqgzpo4KS1LaYTed7QFWyjfq9HfTdY4JaMVZfQnUsTRUfTiCQLxKmAC5EpAeFm6byk263",
  "key21": "5L1FoDQNfRn1R7XzMq8YFJ7pxMYtebknVGnLuM4XopmpYCMdTqfCJbp5soAsLVhqiA2Aa2CrQU3oCVTiy4rhtsvA",
  "key22": "3myuz1qQonxfJPbdzxg8uDkyc491wRPwpF9MuWgWUXd7gUrZgUoZXtEhdJkBTubigVLzANnJxL75FjZPcMAxw1FA",
  "key23": "47XZkbo9MgCAJP28QLra8cCd2km2ygR3GqYHbMuMo3yn4btYZXL5r6HKfuyoNtYcPjYvf87j7JKaFb3zRLSUHKZ8",
  "key24": "327KDX636J4USqk29r5HkTqp4mWWrXzTbh1cjjkifpKcZSmKL59Jh5jVjavDDbiYdsbs9YcAN3R3LDPuxxPp7bVx",
  "key25": "4zTzetKTkQLUGy4qqnQ7xMRYin1ibxiCuynBStjPmHeuaz3g8LT6MMQtWEwCSW1RJmQbVSQup4okkuWKu61QrzAP",
  "key26": "4KjUmrNGmZ8VGiRzx9ch3gQscawgxTDcx6sXWHVTR4MEwk4iLpj5Un4K39i4UzvfW99ZVHGazf1xomhqY5QCZjH5",
  "key27": "26G3UzGvLD9R19S6VWgTBqp8RXoYrpdnqKkpv6HhAymMrRdCzznNxQ9MSFkANP1ANdEu4CrVUqZiuAoGK9MQGVQ7",
  "key28": "5hhJyyxQCguTBhwBVJUhFxnTLZsgABvQQoGfse33BtHRpau7QjQTxWvoToEMyFvyMaXTHTbuTvPVbRf6DqoDB7ZX",
  "key29": "Jo9tBHu2z2HrKeTo4bwGhvzmvGKmm5Mo5J7AxW5pE68JNV5JegQNkBfpJTxnB5Dqv8pT9686MrcuHAMDCUPtfuc",
  "key30": "5vm76wCCpLfKiiDxwkiWZwVFgK5JTEGf1rYWvj34P479AsYggYBtdSuQFWdkHDbq27AgJyKYAHJ9z4aMb4B92mZp",
  "key31": "N3axjE1bSFH55xxCoNwcGZNaVvExzwga4jRqV5sjhqouiA3DkMK7Qr3FBv2GzxcNQTGazWHLt5sobbDfq6Ni2iu",
  "key32": "5UgYQcAih72fUjRHr151uMAWgginSh3nV3UtWF6smKB5Z69EvhFo7tPNs6eLGrMJ6mBz5pz9vwcfPCgcuYx7Dvfs",
  "key33": "2fhLH4YwMLzMJncLdX2HLJbGwkBVYGteRgoh22jqAFLXp2QBhdMwvy8DsB8grkQ4f6kUohBf6oSnYe2zgkQbqhYF",
  "key34": "3u2DHuVRYgx3e1CZ9R59oPqrgWMrGEbmZsSHpMZXT38VFAeMi78MDcMJ8jZRSXbSxTTzPzSrQjEkn1H7tpZEK5qS",
  "key35": "4ZmrSngPfBMgAHXd81Gb5epcxgmCd2cWMR8xZYuujc8WpAJz5LCn6krXxWeZGj2c9exevpj1vQ2oKZdjGkWJ9khM",
  "key36": "FBNDbTEHLss8aCWibvnT7pBQewMh9h7Vt6dWnaXMfsDmZyPf4Crr7bRyVdhU2ZWJoCH7Gu6JD2jpUf79Lnkzuqy",
  "key37": "5S3hxQVzb2xtnyso11s1uWwP1MVQEjzoAFiSWEESZYGaqRZpJbwjnq1CzT7NkcmEpYZo3qYMN911NphkFhot3tAt",
  "key38": "5vMjB3FHkYRKPm1RtGe1GueA6aG68YiUinYGYy5r2FUhbRp8vDUerZkfYWbV7tj2Jv1PneChhE9F2mtYumjWmv4c",
  "key39": "mNi72Vt5xcBXbix62vM2G4kLcV8CmFc8MYGEFpJmGNm47VsrzPv4W4rvmPX47UUPsHFZckMvEdGR25NJwo5yBJt",
  "key40": "5U1gsuyL9N4bezYpJcgNwmrYoCWFeYqZowxhnoyJueUg4Uvi14g1tK6wZoUT25dafaztBJUxfvunDJoToyAXmRRz"
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
