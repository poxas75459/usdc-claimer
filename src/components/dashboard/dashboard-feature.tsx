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
    "65WRqD9L8Y5qLVD5AuXSzyeDXP1qfmSfRE5ZLUyc3njG3jPbYy3MWtA7VMzhTZ4CfkY6qAxWNsi3bJgdR6BN3f6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NY8jbXBQvc83WTorFY62dYXhPU9LYxBkdEaijcpuTAEzesVd2Gvhvomskh4VAYoLyDnR9yRaoDcmMtUnsSL8tbr",
  "key1": "SQykeTqfteU2LvX1VRVZffZD8qNvtVcXxBZp7k9vcRF3eBjxhoRPQqWk3Eo8SsnzzKnXACqiVaUZMRhv9em9Gco",
  "key2": "RUbtzPhNuJUkdXUvxPkVqJXQVMvnpSFuTADAaCZinpnEMEds5j5zRqnxSZWw91NRjUuzhUUnA8ffcm1pfpqLcdx",
  "key3": "4QgrAJp5vD2F96WwKc2pRZd4q4NxYghWd6P9cd8EcrXcVahwQ8tM4jZASMW3siNRAjVP5TroWMwZR4srucf5vJBZ",
  "key4": "4wZ66thG7y9fopP8zAekvubndesfBwmn6C1huJEuuYMnXgJsmELfAPiLhqePvthB4RNceXY8LTuPH8mxaawkZYH1",
  "key5": "5BSPhrKQuUvBkpzuiHKN8Z2yBzmYe5s4nWxrgSpE1Qmw2FkZ92KuDEMgm7Kn5P5E4AVVv8nSBUPJqHzWueobtxu9",
  "key6": "s6qcXCnGqgQ63Zpm5EpDTXvrFp2hTvxAYhfpNrs7h8WKH6oMTEbBcRbaZs5uf9ZfA2W4aanSuxNx7ZYnLvXymRq",
  "key7": "4YzDvSCbEzxGKfEcFydUrz8DbcHpi38ybMwRjxweKFpzAiKW8mg5GsFw51FPDbdNu1c4VLR26Jx9yDaVAvfpJbLX",
  "key8": "3NpRxEGCseico8z6ttQT4oKtcrKcBG1sAX9xcRSFKJ9cTR9HMiTrwBrdbhUjpUzokaPQFLuchpPmuy5C4r3AYdYG",
  "key9": "3YWFtxphYGErAR8bp1CcXwJuNX6hcjEqwJhq9dN4snQgaauLYtKg694ZpgGE2NppJFt5Uk1bK1GSpWUnWhfhnRoU",
  "key10": "46HC2T8C9YEBCyjRGyeEiCc9SC3vWBaAZ2j4TuX29bVtJFBQjf45RbQvmjNGxwXG6a4R4DWGQkkEwvuJfUmY783R",
  "key11": "pdaa7qPWqQk8GNnLfXic2R7oPaCwKfReDbiceFWDoadY6ejctAtYUNRPddkexuRXt7BzH2mUMAdtqRqHCA47Fo5",
  "key12": "56ehEDYjesfod59gtYwpf8yBs1QVRtjX9QEhFVqKsyCeQRiMV1XLLgR3UiUSSuSvwjLJd2uSY6kb5QfGkwVsmaQU",
  "key13": "NWCHp1iPSH3soE1QtrPgZe3n7Y3Tq4n7KXwbSq7sPhgqNW9SdE6wcUcoxkZc8dAmq3drrnVTevwrhMQ4GXT9qP5",
  "key14": "4Bs42v7Rj9zUKRtatG8Rg9M7XMK22qXfpF95bZFC81kskULaj7UNK1mUuno3AgYiVHkP5cvu2gzBk9Q1Uvig8afm",
  "key15": "41zRTjTQm38NiPMwm1PUgoGqedPPt8HcWD4q1n7quanajeSqoZvRUvaBcT4eK1bbKtRBiWjGJY3uaYxhPepJpV5d",
  "key16": "2W8Z7mUKuXHC9ApVHrMRXL511GHXyFYZWB7mzQGyt1W3V1AuiK54HWM3f3rzvqGUoA6soxSQxdcwbw5y8bXA38SG",
  "key17": "5CveeQi1ZHyfWW476aE878F2uhAiP9vKB3qRxBRjKnGsAqBAsDC6Ri6gpxPw7CX1TZyemyzyJXQPVV3JEii4QnTA",
  "key18": "23QKLBh4ZpJivxWBhBbvmD5AY7Z4j9kHyXfzWW9xpat9pX6Rr89EDRNdWcxyk3JaVEWB1shmnrafRQ5gAbErjUoX",
  "key19": "sMgnFNeCYMtKA5554Zx7SCPpvTunU5VHV11kykc77W1ztb1nQdiubK8ibxMWw1CX6A2XqApybWjuxkJSSagqQxk",
  "key20": "2oQYMfPCYARLnM8yGcwbqjRE9W9WaT4DuhzyHzpZ6psDKDt2fMWCoBc2Tka6h1NxwzQvcy2Qe8c6dm3oaJeRAQc8",
  "key21": "2CvzQifafsrkc7axVZXmkfxxexBnXFCno5xwwTCHgWoTy9gU3fs8gioHwUbja1UPf9a6FgabHRUcni7x5n4jReXx",
  "key22": "2kvh6jrC8P3Kcguen1sttmS6bLrgCcy65RmnAscuD8MVTw9AyCoujHbKdxFiPxEunAsHUdZdwJ5PrcfdNq1MymyL",
  "key23": "29z81e4PndwvF9DQkSbGdHvt3vmf922AmKVW2QuzRKqS2yEvTpTr5fSxjgV8DuUdyXKT62ZXLsAaKNVzF45h5S9K",
  "key24": "4Nagox8QqYX43b7sJzgtXKWVZ9C2eztwfFT5Ah2cRvjAiPw3cAm7AuRN57iD8HLHXioLuAW9tpDZetbkTAf7nspx",
  "key25": "48CZZjdZS7Qw6kV2Ro71oyTTYULUJufr1cZejgqFoJY8wkvEkSmr19R3mv8bUhb6b4aDRixyxwCth5irwVnPy6eP",
  "key26": "4sV3WttNfREXvPo2enEFAuKqm62scFNXQLLv9szGD9ZBvToHTUDLnif69rGoPgWTi7co1HSvvquEymnMV3X2sCW3",
  "key27": "5162xQ1wf4q1yicN2wqJQu7S5GoSyNyhXA7YqzV47uXVuPxvQkuyDASGESqRfXUfwwmJG676UV3v49b6EJ8o2kMW",
  "key28": "369iS1Ba6giFipcAMytvC5fmAojudLt6UGvr8qUUQnoLhtckr4rjACVRGSw2fCeHMkDf3gBsFpWf9nbXbcqZdhYc",
  "key29": "4Yq3VH5B44zbaaTHwi7np3cjSj4JgeUBs4gtHkpN5ZML7iQF7VPqcyNSZBKvmFBTqsgVxWWzSd6WzcZpFJzKm4jM",
  "key30": "2HaNEsGxBBtr5QKGdLJ7q2hFaVCnqjFASr1ymZ4BCqtRPUjDDaYAEZiFRFEZCUtp16YidW5zKktZP8UiG6MU9ED4",
  "key31": "3bSZKcfFEcLW4aggwQRYdVEyPkfYf5e2AkKn1zNdaf8g61Pfk1bDrqUgk5FYjpAgzz2x31F5VTmXVUHA6veZzUwH",
  "key32": "3FsExDQ632UHh9XL7ZVN4yvAJ7FFJJBusePiQuupBRJVNB9f8KNK6KdHVKR4EiCnQk5LGjVtag8uBx2DHrcxhqPk",
  "key33": "2vimcahov7LtWYQDU5rYaLEwPm6sGqwhRNoq7QFA7B7cpVUJx6xdDrAFavhyQKpKUEk3EihMyMA1R4VmW8kyPzQ2",
  "key34": "21pjEyyY5SgPhmEFhGaiuQApZLAREYoZYc2YFwSE7pWygdHsjijzqKTmRAqrA5pKjsFS9HcBfvd4tmWad1E6AyHM",
  "key35": "2ySh7yWcETjAyicGGT2UhbpdbGh738j1rhRJz417TCekGiDCH4sFNhuYyGKSypKVNDxyBSfHGmzdd3FTLskwkKVH",
  "key36": "3StMsokL5Ystcud1WAaWXi3w8kd3VscgnWGSBAZqjJsUsYe5ibgMc7HAupMBp8VcJhnCTnA6S8iPe2azojyhkKhH",
  "key37": "5HQ5yX1yFGuftM8TZi5gfiRfh71ftp9bnZSNdcePB3dNESCDTKCX75QUgKCwUTSJHDHXTRFVDEV1me28ToQii1TL",
  "key38": "2xhT7MX5PW2YFehTwT9BqVPkuQVBhRmuqtkzZCBTRJdPGd3XAqG5cfrcAbuAUQ3XqsVEiXns9wWgipY2R7bkZA7n",
  "key39": "RnCtzggYixptFN22hY4uF6E4f61kk4oNDUtKgjt2HHvdoekg3ZeFTpcESHnErVpAXLf8mNkb1iP3e6jiHuvvDvi",
  "key40": "4oi4hZuTjirzYzUG5NCYzkWPsYFrrDujGFF1nafn6MtiuaKLBi1NubEGNTkLygNGueEA9MpE4njYx15LbpQPKvip",
  "key41": "2SuGP5wXD4GVyX1593map2yTCcEd5jTazn8a6QU3qNiymu6XHiDq8EdcRN26ZpCtta6wpuRgs5N1ckFa4PY5fkFc",
  "key42": "2cgY8Q6VK7R4WnxRHX6t59Cj5X7TqQZvJDuSg1UUvBQpauoVLb9SATVc1tL4NdNVBjPKhCxAx1ThtNTFekS2moZw"
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
