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
    "5z8HKdE9JytQcrejroiyeQgvtxhLSxLwzRphingHUF3jDrVXsMKG5znjMMCwfC5cMSa9YJvLJnKPU3y6cnVZNMNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uRpbiXreJh2jMARgW6zbvrm9kCQdsF6RyEuiqBLua31mvCDuV7EqAuxJ9eQ6Gu3fPrCbwcZ1GVFb8ZnxjsGrEck",
  "key1": "3soVKGvAwKWExwcRuu4DLKZCsYk4vsZFRdZFxnpMkWt8mzHiuuWeemTa3mkAVs1y3fBDSp4nmroP1wYXeTfDjYCX",
  "key2": "4VARRDNZfTWk79uwdrxSpoFiejECRozSiMgxvmwkZLbcKPHQ7P82GFwX33HwFyDgtr5iJdjZiE8MHNuRsmZLRgBN",
  "key3": "4m8g7mxCas7TYHF8wJxr8BsaHwB5TCL3CWXQgPYpnCssNijoJ4dSuZxDpYiwTiDWmSQKMCE4uxPSZamxX6XBsVuZ",
  "key4": "4mNKbi5m8LXFWPgJ3XvcxsgTPQHhKzu4PbVDQZpjJGvWxGf2A8QnXHePAK2F45vefaLzhXAmSjefD5WgKSS36db9",
  "key5": "3YQdehEnzpqtSjGv5PLDTbtgYEHh78AcArZtZXqJ7t7oLk4okKckpGUnecB1CzTowBk8rrMTYbAiGsM9zAwr6Rrb",
  "key6": "gEJvHkCXCPAKgaUbLJKZbXSFMwRwW9gWefyMArFZw4PcZipreq2UfRfYw7KctyzHLvrLDoqL6fbtf4XBX4hkKaG",
  "key7": "5Ny3EBobMnwcfcmGtjA2baBduPPDYAX1B2nShwDavQBTco6x72yNyZspUUawb3RKPhrSrXw48u2UvvzWxe9fzTLf",
  "key8": "3L39uiT19iTAWgmEBA6xjy23fbTqmB5EJbBaMu1How5L56knCPdj7rpaQSsibcV3L5sUNFQCGwFTbdacFe2nCm7H",
  "key9": "naUkhGeJErUzr1x7tdvYc32UFwYyDLCk1JFYWEwVU7ftSdhBZ6rUP7f9coPhswdecueU8dJGBDNe4zkHBDibz1e",
  "key10": "3dyUUWixEQJCZDYTd1aHgHAE7iSFpjknUnWHftALLPx23yqLsdCAHuiQHXom9oZzPTehfbzwfp2c6NrfWxkUBF6H",
  "key11": "2VsUzLvH48tdv7uSKJB3tViZCDrsQGakBzd3gQhNek57VBdiCjHV8a7mS6w2mXeGBYet71BCXSoFNpCZhpfoc1HK",
  "key12": "3LdcMpRAYfM3KETxT5ZaTUwswA89TKFqkD27QMbV8zxmyD2aLv5mjSSRMyvzQaeKfxrw1o6CVDqXX3zyYxYDB6dB",
  "key13": "2eNTgd8cFVacB1icsZw7Sdq3CZyHqXJNDCSFEXcHdYoqtucquWFfm7tdPdNqxrPBfeo4DkxHL7FUD2mJUhY9ZanS",
  "key14": "55n1AtwKeg39FejtTphY7zqaDdsyxLEcb1i8CCcWK9BWzNFAdBCUCDPEHuPCoC5a4tLouFxYRakaiQsSz2sRFWgL",
  "key15": "5iifPgFFmdCxkuMu4gTc5CdjWXRjD1fnMxy2dkugefFAq9NUGN7Qi8BfCAmnb14YVpoYrjZ6SYwdX4vMfb3L7MUY",
  "key16": "TQxa51ib8KKHZFxWi24EKtvs2ZXZRT9TgyTa576ijTXPPZQ6FJTA6HDw4soahofwSpuDEXeLAg6GJoNytZr2SHG",
  "key17": "pCMXkUE4tKSgGKdXoUwGwVq2oEcPrbZAv6PKZ3PeTnaJqsf28UcFQhF13c3dWswmAGTeP5CqoU4qZJhqGD8haA9",
  "key18": "3Vd7RVGs5bRQTwBwtNe6qawoKhPYE76nrMZLNjLchF68a7mYVNMgKVzaHeJjkpRRpkyBajYttL4A1AhycGU1B2Vp",
  "key19": "n3eK9xxzKLtNAAayMqLwSqNw6vJogjr1fLR2J7FdrcxZUjwej4ppzB5om75i4SBChCsoKnTQei4gmzrQyBoNqLA",
  "key20": "2LDqWsQAZix1XfcMofe1gQQvnEq6BNGaFeJ5pPMc9j2mGrB5q2mELmFcBmdEtHLHB4ekVrTzJM6BbzC5qzzusWbh",
  "key21": "4NQB2U74xao8ZuuktE3CpKEw5PikuL3KXG7ZDzsZjCWwHHAPkX8jKyxusZUd6QkAxe5XSMAZ8rCKx6wUKwdAHk1c",
  "key22": "3XThLV8Xah7gAyYUBLrBZMwfAwoSZsvt1RtvbNtp84iE88aCCzCVKB31tP1H1c5jHZmHymKb7AHCHpwjFQ5pRKkB",
  "key23": "431xoYxVexreiBNTcGFu8MVR9Ne5AiuJGpPBSkUmPxPEe8JNGnswqZLj46cRyZVdxBZW3bEJuwyHLvQgStLPer7T",
  "key24": "3mKBqf7UnDomaN2j6mmuY5s3xG7yo2Y6hugZ54WJeFZjjGo3ZsipR91b72aaG8bwsE1hAYhf3nq7DzKtAZsvEdaU",
  "key25": "4C3LA5LcBtJcymSN9EzsNa5EcFYcSvRqLutjy176QPV9KrK26qGJN9nA8kMQPJ9MSWiAqc16YaSq3TUwb5DqsYSV",
  "key26": "5ahcyhHxpaYWG6VB1aB6sNHX8gQ5AETJV3KcLtSokBZrsgDWowEvJEYCJJYXUPxaRWYdY3xy156qZUPrToM7ix1U",
  "key27": "Ekd8GaD7h5zdchKxL8712TwySVXnmC7x9oWuu1BT8zU18CF98Lq7awNthZNmze2j1Qjo7J1MWL3DEL7Hmqfdkc7",
  "key28": "4S7LjKp2uUVZen1J5U4GtnypV9fRi9qkLiEoBX9PTwEayiZ5sRRnZdiGtXyM6vn9fyG9AnB6CjbAp5smWbJcdpXP",
  "key29": "4goHHj1L8NhH4kzdBY3GRhZHTQMZq6trR2bHkSyfty9uMjJmYU8z4mW4TUMe46BHkmTWUatcS9B3WFPBqRFshb4V",
  "key30": "4EwBuH3xsXGmGxREmUo57dJXeHEVWdE4x6MiVAbt3AhbGePnxadEunRY7R7jB9ycVHFRvPbCHLjfHxYy2JiVT9gZ",
  "key31": "3w7FzbwrjmwGgZZtvYzbkzSxMfutznyPQCQHz5EpKif5vZ5gpzxV79ars9GGrDRLF69iLc1LALZ1fJ13cVCJJPto",
  "key32": "33XtqR4VkQmyeWUJXRrqSiqDhv97zS3k1ck6bACsdqCczA4DsXnmazhacXyEv8pKzDLdA6cxUpU3QuvwbtB2gQJW",
  "key33": "4BqUx1EVVQvLU4EDoEKtwNgAufzuGkNXnWugud1FnbQnfp9cKj7rup2KtJ1HM3CGDscXUdv82i5MGXk5qExcocmG",
  "key34": "3NE4LosTuRjmppdMU5XQKK99qX1Np6ciYgN2Zw9ReECrs2mwxWJXexKh4ZpvmwpuqQ6YAWVtDHecZfWCjXih3jyB",
  "key35": "3rgUN1pxVRryPEYneQsZQSJzQLL1JTgTnedQgQEyaiiJfH75nEb7CXEH2iJkEN9BnAs9jrR3n1tRVFyNCfEeb51X"
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
