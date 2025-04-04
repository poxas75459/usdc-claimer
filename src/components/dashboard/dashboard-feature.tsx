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
    "2bgYWMzKVYR9e8VTiyoKeS8dSpQDU3wChVYNw4KX821DY69ykc5y9aXo1MEm73jPuEfNmnU1jCjwhgE19bUUGBHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FEF5WZwuDwfCs12MgQ6mfcQHiKuDXoC8fHbiAa7QXEc8ehxsWH6gkri7yvQa7WgKH1hJHhrxYor2LcD1qudLvZk",
  "key1": "4Kw9ZgUEru2fz8HurAq4aBNDxdymJbigmTBHKf63wQVXM8GAGA99tEE3YtbC2b4CmzGu113txkaNiysfonrQfoVM",
  "key2": "5YcPRcGyihknSmjKNPkStrC63dTa7ZLpLKUg5TJBf4rQmkiXNURdMZXakptQ1aEi5siRBTXRJsTZqJMAKWKD6dgG",
  "key3": "3fDaFHN6z4xmZjL6SBX7Vsk6LUATMQRg9NczmQw4u3ghBpSdN56cYtHzUD9vzinVPqHduHRk4QwL8bLd4cCiFhEp",
  "key4": "woJV9v2WjGBQwTxJVA1ootjb7xmibqnxfn896Gydci2gKXFimHiqJ6NAuT7ZHYWWn3To7VKzFaRxNPex5SVqvE1",
  "key5": "264TreDQYz2tj8LLHvnVdxxk7SFYM6czJ1My68q8RQvyQnJDEN1qESv1yX7M5W8DjuEENyf7jFsVVeu4UBCirTpS",
  "key6": "5qFXbz3D1NbvywbERRkHym9qho6BqB2nbVKa3JJL1Hsy3HUseF9a5ABpNDq3UhXvwNRqezYdLDENFtTynrkYBr2D",
  "key7": "57fmchJXp7BJSoKDsoRVzCCJH7ELXCN4yophxNcjqCRV3KvvVGyQEUPm3ch8Lir4iv6VheXAC5tE2ZLuanCyH2hk",
  "key8": "26UwjcNhhRvnn8L7NRN7Xk9j8oLNSkn2J9hri3cPnJMk5MTKbqzsqz6Y85XNbnRi7uEKvTYzJa5vQTi7SXE45XdM",
  "key9": "4Lc14EXBAYRcqpqbiPyJ1vtVjQQRwdLPpUaXciME5SRE2X2S1hg2SS9j1JChHd3y5hmU4YEBdkTJj8csnmnMkXsS",
  "key10": "5gWxsWLsFxF9FX9Gog2zf5PgnXMC5RrjFyTE81DCNMvqJsbokfr5Kjppvr5qD8UDPFnwdLPEXzmsWqgNZotXSJ5T",
  "key11": "2xN3yphZGcEN6hxbr9bV56j3b93tBia2trB3EPC7pyne3sQvEeiMjB59atgtnbPGMYnczpsW2vUbSMkGmLYrQuAf",
  "key12": "5u7sy8EMNAv82Kc6JTrjEauKNht2QqTDjoK29mGwPb6KfgB2TTS1hPG3jTEGiqdkRQi53whycep3mK9JB5LMLBAm",
  "key13": "5HXpeGNZnYYL9BauTwfKwaQuHfg2t3xfybBu3GV1TYBQq1kViYpWWpLPeyfRFRnSGPoxiVNdZ3dmy43RQSMQ6NjJ",
  "key14": "3MUdhH6AQqoctDCH4P988edyDsNdh4C8KGv6Ad5kNY6aWFMHPFqAs9AqSSRfyajjzgwsUtVU3ZcagTjBpKGWN9s7",
  "key15": "3sCVwDBH99znzkBcy85ZDmyK5c6sfp41ow5ahKxNmNjYdR1JbZgKEyYEP1UmD3omtVYMzxVaKyUiwy7YFYFmowsX",
  "key16": "2wAD8rUVitvJ6CjJfgiF9TAqnXWNvcMkUfEDenxvzxbahnnMka1JvWquziXeKwGEFRotejfqpbKmQFSPexVuZbZM",
  "key17": "5m21AaXX1WZdtwzba25rJerecfeB7PFR8zrfWM582LTZxAUv7LWMbXRRYc8aPJtg2VfS5HpksZPA4QmnUdUE1mCD",
  "key18": "6oYznwTcoxQ4WQ4Uwh3AM5codKnQbVCFVrbrdz2UmEq3QyMMeGAAm7W5FadmibdYNHHTCZ53yoFWhNZLcYihvci",
  "key19": "5zwtPumjDq6apGM9EL8LtczW6ApJihzRzokzqCfRepm129c1nJKj2Kih6eqTtxkUW9fPqgwabu7fUP3Ag2htt9fX",
  "key20": "58o7N8hm4n8pHAkjpFxA8U4XajPrvk4U8AK2PxpYoNvqJpX1D87tDRS4nXBNRdu85uKDak9dbMXGomu3YvKfHUq6",
  "key21": "5AsMvzPwzuWnDvBapnTdYiSeM2MrmCvt4LiMpQfrfz5ZwNV2z34F1LGKg5uxxSYSEB6g7amudLkw66EZwQarV43p",
  "key22": "3AvSvNnKJ9vtUfA5SZiZ3gzPEKWZqhLpJjd79oMA4uQtfaBTCTqu6qp1yn1iKuE9cPMYJpAsp2c2BXnD4rQ378mm",
  "key23": "w5uhycYSFkhNh6AzSAViAQmDx7rBirFzCQHAtrd43MiYi6kPiRst99zFdkN6mGpuPcsoiJ18dwr6pWhuzDJTkXS",
  "key24": "54WAAh5w9gGhnvazZpSY76vsyEWYJJgEN1mZCp8LP3UZxutjbh9izzPXEKhgKD4pyyhAkauTkvXGo9C6Mh4nS5na",
  "key25": "4WzYuYAU2GBx5aLgcRCWKfhuKPDSjVLWbw2defZ9K6Q3ke4LdmhuapPy3JrZ8F87AWB4YGGKoLpJhVD2hMwD3DMT",
  "key26": "5BZd3hQfjpRKf9ktvT5M279fsAUqHrmPfY24QVTmJ4qqj6qXdsSbCr9VDrW316bzq2triqRUiSsmbaEwAKa9H9kh",
  "key27": "4XBxXuYBBz4VSWmDdVZ9WKs6RGiySVCiFTa2kMMAkLFQieubfFrVrZcH5SVN3ws1Y3CEikrBKArVjCgu5x7BL7dL",
  "key28": "3JpTVRS9EdzHQ83iJkTq7Zggo5bEgkk2PaoAWTqn2HowqtsZF2ejDoFo7MTQG1a63pwT6Ttz1jWH1xtsEWNMcqu",
  "key29": "2T8jnS3U1NzURZo3FUFN7dwmE5gu5emSqHRKuL3VtfzP5AuNKPeZdPWsYw8bAEyK58ZEpFXMxrckRSShGKhKf9J1",
  "key30": "34HYiKU4MDwdA1nZCwKKjMgn8Tuyyi1uRpEoTdagGDLfP8KE5n6SwKd1Tzv8va5P511tMp3YJH4e8MMWnArJDhi",
  "key31": "4CQwxaYbmgMvod84RmfMDfqTWFSPKbTW1MLULtNSuRjczBiPsTb94rj7iWjaUJTcWb736wF5PaaU3384xnADQeJS",
  "key32": "4WL9Brwj8Kx6SRLLq6h2hYJxQcU2WybMBij233YPVG2AAhfYuGMdQEjmqnJ92qPTkuJ5wMnvEavkTaVraQUdiXQ3",
  "key33": "3hyPVVGN55gvqWX1aDMK4s7jLwSg4Jcw8uiNBcMjC1XNWjPWYS2mZ5LEiTiTMKZUn7cEYWH8zYWr4wL3s7SK7NGJ"
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
