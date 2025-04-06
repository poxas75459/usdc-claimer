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
    "4znxbYRoufwuVGwJjQAzxUJh8Kazsc9apZhrGJEHhzFAZubYsGn4KDDtac8QRt5USessqbtx2n7xXrERpJXpzpDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tEBem5Z4hRpRJ5R1S245ssV92JjEwSNMdsJUdLiQ6a4f9uk8MNwq2fW2UdCXYS5nGQBSVozBuF6fc9arM23YwkA",
  "key1": "3z7AZXS3KsEDuLki2RXN3sY7NSdrSY6aoDdSKszHRSXzrttbpsZy46pzHUmWu2wsjW4LNhowG6R4WfjyGm4Bi9DG",
  "key2": "5BjP9CckUFgYXGdUcWmAXa1cWH1ZTvbXiWvrk4oGCYVxEK53iKbsmZqDr1FK5XsDcpgXwSV2ob6DiAFGG5eTwJ2t",
  "key3": "4hn8yqZRoi9bk3JKLwDBfi7La6VR1eH88DU3WfpcaXTkz6vn5Lt51QUqPYS6LZnXWzPGpzeTwmqj6wE78xB5Dj8g",
  "key4": "2qscrSz3UoPefmNkY24jFJs74wcCp5KKDkeeXxpqMHLcrxHFvyWSc6RKpWpMBC2arr9Hv1cpz5112HpSs4TmXszv",
  "key5": "4FsYQTmFeeGt8wiRMqGxgPK3TrmEnwybM6DubN217W7en4qE9GhBSmBSpcswHLr33ZBwDS2UwWggdRxzEuSue3wK",
  "key6": "4fUdYa38MSUZ3N4PNoVzTR1jLF8EwnBChi5WM8wxNiFFnJ614UXanahk5QaJyMTknZYANY3VZ1GURz9kpjYe49HT",
  "key7": "3FJL6QC4VbFDc1svuDvQitcu6Smjh4W9J71UoPEwWDRVyyvsTfM641XZtgADKbicdcSTBgqC7ApCm5Mj4AThP3op",
  "key8": "49WXtTZexrQUsTT2SGZTu9mKZT6LgbrEd9hU5L9tp4W4n1MuxJ5bbpP9xEJNcSEBtuhPvdW5PuJSN8NiSSBtE8cS",
  "key9": "2hBnrmY9mGUerjTogyQCTNkYFTTeJCf98TYbR1JffraBFNXp3NMkhREAnjWjtzVNfKSwSmRX3gxtifBDHV8JCa7z",
  "key10": "5X1EoVvA6zyhGRArVUBdkdXZYn1dEfBH4Xr2bY2MpQHzzLQcgm9KFbKneAzchpnK1R5pVQAHcJiCce7nggSBaJDg",
  "key11": "4UCEJv5FAhxkngd74cgjU61yeURr2D7nwbvASsr23ds3RMq8gR3DLCiN9XA4HFkJpomLqnCsU1YNH7g4mphoW9qT",
  "key12": "2xp3bmAMJgeo4XgY7JBz34EEj9CH2MaJXHWJ2kCUE2TpYbto4Y7NvoQFFVmwoYKtb7YMH6x3dMqepBVkVU3ct6pc",
  "key13": "5QPojrkk1JCdmNEUXnAjXcXUJtRigB71SDwLchpVSS19aA95cHU1cHPM53Y17rVoZGVkKNz55ihtJ3EdVDWRh6vD",
  "key14": "bWjs9JspmbkrMoSeaJ1ZJXMhgVtpADzEjaCFFRznFwzJPmX1hPUxsGJnTZEKEqTUi3pkPzKPMM6cyrsacCEyuzi",
  "key15": "1kLr3WXNUo6uLV5qGe7XpJg2ke6aZisdwvrMBGJ6t8hiiUu6RQfoYaLouxQVfU7j1o3g1sYFaew98YHRKMyW72x",
  "key16": "66qYfYv3gQAUkeJWGeWpQuaYSzutA21M8gm8dD5FPLznUqXVY8oCWQPvbmcetoNjv6VkcGnjg4adPbED6kJkfCUa",
  "key17": "jGYeFRRNFDWV4n519EHeo8gRfrE8af3RtX4ty6fcCoM4G7NS9SxkGHz2Hi8SDMkiVs5SFGEHx2mn3MPUF9CX7KB",
  "key18": "qnt2p7an19QwvbMUEdmunDySAvhhmD5akF3RdTFeSkkYBcGnwBwLAimZwq847yr2YUz8yg6FMSfz2jLqxjRXYKs",
  "key19": "8265hoU7D8UvcfZ3KMGEDH9YVTKX7KJUu7xDzgP4kbF5FcXmFDn9dQcuJfNnK6Xpm9Lsj4ACDtYNon9wijzxkxs",
  "key20": "5M5ZZWeQZT92BbJGKqwMQ7XLqX5AsbLhQqJxPMrUaGiQTPHRH3UrMAxH1PtJgcUvCnr47EmJXGiSvGBS4raSKxk3",
  "key21": "4T7EwjxmJPAgjVvkNuDVhJeehhvy3CwEJKfQT1i4DL6FkFziQSabpx1WHWGxp6CL5mdGXkDi5WBxUS91dRbuDNnZ",
  "key22": "3KG9scjJ2McTR1QqpyUwcHAedHgzSh7NBdKAE4EWkGY8SqDoPopecxtPV1dcxxg7D3gup47QdmLKeJYugDY2ViEG",
  "key23": "67BGcdc9XV4jpwFd5am5QY4PKp38DnvCCeYiuZcNUp2vtULozomji9UzRhv5wqu8BHoFtikN8wG6SJW8JQcq316B",
  "key24": "39nXBquUs6GD8RcRffTKgpjmbNVgjQnZiAWf5XE8q75ypbS1BWMKG7Vokb7AFDRRC2Hx3ki4tDLofQnruEaef84b",
  "key25": "FoTf1XkQEq8kKJFZN754acHLUEuajSNUEDw1vZif4qf14Hpjscnt43F857K1nR8Tpnvwo3g7e6WwdtXf8s6repG",
  "key26": "MJnL9zdwDutT6oAbm25ERd9Yb2iSrcJT6iedMngZLBHhAbo5THg92ENLRFQfdomsLyWr7CAgmAyG2C1gsaeF2NM",
  "key27": "63Zo4ptifSmPNjeQYVzuAgmBaNzkWncs3P8F99rcF5yjbo3MEsU7NafWEevp1QELZz3HMqZ2CCU6aJ9v2jjkjuqX",
  "key28": "33ZoXF8tQqYskd3sDcXJpq2u7MPqvJPQdcRFnwcy9sumYEQtqxjd3keCtznAdAMT2CLvij4yidB4cR6QzdhXuegM",
  "key29": "34MaM2XTMvQKx5sTDdVfJ63vhrMk4n9H8RC1dSUwnVRBpgn49tZA3KeMrontrEVWDo9uYHrwMzLgmTmt5LYjPTuo",
  "key30": "5jW4Hg67uP7BPTpJTdwUrXUfU9kxzPL4qm5jt3hsRvw53Ah3Uie17wrCwMqv7EdnHca6DGHEK5yM4Fe7Nnxb4FUg",
  "key31": "4qYjQtHv9p2RqKZ9MYqcVuvFSszsYrUxdAUrFAE5ojHhT4Tm7YZqpJqvmWpW7aEatdRy5b2y3n1cHH4EzecZAaZM",
  "key32": "65mr73MtQNX9rPhn5mBR1yQ4NJvraNmgxe6cWdKJ5oicgQUxXh1bc3WYuqwqjC7G3wJjNhwBAzZR9GYwEcN7XNx9",
  "key33": "9QkCJ5N5cKzbUAXbz8mmAJ4DkZwjvKFoHzQvwmQ6dJqfXRDbpygAYpi3jkuo3au48HxkMayDrst2z341rVuhodV",
  "key34": "5vSSBng94HDoP3JaBwrzHgwNUyMjrxd74TpnB1VfzYEFEVhrtUG53QPJzfPJE9cEcZEt7DgWnspMZ5oxtkpciBP6",
  "key35": "5yfwTj3Q54mqPToXQ7NtgBtgRzwuiP1ZE2GLXH1KZQnxHzC9aCQhV6SU3BhjKu2PFrUd5tegJd9Bp33FZbERb1aQ",
  "key36": "4w1YCzoNct4mebHvDQjytXLwub6YXDJqqEgraVG6sY3F57HtmgL5qBPzP3cEQeKdy1T5c2h3HNcWDt74quQeDxeU",
  "key37": "626KqergqvRPfBZ4Q3SGE913jcJAiCG4jCPTQN9SkUcY7Bvaa8SAbagLToJZRG51KDpFSb8n1Cn6qtZziigvuY4M",
  "key38": "4iew8ZmyLMbR5sGHHpHakH5YcmKa1DufqU1dXpSuu1ffMd5o2MNyoG6Q1ADL12CFNjWrq3syvxefGLC5EqkYdhwo",
  "key39": "2gYnSFZXBM7bs7K21hhavANTFRkD4bvZm7PzaoevRQmJ3nd1BYGe16JXvFcKK45zqmjb8Bwm1an6JfqwrmvdnJfL",
  "key40": "2M11eFzvazG8t2d9hnKmh2uTea3DdFcQNn1pjCmeLsYYXV2Sdfbj9swDuatEnazCJh13UduVuVb6oVxJV86BhrK3",
  "key41": "9PbEnaEr7tQ3Vu96WFuRe8Br92nbvrhLezYPu539GngyZSUBC7FwPsSbNQPPwD8KBv3GN9rf18Kb6VXxis4q7gq",
  "key42": "4RrE9vWEwTKKePLX8Kd4dUU7UvUVB3eesLY5T6MmAwuQzcKjpzJbeeBo9fSnG8c42XqQ7PnvhCaV79JbHgRginam"
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
