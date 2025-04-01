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
    "FA5Q2PxV4Fsk7yt6PAqe32oWkjcz1WSDmU9nh2na1KkZid38ho9ZdD6cFHJMXn8G4KHxr4PNCYw7EAZjrki6EJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YaSUvs7L1SXgUyeSKSbLgsyRURhM75YTsrwb1meWCvKwN47dQiQWFqf5EF28UeXujUn6t2JJSxncVSCXKgego7d",
  "key1": "3eqaqAyK3T2ygbCuFvhRCjowLzLX9JhWaZhZgiH33jjLKKDzdFSEw4sbcx8x2C4eRu1Me8vUeTXtTmmQneJkJD4n",
  "key2": "4BHejEjiE6UamtbXXPWi5DAS8sJBEPDmDPXat62sNzGLd8J7nwmpYJ53G8xkvpfgRZ3CLJ2Wtz2bPzhZh3iZa8Vv",
  "key3": "DdcsS5AfEXE4uYosVodHbwTQYXXb77PvWraozcnRUyPzxBnavNXT4GU1f96QLp7pACXX41tdX6Q8QkispPDyQJM",
  "key4": "5NhparW2nWtWekffceKK7F59Lx92AoXMfjzfkqLjvRVTfdtsLdQVM2ZTRDggppQnWk7fqcefitwD8QM4G3dPZAkk",
  "key5": "39kY7jQDfvU6E4pJ8NEEaRCaA2HJWCrtirmaPyMXzrmdvkzzkrbbRAD9aBYF3WuKDqVuuoB6QjuckW9AtL6knmGf",
  "key6": "4md3JekuJrVHYnPKF7TDosFVGjR9Jxzqq7zF9J2exVQTEvbYSUyKmE5o1hne9sKKmz1pntZF8yYxPgm8y8tivaSX",
  "key7": "4ErvwvHpMhvBfz1ZquUCmHooofPNG4dusrjEnJAbv3kctQ6qbeLHpci3i2aBfYQnUWoirvXkep1FiV2bhCx5QKeW",
  "key8": "3Ct5QeVL4XSkbQT4UWU4BDWbAMC9tfo6S9x3CESSixzZfe5whrEtfhRnZjxDZdBrrRCR241w3Foj5HGdqpDSMcKA",
  "key9": "2rS1wKsRCJ76juUCfVovvmBRvvJ2ujdwpqYKNDYvRe2ZeaZFw5JTW6oJpsrGZ1sKPiGRkU8WeN9rNZZYbCv4LQqv",
  "key10": "5i8ztveqRvPUUqT1RCLEFjxTrSsuWwdu95qx1qRNubpE6imHM6AjyqxH9iBco4XCwGfQjZuT2dBU8a6Kuczwh3Hk",
  "key11": "646XDQyCDaowXDDD8pRLpTWyQpY2dAEpfF6y7QAnZ4q742o39Fs273KVXFEpxdxMBcMFKPE2GcwZAkoBfosowHH9",
  "key12": "4tD8xZDUCrz9Tz4xUyUg7T8neTtkDaoNucvNwrqbVaCpLKwcbRMqLCX6JHGrEWxvNaeStFMS9KHAYzn6HhnBXuEZ",
  "key13": "2jdPmZHFKG9cYPm46vyfWWmPD2N1midvGTu3BJxnMufYFT26qXpehEtc52FXqsdundZJE39GwEwk1BSqZi5yfcZj",
  "key14": "3pRPZd32km7hqk6gW6P7oTctJbktSLpUNi5ZtT7Epwoi1MxaW1jj3shy3r15zaACN3NoEBrL6ryXMAqdqwMYAX2a",
  "key15": "TeuYntDcz7F6ZTSaLHeGCNK5sTqgVVudZvMbg3tfWE54h31qUKwNa9MTo5hf6g1G62qbDXTCakfuSm5mJjqr936",
  "key16": "4a4KNcLq6fJLCaqj3xGVE89mEuSG9ZcmkD3ZSSK98dewLdnLq7xpYiwtm4eZVxoh2C85jwLqToCyG9Y3iuGfDSyY",
  "key17": "4DTqD1iAG4Vrehi3s6zdS7aZTLEKjkmGi6pCCAHYYGtjN1TwWGUe5Eb2S9TdSAAtBD5aBzBkT8b9h4mrHBpq1kid",
  "key18": "2G5oRfMjUNiWe5rGWyTqgqGtXVc788bqJvzTVCk8fEbXCGSX8vZeFBK2BFeEijRmqccV8Kt1s1JpxHMmrbPDMDVf",
  "key19": "48JpaCYfpZGuGpkRyxNiYpQUDzncCfoapCs7VutB9efnAC7rPx3nbGZs25QB9Lt91bRuYGsw8EEUwTRxw7QkRotG",
  "key20": "5oqZtHJYDuN29dTM13wpa8YuoGsGpPwR4uNfZ5u234JeeAjG1HcHtrkc7MMKhw1otiXGv32gTFk6nfgdSHFV7XVV",
  "key21": "3kMFxVzFcDwdz3eUdFyXH8yqg6fkFsFfDRUEdQ4Fgva62qP73Huh5ysQEj73Pvcr5XWL6UhhSpHNTqpbCc4x3o6R",
  "key22": "azCfKXfRopxzrcea5LooQYBEpQfVboE9YokKowiJsQj9ZNqRDqh9n4RUTFURbVu5fWJa6wMrq6To9rXMybNTUnx",
  "key23": "3YGjwdUdcKm88a1oKcQPt1f6j818jcxJCkWyawqtK7veGbxYyvHJXbz9HBY3tpdbfTnzSAHzbw88z4Gs9sLhtGoM",
  "key24": "2DHjT59TkXCDbXWw4gdPwnbFTLXASCXzcdef6p5Ne8Gn1JqMheKcdW6XeMtrpvTCgzm78kSgcTrmLtcguaATV4JN",
  "key25": "5ovj11Hgat1gb5ssP3QGWk3PuiFNYveZc1MJ5Nro6WhBUaWNTm1ZPRjKthCZSDsE38KRsnmoMd3hc8wNLJbX3ZSF",
  "key26": "Wsc55ZduCCxxHyfJy9zoKEUiFkL1hgD52wR4ipM5aF9YTGa3Dpk9jgBcHXH8jJ2yDFzYdaS4hadJFwnoqGtuG2w",
  "key27": "3BXVSwoWLKfenTRLjVpM5M9ENUHSAKQpiVYhxuNHSCmrwxminm4aVGvcTs2Ld8vzgzCsRSh7sk6jFJPxWwvsqN45",
  "key28": "3gZFAkZuPfLhDUi7quncnq2eTsRbgVFWbegFYMN4gz3dxZc3wvKNckC7jcu9G7h26eQXvejSM1uEo7eW7ctkQ33A",
  "key29": "4Ea255cLRa2vUoZX3M5pVjghFDE5e93op7dNADc577pb13ts4gx6SvdGY4VoCLtuhxfoBZ9koRJMssFYuPafxYxQ",
  "key30": "RqbgzK6r6FkhBQsn3b5GuGQCLJwQXqCrqk6BDZtabusm8B3iPm6ViDMPUdKcdB24jSW5CQ3WM1a3dixkM2EiKRj",
  "key31": "4xTdHd4C4jFB6qDVn5RMnQg46kGC5kYohkt8fWUKKd21pCPGPpw1PxeDSBUSU2NjWf4tCREdjbSebgrAMzrRhDyC",
  "key32": "58515mB6uA2EZ23EwQEckgADV6jobc9yg761NBZdKVFhdjy1rJejGoZ8rqEovQkRhcM16Z6XUKMN32Qtnh1QARcT",
  "key33": "2pk73bNzBSbPdrzfTGGqwcBhUTtVtuDCXXeF4P6YVGS5TemFJ7ff2XNdkk5RRTujJYHQ9fWyp6BXNMeYAfZWR1hk",
  "key34": "AiSAm7yk5XU714sdwspSJwts1wV8CpyQWz3frsoTqY3Z7pEBbPxTR9uyQHQFxzjk7ZMtF5CL6JPKEMk7N5YcXxp",
  "key35": "5hBbGLGjAxPZRXAZ5ZSAkVu71TU1P4vqzWMohw4Ru4wCstmPHbyj8ysZRzo5sfAXWqQfVzNGRWMhQqybGHNHC5tM",
  "key36": "3XJrj8bXYodMSsJkuHbPzPCJd7UxNtbtzz93pg598NsvtiAv6s9gWuJNMP4njZNErsgRH1Y7hMcrvWYfDbB1C2nH",
  "key37": "uoifu9Z8NM62aoDjaEfDJuvwz96KnSE2eN41GtqAwnTFkYwMW2vw2RdyorzWYXuyxnNogovS2cPrrFWhQVUhCAP",
  "key38": "wsMrdjRvwiJL9adRo84aTdjyBsMwvKVRyDGov3UQkePHjYUUY4JCa13ezsk9B6TALDgHhN83MxZuVPaXvh4oH8D",
  "key39": "62mm8vtob8N91mkoz34JkDZzVbA29P9rod6kU1yuSo6WmbnxbReBFAtXSzKLTBch1y9EJDXKRTXkhPUrNqUExCT1",
  "key40": "2SvYwUASrpCMF1YgdzmcrXXv1UBQQZH6fCay4CjNACQvTeds9oVsrDXKaqMNizVaBsJvVDkMrWPq2aJHe4KCKHVr",
  "key41": "4Y1TKHv2B6yK7mGahc2S7xmJdPkKrxpKSxtDgnj7AhryDHqWwRYu3smjgAiJYe9q28k7PUrBroc9siTKqpPnXUpH",
  "key42": "2k69754YUhspNMdADbbDVYaLrGjaiPERvTQ5xxoXBR465zYnSEJvBhpe4gnSJeMBPPYhQvCTQ9BfQx36J5RkXG1U",
  "key43": "3cX7mRFxFddEovHfXXZjDETgd1cSMDoRjjUgdTVQVjjLyosyvCmrKN5tx55sMtiCa6ec6tigHAfc1vxBWakJeY3V",
  "key44": "43zwWbfidwyJU646H1yTxopH77QM8tN8Yd2zHSh4QxQQtfjy2rS4znMaLUXPqWYtfjkqfum6hYXzqEpG8GoZv2Eq",
  "key45": "3h5X8WjzwTHLyRV4o5QWsjVoUdtXLySLfqhCswDzpeXrkq3gYpoNNrG174EwtkrsmJ3XayFLDKYZF8qRSWAvtw56",
  "key46": "vn5xNG3HoQPDanLCvCAHYg2PqrUD7qDzZYGQAQfSPujgsvphF5A8FDx5kbFAuhEDUMCRWsJWwJTtQXURb9KCPaY"
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
