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
    "3is9cAPCFNx5gxb1EuPGen5r2Fp1QnXmbCxVbDMUuabBLWWZkVZRYbU8B4qKEGvJaT4sJ8pEigFuAbz9FHS7XjUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PnEakLFc7F8gGc8Tv5oydMUcUasiwNiPHadsoke997s2YSLKyaCSxc3rT8AMT1oFMJT8J7gLqmp14kn1tR3Sjnj",
  "key1": "2fP6zYQyimQPwePEU3PyGDGRovrCjrSVsSJKaeMtnF1oct32YEaFY8AWNgQCfTXaU9akLzgq8ZmshwbkvFT33iK8",
  "key2": "2UwqwvX76AQs3FHChieYeZCPmpJTSjPJG6nWj2g9uSFRRZbhgMuGQ3d2fmKD5Trbc7PYqiHu96sgSeg6jxqbnLKW",
  "key3": "3Hw7YxPSh5cFRtsAhnaQhWzR1HofyJ5Goz4gdMEegCLNQpJ3JHFT86oqneEsKLiHLu8g4FzhVf97Zn1on4iGgg53",
  "key4": "2LjmFLDdVc9YDFjgDAg9oQoxizHda5SeoxaCHXVYQVQmSZzBoE9cDHQZHUff7FMJWhb21FXKYuqt6C5juFipzCGV",
  "key5": "53NPcwdRsVkoGdVcvqsWvLeiybY7NhuYXa2V7C1u2pb3nP9tfVdzB5t2TjqqEe1Yn9pVDgEUaDNxi8hAUZ3WJbyj",
  "key6": "4HCf4H74WXzh1UX4Q7EMbEMTPMX8inW1kNW4t1q97KiJodGUAA731gWrUZxwVqVS7JXwMQhNNRpXLbMLTX7o13Qn",
  "key7": "2BTuvv1T3iWhvJLTQohwHDMXV6KXtwShrzV8xu461yinptFbUVZD4diq1DMh5N1LbtiKrmMpAMSbihuJhNctT1nh",
  "key8": "25a6EhifoBN4omwcECCHj1iieY1uVNLUEj5Q3heNX9qm97HhB3RcZ6dSbCBQE51hBLYRwfvqQrLK4Wo8WG6iKn87",
  "key9": "jTDEqLFoYwXJyaiP5tNGZhKMmPFDppkQHMPx7UZMSgzAy9gcVSaemRS4ebVnp42gvLA7mvDTXWrwtchLS52TMWF",
  "key10": "2SfBHsADnetPgfQHDeseouA4AdWzW6X6zpU1HbGiyYbSgeJn7RVucu3QRMn42Qj1btq41uvY3oHb56jhfbyy26vE",
  "key11": "2bnVkvBWkY7YYJsVG5dXNnEcPW1ab1wrm9WVCue8VALMr3baX9Qmj5aqFwY3B9YR1kV585fMYjjzTJTeGiMtKWwy",
  "key12": "6B47RCQQvBZq4cs3RpPVcdqzCWpQ5VGo4Lk8WKDnFF3Bkpwu1u2rdNbq8BRyi36bxL3ByRaVERNSKahgD9KQ1fy",
  "key13": "3DLzrp7PmtBMKhKqC2vcEWXkkjTdP39wrMGVAASgw4tscdtdQaU5obHFZMSbsgUN7ZqwXt9n3rb8buScz5ijD2GQ",
  "key14": "5FEvP1jBsjvC5ys1JHx72U8FaRk4u69V7K642G44CVdTrTeMGYk3FGPs31JzNjuskwjCrmrq7HmVTBYe9m6S57b1",
  "key15": "5gNqDyG7SLPCGnedwX2QgVHfy2PnKn9st4guHKYa7YqkvpUc7dsxVLyp1QTKLB3XFtyLCMG8ALeh4rRZHAboqsFP",
  "key16": "4X5DvhwZVbpG7FcZ9B1HzauYY3a1gGHQM6nBGKzXuWebKHKmMzaqLjx6Ko1RemTJndgVRyR1W8saHZe1tfaEaGRj",
  "key17": "52DbHKBPg4WzrdjXNvNW1tAyRS6dx9QsMDbCBvV5s4uyBNb9vejEbFNmqe8E3Lzh3Mv7aYVqa4QCx7iuSuj43AT1",
  "key18": "2ikCWx6e9UojSWPfLmzWtpfX5ccvX1NYV5KoL9jC3BaqMm7Zviaw9YKdzpAHzLBsycpVSRP2AeiHvLvkS9Q9ihnm",
  "key19": "5CG1JRsjfKq9S1BfaVtvqy9hUUcWpnvzwwC4HGhBGpQLmrcXnz8ZYcnAKzEEfyaqEz2Y6pqtqFVi3CEJ8asGUzDg",
  "key20": "2jyEHQkPAda2xLNYs4bNCjfmbWmThro9joroKQc84J1cFfvKabvinDsqDNAC6uUHQjADvikbuxWB7ZEbWRGqgHoi",
  "key21": "3nHvECv979p7V7QDMEtYXLKn1pDxm73Nvck5WA5NUo88iKfR4MsGX69EJHpZP15g88bY38qzabqzh3J9CnLfJUD7",
  "key22": "41txs5kwb9dPJbxULRDwcXzN5hDML6BMRU7A4fhmH3i4g2HWFYu5F1oM6f5xXakY2c2y8cBxGzjoBcw9Sy5e7uWE",
  "key23": "5GKhFmQtThJ4YXVPPq2DiFmmJHLN6PZcNXdkac1kPTnCsuy6izUZ8bk52TKgZNZFBJLuGygEQgbTJkD6JVoJmtzx",
  "key24": "BbQFQuzTt6Qbh6EKWNfK18U7kW9xtFUmcQQoSLJH7Q1nmAtLVeYjGbFzdq8qgnJUx8Lvk83nJFw2v2yJyJbimTj",
  "key25": "2mSE3j4Cza1xW9cXUD8Wtsa4o8s3MEU3qdMmaZmXEXUqqhEYXUovT6VshbFxyvXTRz4mehWBz8aRss5JEv3i6umh",
  "key26": "2roRYYZnoaBAKS6GHSi6o2jB9ww1sAVK3w21zdq96X9V5gg3QSeBeB5xGLvGT4q8CRfFcVBxmYHYbN31ayV7dfqJ",
  "key27": "2oi8hKFiZuzVMfsZ9KLD5xVz1oZAgJTTzgNWKbG1x7xp6Lrgvd89G4BmQXKvGURs3GHzbqpGLdDYxKJuwVBc9779",
  "key28": "439tjsJUdsoQLXtij15VKR37nPmPtGLdcMR7z4ZnGpDq1otZxCnz1o5N333JTUEDxiTrbxc4Z9FKHw4vxEYguH2L",
  "key29": "DHjkx8Q69ScyVM4scF5wZ7zCWkSoQ9w2CAnQAUT3uESeB7YY1st3QtYSRxwuEhuacL3iHsVrQFPFHcXS1fW7ik4"
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
