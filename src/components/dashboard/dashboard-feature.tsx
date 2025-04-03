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
    "4bD1pC3VjsG3E1R8yPVkphMqtHVsoRp9VgcSw1S1t3mStJBrkeyozavkRCPhPPvAVgH818XE6YYRkYzXjKbbHHSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tgGxYHUajENEJdEuE5sAmD8wSxSoo9ScU2j4croz1Kys85De6mkjHTknrEPrKMLnBTuPteE2nkaia4bJtBZo5S5",
  "key1": "5a9yZcurmJe3BykBoxyi1VJxZnwZGGZiujFvMVh6mVDV4UhmQGYjX5Ju1BV9rsvFWgfPy8Qg9aT3sckFsY3iBsPU",
  "key2": "2pc5D4cSH9GooLk4e4CzAgN8kZFBMEvNReEARojPsWzy6PDKZsTJb5Da6KZwL5KXeyAMPvSLLkBMmP1k1cPDn6sD",
  "key3": "3aircEx5S6VpNniAMNQkR6rqqtZ5ZpGtCP8V6K2z5uqFpdk2DSCPYZ3N77zwvxMEiUqyz23NFoDMwFL3XPALVrcZ",
  "key4": "4grC4AyT4J83ZSsYcgmnSfBW7iv9N5PjPJW13t7R17bQD62hofxC5JB7TGuJo2AGGZQ1RkWiveYqK8daAPqq8pp9",
  "key5": "3yNYe96NuWpRUQ5Mx34tN8Mr4fMVvNmN9vmiSFECjT1YJ8cqTSi87wozngXipV2rjqP5c6giCeoVYtvPriqdBpzG",
  "key6": "uAmbbjycqu8iGyHgC6cjZ284yTiCaKKhRw2pmrQTLixdbw8N2UMJNs7CZmr7d2MgZ2KkPpBC2MBN3u6Le8KP8En",
  "key7": "3NtQTbzugK1LLvLQVusX6X94CqWv1Jjyjw4Spo6Dky74yRC8N2GCJL6Muasw1BzbqoRPX9QPaPoUY2zUYeRYoUqP",
  "key8": "3dtMjL4ytZ17NkkzGQ8e6DNe8FhxZp6ZvcWVkgYNZmZ2WzEz1eyQYLLJtbXuEHQB2eRyRGr1o1DnDxhjYDf9cvP6",
  "key9": "44eE3dtGdpxy13RxVXBYhLCVfyAd22hwgxVs1m99EWKeNZP4P2w2n5QnTNrC4dUe2ZY45jBCTuotJa6yDh4ChHU8",
  "key10": "5qCfHyHD6vriPuTC499uCgonacCgWHmLcZeHe5H6avQmzdi1AuqyfSgtvcdhAzheV7F7ggtaDbsWNtjaYGKkCTh8",
  "key11": "3ZJYsfmw5jMC56pQuU7T9o2R7DbQJCau6acoPWvWJL4EUSNZ3hYRwQuubZT3DW5YaRPjr7Tb2kWQup1mz8aXvnHV",
  "key12": "5Q5WJ7n9Zy95Vc38gewRLnQGbkDJin3V6eeEhrG9SxnWe89UXvYouq2wTR7dS8ShZHzriVkKbM8ZMKt1QqDdEBLh",
  "key13": "5EJHkZJtFYRhSzw2mRZvBKHxB4h9Art6XD7NX4aqobWyBxmW23EdtDtVGyug33DbQ52KHxGXeECd5Q3sh4zTZcKB",
  "key14": "4Lzt937Xa1aoJyD7cJkj4hCzA4YTcCg51Jg7K9AoMtHSuZEWuNRmVxzjaXPGQL12CsVALdCq2UPbheNJLikGVPDv",
  "key15": "25kXbd7Hq5J9X6M5qYvc1mwR9KbphEtw3T4wXPc3cHpKvctFLy44dFZtJBPxxvCsGvK2EWByzvPvZFLRYvj5S5jp",
  "key16": "4PY5mpLdLm5xZd5S3vevni625J1sPwTctUvLqz4E5TeZ2dZE5j5HMpD4wVY81yFKnHhEQVJPrkLm94WFrU3kCHah",
  "key17": "2UQ4Q5ee9YrGKvzY257thgZjfDowdDkvRwAAQjH4BkunDSeBJmyMPDAmaUpbw46JWxQu46nVMSHVAQQWima9bLwG",
  "key18": "3VxyHsSxmtJnMfCmD6xovMMkqTRYTpLopUfL3TqgjijQ3BYHKyL1xEnzcnJXzW4XFBRRbtBJGFTF1oigLNgMcAxy",
  "key19": "3wtr2psTp3P9CFqJDL1CHEKqapbGrNcmY8cBVd6okP3jgLbtjX7oNp7XF9hMz4G7Y6497fj1eqDiTRkccGihEb9F",
  "key20": "5sPQkLc2EkkRmKBXsvK2x81esgQHqNHjfNe6sBvntJFc1h2JDjZAZcJbMJrmv2bEemP7qJEBormubm8wfSfVAniW",
  "key21": "3y2B7PQnTgW5koaECnXqCYzdYWmMqN6JdLzb99nWPWA975GbXaCVeSF4F6NoC7MgWyzBendfiC1VuUd95DCkP1bB",
  "key22": "48814aUeCGu9q9SQsXtZe8ihZ71a1p9m2oYPe7X9zovCHF44UV8cmzjz6Jfr7YNFpuU8DwbRxj53M5QRKEQ3wPvU",
  "key23": "F4STGKrPcJBicHqHfxvZmaQSNp7jvhX2upTbuNrPQmNXg3JQ4H7KZUxEiPLh5y2Ha8oQgjoYrbQUFxSVELGBFVV",
  "key24": "4QD4a54biPGwCy7ZqoDZUqWMTcfZw5dBbmTmaZL9z3kVaoAtpPLFyVAp5qiurkUsdYFng8rqktbpcM5qrCKixXaX",
  "key25": "4aLTuScgg7DsyDuHPafi9FvHrfsSBAefucLopUJrU3r2MgNad7Gh2CkwY6vbyDrbgSuYVnmAfdbqXBZke5jz9hJ2",
  "key26": "5Tw9EQzuNQr6N5FvZR3s1KwcMnXnancd8REvV1i1g5qKJNxa3nBqYGuBNcAg4uxxqn3XGMuDr4yA31jopY7nDiHm",
  "key27": "3SPFKPWhHvDTGnC8zHaYkTb5XR8WexTwUucTHaB2x8N75Uj3u24YMHQ5A7udYTDHV1sR9vsCuFTWYD7wKZWrTwi9",
  "key28": "27GUtzPj9LKfTS4BP6HeVWjT5anWUsHDeS1EBenuRq89dGLjQ4Vqr6pDNUNWBduxSU19JPvE1ac3pSYxCBX3Zb7y",
  "key29": "2wBtt6Zna8S6xyXpCKkbwjdrTtLuBCk83HwkGPYDYgnispEvXZ1qQdqpb9FWybwLDoKv9vMS9NhCfA5k9XZ9wdaM",
  "key30": "24MvwP3pAPeNG6wWLRjzUqnxEjkFxpmLboBcnykHDD5kgFcqopvnvVdmdgWFjirbk6pr4Z45Pzj3j1GJkMKX8AWY",
  "key31": "ZzzbvQa3Z3KUrFPFZGvFKohLQGnJMikDnauqYRnobWcueTeZUsMfG43yPFB7mfncPnw19BPdt9DwY9Ftdz8XuqF"
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
