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
    "5bcbMHs777zv3n6GUb3yT4nToWHWRVKJKNfo4PqhCRxUKe45dDXd2jCpPH3TTdQAvHEkvxYPzgymeL7mhZ6oZAqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MPb75Br41rV8Zn9ecnqkLr3kTD7nhUFcb4wpH5NzdvtybgnKdxth1CUF5yck8cDJRHebUikQoUehzjtXVGckxY",
  "key1": "5xdGTWgaG37o4CUGjdKeEwaHmsJ6mgRYANSuAWFF4CuT6VswSDpkQpMkvnerYqnaLErWQiBy4A9t1idPmXncKp9X",
  "key2": "3W1xaMfHUWvD2CfjG8nrTsfT1Din9y9sqCjeeCmP8Lu5mh3ohh7qrYqWtmbX2Sgq3H7QhPLaUyvpkRwhovLLsZrX",
  "key3": "31zpZFu8xSKaXkrNTZ7RUuX4inqDsMJ2g49PvU8zb8zDBF7T5DBDKgu5fB5nbNS4SCxxAaVPdh5hezg6xZwPAuxy",
  "key4": "5X59VDrzqcmMQjNPLzK4KvjTFHf72hXy9KCxiboecXrwFWfhTWgcoU2WDKborE1QtxNdZTaW8v4pFvWxCZMe5pzi",
  "key5": "53NJ13hr78DZE79JtqtNnyCtNRdWgtgh54w3W3Jkwj1PpoqwxNNyrGxkBuVjhow3vSGr1oXexx23ZapJYfVQmt7W",
  "key6": "3GUow456WNczqFqSdHtUjVF6Bn7DJaiFW9vyts8e1XKbSBAKZncN2vguSfeDMU4AMbEtZHMFg9ttbFPZSMM5jmoj",
  "key7": "64As1uaNSfVa8jipQtkSErRcuk2qN5DNBybannbuVZFXpXSr7Ld7Cq3LGaT13aXhvxMnq4HR2nbxvd2tre1z2pQN",
  "key8": "5x1rKdLsYASVUJc4yf7Sk1i4KiQNQjMxm9hbrBuMNegvgAHRYHQU1j1h6HbKrnyvbt7eMsA6sv2dEjjz2S1sbexH",
  "key9": "4EJUkM6gDKQShumoWCxTKGZ5sPsHKoD9r7Uj3DYA5TdaxeEK4uCtzMFkPuhpzs43rKWHp3T1jKjMiJmyXz5AGNw5",
  "key10": "2QuNvj4j1MshagfCHVwPmaPyrHweDTTuqASiQKxypYv4iy3oUmA3Z7XejMK8eJguan8aJWoc7XBZSdgGECR42haz",
  "key11": "4en34LqWAFzdzewnP4uSK353DY8LwMe9iFty6C75Q5CWDz5j9jKZEArBd1WyqEu5z97wkT9aBRCYuPGJBejwq3m8",
  "key12": "5BWdCDFJrED7KjfmvoKWKxSFwMUNDJcfWiqbFdpeBjZrV1YToorRbKmC3zQ9vR5nsACbiaUYnQ1pgPQxS1ihhvUz",
  "key13": "4hwyvqnUUQXtgc3N9fmjyGAxFSQL71toaZ4dd7Zv5a1VHmQ7nP2KWg2CstqdPPc2Q7mDJKFCsm48pi6qBNFfWAn3",
  "key14": "4t7e8qhpfhV7PfHRFpkueiTKBq1ydPcrPUbBvyFaof1FYRtjP3oLxMEsW8oCNeSUwXHaXr2SWVpB4P1rJhbw4Ar9",
  "key15": "4HL9qnbZUn5getqcDcHEUNwkXZzfTEFY27u2iWSEfbQknWkaL9Yuj7ZzNwfj2SRR26edrYT5aEgAYqK7N2SXstCy",
  "key16": "RuvSVpctAWUkh2NYEcVYT6PHowzZFw652y6PVgPwvUDuR9wVXf6d2vGEYDLxR57A51JiQTeRiKm1ntjGC1sNnt3",
  "key17": "5h7pGuwMR2LS6Kg2rkv7aryonpTsTiBgX77BUDDEUeUghPtDDdF1dyb8Lav6bya5yRqSYZ415E78Bobzakq3mbn8",
  "key18": "2gC6UT4ogYwkMYM7A3ViZ3uhguy8PV1u18J9EwGJscN24p1Vaneis7toYJDAEF8KxgxjFmQDsrt1GBotT1u6FF6B",
  "key19": "4LQpp6Wtb4VCzxCGJuTUjgVPWrr3xzeDCHueybvjdfAjG5hpc4YNEZKXtubu1A5E9YXHvZ1s94BXsMvcSbRZPfxL",
  "key20": "3c4yEDBGoSJY424c2txGyXcQdC3rno3Wo5VpjfQV9ksLV6breh4Cn5MNd29pg69pU8FGi5g3bLL9FpNVXsbqhzhD",
  "key21": "4nzJSUL4kaaWxqq31m6VEgqwgxHBu2NMKFzkisSWST4oS5yg5tmBeSEBZtuhfbCZHjMZ7UYua2aiZKyNdg45Prbj",
  "key22": "4H78q7QFQqYJ5h3bHKWmTvfmnpFVYgrvNwGmkU7QLrNX3HEnptyS9Qe7gcbafhTwpPvuhHKtt9LiMZ3VM54SLHuS",
  "key23": "5RkYgCkN9zkvudqXyeLrJJzkkx1pkFADFphxZvpKu5AAXQhFUdEdviThYWvFxL6dDBSvmBGVunWy79spuHj6x4Co",
  "key24": "5cZF9hSxVcwt33DU37aWSboMSvSu4a9JqPTFVF8nyhpCKxDQhVBn4a9awxD4mWti8fMnTHbaw53T72yfxyy5XmM",
  "key25": "5NLc9wAMpzgjojrFeMKkJj1dNWBCQQMWXY1tA7rxKxyvbgNFDuu2LtGUrsgBgJedjfYEJqYe6VRuEFTZYZ8SFF1v",
  "key26": "tNrmP7SKK1ZmVKL5zD4CXAHwozk4UdWPwQTATY3BZFCtKQsLGrT8GFNy3NnFXfv52akTByo9ooSed9kcFN8rBHh",
  "key27": "5hWiD9aYFKGq2wAvSxe7rFeGzddExtSaujKuBbHkrdqQSQZTUTSNh1yx1hcmc4jb7MU1SBMEW83PwNy4B8i1RK5i",
  "key28": "2kz1ZF492QSSmqeNnNdQ7dbBmHu6SdQ93Z3Kv2sx7FkoB7hVif9wnCexHA68wVxgcX2DqwJkA9pWpGsPStJWZTXV",
  "key29": "ZMjgcSZUSJYjXgW17aKNQLDPRarRArpQ7cioDfhqtPx1ePFrfS1gCDHmWjwCH2aZ72TB9YHhdunRHuBu7aNwKdM",
  "key30": "5XCBsmAxuAFWdMLsXp9QqUzNyzcjdFWMStVWB2sPL5JfgTi1tXcE3fpyy1aNMcBFTgEacJHH6etKpc4SGinjRjjn",
  "key31": "3FDSw8fjC1NsbHWy15TwKxj5zVXefjGBn44YuNwi2TWy1LtmyV6K8J8bc1WuXbo85CDxkzhvGeAeYpcX8VoVKqyC",
  "key32": "4YsLuiu3VacFMPxnDbLDdVm5cUKMwcPLXK61tg3YBRGHxa9TgDxzeFqayecUjJbpnPfScnp8HRMiictFmi9yS9Fq",
  "key33": "4Uf5uzXjhVQeJmvQYPAT3U6eUHU6vRUzXVji9eHaUpG8Yi448oAU3PGo9SHsaJSkD7LGPZ4ao2FjaALvKPygVD7z",
  "key34": "334Z9o3Nnmnu8wdMEyqk3n6qM5ugd7Pfkb7DZecowkHAUfFPSZNWy4yc9FKCrsXa9XcZXVR3EucLLMCJQ1jE7MGH",
  "key35": "noUgZrpnkQCdmXHm43m3CmhZngdA4wkeeUfbGheiNw6SY1kSXf9r6NHUs5c3oPjt5ai4iL4fMVH4EdGn8XXBnAw",
  "key36": "3JnTcgiaP8P7rAwEEokDvLRmFTkGPs9xqu9hKyXdyRK2Jdu52gahFkKerabEd8F9u1JN9jt4afm53JigjLr3q8qt",
  "key37": "4PvLzcbsD8cevGLj8Bv3g8kpLMzxJoyhHxwkqmi671u6v9rBwiY3dHRzJnE1pNjJMm4hC9yGoDyVekJxVuB1tXqZ",
  "key38": "565QzAYG89gtz8o12JatJJdEpRdW9QhqGcPHrdtQEd4nD2YyyZeXbuC8jSxcKKnV2gWc3q21hzNvhTa8Sh8L3rCS",
  "key39": "4aDQz65RwBkzpfnDswXxanGX8GRWTwguW1YH6bxST3qVPiDeZQbKo9TWDPqhb7WAKihtUiKymZ4WUvqDoxBXF7qe",
  "key40": "4yRdTiaMuaFUXEXDLRK429Z4xmWSsP35PUAX6DpdrNqCdKKk931c2QJRbELnm7MCnT6et6MvB9G37St8jKQ1TU3j",
  "key41": "kk1q8uJKydou36M2sDCJsuv31zRCWyW3JDhLTyj7zLj5omanJ8tkU2xH5iQhN5UM1Mm19jbuMcSAsVj9WMYFsux",
  "key42": "256MW3gEjVsmb1yThiMQShQMcGzJSQY5Vu1ENuXNVPz2PkYRiaKqJN1DYrbWT17Y4VAxY5BqfrNZsgot9yZ9naHs",
  "key43": "5fzwPCJQ3j5in5pe2gVdrPc34AyptwL38eAYZJyu2UYLPreNhJkpexADFRh8ydyXfpHCpMd9jvqSrKSsV8ZEKb6s",
  "key44": "2PoP8idLqH3h4KJNzjLy9r6PQLq7J2XSMUtL87vskAKichpf3yuKTXpBhe5doMXa7Y22LDfWeM7F2CqgT8ZcivXB",
  "key45": "4Ea6miJTKGZLh8M5QgfKhUV5ZComVA3zRxpTun1d3tktXDGpZXtPXwU2paD2sYdKvDTuPmNbairTiee43MArXyZJ"
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
