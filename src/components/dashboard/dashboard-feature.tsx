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
    "GoVHv1Xwd2gsuWarNwbZAT7WRpumvtRNqmJqMc1xm8fSk9VQU5wKjH23ov6EFGuGgYthJtmYuZBSjNaVQ6yP9xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38img5r21pSEXdWAhMTxCLHnrTEBTGPqza1Fxodawn5vYaWfSZkhrkz65MjEUk8X9amdyA1fjRG2tz4xKtwRxNBf",
  "key1": "2sYLBfUungxZEQ6ieFGGwVnte8Mx9zYULGzBDx6Dj7cGvtRSyQRfA9X8Zjxhzqzst4TYjqTgzYnTjm5EuL8PuLFU",
  "key2": "5f69hCEtLySowPsszz32wJepmccUQecMDG4vHYwcDp7K95VDh35mSzcgzRz6capCyWATP9DMgs3gHDPKHuQMY3Mo",
  "key3": "3T1kibU1YXzN4GfzQCudj36dWcWCarfhNauEHSX81vsEE2HP6htyXV49A61QUvXBqPHNDK2FqnPvKJEPTgTxrQX7",
  "key4": "J9eLEiNakwvvESJwfMikZvfHARuWNs7JpkLKDfoh4PXKHB3QueXESLNj7ZR7BUrXgrcqTJkmjfNJoGRVgBjpBKQ",
  "key5": "3vTFdTytEds2Rg1ciq35TDRiXyjnmoZaYPrXTyFrzjScRKDFBNsSCzACYHtaxcrbM4nxbcbFxEAqHiDs6CgRXR9J",
  "key6": "2ZMgEbXadeKo36raMaBYs2PhoqhsVubjts9nk2CycwtEWPscaw7sJKHcABiQvNd65ZZq8rhM1zugiZo2TRGVY5m5",
  "key7": "5RdHWGXt83PqdsmsFoKgX26D7Y9rxhgtH95UnjVM9HV2zYCQj6UScEY5yqhsjp514ygdCCMuGNRSNks6sEFC34we",
  "key8": "4DKcMp7XUsDUZAg9Tm4SyhrdRbVvEqeMz9uzcwdvvRA1oMKzerNKpaBvBpcHpjwGxn7BtDMzcRsXVNDeDJzSwotV",
  "key9": "4D39weXtBgQXvY2T6qFKDwdyRvNUAdcvAYLU5LMTcxFPhY7X7kjjGL1jYriaanGL9BG24wZdGiSxdZyncWr3FMM4",
  "key10": "565VJVd8L962AkMxkjJxc6u7U1gZf4CW8PzL6Md38Sq9uQ63AqfS3CY5KBFgTG6opWUSCt3qQCikUTWaug4h4Ztt",
  "key11": "5gnfCmtXFr94mcw4goXxAe6oL9dXcc1QyLgqfwAQSgNGBhPWfBnecjFmpC6GLpPQsn5w1B2KKwGM4JPqzvbD78u2",
  "key12": "2f74CaoQTafBufDj1vL31sswjfanmtceAb2ATNmtAorW2sgL2C42bLAVrged9KiGCQ5trLHnt99Q5voGE3hbirpU",
  "key13": "26JxwsG9T1Y4bfFUM9Kaeo9N5viGPcHuG2c5yMxNT54J39ERWJnnfnfReij6Ncx8v1cjzsn6myFFQAS1VCHjPvAX",
  "key14": "5PALo6dJD1KD82eLo1DGaYan5qK8HAoJJWvqehKxTEF8tHWV5hjtaLpU28r8VWuzDrLwu7n6Koqo7QX2MAyrNrES",
  "key15": "43ATnvK6KoJinE6RXkUNcoc7Pprpzd2iZ7q7Pv4fCzqp45xRZDW2Sz4BhbkbphtQLcq3NpZdFTfYqLu9XRFeFMWM",
  "key16": "fL99WB3P9BaJ1KKdHfw1h6fYf3Gk7ABT7drpZGEHaXjCrXGbmxC3ntjE18mCM5GkALYexkC6u5dHBjQB7RYn9tf",
  "key17": "4xjZDHeg72fUq9KCwhvtHJ5irYFpQBxycyV12puWHJHzmcsZ1Udk9RgpHaduF3QQM2a6seCEk38sJ9W2eYbThUAk",
  "key18": "3XYdnei5MWpLZLPAbpMawQBs7PydJNjuFuhQyXKqWMt5523nTnqp6zxjFxMfXrpLoj1LcQ2uEXdWCdkgCEmQrZ3N",
  "key19": "4eANNjCTmnP7WN3cEHmGUEBQ8nUzF9T275LVMryjKnHEESk7h6rhwSQ4X8s7K1ygRHXh3nC88h4QZVmBixnQ68F3",
  "key20": "2VUkeJ9T1yJAPME3vy8Ep1ShwVFw3A1mvhqaPFRiqcgYrtJN8J2M9jw5M3jHRMhbM9fhXAd4UYGJGAXKS4KsemSi",
  "key21": "4iCG5GX9jVuoAY7uRd5zDytteg1accfCUgQUhp4Cg6ZvmeCFnQ8NawHeNUPmmNsy9nuQDuFjjgymsca3duKBdBP",
  "key22": "4Cj9WEhN7NT1Wn7RXpSJwVzo9WqsSCp9uMGyg8ipxqHUT1xftuSByyGR4LRjtbhPssAMZPifcZaDoQoY9GUgNaky",
  "key23": "3dNC7F3zAEnfDQmg1zEyr69xfRAgPBErMaah4xTfCiUPgu9X5WBVfZvVY3NWNFjHgJAohFyBNmJpi9SkBoNdpcTJ",
  "key24": "5a6RuDi3Ebqgu9DEN94ApnmGyiSP7aboEswk83f6bg95bYR7Bkr9NVxrAa1WPyi48XANJtNVqrRtqKBzXHEGAQav",
  "key25": "3qLMi89P2iZhge2aWB5GosctWFrY8wsEAvoq94bohxLERYyWKo9VKX2XdQAiHAqT3P8KgmujGabzXNJQo9BMmxAQ",
  "key26": "2FGYHCiSiukxofpCf3QH4rRbpkrpucu67QRonTuaJaRWaFUG4Uat4Jw3FtxHTppAvc5rrVj3uE7L8UUxrgo731Qh",
  "key27": "5TLk8TtjY6y6BdsNxJdv4HpTSHTZ3ae7CiGK6QTE27qoRKK3JPJq4Ge1WJa8tbWWM4ev5iyJxRTKwE7Cpn96V9E9",
  "key28": "4EQvTAEYdHpFm1PTvPf6wmnUMTCx5NiwMGHYDUaAr6bkgoZdNsdY6yPQeJedURmMKDtfDN12mbQostVNFNU66v9Y",
  "key29": "5zovMQCX5U1qvKRUkbQ7wT7mSMLiVqz2hSQZibTyw6HesZegTBP1JwzC9WbiSbosZKg1Ejkeg3uZmhpKfuwkMuEy",
  "key30": "64cAKmN7Vzpfg3A4uHhY6X8rPmQrnyg142aTAZ9QSd5sWSThzqgsmkFDT7iparaYpzGjYJNHmWz51SMw49LnCvmi",
  "key31": "3Ex8jQq357sBZe7cxWAgHSLBnDpP3iLT5qfDedsekkcMVWDAwXEaeU2MpFj3AhGUGbmqmKxcbQdmvmoXga7B4kx6",
  "key32": "3VThP5oHu5HfcVGRvKBna2wViuoxEgVAoTVWRYfY2aJxuPQPJ8hLa5cipt5ZiTeRyaM8L4JWcaicxrcRdsv92yMd",
  "key33": "5tz7Ff11zWuPvKLxsHbVaprdA4DbDyPAWWwa9hjNnKifvRqAKhE5n5K3L9KSSHoppTj9TinWNTi3413h5BShiwUL",
  "key34": "44yrRCKioEWWyiaB4J6x1AjFGWXmrjAbhr9y9tEN5ZPunzHr76Xyr3wJ2KHHicFtEy6yYqNW2zpSn9Tm36b3kWsV",
  "key35": "2NrTnJZYdAM49oaz9ACo8uF8Vmas49dWS7PKMLTEcRj8AGu5zEvsa6pKUNL4WhHHruUvu3c5vWCexeyME9PxcirM",
  "key36": "uvKtNTPoPJSTH1ASXAKHY2FMbeegeDHJGEcWsho4oHKNUKJnP6a4oanSEWs6LcM6FptdDMJFbRwGtJoMLT76ERw",
  "key37": "3nUURX5ajD9ALN85jpwXV5CkSBPxkWxsE8okk34ucKjtHiEmrDMmEo9hJeeoLN9tgFPLAw9KAA2cwUx7TUo42GKZ",
  "key38": "3VzxYLDqsViUkARryaUgVxyjKwySrT8z9RJweCnCyvTgtUxwo2fL2UdRsnnPTU4cKXwtcnkiQf5L5tQ28nyqJMng",
  "key39": "4YzgfopEjLeTd6ZwEQ5Cpqv9MyGRJQiM9Z8qcTq1icw3AQhn1HCXm3s91bVdN7UfUV6NrWoLgZPc8rbyAaU7jECe",
  "key40": "5wdoMAtPBbHxdDmX5So2HeQTJWD6YCZhSwSotmQznYkmQMrxBTcoBGMDz6aWz9MtXGFeEJfSv2w3GSTjVnWnnWoj",
  "key41": "RCWEFw8JCpKsrKd9NSqSqC3RRtZA5tLMKNme3oBqxBHhbLsLraiizfoeA1ykHHiwWQtES1T1bDaTRse3XKbZrZG",
  "key42": "4iEzGzAwxk1r7LfFdiUhYY2UczBtBDRpoXW45ZTqPaY6JKXyLx9kuYFh3FMYSRh2xfkNpGUBqAxdtrnAHFLGrDt4",
  "key43": "3KXa9VQwdp1z4ngwJLdY4R7L5uvGAmUuxdXVeZqfQ6EUNqXQWKoPJvp1fsMtarTQer1AUraGQKYUzFXUmjtqXJcE",
  "key44": "4uqxNzC9s1hZL4Pxd2i7mfFzAyZw5kYcEYPd8dE89X4Pe6WAdeAUoBkVzeafAnwiM52Sfei1278YjCrAVPBm5X2z",
  "key45": "3EVGFWTLTKZixjGhCzqkwWJYXEb1coECBKYztNMtLEfr48xr9Wj62SE8x7bzAASwZ171KbNXW3LLDM5gp6jLBBXX",
  "key46": "3rdsCuCTqFMJ5dzBtQCdcWKiMW8DRM2DPygrMHx8ApN59K7v6EvwE5KKzjaNhpqNJjePoeQ3yUQNdcFRZ6kAJo3v",
  "key47": "XovP4ejnSTKByhEvT6Jfcg3fVZLs9NDGbfpaDn1iNj9dq6GWkMDAXBEhTtZawpFmXGwZY37o8kJAZXbKyRDeELg"
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
