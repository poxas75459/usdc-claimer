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
    "4A18gyPjfScizH8EZZE9uuQDY6ZJsvdftua4CeoMJq9ctzRQSiEnTiGYXojxkKHS8EUgrdja1BVYSLj5VZEhFCZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5krjo4SbHHeDu4cfTS9sMFV34bpi9qXqk3rXkpXPPU42rPXmTYhN6A3gPkt5dA8NCrhFJkZccAS4Q6oUFn5hJvoJ",
  "key1": "5xAJfc5zQhJ4EoT5fcgTwC5bp5Ta2YqhfS1XBNu8JD8crJnJudEYfYjP1ZRSyeToxpbPBuSDoVsEsm5NH3qdmAJ6",
  "key2": "3ELNBxrEDtwV84EEvNUpmEgHWV8wFJ6qQTJWJqGG7qfUQUpeQ6kRM6shHajAijr3Yx1nzT3mHSWx3fBBtvMMkyMi",
  "key3": "5PgnQu46ykwjGaBB4JdQauFbYuU89xcQKRpvHjJ57kRpHGZ97u8tcSG3p4paTKPNeWMtBebKBgUjxvLk4mS7CqVp",
  "key4": "4zhuK5VJioy8J58N1CVG3o2prA9gsUSSP9cUcnJce4xqVM9g5tDLJMY3k9FxyeJ7EGKHFPET5Ms2XUJ352j3x54v",
  "key5": "48vfnCTqt3AV21qgP7XZf4VKZZ1kKHDtmZqHvLkFW8xNVd5FDg3VCNN5AyDM98sxAQY2Cp72JugWXbCv4UNGPbzs",
  "key6": "28xD73unmNFK2sx8vVyzKsjdfC1QGH383SPwDkZiusm12T7SJiSogLQxfoyjpudzX3juNkv2Fd72ppTkkmNVtmsx",
  "key7": "5nzMqfBoRQh7Z8yzmKqhnLhy6AymfGHBY16zKDyncmoS89xK5zPCHkrGRgDqK3cNKrrkN6d8NLQKn7T37nCsTVfw",
  "key8": "646LUBordCYNwgqYH3c1bm3kJUsVo14MT73Wwe8x26kgqiPFEsediHLzRVoeadB9Gat8zDtrDR2UkBzBo3sA3pvZ",
  "key9": "4BFkt4RwTTdsM8t4do2TWZZJ8jyLFDPzcJrmBM7WPA2UcWdkWW5QTr7UW1PoKfL2jw6mjyCAMHh59QwdrcmtiJvR",
  "key10": "3SK3PgaUeh43tsgfqQmfSd3ZsFPuTpKqLtYNZerDgv9UZBevqC6HvR7WyD37EmaF55g2zRg53wgj9YVM2xvH59Gy",
  "key11": "4ZhsyzgN8HwgZjSWKB4P1Sei4t4EB9FrPQBgheJb1UKcGA6hbdAFfYK8U4yxZ6CQARZmQBCB7AqN2LLZYpk146bz",
  "key12": "63GEjo1fD9RdjzdrbLkQzxfWW9LWsUtiHp68yMiVQCZqQNvSCQwzBKAyqymaPxhwnQTNDJPms635UQLB69DoHAqe",
  "key13": "azkdChHpevdto9RPzxuBbCJP9LtBUs4TpgAsTRZCZNC7XjvoCw5Bns29qRLhpcj1Y6YBwwMoD7wTmBYPRUKMb9u",
  "key14": "5w6mjbfc9bpQibFFoaBHXF8c4WYBfoYCywxuHXEG9ew789nDwc6XeVzrAqmsu5r6poBKKGNrdR8Y6YzqszVVbje6",
  "key15": "4ozkUVRU7xPwma6yXxyXgxP3epMwU1d3PpVxSN4X7EksmxTpCsdL8UndQvL6roy24eQDv8mLjccYcKKtXXngYwee",
  "key16": "3EVaWfYg3y5d3kPd2UwmYYueR9GGd9VFEW48x6sXhAmHoYF4Po8uVW2NauviuHMwspSXJYgZHoApiSfv2qWohAc5",
  "key17": "5aqhCrJunZDAwRoifs9jtXLKQs9JsJVrVD7c9LmpNkqgT4C3Ek7USXxBNuSgrxCF4ruWKuKhQb3K2cTdiiBYTiZQ",
  "key18": "3uBNtJQdK6P3StJmQZez9ZiKCXXUjnbTfwgvwzEw7vRjg1VZaLj5WeSvba3PnjV4Hqd8nVaoa2ThEfXJdn6iHoWf",
  "key19": "2TfaLYQVrgkGCEwuZCB77eWjW51LVHeNoc3yB9N9aJmBpS6mdk8auFAqFAJrx5dDzjwfBJfCRsMppCsSTpecE3Qq",
  "key20": "2WbQ7NiGTuokdc2GVqiwMmyA8Lv3fP9GvSJQqeYxHirBpatCSdXaCJwe4TZNk5QVsVEhTo7UR4iMms5f1Huh1z3Y",
  "key21": "N5KS24EZerMsjuuoSMQ6k4nf2Xh5HraMiGEyGxSrUPor11KNKHrGyFmqxvZ96c2pc3NcUA8btTYQJ1LkiiqYZdG",
  "key22": "298uq8f2QWEZgruaC2ncgVtpSV5q2u1sQLZw8NNTYFLRWtWfPLKLyJvDufQCM4xUnNRRGgAzPGViNqiWeiF2n6hF",
  "key23": "5M1AtXG1vhF9ScFy5YbcQniMPf7civhcSKAZnX6uWavb7dW5iUgvcsMAsHSgwkQaSDdctzEJNGPDZKPUJjTrZZKJ",
  "key24": "38mchsLakWLcY45vSD8zVrJq2gKYkjTGHd4W8GiNfARD23uRp2bwx9UPu25bYjagLH8UbwCsYKp2G5v2S9Py88mM"
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
