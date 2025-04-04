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
    "45skHtSX7tYqpyrU56BM5nEXdbVo15sKXr9vHDKMYz58rPztqxAHz6u69RoKeLScB891GhSRp4UCHd48eD22SM9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BtSQuqxWEjvutjQ9NQ1FAR3ivcX3SuPReZSvtWpaixnoYUtLoo7xiGUgtoWUY2novCpYCdd76qabRQHa86YzG7L",
  "key1": "4kSgGEnRANP6Kf9Jpas2rrg92DU3KqaQMh7yNd4KRewSU5oo9HbaqmBo9DkHDty5f1duAifWWG9Qm14nbcMUe1nr",
  "key2": "2X9EkdpCiXG16PhvqqHnBhUrec7TusEZqgtuyGKMtpvYJpiCMdUZe9xbvgGin2q1iH4dLSyhPWamSo1Lk5YAJvTJ",
  "key3": "uJJt7kBHmyTQoxmzkg8NTZjZMCcbEbaXdxzwxFfR2e4cEm1fFRcerJrC3Bi4MxAd7sa92zFsnzU2JD7C8HQpqwW",
  "key4": "2QXWtQFSycV3vKn66YQZrcCs7qDaLYLuQWJPSTRboaHeho6heTCnShirtGWtTdKu8PAamTcyheoaAqukSk6T5qof",
  "key5": "Zjh92NZg2NHw8jF24CiWtQtbLbvAiXvQ6kPHo5MpifKwLVru4fM5GYjD45RHEXBWPk3BHHVYpCaY9tGzPTDvxiG",
  "key6": "4X4fY8wJj6WFntzKHpZuRzMVoGoDN58t3JVj2AcAvaGRBjH3UfHivZToYUDPYnwmHM4nycHXxr3wBsNVvX1HnHyy",
  "key7": "2UArTGCoULe7YYyjGsMxFWFHtfvVaPZQxFKEkbSgtCm63PQj49Yh2XJjaT77gkt68omXpitgN2Fk2ypjZUCVMdeb",
  "key8": "QVfsbC3LCW1EZfL3PHEVgRPh1XWVeKMQvJSmdafYpQh1MYzEzkYh8FsUMR8cinMY9nCamsvEau6rHAKNTMbdUnk",
  "key9": "5uS7vYzQ34SQH8W4u21xZbrLnhpkPS9gNzevQ5whbfg2eoZ9CZZfk22LBVQfUyMujD7vFRu7dXzSxZsXn3XKkLZg",
  "key10": "4TJMqDJ6in721rjd2Yxhj4D8YzTxgckWem2wRsHjSH1wdjjJ4ePttvxeYPrib6PVxqJ2MSG8EvJPMYoHn66XXTrg",
  "key11": "3dvSxP6KxQZ7VE36HjAuKpQuDoK8iXA18T9J7iuoMvrUzJfRmLBSXbxRdjfpski12pYRpPYFvoke1kWbYjkET8Xu",
  "key12": "256VybMXMLpSpjHPzZfpY8j51vDsgqV6j24tipiP4UzUQGegi326EKTJdwyzNLx8Ss79N9WVWev3ofSMVccKwZUy",
  "key13": "2bL2iMdrijBDBY5jCYowuv9uwg4ANgHei63si96EuJcTyL5sfxNUFtPjtzwo3wee3o8cR88qTm2ALAQdBw4o3D7E",
  "key14": "4itr9vfXjh1caEdYneY9bywbMQNDQziZm6QJ4SYGAw5JvqJiQop5Db5RneBFUMjS6ZhqKjmPTKNjXaAAZuPEPsAw",
  "key15": "5LFRS3Z4WgECxyDALpr4U1eYar3RE5P9Kn7gjz5KPUox3Cfa3ok24E4vjBhiX8jTNRPNyEYKpGo6XMT7uDX64pTB",
  "key16": "5tHEevTHxfggmwbsvnwYUMyzfC31ocpVhpEWw8tMqxBA9hiV9gxdUVHg2pxacAS5SWiAVbde5iGLvycWDCKZoBkg",
  "key17": "2EoGteGa44az6AcaUaPH7bUYAHcCAL7gmnHmRkQaYe41GkTy2Hx7Xi3wMDiz5Jjn3f1FuJoZpZ1dgDZepiRx14HW",
  "key18": "4JNr6ZMr8omvXBGXujegLAVqj1nfnTXPgzJW9vbprmkqWTBNfXJu6wazDLXv9H3RVstdkcaUEY5Ak3hcV3vJFc2s",
  "key19": "3RpxwNZzJmvf1fH1z2dRkiZS7vf7kadYNdvmbNwsR8iSkQ252LKCrYNDNwBUsAH7FisbPHjNhvTpdjCfztSqJ8S5",
  "key20": "5Lg1z9oDBQZmbRjj3H6n5bQbnj914hX1LLTva6VyoiDtnvFEMVYi5KAzkbZDpzaj8az4eMUXCtogxiDRo7ZAUX1g",
  "key21": "3CdMBr8bTHAPzHVrCzuKrpxZfC8MNjQ2gDGACygiYwpSywGoCVVF5tJCJnwWMx9ZrNRnrKVCk91S5wNkE2L9JxDy",
  "key22": "4KcrzkqRtaeKuMxCmN14dsmUmgt1AMBuyY3oz2tzHgezFBHVBAPeBrT639TYhLVWGcMiNHTRwpghu55B4CKCnWuE",
  "key23": "4dBFtuc429u9TaSdQqFebEvBpPBpnNhYBKgjxWiTw4eB4ZEG3KDqramLgkiGqTEBDiCt6qEkUkuMj8Ky9VQdndsD",
  "key24": "5UUuJSPJsJJSkydLtUfgNtiaquEUZxq3hbK1JwTB9o5yeHWn5DvBDmDpgpNbjBULpCbZ2h12u4o7j3ZEVb3ErV7z",
  "key25": "2HxFRDMPfaQQm7c8pkfuiXbaxwDC2AYZg6e9bwnfVhEsGRKEBJfZbpdRdoGYAWkTezcAAGjAMHV9vrMqJsVCahvT",
  "key26": "ikUN1u8QPAK9o7KXh3ASa9rv43gUUYvqj15ScTK1C3QQfDVC6Nzi6d1BqYp9fCsNYb48VGTYwbwkqY4oVwBToJ6",
  "key27": "2drNFvm1NoRwFfCGQhd8hH2GCBsEJpxX4kZcGSrXzHFt2U4TF4vsxmFYkU4U6vWKxtZop9dfkYTHey7VnWxEaj6z",
  "key28": "DkNez9dRzSqSxNioCyc1vJYfmn8U5L3Ge9nFiVvsuKxfJ8jZ97C7jeGwX5ceE6REwjUUk5RuFp5Ro2UWqTGCLGe",
  "key29": "3iUzHWacziGcQZYzqWoLhoe9qKwPPsDqNWCo8DvowGQ6wP3DymQfCsGaUD1uCJaitb1p74GHYhdy2ZdoStyGjjU5",
  "key30": "4NUDHZdzJry32rap56mCAehyVXQ73fqt4iqESTv6vJZq21mysMxUaGG1VZZ5HfbYe9WR34ZZB54uthhFwFjmwpc9"
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
