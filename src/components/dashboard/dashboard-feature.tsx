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
    "3iKakfbeszz7NPqmYXXZw9zTw2JG4UerptWKjCMogdRdcaA8WUgTWyHrK5xeBQyqefL1H4xom1BHDxe5AGZRmfbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PF7E3NGXQptX2qLowaT2hMLZqRv4pZjjvkdtJKaNBExwZCw2smzRCWyKAG1ckjaErzD5nYS9LjGdZw5dKghmC98",
  "key1": "28Kn5buXF3h51nU3DtCnbzTZNuv86ULLFxSJiCY91GCjHRGuumsJSTXR7LVwjxv17wzmU31FYuzZP86FxYvoxPCj",
  "key2": "ocTK5RioZxfZQAa23wDPGuG3iLghRJYjNGBiKJvdqhbx19PfQh8kmfYk6DiFGcLkSs9P6cBxcYpqsUSh1PYdNrm",
  "key3": "7mgSqjQXsnhNX51tjaQCrcMtpwDZTwkFKxTKnHrzyhWJAyZ3mJutJDoNwMeGXs8dpscAygy19ZFSNG4qXCkdoge",
  "key4": "2hVvHWU9pbXQBNX9CgtiR63hoj8TeDkXnXZksTp72ADPu3cFJhmdkJt5qYe4g1XgMMXVyejdrfaDwRxRahZEyM5c",
  "key5": "62BheXoU2YSA2fhnruusj8B76GzS4TdHCWDmijJXQVaMgBjBE8RWu2t3r5fHXMTA6Ef6mvzqmvTWCTLMZ9L7ahFS",
  "key6": "5TfXnKAXQVJDmtp5x1fcPenLC6HbtCAsJgokeW2tenqtnYtwQ6aJeNY5nX854XSnQmHF1TYiubGn5rE6aXxA9AWS",
  "key7": "4FtUdG2Diax5p1cN3zJ2U9ziDWLPuVLivCKr1mBXDFEZwVVzAFDZ1V549SsznLSjdWS1rMiCbPGcrnPyvYBkMr6W",
  "key8": "2QpNwyeX8jcGkNvntZEN57AXrBJegog7EFAQwsBaxiTmvT3xAtUfU7AM4Wd74AP4LBSNdeFL9ysDqap2D6Ex7vMt",
  "key9": "4JUU1LauYLedxzdtLrBo9m5Wak1GtJt4KP2qqGKZq1Cm1peAy9pJ7AUujnTvHshQcsL2ZHRMj3tzyGMmKvCH4Uc4",
  "key10": "3hUiQWNwQnS1is8qvJ9X2fR8W98xwrmq7N18jK8SqCWXCQYUa4sA2fmYksc8YcpC5jcNoQwHJYow66yjdkzhXMHT",
  "key11": "5VKdLMFRy7U5vNDfbzsAn1QguWUN16n9biEMQa9cVzcWCH6vazusArNTyRjpTL3J6VreBD7VjLE33CJNWqXYymt6",
  "key12": "4avpypsWtodQpmgpYpe8jkXwi9EJe8hBThECSUDo64PMqY9dTvJpCZa6e2xKTf58fCzWiQDAV5HeTFDTWsSMjhZU",
  "key13": "3q4hZjHjFHDpQ5aapoUvGEi78iK2SbXaV2Ls8kVNWiFXeCUZVQz12trbDCpzGFyjD5KGN69BSc6HVpZfdLS2vuEx",
  "key14": "27SKCzb5Equ46uxrShaGWKLRRyRHuiLwvGFizXBwBnesaKD6B3ctrM6yhn32gWAJMwhZPED2ZFdvPzjv5Sq7YG4a",
  "key15": "KvAF4z77yS1v5Vmv6BJpCYmPE7tBdTJQP47X5837XSxNZdvDyumrfZisiLMEBijCkJWBp6TNCSrcMZTPNtxo11V",
  "key16": "3ctgtiPhdWyujR9oFrr5rtjsJqDbu4YpA5oXroLZnDxRLrZJcrkR1HphDXfgrbbEUkEZJbBJJHPPa77KfMwwHR3k",
  "key17": "viTn3Jd43TysTfJk5hsWoARix3Sok7Qm8qVdWTEG9twKYCukgDLY2bx9WMXWreuhwjToirDE64yAN7H7qCzYG6Q",
  "key18": "4gBAPEvbH6KQcVTkr6ki2KK5MKDaCx5hYeEZgd9tyyHsHyDCyMMjvTRQxexyTsy1TXttqHCC3oCd2AyxKZCqZikb",
  "key19": "dxd6K4Gncpc3u7we1x81e36cafZLFV3cRM4qzzCETVsGGXHntbjwugcmp2q3Mv9BCoTfJWVBDC4VmRwQVSqdCsr",
  "key20": "4n5oCz4XVf41Phimo6VhTe7cX8kXmwbR7DjX4XfqpBWgs2vXDt9irEuw1zEnEnbV7BqPG4fB9tQ7iDnjC1mWqXCx",
  "key21": "4BHtCnBr9UZrVm2gsN6WuGhZj2DwUNnxETp99jmb32UxsTYMDLJPxnUYgt1Q5ZUkVRGR5XsoXfsHKsE6U89BgViG",
  "key22": "4gFjUm8ULy8Y1xW6CQKPm8eLYYnGkk34FHiFpkgG9x7Rsx2yVbMFBK3AMJwNoo8JKwqeyH1ttiQqQFsxvcMJrHBZ",
  "key23": "4hcSjHcgUJ8aiCJBrndb1ZsW3ucVDT7HuJESWGCiRToNb2WE7gSb978FrhZL5vFZ69ujE1p89TZSTvvY1uDQBzhb",
  "key24": "5jeTLjYRN8toqgPgiAnXdSRwbMhc2szHyJLNcdiLJnJ2j5xE68VbV1UUQjEjS7yhxRXHvjxA8Foe9YvtdWFg5nRZ",
  "key25": "2SLUwkeMSKX1mjQhE3DtJg7QEF4U9tXqbaMV5Tzbjp5Z52WN9z2FKwBXKtT7XqAyBEFe8UvyJV4b5HBVyvhaSYXw"
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
