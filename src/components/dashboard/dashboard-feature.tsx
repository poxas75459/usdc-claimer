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
    "4N1LANa4LzhmrkcAYevymyUzAkRbUQHtseAGpfzjTdtFBvTdTDfdidrb6P6CZxidGaVhG3MmeX874LCQdVE43tH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rsdzEhZkd5DeUr3dstvFzM6w22bDiWdsY5wNLvk2ffqbN8c6dwWg57ceEpbJBUdGqsY5FM3jGBtjis4vwJgPcvd",
  "key1": "3wSeqeersxZCUY5A4bZoVc1TVTZ8RRbvfdtc9EcsmmP3TtFKeMtSxojyvPFTeBaCuF1wusUM2ykspeBe26ACi1S7",
  "key2": "4s5xLjDV7K19Zersm9vcYaVDwQ1aAHLyWFAWa7MMZ8GNrwQSPKUpy5DV7miGkF3AabDc6mrD8m3P6k3Z6hA5kFqN",
  "key3": "4rAWvQUrRHeqgKd2aspJAGXaZhoR8Q1nWE4ji1LvX1CyouysPaQZGNET7E96gt6mSkZ88xUa3RzfzwCbwbVMKJjm",
  "key4": "3cNk7gT33N1Ycvynx4izyp57Cx4mYhHcYovdQsrmEUqyf7Ey8rzdkcN4RwE8FJrENEM14prd8SQAxugBruzkU1WS",
  "key5": "4YitfDbSfWWbFro7nN4VKwRbpWNDFbCQYdWmZeRkFSYwVpQuMmSpQcVnnZeKjY1gBgV4pWHnzQ1Wq3gmyNuee7of",
  "key6": "4hYgU2CbueZnSmuvKL7MH41Xsjq35bNsgf5Z6ryKGtEihXB23PcVuAXkejyyFxWPyiwaw6m8JCiXrpsfQPip9fCL",
  "key7": "4n5kFErgXWqf1Q2igioDcDiDdTN9gEDXx3HJjB5peMJs8EJEgqighuaSNXCLo6bwvPy2Vh7iGzXEJnrBz8XqnhGr",
  "key8": "tB5tYJxeFf1owZhRCK6DNbN58qPEUmQaZ9hF1Zk7gWmm8mDb7xur8kykW3yy4uxjRLoXph9U74KC1Awzj31Wnrx",
  "key9": "2xBGiS93Xv1hmGEZt5oEHy2GkosqZ1CUMC3t4btVkszi5AZNCJk2cfYrmr3ULaNw3bWXchxzhtC5zdqo2Vj1jVn4",
  "key10": "Q4mUx2HX5uteQHQiyuinBcJFQXG9pdiaAs6LMrTcQk76YEdKNuT1usR6hVYNrAC8kz96HzryjVvyJJuTXudLxBr",
  "key11": "4yQiSuBKTkP68THWGdVz4mTmnZt3g5uai47pUzqjLBYc9R5rtEy7MBQRZarTCa2WoiXkUA8tnJJkQMxBdupvtXou",
  "key12": "3ahFA5sR9RKnTNy6TDVBsTSZMQ9ocJ8NGTwZhHQLRGVnhE7VG9vfxGNvUg4W5GGSRxMRD9VgqXdaG4z8Ba4Cy18L",
  "key13": "539sDGa4Bq3qHL6USbCQcEYRNvX6mBLWLeMXwwBhKfW5YiziqKRVhvcsSZu46jjFpXKwu8jL6gk63uuVY4r2AAHC",
  "key14": "39WmnSGid9unaGCZeqgtiLmtrkZdaxY7qYC3zeqoCtt2wYtwscjsBurvLDn4voj2b5mVnz86db6bGQNmRFg3e57J",
  "key15": "24nLCg5LKeQfYjsGJLgH6eHibUe7GNtU2L7Uy28ZPnhKWq6hJzw8jRZCPpaRviBXkwnmGpdRgQs8c5a5GfGZPpMe",
  "key16": "51K5vVSjQHQJMsrBZAHiYx6kJEJAkVXAo1o2jbj4aQoWCP9YZWiMs6wLA8eFCHHYakspJhyAHMUYE9TWSs8hf2c3",
  "key17": "2sAaEGTu5Hta7cbNYayxpSqhRhdiBwNCHoHpi7yeHyAjo4ZmHwM53zZvohttZU42kpw9YYc47yaFKjv8zDYXC5Kb",
  "key18": "3h5hSgFnMh7FxwP4FGhjqo5kM3mKfr6pvBW5ZRfT79k2zT9GiDckPz816Gp5J6tjtuFN8WTwRP5damhqZxAaMDAA",
  "key19": "2g6BScGT4hQc9sSEhJsHtApcJThFSHt3NxHUbQz3sg4Tj5ZbGwVnpLwXGrVFTDLWXs5QCXVQMvUEsvkBpEtmWTKS",
  "key20": "4FjX4jaDKrTdhjJ4VqTApCnxChDBdZdt8fTSmeGFheNSXh9qoejaq8TEnLPZUcFRQQ15Tr8Mm7sB7vC5H6VpuEFs",
  "key21": "4fFcGxZSfAby8ryH8734Y2WN3exqeRMVcoyZEZF8UvEvsdwjMfRZwUxmRLBRpKqNyDxWxCMXR9bh8izZypsBAogL",
  "key22": "35DZsKdZAAaB1qpQgYBK9Ex15D6WuevmqDy5HenoH4UeNTYH5HhzWRTdrXQz6FDLDsDGBmd8iAUsP4Xia6AAjEGr",
  "key23": "4MPBnPL8J4oEv7YN5SVhuWbaETZ54xfW1UZfxaxhCPU9PNKe83449MCMpgZxp5rkoy2AZuW4TEGw8aa6SQ5oYRiq",
  "key24": "4qEtmLbQN8fripp87uBiWaVPK9pA85GsfsFf1K1gn9TGfiDhyWG3uHj6LjHGDqWymii4uK1PbVqPzdfPgatN1UMS",
  "key25": "37KccfwEdWuQEGoySjtXBeNRSYSAX7prxt4KmXkFtyzKX66E9WmH1iy5jZvY3c8gPehypZKydStKZxNdn5Swfax4",
  "key26": "2KyRuDkU92L7g2bFykiEiAFPb7pxKtWd4SRoQimK2HpCnY6caz3zsqVmQF6gKEg5w4t4XD6yoF6AeNpibQyn66zy",
  "key27": "2kHXnUt4WEbWdV2BERfYfb4UtZBM4Ad5BZ6A91GPXBDzTqeWNW9kuvtfuQo7N7efEc1T4T6MSCsr8nmPKLTPzvRn",
  "key28": "4h1MRpMbmfwiqoLtx7rEr81xenhH4gfGZByJpnx7ziEFCNnNXxL4YpLZ42SGkXXoqvuADdNcqTrm2afkycNqddCf",
  "key29": "3ZZAZGLPgcaTxfxK9zWsz6UxWGs2EXt7CmM8VztAHrzDkTjjtRdtyyqzooV7hXuJvNi3P9KG9bnzg7maRoupKgMq"
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
