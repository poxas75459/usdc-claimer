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
    "3oWK8x65FEM3qYv7odFk8XXdCnXjnJaTdqTsfLXoFe8hdTYANGTjZavQyJ5UxAjbt1GAuFis5D3zYJdWnCPizEjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MfcTbEe41G8RmYLw4HFCbP6R2JMvyWJKrg2h629gMM4SRZ366okeWaYT2PMnJqTeF4wzy4f3j3ApDtGApHiVoQR",
  "key1": "2BQcXE73KcSfLwnCsmaiPnaaxN5SBPDhiAoMzE3jBWEnubX5xL9o5MpUjWC2jZQWbxwWpk2LQzoo6XZGCvzGBgNc",
  "key2": "5hjMSJbqhwcPPAoFYhFcM4mK2RJ7e9mVZoTCj86kHHKaZNwSLcfFzTF4RccMQYsMdydVDGra5snFWgA44KmCbTdE",
  "key3": "YUPsgVDq5nt3UnJb6jsyBJSXzP9Jk5qEj5jAZ5JWxSbxXLQmddxVeiJGBRcbthgMCcTG1XDd6Haa7y8fcjNdA1j",
  "key4": "3wRL3uTP5HfBv1oSy7ZBxTEfJrwFrfNFGRKCsWqMfmEVUBGr321kcoVY4pjgq7MmHseGjXmshpmBE84wJqiztsUC",
  "key5": "5jWwGn1jhuVDSkbbcWmzpwxh9vx8Z2QmZkoYLxg9y1eLQ5kae22BiU9Jq9fUDoqVSUJqkyHNFvoGofDUzr4ZGLc6",
  "key6": "RQ2uPCejAmTKUXXnHNV1AWNyd1CdAhKKmktxk9oEKSrrMGo7gonXeVN8B7wA89EmyvKSccir9QDpCpeKEii9zAo",
  "key7": "4F8sesT2T58GpVMf3tLCY8qRVrYHk8PVjSAva5fwhcyUSnunUxrQZynzzAuvGLR1ixZWTNM16dJeRbmdC9GY1CW2",
  "key8": "3qv7i1h52ZG7A1B1aPUejq3mvRA44vz8F9mFf1pKfQHKyYGpxrFXNS8juh8rxrC2NHvRQZhw9ry3N3CB7RD1q76W",
  "key9": "3aL6F742ZnoXTFYps22PG2munnH6ZmAsS6L8MM9HVDRRAX3Wk4otuTWP6JABp7ZW6honuxJoKz3BhCAg4QCqLedT",
  "key10": "PLqnEgWjBLBUzCn3KbCV9AZL9MqDDQtz1GwqhtEQiHhjGhzaby58BZAbjioJDGBRGwraURpMEpXfH6u979bTyZs",
  "key11": "GvW2nqJhaRbbcowdm6e3FmaxbUc1zoCpCN37WDn5sGuZyDMUvmU7B57rs4J6MSKS91cCfhD18L6rrDiY6t8BZnU",
  "key12": "3UcfdZo7T8QatzgzdGMiAvVxaQhTh9pwfGESmHiG7KXQqRyU7VUocmTQw9MQS1TeUbBQxcikhGQSz5h4tburShQM",
  "key13": "5hH18K5XJ59feJFbji8q8JAWUL2sk8ETyegDWyT5vXuiYn16XdkpMPj6fLS7LbAeovJ5VMK6xHJ64suS1yxb3e1g",
  "key14": "2Lot1amLPKpvfmEH24dzNaGdBzu377372YfKqL8h1fjJY1sq7ygK5hQF4jeRZWu58f3d6bPTHmS4DW9rJir8jMf1",
  "key15": "3hyNv21j6fNQuqyeVKdQJdBd6AQ2LhezmfpZwv5HM1zdb4DET9PgXt7co6dNB934oy3rA5E13YCb7M2gf92tdTNo",
  "key16": "3WtDX3m7PLUJJYLG9YDKbyZGzTLGDGDgvLx2wPfXSLMQ7z4W9Yi1xxpWBRBTLiGVMZEncrqnjHved2e5m2kzgWw6",
  "key17": "4muT1Twt2UaxETT9c4gnPoqRp9cfrdEbj3koYoZn1dJaB5axy3Bk4Xz5LTYvHmkvWoQTwjo4giJj4zwmqnEsXBmd",
  "key18": "56N3fddJT72sTnfeNAsnX7pGeRQbmgMKcgJ37ZBneN9Ld4VwdEvvSVPrB9fqm56wJaMaqHxwGmzqC2C6pcDDBH5E",
  "key19": "61VPLb4ZDiyyGisw2j8d6ErVPkPBfahWovASmZ6DxBGJBvuUkSxBdxfngfTSrvFoaEmgXGdSn2fpMHJ6Qu7G6yjT",
  "key20": "MnmxujUWxjaDMuRueXfPM1wphDwvmi4iVEkeTEUTF5xk6qsWQJLcBM4NvGp1ceAa5uvfAo9crtEXXMZwxF3XPq6",
  "key21": "2YGjutp5DJQPbuTHydNVxCKQGCGeLmtR3oAnRsvGWJE99rN8zfKTocMYwvRzuvaxdbFdj64hYKzgWoHJcBZVAAYh",
  "key22": "5iEkgphAHsd7ZzXXf5qVJQAUDad564swQTtEU81SA5yNN6euiUTua5TquVBhSmcmcnPMYiwGFfzR3c8cH4M5yCcz",
  "key23": "44oCyTTcq6dUgvVKj5P5B9WNAb9k2vDPPBcQ5ACrdsoFvmMQDCH81d2FojVEjUCvz1U2DWVksex2sR4dpYQQnE89",
  "key24": "3qyFghH2kSYAHBwfMRKjAmNU5mQusndx3dWREraFWkWPzAhZvuu6r68Kyo9En3e99EybhuNfDios5aYZupwaqktF",
  "key25": "5AqCk1QNVAGH2KExxf4NfDeqKJ3hRNBZBH3u9PB7ikr9FL6QsnKNF5Xa7Bq7vSnhhquYd9trLoiobcCnn3eGx3Jf",
  "key26": "3n5aFPbDCdCBfq1CWVvbspGRSt2mGtvpbX5EqcLQdnbcw2jR1jwPHtEEBGethsRTZdKiQKst2KbuM2LK8daWRi96",
  "key27": "ZY3arWVugw36qt9GDJoYFpyPvCutsvYToLppbznnTpx1awLia8Bkfr69XdZbCpQQkgvCGkiLDeCKcD7AXXPDA1w",
  "key28": "4vYew3pfgMAsPjZwXZydiSij7BshQpezdR9iWcbiwrU8xrNzxPQ8mvjkbVbZDwam71h5musjD8err7KEqS2RRicU",
  "key29": "2hR1r8w6ZzLaNwFt6Gra3UvWaa52T68D3CJzs1QHLeMLEaMad54eAT8fNHFfgwFX2sH5yssxqhscHpAatAkLN6K4",
  "key30": "3Yng5ExNqdFd1ixMwG3k6BugiemM6BdRwNGSesVBCQ9axD7FyeWcJ93nuDMEk1U1Ast6YHQG6E13RT36926gjQDq",
  "key31": "5zjPtbhVarrjtt25wAyvAASscutkYJxxhwb276mBH9GsThmY8faQAHHtqA8pLXu1wg9z86UYdM9KujpmxRJKD9go",
  "key32": "M7b2VEPvGArzaWmwNA2BoKJVSLbRr2DFRhyxtQ5Z1qweN8AhcJt3T9BcnpUYjt848kY67guGovnbVysQcmWbDuv",
  "key33": "5ALjxuZPSji8GZnMFig4oAv49ht1p8LVQzK6mE6KHJMxFLsUjdRyUYg7bDGcvP2u3BzDUm2ADjNMehdsU6ZzDtoa",
  "key34": "29KqRqv1QicyMWcQi9QQCa1qfbjjfC5dj2DDZ9SErFzPR5Dgo9vcy2fHPwUz8wiu21NLrmPQhyCK9yxPvcvr28hi",
  "key35": "kAzFhDn6juf8upcZW3G3Qvitiw5vSCGh1NKdNNuNaGkPmRR2V6AKJGzTqGm2mEzeNLnNdCrqGnvRJzg2j5ZsDm3",
  "key36": "5Pf1aNCdDsctiW3Jj5Fh4tLbShvgsH4SCoTL2AGBBJM15noatWWnZk3kW78AWWzt1Lfv7v488KJBRCFW1KDBrbXg",
  "key37": "3BEit5h559Xf2ZVz1D3jt4gzp7j23RpksTq6bgYk3ZKtvSCmBX71anJwJGmgtD87J9japrnjTuuFHbp2MKn3VLkh",
  "key38": "5Jq5DEoJ5L7hRHEwjAdsktssFECU2Zwc2VFZi5MwsroYbKDo9R95kxHNDbaTD5ddzEEBXedjqTNCNeMkQqWKHduH",
  "key39": "2U39uBBhE2zuo4ksGTtBqoSaiiG7WQWHXa4ZagCSPcfjPBDt9UeNz1tn8Kdomuu4hmCf1v4tDsc1uw944EBQMxnW",
  "key40": "42DaV7wpm23UaNstuvNn1yzFT9d38LWeHeQDbxr1wkFfurgL5B6vQNQKCXuocffkZntkUehseBSBAU2HtuvySTPR",
  "key41": "4ZsTv4JgyU1wnGqvEmNpegYRjLNxWQEuVxKXcuXNiTWuMme5GuNWK8cC4xX5xRr9gv4YnBJUpbUMfz1ygvBNd3P2",
  "key42": "4CLwChLF5Rc8wfSGM3EhZzij2p57FQDQ1VZnefZ8HiEaMKc5Qnkz4XaGX6fMGXBoPZbRjbkgP5Q4TKcXAbFUBQ8J",
  "key43": "5iyBbg9rFESY1oihWwE4e5D8RtKBkAE5WC4tpYP3Hia1a3vUZFdvXLQAzwPuHjDceWrtatbp6zeNH7gy3CbXLeMo"
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
