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
    "3XUgDWuxhmvwvzQTQd4kQmKSnUFo8w2nozRqRjgsZ2xtWhWNmoEAZCRB7zeKYp4SRYLdAb1GKQnHN9hWRWaP9EZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NYWiBmaJywnFSDQuQKXFT9XBseT6TkdkztyzzJ2cB7KKwLrSZ38bKUMqDsxVJYRkAfi7WCEwN4VUsP8eQqiKJjS",
  "key1": "38Cp5qDQ5gtNBJ98uNyYamFmvikdjVsBgXJUeka9rre3Jt7ekeyJx271faiXEe7brqgW5pvhK8SJ32zCCDdJBvF",
  "key2": "4nWMoUrUiwbzjusT6nzjQ785G3UjJQ7wpo8VkVDKHnUFEP66NXGmYWCEn78WdD2QoJgeNgsMW1fg9HCEt2ekQttQ",
  "key3": "5U3RiBGcp4hUcZXXoZjVexYjQG9mUsZy9jmqew3LKmNLUHaHHkbJosDF9BWyp45RXMRcA2UfJcD6yKyUmqoRUueh",
  "key4": "61RU5tRASgm1vHoFNynCf5eyY3A3p2kLvzqJsvbQPMpHcBwqron4fdF8Uqt2YJXYj5HgNMJ2Uuq2Qha9rV7iNhSU",
  "key5": "3y9TyufZQDEbbxScZ5btBckee9dt4XxUMZpvxY9bi6SkdaSbBeDCo2x5wp9YLoWVh8d852zaTGhiVrM87NhUvauU",
  "key6": "4DY6t2Zeq2AoR3EXG2ZbcBvEJtvrdfqBEyHMbry2eFxy25sgyxfMBqSqesmkkyA2mzTvdL6B5mYWYBuiYCwZcgok",
  "key7": "Ybc28XD7gCr8dLXhPqcNrd2y5Yjk8ZUWV8hYqUoAmJahy3KerAq5eKaQiQL6mDZ1Edz98morGFdVbUkHh8UHzQj",
  "key8": "SanwobUHaps6MjcrrCBP5FVXk7tX8GNausCwJJbnqhk2qYLWhW2hbuHKibGyt4xTPwyvWtYTaqnJRUxA1WmE2iS",
  "key9": "5wkJP2AysAghmqLBKAxcQfd4gqVP4vP3m7rLemc5A2hFRqUaXBjDSBwtxQ2BNLqBW2L6qmX6StmFPLvUiNNVdqCh",
  "key10": "5qT2HSkXFPx4vn3G7w1TyKF8dUqMysDjAsp4FyKCTypmvicwzjmKc16fzxomxr9G8N679TrKYDfCuWMX9NL27HgK",
  "key11": "4CLRK7bshy8PpTUx3NM9UPtYdkkcVXHrJ8x77yQsVRQ1r1Mpn6HsS84Wa1zWXcU4AU5d4FVhCKRwrgYLJ7kWgEnB",
  "key12": "63T3SPqk37rE9EJDempYFXALkmeQDCUYYSAo6EH5wUaVoezxfiW3j4QX1cyjhBK9YJs5JdCkjpagENmbWPoXrZR7",
  "key13": "3zpJDDqKPLCZ3vn3xgcxUmqho1Tr6mCJJ3iHNAnyazK688aPr4EUs4jKuuF7fEKxEbHKPBx2eGowe8kk29QP6EWJ",
  "key14": "4nqET8C7fUzaXitHmvHH4NPzWY43rLGBb6Jf4gbAhaj38sb81xAuoXys81asHwyt3yWLKvHjgMkbkaRD6WgZJv2j",
  "key15": "aiRuCshz2sWdgtXAr487bKb5MT2w4W5xUqhhA7DPg1JJQJeaSyor3wjCYmNTUeJFF1A1Xn6571Ltg1mrwUWvZdB",
  "key16": "5kcmipTPLEp7brHPTd15WEMxb1ntSLcqYHzwF6bT5aoRNWxVVyoKy8DvUMHw81f8CNR3xenhYSJZ8sGPrLXx4b32",
  "key17": "exzAxevEZBtxYshGPqsVRtVaEzfrvBkqsXBe5uYA1WSCQZmJU3d4x419kZL3up7qYxNx9FhC96UiybooeJQAyfP",
  "key18": "3aQzx8d7TrAWRQXmJaw3vCFiNKZBNGugSmKkzrHpKcbmCgNwwqWQJHMptnAyYn7he1GbtbF9ZdEW5Q3Cj2mSSNj6",
  "key19": "53EFuGoU9tcYQzD9kWHSaRbFHJ2dLW3ngC8WAxfmL6xvgATjey2RWKFQgqEAUfNVQBj6AGd9y2R68dXufqsfxfAD",
  "key20": "GVzLTGyb71Vv6krxdpEM2rj6Tz5bcod7cxYV148iZPjPXNe31R1Pznj7kW6EPX8Emp2zpXQtb8R1SdK4XRrM8XR",
  "key21": "4oeGbQw44NqUuQUqSFE2kp2ZCCxy2oyVCenoE2Jj8Hf8ReuPHCaXj5U9qGvdsfiMrTnMktD4UD9mVnYmztTzfF8Q",
  "key22": "3XWmEKrUVdJKoHSLrGno7Uegd2sUbGZt4BfPATbxKpr7aqHvKeMvWLu4LHxamNaJUYDgCh1iBW3vXu1xqsXJhzrd",
  "key23": "2gB3Hpc6kFK6DevTfEYiu4dskLMcTWQc7UJhRW65zwrG8pM7xwS1nySjLUEeLCczcXYLm7catF4LnnrbrRYS4rA2",
  "key24": "2uYmz6z4LZoJue8rFzLrvWdX35LQegUWNUowUSuqsRfMm8pN5aZVFvhUabGiJkb4XSRSXFok4gUn974PW1NYy18V",
  "key25": "4VxtoSHMiPcfZK6q9oAkvK9RCcjeW1YchajNb9f6uPaiFFxZsTs8Us4UwVi5goo2UYBYeP7DbvwDbHnV4Lug7VVJ",
  "key26": "5NNiBJgpYoAngVGH1S9KjwsneFK4PoQiLFEXrUj4s1zsaFXBNhpqdyUDAsjkrS2jF8Pq3b2LZnduQQqzxypN24Vz",
  "key27": "31ZtqJCni1cnCA1FpUwspUax8UCXbwutG6TA2Xm1epsyFauoLbRffqoQvTZCMcvccgrfPTHceBFQafMDQYq9hnSF",
  "key28": "3nmRUKo4nMAkYHtkFsnSBsNJqK8nWqq3cBXJ4fCsfQvRJAr9rhdgTs32iYqLdDU4iC2AAnvqc5a7a8tZZSfHkrru",
  "key29": "31zbo7ZpjsPA36K27K7mdGwkUVn4A62j84CBAot3FUKRxJwURos3NSdf6zNPBWwKMNGf8YFAYw9jW4j8ngs8tgQD",
  "key30": "3MXfQuPWPP14qLuVeeJWQaKaExAnqgJxZqz8D52zmoF7aCNVaogJjmpTDy4DndqafAqgJ9BBGNiPiUXZSjMyMJFs",
  "key31": "2j8QgTAay6DWxAKUZ58MbAPVdrAJLbYNyKDkWEBbM8jVTwpeojDDCCraKrgCzaCVA6Q5U6EdyfGhwcuNxT1ehGbo",
  "key32": "4osKbvKLpsSfs2XaFmR7ThD6GfYNzuzrxdpyaGyZnpsrGecxg5DpRaMyWG4H7czoF51minZVxUSUszNH2iFytkM5",
  "key33": "2QPp871GCYYmngnXAecYLPNVz49keyEjUscD1NZmpFoeNUYRPTEijsHYhL3XzbsNiGySKyxxPhhuypsaoktB7JUN",
  "key34": "5br5fqfBD6u8xHiiU3KmYUiTjzUGYitAoC8FG1hyxduZpzoYiWaik62wyNxpvfVzctJn2WBRkXEGbwtoNjWyaFHk",
  "key35": "pkcC2TJkyr3fEVqgnb6TqjJCgb4B7e7Jq3qHRQZwvu2xms2UVjhiTc96jr2ENJMuXCjCvksiVbKeStKhvzmxMtF",
  "key36": "5sVWUuvvnRsxutgWzXhUZW2h5TAsTcr3h75cywMNrVkcPZ65zsG8mp6zqZNHQ5t69GstC9SvBQHSbQawNDJeg6At",
  "key37": "5T89V7mdWhoZyvfoXVUF8uMujjnKeoKzFoTqF5WsV7f2NYg3JjkpmYgz6g1kmfPmJGJUaMSRZVYJX1fqLRy75Fxx",
  "key38": "4Wv9SDZoZc6BsmgfUFzDCgKMkJj3Levp6bAKZXCsF36iHGesRcR6ayVyPYgWW8JpUGkoyZnXLRUsnfMSU6enW2Xy",
  "key39": "3w4skxvm3kHqidRH1QHukit541onUGqh4pSboRkjvHLvoBpsnEx6Gt2fVorfsL3rDirGdDcWGVcAsrVnbfZxdrDk",
  "key40": "5imuMYAh2YUHnG8vydPqr9bVCaEXG5gmHq5ccJdrETQVS6e5KaqBGvyzjD2pAntLU2vuS35P5SxwSVB7WE5fdQVZ",
  "key41": "2HBQDG4Wmnayob4pVSyFNXBX3kgxZ1LrCTPPcHhEEQhP6eNhGiWNME3TwgAQXhXDDM4SMDEBcXv8LUyATzZMEtXR",
  "key42": "8Bpmgti2p9CJ91m7KWevuVdPTroqjT9iL8SYpfB15phrLoQicYXEpj5DJEWWpCzQv1eofB19kJt3FDrKyvhKVAG",
  "key43": "55T1SLwZVRxzYfT8PHGbTsTGZf15xU4UE3XuqqeHa2B8yzvxgBsxtdoPWsg6KqJLJEFPTgvmR2sVEU3DkFxEEZQT",
  "key44": "2pjRnAMh3kEMaez5MT76KuSBHKE72W4zdbZYhNjh2ZUBfmRnja9QJn146ry2Z2iP89CVvmFX11TCR2zr5NoB88Cz",
  "key45": "LnqEyF9Rxf5cJEYUvRXAGWNo8XnJbXa9wxbBCz5yFkgAVdWxkbr9at7NLHNt97Q45nBUHUjfPjuDimhtg8R4hDn",
  "key46": "283JmkV3SsLN4GJ3rfTe65NovyaVWKD72mKmR8WhDUxP7XHqqq7sdTwf1xfnawKSwGbmXZdzosjkmdQVbjUzUpvq",
  "key47": "4nkG2Av7rHASE25ndtvzh9mUrZ914tbZaspEF8egYm5KBnFHXpLzXfMiBFbFrWFimf3Aa8uMf79JWimFQ1gWVp9f",
  "key48": "35gLgyL8DsKGwsMoAWY6xAu5C1VoqNLiyaHg7ceGf5MBXtVa54u7pnrw7TyvRgVVaWebUys9mPTGumenvZxuSCQV",
  "key49": "qHcVg6JJvn6G6Zju4bQzsMxbLENuhnkPfpzEUFPgPxg6xfyywpB7ysamKM4kFzoRZP72UMvoBoGbMyYwCpkJgoj"
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
