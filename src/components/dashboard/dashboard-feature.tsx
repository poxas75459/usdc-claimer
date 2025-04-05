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
    "JpWLMyaiEoLbvbmfWCYK3aphjb6Y5xvqA6Gm76APp2YMCxYa59JmPVYfUvUsmxTkS9RRJHyQzAfaGL4VMG6hq7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v8NMBJRJ2dPu633KWGza8pHXxnn3K33MbnZUZyg7FX8HXFekuv8K7qrSzPuJWnyz5J4rdgPS97vXdm2y5GysdK",
  "key1": "2x1wahbF3CZ88Ewjs8Z76FeD2Y2achzDFrDfQ3AsV1pQuDv4nrfm8N31HJGBy1Cu3MSWp56JZJoH66fSStNA7WN3",
  "key2": "3o4KibiSkCa7Gcz1TDbPw9fGvEZFJk3KDW5eJcmxBerPKsPAABaozXNY93hFP8pjiJzsSms9V8gfyzxUjSmrsw4",
  "key3": "3PCZnk4rEuDnL93iQTwZiN3r92g8eNs96MsrzFjsTqASx4DXDJFU86V2DTZmdKoZhW21ah8xjxryz7jYWWNyT78f",
  "key4": "2baMQ1F2c4mhHTwvvsD6KzZE3VsL1yMK5jhMbJbhgyENRUueBZwpJzpBW8Gg7fQ2iD4pf5TVn139ZtEaJqvXUmxy",
  "key5": "4CjVHfDVLTM4bphuxyBUxxqf1HAXggczMe1rrTCdQ6jQqGfeFt3AAsvPz9qo4NV7qrQme2Xqg5YwV8aaeqXvY7Z",
  "key6": "K1AwXAijw9mxEmM2VP5maPTiFGRM5PLV6VTfp5QTChwQoLQmCMbw2vg3zfmBXfdzYqVf7dTcXGuz2Po232zVoWW",
  "key7": "2Tw6VuEGLWKSdH5kQUZZ6tt16caCsTijxCFxZ7V5nbsGoDqkVQBAoJsucHDbBqUtVDP6Bw6MejjDyCyeEs2vCiNw",
  "key8": "4cqhGXkju8Vjj7iETrvRXbJ5q635b2MEMn2LaZccNeJdthqxKGXD3E6wqsQEX8htgR6ja9MTvR5DBaEjwfJJR3ob",
  "key9": "5Q5k5obZ7WPdHzBZg2Vb4X8K94u9jUGY2hMsr6bH7PWCLA4G8jWEGSmvZg7nbcDV9DWdeMtYASStFHb3AziM9WFR",
  "key10": "656y5u9dPZVjMdcKKmfZcyfmR44ZrZdte5AN5y6ZcwZqHCEuVXCkxbYnBnwSoXGdDvQJqArWYeHjphg1Ne5Bopuk",
  "key11": "5jszjo1p1SKrpPqoM9XQ23aFmPWfqF9cztqGPusZauGbjrnk8ZAo7LCBaqTTNCFzduJQrbTTi6WotqtjayyDhnu5",
  "key12": "JSWMcyfyvw99yEPG2qJAbnVZpeDNC15SWBHcFWqpQbCZNFhD7sRjwWzsm3WRBEKqFihm9wpK9cbGLigvihcR2wm",
  "key13": "4gQwUN4rZdxVgsSNtNuEartdnmu6uZD3NJW6WC9SR4YKUheTbeB2Fa9NuqGg3ekcVvAK7CeesNYuRqruq46Lougb",
  "key14": "61QYCBhkVQ5qgFNTfDhga1xPDCZT8sfHoLab4yXxMssMnKJAQXoT1DSodCUC6GeF3L2LRgzVN1GBikGvCrcRnTnW",
  "key15": "cFG4kmrFQGB3KXX5kV5cASq5p82rEFgr2tyaphqdJqKyxNjKaEcBypmwJhwtLKf7MwTkNMhnq7yJxFwWtyRdjB1",
  "key16": "2qkyQLUC916NZ6MzT33bMwFmFDxFLqm6X9jpX6THWGmzSwB2KRu99bzC85PDJt8Li4o5m3Kme24vCTWvbCpHWtwR",
  "key17": "3rnavNVL4ZanrEyqDKKtJDuAGbrN3dBCpEVMZQUbHyy8ZjAgFxghvfa2y2CrHQtDWmJtjZWadAiDdMkRgKegQ5Hv",
  "key18": "328oCF4ngpXrCWEH8UQEFhgkAWQrhbNnnpTzEGe73wqFigUbFedTVZPPX5SFSd1yM5VdSD8Joq9UKDPuT54tfy5z",
  "key19": "4jJcMhgRZ2UowE84eZZhreHafvBW5KXejcrqDBashGFzW86756CFDCF7kHr1V7Psi2zBYzesg7mz273odS7xefWj",
  "key20": "ZgudCewaZkbPwdZs64RzajSL9GorZXe5vV9EJEspW7ZeY2TKqomyaP1CYmQQt8cTrVo4hd6qRu3yh87AJRY9znv",
  "key21": "3dWRCsXDzudeEsJ1JWXRvWYJUVG2jUrG7eLfpjpX7hFLuPbZmqjxsKSQnH3kbLmNxC3yarbkSBNK6L4rihQzga6N",
  "key22": "44qxMxdUjQkaGjKNgYCR5hdsMHu8jTceznLQf6zCig9c2bBsizpPxPNbYiTDJGwpkffScNBaRbfSpXUpoVcBFseU",
  "key23": "9qzQVYCZkFqk6jP9mmkDr2Ej7SYLLx1dg4kFugNpnnXNKJSCMgb1mWeJdBb66J775LD1RwoZaK7zWKXUDS2R6iv",
  "key24": "666mY7LdWFgdoZrpEjKACSrcssjomrXKXUsHRvErAGLquqauNqfzz5gKXu9pLg76ZDawpkvnBjExUTD4naqWutLH",
  "key25": "4B35uqSYD59FLLy73R6LPdd6ov6coC6WMAX6Gu6vPKzAS4uyU3QjD53cv47k3pe5kxQm7PXtg5EM4Y96ex6jR23S",
  "key26": "j1Sdsm3dDAnoCaC96N9cBQHitHBQvVoCasuwJBdwf3xy8R3C5ZTpVQN9Sx9DmYrY9TXgaR5dfb7pQLVutobSnMv",
  "key27": "45zfEC8YUxM1PYQjb3AfPR4ZtaQz2qYELv9uf5D8WpAF1om2UtodJJ1SBbxiu67xb6Szc1uFGfpd5Z7s9A5AySmX",
  "key28": "4u2i7Zwo8Wj3r2HHzF8o8qCvxzpw4NvErBpgN2VKxhg1G92UJKvreYa8E5hqFVrjNRHYje9V1kNenhTg1ppKdk5H",
  "key29": "62Row1qVfakkiZWDcqaZ6Srmh1EpKVQtLCu8xSM4BBYrC1QPp5EF15YySCRdidkxU26rebU2LS5HbbGAhy6pctuU",
  "key30": "2JQC1jURXEaQpVQPGMxHQmmP6fpCQPXAPfzthtJSMHAwrdc5ZStocnVrAoyUVmuGTPqA6ZDs5J3qShgoR9YzfSSy",
  "key31": "iQUGUyX2SU4HihSNAPkoeF2AZa1BLYoJ8B5dffM8ZybWSGgP3MGNvhQBpqCb2y49XwqZRfu4yt1kng5WKuMuy21",
  "key32": "3JwQMLCG3LdUSgYS1HHE1R7npH8Ks18xwSQ96zioHEZ83WYFAoN2h5fBqoP8vrUbbBg6UbDy5G2UvfKrqQPXMmpC",
  "key33": "55uDfAurmuqjFiY3Q5cXWzdeCbEMbMnm2rQfurZcr5XnnZ8M1PbjD1KpZVzmUbJhiPy3SL6xZVtyo2xw1fb1WxrH",
  "key34": "2s9v63L9VgRsmUcjqXdik7w8fqdEDXrh9hb6m4BbNJMjCLkwYwRnMzPGLkiWzH8UTJrHDW4Z6ca8ifdgKSqgpvQR",
  "key35": "3e8rz2v3yRswJAYs1dcSnDaYEZVBFdzN4NXK9ZjFBBNRtvyjmvwCcvbYSebaVHQTZdK4hiYqGeCJCuEbUedUcLAg",
  "key36": "2PYdpxB2QHY9ewGAw1yXBmcVCJ972cAvVUhuZsukEybVvgTUiU8PKsq7kqYEMmkXWcDz3v9BZQLAmZje5cYDKsmP",
  "key37": "269xkcDNTjj93Y6Q3yzHPMj6rZrC55ipuBcfBKvjK1XuAr48ganM4XbaQ5q3zSAxpWjqYVC2iK5qmcWHSsSvKddz"
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
