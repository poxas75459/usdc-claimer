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
    "4PGaYp5KX9Vtby5ZqnGN5JLfDKNid7zCnoR7kBoQjboab35i2dZk9GHL2kHLfCNwwJSPvpDr9mzcW3mPuUbrmBCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mrK7QvjD99ZfvUAdZDMYPnqrHnG3UEcmyByNAmACrgg1hJ4otkbqfWcaCmZypw9iE6FfzbmrsUs1wBHqyXWmEsk",
  "key1": "5EAn7JdLzuxJbpK1D6nWXeiJsc7CGbRSVwavXV7a1MYhrPtbLRU9XZoy79YaE28Z2q8HYP4KBADY9ELVmL8jVeEE",
  "key2": "38omkyyXQbdXdfiSStMm8p36FoZoAe9KjpMbEriHEgRDshwvHxG4JpYPCQQ1ytbQj1APaNQx7jLeiF1P9dKyirRQ",
  "key3": "3vwuxWEpUubnu95o58tvCyYPGkR5nQxN34kCiYxWB9buaEYf7inBbfnRNxiXGDnE6VKnwfTmQU62NmkFNxGwarDX",
  "key4": "42FgqGWifyGDa83oRrx9atHAENGZARqHa6sbdFCFoYcnNSX2scRqE89QYJHfSfTw5HqQmuJ47Ab639ntSMZzPQVc",
  "key5": "3LY9Ls7rayF7X1pGRzKRaPVi1vV44UVQDdub29mXYY9heYAveDT5FZUtFYAxj6AFwv7Fr4HULpCqaLAQTBwwRVT1",
  "key6": "4WCEfsCmvJfm6UgoZvucqMxkMZNJtzTtSRoEcpxQARJPDfrASihQBvHvc1Caa1kyT17omqQLgEF1bQAF3bisK2EM",
  "key7": "35qYaNxCeDVZwN6UFASVLGNmCN5STJ3YbhK34gKm3Qs2vhhjQWZuvd8GtTJqPA9XtWHN3FyPzASQ5SwpmfGwhkU2",
  "key8": "3Y6uzs28wzQ4DUwG4hf1rp2ZTAwxBketR4pAZEmuFMyd4XKGAww9LAqpmcG6Nr9JVFKvjb5DaBr7ezBKJCmeDWey",
  "key9": "3hC2RQKEb9BJQc3D1CJhE5NyKH3Zhkcci2PNYg5Qo27tg7srNo5cPywhh3ym5ptD1GEoaJ1KKw2XDXg24m2729x2",
  "key10": "vGDeSHmrXJ6MgjRaPuDKwRRFXRiJT9dAPoukmhfLqUVnJUoSo1C8SrAMRQd3E77pLoheff4qY37YGyAXYS3Js7z",
  "key11": "TNChvVGNYsFEV4ErYt2iG4Yb8FEh4k2ZEMi643tM9d3XWS7GTh3bMcsmTua7F1JjfrMAx2jCtrDxYkYkvKWN8o9",
  "key12": "5o7ey3h1u1VQVnX8vaimMb278e6eBcpULMoVMp5TQVsvqxpRZGc5Y41sQzzFiEEf337gnoFPHvqHwaBnkHjE236f",
  "key13": "5A6SiKnmd26q1Bvidgxo47PXXAbYeZKTFmYMaypzuSYHxVq241787YTkjxezx4CStU8SYRMocYKS9LDJKKAeez1k",
  "key14": "2LWb2sFbh1rfH1UfFo2DJuu8Y8Rze3oDGbqnZDrwpc3GsfMmen9cLbaLGyToeT3x7HadSgbjbujMukrZokWX9rHC",
  "key15": "3eq94DbxEA3dm9idr7UTGMh5arMJaGBfyqKS8hZrpZbTRbw9wsi7GFzMHmuPf2mgHXxrJv66tCJa5gqNPrT48YbL",
  "key16": "3MLkQTYeBS6LWEKrrNLZXQ6ka6fZEo9Yahc65iHJ8vKCAB6whyGBKBTSDB38yij4KnXMEdjPUShvo4rckreKvDTT",
  "key17": "38pk9Rfspz9j7AyeGhQMTibDeDbapbpFxEJiV8GDiC2U5KHLdwngGdvYDed2kdFyRrh5WPDtdnteMaEbM3xoFcY8",
  "key18": "4XdwAYNuhCDZ7sRgPwc8QzgiYCvQ7P4krHVf1ueDr2y1T6EhoNkGoYRmZPmbL5cSWiWUgen6UNDxwtU4Ja5R7GiE",
  "key19": "5aRTDRMLGKLsSbwz3gTpegNDNHghyZfB1vRLnNQ9WG9UpBn7HQ8mocMbSW42BcquprgfivPzNXoj4KXZdYM8ktXf",
  "key20": "5DJqMUHLSPc1abeT3jN6GM6KMKpXr6j4fUwQCNxjghUof9KrsCkMjNW4UtFG1UxG8XpsZ4Xr7GNVF4YBoMTupCqy",
  "key21": "J7c7QZvuSwWoVmo3XMn9u4j47aMA1sFgHVaef1ZeETXgVfuL4sKgUhhb7kZDEBrWq3SaxuzL91vrefHUMP4dyLw",
  "key22": "314y4SiPez9kcuj19KvHBZJqtMhzgcyWsocovpu8T9g9WhW7S4kR4h61Wr5mQbjRitbaHbZRrCo5JTcSWc3VvM6C",
  "key23": "4FmfiT1LZEsqvjqgNTBEQ8YEhRpFQbQwdTzix8pBCkUgfjmRJsCyraWFWMi7MM4bFoGmqgqRmjYoffK77dFcWXZt",
  "key24": "QTJThj1AhFzANUKkGV57V4q37hw1hiij5YJS8iGzZrcBq3eMewKeARMjmNX1wznZwb3KyTfFGQ8zN83dJtKSMvE",
  "key25": "4oipRNr7s5q4xiyhYTyZrXnmVmRcjb6xokZG9ErzXA4eGmfuWkCRepygPcXzBrtBaWDvaMgwJevfTXb97zHkQE9k",
  "key26": "4Mv3Kk6TP1NyjcxdY7Pcxhzo8qHoVG7dqB2nnG3qHk1BdVvU4kL7SfCthyv5x2F3ki9PDjfcb4NVAVXZGS1fQedW",
  "key27": "J3Qgq9Xn1yCwabsozZ3882W8xhHtX5MNVbA9mSt9MJFp8iF6UW9TkJMFiTtP6AxoocZ51ZPrpdfWTiFp78FGzoj",
  "key28": "Lf23M2LNzLe8qVkMEumcJ9B5rJ3rGHt7vzkRwwBpSUDSw4Kn86amSQgbSi5R9mPwrWPKig2GEW2BAno1dVBuihK",
  "key29": "2Hmr57SQSe7o9TKAV1Tr2UbvCCwCeM6YjZF5eQiGUqjKYrnHX5Zc1NYcpi7hRPaLimk5MxC5F2uUTiBQWrHoaFgM",
  "key30": "2eWxdnzA5vmD5bhSiiCBqG8DPPdsGJY6Pb6mEYJMpWaL1X95XXg15xAriaSgA4sYGCXXsKnpV57A7F1nRQNUeivJ"
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
