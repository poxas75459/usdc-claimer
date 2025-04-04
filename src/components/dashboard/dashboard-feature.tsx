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
    "2ZJB6oeGd4BBAerzaQ886nXMmHQet7qtXtwojHep93r4buvfjp3SJk3g3RrZxzgUrGMjnDpMSWDXh9WVfW4AmxVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8fJyhxHzb38cgZ6f7QeLSkf5mJ8CPjTtmPMv7yq36duPmqJDHAecT8T3eBE8b5hVyo9KC5ncZw9wFUY8mFK5KSE",
  "key1": "2xA54BgC9euHcPmx25Z4F3iiBrndgPquxa46XjE5meRzhj6jtLG8R8rx2sLQCp2eCZM6yMpkrhngXLUjjHmfgU3H",
  "key2": "5p5JkuEhdjqKfiwnDp82rZGjHokH2QqsAVKzvzFSYErjocEGNEQSskQHmDoCQmLXc2FAvsNqM6jJx98sXhrrmm4c",
  "key3": "2YDmB1AskAgg92iZEbCZJMP3CmpXyQiqHaVSNzp6ZS4TrcxkWcvkqpddYBK1VWaWMTzZ51wfJps8r4BsESVNzY78",
  "key4": "3ww6bMrXpk43NaJsry8NkpTJor6Yu1vmf1NS1Qkbf6BhqiJv1R5rvS2rguueSeX212n7ADsMyWfRrk1u5y3hNhN2",
  "key5": "2vvNvBt21QEM6vh1mHCtcodQNPypHuVgy6kVn7CHwhwX8GnKKdot4dybbpCpnhFbiTtGuDL8esVKzD6z9GS7S5SA",
  "key6": "3sjkvqvtztbQL9avZNoWqX79St7YG1wepAqujyoCemEYgPmBQmiZqptpB8dKxtsQhv2E9QdvGfVA47zH63zYa5Fi",
  "key7": "QrwguEyHCo2bv843iQtNDea4SDjHox7BYkr35w8FPCdD4k3B7Eapg7XzpjzGrwepaFXiofSFtWrha6mLTkT9kpR",
  "key8": "ByTcZpvhDe35Fip2yHP2TQduHcAbBRybVcYNDGyj1GawufHghB5wCSdYmYJjz5mJcAioBrPLQXtaJMg77fb2hbr",
  "key9": "22qLx4TjRqx8uUmjtRLUQb92ykoMqUghrqNibg3Y5X1DLQGZ3VF25VUAutvtR3xL7HWt9oAKKmZf5Z3NcfWLRkpH",
  "key10": "Je8UqKvD6eopBnJZGDsGqJowDQC4R8JbQyeTNPgvf6ty1qNNWcyUcgMRFX7zaMPfhrNSiVx3tz5JNQmMCP5fBUn",
  "key11": "4326PGmgBCkQkGBxhE3MUsbWitQNjCoboxaj6LyXLUNFuS3ZMXgg9Sy6MifKXkPiiQR2S5UxUHaF9bShoDsZcAVZ",
  "key12": "4Qpwvsen8BQEXJBxofcma71njDPr7b8bB533nwbiYcERgfxu2snXNPnPxoXqb5dB6k6sqQ2E3BeppK5EmfFGpe5W",
  "key13": "vJ1YNGqwAtV1kQJ1CjwNRS8FTACCNuq7k4ZS4ATXL4khJM1yNVEcRV1EpFPCtjAT8S3DJ6tGAJ9TMSr7pRnk48V",
  "key14": "3Cm2tGzCZ9wExdzwg9mACh4mjMYjdpXdJN55LsCd78vXrp6zBCWBMDzbZvhbAfFgn6UWn3eP1S1aZsTqS2kdQ2xh",
  "key15": "4YFreuKN27khKqZRUzZBEmopnJQ8oM7s9zziwBdKYZjcqgG4YGs7tuC4naFtdQQA3opMvkUrT5Fi5pbd55cJYjTV",
  "key16": "3k3uDJRqgbMpyXzBvzKscNKkagB5kNdgeYjBdehXEbQMgeUu5Uh4fvkE2idRcEw2U8GHUNo7K7KyWoKZdYZQUeup",
  "key17": "4RPGuqFAuNKzsi29aHNLoD4zVGz6xCNtu7ULrTC5RNYLY1TJAtpfx6giRsQF9a4C1WN9wU7NZkAKXH3CkmMj7q7X",
  "key18": "oyTGdVGjBvJdQB1uKRVWXAzP5cT6NxQRaAtRok3nk6bfekyi8LZka8tELN8d9YXMfdNE4W4TxscEJuujMx2MU4A",
  "key19": "65d41ux3xhGqNxkiJRRWFfWVx1ccMrChCcd3ttPd7jS5hJTjQugAaRaSyC9TEu552L3GMYW4qgvfLbdyvEny8cW7",
  "key20": "3rffehXp5mvoL1NCBW9Pb77TSS7Kx8kMogdv7oDM2foWjDNZxHew4U1qBX3THEkKfNVjDFsUZQ5XVJXAP9AhuYqk",
  "key21": "MEDV5HnmHJ2DVtxudgizGedYrmCjQRjpdfrGURq7GPTeELT3KarGdqaa8ZUcitEhaYEkdu4aWuuek2mu7hMo9Uj",
  "key22": "3BrQ5YYHACS94vaCEWb29R9wieUiX12Wwswahi6TMEtnpWC8g3khD4rH4isCY7HuktF9CnZ7iboV6P3p2TpPxR85",
  "key23": "3SRkkWYJ2wQt2diYfxxfoUs8xmdQntGz4WjAutCE6ZjVX62mGMqhNxMQH9Y5CrqW1kB3cwiNuh6s918uoR8CK862",
  "key24": "22NxrXPSxeK2JePAS7tkX3CBnuykPQTjQ5JBpfjtppaCCdvKn2tLjQRA8ehFV6mH6jpQzxnQcobnJg583pBiGkL6",
  "key25": "3hd8hbYLT9GcUqwcm78UTNzZnSY7JagbV8Fmc8SeQo5r5KcvEbBppUvJquTujjA9WZTTgesZbD1tLkTTDEXw6UmT",
  "key26": "4EdtLB6oQYNqUFRyoqA2Udi8VXCHxUrY2hAdbeYbHSz1BzY4RgGSc5oJhY3sPwvmzmTnbbA2Ser2YE73GPbyKLi1",
  "key27": "4t4Mu74iCXnGU5cKKmvTz1LEEohtAmvskWVjmv31ws969BWny9vJ3MN8rnQx3drD2dpM3qPXJQ3rDQUM4PV6duG7",
  "key28": "2URbGxMP2MhmheNPVHNMAmJDrJCFzfKv8snngkbMkCHBtTsCtAhL5gNFPoGk8BcNcdExoB3rH14ouGeyGkQURhP5",
  "key29": "4FkcpApRZ6RKgEpbyB8Htwc7RN93YXP1z7GQAscnn3wwBgNSSHFWkQTx3rtqkQWUGrF7bPXWgXt9oKGzHdjM4inA",
  "key30": "3KCaCHgWNqchA8tJSDoMpa3DvYGD3wDXwjNotBQZLb3Vntuig7aJa3vbKmQAiUC1f3ojYV9diQACmRuzKjeq1HVY",
  "key31": "5BDZ4rnVoCkLmZHrT4Ga145bkRKwmU21oRJsshQnQqAmcEdFVKq2M22nKkvriXSq998Sx42CdwKEYfzkcvEGw3QJ",
  "key32": "41RRiLymJUMhRhP4ZXRkK9buAdqMbT9vjJgYmDWYhMFnzmJFe7cjN4ecBMgmTEK8L3gnmGbHvHxvk9Pw7XX2SpsZ",
  "key33": "34GNNFcGCrEoL2z151JqKMMj3FLqWhEogZbeujgjuKf1PnvrTBjVjn6xyGYvC7QkyLoMcL9DcY2PTD5kUWmqbUB2",
  "key34": "3gYgdeT876uGfPNxEGYAYR23c2ZjDwG2jj9eyPB9AuqP4sovWd9STbgbH6Cj29KtxCdHmTeUF4EHoigB7qCDJmk",
  "key35": "5is21EUEGCSgDbkYke55SkEJuQMe62jD7WMVrS6WJHDU7CQimUzzGcFNuyHoDPT5auAHQLuYeFyeyFWQLUFLduEh",
  "key36": "6dutnsEjQHKWqqrfykZqUVJnLLYQ1EqS4DeAZmVCyHzQDUdzxbj5atvZDW5H3V1SKwk3yyitpH2P6XizxubsRNw",
  "key37": "2GCca4xTeQ7mVVDPcRELkEAXQNrZcnKr981ehicxfGzkcrEbUquuVsdogNedJMGo75BcxcjVxbG8GKV5iKcHU5jU",
  "key38": "3JAdFvtEBpKRuBGxsNrWTvN2mWeTcVf8SW6B9j5cHaS8T985iFSKM49pt6aD7181zEcpeCJnLyLU9Q3prxjVPtPb",
  "key39": "5SQLrN1aSgtHwEiY5jGbsibZ4Rgp522EPnFmoLYds9i3hdnsPiEtqCbJJkL2NjQVhKxvtWFHWi6vMet5E5hcupPd",
  "key40": "5uKj7xL9dWFjA4oRHcNEkiNa8LxDbefcBUBu3wiNtsPLp3wrJy5nADymiAvJ6MBaL5KBiZHhAJtdKt4DXdgPkQBp"
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
