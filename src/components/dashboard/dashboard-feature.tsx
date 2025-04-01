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
    "4zAgtJ32Q5iaSEAQizAoyPz65sseuKhHxNGB5khdQEZqrPTeyAT5caYSAZwCkws6WmQ6UyfyaKoF4GqVmQzC9w4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YkRdyK1bn1C2rr9XGWFsDaBq13EqDV11qLw8ia3HXHgeHJXR1BNwgFXiSrUQEc2r18QCpL4sQqstymSnWoVDKKv",
  "key1": "4Sp7PJJNDNRaJRZnkdDxvDD4rQ4bc1j6FhoY8LMnBHa3UzXJmhLmsVgFNAb7pRtn4GdkW1WvSJVvsRvYoayBXnNH",
  "key2": "4TaBmDmQiGCnqn5aZUVkfL2rJftmF6bxTtp1dYtjtSNpjGA5mcXWVQCg8xGEsUQXqiq67UTNRDHRL2Fh97s5M9SK",
  "key3": "2Eh6QbCF3CeMaSt7AjtuBBbvTDYbBT79AFVmLCg9DxyAiuQbHSTsHF59krmtoqT6G5axk7RHqX3FyzAGhs8fAALG",
  "key4": "26Xo89LBNKfpZDapjYdXKPzSTemVf6fBvstjpXvyhidMMUi5rtnvPchjEALCusVVvSAyhAJvwStsXhFLFYc61oJa",
  "key5": "TCxbaJp2uQ6bhSSLS4pM9LKj6ENHihBjgRCJkHq9gbM88JDgUEykEkJesRXas4htLC74NFTu4f5ybNGS68xJ1Es",
  "key6": "4Fq1MAssoj9jKm7xGHtMxXY19Zt8eQ316D8QjGfdHZZuYeqGU5ZxTKvMUDEpPwEkULGukwpJDtBrmmXZ9NG8Xrag",
  "key7": "CWKFYsAp4D7naQwYSzVMy9g5F42XonZYQ4fQemrYFMRDVMpb493iL1D7rhWvVTcCgDPW2T3NAkr1UXL3hzUSHgG",
  "key8": "3o7F2e7CHhXSpCJizMwYjSikqVbmpDX7Mn4jr1ZcEpkxCrwhLy8hPTUvs5autypufyvHkPtWC6iqnErYxvnnMA2s",
  "key9": "5GHnbUVuBhN1dmHFF7CvnJngXrbRmmmxVybDbpX2CrfhBCaZjQNCaaZ8wmURtHxGy5jZsiGpSs3vMAiJAyAgor2A",
  "key10": "2TBzBRtzTtjzqZi77YgAGQETS6igKoVwuonigN6GFuEWXDdYVTpuBRfc8qE44UmUYYGRdDB1xwQezc6ngydH3epR",
  "key11": "47a6xMKoA8NAqhAXx97e6KWsz5TBZQfR5iqnNiHkA5HxfUCM82sMgMgyPsDB4Q5FY4Rfbc5i63kagcHSuMzd9osq",
  "key12": "3ifwpLd1eTD4KmMySptsjariwXoH3VNyUJQxwZ2SRnium5AtS2MVoJ9qHPM2Vqcc7GeAUvgbPsmG6xmynLmjtdW7",
  "key13": "5qvohvxkiBbjVDp2harDPfv1qqbJyXmXmUCR9W11G5GhiFTfdsSgDd9f4aNM3cQbdYZwMF5cfg6ou2NK23bw3znb",
  "key14": "5Qe1qSeMx5k3snSQfhsiWCs3PaKJBBJJweaQ6dQtonfdwG4NPpkzHhfNt98kgdup5G2vxCF3hdTDa5Qv6rvoCgZ8",
  "key15": "3D9WYvw34DFf7tFTtqtyyoL8BLkCcbYwLuJAbexRePBVRHHyYK1sCY64boMFeXAJH4M6zKzpeVs8cGEKcm7476DG",
  "key16": "5JidxpKhHakE4S4LJi4yx4HH8rL8jFxjCeSX24wNdP6YVbWN2ixgXvigwVCUGJArwk4dGTVNH3GMsU9HDZf2dquJ",
  "key17": "4bRHHaYYHrDjLVrNRkL6zbF4WT66FarrUURsGgMVs9r1EijHuLYu8c3izZeWcysBy2gLEAXrEWmMZQ6v8qpKy7aR",
  "key18": "5UDgVX4iqnDoG4nx7K7i1EGRHQoENmEdEMbvZvvhdP9N9PW17FiUtJAeaL2pTNEjJfuER2Mk76uvjB5swL9xCtXc",
  "key19": "2UVhKHgc9LjfMYDfZDeR9HLwUYUkfmsY13b9duj3cjcEDkXF3S8GSQGyxmZi1EGxABhsdrJcWgNH2QVvj5nUeo4d",
  "key20": "4XjBenUT9BNZqWWvLr8RrNh66FjVrHK3HdDKGzFkAnRRDWnYQcbK4fnmiW2ULwNsWdNFtuzfBCpQJFxMX1cP9fyV",
  "key21": "3CV7M5Uy4DkJ4dm7gcJ9dr14DrHo63GKsKKFZ6E3vJYxKcphBntM8F1J6A3SHVEMwyUDzXDycghzPhu3ir3p7ZSp",
  "key22": "3shZJQQP9CBYnN5pnGgwxWZCyfwu1348TQrDUmbvS4rBdGkL7zK1bwd8LYYt8Gg3nQkc2TZuaNHZ1prTxbdYUEDa",
  "key23": "4Uuy6VcsrNvbh7LU8fE1cbzS5fez8G7uQupFBLZ6TybaBu82d1L8rQttCUeFiKvm6igqKJUQygzzBqg9fVkd8zTF",
  "key24": "2wVCmqQG1WGBFGVKoqk5LWXXU9WkAQDJvz1Tp1G2LYtc6QLmALE82wq4t11uDFCVcLRKmMtwGhyVtdEnt3dYHxgd",
  "key25": "2VFKto7QMCQudpHb1xyq1nWcfmqT8z7ig4yNQzXCayjHVboRtXV5g4EwPRSsHVeTmyPtzfVQQUncy1zrSJgjrT18",
  "key26": "34TLq6rM1iAotpS8EPcaeJ9n4zHchCVVu7cPCuSn1yna4F8o6HKN5GTzhcVipvcofFfSCo9SofZ4Ljp6VBzXNHQL",
  "key27": "2MpwugRsuFvnNrFDeDmCRvpPutkbhRTCPdPgXUSsvqdQsffps2qR7NmKBwqDd2D9gSMEf1xm2e7YS5xxm52BoobH",
  "key28": "5JxQsxqhS2g6FqT77qmdJNWi1XnhYADCgwcj414e9byfKREyPqDvR7h4F64p4na3upsZ7yMv6UUuTYjVjvx7fsV1",
  "key29": "618FVoRfm5CSYErrpEdhsR56qXwYPcsUVx3AQu3ununb7LQa5DepnA8aQVMLudsFf9wTyPg9kXq9cXEZysfFfepP",
  "key30": "52t2VhqRuT7SyaAsygEFvhMt1pXcZwvyDfJiUNjUxZ29q8jC7wUmSkPwSd28AP4zNAv9QfxLX3ymHpKPwuQmg7jx",
  "key31": "HLVNA11vaDh7tXxJn8f4qLBNPVXyzhLKd3S8aBF4SixrpND4AWB6GMjgpYDg4ASVLogoxv8Px79EWAwu4Vyxecq",
  "key32": "3rXYu5nBp4icHeUNHXAGg9Y2ePacSBAUxfaYBciJMMWrDuVu3eekcsdorK9jgmMimCBEk1wPmRwbP3qmfiSAKFAi",
  "key33": "wGhoL8MLdRL3kNSvjH2E44qgQsY3tLXhaTs6Gs1SBR58BmV4K25wGA4gdsgu5H9FBDYTY5VHVGX13TydPGPCHDv",
  "key34": "4wajJ9vBd6F5QazAvDEJjUbpmPdtWnDFQKz19y2C7yudAaWhEdP6zY3jJanay2i8rFPR29esM3ohEmJvT2A6rTpw",
  "key35": "4SqfpkdHZUXCtapRewxWsKMFGGAB4DgwvumkYDTkD3ZrzGXaenSiNGYpkuf73GNeR94LARdJUyNdjPkP5zF5Whjg",
  "key36": "4eTmTSZ5TrdFx2bHg2hbp5MRss5Ay2GVVmnyFzNwgQS4NzyhMXU9hMwzLwFAr6c62Tc7JaT62PHUSKNiLdd37MW9",
  "key37": "4v2USyEYbqiYrEvdi5fTJQ2CwHYys3QGxvW3Nh98oK8XWGCrjAZGkDLJFK2KrVu2cPCzDzeryW8KpySVmjUnTtZP",
  "key38": "4RNdeiqpjdjSAqmmopUZyPAFCL1JDn5wvf4oU1FsqtkMPNUfV1ZYTt9WZeJwyR814g2rmhoGp2XJDATNJodUEbtt",
  "key39": "5Y527tcC1H3PX1SFGemt67theanTVQLxWsmq9Bgn9AVCQf2NDbRWSXctEMvmtWRwtBg7eYtqWHzHxkdCND7H3eHF",
  "key40": "4cySUkLX4iSXFjfFrhK3ZXK25sUhL4MbgmuxUTzFRQtRXTYF83Kx4Bf8Z2SNGvkKemxbSfYbXScWxubFHgCFHEfg",
  "key41": "2hQuGFNSjDQBMTAvbWq443n7UvDUR9RazZtVueMjPD2kN3ue2jnh8cNLaTsRGNNERrzWFWLDMmAiacRa1zv4EH9s",
  "key42": "27QAnodnGksAL9MrhxRnjh5DJXXbFVFta7Jxvo48PFoz3ra8iZ7K84j1hzPSQ2xrLgon9FtN4rCZfe3eP8gp63xJ",
  "key43": "66iMX94QqKZPMcqgQGuG1fz4KEMvRwFYqUALcreeDmcrWsQDbmjrhp91MxyiYCrgQxBJNrdQbdwNhGV6HKXbyG4p",
  "key44": "3Zc7S5cwugoUcxtZimnbx9aW5NkgnaeYNdt8m5fpWKbSVjWDwsYPiangxkKRpfrMyYfeD8ker6y4Mz9pZ8EJGCVG",
  "key45": "67XXyPg5AhDbL17BN59oGjzKvi3TkAmV632r2ZpQr36ygspFYWgAoh41vsp2cAhqyW2RUjt58uK2FB9dRxMf8PoJ",
  "key46": "4t1eSoBdez4ujYgLozALxdQqTyh8NEnyhuegxxy5yhYU8ypahARGm3YoLVinxAGmAAKcH8LThtX9u3TazbzF1AJS",
  "key47": "2NHYKhQfj9EJCnFmmgddkdyyFvvFEESGoRofZCMF98cT6cNU6KUcvuQyZaRDm7uuxqr7wcmkTkoBogXtRVwgbhUt"
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
