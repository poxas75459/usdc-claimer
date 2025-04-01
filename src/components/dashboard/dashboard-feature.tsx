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
    "5xUThq8WKPLCZS5e1iNfhzxeWrHpAH8TibfonfLa1LuZiWS3FiFyGcWtpSq7fJDShoaAwf6r1LPr3VEBkHXv8GCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24xwR3KF7vix3NCLDdCncHPuULPyKMfaztfyQYJoSqiyEJvr5iRknVHvVHkgiUrU9AYmgsu8qXcjvpPhEdGu87Vt",
  "key1": "3FzKQCE1Vu42nd5vAZWuQaCNq7ay2mkdbWbXtFvTzDvzc7K3esW1CgusmtojKgn8tdLWqPbdX7uzhLDBJ4t1WfWh",
  "key2": "2jKbaoNMb2ukaBWRKM1Y1QyKiBpRVMq6PmR1p8gPPmvcDagALgKQ9H5hQEpWU3SDbX5eRJALGdvrqMtu7UaYrN89",
  "key3": "dBCQzsTnra9aE9ykQQ5sMqLD1aTSrA3JJQiRC4rczTTRsbtz3e7AZWx7c23TmmHgsUXrUuYg4s2Lo6yh2YQ5Up6",
  "key4": "CyvU8oPagSNhJyNYAzU43Yxh2dVqhNYg9h9Bqq8iUU6sH3N3igkGJjAiNP8wS6i2pUp2qz4FmqaExwGxYNFSs13",
  "key5": "2Tpoa1va5boTGPyepgs5xGuHpd8TU6KroruSA55JmLBA1JgAXfqBAQ7ykpgAGCxj9kxQXirnR4S6Sc2QE4GXMT5o",
  "key6": "4ceNFFvfxAUn8z9BnubgVsmK2V49mFhsozY2Abq6vTY6nmCKkLFvES4mSMfpK3qFLR2Vi27PKPy9iaADpVTRtWtc",
  "key7": "63tj3jxeBXumvJdBu4N61HMo8XDQ6aWbA2KPLPeiPey35Mh7U6m2h9FWVhXmicmTPN4eQzKCn8MgMfckukNEuaZR",
  "key8": "4Tcp7bx9A7WLUpoPCSWtP39RVig9b2waQhH396tYkE5T5iZjx1wr5K4bW1VSHZxRY9ert8uxv7pPafo2K9G9n8yj",
  "key9": "XVjpRGS8zqwHhSZobEPp9ov5SxTwuuzfJ1rDeMPko2SZBsqEojFgqTV7zgiFkV2M1d34KBjwaE2A9XrFZmCSZXQ",
  "key10": "2BA3U6yQkCnMYMQULpd2yCfXFqvc8oHrr2CpeshpsFL8VqZMcEycrUVfM8VkFw7bVZmrRzuSuuCokfjBP1VepyUg",
  "key11": "2A8V9Rhhz6d6QUCBufSfvzBLXvy4iSrk24LmFymZvDjGZvNbdSZQCTXNFPvALVgHy5XuRJppGzyvncvCd3BUkWqn",
  "key12": "5axuCkrnhmwmWb6Dkwy9TtT3AWWL7smwC6RSoSif3PnTSxuzgG7oisfpY4E8YCkiFABuWyWFeeRc1aJADky7bxVi",
  "key13": "5m3XC1foKx9mfvQC5zxzWAERg9NENzis1Jx16N2JZu6E2ue6jUEVEYvtGZz7tdFnS2KKP3oWvVNqHLvzFaAFWgsj",
  "key14": "3bBtGTVAXjfsAAfWhejxeKWgo4DDvB1K65MQNY6cELgzraaRVH8t8d6EYqmVvmgS9EcbM6GUerPmHZZ2Zwo9JXT7",
  "key15": "4HuCcV1xchgdd6Rrqj4bjK3YLbs3o1GopC84AVGepAVtKm9jJqgzzwnR8Dx4GBjqYa8bn5koyKvF6dgPQ17ZUttL",
  "key16": "5bvafxUStMj4hTMu75j2aNN6zfKN3AHRogcVncDkd9XRyGCDwSkrb9kFFrQxJSFFDtCm89y8x2pA47gHDSjnHBZ4",
  "key17": "62WhUAisPgzyq4T1jwvhnypzE9BZwAL5SKNxiQiA8h3Aix9oBQNbL3oScc7ALyv6EsSnm4vNzDQFX5f7Jqnx45nc",
  "key18": "5EaPJCfj6UzcL2RuL5Koy3iZqrnLAzevd74CaAUnQ2Vxc6VnTtnusRaimhqsvffsMx87ML2YqDgXEJLVzSHziG5r",
  "key19": "29i1yAjCrNadiuX6xVSRmjkA6hqy8h3cy2FTMM9Ai2tAAhxJaJP3bn94D9GJ9yP51LZta9h2jyCck3mhiZZphAZT",
  "key20": "5we4xCtLTkXs9TnkQihPqjixvLubT5DZ7TdGmFEkmkfQg6bFaQvwjm82hWBehR87E4F23zM8knjqdCZ4QSKPrpDR",
  "key21": "4PXNsz1EU5kfuk2o34fuc6JuKHybrULUy9sqfd3PwEt3sdCdFGajfp5zEjjnQgjhgmydTbnAn1ZLNqgf6X12R7Rw",
  "key22": "2XR3RyeVABGq3hpitDFzbkbX9w7MqViwN5ch7z3fSnggysD8A5it9VfVRNTsJh8aff6taueBG2FPuKAAHe1Km6zx",
  "key23": "i3HJ89rw9zKsS479M8XDBCE8v5YPknSgJzamyWaa7zorrpZUGWQudRaDmrQkGvTPvY4BjkC7L5e7BmJkobCKVKx",
  "key24": "3TJXzdHFdjLnppmpxqb8bggcSTFbAVRCBWvdRgbgeVk78inj5HvWL9D9weWdsSzzsUFKNhKo3XjcyMitP6po8Xdh",
  "key25": "5pHiX91PosTtHXVTxV8WkBPM27LJVGz3Fshqn4pbXkdDaZ5JeN2mW1hKX8zryGgLeAHjCCXrAPPwVzFAbNXudSwS",
  "key26": "4USFaA9Ycrg9fMe68xWGLyLTyMH6naru48E3XqTv8N5Cix4g2sgx3Vq1AgNfErCpfHiPV66ynxJttXmJ1o6Bnc6r",
  "key27": "sz6QTcqNs9bs7CPTksENScV2ZFM8K2Df4K7MDwyP1hZTtpv1eV1CTbJhXbLtEm6bQdUMw7rEYRprzWnQMzBTVF9",
  "key28": "54tDy6y2Z7S1PMNqo9bECRbdhUiXwkNYP9UhzE2BeuTrwErQouE8yxzAMG9bRNuxuEHEYDPMCw8f2eRvsWipqdWE",
  "key29": "3afe8m9GBWGbvw1xCLvJiexqQaozqWMXUbXLwRJ18QPNQ8ShjbBQKNoBxhtsYK1peTd2S5oHc3wt5e5EgrYBKqRp",
  "key30": "3QNLGa53LmHhHBHkuPCdbCuHuRGKfRgUR3pLEFqfV2VgLxPVTvGDemRLWooxr37AroWAChAMKqoeu2jfu7jtttpQ",
  "key31": "he82WLbDBH5BRH2vMQvFyygte3zRZsrBcNLi5S2B4M2uzaWBBBLjYX5uKsxsocy4Jw1YgRzyXVsB3nZeaMmZp1F",
  "key32": "2mu2w9wYX4fv4WiJmP5GGmoxkQAbCb71Q2QNKGN6TFeRVKDZqTmByyfshJpWwMM6QTCMKZYCoqhq1tZoyvxSXW2h",
  "key33": "2TfqLz4pQaWE7mJiEp1nFUEGbKJ5eXW5WHTNGGnqgBCmWqjeRiZmKFjoajSZ9eGa6LD5Z8zxUh7UXn5pzT5Pu6bF",
  "key34": "478bQmQP39Vvk6iVn1V4X2xioJvyUwAbfyAyssWxxiSsy3dFoq286eP8W56Dp4cyGyxZwAUHmPRt2YF2D9MhXkWi",
  "key35": "2jCqmDCCSazBNhr8FGUDgUNJrWc1HQ34QJWMc5TKzPWFnMbnTDX16Nju1TQYRC3hfVZGr1Ve7sy75R2HgqcaC53Y",
  "key36": "5zHyenKUEmuAQMA4iJkKxS4XEQnLZtt8FY39YBFWvqQnq9tGiHcVRJXCpQDZQ6KwuX6ZASpwMcBezqV74v8hN9vU",
  "key37": "LeGTZXBfjB3BSQU5g9SvBNMTs8ixUy7FeZY47khsJgA31DfEUZb1tTvTG6CiuT8NUbYzZHg8sS3Gz6AjeRxHQhM",
  "key38": "2JSG81vCw1rn3JdX7tTL6zAgqGPbv97SfRbRRucwucPD5wCPxVVqAUCYFyMNm7DQZdoDSHGNbZ7SqVJGH86FBSmY",
  "key39": "22P1jgqK7Kh8vZyJnkteM47ubPsqu8gDz5PmEGGB8ueBxgru9TszQvT43fVHjcFWgBo9bN69f4fvPuhoMf2Qs3uY",
  "key40": "5AGxsvrxSxe1u1DnrGwsHnvmh1J82xNFeWcgouaCURvkGSpUHDMpoQBTFkKgVA8VLtMZEt4pAgFoK8iqb5zxmi7V",
  "key41": "2AxpTtBbv9NrCsLALMu8wFFUmEcnXNrWQn9DMhw19oAvxoo7h5h8GGBdcw1g7mxNiTusAQt8UJyX959oyvgTkmEs",
  "key42": "2957MgwJutGY1fv9niiW4QU47z3ix8onLynMGqMnirpQRLZDEe6JCesuoYFo9jCy1cNZT6CK3eZkjTQi7gevnVey",
  "key43": "3koPxJDrceETBvGaMZ9X9wZDpjzyYi3woGJFe69aJhAWYVbZqxL5CCpugx3h8iutGYCT5ikY8XwwPF6E7ZMjR2uM",
  "key44": "3sN2XzCKLXNcHHrn4JqraAteguzaVZcqP5L8hBb7Z8FtxTQp2sCDhy3UH37kxGo987MiNJ2Q9Fheg5eicUko4sdH",
  "key45": "gJhVQsHCZ55rJzM4RrmYiqbtUNZoaQgeRerVi7MCRimXzPfYn3pCjHhKE37e7JJFumGwWVdP9bsuvrNZsFRNezi",
  "key46": "5q9ZGZAN1erTb5oC9mLeF7ukLE9SPXRgVxRysTUfRoEzC8ccWSEWJBXVwqywKx4tjAbXfULjV5KprVBafR6xdXQP",
  "key47": "5Se67vCNr55F3hkRwJA1cTWKkua5QstyEFdC3fhdgdHRfZJWivY87gnTFHxuNE9Ec84c9Ysenh4bNnodEk8qhp9o",
  "key48": "pjncCyau7VtWXqBi9Ho8aX6W7bthoC4svvprYsyyH45HVr9jP5sXmDGo6wj59NW6DxUZmcLoEYBd5sMXe67EaXD",
  "key49": "2yqZFJW59mcnuXozDXC7hZizoN1MSGXFPjz65o4uoMaJzwWeiSxiansmwA6vaP3iMkBYgoyqarpcTVQAZkbMJ2oD"
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
