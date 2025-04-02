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
    "inGVox4A8xBniPcb1rixwoKSKcLoZoZzWNuQupPZifDzQ2Gtx11kYRJwY9GmyovxSQqnXYhCc9omHFBJZcMK3te"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42V8NmVNC38HBbkn3JnhhyaVHkwNVMqY1UgUSbNDGMXxrSuVNAz1fK9S6cy8abnm9VuVtmLG6GcJp8btuC4Wixzn",
  "key1": "5bJm2UeMRTBBEPiW3vUb1S7QpbjKNBAA9voA4WJxZGSQAfc8VBevxcExet73Dxoqmxo2C6D41HM5RUZdbw7VGPpA",
  "key2": "5JfiXazyNrSS3Eae4HCQseyEhETejjgzZNQcfq9vAQuKG1aiMChCnfb4FZJV6FFrSHXk1yTXKWLiskytTsXw3psx",
  "key3": "5PpnKH1MLfcY5U48Yc3mk23ruGSghVodtyMkUR2Z3mLzbcVGXj1t48b28T7dov27P6hMFvgkdU5fb5XcDfuwPQuk",
  "key4": "5LLk23XFHr8ppwBMdjJEJ6VMmSJ8dtWBWZEH5cA2oNcSbuNxrQLCG9j373eGUQp39TgiRgTFgQLkaU2p8rqmoqit",
  "key5": "4VyAQjyMN7jTGqDmbRRrgU86kfpDhwmvTrbjyvfYaCMhBeVaXsfXdtJbXBXJgXkUWw1iu3cxg7U9SW5HhDs5HZd",
  "key6": "21A4Tx7yorbsHjaFFeHqAmPYcsCVCCdJaPbDvrCFKcKdxQNWYdK95fvvpYLhqNAv62jp9FxU22f2cSVqqXhNUTAK",
  "key7": "3RVxa5gd9s3uD9PSSuUytjyfB7YDzTRMkKdMC3JL58tEH1dCYBynaYN2mctzpMgq7CDTzG5RZ15KDfXxmRJubC7i",
  "key8": "5jD9NnqmGo6wgjAepfNDvN2WCfy8yCqW2g7cbScfwVXyffiHBQUYRyU9fwqsCNiRZwDmg5g9muCu4f5s6aKoDqZm",
  "key9": "1deGWsYNEq9X2y7JbP1qXb5SmMYbLxvA9MoHuzqtSDCoLjw2BRidoAYwuQcWFd3T9fa7yq1wy7xgtY6cKHEL1nH",
  "key10": "fFEbnN2Q8DPg9nHj2tpLoDDfiqwbjt5G8zbFNUyUyEkadpRJqcYg5EnpxHmhDb9Vzv3MbwKa69JXVUCR1QN5J4H",
  "key11": "24d4Z8rR3U2wpdCFKVUHdKahTsekfPzXuTWUubWJskahFT8G8RWa4A4p7YgTGjzGxa9BWvRyuLX3ut52WDFR8e3d",
  "key12": "3JqUvErKMhAqsofZsqemP9jZXnsYa4LFpjnvHJzCsgcbAZhRwEYzaGebcJdKvQfu96FbmF38NyzYVAkExYHSNc3T",
  "key13": "5x6aEGVACch6D1r9an3tw8xab1X6zmZB8dBa4Q3kd7VSgeZpyT8asFhsvUJcmBY8SAvg5CL5HETdDWM7hvvLDUVU",
  "key14": "4DyhS7h4ATmgtyeKxtix6p1xrN6G3M7CoiUhTM5591bSRvYnaZMmHZdgcDgMLDejiecpFvkZatBpoFeS7MNAwbRj",
  "key15": "2aHXW2iXVnxJU2cuFfsmtqXmVSVRqdipYa9asguHsJCXE5s4GTXJ9EtZnXKKyYMpHAvTDfqzHzeMQ6HUNhUpviw",
  "key16": "5MD21PQQS7PFHb8oHe1yk3BhNDZbqitjV5b4aPBrPooudbTnvH99ooS1jexQim8WbFJABBqxmWJBbHh6RBAvrsWV",
  "key17": "3c6kXwebEisBoVEwU1d9usBb32XojoYiLvDgE5E7XLzc5QvfwXWefFjbSPrFCkVCMLV6SA5yWPsja1FYYmeywmRr",
  "key18": "2aSX6Xepik5FHuDhkCBKXcQUu9rf3XxGc7Mp1RSpLnYQd2vxakKFxUZoDVA5DYN91Jr14iDuansT225Uy3R7Y1zM",
  "key19": "3r7xEM8cDKtKSwSxEM1qrmz4GoCnAhNM8HJS5ACh756DvNXLdnUZQazvmxU9QbgqMNMfKykHNrE1Y2poFhoXQz4m",
  "key20": "2RNmwUzE81UsKZEeHhsowgpXMAKqsa7hoBc143M6keUaGZUUjUgdgup3bfRng9ucSfxwqRrH63UR2M7F4zFrkMnd",
  "key21": "SPwVv7VgHoqj1c5ePU5gNtnsXf77J8m4pKBtcBhoqripHKLryaa1ktiE32Ahu8WD5xyuzeH2CC1DyzBynDoeecR",
  "key22": "h69D7t1ccTteevoLm8KUnpT5Rok4dudS8TkuMRfoyPbkTmtsB3p8H8u6AvCSXNJLPfharta3uiNJUnvshsVa7iZ",
  "key23": "5Ga4b6TCa2r3Jawb4y4ykMMT6vpycoodE1ZPNWB5mSx3kcoyAnedrMyhLxtyC6dEJhsK9qvAAFXZguNGx673vDtS",
  "key24": "537EnENmo6wDSCEARdgT5VCa3WYSTuRBETfDs8X2EVaFyosdSdpBked4qVRALRUgA2TxY81JLpvMYn7G3pqzfhob",
  "key25": "3rnA7NSpJ8ubCjPZfZt95KD2PY3njbi9tDvGdHjpJDaPyZXnQvQQ15iSfc9JcztkjEHAAT153Xk9Fh1JK2XnpaNJ",
  "key26": "2DTbbojaob1QEpPfvgKVcoqASWxHHxGoEFbK8gsyqY1Kt18yfhjRXyJNmLrcFL1hVEFXLaV1Ar7wxA2EJHpUJHFk",
  "key27": "4potKhsspRv2yRbEWnh7XVLSHgoSjxi8o2FxFcE7sKnk8ukhpU6Hmhv3ZDLu2FgfJd9pZr5jbTC61SzpRK9w4eTD",
  "key28": "4W9kcuscw6mtB4Ea2ens7XZXKcRkekV16FUt9kLDNvaJrU9JJuAoosfv7bx5KSbS14nUsK1ybWEeirju4v689VPQ",
  "key29": "4ewaGmBhvwEmSptVkTwKYK2WhWNWBPNGuqMAUHvdPxi7EeLyD6pSfZoYojg35xehj6yVBYixFsVnaQ2Ngpxjvn3u",
  "key30": "3pXmWrEHyaqFfzffScc4o3t76L6kvpgvDkUJbs4mXS8CEMh9PdNYknQb2zfPQTqn6cEyeKs4ea6tja6kjqajYcAh",
  "key31": "4BHLVxYdqfwLGTRb6DRSnRou7gXzwGqnEDJAMH1uJ1Ucvgq5j9QrW9fZbkTACszJkDQDfMfaGLDYCgdUfghhvWuG",
  "key32": "63mKb7mAzhFKeuUEKGuFseqjJSzyGEcSHg968f1EcQYY98wRVnurPskWpibvYMvjhHotaywfc2TanQPXnzmaLJib",
  "key33": "24qFQsqDa9aKk5QLyVzpoVRgntfwHxKALcZMHoCn6GhjMLCfBeiCzVvXb9nkxqnDc9K4EnTHPdFF8wJD3374kBVs",
  "key34": "5HAR1WJFd5rGLUTg9pgkLvyhokgtSLHWRpFYi4Un9hd3sZB3wuPj7q1XM1uH4GmXNHeMsdHP8PGWHY6AL7ATow19",
  "key35": "X27q96kyERz4rJ8PePj8wzaWmMZSnPxVQjhtzugRbPA5o5QX4hMyhG4JN6V9RrMXw8BpY2s4YPb5RfxeChWtu1W",
  "key36": "4det4yQ9yR4ydU8yoiK5reTuzbwYx4VQPQQG2tvx4Q3FS8yqAesY1e7zoY1GWU8SZVLumEA5CgkDfhaA6x6xja2P",
  "key37": "A2URnujsZyFkickPBEic5a6CyKBc6bKgpAGkmEAhfmoYcNMuE7HyAfFwwyi8VjXs9DrSUCzQW2L5bMB3GR6i1Sm",
  "key38": "5ZAHjuLDNUYF5zEZ7iGJPecNETVaWrnqz2ZE4WJh53DHhabM29oYK9Z6AHxkvqzgGmtKNUBca4QgzjDLLuyhnhM9",
  "key39": "2ewpDRRVaBgU3CEYHEUwd3v53oBZ2Qx5yZh4jnypih91XjeDjBW4QFVxJ1dw1zd1kAN1y8DdAvdt9euHcBoqpHEj",
  "key40": "4LXLTndjhvyqWimvuvATGqRVgRvz8qHPGmhtwZsXap8XVnwpC1tPZnkzi6Tp2obKJbUaz6wYZpNaK2aaqhUJ4QZF",
  "key41": "Uvsd83AvmgaStoxLZ2R2ZytmQaG9mhc6XvvN4GoYrWEevihRAhmhMKpRMdnjGQrp7utNZA6Tk6UiwFoHsTkmAm6",
  "key42": "47rA8Y8Lo26FEe86Crjzk5D1wri3bEBAfDPUG5R1oyy1TT3BibiHq2izhNddzPPBfuLApbBQG9ge2t1YXYBx6wra",
  "key43": "5K7Po3fWVjpEM669ZzDMXYdUB3V53GfPfvDbjpqhj7g76PtbMQZmu1ZxLRtNsTfDYfCYyv6quM6TuVguyy61pJBF"
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
