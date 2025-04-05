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
    "2ck4PusUkJwQsy6rMtc3yJrvL6GwKKhTYyFVkQ23HbFfZQTXCXc449mXJfiZWEdToPW9xCGzMyUT69vAcUCiua6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37nA9ee1A5wFSWXtzPR3oHQXLUiL9DThstBCFU5nt3vqg7o2UxnbLLyEUoUCh3DVh39ZURk6u8JmmyfKVodNXfJR",
  "key1": "42LEpdK7yhEUKG6Q8kA123yGPak5jLoAqDDG14mnSiZy6hwqGdBs5MYsmvK5YoDXBphUWZbmnzGqXx8QAmPB44WB",
  "key2": "5eyj4tQaLgX4KwSvcPb2eqzgfpwQvWdkXTC9NnvbRhcZJdkzQ2ApS8PjWzghWCp86LGyBtp4ajeaP49dmu88zf1G",
  "key3": "5yJdRTaYka48YkPC6cNxjnqHsNTX8uyu12wHJTH4RMwMawRam9XokesZ5mTkCH9bHy2DLTJo5WSEznhRkrY3tR44",
  "key4": "2zZ7JtcY4bY36rLaBrQFu3U2XjWnPm71srAwEtLjptAuXvCRz7TbJZmPecZEZzoPv12KaKAcqehLh7wTTj5Sc8mJ",
  "key5": "4TXwv4PLz34Ndy5xfka7PTp3tT9Uv8YJ1yh7XfLYQUmL1iVWL7yb86o1c7XnGX5BXcAcGiohkNgqoujN4Ds8Weto",
  "key6": "LvE6eXssRUJcw7rmPaq6zH4pj9frBySExAMAUQnvNaAAQS65AhKyvPxVyKd1JbihNGnGV3ev9xMXgBZMRZNivVT",
  "key7": "5ADh1SDRhajv9NSkyRRKXVuDZ6EpngGF3UtLyb7opAyeodhmxQsomo3XB3fFLRN4vne4d1pfftThfEK5n4e2NG86",
  "key8": "FyN1W6kPqEeFAPNGxarmBgxzhxw6hufqRTbvZBiUNGuyAPxCS4Wwgb4vdMpxtghwoQ1jXf9nQ8FUuVtJU41TMUr",
  "key9": "3pQL64LTyw4VFy7WNtH7pa6xR4hKH3RM7Sazw9rUkP4cYqVmuzYzzGnoaTk1Nfc9bXGvDghVCh4KCSAEaiGbeicB",
  "key10": "WzQjQcfxnztHmmFPt1FokTMUgkughnfTe8hfputcLBTkA6arCXtyLtdRPpyKVvZcGLpg8yc81exrJkmjkzjjmEj",
  "key11": "5RKN1AvgTHVM6jKthcHBjfjQxPTTeThk8AqhJhD9ygqU2ksCf6MqWLUZwanGn9rDrM6WDxBtCdHnm8dSN5f6Xc3Z",
  "key12": "3wViKB3PUinmYxXyvDWRg8haWdNcH7rLXJ6hiQ4ZHbuKvYnuLNq4QaD8t62sBk3ohk9NDx9LnyUAwKHpyaEtAZFn",
  "key13": "2pJxvmyu2QzAFYfPWDEEFFcpqyPp7aS36AsyV2zxFdBGZTcDAVZKCyGbTwQYkLgy9Noo3g84EcjS5VsWo4h844NE",
  "key14": "4r4X1wqqqsJPwZWHXGoNpFQbwQxfKkwnRfGo4CQAZq2nkDP92oDe6gN112bg3danUWKutaKZJSHLM1ry5Ssfnk6R",
  "key15": "3sKF5SAcYHZFKDFHPmTpSPTMvEbCygiB8j2ufutHaqvkQ7v4g1Q9fYVZ4CEJBw2WbviRTd4HA8m5hucboe4PRXv8",
  "key16": "5ASngyLnYJeK8xao1hviSgc5jM36Th1cBSWYCusbbDSTAoqQ9xXDHi2Y3WUBWNCvBSU1Cd2v8eubdTUxzAfFdRCr",
  "key17": "67RFGoFJCktpa2frk4XJMDTDhZkPwSPxMmwpZ2hgtAzZw3t2xV7PLTZ1dgNTrXQJFpn9rAgLoWuhgtDc4RGG3YPV",
  "key18": "5PxJYb2pNimpYEbcEpoiynEwM28nyQ7jjqhxqLYYiSn7wZg3mb6ENw2eVY9hgHoXaqF1d1pDPNb4R4baMb76hJ2m",
  "key19": "289hdWhFc91tLT9GqDxrKUQ5Lk4LaGxkkdn3vwHw9V1de6fS7AfoYm6LaQwkt9CvNyGSvfeN9QAruQ2Jq6fk3btF",
  "key20": "3TN9SDig4sH6ybdUwMM9HyverS7b1cfUGniExwJfjbrhvShfumJgUje7mdTXRViUrkNvK2Xz2wL2dUwoH82Lnceu",
  "key21": "427sk4YiZpB4wVThkT5WVm9J2AerDcTPp1AM9KcwgHrSVH5f1QX9sWqb4pKCPKb7Hzi6HEe3MtXpvnsqcJEyz3BZ",
  "key22": "4V3UpFkKuA6Bsz6pEYAsZEu2sLUEpnwLYQGVQLuKis6gMya74umo3Ckv57Aze8q5v6aQodofzFJrLYgCTb9dpDui",
  "key23": "46E1D7gohZdvU4x3kntLiCi1cYLEsS3Ym5GtP6vBMxAWxAEfFqrDFJAk69hvQBvZk9y37NHjDJrGLZVFB5cnbVD2",
  "key24": "2T1wRrym5GXMuic39W1pZh43uoNCvmb7zieG8JMvBLZyG1Cqewd477etRdJgLC6PHggMGors236McaDQmdPYJbm1",
  "key25": "49NaoowaHsnQNEwLf2B84Fr7dPKEvpHJv1rWXT6X1btaV7iQzQHGktoMMisAXk3Xeb6Rnudf9Sy5RtRpWpYEgaEt",
  "key26": "3NbyhHMNTbnyPF1t1pK3dJBuR7BhQ2U1oQZooz3D4TxTMwhBEL46c5kJkSnieoyccr6FMda35EzheSzCYxVkAPSN",
  "key27": "4Tb5yJtSxJM7TKuWzUScsTGvX27HC4QTP3n8fH5Jz9kETSje7C41oqqptYTS2nGbnxEJs8VPFLx9v4guDaKjo89b",
  "key28": "5HAcYE7zsMgJDWKFBWFNiDuvVjC99dCLAWrkaEDKLWkh6KNPyNhoEKusZtNm8xZqaTg1BJVBFTQipKMtCeB49MoH",
  "key29": "3sLnPEdiZ94LMS7gKj4zi3igH454eMkytj16Fti1qXrhWpT8cKbZ83EveTo9TSWL2kAdLZWsg8jeEEUQZZduLytv",
  "key30": "55pATn1nH8arvBkJfNCkDjtpQB7aq1eFCdxh4NUYByLBJ1TA845SBAKv5yxBtegVu9uPrQr1ea9asTY6EvRKSp8G",
  "key31": "3S7VLAmVU9eS1ZWibvuxnUqSqBt6dSf5fgwzjetsBz1bCbEk8jE7LrQh6fGrUzXCH6bD6K8D5A7wn4QRYW286Ge1",
  "key32": "2qZdpgQrV1zC1tC4Afg64sQV6iLMZdvnZLzT9GtZ9rhxRrpHDuw5YV4o5zGsxoLNpHR3imkwjq6zUzhQdvrznrQo",
  "key33": "cycAaxoFAFuTDag59AnqndxB9n7VXFaz9ondhrwAtRS7ayahQNHRt37C7gTcfVVcTXwVLu27MYQWwmbTo4PcPu7",
  "key34": "4cNbkKLnpR6jX4q1VpNtF31HnFLrBYPLnNwHLkBjdPfbHYXYxJn6GyufhgyNYGz4ZB2Bxpcy1YwLBZjTn293g4D8",
  "key35": "592dj39DvrwTF9A5RyiYHaaYfZVZXu1m4wnPJn5mdm9CFGLjsfecaZDwef9qQXhb2pXh999LmCgZeUSLjP8rvpc4",
  "key36": "bhFMjMQwcFiCxM9HVcYrvhTv5Mhe1GpSfpvX8MwyxvV6zBEkfbbvVE7R1LZzbPErXHypTwSWgeJppRqvaQ86gaa",
  "key37": "4H3YNTQZvF1ULWG3hvH14Xd7aBxSZu3Wv79Z6gSETYfQJ5qQmTNHnFF55LCVNNopVSdBkZDth3hMa8sV2VwzWWkp"
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
