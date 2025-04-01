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
    "2g8QyYMUa79WgNmwLxAh9CvZrkr5g9BXAEQNbge9euXyEmTRCmJqgJpwi2LWv4ot6yBHsDCVBaqYLpqGwzrCKNUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48tnWz5gPxCq67jF836ZxLvKak57XjV6ZxWnnQHiA2kL3C25jD8bL8VTAS3Z2h5By74KpY83UwVdmat1WdyMrTdB",
  "key1": "5TYtiBMYS7AmoUYKZqEckqwo5t6qrt9fAvFt5xTYybpZSjwE14WUss3VGzZaFdmQs7zL3JxwV4ttbndCFXPsPtxC",
  "key2": "5LENhCNpW1Df1SJKhCQhT4bYjY1FpkZbmH8xETEnn38vL5foePDFrocM7BSheQqmR5hCTExXUE8TjA8Swg5eP4iQ",
  "key3": "4ZmW4YeBLmLiPDNy6YtfukzKd5a4bPd4ooxGckrdrmmpnMZn5vpzAYVo5FG9yuybF6XEnWKpgBDKkWCu9A7P91Pi",
  "key4": "2rNH4MDkaZkgEftMKTPaGnxW8dLPG8eR21VxT1eBm6nNFoYRFra6zinyrQXg2uLNECepiteLUQwXdBte1QLvK6ER",
  "key5": "44iNnvAuQGfUq5kAGn42yxVycKYbRuncRSirEoNTkz8JNsYLnqoWdGpVGXMfY8pnjPyqJXMYupskqhVJTaCZB369",
  "key6": "5MtaBA21gNfo225emqrXQUYGcEExfLYDFTVvZNvDjkidta7VQVADYidGUftGacnvpYnNWGHAeCUpkGsTbnv7jgcQ",
  "key7": "3SBi1RvEkr73YcdNLMd24dzoihpw8xB3cWe9DwbFiDDJ3VgyawtYG4BCuDqqwTmZR9wS6u1XchMZfdoC8htq3gyP",
  "key8": "31gTttEdyWo3QM8t3hkiuUK6Lo3ku2qCTLJpKeVyAmi7NfY3aRbrmQPigjZQTQhKngKaSUYKnBMYUvMDFbpH1x1q",
  "key9": "5mLU59SGLJBiKoqNQ8UxCF1a7NHfMgN5jvSQNANrFfeCNZ4iMnqCCUuS7qTp8kizbmTg2DrcDfktUgUoS9rH8wfb",
  "key10": "Gyc8tTjczXujrWMdRy2wN4oRUAdu3WCdCvHveF84itwNhgp9SMAhKJQH7kPhWaJwpkq8wHypuzUW4rNhwPZKmet",
  "key11": "tYQFeQDGVkN1KiUBPHaae98r69BtmYaeUrCGjZakQh3qT9LL7Yd4wcsbGYBRVVtGTfE9PPnuqHjgfuHvRq6qAa1",
  "key12": "4N78qnbr4gg8EoGXBECCSFmG97jcQuR6voeY43k2fMoqWdcwkswDBsAEswrtdsMULhWFb1mHMgpG8rV9au2y2fCf",
  "key13": "4eamBkzVnhuadrsq3nqVB7HDT5PS6cMw83wti4k1EDy8Anii5n8S1P4jpymPsewiTWPB2EYs2FABXHbKK8WJTw7Z",
  "key14": "283qFwPUUQ69c2cW1wA2A3AUn1jFurQLYbdYbewERqLbEJ62YMXpthj8rDHt88CbBog3jCWTNuL3Ea6iPaad4u7Q",
  "key15": "3TLYRNj1m5KGVVtw8unnSkDHSVYy743xnq8ToULSnHBSC6F7moh3JnSv3oRzfbhBYuqgreDgSoGny988j4wYYSFu",
  "key16": "Yuy9mx91GpUkirjLQ7uKCvT3W5VdnJ1sVSqQnmgyXWHKrBc93zZMFRFqRt5YJEww1u9qQa6g9r4itzzAaE8wGJu",
  "key17": "4n5xAdTwa9X1RPhmbwAxND6rq1pJFLnukULSdZHNzivHfcmN5GD8rcvGfFuKrASbhebsco4ASWcTHi28e55H85fz",
  "key18": "2b1F6gM9se5Ayaey64h7vcQBJfv73LZBRS5SH6ddDXk4wU8B9NXB2bT7FWdNVtD7XMBtEAM447KK7GEeJYhvGciU",
  "key19": "25RMLN7uLgLp7QnG1cSSeP2xhBGYXGGbWMHyfjcsTAiCJtBRJsqYNjBz5kHgac5ghqKuMYhPBCDRK4DuHVzULSd3",
  "key20": "2Bx2baLaVWN7eTj1xmS9z67CJ7hiXWxZ7FV13fjrKFpkmAe7UTQM9HX4gNGZ4dzMAcERtD4Q1hCeLs2emqqJoi1F",
  "key21": "55yjxC3XUiDgAs6EwoYn5R5KnHYWRtR9uyzur4LGwvXSriuFMoQGZK9qvYsAdWPTW1uXBwFmRcKY13Jwxoa4iW4L",
  "key22": "2G7nxTuNwgP5NcdwnD36bNsCiC945BPhdiSenixA1LFFb47P7WZW9bri2ryPQci6getS1kp6g6o4TfrYaNs22Z2H",
  "key23": "fpdS7qBQpqiMH9ifxBg3YRjmgTc8pGYnp3v3cs1EXuVRXXw4voKRoJLRtsYkqeX6aDhoqZwtmBfsJuWPkt2MLmi",
  "key24": "LVrLb6fZ6PqngKom1EHF43Gz5aXjgiMWyWFDzmypPBLRhJxkT13npsJVknCD34K2NQT46nL84GTb5bntvS1Emsh",
  "key25": "7FjvR5Vzv4XVPJdoYuAwx9Ckx52kBpThsxjbH93Uh2x1Eq33qeRXujjmrKdNxRu2ALLzp7vx6knWjW2b8Cztdnf",
  "key26": "5b85vBoajo1p3cJD9Tqbbqrhw4gf5GjUTpbCWLph8Eeg1f55bFhxtFwnqNAQyVBg4hbFg1M7UfFp4QdnMgds4C1j",
  "key27": "4MPWzeJpCa1x38oveKwyww2JuAmesxnMhCNwvD5gmV23Ptk4x2Z3j9CoVnqi6AQ7jxNKysZhD9cCDW6mXt2mMGZq",
  "key28": "5QoFFNG3a7MsEqfYnFdZ3cAChhzQQTrsQNvbSUFSrogyMXfTGZVmbtJiXPzzTjNW1tj4ux9WMaL6FkmFxYcfJHi1",
  "key29": "yRf9DHFK7UmBr31nhFENtAMXcgATnVSDKqHb5iGw8heD57PTCAyrxZ3Jcp2yZqonV7n7PXcfgGS6LNjjhE4Eo4V",
  "key30": "2hw8qpccjd2CDyubRNwkYS1xtxzvacKaK4Ss6MjYJxD2uw9djmQq2y4cERUwZ3UAqj8v2dWhiyWEPTXPjHbveKqz",
  "key31": "4mnJqEzTfKJoLwapGKLVuki5guxGZJSp9vSZm5wcCRWbHXkaHpcmwJmWTnPNs5my9WGSF9J8ZabkmLDtf3ZSzdnH",
  "key32": "25L9PNZHqPb7Zk79BgXLiQnZqHaSga97DuBtSW54CLu5qSU5qHpe8XEPcL2DEgnb5S92XJyLNs8iVfXRyxTsgs6x",
  "key33": "3vSXeL7K6vFakKBgb6yZPWi1MnthvL9vBwUzXWcgnC3Y1fNJfisjWif9z1TMhMo8f5X5wQtcL38d8c8kcDbtVTy8",
  "key34": "iFjD7xrRKfjBaZhCzV6VUMpTxgSiCgBXKKZcm4YGbbNPQ32A3FmULpZb9Pn2MVKVKLrA94T3j5j9jrXU3rk826E",
  "key35": "2QdwnR17dXFHh6UGdq5QvDNXqcoRsa64odh8fh1NxmnUftiQNunEE893h4vbFzaYZYKZFBMABWX4UYPWKhZd7S3o",
  "key36": "QE97bvXWSU5ZiGhyJsUK7nFokk9DRjW37bAiz1npTckQLTcz5YTcDo3d6gTdkFYjtqXpQmP9qmiTWcXAQgC5AGG",
  "key37": "3kt3zD4nzDte9nJvdvPBJowjytynMCfp5FvrfWEaBSgZQKGmgHXm2y9We5vqxx5Ywy59C2538pPwyXzVvDrrTgtB"
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
