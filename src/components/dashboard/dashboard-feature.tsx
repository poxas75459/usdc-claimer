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
    "4gSr17miXxVsb6WWV3VbgzNG6tLiU98vrN1ar8MGEv11z2J3bgfbX2QVsgWnb9mM4sWi8dfKSXBSNJi9DyfFCXa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25LcUdnLMGeUk3TjJ4HJ73LqVn7349HTQJXdSUTHQPtqJzBpsds9rQVWt3CHSeuBdbHj5r5j1sK4wEvFn7tCWr33",
  "key1": "2e9eAkVcb4R9WqzhRgFeqYZ9A28XRHZKdAD4DxYXp7XQfce738oe6mSv8tQjkujEvobvERByxVefYzs5kinpuc1g",
  "key2": "3eHw3YWpLAVyGLRWkudUSEXWRhijiw1ndUWVTHVzyj65bnZNCHtNtaihTnACPTd4zwVE2FL1Fj5yWfDVZM51DMof",
  "key3": "55ZxR6LkM3ry57twgMe1ri5bV3pWnkSjNv8E8pzaEcuJg8BztBot5PLh3odCrXPBiMEs6amLDzRwMXSq8V9E2S1X",
  "key4": "4kQZf9UdNoaihi6TVQtp2Dpxq5JLZ4m4LLQswoLBTWT1SrXnJz4QuiFb3Uzu2Wzj9yD4UVQMWZ35Rf5hJKkjbrDv",
  "key5": "4asntYpxR2Dtu6ggPwYTZo1GAzNwxqqjZbLfZRFVzqsP5qL4MM7ELBzv9keQZcMq4LU8McaKVB2qFotUxJRgvpXs",
  "key6": "iRgfpRzSheUVoSA98UbMqcmuFQZFoSKzW2ooufHHmT58opZqrzWYCTgqaL9BCrSqXND9bKB5FPL8kZLuw1ck7Af",
  "key7": "3GpB6avc9ywbuatcErLX53rfvWYU25Pgxpi9FiPa3bSxPnjrj8tpjbL5a5G9ZtXCWYiGkV9AGzse7K7ncMPqWDg8",
  "key8": "56vfD4M3mvSDuqrWQVAVh5cypRW2QV3tibfrtasnwG6fBLhSxiVp5t4eN9b33hCZgv1h3FbhBoEuZUjMDeEzwLpc",
  "key9": "2UdQCXSoMjKgz5feWJYAX455XjfcyBA3JUvp77DtC7ozBDeSVtPQqj6NYj9b3kr5cc5rXKZzvcvtNVALTywm7ZKQ",
  "key10": "5MiyyS1UQrYjmDG2rRPR9v4abXr1HjFduUjLwgWvSKGzGhRBumJ1R8aR4eg2PmuUhKhe8x374D5gxe3KHFDv75DT",
  "key11": "p6kKgXhhTZuD5ej3rx9kzs3JfnMd2SW9MwgMPKmmu9awGnj8mgHQRNQrrm8tNcoqGGEWPv9owpcoFEndGfN7nZS",
  "key12": "4nV54WUNDbqTsfodsXoBs43X4BwbfFKqxo9865AweL6oyLt42HP7EhpkoeBB2jskdkfBbvACmJuY6QYQGYaFyUph",
  "key13": "3nQpJSttU6VMAAipE1mEmrpeYVM82CDPi7LSdEWFQt8Czx772PNevu9Y3rXC22FA56chm8hHmQWSFhxp69XK1fUe",
  "key14": "3WiSfiYDKrQSHE6fGcti5Xb9KYpuf88t1HR7DWBjJxUQLH7igAcHzzuTTT6bGG5z73BV45hpFPHV1ppkU2eUKoMx",
  "key15": "4GG3EjZ7DBvXwWVQvJiktDCWjVi5mUhnctZFdPDFzmFWZHMES9jYn8SVRiiEVxgUdYjwgMxZ78BjXJaEd77W5kr8",
  "key16": "5hwvfFkFhm7EtVDwCcjYkAeMEdpNTmB6QSwenq5SWBZqx9Hamtrk12wCW5BZ3unBFy45FD8WWrN42AxCkFMCfyUg",
  "key17": "2A823ZuN2srSL93uEZAqLpimu3qqpiGqWPzDRiGaxzmpmyfyzUYo2KMeEjWHUBbjZHWgbbdW7UqqBQDM8vqsXnNW",
  "key18": "32geaX9mwriXwr9UzjR5pnTvqswHmWzTWr4dUyfPuWcoQYdWZL9ZLRFYKNrSwVkYJod37uudZporeZJZ3B9Ko14X",
  "key19": "5wFFQq7obMHP7rv3opP213Fk8mwKpcmNzPARz17Hmqw194iHQYmnF9yaS2hHxMQT5QKDyQUmehnjjHFuP7FjqiJE",
  "key20": "5xCxf1nVBKAzC9RaJLLafAzYgBGga9Q5mh2MEQV6NWDdL1AnXHsbuuXTwLpTNriVHHEEKqbYJAtgqmx69Z2h3V8T",
  "key21": "63RCQqwBubjhC6MKMiz4aDs4MdRAfPPm2odX9yAqMFbo85y8keypCMMFHAUfco2TUG8gsnhTveoECHZ7y6bAMwhi",
  "key22": "28SxSVe1dJxai5RU1gc55Wj45TXUrFYBjAM15svMddANynjzFQGSJQxwUX1d8scejzXxmxSfhGKGMPsGahyHEqqd",
  "key23": "39WuQ3WKqTTdsmkErsSHwYgBTfR3K9R7FE3mwpXUD1DeehYUgDPT58tsrZChNzBaQP5k1EU4M7Ncy8aQHCLvPqjf",
  "key24": "4EyZqx8Ps4WvmhAZxDbJEPatRiGbq8CmN3U22xL8BGrLkwpWpXjBQAApsbYTFS16qfi4VfeAuNqnpn3kJowvk4Gh",
  "key25": "5ojynivvNeWFhpZx6WSf5fqD83r4tT679Dt9cnMQDwxmARm87tSu5UNa8RJ1rWgNVPGqanhSsCVpjtCM7SUri36S",
  "key26": "XSpyTZXw8gpD6QNcKB6iiRDkK3EFv9GFxHwjWHNooR9KD7cNZnZTPKjtmfRuWJvaQzvGG2Dj8rmz7jpH9DWvkCf",
  "key27": "5Aim97bMra46i2JATLRDF58YNnAzRwf3QELwKgvwsqxbTmyUJN7YDp4cVSLcg2e4UEiyQg84vp7wZqj8Dc1LX7jc",
  "key28": "5Vxph7ty4428kuT6LGW1mbtVTvSMczkdVJbcwnjsootL1kS75VZoyLGzLzS4jMtnz4Xe1rszQTFxmix92xr5FJmG",
  "key29": "4oRGTkRhiUUGcaUxekDmgTqcR1JtnxFxgWg4wRgpEWixzaPoKFhh2tc2mj3Qw9jFn6bfFTa5sfP6dtUxQtTmEArp",
  "key30": "3X2YXx49wjq434uJcWGbqDJzD1hscRFMK7X5DSrsAd7ddfGReiJYepAR62jyLbZjKaqqjDrnq8xi8gam6Z8K2s1h",
  "key31": "3ckvsJSfjN3rLpjHDGWYSNyZWpwDysQ2hyX5SiVSahnGr1xNjN86CmHumTzsymTKsyDP4vCcuaY3CpXGV7TBupXH",
  "key32": "3h88wKSveaQcTfUKKkXnWCHRbDVWYWkmJrDHJrdD6hLAN6NJkT7LiR1oeHgVvjTJPhk5V3rUF659tTbDPY267C8u",
  "key33": "25oYqMmNdzBGF5dHWnxbVtBYrjwAXAuRw8vs8UfCt4mBVFBa1yV8KFf5ANrbEqDcYuCQuNqHodLrEFMvwA8Z7ei8",
  "key34": "4HkY762xM4twVNB87SuVWrq9kSjUyxkosdeyc7d6mWnVGksSCAqf9YH6DeLZSajYaGefwoFPRmmgw1xCsmiXCp7o",
  "key35": "5LT3ai9QKM8M6ZcQ82HuFXNCaStUGKJ7ttKH9pQkNiSyiLgc6dZ2BXUZPjRqJSQgmWjg6NALTf6e11FSbE8Bjfwi",
  "key36": "2a3CxPFHh5t3SntLitNFDUgZD8bJ7q68xPVnTSMwEM1XpK89qWistyTksLHjRiP7ELvqDez7Xx9PWUNgb37MGfoj",
  "key37": "2hMdXVeNKd9VqT6fb5sNWXyTZ8Z58vBuCGhVozejwk66XULzFXLBWyj35bYA9Xinxcj47muGEbumB2VYerT94n5W",
  "key38": "4qGwcrhDBRyzrHP26hHnyRr6FnXAPjyia583dzKjUUjfekFvFdGnBozwsqTjZ4eZHEV4i4csiDgj4N5JuTC5Mxv5",
  "key39": "yPbB5v1c4nM4PTgpJe56gUVSWqrq1EvPoLDWW19QSXjUJByxcgMUvUKoT61eeBni6Gu6uWCJo9JcvbZrJWFPjSu"
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
