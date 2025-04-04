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
    "4tAFq515AJriurVAJNg9gRKkj1y6jSukdEVGmupPhNqxoJnFa6XdbyWj88ypUBNY8YzBZsJshtjoAbymRkqQmiqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fq67H7irnEAokMeTtK1SRTogkwjFZrf2FT3o2MG4zBgQ9iz1qRJLvXmGrwVzxZTqVHuy7wkaUZya4j4VcJZM5dg",
  "key1": "2gYp5LiR95M9pDQ5fa36P1SnkbAQ8WrXdH77rurMUZnYiD1bKJtcm394WZRfGPtBJ6SBzuahjTe1DL7t5GAFxaY6",
  "key2": "4LarGYiQno2mnLL6SSo8WnXC3su5UB7kDy3smzqXzXeSWiUSymDQ3FFKyD1jD6x8QeDjyQf7UAxmdjV3fZ1DSayd",
  "key3": "nzMi4D499Ta959kcvHuR4EQYBrKTCqDUjXCGyiZePAcGyJBy2boFi5EmEY6dBxxHpNcRdc9JTtRMe25qKEt8Fj9",
  "key4": "2yWygqFFtpB5UBVBX1g8NKckNFSPsyyku1gtGgbcdRwZJUk9kCn3D17gTPzKxMVBvvWyVqAr2NZ3B9e3EmproZRF",
  "key5": "5MTeYgWTjfjmWnWXBBEzt5R82nBSBWHnCUCeKAkJ3YsAcFagYRCKX77kmxffwbkuDWtTuAH58ngkTKRCo47V3gYF",
  "key6": "5smQrP2B6Ncg5JDaEBBLM39dJwo3StHPKraA7wm2DS8gXv1aZpKAryJ4wSZyV4tbuCmyS31TYxeNJ7SGdBkXvXzj",
  "key7": "5R6CquyLdhB74muPCMw4LfFc8gZDXidsYA6reBCqrDd766kYQTLCKuy6s1govyESR9q9JEbPejm13XosKG6o6MpJ",
  "key8": "5FgWSEP1kpdSGW8YMVqUoToGdCpQ8EWd6ZkZxLzrGbNViGnjQJhkcE75Q4bi9gj7N1SAPPViW4LgYnybkeGjG2vR",
  "key9": "np36y9ZUhuZeSRfdpnxjXBm5yd6D3Sqtjd9tvrjjuBou3cu9XnNsz9GificeZ4aW2S2ceV5hWbi8RrVk2Hkt57R",
  "key10": "5RNjCS3VqzMbcGnVmD3tNbRMMqwZ1X5EyEQUJJpZoucn7H9UNoj8K1kb4cVvt6wNahxUFuTAmKo3CFLbDmigbidy",
  "key11": "26LKhQAPqECTeAWVtZscXPuhBT23EcM8XNmFzXKk9n6zactWrM3NCQKhQAJJP6a9r7sQzf91v8xkWfBTDGjBaNdC",
  "key12": "5UAxBhBxcsWJvDdRMmErX5xfrsxGwA2biRF11dMLkxbuNL3rZy8uYacXQ3HizexSvVATbSJBmGYHjBknxD7GVY6N",
  "key13": "2fT3dSB9XNzpjodCHpWwcHU2v7R9SqSH6cF2CrniTYJ1g99iMj4N1FGr4sKTJhmg2WN39zbqe4Zc5h89r2jLAYuR",
  "key14": "DyeMTjDhgJoZhsYmPMyHXuWoeP6EVyyKPNkBVKPBwpwaAvkJ9w7d1mWMWHgeFFxJKs7iZwJ6fxRVNr9LBc2PWM7",
  "key15": "eLU9cC9VVyZ1BYYNhcweYcf6cyqPQYM99QuCQAjT1gmVCLAe8bLcropQTFJe1TsoCiVn1bXrEnJJtFw26Y89AnY",
  "key16": "2EYL4dyo4Y5YcGpDw2DczBGu3Nm2m49s2ZKPvUdMg2pEncUhooSrFW2NAQBVNPEHGtSjikjLmmmNtE1XfhRKGrxH",
  "key17": "3cY6WuTEJkWhSr99oMjfpfNW5pue9iUq2Qcyzb1aFAi6UoEHr4ybSuEn4hgAj7CZE9S7HmugTQFfYBiGwZLeKeSG",
  "key18": "44vDJ3Yqvf6GemXqoSyFi7Di8Zky5nhwySRd9hJHYehWyDAbXEbMiUXJYxkZGaHtc5z4tw1DKmt97jUUAnzkjAXw",
  "key19": "4hFAEZU1dGFnDif68M2FKpWMJzn7p7RGQdpR8iuP6gdcZZtbFTQWb2fXBSb7MLAuw6S8UesCKX6eQvzMKm5q1Rqo",
  "key20": "3RdPgWrwELn1dtxaPViuHx6TFwVvM5ofzDYAEU11q4F7vguWew3XtEvtKp2xzfrFu8b8bUhdm5jKDtjFavii2CY1",
  "key21": "RgXCcX4uhV637APNNd567m5dxdh4Dt4AwVs23waU5parGVLBCsyKMD9Yr9qNoxAh1XYFu117dhNmunGqLAoAPQx",
  "key22": "5RQfrJjWBTgT2YbofGfxCav7staNtewPG1mt4QgUe7Q3pcSGVrRD6mUN6WsntfrQdKJdrvF5G5pKkFgML5jmDykD",
  "key23": "2h3pyY62M7kECy4dQfWmbmVH46m19VBSJsr64NdCg3i8ZctF7n5KST1HTVTWejtnzDmf83PBt2sfZ51uJvDzpfS3",
  "key24": "4UAJSyBCbBu7wPVoRZ1o1F2KSoL2A7dSauXXqrN39H7P6FXi9hDkoANRfJ7j71Vn3Qow68bozqHnTWKDRiRhZQ5z",
  "key25": "552vVpCEiEoWiA2eqZ5dFMHYdT28WNjssZHSqKNGrrk5kD33LBdYrp2sPR9uFQCtUq6WQ1uq3WpqthRQ6NjbCjhv",
  "key26": "5tDFVph9A2PxKsiVrgNTinGEeXmG5iyrHkWaCRZwaHjAMNxamHfVw2R3Juz7CeiNYdXC5HQ5yPv1TDB5r4p12qyv",
  "key27": "KfzwHCJGKrb8WMe8yCtcmpnAeqiTauV1XkFfj5YrMxre3YMXAzXnnw8oU5ytnfyNQavxitXPqf5GmxYz6eLqCHR",
  "key28": "23BnrrWNwUrGHkaKdNhdCWQ9pKDZBR5YFbZefdneTTbyJgwUeiqHmQyzRzJZdTxqjJZ8jtENSSBDYTcPddNwjHa3",
  "key29": "NByTixTvhufcS7XFp2WedKzWKN3SDRuR1UEEQc3qYdDDUCDgnLpwL4FhGFyqXZPEQeR168aJkrGYD24FeXa2PAu",
  "key30": "2m3hQtG37AsQXoJh97SToCYdr8VrFGaysE8S892sc5ZRqnQdDhikAXrAVRg6YLYLvYx34u886iVVahbHJ4L9v7nx",
  "key31": "286qHBAWvCEtjQhv8iqrmTCuKeXNWvHoqfkGNtPFBMH9dFaxCqFZfMbUW2K7X1vChQ4jUqJr5r58xjRp5o2Gtx1n",
  "key32": "4zJU23NTp7mQbtL56eQiSzn2iWHuJ5WEvZZ9bK28PzjJBe6TdMLqhxFgjZKFbx3QMsEEqn2V9xRb4RS2q414Lsqb",
  "key33": "Zj7HRsYiJikEzDdBh4Sw72r3QPQQcCSvc11RDryVr9SJBVjJKQmUvJ1GA9q7Hu83iEBFQqWLyL52czEfjNPx3dD",
  "key34": "4KqTw2VbR2Wd1MMZJu6VJhU9jozVcWJXaEMHdzmTp9dBXyV97yAsMSWyNKdY8g9Dko4NyG1x29S2ay3mrpbDrCxr",
  "key35": "47geXbJBjsQhZVamg9q1rU2ADe9CUCUHCn74GD8rLHUynuv2ggo1rPNUEV7SoS5YAsE78yBf4kZ7SEfrbDvkwmSy",
  "key36": "4ruizmumN1g3e4cv8djGXNg8D7cvgjB8kQbqgayyXjDxL6nP987v1hiQ18xpt6UV5qvR8DfcAXBmH4qLUJcCa9eJ",
  "key37": "3hE9v3LFWiCWDPT8X3kTVqSzzmS4fHTfrpktuTj8b3SWKmbXFi1NAHz82gGzbaqDEbN4PSS2FpJJnJXaEdQvGEuF",
  "key38": "5ick1nfVWQPNjjhw1RzAy7PV8mKTDuBjQynmzU9wcrbvTu6SaAWhkZCm1vWL1c6UPub61Xc2rsnEKTPeJdCaVWeV",
  "key39": "4uz46GcVWW3bsg5RBXCY4gJrwYJamRJjbKm9dBUttawn38e44p7b8tsF3sjof5qRjqR2f1sjenEskbwA4gMdKNKF",
  "key40": "5Rxj4xEL8zcVdsnFq26BkRWycQhLDpka34LJ1QEcX5TQ3ZUnLSy2Lb6oj5s2kJ2kZQKnQst1PuPBNP45jphH7ow6",
  "key41": "3p6xZA87rbJwmKiteFBmz6QX1LX6W3sPaF4UPTP2VEGMW1fC6nZJB3fo8NGY4cYLqHCbomcKokLhBM6uaaFFaEZq",
  "key42": "3nh3jnPYdiazfW81qepe5X5ZzDtLXV6qE8jSESWcNPin8mDj6wz8bigfd14KLMXfjc4dJFB66rLXKDe6zRFYW5Uy"
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
