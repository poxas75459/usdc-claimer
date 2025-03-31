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
    "HPW3RZx3UxegNu7LCHNWicdXfzKu4xMpV32MhpLYbTWa1yLKDqtWFMFZvMrcaX2UGbfgY6CWmTf5oE4EF8uPdou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f51AQyvHuEc1MhqZ9YxVndeScMq973jt97AD5gvhPc5QJS2qpWR8m5agHVvvz5M8zDSoSe4t6qvKFtchFRzcdAi",
  "key1": "22Bn2i6YLN5ooHM1deXyvZF8PbCS2xmiTu1kugnwxaHBPvxUwtFqzbxZ1sWqGYYTtxbcRnJLLKyrstSEGu5rEoUt",
  "key2": "5NLCNFB7YNGpL53NGdugUmb4Z4xnCVz1fcnyZkdm9hKhdjJ4UiK46gJGiFeCdRJMLuw7divPzVwvLDczcE9s8ph8",
  "key3": "3jax6U3cSPk35qGhWdX4dSqJLQe1zZerzqakJBw3GcjTw3k5NZqcZeyqePiGUp9mfiM8DpUJgQmEHXXaxzdruLr8",
  "key4": "huo8yMFqAyreu77Kkm3EYC9ke9AJCzGhKA4BaQh9ibV31PeFPE32iz57Eumu2tg4WJHipGuDTVXicUXmabM2e6Z",
  "key5": "5v2rEZcqQs3c9mpUjEKwe7n9n4E8cHNeQhUFaswRukN77XApze7PiaDpNoerHjmJNrmFQGnZdcfo8jqrz1jzwTyt",
  "key6": "3Ywc2db28CdpUhGTLbbRFpyLqsVequXqRU75wm5KWT9g4ChbrpZwjzZx4QGCYdomptVk2ehFjY6ppWhXK2Fo1ck8",
  "key7": "xHzH48cJ8LKWzsfzCrJUn8xjjR7bnSgM5x5CJWuFQzKkpLEm9VbxguqGc94WFJBh1XgRcKAitwpZtSdrQCqhrri",
  "key8": "2RcJG3aqZeMN5393pnB3aDsQtNzrrwPv23ZTZHxFttpFi1xqBwpqN7cPWbLwi8syhZ6VqVNJC1wvqXYHdNrERHtz",
  "key9": "1nvc3TAMwncEf1xcQaaetbH4fCtCfuxg5yFEZ38R84nMw1cw1Qf7oiZBPEthtY1X2rk2DCeNodGgSUtY9bxTgiB",
  "key10": "yUjQRV8XSgXLAB1EhKRDnd3fFWVTwQroemXJ77sFdvgHe9uvJUAbuReEhGZMQbxd4aBks2qf5kwaVZeUrWvRXHW",
  "key11": "KPQCQsvHK3anr8AtB7iiLEHvm8szykP9PKVyo6CUNxtnWC9YFuzx9i1Tdpzbwhzd5ZBGvNutDc6XniB7UoSSzdB",
  "key12": "2v3BJs6SXnUnfjSfyt61oD2uQWWxNdXHNRGaFgvNt3AQcCYkMM4oKjFPt74Vi82inktM6ubSy7Q6FzfbH6U1WQLG",
  "key13": "6Zme9BX2dTVxLqmkKV2d3V2fWY4B6rt8YFDUnp5MsfscNzghRTiH6fxgcyCLRK6VCMwJLEsuNRBc2WTcARKRgLG",
  "key14": "55Bbeesy9NRqyD2KdBzhE7RYKepFihxAxJCRwnhQM3kwmK8C53QcDa6WPbCPeHS9GH4ZqEcQxArSZZwtA13rhu5d",
  "key15": "CSw3YfGhc2kkVxNbdaFRd4ZAi4f8RAYTrtNtbpxho7D8f7fobxrP5m9Db8obUA2Uz22fx5Q9M5juyisBo2WZR8z",
  "key16": "3ZVE3N2CrTy3p5puW1XwHPFHHKLJyvVGze949LHYY75GreFESAbxTiTZT7Pp3F5cfj75NkkYg8ovMNikomyBaPQn",
  "key17": "X1XqFyihQnSCLon3Stn7tT8QcYjdy1LrV6Dit9mnyQR3NzVcoaP61UtXeCvKd7eKmM3kFLjx1Nbn3ppsGaewynY",
  "key18": "33ECbveHx9b7HrA2k6NEhfKPR4AzESJxLiP3rpTd3sJgANMGdawrQwPW4FNDCogHDrS6xLjxNEByzvw7regManz5",
  "key19": "63J8o4NVfWorjzKBNxgYzBqXEMsQhQbSUBMRoh6EazZ4DuZWahpUzUeYfmbAGv5p2Cb2j1V82kH4KYKPDV5M4o5w",
  "key20": "3c88nqCpsdbiQ8waVqLGo5C5VHnjgZHeqFnufSdTzqZroXHPQJsEmdEje8QyLofM8z1AhA7TVgsN3ytBvfR28Qd1",
  "key21": "5nv18rJB46oap1BXb54JweU81ndenTPBi9TP5MwLW1AHucaAwK9a5SwRaGYgHavGbztJ3kAnhfeJfQUMip6q9Mrs",
  "key22": "5gBfFWNz3yFxuwdUkV5tgSuDA2kNZV4pvtWMYykq8zSm2XpPq5rjtNqziXetNSzHERC5UBzr8NWVUXFaf5KX4v5j",
  "key23": "3BPP7xWUK3G6MiUAD5XTEpc4GgJJeyHAdt1S2do6GxqcdQR7fkCB7FaPVHvBVbmm7RnrMVRcNUWQJQMW4dhQcPb7",
  "key24": "kzob5GhdqbmAqEXpKDJLs58SZ97Mb4jTXG8cuHVQn6GProM3yNVq54zvM2ekAZ9np1ggWkCzhcTRPUNLDYHU7LB",
  "key25": "2PwztrRanv7SYHsmdTg9cq2PbsjeLjmtMDjEBZv5MLD6WGx2fDiAmufeQL4HQyCNS8q89Fm5SmDJKRhChAzLLeCU",
  "key26": "5cXhszyEX12UUYGitxkMB7j9tBCUjPtAkamkUmQahsWKNWUNRMUKtvimpBPJV5FLeV5fZUAngyuKsJ628Ug4VJdM",
  "key27": "35tzwnML9dyBoihAVM96cUiuonbvEdDzXtv81gwREwqwZzpZveooSZ5b215e92CZyXszpe15mkUhiKmRR2nPrZpv",
  "key28": "3LCwj5XFjxAJrUVq7eMndZ8dH7VLkaXf6SfCyGrQNXW1GNe4LcpX6RQ9wBiLXLQASsX1DdxCXqAzfWBpwPht8P5g",
  "key29": "TvNhMMWEWfn7NWWtfrLYXRZo629bMqQDyuyVzKRPQx1jtny2sQgmVoFrrVCkeXCi8TkpUqaAChEzJuvGHk9jACc",
  "key30": "5extoua6bPMnn8mfJMsNwEwsWb4T8gqYLREMDphApKcf9YLGFV5YjHV6qgh6y9A6C264RV42es5cHXcCeFpiPK2E",
  "key31": "3961AkiP6ihP4XYDtFQ9zN3pHoR2wLxDPnvBAVLTN4Dc6GjymFYknpegVoForLbqND8sZ6hfDBTWykmFrbCbjw1g",
  "key32": "63UFtw4EQMCbrDjNZUosACuk1DGJV5qY5nfD4jSmJ3gDh8DsYUm831o2t5SoPoMBU5kd1Q7ZeVHViAELshswBwKp",
  "key33": "63fjrdBcYbNMnGnQt39DhfG96MAyotKiwyDXg4oPtbS3JbVVYjmf53afFeYxdNe2fHsAfToLZ5VZaXVVgVLxQtQ7",
  "key34": "X8VEwvZ2nufGmXY13eafKvJ69ED8Rz3bsMqusub67KtPYfe37tyGjJ9BgiVyL9EqH8W3qUY4SEUEV9k15hbgAFD",
  "key35": "38nu9yBNGzDNQHZRwotgxMH8Q1S5SNrfby4uZC8jNMiePx2DM3HtpidNqSCUCKNtHDBxpko4THEsR6YEya4qsWv3",
  "key36": "sqb8dsCFTSJip2xHeNpbT8fFchDLtmp2T8pRR1sg8mjeBNDBbHxeerhCTJnwo3sBTJfiL88FEeXvW33Tr8DFpRc",
  "key37": "4vt5C1cMN8qrcp7MdjaEwuAEZAPuFSyFDRdt7jUki8bdbG2aBXSi4s85StWYZVyCKV3cCPE4h4niwcL3Gz7Ytiif",
  "key38": "4gF4KRajQqCagULuJFTq93hzdG8xAwfPquFehbkvxmvFTk2ZMDNQXiFDaVUnyidXe8sURu2TrhFMZL26ijeBaaJG"
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
