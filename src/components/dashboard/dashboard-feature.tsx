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
    "2kzL85B6WnMWXrwzggQ7WVKke6Gsc1ZczfwFdJVq63XfeW2493nnWd47R2SZP9gdnLvG8kQXAEK66A9gNYc215CH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "519CukM9f7WesVZ8wt7EouwLwsrKvK79u9hZP1XKiXwzZ6YX52Hfez1LKdMUtHKKtSHB3PUHxYXfZcgTGCo7fg8V",
  "key1": "xtCapBwu8mc88VSxn5ktuhfhxxS9QAWr8ApGiUidg8kn2YS2T31hrNFWKVpYEksVKeUQKFVfbvfhyYPQPdkdELE",
  "key2": "4Z8pUamSoUkRBCQQnEFpiR6t23X6mFiwofa2w7WQeXACAvBqgx1dLbNjgcxpAmtwmpb3avCv8smhi1pTuQ5WNtYY",
  "key3": "4JMWeE9uH98PPLyvVwzZQfbD2XG9CtwNT1HsctV4SAGp8jawKsf9QakAAZyNE6MBJAsruejPyKArdzuV2mkN5pYQ",
  "key4": "uxtqc1ZJZib8Y6nApmz1WRS5kDUsdbMEdCiqohKJucDaKrA8bWdbcmg9jwN4G2Rry5ZCaEFpYUCoNd1YRBTd8y7",
  "key5": "2nNA6HAa2nWtcMvB1gTHnZJd7uqLH6gMw1sSG7sMoaVe7yqHQ7QKoH4Qo9dXLsj6wTX7mbBoGxdywG6AUUr5zdEj",
  "key6": "32jVGhavS7yddybW4xaTGXqY9VKC6cZf3YWoUmYTy69stkvM4kdevWtmxBeiKEG6aGeQDsu8PmXkVyUDE9by2auz",
  "key7": "uPzc9RRmCk3dPGhXhMKsEcizuX4NkNaWGy7pd65E4gAEtZ31DEJ8AjrBmfoFVgUxkuNRQDF6SfwfDiLdjehPHq6",
  "key8": "2u3qHy8vtVJ8S4BQ4nuZw9rc5y4qKV2WP3zEYeoJbgxV1wwYn3mggnEF5mUS4xmXKGgLdE8npi4XZ6REvu3wAJ37",
  "key9": "3Vg5eX4ET3jXVFK8AYnNT5czT4Uj99XVZuZtt47oj47p6C9s8g1i5GtUmUCo3V6uTZ3nTx9SdCjpFazDkzZFvTD1",
  "key10": "5yUALBcUuM6gqatAYqGgcVwnFJXNxdufmwmB9bCtuB92xi1xPnotZEQhXLLFebqYU5aKLcTeRQt58BseJucFLgLF",
  "key11": "W6dB2fU7TScEfp485rZuxDtRgBTmcFzn9dLKvNNTKQ8knuev7tE445RUqEknHTnUeyRFeMujCDrupywzWpmE4G7",
  "key12": "3jiFay8xF6ng9TnBh4cuJgPsn8GV8bH65dzxpK59t1EoNpJXQEzqaNb8py8GYUZXEMRJQyznyhhTm3T5anEkkv2U",
  "key13": "XuGg4YSAKBZEFseuCAhxaZp4XqBZhnZTZ7e2jr5xapfKa3TVyPUbuKKZ1oarS3XdoX5skm1yQcSzxasPaArPZaZ",
  "key14": "2izazowoyE9ywTgCSgPL1MeNLprfjPw2t2FzEE4zz7vSAyeFG8GrbK3qVcMb8vHYw51VnZ6XcdnK4cwbC333ss8Y",
  "key15": "4zirnuWzcEkT1FEh2EbinJ4mf4t74iqA9yQsVDTX1AjmDxwiuZEtLsof2pKa83wBk94K4hdQ3XdHybqtT1E5u3FV",
  "key16": "ZQHRvAyrQXXDoY17Php9t1fZs3H7tXfe86SWPWrHFAkRCiy2Byw9P7cfv98RMB3rgPWMmZvFH8U3YsCWrL1B2GR",
  "key17": "2Qb9w3MPzmTNqZ63qADNbCACgyqmQEgfATq3fPxNoaZTA3VrmDoSFvPryHHNyEGR97z4Nod3snCucvD6XkaEjA5k",
  "key18": "4tRA8xUMooLDNwhx1bqLfoJ3z7ZAm4hVcCG1TrJYgTkbRYTHmwjtTgybhRk74Vsv9kJLR8nCde3bUoWyUTQrv9qM",
  "key19": "2m55Vwbd2DuXFtLgwdRknPavFpqXZe51dpa8GnvQghJDc9uKgFrfrjVS5WT54QdMbP3C86oT2Ytir3qpXWBf5mVx",
  "key20": "3DG1RAGSb6K2gfGbEzG2uCD5mwndG7XvHjJXWS4hASxRtaZwmUPSyMTDWyMAbiNUaBaw39V2hbbvQ1ziosXU7Jxh",
  "key21": "GHxXucRmfjrygaFt4Q6KRK5h16BUrwp6uT5KXS7pf2qbrHi5VJUJwqLtZTBE98o5jHBnPb7yJLDdWpcnitPMGpu",
  "key22": "2ZG7PY1deWwQ615EHwPbhzgPtLLEcdjaNagV8bgJP7MVPSM2dmGTYNiGmg9EzUMoAKxq5kmUgoP25zDJR83FVF2y",
  "key23": "5RUEKRXxjL2bQSeFocv6rMwVF9DEQAX1rs8URmamGeY6dV2KAajJAQKkfbLU5cr8Nqse3YnMLZNYur6LiPy1sTeo",
  "key24": "4dfdnDWKqhm2spkAPKJXQQCUyMzQtfrxWRkvcjrSWXX1U65AnfUyvphMfgX58iqoCvRCRHJHkwJV93WXrgQqp79h",
  "key25": "ajVzNKopqsE5TqVULhc63nq2erEVYpRsYoKFej168qRBHPMArzdV2K6d2YYWC2nGYDtme2rxm2cWSQxX5z3DnJN",
  "key26": "4G5d2uT9sD84gEk5Yg6Bh5rnugsQKfFWtJrqifMHURQ7VwdLiYuu2hHFBqHrrw3QbJGJTwak2wNJMfhun2NwyJkT",
  "key27": "4TWQtHhRfDbCu7tj5RwNy1oTS7GvJkCsqoPfWtqYUZHDZb25Vyjt1wxRn1aqzDsPy9AFsXWAQvCxA2kPsb8AMhdA",
  "key28": "9UhDSHzjwF3AfFNHSkTAgHfpQosMc2Hkh62fnySFW6UB6GTUCo7aNBB5fLG7M2vtT8fCB4iZ3Jc41oFbuJvGLaq",
  "key29": "65NVee6e8ukbbqyHw6MpxqQ9osjwstxYg5Jsk4QSr4iQmSHuCh9vmvxPvLMMKwP1iXynAJL53ycnw5gqxzgrape8",
  "key30": "4KHEgkCTfWb6nTz9bJuN5PVjv3Wj7EWW2LZQBzKziWedvmxdhRni6z8ErKraYmoJ7Y9BgBbsQ7gSp48DrZ8BtpHN",
  "key31": "5BgMmK7jt8ngZMfabFzvT7W4RxRzBugrgkSQpGTeFR9hNmQ4PPCQ6N31cUPsZVaXwD1zrconYRGQhNkFyCqsUfET"
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
