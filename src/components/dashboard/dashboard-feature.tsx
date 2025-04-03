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
    "ecATWuLaoqGM2dp393XHtagPGD3imE5gDiwtjpWBH1j4ELeSLGFeJpFNpsatgEUqavPugdZAjiFE1cqrBWVushn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NNvt7T5x2NWNZw4ysDdHcbwdFHcALNHtn61pvViCaC5FXPJV461TfuCtTyHATwZvK4dQwFFyB8vrKvRY1fYe8tV",
  "key1": "66xiRLP3iodw9L7cq4X61655i9FfNsknUmsEf5yZfinRaLQ1BV4UzhDpCEcXp5hECYwQU6jsnrtRu2B1T8Wcztwn",
  "key2": "DiMhThZ3xoBPAJ2Vs7JkAj4eqMHbTsP4snCmKztRxVwFE5FX1AxJDUjQ9PFHEPDb98wunx431dFBbzNAyUZ8hGk",
  "key3": "2sJgWUHJy2uAZDBuwvU4mzF6GZ79zriT63gzZyi6sLeeedB8Ejm5MCJAyFUiEyCtbreSN262wtqyJGPxEkwGE3E1",
  "key4": "5JtPNVTupYunuDxDQ6MiZZfzKg2Dv9NTzcsrUEjjDT7CqKSht328Kz5VDw3vb7CSV4EQsYnhA9sS1brUguqExcNE",
  "key5": "67TP8xYaa9sv57MqDcqwAHAzYneRZLijJMP9fcXTxKbtqzSfnCzpC8Y3krN8rspAAEBisi7zgq4ce1VtBWPCWEwH",
  "key6": "4DkjXerN2v1RM5YW1o8V8SB9eXPj8cZxQLXDGkGBErL7tgkSqUus3x46X6ePzmWaAvE2FUGvFVe3rHZuerjoM3Xw",
  "key7": "mg3LAFp5rKXUpo8BkUbnJF2Ugtxi9ztvRnRfucwUK7vMDwAktW2W4echj8a15yce9UseQqAGc8qRsEuAKZevvCc",
  "key8": "oz5gnL3prtNS3ifGEc1guU7QwgKNf1vTBRao7ioQsTgSfGKq7kyNhf944nWkoaJqYVYYgqAFyndcKQCYWnNbJ2x",
  "key9": "4JpXT65kF41nHcaVTsqM6H7HdMZ4snFBeviaPc96DeXH8A35k1dq3PHLKvT315z9uyGzUJz9ESuYPoTJdpaa4qz4",
  "key10": "TzkdHZCGYPrKWBDqhuoz3aSqXR6uLr32ng8yszVN9mnUkFQrUcXVoPhKvXH4TRhgcxCBoGyjkNLLVzn3ay8wwxu",
  "key11": "4rdGNYnFRxJynAzoEXAL9p4WLDDSy9H6H8MxwsS9cHw3DrGDXfowX4eknxQfVqi6qQnbJ3Y7yTtpgmn1ACZ2u7fN",
  "key12": "wcUaA5MZZNHHHSdirsSREtkGkAbQCBBkmBWd2AvURffwghrh6F63FfM6nDgxK68sh8j12YxUiyb1ua94tcH57vo",
  "key13": "2U5g6rqtr2fiEp7gULQpJhhZTBq4k5DEhwbFWiStVjgtSUKMkoVbHQbjzMmG3UYrP962Sa9n7Ccr8EEoZNM6Wq52",
  "key14": "3CtRS42vfL9S6kmBkPFbFj4vV9eCCTvV8mvV7MsWX42eA1EyeXc2WW3VMje6TDPoM8qtBqQA3FC6qnWCpV2ogPX1",
  "key15": "4xZuh4c6F28V3haNipQ3nv5j6figs1Pis5gPix8Rp7R9fCgygCCwfUnXFFUfFm6VnTU9D8ZtHzfwyowttFLkG6t1",
  "key16": "5PPNwiCq5WTqGkt1muE3bHFQvtEE7a4XfD36QF3frEYXNGHZ1rKDcdfGb36uwgKwh5cgxfMLSAXyhBvoVqWW8bgE",
  "key17": "5587xbCeFXxXFF9mkVYFyqL9YrkKV6zXYfTyBFmWFNcoThysZTCNRzoX39SHD8P4htmfcMUCK3h3QEv8uShcAGQM",
  "key18": "5o8X72Zpts8NFfoJSfKaYvk1CHSw6oohcC4aVYQbaPyX6bPyK8HLvnxde1Xj1Y6PkAyoWX9Z8V3bykjpq6pajmuy",
  "key19": "2vYkUctvMivPgmcYy8Um1LkRmGjZ2WCWBrLDHZ8aQGQrXe7GJbjWw1FcdTNyAHpaSbJBCXm7i5ipQedeBTVqFCpE",
  "key20": "AxSpmV57nEqgn2wDuC1v3s4xUPQG1YbMmkZuFLfMUyo8seDx6dCqQFJGn8BeaY4rL7vUbT3Sttt1WvgQpwUyHVA",
  "key21": "368wVhYLGvR1p56r8NV9Hg5XEfZbena5obrz8MM3K7UqhQTytGD8Y9Fiwn2AyP7P9eD8STmxKKaMDABw5XCbvuTC",
  "key22": "GwBkmcFU4Ub3TPE3fmUFXsAsuiMhVkMhoZUDi4jb6gqQGrKw7Q4zUDuHCch89oA9zdzcDWH3SP4gFC3MCkvz6si",
  "key23": "3L6E14JmkhKUPD6iEUB7XqfYbzuEHMQDvae9jhs8N7bfsnaAtrDfbwPSEQ9yus5D2RcavegHShGynNv5dXW6fxyh",
  "key24": "5Q5eRPJQYPc3Y1YMvHhwGimxZUbKGCdid7WTNww4PD4GgS6aqB6ZzRxVSk6jpJ9GDySZ2EDEL6RRKDb2wQy3SFDL",
  "key25": "3rwS17e9UDAR6jDFdjxyGywAEqvvPMeiHau44UVLdxuL3E84wPQbryeHCrx1u9Pd8d7MK5kFgfFXrXaDUkb4JaZP"
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
