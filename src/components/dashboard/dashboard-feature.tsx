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
    "3LpbZNBL1yV4eR7WjiUzKnhA1MeTtj2whWJ2Cj4H9bGMb19L4xQKazJM9GK2TAvfSmBZg1wDdcS6oQQ6TMzmLurF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yshYAkrBostmvZLLsagx3y2PpVzWA5PFpGDrfxtsXF9WPM4mzj1RHaqM7USjXh3Js6FgEeLGxYgP7DcBsgUpr5Z",
  "key1": "59nu4C6Hiwt6CWEExbeBmF7iZqo9TJTyRaafxxSShSjY2f9vX33PfazWc125X2foRRY245Jr6erAWDQoioqDmQLf",
  "key2": "m77QZ4hjXNcvQbCfbsbE5yB1VXwEjDctN31H2B8x1KqvBpn7d5TMf7UfTzwjdHzyGjG9hCCP72r4MZJWwPRQrfk",
  "key3": "4nQU97NzsWLi9eeEfNoQ4N52EXducLtj9qGJuqFGgzYeHdYotw8yyoK1ZVD5HvkZPaHNyfv7swg3EWBCsuwNn8CN",
  "key4": "2QQenH6qDMyJVRjSjjs97DMb4Xmat66vvJ7ATTmjEYzPQ5T4bG7tAqykZJR3GSGte2iTqZRMpnGYewQDF4ag9mCP",
  "key5": "5UeMLjqkTCMdu4TqEsXsUVvdXVrpFjuHY5eTv2SbTcohfnEwPpbRTnVXBKxgThtPfsMLf929Ekdu5GngCMSejzSd",
  "key6": "5YSPJNTHEHHTPi1HkRWCnvi9v2UKdsM8qG1FCaJbvYDXoQtNagd32PMiJQnPuF2n6GLrwcwpyExs4cfCunf3SeAx",
  "key7": "5hiXNB19zrRxCdG5dnWz3MR36mnirS1MWRrfbN3yokn4vPLcEtADjn1SqzBBQBH94K6TfXZUYMroGr9euUhGkzde",
  "key8": "4YuKn1FMMcA8y3Ah6UMygkxoRavWDMWjzL3RcozGGY5qn1Auxh1BjySyGWa38ThtNWTou9L4CrCZxDygfcxv4QEC",
  "key9": "62M8FidCMfccWiSTcqdVpdejTwq45rPuR3PcieNSoqBM4LszZ5K7vCuP7T2kZZuAedPUaMhPK6t8Qc89q4yNpoHX",
  "key10": "5DkuKrUdS84eZNNCxs9mkRT4ub7zoghE59Zrg3oSF85qA5zJsydeh2USgCKojzzbPzxumDEB9vxLGs3Z6bmQ6CYg",
  "key11": "5zeu1cs5t7Stihfb382SJbKnESxRktgZzqpFQc7RZA1eMk1vg7Xn2Q22EjGJXyS7W8J21hUkdap6DDh1Mr8PWo75",
  "key12": "55LRbYzkRnefe1NABXZkXP96DMTRjtZKNawFrgVuVjWPVdsXvUreCvEehcneRCfBjHydPzcEpdzzCyjx6J59hCvC",
  "key13": "3PNXAZhi3hTP6zd7rJcFKN1RWr7Q77jd4GCb92V6t1qDAkuTxQa2SjBS4cvdPLkQMUAMtA5RYCPyrghqianXwiB5",
  "key14": "4fRSfppL11uRS5LQ28k3z5kxLavXzLPUUCkrT4bpzwJHmSnddYou6VHRndjkbTo216Kbupvd8AN9vmPgu3bzDrxk",
  "key15": "56X8fvcXBU1tyk5sSAiWB3sDP3ykTfgJff29ZZeTn1kL2fCy3pTGFtN5L4MmJLvkNx6zF643L3CRKb7m9zu9jTDa",
  "key16": "4xzW7uL8r5bpjMmKEgCUDQHJ1FshqXvN5Qj7rjYkeobEpPLwW3rjEMykhE2Z2QSSDhkqYHmKpRqveAYpGoVo1jR7",
  "key17": "5Fm9riezfTyK4PshoEYzUHb2rqzB1PqD12TtkR69n8PHtcrtEQ5HdtNKxNSmFTj11ez3SM2taVbX9Dad2A1HiN3G",
  "key18": "2aDNzdKGJHYejkVxv2AzonNhUtfdJvfuv9AxSgEtZnzxCJXvJE5h8i8smsfSjwLMv6PpMdYDx2Dy5S3oYxUHAaTd",
  "key19": "3hPUdeGkLcv2BUu7k2LadodLnKi7qiEtB6L88DBhvV57pr3CfTVSCjNxbFpwBaM5PdPmQ4oPVWdVhKVCRAhqkxzP",
  "key20": "5gcy1JCTX8LN2VjF6R7tGJC7qrALBE7yUeavVwZJnHVGSiFrDa2vkKaNyKwbrp88o5qHpGpmmSa4FoDx2MzS4H4d",
  "key21": "qZtFzEWxPpWXTZhr1b8j4wAVQuRHAm9fY6FTDeicTyBCDTHivXnjXnVmqaEC7cqeu9pvjYiycrz7ny6ggMfKb5p",
  "key22": "48SPzag7wiw8SNWmX9Zu3eHCKQzkQqzHaXbDMuXq3RpbXeeQ3HGop2LxbNZyUJ8zVZDGhMX1eP5XtAygEKwPsJfu",
  "key23": "64cH3iXbNTgT3W4ZzBWJCUUnUpUTVwsn9rC5UNWqiwHXxJGR1n8WA2GCXWb8dw9UCbAHk4mMNe6oC2fpaV4z2Nu1",
  "key24": "4Zcx6swtXP5MabRwVfymhUPQGSSuFcFft1jECoAKCbSsGziUXuqZ2JfwUzfkLJo2ktwxmSr7Y6mYEpbykiYNkgfF",
  "key25": "eRnJMQU1jvNm2qXadn4cpHnb3Hb9zPxjEvSbjhdF2Zvstd343rCYVk8jHwkmS7HQ9uxMJT79Dx3pALkkrsnPfBY",
  "key26": "5HkDei7wgD6SnQGBXkqb5ey43TZfsCCrhRZXyxRnXkpkgSpYdvVWWMaVtgjGCa7krLrRRacfqSUMZiUEoADGnyUZ",
  "key27": "4yT4Aw9MR8GtdqDr5wNiZkBmW65AVEKL7evp6nyC2vqGqCCEcyx4p4nYGnpSBk9qaBtYxdXWcp7f9juZxUJAZHu5",
  "key28": "2kPtqsdzj9oNCHMH4xKuBBgSrjStB6usSnoi8FnB3XhvoRtiSFqAqhbVQLmktZQM5KSpmxe71mwuB1d1A5XQSU53",
  "key29": "46BodnvGJZbU5bdZaraHbdevvwvZBRtLNMA6DuKVi4kgF599Uy66vHDEvenH1USu2Rw8GA8R6No5SaJczaeLkdWm",
  "key30": "3xWsbugjTwAs4j2ZCUjZF8YRYww6HUbZ7ZXUqxZkjSeDbHGZUScvKVXrQtt3SFm2XsxGQD1uySK2kUvYPy8Cu4XT",
  "key31": "4NFqk8yzTUzxfDniiPWC7pRAkhTRiESVybVnB5RG9rn8c94sBgQy1RUsJAYnW4jEVbejaGa2tNgJscK1fubQrVzX",
  "key32": "5xjdKAz9C9PVHD5GM4cNM7R8FS9MUKyErJJknw3fFrB38QkcjZfaZAn8u5YATVrBqEYrZgHuKR9n31GEn7FrY9ok",
  "key33": "2BwyEQPQ8TtWLGWSjiGYrYXGyisUasiumepYJe1cKnC7Dgj3hfXc4Q67uaRUrWZzNscnWGtPDQQZiVSGCA1S9YvD",
  "key34": "5D8SWxjuweHXKEgZA1gmMjaC9iCYWFVvwcmkW8JboU1YBbXYGkdXRjsdUaXDNC53Q7TuG4NCuLcwPbBfh8ejoqJi",
  "key35": "35ahx3x2X4wTQbZM1MydTxUWmmmzVeYzJ5VXioUNoUZUSvjF6wzeqhBdfiMRJvHwgzQ7Au9KEuwEsrjSGW5dMwNg",
  "key36": "62TACNixTgo1PRCBhP2VfQADfm3BgvDaAgxUHgJd9w7HFxYMihd6ANsXPbX8zv6NnRDqk85VjuC6fPDFLGCMzFZi",
  "key37": "5MGerg7uav48tB7vytHgqPN966QkL5oRPsgn3NpEJGdjxvC4dFT1JZocps3qk9YvNdJJQyYsHQRjimgk5oHRUswk",
  "key38": "p1EbR2jJKPTMvcuU5fHev5nqWskhttjdLESpBQEJX5xrAKDcsBNJFVEuMzFbWfqQEaTQbTww7sPE9whzkNPCcDN",
  "key39": "4hxFAchjaQVNEL1P5WViVymquzoz4jb9ySbJv5UNxNakxL2hvrVMRX5MRchxcvxopV4vm67xZvr2SVxzGNbvsCNX",
  "key40": "2YErJQG5zsiPyhysoFyQKGjpaMcxzQeRZuA5HE35R7t4cFbeFa3SM5AWsDtgZgXZbXqEMSahEfowynXago7U9ZDt",
  "key41": "srGUs2HVi5VE96eynEyuYPLrXM4xAzV5mTgLfFyYPR1bTZHvwvUPMDNbEiAuJkJSAGtyRZt823biz88ELT2LY6b",
  "key42": "4UAJQfnGjKCi82V6f674nYvkNXSdDJjaKUSTSBBnrVbyWePmCNSXchNa35VqrKTvQ97meDvQxZQkXxXuiA6r4Xeu"
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
