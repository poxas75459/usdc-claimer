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
    "gMvuYiSYvfnkSB9vrK2SbkAixdVQFvB2Gj52qJysj6629iDmhnx8usfcq85nPTTTtntfw5NH3CDShS1moUaQUZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TXs2k3eKpCWpFD7AW4s8DfFj6mPsW1iJw6QPzCigbDVHuvgwrN7ReNF6PCvGamwxR3kcX9upPfBTDVHiL77gLUs",
  "key1": "2QgEhZq7osQuj1Nf4wKUH3bUBkJ1jhQcHrzBS6B3S4aCyeYW5QDQFrTm3XN987EzKhusDCupvepUDWSpgEuBcePs",
  "key2": "4XBZYaqhfypcj6i28VZ7TgJEKNfsG3JpwwtVNiWPv3gzwNt5w8DWgf39zoXC858WF8B2tuunfNNfmGq2DovvsjeT",
  "key3": "31NJVfwUEBbF19SSZScSD6xi2PxkWWwDknJaKvoZCJCwVwCpiVjzYRjzAkJLQCiL8nZBLAxkjfPwYhaRG8djKBYi",
  "key4": "38xuNrXzem3uUD4cXDqN6kjpbQMENCDS5ya7CBDvVveg96V8i8NhAqeEkUNfSBenk3rkRSFP36yDxa21rf53N2rr",
  "key5": "kB71TYjKi1o1nMHL2vP9tah9XH5JdU5LtSLSFy8ULg3iHTfCZqDSjVPF2jT7i1hjjzHMAcYv7CZeL67C8Mpj8UR",
  "key6": "4WUWsA8rSHru41oNTxqkuMxyfYBgmVq18K2oGxEBv56brg9sPwsSYH5GdkmEua2vLctbyCLyooXuUSARt5MnN5V4",
  "key7": "2x82CMqQh9Q4S9QtqYqKgzNSizaAW1xVxCQYf9TcTyFCvVvNyR43EdW1hTQ3GwYA1kkh5mCeWd3zPfraNg8iFroA",
  "key8": "2iMEqM5qBzEE1Wt6r8K4uGcNVrB3sT65c1ieYUmo6S1vNQ8MiB6jX15XfTqgUud7qZs8WEnvgpgkmurujWzxZg5k",
  "key9": "YTHWj5zQLy6WGZn5CcYUuoT5wXgpm1aJh5aY3wTtQZCXfcK3Zb2tX9mU9uALHD4bR9M18miXzsrhsiu4MVf1fJi",
  "key10": "hS4vm76MiwaL3uMuVqQJq3iKzcSjsseaY5i1eSYTCyiNQjzT87UYkfwKJHJjFzRnFSxhpr3Uo6zS9G29ATYnpKa",
  "key11": "3U8cYsN1ENAQwyXeddpCDTfneyku7KmGURPazSVBDVverpSAgJ3emkgvZDgKazaJjC5TqW7vnTayuFortC86EG5B",
  "key12": "2gQuTMuBA5T9vPMLjgqQQt8bST5zDbtZL8ZPXkvx32cMCEhDyQNwtzpM1ZM3YtNbPcDMUN6ijLcfXNXuahFK6Fur",
  "key13": "5vehA3n2Fosonn1tbx2hxfrnZVP8oY9kMMmxVtNP5bRLFaTnB335BUQwv2PAUyym7s7EgJ93MCoGWQw285rqVNyg",
  "key14": "55TkX7tXz4YWpAKMZEn785wJWZWm3WAknbdL7imRYmFapn9aiF5tJfueYqgzNiHCmrowfX3PGqjzjKS7tkZt72Xk",
  "key15": "62A6jerQTTgRPuK45MovtpbaXD6VHQnFbokidkqDtLQk6MUYEsAZx9TYahS36prfpiSPCnDp42ZX7ho8rYgxNTVc",
  "key16": "3ezbMLNFpD3fCRDVR8bjxp7vA2SaHn7toqphCYpXg3NxpCs8DsDgE4GavinJAfWykmNCy154p67BAkY6X7DxZNtv",
  "key17": "63TUBGVwawWogjbyvpNAY4Bn9seagavyzGhui7XYjDrymAmjSNu6RzRemRb2YTHM882VZzF6vvXSAA4s5eySqTYc",
  "key18": "jK46M6yZ68TdPo9Kv3eQkBVxkDraRaoAdegKvYgFn3VyXhjiS2LoxT861n6N6KYgK4CQrVDpzrZfdRAh2r4MJYE",
  "key19": "4JjWbHXE77CZF9RZZJ4S6zKsqAiQm6f52WKg2k47sF2e6amqALiG9U8uLZLjB4Hz6ctMsXYTVPhhcxL7e75jdkgq",
  "key20": "5KrTW3pWSKnXgy1p1v58PE95wkzHzZxV9YnH6hGcJxXwZjUMJi8cXzhGFPRfzD7MAx2wcD33nR98Naq7P65zkZyF",
  "key21": "4tYXQYuvx12FD6u1cu8MYbLyaD6btr6T8JHpCfPmkbMnYKCShkjZVy9vVaffmpm12n9Xkpao5hkaAatdaWZHW1CV",
  "key22": "2QSsKzdaBoVTiSGUufu2UkmCTf36do3Y2RvVJG87GDgApFRqHm7tucxwXLFpPxzR4y4LtXTfu5UaaVdy5bmF5FWv",
  "key23": "5Zpfr3vZYULjcD4sVdWY7jBWwznQJgD6XBirfWxKFF87P5o5CEqdkSDxfc8EbeamHV4vEGx9YBjpD4qD8BDpuim5",
  "key24": "3LwjaBtDzCQZYcFFBSkmYw3zb4XM9G2UQCxPbuoagRkXxqYMCWW57cKxCfQ8M8tU9ndN9qp4rUj8JKPEwgK4fQC8",
  "key25": "FxP7tjUG5H7BjjmiBRWknKrByMqF4hnqTraW4JZ7vZbaHPjn6EbmYXD1squPoZW2TTtbkqMweFFqomAU6gVBJHA",
  "key26": "3C691z8iSjEPRzsKr4sQstgkCdBWRwExE9kgCu8VZMCaEgsHTVQuPXx8q5n86LoH68WmiRCH4CxNMCiCKJ3UccSh",
  "key27": "2ZGPShErdGM2xVHao1oCWovCyreUFd5nHSLr3Z5JXaqG55eQejLjTxF8D6pK1pDbtEqvfrvU2AKUZi9E12ATFdKy",
  "key28": "3UmsHPDc2geM8nFSZsgeuu3RmkC6m8GpM9ZkAnaQ27b7ZLR4Q9eR6Qp2fmjVoowDaeRsZoTrvJixTnb6aCTuQoWe",
  "key29": "61WzufvVZEPXW9gz9TTEswtJjjvvXndmzzguYqu5sWodsGXcgUHPQtUHCQhFbUtfLunUWd3cVWJqj8p9SH1egWC3",
  "key30": "3uaWK8T1t7mznDzSHsZkdSfuyXmuUeUaysRhE455QJ9pJcoc9L5GhBGkdTVFPvoZLUinGvYsmbvfnUwc2EyvwSU8",
  "key31": "2dHTeSQ2anAT54S4dGMs76Y88noJ6ksJXaiaWbdHa5o8JKmxEyk6MfwRQ23WSDmhqRLA6LxZbBfUnakJtj5SZHSx",
  "key32": "3iuBWwj7oenW1vq5MjLcLhLabGgj9yeY3SqKEbP1vuoXcquBvu1bcYPpE8LJS7CeGuSjKfehXqtBNLGWmTE4VrP1",
  "key33": "28foksvWbwjhKBAUj3tspo2fyHNKTJUd6ysT8Wj2uyHRfzPH7dFpQNrrFMGZxVmTCGjim5cnTb9sezAz65GXsJVt",
  "key34": "4R4wHWYFVrmh1jB4BN28nBYjaKLbonGhJhs6sp675P8uRcAdZJpzhU17Jk4dJSXcfuKrTv2gfGCEKrifcVEPdTdM",
  "key35": "2E1fmGamFesmDr5VBxn7GxBUMWVrzsGi8WRk5cvrQnp3C5V9RLnCZkRFDQZ4zJDnUpHwWSu8weDsD2ZQpB5HjnFe",
  "key36": "5MXHL2aXk5AdN5tenj5oEBkinSqZcKoURAWvTm14YWtUZ6vo3zGyYvpWXh698o93T8VjseHki36zicSsmTB8qwFT",
  "key37": "57T3usEX6qeQDBp75zXVP1j4V4RiPvjnQXEsnL5DF6u5JEEwsLyrxAz5X9Y1sS4dDTvBfSFvEce84asi4RWg8QYd",
  "key38": "5W2ZYXGCiavsrZdeEFhYUt4wBjbgyK2RhPdMNkn88XTboyW81Mg6w1k7NdQCbBNySzBANxRhx8fVfnWCzh7w1PJr",
  "key39": "2jEa1D2u1XGVGFgmEcHvvRdpNqPWqcU4i6zBy9UauAVRpcyehw3H8dnBXWi5K26hmQnGETuYTXWUWtHjBdREL1HQ",
  "key40": "51XCJJT9R8r9eBS3VsD3LFaebc8MKHUv9CCHsmWNLwyesVRfMB4YWm3tNyVVP4GFzJmfH6ssKt99zhmUai3k4m5P",
  "key41": "xSZfNxXaw3vdLcWuLKqFi22cicn22dV3PdBf8qoZdEWKzYxPKwnYrJFR4MjEXq38YgN8hj3vVgmPNLT6xxoDFmz",
  "key42": "5kN4zQXfUwkE4Ft1FrDvABUmxvo2Qtr6FH5R845HjF5USrMwwffSV1EdV8eJZtDdHNbr7ciF4aD3p8KavPwrTUfx",
  "key43": "3cahj9MTXsBFzvAxydEeTW3F5Rggcv4FaeB4dYc67mp3nboTDJvJCcBng2GRgEeRPGc3UbfGi3H2xwrh7WzrrZoY",
  "key44": "i9Eksht1yhjSwFwM9t5rY3o2V4uqPHYdQ6Dgs9vDp3EopdR9mE847RKMcADpXsyhHSFm18RsjtjS49vyBFBDqTf",
  "key45": "4miDBY8s1w483Rd9yyqNJMtTaiZJ3xG9feNkKDHZUbdsRjAoU7jkvHBcEhzhEBTuBJVjtFjNPbxkzYgfzt5Dy9dr",
  "key46": "4zAfASJ6VKuK7reuagx74vqhAAKfrSSMbS92NNVo3LPXQJC7pAdLUasjN8FJCA4DfmhGHac7wKa3MMuHJZahcusH",
  "key47": "aJLmZBjZFzfRPcgntWQNUUQnEwTpN311UZo5vqBxuxS55bKoMFymVgeRWyTwbg664hDGYeaZiTkzBzxAr2f5r7s"
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
