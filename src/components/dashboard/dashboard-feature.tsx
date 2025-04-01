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
    "3gwLuyE3cuB6C6Xrpac482LnHkXyeT6g73HqQKaDhJ26BsXN586oap2NrtD839q6yUTF1dhdJ3kE9R8R6TJy2iJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uMTsznUNXGtfWGBHx2DFhbpw4eFgDYzizDq6stS8NefUPyLBFBeN4KgBWhnXjakKRb2eXF4jVm4jZN24GAtiYh9",
  "key1": "5oQe45SXWxUjpC1i6HEiBA77ysMvFCGWdaNjAgRDhyy2k5DRA4F1FKBRU7bnvsrPs7mcUhNMahjXuCjWEXsSg2Jk",
  "key2": "3WDTojvU6qVm9kogb21XgG4EoJeT1NZV85d5My9Hr933FkEpuf76rm2e7g3DhxRgyMqpEUYqrVitzYHYLJTwwRnS",
  "key3": "31edKv6G1K96kxRBHAKgtuqmWQBMh6aic4Yt3x3TUYMjHqtSsXwPX1M7SUXEN6WBdwgqFm1hetyGC8xF5mPp3yVy",
  "key4": "5daSmckJ8SjMENo6v4qm5bKp92aqsmiCiqoxzM7JKCfMpQQxsNmJAzZTSBX2ttgLDU1DG2SWEWWoRWUKjDhWL9zp",
  "key5": "4LKAMyfoiuMdXnAMGS9fytfytTx28NnKUkp673BELDqMwA4DmyL8fEWw3sJizUuhGmwg1r2ExDR8kHYusNWgkoqE",
  "key6": "5Lb6K7zcJDZY1sc4iUqfPpgqMnrKDzgkD88zFSviKwksttjHDjp9QtSjgmiUFYNk9RpVJesKQn4WgiW1p54ABXay",
  "key7": "32mEFm1QoCXqSYfxe7s8Yu9i3VfRVcMV7KfcQJgQfsZcUuGQRqdPSYa6dJhDHZxWbNLnbShqGGy594WPC8mKSVrW",
  "key8": "38sVKtLaA9p2MvwEMzsVmd295Qt2t7kNjdpDbi5gxFCuGp5B6KhdJAPNKTXvv2HTfrcyV2oJWrrzEN3Q1kygrk9i",
  "key9": "ux9vmMof5pqVdsdAMNcP51rjyWTUeTphyM6YsuZz9khXjT6BW1L1QAfWdXVyeqvwdmo5h9CBFV2vR5nfkbnpHmZ",
  "key10": "5f3JJPf4XFC1BQ9dT739ZctdsutLW4ZBNN84EhdQQswtAmiwdVnssGgGvU7Bux7epi1DppA19oNNSCS7zGRtMhEi",
  "key11": "4Urkqh4Y424kWZRz7GwgmsYXugfE2QUPwR6jDwW47H62nqgLhJe6yk3RxYw8ct35cE6jNCCUyrTZ9BQYf5UYfGTk",
  "key12": "5QUd7bKLUzjWWnu4fGAnfM5ik6wY25u3UWCNhTpVwzVUqpaAFKT3RF5K25PmZae9b2HwV3Lr4g9G9zNiNR9gZQnd",
  "key13": "4MMehHp7N1xJh4xkTfVUb2MYpSjsD4AFCkPMLPGbh3eutPKWchadFRRLA6wHuoHG7jFcd6AHvPYsx2Vk3BNMfKNi",
  "key14": "2cb3wHMpyLQRuDyn2g1vwpU5L7qmiHFVHwgc2YEiW2isMRDNjJJzVN7V9GVsPwL5zH9PPSYsutqCeGkTNR8qHH5z",
  "key15": "3Ra3XNiRXpf9HFSts45rGmQKsvQAFfeKk6MydnCvcg7rFRGkT1qbnPoXMzrdJADZfCNyknyqCxBViKSJkHp8MCRn",
  "key16": "2J8w3DEXWC3P44X24cKBTqcYyVR9PRjv55pwUGUcn16JdWFZEMmU4Esb4HhxKFh3H4j8GCMoJiArgnkTbymXsj6f",
  "key17": "67a1UoTgZhHQ6FhC4VZ3oKefuFNLZNhKDVmjzQMmftimi1EgfBW7DwSmpDm88HtSmxCdn8eBPKhHj6HW5RWYb4eN",
  "key18": "21hfE9zWtWbbnNKnt8iYSSFqhVKwNpLoCYahrv7Tpf6XhFziSG4gTfX22qieYQcA1vu9bU8QeZVYGBK8uDEeL5h3",
  "key19": "2E9QzpNtRwu7PYmn2NmMsdMr3fzcp8Dr2Frjn56HP7Vcbtdkxj2YAZmqmh1uZmBRM7AxeaEREP9RRbNhScbw6Z2C",
  "key20": "5rWaWzhVfpUWVBXLm24aMttWk18NK2P9yE7mpCfrydotCohhnCoynKDC9q9oQ5H4bXjFZARxkKgHhAZZYQ3ShR1X",
  "key21": "2oBGjZZot1bNLkkDyprTqtPJk9H7frGtG8x8Go3WCGNwgTXoF7Y1b9S4WBSEv8AaMTgfVgKerc5dkTVES3s6Qh26",
  "key22": "5g1bjfHy8cUzHzyPZYLMqAHEd7Y3zvN3zjVAQoeeJb8oX15T18gP2MNNJGrGGcQRgpSaQo8cZjxpC5b8iPAmcwmJ",
  "key23": "2zujX8awfusmrRfnrSh5hvMf83P78NT4XEvXXqbgJNrrSCuEsxMDQcKJVkQnLZiFbhVZncsZXy9oob8gf8fmghww",
  "key24": "4i2MBwFHsuQMtYKY4CSBnaCT7e9Hmo77pyg3hqnR4EgChF7xf3CxyHR456h2uD21dbZGu1LsJJA4nuWw85Bjehm8",
  "key25": "4mtUhtFBRpxeMsFLQiT8iRt8vVKVtsi2fc2wTRZ1eH35BR3qHsATWRYn3EKmqSKnrmHutnJGYygrp7w2fBh3Mz62",
  "key26": "2YLUY28BH5FxYuNaeY7eVjzhXn1EEsyzf3VpRpGADXL7Rh9NXQsa5geXTYrxKPYKqCzu4QGC8BPxSbraFvSCfY3C",
  "key27": "5nEPgVtCpo5HH1Fw15MvL6RQNkiapSaLNo1XNoDFcbPtC4994XToXVZF6R6cmaACZCxzQyjox9Jtn3Hi5e7v6tzX",
  "key28": "4NFZeDZzBZZwugwx14pm4mFczkziVuKuKfQP3NpQyUQVAAvHQmXE1bck46EkL7AKhwkb9LgBoWNVSU58VKCtKoEg",
  "key29": "58UtaGcAGDgxFyjSkW98dPHyGvE6SmG8RF2CdhqXojnCAgNmZtT2AnrrHNUChWa3CKByNfkf4X1PtZfyoy33SgZ3"
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
