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
    "4t1sxMpMGExNEDcYxQAC4rc8zATPSnZP7eRLHnsrYUoDaDMwzs4sduxAKCeYeGn8139ngYnfWoEs537V1mJkHB6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63RpKDQdQAwpZDq43nDyib8xikyqx9e23ukrUPQiQnr5sKDxJnGQKjw6AWH8ETp2vqjWP72SDMY2B42N9ohh5wv2",
  "key1": "5PLcqBtz5FSxwdvCa4SAjDc4uNhpbdYF7rhokYP1No2S6HR763fC14zN8SxhgkwME8jYU42CNgqLwQjsDxEwVBie",
  "key2": "2z2Ur3kjBBxeGBEqd5y3cMdm5KdfTpxcT1PvV6nAuc6qYLT937g7uH9pKRnstYMd2fn2VeK8bqb7JxiwdzPAYnQg",
  "key3": "4M1PfBvDwwwmgBKLm77AxA7qrjesj4GKXXYjUk1DgNm2cLr6VVPKjUYbX9ucJomBrgZR52Eg5pqeFVMUBYtAvTu2",
  "key4": "3XyAWqr3N3z9ooeXi4u7UXCDoW7juKP2pVZB5G5MaBJHTd3vMo9ocHng1j1TppYwQnXsbccmomcCwUcRs8zW11ez",
  "key5": "2t3jbKsnwoebhdPkeic9t1yrVLcPfABYwBDdCs6AWStA6RRjeApyD44RNT3rcW62wudRVMnMxKK1NkfGJ3Yo6zAA",
  "key6": "B16hXMAERe4bAQtTDPtjwHJiKfNyXX4pYwNopbsy2ynsWnc15BvfCiyA4aNnFkfwgR292n84wSWMk1GsvgS3qM9",
  "key7": "2okzuzEPFkznHzQrfq4WzmU2c7soJg7yJWzq3mywrsbdcwaCLfBWa8Fhx6CuxcUi9pesm4Rj7MkYbsDazhusfXnP",
  "key8": "2vLqaJgCNbcbK6bX9ZP6yYr1jVV2qd81uTqtmEWRLQcU9hPyDyxvEZzvi24tT1zaY3sSqo29m9ziSAvqY7JpU7i8",
  "key9": "4WbyjJF2oj2NbhqCGQn728NS4vBSCRo9ffqiBhLLqZ2G1KhfHMixUMM7qjJoom9jUDjDvjpcPXDZiHTDvonm4Ypr",
  "key10": "5dHg47fSz1ELcPbro7EXvzRMnRhsfZSQf41XdVvDbzLfFAnmdjRZajxJb8FGmU9gVeuR5mCeD7BjQqAySG1KhN3p",
  "key11": "4oWtcDJdSnZqWQFazRB2gjsACS1JiUb6xDggEhnCEEkXzp6o5FDvAp8fdcBNyYsKru3sxRqthW1gzV9MM2XzQQbw",
  "key12": "2vaenDxbbKzhNtYXBYV7zvNdyqUdjDdNztnC5XAmeX1F2V6xNKY8VUSHmuAu2xaVG3sHxHrjoS7u6xnbYxWKhHP",
  "key13": "4HbNi8EYzm6smUUNyBAyZX9uqWaBA2Ks1TFfvNYLufYeijPzLNh7ZUGb9VCqpxsJr1AKryC1UPDX6y2Mg7EwmRFo",
  "key14": "56gfc6pWUT5yQaBU4qWYdDuLoXWjusdNdcZ3v7rMpmcbRZC7ymdqv4Zv57gDHbrpxaqgfVr3Bwbf7VRCyHFBH6TE",
  "key15": "5X7wvEsJdj5Hv1aYtzr854ozHmps39BGqXAGJqh4TAkhfbFJwyikyAzJDP3xika8b4HJwKfGBM9QdjBpicVxC51L",
  "key16": "5KxRkXvK3XuBbGDkrJSc2qVdTg58jgxcb9oaHeE1SB8diV2WSxZiERcHctQb4ZtkYmGdWTaPksEDkbt35sqmgXhx",
  "key17": "5GZBZ7y6vFzRMmaf2WYjgy3cAKdhx8mfiMESdyokSEj26jomT1S8uaJyBTQ4SAvPvHYp4fUAFh141zuZEMgMtG8W",
  "key18": "2CkR83pBMpbpVoH5tuF9VVZ1YrxJ5cr8Bd6aAbrcEpQNMArZ3LynbfFNS5Pc7QY9NW3mBiQvVD9no8NXznN1XEUX",
  "key19": "RTNVgD3cobtAWqqVa2WxB8w6Lz12QytswRohwttTSrBHnLshppEkdJ6vnzbdRmLcLDCs7d9QnHbBfnioh6nnfgs",
  "key20": "4nJu8eAZt8Jh7DQ3V3abaDPvkG8DickbEyFjBvfs9vaDPWPhmL9xwU3W2Z79SnZgizf5ADonBDno93trKUdePL59",
  "key21": "3vyAJpHAjq8vencmLqubg3vTkYNE3eNqPiYLEcuKKSHzL5afyrehCRJYZVts5fB2KHYTXQrTuYdSQEsQQPdUWKhT",
  "key22": "3ugz4j6iRvWWw2mWzgwAUbEChbmr8UoxodYY9MS98qAvWbWQqFgBNcGdvgfqNt1N1E9ZBxmpf82WKdyvH69nEwRj",
  "key23": "RsELN1QQHPWfGViFLUKrF62bxSGk472VGdehmPAXfZdRag2WGZqM46Lo435rhQdm9d5qKM5MDfUfCTCV8UgUwki",
  "key24": "FZPxjyQ2VyZXWuVDvYPFeSxz9kw7yMjT7fEvxPSwL1sLrhpGXZ2nsSwfq9KSm3abnjSP7K7fWgwtEuSMegBLYst",
  "key25": "3yptGXAXrfHp2S4gTmRwJnrdT5deDoLzFBLpfT9waY9EoCPMCHKwGhJK3ERFK8y7KktABv5ZiNqCd49Z7rJs7HiS",
  "key26": "4MSaq1Ko7sVaDNFm2s1ZX9fqJ5QrM86k6SNwzqQvxRLmbHGuwJ6NjNZdeSGkN4m9eZ4n3hrSGbH8SC9Y45Cgiih5",
  "key27": "3xzr6wmoBvcnvFYHkz7XYiJeSsUjZtFGkaZBvroogne2sJy4f8UZ1URxoKxLgTkTuU67bgAzzbmp1g5Vi5vHeN3k",
  "key28": "4ELLazoPbmUpJHWzwVUYYw1YhtweiXLy4iFEbYhmz16JZtV9WayCnT1fQd6nWE3LQEjQoosHtrZFJNP4Vj1aoe9r",
  "key29": "3ibCbHju4JfEwid1zLcFuB7mmTrdjyw3z2Gem3mKqxtjfJPonymtJnu3RoLA9gd31914MhngjHuBV21jqQiwTNKQ",
  "key30": "fhsvcv1Bb7ZaR5SAGvoWAAqc6M6gDJ2deUEPyMtpWdTRD6TMjgYfgkNPHmwAgHX8YaGh46dmAeW5xCwQXssBHnz",
  "key31": "5gU77Fttc1f7ySrBBRNXy7qsu5AcjmbTgTJyt6NMEsgNkhGru98gUBN58uGPjuWq2CkKxBWzJaAh4nKcYST1vEfy",
  "key32": "2UYASUF7idxjmusHunfmnh5S88wPrZ9Mf6bdhVQAHTKiL881RVwxLvvX4z6x9SKZpbYj37jYpJ7BF5ApD2RU37f8",
  "key33": "3fenpv8YQKTrH3R74UsVVoPbvauiWipAWFdwzmMptMMcoJzWJiTXnBXzYsS5eprFNEYj8ow6dJuSWnSoGugAASCR",
  "key34": "4Yk1wfSvK66ZNM8EgbTSqjPpbZvtqGMHv89SEnwpqFWFDm3rpeZ3GMWtZ8eVEUGWJg1QEWUEz9PWZTEEn98rqFen",
  "key35": "3voYK4PwuS2PaMzpUsJ9vntsCm4W2dZftyrzuJndzDCmVELfvjbxRtK94R9Ac6XTDEBrDyVdYUsoQSXWpvESf1Z4",
  "key36": "3J5ZT9RstYKY58bjx67ZVLHNWftK8fCz3cnqYfrXdwRCC6hj4PJn59aysKWRcT6XZi5gdT44rfDmuaRgDbQiBPQ1",
  "key37": "5cwzPvsLFZ4tj3DcyxuRmEovM7u3dDFpHEcAw2iGqPABQKkHSz2Hn7uVRGv4UAj7HoBvSLUvhbRNdFch6kVDJif3",
  "key38": "3KQTJUBYng4uuvyKTDXSUz9oigg423HNA8mxJxCaS7H43qid2z8Yyn8Su8Rr2vm3cmC34n2sC5af238D4A94zhbC"
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
