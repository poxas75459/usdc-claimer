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
    "w4igneyc43MdoxFFG5WuiqUkZ1eJEu1acAUYa9NnwAESmvUWmd1BcuGjKtb1XG8tmgECYLG2GnJrpWjSpgwVaEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DdpxDs2GqtyFZxsgHuLRTFQ4YBE6pdbRcSZeg4Vg6CngSbAywTbCgoFjkqEZ8yvTvE3LNXyntun3UKYLkiwv5eC",
  "key1": "3zF18pt61jU2uWNxhqdGkyUrRvBP39CJ36sb8HfXhd5MCzDEaD6cT8k1GXZyjhUsoXmjk9HNPqK8mZquS3HBNPjL",
  "key2": "5tZwkEq2u8oLQVcfUxypu5yCMHmF9fLbc6DTpzPwLZd2jZM45GoKH6sDqhQfiUkrLLq6B6omX3GSoSN84QwmXDW2",
  "key3": "2ATBt6ovog6ekrsQmAes4TeRiMevcRmTSbeqxVnMZzBJ4TSb7hN9fX5wBfmtb3ksNSQb8TepFA8cP5Snsi4oXR7Z",
  "key4": "49cxjcUhJz29p64ZmGdpaYSL3qfcRJRySAXk6Q4KSzRNC8PDwrh7j2urvsYw2TiWr5kPmUbQaAj1JLnSXzqKRF2F",
  "key5": "4kDf6qaKDmg3zRVtv4gVYcQNjf8UBHhNiWwW6UehwXCkqYQXHHg7LNymq7VgnKZnbWFJLCySBxDjF1s15nThLCMS",
  "key6": "4Dk6urQFm8n8rjXnbnh69rDRfbB9PG1ysH1eJKmkMTAXdssWmMVucBAkx4y3vzSR6oSfJHpYTP5Ri2w6JzGHabQE",
  "key7": "3TuCaJnVzZ1gHgDgRAJeEL4CTbdX9grDTqdods6LX3Cr25NBmPPwBj41TPbCUhdn79nuiFbThbS75WU5oZVwkeXq",
  "key8": "4mdJYmuKLHyUdUp5N6GGi3SEyEvkuSTFdF5CRF43BYUwvGkgXqmbgHLyw51sG6ygsNVKM9WoZqsS2kuS6m13bGcy",
  "key9": "44zswEUzr1A1mKE8RMY5cQWvbJfKWTrM9D6j37EwZwFVsVDGrP6cjKNPjUnp9Y9VwKHSdGytuVnFyEtv5w7XpP8t",
  "key10": "2juDGGxP7gDP1sEVdHvUZS9Qsm4xtEiocEyi6rqhTxQhG2qUmoMCSuqtUQmLAKPad6aU6CaeRhB3nLsNgzMAY8ZM",
  "key11": "2JaCgT1aLgDV66E5XziKZ4ZHEJUmysVHTWvNt4bh1pmUB48x7rhWUsm1QZFSN2JkoHi7t9v2QwVYoT1uhfCeCEGQ",
  "key12": "31bu1RSSF3g3YmXcGUVQVUYHsWFkUf2mosweQi69xuBewaUSw8jNuAPj1JYErNWQjUr1VL8XHcPtRdJWEoG5cnY8",
  "key13": "4wB83xg5288a3DScLpD8trQ1k79SKnnzJb6SahSzVWDJVqN57nFQzWQfc5tijAmsjd5FGU5iidhBCPJtniQbSxXJ",
  "key14": "R5gedBn1xRxnoy5KUExgopAvNUN7U1ewuC55AAwEMFBVuJaqSPEVTAGkoJFUKVdALxwHpPLXp4UGQf3KjK5DHf1",
  "key15": "44wkUXnzNkt7eihxSn1XLG5xPX4xJf56qAAiKzWiN26A4xEhfXeuQNHxvxXnM4dNU3PuGLvR21rsrdJ52M76eiYy",
  "key16": "56Q5ohB1kNanNA6UaT7xAoU8HR6iXSLR7j5EvVD25nY9Ugh8UE23cLDjgJs7ghCYnBftw1wDwrm1m1QUgssS2KQ",
  "key17": "4N2yHUh3WHZxoBragGJmxSPd7tEuRzR7pJUy21Hg2yoEZLXRCxbripHSeTzUUr2oUbWTym5r9kuEEiSYNe1FrsA6",
  "key18": "455XLRGpqzP77c5c7iUpEUJRrRD4VBAjb22Zc7kKhi1YT4EEEwJ4bLKnYUJZFwXzS9xQz6qgNNJs7Du22zep14vV",
  "key19": "4JTYmy8QFtCvSGUDEEtCqVRoT8u4ibFRn6yjUEbRttZxCEog8Ua2P6ztnDy4cVBbdKCJ27hvAANLxBCVcqLPdGfH",
  "key20": "3fPknVjN4ej5mvxYWrsMcE8UmTbZW5Gm69sL27mkUtsC2Q9KAcL1dtzP1vHbdsJ4CMmxqozXz1UTsbCFjFkxWhFR",
  "key21": "m1AdiKFMK9723L5F7H7LXJNztbWD4HGA2VZwbsBoVwwDFnBw2YHMLSFbgtxLgbULnC2qhbQrzgQ1dGQZYod4FFv",
  "key22": "AXirph2WsATfTDzf4sUdvDRLKa6aVGqAhFQSkNYJGWRotMo8KjZkivq8cwWxJAaJ8UHZQre5MeecHFNf8DWkSve",
  "key23": "3SVmxCjMs2XkNnPSa63k9ht9SqNGuQ7Dv9vsBgKx4yziukAEjL5SGPtzagx8QCYQPvPs7YfCwiwc9poGmcW4UmpW",
  "key24": "4rHXXJWgFnNGyApWtVLtjoxUXEEmm5ktE5z9g23gHcyKfUkB6bcjy4VsrY6GZzHpac9L6tY7kjpkbUvwNRfhgtbc",
  "key25": "kp9JMUbZgM6g6n3X3GcfAWJkCx9KdE6ihQWiEntGzZLsiBzFwwjs7EK8iLm1qmTBpMjNZELcxsniK7LowPHHwen",
  "key26": "4rWrHoi7HAhqizMtThfjPGLMWGwTPNpTHvL3UMeHEnosN7c1vpu2uvmTNe7SPG4co1FKqYTRRG9Th6TvL4FPXkyW",
  "key27": "2xq6adosrGJ6V6LPuYrvdrWWvj6urUSKK9PsjHMbHxwmSWwPk6hCFtAKXo1m567uM46y1wbd4fdAeNGbVfMyv8sq",
  "key28": "4EEoTWYfGARBmY3Nj8v9L3eicPkPK5nZvqR3gPH7rYiHhzpwBJaW2x54nzTDuYhVF3g6U1sUY5rB21Sv3hTC6V1P",
  "key29": "3aHktp9W6p9uaDM23E8hgxkK8hNhawXp47ZEU3TBEThuqreKTp4s8m8qEYLV8yjihxKTfEY32qz27tJFbLaPJqDc",
  "key30": "2yqjnAhnuwGi2inrg8yLTfxzXWfPMV2gmcSovhD4MpbinTwtesUxiupRYn6oqz7TujYADbLKC5Cmgk5U3Sx2j8qD",
  "key31": "5YBnL2zycB32hFfh14zKn5bVuXm66u6L6GtVV7vVkw8CqwmSZNH2F3XsTiu8FDdhchLwM3ra1jGFsrQUmSH6bXR2",
  "key32": "bf9SBVdxGdtGoPjsV6K14d4oLM79yA9yGoa7AuevrvtbdPQ6GpcCPshRurfiZuPVhfG25zpAc6k8gNNVjTzDJou",
  "key33": "2HKLvddmARGTWFoo8mDZpUd6p3tkSuW8uS9ByP9VH5ssANtpeMafjwuYfJz5dk3LEvAw1aQkKtnYiPDTAk2kPazJ",
  "key34": "3XNhciEQak5r6HXSrJbAr8LFxknGFXfVv6AknECqKrtpD31tdTxeVArF6JZoZ3zErzDjukXb8UpjGqqWpoQge9RN",
  "key35": "2KC2TMq9Y2UQ8k1Yqp4tvKUXpj5ZgMAunrkunAcPrcWJP2ZCjEWFprmDBKUHBsq1VgxSNwNTarX4BpFP57H8pRZn",
  "key36": "2vKykT2LNqSNt9kP1WyGCNkhQWCdAUGDpn9kyFUdnNvgr7jt4EKAFHuJ22APaG8xFfAnynQAFEih5kQZSNJnb9Ay",
  "key37": "XUMqnMqzqC3kfwomvRCaiwk1S7n4TgKcJvfPR64TUShqM77oNpYbDQaE5Zr6FUHEKP3Q5mdQzvuLQK41PQpeVgL",
  "key38": "2CsR7ZCVEWUTTiR5U1ZvnwSfCqsYX6XDnvxdAH7qUHggsatnUwBq9As85BCXnJhmPpyrnvHTeskzVeC1sd877wHW",
  "key39": "4mMNnBNrmuz7oSLnTen7gmSAtTozipqQFrRhe1uXria8UKe9dQBNmEptT758Cemb84jbEzsrAtkZDrcmM8oFPxJV",
  "key40": "RbHMtLQ3U3ZANRJDL13v2txzLmiyXXbvn3YMkxnogMXCn4KbBo7azcBoSMCZNGD6feqq9JcFKHCNe3yJF4YB52J",
  "key41": "5ETxcLrM1o3wvySA4yE47toZyF8GduvQHkbWXa5iD53Lo8eCPbb8X3toEWu2CMDAkoq6Au8B9g9m9LHtXAjSXacE",
  "key42": "612NR2U7b4ZnJRbxtT3XTWSu8xswbsf1cqbhK3n823W3sxC9G32cTAL8NeX9iAeGystQxgAUyz4bGhfGBwAg4CDK",
  "key43": "4LFL1gu5Df1vnAwZFf6B9nHJRibgoMkuPyU6Wnht1dQTcfpEQ1T6vdNGv7NLngC1Uyq4vbpmxUWkq8J37aWPYvMQ",
  "key44": "5eKtsk2aF6LnVi5Tq6R8GuZhmrGMmXDT2yo3j7rXcngdoHUTGALo2etXTpSg6GPv5HW1dif1hYA6J6LWgtSQEhBQ",
  "key45": "2ypywX1LJda1MFRZm4M9aQJZoW5QsHzv8VicYKqX6RRap9MNkY1Hcns9bW8ZEJbimPKFHpSNfXR1RxxUskAjKFhG"
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
