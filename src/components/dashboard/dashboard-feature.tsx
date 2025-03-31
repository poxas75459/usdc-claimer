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
    "37CM863883u6BFHLsCWkT9v5EsWGTZbfiBZvgKRiLJZ5N1SxkYppQ93xLdQuHiHEMQAdizmNmb9pvA22S6hvnVuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ssHbQA9BJ8LnxjvLDVgUbUaHQY5hg6jarsexbhLgJKK6TcJ5F3crVZ7yrmqQb7wUH6P2hPD12d2kPmW2TD32qC",
  "key1": "5rc63h9xRMJHFBes1TmhXBZSZY6YLQfoM8AcJp5p75Q8G1DqthdihM9dBtGB1shYebaTpJU3Zi5TqrXLtRJqdXcn",
  "key2": "5bdLMXY2AfxyAuWYniPmh8gMEHrkeAQUKgnTWpdap9wD4BaN9G87VbrvTqjfi2E2tXePSLDGrU9WtDFVMkRtquo7",
  "key3": "4Fm52CrEkTf4Axfqs8nkqFfySrFdJNVXuz3JAbBZeh8PG2rq3F81MgD5YKp2djfibJWAfoENW8rn3PKYmpSxXtjY",
  "key4": "CpeE9FLiBgdmpZDm8Hmr84V7hYeQXXvsVvviM5hB7qDuJN1bBLdTNbwXmxjXKUcwbCc6CrHk7Bf7CeaRhrN4SmT",
  "key5": "3ULLqFqsy6qNsH7YbBKU1GuMHEsnMS8zmPbpXh5MJHYnaGUP4UPiJ2VXrcBVih3wcTzzPCFLHGkM6LRfv1uthbd5",
  "key6": "4imG56bJo4fS8c7dj4ziJZzK959YxQmWXiRK4UvsrkYLXkt7CoBv59bnFjBDN9vanDxihscwRcHm3NXQAgs5UbDC",
  "key7": "4L65JPb4Av8kAzSVghCwCsn4pHDgys9wYDVyACPw9ai88W6i3Zw4QSJjEhqYeDXbyhK4AYbx8KpqL2qncx7d1uZr",
  "key8": "2se5kc6jEYJg4nNAy7kT2YjXomqbR1qjPrY1yrzK25pm9uzr8xxMMcpqF9cmUx4ZVzA63wVfQGz6HYxnPvMikRCD",
  "key9": "2WkSV5fSVedBwvE4s8tHPpRKfd41zeHCum4iUXQNfpRFrRLvUffY8TfArA9DVAnepiDbpyFtaFrpSpGcxU7BKvQN",
  "key10": "5YX4CRgjPB7HdXvNTjxa8vh87ko9A9PNvrRPVaCExSjXSn5zNmzEsCr1JqjRKVySb5sY8RRYUregKTD3LeS32Gmz",
  "key11": "AuFzh1mxvcJK5GrFXNn4zCKuink5yrgkj6e338TW8ZYcPKSocSEBKLAmvXT89KP5WPrcK6a7n7Ja87h5H6RhRc2",
  "key12": "2Q53d3V3Kec3E2tUwFgpUcQwNhbYPrGDS918hp8jboehkV4LVh62VdTwUsXTwooLzGQ86xEN5fy4KwrbJyntEPey",
  "key13": "4MJpswFhmYUJRP9aGWxAt8iDVQN8VsanyeFWcM46HYR65naEFaQsP8eJ31jEEzSDo6zkTSz96sYu61TiaSmD63z8",
  "key14": "TMdwfdr6jbqD8Tfq1CtLtpS5ChHoJcfwVhReKbRSohR9JuJHsWRoVaRe2wHBa1WMYtCe4si7Za8ajupMU37nxWL",
  "key15": "4YeCRrTCycorXJXx5mxfYxKKbjjH8UEMtwbEfsEsK28WUyiXTQKLBE5qo4mKBzmiKL2JAz9vait5FWiJfLtv6poj",
  "key16": "3uQjMbpxJyXVAaj5RD6JV9FLRMbHVLQqatU2JZHA2FqEVStsKxhvshtHzV7rCweuMTqGZGgMGsnY6NnvRj2RvFzi",
  "key17": "2KAVpT6ZinjWHGGCRRNAu8A89T8wk2wr3wPHb34pMYNaAf1CvUbUXMXayx3FJmNYMHX8FEwvdLNDQfbUBs2ZGEDK",
  "key18": "3UGZGBzZ38FduJaDckwZgD4Y38Xa4GDmgbma8dccxJQ8C9tJzADkxKDve8kKtjVWKH4QcRZDt1umaEzSAm9PoXCs",
  "key19": "W4U4nxiA3DmMgCY5TXVrufqhf2gE5MFcy5e87doGUjE6AxtuU5Daz4bq7ihDHyzC6fHLiJTd1yiFhFZvijZDWD8",
  "key20": "5bSCkfnkmVgNVmf9jSbd7vKntYV7LAz4DdPT1N3ga92yknETX8T5W7S5SgoitwC9usSC1ae7Ze3sbXMrkQ7Mhzi5",
  "key21": "3Vxc7DEiZBtjRfCEWdsfKuHCxgVu7YLf6ZGBumye2Fnfm9yM6KXzZAqeZoKhTeaG4im2behGxbGFQ7hLqM2jfdRb",
  "key22": "2KKWyLANeh6dqmoP3gkBTmsg4tVU5jJej3YeXkxiSX6gSBcc7LRmC38GnqHTB6FrhWh8TNd5sUSSutF51kekPyV3",
  "key23": "419y8GZqim1Hf4vtJDsCAdiCc4z912PfMW3Ywz3BVdKz4xuRHPrs4BTh125E9JkevNjZBXwSYMR6EWXPinA8Qjpg",
  "key24": "3yHxESGNbYWiVYxZevww4E75ApGFdsmcbH15J2S8ai4x7wqCBhpPUHc8sBP5aaxNR74GD2qLXZqnjCYw5NZZKMXd",
  "key25": "2qQ7DmY5GKyZcmuJU87NapKQUKjvRmqKyYzzZDPamKHj5YmKzJMC4aRxdCR7DTdpMLYDbFLk3MmKeGeGghVpbgAn",
  "key26": "RiDh2RCVNDaneCLmfpEBd4JxwGSwPwbSVT2EddZ7rgxt78BEHDvC6r4JWkmfVMHPunmQNS6WagP7NAnwybi28BJ",
  "key27": "3DSXbryf8zGEAynrz15GP2odSGbNVuCfDijQFzEL15VeXdzWgVsQFvJau3MTkc4zZmjASWnn1pHzQuHwqCMkrvDF",
  "key28": "3AzFw6pqtMwhf63AMT3SavQck5N4Ae4tKzF78vUMaGbWsWtfMtExDXsKYiv32UWwfUW7yaZXZv2RdYUntoL9xaJu",
  "key29": "cMSLAx4hpecqd6ZpdUTkGfgDA7Urjk2ikFWaib4ggi8iqCNLXzresCZ9CaBcAotCcWNhNzG5iEyufvsyPmjG9D5",
  "key30": "2ZiMHuV6vwptC3i9Uzt4auqo7d2Bo8nxya4eX7CSyhq2So9X5xZ73EXZTPZ2ydpMfp81ZwitwVsCuhvCQGvpzomi",
  "key31": "64nt8k5dbQWp9w5CCbaJ61HrpoDUmWgHd6agkeZrkchCzv7MmAMmz9jp7vcfaDyxJJEghwqZzVg8N8VHBH85omji",
  "key32": "YYoJ4omi51nwREKhtadthwNk3Cn1HLL6quHB4JWsYWiPFzHqkE1U4uw96t9QZ2kGCXW5Bgrh3FmC27UGkwtW2hn",
  "key33": "27DKGGCQS4pHhEykAbqpppvDCP7yLeGrePkifQ9WXY8jZKiLfVN2JgHDTuu4vsZBWjymMYdRpMqkoorxCDvbLDpV",
  "key34": "4Cehm1bS3YHTH8zofVdQfUyYg5LBu7FPs85Nz6sHQpQrKBDM8zktGU6z94T9ZC5dRpXKMMaUc5XKtkr3kw3ykJcN",
  "key35": "4En3qHccxuh2hkNnzvfzYdqens36AXZKYtrbikAcNHb23hKZ76xRg4DDL4i74py8T3s5h97K96c4oMtPALK9c4Ec",
  "key36": "2UPEEkbCUUi3dXY69pMCBk4KTSGrjidn4KsoMJDRJkBZEjtNyhUZMtpXJPpDbDGKN4R1zq29bQaqmZzveJFUjfK3",
  "key37": "3nAgVNBPzFXJRdnVUk1JLnmzrxMqbecJMGAgrTjt2Tq68LmRjFgkqrCvEn5T1e5fY9dRqKBta1i5fY3K538zQmJS",
  "key38": "3abP3L5uZXYWwQKeBxtzRKFoEgWruGZPWVZKdUh6q4wRSfEqh7sHB32KLHtCyZeZkCKC5Rk48KdYXaBDrqQW8p5h",
  "key39": "5JEeyBKkuWXxAr9wRKNALudXWss2nt1bAZHuzJLfQtgjEdDG6BCWyg7Hk3XfPiPQ9Qbt4YKdqf2tBaksN4wJ1EKv"
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
