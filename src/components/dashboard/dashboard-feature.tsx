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
    "5hqfYgDz136kKTTCsn7WSHYvCsZjfFf1Z1sSBNids8AQgmWoHvaCxznuAbRFwFNJg3tzscfE99qsUvLDudbXLnHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1iAfaFdXzamkAZb3HCqYxSJFt11E56WuaRYqUf1M8W4gRMf2BdNKn4eL9m5efkgY6GC28Hp4D537GhXZqNHJrEM",
  "key1": "GjwWhCqntzaJzstAZpwjT385AK3V9jhjfRFB9cvuuXSRPj6YaTL2fDdyaQbW8yc3GupLi9ZpmChpgWk6X72Anmv",
  "key2": "3YAShZ1i8AQtc9vrbU7JbLwj7EoyiRv1G6L1yPm7BxPAQ11vPhrJbM41rUxSWy2Vsn4Fc5Lom9LwAY9pskdNQki7",
  "key3": "4G5cyLgsGcCweLzjnai9wdpCWvm3NZA97v55JA4by9u11Xq2HoCyCCrhrF119vcxvbUcPeLZb2dLXFD5zS5NamDt",
  "key4": "66B8WfRVrVK86vvwwgLH1nysPPDqS7bqpnC6expUvQZagYsYhjY7HxDVb4Dh4hfGsHDkeCkJUNqQUfuiwziVGgm4",
  "key5": "3HNHexmAkyHqAvJGSsPPRQXxvMLP6ypsnBoMVeBzh8QSXpUDrUs6W7UucaZtn5oCszYpnFojwootdTGQF4A41rLv",
  "key6": "2apUFpFqL1ERM2FL27fFtbWZyLFGZ7DU5PrWHgGAv2qgeXfgy3K5okv5qtWzz4S5ySQewVsb2s7BNpsMy788LV3Z",
  "key7": "5XNMivCsyW2GQVao2f4FvxGqMVSwhipWxko5SgT73Vm8qC42gKz9VUeVyvV4cGaZFPeaHHuKQEMa5C4fbau1jazs",
  "key8": "3RqvdEBVXBBmdx4DRANPuGrySYtJEJyZLNX4u6fefqbSiQXyKCAbPZiNereUFvecDkHGRXUqXbV8uKntn7S96WLV",
  "key9": "4H5krB7naEdenJEBZ7NbrRG4KsfNozugqf4Nryd5CegHTuWifFmj8TgSuf9Thca6Cyh1Mru3ws48uS4a8YbBthcy",
  "key10": "3tuvzXcHyp5ZE3MzFFjSddqS5LPdcruhZ3Yor9kdPwn5Hy4FBDMY985H9N3to4qDANr9Pf6dXF2X5N2288iUJiwk",
  "key11": "2uKX7BGA5UNf2L4AoDn1iW9qQo9Pg6FqvAsiGCiD58rDg1CxPuDmvthgETH9MfzQin4ts64BbnmXxg7BZ5A4W2bD",
  "key12": "3fXMvVxY59Aqde5P43ihgzxDvnnyKUGdSNPSvf3QWAZSrAdbyGcbfXcFt3gihGJiNAtR24njd23jtj8J71pPiwNM",
  "key13": "X3GG4g6NMWMAH1KizPQJ6nZqnkznQhhDsUgjVzMQbxfKW4CLeQcwv7A3HSL5ikeQwSyHNvRRznidmvRUsB4TXSM",
  "key14": "5cj3pskUxhegYVCoFhi9geTrSZ89mmP2tvVdsdjaLsP3xPxwUHCkEtuyfDVM3KSbs8DrQ9mAWXkC7NgfncRjhfbi",
  "key15": "2SEa8ZuCJVgsmsaV6EssB5U8ua4b8wRyE5Vhj1yAZdMvwc7EgcJGxfJxUgZPGW7tt8rhHF8bmLAMduPt6RaxM1PL",
  "key16": "9sQbCtaeVuBRgEmRXCpnBrg6x41irMwSMfSVyea1FfeftHwHb8CXTUgzm9n4GKC6PNZZYkeH9qgpDMcF4cKBgbW",
  "key17": "aENYEKhg7o4w6BJAkwmkviKkMCJTqPi9Zkk4hisBdQaiu818gbDxnc3Hpi3rpmHNSzE8YSa81bmnuJa5g1pPhsb",
  "key18": "37B68QgsuSF5dcRVcrV7bKJGg5DcDfWnptKyaxEtXkBiEwhjDuhH9vGuxumURSee6iQKVADpea9ngqcQhkPaa48o",
  "key19": "2EsW4fCNGQsU18yXqp5iex3eiWbVL9m6HCMNL34eQQMbTsorHxFVnA5Rc6HSrVrCStZnRLsvwJfvoC8jnAAkjYGq",
  "key20": "KkiyeVWudPnJqbvvgprsqqAgETYnjq7VW5fLp2WnFs6LXjRvbWSGVi4t9kVYmNVYHre2ggdXVq65vSemZbzFWRe",
  "key21": "4VciXMkL6upWuVbDpE3wA52KPe33SxWhsyiq4iSocwujUmbSkrNEy7X4qyMH62mH3xwZN1JtHsrmbPvoYLJNd8i2",
  "key22": "23zpNwkxNKmbQiJ3x6HMEb2RmfhqEVxMG6RURcitCb6WUSUYyhAnobmBHzcDAMB1zhXTxULsNxk2AfWcMf7qppAM",
  "key23": "2fQ9dSLnPtrSHX3K7ZE9qmKya95SD3knpZdjmGY9eD3tpxKYqtcba5iaDiKZ6AP9rq2Q2eGrgGHRbA5gg3u4kNdi",
  "key24": "57U8RCFjZAFh6LQDa6DmCJMsEKTFZ5cYLmGXCUGihASQSFZqaGCM6D3XT1s7RGysehoPBW8h39FkGoQJUttAKDQS",
  "key25": "58HHE89DgCcQy22DBbzxUs4wou341GyN6pWVwK6HRGo1RxLQDH2nJYMCnXUUhp2tg61z91z8VrHbcgh1nFgBoDTd",
  "key26": "3FfiSS5DDwngjzehvFfhn54zhWuBQcjQ8aBrD5fJBrS7hfH2H4CA8FX7bwpPE2NaRP92X6ZBU9t1xnzJ29hNVEBV",
  "key27": "KoJT5jKwsQVN5SY4U8PbDGxfXZGKPk9Ts2bM7dQPZp5NZriZneiZvMPN7ytVMLxjvvSE6PkTj88dEE7LLGZztfV",
  "key28": "5U318VzwLVjXTBv2unAGaMGZrtJv7rVoHTRDw7QK7pDPYv5kJKCj4ZxNiRqrb1ZXvFUXZqK9vzV6UgFzai1XgBFE",
  "key29": "5CVb4GuRD6cDS3zJjj2KnqAMhT7rFJLPGavu5xzw3P8mDsxMs99jPytpgijNsrMGhQ5kiv7aTYr5nSjci3QSDYKw",
  "key30": "eJm49Ro9Sj3Yi4GyfMy951A14qDk4F3vzrDaGNktckgEUqwAxPHM6yghjiGiJEGWkHPvDsNVLnKAhX2MeUzPEnp"
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
