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
    "45LZ4AG7UjstxTqYYkKEURj9KckXYSnySjaL6SKiM6cRzCgu46NAywpgvDwQcUu9SGxCgGUheWu53teeJTUCtQ9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PuBoPNd41P6gmpQr2qcEw8W17CVMBywN1o4sKtx8ZYRfv49voWfhFSXMieot5hiaso9DSuTuPq6xFrjkLHMzyki",
  "key1": "3yjEL2QaZZedhvH8jZA29iviStfQDDp268zo3SvV85Fd3STMwWLwUYjYiBiioioRWQ6CzCqLMMXLhT5BTHJAzCQ7",
  "key2": "4s42PYGqK4wL2jLjP29vY2zsUXsDJWScVgSTsysb9mLHuiGpcRfUKatPkJVdGBWpxN3scDvuf7R4EDhVtdzbQqBP",
  "key3": "3qzXkCe72HsohrBna9bfEFSwzMRga7esjGsRL2fbykSpuQJ86wdJWTECP4L1MV2yMRAsBnAUPL146JQrorjJ829b",
  "key4": "2L3aDKQNuovkYTBgrFLuP4ra7yypviM9MCdfWWVf6zBNNybKZt8YpcNEezjG91caXKunBRqeY4radWbsaVnS6iNX",
  "key5": "48FDQBwWBxzkzaoePbHzySRfoRtqNUGcH366nWmgN8JjHDrtTUtfZGqeBVN2W5oU7LZSXuWkCMakn8E8DfT89CVg",
  "key6": "4DXaZK1iwkjpmVsmtHmF4ttJxktwtVXjoo22dxxUFMyfcKNZ8th7b52mbxzs2tXTYGFZLS5eWUFqJeE948zckuYj",
  "key7": "5NsV9YtSCB1aYyctXfjQmcuK2n8F736a26FTuCeCZYcTSQEJxD8fzpa2v7suWeBCoeCRSwgbBoQSraDciVzgAMCY",
  "key8": "4txi6nZYjqzioSnuMJPZEpPVKuXcboQM9d3G8VcqrWZgchFfajsGDehbGFxRNN6Y9BnZgaJmnMpQhaKJgSbTyLLY",
  "key9": "45DHmf4GAHLv7APtR4QyXeGPJdpmNgWxwUFc5hpAFBUPYJhhBjA8vyZhqsZcCeoHfqnNdmMH1W5SM35mKgthRwcG",
  "key10": "4cEApGYQxRdF9rbjKaxqzti91HWrVid7PDWYZhQadpJuSu8MA24uhZWG9ZWd4mRTrtFYRhGGa3Du1oFti6TdtoEe",
  "key11": "3ggsNpF8GbjoQqFeUFmNuqdk59hxU6FJKvwyguiZzHNn1SuDEVEYWgHz6SXt7HEsJLFx5cZHjP4yAch7wQZw5Fsq",
  "key12": "5wj7ePc2UsY278KGUCb3Jk7qYvUtgAesBrdtjzazXnJrrGj1a9tupYJtV3jG4yp5rPQhWB7pRiDpZpA3QrDBk7ik",
  "key13": "ydbqCR9ctiHnybog1auXEg1Mg18SwHED2gwcYDbRRzdNsAYe47TsaVTEWK7o82DYBWp4P1G8ABTiYx869zQ14AA",
  "key14": "4nbSUKfCbmJrxe5KJs9pqmrLvrQKsShnbjz27taDa3jG71mQQecbBdyg1TqSP1CW2CT1jdT2aL6mkpNbqUn7Y7Ja",
  "key15": "4wqjgkAoSsSD1DWfyLEHwSDuf93ThVn9t9dx44FR8N3LMw7pQLydvkWQN4uhwahmmLLNsFjcCiB1MYtWDLyQ1WCR",
  "key16": "23JoYZWQBFsCoGYwMEKdqzr6hRDwG5FRuUmsjsfhU9xW1dZ6i8BqiPyeJNUeZfnNPPRJYJLceUZSpYTUYcWUytjC",
  "key17": "252KCgRP1JbW71YDLWSZRnMrg9jHN1THF5LhBa9q9zaDXAP6DH6Rmba8ppUZ6HzBcGgR43kMgxkLyp6fgm95TvnW",
  "key18": "5hhUBizvY6L8jTtoJBYBsLC2Q4vH4mqi6Nwgp4JQPEFuehP1NVE5UAMcpDoqbc8TBhSm5ABM17sZjDx74PM3RJGV",
  "key19": "3yUgXRXJhNGaGvBtxPv5XZ6Rqm2XuWky8y3nR6XwgrY4QHg6a8P5C7DnWXKpPaQcrBkHcJ421UGcBgTm4eonaoZa",
  "key20": "56ZneFg1b61YjwcYNMuVSejGQaTs9goFvDga6fSkDsbKZ192ND9aaFsRhw5KpDwHXj3eNd43HDtcPHoiQGZen1q8",
  "key21": "3SyCkQjdSedu8vsAwcwJVoJcHix98jTqTEmqUbxYUT2rKht2RZ1QLTMvxaF9bLcd8K4mxXWDt6jy7Exqa6hPfrBo",
  "key22": "2cedcJJxdFh9GPPqqoB9iCuYSup8n9pz3eEEqsZcSFGHXRoSdX1enntLXPH4T9Gk8A3gWJLjo2yGqA42Dh8YyMNM",
  "key23": "J8cFHduzZHMKwydbFgYSp374Gio2PW8osLhsnggKar6LnPdzTXv12xjTfcuPFRcGGGTsgTDkxRE7KzT4gePKZPY",
  "key24": "5QoB7AqFxgHvgea6wnjKogHFYYRnFwbVJMFzqQDev7EFRy3B7YXBn5FZ7uK7q8rEzHDbJLEdZXd3Tms52dvqo93p",
  "key25": "62bwifhVuycKsp44XXeeYMFgiFGGnjyS3GLMZd1Fd4a4z1FKjSr29Sd9YfKk3pZcey9sekohJ8nBKGYguR14pNxx",
  "key26": "3fCc2GvWevRAp2iHq6gEia64R84JbGpo5iQtBjyjRKozktYmygeV9kE7iXb11gRWKzsb1S6SZDAKV1buQ6bp41WC"
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
