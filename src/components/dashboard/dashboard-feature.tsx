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
    "39WMu3W2oY4udBdXGq8fvedsu6ayE9FxiZbRKdgTnEYq9gdn4rDKCz6w7kcY5S3S29LHfZFzaFP1Kt3bRsQ61HNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XAtG6qo2BWv18ZUZkuDzBHTUXv2UgsVfY4LDyftNAwXQ4FUpjqenDeFPQoP2h8PAEGTmo7Z1PKWzSLgbgmbjKr5",
  "key1": "AqaRTqmePYDiQMjbW1wCcQMLX7K4d8rAWZHTZWm5VQfL3gA99UteYp7rQmthfwRsHEZMd4ZLdfSAZ9N1KLQT1ET",
  "key2": "3yv59tkMHkwKrDAYcsFCAYuhQPV9YAZabdnZCpjPxhjYMjWFw3Vy99MYhBpLMMSRqeZkGDrqVGszzaa9XS12hfwj",
  "key3": "31GuPhrDckwqSR78FiB91XGAeD7E4vh8uAxgiEMk6SzeF327C3ygnHGTHuraKnAgqLcxReS9MdPiD8npHMt7iNd4",
  "key4": "25UjNbo3kZSjpdhvhWgASP1MpXqbUAnMXqHZDC4CWjt2Q6j8DFuxWQWTX72JkSnXA5NCJedCST8oJQetnsheFMTZ",
  "key5": "2AfhX2RnV9LpV6LWippobgT1HXEAqnv2xxpzMWajKNqNNNnWbw53b25e8UKigAz8ejNBJc5KsrY73F8q6RXdTokn",
  "key6": "37wF59diXJ8QrdsL2Uy3N5YSpxaZdH1Y1poGhbvHSkZ4gneQxZ1q2zsFfc9jcJSkuaSQbXeapZLbn2qHWBLmZHKD",
  "key7": "McYfRLWhs2Phy5gJFg1kiih3XnQi4N4FUKVHLGj4wkhHRhmLeRDDuegoD9XYiq7cv6QkvJuKabgLMQo8CVLQJcf",
  "key8": "5WX2Kng1ZTFBxgmLfTNMctMRj8RnwM1NsRFoeHirTDUhFX87tserj2J2jHwXPmD3E4J4Mr6wuXZda8ssLhbYRpF3",
  "key9": "MSBBkUqPdHGCrRfPLC7zjZtbFLUeqMnArvy2kt6RCJRsFEPQgf2x5N3uxGAaMq7ARWdyXF4sJyJxGZsRC9aaibZ",
  "key10": "KzNEeF2aeTBR5hqiAuT1BRZjjH1MHSwCXPVpgdj7Rv7NVj8WZmNEyfcfFypk8t7WZttpAnbwrc6wLCZLFp3Uemr",
  "key11": "4afTRV2rNFgiXad3ZU9dFa4Y73sdppxKJbS31TJ94HK53SHPTgHWUZnhhcc31tJhvpzthP6Yv4UhbAAz9nnwMWQH",
  "key12": "2MzfndvzyJzpinuadL5gVHaQtetNpZrtBHcSgPCuGMz2ZsKKRFSs4XgFoSpepQqtVXWcToz26emnYHtStkFMEz5J",
  "key13": "4GQRsPNFccbsaU1cWntbcaar4y54GH44tHtE1V6ytiLkv3Ms67gjgmPtvSY7N2LQbKHnVzjyXk96b7zQmD6bweCu",
  "key14": "49bNhE6RGxgozJU9BFEr22LSTHSrLQxbSg5jwatmYg42qxuPUvfKvDVZnbKy5GHNuLZVUeNwiF88GWh9TAGAuutG",
  "key15": "2GBbLmE9rnrp8kiLcF5rQgvgdKNh4ZGXrMMHU8n16jtEYnwJH4YQbQd8sqwi4fdmB7pXV4Q4dVN6FvyV48cfJRno",
  "key16": "23Bfmp2VsQj9ppTFAeS1yPRT7GxRQAV9zruV994BF7gMujJZUTxXJCAZ7eof8cW6JuyNjb3JPhL7kRqJCoJ5R6yV",
  "key17": "7x6HJBK9dXbrHs5NnqeYaBhiVXEMXTCzv2SL2QLFBKMNPpHrciR4VJoBx4rfj4BoRszsFX8ZMNgKJN2mvnjwzqQ",
  "key18": "toSFj1wYd3m9AYekkpfi4TfgxRxF1iX42nJTExvTMnkNjawB36o7wbeynQZLRrabnyt8RFNMa2eWTf1pcbF7ewr",
  "key19": "WWbeN8G3p9r8g8hBTyd6MgHG1eGDjdWKuDCYwNo5UZpSo7xJCt4JMaaMtoGXhpGk39mYuJV8TwZ1ynkUts5FZn6",
  "key20": "5p1vRhxw2c5YiH24KzYLTYTbo975JLrdptyjeuPq8wTChuqnYwYqvwm3f4pnAUiw1A7Qq3293zQgi8L7jh4aKjWe",
  "key21": "4Fduyam274FMSyrPeLCZhrFYh9PqhxbKks1ACq3zp7ctuTwGncJgajD59LhDMBZco4VGsjVgLBMahcS86AgGzptU",
  "key22": "2y7RmA2ZYs7MiVnjEQw8iro83Rs8G36NyVFi9pCZqN8gvj1Dwy3MfDyZNsDbccdgypsWCC3C31V8wH6Vp5TSqQk8",
  "key23": "3Uzdnsc8865egrLnuTmLyyYcmfjPrcT2cHdvb76JR75qGHBtkHWxBmk5qcnQKtMWBd8hNM9FF6GTJFtTxcgDQ8FA",
  "key24": "okdLVd5PYG88UoxkaTeFCTayKAY5L7kvUK9dnjVrGUk6zPJV8obmxKqAmoPAbPpe1Kk6wb8d3BThatc2uQ2zyAG",
  "key25": "c7WoQeW9zERcLC7vhKLvcYuZbAoM6muanvzjpx79CQed3Nu3Qm9xwVPX1sjYbEmJqt6TN9e1iC6crHk1v1bTTwm",
  "key26": "5ajz9UnwQUUHsnnNCJhYPPXC3HDjiGQnSbjtXHr4TJ4oC2D9YgWpMtLccmnebYnPMzLxSEbaGTb19Rsj8Xkun8VW",
  "key27": "5gNXauNiPav1sb9JC6ZgJh97mMofgNYqq3uNM8moaVc3aXCdcSdm5opAT5CCDsy1NwdfV8u8sc8bwxeiVu3BjP5x",
  "key28": "4kdT5Cj7cXRJz25tik44ay8Kf4CqmToPC3eryfcaJYuo1CFsLyxggAHBaKjTq7nwPRdGH1asGA5u9QtKrFxRxS1D",
  "key29": "GEMMh49fB3JLXSmh4UAn75J5izaUYDYKM6ZzQWCxmbngoqH7Nk7piGqzMENrBnsyohMNQZCgrJvZHskdRgNQBbh",
  "key30": "2WHuKSUVekb5s58Jqf282UVh4rr2ce4MPvryXUD3igoCbpiyCbfwmbWaXr8AFFN76aEEEKzec9ktsZJsLR76wEzs",
  "key31": "y1UBnJE36no2BVa6HBVSXWDfCRgTVt1WcXx6a3tG2CpQJD8yaCpc69UkfgcHxsygASnC445ZnKJHCu5pXm49WgB",
  "key32": "61KjFmy4fsysg4KqFzuqnf4LjBNLGbSc8z3CYHk5EnzDcxUPXBhT1adCNdZxXiEYJuYwiKsArxd4TMbJzoNTpJ3z",
  "key33": "voiYF5Z7fWhM3DiTxTTzk8bYDaujmtGrVeHGjb8EiQ8GE6kWFApSnB1cYTcwyBMJXuLAeF6XcjyqYCazos9DBRV",
  "key34": "2VmwarSYu2ood11GChXS2dzE1rKik8hGhzFkKMSKbJoL5DrHvg6nT1TuyHBjsb7DcgWG68KfV52Rg2GyqAYquaeA",
  "key35": "4ejJ8SY8B773Dpo3eEhz7XkSDTZVonDny4gfdScJv2sFER9sDZpyMN3dXY1sjf2sEwTwGhowFdpFgxq1DMiEPYo3",
  "key36": "SaaCLB1gyTH3wXwUbvPWTctKx114NKFSw26GxtV7DqT61CoeezzdiQssijfPP4hY4XsDDPVnCeVLHBQPrhDzKhu",
  "key37": "4dUrZj2RGPnkHFkfHcMPCZYkRZseHsjasyr1mQYsZowjJM7SmtRSDm9YrPeXmaxPrXv7RqYnisP9puJxUQ5vHenw",
  "key38": "3punoJaqbyTgyRmuP1qKqTPzMNj7hK4VQDAbY4yYhiuiryMUTDiGZ9FXuqxNaoNdHf1vWyGmPecnF4YFNfnpEugS",
  "key39": "3dsoKXGrin7i11CWZuf2mU9jbRwRidxjHiXj2qxPRsBSZxjr2NZJzH3suS8rHpsGYyjeoEkSn37F7BJ2Phh9qMoU",
  "key40": "5m5HAURSWxUgDkY8gm27tLwKfmmkRTc3WoXpdZJNGB5eotaVJ9TFEw1donJ1na7rkh3Vsr8kxp2GzrWqtqASWCKV",
  "key41": "FoiDLd49Q4p4duzhUjwy6E1ncJ1wKvTtMsumz9AbQJuzjGHioEAjeXNPbPdtSNrg1CH7h7PXwFCBkZsa66Hgs1r",
  "key42": "3a85RSgyaTJ8JtQ9yhvLGWW8aMz1Ek919xPZfajJnQUqsgMRXVnmDU2xuuKkp2QZ7rhngK59g37sQ1ddhwpdkGkz"
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
