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
    "3Fac3fqm8qtZxoiiL1yMqPtw7RwcwXsV7RsWu4GrmGXvx7VqCqy8AAKadTe7yAo8APVPWaMGUVm63kyFDy4Aiu9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SWFWobxAod1WXVxWGs59yDpWhGyHoudw6h92HKJNLwP4m8uwA94wbeh6wyycUpdELrKVKepFckktLMX38gbdgek",
  "key1": "5chDFu1CpNgubdqKp7WR8qaUkLREFdNsC5eEGGoNddfMaHj1kKLZrrMkuPkx44mZst1vctNRFzkA7DzYHDqmugoh",
  "key2": "uB6VJcVKP2BC7oytrZBNgbJEjTn5Bhrb6HGAHjxMSni8vCZkZwGcTRh6zBh5xXMFSkQP9aWeJSX7hJVkUJh6zE6",
  "key3": "18WRUojRYracSJ1ZVZx1SXqTZ6KZZ4cPPZ1R8qZuY7MwM5FevJLY9ANRgyPVwezpdHViYj2AaiUma2dLqvKrHMj",
  "key4": "58JujHCpVxx5b3eKQyJ83Gjza24vxTKdzPz2Xwix2QcJXSbN3jJDyrn7veqwyTK1Hy2YdArYTVAz88rHpp1NVMy1",
  "key5": "2G5GyHrXiQkRpJSuX9Cki5A4mW4d46WJ6PsZKm573yYT6qtcc81vjtN5DC3qQ1bq8VDfqnRgiFKMh5WAKm7Uyq29",
  "key6": "3b3SXkUqLAGbaf23sPN5uxtr1qhsve9YhH6b6CMoWXVmbgV5DzLYgWLiL5F2WRf2nTCs6wpM6Wv7oMDgBrsarC6z",
  "key7": "4nv3o7hQ1CUovv8KKaJyKpuau7kzGE5r4Cj9wRtgme2EsfwoLcJq8QQ9RmKUYgNquWU826WG28wTY73Cc2pEeBNx",
  "key8": "3KYaX5Trgzm6qgKV5ZZC7cDrgm1c1WfFrMACaicZBfjpKT1beMCMLkzVEw5k6ATzouSMZmMFPZx86r5N7ZbYNuvv",
  "key9": "3d9Wkzjw8fVZ79ReXxGbebPSMhQEeofiy7ConcaWR8dmNftASSHC2jfUCALFU1vhT7XdaKMq8Qcm4xxMycrzzxdF",
  "key10": "2QD8f85Luk3NyEZ2wxJoYnx9QSfzLxAjnBDYSUqGv1EDtzMo5YSBt3pTY12umM8NRbNAbw3EtXxjUKQVwbcJnsgr",
  "key11": "3T2KusL5qAN1W5PBWkRTH5UtEc3Q9rbJJtWNBH6Vqq5KoSE7YVWp6GGwJXyNPcned5mHqMg6kXsADosaVByDjNQB",
  "key12": "38uxpo7L2bF7JXBXozqFYoK6hqXbErs7knEQG4EPgLokCpipFfduQJkwfffiNeFyqGSBE4nBYUwPuZSR53sfT7bJ",
  "key13": "5gvi6y39JfA95MAmhHemo6VztTPCKHC2rwdzvaodpF6XDCwdDwogKSLbqfaKX1DQ3UkHQnmcZNLytpheG17Y54js",
  "key14": "4QJvvpTtGpAJ3H73aXHvYbrTVyXEviGQUnTwvKgEsG6U3Ec67NhuXYja1TUQduasGDt8aU9KCLVPH3MnVveKeNfM",
  "key15": "3PJeULpYt6JymeJQRZYYfewJPtjifDQQkbadPsGecpCobDFHMkffVn4avqZhzfva81wt4UF1FkBYWKNnnzQjvw3g",
  "key16": "yqXNdHTFqAe26MUToRvpPe3YgLzV1vLy72KwmaviLEcKVhVvipymirP8w9VcrREJKm1eiGM8GrJjAZAoDWfzx2K",
  "key17": "3f4Kj96Ms35ZRH4EYDwvhWjTZoZtjoAqusupP5LJtCM3TQp1BHrN7Lf58F48tdETr1Rxd7Wn1b9j1dcC2B5iwCXc",
  "key18": "61fiuZweE9ZxVQqNVxNDTWmegCoxU8aFPGDHiSLBHRGNQVzvw4j6L4AKybV9TCmtuy9L2DRdYbSfHXhT7MZPQvoo",
  "key19": "3ugH5QPiH78E9HYrjuVCBJHiLSvDc2vxmgJT874qP1BZuZr719y8NAJvBcQFG2J4oJ4xvEoREoLUFomy7n4FbVDC",
  "key20": "cPb4MPATYntuu2FnPq5wDamYAvaZZUFx8dA5F55voftgHtW2hx3pzYwYvLVwR5dVmQibzQRhxYLjMbtf8faV5uP",
  "key21": "CLXzVpDDEwkhMZG8s7ciigbpv5us8ryHR7SpXw24eCHXXQSRsKDd7A5no2stWMJ5eKAW1kYjHV32VsawFeTQNF4",
  "key22": "kRLef8SU2A1i54bAP7i98BsDKUAkbp5ekTSqq29UwRbM8mQztBz11vZkRS53YJxpikEH2K62xMfckvyHfXMkJue",
  "key23": "264J3ujpyA1wt9N52RxNEgvBFtGZG6Xqhx22NyYezffFLM5WGgsUdJVZqauUiUBX2SVCTtrgN1fr5rgj2vaNMaUq",
  "key24": "2whoRLVDZTfsTyEupXQNFfQMbgEmA1QzEn5pGB9easjJ6hCajtqVomycXUgEUvSaJz2hsKt8xCsJduae3ZPzA58N",
  "key25": "BqnHye9AhQZmnhRVNUofFj8FTJJhJY9axtDA2qYxR81nJaZDygPHDaxxg8KApGtXp1EL9siUc7gcAJMixf9g4LA",
  "key26": "2mQ917StVnFiFc4Du9P85hLjUW1uFteexesnMkUoK5zoL8TSLJN6eddLrvFX58TBiMfHC2Qdmz3K3EnLMvJH4su",
  "key27": "3i8L4T8DvKcro6ow7SYh1mCBrTDFrnB1VTVPTz1DLve5dWBUiTtWqTpduRo1XKGjGyrcN41tDmCg9AScTCHisrz4",
  "key28": "4azbNvyaAfifKbQ26A612sC4mQQVrHsGwjVXk922mQ1pDLwWCChYEeG3JRCkgcQBoFNB4P3HdFGz884gzRmqMfgo",
  "key29": "3bJfDku3VpJsZCktinqRydYwQu8UJ7KHQyxDUKssW3kxHuCzi2BoVX5YmADbvoTrg7Lz57F38vfWmTjgQRvsEu2a",
  "key30": "Vrro35T1RXzTPeiamKJF449w6ijYwQuFNPDHMQAw1pWthsQgDCyPc9xFsgxDdsW8Z2qzCsnsNnb2dCp9dMKP46q",
  "key31": "5vfFBS6gASFuDzmNeGxCrsbkyo6HYo4Yvq7DfKn8j1Q6wDo2Kt7ngbU3w1TgHZ4J9uT3sose1on4qrPZEVEm1tVD",
  "key32": "3tjbZw2G3egW35ZMqfwcBPWibsWq9zxd1bx4j5SKEVueUimL7gVn7pxbgDiuYjP55TNLKdQz3gohaLBdiaVkCAAM",
  "key33": "49ZyNanRe1AxZs9Zt9DQq7LhwSveQp6xs1KJHtcnHtJKEPu9mFmCFWTPqrTYqn8vDXnQdoCbCqkh2Wv8BrbXyDyA",
  "key34": "58LaJLMUrnxnyArRYDXxVbcqnMgruDFavvZ4Vqkpygoig1aTAR65G8pZYt1erycTiYvnirZrp6cua7pAAVD47Kkh",
  "key35": "31L1zbw9F3NbPvqr7746goL5HqSDNy3nLJK65yBWBUJw4LnTN1cTiKXdkFcKw5YV5vv5gSvyKhc33P8LjmN7MQ5X",
  "key36": "3gXH8w4aFdyKUqt2TGT8YQkynZXQ8rGwCvmWRbU8yAKnLvJahthDP32dPoYrqFvzgK51MtatyybgyFKha7bUc2Xv",
  "key37": "6413JjUQE91pPJDEDN1s26iW8Pfn2DfKxkyu1ijtXhJZudkKuFaiZyeUi68WvWmaCd72jDJctygANgau1tD7pynY",
  "key38": "2e9YLPB2a1hvV6ctCJkN1r894eG2A9REJLSnTPEcUx3afAGEP422qVMH9BWpTgtLQCWQu7DH9caBakFwzh3NoFQd",
  "key39": "4jtJ1gnwrSxvJTZZE6uXLmgRHcuroDcbkpDKsJ4x5yAKBSVzNyt5EbqvPhCzzuYkJ3dpVEKb6esTc5ae4Lrayt3W",
  "key40": "4B3HTCHAEXXDwaxx8DaotR23gz2fh2pRh1ehtbmTu8LUoPfkjDEBCSWhiHkJEJsNVMjgjUNVQbupFzgJZeWk5nZ4",
  "key41": "4Tuo5vXmp8AyZsvASWmAoKymWGBacga2g6rL1ThJ5u1z6isfKwr2ejYdWrn42gDT2CLYbQEH5BKSDcNZxZcL6Ec6",
  "key42": "4upUe4cyewPa5FnARbKARk4fCh88jFpM8iQBbk5pdUzKVYtoN1qWZtgJnFx9ECaf7N2FQHPYZfr3n5tU6dF3JrtS",
  "key43": "5r2newry3NZnbRZohHodRd9UrFPdTwgaR3XYw1GP1cNY3eo8H8RLZYzbhPrnGAqFSCUcZYC9trMhqpJKqBQshryU",
  "key44": "3CKNU4aaGBo93mQ77NjRmWdXQfTyKLSkNcP1YJz9rr4uKpzL27WNt9HwdrQvLXRec8payjMU1wUtWq72iKwkKkX5",
  "key45": "5KHUMEZL7B8AooUvMNp3NXEGWWfADJx3GnvKepZ2LLBAPYa8mjLKQW7uLMit6VqvyUDKVoMLdFNA1Dbjgk5T3TFn"
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
