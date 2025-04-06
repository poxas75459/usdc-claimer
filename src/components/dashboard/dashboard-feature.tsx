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
    "5xbDHjkdMcoUzDNPbbJQj9u2wrGoXBFPkcoWRHSJoNSBKAamw4xe62DQZ2EHaXKN8THTnZvGN5hCDBb84gaif3DJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pbdvSFQiHCEWFSuT4t366yzKTM1XSYuHjrod7PyrzQC5Lxr7iUXRh5BWMJohYmqfgz347vYWQfMgy8jrFTkPHrV",
  "key1": "5GDuYuHDX6MJ9TgH133m7W7wzR6n4DQ9n6DKBZtpXnqF2pe8ECmAsDUdzhRN3oPhtMcbsLDFd2L43w8EQdQdge1G",
  "key2": "2ZVCBkW7qTTWsNkPHqHQ8Shh9ScnZ5y2bYyCiRWQP73cuVap4qo3YMSrE1rCsiUKszSqPKchfH1pQrAaJc8k5AHY",
  "key3": "2dEWkjLiFLT1qc4sxZs6v5NkZXhWaJkKPdLTV6TqZC8RruVXyaRaqv5BRiNvFFS16KmSsTaMkNYqTng2MotNQAZS",
  "key4": "2XxwvpjUrkhPJGmWzmKu6TKzTWfFncY8i76L7UpGK8hrL2E1vknUvqyKvX24Ko3d9UA8DQGfffzwNZ8rK1GwhXAg",
  "key5": "5QoT9vt5mMZ557KTswqU18SQjSUNBkSvYaobVNhXGeNyS8v3fToPxqQR1cuu4Qr2M2xhRVAwQrKfBJeDQDme3PzM",
  "key6": "64v8Hd8sEQHSeJgqF1gvFxeFmkHgz11jGP6Tgm6kXwDK1qz72zwkDSUsZbHWZtZxKeRPiEmVtsYyBXY3obbYX4Kn",
  "key7": "4Za4EbKC1gdC6NZsM5F7BmdRGZnQh5cidf1SGVcP3RypapbfZhg8o9nWiCqQqrNyihcWMsaTxcfDQkDRtq7gUPjJ",
  "key8": "5L3fM7uJXHznHuECuvR9A6dgERthcoHgec8yCgeqbLvPKfWFZ1PAfC9FK7JNBsdxCqUxznExcHUc7LGrvrHYTYcX",
  "key9": "3FHQ1keSdfYaTUcWRjpuabtawaLDmjeoRcSu3EA38cFaCBnRsjcXshGwPgK1wzmyYsfo69GDUHMqFU3sTr64NsXx",
  "key10": "4CHGaPQfUpTp46bShE5Q7N5HG7csArvsN4fj87otX5ANyuG582xKBJYM5rArAz23RrvNoQyV1wnS5pWpTeDRHksv",
  "key11": "42LzPZTNGp56scTvJt9RM7qWr5KVAEVPujuWBJfqybGozuANZEarZUMVGX8ts8LunGBfd38a4yYWQdcAZcgvzmXb",
  "key12": "2a9NdmmCpdG1Kw3Wmdi5Bhfq2LCeuSwktBiePWGsKq9YD9B16K1Y2vKLJydTp6WPMAsnGjwGLQRKDPT3R5SAfn2i",
  "key13": "2K6eV2e7UR7cvL2AucB8PvDfYAddyUTVFDKvRDximr8avj68GJDAksRLGC4UinmHKpLXadXPjfbfwx2iCzyxLH9W",
  "key14": "5mAmap4xTJ521H95JEU1hjkN8Nh3dLcrpLBL5nehzG5iZp1859n6R3Xse1XPrKNnGxnj2F4QaAgE2qt5cS1essQc",
  "key15": "5YmNt8sv9cSUHK5R5dTuCkK2xXVwq2SWGuNF2d5hDMfsgcYJxQhsds4PSesCzKLATQAQpg9X8Z6XNqfnSbmxMVxJ",
  "key16": "KL48zVD1Hms4ZYcaofShYJ3mULBsM4MXJgwBCq4Xt2tWraxHBsxwmsyPaj8tMXU8NPvEVnHEyjCBKNpmjpwvQti",
  "key17": "gDsasHr9rVDtNpTizY7bPeWybGTTThdeC6oH6qMBDXVE1YKfm5nSspJ31PkLfPbLaCJfxsTdM6hq8KjsMqRZQuH",
  "key18": "54pqQ3EZuBJyxjet7fji7y1YyLq7WfyZLBbpth4eKf1SuL27nzpqqz6geoRg9pygWgcBjZwuiojZn7BYbdVoeauz",
  "key19": "3cb9ZRo67ZY9QxxBwMRCmuBcQkQ63o8kF7nf1wqByP3bZpZBFTpeywvtTYoZKN5dypMEcNXySzV6Uh73Xi93CXxh",
  "key20": "7crK9VXXaCPbdMVqnQM7TNUMxMSUgx86D7i2kmARLk4ZS9owumTkuhYesJYVsYvjBkaEgipbcAKGa14BqFvAjmu",
  "key21": "3N3HjiEr1zEfMafY4c5DQ571LZ1mUqvxvJMWiGFWfmKzZYNBJiAs4sRvNaTJp2SmcEEzgc7AaBq2U4VEWCDA1BjT",
  "key22": "5KWgNXtGEaGKnvvM1vEhh5cqmHfwtvvh6AvK2eLGhj3jmEsjud1Arcciub8v5bcqnHp9Eihee1h9o3kG5HGodbey",
  "key23": "2qfDYp2fTtc6qto5Dbpr5RE3diFLNrsgPDGxECUaz7CrtuuwLZAZzHAEGLSQY2cgvCpEP7Beu1TPWto3ULV4ohNY",
  "key24": "56AmmYmHJwBmwZARMEeetMDBdLQ6xj55wtJZQ2hQ2DBeGpv62fPkjsbufvsgCpAMRXjMHx3inHtUXD2TvDir8oci",
  "key25": "5Ze62b8jpybexhmCh6zsuzjgja85THQdwzPLRVvFwdBto3Lb3rFjsGgr43i7oe1Pb5vtVT6ySr1TnotbvAQCJyup",
  "key26": "5KuKjXnYEsQdWwDURptsoDVn7FaCh7fQ9mMs6nw2NaNoVzjs3SLQ65fxw45BDXZm9gh2pGWLL5oCwUyRFA81bL8L",
  "key27": "5SDwGNf1i37WS84m4YMPLuFW3bwdmWDFXNsWR77hdtVfy7KkBzLGYYBYmyQFY6BcNE47G8koD5GS5RnSU3jJ9EKj",
  "key28": "21dVVJKBQSa8qaVK7YjfG6je4QhFPTNdYVZStZmMwTiHg682usfg9ETU3WbKF26MtYqEtJKJu9TEBcrizpG8Az3P",
  "key29": "3khvkNe4oAwg9EkpuUqiWrTMDSDhMxBPYxJYQt114qVbWN5XpqSYv4Zg1jUFZHw4iMrt7aMiXgemmLiMRbvECVV5",
  "key30": "5VcHtDZBmQiVN3GFXARdsFbD7q7Cbasm7KK12c2WTacqqqnh4trdPFyyaiwBQWuiKvQkk6v3hQrnPbAyfVZ5gS6s",
  "key31": "2tb6vqLAz9gKiZrKaMLbuyy8nhZ5d14jnYBP6895an5zRhojMb72c3Qwsmhkgr3nrE8mzN4pqdS5za1cVuyMju1Q",
  "key32": "3KydBZh6YeZB1GLPRQdntqD5oie1Z9RJJbRfuDVX9GYgqeStweryPDaWmLdN6ks39RXNcXYLd4wWMVZ613F3kgXt",
  "key33": "5JFYyEDpjrhVZaHCLTSQ5sUSpX8XWWk9ToPxZP6psQFniwYZGSjGcck9VKX4Lje6SQgqNyyavb4XPm6jowJxHSU",
  "key34": "442TDCowX4VLZ4U3vqkB2XrywgNrCpt6JcdyDonaR7sR36A7UZbSCqyE28VPxArKTRGiKR1CtJce5ypUK68tME93",
  "key35": "42NorS7jNYDyZwxrw5HtdLFQFSo4sXM5JaPPT2TGWJjN4xap5Riq8XtGpTZHhjoQrPqVZQxYGkrQX3tSMWrx8wRT",
  "key36": "46BxYFyQm7nG7MZhLir5eDWZhrt4tv9sTpKBkqzVCTiqmeZai5jFN5wJAcGzKtCReiM5H7iTAmWFgpm99t5BsyyC",
  "key37": "4amVweKiyyUyzhnDEmReQ27hdmk2cqVgjoLCF6HnP5jswcWKrowe8dGE6hTZUpYEytXkpZ8MvxbzF8FNTPAFRJzE",
  "key38": "59LvNUW1Y2sG9F3MTj1FcmqLwtWg8hMaJFcebn6EDUYtvNQC684xzZq2M4bEzwSEN9LfUV17XHo7zmcpejSvyrSG",
  "key39": "3PmPXL4tPFan6MjzD12caTKmJMR6QrWapj4CydqFGkT1bDf7TZFB999uv4PQa9endJxvGMs4tNtDDdKtydLMvohf",
  "key40": "2J1pph8MgUPpwmigqQiT42uf4bi5MZzoESLzaF26Vf1Pc9b3oUFjJAVz8JgCEu6is1mYkRR44LrzaBzhzkZd1Ytq",
  "key41": "4bfGKypwDAh7Sk7rE3Z5w7GMqxguY3xgNENqQvL1aQPTGHStiy6NnpanHm88tbJvUERSM7N844h2Me7ZADwKgpiq",
  "key42": "HMrWs4GjFLfosMdG5LozFVF42r2S5Vhd68d6jvP2NnadmXVhKE7LP2GPEdD58u29LY78fKgrZH2K12ogNnGQE1V",
  "key43": "3SqCrprodY1PRCFsLcGCgtzez4XjHMqwHBbbaU7uHrSBdCjY6wtDT4C4NWzAvwKf1ve1rid4S7xh2AS3mBT9eEFN",
  "key44": "3ZMsiep8Q2LZnfhVzhq25apGsGxGw3VK2BPDnuh3xdWQYwcKpEYCyXc6G4EKCEia5qegfs4FZ2CNAjyg4hrK8mYG"
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
