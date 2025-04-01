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
    "4hWHnCHL5DAyvivaCk4jKEYHK55fLtA6fJGmnN4J8kdZqNvkHUfs8YsxzSnpZDD7kUuyC3KnR1VVwGSk5reyiH4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PLn2LRj18k5fSeUFnLYYfnx3UuYipSNawaD9h1udUKz25dXDq3py4BcQzJCUx7tZoNt9JvH6U54mQqjGr2uoh7f",
  "key1": "LUuNMNfDurZr9nkVpytNUobYVnr4bGYsZfDDLyZLrH5yc8KrALiwgxkWVSn3unASSktpqUMaSB5PjT6w4qJERCZ",
  "key2": "3ydrvCcsWafGtxJ3TWJQkUjkXEXrVZ3Hg7cWwj6FvX91ggK4VYJWLhvksruCVHjoAWEJqavXFKP9pSADduv6qPn1",
  "key3": "4BUKMtiEX5v6bKdoCWUN3btZzFh62o9HjLxyLTEcDANVaN6mCo3BBHamneDQAe2Lbo1a7RHjbXyNwyWvzeQJpjaQ",
  "key4": "kvrrzw6RdzVcwwsNPsyGzmd1DCZyfkQ4ZpkSs5jyWMBXoxuuAozi6jEpu2mMiTji5TEYwSp4MX6EQf8VtxasaQp",
  "key5": "pYpM1fRP3EehuXwxdkfSDeJY9qL9pawKuY7gBixsoCY1KYcfCCAkEw9gFyyy1Do2FMvyba6SS8CLZZa5TqM5sbF",
  "key6": "SGtTMg8WA9bkQwTqyc8QwYrpavcMQzw77JZnacUjRe7mcVwGmyVyGwg613sfHehdowGUxcH94jfPqNfVZJPKoHu",
  "key7": "2NNA2GVsSc2tV3e3Zh2CR5yKEM8NNiTxQd8mXwa3Ftf8PitSByY8qitQnkqNZzr4W6NLpsePqi3uaGnis5XRGV9h",
  "key8": "zftP48kgnPdW7meUdii6kqLdvALrCL5td8GYnHrergf1ju8iLiuKoU3qCkVbN3og2ixqxVzw5ZBPAUWrqktuxW5",
  "key9": "4nPgWYY81fWScZ7U5KgTzgofjXSzgFnJM1GnFujvxZp2Mak16MgaXzcNMweMC9G6vkSPC4HY9By2k3UTf9QVbHYk",
  "key10": "z6w52fV6BEjjXWynNf8vF8jon2j1oU4rKfK9cGsaRetKm74WZCcaQvL86B5JVLd8ZqWs5BzrzT8MLHgTzviBkGt",
  "key11": "2766UfTZhffiLpqLtNaxi88hMGekdRibUFo6J21iHrYTypC34b97oioB8Zka8xvRTmrYu642ZJACUBhggYQCHAuf",
  "key12": "31chd6dd6BLAP2QRPLPiKpyUosFTgYHStho4pwfyHcmhLkC9yBHkfAejK5HtwKbSpWd84srnjMW4nkUaqGBuyUZm",
  "key13": "2uDctCZRBNCEN9kJh5i8F5kkDozJAxXggZMGHxCp3RrDKjFfsF2AmsHmq7mbqNvLQr1NCkCo9zuqVaaq9qYxyQ2C",
  "key14": "5sgc9DLWxygs3sbigA5hqJTRGYDRwAUYpMoRJyESwyUqbiwTwxm9mGPokbVzRwxy2VmZcUhBCLLagcDXmr9tApas",
  "key15": "5SD3XPkYxNENea8gcN6Tj6ds6846zcbT8wMfFtP9zZr4YkCZL2NPJsgHa85AV8up5EwfDq5GZm9azJVzPUadpGL6",
  "key16": "5ZEJX69ovPQMiTPXvADcYAbQbmedDE3xrAtPWxt7aY9UxzfGwoJuRW3r59FhZZwvyBuYoon9B2LgBgjaT2inBe4r",
  "key17": "5CtdwMfzN7z2T6AsgCrVfA3gRbhjtXMdM5FC8YtsuhR1hSPWDqVN384VLiD9pDndLCiBki3h97b3f6Eg9Gejq3yi",
  "key18": "5zb6JpbMTnBE6zW3dhTCRaL3K5PDtRSfkZM3dCKZCVb2yGedz9SWf7WmXReU1DWR9tA4gFUsiYMkVn6PwLqBDuXi",
  "key19": "4gXoEG3SLngXGKvMWPRxe9nADJsUjPfzT5jKALheRDJodveppzrcG5qnuN4t2bgprWfdDTx8SebEUdg4p3eytoig",
  "key20": "4YrNqMcBjYkdNLieud9z54Gom4NB3dNTL41CwhWfnEny186Pwpo7rLhMa1xKqjPNeEYjGdncGsVucLrQkAof4QsU",
  "key21": "2WnmJMveNquk5cNBRGf7z4L6YsMUPyqLyVgRheE9171hdBEZeiL6TuZaW9aULEhHiQP877LwEQK6YViJ8tiJAc5Z",
  "key22": "4vsyWosrjEPyVnSrCtAYmLBtUU9g7SHbE2yum4WXcSVSnKvY48bFzkmJNFDCwRJjF2fwLmHwrnB7scEXm84PiAsN",
  "key23": "wZwFUFjzxnmWviSXRgJaaVskgtzCeimGcvjNFv75BM464sMo79kFFjGhHU9XtcQiddFvkKM6ghr45qWZ99JrYDJ",
  "key24": "4mArgtk6Nqti2FTKG5SPqJ61dqoW6Cnc7hsydvSZfFAEHV846RR73ys9bbYjRPyYw9Dgszke6GCvqfNwbGTSDQjw",
  "key25": "5LzAPUZzfhVBKAXNDeAbhLkhVRF2DjuocZWPR3KVyMnkYgFcYr4U89NuLdpcdYp2QbyRNbnK7exz5ksCb8MJehCA",
  "key26": "JiLHqC77DGpx2phtNGu2f5j5D3GgB8aAr9hVEzdRqekgDBLUE2Likt6qDYXcFdsA3AFULC9R6ShTHfo1oqgmXsW",
  "key27": "551D9QGsXDYd3HkrjsE3AuipSG4Ma3ahuatacdfnfi2UaGgSVid5a4ABMBJMrG2NBABGa3jNi2bEgGnFgHKJ8GtQ",
  "key28": "5ofoLjm5wrVR6EjHj6Cxq9GVk9G6RySRVtcb5yUbG6NaewX3BihN74BsVEdr9awdY7xda5fUFEbtFw3ijwZ7Kz22",
  "key29": "32ouGqpBhGgLtsZV6RVbipgF9ro24BCo3zTQFhH7P8NKefTkNdbwpNNYpkYZAeDhAPerMLEGBhtZjqqEwAjaFn1D",
  "key30": "Fei1tp1uou4wpAo74MDfkG5eiohcCWLdTuQu7Hg2SYkLnfEQQYJ2RzzGHVN4ADV3pPqHq6u1h5xu8QNuVUG3bQv",
  "key31": "5nzHydwJKBx196pVPKWpNLiMFAcytdqw2FbvhqGTHcWkTCL4VY6jSYDuPo9ZG4Nz7zZxwNsb8uBuYLJiHxyt3FA5",
  "key32": "XQTupBwGoebagz4v8G6xqg8ZANCVGAcsiDLu15CnaHcT2haNuGmWJi8epktuuThi6re7jJmCmfb8EBAinhz6KZY",
  "key33": "3XaVGgZRD8tkW9mhYMLMk3nmUXjFigDuka432BZ8eqqAjeCxVUkRyPSxqxsqv7CVXWiqxJrhzrPj8hTHH51b3k8e",
  "key34": "4atjdSxhfYqbJJonZ2vvYt9DgciGpDFXD5Y7Ree2qcjPbJADmSy6XeHMcz35b13BNBei5Q6NYbHvqEYpk8JF1iRF",
  "key35": "AArTaKfG64j5CDVk2Bjdem4SR6H1q2VjLP4zLy3aUpZBWSZNrh426x6ViW838v6UTa8sbVJeHqixG9cJ1YPWGQn",
  "key36": "3Z2hQZLqEmm1HZLghj69Y6m8txH41M5XXAwueArrkofvEuKmyP9esnBho8PRyMFhzc7ScZU9qziF1GAC1tGCqFX",
  "key37": "25HQxBFF1uEbn3mexBsrqqWxzN435tZZQtjCquDg1KXarxpoSpzgZPL88VDyyvbJLVNVYwEjoJ7Vee6ahxdj5WrS",
  "key38": "5xjhGNTPkgXdgQ3nr4R7LV97eMnyr82TeTqTMjBKzeRkb6gmYGS2crqcShXR1ZMvCN26nw1p75fWVbE2G72gq5f1",
  "key39": "3oHQSuXPUpYmJQTWUmwaFNTTzas94xqwfUvUN9P9xHiHcZX2kxvWJ23n9HYcdxjJ5cL6gXCp37jZWcFCPXh1VG6R",
  "key40": "2Qs7v6kcjSnZF1TrReCHSdp2k4qmqpURhY9VTAySujWWoCCc3RkGr5eS7jC7T7GQyGDeEXdAKorYPwnr6gTavAHK",
  "key41": "3HFddhjPwp1Jv6obyxvUKFmBJTerK3rNPXaVRMvAvgTQCT6LnY2hCE1w6fsomYon2NJBmV8r1tkTfY2tHNCZvK7f"
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
