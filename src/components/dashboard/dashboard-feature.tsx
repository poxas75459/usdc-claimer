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
    "4TMVzxLGvposQzLRDSB99rhb6ajgighYw6mw4H71YL87reiMx26Qyfxy6pNY3JiuccBcEBTmjoUSw54V8RZ9dU7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KsvW97VLiV22W2UvKdysTAdG9mFaP2SrXNYtSUbjuupPLmahjq2t2Nb5gjRnxf1jZ4RsVgXSsKnsiN2mdzCEZa7",
  "key1": "2h3dj8QPqgrjn1vFjRsWAozh9JnWcqqFex6D8tj9iA6Q5GsBnQSdFrBt5HtnFs57am6bycG1e6mpVuNhyM1ptD41",
  "key2": "3iuhs5z2PgVtvrhhvSKhDmviMY9R1869nzoWKFAGEnM7Dxm4fQjw3tT7iQGYCqU5rTbhfVa3K8D3RLHmkkTHEr3B",
  "key3": "4HtfAFm9LmyQhwLTDHWe991FBPYyahnVALudvve41j2Ms3SPK27Y88oTDUaxtbxWmPJ6kyS4GTytFF5uThKdzNUD",
  "key4": "2Cnowtkk4YwsCxSpaqhfcBh2DsgdzYBarB8rhLjLfbF9nVpV181cdJD4SL6Vv2Pq3orocQvpauzW2d8yDMwDbUYF",
  "key5": "5ofLHHEKAKbgTMt3EWi4KS8AHsiR7KnLz8eRAkAdQF2kkj3Fhx84s5WsJin3aGi9JnEzZf2GGA663sd5sp3ZLFcy",
  "key6": "129oJ4PJqW99B4H4MJGGmXoGgLyJN5MQ2z3UX3Dvcjrd19B9x8sDgCSugLDAvAAzYkbMzv78cg9NhdQhkk2REnJr",
  "key7": "3rGjUhEnRzUnisGAzLpV71jw9bA2cswsPuQp7NL7jMe5HaFLNW41kFoWtbTZEfQixaL8yNJC3erPAEKYN1j5h6zS",
  "key8": "293uUcDoGyySruUM4fqdzpRAeerZ3yDHkVq9ocMSEcqdj63H4tw4Jexz7KgdoLmykPmYd2atFMarHf7Lktg9g5A3",
  "key9": "5YhyU6gwuGkgEVZ5L8oKf26JWTxaPiaQVkNKeboek3yDeaqoZHJGcmrnxoV9x7jLAdjh1cwR2BaoxCE4H7pydjwn",
  "key10": "44xNCwif2a4QCjuV1sJsSQvLTDr44tuLKNBKMqqzVG4gopcFPyKqDFHwV8NrzToqDerrX763N7yhbaK75o4sVZQj",
  "key11": "4kNnC8qXvUTbbP9Fbx3HPu8HqycZjrgJVF4EQuNf9rXvo1bcJhS7cFD133oz6mRoMPMf3fgGdiTc5yfvskQwRM1b",
  "key12": "3PNa3nMD5KyorvhNWmohZwZhgjREn8CBd7Sqz6pBNixiEwqiWXC9ZPs9eRBF4fUNQU54YT5mGiTAZj4VXJXUTBv1",
  "key13": "28X81EtoM2PHp9F44B49AyFXvUfDLjFiMNhB7Dwe4Qj1Xo1xsojFdaZ67kXpYpe4JUTgDtZifNj2STK8fdZ2Tm7Y",
  "key14": "ngTdhtccknzhE4X2ZoW7deneseN9vSXTd6NDYA35yzNweFscArMa19sPnDzyB2T2dDn9uPARWd8TLScXSp8b9pd",
  "key15": "4teH6QiNxcaZxUhHA2GkK3tXQodyepeGc7RDaREqUnacyNbGQAA5r9ebabeNj9GNevz4YUSb4XzfAbwFEdAKbtNB",
  "key16": "3B4pfXuKYKv41X23rhThwdSBVFBfzucSBZxiuucSSbzXRjDaFaNE4ztBBxwKsnhxtm3yh8WKUBYu4AQBQHZwdYjf",
  "key17": "3GqDHbhCDRgxwfGYZU6V5be3VaoKXtYJmhUtEoKDSEz7vAop4Kc45i8caAWg5hQMd72t6o1vQbi2iapB7ipvZWLQ",
  "key18": "2fCLeYhpmrSQpYWWmH9TsgsqJSSwvp21Z1t7v77xxYhBMenxwGhGVkCEeYGZDTzAoikQMWKZysqR3mpggsNjjarq",
  "key19": "4orjU7Ukh7ddEBSpnWdhEijv9SL7Q58fi9iNAu9yMxqkGRUtvjknq1PfpRtJNnNs9KyyoG59xEmePWLVgdEY9MvH",
  "key20": "4dGGDjMFzb2RcPGKdTY1SqgSi7LWQnyasUWBtApykfhzfnaUmLeFzQy1epnxiqKHiGrh9P9EHRjM3NakmdfPEi2c",
  "key21": "2UBbq1qdVwC4chiWDjTXPU9HdULrGs2Mm8bT7W1mVDWpzmuiSEXPD4R4b1yQ4mM38pbHJP7gFtex2ycdjY7JC8kq",
  "key22": "2wcDqx2E9G3PVpacGmtiCzaLuhDp7MdN5XDiTRk3k3yE1oJ6kt9Xh2XWGxssbRoryhPeaEBfcaiDboMief8Jnhoi",
  "key23": "65B7489wWzr9789ba6ZmHfMGZLdKixDJM77toTgNArebT6enppNkg3dtNJx9MyVmgx1xFuxMjk3tFbuwjNkJtzzu",
  "key24": "2hZC64c5GNELmxeBz22EVFBmFJYc8p63G1n6XE5NfN4tkZx6twHChAjPakoUvKmozsN2nGeLYa1LTxN6D647kgY7",
  "key25": "38tsdpxkQ1mdqnouMwFv4WPzZiCkKmt9arU7UV8mhzRuKpEFZqQ5sqb9rvWz3tChE7aJWydNGw5nfUx7tsoGdyrT",
  "key26": "37zmaNmQJH663XVgaDwJGQDN4F4CK5pEQvgPVk2waqRHWXr37kpU7oyDdy8DhQMMYMT8GM86ETvqXUhFJ9VV1XqX",
  "key27": "4ebwA6R7wRbi4JRQ6wp4GKczLveas46sKuPf8pFEMMwzt1ubxCge21B22CBfezzRiv3Ss1uensewxUaAzT4QsRRL",
  "key28": "3Pba4JEwK74MtocBPuPV5zCodhi6rkydXCUu7yBRSEPm7JoagXjz4dRpigGFVGMNtpduZTTQVQUYP4v9cTxhjEoi",
  "key29": "21H4EyDYAJHBaMQMKN9wC7chg8JmtQeZfD29UsMPV1n1kRMbLp1cSrtfZKQBh2B4tmZJf7mQgmrLcc7ZdrrWrNMj",
  "key30": "2Y2omSSaDS8tX4zELnuPFj838whao44sFpQMMG5SXCFGGhhyfwJrdeE1BaxMDdwJMjjMfCZrxVi44QaJBGC7uTe6",
  "key31": "2xysBBYd4Y2GrCmgjP4ViXhkjhYaWpLeGo8yPCycVtnhhSkS9CATkE9rj4dGLJjFbzwagvwHQLHRU39HfSpSFwWg",
  "key32": "3dV1nPvx8iUntiSE8LQZyWVgW7tyhQHEsQGWaMW9uGSvzKPTyz44FN4QeXgYPwxydVyzgCmaTef6EVhtvGEn83PM",
  "key33": "etu3vKwWuLwFYZ6eprbmCa7jzUeuYJuEjxt3MVaSSYCgZ65mKLg6djMHWCcEMiRctdsBmodVNvEWhVGrRi3Bxk9",
  "key34": "53DAwC95UocycHhcPmmBCHvqWtXYrYQgEerms9tsAi7d8t86ut4uswEUqNm2pJ75JAFtv69hnSyPAkYvDzY7k4sQ",
  "key35": "62DpFyVEe7oZiG1EZK4ep5taaU3CduVoAf8yUYtJR7jDZtjMWV5pRUsPwg2CBJtFQGYGNspmt7VXfYS3TvMNV5sX",
  "key36": "ZN2fnxyT13H5PWr6fXWLS2evzUPXvLkdNorLrBjH1AMadJQhFR3pn8mdY9KRPJhhJ5K2mrd7Th8bUA2tvemN1Mf",
  "key37": "4vV5oDwyxSQgq5HfbzLuGoQNnFFa5M8XVrwPY8Kk9nGgZJsvJt4rr6dBVqQfF9otQuPPibfWccHWh5vHNLUHhrUy",
  "key38": "2g2Yt6Uyif8bm7oKar919S9B1E6s8nV5CZjWo8CJrjvN42DSPSssBkZV4S9nvbPXU9qrKCJaDrayKjFKj3jF7Rin",
  "key39": "2wtuiqJR2MP2dAfKvHeaEKCoezdnbtzqLpoq4McGVKfduhxcz5HctuUmFpN2d2puUEDQYtCKZezn8J5418CQbVYs",
  "key40": "5nUtGJ2979uxUWvD3qisJkUzrHjw7tTxVhF9Az6weMMJAiEzvaJFT8qf73dZVCbZ6y5kz6nKyTwbLGzrPn55UyZR",
  "key41": "3M9CFCv2iv8oBeVMt2rXqnqsm5i657qcTFpEyciaLnHbjAtBU3kJrG43braGuuULZ7pxt84agyRFZ1thY4RFhMUK",
  "key42": "H6jqpqwVe11KLneMuVc1mUafjJDEcwehfUvCsaTSQ5pNoxgRzaXUQ8jvh3a7rizHEyQVuFMPYECFME837odyN5i"
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
