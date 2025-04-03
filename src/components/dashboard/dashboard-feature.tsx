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
    "31W33YJPtkweBkwJVv7EKw2EuzV189sA3jyyZXbuxZHHwKd39myo53uCQnZx2aKjhcz7gPGGXbp6SV8WNgzqNAh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KJz3pdh3Nt598AmBHYcxXuRxoCtneBxXdKqoXu9RN8WTasa1GRKiUNDBADGFD6R42JBNEVdWANe5PaYfxgoQqZy",
  "key1": "2aCkGeRH9XNCeBiEvctdmve2ComTZUdozWAJjihchtfJQ8uKGgDb6khCoHKfnMSfiaMBkdvdUA3TsgzA5EVoKno4",
  "key2": "3LWLDEWVZ1dw4D95jfdhgjL92w7G4RvzbztD4WDrLBA59sUKqqW3g2WZwiZCawTACd9qAkTbGSC3aW1zC7ReVgvE",
  "key3": "3VPpU29XiMYgBhYqA4wgf1yG7jGE6AQJ72tEjd8HDpXx8eJZoozUTK9z1ghbm1NVBiZQYnaVQsKZgomyxzLCgb95",
  "key4": "23RQMQbG7HWkmopLkbxzKfbCnt1C2LKC9VM2h7ZRwErUDBi1KS25bdSHoCz6XkZHSYCUenQjmp9orxzxbtM22sKC",
  "key5": "iheVbZxX6W1jt6HQh8ohawgLRPyq4Q9t1kE4Ka6qbWJREpntoYAJKfAvjRHbvxT16Y37Jtj4pMWzNH7ygxjssYm",
  "key6": "szpTZAxeN2WW5dJahW8Qs7BHyGt4cH6Joyi14TWP7Kr5wA3hTxebPX9BVW9vFzh8emUkKdSaSR8M6217qc2sBsj",
  "key7": "zcjn4nLLdezEPBCHba8ojEK8bZg7Bim55z8TVsGCvhtc3YrfGXvPRKm4hDQFZHpWArCJG6ctaC9pwrBDr5Mrktb",
  "key8": "6Z1P7A3mnvzB9iUL77G3p2HhmNxFFXQ1pdX5fJoM18RgDqhgSsr4SJmn1cxryBZZYyRz2eUnyRfU84gk5aVL26E",
  "key9": "4C8dRm7MU1DucEX8XJLZHCLQrmaGTNBtZaMdTD1UrWhicyPxAMFkPmnwzkNayMfxzg954qKCPTJqn9qDp1HFjwy5",
  "key10": "eSiYq9FVZU2DXMx6FEFWJEnsmQPkTSWepNhUXBrP6j8ECHsQGJw8feecWjpdRbsEUwtsfpKwpPMkhsYitzXoDJG",
  "key11": "3GRxsWioEUM95pbRvBsboELMy8e4eZsuuqTzfmwHQXPX4srWoF25qozn2uM9bscfYBegxBsoNjgaw6MYVRv5MmTg",
  "key12": "3VyAxLLkA6zwoey1SeBDJuAqKAkCe52r9t1H9ueRUpYxZXGYCB58Ep9MRGPBEs7oFuGCbE3nYABfTPnPiZS3ntAQ",
  "key13": "2xR65B9FhZtVvxziYWGgMG12k3BXoforcvGBghbnrBHuM1VPQr1AMccM9MLz7r4GcLPiAW1GiW8tuw3oVc2T3FLe",
  "key14": "mgBAkPaCJfibSK6otsByE1t3KVNFD2mw1vc6NGCDmGPFsH9N6aTFdN948DcDMWep33Gb5GQ9ZZkMGfeKEf8Rz1z",
  "key15": "41qkqVR5GtnPjiQL4PCqcKwKvxtSZx6sLSPvJ8mY3Hquge5oMWTqPCTD4JjizgBcWWTz6WvbSJ1jjcp77a5ftQi7",
  "key16": "2MSPLGjFUTA8rwtCy4X3uGu2vSaSAEMGBPWXMksvkhRfHn4fdzz2GZj7NgJoyV4eVyEdaaxaJXFRwGq5J9RU6PuY",
  "key17": "2dCXLuJSUysBCzJ99eX9Dx9jQfA8vQBYHBJm2tteDNCmaeEp3sQk8WR25azqsx7UWKQsA5GvN2RbGHces5QsD8qz",
  "key18": "4gFiqoDBPLJJN4rpAjQAYqnEnqQffunyj1vJin168bAH4csgGUzSpsvkFE8VQdbNKfavA3g94o1QzXaHfpQkBAxY",
  "key19": "4LyZXAFr13Thm8W1Qv2hpHU7Gz3YqRq6kyAXVux75fdYPNxaniyyQn1xpRkc2pyQYpfq4tGAxe9gstX1e16aopD8",
  "key20": "5UB9eZkjgGcW1DEFH3ZpMgXVtv6qVexZeCwn6m7GZL8XcS1wCvGrmgsWCST1ybPRENNr46wzEN1tkRA9wTqNDG7d",
  "key21": "N5BQcsqK1so7a6Erf4rPQUAqnE2kyFMizQWZx65126apNRY3p8ndG1HF2NfoyCeXubZQjNAbKoCxZzqBmnkKa4B",
  "key22": "4hZ6bRXQdsbUzxp9LTqveKs39BR8yXNod4R4RpB4rnrFKinpyM6c8aY6xRMPaCNMKq9WsP9Y8pNu6fjrK7PnHmjP",
  "key23": "3tq5yKuMonMek7AYMQQuZWFp3ySoEio3Qy6Ggn4ybewAFG79iFJj9kpHuZnWPCP288FwaZFf1Vwab5xpBEtEEcEK",
  "key24": "6788LTdR6wEQzBAdTNHowmxfNQo3Ym4se2qoqbtE2xLXw3VGqiHnoArLihRzpnLM1yggivb4igatW2RYUWw7iX9Q",
  "key25": "4AX8zftNreUvcYHbqYdsWztwytWQK5dfxC2MciYf5TAunfDBu6UMn6VNCBR7Lm3fp2Jtnis4RwJCnYgDHARJcusr",
  "key26": "4Mny9vbe2BnxDGnebDz12mZrkVjwuUah5erXDh2vDBkWFwExqAvW1yYW24HWgamKxzDvz3i6EoAvDJPQ3Kkja1vs",
  "key27": "5fcBpA1sNb5jsZtcQNeoP5u6JoDpVMwKLeQokJJm4cKBF1BXonr3psRwjVf9BJ8xytPFmt3m3wvV1JnE9REdGVKh",
  "key28": "4Mqg3PiReaHNWr23uWpDAQLvB46hiw9YeFcF2MyL4mVHjLZ9Zd4gQwDY73XSUuGLfk3Wof4VzAoMV6QbQaMtRTFY",
  "key29": "5EVNAEpUpLnvoBtF7veaBaY7f8sj2RdvBtGTuQHH2asYW49jwxMtfoUehaDGowK3EYv4XwE8EPgXu5Rw9joduMTJ",
  "key30": "4VkC71Tyivw8YJqidVdDzCY15c7YaJXNgVv4JdaKHPvGkmVTgJTFfExtKiUDGxUKkbPJ9BU1Fqx1y8PuXDZyJLsE",
  "key31": "2V6D4MHNrBcpCFauFkugWLGKtGCTigYCY7fE3YQVciLbpzVrdkpqELyXiGUbeuL5KXVfBN5z4dLk16zCgf1FCzcK",
  "key32": "5GPAPkobBmdX4mpWwF7pcuBF8U7PUthYX9diigJu1MmwnN7x5Bk9sTP6DBep5toq4PR1zHXefuKsMo4ZE4uM7jJ6",
  "key33": "3eN7WTyAQAQgqkDpb5xQKyeSoGn9ZNASXA9oYVQrPryavr6S1dDcyaREwW5DPLWtsoJDB7hWNz4rWoSrnMjF5ehE",
  "key34": "6a6MHQVxMy6j3cXp22LFyKeNciGhicseJETQ8wdyo2ysAtDQbXR1nLDRupe31SFJmv4c3FksUssYW5VmFMqzLMC",
  "key35": "22h2Ybs8hXyD2R9eMQowZ7fGRNSu5Az2GhWAZyYCpVXQMki6njDvzsP2NNYhGpK4iWdFZAuqjqz7Cv9QaMVcKHRU",
  "key36": "axisMy7vkAYoS4koBGBhmVfERugDfR9idnNCBbMoEmfzCfyN3xcgtLQ8ExqxuWUV8FbQGMsRU52k3uvHjcviPU5",
  "key37": "3BNwwDoQVgEgy1GKAAWHXxFwkyv8WGkkkwn1UoTEpfeyqzZjBRnFx88LbPd9LxpiJDR7N75XyRZgTiTM3yy4pB1p",
  "key38": "2gdLtpaB71JriqSDetsYNEVUJaiRz3rym1BPFFuszQPt87dwfY3PeSs9AuT4zhMAiXLScNhYXroHiqpQtac2ABNS",
  "key39": "33ZxRC6BmysyMfsbjv5R6qBPjDJWN5bmmiQTcpT1hQLCY5A5onewyo6ZWwJGjzys3KMFknyRLLANeZvq8M4vceQn",
  "key40": "3uvCajVdnfcxFjA7Qa8DYkFqUhXum2ndwAmA57UPQkMXmnQ12SiMkq4WQFS94PqG4CHz3Tm7Xrc4o4m5onTVReLv",
  "key41": "4ewq3hVMMZY6afgNaZ92wmnRQsyKasbWZYuZMqFwqbUtRJ5cL6t7ocCriYdfA9eH7iLfoz6rb8mpb6WQWWuJMwiA",
  "key42": "5CqDkgndc4W4uVjf3oWNwu4h4SRyTJGBr7B9icRaMJjqKXJaHcQ4pfEH5yCnLHqA4nCcLBdu142Apqh9ny7gLuqD",
  "key43": "57r3LWJ4wvb9igwpXhEGBHE9ZU39C48d28QPsXhNjG6NNn5zBLHyzjLjAZ43kiKNxVzdY9K2cD9yyPnMYTSmohsU",
  "key44": "62P5xtkaAwqCpjqLWmp65YMUTZTfPzmV8HvughEZEiKay7kwpM3zsqsWxEKwBaTvwupbxqcCjroK1B4AawAVfBEC",
  "key45": "23oiscTxEmujwj5axKF2Nkig9arHSYaPprFbsZS4XTvACniQseMuHDuVGZZQZBuYPTYXDcPkkMg3xAQTSD5CZPki",
  "key46": "3oFTThEQKZnyjqG232fsZ5666uPQbLhfuDqn1BH1EsjszuRZ1g6vzb1D595SL7wMg2GsSeAq2bzGaArojt6J9T1z",
  "key47": "4hbKWWcY2T1zQDpPBQsnPfF8gfvMKmr15F7qtX8XvuyowYWejeNXpb2cEmi7BiPWimT1rWcRZd96anczeR9qQFUC",
  "key48": "4NUnPqJpmU4YF2f5qZhzhMvkmLgVGXR2Pe6EywjpD2qM3iXQiaF72Q8MUqyUFzPDuko7yCTWdYVqsDkBZizYWMKF"
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
