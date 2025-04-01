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
    "3LXMTe8ucCjksy8FHqoZQrZWTmDQQrDjVjRkW2ij2bsvdL8DUyt5wrkfgBJ5iT7V6w8D9XK5WEyAvbWhKXYuHbXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NAec1aS2kCpD2AktYDAvnbZsrZzgejwpPGWYdsBEsYqV6tY3EfVqSNVqH55aurFKiyUJrXKEJq6Z5oqoXGiQJcB",
  "key1": "49SHfm9yup59CHnVdxuVpaPhY3AV5Zsa3K8PGDgb8yt2yPQHCAAQhvGHdXnbCVwkkB8naE4JmF4UQU2zfCNqR8qw",
  "key2": "3pSD8NCNtwVm9Ehu3uMa5dFmLj1CLCFfR79BTUgUro2Gg2swfQ4jR3iFbS8JWTNDA8auLk28kikjWWJww9kqowvQ",
  "key3": "XiJFStUaBxixuEg6aG78BAs81F2EA6YuvrYqVZ3NsU3seTiL1Fjp1sAwHhfHDy7j14cDGFRKJGqEdoD8SzXTS7V",
  "key4": "4r8ZpgQowvdmdh8fuDByTGnoWfyF6PeG7JhBeEFefJDZESe1PX2pcVRYZje6FGzgyHn5n5WciEWe2VqMGFnXUytR",
  "key5": "5ddn87PnURZsmeDhTdDBk4KmBmkbz31AuzEgug9i2nvZjoScfvs65WRCuRggjvibhUi2PXKbAhX8xFkcrHVbzSpJ",
  "key6": "2ZiuV4vBaJfokznZwESAo3GtKWZLVoWYzApbXFCXWhWzkLhi1NEruZkoBM25xuWRJkWoDC86XKDvZZg9cfQzungN",
  "key7": "4uStXngV77WKpYgGHYkQ88zkGsP9uE6B5r8bcxCaAoG9hKkfG8J5KUe6K1VXVE6eqam72NW5uoP4sWUAYyWYT62v",
  "key8": "3TJkUwRoJ9BwFa92DqYDpTaNXN2q8vjskEcF73WYwbdHdyQuUXDushcqfGgL2eAeGRwgkNBdgYQJE9dokdL3gvy",
  "key9": "2LLojEnx1uaBU12T1cKCxw9TbLmMibQEF7XHJd8Ay9Skz3AcaEi7BLEzieBw1uFgNWestsZdE6tb3jxYCYtQkjPm",
  "key10": "dphzj9KWWxG8fA7pikNT79f1bXcUjb1pwZVRbYbqHyTz85WU6pGx9zWNvwaRKUfenREZEZ8jxRqshx644UmVtiw",
  "key11": "3FY7gt3y7Sk7SK5BF938ego9ZuhGJRPzA8HEF9B5c8gi8h5pwy9E1UU6bKPdLJiaKzc1Lm4GvzBH29sxMdhLCYkS",
  "key12": "5eT38WAM8TbYyM6LtRzM3Zmn5Skq8qjGG3eCLktx2KmbXxC8K8pn8hi3zhhfNVtHcHyc3kr5nwXXcPYwk6eutmvW",
  "key13": "2UvsM8xfGvp7t6WUDygzPrikSNy6C5wNytj4ryrDggkTHTpxLW4Q6qXacyThL71qZ4sFfZuvkgmsZn21hEZrwZSA",
  "key14": "4GFt9NxBSVTyqBCkbcvZBmqLJzeP6ZSXCEjausTVSjzgoyKdcw4MbvMxodUnY58BEYE5Lqio6jSh97qmkpa42c91",
  "key15": "2asFiGmuJ9gvtxJAQGjGnUqTg6gYmfGpYaS8phtrwu9gcKnau1p9nMjjhtdsTjvcSuLqsRMqSzBC5qA91KED2es7",
  "key16": "4Lin4KviACY16MxYmWibLSZtBtdhZyGF51UvyMBnUDquvoGD2jnzLN3LSkjjqqMyygDU2VXDTQ8iV6VucuJ8nnc1",
  "key17": "39MaNoLpVXsx5dyDyksoKFVDzCnPaaoSrC8S8CB1dTz8XB95nmGzcEVAAFPaohdu9VVzqLQpARLRXs11os7mGv9h",
  "key18": "2sys298yWmMP5DmhF8JoYAoq3McvkXqpDXCrAqYgmDsoN4VGgWJQk4rMdm9k1tQUaaHtDQ6Wp1PsRKx8uxogr5PB",
  "key19": "4uHSpPtjK2bjvLNwmmyCz9TZtfL211BrNdNDc5eziDo3sN74m8bgm7Rg8jCX1UDBBPMRET5z81u6ezWFE8aTqvhN",
  "key20": "4qEKZKRKNmka9nnF3WRHp9fMvqxCAULevhK1hbXAad9teQFtaSey4hqX3p6aBk35gjWYCNwXWCmdpbXncZnjhBUU",
  "key21": "3nM1d4KVcrZJv8wpjCu3iimv4EZB5bKN7iNfnkLbarzJqRXNV3vavQziuB63e2K1Cpc6UoKJ61kQAhWLy1upqtxG",
  "key22": "3PspvNeadydPUupxsM2aivFVq6iHZPkYV5AETtjCEd16djGbP7PPYEgTPAn3hoeZfXWoKYktaVKwDFNR7fjpx5D7",
  "key23": "2mFCdN1umGvG2Y8xYHEdNHihaMLfLHNjtWaSHPSUaBki3DbQs8J9vkofPFwR5UMWA9jztzDh7aSJbLEi4hj3q5w",
  "key24": "zroiypL42sRhzEW9C4Dq6gaRD8p3UxdJCp7WmESwRePsqypcgFY4myFKxizFRxpofsaXeuPPrFXp1tFZUXFkNFi",
  "key25": "2NCD1otPmSWrFXjLma8fBHrofKGS47i2ZeGZTbZemVtNjDq64atZrKENR9X9tA2womHghTw6bLhUmNuiiQMmMS9P",
  "key26": "4kjRq6jNrujW9qhL3hyr6KKGZaEsxhYcymc7WhxFr5w5UkPTwKF8re2agyZwwn228dEQU5MJLDNcLhHUztDgEpf",
  "key27": "2CufbqoD65gtuvFZgvhbceatjpDvcjn5uErQ3EFqeYVzpCegMcyKjkXt4hmKPjQT95sRFonUKDwuRjgJHTMQxdv3",
  "key28": "5btmvqegVNumXD72eFxwbPbvoL3kKUybBRcf5AXN73D13me5CSsts46LwU1BLdRi3r8bHu9fnE2pngqQZ8HaqPMW",
  "key29": "2mYp4EfY6vvaRgm1Vs8bRdZ2gHjXYp1UCMkeJok8XkZSjCJQpxg9y3ELozL7uUnaKjphSLqxT95wyw4DnksEakAq",
  "key30": "xGvVL5rz66iTmqU6jMyRpLGzjcRjNeEhtYWy6eDaiQiftBLMi8HdrT9WP3nBYRuZ1ArFqBf2oKYFtG9hTXyhCXk",
  "key31": "3BCjipwMBWd39RisfE76fEZ2mttKLBy5Jb1Y8zAuRBh1AvnMdrGj9F18jC4GajfreeCVFfpsAkh7iXCe7ZcsovrW",
  "key32": "2Dy1UUaEMaH7jaK4KsQZoXMtRFS9hU41o84T8A34qfP5kJ4QxpocD3h8XhVF3RpaEYeyMgJrR1v2H3AcEhpv4GzS",
  "key33": "4vmCDE1NvEE6WoqLJWTStET6QREX39X7AnHMFGLAw8184qSQ82Vcoi36S7LLKCBpfz7bcdhev58C1dHUG6w7PvvN",
  "key34": "5GteVX2tHGtEWMFP9zCBtDH9NXWiMvWpeJc43podEnPXY8Nung76qjJBoeAyXravgNciHNuScYA6L1HcLiHDR7E6",
  "key35": "2DtnvdVqJAuTabuv4wLSHJQYYJSVMoKpQoZsqWHhrG3zbWXPh9QcxqiRqhJ2bSAQXkmZ13nTDkbzRRHg7T83q6qE",
  "key36": "5Xuxa4aVCSbdcbeaQDcjN3iN9dugWTMtqqvkc6i2z21Vi5DrrPE8gimZsiQJL8bgC3thMv3WewuqVciyqF7WZq3f",
  "key37": "2qY5LYzhTkwRThoBormd997avatsZipERUzo9tXBgrbKcztuXtmKNbHKK3BZ6pAPZ1NfXbgZPSc5cigSjKeo242U",
  "key38": "53GobnHYvKupnbdjDCxiwzmMd8UPqRmL6wiJYNKchhmSBGVujAFyJeyrQvHspmjfzUGmeFXTzVLnPRisXXZJQ6jC",
  "key39": "5tnDi6dgFWcNRZ7KxFLVoUEF9VyNYzjbUYqFqadhjszMeUU5QgogMuHWahu1V9ubanRz36PivU85hndrGBmWvfYH",
  "key40": "49TzfMmoK1jibCGdLGyBDJFfB2LFy7oW3QdDbDLup6UUHWKCG2wfSgNPcWKRDjNe1YHjJBYgKDbLZD57SsCsaasu",
  "key41": "5WJRQGLac2PETZdgz6dazw3CpJQJAE9yj2CJYzLzKND7kTanZyaWJvjU1Ge9PqLFMJjPBJcNQ3C27JM1TEGmxrA7",
  "key42": "41Cp7pVxXuGQm11tGrB9XuAKN96WV8xjRWiuZroHT7EyfMixwCNgZe2epkb7VkcepMASPVhjPAesJX8gHTFSZDUz",
  "key43": "Wc7mkEC8mScC2ouWimGKUyyQujP3popv88biCHViTfQZNkHyiSLVehECAPWBaDSzNjJFgszjKyw6NsCdpvx8Pr2",
  "key44": "2RELaTMrnGmdpDte1pkyS9yLJfokEYBoQfez5fPUAW1aoiAfVbkAWi77ETN2gYEeLTMbXU2cZ88mrrEJZMUhRf2",
  "key45": "2Q8xFqjPxRFN9wAaw5viEnUV8jRcp5gjggNT6N3xqTCLHVy6GLKVUHh73DmKk22PWqizRygjYNaa1FM5s9K7RVqd",
  "key46": "2PUrPCXiCWm5dFJksxJ7V4CoaqyEHkH7FK7hMXL9KNCSPusb35LNmFEu8rXZpLD83weEo3zdLJMeJcovoo4DLJJ",
  "key47": "5kFQcC8wk4qw2zsVwKXJnwEkDsZMJQ8Nx17piuvrdK371xs96uNkYC3U9sAVF6UzqmyDfXjiSx66dJBktUSmXxPM"
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
