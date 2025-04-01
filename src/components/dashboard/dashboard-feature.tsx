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
    "2thtMRM2AuF6RyfPo23uyYkT1RM3qWpaaLad8DFVAw6Evcsq5GVWNQN3mwzgkht72hpRsEzxtzJiCcSzoBGY8e1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S4v31Pm8V5Y2MQtgAtEhKsrue39Daq3pVaW2YYFiSkGV4FATETJASxoYjUD2wy4VoyYceVzUb2LSG1vaue42nRt",
  "key1": "YoKLnGxr754Uas3PbHxQJ1qyyrUE5bvhym36KUQLBW56ZGR11WxfrWJitjePQ26uvR9zZQDcR6PBGRmY2BaD4rd",
  "key2": "mCWeWWGb1whgfkgY9wq9jaQuAp5qinsD8hcG2T3YMwVVhFWcaAwquxE4XFScqyhfub8kQ6eS1rNTEKx2kxmJVPD",
  "key3": "i6JTubKzB4VbG5cMJtTmp5eJVnDJsFe2u1ckPxewhjCVUZkScKFZ24KN7ZseofvSRVRJjwmm6i2X4bnZ9SCy7W1",
  "key4": "3WfXcbkqU1RoRyNJGJsMhKPyxCY7GHrRsZ49cHVPsJd8fogHoh9Q9hyzZ3UdUyZv7c6q5tJjKYotje1kKt22ukhz",
  "key5": "HU1T5u5AtSSZ4KFjrPw6VHMgb7whQahc3VjYCgyo1Tuo2UgsnbhXCfSKLJZTVMbAUrjCbbXg3hAkzGi9mbRBR5H",
  "key6": "ndL3m7Vv1etHuz7WDjPdwX2pycXHuANuX77QbUyAko9r186LUukHVxh6TPcrcqjAUgWyMBeVegEPNhv5tiwa8WD",
  "key7": "22uyRDX3WSaDJbdHQGEBz9KCyzcHXGU8Vzt6C4jrXuwYtv68c4TM3gpAp4GwPxrTrtmMTwLSB75qnrTUE9et9urt",
  "key8": "4AbsGvvSPA6AdomqA4ZRbnuxzc2kCJpFVdRqe1Y6beoEbuRwhYFnwGsY7iP8xnoL7VH1XZahczYC1LSqC6MQddSb",
  "key9": "5xQ4hJ2Xo8GBFyrrMV9R7WgqiKY4BWWFEe1MZCKZeFwShY9L11x2KBWBrKgHqCC8RNMgqNfxwG8dDCeUW3Bpcgur",
  "key10": "4nrLfizxwZXut2LKLkbekj5dXJKSnonYP3bBL2ewM5hJPHYrDCJX78L68rFkWufm9s1wvV49xuDfwDe4kAsWG273",
  "key11": "458Ae12mwSN8Zhqjz5CZ8ws82iG4HY6SFniaiGG9moiodgQt15uZ9TF42JSziJNue1X6Dvdx7WH7tDvcQ84mHDa3",
  "key12": "rbsZd6EeX8RNV7FNx1i8DxEDm2Zw9EgDggpX7x3oPkzoeeiKNNFo7Zbm9PF4iCcpw71DicdUbxK6wRAm53ftE1A",
  "key13": "8vGcwUaqtAvZMxd6ShdaXX82jcv47xx2FQ8hfa3uZRGZsBu6Xc3jUk9WdCDYoH4ATwp2qvbeWhURwVa4dKf6uBg",
  "key14": "4SL8JSqkXByHU9aKKKnC1rESx2LN7iCZZ8yX7fcz2GATqNKK9HthbENrUedRcrdiG968v5axZUZuX8yoYY8c7y1w",
  "key15": "3VmdNJkMvBTbHgyhKmdVXYdj9ziXq3qJei6rZYcG18zNgXrBCrsPwEZLnMxnXqdTTW8JcDdX5pbZKZz6XPNziK4N",
  "key16": "2KuUzX3MVbYNPgJ1ntE1jYzRw7LZeBGG8p3AryGMDcWKd5g16gx26g4Et7Wo39uHPiUaj7cB3QJVnA6pRuU7Gqft",
  "key17": "4R7obbcHWRSNj9ZbMt65eSpCRwkkeDDxi5DZXWXs1hNTKk7w1GZcdgQQNfDVuAg6QrhaaFLKjpqimZ2mtgj6omp5",
  "key18": "4ESH8Jm5FwpH9b56XdzdbZfdKvjdksh4ohi4FaTGyTKhQhWhU873nDp1eCo3QMnjZZn1TRWmvd343DeqTLmVhsEu",
  "key19": "4uW6uEfZbAZY3mXkPPKBrt5fFwQHJ6V7ZCCfTxeMp9LGupCnVW9adYahRdCsgoD3PtkagYo5ubZ6CSyAjoxGxxo7",
  "key20": "318WFxV1qRhVUCGa7shGk9UnY2oNZSakyz9TjzYRuqeC8kJpeajmZLUnREPjGsZUk5FqMjYQqSB6WPMKZez82ivR",
  "key21": "3YLn1qwDX1eTpFJwb5F57YQLLniF9uK5JgNdi1JeS1czs4n4GL8iuEFBpZwKX6XnYyfJFAvnD1rVK17hsYoBmjx6",
  "key22": "vLLonjhWJKM2xpiqsc5vUWLKZN8vh2Rr73xRuFzzLcPoaiZuQB9Hk5cafiZtKBmvNk6sMGd6AFegBdWwDvE8D7e",
  "key23": "5B1i4hMGN9iPvnqE4i3EHGVaLC8w9o98DimcmQnbKEUwLnMLLTevxMM9rMKCCowY8GssLqA272eBkf422z8wXjiC",
  "key24": "gXB57wAE95VwuvW68RCr7R1GtTA6j6xokujjs2Y8UbGNF28A6QMJvZYAGFG5nCZrdZiEPwjUrFpQWVf7q6dxmak",
  "key25": "XejzkL4UpJr29gk37H4L6SvsZPiDs2oDEJTi498Jma2xixUQHC96ERzfUTnDFMTryMvne9WEg8mYKgnbf1CU6ym",
  "key26": "2JDraAa8QJkEAy2i3Cihb1W4Cx6huPoKW7u1uAEjqzCdY4QMsLpo4NMmeLdv1PLoaYvXjCoyRbFbR8sQfLNLFffh",
  "key27": "5vEQTG2DwyijoqmdsapLLPLJ5HcZ1JXT982f7uVDz3cb443vx5iLFeCkQFHKbwHLLx7bjFBm6JW8Tu4vwy9faQAt",
  "key28": "5QnbjHEPnW15axpYboWYguuhv7rqzZiNktCcJkwSfsdwP51XzYq63A2XUmiGawnkrV4kWxZXSe8sWYDFAhijR6nm",
  "key29": "2MarB5jTQa1mjnUhNGvMSe5MzBSYEVFwnuM8UK3Mc5kycV7dh1okjy15hk6YshkNFFhGYt3vh11hxvgr7nv2U9kk",
  "key30": "4jJz67R4R761xZKArUkvh1mvWVzfqVzN7msNPnT8dJKLuHALTScYvGYGtA1U3rBfLyF5gTSB3kTrfG1FoJpQDTA2",
  "key31": "4Gx8YaSMgYoBWqc8mk92JTvf9hFeBQYTzj8jp1Nhdqc5dQ8Y6yLybbEE4fysxSUo1Zow5Rtd2qnnb6rd4Ub6fnAr",
  "key32": "LrxvqaFyRx1iaGBkfSpkUjpBEikiuS5pqfKne7DpMicBENjLxTe69WYf29L7rLi2qmbAvj1f6qDpGW5VqSeA417",
  "key33": "4XJ28SPqLJ25815NKcdmNDT4yNeJDpW7d4h2QMDJLZ5akKAgKvios1gXwhcEpNsdFE945na59mAuKJ4cSFXjg4Zy",
  "key34": "4zrAdr77743FmKwz7VNKnuGGabGSK8xcDXMt9i4FoW9x1FpFRbsPE8fx9mHFs1bwHFMYJ9bYTYmXoMMLdoHzvMFS",
  "key35": "PHxCXKwBSMhB6ziiYnLJHF4nTJNGY4wRAc1j3pPd8nzLgZGXC2WSBXSHguA8VnW9eS6ogkquBi3Rs9T4FuXU4N1",
  "key36": "WpFeDHKgK963uiTm7rmD1TBg6645fFGjpioerhKh515xFzmNwD18dCeLAqE9EjduYzU6kgqFt5Ew9YjA2BcDdy6",
  "key37": "5oh5SWxMMoJzJvoK9yR54nkbJYJH7Bdqew9ah19SgE8PYDPambRRE96aSvHFMdqcKUxB5rTbdLrQojCjxJcCATNc",
  "key38": "dD9MVd3FuLdCiZJFvetSsDiDtmRQAexwEDC2yaXdCvHQpgoqVih6FPaafwW9bevYpbrWnrqstnGo5Vv7QZ11ozu"
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
