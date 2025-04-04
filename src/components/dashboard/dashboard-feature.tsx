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
    "dTK7UrBoEAvVxHJkP9CHhJg1BysDDdHT5Tbsmn4PCHDjWY4rau89DZr63Vi7Wi7kdnWfb3g8zmnVQqeMBqwHfYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DDP7y6pQh8qaR2Bp92t8nPnvAFzxsR1CBwshYJemL3ykpeCgsNeUsMX3juULJTh6ZBTRyozRcCCyedT6yrwX84M",
  "key1": "39TfNbTXDPCfsXMDwxfLqjP5Ub1piYUKyrtjvWkTXGKpi9Fz1G9tXLqLEN4cvGb9riRcoJkmf3cm4naChfTCUcbT",
  "key2": "4RtRj7er7wswgbLobs6z5JQxbLJmRiJqyc4nnGF4HiXLd6AZLPDENABqZa4PCJerTkskc6vuTsrmnQEw6MRdPjqP",
  "key3": "TGVpykXPaUdhhvxV1rTxJMQxecQhiSydgkJmbtnq2mZRjjnZLdzN7YuMkN3Zkfqk59nubnsAFPdz3TfiStzepTw",
  "key4": "2Fwn9sCgEpdUfo3b5d3b12a1W7nDbRhrAryvPFyL9V2ucFtLaJNPdXj45dXuQpZLF4rhj9K2KLPbQMyfBrj9rHJn",
  "key5": "5yT7YwRyKtLV8qui9abRj2AKJL32aYwK4bZ8ySQAXYkyzQvF6EUro7okM34Mr6b5r7kVjfXsAWfamPwpwQp9ju1k",
  "key6": "VM3G9k7TgaV8sovXcxkpWa1LzbiiVJpXnWUYcs3MG8oYkS7XCajKgcaUMp8ga8ucS6wC1uU2XtTLx4Ytxta4v9q",
  "key7": "4tr4S9ArjLbdbgSbvTB1KPNQULGryS7DEcPuHFpqz2e2Hu1zNi3fTdcZGHUR6ji2ibBawQcpw5Awx2ZL455WZFQ3",
  "key8": "uoSTmUAHnvsUsRTEcxPh6N8sscv7eVDjzy6xUPZjnP4SG9FEMabFc79L7gh6r4MG6jEbjKxcFnxZTcjw6AmMFWF",
  "key9": "4R234uSUbYkQjV2JfkfXbv28afd4iU1gqej2WNpsbsTV97ArGihAQjNrc6GjWbK17ER5eV4Fv2tmGp3iP1qJTwk4",
  "key10": "4LE5up9ZUsz5kq8UUZTSHy6u994WskzSzMq4hGwo3tGKhcEk5ovzu4cZqjPpXwxB44GhJJxy4B9cb9V9kFn48J94",
  "key11": "4PEYrTwyatryAV9J3phNhNowmRzg63RNxkRWFtMgny3JvR9pzZvJuGkv7SrBb55xQZRbHywnSQ8p8eiGx6L9ucNZ",
  "key12": "4PRcnKAtt73dtY7ndkESzxvKjWuLeGmLsns2KyjCvbEvMZWT2jViAEKA8PFYoqc6nr9vfFX4qr9DKnCWcazKqeFP",
  "key13": "5GgNtraEwG82Ui8xiWyoyhMwtSmM6RCJUbrCM5NUmfAh3tJ5TpBHF9qGD4pRvEz5cjB6NH93wKSsGauqfPrSvjCY",
  "key14": "2X52PgTr56cSnCnhKRaqiDPACWRDSk3HQgvzjg6pW1s4a5GKnAnPeY3bd3pocqjQoB2eyzqoniy2p6XPciuJvr5A",
  "key15": "374aFS8m2eGBJgUth1JXvbja9WXPDiuAiF4tN392Eu48Eqx7T7dirkaBzGezFacEPXPdpu2XA3JXBwwdVPSkJRXC",
  "key16": "2uWEuzzphmcHbrtmYkuV3tEmtCgN7FR8eZGHdqokXZLdpqEuURiYAmedzsvBBVSrn35QQPeaSGTo4vumj2anpqX5",
  "key17": "2485s8X1sJWf77N87xW2YZNy5FkZyZqgTEHuPLc4LBohJwRfdx4zoiHcdRcQmVFrzk2H6umymL3xyisuaayJQneN",
  "key18": "2LJpqNa6eAM9RcSMKvw8hCp77YDDZeb1gSbzHGwrq3cBdHPUarUVGb1Zp68GrmHB2LJouXCWbpH7XAoFKCQRZ9Uf",
  "key19": "4jZ2ogNvJdFCjcCDj5TnsCe8MCKM5V9S7jVjpy6oRY5j2f2Y4Su838dqovmKXarFT7Xah4ktaBUnMtxJkU2nQoRM",
  "key20": "4yAxz2CGD9uuzXGWZueftWKPBhNoxf4VELqxeWemAsWoEdwuDU5NqdigzaobrACt2w3UNEcti151QLcwx1sFG4LN",
  "key21": "5h6fQnaFSYs1Xyo7hGxiZMoCXi88zK2xts97xn5cekm6cMBbRcAmV9MjRch1srvbu5YoxDnCLUfHiDXEnWJun6Kr",
  "key22": "PuF4hjqSkNoaPwzbwKkuN5xt6p11XKF4sks4c7PkM7rykWuSQmGCzA3ijEE4zobudX9QD1LJG7A5eURrtEFYk8p",
  "key23": "2mhZXjiHQYvL83CddJHME2f27wCWJX4VeiKvpUjR9SKgMpYMezJCGHgkK3QNXsz9MkofBbYJm4DAQkRwyRkmECoa",
  "key24": "2h7Vfd96vJDxaFYbPSMndYm4t3dNiwu9uZ9nwNQg9ZC753ZXGUmMvczA5f2atdSJ8ULTdp6DqQ85B8dzkPyeRH97",
  "key25": "4K6T1JjtatabbYnc4cHcdWTnnB1fZFkHkkMGNbwHwaWhRswDe7WCS9uP5xVcnuKMB8y4zHykycGcxiiC6WyKJCRY",
  "key26": "4s4hNLwfe9yisiizSFL1u9H3DfcGH33JbAihwZNvwdQCriAQeSikKeeAueK7XeZr8VvcAP8wZDU6RiFufX9QXHn5",
  "key27": "1kEqsJoVabuNTXN4SzhQQvhQpQFdgnuB5MZVzwZLobDTcJsYvAivHH1Hu8XGo4m6BNMXAfUF9Uig7ZzS62Rdttw",
  "key28": "64wWfjAcRyxRgP7soY8SjRW5EGQaW1rRTqp5f33U4xyRAhUeQcxppWMVatFzsfvokHpb8wLdhpP27bt8J9kM3rX7",
  "key29": "rH8qMfLsc6TPWeym1RKeZ6LJFLrgkRGTUz1Td2MrEWRx1FUER3JRhsRU3AJQRQUe68PDQfkLjfxK4Tt5Y3W7SHy",
  "key30": "4oKHZs9tw2Z7L8Hg7qNbQbKdtsuH98DWHXDuBuMeyZDcYjrTUuGZXnbfcwaVQk3Q3tBmhw22VzNUGAUGXBKMYro3",
  "key31": "2yHz7UEW9QnJveF1BdAv2VkawFMfSjcqcjqrjTyfkvptURBNu8zUbtxZWaiDiA32scdRB1d5LEcax1ssZ2Z6yiHr",
  "key32": "5PMpS8DVnrCKmkBjyBYjqiHV7sd6ksLCg6jgpyvfCPJsvjwDYhXy6seYEUSVyJd4yfkkS9rujkZX6XFecRVjLiLR",
  "key33": "3nHnzUATiLGYnM6mH5DtMTyCEosbRrZkeLD1gteR5ujYnw3yD44pTJeSYT3sdLpK5PM3J4omnUWHS2xwUhbt38fG",
  "key34": "29TVZPNZjktkK1zY8BTVxUpbd4SE7FHqX9ZFxVfdMawne8vXVBpdknDrUb22jr8eRF7KanZD2uLPTmyZUynTwFkD",
  "key35": "4PP6SSG1wX1ZzhDcCSemAGqXJcHwL5RYdrZScgB8ovxJeB5k4fZvGxumRV43DZkfSXFYDaBt6UePx2a4vikkfH8D",
  "key36": "3FmyVtQCBFYUE6KBxM2oKjR4MmvSbs12Vdehh4qZiQm1sJyDbxXetLAQYRpGBNWQMbz3v2MSqkyq1ACJjywgZTHv",
  "key37": "4w93gzCBwwAhhn9kRwQNMzL3Qx53aiSr6aFQAFEkbYJ6g92u9uhc7rNePeVfNRvkszqdPWysXfNJiPbiQSc8To9t",
  "key38": "5JNCeUztCVqDR93VX6MPAA66Yve5XjqaspbVnyVvreadhWGxHXn33uxHTEkxyPz5h8Gm1kHdJgDJbPEQiznCT4bi",
  "key39": "9hmm1Hj5D5XCpC8rSYtPTA9avBv2nvjQ92BNFMfFTdvW2MxSgVPjPi2rFHongK3wcZpd8RdPY6t2mkiSGzb41Rw",
  "key40": "4dkg8CKRfJSMhHcq52zZkZiWo2oqPfv6fQ6MV1QAVGVP2P4RJwpeBowwDCKf6FEAr7LqvGhEtqgcoLbiMXeXwboJ",
  "key41": "14iiQZ9iPuXHWGapMf6b9xQZeWPHTUCnf658ZoD2QrwYhqkDP41LKhHEzQSM2omdbdeK4S2LX3sSqLvjtXC5C9k",
  "key42": "5oRw6aeDP6Pifg8BgGSEQgUhsU6E8NRyGnVd6J4BzS3SV2m3WCB3jDND4fJfetTBxHNTRGvryuoC9ssg4wGW9PK7",
  "key43": "3Tjqc9ez5YPqnv5EaSkZajnDucspuAuLsa1iVoyXBrXQ8o7rrNJe9N7H3NHEBD94foVUJ1UyQGejNYuf5T6qM2AA",
  "key44": "5RB5HRDAcwH74gDEzXf9iVuNcvXzGsmRdejVioQn7Z5nTYKCBY4f5kfbgtnXtDAtdWd1MaWxWQeaP6mqdC4yHjsp",
  "key45": "3BanNYqZSPoR9SrWa9NbGQQPqnCEfeQySYugVV9jRhahR5S5X4gTZz4hprhwcfoenvEKw1EN1VJeFPLEAkqpZfYC"
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
