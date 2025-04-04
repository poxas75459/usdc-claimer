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
    "5VpRkh7P9kGht4xmQ7HgcK3nmjytBxKjkAzHrU3eLeQcAtqYzvuoHWSx8MMen9B3G8CD3zRjRY53KpvUe2NAcEmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qkcWJdbWUsCRbEwWQs5uJmKdvpMwAvvapAP5ynFJoLuFk3bDS1wuLgXFmHPyVz6hZCL88EJ7Gx9ApMHhgfuuqMd",
  "key1": "4abaH6eKFr5aL8usajNTxUhVQ9y7rkpg81MjN8rYgmfgzPx46Vy7mRpgNNF8hrSRdU16jv3TsU88uBzv72rzp9Xz",
  "key2": "3doyUVpCaGj8hAekeu81gA2QXvwxmDys37uJzK6zdeqeBKfN6tRa8fcEJgXZ4hqaByeSa2d8DtfXedCMvQkddJzz",
  "key3": "5YSJPhC7k8sNWemWMXC9twJnDhyMRxr3EMcFD6qVqiuc5PsinjgsbZQm1VKaixgbDLL3n9DQTSRRSUkM593YiC68",
  "key4": "2fnNtiYLepSvDovTBnGvJGijNjoX4JQgqu1ARB7toWW1eLk8umhh9WpBXDb6nQTd9aqVqJe83YgBBXKacsgBDZFw",
  "key5": "3PrhAG9oR8Loh5vv7E2AgBs5MHLTCzk8DDPTyHVSq3Z9PDwt1UyyQ1FTYXuhGEZY3ARWSuAeMSbspZLXjVZYTAnJ",
  "key6": "gjcz5XvQQnF1vfSDouS2USGXW9pnUskFykFyQsvePPJRF9o5CMyLQErjReYFypxvLDxoG41rDqpjVGmbJ6qfD5T",
  "key7": "UF3h46MEn5u5rPR1KpkXuPELbPaeRuVLXj2Mw6Lis4qsrsp8f8dVRaAgJ1XqAKesppUdTrcrPoBznWBdiTy5jvT",
  "key8": "2HS6vZ4BvTMR4HfNyNCTCHzS7XGQgZzfGHsK4LE2Sdy73CT3CMaQyht15AHQkx5rPXyeWBRytvhrAV4gAZUmWZBh",
  "key9": "56HfWr2zRSwPoY9nuuzdhf8qRwcxYBdtkHTBG1LShhpRcZfnuju5eELryiQmjha8MZtN8f1qEXAKRsjVVf7VrqYH",
  "key10": "4b5LH8oNymms996eXVFAf8s5HpjN3c9DTFF24rrwbav2jnS2xxVeBnx92eJYgtQjo66ZKHwT3NKo71j8M6Tr9F7i",
  "key11": "2y4Kgg6i4JoiNzW4WcJqcSLyDVnaf62SdNCEAstRW3r6h6U5tqMhBkL87thpi4nhCJpA3RXZWU4SJVVyB3t1u1Um",
  "key12": "yzZFwqunxsDkKPrUqds3Gy9PQPq2brncV4m7MqAXmQhACDv2RrMhMUHzGnxkxzeBCaL854h8MxYLHVeLpnGuqBs",
  "key13": "41qEbYzexpMGaXRBf23bkFdXDB5h8gS7EeDd49XjvacuxyFn9iycGauoLjKdixzkEuaEMMFRL7ncSH6ToPDgac9U",
  "key14": "H9aAwsSibnte8WYtD7TBukrkKpp7x8Wtwfc9Hb5NQoWiQKp7bgQVxpTSEExn8yvivp4c8EAFN2e1b4V9mN355EY",
  "key15": "21vo4JpMubiZTFLkf5Yt92LwzrC2HaftZxpjgf8TxVC5egU3N5uKkqaPFvRMDT6RdrmdWc4ZDq7jYbMmVosE2BNV",
  "key16": "3saQGHxAq7YWYTQnLbL1qe4URUbp8crCzccUuMzDvetu4tK3rW4wx6vUWjVEkoiiLfDACndLoM57sqq3rrVnMw2T",
  "key17": "3Z3bEmm8T32c8G9dztx9deJ3zmhsxBWZLRZDXPvvFRaQGmA9mcieA2MC6TQm8N46JeuG7snkhpZvCmDerdKwLCoo",
  "key18": "3hq3hN2iYgcdQNgkrrrTnu346ifdZS3R8F7BCi49wpn6m7Hziqyy6HfVQthLxUSsYZMh3WaxRSvjJingZCeoNqd2",
  "key19": "RSGMMotXoQe5jvrB8zGNuZDo5nBvhrJ3sZCvpKyxSotoGvVxhwAUPsioDMbPkCiS9Zk899GtNe9dMrZTGbYjwjq",
  "key20": "3U6QF59nb2fA6zBG4tQLyauGczqydKk894bPq7GFFw7qgkq8bWP6hcgRiBs3AXi3W2mVJat6rmzqu94qnxRbiPfc",
  "key21": "2YvvssL6AC7TF3HHeXnHuFWEhXgszgUSu6URcMSZH6MsKCGtd2RZgbGZ6uAnuQ2jTpZWUMJk14fHqgG8ph7SZf2e",
  "key22": "mYhsrzM5fdhG4HsREcjazNn6V4X83KPYVuBCxVZV4EqYebkzECLnZJqtCuBfteKuBBmLMGRtfWSG3Q25SNRLdCt",
  "key23": "2C7cTFdKcHbehaim8EGim4kWg589SriFHKx5snRHd1GSwdQPk831qmGP1vvhk9UTtdrvEaV87nVsnhZodoQx37LF",
  "key24": "5q1moKNoq1HRiPSXSFkHyyinGqZSxAQmYeyWpChuCvoYKQTV28BA668WCV7DnLrPE3d6S5fJgXtocrjczFt4fYx6",
  "key25": "4knv52c98tiBcged1rRYNDuRURgdpaVrvjBXi71xs96KVmto8SvN6QbnmfBb8QX8Xkkd9svcRU1oKCSjyFZ2bQQ4",
  "key26": "5QKL29zuCNWSHWyNzF5EGwiL4Zsyj94YDiUvY9JK3pCXSUQWxwyiYbdaUsp2tvpkkySu8gLr2r1nKdiSWLumUh4C",
  "key27": "5rie4aM7dURw1iUxPgiwpmndTLfxy9GyH4FiKrprJTybZucJ85ah3FD1767bjPMrRx559JpjKchLwTV3ayVMy3yw",
  "key28": "HSKmszpxaPUUTtqyyzyMPTdsroocgrJAEd2x1jfWFmkV3XRavS6mc1WwATAQQAhHyt2RtAuBfFyiyURe3HuNcB8",
  "key29": "5VsHw59kvmwKn8J4r5udYnsviuqHwifyGRBEotAYr7GPpwNRvQ3ikUqMJEFH3LJWRvasUQRqeX93hFU3JikD1q5y",
  "key30": "4jscPn9G92MZU9kupmA9Ns5ug1G87pV9vkULygyaJbCys1SXeTwDVwJoD96yobkVopKSJLQWhxkFDTPfabfKZZDm",
  "key31": "5nBfFFPoQhAZ3HCnj1UL5MiR624uYn2tviR5cDZGozQq5EbVu1RBQfaewwvP6HZzVcsD3RZmVryhiysk2kwPTYRK",
  "key32": "2oEAJPEwhMw5qH77Pefet2zPLWWjGLaAVvFVthZtnWchmhd1Z26Abb6u954V7mCk7iRb9Jk1AcCH9e27pfAk2SaK"
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
