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
    "3YAHz2VhR8o9Uxu7US1jyy2mzKHjZsBuwJDsq3fsBoiq8BAsJh2mm2MXbHRPD1dXdkpkH2FYJcowPr8kyeT2MKeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28QWqD6jiUZMouH2My8XSc6uQDgvd74rChKtGaJmXVqjZNqurNd8KGzo5K6HsPsDudszDcMBpLQRcDsPk5MKEHwT",
  "key1": "hFjAMmiXnqrYiutP6vWGhoRMvrVvZos8o2KeAAnftk7C8o8jPbHqEDgz2y4L8GupbaChy1p45csTNWNEPVRizDp",
  "key2": "f8EarBPQA7gzQi9yFWKfV7b7rTT32QJT4491upeSGUApMjmET3MiZ2pmu7tPtrZrsqb6Yw5vwD57xp4mNsspic8",
  "key3": "GHMyLrbs1FDTXAg4Dz7ZizkeTuAmAdvGpWuZpzmGMFkYfkemW7HSVzH5vgRK2EdnJkoqBxVbJxKs4dZoM1pxHqL",
  "key4": "4YLTT8tWgCT8APPbicSgXS1s3qdSznagoQ9aqrNcxioKPuPeXFF2eZYjgDdPFA3GF23cRyDNNNFgd9DmZ5yiG2h9",
  "key5": "2vKAoHwA6dYC5SDWBC6RzMkgiq9TBFhhgjUbYiheshMWxbmWEpmXcvbtrzGKDhT2Rw124GZkfHMuMdn5oE32pZCP",
  "key6": "5x1RsQHWzqfokQUmYdEPnTHKY8M8uFqkVdbfUaJ8xDXnLG1T6wCQH7i57sQaois2D4dM6NHkwbEtXnMpLTybPKqa",
  "key7": "2P1W8fBYScpXNxiHiYFZkk2G3KWEDZ6NBTzUrRUo8p6zrAqvmmHTALR9K82EtqzDofk65HSE64Wrvz2qsdUSofK8",
  "key8": "25k7SWeJNgaznQPtvcJtQa5H4j7omdjMwV3JPgduKpfgcYkCY3JajsTnBsM1hefZ36Jiv7YupuFGXz2EB3DvPK7d",
  "key9": "2U8bDJVVhH3stytfFVJXkRKwGY9hdVyYcd7k42iiEPcT47NtnaFwZvbu6YJQKBkXbEdKjKM3ndsKLRHbkD1fSBXn",
  "key10": "DX3AupXEy8vgKjHyVU2rzjsSkf8cDKgxkyaLjS7TqFEMxrrKabRVqvtvw8uvjvA2DaEgnJ2BrqkwNod7aRMkZca",
  "key11": "ubjW9B8FiN428fmyYrwaRvQbk5wX7BSCAURSKRn8aAAtB1bwWy9NsWqjKdxWpefyCEM354xhTrsLsVvMJ8RRjKe",
  "key12": "4SwjRyM27SyM47Pbe51Xrpe7zbBASyjrzZZAQoCLyzvEzhy8WrSWrssePapZefkY4m8gvRaLuvAJQaNTMQgq34G4",
  "key13": "2z6RAVPt7RU2YLgzZwka4nAUW7hPmbGiw8BUANZLzr1iHF9jgi2MwqAcjLhKSb8mujL6AbAAByumsPinjFABaL7g",
  "key14": "4HeLk4Gs8JY6voRri9uezLifEqRa4xC9wRTJibyfUDK3qvA3dMMhVF9ba3HfnuGermrs8jjUuhDiCukya2d8Kghi",
  "key15": "2MQq5UYCvPLaDjL9aDgmVLULW45XeD4Ah1cTLPz7Yz6KAP9taGTLctAVX1qMYzPZ1ZdiKhTZzERSAELHVfMsVL3T",
  "key16": "3uruSsjPobx2xmff6jYy7awKsZf1DKpEEj2JUBBKJkfNHex1sGVXDFDvpYLzVE9dx1uncMLCtLTMpiCVixWx1NH8",
  "key17": "3ySA3t6HqEF4TbG5A7EkBki9XAvBrtq9RHEGKyc7dgXBey2asDh2jYucqbf7zf82mEayrd4kYUKor6qnwWP754ME",
  "key18": "5Rto73gbGxetYHb25FGHwcJ7eu6nLjzZvvPYxcL6K5CWifdQhFvuErQjdh3AEkpWRt4G6ueAvLNirL2Py6Tg42ts",
  "key19": "QcRGRKWGgZNvf4F3r5a4FfEtJmafM8R9KNSaBDRN4DhDFhiMDP1MCGGwCdhA9Jpz43mzSq5JmVFB9W4eTavkLN1",
  "key20": "emZwwonFTMEMgvuHkQ3pbLq4FyUtuEAjG3D74KWjZRHzB26Dx6byu9fWG3qftYrt5Ura8e4X329kAU8gp7yKm6h",
  "key21": "3ymV5LA3ib6oN3MqFptDA9vT1AhX49XS714NQZ4UF1Ea4FPCLRjRe5mjHdBV7AxkXyNeGYwRerT9qeoX2wodQNzw",
  "key22": "3AmiHw72ep9aF6gJep7k7wDJm3aXRy2HBGHbh8vh6UBUJzpPTsS3Sysx9o1Yi1NkoeZpsGUzEZcJwMGcBNppkPB",
  "key23": "5GLm3SoytHyGCxPT3D1JWYYu2yxPC8S67JmGtv5B15NqV4jqvBT3bt5dYg8UwwB6vQB2367DPmQ9TogArnEzFB3y",
  "key24": "1rPuvt7KZHmVP5De3uLuAQgJCSehpRQeCqW7y3WgpVe972GFXQ31MZsNX8RFtSbzEXEUKB1Rf67bHjMNCBJX4GV",
  "key25": "2NaCfUKvB1Tu9BgUJJ9r9CS8ZyJWf2VbhN2FER8H5xRwJ94DdFbTgrjrBdDVWFVAgQkKkdSWDwzGVrLnF4MkHhoU",
  "key26": "VFA24BApTV6kPcqGtQufkbCtXx5aRTawq2vZefE8jpo5wqEnoRMwnzDYPgteG7jdhvAHWQqwBLV9qCPh8ZrZvd7",
  "key27": "2G6bmNEf4bJwb6P9kCtrP2nKqRRnZB3EWFurVuQSeBuB1DqPs8mAaHWbUVTfAQH5oC9UvV2h96ct2nzpoY9LDEcC",
  "key28": "27MrRkGPdCseVDzz6b9Y4PUg3mPYaJtzgE4e8UQNVRFuDExXsGh9KsAxNDFJ7moN4pvWrwAUre2jv5cVh27ettFK",
  "key29": "2A6GFiQpS6Qk93DAwxzQaBXj9ud3Q4764jsgVycGpr6UNnmrviyYK5qb1DiRA7uBgm9S6AgwQ7SysHW3GrLf9yxm",
  "key30": "34zrFynSw2ggQax42WtjhUmkMafbDusvHZ5s4FoQcZMx4XYNfSXgPDHMF75Uh15X8ZbMxP3W2fUqDSNJ8tpw8rFT",
  "key31": "5oTajs1WkkHc6nvs9EhN3ZXVgx1Bdm23uDiebjGaf6zZugx9yWWwdkVD1JjTCoci73JqgSbZcCKZbLPK2MKxu8g7",
  "key32": "BLdSLwgGZuR9FKhZyvXwpxBQ36d5WRWkQ42qE4hTBpMMqpYXuHTwMxJP7nv9D1oszgQHNsRYnA8fGghFdJByk6q",
  "key33": "64eJiqR6tc8Moy5Umc4LCwsyMUMiPQrHW1ku8VsSG1n5bfzz6UmPLZBT2JP9RgVknfVoK9QC1TKL1JjM3cV2rU5N"
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
