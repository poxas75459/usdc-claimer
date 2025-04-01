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
    "2SKzzzdNG6UKGiDy3QbaxBJzrTCrNr9LP7UC7k3yfpcRAw26KGTTeYpjqoKJihtDgo1A3bj4WAKS2fdzFaWCEgbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QxqWUacNcF1kVs9HAYZiSYmMcC5KCsHar1EgGPCiKKeYyRmL556ezbeFp461bXUobA5n7vCypmKTNfUcmvckXCY",
  "key1": "46nyhzrLneBJ4Pm2tcP67t9wkrjAAXfU42f4iyuJygAS9qtRsjxduECitPpCuAahYspsqarg4Scr7CQf24gcmNMn",
  "key2": "29WERVKLuoCyotpjd92At3Sbf3T4d688kCVDBM2YVwSWr5L2qcBVMJwEpxL3LUcgi6w9JEsAUMZ651ZTgGmg3rbY",
  "key3": "X7cdD6Rd7j1o4f5MnG9ywQ4bbH9WHFTN17x9zVWcUdRghmPZbQ9sKL1E1np4MHmjxK2zWi1rzgdqG22irK9tc6W",
  "key4": "5u5Kr83rSMtvmxPDeCnWSKEqSpN9JQ8c2xXVaa3gZoNRaxqSazWB6fciJA3JVY4gmmAM3uqfE98wkTEDUTUn7evR",
  "key5": "5RSz96Lkz9PRdVvUBU7wMJhabfwRYLjrMX83WjKyym9TFhpaFrvoTxAD8WBGAscvRaNVLD5RhiRSKJMARDqUvVZu",
  "key6": "5AWLBHm18chCjZ4uRdSgZrzFSQZtdXGayg8urhZxPP3cadfMyoyo3De7rboadFmwtFHCaHCK5WpukgbxeGAqRxMe",
  "key7": "2J4gjrQX715SzuUY6VZnj7MvTA6VnERa3UESXRLus7GRA36ngyTeikeUZss2PyqECiFLxLUjZ6pqgSSfBVpDrnv3",
  "key8": "5bXbKEbQui9K9M5csVi4tfCqZXzKKrDeWBSvAgqND8TbGF6Y8TLcdSkGymm1VuGtvUPa3eXV8bcZXuxpjJeXWkvd",
  "key9": "f6BN37k5yxmw6LuDinx7RP5rXV4ACFwUKatCpmHRUbeVoPa1NcvnpvmWSZm1b1pywh3QD9ifS4kHh9oJSR5KgUL",
  "key10": "5TUdLRofWATei47eUMvX5ZXcdXXUj6cwarXCkNp9RBzTfmqxqnN95YkJ2zkQ1GqRfPVJKe1EfyyPW6BWY53aUv4b",
  "key11": "3iMQ8uopZb8jdsvAiRLcFKjjoDdMkNo5NTLgNRDpcoA8uyBPLzCxz9mgkAxxRR7fGyyHj92khFjDfQdKb53UcR5n",
  "key12": "5cL67YyApMmBk1yj4PvbxffEfW2qAsmKwbqhK3qByBRAm9xiMybzSRMHr4KftgTLQtF6R5sztsyy6EVXM7W4qQbW",
  "key13": "2eUi4guNCE2MXbgpNcBhw2F6AWG7J5w6uPMorELSwifMAwTtYASrMaPYuFofd6TmQEh7TMCywvxqfRMzPi3nMrFc",
  "key14": "63e3dmLgkG2a7QoPxWKQW43ocnn6dN59PvFKnxcmzvdqydmhGWns1zyjN21H19D1jzk7vRo9SNtHbuwYrwe3P6Mc",
  "key15": "heQYfcGrrKKQb89csbSwayzJCudErn9BydYrifV7w5jfppxzgbeQP6zWq14J62LYCkNBV5FWKLSc98koc6nFNQg",
  "key16": "4hP4VFazMryYGXGpkPu2vnRoxAHSYHnAwdDUvqgNDuCqa9dZrETvdhb4RfXXRoZbWB1QJookj9aTB826oHF7X1bT",
  "key17": "3d8bp1CVfkdCYvAnXLBfarCoYvMwzzHdhh5hXtYExshfnD1PYAu9914Yg2eEfBxvbTAuGKkhKWqX3F53JgGbvQfr",
  "key18": "3xY81MR6Es5Pr5MkeeBjgp6QHB5kvA4chRpfYSt8uBrzzqx6R6A6UbCoArqUP7kBDEWFqm9Yirx2x6dKNYGUv2mN",
  "key19": "4Qs3o8AbNbG2uZ6n9sDFx1FW3JFsiMW1dfLSY8rDmaDg3iLrmncibuYnPpYNsWzBoRYGwhyYVb1AFrok29DrjVMs",
  "key20": "3KPdz76Sab3CiyqPDNSATfnwL8jBVNo4ZwQBU93J9buUSCuSQ1fNnRNy3ojzPTMBYUwSUF3rF73nkijwXsb5H17m",
  "key21": "t3vgY4C3yNeZ7JjXF9EXYgCAmZCTWeTxiKWM4JGKVAcQGFiXDUYW6qCES4gfmZ442aMTaHpB5oM5XXL4d2pzVJd",
  "key22": "3vTJVHJzz6tLvpd2QPmARaMNh5MdUYuc1zodX6FgsG42yxe8J5wMLpaLVeMu3F661TdaFbdDRfmrCswsqFBacESr",
  "key23": "4M7gdq3dynBhHmgshK1b4rPz4VKft8JnKuMoJgGvjjJP5tvMKGThSPsGVc56zqbudMstr4FYAVpYTPB1yAaPwyfJ",
  "key24": "3yVAhbNcLdeRXR6jeTgm2T5UbmrjtT1vP1ejLoebPt6oC8MD3UJcaxoc8Nh3Dha7XCiZZUWnHn4g7ro1eQikzsBF",
  "key25": "mFcZEUVqd1Qt1uyA3xU47C1kSZyzYMda8A7bDLyZkGFg6j7cD5YqFnKfa89buhuHrdCdWG1e7yuiSovzcZRxFPX",
  "key26": "3ccGeRuYQk7h4hyz13KrhPsEvSQzpH1SBeso2nurn49agKysEqAYDCttxSxAoYPLnEzf5D76jTUuaJTLp1QSk7dY",
  "key27": "4EZHdEn2aQxhCTbPRBh2sfwP7CxXgs2ZTTsfLcCSawFeJpj9bNYf7PZVhckDZWEEBA1TSR25FGRT3gwNyCPooKZF",
  "key28": "2ZmkkT9BXzft4TaQu1k3m1HHmoGT13YL4afhQNUCuw8yMTuqgg1vGAqn3pykD4dzW6U3obj4gwkaBQLJqxBQFVrJ",
  "key29": "3Acq1mSUd9Do9HR1v87vhgWVMaE6ERwkRwyyK9Lf2xdyUqbSHuGvrkSZ4FYZnvqGCEyFJ3eyGZYi1CzKaGwUQ97E",
  "key30": "5ZppwxHxKAW6gbvKZ9arcGKEwi1QWT7dxKJcP6M96QBgLMRC5VJxC1XCrNXaSNPWkw9zeztYR6RKUCzyK21pyyLu",
  "key31": "9hsn7KmtAVdBnjHVVNXTRaybpn3Rfzg6oeQorTu9b8qYszFdghMWRM3D24fVFEEy2kfeqFnFjrtFfuTTX9kKk7W",
  "key32": "2USvErsNqEp938if4mp9feTjQkDLWy6Rpq3AVn6nCJvve9tjjeNznKH9eDuykQc7CvKyTKudFqgyB49iP9QNwRWX",
  "key33": "2b31efUB1z367JRBStQqK3zJkPH7vAxj3M82pJm7c93w7SaQsociRKK3oGfGt768dWvpjUVLZ6x1VXTxdtUzFout",
  "key34": "Qk257nYyRXV7eLbfS3u1zP5unEvNFKwpmn6FWFExSCpTPLXbdBFKArRph44B9sdbHrtXZriMXh8kymo7PXvwvQA",
  "key35": "61z2RA2usoPGT9EbgvmoCkVD9jVVVVY8XTZfC9vSwDbHbarRmpxiU3g4Z4MgCdPZkywmmoJGNar4Ln8N44233krQ",
  "key36": "5cbmxu5Yx1DaM4EfVukagf613s9dwb83PuKUVYthgbDnrP4XAaLZymF2xhq7H4NKAXKSYkBujytRtWPVir8m8q2a",
  "key37": "4enA5sSkBKGCQAvJHs4keX4DQwQY99Xioe2w2apvb2rEXDEYHTsTvXojRpUxJatjt6vBvdaZcgbNgd55dPZSDciC",
  "key38": "4UfxvLLeQMCiLSW6jeS2zQvXU1kNxVSYrEzS2ugJzNFwU9mcTh8b5odDHjexU9YRVngHPgBMRSWpnAcXvQjDMema",
  "key39": "2gBYVrhRcSSkiS7bimhvcEGJ8bxrvZ5zNDSNvoDxySkzpKNtyM1tmsfXmyT6AJjUMLJyX4HTYwtHAwsdMSgzqWgh",
  "key40": "yPzEZ6C6L6b6v3M2MqphVzxz34JMpjaaR5ntuNshedscb7uLjqFqbsNrNrSR59diHqSnvXkFHtSsfH4kTqU8XD8",
  "key41": "5fgiTDXioeAjQAMNBpBNdA9NM6Wq6yjn6y9Me3gcrC9A514pypcgejpuoSv8xpR3L5r93verxQy3tu7dxNVsyj5b",
  "key42": "2aQB49RJPEA4qxfp5zQQcXsqsExoXWEj5oYHMaPDwZnysoiz4ktLJzdXUx58ubkeqLybDedbGM2yAdbewKEf48vn",
  "key43": "2r7EyQdHTTweNjye4SopSS6FaFVUzGtwTnNrCbhKZWJ1qpqbyLF2RPBuM2NRoXufRvX8WWCcgETHtxq4BAAEhuG",
  "key44": "2SRcZaJ2yFT6iiadCttKuWaKwrgWzywBwgWugazeBUfe4Er6ECKrsN7Du4Sd12sqbvkoLFqBDuzRsWtMNYiujSQn",
  "key45": "3n3dKdi6za8MvhZ2RjMwSxcdeT3Xfo14CArcgR73xogpZMXJciVpyjgEGkgjxsovKEQ2kdPHwVUvJsGPodeL5wUJ"
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
