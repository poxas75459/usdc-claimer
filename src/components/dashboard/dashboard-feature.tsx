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
    "2v9jBdMt1Rt13aVNx3bda58Hmyn9xMZtpZ9fezqwcRBrerYDee5g7uFyccvsLuE1gqxySXbASjokPJw4P2qzMd1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RyTEzashcK9MEvimJmAbJVsksdT2n4u6BEYRTtJWby8UR7NrxWwhgKSXqhqtijicgD6aPe2xnmNsC2jynvA5AXY",
  "key1": "3WzU739nsdLaEXmGnMbKnv1ZGB55PZifQfvdQGHTGkZXKqV5etBapauoe6oa3ko2F1XopacB4JH8gVCW7asHfYnZ",
  "key2": "4GwdYgxXxJq3TscaP1dM2AsdCufiyQzC2zYAGEFQKMjscPpcb6iiYE98DZvokH7faaJZtTc7t92B9uCJ1ZMgXbA4",
  "key3": "4oLrZrCNAvDsUGZzk5Gt8tZfQzfM4pRjXJFzrQE6vWcwYsZRbi3pHES79sUCrMgjDmeWidBvBkKYLEM9AWTBNKok",
  "key4": "4egD6HEu1ZtbhpUYtL2VTrEJu5dioWc5VUaBhgxhb4r637bmQ6KL16xpExaPwDfi91LD9shFb22zGr4oVYNfk21n",
  "key5": "64YYu5bYfefBj4civBxTGgnnWtuKpT2kWozW7zZ75P4ndUD6iUUccjPoPNm2p3xeu8QgE5Bm6pgmb2jzZNv2xUkn",
  "key6": "1pR8cgxqL8CkxpGysXvbkre3GTvARoL5t3oqKVWuSaqNNGUVmSYC1KLkuW9t3imksEnMzPjfgpFxJGKs3JHYEtb",
  "key7": "PcPjZmvmN9iUpBmXJUGKxBWFGrSJkP9JoHTY1ctshtDT5TtkM5X2QDsj4uTbG7KeWg7qzHMgC8p6Z8j7My4NZq8",
  "key8": "3vR7wFLAs8TUn7ZxPbQR5ZVBTiCMe14u7dAAaoeSTzrY1jDmuoxr6HCHNfu548SqJEM1NmvBuNxQySyiS9niixfV",
  "key9": "5JAFbrHGRxoHYSRbmaD8BMbmoz6opDLuWu2D14SEUBriPK65kJ9FpodL7DM7We5Wqo4b3FTU82R2pWNpJZusUit3",
  "key10": "3uTziPpxTAPz9Cv7NrUPn4mMZNZFQi7g6ngh7SvBjstZ3Y1g3ZrcpcCBaGH324WCuuMy6TGKJ7YCdY4adwy8xCD1",
  "key11": "3Z33Xa9Kd6baDkRpcdwFmDGmXM5vShAZ285kDDNg1yjiCeibKrE5bT6TXuskaEn8nPXwv2EoRN9Qbu2MGk9uUpUC",
  "key12": "KFTVbxu6GVw65yUP2SC2vXi6SYFdhpv3noMjVEmA5BMvKCRmT7SnMGivyoWBZJMV3avvKGgBXMQa5c2Yrk6YYZJ",
  "key13": "2qnuMiAh26yqXqnAeia3SG2BP7vpb4WDsY1zZFEw84v77xCeH3NE3qCwxM9YPqcrXtAo8u51YPXdBHwrPxmWLfvR",
  "key14": "59ng5KgEzU1D9dTiq17rURLzYA8r5v5ndLJxDMKUS377eHF23eRu4mwP6fVhhTNuZJqB9uZc47uDF3LLRc8Q2RcC",
  "key15": "4Jy2tGVBYB2fGW9vZME9fBGcfBR8UdgzCAzNKTrAMBN3Lrxt8XRaJA5AnTox9SaYeWbT6XWyfjz3wn3HjtVsXGDm",
  "key16": "5NT8suDmHaZ2GJLfuNMrgCY47Nq9mQ589vAYe8djxtCFVWk7aZzoHdo5GLn4sKGzLNYA2DFana4bejGLtLVp1fbr",
  "key17": "45aTf7rzRQnGsrVPuwFDCebPpP5Ph8hkyzAHixQ7FXYVzzq3jdkbCnQPxMNiS1RGZoWwphYDf1jxtERy5XhV1cDW",
  "key18": "4Dm7ezen2G1hBxgwdcjf8oD8oVsrELZxXXtxY1SypynZCJFpcnKbkLxjyqmkRj8U2W8bBfLycrX5raq8fx3Vc2LW",
  "key19": "bZ8qwp1nRiHtz3qVSsj8LmhxtfYRAV3swJBJmZLcGNeh2qwvGhwxqi5RfoWb4icEFMZQgdc42WNvGCmz9wb6Rck",
  "key20": "4h5kMeA8mZub2gcfhFRaiue6miUEJGj7iuTPzK4PzST5dxJzHVDfJEntmguK32u1pKfaLhnb3bQmryD73AFZpo3U",
  "key21": "4o9oswVXpk9ydPj5nuuFgkC1kZXL7r9DSp6umLVBLD5GcnbzfDJoZAwMv79MQY37PsEXRsqLPjXK73hFybYhexUK",
  "key22": "4iurzp3aQaEb5rF32xXQashKEV8L5r9CiagMjoxVWYtddkcttYXk67J3HUijzZ3LCVqbWKpu5EnfaeMkPDHvxGNm",
  "key23": "3j76bbewHeuxwBxVUk1hPSSbosFy3S6DkyS5pjxfzKqdKb3qr9uMpoDSyJ4pkDC7qLgwn5Qxifb972d7B3V53G5U",
  "key24": "4be5pqBZPX4o7nBZWcDkgVySoudeJJ4vDo2GQvgyaCajsMCSp2EjD1BA9RJs8kX33gtYNZb2Vvtohx6AE5r2rMuf",
  "key25": "3XciYMLMLgNcgjR8MkqD5c8Zw4U7hHSzqFvPZwojVrsRqiTbQFvFTS5Jqn1MnDqZt5YuMH22VAWCejum87XhPGEn",
  "key26": "4v95oLoSdf7xBzyWEC2gkSMtbkv5yWW4PBorCKfub3x926CCfHL5f4omFgK4btsXev3hfMmTyJtrvFGc77FCRhgw",
  "key27": "3xRkwm4WzdkzTJGyKCUitGmDsQB85mWwREJLccBt4sNnSydD6M846Bd3eAMqPaNRhyQuRwBMFWiVvbr7xbtqosa4",
  "key28": "2Kd7EDueeKvsPcDEP98Vpor6TrAcUCWoNLdoqAsuB4oGHj5k2oJ7ehwpLpQgjAo66byF8RZMCZ8xCGUti25MTUNS",
  "key29": "54xsqSrAzAL4hgPuuan1NDursMrbzfY9jjVmTKzmPpGKacnhjkrH6eWEwr8jCQt8W1gKVQ5tPCWXU3yRLgXWaRCj",
  "key30": "5jYgLL8EzVJ8c76K9aTPK8iL4znwRUUBWqEBjsygiYZqxKvi96bAHxXPuRWNcE8KNVHprXv5w3RY5WQDKgfVCWp9",
  "key31": "4wCDYeTMhQi4CaEyTVicBLfjnZTfP8JybUqBKPkiXecPLw6KsXp6kGGH5YkxkxoDzEqYvSvz2UqERtypBxxi5fZR",
  "key32": "5aiufxekMnsaxt2j62XUgowQh9HCEcmKXNCbRt8K3e5GRw7vm9iPxDa5b3Xtom3CZfHGam5sy62oSwbkjfu8cti4",
  "key33": "5wn7taHf3Ez2ZoiqT991k7SooKWUPAkAtHfzhSbxKCWh5BirUXpzYG8GEZX5D6WjnqHADYNv8KsFcT52yBr2NHjN",
  "key34": "3rDcaDd4htHXbgW9mYckZj9XWiKEdzHoYXkH1pa7vHUc9WfD8TD9W7WaTMgp6GNv2DmwdCk47A4engdQvVVxNNZX",
  "key35": "2zazaUcGWXdn74JjyTZkPUtp63JJC6qUUsAWb19JUZBfAMWPG2ERkik3F31NmLxEMvsoihEV6oCXENPwmsHLqP1i",
  "key36": "3PwHwyDoAacEbikz4LQRu3evFZW84FqrUQMDfD3YTuchc6s8h72EC1JTgtueF9Zknh24eV3tnf3S2EuxgkhxBa3h",
  "key37": "XXu9gdRQE4AqnrKHnfC2QJg6yphocirQ77rvdqw4RWjHwR3NgVenGwowMkrH5q1XqUX9rdi5j7opohTeBSCrsYE",
  "key38": "2omPJxCEuvLtLdNWU4yoZykeFEXQeKZbKi4jpbHRa52RkHDTW2tWpj8CoQMByjYatZGb93KxNj2Z4TCbrnkmXsZ3",
  "key39": "4ExB7szg4t4wmFTq7A7qxinDkTgpxXPZWhEzBX14KjmmzNLwFvxVWJqEmox2h6bdF4rrTwBnsZwvyhKmbMzS9ncB",
  "key40": "2Rn494ykiawthT3bAfm5raKzS4vXEuegQxfFizgEvc137UvzSBKwKg4nA1yrQuxpTzaH2nJ2UaNcpDW4hde6nN6t",
  "key41": "4Jirn9aB5S5NmU6ZoZWtN7Z6c8BDdPAD6DNQa6eQ316cMeuch4xpK53KRRcD7P94eAs1ndJynbmKQFozrYEQjwmR",
  "key42": "4GCYNtHLuYKJdEPuyoVvgHb39V3GDMYY7SQ11P2sFGmEwYSpm8sSZN5sL7AE14xV7B5ZhLXF4Npy1sKPHnFwP6g4",
  "key43": "3ZLgS7aeSyiyqYVBMUcRtw6tuX9Q2hpS7bta8gG3RdpL7QXBBTFaA3MDAP379onAQKz2zymykY4JBghp6CpDCxPN",
  "key44": "5kg83wW88ELcv2SV2uguaVMzSHMHKpUkHBrhm1aGsAqRksYU3mL4HByLouPstneuUgQZMTWND62uyHeRNg6AxCmh"
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
