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
    "5BF5ffB2VAyeJ87qxwAbHRqNoaYfRMYCoU1t2a3LP1b4biSV6uJtKffcWWhUGqmzSeEdkkRGtjT2ajhSdtBbmadw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cPgrfphdABASMk6ugaoxqJFcboaRD7nBH6aWd8YQw5dL9omoY4Jt6qeeMs9kiwzhBsyCaBtR7FTHVU1spYjaZ4Z",
  "key1": "3nY2QvyzBfcqoL7GDwJiwYQG4YXcimBHwpMrYw5mtBMz9V8SoDpduLrM7pzN3NTqkPngTijBW9J2jfpbc2ruJSwv",
  "key2": "5ba74jtCjrqRvCxs1wZ9UZPY4qgFmAvLS4uuJATdJFv2KvyuJDFy79Mn7Zdv4cofR2D8c9F67ue2Tftfvc92Mzcp",
  "key3": "3SAW88SvUT3p3Yr1puNjcyQ6NQs64ED2fPdEELBf76yHNAHo4jT8rmL1p1hqQDzajYBvyTUExcY4AbxGQtFf4qkU",
  "key4": "5NKdX6QvaAyiVF1b6wzxHqT6eaRyxqQ4ogjzvawcUXi5iNtX5cTZB6vtSMVH7EDdQRZA442XTzNAe6ued8J4Q9Uw",
  "key5": "5AhFWXCa2wLGta73CUamsRxSweBCQ9RHxRM8tvd2igW2qh7MMPm5bLJ5RyijwDi6XcM786htYWUne95BXoSimGt4",
  "key6": "5BKAmwFPoWbeZ39pn2cwP9RmgJXwVdAZhjeFP98xP4dX5CPtjUAp1NcdUwzJ7e4CncksKshgwvFeMb5ZasjM2EpK",
  "key7": "5M11L1Q6xUrtop1oqeWRNgxJEnFrQqWAjmBLZ6Zp8UkvNsTGboXXcXWrZNLhgUNRkB4BRvAcKP4QNxsSHi648GJB",
  "key8": "myvNKvtNdYT3Tv2gtcJXbBsERrycMkZhK1zBFjtiNBV2fxsCZURejMScQDY3swpVf9fgkiQsQuy9KtNpLu7vi26",
  "key9": "3pE9s8otFmfG8N5pEqThi5yRFPzgmHy78mhnHL7FwBR8dqqg6nd2S8gKc3bw9HdCoAuATnvyV425WoY6kRGqKYg",
  "key10": "2cxnwGMax42mm7XaFxHBDKCy8YRXsJiqh48crfiw9N7eVtzPrcJRogDseK55yvjrTQjaSXivnShruVc64NwwPd26",
  "key11": "3by5YHBykLAmP9QvEbC8YEUkcytub4wYgcMruPdyvD4FGziq54NXr9BY2LTySZ3o8dWJ99uZ6GxHE5AD9NscLjMF",
  "key12": "59TS722cmAdM7EhXAtHhpSknMoPi1ZSPB7i8MTNAUtf2MPQFPH1aEHPFsXibd72o5BVHLmhfupiUdHPePvNoeZ9q",
  "key13": "4WpmJ37UYQ1wFnGd2wCYhz1Lbc5A7WXMFFp3cYm3rQmWSTJPQXDrF3Aq58hghfviuKrrkx83FA54NYFD5RwD1Bde",
  "key14": "2YqsCC4WbrHDQCGBQ4XYtEE5DPpv3zKiNeNq9SUzNDpVhCDp7LRn6Copij3Wg5cc2VdPm8uGqWRbYKLwnqG3xa9Q",
  "key15": "39AuZL2UDgmiPwwrGHMSxm7Mv7qfMz8WmheNykT8cnsTJTCBy5eA3svVHyY2EEEYCbygMVKGE5GoAamLEM2PxmvE",
  "key16": "5cRc1i5tiqeWNydHQWnJGZt9o6YpR1coaJYyyN4imSWJekwbuSkpeeMp7YVTBp7kVUyBmTtXgMT6yqJFPb9Vof5G",
  "key17": "5LvyqEMS44mHECpm2cXqhy9rhgqQtphqoRTaXiypPqxprWfb3VpKDf5Kg3JHhgTM8gPh3aV1h3GUytLCET7Npt9B",
  "key18": "3fqmhwCK5bCbazPsMVVUm76qggRyCMXZpDMoAPzxc8xFsTQS3Cq5rDwrNEfFz7z7Tmpaz6d7r7qMc4qXzzUbVEnA",
  "key19": "453iqZbTKiFomJEapjMQjZwzUcrAjqhdSKWQiXBEU8J8Kk9QJqiowcc262TmejVQhUasnWwBAzrTXviJCFXbaCYU",
  "key20": "22YEZeDaPcem3piMpySRkVzYph5ehGN2zBY2uY39YyCQc4JyZFcMYqd1Ut5ay9Ac7ERWZ3mXX4d1WJuqBmxF84UG",
  "key21": "3vGt1mC8UoeasD8mYf5rYVRWEGZAU9veDkpar6iGACy1HEwCTz7dyJmYWxSdoxGMYFaHr52bmv96iLcReUsiHxTU",
  "key22": "3UsbrXNCwPQhg3K5ZpB2pnxRHn7WkTka6NitFYcqnvepDD8b2bgcwPq27AtJDevWwSeuKEYKKhbVsiaYuobexeW1",
  "key23": "5RCunTi2GMF4cEkSaadhDQbpXbNhQm7FdwiKN4k6ZKJ4wQ3RFmdLqXnNxXoLaA9j4xsiZpxcxb9mLefAo3trxabA",
  "key24": "4kuUs8SXsyhzXNQsZ8oHT3m7SHJwykdejMcvvSALiAPZn3qdHDeAfY8wyNU7FceiCUiaMq74ay9iK8FKLycA7EJa",
  "key25": "3GghxBv3at39d3JoUBqU3iCY6VnKvpf3UGLi6RmZPhwMc9e1Fu1DjANUXw6jMKKsmwSenhURTSzJG7vg9pa4PMa5",
  "key26": "4x8vK5vuwGrES2q7dhB6kM8oZGpYUCw7WPJHr81RmWVvFKgeMpdxxtaMFBSWMgbpt9SgFtJKL2n2ZFWj6HssCttZ",
  "key27": "4sSen3vKwSJskVZepobiALEPhNAhQhNfLpd7NtZfZmitrxgUFL2ZqDjJNaCAXqcKJd5oeXsRvHdiBbrhjhB1Ydh3",
  "key28": "3QG1T9MwSeaAABjye37B5GaPR1rAHbqS9xauFshBLdcAR1EFnZDp29UWWG8W2EuFFCrStWT8UD9vvLQeFG4ELzyL",
  "key29": "3KraMXUMjivUJu1uQJAG3u3jM1Emd4Whcwpd99U3nEPLydzcXQ8VMoC3j6CTLn7K8LxXsJgNZwd9oJTxUgnGbZHf",
  "key30": "4EkzBy1XoZxCeJwTk7nAvXprhA5oxu7WSpjvLdojv2VXZk8GTc5Dp1MekAaDQAXjE46MPYtEEZMYvVNamf55P8hR",
  "key31": "KF8Jk573maaJGjREyC6wMjS4aJf4eCLqo641DzrMVKpWne69nUsa4JS8hRRkgK5esFtDVzs21yPUHYTE89ENg15",
  "key32": "FKjdmT8nTPim7Gv1PTwjvUA4U9JRfDpQu2gVXfRTMnwRK7q67eYLSicPofWnYxF66fsJoVpEGHzESV3viEffjkZ",
  "key33": "hkiTiTbpU8aKaWbJQ2XiWytPjvV6yvgPDaDjgEaVpQJwWzXNxioZXqVojDyQUk9zQ5u8xsFE2fbcnvKQDJBwDPC",
  "key34": "7K7SvDikfnKVHo3Z1sLZqpd49gRGM8kawhrnijq4r64XopayCNYXddhCXtWskMC113wZ79t3fDM7essoBTnUdxA",
  "key35": "3sKYjtJf7LRahx5PbkpAxAPFLkTQmF2zhNmdZhJBHvoB1Y9hWdQPAY4asZ7u7pzxiKzp34WHzNAcnCzuRnzVNbJx",
  "key36": "p3U3qkUrYMA7ovpuGmzS2pGPUvhRBJQuKNaJMitUdvrVe9SmNxiDAYsMcYDX6QbUYkxzQgLqZTseW4HJXqx2px7",
  "key37": "4MzqoRcopRwRK1kP2U7WUkrcfxdLY6MGB31FYLH2isFv1i84XhqKT5t6LufL8qyAUDQeygRceTsdr3PxNyRa5ih5",
  "key38": "3BaC8Qc7L53nXmeeFukWn3ucvgt8cXifKNQchpLAUPpw58ow7Tas5nimo3S6M6YJkAj89z52g1s8FxGMmqvtTdd7",
  "key39": "5NzkLYLq3DuamUGD83oGqJKqKPEc4j5Kw2zmXqEs6k5hmgLSuaqUkxwNdw2ge3RG5HNniq4ZAYJ77iXJ4cjNwvVG",
  "key40": "63DmA7Vi9pxquCN1qGKB5MGjrN1rXaaZ4FE7oA6AJhCee5mKZ37hePCEGa6xnN5TFUNf6FSfupoLCudvysPLxjQ8",
  "key41": "4TEEMurfELzeaFgnzgotnBsycQv1xuG8jRFgBM7ocRRXXrnJDBdsYyRwZFsSQSkbyQLSoGFhLRYXoxB4gjDodCSz"
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
