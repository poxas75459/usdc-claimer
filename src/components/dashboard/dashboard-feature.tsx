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
    "2wBSYkN6tkkUdnhsixAkfafSHBqdzRpsFYcXqutqzWXJj79CtBrk27fg3vRqVuWbfFPX9qGd2mpMpoYbbGz5iZgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57dnAfKY2qHcTMJvfQ63Nz568Tw149rqLUy7cYR2nuwYfdqMm3tfVijwSthPkvKA84Auo8e42Kghj2FCTfJWhr1i",
  "key1": "2UUyd5bi4RwhArpF51pQdkNdmRk2yzBZtPP8etN4yX29SNKvtHVCeb7dB6uuHzgopfrzjZ8A3znfjmJrQxpnhYYX",
  "key2": "3VYuGd9sCJ3qe982KvgmAp4ySNNUEFAxSjwPoXjNEQRvmLWdQhgmNpi8Dh8C7A8q2K9iQdZMS6WudQhCzBgvynop",
  "key3": "5fYiynQK8UvLRKYf4xQS7zo6Dg2655oYrut27F3HE6MKWHAyJ6JL8HJExcNdAWagHe2hgVXcyvvdMbgujyRk11nz",
  "key4": "4CnUVxsocG4Xh15gDjRr3ZQMf6NbLSRASvkBKSet9SExyePMBvwv73v5cCedMn8Do45DgbJ6nWZdNrLjdFsTzzWb",
  "key5": "5MuU1dPB1R5zBQKs5QX5CVhFkPwDRHj9rXDjVkvKqNQjhhV9ERfw66zUyShu1PGVh4xpjAgTvZkKRutjXWHpgrGW",
  "key6": "4ZUD21dWQjZssxv9MRmSqr1eouEGcg6TFW4haJPrYoUv3fB6orkYJ9FLMhLwerCEcuyJdARwtqxzS6AQRhRcZd3A",
  "key7": "29bsYf3rzH8CoiL8gpHDzP4SixdpH7XCu6qRHfHs2zEoZmiULfvcRLntR6EtxHqzwkcxbgzTnDMbtkqGeEAaQrVY",
  "key8": "CY51dejQDPJ1agQiNNLNY2xFUwNWjjCLVHHKu7Euq5Jrs8iJ4xCZGWZR3gEDKkApc4oyKbixaPpohd5BGstck9k",
  "key9": "DV5hCAGPrdrxb5zmiUof9PgZpEacMvnS3sB5mD2uRz4YYvxi1gBSEGFd2nXE1wNLDNsS3NvwDBibUfvYo8ZQWTK",
  "key10": "2AyU4Y2CdCZAFLczu3d3YwXvLyRvGgFzAxFnURfZUfL6kJHvpfXZckUHisTsDbFTGWwz8MF7nxnofnWCCKYSUfPY",
  "key11": "N9v9xATzsRd14W9CkVo5FZpFQdNjojyKfoN1iqQUe7Ken263ybQGyijuqd4cBWmatHFotw7KAWuBdeiSX5hEd8D",
  "key12": "4bCywddHQymRfF7rYRzBtAwGBPqsCcoM97BZQKi6YA47Evc6yFkP1pMxx2nEY2sfq1YRg7g5vZwrYCeAJM8denqy",
  "key13": "PkEXZhH28S1iGkLwWzD5owuHq3DZiodTbni2QmCnS3VFJCWwj3DJd4AnyksoHaEUpByAWVNJ4PXCz7LWaMW9q3i",
  "key14": "3eYkU7pswWcCuQhFUiXtmT2T3PYwaNCoHbaE5Qxm5CZfdNi1s9jRMxo3vTMqSxy1uFuN2vPC89XqnUcM3sBzianv",
  "key15": "4VJQ8iSoLdP8NLsq4XB5ZndKaJWNu4ixihfAJJkDLkvPd777f6HfZg5e5XvHX7Pi1kUYJkmKcQHMtQe4L9TfeuFe",
  "key16": "5UDu2UNNQubiBmwVWo5L1GpuUDmL6cAQPku3QRrAJuHJx1V8xLs8B6Kf37fZMUY1vo5Jac8ez73i9S1qdMYsNyL2",
  "key17": "57p1iyLP2pWD5mrbkDGk5sHDAXtiPXVi34WF36wpbhCfo3uPZQniN4dJRGXYdJVRsdViwryBy6fdQyRQod3GQgXj",
  "key18": "2TZ4NnTSVY9NAVGoGRdcwMj54WBnxoYbSN43wggCHcDEVSQmMzam4xx8hPXeYYMdRopA2daFG6543ExBxVDFqpWL",
  "key19": "3proFNXLsjFjdRvJL7rMh8UkoXxr27enVa6AsNgM2oLAHRguCENbdpEZ3T3utR6ErzqXqxhfzggnhREgEDTQ29kZ",
  "key20": "V1hYEXwUAKSbGFruxizQzAdMHrRTgWCzPFcTxHFLt6R64NyTreaDQfRqwA71FexS3bxrZueca8HyKgg4VkTh4hG",
  "key21": "ZZszV1UwFHh8QcDSdxK9ozbkPA1T2fZN9RfffCsiNWPDK1YDLuxPoRVN5AfEKqmsqQCmAfSL4BRcTqMX2GRNWW6",
  "key22": "5AdV4twq9MCWzWLR3repB7ND1AxqxSqBTVJwbf3YsfVu6qnwnBLJQ1gjpss2Z26DMjEysvGqdvHfXv3eZ6TcREkL",
  "key23": "B4PfSztxE4zvzaFFSUpQkZwMzPEKi8h2obt2Vfxp9PM3BwEtREcpzsDSWjL7ojcCnfwccmMNYRQbePJVxLpfb8c",
  "key24": "4H52aZiYc6xPasCYNEdt5du8F8PJ6P4C6A3K9kU3wRhcHq27T7nfo7FWRLDWwH8gYfkv4vdWcgTCyGUD5vR9Lv3K",
  "key25": "5CkSWfutqsPLn9CAQXKiG27ZL8MBf3RCdHvP5Hi3f2YTWkjSbCc1TKTyG1NJ5hvVHbBzgd1mQnSzmGKzBpEgDsrV",
  "key26": "MaWYmL174WU7MSYWdDcAsa7cbSYSp9hr66aqLAPBiMfJe1oKkDa8XLsnH8v84usn6VrEsBVjsc9EBRckbdPmqte",
  "key27": "2adawYQa5hybQrY9brJQVXNEF2Z8V5QwBY2QhZGZ9fauU7XgoenkpJP2szTmaDyDa5h3Miy4fAFVUFNZhMrzjXgw"
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
