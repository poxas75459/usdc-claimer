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
    "4rZXpuAFPTpiTELCbBb5T6dqUJQVCyY2HqnWJ5xxtu34SotSXjF8DGFkzLiigM2pP6QRGhBEAnrDpoHLf6nCesuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uBr7D18E3Law6Lo5pFa6Ne9rBtd2ZvfPrShiesr7edNbB45CAKm7FH7JscfzWV7ESurx2UiV3SCSWJrU3CrunZ5",
  "key1": "4XyvJTz16NDjQPuG89SJEZa39vW8zAyBPuAvw1FfwHparzrpQ9gyCARwwokYDgw3K6R6bbkKd8P8a1iBxquppXgd",
  "key2": "ThGxuxp3f9hXmtLdMSr98wAREZNnbqTSjJneNMNyFBoWrZgJ8C9qh7SUSM3P6ff3EbyBecSdxHEp8wtG14ExJuy",
  "key3": "5crr34ZgjC5bLFYL1LEFRe7gf9DoWs19MVXHTjpWFKTTdsoyq3YLuhmznWu4Vy3UpYUDbr8shpMMNg9RMg2jrGSE",
  "key4": "5gNXjR6KS73LvNfKyCVKapxG5HUBYXLMZBN1qkxSJM4VTrpehhMv6vhxz6eGDzjFQR1j6xyKxLVqGMNQ7AiZDRA",
  "key5": "3XppQGdtqPh4jc6vyXbVPNYQhNAFiy1PwBmKRA5BNhSZApP1t7Y89uQwHJ7GKJtpgtE6tKLcJY2GWaoCAFB7bk1f",
  "key6": "3UmCE8RcqbLy5LeR1yhzvGcF4ScH3e3AfZaqk6LXopnCYFJsZNWNA9Vdt2zJJ8fAv35eYXudUbkWHuMndqy3ue5j",
  "key7": "551R1Tii7RTvzQRi2YKka7bNy5PpRVZNckTLBzoK4eEaUYpnJAELTGLjyRnT1ZrsGX3so94uoDHPLkXadwRHiHri",
  "key8": "5deu98hr3CioC9hVDvkiRfDuWsELwRXYvQ9byMLoTEFYLWYSkkCHNwhXhixHZc7trXtYQ3zpcLqJhe6pbZbNhyoo",
  "key9": "545oLAREANNjhj4tbY1SYzhSuUxgHEdSPYL7k7XNQ95AfMRuHQCKbVcGGt7iJacJrYi7MCFbi4gTDAEiHkwwKX1x",
  "key10": "5Ybwj3D6ZYP23HrZigxTkNLrGghuQFBUFwHY4hG7rm4VGG6HjFYiSKcwNiz1pkRzjSZ8AfKhvsFWB6tczTCHw7hj",
  "key11": "2k7rUjb6LcQZeX3bpycTC7go7ogq1tAsRDCsh9jKC7qLLcaez13VPFiJyZTYRbdWzJ1R8KVkYQfWECUKoKNKoao7",
  "key12": "2YC9SHipqcCN3y3A2RKKxrmUimmRvC4LD3v4hyHVku59xTz66xT1nu5mZnYu9wn8hjY89xzAAdzJDHCMggQQH3uL",
  "key13": "EDiFeZpnQso5FStbZEpdvrrneiDQmWeYpCZCycU8EWcMEGTkSrocdf6RK37SkibzdN9XY9aocku32Rd2h3cDMPJ",
  "key14": "3r7CepBpSU7VnAg4vZAq1bG9JZoJjmRN6gJLG4BCkHuLXY7ZeB5cRWER6SwumN7hrgyD7ATqaWGRRUiqRA9voiCz",
  "key15": "2sKqU9UXPFfgUbfuuoJpDi4jGLTYFvcvDSepgCfiB1iujM2KPnJhXQjx2UrZcjKcVserNXcpyJGoyuDeEk9Efrr5",
  "key16": "3LhVzFQ9j8XQBKK1hFukgFE2J2LQmPU9pVwKJTCAVgRJ7BiQM4VZf7DNiBNZV4jX3F45sHEdmNRkonpkr2JbHwfp",
  "key17": "trGucb3GPzyZVhgLJgsM8QFt6MC69Kbq7j6Bh4HCrz4demseADsabfC4whrURSAKzTdyYUC3qiePnTULpFVyVue",
  "key18": "3WrQ8XyXaRXSSuR6SMx8LoPncBMA1CSZ3pd38dm1QqUZ5sN6txPMAoBj6r2wKnQSuMVyjmY52GJFBCkNn38oH8c5",
  "key19": "SajSqCwS59jE5WjwqTe3ixGfnHYuA8GJo7KcdsihDJBJ7z68QeGxztxfaEN1EJrobZeELnurnknPJJFbGhG59AU",
  "key20": "3MkFP8DDfFjarn2K8LkpxxV8HXNE1RueVvXxdGdQXRJn9gaWk5u4nXdxDNcN4ug3MeQCrJ5UsGeyw8jSN9Pf49pH",
  "key21": "5qrhBv5rauiwPjfFvFAFciKXBp6HsRG4q924dBkDumER2mHeC5dZcvZYiFvZy8XyZJSQy3rHJ2pZHdAC8CvKrnsU",
  "key22": "UMzvdYzAQrL1wAjJQEfJueMw1fdeASs6fDcUy8y91rhh6mo4PSeL4rw9fx1xXjp7UCW4TH1xDQ7Xzxc2SK1DPaH",
  "key23": "3EUW5pWaAcyh4Z6dYm5yiJgXyoAuyMe8bgeJNagCSYZb3xMULvpBDQCzSZ8FcrAaLW2fYesmACYeHSjTsPybj5bi",
  "key24": "5WX9WCpenkQensRtoqX6gb7xSRizd4mztkDApaEQEu3R6Vz9cza866vAThqRcbyjAQzqKhYYc4pAszWSepQEVzni",
  "key25": "3iWdNcQrfkBSVHTCHVVmrU3jeHWNHz9fhtYYGZGtEE6cjMCu5AW8F37ttT4m1y7jbd7LPqfYitbZ6Bg8GJRj28VR",
  "key26": "4wkLJpfPFnznej3RGu1VHruE8UxN59aA8g8yDHMRYovosfpeqNgyZHLRd7cuYHdhnQ7Bp61tzgFqZ9NZj61JzL3C",
  "key27": "2bYXSVq6euXuLknJPnbdRyTn7WjHiyoKCrs5doQvod6w8Hwyf8XyLYEx6rJFnp4xKVP7TsKT6Y95nTiE5L4Uj9LN",
  "key28": "2XzeAmRDpFU8DjozKQNWjWMXHSvEXqSvaYLtgL7umVnMEfTZePWH629GDi9vLYeafYxZQwtbo1uM2KPUFoZk2kyx",
  "key29": "4psmPUboS6TfUKkKXARrFXNergYztPQd1UJ6G66Rq4SHZVEbwXGWMrGJ34n6Dm88YouVuZZFGDLsLAwXrCAiJ1US",
  "key30": "5aQgcTmit94BuBrD9Db5RjTNXANXBhQSi2bPFvJskE1hi3z4MjWjbg3YXybf3cVvuyJSKvEovkFErbsKj8GZFAb8",
  "key31": "wVwafFiYHtXw9c7JfxjyEwWkqShvXCANbc8LJCic8S1vFTH3xxdjqVnyoNkUwQTtNd9PXGAv9TWY5VPvdgnC5ZH",
  "key32": "GgCLuY4qBGkihaQWx8uXHdtacMHk9sZCjCKasrsyyNQ3DazdNCEwKhqCwiouGHziB2igGv3HNgDwKhDxWJwmWuA",
  "key33": "2BVRoVSekDWm5gxdt3bpX5RrZ4H2HJm84SnUiw55sMTkaE7sPrwbxj2oDfsf5PmXuFqQZqturALKQpBBQtfwUo5s",
  "key34": "2oehX7m8AaNeTHtifw56MYnT8CZV3m29RzsGbeGHPJJUipMEKpphmNkR7rLE4yc6CvSGXsYpPKV7T3a78K72UXNc",
  "key35": "9hbMcAxt1PyWmf8jkmYevBNvBSdfgYuNtVELYHxcrkXXVDWcB1oenh1VVY5Pn3AXNkgE676xRWySMZtCU8Hp1UQ",
  "key36": "2mcRrYpr5GbY44CCTok1PrUobNSZhKkRvBTLWNkKA83BXjMXkbnZXQvckEm4Jz7Ke3vxSWBFwBdYe4vRivUQqRcu",
  "key37": "4bnm97XvogjoMSDjeqdoMnwygLVeBwpHrxM1i8KuzbaWJwfoRe4zM5cpBRcFYuCwNarPbAG9DxjwiHhijjn7Yor1",
  "key38": "4U5GyZnnVAgkKXhDR3WDnvCQhcWxCo74oPEphrB233huz3iTW63aHwAkGiKBJYevavDQ5sG9sKyVrHQ9FoegJQSN",
  "key39": "5MvAGyCVfg1EzthCEsFR4voiUJo6uYXone2yv9yZQ5EzxbgBghKdK4xKXmNFv9kHUu28RgfrBoaVyswdNMYxZfhy",
  "key40": "5ZaFzsbhFMVBZtriBt7HPwvCc1ahfZWcZHruBAqURE6J8H79Ua5a1ox6PNSJxjMGZ1aLicHRuaeES2tYuNeJwGLX",
  "key41": "2JK6hHn1aNNnaB8eunKu467bpMFpHGhW4pkvLoWaqa2BCYeYfwTBdNRxhzqXC5yJX37LZw4QPevYh9g7EPTGF135",
  "key42": "3CCTfEtmWQJNvZc9j3GVwtkJsGaXaC3a5K9QVPTAyefTbSE57fTBy3p9WoK8b658emQX5isWjyrv1knrMjLMAVSY",
  "key43": "5ZmF9SnjaeSJ311Ks5mfwcLnSr1ss7G7hDesUBvuXMcNJB1eacjn9DxTkvcG3bscvPapN4xpNse3y21NgW2jQV9M",
  "key44": "4oax6tcjK4CmkDYeTevqQxPkbmbNeWEWDwRNkbLas1SjquFREWxzQDdJ6Wapak91YtFE79VcpJ4g7jEDSGBRjJFX",
  "key45": "52CEhP74t7CQYcjLieKStzo5NAAj1R8eiFvqLefJ1KLMZ8BcsgYqL9RyLDbUHuNxoh7q7DcJiCGy1hWbdrqD34Su",
  "key46": "49Fh1FNQ3p8ez3Tb8q2kkDw32Dxvy6jCkiFZZ3pksnTWBjqqL5gtjCF8L29e2z4SDPsTWah9odgeXKB3oQQwEHuS"
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
