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
    "3XVsUT3v6X5WjmT3sNt6Yg7UEQmt78U4sBqdQECWS54jSAHTKkntqEJJt1ZMZNRqrQRYRq6KnsvLMCwN8LXAXqAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HVVaSSjo25sqKqJhqVcSLz3jAVqYsfmHX3T1NxkF1eSvB5EHFKAGmAvyYw37ERFWWG4XwaVWzXY86j9BfgGhKKV",
  "key1": "2QJSf7nWfdCpbxuaySSrXeKsDkN9E7ucNv6a6M7YHdjfkaSUG77spFNawB7A3hTzyZZ4YEfChJ2oyBUV5xUaU7tB",
  "key2": "Pa2NTaGYTQMUEcm93dwQZtxwrMsoK9y1qjhHQwaPfMSEZewYweuJt6JNF6a2jxNQiRsPUserjMSRqBzEB1hWgRF",
  "key3": "2bYvrKoZm8kCrcawHJqmTUW8TvDnKJFGkj7SKq7TEUA4bMyNVTW67HE4nkYH672RL5qRNorr3krgMqeLbCSbGxxQ",
  "key4": "3pMuyNmhJhDDvzuB8XfWnp8XxiAWThrhm6VdPMrYb8vkHThEPfMvtXpXYLLs4LKExHG7n7R8Z9q657FxqkVscnun",
  "key5": "dWJCW9qWvSFNHo41jjtVRxoLfwu55Ta8NyfT2nQ6kSqbJMpcVNfk92BcvkzKwo2GVHoYGGmmwhbsa7JbeqocXSH",
  "key6": "28hXgEWYLF713wi5GqioRuLNgpH99diDBRjyMpyBbrZYCHGSiCK9Ga9wWQeAPvd3dDiTgGYQyV6G5taFxvJGs7Qe",
  "key7": "46vHAaABwG1fX1biMetqq2BsjUfm18u8ooRvk2AyCtxkJQGDcULfiGnokKxkawYTMcaSYkAPtMfTwjHQnqnRHBas",
  "key8": "2Bb7PYqpbNZnnnphZupNuk9B3zS6K5FFbuyF6Jk8gXJreqk4QcSPJc77jFm79iQnSiNgPsVxrLnLp6jp3hUW2rDQ",
  "key9": "5dzZDvgf5KNxPiWu6XEAbR72zXNnsMaBiPwb6GLMtpcQui5HwufPwLtDCyVzpxFs7aJGrNoH8gspCvCVAsHrJwVc",
  "key10": "t4NhSMdJNcwhR7xbkxtjE9SgWaQDAc4sVhikhykSsdvjpJHAEoW54SKKdv57H9PwJ8oX6ovdajPHHTVCdj5fFUx",
  "key11": "DzLqoDjFpSu9yqcACUSe9Gox6kA1YwzSRMdb4EhQwo8ZZfYQFLxYXkrEp5Mj9T5Ah5QjudffComKGu7rBUT3rff",
  "key12": "4xeujLNHbcSv5UKUjVSjFcYvxN5cAULbZkKNochWSFTWp1M4w53wJVZfHPexpUTudG4HH4xFriSaQCJXB9WfW6t7",
  "key13": "VXNivUyMNbVJp2XYC7Wm9s8twgk2QQKSpxrR17aEk1nhtPZbW7CNP3Jaw3a57LW8ZYBUFfUZDt9Umsx2T3kNZSq",
  "key14": "5s44SeAaHdvHV9wv8rcpv3913hTzhocaBANE3Ao2XVekaCwPpmKoHj6DjZNUFKip3vDQGtVGHdtpRHYhhJwQtY3p",
  "key15": "5vimsRzg71dmHyqXbkduB8Wk3zpCW5q7bRLyGRrxgkQ6sjZUKwSxT2onFFpyr9gLM73yQdrsMa3DkeAvsifrfCHV",
  "key16": "22yzxsEgSc62TgF8ugUNnsrY9Q55azqXmMhcSg5moiAcR3BJczFx7k9Vg8wbX8vYu4PYRP2GuRvJyT8NTx3BDzoS",
  "key17": "49geNY9cSNSiXKiKZhcLjkE5HR6nEb5oafi15XcdwfLKRr7kr6Zfn9o6HA4zpB4Zzioh5NmyEC6GhoG8fHhgtZ9L",
  "key18": "4xtmfCCLc983xWsMxroNfdiizDwJ33grWfnaME9qu9qEC9JHtZE6Ubq7cmdHbX2zV5fpBu8J7GTfa9ZWaQyEC7f3",
  "key19": "5T3Giwt234NujwCELCRsYo3cW141sYB7H35GLMA7EnrJsbGEp9is26esLWS6pgXXUmyCPPCaQiUMiwRBrUAQGYzQ",
  "key20": "3ZbHTnKwcD9XKWrms6zBPXwY9SWs8HA5CqfqC1DEbThCnoH2qc1BqZ3VvnebUFGLwPKPKB2BQRWUyKm5DJTLuj6y",
  "key21": "45QawoudR4vNvSuNRBdHQmrttUUgc2NTxVVmtKwRNWs8GuMovSRNqWFxqKeH1sVEMphKVhWXG3CNsTNQgRsh6mp2",
  "key22": "4Kk9eerZUewokLXQdb1nJrDLjJ2zQPaEoQbpCzpiSKRRJberynxdEy4c6JTvwj4LK3Zpmd2iy1CxN4vwYeXyDbro",
  "key23": "5XuHafjpBBkTqwcsKMXHEE1dJvUMwReHUbqULG3byybpKsCbmq7XGayk6AveMtxT7p1eF5D4qC1ywws9YsEmdGiU",
  "key24": "5v4touRXUueFvi7Wnbond4up9bBS8FH1XKYgiRxpCMjxxZ8ggMH8ycvbEXvbB42fJSVzxez4TdFh99iS5QWCU5uE",
  "key25": "2owpNg91cKJ3KYRC8A7nnD2FhmGHYXaBQwS8LBDs7cFyXYJvJXFc1gBLEL9ix1SNdAqzQ3wUk72G7K934ruBdkeb",
  "key26": "VzGJJpMS7CrZfPb8ZLbSeHy46rwNZRwBakBAM3xQ2vUn7XSfBc1TKnqBMUyUatkb6oAorUQhVg8YR6FbLEkYB8P",
  "key27": "5aui7UL2zAVw7VyvbDhv4WSEdyksD9BB3DkcPkkPx4JAKHtqTUxNf9aBoEEJbHzWbvZmB8fAgpie1sZLjN8EK5Y8",
  "key28": "kyQbuGAog6g1wFnRaBpbSyinTukbSErUsGNSfMT7GfLEmiUkTqkXKSknoc2NR9PfZRq6MjAjvymF8emSdiVg4Rv",
  "key29": "2SjXac8q6vXiNyjA8VZfTCaunBMHkAJsRwHUZMn7wAfHtdc5ZcS1myDaFM3TPJBD42Edt29G8EUvPE9d4PVo79jA",
  "key30": "5HrVzeWo3SB3Pa8NZzEysTRPtAJAQ8b9HTVauiT8HN5RBSzPbduouHPqwKZ5sueZWSgfmVv87XYMQq9NZEToDybd",
  "key31": "4CqFT8rYAVQDa37pRvna2uTQFVnyRWw6L7fLnYcj4RoTKmGE8tWc4GwCJySdVEFczcn7XgHWe1E2wsiusHFMjR1F",
  "key32": "iwuqn7AtbssSpEeLkquM3bnu5WATEzC1ekLZwhrVdQ5LjiJukFsHNUx5FqvDtvPtMda9wehy8rM5m9doYJWsBRS",
  "key33": "4RxCDWU8XXvrbvWgjUUrQjTEVc23iKLYU6CJHXpErJYFww8d7MYMUY594xMFJFZqrPyHEsAXLny27RoyAAiFocNQ",
  "key34": "67XWpSvu879LNV3RvAJz7r4GasxRrzhTJX3rYXQM6iBnjfk25mAUBywuacdwovppphVVfwsFv1zWazChKwSeKYxt",
  "key35": "3G3RsgHJFPwWkLtQxhXEoyXrKnEA5bsheFqrnEGUDhr4Ddi6HYXHHTeVeQexyALhSyzeKWrZjiwVVypGpwwb7mX4",
  "key36": "3mYSM5LP1PtDRr1YYCvYNCvEigQ3pqCThBCeF5zUZNg7zsKCc9afjNfTe13Fqe6GGVbePmjiw6qdGHhFeXHZRHSh",
  "key37": "3poywbo4Jk2XhZbhdFLbLk8ue9nsQXtxKpzPNC3sf7j5dFxAPk1CjSt9sA2JfDJtRHVkdRqFd6ddgxBAxtrkYYKU",
  "key38": "3oTU5sfWZyYkATKfxJXLY8GZkG73CF2EKKcJ8UZ3zGZqLbBewh66rd5BadNRPL692X5dYnb2X8vDLmd7Ehmf7SFb",
  "key39": "5jjcoTiV5gDEg69bMu6b2thnqsVtBF5RDNM3yZ4znN51qx1NrabL7KY5kUyY4TyVrbjcYpRzHMrvtJ9yr3ejmA5L",
  "key40": "635tnXbVwMPXJxzaVFA7Ux9RQHR1zwmzZaQhiahCN9ovgKGL8aHz13yG9pLR3yYarTMJ4CPhWd92DxNnRez2B4oh"
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
