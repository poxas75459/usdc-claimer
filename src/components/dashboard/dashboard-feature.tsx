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
    "2R8MeEJV4vXD72gqedvavEC1hnRfAY14iAbTu4dWj5iQsRFYhwt3zBaikgxkjUkzgjGYi7NRa2Gg7SvkowFZbssV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aWPC6WPehFuPwy5EuengAwWNQjQnajXUEDQJ2cgeQDFsGuT1km9R7yj5oZKb4mdpc7iLEL8sDMVi5Cp47hdFVzj",
  "key1": "3HMb7pDzxDuugrL2ESQwSnoNC5gaUMih3gUJ1eQaNEVhou1avGesxm4ufnhky4GLATnp9iQiyxPsUokqJVpJ4zqM",
  "key2": "3ZZzJcNP5C7KqQb8YEXpv6f1tEDs4dnapZsfGwKZpZ7hvS7MxqcmHUJZJwSAKuhghEPFjUXrGHd2tZroRTW5Kg8Q",
  "key3": "gTKM7V8UHg5MGx3PvEzmLfm4GUmNfhBKoM9VHxCy4dVVS7pQKpUza1mWoWivFJKqsiBrBv9tvy76GK7R65ctBpi",
  "key4": "3XT3yMLdB4ea8f2pWZwE4gqPPYa68RCG7zUYCVWQjBVEDz8FvCqdsaWYsLj8LFby9vLs6a2gGptTJJ8oX5AM4v22",
  "key5": "5gU2pG7pAyJKRHguAAiCJJrnMH4o7xBmJeQX3LdsEYGJemwYak5Xjgnkhu2nTwcH2RAC45qpwwGHredkBvqabFzR",
  "key6": "5x2pBRNqe2BsEvp5w6XB8m2hSEPGR3gsK8hT1FNT75mKuyyxVEs6FAwU2PALeQxyj3czKcS2TZCpz3pWTkABhrnV",
  "key7": "3AjLaA4nmtoNRYQjCkdnHoVpZQwbcDVZhMxdUxfjccSPZawwce3yT9MNqvnA7cCQwAL96ptbb5t696Fj26ePWRpk",
  "key8": "2ePHEDig7cxPTEGTgqmkngS3u2AszRbQ2y8VWHEZADQ3NRsNSsKMvPAxq4r9bLiDodj5PtXyZR9Aa1yjhd8yxWdc",
  "key9": "28NDa2Cp3afYuVqaeQoobMs1zLcP15dqhnSAGWWwBudH6zmgCQ4TXsTTKT2SHcFcXJJpJmGWNNqe7NFxKdum1SRv",
  "key10": "3nhVCujbUQaSyUrCv3gVatLNdNVrjHV2UFFLxYEeTGA426T6LpEcveY4nfhepi1pZvKzG7qSyiHZe5Q358WNG1Qt",
  "key11": "254kYMDfBSLUT6GfkECiXH1zPAXFqpLcEFF4TydZ6uMejoTwQdEPHHRHSjbvUF6QJjdZWVNgNGzpF1N9rriygFc6",
  "key12": "2sbQ4mkq97NFidmURnsrkounNuvrpvG5nv4haX6w3b16hqaa1Vk1Zr4ZQ79m4XPr89iYiGLUBZoqF9WZgPQsrub5",
  "key13": "pc4nwpJJmg6fCYyoaQnj1Ls5ghorY3zFodmXGazapAL9yeiYyqZTxpNsCShNRzdJCNfrE9TBAyJ2HJHErsGrs9U",
  "key14": "Mj8v5tEmv5SWkfAmejDFLG75V1qtiqDJmshcb7k1ZkDDwkMVZ3V4c49r83xL74eS4K5gbDhtii4vFgcNDudrxVw",
  "key15": "34gCQ2YJWvdM1ajx2oNdcfRePj2HF6Eibaov4ciVQxgsTuJKEhmDwThnh2qYu2GJpXAi6tN4DExLGisWkKoE8kzk",
  "key16": "27uxmrjLYLXjsMmrr5npuNKro8ejHUqmYSpHJ9Lb8dXuuxJ9aRpcy19bzi9jehPjzipqwo5TBi4rYTZFXxqDRHPP",
  "key17": "5ebmWYBBwFJ3ye4NQBaDXxPj8naHFL6v5Pjs65k61Z1HkmimhPJ5vRFX8EJJhyRrLcAY9ytHD71DDc891ERQ7w4u",
  "key18": "61SQ4H3NbaZY77djkq8j6etqiah76wR29JycYnQcakyKSN8KZFeQ8n6hY1C2T3opSCiLiWrCcfu3tVjVoYpbB74N",
  "key19": "gZ9xaaohBmj9WUXm1cvCZxZFFp7vt88ugwrFenykG2VV5VqqjBGTtvDyo7atCLUaS1ycbi8toDVXBBBhmUaEQvJ",
  "key20": "2oqsjMDB9exsYscafMpquUj7WAM2dH82gEUKTQPG4FThhukWq2PKQNMFcyGWQ3Z2rsJ2f7FP1QMY2rDM84v96Rh5",
  "key21": "2CE9TCYA6d1v8QnVZuaTajjH4Aaoto4KkgtuzYKoQfzBeqBSa3nKjpy6PnugcFUNUS2Zhc7vE5wqXFESSrVioxUv",
  "key22": "ptSM7B9GZenzM7SmktEFb6BJEtSjjVPiCKUcpiRUNiWSB1mCQFzCStFJYmiVoUkgXbkyfR7MyZp5vCsSDRirGWd",
  "key23": "4Fwfd4zC5hcZvn2DoTmzqZ3osbfvSDMBkYX6S1pm2DvqhU7zPd7wwQKfyvAkfxQVVgNXzDicJFx9xJzQKRMscVxv",
  "key24": "3q4VKbNwTAWZXyt2zj1mmqKj8krL81BnyHUawuWFHnpyDTow1PJ4EZdVsdTpAddqTLntuLccvogwHdqnPWPVmKZD",
  "key25": "WQiBNzvnmhZAptjL7QtxKzKMc7UExr5b4oUFPN1EZBWhhz8GxrJyvqvXUkeESRngvErUBrVTKZEqECwy75vcXxU",
  "key26": "5xjfEkEV6jQHoz5abuhjkr1U5euqWW1nixua2eEhRQp6jdxXymZdrkWbUipfPtrdQcy6k4MAGFDmiL29tg2k68Xq",
  "key27": "3iRGrpobWxwDgaUuhJcj4uG6bwzuWicWUQqXrubGXDUFxQ8PbUAXHA6nmAuQBvdoj3G8e1UiypgxoxtMhstPJaUB"
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
