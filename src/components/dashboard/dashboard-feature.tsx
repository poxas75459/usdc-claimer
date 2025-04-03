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
    "45phqPB9V63FUqLQZQn7NRHhbUHo2E8zUuT63e6EvJ9ZskcznZPZVzFbk8W7Uuvj4iFZ2Tsz8NFGEvvr3fmZ5yLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NKj1nkJyjigFS8aTzzdb6zxB12HJsWxmo687XXms1QXtHx1VxBfvfygvEZNMhyqhqdtLmcQ6ebNTrEv4dAnZaNC",
  "key1": "2ZHeJ8R2VDxrb4onfuh68yVTkKbdjWsENQ7r4n1vFXgsuasmDLHyKKsMFe6q1SpETcxjmyU7uRHHPZyChyE3ZJpu",
  "key2": "2assnuDqyVu2oH4erCneubpxsJJ1VAZfqXbRMmLJmkpcMULxmi43GQ6JGVkv7sTzacGxjE88LqMp3DAvWhQm4DCg",
  "key3": "5mGNcxG6EiKDbfEfAJcjh7yHN2WeF1bJ8pQbkZGvtMrYFJSHpaFGF9VFZBUC1v7iW7Y8TEqScuJoXqsu9utRqpKh",
  "key4": "4iRcXbszb2JBihCysCQkvA2G3M4mexyve7KwjEzyq1um3EhDP1WvG2ssjnJVqLu1EnUTKzgvd7eekkMBLZyKtT3F",
  "key5": "26nL2pD6Gh4yjht77wvYuBUWqFvXq44CwMAkMcrcYUvWTxhVVjfdCqTccQPRiLKKDoQKDsnt4pE5ev61AA3crJPB",
  "key6": "2F2UnzAKnjC1uJVHVaGR62L6NToXXCU3tzcB1dwHV1LHSvDadbMt1TPvjyy8H2AQHNYkSFNuaXVgyn5VhGeg3vXY",
  "key7": "2pcL1yoeHvaBDomSBYdDoLs55njK5HtjU8Ao74eiEBCJ6z7sJb96h2EUknQv2w2bUyujjc6Lnpb4h747Bt5YC3AV",
  "key8": "3uXE8VBPR5hyw2k1FvW33xMmVtVA8xz8kT7D9WqGXf85EeAJ7P9Lr57KFUBTrm6VoAEDbTvTAuvm8QJPpxSD9REa",
  "key9": "jFNZEtpPm9uACveheAjuqpXd38tCDzfg3iRHsXz3pKDPrWDXo2aBCHDrzMpHhJKCRgJedM6WVvc7Hw5aYYEKyVh",
  "key10": "4HqkA3HoBr1WAZqbrr7qHABRTyZdQAJkMSonLXNRLSVRzd9yVoW4JfhNYUo5bFQXzUTGG8B8URbvu6WhUTRgiYTB",
  "key11": "5SN1pauF4ZUTGtvRr7aF57i3ybUsk2nnJyktw5ZGG5NU6y2k4SpFAZFrzYhqMqsmqKSGsMeTeo2T1fcaNh9A7Ack",
  "key12": "ct1phFZaLEwifZVhXQZ55i2f3NHkzNqjs1WskkEN5ZWV3PD2Kjqi31NEYPoH7Zm85x52kXmMppzmnU69p7fUGE7",
  "key13": "2s5dP8kAnyWwSqJvinwDf72sFLgWynnNEMEPowd3x1WpkxVGLLNjj4xmJnqQ2KfjSyy33MWFr2M6R9Rbkn4t6wfq",
  "key14": "46DXPRMpzs7MKkP7ftxNk71iXmND2UKHEQ9F8dAapcM2bBFYuThbjMQjoj4VxyGLpdCy6gXqhwQPNitdhJLSonzq",
  "key15": "4m2Pqmv4oQH4ZBftAYxZQ9MgZJn36adt1wSjKLiJsFv7ReaJeWWQnFATSQyr2Wq8jyUE31nM49EY2eXB9YoEYNcm",
  "key16": "38cDBenSnn5j2XZ3PgdA4kG9R7mkeyG7MX2NtsQEQCPhytwtLpftek3XvhLdvPTFHTCEeVPYxgvZcdhP3uMT14H7",
  "key17": "5jEDyn8mac9JRC42SGmJc11hgPbszdoRBYQtQ1bET3tNPkbjq5X5XWnLXyXxM5S7zWpsAmgzHuc56QNReGkR1PAZ",
  "key18": "2C1agRaFLsFBgzkp3zwxUfKvqb8mT5fedESQjL63ERZ8Btaz4zjp1yjpKqme1NRrM5TuJhHd7K8nxv1cZtkpruHk",
  "key19": "5fr8amZgsHG4jBFoXduUX19bgmxnQLxFoYJRwuLhPs2nWFYE9owVVT53AXPEhT2oUZc3Rbtzvo39oBP7VHNp6W3c",
  "key20": "58g3ssEBbTTXTSW2E1K3q6xNRBg4tJ1BVjm6tcrHMXfGg9Yo622dJDgyrS5ahjnHSopAhrTMVNrv4EP3oQdMkXLQ",
  "key21": "4Dm4DVmkKXiVGjJ2Kj5QZgcZgcfNrqY3rkAwuHWCyXJWRb2yTj7dsS2Vx2BqBch5mrUzCPeNmFUY8jaA2s9h6e4G",
  "key22": "3AeDL9AeEuBdcxAS3ZerXCsKMvS3biNneN4roZRp8EP5ATppQdXtBy9CY1tdWsazyEkXkBaHNA86652ZXCD1ayzh",
  "key23": "2BaCkhe8QvWPKPEfUMtpTrcG7eoxy5LMgrk4WzZEar68EaSZjJqK69ycDcN1VquaWWWzkjzJsZM5odZBaDhQDBum",
  "key24": "5JUNFze4m4UkSdy3dtRorrq1Zhc6RD7qLtobvE8sibArDPXKJ9jWqaJ4ftPDSdyDhEGUEH1hStALAn1wWozzcM4F",
  "key25": "L3sN169E7atdsLJDYvvx6mTU6RFiniDF5rLwXGqficjN1SGw1YLxVdKoZnw5uhPYBPuvCyx4SmtqiEWHq8zA53s",
  "key26": "26SAFdrjynS6YYi8PdW8MgFQ6P8mEBfU2ZVjMekje2BCekUFwv6qE5Kt4VYgvQAeCVq3d9BWf2jCUbj4mqSJYCp7",
  "key27": "g6p4cK8FUW3w6yR9qHwrm6Tc4cAw8TsETMKJVDCtjZyQQGRbugtZspWpiLgSpuUVTEkD6mneh5RbJMVBm7VcwEV",
  "key28": "3zKjtdCU3bRTySgvS9F2WN3SMr2zfwEjjMX4Ai45SjLYPZqqQ21asPVdjj9DM2ZpbvLZVybXD1hnnGJrHj92gsQQ",
  "key29": "3jJdpTPTzwCVN9ppS4RDnkurjSXgcnhUjuRuRDjVEq2mKNS3QHUUBtnuSZvM1K4mefJoNffjuUy8zzmHZ5fTbPK5",
  "key30": "2ecEcRrr2ZwDk6XJq5eRxHhML4dvVT4FgT26qif3GDcSWSJqoNHNMzwmTu4MsApmnazD65f2jhS3qEzRRA7m6BWk",
  "key31": "45SPR7TV7xaEEHq6UXmCy5peDuzdhrkRpcq1qjE9MuP5QtCW6B8x39nx9LMu2ZeB9SypRLBwY97WWHCd57ELwdNd",
  "key32": "39DQgQapfmvtbJMMRurQT3rBUsQKzT18C6Tky9aUKvSbvvuxguZwDLmcgowEPpNNjB9eCSdTurtkWGzeSUSRVHjj",
  "key33": "5CLm6aD93g1TFwG3aGHEf7JGJGsFovVHg5v3RirDnjyMTog7hkkipPAYHHTV5w3YeZZF4QTxAG98GNYsUQG7smwT",
  "key34": "2juDaTHXnYRzhi8D3NJoEXpMG3QztnRQLYRaTdkRMYcbUoTEyMJBXHuihNc6kspgWoK6sa7GY7iKCNVkJs8gPErB",
  "key35": "3mpkSPoSDRfoPCZ8Goa1Yve5tdPhUCgpvZjZ8UDjJK7Red2ycZBBR6b1KrEAUJt5A6fBtbKjMtB4F14NgSQoJDLY",
  "key36": "2qth1o9tQ5FAvHPCaxGmLzzEyJrkzbxUnQDSeRGX2seQAK16fUYq8AH1WRNzRLUXabha61UypBJsZjv7RL1miodL",
  "key37": "576eZG2yP3zZTKktFXoca5DqoriCksGpyN2givM9bSTzWHXKoEHB17LS5t7CmdRfJcbhTNxkrMwuXVmSLH1BC9bA",
  "key38": "2Q8PjGBcdVDeax8Ednja3982pnwsDS8qxcaQe1dTdR816HP1FG2UmfW7KCfLN4CRhQamf4opiTBh8bj4QsvoHqKN"
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
