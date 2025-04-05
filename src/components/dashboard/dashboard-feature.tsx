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
    "xvgs7vPdjtSSvHz19GRWBfzZaL3k1kaiyaEV5s5CADX8ppP9EQQztPp6J1ih3At7G9N1bP7Xi3uCeEhazncSkD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4evSC7DHEsAfURxNPLdMrQqQHaKanjEmkUfWHNKRak1CEenBFQiHpVvDNqNY2ztELpPzfLFSE8y4MTCNpFcdcyXg",
  "key1": "54DbHTCMWUHyLkUZauAfetqU3JLUCdbPoaxTUUuZKqTXH9QP7SvJymQEvbh1jRf9jgeoAgB1JzsYbbh5s6rmCiBM",
  "key2": "4GZKAzirZUSnZv4W4zZMZuUvfyomv3bU8oU1QpRiouaFWsJcgpo4vUiK58w6RSC7qs9QPW5J2cAsjromJnnpSKnU",
  "key3": "LcuJvLHYcg3j1doQjmiLTzFPmRHAMSdSjZN3gnAZwhcXroiDUoYeXjaxrMoCnumbJmR4ixVZQNw8iuu4qGjRZRx",
  "key4": "WXpAmeQWjMSsA374ogmsVe3NYhJPXLkvSS2URg2TFoQchruxQfAYR1vcYNvgvE5bgvFy6jBgkPm5eApYq4fAy1A",
  "key5": "kz8MbzCWbwA4CrKCJ48DNUSoWkgWiZuLfEedUsRtg4t4pWRHDPdDfYiBavbmZ8j31XabwCzUuu4ppSCcYtYwhn3",
  "key6": "3SXsXJsrP4cRuMFZt8pT5KCfpFqzzm1pfkQ6V5RumJiHR27Kj52WzNg1GXt3SmB5MAWhAW5idhkPV3xoXtEWv2cj",
  "key7": "3bLW1vFFu1KPnBknmL8SxwDutcoap6XA3FdExCv9ao3HGaNDosrxqsSZJ6vGAbqpfEJiqtiRvyX4RpTrvBCsdnpq",
  "key8": "45DPZiVZ3ZJRzNnYUep4mbvDscAVjkP7vywsrQAe3H9R2VGwz64bCZH3kN59t3Z28U6GHzqriYaq3bqCGpX6VZw3",
  "key9": "5AJFn4E4Y5MumgzwfyxPzCWrqqLkCafpbyRGT1P3W31Vt54SeNn8BUi1SZWwAkcLK7GgCYyN1DJsK34nshXrD2T",
  "key10": "3JvddR4Aw3NH7JS7fWzfms8QN9gDoKGQgntjKH7ke7YZZzrLzQibFxQQyicXRs2wwo4uKZ2D3RzEt9FaC2sjmqMJ",
  "key11": "4fA6ZLwqwLQskPbMb2ixkwfSR5Gf9MF7rCJiLNUrWeXZUJihB1nj3snhqfoo3BbdXzAw5DVHTcjAPzBvAfc8gpw7",
  "key12": "2Uqt27iS9VYm8pYD99CY6F2oQgRSpnH4S3jk5ywtYQiMEoFgk5gZd7oP9C6dSsimMeVkvuRRU89LSWgH7tykvmv1",
  "key13": "2ruiEAH5zRRvTYm4eigBxABt48g6Fj7JbFq4DophH2uCLDeC9Jg2JgjUvx8joi57Y5MfYCXbAE8CR3Ch1AHUtcYy",
  "key14": "2Z7zFhhHvikpFNfwuhz2TqgMgz1w5RGRoF62ih6QfwjkEggPaVTgDVfC9MvvNrxcmVrRontwPjiquRHHsCPBesen",
  "key15": "4ySBS7ccdA59zrrv4CzdJE3re8Jk75rcby2G52uV4NeCMCvKBsMNFaSiPWr4FtpBNTWuxQy7Q1STfGrmAprPkLf2",
  "key16": "5DdcjjMft6HzEuqFNQhmK8Lsf2Mt6PukZLvSUT76U84v2haBWGFC7iwbQdNSPCAnu3iaowaXzRZ9PsJkXE3E1c1y",
  "key17": "5tiujZ9w7twq9FuWDdL37J8VQL6MgAqpEyRGJikpLkeYubyV3TrAFbAKZRpGvDgZG3DZbGoeShoxLaQinh4G5ihm",
  "key18": "5DsTEqRPxVbBXTrLe6naryBanQcMRz1s4VVVzPheFGWLk5vV5pu6D6HDDMVbiQTjSxYVvw3ufNFUWr4fN4aqYvZf",
  "key19": "55pVUy8FQtnvHxa7jHU1tyMd7eaEn9y8EGx5pNXSZ7F7kQR2yv2ixgvEHMpVqSwJ3nsfxY4C1zUmgMzaUMXmeCPx",
  "key20": "4WcKgQrr9ECUubcdHQKCFZVXiaVup7vf38xwwUhXnjBG14UbscpmDPjQqbU7jqApwjk1sSgbvEZyNjdFEpJae89G",
  "key21": "4YF6HVNqJunw6aaEww23XMx7efv961iJG5Q2ZAuq3nAisiqF94XhUdMfHFGCKpsu5YWjjvwqzKu8GFHDuJ4Kstem",
  "key22": "3RV48MakmZx2F4owZpm2B2r5Lvtrh1edYwB9aW2An8Z11CtxoQNLafTiqpoVqGdVfwpfgn4ai2SmanmwTXLPrkMY",
  "key23": "aSHCnpZbFXkp7YtyvvzPguxq7bRCvMCRzPhkSG5n2BdRBiKhQofNodWSiqv4MmGFtZN9ZHevSeTGxhkot4qHNKf",
  "key24": "4tpbZWiM9AydaGWUxMTkuqZmXR4ccpFcNQGs6GZSxbuk73khDXXe8xwpq9Q83YGwcnpfHuHaqCs55vefoHHMaUdd",
  "key25": "4YSQtQTwxT498KD98wsvy5xS49Xajx1dybdm9wWSxGbmrjMNVDzVqs93s1ZRMa3XFDgbHD5VLr9mj6Cpc1jRSGLq",
  "key26": "2FTMcUjGrcghsQhozRwjFtPtxFVHYj2AQYYpNgrguLgGwyLh8BteoGf15h4YSHjM5LJSrnvoEsxEAjxLSRUwz7Zc",
  "key27": "5CMC2xumF8EyBeJg4z8spD5n36hZ2hxuXvQxyrpixY3k2Aa1QVJmiRBucQst8qSVo9WPqdtvANtrxTw6N2hFKEWi",
  "key28": "62eUwpxeD5KCPYg7ELrbBR2wc9rYRHVfRNgrzpWYNnmT4hcBEmKvfwUQXUd6MjkMDbjkGX2YgxaechBpZpEaRog5",
  "key29": "2ga2X5w8SHoCDKZNtbAiJyceKoEAdAFctUcndMxYQMEmGKCuv37xg1AVDcHuZCDvRLZ18rftfgaL1Py8vBdgrCn2",
  "key30": "2ckQ5tc98ZnG6S7ZtqSYnmod5jZVMtQbrrfM67b5tZe9ZJtfykLSckM91ttdtwGXWMn8ujLMhG3duGNP6gxarWb2",
  "key31": "CPQbmDbwvJ9coJbGBxTYtkYzy82EyWX8BzqMhxDQyaWBFQcQ1BpCS1zns2ya1xtoT8xzBLsYxhTCkWaDVQGHTPP",
  "key32": "AGxCXXZzkp64zHvrLKX56ZmXwJqVigFWoVCRGa69UtaxCYMAjXrctbPcBsEf6iW9FKFUy9RsSKFsxZsbUPDZ7Da",
  "key33": "2MHbo7osL8u5YMDG8aMtHNke7N2TrPZ9baDo8fTMY7zm2rbYsQpAR6DPjEkF4uA3G9WZbFx6RbWNeVxVRqJBSLv1",
  "key34": "2pDVgNLngVEV4hzJW7VRi6KrDFRFACsh1vd7H6sLEmyj4Kpydfof7udYsKtWVAoB1Whh9KqKUGo7ugXcnsex1T16",
  "key35": "2Bat71X4gU1ou1AE6VGEphtW1HGE7Rv34M47jVxWKfkcLbeQa3nVJ7pCjEkRRsjwyGdCb7XU3mKWCp3RQk6ZXBP6",
  "key36": "3EKDCNoXiJ5sxZRh9GDG8R2eyLWGKNUSTF17uFtBwgPoBJq3yzzoVniGwQMPXhgwpas9c942YXTYUntRMVoMxn13",
  "key37": "2ewT7EmZdp741TRPkmSykd6LkcxBKAN7L1nVu781u1VkrEjCsbqJnjhEZcUeHKipywkBbU89E2i3njqpn4GJdTyB",
  "key38": "2MRUbGDK2XkzJXivJ5xjcT2KjzAxzW6ejSiQVmgnKJjPpCc7L6yTTyGETuiW4F7czsrMBvutoYtiwhP3zpb5E1gQ",
  "key39": "4gnP9vPxDCfqv3XBw1qexcKMoNtbxVhVDeHFsPNuFyVUjFSZd1ymVGm1m3nqWV7qFQvkYmYN1eVCt7J1sBLdVPMK",
  "key40": "5gguv8WrN7UBbLyrAAbYQkwXQb7qhDUSPqLWs1xE3vXs1BHJ2pd1texfnEve2qXNA5rfX4fmmCcn8kUoni1cTfFD",
  "key41": "5mtgzmwSKKqotaU38prqvi6Q6bK1H3J69rBQNmR2wLvnDr61cSyFPuA5XCgqapRLLUk9PZVzuHjVAtn19eNZwMNR",
  "key42": "57LSnxABp43H1j5NsJz3ugK3akjyxPFoN89Ys3RXUJEwzCd2gYssXwQG3BUWgzWYXqcBGSUx32qX2W2oPU2CuVyh"
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
