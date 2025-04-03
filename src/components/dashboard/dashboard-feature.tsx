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
    "4cFNBok29hnLbqi7APVa8N4dorXZFQC2kUhiJgZiL2o2TcovdzRU9JSHn4YgGvmNAMrErVYNBNn6Lgrbwu4hYicD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UyTKcYBWCEDehKs2D1DcUrBMBecT8nhRWDowZRkphNWBGm5pAdergu3b1hGZa8r5x7hSmhy2NZJ1gGUu3vqbuzK",
  "key1": "4NNe37wCEPj8p78Dp1ksimqSNmRRLwDC937fPFpZoL6K3WdySPPZLWEdZq1usn8AwJ733CUBxMZeCQHhcYApukmb",
  "key2": "37ojLJ5xr6vPKFWH7h6vczqEjht2pLCvb4RMSQdzSvRLoBXayeE3RD9vrsse5hEUc1H4x1kg5zrsRuHFZNNj1Ssy",
  "key3": "2MhW1wKU9RskajiJsoMiWCJnQHaQqgEYyFbjYQrSqKQozzhbGbJYZQ25EuW6cBQcSojgPsSC853Qw9UduUxzVATK",
  "key4": "5R6SDVVb4LwYrDUQ93zQrYMwJWt3jN6wa4EezL2ZiGFKipdmJTeFDo1ze2YDXVgXdXP5kUe67BUFJPegL9hTicBH",
  "key5": "2f9iTX2tzMR5PxxQGBMJTTvRLUfuH3Pu4Wu6s99axQtTZMF6j24cc846GAa94m48qbgEL85qdDfwJziKJk77oWGe",
  "key6": "5qEgFsY3CzuFnDVmtMKxBBSN6ULPczaPCS7okA7XrtFCgTDTbRcZR9KZM3w9vaEmGK6xmNM5Aa5qMDb1qv4TA8bY",
  "key7": "5xnPeCJtkBuLTU9YLF61ar6QUbktX6jSEkyzjsYKPrbNkTwq3NGVBogZRtzd1f3QkimFKeKY85rTjy2oyXhXhs3A",
  "key8": "en7VKY4aKM7FYPYkUmWAonGryqqjeSaEmaAhNHdkJ6tZfTbPowgAJixSQxDjEFBWPYFBW93DQ185MRq1DjriyNe",
  "key9": "57X6v69K1dmKWyZjVPqaPkibd6imgJfkVdJnMTLPrwDmWgLZVbo3gJgucxPKKtDadbFtqEfZJtpXP3hp1mbM3UbT",
  "key10": "5kWamGEBu85BM6KE4bjaims5GE7FnosGMTQv9wFfXytigKt6rATCKbpc9wdzUyNxVkBBSHw1o8HfCrc1ErdBVe9t",
  "key11": "3nKpCAkjhPPmvQTykKaSe8F62nopnywobL5wySynnWv5NwNJvozDqvfZDgdCn8RsSm4nY727hRZd7f373DTBaXjh",
  "key12": "5MyycnRTYMWsTBRDFD9BwLChMrzwdMJ1vUkiVD5xGZs6qYi1GeYhrwWTQZxneawJw2AbV9Yx4C7DtvXC48YoDgp2",
  "key13": "2WNCjpkQfL4Ejs65DCJnjHu4osdeEUgMoj3TF5D5JP4v9qEXteSrPBFoVew7sC5KCeqAwP4cYmBwBxGKHcgU4PgR",
  "key14": "4iZeW9kJTnoUMSi2jAKQnvJ78pkqxAAJSDqx9ov983a1skqUoUMQHLC5ZbsmPpmNd5DNbfGX3AfdcFnXXEa7w9r7",
  "key15": "2tzXPNS2dxq8r9kcFJLtDeKrnGSwtZSmR4emtTUqmz3BtdZb8EtTvDeNeaiUAL1u2pUoff9GKp6vk3K4E9MB7rxH",
  "key16": "5MjQDh2VNdNbfGVdUfwKnEQHqa5SZ84AVBQPWaBp8433W8TR7uf3mNTKVGVMxKYk6SUiwhYSjLnqkHpLCYhAxwcS",
  "key17": "2mPqnUv7j8oaCvvvTpaDGLudLYU2DoZgmQWqEADz6SxwUVQ3ZTLS1eyEvyPDkVnDDrG2QdTxT7wEJyVfJ5tKVyJA",
  "key18": "66SAxeZVV9XVtq9hc6r6zuXKzakVe3ckWHbx6WQSKV4RNFnbCsqn8DifDWgXFN3YDDNzApQAgA3mcvTYzQ2iwrHC",
  "key19": "43VcBFSmtA6fuRGtMCrRvtBCUkRwpSohT3dpcARTHs3VwhDrsk924HtfshJr7afnYyy3quYkdjqy2iQEfA7yRuzX",
  "key20": "x8wku3ZSVqPVb1umR6fDrjj5ZX3JYxitLdiApc4DKrnoCPzmSkWcdtgUQQomC8zxPyCCrEzNfunbWGA5LTWWwKN",
  "key21": "3FvS8fuEoZN4CTBKyLUDxhPUyPpeL9ESKrn79EzFxKoBV3EB4Wod1tvGJw4uJLHndzPdsmi9XXQqAGkSMR6gkQzA",
  "key22": "3y4r38E3Shur5dd1Y8z65Ls3vrs3u728mZNb3ZHRbqUskzpV36XPuDv5ncxrd2u8QnEgZkjuqaSPJn9tdwaiQqyN",
  "key23": "5MyFE1gNL3uFSZ87mbgJXpggTSajfkjYJ7bVaGUxA6ACXxbiSGb2wRG7wUoaLTpxLnumo5HnXRfY31yHKEiNNqBY",
  "key24": "5dbir1CVtUrr3MYJKD49gb8Y1dpa6CapJdEMPBT4SFzuoF73qSnyHyffawraqEdLLq8ZQqPLE5fA7bk9GjCda7me",
  "key25": "3Uc5MRSdeN3TenGZiUzkW23amgneyYfpz4gs5qjsoE8s5RQnSAmHhC3xiDAcCkosZJsGcTETe6vhgpGbwPnuhrTD",
  "key26": "ZXqLdmCv52SxpVVSxjBwPLisA6zRxVcZKW3GucPe9LMYGbEu141wfL7tiQWpwiFXs9yoKhacQXy2meCerGqbuo1",
  "key27": "4utj2nvCi4AAKN7FFa61N1Xm2puSeagosvSwC7gaC4pmKqQuZCe2mJ6zwiuUAGsDs7caCbCMqbuCJZa8cy2D5Zc4",
  "key28": "5CNYvEdN5ad24Zi4h9cKn2KcjXCs8yRT1sS8XyKpi1Cdxe2zriBxLg9YnPzA6UimsZToAdjosSt2eQry65TWdeLs",
  "key29": "2Njv4qJ4XsqU829LCuun6GhS3fjEvBo2xe6j5cXstzeErsxH8Me3hV3AQxY9xQXkNCf2VHofWjLSi5i17SzPDjio",
  "key30": "3gcHMvtWtaGrzEdK5HQs5E7Tzi4Jt43S9w6cwzgRtPBcTueevJfUU4iUrFHBjCfSQPfMips6wn576XnPktoDRD8e",
  "key31": "i9AiWhVp9nfLLHdMqkg2HidBnY6t2vir3mm4uGjdUgDYwvSXGp7ekqydLPq9f2p4idvH2ix9r41wuZvKt5cwcyw",
  "key32": "3bzwao6oTG9YGc1Sv8N92CSKDqb198rrRer6cY4VpK2CPkd2BnqbnMysxSitawwXLQy7n8ExVf8GMEXv75QxTak3",
  "key33": "53ScwsZrbWuoxPCmFWjn4zahzJgCurYC3Jg5t7cFJPUeZkiWnPXfAz3GJTYMay3exbXNhSWaQiFnzSBUJgvtcwbs",
  "key34": "3iJSFniew2JCZmVAwps2hfvfpu8YKbLvevHoHQG13XyGu8aPAjkd4gE9AwVZuwRF3SGQP2FyE5w7cdU51MtiWkvu",
  "key35": "5jcZiUJiBxjbvy2F8NQZo2y14Bey3Kcskvcn2qmdg6H4agRDyWFeiYbS7wtaKFJ3K3SbqyAUTMXLKw9qXPeztTKC",
  "key36": "4WMhJqF81bCZRBuqaSjWHbkiwn9tat9Nsk8Abme34iC37iuTHCZ3DDjxScQSnPERQZjrq3wZZRkWJSns6j4ewxrn"
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
