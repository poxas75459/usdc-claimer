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
    "2Kzodw5NPX58oeNFFeyuBkESjuymy2euud7PwfDSzb8QwMa4v5pN23cWdEv3ZaMq1kUPoLRuHCYhfSeVPfDcooMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gLQUzgHFMZGsjpBkziQyPtA4BTPEJKwTRKdmg8qiTm51K9bqxUKTqSpfETJJt5SpHosSBu2ZQbhaoSpTNvTDCoB",
  "key1": "46o5AuY11uBWNH3RtY47za7WGTQPfUuoXQ6v7fBpC4huQ5rd4rAXTvkhp1HghKeqUKkYSREZ8h3juXNZWEbzYpd2",
  "key2": "64v2pSCaHCGHVhtbQE9BXqDDmfmi3gmRkttxP8Drph7fdAcNgH9W8vEXBSz9HQ2f93anDdCwTnZgAoKhXxSLPpHM",
  "key3": "51XnawfhMiwQZBAtuZewKcK3Gj6tabieYnjnRTisvj6uZSDAPnabJMWUDezZqKnRV171znLE7jS3tTyPdpjcsYuE",
  "key4": "58aMGjnpgKbFEuWNjm3Cni3f22Q8xe3imLH1iRKbRnVPJLf3BL4gFF8rMQn54aNZdArt2Ge9fprW1Zh38MM6Nz3b",
  "key5": "4TvCk7haSYrdz1QbCS7hKpfe9ZQHSK1P1XVJZJU79REL9oZvXq5bzYn1fffW7yfvoLHykaTW12pPruC8qzo2B3WU",
  "key6": "2hx6Aqk7Mj1XgPGrKu3fprLs6474qgqhhsGWermA1r5CvpaCYKwXPW1ZaPpQyQFhgM9WSydGByysT7priMKELTQV",
  "key7": "5Xf28cKWuSHewf6cPB5S87UsZVSeE3TMuS7L2tn1xiqGfu9eSNiG8gVHVtPumvwPmUjqvN8ZQGroPy1sfj9cyVeq",
  "key8": "5uc3irStjkWsk7Zf1bcL7XtECVKnFySVhXsYCxHm73YH8TC8VjcAb91PLvVMww2grjSUhhQM2fzDEuwqjvG2UoJw",
  "key9": "3EKcR7uDtBoK8tBfyAcmayvkDiK6NfLpy87yLnwsdvat84SQZZxGodY9VuocdFRu3YSG4CKCnFdmUKovKb6beEb3",
  "key10": "4u6fys85CDYYuDceYY8vZ3pUPiW3YV3HZHCcqsgZamJ8svrD7MxKLf8XSsEeSAD7g98oN1cerpiXECDeDxFmC1eU",
  "key11": "35GcZ1HdfVdnE95JUE3Csn3qZfPx9yVz5oV3yMQrrtTCcuUEH7J57KR1sRW57ncsHf7oCXrgtuxRKWQc9Yko2bb8",
  "key12": "GRZssRecQDkDyABF1wHwpBK7Z9nhUyA99zX3pTaD3EkTg7oHmYhZFEtjtJjL2XWkTECU5FUoainw5F2GieyVnu8",
  "key13": "29dpKFo9PeCyW3vZPorM9g4gGZ1TCgaMaFwi6HB1XoRUJntWpdWQwssJvvX8czGuFWPcieUMXxAr14gCgQKsyKxq",
  "key14": "4bLJUencGf7mzLZW5LTQQaePEdVUgYiDyAesTMyzaEkxevaLuSkfHmsXLfPGHN2EaNcJEDPKTjdCVNEFoE1kRoMP",
  "key15": "5dRUWJr7nGJGXMcQpx7tYLHSC8a8UHcjVzfvpLbAUxHEjDvLfiKTSoTJdA1iDNxzzqG1WRmnR7bNVN6VgrTka3sA",
  "key16": "5EpAy9KRPKWX83U1debif3txVrgD64b7LKiDFTmxsCEb4BuK53r68K3HzMupBLz9QdaNezj3yzUDhZRPpZHgkVmm",
  "key17": "4i6PZJUzhVQ67sysTxaw1ipGXnHTFyTmC59RgYv6utnB6PC7NgHpmV7HfW7vMp379T2WDhL8GRukWYzn76RdQ9KV",
  "key18": "msdNKyXVRy8txqfwYKfhfdeEy2LGh1DA9FcRwfwE7YMVWhfe8K7qTASNkdAzewnQ8eNXHtLRYskNPMaKnfqNAm2",
  "key19": "5WGwfsJYwBNRz6gjJrjpVrLLV4hsuU6W3WTPTeect21rfyjUg1UXA7EBsAYRzbB9qgqWCA2UN1kbqyToqH3Eki7F",
  "key20": "3ZsfGRXpxWdfPMxs6uV2e8yEVUYyCyFaMJmhKEmvG5ierW6YuKyW5TTy7iwyXJbvSzm7g8mwPeuYhiS8m3dwyj7W",
  "key21": "2ZPgeEQRcdjrELGhJUgr84KWPdcvWrJ21dHvgyETK9qe8oaexMgQaoDtJuU2HmQvU13Da7Vehg29DnMJD8UD5pav",
  "key22": "4wkkbHWK1hHGPRp6sq9Z5NdPrDQJpBzcSFugbK3EzXCBSjUofXEesCSwt7Qr5DthcxhakbuUUwnYL4SjidTred71",
  "key23": "5PFgBW7yewoznLM6pjaivKRoDKD2FydAgNqcp7pGjFLyMBqVV6J157jc7AiVcdkixGc6RXNwiVx9hx4WzxNxzoVg",
  "key24": "5MCjPJPFHJvc3hev9PPHcovFxiwo4bAnkUghU3B1Pk614JHFebwUabEL5SHwAY1c5Bhq5FLLRhP4xEJpmhZLpKha",
  "key25": "aRetrt1EJ3QPjUx7kxqHAy8mhfjHYz9KWD7UUmkAivLwsSMn6LQuWdQmNbvgckL69AZWXgbD7EwSsa9vKE4oEuc",
  "key26": "2JLXPRFzvtTyFF5tF1ML7UKPb4erayvXxp1bcesBi8tqfUd5FocGpPxYYgDm6Mz3M7xvLLA84YbphZhG3yzHTQK9",
  "key27": "63hfouW5tXRF5C9GqjKeAK4Y9QrS4NLWX8h287Kog11BQUQxjGjv8nYbPoucBDQBvCXLBjUueYYvtkEwpHbUhxho",
  "key28": "4s1zRSf3KVJkte5dD5B2teSccNx6uMajtoWXcYCb4ux3Jzo8NM5wHJQTZSGsAhQ3H7jgZ8T14Eh6wsCa4JrU9sLV",
  "key29": "3p4Uqr6yqixSsLx6ajrcUra7t54qtbTTcHB9NAjKBh35BgpncN7g1hMuyB3PoQVuHsg42Y73KrL3BmyM1yHGsJia",
  "key30": "Dug4io2BaM3RsJo9JPK9U9GeqHj9JZMjsXSs1Q2bi7NhuD2eJSvYh5rrnCkQngC5XVcowQeRQrCbJMz3uABrwZJ",
  "key31": "PLHYdHzjDWL2GbHbKr3yxMMeaVFvVgTZzkdiLaLNgpvBWJmwqBnV5xGZBTWug2JjQXGi8vibfVe7f4ipXtG7eSo",
  "key32": "UphdgE9mnjXjKmmiKTVY61K2qXgqFtGVGggkXM8pW5G5wYnsBcbwSNiTj4hSxp2c5Ua8Kh9dvdPnVZ2FhSYH1iU",
  "key33": "5ZXQvAqZYFcDMrDHEQpFu1K72g26sDNmsJmzkf4n3zNMKAiyXmVfb5F39H1zUGfVgE7JNJmrHboGiwysQkj9zAWP",
  "key34": "64tDZvsbLEXN6WSDPSaiDUfaPvHC8zZKaUG5KEbmj1iLtavqWCU9NEP1pdZSajft7Yvu1akysddoiqsH5EoV8F5z",
  "key35": "2E463ZBqaLBXHUbtsCpByvL6prYGGtrdqD6g8zsQkc5t1gFnmDwvEsGP4ecivzw9JYpguEvR3TcaC8zG2DorJWdN",
  "key36": "2AeWy2MvPqZzxAPigxowZBBiekLjvE62ntbiF6r6ytyvCWQaXtpraZg4rDdccsEUQiimY9YE9BgHsvBgNjztr6j5",
  "key37": "43wmTDyXrthtbnnyJkwdy1fHXemAN5txQs4qxWjgM2zdwPu8NLgA8VgH43hYfuAVCR6SzNcK1hfnFar8MBC8UV5i",
  "key38": "5XKddkxcfsugE1ALEDidKXjLSsxRKWeN1d9vk9tiWdxaiaMYCEDok9PwLLm4HCtYwWWvjA8vpHeXfdEWQ55PjHQt",
  "key39": "468AcaVwv9vHGE4kYoFYuXVohgNFSkN5TeZMhxaSib4sZ6NtK1or5xxnDkQBDZs8imWrs46NHgwWxaQaNUVxYFRc",
  "key40": "33Sfg1W7mifKd2d7H4jZigjW2y6Gqu5ES814MXPFcuXc77V5nVCKj7dnRtRtgoX51NDZ4XKUqtcTteGj7pR2pyDG",
  "key41": "KScLb4NfzWfwevQT6SEWmyn3FZkXQFmU74vTRXThX6n3SMf51DqzGnKThUL5EnVFTq7eoSSHNHWL9FQC8GSoE3z",
  "key42": "5WhF8fJkhBxcqGnzfJVHCZga2KdAE3jWVbG78EXnrMfnyE2XdSfumyoCAr3egqMKjtkhaSe89ssV93QNcDAEjwXp",
  "key43": "HpsZKZqDoswJwJfib7huEikaAZbRm7cDVGB89Jftq438b1GVF17bpaFwb9ieWFQEF3mg8LQXroECoYtgCiuMDeA",
  "key44": "i9hgT21q4UCnhnhngZAGNoXoULk8ccekvvsSmWkMYMkwMNSDG6TqNPwq7CEdTAzW5giLWXasRgW9uu8teQ5CDiG",
  "key45": "5YkCHCJrLtFqcCppHwVtg7nAR1fFWGdHCsg7wfA8mSdYQt451c5AHYpo2nHF724rJhp3GB2ipcmJjKzTMKLh4ZcR",
  "key46": "cJdkJTDk1PLW6eji69NVkf5AuRFvtceRhGpp7iBajAS5bZjxzNZMqCknytMo2D29TMDo52vNqWCNDEUvPQWj1gY",
  "key47": "5jj9xtybCGjeEo2CY19SJx5kzeQ7d78VkH48vT4o9FuC87HYp5Swon5S83c3nWMhHZdJwyd2ygesXVZyjA19VhHw",
  "key48": "3ZoFxSBh1j3hyP4PsaFyaVYW6RMdt7RgtRA46KR1wCEPFtnYPpBPSvw1DNeskLhFQ6GL4bwex9pbDRHFzkqoy321"
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
