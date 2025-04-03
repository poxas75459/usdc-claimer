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
    "3sg3T4XjxWyPzhB6DDCYKRF4tVecA3xJh3DbqymnkoZztbeC3aRvQxH7Pmbk5HQH5cdPiXwSSBKMB6dv5sNmtqQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62HDtXyW9uabvcyw4F8NS9Fna7dqtuhf4mwR369LHwUZcCU14AhftumMa7M1mEA1X5p72yWCSdVSDAKBvR9UA1DR",
  "key1": "568dDrDEsiiZ8i6e3d7sDof1iE7maKvwvQ2xdqDAmjzWQEeG2K6u9hVLXW14TqJZ3qnckLfBcrL41TofHRZ2PmHF",
  "key2": "F94LGsgqgdBfe8htZ3SRvJHmxEbLU39f2YAaMK2ps1oUSMpMsXaXv7HvzePudfY6bwhV4YxYtNnVNKRNYTvE8pb",
  "key3": "5oCrTaYBTaCwtu4RWVvFfGnT7BUfeFT6BcsHpAPGzxn8btFnXhTE6marqwq9s9bUMzFtz4rKb6gUQEZiBgNYx6By",
  "key4": "661ZrPV3exz8yX8R8KS5BzdesJFjsqwfpKkUCFh4AvQFTqwJytvfYRdgURS6gySwMAsrWFEtgXU3cGXN5Uh263TK",
  "key5": "YHpGjrS9pHmL5q7HN1weqh2kZBnci1aCueSCfRtXGQRcfTHW3cfAcdTt9AkmgvJ7xgV9oCANMv58BQpp2cX4e5X",
  "key6": "2am5dsoiPjLpXzrq3xGVdJf3KcT6CWFpc1kEbWnkJPbt71S2qqu5JcmVD7kJgHiep5RBKUYYqNsFNyGT2NEaw2fp",
  "key7": "3rb2gXi3g9LBE4Ht48CHX42wKKrKGHPYoaMaBZd848StCUFqfzUhVFpzZoFKEcddLR1tbev7ShF9rYwUdsnLTaza",
  "key8": "5sKDjczqcLHZMFbBfXb5atBvjA8bgGMbJSMmkAoPRxK6BT2TikrhX3Y4W83RktWQKWGfWDodFDawoHPAGjVnJRN4",
  "key9": "3P3GJF7cZswUwoxVcxXqM6QvDWi3rC24inA6kRQvesNceaKe2XTFG7iJ8KR3QaB9s2uNRizfJksz1sw8eoUHuRxS",
  "key10": "4FdB4UHjAMxAkZ2dy3BbHRXRL5XevzQ2WjA4Jh2TXwNHDe5hYUTr8BYe6XkCStsyvsUdx5j7EB8u1kjhFF8SduSC",
  "key11": "4E7dTdrDdQNfEaKrNd8o9mumc3ZYAUf3o7kmWNjpfkPdEndMy6HxFaS3Jfw9p2nQiBqQ6RrFbUiAAjDPhUhBhZwF",
  "key12": "3Vqq6fW4eJAgmcPxH5puoesbaUtLurGS76z1ZCkzd1MPuKTQ2mGbPUfezaQ7Dg58pLdNgpqku1MGuik51XyFax8x",
  "key13": "2UvbCGREgvE452PA76fUfgZdwGoGatrbJrQJTyr8UBGAYh445Ez7C5mvLxhGLF5qUFJ7Prxd4GSStByPFYe1vZ6X",
  "key14": "2RUQSe1d9AspKQM1FLGR7CYcL47s2qc93sxTYeGQjFEZopdPjcUrJc3dmPEoa1h8syDLcnUCRpUXuWAkxHWUE4Cq",
  "key15": "2FHcyntRYs7YFjmSgydWi98AQgo7GCz8WUpge2ApkAM1xANLsfUJEKpunuaLAb9GgAW8jTxQs562nGroCjgcZ3nB",
  "key16": "4b4o9pdL7uBWt1mfdKpoBALBNzWBb9JHWA6NgVCPgtcwvHnh7TQUrxjjwXtM4Ugk2Y5VTh5yfDQm8xMbN4tawDiX",
  "key17": "R3cr1Dqgag9aLzzPk1zt8qeES7ep1n53zFR7xdirtGAchmANhPVB66YcifMML7kWmBhA7LwvDUfnwfM9C6ox6Jj",
  "key18": "2vXix9ZxiTpvoGVce9xRE9gfSJ3Yj2qj1SdhicQ6EN9xXUMJk9MZH5s7N2DFJfbf9Ne4F6D9TjYKqLKr46pzBeuq",
  "key19": "27Bvq29SvTvY2YU65QVhMtCrYR3wDNG7gCi1WkEL48nrvoi8mnX4KBxhhRY5AQfTKrC4zwZwD4bz9irezhct6cU1",
  "key20": "fSaiNiYnaUA7AHS3UuxE6gukDRvMeXEnBNEQzJn6Wvt3qoj53rCqiwLyAu8JbtEztKMXkkECcgcubpJu9Qab4vV",
  "key21": "rXowNjjYSZkH2i7CGa2XBviw6Sc8nd682mkX8c5L9WUvVFf561Hi2DyKcuCoWw7y6h1GBwgQdZP8R6dSKvCc4zw",
  "key22": "5Z2QCu4F2hRrnZWTtPEXscqUoVMi8syFeVENHeF5wuDjtYQaJRT4oWNDXh5KkYxc38NMETm8XewsYQaVjQvdavD6",
  "key23": "XEezXBzvm2BzGy8PF4iC2aaCmRRCJe8GgpJWHLMoCNWrUzRYmmHT1Xhg2WvDFi3TdcdwNnuShG69LVwhFimSWhJ",
  "key24": "Khc58ZVnrTPmeL5QGRP1BxQ4g8rvW5rHQ7GdssDfg4kEf7BAyK17dPRQTyXTaNLSMVy3LgBNRnfwRahm6MXzovt",
  "key25": "vnWRqpfH6hTiGoYi7FjJK3FgD9tNPEfdyHzCtawwRKvqZ9qVMiNA834d3fWTGz9ExuAr2FigFtNyiSx5HmowRXp",
  "key26": "5f6a1JfK1tv8cihMHKSoGQGoNdWdngrb2tjDhieFYL3ymDmb9GvxwkGQ1cJPjkh9GXCDMfbazcUgszScZkXXgkwf",
  "key27": "2AAjmFqsCbvshoKRVDbgtC2F5t3y5WKfeayiRh3DJV9qeuqXepm5KpWWsCPiCHnyWzWf5trZvmGQvoTWTivovfg4",
  "key28": "3eR9GUuWNWDhx9Kc6XTQEsrx56TJ5XW2ZkgzVHVd3CXd7YEZTCacnLW7eM9Lq4dMhrknkqTfwUdegubg5ExHP1VV",
  "key29": "3Xp59BuGESqrkxQLEu8VA34bXrseVPqUr7q75pQuddjvmtgBjGyDc3qAGNifBQYAKgpBydDXficDe6VJ8hsH842H",
  "key30": "4teJt48Q6LkiZ7SWfwUrgSFwQyrkQHYL4udYkctHFnm5X58QbUa4MUUgAT7J8zJjqGxEbCJFrvqoGPUAYHddqaQF",
  "key31": "3fTUkps1c1RJpC5SqZnqB2367fT8VfuWVuBe8PpBw9AfiZZoQoUDdXxGSs7pYGgd1WfJLaaNiygwhrGFpfrbcjJH",
  "key32": "3jHGJXNRLW4tDJKVfgfx8qf2RZTPNeFLcxyZ1MUMnBtkvGoaMi1wmbX7fFcw8KUV9HGmwf1cHYRmR1YrPTnHmey7",
  "key33": "2WxJTySkyTrBBUAXSSxHGFZwnTT64b12wwgvqkfjZeaVG4WDd8SRjMB5k6TA347phA5iV1yWV1S4gryqDepiSh6q",
  "key34": "5w8dhR8cmpvVWDtTGQhgdkDGx3bq64BUtiFzX5DuCoJukusAHfzz7sZRdngg5Fb4DNrm4jMWws2NjwGCuzKy5hFa",
  "key35": "3M8Tacq8KgNWSWHuGd6yGPvonSBDgKMoFwR4WYE3V53ebZ6XzejtqZRfewecaiwwxXRcaakCP2up5togQ4ihsw6R",
  "key36": "3pEuucW7vwD48BRfZMnBuY296vVqHCMCbii81A7HaJhyCBLeUhR5Q3deRPghBRfTZtJa6X6nJBUxLt9UyvyfXFmY"
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
