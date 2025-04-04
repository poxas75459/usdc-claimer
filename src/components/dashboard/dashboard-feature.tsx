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
    "3LeWtWeaFEKHjBMVABpWk7e87B6i3TkkdkFwbaNgiqykfQTZsNwT2pCevWPUfdz3FnZfYCWJt2tLrGz4bybqadWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pP1QmBsh99gbxaHXwwzBW71Tic7Qhs6eraJfraWpffETgHT4ghWRftYBT7uD7qpFAbdhromSTJNsNChnNcGtBQW",
  "key1": "2UaoCYkj7X9FDem9UGeJUrQPfEYdGpMt5fzHuTC4UXKTwgBdo9rvpHXrM7i2tH733pouDfnsRnvyfHTAa617Qcdx",
  "key2": "XNzmMERxD6opw3H92PXT15YM792v4wRBni7B7DbB5YnCV6967H7v6RSGUgpWpAuc2U1tVLkU5XHCtxBJDWc9STB",
  "key3": "4VzBUrCGUe8NRvw36YE99j1soM5CXtySfSaZQd5DESRpWCfTDAnWsKXPtgncyFkfxFmAhZXqPo9RYGztEVY4hRSj",
  "key4": "CyD68GmitFg17K1wnxtjSEGRGADdBwBJYQTQVmdBP3cRaUB1tusGb32ABCrzmft8SxDr5N3fXky5FeCMzMe9KAC",
  "key5": "59czWPJmo2rjVsYLrUygCMkGYRvBRPFcEzmV7qC968BmJDkLFDHcU4kS6bNRfEZymcCo1KhzrVe6utoa9mtvF8v3",
  "key6": "5avNxXVq383GG8tUQ1SBYdusR8tuf1fui8khJuML7gLpbMHBHcjsz27WJqewouxkmBHzFg9tTZhkuffJhTPfHLMG",
  "key7": "VAZ8Jfm6UWjBLU4HrvNqGG7yGKcRsdMsEtz7RZGu2E8qiNyZQag9YXK9Wjcdww3PjUSuXX6SzPyJyrYYTEFMyWP",
  "key8": "4vxC1wTWAesnWkQcZoJNmkChPeZCXP6JyRkBjF4jaerv47Xc1X3HqZQrY5TziUdcRxErbmt3khLZmfjHgE88hzPT",
  "key9": "3VMrbXhyBGbk6GdECsmdcxWPeUCVGZvMR8SohW2dgvfc6bojFvfG7eGnAsAuvsGfdVJKGP8ptBg2g2Up1MVtUYM3",
  "key10": "2oZ9dKrX3pn5bow959tEWmghQtAhK2rFdTGSXUZf4Bjzxk3hxAjvvjVC8rkar7NAfkFA9eAQAvQwtXEkVvkX6k3A",
  "key11": "3v4DEmoT7QKTtxJSvHHKy8fvftRCAPYnNFe1gCxHJmjiKdTM9cVVEjBKVw2bnTkoTXTLqTHRSbxy25QUX6i6mf1H",
  "key12": "61RWE73qESe7L3GmdD91LVyZKT5GRFcKNwg3KdU6apPExPPP1XyXyx2ePUS6iDryB29785pwoK25YgosdEnTzgJL",
  "key13": "3dpfb21kf6KCGTHkeeHVQdDHd9PbCQLdeqfTb68XW8RNnGFknBkwBRsc4gEtoMU7WNwEj3Xwbcttg96yNvjvBSZM",
  "key14": "2CNs5yXBWbaBLAXYmPFADaAjxQGMaQ9xttPodaiQbDZXvtYXThGcybnx37y1aj8Hruvb8M618bz2kjjdFiXRxZek",
  "key15": "3GFJutGHPi7uquDNPcFkFZnuahSHMwRrHijsUNZAZXAfvvnDdufUeHydcn4fq5gR6X6GwkcybcqjX8nPK3pvfDJM",
  "key16": "CLpD4GKdcowSxZyuS3XoQE2feUEGmNgD4EKhH6m3MPv3LGb1E28EWr5GrP1V32HKN1YDREYQw3i6Mrpd4cwicte",
  "key17": "2xuv85eyc79yVaqAqjhHfMVP5gTsRq5XJcs6Jzvtaa8D56KtZvyTMwSWEybMaxrksK6fD5m7UurbU1ULnBXKTkny",
  "key18": "4vRi2yAYD2oyGr1udEKv3294dqHRJragvVeobABLipCBZbNpXfFGNzgjewDwRqxSvY2WtkYkQa9zxngY1LP1jyS9",
  "key19": "63bVDEJmxBbMaiTwQuR2RsYJPLqS6wShSxAM65Dtpkueu1pjURrMkHJhFc5N5V7kDPUR1844dfYvSrB7e6ebabVT",
  "key20": "4u9LZi5CGXvmvxqkCPEhNWRxJVspaauiMjngks48taYx9jwugY7Zi6GWjEarajChZcXM8QRkewWEAaZ7qaojTixL",
  "key21": "67k2cGUddAZQkKS4sKCZkdZUaEoMKJsxH3WhbXDVf3ncdaFGtPrCEwcNwc3rthLvKUSkD62C9BXVsfn8MVtACaMQ",
  "key22": "4fQYkNGPN344f8HANnwK1WfnzbSk743cs5jKCdSX1ShwY4pZ5jJNApEcao1zUKkR62p7JPNeyV5fZZh2avdbzyHB",
  "key23": "5sDcDNGpfYB5AaxWkbPLuZ58eZaPCT8Aq1rgttbHJi6yup6KZW5nH1ZYVBWZZE5rutmS4YUJXkpnNMNGKbw786Q4",
  "key24": "NJw6eVf7aWxJSvhaYBWhABULAw8zfTeGT5CWu32N1ChFFrxpKwUpwUPDDyM4KYsXSdXHo9w3SgX1ZpXWZJuU3QU",
  "key25": "2DpHbEZTDuW32qffHGodCsBGwdwGv1GzbLnLKfFF4Ta6qXwBYxgWJ5aLj5RVQdY12e2U8ymJBXXdrBzgpxb3AwE3",
  "key26": "4gUPPvGXKwq3S53ygtVEtrrLth7na4o89PhGpdxfPcsqjFumfaSNC6WXoFxu2b8bKHzUdULAjHVaPfrMtUKt9CDB",
  "key27": "4SXePNFeakYErPecq6VvpAXyuD9SDVnVNvXnc53gH3fV2ooFCxw8eTDXyYbeahASxAcvGkKULFvdMPfcnrVC84Qt",
  "key28": "5EM6FxK2kNoPfuuT8r9HtxUgFLNPcRG6EbDtnLacNH78LQq2peXRPzdX9ZuwZqT9hDpw7xdzQZ8Tqr2yJK6F6rRY",
  "key29": "5UePwjh4NWADjenLKZP2gR3bcfARLEMrPbHdEogT7xST98hCwuhgmCrN7CSZXXcpSTZEKWWAghrJxXm9b5vGtnrw",
  "key30": "5z3BWdnzkNSTkN4CFaMA4XiPQdwXwD7VP4C37Ee1VmzxsDJEGVnCpNM3eFpGfqfnS8f6WbvMrnwnoAp7GmtQ336J",
  "key31": "2822Y8ngiiYJsFMtck6eQDGhvY95vYXsBpP74fydu9kWz3Y1RPvHib4FxzbYETKrjfjD6cPQkXba7kBA4qhDZMbH",
  "key32": "3yiLNynTC19u5Yt47q6wd9xLKUPxdqvyUK3oWrrbRKsJcaw8Rc1uJJxmpUTVVjk1EYa3URRuyR5nziLrpxYP9jLu",
  "key33": "gYFbK9KzT4CvCzeaCMcG2gLZjL9TexjqnUjm9eqHPNezPaS5VwzL9dGEDG5jjty1dDhDPZWnEhgejgrirdqvWYX",
  "key34": "ANJ5fWEj6zChJt63Stu9fpkdoBbgCB3RmyD3PrCjMKdHqhf3TkoEZW6EqCna4NjUYoAD1cprBxF6D5epxhHEMGf",
  "key35": "4iXMLWiKWCbX5V473kwqQ4Pnk41hjcMJ4NbyGrXjBddmX51BYGAS9gLajJpR2smcoHq4RApWEGckXpcSg7TeinUN",
  "key36": "5n13VTq5nttqwjjYnBpwK9v3w86mnC82ienB429ka4wj6ArNLeX61Lu1osvcb7awAQdZ1uhLXvZckWN6ozK7YGji",
  "key37": "2vyvJNpHvFMvmbzZcpDY9AAYJXUjr83A81oEQzktQL1FngtomptJVwR5cZrHXNw7dJfkv5MprsgZLs6PnReai46u",
  "key38": "24Wy49PPZyx66UMpjU8qK5CgstAy2pf8pELSyx3yLtLHi8GsnjM2FGhpMp5znZ5przV9TvQvNjoSwtqXPgLQfLyz"
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
