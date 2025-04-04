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
    "5sJEA9yHsfLdDSbGiSbw1qKCH4cv5uxdRZivuBY9W44bL6oXXfU2Ffg5dWJRSEGnFBYWUG235KXzhLQ4nXgeCxCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8uisocfeAScGCbfJaF1jVD84UJdXTQUWndULxY8M38WCvwuynwNYAu7uFTcEcEkKvFA7WCSHubnfmC46tZTKZeH",
  "key1": "35MVWR9zNCT2XBXRW8367J5wHeng6io3aFTyfAXHmBAX8RyzL7JF7oaRJa33Ka3mjTcSmbuyZbnGtUgdkxbDpucM",
  "key2": "449oLvbjRkqnUnE6y9e5TmHjZZ863gUcup8isRSR7mtTcdEo6ibUJCvKk4CQUgdXTuv5E8ttur7fzjSoxorjH1jE",
  "key3": "2pQD8LFdfCiKUbpdN9frGzR2x3ufdobrrumFTFXWYUgbsYUvyLAqgQaSitEDeuawtTa4kQ38fVzWjZMzCe8YgsDc",
  "key4": "25bQc76yaCBM4MR7E5xe2TniaoL3WWjfCcpG5Mvp7BYjBRq4jVGtKtsNnwq5jHfcKaMfqx5tvVvfSt6XeL1Sv62w",
  "key5": "2WGog8uCGgc59Naqo3jWTMUffJoJPdiTYD65T2YNvQob3vhkj8HY66FsLYF3K63tdMCenWbxekFiBqjRccvEzcHb",
  "key6": "4dqrgiacBWrNxsnJqD4KrNhbojtU2x5DKqCfTrx7ZXBEVrrbAZNVih29iP4iKvdaDcufLXtp1EmnWohAbvePdav4",
  "key7": "48TKLkQDsL3ZsZZ4ykpJVnSoCjCXumE2GbnUQ5uVk2ix3srKTZbxFH4aBiPp2oaYmGcfhrUe4MHDk99PYYr2fVMd",
  "key8": "3sFQz5Ur3nc2MB6hsyuny4L7LWEyU4uN3vM6fjk1pK9gFwWMJj31KGCyEQEz9CYpXug4phPKhoVkttKqAudNBxys",
  "key9": "3EqWBG6s1761fBovpdP9TTBRYhC9uQ7Y6ALDvMdcLgzogkpdWBJSLzMcwcEbfSrEZKHCdfWsy2mD5R8nNrYPMqia",
  "key10": "5CpD4je8DzhZX9cTWuSHngRgqpw2vN9CLAr6DHM4utUXNfWmFsCZxrLretRrHkFhursAGNhrUZ8DLYxRBBr6X2he",
  "key11": "3jBR7azDSEZJNQe7kB8BqQ8MpFs6RvSaPwLL1YtUFxsJRjBVX7AUC5BMRWYH9hxXHDwZUFAaQYyMXwS5ErrKrMnV",
  "key12": "g8vbwvvt7q18at6an5eNcABUEZn7nVBjt48mbu1Fb7sUBTZrEq2k2b95LRkeFygkmZL3HUFwNMJTAip3FpCWkGu",
  "key13": "3fpF7xGQdNvp9CySTr899u6vMM8Dyvy3vKHeBsAiH6rmfZkA3bbJC2D4mjK6YMig7qVm1mNhC8VWBEeq5s4aihCr",
  "key14": "5BQ7iY1bYK7hs8zpqnkhMd6Q5diFA5y2zG58FLNoj6uqD2KRP5sSJqR6zmfC6ED9QcFWqw3x6PocQbKsbCZMnUdw",
  "key15": "5mNUHUbmwKJj2ojAEdVeNcMnNJBxq9toq5dScxLbQMZ8LaJzYxbJDH2wubsrJS9fYB9Gzz8bcwk1cqfR8Fi2juGY",
  "key16": "4fuBBd5aJ3wg6xPbbc9HK13Kcj3qLUXFVmjPhsGByfocxnLk2Y2GW92PSMiwHFVpGiwFU76zAH8wAfjgQiCZGTRM",
  "key17": "4HmtrPaazADrHYNRsNuSe3b8Lu9BnrWEhiPj3zpB78JSLjgEeNaoFx7kVAVuLXJ5N2mhgWNW8gRq88QCuDcxsvCZ",
  "key18": "2c28KF1p4UobMjjRRQpEZouKTc2gZz2bsyRNuqqYT4d4M6GyUYHpeTWE66ThURxbB8TALCPBcBwNVEyjKyWSiSLi",
  "key19": "3czTpFERSoovwK7eTv559EnhBhkhQ5WntPaqV9ezyHKqX78njmZKmpLYgvV4j6aK1RTG6TQiusDuM2tdfZjpmsY8",
  "key20": "3NxC9uWvjCXy8FBWTLBt2eyXX8WFVs8GLwx8J8szKEvG44CZVVv8zJFiXv5AJiivjvsjLL3q1NtG5VLxv7aZnQpz",
  "key21": "2cw6zRxURjrFVm7b57XApjKiBQR9CX6fzyHXhQFXgdfLbYYnbpKFoSDicgd4c44e4czYYXm5cfMztZoX47Xzye5P",
  "key22": "5sZrLEmMR5sb6BGa5x4VLAT4rCfytdimbzEUH1WaQGAGqhHR417rLBfpQmEwRLqhZNKHQpM33hURv12NPzhJJZWL",
  "key23": "SX7mcXaRG2CAYRjJhkJYyZRoHa1vA6xgHBng895JJsJhGmx3zCa3gBqZtBuWoXw5bQJRyw4LrMjWa7uSDdesvf3",
  "key24": "Emv8jL8eBEZcKYjEtyBnWebpvn2CP5rzjSHdYEocZifoszicmfJBkUMrU5riuSGZurpiNdXABcvv1692F2bCFKs",
  "key25": "3quRDP4VqSZqC9xnaNAVTwZqTqhTM8nMd9u1Z9skb8Mk8XJd2u1GTQ8215FLymtzyyBMggUk4BZ4XLSv72thaMeA",
  "key26": "k3yyxggMMCw6ZurnBQvWWoPGokZ7rPRSCGut9kRZ5ZH5oYUj7xSbEuFAz4mUwn5ZiSQfzD3YMHB6qHVpxeLJwtm",
  "key27": "4FsdJ7KCX2Qo73Uomr8pQWPHpApnURdQKvN8PzAc4RfJ4ez648ikDRSWgVhKAi7QA5ckRrxaU9dnDaiTLbpfNfZY",
  "key28": "3egmCci6tmvtWMKMxh2ZubW32TismLtw5Eu9AsrtXWRZsf6rLggmzoRpkYQRVvPGzLQbFnAzz7UQ25kZSJaATrAx",
  "key29": "5oHiu3XjghiBwFFWTPNiQCZQNCPBsvuG1z2CmRVpJbeXmnCYDirbJXnb5jFoiGd3SGDy1c3FLDWi8pgCWvaGdJNw",
  "key30": "2VJwvbAsDzfGsaNMYVBbZw7zhWLS1yhZq6BhCKdJrkev2gdNnH5N5N7YfC72rDz5xyjustXQdjm2P5KJmbZ1hMqw",
  "key31": "24bAuBai6wFSLzUuSwYjfc8jAe2asP8Dwg6j3niM9hpgj2WZPFfoSGGLD7APirPQVZh2wuMxNHe9tpv949zNVUrA",
  "key32": "4oKsiBNkLXSZioFY1aV25Bw45vyFU1xhwPCrRpJsvbM3SXtVaS3drLGcPqziR7qWhHWJ6oDdJ4BkCBdzkVwLB1Lx",
  "key33": "5My1dADvgR3MftfjrbMkgJqevMmYV5q7ZDCzfuMaH1iRUKVrbkqvrBhEytJkErtTkKWrG94cUfepAYEsqrFME1FV",
  "key34": "2hT3d2SJJtVth2gQyuYAPFXwpjVqkPeMWFxn61tNzXBTLts2DgfdTjRZS9TDQ4E2tbWvY1EpJKu7oYbWAQ7hed5n",
  "key35": "4oiuZ5CCjoQyMqgzwH37d589hLT6vDqvr5EJAZGGsm3cxdLP292WXZLnxainjBtN75zqEu48BsdymCMdsyGcQHx1",
  "key36": "wUj7wpehtm7WKzDjuNHehgk35D5kWAwn7R8e1mEV7mBkHR6RtHoWEFLz8QF4iv9BdQkK3cyGBBSCFYviYScT9qn",
  "key37": "2YXgXJ4juGu1sYTg9vA7XGvx4AcrUJRqu1FtRrV8NJuNbGrQNpLyVYnvPu4fpuMHpTvjg9StTep4EWp3FojV2zKw",
  "key38": "gJUpHb6UH3HFGzbSohFmtuCMJg7VoE4U6cRpU7XGhLCsk7bsbJv4NTpTwc1qxNjbsY9BSuwDSx6AbKMLtxKmsYN",
  "key39": "27txeNSuE6cH8S2Ax6SfvfoqHThufmPKL5oAeDvCEiPzueGqZxWDwdVuTzp4K3bJXj9BNnqZvAvheF56uxs9dQ8L",
  "key40": "4cJbgfn9ts487SB18jwi1Zx1FLLcgKFgToMVy1rTMqxP57gpqELAj639zPGw62VTg5h63ypcPYq9ki6a6oyWFmcz",
  "key41": "2PM6tDEVR8YqGNw2EKD3YMKRKVBj5iGdjUQ8JrcZRFM9TdkhTykyhbntq5zH9rzYBJT9yWym7NG3DmZ26G3apb4r",
  "key42": "3v6DwUSEQvfpaCtmwvtJr5FjqeFxSLLkqooNrZscMWSXpF7Ubir4bjfyCeEZ32UtaSvhmMJWA6BjcjafTP5a9SEK",
  "key43": "3sY5wKakxjBuiqD2HQ1fD7M5CRLkJeUuCuDPS6t9pZQgjLbDVBsrtyWyjmAC3PJNrn6nKErp9MDDTVWqpaVY7QEY",
  "key44": "sucFFgyTQWo7VjwtfcDkLHYPAik6aU458ntZXodAietRuZkEimLyF5ELvz1XAg5UJz6v47WzmbV3XTngsiPBEKE",
  "key45": "67SNzyQG5yaMREWjgKVR4etS488ZWQ5azZqiTsMjX9aJWSoL9T2ocmuFQMHy3bffJwwZnENksrkdhdeUpJHBSd8u",
  "key46": "2TRYyRcKqUpaP9gQ5XttqFRhfjNshSUZv2CNihYHDeYStGoTXKa2eK3LaQcYuEXqDD3DdrBV76hYshkgYmdtUJN4",
  "key47": "2e3yJR8RFVZEhg59n92y7WZcxAJJfru5Q15JjPLs4ShzGNLwNpwJoB7R6tgtkpc8uzPdfRe42PJU6TAeMK7s4r6P"
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
