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
    "4imrQRLbGo6Cx8MRo9dLsQE3P7Kb1Q6eiDuXgRV1LuTJR4kqSfSnAPmNVSsX2oJJD79HaZNoEgy75vG8pnw5pkGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kyZQoTEGMpvd5SXrAu29zfNDWg2ZfQEuyaxDeDcPD95c2zeh7e4cQ62Qe9LKp9EzSptbo3HafwrE92erADNGb9B",
  "key1": "4cauNaMQCQoygpPs5VCebqD9A8da2PbpteUSKN4ckLswUpo389WdfBCRyBznH9Ct2wA1mF22ZhSr1Cz3zbB31VzL",
  "key2": "4yfWveu9dFdVtxpCPyGbSUVsZrpeAXaT15Co4PK88gYF5NyM1TU5qACR27ZQVNBsiyDLz15wEbCCjTQE135TZ5JX",
  "key3": "2i1yTkEHsfCBXjXm4g17GrEX5AvamK7BzzuwtDoJaR6BHog472k8Hjg86UAVfMiJshWnNLycUfi4Ajq1N2k12GrY",
  "key4": "3wi5jaNuVaCHPRa1zYaH5Ws5ni1j1rwsvsnt71k4B6mrRPVG8eof9NbLFR7zQuQPJe1QNMwg8Qnj3q2TbQTCKJJW",
  "key5": "3fP1JrAe1ACqEzLnznK8Tb9sQiNLijzQBpx2J5FNEJGEEBtht2FFyte9K9NMtAQja8MQXc5k9TiN5fLZeBd6kg2E",
  "key6": "444tzv2vXXZa2nLccDZbrsLgcKLDuQnnZ5GHippHkPwUTbxELqcCoWcb2nahytwVjrjJW8iwYzuXscrZxsYRFVVS",
  "key7": "5kqqmkfYouksizXEMRDffPHG54AvB3AHrixfKa3PLbhVHihMSKJXKtat6i7v9r1s4wHKgGsXYUoAqEJbjL3Tj9ey",
  "key8": "4fSnnFCnx2EC6PBkxRaQBafVaSukUKMmQ5q3Fikuswsi9WbnqAtxwaDFoKsoF8kndU2JWA8MqLYLWfTBe1EW5BMV",
  "key9": "37XvL1EbkRhRBWXKCNvZzt7aDn1WM8qUJG8emAt6dAdvqz7WENUPXt4tEdpKYgHQMoXxL1mku4p8cdJGctLPK61n",
  "key10": "25UnoGHnmfzatfoyKdiN32sN5n1EUxVBpPWaSMdXvEskxQGv8FZW5o72CSiitdoGdPgbA7mqJvBMqvg2VgkRTFBf",
  "key11": "JwQLsFtLyx8m3dSvayp8EXiNV9wrEsRCnHaKmuCk7xjwvJzXm4kUuaN49rkaWPr2Wt3eAzWjSdFn1nYnJXSD6bA",
  "key12": "4in82hVug9o7WoUhoHtB2r9TLY2drAmgvkZWkKpGu1rgUY8gkoXt23c1xENWgMeq8wmu57AWTSSx1wuA3Q8B5ZeJ",
  "key13": "2zJzCRXgGRd31h9SBPfUVqy6qUxmYstAbi5orQNuJakrZ5UJ5j7qcs4xKdBfg7jw9gWxSJrj9m2MX7xSkywi97nd",
  "key14": "2KKypUNmuFdzBwjwrTDSCxaX5Dtcbvag4eyzfttXaoupQfWFZot92RbozGRgJFSkj3F1Q67uisgZfq9Pi7VEHgJa",
  "key15": "2poWrcLU7jPPY12LuYpu3eVibKjHBiScvTvY4wFyQLVyxwWSx2D4uWQWquwzLDLHMzVL27wt86b6iaPgY9Lpfs8U",
  "key16": "3H2i1YTA7ox6icGLJY8umbXrqNKGsrZfH4XuuuciPeGLKzQ3BoDp2fK7UeA27j58Y2H6t8xGwS4JYvQFFdTbJV3L",
  "key17": "2UGJ1SuGsozRN8bUmNFUC8NRczxCfFCCzeDbd7NnNUtvEZpcah36jk6mf8RSiJAPL5yZ4Q7p52D7cJ7faiSjCQkm",
  "key18": "3cuxT6wWvZaPZqb7ebW4a9aGKQCeKF53XQX7Trk2rrho4jQY71aVMm4uLvMppbVfP16ypow8iG3hUECZZjj6tkZ9",
  "key19": "4BDmZCkQ9dGou8Txq2cqrevFoSh2HE7YA1brFVQeBAjReYaxpcdkChhTbpV8bhXWdjT7nUumUAPYHDSARxTgJ4Lp",
  "key20": "41Z4LYDH92z5tmoPrFbNVEbddsZ2dn9nVCviz9axeGzBoRCVHxBkJLewKtSewM4No7JmHkjfL9oM3ZVRUfHgL9Eq",
  "key21": "bVcXG6WqXc8N9HA57qbEPZ9LARLypEqMMBWzMhHHjMTfuP9BCFzgJdBgNPSSFPAm7yZJhYBnQPNSDpLoknp3Aar",
  "key22": "43jJUstAthJjJPnCX3ebBZhM368cghkBvMS4fViouMeLZ6ucf9Nt6cWK5DJFwoscuMh5rCMyiTA9CeU2JBw1WNjL",
  "key23": "3r7TMFAV3vjrKxL7AhPfQqkpzZMzgsuQ6qunnGVVW4wHC1tuTP8wds6iXXy1wRwZwnAW5WH2ErTqWeUzH8hnSXWH",
  "key24": "ukK6dW87ShWkqSCNU931YPJpDmjm8rWFWqktvwaCcdTyECn9ASA3encfBPxhzqh7mFcA6KFzxRXjetvka7tsqaM",
  "key25": "4gQGDEtfSuB517PNqJaxDeTocc4vAzAd8DehxvLVVCymGrFi96spx7VVJaAtfHAPWqLi7tqezVYC4SZKkFvcDZba",
  "key26": "5WyfG8vrkNfYfBhdZnzfyWzXwr9RWPerLeNkagBNaeGc5CXtUJqZPquVrrT2EbV5CR3G8sH12R4WEhXEXDwDTXEZ",
  "key27": "61Hwi3Eeb8HKZTukjVDRMwUipZ3MEtcEMNJotG9d6rawBKYnLuuVUGyaUN16vCjuGrMxBcT8CXUPqnrHZ3BSgpVX",
  "key28": "3B4yC7cfkPWrZXumJAQ1N58T5dyjq7xX1Xa4HrzKhzUA4agH6c74WekH7W4YdnSPSQ87ZDFy2egn6jbd8A1yM3p9",
  "key29": "2uTTnx47MAxBbtjnTvPiVLcG5hsY6cfSb2DKdEmjfQ1SCSpZ2UisE25cmtSvnsiuHFkiwTD43BTgHxkjw32C6GrX",
  "key30": "8hkQtxxFqknUnevr2oJS48Uootm9X4dLM4DskYY6iHJTBnRFq6tvBwFop41xxPUgPqn69PuNKAf78AXmgFpdF9w",
  "key31": "4g7QGB5ybgnYSXzTW9DSneQtFtwjFWKJiLd3pVBgjKnbkbtPiuNvUmSmkDEwZnp9xRgFwtHELJbZbqB8He2obEhq",
  "key32": "5N8d9t5kKekYkkV79Jx9832jpQbGYvRvehxxXeKYiod6k6kktD4E3mE3ncU8t2cHvXozfEWnsSuUaPpWyWwssyLM",
  "key33": "1KjNgBx5JfENYoGRLHodedsGseRmqTNy1CfzvLg96T3WHkhAYWuVhqH2gHke6ifv6NSsCThfKjuY25TcwhToWpu",
  "key34": "5TknrJPMmHr5SUJ4jrsMrn1kEsT7EGgcBx7N6Sxc2oYCwQ2UABh7RVU6t1SdQmbkzG98i8rhvt1t5WU9urAb5vAo"
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
