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
    "31CCWsgbL3gjAsfadhSEaAsoKp6DCfsaJDPRJ8codpjiieJB2GowAQgDUDjHhRrmcZngJk1GaLp4BzQ4jS1orDu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nK6BUM8ZrHGc8Qh62ehAj9qcNG4Q69u5nfqMWaUkVTkC9VEzx5bbBQcw228XVDoLNrYAgxFxd2LLMM3tyHBYbsS",
  "key1": "35d7CZrVh4AozVV8HuqUCqMBYS3zPwATg79Kr5tWjV9gddAX7zboS1cxFFaEr29pe9V8fVTzNHhgFbLvD1U1zaix",
  "key2": "5FvMSifVY6UEPcFRS2uDtfFs2Um1f138g5RvqkdJ4EKTTCf7KARuu9LfisJKvDkCCAXJBEZDaDwVdC1iSArAc5pV",
  "key3": "DuFmMYimGFdhPS6QB5T7Va8api9j5Ft2ZhqZvt9TLnvGTAZJpdt1k1FxiX8WUhi8mA6YyJrtDgb1Coh9Qg8hsMu",
  "key4": "5oE1srh7Yb8gTQkaQRGPSP5E5do7FCq1PM4BMBHtWrjTY5hiqMJ9UKp9kXF9a856qkFuRXBFdTw8WM1s93nHAfEy",
  "key5": "45oa8PADfiyUe3dqXukqncrgwNCoChGbwh8DfHgfvoxyYLZZv5rpRAKLNyuomHzGen1qzz3HBWt7d5XgdPM4fNX1",
  "key6": "2rqTX3eUM3ojmVVxUnDCqk4uXkACVGUFeCLXA7FrH6fQpW8Xr2tgohBsxSyKrLvTyexK5quNZmxPjJ35i7P2fxGY",
  "key7": "59grSNqdX9KwHhKFjTBcPmeQVq2eimUc7drr9USsqXQGTd41WnrhLBdigm7cL2vyKKt8jMJVzUcG3YKnwnVz8U5F",
  "key8": "3W8cfEvFpgifnW24y41xN9VUTrTjDJxBpckqJdshi1LpS51EbqFcNeKMYWJhGB9CWZaPtKZp9EKbC7Sy2g5DY92L",
  "key9": "2sTixQiZnvQLLd9y4qNjnbNtKT9wAZNyfyCF6YoBJfRxWpY2pQegUn9WxfwHtTcMHwYLicj5zopoZ9SjVBtFrspP",
  "key10": "29PHh4E6tG8ZDcnVmXUvHgjG37dDtTB4ZbkdWLrRkK44FLhm77a7qt3Q3WQiD3iDnerSkybVTjHBRSMP8Z8wXFYi",
  "key11": "4mwGjDzPZpXbq6Hw4rpSJsCc8oipUMSSMLXftuaSMEc9R5Aec6bcG9zYgjtRY6qdY7ZGbudfpY9oc5eCVNHx4dPX",
  "key12": "22zUMohGJBphgZqa3j32ppnvsMEd4fXaFdzdvB3hiWwMPeT3icvLLGXYJbx3V6tPDpTS9EFdwjMwJvz3AnuCTebr",
  "key13": "imdrSDu3UnSLVZA4zB8tNUds6RLpqBU4fsBtQDixiQX9nvuYqMXgLAjk6L1brBCYiEHnDgijafSQqpvYedmbqCV",
  "key14": "3Xv2B6byyo5qj5ZE6pgf8293J89D3UoxPweHeenoD5mNWFzThcmyAE3sMGDSQwtQFAdjHt4JujYJMcMGhsCmD54y",
  "key15": "2aM4f6KVpZGTj8EKwd17oupLxoCrocTyJ4aMRkpgoiLptumLwGsrHJdDRGwQkHZC2ThKzBs7axGkML3erQhn5jNG",
  "key16": "3hK1pw5CYTaP6diDqCqCLg35c62DdG1jajhn3vmtKxTMux9tX5EhSq9Xid9yrQpBJHi4PiEwAyWEo4usZoRvkZo1",
  "key17": "Z6VBTUTj3TsqfjjDBE5Ghg89MfiRvjsBUbzahpx7t1Ffh176JB3kjt7egbr3B8D5BGHRoQ3S2ajQuQexpJiF3YF",
  "key18": "2WT9mFF1U4tuEjN6XBrvy8MeFUhj6EZLQXXVuB41h6RS8Jzyv9T5qpw1NRbeLrctfU6hVA3BRSusG6KgMxCE12zb",
  "key19": "4qtwbL8xxUQJoGi13Jm17cmErMcoNHKux19kUYrX492Dofac3J4v4XiYrcmbBm3bshn8y4csZDjAbnF41WCKWaKi",
  "key20": "3hCTfvgiYAkDVBnzw9c9oc4wq3yEy5vmkjQHmr941hhQpSjpRo2LMSE2gWC7J2RcJKDKL7LZ5Vv4c9mvrZVuuCDJ",
  "key21": "2sPu1FPJzhK6U1qLj3QWeQFHvW5w2UFwB4uSAywvFPiKoDjwxQeV4PTs9nZEHQA2WRLDgBjNPR1L8wR4S2Y2GPEY",
  "key22": "RFe9ym1ir6zZTXC4H8sfh2uNwcM8Dy1yhAB3V7MCZFV175t5ZhiAxE9BdMibWjGsHKXQX12UoQLoDadzfme9GaT",
  "key23": "3xmZc6otG8znsctt2Ky62yuw4v7yuWAshHu8FxhFXBPkFcyY2fMPcpUQKaFWDmjireTsZ91FLW3xCn2XyqFNFFd6",
  "key24": "25mDRDkGxfGv7C5YtU6CqZksWswaWyEdF2tH3s7LHF6c3o6ST3pspxpmVWjoSsRMtzMr3XxfgxfQSfLZw8dkHE7C",
  "key25": "3c8BwiCK5XQuo4R5PDeQgyTqK4vGjNRgbX2GyPUbPNXzvy1PgtZz3HfkQeeBEbMeNxW2krEwqQkxfbLmZPGRYucU",
  "key26": "3uE19fdxCfLDxKZtNTd57AbjitCtWx4JD81uHQuWLyHY1WpnTu4nwYgi9hTzPWLXu1JyPByMLtjKWhDami87DRJH",
  "key27": "41m5QtEY9ZQ9BpfsQtmKMRrzEsqEGnT5t5XE2Fy6CTG7tzoLo2WND1dMWdm6fHsWuWVn1SdT4i2LCAQqPEYF99vM",
  "key28": "4cYAW62XDFXm6qgtAS4iF1rotNiETpUHQhS11EyUnX11FzgdoA3oBz4zUrYULgRFtQzSoqAwmjnpDtSkrbEorETp",
  "key29": "611yeUNbRa8XU1ZttKEwx8KqXwqpuNRXa7Amx2G3tj2zCjx4M5qL2HbAcKMjxQ721Z37bgkPwTjQcuWQVWaNjbTh",
  "key30": "L9vapvFjMkGCREu7eCdwhwBUuXmfZj6QYJNC3RrjUYnf9jcSQC9QkKtYwLdhYWd5rqcZQ3Jttt8t2tYmRXWyWiK",
  "key31": "5rBSPecaf4enQUgXjoDSMD4stdhkKYZsQvQ1amuV6k59TJKGHpMPPWoRSXjisTGRQ4iUNB2XKhTjZm5dZ6rpa6Rh",
  "key32": "4KeqLFpKmSidDxMa1h8xa8H8Nc92pz6sMVYLaqMQZHQaRe2QNadMiJWzhHFYihN3WemjPdXdMrwR5bjSbPonu4bm",
  "key33": "4WwuMdXQTLkmit9dxptxQypCT4vzWvj4F1T7jvchZdTggbVzYBGduerC7vwn1PyCNuzbA2rVQW9MWenpgryAQimi",
  "key34": "3esuaRFBbtmSakpK4gDuGkTT7xaaHZ3yK9euf4p6Us2icDQEtuPnG3T2ugzwBNLf95Z5rvNKmGtrfXY9nGELVni8"
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
