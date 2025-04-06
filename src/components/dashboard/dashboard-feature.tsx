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
    "3DNfHS8qsngJCyDokfHeV1RpRtwWuQTm6dNiEJfFW75N4MzmJtTvcirtE4foq6Vi7H3HypqsTgZzjq8cVfEpdPww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38GCKbTkM5Zb7hDwDv22pa6NVupwhF6AZpiFfc2u4Cmu7XAQ1L4aPYmRzLMCVNphnG1GLH8YsTyc8YN4Q2BFHfJT",
  "key1": "3SrJfvdVKR4YJFb7oW3khrokGibT3RA5yC29MUS4eUcua81SxsL1YWNfQuZhekaWktq2wJEkLFDYUCFXCJtJMMC5",
  "key2": "38Yun1QzKnWWmvibBigA786bCVn8m2SKh9ryY3h6YKzrUd8kG7z1DBm2Vqvpi2jYXAKrzciMuzC4kkhsK6QiuJPG",
  "key3": "41hQVRaqsYMmy2LKp5gNzNYibnNAvm2JpKEwT9Yg312Dp4Tyx4wY9Xkc3ruDDDX2SfX31Lx6ktd86rw3WT452uiP",
  "key4": "aUQkdtBDgW98xMXp4mhhysuirpUeVrSMLS7z8zX4oXmWzLCF67eaTv7m5MeoRgfyjJf7PwBrhsev3bT3qkyG9KQ",
  "key5": "25H6uDFB2aZSaCyHVipe776y8hvuEphgbjV58C1RfnDzeUSK1CYvMMgYkL7vfjGawWERjLsCUaWZGiEq3yCakzmT",
  "key6": "3qPGc3JkczuECS8psonhirLE5kcDWpxb4vfib2gr7Y2RR9KzXUZa33Yfouk4LHrbbuuKpQ99DzQkx5mq5yPknDq5",
  "key7": "4Z9gntYYv8qundYQ7tdqhq4KTquh7Z3LgdG8n8iDTPVN1Yeubpf3P2JAbAZfisVr6EmDptCm6gGm5c24odGge3q6",
  "key8": "2ezxFna3fKLEaUHKm8xpFf1tsZgxTSYe9hPNLRQZQwEuUAVwH7vnRqzJCSAxM925dKVVzhcb8gzXkfPwC9iSavxv",
  "key9": "CfmRwLX2bdgsgG9Wb1VrPS1TxQsFKuUh4KiA8zVxo6bfQZi8qkcXcRNR8ncVc4r9pa6qq4Brvm9eraqcPwFMR6U",
  "key10": "uiUbGgPTqUHGjCZ6HN7mp3TwzkktL5ropFDv7wCyYHpNkKGLGb9G4WMaauQMeFy8FqSfXhvdJqCo6dP3moBrRxJ",
  "key11": "3C7FdtvMF5mjPCkLk3nUJcYHuuDyqr79JZaHakUnSzPuZskdoS4ZBCVX7JduyNVCv6FKqnUtDysuLVaUdnmwwQcN",
  "key12": "2tRgFuMrwNrr1cUgxtpQXgsaUmwr9zT3mUUKPQQaG8myqfh3iPx9nQARu9kyM4hjH7GFYTA1gFtBdo9EK5GbywE6",
  "key13": "3vnkCugLg6vsUubr4P5sixmYcEwnNezaWR2kSVGSzStKpXiRBE5ciwKbyRWASF8TDyz3fjJsroVY54VrBFntQ4nk",
  "key14": "4Em1t5BtUswCbS7nTuasKxiZzXFRSioYPkoSigzaGw2wjXyxUxjePmEHsX7cgbh12EemJYicym73x3hXVdA345Wz",
  "key15": "58eQK5uHKGFvAcEo1TwMnrgQwXyjt1etMFaFgY1LxX4KEAv8nNpiVpN8JMC8tnPJhTbxTRNhrMC1aXETF1Vd63rt",
  "key16": "3P23gF6DHjt2TAwCfye4y9ayPfGD1grsRgQnkPsis5qB62RrjBXn8ctvRGSWpVtWneVZeEYgpm21hdkyu1gjHEWL",
  "key17": "5obec2MAndyEtDdFeixHkdkzwCfgaCwcgDKLTDsNTohDSkKJH4WQKPgU5XzDpEn7ap5rbVP9Hg7HyNb1NCFQp7GQ",
  "key18": "4Ax8SM7dRUYUQzyx5dyVU35x9cSXWTJrENMxgwEsZvidrSQWFDqYBP4NgbaGZomXBoECF6hcgAh3J7Mekmjg68W5",
  "key19": "4MFKNG5D5kSyTku3NanKbDoTkhfknciHDp9kRrbTn5smZcCZ7FQudUwZvHWqDRtPMvqhvnDH1iSy5DZjhhXj6fSx",
  "key20": "4kJb8ZmAmzGNYUYBQ4whefLL3WRDCHUjQmMiUWGFULo85XYoXAV2vz87A6qwRbfjbZmxgSDU8vgW2wR3CMGFzA3Z",
  "key21": "rpEGY1jtvWYLkJg3FY5bMqvsNe8dRacsLR7pmyQf93VwnkHTe9zndXmUt67hUEYL1Ntin6GwHMNasrPT95aXqWP",
  "key22": "2umsgnK7K2C9eE31c5HcEuuCtxTZwQZhZgNUUyEsKM4cjrcZBYe16zQk2CEQ3XnghorAgDM1NVQ2yeFbj8geKNKM",
  "key23": "WKYpAx6KDZiAK16TPckqzncL3TfsMS841Z4pMNoQ2kjp1XvDAmDtNEASjUSKWxfi2J8tYqTxSZG3U36MbaaPKmi",
  "key24": "2bDRxmLZtDSvyQTB7xfbCP5HjFWoQZEsLqRvEPosJJfqqvSZTtDrLBsr4peUopkAkyLHVPUGyh8H9JgNB3kVgLPa",
  "key25": "3p29CYXPDKZCJrSdSngHr6YqkvM2jQvHsgopXw4fmhuCuKAqjQNdagvJCY6cRxVAUbgeWRjHL3SPSQHM1Ti9WXng",
  "key26": "2f7eLuNhsh3wr2u9Tg88LqwYU195sYa2M7nAoaAKdWdRFG6f2Fs5DdT2KGBFW6p9fhV5KrAs8DqenDhVbcsukrBZ",
  "key27": "w7NfS6WuGtWxPcir3ygYyKo4yoEDqxJHQP6keDRxWm8HK5vcLJmNo3YTnmKW6wyQhXtULDrqMb3DR724xhuovrB",
  "key28": "5WCV9d764VkbDgyNHsuCNrkN8TcUHr1a8sYwnDz4T1CBMTesroHAxqWwnsFZ1xRbcd4SyarbZUYfqKdSE8Xbiw5S",
  "key29": "2QHpFijCStZXeRB9NhMycvMWsABTQSFs5GGRBmUAM9nxVrvJC7LXeWJHuVsKK4ULqtNmRwPnS2DTpRgQJGfih6p9",
  "key30": "3BrGy7condrGus53FPPJhTcqQEgTfmZjSW7KpCr4PgbsZhGsACnM2UXqbDxK8fQW6sBKKKsMLAYdCnCwiLPopx7X",
  "key31": "2L3U5QKTfmVMbPyVp5R2tjVZntq1WuKV9wU1THLDoztuVxgH2ioHfx2sZqXGiz7PVXupLfKd6h78dLuCpffRn6vW",
  "key32": "4pbT4R2Ls7uwmDBw33HKiEEkK3mTLBfrTRFY1Dd7LeUDdH8tf9qo3QDEJjKBsp4PuNTUhVySiR7MDYJ7uTU11x19",
  "key33": "5YMstaUVA89wjENTbik3WZywhPzLYp5tAnfoXtmcAePx3hyxjpC59bv9adv7Jhrhb1Ktag4GmvMYtJjv8aiQSwP3",
  "key34": "PzD7zyCXs4xLRv9HVvc9nWsZH62UgB4Xzd7unhFNF2yF6rzV9a4PJBN2QkS5EF4arGqiSfKuDGvJ3UbsgMU1UeM",
  "key35": "4uJ4sk8dE7ejoAUi5Lfs5YKqsHPzEyon8WJZ3CAUDn5Gn2S8JaAAYQK87EQ1xfu8mvW18wPU4uDEC2ZHi5EvNfpB",
  "key36": "3stiRZp2Nq7ejh4vgnGZSMYFXtwchmT6tGMFW637CJLogo5JxVgUvWB8LczQnt1ufgovJQ5ajeofXfwBGraXaodf",
  "key37": "2Xud1qgDZT6CQ9nrg6HU2PnjyaLH6icvaZq6c1DRXfg2uBN3Dms2oAz87sqXcRq8CVm977k3hnhCWGomhLSUzTx1",
  "key38": "4qZpL9GPKtrZayNcAaXuNxucTTrtHQdfAGVj3kqTsVDCMLRECRqhPeeiKVWsRS6Qg3VK2jgtDB5HnYo8pHa33KRn",
  "key39": "2ryjoNdEBpGRx5Dw2pdy4CpR8JCfSD6LzaVJXEgFFTANidsYCGGRhaNTwkwd1EPwmmpYra81NJBqrcux84vAh3U",
  "key40": "54QH4JXVerWTpEMoK8WhhaNaGWugj28uhXrmmLm4yaGnxdWxsFkrtt7jW8qNezAfzzSZxKDsy1Zsxc4vnedNRh2Y",
  "key41": "Z1Q1MfXEpmVymkfup2jpSbEVpaEqq6e46NnyWGSmQxr7A5UtPRqENe4XLyh4zhvkkhSBJVtL6nDPt3JDCkzxEXp",
  "key42": "vCJpQVMDQ3zGVtVWF7Nxkr4dxDAWvaqXPk26oYyHxNqoqMuvoWXeGif2Hfd69NWBNh9s3oNNQTLdxxj6pdoJ9yC",
  "key43": "5RmxyuWHYLZEK7H4Qy4WBfGxkBUNYptPC5kqpuXcMe4EKZsnGYu8ew5A5Wiwi3kPcZY2V5T4H3jkWhYCjs45LWCd",
  "key44": "51kBXFgxN1dnafvR7e6KLH7RjDPot4Jc51HoCqtzkRTUXEXWV5woH5d2Trw6GEUdFGU4PXyeXsoje2nUtsPCKG6C",
  "key45": "4D8BVV7nSNheqqBM5jWqgbo6KGRSQpDF4VNNP6soSkUGK34JedHedtNvn2PG9EEDrNUBiY8ikjDsDCB3L1GXjety",
  "key46": "2AFokFJcYdS2QLmyy3dfJFFKgt7kQSW5QHJPRdsjGnyu3gAB8xnNQYxxg5tnRAzqG2RRmfUsCntrN5jqe4AqJgXv",
  "key47": "aei77VtQUHFrboJ1KF54f1jCVbi6tjzVB3njD2YrdYtrkZgefHwH3ubfkqHmjum4zKRMQTC73yroQGdD6fxnuBG"
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
