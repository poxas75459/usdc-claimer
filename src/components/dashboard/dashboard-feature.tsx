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
    "2k6MkpLYc1i3gQAmWN2tXt1ptPGdykVUF1sk6fiXLdRsiA9rV8AYiTtK8mK31gLmCydX7pu5KZUyEsPZ9NNUHRdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZfPJTtQWosAKJgXd7fs8xxBP1fBdKAT2zjVywWXqigbAMZzGwNwELtPcqaPWPWn3GhtsnxnAesqiQacgjg2Vyk7",
  "key1": "213iWx63CN3mZxQQmUNkMHPDXfQk5HYG8XDirywpiKdE2izxeyWwDh7EvLsuFLQnSM87PyZZMEhG2G2hkhTYD2rG",
  "key2": "3hvKM712RUXoza26j6gpUMzhYan5nEeou6bmM7cLWNcpbNCYbZLvPKrAYwPzC25f5ds6d8EWJpvcW7Miy4BHdEdo",
  "key3": "2ztWxao1RDWGbqZ72xcsWEybdtKSsFxsRdDrKYEv7PWqxC6eVT1LoDgj2xAYmL9DWQEf9JZHxFx1tBkGKzz8JiN6",
  "key4": "2UYWpxQNraFoEuYWh6rkBhMRz6QXjbTwqutFtHrmXrUjxztShjxz81vd6meaejPumzKrr447Jgo3dXcsis9YMh7C",
  "key5": "54XZrVxCGvrUK6Y1Rg6UvnR3BXnnRALophgmrfsGkWqHFspHjzQN6U2TnevqFpvRed2g1hvy4XjEKv3w1MqapS79",
  "key6": "nxpv8TyQGm6ry9ZecehSTeuZVhFysTQsW6s4JCytpy7QuCkzV9UXBiqfPesbJfbXkqr5msgADSLprtWBz5419kD",
  "key7": "PFhoBmgovXTfjYH7WL5kND8eqr5yamyHkSyFzoSJ5V93uBCYNzMDJhVwtGUW9f5iJT5uATxNmbgBBwCyvjm4u7E",
  "key8": "4ouMrAmb7zd6VKTUzXf5VkCK9mSndEoYPStTKerCyv8DMReuEJZPtAgZFJ38o7R5kRj7Vq58bkV3Cos1BwhqBnrM",
  "key9": "2FSTHiXfrVjb6pH8gSW3UeFpzMiAUQb6ZkgEpdSNMK9WRNtFytFRJPGxTBfFEzrsF6CXn3HKeKR9vCJxziph57Y4",
  "key10": "5g2j1TWZEZoWr95dVD5r2B4dguZuQruhDcG8CeBsoep9Pb47zJYr7KX4FBb1E3BQDpZAvdRU5s2dBLAzFq7yn5Ks",
  "key11": "5caFGCgkmRopst4fAtoz7EMws1Boxn14REVv78JVp4Y5GSrcZg2MbZBRKdyB8decCsiKPGp4Ehop5414m3ZMki7i",
  "key12": "dySbaSQ6hBrRC6bmz9QWWunSaMaDj4jKuXLhzJYZMBnyWfyPF1NbN4psJXKaqpqk97X3RPTnnctBLLTjUsgmBE2",
  "key13": "3fM8FGnKafKAuTZ5pBCEi2VC1gXZ6YG82P3wqsUkqxNguiA2TmTUvwZ93agw3W1bHZV7bL5iPn4oSMQ2aNbzDf9w",
  "key14": "3kDvK5Ct36mSsj2AGQjoFZmNDezdEFnWNomZNr8W5UCd1ywqtFbQ6ZtP6cPcQN81qLBDJeSArnYQnNfddnT8wvF9",
  "key15": "5C7EP1jXSn2mzCvpY9ujvyEuL91WmkJfEMPUMYsAST1XaA7Kq8A4c7nXNGPSMGHvD7wh8Az4WDXERBNa7wfu5oWF",
  "key16": "fZb3iba4U8DLeRemtUW6NsVnbsSQtPSxKLUtZis6p79CncEKzQLUqeSFTsEkcdyW9oZHWnfAqcWbzSP7gSLUJ1t",
  "key17": "VET88kVomFTvATiYXPiMuaPhdTYAT6sX2okkKQYeTcLJipbpXDh4CXAeb2J75vp49CfFKNbKcXjdShxM2TW4CQs",
  "key18": "5N54rxcg2ytUTo5EPi9538PyJZjT75btk3CQwkA7iRYTFrUmn1B9oU5znvkGqu4g1kbQkuvXp7XZd3uteofmZGZN",
  "key19": "4BLm1EJbBvpKfia9LmCUrhykMiVMxuY7YcrRhxoCVnkriN8garfhGbzn4wj6QiXDbk6WgftfMzvgmEDtY1qiBouS",
  "key20": "2t3ai7YU7FuCsksHHTi2dfzH2aGL379Bt127LQGAy5ZSoEHxBByTaeVqURxpph6ph61vq15xxQTrUUGgpwU9p4A5",
  "key21": "tAtyFqeyZXDDYYWdSX49UKb5RkoeB5yRfD9XtKeGtD1ze2y4PvKrN8SJkfQqwuG4RMyYciM58apxWBZRqwSvnoy",
  "key22": "27Cre8a9Fb8uCMAkFTFDfW8eAQb9twF51ufd2GQsJKyYZS73PU88EUkdp6rQTXR1XWM7ewXX7okum6TnKwK1wUm4",
  "key23": "49p5dSsusMW7QAMMQMdZ6TYudR3pgwiTMeLJH6ZyegPKaGyDFtzUXYECS46odxWa5go2EAbgZASJnoTBWkMQYu5s",
  "key24": "2VCkQ24ofce4d4FKE5FBt1aRUeugiaRbaKbNwUYCiPwWBfYLZwmQLNfhQqhmtLnKJGWGfu2DKKBhA384osqzAuKH",
  "key25": "DysaSmPxknVb8DLYUCRMzVv3TDtXNVL3PfgVUvzoT7rkKD6TdUm6SpuiTFrJugtZGrcqDGEAk44NYkQWqbmmyDV"
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
