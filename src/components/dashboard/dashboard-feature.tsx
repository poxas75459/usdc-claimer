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
    "3Deyok1A7DBymFvJcct5CRHEWpkRPs7769Xvf8SnYSfRvhw1ohWoy4M8Yz1JDvjZRmWqwLwbFV1fRchC9Y8AKt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bkNRjpneBqrVXUguw373LSYFtAAHjojb5sR8xLHQi86Rk6wRJehp8kFeGUm3enRQATR8aZsFSzPsWD9wzgkLkH",
  "key1": "3guuCA4F1uuoqD3okVi4GsmwCdPyQF8qFwKW8v2sPwNKKB9eZTSPGYcBbWYafY4c9atunauWqcJxkVK41uu9NWBT",
  "key2": "CyrUR1SRFruNRGtHMrqdRq7dUZg1g7qSLvui6j87FYfFh8SuEJc4YGjkRM1M6tXB3EtwbH2MxV1gTWevezUyZ2K",
  "key3": "2jMU5Y5gz95hM86f7bBctuC8bUZ4JqqtSjQPw3tncj4HqRLRvnPxV4vGm3UZcHRHC1BBcM3UFGP6XvyTvkdnydzm",
  "key4": "3Gm76EgNn4CQSTTG8dStkLNYMhjeDApjZF9CsBXQZA3Lqorf42cxDiUaEWMChucSKGnMoZ3Fky7nWpghzd5Aqz6V",
  "key5": "2We3e1sn2KURTkeCaL8Stz3iHtZ3doUATUF41JEwbgF6Tax9JX2aZ6sK6yhz5FcM7kSc1gdBNUqMyD2BtsAnF6az",
  "key6": "pcj41v12xMVi6y79W57JB2CpRzxQFbXDD4KuP9ApCuydBWByWqJFrbTccUFScqbGomJbaqNvxtjV6zrfD54fmwu",
  "key7": "4ZqmUSowq8sRXvTELH5FbTf1wYd2MZaMcAxAMiKy1LedWiGEG47oH6z3btVF1fXWHFNdocQtCteXgDFxwMWGyaFN",
  "key8": "VFPtZjP8iEUF6KgsMo9L6dWycNecFtLttCwxGC12Vj9tR6isaTrniixhCrjjtq3XcvKY6XaghjKj17jnrqjj2YT",
  "key9": "3Tyk8W4i9oRiFquSAJeqRjjEL7uynZKKRUCZ3giMK1VKwfjwdZUwK55LFR3HnpnbeyquomyepCF5aMV9F1c5SZx6",
  "key10": "2Z3sHoWuqmkktjxTY1aDF6wSEFUY16UFtDnRUi7NR1aXoPRAb6E6rAXSB2Hxtv39GMBJJSpG2hL8wXp8DxJ8r3z6",
  "key11": "3KesR6NLVi9MooA8rKV161Md5h3UK5fmcSAEoQ3xWuoSGjZXTz8xJSGrPBbogmG55ZLRL7s3PFkhWQtbgK6Ruhyh",
  "key12": "5eMCAqfdvdQkwqzX2XH1fK9sEpw1fuC53LLKbbQBC3JFbF533YeXBYykaSkEhdNqtKdUbGc1V1ZEDYKQD3KqcPzq",
  "key13": "4C3Q8owxke5AnV73rbNYnbYs3kpH3VX5FHWQgBrTuirAKbDjvugnyhFSppquy6zZvPngEQ9ueCUD8yv2EzN7eGp3",
  "key14": "3e2TaPcUTJ2AhfNyWkhXmGvahPTYeRsdT4Hf617LXDPRfqkRwd4JdSMNr4MvTjuHKouTWLpukqko2zNHVG4U18q",
  "key15": "sZ52gRp1rohUF3jG17jdSiMNVwo6W9sAthk3GAgkbi2oopLGDgEGN4XQVJGSWtWLraotJMBoXoX53G5FjMWjjN5",
  "key16": "4oqJ63T6mXiTMcdTDdrw7MpeteNxb3Twb9qHimiERFjhDGHKoYVkyMws35oU9BahFxHd4fDc8xeL3gDK5HZa26U2",
  "key17": "37ohHDxaGvswxr1zZPnqc4HVfb4cSb7TK2vSrS2QUWU6SW1AFuXRkgTxjgf6dNHQUjuG8WgpaFdPcfhgzrdapxzM",
  "key18": "5mveYc4JxW9YWsjJL1K7sBrtNyK1ZQeVdRKgeS2bH9pYoLbKDihHD5yUxoTtkQoGZXm5122p88RgKofb92cRso2F",
  "key19": "454UjvqYwB1qNtZmPuEkWMLwyA19dSyw1TbT2q9nDXcXmDnN8HtsoTPsXTnk3bJS6EreKJsxqxgKvZfufBD2pke6",
  "key20": "3QQih7CUqDEcwwaRQDzYM6GVYh1JYxPm5PTbMteoSEKDFbm9YhBvN4zB48vfGHHbPXbb7txRJugSoNX6FWPqmsmc",
  "key21": "3k4awsmXujBWzv3eDw1GFCnkWYGowyqwGE47C7VvuzkHaRUNdGXcDGpWEfxuHHRqcisYGHXUG5WtwgCohVNZv7Y5",
  "key22": "5oXtshcW7TxwER2HsTtiGpZ8zaHRtx5cCuVkQw3yKk4q891LSKTZLRC2e7nX9RLTHH7v9JEGT4v1Xq2NZK4VVujZ",
  "key23": "4EcfXS3PTzFqirSj7XigLSWNEer4hT71aoJhFUTGYSTWvMYxoQLWvfrF9LqQYmTdjRfrauGyYGeGD7DnGp2kPxxb",
  "key24": "4ydLkZUGs7p5RtmSwLSZ2fbYWr5Jzqh7eBQubvEiwewch2XKJjbcUhXccjSNo163AKnyLV5Tc2za6SpZsud4o2ta",
  "key25": "5aRky3GBTtd97fRukMVd9nd6jv4Cw6eeJXuigAni2B1qzqER8Hf4wNp9a6CWdWDmjFw91vE31MY1W31dFvzigam6",
  "key26": "2AD5nzLJRKCiSPPKij6YtWbxVhRJuWdCrCoZhvZBibK8SXD75vtQJhLuokuqLJwid7JQZG1KV4i6sFkssGF9HJoz",
  "key27": "2xGpKuvq98eBzgfYpfnyRMbRfjutSDxebRDsEzy3VZAU3zsN7aLTWBipZm1w4hLPHu6PGHZz8eyWPz7vKqczJ9zH",
  "key28": "3XCSfwrPfgUDMhL8NzbbDTp8S39zzdr8yPcXGnfwVuGjf9gwPcUQ5WuSLRsJPknq2gNrchMFTG9jPtxh1ckc5937",
  "key29": "3W5npS5TXjsrrohzkzodBfKnpn3WEV4eeHCzFsyTyRTj7CLqFG7AzhevbVz1GaPFpAEjKeNQ4Z4Nemrd1uhHq8Nz",
  "key30": "PUTfpTKsceaspq4jibc93y7w3qhH2qjTUdzXGB8cDiEjqYdutiJvzuFaXLBBF7GDTuvYb5buVg9ioPdfUPJStQ4",
  "key31": "dAubjC7P2tshGs4ZRvg1BHGPTmDWvfgcTFFz5WttZCFRkow74YNSAwYbWXJCuFtatUTNoSt7CX3AdCkRZ9UWVES",
  "key32": "3bJbuxU1VTKuD4JrCsFVmrcsNJEw9zVkJW8XjhRNdX6RUZpH1jRQsFdBtG7SjjhiP498Qrc3rGgt5QQm3gD1WZ3h",
  "key33": "4UwWhreeG2BL7PiLvghvDRui22dG4wYujNTdsQG8STQAbvLuZg4LEnjszc8f5HXzaKTizdK1N1cMdfYmQacJUAZE",
  "key34": "2oBsLtLVzWKfDvACfztvudN5EQBQRdTfEz5zLAw42Mn2GGZcQn599jikB4eNiqibTF7aXW2mukpKCdpMiN3WDgnu",
  "key35": "5udzga6LpJHc95wGSYrz8LLb7i7ZdC1RnZhbBjgfeGFQzTKMqHRjFbavTSbjQ4NyYioLbs1cJtiRbFSQi8SQJmRZ",
  "key36": "4oJLFDc1vgsJVmgKtx4xNPW1yvPbeKtmuzPb8CoLoMoKx1i3bWcC5uBdAXsx6VzXHQZ4zz3Cym954P3w8F9wPN7r",
  "key37": "4tUaGqyUEHhrmGdB6hQE1a1QmHX9oa38cHeVqnQ59JSTvtBBrZpHQZe8kGpPg2Ss4z73WXBo5AP8rfZnTeXebEAt",
  "key38": "fHU497aEmL261JZL14CRoHmZzBst8pE3BkaWpuf3abAJCANWwwsdCRviK2HwYU99u69FFqD8yvPUdZgvqfkKtkA",
  "key39": "RkSusNSSgAyGL6G4xxQx23v9acMWqZ7LrEAKHmZx4uf6AoQKfZ71T8Q5VxRw48EgfbB38Z1uK5WN64pdW7ut3H2",
  "key40": "ize3aWBEHuXQMvLKjUr5FVVB9nXCMBGPZybL4oM1THE3XhNPC2owEaVPDp4QcTQhrVPjRLgo4pRN2JwtDRYCeKL",
  "key41": "3EX1DB8RpkGGwYBdqL7RHFiFnWgw16EJvfNaiup7jgKv3MgtXy7P3AXcd5E8EbvNNftp4HPDGjT8nKbSZeNEP3Nm",
  "key42": "2o5NkemdizymB5N5s82TxiRyQ5ePzKArzyJLcDxbAdWQ8wkFeES7kkoJvGrF2s1p8z4W6AtDVa639g8Gn8iDoBc2",
  "key43": "49g2QZwu4matYDcM4khuDbRfvRyjV2v9x15hba6sNspeTYCJvK6Zx6bBGUsAmzibSHhJfA54GtnJHsr55Jn3Un6k",
  "key44": "3g34APfmGYec3W34sVu6FRDypyuUH4WzZJPUbonmQUvp6dqZAQ9EjSzyfsMKmQXzc4d5e4pNxstmf8soZxQmRi4w",
  "key45": "22HkGbt6wHRs6RZFDjyrEin4y49jBBKHexfFbcWYar8yoMs3VYda655eHS2qoQ9QJVsbMkbQn6EuYxFNpMSrN63y"
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
