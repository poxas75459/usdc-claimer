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
    "518b7riGp5ptJ61ia1qRU9FoM52LxZRvbGjmbm4cNhjqSVj2utEtF4iqP4yA2dtNGYYPQyRbvZfmpazweKLd18s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iMWaofHNUVKySiXvcJEGgCyYh9uoHPvs88Q9k5piGHg7DqB8ADeVbepKFfUbroYkk8nKNrR2fdLftJJfKPCQ3yz",
  "key1": "5DJ2RXg71FrFrfmhVE7AaGSdxgS4nMQ1zYK6WeDp7n7wXhFNMWt3ycvcW79rEu2S1xuiu7XycQ7GZMU5wEXEa7N5",
  "key2": "2CmSkegncbDBXNaMw1SJzw8X9uaUvEKnUjz58SzrubSgCfqDRRRwTKc36KQ9N8VgKMorGLosez8c7QjDQ3JPw1PZ",
  "key3": "5cjKg7hMVYJA2Wth1143JWuCXx8oqNiLzjo8CcQLScstz1DDc2Sq2svV5gAXKfZKYt4b5Y8N28DcT3S3z28GSa8v",
  "key4": "4bYHtAmHwAFsTdoAmQeTQim4JtkSmBVG9xeeg3qVA1FKTsGueHScvG8GkbgaFfKXjUBnADWQJT8Cvcg7PSVJ3eUb",
  "key5": "5K3GjPae7Sbo3wyaMeGWWiFTUGoxSrNcsHufkxvfPPCjhM2tc4kdeSvtqinL5gWTMNJfjxWBXpVvGSVUj3gnUcK5",
  "key6": "5s2eov4U1mzoe48ZsLjpEkucCTa3kMVKrSuMmkTPwv3meF76B6ubrqu9a2kTfTvaQQHzPMzv7fCymjk3QxDJFaun",
  "key7": "43pdZSnsYHTLe7ZFDEv7f2HTuqg5H5DNQ5DF2mvA88cVpBb2ecD5njRJXAEVcnB8KQU3pWJqBVdxGEyyQ1MCy8Ah",
  "key8": "3DADcDWoK2Xfg1Qzz6EVagTewzTYcgQp9xPP4xtUmNzc1kFDCuR71NSNMceEpXjU2h1xFRSZEoKAwoE9orkBSysH",
  "key9": "3aBoHWyn4MdMfvEBvsCBbRf6ChTP1joqtJLKyo9GbmWLtKC8s1PDF9SB9h5iehdsgefv74PxRs4ewz83nySfzTyU",
  "key10": "zhTqxfDEjn8jE6qPcGn7iMJksfaVrx22MQrq3P2EQ1cMcnK4GfxVoC9QaRk6QoKcisiZq8mNHyMWbjPcrxUZUi7",
  "key11": "3kZiwBnvFuN6dNBfnmFnVUwS38onUx1bQDToKmidNRXfKzecgmrPZ5nYjmezdTZrE8buyGY2iNqRciWqP8CxwcmP",
  "key12": "54tcaQhXNZRDK8cD2x6dmk6LctZK2JTNZPbmdzSTzjcf1SKF7BZbKRHTfxtvZLqLywZmkqy1Ym3V8tckjK45XaWg",
  "key13": "4QJDifYhFqKotAME4BFYPPan24EJqcKWNLa1iofjcZSfSYCUFCnLBCroew8fDdQjJt31tDZCgUj91CehFtYMLhtf",
  "key14": "293bvWnw7BCJ4JdMQWJ3ZpNHpb4dE2uhr2rZw4P3QF6HFZa1B8RHwiDXeDeMVU2paARsmd1Ut57aDMkckdoFqqkq",
  "key15": "5BQPefxVmx5QEMsbiNiAhTtBTDkMv2qpoQgUQcnm412s3ZcjFXP7YT4rHDX9gyM1oeNNpWkNWmSNs4XcpiXqjP7",
  "key16": "3pkTzY4w2PHcVQvR4CDwVKJQ9HoGYmrksYCoraYfugfZRsLCMuRJdT7ShcYaLTtYmeWrFuwHWubuh5afXAbYnHAR",
  "key17": "uNeXCLhjB9KKXjR2D8bfRprveNSfmbWxdoGGwrbybTkh74We2QrtGjoKfXakmVbaWibS8o3pMQ8mXQR6XttVK4C",
  "key18": "63SWxkaZAmWfyvwgmF6ur38xVCXLTfU5L6NGFMYSgmbktU3pn4qh5kkpy2bVG6phrihJ3Zu3fjxntcDKbAHwrqLq",
  "key19": "2GwqhPPRN2ANYRBNfZSJvKJHgSUGDLA1sYf4x7KLuo4sXcv4oEvLdCoPPNqwuxQbwTpdnArJDjvEM1rquyUgefTj",
  "key20": "5fEhU8cxy2ou88rS6yYWbtaRJByxbnmb17WzP1nFkSRP8vFKKQger7T4UCTrhJT6pqtfhEz18CmJS65hgo5E7xVp",
  "key21": "215sZhPijqntJU4MnVk59qerzFmSLfQpc4g9g8Qwb7gDrukJr4VF4E8WXFBdBNAtrXXLo4Wmkw2zQMhkoq3w18pM",
  "key22": "4nGc9ZTULjijb6oKMKtkVFp47qAshnvx3qg4cwgh5yxosjFX7Xb2KsWVF6YtyZ9q56Vy4ntNHSVgPK1WRphmyvSF",
  "key23": "4DRF1NtCBPff6aiqi4DeySZXcXVTpnxQWkX3EAYiroqwrv9LBbnQSVzeFS4Lt16UYwfU62PRjRorUWskwep13qRx",
  "key24": "5L8uKWBDbjKum6T3rh7vavhnijieD5AHT9QvfqVDh6GSDMwvyodgpH8pbn9Gu9rz3E1hWVM5knBeU1o3hrBy9KQ3",
  "key25": "5bvxrNUWi2tud4XntqxBctFUUypgqVr2VSdHg1giRrwio7JT4reP1uZXVGHeXhTKSPbYk4YJKP9Uc82d4vB3aCdU",
  "key26": "4fB5uw2C6mF85zTDc9uBKFduppJpZfqBNz9eh6hX3uLaaRdhciBSUUBKarpnkxRhsN73FK32GLwEp88hU1GUqdvD",
  "key27": "4cEgcTGLfHc4vHkVvXxnf4mRNo1ptGRCwDYwPf3feUi1LojiXB18p8a1P8jf61yk2LerqVoemtNRPPbTQ21J1oaf",
  "key28": "2USJNpEuDf6WCBw6sBdDVcqCkd6u61WncuyNAnGXZbRESFAdAMo7Ug8ratUZ6RasNHf3C38kymNX8uToJJENgvvi",
  "key29": "3Jm2nbpQW7noJ1356RyfCPLm1GDzPfkbLjdyr8tVAWsmJncvsyMgmYfEpY59cQXnCWVsWbT6G9pTXUBpTUv2vc5s",
  "key30": "3mBj2zSXwPdj32UBASHNzbuzYEyDLfY51A48KgQNetuWQNdAwgbhsCSmADbmTZ53T94W3ShsYiRPx5dYfTq6Xbbr",
  "key31": "5TJR2aAmzeXgWdjgdHo82zHtDf24LHmQMWQAxLJ4YPNqWUCnDm5uKoK6MXVD5C3rb71sqWHcSTwMJXw1UND87tya",
  "key32": "3n1YZUPcwRkxxXxCGGwjfaRV3i5bPTo7D3ayqm55j3zo9p2hXyMyfD6DazXUnutr65Wkyt3g6eaNfqya8AkysW4v",
  "key33": "5P86sryjswASatiZVGmuCpqiqA4W6MmQqwgzZ67zoXw7iUz4EM5W6shAGnLYpS96sRoRJVonbHizqNLwp9hKWtEf",
  "key34": "556vHJZh7aUpMmqjchhYUb9yh8ov5DfAhg2dYDcwenyMi7S3MYbKtcwmeUH6z6nzzr837WF2SxZyDjUyr8ULBzDk",
  "key35": "3SB1QefZBRYJco6A9Z1Zv3uMgk3RTZJhxtaeLKE3LyhW5B4t1sT8Jpy4KVEcpWqAgQBwhS5aGnQUWgJfqCWfGzN3",
  "key36": "4gwqoMWA2U17rNmXpc4G9TFPaerDxAvowg81G5BDiV3m7ma3nZQLnNs5xgAzcEkBBwzuvxVGKEhiauM6JJXyPuHw",
  "key37": "3RCKN9Ry4S52ABHzbb1s21kvbWtgL2tg6dwRXgDaLLseqhjthnCwAyKudoaQB499tjmzNG9xuCYsM5aq4FRnuYDL",
  "key38": "4449ZDCdGT5fvrTpHqXkxGDoZAPnDkG7fnBLNXHcmDZ2huuc82TKKx7Tn6Qjeo7DeTo1mE4ph4t2RwLQQHo1df2s",
  "key39": "2UukksY2t27KeE2Uky4zdDg5cWFG6GwiWCKBgwwzURf5uJ9ApNqcYr4B3vXUjYqp2xGqoEGVDMtDhXH7ieXA7ouX",
  "key40": "5vPoUnVdPUAFiNEZMCwvsKPyLfHP7Sqk5KTuytQJeDFGH5KJLZGdib76nGXt4u3Eb5NpSX2axETe7K3TnyE13nkj",
  "key41": "3vNiuAgB4DdH9v1XpoXPQXmCbehoC8Nj2DRkPV1sNSGAiVcGd79gKZrru5akBDx188f1MtvSBXvDLFpLT8egudJv",
  "key42": "MM3HvpPj5tQaDKiNooRiMKFMV5mryHRRjM4D2JFq9sMCvjMDrzB3xU2cHTjGgqGwMx5Yw4U599Zb9y5oCHcQxoc",
  "key43": "276xbMoZ3Z5sxCV8sX9KmAkoka1kmU9urumVG6wPa157xQUke5Nry91CQ8DtpVSpNmLbGnw4vexNjGSpLWVJTsDK",
  "key44": "2WnVphwW6f2e2um4QVKtPMjj9rQii2bs7eNKgSvseybeXwhm6A37bhcqXhRvsYqxKB7Cqe5gpbZGatWwpuw6YMGc",
  "key45": "QLocTpmDi2Yjgtr23o24wWmxo6GDC9R6fkCK2vcPnKg5Y4b9modnS1WiYdQYyVSHjyrjfE4cJF8g4Ui7qURueUD",
  "key46": "2Ah6M9d2dyaiSzvHQy38pxUUYU8qU2JTvVwBVzEYUN91rQVCe731EyCf7RzJNRyFGB7Yp9N8XPkUGAB9VXEQaG9M",
  "key47": "2bzKnf2BWHQWY61kmuSSGkcTsc9Pp1vDnKbGGGTGPXqak31RbPu9KsciQbAph4hWBDhJTDYfZVC3Z3Shjequ4SLQ",
  "key48": "5WJyKeCxXUhXsSeJ12b6FNozPbgncy644B4x48j9XJYdB7vVix6ty71NKd5Wm9v9uc7MG2juwejfKJ3BABHyTGWZ"
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
