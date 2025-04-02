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
    "3odgDcEN9ZRQYff8AJVLh4DoBQQvxY92Cyf1LLCWDsSLPM48UbgTP4ZGEBQq7WtQD71LG58uoq1ACWqcx5qqQA8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gVfBoXVCsVSxV1pca8aHPymLvTDo6hdU5LepUtpfjfj2xumh1xpZvhyCfpx87BL4DExwQfsoemUxTRMpD5fkstc",
  "key1": "4AJ5HEiwqBXj19aZYze4FnytxJc5e59ZMm8WVzBSswvMgs9ibcUi3RVXH7M1cXHXf5RjjfsKRN1epRiTFFi4PaMc",
  "key2": "3zFtQq8BJgQVfFXd7tvD8DYpTTgcSdZJca2yu5cYq4n7Hy5KYg3H39NB7cTGyQcex4vpAhvLCSFdkpsFvjcwAzaW",
  "key3": "eDhGrZsAUvc3HsdQE3i2iowUFTH9fnZsZjiv5sHs1wHm3nEEWDP7AsGrMAkhq3z28emfi9KoRFFcoK5vqEqVn8r",
  "key4": "2HAvrTef8KKHJ25gk1yMZh8QcDx5P6HENp5dg71xbDuBzUsA8BCPUCC1qUyTjwbaEz6epz7rVMMnDaTmXVgGhMac",
  "key5": "5DWv3Xp7zxqTZAsYKJe9q2jLTv7qb7dQ7EEThRDxoqpjpYdxnXwJWJcxaz3afPSDoUCxe6x1N8Kqy28HRoBbDV7Q",
  "key6": "2dwTkryzpzwV78Z2AV2BMroEcibHuPpzdmE8bnbxZW7BK7sdYkpkaeooRoU5kvVtgF9XESCcSEUVpjY5DB8cNsMj",
  "key7": "4FfrvQJLntR4vrSXqRGEhGretqvURw8qvF8k8rnaJfpD7drL5GVQzMJg8qab6jnEAHnsruXRjCj4hkf2RqbRV2VA",
  "key8": "3ffbqPL1mkpLiTWH6PnFPLkFnrQPDG1iihTD2XvvXZv5gA6gmFaifHoJTPjdBJAAviUw4tgddB6prdSZeyVgdfWq",
  "key9": "Af4g6fdP6BRdpzf6ewBFmu1U2MuF3EaTi63xWnzmmFBqrND4bMQq4TzYAJoc1BGFiWVcV73T5X3XLLX5CCak3h7",
  "key10": "imDPSXC9eaijcSvZ2A2Qq29k3X7vvfnsejJg6oT82AFaEhxruToxsN4MbmqpSRVerf48M7AqT6bnEkAK7n4KJh4",
  "key11": "3h6rKk9DryvA7xNhjdBk8bhpLduXgXLAPTougA5FTy9G97QDrbGiLh78fVXrGQLqEKmunZdJyAZD6Bubd8FyK2bD",
  "key12": "4LQygqoAn1K6B8v4ULBL9wzGpYGfYzbTc7Mq53LeMs4Bu1YERAvWBY7umTwfuu1QY1bnmV6WeksZntdpyUXS2jyr",
  "key13": "EfKssYjiqdNwih8im7FEyRxxTohfEg1HGSX5mcJ6rE2n9Qd3izVVSLRsyxgKXJu64dQ5B8ue7VuNapHnUiWmNEW",
  "key14": "irbDJQ1x4Q1HeeAYnazZ3Jt2L3ez7MwFMguCiPVQz43U3MX3mrg61FEDjF3SbuprFQVUcd5VhArrcuj41bJSsqt",
  "key15": "29KWvwMJLZ66CPAesD2bkEdnXVZh3uSfa7Q3QW8byyb9drmCd6zCAbfDjd6uTnFjKxYEPkN1sdV97yRunKJrWSbf",
  "key16": "5TYXfCQDHzAMmRZMy3KRTeYnPKMr6u2ATM89Kh9wCRsPv3vnN3M3NjZyDH4knu4qTJcCPikMnSpoKSoa9HdPzT6q",
  "key17": "oaBsJ6yntH8ERQVGdQwawfuDDJDvGSL43VSVGRgLoVkvaL8UdGg9drx2UMZppbu8Ne2Yg8Xa5CWnnSMd6tQUfVL",
  "key18": "3BA5Z8TLhsnmxYiZ5Ty5bgo2eyZfsHqvqAbQPcLX8yv7qJPiGPqb2VLG5MFtKWBUKVxyEkMAZn26ZHv5jz8Np4uT",
  "key19": "2D6vqXFLt8G2wS1gw8per4YAbqDy3N5Q96kRhSztdBYtbd1aKSjNTQQqgpC4AYXXHTbMXgePu7pMQFdipjBsPUZE",
  "key20": "2nxQj9aVYwawtf4tDocpD88mWXsUvQnEBbTiVcmWai7rm2Z769KXPMjSCHdTTedbcQyggJpjR8rgETKViGSaVKyy",
  "key21": "4tCm3dCSqhuPtwppcXBTwzPypK1LAmAu6EEeqMptEir1AYiZNs8FLJQVt9orvspPmqF14EZv1nbjWuiAKRiXZfW8",
  "key22": "5m6Y1yEoLx1KmY7FaSFhDQiaN5xrnnvTr29aUNEtiPCHk57HhVzaDzJHPmkL9nWvv8pngMXH2xG5G6r9XeYyik62",
  "key23": "5tnJsn3Td5UhBEbYWMmuibkRneXE4EFzxZmQu6ujpeUKLJss1YnHdc6eDBtBxjNLBhjPGgfvxw4nyZHFwAuVvv5U",
  "key24": "23LPLodRfo7512XxhSbtAH132Qz3v1pSLj2o815KxZcmKzACxHm73dpMExnuWVUzuth7cxDNzjAin2PuLAo37icK",
  "key25": "5tTcnxYb4gSULk3PSJ1ALfEmMiKPGcMK9SBN2nn2vrh2fHP1rwFPidE3zZRKjBvYFMor6e14WY1zy8AxTBoE7E1c",
  "key26": "2Fide82m2w1WzwDQVqYw7xcpy6DsM1q4kUpkzFpUfQfzHwqngnZ5Ac6pXqSPc7FfCoDam8Q7QE1cUkaqA6TaVBCo",
  "key27": "2X115DXaq7JrP3iGED5zoWvTJNhCdj6hdFsdBg5SDUFanyAD3z6HDjoY6eM8qnLZmLzhFJPhJHUPdGnMApA4FGA4",
  "key28": "48j16kegATGuwMutbYuymzwsY58hQ98yRcBVFHQF6r8hvhNjaWsRaqQBKH9vZebufaZqDoWdQDq9jsfWBuedHgYK",
  "key29": "2YyupgCps23SzAXCRjSJxWZ4rfCd8XBqQCSJTFtU8pAvCozWk75PukN3GBQM2bUM7SSMnePDjpP4a6kwx2HzL3Sc",
  "key30": "25qrrG3USpa6k2hmM7KLBzEdhx2MeEUsX1Sa3qiKTAd9kP4wBoAVPAcnMAFE3p7LLyV6XQyLKYxxhWCtmZCmjAFt",
  "key31": "4DmP3DQXyzerzSDSgr99V5N4LPTBtDJ2ApHtNRXNChwF9VECoMxoMmRHGzro5uTEnf2t6KwRzRDfygB7H1ED6D8e",
  "key32": "DwMeXcSYdecN2Ni8mkndutzFMYBBTqwznHon4XY7sxxvg1ahKLEkmk2HK6dqtDCXyDx78Qw2we5RiFcj3DUPmms",
  "key33": "2U6zHQxx1XSSyHM9J2XCrMfpmcFK932aB7HdpFr5tHWMUGpXVH2oKbH7N4mPRW6L3JW5SH243zWzV3XLamhpUnER",
  "key34": "DfqcKJL5FrRdnQhH78R7KRHD5ikLys8ppBbJnLA1xw2U9uq8FiLjiX5sJ6u2hrWe3SYQJwyeoFDhZfDRhXC8zFB",
  "key35": "55w2wdvNzT2poHKZyqbjAG9VV1H8SUJp2fYGSP6yughvtkprvjBAJGsfZXw5NEzy648AATeZ3DoCM8hLR3dCpg1C",
  "key36": "MjsgAg5uPVFf86Ssp4b3oseffZUjEzSkDyeXWyvjK6oxMGF241G94YMqrKuTuaXqZyEjho98pXboHxUfhcJnRWm",
  "key37": "5iL7XFczRxouLCAu7FweTwCbxFgiWeEDzHFxgiQG31Q4pztwr5K4NTdBhz2fQaCtngkaCg7pwN1znWmCsRe3f3dA",
  "key38": "47SzcDdHyRpu9xqTV9wqRmQW32Cc496tLqjkk78yhL4xDieCxQfJo3UJTutMxQZFbcTyJYx2D7izrbwjabCCWkdP",
  "key39": "4J1VXnpuhBXy4XLxWBJd5YgAddjBA2dp1o125c1y5qfy4yLausUy7pv5iXjsTHvdsq1hP1QSfFRRParSV9o7YBFv",
  "key40": "5Jtv3172X5yiPvebvaTiewUDazs96JACN9RL3m3aqPb47qBw6e8zHHAJ4CU2ofobrCV7HXtdzjxQfjQZK6c45go",
  "key41": "psx2isd7aJkmwtFq3zHpDfd5eLL7amuP4f5ZwaUbCmdSRkyAN2RuRf8wGu7M8Yn1z8fPFmnQAnHWxq6uuqyfwEU",
  "key42": "4zALZcpNbEEZ3WixTMz4FCLzhg3aGK6L32Va8iEjk52PxBuz6jxEk1L6ojWEpttXgN4C1MNureaquDv3JGf7qS7G",
  "key43": "Bpap1YN2y2gfzjF8owDqyefmjWCM8KjCtyWQmwsimnrPUNKQCzS33CF9RT9uy1n3zUWyqp1PerE9hegRCB5pDNx",
  "key44": "2QXxZo1z6KwRr2QkLYBzaL5MYfZug1i7hS2auWaDQsz1NB9mTMi8bvHVBwskw29Wt4kRSfum7cBuh3rWxWQXaGQP",
  "key45": "2kwPKf4zN9R6xVyLEig23xHzpiMenpaRuiyUFnGmCwj43JAjWgmrfStv2FHugbdu4qp2DNg9PdgY9NnuZGGBxkcz",
  "key46": "2GcygQqUp52UAuMosYZwfqxykeB44Wt2Xb42JCncyprefhdSQwP3uDQkNEGD8e7VnhjkTpbPq1DVGUCGTcpY43VJ"
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
