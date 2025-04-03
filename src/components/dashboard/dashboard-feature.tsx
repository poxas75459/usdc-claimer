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
    "4QPJz5qZvDYciy1hCAY8n3UrdR2eAewwpFr8YrQpQHWNAN3V1ZWkSMSWJZFrkd5wPeKbfyHqwPQUhq2RJ1z9vet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4crfAxssWe5gaZYxnPESVbvoZxCazoEsgmgefoTPFds1hKVEkjmLgEsF2k62wH6kvYpidpDJsRv2ZxWWa93arC2Q",
  "key1": "5Rv41u6L85GKjr7Hsb9RSvFXPSavsa5Grte3sLRkZC8k4TV2T45cg3aqbNGaiMqXXx3ECUj9BgVTdVNo1K3h7RJU",
  "key2": "41cpjbhxBNjTTYxvLnuSFuqqjTnZAcuSpia5N269SXmTECdqXH5upRaE5vGaNBFTsq93xr27kJt4dBFkWUy9DrCS",
  "key3": "5S5xMXnFFWbcH8DP7XvGgZseHQ6o8CeGzgDqEVRpWXTpz22CtcuRLFxbMK11kGz9gYtkihi535AgYuHNH43GmaUx",
  "key4": "md96hg3SmxBtsDuwkSNwqbixVfRJLJ8BT1nzc7rFjn1QSWdL7JrexsQZwHM63VGDdm2pkgeLbVtVSzPHP94LrLk",
  "key5": "3hWUwUqxuQFf2eUrGrV6UimoRxwHfCSnG7bpwqPF8sCTapeCA4GsYb5wjrrFce8ixgGYb3stRAJ1bCuWU7HdcokR",
  "key6": "Q1aVTy4mWCgGmSsqv6f3QzAoeUuP293qv2i9vH4e5LAW8Yrdqdp5aREufxkKqHcVkBxJZSkUzsMye6VH3sZfniB",
  "key7": "5RoHdejECjAM8r2RFEzgMF2my1bnswBaUVeQxXEoviyUCbfhMJkrwSHCjTnmi8DFJuJ4dSrSGeaQsdnzJk4VRJ73",
  "key8": "5n1wgf2dKKtc8rgTAyrihCBQgrwQShULa2trnB3pnPVNzQayERm1AkbNnhxtxVYTPZKrnqwrMisGchxsU7bHQruW",
  "key9": "45xoZQnKs8WfVgwv22uAZjJRWnFiB3s6Fzu3XYtzbzZGMdYvBS2q4ShHi1RH6JVyXx9XqCabf7fk3tvvKWFw9ndt",
  "key10": "3e1WeKM4zEU6SM3dxSWRxL4sWzRodZie87HUbYHwAZ77Z2QG6infyNqKz9H3u1YKtd3qft79E77TvMzcXD3EBVs4",
  "key11": "5ntoKZtGYpp1DBDizvT73H6uPtjsCUx2TCwqiK9VMyhTCfHUGZS7hEHgo99PGq5EzXWVsCpRyj1E5NMeFpwjTfg1",
  "key12": "3JYyCYugrBPjgoPZFcukNCNaFmV18Xsh1XSMm238W1qjkdx8EgL5dqKU5KFykvPkV2s1ZZBkpJ9gQ5mcZ2HS1nd4",
  "key13": "2EcEm6iV1N7vEmmnGVhP9W6dsMXBKrLKQ4a6SgszygsVKvg8WtVV9EKB7Nz6uoa28BYcjdo6rJx1isjDoZNoHvy8",
  "key14": "YA6WZXov6DqMadfqZs2xbpMBmuBDjJeQLeRoYaLLXgt3aMGYGuDANheku6nfAmVBqw4Q8PcmtceZ7faJoFCgcs3",
  "key15": "5RQsrXcHXdNrYgpXGHiTtxxzJrYUt3k5pHhTxijZne8fqbBcviWUP3Aehwwio57EhHqL94XiA3ZXjVqQw49vtsHT",
  "key16": "5voDMqMhUzHxkAR782V76ShuPHdZ51bSazsiS2kA5ADWAifiTHJfagrX43Fw9E6eNMuwCYk7yosKFdCdMkiZ9aR8",
  "key17": "4S5BmzgGqmn8tsA7jnVvLP76rQZKdDbaVyiFq8t7uG6vKF5K4pC3bT4PPWE4wXyArKd3d9eCCn3dryKiJzKZz35B",
  "key18": "3SF4rCcSBkBoQhErW7sFt2Z7VB83sZREAT2zLi2uJb2AK9njzEfiEuoxMv8mbXz9PMtnwgauZG6oHHTC95akZR1z",
  "key19": "3YLLpFTLRDJdukfzeccTnPMiioieDFw6KCNpjXHF36FKDnyAdfVgPZhufiXAEKt45pE1WCFJEEMng8uzNkeV8MMj",
  "key20": "5z67KGDPM1s87936AGgf6wzBJDD7DYqfYsPsxfuGCJPWmqNmLP5Gcrm9GPscQuZpNRUYgUPbfwSuG7KwXC6DacvF",
  "key21": "3nA2uN2N7vuAnwGTAReSrRMRzswsebRERhVXuNSiMxs4EJY3PhiPwE64HXox7EgH9hdmdaBSDqSEPppCQWJ7X4eB",
  "key22": "4pXrn2wZj5UxzizCforBDK5GPpSEcSW1SjxPBiPbhEpHWeCzLcr5MdX7UiFCXsZPfcepXXvsyqZGTuqvzKfrDd1f",
  "key23": "3xncd2pWm3RURzD66SWCzSaLWvYyPk5o24JV1yg1ZyX35tqBzB1RPU2zw5JETdgkqegtJXqUqbaQhD8Xua8ay9oN",
  "key24": "122if1br9h5zo8S18TMXvMrHqzsSUiaoRpUo6UWWkWK6gceZzggnXwVatuW1GqVPZZJ6Y7qvUnqfaaia2z6mR64r",
  "key25": "6MmCQDnE4enAzJAPKE5mQse8hyKgi1MaQQvxJzJi7MUeLK9MpnomjGo1viL9SCTkf6XFpyaTy2AZJYnbVHNKoaU",
  "key26": "jh1kUhiBhbWM9iEwT3N8SgQXFmh79PX8fG8j2Rh9YpBurWiaakMizogeAqpN3YeqNPp6LULStVLv1VR84aPq1du",
  "key27": "4WpFjQwr9ZJ6GAF4yKzLvZELQon5rgNKDGYyy5oEHdkP9BajeB5ouzHVcGau2ZovcYc1nfbC5LQrBT4sJZjK8TrY",
  "key28": "671sMApzyFTKNkotMEbJomEM6dWHFzQSmnHg3KKSRdNWEENb4V81e2C5GtpXehVyVt3KAFZNpNZaWj64emnaJPJc",
  "key29": "RHSX1x5A37eiuRwzYjeeaNdJQJ5Ht4EqosxL6NFQQUPq1qVnqBua6HUSjLJw15jhm8o1nj3hHCofCaWhXxUyWxB",
  "key30": "45MPnX6DnkN4SqMZdKAkHQPwzUbHxhr7n2Rdx7uQU53P69KSGR5bM6Wzbh9gXdyEreLTF72xk53gggPiQbFtnA3s",
  "key31": "34hGW7j7Ey9ZZe7JMYWVikY9QDaioPgFi3aM8hqRF8PScxFcqccbD5NA99SVzZCViUkD8RCWSKBVCwSLRjetqUna",
  "key32": "5ZK756WHtBTMSFTLbCDvMB2gKhKNo2LvZA2izE5mPj4pzbE13u9jYtEzXQZu2nHdFEhEbNATdcrxsSTN9gqGCDe",
  "key33": "9L3K9c2Egz58zakHCbrX7xfFMbzSKNtf9b658t88VthMLFq6S1sF2qHpuR2jo8mHZESizBN9vJCt3xBg9pKA53x",
  "key34": "42Bpz2DzCM2mhdETgsBnpzeCFwdt4yejtWG968heYWCRuh1dai79Rtqf2jBzhdQGhPtTN65SoHVNsEbwA4XYiK2A",
  "key35": "3zddyQQ5GEfL1EbMw3Errd6pKDyY2DJYYbU1Txx7dxK8hdtVMxxDb7grRRjEUwBVa4PGqVLfwmH4umSqHPrU9zL2",
  "key36": "2A7rqd3SztG9HNwomrFMVs9y47fxQESsBxqjgGxrFXsx3WSLjpqZchWb4yMhMtLAEv9Cmyfbgnxkd2HF2xukysWT",
  "key37": "5spbTMTCDZsKJK8yv3pKyW1rxVzmrn7LuX9sY6BqGkqq7QHSxFvqq8b2otaFZiRLzUWKJprwLo8uuZkY28FjGGPs",
  "key38": "e1LH5y87RbiUkKjPKQXixchas7cP3z5csiRmoLrq1mu8a8i3KnGySHNCzaFtrUtqK5iERsgw56GTe6UjnFd5WCE",
  "key39": "4ceUVh9WQrVRUmnXjFvB1cVadDYTc6iv8wsvrnqmtEjPqYErnJ32A1k4cjwzh98mh9NVLg3m4cKXtrvYSEBTw4ot",
  "key40": "3H8TY7eHK1kPZvMaYjxiktRWXuP4ALkbZ8PYkEqBfLjVdd6aDGUxk8rkAi23dW69SnTev5N3oKe2mCkpigKZfjkQ",
  "key41": "2vE1juqx1GFd8jk1qdaRfRZqHWGffgPh8z5X7rMEUk8aGngPWNxwqA935b9Faf1NFoKcQrsbn35TR4xb95GWUb57",
  "key42": "2WcuEZ5iVi5p7cWsPc9pjAyCaq2xzQQXp7Hi6YCy1MJsQjNU9h7Uqgc4yVhJhLphzyeZNMKEF2JxLKfnrsEsvZSn",
  "key43": "3BBdS7nhEbnP1ThSd5qzFrMheZUQZjBC9umjsNkBM2q9FJTQVWPowskxFs6jioB6U6hac4s2Z66L9mCKok8df85j",
  "key44": "5nwRkhhoaP8PhTMBYxevzXcukQTjrnxmLetc98LQy9ULbF4LidhAYsQZgVnAoMcmz42Fm9rCKvZYntZbkTDs6ozo",
  "key45": "zW29zDSUX4nX2aHMEQC5phD49VTHCC1HWfbjdYLR6xFczqAjuVT7jmBV8A33wogjo7pFraFhmHSBKfvJw5u476f"
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
