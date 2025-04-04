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
    "2eJnJL5EiNZfmfA1fhUWQTMmVroBfvmoK4C3V6EunM7CuixUAHVZiez1ta9YjPNobopDqkERYsLsppZZB57TnMLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CDPWijjg6EiJ9wUtMgasDoHmz8V7EWUULs2aBEnuae6sy3iEYu5TsXwkWwkrzFLMMrwA8MKMhLR3nRp2Qaq8BkR",
  "key1": "2TnMnd9AFFPwstC1ayNH9C9gFpVm8nMaUxXS7PG8CXN2TUsS3UAaCyhKjboMeXjtLnmE76MnECgn6eWbYDuhjxqj",
  "key2": "5A6L2rVJGseo1EnXb1FAa1Gdzw8ERSRRhj17Ah8vDi5n4hjNzTCVKUBDkXHTkDbLj1LN5rUtJs3kCdqmBh4HsHno",
  "key3": "4QUzok88rTG1bJZqDfv8BKg7iZeKoYFeihzJWEibTgZtELNwzh9YuKNM3fEvnr3Dvk799JyYdGxNrsPjZKuxjru6",
  "key4": "2e5cN8hEiiiZAt1KbCCEnnDSZBFv64pa22FwH8WhrhibbEBR1xt94hrWdBdp2mwgiZnJfTQChb1Mzd9xt2U5bxGD",
  "key5": "2z875KpnsuvRVN1zSZCiW8PRBqWnnHpBuc85dtySZ4GjhMu6WLhrd7tv27w5ta4915SL5DSn7ErFZaeMHqMGCZDh",
  "key6": "3R7ijJGw7hp1W57NfxzjQFyXxKMf9ZEFG2dX8bcbo87DJ2g774pGHFa3ceUfcbz16Ljn8KPtaq88zUVum1JCzM12",
  "key7": "22DiE25aNbFzzGKwgCzthdW1fBHeadNaauJhRyTcNCQLEhj3D2Lf3NSvuCc8U4ZTBrWT4ZmREe9FgGhTyse64Qoj",
  "key8": "4FZAKKvmWMYwb7A2XDNEsvxPMREkTmy5e1ozuqzgn2zePgsEQ1MZSJJUokyjiGpteXFd8zNBS9oABs45BhS3eLJR",
  "key9": "4pajQw8C8pJy9mgZ5pjZzux7srC9exbTfPi1rdghoEC3uciRA89TyY2nnyAk2nvQWY5kJSVMzwDd7wcnARD5GZfd",
  "key10": "4cdek4FMkxf1iz1gTbjZYWNq3xc6SxnbXx4rnFBU3fPwzRsadeCkQNoGTgRycnPkK7UWN4ZdZvsh4uoTAzo1JKak",
  "key11": "5WF8q8Z9GLqyogiBbxWmtJkzvGWUF3CMvE48kxf8PCTN6U9RhmAfuK4hgauDPnzvqRPpn2uxL5aXHA2M2AmX2Xzm",
  "key12": "5gArv3zb7Jn7Ptfp7bQW7Vek1GRyRkr5sjeZsJDqngtYFtRXdHWxA4gTFrEc3dAHUQpRsjzzZ5GzorBpWjaGXY2w",
  "key13": "5kn6gyAFvfH9FM5WYC2e9JgxVpG9tRpHo8VE2DPHu2xXxmCAPpNusqhiXW4vmMQS8WFSC7UAoJWERvNpLj7BidSo",
  "key14": "292Hi1rRphSA7JHQYBLmf9nmSD89QmUyZXLBNCdjCLNnZLNKfsKQ1VXigTaCAdgVTfFzYCuD5hqSpfwd72HqRyEx",
  "key15": "5aRc6ykQyvWXqGvY3araCThs79zmCq9LQyoh4eNWxwST1Vy4AQCiiit2FoWHg3drerSQndVTDPEmLp5NSzhikaA7",
  "key16": "4RZBxCW89xTUMSM31wtvu3tvNbA9zEhcaMqFJ73HPdcdATaB4v2saWNqorDn65Vv4DotS91VMhqtVG9FL6oZepEu",
  "key17": "4ujigxEqdZZA3oZe3s6HXT2EeWFDpgdnKRaXib29jD1nSu9A8pZCkfXgggtwSrgdY4cPjfbfBhgJo7QfFqoZq7wG",
  "key18": "5MAn7u7YGbxWyZ16xoML2dhJrKSo2Srzj7MUZ3z8TdZYf63cFJQCSf4ABibTV9CyULeU3BhRaYMbRbV2SqWNpRLV",
  "key19": "3iekrS4ZLuF4kogFNU8GhpSNRypR5p6GDRTWaoRbkXgM3GRbdU9FJ9PeDcGKW3U7qmz1s2URatopntuy9GLsvRBK",
  "key20": "2K8mCkVH19TbxcSK3daamVCbNaPnEySeYw8mPC8eiqf834gQxcigLqV9bfM9qJXV5XJDv4mds5W88yLkJojac5Rh",
  "key21": "59vPZAqpg4Tntfg2XJXVk93zMPbfwtRgczEoa7zQdzx8czg1yog3jAk1sgSup2uTXcJs6S63au6z74bADggyt6sT",
  "key22": "Ypdkvnf6NYXMfKA1sWBJU9ZzkCovPBcXwJyWb8dhgVXHwEr7bSiRN8J4mAEXZ1q2jekPHoHZZJCVTZZ8NHtrCPK",
  "key23": "4JL2V3ECCfpcZofNUEs4xvgrZngSo367bHfLjygu2EX5rq1vMUYexPBwtaU3ZKRwm8ehCedswnTKaYgB9R9KntAE",
  "key24": "UnAtrKJPVDvr1Z6vaf9n6ZQ6bCtPRyQiCkwDRFWhvBPefWF7yhDxsF35E7AdDzofY6W3D6WBnu5a2NS9vVu9wBe",
  "key25": "5Z95ucubXfVSDm867DXdKLYWfuRFkT68BhqnMHZ73iSMTbVg5CgT3SAwMr1FiPbJS8WjYg5LF1d21Pord8NY67PQ",
  "key26": "4pMyLYeFGkGZbQ4zKKuazQ92rLpd5SPhY8mokKeHapJooLQwxew8cjT6ePf9vgSG4d8tdmSkmf5kZEdy5mib4hjD",
  "key27": "2M8MrYcAqN8ZB17pkaDHhv1KtmwvdgU37cvGLtCExmdSpmsxbbJVRQhY3pdGuqKCzbuLRCWHWfWUFrVhtA4ZSBPs",
  "key28": "353ovkd2s7FwFqohPSjnJkQVdeTJnAQiwc3FVoPNPGkcQJr8mfUH39eVPJwEVGgf5exN2wUHKBEg7BjjVmXP3avk",
  "key29": "3s37KktSE3159SnZPEBVyV9gmReux14LC44ztQ4uNupoaqg2FffActBz9z1t9cq4VXuLm9es8ugoY3sEVfL1tKcr",
  "key30": "25gmzSipHdeCKPBXnFPn6nv1YE5TkhjPQj5vkLdUhCbeMsXegLt9716qe6LaFuadTsZMpm7iNPwmTCRU64u7tvvy",
  "key31": "5YxHqX3zdV3eNCF5Qnq9y5NUYvZfuZ8PrbFCZaDn8Xv3BT4d7tbbKaWLDTGiofXPBRWWJH2h75GJ68TKungoy4YW",
  "key32": "2jDu41d5H5E1B3TJMJCD8KWJYBHTgMxvFoRTxpqxnaGVaZfLRbGwKUGAMd6X4DQZMW7LHQ3rymfA1kATbHXsTMJZ",
  "key33": "5VB9J3qgB7EsD57cWgYMUhxGSvwLTbonrEvB383TAqnePyoCVgb1YEevnEu7vdQ15cxst19mujfJjWBKSPQc5yAe",
  "key34": "3CcEX8vSFJEzyYBfsgZ6eBhLTeAyBwiFDQBFU3nEPhn7HgSSZF5BynU4CKm9yuDGTF7HWPvM5fkphRmo28JQe3MT"
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
