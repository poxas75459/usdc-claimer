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
    "2e3GTqfi84ndLfZCGj8DPyKZ3YwKnT477Ni4NGHz9owFYUgCin9jpwhYwJTcJnMKZYc3C3z8qetdeg4F4tbkYoMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ohLUCrBGqt9zorrm8rUf4aNb74Qg3zPzdyoN6DbjZskEi9XPqkVw7hYF1CHzCepguMZSzcwfFfqJSqkoYo8i6E4",
  "key1": "3K9tYbzdpCqRmpjZeCTX5yFArd4BWAjCN7Ak67FwpPYYw4sv4NjtfXg36jGBXcFYGjMgS1KWJsmQTfXzPHjnwrcP",
  "key2": "3cAJyR2VDMzigAT48ynnx113kD1LjPqCJaibYaf34Qx3SM1FxPtqcaKo9tmCeHJQDmVFVkSY8S5NnYueFndX8v2f",
  "key3": "3KV4VkhK7bnGFockBGqtXDbpuCcy6e24cr84aukYH9eJ5ZzriicHKGUpAnzbQLZUXr2UDrJAWBrychQNi51TuFzp",
  "key4": "5KRg9AAnKeUSdGM3nhGSPTEN416zcsNGJe3wcUezDURkr249H6REMxoFK8c8ZiUGEiC76PLE58xJvfu1sNUFeja5",
  "key5": "524zjFaDnJQRRD5ZNX8xa6Zr8fZFwLPyL2kTVMzfg6eoJCgYbtEJrHteNDqRjv5ahKLGStdmLWfsuLj1UggE4zh",
  "key6": "5fDZ6RpAp5PFuM6dkpQMQbTCYzjdKjZvZa7iB36kUBq56CugCoK4BSf1X9SSe3GR3mjqNhVm4qydFfoe29HWQKtw",
  "key7": "2CsvjUTurFXbv9NCnBMYz98YadErfZayutxCRGRbLsCb8MpQNREf6S6dJqkKhqwyiJ8zJZEfxqZZq4DNuRWqPetX",
  "key8": "3WeeZqUEiuA5ZZchv4qjigxSmuvLJAwW64KVdr1wQPWJXc2f8qfV2wmUxHL5A3pb5fraNqrWq335Kkj4n8M8eYt9",
  "key9": "4hUHAKBjg85hVtCT7dsYF5YSBrkdvDaLwsdiLAgCDcY6tLfnCy2asN4tq3jyN6ZxJtGKA7NVPALZpwoL2i6pGREZ",
  "key10": "4ZsgwuC3viHLUSM3iMmaWehzYXrq7ifQL2TYJ9Azaqevv9zVPGhsq5hzQsJsJhPdXbnTiNstpGF9VooUdixdFcaG",
  "key11": "2V6gGbth5o1q1GKzFJg8UwKDrz6HjDY8PxtyJfkKK48ZZXhNHiwNBZ7sWHKhAgMALxFHEAmcE7efEsHTJ1GUhUTa",
  "key12": "48vvzFK3KLA9h7XxMAnaFoPt5h3VsZWjgXVdJ1Bky4tajQkkSJ6sV6EurLk6uRHo71uYuMgPhFkfUKwHsGwrgp5R",
  "key13": "4MQTkpD2FQ22XXAkBEJe1EftToC4aRoMeaWtLBqNt3LfJ5ScBkb6Sz5NDuB79AnskuwR8gpRDiFM7zaM2E3ZjZBe",
  "key14": "5tkADjxsxCL3ba9UyHfwy5Anvw1iFWwRWmPoekcfe3MWibw7ztcZqHD9pQtPg61UcRX7BiyyV6GnkQbKBpF9Qiya",
  "key15": "5BVL8Z56zjrgrGaRdXTUEayxHvg56f5QPwLnWFYPttPtF7rNShxPn1jLydYGWh6hEGf5cAo3g8WEYXw2QrZ8fxCw",
  "key16": "3Pe9zqxN2VzwPb6WVod6ZJvG6a3Ssiy8nUmhxzide2m4HDqrLv4Rh3PXJxjmzsPhgCveL4vJARzb365T9WGtDbCV",
  "key17": "2GKPyFQ5SL2Dq2pZynpcFCKTLWTYzk7YetVJzGXjG6tPcq3ZWtU7WFYvE14Skuor76pLicRJjWwFYwL8AtzB3BRf",
  "key18": "4rhp69kR4AVUb2hvcFxgaxYFJWcLkvViwHv3Y6sLrgWXzQ5z6aNSbK5DREhbFybrZ8ajazxbVAQ34vGvCYjMck4a",
  "key19": "2rg56zu5u8a4oYuCuW2qATD4ugn58mdbmaQNZCHEK3ZpWYcrA38zb1ympLHiVTq2bB6rdBP5b6Ww1deLKPezdpj2",
  "key20": "5hBY4jFExsqZnoCXaFkv9od9oQuYhue5CNAWtc3JkBjGhkStsAKM1eff5SAxNDWUKRhjMbvPqYDyuCEUBPGU5kpQ",
  "key21": "2D7H5MvhpM1mgSoiRCYdpwU4T1HkSU6RHNV3dnkpQpUzSXg6F6gimphwjgMHd1fTy95df9ytNcBp2UNamR7UApVc",
  "key22": "DyF97arQ6vDNGdVJE4LDzCqX8GNhLvY8H3J2Djunj9jFv777wdVsoJHMMqgsN1NaE2yRnAQDKDBtxmfEkWsmTcr",
  "key23": "5QMz1Tyw5415UFxBTaWuFMEDDKsCeLA2FxW7dkTuCH3Xqo4wuHnXXMK9kni8dDxj8gMncqGwy75NUMcX1GEMEfQS",
  "key24": "2mTPSxtkeVDzMjqrNTbfzbtubPxor2sBUvE48Y8ba5xd1XuH4x91qop39zca9i62AE3zrZTRozZBcM88Erw7v5hN",
  "key25": "3S4nGahNiHopeGxqQAkje8PGaaCuD9di2nCQqZcKVu3Cnxf5dFxdCHcMyYJwEJvjZwpQqHHwad4GEYL6qrueSN8y",
  "key26": "5SriT28HG2GLegcH7uV2oHAFDxeGGNvgbd2JC96cPD5MS2NFxC5WEqkM8xFHnV349ebguTMJkEV5YnzWqTXHpqqJ",
  "key27": "4131QDj6DehKggeV5NYsGo1ejvFVk36tBnW3twkiipQYErKgZy1XJJhfZdiHax1nrX2ciD1q6g218fCNiatzuKw2",
  "key28": "4zcMWQDG8YmjFHk4vcc3Ux312Q4zwFoQcR7KwQiZoRkMBcvbMpEWLCpfYY2qbhodEk6CSiTnYWg12C63ybGxnWBb",
  "key29": "3UfLBPDngzy2pXARLBKt9kGSV6Y6fzbt6Z8ckgHxfUhsbG6osA4w26W8NMQuV7jP6zcBsEUso2VbAAx9hgABbZfp",
  "key30": "s3x9ct3eGBKzkPtuCnvfxPcr7LgxYEjSCL6VDh7J1pGngXaXDUUxb8eAFmrD58GTeqDYvbFjjg873nMDBs8SdyT",
  "key31": "j71QnYu2Lo5tW1U36yTnvhwCUWfm8VtC5Dr6gBJQWapzFUkAkBp1QK8Dk1XSbv6yT9LxjNELPX8SQSN1xGjhPk4",
  "key32": "4cFGfzYPCipNwhJ5nJ5QimsTRbtUa1fLkWunFkm5La1o5wTADUsB2Eg658aV9q7fjgAnYkNL1ikbKJ8PCPW8uipa",
  "key33": "qt6Aa8NeaCJEPbEPGCVwdVg12Pd8NB9C7HrZvmSonUrrLMWJhcbgSf4vDk1uwvdvwx3QLuQow2bJcQrbXo5rAt1"
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
