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
    "4rRW9rYhSMJ6SLAnLTbjkwy3jpjgQzzVt1Ngb6v36qziodSKo7GXsrmPJ2PQxzfADmQuVaqEi6F4r9T8dx6uagNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "279MubJ4doMvXiecZvMq7nZwXHpB5jyEv4KraXoy2V1e49Dgbea4UGrBLPCsW5zXaFMADbQqc3jAW8osSKFhGkac",
  "key1": "4gUgmEUFtz5XaGkS1Qiye63UEfjzM37R22ERHUpmCdZyxS7aHsnS5MKjTehJqUnsYH51MkfDbkHf5nqPEUJjixsb",
  "key2": "2YrKeAY4ALZxEAbVpL6gAEAF7rdcmw2KnHQQPsGGzrZVSrBbQhLGXXkYxtnTcr92ep19peMsEz9ao6SwDC31HLrj",
  "key3": "42QXtU3GsYkvQFdxciSiRRibHmVJx3qXv6h7qdsgkSdh4KsLkAWJn4yDNuhTGgXgTsShHi5SyY36GC3dPrcHdR3p",
  "key4": "2wYiL24tL194v4waeUMTNXrdUPfSR6T3V9AiFBYaMUQKd27GvbHeXkh8GQHYJa1xP7juAFTc8SorN7Roakgs3JtV",
  "key5": "mHwxxQLJ4f5kVgXfRCLpYNVhUM7nBNJFDyetLpRCypL6Zqy9K2w72z2FhGg6zd7fCm6gymfH35gadEtr1wMa6tu",
  "key6": "3i5yFuavTZxJ7aTDsAEY58NrMrpCkvDtSfYLp6VvzEyYAKQeTSyN3h7tW6h4UHTRfW1knG2SL3BLav9mwQzoQGZi",
  "key7": "5isZuYZS2K1fS2SdNsgb4LZnuZdw2o5hXgyYz97f2kjjsNpbuFmdWodcHQ3dp11SPwSCVcZcmfqp5TRd4nWkkxHx",
  "key8": "mXsbxPLpYxwuoYMbcsrcXsNS7m9a8LFmCBUfy6vUwewQ7trQqQZaPBiZfhvHZEFn4hcVh1UETH26nkzsr69SC3Z",
  "key9": "JKPfrQwgrDeMD7g672QW1zE2zo6btfGmSyLUgrjM4FwuBLeg2zZRKYPq6NNx3JYC4DjGgJc9zMmhdhMWbN8T3yS",
  "key10": "3RFeshH4Lpi9qrc8XwBe1BT8rgbp2pn6oJdvmwmjGN6zVstD2rDDjTABVy8qkxtBhtydwxmu9tb7eCboExwskf4z",
  "key11": "3GxkdyJmHZPJhkMahwkV8Wcm8VoAYWErgqHiTHDhxgQSwH18FNEQTRoT7CMw4JCquviSBbjQcdDU1cmEqeGNmgci",
  "key12": "PNudZRfbE98po39cxycG32WqDPtNMdJYPx3zDwsUgyt5YUERVAgGUC7DCq4pPJSnMD1FaLe6uEkS3iaue18bSbk",
  "key13": "cXcMzswCt9D9N4Lfd7mVRvGc1efu3wHHZCyUsYXjSTiQR4XFyEzaudgTN8iNJp1RtxjN6gBWWF77dSZzCQsBxk1",
  "key14": "36angYDZx3pHDR5oqsNipySsufuUBbwpbD6NMTKSscnjppRaNuJNsydBFeQPjuA1KhGrRXpHJhJmMrc3PLYkfaDm",
  "key15": "3EribYvhxyKunU6Cd3qiuPu8U6ndMMECeQMsAYDxEb9gg4aJ25HSg1Fcn2dUsKsVWm3fLn1qNaemxZMEcVMjzcny",
  "key16": "27KapEqJiWWYEZPfmPdNaLvSNkFWjsoHFsSb4WK4JVQ4MB4Yw6BtUrrhJaUcZyncQW9dL6FYxQ2vhoqCx9qLWSEQ",
  "key17": "3BgSebX1P8ud77RJ6d1adwkrSSzA2wkF1kjtMd7egiZjnc4fLJ4BbEwVr4fVHdBCCJDvoQp5znH5bzJGZwo156uC",
  "key18": "38nSb4N7eiYTTf3vnTiN4gcC3R3fHZRGcDnKjoC8Zxpjg7wHEuubJxrq1M5C8aopvqoXbHZF4qDMhvs4GQmJeeL",
  "key19": "3ARnhiXtRyUP1HmSbHPAeYzDd4yampAQ3skHkR4xnqWsLHUbGu4paAmzyqrhJ8KhMAYQ5xgzoY9nsvKxc3Gs3UHH",
  "key20": "5WDf7FSVbgZZFRUwMWTUrTvLkSfsces4YiwcC79bTrDL9BZJP9EJyoF7VQfZcuKw5QTLgsAxMUqK7d3PMTWTnCRi",
  "key21": "4df9fHvoNJYgQASs1R7nxVLQnG7vwvadynmCmB157Nvk1vtyaoJpGQeqosh7FK7RZ9TUSAiRvkLE41BkDdotMRg5",
  "key22": "57Coh6f8h51eDqdxkZahXFAqBZextjK9dtP52Qg548fR3P8QkjbXAdYty3c8KCL9S7EFsqHjCB55MAH5ePz2iMhq",
  "key23": "t9f3DkfKBuwtwUR4tc1ZWo5HmNyjESKs9m87dgkurdQ7eHwPcXQM6bf73kymRAhjJRv8toB2jfHf5cEguigm7Ln",
  "key24": "BF1QmJYH9XXKxBMqLYRNRT5sLiJWf1GsjLWy8iZTwiMSYWRdpB2nCXyYCkMKJUJ4drt9LZgC2RaEc9MtUzYPphf",
  "key25": "41QCnCG77uFHTkvrt1p7v4ptD5a91YKMQRCwDa3KgDQUhD5FQ6u4kVDbJ6YhUFoBK5EqS4r9fN8wESkSQE9bp8mS",
  "key26": "2Y4HCUwKuEH6EvBWLmWzkiuV8uCvqSpsLUnAnBHrZdkfNKuB83VC64KW3cFtnMgWyGi7GZNzXMe7vqiuwjjcbUPq",
  "key27": "3cuJ4tQoWXpsyyWxCBmK8D31sKNeHearjgmTn6Dq8TztFSSpDvft7pxqEeo227YwakQhpv5JpMPeSunV2LPFBUmp",
  "key28": "8uxX7DLL3N4tA8aF6DF4pA9MhG1HHDmxKVkV8ot9LWDvEzLUyvdLrTXaGbVodWfMo5Xi5QS4zu2qwMPs7RM2d6L",
  "key29": "6t8wsRMv2wmvmEK8iY2NzDEwd98wt6NRT3KHp7GxqLC63UVnCw1d4ds7ocEKnsxurb8ZmrCiUSE29RN4wrAQPS4",
  "key30": "2bmpf8oUQoTqSK4oSpe7Au6MWjSviyEfArWRfxmsiJppHDhrGXH3HCVNTMzxSFax9VHToWFnMNDcfLcpTt142LiU",
  "key31": "2q5JZgiSEBhdQyC99j4fQm9E48EkrRHSjbofo9SsqMD4wFpzUvAWu6jtJ15m2te7no5Y9eLEz2Nc9FrezER3EL3F",
  "key32": "4Gdj8TNbFVyFe3MCmTBghaTMP18b2Wto8s3SvfzzM7mdD8DwSRDVeAcyJ3ey43Pqj3cgKKndwiPzT5qWSeV1RfN4",
  "key33": "4RDgmLh48YYVxNexYZkiuzZhvNkKv4B2Reyyf9nnyDTKpgTMVktVu7QeGBKDmfMuGMTViAeGwQXDnK4nDAX9aqAm",
  "key34": "241UYWKvf2wpBcpXR4kR4ouY1pCuEgRoWsCAUndSqPyDRuVSvEKJ6xh5G84Z139i72E2y2vtVmUiU5bPmS9zfr6g",
  "key35": "NN53XEy4T8VPv2bjE8VUcT3zpcjH1vGxKsiTvu1iH8kiFktmNBPHMUJS1DCtido7psDU9VLEDi1Mnbwk5gFKvwT",
  "key36": "267GcCDa7oJtkfn1iFgokgbk5pBYGNQm5edtSnDiTQ23hRdZ4UfG988Vfa7vqAGfREbkBdBM6xFTGvn8ZTCwhfL9"
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
