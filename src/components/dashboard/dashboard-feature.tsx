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
    "3oJJdazUrrtQvH3iGwgrdwf6yE3bUkAK7PwXEGNY8RAP2qeakFGih5H6CX2FGgYfnYb2ySU2Zk9iA1M5CattrNmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "649fpKZnktjv5ZfhsozQXwKM298TqH6pXEfoAi91pSpESewR11NBrhihhHefg3L4vA2ScJ7uXMgFv3EHrjcC9U8Y",
  "key1": "5XqgUtqXzavZm4HdY3XdPdBEiRh4oaugyCf76A7CLG2ucdkKz9rJskt9J4QfDHXUzScTHWPD2DMuTtZ9nfH2u7S8",
  "key2": "HFSX1fE3pPXayRho6zV3CdcXGCLCe16D8t6oK3vgqx6Jej7pBP4PewPeB8M2VMo1ipHaUJnpu9whTLmXqNYLmyU",
  "key3": "zsq6u7z1AJ5MSNTSrZDSHE9o26JSWZYMFnNtnMTCkPTYYMUswq93LnHVCFAMMiiiSfSeq6otwmkuL9DEKzYG3U7",
  "key4": "3rF1EYGvsSQwZR9fggdhxXyTE5JxYuJ7X8RqpTrye4u6PKBas3ahvtwa4jqpuBZQHvPPYQG11gTKo55BtXmM4x7L",
  "key5": "3pXkVUfzFmsUUdk3XFEqLsGbm8N7BQhzGCMBJmg1uA9vn3QjLDZTx8yo8TqE9AGYoSw5jKPAkDkxbg3xb9MamJmg",
  "key6": "2uGB37dVEDno8XujcRVmDaSUG9K7KeuRbc9rrjrF4WabVLzRoHTL9Ahu61j9qpg2TNFdZHk3yZ6YEHEdxhegCpcR",
  "key7": "4EHEff6WqNSk2438Zix3V8AgsJWmWasqqx3q9HfHzfRPfeLYhAwf1b7egMyiF1rVydmvaq8mFVY3BLiYAeCR8qWe",
  "key8": "3G4Ef3AythLV5P7Mk8siSpWh5wZQ6BMwiDNgBQNN4LGf7GJ9UbAFvjQAQjYA3Xhot9NaaacT2r74EB2WFZqiVbDA",
  "key9": "3NZAuDBDUFKjPhX5ZYhgGVh5eBce5QMi4QpDNEskjLCVcVUAjST3kPahD41EoNMy4ZgYz5E9Pxg8GxAJZvGhp1hZ",
  "key10": "67p1LNnSrJNbnNQ9sDSr6jsp9nvECNRobcf9yXdeYpKXKTWFp8dWfGZTrMgYGoatnkBW1vefxhPru51uzyEC8RFS",
  "key11": "2vaMSjvHfUFnWMwSbVjYDe9uwgv4LYnPQm7LwsL9Bf6Dtwa4dAxxXaecdG1CyL7xDWgAmG1juZRm5xpKxBtPrAKu",
  "key12": "2tcLaGWoB52rVmqvym2P2XWx5uCRt1odF1YWhNvUM2droncfieN8LRQwxbGKrrtUUXjsw692qhF2NZ3yv9A54nSi",
  "key13": "4AfCS3kCGDtYfHfeQbwrUrGJX19rVaeV6FbLBxEmXLUYJ29yVpRs5MwBNQR1VuGEEzdvV7qrQWCq23ADboCCWvCK",
  "key14": "2o3HBaBzig2miNX4dLnFGjZaBkcmBGFUHd5NyNgmURAwncyLZSYfg3cFyt8i9X9z45LFein36QGrFkBdSmtgLHCN",
  "key15": "26bnBvtcS3635VX24RKDopm2wpX9PtVveJWsXKWx3Q3Xt73ZoGUnVtgeSmnk5UotjnLDk5RX1bsqXUjFkZCwQHar",
  "key16": "4vYq8iYj7xFGuHAXq9K62FLXRkD5k8MmTV1XmiB1zkQi7MSjTdRfLdjCbVqEBMcLcjhFuDZWgc5YQ8GhbDZj1EJR",
  "key17": "4yXPY8ngwLsj3Sd2nQrSt14xMcYCqKRQmKvSxkwqGCqSeYe9R2mtpNPw8uzjR89NgfgYKzaZKYiNxupWKdJePb8q",
  "key18": "2ZKSANPoMq5s7SPeYXLKSGPaUc7AAqAqHAhoFyvoRTm9gdtc2mRWtT8bAHzxgwwsTjJ2ktnom1HST3xTTMP96U7c",
  "key19": "4hWXEab6yMrN7icKn5tUVQVPnMYGxhCReLwi7yTwRt6YgdedFLguPA9bb1cjbZxbfFyYiyHsjQcLcJAZvgMfmgpe",
  "key20": "4ujcw6J96e9MmyBX4wd3TEEHyfPniuvbEVHjtxv5Ry38tzJ47UCaWUXT3sybWb7x8t8fij5VrATDBt6RCzo5PGqU",
  "key21": "2rDqw58y8CLcHBLdvU3Fw3N6PQgRHsq4Q8S1xFx4PQctZPtyUMRi1bie2dxcLmZGLyEVS1NFVevmprkHBgc9B44V",
  "key22": "GU53iEupASNkRUfsTsweCfzSSRykpb8YuGvANuyA8kS9gT5f5wzP8EVb4KDEGLQ26eUj2v9WVQPPiobqLHQbG3x",
  "key23": "2CWvHeyzfcM2kF1jn5kgcJB91D54SYF3ELo96gBFYR86DEdhHUANvxgxq36p8kQR9TxPQVohqp4cUkoXjcXcyxhj",
  "key24": "46agcPHM3h4ya5LpfrorX9Hb8bT9RZ5jDYcswbFfZSWteKS3JEkaqE7zEB3fZgnbDKNNsQwKsrLWmK1kSJT3vTZG",
  "key25": "5jxc2qrkRr4xQBXCwLU3kFCNjQzVt6QJMp3GcPHbPU7hdw8BzJ4LV5u4MFPPcJRNcQnMCXGceyW35rWMgcGwPs44",
  "key26": "3b3cYuVtjdQNn6BWh8M8J7hCFEJXmZXAoioGjkTsdLfaxzG4frJZUaWwkctii3wez7ath6eRZdv93EV1QLPC7AWK",
  "key27": "4hQCkpj2sqtGjUK5hT5Z5LV4pTs9BN8iYwBHjZ7pvUcv9u21Tmhbsds9zaXosanG21ecE3VsZDeuraQSdFoR1sog",
  "key28": "2FLRRaYeNEHwAQaKWcL8cCKTP4HXG7G5z67qyMFi1qktvq5PxjbqwAB8xLqU8GzmuYM3P7GQQmd1PJeQbgpdjsRA",
  "key29": "x1JfJqCPHQ6x5Z1QNJs7UVU1JcMWE9HmadqaJvEVvKfksrmZ6NWiREcvms2KJEHPjjco2X7LRJVVuHsK37MKhqg",
  "key30": "2e79QTewavzFgvPaWuEmWyJqdYH9rUZQR58ZfQQ8dmmzA8A2BEEoFFMjeo1SU8q7ZZDMhfSPe9YLGKHZagqMKkSV",
  "key31": "DDXoi2dXwF9BYqgQ2byU3KuY8eZeQW2q4fb7mMJY2oLeA42NfYt4CDjJQMAQR2WRN9pfPK8C69ARCCfKqTuqAm8",
  "key32": "3adgPKJkMrKDGBHMf7cgxK6H1Gncb5g2ggroFpiWrwj3pUWCDyPgXYyF2XwVPSGbtDksSqqt9qqQavGokrFFmtfj",
  "key33": "9KRC2iSPrdNg98ECi5q4iVvqdsiQNvY4po5hzudk1XGR8kwRirbzC4akGpoUt5G6Z9fDDYht17VGRQPcuYBphMH",
  "key34": "5K5Pa9xR89mdHQymkUnLFiHnRoDPmNpoBYdmAQmbrZMhFFVyF99nKV8aR3CWdSMzjQS4fRYVDDAHhaS7PR7s8hNE"
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
