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
    "4iDj9pGRkKXyzbNkHTW9mqSbHHVUTEYTWgofDEV468da3mFQkYF3mmd4pfQZS7C1AjhE79YFir2B9T4EMDaqh9pX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5inqc9mM9teCmykHLQH16frhSPKLRz6R15LQHtTZB2dVxNDZtupn6gUSRdPWFLABdncu5d6M9DjBru5HZ1nEy7VS",
  "key1": "265hpM22c6MU8bPSwZ1exUw7QncgW9iquXzvjKXr2wgiVyMLfcGyJ81twGhH1yDCDNwc2EWKRcL6D4QX3s8cjLWc",
  "key2": "5Qhn3cExXmvTLARd2FfDn1NFot1FpLE3H6LFEac5Bk9zs9byZmoETkX9LmqcEH3ZEZVepTmHBHDokQCPJrH7awCG",
  "key3": "4Q54znQ3vyP5PYMDhpDyoVHDDFaDADJe4xtfHUyGeebbDe2ypDGZqrgHeqdAEPqQ1wfMKFhDxKhD3nwREUyKBtjb",
  "key4": "24nxZvhkwAvLUxfQer6uyGVSj8qiyBoXoYWWqnaGU1piH7iBi5iH3dtxBj63ix8tCk3nrP4DsZbndwQm6PrZgnR5",
  "key5": "5yQLKZ98vQPTq8EwWf35zWjDathHmutAPkUWR9XvmKTHNkKKVvTGL5SigembQfX1nJ5JT21ouHsSrCs68xJ4heeu",
  "key6": "3A7AM5fc15ueZMaK6zDyRTmRscUXuCxzdwVjWy1H8wU2uqdESqbjQ45QZZSnD975rvCAjPbwSkpAPSXVVEDT2gVH",
  "key7": "4kNfCEjkkbGGVpAZZcBdDQ27gf1tWifviNGCYYiv2WC3MBcoDfC2N7mqCyAAxGB2cZKYfgJSFPyZBiVjR5GzuiZm",
  "key8": "64PU2k7bqx1FRDBH8sANY7adxgRjMHx9CRTFCJhoYeBms4ejk5FpM8RbbKn5teWXJikovHGko3tHrHGw238MqyCF",
  "key9": "5ZRNDXsixA2iR8PbVmLMtFNkz5t1mUZdyK8Z3HkQ32gKyKq7TQqBeb6ofCE3SNiP1yrLftUQEkGDWmnbkzaa8EHQ",
  "key10": "3J6LV1sv1uHUfAtPTYu5W8uMypTRzrCxrfgafV1FGCb6Q84GHTomB125n2vBu8fz5fTzuXcedLUkTqcwuJ2hsxND",
  "key11": "5jbadn2haAJsS7yQrddpdtCkr997pzS4NW6LQJS3M9TSDNju1EDG51w3wguKTNaJZLmuu3dGWbVZY613UZDBFXTB",
  "key12": "2RBR8Fo3mNzkJCATJ4GFMUUjZW4JMyK4f5DQNTTSoRPCM92bt8o4wzesGf9gNMjjdmdXz2KdNMQLv42vkQtvYVX6",
  "key13": "3qybNbrhCndEYSqMh4pSf9HWPCq5tKzW5aAWnH3iUtpJeXbCJ41ewN3wHB5qieK58iGdH5RXwjvofb9KMap8Ja2z",
  "key14": "Mncyq3F1hp8NDuZzq9o8MHJZ9NmESfcWp4VGV6zThEWqVcQixcFqPstJMNqWXVqC7ypXJAYbjL8F3TTGh23C68R",
  "key15": "3QV5vbtRiwvBtVRmWWgQ3ioebJ4mXGxpe65YwJrk7p8zfZ5FQHo8iPSaiexzVnCX5EeAtxLzjRNnjvSbPJKgsJi9",
  "key16": "4s6QL1gMsWBepW1GHaAzuPmMCR7okJNqGdDNVjQZiQhCTmWPbXBfdASZRyno3nkv4SJ8jQfaGuAQnkuegkpsLswg",
  "key17": "3zJvpqrha9nQYogCLZ3Tvr6FbcQm4y6u5oseG43cvgrHucehpWBLYkC7gMfyRcSqxK4BjTMbVUTMVHr5dE28eSP8",
  "key18": "22tGpH7aLiya7MorgmpKjUUFM723PN4AfizL41uLt6X3wwhE8aNa8S7xFQ38KWt2NZsJRJNRdusBCFHDaFfMJN9p",
  "key19": "3hjErHfB2C2cSvAtG8fmEwTYEAA9zG49MrZKd8zu8tE1fsotKN6Wyhq4LS7mUZJJmCV8F5eFAbzBZADhutMrJj7W",
  "key20": "465pCZTJYu1rnwWGJmMPtjqeAuFQFjX8ixUEEy8LeNmpQ7QbWU4zZq1ougviRQMRFFNpPazFkzMS46wiBWFqMtCG",
  "key21": "3RYZtFwaWKg688SpHFSUuX2wB8FtpwgMNjWXW2Qqszn9g7wbKe9oCWPpvmRdq2b9Y723EhirrtEWMJfBw3Yv6caa",
  "key22": "5oRPrkDNTKDAdkY7mFhSmpYd8E4MQpRgoqf2ZR5K32Cit1rP9A1VHyutkabYRT7YSMYwonPu5KNJcncYNFiZaY33",
  "key23": "3oQ1Xoj1eexwAo4eMLtLkSJbRTnvTfZsJ1miBr7F1LcZJDBJ3Shvty3R9iZxgMrdgKhrweTwMTDvg2bGgbN2yk1u",
  "key24": "eVPEQKLkAkNe6rbw27yWeUtKTCA28sMbBqzWceCKT5YNfWjmKYrNfvhXF2mcCNxqNQ3SvYGcBnUBB94zyhuyNHC",
  "key25": "2EbVV4uyxoqGTFMbBjQZUhD5DJSx8pp4sSVxMqP6QoE1vmtA2yaFjrQ55rrZ7C8vnQVQAeCrAnSTxf13ZYM2eud4",
  "key26": "3AzvhQhLeongF8LUwEL6gdTXVMdbq4mWJxSKKF5M4VE3G6PqiPENLUnuakq9zh3PrGdwbkFXXFfFiUAmvQoW9Auo",
  "key27": "2bHHbNSg6MhgiZX3QJsn8osUeqCLDdePDrFcykbVq4s1NsvWNjFxRq1hDmu8B9JenyqM15HLSqYvV52JWJvUGFKP",
  "key28": "2L3CZXXmF6qJ5Ws78vYt9Eqh6NbVvcL95Fkq453HQmaSjqXyKKLBcFRUzckhZEfFibECvobthGUGg7mEaf27Dxwx",
  "key29": "qms7MqDpd4nVeRVs6hfkf4gahpgxd2YqW1scdCaJnopw3NsgEpG4pJnJ4DhdxLsVkeJ9Y3jdQ3UG9g2sHT7CUJ5",
  "key30": "35KZjacMpcrrci1t585coxAv9Kat2d6d9KBDSWGADsZdQMHPeAw3rFkfXFFWk893ZuwJJDpJKxnQzgqCAhdMSD24",
  "key31": "5WwsxXvTquvMZ4mduWvh4FyEUXemiNjvDiNkCRntH1CbHvpvgk9zsnFcjhtw3RYyCmaujwVAxw7xcZsZayYCekuo",
  "key32": "2bNxNPhFkAvndyPujx1vTtBvBtXhTBEmmPEoxXFiRs6Gc35VDbAouH17Z9hE15U81VWBTVEQtyeQPFMRuKP9G6Zx",
  "key33": "3t7Nus9idFKfD6waDKQwNChdYuWpWahx9cwbb5MXzfUoq6uX8wMokDGAwGsyFJaR2oAayD37g6aqvPNhawZpJgHg",
  "key34": "5CeiyGJTMLUzdwFpwxxYVX8p2XoCqh53NCYgczWWtFPbWw2oNkKaCKeT9CG5GCzw4MKCgVfhUQemcVQprtx6XeQK",
  "key35": "zgv3tueEALMNxR8Ed6jHBiS98ezbEgH75BkQCvhWpyWCnTqYvUobghyT8Wvrf3Xjt2GsAE4Hcn46yUvBiUkb8cL",
  "key36": "4z7EZxamDwPfdz5CSpjuJ3ba7ucF68DEXGh6p4UvBekEWMZg67AG7YCKgiPqQ8C7q5aDZuWNpZqNGj78rvBWoJnD",
  "key37": "54NSm6FpzJGUfJkUfYrw8PVP4bDyJJUZisMX6tYa7fiyddJHaFMGbhxUNwB8uzgfBzB2vxPNUfxSQDioBjPA8fjV",
  "key38": "QiUEuYqrZuyD96L5ANMmhZ1dnE8NZYw7R4QKM6Jw9dDu6XKwyskhp3xFtjGmaEFhBz154pFme5LHDUvGsyt71yy",
  "key39": "4thZTdwz54jotQGwsPQfXkQAxEMrdC8F5FneyfcL53vpR7iJLiY7UNYenE8qbJPJ1YUHn8TRuCSPbzGxnB5CByjU",
  "key40": "LJ8wBMByTRgRDGeZVarpHpvqd5VGDqkMtwADihfTu1FhvLw9J6ysh1kUnFGCLQFB2GFfkaFiR488Go8zKcNpp2w",
  "key41": "4sGEhyHYynnseqKra31mAEYRQVZKuvVE2Z4ZXFr6RkYt5vd8G1wRAqYzMhsRqXiLkjRMsr1WjybJg3rbH1Vi92xj",
  "key42": "kEKPjLqjeZbhSjfToF2sz1Z4zy2Y9osPmZHra7LgmgC7HWFbsb1q9GKhipZrhBYJJZjt9XA44csePNWZnuyDTZk",
  "key43": "4mV9gkMoe3H569yh1JJQkxaDnnb6cyxHDSLcwWqPLyuh2YDuexCQJ3yU5wKkLfFDPSZMRsxnJvV3tnJfhtBJ6MzL",
  "key44": "4tAw5FJv7SxpdQbP3UnF3PSM8CxVwBViavZ22aNrr5jX8P7FN6whpfmoRVscPN4YBzn2gY1NGqbpy5SFnR25DAXD",
  "key45": "67ggkPKNzVLEmWygD8ricUBebuvDseTtaGLnabVEBZVG1f4RJhrrSoagp3PoVGEEHDf41Jh4tS5g6s2YxoGm5y5f",
  "key46": "2MbbABT1LG5M3YMQ6AheJ2btXJcJFZzwqNx3DdyjK8pwdUWWKLeu1TcauLu8MMG2RAXvxyUxp8jhJJxnCx2za8Xo",
  "key47": "3dibarj2XfUAFotrwNQynKgyEZ8iFwVYea7W9nCetMVUg9WLz9iwcyEjCbtvvN4JFvFAkAGYtNxYMhVcEXHdJ7ko",
  "key48": "37eNbHm2UH7qzoG7DpeTS2D2Q82Rx88HCXSFpysM6cvJesXMGdws1Udd3MqYXm8PY8f6CMi1ddmm5W5t3TEtJcPH",
  "key49": "PjPd4gpJvcPwrRHhDWFDjRiKQDfZhmuDeVUokW2EZUikgMDesE2a8HT6ahpKWn5EfUFcaeAUugePkLuRqsn4cRP"
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
