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
    "5xJdCNtWVreXUFFA3XuRrb8Zvy9gEXCqe86yXrPoecwD9XYLS18xnsk2EDonr9emmtGk7qnnXhPinYis1TTR5ofm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SDLrerbxZCCVdiaBXE3PVwLNCcunxzSe3cw7i96aMBXzqvesMSL29tbDAPjjzcejkVt9K91HnVaXkkWP2TA1cCn",
  "key1": "5f6C68HnzWbSM7vtJVsjcayPdHc9rYoFf7UZUTmR4FpNKTXdziussLM8U6kLgEkHqhvBaAYVfwhL4573LnCwdn6r",
  "key2": "xqQ31CNVYDwHwPmAbnbg6WD1yLT7httZVKkCz8GFvevg3Tic4T7nT6UBGZ91CcAtaTycwpeT4PyFMpZtiUg7WXe",
  "key3": "qM4CcEVBTw4ALD7afLapFC3RiqgJbNu2WRtVF4rZV6xbG7P3YxTCzVGr9dY5vDpjN8nKokmPdGrM9ps4k1J3tPt",
  "key4": "5DY3V2PKgiHUPbiXKGf7JsrZtzUpU7Nz33A7Xif9g446xn1atGANjxm4AQi38Wqf25242CjpuCtjtbyy42Hyq4Wz",
  "key5": "311gxBCjEkWTPAZn9J9Y9f5AJt3dBc3w6462yT5STVN2Q4GiDjKAXqefBF34nyDsgRrG2PAjjtHnLttRbQ6b3nuG",
  "key6": "5gwPqQr21ZvKAfx2fbR3WbZJ7mqsrz4ZjQsKq7UDa3fMxP4cpNh52QegbmBmucdTKJQXLPt5RkemPzzQ1MLPEJgW",
  "key7": "4oUkSgrc57PJKrU2TRJ59suFMVSqYWo9JFwskhG54p5tBUpiXoA4DSXQxA7wtffN4Jttkdcb5YbJosvm479V78Fe",
  "key8": "4nYXcHTM7oi3UopkjbWr3F3oETB2Y3AKNQpHzdrrU88rWM6LN8Wq4tzxVfjJTGg51S1pdpBT7aS5XBhG9FuaPccU",
  "key9": "5DqLJCka9CfU4cevj5Mm137z95gXpCM9aE7tc4U8bv7v2VfktaGo1xJ4WjFZxE4fph7G2w8vLAJRZcHa25Tp2L1L",
  "key10": "3mSaM2S8Eivdnveh5ifGrfA448aBJ2AcSTSDcCjwNXzLxd13RhEvLStQN7X8CukSmTRs5x3KGBSBkGEY11oMzFzF",
  "key11": "4rPmpkvweE6LRTgU4vZ997CHbTfJTrgWCNwjshApejNV3u9gGLnEv1pKEdvWRK2cj7CXmM7GgRUHnVA8ekD9qJQs",
  "key12": "3uuXA26fkQKuFhear1wr5sLvm87mnQPchuee4KwjAnd6Rq5TeoQjKK9hB28humrfPm2NucshAp25CXKduwq3tMYK",
  "key13": "3xpLiwnDighVKmfJgZW8Vv34F5Nn5fMZc5vYQs4hN5QSVFDz9CykAk1P5VTwq5oc3JNBUzDdiNgkZKrKEyXMWqT",
  "key14": "51Sk4pWGMQpKeh5ncat7WhofWfM2zgvBgPgZRksmtPwERU6XCKBPJ5FsY2eithLw3FKSM3X2YVEnQPLE2Na642P5",
  "key15": "58h6N4nXoHv8xPu4k42hHCjfW3Kku7pdGdwGpz8ojz4EBYQbnYJb4vWetyvLZYBnkVzXEcqMG7yttpJwkm9zEYyq",
  "key16": "4WRwjhdaWvQnsQAwKxu8c5PHwjotoaJw6j8fq82KgycXRmHifsqVo1Rqrowsd8rK7tGSt4sFjMhQXukimGQndj2S",
  "key17": "gx3ugvB5Q8VuDUZnrWtqRoPeFw9491Hiqs6fugvBbnXCNnbJCwVDYLK3pLXCqVsQoLhPLK1ckHFnSeSW5SZrCyY",
  "key18": "5MxoQ9AqscRmzpWKegaBgFTe3jRmKGwhcKKu8KM63tFSoE8oeoeNawXWUUJpPG5jNVAFmARXKfjzWMdpocHcnEsR",
  "key19": "5hF8C54DPuQVcaSwQVcGqmqPod5mNLrXboEfkbstKwyoeNpw7yBLLJgvJH9UxhREamBAUi8BWAJZPEReSzVUwABQ",
  "key20": "2UQVSjpdTWbNqk5XnT7RaxSAkojNWfUzLnt5yvspzW8MCbgfKxMa4fNoqj5AfFhP9Uusn8QidRhXwZZbdHfajmfk",
  "key21": "qF5nKdvuKVd6PgeXvDdM9mwJP9QBrkaxijQ5uU5RuEczBSGe7QkpL34ocqHtgFxmBTBDgPLQ7qc2CqxCkvxEaet",
  "key22": "gpcqXhFBs1mnhDytjq6qwYLZghCGLf2uQfwE1aqUDxnqMJ6ZoH24YhmRaDhXjmd1h5TPzZp4cNULKYgCA3HwMec",
  "key23": "3fTKGHyRFQwdvZc9hh4asVpAbT7f5apdAXTuDDpNDdb6BmLMzQ8VoJm9eh1eqPBmPfVSHz7h56y1fnEEbztEpF5u",
  "key24": "7hJDtZVjsfquTar1onr53zTwRiWesBWCUjMBLuHaPQhmQ9pJmG6JXwwZX6qQoK7CPWtKt2LYRee4jTVmdTt6J74",
  "key25": "5iQrF4jQ9YNGZwTHBR3FmFDDMnkDJpFTNH76jhA4qwnHBucAPjrKqH8CoMNmf9DaPem7zkh3acg9CmX22apxi4Ms",
  "key26": "4XPTXg6QdYviu1emD3XT8RDpmGQcws3VJuwHdLnPDAYNg9aY1Tv2suzarGKRwweCCch7tBH4zfvHHw2RCfi6YyMA",
  "key27": "5vBRzrkeWATNDDfJGyyPpWJgnCVR7UiREicHBLqu2wwaHBgrK4D7DGzyKePygUtVdYEXHCaJU9HvPQ2P3a3fBKNA",
  "key28": "2R3APRGaTkDGoraY8U5Xi6pM4sBGZYKKiqqiNiFJ9MNbRSGf2W1kbUCd37BQFTdWB3nxMLrZuKMNi5UJ9x8Z8Kj7"
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
