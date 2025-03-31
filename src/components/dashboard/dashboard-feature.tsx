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
    "5Ka4AWL64ipErd1nQQTeyf4WjFci5BihzKwM446htmUdnzN6Gx5McYCBjpNuFSnkLwX1UxV6Lgy27bPBYDuNcjWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58c7dhRFxCrcP6PKmAofW94QndGZsDS7hQ63EzTFj5P6KFZcXuECpse7RxRPmkwAdsRJ4m5jVQdS53wjXDcYkU6M",
  "key1": "5w6RhZNSgRvqp9KPfU5Kt56qxCvW6bTFkwHttBMNaXDj4ze9jtW47SXYWof4WoMZF2JykfoBD2P4ncZYcni61smJ",
  "key2": "2HssNLrRxgjxabJ8rezT5gyQoeyn9H46ncNmLwckaKdVxvk4ehd7fCrZfbRaMAjG22vZDV6LAc1LenAvNb84GNcp",
  "key3": "52xDSkno2MdGgatcaDGeAWKpuRKTw3pGVHDBdTusgBnyXae45xZMrqyYXFXiWTs9TuG3c5kSi7GBvuLeixEU7vgZ",
  "key4": "3uPTuVUpmTvUZGeSQbya49AzBx8HBhrWHakenVSRAkeYcd49iFqpxpsSphfUqHjNfnPiHSEmZYdYauLw9NfBcTb2",
  "key5": "5FjKUSRtUnM7wwa5imLeaVmk3ogasiSwKeDRYFZRHHDQfyr376nbRZ21qE2i5oWnBZT8YMVgpYDet131tRkf2shj",
  "key6": "5e7tTjBugLgnGXqVCR8cS5JD5iq4iBTYaGQxT3Rn6LqJZVsxEcdxMQgLnrytii1ZXvrKF3DHuGHeYJLKaFjcB33g",
  "key7": "2b3dH6dAwjHtsjGGk1J2G28egnPkdcBkeqiYjcG8jYss2VniGxGhGNBZhpd6mGdbm8PP6dEc6oAX5D9s2mi2bFob",
  "key8": "zD7uvXaeY23osGTy4NpK3XcdSSXW7jhELu95br4WKEdXpFxWMM8hpTe4WeLivFFfpofZyroJ3PU7r61cisJ3VFR",
  "key9": "2hZxQKs2LvS6uKJkPnM1WWAjGCF7AuRX9gzdsreYPEfm9839vWasStRVYwXEMsBzENfLTvhZxBb2UzoaE1c87DK5",
  "key10": "xd11tjjLXgtoK6RNWyzJsPdi7ZqcM7fGJdsPZYHSn9vJfqZ5kKVyV7Yw2WMBcnEYZQY6GvGcfLFucj4M7vg9BZN",
  "key11": "61upEbuUYBFsbu3Sinbscf3Q67Abuom1jBYGjvm8Qba4ZQfF1k4LbiMuFF7ZpDDwPV1u1oEkMd3BhYrz8cXsGpWT",
  "key12": "5NMFhbdgm7fsasRk7ND2A9whWmqCV8UeHVDKdWGijdBGeyWdjNVRXwRzj2iwKvrBSBX5ADdBfsonkcpJ2WtNmCfg",
  "key13": "5MWEPoFqwvSiUCXsWfhu5AN9ZTR9EaR4sfqG792YkCHvBFsVBiNrkQULVzgJABxxA6Qu1F67hdkzRhqL6zhgEvYr",
  "key14": "5UPrH4paUJyzBJpQ8zMiMNdNBTiLXVziiCxZhnPdFC4TUAARy5qZcpUYKubFnx8pwAwBtTZ8uU7oFgjXeXaTNVXk",
  "key15": "3waBL4tBVym9sL7sNfU9XpvdaFU6mrWXCPeTZT4hy9itYS5nH4Zxtt9q7hvGUjUEmTsEtrLM9CxVjgbMu7kduLdY",
  "key16": "2dMXxFbEXhh7EUqVLKF5bf7gDFxKJwcHcFVHEwucnQQMyMnHvoo3ZTqKzGFjrt923Va8HwjExpJ4xDAeqVK2KWpz",
  "key17": "3sYPYjbZ78uajC2ytpFo793wZs85guujUcmgXyxkCvJVnh28834SRQuuJ5HzgHDjKbzqsZ5cnxTHw7h8qiyoGHsa",
  "key18": "22rndjPeBfsYX2iWcUC8nUZhMbojuuBFe2vc6wSbuYcVzTE5Um61yWki99brRb6cB9jkScjNHqyj12a9P11eiDL7",
  "key19": "4QnUM2BcFyQF7BV6bXtBvHd932boZoNynVwCTb8c2mV1A7V6tvJSJC3eADWorwbAVeyZifd92GNBsQY7CchKpK3T",
  "key20": "5vvBqsU5PYRx2ADH4W8rDeEmS9jwTRTHr3XYNt7DszkSo44wVUUySXtLMudW1yHUb82H8PuKFjE6qntnipxgHqEw",
  "key21": "4jeFyuKUbXjUWPs1qAWi4ASKNy4A1WSSUwVW2CvTqtDNjrxPqXX3zqgaRJNpWMm33dpjWPM8pfW4tbp3LfBKQkc8",
  "key22": "AMRB2VffvcTws9TZHi9zmVLDkHLBz3VZJbbz3q4djjVPHNDreDGvkXTqXfUW1y3eshpaaZu32usNAtdoodNUmod",
  "key23": "2dn4BGxFxfupL2hY474n5SXojkeiCEmrUjB7ub1uQZXFZ4qwFZq6kWLYiUB2qRYGmGEAj1r9wbhbiGAXM9Td3m6n",
  "key24": "ZPKgRYZ8JX2nF9bZ3w7Lyo6mBWNGA78XNfuhJzdDn1wms626L68YAEVZ7YNYvKnKhXNVzbC41T2chWwtm4vJwXH",
  "key25": "52eYb62PpZtKkATR216ShcjUzV7Y8kpvB3SFWS5p5okANLyeiSYyDhPLZibzCmzSL5QX5V68y67XdeH6qr2KuDRL",
  "key26": "2NBZG9QMUsSd5kQjc8Vm224zqyPxmJ6jhHTV6TT4sEPTjpBCWEwJk2Z4sbvF3Hxmc8uRZw2p4rsyCrTyPnxms3t5",
  "key27": "2vS8wwqNE3U14rX1iKhHdbsppjprFqsEU3QuogFywPqUA4oPgxA7PJsYgvhXzerzPWcxvwELn4XWA2K8fsPDypHt",
  "key28": "3Ckw38XvduCYKT5Emwh3QeoR9cU1mdw34bE9fkzynY2FnQR9nj9wjZJ4LjW5V3jcepomMQnhC4BZkGoS2RkVGPRd",
  "key29": "662vboT2axk5EPMfUZEdqAUJtBtGMPgtHbaZyyGzVMyvPyx4pqUbj6TDy89PDnzmhdMsBWJRiea1QCTce8jyUHDx",
  "key30": "2LFCnMD4hjpUJsPuRvKL8bBJTstWysPrAGC1LKwR5ofMjMbTGFZ5E7er9vjkapiDd1NmPLotHUvpH398G5Qufut6"
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
