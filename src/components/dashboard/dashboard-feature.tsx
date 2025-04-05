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
    "5uPR8z4KP5JMmbJDuoRu4qzSgJeui9DGGYXCVMFy5j4h2eGkhmvJtN4efiv1ZB8CMd3B8aUJejdx1LvH1a46m7oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zWSBpNiJF3AdHUX6YuoVnHvbcaghbJEZQ1RnyXLtYSHS2ZQzWwfyKiJZLJKUiHWMk3q99qF7MVKRXjbFuTBLgkf",
  "key1": "2ommPQyxAwvFLDWmwhxJnycATNedumazCy7PPGCxisHGFELZvcTBifQCKijNeW7bwR3arHg225BN5ZZFkoQTwrzr",
  "key2": "5jdLfFwZtzuX9WHrf3L2SwjsW2QJkmvLwbMvVrUtKNEoax1fkPi7AKAW7sqdqNeKHuEWEfupouyixvKtshDRqELr",
  "key3": "2Sn3mNdtQ6APhmzyFpmyLUYFV7eVujETqyf8ohr3TLBKJSmFzhQDc1xVNnmQLLYc5dyPytKfGTzKteyVpeTd9K6w",
  "key4": "mvyxPXvWxRvPgtyyaev9MjMHPr9F31DYrvTAt2ud7Xh1BpZjubKufiZYncuGrx2Ez6QaK2XB6HMkZbY9fmBok7k",
  "key5": "3NsLFxZsuoJ3PrDJPaCS5xhhRUM2yE6UX9aVW5mTSXSYjrmm5jLfqwrLFDNYYPNo12xKESo21YftdZX1oqBCxhzw",
  "key6": "4o6hUDzfQrLtkmnBZAHaVhWFg12VXH8zaYs4iHAYLhAo4qpJWt84zYtjQrswuvRn4sw6twXksCKDtRYkQbLJh42p",
  "key7": "64hhAgYy4GzQLRsnpGQhDoTiZw9EAwy4rP9awKd993V9j2HW6tq4Aob4BPqJy5cjZW3jKwWQfS6mKkyqzAC7zqa2",
  "key8": "3emYcX7bW85uMVKoX97kjSYoFqMk3G5N5sY57TLizetaTHpEe5eSc41ib3hh8UHt7HwunxiNN1dzFFENfR3URTPw",
  "key9": "2SgFHsMkDf7xuPKtmhnmsEM9hELU5PJGnTmagQs7uyd5Jg7Sdwex3G4DeCtJpNbhmRc3rMsoFmbRvpQMUqT4oPxE",
  "key10": "Tg8dFWX7cdqLNKCLaR3kxF1qJKjgv3Gh7zk2RCVSqrUuNf7KHoEsb4z2iSHVTrX5UFW64eHqpMcmaEYvFbksLWC",
  "key11": "4LeHMNGbE3NapFRJUSFLrAXxFxpDg6p4kyeeiM83zaJrSfrjgrwT49UaJvzUkH2oPHSRCtpvYkr43ov7US5PkEFs",
  "key12": "6sX7u7r6zs5CvZTed2QGJZqqNqp6WP9EtGXBcEBqF7StuCgVTDFx6Sw3FrgjJcmXoe5zevELdHXD9qBy2E5vPdF",
  "key13": "hqAQH2FqEcxW725McBzQD3YuygPrXVRdLdEV6Mn4oKiYFY5XCtAVhoynv7PEjLXykKJe3WoVteDsGqccdmYRhFa",
  "key14": "4BaEMDiscxTFASHknEiiPuBmwezBwTa8UBetBXPdKdvUd973hV9yF1hbwz4bqp5Mm3sPBqrt8nfHZ5FVE1TE62Pw",
  "key15": "4pkpYxqqvft8Bp465MPiiWAwi5xfSEC3opY8QpNebQs3qF3qSh6AwYDcSAXx16LJMKFiFcsZ8mAEp5X2ucNLesBW",
  "key16": "4XuvsLVy31PCrME2udcCMH4XATZ5wQxu17uiLddFGNzsDPXRKUFpqZpHdpd5B9x4mp8fgpSYnLRaqY2FBDCRaEaP",
  "key17": "5LKKPxTaDHMmwkc9Dti3q89VZF5wYL9nMLYAJvBqVxVsTD6S5wW85pZkJiDFHCGabfw8a6jNduASPeybd9258Txn",
  "key18": "Q4Do4Wk5uYHjBdZbFmMUMRcgTgHwtXFXGx3VfmxPyZ8Gtb27VVYNXY9ndME7GteJSLugC4Jidx68qyVsqH6uVwx",
  "key19": "63AQWo711VNhgqzpkMjK4HCkm3m8QE7vMvSK5xNZTsZc353uDDapEF7h9Mp6N667yZb4DE8jz4nk3nhnKtZ4bUGo",
  "key20": "2ZcRrRuc18E24qcYCf8vxar5rkxHAWbdeZU1zD59zPYD9SgytmRMeJHXFhhyvY7EkFnXttzpDBb7anCJNT54nN2n",
  "key21": "4tkvdW8ntebGwU9cWnX27nf7orjTbCPDR47nZRTiVJNk4jkKrpaAjgnbcL4fmZw1WU5Yed6QgkPJ12H7nD2FnpSf",
  "key22": "Jp48ibQuSukmaiMU9LWB8bxdTTdTgrST1J5QhC9JjMSsWJLcZN3Lk5w5xR7otUKCGm2TsR6Qw4AxC3z5C5uARVB",
  "key23": "23ujrmp7ag6fHd7JKaN2js6rnqhuygCqPWEr3r3gUWuRTUC8d13nr5JUzNpQVpMxPXBrpKdyPtNameH7zFF8Wyus",
  "key24": "4QmS8AWwd83wacVMVWkB91SGmjporbHTreAUmhjGT5kW6sHxxJ9CBDoGc6EVhsnqeNXRxBZV3ZTWVb7ni7aBaePW",
  "key25": "3zvZmw8VrUGpPEJ5XLwMZRL6yjNwBA6eSajh8W7ZZrxEuuHn89119UNnpkJAsGSKyXm8A1nNjGFgDHSSKfmycSUc",
  "key26": "5pXMKCnh1hcDUVLuVbS1ZkuyZGDAtM87QF6aDccF6SynZDg84oqdfe5L14YEvxZGoSMELWb3723PZD3QHs6ejt4V",
  "key27": "vEoJdKAa9psyNZD349mTrHYpBXjefmnkZU59rrfWfMsmHuSPZMXtqZ93sVU3TDKzkLsBMMJBqv7UxRX3YENE1V3",
  "key28": "5uhadVx1FvNraA97PkcScT7pyMEQAov1JLYYcJ6UyJaiyFYNDCgeqGPVD8s8Bjrj9LgKkDmsS2NiBbtqUYgEaPBo",
  "key29": "keYETCHTaUTNg9cxBXidywKcXvivMyfMrnD4XKmMdXM7VPgAuDGmaLbjZ16Edjv5ms6BAsmx6xyS6P44crYvWuv",
  "key30": "5kXQhB2NfjNUC4LLNHT68Ay2to2T5vAfVRJG36jEKLtumsMGaNC8oa6B1jXiP2iFzjSenEfnvBVtdZj25G1G7uuw",
  "key31": "5na916x7dg6eyQ2BmMPheuf5SgEKNRwHDDNDDrRXRcyPcoFnkG7SJdYmxiSWYHyZ5VacSz12pvPWWmAqqAkKLZP8",
  "key32": "59jMjvGsMzJR1Zt9EtsFKpdStpfME5K8vgsJTmYYuyjVjhaitwqwJTCsZhVq3oug4qmRqHx4XEVqEgbs9D5oCxXD",
  "key33": "57ABv5nnW6ziPAqY7XySNedG2jn1eER7cEouitsZabY2DCPfaeVpVqg1xwBKMPzaTabQTu7S3Q2v8WvfwDes8NPb",
  "key34": "2eYeVCAJuKHjocknhvWGq2Uu84PfLUpATdYi7nkSoiNaaT8gyG7r47ZERj81cYWRi5AySiVNP3FfxdyPmQgjev69",
  "key35": "2jPcUG9AiPYD2B1ciz8yfXxYp9QmVZn8VwZVipBkLqfLjgotUh9ShFQQehMEAM1RZ79z74zntRwZo3v3tUX7MiDX",
  "key36": "YU5uvK6MDo3jUH9jp8tC9d7cQpVKafrTo3ipAtLgdy2HEcbUhYMmaRUxcnZSU7UoxdMHYzda4dBqohGmy18QavP",
  "key37": "2RbLJdKLpwM5AsQACkAyMce52pHTHyaXiLJHE7JqkZ8eVJ3LLgYd1iPvDUhhvsr2Ax5JeW7zXfHKz8qPEpjtXrzB",
  "key38": "2RDzKsHdiK4o9W8h3rJzCxSAeXhYzfoXpf8RUGgXDqWWXU3XigXeFN3pUZWq1nX2ZZmEQGzd3EG8kwaWrzthcPtF",
  "key39": "2sdsPyZQiJQL2rz63Q9WFKKwCkHsGZcaUknQqGkDvdCHfhgMJnD5a5EdL3GvNt2vwYEKNNPPfveRU1mKQMSttN7w",
  "key40": "FrjoscUFJnEZrSMBXGMgTLA6YfMUpC9LYg3Y67znxBd7F5xfqe8vJjm4xSxjAnKLt9cWAxuwdyWo7t3kq5KjfZz",
  "key41": "4WKovwYgtMP2HoRQXCdx1k6oo3CZhjQKmgbDqjscPXNCwosfRessRFygYeDRtqHYv8heGgDsjARUATFVvDTP3Mcu",
  "key42": "5cQfMhXDyq62vMTs6De2aW5acViBqenhobTni2NXEANj2yWpUHLYPqH9miwp54YNyusp32eC7Zznfd7wQmbEtNv1"
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
