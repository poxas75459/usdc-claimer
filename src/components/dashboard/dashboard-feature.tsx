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
    "4gvQbvuuTCcKuzT8mx7sN6RWD7JGfyNJbfXN13ae2diKU6o93yoEDvYEEKeNQkxqrQe8RFBG7uMnAq4u8tMT5kzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45tDznofZsxjd6RHNLk82BmK3uUwvKZrdx6PNKdYhJMK4RmrGgk9UjsrFsaYwN6AF7rShNcAEA41r9vBEkVfpsSy",
  "key1": "2MoNM9e9bRXuHb8ZxKtNNaz4rh7SSiZcJYPSFxC3kQYmk3xyvU1mBn7dpvJ2iypmmE3NVS4KBZp8qBmxPTFUTmBP",
  "key2": "57K82fSNCA9SiErtjP25tVrMBMxdebWQVg2pKT31YQGHpLnhG83fYbczCXLECP8SGCHktAQPKssejRZVk5PCuw1y",
  "key3": "5D5RBUb2Af9xYqDSFrwTtgqbkUVGR5hkVxBSdpjaKEGomBVJKynebXAdJKFJo2Pfh1Vmf9KYvoStr61i6RFc7GF9",
  "key4": "2RCKjLdqmDcmJZZ335HsLRq9FZ9Efi1GSW1LeaCGV5g2dkBGSLSeqfSsUAFM6bVizpuzGyYd6YpoDhGkZUFtSLJG",
  "key5": "4XceTqFDcphLbonPq7RwL8NFUybVZPLa1gtRTEQ59SpxEbXvNTVUBvuVPdCMSadvMRGjdJn8nCuuwcaBvF1zxLyw",
  "key6": "5duS7eihSojir74N3JKE1zxgLFm9ST4SHfYS3hixyE8RbUyunehDmQgkiXTudD939i5NC2HDEdoqS554RvZMHsdX",
  "key7": "2f7tyy5T156TVcGSk1C91PbrUyDrW93u57Mm52ZKZWWvB3B4GpVPjdJ6S5osqFRSSQvW9iTnUKnKYwHpTjyxbgch",
  "key8": "4tco8WvRTBbWgbRsXgLNBBRUkVHdtc2jHgbrUGGiJCPAUrt4KKW1wFikm3ok6PnnDxqFZ179sfxtdeEfgNeppzx9",
  "key9": "2Av3Ten4zTwmh5q9zZ99BK9xWp3Pd3V2aW3sW4q4T4sN8anPaKqPTGun2VQ3woEv4CfQBShEqDxMYyGZyQWcEXgQ",
  "key10": "2RSa6sLM59omw3Tv4r6N3ubAgRCGHVNBRiBuRqsQfPbUXDRsuQXAgdx5KaEpNWbJEVGKSGfQnQGfey7GzrTxT2N8",
  "key11": "5dy9ouPVzacLUBnKCpXj3JuKSsdWaQhhw719hnKDJEGLuQrPzvJ6n2mDwYQ3AtVpJKptvZmL754MHJRwHi7JBEyk",
  "key12": "3a8JsWbeVHkbQtVz4xBLW8i4Fq2ZNkjcwum5cVMCPq4QqvXhBenWT6SkApfKz4iSAMPZUJyRDjkP68bchkivxagg",
  "key13": "t5dkrteR3P7q4JcA1p1MuE3gHCBwYKqjpXBxAYMQzieBFWV5Uh8PXp3SHwNLiXHWk7gN8DMJSX4924e7z6w61Ay",
  "key14": "a7zv2jdWR7jKKoZiyZmQtxCrKWmJCMuMmpynmq6oaAvG1xUpkarWbFVD1d6fn6VrnCsgbtYdjoCprdJJWfQZFxC",
  "key15": "3JyGmpG63imZhpom4yWgn922FraMEvzR2SfSzTU8nZ76FKciqGbYMS3BY9XgxpbYcmupySz6b47WMbZDPHKLcJBV",
  "key16": "3WhjWyMexp8CdH3FrXpNFhQ5QQE6p9dLp46M8n1FXBJaDXcb1ce6sEq4dPkGEctDRKpfrJeRBPfpkyCLMoBr2ccn",
  "key17": "45uyrB8DJszueBTSsXY7nVFTNfFMEC5hmMxN96AUgxjCSJUsbHS638pkkqEE4Av355jYDeQtNr7TBHyMW4rUX6qr",
  "key18": "67KLNkp4AUh2RVRwzyXXu3GWJj9SKhwfXL4sQdtFTzu9113HSvTBqg6f63ef7ctWtLeAKbj4ZEBy6cSq1BAWnVjS",
  "key19": "2dFREyYtvBSSMsKmyZdEyheZ7SFyicqH3i1vdwd6tJhraKsVnBhy6iZeaqh1s8DQcJ6zipN4vVHLBGu5nqCzmtAW",
  "key20": "3pD2xnHPUZSxLNjwZQbp5FVP6zHBi2NYrsDcKWiavswC7n9RbLA75VreXE9M7r1CL2qRgDNqV7vxGdH3gaKzh1ZQ",
  "key21": "TontiD4XbwVCZZkhWozabSbwhkvbU1k5fkjPL9X9m3gbZaCY9BAb8YWyaoSZgcEi7ZvBRBTcQBsB65jCTXTVqNU",
  "key22": "4p2xd55nNAGJeENhmySYkpEpk4aebppRbT1qk5W5wkQGnQ14uJeJKUjwzJb3Znoj35x1TWHmtUwtDs5keHgiPdwa",
  "key23": "38NphrgatQcGYmXDo8jYvJFvwi4oTxrCR9rLoqDoKXYPcY8RPnJ6BMF8NGkXwF8B6qTPC7DDULa2aufkRDEzL7eJ",
  "key24": "3GgXtw543mMJiMBFDgs9kGH9nXnLecw73tevZuQvHEwajV6jrAcf2SWNgDRtQ1bmKtR6dJ5FpRGbVZkEsFpssv3L",
  "key25": "4Gdw3FXcbWcxi8s6nu9XH7Z7eVo3K9Rwzc1uSQ8p3mdsk9b38uWV1XW2o2t3pk8GzCcknZKxEHTJXKgrVkg9j7Ys",
  "key26": "28mQMRMGLLZJvjLGPjXWuw1bFRvfwaGsGTYos9d7BWyEnLce5yaikQAg48ysvAveQ81T1bKmRo1zbzZJJ3TGXrMG",
  "key27": "5kwBW6zevQnpVKEs6XQ2EF7siozN6TY4fr8kJZtcUhYQcoLkJSZqk1PtP6wDVxSYofCm1GeXydZUKU8XzSNvEqZ9",
  "key28": "Dhn8iDxALcGCXuK3FZraeRCZaLZELECQxKWCcMEDghv1J9PhVDBXCSRLg1WRLgErEFAPnMziuopuhLYZbDdZ4Jt",
  "key29": "JDRH9Mvn9wj5sEgn8RqvPDK7QadyojKRA86CYEiHpEs38PKdbMctqLPbRECMKtLGNt42UuuvaEBrucawVuzDBAN",
  "key30": "5hWAVDD7AhpoBY2qTCbEa52HwHJ3uPg5AcQST5k5ig7hLHMiCXovYyTWnihFmjvjpJ6aGcyem9WGfrBaqsgsCrU1",
  "key31": "3fKiRLRZo5DqLC1V2hgqG93YAM2ERrB6WocoX3HdXdrN3rk4fJZz8G4XrE6nPrFaM4iMUen5HJSA4JPKvw2SrtaK",
  "key32": "43SS65M5Be86MiTkpedTcaR5mZZHdL1qFn9k8XFqWKrwKDMKkYPhZZhS9YhUb3vgaXj7urJePhX1AussWGVYnQ2h",
  "key33": "otzJkzQuft1swtGSsX31ruSugaYUwJym1fJskPkFMkKyXNYb7QiLAgN2BA7od6gz9pghCVin5LDrucGMsiCcmXj",
  "key34": "28m6A64j31BPfpEw5NbT1U1a2NiCAMmMt5GbS7izDCTL4sFEYPZESJsfYKt292bobB4bg13QCpj4KDNd2HciRP11",
  "key35": "Agjkg3UX5c6VuTD1BCrMd1SpXq1iZ6doWsEDhtJJH3jEWn2JzbrEM2QzquD6U29VYS4BihLKVTySVzcreyfZY4t",
  "key36": "26hi8EGUjgyNMdpTfz6G3T1cccpDD7tWGP93xAyPzjUF3SGe92b4vnPboTtNghhvsGAVtPAACYiTpV7YYfnCZKQX",
  "key37": "2rVmF1HwA3uCdxjM3MSqLtYaWkJHNWxxW6UyLAr3U4ezWKE7z2cMenbcwX349TSFQoP5bFQ1ELgFFEBw9AammQuo",
  "key38": "B6KHGVFYrm2QuKjUX2WPm92ehAT7XWmWJynpe7c26M4ofbgeJ56LJ2c2xDFsbR3WJyhKLEJr1dZWVXs2HPzqf1c",
  "key39": "2ME2VGWrMUvjrhktDWFNcZ78PQjdGbK8jvYo5JfSYwgHF7EbzhHX9rwDzVDctFgUB2GvzZYj2wjz7YHob3R4t4z3",
  "key40": "4uwppyjGonBQsNijpdmtBN9NGAVdRAgaufeDa6zKkpKkqqB3oESi7KFD4cFWR1JFUpUYCgCGk4u6EZjxdLgHb3wZ",
  "key41": "7gahcP1qSX4E3popfYU7ont2MyPvy977wbuetAMXSAsgwRfo5z2aDC7zMuF765SMhz1vbj91wcTD8gAY8FijcNA",
  "key42": "bTf5sA8ZFrTX8YUmS8tYxxkFEVnKWGMK9jzg4NjoNqyoXTPqDkSMoitDQ5TFhVSd5aSUJjgfUred7BBmMmrr8UJ",
  "key43": "3Jj8bnndGMBv6Qc95XWWQMF5TWJtizMCDEfLDVpzYpJC4Eye9ggq2pWrADQa5e4aQpHqNBXm5ZJp3xHPpSAogyCa",
  "key44": "2LGHFk4cxNcjhi4r3aNkn4ASAJmrXVDgf4fEqmhanNdMCUwDS2A7fY6t4AvFJst2FqUBN8ZYcFrVVDnyfuUmBd4D",
  "key45": "JePN8TfxLpaiDdgwfLtn9MDCFsL5jFhpTedv5FKwwRCBwZfcVEXMRmVBxrJfQmQ9f3Bfv86fDoSL3rrBpE3xpKF",
  "key46": "zSYzJEP314H3qRRtJpbCEhMr7yKhpWTsfaaZYJUjiMWJkz7tqWGiJu6vXdD1sccJsqbmg4ZveuPLNVBmRoG2QJ1",
  "key47": "5j3bam4me2CeEnwVjjFHrBDqrHYkSKjpHDc77Zz8u3E1wGrg8eZ5T6zGa84y22NhzaptKWhB9PeBRrB971SxYh4b",
  "key48": "5b84RRMka7T887QV6981GEskBFMqbrydNdQ3E3tZ5TKcRP7G9CNAFUE6N12iwQtWhRo13N48B5ckGJTAyTFE3i3B"
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
