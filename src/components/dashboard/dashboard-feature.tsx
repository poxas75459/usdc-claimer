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
    "5swGKQSkpZZFrRhLyrLAhrEhS77JNqoEW6Sax46ye28LwRk4Kyp8DF1DHzc5Jg17kznxNQS4Df4GPmjyStuGVGs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pn5TsGVpfmkqXr6xhwuQ9hieRdELNcKD1AD6xk4BfeGbQqXdVVvqmQrJ6owCGUaekc1Er3zAG58sEVQZBTPDuVi",
  "key1": "3tvBDg6PbdjaSecAyU9ameHfUyfXm71LkanDJfFQQMXe5xUTiywMXnAebZd4XNzS9CpAXeBKnkZrZCERp8RpLAzj",
  "key2": "2WTjfuvDJBeRXqH2uhpXLHSBa5qPBza7ZwiLRAccf3sWy5iHphTSTFK7AQksBPvP77K9xZgneXLhmGUGHWaDnFn3",
  "key3": "2F2qVqwdpCQiGisAboHhmHZX6ZCPmZep4tF1srSDhxvCoEoBky4tV4zK93mrV9GL5JWpt1cP4crQ63EQnytRGvp9",
  "key4": "5BQ9WAoQFraJrYXCoyqqFYstuP6uo8VV5KpQPoStLtd9TYUYBiydtDKp3jtDU89X4YhvMUBon4iRNaKRWEU5FDND",
  "key5": "3CKd77JrW7RkToyPQbnVqF8ut3hVUKAMtXdBvtz36QzQDALjNNaYmFoRHp5ckTR6nEkgj2W7P9GdQaW48Mxj3jbq",
  "key6": "2RoxEjeZGD2YCsagWopX2Epj3zFg5fkakgyDb43C7YBuopy4tLQyFXUnDZDuYJFyuJD5xSrqmiua9mS2PtnBUZxT",
  "key7": "4QcGiRf5SGodrzJqQcSR6Uimo6DBbC3rdssoFTy4HaK8nGF3SW5ziQYCrE8qWGCnPskVkEJZtEVKxsdSgBcqBouC",
  "key8": "12559Ve8u51ETKKuPFxnYojrfJYdmD8cSpVPmbAdMpuoSw9vi78EpeJHY2aUJbCo5U89AJi56aogQGTaTp9vuCcq",
  "key9": "2uFBQVsEYWsm7Pzp4jsiYUqXfiFrbchUgDT4764ccbuYp8yrcqR61GfsEnaWUdiLQegQ977s7a24LYFQMWt5xRkJ",
  "key10": "2MXsKGDKbr5xHXVH6Fst6u7sgdcHcsKWtJwWzghcQagmqrxUyTg5xyPPkbGwhzNEFA8b97xdqcQQ2rxwHETq12mg",
  "key11": "5A9F2Q1m3ag6UpuR1Mqygfsn7ZQm4s7ZvE6KFqPSYoz3PAQe4QcrZcHTwrAq4Unszx9tUph6ncSxJieTtianfXhi",
  "key12": "3AxvbW5NMNJVKJQtdTKws4qN7B8aa4DQuLxXUsugDpqk3VusNnFek4vW1uLRV7whU6gMK9WCfvNCqHvREHSAa26b",
  "key13": "4AmQ9TQgrtjLv3xmeNhaoZJwM1rewZD9rM8941Kcc7B1KgKTqsPTkbXWZTE2uDd2GPHJfWa8xPeHg83PrkiJz3Ho",
  "key14": "2u5KNu4JHvgzjCMfeRkHpW4nDHW5m8AaXrXKLx6sJNfJLjecyJiSd1fTF5K19Hyz5nuRN9y1EVbkC2tYFszbq3x8",
  "key15": "2Qz1e4JRGctZBKzVTq7s7iEwLuCkVXVcLF7jKveAXnAsi7CABc56zk2QCd9GBYzeyfSt5ZmQr6F565bbD9PRCNxB",
  "key16": "5UpRDpNeiUQPsb3gowr4vdwzTvYqdNAf68wpgBiuGyrZAdUKQX4WyLaZzRw73v6zEpJ4jBncc1Cg4GDqF1TQt139",
  "key17": "tyQ8vikysHyVMVq5wzR6jJEyqCNNmkw3kXaX6W53hLsaj7AYUqJBCoJbahk9zjruFiyGeYUM6iaSVtmq9m7haMe",
  "key18": "2Ba4eVvJqtQTBbLGbJNkuyo5WyZABt5sM6GdJdjUtEgoDK1XNGZLL2mKY14KZx4YbfsHhm3r8JzXkAZSzLhcAKUT",
  "key19": "2RzuUHwprfTEdR5h4dQ7HmBmd369M6nUhME8AxoL7agAZRycCtuUHFgvcf13CJZe4JRS6mrGWFkN1wn4J1oYQbS",
  "key20": "4mYWpjNAtBjYnUS577q7hQ1UwuFXrL2juYN368UyPxPY8fh3yp4Js6nimRAMJQJg3m7q6E7eog1QnuVtKnPQ3GHM",
  "key21": "5ftXfamjFu36hd9L8UZgiSYLd9ihgGCiULb8USF3szVvDBhmejV3AQbTaygcCjMweQaMrYcKU64bHVQXQjpV39i9",
  "key22": "2zpUaTnqsJXxpuU8QBRALkb9sCYC6mEMqNZv8kWqidQtBDNRzaFjpV9rq2wec662tYQ7d2BetiSoBf5DEURchoMV",
  "key23": "3vSRvHPwwhYWo2dkRxXu8WRngPDkdDgHFJ4yqPNTKJnunajsNBEK3E8ctGFeuN3fiVYPaiUxDP8bZrNDbCHCfSQN",
  "key24": "57AdGefHdzz34ypYTiUgW8Xhb9aozronnScE4wkEx4mig8wsayUgbfHTEGNBqbxLxvS2CwgwB6p5jw3ncYDfi2HX",
  "key25": "58wAo4Es2Co8zCQBFdaiGYNm3uPHh7Jnmmt8kq4VUFyAPHwa6VFKxF9YEh6LweA5DQZmTAB4EZ7Sk8G9CLNvMy4e",
  "key26": "o6icA9sRVtbUHRNKJeDZ2z9546sUuxgJdjhshKcRqWswcvpgv2mA5p6Yng6qHZ4uqFtwg5vgnDPqt8mnzikXY3A",
  "key27": "3dXvUvJ1hN32d2e9uGqmAwkVus23qWVb1xHU7sjPGLE9KTJM8u3zSKdgmcoe2ULatu19SPe91JY2WxvLu4H5RSKd",
  "key28": "31W2Up5vUWMecwZxBETYUXDhBPeb278X8LeatQujcUygTUBu5CzMvaPLJA9dxkx6HHB2L1dcY7HB3bwKE1GC472o",
  "key29": "XgKPSUGh3rE3hfP4VYriV5vXYwRLGHx2nWKHXFbg2VRNYM2Sa2f7i5wp5jnWkiXAeEHqU6xmbGDDwwWA1pjGYB7",
  "key30": "5aXXR3eLhL2FpwxfHgnNcUGGz4PEJFCoL8BdPeYvaj3g8yLtZgznADtWD8Eja8G8pnbRjoQSrMsDFPdaaGVH31yj",
  "key31": "gN2qiBiHTEfpbtshtDYxE9j5QbR1kHVKdReqXduQxA5x2UaTtXRNREe4npVGRSy8T4UhMvmsfh9FLRBfgfu1Qc4",
  "key32": "jUP3dyWJe1bcuLnhFSMF3ni15iYeGmC9j4F9vgdT3ciXxaP3ouGf38osVyh224nqRiLqTnz72i52hpwAfGTFSXH",
  "key33": "4KsLFNZrM633ksvKCHgb4f6RaSGvJhqynESz4PmEdYPzZZVto6f2htDe3egwQ4bakrbQR5EUWDfvZ3t6rpax5mxD",
  "key34": "3N7muZfjULTVubyzjPU8YiTcJzk3yk2mnv8SQ3sqW5f4gCiqtiqbXPeryFN1Z4ASSkcveiMSdRhg8NJr51fnsBJQ",
  "key35": "5NZHQwogXvJXdCGdMNSNRjaERv3h679bibAntVhtTaEGvymkCSXbeFVSb3J7brKKViqRA9dqrBqYfUkyfoiGJYvu",
  "key36": "23GjyjXSLEdE8soTV93tojHzivAEUtfYR4ShrNMcK1Vo4BBjWbPhoHG6H9iR5xkCKAWCf7x3QcUc4qqc2RNgxpRX",
  "key37": "szdXoErJyY5X32xPzMYKb6DQbq23kYN72B7KMU9tgC21AA4M8fgcU64T2kAMKj6YWEWZiWzh5agq2zccYa1M6ti",
  "key38": "44qqbzwqK6RavS9oyFdqNdSzWZzjf4xc2XaPF77QdGe2hxoYCgJYpmQzMrTBT7LNhA9Vmxx84hqoJaaXD3jfmXj2",
  "key39": "5jFzZPHkYeeDQjW4BKudr56F4UGBPEejRLg8xGn9nJaPC25rMHRL7ketgJSA2TJUsJgvkSh3rdyKLGaZf8VM1E72"
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
