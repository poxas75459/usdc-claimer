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
    "65N3zaNh2R7bKtsQAhqgGYYcP9uzYgZknjm1zK6kpeAdL1iZLFLd9vaUoAHfrkKdxRDnSUoBuMnpiTtbrmm86nE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PMg2eymsMoRBbqKZS2yxETV5zosQwLxePEdGHMXJS8zK7AMtLbpzK9utGy6gSFhPefcgQoikiauooCn9EUeTNUt",
  "key1": "2S7ZUqGvUQTp2P4R4EU6hZALy54QBU4z8iXb5Hn7WbFDsUTLV1WJC1kRhEDX4EXtBJLepGZemGHWSGE4ruc2vRRh",
  "key2": "SkyBUG5yjg5waifYDUMUePDibZDuhqNpTPRDKp4mjwwHu9ujBWWx5tBZ3Wt2GSZK1VgGAAAURx1zKxJL2cYG8Ds",
  "key3": "4AFyjPe4PWuApwha5RpZSzQdNJKfcjbEUsAtP9Bn5VAv1JKD6SZbE5wQSSCCaB4qkFoL1KGQfhkTJFz45b9stg4i",
  "key4": "5kMVXnxtpA45DGzLdswMw5ZBWYPRLHivBq4FrMDonZQqkP93B2rpVpNXrnLdovxDU7Yc6FQffSKNBwXu7eocVmHk",
  "key5": "3vnjQJH1iaZEqVWEAfUmKbND5NzPC4PyVxa7tqE2iDcayzN9A7qm3JKMDFfYVi3jfV9PKhSsKVhepxhz45JB8rj2",
  "key6": "3EuZWARUz3AASdZAoEkyNhHPQXELMvNRAsSG2Cv7tpGWeFZhxoPzxqUMiATJn4ZTopEZKaCLGywoyKwz4hzKvhhe",
  "key7": "3ksCsMMTjVXspjnUriyW1qP9RfaXrLRfFLCeQsd2tkdm6aqk68hy84zwiwG7BauXfCnH4TQrzGWDS7Dmk2bzidDh",
  "key8": "oPhJPRWYVUhp73dkf8xfLp6XSgPntw2KwEpcrNoqkHGyYHKgmdDHCwwNGEyjfS7RNdNiELPfU6T5dDG2r9PWWbA",
  "key9": "5zh6VEK4KgcA6MpVRHchLGrmwBNrgfZELVbrvW245qiuTMkeSSX94DbSwDziAjUxNQzfwja6xC9Q9LuxtkmaG4yQ",
  "key10": "2tmcYFiNhpzbsEWdZ2Vvoo94MMnDZeKDSxTRvGjcqvNtZVGXDBmv5rGAwVfkfZTaCw5xr43Ne8owUC4ajRrWhgUV",
  "key11": "2QXonshB8oWaMb8BmpQDVJQaAtZtUGaCWm8asx7fDJTvzMaYjtNMaAwi5TixAMzmd9GtrihPYXS9dXaENPwuBh6",
  "key12": "2ke6NUKqsc5rPmEVWW4Nzr34YfLChszpmLpzxdSWgbAeXRRKL7zpcyKCRS4G3hQZoz9qu958LSnUUf3t7LWYt98P",
  "key13": "5PmC1epX2oB6zaTTYSykMxgdjSAQtFyzsA1WPBscBzkTsBbWjtf3k74sSDSi5JxFgQ2rMoTtQt4BYFcdYPBGt5MS",
  "key14": "3nQafuzRRMieEc25wnF3x4Lb6vkiDkTE8WZtfAUpNq5Q7AjBqkvkd7wYG4GJVv6L63X6cNGg4RWHXspjSumXZQX9",
  "key15": "5EEkV61U1Lo26Hh11SVvnUu7NHPLtQmPt25cfi24usyhMvTMFwqedNdMfUDneTP76StKkzcbsJiBNSZHEDzCmYN6",
  "key16": "4ENvRy5R4BwNxUDFqahGRhUXMQfYxSDYK4jeZ79Eb9XoM9qmd5aA1PnGF1ZSv1uVBfmawHhcW4mgqFg2KhXAaHCX",
  "key17": "66KJpvoc5abZ7pRkemAVijxz8a3tAA97mUbEDjDt7r4khivG3h3sB4numvin5YQ8VkMjgz4QdN5WMKUL6PrZGLrQ",
  "key18": "22Tb1vNeVuxUWaHjUEJyk5V41tTAhiqMVb7zWfCvdEZNcMSj24mQQ8w6oh1jmgjA1y8jY5VXa79Z6xm1EGsRtxt1",
  "key19": "5UFbaB2wDjcyhDKxk4WEFmkrqipTSRvBZF4NJePN3DBikxhmTkTCtNt1xTLyHAiw2dobNmzZD8jsVhxY5S9MSFMw",
  "key20": "3NyijLuPXX1Ka9HT51PgrKs1ctStPdJzNjYKkPVHvhCQQGx9yfY3apZYoy5pyxojiW4XYMqs78HMJfK6Zor8Rga5",
  "key21": "5DuYTt9f2SwmZoHkcGpjdNLdC3xtWrb5kAmT6NjYYtderzMeadaU1RPNvU9pauptkdMfWf5fLFVjNRpFainA4DDw",
  "key22": "GnyygyEpByifszZAoZ4rwQpfbowDqRoULuWTX49DUnVq19mR6T4vK7p4UwF3NzRMzmc9og2tvcbgvVtUeDoKaLH",
  "key23": "4GXt8iNQQiTjZQFyagAuHSKJVRNewrsUsbddX1hL1d2q7AZbD1NdZGY2nGsVT2nJ4RcKY6fHxYZ7FHKqVC3SAHd6",
  "key24": "2hMnPNMgPoNPrSxgEEAtTNtLKdjefRAXYBZe8tUDt7Mn8V651xP6BF346CPGhRBRJf3qQ1thhD9GwHnADrsNq1n9",
  "key25": "38FhaDw9kBdoYzf6adpmEDUf2bmBvcZAgCr2AQcjJyY6sKA6HBL6p3fTC9d6vuyhnd2JxxPDHxfarV3fwtkYrjVr",
  "key26": "2dpSEDmYw3F4QjucRBUFQDbMEsW2zk86SQqbRdBmYQqtPzzFzbawBiRAXDyvH4Adn5tmPXTBsVD1jEYg8dFrsWAE",
  "key27": "3LD8oYfpHBkZMQbJSZi2hFGFm4uctpjnkxVcmVBY12C7Y3oydNMG2VjTHe4GxanYDXnk9vD6Ab4EfdBNDTMW4Vd9",
  "key28": "wSvRcXxa9okVmU3ihCH8vq9CPZkTqKoLxSG75kxoqVrLo6CxuPNjEp4ZSkY87zDSFUPLfbG2FRuAiQoSdZLqwgW",
  "key29": "61H2LpLBeMXiUyvqyW9uqpJqrzormLepQe3VwfGekshAziiUdsDTcQXFQ2eaRMSeztySMTrwvGT45VSuQ4t6VS6B",
  "key30": "2Ykgu1mhgg4iFssHXmmFMxkSmotBEyeYsbbPdTQTdzksrhyDxhAWWgd5hGiucfiMYqiCKg95bu8Y6ndCE5g6SWnK",
  "key31": "2pWA5K6qAF3zm5o4rvQQV5TyHt7i8UbmrH7hoKCsP3gHh9R7bLYFi6hzt76twmyK4CxKMDAVjdkSCZgY12Tvmw1E",
  "key32": "3W42KPPB8wKtUGSupichCDV3pnacHNhtQ5oyQ8rKBxG4Bcd3QLDT5LctFycWM4AVnqfEcyNCPGNqmGfVMDACJhKT",
  "key33": "4VvYnsm9oxYGUb7oa52f5AKoiqeyQuvtHxM8oWtxUnRqNMqNdCUVRE19HhE5FLUeF1sirugRo6NMr52BmM7vaqAQ",
  "key34": "3cvkhJcpA64PBTBqkM4XHPRjWWD6hYMFw5N5ttgpwgSeFEhKZzPkz4bj15wAvmjVSqYmLDMoTV4hgtpCwcJu22yM",
  "key35": "WJxP8Ns9YKNLccq9hwSoeAWGTMQTHnHhvUFdKu7ANB6d9dyFhozvdVMi2GtZfVwo1PKojzvCXYw5UAyKW5euwZz",
  "key36": "3YgEFXmRhANgSbCxzsWeZ5P44qca9GzqeidiGQLZbfMvwLXAf2K2MNZNwpTq8jAw6Gr5Ha7Qz4dVGWtDQmZQPzzP",
  "key37": "3h2cyxxfBE5gmsAJieCsegaGvADii9HLbbcjfCZpL7zM15oVTAp8jqFsRMVgeNoaSmPxWhDsLB7N4Um6PcA1t1dL",
  "key38": "46aK9rdQPBuui8sHvdWAgLWw2n5KsTP7CkEUNEzjgtdnsjAF7QwQUpFFtzd1YZUKoC6tg8ngHBPKq9SKG3sD9yyt",
  "key39": "aWSLgNEqF9VPZfgt2RazKJoCwtF6fzS5Gu3L6pnirfMYxaU7JjkiDZpULDxB6ZeV5Cvj8yuNqA9iRCktGzyLfJi",
  "key40": "4tUvVcW8g6QZ4jL7zf7YTuhpbKHk9U9SomsVYFDi1Ay3KskpJxHhV7CGQGzkJGASDJhU48L5bPwGo91TQiZ1G3K5",
  "key41": "557NG4MFh4ZEMyWGVBjM7vTeGr4U4kVztbovD2sPh3vGovE9jV8nqwAeUi64Kd9vCt23n5BdKwuRtKDUWKUb9jeW",
  "key42": "3xRyJJFibgcjX31rsfhdGrqpFkiBoMpKCBHwf1Virf26YYv7cz4Tpr6VFBnteEuRPGtpdePU7YmSj5WtkasDn8cU",
  "key43": "4yYWzRS7KECWYdtc6FiqXCFDgozK1edUi785znKCdMJQrTweWESjXXtHzg6ekopx7evE1ips2gxNaYMF38RWNRfQ",
  "key44": "yJcsCVMdQrtx8pgMdWCZ8XCBx2EVMkvqAVDNxaLaPpvydV1D9wwbuDidrDxmGhmvXaosgXnuPLnbD8XoMG384v9",
  "key45": "uqpw7bsRNQatagM1q4H4rtsTaLScEbfuBaTE6UBizczvRN3vYx2TjbvK64pZQWXGbqrQjdgK5ErqcJtuTXKrESn",
  "key46": "5KbPWGtYK6BfWBFLJyqyWSy6omfdupQnXnGZPjm1PNpT3KNe4djyD7b6qZpdaTZePuotHkuWx7zDVyHMqStDhGyp",
  "key47": "4Hag9mYpdgwCSbVPE22DVXzuZvueijk97e19i21DbXRubjgGhqhiMpQWV6r5M4og1ry4FVkQjERqW4mtxCQwAPYM",
  "key48": "64kyamaExa2mzg84NoGtv8VQVp8HoNctMf6svdZthUR8ed5Vo88x3ZwzhQtxLWCspvWgum9rxTRkKETxDDoCASjp",
  "key49": "4fwCEpzefrC9AzhLd7MQ7gdkHZMQwgAryqs2WMUc7UakH7xvVf6t8gzytiaLUfAypoV2rxDNKqjDVqJ5Q4Ad1USY"
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
