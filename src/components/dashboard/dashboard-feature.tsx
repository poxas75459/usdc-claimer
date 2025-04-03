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
    "48zYjeVi1MQmFA7V7ER5V59XdzJqrAFwfL9z3c3gFGcaYo7Eyz4eoNyFQmACCByZpFcxqFUHawgtPCwNdPoRtYg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EpFsJoyps3tgcNcxKmu1uTekEhp76e1v7t2v7swXNpbMRs2218QGzweAWope8R8iCxxpB2CDtr8Kcfd8CwBQwtg",
  "key1": "34TQ8cbf4v6GoSSnGmkvQWZJvksgEdLiKC2x2RceusBnzA4cH9hfX9op5D4sjJchNQjfNc4FQfmyuiE2wSEdWuPy",
  "key2": "C9nHxU1WdHPQoBsew3bSxejdDfXHHDi8ub3pybYwpKN1y9EVe4AxLdYMxtPuZnUwRzckHKAXqfvJu7hhVW1o94G",
  "key3": "mTZxjhFm6oMzqrssGPUS8TJtGDvhUQBDyHrCk3d5Jst6YR9zBCF47cFfSeQDe1BHmEZpRB8DGsTb68bSxHYu2QA",
  "key4": "5damteLZcMwhtvTjdvpvy1DLXMgvuy5iXWukm6osShm5WZmzgmX3ebsu7KB6HewgeEE9doFuMT6PmQPACjC319bQ",
  "key5": "3Mod4SpUx7wLNc1TjU7a8kvocyJdGzCJPU2rdAVCvRMpvUXuBzgpmeQx71zFdgr9BidpRyabKqCWaTzokuhbBqwY",
  "key6": "4M6G2cDRhLUsUqKXttw1YTupyi8Cga2zsQvxBETmn1ao6LoZTx9G3f9NCWi7zLhBciKi5nMbVqKn1U9d6AdKvFQ8",
  "key7": "37FJkZK7SXeLGmUv8CshL8isujP3rxU9MR7tofLFn3ZmhKT8DoNWHZ9SG48ehfqPe9FWuQWDMjuCsAinPLiBNauS",
  "key8": "fehKThUnh8apGhiBzfH75JFHJRiRiZXfvyBWBD543W7eHHYX8piuEnreKky6EfrgvBYTBfEpM2SW69FB9qDLUjo",
  "key9": "TPGPaontrrXQ3nmmw6L4JBEZaaDUE3DZw2ZgTL9FifgWTKhh8GMzi5J8BPPA7qLaEzGrN7Tw6B59DHdF8K6aG9y",
  "key10": "2LQTm4APzNTh2tqZf6woQtFoPJw6RNidvVWsUWRBQQGQQ3Rafdd6DPNU5Y61AUaRRv4Fter64q3FtRDKtHzNZLP1",
  "key11": "2d3QFdMrDiZ4Aga3zSEWKEZRPxSivTxwpAu1pUnCDsimM2PboV5Ggta6CsDs5Ps8oC73ZwV7oYmN8VbukxvQrx7m",
  "key12": "3whD5KmZG2dXRmwUWp6kAgGHzio9oE2cCUdwF9EkqiUEibvmVphg2qEADadxMzQK9eHD3ZVu1L9s1xr46iN6kNbt",
  "key13": "2SSPWpnn3H3mkJDwRPyGiY71KBEigiut8aKn2dTBQ1wM7F2D5yi4CMLoGQycGVFAqPcPGD55TY7yU78e2En5aqMj",
  "key14": "2W1mRVyPqgaunC4xLZqFpVa92vHz9EhfptR8quqQVCdSrZ168JS87jXoqT1GaxCSxLqNGEuHhWLz4477c2YKf5M",
  "key15": "3U114eKdcT3ucsuXrDW2et7WxJGLLURHaVA5fhg6x5SEjAyrPcZoj3qfpnVCcj2MQX2Hr9HuHMjTvB51g9XceBHP",
  "key16": "RczMJ23UZMmPpXoh5nDXjK7UMF8EpU19xuj7HmXtWRCuvHsueG67HVLhQF7HFhMZqQaAZZiWrvewq1P5GmaZGD8",
  "key17": "4ai5CFTUwqYuy3h6qhbFf9g87hkwqAd7JW7rzLiSNRqLMjGgDDaayp3u1LNv1EwBBMqWmwt1eDVcSX7of97pWmoT",
  "key18": "332VdUggVQ7qNtFxGxAPg61EtVDZShzKcbLPefzPMF7ZE1qHYdD45BJCMi6iVh7ZkzLjEy6qTvJJLxRcmJcZt27w",
  "key19": "4ZDn9B8JtQ1LzPnfoLtedyGAbMH8PEDbGLGz5J4hq7deToGHfvhxhzS6KjrvVo7YTxj9xLWMshb2jNja7yae7dN5",
  "key20": "8iEBsBcgknYdNLzGhXSjySDNu4UtwGYs4BpwowA5UeV7g5qndpQfZGb9LptQFeafqnSsASNoCSEQScdUkzpgqNB",
  "key21": "3qpLYT3F9TU6cqLhQHC7qjT96JsoTzKXWgpi5wmdgep8hEK4q9eoG45iG3yryAsg1FiQ9PkXg9RBX4mL7YACTSSZ",
  "key22": "5ufXYMahXAX29VEcEqwisjmuwnEMSbxsi8ecSois8HAw7oK8JwCrF5uwwynk4RGDfwrX5661hspchPX3ZJEXfq5R",
  "key23": "2eVCVXNeyf26oz9ngEd6wVgGtjE3nQ37nMac7ngq5ytJsaabas9MRFCoB4voDzpdFMfC27BGQXzQaNiFnRWr8mZX",
  "key24": "3iMEoRtJAHqHanqvJ95WkEVDQDoaSUNT66VyF6Aj7EsDwgzcmnKDkvkVWpr96wZS6qoKz9MFk2xFEy9EZZzfKdem",
  "key25": "33niXvSX1wsrvaTK16c6gqMh7hExgfHuFEUiDDP3TpcwCt2Jp2TwEUEg9GmJV6M3Ua968gS3WPF2rT7LX8veHGRb",
  "key26": "285DvxyAVRkh8nU3oNHEPfRJzCD7GpMxPVigYFE3MuRJinD6DEuZw1Rj78bSDziQPawYQ91beN3gtx9eKD3Uc9zS",
  "key27": "L3utrgTkwNRzyT5y34W5Gr4Mh1qiutgmz3AmBWhr7ZxSCTFXXcSPvUA7cbcXywfsWoAX3oyhrYaPU3xD85XHmcK",
  "key28": "w2AHD1vWPRE8HCdBHNJYjBWvCgS9rxQQhYzLmagSkPnJ8y3VEzhMrLsWyjHwvz9JW4L4SGFPTzij4wQV8qn7x9R",
  "key29": "291uEeiNG2QpmehtfGqNmaU9XttQUxWjgg65aoYNUuetggJarX2XDt2RaGdxJAQ3ZDNtCGevghcB4PXqoBAMjJRQ",
  "key30": "2Cp3Jsjdtbno51zh2J8tRotuWh1iBuyjf1P3J1efGmZV8D1viy8LrLCrhFRdX3sGEdCJRZZeQrwwwAGqyJEXWGni",
  "key31": "4THkFCeURnXaab69A2zTDtNp5wvbT33aiBEZNCxudy9UwSVynPrex2C86EZ96M4jVHKepWdARfgBuQfBU6UHpsqc",
  "key32": "622iGfGdA3jEVLDfw91SwzkkaSYrWSznkC2VEEaRaFooQPhnQEPX8qFzNiy7WdXi79JUPF1JRtQ5pEr1LR5VqAR2",
  "key33": "3bp7NB6ThWht9a1ccVNW1yHbfC4sRDb2FeDqqht2DAus2qkvCFD5rrhLeepFkaTXgy6phakNuBW77am6moVN3ioH"
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
