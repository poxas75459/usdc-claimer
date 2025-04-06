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
    "73vQJ3apc52DPwkByxUDCDhgbfBf1ijM2KBwz8CcBJf5VF71tyknMXTLF5sFj1zStqgJvSYREKmJJJrAAJNgYRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x4FZad6qjoY3TT5vpUbgKoMQbobHj2L74PwnZrn783tr5dLeZMu9VeF3Q2iBk7R2G67S7JGZ8rRHzLUjrq6PpPa",
  "key1": "5iZW8dz7QxDcqTNvuaxuxANLBui9JX8qXd6inNEmhAaxE67swDG3ppsg7YgstCbxeyWUG8akarHnLozRrVZEkdgG",
  "key2": "2R6Wfc15NuW5QxQPJ3wWkPYnDanLz5jYsQ4xYAWA6WkiJ9qmZ4VfW3NSAdr6ukzFsZ3PZ7MS3wCoCCSbQL4fptiF",
  "key3": "3cWx1DSMs3nkwYvHJ2Go1eHmXHozjne8A2XdjPAFFhX6EgyWSNgNEb3peCCYsYQnW373tDqLFUATDcAAJgg2XDTg",
  "key4": "5NRVhf7SKuVopfJhHGGG6mHxSMNCYKVCQabukrLeoT6eHf1bfGicB7bcCm2gcNSBwf9k3tSrcZcmqKXZ71gFrrCa",
  "key5": "HZjU1vtacuG1UiqkAUqRfdinUsj18mo2jqMs8NATd346otVjdf4ZaoyMQrUHCpxAmowoHKv1SVTgVwQ5r28LsmR",
  "key6": "2ytsr5vxn7hR481rwVffpGFkxVsfZxduDE1u8iM3SJ3ixcC67zu36f4dsESkxfrc1jej52FyZJiT9FxcpNa8EjpF",
  "key7": "95MQghZNo9k37kq2wpdvU7N6wpTCGTUscH1EyzgmKsJNTLpvs3saKoQS18z6nC1MJaDxoji3wY2CiQyoi2CHDa7",
  "key8": "36FexAQWKyRm6SWqSzNPDRYNsHRGWojczRx7fAvsH8DiijrmvHLxupi2MsS67SHZ3xwivmerg24FTRb1W5zSopLf",
  "key9": "BJ4j2X829zvyq6tFncP1TEhDeky7tTgunQadAPnMkGLgkr4bH1rmMfTMuor6pMFxTtNQDnAzCe3yGR2GWqSQpG4",
  "key10": "4K6SPdcykLXdFJZDpmieQjSMtA1uYDxFQpCkDn6ycsKg53gvJbxLMhnzcKv5SvkQmoHvva4s5aPKa5MksvCBiT1D",
  "key11": "WEVt6B1wovwVdnuhbCTomi2A4t72UZr9ohCfewHjCJRH4XzQpMrg8mR6s3vGh1kaFima4XyFV6FxsLbNYQ3SF7Z",
  "key12": "4ZneeDRSo7smqaBK9ZuwnqJUQQxEdjDXFpXeQaZZ6yCKNYqHRqxTrx3fAmRyixLk1sQXykiSqHK36rgKvtBkTXw1",
  "key13": "35cJ11XDiqvX6wjrFFazyXSjbEJKtP2R9N5mp3bNqHttuikzQostt4DowfXtaXEUN8sySyvaHPJtrxCeQj763r8A",
  "key14": "5pFjR1sq4NVLsA4Z4JHgSPyYkG4JPgAFZPT7gfSFzi6DH5MgBGioU4X3xkCT6R3FNtJnf1vKr4ak2ydcnRGXdxPy",
  "key15": "2zdHK2NY7699jGWcAL2nzoJNyr452xL3PWLoZiLFETP15K49tN4gJsZZHihiz29FAW2QDMXg9RqRanUpJbtxLPxA",
  "key16": "2CDw9nFCKZ7pe4xp35a3DJ72JKtBtdPEZrNPzTdbWJZksHq6RLBNerwDbBPkhK8YCp8zYDgTRvUjvxCx3aUwyUWQ",
  "key17": "39neRh1Vnf9QhRQJiWihVtWtG3UFrghfdgNvZXsq5QPpnU6db5woYgaSAgEoXwEWozuGixrQ7zE8rK8mc67w684",
  "key18": "4MxjTeNc276ZqVWDybK2amBbjdTmarfi9rJD9ZkPaZgUPqJdvPJT22VxXC3tXd4uAVcEwL5SUihXJkaQSZ7Dsqxt",
  "key19": "5P1fcsYPQM1aiAJNqJ1GPhrJyRvAZQ44vXvpJdhXpujLkwwkZhCykVZ2L9NEhicHUDkLJ6gyo6Eata8MJ3BTjwai",
  "key20": "32e6QDHR9ioxsabH8hSj4DXFe2h7PL9ZbRazGs6qcUo29kGsnQohw22mWLfqkpLUNCqRtFU4KMbYkLZrYRBtvscc",
  "key21": "QyKPXpto2PrHcxby8bNBVXiUMBX24uLJeTX5CKSUk5Jya4r2pDHDuu88YEPF4DezJ1AfdTtnmuF8gichRSooFM4",
  "key22": "37MKeVsLYFMSDSKdL8qq5tQ8gsxEBva1jVhgoCFeegTyjzHYWLpMQh8MnrsBQxBzoVzJfsTpAadS3LcPkEAP95mx",
  "key23": "3ZGRs3kAMx89aczzn8r4krfwLkP1DWKiqbuHkC7jcGRVT6cE4e46jaEW2Jgr52NxdCdiVkC4X5jXw3oEndK5VnRZ",
  "key24": "nXnAo7a9EU1gG5qwUucmvq4Yk7yk8UxJWypwRDhJ5SdSK8NXTxAZ2KEydiq9h9REiusEmu65YeN32YHn1Ex2jC8",
  "key25": "5efxKBJzFimzBbyZ4oBB6mNCnzYodbf65KgJg4bYLeosaXT1vZwcqg2sfAtCWvquRFoFx5HWrHt9UAhuou4Xqrs8",
  "key26": "3xMSRCV6TDh9rZt68LthPdyDf534rZG8vAnKzSdigx93HgtApuRC82rcR8TPPmmQxMWRxqRp5vn4pNpUVwLy23mm",
  "key27": "5cyhzzUSQ6QQCHaVgxTeRdVK1PsD4SPERqh6gNGu2wsRvJamFpdqE3tUmzyU5J55H271UNvo4hdfqJc28cguhYm4"
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
