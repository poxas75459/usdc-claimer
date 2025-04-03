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
    "366YD1qUinAUoByhiQ6YBTsf8Yc363ENYRJiaRAHP5SRQaBeYne9UrxyBqef51FcQTZaFJEz9cNGn79AZpX2f1hR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rrSmRhJ58nkeDryhKkx85Enr3YtY6co1SaChZMnnMmc9kaXG5ZwARB3S9RPMhjYWo9y4cDvhgYbkHY9ELQL482V",
  "key1": "35NuambkS4xcmXjTttuDR6wy3erZaXMLJMKHJcMc2SNf9W1LmWwRxa6R4CyURP5MWEhEBgNbVcnK6pK6A24G79gc",
  "key2": "5doA5QSF4bzbXEMVmbRsi4uK7p71irRZqoNFE4aQydn5vsDa2ytfqWHiiChF1QKjXQkQJwaLntJSdoqeLni2c5NX",
  "key3": "4E1YyaoYvZQcdt4gXLCwL2VMFSobr9binE9YdbVMTc7G7FBuHVdHfq19gkwFazdmiQiFv7LQ68JBNQRYEWEVC5hp",
  "key4": "5KTk61dVZZPMpTsjNaE97LUReAYWqr6UrXNkUeNVQuKNy24J3iVPizZee8pbbW85detoCUxUsjm7mv83wZZ8CMAH",
  "key5": "e6FG2nrcU6jDCyFEL9x6iPqhMmf8Vxi2L79Nfa3g1fe5hiaY9kG2zzDF3v2NF3PgZfvNpxVSP5ACTW4LTxfkCAv",
  "key6": "3nuwg1vss7JHNkj9mVv4V6SM58mb1i46ekebTNkfcVfN5oWdJMjYrqgmUJYjfUeiRz1vaNsAjdHxP6gSkCe4z8mb",
  "key7": "5ZPKymKJftCxp5p32r9knoAVHw9CK9FTVEkxYo8i17ZeLCRUUPLjUnTmZLfA2nBTxAZofzPQ1yoW422rsFQfq1dB",
  "key8": "Tw8WYh8qs2Cag14qUQaN7JKi55gKEPSPYd9L15KRzsvwA9j3ZeQX8xVeFfVss1LTPwrZFpBSfeBhGh3mzH3JZEi",
  "key9": "481mA8xboLWcxDUtW5mVC8YzXNLRe7pZWxbet1PSqWvFmWvW6ZM1Wr6TJUHSqp2jijwxGpg5g4XtHkXVArwnxtfj",
  "key10": "8VngFus7VHq7cUje6ocnRbbA1hQaS6qsWgAvMpBTkCriQsDhhPykAZZg4hZA9Efqdvk8Phr8EoNZyaQ42bGifmp",
  "key11": "QAmipZYqDyMYdrREwNNcNTfisauabTiE3iYi4LWsGYw7w1eoKL8kH4amvQ7CoUwoRKGAp5WYoh4e6PMuz4qKyy7",
  "key12": "3LNJY6BKtSLiTRQPG8PJEqJjQd41aVirU4a6ubR4ABfXFUowGw6VgxBDPFzcgKrpjbvPQzFh4HA3CdQk1fysWjNM",
  "key13": "5P5KtVULJpCvXEZRDmoNENsGbRcK8Z6gtYXGRz4KPGqhELzrWZRbAQPBGxgYcxRittVSCRZFJtAgGgX29rm4LSpU",
  "key14": "3eZbia8odCsNUPCPga5VZ6AbDZkgRBJuuzXWvEGojrEzsCU8cW5JZXckmYr46nvEtKnV5wNEApjvQrP6Q3ps3j5G",
  "key15": "3i9Ebj4upYyRxqerHmkdkq7o7UZB6mPMcjXCnXDjWhaW4AdHtKNSukHkqQUiKM9EDMGNLhCLCUdrpaeyFRPQ748A",
  "key16": "3WK5jPzmc4dDhzZZXuqi5JhgYt1zkvKh2HkzDwh15aZaNNDngfCtcFYAzMWULYmEYa69XegFN1cqLzuSF7Std4Dn",
  "key17": "4FC1GPdScRmY5tB5daZ38qGQ9y4ffhJZVd6rBmbLBMitV3ZBuCNm9FhAedkG2DCM5xBaZMg6QtaekZ6nkbSkmJms",
  "key18": "BTmkLZxoxrGaxxih7HB2u8tJuPHj8ot2Y1cECSktR5S6pZiY9c3xzADKShtF9bzQ7VWWzyLY1KhQZMfn1up7Eom",
  "key19": "5DFoeAEuYY9SibzznMPEjABnFq8p6u4WRUzVrtRQuSEw1NrPMyfW6C5C3dU5Wo5vAG8xXoZNW6Jh7bsheBMWeTSa",
  "key20": "ABUgM6XQjLuwWjmtKss1YnTCCh1qn4Ffb1VyBgHAyA7JrpAQPBf7e2TpfnyRZRPiWYHxmfu1Wws1qcL4drP1fSa",
  "key21": "4vFNG47esfBRiznobo3MNUXnVWZ1kDr2ejeDp4KoWFRtKviPNn65q5vxeFLupYnqfMJ59GMcSsf5p5oJS5QuFD7w",
  "key22": "26roTdF5TCFdkk2wwmqpUcmGQ4KFtd1cvX7utSBTVTAqA2w2xtYdEqToUDec1KrRXiM4owpNAxzPvQXRoLMufFWq",
  "key23": "3BxADit6oZJCfVpZydvPm1Ywz7P6BkDQNVwrNGc7rwe8mp8fXw2mexR9LeMaAYTTUGAYg1WUbyEXqpqoimnSGWY7",
  "key24": "41b4XdbD8Aukr1BsHNDTN95D3ArsGsh8Afz5Y75SJpT7V6d6NMHBYoyHNePoPjT92Pcg7mmRCWzXK68RA9XvgWvC",
  "key25": "2KM8poU4b2De9JwhgXNwxBADUCANiwdg36vVo1pGyVs7VyuM6jM2CRbaJnwW5fooHBczZthQ3ve34GQrsXECQfaA",
  "key26": "UjZYnuxkYgWbrVo3T5JQcjtgpaTRrisa1NTLDZx2fjradXdykexpqp332yXsSUasFRmJPY5ec8D8TwjcSTAEZ9Q",
  "key27": "2Sy3NdSYU3oBXuUXVsiGyn9QNt5B21Y2bWCsEM7R4KLvbgFUVqqhTu4qojUUfYHeWo5WYxc42JMRwUEPqssQSYNB",
  "key28": "42J21UTdWXZeu6ryUegfCATqAFYRynu7szu7EfLAaoMgTssDTjFuEZXVamyvTAxrYFbG8G5tjWx3CN3sjqzzhugL",
  "key29": "q65iGWGStzFFy5ndK1Gg45AJQBv9tHFQQgYbuoohKCZkqGYbGfyuphV2e2zTryWUQUz7eDTs1hAV99vKxYr7QvS",
  "key30": "4US8Sn5fqBMCN8WotsLBHYZDMPFZZXZ7RXpj3CDv685p7FRbJjFUS5TZ1Se9KJN3quz9fvWPb2r4k5pW9JCXWxip",
  "key31": "44uGXTFVMFtzoy46qsN8YuvSfm9ogJEXUL17YpYsGS61dnQ4JT89dS5tnJFYYJam2fexe5cibgDzY3itvSQLvK3",
  "key32": "5dWzBrvokxq3XXFnM88hn3encXuFUHETvGUurwMc1He6CVdBqYTNUJBVk2fbeJwD2NVSsgtgS2MqFcbF3gVB9AZS",
  "key33": "4UAFCP57py2ZqEueKodeUj7njN7WUnLRonY3A96PnDQB7duoMetQe811L6ZHLYcfj4Cr4Y98DTKtjdCPpHCw9UaV",
  "key34": "SegnmWoZtz1zpGydySqMZ2oKNJ2FwuZW2SUAjah2QLawbuChAqtENjjoVszkrbKcbfHeaF8wi4SUL7i3ZcGBoNw",
  "key35": "26JU3L4VnFzHLUwNc2fLnFy1dkaFXwVjuo5BAx1d6fJgsGkzDwmR2cHPg1rqoHAwkvg5YH7VUggLNstv8pPM3n1V",
  "key36": "4LRrujVgEwnB9JmSDdJuGAAyqN7YHFSsy6sH6md5MUwj76iBruygV7NDqvMXjdLoQV1Zuo3R5LgeNBdkjRunVMfQ",
  "key37": "2wAkiwJshW5Uga8TtpEttgk4Xte6m2JFYCmoy1SUBDYYmYR8oAeCkdwMaN8DvgU4VnFzE1UEHtZFyhPmX6L5bcbG",
  "key38": "2qv52ej5ZVjut85A6PBgAgQydDCKR8jxYc9Ww4NBzRd5iSNWopwk3945R65ZpjGJiZTTpqxPaqPieXmKgzwWakw8",
  "key39": "5WRfXtKEaW32fezmisrWby8EQBun4D67TpXezKD3fpNpoHp5tjHNCnka6XGwz5ke4PeD9qWf1SyPkthXqioCuEvf",
  "key40": "4RHD6BaZGvFBW2XWRghBhaY5NzyiDdryj4mwZ7ovRxKWTttthWaYBYwS8LxGHNvqJ87xyXdp9z95eBuoKJ4Nf48B",
  "key41": "KNgMDQEGhguaFAtwqBnpKx7cXyPoSXjneVRpWVVXSUTGE7BvsHH2ptGWEaumV6rXqMbPFZhyvWK2vmGNazoDH4p",
  "key42": "2PmjPQvdXXEJKqRmK3FSAjPqPUiWF1GTTMdT6a1FFsSrzyq6kvweLdra8VWHivvx5UKMQoeUULX6JRydhjLBcxZf",
  "key43": "3F1TZmmXKuswiRJERTynDUqXwyowq8gz8zYL2XqkcshD1vLqjBBShcsMufzbe2KsXuEsqCUX7QvsChsUq4T7y2b8",
  "key44": "2TH49zzz3cEejYobvxv7KJPy8v8Gssvd2Gn6ThkzzNQ53NUwH8NGErsCnbXJ84QNJ7WFo8TuZsRAC4Y7kKp2XoCT",
  "key45": "23ogKUm2z9kDZLeCtMhCZrwU7qqzqoCrECnYvT64dJce9r9G5NKJFmorpEqcyGKe2A2ZWA1PY9UT91KdxZ2RiZhP",
  "key46": "32w8ecZMdjKRXEDBSpcZrCZDAHi34MiRYy7Btbi25TrFTF7fjdJqVj9WBH1M4PzEkjnr7gvMDgU2yybGjz5nwnua"
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
