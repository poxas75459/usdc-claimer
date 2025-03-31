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
    "vgH4tmVDcraK7LKCkviRohqgpk6THUvPRiRDapav58jhHgKdYJvHU66AZPJgAsBZXiAazRqTnz7mk5MeV2SpApN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ovxcqhdySUpDUYsapvsQvBhwSrs9zm1mRKZCtSAGemwm4m7Bb2qVmFpeQLiFW9sNyqPkBWDZJXy7L1dF1ProdHy",
  "key1": "44LUv5pespRcFVYewKbvpHaFxP7gonSPtHxo2UuKxabqygGZ7SK68HbJko61AFRjzJb8whbKVmATMWZwuQZauXHW",
  "key2": "5KgF7STQ7FepNjjMXMqZHt5ti3pTHeWE2aqBxSzPtYR3A5r4Mvc3GwPb7Wkr6rQDqPj14XQryFXJ2jTxSrYWkrhS",
  "key3": "5h8G69ihHJF7C3FSH59xEaMbsPn7tvJeozTS2obQgnr45m5kATYUisTXbsYMbUnnqcro2aRv4qp9CGuryvF3KaoJ",
  "key4": "y9PA7bp5eb4sJvEgbRwTLCxKnsdWstwketvMi2cpSXtqZ7X5iy7RMpUmwbpMg1Np6vLoCTRFFZHwBwZRiJV4oqL",
  "key5": "5XW6SN11ZCV4nkx8rvsMjeP1S9JpNSQ2y2noreH3hHUc84aGAbdYbJd3s3wqPPrbnuPrgUtJHiiHmrpD3MmARFA4",
  "key6": "5KpoZdLe4NiLnHnYGKcejJtY6jSVxbwMwy1jLeWDCHnNua1MAPV6WZ94wV54F1KvQYe8GyF4pAZyXs7kyPSyEuU3",
  "key7": "2ehQVU1V2UpfVrFuNv59qF62eYgt9ug8NS51TSeRWwTpuWhxCknAjVKk5MtvhqMCpYnGeF8N4BTXxFGc61dXJzN5",
  "key8": "43oTHjk2VTL7tKzknJNggxxBjiPRk47ppoRHkzWEMdhhyeNxUujiKghpunLMLBmLUSqBsUuq3LGf67MnhDsgEK3R",
  "key9": "5sP2TtqxZC4J6GJQf7ejJpP5LahFTvXq67KXcWfFEWe2QjAseLSYoj2PKrKfMCvessjLUcY8UjpWrScSznn3Jpfe",
  "key10": "22pttVprUu1qH6RUKXswd4CMJPCZihT1S6HTs8vEgrLRyX24Dbx4q11vauFoe96RokCKeA2txUxCWLRNNzav3uiV",
  "key11": "2n3YJ5jxDN1v81VvBmCVW1sJTqW7TF35qZ8B216zYmzGFguc2DUpsV7qBph2PELon2Nj8Zk7UpqKKQcA9cjv99R2",
  "key12": "BD1xhsWN2iyPz9vFnHQ3zfiYKbsawqWvGsWfidTzLaEtRiofQFUzGAsvhdiPktZ3NDFXpjHFUBJmaMakXgTbniG",
  "key13": "4kAVC8TAbdXpCA9sbfRM1X8TLmMLUEhPq4nFP6hfw3zDw15va4oihPSEd2Hn3h1fBg2SWd19cRSGvqVpAH8edznK",
  "key14": "67jPtcpzvMQSCd7jyk7TVFn7ev2BPi6mj8jkSCoww2uH48qytmXL27F6N6GcsGkyNZN8h6axuoMRXKyrDu3x2ybj",
  "key15": "5WonuXY7EGcrV5XGZbsNKBjtYK1WMmBACeUHHaR9x7qmbAXGNekD5VmWTmnoKcU37YK84KGjfzRa57xRjvwuVmHd",
  "key16": "25NFfJ1qC5jtgJCjVzuJtjSRHTeTn8hob9CWoFVYpRdRycC7Xq74WXmJBqWT5m59o6GV7XUtonoeJt8TUNQH84u4",
  "key17": "5B8k3BuNSnRqxBhGKKiC4b16wZYCQazYFEHLQQEZUgQuTcstXG3q91piwuosymz15aXXkzh31xPRaBBoaaK5yabi",
  "key18": "2tkFrbrHPXqcoJkf9Rdetc5bubfazgSDSPee28AMWXzsqGkFfkPZgkjh2duaqFZXQaJ2PjLVk1b7n1EXmCffAZT5",
  "key19": "4HbF6wZR5RV29QshyLD6b2pP3JuANAGMQoq9V63Z7cmyNXiobhGNXt6eZYX4jfUQUzHQHK2v3ipNjkcjT788hazg",
  "key20": "5jJuEKzBgkMWXs3s3qu8GqtJiqCVTF7bCBfgKvzWKYRxkBXdxNiXN7BhK7ajCDYDEQfYV79k3kMGhv5MFxLooRUS",
  "key21": "28Lc7L5qrhKjgLAa2XcvTT1pEq5UfJyRnjzmnCSwjBFtjrHFBa6WULKfmjSGNTBdgKiT8fnEHnF836iXo1snY8bq",
  "key22": "bM1uirWorD8rPezGEAm2jd2v5uTATvWH48QMtFTkHNPWBwCW4XD2XFPKR6rFvZWeBnXuMyGFFwSekjh7NKbBYss",
  "key23": "57XYYU11B6KoWFKZ6Mmv6AEvfr2goabRW7y7Gkyh34EiuyEvo52GyYeQkYLWxEz125qEyypqNDwcEC267mn7XXC8",
  "key24": "5nH5HAMoa8o1K7jv1SY8TqaM8kYLAHufSdZmC77zJ5hFsGgapBkMJknuzdDq9XxdWiUjdkoH3ZhRZAkAs9M7pYsK",
  "key25": "4JvGuGvevcAPExup7HyhWvdnERftZdJ7Ub784LWJfhMh5Mksd4vFiypnbWaQWTQseQ8ccDQn2fCRGhxoyLEpcCfa",
  "key26": "2jjoHnvB3ydHLZ5VfxG2sfossBZ9ZviMyUNCehL976hVyU5vhTS6j6nFy67MEPfXyhmTAY6sMCD9RoEfveJHf3Gr",
  "key27": "3QtMSaWv7FkMxAd4sPJZhq2UX4X26xPG59WzV6XYSjAtAU3wy23DeBhX5wgrDisUTiCgE573P2KkSJBDuhAPKV5D",
  "key28": "4pRYaJF5H75AuvL7iQo3YhJmobcsvDzucRj3EpMuaPTmjXHKfFJF3hVsvyqpJShrQbz8epaLaz683DJSZ7aj2RGu",
  "key29": "57h4kiwuubbP6DCVxJvu3otj4UEAZLnVizEEdVyVidRVoTaVnF8zqjRXPnoboQjXm8bbjLrMrhPGRvwdNKhaN8fT",
  "key30": "2jv9KbMD8vC38DKAQGEmcUPcL3oSKkb2vuotVsFYJpZuHHRrtgDNLN638BwVVewZ9FDKSQnm2yYNMe44cry69hzZ",
  "key31": "3LMiMHRjDMpRkvr7npAqexc5jkC5s3Lk4NtCR9ZmR88kbHYZ9qj1y3uF12zS4BQUe1E8DZBBouyh9PBNQYHtJZgb",
  "key32": "4Gi2o4sqzCgsQDtRVezQqo3dDWdsrCS3Y9cUEtZo2tatXEVTBFBfN76LZHkeGxwx3kvoTr3MNKFsLbkAgnYyomKP",
  "key33": "5ri4FDgSH3Dta98Lo61ww2em6oDXAM4XnpeQUQ9pvwq9MnNTCGvukfVBRjm2CGfXG1YZQwxJdp1SmGKnpNjxEuRe",
  "key34": "h4i8ZnxD5rJxP4akGeNi4qRrY8S7JHrePeYhXxbjqfnE8vwqpFYtMuYMDvSMWmgagtySF1aNaQnnt7YZKrW59FL",
  "key35": "ZDXroSHnYpNuZopw4Bjm5YcuZuBkDVqYq9ahTum9ZDzJrS5kBfnSqz26MyQ8kNN7qcNfFPnykqECuvhBRsHT6cA",
  "key36": "581V7FHmNxsLjsDqRkcyV7QscPm1EbQe6XUae4cc2jrAEHbQBmqK1yUdYWFCady6Lw2Z5zyq8VM3j98Xq5aatraZ",
  "key37": "GBfKGX8GdGzqqsmXMReXBQ8nF9m4xJV3h6d7pyaiP94GssPzTDy3mzz1JrUYBfKoyoKipfpb1sHemzgewaZYRNh",
  "key38": "4dYBEHRSNaBGcoerLxdnkxPD5L92PJg11iKutezki4yMq2rg571TStme4pczvdLJ4ExfUZAcmhctLqtGsMCwwzYD",
  "key39": "4UNbKuUzd4J2QWVYS2sp6PxGGaigVPDT7awuwj1qMVEP4nQKXP31wDrQHiuXDNAH8eEc5PcDaU4MDhtTR9ndF7vz",
  "key40": "2fvH3Tptgrm4sCXYDQ4Lua1Rfr1TuZU9kw3oVHnfptfo2JAc22qVJ53D6M4pW5nRg7EaXzCo72N6XSXdJNV217M4",
  "key41": "m3Vxv4or8cyWv3SUvGv8uaGiJ6bEia9DWcaSvP26x9aLX9rPZ9jGWRoXDQeBRemge2m7nFretNSmtV34Q8gGKaT",
  "key42": "3V8MFfru4MVg4qNe7wZM2qtX8dzeTPViMnyGNwKCtyWRFna6PACXYKbtsZoMBJ5hWkVazVznohCPsByZf79KdLA7",
  "key43": "3EA6Ky3tLquY3yRDxppi1rFFougG6guH5wRfDX9kuHPVwT1n7VoAfxpv9ne7Hvjui66L5VAxSZByYdg53UXZSUDK",
  "key44": "281rPM9NcP97Xsdcy7Cz8VbahP5AjNgDyH7s589ZYntxZYKyN8izWEdamo9mMD8CyKnd1MyWUUyw86DCBZvipqJC",
  "key45": "3dYTHT3Uih5FVAtKbXygo18UiCfCH1qskJkzZ81wjtG1U2qfTLphkTNbMwK28L8i5dzsz4SBiiCxqGkdMb2Nhd6",
  "key46": "4ZJh86MSWAriBRUYwqEAzf2oBFPfVftstk29WRMLNJPEgmmThgfu9S9AbPKKqbUVgeQPCLaivcahxc5DtJbKJTBK",
  "key47": "3Wuvp3perEpeK4uCP2e2Lr1cYXCfLU45qTe8F1Qicqi1NHA1oxxfvasyTY3MguQ2oumigyvafaEYfmnFmQoAwUew",
  "key48": "2bw941CSiR6Nh1xccMLXgDGWt5eL3v5MyepuDebufCCGnygonNpmLbBUEWWKfuqPFYJMNkGQ8npA5zWUFtbkX3QE"
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
