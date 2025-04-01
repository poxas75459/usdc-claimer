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
    "4BDjgbSFcFxLS4uRqmUgfHXX3yjpi2YQqxgGzuWKM5CNa5EYMvvV4qwqKisTKxANXQrhwGCHeDYXdz33n7a9t1pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2khg65hduKBb1JCPBfvk3mbvmjHFA4rDf7fwHhjKQpb2gvGt6VBef6rAXGt7KYDA4RE48kq1ooa2tqFipcPQ8ayP",
  "key1": "65aurbaGnwiSituwHFNrKaugZcxWYa3eAzHGnZidUyqCuC8varbEnxyRkGUFnEdhaiYkwhs9HJC4pfUeTTt47oYf",
  "key2": "2hMLTNzAq3W6iZW9ccKpkTBQeFbEkhbeBMP8hL6P2jvqfjYqLywkEZAFf4To4knQ3uLS7qAiUfo1Qf7uemQpA19p",
  "key3": "42n6JKfFUxwSjAX9MhuDMAiigwTrUjc99gXToBcdpN8NEs6dQufTxf4exSmtieGh2NYuYsmZLMPB3Yhv9eWhoJvf",
  "key4": "4rCoPnBS2h8y8amcnTwqx19okMjpZ7aVKp3thJnEbc5eqS6nFKvQEKiUAQ58DAxBZmShkMcHyQhUWkPpNeBUX5xX",
  "key5": "4BCKskzmL6jiivHr3Lqb7P4HeSfkghJrY29Q4RfGSZaTKu7Ly5fquBnFuVHN4LWG8kyy3bYJPUmLU1V4spz7XAfr",
  "key6": "4Ejaw8cidteHVtisGKdZULy2VH2nrZXE7eHNvLTRJ7iwhEsNf54p97RDEWi3ZkWs48KJ3JbAFFJbEf3BRRXqxTx7",
  "key7": "2rHMvEEHvRn2eMa6ZKcwxdcVezrBaTPqAMxpmiwzZqbbACaqaSGqRi7TPLFTFnyXpLRBoppthoFqWC6LaTvhmY4h",
  "key8": "7Qsn5ETxUtNdMyaaK9Tef73PvVpJQUP3SQM9df7a9Au14gjLPmNM3WP8KJ3UTpSphtg1kguCSRQcuEecfwZgWfg",
  "key9": "5kWmjvUjAVVbqnbXEM2HZTwrLhkiHeqmdWuWZ3ZJDFQdQEd5weG7S6Bx4ZK33YKJFJRCDE5ZisEaJKiaw2VoAxdv",
  "key10": "46EzHXoBLQdofRrfQHG5WCrBsCfNjTze7oVfP2J3kATSndXUmqiUShjJPvHMpiTqq2Krk6Rs5tLeBK9Wy89gLHAe",
  "key11": "3kbgKpyua2yHeqnXv3AAF1TeuaxoJpBaYc9Fo3WBvAYSpFmqaVbFPUmB6U3oK7ZQkU8RhM76wyy9mdQZpq9VidvT",
  "key12": "bv8H9ofuRzvgQJ5UPNTX8Th1LPn1KS1xVsn783AryVhqArTuv8tFSNh9uf8qhG1ACz3EVQbULFcL8irTcBnmNwz",
  "key13": "5f4EFZLUtgLtPa5k2Lswfi4HGCtsUHoNjNrvH1Nbn1s8D513bTqbHQh64LnJxoZpfcACJYV5MNEzgpaR38DppwDX",
  "key14": "mkd4Xmh5m3BgHAVnWs8jcVZsGawt2SgbtyeKJbTvX7mDaVo1SDvKfZTymjue9NmSAwGupwdCqFjsDxVKdGqnWY4",
  "key15": "uLqAQkG5S1Lqv8CmCmu8wfuoYJGjRsLhANwn7W16MNSmLtGp9tou5rsVGAWAsvPkUsrbfc4EhmrCLACwf1KRz6E",
  "key16": "WoFB2ug2TgtZgT9k5CY5iGTy7J2AsGn4mbJ9Rz88TcxcV4y1RT9CZKUcMTvUQqh9k4iJAxbbtMrcD7rx1fYdmQL",
  "key17": "3G7xFg4tamveiTCY6AkFuGKV3BNh9sXbELXgKzr8dYayLzA7chv8HCEGeNiNQqmKRWjCrFnuKjLP4EtpXWjmPAec",
  "key18": "5vqES47jWA8DzzaD89qPfKGpvDKT66J1aDTaVxUkckUJ83bnmFtzagvBsaJR4STri6wtXw3LA9aUuoHoPjwJcewH",
  "key19": "m5pwuHpJLXeefqMuvj9tSieC7dvWQtTZVcCb6sAN3YWswhdZ1Rf5h6vjeDBTPoQ8jFQHhjPRUyAbBKwuwAoWtmL",
  "key20": "3ug4pF9RNGF7x1VpJ5H2Dmu2AoP6cqEEGYdoc4ZFsFRp9hLfThq2BGr3aae4bPbmAJ9pTtgREHXqAbnuzHyiyJsk",
  "key21": "4rEshNu6dBNPHdS8mMdLYCEwksLtjPFH4Pb5paREmkq481vTfLTtazmFMtLzANZwhCV7QDNtmKsbRw6HPBNPSem9",
  "key22": "dsT5GNEHQ7PVixcE1Eqxt5coAzD8DXZG1d7e5u564uNTN3j7z1CnAcwKVnt5qAjpPagrZDRAYDt7fXZ8wJuGSQW",
  "key23": "5BihwpkA5zuYYAL3kcBuoPb3BgLYyN4g7MQ8ZfE7APs1vn9xJkch5iznivZzmcrHHhBnMqFaBZDEGTtbkHxKpKCB",
  "key24": "5B1bE6KHVbgA46j87aQJjmu2dCFzaxS3UoVMtokShmutEdjZdhBAwSVDYeZH9rHfoFaJsNebbuWXdorSaW4SMGL6",
  "key25": "Foo6BfVg13jjvhv9RCeCoFguqdM6Xpt7VGNG1GNzA4bBg1jjpAy2abBfKfG9KxLZqbUqyt5uProrHuU4FCWZDvS",
  "key26": "4EXLxy3dfKaa4R5vTyHc3Tuuer7AXkjVk51yxWvvD39LKmHh9K8xMRLpm4PWYjipEkZZtTLgGYdZrndNgtzbHj4R",
  "key27": "62kzRfFkA8N695KhRzCkYyfGmr5tMvfhhJdMkiR6Q3Hp5i3P3S4hfdQYrQx9tRQB9FeisJEsCT2xJdMfseyd8uom",
  "key28": "5sbbC52zzWde7x2DUAajR1cVucAiDuX1MLAXCwhEoTBq2WcBpACPCr41Z6q1qEVtDLDiMFKf698Ty9umnevNnHku",
  "key29": "aiPMZW9mXSNmwrAWrCZH8EvVWjH96UXPNbbhTJLFoaNmamZXRCqyaAmYMvYPfu2kbKBufUrxjt8JnCqivndhEKk",
  "key30": "3W9HFWE5PL1mLGUiWkirmJAnUokYQsrnCX88zWam7FDb7hARyykHPcYzq8DHmgeaZKZgWzzRPbnvVGeuoWH6avSb",
  "key31": "5A9pwZ5auTzunFz79EUHk3aswbr1NTg7A4k127NhJxizwWFvvXah6rRFY5gz8UoeTRoEtJt4TsWY4WTNZVXPyEtt",
  "key32": "5by1JJceUxbSRihEYeTcApaDkfU7eac9j9aErNnCxWcbtjRbfJxsfuyeFxH7s3AoAhCDVUzTjLb1PheZEED8gyzV",
  "key33": "rwMeSzRjd1da6XB9h9jgUU7pbdACrrPhiF1b13LARKWnNhXNhjtibSEAoLyCacxeLVHefqtKRs1TjzVrL95TJ7M",
  "key34": "2hZhsvfUKgHwbsz4KkgwMqusQQge7nhh8qrEcTXR8o3iwQFzCshWsNJxM4s6rvey3Te77wUFmPqL5TzWi9mGDsNa",
  "key35": "4yEsSadDVue9nuDfz6cihuMs63XSppv6XcXwNU7UvyjufjB21bG3XrVX19aruh3gz5yXFf1gskEvf4EdZa5xmFdd",
  "key36": "NdEXXW6La2Cm59fx94rXxPtMmyLXd4X6AR4BtFDMYKpxZPJKfsZxy5LgtztCuFxhuwmmJtBjU4ShBLju8C6XHC6",
  "key37": "4iPwtE47EjV91X1P8GQinykZdM7dZt7aAaXWYiCbvaDz2KW49S9cBPd2DKFvoiVanHeFLWj7NmQwHZDW6KBq2o6d",
  "key38": "24ptTSFrajBHo6yGweZZEiKdq1b5KM9m4ckG28bDSXkj4DBmT428UiRWXhzTs4DDfxAoPyrFwmp7gr3nnc6WX6jz",
  "key39": "uw7JPKzTUBPb45aRt7c8X5sW4afnenM9QEFqc6eC23ntQWKMdaNRudcJTemH5CGLwc6ACTwz9RqigQUJo1SuLag",
  "key40": "5P2XpPvERTymaPfBNE2aErGR4YmVjJKtbAR65KgKxPeh6Yo5S5FUUqyMJLekWgiJga51Jo9T72s2iZSdCuhGFN2x",
  "key41": "BRsTJMQFH1584vA1LJfE5Qt2ykDJWNiF1uYrXd5NVLCnpEFax2dZfLkJiwiPzX2wUeo7bgZr2wa3xmsh6AcnyL6",
  "key42": "BmspUPxmC4SQfdetrXJc4KezDNqoyZDPZskpjhEYbwWq1C5w9BcDMdSLdq9NrYWY83ZfBZeAJdEy91nhnk8BusC",
  "key43": "ayigegWnXRXmtAHyV6panFjjHa5eyCSup8h6odWVdxn77Fkj5pFsVFGE2iAV4qR8gBEDE83Ddgh5xwYwcdE4BbR",
  "key44": "598Jvmna8mZd6EscaSR3D3z4oUn7ZXMitnNji9TZAEGgYqex7amnp6bZqA33ZaGMH1FwWiVnXxWKC5JahyBPaR8J",
  "key45": "5P17cAMFje8eN1h6rdSuyCGvHmBTkocXC1FHGfSJmqLHxH9DBUAZLwheHEKVSypXny83xpHJayeMaqHGJ64Gpj28",
  "key46": "bJY6o7zdqfEQHGP7D6yQzSqQmUybGvyQmbpAdV9VvANHZfu6Z9KNXA4LeSg9oCr5ThVg8iNU9WRgprkBsW3Q1eJ"
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
