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
    "2UJmo7V5HungD7P7XJJ7c2rMrEi8fN8qaTTz5gAnFyFPumbJ2P6ktgy4twByxECokDjFRp63U4uVoWqWYAtDfoRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hrdxei5vayxmNYc8dgHps4wuwCeoXZMtxj53XiV2PE5rY4mgZ4u8pzoFLGrA6TLXUMehvsQdW5DFucghCXYTjBT",
  "key1": "3cnyoDUUj3ELxTFeCYMJiLfr6opBqE1P6wWakPxATFwUp4mQhhGMkdsxtWgs6w8ykPwUNR8JVgmY1hY9T9hjxzVv",
  "key2": "BsADJWrpKUijv52hFNX5UU4hCQudCUaGYsY6MaSgr4bTfoighd6gcGJssLsMXkTWboc4hbLDPpLzN7UNiTh3duQ",
  "key3": "57PgGY5Y9RgYQxCFzEjcnZvLaMXYStHrUiGideWGKWTdZjPQ7mLjwVbK6kGwBk6jX634B3VdjL71NUifu8Vv3bhD",
  "key4": "3wGig37BLDABtbXi2dhP1m3Xbux3ERe41bugV8UqFzX4sft65YiiGzLeUBFU9HiAsXoC1fcWXa9oa1yCZVYZqdYp",
  "key5": "MBfajKwpdHFQtbMqeJfAYa5j7DceuvEjM6ypgeb3t49aWVSXxSPh3PcWHWCa6pL8XYP5CRezjdqN1YuL1Ex7LYo",
  "key6": "V5dttZf4Z88AfkGZe97xfhvypJbYEd7JhW75CA2w1QZk2kd5JCGmjf14Vss4xEY2BNY5xo2kW58zMvJYKkNSDaM",
  "key7": "3u9bnAZqsdHtpyESkBzfMZ4sjcYaadDyPWYUbjzLTDp47tdz4ECML3aPJdL4Ki2ZHvJFcDJvY2x1HEfSTLsnqfjH",
  "key8": "2yYwdg9jTYhMjyEbsVTPnVbUgAh7uZ1EiStUQ513iNM7c1Ej7SBki6QQ4FpGpD45sz69GpSDA1Cf7kaPwZeDQ1ta",
  "key9": "igzfpstFn9yAk5M3WWJtcYSwhz6FJFw4moLrrFmfWQmBG5Wr3mw1xo3QbTXVnTi4doM4cMv55upG8ADHAocRPHX",
  "key10": "3tAm2XTdXAYsPnSYrGUuyuKJCufhyJHU4LhHZDMntQ7QxR2B3k6uAot9LFGLq5tAjGEGYxi914eYD1UsKkg1aaBC",
  "key11": "2n9HkWh3JA1cUSgdrd2FC4dQcmPRLa5aArb8Rz2ozCaTy7xm89Bqgj9jtWXKQ67mRhQMW9Bef97FNLnFmHZXBq5M",
  "key12": "sndDJwM9osDr1b36r1Tbo1mQ2bxG7fnWBfeVCQ3LpBGov7VMEHrVcqTVQj2xXvMFGXWFGRcuWbBSsPUC1YpHdwm",
  "key13": "2uWoy3jRQ385dJcCXPPpCP9mynhNa9qchEVyefRDejLq8fmLgsi4So7RAG1RD7KsWU7h6u6kMY9Edyde2CgHwfkB",
  "key14": "2PuPJ3KuRf2SBmK4Vgfo6NAas6EsZu18kojLD8RjLHSpANWKDw5FroxXpvkX7B33sHPw5tHe3hpBpwS8YGZfdJ42",
  "key15": "4oeEGkv1t27pUvpCAmC5myd8ViteVJw6zqjF6TCYK8Ns2ro5XkNSLbFaMS3VhqH1gQGPJVWhSSppGyy2SQ3xfXrV",
  "key16": "63eLD9qmcTdmYoTnnDdcEGcQKBDTu17hxZLLuYhAGkY5egE2xHkXEfmYodWJS4tsxFmuf3RUEGdXtUGjzcF52926",
  "key17": "nuhmF7DZSUe4cpgi5RUAcdk1n71BEJuztWp19uTX7pFMwgzJDYKKsqa6wbY1jxJtdeN3WcPiiXTuXTZKSCX6oCt",
  "key18": "35rezYAXT4u9CPeCTdHxKneufvs6oeLDwyAS4qKqcDMHxrxs6FG3NnL2KpcLfTYViwkfAYd73n8NgjEa2PtjNRqw",
  "key19": "M6pULZ7d2jkuNVsiDRxjsaaFeqVDQWKTdtLk6j8xsFrcEhmP1qpo7edEd1gki3UqyEy7m63jipxPZWmo7i97Lye",
  "key20": "3xfXXub9FaDNyN1NFmBBiBYShqxnSPWo38W5ZWZaj57H4TJaXFUf6RqHqLphbM3hfLwM7fALkW9gUNyv51syYdNo",
  "key21": "4tarBUpYthp6UNqnLt5ZFyatcQyvHeggu1FjVQFUarBrZpS1NGMhNbpKD7n1c15fWeKJS5asaJnzfkiwSUJFsQ6z",
  "key22": "2CgtZF7NKHH8iTCaCnFm3gPPqyTJ6Byd2X4WtbuNxcTCK61QwaAXvY8pUz8mos4PDYENHvGnvgFEYMhgLWjjQ3et",
  "key23": "3Lcs5aVYD9eVWmDfgA9KGVJvxvFkv3DTWWMkiukRgZSdeMwHdNuabQiZxqGaR2CzFpS6GuqUprWGbHqe1FD8VNpN",
  "key24": "5eaw8Pc6sHLbXM8cuVAyZPk4RTwzrJKt3mSAVYmLJSsbhMbUnr9zjLtbojJg32As161wiRspnd32NKvaiEww6UPF",
  "key25": "29LKXnz2hJ7qxt5w7dzF8YJTHUkpmK91TKEczZPEBwukChjAa55LZEtQ4tiTTs7Xf1MRgfLwivsaAJPPJc9fdNKr",
  "key26": "3nY2bivBkxdo3iafoFLB2hVy8RhVYJwmCL8FF1xJM2BL7JB7bKfWNLwphmfpd9xL7NGtkxpkFxWACSyK2W1W9HtY",
  "key27": "QjprUo1ZxgyxfNcmpd4LfkR1Fs7S5jeLK2Y4yWizsVcw8xmXUFnJNimUuje5c2oLxR1YiiFsF6jw4VGW1x7vP9i",
  "key28": "63dr9ACqbU2R7sBa8e2mWX2N32tnjmbi2mMiUcnXF472Ed6oXtAdrS2eeFRw2dXRnGx5NoDQCT3UwdhQ24KtDQET",
  "key29": "4L3Mpf2m3G8rRHnMbmJL7qh2sF1H5V3vuWJuUm8cgk6eauhMQ8DojTmm689DE8V2v7rnUFiFNhdTXmeE1sPQYWru",
  "key30": "2LzBMWXGtddSwi92aRxyfQ3cXSGktagAPKNAYxKcyDxuSiysrGRpzpCZt98RkBJqZSrdDeEiLXss3EspgJK7o6vp",
  "key31": "m5NjNpzAFYV6Wtgdngnwkhzk7ZbXbch7xvRUQzCqbiP2C4CTzJt54XzYeaq1niMqtzrKpwjbv2nPnHkn9cYKye6",
  "key32": "2SuzDWoaaEhwtwyjXk1mq6dxNeDg3aqkKBYE8DBJuJN3ZxYGtqkmGcm5dm734AuJ3aqz33MC9Czx42WR5npgt3Js",
  "key33": "XWSMGP9P9r3qH2awnSVZaBFiTL1vqaMMnAHQzA9Khdb8iCS1WmUnACJkWFo7iW85tae9Noce7vK6EtYZvR1swah",
  "key34": "3AXoSkX66iMCMHmZUJrTKXh3ETTAonhvgrXhYHAJ3nCZZstW4MVsawCTwYL1Y2swk241UVPfwWMPT3JiPbSQRH8V",
  "key35": "2CidpCakMFrsatP4qwQfbs94w66XwhfBVV6EHxstW31xXMYQMpLQ82sWkiwmX2cNdBdgS84zaiSQPXw9qRV7zBNv",
  "key36": "3NSfHzNfXuPy2p4pKBb86uDxPEVZsPVuzaPDApaFHbqsKAqJCkfUrD3Th4rxTHjQi1obmoTjSehcSkfyvkeSHwzv",
  "key37": "5yd1MiAHzEYzcQJmduAZA8ZNdzr3JX4rA73f9UEKrnNtYgC8txp7goNJjKow6US8GfYMb2DhVavA3XjPSidqK14k",
  "key38": "CMSk3Be3qWLoryjj5YQWNB57bHnt9bSmLfR5nn6xqMjbKx7NWvPhTpgQu8N5g9pq233xGziiZgCZuRYyvhM71Cv",
  "key39": "4ouDUjqRnEi8dK4HD9jtbPt5gBRd6kf1vonQmARDznSDx9naW9Pudsh7k3W32e6P4pn55H83RED4U8R3VoVsftWS",
  "key40": "3Evep73geXn9RghFqcHtYXEFiiAvqMbf3dc7U3VjR4tKm8HD6z8eBqzimKDUDZqVGezgt8g3HFC8eiTQ879TXH7E"
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
