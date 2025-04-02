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
    "zezXFp4bVeGKXsC1SvgxQxG1Z46jKevLDb6xne2DartQCLiSwJCufWhrQBajxd1vpTmtDWnWS4P3tradgzWS3QU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hdq5y1tQEyBiR2iT8qQHrEEnFKqPeJVoKxcSHjVQA5pBozxrfo7EsPftZxD4qHSEWnGWHoCrtE7rcaXGyKuaLA",
  "key1": "3dsWmtZnHNGhkkJXVVFkxT93q6E8G6kjnZ6yANZ2dooDKWQ5jeUnsDZewCVuQ8iGvPxuYJy4VQ9FmSkm3wGWFRqD",
  "key2": "3FrYfiMVPbhC6SXcEGoySSv7uTSTz8MRRdGmttHyWiKLN2GVuiz4Qx98f9Yc74jW3q9JUHneRvT4ohBUghJjCvgi",
  "key3": "25z96hBeTWijAM23vQyNyRcfpRCBe9B2zya5aZRHBqjojKVKtyny1Y5dc5bke4HSmoe2sfoZy7wDPVhjevwE38PB",
  "key4": "3ZZ2K9Fh4CxtFXWsNw1FCRNeZXEarrSvgfK8e6rDCRGEvpstQTjigtuYtBw9vkHcoRGtG1WVMHeeWhFs9oh3HywL",
  "key5": "2vKJzjGBBDExg4fZsKVMHrmCg6eBU9dcA83gXURpwnZMim61VVFYFknGmbcJjLkjNSr7K4BU8o8RyStzuYy5y6HY",
  "key6": "31LY1KDmedeVTQX33etaT8TuTVgHN5RDdieU9UHDe6gmYcktck5p5SRRt15GNLcAy6SRTb8BRTPigcsYbnWFgWes",
  "key7": "4cPqeXtFq6Uppc4bJthHzXPvQV9Dbn7ZwygYrcCF3B6UbAtSt9UHou6K9UrkscYoAhRBrYbWWiRKgcyK5J7uU3KR",
  "key8": "2H6kmvkQZHTX5Fk54zTFY83vPoprrMNQFEwcazTdMx5gSVkyf1WbdyBLByJoL89hYNdF2ndTnrFfoRQouPrXYxjz",
  "key9": "3mfTQvKXqznrdhydApL4sdNtWLtosMGPxwzfYghFisyBheLwroxPBrDZKGMFQjTky7pDvdD28D1RXq1iAm1M9HUo",
  "key10": "2jjYTqERdSZzB2gXdP9QNbrKABRgP8oobs8kLnHvFu3VYUdLXhQ5wq98hvv3oRqaLpYgQJd9TXLY12aRJpUPBf9c",
  "key11": "2yrphFGzoS9ThVXQm6rmjd3H9jBvvPhr8y2hPNNt79GSai4zQ7ewgYELT413eVoQg5Dhnnd43sn4xPnPHh4f2y8W",
  "key12": "4RBhAoBt3ttgBVJRandTBwPKxvKAbuJarZYw4wDop3u47iN6HDUegQvGexAYi7oWM7jB7qBnDj1RshhmvTfTvnXs",
  "key13": "AmcmoFAySHSvh13DHfHfVtFxnd3a6dchgN7vdhr7TKMNm4wN5k3jQnBKPxo6B4fbjsiH9f6JAoKfXPTDhbt8kiU",
  "key14": "5uiNozxyCye2yWC4TBjmJgBg5SbwtuNAz8X3QhURmNEEACjsavP8PoUUZw3EX72EJVKE4hjqYLTB1Ai9iS5TCABa",
  "key15": "2FjPx61uiHzJAErNBCa9A7nGmJNotAtVsNFKoJvihKuqicohBkySFxtwJopEbFAHJhcSRJM6bbe8zCMfFxUKJyFM",
  "key16": "28Msxce7B15D4ZCoCJSRtPGLVpv2PGvBCeor7Jq6FHk4Xoi7G2K2VSfqCp8mThpKUKNB6W1ofPXmm9kMvP9WM4Pz",
  "key17": "4AXTTPErbRwyebDkM2d4hdK91RcLwxBonNTdaNbWetXKAByQ9Qtd95otEvqm4QAgvdfAjat9tPV47cW3ebwP4VB1",
  "key18": "SVpeGBnL94buUYstA42Lzcp6N1uR6BfgcrVsjWPRsw27rRKiiB99wyfWwV3KNmuier82Rs5CG6h3gEQ7zkJkntS",
  "key19": "5CxHK5LHbV1rMVBXqFq5CZnS2LEe44pyXM9KEFj8m2zR8um3htyjRQYyZ9gVcQxYggCjW4PVncC6WcJPqH8VVJFq",
  "key20": "2NycjQgipFxUNr6WiRn8xWAQKFGFNWvZSiUCjwENiZ98xGcphmagHUMeFgRt73e1ABtM8T9n7Nh1bqcrGEDWCiEq",
  "key21": "67cLs3MVgD8e17aZuMQpkNHJKMXyAXyM5sARjF5WE1bawJY4GkH66py8qzBFBXtQNRqo2CtLcfua9vDmDKWDZPHE",
  "key22": "3MCGvnmQ6Q9e1carUauH47PjJMvbRu1fkm8nGHwTD3r5Qnv5Ws4V9x6zR8DCXUC86CbhBb2biia5NuYvzLwELNUy",
  "key23": "33Za9ZFVWu9CU4bJwRuCmFm8ae86jxWBKQZG2YDxreD2PZh1rS6grxAEq6DaWtu4r3D1vEXuMxzrz365jZCmDkUa",
  "key24": "4qCsQVNwy4i2XNCvrKiwcL5ZxyP8fYwShjDfkAjVbTUALebtj2yZHBG73Rc8zTzY6PJdp78NQQbKepNBVZopAMcU",
  "key25": "4Ytod8HB6zpzqDC7A2ksdRYbzGHY3j2tWPGPnEg2Kn5a2hZuFBPUxcvPc6fbJAE1TuszTpa98X51pWCm6zpUsUs7",
  "key26": "tiDHp4NcGQJVQB1CsfnokMHbXFGHzf1FLZga1hFVTyVTKWRwfxqKh5G1Usy7EApFkBMJFQc44Aqut2rm3dxFYTv",
  "key27": "5gMiFesPJq1Pj4Qc1nQCRnWWpXMuHfMcYTdESsrybDQCLgUdFeqTePy1drtpFMY32rncDz46cVdALhQRmPyJnm8R",
  "key28": "sJkaFfBTMBxjBoZQH8BYx6FUYVTmtHkmycuPQhYvJ23HRVeXCdT6YFJXVngfHGn767dHZSRc5nMMuKLsienyhH9",
  "key29": "zAQJZdtMd5WBTHbiBGjCBvsAA3mTnf9e89hsVjGW3XHfQgTJSqUig9oQkdRMZNxTGskaRmjnUyP3WeMMoNStHmx",
  "key30": "3ZLDenDKvho112TytEBVAEVoY73AzgWnC66H99NAJQX6dJX82ZrFK3otUDXGmXBHNwuQPk9jrBG4YiXp2ig8ebbD",
  "key31": "2UUdG5u6ELHMXM3TeZffxwM7shKMsTt1D7pgMdkqqbdqUJYvnLuWJbkEAmNFQMScRmt2mkujRo4eFPWjZvCUWjgC",
  "key32": "4ARbcGLKRfdvBgTL5gf7mzrY7LWBscFSnqy3fUtars1tkyMukdsU35eYpWMv2MztKYbqepuTf47Kh71BjioFwhnD",
  "key33": "5GzAuux77KsuXFzMQA7HmchdHqefBg6MgzJbDTkjCEUF57yzPKDxada93XXQrHs2B7n84J7oBdVcwnsMwL67Aw5D",
  "key34": "2Favmt9nMvQd3A5b9RQoJj8DGG72LtbJuVF3g7nJTFnEv4onU8w5V6t4qHEvU7qgyxGjmwhzoJJzQSNuUg2iMu2X",
  "key35": "2tE1gCXmcKHgEhqonZ91WFnqgB4ErsbEV5ffv2Va3isbCmSErpiPS6wnAQ4DUimEnJgfrCadz18JQfhgTEPfnA25",
  "key36": "4tDRN8jKD7zGzaDPzL6D5qgaWsmvYRgvgnMUsfiCWZj4u9BYm2y53HNwHoGSkwpgTJBj4r5BfrnBvhU6GBYcUM2c",
  "key37": "4W64U5P5ncK8Tv6q9cBePgkdha62bsCExex2Covm4xuG7PcvnrmkAhqfXHvpkkERp2FS6mX359M1UgUwLQiqQNq4",
  "key38": "NRravj7W1MScnQwCLM4whDivedXRxCW8jWv64ZVNrSfd9StPV3ujzZiRufiXU6x39d2RNDFRRDAoou7VZGdkucN",
  "key39": "2V7Xg3TUEpiPdETfNhsCuZp7UEMmX1EykYmX1fdCmvAm4ZkjZFLsrhkcZsXYvw8jM6gbuugqBnR8JTzYcMHb4GUW",
  "key40": "3pTG6XtQrjtirfeuxkNq8SDkrYDWYkio3kTVtSxwsicCbDMHMYXMwc11djAhJ2uAjyExrZbMKUsNehBGxrvmehf7",
  "key41": "2iuNE74DDjAChneM1V68m2s5W9dndxCH6yiLzNnjfqumuKMdsLdQP1fFYRchuK8ArTHg3SttWQJrvGS5pwzb3yd1",
  "key42": "Tb6NW5agX5cGvDp2QrPQ5SvX8qHx1SQWtvhQWP1xowTSjSk74WZ6G3bVtfnMqUbYqndFHEbsx7wY3x5xu2Kzbad",
  "key43": "3ZnGGKv45c5q8jP9h6DMNjN6e8GvcFfZhRHoz6926eq1AZhiMvtWxFKB6rKHjtSaCaZCL5P5ML9TWZMsjmncrppA",
  "key44": "2gDwMx2EVJyAp8JGvF4UsV5TdZfqWswQFfXEKZHAp9QKojYVtH9SkNZB2vc9czFMm7Bixqa12y6PbtccdTBnaqrV",
  "key45": "25PajN8N5FsXWr2wRy3MUQoHM5Qusk1aqWtJUq1vr8MhqQu5vDNhsRbNEPKSxgNu4sBeTX9cVdynmqzEZ3uy22Kn",
  "key46": "3EkybvZB6o52G3X4qF5yAPNmRz7HXQSafhdkd9wv3K4z8fBeTqoCeakwZhNy91yfd6oQYCnRZTwnJvEBKUofN7ii",
  "key47": "8dJ9pJHf48Cj5Layh83Fw57VAL9HRexQeid8mSF48C8AGDGPBPM6aHLMXNUVrbSTupTpnSSNbVEPA7okm7mKY4E",
  "key48": "5q9HvwdJRWEWU2LVF6kJzCpztuiJkmb4dpwWRo1osQNTvV5SdgmnJVnQKGCeUWLDMSyt9FvBr4KpnfTzCLagRfVT"
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
