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
    "3fEqroMu64R8mvnCBX4y5dCcg8jgiiHQiqZvpeZ663D7ChWkMeCLBnKxEp85HbLd6m5ASYmPu7tXhSipbFp1QwdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FSJjzyNAAjns4BPv35x7X4awjwSYxjWymoRnQ4kqfcUqW59HJ7gLFMV8MCnbq5vZorBmc4xfZUkZNQTrw2nZFfv",
  "key1": "uwBHBJBubMMj2b46FYfERHRoxaRuLB2zzj83EALyk7o7rE355CCvxyL53FuFto6X34RUTqyeGpC3Q5wPt17NwWN",
  "key2": "34tTmAVEJX83JD5YNwUnJdtZahczGw6cH2Hf8JZb4qxDydktrXcKPD8VGGpEGwyQsVidvCPh4dJUXYB4pwTvWFkJ",
  "key3": "2n1Yb2ykTJfxfUsWFTZaEDcjSEC6pmErZo4H2yCauEG2KoHA71RLfBecvpYJ87SbhKCFWdDARDC22F4UdzpFgwR5",
  "key4": "4LpQn7sEF2Ki9xjrZXc8HVZXZttxem6fDD7BYhKXqxERht6876QKJACu7u5UgzDH1tPVzwoZsSmZEnTne83dEx5U",
  "key5": "WHn99FUJpHTCg8y6MEUiP3JqBNwz143ibY8VPXJk7p8h2MtGJQfLFskctxdcCPZFfR4PgTeVXRBbMbvdGyS8epj",
  "key6": "3T8YdXUmeEcCR83cHk3LaeDhNX6vCiijBrp6U7YvnZuo9u154C5kyQwaR6KkUdq8bBixmBCmgdvLXm7Qs2MLWhTN",
  "key7": "4EWL7G4W5ytPZ9oZXwkUsWvMEH75F1bnQAYywcSbi15hrNYAH1h6LNpaWn9pj64k6uMvSXKQbD6v91754u4GSo4c",
  "key8": "aJLksL17UXXpws1R1Q1DcBdZaNFKyBu7HZkfGSkCbGFWWUJeX9xjRED9mYxbJSqq7YWuV6hbEu92qk8D9tLKJhf",
  "key9": "3mZ2fKc8mmYtoZzz6GhJrgVaorT6r7P3JU66CsyxzDm17idmoj4JGJWGK3qeSiACZ3mt1tTDPJmAYmkDf1jtpqgz",
  "key10": "3URkUVpqNfX4J9yGpeXwP5q6ZxLecuvYQqb2MvQDSmRNvEapvE7uVZeJyQUh1yP3vDwmeoZv6v7hQ6ijfdRK4ip2",
  "key11": "3XUzJsqAGvjmYVhH3HA4kGsVDV1jKewJ8PQsxW1GAkKUKMX48pJsM3VWePVQAickLhRCjgLrQRFWJnBc1YFpE4PG",
  "key12": "544nizHFLtfcFJsMvVbWGyqUzUqHUJm73YDLphrqp9M5iR4QFacYyAksigxXP31zMLMPsk72vpK4P3pYKvnTs2i3",
  "key13": "4KJP8YfSM6boW97FJd9yQqftKKM6usB9sAb6Z77R3SDoupd6kt3q9PgbKtRXjF9YiG9kuqnzpv4tpTF3BaLNm72i",
  "key14": "2tzp8j8GbKekgvR3Nrc8TY2jkmSSQVqpDqQmP8Y2K8ovsy7633bamiagkU7xz5wQ7wRhBViZMjctX26oaNZ67tzi",
  "key15": "48k74QNn6E6UDMrj6YgnBu4sTWNDYYc1dzDKWKnGKSDGQpskbNgJ4zZbRac3tZ4i77t9cNpmzDfeEZh4pQBwhUrg",
  "key16": "3JNF5LCDirjip5FZqeMQM8Juj2q1JRwTB3KUPwVJHqXU9bezR3AAdQKYeXAdQY9vX7KAuXkji4D5Puh9NCVxuUbx",
  "key17": "5fPijqRVnwEnZwmQt9uan6PmEte9SvHAxZGr5sseLSk7rEUBuuA4msat8fDkg4zpd8gzUX112LG4aP6bXfzua6aw",
  "key18": "5UZN1FoCuFYAWUAP1yd2SjwN9hsGZVUFEbwCYM3Ncy2VXe5Dahhvx4w5oJj3GXfgefqinBNuMSV9mfYoFtZeQTjr",
  "key19": "4zsE9rTPTKiLPeef92guyWnmL4YVV96Ht3ppeRVwEFj1tG73oGXvh4nLJX5PuWh58NZAFjxHQk86RyvEV9WeQyZC",
  "key20": "4SxgwFHf2qSsmdhj1bygo9TLCms5zkRGu6kYUrAESiMw6rGHzHkgzEya6oxv9ebeYxsSyjockEkpAYmCB6Fpnj2q",
  "key21": "2XhvYNUiYYRbc4hAn88EBdzNN5XqTbiqFKv33Pd16deP2y89DEpNw3L8F4ohk8YfNTfmwtLC4V3hD1DtAawMV9KP",
  "key22": "3TNXJ4iN9Y82FgeW68VrPweS6q2AvQWV1ghHf8QcbTXhT73nDaLMN8rxPr9zaFzHN1QfL8gJWxnV3XuLv6CzYqTd",
  "key23": "2MP3ZCjCUSfSWHca8h7rb5gGSwNLvWsqoBUVj7jayYaandN7g1KVo9jXzchsy3RFgJi6TKzZbe6GCrg9wfwEoCBm",
  "key24": "4pVEQ9F1CornyhK53a57gSNtFFf9WhTJLz5Sk28LCzXjtpNjYKVFN1qWZmGTUTL59MEn1yA2taAT9q68rT576aNZ",
  "key25": "HQvJdU61iSimsY5Bdp8wEL28TYieoL44x43jbbHRqYvtDh9JvbYaDYL1r64DaUHobJx9R42K2SQ51afTr8BEesi",
  "key26": "4vaQi3Rkdn4N3VbhLgucf387ABVtmXyZ5jJBUo38sX7vwWMsRnBBYmwSQRe5S3t93MAYcQ168gurpzgNDxdh4Zov",
  "key27": "5NnxMoDnLYDji9HRrvLz3FXa38R8LQ3PdWsxGt91tvirfcbx4wNbgJcNp8WkXaNTSxnw3YF41ri9dSJg6i2bwTQg",
  "key28": "cp29Hq4HoiVDUm5xMtd7y3hSECsRMfcgmoq8SugMbziNWds4R3TC7aYRtwH58P88LgASRFhUCToJS2MUsFWfRmX",
  "key29": "34heTqt27xy32tmvN7FhbNTjoGoBsetjAvVsNuA3qwqVuakYfJy8fuGMztqxMpDBMxboSU5LBwhKXJFKqWjC8Egc",
  "key30": "2J21NcV8jGhYn61jEgPTr3wQXBnUR2dN2k1DmouxKAgvag7WiSevtC5wY2v3x2c5cvgEu8vgAUp53GH9bMZM759g",
  "key31": "4eXqna7hb8v6dXXjZTfzuiN8ndr7gmoGX9MmhXP599qFEW4KYp67oTPFrsQKNSwmf4P42bsYnv4eBq4cUcZB7tbp",
  "key32": "49uHaqUJs6Q3Rc2VXKVmDVyJNsqKSQPnQt8zD6kdBP8zdFEzG2wjNDxgfqDMxYDs3qDpRNq4TEjkJqkNvhzExmc8",
  "key33": "2ecjriSqaiPBrphQ5MmVckksHf3JyUPrSFWTUEhotaddM8XXkM63XP4rtvXfEr1MEYrhnFJxehNU4RFtdQV2RKyV",
  "key34": "5sLi8W7b5Q4fFocGjScB5uUB79SnYK7hafNtnV5xCyDUt7DnwBZNsi5cigB4vnCcWZem8eFJSun4tLKLQgFrCcnK",
  "key35": "4n8BiCnNqJG26cnNsNSf3M1dCdTnoRWsr71S9wx8C57t8sSGzYfQZV3u1zJoa9yFm5Yx223CSpYPgqKMSzK9U6Fk",
  "key36": "F3z3mKaMcq7rBiJc4RWXjxPQRhXaBnsyzitzX2taRyimDEsnKYqdswC56q97c1eBwAcr6Ngj2cJmbusiUEjbwef",
  "key37": "3cCekUipRoeQsZCUQrdQAkG8WQyskReJBeSCmKTfkZXfuHsXdo9e6eJf1NVByWENBdvim16n5VhRCd97RTxhGY85",
  "key38": "jDUgfyS8n38bYFuxroghebPBnFFpMppKFrbznXVtoMB2RWHhw3AWzaVRK3Npf9J3q1Bxh6NKJueTp3JjtkBBtGH",
  "key39": "3baKPLEZoor7hAPgYbptQ2GX59R5bwaHbpimnC313qnpnXFEV3Zct81NxKr8a55n71o7CzvA43PyA5WKDda9n6dg",
  "key40": "2qXJQ38X7CnUo8aNE3kBTzA5G1vfPWMwqKNstDy7kA9z39B4ph5S9yiKypKUP44xE1GVac9fGHLts2Y7og3NLhTR",
  "key41": "3PjGaHdjSXLbNkSg4MNk8JHztf1ADvLJVU4Re6RNAY74V5YabVLwdGMMVgniWNy7wGSCoJ6GMFjbGs45grkSmuMC",
  "key42": "ynZdNgExPR9ArDhxkswqtcVB4K7oeZcfhkw91JET7xoXFr7V1fNJfZcdtQ7iMhARLq9g3XzECSuCDp5GjKYXFRq",
  "key43": "QTpYVVxfqHpSPVf4KC8Z4n8iRrCvHsKVEgvw7a3c93PKXzs7ozZxWdMtrGXqrpsZ74U7BJtF6Rz2g3tooU2He33",
  "key44": "4RfsdcCAiqsdS8VoxcSh5r3LUZ1ZFKBfjK8EZxRng9fV2QstiX1UX2f2Fq7XhSKCYQQXFExJhWCHuzgdJEycBjHN"
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
