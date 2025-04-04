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
    "8Te2ypt6yEhTPL7RVvVYmaKbtNX11SmGdJ4Z6djmoDWGDY6tdALMFD1cvQeyBT7QgGAzG26mUm9RQ6ebneyDL7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x8DNQRAPM8mG7ZxM9z6b4HJ2UnhNDrEnGphGJas3oweZprdSHucSyoMHpqq8fYzk1GhsogTb2MNMwQwHLDmjMbs",
  "key1": "2CezUJFsE3QGcLqc27ZGE8bLpr6Vy6MWZk8HauJUS3iNFTuXSoBW22pza226sd6E12n2mfUuav9AoTwf2VYqLcrx",
  "key2": "M14x9Kjxm7CBZvkAPAaARw7fc54iHZhHAAM11YRDmenM9Nu9NT8rmRUtpCvDzpT3Li8APPFARSTk2PggKXBUMMN",
  "key3": "29BJsipRSzmgXjYAYPGf5rDVocN8ZUrKZDtNJMwWLmYyfMXDmXJzPjCJ5dFW85BBqDENGTuHoH9wr87xLD7kgYas",
  "key4": "GoSTyZsULXLYfbbe2bYBdoVNp8RHeP3pa3Ur86AqbZFzXjqpY7xkxKn8eAuKGGpZqj4FffdNVasEZjx2y88yhBQ",
  "key5": "2PLvS5NmHZZ9Xjxwegika8K95WceDHQegwwb28dyQJ5ZQ4UQiWm3XKvkNMAf2hVHCq8r3FKJPJSmodiki9XVCLwc",
  "key6": "3416t5KWLJrM3bqyDuwzX2YSaMzVRsa5YB18aWiUp7Q47g4aYfiNx3ZxpK2pFPvK3kBr1iTw4H6h8dVUMXzZ2EVh",
  "key7": "3ZvksBbahfMVfr8DsCQMdpHCgGv5p9WFn3fBrtQE14atu5RRjyiJexacNNyFgdg2HuSkdySjbPNxaRjXT4pikcVT",
  "key8": "4gurwDJ8AHRKdcLyp1MJCUGerZkutGeyV14RucLjeRiNfzHd8yN8Ro59w7n61J4ztLfgjLfr27Y8m8E7ztZqZ7MC",
  "key9": "245cWybBcukfXaXzovy1LsmygWWKwNEmv2VvuX5xgME9FhDGrxpJQeW2YytDVnoXWgzqiRh1XDPLQauj9xPAUxW1",
  "key10": "34sSKTQnsjMFMXrATXwU8SkxS2XnAoig4MyYXbNx7xHqDRcVWc5EwpP4DNtVCYJ73mxpzMTr2Qc9MsrZTpJdXtoW",
  "key11": "29dbCDTBmxdoWNtktwVsaJj7GEWkvV9xfShBNFkejvWCFVvvDPgPD1disRY12exeDqo7ziT4mFjzYa4AppGVz8Ha",
  "key12": "5pm1MRK38Ykf42U38fApeWZbVFq3GtrWPvarJsZGhvTjBfid4d5ysQEDKDDhEpn83QqbEpbaZChp3DCi9APgU9PY",
  "key13": "4MCXu8w4kyRhd6VmmtsMS26SkAgmvmueZY29UYG88wKovBjDnP7LiEkVrhkzRdMmeD9JYnMrHGiy8gWJ3iHyZGGw",
  "key14": "J8osppMNRY5eD1kHRQtrBfkL2d6yF4fdkyHpL9xhruQNxBPxXkdHPE5BQsrEwHjcnriy984oULVhL5abafAvmUE",
  "key15": "2yfZjJW9hDEX58je84szvHFFaaBkxScC3zsSkxoeKeoPJLWs8CjkNWhyrsEc58czZQjtA46H3DHpqnUiiGPbu4sH",
  "key16": "5bEhKjjgp6vfNqbyuiyu7s3x7bW7bh2qm1X3U45KB5AJBA2BwRy3vmeD9B2Y33b9pbpMzWDpBAnAoWtJH7XrhoFw",
  "key17": "3sFv4uQJ1sEas2my5qzVCsQDjZpB8R18DH4tyBmBcwq1EpbuWbgdi4GVF792tS7Tq4Fb9R1rkNSTV3TbCxK9R4ig",
  "key18": "2qQ5x7xRzrEhjqzJzaUAvgSWWFMW7ULVNbZA3FDjbQrkLnQeEwq87B55C5guvcwazopS2GmBvW7LH2xHXRfJVNwj",
  "key19": "43hkhSYqSe2Yah57YXheD27XCgADhHXb7TvAnbrsxStWgeUynVRRjQYoceZZTHRRCmQHkhyErYMBMTj6H9bXqbnE",
  "key20": "4opQJNw69aDQYgk8BZcMyr7Pq4s9Ly6Bg9mSTD556kn9dCPr6i1HB9hfYHCTUCmSY237r8AEsLoGa7EW2X499Wos",
  "key21": "muegKiM4qSHNyXHK7u7dt1ZxgeyDNTeqtat7gvyV72385wxGaa7Msgh9GygdeG19ASwm96c7BNTyfCMb9oSwxoN",
  "key22": "5nWa7vJTTzGqDgCixoQt4YYdSxNGbxgWmRRtr71UckxagCgqAiyuiYNPwYGEh7ShV3qFZbkBDQ9fdFLkKj6G1zDz",
  "key23": "RZnzkX7sJhTssyiXrSvEbRYwZG8HwWVrCLGL5bo2CcKcK2DSuk8bQdVzgmTs7L1AAaZYmj55KE8SUE1SAsCnU1Q",
  "key24": "3LTB9R46EwKR7hczuAmAbGN1X2fDdp8EQBsKbsRzeBP494caJMQuyFFrdS8YC2oMcGbP1GSF1UVS8JGPJdvcDdYs",
  "key25": "3hAGKw8B8F7gh9hP9K2a37j7sUfapsar9xawEGAJ8VLwQsWRvUbyQMiFPPwdpUxUreNAKbhny8dzh9LkJT3ngaUX",
  "key26": "2q5S423DJBYvJD8E9DGqMPt41LkXq9jBvrQxA6KGi5ULoF1RM4vPG4eeMv5NcZsoUXiT2UnF9ETqnQYohDJ9v4fe",
  "key27": "QgYeoFzHrYjmNWFiqaTeXvqZbqtWbofwvM61dd2PkYz74u2cEwRaUaecpXSt9PCDZvuvs6G9WHZ9WWoc2vaC92g",
  "key28": "FKBGm9NvWbwfNwMg5LdXHjY6XEGDYtTRgbfJF2sEmvZTw1AJKRfG9o7F1j6fMV75MoVQ4yHqG8rgqtouxNizyXR",
  "key29": "4Zaar5XHrBp9DxvrYJ7cqHgr2asnz1PiFkjBRGLUWbov47ZG1uyrW5YR6qtDpydDstXXrsgUQDkdWxuKVUvDwRe8",
  "key30": "43JdmPqaPnig26jZwKX7dq7YjYyHWSGAAsjJWhTqjDGBGkAZPepvQXqNhxFs6nEp8kJpcjXEYq39kYhncNgjGJEX",
  "key31": "27jFezbxmzGENFwF7usf3roymVHFSogvn6fRS1t7XRDsqGx2YMJ7gTduhb9mza8jLjg5LKrkWmvo7b79rxmtoYoa",
  "key32": "qYGMJpfa79V1arzwDtY2x5EECfsAxFiegnc9vCmy4sietZWzxyLudHgcVRsEXoPJHAJfKNWkLJzHc1rARoyWQCK",
  "key33": "5kGtDxB9tnx2dofdE9mYkYzkkGnDsQWCftNxrNYz6Epb5tXNzkP9YpVzvSQhAD7tKgSkzkkHDP4aChPpDWLL26uF",
  "key34": "3qNqkhjo3NPyxfNQPN8C2QgszuENN6aVAK6ovhu8dAULFPZET52gCFAGkB9SoNzycSQgGaBbTmGvNpWdpmvpkzWG",
  "key35": "FFae5dNNCEpqGHanTy5nrhfHCMYEh91rf1FttFPAm9aNWrdLD2Vh6QE9NpAvhaKXbPWcU17LJMpzDRxhn7LaEqs",
  "key36": "E3hcpzSH4KfqLH45twzVU1ToGZ2J5z8twppt7vgt8aPBjaQZFQJ4hEeztpsHx9vTiUaCiEeZNx38SfzZ8cshXZu",
  "key37": "5ZQjoAHbUfqzcHafydsUsFhsMQbzZBxxTJwHAV2UdmdsYYmJTKPsuHKHBdvRxh9bR5UudxSicfQgCqLZuEGgWQZg",
  "key38": "GeAyzbhZQJonsX1JCHsaa6vUZnbZn8V5dNMQtxrmDM8hiVptZ15dnDoM4HfHi8twSbpEZWzyRaRNXUXktuCtFUh",
  "key39": "4oXdy4mUzjUrkFSVUjAkPEdmE2jbqHbAYuGR7v9N5nFrxc8GFMettaebgVFyBFuv5gV5QWH4TmzV2MbzWXqnYpwp",
  "key40": "4rA3WbcHfL199DrECq35kJwj3T4qq5CjqacdyLpUYiiCvs1XYtXsjiJvLA92Liy3KHuwLrXPRsWXPBLswyyJp96h",
  "key41": "5PVum6hAqSVAm1VT2YeAXPdNiiqsDTMybRKdqvT9mLSQrL1n5djA5PX3z9LbrUtCW17SJdC1jDjNnAWxfhyQcC6A",
  "key42": "338MCgwSmkViqcdC5Hc13S12UoLon93n4nFfVkbJJ7azLTAQPmj2gpTKnXYQiEUjuvmfgAVjoN5QKWYewkbehmy",
  "key43": "2cM6o2q4gPgp4RodzvKekrtDXD1uwZEazixiQsspLJJe1L8dUSae3KDf8CgwZvpeXaTYe7jY4dxZweYfd7MAHCD5",
  "key44": "2qmJKiq1HbPQgxdbCpWykjspEUrLH1DnNHWkqWJjUw2S38LuWaKcmSCiH2qYkW9fsaSRddtBKqf6CAcSnorfXhLU"
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
