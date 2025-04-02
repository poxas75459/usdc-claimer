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
    "513gMJFMLTWFVfBgnGF56Dww9hZ7F5raw72GwJRiQEFSKw62twZpXt5kiK2prA9Sh47AwM3jFn469g23u4K5w2TW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53mSFifwwHdyHcR2DLwvE48EKKHP4so63sgS9PpbTDsxWgepft2MYSPn2T1QQ5xKKE4R4KwJuaJ9MyYniD9BPZEp",
  "key1": "49g1iHv6k65hAS1RJUpAadUE8P7L1ioVVRnUF1GKX6YVnKjxzDZsuV7Y2aZ4Femu8zMhMKj4VHZV5Pm3Ax5FMTqn",
  "key2": "5rGWE3LM8MGYLyNEQDaU92dQ6qLyQftcFUKCLEJzXZLRpWs2qhtj6Xeco7LK6zPVFc5CRFpg5EYdK5WyyN1bfkCE",
  "key3": "5VfNzMa5Q68dZVE5CXHDD3GpNMaC4UTU5VGZBzqQS98qxn3Ee2yNBGwUqmvbYAs4jbY9e3b3Y7mFwHxK8XHzgGPC",
  "key4": "3P5kXNvqKvJ9U97xdpbsLgYgFJDXcbtMu2GBoyXqFyPDEn89TfMksGECdvLRggK5hoDJhNaDTRdsHZTxaLTEsJEs",
  "key5": "5pFW4AAtrJNwvgD3bE9VSuE7oXzbcEat2TUZVwDG3XixwQGyUwoFrR9qzbv1egABcNP59ZTPJsXkah9CVzEcUeBs",
  "key6": "3YqPHWX1P8xMhH2q1KrmFfNrYPpqurwCjNbMAt2gtzVsSw5BPWotehwcyBdqBExndHr5ZCfMWGbzzm8KhkkDnwuC",
  "key7": "38PXwUVWK9Zmg7aSXn1idV1QCNXYLUtR2z9Zqtc5tbiMvSonLtW592cWXTVJKGxC94Uj9BpzV1feLEamdi16Zbok",
  "key8": "3BLysuzBP7UuRZow6out1VZtDuRPGBDjPTsRyWUdBsqKqyXcfxxzTSnBfSPv1azeARGGGn6BcjGhe8tdrD1yPdSt",
  "key9": "5HJAQ9Ws9XjLPmTveHhbk8YhjgZk6PYoKZtyaSrj7dszyBs7SzzYpmrrwJdvNNwbpVjVwU7cqtNJyuuiVof4kumG",
  "key10": "xnbZLXLhM9hwHii9Zs5t3eHQrsRrWMdN4294jvWaVWCHEhoPvxTNh3z8hhkLPFecL2Pv3Z1rHMF8TVqtjvLQife",
  "key11": "21EUps3vs5tTgadxqfCHj3sgjAfkmP2ibYZpNS2oLMy8oDzuanuhB46mvJYAnVsuU3tHqS7RV669fMz7aNP5L2oD",
  "key12": "3Z3P4fqkfvZ5icUHiFHrUtZ69TznsdWE6uqT3dnmnyhg9sqidBWY1aKiAzrMbCp2VGSYteXXEL2iHCD5yra5pUGL",
  "key13": "4vmZs9D9XWm9r4XzZkD78SwyRL2vb4fnjLhszFpsHcniZvsAoZkg6Y1WWytd1pcrcjiC15uQ5QyiY3Bw4YabTzqH",
  "key14": "SLFu7vTgqyCB9EXUbAvt45fGK1n39dYVi2ixS5yVYoDbh7Jjs8mWshJJAcr7mFEf47hXw9YxznLMGVyJDsooaSv",
  "key15": "MBeSiocH2sUb89RNTGCCDtG63JYwjpap3udZcAf39rorjaDmKZNT2UL1fD1fUHcLzEGcHLSZ352kcau9Qzpqhcn",
  "key16": "4NX2EKwRtq9zqmWQ5ps1vG8FKz7MdtNtDHSeLSsHr8dFRiSMFj7a6e7oLantApq8ZerHsezBbGnxwwVnCrSVmT1M",
  "key17": "4F2jr8XLQxiXTMHJUgTJdZFz4mrLePrHjjwstS1DbwC3GxgyrK5vEdSjHuVwEjQbKrH1SqJVAxiMpEkZzptbiQqc",
  "key18": "2PCwb43Upv6cdGdMJpEavecuYhRa1LauwHGR64JqnGDJ895oi9ZvSuaLJyRgV6zMf3VrQarxjKRgccpbGPASNg4c",
  "key19": "2MZX5hY1ZJ32yRmy7sGxUD4uv9rALqmbbnGkYeMkSagQCSsNghcdcpeR7EmboUJH3HQ8zx38s1EoghA3SLhdWKwf",
  "key20": "4eUwpnjiXZE9cLcNAHSdUtMb1zgAChzjyBBbDEuHSML1a7TXihJRXKH1z7JovcdQ2CfgeVptryNdyvidpX8BkVSJ",
  "key21": "4F4A9c6ufjfBA5YwsevzLusPS9gEbiUDHeVK8gVp4Ck29m5eqbv7pj2jBVTytycKnCaZwvBv567rJ6WbRax4kwdm",
  "key22": "2814gJPwVgMYMXstYHtHuQNwTpzP6SRMNQdf1EyGS9bCJNatqUQtrEUDNBVGLoG9VXM1M4r646hJxKnjQpEQTA5Q",
  "key23": "5U5qhQGQbMdtQ5kYhjBoKodGWsbc3jDixXTFVwyqTFiMEjrRFA3ogFmtGHiuREXMnLS1CoCJQ2ksHuAj4EDf7X3F",
  "key24": "2tfYyhnwyWFKcFokx2rQwu9vWyBB11Jv4qd7oAVFr75gBbj19DUGHksXwezWhj9Gk1XuxZrDPJfD9cjkBGQB3o8q",
  "key25": "5LAmmCBY65rq8sBKMhkseyted4arAx7ihPDZSfezMp3B64nSMmPSwhA3f4c779PKqYxoJDLSaMc8S8pWy5AgoqyF",
  "key26": "a4hgb4nuRNeMUQwDAUJdpyPpzydyAyvKjrnksftN5ogLPLmUgyn4QaBSWfWb5qw2Vr8dMCFXzoq2kHXvjtX8mAy",
  "key27": "4YyHETGY9izSa5DnHeVVY6vQN8oifES3HEXCU53MKnoaBD7z7388nG6MZJTXXLwEdtquBDQUVAEiT2CZGAaZHypJ",
  "key28": "61Dc3yooZWXNx6tZHYMadAAr2iekHkZec8r2EQD4KwzJkqQCcS96oYTuA4E7YS5FtBL2T2hZDtapXYt2Dj1vhhrP",
  "key29": "24dg89gf3kka6U4tpGtnsAcjJs2uWsSTCYi9fxKQgy5urPtJKUtQwEY6c1dLcXr8TM3mhXewpSPSm28iDn5UNzXi",
  "key30": "4E9LVUYqpKe851WBRnrKHKjh1tqMKLYui9Fv18FhXqGxRVxL3YN9g7m7AhdqRTpBVcwfRuZaX2Cxeum25jX6gzuC",
  "key31": "3DHkfF8ukkVeLm6ykkuP3UsdxHDpocnTwuRjcQowGanESBsPx3SZfhUXN4QNWeNxBitzjePYAfQe8QbWozCzaz2u",
  "key32": "1YrmPCMLyBKP8MfiPdTondoXrBCSr6A9C7eEwJheHnTqMmUMFRvzjmDHsmwM2udnXWhpYCaYNktPtfovqpv7hr9",
  "key33": "5FoYQ5edTQui5S5Q4aNPdbwchiq14opReLbUHaisDNxYsLvSbboGVHvcJsxLKFrBi7F9vBSTh4MbxGyD4jGHmmnN",
  "key34": "UaKCqj6BwqnKDFasbS72hqjVWg9b6rL2dYsvvUBjUfFWkT8gkQgGbMcyH4t8RRRThMpuMhN4DVbzaji5mQMr7bJ",
  "key35": "2UgphcFMei97u55Vs6MUqenEzVB4ffBY2ujSqJ6GS6EQCnzg47J4y38a5TtSH7Wu1xjUP3oKx1rp27jxyM6BZ6FF"
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
