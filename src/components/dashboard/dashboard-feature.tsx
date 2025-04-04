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
    "tDRfqNpRR11oEyqcjzKPpYAapfABA82gmXDW3M2j5rayZiRH447WK1JsQwAkehcsaGzi11ft38bb9ak6hBeFGRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PjDkRctM6tNTi8Qfgyw9DUzK8fJmCjjKY8HSYhgNRSKVh8PynJDJdKmjWjCDupS1896B3XDD2GnqWLA6MB8quvC",
  "key1": "5dvCjDoo2sPHSoKEGLeV7RH4aoCbyQq1MNQ1UDz6YL9f2T9UftvcLqkv4Y4i8WJQ131NicMzP7bi4dQFkGWbyBf6",
  "key2": "3FAhQC7CtDDb4SwQcDq34NmKbKxDpWWbjnph6Jh9RW3x6kYwEA4kefoGHq9YAqk1YL5gJYNeHFPtHWAC3uixnSX3",
  "key3": "F6L44LgkEcQYH2whJQw38ugvVRYCUnmgzHV9xrstXMAzbvDeFLLShTswyCR8NTFXRaRJNAW6qPBK7Wkhe438u5p",
  "key4": "4yLvbw4X84mfSnrtZ9sZYQbjCZWwRYZmazuBx2K1DKX1cocaqKkEiB4JxhJZdn5ysv852AVRWDXujdiYqstMfyHx",
  "key5": "5uCt114AUSJ6cGJ4ZmYN1A1QRLdecAHP9TWGP3fEHeN96YQTw3ZsNLjutPiyqzo4AudBoD2xKkFKnSsKyoMKwUke",
  "key6": "4nfRFL5k7N4WCwQn8mgBr4srr4Bfs1GaDeDuaUbnxJHXEEdjLP6dU9aYaDvCtdxvSEe4oUUKMXLiZALJtzaxugtr",
  "key7": "2439HnJgAd3Hk6cNXSQGkaqzRbhBBZwVyNyc856xATFvfWG2uJar1JYtGb6TCim9p31gfUN2H5L3WJ856tqdx81V",
  "key8": "2ytidNx3LaR1e36jg3Q2poreXLofxCADgXDgWCCnYAi5oAUWA8tNoLJyz3FDh5G4eGtEHnFzjUEcsYSDcQKEA2BT",
  "key9": "3RoaUdeQZQWVATwkjEKgv2PaEeucF8uUBFD11MzWR38wnq1rnN3oLAwsTNUWwrbRtd1SV9hjnUX1FJiqQxFvkxhE",
  "key10": "54AjNAFaybs2kzKVSrGjvRQr1UPJYRTDQNPxWQcQAuPjrdqQEYRTKka29zvnqcywBsn117KAVuGbLcW8aoCwWE8w",
  "key11": "2xri9za7xq1CkHvk5gRvjFoRDH7sXpezzUtn21ao1ZWXJjGF3JYpkz5AVLgfHRnPMdxnddnuBGiL7w7WC8zVJ7PY",
  "key12": "4cEL33WYpMSb6mvByzax1Mi9E1FifRTfJaWwnzR5BsR1jpDBb7NVSrULbNcLunHPJEioG76DjbJrDeqG2nJzQdFL",
  "key13": "2K9FEJaZ3M5GkQo5p5e3LEuNaEPQBMsXPoU8AmKVbcQjt347DixefrrwSpGyw454rQU5ZpcPxw17ABwX9b45GLJU",
  "key14": "4a516A1zwcH6q3WX5tFwNDPF3kPowG8F9Kj6UxMbm69cLhXwQDQEd3XBot5kvx71YwchT6E2bjGfSCsxEtibMsTD",
  "key15": "3vpchnWj7uWoZochebyfkZEVSCe8yvRLeuZVNcJXJRLkMb5YmxzLvgPsuaXQe8DqFponr7k9B1n7rb2g327Njpkx",
  "key16": "548QDwrkxm6oLCUejSeJFnkrmmygXTgxZvWVb3P5DJBzyyyY63Yik5Kh1Dw7bG1wViEhyzMCHnTJAsrzMxQvo2GE",
  "key17": "5VSwvUqkzGSbcrZavDomGXeU9EdVL6FKshdK5A2DwN3Ey8Y4QPM7Ysn88YgTTHY9ymDnvU2qVz5sdUJCjoegHovY",
  "key18": "3D8nuRtPSYdUZb6acVU5KZyTqQFMUM7JsgBGYYnDbjxjXdpSAUTt8JigdnYQ89hUoN3ZeJsuM5eVCUhLdD1HzPsb",
  "key19": "YGQUcoDUk8jQSvowwiBDVxYjUVgocoAYKkZpmNPdtrhM3n2GuiQ1mC3yFd8rjKgRe28fF7wXK5NhE8nLAiW1qSQ",
  "key20": "5PwjZVUnHH75wvXzrACp5EVmQThvX7cJs3MzvELVdsFuaETY8GfZUPjZs8trC6oqm7BQ5hETqdFx3652Yje6XKxR",
  "key21": "5N3HswALbghg8uhso2TcGh6yarcxaxyXVSeQZD3UAbVm3vdohMZdmn4bcg4AfCL744DVdtf3GzbyB7H788tLhc23",
  "key22": "2EzrCmCDFA2oknjRETtkcjpWBs6KP12wbFiZNbJvLfdxPann7RsjSqKwAUMTJgMZQwqnmKhGBpgQrtLziQcjwUDA",
  "key23": "2V3GsQEugJcTQi1bv77ei6Q5RZp7eXNM19hVYNgwsWJM1ZbqYNskmoabySR7wfmkfqZfFkgEbu9U4U26xBuH5L6P",
  "key24": "QPpsZu1NUKjpujdzz2wkYD1MMNNXKw7BX2Un8QTEhbvhwdH3wHH163Hn3vRgRmh9wd3CM33NJWYwUKYKpexbFgY",
  "key25": "3qU24MxcAqG4psTF9ysP9xLRV2NZw3HaguZq9royhNHiYsWuruCRmrf9Rirsxaiui7st7QwKcHrYAfcmZYz7APeY",
  "key26": "5E7pkhD9Qqeip23uGwPNW2fYEAxKQs2as1idAgS9186CsdE79ue1aiGBTKLGaYaDMtzGZD8LMPBGZwT2objjWNm9",
  "key27": "2B12AvD1hxnMsuq49krKkGznfF9fzqjmN488Lw8pW1fa1zrY34cWCp1Cq4KbHHvQQkpAFRrD24mtFUcsXvCqMtH3",
  "key28": "5jS2fKctxA49WWLhwh2a1h8RNEyrTPQrZhrVhBfGggX8VdqDm9wsg5KZebMuH6tWnq3PoNf84v3XVqRAsfVWkKLU",
  "key29": "2RGpjvWpUFiiu88Zg1QvqZLoE35Jdtp2eMxsPLt1sZd1tHqDkD1wYqCStd42wAPuZzLneK2dsEYV64UQanJDBZ96",
  "key30": "3EnR7WKaHYuotsVc9wCYxCeQr4VYdde6tco1SMvFFNG43iDhx2MLbNJkPhBpvA5shoWv3N7QqfDk2ufvMG52dPKy",
  "key31": "TTv1eWvQEq7dddBmKyWRPFyBJGiTzvdmPXrPxG3VwmKZgDyHr42kqbhjBooRLeTYJ9inf5tsiYofEkPZ3Ub9Uxt",
  "key32": "43tLauyDZitJcTDMAnqgqXHFYQ628pnu142SNmrCgvYVrduMEiV1PTKs8jf4J4efv9xbkPWRD2ysWXEUzdKvMmod",
  "key33": "5W72keKxPKkLtu9C1Cw8yoSd667NJLSeQjgmPWp93xjKoPm4zZnt6jvitLuU1Ga6zTXSrxaWBqu6GQEGv1isjpjP",
  "key34": "iN47aAZdgXBEuF7ocdbyWXGruJ8NSUyZ9Xx1Sn5DP9HEagEHwgpThZbWUAuMxCWWoC1FDeYd2vAkL4joktGkk15",
  "key35": "5oMCdNjBpiY6Md1AEd5rAvY3J9R13QTpUDQN3xULGbfCyYtCrtWRobFNep64dWYyCd83LSsZy7DnyU1oveYQAsVF",
  "key36": "2FMPdPtQGRLpGLPbwdSEGbQU4PjjMM6VwdmP144xWsFJnbNm7Mrf3CVpEtEmkVNebxsmUXiRSuCAzSNi53WuDnkP",
  "key37": "3f7uXG7nHPpzmUN6G6Y2CCm7qNBzwtrqqEicrPt8stu58B485QhTaqMEkZwievsNKu5mGBTXfca15rjXE5SXZ8QJ",
  "key38": "51XrpiW5gU8R86QktCCq2zSMgzNDooqkyrZJUvX9N3PKaxpVFm2F3CfFSA2EJ4ibKjpZWrPMSxBAjiQHwvipQxBd",
  "key39": "31fGk7K2HFJZQVodrmWHs8g7njjQnP5TbD3f6WfVMAbpntqrXPSnkN15bokd4xzFJ6JZDsKqNJHi3uhvixS76DHn",
  "key40": "4heSC5H4XHunQTTu48CqL1z8JudYxGcgxydmkzoq8uR9e7JP9PktA9nZds3WRiAsb5d7ARsdRdKgfwiuNXddoRZy",
  "key41": "UMYzrezdBfZs8k9S43ehaqtQfjRiuVzsdgcrurawpZJtEqdMDk16kdXfGFZu5uEd7NFAK7jJPPx4R9CxqtuFSQz",
  "key42": "4UKW6XwijhUW4NijdLEZX8dx7yNRL4t1oXStChe9LEK2fyw8FcbX6vPv2SptR7rvUdXiWvjhc1TeUeRxSVYJQRqA",
  "key43": "3YsFUacZQpW9ffv1gS2AZ9JFF8BqKDNiPpfyNPbFEfQJwHRYY9YeNpVxQUKeJRzh4CtjakqEhLADRst9zF1FxQUG",
  "key44": "25J2C5pQVm4BeQgEKRprARboJCpAtyDc8TjMrcinNTPcJHMEZVtWPx6kTsTadshwgMGw9uwk55oeubTn2xmTDqfq",
  "key45": "4a3vv7PcXtZX1J5oFZj4NyQdeqPdCoDKuwkPS3AUtF6kUgdDwF5g9f5W9uG6Kfs73sR6aRsmc5ajEJcdgVmEuckY",
  "key46": "25jfEWbi64JdRoXEebWaLrFugEvNoAgqevro7cALfiEy8tfn9dL1H56LoC2cSFVT6qNsoj4NemcMGW1bz7Dz5wMb",
  "key47": "5u5xoN41yzHqv9bfd3pDssfHjRgn9a1VjQvoT9eN1aVqmEp2r5DPWLHfLUtpdh889TiwdfK8rxmhZ7vrW9vNL7EC",
  "key48": "67TKgasfS46UT3ncks9VE1wrN6VXPK9JSxuxF1wm3jkdCVNEGgZxSF4mtKdnXyDqs5SUUHrhrHj4MxWxUU8Tpemb",
  "key49": "2hbzAH9zBGUg5qsCFmiWm4c7zxoWcZiFDnJk3Ecc2fib1Ru2TNWAy31rDsdhFcbx8tSHWnZCqCvpiUop8p4TmE5A"
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
