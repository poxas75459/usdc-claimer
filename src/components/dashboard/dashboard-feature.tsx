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
    "327DFy2poD5TNLuTzoL2hwc2AaouVU27bS1GSFwQ147uYW4Sq3YM1sYTJzLTi8qjneaHodZa3fpqJu1pPxtZEy8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DLaMK9gKCDYBgc9Mrt2uFxvj3YVcTowZSfYEEH2Rkqd13RiAw6Dc3G3aQJsKVEAkMtfaJQ8VxviNfZ2wHYm4yG",
  "key1": "2Dz4D4fsU7nd2aDSfa6vr6vxXw753JZurwgLWTQwWb4956qjFxL5UfV4rdZQ4dao4QPn47Mi8g7Xa9QHMqp1uf61",
  "key2": "4T67LszHA63Rbxpc8eJS69duNzcQAuEzEvNQFaqnFf8pwkkP18LYRpuDjdeAxGc45rhWBvTbuGPPgL7ucdfJFLG4",
  "key3": "2z9zw5bZLCbPYb93V72FaEgjviiMYVNgnkhEch1jaXb4LqeKaGSQAwA4eW39NoyFUas9w72ZDkb5otjuJQVg3afH",
  "key4": "4nfY1fsfbigvQeXhKiMBK3q17kNxoe8BUVjGUJpiCRYNB1dho7aBminQvQbJqmsR9nUjFpKLgSBc4EUyAoVCBsST",
  "key5": "4TfwGKKGt9Z9pt9LXq2SvrHFZ27e2c7FBRYMMk6vBfvXx8DWa1ncMvTrP7VVjDYLCjMHp8kXQEVb5ovig25XRHNM",
  "key6": "2PrL8G33wET63xoQLCZpSFLHtd7jZBJvuEut32kWwD1XGJjL6CrzpepJiQxMqSftRM1MZytuxqQmVGmx7QupB6e7",
  "key7": "4dZ72p87uQmA8qPTQDaWK3r5BM14febsHELay46sxexK4G8fSKwqYyJsXannMez8jgM8mVb2wSYfiLAWTznF2RcE",
  "key8": "38xxPscT5VkufYYta9V1xdZy3ZD7nNvdhEwBnnS5dpDPiSipY5kUCHQZjHYGFPdqUc7bSCBLEo97RXZtHDkvjuP9",
  "key9": "5etyFCbR4qyF2fGXE7EQXuNoNCxHPkGLpJJBBFRTGQhfZJfwFyTbkRaBkUJbmdHoWA46sU5KyU66hLEx6GmmFBMw",
  "key10": "2YwZNLDfcyJPxufLCZWnALpMBmJGTCRPpcK6KPKCZBmZzGLNHfcaP3sLhQg51rqATzGVG4jHG7CGmtdMC7sz8PmR",
  "key11": "5TKkvsVq1jtQQmv3oYswpqdeWkjJBGx79gdrkgYVUPxZjWVYgyqFgKuf6Yt2w5eCBasSkKadr6hv7whTDXwqZUBr",
  "key12": "3jHGyfBpWRn6iXyTMNfm942W9XcTttu7sbCsYoCayqc61TMLAHzZ561XLvY4UNNT1jPpeicZnrGh3J4FBwcPyKc5",
  "key13": "2iMnUkBfkddTvWJFHcqWbwozsTXHYE7899KssxE9Bu6sqWGKzLksU4T9S12tA67d1cBRVyQ9uDPJqZgSy31n83Hn",
  "key14": "4XcpeRhtg838S2ouhZq4R4ub5ijmtThp1wRr8WiWJNANZZPZan7KTUhd9Zb3EUeruTi4TYSiYgv1wtSRvKgET2XS",
  "key15": "5PkxCgbeD8D5L6vpqXCzFBw3Y1YpiFVXfbi3TzgtdWrNvaYkhpNQw2qmafvbFEpzxGJsfuUuLQ4LpmJfB5ffEb94",
  "key16": "5yEXLSPLioqeouovBib4grQm78gMGyMA1t4KdZiD2NkGEJdNtgbnUV6z9DbfAASr5AE8TCtVcFDDfPduxHbTrxTG",
  "key17": "2ATyCJ29pCDRS7JPSpDJtGVN5gSwkwwL9Af3Qnu9g9EgC85cJkoxa5mFrK9ek2E8y43Qev8cpGX4JcJCoa7uMsjD",
  "key18": "45wXStbQ8LVJYNNfxgKwfUfRqSDPbqYBiFaGXcX8A5vKJBMZhiAxEvc2S41JvqVNJZvq5Y6oNSuapWCTtrS4LxPA",
  "key19": "5YntazFMBUhvDkA4qmV63n1cGZqwN88SHdHswNTDWTukSCUDMFdgTKhrV7PvKtLtcqk6mtVi8CwS7XJ2CQtCGvba",
  "key20": "3N1LiPVfkMCBw1w8gqEixqXRJaqBbn2tPesr1tm1u1V7FT6LAyUgQkpCMRNJgxTbN3epcs64kcMcwhxioKyz3N8Q",
  "key21": "fwZFZJVzkyXKPBo9Djzn7cKgnJDo8uCbhw5WZe1uMGH94eyrFjNsmaNp4LPmpHFoF4YLuhc159A6qmJeByxsuy5",
  "key22": "3k1817TFE4WApDS4pzNugMc3v247tCoRf9V9k3TspcS8YagJrB9o5rNUhyXGQvG5uJUhxzHaS3hUqYraMYkxcRvJ",
  "key23": "iijZbkg8uUsdgMaq5shLdVsfB8MFZBX5C5T8hoKWrF18hWWz86w9Wchmu7fsNHgkmBHPYYNBJevqWB7APZ3aJgc",
  "key24": "4Ayp8KfaMtj9YjLuBVjVmWzWPQbvy35kgmwjALWePZN2GoneFWA6BFK3qz8zhJEHkWzYj7KuzZoPy3Ch9FqqDfpB",
  "key25": "3DbYfVBXS5DsuX9BVBeYF1vpDdxpFcBUAKkSPsBKwoYynJurNiodDArrc9jfdHKQDYaw31SMNrouTuV42RqTTasB",
  "key26": "4DhSSUaV9nQ233HzugTt74CkKraHFfuLWLahSd1yjiJhY1L9efNPHny7PMQJ31vyrfGFn1n5Fw6r1Fo7AwhMGApC",
  "key27": "2CF4KEnj88CV7Jdy57gnqpTJWZzMMmNiEdbsNHGQmjymLJMEYKEMxMSBNzKVKNoM1NdeTCJWJpCzXbGpE1ZvuF6F",
  "key28": "k2kVkZrTPefdx2Zjh5yATW7r7cGfsyHRkee5MVBk4uuS6mozSxDFCWS7BUvdUq7F48KXWcPqRiZUhd5xJAV9QfC",
  "key29": "29UEVfoRHnxs3n58rYHWQoEy6CCui6xVuNRiCTV2zZAMtVtT3ofqkT9kNE4QwpayKtDBvg5AHwGmuqpgaUYQfz4E",
  "key30": "2DTMNs94aNsPbrx7D5tpaNQgH4ozcqS2Do5FHLvQSorYSu8gyTdsdHTkfKkmpZEjNfXcRRwQhCjo1XYgf6WGJFuB",
  "key31": "5HcJy7NiK3ep3PzfX64QWzyxq9f4j7h9QnS1VMftDkSAvzkMdBFpqbR85h1v2kymPJuL5Dz7jAx7c83iFhEFKg8u",
  "key32": "4MEBVfWP5PM2BtCafJNd6Nr8hmQwcUW6D8SSA5mLLHcLnHnw7bQc4itjn3khgqn16uGsLcdGf7LJQfTBgivAKwzj",
  "key33": "2jhVK5nvSLybKqPqEjbjGHqz3V7zgJm9emWzUVt1GxoNAv3RFweS2K7bGtFE9VcDXiUxUhvZDGStTzRPxmUikU2G",
  "key34": "5EJDhAtCid3DRtPn5G441eDy1wD8tqapSnszhRQsgR2VGQ6gq8RUN5JrXq3wqeY11zoEDn4of4JMax4RNJTY7z2i",
  "key35": "5ymisPvQFaynvaa8LML28DyjXg6vPvVmKJsNr8uCcfRV7esQFqE7dDt7ygjo34LAPYbXVgvyJWP6fVu5Eh2Vmw1j",
  "key36": "XyithToGbXKVGwRrqC2WG9W8dEgu5k24qkaErKk7VmfcK1Ch2zUNq1DBWddFCpyww7HTkgWMjbqsNzsFiYWt1g3",
  "key37": "kZvsE6fXBesEyzRt38PzQ6cnuo1UGV5e1AnH257po8StQkekAKUGQQf5wafjt7vtT5Wwq19EqY6rDq21pGYTJzk",
  "key38": "2h3iRj4kAxdwWUmXj5fsNg17GHkuAGeE7V8QbQvkVJ5fmDpWEGRzjvArdHCmQwvwsa1XzgVMScMmCKbPhdR1WAUb",
  "key39": "FQA2HQMLm3nAFHZiPdfTLzUuJ5PHwbjC2Gx3JbjkNEhP4wuaUkZn6zH9ijGg33UEDfoBRjmKcrmeG3a3zTnjEcP",
  "key40": "2DNkPNogAzdUouQBXSzWHGHACrk9giEftMhJbVfQhG3LfcSvSEvMxEddPFK9JN4U45QmYtrUFMuu9hhvAqAwHW2c",
  "key41": "5qhc1HpeKtS4FAhbAkrcPHR7q2wiBKUwd6eSmSFacVyPonVCDkdr4DMxpvP72BcrQt38RMdEGXkDU1XcBwjEppDd",
  "key42": "5fiJvHueYLXwC3r652kyh78xg5UnS5W2RdowJqwtFGvuCSFxGQPiXoNfdEW5XFkEyVMx3DuhLJnWxqX3Ni3e4Ld9",
  "key43": "4kP9shX7H38iZypTW9cWbGX1qc589erp9tARD8hpBzPosAeGYX8YZ82WeQ3xa15VzSq1qpQsWVsPQvXEtX31N6V2",
  "key44": "358HnotEFc6CQWNiJv7GGFMfM3zMoYUXB1HoGWEzNPNGJph6Vdj6KoXwrGZ59WTEkbPng9Pwju1b4vVqARguYWjp",
  "key45": "89EQqPze6nRisXJyQrte2Vxzxpu1XUhKQUxsHt2H46bYJrat7V6ytoRtVRNKzef2hhMDQBvpBTwfCtBqTQ55VX8",
  "key46": "5TBMg4zKh5EpcHZVd9nX57eSiL5yjy4hAX2yuM7mwMYaiNxHAooqLzFzekuuzRaMhXp9zNUj6DREQe7wNTd66FRp",
  "key47": "3mE4LAjK8drwbWwmqELMwfCH3Z3PCTmsaAxWTyJ5s8AmNhfKRab4RskzWRtnpzHfRZjtYVrDNPCPdKteZHC6kn5k",
  "key48": "5afp7syUPM88UrbuvV6ekmvnJGAtg9UubfY4eYS2epMWa8f2z9V6xL3sHhzXSkCW2FRyw8thKaFXnkgatkfc84R8"
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
