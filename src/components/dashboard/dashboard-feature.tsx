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
    "5ASMQYQcwaxCFes41v1xyeu5forvhWp5CMbvQEUAzzSE86fZWWsoHRXD2cS47reKxnFXorWQY27s2KTJFdh9WzRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eGR4ExsME32VN3M5R3ko8Kuff34RALBPBxxSpwQQtDr9Cdzj5iNWW2ffYxQmzqnYc4yW83XprmnaG7jRcyyo3wW",
  "key1": "5ag1GRTFUyLRH8mGw4oYQsecXdg8BEKbokVDGi6K258KhpNXNScoQAZCv8cA5tvohkrgyt2AsNFLPL2iuUpAN7nz",
  "key2": "3j4QQ4mLU9XyTJgPHjbw5ZHKpD8YXdKtSC2WzsiccTjuMQviGw5GqHNAMwbzp64N43d5YFvzV1g8aTvk4mHzvdx9",
  "key3": "qXPKtY3ymSpqreNC7RJuYchQzRu5mAo2U1iy3EojQvC4uDwUd71Rhmf7xo3bfMY2SrM7hrcvpJFzzSG6rxzSVkZ",
  "key4": "whaK74u8yoQqbS8SxxbRiuGKpRyoNi7q1qT2JHj9kDZE8ynd7Z32yb3YY9xnehnACEw32jDt1Ext75EExPqSt77",
  "key5": "FwQCotQMbhGotTtsMNpB2PHjea4LgpgVWLFv2CrLf1mWGUNnHBLFayLnPfSUwvxtyuinaw2KaKzH97TvLCLZu6v",
  "key6": "5au2UAxwhb6F9MLdbukd3x4i3BQ8cHptAFp15pgYk7588rUMgRcFRGm1tjZhTwAC72wAznq5AK5EKAMD3DaWm4qV",
  "key7": "3UymPKZkYvfgLxrziLpxMVYvxh8AF8M4Hd8zoFABsos78a7FMnSzYR2xMeJxtMo35nzggj5kfp17gNNH28JT3XE6",
  "key8": "3rXd3YCKH6frMVbSjje29KmnoSJKc889KTkkT5ajJKADVtS9HYnK9HJUoRFP73AZoGNhpMU1JskjgpENCFmJv2Xh",
  "key9": "x1hU9mPML95oda2Ag8hgHiwQMDraeg2ZuSX5cCAYpA5Pf7rGzFYkFgBywWcCaQJ7rt6YQTDLyZsGV7r9p6mRk15",
  "key10": "5idQKALwp8JeFaU4Y7XfDDz2NctBTzDMoj1JzRNbi1yPbefHLchrWY7M7cbSxLP6ZSeRBLyayTZPmmZEzBzCNawb",
  "key11": "4YUWy2VdaS7x3eN4H1eVLsBMjgbCVrTtjdayM6zeQF2Pdy6nzP9nbEteDvE4YixUPP9Ao9id56axvmzsY6oYNTgf",
  "key12": "2CXDH6kjxo5ze9x4kCwkjGLG1Jzz1ngJfAAC1r8h6NNLpBEjbqHooEaRpD1Sr9bFgpARJiCHcJyyvaPMUfERx2M5",
  "key13": "6458d12jS6Roxu55T8N6CLCNp7dJ9NKG3BJTBXmgpWvhPwkHHtbKwv8pFtAzGMpYZXUyk5Y7XNJu9bHmZoUif3W6",
  "key14": "LVmhTdrMCgQoVQgbB7cziwM2iQgND7w6oiLGEjYtGZUt44Yb2UG4pSJzNE2atLShYDFy7UM9tvkYPHKrh5J8pYA",
  "key15": "528Pi26EQTNEa4ZUCJqka2STcCwFpDk4aS6v4o3wwrYdfD8DcjJcUwxQq2fMR9gVM1UjbB4BHNognneKCsoVRTJC",
  "key16": "RfMf5ShUrZuiRp1CtGci6ttAZcM8acWggDTcTNtnzDxJSeERYKbzPqS5QSdd6Pc15bG9zfcAWzFse3tCQ1xgZno",
  "key17": "L3wEpift2PvLAYoo98wUGH6yksbWxrYjPrQv4rvSTmonvLRFBRR3ccXF3Dr1QJYkW6SVuAege9sG3dde8Y9Xiz9",
  "key18": "UU79YmXgZAznHL8GwaF6jHkAeVveCw9E9oGyvTQz2pBYPcNq4mofAmwxxvoFTk4LM8rwCZrvnJowKDmLUauN9Dp",
  "key19": "2K4ATiN6DiuqZHyvbmUKnEs3Jrs9zY8YUB2qrfDK5U63TvKwu4N6giWNNZaeRo8zA44LAqGCYUsdMwYM6e9nEvXG",
  "key20": "uhNbBAnGmyvsGpdA85Bya7ZqsSCBf7UpMFQFw5Xv264zn3iRWCL8r8FJjUEsw791nv4y3UD4oNyahuJRNTVKSeL",
  "key21": "54ZQvxiqDdkuLcCVXs9AjcSebyFLznUgzRxbU216F1Burd6oWjWDTETB1qCjEt7kdoM5V7PU4kq34Hbj4ax74Mn5",
  "key22": "451LTA8JyKE8pwesiin36E3fuQiQrbdQepjjfV9v9QEjo7vyUJg5KDFFjgrXXnXKNzwAmw8UE4MuRwmbpCfENhx3",
  "key23": "4GPb6U78N3cA4zvupjje2VYtZ65r8A6Mu6k2v8cKJM83EV8i3Pu9My4bKpmPxJPP4S7cjPpFHjZTiHBxczYq4K1Z",
  "key24": "47AYiVGiK9NM3JdUjuBb2zbE1s4xiLLZDyhPwf8gh6BWBuhqv47WLViGspM584jH9sGLtyJrxpXJsGS5LkxJMr1K",
  "key25": "3KpeCsegDmUHXxdEQvKFiTZdiWM6qcVZNNheg4dAT5rsjvnneeitG3CymEwLKVZrfq4v8AC9aXkDtXHRYiqhKY3U",
  "key26": "351R6XvbaTQfXvWky58pHk3zNRase5t2QqnU7z1WDzPW6dU7n2gPqCgjMBRZTM4vK1EwsCbYgv4oNqJCbKxCdKGk",
  "key27": "rfbWjUBuhiHNNDzoTgux9CxhV4X2ZNiT8FibgWqPRJF8Ju3T2ALV1sxSZGJcHQchSRH3MKk39PYBNFBbwuueoQL",
  "key28": "ExjLXwbSDuja4dg7RWDLCAUVwYHenjjsQp9SXV7pBEAamaWGvME8UWRRo1d4CtJayMyfMRFtWWW83MPMaeZLiCh",
  "key29": "46x5SrTPr6equA2L9rECAZjXxh1Ti9JcjdZkUjtQuWebEXu3kXCvmfwAvEzJAqyTwoBKNmswRjYTk7GmEzV7Wh2w",
  "key30": "57GLrWkCsTDVXJyWfRLcmkuiqSzBDHFTYA1jdDrsPsM61XD1zEAwft8oaY9PbvGv4So9AXExPMxNSREXLhfyWYr8",
  "key31": "4MWbo87gXxBmGyGjGjeMfSnSdCFVpfadUkErBxeEesKke5tp7jTGhxxKoJctcP7GPc2DmNJEDxq9rfjiJDT8zoRC",
  "key32": "2q2rawQvwXA3o5diX5hyR6qNk6uPEQxYR89PXRZHmE2MGtchoB1ppFPJEuzqKapbf9b376w1qk1j1NVzUBLqdSYs",
  "key33": "2WEaSoMLe5C4Sab54BM6JuAhReVjtU4VDP596nMmyiaFnvwdkMMMYkPnFrXk8yvtuFcyYey8yQKrPH6T2G4pXf5F",
  "key34": "3wgi8pc3EVLYdpnP5fW7N6cB92aQsmRE9pEEyVV4QNrjoHgEdqyCu6AptkDq3VuYEkYsTVxgkuktzAsv4eJ67ZQp",
  "key35": "2iKAtHf21nyGt6zpkBE3bvh4daHMSfPKc7QWJsCTRLJAoKX4KFuKToDfWistp5ZzV9QRmu22MLWJ4c4LCSWL3kvv",
  "key36": "2mQ43Dez1Q1o3uXbW16bgw6pk8R8TdJ2qQmX6T8dXJWMkUzuoPRtaRPp4XMy463o2jDEj5fah1AaiCayCWxMuwiC"
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
