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
    "aoMjXgcWhDfsG3c1S3ZMSHKGJquudg7xzGwYqsnVjcoXETdtcvAXvoPAskjbuJ8FmoYA2otfyoBQkAFS41oLivd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UiGbaFbhL342NUk4oLsucomQThXCn5BQyWxr8ReKvfkEzppYEj9iQdHRjQVjozxWohCEGJa1CGEfyETbzyYEoSa",
  "key1": "4Vb7A9n5LY16MTyYTaYSyyFWpM4yN9J1SRawVFQjjdvnNZKSr5nAZNDZgMQT3mXMomou7y9wgs4RUSdemaNhjWxx",
  "key2": "5pdm69357tePQmPJS7ijV1ErPBaC7X1qAXKaXBnSJnVbzezhMjCtUy2vxpWorMTp8E25yKCfaXBtKVncdpkhHicR",
  "key3": "2ejBjNZptw6LqtSPGHmrJgHkWyKA96ZvgNTZ8xtp55Yuoh2BbcoLvHfkB6iaVVWDz7w7xMGKe3Pw4zjGHFADChLU",
  "key4": "3M41JMhCLETs1bMkxSKsyreVegGrdm6PJLcRh85z9R3D1WcioeQa57aEoHaCWqDDNjhb48hwNgbSgzCEpAeyREyK",
  "key5": "2GkYZB9Fz4VaHfFa4eGe3STDvn3dfPHWQ83AHAy1Lh78jEnwVKvaLDM4k9pyfFeBfwcsCerkApQRxVfPDEpoZfWR",
  "key6": "3PqVHNnDiz82zB9xErHKkNnDEA3i1aShc2vWLXTWL6xbPx9qScnzun5Mscg2on6r7h6AnXihvrkmsWmg9oTimGT9",
  "key7": "5qrhVFqNx1QAm7crUvVC942mZ71iFyP1xHRaib13w5Z7LnCB6EXg7yD7eD3vbSsn2nWevjGw2bVMkb8MWxUdLdES",
  "key8": "38i4DqpiXNLUxrf9TmFNgyVQE4jYC7rAjWQUFuG9Qim69Qd4eLwi4ueSAThCHAaH27w44yaZxvhGKTyjUEvaJmCF",
  "key9": "2HvyAE6hazqkjQtVndpxtNFrs93YGT56cbVQAgsPqDBm7ZxsdYa2mV9dR9geNJPrMzLfGdJYPQU4m832AcE5MbBX",
  "key10": "5pNhzrH4ArPbUmX9GD17D1ehnxWe3d9HFDY6DB2BK5TsWLUcFZCV3RQ6LCCqQmJZWWEskCLP5nCC1wsAiv8AzkY3",
  "key11": "xqR4sadhn5rfUSGneZthV6gKGZYBTezPy1Ptoieqeu6FbiBMwREbwUCzYXMyxWaR2VUgFo9Z6qCfdhLkoo2Jd1W",
  "key12": "3BMxHUt3v9QuE2321T1MvpyAZ6zYN5p9Tm8mwAsdwu5mWQLVXqxcNkq88kDWPTrRzbWxCaVPVMgBDZqmN5PkcBwz",
  "key13": "22hcMhDZToT1BmSy27JZ46UoRrNVRYvTSB5LPTK1mfJHYdXNtyzCzWksjjewkUGfhsq3hD2PX5C7gdHrBbLY6DxQ",
  "key14": "2P3meDKj77ANwTonyBJPytTQgRoyGJRfim9Ftcn5XFpZQG1XfqSH5tn7v1tcrCrNeJviPvqj9ntXLgLCf5FBfNN8",
  "key15": "2PShqGh85Fju3EyvTPH8zpFyPUDgzRaKTQFU1ZnNXbuExtqg37upoj8716mUetnML2waBXzFkNuo9zg6EHhercWj",
  "key16": "2MCtmLgAtVHUoimBt5qiTxvjK2WiqLgLtaeZzdZ1dBVjJ2m5NpvZ6HeHbxF3nFysYtZNg8kwsUfAEyiq8avaFd9x",
  "key17": "7GFhY1xgb3FhkwWvL1jZFGUcDgzWVFXF3PYFdA3epcbXSEputT74Khg47LMyxSZr4iRoJ6hTNSiERYREzoiG1AY",
  "key18": "3FzzhJ9AQwBL9fTTymCVgFJqqFVBkcPxNLArn7wvPYp2Fg18U1zVafQtck1ENqBrDwgo55uop3sooJLrUEtdNApE",
  "key19": "5rjL1ddu1WrNKdg3Dw1CQzvB2F75jPtMWmuTKh1HjWr9dSwFyA3zcJi8GjYS5yb3BgdUZ9HmNpopegwmpaSb3SMw",
  "key20": "568HM3aDThDKSK6ZxdQzep3X1DddvZRHwF7SxRK7SzzcbFR2xZjoKDSNg8yJxDCgvXdMcuiotFED4N1tqbYaxDAr",
  "key21": "58gZgpZazEDQnLWJfSzuPt21V71pVt3nMpxGUTDmFKTNXXjhELmEmpJ5oopCh15ZQX9iyk8XDPgafjX7NSjnUisX",
  "key22": "3XPYr1XvwPfsWwujUqHN6XCJwkKp5EY2KWcu9KKtvfEMu3KTqC8j4GAEaYgu4GFt26zFWFt6tabSnziT2tywaKH4",
  "key23": "HN8QySHmw7Q9BXxm93fMLr5htXjRJA57Ti9DfSsNgHQ2Btfyuz9J5oS7TvVrbGKneJCMVPmdJt2D1yugP2ZGUh3",
  "key24": "2aDzPp898K4FDkvx7MM6v8Fu7o5bX7G3vrd4aEmo5pPmBbbqYqG2v14cFB7oxxQEQrYJBgHJi7K26XAzTMVXj3BP",
  "key25": "3HmBMznTLnA57uTeGwA1BS5mKnxV5favGEbFMf5jBEHbH5pqv2dACirNHWxBbKy9fZoRN2nt4p9T31hS7piPwNh3",
  "key26": "55WxuFg2huS3JnsF2Y6ZwAhXo99AYQyhb1hoHsUiuW6MQGJiZyZeoucy7J7JE4fcKzHQgyzxPzvk3MHFwgZXLdLL",
  "key27": "5cmAWNuWtaesDCNj3rdd7tXD5ae9K5gdNGkWYmVXcZDCNYvUtupN8W9dXDdEa4gR9VwQYTRLBMNtrboeBWko2F49",
  "key28": "3tLPFmyVzxgwtjP4Kmzfah88pTsUnEDHViPEq9yXQQxJxLLfj3w9ne5oxfG9wxUkHeibwBkhJVfiB6GyTV3L6R92",
  "key29": "46FxBgC7Femv8ChB1TEXdmcUkWAPuVHiSFpUqtGRaQYUQ9XDN6ami7tE9A3UpGfkdrFgJEgeoRghE4mJa6v6ghcq",
  "key30": "1kJXrENruGwhh8mYsHqYM3NEuf2PCkF9mhdvb5nZvN3o9PLpka8xPLKdGMXvVyKnHmnnmKimfCYBia9raxcdeiK",
  "key31": "4GoVQCAE5ERnsLx4DEiSFMHdcVVvMtTATAqLYet44G4w4h4hHjEk6AL4qxwPcp6FMKAPjRQGA74R2e26ZgrB1pxE",
  "key32": "3ejau97dweny4uHSMmvFXvXRnsPWwh5ieYKChbYyEnts51vnTt6SYeARD7PHZEu9VZqeu1kZmbd9fMWQ7EGzWQ7z",
  "key33": "Em1M4ARr72fG9yKx3AzNJkd1nwCaydGGbzVXSxsoT8vvyGPKEoM8jaqV8U2kT2EiaYHyLyArzvwhx16sE48J1Ww",
  "key34": "5b2xrN8pYZsqUyNCgUJJTN5oMfAT7xJdJYQ3LjpqxNKCFGkbRHoFExn2QWdttaYaq5HGMnXAeA6z1EuxdCHNCWZQ",
  "key35": "gNYUx3ESsBqYDD3SWAnhNXhKMBTczkb8eP7SwtBvm3omJH3wKcYXwo4VjQhzKcyNVWNL7wKwun4rE9yWt2RMY9s",
  "key36": "5cNaXHSngAy8zPLbu2zDYi2CRFmm1JRY47zGGwovs9pDaN5Wn4WgqrvsfQ4zXdXiwmW6KXQjw99nYYXvr6AfcwEw",
  "key37": "5PBjNDWc5yGfcE5GsyUq4DLVfRX3MGJHrab5YWLjHTgBJgR6ApiGecJBUGJBmsiKFXWrWgEzgkYpayNgovJhjAuX",
  "key38": "59uiR7r9gvwtiu7CPazpGmH6XQ2hxQVdL6id6ca72nq7Z2Zpe1CxpQY55j9562SUmdw1i14GBFSYtzDq47XJmN4z"
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
