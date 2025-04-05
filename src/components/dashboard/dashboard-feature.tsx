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
    "uKtb4ygWDiENdDLvvaCCaJJxgocALJTmPuxcQQ4hpCL7ZcS4v9TjbmJYDaXa5zedQPi5kkzWRzUfuW2bbTpsrVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UZ9216TVwDTYCiPcwuWCP8Sqk7t6jUbgrXDq4BvXPfxT5dM7npap1q4qwusSZxJ6o3BnPpvxDqrNYP4uczAu1N2",
  "key1": "zuG5PTnk3CrUB7tuzbFUG1eS1893DGv8QA6z8BEsntNEwhsbqoxP6KksYQrgq8e4TXYQ7uu8ks82pnD32bEvxBP",
  "key2": "55q4WTCF5dKoZYKQ9MzFX1iueNgAet7TV8sjJvj84BymVu6mGm9XBHKkUjqxGe3mq4ETomMr716Zq9TNsFJNcUTq",
  "key3": "5MN3CekX6hJtwsCihhL7toozyELeenhKba6xtGcY5pQbH9wt1saCNvo9BG9mGv5QewBCs5VpximfJUHrRNbz99AC",
  "key4": "3xspJmLXu5oaXhvs1YxqEURECJ7m5kmyceRYNgucjMQS2M6G93TjUYP6muQmN7tVPD2wjgpc3CdG4UDDBhPCLXjb",
  "key5": "5qJTGtVuyZBWPmmQBheH13tzMkh82NLL46pqG2iyHgPtXruVwP8EZnJnWzThEvPyJhU2Gm8HNnWAhfKnCZfPTG9e",
  "key6": "Hi6H9b4ufhDfKDFN2FQvwgnJH3knskcz1T95VSWmo7wc4XzpPnrpJD9fbisNhuZMuR7d31Xdhm2iDCrQAApwe7a",
  "key7": "2Rfkq65tTpbb4BPFhimnYrJiMazKS6nvNCervfEeNc2u1ekJv5YKiNyRvaQyCvphSgbQrEeoXNMrBr8JhyadSufD",
  "key8": "3X93bXZ9igUsPnNhecwtpp9KFvmNZyfPFtRhp8TozmN37qW77SKNEJySjWRrXg2Zndf5nUbyCSaATYJdJnYmnLWs",
  "key9": "4eYTQz1X49onXc8TSZ7FAjE262dpLZbGmUDN6JUWQ2R2o5FwRh9rUGfftAm7rRCKAnrFcaDnjB7Rc73TR2T1sByE",
  "key10": "DtWaQs62fp52gD7obDAJGURLPs3xyr3rZ6QcPB8mosDYXmGQ6w3bcYcku5Wjhxqk6h49YdPxWoHKaQqA4S4Cb3v",
  "key11": "3vvGoLZ47zwP9GuKP8MujwNoHmgKp3c18mecvGp9JzPqytA8MwNqA48QQ8twP3qDJLxJYy3N36ywFgAus6kAVbZ4",
  "key12": "zAKBLAb5CXxDELmGErXGC4v99VttKafPaw6JE3XMkbY8jpec9ijmzzm4DLxs1mpxZNVtQRueuQTXAKcdZJv49F4",
  "key13": "5y7BGkYBmDwXMdeT3XVni94rRiH4ALVbufRWdbxJ37K5ahfUPjsQRUhM25jhbuoEmtNbg2WLjMJD3KTMcC3Lyjts",
  "key14": "2wQntBHnKLyRn1uJ9Cqdwgh7xi22mNJLmLQYh4RmS3UmmPxpnxrzCoGgZLkrvU7PF2iPCcoQ45GYR5xBTFSEXEyM",
  "key15": "4aJD2e9B7uopAf4SjsKnupRfgqLxHuybBJ7SmvfPe7pknNnd9FK8dCuMyU3pU8vxtUpQPaUdL8ftaZu2ewaV2rV2",
  "key16": "h9tDiFmapFf2uFWJWZe5dgcPejcA1VBcPrPfWQ23Vb2AhPim8gh4TV7u8VXmF93VfVSq9UUsJvg2zLmFvhUkipJ",
  "key17": "TroUJPnJVNu5xPN2Noec7A9uQy6g2jwRphcw7owncMkwgYJxBWBk5Wv6NMgupURaNxQUjTfNwigJ48S3XLh853p",
  "key18": "2SyUwLNYGNQvFPrpeSUXLcMuAoAjmEdMRdUX6yEw8Tk41FXphRqE7FACi51Ld4gEquJCBaBWpuA5miu18jWMv9p3",
  "key19": "4sidEyj3CVhNpHzWV8GJQqGvPSeCgZtMXRmBLsSsvUr2uBdt5gccvZXvv3nbP2YioJ6Pr7bQ5xaqcnmytJTJjfDc",
  "key20": "5Sa4FUnqnwDHcE32YNKmLbyYkYkKFHQoMDm8oM3WRj2Tdk8j7GwubByuNaKCmugXJ1i83ZHwNCjFo1yHS9o618gY",
  "key21": "22TfywZRpZvxxLPwtAL9LHshge6dwCogni5Go3nUnLcmsG6mfAq5UQ9dM7kyhrV4vMWesjAYeQGTC8TXsBGWKgmM",
  "key22": "gAgbATEQcdv6Z1CZrp1o5UQsEgC4VDJq8q39zDvpYddKL25xz1pr9c7EwRvTxq1Z1mpvbCtmRBEN81u6TAnMMgB",
  "key23": "44NReTD3WXF7L2UiiWHCqw4BTYoZ6uMfakASern1xmENZNaY35Ssd7zfef851iBQj3X44vJqmsMrZJ8hu7naRhJ5",
  "key24": "27hghmZ7KHJjS7e2N8vqc7rxN5722P2JypNNcy62Vrnx7y2yLkbVZjuEH3pe3R6ass4ouYM86ZxwVAMaFj7hp2UG",
  "key25": "5dTHHGC7Y5ef1GomC12Hgenpszb15DYMFWrdxXBpk2y5ZJrbvcdSJWPuibrxSn5qfq1huDnRSz4XMTzDcaUR96Dv",
  "key26": "ecst9ononeyRHZPEkWY22Dy7GLJ1qtERzRu9FDmqW94bpwnRuwjvztS9sRmrdoNHY1bUS4dXxt4hSh2ueG7MuNM"
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
