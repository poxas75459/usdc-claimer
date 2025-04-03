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
    "2ZuNpufuZnE1HRPxCF6PPuPYZTDAKv6aMa11Nr58nsbvsCe1wTZihGvPD3W66CjoYVhDf78DjN7UAcVCqFi9HLdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qd8BqTrGSGdvdjehXv4XpDrmZtkRmcf7QmhHvxyZ9ry12WCLYHtZWKucFixay4P2VTediwXFVBVAvqNzACX1cXE",
  "key1": "59L7nsq67pgErUAufwFGfqPrayJ5nekpH1FshDCSJj2Gn1Vp6bXZaPNNkmXWPD5BBkLT3JnsxkkHKUp5QjRb26zS",
  "key2": "3okAqCMrWbikeqdnBQAHekzsPvnaG8wYmS5aV8qgePqBM4gxBmVciFgUBtXPcFyL1H3LkE6ykJsrdw2vN4qmmu85",
  "key3": "yrxzfBpYXxjVYh6bWycd63gVJFjqHJfd1JvdbYa99XK8AwgbzCBaHS9f67RTTc7WsES3EquGZcXKRn6YeDmN2oK",
  "key4": "2iu7XYYJVyeiXayR1rD2znF6Gz1RrPFuZDGNx2uwK9m18d5Wdhh5WyjJYX81vwfjdHHP9cyDDYsQSgjRqZjeb95s",
  "key5": "4yAm5vGS14q7ZF3zaMvpQ9peGhmSZPqD5VpGmyKrdrZgZGG1GLSzyWFJbgV6c9FqfgUt54xN1nS95oDv12TPSVSQ",
  "key6": "EPHshWkDXdU8RknUvRc6k9ZVNQ8yWHC8tRKY1ApZbC1UnXJgxAHVPodqD9n8HN8zthSucVgGhDrdFf7nL1t1UHR",
  "key7": "SnLyrJSRrhwVbQs45jiZFXJet3V8Q3Eo7FhN4Ri93VnoTEkQNihzagHh43tydXhfH3gdMaR62AgSV8kA5eywgRT",
  "key8": "2mTLuANnoD6ukhEthmooxtLrpDptGU4nNE3ZZfZR5FG6h8RwkeXcyevBGNKijB7EUHd5VPYnxQxSQqrUWzBgni25",
  "key9": "2pGwMaGWeeDJgFmXEeNr3PEi7w19JSr5QMmstvLVGFJw8BdDgKmHkE8uL5B14T9LWaphTsUKstMvUnianCPkLt2m",
  "key10": "5KySYyhesRQaWnLmgH15MUTYp481tHZBJdst62c2rG8LnwnV1JiXSWP6qWbKm4NvDi7USnB1o2j4wkAtcnRQjA7b",
  "key11": "2LEgxD1BqP5UfATx61NmSrPukb4wfyCH3tgtoquBiftbh3SoR3BH43W6vQfgY28yoWNJzY92DAW2chTfuqA6Xthp",
  "key12": "4QBVYJfk795WHVAxRULGXvv2cSK6AA5rBAGyvqvw9xrXjcX1ST7zXLUQTZ3iTMHQUB4YT4aZBxg1LuJCWkMq4Q2H",
  "key13": "P7GGBpqrip3WXhyChFZd3PfYF6hrcQrZfemDCJbY7k9dHgGUpPSM7hifnQJkEzKV2UjvR9Pgkc1M4H21LHt2de4",
  "key14": "2rdYmNX1rvLgWnJtSVJHgaHtnmRr9789Cd6W9U8znxUsVbaZYw32Ewv2mqETGki9jbKcgkkqrppFq1rHaX3PDRtM",
  "key15": "549Dc9d7PSuiEuhyra4XU4amVhsHMZDLVHNEJe8S6S8Sk7KyyfCX26RzBTHP2REr3EyjUfN1epbstTFBY3pR3zGp",
  "key16": "2N9fTfTE7arT7fteMtE28FCka7NTJxm569yCKQfwYPZk8K4jSPS8vTy3ZGH4jks3rbqtJw2CXffRX8XH1t4ww4fj",
  "key17": "5nAUqL9EHe6Rs1ENBiZvJLbBnWLEQnCm5jkjNnGmfSXkE11nkFuqvsxEeW5JqdT24pjThu6V125HuwvmYLtYwCQZ",
  "key18": "1CqnS7C6G61FixbpttyCb9CDyqtj157DjBn8CtqPbmP2g19ScWmbDgznQVkGwipcqpTvyYCdqpsTNhsKfSUjXQR",
  "key19": "27QfUv8DjDUiULHKw53yZaWFFmueS3CgE8Ybg4RJPofodGS9CPyBQTPpM2YSo1pzLvauSf4RR33ggyuj9WiGB7Qb",
  "key20": "3mueehhvabmo7HnCLnq2GEPSYJVzRyaQUEK3zRrdKWrKvYbgbz3jH7qQ6JTHVZiQ1xesfuZ7QrLWXzDkjBXmbrVe",
  "key21": "5Xzq3ZG9fK2GEZ14dqf2ii6syhPr9NPrbB43ykrmCF5i8yKb1TEojFQj6umcgdAqBUnwkX4J6TeisnF5kgVkFCFK",
  "key22": "2NT1BWjeLVvpTq5CsC1FcHBXsocwdzYzSjDdeYhW2pgnLwh9AHQkpBfhYUStVA84pHMioaSfm6eiK3XZSVWTaFxq",
  "key23": "2pphhUKhhgmtLHXr8XxduXatKrLTTBjirUksqDjDGkdnBxqGdeNjFXQX6ouohk8evLoqh9BPS5vn9HR76w9sZBbS",
  "key24": "2316TbopuMc59eA1W6HwWdsVY37J7Gjzs6Xkw4hbRLetDCngTdqPdVAmZWrtZfL26kza1Q6dW66LmVSaqNpwcz1f",
  "key25": "4ji7TotqwWzyMqmrSN6PYyKNJxM7HCEYQj4zi5ChLgLy1foiUYAeVbau4u8omytZW2dFUrTyd5gRcKH2cfNFmVvj",
  "key26": "4P9ru4sqgw4BjmgVTkWFELLk4tmYpgErPUvzYsGLPr93YKAkSHZV7n2yfh1C8zcuQcc5wNbMvTBpsUPgnSmjhZkc",
  "key27": "9ZSHjB9gx8aqkyAzPDoraNETzYYqdxVf2MF1SRLEUgrWSreGSvDEAgxMc6tbe6FQNAL73hATCDi4KhwRbGmxg8c",
  "key28": "5KQGC5UL6jHqgzJaHBJhNGqz95ysfUL6rP4T3FuHkKiUEDenysG74NaDv6753GSCmN2VJUHPkgLcGo2a9qNmnWgG",
  "key29": "4Ph7qeHzTzjyKshboXweHQ5SPh5y8HdDfi9Du67s6rQBB8nFGeFMLx5QdZZ1HngQVkXrFRSZptpBbHQQMh1bzzKc",
  "key30": "58CDgrDmm5GfdF4F6dwbdjtbVGv6uZqQL1VTsNGB2jR9CqpaQYga6AzauEen1kArKxFwBgrbqzFzqdDbcuEr8nJ1",
  "key31": "2XT87n26wsP4zsrkorhbfwsbByuYB2bsmauT7UR5HgWvCyoTn8xnneJ3PAkpaQ1994keRdNb6Hy4HT7reM5LDoLf",
  "key32": "4fqAYYg5mE5QvqjDxbv59phNdkNsWimxF17ewVxTbqTGnNCnsRUESUbhD3ntXdUanq3pWXaJ6P6E9EkDyBntXJWN",
  "key33": "5HvcvZx2Skiw7orgMwJ1Mn7ri4sbPmwAP4qBMcrh8kjY4CXmW3zr3d1TSCE81Cm76X47BGhu7zdACb99iU9SVvxt",
  "key34": "5t17TEj8o11D3faYeE3B4sPPEDd5erotTLKxLNqcCx9NPigkFYfXYyyQH2UZ8FKUhJmZqXfjB8iGNA3rqwNsUXXD",
  "key35": "4x8YrjggQQcUtFmEcpXKQDN5N4grphVB6Zmp6ty96REV8x5ZntfEDVVvY8yw6XmK78PZdzwkWUVU5CcAyBpLuNn6",
  "key36": "4aapxKY3RUZXVtYRhyDzEUBJQW2a75JCRtE7FCBDLQiKazjZLscMTz7Bt4JVqDHDVVS88QnPuCQ3ZiY4Yvs65VoQ",
  "key37": "3p3bAp8omGU4i2vwJBkoBxeXMaoDeQYQwNKZr2AKQ9eFBGS5sKWdYZGwLrKwnxJbMxmsXKqVTXHSUUFksrH68TSt",
  "key38": "3dhWWWzNQtV8hu1br8Mo2fnupWEVbPCNRcKJo1B9wPbh24jHGMbiukNiBM1xV3XfDgzNXC4RgEJgAbSYGpCgY9EQ",
  "key39": "5fMyugsbQhCWmdUwHP4cfXYbiHYCaVrQ4kQXGkgVnsfUydLt6Vwve5Af1nveTUQGutaU9RhkiEGCLQgAyShzFrZJ",
  "key40": "3caEdQkUxfg5n7ZdYbdRrEcdEytLafAuYiCvxdfSb98b35Z1ZVDnVhB7trH6NPuXQWoJ298cYJwJajfg9SCysHKp",
  "key41": "5hKSicHm8AKQJAeL8qDhBVnnULmL69N4P2Xs69sKAY9a7NM4zXHVNyzvUAbVrPC8UoSV45wqUisDKhPCueSQ7Mpu",
  "key42": "5VKbYEWNdZMBJsYGaSZfgCebVCFecA2H9TzMbVd2VzTyU66G99V66FJ4LfPetCSgfQB3XggLMfYfEfHpN4dre8bn",
  "key43": "v5gweRiSe474vBmowUhXEayLzhRvEQKog293uVHcTX3a16Wk1ahqKfSwCv9iyscXLtinyVRLSqd4svYPku9bV1d",
  "key44": "GicrfjgDUoScV6kRh3f65RAuybi7Nr2oAL2Vm1nbJo86KZfRsVgy6cc2EY1Br35ZVUo2UdDcEzGmieMQ5MRFvGA",
  "key45": "2u1T2w1Yn75KRFYTC5y6fPK9GR6EN3qyrb9JJXiJ23s76FwhnD3RyrawsLddxWbKMKEssg9PHgepPgmy11M4Hnob"
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
