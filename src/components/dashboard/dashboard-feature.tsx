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
    "5ybZqGTEExGyio6KMAgRLW5MfwPbdV8FUJSuWJvJ9q6aaoSTUqrcD9WvQA7NxCKX1gTYR2nNdDARn5jaEYXtuhkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ja7up99XU9CdNvr7m3RDU6CBrbx9MHYYcPGfniybb5rqDS5dF9TVqzK3xt72wrMByH4Djh3zgQDBzuherFdNsYC",
  "key1": "tsbZw5YviWscBRe9GiNjRFs2PjiXFqaLxmivivt9rPZXUkj5VeZSDn2zMmW38LddTCsJ4x4To2ap3zmh9pQLYQr",
  "key2": "2gfWQQGDXkWQeWNqu8L2zWr37jjesYxSCLfFvZMGxgDQGBDcDEbzNJ7qd13G977ddaSgFR74AKQam3SRBgc8Ju84",
  "key3": "4pXEGwDHBzL6WbtySevo51MYU7Jcu9tkRLbjaN7a3muQxGsHgdrfJMw8owE6ZrH7VyoRxxe44yq2ovbYqQHi4hUb",
  "key4": "5hozE3nY2EUAzkABq9EiL7F7m9xH7uBWvJ5fynmCZQbAxLqyYQupfWN9cYu1R7xsMoqitLGhW47rC2QaP91KKeAA",
  "key5": "VYjC2vSKQ1QLujBsjnxDE11z4Bf8Zt1kkMbQxB2fmbjPk1YDa9CRLbqqmNvEGEGWDh2TZ8Tvmbu2Q2WgJwaGRGe",
  "key6": "3oSrjC2s4tnk4CZoBmRxccFSVchjsNkaBsiUbyWFKeqRWJj5NDsiNkZUPQ8xZmeydJ3Ys1geNjxnQeLExnNoSGJW",
  "key7": "5Q5FR6a6sRnMDMNNqb7kqpdS7bqPLLxnceHcJPu1bxuCKttaPiZegXs1CKJzt8xzmjwA6mxfVeETiAf8TRZzPsWr",
  "key8": "2jodz5C5mavtvYCsjFr1ftZ1uizpBT8RaAN1PhCZ3wgYPCMFVKGg3YiJT8r7gQ4g38bgQbxr6rEWBCYhLU44ZVtU",
  "key9": "nGPoJpcVzK5x85KXMCiNZZfK6UmQv9s4KavTN6xuBVsPJqKcYWYGmDABYCquwjewENnSgdToDMGUvHBtEyGaHh4",
  "key10": "4KT1Hzai2P7QxrcFinj87MN1SZMkD2rFCDhxHbsVqL7FsLhLp4jtwndXCAxv3jQACTNBSD3AER8yPnxtYXboTCUf",
  "key11": "4zkyjPmndLihWm1xgcwUxvhF94Nd9RiXQBHfWEmdEp8DF6TdUQ4JJNo339X1mCdz9TTwHGF9t7ZvphVSV1rd1mTM",
  "key12": "3szWwdC7r3RQW5QC2qM7mDgfPmxpzFauy7Vpx7T2cWXvLCR4ypqiGqJySQQJB7A6rPEuzbnuuiNdqe2Hjf5Cz95U",
  "key13": "52UGuU4EZcSBjLFMx3f21Cc2HnWriYFvg3kPjYA4t3RPtSQ6jdGno9KsFHsd2BUKCCJKR1w3YB5xB2auzaZrH8Uo",
  "key14": "3XwnSKU3L5gTqi1FP6zuTzZhQ7SQ45b53cLxFQTsEeqvokcGuB9KCm5LPLhNt4QQhd4ZEyZjkewZAfZ1KNEdvUBv",
  "key15": "4EKTumkRC6tNXshR2LWt4AHq9XCeHx2C5a2GSq57B3pTpv81ziDa13MaPhhzTnVVg1yYuxzZkSqhZxBYiy6pP5qH",
  "key16": "4dUtiwk4XrBpWz6ySSY6tyLusv1ngq1L7msq1VzC4ybv3EN8tDKBu9CF51gosejEXTyuvWpADQc7uMN9FGqEZVYv",
  "key17": "3Qyn3sWMVvGqWh4noJrzj3pkyKunQ1E9VEcBGsT5s4DyXxRfqj121f2QpJNWXvoVvhjwtRYQ9Vdj1GWJedsuRttx",
  "key18": "5CFwrVhUNmgwPkhu22tMBbJMbDzasPW6d1UvEXnnDSDqqKRpJqw7tqeCpAWZDZ9UioNcaY6NPfdcWxnuL8YyfuDg",
  "key19": "5j1qA1RkC6YwZoR8vUvLNt1jCkncsGJBrKbrGF22LUMsKVJt4aDbJp8mbgULbJsKWar3JrTWCQqBEtbXfx2tQ4Kw",
  "key20": "5JMNK2pJegQ72AHqRk1RrhsBrvg852fZp1HYYEShybhxN5oEA6JsUY3B4qL9mCqhSfabwFhyb2jNitsWbdbx5F7H",
  "key21": "3nCL5ULGyfqZoqyg5hpiQvJM4WMKPcAtu2xTtgsDi8Bjtsbou9tS4XFQZpFTS5X1Ha9Nyo6zoNEuqMCgVwz6QLeN",
  "key22": "NZ54HknkSZfyhq4Dtx2QqnxU38BEkxvHCssMh81hhG9aKbFnkEGETxHVY3WxYZLRh3CnjBhEyecewMCaiaRFkso",
  "key23": "5FC1dw4xEYZQCCShdgnZ5PgHfke1y5RXEuC2vHyLBEVebyWBUw1YKFojLHiTuqUSMZKQzGbQQdn8VrQGtTBwd6Lm",
  "key24": "5g4SUPbQZXbDjNfxmXgjsBiaXchaWhSuCbRmRoTEUcZ24ubzeXANWeEsL9sGHfmhUbN9nsraNgMMbXArNwx1nZkP",
  "key25": "4fDvLWYRaAd4kxk8L7qGi31Nn1Q6YqT8mfPCLg5MReLsqo4vmWVvgFcXpJQZJET28f9uCa9rWcnyTra11HW841rx",
  "key26": "5GEcXHk8u3pdvSXfTSvQ4xXL8JzRum5C7GwERopx4msfL7g22NKawBn43zcmacCbGCeRi62V2PuNdXHuWp3rXnRW",
  "key27": "4NMkx2AKCSX3YEbFkQ6peUgM6kxnUNiH2d14bERjc1wUeyciFy8L5svHKhmo7pWeSxMeuj3pzkAiBnpQaRixcAp1",
  "key28": "26S7T4FKxwZQa5s8cRXZLSRADZyLdqr7qMzRN4HmYjuyA9H57unKzY715M7omLo8qE2s7uDqg3Z1fSaD2vBoE8zr",
  "key29": "5pp1h4WKN6HyojHhcKkykJDezDrUFcABr8WPqSGWJQHt1HKfWLJr5rubwNQ4a3XrnmeP5UheypvjywLJHKeUt3yy",
  "key30": "3NtYZmyBEDBnPhNK4GZGujG2fADeVcNQ86zS79m7e6PB3jxtapCm2mdj63DsWGLy6jCwZGgvjkXcPaVP4wtrnu8A",
  "key31": "iXoowgVFNk9ZnBoJZPi2H54hps9vp89zktYuQo4AYzKyQ3nLu9a6GdyUqojxcMwJ7yAZJBxLq8z7KKjJ1F6igy6",
  "key32": "2smtSoYFJruDL653q7RjRyoH79imz1zLcWFfLbsjfCTAHrNoZND3b81FtvfxL5FCuvcwK21GcyiJn7KxqUiLLYLE",
  "key33": "3KujWqSDXmUXuaagHE1NANvUThYybgp5Mse5Coxx4WiDzftqRfbffbxCPvHDkSzmyBRaSfQNchR7NnRvdzHkCKAA",
  "key34": "2FkL5SNpLfuziKu5d65vM4UyBCD49JK7TRxivdKhkSCVNe681KaEF2zkpAr4oozBRvHctz4wdLrLW1D56GJFF3d1",
  "key35": "h84ApnYR7SBLfiGyUf3UrujPHejSFpsEASdTQp7CcmDd5CeY5vjwAXYritLhauKrpyQr9uJgvF2wbd1VwnjFXcH",
  "key36": "3WKcbWgJUhijXpzP7e7nbdmcxQ1dNXwaJ5xFjpZPXV2ETZdMTkLuz9oK1U8cvng7zKsa7tM8WAQoBdsAYYfEpHNq",
  "key37": "2GvoJRddTrtro35fh82UcTWsznRysUQmXGvvBycbRWaGTzcinpT1kzmsXi8smcLhYpGPWstcL2SGKDT7vMGHTH1j",
  "key38": "2XYTsEJ8Wg9Magctv8N9vxLEaQEWYWTKqj7b7k2BWEFkNUneANqSPW8Je274ZJG2WuE3hZeFsn5mi71fNydaXSR",
  "key39": "47oMn3LTf7kMaf6SBZpjJyktQ7r6byaMdJWXswmqHoBgmEmQS7Hs7S2AT1mJZR2cA7KgcuMb7tCPXHAYbvwR9T1z",
  "key40": "4nqGHM1XQ7Yn8GY5woQZjbuHho97E1xU2o2abnSfdTNJHwLbBMc52heC8vo6GoBmh5H519m5Uzg2YFDBcRHcxDFv",
  "key41": "25Q6aPAGYMc1zoosgCZkvroqdqesShdgyFsxinjQgbt1t3mRcRHdds6fM7Uj6LiEQug7pn6YoGpjJcGxY9jUeb8f"
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
