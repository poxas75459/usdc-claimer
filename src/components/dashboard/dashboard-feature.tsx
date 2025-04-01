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
    "3ihixhJgznrjQWoeSHBwZCLtFWQ2sCKirTgwszSx2pENUXZMXgNrof7e1ihBUh7FTAoFHi6NevRXWvQ7WKNRMi2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X31uGXaxuHcAw7xEho6xWPpd5DZTmuheJMUk7wigYndg5wpADAAjV9DuVSk4gSC4AsbZEejp9ojx7USHzvbjRME",
  "key1": "3PKved2nA3nc6yusQMNhg5JykWgXT5DNMvWDQkUBjetwnQ5PXAHd3znRHwtse3Uo8ur1UQSWdcJT9afPSq2q1AaV",
  "key2": "4hUsomGRiMKWVgtPM7GaeUdUSdfqsHfXpECXkmJBM8u7ZCYhs3vzcqUxYku6gUiRBH2hQXFFb5fPbmPSpv43k964",
  "key3": "5qmkco5FfmTVN5tcFXGHEWfF2ipiDtPZsbMd1aPfYsHj61eZ3kK2jgGJeuRYkt5h54yYFd9o7CoiCFnjKusP8XPK",
  "key4": "5PxNPV2Z1YqRWRxsFjT6hDkQptuzBEnLDtah7d7GCd5A2jruv5wtwQeDSmRp67pwsgSSjZRM2KkM5ocQyJVp8qEY",
  "key5": "2YY36eXU54Um6zSQjfE4jw1FhWDzKE1soa2J9aaS1xMUAG1ZojC69Qd8iy4R5RugyEvdhj66uwph8iSfeiJBmfrd",
  "key6": "2K9JppdRQrc7jPXt3rw1p2HBbYDxTBhoTVa4xkHpS9egLUZMs8c5iXYBcp189bLu1E6yajtS5osocLbuERhoMAfW",
  "key7": "VfcKVMXDTBoGGNA4yYNmUM2YtaDfUaXQgv6wLbquu7x5xBo8LoQ9ZSSBHLhp3qivw3bcxKYqGwnRTQDkbzavMuJ",
  "key8": "3qpPrpM9q5wXBGbgLJjuYcNxLwrSCSLuEgMZhA2nE4Zs6qHPPEZiyjWXitgBVvW3sJmsDG66eUuqdq3gL47sDdMi",
  "key9": "64tKJisYHmcvQzkHdbf7wLeMntWK8wSxnqD8aBPChpoNr3mhoAyJDPFP5zYjA8jDGhDJph4MUUwSd2s5aNREoS1V",
  "key10": "23WGKSKmNtNHhPA5WNopxhqGrqhjVDGFhKyYRZww5GXdzGAMzWLQnsiJQec34pMLumdKTetQo3hrX7ZmtBVBNj1B",
  "key11": "5kxPFNaLJkdbA44T1HFUBamUznmZQsaeMUN1yvrEhHCRt9Wxyac4cZW3cLiffB8Ei2kA9RsShfQZds6wnm4kZbq8",
  "key12": "56M7qS3FTg2d3ksS7p7bGTKZ6UqHxtiEqN9XPwGqkXuafUCSNPNSkoVvjk1rM6S996M1qvs9k5TWjQKWC5JAMnwm",
  "key13": "u6jHzJ8M6Cj3naEgLDm9nLJDm6AeTx5mF9WAceprCLWZCWrXYsbPq5JkBxKEB8mdMUgv4paUWwKsLRYAQeumbiF",
  "key14": "4TQAQaxUKJrmGz2Cek4JVj7n5yD7hqmwVhoC54evTq3Un2e5tfXifFgR2BkVmkL62TnLg3Fw6jT8CvQsoy6ZePg4",
  "key15": "3Q19WaVk8TDX9Y62oJdmZcXW9V77BEmfFaW4rMjnTpW4qqBDZNucxE8vPMJnZgXwFAwmN5o2CBXev692KMLkQVgR",
  "key16": "bt3tpxTN4348DmjD5jmi3umneceHNKE6igTj5j8yqan9kj9yjVqDQ5isgWk59vrZytbV3HYUY1KVmHaPArvdwUJ",
  "key17": "4xYxUqyyLvzrh4s8UFDRjnvvbtgeZKyAvT2e2NbsTcnp8QSwpcKWPdCiCxWEMFknvi3dKR7nyYaXrvNLVFbzJRWh",
  "key18": "4tFVWy9E66ZxBJXkLecqrLWbZZr6nhHjMbkGjtReMAFArCRndYvUicmYzbYCVCGAvMZhP3hvRPxF422vQYY2GsVa",
  "key19": "4tsqhNaWCHRsbnjYiHAEHURuYYq4VR7UpeQqVayd1m28TDiZpub5QiDasLHSKY3a8PZ9yLfcQ7V2sHU8yurZhDmz",
  "key20": "5vEdd2FnZh5KxpwUKRfCXbKynSgRc83fPByDtrtECPBNymyuXzTS8LPBNdi52ghy4kTLQkenFr7Fsqb4RR9dm6Pj",
  "key21": "2BoV3nMkktQCzxY1Pgaf4gFNePJAm4ronXmmEVyZ4D4Rxfd1e9Ld8CkbW3DjVsE6zv5RU7xQexW3VSHukCw3fi9z",
  "key22": "4AuPo8JMhEN4khPoAnqGhCDLrpJ58CwkVJiDFMmPLA1GWhdLfPNS6ybn6yVW3a1m3o9A4ThSdN81EUDeLQA4tDKd",
  "key23": "5gJZ7DE77Gds1ZSsNwgrYFC4o3LUzRkvEV3ibTLM7N8RCmLLmDHupn5Yp7bZuGpQ9B73WoVvQDVKBdbif69Pp5jb",
  "key24": "mKhD5gmHdgd3jw9WbHJnwFBbbxWJpank733gatsnz8UrwLkNvahdA7XVLwDdZPiFRtxBhuUaixWyC7LDSAritL6",
  "key25": "NEQVPB2iiXcbRLWDoXuZXS9jzsb2tp9kRJSfwsUrArLsqZhfE9y34LwJiLaLuqHxBszKfSBiTz9r7yyg8ByhbPg",
  "key26": "5cxDk3EdgUKWqQftEMdABacZ5aL9Giweq1MsWNfPixLNtEqjQUhhFhLr5rtBnYTwfZ1fabgoFfRqFmZYKvPUM3u2",
  "key27": "46G4uGSot9vSmNbQfs4Uwt5EYPdi3VocUziUmo9ia8vFP7MXs1ddkhDqFxfmtehQhynsYJ8iSAMDQhQifU7S7rvP",
  "key28": "4SyDUYgbEiGfN5LBEkNgnMPj3wyrNCMCx51pDsGSrQ13qKhn8GebDXZ6fNzcF9gTt2oQetQZ9kZjeBKqrihf45qR",
  "key29": "2ogNBVt97YkwnWS7HgUo2a5MLtpvxzXvtERYXpJ7p4RpmaYFScP3dUV5HfepHN3mCbNXxRg7eWYJhh3CHXryhwQd",
  "key30": "4wVzK8TxiJj8hL1f8QbS2YYyS9f8o7CmnbemVDVkKfkxSuCBDb7BjT5rZJ8YaNHQ2H5yaBZtCYfMKKvtsLZQcQbm",
  "key31": "5LnVj6St9Aw6xSygoED56D3ZSojhyGHgKHQMckhCCaRDhBQp94EwFfi2rnPKd1FoWuetoeQRvH7sfcCs3XPkp55z",
  "key32": "Vh1mUoik8M3FXhKNB5mo8wmdRejThKgqQhCsGckmXyPdhqqAtGGv39VvzLs4t8mq88DoRJeiAtG53hGvVGYjQr9",
  "key33": "3Ch7W3Fjavr4BgPMFqTtfSxxRcaYfKChfj1xujfx3jtYhihj2zLyV6yuEoMbvG9pnf8SRtDNtrhdYENskty1wcDA",
  "key34": "3adin1M1bS6gKqeDCVEXTNMiCuQDFy9QkQvPsiP9Czu8ccFJX572VW1JKUrLHqahfeiYtbeXq2jS9Mx8nbbz3VBv",
  "key35": "T2WBHVh3hThszySaSpKyNgRbRaTagPE7htmWstDXzdixNGuQJQvPHFtPZexvgn5Yg7vJ1u8NWe4gDWXpUxDGLzt",
  "key36": "4gb9LxoN1tK5sktcPT7aKbsSR7vAhQ6ZSS3ZQiZWnPR2jgRpre86dpyJNYkCMWoJ3EYNjqrbmbD7NZsVPBbXHUsd",
  "key37": "4cfzYdzHg2FP4DvNsU6ieiYG3or95RQQzELeRLCGJgAbBBCBdnsBwtmgjT15ou5dW6UF8234LEormsKVdmSwAFuk",
  "key38": "5XbjKhGU7Ta6xHBAQdULhzdd1cpwD2Rd7jQ5zZU1vEWzsajyBKfDfYzyYEHxAK3XYLF9ju3GzCH33ZwhBQ4HGFDA",
  "key39": "5N6bY2CQn2qnwyDkuuhDw9565MS1h2LjRvJAJd8mPXHe6nrqJHrsfAhGRsNpCBepLLymfo3TWndCFFTLnaez4nGk"
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
