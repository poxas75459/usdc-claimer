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
    "5ECqPdSDZ4phtbWzYKyZZznMnrLQ6vPnn3MiecUEcKYisaiJhiFSTQtvCeUkTz5B4zf1uTnqMNNY9eVCJFokrM33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27FJLHV5mUENhy35yTpuiwsnDRiSQuJyt6kr9NvvWqyy8Vp3xpSv5PFuc5PmoM7uHLtartLWkMiNKnLxCcoX7zqa",
  "key1": "5g5754nYRRG7MpxE8AUDphDbXkZ72fd69gSz6D3HpZR9iGu8UtCtkLkScUhaJecuYFYooygXBmKSuCkf7yb4g8NP",
  "key2": "3S9qEnx2dhUWPK2cuxuV54p4X9AZA76W1fR62UFEPHTUycDDJCkFRxWaQhLcEMo2YRfHgPjzQcBj4uoEo2w13KDi",
  "key3": "4mgVPrmSrktmu46FAFfnV7M6kiCJtmsQKRDDXvapTfHUaYzD2fP7zWw4kus8mDkVJptrd2B5YLgvt5BFpELNSmLo",
  "key4": "5V8nwkFhpNy5gHmx8VRMxkAbKa6LuHFx71JypntTwWvfTdFBsaaLumezbskwwpoSoDCCcPQb9Y95ay6ATfpXW3FC",
  "key5": "65WHEyFJJhEXg5TnbedSZk6xHfVfVeGdUb8GoLgyn5eqhZViMHL9E9VYnJbEr5JNy1vmn5KdQMNJ6ebZa3oJbrdu",
  "key6": "5XPDUdur5xWsPZH4yKvk77kqhBfMVEmJYSC5cYN7syEtD9Z9t7ZCceXwa6V9YriVTxdbRSRa2czYHt961evLGDPq",
  "key7": "4FuNAXAwLJcUer6rEx8oFRHJiwKfGXwtjEWP675XUrDYJKUAT3hPXS2it8rQSvJWJHQtrQDYR577992uBQzTcjGQ",
  "key8": "5uorizZjcKNwU8KcwXbC1KZ7pioTv4CMk3TMzPp7WK2aCqC7NALcXjaHaQB3apmG7tv4DvUYp9bPnSd5mvNaFYXH",
  "key9": "4BW2dSfDRcWqFg4TXzwN6wyK8jwwbCqu2h33x2iYywZMkHBHLAHDsM82ptdyVojSpAmFcz9nxov8kJWWyFP1fDMu",
  "key10": "3YCGwKUF1jNiTLjd34HWFXq221fMy4QKoTstg1dgupjxNFvkaoFXMaBXVdHeYKTDTRaTn6sWfDmW9DwFNfWFWHy4",
  "key11": "5UNFeY5WdtyVGeEvchH77Pujf1yaq1uwHTZ5Qgby5EUKHun5BWzmvy9uhuSWZNg8bE64jtcNVpi8Bwhvy1SKGbA9",
  "key12": "M463X2JQLzFiSa2YnuCeBivbN9YyCgDbkhH5JZhN1rfMNiqd8mN15QhacfZt6WJ4BwVRCfEP6m9QuvXkhPKuE3N",
  "key13": "mBvySPNeJTKc9h1Hdx4FgF7Wm8FAK9VDR15WpubpC2gFPfFrCffJjBeU2zuDH8hf8uCLkBBHxQUmenqhd8ymhsZ",
  "key14": "2iRZ41uXShNWB7i732SBi8SxKhAhafPMfSvKiuEAKQjqda4fAkXT5aGivAEWinC8SDDBh4CXV8hVuzthHSwhvg6j",
  "key15": "5NRBeQ78x4pycfeivd4kpUYV6RYJ1iDrk1zhKC5nabk7ustPrxHMVXcSnLse8mmeQ3enPXwcCQ9qyuwWGeqcGBMF",
  "key16": "5tdYSkz3K8WqT11kVEh9R63MzoLvPAp91CrCQnLA9RChK4fWCmZFDGVJ6dKko3gDHzWKpz1bVN8jWCPyNMoCNQZJ",
  "key17": "2gTVPAyU76As25c9EJvtEn7vT3hAhgCvjwkXks924jVpkVZumaWdAmFvCn5GJ3dcrA5cmC57jo1r5J9ge3Fpzby",
  "key18": "47SaHumyEprzhKByW6ZSz6kigNNwaTSyaghx2Ny4To1Z8M87dFSnFBFUaQ2s985P5J5SxR3UiNdHUZeK1iLVuB7n",
  "key19": "5NFUDEo5XpL26Kj5jP5zB7EY9JyFah1UepdGVsmK9HwsRXr65xk1FLreV6eZt8njpq3rpyp2efXWiJsP7QyGAziF",
  "key20": "3ShxeFecHyC1NvWyGqyFLBpQGYNRM7vJ9cJxQkQ2tT6P7ZXorVehjJStLiN828LhEUMJorb2JPTxeuFRcPxKkcG3",
  "key21": "L6aTvHVHuC6snJzbeFKzMH7SBaUoJsm1zPxbV4YzuVh2BRb28cnJaZQvwL9wEDd2xUjQKRR6YKtmJzoMaSjKxyM",
  "key22": "29ZgnotBwQESaPGb7y4TV8joe9S1qk8N6hjKWz52HBSZW7gCyCH7snsW6UG83hg4ugKNRcFgP3Y7KM917Vhaopy9",
  "key23": "4S1KVjJGoMyGYhRn4Qoq1JZhUpvCPsRuuMCsvb4DQEbCZhus8mjrpFPDrrA1dgyDrfJK5tCr9pY9J1GWiqeEvuFv",
  "key24": "3eewnFcYVGcZGyWBhFZByWERpgutWUhd8WpoQP1J1jmRN1MkGiBQHEMSoT5xJtsmhjZnKucyShVnLqbp3GMLQ1oY",
  "key25": "5BQcd7e9V65KPnBDqMqDMvdrN4CBpgrUjaA16EgPBkuecRVD9wwW29MUVhKRUBhxaYCaqTHaBEnSydvxy77oohGg"
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
