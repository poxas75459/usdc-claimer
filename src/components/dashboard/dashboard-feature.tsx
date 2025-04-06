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
    "2aTNkMSp7GX4S7oAxU3eqQ2LyeRUB3sYJcHtX7TFfdV2RHzKcDbNkHZUyo8ySTjTF5Pt74QMX1dt4L5GzXKXqo4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QoKYKGVv5dKts8kkk9g6zpbMkxDSChnLAQmnAmsnCBrzL36qYUSZGetaG1XuUQSHAdQr4YbZ8p2CexFF2xC1vgA",
  "key1": "4WNHajyQCjXttwUjwH6bZbd3R6caRG47hM39TEXTFvY6CSra5q5eNogptAQwccrAYdv1UjzhmtHcsAdFqQdMY6ef",
  "key2": "2jVYViG6QdKqXpdcDiqu61Eb3XmeP6gbXZ55AGsQ4KoFJ6GrzKSZB5naLu9StQdzsTF2griaA98k6eWnFg4DL8FF",
  "key3": "3tfXBgZfTTff4zUrXr6YSp6CENjzw627zAqJbEP9qbU1TkiEBSa8zCbiYLoG1USanzT7QknCdZEZzL5T1JfBrTaV",
  "key4": "5AtWegfXFcqjwjG23r5rqsa3Rpt3rQzAwVVEcx71x922N6WrLeNmSBxkYcD6khqbck247JPuirDfiiW2dRbBmwGs",
  "key5": "2vvgQhM6c9mjNF3hwu9KTEfgwom72rJdRNBPhf17B8nnumKAbZG9bAkQr5Cu1hrybRp6J3NYUu5W4MP4X7pCnz8x",
  "key6": "4dMBdkZPtJtfM2P3kqmmooPCEm7JtWwG3i7RHdoafuN6D7GrRce4Wc5ekyiYu27q9ryp2Tat6P6Mrx52AfWkHXSW",
  "key7": "3kXZAyrWarEztMKFEz7KSEyQhwJkFcCYji8gGfw3PUhSWNxhyJZQW35cEvxeGyRV4EtVAfELqExHndoF9M2PJAhA",
  "key8": "3kPEdKVoBzjjrEwBXpK4gja4ubDJecVVJfFmuHHCR1wsNGtm4SnzKvBZiEjaqKjaMqLpvfYbWR3eS7pe6xV72DJ",
  "key9": "35Uweg8DvtUGs5G15iB3EjYXqetnJBRVRHG2Kh6Lgs62tMmLQJPhu6yzAPFJj5Ktd6gSsksaXf3WNWs8GqpBzhgL",
  "key10": "2tZyyfpU1GJdkpbx1cax8DBz8E6aF6UD6AzC6p1jmgK8TCup6d8VaTz5xH6sAv93EoFNvJyWdY8hT2enemabcGL3",
  "key11": "MBP4dJF6kpauSjPGsv6PPkhTMU22TAmvsfBhLuWV4cS4omk6nm7FWLPY2STHab5UaPR7xNLVad8KQnzPpb5gEyR",
  "key12": "3NckLQx92MxKKhexkb8U3AgMeprJwXDR2eVA12a9DbXDJzKWZ9rnWyshR8WGKJp6ZTCG24JJZz6wt3qd8M1E7yJ9",
  "key13": "2zkG5bJtofkNuxNfbSbUbQKMq4HfC9sqjfVWn3L8T3M32kJX15BDqLq2ryrm2j9j8bjBmHBZbpUkPrKgy1HTm4y3",
  "key14": "2GJZhMuWVThBfs7FAUfoJgXnhJ57EW8CtMp8R48KgS5oEVTKZLtAJMQVzWDsyJzmMM4iGqgPfPik7GDR34KmEW99",
  "key15": "2M2d7rdEjEwvWPYXvfKqAc9uUbeSLsCNbiiZFLpNoheE1AUnt5rKeQFoxupPDMNhSmUg5BxYUf1Z7SR43j9YvhmH",
  "key16": "oM5aTf8wXoLUKEfsuLEj1nkYG4NuZj9Z3R62S8RUMKZ83KnevBrZPxuKmf9M8vz3vhG5jn2yQHHtzZXqtq9owyZ",
  "key17": "27ueuMpYdECQtkTXEbt2e46hui6BLFjQgA4QqGFWFckVqXYSFJbHemXGuFGJNGTCyGa6AfhMYnncwKWACPFBja6n",
  "key18": "3qzfs7Gc9jMUcCXNd8rKLNcqsMtVFtgw29G6BufUbhLGVEVdSZ8gktnJnEvR79dXpLASArc6bVZRFxrGRNN1j9RD",
  "key19": "3JTxVpYc2tahQxUq6oNK1r52N74dJncDdX1so5X9saheauQ3ybXkNZd9xQ8aH9fpkZYocAaccRMqyz7s965tjXCy",
  "key20": "VP4onNkLH3pNqQHNgQL8ufSJe8jPP44q5UX8hURrRZBB2DrnDjesuzxNDGhtgYUEQ6ev7E2e9tyAtBzBkjCLeid",
  "key21": "4sXvCEPxjK4wwFsT9cCZPKS8UrfUg5U2z7RKsRoXQWNAqGTD2JpNhxg2Ptvmimbmq5H4EBypL8UMcZNgLB6J9aMA",
  "key22": "7T6Ad29Yu5iAu7dJxSj42KRLVZdtvt1qSsDjwKLJdwtNbePkfoFfZs92oSg7amhvFqLiCNWJBQr2CipBkovJggX",
  "key23": "yuXStV5BJzRQ3KWxBZnoTginVLMpCRMSqDSBxPmwxuGRbAqxkeo4k2XYVZbzRp8Wf76xoH3PDrUooZfmENwDSvw",
  "key24": "29A4Pe4PQnRMFb532uu86e96F6qX4RxQ6M9TgpQ6FTgvLHp6V5MbGvonfDS8Wy7b75J7nKDZDi5FBbqSM8Smnnaf",
  "key25": "5SnzUtfjPTjLHto4AakF64Jt4zkK6CYoiGLCHxnVJhASnYcvVY82eSLG7XGKCd4MTAW8d84K4k4PYKiJeFRAnngx",
  "key26": "4J5JBF1G5nA25HBnXXeNU5LgJHFR5QF5SABHZrR7ruBG6EzpqBhWk4zKfs1XQv1hPH5A1wGBnvufMogqyKN8UEBt",
  "key27": "32M5mTCqiLcdizS2WMJeGUE4vsSsYihZNH3GoUkoTQDcHr4KQZdQiur2fBg9zD6MmSifWqNTVNWGmnYgsHfcTQbg",
  "key28": "TPusyXjsZhvwTaeW4ozP1yk8CEhq95vsER41fcX32kGnLiBZ3cYos3kBMAfkWZL7Nse9HbRdq9pmMrSiA9PsD74",
  "key29": "42o6DZhXdv7LyaaocABaPerJjRBtyyeey5PqW6766fyL5htT3AGgKFpjy5h6EJ5uj1n6ouppkdFus3yK8NcgpAJg",
  "key30": "5QHKbbBZ1xnteu1NT44nHsAAQzs9EW1Ud45nwgSfZGKkj4D3MZ1K7AJdPs5akV2zjBWjieFE74cmGVxTgMGEMCQE",
  "key31": "4PqnbJoaF4YavpiF5RgR4wyhrEu6v8GLWUPaG5iuMPbrAbYprQjiFCkKX5WHGpQhZXTySNA1TDBSuv8qLd8tcG6r",
  "key32": "2eEy1JrsXvVHPBb36P5fQDkg8PNVXbz3wRzZyYqG545zweigc9VwRNk6QzZJ342pj5qVK4NfDnsKxD3ao4nBPy8w",
  "key33": "4PNjjz1pWZyqoJYt8mJ3983AndjQcb2E4rHkFN9HSTTdypTyRRNDZS5epntbbyc2eiKVxfWnpy3AZNfDu8wTZHsg"
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
