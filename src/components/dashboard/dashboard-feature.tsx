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
    "3ijtMy2tYR2gA6yRhD3J49qAiTYnF37Yp8qjpKtZ3XRFXsUEiE4yPMoW8eV3S8JVUkMsLkkm23n4SRhf5hjka3Us"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4skMR5vKPw6RdAtBqXXFVJJyhGR74xFRGUqsByZ6qomjaYyx2JS9cY9GijfLYzkZadoWPAnbkLXrAhc12VQncNXd",
  "key1": "2VJM8dyrWVqjMW1CAAFzvtD3nixGQ1wbpif6eg8EmMevh4RCL1YsG2da1kaZYFaBfgqkc5bBntavYcV5SnEQRnqU",
  "key2": "62o6SEB3JSYYtbF4AJnFUjpQfnp143ZRQAyxScpCLV8p73iUnBE671tHfwhHcL18LpkkonqLKeUvS864GMHwWPXp",
  "key3": "2vYYgHzFYSkwcgtTJfTXbUjmY3R53ZfsiWXgBX6RDpvSz3AQySFfsW99W2AAAqiteaoQncCtdaPAVX66sGjuJJbr",
  "key4": "CjVDZfehQMDUa9P27YcuefGSuqfLvygcZmovphTZmcSpqazrtru3iEUg587XJstuHASQaPvJvqWPiiFZNRefs5Q",
  "key5": "4DtWoHfTRbnt7vc1pDMvCzoQN5cX1YorBLE1iuq6HTRVwT5eEHSmM2vCBgkmAM9Z83uKbJv4hBVDsYXddFwHsVDb",
  "key6": "4mTjfs8A3uRyryAA2KWRTnR1tJZ6bRq3QXADrZ3qqyRdrQ5EUoZvcbRWEgQaNgUfLbV2We5RBSG1R4fjk6SmsjCc",
  "key7": "f6nU6uhS5AYq3jgn3BdSsXkXq1HKBA6VqTTZ2GzLhJzT3DGqADgYyJ3NSbunrg2Q8vbm34hGRThWaa6zNh78D8w",
  "key8": "45gqAa1EvrvermcBDYiaqnJCtcCxiadMsPhE8LBxz6wW159ttokYPngGW6HSswbvxXNgQX9ck3cRG8LwAihDFEck",
  "key9": "upz6bZvuT1L32w6yCmWFaYiveC12YWD1c8DUCFFuPfXXK57YES5NUGyvbgWgSKksySQu8EhnirCXXgu4gnW8w1p",
  "key10": "4SMPSm174NphrZqU3Z5Zj1N3EqhCESq2gfDmQ5o1R4zuSX1mubkW3t81ZV8HvXwMjbp3KjRvvwm5xF3zmMa7AY7x",
  "key11": "3yPsJmB6Xf65R8Req1LVr7qzY1jkXhmYvqXRcPArHMbvtVWTjcDJm1PqC41A2MvQAK5UP6MyVRKcihKakuaQVxu6",
  "key12": "48GR3WHFybygvnBSZ1qS4Aob6Boj9Ksjud6EBekU1GTnMzb77b5wasQBs2f1FKgazifc24xEiZogg6syEfE6jTvc",
  "key13": "33DwjJuyUNCC9haoykZwv8SUPxQx7uDNVGv1evsckzRNgs6nRkuaeiKxvmrbLCtdduaCDFfjXe1tnnP1NY8aPyVu",
  "key14": "2eA7XkZye4Ma4wAQM8aUeYJAoQiw7C78ZWXRdZ4jAi3C7SsSnsMLgaxwsT9U5gVpr9BJqXVuGA1kMVWxDWwGPrKd",
  "key15": "55NCQyDPvY6bdGRTMkSy6fqJWDgTqJtUCpWc9eCRDgVqewAebaEwaJ3aJDKHvqdiCnYoVbMbLr4ZSBGe9m4nojSe",
  "key16": "4JnTEWjdEHBo7o2vK2bDHiiz8EJPhZ2GgBQKYipPpRW8XWkfmekD3ra2C1A88HYra6oZCxPWL3MtA2HFBxjZR9te",
  "key17": "3D7fdDcFjRqhx8UGQ7ifBCa7aGCwEmeZWbdvxm2FS5WaTBAfoTxcZZrETpqj2DX2gE9ocZynm2Uoixnd2YbqPskv",
  "key18": "5T7Q9Mw9evTwkEfM6jVwVAd4curWfx8LZoKi28ukRfuDumeQLtKHhtbevX858akdtotK2C3mphsYif7CwsVorFkn",
  "key19": "2PfUPm5E6bQXXd1odEvyMz7u4GvNqK2DJ2BKPeL4ma86etVDmpp8cb8eCPArb4MiZxw1hKcPJaWCdMoWc3DFGQXh",
  "key20": "2WZ9AFSTRhYsDr38AQcEaGURuhfNdEZ8aVAiaoQK8cGsa1K4sr5hGcJTFXPG8HJfvgMyaqxpeK3JLNTvgHaUMsAN",
  "key21": "4BmDpz1pwhuGg7Hvg4zSgNAuoXTbPe1RMq5H5x2cuFvKzupPHNZXiHbQfBW3epkE51R1itF5ve3a8PtK1ER7p9ox",
  "key22": "489Vad67zp6L2j57fzPo17irrWKzDMu4JGrNsdexn5jXeDBQ7NnJr1AVVu891ZmmpdwmpHvRD7idkY4moywGMdt8",
  "key23": "L6KUjGi7wBYZynTRQW1hYQq95oD23sG8sg4WY6mZWB6KH4G9G8PsD6NJLXromayMnKz1A7kGQHpo9PAVGJ3eAEH",
  "key24": "gacGRnqjpsBiV1Pzh15U5Z1dQp462TjyShtngFErGxYdL1KmGMirpUWuNNQVgrUS8FqUusFzscurWD8i5krMwMn",
  "key25": "3PC2f9hRamnq3JRxsUFg5qx6tUFUNhNdtcqHBrXUU3F7BcqnYtYSPENrVGhn7XDXYAK1rzg3rQbE3WD6fZJUqEDk",
  "key26": "5cK3qwU9kYbM3A9JLpvzvWyA77B5Dc9sBQZMkniddfWMHKoKrPcRUWdnTkdGBmHqwwAVXfwpxLWBqjR6ZdsoNNhX",
  "key27": "3JyLQEVAryVhE2czCnRbLjGgrU1fzFLgohmioc6nfgGSrB8j4q7hKRWBqw6D2Pk8gY43qCpnvGGehA5rhS3pwmg7",
  "key28": "sHrbWfvcXv5ktiS7TVWEJnMzHzZHJiwk47jD2DA4uS7G6NJRit5motjLUCZCLBfjdE6HQXMoVYfcB5UCzLUE58d",
  "key29": "4NjWhjUnyZHrYxTypWaK8psvr35t9vKt4CYfNi4Age7vLPX6LD5QGdj6LQF2F5FjrBfpQfoMmduxV3fDyCJriMqj",
  "key30": "3qpNqtcQtEjhpD2buExpfwwenJSJZstVauiRcBXnbDb1K7WMgDxftP115joSxzXyreC5aEdFw2kSnTJobZWAdKNV",
  "key31": "3DKoGU6AaeabfemSstVy8Ku3m4mTpmuzm29MxDBLxtT2Kke83xjyF7tymoXWqRovfnG3oJiUqChyP7FqJZoFrrXE",
  "key32": "sjLhApWy9yAeWVSvhrRTyJyt6ssSogCHi6khjC8nZttRtUZQKRatJHyQXmEziFJUgBiFec5b5TuLyBp2bz69KM5",
  "key33": "3Tc2dv8JeUrYqZE6naeUXZ9tGkHF4seHt4kAeJsZXf5FGCwnA1iWtwp5EmefpBwt73psHdetBvq8eAiKfxF76uCJ",
  "key34": "hNSM9AbrHWe2SFJrLCLn3bGp9bajBszq5zQFpp3zQeuvYWJxuXQCvkvt3hHNiUpXypuneE12zbZPxfbwR6FUE3J",
  "key35": "4ewgGvjWZ9u23Wiu32vM8j8vgQoJFtsdoWzvgqDr5hP9nFkcKQxXaPkSmVfLZHNGQ67Sd6yuSeSeUcHmyDRP3DM",
  "key36": "5eZJqMzTbfDJSsU1yQ7N9MGSKBQRaBYMcWrR8wH7rVfS5oUYZH7SLWxjJYe9n8hHHUW7rxtekMHmXfFrWXkio3mf",
  "key37": "5yXhjLfYS7zjtnJidtYqJHD3xoXFM1tgSB8nrbGXA1C5441cUdoRjwjVR8MD1taMw5Sf1UwNH9jV22UbgDLcuPk6",
  "key38": "4wRNNfh3TUyeuepLSXi5SBA1MQaWpFUjG3kxGSdPcWzCFzu6NwGWztJKhR69wQgQMiUYLFoRwgTHYip9nasq2Lfw",
  "key39": "ps6BHnHe5SyYNWnMqFYZiZXxxwpvbZjdkEg19EfAFURtj5NpdnteL5xm36H51ME7GQV8qyzEigyitDWaPkkvWLS",
  "key40": "2ZTkZphXgfBupJsPgXkHitqWWSgu7AeQh4uwBuiKSprWChYK86bfjD4BD2pVfKTR8uhmgwHhL8zEBksoCp3xvpCK",
  "key41": "5kg9yjfFCPuwCgkZyL8A625ztXEuFWW5vrgbR6m1Jw79hPyag2TeAFL1nVkFYZkjEQSy9KUDYE4rk8GNK16kv4eB",
  "key42": "bPoB3qUvyCjWqaBbqzAVVxMGb51GYXVm7PL7PgyZQAedtpbbowAmrLeSAghem2N2HUqW8t7AfLxA2rCsRSK1akU",
  "key43": "3KGmvmDWuK1LmWMrDpnk7sJ6PvStCLZaCh7JZyZEdH7oaRiiv2pEZbs53F658XnCp4RaPw64LhbeD2rZ61Vp9Niv",
  "key44": "3TFETdd2oNXmDdNkCYmXh61dqoxe8FdQgDDGnS9KZqtcxgoVsw5hMDTo3aCnGesnjM3SrUTs1qbrjtH9xbJQA3hU",
  "key45": "41rnbHkNos8dpgPkdiMzmGNZN9G21m1J8Mmqj7BEzqggz78ARMhHr7pwRY9KyLyFtGvN6R7Y345nQu4XNsrhs5MR",
  "key46": "2PQPBB7X9tTas6KDU2cidtxAqYcM5YGi3XiuGjGbKC4vB3XWwvCkDuYjeFErpHoH9uDENAcr8SPpfuAzMbhXRYeS",
  "key47": "Zcow5T7Wc6t66sxotZddTLarNKZ4iVXjjvAM5jTVeSApCgNCsuy6nWcHUpYDYSDVRxud3mMxeh7TrmNqjLJkRzQ",
  "key48": "6245VWDsgPsG9A4nC8VuMzcj3b6WGHChhdn6jF95MabqCAaT6eaNfJnmG8DER3TzmTJgPg7ot8LrWajxqY1k7MrW",
  "key49": "2TLWmE5ZPTRzwn2s3ESf6cUXsfkmWeibJHLVo3nAowUY4LMh3rrfP8jFUaMEXbCL9hLiEcvTMY1PVxPC9EYbWKRj"
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
