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
    "3u4MtL2dJuAQAgwZuWfx8VQPX9pC4fAgRQENtfiSd5MrosDTnqaUz5EHf5bZJQQNyJbH7M6Be8BM4AvwX8EG2ENZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kf1fmc3U5rc3ZYyE6YvCsXU8DYzHCHyBZFaBg1R29aLh1zVRzLrTsPVh5DhSD7j82wqsETGLp3kt3SgQMjTHKFq",
  "key1": "4bfaUPDNuRq8dTsa9cJL2v7TkCt8jRjMYdfH19Ygx5sWy9Wh1JVq6WB66kHXuuagouzbMicDctWVWj6nQUqGxBJ3",
  "key2": "t2yiFEP9y4YiK8mChqFM3FejbjMgKrifxxY4GW37ikq7vb5t3htupn928GLH4bx7BFCz6sX3a44P82DnUaGtfVD",
  "key3": "3LcueiBB357E1mCWws9p1bqcemmFwrxb8n8cR8o4Vr6FtRNDFut63QM58oa5hjjeR368sFY5cB4quQwQ8hhmEu5L",
  "key4": "5eG8A145CzLq229o7rFguJeMHLYgbEjT9yNcRpZu96gYfy8cSve2oSVVidPbHtwYy2kKrh5MqK4Wkix6aGDP26iX",
  "key5": "xaa4G7oLy7Qme1AESUYJbssHX8LHCueV8GYnM1RoGTf6ypDvq3hjHygryjjLDbvvxidp54JZ4MG9y9kBDGf7cs1",
  "key6": "4Vz9NEyXa1TU1f5bQLCVarWrPH97X1rJ8cw2krkQUDQsGDMrT1RfRR4PiLKgr3SjVMSdw9193KQkkYZAyjs8167a",
  "key7": "Hsi8UfVk1JQyoWuouSETeznqtjttL7vni79ytEBu9S2EySCLr8xGwJJU6eh2YT8HyJwFj4r3TTFhXJgWhXyNGB1",
  "key8": "4e2TCaFrcpSbx5xoSvzNVuX2LyCtsxWGu2tcbDbPZKLopSiv5o3Uiav9itYqWzrLuqJaMwG9tbfMJLCoUAcAktPX",
  "key9": "3FavNC3ycTTkB3Ux2JEpRYB62gE16K11RPwygk9gq7wmMWvK2RatCfyQRi7H35XnzYYSmG81rGrUCgVVgbA16GvR",
  "key10": "5VsMS7grn4yzmWNiBps1BMhy8kYnB8temdT1mRLRd3UnFTvahBT9K5YQ6Etxf7hGCgozj8iNewu9YUVyzMooKzkQ",
  "key11": "2akRsBFsxAWjJBYmiGYCWW5oSB9x5usrnaezJZi831DoNbEpCuGNZitescnakQhYbLVe7rGm8zUJonyEycXqV1bM",
  "key12": "2kAc29tasSo4uopDjFtmM3viUeUqzRo3meXA1oJ4U6RiN9uqhcQ69X3fdzKcRZQnQyNQsp3rrWCbvzgRtWkVk2MR",
  "key13": "3MZm6UC8B43A4JYKQucfvxFtbXcL5ua2knRx7jqVz6rjs1NHh964fy9TweUNGpYX69uSVFX3iMMnJ4E3kiaqmZar",
  "key14": "2FYsaRVR2tikeXoHHMnKntoWN63WgQejpEbR1aUGGGQU7z4DagEq9NGdwzYy6B2HLj1PvudDLWSNqzcCm4gjFa9y",
  "key15": "3VvEJPhitP6SFTyJLzG1aNeQVU4J7Gsebw1r5p5SmQRcnSTAqkGAY7MbEZvgUqAt5ysMU8Zm419YajeSJmzTpZ4i",
  "key16": "4FrT6G9oXuETjczQLmVPuwC9AmUWPberok1SA9qiP8DXiHRSE8wWPcGNRLqCFXt53d2oYHkP6mFvYA5Hhe6RrxJ2",
  "key17": "2pWPeTbXXWSijHeze4Mz9zpHqCL6kkcBEjqQoY6dcZfznqPsTKs3Cdst2yHWT2AciedXDkTVfG6eChmQa8bkGi5o",
  "key18": "mTmr6i5heum773YP1kgJmhvu8xwYCCrYQLyFKhdv7JEjvJRYRoLDNXXF51K2t7XnVk2u8EDdtiSkHNoxKSLCWq9",
  "key19": "3nFdFBdykeuCWfYn9tGmUovxtSLambsQo3YF3KBp65zuktbob2hnbWYLqoqMPjGyocitPGiXLmrBS5N8kdyoX7ZX",
  "key20": "ddSLrF22UTLBv3CRcyVKA6gkCE7qre4wGdzRvsFZYJiUDvjgHZ7iKt24kKN25L5jg7MTR4aFDPAfdmuQLwTkkSm",
  "key21": "36YnHqzVu51wmzjsriKMbaZ9taEpMtWJhoCxQ47JzJFuppAWw9YojyrK5hQtaX1JYj3tF8tfSYAMfLYmyE1ojw59",
  "key22": "21zHD3i6iyzag5sNpXbFG9U32Srt6vBG28S5DigVKkJGpND1z5x7GZr3SwTpSSpgwcd6u9qA2poTV7zjw7fdow5N",
  "key23": "3q6csKZWypNJ6qGgEm1rKbd5ebWMQSGjHNhwoMQhbKmeMMBW4zrbWekicDmqLxXhd3jAcuze2TA15e4RJp4udJNq",
  "key24": "2HCkKm6G9uPjWm8XKRenk2K5VDHwqfW3DKDxQHi2kiV13qD2CqUBdLq1AKXAk74rE3iaYXBjAqTiUjmq2v3HKbeM"
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
