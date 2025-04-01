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
    "aaLxSW4qXNXKyq4nAd28KH3kF4Y3V2ZrRftCAaPe6gcRapi9qByX5t5gokAR8mPfTof6FfD3dm41KquvbD6ydwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RdtWHKYjXmHbvfu5UdPAQcfaD76g2dDqa413h5jMX1CW5gXw2q5gwGHjh8MQ1Ht9jWvRccjF8tEZm7BkGo8mmmP",
  "key1": "yu4Ft9kuDiN6zqUJ7sMXVhRugbzK79xN5jcH2PD1vreHg82t8yV9are987xRaQ2n2JridP2R7ZhebQguxo8VRCM",
  "key2": "3cAPW6q6trabqP42GzSLabCdyV5NRxsdbXZQ1UhbnL3TiDh29tKcESatUDkGg1htfaqVB8qJgGA6YPUvky9bm7kd",
  "key3": "3tG9EKXVQpnJvi9Bkwi3SvQtJiXvWNuyjLN4wZGsTXwj1FywwLqPGtgMbkNUJBn5ssANY68y2oHTUF59qXmgVB47",
  "key4": "imK2PBj15akpKhPUGtYegSr7A98U7oqWiyVPDmgNLdCHJr3EppSXLAmF4tJwVsvN2BrZHQ3vQ5nVVnDNgR2crxV",
  "key5": "5YedZNvu61mjpsjCd371j7H8E3C4Y8h7XtCfsbcxXKR8dhBXAgmzdkXoc7CAiS9hX12jbXzZnNqDHM2PaQq9afuw",
  "key6": "4yKbysNuyKk5cN9eQQiW6FH5bg1JqJHBQNaXtTr2tUavVqT5uAcAFqC1WN3iB2ZNiFeCWJvMiCXzKKD4GjZsKxDe",
  "key7": "MstGUcXQWubcZCYca2jPkjsTDnHYMT9Hj44BmJeoNmLPtCPX6Xo591jNXhkUDEeqi9TMe6Hzj5pDqYyWAJ4npAi",
  "key8": "2YQvmn84DbJpU2oyMZRftt9sLDpWJ7GR1E7oHLEuyiNXPG66hb2rEtPUhcTFQt5RBjw7bgGWxA1G75rDbELrE6T6",
  "key9": "5y8Ev66vgXde7XfeXazbuBERAzSXyTr5LsXtpXsEmRU57GxaVtr55gVUjCJPxkL5AHwPE9rR3VzFexCNo41HcivK",
  "key10": "3wse8QKVqw1cW5gejk82KDweXB2fhF4htGiWfKUG8TJiyEe5yx51GcBPuGZhinM6ZKtcP8zXuRf8nCtq36FHvgk6",
  "key11": "iox1fxBpddeC7MCunrv5pjkK8b6zib8Jfr1fKmLP3xF9QFHU8WvEc9AQaHoQ2PZu3dYDnbocoiG5B524ShXhkxT",
  "key12": "9XRvjatXekP8DUk6SuDbS79XMq411YfwsGPQibG6nJLSDw9ajydfRX6RiPc1sdjyHaCDoLBVyhAx93nzdsfzp7u",
  "key13": "3Ae1MufpubtKeHWvsnx6QTSx5gStHrmRaJRqYm8cz1Zw7Q6fVkfDFa753jMLJFWmLaD6sLrR89vjmcy4s2fkafhK",
  "key14": "NvPjU6vcTWqoz6APszPQjF9AzWqY5hm4ceu51f7R7pwK6uxf75v9CDKuu3bU35F9nhiNRKL4QgWNY1rtppHGKPm",
  "key15": "4NkoAw4Zrsds1Ub3PQndknKpYJDPB4jQpnH2rNySBvhGLwx41XuqrUWiMm5zAasZmNr3Qb6GV93CfY1YdVBHJfEF",
  "key16": "438NVKS9y1iKJZBdvosb1btDwTZRno1BeKE81unPcdN5ZTCmNbkUN81npzaUAbv6Ey1qwqDxEcpEFoopMUDWY9rp",
  "key17": "VMioE7hE7sCaTDwgg6gnnetQSU77DDZdGiK5iovtyzJZFzns8qEA8VJiJqQtBCNLpsB8fMeuogUWsy4U8qk8YTf",
  "key18": "7Afx2wURqYaBQoGtrHtoTcpqLLsUKHHSJppDL1ihyfM4tLHLsbzMZ5jxNX62NHMLwUuA445z6V9pRU5p5twpdbv",
  "key19": "xzrmh1ffrsuZRsb8nXSXabo2HFzrDvZrS7m2vXZkr1xccv6BBJSXEkP36HcXnVTyeN542nyZN6ranfiJ6MXj43q",
  "key20": "2ujkwsiQ69xCXM9LSQvqLUX6ZVXrXc1shPMmSKmviyQDS8hFQzvQk2EwCgYEJ2q3XJmozawLqW2qPzZ8UhqAmEvM",
  "key21": "5jWqhGqnUdxTHHZabyMXqrGuQCkHBGdedtufJVcHu5DtCdZh8tmc6DJntj1MA4WdfyPgnEaMiCVSzBEvrqzw4Ciw",
  "key22": "2XS37Mz5UQrLQZSnHV6vJu9zpDMKphVU2vokcqnGXtw4kc9HE89P215dwgo85VcVC5kU2eg1DrUUvCAsBtetpNoq",
  "key23": "2VqGx8vavW6TaLKe5cq2NjhfQZ5CXyXbBCiqCPnc3YoffzqHDUCFoVw8bghk5pLHSy4TaAZbEQ6bdJG9AEBQ4XH9",
  "key24": "WutNDgNExqrjPi7hQcHPwH796gjMtLTHtCQthRxR6q1NQScERkyfnjAGkefPfnk6aN1HLg4NrroSHbqxUUgVvom",
  "key25": "hWPGsCTxyk8dTV9MWTASXj2vfubyJB79Wj9wUQPZN3KH5XCygsoKVE615qgrdWCrN2mihCrLB2Brqwrxpfe1sRT",
  "key26": "5p9NgKYEsRQ1xacASfcfksEJWxT2UEqRpMyJ6CpQqTGTrMnMKZqxrVh4ppJGgAvqzQPaKp2mCo36rTz5ZZSYYpyn",
  "key27": "3CwBCRws7JAYps5KaccYEYWhMQgHQAWwSGy1zEtWESfm5bnsaCLEG91fpqw727HX5PMkACHpzMUXqoKGEohWnJau",
  "key28": "262ixv9mc6BvyCHVPHdYJJL3ECjFdxQoBxFRdSDei9qRnNseKwxwjLwkvy3U4ZXXX9cVj3szBBSTJGKWEE6rRPEW",
  "key29": "23urzvtmVddqCFqaNjRUVGcmMXvkVKe1UKiPdYarbF1kFSPWTD11pzm6sCCCiTyPgRGHYW4UJGq4XbmWmobJcQba",
  "key30": "67dqQbGkn1ZHXHTCNsbozp3b1sVUePbLX9QH9bDKzwWHSdaxRzud89sLmMir2MAxZ14GyCzSeCfxx8F3qEKbFRnu",
  "key31": "2gTE2j2EW4aTmVSMpZ4XBtP3ZibJ5G7obcahxghCqCRpRegBrDX4aMWoqdnL6ZDsxmCN3M7LAt8Xc9MYKaUkZSz7",
  "key32": "BYYFf7QbXYYPDDsHA8NRGtQbppUbZVqS9tUVfc94zLFcoXJeLZVf6rQgJUUiFi47iE64tipUJWYXcqNtcZav3AN",
  "key33": "2cyy8Y6rgkJRk3LujEpJweSZxub992nCpM6wK3HeAUdXfToxrvG2g9V7pbWuT8q7jEzAYpyV5osFUfYBqBMiDtSo",
  "key34": "128VbezqH5LDmmvZanmzczvUZwvsjgM4neovYdkhMEak3NxLSGnNvKFDnDN7T24cNoyBb4HpGNZo1e4cGmot1eWJ",
  "key35": "ywNibD2u95KKnHCoJgYuMfs8iLL6WsDBMBQNpq6YKPDHgEJ8Hn8dXoJ4L1G4seTrdg2vV1GEu2PEUxyovtnPdns",
  "key36": "5NdUPm8paC4tGqmYYCheGGHvEdcqFmxg3hMzR23E6SQZkZzrVpMK39Zryk6ywD47aHc85pWzjZQYcmmWS7S3rfbb",
  "key37": "j56aZUfoGpzB9K6xfffCdEs3mLTFJkdyt1hucfR1nMW98NM38WVkbUHGPHQjYSUoQ4BFmsS25YToE17U3C37kh5"
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
