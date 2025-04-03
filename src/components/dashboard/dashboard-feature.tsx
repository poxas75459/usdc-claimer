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
    "32Vwgv7sFwgcxgsLaBb3WrwqFJEKooB8dDn7Aa3oR3WCQMjXJn7WqZC2KQ5pps7R5J2Mii48b3tnby6S83YPd1Ru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q5Sbv4uMaG3Hk3e7oTzjCXuqM5ScZvLqcgFyVVLcbgnQKCbf7QwGDczpMLpZg9TVgyeURJHY7ZVhZVok7j1SVxd",
  "key1": "3iNf5x74pBP4L8UY6swUSSfBtsbqcRYRPNXubSbeTqB2YV9pMVVYJGQMP7Gdpq17sBWWqx1tAmQG59yjyggRnoaH",
  "key2": "4BPvwyivMqzHzPmA1sqDhSxDJGMtaomR6qXXCTy2J5XSHr3Ubqs7NMjUythMBhtGvVXSokCubup8zoVvpwi2w5FP",
  "key3": "4CciE5Uzqy7mqaXGozrBsmfntKWox5AMoumG3b74vTcbaGAWVEtCWZHAAZRP6rJdDKeoUKhSwwqDs1hav9s1ndCZ",
  "key4": "5bc8GYSCiKYP9QLe5hJ4Xb7XMNfUfbWAEZgyoccWcAdHRSQzvKHpesiN5hX2w8sQtAHDEEj48A2TNEcgh6cUEfB7",
  "key5": "X27kcv9a1VzA4PLAg6uHf9XbqfevefHeH5YVKjieFn3Z7rVqizwwqMLSoEpGJwRJFDgYa7beQ9ZLnskCvYK8aeX",
  "key6": "xYiu8KD6V7hF7RN7mj9xx2qZ67XDP1Wt7bpgGSmY8Tg3ZZ9JmE7rPQmTpWTgYX5dVnoq6JSmiuq5dajzqqNLd82",
  "key7": "2DaH1k6SyuDywkY9z84wZ3gvyJgeBU5qLFqCbWZYeRaoaKWnCTkF9AffYwUSnE5r8f4jvAKcjrTt5sS3mUxENjAn",
  "key8": "4aLSMcLS9ioBeLXUFbbrf5db3HmC3excaudFPeMxpzZ74cNkpqee6C8jEZJiHjheGrvVqiJF3ydxgLbLybUogPCi",
  "key9": "4fNAN1JrsP2DnSEFzakC2cXcK6RtctozLzArA9dvB3fYv2PKM7cnUzR7TpTaheRPeRrzMncCfBCNYamoj8aF9EvD",
  "key10": "2ehcEapK3UumTfwb9Ux6xjd3zRrMb967egpKvZr415jKJCsnXPXNF9YoxtLhPkVvAurUbCqijBGktpW7ywBYC98W",
  "key11": "5ziGutsHW3fDmziC4fwukf3qyh6KfEzuwTcQ9bfFoA9RHtfvqE7FRL99cfPLJawzdPcFJ4WVYmzw1ccpEM2z71eB",
  "key12": "5zzTHJNpn1AN5i3p4Vdq3ut9GCiiwnqhr2pVVGUsZayjf7EFpsZUSaBwp1XKBj2SweWSeUHrDs59rxDDA99kvUnH",
  "key13": "5dg1HZtCBderZ7XqXCguYq6nk5Bx9yvpRJ2cLt4rorVm5RajUD5vWX3NGcrKRnyrnQQBfVJ4YgtqhCHCpEkNwZLc",
  "key14": "3uaiqKVa3qe8Mc4ngyGTPaWtfuhxtDNgyRiH6PJ8qqzVRcEx9p72zzFnvfTGgBtzbQDXHM7nASXFEecWqeCaRXAG",
  "key15": "GSZ9zLfhm9nJZSn6HuL1QWm8fRk9bM15GM8rc6MRg4yZUdMkFFazNEvqSK8wjZdjrnYqYorDuGXmXAAEMtU9ChX",
  "key16": "5xsc7w2gjg3WArJEUrbchgc9YKMghCugVonpduEeJa29o435KZoMnFjuQGc3EAeEVnzQqxYqrgjUR7AimKRqUdge",
  "key17": "628Bq7CPQEbaGMrDdqjh1pGSJmQ7H3Pd2dN2to4cPkyR2uCQQGBmbbbUuouoEMSf3bEAHXjXTkiHFrVGQtkt6yxf",
  "key18": "3QYWQbRKB6G3KFvcidHK1Pimsr5wCpdpR7d5JbVWmZvCsKBP2ixGxGqtYn4KfSsBCa1CEGHtEPp97wjTmqdt7AKg",
  "key19": "4K3KNRCZAquDqQMsiPRWzW25sLb9FE4T3NQvMEi9eSwfUD5gJbVe2r8DLC87W2h52hfjKqriaGvxLSYo4uP1Xk86",
  "key20": "QtjYM47vnVRQ7MHwNnNwuL14ww3k6dMqE1KwJxCLBRWvnCpgPe7YhRCN44henv6nwD7fHhVGbMz77TMFTa9achr",
  "key21": "3yMhR6wBrB6N46Yo3jeEveupAoferSvrnFUCRS1hQ9QaXcQY3Y3y2goRLX5fkBMpHEdMSY8Ym1mCmytKjUF4KCsw",
  "key22": "5Nfp3ToVksNW9DPsyC7373jzsUgBZY3DBZGBTPt89r5KvKaugTcvRNTcZaXYV3jEnyYhr99qsjXav2959gsKBqVS",
  "key23": "ga4gXS7gnyeLAc3LRf3VhrjsTpWTc6kHdbXCfAPiJg1erdUeLLqHN7gSnrDD8LGqVutfsyrhq1y4neM57HDe3G9",
  "key24": "27PskLtEG6bNwh9BanxMctbP8gAYyA52zCWpLaK35uoH39cPJoJRJ4XD6r3zfvUkyPm5SiDDFcVSQuGy1JYw444j",
  "key25": "dYkDNkn7Js3VgCD8jR5hFS6bHwAgYEw9ksDdtDaLXazgZbNvFzhDSGW1U2aedRG4HbUDqZ9pErAwgLK5kmJP3Jg",
  "key26": "3bPmdTA6N7aTYManCqsN71qcBYQK6WE1gQXPRS1TetH5MBcXZXWbRSo9BKYKHLgwHkt4Za5zbHG75Mo5XfedAkpo",
  "key27": "5gpkAkAvk5F1axF1yPL6J2EYdyZheQRwwk8j35V8FSLNTCcbQumAotg7PhNhMDS6Y7si9iJfxH97KNbiGZ37H258",
  "key28": "3M85fiEj9BgyfMcBrSDMg1A2Ua65wuA3rJ3JEPz9zU2LFm9t4KWB93SPdiZ93LcHZC1w7VmdP9vLRq9N3Jiguv6k",
  "key29": "3co2rnENpCMjhHzT2oY66pvooqXHiqhSjbDG1MXNMGHw4RHwpEz1bppki8bKNZKQkJBpQv71ZEWxvUbiA9UcqBKo",
  "key30": "5UMhkzfjf8wxwf3wDxLx5UiaaK9Wn5iR2unT1Vs1QLkehms8bE9KxsVhNEwHdueNpTjJu5rcFtZ3Ea7rRUQFNhZ9",
  "key31": "5635UXAN3frrpNpby1Ux5G1faW6b9VMBD1AQ1JAcdvorCASgFHXYKx1fX4m6sfjv1n417MWJyGFKePfdyyvc9r5H",
  "key32": "4QCkG3sEt2fo9VHZaWP7qfgYDMoACKpyafrGTtAALtrzSyCiFb2b2epEvVMN46KNrYLqUx29JG1hwxBhghBckbr5",
  "key33": "3xYMNsYTuv4Pia2hyZszaWHTQe8MrEenFj7ccH1g6RVceHdrrCj9y2ENw5nfts855mCjmgskeNR5g8qgcsWVM3vs",
  "key34": "5hVyEE7hPCKr9hKLgKR1bsXN9oAQRkpcVqzRGuBFGr5yTeEZsw98nmSRLjK5RYWN1rPyiJBZjGp54KUuQK2vADcs",
  "key35": "48bFBmoUfhPoZUvq3EmW2ZBAggQc4CqqAUgVPXt4gTu5R4qyujEmNbnmqG5s2NKPmp1GRbwYWZPrafmyRTufTrPk",
  "key36": "KGAWo7yBfTG3rCrGANshEsJiNMLcxv9FGmjMoMLzfcYWqqCfD9p61H39S3raQP8b9edRt1L2gZsNwFEpW3FQ5EB",
  "key37": "4wUPtGkyGZETHERJTzPn1C2V8HhH7ymTh5i6z1r96nAByxQdWXqoTfaDX4L3owUdrvmtCKR7sUak5UfUTwwKwMtH",
  "key38": "5ewXa5tFJkX1pULmxiV99zjduMQF8DCeuv8phoynbpWZzG1QG7DmgpiJZGBYgKR9j3qr89PzYNfJ3Pqqp3v1otcr",
  "key39": "3yUAg1qbEJh3NwX8UJ8NcT53CW4bVw4kLHVySMMzDFkJa9ZbbgVA9j3qUNvAxK2XjmqKv3CFLTVjX1HiWa3Fz673",
  "key40": "3YDDF141HNdMzKuGrtVRsoDJABehmgd9ZCFTDeDCJCmbnEMATMqNc5LAkNKY4gjuYysg3t4ciVvMz1spUJxgoLun",
  "key41": "2oDveBSvemETDanhytKdhF8oughLRLqK4EdRJZfaF4xcGQ8x7mqMzx32Sxyw8N7FSEUCQdEmJBP9EahXzKTotECZ",
  "key42": "5GXbB1qhEXkz3mRZ8gjQZMAX6vp8LpsLH1PetUusg8HrcFobeoXS7WWTNJCu4HZayDCCgVD4WJG6aAfwNdJ2nZ5e"
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
