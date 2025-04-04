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
    "4E15SWSUg1qeoTJSGdLVLPbJfspeDjTkpsEdcKkPgsuiCuYsYcG4U5b7KE5aheHhwXZmhLrpCBV6ydWHNJo6LvMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TJeWk38MoAfiZbhfX6nydiQjWhcTxqTTYTihc5BLeWWNEKT2EQxnxB29AzeU9An6b7wWAPPwUQNoLgYudspB7uk",
  "key1": "5mgNoUrHVtKhyLdQ6K8ahtaKbz6gmoFRdSR1rVH4WSb4StWSRfqgJhbYByZFBtWiv5HNqP7W81aQmhYNkUwWMY8n",
  "key2": "4pkAAhHkJS9YAouptdSX9TL5PJjsnvRLzaDBMVR9aADLDPPwdYLUW95Qt5BnFgUD76fuFtrdXEAnYgMAqm1MFcbq",
  "key3": "39wNocVTRgewcFRDemdMoSqfDWcJWA1Ao8oJWi8bwmCTvXKhRJcoXB7MdhkTdmR9XUcybAFtdCMoiPPE2gtLgg5Q",
  "key4": "Q6JFf4iWo2ppk6d3QLymqmrF6XSdzSSxp7FsWRqyGxACciJ65WXazL7qXjACXWjCZh1kj5saEnT9XSrFU7Y9en9",
  "key5": "2LVKry6BKEwj4M3JuxzwAjatEHqg7yiTqTS7CZc1nSCv4GTuTtVsymz4tWX1fSSmRcGhSE2cP14c7zrWBb2BFMAG",
  "key6": "2TnNpJZzP5u1Qv3tauCFC42MZd253hARbc3AJRAwKR5KD758vTS6RYV9Suwu1zMv7MjYGnAW85uXZo5EKtGk9DNs",
  "key7": "3DpWmWedQPev3SctuwtoWP8PfrMFFxX7BUvFC5D4oHkvjv6VaJyTu6PHcVQ8pxf4UnmR2NZateCxx4PJhLTbbsEq",
  "key8": "3JhoY9HPWgddh2VGjQPV4KenRgfW9E4YK9mqhxKzhYz43SQZWY4msoadMRjMhCoFuSQtS9nHFgBH1k8AwZRuc357",
  "key9": "2E6aL2UwYiKqE6fNPkX7zYEp76Tc1Gp1fMHxtpumVfUoNo1g2BtEmjV6fvNZc3GRXguwCWo7BWyNpMcaiDpGvTM2",
  "key10": "h8W3ZjXRMxnt3w1RQTWj7jVGtjs9zQWbHaxr5jsmgxReVNd5x8NvXgPMVrCtA7QrgRvm7z53c51NgM9V3cK8bEb",
  "key11": "2zvAB2Mg1t8wvAKATQLZzT9gSyxFP3Qk7T8kHJdW2oJUfpYku76YRCSYG4ESkFnKY6xVfJj3ZYRpXgZpjKPT2oLC",
  "key12": "5LpJmY6ZYgk1EZGBM1qV1NqH3JoggDYMgV4GiN8WB6KYfDkcyKxtnEufxPT2jiuZCVuZbFqPKQV6xz2t89RrpCjw",
  "key13": "ofeqoz5ERSFaxhbuJbJWTeyastxzXprcUWQ16Ne5Pkcon9boN38pdyrZqRSKSFTMW4N36D6MxzdJKUWAJUmjD1x",
  "key14": "4gcMKrRV84aqHUF5ZVGhRcr7caorQ3nMFKHjWFjxeAPzpPqYEZm52HJnCLWEUrdEXkwoTdzsWGhnmDcYpFGSsPME",
  "key15": "ARzzwGhWpVyPqU7gtoFnrfTLmTgDGYrEsLbCJhA8Q62f6Jr7ckPdSMixxM18fUU1wy22PnQaLT3nw5Aw1PTYbH2",
  "key16": "Y5R7xPpgXATjQH9y8vJqo9Ev5C27WrcCduUV9iuN87unzNusbtFjy6oJrGuGMW9yk5CgzdW7r3F483jKCCUwX7b",
  "key17": "K1TUDpfV6cFkja4BSzWqLfrQQ5ScWYp2g2w9Y6GWHsMTsn6fwXEPmb2yocndAegQCWST373xKHpoeQ7CHayAnsc",
  "key18": "xpqQD3Eww8EiNdhy4S1Vgg9Qio1T2T2amK6s7fVuah22jiZrEdKC5Hya3JyKdYmhSXmn4MNuWzZxwZ69sxg8XYC",
  "key19": "4v61nHSsU7beVsM1Z87KvkquCkxWPiG8hp1w83hNxq5hcQib6hLbcTAuJnrpcS8yNA2dwDDNaNEZKYaSzdqSPRu3",
  "key20": "3kThUaYA5GcQENi8WhtFu8whQ3u8crM51w4eKEYDakWM2h6P1m8RGDUciDrn1A5nLVZGnDxxp86fSqezBCG3AKZY",
  "key21": "3ifThsaf6mRqNENaDPRkVdbsbTrqVQF8AtsJecKfgjE4gN6iar6twBgtUKdQiwbzQnpytDhiARYt32xrUzEb4WXy",
  "key22": "5yPXXZwV7yqHgzebPhRkMrY975esZtcTb9MRCCThpqeajddwp4x92J2cDuBZDhFGH7f7wU31poC4B1wPEgqKZyYH",
  "key23": "5gbKHB3ry91YcnCVtCNEECoyN5HB6aSPUPSiP8by798sdLh9pdNWeFTWw7bi4NaV1hnnNkq54oU3xRZqChXa7aeK",
  "key24": "4WAjPkTBGLHHiQMgqRitPYQyzTzpzob9jAVDtMR7ygTvPLGFcv63xqYijpGcPT5JKrBh6zGFkp6AYpEQXxe7Mf75",
  "key25": "3AtFJjgYEYvTkNcKiXxbShLUF5wC4aUefGzr15bN88id7tu6nfpwCWVNuSW6EuGxYR8GHS49pyCBDo5z96jznLis",
  "key26": "mcsizp7Wmk5dTZxJUDjkFFTiVxvJcSA8qyPoE7wgbKBoCPfL8j9oNLaF5JFFfEhChWvqncDi9VpG8WL4cYcoLCE",
  "key27": "3zuaUC2z88XYFM1hGSfbkHU1PoCagc2eFdkzQzTcsNRMepTYHaL2pJJ673taAzEfAfiLc1tipSgu6hcEhXu5REAd",
  "key28": "HE998ZzWWXtM4qKtXhUrkEMwSNKf9EPx8iTfKc3KtfpobUowc2TtFoSUJJGtbEmBYoQBRLw9Ku7oFEmLdrhnXTF",
  "key29": "qJtdi9qwyb9j1hqr1Gk46YV7K9EYwPUUdrjqUDe2v1NAmn9N4pQdQsYeBssw7RgCtuguQE7eMryyeVnEnGGy8oR",
  "key30": "5yn4ovw3QDL7vgPuJbqZhX6hqVRmzctJzCc6B8N9h4S2X4ypz2QJjmXMotKauUa8RtGNEfdCxaoA7Kxs2GUGujyr",
  "key31": "3fVQoDK1mLDHT5nEW4LzuqUTdTPABbjtHJVnjdzfi9MbbvoLkEpY41QGTA32NNAFoWGxbN7j4kKzsnypoSSw5G6d",
  "key32": "3BiRDZVNoKPEJXqLrBEDNq3XyEQwwGWXrV2cdXqdZRC57sw6Ns6MCp8msQoQ58gqzzKJqcW2x7r8Jg83io4sYQaB",
  "key33": "Qb7veq85gy5BfFkWmSes2Mx9gB5Duwqmx8Lv7AZfh8HoF78ygcpaYQwXfx3sv8khh5drLccB7DxouvhJwTFUXt9",
  "key34": "5tkQTsqoarqrz9j62EkZrMcqerAYiNovZcZA9zSyi4EEs1xPYGSvApqRN1utghZ46Yd9KMLzntzPFyR2F3WcnFGr",
  "key35": "jnWp48PDicgLdbAwRdUjTmU7e8rmgBV7TqBvR6icBQVuTgMYe7VDtVvxxJ6L9hwKFSJSApkYvXTr4bx6699JskR",
  "key36": "XPwYSecmkFGSa9uUo2F6JK1BLFSeoRmmFbWquaYFdejuBc5K4WQwAWXNBZoZYCw5qUwjBRourydve7eCyztz9k8",
  "key37": "66DwVCL4JEYSbJMAgKYvN7YWupnnjn7XHGcedeAzFNVb8odxqnKUbAzhpjUSpcEJoY3oBR3vTSQ2rgRcVujdYCgV",
  "key38": "2CoCVyjRxbZJuqAKsfmtMTrjwYFVsmdj3t4zNMyiZcYTG9NfDUQqz3iYYqYhbSXgBRjFRxbT7RMDAGkTsxkT4LnA",
  "key39": "5vqtjjqr3d3TXQnTyeDr4b3wj6dBYjMHug4ov7FF9eCaduLARjiGorj1cPCQA57gtyfEhDa9AtcckoPua51KYEj",
  "key40": "591VTY6MvAia3YzRkn7qBXA2SWBTX1SFFdmD15LLqqUrSoRDxTuGp1jHtpvx4VupgFUdNVzhm88wiQ5AKhpXDnhH",
  "key41": "4XjRr5vPiupm6XEiqADv4GrbWavpBBoKscLKBxiC6p8G68mU82x3461zQGryKq5F4sJxtMUk7BZ5JCvuoTCbD4Pf",
  "key42": "28mGwkdHc21fs7ougRwnY9hjSwKVisw31Ugyf4qdopph83x6mZx2kBN7ufvyEeHjgfGmLaipPtXCMsNJx24Mz63Y",
  "key43": "4hscY3pwYpYbDTDtCSTDyNrixAjKufhRoLQmJACTGmAZ9kCSdMjeNxioKMpd1spuVkvvEBwJNiAn4WHd2n6o4wrL",
  "key44": "56ub73uX556QUpRVZyXuJA3qLgTktAkt9JF4asYUfqkWPqVf1MZnpLzng188tN3nKQWnXAsHDX8igeAAzfuw9yAm",
  "key45": "654TFQ4cUSi4PUQsta6pZsjrs6NKidn64NLTVgNKqwScXZ5QLzCnbW1tXorX5eNFTviF3sVYp5n4ajapApA6xTvp",
  "key46": "5u3MuYLQ58gjjJofnmX1C6UQNitQFfCS9WvhVZWL8oB4eNLp3XuBX6qRdHByNWogGiPZqdk2Ng84Tm5825tCi8d3",
  "key47": "4EcSYdcuRzuPB4vW1zLVXorPRPKcnSSRFF3H4jNEFYPTxo5zZ4nCH1qBnVYmQ81NxJtv1pm7wZtbRocNoHXQAAYH"
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
