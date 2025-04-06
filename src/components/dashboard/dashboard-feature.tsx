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
    "4rNwXzu37qotxoFJPmGJv6P145k4MvA3rP9ACuk6fNQTTHrGTTSPozkDPWZPx1Ux2PmAtjMB5Sh8kSFFpQVpr4en"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XYR4sXeePxWAjeoJLeKabaSRFnEDtk82fMwTTU4igLJRSyWQyxcKhJ8CrgJ2m1EfVGUdkHV8A7sFB8fmfFtDxpq",
  "key1": "5DkQWXWGCVAnRp8LrARa2gLzPd3oyC9ioYTg31PPDNhQuDQhWy9eekxopN7V5ep5kUEn5q5jkMBortZNsw6iDLc9",
  "key2": "5WyRoa6oE3oDGTiQgbsfJsYTDYtJjVw459oHYCQEwKJ9PvBnmKpTsYXkRgZjp2hmKBDord8nSwwmYfaYe3Vz1oZT",
  "key3": "4CVua78ffEDg9po9JZo1WdpUMzHPFHko543fcAgJsTb43c3cbHXHn3gZ6bdHo9kRxKkXwUTWU9J6t4U6iBSp711q",
  "key4": "29x61SrPUAdU3e12ni3gMRtYnRnJLAUn8dhd6ZUBkrrQd8A8rNHf4LeaLQiHYaytckkZF2SEKx35zY6YHUR6X98u",
  "key5": "4LH58fApF4pwRmaTNkPnq4GnuqwDRwRP3uaAgC6bvRcwYdG5cbjGgXvRv7LxeSyk3fJ5EeabbGDmUo5yeBZ8ue9F",
  "key6": "56AcYoThQgRco8DxxWwF77u8SXkmNKeUUF9zwm6u1agJa5s3yUW7ri8MaQmN6wYdYz2yvJ525kRy35JXQ5TzFFzp",
  "key7": "5S8h3LuHzQ6sKBwfaoAYCnKE8MYUgpxcvmkJXXXD2yM5GvidAJyqmyDoSYGEH3YrzHCNfWzRZ5aKDjgHywWiQDg1",
  "key8": "3hwUQ3Qk3fZagXQzP3Uc23YtGa2AX9b1H8dqu1ZUdNYuroiAykbdvAFzp5wVkSiAVRaagnkUS6UXRuLrndypCWRG",
  "key9": "4cDuGmXYzcTLSc9KDT3JCUY9uXWPJEiQv1ReMswwj1b6eMZqBnf1GHcRg7uwCEXCrYeY7w4einvDvLuzL7DPKBJE",
  "key10": "31ca8fLVCzsqk1HBmso29ANrnH7pLvWM3RCYNeCDpUq9NpYHjMRHfTvxLGRb1R9izWg9f6vYDLXvfycASDgpmywD",
  "key11": "3YUzPyfNmXtNucfSv4B6A2JBPab2DeNog4Cjfo2UthbQvRdvqMab37nrHEQ1KNDgX4Pi5ULw5nqTPaaJY8kaVzcu",
  "key12": "5sxUKqpVevb2M9h8SGh1mhBV2vtKgRExUCZYtcZbtG3ArJAVPN8Yxw8kkGH8s2NgNrxAtbKAcWb5qMCs1ExYErn1",
  "key13": "42iPRkqtvJb1LouxtHensYzEnUS8JTYoS3TVxcCnhRz2JJHYcgcfUZNGzL2SGFnEJidxPvvaA3LYSuiLxSo8eFAG",
  "key14": "5kJ8CswQsk12YuQYDWS6S1PK7ESYs7kGkZdups15M42AEzxQd22B3d7WsCSSY6QskoTQj9LLmWya8AH9HLsessuV",
  "key15": "5rviHHHitXFB3R56FjWpMe4Lp27MTjeNPRx5dKQz38k2YJQNtVhsAo6pWvCfEvYczVxMFqU6u2PkJKJh2mcKsfCK",
  "key16": "66Tpyq9YrYUibkiuLKAKu7xkRBhXzB8ia3WuL55rKLSdB2DQcf4562E3CA1KHwsS455LXnFAq7qhf7L52BJaCaK6",
  "key17": "3C212iZzoMDvdgBko6Em6vguv6GdDPmZMBhWcHQU4bXSfwKvBKPJGKsfy5ysBrJvJUtiFMT1TiAUGVzDwr4D171b",
  "key18": "2fRnZwciGvUjtyLctYR9DTae25SNVjRbuTSVw8QPDvJicZiQ2tDyeDaAAT1pREt1bajjtbaZjfM35KCs8KKvgV1U",
  "key19": "3Tyr36cW8RybgBRbTjb1gMb1adRk6CKULLaTVmsf5xruhv5kCBLrEcUDpzFUeTVr8xjaoSq3ZTG5cdWRynJQKxz1",
  "key20": "43544S2ezoneJCtBAxvZoyCy4iH9cnUam2Kq2aJNTLcSNGoVrbLD3moTbhnraTmp8w12WZyWv45bUPbEuKMR3c9C",
  "key21": "4PBn9yLZMVmmXHtLTk6wh77Xmw6sLUNzd1T9PMzaJtvByZ5mwqRrBX6hDBymFrebxKVYxy791Ne7oHqN2PNKFbnk",
  "key22": "38FwS3KHFwjmKExQ6p9T4wMmDEB3xFh9sadApVJDrgwVcZ2kZLZBePXAdGXqqiEuMJKL5UbZS3JWerDUG54fauKj",
  "key23": "4XnHUGGxRAkMHNq69EhRuVJsN5VtmZBwPm5UtCS7134ohwzhLDMw6ZUswWeM5aZ7BNkGczytLZ4Yfct84UqYaFBW",
  "key24": "3fQau9HMdR4HLBzhD52juY29JUzNFEcVdMf8xZx2dFT24rJtHgdKYvKsvKnxLs8t8ED6sCcmhqmSwvfr5YZhYv2k",
  "key25": "5nnaANgfZPNrGr2Gajt78wyyb9ZXHAjJnXAeGhMavsihzHoQV7kBVzS3mMAUGRaTDoQVBPdJEmHJVZ4sH7nVxia5",
  "key26": "2aUZJzyUuALYQDorfRK6WJ835NjwAFvSWwguzwHUn7bxky8nEDZTo7mxhdJaYhv6pkJ2Pr7Tj2pWggdXCAVq1vbP",
  "key27": "YtgaV3kw8eyFGtuhdkgsHQZwJ6sQuC4zpJoybrTsGVjTQDSMWn7ydPfzvsJts98WYXXU2zz1Qc5GEMTkEJh8wcw",
  "key28": "5VYBNHMjJ5zoGsEY1xgr9Mhzsh17M52BBVRAzw511BiYdqMh4YoQW2xKd9cUSm7dBR5PhJnj4QBmiUtxQ65szJ5v",
  "key29": "3Ts1eZzdyTM1vZzAYsKBewXmjqVZhDxyHQBeipGeL9MycHz51geFezvvgdVZffo75ZsKAf2Q9vf43qBmgecRRXbE",
  "key30": "5Enk9kdPxFsji2we6gw8QQ2BrUdwPuXkkbJbGMix6ks5Ub4h8QoZo4NpPrwbqjha4v2nSZqN1DnFPeuKb6NUgoLi",
  "key31": "6GoAEQoVkAvHLwp9PPN1D5tJhuCn2vmaNCnFHTQNa1fpkXnWqtJPPWQQNvB1bXknd6DWHPY5H8GDcoBemwGueZL",
  "key32": "5HM2Jzy3P7Soez9iaDSqp8XWiyAin2RpUEAHFucRwChx4BcWVdm3wVFgHTiPSdk1pPyLpX79o2NQ19ejqBgqxZer",
  "key33": "38nE3BaESdorupmYGCjBrAneZvmHcrbsinNuuN7693VnUzgE1EMWJoSetMg8ewgXjJR7HquibfnvXNELx8VBUSVZ",
  "key34": "3YxqLMjiw4NX2nxhp1BvSxHajJse9PCqwpdVmhsS1wZBmWaTMxQ4GD2rqT2WnFjx72BK8Jw16BzjEnEeZkpWJz4K",
  "key35": "csTWhoa5cySy2gRzCDCUddFWUb9s3SGT8BAthmScJoNEBj8uH5vWYQvgJfY7XgA3TEHo28fKmAvEEZvEqHBfU3F",
  "key36": "62N5q3DfrdRNcJrH7ZDwixnGkJNW9zoqk8a2TD4KXVTYkVAqDZLCAkeYdxT86yrXPoJ8hUS7SiE6Pk8fD2Sf6Jcb",
  "key37": "5knmFESGvsekYPdRjwbM78FEEbsBZG6VJ5dLDLgiYH8E33UMhEyBZZCqnuhyZPgWJSt9RH9dzsdEn3s2XmCPkdRr",
  "key38": "eqa2cW7rgFJaBLDxfsepPMWuUPusJvBJuefarNzqNKHCn64DjV8tdUrnDi7MqcCPwuyk1Bxg8AbY3LfuLhv5zUM",
  "key39": "58ssG4u4gR8sLSiT9CxqW4ZC3Z9GwrooQ9W4r3HFFL1WPoq8bTXHMWx8nYkmMPgtu6eJQQNarMHXYVzt9eTNdP7i"
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
