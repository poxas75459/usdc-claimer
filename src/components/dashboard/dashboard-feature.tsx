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
    "4arxcKZwTn8r75H5C62WCCZMEB29XbtmUSv6VqT9Nw7ozAKEmBPwp3SdQsNWQ6FN2kGmQv5nRxqpeudgrEQauz8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25M33cJ4bnLXpM7CnwdWitow5tmwYHzUathhsSfBqA2coPxFr2AWkqFmUmbnCYQyrsZgZM8dKNCGe2VfcbqRfLPn",
  "key1": "3py3V9uhfmP3AoAFgF6L2wHwmvQUkHY2eDMUqT9FT3gyqK8dueYmPzCji7JEQTV8adxkCD27iZShNWLBvQUu5E6P",
  "key2": "2d86pgoW9wzJC5PmUL5Ac2PjJi5z1jGfwj6cEunKZEAh1okNYjCXdHPDxFqJjM2STkr9brtUQRARBp1VepNjpcct",
  "key3": "2xj17XrvGUKw3bAcWihtYJsgHLz1sGNhFGkf6JQqaFxSHbFACjdAtPATPzh7PfT7VyU7ju4w3qbYrN6L6Kgt862j",
  "key4": "4XDepVtUXxZcsvkRx84zSsXdPkdSun1uBLwjpJJwXfpMavdKzC87fM1MGA9Zcy27D2esF5Y5Vz7tugwi3jkrmECT",
  "key5": "3zmwEPiEHmaA6Yh4xf7WNRATemdopcukFeK3y9e1mhp1oSP3JoArSh4MGnL5wk3fXnJ1yidsQ1aDeFxX51Mzph9K",
  "key6": "4143sGER7L17iRdvRULxj9G3vL9SJZwAhofcF9T245uLAeZdUU5BwYCbJMK8jJaQeFM6vvbmAaxJchfkbGZcatkH",
  "key7": "3rfC83naE4hyyc63ccUGJwNf8tndnY3tKBUoLnd8KWPDQ7b3KAzAeTHbnTdzaRhXhvAqSpvQbAX9CJPGSHGQGWad",
  "key8": "3ixyADgSj2tLm4vMBVhCfwbgdxapxvY7QxiJCFVXxNvQ8LEfVa7N7UuGXxRtxkG1QAUgxkeJB4byRnmPkDtwAYQE",
  "key9": "MfvMKiZDXDDhKWyqTD8usJFUBk6x7KeqaRcXKeqiMMv5pagCb8wvm1QEVv7CPByCPL8cLMucb8m4Y48eMYCxXxv",
  "key10": "2RfA6t3D8sc43KQAUNzF4LV3tn8VgKGierH3KKhT7UUbe1ryXqz7ifxsmx28XPSkEihh29FQSfXKSRj3ci1Pu5cL",
  "key11": "438Zhne6aE7Y17XdAqUEED34LJogFQgohzdzPnmxDM2F8B1tMxjc18XHFnyA4gxr74gLAsVadMX549eNZXsarG4S",
  "key12": "3SjDD1taRDgM6jxc8LuW66zUzbHG1ciUVTJVjrjcxDofLp8w1iqyeX7Q7Yk2fYvoy52Po81friVYVfrKQfXmkjH6",
  "key13": "2ZWyFJWFdCxG1pHsfSAeRaGpuNcVGnBnCZ4wx19MJ2gH9Jqd6SNBKAvXQYjD5JE54nuMiF2hGSAtNXwAo7jtY1ga",
  "key14": "4iZZo46GUKTHXxNgbYwnMiiC9XWd8UMs2eSuTUMZN7KESv9vePBewrb8hnh56KUvB54Jc7mrXTNZBvipqyJnsFFr",
  "key15": "5acHf89pdQLgjE9mj2j7mg9eoLmNzVDP1uRhAcPXiT7w1r4axWkEWcPPooK3rQYs4bPfRzwHZcPLGJYC8YWXsCUr",
  "key16": "5UTdjiy1VgDsWCLfJZx1rDnu77KFnhBdH4otxhdQcKf9342xcRMXwFjFL9JLenaH5roLkYV9ohzcD5SJHcfsPqRf",
  "key17": "3gn77b51jMHJjNTUoDQmvNQnHwCpZkMXM6HfNGUaHXKa9pSunuUSCChd3kxdWiRYdV9DgzNMBxjTUzGeY7QqHwbX",
  "key18": "jHeUQiKE4y9zgYGFcS2W497BWnktTL8EBzCCjgct4UtzCZYjU54W5X5c5fe5BRPQtgs5TG4cka8iiEQ4mgquSZB",
  "key19": "368UrzXKV9C1TmML29f9vNpQ7skE4q7wTd8iNododgdbTwBQAXFvWeHTfqLaeLmjjpDTgb7gqgovUFL9k2Wv8Gx7",
  "key20": "4hzxAFE4HbK7y3JLVwFWVBtyZWDcwfFME2PXyHDsmL7XkWhf47AWCJkiPnBM8itaetVt9VQQq59EjmVxfY4N5xqp",
  "key21": "wkDnEyaYPxj8iCEX9WZCUPwc6m97cq7gSBgQkjHQNVbDf354AGW2fvUyQjzHuUCL3EgtADYVba2NxuRa59P2U3p",
  "key22": "56Uah4JkTTj7tLq8ptTZyjtLVYmFFizikBJXnEVLJLcRHpewPavdjwuUfbYiRNVDobpi5gDeU7s8dEVZRZxTeA45",
  "key23": "5H4WgpesTwkXimUCmFXiCfe2EcrzdGV4iFV1agboFesbHfyScBvhqtR38CExK83VkqAm5Ti9ThvUNa15J26ymuY8",
  "key24": "2xKqA512W1LdFcRRBiVD9Rm8fDKiVWWKRbPwTyoEeFGQD6kq53vRJBtXn9F6VWdix7j9imLvg3hwczZveR2Siufs",
  "key25": "3EU3wCepMvCYMrYMk4P54w8Ska7H3BURwsXPA85Y6EHUCH4ash79Vs7VYXWDKaXJxw5pMocgMrLCzBEgQXikouB5",
  "key26": "5KVKZkEeUhG31RjQ8tuAhZ7QuM2GZvsfMrgWgUQAE8RqDEJyJ3LXVfS7dMJ7x5WfgMuVhhPNxZfHieKi6tFz4aTs",
  "key27": "5WrKZSVPsURobYES6oJh3jPQTqf2g5ehmBSEA5NbTc2L8ZJRUaUgo2JTh5GNiVMcVtsk2r9Wpnmdcp1frAHWEBN3",
  "key28": "3JpjAJu7ZtpDaFCBoYcWhJmZBb3eZqCQTNG7ZB8gHno5XbC5cuxcZAcT2m94jNnL4HARMe5mfNKcX1cikwDkmF3k",
  "key29": "ZsgoRREtdBg1bqPyVht87gsy5pvu579gzUZjEMv3bG4aRyKdrXyJXTK7HxFkx7jadx3c2TJVNB1GX1DKhXBzQCi",
  "key30": "45tjn9BeuAzZHRnNPUmAGEeYCqp1QokKSQwE893aHuSDdeEEaXo6dAe7oKfjK76mzwQ3FQN38t38MwEvUhrfeoNS",
  "key31": "2izP3M3R4U11yospG48QpZCwKi5YAoXbezqAgn3o6DCf97tXPrWxkG8J8qZED59bYUTVTvtFUvMSn5dFghf3tBnc",
  "key32": "4LQjaPxrf4rhqHiwUaphuLNBaorDeTwqG1hsWYfA7edR85XNKBb8isGmxw2i4w5SPbBfpZZVDzF7j1uRywNJxQuZ",
  "key33": "3DhvUgtcx52i4KeUJ73fnCXy2JH4oSZ4mRMu8V6yybM1y1yhnPxVe3UwaQYFf92XM9defK5Coa8Y3Rxn36vDgFhZ",
  "key34": "4TJRDfTnv2YRzxWuzZGzuXxgJoAU4AJcWsG2T5ac2WkkAzQUiCLSPGC59tRfE3a9xkYWja83H4RZKsXxozpdbtVW",
  "key35": "5AYZDrZhNdscjPE8ndR33GzHmXqpdKSCpm4PtX7R6jSAvSiQZgecUnDhQgrNvPNM5ZAy5kZWgsSKwFg9YTumTPU2",
  "key36": "3nBW9bSJZRowhvRHZMSStfPJutpWHWtzPKPuZkZ7YfR4Amv91EvZPt6GHMKHDJDyHZ9ZxBL5CxZFtj8Ck2DkPpBP",
  "key37": "2oQ2NYtT1adBUNXPyLwfKkLfQGHawr5Rmnqxfsd9GsK88Q7W2mxN7jE2e8jfekcFfv1ZvAAJcNtfdWGH1hcNETm5",
  "key38": "5qqNxfErPGc3TdNmtKMWb7WhnQrvPDhvWH2QpSUty9qZzXr3MtdSSL4GmBYyN3pGE7VGnpDxNLiLUuSfqTNkmhgk",
  "key39": "3R6UHRQdEoqLg9LJFkqaNud7JA4iizR3B3mvodpXPMRchkc31ftVHcv4Uyyj1ktXHafXhAYBq9cBnKWPQGfZaxyQ",
  "key40": "SmhzUADv6LcTDeHDQpdj2BoodPQvfvJJj5ZFMrjkhd74jwJqfSARyq2CgCRQQ5x4JtM6UfkssUgFQvRwMCzUj9v",
  "key41": "e2WNKSvTc49mMP7sTQqMfWmotnadNg5Jyo2cdDkEmtDrsUQT4pynv43PKd3gqpegQberDbJUBjN71CMJEeDqrGj",
  "key42": "2AvysQbsbc1KQtQpnfHPh4owJXpaF7DkTDd2HQAASAAMLAM64A36Syn2SDjM37UKrf9iTf8mZxx6qzFCnjTCZEbH",
  "key43": "5s1VpxeXQeBrvznE5ASacoCFgptqD1f9bmkbMbqbvsH75vV7bVmMsUFAYTPMVg1ww6DmVU1exMyjjD2CAzkYT47Z",
  "key44": "2QsK5jU28XFwEPLDFf7Did8JGNbrzKcgBaPgXZRxWhU685tGsZn7ij52FSsCt8Dh2CVUyt657AS7ohMJAoL5H3Wu",
  "key45": "2MBazZ96roKBLM9r6VwCvEUWsDhEc3D2j6f3ygJCtR8AQ32USampEsRCNVB5JzBZz9Zy2t4kkvzErfyQEHqRvXfH",
  "key46": "4H5Nrn13TKQu4W9DHsemL1jSkQJrgHuPg2BnBDAYiCjXFBgrtdr6Lxx1YAr2Ag4UhfGW1sNhCzUJqkmQuhHuXEaN",
  "key47": "fdffUpcZdQmM4KmQampLCKUyzno9XM9skgFmUH9SxUEy1GiYKxjwrTaiNh63X9Q5WwRCLsiRXqrn7kCyxEUWYY2"
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
