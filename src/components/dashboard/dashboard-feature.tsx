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
    "3tjJ16earWaNL7k9cvyphdbZTqxsCFu8VTT5jYE6HpTRkgXH3myb8HbSpz1yUBDqzAzh3NakzJJ3w3FzsuNY1SP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xGcVma9aUPsRBhAQiBwy3RZ1vUF5vYDBzHaEeBYH9D7Q5QC6fS627NeiNzmHr9K4Xouma9oZyb4QTosiwLng4zL",
  "key1": "5JSgqSCdFdY1p6K5ZK3vxf35KiMXR4zfaLEzPNiynNPySzJ3f9cThSHW6jmUKEp1UCNuQFJxLDXznVExTm1JSSjd",
  "key2": "5GmGVs1WznHG28UAfzeZXD2zNMwsGWc1eGQXWV913nC9cVu9snx8JVc2UeFa6U3h5AzLtVWdgsGm5vZkxpe9kQ2D",
  "key3": "4ULQYZN6L5Zbb5YwwiQmiGmAhu41m1Xww1taMSoW6GvdX2eGkTY9xuuaxvtsccZBHvDvMFvzSgeYQY6Ygc1yis3H",
  "key4": "kpK3UcStUD3iKhsfk9iSpfup6mN9TEvdBmNajs8ywjhoAwioSzWugaUReq2MRLMWkqo5j5RbLH65NWmQiuj6vY3",
  "key5": "3eDHLe7xCyAcge3BCXSK931qpvdicCMjc7V6UiaFUjmY1Bqr8hsmn9dtrW8DiReEbqqeSUDh4DWthDM94zdpDjti",
  "key6": "pznJxV9WycEyXrSzQyNDkn3cjLFzAktv1gZYesBKUpa5G3SFdmWdQ4tK4Eqiwd9HkxdoJXVsmGqzUgjXmqX11sf",
  "key7": "2TB1Xm1yLyBraAQ37uFxYkC6HJXvTEh6vxCsyP5SixAyE1i4ByV48SEFxYH33j3hzbkZDeMn3sHNW7NhoBwh43Vy",
  "key8": "5vkZjTsVH17tBs7qd7nL4ZLwPDHG33RxHZTkqhbabm8wTH6TF7wXbUpuqx2U7iRsBoFJV8QwpnaFaum5y9rnJoyD",
  "key9": "61JGUMUi9av4k9zoMqqLBqy13uKPHDxVLL7vt6CjBSdCuFRUre6sjGa5mrqR8JnzLHdxxqMb7hFBALQBwZfBQhmk",
  "key10": "3mJG3dcEk3vjJxytZSbgdY8AK8G3vBNaSuorH2oC6u3EjV6q2YuYB4PztAHKA7fmnqNd4YLzBtwf4t8FvtGoTBwU",
  "key11": "5MqSnJtCz9B9bEGPddva8Xst6MtooZNScwMJWY76mfj3cWriGQiz7vMUZeRykZuuuVKj2PBNdsUBVkVtDyWLRFYc",
  "key12": "3uwMnrfakxm9WYkjfABVje5YcvjSx3rpemXHi7kBraySRav7JRsGZagc3fgt5ah6fq5ePtJyAexpjsDqta2rjiV5",
  "key13": "4exv72EZYPiskzCGY6CoGL7DYShQRZJ6j3FDjh6QCZ6trtdS5chzutaPEK2ZPkiobtd58jLyZ3xsQtnNK7LwBUES",
  "key14": "kEKmgbThcdtxCvCtC9pJcQ4QSF6NPjovLknG7vf6brtZoK19GVnrNNpoXQLg1n3LniJi2jCUyYMRCMqxqwmLWKn",
  "key15": "43hG2W7dHRGooLMpus14futgKGRcsEArhYxwKvdiY2GjRKeiTJA7KD3hp9aWY3Qsyha7pKauT6yhJRCEgHUjyV8e",
  "key16": "4j1Hkrhr9EGU4F1xCb4hq37emNUtGyrS4RizPevxfFin1wyoVZ1eFHN65X1MacnZCHbHcupyMDuf9vUMt5sm8WYa",
  "key17": "28xJPpxWYNUmp39U16D814ojHdns3bj2eEGb5LonV8kwtAzvqPsYgYQnZoJtuykzU9nb7Matzpx8sp5aq1S2ndky",
  "key18": "3aNcyn42AumevbBAPexXGGdrxdUnhLLFPpUb6GpvCEyVYj9H1k1jSchYrfXDJT5T8ZBDNiTttRcFyDwwox65JURY",
  "key19": "79eDcK3xH12GyKuinJeNoHpUqzbmha19i5FooXeBpjH6w5H23aej4Rwwev9NPHC1DRWfQbT1yJZULpNJJiQTCo1",
  "key20": "38FaeKkrgL5fDctmtob3cpRRoMXM9NAxUnZjhhJPzwPUibeaQh6vkFJ5ycExTPCdYmNoN7Yo6ghCMsaYn8ZVFhAo",
  "key21": "4aLA5y2zraNcBeX5DrsrjKxBwWGVyCEHrNLGh8JtRLuPMNko2DYBPPmuu5mzHKiSyFQFM9tFdBkUL3ZNRFC6equd",
  "key22": "2qKoVxo72ja7JhtPu6LaZb7APPozsiQLoyPjshESoev63cs8zG8hsJ71PC69mAqzs6GZFytW2gVbh7Mpqfxt9JrE",
  "key23": "4W78i9AfATiVsFSk6fS7x34y44UK3M41RNgtNfhUuHAeGKd1aKx1hLgCGfB9q53R8QSCsvwzkzVVyhw5icyq5G6S",
  "key24": "5x2e3f8187ScL1usvjYZGHYhZM9pZDSBTNvnaiTGrFxQj5zFWXMitwsw1KP7VAV8vVeJsrtjTNLcvkzqJ2d6XqNs",
  "key25": "ayNWnvYZY1igmAEynqv6ffjcD3buLV36Prti3stkAjJ63ygc9W7jMxWUcKJ4UbA7vsfQ3f6hkDgeSjpPrAZSn9e",
  "key26": "se5ozL5c8TTiaQswQUbzqM6DfreA3gLcZFuDNh5v1mvUZixTqmv1NtVyDBtTnfhhM1FzfBuwQX3PomKcXSJJvne",
  "key27": "EqEqA2TRZoAdnF1AxMzK2x7ZviWnYegHaPYC896RpLqoa1cKi1n5khRm9y7ed1AC74BcDZr58ZUafCHceuxvn4a",
  "key28": "5TfQV9rChHbxoYvmfmjazsuZzxUqQmeabnpuqsbEGNjLqUo3iNGuxXgVJxzaa4Ut92g5PZj97J2gJR8RcDHprFhS",
  "key29": "3ryPurk12PD4UJQFBkfDgyU45DmBY4ZZGnEJFRwSLtoGztZ3v8vgniVvSP7pbrWgqQ6trXqe4VqGy4JcM9YfMkmS",
  "key30": "3So7qgJ739brEGdrJY2jLQtwXNhPA2RgrVzUQEgnuFKnzwZXzoKLP7fjPKjJy7P9HLMm9sts6PZqBeTimzWpG9rM",
  "key31": "PLzc9LDTat8CMd7r2wDLpV5NQPdyTEzfhL7roPWvpiFh1mLoh7zAiCawiAMcb58UGqKXiouYbfHx9mB96kaNhKf",
  "key32": "3cZG7TPpfx8HaGKE7uEQDLp88VviRGR2Yk9E2AvwqQXRqPhb43h5Q8DBUf594Z7k98bwCPfQgM5DaUMNWSyeuLsn",
  "key33": "2Ncv6rfm61shVXBt3P5XU3Er5x5KZe3AZiz4ieqkyjSwW1apV9jpw9qhUDogCm4npgpYEsLM27oJPyNQ64iJ9KMU",
  "key34": "2fJS98RiLHWcZoQQZUkZf8FfYMKCQMgnz5dMh5bEwiL8UsCftgmCbiEAzV2qDAtnnnGBqEMJzx3ScBBfinfwfQta"
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
