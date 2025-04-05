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
    "3acUGrzV7rkhThcPmudBXiZSkDbvKkCngaq2j6d2bco8ouqmtXFsidupAEcWbvxu66y1TtFUjYcJHZNwWZ6pn6FW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nvoXuKXQJD89BYRBeqfJ95uRyheWBa1rppjRSqsKWudF2Bufpwr3CpA6WGLZMEZjvs8r1nmRbSydeEAGbfQQ3SU",
  "key1": "2n2vuguEFYr3WNvEPcsa6GEqjA5X5DfETc2GBXYGrw2WqdvGbMsDvzLyEwJNfdp4tB56qvFDKc6Xb8XFNC8jDPXQ",
  "key2": "LPSypqJ7mwbErQ9kpzZxwCeY3jwhpL6dhShVoqpPeErJTVpU3LEvC97AiuMzAcPMpn9SsFho4p5H187Kv5KzH39",
  "key3": "4NSjDDkDg8CFbZnUjDT5GyEEC76RBBiw1TLZoRetdcsT7FeMS3ZBtRLRmjPvCxhXUk5Yjehwq2hUY3BZaQLCiE3M",
  "key4": "5hAShPyMvzPRA62AQrB2UiLGXf8czAQDw2xERQyscT1Mw2Q6ia22Pd5ebCLjMYV7pyRYnC4wbneTNCAUMnuZZszp",
  "key5": "5kKxQUnkoWkTo4bSHmGDw8z2BQUEGVtNkpZ2HLyxStz6seaSkQfCX74dEwGhayWkbQpH1yCaobYakq3j2RYSEy2A",
  "key6": "inJk8pTLVBFozvL1CCTH64iHKq2v2NBQsnjXAQstQK58YhGGL95Vakw8xCNoS2QaB3kAeW6DBEHmXhY4sW7RdJ6",
  "key7": "23LPC2jKcmdTnZQNXMCuzKAJEjvKCyZSzPPspM25wqeeyc13zVSku5sRoRwYw1KpciUoVtWEdPM6nMXYikyUjTsJ",
  "key8": "5qKTfwzGTisb8Q63XiJT4Caf52nkkotDCVpPt4biebNJTs3C9nySEbm7fWYC34ePRiAq6XgyjEp2oEe6FMa3aLGw",
  "key9": "4KBu3rboqEmPwCqcvAfBGqk9dGpxQa9niBSR97MotdAJa6FtyZtaA3xepXvqTqBgQM44TvUfXqbgQYccZ6e4CskK",
  "key10": "3zwvE9E8heWk1d97X77UxXecyDirmq1VnRU4SdCTLxDHVt8rzKPdiaNCzccJ7jbkFh94JAyMtuHsrxcgMtwNH4gs",
  "key11": "4Cm3h3RiGkZieXC6jnGWPGHub35BneUgv4zHeBMLy8iKovAAPXZbQVSzwmnaTjZbmms9dpzSLhM1D29zmVDSfsA4",
  "key12": "31kNft3yr12FTUpL1uESd3XUFeFVgXSWxU6yTzqpZRMV5eGvCJsD6Y5ZnzEJskdAn1atoUwrzPG2gEgnLQuuucZD",
  "key13": "5hTpPjvUYBJfLA1rGjY3Th6dxwgz3e8XxxPXxEZ6nVL4KWi2pmrMqLAaqvd1gGQ9UaDSkvExRe6pA6PCobUG77pQ",
  "key14": "rr5t4jBqdJNSEcX2o8mno95U1AUuFW7XQc3KtAPyMJ1T1KiT4bDkh3EDCHnsNBgpWWP8g6j4HsPTngJnUJMPoYV",
  "key15": "jFeg2WSFtenXhGxFMM7quVVTBymTmMLPP3Ps8ZeGM6DzjnoEjoN8KPfNXkdFxGcNP9do6XtUuSWsRkcxZGoDXyH",
  "key16": "314zLBAAV7vFbKXTcUqSoH516PbMWH1be9Qq8wua3gS5fgRAZBSuk66mpyNJnSHqqzXpzwHuDDFbtwo6GXLLPSkn",
  "key17": "27BQA6tNicgaAn6r31Skp2M4sH7XPZWyUj1dyCceJ2yhApWs6ooYGtmAdGxdMFaHy824dMfyp3XnXxih9sC3HEgU",
  "key18": "4CwBVHQJGpApZPPLBsCb6FRWR3feReRsiVbcG4jw8vxBd48mbBFNQGc3ipxDhzXZYbx4Vawu7fQyWEwFGeYSXKvT",
  "key19": "dwuNXhFevzrGQkmJiHb7kRuxAjJ1jPybXgRnMDsAhxK7Dm7zTaCs8N9gK6X9sEmLGUHQgmtaTTH4zWm4YSKcQF8",
  "key20": "3Hgx8fP1yS7yDrAsQTso4N2XHwN9ArrKqf5qKX8ygZCVmkEHFtA1URarcegkJ8rbXVGj729Dcj9WL3nNRgnfs4yL",
  "key21": "MJ6kpcGJqF9wV9fTKZqgg7QyWwe65BvEAD1k6dZVP5Fh3mVCyzBsCVqcBFNakcY4THTQBVgkyfYhXe1eYpHpxwk",
  "key22": "56WybdZW9T13pHRJk9p2y6hso3Ba93nD1c57WJQfVSvxEtBDm26YVJ5rs21ctk1eqKJv9o37QA1ADFm4bdbgbWoy",
  "key23": "4NvY3j5usJvB4uof11Ft8cPacP63DMvquwuCeziqijikLySpDGDPe4w8a8QFjwcfqC2usvKsrmHe1VLz5mt5p2JN",
  "key24": "N1w3rrbG8nupYJqL671YX3uQ1u1H5zeD7PW3N8f7e4oB7bPpnu2m3PcjNDeEN7CXoEtPsvKkxXP95VdyxQKpiZP",
  "key25": "2RRSDHbcG1mj2vNQLS2nUKaVjV7xkGFaCaHf2Zn4Xgc1Lhr1BXgZphgvxDhjaWymPyPdzaULWB5ahXWAHmui44Lg",
  "key26": "firFGSoN82wkA6TezBgr1ZvDLfvRXTEmaw3eGtdfwuL2XSXz3TPs1NCWWEq3zgJ3SAYtbfcFzop17Re4T1mRhEA",
  "key27": "5q5R2XaaW69Rd2o3cEAC78MruEpZTV9SquBt8pxKoDGoYveuqUrupgkdK8jVHWT8K5ZnjRfdS6dKipUeJtfTkBu3",
  "key28": "5FqSkKV8M6MVQmpDGU8W94N1vU7kpN3ryutZFgh1yMBs7QYTTzmp5VVRrHgKHyrL8ftHdndVavzKpzHCny96KsZJ",
  "key29": "4BqQWuZKL9KMgo9hgQiyTW7RtyJMrBp6F4tD7k8r7Hxmq4D4zFFVULLnVzDgyQGjFGrW5LzYy7bATt13dh7nEHeU",
  "key30": "4GoKMRp9tu42Ja6rrJwfotBPErPvMjesWRiV9w6eWxAPH74knhhfEnHcbQm9B5GUfTrHfbHmSSGjoRgckxmwMHsS",
  "key31": "3hMGsLREoV9cLfz4isHYXAPaJUuuLQW1QJPEzQmXUdnsGzohT3zKWdgiudNRND95MfHqPCjEfmrQeSt1u5dCKsmc",
  "key32": "53pjV4sJSW4msuPZxLPFHM6VE89yGPPWwQzsiGuWU5C4TGqMo5vcL7hXLK9xjQSJ9u7caYGDWdGu8F8Htv3USxYT",
  "key33": "61kHFeqfFukBSPeBNJbvr5P8KLRdcA8rzkyWqYZhRdtJ8Yg8YyTgkZSjsgmfrC9VbRtNLin3bXRisxXrejjiHEUq",
  "key34": "5Pb7rVgrtDMPGsS2kxTasdFeDDfzmd4RXHUFY4J46y4MwMSQGFzdjsv7ms7bpPcYsmJDFqqdE1tg9n2igj7sVRei",
  "key35": "4ENFyMftrcPezBV7bnkfe7sYS92oLiEksRXCj5sMT3uSVM2mJqKSCw3yqaKVkS6RWPfafSsKawiT6wbcg3sg39nx",
  "key36": "5pi7h6D8cwiixjwe3DJmzZ5mkyvFnfRGHrzZx3bk68CjC2JGSEDbzhDiBGAbwEXubdkF4QYE31rVVJTkPe2nJNX1",
  "key37": "3tXwKNypBtDJECbJrQRVc7ckSsbAXReBSnVV8ou6LZcJF48GkiNErRc7QJEFqG79eUF62RkbhTcAZkk7ee2hmr3S"
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
