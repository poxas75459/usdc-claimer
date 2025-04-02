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
    "3akEskVAuWV1AjUrjTG1BQtzwYRJ5tuGbexU4nmxgDkUgB7TCuGHfvPiSjxmKxzG9BXEmCVqGjoRDcdSyk9Aa8nE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HhHhm5UHUfCK2zbwGSz8msR2nmwJqbEzPJ3VchJ5hezo93Pg1yGhWmbjr74T5ciYQDXLdf5xfyUpmiYKLzp4bJT",
  "key1": "623LioYzqQSEdNqd3AUdGHnnGrPxsfmYrQfRKZQux8GwNU15ofJskJbDkqNykYbwYnpwHYAcZ55EomDtrqdM8QXj",
  "key2": "4FwNctEU8hSTggirJzK8HhBtXZygJkueGz5KLbLJyhQEfrYEhWFWitB3EkS9ZbFR39T7F52XT85UU32x1W5ZUsG8",
  "key3": "FWvUytry3qQ5WMW7W2c28WH7RBgmYor7f78JAkw2FqojMNoRPJTyycu1NETZzVcpSqRajxM6ckKAuiypTnMvDQH",
  "key4": "4wNFPxHRX1a9nTujJAcbpxwvhVoyxM2YShbhziDfieV8QXACRfvuxnFz5VJ21uXCLPnBV51anRi2zALrH4iZYGms",
  "key5": "vCchSCMSDqtLXSpGuku9M8ABxmKD4ND85p16B9XdUW8eLE9piE6QiveX53sd7CQ5wEMpEL2FQWqgNRZZVDchVJP",
  "key6": "2f4gu9p8eB1zGnt5cW9EtK1gJk6qPFBsfrRqA1eYbQeLsaNo4vesc4KLRgduYFfEJaAnn2by1NvrfujQ8MKW5sdx",
  "key7": "58Kmt83K6KHQVTutr3Xdu7a2n1TQhhfwXAksokNM4gnNkYiWSmVwsWpNq38Qi7Qr7pdW55KpFSkoKyPWBciZQb7M",
  "key8": "19mpUMi92ynz1iWSSt5wtc38dRoSUVfh3kJGzMTxegnNKNqMpdPvZykMVyUfewHJcu49vU4qPt63JQbM8RHPEWt",
  "key9": "uZWkF1TRoGGNshN6Jtnp37g58uyhGYqyqHYJDmBQvLy3JfZx8i3oRgG1W9NMxCwXKZwvxyodAC9EeA39UyxMs7w",
  "key10": "3bDJV1BReHBUwfbaeoPqY7oFixv5jjG8CemGo5FWpfTXjGZVAZPoUSdDqny1NE8ozX46xCF3VV1TsgKRcrtASstD",
  "key11": "2y1z2roUb1cGs7x3ikhPd2fPsRmqb1Jhi7kftpMZCvJ1CU1gbnqnNYL98kPY5oCgjrKYvd87qYTbCWAvkSKMitJ3",
  "key12": "51rop1UU7iQ9nMhKJN1whdrWk5711ENsHTiZ9dtURgogVSWFK1qStdQUxoy4JNnwW5UpiFAGiy8QWcT8GUVYXUBV",
  "key13": "46quoSGStBcd8QLZ8XWRk9Wc1aQ4nvHfoUp7fbofeHiFpD31RGK7SkCA6hRF3BC7sNtYoZyi8ZNXVeihKX6yw8Zv",
  "key14": "2fyh9dWuxoLutA3xMzzShMnCrA8R9ioN8VQw6MySQuta1fATLgPuw19VXTtBzsSvGMYpkRT48mQhoU7ymqRSBtkv",
  "key15": "2HYCyPTLDQHNDhyYPWJc12yuLmqCn5m1mwD38NF4654ZRS7VvUGtJVJGn8onx3fZNkuva4SbgYK9hUrD1dbNuUNd",
  "key16": "5yCRQ1uQwykc2pu1z5qGzh5dTZYTZyLobuQRGL2EaBeGzNdzXbQDRotwTekHRNPe6Vf8ggyrJnoV7GnsHkoJX7Rp",
  "key17": "3H1Jz7EH1v9vvDjxzz1D1r4WrmLyhz7Xa7V3jef794uTD9V5eeaDKGDKc72An3A2rkLu4fbB76kwfrsUcdxVb6bU",
  "key18": "3PtdmxchpneituvzhYsc2E5VQ7ZGp2Gdb5rJ7HyjMaAMmsb3ZiPmXGHWw1LzTpTqAWS8G4mWU8vSufmrFFWZeUEK",
  "key19": "2qzstyQUpTyeKxpjEPCusUPb5wrMMs5juLXjy4Z33YhrUg8ceiKwwHr1EZRQ3HeDytMWB5FATfLAPUzxefM57kFr",
  "key20": "3ikJo2EzWMr36nYbD4FFNgtkLbQmpUixvbRUC4W8AvwEV3bWdDBrDZyNiyroQkqioorKbccHxcZJCLJvB3bocrac",
  "key21": "2rFbFFJY37BEUFoDyv2dVwehmiuYK6YJSSBCjPSMTRvh8LNAxFtp9JvWVSdRXUjc3PUMDF4xUmqnqZDiyPj1eQ3T",
  "key22": "67MBPeWQ7QNBeeHw2p6eZz6haLwyhzqZspoeoEzPPQrpQugqQJ3vi9Fnt9XX6gy5eH83AEg6HtXQbm6XA9LF47st",
  "key23": "t8ZB8MWCCUJNcScRkUvHNSNL5vdeo5UK4Fc6MqsHMJQJ1pDDryGcD8XbJkXzoGGjbHNMWrLCkUZgEkzf15Jvrox",
  "key24": "3funCCQajw2uw6uK2Y6z9pXnai5HCYEBBMwYEPzorkPu1GK7kPiJq9uUQzjJwvcsiB98xYwdyywXqPF2moB89gxv",
  "key25": "5QuMwUSNyDKTNGrpugwwEHGfVXaAf2HGipkncd8wo6BducjzVxZXUp542oeBuqpMruQV1eE1BMr5UGuBKSjpGb7G",
  "key26": "2p4W5UsRAKukvqX42kguJ3aVc3erN2cY5oqAHy1sTstw4eDoCYWsUeUBjnL4Jv8WEz6EzjQSBGveTUvtgHmyLrkz",
  "key27": "2xmKEnxSwDf8mXyEZ22cBbBo73mhtWyNdcnT48KgfvgfUiCmKiuS8JNqy2ESmcvgBUME9BBBUXWVJdYAZxLXWSei",
  "key28": "2MTcS1aykdZg5HKDAp5PggnQPGE2TZp8Knxqguq87W3jUwx9gtpWNnpQhDiAhRim5PBgDx4NDqoH1nY6qxCghgJ5",
  "key29": "2fHizXV34YGFY9wzBNJMyvUYBDMCNGrj9BGCYJzJA1tRCb8827kd3BttPt2HuY6fNMXoFjDQ68FzUK14RavjXqHY",
  "key30": "34MX3SJxdt7yG3t9RuKcrETzrZrn9niB8Nyg7R5GGwccEbkmHDDSi8kjGX1gChMP3PdtW95kF9TuFy3nZCidtwqc",
  "key31": "3aRnXexNM8Wbw8esqJ1R2W4xLuDfv7SCxBRDwxF5mUVaxb4ASxbst1JDfnZT18G6F4MUKtZxDDnaSJjEY7nVmY5E",
  "key32": "4Qo13gM1wPsaoVbAhV4pmdr5VVrEti2aSLS721SNRzkGfv4vM2Kyd1cYmXGBwC3c4sQRddJMjDhm4gFHwPNDBwhw",
  "key33": "2h5gCCVPaFhoVU8q7WFfexCjEgcr7Ss2LvVwhWghNjoqXZJqm1EJgB32QrpUxPtvCGj17jdnVDAzD7r8dLgikJTR",
  "key34": "24kdgbudxPsGta6BaNTXrfNMnEwGBtjAEmZS1t7e9XCQtLouwjicFrWA5jBrGw2D6nJGgN2rWjPPofNpymXYHyMo",
  "key35": "2UgUCg2Uade6FoSxYDWGCkQzPjSzxorCefULcJzocJ3qKgu5j8Ds4NES4whBRya3Y6Z77krRNevLHApaPcH2cd8h",
  "key36": "LwRep2SAwbTFVHoaB3dzuFthAnJV6psoLdnhcnMsNbGZ3nVcbWsbzopiqAus5AU9ad74cRY72NwjRLSGZVn8vGR",
  "key37": "4rBVZvvSjLX4VrH7apZNmipz7tRhsXZmNpp4rGNDSEh86EWuoRSZWHfLsb5MKmyjQGwff2ZRjQ89gNms7kUJgwbQ",
  "key38": "dLatQHYPaPFLqGWxn1dC6qTrnz4nmp5CSza4QbtZdz9AdzS8GkjMeaLQypDq1u6eRf3uCnb15sutqqPGu2XZE7n",
  "key39": "3S9zydLYXtSq4VyhPLcN16XemiRJqcu1hCRsaoR5Cjjc9qQcJhPT3omFSQZXuPptjjhMEZpjEkGWN8NLxaBnKxuz",
  "key40": "594u4c6cRsc3vXb7EYw76ErRzx3wjiGMqhBbG9DLc832U6FxvHgMx4SLKnHzpjjEp5SSsQTKS6qW2cGx9BqnEqbz",
  "key41": "3RuwuX8WF5nEPYWdJbr1Yoz3QZsTjLUXyqyTLPTR4VTAg7eU4FAZxnywwKcC9xsg4yo6En9Qut8frHyQvpMThQQE",
  "key42": "Wf8Rn5ceyriLsFzGRhqpq39hvn2yHLPUwQq6o3fD27ZjeyAvazGhCBnYEg8iwE53hoV92ZWCCYrgMVgsh7hhobM"
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
