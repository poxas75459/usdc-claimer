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
    "4LiDSrg9CKdwNrnsHQq7AAixPmZk6vbdjL2XmbF3HGcd6NBn1Bb5AKsRkNDEV3nVoQrKwJvGva1zrEFSLKEUc7eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xGp6BZBAsP8rmPDzQ25vk7uG4rhdNsHAVps6ommBd19Z4v8SB95beDhjNBhUzDvg2yyZ1XtpiFEdZkXC3jCCRUk",
  "key1": "5XWpJvN3x4VdCnkzhGR2vvowEseWcf7MX3t1HU5kKbQcETGY73wnk8zgwbKNr3pPjwjbh3uWrNv9RhW7ykDs4f3D",
  "key2": "bz5QV3b6YzTHYAocrcEc3YvWeDXvEnP7qanc1yiB9AobhCJYyduijyNBzwAvyPRGuxbFBBZVdcfNPs5zEwpMd5A",
  "key3": "2FyHAb574E8WN1ki1N1g8YAELigRHZsGaJXF88TSzzLiuKumNfm9BgfwuFBS19rFYFADZkXGzbmJa8Jo6kYSyCQt",
  "key4": "3jrexoLbWqAiMzXK4vCxzAnn3vK6eh6QU9uTvUZv1hWuGeVLoZKNXzmnL7wSCtRyECN9GdmuPjDVEZoaRzEZujQ7",
  "key5": "5kut3MPBRnJpUSrtfFxS3xFH2rWudJUCvzdLDZAnWoiDMsdC4VmsyuHKTtC8uu5H57dwDMeLgu9pfrDuyJpctyst",
  "key6": "3JGN84AeMft91eiCpYToLpvPtrdH2wFEqL5Ezzwm3ntYL6X8nYSJZ1KXftiKGtUbURm2pY5A55mQcFJH6bXNj9bH",
  "key7": "62NK7eH6xMcVYyJFYaRPnLQnsVmKnx8Ne1B1TfeTGGTUGDFVr9J1vDcR5DnCZc9KXYZNN8FhHMWvFyqf3RYPepSq",
  "key8": "5yzY3DKJzGNQ5VuxhD3fjQitSSAoyN57vruRH6JFWArXjQLv3HEq2b2xxCszyHqoJy94RNZcdXq6ZkXsoXStmBMz",
  "key9": "5DMKnRX8dCwYzJ5d794A21rqJXAFC8KJWpenRsg2gKGiWosvTaHMb4i7UmED3HGHxWsuaQCtcZQ84sysDh9HnRc5",
  "key10": "5Fn2g6pqojzTbiwQoYQZLbbRpZeLeoorFMLGFXVf4jvyqvoSXj6dKWzsbdB46cDHv8SWBNidBnqLmv72XwwecyHD",
  "key11": "2axtjVuHpA4t8aoLFsdFDqn6aPuuU5FT4QXtfXW6mPPRQXsAAJPVpTzCiUP7U3udnweqrvw883rWN3pzbtKRuz9d",
  "key12": "3cDxrVNjhVXY5jiZsFPSF7jSbgRPRN2Dg4AqfkwhQ9MaTZw5RLD6aHqNJU9YGEHq9o2HuqVkeMKStB5b7AA8FmZn",
  "key13": "3w1oudFERAb74x63tyw3pjf6teqXQytEA9Mj9otWxC8F9d5PyWhoQtH7BeqXGDW2Z9wuxU73FMcUnJ1h5N7huq4q",
  "key14": "3ioDgqvAY71Dmbm9k6DuViMKwdXyBziMt5ssqWfhwDLu1FfwKSDv2bqQbs6UGZC7xXfftBYfyPDWGwbGZZxnX3Hi",
  "key15": "5Nr6zmVwrbjC48BAgRbFAGCRKjjpA8x31HS3GQLK1wz217NjcHBXQJcSAjxqTuoeC2Pana3xVUdSNKY56pcwsbvt",
  "key16": "KNwxmo824oRraQgs83EwuzYwMCK8yvHsHK4m9asuG6jnSzvVnz7YoEAo2tBR11krmukNpAP7kNsT5eqXU4gs8k9",
  "key17": "5FJYWoHvSE1ABzPw11WSeY6d7f4otoi7uKfNDbFer3r2JxFiXL564W9cgvrvQvCNtZyqqDnnviVd8YY5LQuD49ZC",
  "key18": "2juKekHS8ZjqXmzisDxUswKobDC7tebs3iJEsUjEZDA1HvxsYP2fp6DYmNiGf3omKNvt3RvCpxMQtFPvXha4Lp7j",
  "key19": "3ZyZvp1MWYgN74mUrfyWN8NbL1kEujTLzNDgJ2dffv6aFe4U4kHxkrVewyPCpWGxzng8tyTr1v3PVmtP3pFLLv51",
  "key20": "2kmAk7xYWKDMdbz7hyTDMJLH4Xt35jhg9u8769N81wF3wSeVBq4uyFkoCMtDMACiF55wKsRjfw9se2BeGKWLhNn5",
  "key21": "gsqvRjfAZo1o2g1bnoMZkGKNdSwYwi5K1YPXSePnYQdVaTFUYRqucJN5KmHkue5jGTRHAK63ZjKLWQvsgzbtnFj",
  "key22": "3RJEjKpZTTMm2hf5NGxY2ybQ7AoDFTdNsNMBm12GKkdg4oB1Q6D85QQeeYtXAZky3eyf86RKwZ839jT8AvGSABPm",
  "key23": "26cZnMQWye2avt8GdXkguGRJNvmB6HWqmusTaMk7AAJJ7c8A2kGxMvTKA69yFXcQCXfudxyWAUqTyiNC6JzRCWfT",
  "key24": "2yFxH81vZ8x6HkgJvPCdFHLLDXJ8FHqVENFcGghf9DgAZPTaaCwXaVFk5KDudeMb7KiFUt6DhH2caes3854QRveQ",
  "key25": "4ZjvaUE2D7JosHVDUmNUVKz14eKzsyXuQr385cz2BUfzP2vqSNxZLtVGW8Krs3u5JvxTWW12NaLgeaSF5RkzQiKq",
  "key26": "5oiPxHr1HEMGyeCHkUPjCH7Z2xBkd58VhRaYPakB8VE3u4S8qXnqonFnyYRfxx2bFaai84iGuFzxgwQW7c7X5W7Y",
  "key27": "Y9XaEvPzW578FzRNW1pMSWe6Jj8iTQ1Xen8Dia4w3jqkkpwnHBjySXGKfazjqRtkDUGP2WcV12JQWbkotZq4wvs",
  "key28": "3T57bGGkvT9WU8e8cv3wRdowPihtiwk9neADfQdkq868Yc8jcKHwYgYKHTPrVqBztaqa1jskuuyVq8X6sha2951e",
  "key29": "5ZX8Sd6nZossPuvEdz8mUAqGSiprTD6MipmnnH415JWjRzN3qiCDoCczgnhct5K6aa9NjSiRZ4qQ7DGW6cPhu9Vv",
  "key30": "5i3um44RFTxFBoKwuVwnECARwuQfsKHupgwA2MciFRoMM3DYoEtgsvbratTgHE8Xz4sEt6vTvDtrcqpYtLwyLNZS",
  "key31": "2WKRwSNGqY98JXWAHRnJN6xsrusRGpjDnT4Jieh3nSgHTjDpPrVJATrLZF2LquGF6rsHx4Ddh9aCuEcE5PCt7CdG",
  "key32": "2KbEycky2cpccefmfNS9h8kHfJ77c5mh7TXbJDpkjBLTmP6uYThoYTP5YDadEPSFfAJqqThXeCSQudsxNgnAELnW",
  "key33": "4dpz4s8rC3R8Haey6kTAg8eu8YbReacMcd1ETf3mpUHbAcuse2vYD4onz3a1nDgvfQ5fVNjL7vjgNB2odDwaeCGm",
  "key34": "5fZrMCSYgR6qYLJt7GABfy4bsjsQeuVG6gqEsnK7JAd84CtiFeTsD8tSWHhDMQ7nj8SzddsWiMN2nZrtQKqe21au",
  "key35": "3sMUXUBoeuwtdmgBBn9kiozyiWk6QhBTg9qh4oTmfuC85dTqMLsHBvcT4Tz98B9AoFWfzvjdcRRDocEnBifYdSy3",
  "key36": "5asze2ntkzxixEtXyPm1UVpBQbt4CNecaVDmQbHvrGRbt2XQSj2ApqtEdBQR4enHnYEGSXJDPaL4y6wPBqKePUhN",
  "key37": "ACoaq3PW65FZW6mbWwVppBA2dX3q5Hj7MKCnaTY1gHMxtnCus9ktPAQQvAQKyCp8CAbYeo1ubR74aaxPnbsczFX",
  "key38": "2AaZsnt7xQYAKaJzt8MHj1btoR7n9hDbTRuzULhJBNP5SMJnGW3aSUztA6KdEAaQJUHZ6E3jcu9dSSW2FK5ryNg2",
  "key39": "CRXyYWCW3HMuLtFDAVaeL3kPxGR1SNYaHj9pGKiWDFGqAMGcZbsCxDhK86cNDHqwPds4hHPAzhmPawDRkXCCbK5",
  "key40": "3xVxpbRdHEzWNPiEw4AWhSdKfoZwCkgyBxccoymNeQoXe8fWDJ3BHALBmhx5fNDxXgaHN4gAizGCBVJT9ABjkWsN",
  "key41": "4FvypNA91ocAde9nXb5SJQaKEuqPn7uVY8DK9Efk61NpUNysogeMAw2CbrqXggCBFf9EK7WjSTh6Lv2gLcz5w9F6",
  "key42": "42NAvj11FBUbs6b6899f8T5s4VwuGE7sx7BB8Rq5JpYYZxRgg2AQAvKcrGBJBspLTXFChjUxPBF7udA8RVRsfixw",
  "key43": "5k9q98rM8KNfprf95a2LmD8HzErNqAifS6cuTnA1huwHswTS7QcCL7uPXzQumoxwtPLteKP37483G11xn2ELXR6x",
  "key44": "31CrMssDLgPVbEVbtU89qoEgkKN9ymPjAvJACjNZRxYHHffntygFncfg2evyYnwqzHd9QXWtmmYgSqtU6W7XUy7A",
  "key45": "2HezANXPt6s9CF9jLMKtwcic5jXJ9yu928jk9oMrD5ZWYu1CuZmFpJneDUbspZhzpZnLeoV3GUANeyxawUE3p9gb",
  "key46": "28BoHW2aCedLcHP4Goa25UM8riRPWwTVRYaJnUwV7mSvdbJibaC8z1zyqbmUtaqUTLGqDmMLYi5Hvv2x2Apo4mLs",
  "key47": "5pC5LN7YYM8sYbMfc2VjLoqizTdKrAsAm5V5zq7zT9ug2EELG5wRjVUNWvRM8MjUVPEgwzKdLRNvAkXkEvUXbuHg",
  "key48": "21ECzwY8no8pKBuqDD83ztkyXi7fbVkF6heqxYQFC89Pn15GxeRreDD2NKMT8udLKZ3TAvWG4EnoJkxXqWCoAzCb"
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
