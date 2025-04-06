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
    "3eYyXKWdgYYM5myeTteuYmb7mwwf7TqQ1rjUgesn5pAcePwMCCdqfoSBttc5FpqcqRRSTD4Xj8BPriPSey1uyK2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xrZc54eMfXMB1v9TkPCGA9EiqT1QXaBWT4BoCuZHG9ur8dXMaeTy7ryHmSS3Q8DhyaitLTZdK8ZtMyz6ebFEevh",
  "key1": "pFV259GNoUa7WcHZT6PcWdqkorFcosVE11tVBHqqgXCGghpG9W9CvnsVh7iMgbwQzS1rNKQeDrZBVVaScYHS3xg",
  "key2": "5MzCoDcNfr4CuhPwCeph6gz2G5RX2V62idE8ZiZah7EiA6QVCVSFGngdUvEqiRX4nJFSMe49cGYe2A4ExuK862WC",
  "key3": "4ktngmSJLL5n8tiBgPUAhL8vwYkjNV3Rv4mjsswXTZZcWdHFiRtLP6NQMJn5w9UhMYz5sqyEp1yteBqfHKibWmHN",
  "key4": "DH7WxAyV7m1EbgEKGZPgAptFW3Ji9z8LfkP5tBDYrbpVw9iGBPAkMbLW5VdhniByiJzdbv7e6pVr4JEMxR1Begy",
  "key5": "4PKELG1vFtUqgCRUfnsK3VjFwwWMciz6r9wm5xM7rwiWi5XS58aFKu3Z5HfcTRz8suLWUxBLWyL5U6NpuAeKq6zY",
  "key6": "3KXjMBKg36d6zX7XvN25oWTs6awsSkk14moVi2tE8gAsPF2d1CGbaTebpdqkNHwg66TfwNH1yJ8rrKwJQqH6H7FC",
  "key7": "h7kkQNCnwofoWAVNstLeHjyPS6RyvUWqN9GQ7TTd21H31dct2hsrvmz9E39xyAiwADQz9wJDdHSKxcHdLtgfp6M",
  "key8": "5dSJdJcQ695dagSSGdJNbzzE5GV9J1bCafy9Ja4fc7Ch5E8t8JyjVzsWqfA58eUuhxtCxoeyCNNsMSRiHJg6LwFb",
  "key9": "5FoqHhnwERjjwRnzNE3nJUSgCNCCWvVWXCyu2dAUL4hqEqt8DPmwMHexGJELQAtpKrUdd14tb4HXUJsx1gBvoDZu",
  "key10": "3ZrWNo5onF8AaRRMgqK6ypX6ZZEw8yLf6jXYLuF9z9HvTnN1H7QtoCBTz1c9ZAyw3aHpFmHjnQbgaD1YgQWpHmPH",
  "key11": "QjaXRdJjWW2VKhqBPcN9qExeGUrkPLSeWWAzx1ZfEs6uPs7LHjNduViz1vBrZzeYEdYec5AmCrA85a9n7dsca8W",
  "key12": "2eHA3FngrytrRzXtgsExrEQ7Cv4jR5eNzqJzuufEtpfN32zFasYwUsNeKN97q3tvUY1zRGytkmVH16e1N1bsuBnG",
  "key13": "jtg4Ni6r7DTRoB9Z9iVfhxanDzGxJ8vZsT8W1eeMpTirC6daoP91Jao9brtYZTb7oo2fFEf5npNhLh4Fa5UET7x",
  "key14": "2RmtXCibamL9wGqQJHV77ASTFT2PShKhScaLhWc6Q7yMJfoQzsJnqgEwg4AJeXwR8NEw87EzJtkfPehWq1L1Lquz",
  "key15": "yX7CyPMMWtBJ3nNzWk2LzQgJgjukzmLPJtKzoouvxtEX21g3cJvUdoyBjdjLzgnjagu6QiJT6ZwxNooteGFopsq",
  "key16": "5vdJavC5BLS1rwSstBiMKbe25N6A2Lj7iQAyuEp8jH369ffL4KiFD3Pjc7sVJ1wYdyvTKeNE1ZhknhiaahLcuVNr",
  "key17": "4ggTCdp4AnARtn55a41d1qoGDkPVT6Hw8ECQUhMvc59D7drvLPHFzfH6R8YqAQi6dhiL7iRkU6sQQieZdYMP9uzW",
  "key18": "rSZZsggmnekK82PUxCrHpXitSJhXPVNwx4NZSqhVUMm5aEUnHWyuughtUD7kpR45iT1tL3zb7HVMGxRmV2RPCNr",
  "key19": "38CTD81tMHMnFK2KAzFyALk75wav27KmvKMpQWxqCMBbyC3LyLJQwuRGZmq3Z4iCAvV16SmmStMsfirUow7CfevL",
  "key20": "TjrYmpoafKpVKkziDhY14gzGoMvkdwsCtLVw8XYwsPkXxnbN6aZENo7MDjxdidok6TJFN7sThf4DGwGRV6FuHR5",
  "key21": "5ih2NWP95kn11aMNKJiFBvxD6rk9GypuHjoxgwFHxWd6crvxZZmQc51bBfQH2Mb39BRErefxLCNz7MHBxaSBKmkw",
  "key22": "iNYhWtxS9z9zYWa31aRttoy48ZWVT23hf1FdnCPp1BcGi7pzEhWsKsxRgf1x92vo8WMTw7F5V9dutqUxhmPArdx",
  "key23": "zvibDU5YPif92QmQ7NcWLFN27FtJ3yJkhZerWZuL3MLweUHgiRvhoDSCPLgZQr6pmhuC4JyH4csPkmBhAfeyh28",
  "key24": "3STz9nuctd5LQLCkgFrCnuup2bzbp2zVg1yYUjAC2cCNBTZqKDYpyy2nTqZtzkBMcwcXsBnyGfUbr3SKyLzSaKVi",
  "key25": "2CEuNzbNHdz3QNEFW8HRCsrSBxnDL5gMBxWX3oUjEzzW4YKkLPpUbXBpdCBLWQgwACa5dDpzdQFmrKScNT47oB3q",
  "key26": "4kt7SUwAv7F3jLdQMSu9KF7ptsgGZi5MCz3mmWe5bXEeaa8YVyuZ6mwCB7N3tbznsPtrTBrszNXKF9UPyXfv4PjA",
  "key27": "3prNTJe3uSyFQ2ztA3DNYXz47KeQSCMgR3apsr4b5bAqe1Tvv43z79tpNUGTxYXtVkX5jz5TDoxiiBZX8jptqnQj",
  "key28": "2WMiCErUvJBqT572V5LA9MwfHx8EeRujnCJcYbRH5T6AQywjfmc2uX7j6BFW3Nb7ydt81VWWMmPafvLqh6ahqP8z",
  "key29": "4i8idVJGua82dqbsJ1MC5qY5gs4zDYBXWF3BFpjnbu554xdAZp97H1XKdnVfTzwRboMz5k9TmYKJvwNnp3gftsPo",
  "key30": "5a6GRpf9GtkCYYRCWMWgTYHYj5Ry6Em3h4mnPkzv9QZCuK8wdyTVUBU9xxuhw9wE8nCHEuaD2S9Xzxd6ZE1Khcp5",
  "key31": "22K1PYpDMh6tksdQAaKAtXpS7BcwM2BnmYZ1kEXvuaKWR9Qbp7wDrfBzQRmgZfXDywACMYBYYpYZ5fuvErLuM6sS",
  "key32": "2PheLrdhNBHry8GXxSPCyX9R3UNanwdEiszo2uFoij8MKJVqsFafm5DbcPeN3qVbsXpTenXRZ1r8UpxzkFWmp3LJ",
  "key33": "2CL3UxxPAALDESLhkyiCCDk7pzp5w76u1GuLwkVdtJnPFb8AUg9tTfMnY1U2Nii5HWoNTZ6u4kgWx71UtpSuSKRS",
  "key34": "3c3rkeQ7PnC3QcUfCPrjaUdcfVZ977bjxj1ZPJvL9xcVqEMrufgezZK6Wpk2sm5aEJ5JS5T5JBLkZfheMncUqSoX",
  "key35": "33uibs7Ej5iEEbjXd6B5JcpVrHXoyQzhCXPKfsN1vfzAMtTWz3Ap2zXN9goPZ4C1fr3f7APC9fqBjzqGnc2jZFQQ",
  "key36": "4EC9QjbrCxWkPvBxCKytTL8mNemBTab7N7Pt6T2LyFaVXHUnip51CiR55YnJXb8XFH6MakE6ojEDMs2wVftH7Vwy",
  "key37": "5ZjbQQ3RFXyPz83zpcaqiwcejNVBQbobLg8m3Q2QLT78PygYZGw5ednjBCUDfiDKZrvTBF9Js2Wz8cf8qNCJtrf3",
  "key38": "3pCjtstX9ADfvttCek5rrJLDCxBrvJjUAjgkKQAQ2VGk4uLpcWuYeXkLzimo3ad7522eGcFVXFVRNKvuHJ7Hh9En",
  "key39": "ZyekJuikSQuxnmD29kntUbr7HBNVyajbiwXwGGeGJyk9Fgw7AcPQXLzHnydSiYb8M7e5VfWjUuZ5qiF2kwdCUt5",
  "key40": "5ssmWSLSZGTqVWfjaQAYdbHK6g2LcRnoLL4AA8ttEkkdVXNxaf5Uxc7jAC3McELjrot94fPmL5UBLvCCf9zjcoea",
  "key41": "wAJistUwp2CycTp1PgN9SX1ft6tP3RYcyeVCnjFyy1Hnq6RjgAdMJRRZFKk2V5TXNSRRgd2jdeZ8dCsBAr2M84Y",
  "key42": "2KutRxHGxyW3yrokV2wGHSCvXRaxZ2m12EPfhRsJEhQXDba17Eqz7iPvpvgoHcTts6k6iFqXxyQeEmtvU74w27vS",
  "key43": "2KE7KgCQAGQAEFPpjq8E85VUr3spVWmgfWkA9KgBR6kQkjYeoW4eGexEPqNVwTpwjFyCc2K4auzvft2cX2djMVKq",
  "key44": "297Um7PSkPpwbiTQuhRb5EBgJjAbBUEwmiM7K943SGrHzLAC9JeaGA4YkWyi2bcc2x6VYi8YGzTkACE9eiiVoNv5",
  "key45": "5yMGxntCqewXT7aUuYudobyJb4ZNEE4fnrNdYVx2TSGyRgQivmSp4kHno1516YKNuyDK7Z9PLWaZ2H6YV2UKJRKi",
  "key46": "2P18bVVstJcdUFZfcv6GnQ5Pquy34GpSom2FjwhX41qDFk7iUaWMbwyMjnxVJhYyy6SLLMumthVS5usR5p9r1wYZ",
  "key47": "2QjPsT1w2rLAS4SDdk2yjyRMpBZJjDcPLD147ktGXPAM2ALdPNNC21BDVsy66ZRKtqsZgxjnS1F8bRAEPc1Z4hKX",
  "key48": "yJMC3ojxjgYkbSGFWFmZKzBYFmKnt7JqDdRoJAqmNZ5MBt4fqQPTQwBPWUL6DcCqyzhf64GshpejuBuzXx5T18F"
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
