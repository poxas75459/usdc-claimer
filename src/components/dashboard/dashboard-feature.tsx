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
    "71zZVVJJTNCR1A6tAMDwR5Zi4moJQxE7gqry5PokjdSBgLi5H8Gr4395AaHZ7C5RjNX8RkVHVgoxwFMwwRSvE1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f1w65on86sF5Soib7F2GkMxtbba1AupdJoF3wEJDAPbqX5LYtvcFfmt1B431Vs7TRgE8MH7wkoQ7uzZDVCtkM8C",
  "key1": "3vKomnPiDf8bxA9UnRJhPgxkMZrMs99wSdExn6b29LQcy6TJ4EfjW3FWmEQYPZG8ss7ZPB9feSUHJbbmRmxbaCud",
  "key2": "ZuhRiTgdZaVeivWW92VfnpWsEyo3oFKLpJtuoMBZKmg94PkWiyDTFRwxukNMX9QVJndbJT2b8BtUH9rAfRMWtR4",
  "key3": "5gQPSkBFj8DQMajto3WTBQeMAEkQvKHUaMM9KNBQezqrujUBTW8aKrpBiDMvibThr85vMzvLMjnMEPpKeBAtFxQN",
  "key4": "2kA6zFUPZoDy5xQNaYVGjnyh6WPWBDez1YpUDqKtgRKQ55NYzX73EGGPcNBHpih8M4Y7jMhajjHQShKHBcp671qP",
  "key5": "63Ad1PKaFuMXqpyddKSCWonCBwzNd5AYA6L2Kwt62zAoNnFDH52xz6sh3DWSPkuyFaZ5FxKohU2YYkQZE4xu5rXB",
  "key6": "2Y2jo2pPiwyVGVivYs77MjtFzpQfvQmrUuTFt959wZkqruCU9Wxcg6bxugcAhJXWtqoH11q8rpaqh1AjbHq8vsGN",
  "key7": "474ERNiKa1yKUZULUehcaBwAJwEm3EWzRfAdqdowt9doZRmxLaitcZQGvjuKzSsmut2hb4wd6Cv7qPU1RG7ypsKL",
  "key8": "53p7raAr7L1LwsVZn5dEFbrUDDPGFkgyeZBJD7JAPQZQ7c8wPKJu18563Lv8gQoENaeXY2rQXojD1WM72fTbZokY",
  "key9": "2C83Zt9sbkyK92JPnfw47B2emJF6STLMgEkTHQKhx4N7PFSrvjJvtJy3EkTw5xcDXhzXNqBczgh2Kks458xf8mh9",
  "key10": "3r9GNzo4nPTZy22wBJcWRumRYH92t4biMRt6GkqtDW9bZZ98J8hdRSBaW1ANshps7efv3P2cRdpdf2mTczh8dgAR",
  "key11": "2gaGj5rSLcDyfbzeKdgCrXxHejaVPSCKsnqJxw5tBg3W5k1ri9YZn7PjV7d4KuDPEZGdqWFzb52pXauUBbYm7Cf4",
  "key12": "2BxDkBuwUVhNxqJpWRJVhST4UTCb9MHdspYuq15RZ5CvDV85Ewj5q73PCZmjqaMTon6MJWbEQemFKdYMxZo6FpMF",
  "key13": "5x5iSwpqC7n6hq4fmEhKGhSnDceWgmU8rMkioFjGvhfE1vguxAeJQTdHMMWsXKfsRw8Yszca3ym71qS2A7hTTBfz",
  "key14": "5z6S5GLNSNjqcRmkomHpDJNvy1RVW1hjrsAjD5Q3KBidZgxFn21AwskZFpEDBDEWp61bLpdM1oDVathioDZ2ow4u",
  "key15": "4kDjCCmgU1ygv4y7TdqbbHg8EK5Vi3nwpmZq95cituMCYmXBHaZnuNrixugXfx2wKhXrU2gGuZXrBS3jPhvUoMYq",
  "key16": "2oBFcAVZMaQU1DB9zVYNvoTDJmzELHvRybiV5P2yGuB1pFD9LbthtxjmU6KNa3jXMUDx6fAjuhDqtfhRnMfKwDAD",
  "key17": "2pm6vrZk9wwJxXeiaqykzXpnCHmevW3mUd5eH3s1DZwz6vVTBbKfwt1TgQAEEDbE8Z1yxPFKypYXVYXqaampEqaX",
  "key18": "agd3K5X3AmVV1KDUPnAivM21x7RHvFLH5k74XDzH7qPTmGHxy9yEwk8NosrmQBgNfabUTSv9u919NLLVo8m91TW",
  "key19": "brPvnnzWzkuNxJhxnDKCWNWGKg7UQyYK6x7pyv3aTY5KewKVLHJhpB5KGJDLy6nV6PJmPW38tSp3CJTYGMs9XZM",
  "key20": "3HxYQfwdPUuXHosmCM7W1J8tr12agjYwGwDaU5DN4JRFmQ4yR4gzmJGuaTNaEY2PPBQ6hKCbaMSoms7DXvmuSk9N",
  "key21": "4pRgrxGahJb9x9ujEzUGsnYHP9b2RP9YqjtJXEaSNyPagpggdicZ4PtKJWHZ9vF5p7Z3XUqBa5TGyS92YDwtqoPr",
  "key22": "32HVDj6PKdMcd7o94XN8pbD3B7o1hcyD3V2AhVLRuc1NdxJys3YnXg2kEMNGJVsX4gjszmHYgGnhvimeB6goRrgR",
  "key23": "21YqLxQX1cmCaud2rw6XKw9J6WmsiBUyRRJpXQeWFxehYvQKUQrJ3vTbUL8WMGbytegLAemgeTjeH7sUpZrHLhvt",
  "key24": "3bdgmwocvS2gCMyWdTBXuP6oQ6v1jnRGi1WcteyVSYwB1ad8f64C9WN9V8TYvNEjEDP7rh4eFXaupKzTb8cgS3vL",
  "key25": "4PXrfAZcRAaonkQFfZHepjiFC98LrBKibVQEVPidsovH1bGxJFFMqoEyvrrrz1dTBY2wgsP7Cs1dPqqX12JoZmMK",
  "key26": "2yKAvabVBfJZx78ZdUdvNtMB8hfY1HoaXuyVrTtje7m4czYfFv451AAFNdPH34BT8RNY4rQQQjtYx6QsV1j7B8xi",
  "key27": "52Tky85cLPTy76c8s7jrLSg5XXGfydeSdFyNhBknLxt9XhTF8mRkzpZvCCb3w7HA6pv5t3yCeDCFmq3KxHDMLg3K",
  "key28": "gqPEMsRWPVpi24SiiGpJ3anAaxMzJ1GKwU2GyCi2uh2sGpeRRvJKxNbmDzLGWSRFvUTogqbj81rseEaTv2YvQar",
  "key29": "32tNz8DvR3oJiqGVtjGCFqko7bBYse4juM9WApXxg7o95bJcuQvLwKThxghUypwEptKVRr3JrApk7RxCoNVxUoLx",
  "key30": "2gWPuSpAitcztGnELY2ihdwim2R9wueqacTQEFAVVSxkf84BmzaLXidUYWieRSDzJidL1vZ8spT895GDcrbuJp4L",
  "key31": "3R2MDoTVCVv9j2gngCZpfonyWeHP2FSjSuaRuhAvKVUwCDLfDkGSeK7ATSPGTwJRPFWAJKjgeDcNB1jmrF1qzv9A",
  "key32": "3pXucm76UvGFq9i7Dspvebz557PZr9PPKTD84hAxKPY9Yfi13CVWoCjZo79m1rNZK5s1StEgaFsyFjP6bvbwWwit",
  "key33": "2QtUG2cWRsxva1vUuAz9xgd4kibe8mMZKHrbGsoehztJzeSbcTdPx9few2L6LY28WyhYijZBqTyUHaT2BhpyHFu6",
  "key34": "6xNoPsaSLZfGoe8kGAtKYLJvRKoTafjnCtwMMC8W4SkH64o2n4JXsX1GRzL4uuWatEEwAYGEpe4riHo94q9EcdT",
  "key35": "54k7fseFYMnFBC6usssmJRFXWdyLzXXWWZLfNpnt6fUKXtWDCVPnWs2BSE2jCrV72ReBSd5KzqX3iRc2jNez2zwH",
  "key36": "61FRayiWSHHdSUcY2NwY4Wfw8LqSxwGwSZrPp66ZXEgA3oMcE6NdH6qC3HDi9ANwGU2REvDsUdUz1NfKKsH9XXTT",
  "key37": "VsJvTJCik8JoZCXHPAHPB5JBXJBL827dymptwTn7cpMCXBvqREp8bLBbSep9yrHq5aQGBVmRchmjd3MqP3GCJBi",
  "key38": "3jP6iCKZtsK6Mv7sY1vLBzdzYYhCAwgwoCrNpVMQArYTyiC3BYRPTsqh54svsnQCHibbKwnyoKWFQ1T3u9aJMWqb",
  "key39": "51QFJQX3XH9D3MPMWv9saYUEWiJBFzttZwuVET8x1YbBbRvmKaDBm1gAn77Vr4zboturYH3Tchf8i7TiMZA6VZCK",
  "key40": "5hsVeUwWhCE187ANG6iRRAnkXv53d84b6DCx45eT69cj7f4VRMuhvTyKUAxhHg4dYuKoNtikFMA8nhnFRAs2DWFG",
  "key41": "YYDXwH2xjxcgNKgDQgSJ6NoMAgxvzhX6nXLkBwMGkLDKtZ6YjbBRDEMJDpcHr7HKSmjcqctapXm7ZiNoMU93eiz",
  "key42": "2gWqW5PQHcconnyPeuUiRvGYmfWC2XQBcSATQaz3rbHQsNC4PSmAn99pq4LmcaFTXg5b5DSmTocVLaabmJHRYTZ",
  "key43": "Z48q5QMi4mc6xFno4uvDJzTYGDZM9z92cxZKZaGohDkxhR8JNzAaFGABiE9PSJgJRUS5U4Ka6GMQafp38PxMcP6"
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
