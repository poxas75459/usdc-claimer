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
    "5iJBgWsWgKhk4tXUYBNTj8uNZVSwtMCPUEbvsrG4FXcR5DCTCcxQAwuG1zDw7K1bgcmD9z33jKnRgW9ezvrCfhGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QGVghV5gx2UGyhWmVymtcHobueuJc9mruYboBJZvHfyEWTWYwbBjNgv6T7RZkomp4Q3ahsTj37C7LP9bD2rX2Pg",
  "key1": "59aMo6bNTRh8PA4nh9FLgX1x1LLv1aH6Sh2R125aKwtiJgeMXu9BwWcUomfAoqcRz7JWT85vDRxWHMsJSKQTp92p",
  "key2": "25Lk5RwSBphfLfPYiFEBGCoUeVajEjharAhLcc5F1tK1KxbsfFUeWnVymG1JfKCRjNRP93dEZyYUpk9MGMeakbBT",
  "key3": "67cTtso8tF1V4nbmhvj9XLXyWbjBPceF2a3QLx3DaBWFf9CRugzjCahG5DWmvBP6Jmt2nRPrV9TWVUKGaK3ZVVPM",
  "key4": "5Shw7LFvGcUMb1wWWg6a64jXrk5ZXjTxsciWTrDQQH8HLhUqj2usnjxRbTjhwukfTJornBnxt1qMgGE7PCRoiThR",
  "key5": "4tNuAsNaUYf5nMz1wccPowh5PGotBi1WUZ6XgzABQnnQPrUhNM25L6sZtZmoRe7UKKaxHWrgDVXb45bwcHoLSeZ3",
  "key6": "3ywHexUKRXf2czJE2jRbvcBwJLz31bJ5un6iNg61DjDiHzGBYgpcDjQ2uG78cCtEHcFoPL8dfCSzcPKW4NrzG8oC",
  "key7": "66rncy6BMjp16swjZe8mFYZNYCf1Ai4jiyrbRdTBh2mDycZosEx2iRxTc4WAidCcvfk5NDhknzRgYkX2JBvGePkz",
  "key8": "KJVccAue31k9jdmMvjc2s9bUzdpY6waPD7gpZF7zckS3GUBcMQHUHc5UJs1m6oe8rR2i4oPc8t37Jamub7eCR1B",
  "key9": "2dVH3Y2h2qKbAbUb3ZHHf1EQPnpqFcD8Kra3bohAR4DfoFfejTKbgTjBuHXP3VG15Ni2DuAV52F8QYynNtPpEKPM",
  "key10": "54uJaZjjjZyi8D4s1qJVwwhurdDUbXP4AhpjKCvXAP5DQz9uz6vawBdvMQdBHXZfMX8Jn8WWjNUEVbzYwZaUazRa",
  "key11": "U2dtWr6UeL91GgDtBgEoxVCFsEg7kU83oRoo2QeW1n51nL4UJYw4ueSUo1owTZxhw661XrEPn2m54eetKfPUUuj",
  "key12": "3e5AxpWJMdRrtLj3tZtyWJX5pgqFrCkhycQKStAdev6gvTKawew2qrREuEfso3dxGstdrrjowgUdPp8U7ZnuLrqr",
  "key13": "645YPTxeUGBUQSkPkLTZhLfPoaFm19fAf6CuVgTFr1nG2CAdPynzLwRi2kN57L8W6viKXxYHsiXcQX8Y2VB3xc1B",
  "key14": "3FczdKjacCdBvFvuUALrjy6xEPkWcnjjQdPw2JkbPSih2ef73usbK7PCnhcqXUXw54kLgendiSQ7DKBD6Su5yUvU",
  "key15": "5MxAdoJYDksgP1uYL14odmM8EdcrugXEvHswswaiuUJ3jRjro5Ly23qBuT2wLyjC2Bazj1xoxqb7AK1CpsLNk9FU",
  "key16": "5EA79XgM2YbjDfmmUQqb6kqVNGu5fEr2GSx4ZrAy6qqA9nvr6pHV5wNNquwazTSEYiN7wPGcnHPRCHv2fQGqQpiM",
  "key17": "KPjT7dwdZZrPwJgyvfTPG1dEAPT7zq3x1SEPLC6xHEuJ8ABtWXd74nPQSPVVRa3G3SQhX1JEfSUpF87si8dwoti",
  "key18": "2FuTjSiNJncMo2f4NUXcaETdLcsQLs9Wx321R5npmikYbS9A5KrBhyK7pAXmvut8cEAmXras7pFDAobqVNfZ5gBZ",
  "key19": "5JgrNRmYbTGBt44aen8arHopr8sWMFxbmfsoRjp9s1B5XZX8TUAe8TsvjBAs39cx8PD67h4d9d2iSKvNam5mFmq1",
  "key20": "3VSTx6uVfZjqWQ3haMthuQYy96inJyZtwZfQr8WuRMhSKEhDt1cAK6W72yfuY4VcaADz44vbuQKuNna42JjsAcJL",
  "key21": "2zkYxHHwuuGVCzgqDGywqZADZHu8akt5afUzV3PQ8Q5iFpxaV942zoAmu8TabNaDP8YzZ2DV2BkDVngtRvTiMKRH",
  "key22": "4g3GRemKH5Et3dMJytc1xBujfYCoNTr6kpTvUq2B2UNUeEynxEtnDq92kze4HEpvc4MxHYdmCrA4xpDTUF6bpYJe",
  "key23": "2uKXJW75WkMyjhQUubQcqs4w5iF7T1XeZCKTaFTrg6sBiXMFHz5HcQTmRAq2xN4GVji8dn7nz3VaezVWDwQJZztz",
  "key24": "egPUaz5VYjL32hd1iDz8Q9RBjb8gb6rgMEuZ3GYEitXPy5Cua6yrAuZE11ANcbF2dXpTNm2QV1F423US3FmMMju",
  "key25": "5QZQvFenKgev6upUtFWa5cTKsgBGAvYSLJcXaT5bwy9X77J2sR47mx3QxjaSftVpzDwFvYrDYZY4YKxeNg3jCwoP",
  "key26": "4auPBGDcnpcTStkbpRzCou1HFaGzp1u58EDDB47k1bqkk5SwiSCEe2F3WyruH5r5fbLPq31vi5oZoGV4VFcr71vU",
  "key27": "2Q4kCJjtjG4gQSpoCtf1uzi1anntGdsq3NKoCLNfpPhgaz45QiM2E34EEp5vZ5uBntH5BSifoyMguD6bKYBc5jLo",
  "key28": "JTQvnMd8KDJ8RrzxeCHiXRjVBFCuLQvGatWYJfY7yNXKta3iPwoKL5qwk7CNFdhBYaLmqL3WkW2WfMqterb6FLi",
  "key29": "2WTH3sooEbUNbUmTen1hmjKAVR5NRjqsumsEi5YE8yXpG95jsN4Z3H4bc6FxhDbJ6AVM9PogZi2UPJR4VPtGYzVB",
  "key30": "DNFjWGBst9uyB4uTMfgJoTeu29zrB3DGx46TvpeXKAPwywbvKYETTyffMyXP8GTBEQdYQCfoC3LTbrzgmGW2ACC",
  "key31": "5tLdoGX359ead4YzTMkr3unHGEJqDzW2msNEhBftsHenKsa27a5iLzaXm2ectLgUeVdWQoKGGNXQiErxA14wmHWP",
  "key32": "4BMcjW3nSV6Wugk97YRfdsrjvfGukDQem5m4w3mEEXNaZwFoXAPfVUAQNSGgoUTUkdkU8oaCQpEXo923fFHrCwF1",
  "key33": "2xV6QJLV2PFNJt5N1WuSBnRRQhEW67vbHzspBji9YJGGdQsBAh1qHUdGP5XprAxCSKEwb2gqPGfgojMCkBL5sryP",
  "key34": "4qbL4SzBnNneoNcQAdsbbiXGp9FSQvCQHbhvLj1e9xwKwXMCbbkvhUi3RUqQxza21mu1R9ExzjoZgtVJmujBS2Zp",
  "key35": "21cZ5VGvQ9ohCjiLK5cvm4HN1mUtBAGwddn9bZ1JtBiLsJdDFekLtTZfKKL9gMSuy5XbsHY9NAuviEpmYmsPG2yn",
  "key36": "wQ2xyKjSCj5j5fquVA4Qx4XyMpFE2TkD3VgGmV1T1MQFL7uov5LcW74RqLEsL1rf9moeN31xHDggaRU3YHnXuLB",
  "key37": "3EfuJh2SYsvMNf6ma9qtBHG5eMq8hXEE3nQzWSPxeRiKQgCrZ4sxGvCx1Bv1poZjyxnUjB3CNt2QfPhVmsjDv7Km",
  "key38": "AHAaVtJbCagLrr46Bq9duNVAGVgaHZjdcfzAYuXzMmBM9DaQkUKKktX5U7jrL1fDyAgGHR7732SRF3PDQVkBLNo",
  "key39": "58a8AMzpZTcomdwP7Ld7oQr56CWVTXERomgpjFi4bTCjHPsWyRp1gJS6hnmpe4YWJt7Mg758kmewmngNt3hyH1h3",
  "key40": "28JbbHbwoop4AjLrELXvebvb5bApuBehM6waux6WXWitcJbBdx6RS9r8w4UmWrhsPSKTV8RZZND4GzRppBKTfdXJ",
  "key41": "4UAU1KwbVuLCCxdqfJYpAtAHaqX1Qx6vcqLtwGq8MchMofdafeqmjZyb84weay3kedMkzAQck6rULNNwkRzQcKTQ",
  "key42": "nHqP5rsHk75G7uxZ4ovWHDWesyrLL2M8tqTGW2Aw4ZzYNVUP9WkuQEhQGK3LqqpMCg1pxf4RqAa1F4xqNPcU4X9"
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
