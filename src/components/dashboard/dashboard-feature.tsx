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
    "3H6FebHmn2iN1bHgdnaj5GvWGRoQnEvnDZLhWhnxxGq4nEtYDAGWnfoUhGpZisiq8Ma5c8jPuLHeY3a2dmaPtMNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xQmdo3ov9kpogReXtAc1Ag9UAV7C7v4Vzrmi44uKtx1cdeRhVTnYMv6adEGY5f2HEdQuQTuLZAGaHbZJ9rQ2g3c",
  "key1": "3dK9JaFJu6CqreGPbPGw5chzpaLg4oQNmBZ93UMqaTtdyiWEChPe6WTARsVoWxHUHXEBtqvAUTYwj3gf5RM8Nqbt",
  "key2": "4e4aJUfHbCJrvYz2PMALyEPonR668bAQFe1UzHr81XU2GiNdkqgqpavWPuMUEBx7aYEDyS28k1UvVSMeKnURRD3K",
  "key3": "4u4U14zm35ujZd5typNfiiJDYdpsDzzTbCiEKXbbskrWjTVzvgZe7xWy2Q7vPCkBJrgApTtTJ6ndyweQ5HscGcm5",
  "key4": "3PKX8yd3BFJi8F2dsxxQ6xtp9eSuDNhk9tcq5PfcEojeuuNqEqDTEmJq6prKEaC8o6pbzg7JLPJQ8LWs71dTthQ",
  "key5": "5HKyU7UUqTPKyK8GWcfG5mooiDakJDSp4s45he4exvMw8GMNyRrKuX9RwR1ZDjPVEUvxXggYbDW9esA8CBVwMu7R",
  "key6": "5bcQ65uEdNJZULsXyPwUCRzhpxn9nNqSAPExw9msMT8K43ivPrqtnE8f6EvJqjx6LHmkEF4mRHK24YwDE2Eh6QZH",
  "key7": "3NtLBdhXZgNMWwNWHAskpgKtdAhnpzNA6H3aJDsSN3PfrHvWFKwHntxxDiKiTcbXWAPNrxFGK9w7P7Yuf3HF1bgh",
  "key8": "3LzAhUNM2yCxHi3tdWk8PCp4aTtjJ1KSUcKpbXcCTV2t2dGjE7X2CKRfaiJwTaQJ6QQX6cR2hvbZvcDoZj8E962v",
  "key9": "2WTa6nLbjMFpXMLQxzyy55LpVn9yv3JHBZQiMjR9ZGpS9Js3CP1dH1UtYRsTc9D6QRt2qBTnGGbGUFjHzcoQ8HXf",
  "key10": "4xTDP8J2NwRhsH8G99fQsebmL9xsktn7qwGnBLyFodnkUrUe98MQqYBwrDjs5KSEHmqmFby4tsghkGKW8P21j8Uw",
  "key11": "2PpAnkkVkzKDtAPFKqjcsxrWvfksmSZoNz2PTQhRBZUbLSp5Jp2Dfw4HxjgQBsorX9kKxPh5hQzZgitTZEwC1kyG",
  "key12": "4nztY3xTGQ2o9YEpRCUmwBwv1XtFYXzkHjc9bSBhpSHBPnn1fk2AaQGi64TGauHZmwp7TGQXcQycYpNopaUaoFjt",
  "key13": "2EQLQq6itvcs9fNJQL3zqB7pogoYozg7Qqq77h9bt71bZzMMPwe3yypajKy318Tqiq5Zupdj3U2PQU37E2R9Uj2N",
  "key14": "35SzR4PciLoSdMeBj1hCMrTzegqmDwtfDhGwgr8sk2UwpLzH2yj91ATUXsHrJMaGkARqj7faU31EQ8zVxLCS83o1",
  "key15": "4aCsuXtZsi2tooBBepHhrShdcA6QvkGMrcTr1WBbHzec2zK5ZyiTRinr1WQufD7Vdfj61bw49YnbTs3BpcUS12ii",
  "key16": "3w6dgtGrDswkFv1BrbnxWzvok8iNysxaKmG5Tec5viYDtmp5vCHP9HZ6XZj8Cxkfr2TLXeYFrEEporfbZNydXt8M",
  "key17": "3bzqiX6moSAfnDoQABHw2Gof5Jq5wVMamRUSrJRVScPz23fUfZUk4Sg67Tj8UbGj2gM1GXudxgCnRzsv7eK4EDvY",
  "key18": "4EFU5fZESA6FfDowvY4ZibYYsyk2DBbZpu7YtUbyVWT2vz9ci4UbzAimYw897C9okoj74kqDK42yKMttsfhvuUYz",
  "key19": "3WbNFRqrtKvk4Lda6oNaxLJpRdPC7gh8ufjm65ujyW46Tv4bhBabSihdagNijJPyL9Z7Ypu5iTbJtoonUTUR6434",
  "key20": "GtFTDiw5AVpj7QjJBiYKAgS1Xdac7Ah7j7s9JBASh3tvANG1deAcg1aCH4HwTtjvDJYcaDAbFZ865sTNTky7zuT",
  "key21": "5aUuA6cCRUenHL88s4Mpb1iHvGBUsQqhhd4GD3Jy4L4tdHJj7s7f7JEqHWzYhPwQ6rD8j2Y5DC76kEKAknc3nNSQ",
  "key22": "3prxTFdDiEtXgnS6cuggPhRk23jjksQVN48aunERsYTZTGkx3hoS1131gATJ1gMAq4TUeemBJJ2xpS54M2k9D3Bv",
  "key23": "2vRGpiiJipAPk6T5qZFtag4tDtNb2rEUmMt7wKkX2sv4g8MCdtdNovbGo96aw3rWZ2YS8gG9LvppodbAxutsW9WG",
  "key24": "pUinNpbiR9sde5S581V3cCeHaRkzdpfDEenkDUyCAFZiw4uFEGr3LMZQzzQoeTMSX7JQP5ahASbi9JmtCLGjY22",
  "key25": "QDxbctaXiq93r4nEp4N8W7BPS7R7WuhT8Mokyar5acRQQhT5QhPvL1XrXQHGTLDZSnJSSf7zXhWknfZamf2kd7B",
  "key26": "1oE5y62wuePny3U5QFNjdzPGXs5GAYeJMHu6YtvUBYAgnKq76orTRZ6kg3JyyhMZ8HaG4rCVJmxBFujv2HLEFix",
  "key27": "3appihSkq3Sizj1vHhip5w8XP53orcZaDAPBKZRZ4c1ufBr2sokKLTPEeESbXgL5DDvqLT75NpKMfaBeCU7nrJC2",
  "key28": "5oUuuqwypaWdyKVWivmtCm8kxjfXHgt8DgFR5wKwFtqLeLLvM2mS5hyFWwj7vFzh6qLM31AnqaBcuWsWJTncePDX",
  "key29": "3tTkiEfFfxHEweDyrmS1wRzGQWTg9DFi1XsVeGcPrSy2fn421cW6SpgaomdefFj3CdXb4ohGMadWrfetfmsXooQK",
  "key30": "5BBUf7YdkZL3tv4uZvottH8QnVQAuXh9SJWBAD7EfHceC8F7qexpJi79i5mSsCCNhVjWb1pYftZqpCVzzQRZtpKW",
  "key31": "ZefC3s2U9vC2uwRpY8z9qcW1Znt4BVSaDfDT7tAgY6aYyYw8Spx76ijZfCPtRbg3qesVwmr64FrzBQEkgX1gdys",
  "key32": "2rDqtJURP3KWpevmjPVjqy6Q2Ccungzf6XQvF5AMrpMDYki9kanWHKWSHYjiU75vCLP4VvLi5SwxpxVzT2ogM1yX",
  "key33": "2X1bU8TFsvDCFkvM6HDHmcoA7r5t3yKUvEmUjdHuKaFhMxFvmjLrmhSTCW9v6YkVVgnrvVKvZHB8T38mE6g18aDb",
  "key34": "2McG7DayWCmHEuNceKod6KihK86LTzHZmZi2rbRZbxNyGTzEEnhjsMEdVPfgSs4uzpofMP97hvEbL7WBW9sfooHT",
  "key35": "5fP29Ks2n4Tu1qYMSb68Nfgzi8PSKULLhKrPJVyc15KQ1wpsz7f54gQsNrXNmL9wj9uPgqDvxJyhmpHF8Y3eGRU5",
  "key36": "5rywTzCL87sfzeLzBsTQkQALogD8KUJdY1sMNNZTGFyhcX7Q8xSLqe7AgtHpM3wLZ9ni3KKF4go5sdPPGHEWm2MH",
  "key37": "3TEh8VZ4KrZQQ7RHqKdM75HtobBDFaNox4uUmESVHDE1FTdE5513hUeg5srjCE1xP6S8Q6MdEwh5KKtFF8awj69",
  "key38": "4u8GP1r3PwFu2isuSW7BotUNdsXumWZcu9R6y1d7cqnaAVYzTkM74ATBhfaM2vVvEWN8ChHdEQBGzWtwxDXiwhvf",
  "key39": "3D2EB3cVbRNZZDtFddMMK7FJ3k4cqVqaFLNDCTU5cDDB1zySz5zyQytdAKDW5qHaujq2ojB7RzpcNAVd7vNLiUkL",
  "key40": "5QnFuKUZaut2PLqp3ozAjariwJCa6bwaFoBWvFkg6mNTsqGUKczy6SJ2LNNYP9r6viWJoKQd8h2VPXDPtZFQY8Bo",
  "key41": "4kmzWL1Tgq88XDoeZacY3ubX7aY28Ukm85iGpkD5hDAYA7ZUzTXsFkorCVw6JRSuMjqC6SPFHKUEaUHbWYmu3B9D"
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
