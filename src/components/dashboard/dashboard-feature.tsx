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
    "64mgxEkNgiJqgTTps282ACyT6CBSDFA2XUixaupZUgHvzk8gTJL9HYeTDY52TBBuJwcTuPMcWFowpAJZz5Qzvc89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nsNuLBUYHPPauLWvACyAZStpNho9ze41koVnxyWhHNPMoAQVd1B3jMnrAQYiuvMnUYFimuKXEAXJ3CZBa8tB41A",
  "key1": "46Doe1cA5wgJBSk7RFuF7Nu8C7tMYjeaQkUnvi665psMwHSpazUjfwpEb3jzeygDt47wNfZNrk9NWpxnYQAPBHzS",
  "key2": "2HqxCzhM8VXw6rkSgYjnQnx5wF8bCzP9rfJyUbvdsusi192ZJchc1zotnFTyoCui1KBNrLvGni4DwfAdXeX8NuLm",
  "key3": "4kF7FTJVg1xhZzd1Q7QCYwyp5StCHMtVzqEwrFUnaDHiFyjDLx5WCCqpPd3UizYmdoyccnGVpoCTuGkwdMDT4QJs",
  "key4": "3mQdCCiGgzdkGwgEinLGUnWnXXfcJm1ZKK81eckxAWUJE555S4JwQjpJcZ55T17iZbE4MtNNQYMWnxBoPBi3QCF5",
  "key5": "5gtHZ66QSQfCMSi6LS52iDg1P7ku9dLHdxxWtYaEgDxPEbwTJZgotgjTa27mkxVJaNspL3kKz14DUSiCf9p8tfKg",
  "key6": "nHuJQbUc2jztSWznd6Qzpa4RWqpzrP4Re2rnB9D2b5YhEpc6ijsRKTxQV4MfeBidGvmjnqCFp8kVnYezegHtC8L",
  "key7": "4LoTUcxjCP3j9fHhVwmYCouBQMmguc9X1yX7XtFJKWvm2t9EsVJZZKJkZSi4MhRnpc796YNcx7kP3frgDzALrvBE",
  "key8": "43FbH35hCpoZ7aPY1igbgAfD5Pcvij8GrWQNTK4ohfbeaGCFsofRwsP2STYJ5CBuFBzejTzquWm6dv6pES5tCJJY",
  "key9": "29c2vjTKWvGDaFBkzTeMZoe71F5GXSNHpZ8BfFZxbJq2P8XH25si1CB5uogv9JnC7hoM73qS95KfLADeWM5jSnMB",
  "key10": "29fxtEyPbfcuL291tPwX1xtpzBGXmzdgyhoLEhRXYfpXwueXHgJdVA1JgPfRHYPYaLA5huJXiHgQ6royzLcYvXeS",
  "key11": "3B2DLewHtDK8MnHWxKbDWQD4SCKERGPg1sNYz1jDJvjo9wFABLHvg2cXQdEntcpxhrnzkkd9ALCbSMrTVq4SrAJf",
  "key12": "4aXYk9Vud4zfAWJ8BzCyn1tD5bhojiqibs41rYoaToR9xwUn6bNEWRkWKLPqzyiTZ4VN95uU7NbXYwXw274E6Qko",
  "key13": "4KrifLdrkr3FCgzzUjHrZY4xvQ3TNURZJhVo8ApKBKMnH8K9R51vPkaUdQkx1k4aPMpjP3FNko2puLrL2Hep5wz1",
  "key14": "25jN6grxRBHM2C3SRKpJDbkXTqVjuWQKpXzUFTbVcZSvKG952BGQoaKogbZznypAmYyZkwLFcDeLrLKGPapy7VkC",
  "key15": "2qLELmUMrCjnoWeGdoL85xpMGXoxcJsLJakDwef8EAYPbobcajyRScAMoFoWx9x3FxtLaVxtnsiHBkn1g6VYbi1X",
  "key16": "4tKSfaoAMoWLNR4N4T1ziWhWJsAwjZo6KDABBJuVDq5jUWNXK9CSTePSBz7KdCCYF67nBCrQp1NcN8WqDb51WrjN",
  "key17": "f7DymT8Y9wnoAskv1RzXKJ2womPdoJLi6WbuweY1ubswSxFmr6zRD7bSBb2ezQCWYoThqgKLumQyCSJUWJopPPC",
  "key18": "3AtYKLFZZU3idJMJs8GvBwDVzw1CR4mjLMHqkQzxhpBArJHrU3BGJYctrvXEwBPrgdc8fN1W7oR1kRRwP1KQuNQp",
  "key19": "4EWMriFtAxBbiF9WrUUJkZyhDtTWntHukB4ZMDDLudUdxhsmYcVhCbnwZtv4tXvd26QJ9Mzk5mzpVV5nnGaWpk2e",
  "key20": "3ZUmoMqQotT4CqApBKJipFmn98PEkoMNgTxHmF1xUMbN818kAcMv3UyrhLzMUakNkXUZVJbfymWUHkzvDJCdGyhZ",
  "key21": "4BybBkpLz36aTKWGf9YfDWQX8DramPN3HajPVyYYerkVsCtKGk9Xv6N1bSLPDpqGXigB1CdU37fCzQH1KZpusKtW",
  "key22": "66yK68t3VHp1yCq55pJ43yR6mTgMs3NYD4TRLx3UVzfgYBmPC1E1MHzkTKKN3Wqvr5xEGq9uZND4uV3qfK8d4mfJ",
  "key23": "5t5pJHM3A5zejsaAhNsF6mWWkL2nsU6cdA2gWNcGA8xE8PpeiwN1phnPTwcWTrT9mzhhGQ8KavzpPshrFUSq1PnV",
  "key24": "41Awifyt7Bf6Y3B44ZzXyHdvi3UScStYoxv4T5sGjtskrdwmvoFzh96qTcVdJHt6dgWtAMYYoyYhEuBprY7H4kd1",
  "key25": "5zvUF62XsSwH2NjaxSGGSS8y1kbVPfqqNwWoyrhJNvKSWf8WJhdxps1fErzfrhKcjJMoyy3gDgBAfYusVxtVorBX",
  "key26": "3ccMXsJu1DWXmEpyjQ3ENsR3yJy5hN97HfKFZRTGRvNpD3s2xET5mb2BRRXQNLFxMuYxBnZS7nTQ7Ro8GXHAaDxi"
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
