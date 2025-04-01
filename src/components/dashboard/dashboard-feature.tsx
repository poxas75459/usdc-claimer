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
    "4DoANAQ2QDYZoBFZ6dXjHtiDmgxwdztHgAV2ixi83SCLVLoMPSdGWGSQnAgZJ4brX5emfxvhecyK5kKD8Hfs2M9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AqG4VSBq1ZZiweFeJZh8EPdVz5gDHNevzHqus2nxWNHZtArT7Eb2QsPccZCfbx9Sxnu4cNUdA2s7ax1JFfu7U6G",
  "key1": "2Z2fy57Rj837bTb7N8yeqFeNVqhAzLHGtGnC2NxdiUYo4WvJgAgDXZpy9122j8KJWzHg4xNo8z9PAUcFwhLNPy9i",
  "key2": "4UVFTLEUWAUCHEZjSaSiNoC5AoPfnLJAACdAhdH5SZh4hxnxyGmY7MTkuDtiM6p5q8oBWC2Dvt35zGPFWQFYVcLB",
  "key3": "WiAcL9CLEUnVbXVS1w5sfmJPyxWprS1CbiiqiVgvtmGkkEwyrMcTSCZcYVykfyjtkBeYbgNXoR4sFbmLbEyBAWq",
  "key4": "2UAGTehuhPrqY13urVyD4UPcskkuWFjPC9PMduafwg788awb35yPbR1VkkJSyAyeUGZXB7FWKfwnKBDhJMN5jChp",
  "key5": "WWg6GKXV2xVVBAo1ezc7SbxQ1L7DUfVYKkW4ghDCLGXRb9NBbges1993SaEyw5b5iYw7Faf3fXKZZMLNHmsR4go",
  "key6": "4ZG7doUX747gM9LKJXGYdWuq9vPkrBVtbV41pza2rSnXNqmdYPeFkMhe8zu3VMuf6bg4vUeZ7Rv2ZEVpgktbSSzv",
  "key7": "nCcENgiYS3bSFcweYakm7jBGf6abAE5auPSwSERkyX6DW2aMxF2A98WQ8sc1xPQtBXwNwx7h8fShQfjapqV9c1T",
  "key8": "3QbSauE6akYfsdrGNASfga2HGkFjB6j79Pai8t6RVuUCKedeNubjhZMY5NFvALtDyM7J4GNmzcbA1dAgHEYP3u17",
  "key9": "3C3fbkpFhmC1u1bKy7JGxmcbAEYkdoEG1y7PKfaEjEiFmCaRMKDuscKrf3idQBgTcM7WwWuhGu5Ps9sqwgWfZ5oc",
  "key10": "Kynyu2H2WPZQLKxyvqhbz7GMc8mAJhmYkecyDwm3sEZZmaHA1fnBfNG8V6dWbx4c5x1b72i2BC5qHNNZiLhFb3g",
  "key11": "4xHBWCizLbX6WejdZ3xZrHqjme5tCTvvWTh9FtTewHzVWeWi2ZTEW14GxKTPxPcJ8AadPhWjeShXy5fF1DQDqL7q",
  "key12": "5BQ5R6UU3gAEXFtgj7yCWb24PUCb2iV6xGn7ur5gJnKBFn2quJoVQMwiDetkPiVVYWveZTuewLmXxXPwLPzZgRoM",
  "key13": "5o9FkP6RKRg1LCQbuFbdQZQeFXXmX3YxMHY3EMmNWtQu5qSGaext3rhMxPHJ5f4aZqkDzfinW4dtnho9hg4EKmYK",
  "key14": "2jgCiSNBXjGMSxzYVk9e1xADZDzd9MfiDQtjRgSzcZxLCVX9GsRzKpyoR558f8T86yHekGScwovoVvX9XYziuUYo",
  "key15": "5z7oq1MTiDqW241dEwVxUWyJPLKfGjAL4nbnY4bUyBVPPLwPWU6PZCDoiBDa6oFBXC8qGc8CiT7UUs3Q8ett1m23",
  "key16": "3V5PPtCAVYezWNXV7AGfc1n93KDe1mPo9P5FPZVecgzEpeyVkzDEmK5A9w5LcmUs3MiSX5g4nujeyNgwnSfA6pU",
  "key17": "5DhES5buEMBKoen2zXfvbTX8FGoaRpvujciRomok7KqzDXL39jDT6Zt6qgRJcyj6KVL8Dw9BxLvbaR8Pbq9HYJrs",
  "key18": "3ucPebDpXhtabexSx9PrWUsbz1n1oP41JdbMaCSfhL5cWZ9K5asVHuH8o63H7SSeRPTfE8qpszCvw9LEjbE7YHoH",
  "key19": "3LjKZNyJYiBgM8BiXxsyoK9T6DMegXVXLEYmxz3tbXHagLMAG78ueswTTkrWobRuricLuAbJ3s26H438PZQASgXe",
  "key20": "5iJRdPZFDcpZnasjYFGbtxYMzoetVaPuqrXDS3FrLjcRRhFeqrFUYnyUWx22sutKrEFqD5qUquN336eayBmY8sfX",
  "key21": "5nF5UbAcboN1ghc7t3bNyzdzR28W8zv7mZd5Mj5cvG6iPXc8P6KgHowHs6YUxzYhv7RH6SSoa8aTYuX9SmT8tciQ",
  "key22": "2VKciguMzbGjsdHokRvgpEtNLVxAr4ffciB7c4ojATAXpVgsYn3UT7jpkbpmyNpkfLfSwsbFweEuBLitU6MRVVB8",
  "key23": "3LWKQGTChjSd1pT27dYstj9J3JdUVRgiSZgmPgyNkYRooFWX9nVWvPcD9Kv641o8GFYTJErU95CHQXgkaXJjHTs5",
  "key24": "NrXie81hAY3NVGZFgYRZC9m5sBt19LwrAjeEjBTWDsyC2ebkd9VavXG873faQPieT3u5YfLjiWUAJWnG6cUL1vs",
  "key25": "4f6dbrSraorQqPRQMoqeVgqZhwbJZSZkA5ui8ACVDTeBjn5BKT2YDMLgV4E8V37WZRqhni6QvWqWB2oijAFnEmfm",
  "key26": "gMsrF71WPav6hRvkKppfK6j1nBJQ4Yg4xx6X65cV1ZwyKYfG3URHXzw1sx1fmSArzEixH8B1bcCXqzSW384XaaC",
  "key27": "5EQ39vBSmvsUxtz4QXya17VTgSKawbbTvqeck3ESxRbVVbYqmsK6tkySbPDyUCp8kMfPPQvQEmnLan8zwkEQLgCf",
  "key28": "cR1S9G586oEpFipwq1vg4VCMnxV1BDb6ZioUznFxhrJKRtPu59rjGoiWdAStKb2x3zVy4cc1nzRP78PrWm5oE4f",
  "key29": "oXTbDYKF7vPAhX4gRpCU5EZXuUFcp6UPNDCokFwgMHS2arxXRwPHJu49Ecd1mVbo4v5jyUt7zcvq8m9UbfaQtA2",
  "key30": "5quRbfktDccyN4HbPoiJ9atdKYzcN1xKRyrdgy58fYaLUbqFa1oFudEVMb3HCM3pyz8TS1omQ5Mj5zszsVQ58hnQ",
  "key31": "4DsiewZKveTmgj6uSWRmEX9KS9kr6rsWfNQtHQhqmBiPrWPJxFxev3X5j6D1LxtD6b623nTBMqRBSJj1DhGE5js",
  "key32": "hRbWqKT82MBchc97SKo1d1qzh68z9zzTby5qRsb56gBvKsavQ8N5vHXkUZsYwDJyJpZim7JKTirdofoMfsqi2j5",
  "key33": "2DzAFwkPggT9iQnCEY71XmBewLqZMqpjuGa7j3h4eEnQZGuwEAoYcepdMTRSw7RXV6bKYAqsPi7fqBidez6ofxU6",
  "key34": "2WFx74usCkg7TXttPAe4EAVuUuKs1cVKkEspEgq4tiAJ9LD8enQXuzQukBijaVDUUx3XJMTZnHGt3y6oXJfCtf8z",
  "key35": "31ZjuonQa82rsxqLw8GdoFCNRpYdX23nfgWcJgfJEMhfyYEMKDChdLpgw1z7xbrT6rEVPxvToYRQndSUUovE9PvN",
  "key36": "3y2BMMz66p5KYXkhkfescRRN3gBAq5UHFYaYzvdhatvL7m635it5jjEbYBAPGrCJHuHnbq9PTU7V8yZDg98Fedau",
  "key37": "5akrqDDQXrDRBdYHvQDFGeioJNgpsbqJobp7ZHcVTYxyCQFFgWTM5EuLXQC9hmahV413mupN8KjVkmcGrV5Nsbcg",
  "key38": "33rH57GnQtQRbwFqgcgb7fKTVN2wF4EZZp2Tatc4fT3hypuTQuYeznfnVLih4GW79qrfW9VJ9WL8GBxe6SwSRerX",
  "key39": "3cRFys59shb5i84hPhxQ6f2N84gZsxSR6sUVcKB8MWf8BjH8wBgNcQ4KqFoNf4BbvkWfYZHP5LFqEHX3NXVm43Cg",
  "key40": "2fVKXeLZh3QUAUi8j8DsQFJFuwYYJFc6qbaHmcVmJT6juHsPnT2LdQD8LN8dQ6jmNdLRegF4WoDvboVRP7LbNcLr",
  "key41": "3ftUAKWSMMXFnzpc1AZZaxJnX5sGGNCb6zwVE8AjGR45Yhm2FyvWuF9RR5bRCLdJ4ukp2kr74vee73sue96RnQvf"
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
