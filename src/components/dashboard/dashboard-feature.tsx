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
    "2hhHzPjDJr5Xd7WqjgPpMFUF1Gg5gvoq5CyZAqCXUVBjSivAwj2dMWSDnX9EVFrDYo4G1SgHtWQ8VFpJdWcBnrUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eumjPj37TUgtJDbCYrhfvLKJgYY6uqG6SmzTY9cMPiabjsLtYJh896N7T93hiVtRZkXTeZjVeZacMSu8cospnXC",
  "key1": "4uLup74Vhv2Rmhq9pw8os2XeS3JpSTWQDRVJ7QTcrcWSxTbRkQdYAFZ75iPdpuBc48K37qvmC6D72JB2vLgh5mbg",
  "key2": "556emqzsyZqGccHpT3FjyEyacE1dRcjnnhtxwR41iWpZRe2iMHpUPJvfEgWRDwq1673BoLCrdXK73XVm1wrX2sUj",
  "key3": "3g7Hn5spFeoxJxcasU3BDB2rVQD7bpXv2RTbvvjabHpHyT8dT6yEFL13zGxbtbiTPLirATbrMgTZJCwoSU4VKXYV",
  "key4": "4osgmya8G9fpTD7gyGqPYArbuiUM5YeNumM1tcY723nmWBKcra8hHLLwPXcZGD61YwdaSo6vrfKAis3Zj1bJLy2H",
  "key5": "4oUpkYnuKbp565Ta7QB4wR6fietJ349Vrp1upbhQuy1cRuR1E6D4wS4KMboKex3MazMYk7mxsvMtaE3dvJwkNKWh",
  "key6": "WazogvDW2XMYnkDkaYkEm1QcLdtwHhv6BYe6XVGsuCR7SPfdgpkdyEg8nnzygPXKKX3LYgwVJmej1N83CRkosut",
  "key7": "58R8cjTHXrnZ3s4Rh7rQX4Ya3tidQT1ySLTXVpVHDLK8CJjd64Zr5DsJBx62w2cf84JznAAQHHo5mHFwup9jVxum",
  "key8": "B8hAUjVug4CMnW7K1LytrKvbAmBcj2zdGF9SDHiQ4MB7LzrvvLk2woF3QUiqV9H8wuuvfTNyurygKYKv4dmzaVS",
  "key9": "2G9q1dpkRqfQkrmoiUbmbgKudwKj8j1KVk6BrdXXCr6LWBdpgme9W7NUrB9vjRRFfTtwKuFus2myv1MSKvEj67TB",
  "key10": "fYgD7P9XDjKKJ7CB7VM8Z1nGk8YeqHnoFUUi4T7WPMUqYTgPzSugcGe2RaK3ZhfgDzc3GK9syLuXb89WHmMpVBL",
  "key11": "24h1MQU8toRJoT7BxBW9agV5fYjrvhquYb9gRuKdSdTsvZNYX9C7wDhZfNiyNC3rJNPKnxnyUMsWUq84L7nHBCGD",
  "key12": "3ZvCZUuSma1KNWNNmuKEgrsk2GhPW6dMA7rxgbo2GGqSLiYNdTNL9hqQjimdp9dkoDJJjw1t2zwpdnVfYPgoVZyc",
  "key13": "4bwwxmkGtwSr7vbLFHDdaK3KLU3ndZC5ye1ss3jQtp7NDNksgGAYmqrxkneBiNinpLXWQfmCS1DDiqjuKzsyj8u5",
  "key14": "3ikDDTqBKDSo7gKroApPrPTCHEthkKUQUK84aEnGaAUSXUJRLkpJvwnDNqi6dp41PudduP6gVKJ3daJTB1Yv1z8z",
  "key15": "AsnWeeaJgbxApFA4R4v4MX5DpVMH2uEaudRqtqQgakvThRBAoUFmLJuwrkX9zukBd9yu8sCE9ywo7mnAsjoFzf8",
  "key16": "43kJ4xQr8qnsWqdbTQBtLz5ooSoqFVyjZop3mgkrDr7ANL2pJ4JdSjTgtSYCKJxfBj7WTARhjyeXsRJkk3P2KJGi",
  "key17": "3eTd6eKJtBYv7h4GTNkzvBvLR4fmkJXsxikt5ub6AcN76sJf8sbzik6EwqiWTx8epk9kK6nvSD8Z9bCpjjVdJVR",
  "key18": "5L4tALf43TcKBUCmZ6qCY74Dv5yBXLQfqQGPVP1LoVhPxtyA717dxJ7ke9SYwzkgvbfFnTXGJGHu5iX9kTa5HJBh",
  "key19": "2bo7msEQ78J8LoKfjxprrvosRQdY88okNSFnM98jGaHP6wxa9aQ7B8StkhYKUMWuardKi2qr9Spr9ibxRvB5d8Ck",
  "key20": "4Nu44pSMAL138hT7VzXV3myf5gyt2v6pXRuqHLhecbYfSeoqtuQLgCjX1dEmAP1nvs1LGXysq2qPZ9Jufp5xNaFc",
  "key21": "Z41DKDb2RsGsQZvaPXDx5Mb7hMCJCX3e96j5onA88V4RPA1tsU6vjjB4nMrrRNBCsCFyR8TBB4E1QNjzvrjKK4M",
  "key22": "5JA5Uc3YfSN8QSev1zLD3funfg2u6QJ2FL64TN1PcdccsNNK8T4C4azAQbTTqQu3YH9yiEfqr8skQW5Qiy9g8UYc",
  "key23": "654PAmN2UrAAttgYkdagxVRDMNgki1SQ2bheC8BEQSq3qtv2cZKoDLfqwLKZk4ohbxhTKs3nD385kJokt4CwZTxo",
  "key24": "3iEigi4MPhMQwy8dU95WS8R9nRNrP77AYiQcxmpPbUS9y9A2Y1Ydp15szeLksrVS6Ekw85xGxdGxHiv6ooo8DUEj",
  "key25": "66g8nFrp5u6D6NGBALiGVPHoEN38BY6tHZPxGAAFSUf3XNxS9Sj1MatnVGaTKXLByUX8wwjtZfaY8GUCFSeVvXzM",
  "key26": "4j15UbV8PbzTHvqwUbn88uZp4c3b4boHPwAVVQCK9hb8rQu9W1szWAsjS7ytnm2ryPWv7rYRuZS78n4CftJXHm1n",
  "key27": "3ZEr6zsDkBnJieaK3qjuTadbJxC3uM3CHcjPnTzn1eUiFDxPJvFtXCikejMR5fMLUAi9jM2zBuWgUKxjRjYHrsfU",
  "key28": "2u6QjMcZEwGuEBS7XqbZfQCUty7XDEjTt6oD13pMqCeVWgCAjud9c7L6cZWwJr2cLnhBmucSQMFBCbUvLrb5iYaF",
  "key29": "5hvoemCaiDmWXWv5C5n4LLcTpDo1cev8ZHcx5zsjzRmPYsngSbTJkTGgDtKGwDgVEuPGCgLTJCScU6Rf2uPgSZeg",
  "key30": "3KPgo5dZgGJYd42kaRmMziXAqgxAqcxWxiUUMHRC7jVzGEFT6CEdGnESLdcxzmNKA7JQT59YaRS3Zgd3Xc8aNbZw",
  "key31": "3gTQaCkCjEasYjL9hWs3F8gKBAuqmWdDZaYS9tJB6sm2r2dPDQbn5pDQvW7ybn6TuP8arUq2g92KAyGxquLVN7hj",
  "key32": "2YYndJbx3L3oPYrbgkxYvoHBXvNMVUMsnmBtqJKKQVzZtkMhoMZuxaeBdwGeH548P1vUJQwcNheXtdRrtHFj6LyW",
  "key33": "2SUBfchnXM3fxviTVngiXgsKCBRcZuCWmuaSR4M8f9cfyzYBL557vkuAefijDSYT7UAJmpX8hpb7quysBVwuEXmC",
  "key34": "2CreH5bcvkqoY8SYAiKUzxbUapdou3m9P8oaBAUgU7kMjx69jZjFmEMRrgpQzPYjzomBuX5tcpivjpG6EePjRaHM",
  "key35": "5JMqqV1FhxU7q2DbAsdEu9vozwq1GrgdSnhww84KRug96gouh1FxRUgirkZZLHBuUH2qNf7eQaLGUFB1Y8zUvhzf",
  "key36": "5WnxBqUK1SBnbGi7DH6U6dcBrwfcfU7uB4r42BeZNjxdKNzYZFVwsWsgdA1PBVPos7V23N7XZGkyE2RQtHDtxLeP",
  "key37": "3Hspbaz45FzjVvv2EUumoVfHBwfNsAxGzBG5KgRNpN4VV7TwNaaxxrAdxNFWmpTV6KhNmqeHJnJS7Zz4RZCUc3VE",
  "key38": "2BDQtoWuWVTCPnAQrZFgwrULxC9cGw8YqZvd2tM9aBos36moibbVNCABMFJJbhJnNc5SZVrERLkJts2pCr5ZSbt9",
  "key39": "57ij9ngNPtJrhPYWNhZ33qHv9z8SBMKq1faLdyD4HP7S3vdgMZcMD1fUfB6UNg6mpnF8CoZmh6fGZA6JRN2F75pb",
  "key40": "2ewTS6eKSC5GrfCB9Q2vQrN3GQfzTAWZ2CYrVRZcpq4NeE2tLor1QphYT1vRGTNzrdkpnC9TjzaUV78wnBYnst76",
  "key41": "5fdDhyE2yjHx9ETxURjAuWFHyS7Yb5xRpMMqJNEbi4QLKbTw1Dq7andpWYRTnbccLDfTjnYL3B63o6fCfLv2wh1U",
  "key42": "5sgM64jGaaovT8E51sagEtYK1xcZEBW2YrAUxN83mpXxh6cfVSBtJrB982bBX24jKCHFB259A3SQeWwZTJ8eHt1Z"
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
