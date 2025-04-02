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
    "67ALPULH8JNfWVUA2DST4d5V41gDjE9FwdbNXfPTZWPwHP3GFk5apL1NDnxDNvqD2uMz6Jwj1cGxiC5V9zjxKGzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k1TX8LbpZy156YmaJnwHk2hrN3mvWWL3GQ5sNW19avRwjBTzPZGw7sCHD8cN3FH7gVUp9oFxHUZ5g7GScpMSgnr",
  "key1": "dVryZD24tL3DUgkmgxEtkcig2ouJp67136pDdmvP8GnJG2i6X3MfMFKPpkbJomC9P7M79mNZ7DdSA7YjWXo8GL6",
  "key2": "5WRZRxQao86Hv9anRVtWDkvBkVDGDfFWXnJtxAd9MDvRtQGWGqkEMxk6akT9YFsPXeB9g6jGeZrXfChTyEWQfhGh",
  "key3": "zKX1G1q66HCHBPfqQnfoarcLg4TNboKiDXWxKE7PGqLUhabKNoHRtz6xcuNMQfSdEwPxnofHdjM4GPwpbMtdpih",
  "key4": "51wYXQJeu3rVGu88qLrRA8E6CrJHqpVeMEjHMTGFB4YZPjgsz4SbcrBXmgP4fvWoZtSxfwHeSYdiM58cznuhAA25",
  "key5": "3Aq8UxDPq9AdU67kZWt6i2ysAvdkvhqia4EPCjDWdippJj5DedWcXpTTvKv67V7eGN1uWhGjDG8xa3hn8vEW8h9J",
  "key6": "42LMPEoyXwjj7XC2SP1QxyQC7p3SLLeCqD1bRjseuzjkfrUuj5DBW3kz7uK3CwbDtpaHbCJMUQQZ3XqJyp3K9kNo",
  "key7": "5txNKaGegYTfkSGnuMnWheN2LTRT5rYhymAWKAM7jeSGn7vPZZbVwbSEwjeiJCFVoqjH7Mh12DbdHCrWQZ4h18WY",
  "key8": "4uvuboZi6UQA5LEt2q5u9GdWicC5Zrfc64TgUwFMdNGvBsZuBWv7nQBrKGpFCN1EfaLRN59VR7YyYewRKC7n6Rk9",
  "key9": "4WKB2e8HqzFGsXjro64QtC3YgPrCXfeJit69LuFvGCUMDV2sr55Z2m6nKqTspSGggjAdbLsHLt5czThCRewKefCQ",
  "key10": "4oiRNqJ9NLDaLVT3H9n9FCD5BTZR5HeHSzeBPPSmoz9VDQeM81M5jNeAT98wiKXgscv3qNVExiFiL1kyNLc1r1oV",
  "key11": "5JUpTbDC6qYkFFKbBGYLq5XgtcVhL9Rb27cVLEYWDs9Xo1qi7wpVU4nPTtXzJ3tUjtFzEdh8dQwFUpZ3RBZs39YK",
  "key12": "56fwpv8NjHKToj8X7T8rRvpaim52PjrevDSq1mP61gq22aRu7HGgJb5vEKkzZG8PXmc5r3pAXjjw6uu4piDsQtoF",
  "key13": "f66gLHUT5p9s4Z8qmXPhwgBpw8vno9DeUfqicM2mj5h1b5taQ5vDLihMLshZbGow3HbCBETzDFBUWefkEB7mmLz",
  "key14": "3vouTN464pdR2dcvVKj5LUyEUo5XRoR1HR6WLBKbG6UykbGcXEaqQYgvgDYRNjTDFCpA6ucHJdDf5kM5zBM9qQYp",
  "key15": "4gMV3AS7UFDkD2MafhTxFFY5iWHpr6wRAHNuwHYFpgjejwP2sVkb6d5a9oMq4o8jZkptHAkSiStp8wreZS48qq6V",
  "key16": "g5TrN1wQVLd2iPzsnsXhWPecVp9axXK6Y4y5tuDwFdoG48YQa8ZRevY1nMp7ZBFXAxj9sRpYFsUfSG6K1NVBikP",
  "key17": "pQuLxMSCXa3qiZkWC2jz36ETpg84ootL9tyEnZrKzEgD4YCB6nBene5CoVvkvwdu2k1NCQCHhY9AtxFsw1r93zC",
  "key18": "5dTYJBgpy9nXo9m4jzzV9ge8DFy9nzn2CPKEeCkjpaZjwD9AagwusoPnHgAoY8AKrth8vuakrwpVrmcqEcfnQTFz",
  "key19": "44kTw1fYxeYwQSUagKEcFTdqBma3USSojCzHQrrr8DMQ5Qy5KbjJEw8GP5MsD19yE8X6oJYK7DQQ5mCEFSWfhT5S",
  "key20": "5oFMZMCY1w6QoEXkh8QjVjoafU4Np6W41h3kdPxxXndJiYC8cEpsy1g2E6ztj13novVMrfFncRfwAtYsd9xEynpU",
  "key21": "3xXM9thfsjoTmFXdE7S5fodSZLWV5aqfywT218YXPmKY37TZDvjd51VK5EDCR634MQqYXHiNv8H1xn6fgyzAt1VJ",
  "key22": "2EqgHP4DpekLmujXZeFzaSp29gEMvzjZ3vsA76XXnpv6TqKe4mf4wDGe1u3GHq4fm293UoCyZbKx4uc27jK4sD3a",
  "key23": "2Y1jVKi41tLUyRGg4jsxr2h5mTT3opV8DyxDfs5B7aWb7H36HNz6F7DSk81vb56bitbWy7XGnSQ51T1LkE1qb8km",
  "key24": "2henH7JzuUPbFdjFnY5Ax3PEhVBHUqcEEcifUACcCEDQRQ5iKjn7HiUpJ7bTHEWjQTkcio2ghHLoB8wodNY5zDwE",
  "key25": "5nmzcYNRaTRBcefyCYrYt3dJ1Hysry93iDuH6fnAkA1wEAi74Bq7FDfpEmaDpG3vDr3FVk9BK2p2Z9FBxP5FNcWP",
  "key26": "3s7b7KGEmynKFvYXT7Mt8HVZEjhWhsFiiLUtpShpqAAufug4GpuhYJJ2LrSByqELZH6ktUh7317K9xToxK8vvLuv",
  "key27": "3hedi7e8Vkjn6tays8r95HXuB8YccVoyhshyhK2fcHBYinh9hd37hgBtrUSJ7KzBh9H6ECkKCBBNTeV6zbJEYGB7",
  "key28": "2kFdfayradtz3s9DiiHsRsBaGYWyFRkjo2xRSFHeHgpa3iLJZ3WS87UHihmfbPUA2dnPfSCyHgY3qVMKQk18PQT9",
  "key29": "3wCPYS4w4Dw6PamtFgSrL36bNFi3McZ3AUajV67K7YWn7bb7tmRuistVcVJYpAQ8rAZbUvqCPbNvGQDpzhUPPk4L",
  "key30": "5iLbmE1NgUqG1AoQFcrMr9zfbPdoLEJgR9gerQ21qw6rs6HbTHbe7MoErbWyNNwHa6ry2YWLHGCj8xPJPommwM22",
  "key31": "59E7Qa1GB5wuo3JufKiinJ8bePv1SPEiGNfZccFuBtWTkxs4AzVya8ysPSozm3h7x5ngrwuQA7GgeFeML22vE54Y",
  "key32": "3XceqVD2jka3f9XBm3HxhZUAMJJ8J1vUH6SnkAw5Bs87afS92svCB2KwYYMw65XuxqyNou16iB3FqcSuiQer7TpV"
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
