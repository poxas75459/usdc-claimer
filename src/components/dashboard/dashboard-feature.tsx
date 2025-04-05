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
    "5TZihUyGaCF6f9BT7JPRpdkKKkajFqSEqET7rzoEM5zMfDqegrKxyQBA6B69NVzwgjHDokFfa7h1NCFQKf69VPiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qn7jWSqL8LT7xpLYUyZzmx6LV3yrYss2rGmvE2nygRUjNxC9Et839jN2g4kGLK6pUwMpWYPEP6r8itoui4Du4o5",
  "key1": "57teLEniBJUAT54dm3YxzmYic6AeRbLZyc3DtyZyA326QkEZ9StP5go22Dz9J6ocvD2Da6NDCR2vF7h8LrXokTp8",
  "key2": "3StRQkgVrTUaqKfwcHS8u7JuzrN4vRyQMKfmmrJWeBUHYs2e6QJfv4TqpVxpYRF56VjxWy8Qxf2Bk7uYY1jS8Eak",
  "key3": "5xCeLuqytgtELr1NimoJVon6Lb8URUwiKyqo91Z9FkzK57VRySjQDVg2XgUy7vLBuxD8TbHZVqvoqqKxzqHYqkW8",
  "key4": "3sn9idvrvWgHnJ5QDWQTJVFw9rtLpVVxYine44xdbS7VGc3mja9aZyzjTuJnJDieCqSRDWoqdKwAai4UB7A5ZvYV",
  "key5": "4zCDNjmMBbsRQpp3mosMLc4qwFK3yE5onUVgcjqoQmiY1TqMHNqmQ6PjasMka5hapkJhUUKvu4xVXRUPBrLFQSFs",
  "key6": "NJk1uFzESM5pbdFcdQrToDZSrjsk4qmx4LPqrd4toprQtMco5e4W9UrnmiTnYWrZTstGqtmZ5nxiTm5ys9zoBbn",
  "key7": "3a4oJA4mGtNYbKyAuCgajRnND52SdqHVdwCZ5JHSVPtBYUWPp2Fm5bt9C2s32F3WQ5XaasToWWf3fg18qHnVnvsE",
  "key8": "66A2QyGPqtKpZBfrL8KW3VuoFrNXDVtis5RogN2mL6WQuTNF8CirR3dA8CjgQp6YrsirPVujNG55NmNi7PxkRB9y",
  "key9": "4XtcfdKRSRz5gRUxbKoMkSrhAKqKBVwvcgNEYRUWNpsqbHYwBZoHLer4CCc4RvisgxD5GPTPUxuXRiJBJsopCicc",
  "key10": "214e6QPMWESRBacRWuh1zhqP2XNqDJbdkk4N6eXqxJFuePwLXWr155vbvEMv4dHAXvkDnQeYo1VEWM4vSDiagEVp",
  "key11": "2vZ9CmRzPRhoPGZGmuz5vVTpcoXDhen9fnuSiZVqSJ94ZhZSbAPG2bq9EgwR1z8gQHdVXyAAjLXWLCePcPaGADbi",
  "key12": "wzAfoNkDwdzuvqHW89LcD7bM19FpgyDdPArbUqRzbRjSnbojxQF4i5TjMa7rZhqxBxa9BHeNgkeZzjYx9j7983b",
  "key13": "3TsMjqHjTPBxAMQ8y9TvTFZRNVfcMA3mRGEQEbajKK546AegzeNDcMUebaMwNgnFgs7UmBjw5FwCoCq19pLfRoe5",
  "key14": "5HwGQA4CuJADLfh5Rkor6pGYoJGYbdq8B2vaRtejLBo62CSpM6SzDKLuJfXqj5zrKwEx9zTQsCQNMZ5jDRc5ryhV",
  "key15": "6CyBLdGzmFvt4ekMjsnQF4apAQsD838mcZqYdFcCrNnzqWhiE8B13bvDANsjkSmUtHQsFLqc5YgPJeB41JSz4QX",
  "key16": "58F5UX4A5A7cBQs1x322VBQ7w8fKu6XueReakzttBCdSCAauSnZ4yHN2QHtgpXnQThSL1EzRzRusFc2CSEPEAZGY",
  "key17": "2YieoCmTrxchJcZQA3fKDYHuMa8sPdSenwqRxoMCcjnj9g5TYvHUPgrZk17g7CUw9rfspWkCfNqAvZXEconUfgg8",
  "key18": "58Jv7ayfnG8RHwQ88ZufNg9e6Ysqbkaj9BHR1rK1392jwCzJ5fznirWiFui2NGa2Cku3brqsy7KFysDDwXCpGw1E",
  "key19": "3wCxaWrudxRPVk5RNiv1MTBr9mFyFdigztpLe6yvEfx1SY5dE4oihRrpyU5hRmobUqKoVC6XXgNLTaGGskgrNpGV",
  "key20": "78jwxcam6rBKx3DAQxy9ZfcBP9JETRZhoi15u7wZWzW3dZJDSsjs6s6tm2GUr9AuPJaxv1kp1rcy2KNQvZr1Laf",
  "key21": "yxcfW3vQhF1nFSLxEyJ2UDEiXJMP9jaHnsY7ZJwa4k6azA3fb8ez2B8bp8VbZTHE9Mk1NVEpgvJVknWPfpXXGDo",
  "key22": "2T65qUWxYxhi9idytWgNBdspDB4BFKGKVEgebrPAW5CohpmQJVGh46moYg4wAhnGDHvxkZCMAtXL4H4x5dSwFxVQ",
  "key23": "4dyNF8q9o9KUko8Yas25nnu97awZEhD9mjbLKSfcENhVLMaFFQESoYeEnR4MDF5JUncgY5mVr3KDtAmxFBRfotKV",
  "key24": "3PZuRwWRTTxxjYfbUjB6Cz57kQWosz1ehVxRWM6ZdXXonsAGC23mkptPjvhnJosRxp7FfFPAVTHF7CzeEKGAEdxL",
  "key25": "4XZDVc9KxkCEQGu4rCG4Sw3mL9waEfxkdRjHBn5QpuXCf8Z5BfbXUG28MMsem4yKRyBTKs4A1gUQBorY9HtVJgCt",
  "key26": "289bdp7yLfgceXV2nt3i9GVh9PDvuR5cJANfvXY9bihdipcmK6XstLoLCtQvk88EcZ1sVFRtyetzDLDEFTKe6oTC",
  "key27": "2Q14FVEBn4Yk8EwRgnEE8buebZQ59E7J3fox9DwAi8pnqNTALV2aR2xACzwXm4MVJPsVmCPPdRusxLufEvrA53az",
  "key28": "5JQ47AftFKj79wkB4R4qgm3rR54dfTK3SsiVme465Xz3NCehh3GjQS2F1hVCZrepRAb4YczkK1ejy8h4cRmtf2cF",
  "key29": "5cHjsaXkChKTuRCdAapjASMxZssNuKy7U4vzMT4xzkM9ZHTrrfCTe8GA4Hg3jmgzx8qHHbNxBidAtWywan7FWfN2",
  "key30": "4vypimjJp18pJHHH3rwaeEvwYRWZFP7onxThfpw7XdndMW2X39zLRLwJmm4s6JHEPmUSPkSpxzVmfeF76exMSPcn",
  "key31": "5k92xyEEVYGh6eq6evSuC94GuTXSPrKkQ35qGn7ZTYYeYGrQzpzNHBHgGVJKAVdAndDaqRWj6Yxdwqjj8DZb48BJ",
  "key32": "AyQeBbwFo1sXLhJRaAqvVFMdjHpjwT4sr6gRa2axWyevePALmU4AhCEFJmDENP7AV75weJL2Mz2dzzuiG6vAoS5",
  "key33": "2PpJWAVcyctxYCA42VmL65ZqAEnBwST9n2tAtGDP95xiGyeoUpxW7FWm2eQLwErsNEHXjt4ZXKo2JWJMHfkzdFDY",
  "key34": "5S6FDoGpZ9vF19kyXLAJBWPGJCNsZJTbYMqqPfDtRXkEFg97WjAyddNEcXo7pmtV9R7byaW1X9SYg9HmWf65u3vX",
  "key35": "4cLAgijm5pd7Wfu39y1iLm9WBaowTfH2uioseACSu8xpSXzN9Bb49yGsM9d7X4pzA2rDKcSpv3wPxpyBs4upvPox",
  "key36": "914MXo73f579H6FJ74MbB1wK8Ym9bFVzMhMotaz2UtZiwNRRmQYuK9qVmGhU5KADyufmAKpRbj96hbfAhuUxhHR",
  "key37": "31cAZPob1jSBUhsYRnb24T3XNiutEkr91YF7N87DZz8dSaG7q78xavkDXwQyqSrweHWfWR4okeFuaHk9RDz3cNaG",
  "key38": "Es3wNGVKaSDNSgiLHrCGEJGdcvjvJJJfJPDfztjvEuSHHPCAcc6qhmvMHR5KjwCnay55nVKwgmsqfs9QSB2DWx3",
  "key39": "4YoWcSje5A9UJ4EayWMLcy3ouu6nQjGdb2jrDpeM4pLxE6bjAyf7ViGAwpdZEW3UzTeFtTnhV4TqpdzHpmBtHLpn",
  "key40": "5NRFZee7gKPJfpFNthfBxp1zvFxeVNN2D3CGk38j31MKMqueXTmP2ao1ZG4vNRhSTqK7b3MqNNxnCCbQ2K98CzS5",
  "key41": "3eLkpk4BEuz5tmdDJyuv4hpLDc11SNGPHiMbtJzZ3qiQRb5S3EBUVsifZ4q5mxdKQYU9q4jy6pRrF1RXDMjcVHxV",
  "key42": "3bgckgLd4ig8AQKtLjKFdLuvCJSXtexZYDNccvt9hTpZbQhn24Lxu3qgifKmGS2DnKj9Sbh5eCq1JWQGDHjWshx1",
  "key43": "Wa1sYu38ZJpEeGBzejPGjW9MJAkx9jL9Bg3HpHw82BXUpdNF4MBk7nyJ57NKY6veB65fw1NqwFSGbGTTGWX7zJG",
  "key44": "2MVSHSTod3mQzvUgT28UqhSv3QyVUpZz85kdYW53hoimBC47W1sK3JoCC1fsTbi1wwSPsXV8Yu761KkfEQRHyELt",
  "key45": "5KZWk8XMYm1eaWBhDLaQ8x5nhkJCDPymZKpD8as8LjuBMtS5sDKeCdfd9gcEMHwarmcnAmkeNDkkcjtngFRMhFmG",
  "key46": "4fyowzh8ntvgzCsAp3NLCPTayFoQfuCqJc5ZzJNo4ZMBuQ7Jj62vZ8nCaiqx8ekLDgQaQt86y58e6NsfRLii5NYR",
  "key47": "2jMPi54AWQYu23vxdpuE9HmyYLc3e67TJcoi3TCtDHVR2FBBPjBJF9H594FpMpoWgpRZmNDyfKokm2v5Au7CgziS",
  "key48": "5zgryXZCGDrZn4gKy5xxNkzX7FKM8WJvKcsVtrj6dyuy3Xr6Dv6FD1fefmWgsoqxEfWmTzasEHcYD2YiXxvRLBz7"
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
