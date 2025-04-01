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
    "2p52qK9CEHMWg1VVvUhfqvujcL1NhofvJUUQWqgpU52quzyUiZRwmKQ9Cgae8w1GFE128cMTdnFoXjDmiK6qyNQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "apFA9QpyW6QamhWDbtuKcViX6cJwBTuMSpZrEFj1RdeDt5M3B5CX8zXyFZVJQum5GLvQ1ZwqEAcabUbwWmVqckK",
  "key1": "2zWaYV7RUgNLQSHimZTKV4fyHWcXn2YMR3cc5dnmakJWXV35KPCJGy7HW9rb5PMK1FF24hWv7LE5ZN2nN5i8bfX",
  "key2": "1SBAzTrjdwoVowQPjFXSC1neZQNRXdzEJrXuaNwRFdcZv8E7XdgHB6mEZTVUCj6jwX2YhMyYzqFKJYEn5YCfQW8",
  "key3": "5M8cKdysnMjWTDhgAitfaxNht8iXCp6DtYv2hBZFUudCfEWEUMLtnEz7NBTSbRYwuC5W31JhJBfSqDCYhoXqVrv8",
  "key4": "5YzEV1dSzWXuGNTo6T3GqwbKsaeLsR9m4EtZnyBk7wMgyeeWjvqnNjfD8H29sKa2WEXEJMX3H2cPhQFjdXyNdFCL",
  "key5": "4NA5ikgnZWV8wPXwvCCNtiMkH5pRu1fmKbdmt73fxpe6hD335hcU9zv73n8j6LfLUjYuojVruuGDKhs4Ehyf8kZG",
  "key6": "wkEezpyPCF2ZE31KdJzxyUDPjir7uidy8kDUpCmronVbHTDRW4jdFqSU424Tk4TvpW35RJmzKXQzVoNbU2harAf",
  "key7": "34ytrjYr2XvPufuUrfDnb4DUDdpPiKrFpDymLiVdh94oKEudHT3usXaE6QRyaFo41N6fQXt7c9GoZEAbGfCMTTjt",
  "key8": "2qUamrTgzXhBBtSCq2hLeJ3wMo2c5nv4YzN7HiGrxQQX7YmZkTkuvEC83vJBJPAUWiBiVyA77gG9EKhTN5ty52eK",
  "key9": "aykobmJRPjKcj18pRpWDvTQaP6vGAgpY4Uk4Ck1V6iD85dfH14bP4SEwhEB9LdgNAoc4bmasZrRsrNyxfFho4Y1",
  "key10": "2TB8HZtpdQZtX3QgBDfBAeYyMTWy9orRjRc147RvjTL59o3AwwZPtWutn9cttq1pgNH45Avhmx4eCccDw5t4stzA",
  "key11": "3rVxk4Ety8oJc5DHt4YWs7zX8GRkNx2rYSRgx5coqSZPgrcXJqp7vEtNmpRWTAMVi4NrptV8gLcJvsXoaLPaHGX1",
  "key12": "3BP6XkLX5PUUPKZdpxwpG5nZzy7N2dznmj43MHeBuqUziA8KDaKEaeKoLMEm1itaWUvxCAsKbuhJAj8oUKqyU1sM",
  "key13": "CMqtFFiW96dF4dVEyMhmLnU7thpy5NUDpfDDGVTAVLQ7FcWnrGcynJtzQuya9iD1JMVjECRV79jDpmajGXkB5U1",
  "key14": "3P8yAWZcPGAB5VWJjAvdDqwCwtqHGgDBYUCgJGsHRRbVdR1K3fXT4zpsxkPKkLbDDxttvPSL4duwim6E1QkU3HCZ",
  "key15": "61kskHzjCveFQuFfggPa6LC52Jamsoz8nsxMsGRLkHCWRgM2BRjdKXNALnyKEM2cooMoMmV88Z5ZRKKjBgJoU2Vw",
  "key16": "Zn981wymiK7fQin25G75Sd2Y6tUpqr7EcJBXwgBoL885GgvkDUbtci7Bqh76UQvSnCa3s2qiQPyvCgRX3Z38wek",
  "key17": "475otsKCMDRtM3XNG6aT9hYC7BnJv3R74QXmoxb2axF6hZRiq1e5W8bKARCZTCAB7NitduBKoHvDc3oqoZqipt3d",
  "key18": "4sz3FeKoJQW3UjQS5Q4kQnjhsRx9rmNpaBLLtE6ond5QaX3kf1d5DQjVVySQV3b42aKRtRozTfDQ5Lh5kuF5pAz1",
  "key19": "b3SNKGi7bDwmmL9NyrYn2Hvj6Qxg1F3ximMGsWmBn2AKvPs9qq9KgC3cTA11NKjUryKwUAzdnuWVRD5KebWUYBC",
  "key20": "5iX55otPXvYfS12bHyv1z3GwmmdVzUpx9hK9PANK2Q1n7r13RPuPkWVG5u7Bf5kZXy4NjQZio9f4D5YVgqkQJa4V",
  "key21": "4241NAVPu7pFWViq95Yf1tAu68VfR47rA1rxhVoCUHyhz6UdHP5MKLUWm1Tvfbat88yBStjMphRdssy6mvuPuLsm",
  "key22": "5jxHSfK1zUoAu69ANbkDaKUqsyDpXCbAYHSKQD1EG8snR4kPN8uqPBqo9eqMBGJogwM5DHvQCat6jJTga4WkVQCN",
  "key23": "4dMtpRZ4NgwrmN8Wngufpk6zbEQX6kZmiY9MtZaKUEpJAmtm2A6kidp9zTmSALX79Py8Uo8kXNpxqvZivwemWeDs",
  "key24": "2u5XqjsPbptaUcUcpjnrAGqKeVHLkRpuBUtNFGyFL3cVtfqE2HeoQk8YJs8V5vYM2W5Q2x7H1TEt8jkG2QhbsqLi",
  "key25": "45y8mNutANyqUdTYUVbsAuKH6xH1myyMFj8TtqKeZdznpMocDvMyZdjSByw1mU7QTELxy7pnAHZDf6wbwfe5CqP3",
  "key26": "Qo7cgZkixArAe3z8jtAYq8bhRcXeZsgJ1u3qLeC7ZeEYgPrwVtCNAErTEWAKbeFg9eW28gKm5ePpdDnStyRQHoy",
  "key27": "2FJWMZfWRuFq4ZYByZLNjHMb5XMXvSVKcQuMPrptUjJp5MaiHP2YAbS72mCTpvbKp6akWtfXgkhAfsH9t7gMp8K5",
  "key28": "3ko2R7dfxLLicvQn4DSSkgA4wd7J3tUeVh6VKym8TJikvLx5gE3mQ67cSkcRPvfC63mo8ebNrH6tpyg2CQgEQ9Hy",
  "key29": "4Wd1FLeu2LefsoXpHdoVKyLNXEXPvpeQf6AXuqoHFraBuwAXpQEy5VjxJKDPXJaWpfBg7bV3gkLfTNd8F1e7Gu3N",
  "key30": "3B6fnTpXBnGeTeyyUZnqNjx19bhb3jWM239Z2XQXRbcttjUcXGp1FEBssrhetMME6bbRADX598ugdzG2dms5bRMS",
  "key31": "37ceCBFkzyTP5t57dQdZrcVZ1EVQB7Am2UB5s6UFZWgKAk6GDdDjjL8SDq2bkkdzMKHe8BXsURcytfj7Hq755DmN",
  "key32": "5ihnPebfo1sqZtskrJtNtS6xZHP6qMX53tLLP4faojGmVkCLdPPknpLbTTtdLU9FkjtwajSTUrw1Rea7Jk5LrMsC",
  "key33": "3hw31cTXnnh4bwco8ZbZgpWGM8DCJrqRVLVTFE6ALumvhDdqyjNXtgQ9b6Xygz2TsqPmyB9Zai7Br8a9pvJjBfiA",
  "key34": "2m5FRXLfuMV2Lyyvo6MJ22q9aZAb7jfebiBhahiNt2T54DjNRtjuN96VSkbY4pFtj6BgZXLCBC8886xFaixLoPjv",
  "key35": "499EePKpJwELo2JCU7kBKfUSUSBFJb4xm5cT9oXzAQSPiAPMTF1WaeNZbCHAT7wDutnNTw1a7MzeY1mJ6EJA7HtS",
  "key36": "5Hui8HAdkbcCYEFaYCj8zvvTVQzFDoGuBn6ibAxE3pN9e1ZJ2osZ6UaznGXCcytstkWdzYZc7ZfjSE7HvAEJdcZU",
  "key37": "476cRTUvkNRnre17HjFJMKzwcWvPaNjFvG8meJYSeRpSnFt8Xed1jQutGPCzKwu7fJqvhdwiXvp4hToq69j7kFug",
  "key38": "ezzJc9EBuC9Hus4q9vZ6w6m3QipExnwRJ6vC1bhUfrrHV2z5FsRTTRRiY7ccP2THWeqKFYZbbUQNhoT5rrqEpNu",
  "key39": "5pdauGuH1MR42dkzHZAE3TyjdtkFRVFAQ6DjzP4re5X5UgDh5tMixBLaiJNYgkZtLKE5vsZ3BtNogekuyt3WFBG",
  "key40": "2B4XNfpCttFm4b2foQ8Kbq9Ywz2jPg59JzneEdeW4nTaRNoz4wY9PQrPvVUNUkQb6xQJSP5wu9dKuaAcPtan87Rq",
  "key41": "5SbVAyxcwbsPnTmmZEMyGX2f4HLTT3bEwVdQ18f45RwT8eQP9kzcy4kS6RC9saELoXfhHUBgfQGD2HF6JrTupLCk",
  "key42": "yT4sxCobrs5UEwVWHoYSANwUgK28DBLDYLu7AE1bxmpYV1dcTwhLkDVP392q2qdVDHtyUqQwQuBkAZYu5oZQww1"
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
