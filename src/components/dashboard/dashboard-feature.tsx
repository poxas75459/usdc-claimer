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
    "2s9yzcjDoDQUdfWNdwPnNUK2Uif7Lm7Fgt7rpWUyFzSex1PjFbmPQdWoR21Cc7XCpWZBC9MgNtfRNPRCktUDsNPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HnFVwgfktKJH7RakVoidqwTTSmK26JuP8z2DMHPxTv6AT9xuujV1qDsNjJCAmDZ8DoivPbjCAMPo2SwQtoYACFZ",
  "key1": "4YFe9SH3acWJyiwNnhhBdkxBMFzB6u7d4zmA3VTf2ME6934grb1ri2oQTV3xskhPsNMFAPNDxScXWLjFi1eWiwcJ",
  "key2": "2Aer8o3ZyTwVrvSsTeDutoQtrgiBMRxaGu1QfmAHdHWivDQ1Q5yym3XyEYQurRT4vaQQJfeLJyXvosPXkGeSbTYr",
  "key3": "4CMwKErCNR3bUtTtwn3HtG3BcxAfcjmPwpbd3ouzjPhPFKp91mvyP5FUKzNTN5gPZPgRWHUW4YwWsFPMDC8pFZ2b",
  "key4": "3GcCT7ZNp4u4bAV2ZtrgG989GFhujZv4jRTLmtLySakYgCqHNCBhVXZR1ZdpT4jdRtRw4zjbZLsDUXH2M6NRa747",
  "key5": "3hW2z4x1e6wy6icGymseVRtgX3NVYuTvLeptJoaQ4z3YwYsx5c63WTmucPitbHL297gNqYZRv7YHo4NDo75h5aXc",
  "key6": "3ZBE353wQZKBNc6JfegqBSosXG38VYrfsqqs2J49ZHTHzrRH4776Aym4N63U3AhnKXphVKshwKoZLcK7BzbacKcK",
  "key7": "5QB7xAdgTZaxk6thpjZKawFVZLAuLvtFCgnxqD1tNrUgwr94HNnXAYygVqWHwAQJxxrSvLRxotchhYdPyt8xB54H",
  "key8": "23yiPAhjPAGsLhEEgWcziRypSeUfbM6BVE2sWkbADAU5v5nVn1HLwkAJdPH8FnKD2ttx4Cd7ybTrkfdRdeWV5Cjn",
  "key9": "5c9ZrN3DxuM8NXbNPs2j7ZeLisVd1BX2WwyYan1FeeF5NGRWKXyEqYhSWgMZ76anU8nwTR6fXGuxGYFRjdW2RSvn",
  "key10": "5qTkthXaVV4jFY9KA2q9UiL56sEcVrf21j6Pf1VaKnc5FsijQhyNhAmfYjGgYetFbU9eUuk3JyusnbjmDpaeStGo",
  "key11": "4G5jNenmiNsJDkoazihordi3Kuf2G7PUkjfqsHTz19PBw7MjnB4SUKSAL2rD6T1wMp5xiqGzEsLVFdyLVSwhzbTj",
  "key12": "4KKiSypazvz6Yca1ktVs6TzNtKovtvGwK8iVAwyy19nVBDfJJxkgGinfn7cEuVmAV7QozLFioMPWyGvf6zaShasd",
  "key13": "dWS62Vqd2axPTE65KjgmMkMzNJ9K7PxRgEThdXpTV4LE8KsnAoTcmtDJs9WaWDBX2s8x3zQ14utDPgEUWJ33U63",
  "key14": "9qKEjc9QnCzZWaazE1o5G9EjGKqmL6rrCg5u27htsgu28UNqX8G7vHwb1yp5tp1FNyWUjUHteD2C3ksjvj7imDo",
  "key15": "57d3ckMZjxtSWtDYsZfLNDszxsgMFGP86J8nznzyztx7rKTBLwUm7Sy9XYdPJPrwEuVc64CAtjLn5ADQndQuJ1YU",
  "key16": "5421MzeeP9fuLtnWmoJrnPpkqJPADb8Ynmb3pT4PjUp3ntMJPV9EnDCf9AVRz2SXXiVXKpwyk94FY9sb55BiNbCA",
  "key17": "2HMHjEJLgYDg5rd9tKue3hZsCmA9KbHurmkRcyFJowiZEtP93mC9xnHZQHovB8vPDrVV6TpfQUUgzuLEK6UMRvUb",
  "key18": "5PrXimJ8nnA1uhuKEmLkNUnfGydLCYUd6w4aeNMueikymczDVjPd2o49x9Z3sDpu1A1eQ6Pa3rffovkZr2gCGvXp",
  "key19": "27taW9VnXoZV9zrytwHy46Kpnw7nJDJ8ew2g1sMaxwDuhGAzJC2CvdYYci2LXgVZocjEfNVzv6nbQBpp2qRqJvnh",
  "key20": "4P6okGSrTRQEsnraCna3KCuaZv4iYfJFxqWB9tBNwiMcis56H9r43EptjroVCAsRWqMxVs19KUdrc2ymBaZJqGkZ",
  "key21": "3ubcSVe6jyWjnoL7dx5rmJrcBC5fhbdkHbTsQDNrjf3TvzhQzH4aw3wnAvivM8x8GHiQEdgXLz3y2dS245HV3WJe",
  "key22": "23NMC4gLtjvjHCx1Kvbuk6rWXoVThPKDDC3paQKmuAsgg2WjwZfafSuHHufAYRvmgedY6Y9kcb2r8mjWpMyJeSjx",
  "key23": "3E36nwbnJWEQu89LRY7YAWuFwY6mF5qPdeBzL4RMayTPATxhBpRQicc79Pb7LmrdkGTswNc3iQLZ1CuwDYFiGNkV",
  "key24": "pGr9CQGHdw68nTXhBHCTYPdTrCEmLhKT6ieDChUpAMkzEKwhzzskgZiBKKWZiEQ1yzmjmN2t4qrH3uYreZaUBnY",
  "key25": "UEMzQbQ1N3g8yDJbBT5fYEFM3J7od2jZepDnF976ntdwumY895ZSxfBwZSK1tpvriyJLELXyeZU7hEqyEAhsnMR",
  "key26": "489x9M831H7ZzWDdMk2w9MLcrM94kFw1gEWKQyD8cx9pfSi8D9jXgKMrBUauJTaxmdpAjuNax16kz1r7AgD9svrs",
  "key27": "5F2FDGJheZJr6wreE2XEXR3rvsUo5c27pgPtDncNKNr1cQrAqjYQZL8KfUJfvVB1SxavfHVqRHuFJBpHGn8sd7v5",
  "key28": "43Dv5j5EyWTC5SkqAofy2LHqrC7kMyvkzM6oS3G7hARBdnGV26rKhRF5QqvBRrx14eoFDKrFEY4X4rGeE9tHPH1m",
  "key29": "4DYbhJ6W48cPpQiXo2hbz1E5bJc6RUDsZQQLwVGamaekL9AGfS8m5iHsBX9UKN1Cjb4HCmPxWn24tL7v3ebcZ1Ak",
  "key30": "464W3eQDnWy4a5R1pARHtXXhkusAhzngTNRuNpM6BD13LVJMmLfbMS7Gcyeo9prw4n8F7UZ8i4EfEqsdaogwykcJ",
  "key31": "48NihCjh2GQ8HN4VoshX7fast69ufPFKR3fkWgDHyoQP4qWF87b8ekrUT8ZSzvsagxpGZmTrJ8PoRv8MFiRnJsqq",
  "key32": "4qbbi1CPmscv7q1YyZPvxRaJpoQbcGzZzLa5TGuXPMRynFeurRQw4WSSyGQ9YXK1ZZrDTmr46PDNdDGrgdeFfg35",
  "key33": "4pAWF5erZjCN9tArEaU3L98KXuSW1Jhjtfy41VjAnL7ZLr5qdhyxAEAcTtLFPoAYQfdTop7mDMDUjCYE5NTaHAs2",
  "key34": "61dZQG9LrNYoZQ6tz28tXyNcvh5iVjhmmXBJuxHBro81xHB2nVALcoqSKWz9tzsNqxPfe6ajbNZpA4F4zm1CnZJu",
  "key35": "5gzL2RNCaK3EpVsW2ZEUU2yYxTsqrQLFM9q3VggLFDn6gn4AAzhaSgzYPA4RZRw2s5sXSF5T9h2FmNbfixAcHcV",
  "key36": "41AoU1uj31iHQm9eGf7GfGohDXG2455n6rBTUY9hjPY3HWMKa5aDGu7j24y5pjcknU62Dq47CptY95xBTY4kFGDK",
  "key37": "3Pvsda7t9MnBMdb39ssDjVWy52yNmQGgTobXd6YpPaKyMZuUAunXeggxt2f134vFMwGa6oUTkc9qCfcbDEqPN5v8",
  "key38": "rzPGd2dZnHP9FdrTouR2eWj7sSwvpvrWHNaFpwBf8NRsazFpU1FQXe9ob3zAB8QFtSoywCCq37EMa5MoCnp3AE3"
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
