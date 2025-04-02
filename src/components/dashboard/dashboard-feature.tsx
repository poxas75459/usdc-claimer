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
    "5uRJanQWJ3jzHjS4C9WK4Zb7pRYvMXaXuBPPJ7XjMxbfrzdyyQk91XvBCBEc1KeZMVMtASeVJjXfuqCJqvUHzZ88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S6qiBNwZwy154h9Un3G354oE8cGS3x46f2pGbntVjeSKDyputaYAEscJWbLJf5wUmKAueB4esUJnehBFhKB3Afm",
  "key1": "2U48aUfTVe9RPdYDpAwFcsqCTKtwUX816JronSgRtizHskXbBk3zfENVps4e5vcq52qAB2qQku5bpYos4gdWUb5u",
  "key2": "4FQH8enjRVosHWtMga2R1RgjC5CcWfVRQBnMouWBV2X53RurgyAJqg6BXd6cUgAKfvqqzBzW8hUmbNsBwYw5H8xr",
  "key3": "4Khn7v8whVidhAdQ5GVUuhtj8MALpHseFzXYisG8EsqHryh7d7w4pGdorVwjNxUDDpZkmAyUNbrUbTmaLHpN4bqE",
  "key4": "WXezyw8k9xUJHiEmTvjgEPPvtW2p8JZB9YZHQWhRGR5EUALTue28oVHdNDBCXsNnww8qToGk8cN5wThD7bLtW42",
  "key5": "2REtMioi4PaPSaLQZ2L17yNeqzF9XZhdh5okhpzaEqinsraUWhUwHYfGp8ZGLpkEfFCRTDTkTzY93w3n97efY3vx",
  "key6": "55UiRo1ii1SVRrgQMp2n4JdNvt8eVTPJoevdFxdKePW5dHZKb1dVc84CaMdxWQXdDwWnuWQWDoW7ZTH3NwRmU71x",
  "key7": "2WbpNLJcMHnYgYUBsqH9c76TFwgpwxbzjbavD5jJZCXh3dPN48wrgq5iCE3e29ZNuRU5RqtBt1ox9ADfuz5sUWgo",
  "key8": "2kZ2D3RsZduNHBDprpHB98fB9PaYJPFTgNSsQuUbT9K1geo4QiVfJkdRd94SZC7PcT6sMnV83wNHywsHhVRyPspX",
  "key9": "3w42eoh4JAbCTqFjfuRB8T2Hs2pyCHeTEPLnn2Gksv5uTmVEz4fbVhsG5kdbkgMt99BGgtKCqsjnW3D2UKGTjCAi",
  "key10": "3T7VYo2h5Z8n9fBJTxuT2QYWrZNc4RhgxHG2icXHbpNyNwTdBngUaM3rCj8JBMk2F7Nb6GJ8wg8WBvF1yADnogRb",
  "key11": "4MNfL5AJEWAhFFHkMn2vFApDqEEFbBqX5f5KHD5P24aruEt9C9o8fXpwkajKAg3kHpuARA22uLTnxaJGajhHnyyk",
  "key12": "4qUztPNthvjCTrCYAojjYNFzfy9S3g8JXQnqLohiXNczqLse88d7fv9MLmvPi8r3z34582kf8T8RcbjvRCMntUth",
  "key13": "3NwQE9kw7hxmPPqLosQxLqC8FzdqmZRT6pUf5bZhfHRCuARXN15Fg1JKia7gmsmr7yNwp7Mzg8p1c2LjcaHCZBCz",
  "key14": "3McdKCLkpFdpPMdS7mzsJXE21gbMaYC5uqwCCk9iWdwwBNsr6AVGE1eGrECtmSuSG9qvgx51kSMkj4zrN1sAD7vo",
  "key15": "615exgPBHjfuQ8pkWTMZxN6DwvXofWBJYQYsq8Hr4dv9wuwJvMpkPsb5aPSWrMMMQCthiWzxf393c3HRs5oYXUQ2",
  "key16": "5fefkwiqUs8BWknQRp7YB7Eb9DhabRXv8jHbvWEN7faRScZQyMP4HmeaEKQA6wT8kbQzUaWnjeA4ffzVJgHtHjFt",
  "key17": "38M6jpE7KqH9FhzLSX8DGy5uQE9kcRNGtBbb7mQHWbwkNqGehcqC7fs5LCN7Ho5oGyG4EAmJZ3Y9MRhAVDy2hLvM",
  "key18": "3mfbpBk53i6ELY22bA7HVgW2xj2ufhuSwb6YqoYN9rUdtxn5zFsJQ8X4Xsnipdix1T5ZcTBZ8DZShTo7fXsRroAa",
  "key19": "3JaUhpmyvVppWfYah6av3qUCu3hT1ghwcjmAFpeiwE8vWxZz3CzLUp8LBtpFrBEuieM2DwMAx1K4Pnr7jew6izLv",
  "key20": "5iDMJVaGqcJseii6yhmFbF7rLasUXKuHiS1CDtZsYLAmF35BVD6MmfzghHJjn56n4Eq2tEKKcuNQ4izZfsaXacsU",
  "key21": "3uB892CvZKhYijSEhidJAqPr8YocevVrCiRg5WWzHVMhgAKMAHQvoSGmAYp7ZYfg6w3kosVd6SUphSNqqx6gMeVn",
  "key22": "3b7DaDvAkbcdoLd7GkTe2AxGrCqE9Q7emr1JhitB3K9fDE6k8T5EwZjKhUL8njbBJ5AUKRUUwgjmWKMET8gJRm5x",
  "key23": "2R5TPxM8hGzwhu85AnmeJhpqESLAZbSczur15FH8ipNajtp5tfW97Q61ACZWxMgb819BPxbTe3AxM9e9fcGEbTYL",
  "key24": "5uQgwvKs7YbhUFE3DUFiUkXPMddGoRJrxB9HzCZx2tTxEdA27ZkNp2jJefi1yStM8pmYwbdikgH6sa3c6GncZtyM",
  "key25": "2DdBUa7FHNeSV9hYu5FYcsdJHGJFMgTtZs5QJPwwtT7KQ8wsuRW48Z72jEhh2XDamvy8fTf7zD34K1LUf8Nq9hQ9",
  "key26": "7w8u7tHkbmRGXgZziVxZt381tuLXX1wp5vWy26ASkfVXEz3cjWiKTGpk1AQDimFJu4MarLZZTG2f7ftMgK3oNqg",
  "key27": "3mroKzVcm8n1QK4tkXv1AyY2bXBdTy9W9xmGBUJWpMkC8gSDCM6Vc1ZDZdsR3p3M7BtZ7QNiDaw4HNbCaSXZBPAf",
  "key28": "4RpMKwbHwUVNNrnaZdKyCT6epG8FADWND5pSAJGoqqfTqcY3WWwU3RB1Hne2zJp1jCxw2r8KNKXVoDDJjDAL5VMU",
  "key29": "3UjBp7aVZY7qEVQ9KfKjAUCotEgdnMLa5E6LDbN6JUa4oomopp4LhZWR1ALGtcfK7hQJTAf4Ge7VJgfwk9PL8Sku",
  "key30": "oto1domRFgf7oEf3fd49aZM5QPv87dmA667Q2Mgt6ZS5R2PekJATYhC4X9btZvuF9WyS8T8huVMHvEnFMuBKbfB",
  "key31": "4nn6D2WiQfCBMRkq91N42DXWhbFAnZLb7DDH6W42xavHGr9gNTFtoTv3afSGaKVbDeEKNYdnx9MGjwkbM8C3Ziep",
  "key32": "dTHirhPc6AvqX6X58ZgA1APKVj4pUvnkagYmoiXRcgadm8C9xGkfbqRSg9VGSZaRpJjdy889omRUJWp5SQ9D5DU",
  "key33": "3wK7akd2DULCsS6NTdQgbCTJsJpGzpBVCLQz4Y434hUXJszV2t6PqCYbNtkB14y6jNEfZp6pTtJKSgTVQnYSQNzq",
  "key34": "gHUGFyFnnaJwvMDGVCB9N9wb2i3oJDNGtbnZGH1TGo4RnySe3uQLoHTZKfSGN1qkYn4nJk5sGRNNsKTqsn96174",
  "key35": "4iDiMeH19QdF4hxcX786SMLqCewx7d7oZ4H79y2PqyrDgbqzkkfT4qNVw5w7STjXzrsNBrrXTvFjSi1rPj4vesjw",
  "key36": "3pY6NhvphEZZ9sx5HpXJZTmSPdfN9UBPnwKjnstz5CGJ5tzamJt7yriD6zREXxqZaFkHZ9AF1tUrPNufiS2DhK29",
  "key37": "54ZefBpp1RufTULQGhhEAAVJVj7eLh9XuUAfpiocj5J8tXjPZwUPAp5AogXDWe9YaFZWpgKmVotD1xwHe9AJjBSQ",
  "key38": "4z9mTaaAE4iaimpTq4mDsgzUzfPdj7EKe3ywhNU7Ejs865P1uigxEbnZhRm2d4vt1xFt5kRZ643TEeF7Nhwq6wM1",
  "key39": "J4W42yZEN3UtDBYz3ENtZed1oMBAZSR9U3Ycj2ZikExGq8qWY9SnjzoKpzUaTaxqBkgavyNBmbeyZRb7d1CRw8b",
  "key40": "2pizciudMFVHHoqiLgNpYm5aZVKRCBV79AyqvYLsXDz1oHidRsx2xS9FuJHtQAc3VVRqSZ7uUc9X7m8SnRFdkpXE",
  "key41": "4b3pKRPkbiio1Ysk3u4Su9EC1MgE2GtxuLgrotGAd8q7kWrFS87RazaanVoP1odTyCk4BL8tifoWW7XBY8PXeRJV",
  "key42": "zu6yX9pZuUogCBDQyqrDMmZgBPTR3Gx5TxzjMHHQRCRg9vUpGTkuHcfp9rQZAA5hYHQV8gcrNX8pF55zdHYLzFv",
  "key43": "XNSjuJf9RZUTDRj8ri1P43yNvJYXjqnLoWG2kASq8cd35wASeFd81ZH8bn9DiT7D6XihhwtKDY7RS1JYFYHZhCZ",
  "key44": "4HRqKSeLEHKwqT3J25vvxNUwtQymRxY4LhxuabeFv2UC1huH4HPPvY9B3sFyVYTWH2fKn4m8a6QJDUtHNdfqZz6H",
  "key45": "4fJAdWW6ox2mQtA2933DHLRtdbmUdopQibFrpecQDcyqSt46kyo3igJT9esQG8bFRtJV8qXeqYF9V7PGxkw8SM5X",
  "key46": "3yLaY7SD8Db2ZGYvZtLeZ218uKCW3GudqrxDMKvaSt3HeX8sdjdd3JZfjPCUh7M6juZ4jQ7afS3h8mHG1jHvjELF"
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
