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
    "LdE6s7JrVUYkjMkVqJ7w5FB23VuUM9vS76fUwDKRAdepGxrTRSr9GZbNtRFTqxNFZJRugYQiUhHxGxjZHB4Xwub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YW7K4cnyko2XWM2wk2FsQpQD8RVWc8rqyEuvanot5ET4KGJxekJj3AvoUQeuJnKFsDwb3yKAofNhVELRjGqShB5",
  "key1": "5sjT1ttjP8ZumzSPQsVbWekZh5ddYfmPKczgCdm3ZPTZeTWNwbX33jXdu1sTy7wrnb4M33UTH1ARvHUDcC3m8Jvu",
  "key2": "7F4CNWXWNUPKnyER4ksKvmZg4B1caayC4N8wLwRcsJ26aw1wayQdnyHHoXNAW2eYwLF4rHyH7zySLe87ii8KvcF",
  "key3": "zqP6dKCw2xXvEieqG9qSSKmnd2pUDsFWVVcAbM4aksQEmw1rYZ8BFwBrruxKRncYegQS9H8nDvu42Mp7AyDVgM8",
  "key4": "4uiYVhDBKaNixKnv1PbVdaVU2mWAhvECXU4UZZC39eCJf4Aqsm3UJPttLZ34kUgj3LujhJ9tN33gbryMzZqowk5d",
  "key5": "2dFPdsZ7z3wkjhLXTcU66VthHUeofpJnsyvGJermA1gGASd5A16VbaLEgLZRuVQsUApKvehvbSrMQepe7gmQzLZy",
  "key6": "2uSWA6QrrZESiXSSqEkX6VucgNk8ccnunhHdJZqVXKGpi29zn436REWDJCTeuSUqqTCy6LCFVbjrgXM1jc4NAs7K",
  "key7": "4iEVu6VAP41FJJBZUV2eezcvb9iTTcu19d2G65NKmqZwd4TMLRKoX3fZwwXMQkJHD9i7NoUHnxwskXUMREwp7yP8",
  "key8": "2fsBh6RR33od3yTuPgEioXf6noLouLhBQbGabgGuUQwnyuTjgpBDYM2DtSfWu34WTbKALBRAcnEN8kDb3cLPZF5n",
  "key9": "4Kq5u99csVkL39Hmw5VSQcpkHsDewcjjXEKy5DswvjZQuESbHnkrekYnQgznzJAnhbRYkwy1VnEBKPTfuBiwBepk",
  "key10": "eFB1tXgpAEEYuy4MXVYX4kQwk9U6fCRUnZ2Lhqia3FSyqPUycmsYyAnzrgXjdmHj9TrnHH5LFdu88ZU3pneMXQY",
  "key11": "fVhwGj3MUDHgxd1VkmFhXYQPzRuk9YptdfM9ReFPF9syhxHuUvCk5Nc2fSqyWXB4AwM9uK7YaQAUnK7XWBirGm8",
  "key12": "5FVJAPzzWyd2WdYz5sLP96xs3koE3ijYP8Dty68m44AcepyA9oz1zcDcDCbmuEqq8Z4YkE8xebhYHN4JpAuEcEC4",
  "key13": "3j1mkpg2VjzA1eCm8YkGRphQGV8Pp9xm9fJ49K63Nw2d1P4Kqq4sczrBLk4Gfa8W27miHNEVdkba2VnY9AJAo3Hz",
  "key14": "4u4nTdAaP73eNzB7cCUTeAH8XCDed8aTDKnJw5eNSQzqwNFfDqrpMkKAmGnnGxRCtxjN6LiGcsgARQvVth48LDcG",
  "key15": "5uDkse6Vzw7fqQLEBWB6LG426b8wHBdLUiLVmrQzrZ3aTweEULMBcbABxZeN2YVN1EZkXfgj5kfgtJxUpEzfJH3t",
  "key16": "2FQ7cwX1Br6M6xo9D3tZygmqRiZ47ZNV5P8nYMncFnXsLUFe1C2KFTDPiBvEQtwPxoqj3bjWTcFvTZE8mEbCsMQB",
  "key17": "2EhonT4qAekUHTrA9NntTK9C5ugRVunBs15f5XgbgTPq6yxg7LVLqoi9HjgosPscYESn3Y79kXP72kg2Xa2Y7rcJ",
  "key18": "5xmdBF7wJWvkZ8URZ8NxL72vPodzeYPnFir9rfCtyLdCUpFDonv3d8nWFgnwdNsX8iMuxEHgSj3YJNuu4SBy6C2b",
  "key19": "364whfKUREAmrBq6LGpGiKwx6dxASUBrrbUoc9PhVwiQV8FHcQKEkre9xEdcDENSZPwUqoGSgsvKWCxeHozHVseL",
  "key20": "2AK3Yw7uChapW5MMRxbDBKDQ6APxa8Kc4UFG2s1aGc4pWyEGJEz6cV1LfnjmQ4u2so9cWVA71SRF8bFHonHiGqcE",
  "key21": "3vp7tkHfWdQFc3tyRBwRg542VQDEHU62S6iAmb3wnAweL5fzVfSdUKjLBC35LPuCcHkzstE2CxxqjoaAFNnwNJjT",
  "key22": "3d4ZH7aAA5VZD71E4nr3HTqnW1cFP22GqFK8SLMzRjy2HQhvY4QCe3RgXpHHzAu2mDbBTAriLSLuqphcXzhpUG2F",
  "key23": "3hpZnrwaSFkG2sdM6YFMk75KcRJq7zE7NXj4e4CWN2wfuLBxkzqr3a78MDGBhzCyQens2kAAnXSM5UmXYiwj2J1N",
  "key24": "2pYQnMSdiFgqeSom1gruyNKTQmy3B7vyj6Q9vThaJiCfCajo6Qy1nTpYun1wiHjqDkMZtsjWWYppM3DHFdLXeUJh",
  "key25": "5QHTKSoYcULmUnpWtnxoKzWzRSPuB6Gq9ox5yEeZsxEyZdV2pNdFjWGfpFcZRdLfDUHcgDbdijTvwKjYZwp79Q9N",
  "key26": "429vukzyqw8YxxJ2cBbAdS7dyW9TzR7zswUaX5JbgziNRGXZajBAe6ibtmi3H1a8W5221yuhZGnppYycyWWjnB7r",
  "key27": "3nuvChB9Nha13kKe2JUytdJmw855ieLRro1QWQij3ekz3VT6xBunyN3bBTtN1mx37enR7S7ogaebkYVkpg32AZBe",
  "key28": "2NFeh93d7ueyYHK2tXyNfMsxAjpozZUdJNKUyWoScQFoq8yCbjTAo11SJWRWEpTjpoA6a9QD1vPCGcJKaErV3WJU",
  "key29": "ogGhUP6g3hFAPBkhj2p192SjEr1HmUf7sFUW1sj8Usj8B4qavWEDQWPD7fMLtiL84L76wXvuADmaiMyRhNbxnhg",
  "key30": "38PBQGr4GbaJswk8fniXfyyqATjKAG3LbCsHMENrFwiYh3wBRSm26zYGrAoERwZJ7VqGCrbKxzM3qfSdvPWCkG1V",
  "key31": "49dbNpoatLxBbnP6D5uegSuDhqTjBhyJv4s8WuE9yj4xZAJvdYQqhremGhaeTexaQEcNDpUGFiNvgbSAVCHJY1vF",
  "key32": "3ftsEFFyDehuY45qtGLobmS7co1KQDMHqwTrHLTg5PkgpCQnb3PAQo4LmYGutuzawDwrKUaarHGcW58BpSgevd9H",
  "key33": "pQyi3NgSb8dzYVpSGEPrfw8NkEjfZz1szHoj6RkEeW7qdhRMWJFQX6z2hFFAzwk34mX8Nfh3FaPA9ft4TcqXCe7",
  "key34": "2FncWuVYWBFwPnnKNaWeMc62BLCzSz4q3Yqzh2rJZx4eVXJRPtVsDabQPBAs8q5wT9JEJKZS3A5K3yaHsgcdN27V"
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
