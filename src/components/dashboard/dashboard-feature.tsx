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
    "4wXSW5bWGBLjNpW5FAVKuPob64BFLHcysbRqF6tp98Vpy8nmpHs1L11phzB77MU8eYt1e2CLycQ4hem3YkgRFgPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yE5k5d3REv5nqvg4DZCMgHYjdw22fJDJ3Q6rsaKDD8oWRTQ8sqC3AJRypPRaonbdiVTtsSCTEWexgJMJRZHgPah",
  "key1": "46Z2TTB8wi7w517YFNi16KmNzXfvTdkB313h8ukciQCAGQSjW1dWcWzvJuatJA6sRYeTCGiFFyfpesnYsS66ktTB",
  "key2": "4Aq5hVxs7g8ShvY4ddQwhf5Kk5gM2zjaY3m9mLKuHXk6wDhzm4HKr7P46qrAJapavTxk8vTcqw4mUBzv4rUro4CB",
  "key3": "31W5tJHhtoBxhXwgfxLnh2HqrbNuHB9k8M82KGNzaKu4DFvmXqtk4HutyfRb2eQrCC6GfJboPq5qBkjQhinkZ2wY",
  "key4": "5BgAdxwUrH239isXjWd116t2EHTvDvwTj96hsagV2F3oi17f7dmcpEZk4x4maahdhFKSRyUoGkYscTWpd2nwVn5K",
  "key5": "3yRZRmzwb1ZR6164qyCNUNy9CVHYqEKP7v3Ba6Vdyq2jzVe3oRTLgrAr67ziycJMQ3X3EAD1afM7HcVHimfufwM1",
  "key6": "4FDLjVV9NARQUomkbWR7hruzfBVo6nncBGxz8Wj4HJDGzNJnRbp139aDMX8RYg9ohCarh3zxhhNPGYxwH6v2thV7",
  "key7": "2otBWJjRRzgo4bxrnZigSzweyXQJxcXsVdRa2cBi7Dar5LTHKYEE6cxb7PRJGu7Biab17xNHAzrENZaQS7zLEXT8",
  "key8": "25j7K12UAfSnvoJgR51wV4ajTQrpSSR2Cmpjj9eAe78qtak2aAbAgX2Z3RrEXz5vth6X71ph7FZgCgGum3fHuT2c",
  "key9": "5YahkC2zjShQ4DhPKTaJGmUYvHAw6oFx7nBybykLoHUmfxGvxx8xZEpMPT7jAvknDdcWimotJVncGd5xsuoqk8Ju",
  "key10": "2L5KZsdJPwbjbr1tDJpRx2EZEeSEJuLFDyj8JdMRGHnyMgh2gCVLnhrTr5dMduWTj6VKDKweESA6nmsN51nM5CcE",
  "key11": "5hhtJFYtDd12BMgLRm91sgh26i5EhhXpQUG9G3iAFH9MjJfABbD1sDanWdLnRTuz2XBaoTx3NVZMpUkjX6k29x4F",
  "key12": "73RE4ysfaqnfnGGrvFKEoLqUrueEkwWu1dobxFZEUQJYyUWzv7Hf6oJz4WCwj3BWnAQy17tuHXXD2dum7wP7vtf",
  "key13": "3P71nM1k4KL3fcFmE43BasUa1ThVmfacTWu22WXvjA5opLCtdxH3RciJktKcJHtjWw4JAU5yiWXBHe6jZti91zyx",
  "key14": "GJLhdvkgWaZGF3jnfansw78xHWLbatHkmw3fsM9FQwofL4ZmywRNZyYKfEKGD4RKXMLDQAEQ8mSKKNnb8cA6nWd",
  "key15": "5MJFtrEoNU85Xd8BC11pEEZB2rbaYAaWn2NNPW3n3tSqNAcKmVQAoh1SytnZX3c8XVevSey6o4Mo6yGG6BwprpoP",
  "key16": "aTjvbySYb9awifzZ65BJjDWJDUA5Pr3eyDXVWisw7h2XZuKmBXjFDzLyYB2fiFHngYhYnsNELMWGVhnZsDdrqkU",
  "key17": "2geMhYbyRy6iBpAAv6KysEcDHtnowbYcqfp8JfFw7AXWQmfCFBQEFHVavz2F8KEjEhhd2v2atSHzdmtKe8jftKr9",
  "key18": "3AwAjCrBFsEVACXVgmCZLc3KZnBUXmASj6Ecw99nYCRuqqtZg6zpoGzDhdcpnutJfKofqdmnt1NTHZbJFxgERmLm",
  "key19": "2zP23CFiM7wK49xMmrk714JzjJra5fsMd2HG7YeTmSyRJGdTh5ystbbJWvTPfEMXhonXU3AdXWnXKFWoq7WW4Js8",
  "key20": "53D3hqYzvgDeGJRFG85gsgf8pXnjpKEoxg8cdqkvYZPHaPhCWKZt2Fry4UjSysCdfWZoXo3gNyqaNVKwwm6moCGH",
  "key21": "49tehHLhi1ohoiCDKUMVMhUSicb5QmqAeysNyosxARCy6APVVxijqLbHqPK8hbv8atWQG9S2cHpgTAJyCueDpReZ",
  "key22": "8vSug16KyquyJ5KsM2g1KdAL8XeDHHtncBNHVBcLYGgrt8tF9mEnaLRpmmMPddKhiEqr9BBRqzZNqJT8SSkuFPg",
  "key23": "3VFkupGuZhddd3j4YNx1MNFEAchzbekgWU3PrHe9dAAvoTwcotFa2rQkPfg4zMsNUnzTvW4r7LSHHJp9FmSqtjoN",
  "key24": "3vL7YfLcZdD2Q5eT3LdALRQ3XHpAwFEUmQQfGoZwLChkrj27xBKu1roQAkP7pUY6QFyq47YSEjoG6jG9XmSrfyG2",
  "key25": "5Gnvq2wHSsj2tzSto5mPwagK3gR2Vt3WHHQpsTM1QnjUgtBDL7DqbMznKnc9LHaPdEr9Zg8Jq2S7bfmL4jTCb3YJ",
  "key26": "2Gm1tc77mCqSuem8EBmfKagU7tcKnNfv4sq2taB94V9N4tt83ewvZqoJuTd5ZscGegMkhCzRMyXfv21LiEJ1Sm6P",
  "key27": "wbQc5qb9SJqJGK6W9rumVQzqQWSu6guDF5VDVQbpd67pPUNz8qo2RCWFcJN85CVguEuzdQjPXuJDRenQesLaTNT",
  "key28": "3m96aycswWeC4aKeKNYsy9oKJEXC4nTaHvapnBqTzp1g4Jrw9W8Z8hU1H4f72wAGiboRKrf6QcUezicuFjBLQ2ut",
  "key29": "36KtkThtH197BeK1bWT1cLwDzvqggjrBePu4RqGdkLwdHbArdMMPZ6hcHtNxk23i4AnRtFV9rtP95Y3wYE5eB6YS",
  "key30": "im62BBS7yu8DqbGtEPPY88qhCDkqj4ddy3x2XLcKfYjH328ezV5KqsyWYUHj82uVQWYu3R4Uq3A6BA9NqVUwoWG",
  "key31": "3kU8fFDwgYhjomkMYK2NSWF6C9Gahiwqv18qhPrwyLHrQn6sWNsGdr1MecZM9tZ9kAYF61yitKc7sRAvWUM9EU7P",
  "key32": "3p2voAdWRA1tyjKytdTdzNyZ4GktkhQxBMXW3a2ai8W5aUMQgXhyUgmPYAY1fZuSU3Brp1ew4Spw2tiCwNVMbGcx",
  "key33": "4gqs3ZEranwRpfFXqGGUnuFYujJdR7htNvfAPapQS57jsY6LH9ibN2sHniEpcBNL4uEujHTHrYG6QePPyoJNFCEr",
  "key34": "4uKj4CMLktHjJBn8tA5LQhbHUqaLCa8YUZrEByS7rZLsPQ3H48e8wWZV9jEytP3GZEuYW839Bif41VvLKQpgATg9",
  "key35": "2NL1ajZdaKPVyc4eyHmXDPchn1u3N4g2LnjUB3eZof1w26gW9kAiHqkgq1cbHWww4KUdH45MRz8XZQVQFdCMULoX",
  "key36": "n1RSyobVAADZ5y6x3K51jFbMRVaNEWvjCwM8CeiMhUTJuKNfh7SVSrzmXfzZSpg8ANmmS81iiE3Su6u2GPyu778",
  "key37": "SCKutsku9XW1zDfJjJpBsb4xD3GcsZ5XMdtEV6M822W8fyXckKtPQvJcfvwJjKGi9pdW3c138yj4cH3ik56ZrZC",
  "key38": "2w7Z59yzzQPQR7NyPKJsWeTZ4UskpK56NcsfNwtpWYyZHhkPfLJit2MtszQwc6obqrMWkCwKctsaRs2dvYhKnya3",
  "key39": "2kxfdEG6XcRVsHrCHu3Um1HL9ZNoTjRzSphNm8cA2A8zj8Ez4hzC8D8tyuQSRZgpnCTnbtDDcVfMaZRNdbC2C2wm",
  "key40": "3Zb9ABGWdfGMRTmt3Q5r9F5dRea5ujX7DXXSnjjEn2AJvtuG7FmhwmdwCTMPmGQeXfmxJtcf4o5C8vtzW232KK1x",
  "key41": "4weFo1U6XwpuC4nJUHcJTC6ir2UR3ZJY7EzXFUqysP8p5xL6FgdW1SLXZEuo63PSxHszZMkrbt5xRng3xMbYMGiW",
  "key42": "1223tLRAYGrdSPugZc2LiCnfcoPUmANMbJDXKyrmtTEBbBDWexJFy57MhKv5RxQVEZ8NyU7sVuoCRJDAS7pQ6ZAA",
  "key43": "2iDkp5WVTadeL6Z3MMaDmxw8yq8cv3nZLytxG8TwHRviKTX6HYcyktyUZs9VTb11668W87h1GnTbQc75CTm8SH7k",
  "key44": "4NQ6fzB1VdsDY86mmwypuc4TdM63nqoHHBGJwYAud2bMo5zvX8zmvYmnmhbf2vKEdrikThKz7HitYaEUrxoHv1DE",
  "key45": "2bX6ackvGQnMTctbgr9bTBa7e3i5yFkxY9bz94LzGhQsx2qMnk1KA5BowbqSP3C4VT23vNbtjwyFhRVe92CykzDG",
  "key46": "5iPsnFZbxauRfhbuBuTHSLazM57a6SedtQZSRDo1g4G2tT1Kq1nr2vPByPexuhkv5AMEc28fxdFs2FNzbL6jAChi",
  "key47": "uUkHSCXiXiPL9Y8kTGZBmnV2EKVnbrhWRnvVpG8eDstkDz6JpVjc9DSuRnaLDXNeU79w11BDsas1bwjWdF1yUe9"
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
