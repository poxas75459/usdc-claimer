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
    "2maFDHypqSE2yWX7UThpMruvYuqGBzgfeiiQtHwtitqsVo2Dsru3mAGRwQ6D5JDcCbC1WmFYBmH93E5AAxDk32wF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uLqSUpwkzntPqAwxBAzU6g7T266q1s9khBV5WZShGXYR3qjFzSVDux8xB3EnaAF63We7XFLbZm4q4LnPxTE3SBB",
  "key1": "4kg8bGeXfpAuKugpsfqs6JvD9TWL5p9uxDwFmGBtjBF4FKWr3BSmoGmAmbTV5bfuaSuqBVJvgZ1PqoBzfUGxecKw",
  "key2": "25sPLejDXjn5GuTY9fixf25ZjR5bgHDqktx47VYgL21C6JH11JpXV1TCs6FQZqaZwT4HutA2sMJDeRVeHeR7Q8Le",
  "key3": "FB6UFMXdHq7QYqWtdQgXQ4dyVG61NvM8TmtX4JaGC9eiPTVn6kY7TmVi4KMrG41NVY298Z69FMYPktrHCKXjsRn",
  "key4": "iPHAwPgFeSA99TPeaN2vYCKwXn6gUUSQt3fWVJFyuFZT2Bmkc5aHLeoFEvtHg8cEGYNuJD2uY6bLcXFzLWuTNri",
  "key5": "DoDvu6htgawnrFTqtXJo9x4cjNLskV41BuFScCyiY9EqWSoCy4oZ4oqSobrjTjny6JuSDVjnQYn3gssr4mQNVtK",
  "key6": "5abq4J3AjfzMwPYLi3guBun71mHhm8nVHJ97h6GiLN19Tsecv6tcrn87ceyxAR5DPWY6rFgVPsSrnBDjU1RduYyS",
  "key7": "2J6YHDYpzab5bNqe4ND3wxP8xhNfaTj82UExMqaeBQgYbfG98GAZHAQzW4ZtpARhYjM3HQN4TrVVepWtNtAypqyo",
  "key8": "27GsX4aUEzErYZ8zTm35izkkPgMtFHGERZZygSkdNrgYhQ8J2yjAt5mCHNy9zancXFk6MNbVSL1YVeMvAS779PWS",
  "key9": "4wa4NvUis6APWdMo2hEG9cxVVP8ULgcHHZXhzmP1qeBgMoynf4vbLy8eRvGgGY55q5E8scYNUAKHJdGdGGzCeBkJ",
  "key10": "54jFvUk5BYqXhzS9WWv72WKsoBvaD1YBtF7r48eTuwdhyjfoxU2b7m2dCcsQvGt6G9xpyga9NWCxoUe4aCDX5h9s",
  "key11": "kigiDpzm1imgapdZ3Kjicneb9Z6sxHyucvKcnzbyDGo9qXdKHTAMovCBZB7JjwA94ZmDfxH3ugSSZD4ghzijAzr",
  "key12": "2bR6zprvvU7iV1MFs5BQ9hQxDd8aC65q7Gveh9KPiSyhkTRst3BTC2XqyHweh3hu6sXkdEM9qr2PMPGU22igrP1u",
  "key13": "49WHuofJnjy4c7MziFPytxxAj1iyT3dV3g7uwam1LL9QaZyuV4VaYPAMYJ9XHEAr2JGQSZXvELsUg47iPABDL12z",
  "key14": "YLjdTrk1ZyAYQSo6VHicvc1hz87oiQLt1DEELbPsn43dgWeyUyGrs6wwz4DNb1iaoUTcxCCxN6AW5ub1JkMZPa8",
  "key15": "2SZ92GzZnvCrvKuDjZnWAVbGCHis1onUsvPjtUQQDVsoGRzNStwjNn51Q2W3ipJFbXB3Qnc4kzAYboxF8EnDmJm6",
  "key16": "4RwwCLSPfQp4qDRCg8zqVG9KeNih7C9cTbffe9jiu3LNtqb1guKouHCS5tpTrrn9Gag9ry2DSHaoSvZwkC4PS6cx",
  "key17": "3L8zjG3gyZXQJQ2vnXTDg3yoAMVxWLQRvzXCjCbR8mu4smB8jpNL4ekurFi2FUwPL1hRXBek2PSMTenrw1bjpnVm",
  "key18": "4TdfTiYTwgcUXE5VHpDnr84KCNyJc7VxdDx1Hgk8mogpa5n7HbdaMiTGHsRrw3i7eBKEBuRoy6q3VSDFREGhTrLc",
  "key19": "3DdEohSVDXqQwGsTce9wJ3VBzvr3DtUMNE7rnmj3P8g8hXT5BUcnWGxnHR8XnfE4BuJDSXSiRMRHwJFBTLBuptJE",
  "key20": "2Gd7TbPxQoYMPkHdeUtKdkK8TBhKrLPvCkaWbWRCip8pTpKqaMgdDx4echneqHgpMBKreSoSQZWtkH98FpXQ8dJD",
  "key21": "3BDH2Uz2ZHeWVdka1wekzfvssBqD17an8uDGLfU8q4SiJovqARkKTJZodK8UtWGqN6PQD1rrrmN6XewLfhFo93Qv",
  "key22": "2SQu3zv6zP19WYkVPQzYZ8rfsyJz7kg5rszoVBUHjL6a9jKRFCzZXaEgkGSFheL9rJWkyJJEwAd3MZhfuTacw9MV",
  "key23": "3boxwpcEMm5rkW5MhBJfaAjvZPyMZvThWEoCHUqGybcWGowby2QJkSBqYohusDyk64VYwm2ckf1W4cunLyUteMeH",
  "key24": "2s38dotvkLuFn6jzPRL7tehn17irJY1LUWfvQNV1gUdtdChcQoWac3XVQgFCtd8StmjSBS7sCEjjwHr1Uap9Ypji",
  "key25": "2tNwTTzQ8w1TjKRCdBT1LjcRhSTNES76zRfJpN3NSiRcGAFHMTNiLDao9CeDPpemVv5uL7UjLSmb25YA5K4YeWBf",
  "key26": "5ddQq454HhBfuSgu9taSZHRahT4XYBJVMMGkrpR2jRTWczFpRDn2deF1FEZRuxtVRTFoeaNSn4CPPdMhM58npZZA",
  "key27": "4SniwYzNrzxZkNANqryLd12Yx1165zE9ReqY4u2XTnu3X3xYDPLzpuFTtuj7epeeNdQ8CVZtcea1fSFv4qNeV39K",
  "key28": "3jKrRPABSKjD5Ryn9ehRZhejfovFZnLCcPkAjDqk7ye6758y3vsqRhWf3DTYVReaZPuJuewfbyqhnFrbxNMKzBZy",
  "key29": "3zgqRjPRv8vpjrP5G27o43dvpKJ1KVsN4fmJHkBKqcpnc1ndgiL5hAtmz85skXMxvjQjEohLuRFLDJXvHZp1zTPR",
  "key30": "Tsr5yQWTGZgosuHtG923y2KJBdBKgt4RJEuwqtSBJWWisZWm9qUrFxLMx7ueNKdYcqCTprtvQVCxJNnwsTw4GQF",
  "key31": "4XtzozVgmMkdCwczx774BUQShDT5K2dFHBnu7dCVmo7Zi8DqgYWZ2jSuuXrV1KxHi69oj9ooiRkvr96oJ4n5eT23",
  "key32": "3uE5o7jkqx7AwZXmpgvbqF8LQpnGBzy9mJnLZv2bveCvLJUHE7kNaBQ1XemCDoeek5yzdXqNqBh2aivBWdmDehdC",
  "key33": "45VfQQKERrcQVMrcjx9L8dCEteYxoXGKqeEtdHYyKhrgQcK7t64nJwXBLzzwuq6PPbuBTMGXT5ypA65rzvfQcNQj",
  "key34": "G6wpWCMXpBYx1yuqGdFZWVupDjNzzcfMzUtN7jrtcAqP1cE955cNSTuAkqkDgbE1pDLnxKjCisgPwuAFxYviLCz",
  "key35": "4LhazTUmEiV9R6DHyPSNNDntX8NDDn3JAVyTmAvk4trAQ2fNJfpngrdSThsnvL9gLapwACaWeuornmwgBRQ21HFT",
  "key36": "3LAtdzL3GbdsmpEUgT7Agxw4ygtVqnka99yZJNbj7H9Vm8m4C98GVZb3kH8GWFWEZVDvVSUXNemYZLbhzHTAsRG5",
  "key37": "P3iKc1fbXzG1xCGd6RDr1xmzM5AqqFePguRy1XSgmW7Svd98qSA8JFhEzoznin1BUTGP9t8ScftnTcZxXVFYqJP",
  "key38": "2vrehBzRPvsiuurQiLN67ns88tqP5wCGv6QDjgQYt2RLt7AVPYZMYCkTKXbhfwTw34xzoushEr6Qt84aVw7Zq4zB",
  "key39": "3dUqDkqky19PmNMMWoJU6xKiTpM72PZBV9hqXjmYzLB4DnkBojm1yqaNCT99MM2MFckrYiBH4ywsbKD3u1mUK7TK",
  "key40": "4wWQDFj9uPHoF1v1AWHb2YdkWmBWFQDopFKRRzeic1StvHYBZe4BkFDoXXYDvct6qxzeTcM836hiV6o4uV5htWJF",
  "key41": "56kpFjkZLojeuLyitDvVjgepJmQGoZvLVPdmXfYNdFL2BoVZWM5ux1KEe53ptA2zMHUBJDq9TgouiicXjqbqTLG8",
  "key42": "3p3Y5qhreoJFdEvpVRFoFn2VS2jPyJE125eW6y2F521wHKCFnZTQVAbvV6LhpNkBoTh1zGtfgesFi5XueTdByC88",
  "key43": "24JYqJeaaLWhrAxhsdB9NXJJ1PdCz4VJzpaivLePGcvarKW3xjnsXJqrQV9qP942L9y5fdRneGJ4QYNtBK5Y2ebR",
  "key44": "4fFu3Ymkt9y4R4nPp8e6cZVZs87VaaH6ymjfFR9p1mXtUAWbxnjKY2qWGnZNnpw5VxwSTZGTC43AWWu7S1FXJTd6",
  "key45": "33JQjE2tg1R8kY5i7JR1HsYJK3cnnqLcFtAMD7JonB1LkN8HtcN62A67BMAfmc4DotEm7FU72TFvHjVejLMWoP4W"
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
