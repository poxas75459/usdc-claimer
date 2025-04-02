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
    "2jNWJgb2e7vP4NhiaweZvKS7EWWo3aUKxvbFDGmEqKW3zS3Fx5CSp7r6zVY9LYWGFSe7yfSEQQuQ52du5WDeLHub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "251o8BAjbwrPDJEbis8HdnoPffu5U9sE8M9TLz8LNSX98s1KdgHQ8kS5WqU8fP7kUQbwWiS7aNq6rjrAx44bPZu5",
  "key1": "4Yj4sJebasPvBQCqUhgbW13irAzRKd8CVdsBoYErqWcgiT6GDPVzwbLnV3D8hYZBqnHhv3yE81UKooovrSzJbQRf",
  "key2": "6zhUYEw8SB3bv7hQQyGgPt5wGDJx36Ar11cvMLLbeWGd99KuLfzx8TXtaeAPVSn4B8LfEPsTwzq1G12UqkyDS6r",
  "key3": "4PRM3gKEz7t4USgLJeabwrovQBRJjCzeLgS2cQk7oCSdmjKLyriPcNT2Modcu4RkybseXtMFRWKvHBBCaFjWQWBR",
  "key4": "2w6VWBiwRxjqJxjRRGHYiG8oLg9SDocue2hNZVu9qWBVqm2z4MkEDuJSy7EBbP499wFd8HK47fdAyV3xqextZYxf",
  "key5": "5Ja8z2qRNnFiAkhdAnpp42Ly7gDKydra5uct5swU7KXJQNMqc5K1v4F8GLtrGtx4xdRa9TZ8fWnXrvbaR7fNpJLj",
  "key6": "YWcF5HE82PHFgLKj2PPDe9LxgSNEyVUaQ6nzmC4Pohsq9q77krHbbACUXuW5Xp94DGkmPSVGZrBtrX3zXhU6yK7",
  "key7": "4AEjTWmAVpQXQ8LUCKxg34FqE7XBKQQyyWxgiE8jD1czgWVBfTnBKe3zobCtVGdxLW3LDKEJwQVmJigdQXg2Dqyk",
  "key8": "3WjM2PkgFaWyHnYrbch9enEttCXfKYmk7Ai9PSVUR73Kxh4Ps1obohw5BBiXyBzUg2qE7ufZ2D5vKUKLeyyrqPb8",
  "key9": "3QxwQZh3A6pktb6aNTESpNmkvnU7F1jkprSduzyhY9LHG9vpqCANAVJtWeYNMbZkf4DWyh434jzAxDqwZgXkZUxG",
  "key10": "3vFMfrDVALZDBwyyW3wtPVd2T8zQHBfDL5rwYmHDgmn1Ewnfo8Tr2GioziVs2UHDcEPKX4xCJZdgKguoSr5NGyAF",
  "key11": "5Y4YTmn5MZ2QRjsFX347JCtkHMPWtzcoFsU7hLj7TfkrYwrPMCXvWben1yHTL3PYo6aTvHaY6ycFNtjP3XGqX5Rq",
  "key12": "2DxvKWMTz2v8zh7kERngVG39Fj2WH73oMc6N5QMNXwcLa69fZ6zXr8PzntFEs7SQ4NoQjZviQ7WmNmSC5fE5LHmg",
  "key13": "5fVpdddiMt12sQ1kY1DqC4CuFRJQZLyk1p3epUJL3QER82LWZkst6v8V3B3GvmAWZwGeVmaHD9ybjFpqGwo5yFnp",
  "key14": "4Xx2byXJymY1yHRTaadH6DuCRpYRHG8m3pE4vcqRt5CZSUjmBBaoeLR5tSoFmXuEuPdQaNQeRCvFXpzciEao4Uc2",
  "key15": "2PPMDNaiQURFs19UnKtVZP4LZvgoD41gXzY9kzYipW6xvrKki7c6V8977KT7pn8VmZPhijQA6SLbs2LJpxNQvCjZ",
  "key16": "5iNxSczjiyNr92WaXV9qEpqceRiMq4KxMoM96qEgoDSu1g7st8NfBmUj11cUm8TRWiWqBaPfgQ1jFehdqc1fUFG5",
  "key17": "QBWk2BRWHLPm66B5PGMfLqJzeXGtg11719YhAN3986RsZeUUsCoEayQMWnmzJASnB9CU5ej36LZxt7giyW4R4aB",
  "key18": "2gH6MxqnEqb28jTg3UpLy6huGFGRJ7ZsuwhUv76KiyvPaZeKRqRp8kMfjLMwiyWSsqScFRYYBLjHyaW8T9By9DsG",
  "key19": "375ZywSBUh7Cbj4v5byeKqRqfcqFTivVr9buXTVQzJyiz3C6jwYCLfjPASDYZE2Sv7F3NZjMmiTaxJtTRYyuNthA",
  "key20": "LPQQ7ErfyyqusBb4DQtniW2FCKS6RgD9XzPb6wvhjwcus1avUbB4uLkY3RbNX8xn8i7D1SsWpRSh5TDrHYdn7y1",
  "key21": "5V3rsp88cx5LAJUyX527Qmoi9nSDcxYYPh9QMsmAjKi7y8gpubTmxK6VRNiba6rtTsh2b1zN7YAQcvNZFDFVJw8M",
  "key22": "4rvQ1g7rcKyCRa2n6cvSzhu8mAqaCmLYJLsgtveuUKTErYMZzatC6WjGKtgY3xedpqhVvGsM9c7z7mvNTeAefSo",
  "key23": "45rkmV5yXUSGW7m1g3nJCjvmdBJK8mULXw9sjCMJxBmvAKQUb3gBF7e7x6mfYfLpiJ9gBf1wp7n9nBqEde3dsj3S",
  "key24": "4znAjYL8B4MKTMAkTBXHbLDB5QKCvEphrrVrj7v9Pi3xSBA3rsZcscQF1ouAxaBJKAYn7HZWJaZ73bPNbHW4pDRn",
  "key25": "2MCfPmQfK5ZwsadP3dNw7qNYy6JsKj1Cbm21UbxueZxMhHKVKpVDBDwxzTSpeNx6LUha6gbBQobvVXSvLy7y8ivd",
  "key26": "4CRdoqj3nnmcxM5r73sw2Lw4UBnj6K5SAB1hHSqCdG3ihQrr4t3SMde2c4jH86W3zTRUMR25HQyz9FaZNtjodgbT",
  "key27": "3rNsJqxia7h1GgGzY47jguLCyzdWPTZf9c8QE8FndVZh3xPdb9W44XwAnJ9RrXUDYbquvxhbJAEYm22XYTkyywpx",
  "key28": "3bAVRnmePMnFuDpu1ehhMvt47qfowsNJjFpKDaHkUmsqiJdSNbm9DyLyTdn9D9Rjii9ENC9H3gQog3Z6GikmAwof",
  "key29": "3JaaRWVZaJbjcDMomYE2xNgRkYMNJe1sRir7DQBjMuaKnSYEdo6t3gNbFdaYq7h2frpHmSuuuR3ERrmcNN4xLtk5",
  "key30": "5Y353t68sLe8ctUjnH28pUyEyMdMHius1MwVhz4Coyf44cuQK99ZoHUgL6Ffhy8UyBvBXHUSsbt7A5nzNSpKNhMV",
  "key31": "ucyULFqF9PRWJDd14dJ1DjmZaE4XyDunXkpqvPHtJaJoNSzgnw1iJxezDH2h7euwHRUKwYKMS1egT5UedAA8aCy",
  "key32": "k9Vuac4vdwX7nycRwzFy7bCFjMzAzpmVJRuddcCBzX111UWtsrSJHDSbrif6e73AsizHFqt2Vjzjkw9DTwJW1d5",
  "key33": "n4mkjjWbn318KLkNGH2FH9B2dnJq1HSHFCBKgnsiy64ZBgdQFbjJWm4xHeQ2z888E4McD1SiMJ7ur4vgg4SeQWX",
  "key34": "MPYpdj6DRae2MbADrsrATqydWGrjZEC4DVm3g42hPfeAZs3s2nHDZAeoevsUhisBChvycLj6jn7XNzHsc45bWP3",
  "key35": "4pTSxwfdgNRhVofGsHxTCbwgG2c8DX8t32jP7afWJk9rF2Tgr7o9cE2EkqFzzvNcxTgefkLPUUbAtP474uEfXNty",
  "key36": "3gfpoEy6sx8bKigcsE7v4DUKRoaKPdhzjhXhZDnTwDHfqP4LfUJU3UuhXTvCgY6XdfjMhY37zLquF1n7ymSKVpNq",
  "key37": "5mG76EY34SYHnMq5hybhQ8w8vu6Jf6ReqisJBrWbzAj7zRP82vtRocC8gui4HUqVFtMnPw5hhjKikVcuZdALcP5o",
  "key38": "52xS3fnXkMJYGvM2pfdZzbH5GQHmcQv5Fx4XTHw8Gn3rdxLNywnwrkagpA1eJ2KGTnsj8PoRhA18kSaCmpSxZEhG",
  "key39": "girkHGC6MxdzeqbdzdNja7Hw1LQq1nxWqe3EkGsAor4HSDnyLxexy989gP9W2f49a24Y93DMnmc8BmPWwESskQq",
  "key40": "5AduWNn8oiypUv2diX517T6uQPcfFMAy2ixsPRx16ud4rcybJANwJtt8HXkYzKmAx3NWM913mjYxCXPoHg53cP9j",
  "key41": "mbR3ubrbnBLw6pPVYWcqZTHmDav3ssxHsmAcuWgoekAz13UGYDm3GqUogTUJtokhbneqecdFJbs4vdAjHfWeM1T",
  "key42": "2nZPBZkdXTSMm21FbGYdKYP9T4RQVemiiDAWCf9ErENxUjGZmmzn1HvXNyKigrPJViPbfLxP3QHwdpFc5cJPkhT6",
  "key43": "4WVTVYLVeeqz3X9XeuwQ9J4vsraR9FNWkdsph8Ya93rYHy6HTYqxCu6xtvy7RySLqwJBdPKq1ziuqiZEjZvYft5t",
  "key44": "3yXi41y2jtZ4ye4zkEMaQr5Bkz6DspQZYkcip1CetXz5P8zM77zpMa7QssrafuY3c1LfzXy64HsJPn6EM2fv1aJY",
  "key45": "izu9XxWfdZodmvYeS1mxVxgBJZTxCtcYLVqzbmTALmFxH9G7G7z7thtP1i41tEzFonvixtPgxneWZfTR4utnWjC",
  "key46": "Rbsx3de3Ro6Wnd87DtABaAgfjC81WvCULHTVrjALtryRbYg6pc9QKsE6kFKWo8Vy74gETbLCFJN9kvVRSSWZubx",
  "key47": "5fgns4e8kP8W84p3RC66DGFdVGD44dBjREqGtdocMi7NGdrFAir48nYmUxcFLLk4pdj5C69M53Js2NJLo8VVZ5fG",
  "key48": "2qGKLiJyRrScB6BQb1KEcZ5jo7a1cQfvKrzbXK7EdY36eKsY5y7eKRNGqQqauuWHRnveHaZGKYBf2itoBYpTYKd8"
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
