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
    "3xEtPscGqAYTx8rCcdQjFSeFFUbADXoAh2TVx6jio8Z8ksWGcECDuoNXbNFUQKsBHuxYCDSSJb2GaQUWzQWKXf6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DYrrTh2ywWmB56HTfdV95cA5XcHwsPhvXjszk6iZ7joUahC9M5fZp4FkGzFXGvQjPRN5we6pXmSKrzgy2LhTW4H",
  "key1": "5R1FpJboUe6GXLejtVLYobb7zmDSMWeYrvPFn6SBjizPo98rpoRMCE8tc8Y3ok91ULLKV8A9fsTpUnguGo4b1sY8",
  "key2": "45tncXybnfPCuQ7eR1ey9B6i8D3x5XN1XjDUS753xNwFi7Yq59RbvG8RRpVtLowT9rGrBaFxmQpUCNpSH1GnV1Rt",
  "key3": "5P6A1HajR538Zwp3wUvJGZecub4x4Ek4dAtcXrv2WphS1Hb4CtqKWkPAe4L11rQ7uCFpeEMHsiQksEucMFttkKYt",
  "key4": "UnKuaNFNwpYRAQ2pZZKDhzxHtw3azWACnVptDAbWkpEToBnciAMsUJrXKHdiT34S4ofanfSevoHAcv1xRjESCmj",
  "key5": "63XgKhNTM7CT6urPcuhQM9S3gJMNZA2DMCTvBbWuJDkmMeMG8sgjhKJst6HBrRzyaQjSXXt4wMgR4gQs77YbGUCF",
  "key6": "5h5d2ULef4qFmaYGYrUEYK1rRoLNwyBQnGddSFEK3USVroZ4MMF4ZLZ8vD2c4F6RAb4Stz1YRwXj7xeHWJ4qnwCw",
  "key7": "pN9JUUTmk3jk2hpwwawiS5YNmMB6WRfkHfoJM2XvavVt6YihuMPuPKTpzAX3WUpQQW4uHoMT8pamyy9Rv3MdRcG",
  "key8": "2S1h4enGYQi4GbFGikn9LABGxKoim5XWY5FhgEq7tRndqoDrwSQcVjvVJu5E24n1zBQHWSQzpoLzZRhZoCvaHaVj",
  "key9": "4Y23js58K4XzZCiBm6X7HuEqsxra8JzwL4A72ERoM6QEghPQDngZoaRZVRuDyQoM5Pyp5oacJLaoWnuUvYwP4uKE",
  "key10": "5FVTvaJio3vgZGhw2S9thpdkAKbv6mmm4xF4ijbPbPCJ5oLmt84hDEMwkAXNwFiJ2VADEFYkQMoJt75A2dhT2yjf",
  "key11": "5KhDo38bYZikpHTkP9K8qfZV41gaqRqj2HKnwdHMugMDtL181BKyvaW4cbtWbSoY2b5xtYAWtfFuvmrTBzFej8C5",
  "key12": "4Uf2Um354PAeZH4Cj4Qdv1k1qvuy87vqHDsrBJWasBuUaR64Tyy9ZsoXsVqHjsbGhbVaQhshSGCaLfvP86sEJ5Cd",
  "key13": "2ukmUZ4M8rtccdKKcXYCh5r9GsTyPS9cfckBTXMrr5MitdnmuVctPTjikUCtHi94sPKykT2mBh4qHKWnxMXwRE68",
  "key14": "2rGs6BZmT2YdqcazsWhE5aci9a27B4mgbVdnbqywwtr23oeqFbYe5zGPugZ7Nz2ULVpqbAs7WKw6FWoYpK8VbZF7",
  "key15": "5dHxi6yGSKyXJbvduLbhmp7FnYDrP4AFpakGGvaM5oeJGa9AWyjgxzAwkL5TG2S1i9yuWJiH6H9am6biy7PntsKQ",
  "key16": "62uWkTFk4btXHQ6hfL4fTqFfdDuE2438NffzafA7oUq6Dj2fjjap8LK7SAShmq64PK1YwJ487bRUR1dfggxrZ9fw",
  "key17": "48DT8UAsFVDM2P53FzKhvdBLdB685nUsPjpHUa2NWp6jdef1ENPNwD1sZX5vecLDS2NJSdzHRq7JHGHUDfKDqkAg",
  "key18": "5deigQHhJV7sksm1J5D7fcjonPzECp55w4veXJCHXDc6p4rCYwpCBrgMhtLmXEpWZeJgPgGfzdL7Dvw23FKF7DY9",
  "key19": "3cSWJQeUzEW3DJ5NWjAjerygz1BmJmRuRhdHYrxnWxYE5SFbTVXxdhLEb7Z3kgSUnmaUEhLeaH7Pi9SNpT3QBQsv",
  "key20": "3sqdUbxYk3AFc3NBF14TUYgk6xxVaoLnLzMvxNT1yKo3vJvAx7ZsQiXmUX4F58uVXrwV4RKHjYHLBs1Vv2eCVZMc",
  "key21": "4Hs375PZeEBwevbkAMWcfgvXj1nwyRCPTAZCihCd2AfhaRxHM4VKqGptGHAaRaxFY8CYhT7pYjZKQoMNzExEjyTV",
  "key22": "3ia7voN6K1zWdozhWDmGntgV8b4d2psYypgjx5mLuSbmawy1DQ9iPa9KwYL66xVpfVRN9uNykfBzWaJtkJ8aATs3",
  "key23": "4fuG8K4sZ4djUb9VkDtqMzeLrW8PJ6HZWwZRowpfU9XLqaeKbfYkvBPHU1r8GUyRD615C58K9BmG4qmFuY5gbmHF",
  "key24": "2kTHd7wwcca2GqrXvVnKLXqvib9ccpQFUBzz23giFNWFUhHWUBgVQWg3nKWwyenhsBr8kh7BqoPH4deSrrWwMgVX",
  "key25": "4j2o24wVF3UEUKkE2UymvXMXVxQTpnZJZrciXmnFGQcivjTyqdxNwLaxqfFNqXconrZiBPr19EaKsiJKVofZyqBV",
  "key26": "4yrV6WewEkVg4tZVWdf3587ggFteTT3KBDQkX7oRPCacZC4eL1R4V1rvyC8pzX6JVGRe3QpLbgXznLbK2yLwVxZP",
  "key27": "2pBhN4HncLctd73Ejgb96L6ERcw2dd41AJk8NnXvftdwt12r79qQg7NqhAEiPjTwrmWB8h12vr9P3R6zd7KYKn32",
  "key28": "2ZAiuMHZ7HNDoWbuHFJ27o44WMTUHDE6GzoTbSHVHRap1jZvbhYnjEJVm7q3m3nEvSQrsbELsBYDtAo6BZwQA5D8",
  "key29": "5YKfJXbGTDifyWLDz8B7kKP1yP7qaYeWgQpgQAuazxpUN5JU43bGbdXHr7aenu4GZJVxwV6HpiGvECacAPhEGi4v",
  "key30": "3cERzeNR5wGGhhwAghJrevZpVdgLr8X6CdA1wHRgiyP32kCnjj8zYGDG8USToEjHkVYF3DnuqE2oTrN4i3xCqamS",
  "key31": "3E5tJ9AvL1Wgfw6Q13exd5Zz4L343zTBZtNX74PhfRYYSAheE62R1RLCKGEBNCWM9KwXBZsUaAaP4UoWovu3dLX4",
  "key32": "4f7G6PHvd5XiDhD1o32VJhC6riXBcgvKDzVdQu99mmq5NqSJHgifaq3uzaWSKvVhQ4MK1GT86FqxUTPUigjBjKTs",
  "key33": "4LobwRewNbo4xUeQ476gcBhNDiHjk3ffjPEW1cz9k1AasU8Xj1QXMcJgh3XZaCRTrDSvs7VECA4s84SPgudhaeiR",
  "key34": "2Guaii1YHano1mgmeCopRMBwY2rLWFVy3FP7pPHF13iYYXLWUkusaDShV96J8XE27t7fgdbNocEmSqk3BNAq1cgt",
  "key35": "Zu5APKKWpF7tdvGx3U6Z43mUQAzU4UVEvsTGuHq2bLasNavnCMJg9Gj4rGTk13ikDaJRTbJhaL5gKT7ZC7aEgrd",
  "key36": "2kN1xDuxyGCSCSdmEmq62Ji93k7nbPijnTibL3GGaHTDbRZLExVUh43HTAhrFB2wrVCohdXPj5H4rcxnQw5ZEPzT",
  "key37": "2wypPaVP7roCuaqbZFBYLgchRRke2SFy2ZBHVHehx8f41WZL7JQfVbMiXLaVzfjhN3Bp2dbD9bxnnLiR48VQAx7a",
  "key38": "CVs2rWkA9SkawbXDno2x1iwnCKJNDWCMUPPBdUTh3kSSAFG5qZA78CLtGsLEtJge35FfFFUybdZyBu4bDiLjfZA",
  "key39": "5ANzdkqZmByJqo1mGDtco53b2nBq2DucFULAwYmFyDwViuxejibYxf8nUMaNumunLboMkYm81nTHrndAY6wLZkMd",
  "key40": "JHwhQnWqqacBU2SNRk16eLJKXDz5A7dFYET7V1FhjTW5rxH6jvurvCWqFcCCypRnkmodhwMj8jkgoeiaHagHQFv",
  "key41": "2Zgx8EdakLbKHU67tRnfcxMkHwZ2FCHPdJ4CAgbKrdMDGMLK51D56PME8tT5UXHRtSXJyftMFp3zWnzEKsrczt2Y",
  "key42": "3gXxW7aFrdNQU1Y7vzsz8ptGpwByacZKNEfN3gsV24VJwGThTagwgFR2dafvbSyVDj3ZNRwtRtoDvUTF9CiG6Kk4",
  "key43": "4utyVMotPaXutr7BorXv5Y6ZiUXyU7wRDErBJ2vhw3Qsozs5Vdn5ocw5RsnxCuqLCZLo8Wz4dqo8eU9AQh3y6pkC",
  "key44": "2u7DJwUDg4ccGGraT1sA6MkTegKqH5mQLoYANmD2HkPDw2s6xSMefJJ9T2SczaB5yayUtegdYdfh5sMTuNLMJ4xA"
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
