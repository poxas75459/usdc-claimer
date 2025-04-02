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
    "5aeBdh11jgB1yNxjuyimEQvBc6WdH1PqC4SyGnzYyQuq72Hy6draPv3qKbPjmwgAkR7ZeEPd1VJ26KX7t6uJnYr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VutGA2cpox3mv1Ni87dwUAwJcgdg3kYwBV4mxwww26E1HsQxPozFTu8WfLoYjLMVJpaMhqdfhWV4otm5YrGFNK1",
  "key1": "ZVWmnVJKdr1FbQ9ec3FaK6PwLCDfjQecuiMKZh5dgPsmMYe9Qsz22xH8m2efvpF3paeQYfn8h6yW8PTY9U6oFjM",
  "key2": "3U2xHzLCGvvpoWz3oAgiVZczHLX9K3yyUWF9supwQYY1x8pCp2uQEpbf1e2jc9gbRY4ccod2GNimmxHpzLHxfYVR",
  "key3": "2WvSBZgDqmgr7uQwiTpJovtNFvhHZW1N5o4pmRVatfEaWFWztvwZGzoCH9sot9rP6rsb2f3m8RnMKgDyEcPn6J55",
  "key4": "4gevyiXJL96pA3x7k8tcHgzaYwHquYkJ2G3JBJuWFa8hrs5jY7ws9xCEXSPYhnkytsSxVzqZcNrQJC5rr5W6mQcs",
  "key5": "3cMzaFGiU4BqVqeCdsdVQr7z1BkuhRQj5fQdCxdrvTb1TzdE8MxMNwsm1uQzNZJeDjfij5MQWJ5ZwqeKWZpp7B28",
  "key6": "5q8xpSxnMowYR2phJSKA65sdAtqSwPvTqJUu7hPQXcCPxaXRZbDWT83M7rS5H7hBmfztnEN6xip2DCxzfCdAHqB2",
  "key7": "5Has9rzXYB35gVTMj9o6ZncdY1AANGh5BU6X8e1oSoL75V5SDuzoDiYAyuJc1CXrGzNBzBV9vM34X4DvUbZFpS6N",
  "key8": "4JKmQz9rix9p3CHZe9q1ZyRBA6QXwsYWn5seMVYsVsnQQeYsQEENcrGUhb5gKMk5YUh6e3c8hXTBCcqaphYjAvHU",
  "key9": "2224sMhEDWJzSGd2LFH9qeCZSFnxSKwbDbhvkryj2ywQZeYxCDPhfo4BXMPpm1vUy7UTvGNrnoYEy3F3dgjVXGrs",
  "key10": "24n8cYVpF3MJAyBVjg5QRwHSGWQxk6sXLHHpFhwmEbPcGxDfe33FixYVv6ZKKvLaPhTHVyVsNGE8gHnreXEYCp3q",
  "key11": "3HQdNMDjdNNDEkyxceHg5D9TytMiuxJAXxH1PwSjRtimnF9rr1YFmRVqUymcEbudBgGtmRe4EoWmLMM5K3yjb99z",
  "key12": "UEbiXfb4WawwyVGYUBNfdc4zYdFH7TLkAjcXdymQqHvj8aXuwbNrxFPq8rL49fceyuCfayoXLF5or35pnCeKRcu",
  "key13": "5rprGzWQbgXnHRfK2whrEmUXTh7WEPcMchdsHG76gPErYyphkA5bY7eYs9GrTFvzTvQvejQXZNijZGo6hqCoWAXR",
  "key14": "54G7R5AhVEgRsLaBtaPeQekwV3FeH5uMtutK7mhRQhVLhApKXBZnBS8gxPNW9GGyWyWHQxjM4ZBkD9S11cDDg2D2",
  "key15": "vQMoygw5CaBetU1ksHzP9G17fCGPEX7RU9qMiutZAGa1j3HX7uQCnA45TGZY12Jh6Y7jea5AQnR9qEV24bTsNcM",
  "key16": "pnWdLZgetXYVCHBKarabbEUt8vyXWKPnBNz3UQPtTKMuzW3PtAFhaVAh4vz7HVDdFTrP2AwMKydUpWixbqVmZ1V",
  "key17": "2eYDzoJVg913RMRiWnJkVaSUSajt2iJbfUvHnLaP3sH9ro2QYz4NqGSoNpVyxdKMkuswQk55kimjLep4DSL6wLoW",
  "key18": "2BCtJp5g2kpv8FALd36c9dGLX6XDTkzrsARtvSoyYKnFWhdaQBKm12CQdwJTQavWE9nhGYuM186CLQWcfPwmFXgh",
  "key19": "4KKfnNTPea12W3EfVWBgMzvD4RUWhZ15fkhfYpgQoQaZ2S6wvwvTdsU7jrHvTkbbnE2ZioTeoVRJd7m2fJUBeKLw",
  "key20": "25MJTqafmVUKi6GkKGh8g1kXm1XL3qrzek1rMnuzXznmKSiKdEygErwgxvMktMiu7tZYWsugSHFnf2yKPJoPMaqm",
  "key21": "2KrBi3GC425rphnSDSbKo4VHp9BMY8uVFvYtqYfaDB4ZZcpv64muh1kenoDtYhYU9dkLPwks715Gn19vaQTHV7js",
  "key22": "4pNhmebHgyJ96HFrwf3DZk9c6TtLjd6DETU3RF9gVvnUzxyYWsgDhWaZKPXWRuVCwH17H63fsMsCMotbhSdZGDQM",
  "key23": "5gpv4wksVAbXn8Jx3c487DyYY9HjU9cToFdRugKitaGqjiGJsGm29MQdBZ3AvZNUXt5uSV6JHyjkoBBCB6onABzQ",
  "key24": "GmTnZBoiDLTRo6z82NhrcWH5vt7Hj4vnf3Q8biNJUHEhpbbYrVyDJeJoV6UuRomFBuQkxXSC4gDtKsACDcToXYb",
  "key25": "hhzUsQhgBGd5h3hkSAcCVyBVB8hEeynwAjZmUQ2AyJFXUD34p1zHdnD5PsVphPCGUBgKj1jxiBzuj7pmx9KeaM2",
  "key26": "5hLfRNqYQWWGDgfnUfFpxcz5SrSfWWu73Chmzp4eNW4nH9Qkof9N2yrnDEbdCEq3isTeGph5t4GeWMYUXrBmqaHU",
  "key27": "49HupzEzSuUzV4ox59m9uWvC7G2QRzqREAHJMNznfT5v2XYT1qEPpfVVqKTddXz4rj9VnAXX6BsCdSsu3SAYRLPa",
  "key28": "qjvAdVzZGSmx7c3ucyuMJYa3KxAvQP643KyUZDBrjKZLbG1Y3JRgQGhUANExFov3Q1gSXtF5cChDujr8dtqp7rT",
  "key29": "2eDsBAdDZgidEqVzEiPtMVTCpCJcNeTYxrJsfWxnNhFseUkh77p2tPntmvWQiyAeS5V8oYFRbrFLj2jFRPQJ7Cty",
  "key30": "5UB7oAM5oNjePKDyUBnirL9odm4hdLZRFoBZjD4w5dpXWZriW2127XrzKmQPiRWVE1wTN8zRDKmZMTiVSaKhVEpd",
  "key31": "53xnff7hZZxJH3ciZDrg3aAdX3pjr1EbUw3xjd94bAazqxFQPYL2LgBBqdrbN2BkY6xU4zKLWqzVEsszZVnDhGNk",
  "key32": "5t78n6ow6Db9xDAq78HiJzfFAL7mR6Eu5NWWZpn2bqHTp8BLTKZSgQoBhtUaKY4SsE8J9Q1xfwuQyicReyRiechb",
  "key33": "48QTmmwfX7YuQS3bTbFof9qpuuEv7AkYsVjTDzFwCFPC5LUXCqrWUDrcnd116yU7wKtTF4CQfuf3qqPzPRhnGW1X",
  "key34": "663DdHRxky6dWkK8ufENEQa1FPjqaRYdyqEuGvPxn2zXQu1223n7BZfKxskScyfraSAtnPhq7oeftBEkSQRnrkC",
  "key35": "5RYxApy6JqZPuwGr1FgNrvAFmiwLwAjmHwJfhHnwb7KDpkVmjd5LdzS5EYcamEVUS7tiUyw2TmdQ9PeMeADJufAi",
  "key36": "2jAL96VQMRBPEyySiUWsD55UPxqkR4uVitturfUvEUFcadGxWzUnp8t2uHbLBGh21KNaxvaW74BVFtisvZBNoBJb",
  "key37": "4JbCbwh4WDAsWoZuAfXe5LjvqWJHbSqxEFxxUCDTQDKAehJQstGyWpsuhftdYHCn2qCnf5cUKWRQMFrQpHFcz15n",
  "key38": "4d24j2MrrQq5UduKt2vPVz3B6kJoTfMHnkqFSZ3YuySY9tCAoUTEsC2zhsGmf6JVejv8uuWuPs8wt6ySCVxPKzHn",
  "key39": "4p44BPcscGnpxpjDPcFwZZCnSiKqwsiAsT9eQ4XGZ893ds5455cicT8UaoRcqHuyEdSoM5t2DRrxoKgovdSRAEcQ",
  "key40": "3VFLNRKQ1jqa6fh1nx23TkVm4ac8gSYh38QXx6WdmMawpthTAA8kWhvbzD3HVHmpR35LZUWZnA4nyfg3vL4ehSF6",
  "key41": "qqyXhDGhfe58AoUdq59DRDMfibKARtUH9czTzbiNqxk3huxBvwRxcL46d7BVFnsrvT7USHBShTSiW9rAZKP6FfP",
  "key42": "btigZh25CGu9fqo4RvWTrg87DuY6wiA4RsXCCVB4AXKvMdFVCktfVKLyQMVKQJdz9ipUxTr97172WBYV9ypaczY",
  "key43": "3WmnYx8iGAwjokX43nGKmcg6kdnCQeGifagn5Z8CTYZmbeMZzAZzzHJvriG4Fc51gN5GDxUUp8yqvht9zFgC5GBD",
  "key44": "256ZEvfXr6GWD9GoGtAyh5wmJPhCgBWWDh4oLA7dnWofY1rtV6ZA8aFqupFVRrkXe8TNJsUYutXJgsASFzHRi56u"
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
