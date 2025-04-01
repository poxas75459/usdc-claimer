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
    "3XN1AbWQLNeDjZMgk58nRy3q8PvBuzQDLpcGid237vmm4eUojjZwGnUAcmu7RdWDWPyfLjgxYSdn3RhspXRgfB3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FsfuUGeYmmfpAiFNmFvaZ2WidYZ7erYoK5aka36MGf64cxfKwyg5MvqXPXwg87Ni7f1kuViFZ2TaubVJH9eduSb",
  "key1": "3V1uLjAWghRH2nTqKZkobyZ5UxTv18jMAFRSEnWKebsJU7adK4wnR98bmMXKSHcPfvdFESwSZdswGQrVT4JR9JRp",
  "key2": "3F9T8YhfACZ4ZjaqTQnxx8CXgA4fPv7FmxnELFZLoCr85RnYXtHcBrTY1n9vFc1BicBu7xbyJDdKDxmH1iK4coBT",
  "key3": "3R3oSTCJDV4KLMBbbD7Z4Trvq4QuNqi8632A8ne1thhgQKjMmDdSK45P3sTboNtfSwmmFaSzN4SrmwVdqZraSKyn",
  "key4": "Pmky8uyo2VKFzPMztKbnBdtBJdYQv9fP4fbiBSAMJrdKgad6CYnFAqh3g1j49LawcgPWSZ8LQnBqED54psyWXx2",
  "key5": "4XrMpGHvzyTywJxPfctFFXZUGb2gB2UPuv1E1mNbDf4yaJNzssi8vKdXCz5iv8xoKhX1hgBhvpeHY5F6VWjsuTX5",
  "key6": "2iWomGsuVS8eiRMMpiyNGQzpTz771pjbgSYNFxaTqw7144mJRuDmVF1EB36fkmP5MGYCSbmT2jpvhKiiunkw7Yuc",
  "key7": "2Lxn5qPjCfEU9RRRHG5ahX5pJykCRCFHMv8cQfCo5L9b9WFqoEyAQuVG2MFpWsa4ubaVYYUkmmmp1izZqUPm6bxi",
  "key8": "215BPUucrBDYUCxsxVexFhg3kFuAanVuzgpVwRcQzxJ4DNZ2RxDVDC9vLaQ6euAjskWg6PgHFdvPpTBPCSWuzGwJ",
  "key9": "3Zne1KFPmErSobev7ejz3wfh3CwgcgYDB2sBcUnBnnLKcvU1VEBguBW7m86vLC2ARKNK1ARpH8DgtTr2caZJ4BUX",
  "key10": "2LJ2iYmDTc5T3gmD7USZCACc9fCtYJS4CLsSWCHBkgWLnyLcihXxYczkgzaGAk3mufoxHtmu8ndCtLWRw2vaM7vL",
  "key11": "cZ46xBTQoLueAoHKuMB8WYu9HTAGjTVyir4Gv7h8SwLs9EJgPiqXf92uxFf9n5hUDFSzgvsYKpi66avqRS6GyYk",
  "key12": "41V1pyZ4JBsddyj2vc3MrQVTkNC4VnbVJofhZZr5fLo7w5q27dFFKhTfxXP3zRNL8pFqgNqTydUudAXdamPBqJTX",
  "key13": "4nu5SDTzdaWihpE8EgWhqZu3dvb6UPF9ykACXTBqLGC8XALReUHtAUaQBkyPhkE7NgmfNQvDSyKNSNytAKw2q8k5",
  "key14": "2HfX2Rc9hC2GoP9tCy8HQurnQUmmptkTz8FiFLUbYMjDTjDznDpR7Azjn75cq9Dsuudf5vRYcJvcHJJutZTRGgCy",
  "key15": "1yfbAwbSyvxdF318pWPP7ApmQHDQmMtQut8pGYaSi3Hg16v3gDuC1DyapVDkTTG3Nnnccakf3roVz8kvXbKhTj6",
  "key16": "2srbA24mHaZZd6z2kPfLEYJ8TFEAEYCQxKTNZUpuApXpKPdaYJmY9i4k5TAMHhDXRhFwUHSe4J26NrXuAPPoMxbh",
  "key17": "rZXwofcVZD95j1BGAvZ1oVJ9ddG1QMGJMXZztGLPaGFSWkAz65vJjEzRdjtHLmygPzupKNGpM65FrGduo5SYxU5",
  "key18": "4cgW8KL96d44D8VafKDUM99JfCqEi1CsMWMNDMSsaPzbyYzDQaoDw6ADJHGN94hBqe2FzbwZpzVCRzqX3KPkwQbd",
  "key19": "dYd9HvwEs81oqfTEogNXC25AmBuFy6wqQegr5fk8zM9ab6pWRdJLbXRqBKEr3QT64TXLaovUQjsCht41F2Ho1Lr",
  "key20": "4sTkZFoPF3CHhEcm5e8seGCHbiv2dssHHzXSQETTM61t8MBkunBVFbfbZ78FyXkg7DhgVyiFCqiG4McH1sAT1WzM",
  "key21": "Vux4VKvkSgjLjAjnhizMdPYckNN92mwLU2e87ypCXVdvKNgFT8uCUE8iiphVcBDZz3pyuEYsnU6zzBnK9A8JL3n",
  "key22": "5YUgLyA16DRAXLyW5H7h3LycH1QyYqsLpEuhn9f46wEX1BjzQjxuzENeCjpdD2h5N8EW3xy4Dbr9Xn51fXMuYMK3",
  "key23": "5ZdbrmxuMEWXtNYq6d6yuT3XPqQNrTmcEGhS1MzTB9pKH5o4jeoUkiJvLn691aeAffKn6xw6MvJzN149mj3Wm7iF",
  "key24": "3WjLuJ2Dgm5rw9nJ5kauKKbEBCWq58YVWeaCAsPRS7ESknyYZTHh5utrsmCywxoxF4kd3woQ2b7adDrnkvXgfVUJ",
  "key25": "3TjfAENpyyFPcKteA6XkQA9FhwapQ9sXv9GXG7LyqnNNm6WntAmDZ6uL7UQdo9Hu9SqbBFytkX5dbTZ9BYKYoW83",
  "key26": "2FEfYrzf72JREPE8HpscasvZKV2oRzDspTiG6xA3N3SJ4hyEjBuTx3bK1htxnhq88qwgGfRxykiE6KcRBWq6FMdQ",
  "key27": "3Q918T3DUTvixD7vA1nVFAP6Az8w5gZcUYJmSgoH5KZKTeU5GnXhzKJaj4h9sWX4dBLUoAsp3eBVJD3PXEGzqtim",
  "key28": "2o2VYqcw7XtanZqJTxbLKZYYaiq7rKksg8DNKVXYMwZhaANBpq3YLx7sXwxgvNcxRkLk6PshfCSA49LyWetN5nKz",
  "key29": "2f3jMyt5oJFYPfzKnDcHyicxY4WoqAn3RBgEFK2SWYQhHWXXs5xJWm1E2XK32DHfnExnMdhZecYcWN2CvA9yDs1e",
  "key30": "5ZXbLbFWNZM4FtfEBXCsdLjCVZsKLnmQcfLhLtaZLdDAWXYETsx6WA34mwt3bcsLFphBN7N9zWG5mxFxBSjQNZWr",
  "key31": "2DG17SMKLSV1w7i32146E7E9YCKfGqyqe2bb4MPbV25wxfQvebi6MqYGkXADUPtwpwEEy6Z4GcjTJ1dSxfNnvzTW",
  "key32": "4s6fxddopQpipDKX3SjmRK9y5KqTFw8nzSfDkohUZCxSt3KESzJUNa4cdwXkWQjE64RZVzQMuuYjmrTiQjKAPMrq",
  "key33": "3MzFwQaLdrZNLJ2TuW9t6FtKtj6D95yZFYHaDPAWvzcB4fcN8S4kHoPYtKqr2LtcZZviCrHDo5oVmXdgwwHQc6UB",
  "key34": "2XwcqNavDe5nycfvvbA57352jjkU76Fppf9XBkPJZRERBCn5xEKPZHuvWCm8gu8mq1crqkdXjEeiHknYDCUGWKSQ",
  "key35": "3mHsFJpK5RcJKZ3AMN1Gq3reXk8e2YrawdwDMVqncLnC73Z473A8mG4PTA3EPZWpJhMGfRHik9sjMFJdVVFzC4GA",
  "key36": "4Sb4efKQzmyegZxjC1ag34DamC2eU7RqykVvC7WUCcQNPC5aEf5QqnkiZTRpqYbEuJURpQP9XfNMYyb5fLoPRyMy"
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
