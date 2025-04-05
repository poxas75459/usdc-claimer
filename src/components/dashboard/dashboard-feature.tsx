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
    "2uzC4Q3bXoeB194EKnwQa7WenXGg5JPC5k2nEXxuQMpHyCps3hTsk9Cbfo8kXmQ5BSDLdX9Cp7W9A5MXTzbTo7tZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tMLF7AMzff1ak7oSb1Lo7oPRd1WmTd4sG7SLSmmwVGbEHocFfuxVNA4WpHkoUxyDmooqc9uoWDNuteLbbD2URRN",
  "key1": "4GH4QLs9tU3RnpUzpH5as2YH4nntdZtysC9Bn9zwa4e7RVtT3eDxSKERozr4ZdGVUbxwthmzob3buyefwyEykxCu",
  "key2": "5asHyZsL9tMLHFRJYbZGfphr75LSFdKrzD8gyNbH9oRc537WyvErTLC8tD5Uent3BNoUaTX5LHdLSDSSQdjjEsQf",
  "key3": "KdhGUBbZGy35HrBmZ7DdFfEQstokHPz9iUpqd95NbtPdJUbnxC9XLBm2BdqC7X8yXTG1oDKpia8YtKM2RJndLXw",
  "key4": "5REZFUEj5HKZDq8Z9vKFXaaCT96a8V8M8buT3EmGNkaNjsASJAYgzxbkgs4NCtCRkPyTas6TjdzbsoifQkRLgXoB",
  "key5": "5FgnmQe9J3tCQB9pX4N9iJ9sg7Qke9DjqAfLgQCTkxWYjXffimgEhEe5JTe7nk2aDbHFQiiTsdMXcENkmjvJAKd9",
  "key6": "2KREdXuqTh4ziPAXaJ34qzbh2Tzy8qJcxxT41Cm4DXpNt1cySSfyUi6c7bMNTfhWEaXvvspynCDpGeYNWfrJ2m7N",
  "key7": "3pPwCYZiGFxPyZyqi4Xv1hQ5uUpMuvhh6KGKMgpv2jiCJfgLX2Atw4eDWwadEDxJFTk645pdRYDDcenZgc3u7nuy",
  "key8": "3NyiFxwaDfVQtGaZXdrrQ9V8hAwumMKmgmP9DqaXGfAZeVkomAvesAhWZBbfjieC6Fwo3FXRj37TaGonPgu91yDd",
  "key9": "4yeqURcK6M1UhT2EqQhVc4253eshkERDiBXq61xTZ2DCBEYFQupzY2YSto5D69K5AAj9bY5AneSQd2gQQXg4F7CS",
  "key10": "58QhK9P8BpvCoPsbQXwdeQumDWA2kLrmt8wZ8w6ER8Za27Hba3e15XumyXNvkfG2ihfgmo1HRkBTfdhy7g7CAZAR",
  "key11": "wwjunHU5jDJkrqnU7cCJJEdH3FpABZ9nofxuB2t6EMTN92cLEPf1p4WxuQvoaU1PBWMYCorUgu1dRdBkuuZcrtu",
  "key12": "5ZckJVcuAKPXY2CXCvyTrb9jJT8DCtdkaJPMiA4gbvwP9YovYNKcp8om9Kto1Jo6Xu1wBahvRVLSQA47NDd4tBvE",
  "key13": "3scsEvAkiFjoJ5S7gaMfE7tza3aQxRsYtRDQA8XPVecTw34pPQg5Ta63kRyAbb72vFMtgZEwEt5m4p2kyeDLCnKD",
  "key14": "3iftL4qx4JyuuPsTcN69ohszs9CmykKTn9sXQBjbfZxqNHhjkUt6LjWhJg4pUQjAfnopEoTfVtTekWiF381DVpjp",
  "key15": "3F2ffDAnKc6AgCtbn6YSXpYiDz5v2XZHRjz3j9SXymShRJvqrqkumYEEHvA8rXgoWqHyuMNwUkLacX5UrJvFu8oF",
  "key16": "5Rre4Q7kU1A1UVNvMbSQJSZUxVjcVewZYkZeGwiWkkt4ZJB2z8b3HEBUiS6NwfzBn9M3e4fD6H6bw3ah9YNWFoS2",
  "key17": "2XGAmwXMEL7Qo4bVW5Wua4QJFy7MSGM3bQyDPdVPSHN2LxS2prL6zoFziU4n6tsCs1jfDTXbeHWxra3DDkxN36eb",
  "key18": "4ogg5hrH2L8kGfX4J1v5B4ZjD5E2GYsKmyq4FXTD763hPbG5umgS81CceoRobdjxYwkkcM5th8rHqDxvLQD6prXD",
  "key19": "4Rjg6yPHWdaauPMaivhEifL7cPoX7awbkjk6ta32BQkpTGbtqCdUfoTAMzwy2AQauJvoRwRgHHfyPqTPcn2CaWjh",
  "key20": "cxLk2wn2SRqq2QcAzWW8zMgAERPgLB9Jr4pUMqFRtyyayXX5BBPm32eYhBv6LoGbKhwDKNHsDU4hAt5PzQrqYGD",
  "key21": "2PQteNctZK8EYuBq7cbD2xTCiHDGfucRgqyq2hmoREXPas8faAbgkDuC2REZSRMwtvfpgCBTm9wDgJqHBjzU3CLX",
  "key22": "v5gjKr7Y9H5biBPg9yNE2udVQTgsZmnnzJjhoBWjFHaeruGK3MHBUqxuuQqxek6Knw9EXRbSTtQW1AUoV9D5qmd",
  "key23": "TauWcUUrPJn6jPGVpVooUTN5rb1HghZEAyDpR6Hg4pWqP9TCbsZSu2D458RvFj2WMA2B42Gq7JP2CpZhh9N3p9H",
  "key24": "5SqAa6AfMVpZjJZm5Mks4Bv2gr7p2ntFcqd3TgeqtYkRyhHMSeH5UhNwTgyohrtDa2c7Ltydoe2feQACM2f7nooX",
  "key25": "4vmCvcDcijQte6y51Hz7VJRzEK1LGMYicTN23WWf4sFX6vg5hxepxrSZuoUS4MiyP4yRdwgR7f6zncDYKrAxEZGP",
  "key26": "3KR91y3NxPS5JeJPz14h2k4Sqiz4KKDLQGsskM26nSgWC1ZLfsCCZyxRR5jypL1Qx8qz52Z7SyGCnZgaL5zD2L5P",
  "key27": "4eqHSiJhygjP85uCZZEZSVKiSkBVadXnMvttivjJGBUuG3ZPkn9mTKsNM7PQBfwpmQf3RzWTNYk7bmfuYeTgcCFq",
  "key28": "5DcDHb3w5mwKuyeqctsqn1sF2YY9woD5NFmnsgE9svkbPGCYagUrpMn15T3rvLNcLPAmkj3x9ZekDxNpdJbxK64N",
  "key29": "5Pxueh39fTkiNHDBQiP1An6dFgBizdCPecRBFqUq9Dr9Ey6btm54tePJcVmafecEbHdGUR4r7XGVWPvVKNQE7gBN",
  "key30": "5CEkfJqtC7N9ZAdxjpG8YbU52SViTWfAdyte3MRqcm4n6BkF2ukyPJ3F5CAAxwjDuvy4mEMBm9zsFBpyU5he7hjQ",
  "key31": "3WaKLagrqYG3itfSUWhRmkqd2GBNaimoqQS5PFSRfEHSXY2uN7zF2aZq9sdz9LvWQYUz73NQkykkctDquwDwYogf",
  "key32": "mDtKkGaPcdgp8WmtSnCQ2qDqdgTcBFTVbzNs38ow8yZec4Ade9qwWrGb8PLkwmj8ZDhavtPDAqtFo7Njk1Gb5tr",
  "key33": "2LSMzFYNVbh6XFf1L7Xbbb9eSFxULRkzb2XYH5jyTktH6nmDiZz6KfGUGTkh1bvoyWi2TS581xkmhKyiSU1nnWa7",
  "key34": "3T8dM51sLhqXN1HdxiZ7whHaVrVch9Nyht3Qsgik76N1PwKcjKEpgt9GfyfPEES76pXRVUzdwyHAFSw7nRZx25Xk",
  "key35": "2CLcVmSSspYRXCcP5UyFB5MojN67robGLAMJFXwd5ehbhP7pF7TSAJvSKjeVVsr4trcA3bVoFAiHzYTgzy1hmQAo",
  "key36": "4UKpEuFNAhJaBViFUQwacdocGo4vU53ogcnrmVwXARLfij5c5Bfa7q6zcVpChN4efcGAe1mxBfER5pirX4iUjXuG"
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
