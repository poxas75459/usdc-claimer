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
    "sd9Vkbjyk7yC3pGvkeXYNFapT5K5bkhthgRKedyiv4RatMv47p7b663oysMEPy1EkNVAw62mUzEpSYkscB9pwtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "127kM5A2CTpsREd3NFSHrzxL4KvdueScUR5XmagPwMSuuoYFWa3aKgPZfzYhV5hL6THauKv5XnhuLL4978eGr9XF",
  "key1": "3N8A7qaTbyuXhq1W1ByAkHEGWuksFFncvDHDxdEgdMusKhsNf3iPGkLf4Q28nGo2gTRhjeoz5uxwDBeuLKNsEAnn",
  "key2": "5zVyPmQW5TYCh6BU8S52Gr3rydwukUComVHSZGZX3cgou7J3sxeouBfJ3MTfUuzG8AXjkPEAMJZvUGSFK9KyR3jk",
  "key3": "XBvhY9atTuhGgMpLkUnNJCocwYZAA3DeSwWXANJX51vWgzGgDHdj3w1Czr2dYyRv14DEX4t3bJsHJLq6EySWnxH",
  "key4": "5Avc8ouQosQTSoAwK4jW8F1FCBUKxynUF2MuQ5oSF3meBW3gT5rqMwdwYFQXA8uy9QqSuwww2BfLSsfeaZwKc4pk",
  "key5": "5dE5dZW6T4pnoDfMdDB8uZkDDUsMtGNCvW6f6R8FeidubFVsNJSC2qvMXLdgnZfDFGrPZ1xYSoxuWxEx6UKoXAG1",
  "key6": "2HMyaZvjbJc9SgcWYupdHVUnDJFwsf8tz9SrUva2JJgwocPn4Bsw4v32LHBuQ3L1sXxz3d6At9aAMVuNAQn6qMuA",
  "key7": "3BUUxQC4fguK4XXLi91fMCYYpFRVwtFHC5qB8KTPHK2TEDoeQ9xdFpgojurcDVyBGUYALtLK4CGRbvaxnRf3HdWn",
  "key8": "57WdaP9oogLps66xD7DBXGB2QfnWinKQMs4DB19ijqy4HqjUti5w1UCiyHT9xE1ieFDQdnairbevNRPKqK27t35K",
  "key9": "X5yuUH9KxJNVszWXwccCDX8iFrmRcEfcnXoFQ8NvX8Xw9fyHryimNzuLcCwZSsKTdwVQnAYDAhfFEBYZNGM19aZ",
  "key10": "5L42Zpn9jV49kaBwQM5P8jGrmHrRTneqGk62d7P459B97xr7djrRi2sWWi1rFDv1u2egaqNuJF1Geh88oiyt1Kqu",
  "key11": "uZ2EBpocmraGJ74TWcwEtxDYKvEgmwxUr5BByLtANCPJgzAX4uuLYc5vDJdeMgwMKZBCu28gTbaJxjtJHhLhopf",
  "key12": "ytxUXzGxBErjTp7afNFaBDedUkraz5Kc2esJ1ooFr16uzqjzcsVjQeLkF1sgPk6HbuK7ELD1iwYHnfxPZKcdBgY",
  "key13": "5woBdQs5GBbzKn6VfjqLCLYazJkgSTYZhALvUCKCtQzTbkWmUN61FcFdVmWk7Dbm3PxcHWvqvEe3Lc8M91MGfb8Y",
  "key14": "499tpn8EqVDhPGREJHF9ooWufKQfwGgQ57ZPAtAgBU8iccSpdev5GqCXsJbBwvCXtaAyzPMNBvDMthSZ6jdoZQuj",
  "key15": "5NdwMy7j2J3eSExC8oQE6krGAKhSMUhW6gQJu2gAwW2RF2bkShd8jdgb5N7Tjah6nq2uVU8MLrwVP6qicdhRZdi9",
  "key16": "5gbLEQDn6j1PnE17V9bGpNYtaoEiqoKnyhHFcrJUAQi3YR3oungJgLihkGfHDnpz2KaC7qNkP5536XTJ3r4tp33c",
  "key17": "v7varR3uEPauwoujRJ2WXQ2hhsW2b5A6KyKdKLXwmrvNLZPdqdSFgjwUZh2EiMpPMDK64geoaFK8VWjandhe9yo",
  "key18": "qWAmcrHHSkkbu89d648djnHFwKqyvLpzrzU59gMQzCa3DC7EtR8md7mbF6BLNFzo8VSSG9NcHCH5h1csvLAKrSK",
  "key19": "2S38qidvxoRUi3g41TZ7pxw3boFiTyaifEP9YeycTMQzwZNdWMYvyCgvZ9jNFPiBP6ofXhr7bQ9CXp4s2jLqyjQA",
  "key20": "4ZKT3N21ogbVQLQ4n6w1iYxqHvgYDS81YPygwghzagHehJTUvij6DvGz9rBLSX89o3xRENrQeQe25D2C95JRoPej",
  "key21": "29Hw9dkobFUgzKDQKKDApGrfjjprY6g3nCLRUUHXPRvfpv8pQQAsfQQbhLwz9dfwCK1e78fqyNQ8iZKSUzKZcjkV",
  "key22": "v9f6JdvAny7zb722nVMpNHH2eZu6jzf11T8pbWBqK5LJeYeJVkx7JqwYZem3943qbV4FnL1TiCCGr5nRNc8yCdN",
  "key23": "2WftuTHtc3TKDDkruyrwT87Yf7UQbtU4JSGNVuig9nQssjKzqevGoCeoHPpmLesECPShA2KCo8dTF8XghQxTWnC6",
  "key24": "2in1crkvDTtLfv4wPE26Nc7VoSQxJ1cQwXDvYhDoqcNnpYaahR42aYWQwVy35ndQ5rtk4Mg1Ccfiyty35rs5HEgj",
  "key25": "4y4q2DCpdm4Q7XLZTKfsdtQpVR4pdVrsvfNPSV5Adrxyi1W8ZaD8BkNKeWNnXNCdA6P88nzTDWXaUAQUpxUMvaCP",
  "key26": "9PfKKyUY5b5aMtrdeEprtaPnXeaBVwZ9ZJXjfuQMmoVdD325BT6wYZuUfX9JBTGYBbMEuYnznAjEwwNis3PhneD",
  "key27": "5FAUnk12ebsv5PGc74hPhsdBpWCV5g5QENyBrrbzkmg24wUmk89TzHQ87DP78Fj7xHdLG8r7n4pJ8KrEFehX9ULJ",
  "key28": "5pmVmLzrGc1Mh6dmnTihVSkQ58LP1p9oA4FkYNu1Unp9h4MtCfc2BPicM9kqCyui7b5yVrAjWpzrtRX1zGNbDKd7",
  "key29": "55fcCSETbb84h6vbb8BHWV6z77UPxb4tXvUzcTmdJi9bX5YPpQTNHvVRPYx4TRr7Yf3sNtBNftrQxzZkPkQyECst",
  "key30": "2RFVZ8Vqqw42BYiynjbEeTJnMbeyFeDaY7Kf55SEGHyaqCRPX6pcgX9cP6mZ1dnmgiHYPehXsH7Racw7Xj9xDAoM",
  "key31": "V7QP9S3rYjBkiryMDogENjJ91BkZgwWYdPffNSkG4TKA4XcRBhhSobamFBquzHSSYc9zqwM5ma1MCB8VbZm2S9H",
  "key32": "4oXyvyHj25qD9qVJFPRzuwk4a24zrRGGtkF4UK1jfaG4LTVtsNNksjyCf2xFfHa5WDp1ogZKZPCVjqsTzCjBjVBd",
  "key33": "4QMeingjzVp6EVxrPTuuYZiLBtT3qiNk3vuSsQaS83JeUwG6CSuaFY7xeiDjSy19sBwSkUw7Wp4gyYZegN4SnSKq",
  "key34": "46wKfen5zeTtUuFHKRgqAkyY5QnGftGmvsh7GNGPckJkdLGzfyAQPs4bnS2ni2rt3pX6YmWYcB1v5S5Zhuj61Mom",
  "key35": "3EQBmrL6eNEMTrUnDsEYiaXALndbnM6kvr3qYpzhXf24a9jW93sDmW2tCAZcsAD3C3itMC9tWRwmE1oHGncyBefr"
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
