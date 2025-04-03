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
    "4eMT5ofeS1rwfyqBCqbXNfzCefyiEX8YQe3SzL9ivCMmDYEJDHLeRbrC1NS3jGhwWb2oxcBz64eh1Z2hSZPmMTKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bKvS1qJYjjZ23JHT3YanizxJw6tBADpVWNF6R1DRoEoJ7fUwBF9qXBBdgoiv53v7PmBR9JVaY8bBT3rVQaCMApJ",
  "key1": "4Q9Xyqvd8AaMvxQ4zHCbCDoq33zLQuuWgrNqHrB1RLmGp9YwaQrycbjTZ96zhC2H5kCD18qKrBj7NggLowL4gvQF",
  "key2": "4jdkhbkDGmVzbt3xbPTisaKWfRZxH8cQapVth4nyosYgkSb9Y7MCzRbQaatCSJcDcQiRKP5bsdpJgnUw8pyH7jfG",
  "key3": "3sj6Ln7kNggjbHDnqGQo57pH276Y7zpBu6Mx9Nhbi5bfFs81ak6bQ8W26hX7nVsB6j5fdnffkN6LW8yAMV5R5y6V",
  "key4": "4HU3Em2gDPeFdfFSax9DRmpCzNjWQB9RKf6s1vmGgFMPkJHDRMLhAeSmu327DGS3VFkHwgJoqaewBnSjavQAtS18",
  "key5": "yMVg934NCnzh5m7w1aSiStV45Rj4cwudfd8ZDSRcQcjXLviMiTFfit2xf7c4Z9sEx8k2TMoFK1XTAiHrFTkPMDg",
  "key6": "5TaD9eUeAviMRPGVUVVHxw5FgU7y14E45ei4qvGwRvUgTtHdmv2PRgdV3GtbDMuiqXALqgbxuBj3wRRAqzRUEQR5",
  "key7": "4A7ZEXbmRBgNkCNPvfCZW4fNBx3HtfPcPkEw9ZnNhQzbn4KrstuPqRWjZVteZNuH4fjXE1oEVSvf7GM1nVJqcFbc",
  "key8": "41GZSUCU2Gm4FfSgjtiSrHFrz4Lz1N35LYFcMmugUZDUYh9QigsJoQG2fat3Xv6YkV91tBteotjYPf46D89LW2Sf",
  "key9": "FMJ7Qpo9LgArmeMYTZenH7AkPNHcmY15pjvmiumEwAQgwHe4pPhvC6oyBQVT1yrBJzMbawYuKShMfrGdTDscd2T",
  "key10": "2bC3ERKdMpeitusfmnysTCnRyJVkGiA8EhiHECXcToC4B4KT73nFrehT7AzfuNFAtZRaFab5LnTKAanH3kmtYmv5",
  "key11": "34FTDMEfXxuvyYWSrRuTnrHWW7m2cgwGs4SaoyGj7QfCRHYwYhMrghagzTSbpRPLs5UuTUqF5HRgiFTSPuGiFGFR",
  "key12": "fWsPCDT7uR8xwTkz763QgcajC8pNG4tZKhTdL1jCH4m7ZGtKgcBT6FrPBzjKu8B9VJS5vFnbumFCk6MC3kS2Cvo",
  "key13": "51EmB5xoiTx65dn2R3GPyEtWo7pnZV9SHcgoVtKyjP4PjnfBRXU6spGT6uBKYJXks88bFv483b1MSQvLNsdFmuwP",
  "key14": "35SKwWtNw9J1N4xH66oKGYKfq6oDAQvkcP5M5uagVZAitmKnpk3bWL1Sb7tVj8q2pQNScQHRAuQYwoZDzVWJUbcT",
  "key15": "2PfL8RqPxYYhibiTu49BmGtsoXFJjkZp8cVJxTW5Rd8bo7dirTtR7i2DTy1fR9DxdWub4VEgjHVnEQzLJftmMejU",
  "key16": "rwRrrVUcEipCoCWFfQzx72xVFNTPD8Jbr5LM766PT9r776e1K9pXtnWzsb7NnFhXAR7ZkdD8FAmSkKWGrbDirbx",
  "key17": "bKWssmKqTY1tdJ2EBLTkcBYdGMo31sPTSbdewjm4mMXy8b7fuS47BgZfyLUDuBLykuamJtwRb3Dc8S48bsAuQj3",
  "key18": "4Nzx43yWCAx8e6wCaodXDyymosKQsBTPJyYG8jHAcNvSkA6JMQqdbZs4SNbam3B7JigLnegTf9dSvyyjbcjwfBQn",
  "key19": "FJt2S6Cw2UiizFzSGjF8Q5uCHgLY7iJhKvtTdZ3ou8t9oTZ4Drcq7XccgqqeVGwC9MgAFbycMW21hLborcqiMjb",
  "key20": "xn8eJevGEDEiM8E8dtwsHzpMBvkSavbNKq2UDwwaJ6eRfaD1hmSRuvfiZD1mAWDBw2Bm3Whha4TqP3aq696g5qy",
  "key21": "b9LRosncNFUcmKLiKqNtfMYoY7jHFErGHbjh689aHe4FMfcG5Gu8Wwtr6PJLQx9aZ8t7z7uvBJS6hoM5xEFMZUn",
  "key22": "49LDv2sj3yHPwCqwMvsaQzTSmyTciSyxMB4D5eoakxLZdynoEGtNhAVUwnkfqSE98q6jCxeBxvPf9rZE63dLBBLM",
  "key23": "5cBGaDUHMcFVFcfuvQr8iN3hPMrBmSL7UVqddrgNqzXSMmdDXniHbqHsDg4VCb6TDCCDDphKnLcucqWzRkTV4PsS",
  "key24": "4YS5rRv6WWuy7FYRp3WnQCLecCTLmRrxpFhVfte1v4Sb8Ycec1QxJCsffyHxbT99NocfBn9GyjoLhs3y2S24fied",
  "key25": "4zWPNDScQJpu1xTA6Cu7JpQYY7pqdAQZDZnxbVX1QE3yU59hYhGaPYnefhg5gyDmPzjG4WBeVArxM1nVKT2QjwAD",
  "key26": "24BkYftQ8wDL3iyr8H1Q5ezzn5TiwPq6NUYT48TjmDRJxSnajgMu4q67VwRVYdnurDDpqfPQQQRy3RsB5cKMphct"
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
