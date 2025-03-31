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
    "3yELHJXfnhHYsHTJdrvJv1AhYiaQvKzgYdN2Cb3F5HxgTrRN4P24GUwpSShFB34NW3BwF7kffmpzRxQdMvWnMt3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W27iCuSqKf2h7cd6Kfk9rvRjifRMuoov2XKPH9568gCFwJNXbyz8puv7pGxpG7q5v2XLsKM8kMmQnnDdVvkczmk",
  "key1": "4YcFpK1PK62BJvLvJjGFLTNrRq16AFrT5tq2RaA3UnLP1jz8avib2Kj74P3WjLVHg3kcs3XJFUWEUiGVF2cA4xRr",
  "key2": "4D5QSV3oaka7RMVvLSD9117wmjZD3q7TazzFi1VTbnvc5UNHHJ41j16PcHN4wajSVUBbWbRUqbsTHdXyEKD3CCNh",
  "key3": "3PuyHLidEZB3ssmkYvGD5C3JvvBiqzB7oAGnYYXpyAdnVc4EUNiC278u8yJUrPuDM8nNiPWqJiuB81zqGoG5duBm",
  "key4": "28LUJz9mrMNtR1rJeib8Wek7EUCH65TruhJ4FzU7re3vAruMNZLEPWt5txJDLu3JuY3KGSYDre4Qn8FYku61KXeR",
  "key5": "Et8FGpFrJ1KnQgG4ruocjmYVFxdcnm41hL1E7EzS8dBvMHyqmbWW5H9BStPVucvWyayTJz6ckR6WqJa9dFyqw87",
  "key6": "j9S5ms1b7KRT49sHRneWWRESH767mxm3b697q7xp47NjWnnjwxRWKcW92JYMqwQsro2Fnwa66p7JGmZ76VmMiTK",
  "key7": "5snnMvi4XrYsfXapZ8A2jWuCZh7WYmkbi2QjFDs6te4SCNVX3Z8XEEaVpW18s6jEY4fTDBmHKnBN6pWPYX6WVjDK",
  "key8": "38AnLEucTDeZ8gngAeVY6BzMUPArDANaX8J6L2JWhBT1YdwfFPS9gebgnyiRTi1WkN64b5nq5HDVTMZeGkRkWWKk",
  "key9": "c1hKXxj8MdY6LJFwB8tpTj6P82ReZKoMnijjiyNwjY8Vx9JmLjhzsr51P5mVzXhWn6Efjr6FnTydvmz4VexMTrJ",
  "key10": "3KqZfXenKAWh92t7DcRj2CjAVW3n9xNNcBZfuUqcz5P6AT77Y1HX8PnS8ciRynqtSE1zegvcnS2Kqgst2WTM8ve5",
  "key11": "4fe3Knz2kvSZZK3A3ctk5RoRU35GhvUUXgjDfXFMLyaqQvYjTbYuxpSxRDKNCNMTtmtxEMyEXCDgexpeQV3VaTg",
  "key12": "3emFSDf2enjHDM8Ryjaia6tJmW8vBo1AcFbjhX6bVpgueEy4DhwpEfiP7b71xhuXnW3dLQ8kfpzquCcc5Yvv2gTm",
  "key13": "2TY9hKuZJj1ThEPxNDeLLT3Gpy8MLQb2a6PJBLyAjfM4HJU3d9NBqBmxhxhJn6JbQ3eqpVdcDjnTsDrkSfUGd7j5",
  "key14": "3qnyv8R9YyxzMpCYSfnwUz76Ez6q5hRduo6hGVGaLKiRBN7tfUuS1Ah3x6S4MiE7sFZTMbMfUucf5YrhxjAMPxgW",
  "key15": "VYsuiWRL3457TJeaLT9Rn3nRnnbbHsypsXyvh4ha6HQu6YtnEPFhBfd851sWtmxbsKfejuU7okrrNEbvyx9UanT",
  "key16": "2JtkK7yT7YwCENMa4Usw4yhgSVwtCvCUKyacGRrJdTjCtKZiiaz8Mf6Y7ktWVqzEdCmUzsVuhmajNd9gxpJgzvJp",
  "key17": "CfwWAaXmq3m2uwcc7LmkuGqZgbMFoKcrGi6s6mU8qUwkAN2L3eDZoCsH2yPMEUUzHMJWBqXGKnrWCLC2xxSZowM",
  "key18": "SPTN8VBUeNBjiu5sN2Q9S2RAJcGUwtkv6yCZQonLg4iaySaccnAhKEQMAgo3BeUUMULEysJpVzHVVQ34fcYPnum",
  "key19": "Mk5KeYNXL76DuXsQCDH4ugtGB7t3vXSP8caWhMh8BGaNpPPhfUqsU5pWjDo62o199FyaQ3bhcUSrxfuzj49sufi",
  "key20": "4zupetTZKRqCvUMATgwWj6Mm52W1utKvocBAzjjrji8onc2wjwz5fKhCG8M2N4vJ7nazc5fDrdoDvxQmuC14gDqw",
  "key21": "3EbQkNum1dP3eSwmLuc2dUZLTMBgQDb3dCcpEFfeGBPkshdD46ZqKT7ZX21WDJVAtKPnZhjDNcEqdWmaqkUx36yi",
  "key22": "2gm1WSFdzCUAbzVDk5GTkLpMUqH99pvM2AqM8ne3Yzizfa4WHqRyVuVrgoUEExTk2NZooBNvc1oMTdAuM2rgpbVC",
  "key23": "2kNwVmCo8S4zhpx5UT3Mhzk62TmZ1n74uhxHk3ocFgDrqgjhSa8DuMNAmhRuMszBbbYeJPQ9qNaBshfEbSaFaT3C",
  "key24": "627m8VN9XAXBamqm9wn1nLfwt126QgqZe9YTaP16Fd4X7Src7kwNPgdqig3qUUeqjncbQ7rAaNKWtahy8rp5CmPa",
  "key25": "33itJHkPQGnnq1tdcN6JNNx1LP1DVqM2ML4HrykoVi5T9urme6Cpx7kDGH5xCmPPcq5hyHorHZfgXD1XRmWBGw8G",
  "key26": "3k2VkUbMECjSKMAZETdNGCA3Sx8V2FjUsh25DyNe9shVy1Hen666umTBLPVHg3j6zrFL8TxFVD2kiLj1RLbCB3DY",
  "key27": "4Eu1i1Mz8QLFCRsKoyaJry8PtoJiyVWiUK1mJxQ5DqdmKDhLH7BWQ8Qz911BLsU2wd7qVUCZr2ba27iWMSELzEae",
  "key28": "5uYjqoE5m6xnYxQYMcrLvJfdV6G6jgKkciMRSHZvtVEUVKmyEgbt8HZ5u7a3qHNKFetcYNJQJhVHNcyuBFwDTyRE",
  "key29": "3D3vYJCMwGzxjEummvXJrKBPHv7U5PhbAzNmDJA8XBeadsfkstewM1HfnESVHpKCgqEmHwtoasEnUQZpi8YbSVoB",
  "key30": "4Sjc5j7UwiQD77UwUzDEAZvYHT2KEgt7jphqGUzvMfzX9GQVzhK7pQ7JHHyBq3PKySC5RaB5DigeXTsz3jugR3Gt",
  "key31": "3GbAHfVdKLNQTjNPRXkwgAJaV2PakQowMnrnn3XPzCw9fUBphk6bgkqtGBB6oEjSQ2ijdibB9S1TdXfDoeaKGs81",
  "key32": "3PU8HmZWy7c2vtHXVe4evh5mHMmuFdfHcjReDAbMrbtUdcQqkqGcAEFV9iuQxc6ca4w3DgtmgZTig1NV4zaFdPDA",
  "key33": "Ne37HYZDDBK9cJNf8HfDi3B9wwyJ7ccGFsoqf7ND4FWAmP2NRABAgdCVABgcxuLEc6kF9E4NcHgo7tySpbiSsFy",
  "key34": "3rKr5ZsPupuJvggmQWv6kt9zRGGaA3aEuDbsiaMKiXRf36wxKt4KP5ELA7BZmP42KrXRWajX2s7cTba9DV9BBdYD",
  "key35": "tJx7Fqo94XDaSrBu6KPbXNWh5sqL18hFD6t1uJaZhStswVH1XiwNqTc7JYifBvPEriKVyES4surAS8UapRQreRt",
  "key36": "3y5wvoWdpqvCJHQ34wu79JFExNEeFmdJhLPDQwd6XbJ478pS2epeBZCtkybrqES35WLPxRkSfXoxx5pfLqGZgTxv",
  "key37": "3fPfAMpsdYxYhN6L9M7AVzHVa2Dr455CNwe87kDjqhtNKHygTT97ZToF1Z82yx7sHuKM75JgnKyp3HUiRTJfrhjU",
  "key38": "4qwHmLGQTKtk18QAXPRCXRi3imcVQH8rFjjYYps9FiZ97xLs3eM5PUgwB2rtm4RtuXZ1n9Y95MoBLmqus5CwXgfi",
  "key39": "3UukL5XyXZpH5QpNacFa5cLsMBRStbGzucBQbV2nM8vz44yLD1g6XsozEWVyQVU9ibET7CKPVW4MWZ6vVxnvEphL"
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
