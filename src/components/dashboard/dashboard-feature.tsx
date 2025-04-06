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
    "4EbTykhAQNcS8DSeJfhp1H8UnXfL5ZhctGZuxV9G4EEzZt6ReuwnxJpp72gJ3LTVHRwzEFYrTVYsVjj4AwYGtes9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQ54wcMpCNrRw8RXYx4pkzXp7DtdWjESXMPcvg2nSHrAgx8ZGvigqfAXzFQPYw3VL9WSLbkpTdBm6sgaygKwpYs",
  "key1": "3H3BEhtGi9eo795iqqAJjpZuuApcyriEU3VG5fd2fjJWhWSpPSjv5y6PuqyEKB9kRVMnvPr5PANB5NAD6YYwgpuc",
  "key2": "4dYGAAi7wSwQXFZNoMb29RbEDLqHVpi9rZUHC1jhqvfFzuKJohMY98if1EwNcHFZax8afVHwhep4aBAvdQqaBKP3",
  "key3": "3GaXEnnpWCZL7CEpra9tC6FUWTDigGc2HaMRu5z6wKUfpyYJw9K3AMejdFMM1Wdu3WZGWM146vLJsh9t5mSD1CBi",
  "key4": "sRiovWtpkhkhpQF6V4FX4kpz3NKCK4g2PyChip3FfurrnKogHyrMs6ydQhS5e3NpM1S3SjBLzQLKNhNRYjJRjv5",
  "key5": "3UoxGLuKvJaGK9h27qN6ToWEjs2RBx7964eir9B1RF5qZLtm1TZkQB1exZCyN17sTvnoFyWhzDpifFstfSPGYu3F",
  "key6": "4S8WaHA2z5LBdqmSQMDuPQegvLV9G3t7i79ffw5yQL3WSGaxgQg1VpXkWhhewrTUZCrBEcbCqRKH7e1X2jNNPAhU",
  "key7": "2VT2AiYRLkpnAJaRT7rQApKCwQQaKRr93UDymp2wuuRmRcSYUb854KDRj4riV7unTQucoZ46Kix572aHKzxuH9T6",
  "key8": "4FmmnQFPpEmyDQmdG4XEDBWkHQLwv2eRofjCWdQ5zV1RLJALuoWsXxyrAfGzPxCj3FEvKqieDN4qLMd79bAv9R8A",
  "key9": "3xY3fjQFv4oGJPxafuqBcEGRD8MqKpDtF9s4v6abb2gvA6yDVDW4W7MapJNdc3gkx36oLZ195dtKFuQ2dCHhqnuG",
  "key10": "2T9FceeciRWsjKxvzcY5mS5RmkXDHHn6xcMPRPcL88yPKmqxhKRBGEptWMQ15it5rrtwTsTnWgBFhnstVCDKZCkw",
  "key11": "up7QXCNUi2xmogy6Pn4KXMojKgdpzKwvWahmeEtTjoePEv8y6MPUhc1oHRtvYupzUkk4ZjGiRfCpCguTQULazwD",
  "key12": "2sY7sWzFqzxwLv5xB8M3vhgXNF1zzE1FbPWssPzh92BQMjkNrDzqagH4QGo7fw7pdddKbMEpKnAXeJWCL5FYdtff",
  "key13": "5iJbMozyv3kZF6JKbFbGXcwTQZHdnZaiq5UR6AecVShVh7sVqpt5Rhzw9Zy6bfuAtsXfoBw815RdZTtRHH9Ke3mc",
  "key14": "3iAazSU2Py8FFjYhkC7AkdK85CT1PEaQvCfM4KPCghn3co2yFdbTzR1JeMVULrHFZoDzmJBSLv8yRtYSX3d1oB1E",
  "key15": "HTBmHjQfKDKGsh99PubwCnNk17e4n9MbFBxXKba9c6GDV98vBxiyFkNrvoVXaD4JCe27RyZWoEdbeRdLuisFqEN",
  "key16": "487dFgWLAa952vUWNwWdG2a63PQxmLRH4GXHjs5mFpxzR9SCFMzVzjyepeKqweLwaH1RA2PknPSkFZUPUgsEpqjq",
  "key17": "4ByZbgWbaFpTLwA35zwVbii43eMYJ8ddsArSDWPq21gSVBnyPksNAwLmzdXXcPcEVy1y5vx5v22XWpHyB6a7oUqh",
  "key18": "2qfabsx4iMcYaBaDSi6wZmZq9FtVA55gBgTAVVZ2FfBeDaVmCCumVvDKrm9UHABy8ras4w4Rpqgg9Q8j761TGhFT",
  "key19": "ZHSbyZpJAtLddtEbhZLv44bRPEyRabrPALUmUFgphKtdGUcRPHGyhYEV1DB5fGt3wXp25JoQFvtxPjqhtziPTsC",
  "key20": "csR4TUs7CShQXCJL82QWvpUGGZfeUNAbuGc4TA5Q2sCG78dWZ6Mqcbkca6kLAe9j4XXdrwrGWSPhjahEMg5doQt",
  "key21": "2LGexcNTcoYkmh1mg6isH9SUZNHSo2pKC5HbEmdsmZRKsUvopNCQT81fAYqBuvcC8U3eEw3f1gnicUt1HhTpiNWP",
  "key22": "27ayc3ydKCNBcBLjiHC9r827q88URKUnNZ4jortHAC6f5nPdzLh6CYwTyqqtiMnUAAqpjmPXCcC8AtnHcPhH8dxi",
  "key23": "eb4TMkWbcY9z7tYwWAYBm26F3RRZeLTpdcEVZZiQ9NheLqdc94EFX5yGBhuMtR4cxznEMN8Et2w3R59ZvLKCmpt",
  "key24": "as3omSCDQqzN9hrBV6EpRh5sB7nez7cSvsqvipqsxcunWqCDnGprcY8SLRbhhTXNpKbdNrj4aZDVzELvffod8yP",
  "key25": "LCmH7wg5M2ShfDaiVyFbjJyEDtjGi4dbY3Kj5yLQWbHkF7k6axH6Muhoti7ZTfmAPcj2Fa6r1eYUinbic51KWAw",
  "key26": "5bghjGisFWznG8A6P1aGrYadMBHreQ5wLK35DZAf8sqwdxWfcUM67giQhyQJMU4P9Deop5BhiSjCM7D7gmzt5yzp",
  "key27": "3wHaCkiPCJpaCGWFpvcee5FNvJFE9dMK6jEnpWWytqHB5iu22pT9NSQHKybXmykmDPVvb93Mmb6z2eqgBAqEtpMR",
  "key28": "3tcX9AFyEEwfqEemQBzN4enEu6RrjwQGykFwcW952SaC9GVtEHMKzqN2V5pgUN8YdBnJuvKMvdmvVnEyF64CWVus",
  "key29": "4A2U62Z27BzC2AVAdrXrzEoKrHSKGGfxNwDtHx26mEXdHMHu9XKVVJV74GSowRe9gNz5NVqMRH8s1EWUV4Dt5gCk",
  "key30": "3cxf5EvHhWmW1c4MPRk2GYKMWQwWGqdwBY13W2cgM9EvrTLFkG5HPDiWcjUMZweLMV1d7GHNsssVpDTPu2ALUohy",
  "key31": "5TmDx6JoAGayFrcxzTvtAW2TBE3gCJ15m1qWiPwEWBhtfAwtzU2HV2zDGFtHxfYPuR3VenHoHUCozbxCzvw4H2sd",
  "key32": "2Se7sj8sXDUgk6rRk1ybVSFeLMFGeCawU4onR7ejHK8K5gvFCPdWbnNpDe1MbmgBPuh8dqbwHHEvWonHnJ9EMzpo",
  "key33": "5vq8r8jX9dCCcbdMRcSrE5MwGUu2jcwWw2xhrEGTkrdAvGznih9YEVp9VP5kTpgbwgMc79aFHuQ95dEFDdauJE9h",
  "key34": "4YVUJPi5W7XFRPT6daTuuQGWqjwUEvwR7h31mU8mUU7aWw5eLqiA3ApCvaw7PfokbpJJq66ppvMNwrf8i7xx1Sib",
  "key35": "QgtbAg6aVeVfXZi1Z14xfuBvjb2BPJeiF52zDmAWQTY4okNgHc6DibmDwmLCR1ScwSj8EjfFhs2V5x6BF7nX7Jk",
  "key36": "rJx8rma7xiTJ5ja896gMphbouaoMBFzMWDniv5QTRGVw3i7ndE4y8deArkyzBJrcYvaPJLTVj195K4PhXjhM3yQ",
  "key37": "4vy3uULgHXpgYUxj32K6c34iLFpaPejtHeTVEUoeUNDqHf68D6UMPpCxqn3oxuXmeGqNktvLbWh6hyx1GdkXkUei",
  "key38": "3WWntrMqbdcpu924x12Dw59JYuPWtCs35keE5bsLwDwvumvVvsyrN4e58JEFnFcXYhKjqE151yt66P2s1uXfrt8i",
  "key39": "4hRmqqjLX7XtRp63iEnUDGUoVjy3LKzamKaeUKe69K9beBu38CP3qkZXqADmMwdtNJVJQnVSQdfACS2S1paEvUAs",
  "key40": "2xNKT5zw1UE7m6CSi3VEQkCSCrd8gkJ4UaSSK2GwT36nfn93Ai7KyuKREFRsJnQPjVgUYukJhkkmf5mmuhF9KkDQ",
  "key41": "3ArKBguSkTJtWkHyjB3gphrUo5ek181WXVJqrPzMk6VBh2hP2HtpH1enyE7Pekb65zSxhgKJPworFStGX9iQbp17",
  "key42": "41vs7VbBFsxGnuCBXWu7CACbToMBQuHjfBm7zx6saRJHgeAhr4gjqv88SLkrjZjxDACkmEiNmGBBT73UxZoVtpDS"
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
