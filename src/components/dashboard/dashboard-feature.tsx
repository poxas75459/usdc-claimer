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
    "Y9yWDN1Ri2Kus3wrGRnJa1uUSLAYW4NqRkeXA555FYdMKRsDb6qArFqnoMwMZgcbrPA5wGMsrYkiMr5U6XeSMVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RuoWGCGKPAt2bFbBK8m3XSL7GrCCjj739rqKNHpRDm4UQcRKXRGgakXBXAgLLAytcJidkCdWExGynpZWeVZkhtB",
  "key1": "2n9cyuqWFDtm61ruPbvCzmuAGijs9LXUTdZq3a6Uhq8SMxgbQfeArRyuwj9aQ6rvP8jUCGHi6FMFwtobvNzUYp1B",
  "key2": "2t9YWx31ZojG3cFvT1pSkSKm2kkRTuVLMjH2BGaEfZUKJyin4MVBmGbpzi3YfU8D3vZsT9cdYcNRSzR1v5Y2pdfs",
  "key3": "be6PzZTg6eFbfo5bnBXb7mJ9PHrjeacZwVAUQ2Uxd4spNEHZNcwiVr7pgFqSocGJtURzFi1EAAm6Y8ip5hQPEVn",
  "key4": "5hrEBAr3YmjayMoeH88z5d21cMSrfKSEQaVCrV3V9ji54pkPmF8Kc6qqALKgvqnuV4kWDtJstn591epypRRY8zYZ",
  "key5": "GQteDGC1FbQdZRufy5rUE6dWdSa8dQz2W24WZuAho8pBgWLcv26DzrgFE289UHswBB7p4pkydkvQ3Wz9Kd3xWPW",
  "key6": "27WmpeEqWSUWQcVucXc8UHCPXyKJebTgoBdNiDNet4dkkHjBhM1oePiHFmxsbHE8DyQQo4Edc8mWUhyjshjbsAkU",
  "key7": "39bnUcj8shLSpAtXzW3RAbAPEdqKKNSjf572zjj5pV9s3pvks9sbdhdKerrz9N3W7tf5mUKAyTSYGXsM72wXTNDF",
  "key8": "2PE31XEbvfJeVyBCSNWxA3CVjTcqvQvnukmoyA4ourCfoo2M1K7AE11Cx4dGmLnzC1ZsXYo5fWDygv6YTPtM9ZCE",
  "key9": "6ddN7W2LpYxanH8Ktj9cWBSkcgruy6f73eByWLKcPR8qVyMFMJMZFxTtJCCeYcSTosKdJxvVHmfWyDh4937hrcC",
  "key10": "5wS2cEXMLsnHRMaJsP7G8duYPCK3zL8Mi2kfa2XHZbbi3CDkkLwgLtsJ2X1a8EQTA29BTtFQDBpWf2bgjqdK2K28",
  "key11": "4T6PTFgX7QXNQhaw1YDgA57NR9roK2RoENdEnyvJkf7ZadcH2673sZaQTMDoqfCychgQBxiceuK8oPgW6vd8pFp5",
  "key12": "36pdYkNKDQEZDrVxBKhJzJH1fCspJv4oCEDP3YQDxoMDLj1SbLmMKxdoTf8tDpsiz92duvGo3JXV93AJCXexJEbJ",
  "key13": "3v9HfjzaVFoj7NKZfoUCE8qs77QcBqmDvd7Reoxd4WpG42gasrU9WGBAeJeFnNUfwibJNyHiZdfQtRkw1BbpQ7Bd",
  "key14": "4uQsyfS8Qhhz32yXkcqmmfmmvzTvoFaQmNnGJhQqeWt6LbxYSeAvPTquS4FaZyss1BSRijrGvtTkraT1LQ4aui8K",
  "key15": "dAcqXPLrBpXTY7Yg811tSUzUdbBLEZBdNFcboojCHb3ko9o6HHVXUCuuz726wxfBdKfJZHXfQRE9vNbRnFF1d9y",
  "key16": "4hPKnEdTweUEt7uh2MSKpjeWmuh59WN5dudXan5k8EekgYaqrCNegiTC77bEq7GPLSNAFMaTaX7uKTNSiAk92dSN",
  "key17": "4DADoYerZMjFTSgwVpagL4k3pE7hhKWeHCKB9AbhugpC2tDu8GcC8MFP5DqgHtxXb8L2B529od5hAUKwJeJNGdrY",
  "key18": "3fe6PbeQsiFYqFos4uqgCkNF1zZWszNmfGV94CmndY6jRnwdaXsVMT5UhxnQogsCB2AYjLBTCtHwaAmXshHUWtJM",
  "key19": "5EUZhaRZQ4zv6j4ACv1Gan4daqjKvY2huiSxd8dDmQ3efaRDuRYps6JCuhd6SByrk3PKNaUZFuE6o8LRjVmP552o",
  "key20": "3qKm863FhL6J8QpeTno8Mj6aQ4GcokLkXoZnfiyDVd3ECM8RAqRbxepiPDjnuMTRMeSUWZgVo4vFCJ7hHfVFqEvo",
  "key21": "5GwUpyvNMuURkfuGmprVhajW8vzLWYU974UxVeG7YwnYGmFSFHnN3CNuBTVV6TC7svWfx1BC3Fm11QtLt2Fe55tB",
  "key22": "3fGUWJ6Ed7GuFJg14MsN3BJwGRZqqei2ykjLsPRahz1hqsanmeB6t4no2U92x9RtKqtR3vrRh4wjTr5B6y1UPCHe",
  "key23": "52oTS2uAJ1bMdNYgdS7T38KJR9qX77Z3m5XY4MqckiEnUBghKTzd2aaneR7DhyDMPJfpes2PiUJJoVTfTL347i6C",
  "key24": "DX29CkrXmWByaKJj8m9Mr56soUmqZnUhgUaSAdViUym8ueEk1RL43CzEcq8Texh7MYEpPKkbxkbFfUmtabu7coC",
  "key25": "64xzNp5gGUgBvom5m41Jg1nsPhTumjtbTZP7yPeYN9cpzBKgxfeZavWRBHjvyxuUCdtYcomhEnwV5beCEbNRZiZG",
  "key26": "21QX7QwphKkFuY7fj4Ka1pZ3rMxHPfNiJs1zXN99TMqLVPtBf3wU8uCHYDiGngQZQjwpnBoSkm5cDaHX39n8Vm2x",
  "key27": "4bn8cU5X392vPKP7R9ohWRyvS26HUPi2hrYg4wg6xTuH8n77cPRuXu4QhkWzsbA7LasyFTUjWNmMY6AYmqhcostT",
  "key28": "537CbgeoYksL1Ba5PNFc3UapQzN1DuXL7eUv1LbRmmUtTz4bLkwWsjWWKKMay34rfZFPbQLCzcmyYJChzHX5rU5t",
  "key29": "5PJxwA8YxVZg6mppEsU7FTJVQW7c8hTDqCwWH31fbieaDudnek9CjhyStMVHM1ZV3XRRsKeCUjPsPyk7aRzExxGH",
  "key30": "4uNdqNxoDgVrWXtdFFt3SffFB5jRm63Bdr9GEEhas7dnf7ry6v1fxLebfKndxFCKL1NeLHKjXzhEVBKKttzcDyq2",
  "key31": "3G9p8UrL8kjj4Ugh2H6YGaNB81RSz3Byc6suQxWmk5zajMZkAU8STSoZRwm5aySbAa9SNA6X76vQ4ySXtLsTdsyT",
  "key32": "2hAAne18HLKWLZn41UKZ8pBwzVjZwokJ2rBYXbSvvMHWZGNx7AShcnoUY3WyqP6sNE7oSvRsJPzSGzB8UpPvUUMB",
  "key33": "5Arn3rwQLFAC4EXntAMWuFfc7nkTY1farfHbsBH2AMdnqgfEWWErnB83Chq3KLyoGDF3TnEN8UZCUT6fH2TN7xZP",
  "key34": "5eY9CFLdbRuBDPq43J2GEM5zZjRmXeVFon7NEsFoHQvB2XZNQGDjLndFGC4oGxFQAgdPTqN7dw8ht2WqYP17EwqJ"
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
