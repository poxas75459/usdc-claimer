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
    "DaxnmYsFKW5NTGi5jWREGXD82D9cG7EFH791y1TjeVjVaHADYEwWtkrgXK2uUitgMLFoXR5siN3MmaGRpWKiVw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "525nJvBNZQFqutqVeM9V7pgfyF8nEVXz7t73rjvVL246Tz5dSHr6xScA7aq5mpV4qUnVHVEc77MWzF39pqZLUjko",
  "key1": "FqevytAZPE1c2tTLypD4wBuPR3HJGDeDLF21j7wCF59buKWMFLjVxk2gH6eXr3YR2cT5SJwMqFpeXDm4LEPR2o9",
  "key2": "4TV8Sg9uePZNXkT2b6RKrZnedciFB4XaKzu7SxiU1iZUeMet9C7WqBhBqRQhddrSS1DHz2WUh89tG88D1RdEzUMx",
  "key3": "3k5uf2ZpghbZ8YCK5t9YFuDd9WTetM1kgAWmvdhH3khWQsxXkc8BNPtVdmWmERtsMa7FYX97PFv24Mvb2vcXRErJ",
  "key4": "2MbYVx54d7fiaPS7DvKvCqFRTeVZT7tUD721zN7XoGtvv7HoLgHFJSj84Zn6L2QQvRveafyvRchNZdAiAQc28RJx",
  "key5": "5vHEP1KJ8sZzPcoZQ47RUCR9wA85HjWKc6c1Ai91Lb7m9SXQQFYJukie71Jsfs5N94Fm39tYbYyjpvA83Jp3qKVS",
  "key6": "2dRCLibhH3xE9nwEqPXs7r3gGwhwEbKuY8pLxx7WD8gAh1f9isbv795J9uFasv8rTnctYP1ngRmst3N3qaycGa6A",
  "key7": "u755VfDV4sf1D8X5EkAqGfdeDQLb4iNNELb1WqYgfqMokDbNQuovfJ71hggg3d4zMoWdZeReEbRiiKmSrZR46Jt",
  "key8": "3xEZmJLNJVTWgjpQm9emvXJci2E3oMmKvSo7QRiT2dkdSf1k8eES8bDCThtUYH9uTyoPET2Ft7QjXM7z6YZ1tzQi",
  "key9": "2v4P1hKv23XfoapRVWE9C8B759NrFfPi2DY4bfU5MpefD1fxJwRYK3gFQ6DHUYv6CQJ5Tj7CwpkvgGAFrJjx7JRB",
  "key10": "4VrKtx3vY7fErtG2AGYf2oMm2nyhsQRDA9MKyzDgGHyve3y6ERxeRqL5AdHargqJKxohgSv7FjK9usquPzA1kjLb",
  "key11": "4mFnYFvaxj9ftNSEaK2hcLWdqkCccvuWm9bMbanT3ZsHQAaerP3him5uKt4xY9tM5wbd3Ue8h6vJn67XduBhvepT",
  "key12": "5gHivX2wZGxEBvyDamuERij3svxBEQxtYpgezwgNoy4HnQNXg4Y3ZzbxvXDeHqHj77QciSk93D2uvL3ztQ1L1mUu",
  "key13": "qG3w3E2fSfLhs7QoZJQWsD1U3LitHk9YvU8v8BD71mJD5S4gm6Ji7otNcrWBjFqJrCTHAxSzxyvA15NTAattptG",
  "key14": "WXkrNgU4SnyMXHPve4Fge6JFxTDXP3fgr26a68GYCcEGE87J1MZpo3px3pcu9r5znp6fXNidwaXUawzzJnqwbSG",
  "key15": "5xweNcS5ePUDW1hCD7eVi6FdfGA9M5UNSTprAfxFPugRGtUpLFnjF4nvmiP4WEPvqspijmQ88SJ7h7pXpQEKG39P",
  "key16": "5Be24okkpH7J8jUD5kMBPrrdpUeZ7UJ5TjJdXYUvLS2tY2Xmb2TNt7oS6NAFYBhUdkG3U3RKfV5psGPzfx7NYmCs",
  "key17": "4VmZREemnWeNpSz23xz1BK1xoQUbUiRChyyf3Ji1aaWY8eXo9E75kZVNq3YYj2i7ZHHUbvmVtrQEe935Ppk1MV5U",
  "key18": "51ri6kB1mK3TLUSfmAbJ4x7HsD9GUih9ihACwHMs2VRHUtj8ePRdWNPLRipezhRLWG8Nk87v7dK68zGkhoorPySy",
  "key19": "5HCTEr7FA9b6c5RqTMX5wTHBSy2DCKNBstUTmfq9rqDENanTRW6HUihwbhF64HiJqF3gyaxWTjb4LryP1SY3MBBw",
  "key20": "4Ftn7mxfmsQEp7hghgAG1B8sosJLcMhYdxjwGtoc4KUcr5dZMDJ55JcF6Xqo7f2m7mLDFDzrtyv7LR5qpTCma6FW",
  "key21": "3d7YLA7etSDcVpZE4KJmKRXa8LczyzTfG4qWkTmhcc2rkDpJav5cBcaah6yn3vC5mpvJ9j4FRGG1dHUL16pPFo2F",
  "key22": "2DApDKpi1HX9h3zuApap7WhiMTuji5M1JppVVSUefevDY7oH2Cq692h5EVuFtL7obTLz237VAQRF8TcXqbkr6RKW",
  "key23": "cyEZSkJ1Gn9UTygGDijhMmEAMGGg5U3fXSP3tZRp5CkbkMV5n3gx3C4uwZKGqdAVvWbTXWwfsCrJvMfS3Ux44tj",
  "key24": "43aCT3gqFB4gbPeNAC1yaaaNWeGPcBkbaNXKgqiWbbUfjDMkHtmemf4HYSFCj9tutGChKw7GEFk7eDhhAh4zLbG9",
  "key25": "4pKzh7MS7rJayR631eV8PXsoYVdGvrP86FLEsBgfs9sK1Dq8oEVTaxo7dAbh8FTcWKGwQanEQHFHcDq6BLexDK8k",
  "key26": "5SZNUobz9VhTf2rgpJeepTB43nSRTBpFGTd8EsX5ipCpFQ1c2SHix6dRPvZajQQUrp5KgWWzfEbAW7a3rkFdk4DP",
  "key27": "K1twTpMenB8QacTzUrav2Q8M3JBxem1uojdqPnfhkV6FzrCQZitHSG7qxsUasXFKahTD6XjdYGcS9zeabZtCkYD",
  "key28": "2pH4ryjKT9vLYZGACao2QAQ3ra6j6S56hbZoadQC6YsnBUBGdyKKR13Hz5FK67X6Es6xAQCivX75SpdpX4riBJTu",
  "key29": "47KYCpGFScadVSSsH18jnhMHpfNyXVSTHUGJTMNstreC1QbEP2NgVMoWdJEJqcsV9dKrpNqj1FS3ync3eZxncV9L",
  "key30": "5vDLoWkV2xZppfEuJTkdFsSbf1ri6sgT6jfUiGDLeomD2NrdgE9qKQkwwfjyWXg3wGLWnT3hvmaoxfHgNESspHci",
  "key31": "3qDpqPcx7TXftBg4PBHyQAKfVdrusw63DaHxznhPqkwrMQqeKj7BgcbC6u5y2fkng5aSprxfp2qhcHnjSwJLbdgL",
  "key32": "54U9Tdddv2weCskKyHXni7JQy9Fto5DjkR3tPnkT64k9tadnRPDLCEyTFsWL5wugAq1q8JTkmnaPiQXWrwFXAyZj",
  "key33": "ttoFHYDRoGaBBUANqKt3ns1D69WPLbMstbzLDXama51gPEbs4TmcriZ5rEU8EtRGfUwDNS7RDYt9ASUnpNwkVM5",
  "key34": "4k7KoQ1HNnHiZQgy6WBN8CoasYkC79TWEMdDwf9U3aTtGLCx5ZfXwEucwRsHaA2zmg7Ce4gekAhBdxSaorz3XYFM",
  "key35": "3RjdgDxwdJyGY6Gr49FrMPxxBV7k3MFCwqK2hsfKzw3UuFSgXRYuVTQa3PZ2hLosbokLW1bvnQEtqxbBcGtCT4Lb",
  "key36": "5CZNGGm16dMyV1aGjP9ktXjvfYBesuYnbeVLW7vD9jrq8JPXCQGbYniJ3EEPQD9fDddKWjsznq5TPM3JCzrBrshw",
  "key37": "2ZZgYpq1M5SmZhz9QLQF9Znq12PU6Dtaa2SYFN4NGqqgFYo6QDf4KvPCgeJpeUku5kqF9KrrxqLv7Sh4e6KJSFLr",
  "key38": "4UTvwMnPqUh4ouKmtaToWfQTv1RLAbhKtu37nCmjnds4h8arXhvzQqoWK63WGUrddmwLS8vXQPkBNSdrjbKUdC8a",
  "key39": "2PgduqY91dA8i1BrHGEaWknYhQdkaGT3NiweJmZgHqgoXYmHD7Er5wepNzkZEMLyYT9jHEqYQHHhMrMvFbwcum9Z",
  "key40": "2NW4Tws87vJ8sTKuVu5VMvTdPCpTjufEcvSmbetxsiihbnmC8PC4Him4qDoBNGFzvXcxqDcLaxaKRCLu85X4Xtgf",
  "key41": "3LAS1sZ3VZcPnXQNHxNcoGcxoK7P8ahVD5gW9odLiWTQcgPYtuSwEcisoHbvGwq72YLQVxQMHSgCTmge4GFjFViu",
  "key42": "42RrALxZUzmix15FrwyW7hCLpULMM7xZUVbAaX7uFt14dUCThx4NbhTKRJwtRJLGMP4nkChSFRmhjR1zydkMjqdh"
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
