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
    "MH85b93kWXZnC2rgmXBk3LkrtmncoP3MXf6CHQmV5G4XcCco5R9EbDTmKvzxDVwayvycrRCVgwcLxEYUWA2EMxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ggtAQM8q39MqGbVGeQrwfZSHhHa4DnqYmNGtQFThsid7M5nPktguexzse9eJGNGwCS4TvtctDB4nyFRLFqNwa2e",
  "key1": "Bb1AHifNGTY4GU7KvGGHyq7FEZ9bhcLPYMoWqhCV6L2p8nSUYf45q7h5EXUtCFhd3Rqg9EZf6u48nqrvzTqwofW",
  "key2": "5WMFEE5YbD836BuqjrbYBugMga4ZRcopzaX5en61LCVNoWVdCP5AegKbWrnBbR8Tu537hwjCPD8KLzaBEdVmiyi8",
  "key3": "3VURykGsAp7Xktbgmv6usGKjqPVDHc1eYNT6RDw4cLTEu25bDmeQqmo962SXM9JPZwHRued4STsmyidik6cVZiGj",
  "key4": "4fnoD6vvHbLvhthYMiXD9pbWn2FWfHUcqVAXaNm8fZ93fg2SLgWvXtFt2Ewy17qrTksAj2sbHYrZ8JoxK8mRyHkh",
  "key5": "3WcTLrjvFr5LfePzbbGqX3T1rBcSjoBZkpkTre5t431E6DPZXs8DEtSoVHnoVYFYNateoFcxPrqTXc3j5AEAUKp1",
  "key6": "5dqy5xAzjHwc41eLTCnN2HzSiWcjXcXnpC3xrYAuxqyatPUeuKt9NDDUXuQf5XSUEetkf4uRGziCggMKsXsj5SZh",
  "key7": "pB9aRTitn6e4cdp5wH8r6Bbw3E8E7PXbSSsar1gJ69r9pv6YAjpVg2nKuJg1J48zhCDC15zhne4dd6KZe4fNVND",
  "key8": "z6aex5Pk35puVpuzjTznTwsUYdYHbA3JKqJuungARSUgXA2Cps6nd1e1JETtcQQWa8zSkmct9HEUfrWy8YLgtGn",
  "key9": "TUkuW2f3bcEKqDxVaurJMjGhTMGgTcZEG5f1jicUubPmhSUUjE9V6TcjNJkojUpydvGTxUfXNUzLqhZPg6aDfwL",
  "key10": "4oqgKpvHtHTxZAXGrbxeyA9DKCvxnmXivXpCE1D3q6ZRGuikuZcn42XVyHgVePuHEjw3D2FdmidmBadMxnEM7LyS",
  "key11": "2iJT5WCKf3x2EQaHcwkQinmYaDqBR3wVqh7tSFJFBEWhLF9EPBUJHkVFFnxcm76YeGVEXozyWzfBgS3MLAEHQicV",
  "key12": "2bDaR8u1fzC15yaXCsq5TbbCp56KnoSYD84Vmpt5jChjpKiUBLgT6JULBbpZs94SSzbTZA8TUtFjFPy5SrMyW33c",
  "key13": "23mhULnN62u3JqWVXsN5GutR8Y2KUgt5zPM2o2V9r6WjGeVjSF8uCVbgTHUkpnxRZaX2ACYTZW9v7ie5SKEZVou1",
  "key14": "2wmKCUxPRNhSeDHYMEPxypdJUDJKHCZ4AcKCsFVsDqCDafqhAeGKeCzntZ36HNURAGKrXETcq54aNaP9gLyGHQoU",
  "key15": "tMhmb5QLaMDXwXeh7s396qLv5cuacgQFsPorwReX4dvshUNnRoFrD3wRiZPPVZHPcQKFUfhmwuBWHKuKVdwZ3pB",
  "key16": "49mBXAj1njy3NE1H7m2JsvgoP8cFWJkojK97xUTCMNWi1FToYQTXSmVJCCpaTRnytBvmCGouwLjyqqqSHeDSMtYj",
  "key17": "U4JzmWhongcYWGSCxajG48iXq9H8ZLWDYDdeYYRfPACS2cn3U9y3MY9b7RPDRuTsp4NMNzsbePqgUywKXwpMYHR",
  "key18": "pBRqj1gMkaT466xeTFmM5vX1UKbMJ7bvUdwzpE95UWtPPWTd3auQupXi5SaHFRyegCJ7s2RiRTMiLXcE6uzFVFm",
  "key19": "2Mtz4ufCf4odm3mfGP73CpQN4FLwPFr1rzTqh15v2gM7NHwHbmwxLaf2ojg644WbmTpEKn6S11UsWTFkBzkkGRMJ",
  "key20": "2F1BpQFwKLbDRix5psz9g3hSoQhrr7aaEWrK5azcvwmrsxuXK3wyGHrB5jLMWYqJQpoCwUeH9HkXD8byQ5hVYtcx",
  "key21": "2LUeDrjZMJ4LrCfCv1iBZWuugnojbXAnW5abnVdNW3s4C65D512FwP48KfEWDuRAB4RATvUTbSiKe53SrB4KFhi2",
  "key22": "4QZRtLfREcnQhTfVmUYPZPJa3CjySqNRKWxyXzoWS5zevUjhu5MaPCdhEsacJHp2GXgEAxfn52piRAxS7mVcbLYD",
  "key23": "4PhYf2jQkoCCB8yp63w7wqp6BKGuBFj317akjCgQPoPB2Z3NRkGehEL5DkvZnqZa34k7HWKxMVauZ5TdzNwoFT6q",
  "key24": "5GMvxBMtup2bbAyYMiaZbvnUugqKU2W9C6tB7ppE6W6oebdq6ty1setRAucqSAwh32PnDDvE9TrdkdWS5pDqMRad",
  "key25": "5GQTNQywgDEBou5qs6Yhn7DMFw2TaWKdi6KiYZhDsea7xrfuaoTrdrdwZVLGtqx4s61pZBwiSxf78Xzm42nLdrNy",
  "key26": "3L13QGuiHjECgJ7wgtEPs469UckkMG49WffMMHUR8xqJhnGLqEky4nSW8YrRNzrTMaRV62iGopZJjayTHQtz7mSJ",
  "key27": "32Vdtvr8JRVjyZ9Ci8ctHtxrEz5AAYnpGXoS321AB4oMUGnkryF5Xu7pG1n59beCBboSi7ELizaeMRJMYsCtx2pX",
  "key28": "4ybKt6DQ3AVyTchNgaPnksYZuLavjB1FHP6HHFywKUiFZud6kVung1JHsVm7VEDXc33JCxjLjD18Chtd9v1qZYm5",
  "key29": "35HJ35ogtruxbHP4g6kPTUwUwgXAaj8mefeKhNy5siSCBCA3i1Z1zTvUmQdjPZnXHmefYyDgSqPu7HzJSHSWyX83",
  "key30": "5uGh4iN9Pmh8hBpp2wiavW46K6tfRQk8EnycCi8rZX6sktS87gb3du4haMEEf6ZUa219Vm15M7ruLPmNi9Gp8rEP",
  "key31": "5ZDZgjxgWPJapbjZHsAEeFJC1rVUf4NtvK4FbSPsg2ubiVzWTVfzRsmAunGfUmDQTjEThJajAeevuqRejQnGcTef",
  "key32": "KCKPD36XXbVZ4Yb4eC61UYTxjh7cmoh7ZSo85g61369DB724bRgtjPvNWtjun64at78ovnhMZTKEfyzkVkU2BUo",
  "key33": "5vCrs4VAVVYLSg4KPf15CUEJm3yW6JtiNoqj69XQM1RPmrLS4xg6ZDVkq2NoZJumGNsozVZYo7i4DXkLjrosYpW3",
  "key34": "5NKtomYcBJnat6qjodLNJ51BumV8YGWrHqYADEh3MsJd7tnb9er9bbmNjXqVZr1FC55nsT7LRyHuhH2HEfHNfnma",
  "key35": "465aUQpamRN7hFYJsXor6AKNcqPnzrMPY4LWvpDxacNwsUMrecifgku6Lq8TnDjWTjQ9ULU8frzbi8u9M4Hmy475",
  "key36": "4YiHpimkcBYoEukYYxqjpBZBcZrHavdwxeEJVmeK6cQGkBsbzT222V83nXspwL5EA5GyXdmerZCSbJkRwSekFrhN",
  "key37": "5Lp6oMgNio4AFpuoJWCtPrTskkJiuBb5VtfRoxbDhnvZCZu98cAKuUZZ7H5iw4Rc7TfdJcNsPbh2Zwf2ifGQs1ey",
  "key38": "3jK1BgqMsHuUSMvkcmHcA9dX1b2UW6WbyLZzjXWYxVsRkxfoUsdiwTkPWAPZQS9Fnw37JYJ3nW3RCKGJS1r8VJH7",
  "key39": "2B1QmjgkyLYEc5yotAFMS4PRr3csKjqtmeGw2fFCbarFjR51n3wTY5CDAAumtt6DPtpMPFSSKSzYkGZesNUjbtV8",
  "key40": "ZnLnVLaDAGbzqKKHpViotXhEEp43SWXsZf71Z9PDHmAKWYBfY6X3ybz6JRmp9R2NAX8XsNrmiJzGr8gNVGPzcdt",
  "key41": "26kNNK6DkhHU4fsgPwRQhnGpqWLeTmPAmfgGDzxFjuc9FBE6gwy6wFHdJEA1GYyFkmQpF45Sv4eFbA2KcVxXhWx3",
  "key42": "3aWSrzqSXYtsJq4pkiuZPv3uDiww4yKtjPe9i3yyL8T9k7WxRNjk9FWiH8pcECu2hcjN8gdUPt5qR1oHwAKeqD4v",
  "key43": "36xvYL52tzJWrDZwqUqJhq1rfagCkr3xR3P8VHRHz67AjmPSmZNeS1sM2C6hLwtnvkZuEA7yWKCt83J2DTxwcQ48",
  "key44": "336tEiq3haBbxS8fDEBBDdoZ9PaZkFPB29LZ2FfTGp1zvUGmqwvL82tPZoPok7coXzWdziukAxkEhVnSWyV1oyVY",
  "key45": "5a6hfPcU4S43j4VczX7n5KPPsW5pZFnJ7rCFwLrwnheFP2nybJqueR9vymwuqKKndXmYPTLfEJJwpqE5UyzrJyvE",
  "key46": "5FWNTdWckVHjSp1YqSqpQGjaegW5eRtZcKTEafrtDoM5xFvB4sChwpLR3P3GVeSbTjpWdV7Usaxev9nWUntfRcyn",
  "key47": "2pnvJZgcMaaU6icLJZKvRepbTXC4VPS9uh3CgameJn95gkaj2ZiTmPfidSEHBrVi5XPfbidnL26p68Mtd6wvzkZ",
  "key48": "2Ua3vCtCkMZeYh2fndPqBMu1FdVbsMzGwLGkzackb5vgVLrQConPSQkwBQJcp3iqwdb3YYf6AR6CgsyfqPffiDAJ",
  "key49": "zqfszC95Jz4HwbSbcK4TEQutRWuaauP7GdWxwUy1sjLwUTMtXmggeRSm4XYZXh2oT9iFGvaMzasGeBoGcmnDq58"
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
