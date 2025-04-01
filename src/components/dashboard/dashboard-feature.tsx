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
    "2WBDXW4cMy7iLEP9N2JgpNXgvk52pSPityYSyQ8Wii7LSQbWwggr4SzHvEJzoPzv3rQ54yFvSqT9k6QvERF2vjdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VPVQEkSMiZii1ME2CgdpP6A26W8Y6BEsbdKWRhCBjoUyz436ZoHkGzj3focMqXuNyX9rnkczxqEEoXBtxoUx6Ym",
  "key1": "4Gm2dRZ568iPQ3AxhfACN4Cd3KsWXEmJSHZST4g7ZuCptXCZwW3vH7qZMexfzVcmbE5PV6uJfN2EZDvF73GM3WVM",
  "key2": "4hp45K3g8P5Q2QzBHBpftgUKu7yyyR4xJEs456f6eRnWqy5NZk6qvbMAU4kZyXfMMK4dMZvHcXBvHv8DA7QQtAvz",
  "key3": "5aLskvGm2V4KxLner6jhU5zLzQBuRoUFsUVb22t6gCuHErv6GtsBboxrWCXsPjgkhM1dfmQGhvsSXJNnxHYwumwu",
  "key4": "44F4P35Y9uo8VT2HTRCcM2Jy6LxYVAx3LoC9hhwNmWcSbF7jXcFrNJGU8ipFbhGbtWPeCe5bjvrwYW36MAFxggEq",
  "key5": "4DQuYRxpyUC63vYxVMEe79JQPbp2Vc5tSWGTngAFz6qhBEP39iA6UyAzNa6VATcni51UoiVZtELa8Lesnmf79jhC",
  "key6": "2fdu5ed1Axw6XCMwehAVLtNrFQdvkVRLG84jcod9YSxzp24ky15yYZaCqxXg37WvNDmy8u2xQZH1Lr2e9rT9iVy4",
  "key7": "6dgDAju45wC2zfxnu3QBapRQMyFFRYCHFhNvV9wagbsv69cpoFzDPQJ2E8jXUY5DNBXUZYr6K9HzhScjF1BaDG1",
  "key8": "4af88BH3WDJwUepJ9UgvMWg6ha5Z1tDCeRdq4hXkthFxs7YbwGihm56DZgsbDX8NNB4NT6Pk29YhDaeV9EuBAgP6",
  "key9": "y9fLc2r8Wbg6BcLYiQpGnWbAZZfFiakfLLXPwpPi2DBLBPUnmydGRLiajS3pfAhuSKg6whGkZT4BMKtuk9fjPkp",
  "key10": "gb9XPSxPNEVNsq2hWtc13vFGBrF1Hzf4WEkDoWxk1Vpg9G3a61JjGRKspLhL1siTj6kFpwENYzSasDb4YMSDbuH",
  "key11": "2QMAfkhfGGBki4VPyFiKcAznzLEuLzRBS52FV3CJTnz2hATEvWLXyMi31kMSssG5D8fNBWyM6ETG2havu83M7mjH",
  "key12": "5dk5M8iy8mmUTthKBk9BZWP8nWoUyJQSQNCjY9mBKkW6AQYQXPkCug4sfyozRHaidym6CapP21cQxBBP7u5t1WXG",
  "key13": "9GbmNXW9kRzPA515dehF5TwZdf55eWvczARWW7cAq3GA8D4CafA34BFngDdYGBGCKbEX6dNASTkuZdHLvFbd4Ar",
  "key14": "5yz8tQLZppMEwiLaaHhx6ksLfVDAFzXFNBmnV2SNNavxp5QrPPespg6yp7LKD85qqASeBMQ3PAcNHVwUwrFQBK5t",
  "key15": "YJxBD5QAP9Bw1KXyCeUu8oKdxo7SHjhrx2jCmcupNjBcsED4SoHDsg9ZSTwuPPKRLuoJKQUUgjGCJudUJgtBYwZ",
  "key16": "3iinXJNb7QoXb4ezGsVfPsmWppcRhJ2FWik5yUW4SSeNiW3kfD1JE5KhzdmNk7W9boy81kXQCmo8BQ5ncM9utDDo",
  "key17": "3YMu9VgumsZv3EVE3ojvTT6X4UEqc3LxY7KQ5ERirbqrE6G82BQ6Ca1dVBfjWgN8haWRGxXAvy7QRuTL62ybfB8L",
  "key18": "3NurSdaJTxrFDXUCB2fGunkQh39kf6CZ4fSdC6tEa7HNK6NrRZVVwxeM9ehTAbpt846SKDcK7z4cAZq4JtyrQKiG",
  "key19": "43K7J9ixufZxpUeK2gBSXCAcHWfVCrrJGgSPXV8Vo6Mb7NCkowCymmyCW4yCPyRAVAR7oTs4EngcKnKKdkey4evS",
  "key20": "5R6GXJKXjTrFThR76uezdwQaVu4iwhHHcfYdfgVnNxcExZhiEL3GXm1FXawKYXGgbq8NmZ981JTFQDkRqUBqJanE",
  "key21": "eR7fQsmpziGfNt2ZuNNrgmLxVgMJG5iUcmiSJbkhKG9wfiB7Ty1quj4Z7RqQNvSArMfWA9qXUgGnDdZYvMix3uk",
  "key22": "64gfZPCuM5meGpJm9N9YBX3udzda3eAQQwWt3JVin1dhenA9h7BKPAX74ubx5hwcUWWVRQtpzaMRRd3RqBZmrnyD",
  "key23": "4a7RccYsEENWbfSLPuGDJP1HKeT7hZ4ftpDfXkt7qFetuJiRiiKbrkFBBDXnz7uFXkNK3eq6Ld1WzydP4uH1yMX3",
  "key24": "264f62TNMauSV6bYTJByNBTJLa5fTqVM7jCdM5dXXEHPWB6EsM6yWeRGEjAupMz3jpgcLVNoSSnCSQeM8D7sxttr",
  "key25": "4LyvUpYs3TrSHAQgAo8dpQCmccaTkGQLKPWHQADVk5Bq4KrNYwL2JUQ2rGFckctwn8vfjziHDQrXTxWZFaiWVCDo",
  "key26": "5v2zKkHCFE2vN943QeyUhmYJNNMo4bc15YnqfeNNVpXJa93A3e2YWE2hV7nNKeUkdi3JLGhD9rXsUZ2EuTQ6bBxF",
  "key27": "3NkqX9h4YFCTJKUQPiRyzNXVoi5PSvFv4B2DVVjAt6eaNxACW3J1kX5sVahx7joiZE3kj5gF4cUyk6asdZFBqhJB",
  "key28": "LpmuWFYGn5BW6477DX45XTDW4cytdtLavzNPyRGBipbT2gBV5Jb2TRXgsCay1rBJ24i73E7JAWp7cQYVZK53EdW",
  "key29": "ytfoug8BXqQ1zLw21sdBygm9b3fgPES2Y2xbGEGB7uxhW1ZWd2HWm9KwuSA3oeQp29sCV1pTzjapi2WA5qXsjZw",
  "key30": "2VBak594JmqpYZmHEU5z6cqYumndC59WU7LezF8vgCCJLZMHa4tbZ5PWybPKYrrJsFj7YfEXjmWomXSmrDg1ALqN",
  "key31": "3e3XHRJHLPRAz6qQcnw1AX6JZ4cANiYpFRfmuTGsBDZU79MeSqqxWAcByW24fqrp8LHbJqfEiCKXj17xkLj3exzj",
  "key32": "4cEht35Pic316HeSkG1Ptw3udKdqqJSqtiGnhUBCXxvk21UGLP7tCsKfMBbCH8EAz5893cKEA3ZrjtKQuw9AGTcg",
  "key33": "4Vszh9quAM2ipg2DomKqWXLkZNPP64mkhZByZ1c4XwnP3UQFGtcWyAAvEU1gsdeFiqFpAGzHuPKBweELFVkkqNUj",
  "key34": "622DFb1HaJFj3m8GDS3CYYqtiwESJSnzeMxvjsZ56jbd6cFEpeMfgXE4xmSLaostNgZDPHPQPLpCm4eh4b5QPXoL",
  "key35": "36khpAeatwMq2m1QgAqSfFtSpLzyp6Zs5PyH9iEL5HtmtebAQ4fsHqwM4GpoAns9hjnEyq4w5XpU98abNL6S1Bnp",
  "key36": "5tKfa1M4Qf67f7Y4wbo3LdNuZMmcQn8cjRyvVVrBg13U66VccNoGXB5zDD2JmbWYm6F1JnB4sJHcunmXfvcrZBZH"
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
