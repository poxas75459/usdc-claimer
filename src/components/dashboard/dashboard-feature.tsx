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
    "4hsgFtL8YX1v797Tn4v2gX6uVGQ4ei54MH3WQjNqrkJy6fN5peMkovV1UpN49fUAZvj56oaB4YsDeKqKWs6W3ZKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hBrtPgbQG5YeHr7q61gH6om2uz5Pz7auw1Q3bVgyX7NwBknzvmVQxnYns3vVrP1VxYNWAdAd8YsVcrPeFM3q4GC",
  "key1": "KBKa3exP3SrKFPKmnCM9LBHffyanjJz2QkdS9ihLkXXwHD6BECch9QAc7AN8P5n5YUpzhBqQGvLSbBmLv1LmKbu",
  "key2": "4w21TaczMFFAu7cMEwLmVt8MobtrRytVeSzGet23HsFaYVKorPBQUQnTLe4NQ8JbK3zK48VkeajVbyUVbsd8bAmQ",
  "key3": "2wUAHfJV1rxaSki6S83uz3fpWF9pKzxhfWH9LecZbGToRV6ToJRqkQuiau8QnXVDXyYsrXwuzBrvmSDdzMEaHfmQ",
  "key4": "np6ujE3722ZJcb4v2kTGbU4UX5HguUFfGE7Apfbjf6hGJMYaBKhTmxz16Ut8xokqDD8G956rZ5bMWedsxQzW8aW",
  "key5": "31Wrt75wUMN28qfGwFH2FfGwUCDy7kVpPKhATo5niFiJtLebn4UbuFsfgtrCd3kW3SrtZ2R3nEJD2pm33rZjG6Fc",
  "key6": "3gPcYumzZqsrEn2JaNCRHdScjek1peNDsKoTCUtYwFgnobVen8UE8TneqmJMYcAnxxrjKvNLQsbbXD1jhdi8U23z",
  "key7": "45rfipiUzKiWAQh2decANVJ1RfUMMk7b9GACy3jRKF4yNgQZFBN5p7J2Pt7KnLHB6jFqZNDJCXyuwL8STqTTXNfq",
  "key8": "2t9ckyyek5YzKAADfMH6nvhu4bAnqANQ5mt1dMhMzZxnwSA7Pp2jBsN99uSrCXNxdBXFRBoFj6zGNWbWVhQaGYfy",
  "key9": "2Sg1Hnt3hbmKVJj2jTENHNjAzTneoZZrCWnGkaFa7JmnKWvkawmFLwaCNJVRgiMZT4wUqNFvBVo3q4E8SNJ7rwxd",
  "key10": "5a75WcyBEie8Tkvw8eY7XrPCjPHx8eh3AeXGoxyB195iYsVwyrPizpPKTf3hbmauosLAuchsNmhkNuMHqRgWqj4G",
  "key11": "5FiTBhkPQ8SfzFTQ1ftgSY9jw8Wq1uh6sMy49zxTnC6HFkWozUVTS7WkdoCsod6hbJHQU51j74gxSvt1zoA6gCAP",
  "key12": "3NwGcBw4BzCWva8GdGpC4QtUud7cX5XPZhUef4v5ST6gooxyAZC1TqVnFhHtDNTrSKCN7fksQ7BdcLeWFPmiNyYJ",
  "key13": "3pCrKCWWGpukMyPgKSFdBn7bL7tfpS6uERibeaHhkZ1juLeapXguUFLQ2jAvfcnjNe4bkMbco27ZkikkgBDQNASp",
  "key14": "4RP6KdhefDEsDWx86GFD5hLNupz9knt4TKKZe66rtwSjYhTZN5xdPLyYPKVAKBbUNMSxK883y8Vrd29SJy8FP8EH",
  "key15": "2Kqi34JGc7szxgr2QPJWeZPP4VXfELUPArprHQ9cU7qPJcMrN8LxLzcabFwEVYgLgvFLSYGr6DKQjaBAWXvXV8uQ",
  "key16": "2SK7Q2r7pwoaxRaBK9xALphHcoqfpguYh8tY2fW4oy7YSvGyF89i3oyYqwW4LeZJgkqUi7WoeSUKqaHz1XiBqEHK",
  "key17": "2r4d9ipyt1AxY4jwexs3K4oc79XHaRGvcMhEkkrA1QJZXWv8A6bQM1WHAEvbYHhfLMbSzHqCVGSZgNnR5DyFao6j",
  "key18": "2WAKEGxs1gkPdMCFThVCsPeBameJA3gjAm7DLbmEL5vXVGsEHk64zQZtnPdZgcYnvhgqb1You6McsHdvyLAatboG",
  "key19": "5o3kqYdHRSy1WQxKVBfEbY437HN9GPBrwbErPwaBQPqizsiwcztqGufwM2atMoHXoA1Z6Chq1S5qZFF8cRjUg6CL",
  "key20": "3QYjavYTbBcbDyDxP9SBfqj7PZQUpHMq5Hm4qdurf19EBQkSaCxdfdXywzTFvxgvH7NoC2trXqQXpP22DvFyeyua",
  "key21": "ZxJqY8KbJYHiRHejb3CLBDJgSvXw84QuaCso78UE4CQqKgBHPJdZ5pwHrzVQCFRyGoEG2U4cuoqPBcVSXyPzGCD",
  "key22": "5t5BWaZ6ujpvvRfBNb85VjEL9ivq1zXzmB5aGak23uzS5myHNyP5zniusuLFJZPrpXa5cPK9cTHcezCp515CEJoB",
  "key23": "5VAANcwfPrR8gL5jmPtEFzXwFoT16BPx824wqgTbSDQwyreuB45zwPJbEms58JF6qh1Wna7if8uYx9Edvd6aGU2K",
  "key24": "4NWgQc6mwMtjy6MYwLNjHzhZuFNQK4VSQZWqFJLGBZY8vxPmeTsB829KiMWcckRHo4LNDxmjugQqxXF5FY9KSGum",
  "key25": "5tnccviwyWgiHY4PFjfSPe6Hq9gdzhEzr3ydtvKvLYApuBR2ZSNifbqoYN4h3Xi5rq2mNvr8NXEKBgqyP4KvyM3u",
  "key26": "3ub4p1wwsvfsZzQmnSvWzBrPzjhwurFQn4LhR3rxnuVVe9edGuMwAnXzrPqTs5aJ8hDSV2X39rkqZGpuwoij6NC1",
  "key27": "676KsdPUpK5qU3PqsmrAqWezqDcP7KZjytSJavtsZ6vQ41kighKBUyHf65MGXWyV2gMouRKRNQNWTPDB92iauKVg",
  "key28": "PHFFQwKBqFkuMSQGnU2dihqrpFmVxp3oS7NcxgN64uU1kozLNcpdaLNzrd7RdAFAsAKpByzoQn3aFcruWTFUq1t",
  "key29": "4dWhY3QLhYe3iAbNSMkRcEd5Q5sk63tBBKpWB6WYD6MFR4r1JcLCfdQjcZxrYfWhYHuPwpqgTS3H99kjfUraxqXU",
  "key30": "4Y9chCeCrJXPokPr4sEq24TXohqmXi12b3Aprt75N9vtcKSp7VRVWwuJ5YnLXT25BNSvGLhouF4uG9f2GX1bht5Q",
  "key31": "5oy5Jj4rgutBREktig37XqqBwpBDkuV8oUeLkiiTQfByH1uUyGtJxg4vjrg85gicguAYPjEqiB6tDtgAurus4nEm"
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
