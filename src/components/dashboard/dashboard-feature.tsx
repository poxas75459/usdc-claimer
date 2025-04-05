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
    "22RbrP2GeawZzEJ3LvUNWb6cg6Su8PuAzEpBesUfGAZWF7FPPDPuwxD9DFMRtsQ9d7UxdYCBviMg3bMBf53wtzc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "464oLsTMibK3x3CdZuFZAFeoNaaDwptYpC4JFRx8q2VPP3zHevu3qhMU7EADiCt12KQxUc6bundarKAj1jzw8Pq7",
  "key1": "5gUP5ruzsbLkVL1Hns98PMzyhUTQNZkyjpvpEuAFA5Hz59BSgmViEkP6xw3HUU3zR7qffNZxguzyuFrQpBkbzRJe",
  "key2": "3K2tTxUUCxj9KPLMpe1vp4ncKzAwAN68cUPzX8mqxBTuzc6sNtfHoYCBHqJvMD2Jt9bz3UQCqwD957ktid41gvpi",
  "key3": "52az7u7oANXCASFHrrx8EgnaPMnFXVkuoT5pJzMRC2zyVomECpqJUfgsZQufvqxhpSLjgqTMEQWMpWNzsZ8opRhe",
  "key4": "3vBrtUGu2PZ5AsLtswxQcExDXpyeZ2UEYzHCUS7TsCvBmqky3gJb7SyMv4JWggC8RCGwMpCcCsF4Nms1WcWNQv2H",
  "key5": "2WjyrDonmZaik5mBTA6fXiCi7bYihD85aQux8uLNYaVdguaQ1PJ7FEy5HfBd3fawyW9TcMY48BpmxBChmTv4Ad6E",
  "key6": "581mTC7ERvhhjsdtVTzkKXK3Xj2i6tfcj31Vihog8y5LXAGBXmyWyw65DWh82ULfsx5GEEQ4RduXGoSRwGGVFLmt",
  "key7": "5KT1t5JkA8WED7s8qo5Ldqvk28ioJthyAxK4jRjDKH9ZoiTQCLFazwVdyyTmrzAfwmMphuvST7Jsa7h7xkTmF4Sc",
  "key8": "5AYnuvzphyneMjUaXDD6BM2hkN78HxxaLtcAYCPRiWbB8jka367cxXoMpjDpArgmAk6oEVgsMkfAp2JtZzDjPzid",
  "key9": "3xcdNkF2jdJXZ9oDbWCiKajdcHfa2Q1P9sU9to2hq4vLs6UaHgpdCsaFnZsaJtEwgsMhPZY4feXZiZckzBtmwa6i",
  "key10": "361TRfUPEpNJghbuxTY1bLGqBqLFzhBXhfsoCJHz8ytxThzM2YDyMEs83r4T2Qz3K3nDWSnySpZhgtddJnmPaTgS",
  "key11": "GEHXiBtEtSAxfqBUH2Ei2A425bM3xPhtj1mPMtmbWAD1TzGUEKTYj3N2jSNZi38Xae9jzCQ44FJ4VcJpuxXFjpo",
  "key12": "5CkHYnKECyqVWB28Erf7Lb5U9YWZtDckdL1JUjfb6FSJB6x1mnLubteKFTLwPLH62aar7ppQBGSUedApRzsCS9im",
  "key13": "63MUUc97CNrz9WmDGNaALBKoffSqKRxUm3qwGZtfmJcUd7SG6f6Gb7cN4beHhzMKpyk6gsUmSojtdoEBawJvHTco",
  "key14": "YvhtFnL6R6C6MdDPx1T5yA7szdq1JGogDvyYWMPjb8QBwYWb4CARf3MeJCDp5hz6DVPzDcM3QvPVYLeMALwKEiY",
  "key15": "3ysAzhKfQjEWf8cGfNSxyiDJvGCYCyGCVFGz19jvc4shr2X9SHNMEJUG4Cs2eXLaVB7Z5Cr8GqMBRy2iPi8MqUdL",
  "key16": "4S61RwkbgbbXash2yToPWJTnzKRbfrVAGJEVaVKUEYep2H44JbdifjUDgroAoSv5rBAAXpD8QY1758qqquwJ3Xoz",
  "key17": "3gfiY1GXkKMXJ22riJuY1jAvhEKQ1mtrAuPHy5Ssb5d7MVXNVcDmqZU5aP6m1FqSWMmQJn24LmJsPBwRuK6bMgbF",
  "key18": "34mn6fag8k4uBHFT7A5xqZAKf2pE8dsfYCcS4CVJQ4uaGeS7uPfwm6vwVMWtrbV4C3xDEziU9HFYafWbLTWkL3Pi",
  "key19": "pTTkTRQ2BeRurLxM1YLLQuuCehL6RkMbb6EfqtoGA5QzXJRaTC9pan1BW69zjr9UQV5rAKaL5ci5bqBCQna7LyD",
  "key20": "3V5AyCUt6CFLquw4onXUVgX56MoKurNFgM7regdVPjjMv3bDhZo6ChNSocbYzFMKvLwUkPJNjVQ6mXBtZoxyrd9B",
  "key21": "3SLgi8SmAPhDjMwfMpLgJoHzCriC2yj13ELUCqee4gogHhGQVJTrf8tVuCuQ6VdnfTSNh7dYKYM9CdGgMGCYpBfH",
  "key22": "3E3YXeTXCPdUspHi3rmaNp8AaZ1qC2xVWFELMJBX2o7gxGUYfv9VTVxn8haN8oWzzqb9UxFkNnomUQbbVNKv8DYh",
  "key23": "3DfnhYYQveYQCUU3gYPUasAyfsKBWCJDaTg35kmVhSHFCLeVCXuKho7THzgcHL2BFvD9bZR61VeapX8WEiMcg6P8",
  "key24": "5vXyfNZmcjEJqVReQ1LTeZvPgXjySkJyBTWL6G7b4TFpXJf1C2yKfEDFukw3YAwWpFMb7vkceny3FPbQnP7s9Epf",
  "key25": "3NK1FL5gbqjAPCJDMbdr6SZ95g9XzH7azxkev4wQYahDCGkStR2mxJ4XchVaQjDKqRVEfreAm6W3j8ETr75WfRzH",
  "key26": "2FMaUKb4N5zoS5P2X1UdTEXkYSFBVFAHKMwRB94dzDDEowx2DmuLQTFhEWAsJTGZMXoya6KWwwpTYtSCSR5LXNZf",
  "key27": "2rSi5FVZZz89et9S3xM1tT9KJ7NDcpX5eBrfW5a1TzUo6aD4seF5XRzteewfLNMbSKP2EmH77731VL8UsgaSwjbh",
  "key28": "JDA8mDQM7wkv8GQcipsnhx1Aq7tQtQPTkUT9nnbgDYmev73pZNEkC7kw4zsKmb6XpuDzw7JWq1i76Mbh6jpgqPM",
  "key29": "5GwTpqTwS3srjKF9zNJzjgRkJK4tLrdujwHYPnBncYK9KKRE49UZgcwvgFot5ibKuMz1F9pGoRuR5DkmJVDsFuL4",
  "key30": "3HyMEwCHgik4GvabPSJxWvXYT98y6XGcfakWSD1YVBE41FtLYefiHu3vnVGD83araJaHTHVqkLuFphwV6Nq5XwZs",
  "key31": "p3B6sQkq5oqA12yy5qwVdusRwC4fhTtQwCcyNvWaEXNkwdNsHBkJoTF2fjE3DCSmFhDFMBbxNiaaXgVZzvV7tAy",
  "key32": "VE9EZQSe89TwemanuuD1sgq65qRK5rn6Ws78Czzoqd8W2nVqJUNYBKfdQkhXxCjJ3ANLatSn64KGcZ1UaP6wD1t"
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
