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
    "41JfxQqcjCXPuue1ou5gDQyUoDHvRTskmEtmzUznr6EoXyzXD8fNa6J9C8uWQCntueqaYkkuxhDgwedrFEHXDf62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ckjrHr4x4CeUMWkJPid5YdTtacFnVsA7tiiSVERU2QAtWFbkJnp1E45H9fp4bhJAJ4cVbBdJNHph83oJpnaPgk",
  "key1": "VuJEPesnuveaioMNiJjcWpMdD6paRCJZS4vT8hKrQ9CdLN9UCdcaTL8mvNXRP9gAN8foH6yUC3PS14zuAc2NvVF",
  "key2": "4K5pzY7NyjPQNMEzmQfMMvJELAAs8jdyYihMaRs7o5NyBxKbzSxocV5HB3kR2w6gLwb7M3krqbtnpapidyRHFxc",
  "key3": "UaULpgTw2si9aqqvP4ghW8kNN7HFuYoMkBRcXbX4YWyKmCufQ7j7Xd51t9LXycrBFsT65TKsA6YivhJ72NGttD8",
  "key4": "pfCPMhwzFa6NCD8MVL8XynJ9B6BSZXRgLE8fbt6tHnNs2MPD5YuYx73jhpF9J1A2S3qxW1NANkd7DAZuEbCzMUY",
  "key5": "5J1nxhyDFi2RXHnfVyjFr91hBGQfKpsR6NZD5bLZm5bjR87KnHxzYYJbfLoAnozUHTEP3VhjmFfrAMSWBQnWjTPy",
  "key6": "4hSgqebiNLEthL4W6mocfUiYVmR288iAziG2BWzVJyBoyfYFrtsTKbJ28hdyiaEHZdZCnBFaEnxJjtgkMpQ8Khsf",
  "key7": "5WzTnVz8U7Us2hR32RFtN112pHZfd7v8j1UTqBaTkFfQ9ajxXTyt3KG1J7pzFgHmhcwXS2GCnW616fQNoDEuC4YZ",
  "key8": "2eEhWmtePDXFFNswTXk1c4b2mAxbbZ7ypryBpQH2kL5HxpcGVsvnY9Enzw71TN4nHSzne52pQzsBqsmuCKCAvhGo",
  "key9": "XJYRr12g8hLPoic3z5LAAssvudFijC4rbA9sNa7goZC7B897eYeqWcnYg1sVwDMmqGdyAJ7siJdLcVSpKH6uSeA",
  "key10": "25EgLPPvj7StNr2cxj9R9VPWFhp5KtGnf2et1AozW1a4osFUTQLT6La1f2bmGcBsSn1uZSADRq5bueUchYqvf85m",
  "key11": "6bYuUatDyab9Jy8VeMadG6KfSESbjeKaiYA24BSQaaitqss2XU2wXkSvFUt16kS3HpNGFs1EXDkkPvAgpjDBax8",
  "key12": "aA2haMKVKLXvkoxmPyt7d7pm4rh6NVUxsqBnmS99wtvodZYcRp17r1RcW7qCnmxQuJsnQ2d6Vv9T8UyBQHcT9yd",
  "key13": "5N8oELczGZjzVxmEoxp7wC4PdnqEi8yN8PTFW7ESdqVaQDxJyf658VaBN5Uu8s2KwTEZGWU8eDUFrE78BBurHP2L",
  "key14": "216JTug9PThDPXVV1pX6mS2XhVc59tD8RzN4ryPEHv3gAPSjRZ5f3RRjVi6h49TL7R47HUTuMVtgrTeLUGCmpNoP",
  "key15": "33eCy5MkkkFg84LXCSEZHoQr5fWXMVVv2JQbUxKc5GKt1Zjzzagko8idh9vo3CL3tZSYwFVis2qQWussCXn2QGPa",
  "key16": "3zzTSBm36VAb6vS66w8dk1Dvc1btnF8te2iMKGr5LcTVh8KJ7XsDKVcUGbydgi39jioAaaGnE5LjDDHY5qfjMTvX",
  "key17": "bowjiy8x2pJV1TyHy5Z6kD2ZrCHgnpTvXjah7yuDT28MnbzHQbsp2c3wm2G3Tu831yvQxXfKZXGG3i53kEkq2xb",
  "key18": "63Qg3GkwfJijxMTtbs76Ffi8yrgL8pwo7imZ4VD8NDu7DMWuy4oFzC74ynKQcY7XoSNw6SDF9FafQehjhTiY8kXT",
  "key19": "2w8bUmydLjfKHjAAVKN2ADSWHR61Hwwuz8YkiuPx8iYCnmwxj9kVxExas2Mp8VJQKLB1teZxLgWKMSGTupvH6ofq",
  "key20": "379Yb7YFHU8yi98G5D4Wpg6hdTKvcUg8VB6HFTsZCr7LQnhtuGLFYucDi5YzBNned1aKsP1JCWTvnnT83stfDqWP",
  "key21": "398eyh7Ahaka2wknymfPwBb9kh4tgBQv9JUKeVFaBiAtGNpBuDwwShTCRAYLSBbvxMXjDsRLoXTazbmLkSfobKEw",
  "key22": "4was3b3GUyrbQRkXMTL5UwBfw3yYcTZocVuJDQ8YkVVk9sqSSQ2VLtoWJtUguoSeDUUjB1XqX63gR1pRf9hgM9HC",
  "key23": "3yPor6UHn9J7BSPLfLV4iBxxY51HnP7LHYec48KrXQtJDveyhCAM96ea1A7P2pHsassrnXYpwChbv3GfU7qX9Ef1",
  "key24": "3mk1nw5eqRKuXFT3Xnm3NGaGevJKsF5jqLMqpynq1srcHgnVLt8u3BbGSfHZqyMDjzJsBcDMG8DZGEfCP4xgT6p6",
  "key25": "kATKuoH3JsJWLD3Mgc3Fz9D4Yb1HwGwtzfGwMQtYf36yRZ1jDLyXJHNBNVdwGyVBiKyBjKWTqKrjrvi76UzrNBC",
  "key26": "3WjKBVbno1uYBxjtpzqjwhZgofvJ71VUbfkaRKDrj6zog3i1bKAHeezmJEqQrhP85AWabRNXnMhHWT5Zm5goXBC7",
  "key27": "4jpRXFnwU32amnaAKHpdTmxUsWAzp8EjsV1SzmpwGb8yJLfadpB2Q8TjNdwyEJeijam2xHb5QnLXz53VaeZNQgfe",
  "key28": "41mEfR2vDCqy65aiA42wyLjxjTPuvsSWssLjriWYXVoDzsMtKyXe5XGLGwHdGyFZhd6pUWsfgpzv8xCXjC1nQN5a",
  "key29": "2vMF2XNwZ9wDfncizodykx6Z89WLTrAnqbKEN3VxpUV4uS2qXxa477WrWZzPEpMNTMZ29MsSTLEJw4NneECX3ss3",
  "key30": "3gfbKmje3y8cV83KaUEBnHJ7wWmhUoxFStEYAdij4htUEuXfRyzTVQJoQjMBMNn1t1sXjCDT63SGsVTzVhu6eoqB",
  "key31": "24uAhfZU9QnofeWRX4Rsc1XhamXKbkYUdsu1kDyg1pS5WkNuQgyHLW9LguoQbdqGXHBmierjBaTj7sjXCwMosm8J",
  "key32": "2hv8rcc7cVzhYtQcyy8GHawEZPEAcvKVa3cV1tgK9aWXctHafaC9VzFDNr4pxptzbgkPrWNJhPfF14hQScG19Hju",
  "key33": "44ZgCTQPLVP6G49HHDY3cofNSLR6MzLSQApmS8QTckHj98PsCocj8cAsYfUffA54xRdbHFH6p5dw1JqLiEqj6FaH",
  "key34": "4CHBnw4JYJ3LBRbBTo96Tj55qRCnQ5p5ixB2UFpHvrS8oBdgKGqtLoyrRixV7ousmCrkSNCNEvQW2j8WXHf7A5NK",
  "key35": "3d25Htct3aX5ohx2z1jfJEih73takPDrZYZXKH1oUpvWBhaoQKCpHv1ak43gapjgGoFa3Xi9FZfSD4q7TaaMnGAV",
  "key36": "2aNevT6veD8TGxBrSMXYDdM5AsjaEvxi6eAwErEYXFSgW3uYchqnxiW9B4f4MUa1SAthj1z1PfTw1t1sDnhcxeBD",
  "key37": "54Nv57V2ByKfCnUpWoabQ1b9fLcGVH6CbhWgKigwFGqr79QK1sAtg5fpnjTDpFH8RqiofEvgDRkJaYY4SsYxZpju",
  "key38": "5oPeR7GucF5mEodhY9NZNZ2iKN7CvkvZVvw2HLxG4UzDEUcKG2LVJAJBW7ywksTaFpygkC4PmFe2VKWSwcZCLghu"
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
