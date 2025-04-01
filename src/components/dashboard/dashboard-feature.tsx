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
    "yMVZxPtPCN6gecAePNsCd8uv3pCmfZoQadYuKqFvH6e3EWhy8iDWoaBxS3eS8GmwaqZg2uVz3GC9NzqKh5Pwv2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aL8DaJ3FJSz4AtSP2qdjrdySe9NVzwCTL9nwHM9J9wsdJe41dpCfoq6Gc8HedtKxvZxWf6GPh3rspQ4v4wnGjDa",
  "key1": "5ZhGuzhxcBncP1wnkBBaL5LJ4WaYTK8As28gJPHjWLENwDpiSduwvfoLZjFrt86S6tCL4RxdhfMdBhvbQd1NcRRG",
  "key2": "38rMHnzWo1V4p1Qv1CU69gJiBeWn9bkEqxEqJArtqZ6Fyb7t8oekk799grmFcoVvZD7aiFhyjYuEB8J1EfE5uSve",
  "key3": "65YuEPcLhD519ncQmLsoqUskjnzb7c4fsMbs8LhaDpYKV5R9KJHCku6THx25z3CPmtJEXgASRSQ1cReLSmfMvqQo",
  "key4": "4YGbHi7HbXaruBdw4rkQ5SVFNLnjAAWJWmbCXXffzKLRQogXf16wWaDBcLjapWRRG5Pe4siQ7V2FHrTJF7htXUPB",
  "key5": "3rHUUEEGPpA2u4jhtg5DjwLuL8nhxN3dXCerAexkpjtiQPP9FSJtLDgRbWTsXPGN4zdfskwc8Zpwzs4yeZRgYQBA",
  "key6": "4CRaHwRiFoLapNehEkV1Tq8xaKfTEGc3GSdKnSREmp52uA48q7nWkR1hdGMD7J37ZtxvVdj8hBEBn9F39CpUos9Q",
  "key7": "ZWLEm4jmpNnVbbRojFEcLqCga3gc5KN26JcwPfvpn7CzE5kxNSCz9kS9gBuK2T8Y17io8hGjuTDjzN9kv7wYCQm",
  "key8": "2RDdGMtJN9H5Xt4RD3ncAwxscCerrN7Y4nStWE2Ee5FHLFNsqCx6u849eFjkfsRMFX4EST9jabRPs44LMERanYee",
  "key9": "34QjDkzTdGjuMYoaF7wt1Q3J1g3YmDhgX155gV3ZLu1qLwGHrRfcsMAMg4H6u8Tdd5RFxf7Y43oTeHvhvNY7C5AW",
  "key10": "3rCGpyidgP9aLHtgBwB1xW2F3dVAtwmD3a4Jg1hxvnxE4ooZYBrcqYQHVsybGMSbqddfhoayXN8iq93yAdQYmoHs",
  "key11": "2qcx1rYFwmMwYag6S67nKdu1o9MVrAkxbtAmqCbK9pRpkshqUPZr1GpgzJo8W5E4Z4uV8DgG6dz4PHy6DRyEFUk1",
  "key12": "51XgihNnpiW6YrGeotKyinsNPQgoqgK6u8LJSc5WJre15EzYyJxczBRFbhAV5KuiyPZMFvo5y4nwJg5dzdsJe516",
  "key13": "7VaHvTxkRgSYZdDorQubV7xP8KRn1NL2aGBpMJgPVLcsChNkjR6tC7GRf8gNWa269WjL9rEcv5xUwXb1RVCKBrT",
  "key14": "ax3uT3X3ACiDwDTH6NqFPkQe2TuxdwnfS5G45HbnczfVURMMTQzPqfuenQmarFMrocfbGfssFrBM3CVw9Rcq9RJ",
  "key15": "5mxG4bDBsQac1b4ZJxfkZHaEBJD7vEML7pjJcoeyD7hukLvpXmqu9X2opTLXxQ536XGxujXUJA6jxjUHyPwCUyq3",
  "key16": "56dbxVVUqZ7wAiCKxFJjQQeUcVbCE6ceCEGsQeLebLNCokQksFgWQFSU97tjWY2djr6KCLzgBWX42UUNqyQdDF4R",
  "key17": "3FKEM4oD56fAKYCwMkmvu5kLujT7HjwCHDbzb8QM3rYxPzCkUwzC1D7v5HXTKSvf7eYSXLVFAMxbL3PKcge8Y1tC",
  "key18": "eyz9m2uSUUUw6NPvCjD69bWhhk46eejNnp3QSm1LVTM4vjxUmUzGLmwdxvPXbBNPXU6eimHnNvQjZR5Kga8PA3h",
  "key19": "5mUaR3QFNc2ZJmyibPQDzY2t7wXPyGur9BYbDvG38gy9vLLVapZWpmr3UmEs6mJTVNGBPE3jvfyPg7z7zZ3Sht7G",
  "key20": "61fSYQDF4DMxdsDK7edRkw3apMjC5EpFXCFakhdbTYtFeRXn6UiMF2WqroFsNzpN51fckza48YiWtc6HjwtXJBxG",
  "key21": "32K6ik5sYvQcuKkmwUDd7rCvgoTjfrdiVaQ5ShrNWzDLuekuf4xgUSCdrVePJLcUFehN2gwTgxiymnzk3SBgxifE",
  "key22": "KDrMUpwcaW2T4zNAQ8gG7hvQpc7or3NU327F4p3RDfxi9jBX52R52VMiMZi2fWNNhePPyJqU5efhxcZsjeao5qj",
  "key23": "CbErs5B2mvqLxCeW4hhjvFAF93nk8Ct9TXPgbsr8j1rJ379CbgtEXuKVPYf9ptoMX4i9J1UizicJW2mH8Hy9cRp",
  "key24": "2ik6jSwsChV7HG47zY8mUsLEzFwMiPhNjPBgzT5ZMFxaAABsaggyrPHeGVT4r2uQKZgv8Z3MqKMi8t31TMnBNXN1",
  "key25": "MXuBc1vNbqNefAjNi4jPocQTAjuiQjT2H1RTPWSYFL8P6ScTA5cwYpSHiTjsMepv8RbTkBhmuYrDRQiM7gM7auV",
  "key26": "5FoP94BscfiH1oLUpMy5QS9djcV4m9fmxTEbMggwfFWSR9yu8wBWjSjQ5aCi56EXU7UDhroMPhhbm6kVGtQJd8Du",
  "key27": "64QGEzM9y4GWek9ABxZKf1V7st36Ste5mjgGgssSfE6AvE1xdNPVuXmXcfKY8zfFwAoJMZUDdLpAGAnCCALK3TRt",
  "key28": "3pF8u1TPpqYYb8P4yWmruSJgCkgGRMLEVNVi7KpBpTGXHx1DQsNzKMvLn3KiPGffTmHzq2K3YWM6rEw1iRJLVNuH",
  "key29": "2zJHnthE2Twrs1vh5kRHgk9HeRW8rm7AJUiijBBsFBJB5iBYkfFHwgDh7gQJ7aXkNu5GPrLgRrvH5UY3mC3s4F9T",
  "key30": "5xPPdqzcDi8bWVLjiWVP8JDLQRTJPeJQ3oTL36vNThnYNV5FidSq3uvrNrT1tuGv2TR1xqjEbL1LmrzvBJJV6uyE",
  "key31": "2iHE1Ne8sJoyh4RfLTzk8K8MJXhMnJRmR1N4mrzdbDggS4K9V4hUiiGdN79DGntbMr6z7BccaXiNNK678cbSTKpM",
  "key32": "sxQ46n51Ge1gfkVhGqymVWfCUFMP9vHyoSSiyVR87gv59T49gEWvPYMoX3Xu6KnXhGFZjQpQ2TGmZ1pwCN3PYaF",
  "key33": "4vxnZzdDYxYKQKwzqSuKkg6o5zpFupygNRGqqrnk7VFAo4D5YJWGoSmPeAcHFZ7GV5t164rTQBrXqCEy7D1G6mMM"
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
