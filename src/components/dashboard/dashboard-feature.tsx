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
    "2FxCw4MDAnExM14Mj8kiNVtLbqjQMbHePPykhgVAZ6oHSY15K6CqYLyp8rtKZma2AS4au1z7qqyZA4NiqrpCTopr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "astuz64dtpuKLTx5uxEReRLbPJrYxfBivxF6SEpDxVqgrH7kwKxg6grLNJj6BsTgbM7o32z32aUjb2sLLD9pjfL",
  "key1": "G9VErWH4JkdqAPv2hh3niD53bnSQLyDyvDmdamW8pVZsXdrGELNj7zWE9G1kuamaR4Bn9dPHXHmEWxEMz3DKegx",
  "key2": "AvzL37F9PMWqVpv2oNE3RtrWWDnkX5Cs5WwpTUcozqYDzwFe8kvnovaLwqiJcSyT7FcykgWk9zxTmR54cCLwwPs",
  "key3": "4H5HidMRhK4NFT9oFpPKUHTPfWwN1Q7T6JtAxkJ6rAc2ZD78jqZ8Y2ezvoCBPnxv9nkSuUo5tCbKvGw2hrPGZSJF",
  "key4": "2iLbkcF6jfbhaad3ZZCGKqxHTkx6jn1eQVk8YN4hCLP5fAcAshrQXTAR1MmNZi5byW71djLaiPQw1iYJtX9eNkoV",
  "key5": "4RZ1bLrugCfdrdqU5hJ7MXqUY2J6jrFYiDVeonniZB9m9YYViDBoquxDtevqH9ZpTQNLkycTFGDzmP2Y9bSwYbvX",
  "key6": "3MMvHvSPRAygACRCRHi9bnTNCcRdoY3u5MsDv9rf9E274bvZXWtjjyrYu5LBByv6ETQxpJfg8gBRmSyE775GP6yG",
  "key7": "4mzoX5tpWdYrZiGDSAFYV1NuGiXw325jB1rFb3dYfD1kLF8NDQ52B7KH3dDpXTZvFWL7JyYLHGQAXw4tGWHoeSQ4",
  "key8": "2HQvTGXfr9jtwQ9mRgBP43rC329MPYxRwD6BNh2kRaoGXgmY17AkEm9uCAukSjCY2hFwyQ4xW7Ymr7SAKyy7Sycu",
  "key9": "2SpSPjs3hAMTYppXWjejN47ttxXpqap5xRvxswvrvTEkZUiYGnSKXJd41DvhsTDueTdffq3SkPnHpVm6WBKw7dmD",
  "key10": "3VoHcGmt8NHJCaM1aN19USZgpReLsDqykyJDXadvCuhPKaiCD55ZVqBqWYkGZJ7zysrpN4Anoar6gvE7iQ3kk7fs",
  "key11": "2twuqdRJ4G1A4Gts33Qs9xTwQxXs7S4XYecMpKdrDWgSWoVw68ojSVry38w8egnWk8Zd8aNCxVmKzc7EotkTggrM",
  "key12": "2VPABTBtCjLfoiWoSVsgMbNMhdrf7xmYo2FAd51AS2xh3xSEHahBWv8X2uuJPJ5bPCG537BQ8DkDoi8S3ScCj54J",
  "key13": "4au7CGPaDaK8AbzqMi9oRDyDeTuT73ctj6To7b929iV2FE7KwJXDkLnRUyn5nrWokHqqF1kiPBfmYkrxprVzfHRm",
  "key14": "2h3C9LNVVnTY2xzGzdFu3WuFSgs42QVBJhkaFYvJWZctVjQxXuAefKYyuM7gFY9GvtF2XJfoikUirrdLFBmPGxHu",
  "key15": "5mzPiUsgQnu7phq3z65uTaWgbUiBdyhmPQD6WypTPPAsNXTdrQrbc2wZnSLq2NmMpCJDtY1gbEXUhnd4h2QsP6ao",
  "key16": "UmgJ5uBWh2dC9QjVmDETBeEzY5Zfd5iJ1J1f77wj835Pn1VuK6kG5jiW5Wme7KBG7X6C4xP6hsvzTQdVvJCvTnj",
  "key17": "5s7ewtM392QcoV7SDH1u3iqtV5GtBN7wLmAccRMDZ556LWFH1CeKuJkYMc6h2eEaNQLfXf8cja9ijgKQ9akVCp4w",
  "key18": "5wqVjdAWDYuNK4m3fdq1fer1BLFbbhPtTwb2C3Lu4oNmUNnQ4ZhLUiaAjug3rBFD9a7EU1GpYZqa77g3f77RzDhU",
  "key19": "2FPuhd3FWZqRKwZHbh2v8ZikeG4wW2Ah6gGmwNzptEnoDQJT1skwGaSzLNi4jVCDtH5iizcMfjzEs4iGYKGv56fe",
  "key20": "3ZeyP4yKSjm2nZU7zZA94JtMnUvFmeeoMJMf1YTbRGEd6Uh1WZJSe55nRSib58zfXtTRAJUdaVcTPDX4BNuTQJsK",
  "key21": "31cay2B3q2PCWuGcgBaoSSau6Myk4eKuPapkAZmoqcRJQS4ieHTy4HPNoYsapC39BPPBNmgCVm9MmkQQxdngKuhm",
  "key22": "nvKmAYwKKAgfuq3hhCwYYN5WJPJF5KvbnZ5Ce8wEr4nJN44Z9xJnEKp9q5HsTQXDTEwKE8XwxB6qRxhSKiSVdJc",
  "key23": "5WBUiXvzoiXZizznhBiuTbwoWPRt1Qy15qGT21NqGuMY6YD8br2vV2sHdFPzrcu3oPLPMxJ5yx9GcLgY2o2989JU",
  "key24": "2H5e8A7LiM4GTpn9nbceaqaSLNJCADaYJgV1R4swGeZzVMMQRrqTEdMfttyb9E1fnHGiuxtmxmM9DNfo5LcncSJy",
  "key25": "2Atv3VF4mku9khkYor1um9Tif4pb5fW7vN5hcrKpxJWU7tvx53rg1yVoLZ2SmuCTuq9ZRedH845HBha9UcgATjTf",
  "key26": "58uo1VpL3mD11837r4sdmsVgSRmwxZibUyeXQrqALrNWYZPuQpg4jMfKHpoZCxrQXXDyMcgHRPKfZXvfw2H5GBKU",
  "key27": "3rYF9zUca4otjJXvWWqF936G99pbwRcGKQUTQHtPdEKtaGrtnCwrRBwBpybbcXbUoxySgLPHPSZTGRQpUneh9V3N",
  "key28": "5fpz7RsDgX4XYRKWE1woTQt8oW7akikVrM8HQzRJVQSXfmMkjZNPw6dRYw5NwvFZM5fhWB2C7akDRfj6Cu9CNH1T",
  "key29": "39rTf7Q7nQtifQqF2qVebtrsRweXmTKfgSutgnwF9G1EGhNGfNQwkvqfHzwfuN9NXqHuhhFSBBvppcv1ECb9F2BV",
  "key30": "28ofX2Df9WaeibTgYnTFkd8AyJPPpmihwh4yibRxbPFrdYrXUrzQuoZuH7nK2RNpdGDDTCZV3giBC1eYfW2MK3LV"
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
