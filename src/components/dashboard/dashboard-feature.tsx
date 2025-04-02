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
    "3ZiXyK1byiw4NjGKbveTxYUH25gZQxwaE2T4RaprWYwcJW9QiDpxRUVV6bHbWV7isnMDyC1Nn9tFDdr8avS9ZvFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nnaDreDsv6msgmQpa1T4MYEDhuMFaUq8Kd5VTuRUmC6vcQUW8qSCJPmCZxUsxjvaNDYCzyuXkvcKq6dD7tj7cj5",
  "key1": "S2NL4d6wDUummzitqvmNx5wUoQJm2eL4jHs1iSadpYbhuKCZPmxBy6MKW31wcA4siFQEnMosJJyBsCamrtuuc6C",
  "key2": "5MrqMnzQB292rJCZ6gCNF6vksRGj5Ji2M8EawdVBMRZqkfq4R2Kz1YH589WZTAE9BNEFd4ftiAzY52vXnb7fHg8y",
  "key3": "3KRTyP9Gg5X4EjMv8LctkhxY5vxvWWGQXrCuiX1QtzBQPpEmTpERzw4FnPy3ebLUhzfiWUKw6G7xKv1gfMvvzh6S",
  "key4": "Xkx2SuCc2dDjZgW32MRKqVKZVGW5j5Tsyo8wmLH7KXyuPH8QnHUiZYg3FQeUYzhT7pMJ945kg7BnuQywLaptNmk",
  "key5": "2nx2si58ygp4c5pdWkckgPYueWUrKzAYxQXSeXNNKdYnoFxRnAhy6bzBxQQjaRxxxTDJZuYEX2kaTTEP9Z1G7i3v",
  "key6": "5XGLtkaveZh83tv1RfhzfnsT6yovBqoLKPJrx8ydbdjfDjJ7dAmP3M1rLu6Lcs6AmZFEbGHtaETCmNkqXVgZgahC",
  "key7": "peehB8xuV872UKCisBeSnzRy1swXtJ4gjh8KyYcjPnapMJgGQ1yz2LVMZJ92Jv8EELduQCDjHyW2zezNfqcmXJ2",
  "key8": "3dvcCDJFzJFwbf38ey3bgQpHmWDavK5PNAEWjToY9Te5kiXvPt372opx4sK3GU65Erk5v5ZnjJsBfYLx91bJjPvf",
  "key9": "2ZbKvq5WAJhov9NJ5Vwxm4PR2QaJx4tsSwsPaCiyHWRh9UoSJ2JDTMi7WMWmZLw4uzPGUa2a1ZSraAKAAnQ54Do1",
  "key10": "2RgaoUxu7hicQkSBJhh6TZkSfmbS5zzqR9NaXirKPKbK5L3rTCAV8zmv17RYDUPk44FrLJTvj9i1kzGcRnEL68oH",
  "key11": "562Y7k5gziHndTiNsq34xYRZjsV9MQg2XjEzprN5SymTJv8JP8KPtj1Dj1B3rnukWpF81nPVGSE7D9eV2UrixCFQ",
  "key12": "5GK1yQkkPWDEMM4ZDnGKd9FkShwB1Y9LDx4vJQDVWy6ANKkwjxs2fB3U7Eq7UxTQ1VmNdbSrf4BxhBncaNb4f3VS",
  "key13": "4vJM4woSEjHz6qavN1Z1SCsjq7Z4YkRNfcHYWPv91tmjjuzfGH8P2bg8MSHf6DqhEgv41PcrUKaPb9DN9rFkKXqa",
  "key14": "5GvnW4v9XKjBNJe8eWCg2kPziMrgiTa1K5grFAqB3s5izJQJi82unjtHTrWCFW1mAttQLavsyLM8aZLpaKr8uz13",
  "key15": "U56jUVgHJo9x5WU8jL5aAyv5TTVmdactDpTDLYU1KLkKeSSmoeQLYGMp7FGHUVPJpir6JLfnGMQhvnwVyqBpiwQ",
  "key16": "2ThJqipA34E8nHkGAmq4uBug3qTRHCFxhSkao7mcK1Df3FdKUw26PPCrRGXhzMRPFczpEYakvghB6cmaBtcbho9K",
  "key17": "2hekcMCcbcZBXdXGBr7beR3J73eGHwaMfGdsMAYZYRe5sQoyv7C8L1Rwi2ZxXi4zaGwJ9Y3e1YTarga698f1dzME",
  "key18": "2rmHxjSfcVxuGeLoeP46bnFZqHa33YtJt4HDBH85VwLqp1LDWkWQNH6nEKkR7BTBBasQY5cZ4dPjPGyQ6GNy9inJ",
  "key19": "3z36bmftSBKiJELiy4mp3h6rGzq7JE7ESucUSJKozx7SVGGadehdyvTPi5o7zEAfbzFtyfE1K71VQa87Gu84Fc8m",
  "key20": "3e1xeGEd2mcb5uJu9NBgAYmXoeZuXhZ85tYUkfTKciPwcf3syjNhaxT4zMzb96o2i9KBPC6KJhJaqM7i9DLsF6Pb",
  "key21": "rqm7ejECPoVKcvEnU97Qg79Gb8EpbetqGwUxbxwLvqNxaTjoaEWbHFEt4RytKXS2nc5KX34Ahrgo4xJNXhziukk",
  "key22": "L5R51mZLDW1U2QhL9rCpgsLK8CTsYVBCegPjHBkW97vWhfhd7YqsoDENnZCy6qtdSgiYbGcZ8xd6PPZSCBSCqCk",
  "key23": "2pn2CGv2GxMCKwYUrquwdq2tx4gcn7qB2MRhPFpUcJ3rN8VHzq3vo1z7Dtk5Vd7iEL9po8cMaRzRbjdyHLUc57nW",
  "key24": "2Y7Eb1Yw8Ng37hi88ZVoNq2iBYshCTDtxsLjpoAHoWVdPEcGWroXTzEvvbaw8Hk55STwVeVqJM1MKNENoA1BA1ww",
  "key25": "5WnppnRbuCt64goXidg2ChShjypXd8NGaCB9f9cjof14d47L9jVTnWxu21BhzWVnrQWHQ949D36uDNxcYEoAU4tE",
  "key26": "67nZrVE5dR9AyNkH6MsJuvfS2bnzaaginATfspWw2Lac4mePhnf7TrbrdZfd8JoQYc9q5EX2EeNkDCftF8jMY8RX",
  "key27": "5KFDAEZZ1cXU2YVkQb852nMkYejkQNTv58N8Z3vzUp1NHdNGVHBaDcS1AvziRYUGiqZ6c3BjzFEtNEjHXkyy7DkW",
  "key28": "29ei4Bf7zR839YJE2P9Ar2oxnoueizsa5cC8Spfs1xjQqhLzghoyDbBiEJxgtaamxTueacKA67erAhsEaHPkZJ3t",
  "key29": "qHu9L3AoR6MxHo3c2oLVy5Ujtm6dCjWho55KqthrKK7TjWkJnwQWMLJKs2rVYEFoUqWDWDktLUz6kZpqXWxApZ6",
  "key30": "5iet8azixjGLcn1Y7TssKkN7Jnd2xDY5xiaZBPgPUh89tzKiFoXqr1wdqD72bWFUU6JFYndw8tgoEa4RhNd7UVCJ",
  "key31": "619eVJzTA7fMZMRi1dtbsX7kLmFrPyXj5aDCKBiKRdfFrLUR5HFVLDjTdvaqimFoFWcc1tgeoPN8X4W4BJNLyAB2",
  "key32": "3zsGQthMCD9PPucpyfUWH37i5MS9VNT9pXus7yQKt9AMHv2BzKj9rqNFT2dWrjSzUzKg9y5Ua5XADGp9zQJFZTxZ",
  "key33": "5BZLwQXgDZLGZuz6pspLWHSz9a51PgkMYAhjzzjhEzQnkjngA7uQeVUAP8Akau6bChSqJa3d9cikSpZXFxJBmTth",
  "key34": "SJPeb5qn7MgSoJiuQtVnPjahE2xXW2hXLYUmughq3mPZzKWo3pt2uZTTLLkMmXubm3ZwH3PaiAP9EmRkvVTtd8y",
  "key35": "4m1nCvqpSB59oZCmxvdxNgF8DVssC8uaGSEBqQPBJA9QfEj3yXn2y1XjUhMG4QThbheFpo2X3WVPd5Cfsgovxkew",
  "key36": "BHs7sthX3s4di4T5wiy6ycSWrV6CYRnnE2b4TzDXai2a47roVDvCweotYxTii19Add5VvkLwYrhQgooyydFkggY",
  "key37": "3RPP2mRbTiufw1c2GgZtvPHiukUBHo5wME2Ze8mcrzzb8vaQyQrrKrHPJNqVonUwfyquREvR2yw843JpNxMwQ6DY",
  "key38": "4AdwCaqEuUVjBGWANspovaYYbu6mhAFEkaftPiYEKrD8tUrhDHBU9nbM158re1eV869pf8euxtcJG35q6v3yHa3S",
  "key39": "2Nw7jhUTyveEjMQTdTR2zo9DQwwNPWwRd6cep6BM4FK3fu4Gtpoz3BvnGNV6fyVXipxrq3tBMGh4Lcgr9BNtJiyE",
  "key40": "g1pTSucRC1Cir9MV5W1GyL6WQnn1DdwEGPXVy2zNy1c7nHEWmdRxLCWViRoMQukVFGKdeZRQ7Qwi2KoV2HEterb",
  "key41": "4fkMYpqmo61uUFcYsJo3KPUciGugATqVmUktiNiAXpEb65aoSgTfE33Kbh2g7HnwbhGZjxxUq5CLTVBxe8wAgDsk",
  "key42": "2H5P9vhNpzGpqGSu2BYSsPHQg3g952db7hfTQCbiptrsbB57PBYGJJdxdG6tHhegB714SVLr115HZZnnwoz6queK",
  "key43": "GpCk32eb6rETupXFERUi8QocvostRmb3NwQePpQTm1egMygemXgNezUQXaeBCeLMrNMsLzoKx2iRzvHCambGoDw",
  "key44": "2byioHvKtPHWpZ5BAUkXqyNzAvV1rRRErsnufqtAhf8yr9M9y241AvRHZmUyDREb9YV2RTYfYikAoUbYPYnD74vy",
  "key45": "emVtWaVqc1m3xcK5A4vsT8zEshc8zVgvV97gKHbUYkBVzaYd7iQmcbhwGwSDFMoxVerybyDrGk4f16Ga4RTu1rV",
  "key46": "2AFm964sNrVNw134XCbogN1wqf3zPucDbM7rxZ33LmCUDAMVCDuYnrLf1frgrmEWtw8Ex5RfdpFGMo8Nq1pPYnLo",
  "key47": "5jXJZAuC2FQwov9mcwZWTJc5CQcY4WTrVCc74urf9YXEwxWknVN7ra7T3i1Hw1j6EDyEWwWz3uSpKkWngpZBshDe"
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
