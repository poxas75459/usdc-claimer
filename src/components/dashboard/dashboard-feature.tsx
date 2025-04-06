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
    "3EHJwj9hnG9H1DewQZgNCG6ttm7R2puUK598LquKPyjbVZhmwKtF8SuxUpYAUa768jXMShzpL6kVi6EzeuDkfvg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "adu1tx1eZxLxffQKSx7j7YouAsBwaRCm4GDQzEmV1tUq93EPPiYshmSm7CuJM8unXMtZDdc4J8EcXCD9Jp9SawQ",
  "key1": "1r2qB3j3qFfAexX9XMkTfGPD3XoQdmqRG94fP7PvNQGGx5V63RcHf6xSVp4JmhdfvETcuAsz3619y2c3re1pbNs",
  "key2": "DxDVkuxypiCNnEL6zZMAENU2bNHwAZ54vegmKFFGqNRt3eu3151nAFjiEomTfGZEDG7i56TKxRxk8oPcst4CuZ4",
  "key3": "2Qt9pgs7PXFkZibFk4riG1pKC2rSxYXNpDAQHfWBSSwYRLfBCL693iumJVwRLxMzNGhngjvN6uudHatcnmJPAgwn",
  "key4": "45JmUXkfMRVsuHpsYr59a2z5pTzxkq7N62kmhE5TZK8kGHCtTCugpaYDC9d4JGGoCtDZGV9fzNnEUevdLcNcqRSm",
  "key5": "3qbHyNgyBZq2TPvmMT5c82fpBvk5QetY2ruw2hKc7ExqATcnVs1LLvbzNT8jguMvBt5RcXbaqioPPHsp82kMRckL",
  "key6": "3eWLr8LyBAfwJmqVLySXzjhUb7GNQf7svaTmSPMZ5jQz2wywtnjD7LFu3txL4UorAecttzDyGWNeHbtSnXHJzmjU",
  "key7": "r8YAskh8NEPzuFMERfMEmwUSBDVD3vt4xsQvqkSrJstBxu1PaVGWBpNxonzH5J29xw6p1AJ46etPhwZxFNim7YN",
  "key8": "5Lgfff6TEg2X3Sv3YJdhRoM4NRBbyGL9R5w7vgQofHowRFpk8dHQq78rir5YK7T9REPLfPKkXaegH7NYPyHL1YYA",
  "key9": "33b3SKmqGHjfBmcCGXHkfrWqCBNi9o5WgzMhVLXw9ieWUZhXeTFb2ok6Wbj5WxvbovQtn7URtjpRoSR6K8TDPLRe",
  "key10": "3yAwfNBSpY5rcBnytit9oq1zPVAiciH8Tc39LupHfVhDSboUqCpXqX4gzZqFnA64yfC7L9LHTsG996MFft1DWY2V",
  "key11": "Q8Svz3AWYG8hxMQEutC8EN7yYifuGwCkHNt9D3BV5QdcsLuZw6ZJUDL5mFiZS2bha5d7yayfaqRAJ47XsbokRVB",
  "key12": "4Ksd2Nk569kYY67xgTgkvW7qrzJVLiuCWWwNGdDBmrb8PwH78wnRZa3EmjHrNQfDQTqryooeCGZpCvvdmvwbGq51",
  "key13": "4tBYQvfmPLyqrmQQ9H6qGhfoLaeZt6a7xTLtWSb1MvARnnsB9XYdfyRkE6HZrtx2Xy77RvJNqFbUfmReCR17ug1i",
  "key14": "3UDLMQHmXjiyKbAe44BUVnJm4qpYXEawcsxTJgid7ZHJWi7wQMEexJaKyFqJBinFwiLp6HemnfeQqnP7WV7vkBsJ",
  "key15": "3KTi4SLEdyfFcryMEMdRhtzcdc9XD3Fta8wLZ3ZJV8KFYXYBkeqA4BhpzukgnLMnDRBEoRiFmbnMPtT5iaSdJtC2",
  "key16": "8bzweRSJ7DbokwrNyzhsB2sp8BWM9pBhZkP32huaS3B4BqRAL8mHjtF5x2Cis86yp7YzenrkHqkM8u7XksFsrDj",
  "key17": "2biUnLJb8L6ECzgsiPkGQsMVbmuvjYSYNqMHf2okvj62Ucq82ySbd78moqkNn8Zo9PNumQuxcvSRGXfNXU6Qsjcq",
  "key18": "65S128CWFAnP3gw1Piv7L5o1Dn2Jh5WnN3M4Gxt4yzFaH6eU4N47DxYhFWQnK1FGmseV27VfwjVfbW4ijbvttMKW",
  "key19": "5VodApfWGkHWjToSozwY96To8YgtTDg2kTMsJoSyfPzK8TQm4Pus8xxJm6JhYcxWChvBep5vxPRyyYDkBQTw63J6",
  "key20": "JLLeY469AHbYrshaxJKQ3qgPXqCF1KJGZR5ussmq5snJ7vXHY5DVU4mqKANRyRTfGqQSxX89j8bXRFBzp9PekFb",
  "key21": "2Fznz8e7usDqDbnFE1bacVgsRVjrjSeEDvLs33EyWfrKJfdnuafoFnJ53QDatXrvoB74CgbcJacDhekeiMLpZqsQ",
  "key22": "vyhuurC6WX3VKGsHCpdStEeujRjd9NkNHgxX76Ygfo3aysCYNfM4CqRTjvPDh4CxDaTcmdZ15P1zyw2zDpynUQN",
  "key23": "5bNp6RhKNKY2Mk6gnBAD1UMyT5vgvURxmb1jDcd3mBPaTTiCc3rAqJ2ExR5JMUXaZvHfH2paBQhgDhmqtG762ShG",
  "key24": "4rWVo62uQfRbAb8MFkAAZ9fbykUxC6BoxKa3nS8F8BVZhdkeLcoLMup9Q2N3hVJ29aoVf2Cdk3HEKBkyEtbNJ5PX",
  "key25": "XXMDrhYQdPvzCvKFvpTJioCdP5MxUMxJErX5pbLJF9dTme5EHxz2EgdHjrPDgHGi39pr1yugK9LHUW62qvJumL6",
  "key26": "3GsftB6A8NXmwLGT3hzTisqfm1nxGe98reoJrUoi9G1gWtGwSbAL9xqqvULfkccHThvZS78EwjCQ5h19CdFXFq8e",
  "key27": "jp41xwwwDiaDAhLbH6ypg7yepSronFfiKeLMshTjztkXQvGmEinqxvDcvcuPwGAEkSsdFUoGBm1zL44btjDadt2",
  "key28": "33QRqFsavFM8DM58Bvh1LTRVbC2MXJyWHAgLxMCdZ9mbwcUmdFgykmjpyrFNByvDG4jbHPDcWGncsFqHqHKyv5JZ",
  "key29": "xZfTgsfaR3xvEs7vg51vvTPnhjwQKaVNKekzerNgZSDTnHnCmf5DiscS4nhwcpbgcC5tJjxPFFbpd525xEMUzoa",
  "key30": "2u4ei8nJSThj2A1qLjy7dEzuBJEZqwfx5xtVY7V7CH943zc3sEbkFf3WfrLX1M8CFhC7qEMrkMxxBCL36BkBRrHs"
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
