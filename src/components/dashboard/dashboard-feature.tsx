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
    "2uGFfMNKxh2yTsepP8WJYWT7L8DgAYPEC5uL2NE4RPkcXkdafaishYSWpR52RYChgQgeZuADjoWAgHkzHAR4sJUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jn52YpALFzNWumfs7MvC58yYAco1hfUbCABCUHzck5LFEGT7ypdNCrFgqih4vpM4g4kjh8WfLogE8BkaME5nhPi",
  "key1": "34LvJLgPspHFxsKDNiBJ2YVHLCqQeoBe5fb1J2uYjMMaHsiLTYSJ23E3s2GgjtnDjGrQisRKW5FhkpeWRNHZBiAW",
  "key2": "jwyRt2P9dud2RCESWnVXi9Re4KskAgt2bWvyGw2maEdEwr4W1GmG1QBuN1r6XQbAC9dNp5Kiw1qNyqSmD3wCheP",
  "key3": "638KUrw3TXTJEb7z26HMoxrBjRvtTCNQMtoMqTvGgH4pEeyjd8FrpJUCLk1kMwUw6A9h6hwk8x3bQ9DErHHsGJ7J",
  "key4": "kmSATRYPddjwrv4xBNq4ZxxgYCq6UyPwcLnuRC4MPGik1ECuCiCG9BE3KGddXE7sdC8jSzVWeRKBtp4yPjwL3SB",
  "key5": "3rBCbs3L2F9Br9gMzFbiimrYWe4MHbz5sQ3gC28qSopwnZNw2gFEZf1nJ5ZyVnrg3rAZS3CjSoDXgumtKLz12D6K",
  "key6": "4jsUuTMTm9GYNqd3UK81EqhKGYBWPLuyrYpMz9BfYoMpC2nS2wvuhPHss55fNE7w8wnz28ebMsR54yLuqnuqyFQi",
  "key7": "3ovPV9cXKSVV9gvYSBku7UVnVnvruDYf3YgjDRer3BA3oQcoHYCLP9KWAXaH5s6U8xpBvhFRk8m6vc5tx3JzKL6J",
  "key8": "5tR9ZzpZdF64UxEHy7KKwdZjuWJZLRp8FymBdiW6knNkpumfYLYcPaDMRiErknSTfEYdup3eYpvGLuk2AuNS89tQ",
  "key9": "GW3J8sNLbMG4QJqJ1DpjKAZThTnG4VvGhG9njEE1PBJfVAy7aMsXRs5nVmboCZAb9uD3iYLsFRfRRPWLmYgF4aj",
  "key10": "etyScZyuyctzxh9iqXd264H4E6jL6QcvjKdswHdMsjQBhGByLkY8RsxindjxTLcs2wHTfTP8qVoNK8wPRLUKv6M",
  "key11": "51gv2Kf3DKqbW7o9E9McJabGpCCMLrA6WTFwA9E3beXkBW5xB2ScY9uspVyTJBFNDT2XUQr6dVPvhXghatGUGPmW",
  "key12": "3N5MX3jsqib3oWDYq3soj5Rf5Q7epxKvoozttiCSgbZAtYZFCLnX9KC6551AbRMs4ZGs8Cws7fC6f7evHvSD7Pcn",
  "key13": "124DNJSRMWhmkypvapBUPJveWdMUCzbuv12N6ocfMJQPXaActHH2MgzRYLDt9LFbd5PaoPxYByGyMiGmEvqC62W7",
  "key14": "4zKv76zee5M7rjDApTLWWPY8gdBuRf8jBDW4MAzE5tgxqq36hk85ow2ssoUYGEv7bpgCGgrMV3DNesNaQXuVapKJ",
  "key15": "4PxAYrmsWSLWyaEXi73tAV6255bTsYzEZDiyBLvt9uPcrVtbeCs2jzCnUnyoSVxLh3nWMJWBorGyYDJJg9PGBUcs",
  "key16": "5zqwb3Ff1DLhRXB7cR7SoFeLYFf3VLvciZJ95HjB1mBXSDaonx7pB5S5RaZvWDfUkDpqsZcuRKSpgXAPMHRPnCoY",
  "key17": "4pmXb5zijSvidCNeP2AywaHDw3RsaXDqC5Wdwz8hgcquCoiwAh4zAHp4JeCH85ELyT58Qw3WiztYMBbaXZZWDH6S",
  "key18": "5z9pQHBh8ZnSfwawAuwTgoQ25qMSUKtw69Ht3LHP9xUinZ52a9ogAoatyQKGtcpWnpNA5G3dQ2ohvNEuGQ6d2qL4",
  "key19": "3MdsKVjD6qBT66dUSJE4zj4xsqubRmPdAhGCSdHNaPPEse6ig86tpwaqPtuCvY35o4kQcxXfHCvLwthuEhYzaVt1",
  "key20": "KgyNKcwATFHgaTcda7F37APHh7gFnEao8FrKaev6Z6HmBwCQPha6Tcc1ygQG2JAWWkhhWPmaA7U1aJyfRfMwvS2",
  "key21": "4EekgeMpjXVLBfeCa3MLRjFpmnVwYa182mbkCE4VYh3qQByc91ixs5oXEVrsHoqavv6cxNdaN8p3FZDY8wNBrW7E",
  "key22": "AYUbdQwset5u4qs4TjibxSN9hPXtyJ2QHXTGtdhEnh2Tt8GJvZKx8ufh71Fk5aF2naHuCC8FtJPAoHF4EYgzauA",
  "key23": "4MG14uBqmF4LD3eidNBPWXptnhCeqYAdPZtakYAbzEGgeX9KeA7kb4M9tqdk1fqSdTCV5dKtZDMTk4JSsd74rm1g",
  "key24": "55zMn7MK8dWBEHgYd53DXu5TQgvbytP9iAXXGPamh9BKmHqqjoJVt7bi5aehCdzzATdyA4Tf5ChYiLpq6t8yWK9T",
  "key25": "258gtUCfhAi5ZYdsQfrvZtdigyrbucXdWWffxD6wsuGPTzWtygmnhLF7XBy27ntMAJLnKEGMcCwUbY2DVK9Sstzf",
  "key26": "22HfN1mzWdb7v8kGTXBAZT5epi7rJWw4C1uzVYTT9qZzaAveqS9soPZ54dEZTx799tpGkQGKV3J9kMw7o9ZJeuzn",
  "key27": "2jxYYV9YexygDeqg1HsYUssyawdS6BwzBa26PUaH8Twc3b3wibjEQHtRsg97kRBdfKxwSZE9ymj34xTVTac3pccT",
  "key28": "316S8AWzToGJr6jVB4f3srrJnN3Y2Ys91K7mV7jMPbMnrntQiqEj8uyP85SeJC2pGYyeUREhTsPzmbDya8R5AGbn",
  "key29": "3fWYys6qeYs1UYVjgedSATeqaZDmMPXC6L7dWA4CJ6CptXdShcL3qeLnZNJc3R8GuqWFJNZDHLCujZEpufek4Kd2",
  "key30": "wHRimW3ur2B2kkSnFyi3Wx3Vpo6SSz3Demb8ANKnPiEwocV55ivgBV58FHo7k9nJmi5MiFmaYKHCrWxbpeoYWpa",
  "key31": "4NCmZAQnQ7AfwuR94dyjp1iRZaGm8ZfCKdFzhSCrRGj7dnzy6tCdqaTkJzQtviKe1cqnVAQQco7xWeUY7pHqH2am",
  "key32": "3nwxaFApiRCoTKeMBq1kGKA2HzuPHx1UJRnLppSCH8WjasMiM2UtdU9KE83i13kmzfHYKaVk4uuoNRtoBXSqSLd2",
  "key33": "hreR4PVoJUWPpWrBuut1F4kcxWJcfFyZu8Vd9AZxxDtCbF79JxCP14ShWKwUpVN6FvbAL18UC8HfKYJVrL72xnf",
  "key34": "2c6JkT7CpBLtktPkKpoYy3fDMVHJUGtdxNuXEwLG8ocrShvqk7x5mfgtpCEMVBCmfmJy2EFbUKQcGRQKyeqrd67J",
  "key35": "5mrZ9CdoHzFQ7fKvi2KzyrdpBix2EXdtj1wMnYtfbYiGZQyFaWhJPRM2RETEfpMNdQDsb8WhhNqLZCQGLrL1LiPZ",
  "key36": "3qtRHLyk6fXTs8gUaAVTVxzcZU3JuPnva8ufo7Lqx1YeacW11g8x2QQJ9PhSnmBui9bpNDc7eZykK397gnzVxmje",
  "key37": "5jzdPESqFyZFoZhrzQXE8LvFAhi8cC4kFAb5dQwhX2BKUzSkxjp8oPdaVzDqFtAEoJxHDxhbko1EPeqYjhuVWQ8Q",
  "key38": "TREeHm22By7gyPrfeogWdj1Wu6z3jv6n9AFqZ1m5mHHUU7eAo1yqH7Waq5n63yRbHSeKaHEqr2HnT83h8eaJdFK",
  "key39": "JrSeUup9oo7miSppToA2AJYh5GgTvUyjoaHdSJtYjC7pMmR91rkm3dBdZ8rVJrRNcf9WHBk9azpFDreJ1tfiVEt",
  "key40": "2AFthrY8VxRFxMmBr96S2ApzQMF66qzV8o3FT4i6FdAhCM9mx9ak88ouztZrqK1n9pQ2ZpBUDm8zPx5koPY1kpWi",
  "key41": "4YTQ3WyDnMqfBrCN88BnfUDW75n29EZRLiRDFN7JG9Z7xb9dyVkht65j9YAJLftA5Yht8tN6fAgue75CisJginBK",
  "key42": "3Kbs1QnYNaxaqTTPqC4hY722SmgM21BKkQSnGHFbyfG2pqAv6W17aSyKHGn3YdFxKizmXpwLK7wnQDRnUa8PMztv",
  "key43": "5WV6PjmdZ2nggdcBLLUycHXvmLrd9aqU8JA56SosbMbWJraerUMJTy52DSieyQi6joXZbEdHgvnbpxHAiVK1yXz5",
  "key44": "4jzGN7q7bCN4xWi25ymPUCwmQorw7736BCTKPDE9gTKchzmusFrRHwkt1RRyzPtTa2mRRn3pmgPwergRGNp51eXq",
  "key45": "5jVb7rhkZx3krVijLbSiHo7mVfsoqpVLEcWqg6ZAe9TkV8YWbMaFV9FYWQkJ7ZMqxoV8b54Cf7CxqJj8DF4Wsy3s",
  "key46": "32Bwvf79NygEGXhmEaDsZRJa1ENy5yAGg87BuM55Hnr1P2kGLNhzcZZganj8Z9nLc7KmGAZEh7K8tFKdgwcdNogK",
  "key47": "5rnmY45haouNfxZwLK5Nhj9YLCiiU6EbQSYUbiworiEBimtsm2R8QtQ2CXT3iJF6qH9rcq69v6u3ZzJZ3W6Xmfsn",
  "key48": "2sLB9NKcM9Hp5ySZ1Mjgbo2MLADg1QCRUhiy8jVn22Sh2qxDCC1Jp2Y7nyhzWqi8nUCCeWQZr6Xyv2H6cPEyDzdx"
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
