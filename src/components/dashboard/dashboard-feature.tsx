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
    "4BgCocV6EMka6TW2cwz7hQ5rDirfkJnrHroaz3JJ1mfMKot4yDNPPWNzuzufnU69Zd6SwVAGbWPrN97uP9v7PeWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r9LeLzx1vzsinejfLCYgHJRVkQATyQdT4BnXgxxeLZDDbopKskPn134JYTmD8128z6PxRU7nWhWrW1A1vhPVbJt",
  "key1": "2e2kHB1q4hJciLc3mwQ4B2vVqt5PXve4u5uTk6yLYdGKJ8RAPBhzFKdF8ATk1rV3RqHRuzUExh6MwJRYVLkPBhso",
  "key2": "3pNB8dteXqEbveZNZC8xWnKaBFzDf3ARg2KnyAebggfmHaU2mdZY2AWyJT4V9dCevHyqhg1PJAyUTMtdFPcxHKxa",
  "key3": "45Gdgssyy19m5V7Xm6F1e7UPRYLajpRfZ7cYXd3p2dHrQAhMPEifknbJ56fyrt1dDZRoeqxhiUcuiG1CbMyniRa6",
  "key4": "2McQkT9tmTPFmLnkQET32RwBhdSHszdNCFooiS4k3BNckPe9aMH9DQQHiVPkyW2yNJtMsGWGiHDLceAyv9JR5ktk",
  "key5": "LCcWiBJ1wuxourik2oe59Go5ZcG9vNHk43qXTPtJ5bgCYBSLNpQ5MhjqztnVQN2Wd996eJPiTZbo3Z7SJQDJSFD",
  "key6": "63FVRJqKnDQEdcXpvt9sPfHC4G7TxSkwwE9eyDt5c444vbUhfiyHBLZdwJiyNu7horPDUsahgStLmbiy4f3hFFQP",
  "key7": "25c3EpV4wermq6BLrYXMyuHw9djbrYcmNsLsnkk1gEJe4TxeKL8YRCE6uskRZMwU3HK2QNCD6dAtaqQKqwv7LWHK",
  "key8": "2FUpDBNLkkEzM4kWn4QYd3jgSh78X7JkYLRz2PENmsYsZMWnF1yL5wir15UPfrx6akW9zebArjqWEQo7SHpeYv6E",
  "key9": "5SbF1Y7N5NVUcrAkWdsZvLrJpEDswZa4B53diEPrgSPxiMM9rRCPH2BpyVtK9DMXzV725yrSnQQCM3FKHGM1EkZm",
  "key10": "2P5mArdYVHMoEfVpobxpFzPE4cW9h1Q6fnUtWyoqnTvMSfu1sNcvHQp1KjY3SKbV9ji3Z24uGD1bYjUNFPJkQr9U",
  "key11": "2yQ3ehcHpHFCLMPLuDMue9LR542typkqjmZrt6GoxERboP29WaWWs3dH4r5dXJEh2n2KJudaeWvPvwVJSjwbY6u2",
  "key12": "2YV9avFmAyMUgrUbHMyxzNCLHbdy1u5PEUCf5nJGh5uuAFZfsqKguAd4MvTcJXeNy93D1PDFZavxre18xZsqQV27",
  "key13": "3YJG8xBgEDTCpAm1866nzmZGQGqeKNAvsDRSsAccPUtD4BJqJ7HFFGjpNPTHSrmjC64CL7CwWHihhP7kn3ztWAD8",
  "key14": "2Nng9DXvnGCPJDt7RHN4s8S1x61qaYBAjKi5qbS5qK4fN8LeNshFm4826yrzwBSPee1e2HwTfZEBZTKspUPiLQMZ",
  "key15": "5XcNF9yfhpcUbKT6R3oGm7z2xTiYiccCWV7jrcyJRdT1QvbKU86MrtQrHuNg6FvYQ41EbybDX5ozZVXTDg8of5A3",
  "key16": "63ChEXToyTzLjJXsK7XM5pTsgigkvc5P6zs5naKjmXakWE5ZK1UVc94J6iX2qm5ei1CjnAgJDsqYkik8vCmgGWVN",
  "key17": "4hAgvTeVeBfa79PtGDdyYmujtApEJc5k3zsWXuHmcYFG1x5AvkcPj5BCZsio263od8XZHrycKUTvxDq9qP6fZWMz",
  "key18": "5dEXgUjZg2i9knbuNVKBQqUJPWaFPzeXwGKqoEuvUkN8ZS1YmN9agGQFmAe6Wg6KDbDZgKumPXkDUwDEj8YUZtj5",
  "key19": "2niwfu47LwBo2zhFwCFWzAcNYknT6k2Z6ejfwxGpDaavcJg5GeUrFkmit3rqUbZTduU62VX7R2gke3dLtvgX8kQ7",
  "key20": "3jn4HzUb97B6mRasCnpjUaV7d4vxf4j1RCje4VHMjYH2KK9MyGkrxxgdVXCAN2aLUoDuz6HRzLewGHP2fFoLHJUe",
  "key21": "5Qy6idKeAXewihZKAa1PgZkb7htngxNvhuibeb9vo94sjurpafCSnPQ3ir88QDfXREqknHhtwRnrKkJsnr1DtukH",
  "key22": "JPomMRGvieVBcKcPDQvZ7xezoiYndxgZ3Fiid4owRLKfvD1tymGwY4vziQ1HBhvWGGZR4dWEVQzWUQgRPJtwmSf",
  "key23": "2nKt3sB97BErmVD4JwLDGotDwTLZnC6qRtiVknxsYwmA1tBg1pSrTwsAdDBGMyb3sENRLuLXXMiMUB7BvheBfZg2",
  "key24": "5JdzAXVXEvCDeHcLUvCevu5ZDiZqCxenH7o4U5DP5EqWvEuYpmkcBFsiYZzp9bhfxbC7zBmjyCtwY4E5gjuo5tYG",
  "key25": "2oy4YgQnwpP5nsDZoa2ZBP8j5bPwvTTtzKpyEfjJoovmKPuNzwaMk5QUG74nBT9kVCRrniD6QdLyAvFFRTuSm5UB",
  "key26": "3xx83QJ4dzY5CheJTTHcRQf5yJAmowRArxJYjbiNBwTHcDEkrn6yySpi6gqvfFz6S5DvEvQwCtn71NwZA9XNbbrf",
  "key27": "4HRNEkbNrYq1dg9QdwbHBg49UDkTswTZTYjqyDTxHjfaeVHV27pzKKKCgQynHCjpUdpw3fKm6TrqvWSaHWwiPJUX",
  "key28": "49HReKvrqxS38S8GNdJGZzJqaG5bkZEPpkfmUQmuDfUeFG1K9pf9yn7zWQ3kRrKZK59tu6HC5sQsKYYkbFFu51g",
  "key29": "5KPNr4fwcaZVdHfLswn8g23ab8Suebz6ugD49qX8H5Bo6Li4Q6KNXiqCcSiHPHvqzw9CAn2xhu1oZpfNkLChtjQf"
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
