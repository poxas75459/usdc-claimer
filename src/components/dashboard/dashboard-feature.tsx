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
    "3PhqikVmwkCYExnkDfGp4YB8MDjcEMPfXCTKAvokbu6bnDFuzWqEdBQEtcgxN2KPFqVyrhZ6cVuAZiKP1Ggg6rT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YSyx3CJCgwNNaPkizcx894sR7hzbRu7CbTy99GNecNK5iHof6e88E5hdKPKHTx7HqLTodxP9c2jZ2zLyy1kh5Wq",
  "key1": "5PVRDYYcd4yAfx1rpUgHtyPHgg8iEvKqxmRWqZadLkaUzyJpeTem8LCej6U9Vt414drjTcUqhzUViogL9jGpfDaE",
  "key2": "3C2UJh42uT6yi4vWCxFEFezWAoiGENBxvVCznPArGSgGJBuzb6NvsiLBdEhEYtSnAWyLYEgrTC3rdFS1udK7ieuF",
  "key3": "5EjgZXakQYravNsSDQQCcYGh9eZLHmKZjaqU5zWZrrN4vqpndGWpm7fYt4NwSGcFoKuGZuXMXKDv3k7QLdDDpNvz",
  "key4": "4sTHA8Kz5gXwaEnRb4d8ChmJy5bcmisQSirDdpLPujW1Sk1UeZYRPNRFESPLq8VYZV9Pc2sMQUCy3M17TESXUpUp",
  "key5": "4ArvY32MFRs7JYBXzbe6xKJkocsEtNGUx4f1vMqHtjfuWrEzjvoWqAe56f9v5gGq1C2rhjp85xw6yGireXRoHXuu",
  "key6": "4DkA9QrFya92mCLaSodPBZvjCvgxLsSqcLCZMMcH8RY7N4honr4dsWDc3zf1Jjs35MZBvGtcKdMNVjQoekMvnnXR",
  "key7": "5ZgGeVK5M3bfp9tTR2kEZBr7tLiUDme1CZtmQY8Wvz7tYbsMRdMuTGfU9bj3uLmiwEVn4YSfZzGQnkkQEeBVT4j3",
  "key8": "5xQ3jhe8gLMXuhSFkiRUeFpBgqFW6Y8AoiYnrgDkQBMQFCDsFdg5hmwnGRvUgpBev2ixaS1gj8rUgmA6cEGZVEt6",
  "key9": "5RBJRLyu6cN6gPKFaKMQUrqqSp98VnJgVbEicxLzxHZiaEoxz82zD8JQdf2XTzNHuSwhsFQhzsbYs5Q4hnNYThmV",
  "key10": "kbDc3EiwJewFGViCd8r7dmXaqy6R7GoXrbXuR7Ck3q18cVUKt2urkAmZnJQNeGdBpK77EYAXMFn93XcnyE7bmtt",
  "key11": "2ByxNatjXGA1o7PbrkoDokZkiLkCUZePovGsmrtrypqktqSmaXh68WcNZUTvBHP6RxR4D5zGdGVisQ6425WauvQe",
  "key12": "51f9aWP9bCpWjKGMefJeJp4zCjqK6FCVHFaVvYzkYsc3uQrUi1yHrVvaBX2ZXdWofKuw6puBB9vSiGrR7p9mnqid",
  "key13": "3CWocfaKBrenR9VpoXusTDiSreVs8ipzKB9cyHGN2xMuR6GKyiQar4bieianAVqHdqiAMDbgU8tx2W8vXtteSMLZ",
  "key14": "268omqEhXD2hKQWemjhYpx1W2nzRyPi2cJ5vPajyFZubEE4aKu14a5zVaSi5cMrAQ3o8x4QzFvpdA3QoquHuyfgk",
  "key15": "5q7NcGXumemgk6N4vo38rTLRdvqvbkrGEaBKmEJasCmyT7Qxds699ByD6UnnA9oqcpAuW2y8UTjM3ahgXk7ooSTV",
  "key16": "2giMo6HLGJYxcd7rmjvrT65rPQyanKXkNoNA1h7PCbYprr96LqbAKSvYtug5RRcyNsQpuo2jaQZruNwYvEA7DSbu",
  "key17": "2kZXgt2W93ntRBEbenisDbuW2a5zqRqKHF4hN9wUZu3P7dAk9vZ4fBWUPjZH1dvRWuqhEF7QC8PH2ovbvq42pEv",
  "key18": "SRaVBZ5uUKR8TR8yyBiV9w69Q7TBXAeXJPbj4MD73u6Hzqsrn8RTwt137FKFBU74P61rJEVwDmrviP58RQMA9cr",
  "key19": "5SkpRp7mxD7SeQLcAiusRjejQphJsAWG7Mdifxn8ihdNRUsssgg3MUo6FA6KcYRXQ5yM1yjfaETx3QBDgaJy1TzD",
  "key20": "4mx6wdJe9nBGoJbAEv3p7YYthLH1G78H32jidgw46y1ATEsv2KPYd4LxzJAQTfHMZWNXjFBtnE4zfFVTnP1EMFB2",
  "key21": "5s5Pz2454JMMv9NV29mSichbqKyacmwHxqQqjif1PikVsGJMxFxDAeLFiEA9VhNuRVrgABukx5pTpxY75fdfmjhQ",
  "key22": "5RRDEcS5h2C4RyUZ5eg18YVWFLVQ2q8nLNbJmvVSBNGgwUjiFsopRcQxRwGYtsPsX8FPxtEk6dtRsTPkUCk1EUdo",
  "key23": "TJzPKkrAxVX73MfGbtr9MGHLohUNuR6cwToH2H25vdrpszRyuqEzrwMMkY2pP4jCQCraqQpBPZ4u1mvxUbSEgLq",
  "key24": "5SFzeKheVuvio1hAo7ieTPcutRXsEQwFLg8esiqzjZ6T2nw2qBnVdSfZBx738bptkTCfjuMyEhXSFmPtNzoovXtb",
  "key25": "2bjsCr2XGYTStW5jaEXG4AKupA9EEeboK63eRhhChuByhDXJfgoJvqVb4JGfeKAhYWvCvqS7ad9UP8JUbN1YFa5Z",
  "key26": "gKmT8KFCr3xhFTJwWYjzNYFTCC37BPtG3jF5wyPXBcaZNcnkM2bo3L8vyN1i4pX5Ln7C5ctEemdkyuZ6HZB3DZB",
  "key27": "5b3bo7LFZj4u4saQW57sNNg9yP6edrD7izZfJnNgxUujPkfKKQrwbgEmLqMHybhoiKiJx7JrmoH7BMb9qpisS5rW",
  "key28": "5CxVzAxdV6yjEEbgk5gapDNzAmJa3pNZEm2TvfGRrFwEfVtKKeKMRjVgP9V44ZyizfggUaLDJsoJ1HYQFXmJ11rA",
  "key29": "2HrtGjZuRSTK3qSEd9ZAUA58aC4Hbu61wBGXq7UpBKV3Lc6MwQjE5umMFZHVvYoYTLuD6BN8EHqUv8hJJh13iVcT",
  "key30": "4ayJmte48YZVX2RoBLu3vSu8MFTmhUQSZZghXUKZA7Lk6CWz7tNohpUjynidmAXLrf8wyEUM7L2Ph5Rq2PVdbUfA",
  "key31": "21aGG5krKnaiA3UitrFdUZWyCFiQ7xJviZiY77XwCLnQbRwu7UhDkQpzaRE6jfsF12EP56uXKBwYpkiY9z22FvDj",
  "key32": "349EDQht1CM1jfvJPY1TxionkNAE8pqaXxRAfzWk5Wvyso8djbX7dVbPAX7sgAR3vu38gBX7jH2Z32QY4mCL8xPY",
  "key33": "5fBAyivH9X5izgnhSY9vXzzs19oQQ6mHGxRct2ojTZj6FhQCvJK6NNA37Ta3FGaDDtdDbZgUnMuxEvLYbVtmhTBW",
  "key34": "42A8TGEH6gSEi9VNooBkLm3CiezCYpstdDDWphktPytEHrUDyqcEHtQrpkag9Chv2hCn1jvUmQafip8LThKtdFuC",
  "key35": "49bvHSPuAACSbvFssZfpBtGr6BCwqxERLWCag2TWgBnmoTuxHjPzhY8PJCtqBYt7nkAmaNm8V4GbTDwQADRJ8Gce",
  "key36": "gpzq2a6uynXTXm2tZQvANPmYn5Jvo9Ax9vq94VbnV3JPGqCGa99AsGjB1XSoAHfWG8MupxdvHmfsD4XfnpLxoE3",
  "key37": "4X2NLsFV8m93uYJHotN7kf3Qz5ebmrzBDAZWW5pAdUWdRezRtW3zDUYTrGDSrhBFtWDkBSY42r5Stzp9J8wWRsLh",
  "key38": "4GEWjjMQHEeHa4mSNRovesuy1oFAvKa7ZcwdnYbtXQdUgY49rRyvLxBAsZ39hR6DoMsQjjSaLj6FesCJqmDJVGPk",
  "key39": "4FLLTjNhvi1SRM5f3K4ZnfJkG487Y6nJ6DoZ123mJGU6AHZ1un14PGgaLkQGHmYeePTXiDfr39otEUbdhU1wRdPj",
  "key40": "3xcjBkp11PHitL2XUxkdgih2X5vz76aKxSu76SzoWqYqSxvw8FQraQPdMU4E99oLWaVwWSgagMfhax1PHm7vnz9g",
  "key41": "4CnZAfAPh7ztYjaCXqbwF9juVrF4vho1TP7MmKdbHetp5tAY8okVYTmSsnzgh1yeSba89YcxLVBB4NTHKwYtCJS3",
  "key42": "62aVdhsMvCSMHaEy9wf1VzitJQMG2xgQKcGUs8GUN2etkG6S6V4KyzTCzfG8qUSMLKEViqZaYSSZJEb9jpsJWXWE",
  "key43": "2AKibpEJN7Qav8iJg8pszkr7xVPYPGC85ez5opEnufMhMaSMQrsjjQ8uwisgMKejW1p1tv1Xf5DWsPzCxXuhN2Ag"
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
