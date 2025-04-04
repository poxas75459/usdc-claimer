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
    "4ArZDMmjyMsuHAWV1MaJmxYN6x8vmMhudiH584gZDh6tAGBUTpKscAASoKtZo3HZrNy1PwpRfKXfS4tucSGM5SkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gmhdre2F53zGp9HvqhvoHpTLr9AnYnF57X5yp18gnxqRfm71a7mSbfkCnpXKQGF4hXwzYZ3varGy1vb4wQmpi9W",
  "key1": "4fX9HGwaQVfB8tCSkJ9o7g58FSKrhQgaU19iyiAqwfmoDtdN3ikTv3obh61btVsgxypM3U9qAo8eSn1b2fVBTxY8",
  "key2": "6sTau59jMyeEnzgJWniEM9ENCKV9i48ngGdDuoESEn5ZnmLGi28kDRTsk2Ep3yx7e4aMsEFoMbwcAYWSaf4Vmtc",
  "key3": "WWeHd6doPqngH7ZhmkP595Y2xmCdmoXYSfekjvpu24qzxMGiAvxpPvr6KSv4mC2mYzWttRmEpmLVWYuzm3gzEKh",
  "key4": "4fZ7ks7jZUDWriqK95JHFE3jsjTEWs7Qitpqgyw5FeVg8BfY8F7LDZWv7K4kcx9KBqkXv2wjjqZrWAEdgffbFZrJ",
  "key5": "2HFrR8RXPuL8jKwWqCy7cZLRRMBxBrrwYNBEdrCr4jPQoiAy4nKE45Pc6rYYec7nEgKRofPaS9FwyYQv1gQa1FAf",
  "key6": "2szyJfZvnRS5bdVdab5XGy2N5jWukWjtJR9haUCt42aqAjR4RmdpuDp7xuQh6UbsJUK7FwecaYMo6g7kv6XFXVdD",
  "key7": "3g6QTmJqr3fbEWGYutn88z4aD11FVBHrrTJeYdv8ig4S6jGAVchi9gnKH8TQ8eYWU3LhHTPjJDbJ1H2L4f1WyKrw",
  "key8": "5xok9gqxGQX9PMk8WwbTFxcUncNSLntWyPu919TkrnAaPdusghH2PSbW5T8P8hPfYZEMhNJJK2Nb4LRULjYpvFJb",
  "key9": "4WAVGK5y1XiKa3jscm3WP1Qxq14Vqrkct332q1LkqMKMUWAoHN9uLY6Cw7fzBDsxNyxddcpsMhCGmm69G5JswgAi",
  "key10": "32NysEyaLhdT5nhpFAXfpHL8SxakfGpenLfu58UiiPyA1izGRRyLYCoTbzQThfLGLjfwFvLQuhropVjNj5JSGJ2D",
  "key11": "5RXJT1Qcudd1Vqn2GJb7na3PSREUQTsYT1QkXrUuRhWLvegYRciBM8QYKou5EeNjg5EwGqU1c5TMXzdS9bRMfuvY",
  "key12": "2y4MfFi3ubHRZv2VGTD3kiwpVxvKYvtNRUCn2mV5p6uURggYBbN4iCZWda638Yg2cN6ubRxhN618zysP5Ei46Y88",
  "key13": "2shUQ6MEEdzc8GQVqLgbUsQYnSiPT1Na7wdjMJrdf5pnxGK4XUJg4ssC8dhkJZHWQRKoewYD85BTyukiKTVJybSs",
  "key14": "PBe7sXo3ti9CeCATKAN6eeJZ12ph2HXyt1aDhhQar7ergPgdgR8EE2s8xrnB9yG6URVXwvCCu9TmXd1f84ADwXE",
  "key15": "3tuDrYk4MQzfnkTL1LajLJZ854AH3Q5tVUT3AremUnsXziibRCTnsfnkp8QMDZbV3eaLuNac7GTXmZuc3nXzvM7Y",
  "key16": "2MZTUrWatGmhi5hjH6KDrP22bzgqj5LgRdeQ6Vhdm2YNhDXywBjXjEvip3PtnCW3rUVVFt6L7WSG7XLmfZL88mJP",
  "key17": "5VMfNEiyK6u9hQ28t8MA8vK2Eze3ey6vwmu9eH7QTb3mCq43DhuKFPZhcwEaC7M3UgeE3gFJq4wU2b6Ckjfiu1f1",
  "key18": "4HPR35w3z4WKZSjkQAwtKbUB4ipRVgY4mBcH7EEvXmLfdzL3DYy9HzyCfPdL5utr2wF54wdmJGjcAkLbUmoG1xC1",
  "key19": "Lj9VLSMALNh4GSDmbivAqMhQgWobK4fgKS4sDc1rJ4fjT5h9FUfwPkGzqqwQeHhEtjPi1nhs1PtG1M657tHtFMD",
  "key20": "4BSCAR28CHe1DgJm4F3cpHVjhGrQ5capYNiNbnfXCD4ubGioecwbDFcuzUVDQxjJApjWSD4GHCS7b3AEyB9e9sLV",
  "key21": "2BLpQrpmqzWVksmZVH4XmugoELtJm6YX9rLvrBvoESi4g4HEvR2JbyuXdxfhCb1XvFga3yCdqurgoPsyJPSzrRs6",
  "key22": "4m7KhdJahyxSMdeGBsbG1VdR196eQzq4SkavVXyj7NS88U3H2jiG5CCh41jfPnG1BeH7pZPkjuNQoVqYGmGo6trA",
  "key23": "9SvX61qcMgarRV8862hhcUauak3bVG4k2rb2vdtUzFHfNmjxewCDEfVyQGcvThzp91FToPr6vzsoFquni9hSnTD",
  "key24": "3fBMQ8QSxffxxSvkKburSbFiWYSNoPibQg1unjuoCUXQbEW5uCCqpR3oynG389LuRn9TCk4KEYnsngR7o1Mbh3Vr",
  "key25": "2dua99BJU71wKYy6eWHVWMpdXn5Y7ed34UYMZWt1XrpJuEYS6ef2i1mZMyjJCyZWfHjGgNhH8H4wYtYy9zvKTrTT",
  "key26": "4iWHCowTH4yBFgZgap1uMBrid4yxj71p3jJPGpbjwbXzK6WT7QtrMWivEVgZSPAhetkHmetfyfP8dHTWCAZid6EW",
  "key27": "4iFmZZocVGafDpDEbCiRSCaHLAhRse11xvC7Ls572aEvVDrMW46Sd8popESnL6u3JjVhP33BQ7z7ZXXXfmAQ8MiJ",
  "key28": "dsgQDeryKjNXUN5uZwHruv3DWSeeSV1qVDW3seugRecmCNy2VHJbL8LSmiUkQQVR1yYQBcSbAKjr1uHTgakBz8E",
  "key29": "4PGNPUWKUuAyuvrbVSW5PiKLnCX4cgcY3dEABuoWQx7dfT9ziA17NKS4b2r9boyWQEsYr9V3emmzcuYTTAcEu6Vg",
  "key30": "P6QKyuk147Rx5bx7WksEy33zybjCB4GoGh2oJ3Q6f8T45KeVniWv7F88ZwNbZiB2CBBFuRR6cjBQLBpLeWtSgJb",
  "key31": "4us1v19XWiMmVoAuE6UTj5nkkBjhsv16AnN7cn8MbQqb4xXDUuFVtDUPMbV5gdXjuSLZJmByYBGmiMsHs7x74URj",
  "key32": "2xBBBQu6rag4w6tJjXVRZyjrEsf9QhUECVpL94x1gAZE6PLXJeyASWQ5mSJ9MgQN6DAY8N4PLyzDiE78P3t6ffFF"
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
