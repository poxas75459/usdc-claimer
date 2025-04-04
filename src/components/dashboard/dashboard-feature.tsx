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
    "2Gp5Vekj2c95uCu3ywMFRRGv1JSTwwfQ4Kae9xP7QiaQ7qyCHzrm5tUpvKiUsnBpZSMZcZiehPMDyjbnZRNjN9Ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27HJVNp1Rj9zM4vW7XzyXEcSqsFds4VJQrNAFefycAnRhV9aAq2Tik2MrksXjvMxwczwi2CriTiUQXmpT5n8VGsf",
  "key1": "5HGCAt7bTaAXLLRL54tHb5pPhkRZgxgxUBSHb7n83iLYpm5zPMifZAxFWPdrSn5vi1CGEGoDgZvwBJH73tmbAs5v",
  "key2": "4J973RMsAPxRU8GBrnttVNYKZY8yi5UXPdiW3q7US7Z6rXrAgD83E4vut4jBcxBxtviPgYUCzc7CeBgqvy9kgWrH",
  "key3": "4kiWPJyyqyEBgWQxAiEosPfWaocGim4jUEg6bzjb79QFey1r8rtQUDKPuGfFZGTiL8roCXo5REpbmwuV3CR5E1YQ",
  "key4": "dUS45bGJLC7v1MwfLj4fuzW6bdpoz2tQErRfkTAdETtFvdMwzaJ1Uysv9j2m8HA5sVqvHsJ9C256GonYiYpsZfm",
  "key5": "2TjaFXUNMx78ojXetdc8okR6hPVXVwVJMgAYCGcnMzLi26dsfiptjkZz1f8BbGQ2aBAJNRjAgQCrUjbSEU92z1mz",
  "key6": "5nrVkrvnCNkUp72p2R2yc1oNcGiXFxqAhqupUywRJzzpWWW9LG8NfmWuhBDTDY6kujyY1Tmf7QzAMAJiL7HoX7Gk",
  "key7": "4asEu44hDBR1wehgNvza7EvvgiqC6XfRZJkXHeVrHFvSLpt6T6iQwZMYcaRVxarM3tsmJRwWnVfm2PTd2DTcsipf",
  "key8": "3GXyqqnB2P1xNiHjtdHHR5ETEpniLkwrhS1jkFz5d35P5pmco8YMqXhUjHcgPMDUp6L5KevSqZ8fF4dw8eifuuzt",
  "key9": "4yeKrrzFaRVXCxYCZxSKfAj7JJALyE38HQKY6wRuAFBfXTWnyVej7BVN8C9cdt8CzTAH6c9HMPiJDi151YvhWcF8",
  "key10": "3bZUH7mUVfVnLW147t1wJSmgKTyacaWoboQwZsYXPbET3Vey9Lip2WdVCENV6x7P7CZ2hwyRqxnfzYx9i9ZakXN6",
  "key11": "2oNLU75DbSZwEm451eJYUH6V2cULDqKJQPVVUAJB4A4Kj2Vg2LDtHvs9EApnf7E8hheoefN72wofSwM4duDNznUQ",
  "key12": "56aZEVYC5MtyGRjRFwrEELvSKNtAexpAgAwLRRqTL1R7zfPUPCfrU6kBPPv7Cj83X4JqoVq1XDrJqAg9jcdAVdHY",
  "key13": "3tUVXy7fcWbquvX9vkBEDpiri28LTvJuChJxzFFrbzsoQLWkKzjbjXmqngiiNtxswjdnzYPxLc8xzPh2skhdC2uM",
  "key14": "2yc828o6nUrohEmHkWVd8miF3j7HdiJF8CiGqfiq2TQNuQnLfZX85qUWyRJN6dP9RYZ1K5xujvaKcwrbCatVHaqC",
  "key15": "5bDf6jCQvbQA49wEUVHc1dJPv1rvGb2bUcSdhHrukS9thkvu5YNcT88Z2yz6ncXRTSAgUyCCSiDHFd61Xo3DP7or",
  "key16": "4xEfTg6nd6e5nbcgBjft834XycnVMQ9aXv5dGRh7sBZ2CjUxorURXDEq2SR7z6Hr8W1gnaqwFRNfbBtF5xXSj12z",
  "key17": "2h2E749Wbp1NXaiuH4zfkbAKbv8H6KAg9rSwPFGBz6GCa2tirTQWQWLDC4DRHVuenwH3aL54CWpcD5cRqrFxtoKA",
  "key18": "5Z2BQoapzUihnB8hDN1gAQp6kDnzFDVvxjNTCzjeV3Z8ETaitN4NsDrWPMN2HzXvruXmRGZkKkQp3o2f7nHjTVVg",
  "key19": "2dsroW5q2MHGdMdNbrs7Ux2dUmbVRqfKwSJaGfYAGgthjn2qF6ktawkVqtztLmaqKMVr5iphx9ejDRq4oFj5A5Ka",
  "key20": "3mar8oh1AEPzNuyoi6XmLh31fuThLf3M2GLuKCD4eH8ouUgVjnwuHEMdwUAmezdwkFevqJSY6LTfqRJvqma3G7EB",
  "key21": "2ZVsdtcEMDJ9BXGFRw2UZTPP4eNtmj7JWgiK7fgfvsT4Z3DjBijRZgZ6xfZvPmQqDD2tqUTtJe5Ud4vS9QekoLrU",
  "key22": "65a8URF896HACavKz92PoocwZnATi6rr5e2cuwVQ2cgvq1fzfe8aEUyckjvubmyi6F6nduoqNakY9bdqw2E9Hots",
  "key23": "5412bbzSgnteC5PqWbQV9igachQRvNDnAqtN4NmywLEQa1dBs1WgwbENGpp8634u7HTVYfbk8HebfnBBdqENt6ZS",
  "key24": "5FFBYfbe8PHgEpxQtDUxfYPNWMdUBJvQMbZNKhE38eVUNLXSEifUdAtq1iFLA8RsxVrcQMy8nYh9UR6ssFFDUS1Q",
  "key25": "4qRnRqwXKU2n7ZzLDY71Kc2TKQTkMTC1HpQnWKm2N6GY88aEcXyJnhaiFdS9TLXoqnzH3Yt4iyFuUvpakojvHTCh",
  "key26": "5d5aoMA37GfKvwvDVLxWZin19n5tG6vYJkRCpeLFFbjojYhmafEbhQZjhGUXCq4h9wDqAA2vXfKSEivpDv7YG7LN",
  "key27": "3CkaEkJbknrJnTXKfH7SZZzRHEpPUy3oWxn7zCFnvUfVdJbxPL1t8m3ZhWPTQhqjrNkYbMrfKhH6gPd4gBmk36H1",
  "key28": "3YWCLWW663Xj5GaZLS9hbHVAqe3eDnpMpBFzXiKVPQ5HKD8ysNWTVA5LTKB4LwCv9w25yjuhMd8YGRF2VtmG4vJo",
  "key29": "5gkKgsQeRunSiJQnLwT6V9kyzbDKfzBUkZr6uLbXyySf1uxjeHumitPRhMaQkKHiUSGiELuL1LCF7eJLF3WfSecB",
  "key30": "3BZfxbSF8tbPwnszLDNVBe8tEYY9GorZRNqkESM96z4DA6N2YAnHw2hfxM5YQXbhMph5XniY6qEzeyqCRAeQ4Ln5",
  "key31": "kVqFwTFePeKb8VzJGS2FcsGZZTRZ1tvxyCVgtwEVtMiB9hpovwoiKk8JCjFevtR598GFW4MkC2o9C7VKcNvNFcz",
  "key32": "5nDEW1tSKN5qENKQsyeGckZzd8MXzEyqAzNkTyrCGmQ8v2vnz9UUh5qzCbR8ja2cKN6KKh8Sjpu4PNRgEChqmzV3",
  "key33": "2Fgbhy6JajQbeuffu45tnJ8kRsZe8qu7LjcnZTem5NkJPN9pJg5pJw8vZNNE8FnffwmcyaAPuwmMFK8WPKqcazqR",
  "key34": "3tG2PPUa3eb7PbJHuxbwiz8MjCmgZ8SFAWreJ6vnBC4KyUk6ABbgarq3LU1EUMr6wBq3FjSX2EiPEzr5guGXbMFf",
  "key35": "275ELZRgsVntmZJ4XpHkJXeBqJfLsRiVwfYf7kNPpuJUcnxdxugQEicPjQ4zqZnAsdMtXZ9cCYDGaeCUEpHvj2Ah",
  "key36": "2JbsrpbAJokK8EdUzhPaHti7kW6PJRYU8cpXrBx5KNMNzQ8MHe1NAovCY477X3RwmxUWp2ahLCAJV9tzSwBgzya9",
  "key37": "51aVF8Z4Kr24kFbyeSuWCc5PNoZeCykVkt6KhGENMQYLYcz62xoLtAVCNiq8iV6HZJyJcjbfP4dDT5siz6TnJ3WE",
  "key38": "27PeLXf5ocJvUD5LmcymJwCBGnJBR4FB6id3Ki5HM6Js8D7ugNun2Ffi3rCECG1owBtapKw6AgbwxqyMhrjPRRit",
  "key39": "5BnFSXmPeWAXTrcUsFNkaBgmQB4x3MP5v2pQkERPuE7KU378djq1pdqdKBsTn9Y3ZcYw6tJEgPtzw5FveNWUsQxL",
  "key40": "4vq3mHG51NUsjaeJvHfHFSCM2nfoHm96DhXRx1DaibPQSgKbpvZHpwcdU1DXG8wdAdhTuSPqP5PkpVAcjnecCt9g",
  "key41": "234q9VsvB3ZoywLET72X1ivR26CbtQ4Tf2yEiGeW9eTxbjuyLkwyHhZkQq3yjpCTJa626GLnaUyhd2gJ9JwXUAXf",
  "key42": "4MGRG65uQ7mrS2qJFrPqLSujsnDYzxkCDRuL9uDh1jxTPeGBkSKLETv6jr8i5tDqSn4th4fwsGXfxKJoammTnJd8",
  "key43": "sGEwaaSa6j5iMPhHgc6ndbGkQtZ1eNaCHm9MQoXjUGXRJ5i76dcBjTvkVXaNhmnXNVxnBSgx1uFP58oB9rwWciW"
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
