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
    "4YzYMTWWiwQ4HbmNs22TZHYb7iCrGZHhde7m1chgTJukowLf3qaR7iu4r9bk3DSdMD7AJAWCDmu9sDCVnbEknaTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kth95bWzYc3N4jGAQyM6fg38wnhEoc3AFZfgFvMbFL1JCtqopzgq6KjSk3GYkR1qir5749cEcuCYTUrSLqnqGtB",
  "key1": "35PdfHKvYfbF4DsR7EsFh7eH8hKS4fMdiMzcXCbeVnfvLdy8o5t3Da6BvWw8sF3Lu7sD9FT17mwq235diMVmCvzZ",
  "key2": "53pprUr3g7fnEMw2QQig4e5DRy4oFVJLiCbSgH5pjghQMa3yMN58iocSYQpC3tDSwXw1YSiTRfYLMrtY46dFuab8",
  "key3": "MqQoNcpn2b6kjZoLAAizWkZ4HNr8R5ueUo3iRKDqdjjoiwTNKbw6w1Bs7XkQkhv9PWURGkEir7sfu4vr5RvGu6m",
  "key4": "guucpL9rfCguwwC1YTuFXfG1iwTC31vAdyxzz8f2VU9fRxLVDyeyDrPKgwbQZUZFtudpEHsz3Kb9m5iMLidB9Ps",
  "key5": "3EbpNyauDSkV17qrEpv34wXZxLQSEoQFKp5q8CSUUzB51YBR8hivTUV7doPj36Auj66t5srLXiE6Heums2sLfcn9",
  "key6": "3Kht4MauVoqkG3Qwtcr4VPBuwCDLSALDAh2ZrL6p9A9pzpYjtLiXuHGPpFFatQRaaxvHRwc5GHURjnd1QNAKCrbm",
  "key7": "4s2mdoNU7jB7h5ZcAFYNdAm69DBKJz7pfnkWnvoSxemCDpg5UKBst4ybfbYZ7qvmxwF2pjG6MR83SB6NGAVqnL5B",
  "key8": "TWJSLuT9z64ALoUHeLLNR8RjHvTaKXH51v958taf5GQuDsS46u14XfbXvBHiwJBvh4k76Wcfc28WZFD872nu9ES",
  "key9": "eUf4zX1KPwtyz6hG4ethqySeEbtkoEm9TVbDF4eA8qAjrDkiU1XKtRC3HjVyHFrzczPBj6SYTEZZjFmcFAwdXLb",
  "key10": "3V6rMFvTRmzzspYTr12s7usEeyaUecraCVztp7zartwAoz1Kuixaq7cEHXtgbT4pweUanfoM61aSPM4CkxmnN2aF",
  "key11": "2EDB8NDdKiHB684B4A7Hi1Q5Yqnx3U3FXEo3yWYp4w25NRK9TDfG5VMjthdfEoM3UrQLo5wfL7zu7YbjqL6LYqum",
  "key12": "4iPkDwFjm7KsKto1ytFqsWjqqMVLegTBjqsTLEDjhGeQZ3Lt9bwdfeDnEVeEixXeDLU4NESYLcN4EESMeAKurpN8",
  "key13": "3cLR4bX1fLEUbUTyc4EiNayT1pnCQ47aQPtsoYhrT2KTNiHUD6jqDitjoPBKRcdgx6FBMwfvk9ivvbkWayxni5rf",
  "key14": "4GviX4ma5giACmF8CV8xpzKd8mcUegLwdQuFXp2Es3Gr6bY67Uny5c5NH9hN83UisSPw3cBFBhdbrfnpiRXBVr7x",
  "key15": "2RnfUPXz1fPcajcSFsuFStGdSNttmyjQAuDWvj32dYFJMh4k6NwBwcPEXLfSv6BsMcm69DiSuoRLCh3VgtNyrNho",
  "key16": "52QiwJU9gCzciFU1czD6wpUqNPnHq9VGHeDT47uuDiqbRpqWgM61CsMdw3UMUUq7iP7u5aS1oc5Tki7eUXTGBWsg",
  "key17": "2Z7Z8zbZNKTR3uphvXAuyobXVkzmytumipGMtmHYqjnbKdshPmzUA4HRXcDXxumqbVhfLYR8isgAXRFQfpRFcXNH",
  "key18": "29dZiNEyT2xk6KHKdJcbsAGzsRdSKaTEENTAQA5j8bB3yy5fR41xDX4RQmPotjncdghCsvSXzhgPaigH3v1grB9u",
  "key19": "2SkziDUVfTgaeSYpNUvH8oCQwA7BPTwfJ945eFigr51jB5vnExXXB42v3MwECsKnpoS6mdohxq4svderyFURQh33",
  "key20": "SrfvApbFigADrTjWqsiYq2Yxd2TMLJ3XBRbi4Pxg61GCoMhPgZqpF4Mvmcc1snHDANg9fZiEbEu3iev7FkC8adB",
  "key21": "51rQmdnFuGeZVzrgdtLdbxJaeuHdPp3UDMPxSmkj3SaXE3MyDWfvJi2JGiBSpqNjcSjWj8Tfnp5n1mbPyrWfdtBd",
  "key22": "3SLsCBobeVTYQnSE6Hw3p7yTBoNFWn5uDepiB89JLPXSSMS6cnn3EAMPNvPx9J2TuPm3PHnUodfHgSDFmKSfZZ3n",
  "key23": "of6LUSyKZbn8M3Jm6d1SZEp7LLJSJjbdy1QnPawmkVhdcDY7TkbMDLVWr8W9RCG5myXoHL8gBr3s1EXnC8cH79T",
  "key24": "3xv7kHhfDSYKyUtmyiNLRk4vsHNaCm1jtWLGzWhKKu9n5K2tTRZMQhyLksHcj64cdfn4XkZ3A9EvBqGzeoGq4uLy",
  "key25": "3ecTK6x4LT2cj5aCnPJyJByByLREBS144pzxGuTpYKGdQjLxpSMf2RJ2PDYAKPnxRLSHa6HwkExnDcubrCcJ8SVT",
  "key26": "AsoxjuZ34WuDsBQKh8wqBDSUYP5ZX3PSEGvBLs2AuQYU9bWjjYNJzH4KJ9rdunUSYRggnNKRtyifJrMrrcVmtcX",
  "key27": "31dxNcSCtWjuNScA2P5W97NUe96wExK8JGEYvDNB5jd1U4KpZcGccpPiW6BkSsfGrF9YXZCNphBkwcdG84zMv68z",
  "key28": "3bUqxbPie4xg8PTNGmBFh32stds21MaHR3uhnoegE9uAq7ouHuctUg7cHk18oDzCYVhop5VxJYanWHkyCoHT6dhu",
  "key29": "2KiUSYfu6jBo9P2ma2cyHYnAz9JbjxnMGuN2MU6EtPMMeY55yZz7fdrZWF4VGi18R9ig61ToxPDaUv9VSukwGisx",
  "key30": "2S2bHWYDqSLXbSS1VGeCdRpq258Qtz5kS3ZdsM4KW4GxQy1KRFNCB4awY7DDm4n2swHPu3MgyWcBWs6rZN93gfK9",
  "key31": "3VNnYj1WwbzJLuv2HpDNVwtLsh2pqHq2AM3jqb11jz2ZQeFMotmuqzr8sySZmae6mQFaUyhH7vfCF7QMsfLREL7M",
  "key32": "2F9QQw4T7a72YHMMrfZyirtCUCNWUk6b8fhoJTRPZrJJ3rqNZpu1WwKtuezWai8TcN8r6Lcud7FJ75mGo9SQk5vP",
  "key33": "27ARyQkHVSMvUnKj8XS1VPAFqzU1EDDg8JjyKCELTSvGX29emZFL6KSvuCmvEqY7vFvYHKF5bWJ9MMhXoHdBqbcZ",
  "key34": "3QQAeHjBN2bNrs1NU3HHo7kFJrfFWKHKvt5KMuy4fkbipnYHuvjCn4kdCBtkQ2iMyPTeXdu3eCkdN3n6Va9unuQ3",
  "key35": "4iPXVhdrApkhLYDJTseUF6FMhSgfd6UoooUZwrcXgiwd9vrnywQMaSruuvKMdPRVUAzhz5LnV79E4jWjiwdZF2aN"
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
