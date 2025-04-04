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
    "3sacb8xbxcY1nZQsybQGZRqdap9y2HD1qDTXNcLerhoMnjWoMhR9wW8dzBHAp91FMT4PEinFr3ZRdywJTKd4aGh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eG6GbG9V4MeEpaYmZVFNVCPqF2JdycpsCMgeBVWnnBf2VABhyeFWD6Huu9piXNVx8hzCmyFbP4Do5gt2Vz5sEE9",
  "key1": "3eHHTkwaD7T85Zv2BoZQVebQdkT871FmJBaBqvzpQYLhHacwjxraquHrqvgKh3aNdq58ikv6fkRAtnezv8XLxdo8",
  "key2": "51bmzpxKTkTKuDERyHZ2TVSDFy6mf4MKWftymqmqNNBD7ewNL22TQ1s1hhzDe7C9G5g8g4xHwupRC3K4qAdHsSfk",
  "key3": "42QT56WzDVWQKzxQenv7cixm9rc41Zm2whAUaruns8Pvtun68nFRTntfH4cDTahc6YHyhQr5oLqxqEppZBdsX8wm",
  "key4": "PFM4jJPZQQUd78KfSATvM3ectANh9BJriw4arpYdWWNFvRFQfwF3uDXShCaNh8krAL6e7LzgEFZ1Nswztv4y7dM",
  "key5": "2By64uSq1dx4JhLGYMC9s8CiFU142D9RG2XoVDT5quSzTSKx2JRT9EhdR63HzAzwmHzPnfhXZV6G838TaUvGvwKW",
  "key6": "3mjGcpk26W1dkfPM1ipzQZNGuG5VmcATRtaqSt78mpQpXid3hRWZonTUBXCqPpQpNxqbZXTvGCT7aaMqkSLsATuy",
  "key7": "52m3s4Bn8jHg1eeCWGmagB7uUXwENebkJSeZN1wJ3nxdKcCwoAEcw6p9JZ8GFi6Z64DPrziz7yPJstbPcj19fwCX",
  "key8": "3TpUTndqG2RkLpKKwKaJiPyrajeujbeiVePke1u4i5vCddagw6wFBkAGpke4odtJ9nETqdrFLNsSrVVnyvrVodL6",
  "key9": "2RNweUbDkkwtmbJtwhkHhJ6YjHXNJp1FNNrSDFyP22QD1CWCQS6UhD3LDvYJA1gH7mH6Df5SLDhz69EYQ3GkUdgQ",
  "key10": "2uREx3NNLQXHfPdB2wn6anUzmDYBW3ANDBhDRMwgY9HkyAwC8iz6ZDFmoMtCTwSZdbQg5MHi4WnGfSWdDbU1fV1S",
  "key11": "3uy2YCSCGabFn2T3fM9LafynGauo22xtLA8KPQKRPWan4DLGjKxSbjFUt2WXAmxMHK6eesvr7MCPuwXKKkTLsx88",
  "key12": "2K2T8AXxVWCinSedj75racc8RLd5P9WQpSzp7BMLiP1hDcB4eCiaqq5sRwepaSmzUYnrgazwBzhHveFHXku2ZYFd",
  "key13": "3MpaAFB7tw3Qr5pj88YxLjMVbBr2xyrJDvJbjovT7rXyDRYCHeTr36y5twJWsHphtWmkT3Ento7WSXMBA1UuXBAd",
  "key14": "4vHxGqJR6Y8MF6wvkBH4r8Z3h6gFfv66E5F7h9PSrYnv7GLUEHd6e1ivEEs333Gx2dRJhJYadYFi8GJQv1nEGTG2",
  "key15": "2yxYdysZSCixo84iXj4o6HmWigjY9smEj5TY7VZrnu41dfXQo6EsJKExrwqnyYp8Qb6C86PYbD9sfbuRAUbjbUSx",
  "key16": "54sxYtXvDzsuujAdLnCie2jQ7yoeebVMgXLxvoZzasqHD9ZfEYPKBXfmkWss5YohECUTB92AEccNRCe7JyWSgzoF",
  "key17": "4ghCwSyNGVDiQyo6Mgejn7RLsmWwarKUeeBxjSZRvkb26bhWVpbnnvQSDp6tRK7LWi3Eyv3qQiHcDtwErUNig8cP",
  "key18": "4aAjQvivS2g3Xsh5RXrLND8mzBxBFVDFf5qMB4rDeLM5LUsL9hrSY9txuKhhjRY9MsH5jF9cdGVZwDuc8MD9mJWk",
  "key19": "AzcJ1uy1g2gCoWHoP61EvUoRuBA787fnSjkb548evtrBXHNmZKZvYujHvwnsFyeHyMWW2r7UewqHy6pqm2ahnGW",
  "key20": "2EpWdKPJ6k43kuL9CTxhsLRAcMes4LoasaEPXdCBYAfG6CGeogTNKVyNHobnb47XFqKytwj5oC9CG2NTZAcRQ3so",
  "key21": "Fmu2sUvi2q5fPZndwwDm8efpSj6jWvwyGpt9iMtGjTK2EuetWeFkWsA1MjXKEhsEB8i7rxtfN6AA4UGic3qytZt",
  "key22": "2bTsom8FULKvyidbNk4Kgfgc5jubrSTB3tviAJaafZaQEQPytqqxNK9gWcLZkxB9AFZHgfKCfWaT4zh35iMaD6us",
  "key23": "4CALPxKWANLAS6iR3qjanBQJeiQhdmWDwXpDTqTxToEXQebRiLUvtrZUy1XRExWHUzW3GErMoJeQtJwGUvkAjs2S",
  "key24": "mkPsP1YS6R7mQnGZWNsXdbCFzw1AVFKFiBUoigAxVtDK2L82svzN2C4PcBFSxBaK9asFKDgKZz9s531iGoQ81XK",
  "key25": "5sSaD3CQu1EskSRbsxVew29PRfnoVzT3V6a9qhnMaVT9gRerEY42UupTgQiBJLLL3dQjP8Zb4pFZtLZCJSTKKZhh",
  "key26": "4CyUvSgQsutbs6TwLXmfQ9srDvcwTjp932ibPhD7dpu7t3WnGxgeDpyH6Rmmvh4mo6Q2zCMuf5gF3SCG44WDw3eW",
  "key27": "2ggbYmFPbkKpB3Q4SZ4yCE7gWGxJtbASqhADyzGLn6F2hyJX48wXzYTSjjxQEbGEpnaCSZK7tg1MGScrruv5h8Fy",
  "key28": "2Tv4BQKHDBKF9YZ22ERsGmgp8HGzUvM6pYJVZ2hiVatqu5tAzQ8fM9JPHVGw4716BWwy4uZiaXLQfXCQBKmNZTNL",
  "key29": "UAWMD8GNrAiXZroEjDVb1WXSCZv6Z4mav6xGFVnbMFWzaH5sW9cfTaFe9mLDBzZqEA4HE8xzDfzeLDohE3fw7ii",
  "key30": "439qk6KzVhrcAN9P5YAk3YSujA9tnqriYLCFA67X4dijwjS4VTyPWeEaWhV4HkgBBy1tHMxaGVHHnZdBxaK2yHXF",
  "key31": "2NmdTmJYnM4daWgdxt3KE1PqxWEMzrsfTtBN6w2JrSeQx25TscUtppEbHnfNz6zLijydLuYPvywWuELfNMRPwQrP",
  "key32": "27VjmP5XGuycGEkRGTArJQJe5LFf3TcrYD2LfBCLSYQ3wJj5hd2oCQwnMjBUqdvDgA4n59RW8YEUptfQtrQ9Hr3u",
  "key33": "3qVx6nv8nDCdKksa74po32Mzb27mXc1QQmsmUWGy73Ne3reWtqY3GoLk47NTauFENWm3WqF2ZeD6X2E8SBt5p2KW",
  "key34": "5MmSJXmcTJYsikuvBAY6fUej6H2PVeERZK6tByFiYKxMDKSh8ECYrP6d45U3b7CuthCdQJcbzHGiPKiaeYUTkbhM",
  "key35": "4rKUkNsPcewmfHTzezjXwqS6YAuY7zXXNGJP1UfsoLmME3qCVUqC17iEHN3M3MuNHVMJzPwpsfuFa77bEcwAgwDp",
  "key36": "Rn8KxjfSqkdKXo84n4HEDPkwWp1BNRKCXVwTamSsNMAyrQgYTkAtJnsCKAX7mdtq8FmAMeSe5kfCJ5cdLbFKNrg",
  "key37": "4wcwfoPC3pKMA8KnucYgWuqXQ1fG1jEiQZ8HiJUgtjVZ7FDxfNwsVWByQ5ZVuXxdvrkqW5QdNzcBE1FXFNhg233k",
  "key38": "4GnzjkjqXKj8V7estZbVxDf6oQfjU65kkgZtdX299QCF5Zm4aJXpXGnyKSknYxYnkfy9s42D3pJRd5E7fY8hcWfT",
  "key39": "3scbmV69dDX4ASKzK4qc6yGaViBVR5MzwLpr3qrz59LamMVX8QNHVk2EN79QwL5KzuUQbnSd41Zb6XmSHCCXwni",
  "key40": "3bH738HkqKooLZ5sP6z4WUi5oo199hjHofx8hqQQFDRZDQRf6gZ4guRZK5xS7e2mszXpfRDfH7uBjWA9wASV5FoU",
  "key41": "2zXEuAqxzJwB1J5F9CRzDTPCcwhkbUbNKYZ4wEvKwP7dgS2bi2kgKWpCxQx4Y8NBpreQK4nC7yvzNrgx5ZpMUhsG",
  "key42": "4nnxXdwegAZQ1XRMsH8VBm5hDdzRQbuA55okUvbvtXvkFGYmYBn8tatMcmwJZQA1GKLgm7pEFN9egQsbfsGoV5ru"
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
