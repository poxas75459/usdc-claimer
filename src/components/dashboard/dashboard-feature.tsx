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
    "3TKjxr1846ouoYYWVrRtUUp3x4cUVw9HjB6LZCdcYintCy2UwnTcrkQApjosaQyDvVhKy4gLZXZRrhfE3ntp1EvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EzxWwbXwHCDXWvHQxe5qvf6xyfA3NPDwQR8n13Q5KHNnKH7dAMY7k9MvwWAvix1uRRWrYLfZaNzxNoWdbukWRGY",
  "key1": "3qmbjsqXgryvsTwmNV3ziMKh9C4BExwYRaEgH6LCqfCj8UBagKGi6ouEVQa13Q9ppoWbRSaQh4FFMfZ7BPqJvbs8",
  "key2": "5ZNoqY6z9JMKqMgSFvyMmGkeZa3X9a8SyzzzNup1L7vbpJi2mbw8tpV6XE1qDuMzGxPx9N2ptmz5aJVYHSAJfCfQ",
  "key3": "2Vmr5zCYV6XKojBnGgYvGRFzpU6LPTpwqz42LG7Ahsw6u4WggNcqfE6GcSP8Bsp8STFfF3RqXj26edYbFf4YMF5v",
  "key4": "41N71XzGUBocmukG4hMF5XZcbMoHjRY2EgSAchg7m2VbPHR1ZccAEfxEcNoadsUXm17EiLHaGY78SC1zGFUuisNQ",
  "key5": "2ujUbeHchZZuGfEYnErDuXuvLDynwZJ1qPd4rDfEV1JE5ePZdz6wmjLiLQfMtymrbd814HBVCqZXsx3u3kSrRJT2",
  "key6": "4QG5HYKkxrN42a36KoevtfFtf42JfN66AQFqqNZg8ZnUNFWm4MgJh5bRYi7m6upH7aqk8zoRJ9Q2WAEvyJHmutqE",
  "key7": "5Js3in1bpfSFnx24J5EDFhnKdmBFXcNAUSKG3J9qTcQ39qfFLyWdRriwoRCzjEHuRg6Q7FxzqQNNcJxJfcEB2HYF",
  "key8": "KjVcbpouPn3T3kTkmrTweJWovTomvDYXz3mSvsyemPgVrYydPEXw4LWyCSwLWsyuzABd4CXw2gLYng3EtwLT91b",
  "key9": "RF5wBEi3qtkdUHvpu4iXu9pzBKyWjWGurcyr25EaCas59WUDeC1fngF6r6GQzhfDd8PyTgvoyBrWWoBQ7fWeZFN",
  "key10": "5k7g2MD6g6Mhu65xVriXwmwKJeePFnHhx6dnYoiLz12yngvfjiLoAZmMnBGKyRzNUNdvsStkyQYeHDfEGD6GagyV",
  "key11": "6AwKcpFApMApsC5UVU8xPbmrvbtriTtnneYSnwHfXNG7psbaSCywYVFtk1yqm9FgpUDDekzFhDQrGf8GC7tXX6r",
  "key12": "XqHa7ExvGcPnvEkEqgJkKdKqjTAfrt4tmjFC8gszqqgmMqvxwjGkZWmLyuBE8ntrM29SsaBBFgf6toz1KTaq2b3",
  "key13": "5sUxQtzrmKafCJz6AFiyExMXRHgU5ErbpiEsEyCU78Ve5UfndFnqWJQ6NWTWbHJhvc93D4faUaUm5W7S2Fbxea2w",
  "key14": "4HYbw4YGXvjMwdmvcY7LppkvHV9nbz28q4ZHFeNR2MpwyhbYdCeXc1VhrvZQN2DG4YQQjoto8YjBG7iNVTvWF6f8",
  "key15": "2MmBDmMDe8TCichne7zoH741jth6G1h2kLPNmtSRH1EWgma3ocTuF9HpVrbXJKfSEwkupqG1dUKAi2zM97pn3NoJ",
  "key16": "3papRnBAGTSVsmVYbHqBVQQ34hnSY2V1GE9jTUd8zMRKGzEVPLrj7Y9STapQF6buRDGT1LQfrAqpMrko4oueAYk6",
  "key17": "4jetcGjgJQ2YVvKLnXkQPqUikiMrYz8G8JNVJyGD3pRT8UWne5DoR33Xgph1N6VrkfHuJupujSgW7rNNzALifJRA",
  "key18": "LfjJopMcWKmetwoNFSBqJ67BeqrCVp896imEf2j3TppwqgUztLVK2wxEBBJctxzBu15Wq9ECwgq2yV2nVLb9WTQ",
  "key19": "WPZUxYurWbpVoTi5jVuNagmAB4BojYHLnwVLKduNahLrSqU7ys5rRaCwKF2KdgYKop4XiydnvDNycfLLa2R3hCY",
  "key20": "yWwaf4BWxuz356j3ZiQAkwwYRXbt5w5ZDEQgxsA27N5aYiJSceezgRSR4c1JfWecynW5yGBdjP3WxNBqzhbvCHY",
  "key21": "2nUMt8UPsdHTWmKifP9NeeZsACfmuUFuwy6eMo9mEenoU1J29LH9HZTjn9cofPxQ8Vd3vqLPs4YpNga56myotnjY",
  "key22": "5U4gfyLE1T4motqMU6aRL97tAG4EFdQBryPWdWLQ7cx54RoWKFqhcS8Bv7fcjtAvyBfYEWYrSKhCnijMxfBd3uov",
  "key23": "otnaY2JSGXDEHEpARsSjSrtsCUVUbHiXfRJ2CmvKrQBJ7QUbP1hgPP83cX7gXYxN7GyC96jW9SYmh7QEWcdqcxG",
  "key24": "35pkykGPabeaec2gJu3J9rie2hfhHP9kThgJHCL9tUvbaXgcTHdDcciFoH913S7BvWSn3bjY4kB57XQrJxY5MBW6",
  "key25": "CGuD1sHvyLSi5UXJKjGF53aSF2r4YZ3Jh3mbaq6ZrqjUs8EdXcKZSGZ14uh2pthicFZiWUa9MLQFeE2Ww839zWf",
  "key26": "wwnyJ6NTfRqi9fMVx6KKY6Kgm8CuXEDbTbjzNnT6K54MZnVPR9rhb2UnYbnHdDdxu9Kag8aACfVhui973Z7wX6r",
  "key27": "7cUAX4jmyhWQsAUUqt4KRmfEFpSS9i9s21CBdz91EjsMg9FyE4NYFeukNEp9CGZYJKBDEEbuCjqmrG2qpjWC2n4",
  "key28": "3ufsZXbu2rdRJMwvrLH9TqpdM1faGaRjjxj6DQQnUu8wLcTcW4VtpU5kC9BuFs9Z4kf9jH4t4bYw3ktVdPLJ3y3x",
  "key29": "5YM5SL1ibRRumvj3vYM4oYXfLughnW4L27yMJGrPLxJdVUrPU2AupoaykYuVCyVCznwskTVtSrTAtnPmjovHQAUT",
  "key30": "66cRB6DxprJe3x4yVSkUUqQBmNbSJKrJi7vMNwBTCDZSzJmQFzyhZwn5R1CK2pV8He6WSivpzYDdsrbc49ZSJPfh",
  "key31": "4G8u78ho3nsSC7Ex5RrDrhe8fsrgummAn1NfX2JbxsAAvN9HQ2rEyNC7y4mDS68zctbf62mbkGQAzEZyeDEbHMC5",
  "key32": "4BMDnC9Sg2iLH8kvwwvs8PBLY6oeRebQ6EtsY1hzByh3t4bbju5NsRFyajZuZ3gEPUp4WRHCbyoJEnYS5P8kNd7q",
  "key33": "3k3qThfPBu4Y3wgb6nvg3TsMmabsjuogJKw6uKLeHUC8hCN1DrUvYPNWxc53y3fmEH7z7QemnE6DvC9w2FTRrzR4",
  "key34": "3xxzniEChBHU3MvMRhCfdVCXt7PUpKTTKfd3eipWhwCHAE4uX2sVLZo8GhefdKQNGN137JUpWLZsfQTqf1YP6eLd",
  "key35": "4Mex38WrJdXAUCoMYnYweoZ6RBVgk1qGxXXRaTHqh48Pc3tAaLFMT9ThPNfnaBqVY3yBqjX8YQbXVDKRb78E9Btf",
  "key36": "5MQ3N2Gj7WntppdK24Peauj3hFxEdkCG3X5F2ZQFhsyEWRW3xmthZBULSNxSgP2RmCcYPUCGBqYBL22Qk6xAwQVc",
  "key37": "3f73WzPoCjnanTuphcep8JrqfEHEDU6kiDFjgV2dgRBusTrK23QuPqhDswgukaqYn78ijLnekFkos3Zy3pBRxPDU",
  "key38": "2fbwY9pXunVehDpz9Za2683XnA9EQSCYEpyH2Q49e4Y3deNr9Boj7TzDFY3Zn9APYS3tA9K5717GzA5pHJncS2Zg",
  "key39": "HUnojxVa7GjamhDunmnZwyUtdjcEQmFVAt5BTdbja3fzFXKcSSSVAXt9orvBRixavUnNKx4pex53VUeSa8fMEQy",
  "key40": "65nGPRuXombUQMX73ms3ZJx8ddnN3Nsiqq3imLvns7ctkBUyU57684wu86s9d3i118Vmibk8fRG1DrhwBA8g72ZK",
  "key41": "Bsiji7zrdrEjLP7TynPXrhKpcK9KCzvd3gftCevFC9s2Y7QH7osSVvpSEUP12iZazwHYrmMtdguJW51jEwyYnvW",
  "key42": "3Q3SdUw11GLhkesGW8RmY3X1wpPJNfFgFz5PLQvsYxC9PUfy1ZvbHdjdivTfSNPa3KsBa6G29x2D9tT6h33CzuvE"
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
