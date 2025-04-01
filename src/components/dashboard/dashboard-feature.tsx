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
    "sHaWbwtjQLFZK9AtyeJfQkuDsXUFsLWxS94hD8Rk7k6ScrUw7HMr22p9pCaq9k5q6ctZ3tysiMHECbFxa19ceaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36iMKfgghPuRxfPsbExdNRDEaq6hNZ7BsQdWpLNA6rmKyp6rYdjcexBDkVC3K31uPieU4F4Xmn369i4NijGAFHxG",
  "key1": "5kqWs6C1YDKWaKmw4tiXeuJAeyX31NAfR6uCuREsNuT8fTtC5aknP1qbCihV3FMtqbLU9XucgBUzwMeWfKuzuoDh",
  "key2": "3GBs8oBg1Uu2JKKus8Zb3f9zHiFDdjSuEAWbuaEkDRK1HeWUEaeMJ7VqLtKDH9rLzWEYATCSQbpMtDsmzQSAbWfe",
  "key3": "5ScJxgeeGJztgdTXRQTnEdPQarDn81JwM5FGV1Db3g9pkBFKr1mCHvrhikukvcnX5yHcNuUsjFpHdRRcP9wEgcGu",
  "key4": "nC1LwzEihF6aWXXZRxC5Qe1whBXxFpoQAZkmrAdxeiwrvm72WKGPhkZPf2MzepEx7Qd9Pa4wH4wsJGkXwxWFVNf",
  "key5": "3BYVrUUn9cWZXmD3DJGKF6FPVS6ypjd1dVCQaHHbT35bTbJZ5PQvXfRYtK17DCwauZ3CncbNf1RgT7D2DSESvWX6",
  "key6": "4UT1aJZMs89MXvGtjr45i8csjKGJppvvUDgB6UUPhmbMizDDQenH7ABFAKQyf9CmUk1owNpSm1SfSEffuK63a1FS",
  "key7": "hQCNecZysF45oSM5MtngGnot8gzDgxeG36ZqvDAfWobJW3GPB6QmwZw236iLCwKyVRSXnQV4UHf6ti5CLjte1ga",
  "key8": "ByY2pnhvkPNLAgyH3Kh8JsBpYnvJZgWS4StWFZgn3T7zRnhVwVqTF9Sb1PzHUSbzYBP2CdfDfsRpLs2KWmLqM7m",
  "key9": "2r3on6HYgF4uYBgjUumyiHAEMa77QMQsASZsu4D1gPvqKrKVpznAP2aa5SXzrFwQmReq9uD8DANnWnkx6VkenDab",
  "key10": "hPc8LLGDEwbJyvFQYdHzmCtEWt48frJinCpkLGDingb16is7AVmL2dEasZD3JYXXkyEgtW2nHazWLwYfBGoNE54",
  "key11": "U7K2UmZr67MqPKpVDTbQGNuYacWy9Uo7bTZByGQEhUxRjm65mtPpeMK6RekiPkErGte5EF3rDoQKRhTViDH2QJa",
  "key12": "3p3S7sPE6hEN3WytcoFv39RwA8AAGqfYdckCd1gvq8SHYJmmX883YzQeFCv7HrBBkxghyhknvDCr867ccMcJ8U2K",
  "key13": "4izRxAMK1AmH5sbJAdpkYyApHiW2f8JSe2m9rcNXug7qnmEQZLcpBxtYGwQP473H12bdwFpenJNrey5eDF8g456b",
  "key14": "Mw2PdgcS3fjx9eh79FpKDwDc8hYtW8bbPucR6RTfGXTbb1iiUxxXp5NkLJpbDe74ukMbo3N2yDuUFvoKga21wvK",
  "key15": "aHXmQSNRMuoVpPazNmjWTXzGvbqf34wQTXsgJfXqvfXyAoBE69atqMWkMDiFwwZWf3xiCT7ENg527aht38uffDc",
  "key16": "37R8Mr8w2oNUKiKe5z1ZTaiEuAPWjzU1XQezkegPmkQUKndzjXYyEZnDxmbR2cjtCk49SA1FXk8KHfEuyM2DVChZ",
  "key17": "qtVzHhArafREcpNBfzTQ5JjJn4kaAwd63WNuUymAX5DXS4LqVr7goXPqVa99WwBtGVGn7xLKtjxaUQ7YAyeGyiL",
  "key18": "3zAVWSBouKDVs8NyufBervuksjmAbwmPHpWxB4QvMzQthvnKwDLHPfB6z7FvCh1QdKZ7ZFjMECpLJTLKAuxvJed1",
  "key19": "5expmGnvj29mPQyjEbohtL5P6u5mDYxfA5ib1EaXotuN7riEqk9tusrqpxySL3gpgk1UgFPpzRZx1oucVL6pXrrc",
  "key20": "2TWcMbagKR7u1CM3TCvCFYTfH1pN1N56AEpUZ96vPoVgeugpqed12sw5F9jfSc8KJSz6Jr18XqtkCw8bVy2yNJQe",
  "key21": "2U5N1xPhnmnMXvG28WbwZA9Z9Wjd9BYgBqPqRqWe2sRoB9Zph6jdaK4p6WxtVFMK53En5hvJPahsfKpqcQiw3vrE",
  "key22": "ZmXds33LtEiyikWioUp8RKEdrntXccdkfmg11s2ab7btGThfhzf1HNWQf2hVsTNn5CjLax2jP3cFM8aP9xCrP9f",
  "key23": "rFdyy2tPm9B41B3z2mvg4bfNTcfi4SB1xBMxCjLPTb2MC2fAtJ2RhbVdYJL8EsWGa94RNMH3WU61iSyuK2tUnLX",
  "key24": "4nXGrf443MVexaGQNQS7fNYWPtE61VXed3J6qGwRtpwF8cpcWa7nh6zZb5e8T4c1SwrzTEWYbHrYhGDfSupj8Hgu",
  "key25": "5uYMn381uXXefV9r8isu8w7Xm4wjJCN9Z4s8A9JcAWZNQh2XZGDnEskoJpqiY4sYj5DVKZ9KNivVxXmiSxAiwn9j",
  "key26": "5fDsg1rtR5ZAJef2VUMrmyBxbWFAnd5tzSgQLhznuqadAu8vkh8Rrw1ZKB5T1JHzqHRbtX3RwYaC8KAxLUcZebmr",
  "key27": "sGqLjRPj5tJnoJGZnb5v1SS8yvwJw6HCAi5w1xjQfMEzb7NS6XTX2s9Gai99kRgrNNvr2DiQ8TZ7am3kvbEuXny",
  "key28": "3bmJtkNWxCUmSWFfcw1m29Msq273hWqoLki7p3xKBHegZT3ovRRArSgQtjQoFSUMZ6NmD5oz8kxoXFJHkZR7Nvpz",
  "key29": "4rFkMeccidG4hw1XGBuSLQH9NatseTLHNWUDXd9Txtd8SKUXzKsTMegbXrZVdVtR9GHrNKMpNCN6QS9yRTM7QT5K",
  "key30": "4J3sKNQaSfSCsuNhjVvPE21Qays1WxFKSMuHxXf8sfkdcRoUhBATuBLn79YbY9do4YhfkFSGnRNhDkFNkkCTBrLx",
  "key31": "2YZNVovB1oK8xBysMf4TKK5UX3pMrwtVCNDa5nQ17zL3jq32EwqM7FH8DQbns8T1xd82SzpfVEmW8MmzsYk7FsjA"
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
