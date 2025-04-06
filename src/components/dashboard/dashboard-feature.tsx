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
    "4FfuHs4enkaNWV31ciNy3ZQmr1WaW4n8K1PbEtSaqru2293Fk1oAtud53WAbkznC59cjnKrgP1VePECqMh9dxnVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ibSLPthTPMkJXtsHVJbppTB3DF3GAh86W7wiqTJgDCANUwiLyqkFYrezWnLxayrv3xh8CPdtWwZhxY4UR3nY9q1",
  "key1": "4Kyhx4CtNiWgXJCr9xnJTJ9mD4dwakGagXqBxfJkhgv6ovdgkEvuK2ArYhoZvETA66iRX1ZXSktRxdrnaHZZxKH5",
  "key2": "2nZfMsG1zGtqNwXF7KDdHMJPGWjLmA7A5GHHA7KXkYELAgkYhf37hU9TtGvzTi1e2447fhL1GsbFesQ24x4xxpqT",
  "key3": "rb9bCVR3wXkvF3Sb9Ac61Qu3FrkhzkBKPkTJEaWS4EexoT8eZ2VP3F1uwEw9HtgY9nhBGBGiVc4vy44BCA7SNpd",
  "key4": "5PEEhHA5cJyUJKrJ478FRJcSGFgNGTSebTLdCCGcHDcd3WbotKKfAESYYrL3VVSPNTkK4z3vbYpDhVSypDiM69n",
  "key5": "44TMAQsAk9t12QvKWcXfYM5ZhHoxXXpvGoUcEMZUZhatPePo2rYLuujTPwa9GXJMfRABZyRWVG8nYftNkqfa5X7K",
  "key6": "3PZoXDXbfas9WXkPQExq4qJcBC1H4B7b95e8xFPUorUnxTwsFWdtWJivuEtx8hvKKDwtMPwjSqftQU8q4PyEUbAF",
  "key7": "Up8KpTD6p9DfpvwZsE3GgX9FR8M9st7uNvSyktViwWhtnaUS7Jayx4KGeeMU5ECkB15ZMDLGjcwZZqArtsUnTrn",
  "key8": "628N54VqQHYxprSRPtqWBvgh4fV9tzZfap3cdUnWAV9Dd6LcY4sBY3dpoq1kFQTbtKeXgctt6qLebjwKtWCrsNqA",
  "key9": "5reBjgvrPXBg3LVh3f3qHeAr5u2pVCRYDzKcZmWEmVnZ5HERfobUp3o58tCCgo8nKvM1ccs6zN2m8YnNrNKhobWi",
  "key10": "58G8zxCugfDyUWvkn24g1zkHapAKU56XYsJYGrR7qe58v7P8nrJBWXHPVLa4yrNTBmLehUzZ2wLrJ57CGUc915f1",
  "key11": "2A4PQEbQvX76ropxGub9ZphcsKc9t43QQVMXbD1cryUjKm65QQmf9V3kvCwthYHh1aMNMgLNnQBcCRxYdK2AzrGj",
  "key12": "2TiXW6tRYqL6VDiqURAhWarHDZRR4ZEbzbLJ6nT4Mq5WDMGZCLh7WCw4CRsx7DMUnBrQfvin7ft4F88LJ3Kryhna",
  "key13": "4sPZ6mqvHBbnDReVDxFGiBTQxPZW2dFY71X4s1BfZKwSVhgWQ3b3yH2iXvSwy3V8zUBzVop5HfAiMJWfBcQHbgdK",
  "key14": "2aVrXNZuExM8pC5aAebvSPaZnhPVRe4kC65jX1H7qwRJB8wmNrTnbgBuWS2Zdo3dpdZN4GyYdN99hyQMNiEqnLVh",
  "key15": "4EGzeDNwM1sjwT5uEh8z7T3672W168c8iLixftoi4SaHfg51raEL6eJi9XkWCs7FKkLsizeKogFhng8JhSDFyYLn",
  "key16": "3fiQZCkEwJ8ubpBdJJnvf8UNfD8fNQnxkFejHux4yvWuDzh17yWaeh5SgKbGEcLJSBjKQoFq95YDji7zE3p63XU",
  "key17": "2xtBD9K2o1pdFcqfiRcm6dWmtHR9d1yzJuDwJ3xTNW1K6qsGzL6fEg1B1tTQRtoE3kASkZHDckvLpguDieF6BbZw",
  "key18": "2n3iYsVdvVQfSyJZdBT18rwFQEoTMjFQzSkSdeCDFBrpdHsSk1htLYZTE1vNJw7kchLH1DdsiDybcfWw7rou6vpd",
  "key19": "3XJfVUundC4pBiAQyXWo2AdtB4e6y2GVhJBr7H8XpTgmMniFdEuTc3kVqkoXvfhEngvr4KMYoMQmKd49CNFRJBCP",
  "key20": "4NYcbu7qtWcmc9po2kPHcJYH1gz65xZ5WWhNCS1meLboUWVebE23dbyHJJDdrsyEFnGkB9ABPfhpssz66X9geTUJ",
  "key21": "5VaCdTsRLQYWR58tcucM5Cds7CmcxtSKa2E1BtvKMbCg9Ro7diD1UNhQuT89UsbcVkwE7GGZwLHh6k8L5Svuqf5G",
  "key22": "4fYnN8xQyRGjwAhtXSW6fZSnNuao3v6rcyQzcdq1rapsxdXePeEXfD4cHd5wEVGggkKApW1E1vVpkSAqSVNXayxZ",
  "key23": "4hMhqDwmLQ8qeKKqKPd82v6hi9427zaQEbvCUgmpU5YcbEYkipEGdJr3PCW6gcp9E3hh4Z9qAVC7J8D4LMH3eXWt",
  "key24": "3y2tLER8wY2SAQFUkfKvhLGzLEqwHTyoUeTwoS7Q56wwjwWHeRNAvNFR3iaVi6KFKJz4qyE9ACLerhMpaeiEAZer",
  "key25": "31DHs96xPQfgphspUwh11cLM9QSi72dT5eNthb1jNHLqpFX4QXbHiEjBdzr3wNj5kr8UNCE4S6HTGoYhazW4rA9x",
  "key26": "3xus4h8bXmuQUJXqHsCCoPSaKjnWGPgHUE8Lfe7ZATKn41FrB4EAX8nKxqtyeceKZ45oL3FFW4MwbhmmvPCidyNg",
  "key27": "4nsS4wnanLSKPybNKQKbWkW2jwNqLhDDhuVSoat9DWg7a6GV6gXa3SfQgffTY1mcq3hPRhBunEqDxoADBYXQv7vL",
  "key28": "5uj61vRJSY5dSgh6VKnsS4671wmCvQy4BZrf1gKaVhuN3Dt3gejQyzdR5EPCEFyoYTnAWCjvb1UcvyLd66uDiQ9j",
  "key29": "5ki1ELbobeuHa25sSKREvpxJkg9ugWAyeLnwBVa4Zb3nF4GazP1j1uZ43y1kk2wP7R8nEeuknwVvPjH2LuRafXPz",
  "key30": "dY934TFb6p39MJb9CS562X5ED6vtQzcZHzSXgjdqrZhSPKAsf37qDarDwzhPAJYxmmATTtm8SskZE5ZpGTQn48A",
  "key31": "653UKPMNW6V2Y7DScViAuu2cQhQ5xMrRwuo3erC289QJFfrVsq62V6nMWL8FhLVaES9SVq8Wn5crj2rECN5oPZbH",
  "key32": "24yom7ADL7w57RrgjBN4kAUteX2T3ahGrvAZvPRptCoMe7WrYHLeyqeuydonAaoZMViyS5gPdb7jfGDEuu6AhvHv",
  "key33": "2PH87th3qaei3GpCPzQtUCXmk3WVXj3QU4uEVB7cUhpMbMDiKNiFyh1A1dboMDjz9idVJf3uA1Uybre9NPRyTiVV",
  "key34": "AYGHJNSyZHYFec5PBx1G2f3BaoXmGcMiLqoZkMHPRgV6FXPLdBCgJbBcHs2j8BnXGyPPvPWZnDifyEJFSUAUnjk",
  "key35": "tcJgJFyyZ5XLuU3MU1HaA27ArynXehm25Bq5dF5hBvYM11iNv398sDb4zKC8pDFaLwscyR5y2Z2VicACEvzcXgw",
  "key36": "WTzj4otdLhSUVxwpCMB2FL7JszBF3mPC3xNxs8nMY72a9gEZNth7G43zy5YA277Na5CpjMaGnTsXH6DfLoAJzGc",
  "key37": "KPjLfvcy6PA45ALMPZfuoh94QtudUnw5VdVfge1osqdoyezjCpRpkSqP3gc1hmtcs5rWuq1HtFWgusjsEhy8UBb",
  "key38": "4EUYJizR9gUyDrHAgCnrfab3FmVeWzeDj3xk7nvJRkjLmxJBz246eeGXboDuzhBjxfMnn6zaPFQjrN8kFEmRu5XS"
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
