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
    "3yJc1DfmH4vQTWpccSfzzdrpyNz2KQyQSyTEfY2VeEsZ2yQLyqN61gbjaV9JutvGaPQHbCDs97EpARdsjWYQbr24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E3KdGFkY7fmZmhgKAgcs8QsyoXYBCu6wR6VKnKHD9AXcre47EiwcoEDtr5nvGLcBZQgSkXmb9xgWHz5MkkGRrk2",
  "key1": "2r6w1FA6sejHoP4ipGjF7HpqMDvrmW4mo3dKfbvKAmv3wqzwgW4VtLG4AQJfWqADYrSxotNfMboHThjJsPGxu97x",
  "key2": "3gYEfuUSjLf57FdRYX91RzFum2NBi1ZByPvCpqVEpQ7qqZ555oEqziyEkJ4seaxidrmLfyZJjcvsLkeysCpSW6ag",
  "key3": "2JfgjDcj66RqxeLGi3K7MFNru6J7emTv88deDaiKGkae2LmwPkpyLdWK3LxXXPQP4PGqXB86PQe5oCe1fz4ZvbfF",
  "key4": "7fS6qrDaKDt2RGN94pCk5KFAKDm8sgSMoJ6wmaTD2v8e55wwVGRzxUdcssXZBiyH3oxDJRU5VfhzVQiLbjxjXRR",
  "key5": "4mnzDqaFNwnrtiLeohHmv5CKdSRnHGLwxtGMS3ie8x7R8GqiVRcY3sAbY392nxHGTiZFKM3GYDgk4kGRJmCqXT3n",
  "key6": "5XxrBvpy5m7mNfWuBQ3smQgz3ZzxqYooEuJf44RqMpsTKz2pqyR3vJrvArDYXfgXgnbkjQPW4yx2mSmNuhfysCL8",
  "key7": "38LZgVxMmXbYSLfY7juCKLCPcuiVGiv8kd6iAGH7F9NZnTPyQaiUebkkGkGwcXi4AHjaz91EeDNtwX71GLq4gGh5",
  "key8": "47LKA8Kki8NUmszPM463jvD2MkgmCLpWfkXaawdotGsoqB1PYfHXhV2836XzF2fHhJbKCU4YURmgi1myakGL5m4c",
  "key9": "XHegCPoGVbmYNnApzQB2f5enD7nZrBiPZrQdh32bLdvLGT27oMvtm8nnYuF6ss1P3Ho74Q9Dc4UEWprvtQJDrNn",
  "key10": "5wdL593BfUihoCAff6J3KHvtJgqQktW8VF5Zn1jRpf8gS1AzepQ49BYs7URaZww6ktBuYTWoZNffQwSAgbF75cr7",
  "key11": "5VuRgoGCwfiAEQ5yjSYzT9dA69KHsbWBP57MTuzsqeXquKEUrSEMDKYE57GhvvKxpiuVJh1oE5YfoAEip8obGS6M",
  "key12": "2faaR1CnTizuwvm1tTvk6pDJg37LyLpxsoA7gn1E82L3e7yXkP3uvrMNriaCw5k2V6kSH2RNNDKmTGuzzmAWtEq4",
  "key13": "3UYXhUXGhJYbahMH21UULYvYG922RGYmR2s1eixGDrCZSP7JZDjEvcz4ofKXmNNGviTzSYfRSSBWdwuMDkHARKvB",
  "key14": "2BY6U43uAhq1xHXbuNpeuT3RyT5D2K23DcT7Ba8XYgt5voNFFwvWfMXhcBscoix5iqPbPDDVePkVx41KnBmdyBuA",
  "key15": "5De6gxosFC8vsgmc8iyW5cxbNqaJPDS5yxmrdGZfhaeGuQCxpZBas2nb3idtEcp76q3QzdgUnMBYfPvxVTonguQf",
  "key16": "2iTv6Y8g9T64TLYafeTJo4eTH24fge1NYEtG9woEWJoLphs4ozGJ14ah8nom2dF1taeXztQMHEvr19D9A9ztJTCS",
  "key17": "33M5vXf7r72k5caQr5k6USRuSxE23TZXBsaVko3dVUwD974eBHAXJfo6PLENsmGNZr5ohUS4YHKH1MjbW3xQWtcH",
  "key18": "L5QW7GQHB9z5egtWPA8L8DrYbkDLTxvD3tCc3rRXJiJsngYS74ni3u7onSCF7pev2N6dYLXy6iENfTFcMyxQyGZ",
  "key19": "2yf2NGFptSJuefj6PMQ3fpaTkm8ucLiY5jGWJ8UZ7coVQDEYesU1qtCMiPNtJgUpARZFF9keJfEkjmDgjvbpQM7U",
  "key20": "2pdr6s7W7Gq6tN9gGs1LeSLQe1tULeDrjR4tERpJA4zGDTTLzGFnkZLoiE3GhkFYDuTF8z7FmjekeseWAGNteamd",
  "key21": "5krGeNxaokjevZ3hmEha85MYz6oe23p3Ft478oA7FAEmHuuaajGCT8eUcFVhGuEwrwFECHmqgy2Y4HKP4DtfVU3e",
  "key22": "2wuwstf5LCvYb6HjW5A12xq5M7m5tmybNbfVVFTVUh4TtZ3utRAgTSpJaTeTWB8W3kxZ1Wb86frAR4U2v8dpXT5t",
  "key23": "3K52Pw5P16kb63Q5A6y5HJPMTn9idGkWKkQXwHmogMUoKGifypeGGfFbbaMyXJ9EE2Gufifu6PZ9z6Lh6YTSn1j8",
  "key24": "27jSUJYsqZWiHNDTpUZ5eq64h4KL3RF1ZkfZqMq1PdAfqqeT4NeScJ6akUYVt9oEFjKLZUdJ95Gc9Ckt76tZ6tDE",
  "key25": "5wTwKTD1kvcdRidCVvzq6fWdgpgeEitzHE6smHKtv9EZ1pVpGK2yncsQBp3RnfLHTxJdpi4mLWiUSoeRGXxiKzEN",
  "key26": "2ipA8XmnQ7R5tvumC2ceVuVcnWRFNCq7n3ZTHbmKsjMTqgUQgUbn65dChmu6ibqWXsj5LHqBcVWrUUPRxmn2ukLU",
  "key27": "3toiCYnL7Epzgm1zs6YUrWuUkxzm6ceKzqy6i2dAfS9DV88ug742SvhxMkhP7G1w4RpNd9x5Zuqu9UGbU6c4wuE8",
  "key28": "3kAv3oh3KEnQXWNR73FHjFgsx3mKvXnPgYnSravZeAgWCcm1aB52jar1dRVkVj8guRYQZhXoHwiM7RU98roqUzP5",
  "key29": "qnhYKcZu6NfjoAvWMtVUs6uCRg9ueBRuathP4n55YN8JcwHdWmPL2PN8iXJvEdX32xnWayb2rJT9jojYXy7i1NH",
  "key30": "4YGTrniA7r7kBfwwoZHqWyPqFB8cWPjyHcQinS5W4fvzCVxdo2ckh4h9FAp4sAVcus76xXXdXLY5Xwo6PAYN3iqG",
  "key31": "5ZSPDxHGd3feMDWa69d2ANvW3e3CK5L4vGy64tXN6Jvp5CEzqZAFGD9S9mnYYcQ7TEDp4wMzRLzHg8NC2auo82SA",
  "key32": "5SqWQSzCnCjFNGgaSY8ozWQHTahd4WishbpRvkVXHaNzjjQYgQeUnTutRx2GUj7pbt3vTTKKXsRgT1dRBYTXSH4B",
  "key33": "amTEBeXiS9xsjiskoYYZ7uS1p9W7wN6rHxyDRdVWD2offLkwFTrvmnihzrVgksavTJxTzNs7XCg4sJWH5mVQwh9",
  "key34": "2REBHrrGUXYEgx3fyo6q4r95bU8axCtj1bEgB24yhEKPR7hUUwuejZ5Vqm3EAByNP2VzGxU2y9gavUiAqD2u7rrn",
  "key35": "3dRr8bNVYbVmg9P8kSGvVyJNPT3xGYhtwTxivjByYDRs3SYvXKkS1pehFgaR8Y7ecJhC9USttB9uiZi8ZwZAvD5L",
  "key36": "5896q57KkQ5HqdVi33aBo8rQgSffU9JEbxerHNzTKeMbhPUFDFfCCYRkxpPvB2DrzXsjjVZPwMeET3w1yeVxLu6b",
  "key37": "2YPgp5wSHUGr8a8A2Z7aBZE5XA7zL2gqAMn9saBmvLsACHAjWiZ7s4HkTpqR6Ah7PrVRTdqx7P6BBb1drFxoWzMn",
  "key38": "3twbTRvVeHDHdZAi49JtAuiUDyuzcw1AMehsSpb4TZqbpi5rhQB4EqyNnGhmfnYbQAJGW5kYwaeVYkA1QejWKpwR",
  "key39": "5qWMK5P39t22tGiZifcx1mLMzNuL3eUSS3F3f2Lxk3wTNq83wABM1GW5y2vv6vz52cPLX2YB2D3WnAcA4zYh8Hmz"
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
