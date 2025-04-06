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
    "3SGQ4rDAc3xzRjXAmphZ34Q6Q99Bbc2Bc2gcdiD2Kcscmqg8FKsp3VP95hyqSVx13GjjrGzeVjjJmZTZh5eX9aEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BNawGo99M7AdRoHBHfoUriAiAYNmzMeQuq8VH8cHhPRHo9nrGSuN7hFykDMa1CeYMgfkfbPGrRdi14Uft9P4D24",
  "key1": "3ckSpEwhmDb8MZRpxm48hUAxkyrFeQZGQshPoqdB9cK6XGiTXYZrdtoNv4mSVxN12372zcVqcBby49pUS4UMwyYn",
  "key2": "2dzCosQGFBp7jJwdtqEJxiiaBbKGNMBGCQbS9vYrkDDYviTKWVvqEEPTxhdvGuUDhMsZh2rbRtw2qBbXyNGEynFH",
  "key3": "nStpjEd7q4ZMHXD9FX4HraxMgKBM84RJc9wKvWewGvqHBowAqwtaMywZ7m39hqJf7UnhJsyYTro5AATQADdSqc3",
  "key4": "59kEPZRY3HZXCRyoMJ8drKtizNoJAVJFYTRsoV4P8PSo6GX1AfAzx5MgMvLZ3ropNjsoy5ZKbvhydcYJfaWkbTrP",
  "key5": "3CP24mUi79Dg5agBxdaoTSYVMXHvZuCzncro36mgfiTb2EcZE8GBVWLLPumeELxX7UbQKuEg3C51JvsDJXKBaJs9",
  "key6": "43DC5DTXaN5RBESR82VFoXD2tQKztanXa8xptekkcp5DnapUq4XkVe29L32un6LYkjuowZPKV8dBduis3fb4kZnz",
  "key7": "5TLpzPbve82MdTdZwougfvwsXoYbXXzLut2kYUPAjDHbsDhKFMwiVbT4694vkr6erM8HZHLvjk7mT26bFFUzVUZz",
  "key8": "2na8jyQJ1N7XDh9RscgNxrv64PF9hvTeSucvgo8KPRpXqpbqhRvRCdL8axepVYBfdK9EvT3hRgUHBMi6NDXpT5aP",
  "key9": "fqw896aQi5Gia14e8bMWu4xxbaFqaoDbSzTZh38CWviFTvXY4g4c4D2pyrZ6nySXFuCjGL4qaipdXHdEXdrTuMM",
  "key10": "5GHjAwVUUzRsC198Lcyc5Coc6E7StBiu2F9ZvLSLqSnNhtjfkQ1HtxqMEThS9LMVybXkuoWHjWAPA3AmXa83guzd",
  "key11": "g633nksN9nBRFA8BRtQA4sewMk6x48HhVVg4QJc2rbiHzQoFzg1Bm7sgnAbePQL75d6yXn37YPLRjNr7cF9ZF2h",
  "key12": "4jg5cLSZHbSeYVUiZrTEFMTtYF4tiVJv5ZN9XmFzQGqeCBdUXzapKgvyiqnCKWJc5zHNDfDxczcKrZuwBSLzLv4G",
  "key13": "3xmizsW7swwqGwkWYXofGSJGvtw8ueCBHy8LDZqqrYB7mrJrMFHJPawvXEMdaJPVDhFukzt4wcgZsVWotp5bxqMi",
  "key14": "2b1cL1tHk7dULvFLfWokdVHs76spTA54D82GAQDUfLYrZNtc87ksRHjXKPeQvhpP5L5LfwKqmGQTZ3zUohRwqEig",
  "key15": "3PnsPhVHgTajZi8RfdHH7VGRJbFpCL7CZ2gvyfhLZ4fygYjiDrd9TD3zLEJePnzfGro5j4BwgnetmJTeSnVouHRK",
  "key16": "nr47XPGoCPrVxrJD6wEKy5S5H3AjciVdCvdaeytzN1LoKKWxtVT8bba26so6wazzEn8gVApCzeMaAQyjW75SLiY",
  "key17": "2rMq87Kp38uZHb8TCjptaQtfcVdTPebdiFgnXjn1LbeANk6i1BxTwa9hpmsAmxXJjatA2EqCbfM4rAFCk9c5SnZQ",
  "key18": "5dVao5qh28oBwPrCurVA8bpFqqL9reJu769VhR2atLziSeQcnAAM8YhTCBEYRJrVEYSZYeY4JaGmKzBuF5t4VNWP",
  "key19": "293T9WNEuigTq4Mrcp2jrcSLAYgbtFfh7asNwBvFEX6oE3dT2r9WfYkxxNHC7U2Mez2BeRWRss1bBZeoT9GEnx3R",
  "key20": "2hc1a4pnuKKGcZHJKhscYpo84pGU9SAvqvVUP9bbeYMecPvyYB2udofQdF28b6jGNnsEBRdGwoUR1rP3C6zhTaQ3",
  "key21": "3xNXNkTXnK1aaPDdgHRkqfPPZommwod6RChhGhD9Er7TeSAqRSCWgMWyqskeJ1KHfkbJPmf71coiEG5cnN63GUnw",
  "key22": "3YAx9Ndj3GmrkzvzCpSB8LPNXbEsmg8ptXQmDDrMBtK8GtCJkL6FiwhR19ZweTGwPPXKc14U6qBf4WooKrQ9rtPc",
  "key23": "99YT9M5vu8tbCmdk3vnkDKnvSTxaaiv2GHE82PMeo3e154SLQTDkwguCdxyTjWVVSGiMdAYBpVK1YPsUtsHJpJu",
  "key24": "2DDHFgKesPFMGp5P3nQxWh7J32GqqoPKonTqgPYnBbw2LXvJufcETnVqcg4HWvWEUNNZuULX8ovV67QRfLtUuHyc",
  "key25": "61XCCqt7Vgc7vHeQQc7GdKFcSj8HyenchawzUz5zxeegQb4YAd4dByFFnun1xMz3HnCtrJffMQYGGKDC5zDP1Z9z",
  "key26": "4YraNGTKS3ZwDnxveM5M6wsH9zSonBN8GtCZkqw1MbXocXKjJsrumfhks3Bh5RkoaCyDTLQiUxJfdZA5bBEim9yp",
  "key27": "4qvTCPjZZrLj8rcPuP8VU2R4SonRSYxezDj96LGfitgw9rXzNqGAgnDrj6QPzvxCawFy9yzoYoEpVQPXvre6dHCY",
  "key28": "4kzCBw9zGw1V9zT2ZspDTw9iNzHrBqNySFGnUmKePVtpVike7ger99SYbp97TuCdauEysZDjADhedoWn8tT1VgH2",
  "key29": "2uajSw45qkcTUx7oCD4CkokJnq5yizczofUCCQYhzqmHwVzsx9TTDULnxX4gAsTnS7mSd5436pJ2QW9pDaNTiSje"
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
