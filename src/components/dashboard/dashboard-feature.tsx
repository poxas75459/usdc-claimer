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
    "4vCvGSyGixs744tL5ufopa2TT5vtKTuR9tv3AzUaVdCRuK9YCvpZT6nVNQi3ShVCkogkFgXPaorWy75nooDEHAkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h8MQyyfUQEk144EeiirfkZ1K7FHfbJfF7P9JFCfCN4eYcrj4foLSkF83wPLmunW1oMuwKMjBRbH7q5kSysRJp78",
  "key1": "45oQNgHoEfjYbDYk29pYJMbZpMB6zdNNPjdMmtptwaQMbmoSP2XEH5hJQhPzqXzmrMekyC6n5RYctkmSvePUbmf3",
  "key2": "4YETKmysZpeWkeZ8g5UshgHdLJbhiEAHkFfm6a7n1mLuqaWY8mtMQrYL1JsdThgq7VLfiqspHr7nrL2v9T4NtwKv",
  "key3": "31X9NwH16DeT2KQMXC61k7EofwhzF8Dz9BrVngBM8ApB5Pw1o41sqYrPt2XRurwdz2L1sxymeJwTqCoVVBaZdZfa",
  "key4": "4W7fAWr1qKRpbV4Q3JgHbZwenKMJyzzoQsq2WJ9Hxc86GVgzyHpH43Uj3B9dq2fUNFqKrqNJYP3XKFCwicyLr6T5",
  "key5": "4wKtPnfxvVkLbyB8WcfSNdLkbot19T9bALW2T4zUAV1ZXQ4kw6U5wyHhso7FD6Gk8DrdeYYhdVujfpjM5fHzEAMV",
  "key6": "4SpxizRHYheBiis8mV7SQtoo6fG7cgLVjT9YJfdtKbGPm6qwjBhGGSGnYTRR6V1hPbn7xer4DhHVMfD7GJu5znkG",
  "key7": "3QFK7NhWkveaLGpH7sHHRfqSuGuoD6X3ApfUXrubCbxfKzzg99F7S7Wjz7njVZPzKXKwwQUM5fa4iriyJUybBWtT",
  "key8": "4FQAvGADCWBrdaMMUe41unNELzKrun63QsRQTNvG3G1qSHv6TEyeAduu4npLDGX1ZqHpBsGKSr31uGWDPSqCGsuA",
  "key9": "5GFceazKGacdyshcYDpLxVWm2qqGNkaUC5zY85N1aJgeqSeStmaRZkRPQqKLymgE7GQZZCtWWzdd3VBmmXFXDR42",
  "key10": "3jfkEGEMFzjhbB1gRYz5ioduCFbqhHptcWJw64q497praHqh1UE88D7ePfPh62wMagd5wDjXN7KB42sDNwcDzDFe",
  "key11": "3gfN7wzQc6DqM9drFxQnScB4sHHtboAaMrF8eZF4SqMkRepg98bmmWVPUP2ddpxjAxJpxdTQMv3VTtszUG8eyEh8",
  "key12": "4eW3e7vgVbf1PeYZ3GVF427SFY5amNvGxKLkUwAYNAQswWepShMe82QNfz1wG9o5hfsKpTLQ5XZJxas4mgdzLbSC",
  "key13": "2tmgDtTt22FnQAVaT3T4CLSiUxott1b8sPMv5yP4DdjEv3p3AMFGzoABJkUTXe3uT2Bf5zcobWq9xLNGdwENGcXy",
  "key14": "4mkCJVc3ReBK7ywDRyrU7ane1ThwE6Xr1LgZSUaUShJH8QQnnEDwcipYoPKwY9DzzjHwivNfetqBVRq9bVKaiQew",
  "key15": "5kTVzAVeDFCJLn36UxjWaRYGFX7LLRWHxjD7MGoiqtS1KFGBBZQ8u2qz1E7MugTPNyAbtBg2bXMuYqRZjnUPZPcM",
  "key16": "21FnL6m8wxTDLMuvX6fUnSLqJ8v3Nq28p6KPC33Ameu1G7T6pwXcPo7tpMU7xhu3fFpyK7PeQoBDbKU91FK8FBNe",
  "key17": "5t7315TukJi7Ttf6xo7vdpqj8PtkTZnVJ6VsCC4xkncyCauacj4sj3JG6STrnuQnMY8NhS2mcy2y6tnapXzNmDY5",
  "key18": "Rk7PX2hjXD9Ri2bt8VYUWR65mxLUcfpoqZihjgNXDRcYgBHiQKZiWdcXMUZNo8Sjs9Fes58VPuGSraiQm9ywCnR",
  "key19": "3b41EMj4i3qpKrrnHgRe4JQn2ePNFAnVRFG57cbvLbndeo7S22hTCXBu1iwPz7i5SNwAcfmGu9kdqSrAGZgaZwyL",
  "key20": "4jpPpLx8sUC9rHnWg3fpUsr2DophyUw8MSkf5duSuAxetPi6UNfnqoVEe7miMpvqxhuDbSu95QTKJNJeeubrK6iv",
  "key21": "5KgMiro26WMTUD7dLesf8vi43tpz4Yxan1aCNzH7xyVEQ9ZNnoHAFdMYThDeNiZkjGYCZwA6g8dZXbZvfrKWWUPw",
  "key22": "CbzCi8yTUNAPdYrN69WU6bGiePL6jhXn9rz6ddbiT4vqKt3mdhPx5iAV4MYjTZhtAt5jydxYZcm9xghM1AW6ydH",
  "key23": "47FSJSwRKnXVuqwbxtMXYSQ7eWPz6oiPAAcPMVFRLgkz5DAuBG6diyLWv12f2vatDpPEn6u3DtfZULAUmqjA5b3s",
  "key24": "3sB8MFD1joHpyQ1DRmtMaDNzGPsrb5GNGUtwsVpT4rP4Dk1tFMJGygVYP9CLqmejEzKN1RkzeTvztNa5Y3fteeFg",
  "key25": "124dB3fCoZzZtiJW5WKGHY2o5TSEsiSB9WrVZA6GaHNZWtstB14dyVCNVXBdRFeryLXyAztUHLH2KLT6udqAuqQb",
  "key26": "5Ep63hSgzmr9kFynsvQcaYhusxykLndfChVSgN35Xka4eCKrZsqq3sJcvf5r5GsAtysdM8xNhPfiv4oXEf1Kudgw",
  "key27": "3SvksndJXnPRL8kqJSq9z7T4w7JqyZr2BjmYwTJEHHJHbB1kg3U3hbmRULD3npBaH7nxgcipz6XafAefoiXNdsbb",
  "key28": "4g42Eibcs3sYkGtgz8DxUWCxX5TM8vv9zjSK3oaxUY3UCwBL1EUQAR7djVRrHqf17ZXGMP7UJ9mSALrdebM2X4vm",
  "key29": "ZZXpSRXQJvY9ipwQxusnZmmr5nWhC8xzojmZWKxvqW7FaKpdqK3qN3CcGnPd3XgsJXpMVshH5SH137WcnRThMtk",
  "key30": "4ybrxbBALZXzbHpVpg7ydMeGHBvRKY5sL9RFcXZ4xxWmrG7hsh4CcHkKAiY6Drx7D8urpZ1xP3Ud5zJhjDixxQ2Z",
  "key31": "5bQwMV3Htn4KT5UKfrq5J56oDq8ncX2o8KwM1NgbZkUqSbzDNPHKDafHkEe1ddd2BLa5MNNQJ3JZTxL1fSHrvTaa",
  "key32": "5piV7LMtGtDAoJGLvLqLueP5jo68R31iTRiDxyvjBSpnDVMvZLUxPBjeJqG9t2V23BDDHbGMtLoH4jANvP9UjEVD",
  "key33": "5p1eS9mWfwa6LeP49wV6na1T7ThLawG2u1MYpByhzcb45jHWCRAhTEDU9Cf8bRFX1yckmuL1NQ3uzMHkNpxNEiHf",
  "key34": "5TzFR5gmkijPoCYB1Zu8Hdbw4yYz5hqEdCCbEDZANmWRSDs95GSeWGTRiVdPJjNJqhCxmTuAi9K39hMNryAe5QaZ",
  "key35": "4xn3izc3DM1sxENVLfmfic2pcvZKK1BXt1tej79XCYsmSMsLb9rzUdM58nyVnCcYAofQ3KXP1JCpzLQ2eKxtPviH",
  "key36": "2CfoNjMNZGzPfcFwfWWXXwQdG3Di9KRPTPLc1Pm7cLGJZoSJ7csZkZDHr8f8vhnrvxNR5wMfg1NSUirp4pwa65dx",
  "key37": "37BruNEXJxmmKVbLhvy5WRyhZsK5XhTdYX7nrRkSST99TRV8Aqjty3zLCvtkckmGXB95Jy7bjLogkEUYuhFz4aew",
  "key38": "4U8e3KakBKG1xtuxrFXFYvvBiqV8nwGowqegfqfLGXS84KeHkcXuSY1LdaGwFsS4e5HsMGd984vsNZQ6su7YBmvZ",
  "key39": "5mQixT5seHzwsR33dHg7wiJQnjJsjFGBUHLvKpTJ7eANr5XJ249BnieM53S4B5ZdHjMkduJASYa8GLo9kJJUnzCQ",
  "key40": "jtjAPsv9GXxqboHN93c3yevnSqUG1xtDCMPM4U6RFGPJgkiXGhqpq3dPfqLWWRhWj7PXgbquL9fRtDs9fuq98Ui",
  "key41": "27gQE37RJKT1GeFpT4qzWcb5YGuW7ka71vhWYQbKJKDAzpZQiU6smdRcagAfzWiRAgmCCdWX4tMrV58qnKEGwsM4",
  "key42": "UZ25xkfnQbdQoBQZyLCzT4j7M5UyUxpb9fgFcFfjtiDoYLjBRqccKb27ubznDHu3mCSTD9zA76mTiCf7u2JfkYW",
  "key43": "3qrve29m47ku6ortT9dhpkKg7EUxTqu2qYdgs7xoQMnWwpJPeXHNy1yHiPi8L53dab18hn1ZDrs6SrRkkgkJCtA7",
  "key44": "3KC3NFmguryhJwqWhbHF2odxcU5b5i8Y8rX8sQwbMh1NnD5cvA481Wpj3Bfp8jrmhv1oUSes7BiqNHPnULAPriYp",
  "key45": "4bZSPEvuWQ999akGmC4AMRKFGdJbcZZu4NBjLaYx6Js8LvVFHDcYH5AgB6ooVFauXn78qBJLkM4xwZ4CXaGB7Yfp",
  "key46": "5osAziJToXX7rqD5NvxHVLq6fyqEyTCVcLaRe3FAFQYkcrLg3TdyoyNZvuYmVKzRjNBjM7BgpD17XQC2WEQzvARr"
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
