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
    "45CwjLit3xEYYuf65bHfKEQoiDx3Q76EnNoCQY5nwai1anYoxD95TDAw57dTuqvJwLbtDzfuhFNUm2cwwyYDcBKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T4VSjSm6ubmBNYf3NnEPsAyKE8XJoy4agFjckMYfKkKzYcqKFFF41W6fECenYV4WZJtqLu17eJPQCqeqW2hVNJk",
  "key1": "5Gw3MRsccaZqULFvzsWUAyoHgvkixPCGHbzdMEN6SnDJNUsdz9rtE5rsT7gBCXEfZbBb8zSywEe9jBLtEGicHiH1",
  "key2": "5KfMmutZg5YWXEjrR6mxpn8JbzzuJYQaNAVBuqcK1xW46xhdKsNKKxraCnV4kiRkMKKNDA6oxoXD6gdfeUJfi574",
  "key3": "4NxU3nmby4VsWwRAovuBkZTYoaisbe8tXbbNczgePihQTyRsdmLCHuEKKzszVCQgPhcbgvsSLss8ZjsCMyfjT6FF",
  "key4": "5h197sca27ciqRKwG5Le84GWvPM3oDsSgtPk9UTYy1dyP9qok1Rmxc6Tcm2bhq2Qz9s5ugCHvc4RiynY8yeaNvjq",
  "key5": "4M73GezRMvrTSmczEpwMcCDxiN2m8Ns8ckUhFvuPcR9sEMgaSkPp3gRWTroWr1zAbvhCN8vutLmS1TpcZEVkbnfx",
  "key6": "5W4pKiAiL3z8bTDtjwQof1Z1n3YNx9ciNdtq8syHimnnbQD8zPDm4prXeJNt8Anna5foNqidz2CSdXDFrvJ5y5TV",
  "key7": "3Kr4oF7PNj69sZqNmNJtLLenh9e24UNrnunCnE75X8a4GYpB9jjpeD5rdkYL3w7rgjGrzJTTJ89caP3cZ3vBS83p",
  "key8": "3teFSZUpJCSSwBLLiUp2ybDyurtEaWRig9Vo7PtsNL4rJQcP6M1cvDNqdkhkmD6zL4BCY5h1Dxa3qPfQnPifmrgU",
  "key9": "Uzk14z6V2r4qtXuZyoXtwnHyNyUxMUxg3Qu4aCVDR2GhmsLuibgCHUbbDXoYK7cArWoAZWhUnX54qNr4dQDo1XN",
  "key10": "AzWjZfpUCBmUew8oAeLggY2QRY2C394zeJ4hTLUdGitrwx14Geqh6amP8ChsJZhNcUTgu4XHRhbBPtXqirG24BJ",
  "key11": "5Nzv68YdrBwwgmSyLf7GDVBZHtST3u2Z9T8avPKAZNvitbCJKcTRKwN757wq69hqeV2dyTNGogRQGaiFqK9kk46g",
  "key12": "4XSWXAtcBr6vf4eKnVVhAibEczumBWDtAosdCQFjtaYe4QpSXqp5BcVhhaKoBX3AuT7Jf8UGyxPvSkHYP1uEmLZ7",
  "key13": "2t2KmqjueRAZrtbbnjdCefX94HeF85iYGzrjek8pJNBXMGsCL8nfpbzVEdD7J1bvNzxnNfspHn7DUMwJ6KWEPrxo",
  "key14": "4MRDX1THF81Sk3nNMhG8cwZirxpjV6Z1gyzm3TBsJnDsKpdFTidxzDwKJ32jYPtE16xhkXH6FdQEXqYv12igUEbZ",
  "key15": "4xSLBvMSPgej3GreeafB3NyYGbA2YnVVo43y4FSP3U6DPHzxhnQXTpy9htFXdMCxAv1U97AKXy4xYjrrLpH2JMNE",
  "key16": "2mXzeu5BTRUvdxv1dkdWK7RTSuzh8Fj9rvQhK28ntbe8PpgZtHxCPbGMWzCqadCSCas32RAVLqHxsJyd2uuaY63",
  "key17": "ha19wuLYA5oezckPeKKyggaEWkStjVpcj6d55ec8TZrxwUS5bcvEE8KGWuWXW9kru5n5ovJhbfi7mcR6M5hoQrD",
  "key18": "5KPNgX4uDCnFVdMryqi38RpGj6b8W4Y7xNKSEe3KtBjLVxBuWmiSaEXbLTy2meqt16tfE9nfPCtxZcWLf4NEcAkp",
  "key19": "y41QeLXEMHQ8g8nxfrS1bMHifXjtmj8zqArxsqVhvKVVHmAoVRNU2nJC8NGm5Bn5JRzixpNEQofB1UoJzVDZcGo",
  "key20": "5ex91TYXn4ybAwfsdToqMNFbeJ6NLcqGMGB7nvcPCQzLq7vGLCL15kZN1Doj7DQi4BY8PH1tDF2LovTGgxzrx8sE",
  "key21": "65xqmYVXCq2J6VeCMfo7rUK2CFdLNuKL227UUHfrJnYVLxs5WxV1SYceeeMkcnfFAewGDXm7MpMXajk7B42Nrqdf",
  "key22": "evB41hkPTo4LTmQhs5rMAPQx2aUn2y36YMB5VW914BDQ4YHTYt1htqmwynLsRWujK162qwe1B6XNN6CoREYtfbu",
  "key23": "4tdpXs3824a7JSff8VCEHU5Zn1ADQb6XVeBeiaWZBH6U1nZhBcGmM7NMzjeqoDgvdsLtu2X92w5fs5S4SV9F12TX",
  "key24": "5ip6KzgAXVHMc5rBm2ahuUzDzxLW1xSUge4iY9nzzMDE5WcQLqUdugYtHU675ZpgYZxDxKaN36qTuM2orDXuv3qK",
  "key25": "3bCRutkWRBbpFi7AoRTk9HpwvDmzA4JkCfhUMazX6KDN2ePY7biDtrHYDv6mBUTLpodz6G8eucm2JfeZLKPVGjA8",
  "key26": "L6bFqo92Rk37bkc3QdFwoByj65D8uT9aSdubkCGuTxhRRxhoFDNo2kfvMyW3bgAfJnWw6p5j8vhPJ6W6tJFNygT",
  "key27": "4rYCTpXWfphRVA2U1SeFinY2WNzzXd1w81wvFFxGpuS3mqGFeD7uLkn3iRSazq933CLq3MiXVKW5hiATafMD1Ehd",
  "key28": "MoHou6MbqeUoAKvzjEkEn5LknWLLiDuNSJREbnMJJXzQb3bzLgzCoLmcCtUwoXBbErrZbTYLrb1rdYUtRp8enBf",
  "key29": "58Jzt2NSMihind1xmphKAg7eqDRYq1HDQgxfWCJJ4hUfxMHs2rzbAFLRF3Q8HfueL1H2c2QgN4rcyLLNn7vjubWT",
  "key30": "4hBSLAgwC4vGMRim6nfY8g9RM7YBwNyKAGjBreivUMo5AmMY3nUGktxjbie3zj3Ymy7jDw3YUCHuYhtzugux8c5k",
  "key31": "3m9MXQ24nUJTzBAFtVXq45375Df5WYaFAx8tApcqJtJNmSTgAjc12eBR6iGWcR16rpkBfNYmuM7zGQBFk8zxMHd9",
  "key32": "4fM18iw8vuE9hDAYcDLxotEW6DUugkZBEb85m763WV7qtqwH61Q8TZQjNMVgcv66tDMiThvhvpWH3u22gTSQrWDC",
  "key33": "3eMmLstSjgsJe3KUNZmYq6niF8vEDpARBPsio7VR6QGJ21k4froSKeSudmyiV7n4N4HAQfMUMxmpnZcDMFNo6RYp",
  "key34": "2NvfaD1FF9Np555aTvQsnuqeEz1dQQZKU5tN5Vy5sYnLjuoEx92iZ7hhyy6DLwyyWG4wqr9ZLsRA1UUywWSZFcF2",
  "key35": "3veQzwZkwSLxtHnyymAo7roadXWLzegsas1XoBZM5vVJ6R9P1Q4AidR2S42Zc1nndxJp4AjQAJDRJ2JhGxw4Rvbi",
  "key36": "3cyBCogyBr8f6xMZt9kcBZbiVYHyPenk7QU9HAgUoc4sksfuGKfeJNxChbN2aXJEsMniMUUtqwLczXgpPfPjUWsq",
  "key37": "4CAg8jZEzGpLRXKB87bTwDGZtpNKnCuxUM93Njm8MagHikqs3YfmSJhZn6Khsd3oQm7MWHykNfdbit2Bdoiv23dk",
  "key38": "3XvfceJNSiDKfYFumG99D6SyVAjsAxYUg4TLJFodJRpntAy48hJz5wCVKQ2QvEZeFaXmjdcqvT9LkRGNJVQAC4jQ",
  "key39": "5mLn1Auq2dQ1nSrogxno4kwfm9iXnc8ooMLbMJLEtKAKG7hEMDPkwpRdFiRbDzHoTweq7yiVZHYEW2gKQa9YQQg1",
  "key40": "etEEniJLxgcBQ9KJdVoQyJC7nvAWFfZW3vMWyzCUEms3oFbjT9RrPtR1gRcZdfYZkFtbyPDRpSQjMcXQcNxVTxT",
  "key41": "2BhoZYMpEQorLKgCT83biBF8eeD2Hqzn9Wc5v7R9bK2AMiqBnFtKogwTqidS14E7tUSpos89TJvr4W8o2M2NuAu2",
  "key42": "22hDDLJraUhVA9uHBaBinhFqiV2hWPaFnpVJv61Zq6fcFxemzNincsFMooaSof9bGcexWxpBkpd6z2HvB9pYDFot",
  "key43": "31EhCNBbAZB9M7rP24GLyfoC7T3PSHAER7LBaDueM1b8tWDfKY1SBm72fPEs5w3NiAcAFRNQUtt2rLS9T5y9pzFv",
  "key44": "2DdBmBxhGgoqR3WgUeGLf3unTvwYqmb2MYqaxaDXKwibb6HKgf9frUYUafmWQMVrCiBhnai2qR5oSR7nrvBcXCoW",
  "key45": "3bGp1pmzpBozJD8FxTojMWBVD58mk56r9n6N8zeijDT1XXzoiXZSLqGp9os77wDctT9HadwnnwxigEKWzj353qee",
  "key46": "DZDsWk54hK8MR3kPkDxhg4r2fJNoj1tkUFopNykGuGv14TKzcprbqBEfEB5tpRuDvN9Jnt38vAXXAybFJBm5nqH",
  "key47": "4KPyV43iqiCjNGhzZsF9q2AkqWULKc4CkBirFRHbU1113RX1rtwESMnyGGia5taAgnkTkiqjPR1Y3Up1vt3ik3hJ"
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
