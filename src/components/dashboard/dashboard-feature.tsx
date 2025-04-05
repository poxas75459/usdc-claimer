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
    "52T1X5zKq48PJQKdPDLdrGgUFDM3bDV5yeyJD5GMAZzwm2eFJPdhZCSWZpgAHFjS31fSnY6xzT97tUEUcwqgETsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TNrmFweXeYuqLemUsxQEdAwRPgowfK1n9SjDuJFocYDdfG4FXH7Mt329VX8nue1NTtpvAyJrX5wASotU15PR5wz",
  "key1": "MZhMMQEknzBSffssZsFNNJ3X4k7SQiQd1KidhRyESmJNmfdgzr5knBHDsvbP4CqTWw4zoKvGdKXtVdosLUhGfWR",
  "key2": "DwgVEFq8QubmqDLjsahz2C2oXdmUHLy6D2zdSLDCAHXvSmYjJeF3McAbTeQxAsGytmjBRSeYqQWP5pFdcTCeUsJ",
  "key3": "64hkwR7MknvXRgL8UgRyEeNxXjMPN3ZMSSGk3KWdxAohSxT1bDpLSbjjVJh7Jm43z5wRYQPgDhXaef9yMy3ZMJhm",
  "key4": "4eRXi1MugUn1FNrsrK1vsn7pqCp4CbAV6EeuW1pvWeuG3cknKRNdjTWDQkqW7DvHHxAZK8ifU77SK7G4eATtfabp",
  "key5": "3mwHvNTzuLg3BQQ6kCbkYfcdNk8AAvVqMQagLXaiza3bQk5oqRP1MZZAbb9VCgVzD4hNNb9oezEH92EmFgarVdBM",
  "key6": "4z4JbKAqwzbgg9DMUmrdZHZAmcHXX7zWjZkqDkdGAHBTJqanK6p6qkgjcBaR55pvgSASqNGzUgC59XPkeNkS4XkV",
  "key7": "5bc1LTQTwAt3uKDh2VZCTnY4TkM1K8qo1Kbdj7gwJ5GhtwnM6ZX6NnKhtWwbJNv4p4UAgNxwsDDx2hckSbEEvSrV",
  "key8": "3CDKMBizTn8yDAtbzjrtAHx7YoKNoxJSHndKrtJtajWrT3XnzanDxRBarrKwFu6yPAxHT2dNiXpABKjWL7iPp7iU",
  "key9": "24GZLdwe96DHCgr3T9UNU58MEAuQVfVEy9yDTUDmg7m9KuTFkdBfqqQPrXegxienejAf9F7JAfU6fbcPrgxMQYRf",
  "key10": "5XhXi15pMDTEPD3X7keLfSa1aHytJbwn6FXbimBmyMbe1c4587VFdTpR7sEyWBADEtCzVwyu5ic49ocm4Sc5ySDj",
  "key11": "4Sq2tZggs6QT7RYb6smyb99bi4hYyg7xpRzANgbC5TBN8K3NPWA3yfQnB8Cycicm6tsaqtC7nJcdxKvM4St3L7s3",
  "key12": "3t9tWPb2nm647MvBFfD3YLeXvrZzk72YmgtUaMXKjXTgaNtTMEBK67ko1HfuHX5ENojzBmtwYhCGxpCQVWhX9JzE",
  "key13": "3UMsDDqwTFUWNrXLYZyhXd1edByizHUHx6hcJaCvM9jdksP1GcdAZ4UttxqM3g9QKGakBYbtu6vFNL2mKaWtRMtr",
  "key14": "4RwLiLPW3ioDdq2KXsknNavg5aUfHu83PtA1sj6zmFUUabhhrB33dM8FPfxwyrpZ9xej5rcEbYueWT41VaJN4J8a",
  "key15": "XXrdXbvFYowMfZBAJouGjRSJvgFe9aJ2n7nJXdLQi6PYUMFPJgZB1MziLi5FVvBE55G1q9diukbX3D7raQvc5PL",
  "key16": "HaMYVD6YL6ViZh3HLUWeBVEiPp2BtFHiDKJ7Q1mSvD7nEBkcYsqSPrdRFa9d6Unpss7uriLALjHKwFRkyCa8kYG",
  "key17": "DZ5USy3WfBDMwJfyX6DDSuuqn9k4BPpbDw3kiSKxz7swjQrP7bZU855WCLkgE2eZedsY2FoibMpDBqsDDKKgEWd",
  "key18": "DDLDHLUBtUgKiQE34UbFqQ3aHSd3QTKYUWS8xizGeAfyddFiB3brheLqApg8qT7xM9J7FUeKTZtrELEu7JMbAjG",
  "key19": "4orA45qEWt6ifwhybVE4Pu92Apb3uFCUasxzHfbxbAxsghTbiyyDVazQfuhTzipQjwZwLUcKc887eEB1JScoohuw",
  "key20": "KxmB63tMNyAvYHMDrhZ9wLpDSXec2quLQCdFoj3Z8h3hVoXFLXPjNBsKKYdn1jAbb7hiZ3rmvExJD7pD6UjdPUp",
  "key21": "2eQeC8xC7Dn5mL2BPsmWhKJRAcfK4NDDb4uV4ep3gdo8DMwYsQEWjWXUH3WKUA98bQ3GdA6KUdv34tV7VCRhV8nZ",
  "key22": "4Jbf22mCgwWjLBd4uUhdDHhaynj4yP6RSmV3FF6QFYG457N8hGyC4kW85WYAq72a3LubtjfZbuHny8RgEreoYQqe",
  "key23": "4nx2ehKht8TATMbQ8zimN4Wmbxynr7CU2m9KLrAXmat5yES6M98oR2pRQLL9MmJrZPzKV8RwgSHxB6gcCxm6MnMG",
  "key24": "3CK2C6Dbw1VC4izTnZ45XXiXhDQ1UaC5ysxyhomgbgvJFyN9tkhDWQ1KDnHAPxptmVNJDyn3xvmq1QLZWat8wVeG",
  "key25": "4NrT3Mbvons8nxqdWW66XgciaTcR4WM9scrid2WwE2ah7vnDgG1G24UigVZTmZS2Bodzy7RGwMgmQpcH1cTEskgR",
  "key26": "5W5WuvNDRbrXJbyvHbH1gKfz4eKpa1jVHJBqE5XC9nF6gfu1Aj4fbU2BaLh4iPrL62m4nuE1rLFWqfDPPzpHzM9D",
  "key27": "5EzNPppb9WVwjGYMuY87Wz8XzdFDLjciuAbqJS7uB4HPiYjsu5pxcsmAdSug185b2ztZ91tLkS4pKQsa9sktxqib",
  "key28": "NVV3d1dqFAdCjxvjuTbPuWaLATgZekgrQ8HAixeZkm9XN9Ppq6XnRZGBVr219RRkNiHadW43wNe8Cj87Tz3cETk",
  "key29": "5G7LpWeLmAcHSAz8dRjRZFjXkCPX54pYozAwGjBhCkfDRnn3GE4fiVukNuod16yP8hpCPYQmb2RUrf8PU7rrbptp",
  "key30": "3PeFCUTZbXooWHYwz5VunXQhwhPN6Ao1BTN4BS8Q615mnqjCJ4joVJF3VekNL6JXQ684PoeTFXC566DCGhSr2d2g",
  "key31": "vZGtho6N4NutuNQpDGM5a5AAmDrj6Fk4iQnNAdqKcS8uBALv7DaWecTuk8Hdght66xFsMidNgJauSKAdAEaPZ2j",
  "key32": "5sxqcYAgoLgkZE9raq7pWj3PjsGaqcFQXCyrFuq8CsBoUAWYRqTnCKqWptQsarLWwnrC8UvKQqdb1DDuXfFD84RM",
  "key33": "4s7MbRa7W4H7G7MJiCYCqjUpe3q3Aa2bFa7ipW46W9GG8N8sSDtYCxTEgQsS8FSpjDMUV9gqZoMZ3yzzPxFXbsEF",
  "key34": "4UjeWkhHLzBnBLHeZz6KXGR5tEnp92atH2XyDHPBcHht7ZjQRuPoLyKFooHhoDd5sh6ZqBpobd7BDCccLWsCWvNJ",
  "key35": "eAZQQL1pj9fSYfMrt95F3h4mNCCMHcuhf8yMuagdxcg1mTMQE42qQmQvGyQgd9BFq227uZ6YHpwe5iYg8RqotX1",
  "key36": "4755qECA5fL1YRN3nzSm7swtNWZ8R1iP8zLPfLSFMYnbbLVgxDocK6cDaz6XgSaMVQRL5yWwde6CdUFpx5SytHhw",
  "key37": "3dry7rCBHHN6JBhWdj6Uf4YcY1NSxNPq9rtwU6LeoR5Y8nDZxoXujWCUJMEEvrQxrAQXNWnBHpJPC9cATSL2Bc8X",
  "key38": "4ZzRSjSCoJTSx6kWzhosGKE6mvLWgc9xRzau1M1QfoizWo5mQTXh6UC4UBH2MC3HseHN4N71kE26sh2MiZGPEGHa",
  "key39": "5VEUemEZQFka1vMiA5JZguGozFDd2yPSe2iqf5DsQp62snkvf1A7x7U8T8ycnNcR3bi4BiJyzgUnhgdq9dTUPfiZ",
  "key40": "2PRTiiiyUzjf7NyCgetAoTbahX5hF8ZujhjFTbDJF7uJSNyEYBikL5CMo7a351HvimVA5hyrodQt2nMCYsR6forD"
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
