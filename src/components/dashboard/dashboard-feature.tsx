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
    "5SFkjrrpxg77HjT6qUnW34SkX2C1eb9yMjjxEc8xNndHDXBNYJaP2SUgt4gmQhXWgZMnMgJgQuLddDc5MoHbsRQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Boj63daPdNMQHoGFvu7Qk3Do1V1ft4vh4Q93x1HsfWP9HvAsFdvyBSPh7TyhDUzvKmGbZwbmrfimANDY6Sg7v29",
  "key1": "4fGqNsYpSHDf6o2ayT1LwtGrJdXoADAKhNgmNN4LSvJikghmH3Em7fF5LMXTsXejnWQxVeDgXkBt97USttAxdnT5",
  "key2": "5HBhbNbNBiUsD6KgqMJo9oJKKC69TUtu3L4qPrCiSRifZuWxfxUkLNPkph7FfhARkGxNaPvpmTo8QBouot52ncmQ",
  "key3": "34F3uveQGtWZpeVM2d2xPLK4MRXJZZNoUE78NmUeLQyUdoXfygwMh6MUt4feB9G7oNXd8wZRd1KfXkhtXucwThhw",
  "key4": "4JfjuT6xiE9Q6Ze73g454FwHt78GRteZNiMoEnDakffZJqULdsVi3SQZ3CpYL8sghwc263bqXujgMuuQKUMqCAt1",
  "key5": "4beCYDYjEhDX5qnnKpEdfqnyAkhrB8jTU1iYvfZh5t2cXyUVgeNjWD7UnkBTNzP1PvNYqCRmeJEZqXbFXJ9XkRPn",
  "key6": "2wjjiZi6jZ2gAwyP1rnFdtYJ5Jb1UyBhnVXGoZAZC1zTQuDPnqA9p9AqjtLARBHwUPBSVXa1MLRiQtYcQ71YNS7Q",
  "key7": "ZzWXgneHPWbJPc8Tt23nvE3M4QsKMMfF1oKLRk72QibbMRN7dz4W1d6BkTUuiB49zpM4r5L8RvY5uPZuhioLuRe",
  "key8": "LN5zBfhoBw2oEhyPQxH9RwiAXzfZvkQSxSpLgjvFxsrfbfSX3yKzk5XHHCHhas6V4GdsKhh55v3nwUF4knr5QLX",
  "key9": "4GdC5tVLQ6BjwkSpaSjQuy4yajjLKVBKWgSfoigsoDZFsGrU1pw8yqUJhv5cdu2RL4RomhzKvrpkmSBRTm9Xx6KK",
  "key10": "4imC31JRtFJfDLapDKY2R4fFWpxsJWtTDp266MjMTwpfCfRfvJ1nCWfbwRRfBZ4qNR7MNWvTCAvb7J5GfgsAz4UL",
  "key11": "2MjXShsPXMEA6HTfaxCkzfthnec1PEjSdgNJQu8Qj2YPkbk2vgDbsExj2EMPbgsJkUCzdiw11VAcoXAZVDG5ivLa",
  "key12": "3zKHqMCwvYRXfyq4gkg36kjYAet692n8oxr7SHdSk9hTGY4DtprLbHxe2pynx1M3YQg7FFkybJckmzDHJdp8CmEq",
  "key13": "M9cputHhjXHyiUqPfkNMbvMFpohYuWTGoVmf9iEQziAeuoHvdeE9Ht24TwfFfinM6AFspNZMkrCVjvdndTwVZRY",
  "key14": "DhW3SaKAv7PoUw9TYZnCpyddHK7Teq5wNTCMTVqbnUAFBxD7PWX7xwfmz7xZsJxFdjJfk8fdeZA73DKyEsDkK1F",
  "key15": "4gxL7VwGCDiMWrvu5UXw7EMWiwFtSgnRopDvGW2LiX36zfhYWZeW3RadL3EY19gypisyNLzQyHGRgkvyZWZ5DMQG",
  "key16": "65Yr6cTYXjiaikEKbjKqwQPPUGDBSfh9ePv73n7M5e7ef8ZQWhwSTn2o9ShsCTYLrTRiAFx5vZV44akKXEJWrMWR",
  "key17": "5Upgmqz42YktUJdAoDX4VkshTxxvjxmZndFFU4ESqHJxeU7Py7wMDg8JvAnhwSZBDYYzpze3FQzDunJVxg4JmaCL",
  "key18": "JRSss7EPpzsDEa6yPFPi4vZ3SisDE4xiRtd5L3JtpHoC5B2oTVWf6gj6xKnqecwMbVokRsYhnxtMtvKsssCd1R9",
  "key19": "dDB7KYcUdqKMKRHXyA8ymDAaD3pvEv3ifpr4phebhmLSgkqGxjvmXL3xNotrEUH5atH6ofaMZweHZRzCHyxtJWS",
  "key20": "3xTM2QvqrtxRC7i1qFknhp8AmTdffL8bv1ASazv8AtPRHqkNaGZSSJ8M9fjLMju7xhHWwAyeqReh1q6UA16ruz9r",
  "key21": "4XGAVLxobCk6FKKPJisuQUjJncUZgu3hkQXyGGVurHx4Xw2R3wuVB7FrFTHGGnbYzgwZ6qy6dFVQbBKc5TpooLEE",
  "key22": "5QhBvGPBwNJ9ToQumrpQdJT1RPoFCaYrwDFAmcDKv38Ajx1M9Sh1psREutNvG51zgBfkmHfeuDo5VPf2PoMe81jR",
  "key23": "5ck3mbgCJkd554srpsgigjGwUSVvfdHtX35PgRpsuACHjD5q8QaWCz8kYpsW58N5TNRZywnQ5K2eGBUEs9XBNALk",
  "key24": "46W9VcBwDys25gMfACd5XfssGRXXo1LdSczW3CaZHRPFsCEUVAyJvX4JYDojmFANvfgaQNu7zLMfehHgNWQTrVF5",
  "key25": "5aig9FTY3KRxhWuBRqMLTVun8roL5bGMtEw6eueX8SJEvs1PCbQoC9jbWMnCQbnhxktuHjiqoFePRHcNymYtm7MN",
  "key26": "2gfUQDkGgZuJ5iqWr8vCPVkyMh1N9hqVgX3CLrJfJmCmBeDf572NVB6QPhbpfhhLHU619yYMUuNYPVfdnS685aHX",
  "key27": "3d3a3SmC8vmgQAB2XrYwYkLQCCCytv9erErrDJj6kUsZiJhzf5CvTJSdz4Aw1RrwYgbBTo6tRJ3UrQHpQ6SE2oZN",
  "key28": "3LTrkqZvQ7Se4PayHd4bHL7WPBe6zT6GwjLhVpRBrFSWh6NSMq9nnpbRkkGXwLEedVs61QtRy3UR9fKYXpVxhqWy",
  "key29": "5iqMNAGq2mFCY9yXErxFV8v1UNGzczCTkHJtw1NUDBVZwnXnWf3P1oVFjctynJdyxpTvaWRqU5piGbPdZuzxvn3V",
  "key30": "5sFAcQVyCR49W8eRYgFxRpMNnLuLDWr8RjzxH2NweBEWmDeR6AMe2VaL4SsvmE7ucdJKPMrEBEKrrHE4mjDwerr5",
  "key31": "5xGHu6g58o1qMpvUCCvKYunwhtnEbqmHDV2uDeBtRymFPoKrRHtoTJ9QLD9fuvJnTrxQ17jF7ZMkKkb9mcagm2GK"
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
