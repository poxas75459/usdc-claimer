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
    "6Js3phUAoh7GHdkeTZvYvbxNbwPUepRtPMqYLcGZsTRk4TMRBQSsamq5pKJeoCFGhp617xUc3ywRNZXCRNLuyWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41LMdSpVp6ECDanTPwEiJNscS4yfgHxxH7kYUKPgpf3o19BVLkYbVm8iwSwYunu2DQPbcJVFMjwZdt7M17GhQUwU",
  "key1": "3XVkJza9azpagWP3pDWG4vPfaLtBWN87MqmX25vpXAL2SxGgrTND6aNkGRkD2cYUKKCiJA4gqGzos4NgVc6UpHQi",
  "key2": "4P1PfXViPd8CtatZiKiUfaY6mrJ9oG3ouinRBx7Z3e679jCVzDrikLjymu2RrbA8h75ZMRDJkiyJUUJN8P5gzu7h",
  "key3": "5tJw46B3vaMd1yR5vpuu76tfwwAeyo4Za5j8bv4uAy31PbiaSWiRCFCmj2pbYTezFYcz4dmNunUxAzDgRrAKqbj9",
  "key4": "4M6zFmS4wx8D8nbotXComENcu1hrC4uyqjfFSRd5LJ48g1XTjchYV7J4Nj9K9Zu9e9L16v3n52gFkJzeH52BUKSk",
  "key5": "3z7ao9WFaL6J9Devvg41Xqq8iT2ftYq94rKGsr65NvxUCigKea5MvVH2av2dFsrWy1h7W775VEDU9m4QghJuMEt4",
  "key6": "66JqjvYL5j738bS5XxYNxfYeqfW3qV8hmUzuyB5dXVptP6ZCyeBGveF5YYUiRzExUqXkhQc56wTFcHqfwvEoG3DZ",
  "key7": "3Ad637ASdrtav8PKbGL72KZVdE7V5VNTT6XJK5qeWcRWAbLyWAzdSheHvVnjVxDUciLNacFBboS7aYgNL2JTAvko",
  "key8": "65Cjj4TLVDAm9TfTfKjedQSjENvkuHZvXin1zCmwt37jmj5Y3S76BoodLqQfFnsfqLqWiQrb67WnGdhDaUnYj8w5",
  "key9": "wP5eWYoE4g2Htjf7ViXaEk7CH55TjbPFBvme4fkyjijtBKzL8AtskYgapztdDWKyjmXmXwFtzyZgaiF58pkJavW",
  "key10": "5EcTy7bwUEBGFbc2hEW4cJh1B7gwb3CYeG5D6SL9UZA25FZpQQE85VWG76wgoNbFPEr65RK6ihf8MqmAF8JURswx",
  "key11": "4s9VfirEwZb4nBCtmUHc8Q4pny7zkCDGmwBh92LeqDxwoBhuNahT2ubkwbyRBXoyxThNoBuH8tfrW3FpvwLDc3ef",
  "key12": "5stXeuidJPHwKbxPF6BEAHog3xgPnP1Wbhf9E6LkAhH4BefkcDNdhy3GYN2xGzcFQEj7W5ygubqKdoVNrdcivjeG",
  "key13": "Au7D4jAwLq1XW9YmrkWnVqoY9NBU4AW9xCrvz7eAbeQwota9cphpngcu5avmDKRg7cRdV5jQsrQXhJcK2WabEFp",
  "key14": "4RRng7zuP98TtEbVmG7LwkrYPMagCDaQVMvouGVZor9UX5NSzXhui2eM1EAnwA5XhkhvyaYknBfqHCud6dQGr8hB",
  "key15": "4wTxRrp9Vr6TRDZKQH7R2PjjQrD6SQDY9iAoYqYhB2QgPk9U2VFCNSbp9WgAe9ycr42Khg1WgSBNY5YxKu3HeRsK",
  "key16": "5WDhGM7sAARa1JKvXReiqB7SX2Di2rvi5mBDPjBkYVvuzfAQxuSF4oqBghBfAnGBbQ9XQjWtKJHoVjakMdtTssVJ",
  "key17": "6wKGki1dNqT9tpCyrb3QSzX5iTiZjAAqKq13NqMvij3kEogD62AZRTpPETbqaNZgaaQUympCf1QPA2sT3Ah79Ys",
  "key18": "5BuXSsG7Swe8rMfASjMHe5ZezorWuEqeLMzTy4uVRx1yBqECSyuVxbSrULdeQusnb54ZDDTSkT2tAam6jojrYZfS",
  "key19": "zVbqEYcGAAp8XP5mvPjEH9QCBJ78EVJ6uvNgTA6hbYYLi9DY2FqVTp1WceBQG94Zc125AZpbWqaXxW9wWJP9SWe",
  "key20": "rhSsdH4TAmRUJzv9ouKDfJQRw7vHLnumqUB3onoZLDokNA8rExed6XctRdBJ3ULGYoDwYiQKqx1KUTMom3dPiQR",
  "key21": "5EhzuUTztZzuQLwQMnfPcj1PYXmojJ519ryULRnfAxqmJFqGqnF2WNKZWqaC2Y8NW3ZQE4CC6ZZpRvLg7UNJyC4",
  "key22": "QCuvy3YXNTKZhSLmb1UQbNfL8nQbVhLUoW5wtCK7bridHqY5KzBEPBeySTNnyC2qmkvPebM9S2T2EEJTm4MtrV3",
  "key23": "2LiKx6tVvG6vCm5Lvh4RxcwX67ihRVe1TzzHoQf9JUbsujNBXXtgo2zbEe7y4Cbk3AtVQjbJ9R6VreAD1ikWGhJa",
  "key24": "2AoKT4bDbgYJ9LdwxKnSrcv3S9X2HYL27hRUwpcJy1tHrb1gaSiVo7oH7Ze3ci6obaFFmiUWDJeXAvYi3tqhvkai",
  "key25": "aPmtk6AKWRV61jXpU2w2CfEpJsvQRmYYqFuqnq62h4u9XG3ffiNj2c47x7ujeiP4tuQvuN6Pk1HY6YroHMxEmhH",
  "key26": "45JCx5Lkd65WeiPhFnN5UhQ9xArYaKqDkPXxyNqxze7JmYzsSBiuUYeL6MdBWBz9zy5qt1ZXVy2j15jbsaLrQXtp",
  "key27": "3mgq6EQJ7ZD2NNFBGjwmpoQghCxwpw81an29yj6G186BY1NMymSG663NKg349rjE9VmkfbuMYEyTChLntsvydSD7",
  "key28": "67XKT9xvFrYBQ4ekHXv3Ch2tA1sYf42yhGwREkaJGAv7PTbFGi5uQP9A3p4YK8Ng93sdDXA4kyGMFbyVfXR2M1Gg",
  "key29": "3k3HmWBaUvGo2iHoZgNPdMiK742tnXMEYyLFtQ3frSTDxNjLbe85YzmGtFrsWYGnRG1pQa29w9qwmAxqDAArGBSz",
  "key30": "3uJ5o9unGvEDqBjpSzC6inb8roSwGtRqvcYDDXtwZwdKyjptFA1obESejAGRpCjzRzJD1K5dAFmr9tqRPEGwSuqF",
  "key31": "5Kej4gwSSyyYZeCjbEVh5UJvR61SvPKtpMbuk4ZS5hp3TPKz8MWG8qGCwZNZPmvCxLith3AM2D3ZA21UXUrJ9678",
  "key32": "3mzYE7DJMTWBcDQfS1EfhKsFCTgJEMqMNXpXSW5KM57Z4cddSEm8coM8F61SVomkiLut2heP2ymnVWJHDa7ifzZ5",
  "key33": "36pmj3siRBkWaAj5hKJKcPWrtSBeL1JFW3KrS8ekHXeC2WSjrkCG8tXM9MLwFJQHo9ktGf2Fs1zVQgZ1nDx7YcHc",
  "key34": "5d32ZpDH4HjAzkfFcxmRfLenzaScUsipxf7Zg62ifCi3ReBGi3vBLXuVqGWposJqF3pCHG4JvxdYMbguJRioYMYi",
  "key35": "TqTt5Qe3ZguvUQjzCiDeiQ1gMS1WUtz22kNndquAbNdLKdqVzeyyg79GmcuPEtukoLawspNGYpNd4QXNFUEtxno",
  "key36": "5b1yGAuoLnr6A1YBhJPTCxUnM6V7rnpco7M255HHDoLJfg1P1W28MTQtwTL6AcjG2QVGjoLby4vCT63Unu1m54BH",
  "key37": "5tMPooaXE2BWhZukpuYrjG1xXWygBDVQN3cbXKPeEAQpckELszGcAJuwmYay3TX44MBhB5TVQEBU3C97AJq4x54t",
  "key38": "3E6ipQnffMAdVGxH5DYB8ByGEbHDuTQcvcDJnmiZ3zLKHKV3vXB3QoV2s7pZqV8W7ax5kMa8zJ7ALr5ykQ6USNWg",
  "key39": "5e7Ve4c5zSj8cpzC7Ccj8UkNusAXvLvvqZdacjY32tWi9MN2euHByXmpDtYQKDmWDWMDEj3vXqfDW2xhdyX5fTqg",
  "key40": "3Es7LjVEazqRX1U4EqeuYvWJiNMhDrQjeJ9AtSYVQaR4L6RRCYKSjSAQNe9zUYJKdcqksUrEVqQmtVpoKGGStFop",
  "key41": "oNy5KxPLcT86b5quB93w7867e4u2gqUShiPu4nKCPfmPbhweR29TmB1E9aicBNJPveduTyu22RfXshyPQoQZa86",
  "key42": "2WQGkrtvTuDnsXDGbxLvHCRu5CJ9N2xdDDAGwj8KkAk2Ha84TjycBXmecKv8LzJKrKd5kk16kHZk7L2Tu9KHYEYQ",
  "key43": "4NmgBjaf16yCnarSwhEMFkfEPxqh5jv9ML3DSw9UxAqpETx72jHihQVQ8hU5WRmoTdfu5WEi4AYRYuTtDH4fTiKg",
  "key44": "4CTE16Bx6VbH8enRH4TX9iArYUka1zJPEAK4H8Kfhx3z2XHhZLpuj88es7KVL7Eud3yPgx8hDCpcH4ty6pJDXKYk",
  "key45": "2EcqFQz4a4VmqPYUMGidx26xnLp1etahCPXRFMRegi5RymAn3PJ3PAfAeSNXWaVvSqLNkQdTk5uZWuW2RgoreRT1",
  "key46": "2mvxqf9SL8p8123uVp9SzKTRZBHMwvSVNmZR4aBbcPUuxrPEv97zfSDqrKLKFdQnURrYbbQeta6sgzSMKARXqTBE",
  "key47": "3fgwVpaVhYBvfboDXumUgdVNvW6EB9MHCHMSMGDmBuGVUb7iC61jqGKLN3t4GTaT9HswDYwuA1aoDK4hJn9zijbb"
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
