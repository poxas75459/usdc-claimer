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
    "3TmcHy8Bfb2Wtt381d8HyhYuJsuKDw47u6wuZ3Gj57HXXGYQqXmFVstU19feSnQ2bMf9FHuHr81MaDjFg7S1NNY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4imSfVChm3rATFvfuXkMHosGrUcfba8wm3DaqbpqrCdY68iv7AQaBHmzchegCW8N7SyLmQR92NftxuQco7mHeMqe",
  "key1": "4CKqKfcCeHgWA8B8QcGaxhjsXnK4srMmwGKf8G9ZmqdKqG7y4Xo4JJYirqj2GuG5tFiwpr4HCGEgd6CNFkqbq8GS",
  "key2": "4C9bid5eNyHvHXJ6DMthVRM3VP2mBB7WxMSLYYgPyyPinY2ky1asEgbfavQKFAR1ey1h5L9takvshJUGiuN5qqkN",
  "key3": "4f1B12257fF8Jc34CFii9iRVjkKptENyMbHvn6D8JVjKvqhxXz5QCsnUc2Q4JSFcF3NefTfsvMWr1Kpcq2PA6eSq",
  "key4": "zXVy3YhJ2BjBxSXUmCijwNy6rGKkCU9v7CHCzaHtE3uAjYdLxvmK2nAeMfYuEqWxHmthb1u3yZ6kjkaBEw2oSrQ",
  "key5": "3UgNp9PJe9t7vjCvKcSfmPxbJ199W4uHgPJKFkCfurnAhsa1M2EqmVgERds7gcQtTW8mHtWE2ZL2HR59YVuEo2tu",
  "key6": "36Ss3BHaYWXrwsjqKZspna8EyRBNGXERH7q2Aj1tNFs7CfPGSuX3SiL4QE6PcB9wxVf89wFFL9nJGBhHNhdwyhrS",
  "key7": "3TFYgZMoNXVN7GFxgiE9Px6BS2QzokHPw2TR7QHWxdqEQohkwRYkzug284dzYeuDJRLGKunGQFVgt4aKKwgLQhyB",
  "key8": "ZREY9jg8gaQQZnrkaWyuz79pM2UuGccZGPFh5BRnY423DSAGvkUJoRU9H4aRBVrJCChvba7TKv6RsmcrSqfQijW",
  "key9": "2pk3EwFboRZJyTEAZWPuZBjwgWHwBWnnK4Ua7WN897m497eSmgwwUN3hFAiNnPKUt4cgyVQPmxB3JsH5BJGGko2S",
  "key10": "3cqYqKAEu2kEVGKkMQ7tKNLKFgfRkSZNh9gp5Sw3VmMqSu3akdVedRpt33sk7TjykEhHEnzVcXJ7n24oGhXqriPa",
  "key11": "58QfkNRomYomFLXAs9LjTSv3Ht4mH55pbFrByJ7GFtzYPFmLjPRykvBs7FdpXvx17qhjJUqwXeU4X79scmFecWM3",
  "key12": "3FWtwHSRCeXz9618jKSgyKvV8xhrKadxV9Px7Z7CpjW9jeKvvZtoZRGmMiTEeAov5UH1AMUF61nm5F2xQaLNNcDU",
  "key13": "5NwzBvdrhCUDJnQuxfNxt79UWagQViEbYUfaFDVKM4dPhLXxtbhk1GoYgkukrD9f1bELN43wCb4TztXkkZqXvEW7",
  "key14": "5o4GsiiZogZaH4WtE4gSeYiW88UBm9ZBVKniFh24x5NriB7CPeRokRi7smhnCynetPmRZMcrkoWJNnxeCbFx7oJa",
  "key15": "2y4pzNBEMgoqM8cLhBG7erbjxeQw4HqDspdMXgnFgyteXLaSRRbz8zWwhawvWQTGSZJinoRpoU5tcBUdGi5kopDG",
  "key16": "3naVRhGYGWm91hbJBDTAQ4NhMPQaj58EXSfpfcdwMXrKVtra6CtXYwDUP94A9MzdTUzm5mzaQSgerkiRvXAwA3nR",
  "key17": "4moeqdLAZEK1W44mBu69uSD32b7djs7u2sZMGCLehbDrudMsAZrzDE4QeL4Em74MVrUhEAYydD2gyJiZEVquVSmp",
  "key18": "4LUQ52STTrh2ocxaSBinGxZcaeVBbn145spwWi4Bn2Ne7EnqpLQyAgsSjDXy83xH9siuoSrYndgm121jAjxfP2Eo",
  "key19": "4kV2QxWcWJzVrVSt3GyGEeTXzRRUaohBfxk4YmeeA24boD5Qj5d1vKiBiFiEtphk4A9MTVab2Nvj8Gxkofcz6bGK",
  "key20": "ZYZQp2Ccp3PKiCo3zKjW3Cvn3GdK7RtjxmnB4VAWrMEWn1ovj7twyEyHazvjGpQAwaGvbrbV3xhuQvJELWkuhWE",
  "key21": "2rc1Lywi44Z9qiZ2M1y11KVvuuWajbPhYSeEgy3T73D8KSY5q5oPz5NBoYYAhmish3gUnBjk9JJ2ZRRuDvaHXTm5",
  "key22": "2JwL3UP5fHcwvA7TdcnzDBMqyjQppMGBcmMzCBbQo7GerfpGNyaSNPp2YK934jJ8tBecRpj4vCxgDqgDo3Sk7aNn",
  "key23": "jnbJT8Wett8iFkdNSZPWEHh4kAZhDKpkZP73DXwfFZZsN4Kw7aMDdTpaL2EAHYgeQFcWBYJcmU5L5JPzS2gtjFi",
  "key24": "k9SZdgyXj7qrpwvJTD7fyDWJYqr5nNzpyXit1FM4w4HWh2zYMQYWGbV257pjM7cA11dxesx9a3Zwv1Th9QXurPq",
  "key25": "4NkgTnP67KF9qf38db17yTGhhoun7yup8rjpVJHNz3k5sAA5HgZ96MGb2JLsCKgPqATcZ2HFGJ4T32mqBArcWyd6",
  "key26": "5hFV9q5i9WT85UomBW5HYS5oaYwxY1C3R97xUQFZwKztTEAQ3DPbQ1n8oDsLjKAszZ6pAtUXawSrUuaNs6eH11eJ"
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
