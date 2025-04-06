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
    "2avgzNrZzGhZ2r7oeqUa21gsNMqm1TSE6Y7ZqXsV8TdVVsSBZfMeLsS7P18QaDh66p4z2yJSgTP1zs779QPFby9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q9dwz9XELnMSEMZW6UHVVreGky4XJPNHUUrcPjbzR8uxjx1FjLpxXbqprG69rTinJwUJv63gJ7q9wFNuyKV4vnH",
  "key1": "2kKDUiS9neVcBiXgWSEXbKkwKLgHAE1Shn8ZFbabAtH8jkbDVon3NhShH7s5QYCK5R4VdbXf8b9JswYFQ4ovBvx9",
  "key2": "5CvwvH1r3FJHf3gZYeqtBLsE2CnwdkpEAfdHzV5N4DLBKdYRraYhZbEdJDwNM7kXx7tV1dvUiokSxQLwHmwztvVf",
  "key3": "4zyGkWo6bi1VDnN9CtuoQQNUTSpXvuBxG1fiFe9s4a9iUsuXenA6ozAfTLK812DdJumMjRLrKEayQ1kN179jFnRm",
  "key4": "2dGhTYYiEwDFPWowkurwMgyGhHY44ZFGFeAvAy6qac9epNCnwxSKNCMW9BkLsSs55q1nCkH6DLUsn4ar7ajAus49",
  "key5": "jip8EYcBV7LLEZyTKhjDih775GKVF15DLmjR5a8g4BbEE2Z9pxqtiQue5SQ1rtXs2mSZPmjZ3wHRre7PmNcWbz9",
  "key6": "5unTuCHqS1cuBM4aLPNm76unEp8kYPTNgbkjWA4Z2xK8zgh5VDewZcsGLjv7ormY6pFLuXrb5psUs4zDLemdrvdJ",
  "key7": "3HX1ourbRT8cyzqwffSqo2gsWUKeXr6q3FGG5L5huDUYGdXeBvUzFaUBRPNnhsztiKSs7oDtM5ceUxP4iGcLktc8",
  "key8": "5gFWWjZeDgXZPB7UkK5s3q5qyJFNypzpif2ozRjrVdTpzogYgQEQigzQQn3JHebDqVYGgn8rWvAx8GanNUXAFJLM",
  "key9": "2WWYacGt31CtNCRiffqrUW8dgdjcoAudH9cdybKECmroqYyhNQop8c9yAuv8fjBaSwFRa4Aj9xuM2accFF88joVB",
  "key10": "3ZG4agqAKxzWU4MU9d5RrxrCkFFXZkv7hSRDY5QPbGKb7F7DyWqGcARX8kdmbMspj9gXKsknNifa5fYFvkTkzbzy",
  "key11": "4NNE38UhHE5rcVrJrTjSTmBLm92y1jK2Q7eU25zPWtuBRe1bRnzDUvXWdjrvYuN1uU4JKpp7Tuzc59shcE2Vexz5",
  "key12": "2jG4LtXeoyVgLJg9m2AJv7Cv7gJyX2poWrd8BqeVZ3i6GR9Jyip4EpYgvGfgFtK76qxyGFDPcLYt2ZRzKD63RRCB",
  "key13": "PJMXyCp8dYvfVSioTRLk1Wq92q1mfhYmTcdPhT1NoaCEEvFsY2seKa76mrRJimeTYL4Ao1H93kKh2As9YGRMAAp",
  "key14": "XGTAqvTh1d5UGJArooiUC5DMEXEkMrEu2sEbt47K7RT5XnTrC4kg75HYiex2CCxWfDpceHKJCvzFMge99xA5cGB",
  "key15": "5Aq1T6Ph1pSwmbVQPv13dYT8GAcWU7MvZ8uBG8AdcGMM5Qq59C9JAWVEWsEkDDgE6cXkbRpKy77CB868ssZssxfa",
  "key16": "HpT9kVuCKhv7zc7kt4JNjX1X7u8zhq5rA46gNt9CFdAy8TcJ4CPwKUjaqfF7f9H24QAgbmg4b3FVmoQJ34G5YJE",
  "key17": "D7hu9dLPtfuWC6mCeqVHrAtv5x5aP6pGKDMT2LAwDEBEKNkT2QBgzuBH7iwcBtAme6vjHUAPYYL9jxmCYnHqjdD",
  "key18": "2VmXdkBGn8xdFWF7rf9q7RVJzbomJBxuijntMjC8Af9GtNXS38QeQY3Te2wtSu72QHss4sWwhuyv61yBVxMP1JVJ",
  "key19": "2FCbLjJuYryncYifpHMKQQkKo9cgbxVDPa3G7MgQ9Hr2G8XoZmYuauYqukFmj1XUX3KkLwK9XKxh1RDnmzTtEmr7",
  "key20": "41JY8DMn11X4uaN1szUTpSXAqgYzi8ba73TFBjbsYNBunejM42M4XzSBPnMDnwTCZ3sPWGpJWkhbuAxRJcbAzAZc",
  "key21": "5EmHueJzvnoo1xeT6Y95H3EY1z8NZg9Cf9gaRqToqeTUBwBhxXLTEgWC655Vo1wdd1GQvQN2goWt8ptPPSmm2Xuu",
  "key22": "3YqdpdmEegYR2moqf8VK3EaMSxR6zKv8KvuRVQ7VihFYnaLdwjW3WHrJxtS7o38uAbUY6zhmN7k6rKJYGyZ4yrt2",
  "key23": "62ks4tQ7XXLk3Go8JXrEfZKPgV7fcDoZBwtTpCgny66BgcJQZfUEi3uw45fNxdAp3xzEtaWNaCRGkxs74mT3vHUZ",
  "key24": "5mLrTKNxU1GSDvxWxqqLAvHztt4TSU8wTEMynTEDSmAo41xi7xHSJ2RnCK1JcFZRvHAuGEPk3LmGcAitHAo9wy1q"
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
