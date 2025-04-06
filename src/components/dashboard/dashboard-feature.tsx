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
    "4gu4YCKpenr345xMmCAXzx9XewK2yrFkWFJrxqXQKh392AV7mFw7EZ8MmfDJt8g1bPCqxSsZNHdkvD64zy2fkA7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DxmSfXK9XhuRt9ZegvjMVt3eMCwGYpPMCaji9cYtrSvUoM5ocfr2nh2mhLB1DW1nhcLdwMtcxk8ijfJRPC5Y9Fv",
  "key1": "3NreoctY6SxmcYquLx1dbAXweysrgdDBxA19M2u5fvA5a8EP8kWDKq1Ait258ajxe87uqsG1PNXVz9NiZFVmQrxD",
  "key2": "31o3Xu7rfYFjcfbrhMsoodtpZ1BXUBvSvZw67FvZyLrbrTF7qQmLsQpQc8fLBmGDSMkJmBEhuWgRiu8jgFXrnuSY",
  "key3": "3pSZfSBLjd5afA3csAMMywuzztDYSjD85nQLk4iyaL3MJJKHGqKzojD24JcoNz7x9Y2mNNrTTrLQ7QN2k11grUSb",
  "key4": "3ARZfcpWSfzhdVjPJjXtoMAVEURLvpCFy444Npg6447BcLrPdrhZ3g9i6xv1NBdAzR7B2LwafAGe1fZMipf6kQv3",
  "key5": "ssSdEouwtcME8uDoP6LzvmF4WF8d5fGQHUmsbU9XSPaMdhh9KXwevDjE3UEHFJo9hgj51ZEGvjtdatQzu5YnRRH",
  "key6": "zATRELJQKvW1pNe6zJCsKfyiN8JsRcHbv9k59HRigJU4zCRcJ9Fg5rX8cyD3iAagnX9n2FxYGoKqXtJuWUNdHJo",
  "key7": "65ZtL72WmQHA8t4Fi633nezEbAggdcCpYyZ6DLVUt4N7cYrUroqUGqtpHb4jQEWRz4WJnNWPJXwgVh6VzHXzZgPN",
  "key8": "5Pi4Utcdo7zp9pKorjn2k2Nk61uDrPdY9is4weDzeMVMvEjchuaQUFsSYnm2cfdJY4aJk2mRRNtqPd5idWSNJFDK",
  "key9": "2uaMLvChaTsZBziEWk1f5nAxJYUpfxG5gbh61Kcoz9LyXREZGjAMZ7UM5uCaBKVTzJn26gw8EkXxx3PNmh9cofT",
  "key10": "3k25huy14ra5VD3ZSjwuXduJYJA7gky76YyMT3pxef8unWxXUuTQfUb1Qzgk4yvFRu5mPKDctfyk4iZPYTjmCV3v",
  "key11": "62SZ5k5nYxsjtFLWuawt8x3KfoJCSbMGwLzx4SE6D5rKbQnEmURiu8ZGekZUM1RE4TLNM3UyBoZTvpHYQwVzKDiy",
  "key12": "wSDSFDqwtZgG7yT2P1iXg4GmaWAhbfQoX2EqrnuaN1pBL43taQp6taVavbF3odwnDPBx467FqsWFgv2Y1qKiYDr",
  "key13": "6ew8SjbcoAbQ2dUYm1696LNAUHxQKntX2dQ3tXru8NFocUqLjXJu7qFHwMGNcKQvTAFZs7LSMhAKRaoHSwKZwGM",
  "key14": "27s991VUdMPwvhGCvTLeVQjSnVq1Pz29uTFcXAXSGZ5jqgGeUtNRTv4bXPjCVAsnDpKABbkQYjHM9LUrFmZ5hA5p",
  "key15": "5P6nut8h1yVYo5c4XN8fhxbGpnWnjhFv8h5mUzTGwdN9Asz1xAYKji6KXghtorveC1spv9PQHnWHZzvn9dCfXrsP",
  "key16": "4rciLtyDn6thWS9QXSC6EfSSdF3zrMFDXT1AVHXGzJuRDF27zLttcQp1o9c1XmWTk2e8VBaS2xqNSjoBkdGskP1o",
  "key17": "67J2a7Fb7mr9FvpAi4LmoZa24VtEe6zRtcFid2AyznEGLn9gjen1JWstKs5o6sz16gcyzVbEnukw275BwKiVdKTE",
  "key18": "65VA8wDFX97TABd6GU8yjbHBniBp3PQtDarcaV9bfPkAJFaFjHVMaakWpoauP3qoo34wP5g5RRuoydD5c9mcXi5p",
  "key19": "31zTwBPDuZxBsn5E4eo2FxBKjNz83RYCJfj1NVvso81gpUmvREbrRdR8uGs9cdCmbpCpQUwHrWoB5qyYCeo9D2bd",
  "key20": "3ofNV43zvELgpQfB2wM7JgdomkGXsv8B2tJYGZexFBytv9PMABiFwmqqQyXHrmJQyHyBrmPUwLSdbJjMvWWAdctE",
  "key21": "3yEFAJBCifqrf9RHApoupBvwKqF5ZYCQhmV1heh7f38HFSe7v9k38qcvp3RxTde37J2QhGrCS4rdXicyJugGcUKr",
  "key22": "4zDY3PLTaTVKrhHYXVa56bEeoqR8QWhwiqZ3Jv6JTVNVzmK7FfXWvD1pkdkoiWp1BHPtKYpXgDPS6BJVG6pRABjG",
  "key23": "4WeWHpu3xUVEXo4iLNQCaXZsEmvSvKpCwdAZbr53Tpe1zTtUGzMXbKj5wT3G3PKiJTuje1j7GKyFEWu27V3zy2Q3",
  "key24": "SLP3DfMT1oxpcqiimQyGhfoAgitELBqFVXaK9w9nHW7v3bnibQLaC7v5mQndnKjQH9dwwtxukZ2jsm9woVDTx6B",
  "key25": "5sHkDYEdq4V73QLdmM48U1p7bS1z4ZzeQijEqbTcXTCWSM2dZ23XepCt124odHwuQ1hAoMM8TRdqfHPkCB7yNnh4",
  "key26": "3aYRVqyfgumMiamCwif1xDuQoLKw5Ktd4JHx978wYu5tPqEcH1boiFL5k7FKpwJbK7sRV15EVsS1SEwgsfHi7WzJ",
  "key27": "2KTywz5b9vdKm6EdRU3ZxWkZaqxBfF4C5EjfHbjNU4Dktgbf5RvfgLuRiins9654R9WG4Rcr7qBjkCyZXf9wfGLC",
  "key28": "bvUNzafFbZZBE9BPMJPvWBg85EmG4vrmpAmEEDXHH5U6qzq8J16DZhjDDKoppvVXNDj5auFmJkvZddpKD2q9G3R",
  "key29": "2MgFGUM7N3rvj7tadfD94HR8wTjzZpbj2Mnj8RV9kBTyjNbvYCRSeRzbSqGS1r3smSuJDVqk6oKGoqTQzqPMGfHA",
  "key30": "4F6cGwQT4nC1MA2eLknaTuQ81d9vMtfpX5W68umvEuydnDQ1CHptMPreftpxZ4KqGPSp9V8TrDkmZmcw128R2f7U",
  "key31": "59LoPMeCcabgpAvuvMTia5fyYYGHpwygaaVt2ovRgXww8RnmRWaFdWTCwsRYs9qLkJAzgjMFtLrc3n8kAsLUZNZd",
  "key32": "4PU47dE1g63rX44WamgXJB6FhU4QzJ83LmSmKM3dEGGdWB1ArUc4K6BoUrcaZNXi7nNT2TFhHnhETgAbLFrUVdCD",
  "key33": "41v4yz8krtEPxPLEx7qyuKdqKhSaoJnnUoX99MTgSJChdvDQPEhob2TrZUmtvcSN7UFRNhaZN5GowuAxbDaEvJqc",
  "key34": "3gjdqRBwQikdxrnySn7i8qHjoyTtWhU1oU5RnMZVjghBkZterp5xhJGxTBrpKnva1saobm9413L5RyGHax6Qya2n",
  "key35": "61c5qwUELundP3REKJF6fAXXy5exrzh7wgVyLLWq59JQK8UjN6gKUKVE5aaEvLnt7Vgpkpr7T3d5WMzUU4raTuCM",
  "key36": "379dU8kahdYch4DroFEJrj4L3vDQzthSkr7C79hSWWynT2jA4LBx3JD1jym4tAqUhMYPzr8uv4vuw45WvSsruAd9",
  "key37": "4Y9jMtvzrxDvxAE7c9kcNZiQQc4E9J9HPw8XNYWh9sUExBLZw1iafjBGe2e9f8jRdQkrJJyXCyHFYo2MMG2k6Fb8"
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
