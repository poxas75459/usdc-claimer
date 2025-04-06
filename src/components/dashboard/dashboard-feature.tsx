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
    "457dyh2snuVTdixw9AwfugPAwTxkj2BBB8K5BbVSsERiiATNmV5DKfziZMEb5Rh7Ky5kVyb5R84eLCgNLK55h3Fw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dr5xkVxJmhA54rJcf2A45vW38ef95a34dzSv6t5WbemSDZWnVq9Bq3Vc2ce6mZkKengbr9YZvFgGtaALAvSC632",
  "key1": "4cDGgQqWDpaY2Fr2Qe3c7mKQwR6kzmTfSoEj1stbXBURfqKmn5hqoasAxdy3xk7K422W9TNJdMCpAt9CynDUCKr6",
  "key2": "5GddXZvcafbiXfnJ71DHJqsGQYa3Wr8ipnz1RAFjGRtzJaC6jxVS75YpRGFCS6d9Zst76rsjsZ4xnQdTzUHMhkU6",
  "key3": "5ode8Dys8Jo9kxSENAQDcgs6facPVtc3kuwWiWhsVvySvuLK9K8PUWAJZT4J2FmfUF3V49UgwSxDGXBN9bc3d7db",
  "key4": "a7GJdmF3jHVJFscQPugGFc5EkogezTFrKZL1qyTTXFH5NzrZ9ByMTjVKN3mgWY94bPr964GjpZXYFNDrJoXGaXU",
  "key5": "K9Twi4QMv5DCp8FQQ5vYMq7AWnm3JJK7pWcyhw8JzSxADKezAQ7sjuYmfHmFhJVZLMoSfHU4yco5ouCoddVjSZM",
  "key6": "4VMG1fySxDGFsyhanmmCaUhHHyRD1jMK1Kc1oQgZogqWGJYxM4UjA15GZ6NEH8zSaGg99qRPKFFt616Ku4pAj5ex",
  "key7": "pEZKo3pxRLeVU935e9UZUKTDg2GudRFpEoYZaKuR9SYM19mwh7aFdCCiGXtxrrDn8V6GdrN2DvuKx56udQNgjuX",
  "key8": "3EE76viHzR539fd628z4uu67FQT9gVEPJdo9CwWgfq7E5zmerFTARcgSZz771NjngtJbXjWCgRtWQQUC6TRLzhJG",
  "key9": "3icozZ5mk8yB4XspXeZxAgas7kQsKUgoFxoWE8H75fY5bZkyWt2Sqkq4N6ffdmMEF9J37sTwdYpLRgEVrp8BWQSM",
  "key10": "5jdF18S4w1hcem43fM3DePNe1Vzvwsdd795CvMPALWNEZaBnzhouJZtsyJ1JwMJQqiQA3h5XF8X6uzgvNhmbpomi",
  "key11": "4DecWEf7KWkKjrA7uBBcU4cCh14Qfw2aMQXopdQ6KDJentxvZgDz52yh4ScEUSnfnyvXWBTFMmzp6xjEjWUcwz4A",
  "key12": "jsZ5Sghnca4yCvUwnbPBe5HmnSkzKp5TwgKuCqmrE3xEWFJQvq5r5JqxuYbUt1av2DErweAcEUNica8aA8GhG3Y",
  "key13": "2p5bCkiRAFqwcy1ytZ63SoULuPRRLMaH96ygGRWZ7otaUDnD3Zxd43WUK6QQsCtqJ3ESHbB1ns4sMu1CuPfGgY6u",
  "key14": "5dsNerHRfe8ccsFFhN7KA9SMtavpJtYbpmWjqSkHXJXzySNTNdu9pcmi4nwPQWgtiMqUm44h6Pa8J2uUosXeA5ft",
  "key15": "4gWNVDkpTGLeH71PRAaJzeox2zgXbBgbpPzqr794dz8Cz98aULq6NghkDea3svvooVGXkobqcBQkKb7cEtTRFXet",
  "key16": "57rbvQY5J6JNHfs7z7AbVHKVAa61NBeyKJK4DVRGeotovA5nMmk8w3bf8DwxZmisr7mUChR2yKQmnpXCuEgipbzE",
  "key17": "nkemurMaoWi8BB2FqK7yXL742dDEAjNwy2UoC3nQFkmHX89XPRcGGvrBq95z3MC3AfVywfWcR1bmhbCEVyt1xzN",
  "key18": "2q2Qyqo179eNziMGQ9tuMWq3QufooJgo1dSrcveot4w4x2CFE6iHB3xUr2e1bYeBRSeYTk1nCJtyaGThWD1f6m8v",
  "key19": "5nFoRLqEnp1GKdMdXxRvXDwEnj6pxUqvBTUSYYXLcKqZuEa2LHLsMkFCYhFv87F3PhGauw2eJFLiHzw9EtE54wsj",
  "key20": "5HJJFgCzYqxdMTEMMHwP3KEidqsVVz1gkgbAZWdXUuxv38QRPmJG12PRNzHTbBxPPigtssD63hE1YHJ9TjLrHqNA",
  "key21": "2N4XmXKMYmm4YwySZp7vhBoVBmQnBiCjqUdTYhAHoTUwrr68hSJYJrafUw9SxcgBpiAbbXDJJFXMvFWLAFsdmbLv",
  "key22": "6378tbrE3df7p5EE6HrM1f7hZ4cVQpMkZ44tm8Zr3qDEf8n1avsBaeH1RrnMYzgExDGfhEnewPA4iKrzGtzuSNYu",
  "key23": "38c85vv8S6HtinHiVWJgrFi8xH5hwxCYGbHRQPzG3GjgBu9djp1ou8qXFuzjKfA72Q5wcQdSGise2Pc4Fzd1vCgN",
  "key24": "2YBVjjCYvVw85ZmnxiNkeqmq4eE3sfEKFMTPxkgg6uffiHExXwSaE4SSxn5DEBDDV9MYsh26mt63Vmf4KRTxWGti",
  "key25": "2vjP5fJokirsVWLbgRs9EexzQjVSUtBK2t5jvbDUPpxdNsKKAhBbdnCTJmq48ofQHraL4BD4BtJUHhDk9xdXPkRa",
  "key26": "3MX1MchYrszpYMEaFMbXVYuuQuk9KFhjf3oVvQE2NAzHCxjrDdpHUAYzqwcFHnBB4BTsh5Q7d4mNZ13ecinYMvjy",
  "key27": "3BUZjFY3EbvdaUR3B8UKbgWnGVwSBedmRwTRMKfD8egP8KRYR2utv6EU2kL3rm1pmAxXyWc4fWRUazzwnTw3hAK",
  "key28": "34sfhe2GKM8RaUMn2HQDQMrEnD7HHLzpctsxq2zuHc2PoNWGy63ACkCCbcSa8JLh7zFiG7jAthrSVkL1et9o6wbR",
  "key29": "5J3LmC4vYWRxnZv9umQZeg7qRzpMMWnSSg15GA4ZHHhA3HiCjoWQDHB9zmaEQz8YSvHzVQHWtWHBzRWam5VVmGpR",
  "key30": "3R9HjyWcCFY1h6ZoeRCsWP11S57QLmDgiZyGxgt92pQTQxwJgsTNtXVb8dYTqeDbj9qXxatcPVK372RYsUrzkzJY"
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
