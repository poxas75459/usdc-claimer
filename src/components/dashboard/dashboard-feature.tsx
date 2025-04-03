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
    "BuFM7QrJvfw19v8BK7VaLR1HNbTeGbRpZDihn5Cy1WUiWCodWFmGdWTEKfj3pqQiwd8raXDSGeVe6UCm69iYVKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D5yYD2ei2btGxwp9482cf8hzd4StWxJaWt7sfHhyL4JrMkWDDD1eATHZNmyHgeKP1ZrazKLkH9XFCbdQwJ3MXsY",
  "key1": "4JG1AGpo4ehEqAwijqCaJuPM8NkW5A42DHVExpqzfk2QU81GiohzemgdnhkC8j29V8WiN5DGjtrzJnUvPJ3L4sau",
  "key2": "2sRxr4VhRuZAPE4vCpp8cPAR4CQV54vz3xDLx5q8CHozUpZa51EjdXpW3LydZVaUf8dGReRFT7tiXUqRygsermp7",
  "key3": "2vuxc3DYrAxjx45EbWwt7u67tmRfxfus4Zy9HbzaTmGUQVfeVLS6FB2ckgm7rnkYBbhHFrzhQxGFaEJZFmKmC4ZJ",
  "key4": "4jPubQufoQbDxPEp8gdY1AEDvAt9Xi4fzV5Xr1dFvTT6jMMLomzZRtJp2sCyZi49xGcmmzUNKWhz9xNyYMMucq4P",
  "key5": "2pADnKwmDiyZDkSZVBMUi9vnf5CmREqmJo2sc2ns4M4kh6s9DwmcNqxfbHmF3apxH1A4LSoQQ6SriHnWhq2RNSfY",
  "key6": "38H7VnJvzyA1FZ4GnxdrzkCpmsfj6SUsHdXnpqPb4GKf3UCTV63v6pekMkosnh4QMv5Yxemy5Y4toHeGYibYPmKP",
  "key7": "2XUx1yNniXeawsRDAgCNYcQw8mEUNrhpfUqVeop4Tmjvnqohiig2BfGboXpJELS2ZqdHxjomh2Nw1WpyVC8eagTV",
  "key8": "29LHs12NYPfzUAJPnBoXwgJuvsdHHEaguhPKDdh14yEkTHGnnsPWoE3vqgTDExmVRPfBmQAmRPSuTVXZ2DFt7LDQ",
  "key9": "2PJtVhALGC2BJsBeJ36L3ECLV9e4TQPer2agh4H5cUPuMjPV4wyACJR5tbw37Yg5B5JmtZfcdahZgjD1iZvxZupf",
  "key10": "4kbHsBxRtD3i6GZGF95J2sAHPRevQJ53LWPdbE3jFHS4vtMqS6sUr6VKQYanszjwqYbQaDRjYDtVoN44k9VPcycg",
  "key11": "2Lb2GJP5Fuq2VYv2126fYyKkTjAeFrcoZ9Zg3j7ijpcLhj9TFKrc1ffFvYQR22pWgmy5dKtxUU1D9dHBmCRNEKgx",
  "key12": "3SN1NjaFVfmv9GGFGgMQ8im3aAGVVA7gHjsHTcwAJx3WFts4mLowicVjCgRnQ4CgwUB9zQVMjNmr4xdcdt1NEPEz",
  "key13": "5M8eLFKcufHDeNbmcqGJ6W7SMtmFrF6xoM1gEqagE8QUHckVzCzkELHc5PSoqHuXzoZcapkB6buN9Bv4NUWcNJDi",
  "key14": "5vzn15kUyeKhyCRtS8shNdnEHW5odR6DosSChJXsqibEhiyBREJgBYWXxmAEK5VymYqB8YNrBrsDswJKEx56Cy5j",
  "key15": "ktGRdKiL6KNfpnegAsCcbhEdwPee5kN4MANYPmvXxufszuCkYvuJ3oR6FCuQUYNrPUSLKDyq4m2ByjD9hv3oApB",
  "key16": "3poZGt64Eu7XQ3HT4cnNfhkatGmsGFkKQFJ4sv2LxfZhBR5Ruoi5XiyxY9H6TLWKWFkNfZKE1se8eo5Ey2S6UWWB",
  "key17": "3K2U6LzzrYuJHt6auGH6KVCwYvN5iVwVC9bmtrhRQbVR6m5pjDUHT1S6VVquSJraRBbnguvyZ3r4J6fhPhg3zr4Y",
  "key18": "26CWJbcpv7jbGzFuT6vFpfvtiKgXCVZyzyiniCh8PFgbPRfZwvVqbrCQCZP3J6cDuTDxvQxCPm4p7872Y2ZFN76y",
  "key19": "57R5awb5qhUeQvM3grpnYwsUtGBCrZMeapgf7wqHhTJhWH3K6CfN4TkRp4obmmMFLzHktmCJRVHXTiXG5AmczTJD",
  "key20": "5UrEGEw5JGgiopneLzNLEyBTXnAQT6nQ7F5UuZNBAf4enFwFMXHymDecLHso31P7uutM7PtE72e4EzpEYvKQ6ZgK",
  "key21": "5TYSz8phpFndE6tybUCZ4YnM3fXKcw2czNj4YLja6hgxwCbBs6FALYCdPQb5937VqeXwLxBMpqiMVa95wSgMrqiW",
  "key22": "2RW4Hsf7XSnUhtKWJKhmy8XARN5YLzM1bNEg3kkD7arHbsqKeCTuDf3aNxJM6die1zjn51tcsZ7Ya42HHNRxoFG7",
  "key23": "5aWEbKJdbQ6wtLzjr4EyxH9ZLgmDETthUpp6QbaB4NMNkQN29KScCTKXxwXc5g9AKENSJ3LcVHmceBMRfiZv4aSv",
  "key24": "549hGbwTygf1tC1BysPkQEpqND1o2g9ftSUeRYN7qqkA8CCk9ZMNbHtdEdpqVk374iHhGKboYczDwffRDuvwm5L8",
  "key25": "2sEDi8SambvT9CpEXSmVRDK7mm9Jod2FnQ4F4iWADcRS2kTCmkSyoMeCFzPJWLyUa5oEvAWV3ouJXGfn3wTLeXtU",
  "key26": "3Hqnuz9DsAf49cWHENecZWf39Ki2BRzje6pmY14NFdcf2kVkphXH3HTA8ihaoHUcdJuWMVLwS8s7PTNzcogkbxaA"
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
