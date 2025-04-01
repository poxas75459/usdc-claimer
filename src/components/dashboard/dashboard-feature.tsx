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
    "5wvoEcAiUtiKfDoEkzs8JBWhA8TjeCFktxdtqa3jZR2sedjHgFtAg8PbgfH7zBziA9kbb7wHqwfBwwYyjdNSonee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F7Mo57HX43jAXortSYhjMDaWc8GwZ2139jJfyf2qS95wG6Ui33RbFmx7VARCm1EPNnU6Qr3HTSNtUsNpLvivS5k",
  "key1": "3bhEojTXf54M6WrADrb6jCoCq4GbYNhfsQgpixaoQwRzCHph3dot94iJoo75ubrPurrC223w3tcKJ7hccArfwy5F",
  "key2": "SbdEoa5N1kFwfpsRm1pmegprBF9Y29cgp6JCWGLSNsYkf9oHdCYugRN8kW19Rbfy4EmuJimaYEL6a64uhy28oY4",
  "key3": "3VfZJxtozuTC1fbjDPh9kuojVeQ2SkCLkdQRtmpM7NUeYdFkX5yASfyjaGk699t78JXwiZEnzHkoNBG4zaF5VSap",
  "key4": "4dqxtCQhc6GQQrZE2rrjV3mrnxxjxroiJg9tubXCGHpbwBgCgkK226HqTRE9eEM8QeGXiPGEti3Hsv5JzxwvNCxZ",
  "key5": "4GbQnYpWkjfA8nWz8nKLFKfq8zZRrHZNrX4RbLUV7vtWBN6VP9keYCfPCxRmGek9x1uBWPWHHEYu1jVk93znuDcs",
  "key6": "2rkcoSUKCyLZ1qfmQZDXJy8KQyv8q1D6YAJegPcAeMZcbd2fftYJSS7qU2y1qgEmzb4stT2oEG5Sbi8m1QF72p5o",
  "key7": "4J2JGdazZyqBW6mHHuygRZgFyQGVZCKfKTmp5iQsn72zNiuV2k6CT3s5Whfnxo76CuAK1aZXxuY9rawhxeNbX4sc",
  "key8": "3SrrrvRmas2kmRxiiH45jAVfpzfPLU8GccM2t12p8heJHimJ4VMKjzvBphNs49y1Q8VPNAnkzSG4yyYovxxzSyBr",
  "key9": "568CzoXZpYNB5cJEvBv1ZPJVKGVtxZGqM88anBkJz8XQYhVYBTpSnEWPzVGcrKyE4r4t2bE8BEJaKkqfKFURWHc5",
  "key10": "KMtDnJuWDKqfy4xa3xMx33XnU3UUtiznn7hQNxFUPkbLQdn4gEQeJw5PorxwJ8oY1f84iYSuVgpRumuEPi2j4E7",
  "key11": "33u2cyjBoibYkmwzKxoNRYWL25hWq4rBXgeUWNDt2LQjaSwqCvd7KnTJv4iE4X4jgssJ2X8njjsxAj8WLGLMTeog",
  "key12": "2xvEzMiPmcmHZ7EGHYmYWb4sregHhXFGY6YCLcrYBk1TGErJpD1seD935hAnvaHvfBahrvk3Bs9oP9BMHWjacHa5",
  "key13": "5YSRT5bhPSw84uBLq4R5HvzGqZ5Ba4tgo9WUKjc7DhPTWUx4rRpPAButVEbKY1JsaE5EHSBPGRhUjTYmSRTaMvS8",
  "key14": "U3hPtKW9Y3urKNiWKvmWn69SWaMtWCgNk8a85tyThej5yXRrPU6wK4JPeTWMrrpHg8Bd4HfRZLcq2A75bwETW19",
  "key15": "2ySEEpsnTfhLoXoKTHJRHuNfn7p8CKEUQmSLe3qTVh5CjxRLivoZekrRSGxnWZjwq8CYegWSxcULmCCiwEU7c351",
  "key16": "4Q2jHh9qM6yztYcuccdtCvyr5xXeU5ob1fxz1wmfE6ujvaTcTF5MzT9QSqvLiVgBHd1Jv6FoR118ZsDQAWuVzrEE",
  "key17": "5p4J4cPJrKeVqXNMxAoq13YKkyxWXUxrqBKp3MAeQizqjQ8oTn1gDrwmgjj5tPyd7Hd4oxzxGtSDAjtQGnLdrYZd",
  "key18": "FHddsdBdTquv9L84MxY74WtHNSmqTcRvWMsFd3TNwjQ1CypAKt8jqrwwvL6BpYbnRuhkfUUUkpSS2prd3KgQgfp",
  "key19": "3U1FEZkfTkGsxR6iyrFm1PXmG7QnP6b2Aj7ZcwbUHFekBMQoBDeDmKWXZF3tH8fnUfRuxTU2KytLepocTZePrqkB",
  "key20": "4Xuc8XTsjpBErrUYNV5nycER29fTo939CvEdXxgzEf86dX1dou6zsZ2DJkXc4znYwS4gU7TF9Htpy62gEkH5LDeS",
  "key21": "2DrMMh1Upq5N2a4FDZZRbb2u4bss4hVj5yqNsvTqcfSpJb5gD9hZBoWxYFmkVDFWUieZCimDNQGZMdibED6LRKLC",
  "key22": "5Dax1jGbCDspd4aTBwkzBd41iAP1DxjRL8gvHb6gF6oxzYTo7Qt3iFraTN971ZSkfhWnuw9DFjTBu72Yr1aunrcv",
  "key23": "2vD1AkZjBgQhs8Le67YvSr8bQ83tD8LizccC5ETX2v7uZT2f5cQkch8VSCgUTXowwSn2VYSrGTAYqzvRV7QNNPJQ",
  "key24": "4YN9juY52kLehvA5bHsTqbSuBdUNqeWgfj3kbhuf5ssLjJSoCYuhSPCTNibMvW4erFypGvJ2pXJpu1wP7CvvYuiz",
  "key25": "4ndrVL8aCksBM7A6s2ZJYyXCCihwencwPdmjDoUydjivnwgvKQnkvUFMbX2f343jY6mrTg4ztVHsYuWB4RWaDfjT",
  "key26": "3sgM8ixCe2a1oWyai6teDfUdJnjTDXJPoYZeoyHTYvuii39qRcKTXJdeEqyZTbzxYyF9b1k2x1QuPo4BvATPffFv",
  "key27": "3uEMmHUYCX2NCG5nQ8mAiDmJsZ7CXNoFmhyZB3szbFDa1wgrHZXbxK8WG2dQ96gh1fvaiAToLpT29aLNZKEQ9swZ",
  "key28": "2vYRjrixDuhkJLDHNtNSdXAT5eDnqpwNswtYNZy5hf6FagPqdFJTnFTdhXYWEr3GxMur6QWarRkcYmFNH3mUHuSB",
  "key29": "4bQtAYbkh58mZD7kZoh8TsqKbvzfNRyzUTyvgZziUjYMF5Zi5eD4uXrVHK6xWTprz739ryyfKC26YJM3veJhxfqJ",
  "key30": "22W6tUumf5mEU3SMnr3HxActZZbMXFi8AC3BU8i7tzmetwJjpuP85twaPq59AxsQa9LcZCADaQ3SzNqQDTqYBaJH",
  "key31": "59vLmefZJjkyH5SQTBHYXdyiqdFjxJUAiPugF7R6M1TBWoMG7ygfwwhsSWKB2mmtxktgswcuXfm5KYfdrasrhoRN",
  "key32": "3xgMZ9ZY2nVoxBczW7oHfdzir9x3uobo7FNPfNQG6yhfzrWovo7BUjFxtHRA3E82JoMhgRxAqweyv8Fs1zxTFBFY"
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
