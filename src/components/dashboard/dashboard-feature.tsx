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
    "3bjNXYXD8T96nWhG8jVvk64VPHiwDzkuo7TAcxRnmaycPx5VyBWHCM6diirw4xMdit4DdnMdKqfkmGwRsQokMLD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PuSBYk6LhQnoEsQ8iSTK8Y1UChWh2Le7D2fd8D4CPvVo4B5YLDkK8Zxv6pBCxFGGXAtxHyLCGHP7LGAt8A4Pzhb",
  "key1": "2fScvEmFZZc5dzVnCyQ3neUX7szv4BUMfGE1LzQ4DgNJwMaHzVacNa7FEo5tneBHC4MzdAmDddnyra5xRFPTXUwJ",
  "key2": "UXsUfzAYvbyFJY4MJgCzPMuQwNJq9DFL1GpqeuUDrJDkvwLZnhcLzeGJi1WPouV6jLgDY7FBwY8z1nUH3BYvHmc",
  "key3": "XwhjZJJHq4VNRnjcKejfVJnQKWmL7MeMPohMKMSWqTeTNbXcyV3gsK2G9eHLapcZwfAvfWNc8KpNVrHkcBgHkrN",
  "key4": "5CEyQGC4ozpUmHLykhUgcHc9vggfSjUzFMHGXXTkznfFYxfKbLZbjfYL1gSBFqBxHxrshBxmv23fEK4ZCsi6f9PH",
  "key5": "oQoo77izFcDkLo2j9ov2sM4yBr8zsKMcRVHNANKRW4pXfvf9H2a84XVnB8UYVFesn2W3gTv6R54L92nc9AYASdg",
  "key6": "2q69rrfk4maugbfALJeJ5mtGsv2S951fxXRFqz6KMGA9fSVUfbiS3NwzWVNpmb3ZwSPdR1nCyJAA79iRsbPpmP7j",
  "key7": "5TmaMjYkQcLPJgGXFbrgXrU2sW2iCGaRbfoQ8TMwPuBAExXqsaRJ21tzYdspEZhZtwyNkPy6XTXFzmpv9W3A6eL1",
  "key8": "5u4MT5q5wiXBQhaBPqbgH3iDDk9edfFvE3Tp9YFLbmJiQKHnTk2Spcxij7EGcScr2gGkUhTYV2k2PxFyRH9o7MPG",
  "key9": "5u3M9yRT47ZFwnDJMhgK5XtGt1B8Adgk59eW3kwTvmWfMPKTZKs1jbpvneEZz2NFssDatiTuiqn4Ui3jQEQsTHgx",
  "key10": "2mj26Q82f3kUq5vHvBnwv7RH6cjY5YtVheqv7rnrH3iPwx9cDAxggayjfn2pB6BgpurXZsrYqN8FyMkwcWyZ758V",
  "key11": "2hvWk5as3qWRzJ9NxTVKN3giE32bqN5BC93wcEze7T8s551phk3emqCxMVZDEVB6WWoPSDU5KvMUAFj5sHbqUHo9",
  "key12": "2rzFNhzsAsYphiGZ5ALnYRED6wTKddhQgUyHa7JWwZ2N66cm6AsXxWyKtiPdgaQj7NjUgj6E5L7icjzTAid98scS",
  "key13": "4ysc7TRgLwSuV8o2ChdhwFDZ97c3v6NDjhy8bQzGSZAJBtMQdNmxtU8fbmQ9htz78AWHHJNEgmVmohRRCyKvQjpE",
  "key14": "5YuC7g5offLTqsvkiorNUsqC9zACMrRMize2SNh9Hj8Rw8U7GUJAPVFRbyxxWXWg3kgHNf4nBDm6uaYzMW8fCPbh",
  "key15": "3F6aDjBXWrNcmuftSmA9ELpWKxyNfaTHitdmidyskEfNA5cJZp6ZDQLnVDpQVRMsNdVNfUaDF7cKizqo68mgCMPo",
  "key16": "3r2WJAuzJ7EoTAkrjBxYVKD6XEuYeh3oiSEk5wq5aXHXzAATLzXtYcWKMadA6DSY6cwZuYANeUEapzTfrPHF6bGd",
  "key17": "3sDfNGTDv36zWsp69ZRqcxA3STRDs25M3yjaRTreRDPJ3WQJ5V3G1V5YTNDjUSVoQSVX6639KaQbbc1LGTf7zGjn",
  "key18": "4Yprbg14zBYe2WidNKzqiTm6UJmNUBJ2t63VQtutaSZttrp9Xq5Cqngub7hiB15Z6C9eWp7CqppUsawkGakKJFgA",
  "key19": "5bUMetCt74jAoXaxLvYFepLU1TAzcw6DPTeQzFXyfEtdCZm4LiixvsCZx25FdAasTjeKB2Z6XsALXwpaH7T5DviC",
  "key20": "4Cbpg3auxJFusj6WgC9yNWZZK1tiWohycopFhwqpwobJedSYepdvCFUhhZU1kPUqfofxCFMkdgYCjDCBDvHFJ6iY",
  "key21": "2X7Hq8RfqVxzFUfa7DucQGDs9wLKMfXcX8iozVZBrncsa1rkJx89YmpqRwSRuuPcjDpPDkULuHyDb9LEyJrsFmjm",
  "key22": "37mxmBdWgbC85h7MRN9ZB888sJH13qe1rGVApzy4m68reB78pdeMJzdbpkDF77p1ZHE7gxXPNqZtkqtPCY9ixrkF",
  "key23": "kP4L6BPjFTnjupnfG8kjovPL8s33JPGfQwyx4KzxyQrAkCE4F5SExy8akHPcGP4uxG1baiyT1hNyRB1PJtnMDXx",
  "key24": "3mgZnQfyGyzZ1d1aVopuAggQEntKps6Yp4AtKH3dchzD5XR4hRbFqvsdrLMBxDXLNuS3s79zLBhiYmeKQjv9m4Lr",
  "key25": "5NB8hTcgwKRsnF7ZZpywAaCYp2iStaCLfNohMouHsyNJwXEP5haGAgcp4LGGG6YCzZa4D6CRQ5K5aJHKRSkzwudC",
  "key26": "3FC8XGRyiTHxQCRVWpJoDPBKhz8rv59qgDjWnLx6DFdztybGXpN8CM3uH9ThmxWx8Kw8aE5M9P1Li1wSXspq8JUy",
  "key27": "3AY3AdvghVk6C1MVTdUn1S29ZxPEx83sHNDtoPL7DFFj9vb5w4MM8iihVSVxvWQoAHuuCBLsGA82ondkGUmQbrJo",
  "key28": "4gxVJBPSvD4uurLkr2JK1ksXNbP9F8uZP3G9Z7zWdKijf7arVY4YEpKXhi8GogYkELTSSFBHWAZERWoppJMS2oBp",
  "key29": "sGiQSa2E15Ft7k8suFk586jGTdaQJm7qWwge1uQxe7DiZt4soGmiXxakkjY6SonQGsvj8cFdfP7oop64CnwVvca",
  "key30": "3s9ZrRWUUkTpHuDweGa5WRXAeiFighfR7RU8t9dsqp6F6CBhyT9HrDg7qJMx9hjzY1ucbn1NVZkVA2xY6NfZ6zKv",
  "key31": "3XRNmK83iodZjFgQQZjxA7FesY1E5dLjyHbAgpR19mU58cAMijpUcNeKqEXH7bf1A5gLtQYR3Ghy1XEHgiRUZ7xD",
  "key32": "4GSGE8fC6V9AgSRj1W2GKpfrejwdjzKGF6oc7sZFRBndCMFLdNbquuEr1taLFqE7crWrbPM2jQU548SLesXT3hRJ",
  "key33": "3opR7Y3j9h9yGMxT9M7fiWFcykjm7oLoAF1B1p9XQ5KSGq2ZTBK8b8s4zRQ7P3Xp5kUejesiuAGUfCfYLcgBQWXx",
  "key34": "59NFevCnw9wfjhyQ2c4cYWpNdZJkYzUPyKD4QeeMr6HXpRDBvjvyDmzpgPtaMqYoBbUVyt4CnP626zpTEJzQ5TMJ",
  "key35": "2E4F8A7yeg2FiWYQQHzVyq4kGLMY1X772KBYkZtr3sAm1vhCvwjMa6yrQg9EfJZAM3QjUGCU8XzFuLU2dsZJWSFC",
  "key36": "4bVjJsXereAqs3DWeZwLVWfkHtgxMiQcPpXMrDxamtRyD9Z6MadpQ39UwQR6d6yMHzae61ExPoikciDc36dSMH4U",
  "key37": "2tto3nrCsSRj4fk5sVLnbFq5yNYk71F9ZBSQMaboeYgKzakSiiQGQaQXjsuL9TAkSSp3WQo3q294FKgyJKdVW9dF",
  "key38": "3kMwcbwZjEGuMueZp6VSZDEamTyUhaaEAbxpYw5RemJqawYU6CLAq6kosmYhxmS8LrjAYCLCctjMWkc27yxxZBtX",
  "key39": "28c52fj1h4VEUJ6hC1bifhen27UreComEp5cXiNbiUPjm9oV1qYFW8yRmtcwBADxCSuNT2R8fPpdXaaidYSQrK1n",
  "key40": "4FzpC9HEVomU7VEEKksmbCaE85ocitApGGBA7TxNNWxUH3YfQ6L5f6dzEuRBFBcH17K3mHyuptoiYfg8dxMVfnzG",
  "key41": "2HDkM8RiitTmhv1r3wC78wYer4Nahqcs9iML5nhMHK1RrTHhSueN7ojABA5qXVrqtvUWLbKFY6NF37eH9yQF16p9",
  "key42": "32ZiGamnAZMUwfEYrNwRVJ2e8WAUV9Vq5JaomxxMF99uiWbuuZRE7CpvTPxvXpAfFNi9TBvfUPpkfknD3KVAeBwA",
  "key43": "qxjVKb35XfEufkqnPr1BWATPGLHLiQyB4RnxR7jp7gvNLxdBDBrFSwqRvieW8abaEQPKHnJ8AqCPNhgCBxV3NkG",
  "key44": "4spDXxzkVqCQxhatCP1CnEYQGqpLZhErcTxS6oNXmdJRwwzmNgYzeqGHFC9nW4DykMc12H1GwCeLER4j1xGc6kPe",
  "key45": "28Ekg9NKu1bkd2Wc7ZXzL5FKLAXnxB3pzNiiYgMXAkSQt7yxQGBQASaF1Rh8pPvroEEGcsGDciv3MZdZP2yfDSev",
  "key46": "YW1Fr9Mw7wj4tEVfSgAdfNYYnvRTgDcoUDGqLmQFejA8xKX7qgJzywGQM26dcMaKcMZz9gYgUrrRP1zyEa7poJ5",
  "key47": "2WxKtY4VpE7pSZkyFKz3ie4yQgeLyuLD9fPyvqdLUU5yMqWEt6qd9HAHN14Tt9oVb9Rwd5zXrf1Wt38xMd3taGnF",
  "key48": "44yExJcsHXGWe8KtNY1CqpF7MnrD6nuTmso4vGX38uR1Y212nhXJ6EWWnum6yT9n1EKiLi8TMH5cDnpPVvtnEcbZ",
  "key49": "u2ZgYiybViAAYin896aSW8Ww1H5NeXLxzSQZQTwAMgvJeG6LsG9xXYpE54f9xGwaoy162CU2cATrYMx2XSQMsZd"
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
