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
    "4k25oaASKrzFDLWBy88u5Fw57HR45eYqQcCrGdeQSCxiJq5X3r4fpr9q27UjiGMYRzRiJdWRR66f7r298fyPjAQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cdhjCbpsuvG4HkT1i9seBV7Hmpvf74UZD2XwwQRXyUotrKL58HDhK84YzFsi2PQniAw9tQ9Vewz5rKKVjm2uDRn",
  "key1": "3LwufnpepuoX8BV3ueDqgDVKhgiszpQ4EjLkDreZFecuqpH9ZCPPot4xoLMh1fx4HuhPQ67ATHFFDrLTDkgbjiNF",
  "key2": "3Gcwwdt1Prp9WrHsfXFQE3Q9njt2hyEZbRtDaqXcTdMVUKcaQcq1MuBw49EcXYvioRzbShFgsuEMGwKar72GU3FG",
  "key3": "4S2i8pQecfrzDyEAB3mVAcr8QD7meHQnhizaPWyQosFLNw3HDZSh4jm3Kt5zGsqvA4fnMJ6DnCdJRuVbTj1TbVzh",
  "key4": "5KxNoMXaMM8wMgm3dQNa4NMdTtdKgv91H2qTN1YNPPtymw3hdEu6BDXx4qQGLuxKL2nQhPUH4wVPATsF49BGzWNQ",
  "key5": "3iq5GwV3XxDJJz6PYhibC5jzxJ9jhVXa55tf64PzpywXtUP3FUVnNHYC6HvX5sHEjUht11AJXaR4b9q8oApLosPN",
  "key6": "28CfUcj4p8UwWjWXAwqnui38iqMQAV6QBFJoWEa46NziUjhWQTQjFK5nrGFtoSwmNhGrUGAbRMvFUGUMGHKfaWD3",
  "key7": "2FcnkepiG48Ry64jX4V4WuJh997RRZDkJMGn3jZx16Y6jR1Tfqyo14FoWSKUjnSBAK8pRjPsTCzBPv8MMg2vfDo6",
  "key8": "41ufeK7btkchHEYyvSprv88bZEg6j2Lh9Zz2xwgdGShZzetEWkCkqLwReB1mb3juANUg6GCudDptmGKEUUDaCQHa",
  "key9": "3vLhxKYm6hpz86p6f5oYnSegvuL2ekeCdJZdGy9aBgjk7qD15S8h9usg59zSz21Z9q7845vrckSZUvBNeTrv5vJP",
  "key10": "38SZeuqK3hqfbH3ngSSHSnwVfP6UJyEvnY4mNoLNByEDE5bmDTexZrSdkGYMFNQos7BqtxSc85bd1YPvfXBEWi6E",
  "key11": "2JPeAQAdp5QYRQ3QjkwPNKMveUp4HNDN1TAwzRPh5qkEs7vd4GdAinunaYFsjh7dSY7JxqoMiufwbWmbj4iyzKqn",
  "key12": "2mNcA9KyaG5uCE1rgA8baDsUxVfUzBvuDxjBJVYr8TPVmJConBwFKD16xCJE8RbTbFEav52PZSfA9MGKw2gE1Eam",
  "key13": "5ynWnPb62Ud84dJNZmX1reLTM78mMu2y4Xah5H4edQ48e6JENwvYR4U61AdQu8jhFVHgqYZZeDsgeW7LUcbBrEEs",
  "key14": "5JBEXg61kvNRY4ZH6vc9tD4ho88FRWKtQZvmzTgWDV4nRKYPoRrvfPxNphst1Fx5V1M28ikqh9Wg6ekR5KXUvqAR",
  "key15": "3bQPty51nFbYaexV8zj3yngrWd2FYbxu3y9Kjd44wsvTX7HrUGDvXn2uhRBNiZEZLNPHHmYHcbffxDDooGBUQG12",
  "key16": "67Fp1QxLAtav3qTzyq9giRBsx2JEuPYKQuj8iLMmWVrAjEGp9BXnna7MJj3zZk6m1L7yWcXtr97GDVeNzGW1XW1Z",
  "key17": "AR2SfxLTedjQRB1gApZnx9TvNmvEnuXfmVarYZT498y5tpWe14mkh6E7jNEBRtTsAwUTTMx7otf8XCH2WtPVEyY",
  "key18": "yUp2AVVytj5Y5TMx8woacB7w5ctPUz8uG4jzPDfiEz9SJd74vV48Am4Srf819uY5izPVRFBCuKUngf3fAJQfZSq",
  "key19": "5ogHQaJpwqyJVLYZmuVoSS1Cat9PeFkDxCHbwvi6tNHKZL7tC2pML1GMiSCVzaUoKu9V3orvVMPkpk2DHbf34YnS",
  "key20": "3wWQzvbxx1zst4QZYdKhopQ9VqTYVspJ5csPjFPCrhbPVexKazkXvsY1pax6Voq1exfEKD2Hm4Pr37EDCqEgmpX",
  "key21": "CTb5XpuD5JqB5DZN31WzgfFSGKng8BwZNXyXkLhWnavDJzFuXChtBPmxHDsYnmoJ8CS5zJDmPPv4zujHesDZaGH",
  "key22": "5qTscD31bYiXDJX7hUKQ9BCWek4y26k9nbLS5sydJFW8azxv4aHxKwa1TAvQng72aLhG5ZLw4LDdpECoMj4UkSeJ",
  "key23": "5ERvuGu2MtYanmjszUC7jtaYk2XuDQVBMMb67f9HBYiWQgL849x1NFftSCZQQiXC6bkP9PfR3pDZGEcatReTBwc1",
  "key24": "2UcfcHRfLqcX9AjYAq2hNACU3k6duVMHmMVwod7bpdihZ1FHse9pLSoXeie6UD97DesnHCYvqDJoejyvvUmh2P4o",
  "key25": "YeZ7CKrQ1fdVNAaA8hc7qrmDzt3imTBu6BLd24iDawfT9CLfnM9UsW2j2WwuV2syzFZJdagKG5j7aiyvmH3tmgp",
  "key26": "5PA82BKkCjrSJRzPiBKLj9ffdcurVDe6xZWUst8828N5gzd2qujUXcmiDVGXcBQ4KTDCWXE2AeztCbvxddMTuRXG",
  "key27": "55nSvepSa95eb7rai47PySu4C5ZDi5GfJbWDvnRJkJbUmXzgzaxmNVvW5Gb9yfEwGzVamX181vxrF85vwoGnVXNk",
  "key28": "3mBzUsF8B3eoutLgqiZ8NfkYUEmg9REnWAcqWXXxAzDiiAtrUWaDg6gn6dnqqsd2JxArMsWJXFiv2UWTSSJ1AzBD",
  "key29": "2FDgsLn5QkKAaQKzTcJfa4tevVHc6U2u6EcyGoFgjF3tabdJGz1dSvqhA1xUQSVwT31NYUCghZcXNxnEWVa6w7eu",
  "key30": "5ymrXWc7kF7GgakrUXcFzSvU4RsBjfsNq6djCW6KzH9cVw3Yqwhyq1tiFTvV8uUydP3jmRoEzqa3NT9VXFgb6iDi",
  "key31": "2DBWeHWaV5cyTpMFp32Rrq6Hip5Ummt6EYs8jpbwMw9QqFtnJya97uNiEENHt69Ksxa6aTwaRbChKtnsDwXu3EAZ",
  "key32": "5MiFFj4RSJALFvsiSMRkKXegzr8fDyEvxBSy9Q5CCfL2kzqwyPjCNoMwjZGqFikRkP1bWrfbibsx4ofnxqrmg1aN",
  "key33": "wePjiAeeNYqqsKMRgMMCUVHhiyk4RfDcup9USrcn4CVMDinh6zZkd9Y29LeDWo14gcXDnBEQdBucYJAksCjbqHd",
  "key34": "5RLE4Y7kjwp3QpsjDSiJs1zBBfVjcySg3LmMeszY8kboKFfaM3HbRMcBxF67QLaTGpg8zVZksgGALoVZ15Y6j4EC",
  "key35": "7wSnNvcVEX7CfrRnUPt2DriTad88g9QXFUMzdNLbZEoYYMSX7XZs2vMiTztSySmnk5DkXimWsPSss8cjDF6iRms",
  "key36": "4eZ4DHW1mWjSufgjtdEnjFpHEKLoQqxuAiza6DBvGMPzGBe2LvPww9r9zepJsze9XGqJLkAHiwL6pUEYw8YyPwJh",
  "key37": "NEnCYXKxd4CJqqtBE5aqkFNRN2EpJCibDL9kmoMKFvgzfwkSLkF52TSzEDfzTrekqpqKa53tyufYYzSWESBEy24",
  "key38": "25vNzAP24ZyZEpgsmWWnq6jcTwnS8J1rLLNAC5RgYdiwtRXzxuLa1stN4Fqs3FBGAj7BbCd4ebyG9DVhMzwAspgC",
  "key39": "42uzxkBHt9sVkonrzUMMKPHLjerrduBrfbrX4sabGKZGXuyZc4QiwEC4Jkcnzq9TwUwyTmKZymiS2jT6zHUCZusV",
  "key40": "5JtfF9MDQQc7nF5wQcayJhJ7o2N5V2UPsFjpyc9gfwuCPuzccbiqimHh6rC3Xkc3hCHdwJwUAMeUvCUdmjEevVXE",
  "key41": "4EQvJSbSmcnas38eSNKHinEWuWtK6QdMtHuet3rt5TMAkh7XTQpoXChxC3KV1fTPNPB3qw9G8uoRRRssJooSTgFt",
  "key42": "3kPNAeDuLZX7tiJVbkYYisF1hGQQf2mzD6NNAfZJdX3DgS1rPKEjwcAxrHZxmLZsXpGoksz8tErd1hx6bCQEG5L3",
  "key43": "4YYuVinWREFG1YRvR6Wsjjim8JxAYbW4XpBQ8p7s6rFRbCLY3SffffBV3wj5ogkutUTcG6FwSvLs5L3BLWdncjUv",
  "key44": "66ZRXPY7LJrcWGcZMEocbs3PcpWKUSJNg5xHnD7zDrjFyEBHimXjS4iNrH8k6eJxotij3dLiKx6NbqQ6W23b7E3i",
  "key45": "3cRHTfhrxhLTCn6zd5mKcTjiW6HTBt6EG5kzSkRg3wsEttuYzFR1YRrcftQgwqY6RC4txJBU3qoEMY77B9cvE5dD",
  "key46": "qD8KbkZ88g65Hmr1nC5Z4g8EkaFEtaF69HcQyxz5EakobpYTqAuypAbfaDdNxLhv62484qSWjwaYTgdpmahgwvX"
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
