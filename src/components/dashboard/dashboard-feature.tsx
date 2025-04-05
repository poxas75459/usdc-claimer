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
    "3uWRn5Lamefm64EQtFLCv6Ys1DBcNNtrJ2LrvzNV6zb6fvJatY3CPsQqVDD36xvF3U4XRb868R2c5z4t3EsKBSWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mTxxn2neBvsVUUaSD3Qc62CJnPTTpskDeruvEvTXPk7A6fecnTzAjkp4cFGRHnrmoWg28hCm8L7UbntN9QBVssn",
  "key1": "4zXWSL2jsJrsVL7mEUSi1iDsPkBy6ByXcvtFDYavQB2qGGeLrkdgF169J9NdFvRFYHjBDtjG57YXsmDFjfMmemoB",
  "key2": "5fd9abTsRjbSMkpDqFdd5Uyy3ppDFWGndzjE8nZMbMgc73FCCTh8jvGdKfvh4TYtHMUCuAHnxuupT1nZqzKKfDQr",
  "key3": "qA7E8hFa7UUdUTEW4Y66AuNgtivmu1tehQrM6wosBjVsdzsLaSynwUTewpSHTjkJK6BhqhbpdFccFPk2Df2QkuN",
  "key4": "5uDcJQHqFx8ijZbbrcayS5ChsjkHuEyLgzYpkmic9a95gdCkEZ363ouYNxVLPqZmNbHqTWvbcHZhD2Z8HjKNyno2",
  "key5": "3q9nvUKY7tegF2A1NuL4h1kwb7H1VUFCTYmYH9Re4eVKA9KVxtP7ZdxucrXGh4ySY2a4SiitPKaSrneMQaKktBie",
  "key6": "3VpQz2z1Pck6pC4mC9Sr6Lv3YHWFBy51jm52WKhEtScmWeGWKS2aokyoWHxTN2UePhCUoGuM33MjXySQgQ6Gkn3d",
  "key7": "uN6oNe9qmPa3gs7aDwfWYKDchowdPaGPtCM8edin5btKT7MWFXYpps7iHrfAjoxhoRt7H93CpygHxCH82snmu5i",
  "key8": "oGD1TiTJTkZhP97XS2VydeNr93e3xiGz7QwS8xmVfd5WYsfF3h6ByFebmYPxjYSvPV2gXLhsiFGFBSRWBthCa62",
  "key9": "5s3MRtMuQsNWNbCTvvUggeTqpynAtBER3TS9TneVzT5zqAoKP6C9L6svhbZxB9ULM6bRYXFqBnNse6ynXqqpV8Sr",
  "key10": "2bW9rv4zoEjjVikqxY9rsGn3KDuYdSC3eac1hTqzyHBg9nPvKyAHvEJY7Bo4XiNjCHjJ5G8jxFfS4ZTtBQLz6f9e",
  "key11": "51eic5bb5UrwMzkc6AZCbEHGxeJXvn1c2xztYvFkpTkgFtydPgdsJDtZfbAguKHaZQ2N9ChMsGbUN7WYLMC9Hv7t",
  "key12": "4pEWtXjoTKn6DAt5x5kwUGn8iadnrX52mTKa9ju13rcLF1Yq6TPc8fsv8BhqaiL5Pp5A1veUjm1atbFaaJfM5spR",
  "key13": "UMecmHAtCsxVYUdh2Cr4Z3NvgXaUqjskKkaBNmxwmZd9UawVuDJrAcWMNDkcXTqE8Ej2Diaz9EapFgK9uSdVqCw",
  "key14": "3KYZa2izt9HtoNwihbpDCRPKevoxnUVyjWgicuULgpSodEN6W7FA7QDxw6CdC9bNEDdRZrfFwopGWZmR1d3GgZEt",
  "key15": "iNpYQx3JPJg5LjHLA3TuEJ1QEV3R64ML7Z5bLrWh7LB8TM135GSn9V5FdTb8f3hiLQCiURU9G3LkVFgqqvxriWV",
  "key16": "2P2dnYy4u3p2a45FGsuyzWuA5faMCTdWvCqCEZFzAKwbmEhX9GAqjYiF79daGkNgNgXjKxWSEZcSse6sg5LizZ36",
  "key17": "Mu2xsxpXCWCjnKhARvm8qMmYBcJXpUZYCpx2ktQzysXg8pWPLQdPJoxMpmCVbgLg1JJtZn4c5c4TV3xiZHJpm29",
  "key18": "33PM51v15bY78TUyXR5dCSEEkujMKSQqyz3cHTtgFRANUbL2C34obijkqFDeDzzM3KKH8bJ196YzUb5C1u3WaYZz",
  "key19": "39gTG6t6veLP8NpDoe5QdBf28kuhSxhnkzChqBdoXL8RDBKqKNgFb6qbUoEehErttJssHR1vyCdsXjDvHXUzuRE8",
  "key20": "5jpWjKdipFimYd4kM5ZAFLse5dzwW9MHi71FwDPy9pxFqWNfBiA7u3By3WCKr2ucCh12akSBjtBBEYDon5XtQHbp",
  "key21": "3AWBHHr1vJK9iggVfB6XtiQ6NUDvit8ZfoLUs7HV7UfDpsDHRuuZNawABaf1gZCp4vYBmsSfGdvKeZU5TVMU5kAK",
  "key22": "3wh47SPiTTuXcdQ7a1VSSoWvff9F52CeiGLTUfGcyC7WSqUdTH7UtXqviqGsJSxF5XXSAMoLUV1GR9uMcNQYuJRj",
  "key23": "48KLCqiEKF5Qgfo4bbNmw6qaD3Lzk4KNhH4r6Rra6LxmV1TJyCACQXK1J7c9xUL5b5C8DjkzmGU22wpHcMVz6TfT",
  "key24": "5tNNatk8kUu2teSksrfMbDFsrhNFXVkW1hoXSY5A8r2fMrC4vbFHyFX6x163Ccp64jESQrQocGbnrL3K6p5RUZV9",
  "key25": "2eXyiBGYKAqtYSxyahAe6qgPcpAfZk77tPVqUyyYZujaFHignSLvV9S8PYjGCoEcfFn5PL9ariPirJ7wCHCR5mAS",
  "key26": "3SKj8VnSzZezhceVkeBGvauAxRTcwYWDo24SZ68CsyzQs5nMKS9v3VjUXVUibSdF1nBBSJ6dixkh6RfooZpkoJAX",
  "key27": "5RT8MTh2K2QkwFiZhmZcfKaHjVyxDtUUkQcUJZz6YkZXETd7QDpR1B7HH1cxPAPG8NYgRT6TTbxSQqxt2ZZ1uofd",
  "key28": "Gj7YC396rHhKwF9hemPXb91BCkefaJkBUiZPn5hdnJknyhbuP4njWkvAGe4QWPFnwVaUbjvHA3gQxkNo1QT5gGU",
  "key29": "3rwfkQCSDWgbbW94riD2Ce61MK4KbzyGMb63XuooLpe6xjNdhHVftLL2Mz2pUZRvQc7H2aPWsybkqrxfVpXJqJh6",
  "key30": "XUz7BMG2xFgTnf9WwXixfgUx9zNyEKvzUBddmerPfDsDBk3jYh9bj3ZgrEecni73Z8mJErEZrgpMcP5hx1BA34k",
  "key31": "D3uCWTmmXWH2EnpDuji2YWcfwLkF6n2P3ZdUWAk26VnDHtUyxKamBBaf83x2mY6ucSZYnxCSEFqU2pNDcFqSjy1",
  "key32": "5g41NL88qnb1h9UeRqhj4fJrSxR1KSzdiWY5sZ53SMzyodz7LWq7UscbTPHXFQZTGcL33TqPAmW1U2xXKgMwtwix",
  "key33": "4ov28MEzqiSjRynkk6sfsDuyS9pBULR2HjPGNjEUUa5RP2sZtNTzdZiaUWzCE6W4SGcDbtd4ME4YRrdymx4bKfGG",
  "key34": "5r2Rf5yxnv5HRdVBpHSJiJvdA6yncUd8RFhKRgtjjC3pXJpwGSG5V66n8fPFusWHx7VL37oHoev2wLCLgfS652Cu",
  "key35": "5nczSq4byR8mWkc87ff2FttUsdsxS4iTTaFqW99mUDJXjwMSSjjxCwMa1cPRtZfD2W7dXwjiiCJCQN9ndz32CWVt",
  "key36": "4bT37F9ACGBcsUbxSsrApz8Vo6rgbEJr4yXxEhHDRbqAd555wVcXqRpTqCsp1aRe8CRMzscCkGPjUC5zYCzhE6nA",
  "key37": "b4pjvJdMBDE3mBz6FanY9nWHC4ByheynLQvH4svSdiea3jQLphGqkvmXqWJcQbXLgzWFhVSkPptsxMtGU4ZX298",
  "key38": "5FCTLstpzfcervVSKguHtfh8s5yk63F2Jv9C545ZJM6YskCmMsf9eDDWFKST6FUxHNWbSBsoah1cPypiWvXiesFz",
  "key39": "4Ew9tYexQbPZFmaXnxr6b8SHGKUReGQ7yx4SzudTWk4FBAWJaeeuyDWJaJSYRRzqGodEW7oLJcfrhvtc7qSVCBkc",
  "key40": "fNeCpLsSJsCSb5VAReMUcpU83hWerXShzWM5yzne8KpP5kQ2mkxhbPKFk9Rwb8uRdaw9Zi9NCCSiiECR3aMi4yt",
  "key41": "64nkWZgb7Eb9QYxEiZGmDnh7Q3zFZ9ZcbBL63xTtDk4fZtXHYVeUPPkU1D9he22ypWLdvaF9TGTAR8Wj1HCDYCoN"
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
