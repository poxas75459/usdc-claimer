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
    "4P3MtxxWcTYUNfVTHjrh9kyC1UHXnQYSdgrK9NXUwkvmww3orD3kFNNt1bK3QXwtzz9Xa9wxhmEyQmbEfKmFU5h6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENXCmzQ4M1YnuW2gEvvde3bkqsZRJTXRXW85kebaiy8J8xy3RSk9Ty4oXSn5cW5HY619G8brAAayW8Yca9iVZsW",
  "key1": "21okWde8wB9uFcVGVaQfW9u9JzQM3UFauvEsrTVEwqbw79UaJsu943jn8vKdSupXTnz7Y1JLpZVLNyuu7jE6tKdj",
  "key2": "JXerhoMh2Pr2PKXkcFjwsaCSkuq82bKFgoZnLB619CARk9HopPH8JcotUES1fEwYswnb7J4yEtfGLrdniHpvLh3",
  "key3": "5JfTRwGizkViDUt6Xke4J6iChkBUm5akYVZA6kV7gZtH5r1DaHtFWEr14cUV1nbqinvn3qqydcZfdRaEEAvr5uth",
  "key4": "4yemXFJbXuAPnDoQLEXg8oGtTotoxrcSoHyE4bd5q8F3dHKUzKS7NezPHjZWuLSDqY1XfAHpgugDQeeniTsMfBUg",
  "key5": "DmVVEJsGsHNdYf5UVgYDdLMw8YYfp7pFmS3zMNWPsc8L25wLwdqJ83px8dmSPjTAvM34CQ3tdsk6CHKGqpKRadu",
  "key6": "nYFGQn9B9bMwxuaW3RrFiHaUGfZAKmvTaGGKtpELYfB2QdXg2qEWdxj7UnubefVRJhEZoMfHLpfV4RWVfeK8kpf",
  "key7": "43fNkMUVCzbk4yMBRFTBHosCL4Ezy7BkmZVy6umeLeLMrHfJUeS3SCs5QDNUzCZx8Wa4XSVcJMCtywsyaLQCgVs6",
  "key8": "2cnJh6moxnNFefkDVPEeTm5FSbrSZdvY3SQ4GSZAJXo8qFwN8uemxsDh5KTHtmfxP56dEhd5nCarPikUaKdYmH2V",
  "key9": "Xb5VqeB3RTHppAXMFyDTK5LBJ3NX4W2eQUm6URfEEgMBRU5tuCkRNgytzDKs5JFDwoAE9BS33zRinYsjojhCXfT",
  "key10": "4ndcCHnenCwahBXoQ2EzCgE8Ec2SBAkw8sVEjTNpF4BsQKaof4jb3UyYV49xpkq84HpHVCxWUHpQwAewU6yVNUkM",
  "key11": "3ntd8mtLnvgjLRye8nFGmhCRUfHRXtxzBnomtbR1YGTzcYE4bx4f2Y1L4GmUfMvxv4H7TUS71aTjpPrrfr7ek1wo",
  "key12": "qVZR8JJ2kAgH7jxvkFcMcrP9jHiL7er85UYAoDWV5yHRErar8PPZpCHy1g1QMkm4WK8UZjvJSaEoLG7mp5h4Ts5",
  "key13": "PGVNKCkdiHEu6WtYPTXo1FnfXFEAGm97LhdRugGr1ErXiZ3SQfZdRGD8AcBW9qbdyrsFVDS5eN2BMxXS16f6PiH",
  "key14": "5z6m3dh7fe7kEp6ZZFC66aWR8G9Yvu5hHwmL8PEHYXWUSSkT62TMMudLrxEwNtexQtmVcgdQbrj7JJzSYjsVTNWu",
  "key15": "2zWYHZW8wwkf43Nz3ERZhtL3ALDL279W6dC2HYz3hsosVMhdCTAaPHeiSBDQLSNMdRYVTzYqi767aDKwibfrZNTh",
  "key16": "49D3Ku4qGcfN3ehkmxgfpYjLGcyv86i31aTjpYHTzoZn6EaV4GL4YLCZqd952Fi9GDyJdkNiZZyJPc6uMMnYnd7h",
  "key17": "4nAm33yyiXURE4Jituyxx6qGJFVHFVCGtFrMxfWw2HQBVtiQ1BD7j6gsaZwd43cRiAjvBfbNWgt9T3gwPrfnZqpk",
  "key18": "PoxQEdnRV74ga6tCvdpLmJSVTnhZEHrrFcuA8sYy8cr66qxMrV2DeUUn1wTWGHAJDQmhHaDy2mGc6zqmKMpZCTP",
  "key19": "5FW3YciKtmLWaboQ9bkQSCjwbXubfnJXJfoBhHrshRmGZeHLn7QsWWvpoieWNpXb6aPHtQM9W7rHq1GBGYWBFCKo",
  "key20": "124h7s9CEFa8fmP7uJF5sirLsSRkYauraz85wf3upqb9ZfmPZA24yXvxDfXkG4i5wT3MQzLNdAu6iLHNrp3xQrEL",
  "key21": "2QQPewx8APqb9eLuQFNGqrWBaFMrWFLvrtvXnkff24UFS9asd2dc2mQDBPuh5NhDmFn4EcYNeLptRsNBSKoAhjYL",
  "key22": "386nMFxfVyQtsRhAQLnYn4jf7h2DLXJbQE1ziwfqVGXbEPKrWiRpXEgbFVhqz7gVuc2mhKJWGtCtgukJqekZnVp9",
  "key23": "3frt7uGHkaQ1rYBDXWAMTSWKUmp4Jm3MEQPJ41sjwL791MqP21G7qCjmUwTcbbKqGnEgVkGuPPPAY2iQmqMWoUKM",
  "key24": "2EnEN9ppyUaLLdUoEhJJrzFYA2QSxG3mjJKGqGuzQs5zsVNojZskVEiazmKMZgFsGQuiFjPBnsN7Ayi5t1jtJ6pV",
  "key25": "3NftZKD9TRkQYLLRpdWjFvYgXqNuSodwAvX7uGUXWqBSbzvnzQnxJ4YoD82CsMgEXsMzmbNnzwxYp2UFC3LDDKMn",
  "key26": "4atgHjb6Tjn2BKMFVRSGqNRY7VebPxPs7oE3v5w29GaSJZ8jTAesN2YJFrmmpYFiufiLbnSmRYyyiBkP5EczrYqQ",
  "key27": "3k456H194aVujTMQY3Q4tWrRn1e4rAQTp6bohMp1vxtctcZaz4JrnF5qKdDXMCgDN1ii5W9s1ZjdpgmFhoeFxLyt",
  "key28": "5j9yoApzGEPps7tQ9m4DFmGys7U6zzF7quGSmy7dx2vrQwsP8e8XqyAk5pxNPAzFQVs2F6fcKjSbsb4AAhdkbsYG",
  "key29": "4QqmWoEM3usKaGgKDKCP7FboyLC8c9TV6yR6HX4YXuvuMAKr2vnM4UEukAH9nJQTFYfdpnpU9WHSNKJaKBy7yjvE",
  "key30": "3XCEZNjtTwMwgriHuc8sR46kWuSbCyN7ZJEyoM28PTniTWbJMKkti1E6fbUVaCuPYUMMoCA3upkMdjo2SFE6iFdx",
  "key31": "2R4Qv91b8HcAm3de2jGVrsbzjKP8XFc4u3rryk1sqSKoFrG2xySLaGFvDPD8Ua1z4QKiG8piFNbuNbzbd1wZSAoi",
  "key32": "34s81V1Xthd6wQJxvfWRBfSTXxWfTzXkC8vZKx7jiRRAAtnRqpMqGJVJr6ySycLLuwx1C5UZ7hiCunnvzW3dqv1R",
  "key33": "3c8aBVR5pgkXbHF3PkoXsN7KfCmcvYdExmtodZvZ5mMqg9Z1AuY1AEo3hWZpW3ZYeCnkbZHkRGoL6Hje4VvUDswb",
  "key34": "FKeM786BsydrMNPB7ojUkJbX8QjvwtK1YXhjgMfX3bn6DWGcBhi1DP8Sdvc4BzgvmK5gxiP4knk4gYdGWmfT7x3",
  "key35": "5wahDnDthRvWmQVF39YkLMmxFB6bcw7FXF1fGhrE2kVN6H1fD9Tc4mpYscvwetutSoekEdLJyQ4KMsRVgb5e4W3v",
  "key36": "2JmGBByEWU21HR1ZHARy6KScpkjDuxx2DNCo5hKGUuBpjvbygpLdJdebfdB2NmZpJmJ9Fpd4hj39HrDhnXxEvYwE",
  "key37": "kCrYikJeH8uuLYnHugynyHFWbLxANkmfWtd2RZyfEC6farLixgd7aVxRxKap64CUHiaR9dhPwgrfU3W3ZLQ4jan",
  "key38": "pj1KZCjVLnbcpPbnm3ziFqjBwDBKaphsGk5tFPeU6tdUDy8yRm4kKCQcQxviQorVdPZ4gG8bTpxnbbmNASXPRy3",
  "key39": "4yH8LkNLucmTnnFCsppKVBDsgmPghUeZV5wdAbWnX71A615jjLr9som74xDTqbJYM2oPbS7np9NyRjnMcjiwW8ei"
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
