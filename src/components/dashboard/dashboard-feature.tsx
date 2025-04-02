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
    "4vESNtC8VGVNvHCDdUWMfH7vzxHsFzQ5QsfV9eoiR1mzUdSGtD2uoUB9FVLwRMeoJ5oSpHZ11WwWFtkvwt2aibka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56i2Lbxewn4LaKN2E8kQLXKZPMscGuYpbiC4po7qoHRTk1MvptZacw3SK2gJPuy5Q6wsqrq5WpnZkhe1VxutH7gZ",
  "key1": "R2hDuBFj71utYSQVzYFKeFDRFXPyvZqFbPzvSSALdn2DiPpKc6tCFZDVtJHzyyYhUCF7gCZ87ymSzpmdvZ3bSwp",
  "key2": "4jG2Fu22Z79grir92sjrCQz49RTYoqmqo14tTDGNs3v8uapMTnrhBqN3jVfRq1SQY4VwgQ7AHFFTtcvW5SMt6jTu",
  "key3": "66D5BrgCgCeWyx3mWswVLWmWeTYMiCZqUkgqu3n2fMQqKCS1877CWcN69exVvCAYWL6Bx39r83T7CJiBYVHouJzP",
  "key4": "XArYpPcjjbjbSSLYz7Pi52kdW4xH96nX7iQhrUpcKeRYYpDA5XSpwpgQAqsBFe75Z35TuYBPG15mBV5aV29zy1g",
  "key5": "4m3sVAGdcGF3DZaMY5DtknU7PyL73kGkxoKs8yq81Pz8RfFmHP4Sqo5qH4JcFCDcR7pKhZ7z4WhKRJM1JhW8cdwq",
  "key6": "s4PbDzpcbFRhkKonUnr6KTjUvxHmnACuZZVTFvdd4vdTYTBih9XwX12Ki6ntLzeXH9d4JAQ5E4B4WNJ19yvo8M7",
  "key7": "4Xk7wLPv14mji2EdLH4MtH5wCUGCCGWGDFZEqqYWjVuTqq2J9yrjAN4GDwLybchLxeWKYD3EdJfFfZELa7u41v2Y",
  "key8": "iRhxBEP89gGawppPLrSiwVbJmctVnq6eSVerdXjERLK5m9891qUZH3XDKDMf11rSWp2vJvJ7kS82ebZkrDtHaj9",
  "key9": "4m2hR26AZVVozYy5j1dhszwvYqWg1XJ5p6S5uvret61eDPtxkzMSu3C9hppaL3ddQo3C7mV4QsRWyD9WTbkWGsSB",
  "key10": "3jfJMCL9iJkN6sfkuzsNuYsoknuy1fx8dJ9hQTmfRdVhNvZuALeAfrRworFdFrkB9WsA8S4Rnb87cmWvofPMitfW",
  "key11": "3b6LhWneLRw2VXfrqJYofmPjCCvM3UaUQBY1PX4tUw325axRHKZUi8pAAFSVhRQ9i7qvyY8sDeFT4731xe8XpRHR",
  "key12": "2qAbAdYvcwuNyhk8GKk1HQwZkSiJvkB2cfxk58TevkjtaWSzX8MTxh6ZNjjGfBXuzScagbacY3SmLwdzKFAgomVT",
  "key13": "2rSePYSmxDEd1c2ShD786TxpfD1Mrkj1P6ecotMzCp8fEbZsQM8b7ynawE3AJTTLnqEUfJWsNejiGepbaLqZvRYw",
  "key14": "5H9kCnjiQFGS4Hm8ChA6zeXBu84d5pdUdTpwsY9rwhvt2kzUWeLJQRCLbw6JiWn1m3WdvKUKUjEaTBp3TyrsgmB5",
  "key15": "5hz9NytW1HgroX5L27ds52EPHDFNEWuMdRF6VeXYkiu9mZt2NuwtneDcEVXHDLN4czeZuKugpW1Pkqfsvm5xfuw1",
  "key16": "2P3kkTf6GopCCZXit5xmVNnKiTxiBViyZ3xQtyQPjjWzswDZ11SUQsbfC3iddfKR14mqooav1ZGg9r81yjdc81E5",
  "key17": "42YwFkf7Cyq1TGK8UH2GGsEPaf2LUmxsG7Q51xYVw7HcSnpxonKUFTwR6C7572SMtrk2i8Zfo4VHk9nvsShSS4A8",
  "key18": "21ghzjFD4SkoVBMrM6nVkJD2Qf7q1v9WKjLXqZ7o2BKom8bNwQeZTRbpyWL1AvQs24g7KtyMDpeqFs7G8RSdhfjQ",
  "key19": "3evfA8LnkVSkjS9PBBfn55fbGCmh6SffyxbE6qHgNGN7aeUHfevPjb2WWQHMSmUTKHEC8k11uDmPvFK51Aw4Yxdg",
  "key20": "MzSSLyk64yiTjw8XWXHsWt5qpqSfWEy9fNezfYhgRgADyStRXuDGEV1GGxvp3PBHtsxD7Dnb75YA68LfNnn7Wq1",
  "key21": "5XkdwQueP3a1agoTTaJ6UHHC49Lwbg7KuXzTeQsom7QTbZuY3eRASzQew82p4MxdBmQFoozkYST1AyubB4mLqBZQ",
  "key22": "5vQyrmym3zUMkE5uCVAAnraEVMSD5SyRFZxmkQn4FYUpfm9g5dmUqjT8rGAPCHiFmWMjY2g27Mym9ha9b6GyH6Np",
  "key23": "41qCGZMSpGdQnAaGL2n1H73WSmgPW5p2o34SJ1j2WqFHYDJcYyePk5SupUCE4aLd39k2wFZmSCBoN6gZLbWiFMpp",
  "key24": "5jUU3SqU4sh9sY9pqR1rDy6UEMZ7XvkM8n2JwjP9ZFd1Ku51oYVBZ7w1cPhwkePJjTvWrw3YwLPJCLuFrK6FkRrs",
  "key25": "4nJ6CgPYqK8Q7ZyzhHXAKr5GkH2UimmTEVhos4vEg5hFPa9x3UWSndVEzfpsaYqCSPMcENDZGpoLEaY9GaRspBv8",
  "key26": "xoeTRPVW6P7hES34Sdzx2jbJBiFCE1Z2J3pyhdHs13VJ7WrEQc25eo8QYNB7SsrVe4rTTnidCS2w7swJVLUJdko",
  "key27": "3mJBnoDS5tFVth99cDdFwjr8nNPkQonvdN9jPQgd3QDbvbJypAg3iPVLxpPUmqSk2FgewH3AuN6zohbEHbdnT9E6",
  "key28": "5Uo1VAJDCE1okfH3GpqSPCsvu6ozVsn6JdpPwkjnyqjh7FUxT9nN315kT3TxJCTnRVaRCDZhtyahaEs6h9cJfuug",
  "key29": "3htgXcN6dviQcMyJwcUCFTNhb1ivQzHXPY7bVPb8hAsfxSDTEoDTn11b5SgHhePtTxXwUuqp9c3A2aCd2wHA6F4p",
  "key30": "5s33Uak65ZonaBazCZFB7dee55iqTAbbtNWhBBinTLtgqkgnuRqQnvPEmHhMcsj82RfLodAA4Wh6Vvfkm8kXJiK6",
  "key31": "2k14pe55kgfCQGHynPmFs18prRnmxZj8t1ERkcm1im1wX7DWxUKkhTr55AFHSVSokW4mUHn2KifzDf5oA3pVWb6E",
  "key32": "5q7wNif35ukffvaf8hNP1mHfZx6ezoociFrxTENhhmJN32reKo68bntTNY3R1AqZvVVswE3PCD2Y7kFttfDmbzQS",
  "key33": "5xUbxQM2Zt8ezZzWahpE6Qiidgqt2Rt8CzCjtbhroydVFsfbGrEvdJuLaSZJy1rCbK5qXvKCmLPPB5B6yimKdb1c",
  "key34": "5M8tJhLJMyPtzf4gVSr6hxBseYkKaZi6zkPFmqvNXxMSA5r3RPJ8XEHWo6a9cdQGzcWgi3dPcnaKsZeuBGA5n1UD",
  "key35": "4cysHMBu7Ar1MuhZkKn1MNYeRh4xosXWYsadpJwfMwhiQDqLtbKnLcRjAaKwRUsCoCrncXpF3QYTmVEoMQ84rZGj",
  "key36": "HrhZ5BZGVoDUNDme6zjc2Vms8y28yE9NpQyk8bJKcVJSrL3s9mCT4QmfDZFotEr2eynPmpa3hGFAA8a6gw8MQPX",
  "key37": "5n6qZKxopWBLRYduUj3Xf3ySBDNv94azHCtna8mFHY4e7AmwSyKgxPaJsvbL1SjEPfef48qjikAZVLNte2T7CjFP",
  "key38": "5Xwg96kXPsNqsgyT6HQJRjKJAiYPGn4P3mDcw69FwYoqzn1F5T1WQUR5PpdChuJBvb2i9XvaNyLfqTBrCibY1cEo",
  "key39": "4sQZc7zULRAHFc5xheBxPCAsrudKdy3KLAevP3H4ddcE7oKtreuzwgVCUTs2nwG9asn4ZhxhdF3L1GKCKPWmEr3g",
  "key40": "5G52VvUvqmg7SHfGNVCLwbLh5HLA5etGHhAAawKCSSG8A5ZQtUMqBKzzj8WJxardGBL6amH6iARu2ijK9jivmndL",
  "key41": "2s7QRM7x5RWM9V5YFpBRGNYDhSvR3cxTf4dsQzaPBArazYvSh8sqGSt1XGxzSjFSQNrUYmrufunHJF3drpkgJ5EQ",
  "key42": "2kJUVPvN4qLHPAjdUAHu2RSbaCXnh6WUUfFbfzytWoYf9V9tvksxmav3PgY8pZxkUF39jwtvTuMQakB4b4JnmayV",
  "key43": "5f9hwAKDVSRKyVzaxMwnTYjWKwKm6whPtKG1zTMKssaSwaHJrAFKuCqow4RJjhrx3MaGYWf5UsvMHwgLVrgHhQfe",
  "key44": "4vVP6e2Yj1A5qzKR6s2ZEUDRxGfmSzmbeBrsSvTNrYTca8reKNqoiTDFfVEcQQxJ7Uj5wCnc6BBcbdwHomT4zrY",
  "key45": "5zvzPjtCHMSyQkXydNH86AXVdd78GfxwR4X1nbW7YT8bRfeGsLCh2fQCVpMJ5FUgew75S4NPGVvW2aK6qNPj7yXv",
  "key46": "4V9hF4ZM58VF1kkmRyRBR4rgAy14VywBo6HkHuDZXhCE47tMoh2XTBhCryioNwNu2SD4zQU9XYvJqxnnoscZqHyT",
  "key47": "4eDwTpTQRAdVU2Jw5z3mZ7ARy5UV8oYWnBPtDYfQdFPtqu8b2ikv1scJBRFfccGxBWzYxtV9dS754MRHeiE6KPL7",
  "key48": "4aj9pbeYXvEEErBV1cHXyMFUBqZcJTXZ8NJ3sqFfns8ENuWzB1guvko73sHe1gPESczhMkaUrFZjGSggV9spkf5E",
  "key49": "4uK2FcmcDVcbek8g9S7UJfWgNKUUgN95c5QWbWweT94XLF1qdmgZY9pJL8bSmFbXLTezR9zcyWapess2upN4qKoQ"
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
