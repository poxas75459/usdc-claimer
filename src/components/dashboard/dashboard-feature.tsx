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
    "2Ug8S8cbyxdv74uMP4GNQkV8TKDpqwAKnQBHQk1oTML1rLzpMnYiXr5JfMiEPyYFMRaq24sWFjQGGFLJgF1vkZ2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yma25CyCeRekVYdu6hKVupSGjK9vAT9aNiH7ytUYW1KxyNRCmdeuzM8n7PiATPUdY9ZjSsVyGRF2mz4reBEzpeD",
  "key1": "JHZNJojuFphaie9bRyFkphdJYmnjvhTJwVtrdK1HHRcoe5itME5oKHpiLoyuMhomGyPzQ6djrtzxjNwZPQDx6cg",
  "key2": "2KNxondySRnP8Mv2FrVymFUDLjmRheuxHkRNJ19NAc6mmDPFC3Ti4J9n4857AGyjZjGuGueCefNeWwDAH9qrKViQ",
  "key3": "2joZ4gnvnrau8s461MWNgBsChCty3id5L4rwTy3mXxFuMu3xepBmP4A3q2MyAnGaeSuRnawEeXQbJh4C5qAowDxe",
  "key4": "33Kj1eVSLq9uFr3ricRrCXmGDe7RumdHqJnVRfFWXXndof5KLfL6iAJStDVU3EW5K6DCrmdv9VMcE3GBjPyrNJEJ",
  "key5": "28LjpbSnPAZ9zSnvi6kb6DEwPd4yGKX5Vh22gifVC9VqavDckajFB6d73eU9uDNJoG174oMDBNe2REwE7S1WfXBa",
  "key6": "3UTyomqsxBurShts7yBr6hMgKykaeeZZYaBGZ5GzeBwaYzNjHeokVjRFRcDH4tt6j29LEbPuVUu3oHeGSQKAwCr4",
  "key7": "4uR6FKHtHhjw6opLLyzeQBzMFhVUwS167oHfsKP9vx6fGt7U9aVDDGGKiDr5CdyzTA8FtRC6pMMAcu8QBhYdRyhs",
  "key8": "WEf9B4JcdyXEYw5UTdK84V79RcL8iPfktrodehSHcy8VFMVcfbY8xx2s8zh8NcqbMUgXP7Yb5RVa8Ca8Gkbb5R2",
  "key9": "4MTQJcT1kNFYXDYVjm3bVw9zYLZZWDUCQhUwR9AQ1rRD3tNXfhKw9GuUFAaV57ap1WMSAR7Sr7iHWN7rroJx3nkN",
  "key10": "61ucxDuDvJHRFhNAvN7sfJHskPKzrq98axqPYSRApd6HxH7ivfC8mWVnSaHMwtLkZBUsV2btXWcivC4tUHimF74n",
  "key11": "2bfDdsu8aiqvmG19rFKZLS4gzQTsCyAN92dqpAF2hZt6ATsd1wBTWo4MfGXMN4QRkD1nEStJudfxK2XSc45r7Jsj",
  "key12": "qMVBPuTv91bM9zsk5P9oe76EBjNm4oVuRXBFX7RjeMZWugiKUap9jhaoowxjsijgDR8sSQFfZNtj69YytcUTrkB",
  "key13": "XGhz4EnDT18NUPscw9oa2yaHkoffiESMtxN49sD5rRyfjWSauqBMjeiyikSZV8WcGozDiS9sDWxSCaqbMrD64Za",
  "key14": "3YpF1caNrpQLP7g6UDqjQeegcq3N8WXjXxjHMLMfEGKr4ZFTAxcd7FC1humirDdr9YB47kxX7WQVW75BCjJrBThS",
  "key15": "35xCKiCPP8qkYW6pcKJRvU68cSPoASrNvJgGYMr5FU9GjtqwXKCYVQDqBUszCYbHrmpkRWgdxyPdahqQYcBDR3H5",
  "key16": "38r6vugXCssQ2QpkpGkaw8iPA2q31RhJ8AWiVmZ7tS5RchspVmAi1jHG3BCc4m5UGHCgfLCtmXXpjZoUBSyn5R8M",
  "key17": "3iw2jqU9bWiZtmaCp9pyWqbeLwHvUCwfJAC5c9nFGj9HMKaJvqwQyZjjeUKGSH3qidEGaWdZK2TQG7xZpK6yMsih",
  "key18": "2VwpEbNEKMJaMijAtoVZtcUGXGirn8B2YuY1DVanqe6FPVBEhkoKTcf6bZzN1VVd65GqchWyYsy3eyVkwr2YTf7E",
  "key19": "B1khGeQwTYMPi8o9wLPMxw74q99HLC2o9eAxC1WUQjuMQcr85ZhdJsoF5hM4ghC4w6D9ydjobHkw6n3BE1ZmhPb",
  "key20": "2bpkwbgXyy6TR39gkQQbb2CqDTNsxHVPz1q5Px3FrU6UA1jLErD8hkgLZ5m5j6U4CncxBvqCdUiV3hCcmdGiXAtA",
  "key21": "x32zJzV3Zhg2C4RzuJ2YXUQdkQkFpiMWQqiLfTijAR8KyFLdg5b4JegjYumchS4i98Q8SiTHHnvi2S4LUmtEQ5T",
  "key22": "44o4cLcjrGMXx3jrTo3vVuEtcQLHftkzeL9Z7LM9fkKNL8vXDLgSeExAD1nzwJmvziSGg8hVTF6s6TVGdwPDDU4c",
  "key23": "4ejPUkZzMCXvqMX5ppHZ2xw9Eo2yQnu7Wu6mgTM6HiJnvHtQQDZ9FdQY29nXygW3W3yVVXDX1HL4FkQ56oLwiLHX",
  "key24": "5eGTumEr3w2c7BaahnDnD2RK1GjkiuQ94AJ7SwBHJc6bzgMo2aMazwdPAMAMsAY3yhhRtb9EiB5HkA1NW9uWcDd4",
  "key25": "4oYVcvR2wd1Tg5TTcywiqhSv4Hwywes4ZEz3HAMYsP8ZCfiC5EBgGBS3L8yHqUNXHdH9Kxd2zpmpuHc15rauNQDA",
  "key26": "YMpnAfVpt1ftKgV3FbGZCurBMzewhAhRELTimKjsKsecbE2pugh4NqRkG4zgt6DT54b8XxU4g5dabALShFaiH4G",
  "key27": "4wJxGe5hEgDStUiGuupyirCaaq2QyJX5FVxgn9kBHbckDLZKUr3a4MtXT46cJh79RvV384qA3G2VvRPgVeRxgCQf",
  "key28": "3aunWvfek23ss9w4JzAA9oafvBnnR6QL65hP9E6Jf8ci9haqWpb5TgBrDynKwCP3AvoGrFXiJnQYcmniyeMUvr5h",
  "key29": "4SGv6hZdWqYBFNK5WJeRmdBXsb4NpNDnhqR2CnHi5eLLja4K995YaF2RfbuvcVFphHwjcyPCnN8hiBRMoUsGvwPN",
  "key30": "4iyp6DXdQTZAmua3jbzPRVqqDtbTqWtechJRH1ZCJqJLD2n7RwN4T3dM4GdNt1eGUSdXmLUp3AJBsjnhyKSEAd1t",
  "key31": "4esUDePSdkU8qwY9x5hZgoXQhyzjK93T3Wg1Rp9vwRa1VtLN3DbkgCYscdC2Kvxqmqjwgng5XeCz2pgdbXUpK9Ci",
  "key32": "nr52pharuujtKEu36YbUYDvFvyjKwxghVsDWgmGDowLRteMUGQPKdbNiJG5ey5f2HGfusMbSEKQzzqLSyjrvw2f",
  "key33": "5skB1LAiFyqCxDxiNcD1eXQCxB5Scaewv1CRHC4iXWLzSKZL3Vm5T2uipGuUMS6ManLiJo19ovDmFpVZtgNejYGL",
  "key34": "hhy7WMZPDKdUF46fDSyNWPde6KmmSErdsZw9TtEwzGrLnjUjCGzp6Bm1o2Uyro3YrTXk3iMj5y4Ac54JNRmTS5j",
  "key35": "29h9FmvMMZRicDiyyCbEhE31VdTqA1ajEiqBSaeLJzmVYj6ybmEdQAjZ9uBs8ixXpdAa5ocW8ia7SeB2Q4m5S4MU",
  "key36": "2ppY54ibLeZZryq7neYDRNVK4h1r26uMemXmMK5aw465HbbgRz45ATmEmB9BPo8kFMYD3xEjernHo44jNifdYyFs",
  "key37": "3D2Bdq29CBsCwR8KgqmKJGwjDpV5CKrWJmLCQ5R2721LjGsXQ5mkGSSAxu5DziDH9qBLqZgnrvsrs6n7JFiFyR8J",
  "key38": "3EVC7HdTh4D7wUNmcvX24GkgCrttHrx72cVNg7pfBFSanyu3P7jQ5HzirTKVp8A4i5By4Umnbt3S2ptSnTqwWDEL",
  "key39": "5EtVJ2kn2xgeLBxmoE9oqtGwfcUmpox7YC4Qj2iGshH5h3kN6ZQTKLQoSPLz3yzhGTZqVRNimueZz7F9PygZyzTG",
  "key40": "5owCSEM2aHGPYqVJd7xWofDVdpTtKHsyHc9ScPRFNtLk2m1rSD8qr1NENK5rpDWCKo6oMdKrXeExwL1nvUpYkWoK",
  "key41": "56LcyLXkneffTk4exx8MDVomVLrwTMy2fHzMtX9aP22XKxBijxtSsJ8BUG5cdpZTd5trbPVdsNQcPNyYEowG4BxH",
  "key42": "GpoyKfLJE8EG158VqFcwE3UUEx7r63mmem1yh1QQHiA3HCqU6Pq3HvyNYqA8cPtyE8NcyP7dieR7S5iUdPosc4E",
  "key43": "5AJW5ZYqfkuNUTHXNk9AnuuHZgHDJgmMyiDJx2qf3dFGisBWDTyrYZAQxNc7yGDVFgFrXox4hmSFrHQgE6JVXJ5n",
  "key44": "W7wS3r9te3JWCBHjNnTgn28UJ3NNCGkGJRv9iGynWL8jkqfRFT5Hza1g1ztoJcKCTnwhRyxbZ4iRwgijNf1YNrN",
  "key45": "5Rtqq5eNnTpAPLmeX3ModaMkqRbtmG6LpruN8Dm9nPVo9CpghWosasXDJMcM1M1neLGzmTpxNbkmQA63G5dVV1kt",
  "key46": "rP1swtZEwQp27QqvhAHcho5oHx25YvbBVixdSQPqkTrRHRBaAduw8YCaEUeRr4U23pyWrURnetMqUzbWVX7RjWV",
  "key47": "4hsExPFxbtcXswDFDNE3j4CK1HBVkRdZfF8uuWm6tjJiqdGi6WzWPsDYEBhrUJDuUVcGuQ49yFUCWutK9HzZwxuk",
  "key48": "4dTE2PFsiRBcprH4XRmc2sXaGPJSb2iUJFhGeWRoKLY6grZRDGVc8jh1xQtkdfSjG7LKTPMHZS37oPF9PRSZ6XA9"
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
