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
    "3wWcnNsuTykiYpLnMyoPNeDhjqJ4SkEgwhJSR2KDTBDJfsSaBefgV3qxZkAhGG3NcpCXx9afCdg3C9VjhfgpruSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NzfsSJ26CueFBv4aGyB1cQRCENU4BUTuCVVn6v6a98sC4H4CKELagn3JmDWCdqJKk1EvzR1MBRfe1Rc2htpBn7",
  "key1": "3zXMFSC37wXKE6tAyKUZAUyvuVyq5vuvcKZGYaBhZSxqhKshrQmR2ucw5sQm9C2sLfegJDHbGDJwzxpqoyCVQvVB",
  "key2": "5utZ1AVGTnYiqtRA1VRkoDQVVDri7DxjqHEbvLTf2UmNTUgAn9XxYp6ymYut2XBKDbASwr1SMcFkK9pgzLktN4cd",
  "key3": "2gUJ8ZXBR1nJAP5LU2vLXW34pBuHZKZWVbSqJLvMsCKFYVfYV3QuVUDGArdi588Sp4f2mnBqAmfrNymoeTzVXGw8",
  "key4": "4QHX7Pjpc1NbE3KVjvmT16pAWff2BE74zoY35hojVpzpVyFFtRxdXYWekKkHw4pHvShsrFXzKvpv5owFGv9SNsdC",
  "key5": "5ENTwpeTvc8M5FhGtYnjvBAuHkAKTECQ7bkbSR8ssKuDThFXQjbhHh4E4MjAavMkd75BTvxaUQpozQG76ikJKUHN",
  "key6": "4cD9vZG1r7ADfeTX7bUurA8dhapj4uW9Hwf1TWD1rS5rBthQaY3NMv7kHLvwDyZyGRew2MYJped2upFduSR2WPZV",
  "key7": "4ucL4ou6qFpCzVy6VuVAfLmccFDD6jYDsX7wWwxdRPUwrbvHwpt8XQC2x5cRZG3tkj3ucvn23HmEVc58Y1k4xBo",
  "key8": "4sRe34H1VW1PU7BGousUVqVH7iXMptsLv249D3zujesuyDkiXVeBZ4hGWuyypCwpMUqj69vKXikRPMFWEhk9ZhKt",
  "key9": "YokzERtxDpmmCZcQYLXcbohXZYmjgxLhqVSok9N2bHGXGS93XfpV3LKJpbkyKAXiVMDK2vhQ2edoMzemwFvBjfy",
  "key10": "4UnUNZVNCNQChSZMo3YZTnJoFr6fbpucMMsJZMoFSTb9SmpUqjY9bmhgxfxixV1oro6uMqiG5o9Jom7q46fPRqMV",
  "key11": "XQCuMdBKKoyVM5sQKF8HAFyRzXGYfd1F5EJYVAKuZ1oyW9cSoV9PKUW5rnX8Pqqzp8y7ZoVKspKS6cZmCFaA9qR",
  "key12": "5WhWvD4Rw6FaQny1TdAZ3tvZGarZ854DjEKefGPDeySRzGNv6qLpWFWzwi5oepWiKFYdEukJw58DZeU8Cn1UvwYr",
  "key13": "28qD878NL7Rtqy1Rf25qmSAMGMry1xXEShqF7W9rnU8zdoudFbsMJ2GB3KrvakAEKarBzjtEz3nDPgEkcj4jiLAx",
  "key14": "4Cy2RE3FZBSgPg2mySwuuobR1AqpB8T6H8pQXhHcztpRygWYCUzhisUe1QsMkU6SURQJZ8SdCZ6VVRRLiRXSGLJS",
  "key15": "2TPMfcShXthqHGX13mDMGD5f9Ksn6n4UBzkbqAxbDFo4YiDZBRLc3h2Nsqy9NJJ9CVCuGitgxYeGWo3uyrPQHYN",
  "key16": "4Kws3UjtUW7eWpyccZSWFtS9DXuVTHtumgxgxsfvJJLVMQFkfq1SvCA4saJhcX4fyq9BVpAoHbHxzyHy5Po6YPJD",
  "key17": "28QoWUqKSnjtZ9pddp3dPdAnz9Y5UY9zjJ2fa8971M85rhyWtowChrv95vi7By467WBJULAd55tHJ1XhDKPJ6i1o",
  "key18": "osFzvVm4u2XMwagC4sbPdTqR4zux6FJXaRZ34KQDeRDEQi2uJmepjYCPr2UC5b6W9PXPhHQgCvhYaAvDN9Jy91x",
  "key19": "5UoJDyJrqPC1sbmbQ7CGfYTJyLM8BBMupK2f8uAmim6RyU7qX5SkSFsZYmve8HvcKAXfySyzh1mPaCBqndWnsVAC",
  "key20": "4zLDsmMuYuUhQqLS1c6wKzTL7YHh6fbkqZb4EXDMRXYrDhSiGcj7LxW9bn4Qf5JX3qGN1bVUXBfHTEMiXT6P7LQn",
  "key21": "5a8CuwkrYUdUvfPaVSNMTQgXxpcKHQavWeSLf1YWMfL66FfCStBTaxjVihGqV7Ftv5HLz1Ps7ycLViMMpxRhUrrB",
  "key22": "5yoKiZJZyTUA3Kdz6sKXyhS5mUpJy9G1wN26MV8ujXoDMDWyqR6Gm1Xba1jkpRxXRL9PKNoj72kgSN73mNC9zXVU",
  "key23": "28QgL5YB84rRG1bQdzxBTKFKhVGHchxPitoAcG6xWecPg8VVMMk6tQYUgRvUJk2naouHMm2uKqk1EndxMiWtZoyV",
  "key24": "XDfKbR17xNeYPxLhsBhfQ6B16ifiDT5EVGxtFoMH3bt5VrAvRZw1kkVVPak7sdD2WfLmNTKDK6CbA8DLQWQgzeY",
  "key25": "eZyrxQx94Ff3s1isQCX9ib7bJAX6u8jvb16jEUW1KBYeWQuJZ126Wc8JCffdDPS3HsVUwmAT2RfDvKovarBJAxz",
  "key26": "XsWjRg2TUnW2y7J3qxnj8YuVmwM3pXcF2CWk79qW24cQk3u8ampDbuwrUb1AUfp2g283KKf4rP9gwtWXu1S6RTb",
  "key27": "Qvc7kJsXPHErTCW7rWmCK7QNjtespNapWrTeFidY93eyQAoJupNXoKVUBeBAGSt4je5tuZFQYqWsTcxpmyurCR6"
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
