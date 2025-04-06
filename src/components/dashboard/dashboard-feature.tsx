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
    "e7ZwYZnS9tm2QjppJRJt693c8X13T6xCyEqyUYFEeMH9tMGqhHEHvGDkayiVMmwHXm6GaKEsFLAH4TcwLPmXjj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JNR5SVKfDSejYhmbLNWjuMJjruWD7waEChxJzi76BMXgitCsPKRYMGvLbFH2iU4U6dTs1oYzDDvWDKkjYzougTU",
  "key1": "4t8x6QptV1MnJpJgnNoAEyaF4RPnQMnbUSS4BvH29djmYMCvHwpbkY6c3JcEFAcxy7ZA3d6Zk7j4v5cRRxkQpdPH",
  "key2": "AdLPdQNxXFteJ1S2sk5LyWfHKKH1N7d1hQqNrQ43MBV4eVo4rxKFEmAtPjmXqoj99wcNNCUibU99v8gWKWvULdY",
  "key3": "gyDm5Pv8woQsGpAoQVhNjiGehRJQN8ufkQQGRWhrqRTgHa3FGHkx32oEV75XifA5YeHyzjVGD1wxinjZmvp8YZc",
  "key4": "5JKBwHyGMPS3a6pKy7v5bPjyp1jJgRfSyoKuGZW8aRgTPtb3QXEG7fKPURy1XskFeVsrFmwDLuFMENthb5Szp1rr",
  "key5": "2o9HWqg8DexzosEJQrayv4HUqC7nrrzpHEYJfHaeU7pN9DUJzRGxxejj239WX1Pe1XAfFpupkQduaARp2ZLYDAZn",
  "key6": "3HkpbSVtk4emJTWQ46qXoEjDhGiYkGfZLTu1fJFMMASuxigErfwyE7GbhkMhLmr7q4oLgENm1GDTJrVUCyYnNPGz",
  "key7": "4QGLpG4Pv62mTmMYZpa5eKc2uXkdQ1EnCJowNwEuWtWnsfBJKjp72twQ6w6udkci6ykRWCdJpmKvutFoBG7cdeuw",
  "key8": "2rU2C46qoFvSgg1LCySACY3y1bGVBkb2exkhh3HRKmRvoLxM5QNg8bYMPtYFU2FJYpjwPdzgpKWERe8fUPiqrgcu",
  "key9": "3rzWk3paGvPkip8x3n9qytJ63UDYaEGgRkmrLRgVxxMisc1KeJecWCsttUfcDXwE1SBX6FQnc5s7EjphM6Ntjkja",
  "key10": "oT5QbfFBZpaMyPmWLNn2Bt6mMaUu7tRcFSfUAdGLsJLfzd93ERSn9raDnrbPLCtXipXdG5JRqweEFy2zf8g94x2",
  "key11": "m3MUZ3h5ke3sYYT4vUGf8EfAyyQF2fQk4uwgiW2f2Xs9RgX1raxYzMCmNHQijQEHN2T7jjASSw31oAaBfS6bdVo",
  "key12": "4Sr7qozMrtrpW34gi3W6DFUqycu1BrLzrTLqEvAHG9aPqVenU4P4BBm1X7p2szxBwTWFMDqWt85ritHkCMNRgp9z",
  "key13": "FAv8suUjWgkSmTZguM8aCJAq4MWNu4xb9XVexYwLe7QpLBJGeeVYGMPUqjrYaNGdSGt4mjyxG4gMdSC9Qqqn18T",
  "key14": "5M8qLnKKvSFGbBWPunriDCaTPkVXvu9DCK2jk36QGPucvySkxA9DHopD1PSKCDWQZ89eGAYfvVGvespEdKkCsNTZ",
  "key15": "4qoPryKh9zbyUp1aVBgWEEofBXmYLH3gNEN6msamcRMr64HXzC5Pai85PJs4mKG7mH8cirSSfXoT8ctSCTZftiGr",
  "key16": "4oEX8i4uNKDUB8f1av4DoS5Mg78K9gYQ4DSYkpHh4UdXgiQTtuuheZraXwB7fHrKp3DzoY6bk4VoWBsm7HqPVNpm",
  "key17": "2aeUkaFgHNjevdZstZ1AG4EXoHZLFCuX4Re1N39X3rXuzEe2VRFctfiBJPUZ74CGUeTuuC6Y9spwukEYMm23w2Jv",
  "key18": "4QDfANk2jHmer5Dj4omGr5NvUPDrFnvmjvontiQX1RsPWeQ16FgU4ZSbGAZ63s5VSxS8U7McEixLwjCmU5PaRuZ3",
  "key19": "5gby9RHpmLQHEJGwDG2ra2JoPaJDcJ3saWb2rLAFJDsEHEackzWiNj7SPQ5tVCzmTob5oGLkZiKtEBCke5wvAwv5",
  "key20": "3o8WNyR5mPy5uuVDR39P7JVfqKEt9s7wYd6m5Sih4srFWpYW1kpqnySFaR91ee2bSNTcBX4ypojCpxT6h5XydqBB",
  "key21": "3zA43LaLox8Wt1Gtki3F6fsg4NwTJnzYPH934LK9dfcGSCCLPJ534P9TTbP1b5fB5mLar822QeWTTWfXBnmiF3QW",
  "key22": "VLa79KH7QnSwSWtEgheLTh1DEMe836dEPp5mVQVXU4SX8uEBdtSshoa3AU4XEwRcwVsh8yw5cw5RMEj1ZmkBmeC",
  "key23": "Gv4gVBYUQAQPPXQ1jBhr8jQvBNrSZ4qEaqvRpymczUKwo2N5m6y4e5kz6Tr4GAt6xGR5T4YLgGTX9FP8eLJQJ75",
  "key24": "4wZo5BMuiPdYMXn1RuyJf4itWfQLHVGQL6GrA1wFtrNyhBTT3AGC3N6vnY1o8ZbS44aHgts9UsJoTDvE9HFDFpHp",
  "key25": "vF6dyMLFRnrxuyYENdRofuFdtpxUsieimRoTXGdXNYZ6kAYenbd1fnLcJXCxu6nAcU7weNaSSwW7u8Hhfhd4cNB",
  "key26": "2C7cfgKzZ2qFD52B2fxzEvuhzfkhRhXRhFGE4EN2FS1qU6bsH7hxwgCDrSmV4YVGbq5QZEje6x3BEksS4fCtNtsx",
  "key27": "4kYZvHpLQZY4YSBvq1jSZUT59eJveHxXV8L3EdGcAqcanRJJsKjvCFrrf1TGyDEd1Ah7NrzPLEnNzKriJKJhRDMA",
  "key28": "2SA5co9QTwrqAsk5MsP5aRoiTf8a8GxTBJ5WhwUsNgPmdetbiWnXBVPTyCpg7TuKZXk3xDxxSLuGrys7Z44GSmmB",
  "key29": "4hdqx8hCquCMU46o6PjPLCvCcBrcwN3qeKGTXbi7nKPAL6PyYXfRJGNAfvFytANn6auZB5ndF8JpNbJetnGtvzBc"
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
