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
    "3xxRTgMJhytAugZC7PSSqiFQg5aFWP8LjiqG9PCdeHNfhbbv9hLkfFBWPbAcJ5zKhm2z3Vt9cDfrxTsNAVfAeSr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cB67a5Mt2jjAwwieYPARoJDjaRegY4HRVfHaQ1P1emzBobr144Tk7jzP2EZd2vAGoYyL8y4ZbTGyjA5VWSmXPwa",
  "key1": "63DrhB1EyDP6yJNaLZ8ugYAQVbbsnxq9WfrbbkpTWdas7wBvZxYSVFMqAr6jSBWqx1aQbif1c7fKiXgVDCHcFvCb",
  "key2": "ZZxHNmkxrqoq7GeQzyjqEvuA98EmmyCqMZoEocZDVZX5tLf3QRKueixJvnsphdRD2HGnMvYffrr1PVazUEoMEGa",
  "key3": "3j2N2XnkGBBku3FpJjvTDyHKAhym21A9hsRaBMSRjT51qHujYbnsjpK9mFepnDVREF5WY9RF89FehZJYgsF7UBfD",
  "key4": "3GSuBLcBBByQSA6EqkTxmNJAKHmcKs4yD1Q5oCY8SSzqurFDaBtMVbYufxzRcYijit31LjFBncJ1T5Lgr8tnsMKj",
  "key5": "54WqeYMw6PQvNQbtA69HYxwz4SkkRMJgwnsKUHpDooHXHpQEJ4bitZGt14qH6DNCcqVT2E9dBHMnWGpNyt8cTnDN",
  "key6": "4Tr2LqX2Bi2ZeUwzkHUefmzB2vDFeSYLARKEKJ1LGQFULFZNigaY4E8vTbY7EMvBWNJjkLf9qvjgLtvixVcMjH4U",
  "key7": "5q8ypZE4cME9Ya6cHQVH9T95yqRgE6d1KU43P3Wwny4CFZBqxbTSRQtqEmDh8pEwh8viZUsv9FnUGskVB9b7Adkb",
  "key8": "55EN1M2sCiBLqiSJhHmdxk6y5P4yhtKh3yZfXoxyNaVAjxi1RAZtbua1Sco2mnHjABeN5HR77pp6APm8rCNgL2mD",
  "key9": "5Z8mhGQrHU3cMfq8Fx7T5S5PyJhkFptyaB1vQTacnPNo8jFcmtq6otQgW1adipR34YpV1Pz3DSsCrJDMLrPdVBcD",
  "key10": "3dCLGkK29NNm8nVaT1MrnjM3evPZGA1Z6kY6sx9ciGm31YTagwwWxikVLCMix5nNoBzjkFk6QuhERNDba3pLQS5Z",
  "key11": "4Up4K53E87KVpKb7qUoYux8uExvrRyPpFDND46A8eVu5JEMYSDFPRK3pTtmTvPscVEQ7F1LUHzb5uH1hSviRrFqr",
  "key12": "SMUfTvCfGEh2QDkbcQVaQH4pEHXjtasPTdBy9y3XE753STqQixcWPCP6YKbtTHthuwLad6Y2fvCJBicp3toHD3r",
  "key13": "4MvtbpCeF7Y849DdpoVzxuPHMA5yf9CBY3DmtGE6KQ9VVGKS7GmG8ziqv7SGAyyFNWxTyCi4mU9zEagJr7TYBpzn",
  "key14": "3SuJ5JirjDNuwtBp3iQnVCT7YFCSMEkbMuDugCaek14wDanrjXhsna7FTvV4SveAGpsKBoYmp1bkgg7FYCLQ55hA",
  "key15": "3BrG1qBs8fUFfj4tbsn3M93PL6CfgJhBagyVzCJNfscxuvfHvRjbJ4ZoVU2vwr6z2H7akyPFqsYRoCev5SwwMVQz",
  "key16": "3QYFyfJPb5CSsQptKGZfkkQGD4sYUHz6fwcXFoDrcj1HifF9Mu6Vk5MEWj7xL6GPr24PYm17wa99jSqdER48xbfW",
  "key17": "5RiVWGqbU6JhPVQVYQT4tBiSoCLEhXKM5tFYtoNXzxYfCJemB8fP8pHtLVWaRCdKgz9qmVJLzG5t5St6Ard5zq6s",
  "key18": "SdrV7Vxjw9NEZZjiVyuuKL3kLVGzZvu3GAy2FdWdznWVFikHLQY3DaP574bHeKRbCyKFY3uxbe7WN4b3oPQCHJB",
  "key19": "4iFf2dLqWQhoxba8FLybSXxi8A21eRz4anVh2d9Up1iHMPwsaJJLR54CMThHAW3Wu4uZVkg9tRFYqGSKcn4qGL5K",
  "key20": "sKa4rigTbqxNigKPHZTvJnvQQneYv8j48HnKjUkDJTz1KjsaUg1G5hdyLumAsjeP2Sr1MdYKjzCkEpSFnXxjvFb",
  "key21": "5eyaFBF6Z9XzhJeELFnXxhLdxZYMsgpRwFKXAw3vTyXJKK9mkQHSJ5dKbipMCGWGLctYYu6YVw1AQ7fdVzprxBHa",
  "key22": "2Yp9f1k9cMo6m4rMSLjJME7b1wrDjntBuwSEByRbzJsRi7GWKLsRRmChxmhvKpxcJcDp4Jx465d8eaJVnvs6oQuF",
  "key23": "53krPmcXvNPUw3tMbLXENDY4GxxkpRYkCTh83VbDQK1v7E5wbqGeKchTGiLqDQSRPRfwBwD8MDwqFgu6bGDL2wXb",
  "key24": "vnzxPWLX7WDeEw89WjyFLu8R7ofk7pvdyqA93QJb4wLhufDonqmXi538Wujzssk6sTmq7Xsvdac5Gwwr7949inv",
  "key25": "5qfdPdxEeERFX6GwrLeFTT2bbCk9Qbq9XBKAVGXCmkLnmB4XPKsACN6AUWTTFn9k4F66S7WZnLF669omPNyLkkQb",
  "key26": "5iteLvMXcTyzghmTsLKmQro1SUiZwzu2VaCMEiK9uFrP7Mgg3FYq4NFpDKyw5yVPcferaiFUVZktQnWsqsfmjJ6m",
  "key27": "2pE9hdVkt5FCV1TtLzNvDPZ7FcfTktaJNNU2ivgpC1q4Ggi5duJbBS37gr1Br84w2kintk3c9ehYUcoZE7QsFq7f",
  "key28": "4VaprRhXHX8mfyg6Ejv2ZVfsPyMDEuyz7gbNcyhdCQxw2RZV593J1Mn7T3MoD1zoLpgidkrxhB38zL8gBvocySCX",
  "key29": "fYfGqbe74ESKsZGb1do7oAZDY7PUErGScdvbKZoLcVLei9VeekTYcwrRAJyrhuiYTzug5G4L94GZd1bKLCoVx1k",
  "key30": "5bzxEsE93yZzQCXyM9qoM8cQgRJmZyMAu9WZayQrR9F7PtiFbryL3Zkr3Er2jRWTuzrpowxcAZ7JtXWokhtH5iUY",
  "key31": "5hV8gRaRygaFKwXkDg1kmpYLDqxVJnMie8N7eZfgUJ3yL1PxdzmS7w4jVYzGE5kBt9kEeHSP4ptPYMLyA3kbnbhn",
  "key32": "5SzzARyR8C42iQ7RhktJtgraytDyK6ckDrzcYJRkAJkfhNincWdTWdgcmPm18YuvRuvpWntSVGf9v7gHKWuq3Urx",
  "key33": "2nezev9HgHrrSLcAri5ZeLUSww3pvSCb7zMoDdBRKbfop7ytDrKPG7D5KPL3FBKbradiYHhdpoXTMuQYipeDJYD",
  "key34": "4crfKF1ZvZAXCxxKMTj2LkrmqeJkjthqCLRkSeWVXbfpr2cZUZq9LJVVgPaaZfboogWvv2cbRk39UQCtxUfGxfGF",
  "key35": "5ywbrsa47Y8NBbdhxYHGMoGdycdb3b593NUKhuvj5bFkzBK9xtjwDjgmhZTNsRPrYHCgU9GZpYeS9QneApXsTw3B",
  "key36": "3JupzPR5oJ6Bx3NDQsHEKB15AZavt5kYbjqs7hDVSWpYX9Hus3PgSKTFKPuBHswY83UxjcpdhjcMENa4SNo4ir2k",
  "key37": "3yCiJCfYPmakBLTFYFmkZBrvDWmtwdA27wtTvPvduF7MTLtNSoXNqXmbKE8CDgEao3NfBkCMvrePqj5YES2yy1W1",
  "key38": "3sahLtCqWuLzAri4wnbMrv8TrcVLA7qjpX1KpmFy4Gkw4VSTV6k4zYAsAcA9sQyfSNJJQx2qRDhhCPy52NAVYAc7",
  "key39": "2MtSggpbbtBhhpLZqHwYQPLT5xJHp2QbgrWvD3ShC2vLmxz63EGLzCzpEiMMdg6bdwuWK95V69KuaBdWvzCbmNS3",
  "key40": "2xrSqT4ZosfXtBbRUpCQ8yUL5i9LGEfdZuH3csNMppi5HqhFpg9rxPFSGE2kZ687jZLJxrofG1oQfPpZkzvAJSq2",
  "key41": "5LSZwEqtB9XHiiyTWjQw9UgCoMCqboZ35BJ8UV2Sqy4BZKK5BzhMVB4ufqFn99fQWGkCJzeofusP47SGFpvBPxmo",
  "key42": "3wJn3fGJAY4V1oQL9Kmek2r4dPk2zu5Q8dzHd628xmik69iHjDB8cLQZhVVxnjAhVntvtgjnMiVii4QxvJegzp5r",
  "key43": "4pCbACTvhviLQQXm8SFtGfusCxuSwrwgv4Wr1c1GRNDs3ec1TXH9o8Ts2PfbWDc67giVwq38npv9ZanWZ5PJudxu",
  "key44": "5m6pXyfxkgyK5gC1hFgBCRnVBJw2vvyEe3jv5bqTTcNd8TMWCTbpJvWiBfWHNUJ4uKGCSC11C1bfrVoTVsz28dsd",
  "key45": "3RYtcsH8TEoNX3oYZujcm5sYLSfXWFPnwN17e7S9qP34UbuFYqphfRRobL8wQ8iCnNihFHbdoQuqxEPuDpUdvGb7",
  "key46": "5mPS9mkwDV8CKcWiCwpkzgHwvNfW8BQa4g7zptfjSrcmuDrFP8StS2apivVoBWSgNaK6MeAZZxCgaMW8DzUr7No9",
  "key47": "4GsrwYsV6XUJyJkZDQGKoehnhAkAxfBBgJSKQ23j2pKbzCqmB7Mop866sExp21HuagTjSyStY3fPJtD3aX27CNsM"
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
