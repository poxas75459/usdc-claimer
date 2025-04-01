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
    "4JHSvaWyh1M9L5VNdrbwWG6ui9qS45PfduuAWLWayrhp2zM9UoP8TGdLGPX6hNnvq15CRWqxjvwrDow6qcrehtB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kWLE7UMNARdgoYA6BX3qdTC4m5fb9Sk68pzuGoY4Hp2f54StDTXJyQ4qi87wD7vatsT2TC5JxWEUUf3BBLHjezV",
  "key1": "4u4sJXoG2dbfrsDyWBZo6rxsXmSHrmE9KGn9rokPphexJ4hLYkguwJ3Zcy1Dvyb1u9En4iYhy3WTst4GxCZde4j1",
  "key2": "5y4mfUT7td8ALRcn5kVMNVEcYfYWzpENv7awNpvajRvsakTsGmqArjqZhkqD1Kfjx8zcSZqz54vhnQwpYfASZc1Q",
  "key3": "4wC5hRD87nbqC57R4Jtgnkk5R8dxFgXFcNS8sUEw8sVyk9EHvwqvRjniyWqiFYqjuTTnwfQUimkXbfedyH3HNohB",
  "key4": "61EgKvoRe4fRb52bS6t6etDZ8y5opt2nuc7bFzSdtWeVNfRSN3dnM6ffrAP3a4mdpowoEQNpqfFcCgRavbc421HU",
  "key5": "1SiDWyPpMk5xYHXCE5PmxGeqGJNWCoinWSE89LquVG4CEEw6edwiXtJGv9KcicP5MSV77jQRCHYCExJgrFdWeWf",
  "key6": "NwvYuRTVitHG4FdpTrfASPx63kzMehDSxAE86pHrcJ2qm3kjx7iHrBXkgoq9gjyWx56k7hSuYeZkhhbaPRHCEun",
  "key7": "2brHpW3LzuuNqarBUnUu6t7dF69tAsb9nitcubRqfaDnxBgno96icF7LBLiusArL9CMwteBZGjSA1y7SPLMh1xE8",
  "key8": "5UKkhqrQSWhwXKSk7KcTs9qpQbycbPD9D1EEeV8TLQ5jaZ7chfmE1fy923iaFELY8DcgXJscu1z35sctG8hFLTAk",
  "key9": "2nt5NXscCU1SaVXvbMjRuk4HvaFzMYhUVw2JiEUnwFFAbXMCjT3vUkHomG7B1mh3MXLAzMTHNmmC2fRPJNDFMxJb",
  "key10": "2zxN7PNnniwhetJokCtS5jmKoQJUDoetmmtfLYnwA32e3bGTA3W4Kd5RaRxp4dwBL76x7t6u6nPnappsHeRmncyx",
  "key11": "q4KwWhEd94APv9hMtXHAAaS3GLUwjD8FLosN725o9yRNg2TyJtKoJQ3mpRXxQHfd94G8A363miDicridZdY12ze",
  "key12": "5Q4mPh5n4W4z7vCv6UifHZc9RRrBy5VpRiCpgEoPgEvWEeNed7uXMibbpQHQpmzWAmKX2iNFhpJ3ZoVvw1MA76sH",
  "key13": "2raS7cpXmY1yiXD3czR4K8eJ85ewN7mRP6RQoiwheKj4GGmeYVGr6mMmTVFcPqLmtqTtqhzitn9AZSsEAXopsBKc",
  "key14": "5oW389hL5sxSGdgDeskUk5J7uN1g7BVoY3MfK5FX1VB7rRrreviMsUhkasbUpgjUuubv4ZfRurNzv2E5dZNHv8kE",
  "key15": "2EgBzN8EWEKNR3nQJxvt4LSD1QMpPKEw26ksaWHGU1siDbUUg24k8Jbio82X1qV8xKhrBsR1zB21SbWFiyqm4jSW",
  "key16": "5PEx3o1RBcC2HzwNGU1ftWRz1KgEL19WDrAzT61uuBMiSqJUP4TmQNLq3jKvbLYS1pu2D967kmeo3urDWhjDBr7z",
  "key17": "4tre1PNg4bDiTjyDGU1twfxBqoPou3aFYocfKidoB2zbXuUUKKCVjZG4b6jLiX9xj65Dhy8ywuRK7pwSL1Ba8BhX",
  "key18": "2rTNg9m9Jnq1tFAEm3Cm19uh4FGK8NdxJ5wKZ5zq6Ky62UWKSDNJJKjDiKVwPpneAyDChAnyZEKEe1MKXL6KJtVw",
  "key19": "bNZm5MjxpVV8RSvd7S5fWUkMdAVhYLf1rbbsvpsDuC17bBZ4ajQq8PUoiDo3r5KAT8PRvpNkvExgaKdSjGMWbTm",
  "key20": "corgMjRkVEr15EybbSEbWvmTsL1ppKsiCm8pUacKD7CE9W71JfzjfRnwmo4uSM7h7QiELagaak2rQEQJC5C8h3Z",
  "key21": "22k1heAhvLiDD8ATwACGzDwSNBo167k2DhNPydcAbALRWBsNgomcPbSsKraMF5CcfAmr8Sup2ZPydsXbXh91RQ83",
  "key22": "38KYhHRCZdiPhYoQfajGGPpNizBCiL9ZD8mg1j5oXDpbbVNQjnBCZo9B7rQDkTJ7gkLZADLou9HewdzTgMwZuepR",
  "key23": "bu5PHw7r2ghvr6GvAwiKK3LhboKYHN3AjSKcbWY93bEX3mk47u1ax546d7s6vHNQYxic4JJH29VxwLEKMCvjJbG",
  "key24": "2ViPYYmttML9aTCSHcyPrQcNwisb9NEXfjk2VeDtrQNFaVpiq3Zfb7fafjZejS2jmsQHu6bdyYdzi6xCVLnCkMUs",
  "key25": "2rawv1tkeefp3YhCXycnGzgMryNV2AUXkzydmHDfTxy7cGefxmc7x4G8xbLkyPYAbjKiQC5APH749BG8SXWwUuw8",
  "key26": "jJrsjS2wGzuDGXwiZLhoepiPC6hdJRBaxhmE6u7enkaAGjTpMC5SH4vVUdic81mtCpLKLePcFFrgwAGgF1SZaEo",
  "key27": "BzGabuhnVd2osGJfCSu4B6UKE7mA1XVy1KF4PtZs3LXqtSc9opUXhWJaHkRipBVAiZZjdARb5dsLnowQaGy2bWF",
  "key28": "5JQCF1rinWAuh7RArbeTh92Mfrh26EeeXw31DLZw5zbxEWRdPvBTgF9RYV9UWPGm5sxEdewmo1AHFcYPL3G3peW4",
  "key29": "4bQqYEwZFoB4vYLMX6Kv8xdnoCWnAxeeFd7bRDD7TvVYRxZLxsm4Ybp9nuipjH7X8TP6p6hpLCstFsucVDhskJDL",
  "key30": "51xZz1qDfzdEGzNZctnckMEPf6ygNHYnRSHU5Lu7h3ujQmA8RmQWdargBE5XoRriq1q5Rfe7GK2ofQZc4SRx23ow",
  "key31": "3am3wD7ZcUaSU2sXywysmpMJK3kGds73HENUAggDGxZFsPigw72kxMMH4SpVmbaRUHfQjLasnPDfFKp5BvZV5LSf",
  "key32": "4ULAYSuXWxFQatkKn2ACiFU3imB59ADAD8p6ddb7k7pUSvJSWm5PCb3aAYydLh4bEU33d5bisppFWwEzvdRPpYQa",
  "key33": "5RGdRCDKpLxe2Y3ZR7Y8MTeyE6eTZPSSqtbFNMrQRCDNL1wMZ3AcijUpJJDCgtRyJ2mxMk436QRKPPu3nZx78FT5",
  "key34": "5fEThc6JEDc2kGBhcPqCtM6QorfC3uh1qDqKCtwCqFXN9so8QY8aqhbYGZowJ2PBozttskEVyLqfynUHrrgFSMvy",
  "key35": "WkHeAhMH186UodbikGt3Hov4kV7GtFzUpCzAo4KF5GXM5JGMrkoGShW1kiMmWhSjFaj9G8A4UY9tKi9iKgeMaPR",
  "key36": "2JWPhdtCBzRMenPFTZ5Ngi6xzzgtAxKoU4XbUT4PBSkM5mdbMqJjfbtuWDPf8cVZt23DVqc1Bcd7L44tSBWyoW48",
  "key37": "2WSbFkgmawSgpE2VejfAzd2uVCBW7ZCPWjzvapfGXXYAh1n9RLCGioFS5oB8hRdhKHUgV7EbGCqnTgiTzqvwaA2b",
  "key38": "5gghPbSmq34fKG4qinA5TgQNu1TSrju3TgQ9FDVKtyHzUM3onKtguV4M22ApwJFdEYrtQNNztWnsse8htrz82hCt",
  "key39": "3kachKL2omKENfUhMe6PU7sXkt1ECdQkW5Lz1mQVDMq2Eb3RntdkNsgexV1Bxci4EcBbuB5Dp7Rt2LTqcFP9Lusa",
  "key40": "AH5ZSS8BwZgMzhDuJWPKUnJSHrkfbCARqbK2hJyTyBEiPydZHMfPGJu9qNWTQRNks6HtbwmmrJx6aVamquQh393",
  "key41": "2Lgt1gtZE5nVqqMhWQkEgec8k3FHn2BdUZnkbhMpbdyeqQtrsaftRDHYp9WhhxRkJqT6aWS2setA6k37BfZFXNMH",
  "key42": "2k65tgVv8o7LdJho3vUAUbHXyLuPkuzGqUtuSsj7QxX1ca15ntzsBVUeChYzcs5Xsv2HqNuyhxVbQHbsGa5dBkm5",
  "key43": "6dGiwQDyKfXRQwaQZxkqVM6eGCpu36pqmniHPmFx5vzDYUSM6xFQXcfmZ43Y2KUDsvQz9gjzMurGna2B3u91kKy",
  "key44": "2jZ7VdRuZANpBBaw8PMwmNr93HNCAajqyiBCoWzxR2sdedNbJsxysuEHWwpiZLtRTcHVU15JCscyqBAYg1TCxyt4",
  "key45": "4vpQqu9WQNsDqNfqf79DQyuHu7KeuZnS8KUAY8mWoApMnpVERd4Dn4gCVxjmbdZc14Z4oriKFUmQmX3YNmyh3VBk",
  "key46": "3hvkFbqS1AekVCTaFuJyrukCE4yNELSq773BcbYNqX6AQwefthZDGB1Zvfwbt254syEkYBrJZXhLhbpXAMvpJ9YY",
  "key47": "58D9f4owMbCTne54rXUyd3LqsYtoixmec5UyfFvDBd4XwNrzzNN5RGvLMQUnEu3gzKq9ZZtidYRZi5HvnbuC2fHV",
  "key48": "6QbJUSqwZ72EbHh84qdApPjHWxKKuiRdqy67tLhZ8Zs38EyjbNHqn1xKgvBzewVoSJ6Babr8YL1cbmJTHuzRCM9"
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
