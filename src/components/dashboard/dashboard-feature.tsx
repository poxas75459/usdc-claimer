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
    "3PA9dnB7fLWaUTBta8u9g5Lk3BCSj7Lga8q4FiNFuP6WrdSk8rqFrnYYiwih13c8Aqwjs1HRBGk5hYmzMMbTgXo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q6eyttp4z32bGt5kR1nRv82XMeD8HtwUEQVLvzMuQrxXpdXu4TDmXzewJYufAeZKGGxJ5nXPpiRq91vWSDH8V3u",
  "key1": "JLNrjmkz83WQNake57EYN1tUQXijCYXqkRXKmdjbL5TXGAKcJAzK6JVyhmnDaLvzcfrBCejs6kbg2bgzCSae8Fo",
  "key2": "5z1ED169RxoLm5ZMgdMz5BRfMe247HvBYommgg9fuAux36MoZE5iXXoamKMDHkhgfkECMeDnZiXG8radn564teKb",
  "key3": "64U2Q1tq43AGqdKQiAk9ciLshK3LWzYo9xj4zT4P6c2FwumQS6ket3FsSiDdbpeUXbkRJiexnGGydXvhhVncnGso",
  "key4": "4AyafdX9fyKVaKckU7kpHJn4X1F4GofGbjP41qrCD18MVZjzczeE8HWkt8jSXkMSEDrU7uaNFiYg3CDSmwnXUUw6",
  "key5": "g7hxvHADt4gnwsoUkY53gMVcjVQoD2sA6kpN6L1DjFZ3nPhjfk4zfmfwRh5BFM6hcuKSoyV2u18Cy7PCK8QmrHE",
  "key6": "48cjq9uMcLCyoTCwKHDyXsD6gCWZceAY1hGZWFpdD3nZ3tJdPJdVZRWwSdQi19T1JfCJsrFG8n1w29GkocDs7HWu",
  "key7": "2RMkjj6XLctYS2mbAaNp234pB8821ptcwEV1yBPWNmzJ3GWJpjXgM6SQwpk8FRBZycZXnEqmuwfc36oCcEy9yEuk",
  "key8": "2iu9CXXN1LkkPWhatnt9cRPKWxgvtawnSkiC46c6DX1dNVtmdh2QbTMj5qw5NxcsrK1a3q3nZtv7e5EkAivLd2t8",
  "key9": "4YDaKMe2jVpiPi4KzPBwvmD5F2cTeVjMnxDahCrj2mYohnhUQcFq1cVX6wRgUZ1c68aJzMMCTf3kArgNjCLVSykT",
  "key10": "5ndoCuLCD46uZ4mvNLdJam9dTKUdYHfGXFGAJsVSar9bxqYSNH7VjoZJUbjCqXJ7eoVKjU4dqYxA3J57yxxHYaje",
  "key11": "5vjguQMsm7fuR9mfWwWE81MfryWX8fjJVkmvgPwAaBE7NdJW19U9K9oMBdHexdYDaekgPK1oh72xVunL12Sz7NjZ",
  "key12": "5s2yJFN9eHwhkYi3tR8f4sXXXUh3C4B6Z3ATZyMWczLsaV3Qti16DYY4XFmyNDMrEtuY1CdhkhMcZpnkLvGrji3h",
  "key13": "8M8NnycJswDpvM4zwBsTYL3WaHppb78xccWPgFwZU27p6fWoDbSR1ABWsAWEqtzs6AkU9DJ8Sc5D1nmy2vtNTKW",
  "key14": "5ga4cvabrm7GbRbuyUBQ9o2u2hw3Vn6SYRtnDbTzYexRioCLZQ1t1cK7MGY4tBeAsHybEmACSoCwuqPNuwK9Y6Va",
  "key15": "5Pgjn65zTAV34UEL4t1TmgD2B8is4jnRNYRYYh9nyZtJy41MG4AvERkgMEopJM4mRcy9om6YWcC52YAj2FJbf78U",
  "key16": "3EDtH2m6rFwSvymY3K7m9rdUtpeo4zR3h8N1pSMWz1EaRrq4wrNJ4eyMxJMALmemDwGxzXUaSfstaNJBcnphYChb",
  "key17": "3EuuttTfR9HpmCbfFJ4Rbq5ebuvDyc16QwjdBPwtyZhJh9XjWaENLu3bPeT9MEWCeGrELAYGLLtMFhmGBgqcGB6w",
  "key18": "3d1fRLWYE7BkSGWgcCZnwYHtvufGAGRpy7mPfVphQ14tHMRjU8ZxTpsqVqm3pjYbeEvo11rH3dd7hgRNegbNpCEA",
  "key19": "vhR6rH11rUnXwdzYuF7H9Gi6AR1jkmKJLWisj7ue4N9QraAjKbN1F9rJmtpzUD4zYzUkfdXydyGKTEEMuNzSVBm",
  "key20": "3wf45zGNXMtrTbryigPPoNqcg8bW6ScysJDakVp2XPnFy3Cxrj6s9VwLGB3DbHtF5bwMeskkNaj5DzystZLymHD4",
  "key21": "C6stDWLmWrCYfkdujMgUBb1ggRQYVCB2gmnCaU6ZkpMfRHozbG2oaS13jXbM86iXcJEatZoMjpev9a7LnzaKAdi",
  "key22": "SyY3BRsug6moDQ4Ti5jcJLuGwFEFBN84nkLysp6bQYDmJ3NxrHD5YormnsH5zxMshmU6aLc2UQh1UFFXtgxUccN",
  "key23": "5tCCxocNzNg7nUUTmGjfbh13Yv8u7UMGrVka1LLF4twkkaFbAZoA4ksgfQbk9eKN9ocG3E6PG8LJpMPRSGiNFd9c",
  "key24": "AucRh7sGhDZQPMziowJUByoEkKaPbsTqHiku89FLZtnqAfKbBgi4rkEMX9Rtwxx5jmFvVyoV3L3rWFMwvHUfyBW",
  "key25": "4oxxY5amLZ8EsWEnLHMDm1HVZEPiCCzc1urpZGzSDAofBZysKCzX2t5bzE4yKnf4QsoY44h8WwjQN4Epe47684gV",
  "key26": "4hug66qDsZ1vnrdPzT4JniMXthBWk4wBj7xDEKUVmVcQS4p2FL9DJFsEm1V4W2uDFUTxSuYhzYfFax658xVDJARd",
  "key27": "2jCp6esZHC77ZS5E3Vukp9h6AsUdj7987gK3Ecyz7HQXH23VBNkB5N5DZRkvx6o8idf4rbSg4JQ2mph43hvf2vPk",
  "key28": "44nZGjroD8xJLEJ4WKhr5mmbn6F8dLEKTBNVfPhpdq1c1kwJBRXbeH7MWneRevozDiRFSqqAghbXry5v3AdY4m5H",
  "key29": "2xt1EAzjKQvgvgWdW9G2uWtuTExyyCzxzGxAUqXC8kBLB1ntRraBntgVC1TCFSctbkEkwk9TmEQRMJwbKwuubJhK",
  "key30": "2mHkxDaUMnWesEYccVXe8QX1nQFGB3M4hih7d6hi4geDVxw3AGTdYzsY6adLyRmbpAiMT8nZdQ5zZBEov5tyYeD4",
  "key31": "vMKAyLRtWJKU2DEX4FXYV6yFbVKupe2ThR6NB7hJJqBHQVJDN7APyPkjnPEaAuC7nspMCpeYcL7Cv6pVZdUvtpg",
  "key32": "3NrpYxvGJPE6pSk4pzydoF2oj6AruFqTUSVYtvXXq3rjRVYUs1XjuN8V7ukAMa9aqJuibJPNRtgex6CeTECynuFL",
  "key33": "5hzc8iU4ymB8FsvZPuMXSNEBCtUFNVZ3Qxrq1qJQ9PYWkx7TN1bkruR3nPmrHXNSXSva74PnRYCvyPnDiTo2jv25",
  "key34": "4LYZwzimzaJ3mDtN4KPgoe2oFjFWbY1YPZLBQmZR5GwoWsHFwm5n4fZmMupysTmfFYqEDWEaTdVW5no1VdCiEyGo",
  "key35": "5UFypUpVacUBx85jcne2tKiAbsY4bXoRFocsrQJgJ7GSHspb135BjH2j6PBQYcqVXnH6NTbgyNabk29Vofu86Tw7",
  "key36": "g1cS2cGPB7BHxj22zPXQzdgJQZzu63jjV3LB9Ygg3DXuaqNKBkbxPGqdVYspdt8VCxa8BAmZ3stYuirrtAdpfh3",
  "key37": "5HeT4JFBJ8TKs73kCo2TceVmjuCeMpjUi4Z4X8xUUdBdrmywgbyRWmggeZwiwuQDfemXoDHQy6wy1Q2bZfpabuF9",
  "key38": "5Us6XNHUqRfSJPLSmqM4iiFwZTTsRnDgFdsj15Wa9N2pQbRkoWmQ31QfMJ1kfU1Uq6pRBmxv1vGjbAnasM3Aush6",
  "key39": "iMM452vTr4an2RikKsftY2xqb4rUbiFNyqgbCX4uuVCrYgCPFR22S1QvcKQVTxFmdh5MT8n6T64fa7trJkWsaSi",
  "key40": "4eVzafeCdFMCudTyXKCzusanNwNoMmHMz1f5Nm9Byo7JgHcDZaojxUnyXUYWz4i2oV9CLt48e5Zu2LZo7vC6Mp8t",
  "key41": "X8TuLZa9XyEkFPtqaMShcRtfKJUYS8zWV2wQafRPNyj2nLp366doy1VMeDgJFtwr6xBpRdN39xGkN7FWx5UbH7P",
  "key42": "fNTzNsvcYcaaPvjKVXG5EaiYzoKyybtvRyQJcJpf4gdQQR9ZcvuY8m3TZCbFTFjxUvuBavBowqyzSxoi1TaxHvi",
  "key43": "5JRYwEZSPHwwFjJtEXyZzwZi8hXhwcbVQndottFLPe9ALrjsCoCsq7aoxMhX6s5XYnJSuW598HWjdzucw95JhApo",
  "key44": "3wiTG5kEVKV9xLxybkMngkXNwDVaZd9UbfDKfMBFk96zbAVpHS433VyuJD5tafm12vCRLXR7mjjKLB6i32Jnj7sd",
  "key45": "3X1HUL2ahmgM6pwxdYnpYDC6QBBWyPQYCfDttGnCNB5b9Ksb4XsoMjn5oKXXq2Hcsz7pgAYcritAc6MDaTdqkwus",
  "key46": "3A18ieCYckKNMXzx5CfWT8rtpi9zfvDNhvRzZQpQcumTnFpwvK6jowNbcwC6Zk1EEYe7TWeSe67fDrJQ5pn2ehLZ",
  "key47": "Sis2HCL7wAtzT84WfVGDrCbTEwYwQD72FkKBPM8xmN9uZeyx31bdovhKRBKgvczVAWNZYE5N4VtKo5aBqshEZqb",
  "key48": "4cHn9BPpqg8kYLm5pipN4DH2VQGtmjLcGrr6Sj945Tz3nVgq2aoGx15PUEihniVZS2QnDNcgCmZWbJ95XDi7eEsH"
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
