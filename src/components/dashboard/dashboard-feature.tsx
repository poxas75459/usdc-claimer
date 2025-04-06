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
    "25h9obbLHQd3rbeR7xeCKVu3H3uSKhi7PwVHhf44UZTryq1L9QxSaovcRTbWwmFPWGs2TydDms4F4DRX13fJ4MD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59qUFwS9fRC9dV7mGHoq6zmDsmBEx1Vv16tWi9kdauY5wpw7bpNeaE5ti9pVGBpDvHYcusyTqfkutxJE96aub9hb",
  "key1": "3KudpicWjsxGDYWtQbpTjzSCacALNVBA9HBoSF5d481jYrR49UxNKKybW1VFdFPc3LsCQtRMt1ky7i7xECfh1wwL",
  "key2": "3UGCovrCtoRxDEq684xgVCUrU3Jximy7vs67qc5LUoo6vUU82Dai1HdzWWC9adXVGwFYRXw87KDSdoWrtLNXMaKQ",
  "key3": "4nCdDgHxQk4QempjQmwrPWnmZXY37Lxkd3BwGNcfzHaoJwRDD4KKe8iY4AvMY9LExh2c1sXVd8gURZ6rZL4kLxBC",
  "key4": "3DGiBy4fSgryA7pezeg43wFvTQT99tkERAPSPnda3cgNFnEGEn1LQTdsjXTkh2WPar3Jik6uNiAkxCrjQRzZnNcw",
  "key5": "2GGYyoW3o4YAiQoZcpKec6zL1nseCqRDBtswFGsq1iP1UDCnurxQmY3RuC4Y65vDpKBPbHaJtvAmfc1Y52PbMAsc",
  "key6": "4JwfL1ijtcrzFD7vAUu1b2JEnmRdNnfhpcZKhPFkcVQ9nkbTLPeqBvtDrDMRAPaiieYYUt76yJEwF52skPv7E2fv",
  "key7": "5ibzM76BYY2XTuWYu2RZWGGycHY2eKZ4NE63nrmAYdYhzmeTDw1oiBsPhxcScCScAWzktN9y4oFDA55EwMuEA4TX",
  "key8": "2ypGe8UMUCPuQ8ALvdobmuEwjFooMmDayVFBj87fgq1fVgh8f2YkxMtcQ6JJx89tDztPdHzsBEs62zAoMJ6ejxdX",
  "key9": "4aDAoGbRRhfZEATnxvV88Z1RDJTwhS2W5Y7XNC9DfM57Fgh2anKT4jHyVumq5ZYNFfTknSxstdPNikBfrCw5Y64j",
  "key10": "59TKQeCeT7D8wftssxLCYx962vnwFKQ7Bq8nxFa2YTud1BSN8sq86uHCU1d4v1wpaLbvNwUuB7j3ArM9moqdeEyF",
  "key11": "zNvubodmD3YRk7JvzgWFay37zjpxpA1JReWZioTJh6gmj4Djvg1c4hHYB6Ab8mFfsKND7ENXc4i5v2ufdiNxUwR",
  "key12": "65irk5WH2FcfgZA6pv9XDRVinSSKkpGxDBihidinSSigrdmtMo8DzxXJZysrUkQeRL2b4djjruZfLiYgVvwnBxZV",
  "key13": "3MzpN3q54xh5TtjeBw4BqchhF6P81iQ1oeLCi5xdXVZBJ7EXFjmzebzBD6h6BE7geeomGDtZHdkGf5kTwBW9Qm6U",
  "key14": "uWUtGnzK3dGedRi3zuXs6keTzVrmqEto1io8dMXh16hJFqtHDFoUUkVdJxeR9xtuFbXQstdDyvQLuE4M1fegU6s",
  "key15": "5hRnmKNryma6dCYGRXHLmS4ZpRhm1aUWTi7AmVpfAwb4aP7qSpA36X16cEwhKiBLxiF6QL7C9DhZvMNxorKudwTz",
  "key16": "2MV5hm1VKakTpxbjd3CqE133vD8NNBVdPvuS5EosQJZXg1mhoAUZF2NdGmM8k1QLKfUdntKeGev1VY4b1Gey75Y2",
  "key17": "5H659jPbtYfbkkmtujALkcm889TziecqLdmzFv1R1CL2LDRqfV7Sb9S8Hfh3vKtYF7zR2M1UYLzaSuGm7B1Rpqhz",
  "key18": "2uMsv1d4R4zyeykxZ6kAdaHo1rZtBbybY8dGUxZZuHmZWzA5QVYQopchhnErxEQLfCQ2AUtoNmfGEHdTeLBY6eWz",
  "key19": "5SGLguYJ1WKg43TZe5tkF5poYQ1m8KvTeU1tfiEjn2Yb29jVcjpjAgUwaRGFgdWfgwagjt4L6BHn4SHFFR2dwDVU",
  "key20": "JCXqYMyn9d2r4RzpZ7kgMLF97KFimTZXHc5X3Wi5A4sBm6RrUZqrdozc5RjfdTymd12vQDrTmQSiofQNL4qFdhQ",
  "key21": "3ey6pe9YHmxQXSqqtzYSxBX6jE9cm72BcGC3EBzpqYnfoFVVosN6uuz2bHQZEnj3CV2QPHjhUwdjyDgQ1gZ3u38j",
  "key22": "4oMrvPEEKB8R97RqtgW4UhHU4fXkTWnNjyEixAkG25MmWHZQPScojXZWeM3iqPYhFizpVY2ZRzonXCkYoyXj7PnA",
  "key23": "4435CwJJQMrDzeHctdcu9SG2H67c3rP6RL61PBpBf6A4JDKWZQrvnMHwcdbKFhnhBxdSYG9TFTe5D7t5eLvXnEgT",
  "key24": "2gFDnNxDfGqKryRAXgrQsePpiHwdhgirqYHSZTn8UHj119D6zQ5Q8T8Me6YzKZhb6a3eXByeT3GzdRWQi276NmRb",
  "key25": "2qBB87EruLJf5abUur5WdbhtTnBPQenatAJ7Lpzjo2N8vysPWS74nLphMDvH1NXsVeZznQQME1pqq5HL6Yw5W6VK",
  "key26": "4JSVEALnREimujsuvWoHukCqpgVyPLjMdPK7ipqCYBu3YBdjYPDCHESJw9nNNxKbEQYuNDSGVNwBjL44VCFLZQ9t",
  "key27": "4SB3nEkahzXkHyAb5MmLtbxLX4A6pCt6wvLuT2aAzoudBUXhqBwx3jVuAJZ4EhujPvZW3pUnjFHxBSeqKEFXedC6",
  "key28": "5HL2uWMKYVXLSADASDnypTt5yrnU6UG2Xch9ocpHJkEbmhxarWPJVa98VS49WUv6F2YBZkDnsHCub2zjazn7jqHu",
  "key29": "VqvrAowh5hRSQSZ4ZiPeaUqKHmo8z6zuwqj5hmtACGcqiTK17tViQ4ezGug9H87HoMKP3tvEguqLMaGLZrXajch",
  "key30": "3HijFzQeYdpkKppXSpQ1pYmeC8hmvXpFSz4xNWjCqiTiuZrazzFTZtYVrvLQRJZd1j9MhkYaDr1gALs8rhoXsXcK",
  "key31": "hXGYNrMWsitfdmhKk3g9WUEGGUMCHeQuMfcczKLjeuSWiESc1rVY5mEah65ZUJWKTMYvvvhvnoHyaoGGiAfp3zy",
  "key32": "3HsvjhzTpfyWQTdhiJyGrBuurw2Fq4DWXKSQBwSahgJ4npSrBEYpG7f4BXv172i7mGj5DBb4JvxssKPZjKmGdm4J",
  "key33": "4huqVSUYcV92k3k8yw3YrN5PCRcJ25QTwYsGRdEG19ftRi4ood4Q5toYjMuW6SEmUfKwAHbDzdrmcV2EW1ob9GqN",
  "key34": "3KMwnFC2VqLkWrvthLuPMq3UJ4FwfuoKYv3cfZ4bWUXnoboBdz6RjVziKccnsvdix5hfkKZkGj3h6gZ5cS9y98Tv",
  "key35": "2PFsa27Qn4cJvf1kV5nh46yTJmNhuyMcAXgxoSrp8EUqGyAetmYLMPmAGXMew4jpJwsX73oAhhPrauHPUXHR4cP1",
  "key36": "3Wx9foRoFT56RYugrcSQJnh6MvyCrWfyYfrMJAzCq7pBWgVjft3VoaE3vLUjQajRtfvYcn4EDVRCJzBT6QyzzTaf",
  "key37": "Wg8dLQqXRGUezCggXNdBUJ3buMcng4pHUY24xJLKWyTandf4xdNhYL5eHsXUbw4amkoVGhjEicAUWA6aow8dGUn",
  "key38": "3wQ7tyi1aU7Psz2oEZqS5kTTxtHGwZLmZ2n8TzErt5dew3q7DYkj8TXqzPuUb6nTUpwGGL9oamb2dvxXZdvf6UXq",
  "key39": "41r3MDdsMNVrWk1P9n41VxJQPJsE77V6GhT5u22L7WoT8NBkiMdLs4RuhX5knzrf3F8wkTWDZPpJWD1gN3FFRgwq",
  "key40": "4wcBjVcncbDBz98KqU1cG5P8oMNYNVuijZxsb29dm3P483cS9nV9y1jef8BaYCWHiohAktuiRtL1yQXryLhkpTAj",
  "key41": "pDrLFKtMFY6gGuHFTrKFTAhmyrRFd8QyFbopGjxtCRCZBufyr7icbiKLNsUocqVKij387PH7CEqtBkdz22rKZ93",
  "key42": "5Lm21SpGLKcKw1pSN8tcWych247kfQP5FLZwyhF4Dm4pi6SrdUPp9wCUzJRUVJFxLSRTqFdzrCMcYwif355pb8Rk",
  "key43": "3CAaZhwDynCwJvbvoJzrhCusr7xDPeYFoLJofZDAZbphkZXjcmEGRVRmwThVx1ut2vdPjqku2UdjwPfEwe1TNSG3",
  "key44": "2B1CiPiWLAnKaH1Ej7xsu1HE1NT6UTa1ou47Uvco8Su5xgjwPv7eF62Bk6S3BZRkpejcp6XcSFHFPAiS6adYG17o",
  "key45": "3TVFu7fwxYrUDXzv8TPbMJRVqvLaLxdDvwvUWSFqXjH2Xui1yaD87vQYcn9phdZCeUTttW1MpLpKuFDbGJAUqZec",
  "key46": "3qpD1hmspUvbMGCdV9frMqZGASgPWHknYjdbML88sRaPqHxd9gKx8a6SMLBzFdhnxc9c8HRRbVEgZr68CnKPm21x",
  "key47": "XYkxNJANH5Qw3bW9PCYzst2gdznDju1JoQf2mwsmHgsLnuUj3MbpETBavHQScqi6rMUhyhHnjkGf2zWED4FU2XB",
  "key48": "5JzFSX4kKZn9c92NnECKoTzpeWWf8Nt33MKycfGbqF8GAYCiWi5nDw45E5rNMwXXQBh8sa2SomtVDRoE7EqrkLA",
  "key49": "3TPskXD8Q6S8E8XoYtf4LzZt2woJh7zkJ35RUbUF7b1uCJf5kD7msa2trvaSgz4wtvJG6e8dDkvo9pjjAEqNXTTH"
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
