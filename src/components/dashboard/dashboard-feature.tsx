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
    "4KvYb1nWV8LsvTXLYbJMkukZKLDhQKswR2jgzVCi1qDvh9PP2Jy9UKF3aZirgJmrX3G3vK1LNRtupY2vC8nUHxtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EHtSE5JNpptrqgdYYdLF92jkszqqTwAqNKs3LG2EgJwdKcEBaTDxNk4ntjyF4FHCwfvj5aMjgzqNBMiMwXvsYg",
  "key1": "2EmZCrHJvzDS2T652a8zWmBcK54JxG3DqtHmW7E1zGszrBb8NaEM68ecxd7KSfMoRugH4GYv1XbzkTUsp87B2cEx",
  "key2": "4bx2LX2TrcL6dHegM5AGrPW2yVLDwuZRbX4NJ12MskRnhRYDJPUNBzD35N69SmhXCzW8uhe2djG7LybJ4zPi5JfH",
  "key3": "33L66uKMBWSdWR1hRkHzeZb8nagNb9UcXvX6yKg5kvsjrB9zqCEeVNHDiuwokshUr9UoTRqfSCUjm5wWoQw351KK",
  "key4": "dVFWSLTonwFCxCR79385RXgWPPGfpAeeRSUQc42eJJZz9PT1juS3ip4Q3yj4uotAhEn9Ugn4ivqoFFNH6wCA2UC",
  "key5": "35avmuSCLFue7VhJGZWFCW9g4PGJmf6x3BqcSdmd1bzgmJde5WTs2ModbH9LMPQppM3KyXrj3WQBmMK65BQcavMT",
  "key6": "2qXP5rZPpSwEXczGyy5qPkzg9PvPfwApP12VMQxtAbGVzq7r3pZ1oAYuy4bjMgicyBYQKSKBTVN48wzNtVYPaqaM",
  "key7": "b8K6zhNmMVHSyJaQZbvRkRTkKw9nXLdLQ6ngHwbonxo2S6kJ7afzaZ53gLpk5zVoZUi9qE4udxPJfFE9FYgqe5N",
  "key8": "2ea5Hxfb8xgV2TVUyFLW5mcMHyrSwHNAocGnbukbUscrdqsSDCiGU2V4fMGizAHJVPeqbsszqLtWbnxfehRR8JLH",
  "key9": "4rF6DwyXiUW8Y28mRjmXttXGYp4LSVe1dAvHF6wBMdWMRwRVkC8JaxAZMLnnuLo8M4RRaedABt4qWo3CPG8LX5xw",
  "key10": "2ijn6nZSK8D2apoHtBsYHXNPdhkTPukWXcPNjewbqmVdwUpd9SR8iUJj8hSBa1UY5ju8buGw7LruoLJqNj48JB5j",
  "key11": "3wpj82rUgAbLywDgmaEUMNNnsYw4bpeUh18p9dgreWgUZiHLnnn7RtHFueBXEfKbZ59aU1z8zBogEBMPSKzBpuV1",
  "key12": "2Dy7r8r8SYfyWG87QD6q55LeKR5TtGPwcAJv7fDaJRzLNC4tmrLGGoiULwvm1KoF3BGJzDMgoXJLghfS97xg98my",
  "key13": "2Q7eQ7Jphy9MKbo6mXu8vfZiskmV3DuqqZghcADi5qcUYgThVDdF1iq6mAZQUK2St6nNRrKhjG2hKoHacGw7q2Gy",
  "key14": "3yhDvaw7Nj63KSXdt8QKgQqGUiwhdm1kQMb9aRnrzSRv2Ptbf2MRpJiAJWppGcZSzet6TyC5zvzegJPvHTACkuK5",
  "key15": "3tPkPs2UWSMJPdB6BacQMnB5SCPsH9jb7yYQRfwHBpRBr62XkgDehuZR3Aa9quqGq33rvnbqbqiAfopqM3qbAJ39",
  "key16": "AVMg2h5QMndHWEseTeCC96TJHR4nAhafMYjeUrz2TzoKZcFdx1GzKePtbu1weqEXVZ6VAGu8WQmTM6avRE7TkuL",
  "key17": "4XeXgcZ3Rro11CcqZAfMW5wdL79NZJPYdpRFV8v5twfbKQd2mXoivDsQNUJZ8oivGvcX3MWs7T3AFJVxdTshgeUq",
  "key18": "3w2re9x3vPjxyoFFae13ML7Xg5oMb2au9WNwhgj96VhhHNtcg8vCdx46kvkhrAUonzFoP7aX3ZDe7UxHXs7V5Vqh",
  "key19": "5WbLWfAA7fX2usDLpYka7c6LvxNThduCszHevLGCfkKWKQEUg8ZiW2fWJaPpseAnbNKEhaUEibbnoyd9vZa3KciH",
  "key20": "GtrKsWbD4o3cU2VTE45U7f9M86C28fDqz52zEM7CupMcBBoF62TQaWDLbue98pbz1CaDfV1iKe9v1eofgzyAh1n",
  "key21": "34uRyiD9NiNRiUwQ7JCfYspNNcQkB9oZqSr4ZwRFZZhzwftU4ftG5UDNXaTke7v8Q4LonG4cfHXKbHRgi1P8JBYf",
  "key22": "4dyMKLUdPGYFovQ95srqjkKHFdkPwi4LDrVinMcRALd26A8R8nu9SzWp7hxQycsxjD4HfNZLM6xKSbWcZuXLs2WN",
  "key23": "2yA3thwiCnhNVQyhoAZgHGArxNPPXaU94R2KNDPGy7zG9MP1iyqJ1mjmEogVwmpADdCy5nRY4kkN13QWzwzWMjSG",
  "key24": "2f1UUp7pmhS1H7yBodhVvMBkFXjEdAoWJUiGCxFUErWvbTAxDp1tdhGh6CbfxUABiaGBWgkebbHmGtBQDRvnfLbL",
  "key25": "3KMWdKbatpV4AcSwQ9i2gp9xm1kepm14dWWvAbRPRWh4vam2pN2Uz88QHndj1xhyXmz9ViMzTFdCLkpzB1yyhGDc",
  "key26": "5wh8haqLBnxm2tBikCKZe9Rr3abn1TQzp1HHCqEgqVLSTzuJJPd9ZXF5DJLsbpPULJJB8Yfqf9LDXzH3WR8u76UD",
  "key27": "4YmJ5AYc7fx44SYj79ZQPvbuLz2sJYRdXcNeEfoZLm42v7A1Ae6JdFnWvRgcqA1JqWSxbS6k4qooyoLVFeYdyzq1",
  "key28": "3S1WXrgJZaVYSyyUXUtHh4h6d8Pv6tgN1tF9mzmvnKmzfgnxViy5ML6dR86mHkogaMu95RsZ99ejUDyC4DUp6HDB",
  "key29": "3gfpVoDaLaJMwhaKTSgLUH3XTxV1yjmxVJwjFNsuGxMdHbqspupcw1kGiHyvFmbWbNaT9Qcv5LJHeZsJmkhhfYAL",
  "key30": "5EP7EETmeXosoLRxKexAe8RQaqVzK7d4SVu3KYw5x5P7UXPKiejcrYEsYGDCw3iMwRFocTnEkZGn515T9ayJGNhT",
  "key31": "43CZHDxvfHQ1TfKHr4efTXmtHT1WAyZwToA4vEQfuYTi4sXRynPR6mPgHujmbXDXirdSqfXNAFJBzShbRp2oLhVJ",
  "key32": "2Vq3BSJ7uJaH7XVJ9y2Yds8i2o7N8UHEYaqvQPs36DjwfTozWoewoRRhbvzVJj2zuxvzs97yaPK11y4rdYSZcZPF",
  "key33": "5m6JHtjeovkS6HpHNqeQa2todAw8yqBGDEXUfzDYUPbM1HDja2V4kUxX7V1orm3ZgziQMLbYoufbQrHZhHGSxP49",
  "key34": "5TZWX9ZzVGGjrHCdoayeZL5XS2qZRw9iGf3kkFUm3SQ1rLt3HVdDi1KdVbA5AnGCrwg1uuNLmTKsyZMnpgPGoa7j",
  "key35": "237qgEsfU54ty8eAKq98zaAPHf6jc5KFyXiGmCHStNCR33uX8DAN5wGAKEK2HEC98SKmBc6iSywKMyRMbPYdGqUT",
  "key36": "4VfmMS6CVpowNPyeaCjWQvyZ5kW3JYcxcUFdUZouqwm5erWnp7cT9eyrVwchG2ZMx5sg9S3FQ1oHkgvM5RNKJcFb",
  "key37": "4DRZJKqi2x1vnHnfnyAqshmN7aFUgwMW7dCSrA7MsbZNZiftMtspbdKo1zdqNVT9bj2NiwSpmm5UpKEtrLULxJwa",
  "key38": "4xaSM6vKMNnZPSe9Snk17AnTwoSGZ9aR1LZ5se7rLEFzRyvD25j1ADcobaZxf3ziypSoD2MyHaoNDWYECDoiRn96",
  "key39": "2axsXapge2KoV8zV1VoqkENsRp9V1uE4X49AZxGR5ZkGrRz3PJumqqJpGBuDG45HpTt9vNj9ZKw1P3NbCubK2Pdb",
  "key40": "3rUYKaVivnEArj5wdnVaxVuCvghUc2aMSkwAu6v71W41pF7HCM4ZwYJaSsjdnbhNi9EDFNKVZK9XzSvJofp4V3jD",
  "key41": "4oMSzRGAQMuNFdVwKqF4GwJ9orB78rxC4cFwdwipCKA2Fe9xiFBd2W6CvAubwkvCxyR84XC9ysXpkBEH9vffRmAv",
  "key42": "5NMYDecxMxBEDwYS4cbJDnGk7gEYgBtWxhHpJHfSWCioD8fFFxb6syU2ACvEfYFML9YmYga9sNasRtmVv4Tcnu6H",
  "key43": "56t4WcgfAKZKobMRzBQ8pcPKkWwQWqZWFLNmxpNXQnTfR9wC4vwaYnGBoGS3C8ur8YxBm35QytmEEeBEjkRpLHbp",
  "key44": "Z9uSW8CJPEDsMVMzCRjtZVsg7HSqdKU32uuPyunQRWLuXcpRf9db6xNNB5Y2bnesGLsAnGYALvJpSH8UcnikP6H"
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
