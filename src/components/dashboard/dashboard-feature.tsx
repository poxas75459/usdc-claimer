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
    "48rsxx5z94Ww1BDXY515kjBLZxzHz3iTahRJxRKfMR2X8T6XHx8zZYGYAzmrhtNHQPQpd46qQWqLq5YDDwWaMt5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U6zHGNfPL4vr62xjnSM8JypJFcArBf8QQA1SFNaLvEQSxx3sJmQubZUSrmb6ovwz6vrLPnMDjDGR3wSN7da2For",
  "key1": "4bsHUDddWH9ac7TB8Ljqf5YkJqScks4bkVnSDddZgvfeYzWy4VTtUm3yFsFwXhBbBGSMZjHsyyYzWPb1Su72ZbcN",
  "key2": "2gjAxkAccgUWqmsPfNdXUxzcEnCdg4N8h3qtPWmwRhquMpA57CNJo2QKVwAK74DEXpqqqPHywgHBs9a7HhfSe6CY",
  "key3": "4orhLi7zivsc68NVTuP6ozCRGzbp8LE4J6qst8DaHVN8MvfW6XEKm7epKd1DLMLt3gxKLWAGM7qno8ZQLCFyHWtB",
  "key4": "4VQ5nP9zStjuMwCnA5mk3b1ZCcjpyug3KWswYYyUZW4hPk9JwcQJtZgfrWDB9v8qLoVMwTWEWpRmbxUqUYkyxv5F",
  "key5": "5wxjGaDdkmugW5fMdffo56mTFaVagDXXBnVSfUCexaVAWorDDpUdxpwBPS7BAuhPqH6s25MpNLnYSGDQ6UVCcSsr",
  "key6": "4DQ9mQhKuV6FEXhnfEFgQTasnbRxNJwd9wvFzjrgNnAN9SY4F6naaWj3PjNjiK1KXExMWXAsa3TuBaqmnksALk3z",
  "key7": "57LEaz1tRG4EsPtTBNnMKMdH1wedkk7Aj6abVVbvDWNBpGteiQArUbDo2kD8fGgVbmCPdnhWcHJNdAXvFKiQYvt9",
  "key8": "4LLJhrn5e9cAvnA7DmfJK1QHYUtUfEoiwA4UQ9uEiPZ9DNsdy3sCEcGa9cmCPJzecVNvfcQbbXhBAXTdR28Skaga",
  "key9": "3FBVJWSYs4XuBk2BrNqCfk8gK4qDvXPQneuwarNJASGvyDRU81kER5F2mVthkZpLR1LaWM6Qh9P5TqhHMSbBBiMN",
  "key10": "3k3Y2CoAGc4jLSEciSGXFmEaZu3KaBQuBPF3TkPTPcrUG6tYiCEpMpJ7x1WAX35XiZjEuh9bG9Ky1HymhYC7qTM5",
  "key11": "pFGKPddoHwR5FqicptiiDbqRReqJndpJB3eHn4m7XEUMqumChMModQnR2rM8eFRVkFc8SzfzSpSrBSFurTTUPn4",
  "key12": "4MYbvDQxhr3VrxGs7pFMxpgpxSEjsKRWba1JRHuYjthm5j7uw5oE77CoFMm77AYSGXRp3pWjeuwkcXfrFujGk5jT",
  "key13": "55yrngBC1Pz3SJGDdz1sPRQuNpVCXueHbXHJY2zX8of6CBHzrbuuDzrNh8Z7ePE2bqJBUXGr5ja9VKLhyswoBkJd",
  "key14": "4FLt67x7QrBijsFDJJRW4ivSceK3RKy5RCMgSEJu3rxUrNKbzvx5HiZXsdHKM9xBdaipJqV2kiW2Ln54hVBq5ff3",
  "key15": "4NiyoLnWnooJwPpred3LMabD3NE3HKtk7e7fZnCM4EznvhXzJPTBJmTvbTKMU47LGLNyd31o7VXvbxCqLY6R9MJQ",
  "key16": "2gA3629dwXH2mbdBuqGStYdWit87GDsoFUaWppYTT1rxqvXAZyaoJF6irh3uiFrSZHtfSkYRkiDFTFjtERByhduS",
  "key17": "4Dgp8Q3msJ68AHaCVjxokG1QdCmpdQdfgRL5wmyi4Suzg9BED2QwTF6WkwENqkcn7U8DjfqpbYt8svF6PBMvPR84",
  "key18": "4oDx9stWwDJDHhPg3hkq7QUydnACZ8BMHF29UjWSSWCMoEX2V8YbsrHrmU1p22nXHvRr91gAGiLdrYL57MHJaMKo",
  "key19": "2MJuuf1jThGF8ZYZ6ePn2QFSo44Cn6mnERrz9HjQLyoSLYBvEeatYr6dGXJKzcXZ25PkamKKCVQMPw7xkF6xEm6L",
  "key20": "5d6swQsKaJTVgyxZTCHhUEoGCnygVQwsUrdXDsc7Gc7vScVc6QwySZMMJkKwGDqjcgtta5kwesZc27y7J13A57V9",
  "key21": "33PGKSFg8KjLMm66iJ2BE449aN8ZP17ukWHnHPn5ve5UL7LpmF2VwZDWbdZoJu42SoLftrrHWtDgBgqAsTzE17uB",
  "key22": "52zDBL69a2BNsQ4E2StqQ8Vwq1VPc8qBBsnmE791QiKPtviXqcjvnYcRbsLKYkCdbK17xTmDmWjVgLFjSAzsT2Je",
  "key23": "53o6EnSEsfRxB8p8TUxuuWgqo6oSBxrwsyLzxRpwiwdj3rM3XGxBpm1bkpFkRqzAEs9wbQQCctTrQTAvqGtVUuyk",
  "key24": "TVsUBBFxwQyFLeEWcjFLAUKZdCoVjiepfZgYB7ZhW6DdXaG17DKbVyt7RQMvg67inUKtWPwu6odNA7toFFA3d5R",
  "key25": "kMLt211x9k9C82BVZz8Fs8ZxsZRBP8b5NzVTGmbgkdH3Yhi9cHmzYVPgFi2GmHuPWnbSJCE3GzpsJwBtkouAmGg",
  "key26": "59QAwu6nWA1PM4t7c1jD65BqsXg16VhJFKyqnAsUdFHSnifV6T83L83aBA3APe2fsFuorXqMzc3HqKMn9kXmwVXP",
  "key27": "5ehHDZpbaKpcoH7tWvTzYzkVR6pA73ReG1gKF6unmM7hApYdSgVjpoZSTibshjQWuRiQaoxzC6Shz9oF1WYn6yST",
  "key28": "3zr9zwBLr819KP82UWBNknTDF49Qp9BpQRHqZxryRdbhjHTpRawJkNxRFcWHaM8qPymuWgASgPgzrbaPkta89YqB",
  "key29": "5sd7ACCKAVn84pf5E69da1EyBC8W2hWQrT8gbZGy28QWztzrWonvCbqDZBoaDv7KEV2G8GQMof4CxxiJQgpkCZVU",
  "key30": "3byhkWm5Tdg19Sn5rRVS6AFBqYr84zWEjTRYya1dRtBEwx7hEFq54MtG92sXRX3vvz3zANxHDcprq8Mj4ZRq3oyf",
  "key31": "5DzyePLx1zB5UxWjqQbv8FVNpf6i86LmxFu3LC46qcTzfaZU5vXAqMxf6fNB27QJ5DCRPvuSjjDkZUt8XJPhDHZq",
  "key32": "38GjcMHp3wbcUk9Vu9J8YZ3MEEtSF7S8TwFnFkvNmqodiZH6cJRmt3kLPUKcPyHAbT6GhA6eocEGx97hgmiZYMNF",
  "key33": "YNhe3rU7CQwstzqkSohdzQXUUCDiPW52DeoJYP8ySSK9J3jF7vZptQVBPh3Y1ookLFnj2QiifcXJEFvmZ58Ngb9",
  "key34": "4AYhuvizEyshdG6XKjuALme55CGjpRfm8pomwfddE2D7x3dyFtTn14q2zU5J77t53xGRdZV4fkP5Z539qXxHKSUH",
  "key35": "5gnSraMCdysJws7GWN6it49BNQ5tVZqFk7xt5595b1ZVh4cbqcCXGbp1M1yXAL1cvy7N1xpS9AKADvSTG9PvFGQj",
  "key36": "PG2QxXkgV2fVtaY8P22M1eGUHwC7VsjTRWRTbiuSK3YFtq7x12gjAFXPMeok7ySXYeBMkKtaUzQFZz85WykDy3X",
  "key37": "2i18oqGzAdDbwtn7TroNMToXz48x8X4T9LqyaQqd5BBep4RS9KzrESFPhsyBT3gan9xMcrnhyVebdVAjVFFdTEPN",
  "key38": "3Etw5zFsjN5T28Tv1JpB7T1zr2EZbj788mL5GsVriVVuQBc34RD8meizntoVZT7RQBGQtGiTnAbAxdWrj67f1kgT",
  "key39": "AgHmK719hSGMW9HmkdFXcCoH5WTJhPwoxnF7ESbkVQCoMdELKZbyFnkMqBpkChb2CdT3QLaYwT4RgRsjSkK8wo1"
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
