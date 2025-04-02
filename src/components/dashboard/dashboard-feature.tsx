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
    "2wzSw4QJRdLiVoXFM9MB5mbuGiYA74bQcqEsXieW7eZ2uzSMLF5vFSkQZAKVdYDwhF6hF3vAXv2w8q3v8QFjxe8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54dwdKW8bmh1TV4ti5GhBLMQEtZisSuzXRRZgxzEJnHh2TZGcjn8QqJCbwRisJXm4oMyuyNKnfaP78LMSjyXmD5J",
  "key1": "5DmmxwJ8wgnyiq87jvmV91JSKXFKyt48Z2P5SwZHFGP4bjE14EQdXvgYtTHrvkhfwVo8jWJC7bjLciWRCS5x32d3",
  "key2": "3aqhNeNur2iGBG8qQtBJoii8HJM4U6wjxJhY4DbrV92meUPtbnKKAhFJX863cbn3r9EXFXaeZai2U38N4Eej93Yg",
  "key3": "59NrRaP5psVxwNKZRANJPBqg8Je2U6NHP32XNejg3UoxtT486pYMsoawmFvRunp8ca3w9DivLhW2CP4CzYzpyLaV",
  "key4": "4SooCRjt3yRqAYFogfKayU9nGEeVU8GUFk7q5ALSpZHhofBgJ2tWLBRatX9zYiRYx8VKwTYLvx2nJU58PhTqeQkT",
  "key5": "62kbxyMp6VzD8wsHkKnQjh6uvaAUQrwtTnChEkE1gsWmjPTsDxj9oTJDTwXyTc5KCsc7n3794eBpYx3z7JhAvgS5",
  "key6": "2Ec3Ks6mhD111FNXmD2j7zn3U7KRuVwtewfgstYPZkMv2vGW9ZWPjiNWdaJGDuymGTFC3qHnWCPJWMmHDNM9JsSy",
  "key7": "5q1awCvp8nCwRnXAR6E7ZRVsrgmZnhgTFAe8Hs53vqjiZA3TDqMj1J1CFkfYYm4KNjKsYUVvX5vVBcHRviUUcMkE",
  "key8": "2vLjZHHPfgX6LRjFUw41i1VD4wLzfuy9oYNvdyfGuPN5ip8Tm484ioi7bj7s21HVbBQYwsrrLKZ1zdQnyD66QeWg",
  "key9": "m6rrqSMCuquGakAXFzDmwKVSEeEtZinHbeSWm3rksvZ9u8QuUUT6kbVwEAkbHXKxNvuFq1rmyvEHaxoAbMBnF8a",
  "key10": "37qq5SRt9MtSRDKNgowFhzj44kbsBPUSXgW8GJvMcAtt9D91s7Cezvg2WUpZgEW4AsVNGmXCPGc7PD1jh6DDPCBA",
  "key11": "5xxMRDTWWLuDXXazzLDh8kCgwYjkpRbcCPphHF7jY5qAZUFFGFP8i4hDSg8ujqYwoB1PPUqfCXbqyhata67Zwm9w",
  "key12": "4iLpZitaBAS3Xf9tsDR3dJwGvpmczsAigaGoed26oymXssspvxWGAyf5tDtaLKytytsFN2xx8tDi3TE9LQLvQYBq",
  "key13": "3MEKwyfm71EFRRkKeYELYUtkB4ZaFcWWR2ZZc6sWnonASk2HzonazE3Fxg3PcAGP4RvYRQLCDq5dUvK2q9mwBgcF",
  "key14": "hYFE9iGsUrTDWn5pD2bfMECUPQN2JkUav8gJQQo7L83pmY3qavWzKWq862baoG1woL41gXDuwKkp2utDYNzcabN",
  "key15": "4a5mkYen7vWRZjw5BZk7m6thhDTaA6gXGw6z6xGUNKdUKkZcy2BHVW2jKaiBdKzXC8zUGXYacsWT5gWhafYHBkmF",
  "key16": "TdZZWme8geziTB7Z1wdfj8qSMXn2abB2ifQdxRatbPCpxSsfHAmvjagudZHEfcz4VvqeqkR6Hxr7Y227whByPuK",
  "key17": "311GERiuUmnKdSnw8KCDYstRc7xqKUiEhSQZxaYfRUkoxKeCVCDQ5XT1HCDabkTYR5fXwcH6YaKrsKDzeeTe76HZ",
  "key18": "wMwQHnJkT1kuTZjAFYU3ZukRo3uJanrLUNbiHKmdNYzKKjkHpdpVGQsHREBmfq4wwDwuJK4wTAsWtnMFnJHvnBh",
  "key19": "282EvZ2PHd7JRsnW7HPDsZZyBvvdUWyQaFXmfV83DPuGGrdfd3mFcQdPVZwKafskAdzsDMVhaiMAdvtZHMdCNxvR",
  "key20": "sNBd6U1h2ues6z9C4xfUF8bRJ8J8QMeCkytYCSDD5cW45rGUX5arb7VrSrcDPGVFq6hs1JdK235PV3Hyxf7Kisj",
  "key21": "4ndj2UzWZbyjssBVvwmci2ECcG1ZeDqKWVGvKhV12VBfUHToHkuHTH2wUAhSdhfneTmg4xMtaSsURPXmdJXWgzGT",
  "key22": "4ysyLJdp28bM7YzynaTixWZcbNYvkxENTcixtfu2mUZNzDpS9wn3GkEQKtEvMix2UQMnt6SR5tVTT7VJhrsRFybM",
  "key23": "2EiLe2XJUYnZbgLkLUY9qcEXdQUoyqSPhxj3SFfDXijQfknHngEX3sMD7oUNPzCyzbPoGA7H1ykNbjG6s5aQCWrY",
  "key24": "2c5xkdsKXUDHnu26n4ffECJH9HeK53nzh1ssjupCuhptPDvaEJauppQrteHrKSmwzav9tEobfhvT9QETgqJEdDoM",
  "key25": "2evb7wFUe4y4nM9En6iEN5ZGD89HrdVnYUhYJkT71UKDfWCDKDAzLAKrPpBTmwzQi3KQwDb2Qa3NWCM2a4rPqqmV",
  "key26": "22jromDiSFGxn4y94pSyU1oqvJU7Kv41RjWE5W7wVNGzWiuzeQahez1ohN3cB8YCSn1xn41MEVZAs2EZXNrBM3Qe",
  "key27": "5ZoRVSBKzTx3j8x111LgzVqzhcbfDNwAeFcr4c2YLXkfK5gHDy4efzKoEmH54AGceYcjv3oN39SAwxFEyiD5XGwL",
  "key28": "wFcKo2Z3DYUb5GtasaXkGtqZrMiVzugFHnG9QwHsUv1AemZZva4MgcFTgvMz4GV7viP5qFnHcczd6oJcpUqtxY2",
  "key29": "HGVoMX99D9upfbsDuMT6Hy8xuPpQ3QKm7qYA3Ngfj7HPN1Eft2cZsyMVRX8bqAmvRWktrpxaZGWcGTDaUU2Y2t4",
  "key30": "gNofFmJ1KNgtcXpchR8QeBfAxPHjhEvSAyZXkE4v2PhgNGfuhdqUzoCTFVgG1LFURWf4gGrcqU4jdXyko1Rm7d2",
  "key31": "5jx7u51gdB8wRpMHtb5fNCMXvn9ViafevGmouXHiBfXU3XVDJgnaDEJAs6ELErWzRXexZYeWp8bLWr3NanAb8JYH",
  "key32": "2BkfeZ817sFBott1XZJskf5cnayL16N4iAqf6Hr3kobSH1YDuNg2Aoo4wWtejSabxgwFrVdVEtquRMfCA7aypYqq",
  "key33": "3JdZpQiBByfcXYLNZrtLbrFXiV4qbvwAbSMX5LMYPbvMmrXMz66yqfHLPaFsmA2DGbZBDbQyeb6UDTHYqPMkGHVM",
  "key34": "61xUbc4bSY621q9KYxgoR9XcdovTcPWTTWgpt8mjMWgDj7eguon4oaygwtDUBe9X7kL7xNHEyJmh82ADZaLPLs1Z",
  "key35": "4ZLkTEW8mB4mmn2oAqoVZvyPtRmRbRrPmwzzjSaVnvKoMXUCEBXt69Zgf1KpzFjHe8gUMeDjAnUvgfnbCHEqTwT3",
  "key36": "38EM3CN9S5GzReGr26SSXRmKi4M5dD2dBoAGi7derxEr69mkY714HcLqibmMedBoQ4tqaFVZcb16DRH89jUvuVTE",
  "key37": "2dBKXdQ2qLnLzSaGiMREkTRotudhYDTMriGP1vXXMZcog6jcLEiz4YSpb82xMwnbK5xUaNatQMyEdEQiXBKqKSZm",
  "key38": "szfzoEgxbrbJ13tbBjEW3HqMMPP2SSapi9VUQmvJwqFykTMMYQPVb5TYQ8mgytYzR8XAfjLojaNSxVQ9KApqQX9",
  "key39": "2e4wEbchEZrP27KAWMYW1GEvKFen7GFgPq7URKCFmUZVYqiix1inYYq5QY2PnbYGX8ae28Epgvn57XQq8hVEwgsD",
  "key40": "tPijNNF8h3r74JBQba8reUSEJx29M3WJeaYkwCZuDPzZtwRaVRbLQ8KMxVQ6c98Q6eTp4VQ95BZpDvFumeXXQme",
  "key41": "tWUAHCVyhcU5gBvAK3bnoe2sdMQdhPaSzBhJGo5a5Ndhpj1mNXpqf7z5efxiQAd8jNyjuMwsAjTCVwLnriPUj65",
  "key42": "4xgJmWQcEGkyMythJnABX3AsDiDGG2TeLTi69oaUCybkEhRfj8WbFL1ShyWMSoHjeFGKvACnrHEsCkVdzfbMK8Y6",
  "key43": "5Kzjjkysg1QYRpSWmx7kvGhQoxBbkzJy4rQrVDVsP8LMSaYpy7YS6YZGFTMRDRRWo9BzD9NoSg4sbh1e2jPBGAR9",
  "key44": "4d4UTbuimveTwSmSQNFBL2W5taSfmXWbhtc67rCzjEtkdUNVg9ofP9UPaewXxUqFFkDfYW2gvo5eEoj1Au8PwNym",
  "key45": "3DpikUXtB2MUk9e6YNu5A7Qc4gHRLX9ZoroRXnuxrVyxrxXEuZL7pBW77d1s26tfhvEu7oYG1m2nq89oDyGCAWX4",
  "key46": "3uNSo6HHFDcAdnV3izydLpzq1oKdfLqoRnwetDFwUoSHMNs2Rhp7JeCPbmUSYKNGC6ycwYT7n6h3kMEiQw7R2zew",
  "key47": "2FQi6245aYoYvXCxg7Kvc6q5pwLufiqrJ1qZdYJbMYs87QyJLXbpZc4Kbxb89nJhU932aF1LdtHzquJNHUM8pmQ8"
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
