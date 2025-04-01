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
    "5LmFVEibhwVrwsa9a8b8BPGW8KVjN9qxrCzTUm76uFyzcqGdsvZQ6YWbE5dQRiYU82UndbQqpUFe6Gq9y8da1cY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ABtmSq3awv8B9NVo8QJ3FxCz1bw2u4gv3SwQL62KaBvjRuVNWdTfyEorDW1KvWdR4XBD4kqicxFCFD1zcQWnCkd",
  "key1": "3HCXmXY1VDE9bLZB7nribS8AkZcieToZnVegXmEXCnrxUiChnxUupDT9wgPEBXKqoqmJmQtv23q3n9Y9A5cnQKS3",
  "key2": "5e2DCBQgHGxfPjQEKdhVDjw5qUADf4G6pEtM7Pk6eiLwETNztberMCws32rR4Hw6F7GS2moLm7QVXTM7VNe6rfGX",
  "key3": "4pHQ7Jc6bZXE5zxYuNVTCWH898VP6Q75cyh8mWooFJf1somT8yFDoB7h7XXxXEkeqj2rR85cQdi9uH9cyow7hYL9",
  "key4": "sdnAMy6EDAMhxGef4UGiGaTNgeuQYEtbbZtW5pQDBQxMEiYMDp6bcK4LrHoFY2Pipdz3CseiFYPHPEGmoU96L7r",
  "key5": "D8wvkCanP1VNqdTtRYryaAi2hCEzNSr5D6YfFgU6ABW2RnWjU2xZq1ZDWkr4V2htRhFkzUsSX1JXDMaa8C4BLzk",
  "key6": "XW3rH8K9yhrS7zzraduCHysFQkhJutRS4Mdyec72cyR8wHBX5g3hxpF9uDWE44e4Bcpu1BhegjDCwA93EHCcnPi",
  "key7": "3cYUnBPYoDhBALP9mx5VBBNkfnwNKXu4PoGoKDgatNt4duHmAnFv4jjVT7QzDbtUz6hggdzCrqtxurZ5Ub2rJnKc",
  "key8": "4WGgxBVXPgczBn1eDpSbuye5cyxcbn3US9j7ykcobY1mYp85xepd27GBWqoPiTkKdehH3Ryyq7EeAwB3NUp2HG39",
  "key9": "2nbNmZf2d2CMuTox9fEgb6cRFGnChkwA5jVn26LNXYn2KsR6zhvaKB8ebjk86Re9c4kCSZoE1hSSYZ2iM1TS6YNi",
  "key10": "5ZbPbN3sXXNf34M58E19njmXaSMo8MwRYTBuc67mmqV9hRxWuVCjsrWT33AFchwh6usDjXycagcHG8GUhfoxtEtu",
  "key11": "2YNYXTxwhFFdcbC2KBdcwYbmhgJTAsp94CkLYFCP1h1pKqoTVgZBTJddQGF9HMbwNpYkQpyVwvDYreSaWGVN65uP",
  "key12": "vdCxaWxN5a12BMoZkK7R7WS1D6MHGcmCaS3e11TQTo9HqpzdXJyure77MV1paA7Y9RMGU4NQjA3PLV7sJCkh92y",
  "key13": "62H3swQgzJgWLZwc1R9RKw1AA8f3vuFsLzH5B5NJQ8T5L5ghux3SKeU5Z2R9rmoaGHhSaYuBL2MarrAuwwwxugaj",
  "key14": "3eWxhDJ8sA6zH3bmyEXpq4ffyXUGCQ2F6twzsCQwjgPtu4pLC8J18taBsNdAhWFmqAqzaF3iJkJ9CRqPu5sn8wdv",
  "key15": "tQginRu2dZKsfFAkEd8T4WyfHCuBmD71rgbsraxXEr8K3fxPLE6zsW7f5kLvNysDkeZ7DX5KMCcM9B7aA48wzEA",
  "key16": "5BttkH3daFLCuxjCKScjAqJnpCU3bBzwKG2DjjVt7GgoEYS7S1WpzkD7sPHbvoLQk289bdeoEQAPN2dfq9UhYiA6",
  "key17": "3BdhsFeE5sii9ddMQVnigXuWm9roSPt1CS5prC7jzcccnRXNTX1NdgYWv8aVoodEoszi4k4M7Bdn2htP5jGmc3Af",
  "key18": "S6wBbXG6e4WLWv7bH2TL48w25ZJwfYcrxqss9j5UMogtMzwjocKpc4ctdQhvBQnSRPtWTAPrJpKY2RYv5QoToXh",
  "key19": "2ZGwCuNHHVK81gzjUtJ3TsMeHH6W8pr8o8TpAvVcy8KDtTahrErUpU7K3RS5xXqh1b6PR8bqFubazrzfnsqeJrp",
  "key20": "2ozzbMopfs5fUJ7jHE5c2JydFNyroorqj22ZnPpoqC4PHfqUeyBcoHkbyHzAHkHeboMtkHoXdveK9ADx4695fKER",
  "key21": "6XbnyD9PTqBMDBXvgH4JsHgJNTfXvxoCSYKWHgZsSstqEtQLmwpxb8gssWKGe6qaq4LTXb45PebJ15oujRApt2z",
  "key22": "2zoq3WHc9cze22rMkrG2mKQqHYwBs4RUYbwysZ4reGoRRXCG3VeboQmEMKQYdEZ7ULhY95HYcLs964fu4h4vaSq2",
  "key23": "71vV7GMUdA7sNz7SaKxhCDGpz5UuDm9LgoTRMZH6Fqf9mEfEL1PXDT4j6soC2NocGfn58fmMvg9RvUD8ZVKQ7VG",
  "key24": "5YsyVDC7br9j6PbwremByopimU4hzDUdZSZkmYG5feFFAVB2jW22DtruAwDE36FVchLEkncyDCmRX6a97Sw3d1AU",
  "key25": "4PkkJsBB8kMKujVi5ZerTyuvEkqEqc4f4RjDrZzh1oiaXUCKQAq6thy4MibN9qVTrY82VE3ucKzUL4qVt9hNZV1M",
  "key26": "4qV44PqRWSJgfqnaGvnW2QDuPMQjqNxTqCmfgyBf3QEbu8iKViPkqtQyaPfEq5kRYSqCpHFUNd9CePyF96LsgvV8",
  "key27": "4qJNrBu2k4DKAkSKm77HwR4gNu9JvRtTZcSfD6ks7MkVpaHtjBJu6GxH14AyFDnK9zxsx52oQkrEtqwqL5UuxDKT",
  "key28": "2EQGygLzEt6UzWN3F1HqgghkCFsKjknj2W9GAsCpKW8dpuGQ5HkqP5sB7GdVUrBZ1u7YFs3DwJ5dUsrW4SzarsP7",
  "key29": "KBR186Zc3mh3V1Y4qJ7LFi8fjgaiaad9rcPg4mXHJacUT5m2XEk8svsXYaRzxvMy9V5FxEYCMYcW5bjjJCCj24G",
  "key30": "5Tf6Ht81PxMh2TsmBnBQhBjzUA3Jyh9Nx8kKqbAGJtTefrJvzV7YeFs2QoFR3qn4kaDLAEBaD5tekdrJJKrkKaqw",
  "key31": "4As1VBJ48LVgwkokLNz4MCwifygY5RZzvzv9FajmQdPTV17Pzsd9bjyY1pNQMiefd7SVEJEe7w8YfCHFJde6uaJp",
  "key32": "531axa8VoLL1j6JRLn18n8SiszB1YT5zcT5vm342fqh46hPLC49h2HNzTFEppceRg2KZDXwsESvE9H7jeGgPYRKr",
  "key33": "4cEovatuwBvJE6p8WiSVchcwzWmfmFHngHzMcZbpGWzD76pfzADJuvUzc1w9UqwKVZA9UYWYXBgqQ14CXp7ckUZJ"
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
