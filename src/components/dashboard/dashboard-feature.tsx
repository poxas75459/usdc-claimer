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
    "3KDZNCrdzCnWrTNPLV5FzrxC733uRMG95bme3cyXajzUirrCmircNzj6MXv9aSLyZZGSSmEWfEiBbSyw2SmSAFBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ytJssymAqNSvscdZ262uz5bqb9xcZjb1WorFY7mbj8G4Ys9qjuAkdfDHwSbXCVYfAPJDcPMs2L54AAGXMxVB9n3",
  "key1": "62giAoYEheVQa4NeVahWhC9Gkad5paVxCeymkhujTUzVzQtyHaLGUswYavKG6QDhSktX37QNzReb2Z9or7Diz2ng",
  "key2": "4UJQfr9M7S9WAQVLWtTEbGMP2spjsQtRCK7dge3FMxcpkLzojgycC5ZwvNyhm4Q9At4wpiraAoYYyx7kGFZo2gdq",
  "key3": "633ZGExokEHAEQY98b4BNPmZ3vUEB4iZDRE2rmJhCCwBcN8AGWKEjVzjWZjy9QCLvRZqtykV57xncyLfbKDukqAV",
  "key4": "2LPC2E3tsynFWZkDqfUf8fUv95b78dqezanSUxQVd5kErYZdCTv7jAJS6uEKu52kSg5dWkFtzsXjQ3dQPphkm3kY",
  "key5": "39LM8b3P6DxPg9r7hdhmon1VLZYHxjutodvZaJ5W3yAYpjg4ff7cXX32XmM9EW4hMAqRVJWr5wYwgmpvQDjcoH3B",
  "key6": "4g7RfXCtvSVHPgnmt2KARzSohR9oXZYv1tuaYNpzchiwMMjS38QjGaQz2jBGUkWTyVga6PXrUeEzxULi89cf2qNr",
  "key7": "62VmkotMe8PxwvU6j88mSxHxGezwxDApnTEWF8T1VipQUAbwbi1JVPVxyVst7wjNbBK3KeQhY332oPjzro8A3f3C",
  "key8": "zHsE1GhEW2cCWg1KtAPwk5zr6b2y5hy8cvCS33USehZQJZm2bYPthWcuRwKxhkWmRnoJriJyF9PQKn8Z9JmfN8L",
  "key9": "2MBo9YN2NPbZozYZM1Sc6tTBTopCctWSfGSDPq6huD5aPSZK2fx9swaqy6WYYjgoz9KdL2QoZFtYVJcR8Dhw13dG",
  "key10": "43EthEP3o7otutH1uHJSpKbSKpBS9F7dTFb3aQ97xbASoBLarQNMHuoxDmTDALpwPQQrkBaYkzdemQ9MZe9GmuCZ",
  "key11": "31aCPXdJA3ziBYx8qdMf7AhY7FCAxZAcZVCQj22NtxBSpXCAXH2uKDuYY56WG7Xqb2j9E99zPwjX8Yca8dWsN4iK",
  "key12": "37Dyrk2GRygjNoMoyBSXqSyYANtZjuLxnzBLZtRYyiHcsC5cJqBwJpz7g1b1RgzVrBNrB7pdz234FLALQj26boN7",
  "key13": "2a9AvbZx4xWHSY45JMoUMGaakb3XyacdYrvoH61VYm9gz89dYiQweA3rX1QeTx4tPWyhvZn4ZaxpS2o2R58tMnZV",
  "key14": "FFo9uHmgt63SGY6PXBSfTV649ahp1GR1gFDwr9JvYzTDnzaA2xUbgAL7jbArdSZZo6N8gsUyvkHjV7tUdPCoYfN",
  "key15": "1nsqgjcGzAfQvu4hcup6rRvDTwzu59QWU7na6AZvuzftP7TCAXLA7FTh6jnpQJEdRMcvNDhCXEFzg6mB5LpkXom",
  "key16": "3mNFubvp7FXCQLQbupDhMaGgBtVAMhb28z8tdfnn9xsKJLjjuZwFZF4yKfuGeVbb7jwUgUu35Ax3piHB8UNBRyYz",
  "key17": "KhAJ8bL1sZh932ZQvoQBh4zWuLpWLSHLArn4Dk2AhsDG5D5me6jhkNkaEZAvRNeHAX8ouLg9aRiD3AX3YNmm7JZ",
  "key18": "2HhtaYweHHeBatcBFs92jX9Mzz5JXrAmspgReBQe6gu49ozh3knDjWoNDVpYZKWKCfcQtuXd9H6HpjgsnMWSL7jk",
  "key19": "4fCRvoDPuKaoWtWaVNHP2JGneD63F3X79eHo32apZYUVTWcxVw3U3Hee7RQBsjHkm3qfSAvBTczt4Ti1GwQCU7gD",
  "key20": "4i7k9uW7bVuAPPoYpEmPR1EbCJdC7dF3ebuA1eudZq81DRzJrbMqa6GPk6iw33kMkzXsZMYpTKHSCnVEC5H9eree",
  "key21": "E3uaYcUwT6XC1kKXCWgBN9jEAZiDMFJ8W7G3X49GpArDJWx3XDHUZ8mCgd7oTrK8v69AmDRDRDuhyEGigwLMXtJ",
  "key22": "2NHsysLx7kyNx5836SWqCzUU6XhkXsBL4zY45athpdgFT15EznMJWW2k1BJVSMaCLgjf9ae73MbK7KBqLir7wseX",
  "key23": "33a2LeN1a8SSswytKdzBCpzzkwyUFGzrkn84LffLdSVamfhSxx64rUb37Au4zZQsMAWwf2KJbcNdpKVNqwSpnUK1",
  "key24": "48mhwpekgCgVwpan25yG84MzQJbEV8kJm1BeAHU2Vw439YtfdozLUZQJoNafqJhRMrLHxZcRWq399ytuRzapmw7W",
  "key25": "2c6ngbjLbG3xbthP7z9jhVHBxqeKBgYskCdsQkbU2sbaD37Bcy1xZJrwvtt6AagWvUa7rvEozYfkzgNt2DcxcQUu",
  "key26": "4TEMf4W7HdPiscxgc4Gx6Bun1jaqVFt37fqac9qzGzijcY3UMVEy3GZ1kS3ERrwNuQGVV46eDRmbF6fFA5G8tdDG",
  "key27": "2Aex1w94o1SABHgQjsxef67aEFmAPe9LKNpiQ4AB8BppxtRYQTjgfapA8Yu34PsjPUMwRafsmrFLD5QS43cf26LB"
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
