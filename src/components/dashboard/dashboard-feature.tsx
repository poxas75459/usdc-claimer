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
    "2m46debkVbuKmDAFGVWqz6aFLoJraijxQwFo2izvtMxpEy5YC1X12bTBpzMKqMCrWuJ2yZWfoXEFihq7H13x4t2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yG3vgfpEPghHNXUji7v5FXUjSRgMQZmyoa2qMKvdmwyqi7QAmq49611v64TjTPTaZtMQ1XT7baBMcEWtNneBQ1o",
  "key1": "31fW6jzUphmCQqWwZzenMFLHd9SUmRFze4HTV2EdyjK9TiVHijfxaanyJyJk6npJysTLQAUUfUbwphBdCC4e7tMH",
  "key2": "vjgfPFyTGxrEx3wZCTVQVP2CgSdnvdC1Wt3t5pH5vwsv6EiQnwZSQXzKDtpH9Q1EPCXhkmznjVypZp34wc4x3BR",
  "key3": "2CHEpBGnPQVhN8c7hmSqxeCZzkg76kPqN2yKqi1pmmFfmzbmbLiVBKhjEu9s9vynpEcnTpYHZe7iWqk6YMBULbjg",
  "key4": "5Dhxbja5Sh46YLqxUyCXyvcpBHeQ8hoRmGe21eRXyw5AxS94MpWpU1ZbSXBsmLdH67N1giZYYPDciTnN1LRNccSr",
  "key5": "2TVxH79CbVUBqdF5imPW4kRg4hWZaMjGDzZn91qpGeV9Y3qSgVZBM6vVxMFsrkRbQQCR4p1namezpya98WX894iE",
  "key6": "2EqMDPmParrchV1jsNx27Mf5kvHL1BQ9gLvd4m1b5mbpqY4TGu3R3BcGgLAc1ozPu7ibU4EV5tqqGq3gxwwMFLnK",
  "key7": "4SVmaGpEWfvzbXMor15SFUbb2RKdJjPLSwVCBWWcxfXxAxc2VnvY5FdJ7w7ybwpFuBweq5yNHJz5jjkEGhmNTZP5",
  "key8": "mZLZqJhhZN96Svi4VJzqwXYLHSHtQwrK22P3n7jtLSnuhSAkmo2ZKNq8MF78Fo31gLHEG3WyUWFgGsJcbpXvvFH",
  "key9": "4fybA5X31qK6rsnPAfd1o54YaaB7BZcj3F7QM9tFgVuVhLUBm9G42GfNVypa25zQJcwkEbuRZaPtwpnquPvBK4Ft",
  "key10": "31wMmyrkrksv8whacWJUS3LN5jrFs7RXD2fsbdeYQxunppjoKXPrtqDnNGpDgZiDsDfudGFxCLAZPAbBf8oEA5BK",
  "key11": "5H2ZXg5mZ4MKUBusoHyRD7MXKLcimkbEQdSKN76RJDHygWpKadCYWoKAsE3qNiJgj5LKFZWoYVwZ9wAaqaptpxtm",
  "key12": "4JNytdJt8KbCeYhtqZ7bFD3MB3jXSSyVFiFFDVGJqa1yXyfNGnoJ6vnGXSzA7boU4pV8SeodMmcNm6iQKvC2hBcy",
  "key13": "42FDCjcxkqquoansUwg29VoKc62hm4qTZ3R32fLKEpbKGj4ATGZZ6hAXnHpR8WS54ibwUJsQK8F2mvzyGkvDBzpH",
  "key14": "4vHiY7kGtwcykZfjSNJEbtuYebSG376CTc8ejsAuBDVLkMdFebAEWypPbzLrJJgmUpcD7FE7vUaYwicznxt48w5P",
  "key15": "245tkmWDA995Qn9ymCgZmHsyKqcvnQj6JzaKSuew6GyRC5xYeZk2YhYqByUr75QDpKu9SeCKTV4925RbamUriTRw",
  "key16": "3QK3WFv1g7aZHXddc3GS3uS3tkD7tora95qwcNMfmFa6rhf5v4ExeUiXqGBxJkLgQDuhxtzmLpKjqfNekCq6tNZ3",
  "key17": "4YxAG3TkBfpNcFUdAigfMSKd2wNtAd8KPzkunzznZjxnYgg9fZ8rCSZQjT7ifKBuMsuE1uAfqJGa5UXQkstpD9bX",
  "key18": "2TSRbbFjbQs5Rxqp7PtPnqBd9H3TMJUsy4nVyy3Hz1jQxTw3Bex3kLvph4A6XwmyTFxzRvrbjByM5veTz6raviXX",
  "key19": "2JJ3KMyq4p3R8i1kKHsxHWXAS7KwLhPDsexHGXjcZNmvtTJyDgfq89gX5qFpBs8EdrvMpdNhuRY8saiZXsxWvYhS",
  "key20": "3AAQLkmCwZ31pUu1UGpbtVAs1YfACqktxyoRKUsaU8iiHRG7F3q94K7f7CkZGF3rTTkhHwCy5yvvxc2Ur9UiLF6L",
  "key21": "rdanKQBEVyzjtVJzh9HXECrBcMGLJNCa9PcjmttsnQCbb7MkDQ7kFajFnED3XfmCjTrbLMVD1RARQxZfuQuR3ep",
  "key22": "5goc9Fo7Mv6nZM31WkbjjH1yQBkrg7EtNZjR3j4wRBvoGQjB4Yf6NjyRqQexQvCKpLQM1sPGsHR7R3qX4kKgiDtz",
  "key23": "4yZykWCSY2Ba1HLJ7fzGtSWdnXT8fYrGS8amLEGefcU8NQbn6DATHzVBmrUMkSdWKk3dZWqRKo5kXrPqPWPysbqU",
  "key24": "dHyNzqoMtk7s3ccM8ofWSnbmEefMery7imGT4UtjLppRqYzegyjxeaydRz5qyFyEMA1hK5KhodpAV8xS234ScAr",
  "key25": "4u7K3SXCZhSwY7uEbZRbefah9cB3S3P7W8AVvJ6GvBXSbYSS3gBYNgfjpMhStmmbHESV2rRsvtJmQe4MpcdZFkLG",
  "key26": "4tk8uRR9ibxEiLMMzchbTumYQLXU9rE7FjLxzVywcEmaqxhbf8FjVpm7LfiPMmuLemoGKhMZj8KSuXpabspq8zAT",
  "key27": "4xUgXg8shxnHdyxTDCcniaU4PNoLmKonREbMuTxi8r21SBZNXkSdn1AdqtBqs47Z3iAQSSYcBYattjTgKnUUEgg1",
  "key28": "4NbRRC8oyAwBCdtTLXx1ja4huuhUPcsuDbzW5ZSi6PSAsaRM7eiom9YUpa6m1WZczbAW4ze88syXtiZty2k7jw2V",
  "key29": "26NRgAa9fCsdpYBrNrvZoofo3CDRMa4gZ7DXgjZtzxGNGiKGx5sVhS861w7E3irrbM3xn9soWjnePjPJGzMfCen7",
  "key30": "5XvYZQogJjPXSbthxeuK2PpLbLgUsFFC8KXbgprxdJJ947TMrD89PsJV1M1onowRtnK3XQKGGM5THV8TQpypSnbr"
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
