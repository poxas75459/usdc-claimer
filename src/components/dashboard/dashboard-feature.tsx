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
    "3hUWauikNXimBrgFefg1dgkDAfusCNWp2PJaapfoHTUmGWt6e5r7gsw5Z2jBXskDMfzEJSbRpSLrgSQ2L31FewYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JrVVLmMQRh3B7teZC6SPwzkzmVneKRK7cY4pE66vmsJ1p2thYBJgea2wEM3wNEM5VdJRF1Mau2XGLYb22yGoMhU",
  "key1": "5zQT9WkCYbUT29DGjT4TpwajQA4UGCu3MC2LaQvuFiXDvyati4s2j7EtQqYejnX8MHdhPoJzaBgREqt6d5tcKWCh",
  "key2": "4KBd34phLhyTPxM8124jjrU1nU98tA1jKW7YEXKK1tcoKoF7PdCrckoG96TNq716bL84h5rmpdX3o56bcDJqpBZe",
  "key3": "oZdRPa43TWDFNfArmt1Cf2yoxuPLH7bhWabDC71JnKRDRVk1DdiQc1hbFKhgdueKJXpgZ1nvVDZf1T34qxqdBiX",
  "key4": "5c1W1wthUXQ9JpUBmWJMMqTFuBK9MzrKGNNfU5gKx8UyzYKzRSFMNU2c71gNBaF8X2TUJ5rCSpAk9NKpoyJoXneA",
  "key5": "EfkSUhonWKrVNvXnzGzGUNnx65Jj4GDBdpY8QM9fg1xmGVhGKbKRJM4WrsgX3mXZHhKqMGNVFREQseD65xgfPrK",
  "key6": "3SVj2Hw3CSdw5sjshPsksfTWSFRUi9UgfCvWAz8q5ktSQZQg5h6zpsR29ZcyowsFxxnJ9Q5wxPVyGjUBHru3ohLn",
  "key7": "2t9Sd8rG1u5xmCXPDs3RQ84WK64TeL7kfqmfWS8npFDKB9Qd7ZeYJJeK8k3z6nmLcmut3WBCLqBDLn5i9yVAjsqD",
  "key8": "43aG2CWxhmuVsPY1G14ZaaYK7coEf7FQDWyhEoyZZECDegPsPBnReGz1pvvw1nut7RxgWB71KJW8wvbZ7Sz3K9Cc",
  "key9": "5fHwp8xT6JnQTWNiHvh9DirUuCgyAYPW7N8P45VpNGGLycsKRTjj3hpzaRTHUPZyr7rB6eRFaAnL6VfArjojgJMy",
  "key10": "7nb1JXSYhoUzVcZJhPBBn6yge3v9LvKcqXEMVZ4EjS3oFrRxkzqcf2QpmcXiKFwPadoXG7oknnKzPkb2feBsYEL",
  "key11": "5wYBPe2rfDQSJ4zSAoSfEiSbDFKwG2z6yq3sUWgLdkheZ6DB4hJm8oyA2WjnzRuXTeYPATsZEa5vJUc4YACe3HEX",
  "key12": "3abyhF68qVmTyDk3ZVfS6j3Z7cPZAvxg4m3jzjVSfogMf6oiWQNNJ64BCrdXmhNhnqWKuc8d3JvKQeUM5FoUWQBx",
  "key13": "5uRNH9vypcmoJ2KgFfjGb1VvjNrrPmGYTBj69DyLDPahziSS55cTf9FcMeAGHngfMYzaskCfE8wMivA8EWy5gSJm",
  "key14": "4E7ob7JN3tbMTj5RyCrqLCXY8RteXe7nao6yeyAPC8MBpQSHJpqz2UMEQjTAwSuJRe9e6CwN7qFFvVef6m3GupFP",
  "key15": "3m878vW9gzUXqdzu9cnfyteuCSnXhCpxUQxhtgtEwowgGKRPb7iLvYLUR9cFkMRD7Yb9Mk14PkkrYUYB5xepSZM4",
  "key16": "66qbh4sBYCFL7q8X8BT7sSfpzciut9cyebxxgozXxNYBovwazuwGN6R4ELCvt1CVyXD1eFTscCmEX6yefdbs9dKy",
  "key17": "36ghSmPwuTvqe7w4w7zDiYApcXxwkigigJG5de9sFv2yvBeiqNaYy8Gst1NajMi7pykM6Si97uJRnAcZMXozrmpY",
  "key18": "2D8RiL8tnfB8uM2WxV1zqPhj5MUYd4DrtwUXfB7wBVdn2FYGZLVMiVyqinLq5ycw8CrBwgmLnZp1G2WBAgb3eZ1N",
  "key19": "5xNJGtcGfHhGKAaDRvQGh4b1qdCHa3AriCSNs9qef2GZRG9FyMEt3i8s9HwaE9FHtEQaKTnF1SaWBnceXkvact8j",
  "key20": "4QsY6Pkk5KQyVMrwaaWCfqZZZs1EVNj4d4bNgwMy2Cj2gm8Vs2zDqQdZDbUTnYzBhFhkSD3dVTwfwqA4fZdadeE1",
  "key21": "4WZbYhwo2aRpMXkgvMBXq65DiRcX7DVWVBkpPTyTArgj5R3wkphcZJgbwKgeRdhJjPxQtRfQMsD2UN47hTUTEEPY",
  "key22": "4VUHmPwV1FULsNoN7hh3RN2f7pSJKrFsmFhNX1gzN2aTZLoNEf1CHYaRT63mTJyvDkRfCaxrC4arUUkJNpWEZzrV",
  "key23": "4Ee2YHaE2PDxR4bWkczuPipKqbh8hnNyo2dzkHCTXWcSEtRZdyMvrpZ1B5cJ3oBdrETb3AvhMmQCkkzb37JcEoxC",
  "key24": "2pMzwYEF2tY73Dcmfydg4WLH9j7vQPd7163cVzUs1mcgR5GJkSw3kLhK7p61txCzED6E4VSiraU4X97JFRwNoYj1",
  "key25": "5yYtWqbGi6xoFBRHZiUrspseGiJ9ufyg7qvdj77TqFUZJ7aBuW2G9fAJSJ2GuMcMiwWRwwqzhbRYWdXwTdcVVDyh",
  "key26": "4fLbwMexqniAmGUwRZjaozh6eMd4TKsMPTPUhDmh5rPiecLdE7qY7WQ5cyYbVY41LuU1oftACrmDzRLdtBcGgNp4",
  "key27": "2gXoJ7zbqVcKRYExk8hBtFLbv1yAz24JLzzPec6Wer1Lbk2K3VDXHtiRARo1yLiMy9a25sMbWRbNxRExShwP7ta9",
  "key28": "37KBgoJJsXGs9QGVWbx8qzX23U1dvnr4co7GLH6HQXoUVkBG7uWmFHLLy4TdCfPFLwTHL4tn48bGoFYeBkwuPiVK",
  "key29": "2rfcuLQypSQyXbGt1ZhjjZVjiKdxmBEeTYmP1bNeRh1vVyzijNy9eBZBEJUBiroZTDxh7t34tYH6nJVaBjAFTmFC",
  "key30": "4rYKUwnHGrCjoeLL92QZbpxyHF3mUSaLWJU9he16B56Bw9MH7KrCBfNxNYHfdMvEy2eiDh6UmtnyNx9LrJbqg2q",
  "key31": "G2unbnQKt1NULjxDwgwSKLiz2EHxNFeJSgzGHKTF9UZ7Sp9Yb4G83bp4vzkv8YgKWHD6EpwDgfTrcSi5Z8bA1Af",
  "key32": "64YojDVNJNh7ZMEjE3BGDaFy5FMe5wWs2DwjN5Ce151Es8rSEWPUxYTjAmmU5wscBrc89HPZgXVkZvb2Ste5H1jd",
  "key33": "5J9NFqygCHwhxfAh7fnvYQJvYt2mhpeMJWisQovXP3ewPaGNE9e8ujdKrqigvhNerUaenyLzZcE1dw6Dt4hcg5Vo",
  "key34": "4uUaAU4E2nMWQSN1T6AbAQndXpAGVgYjBwXjr6U96bfYGvtEN4aNhHpvZTzD6o5JPJyhZ8JRxFGBybL1MpUGusDR",
  "key35": "3twRa7DYDmg8NNqutmLncy6b4w4zMu3wGoQDb5FgGrhj1Cw6LBtXoP1VtMd5qosiha2Cn9cgD79j3u8quqapeNPD",
  "key36": "AGnSY5s7x7WNDmXnguLVgoqtJuaCw76Z5Jsf9jkg8s3YLDdTppxEG9toQyaijjCDwQJZp6uXtUa5h6XoZ81J2mr",
  "key37": "5Ag1b1jpL7cvKBeDCZZXBupe9ZRHkM7y8xX7Rk3hTuPqx612ovw1EFpSM6yE3CEsHrcDEpMo6aJdaC3B1rfi2qT9",
  "key38": "61YZsrEkJYg5KH1Cup5xWM8S3yBWHr6ENVzf9cDNHdN4fcRTjSmmCRTKqcrNEGK2PrMgnZ15zTt5VjDisdL8F9Ve",
  "key39": "2555dZh6CX6QDAanS2A6iqnzidsCCQGuQ5mk5EquiPVxtvnobNytUBom7WVjVw85AtBqGfkzE8WJxPRuUZdgE4CJ",
  "key40": "jZ17BWNEekM1fKtuXrNKSnXHNBK7tyQn1tYsRpciKj1fT1ieWmjWq92grBWGBs6WRo4QjUYhE5RkBLuFQm7Vtfc"
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
