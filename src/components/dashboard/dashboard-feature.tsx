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
    "4yHgB7Rnb7NAwwRub5dD9mPkTAhDBeb44qA8bQ5oihPsVKVhgBi8mVTpY7rMpg26DFkJXUbcKniE9KhFASDFHKse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33EUXUzanSAgaJ7cBvozhGzaFmUFhUPe1TBHzsbnXtAopExH8TzzZ1oTi2sj4Kx2tVXndQFn3eaMmLfRZyrmmsMh",
  "key1": "2UzqHzCrznaEw9wuDVuJJtBAThNT7EmRkSBVTg1skEyhjcRWatVxojGfd8XQ8LfVBHy3k6zWPAvmtVy1itPEkcaz",
  "key2": "29wq7eVrLUXvWppUDLopmfpUaXcSQY6YL8om3amJXWYxvB3YTFPGKpS5LEFjTfMRqDyvrCFJ6av91vsXZPaZxUNC",
  "key3": "eaCsqFPK6J26o7JqgDm4aTUBsScxcrdMii1yUqKKkj9JyyFwCGyw8EHq8AF5JXNnP8UeakVDvfNjeKr8cVq8P1R",
  "key4": "39dGLyqFt1bX1hc6oH9Aft4ogpGVuUmGnyJb5j4gdBfNS5ToYPYKY8dRXZuMmTRkM6KUaKPmuf6BxfpBBW2xLZup",
  "key5": "5xhspE32Fd3VTkCtETqG3JnW9hCkDv1eai5osHz5CX415HssEkGJcv2mEun5KEW8Jj8msEi5THFrxB3VhMRUioR4",
  "key6": "3L4xojr8snyujthRD4JpKJt88wVrUvfzih8ZjFwwV57FUMPoQYzCh9JeWse1fZvLQdBNa4tD1Mj86JHGjyz7Wr2M",
  "key7": "aHfKnBzYrZ1GDy1TvqrcdjLLzRkZMsH6GmmmQWrB5JtC6YLDPGYEBy5VQVLoRZeFvoqyqXvMY3Mtw6Tx8TMhFPy",
  "key8": "67KoeaZPyjpKEV2Gs8jRDi9qvTKJBKLyeMLMR8BR1X2bi33Nuj57kqsihFnAoaPVDVWD6cGgqt6mSYFWwwqmy7XT",
  "key9": "2a9dvL4aA72kYRZ8nKoUa7BvsP2edPB6cCmmg7ASdndcjpJ8rxKUjLEP7AMNR81xHRs8LzvzhxcMWRoBxwCVvC2i",
  "key10": "9hvidUVxW6tT5xnE1PFzVDd8A4hQ3UvbSjBhpxUs43nYt5jn3zgMb6adSrQRYWiRTAJrPckNcujwvN2Ayxhzbq7",
  "key11": "2SbP3xmNLZF2e1p3EfqSr9uAvUsHNdVYRajfQWtkWHQnasgP1cC8nNSNGBV4AwiTctiPqsKnrwuh3oEzDiVarNU5",
  "key12": "cFNa3GwxAT6yJY5wPFgCQ6WBrrPtH4f31aTtVAsrZviQrZmMoKVcGZcWF5MHC1h5u6JLc1d5fzcb7RaQkZMMDmr",
  "key13": "2xVsJTWbnX9q2izBbxLt6hBi6cyPVMRQ3vnbtxEkBPvsvpqmWhxk515QDGevyhVtoWcXYh82v4ggmwDWyMxKvhzD",
  "key14": "5fi691se3FUUjU5o9BVtDuh6Hr8qYiVxxTWd6U1ijiv1xGWA99v6g75pkdUBN5XjAXdBbT5PYM7YwJzHrFXgNqpo",
  "key15": "4S1hQ6wf1v8MS9XmSofNSzYyFnkLkf3dQRBcV35yHYESv82u7khUirBLc2L7UhS1it5wqK9AekDoqUQVxAgsvNiy",
  "key16": "658HftXCaa4LQz1zLFChXAK6n9cJsGjLgtzygcWh8Dv1cuoiUbSKhNo7GS5K7MZSSbyT3h4Zxb7wsNLf6z3AW9To",
  "key17": "2udSWHCnaFwdXaVo3DFy6438uV6r3mvGmd1exfJy7yUbCdVoFcwAUqG6zwx6GyLVp4QFKC4G38PTCbR3MnqpkYUS",
  "key18": "2p54npdD6mRspGJEb16ppeQoSMPbJDvB4Jcup95Um6J8VupWwiUVwBwnzaVnBeDorvD2SK1UgtJCFKdZ4qgUGSya",
  "key19": "3GGudX3b2rUsyrte4hbvvMtwrRG6Suxuqd7eSbHGHzD5tqxiHSeWfcgUW8c12F2hbzeSDYbQv98CLhgALCLF7Bos",
  "key20": "5UB9ME4jexVdkAsAEhHM4PzUf9AZihZCe38VEZ8fD4Ra2hs9nKzACoHLr2tvpxE3gjxAEc8aqL2e6wqS6eojbx2v",
  "key21": "VjRWHdk3F9frDE5zC8vh2EWmM4mio9BZLL6YNTo6ny22Wjii7Jf8GvMshP4YFRQUBoDYPmeh7q5bqmMdyhVJXYF",
  "key22": "5SZpyjiprzGEJTy9cfM9AtsQhqyshBFYVj9PHG2ZY8oudov77BZfdkmUbc5ZGHyWR4659n3npUFVdC95j8m7xo2z",
  "key23": "5jtjo4q2uz7Y7gNGt41xBFY65tnotHA9BcvQkr1wxTxtji4vRR4seoF4rp7aH9UAJ31GnmWApoC1hPihvGAhz9BQ",
  "key24": "5DbqFJSvcnuNnip9PzhyomKpmzc6HTYeLRzGGdcQ7yRrVRibhGk9aWuumkMQ2u3mxjMpTUVeXBaq9gUK3Tmaa8CQ",
  "key25": "3pWGqU7XKshGKJjSyqQRFdMYjmwMf4bDwLsPVVoZZ8BSFqh1Ds3RNMNDvyCrUSGULRKS89usoAZjrF7pe4uQq9sh",
  "key26": "5D8RcdDNhrAPXPW4HYqakGTncFei94SvDHdCxuVvdgaYXyd1ZVpvwndnf1RrBasvQjDemzXLRYDFhSxF7PDqcEhr",
  "key27": "vEPeUqq1U7F57aRpzN5an3MeWc6cC18AQkmVr6gp8AsWRJCqhKMD7KLJnUP7bsmzT4kMxAhjkquYfB6wefQZ92y",
  "key28": "4bCkCwGoSNSDyJmksLefZLQj2zESKXiXJu4s4BxYDPEkjaeCUhEueTo25hyx6PyJ2KGBc82CDRX1i3g5XVAdGkz8",
  "key29": "2dmWKN5UMDCde6GS7S1qFbZvW2We5Fk7eSms4bdqJEe9JDuaQfNUZ5zHsuodHk87qfFGp3fF1wZkmaNkRSTnEs5m",
  "key30": "2iYYVesbydKNnEDjCodFdvux1KVsqtStf8SWPccEX6dK86pTsiiAHhGNfFdzYxTWVtjXCLcSdSHkRpLv6Xk64tcu",
  "key31": "4TLpANM8mU14UptsLp3GVnQAfSG6yreiHpKCy5oLUFXRBfLf64uVr5UxsuoxCbTxPMgT3NxhVoZq2XRLKZvzuMnh",
  "key32": "4o8RRDuv6kifEkKEBPJ6UWM4E1eseqAtqatiCLnRB2fL477DFznq1idNdgNpvGhXyJipHVtxfhx2gtSeD1VEgQ8u",
  "key33": "BY1nkfE8PVm1Mq6DJdUKd9KPnsGie3bfSEpPuvNhkvRft3nZZg1REabMLDUAe6vkpU5JKe1h2wsh5G7d3ELie1S",
  "key34": "3xF9P8gqXicLLAPBB7vPzaqMm2BR9BjkmmW7rM5udtREHpyAB3fr1LhGRPPA8CQTujoMZtvXKZUtsbwSykEEJQLz"
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
