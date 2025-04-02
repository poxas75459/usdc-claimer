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
    "4VHhKTQAZM23ixK9f4EXRhxBSaxWqRrsTx4ZAjW3RXbG6F5uYbK9kHGA6Lrpc2fgdQzx9QN936kEyaTC4nNacSGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NTS6TuR5vEfQ4gV5Kn9AJNsPLQD4zRpAJsxoVhRpNrUdusHbKpATgP7digJ8WijdmNw5HJFdaqPMZVm9LAZmzKZ",
  "key1": "5DrUu3vTba7HNCYudw1RSptdaaQxvR3UF7DyFYU317LHzBjQPehB7ix9JvMciXjVmsVp6dDDAmon9UPWu6SGcWDj",
  "key2": "3G8UQkJ2AhzAtzHPbpxz36skmK1K6N1KEHt8RNq5uL5BJFUNNnfmnpoTRXBtr8CVSR2tk4Aa8XTbC6qhMuJsb1jf",
  "key3": "3zBanFq1MDv7nXf7fxdW2TfkRCXhLed7msvsfrR3r6bHhg1wVQQzudS7vEWP7W5wDwCda6PyAqhtrvWMRBgRRCyF",
  "key4": "42EPfGsfC2Hy8emCAMH7TMwcyu6Nup5DGHsASD7Nov7XDfvQtPBVDTQDeXYa3nGLkCRu7enMDKLeruVi8AoWScbC",
  "key5": "2wwkts9J7bwWFrvpHTZ237v1epYTA6We3eKFenNa6j1ffijS73RVSYpg4krr3WBVW4JAXY4ntqVW3wVhF83fDGwv",
  "key6": "2BmS1pbw4xnFBVXi8jHZAdPg6chxF9cmqTwciPshDn6vGffzy8axwzETFuiGCq4m3pvbWKyk1orGnGwFkCu86NqD",
  "key7": "5srjgGnwHwAoHXbRYU1MwcAxNTeSKvTM1HwU9Vcmyxuw9qWwLRFjFVjue5xygTJi1LhE9G6LvjUZfSFSDQgR2bnQ",
  "key8": "536Uu5mec88DeJob4S7eqcS7JWEimEoAagGkh4xWB7H87wTmY9Eri1LybymXit9mCC2cb4Z5P9BmG3JaDmdJDP9w",
  "key9": "2Gg5m6gygDk1SwR7pp5c9nSrRKqL6sVx256r7YyxMeH6v1dubaKDp6sCX75VbcTzbyYCwntLSeQtwPEynhFpHU5U",
  "key10": "4g6uSaNpHaMyyPzK3yvvkqi8iB9WtaBhQgX8Kq8o8G3h9VkngPendU5EByRKoYGiB1iwxANpqaX8jvFBXg1Htasz",
  "key11": "2zNQFJF7BrmzNGbEZRpub5Lw9eAYtaYtzVyGq2U7YBg9kXgEDjDeQ1QqeQVkHEiBzaVr6xBkTxwWbKxdafNVKbk7",
  "key12": "4rkaUVNUYjHkcFaAE2drxisaaK8CKjNQCDhhMPK7Q7k5FztvKHzJovnA6YB2bAoyk7ro3FpmheqGXjQecr7rL5Z9",
  "key13": "2hNHQdQ8T4QWMVnhULwCBXuiNpTJE2eT2EuK5QyL5t5TiyjzAYQbWQFffF9GDv1rRSLS2udUvyLCXH3djZayi87T",
  "key14": "2tydZH3pUeTzXgWgdrB5V6t3hKKjij7MwSz3jhvMQPTuUi9KMjRkEUPd2hQMXDagQMdyqcG8u6PeKkm7huoYkNPy",
  "key15": "2KQ53FtiuVnAdFf2MN2LSZSxUjNgDEg1xPAceTAATcMG8KdJH5FVuVVkepHxmUwyCo1xeEHkfj3zKiodRocTQ5r2",
  "key16": "4ayCwp7in5ns1DaxHoQHFrSeuivkJFdZWYEufMCvSjemYG7WJrNBeaUbiWLg2fMLCvsqBoxq2MrNevE24BuK9KDG",
  "key17": "a3KQSqNUJiDk6UE6tSiEa7rRErmqX4WoJu9hhQQ1Swawj8bzRMH3CbQVXPYDo27dZK8CnivjnbtM5LhKFyabSQX",
  "key18": "3Jgs9YKhyqx6ZLA6ga6gttjzMgMZjFJ5b8XA3Ah1BqHTwQr5fywjCiN4r8EYaHrfuUoS6vzb4eBvMhcDYSDWbumv",
  "key19": "2ZnQHth6aKHm4CpxrQqknJfjd3j2H5zaY54aYbWYAwmrDEc8ekQeoWreEpNnU5DERmkEnnrNnSwMupfeW9k9rQCx",
  "key20": "3uhyoJrJwZejDHT52cte34fNEFH4nDcYSfQCzJCwB9SYpimGaCRDaqAG5qd1st8tUckBizgrcsPrr4tPWYXQxoBL",
  "key21": "2RHGV9x6fktEZ8qeq5tsX39sVRLXmjPeEjCjggujj6tkU5Q4XooVL25tywLaNSqjNaJpMiLPH4Xjs5c8L8N8LxFd",
  "key22": "2AUeajicqtijvtoQFuSDevaDq36sPtsfQSXPcJPmAwdERftvaSpV7cGnVJRPHy4enxbduSshxwSfryNYxxZAqjA3",
  "key23": "3LuE5bTpziYCWGNujjbyDvBgAvXkYh3fsNWM5L5BRJc8MYx3PLUQgzQR6enhgeHQQjNmomrvZpkNgbUBrvnVU3dM",
  "key24": "5qT17WmJWGfnBuaWMS9f5wAVBUpZouNYNWaagf8hMakaAJMiAMvyni2o5vCz9PAXiDELRKD5iVPCTftB58e8bVP6",
  "key25": "2iNXjYzQCLJaMnusiaEchkwsx5VWzYDwsmfQELzEH3rYa3DVpnEBQUt2LDPqhPvALnBBD5mTimD9LEp8c2Hi8vvR",
  "key26": "2JJsWHiq6m4s5REfgAbaP7MgtuUhdipU1guqvQutZgVyWkdsmTwTab2XjhV6DQmoL39qZnGHnvMz1nwwERyDUD2M",
  "key27": "2pzyBpuSnwf5HMi5jqFc7MBH4cuNM7wKfUAH5nTb8MxunHtr6FdFkVf7xBYDnohAvNsG9xG6x5Dta35AKtbtowNf",
  "key28": "C76k77gygySgg4Q1ZMx6BNAkzAA7j2Ejg6j3v1hFNXLAZizSnH89kJEneXN9XvMwsLBv1ZVeipieGwPwpxzxpTG",
  "key29": "5uLc5vjQBJXanr9cGfXZv8yjvrBEfJPtcg8tAiPoDEBamYanEuKoexNArei3TB4PabvciitvavH9C1Dwi11ciFyD",
  "key30": "23qiwMGMBEiHRCbsACmFxgBxfK6Yho7ZDr7baQvNQ53o5yLiNov1fVcMFZpH3bqgwSfyGddgeCDs1TUZHHcBGTYF",
  "key31": "41a5qwHs1N1541X4gxzf2FyZAR2RCgTBPhiqFcj9E7BsVCP3T4FLNdCyCHL9Y4yFv7fGMES1kAfRAENCRfSTU4RB",
  "key32": "cj5Q8oe9XcY8tmSCTdj3XFVD7ZtUQrNGbNzR3cbPc3MPksvjgPvjTHtxVLJ8YDgwCNDxWjWxfAxEjTi98SV6Uot",
  "key33": "qyB63uRy54DodN5yM9ruGnxRfuK6kG5QQm2dgdFW5CiDG5m7y3yyhVimeWkwyPgtHvo79cSqyWxnH1mgbxq1soW",
  "key34": "3d9MWfrqr8DRuqWe9xyanfxvHz52zH6MFguyr2VG9SSC6vquLdbCqrYVRrbT3UzyhGJhdFzXxDySNEpZMCvFt7uJ",
  "key35": "2BLtfGZXSBda8mysKVvKiCC6KqpjmXEj1r2urHSnTfnZXCL26AKENEBdNYQK6bjJLGfAzTM4E4DaWioam2FyAdNG",
  "key36": "5WKB13yy4dyK4Lt4fGc6qMYUm6LVbcZ81dqke4yrMoC9cqYCXHBCkhVVnSHCmsjwh2wqmCMCrKHfie1mwKwcwncY",
  "key37": "tTZCoR3CAhrTSXUMhuns6B8UK26uWWg3dM9fh5HvTWNdoU2be5Cxenyid9zxXKBTP6ZSoiTgjjcCBYtDnMDdWbn",
  "key38": "5M9nTvPp5oXSCxQ6397jzYJhGVHR7e2DA7EAdPAyidUQnL9gvRLQQm1eyK4S5AHCbaG6n96acP4UU6KA3gghx8ih",
  "key39": "2mmFXiUvJ16WvrWUZRviWws6o2My6bsEsX2L2ZtcnAr5SnfHL9kFZcwRtbH2ExnmZMg8KD59X5f4c6pT4zJJwoAa",
  "key40": "2fFZ57USj9bCiBCKtq4jSR9DgaeeDp9s9cqh98SrScVbF7Hh75ZJRKxiFsAx5xePph7awQMD7UjQm8MEkjpRPxMp",
  "key41": "4Y6gW3SPwqd8RptQ8yNm53nHHzYnANT6mCmZ2PTYnmwhT4kLKHKLunGoyMa9VZiVrjPB1rvD9c8mtLCj4MRseUVi"
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
