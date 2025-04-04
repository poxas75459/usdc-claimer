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
    "2BLidoPgLQ3R251kG8W2rwJPzgQK5c8QG7CT6Lj5pw1Zay3By2u7WJTTFfP61KHGkkNcQC2Sxo8eb2BvvteYbswn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mGttrPaoP4yzLkSxkXBgE8z1FG6Yw34oSFzprNHvBvCs8gkFqXqfmSTrgJQidJNXeoWYq1abPQ1Ymbraa9TPbCq",
  "key1": "5y3CQta4iKDkb2jXYwbSMTXHBQwhXEkAHBUeDe6BJcFtFyhAMS732oRWH94sd6HxvvcfZVTgZAAG4dM1kX2jErMn",
  "key2": "5ghHuKhwWHQKFTVJyT9gVygosyCnKSiyXFjxQgnPSdqCn2BEo83UFHsvMKvrSsLSDahLxYmsctxeA3B7Eawj93hv",
  "key3": "5vUjZt4bFKeCu19ACaGWDTuo848NaigXLX7bYivxTtPevUUE2eV6Fzn85kNDGxxMuGnEJ4wuvMDxfLabY6W6Yxq3",
  "key4": "2yzdH64ZYNcYGApsJFZE3M2w2B82eZAVFbP4M7GxtKMMxH551F6CYMK5Eyt6uHDUpGP7cpooegURnNrkhs2yH6rK",
  "key5": "5fX22TKwTJ3Hv5WqrL2jHEoCCkr5bRRcbrHiZHz3CTht6UWk2dfj7mWHyNLLET1ybNXWjDEQPqPDuYoVgDetxtta",
  "key6": "5xPBv5d2g4EGFtXC72scrHSkQvSNkA8Yuz6pZGGJZfd4bVNbZ2p2e1TnUtR4CB3HqisHoHMBzD1RajJ7pjNX8KuK",
  "key7": "3RxU6mTvKsmLo5YaLumFjjNwBFKWPCRTVHvjeYP31fW1wqKgCokP4tgpd6ZfyALtm5qCECrqYdQ9bc2YxDs76fAZ",
  "key8": "5WLLP75Vj7VXppUWhxKMHA8rnuePgJF2a8Uqg8xAGBmCiYt21GMfEoYTSP49sxBcvxgcFvqenwcS6aGwThfkTY44",
  "key9": "4UA53yZhbeeHhjkqkmHjukX3QTCT8BvC6XeQTb8vZiyzMav1cMgMVBTFhyShq4HBgeqaeWYFhf1MDPApLETGTRGw",
  "key10": "3ie98D6ZCRqCkc7QYywoRpAEnCY1YLiPyR7pMwRCP6y3YpXMDuuzGbHe7Xrg2fp22sjFfrfAw4KEjtqxhduWLKVN",
  "key11": "5kDw7vsFwnGzJB8eMYRFRQrsjh2rae4XXCfTuxFKVn4dxTV3q4xsmvmK9M1AtZZze2UR5mR2tibcrhm6FwfziKky",
  "key12": "42yrY7bt8UMa5qYmrnFCnqoHdNJhg5A4NXJ6PdTvz6GmjgmBNDQLWVbzg3USTguTSTBZ2B4XGGg2hEDBUUzurc1v",
  "key13": "3Esa6ktb9gP1oicsFxr5FfpuZGbgyvaVV43yAxW5H7cL7XVBFugFrGDJL5Qbc95ZuVZMxiZ4Y9wpWzaR9Js8zaNQ",
  "key14": "3zQL5rY9hmrosT2j9TvjkuqeKWdP5kyanEzA84DKgEgKmdwxQikwwy5DJ5oTk8qVQVwWck7htRBc61v51dU3AQHY",
  "key15": "38JmZK4NL8uLnBo8LTy7Bsg6vaiFxA5BgisY11Vs4rQYVyoaMFoSuPCAVRmDUPpk9KF5wNEGwVVuzxhMxY7LuAaB",
  "key16": "5joLd2EccPuJrp8KKY9ay7q5V2GZCRHvLJnYbSdJ8w6FvwwRtEfYyxZ3Ni1mrhg6gw6kksrKjycEabmvEsZzhqwX",
  "key17": "41KU9Pa18TMSnFMkLufmdNXnK1gVLu8oVD4ntVs4ZrgdsA3Wh1iDGrbQsicxUMwctNHmTbD51YAPuiysVRmsZHPK",
  "key18": "cta9xCJdYdTWjmYdvEtPmQFVP9bFcgJDWwVQrt7ybADUysiofgrESjQJMRgR7YReqoe1GNGWLzsu2kvvuMw5FRE",
  "key19": "4STSqV4QCMQd6mJ5VwdXti2QdQxbvBU5XwnTxK2Gyc5LnquzduGQ7fmPKeHBsdk3oB8acESPT3N2gVCph6xmzj49",
  "key20": "VBhPqzMtHwTKkNDgsd2MJbd9yfEgjrFvQ9f4Sf6VDvc7ve1ccxyEkcsib7nXhn6kW824bQaNaNVEtF5e6qb2Abk",
  "key21": "wYAA8ibBqTNDMHb2Mi8Y5cfMwVmM1dhNV7cPv25MMVaxJxfXGVCYWkSNqwowbYia5KUYLTs8V4Z7xHPr3dMzg7w",
  "key22": "35TxvPFVMLuMeZCg9j3a41q78irzYv8T6ybx9pzmXWmcwLeeHYpqrY27oDUhsNY6xtSzuSA7occujHVnbHEPwQPo",
  "key23": "54apr3UtnvCTZTjJk4NzPkrvQ4Dxyr17mPBbt8vkjzwYwWgR6hBX2zDxN9NVEUN3mhDP719FDg3Rf4umZRScAn6z",
  "key24": "58Q7JGDhBfE3RPhjPmfm7VaEWmxbwxsdAUUXkkVKhPUE1ZMb6FFVyN7khSBym66bp5pMXQoypGEW3tyDeq4gizZi",
  "key25": "341gGDmDyar8eThhpVGr3DSnDzSpUh55MNuwgSqjU9cikArYesxj7m4oKDzwpUPTdTq4mEmucBD6ipn9AL51oWEq",
  "key26": "4Za4TnLaCKvA7uiijuSFeR6ShaExHZ4c7AGj5oDorKqqnVYK5ReFGSE3z1NCu5rovjRf7ufVWjfn2KvDz5iAhoKZ",
  "key27": "2oM1ryZpE92w77o4uJaDPRV8chMvELyJmvvYPQrXChSH1K4fDnFMxrHwPHRg4ecbov5WfjaQE7XDR1gfiPqn7ess",
  "key28": "5y8SLXwALcbRLtRbojKmXvfJZwhzX2HD1QQgXNeo9tjbAAWK1E5nuXZMwR3JPGeipgoPgTUmRLRnN9PcnSTFcr9n",
  "key29": "5mJdnZ39QM2pwUdCVemXjTbNaXGYaqrvtxzmVM5Do7rwErJcyTBfE8dYjphQ1upEkVNhnfqUbPa96UNfYHRqjxxY",
  "key30": "btHExwoXEF2jeXsVoJsXunF8jLd4wrzqPYdTPRpE7423CBPWseo9pfN9zP98aUhomRjUaTcqJpkLDUyzPvpavGV",
  "key31": "2Fwb4Ly1bmMhtTbsWAiED82GyjXwvZMRhcnA12xMxQCGKJNb9w5m1JJomhgZwa2Fv3rA5VWzswnb7tZA9W5xpMn4",
  "key32": "2PfAFD1jy4vzYrPNXDxPDrgMTRx3afm2aLesKoJmGEvXkUM5xLY7i2LFPSKxvffXaMKZ4ctV5iq8KFqy6Z2S2j9D"
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
