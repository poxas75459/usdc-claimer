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
    "3asH3UAnQKMJRSZG2VUkeXfxMudpufWFx8oMw3MCXQRkGWx4mCD3grJP3GDW1BkvUiiLvcUyxfjHGrksS19D5g5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nLiNvhmQqxaMmG25UkrQ1m5UY3ysoTCDHLjccdwgZqh2FyXb1ad4YrMxe16LMxv4o4wMLdZBTnTBLXzAizJBQef",
  "key1": "tkgi96Xccds36iBDdxx476DKsDRSfZaoLspBi9FB9bzPhFnsZbioAJAagxmGjKucvPmecXAX425xHqisefU2zuy",
  "key2": "7jQ3PMwdVHbn9UYGN9TbgipP9mGNVajDeG6VVkDygBskRP7qWhqG3kYH2aNmTWt1dvC1tPv4Tk69R3tTBwZPWvw",
  "key3": "3qATy2CGUrBzpzzArwFKhR6ThD2UFjqJWPSLg7zfNAqLVWMSFDqRbdvb3fBtX8sfaDTrq6C7LhrSAg2Keg8LveRN",
  "key4": "5X9rZzPzhzot1rRVcp4yMSBqc6tgnKpkCWuqBCusL81JNRDwmTDoEDfQrogzrcy1CVg6gwkdvM1uHydH7p9uTeKq",
  "key5": "GsiN9ex44YWhpoFgcdEjNHQ2QcwYryXz8UHZXjHj8FzvcuQ7djZEftkqk7Z6rP1Hxa8Cm7u1PbWrKjXAm2veWNg",
  "key6": "UqckokytaEH6JdXuNeanMpnfyfqT1CMkS75i2Sx5RhYSWnQzYctph57MzR7hUgNKpDznbZptGT7wmfToRyAHzNd",
  "key7": "2wLvwpv3GhDG9rgEHrtuTCXzJBCjFrYD2ot2ushrCwZeTqsxaqydxzd6Ais6GRvhvJ2Xh6yg8UNwegAUBtjYqUjS",
  "key8": "52nNEGf1i3WADi1LPi2kArhdYRQnm2ERVpS3iGckbQiP6EmAHVfYhpKLRdpFQen2KYKKhu9Mt4PAtuH98QuyZV8z",
  "key9": "5A2d3vPeWuBSuUd27cVTqYuUDafKKUujCju1bNZPHCjhpvSm6V1SXUqosvax2WWnHAp8tAvTSmNDvc7qnkoDxJQa",
  "key10": "5E9BRAuPxE8EJd8yF2ozNV2Jy8mDqcGmYpVpqVpNDGzZmjirpSniuRg4bLWkpY3mNnSjfdhkwoNnHjtExKHwcZTs",
  "key11": "3Rspx5wpBDHD3JSNw1qFa5p7J1XxxjbNxKaMeNJHgPgGCftSPpDtyVDJVxhBsn62n4HRyUHhooUupKcZJ7jiS9mr",
  "key12": "VmS6n2KXV6eATxMXxNVTXaFG7ZXUUkUfvDtYjxHEMYwExX28N91WiuzQbP8CF7ZwpXrcgTH5h9Bo8FqnRMSVWc2",
  "key13": "3hsWG5eRDBHtBeEbxWzruCZ7oQspM4MJcPCdzRmNjd53pQeXGiZDMzv1NsptNoYrXbcw1heyttneDx9Ph9oWGp9V",
  "key14": "4HH2CUYvzwDgxCvhcTKTP69c3qsDwLFveuaL4Uq5RxnDGhGQrJ9RchknL7MkqJtctBmd82H5bk8xVCirdGwwM7i4",
  "key15": "5LkNL8RSw3AvAB72vjh4irthdZ96WiodvNN3NTVgPJPid4hyeEunrNjk7YKy1kUa46brBdcLrjhe6bKpyyKQ3XcG",
  "key16": "2u7URWvpTX9dh8PB9mL5vQpVXupkvFfAUWwSe2QJyZMUZqy1NQi7vP64J5sA4BvRejyAdT6rwKWJvAzyDNkHm4T4",
  "key17": "5gkr6s83rVC4mJ8FHpFfbGwC9Ku2oQ3fBkLGAKTkqZzx6nx5z2SreF4qzrhNvhAjNGi41DrBzNzen9fr6s5FWxQR",
  "key18": "5vuZkwuw7NBnNvcUpb3MdbbfjHwhJpoctJTS4VbD8vpZFVJsu1jdYJBomS68EGXkgA6vbKLNfkY45M2TuCirgf7Y",
  "key19": "4E1FN4ujFSBugPCJfr5yCtJjVFwXoGcix7TmcXJbYoSPBdaoeddPE4ufRfphUPvLb6w2Ueu9K3dx4rJPZpf3E9U7",
  "key20": "5g7jP4jtVM1PJMAY6SDFXnCZ6VdttZu1m4YitbfXnBeg7izciWwMMcJ2KfDCFSxrCCXo39qmjNjCPNbvGceMcj58",
  "key21": "62zpqrwDNNb7wRjbTc2WrNzj862rEoUKq5KJSaubzSsM6LLtjVRDoFMqpcyYxpxipLpysz13VbC4EX1UqEE6PaYu",
  "key22": "5HX5G3rJ1edtuXWFsz372z32ACMQU4iofr552czs7hpMGDCt62YtLpvnY3XVDWPgUV9hc87wnESaXsKGhuFAhJDM",
  "key23": "5q1CHNEJgmttadAH8EBDr9Nc7RhTdPnedEPNSM1wUTcAfmqErYkazi1at2BV417MSfEHdBFA44rdymFm1QmtdJot",
  "key24": "3Lcf6okCZh9HHZKomwL7kBxt4RsvGVX93a79MXq8Nn5roPj2J5vjVTPgkQznKCE7xqAFCFEV4uBn5BFzbQYg4M27",
  "key25": "2enAMcSbhebuNK2AUwwZgUYrGzWnJPFunqFfvGgFyGY3GQPidVzwGEntmtnm9ZF5irrcSdXbdmAbkpPdMnYkLWUM",
  "key26": "tmZHzgixC7XyRVBKBzwiHxLy3JSw8FACou1VC1MC1Xaw4a9B63VaSVe6fiEvf24kqQabk8eqh7NQ4TMZLGndnf4",
  "key27": "3g7eHE8jHt1THoktNhndGHLQgfm7nCJhW5Q1z7Ujae7G1pcowjPDPyV1chWQ9VVFepPjKyVK5TnMj1ummfvv1i4z",
  "key28": "sbhnA488xY5kz3ZLKhgocgfuwxu5KCPMCoGs8CueGUjMJ8QzRG6GUcWkY8RSYx8jQRGQjfWgWB7d83MmM2RcDnu",
  "key29": "rkH3iX5tN58hK4zXkneouPVKxHUFAP5hZxjtRKK17rSuHbNgzusGRjbD52aCUzt21LZtDaKAZ43ymu8pKwQyhms",
  "key30": "3WpiRhR2FFGRCkZTaeDAmKScT5KNfXyW7GmnjB1wAqSmuAKvzAkyWkJKCZkD6qjiaDKwa3kba4YoRMu7hheMPQYg",
  "key31": "2gpx8mnaZ1uaaD7uH5A6ZrsJWAWbEmNoFWBz4mYK4xXRb1zGEWAkGFoqzf4z7zrZqnFW2kr4GGoCnp9BX7wW863d",
  "key32": "FrZ4vvGJDr5F7aZK4whWn5GWRVSosnmXZGXM9qarARJsVWEaKg5jYxgdYngj5KnubmGP3nAZ1SsrkcfroGuxbnY",
  "key33": "3ubeDUMSx16jnGfyYXSuJjxMWbxat9HUXFkQ1rjVhCRQDMWqHWMDU13EKd21FF4h29iYzSbmrbrjRhijgusQCVGe",
  "key34": "2ptpp64TBT4Y52zbduFgCbthVRP5yDoWp83KBFWXdGU8cjcoquCvzM23d3HijDKXDF8bFnkXvfBT7jDdqq1NrjKK",
  "key35": "3QHNiEoPxj1aHvAiKWrwiKF9AsfpfXQQXwLz96B6h3vuFKEHaC7Wn7kznaCqAX1Y5ikGFqKAgzuiW9pw1tc9F4aT",
  "key36": "Bii8C3tcRZ33FEGChAc2gmqeqUcdye2VtXGwy6nnVQcFh8K3Smh7sPpBrdEKZXpWZQwnQrHyS7qenZRxfWFmztp",
  "key37": "3cRpRFRzJsZN2zhihMZU4CsyNa99YwAJTVnW6suupgFYxhSdTHAypVhw8BHcUNEBXUV8C8w1fbfRLMG4FiK7bZdo"
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
