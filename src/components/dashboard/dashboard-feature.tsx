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
    "3j5zQZEXKLtj6RdgdhPSUHjHcQhszvKZLcZ5b7f6ZCvNWeCbdmDdUiS6xXot1wyQ3gyWeF75S2W2KgvXBYHv2dAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RGGwFaqbFpDBPKKFAwF5bp5rJeBpqoViWRdUBTSh3hhQEvHAsgsBNZ5oJ3WeJaXzMETp8P5JA8YchYNSZXjFu9p",
  "key1": "qPqH1cLeav6ZWxM4U6PyvpCHh6zwrTUAZ1wK73FJwXagsmUR796xNLCdDjDexm1DUfAqP7w5oVBtN5KWNS4sPHu",
  "key2": "2jJKakDr3NhvDehCSaAv2xPf9fozp8CLC5WTZVFPCdN6xrNKqhMWK1XeBoqt94GGdWnsybPRXdQDm2DCAje2SxQt",
  "key3": "27KLPz7xL6sNqPyGwgVvZhc3QqYmtqQbghLCY8R98oBmUz4TLRbwT8geV7XMiX2hxkFEqy3sjWzJb1UnpS8xWmuS",
  "key4": "5qgFGH61uqw3MFzpfbr5JZq3yLog8zTgJ7C2jWiZ7PBbDAiQ7fyt4SUShPJaYmEb688huAxvXRKscBeZunhSd4Fa",
  "key5": "3UtmJVSehZZ7QVpT6m4xWmmdyVPYxXcYDQ4yWWyzvLBAYbpfhTZj9XfYvXUEqvqNx8P66CSA4ityqDaUfXjKe97n",
  "key6": "3xCafnLPVi8sUwucEd7Qs1ZzveEwFiVcDy8sj1crizHyqqyxPF16nWPYSTSivMTGDCHM1PF4EWkaLD7hooK6Yqh7",
  "key7": "5KecpjFymJtsZjiA8AtvrHLuHSt4RKZvfjMHUpTQ2a5N2AGgExNQahUG7xYv2rPSamp2SYWNY7ZFbq5t3J7D6erw",
  "key8": "5nChv18uJB5xzVzUR3wfZKdHSUrGw4gJCgXq8ibpAubSsbXwvCMy6ZvxLYKctdurnspF5saFyTEDedRtJfvd3KTt",
  "key9": "4zPoBTCg3QHq5mvXKQgq1nvAD4vM3ZqitmjLN3Z1ACj3UJkrZxVGiubMM8s3kJmbn5yMfFN7YjUTvHaHQXzRQk2m",
  "key10": "3X779JAU1W2cV3PbrQCW2ehk1zw9x3XE8rsfTuCbPXNqA94gMsMdykyRM95KyZhcp8NuwSvyV731cfnrGvhrBEwK",
  "key11": "28znQm8a2uGcQEhnD5t4mE5PHawTHYx6KJxFs5LX3Cay4mL8D7AYLma2kyaqmASDN4UAd6UtyF9AMEZt1MixipwZ",
  "key12": "61q4UmTsGM28cTiLrNFTVba2tHo6aXY6fszS5xaq741if5KUi2brBY4Cb34D2QMCFT2XrC5KNR4237oVYxEi9X4N",
  "key13": "36UVJb4u9otKq32Cdrr6LCPmgQRJFhqPjuQ9MowciARrW3zaeViDmnpkBNGUoxhUw1eNRZdGg6At6jJFvewagxQ2",
  "key14": "2peDB7WNBJVSYqM8GE7AdHAWdbMBwLMifjnn4LDc3Ft22x778V4G8Fn6ZtV5kurPLpoDfri2Ng5tvCo9iXYbSu3p",
  "key15": "5BAkX2Sme7PZ49KubzmmVwiN5Jg6vx1njrt9fMyBDnXZ1jCYydisoY6UNaG5QG7RvKkyTwtQ9SrvnGuir7PYUoUm",
  "key16": "2iHSg8mRmxwwXqH4ze6XgDYoQPcTP3C7oqsVitaVwP5BnBajVryo4TMXGTYj6PiRQ4od1mMLxrHSjTHaaVL2cLoF",
  "key17": "NBfYrZGwx8AtvpsBHw8QJ8kKKEjjQ2p4kBn3RNwYZACvJPLzHgpuoafrhMhWLg9hC9gPqppWDqFA8Fhn1nh7o5B",
  "key18": "4rMqdccYHSZjxQWFfCfHH7nTT25irymHLeuSHow5h2fh7Bxy2VEgWcUsMn46Qnue9YCjLNWxYMCzB3Xv7NYL8DJd",
  "key19": "54mp9EeKfHhFWx726qhFwv2mVpjKj1ZopQqMfQ9sU8eh2iD8irWbe7DZJ96SjcLnsnMyZ1fHK7Z1BMVC7ZMkV1so",
  "key20": "2sgbLs73Cw3JymB1hd6S4iNwpEWm9nTjtofvwEiCyQ8nLWsbmgyvXzV2qqGwPKEA7gfyEaSxDHM6cnCf3VfMHNDg",
  "key21": "SRYoViYGpX6Mya3tQ7BXJogcefw9KNo1rbQP5zn4P5YgNLxrbGRKP4RXYVaUbqGJwXAgoUaAkgkuDoex35GdLyX",
  "key22": "3N6euqPRAD9JPE7BLLcoANRDBJTQTGLKbe8jV66awA6HtfSfg2S2d91fUzivVvkCkUxTTwTyTpDK5Xx9HDigaEnX",
  "key23": "4qVgvnmjDDrQDC87KrtBqmRXTv583pwASeSMPR734xyHTbj8WoG4ZKuZMT859TnoUeDTQvebGhtvszpYVVWnfQjT",
  "key24": "4pv2A2NuWKUFL9wUxzQxkGk2nLNXQPkMfhhyS6YZFWgc2kRoifbGymWvwj66zVds137bZxhJkCzAsF2HxJAhUcnA",
  "key25": "FeTRz89ZF6V1ym1UKUaFMRh4hxzFpwBguVNkpQLMcxEYSzAG6YQoMTChb3cAoZV38V4A6ijkaJWDcxAUHEJSWBC",
  "key26": "2mubWzbBfER1kZ74bBoxsooyhPeRFbT7QXQtvSG9mo8HSSgibyaaThQM75kuGGehzANhJa1dda6Fe6PQ1KSFdKUm",
  "key27": "51Hp4bkbGap2J5zb3zosCxFxKMVDWfmRJBZEhveftCHrHkSAGEzNf7Dki5d9HQaEC6GbZMkzCHGdsqDP8LoNZDTK",
  "key28": "2EdmygmAvzYBVKB5VfGmsxqkMY1s96NmHJKuAgmKHVnGTrbRqSTFw4LpWiM8cRFivoXMCxTPUXf1GWXWcdxiaAEo",
  "key29": "3gVf6iaHFyxeiYb2CdnL6hsh3u5CAwMZRUJJ3zqh8ASPaE2mK3cNi5DmVvxJfkiUeoh2eeya2kBRVjg41EAxtS53",
  "key30": "4t2zyQVrzSqdSRFW9bGzkudgvDFcm9HZ6Rz6JniYAjRnt76W6CqUia9Wz7RkdK3ALMLyLXBJAwEWYXpwnurjTFYk",
  "key31": "2fNjkeV76ghC4d2QwrbBwKSU15fudXpe8mFpQKuGHKHPmCS7YvzX8oMQCstztJPmRJo7bXSnujfCkJ7gCXyot43Z",
  "key32": "4JgVxvcstL4LRS6S66SNhsu4kqh4pjR2UJnpz19YqPPwuryg1nkkpqUdaqF1RW9zASAgsuwsyTPPMmJYHGwc4dco",
  "key33": "4kGBUWbFRNVgrrNPC4x6XWXog2yZ6HgwZEDiQvNmiF4h95S9mXSRo558gVnKb43vudyJ2LPYL5ggTuH7kkq7ruya",
  "key34": "3USUXzGx95FTb64URoCut6URk6zZGav6wQ1S5Vz8M8rgJDfrLXxxE5EonVy9yKhkTXz6rUdXbAok4M9Wu9T4MBfV",
  "key35": "2mVAb2ZCSSuHPeKXr2qHSuWc26ayQUjSidywQp4n6wxNYbUtTSjPyFpCwLhhfmXHjjSjuT2q6XHqXViLt1xncmri",
  "key36": "2zjgQVWxvZ7wRVXm55mD3ybLyEvYo2kW1tCsqEfKB6uGQbaUm5biVU4eHjUrykzHjar1z1QZy3vGatKnjNdHyeBn",
  "key37": "2CS9rdtnfgQVmRZ3DeMJCDwqNBJwMm4AuBApaton7zfF9mKvUqtaLTnYExy6CTQfN93pjPD8pzRYucewV4nK1yva",
  "key38": "5Rmf3hAy4gQAgH94enYrmXGfdMH6fUhRauizAbuPc1PzMmvcLmkcCfAgBkfT18bZyus5RVK8DrqjpLUsf5jHucW",
  "key39": "3Jg3xVeH7MFpQjzPn8yf3HwmtMfkz5Vf8ARpwBqsHJeEEykrsXQWY9zTMNpxii8KVAfboeK4TF81TTYdRMunESQV",
  "key40": "2ZeudGLmeHPfskme9D9WKJjfL9Cx1jC7uiGNA2zGuwb3qGXxLK2uERk3iZQhisc5At2d84S65RS55W9vtbahzTJC",
  "key41": "m4eKjoX8BM7up4mjwZKWkBUJJgjPQwHP8GZsgJcv5Vr8s9RFYcvVbYx75nZGWsD8HusN1PhL9CY8zcodNsxWYot",
  "key42": "5LZ4gUZLC5vzuQcovxMeregWCnDBTo9LxkKCRyrarZRYJrDm5xPRyfRxaLX3ofmXXvnneVH5EdijEAWBvf4PF1h6",
  "key43": "4zQM4vAH51bznTMRuixRUehhpiM54MfAocgeTwHSoutYCkHKkpFmVdwwP45f8B9KYDCpSB53NChi7gvZSv16Pw5U",
  "key44": "Y7khvgmtaiEnjnD3ct6wSPjtJgg3pq6dRr7SKBXmRieiseKJk12JLemRckRMckDPZ9TSKrsGuCAjbLeLKWbUntn",
  "key45": "3cdS5kK5Ld8jisomvjESVE3y6iHYv3kfa4GuyfJaCbSfKbEzbqUHAnWAaHPhNgvDDXSeUkDfJKrmgsJzCnMFwcvd",
  "key46": "2CHg7tBKVmzGgGqtEVPV3E6bWp2LtdrZtRHJFRhReJUDXGTeXxNXusTjcy2AoNNRZ9PKfQEGrQyyJiFNCDG1gJ4c"
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
