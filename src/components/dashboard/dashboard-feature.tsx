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
    "61AQdN8pZQFVfjFhxYPtGEjHNKXp3ZivUdZz9jr13opf7G8Bat2bgd7NMNNejQ68xBuiHtdbxh6oxXrStuqVKfUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "651YwTdqzuB5bGsUb5pa4KS5J2ZXCA8XTFDqwfsn3gfcLb6DawYCCdTsfXjhjmzmgtKn492FCh5mz1BdhCQmAHG6",
  "key1": "5X9PpkwUoPmsvnsdjqVBEaSGs3upxF5m1cdYe9pTahoJZVGumDXCg7kqFMHg8DZmWiUjhve8bjxme8x5GT4ie5e5",
  "key2": "4ARmZj3t4iycqgAV3sHpTWT7iu1xYMSbdVFc1qvQrYSQSLuhdPFwYvqUwkvvHk8bvtVVUBdrmBgjGPjatA8HQzsy",
  "key3": "3GmhGn2wbgfyVuJNhD6b4XhJZhkhQJguq3VEuci6J92NLpPJtxrjWVyS49ytQRzCicPWzizg4YGDzVP2K843jzuz",
  "key4": "4u8MXYBAkTvDm54a7mibPGWLGPfBfFvMfPk6LdTdYC8JHi4Piobm1Q5gZbU9SL7wShfZJuGZwi9g1aeFxpPcbh8L",
  "key5": "3xtYFZoXamvKhnH6SDD1esFgNxKbmGr5hGJTVwnXA9xNyXwJGAnEJ3bks9yZfEQWqXomYkMWRtPF5uxMBJjXxbFx",
  "key6": "4fQAvspcpWCVLhsrdGpxCHhCiK27GuJXSmwCbcR1mCNuR7BZc73iKvWbyPdNKXoMS37984zBapJ2skxHt64qsCqo",
  "key7": "ubs1DXhKcoVYfLqnVCETGxTrYf9GK24hUQmXm8r7sPMrfgpMkN6JXGKf5aKgK9SXxQ426JQVzEmn1oYLzGV7y8R",
  "key8": "26w2Gxa5dBCDhvxdaGzQCYU2NkuBFffHj5hdeW8aKRuZyhtwvJMwXgRQjnq3YHZiXeMxRzeMMS5mMwipXEcgXxbk",
  "key9": "45SoSgk2MCVZWvfZc8kHdU4z39VHxKziA6c97qRYxTTPTE4S1a8Fu38W4EqJ6zS21H9Fg7nvVuZLSd6ShH7CXnxE",
  "key10": "5bqtzcib8U43YCDaGxYiCNEp7hN2oH6XvqgwT5xBjm1xm3URgCEZ77nBsEtYMPwndBkoQqqLUzwkjLbAeXj7rVa8",
  "key11": "2ciWBYMbuX5vKXmXAyH61tHfgtDtQBbR5AvFdL5pTYxpbALXDz4w6YCaS14vLRD5Pxom6hPddDZUrSnZ3JZ79hFr",
  "key12": "4zr1dmb4sVWVDsrpeDmLtHroorFSC3xy8GzLRx6grBxRzcuMCYnyfrgan6cCNopTps9RLMB1bBixU5QGSSWNpQa8",
  "key13": "kNT7AyEvo4CyvGJv7taosUocSkAXRj1UFptpgibrRgjBiQPXriC7jAybW2zEWX8Avm3GFA35hTA56CpRNDevR9Z",
  "key14": "33J47sNatAwJM9gapsgtA1zMBn3YwefFYkYwG5FciPQ7XyfBhydjxx633cx4v4Xt2P6ZG5LisKjgRhPtHzsrLD8m",
  "key15": "25nJdUB9stepZ8b9yJqsJQjy7SZutYywu3JFZPofFUaiLm7fQx2UGWs3zKedRtLhDifX5ZUPC8o8ajTeKLEk3hb6",
  "key16": "5JWgCgjn6o1ZfiehN91DNNpKSzTK6RjsJQScE3uEFYpbuNbYm4afpxuHjvG2MSh3SfYSNyyfE7zJYfUzXqyKS49Q",
  "key17": "3uuDQzWGLUZ4VAqYVxhsoc8Suyd5JWHS22uD9Rh2risCFayeqogZLmFFAzLWLQekvLYaGMMiv4DiXCRcbFLfZjsP",
  "key18": "4RmkdsDN5oG5X4GC5sMA2up8wsUBaGDTHw5UBVdztV1bYgqmpdY2G6B4jN5vwj8gdf2bkYdA5XN3HXzDYjJofbD1",
  "key19": "23mgFpveDtSpR9CzyQeCjkpZxHm1AUhkbEcbM9Gkod7QhEPEhZXjmWL2DZQW2XKzHqnHHCnUvdEhUoTGKmm6C4DV",
  "key20": "AM9ybMVMPXc8pYCRDB7FrWxmmh2eGKWMgXtH9UdDBqyFMYYNJX9vFBJBC5kUxNXmE7CKh173mcUeZCFapBHzuUY",
  "key21": "4nj36XzzS3VfFtApC53tXK3QZGbyM6uaxFtePxxiXoP1egdKQy4VZf8nEzSyPW8rUQezssym5TyRb8FGFpa1jpwU",
  "key22": "2NN6t3uTZwFwhYRFgds6kH83Qbfn68u2vnnAQkFUBmEokhKXBnAyyNa6WAA9U78L8cVMM8MibdxQh8CpSNQP6nV5",
  "key23": "2Q8NrSvgSnu3sV4u8KUw7yvM3cdoUypduhXPWdDJgV5vVnThfv3mzDJ4Axw2cSsNBmDUnAejLiww6vQ3ttnddD1S",
  "key24": "3Ca2C8FvAAdb3kyzu7SGv8ovAf4662PCn9v3Ej2ikuqVAxQfMjB99dEej9KjFTF96oA3huapmqUxzv7wekXMcZCX",
  "key25": "3iFDZ6f5gE9SWbXfwg7aqMro86zGk9PjgWp8tQQavcSdPucBk476HfFgnAuYXWiPYRVmkmsuit5oQqAgrafsmo8F",
  "key26": "4LDerDFZC9a2GLt84pA8vGZj3Mfrn9ymcXykqSJyBTv6uHuViz1SpQ749ynD8A6BagTTX5Gaw6zsFDbKqgN7G2kN",
  "key27": "3ZiW2DN88b9VrZ6GjPe8VCni7ha33FYDzr9axmjEXKQZLb9DqxBEqCThUkcyQ5ntGVBx7XnDPmEJrLPk6hZMXsth",
  "key28": "26DLK6qWZoBpVjqBDDzzam1VdN8SN9hpURxpTRia5QEHgMjZkAkBawmnfuf3g7fKoeNwDVw4tyRKCDjTXjgBPrv5",
  "key29": "65NdyzsKAVinoih4VrFeP6tEsDa7pfB5Qi8haS6cEbyjTSfrNmexmVZz2eeM8Y2SZuqPBjvogfojUfYTRMys9HW7",
  "key30": "2HFNkKAZpk5yPPCYedJygDtSZVNgzM6N3Xc7rByFzpVu7P5AgSuw6Pw5Zhcm88UnPpZFXm7WuEVriCFXxPGTjpaY",
  "key31": "MqaggCmXK9pjYd76ERssrYjUmvZL9ruDLsd2xQ5jZ8M7nqsetShX6GqRXc7X3nsMyZZoZjtvV6x8CZs8w64bAnK",
  "key32": "ndajXPwW9ZHKDtYD6Wjpgyu93sjZrwn9bkPKrHbrKDoBikkNjK5FcAB7gz2r1ES9cDZy47hX3Gfvgoo4TorzxLT",
  "key33": "2uGJFCwgami6mge1WvStA2Jp4JvbmFoGEPdsf3eC87p6X2uT1rbuNZYP9nRH4MBkmkV848kirzBqUWNohbYUeGqb",
  "key34": "4ogHTuwDmKSy1Wt4CjPs84Jy4dh15fFNhW6bGKboMtqGbbeQtVYBJ71jebtTdgLbW8ofdqpAPR8EZWn9TNFM2eBd",
  "key35": "4iv75H9D4fwJsxG372BKp3Dj9kjwHzFiwCa7MM86Jp96uJ3ueWafeX2yzv5dM3BLUcsoeUUSsJ1kPP1xDBMyumMa",
  "key36": "4jM42z3TeNw6gPBokR66kUfkntct5zJnPQGRoAdgHdG9cYMgFsiFUStnF7PBHK1mpFWkJcCYAkdPBSxCiUCuxUwz",
  "key37": "wN1rXHyYGHogSX8jAaAGvwBQDRZ8hFRzs3DLfWWkU73SsmRukQrPy5KQpX1uhvUnA5ERRWh8S33KMtxANsnmdNH",
  "key38": "RrEn41w4onNZ2VUPoL2vJUQBTxABmhD1JrA71frCQuFht61nte3NSWNGSm2pXiNoe5jaUxkBp9KAzozkcfq24GB",
  "key39": "3k6nAuUxzpQctXXkwxi4VBYMsRmZ7ACq3ZNuGueLw1XAYQaRV83BXGZE4yqmrWrniBT3XXXtnwKbMKDHqMLZswG2",
  "key40": "5xk487nszqJeYs3ZdYqiG2tCAvDUsw9RZwUA31mxoniMKN8sCucfVhvmMJaceuo5Z8NBoDEeTwvxHLmndRbFnoEX",
  "key41": "3UMzMnUZTTrrpUDX9T64JtGJAV62gH5bN4pYFhFmMCH5H71YtCJafygozSJmSYTe3FCEe6VbT6ssJLj1qaLgEfFZ",
  "key42": "66S5YwsiQVPJ2TVUf3NQ7goWwFNxPJtec3Z9k8Q68vGp4F8PCiDJWhfrGhuKQewtZ5QoGToxhLzw84CJzgd1quUp",
  "key43": "2Qo2Q85fHuaE92KKypaEF5FzAXh2iz2fBjioPQLc7cki5Dr8EJr2v25NNXV539teenhgSwZuA1ZbMv7NptEUkhLZ",
  "key44": "2bFxWjP3SjB5DA6qTFbZPrWSXFJnUmF9vu5nbfwqMkk7jkgufSGAcSpBkBcouxpBxPvgtbbpjdnR81dw5K2fzJgK",
  "key45": "2Nj1uRuH5zUMhLW7s5vW3fRJEsmCKfVcveyFhWzoY4WFSJgtwWhryrK256JE31tdANzaAmgabwaP9Ws2o76AMtLC",
  "key46": "2KqYAto3YDaMZWgjqYkLHvHRK1PDbapjsxRRprrnRxPoQdqhD3eACwiNJ9ytZQucWBXuM1C3RHEFs3DAwL7mvCP",
  "key47": "5PVVDbSdgZikHXo2AkYHKXbyK9RhFAeUt8197HRcCshxSNi3v61t7wt3SMCSXvMt9MgqDRUAbGdfW8f7YykEtN1W",
  "key48": "2SueT3LmsTrK9u9oVXtYeS4Xjdb3pRMwjYs7Wv6bpiQLizN6xYYiCwx64PSXS3kYYmjhaFRCrcWgvw6tghhyEmno"
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
