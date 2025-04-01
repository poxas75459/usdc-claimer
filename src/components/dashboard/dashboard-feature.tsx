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
    "45ofXiGy43YoF5u5Y7H9baMD29udwjSPHpUVfW65eiTjhgpaH4MxLWGzomkJf5i25FA6VHdc11hfSoemBJXV1t7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmGenAMBHArTppDFZqqZe64i9tbtPwL5noCAv2Z7wzuy3sWS7EEtABgPjeeYFoNbmfCCkNgyHodBe2wARxACncC",
  "key1": "NbpeHuGusLVZm65bYMq41YEPtFuNucMjKCpKni8MW9WUD1eFT7NJ9VMJnaH8xsDFJj324rrqAcs14CCPDHCzmR9",
  "key2": "2JxGEVXCd887j6RPqQnGGNArHhsSdWC1s8vCqb7mgCBerYk8N1pRpdhj5xYPo5iz4exLho3EGZo7bBRNdn6swh6a",
  "key3": "4vfSFF8PttQovCgR6DeKryeT66hvPFNcqDUxeP5QmVqdPxq228FKu1d5Lg7UAM1ukYk18UzUkAzauDppPz5jxy3V",
  "key4": "5W3tGjUKwbcyAcLfo5oNxWyE3ejzUCaQPkpJ4sd6d2cpWGkLm9JiReDRwXdvAcjD4MrDhfYFwWhrVGnpgBMEX2tQ",
  "key5": "4n61bsw6ohXPtrex1KaBTYcPFewNRouUDM2skdnn4XfsvCJ2K59D7MsbMZpKcudsSPny7PceTJZrrsgPCSYhPgE3",
  "key6": "56pqN9Deo2jFgquWXkwQW1abhPkZTiiLvdqDumHoV6BzAhrEzSaRqwy7fCSLoZdmEXEuwhZCPrxf7EGZoyfSg9pe",
  "key7": "4a3hHqgYVHZRGHbHsCDy5iwY4jCsZYWMHT9Y9seHjDAh372fvfFYueiYgWSh2n1humbnSe9xL7mnEELdaDooxUnc",
  "key8": "4ALZ6HZ2Y8ixSc18r6pJLdMgggZMuhTc1UHb6NdmdukVqkVGk7FCWmE5aKr6WjV4ghEqhQjk2rckrCJW1TDNiEJA",
  "key9": "3ceSyvPHYTydKLZ3gZyPqZQJpvZMmVyvvfuH4N3pifXfmeNenfzTALiQhCQ9MLrrtvrAW1Pt4HiGn1PscE1Ri1bW",
  "key10": "3XcHniQ2gaiGQiGjCy1baMjpYzx8qHu7DkX9NpAaLYs8gNortw421eQtH1ET6LxvuZAskZ9PR59pxDgJJNLFjFq",
  "key11": "4xCaHjQYMn8w5XHXFMXPP9Tk6TK1vzgA3Sc4szjq9aP8PaPVDYQ8Xy1WAD9n66ZPAKJLbeNFpyuamH5CoqCnfCY8",
  "key12": "3YmLYiinjaApMRG8M1EjJ7KGAmxPdpuEkdR5ury3o4qvMS8GqvFQ5y89tuZM7sHTemBHAxR11LgbDCxGV5KyTuU6",
  "key13": "44C1Qrx497x2bP8DxSfS1GsvrhPRycGBFTrXjrJFZ6jeaXTC2Auy2eJFPhqxohxJXto7QTWcJR33j5DTDSRLyJe1",
  "key14": "3HnMVT43B1cToq9QhZxkRsPw9tMyxXXd4GLpB9DJQd2L5CRgLkPXcRMqsfj4eJ59G9ohVEYwps6J9TSGJJRgBe2i",
  "key15": "57qhhhmHkw2etwGs39x1a1H42pnCpwbs6ak9mJsFYr5QYZRP88ANix6ThD4uBggWoj9Yr8ooLJ2Cz53vENuc1DZj",
  "key16": "BUqxHBc3nyWq9zGLzVwSaAmGuFAptBPDKsQcpmUYNt4qyPQ4Bj3UTLLA8Wm4MAvASKp1JiKZrf6hroXxEUchkMz",
  "key17": "4m1sdNZE5QTaxWGdRU67bexyckMho6rxf2ZdwwyRXeHF3fTSMbBqTjxRVGZdofUjNRTKQo6MZd6h5Hyoh439b4mu",
  "key18": "2DzH8Q5RcRvV5qMMqY94QViaMiFEzAoxFNACS2L7MuV3bisf1wEDEygKyLsFM5uNDMuk1nVXu6W2ks1kY5MH47X1",
  "key19": "4NsDwazmU3PhUq6dmg49EWuut3gxQjfjk2abt2NKV3Hk9U89o9RcCycdpMHcUQadyJrZmXUZbfZtm9fZ6tZqCtx6",
  "key20": "2oWKcXBddEtKjqUeiVDQrvxHDrBhcCirvLJsX9GacHV7N4TDttY2tKMJPu6sLQTSedfr1zaJQ9ThLCTrqyUevjMF",
  "key21": "4PJ1xzgUEPNrUaxUacnJEtxtU9yWMZQfvPFgGKokhFW4R5wEubMnbAe4tpFT3y4Ut6J6Q7feD55Hsm2fqjs7nLb9",
  "key22": "3jLKaDWWG1DrWmez62KHPXLi2oK8uAbxahA6iRwEqp86yj9V65w1tM8kNUfJHu6KjrpSkRgPa1hnFwUcqJHEL9Ld",
  "key23": "4BtFGBmYpAH1uG5vMaGKPsK7iEUDKhiYAuHm92A5ZT7xvT6FHvpfKCWRYJhBmNPadYFGGzkBcwvZ1GRxvDQUZUmh",
  "key24": "257VmvJRmMnFb7hs2vPtWaoChQqZoU4TsUQGoDnGSnJF7iQw4cP7eiesxgUiAdirbbvrPQomgXdNAX4ZG1WxtBw4",
  "key25": "5uHf1qgefgeZsmL3kzkgX5C4RV7QqWNMuBLqE7oXwNp9BPwJ53ewtLdFemYUQTHKLAt2UyQKGi4LSKS7NWGnyvSF",
  "key26": "2y6UsnxNoCe5DAqWFQ8w44ZkHaQ2srX4pcKR7tHMg56n4zzTouoretM7qWJ3DFU27rTLZU1rCuHfF2LYkLebTJS",
  "key27": "4iB2ZCQvfcDSME76w9J4jS5V3h3ppzgyVt8KiKD9HFDSrpA5jguxATbuMbhcVeBeHz5thjiRJd48Rsg3JX4UwwrH",
  "key28": "3Xv7g5kwhhLQCeM23JrzeSneuzmSsxppJfYSVWH3YU5yKA7YUKB9SbVsvJKqBJ3ppjaLx2qTBEfu4XB2YmUn2pVL",
  "key29": "4q9xi9psMq5zpuTpr1oAww4rg5Hdab2N1jZQUwjvFKW1MUTnp23VQbg5VLTR9iVZZp7kKMW3t8mQksKE7oRZK6SQ",
  "key30": "29dqEmVFwHyGA2HdfUUKbpH7LqWbZn3SPtTBzAXX6AFm2ULiddtQBQBE36bW6ASG7c9f5GhdMAGp9u6tMGSadeVc",
  "key31": "zj9G9MN7evvMVe68WzuJPYFdwBovhVAAnNcZFLTU9a4M7jHnaB7VXevNhFshao1JP1mX249D59MKDfVnoFYhXcS",
  "key32": "2qNwQd8kAw6CvVQaVe1dHvHQSmdDLdxrvbDeHsncPGvJmyC7YHwh4FcxYonujN9hUJcMYZ4XssifkAKXfGEKRvLs",
  "key33": "YBYvj1sC8GLDXqpJQe6z4y8BGi778kGj5ZFjDs3jxpmpTwMME61pRNwjTkZB4HXRttWKEQxF2Vcv9CEqYyMtEXL",
  "key34": "42cVA8YAzGZ1iMBiqQEGLAhgnNu2mgsjJxLJH4X7wEVKEY3znUUBEfvoXVC6CF8bGrKP2Mm7mWUZNpQRpqjzb3yh",
  "key35": "4hUBj3zZxBoe96uEf9PC6269Jv72HySDndKuxwHC6178FkShbYBgBAQyR9D8BQ4smL1q5QD5ZEmDYqbRnxdAbojC",
  "key36": "5FqWiLvQWgbDzhV2ruDm9LWf3DAKA3AG6xi3mYCjCTfNjHsBLzbbJMSh7ui2jVWfvGLHMhtJVhRUvf7C9DVUjHKo",
  "key37": "31iboj3ZZpm6Z4SqCQKpxeMGSD8vzZ3hN1A8L6jWtftwoGTpsXVZSxkUdsWDr78b76Zv9KyCRzffiMqLAZ6Uy7AV",
  "key38": "42aki8b7LL6SDvRRiK8ZLKG8seqdcLHiUTAhzmSRAszc5sZG3F3HvpTeFBMQ94gGLXwuz7ki2weoZmFFir5xFxdF"
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
