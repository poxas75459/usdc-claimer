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
    "3PrCYcJERYzFCnHcAePMPQMopAC7sNVMYjZTxwyzCj2xem5tAGuMSh2uYrN492XgWu2S6fFtzF1SvqywitWqvb8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63MYvpcKEMCug16x5UJ4BAqri9MNujSz45u3ysnRjqX54FZtV2cEjH34Bsh99Sega3zUiupjtQfKu6399B828aC1",
  "key1": "t7rFuNDSL3obVSpfRWE2LAoT91ojFqSr9GB4q2UBHbpUBiKndEqJnm7ukpg83hytm5s8FxRZxxvrtiMCkY4wzFk",
  "key2": "hsvErXTnMx2s1zgezg3rB3Do6gVH7npw7AjqJXaveqwSARjAu3Wue6FDRMtALDcCgokY9YfzEL4bsYtNL1bimcG",
  "key3": "3YoFBHmaLKn1Ys1PPTfHP5jqPUfeNcuiPE8r1rFBcvnhjdNuuFSjK5NPEweFs6b7PPSXNnL5fK4ZiREeHNBbtZh1",
  "key4": "XQpK3h71YnH8RsHCg2RshqYuWWoBbxQtmxQr9HrGvcJka8UmrkuJwuJaAZAQcn52fH7SWqAgmi7kbwYcFcBe3UY",
  "key5": "56Ujgh6ZVx85kZ8sP5ksLtyVqNrLkNHV35UcF4opbuKynH6eKrTpSdmQzrGHaUjBY5QmuTQQ671ZkMDEku2rgEoS",
  "key6": "3vTvZ52veKyGsQLMH9rpF45oYYsPoxnSfggKDpJCHRcd1SxZ3wzBGoNZWhKe7T9GU2sZ4LEa5YUYfv3cnLSuDqh9",
  "key7": "31n1JcrMkTXtxUukCqTYHwnUgLRGdmNYx2n1sVDnBrMFxVCbbeKxtpDPuzffzzYkb9P23SQW883fU8L7bFA7CLJ1",
  "key8": "241X3bUYDqnnvLdbE55SQ6M4N84AjSZxcZJLwSrhSCLZEXCCZqWvGEBts71e4xKfNr8qtpJvZokkDG9MqpHyGawH",
  "key9": "3xU6cyoQ3v9v8W5kNLrkbvBXRyiiHwghZ4Qpo2rLJXh1UT3vZUHbVDYUPrvGK6phs4YUnKtoj2SDB3MSNjuaizNa",
  "key10": "4BzcteiaRzvFfgZKRv2v96Lcr5aWUf1Uuztk1LXykmwoqNrHkkTUeuMgQMUMXFwJmC3VFv9VRCfGd3skLb9XBnK9",
  "key11": "4eF5XACcutMp7344stD5zNQTpKAbGua7VTR9bVCV1koL66u1E7ZE6hsCgrM4Xf7nsWqXzeuxq2YZ7UCzBPuCwh9H",
  "key12": "MTtfzWc4HSUm9JW7u26Aig4gMqMsGi3X68Q7CfBn32Jpcw6gjWVJbBeeZbcMC9BNYkTzcYxkbnHC8NvGt5rgJry",
  "key13": "4fZFusuVPCcMkFrhD619xrpCA1cjFu7pT3vaNwnVjqt7mrwsATLVDLvHtpsFVVooZ58LGYp25BMk4ryCMPCfRG7E",
  "key14": "5Bv3ASyogQbYUNowwcGa89qeCqtFwfjzPSE3Wr3nnz8WqSY6GAwFZfMF5PK5Kgrhawp1vLvNJGstWRns67VwuYhQ",
  "key15": "2x46cr3wiYwd4tZeXkoKkBMsCaP8anqTyyoJPgvKLxJZezfCUM6CrVtTK7SSnyHApzkfEA1xRBpUnEC1Q3vDUe8C",
  "key16": "5E7UxURbHvLvEPUX3sLonSv4YQucUPd1HM8cCAyyp4c7dfcEoaFK721125W6n43Hfjxc9s2Vo2raZ1wejVcBasNj",
  "key17": "3Z15Wr2fNQqzZynuTTn8aNMAXAmGLJkpME2pmgA1ovaDVa575XXABJwSNu56AAt9cyo5ByoH5Cfe4j6dQmT8Vop7",
  "key18": "2medkqx9MSicDHscH4C8ZKwekwmoy5f4buvPK7EVtXJgukuJr8Fjj7yAQHwKGDr7GvgESoVJSQAXqfX69ynZAhTm",
  "key19": "5sGqENKy7Bsz6kW2wZJKpLjuBPte6E6eMccEJhSyouou5yqk45o5fmCkpom7Dz5vV9Msv8JpAMjQyN2inAPHjSLW",
  "key20": "2Y7QTTM5bVzLUFtmyCGcx5F8o3GLQYWhGuAE33zGGnSpVFEDvBUzPy1UvC8JunhTX6KNTPvcYz9CYz9VMh2Gp1GZ",
  "key21": "34UhcoBoC6iX4U3gSrmNNs8YPZerVwHKcxMYjgyyAnXbyUPh9ARFcqiWVQYpifHN82THgTAxZEgrWujdRKs2qG4D",
  "key22": "a6U4D8uxmBrgcNYUu1cS4cYLSnFChDHVaFcw3WtrnrKvb4h8mkVRcAAnwTHJXVnoujCeoZK4jtXPrVpJviJk4nV",
  "key23": "5EMeBdKQs6WVQJzrJnhL9xqPKopcHPLDEgRv8AiWewk8hTJvwCbg4UGCJWiTcy6Yb3USHia5MyFLLieiV6cDk27S",
  "key24": "GmBXoP7gVKtsk8uZvYeADxRYBxzPXM6v5V3aB5iL1dfbK4qPy46BhWSjSHjLrXqivmmsR1L6ghKEz44NikMc9RC",
  "key25": "3JzTVzV2cm5UvQT9aRjUH6pPAswUW9YeMzjAaVUoYfxXdjYN9DuUXVwV7wUTXsmy17jnggx1xuZBQQq8xkMcoWTH",
  "key26": "3pmGWkvZFTMSp7GeZtH2ZgqEwv2jkCGYXL2bkuptZre5DpXVdWWGb7hNToUQ6Mq48aEVFs1rrxd4kxbHpfDaZBua",
  "key27": "QLuKn1V9egfpjitbRDZ7k2m9x1A427tUogUPDZMj8XDsBgtkctTU7qrwCVpQZtjFms28VAF7kWMuM2LroSq8Uo1",
  "key28": "8GC1AvAdTy9gRCtNZgNbrgdBbQrJp6ZyWmDLprC1LoBzBTxGsrDKcf5KCWhk2QhDzCVsqyzJUFeSrCfNVWPhHd9",
  "key29": "5A9KruEmxETYMejZokiyzT377drfhYzYxvXDXeYeXcMrSVCn7UK2aSQtDdZCAdWs7EcjxvtWce7tm1AqLToSUSrV",
  "key30": "2fXcuPUka7y96YFKjXRNvGXpcbjir93GA4snra58SiwKVTvLvUoPqUH16XWTbHGtjj9y75pvoghK73XSZfTez3o9",
  "key31": "4eTrBbXbEFLmgEoiZM1EBgTkyEirLt1epeN25vcFjr8Hpmtndu3CYtuN7aqjimKAoFaEbfPPcK2fLf2qrN2dxgeA",
  "key32": "3o5MT965UcuTWrTvDHbyRVhvdLAvn7PNaYVz5wkvFxdNrN7oU3CgrASKvoeBZw6JtmdHEyHQV5DYrBpyVXvgNrfC",
  "key33": "3ae3RXc1QELDnu9fWJSWF3VyPghv5XUoRGnBgrdunFUGNEGbZ8zCWpixnUSwqsVCevKSDgj3D2Du4DM4bt5gzwS7",
  "key34": "2UxYatPhdp5jN8dph34CauZdPZKkNha5EY3WwDzTRgUiU1DWwGEuxi1M9d342R9qASJTQDgtPSGsd8Ne1PPsgann",
  "key35": "5R7roC3u16bsv57d8DdxE63K9CdTEM8PFMdzSujQEvcVBt2Kap5Qmdo39ewqD9qVF67iEyovu2pLtbUwQNckMfXL",
  "key36": "3GFzwYiVGQW2E2kMDBsfmucSKmqSc7fnRcWzknk4uhDTR3UszGtSZ92A2ms8CU2ou9DiKC2ef3yCAW7YypV7guYq",
  "key37": "3jnqVdUVn35nSbuGPxMS6ryRFK81NqSDg8PqRBBDCCqWhGCoFJwCEZuU4xYxcEWpBrQ68P8EVoJ7ned2FLwyxFSa",
  "key38": "5rFtzoYkw8tDpdWQD2QKgM13ysyji8jbDwKKz9mY8MK4WVr26z4xZDy1kWYAvsSYRn5K1FqnbrebhGCfvx3xE8NU",
  "key39": "9SJfvDadUvso9KpSdRaCdi8oBneLksCimTdgqg7tUGoTxZhiGe7XpdhUvFmQfpYyUCwErGTYrDiYakLC5tJMzpR",
  "key40": "4JsoVygmt5foNxzyiHFRqdL1VwQLYNcZkikHoCzApT5LoQix6EVjrswfGoSZKW2FfDQEexJfxssbov6rw2z99qi8",
  "key41": "2ikkjb4teXe72asQ5XZ2knLTVuS1je68rpk3uGjgo3i3RJb4GfaWj496rFKZUBMtmeaMreQqGDGWw6QBSnk2P6JW",
  "key42": "kFMhqVYGQzzZtoQL5SBa9xzrUpab84XKeXxSQpHaYkByyn8L1e6GBLpJGRFQXnMTqVfA2ZZU1qJuKgftGsej8qG",
  "key43": "gdUfbTqs9sHLfHv23gezEg2b3h5p6eCJmWZrEvZ2z7WerQfVejVRbHCG4cEQDpU5bjPPcafvcyCBNcH13hcepfW",
  "key44": "3xPSijMaymCTSFoVeyFKya5ncgYSNF9AUzgXuS5ThDCjHfwWv5qfGM9mc44R1CdnF3zxkX843AJ19dWZ7K7Xjpe5",
  "key45": "5E9Y6wSRzZfUYa2FiaXVe6hPhYMfZBuvxwLoikN29j32THyGBnKVhHYriv4mbZCKHPWTWHJA6y6eqoYJFGukhmMY",
  "key46": "5GfuwfCLuasKzhqa5ZKgzEmy4zi8Khds5n2g9cWpfMHNXM1JcRzEjhfymQYebtq4WXHKrJrsjA2bcTtGTkLSH7zv",
  "key47": "22N49b97W4gBuVsfYgCeXuZqpxQp4zisZ3FcktWgtByFiWT6WBYQH6frubvQw5VFPSb1GdX7WVc9z7sFtScXBWoS",
  "key48": "4Y1UBetekyD1khBrWi4m8HM6rRwsZQ46uo3x3RwMYB7xVnkfev5KBatxZ12qc3LAZ3ov1JASs9mZ8cY2ihLkMCGA"
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
