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
    "miriohvZrchXdEC4AUNXB1MYBNVwE9FtvVakd9ZbT4Fo6PVYD9msNJmY1K1Rc49ceiRkH9sVUWHbVVEiVqT6V2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6UXndpJfqpnZtr2S1cadMpXjrLVE8jJugMXroGevKhcEvooJPjaaKR8tZ8tRMbdviX6YvZjYHHJj5sPW17AXYRR",
  "key1": "2jkCm7hfkGKqsMK5CRsSZQUEEKQJHYWkZkGpoy78sR7FuEnVU98mqFHKveaSN7KyHhy5pBcEsojSmicdagNRiemG",
  "key2": "2cJLvq7dAf5vcUC5SG9dVs9VrDhFqoAvw2YAq3qW8GbGYzS2vPfRLg9eKzi7JGtzS6AP6hjQW6ZQ9PWUeDTeLqDQ",
  "key3": "gFLMunmN7GQdM5cpctoVinp4mrkoEpM8JXTfGbHXoGd1NFUtsJprF2s9pq1RGEaFLYSEEF3f6XsLbyutrPCU7gE",
  "key4": "2JGkM8zUWrUwGmdFzMbppT8kcCrh4iCXWTZuDSN6AQiAyffuGG8wTw5WGEsda7PDXEvkpU2ViF7f73vSPzMMDN23",
  "key5": "4pYkQm9rJiAAJ99oj253yMbiASRZqUt6UzoSfVigPu4fevkEofzy3cSesM7VvDFfA2YXT6RDA6jUUT3DFG128pQx",
  "key6": "2JGM5CZApEMLKNWbCqT6GvWBrabyWFV1wKAqcqYLCqGaNjV1aH7unWNPn82HucGQpyyf4SJX5dMArPK1AnrKhN8R",
  "key7": "2d2ks3BAE3bNxAgCTpwFYFTHRquh6bvT5Pe3D2qiaMhMKJerPdpYP2BCBJTDpraPVtPQFy1ddWX8tJNn8M9op6oW",
  "key8": "3LhxWXAqkhinvPW1qjmjZKtuHwD6WxDkvCyhKaGqoEtgY3az6sn5Tdh9uzZ9rXL5SLhHfeFNMT2mVPjEEtsoL51A",
  "key9": "4qxmUMZXRJFQtLg2sh7REc3T6jFyUytkLxh6booVMe76nq5xNg2kL393hfzuhzBpBxRKDy3A1LL4d46a85BMPakx",
  "key10": "4r7Lqshj8aetscEVTrPEqzGvLS47ZAvvC7Bk3buh1uEZoHMvMzWaUA8FEwxjtfipfKydPogVLo7tLZPnP7t5Kobm",
  "key11": "8vx6LUfYwRefRD7rT8dw8Jr2E2YZGNThPaD3yFeKY12C46A2LKhXxMsucYop51nh88aefcefLYzaWJXXKNrW7wu",
  "key12": "3a49xuMbEmn9nRVBVDSv6QHkh331CtKZ2orQ7TdkcHDvjWwPFNuCrrsAvP48NK8523py13yYZfRVopgmfSAp1CS5",
  "key13": "2AT5xcDRXMkCnHPP5A3FXnHkyXf5HwNnPAdFeiL12TGw54q76ZtTKVTG32KVtpmrYJmgLymrfmE5qJ2FwLzbdfq3",
  "key14": "573P91KScTVYpUW1yU5jWKxBQATJ7vFzJVMzwTreEAFrkZy5MT3GK4KLb5htdbkZhVZnCmqDHreRXLbVkGrhy5Jo",
  "key15": "3vKjpKbymTecaaBqSP2VfpJtBL3JkcBVsjFXu2RucSGojcezW4bBZDUViUHZZR1XQhRWqiqG2edfJ4vstEvfJAi2",
  "key16": "62DTqFETVAKv1FqFEmHTc4hQTwJafiqRgPsmQqeaT6fmrnqp4hkSqiFZx8KZfZVWSccyTUfMEbKJH4sp77qBBJ93",
  "key17": "3CTe6TBXJeHpYrwxbFz7JKLqJMwBuedgeqwH6NV7DEKSPefVDDAMMv4RsoNc6TZwzvynHmgEMg3aMjt4LmXoHaab",
  "key18": "2UX1xRUYUJShcEZ5upTMBgn7M7vTtfS6GpWBoQzePUDgjhBvaUWi6E95imBo86UWXcCsoNiozfmA3j7m1WyhiyL4",
  "key19": "4ERKCF1tQncreqjRaJCURu73ck7yirEGDpaaXHtCVNhQ167HR2PoxUZMv5XJHYw8ev4PnfDhXMcfxoU6vfUjQNqT",
  "key20": "2BZj8ZL9J4LmMAw3Gn7GeNY7uJkU1ynbn9Yrkh68Gks5dE4snB34SULHpRxYAQUNkK9pos7RqufEUGLeX4esBCBp",
  "key21": "52TRiwGEqbgx1QwL8ZZGgVoUeVcj9GD7Jy94KyAbMRhBwhcp5mYsZQ3h9QDUuNHd6nf5EYFMiTabZL4YUk5N7yNz",
  "key22": "3Zen5wVMCHssRessiSDrN6TXo2XQ4NdUfnqv1Z2fqNjhA8wuM5bzqQjNDYSBm4GwjviNWgLUojjHidu8nQKrVMG",
  "key23": "3wkDJ9LLJz8M9qQ1hPJdBmmpeNTBA89wt2TEAxdxJcZQvY2qDws6oBZP2j25g7fYv5b5nJ5kfoHyTUU2phU8LxnQ",
  "key24": "3Y4PXmvGnCC2fKhFuJPbh85Aj2CfeaZDkDZf6QBVkvC9ssaTUCYnwS3PZaJS3tn8XLEZ5h5comWkTnssy8mKMypy",
  "key25": "5ct9Yugz6qvKSW3M7r3YfUjd6onQArjDDUixXKBzvU6RomycEC5WHTcMHZSEKB3ThJMJqUxjMzmu8fbtws5gGNc7",
  "key26": "2B99BgCHPR3Shi9Hba1keVrWax8jZMpCA4A8TQPFo5yaiJXP7uv5V4fpgBgiM5kH7tRP6vCSCSnvRHxRLNkj4Xmt",
  "key27": "3MNkUwDAC7zKYuWtuuKN98fo7vJF7awHusZEgkpxNtB8zNcuRfs8zR6FXyyZasrJXP7JYqHsN2sRM9P5nFitALwt",
  "key28": "psXKRBS3hFoWA7WjXp4abVwxj4TrfSvJfANhttwgXmGs7eMRUsSTCZDuci9oXZTWuwXd2GTr5stzxBQXxH4ENpe",
  "key29": "5knpmm8bsnKtNjUvtWu4PmRbXVjrZHnnaz6higgifZwHy3H8BdR251TM6dNkRaRUHxT3mC63MVRef4XbhTqjmhCS",
  "key30": "5CBBMqTXvcpGYA6Zh3fhK4uyEVtA99gYNq66TVKMLkWE4L1xEjZip2sz1BsVwza8jud6DstP9q6xDUtJfQY7f3Zo",
  "key31": "51ARH9Gu1WXcxV3YMmRtjZAqJFyoMbJgASbqcSddcrh5h7yh7WVezTBWULq5PfkYeqmN7iBE7o7RQsjf969S2d63",
  "key32": "5iziscEpsmLs3hvcT6f6qPP8fAisqAhCr781ff2RpZSifLinAA5bGyisPWosiuyxmkH4v8C6CrRNvQD2CnmKWJWG",
  "key33": "uWnoi6QCYzKGSvUDvYcrbPsxn7p4FziCmLSuPpQh6Qwj8op2TsEmVA5eShkG5qRfYhjqmvbpHL8rMqLbzh53mVE",
  "key34": "2phAbSA1N7vsmVEqnVU74z1oR4WEbEZ25wk3pyW81KZbjqqTPBBHhkdTdaqFUJZsQfTxnN8k4ZxdJYfoFDcP9Uso",
  "key35": "4PyxWQS7e9KehELQStmCRNkBSksBLWi9txtFUioWuPiY24KbKh7fVZfUk4P5rugrApdXr5A6dKkB7dju4rZTkHLB",
  "key36": "EVeq3TjtHqXtgKcLhZnTHTDHhuk8ChoLoBYW7hGGj3byCtFykCcKxUWYtF2LGBK9PksXx5z23F1GV31tJCJvAqp",
  "key37": "5DfvVd9kGdcY6WZdEN47T9RMHeAkj18DeZ2MLKdAJ6Ztudfauy4iNfxPctb8RtuLiMH7avBFvE9g3ZARTs3Tadvq",
  "key38": "3H3B4eyaxo7d3T9adPV8UG153DvvCaWvUqw2ZiZHwenkoGGjDGYzDkbkeVZUTF8pjGGJPdThLvSvjBovcE3tQaXH",
  "key39": "7TQoAFVqUbCSAJzM8p3UXtoHpGb41gSa34hZXhEzKPUc2H96h5L8aR1F4PQLfwv7mnCR7K3d7zAw3W5q9TBAzgV",
  "key40": "5EDsfmsX77mfZGRcJWnEMQ3qtk1DZaH6SyHKqd8qkESRDMVwfxGAMW6qsF1VvU9zGt7bdaY97ZarCmdPdatmqNs9",
  "key41": "eJheoSEenpoFyuR37jEhBshhb9vkadYaanLYV6Dd18BoKW4NeYR9zbsnbepCU9kJiHh5ULdz9CRHKKdXEGPoaVz",
  "key42": "4rfLFSAAwSsJB3aCEnvf2KWCwahtvh5j2thyiEbSNjs5cbqm4RBNGU67ym2GTjuMuMhmL133By6Sc8wQJJWtBNby",
  "key43": "oBb91hzPfvVPAuVmLVANWFjBhKJRnDQMjX1Lccoed4FSSvTYLmDd9i6wyYWvEonR5KkpyHgj161gLbGKRwVpjwT",
  "key44": "46mojDXarzjHYaeX6iz4uWYJtpHK7m9Y1jPkZBkzYbqzaiuKVzkqh316qKH2pbcW6F2XNg5qG2asx4xDLxm82t72",
  "key45": "4N3T37QGp2NrzAV87TJAPK7MzkDC969EqjgbUx2qnbJ7X5SXJPAytB8VevQtpVgCukDXKAJt5dEXJbsW1QKesxc4",
  "key46": "4PC2Qv4zELuDkN3Cwg7EEgdaMqfDafULPNGkAws6xt4Mg8VgZ94heuwwJdjMghDB224Bzc4b9GmoLuvez1rxpgZg"
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
