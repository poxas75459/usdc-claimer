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
    "PGug1NPr3r3gauakpGMEHFzMdHSibRAMFNbQsFYRKTW7h91fWfnxtPorneS2LbJeYfQBCYRJyBZZjeKa8KAuUcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vmFb8haZXB9ACFBAYipUE8QZZMFL8n5KbDDfZHpdLDJVsukdQenUE1cHW83CwChTovN2dun4opkQWvQT3o3tD8d",
  "key1": "3gHq5YUL6BRgYHPXDuGFChmHeyHQS8bJpxjaK2Q8ePtveZccb1PcCYxrrDBFTHG3hJfFLzs6Jsn65FD5JbmRLGJ4",
  "key2": "VJ8UnJpZAE574vy5AbYEGW9LVt99KvZ52ru4Puobzvbu8XrohfmKQrDHLAqUiErKN8QSqM2KC3CeZpDyBSgcaJ5",
  "key3": "4uxfRtWJRUKQJFvVoAe2aeRCkybeHCGoxX7m1uUrptT14KMBJV6ZqwHGHwzyvvEEx5GPYAxAgAKFAL4NVoiqWChv",
  "key4": "2VALxmvZynXLjaQZPwvQaSLNxRChC8TpAVkXiNcMQdJScTJqYZLt5PNZnGuNqiKhvt6as4JnqHRy64RkdmUy2v46",
  "key5": "3j7QYTpi39u4wchJ4Whc1BoQQ1wkDdJ4L4brh2eWgymQojbzAmQfn3fqhNoHCtKkk2HhosV3RF5UzGJNRs5rYVeL",
  "key6": "FKBzrk8ttdHbNNUuVvz2n2dLBPMsbH9DGNethkjawrER3B3KTfFrqLtxCH7nRXGFwuupNFzvdLwAoC7R6DqGBdn",
  "key7": "39w6i4TW8aBJQW3gVjh3C2hb7rP9vYKoNPp29Cjy4ABCGgXYatwDT2UA94ezFjWeWxddSRXNHTac3vg1zeyBFNhU",
  "key8": "56eGpGVXa2JmhfQcz9L3G2ir15AZd8tKkBnsWb882zaJPJaCncJXwuozWxzMpxFvgFvMzWqdiyrXeWR2Xf13Z4PW",
  "key9": "iY2uythETSWSn7w28ZWifjA93y6PS3s3rKk3gbVF3EFcM8WCDAD5HRhyEtF4ikbXLpdGxcyvSr7ydkc9gzCFAK6",
  "key10": "wmreT2TiU6GJ9zeV8WdngNMGEGHaP3SnXy52DfLSPSeFy6VrwhWoqsrPzzJLKSXQuQHoDqRqHpcNQgu9H6UCxQx",
  "key11": "3EzcnFmCWgeepVnWaFdJ4FbriwTjHZv3au5vX4gwvcb3j5JKJ9ZAEz7hSWVQ1s94HrCRdBRUVSXLWorau2Gtc5PZ",
  "key12": "4tchhz5tyobz2ufHCLpRWvUYgLHtTpiVvC8KpMJFQA3Vj75rcYqTmAz3aWEYHGSW8FhK5E2KEQEtYB8G8CMbgngT",
  "key13": "bF1RRp216EHJUVFzgY4v8DFY3t56kbiFDBxZixPDbhKbNbyz75HSATJhw6Ygs4Q4w8xUGhxqd5FLfNu7s5ckK3F",
  "key14": "2pmGMkgfBx7a5AMFw4BoLEWme8cZ6nSuzyWjPkV2FYnanhJ3GLgwtbhioNdGGahQMGfDJsR48xhdawBR2R2SfD1t",
  "key15": "51X25m3fc174tmDjGfFDYpXvVLQnyoRXSQxT82Y2rdK3uTC78bpTheuwnHAw7uzutTbnFCWdnXuqgHuQhHDKFcho",
  "key16": "2cWYykxqiBV6jHYgAEVsmVwn4NFYYucTCRL84MJv9pY7Az5fGgCz7oWXD4B61d4sw2CKQo6J4zLk9QQMQwfytFpv",
  "key17": "VJ2Y2upqF3oRXTYLw8wJbtaYToLiKAphK7BHCCZJBSCt6Jo3v34ug9GznuTVXxAk51PFC2irkbQTkbYD1ZZR1aK",
  "key18": "3EjNZRnzFFQPx2SQy89MQeqiMRAD4AQGLcJTiBd6nvqjCm6CAANkLuiM8KpKbCW1bUK2xszgN1PVf5o3127kyKUu",
  "key19": "4qEFMobVRgt4iZa4aK4VPFsvUtUsUoQCBhvyxeyWsPMMtYPs2cxtxnWtEFoHgs7suEn5brjBo4jz4NrjMy1bNWBn",
  "key20": "GmxQsctAyFhtREnznkmaSHnVwysiL9BjwCm27W3s6NnE7oTFeZ8QQVntvHbqnJUktKuKHGmm4u8bKhPDaeJD71j",
  "key21": "2XWFq134tAZeqvpnX5Re8CsyAVSG7UNJcRfekFtn3L5xgRVmHtdQnajJnwCTdA5RBSGgDsYvaXnRNEAD5acBYhgW",
  "key22": "2mcFAgYLps1MecRDsUbLqBZEX4ySRNL3Uxg1js8gwT1qMT4yWDgVBurKGWmP5ZXWFZiDwjeNgkmTgo6JBgmzjv9",
  "key23": "3wrcwVYhdfAw9n7qo7TGAM8ghLo5upZ7n9DBXhaxwUKCB75BQ9j4D6M4ZqjGyUv3aUd5fcrxPpHjtPV2s3YTT1KA",
  "key24": "BE4zjGE3y6oW5sBUcKjhtF9f63XBANYfYnG5jia5DLGRNX5Znibfc2ZNfY1xJB4NPqaQhuXJDPu7aiMbjTEoctU",
  "key25": "29TEgXwhdwe38ZfGgo372rXwsA2jVjEP3HicFUwTQgd6oVrsYy3tJfsH8Q7a84F9APS9iAsMUWniCfgCp4XSrE2z",
  "key26": "4gVsUM48zGv6N8d6BmPRTgKQrQ7KZWsDnDNTMQKti66qcFD4iJVhTiqfRkRLqdRpQGcsjeo1TKQFdr5LSWW8mzc",
  "key27": "vSyyUjWkhP7dx3jaeo1DSVjpANUzHh8HaVfMnTjfTDAF88hTtc5nzAxtApK58BXTdNUWjV5aoTHGccZeGbo5CYD",
  "key28": "2W4bmfPEAvTRYE2Dqh2dvY8ohWwsALYiUHDYMzTXCHmQ87hL6gVHrgn4nDiAk7XPafSjdu3JfAPjkGMSzXKQ47UX",
  "key29": "3XudbwaFbFxwtu6PeYEpsfvRanxzN4cbEKMfetXGpZkZknYniqWw2uP47WjhBhJQPxaGMPgScoEyLiyv4vd1JScr",
  "key30": "5h1sgFZo2t5WoNoA46CmWAh9JvyVcKJYxHcmjTHmY31cjKnaq2in4GFtLGPZ9BaARaXEjbSNRuM9bPXpUvn4ypPJ",
  "key31": "5CgitqVFAsFB3Fvh5H3in9Kkw2xMJZxV2rfjuqKXcCKgBu773Fa2tr8oTY6LAYKp1p9ctsEvBmFZN8JbDUgQwJSo",
  "key32": "2NgXGR4FhpP9UC7moxuysoXsMTcJGLeEEFi3V55SX6sUGRv9BLW4dMN15bYzz6swUUU7pK6G7ucUaEC6Hd4CRLeW",
  "key33": "5p5ArXZXnRaCs9kPjEtjzH9jZLvwemvpmg6GfX2DQeZgzwyQPibVvoKwiZ26rFWVeBSFZKctSfHnPSGYwT1BNZsh",
  "key34": "n2oM363BqyMTfDXpzBx7XKAkukF34JrT9AnBLXWdJqQ6WfAHDThMjXvShrE65Jm7PJqXyi5KcA2dnr9aef4sRtH",
  "key35": "2tsjJ1LotAmUDobSqf2bzGLJcPq628zWYNHJWNvR7x5Cn5jHXMyd932YkVQRkR5Wq2XaEQKqTMHwkUnM2KpiKF4V"
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
