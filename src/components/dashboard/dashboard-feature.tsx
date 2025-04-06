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
    "og6m5N188ge3GBTK4uQJ4B1Z1tRhgMgVz5o8Fut6eTukUr93KavxXV1M5UaTYKB3pJKdu7GQxfJirnob83BUCeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dpMtLntqHWF6u5Mf7xyWRJRrqFpgsYbQctMJs8E2z56s96HVryJ95iMTvvbY2hzLvS5xSCqfoHW8AGxpQpFMHjj",
  "key1": "55JbqjdidKZ5SCEgcZYRpfNZtkJZxhkjzBdydMB5efreQ3PnPc6a5MuCGkU9VqRkNYmYf8RsjqJnHqQsNN2g5YNR",
  "key2": "CvqfNdVkadb4wpgEUAnK8Dmq4G4YJdqd4CetcS4VgW213ZeKMKnTVPc6fnSqCCZtn8ewFnDdDeS22gj8HpNqHqE",
  "key3": "2Jp6nbdysVHSufZrKoJ31kJAci7fpeeDkBq9juLUcPbdHGVGW6sCkdZa7cVasC4VCR85oR6Thp7wFh9mPzMZfjQa",
  "key4": "5gpgAtzu6uc3YrNuWbpZFmQXnQKM99NaxJ8LK11pAuK8LhDNcJEZMwJgMC53vAtQG49BpLX55JKifX5B7PquoJqC",
  "key5": "DCf4L2BCcgMenKEYkJ9HkTc2QWVJomSwwNk7b3Ez4mje8a47csyZasaweQ2JXi4amdz7vS92nBZodbAgd2ov3tZ",
  "key6": "2zbdwkduogMpFAKKczHW36ic5hTVhdWd7egJfQseCLM33oDBU3GVbmLoegqN8tYEjJhppC97y5pAtRRfgeyVAVYi",
  "key7": "3TVKk5LzjFX6WUf48TsvVWrngtGmb9ifgeegGmxuYGKk4xDUKpg5gLjYZ54Ru5Run1JaZEzj3QUao7vcUtCkWdnd",
  "key8": "4kH4DMQy2ikj3nKpPFoUnwDESWmtcCTWNWspS1pT8SRfqFdQAw1ecFYY6gawKQV6bnxBbacxDZrsC9TaUCh9nEUf",
  "key9": "2TpTbsVLmABo56KsnoL4qxoaJJzo6nzVLdW9N8cx9MTtkHurvL8scVzDdD82tbiq8StzPSnuaME4i783hGgSPdL",
  "key10": "BWKZBATW91BV9ZJu9hzo2igm7Sty3JGsNdQpxnDwmMukHjkPLeFzPgSXN7bWJMg9c1x7M8pXjfudV3JEWch13tm",
  "key11": "2wFekYW7s9yvrp5xqiteEcC8ZaurDjffvnHXe4EgnpZ8c6pKSgccmCUHxRSMHpBYfRpNBAXXD3HjX91WEsHNnHdk",
  "key12": "J4Jm3XAbK8hGvRwWoKpd3fnPZ486G4frL27xUGJ2XnG1q7EkgFzzrq8Ko1EhyYX2ScxBmCbZSwJpph1BkZHVLf9",
  "key13": "cowDkyCy4L8upMs6WDg42nNgC1rVjKgaxMZBaut1eErmFhuETe8qMRZnakLK6XaYPdNrSfPXHGjwBasVJHrGgw4",
  "key14": "4Xb1AG7VQ8x9eanDTy3phZx3CGdmzBU46xrPtySBXyoiCVsYFhDb4vx9ELZVqRw2ucGzvEsemN1EfcWNyFNaWix3",
  "key15": "2jkWGL9FQHNXfCr8n7vTPotpuwF1BVgpftd7djrPg5mqdnYRr7SsrLzeFCfRKiaA5Huo6KaXg1G4Rx1wijtsbtMq",
  "key16": "597qFhpj9oGygeRNH68zVYrsRmr7hY2H4X8QCsR1YJWdB8avEq33vwoEGDPcVPCYtxE4jXJKpyNdxWEZFDTPTcaS",
  "key17": "JD1DGRRweVBHhDctP8EhRNKre9YfbYXM2asgAPw7UWwiMmeFsUgdGbFTkHXixnijmfbGHbVTr1McSjuDzXebEJv",
  "key18": "5CqUx78YxoDYkU7UDLHyLkiD4kzUmGB7tFkbAr2VeMp17Dxvu5YxLaxgYS7yXTvKzAECvdyNLB2jfbuCYbg7PQXf",
  "key19": "4N3FkpY5y6bsrNz6UfxnXNjy3m6arMcxPQjvv4KUzeErQGhiCVUftt5BCCyeR3EPi6oSS8HaQEeHmUtNg1Co83NQ",
  "key20": "3nd4L9oKkFDzg34j8RLALvSycKHzUP9ZQEBzVQN6qXeFwJ7psDThDqrjrfFbq9y6YdH5gJC3b1sqeyRF43vMyAjS",
  "key21": "3BKcDDwufYg6kYtPDfVLjCPVpzy29wBtu68WETk2w6Hmhr1hfDMDkA6R4cXmCyU3peoZnaGik85EqjffatW2ktei",
  "key22": "4hWuV5opvp2SfWXGPVGqr3ghhvjomjyk3vBkZmLTBwxmMvG2XrkcHSP4m9mCoh5RXS9EHYNRZx9ZDzshqsjUxCZM",
  "key23": "5qtfnFhYZU7VKkw72WJUYE7gRRcwaypSerzS1o6L53UFmFiBaLHeEnAidFKuoRYqiCrHU6VgbHHguHXaNLzhumPC",
  "key24": "5Le6cXHCUteiKhangs3SzGhDF7HVLQ7YNa2MUgRkcWo2JB5ZEbNhpxU3sBvUn7Kbidp5zzZhVQGhJeNLCJNE4tJH",
  "key25": "NpbsuMwKBjfPfCy6SA99MdKMgZ7sebZgT1UgYHRTNA8SSiNKJLoJRvK7Ejsg3UXKd5TSYTDuRvp3d1dvPQWCkHV",
  "key26": "fG9AcF3FANt7n7AagTPtkMjriw9nD23LSJ7FJaZ3kS3hqzF79HrQVKYPUrBrt4UcW62oR34oKJh6HDYWUvULfM9",
  "key27": "2ct74oH1o5RHTd1KKX1igdbSx7yaDEr4ZbBoqJF7imxapXj1WRYzeDRHUqjgb9fv668o5KgzaU6ZXvwqJUvTt9mv",
  "key28": "3Sx9BMjVwUjAUsgWBdEEjiRGiZjnS5vftWyMJDtsuLeUzq1mw2zJpmRWrsmiVrPbAUWJvBTPa5YwynpW9WtENwYD",
  "key29": "5pXAwSqTdvwKJQGxQb53NvSb8QaSp58zhHYsamRjrBbJZKHKXo91c86Vg3jK4MtWMJaG6se1VXw1WnrW4WdNQxTw",
  "key30": "2wXi746bk6v5UqYuC3K3PJdJgoGZ9eDUjQPceUE59Df7Xb4VWYqV79wZzYR6m4sXmwFRLTv29j8uKCur6BLuTomw",
  "key31": "5jTB3AWpQz5oy2oMzVzku6L6ahwvLs8Jqzgfic35VpJaGLTYK8aVGV4At3KZ99xZWUDAA2MGADqYPadALnM2snT1",
  "key32": "3nrYya2xctTcSMJ9x2sCyY5MhDPcs2p5nMhsKiTqgqACLWvASRyPLa6gjiDmmTz5oktVRooMuz3fqgxXnAWYocRB",
  "key33": "3J51zTqkdqKr1dgdqPnm9Rx8ptXRtf4dVo2PNsfpy79saDckPaShuEPgPbsbzhbsSmZv3oYtTMjy5dCSKAKtGmZB",
  "key34": "37jGF7zqjGF7ExQjwPqYXbDcfe2TkdBhKrYik2LeRbBcdVLSLrjmctJuJEqQULE7iMpVxDHkrgbecq98QaqgYvRq",
  "key35": "2pnPaR2xVjCL7jufA5i4KNYSdRUvQmkhGbpv1yW9p6xcFWGxWekuJaVby2FiKwRh5gMukfyafZCz1HU7YGTShts8",
  "key36": "3GPH4BjrpYPuUfWZzKHWjXL2YRu8gtzxRAzcr2rRavJpF2FPznZBc6FojhgyszzHmoJiWs3CVW2UZBcNPwJKurJ4",
  "key37": "5FzQF47gEMAoeDB1zFzELzVv5LjLYTATgmeU6GnX6WDGRYRu4Ccxim36WM3zpk9SfxpKvCjhRd26fXoyfcT7tyrF",
  "key38": "6zBE3r1cihGzg784zTatJCF9dCPGftQbxMBerkiPXqSh9gH9CujNMEcZUh7HY7CQ9NRKCHBVXJa9Hvy59dpDpuH",
  "key39": "4UDYVJt7iM8TH1e3YS9yPjCybbQ5PJpWGcC4pJ55eVHNXJun8yaySw7H5PLKjst7dN6ET3xUnfVR4rS1pGfW59P5",
  "key40": "5S8UWr8b3FjswuNvDwdkYKwdNzhUK5uMXKfUQysHzuo1VWMM9iLGw7n7PTdiJDjVEGyw8F1s2FyRzugUwE2hcFJB"
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
