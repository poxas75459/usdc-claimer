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
    "66M2FqUmgUQ7ANuZQY5e5AXsgr9tBMfDXm6QzEz5LZ4c67vL6G9CuxjbNBavPTEntNn6Hba23GhvR5jXatsJzbDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dC3tyUZs6Dzsi9zrGjrPY1tq2HEaSiprTT36Nnmz1BZp9RbFoffJDHyb7H39Swx1bAhVZnaL678e8E6h3Ts7yxa",
  "key1": "4rvHLqgjLuF1vZhUBDHrhctKTshr59TdSfjmw4kW5S5Ww6Ha3FDhr1vZ85X9FrPN3eCndpDEpa2Ynm6rgsvtERN8",
  "key2": "3EFNGaZzgWMzkWaaSKh6Mm6gQZvKL42JgtyecncsFmrJPs7JqFieUrgw19X5iDv3EnAbrLvwQorz6Chxy3kNRC32",
  "key3": "3hgSRZpFgsBRNr5MPQ3iukfvxMgRWetEiNR7Fpxu7yhDJEmBjopYqV7z9efwkv5HPcDiE7Xq1RyehY8grukPxWzh",
  "key4": "2E5dJKqgawJzhZM9Pp3FRusMsqEUa9RYQkRRXYiRZaMwM8UwxhZgo8RwwSHragYCp37nwkvVsGavsuPjFM2FtGZL",
  "key5": "wFCCZEvUng9y6gfrboWUHEEPSBRkw4BSbbTXxBVmFYU2QDWGEqHwjhQCb23CpWNLuAZ1A5PjosmwzHQFUx59sQk",
  "key6": "5Vk6anvHtKim7x5QsSipABE5SBckz6wKx5XEaK3V2Unh5jQDehoGxM8Foki6y7jHGvDUVjNFKpYB2wG1kdTWRh8y",
  "key7": "5CQuyG5cKgPJzheraVUcFREr4F3UsCyPeqh1GAfKRp5neXGPLzdrH5372xWaqBrFMQaPLDfKWV9TXaqKvUbED1Lt",
  "key8": "3tNTDcwq4Tefc7eHj7iDpqjMwk1vUXG3wJi9KQ1fKBvrpGhhqJLwtpbQ9XaAQyU1zMffj4hN7QLa7y8zjpSAdpx9",
  "key9": "4ya9ywpQorzT3Fo2fQhV2kHDATwQ9Vcy9iu4CuA3XEgUSsPVWnBxPn2WS8nEARm7WhN8p4RVVSD1eFirQarY2euh",
  "key10": "3zyNpyHDixqNhisUiTNu93nwpS8mAGsBn4TacQsbLPfRCARSc7edYEt8X12PFj5yi7uaAqRn5zbEhGJDFqyudgx",
  "key11": "56Rv9tAayDTThJw1VSNjpWtYhgj1JxwtfiQTAPDEpAHuTbEMWwomrH8LG19aAzKumgH8JShkwhBRKgWWtaNLWYRE",
  "key12": "uttkknoTVFScjzDFMjYqdCGRdasBc1UncnpBX5CsdB72YhnJG7qBWv7bkKoNak4JX4mwymkK8werJynmsv8fqpC",
  "key13": "2DueibCq3SzZ16c7j3WJ5yfVjBXEaj2gQ5PARFRLpAuwgvoQSfyRzSS4ScLo9PwaAdNp87dMTfrDEFneRf3sw5Mr",
  "key14": "AvVsTtttvJgAP2dhZ65R7TzWAJCGsKrdvadVZPvzmHhjCqgYQsSakdWZPqHBiMoSmgYRxFpwHrhMuA1LKS5QLwG",
  "key15": "4Gg8iZxN2na2CDLz6T4kSrvX1zo3yoLpjZYeixxa96rQJxJwrse2vjigCfYZMPmyPztZrmWSJfzpkCVu2mRsT8gV",
  "key16": "3cVa4CNbeq1Sjij9coYzDywEfgFLR7cwcHxF2PYx8W17Q4FJroGP9kXZ5yU1kVMENxvgEnKHijSobVbZ3Rydn1zK",
  "key17": "4Uvq4S5ZxDhvAFwkpWjTS7tZAoFe5CWz27xngtDzVrpRh292i99XA6LoaXtSEeMq5qCRfU7JjzdWQZ8s3FRe9H4J",
  "key18": "5B2Nadm7pjA5zG72ksqh2WE7HewChd2jnRZP1h4deKDoGMYKKPWt8y2cNWGoarcFnxFYo3z3H9VRrpoGRmEKR7y6",
  "key19": "4jYdwKwaeuCsCcp9wjSB3b6wJt93eFU3VBSYsEs3hUMpF4zcDwVb7yrTyDvFNF7b9QZYcTDmCJLnbpEr36nKP6eJ",
  "key20": "544jAD4yFpGAPMjqdfvJzNFJta65S2cesQmZNduhnoYJ1Eb1ZCB5xSzkPt4nC5N946KeYCZA7ry74k2Fdhm3LM2E",
  "key21": "3Fq45esXebuuYSTPCz7Nh5mxmVxBvr51LkvNW2twoHxvmsJBmohzyyBKzAvBo9gT2WGCgr2ssujNKCmNbprtEmN4",
  "key22": "4sRYvyReMiq2iswuGHhKnaXtJTPEHbaDpfTH4RowujsM9GckCjnMSxY4DGRxNNmoCkE5B3arFBTHQdRrv8yRM5M8",
  "key23": "23hw1rmEXuCK2DvkvttSFaEchULm1UwSQTyqumLsGhyqnopdTH6TMdQ2pqGvEHqRvnWKkAt7pqWWo3e1YYEH4uE7",
  "key24": "dnQzh92rXJjmPMKFiCoBuxgVLYtZekDGsEynK2RTm2gpHhWvY4N8LPxqr6qJVnbh4HSkxNk3Rv9nFQBcfFNoopS",
  "key25": "5Da44545ySvhX6s4VhihAhViABMEtdKD78ULTLtUVe9Uuv7dWo8QJBfuWXBkSUsXqF2QPhhG4zKdj18Qmq2PW8sL"
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
