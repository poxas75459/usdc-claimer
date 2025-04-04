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
    "5WoJdHXFWxGvGdX99tKvq2qBozUYzswiKWQqbjCziqd7pSQLQXrbU1LSZXFUSPRLAh6b8SK4cJaX2fbAW3wo6NH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EnXBwJUqb2YsfFBnkaeaxfUwNJsNcJkXwvaDyjecApZDj7g6yytzvULAKXSsLys1Wo1WsyiKC1epF2rVUGVXCrL",
  "key1": "5hbjWNum9xLSntGLkCSGsqBFq4tpkHJTdBwzzrQ29AMbMZfDnW9P3yYQQdTYGwguXLKgFRMwSS9CgXKQsM9XREpM",
  "key2": "2hz5oMrmGKs1NWf1Ly8ESxwSKRmi6F9Z8EqenPR3t2hVcTZQUdUXA7j8YHW9ja526SudfeNM9PLDqe5qf54vy2Zs",
  "key3": "2MiqK4mmBwBdhnFs6p3PPYEbyhVcouJPxJ1rihc7sPiA8T19eRGehiGxMJQgGzhYbFznYupp8ca7bd2jCyBNAuR7",
  "key4": "2PFwAxmyEYnx8LgDcKFp41CkJbYCBqnVJcerNinsFPGVxRA1ajJVyvhahD5hq5Jzkdo76VESqx3QX2j3WpRZj1rR",
  "key5": "48LyrFbJZKarQ4zJJbohPFfYZcAcFRXX9a9TA4eL7wJzZ8RvJCJLHwwzRy7jJ9Lzdh3b8hMrsnsYdNCA3RjYUeNS",
  "key6": "4cQLjpcMd7FkVSuKnJcdNcNk161XUUY888DSgzvoKoPrPTrw58Yue8gnbApz7hGgxxAMwhjDwUzznxgPgq58qZeC",
  "key7": "2v34bKoCQdBjh9TLs3Ma8kaccPGUqA7Mt9tfCDQw2yuTdiWvC3jsWbio9mnK1cZVEFUi6KykR3c7P6HShgj6AEPU",
  "key8": "gFuLQiGkJ835enTBuNLhE6U4C4CD32gavVmY36JgNeCweWZjTgBE8UVxQGV4DjLBmXdynEAZxeohDPCosaPLpP3",
  "key9": "3qzBqASmHpFxMDr3baN35kWypoGEngFJGERCKgHCa3mUqSvDzRPBEd3mgj4xrUXRYaopsPzRqxydZFYiGVGh7oEB",
  "key10": "3SCDoikcuS3t6anYjnZYoNwQC2aPy6EGbqWv5p9ea3xgznq9ZJ9X99CA54wwav71fzVuS5gCnpmN25XaNM6R8gyv",
  "key11": "5TpsPpzpYbkJB9oFvs2uRKJnfsDrwgCqin5peYbPV8sao2LdMnE4EizBioBpzWLKc18RHjmLXXYn25PZP3DsCyd4",
  "key12": "34oKfYkEtqQyPWERnHdFN1bnT8VeUAcR2MA4N5gA4ZXyMxFauQfZYqmmmEVmqHjbPfzsPwj66ZgkrJXZARbA9gV2",
  "key13": "4QuXpyWyzoTcupqjoGvJ5UBd8TxnmQZZXYncqyYRabob3KMXz5ViQdTCt1GjKDuaNTkLgUsWSHHUcN1x2mRArxmT",
  "key14": "Bdf98HQrayAA9gAqYZYhUadUpVBaDmYGX5Vs77ZgdRo5ievkKoPsskeehfRWg3eTKDiGokLdzkf7ziDA3ngQXtE",
  "key15": "3JHME1WFHuS3P9TMPEnqwBuK3nH84zTSfJxeA3DbvuT96TdBYMzWskPbtnn2UAwvsjg8atA1Ag7GoBHn1nvWmAZa",
  "key16": "4PUL67Lm7Lvt1q4Pmt3ZBB3X9rYsBawhrurdwcLYf8WUAZ5jDQjxyjrghfGhukBPUnE72v7hRTkkoiDKSL73nLLG",
  "key17": "44qxLbkYKP6JcARSjjJzwy4y4CqtiNxThTo3yphpdbH9FzZY3WQj8nYFZk836JfabP2U85w9gc3SvcFyg2JUeZKJ",
  "key18": "ZDAbxTJAG7ECENs78FvgbRi7LvJaNKEfGkh3kXZZ3hgXLa8p5qxJK36FgqSYT2fFgbs6EWGHiY733X7PQyuPxgS",
  "key19": "2uLBREVkxXuERQxKS6yL8uzSzN3SUScAShMjxRmS5oBoVxB5hsmB3c5149qgaJag1gDa7jb2teQPN3vVqtQh6hh2",
  "key20": "34GurN9UT8Xw5CLmsa2DC88YtoRfiKym73whZTVUdL3iJzDuFhXS7e7TR3tQG75h1PBKgYSd9iQoNhMmu4MVAXqC",
  "key21": "4uxDXpXbvgGgzT6nUCtt4Lsho9fh85dTLFy7EiDmzmv7X5AFHK8AQYvtT7EpycuxjQwPAQaPiktTVRuRu3qF5v9Q",
  "key22": "3iVLQ1SRXzJKvVx5Fp1mNJhptxpBQXnXQDGUHhLThX3j8bWTmbRgUvyJRf1DiTi8MezSgS6y7pdRtr3RLY4BHhuA",
  "key23": "4NkxWigY8JRCsh5uqgki6m4awSZQZuh6F9dyN7e6vjFh1ZSGxzPZuVg6WRmdAp5sie4i4qDaEQjAmAKaw6t2qZuk",
  "key24": "2ZsXXvit9qmxdpM5XPdaqwkDPrpN2pbMesCj2jX2XECGhtyZxaeDeJ1PwJdxv1U9LdBaS1vSK2iu7G2Vmn3FPc6X",
  "key25": "2tSBv3P9rFdwYYHn4XdXgojDVji8N7HRyFSqVnGmEeAwHTmcqd2tTMde7DpkzonEXisrWGHRpU4RVj9wghRXvCYU",
  "key26": "KWVdGEYawNTCQoLvbzbnJpedpSDVTj7zoD3VJBedQpJZt12ju2HHxFHjqU9sK7LmQ9ijgFDSqYm9vhb5E6DQG4L",
  "key27": "5ZznyxscaUoeEsn4dVWG7D532pnYwdb7gERGmTRUsNWCskSLoRXTTJUn4gDQrtDZkkyZRq2ZrxeJqP6CYDkfXAZV",
  "key28": "2kHFjjM2wZrAgFYqcL1NwL79AncWdD6ZCrfJDYexvMEEoeXWjQFqQVcfhBnn9kH7eMwLF8pAW5kn9czayLncLSMG",
  "key29": "5WeRG3WG8X9QA1FRvn1LcfYYaaQgdFPe2WvgVRQMU1HUtKXDzdfKNLSNUwGLpfiPUppKpQR5Kxu4VxSCbUubDbun",
  "key30": "23NxSDV8x3VkiVnXa9LzMiBrgmedRvpBDMRuQhj6iXjXCdAUgHyFS4GxW3H7awNYaanKjvkAecSUqo5nTpmrNzvD",
  "key31": "Gt1thijBqj85oCYaPh3psydqFC54t5aPHeBnLznHPbx8Sihf3AQ7tkFzMuGtMy8qCc2Tioh6YJdQDqavFEBhQUS",
  "key32": "5yHW2BVQ63y5MQczQ3BHvWRQ9LLf8zNXKRo5p1YWwBjUbTCs2LdpKVbThoRusU9b2kHFNnj8pKY5efpsQBM5tmCU",
  "key33": "Ydf3cnPkuBezme2GDHbVKHpkALqFseCFX7UvBk3iiFVqeaBXB2epFxP99uePCqd9kmrru337qXJ2GZ1cVfHGZHn",
  "key34": "5FBqWVP35WtMs8vasMTscmNR55SLsyqQax8mMa88RsrsHHF1tgr81jkvfjCS5JMs27e1iLy4h3pnwayjP3hxqsiJ",
  "key35": "hx2tPmuE5bhQHLpgW4HtUMtjqWfhuGBL1ZPnsTuoU5C28MptiTU2tuyQHuUQPDBE3iaevaxH3YtBpwHvzTmVedz",
  "key36": "2w5YsBm7vz4jqMLD2AL2VbUYCUWCqVfauizAean3buqfjXy9Y8e12sw46h23vEhX2JsucKSEbQ8HVYznhkTuLwiE",
  "key37": "5CMKi9uhzfqd69ioEqugEjZP9AQZpPhMminNPg3UU8jMcE3dt4e3A2v6mRq8BG5G1tWoXv2ffpxbGGs43YF1ChSr",
  "key38": "2sX3UC2qRNe2ugi2jmhXL4Qx86Y62UqEJFupW6xgeBSvvAsxa7LqPVMYYAaaDb5o5g3iTuYX8kcaiZok75Z6jp8b",
  "key39": "kuy2qJpHNjPc4GEWkUG1suG5QtsumyD9vbt4mXERXPXHE2XR9yhw3k1ebfPf1i2XUhJv23SQymokdSLudXYdyrq",
  "key40": "uckZE1EcQELnwnNSaMKRPFmNcHWRaFxGFqTkk6LkCWtQ3xfbQS3gHG8WJ9PckeTDjovbALjZSZoQJSDs9quWgDw",
  "key41": "ZMpsR3vezS5aUezjQbEHqnchAxk7SiPj7oDDtgqwvgPiDP8orxEwRiUc9stCATg7D5foXfLeE9kHBv5QEr9AvKU",
  "key42": "5GDfMjgyEbGh69BzhixeiYFmNmwutXsV7YM9fpRCTN9xYughNVPxo6PRM1d4SrZWJnbRMKSvo1NbkyP6dHLwWxNE",
  "key43": "JAWEi86ewRmvG1yH9es5Sgz4TDCafS7qGyCXhvx4Ks6Z3HybEgoNHgguXvLbcMqVQ1wU4Y9UKpTTsG5ZB75ABEc",
  "key44": "35hsRtWnpSHcPjpF3W6pPyabf4KKnXKw5L4HQyksCmUU3pcrTYuWiKWRNYUiqbkvcQ5JwLr5oyWGd42XKWG5SwaJ",
  "key45": "53QFZFzxNPfPv4h2AndnsdSHsFBAmg3ZX6446yJcLuSEVEZuf8H6SCGou9Zma1ECQyttnTmCcdZBhzuZmhvZdDYA",
  "key46": "5dWcccPUjsBDj4QmtXLNKbLutXciebpLJkMa15my4FNnapZycEibyJwswZ1PZmnRS6kWo4KHzbPoLwsLh8oMLvWg",
  "key47": "2kwNfNhYAuDUEL6XsoQn2JyFqhW2seVyqegqrsUdTCyJ9YzA2i1MCwUowm1zm3cA5BnyxVcJi46oipUnWfRKrCWM",
  "key48": "3iwrEC17ecHohvDbxwDaw7gYx6ZtzJuviihUcA7XseVeyYThj4QTGZUfrJM71uDWmfKg7qvUurVfneosFtN4Luzm"
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
