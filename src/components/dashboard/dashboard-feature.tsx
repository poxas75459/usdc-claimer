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
    "5mcK7KeN2TterV2jgFNmZPLDGBD7zgb8xGqCdiQ6TjAkBSKyrho5eAL53DxS3Kkp1VNHBXiV6hp2QmQkn7xP9gLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mcz7F5HBCWbXawnK4A6zYapTwVmvq6PoapowdVFPrWLqozjFDGG18Bkijx7Pgwauh3RJKmu4xnwTmtWokBv5nr",
  "key1": "3J35PsBge7LxzGEnbTPpXVvx2Yeb49YSvyF1w1H1Fqg16gjiwstQitJhpyyHiUk53kZi8VunGSGHXXHA2WvrE3xi",
  "key2": "BuaPWEMp5832vGpCjGM9DQnF7R2Wxp1cPPbj5goSR8Pj6Q1qijUQAs5z8fm8HyvWnBFzMk9KERBzKHNhhuLQfBS",
  "key3": "3aoQEzCq4ueSUPLbDyubtFGX1kvVcakMKcrhx6UgGRqXoyHQDWJPBdAGHzkrgK7uUHYmvRBqnuf8Soh93RW5BQp2",
  "key4": "po4VYYMB5xhbdiuAEjqA4xq9beeh1eQkQ8kmmS5Tk5XnrKLNYzbgNdRzxh5EfqNuXziUhJcnkGq95xpWWhr2zQB",
  "key5": "39RkV41FmKVWqrgGtfsCsAfUQk4taraYPhHFQkwUTpnz3VR4oY4BBDfs7GdyAYqSbqLhFtQ2Gw4eT5Xb4kJwVKJK",
  "key6": "2RwQHxWDQXjEdeb4wJ5ujTA48Ce4ySEdqYXN8ZABrzbjkSCAooq51WB5n46zu41WbL9HVqJ9D1ijHWqEehAQ622X",
  "key7": "3GeAudtziXTKz7GMX1A91MMdko44WSLo1JbNWkWwamTDRtRu7ucFnyiXYsR4Xnah5eBW6D5yK4tadXAiakFKGUov",
  "key8": "4ZLSV1cH2yyBXWZV1DiyEtZHPpnEjn7wxhu7JtmZi3tjEAuokoVHoLQ1EekcjKYfHXBQwstVfRxrjZu379Kwe5TC",
  "key9": "4zdkV7NL95nJL6dNqSSjabLH87vKWLKWPq4qCW9VpZFb1MKiNutXUcU4MG7LPk83sbZvyt5s2VnR7Hc8GU1F3Rur",
  "key10": "2bKR9mJJVAC5JH7K6VCSUvX3La9B9YLuVjY75twdkYGXXUm3Cqk7iNyQSzFmwvQv6cpbVBQ4SPnLZcUcUbaXGZ7y",
  "key11": "3rFH4skPJ6AQt3GozyH6i2bHvKcNtnGu6wxxaiC95kTWNutxQhgCC1EyPjdWCNvZyVsYhx4zbEBypUqiCdBWtcdb",
  "key12": "58kzSH6SvFZyoeCKKReRnXbHwLubUKwCu2owLsEBtsSkUG9TFhPBh1fgdghvzd7Ag9NJw6TUQZRC7AXC57gLBN5Z",
  "key13": "4Mcc2YKUZE78sqaHzy1Vne5db799MhGKonabqjijJezhr6ndUfSHoz1FYB54Rqe9T4piyYXM9TxGMFDvXFm5cyXx",
  "key14": "4u6mhm87Bti7k6CvzE87ZQ1C22jU7bYzMvc6AEB9dPRxeJ9iGbi5zHzDQHNaxTCfuxCPvWr5o7nTVuoFfccHb7n1",
  "key15": "33r7ubEhbDzns2d1v1cdU2o52nff53x673cj9dTPW1SVsirUfbXYe3LdsCuQywXVfaQVs2EbbarVoY1ZAuicqbyE",
  "key16": "63DzyXRvPdvi6juGqHG5zVKj4K4sZpDxKi2rojEw68uy7TVMCfJB6KXPfLr1W5gFapuqzVyCm2Z7Fwv76Vpq1gxh",
  "key17": "2iG3bAU1pwgjH3eBkySa4fpnZDrHbnAmZ2Dvpc6KMsLMGp1v6ZEzrrSqrhvyLW66vwpAB3doDE4nuNcFoUPLZgJd",
  "key18": "4nZn6MGMWFfo7i5Jcnbu4V1eVujsoCPnsGUd3NhEqZn5v7Bp6mwDHZD3y1wqVpFf8jWiVz1vbjfUn3wJGuEqrT2x",
  "key19": "AEW1HhA7FgSju8YMbYaTpTzEG4VRY5FxXgyzMxxRqJMd2gtdcmsukak13jb8kMZJGJFyNnDAkyWN3tqEdRnvSDn",
  "key20": "oEtLDnLYBkK5ZDD8taC52vAoCzgribktF9w7S3FiweC5imqizfsLmdn55MTWvEP5wvUe2YJCX5URAaPbrVM6YSA",
  "key21": "2BK4YVDohUfXhx847z5bQaDx54MPjaSeKpCYTrkj9ey7hk2qiJ4Hs9BUrBHNGWAL9sD71Viyb5axxP3nwBBRfhRw",
  "key22": "2Uz6xhNK7gJnkzwzfzjC9P2fk4btBxEFSALH2kW59F3e3Z5P2UQuqENzKHe1aVu39eqaihNqs1hzobZyzLNVD9Vf",
  "key23": "4AgTvG2CUxxvZVjKU9yi22DQ5azKrApGxCo4f12eV3yviAqyN8FYhXKWoR7h2VixYXx5nxyXMtGptnztKZRfC17E",
  "key24": "5iP1czKGXeWW1PG67oqiBZ9V4PhwdQCrbnEuwsw8SsfpcWvcNPe15S5Q8imQpyKdpKZZhCdVGBhihzBjRpBjK8jD",
  "key25": "VMr4SCS8smxFzEd1vviAr6gsYQCFyYtW4vrMvMc3bRUXBwcAj3KwHqkhtJeQFMVTSXAUodpfziNSY3ETSBdi91p",
  "key26": "59SCmMs1ZhFi1yuW2521cevE7PasaJsM29XWeDhtNwb4dw9dLr6aFx4F3JME4YZtAUA9XhSu1q4KuwtP4c2jfxPx",
  "key27": "2AkMzTHbLAr4zF3XnqWkn6T6wp32LSaS32A5PdwVLBeeZdUCvKbPtiFF2HQoQs5SaGrr7A2pbuvoXFtZwYFm74q",
  "key28": "3tVQ2DMuhhxML9K6yqfb4Q7eFLMWNwsHzKbuNb3v3PUKozsjyWvYAChXtWmEc4Cbysd436ZLbsWjawbYfnWW6F3F"
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
