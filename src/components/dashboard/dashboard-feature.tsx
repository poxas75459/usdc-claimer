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
    "4XhFgB3gV4wHVcqmVpyJsM1cMWaXT5NKpYUYQoPbaqtiaS5rbDxcCq3Q5n94DfLfWcHRuJaLGFwz4wWXr1FEmasa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57j2cg6Zy5NzFk6fUDUC1GyGYVKcuWS931o2oU9UXvuUiK1yQwB61QjKrFiaV5xRSEwQwRr4RHB66tc4wDJ4tRhk",
  "key1": "4vQ1K2xLbNcr4trEtt8Vr5gfBgGNq4q2TWARfoE92cRFcHujF12cuQAsvomw21DLpeS6xWXtf311VygSDtZBNnMr",
  "key2": "FwoZedHW9PsB917RzErqYs7K8r3R71R7RBEs97JTJNSD15E1KmaHxwoQeZGMHur4QeoBWJhgGzYhLrnb1zH8maj",
  "key3": "cG923zB6LFeQetxYbumWEoCFeU5C63aafKp9MVLjuvdq7FnYP1RXJQA8WdQwBHY3oqCAEeqWCCCXZqtaw7pLfPk",
  "key4": "3YVkjMEQkowi2R59ky3fHgiJjn8QuDwxgXArLckEbbapDWu65kvNwxQdmQmxH4swoFerbDmYyHYvzZok3HzuqmZu",
  "key5": "58tr9JW2JRwDjM4Ep2miH57GYZFeeD3Z4tm2sGh6of85Sxa5Ko43foGPFDopSGiXRM9idNUfyDH4F4kpy3czgAtK",
  "key6": "47SxngGWh6WntZe5dAZ2sLRbmCeW2VBoC3oAcaQErU3JwnKfmtFaNTsdYwSkm3U62HHxmhZ5uvLozZuK5a2FCpWT",
  "key7": "3hH6jtDCLmPKcbcC3GCXhZwMoU23BWR9LaD6EJNtKJNTbydUzk446V2pQosnc3TLGSoSAPuZK6jJMe2hxTVufT9g",
  "key8": "213ZioHMSydPcm5TzTbZsK47BhTGAzrxrQo4n4ph2vQ7GBbE7RaPWsFGE88KNvDLwoY9rzwT4RLKHzX5AANBvFub",
  "key9": "66shNe16ti7Y5DzKffBYXjNHsg4JGRQVeirP88GmWMCyDmtXtqL4HANTundCG65n9AHL5TEH9A8s12smAbqrUT7m",
  "key10": "4c3yT4yheegCuNMyYq4Zni1RQ8a755jr6mmb5CuCXis193tWoQ1jUVVJzNp3wCezFQx1ihLopuwoQEoJwj8FzkGC",
  "key11": "2XHxbbYMdjjo86z2R8NtUDZWKSS3BNyeaVzBpguxqEXV83zVvHbhHNx437wtit4Uc1Nxo52VEV8m8oJQ161DuYes",
  "key12": "26DBPxEDS5CyuVEP2yvnMm82bxCFpmez1AVf1667UZmubP27rWH8HoQHk6BzVyyHbZDqDxmAHu6ve2ruZUP4YjHR",
  "key13": "d38h1YAzSS7AvgUZtEy8R15rUG79CK32ka9iPEtx5UT5SLeTvx2sm4HvkUTXvEBJsBnmGCPuZ1oNKggpMrAg6Ju",
  "key14": "4yYTCvKZtnCBvYEWmjNC2FnKbujZSjKA6tadjWTKgpKG5FuacY2FnSQDvEfRAmhXbg2z7bzPZNFexZ7u828NiFLh",
  "key15": "3B3DYE6UnHpbYubUD6pPsLU4VBfAYd5CmcndxhAKeNp2H1Sesd5jijFn69WoVxcLGrDVchaQosePmrkqk8ATEiue",
  "key16": "3CVQRnc4umCywzoyS1Sv7KwYmLytBte2jz13mvwjyNL9TcK7hWNn2N7wVXxhMdcA6hmxfzVjp44CgKv9pqAUFWEm",
  "key17": "5go1i1HWgigE3PWurnEvPu6o4XorqxwiH445kXZs5vUzFtWtAj2xHrF4UZhXohrie6jkVKzURdTgTPbHjfuQeP12",
  "key18": "4vf7MfqjWQE1qtMq1JjaY7EfU4NaonaPfw8iwQnMDwwgARgx1xXaBoeDVP4TbvQ2wrRvioMh5ybPKMktLSwA2Hbg",
  "key19": "4EWMPBKWjDVG2g1MxopVsd1BErPeCpa7W72Q5xtDvYbvsW55kdauVimu8mPXPEPw18nfSbg5hhvREWmxwowUgyz4",
  "key20": "3NsXokYu3LJKaq75pCC2rY7cuDztkHtng79K62gpUsMqDmMn97Mh2pqaprFGZ7yQinhP4PhMc9mDMDPKYeKXuuJc",
  "key21": "coh8YcC61x8Rqu2vVZqb1hxfYpRPWFcXuoSmnAWgePeWfwf6jP5WoMUzhaXVsvYYCjkkJ38Mn4drLngr8Pq7JbF",
  "key22": "5KLJJU5b7icSYM8AbxzLAnqrTvLaMC9cuLTC7Kp74aqrgpg9vhFCZUCGbxxEoaD1i7iG8AYTvjPdfwhHg8zBzLZs",
  "key23": "qg6YrZtiZLJRf9EmHPHa6UNCabwcU24LD8QWpRDNRu2iNiRerkawffKqALmBiQXaypZFCNBzv7LHUqWdD9zkoyf",
  "key24": "m7M3W9yEJyctJkPS6XGzZpdhjhgbU1WDZKbQmWkhackN3vQuR3FNcnnCFzWq94PRMVkuEccs8xVbhCRNUNrRnka",
  "key25": "52UpELQ72QdQVsuRMtv4gw1j6KBrb43EjSnZ6wv9rJNS7DAWSXzTHbGY9rKBzE57rSabg4UQuLfa1pLQTQbEAif",
  "key26": "3Jkdc7J891SVyUQ2ifUzfNZwF76mmHEGwVAponu2whJcFk2ndUDmqgsPEqsnchFqBB9G1i8zfYsfxTFHWBiNq8Nf",
  "key27": "5Nw4TDGXAWv9gE2MiXwVVh9sBAkXamLC6GE3aXzjJmmVbXNbKRHNFCtZ7WaMoDvo2E4H2778PTwBvXxhkPzTqKUe",
  "key28": "2wEpsNVhThSUQYNvZaQz6XtNZmqSWWZ3cpaexVRHUnBNMg9tTEgcrPJbA8wCPFcETWjzWVnC6zVPJLNRHZsPyDXV",
  "key29": "2S7MW5fVsUGS3EgMVLQkgd6pzJFnL7UBFkxAgQdgbPUrFJXeYR6NzmETEr5Cxo9nppEqivgRzNyTF8C5n5gvfPFi",
  "key30": "5n1C3uvURb8f7DCFrxK6KaipyrpCs3EP9PPfg8ohWxCUtFd14Hz1AjjQesGMJ4vtLDzVo2eBuowmDMiMRP3NxrjK",
  "key31": "4jgeEBXBGsCF6dzaLMXKHpHVd7YQZWAq64AjAUomVXHGELHquW1qzWDE2HjLCou15c8XPXsdWmE2aBWuh3rY5Jig",
  "key32": "33o2scyX3EGfMKcQYtYMhLqm4gViWtVq4puEqp4xvexpzJU4DeGKKF4rRVibXyskTsfBzpHS4yyYATKqdBMD98Z9",
  "key33": "4a5BGkfiHQcWGuFhpveJzjpq9Pp9tbiWkcmzPW3XPmAoW88mYHZNjU9xPYQ4wwNaSDQfS64aXYe9PGu4STENrTKE",
  "key34": "3df1d4RZzcVQtRXASjSDdpMqSrkZhwVirTaJ3Ffgui4eJLsGxeEbyfku8qTiyWxZRP38aNckH78oAEgUuDTn1zZ6",
  "key35": "4PuaPEav2Grfcs26MrMSMSCXsDt6FEKocCtZH4SS8uzZUPRzpf4HVhpFAjpPvUF4NT67HX9RUPb4WyuTbefmrUfJ",
  "key36": "4kLm3ZhEANCWv6yKtxnsstGBjPEhzGPtuWCpPsd9SUoP2vRS5V83Rj9pEBCqvnExYkUxqy6WuXRUiQrVeFXRTV6m",
  "key37": "KHC1U1tx3gt3AjXvLWJo9mn79Pkxc4A6CbMB9bkCZRFTPipnLhuEgWy4rvNJUV9tS6qWABopDvKgnBwQJtnRoaT",
  "key38": "5LKmUEJaooiQ3V4LEY6b3QhX8WNQFnWekqFAiPTYD8PYY5vFDhx6kNacZZd9K8R57J1qZsgLqge8YbCb61c3XoSx",
  "key39": "4EHJavRBvycmPVGTcyGECHzGcgQtXSF3fueKa4P3o5SwvjTMuQuRkFu37R9aXXnGFLL2Pyf3ri1pZFGhSnBnZVgE",
  "key40": "4dXBDMSPYpKN3rQ6PFUv5xSccs7xE3Mjqw168iZxCRWstHPe6DAqtd8gibmvfDQXCVAHvxrCe3AWuQUbwtmHeJhr",
  "key41": "2jdTrSnAQG8bmy4kKBUqQZtwdoHmtoVVj9o5WQv4U9gbVh8EGs3tBZ3JzbanmapMBVAMeqSQtwqjbUUP2FM7m1Xb",
  "key42": "56e3A1n6F2nXPd7upAkJyTNuj4GzQ3rgtEefs2J4cFBvVnxMtHT9fMqyFKyQa6jUr5j28Eb4U5DEwoV2MSE8yRc3",
  "key43": "2yfyMdCSiWmVuGbKXJsxRL8UyeXUzPYULiAwhzvbmtE2DZt5LRcceCzCoZprCxzWTpYTqEot6TcWKuizsZXGs9CN",
  "key44": "5k8tuVfZ7kapnXeHHkqDfYYYcLbfAYRLYiiMPofvGR33FuSryy69GLhvBgwrEkNWsVb8U6uE8UdfDGLGYbChbB3w",
  "key45": "5RhKLWvWrvYYYDXhN3xYLmM6SbQSciiAEFQXaZa3rCwQTsr2SWPFQ3gYyVXquCTiwNdAdTveGn4GdMjmd8o8jGMR",
  "key46": "2rL2Xo1zjUnnG32BbgKn3EAQCU6q6p7GoezWkFCxcKd3YZ6YJnakzD7jTLQurZa5WEGfRE2LHsXXWgzd4ELjLgEF",
  "key47": "3X3bPHGBd43gWqmwVBGUXsLd6tTFSpZqUc3sWrgvRCXiNs1k95PFZV8yunXH1XVRgk4rGXQQzwijfieUeTKcpCBK"
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
