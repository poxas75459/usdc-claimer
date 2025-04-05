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
    "pytNk581bRpUzXioGTp8x7u5YeqmxX287eHrrRgnEDdKiVAH2taHTHF6B2he2yzzgc2h7KgNCqDvwi8KAu68XKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hoaVxh4nWrPtA3ioyPmADARUw8D6NrEc2vrDjkN7gSWkvZzmUo9mojjYqnUS92DSEewsDD67CYC8oDnEPb15Hxa",
  "key1": "C6dmvuaBvK6i2nkhQeTH591jzkLjMEescyJdkeAZsCQF14U6YuHRKTTeo9oT4sPvoDgoCg3gRa4ncwsju1vorRd",
  "key2": "C6ToE6PDi7gLLgZsMpS3rcMKreiXRjViitoCY4ToVaubEFNYS72KoiC63tjF8GXDw2Aagr98yhWEnoNzBDdLhTm",
  "key3": "3kHBD6Sw6tc3eqUGESGBVuLBDJTASHU9LvLiWWEhMVfKVaaqbSzyKUKPdwS9GZtwyV8J4g6MYiJbmyXsKaxwqXo3",
  "key4": "22xZGt3Na9HT2G8DsRD29Vh7esA98vinCWfAqKnRezS3YNgYHm43oyUKRFZ3V36dKbBVxS7kF4ovvMsFkchbUiVt",
  "key5": "3anp2A9p9iS2wFYkqTG7Nrqj4gZb9tb4m73WbmRyjCNacKgUcnSGy2HUYxF2k38i2yC8d8Laq3bjeNyqVNUaT1fC",
  "key6": "3Fgn2sdu8mJ9hM9cMciJn8GjRodLZFqszWb29f5dY1qDyxFis3SdBPaVR6d6cjY5JC6kgZ9YyfNdzTC1nsCgf41u",
  "key7": "YibhPxdLsyeZVn4JhXmV8qEDNBQLUP2gycS3rFf2FaUTbjJ6eKD6wUW8CqFrRW8EggkDsQZusbhdUmNjzqftGb5",
  "key8": "5TkjdRb6Ec9h6DfrohYQfg4JtkakwQjjoz43jfnCsrifcfUid47A5rcMDSSXrTFDv1AJGfweAJAkhuuH4NDxLMKy",
  "key9": "4xsMqREzzcEiDDx7XR35TjfDzuG4359jLydDKKq12BGLSnqYs3c2ZN5ZG7idMUt64uTzCkQrLQBKnGpnEbDgjkBb",
  "key10": "4MncuL5b77qxFLYCcEVnWadzpzGkMcKL3EiW3gttfWLyHV9bYdn3hafHvAnESWKxwNxF2W9PkvSNXTYE9SNyfxMJ",
  "key11": "5EKDRqDqUv8J732bM3EZPPJF5VLtNZgw4D3v1SrCytY3eQsSbEDQAfTLw8FpWrE8ey823AdthdJTda1tAjLDddkY",
  "key12": "8Wkd2YNWjVCdiMJVED5YHw2iCSZ2bQLM6pfXmKURW8Uc6FkHbhudoW3gd195WgdwYtmtu8TpFBwuN7kkkS8cHd7",
  "key13": "49avymVwFNyvwR58w7Rhqkyuq6f5HhVaEsBMyiwSz211bQwBosKZ5DgSmmkn1n6HztbARnJ3peKqUquC9jNJRrGg",
  "key14": "2JMaq8TM2H6yEAXVWEuviKi261cmvVV5aYSQKGcKA4a34HkXJs4mpJ3L6YWhjSnztSauBH6X7FYY4u7vKgvu8mLv",
  "key15": "57dNkuWo9bWjM59MCSJr5PJ2iqZaYbUc2ZkLMGSvUjAfdCp165q3EkDafmcJZgvxPZbHspsKQAnTaQWrEWnAdUjk",
  "key16": "CNFCABAUGirGjJ8nPS4sZCJcbCRA1Qcw59j59mBN6s1HLnRahyU2Mw6SAKP5tUKZZiuscNVFfvQNFptNcCzWiNU",
  "key17": "4TFdV4K6cAYj3K13rUkbwPkJ8bxFk8uvcbRLVQGrJDWuXh3sFhASYWQ28XDTUBvHysM1P7fPCaJHVppjU7Nbpefp",
  "key18": "5JDRiAgwqbsujfCxMdianGtnuPpBGx8DZKFHLwzNfXrTZEgNUz71KY5NjXSKDPkcLvPmBqM5vAC1RJC72cJhXA5C",
  "key19": "52Bta2dPJNFjgt2TQWoTgGMJUrRerCaUbwMN1vvWASogP4DD2EuiCTwwsv42k2cwHJdQN5MdEBmNm2EYbcF1BHzy",
  "key20": "2Wx91KyF3sVTEKt2HydWmAC3XqEFnVxDWuvHMZY6Ks3WBGBMTJrKAp1P8VSuwB415f2k9RhJdeghRLkzP8z5NWnX",
  "key21": "JDHbuUBf7RsmDpcxEW15S9QpSPFjRnynYrRLee3s7VzuJywdgiCCAmRMWvdJ4fJYqdpKFXrxZ567Qx6Gb2Shimb",
  "key22": "AVgQPjDqEZMBhGT77b3WDvXHfZ7QZBgyKESCbq1SSF3H8Yte5uaA8Ain3kYApBpirLHpEN4s7YFGEDgY2dHv3pK",
  "key23": "tE2oNcySbRwe5sS3NjDRBAsLxLsZAQLEoLswhsHTERvEprzT5joUbgd7ShjAJrfqut2jFCQVzd29FrCuxFNNTqN",
  "key24": "4MjxDxiLv9EtxTKDuqjcb1Eug1T8TZBHLTkXFdpfyeTut4toozhQuTA92WucrcrAEjdNKc5rJR7ZtQStaCVxb5Ea",
  "key25": "5Qkq8uQQHE6bw7cPRKks6vmvtNCxf8C2jDpr4vsL3MsYoPMswCLZcSYttF56jAASjAhZZWSGXq5yrfxKiHkt1DyC",
  "key26": "sBGBLEHFVHCtVzJfCVZv5UrbLtERsvg432nC4Z1saGXQ7Dk86FG8TBLrDGwZGoUsYF3LLdCAMqACEN6rZRSHBmN",
  "key27": "12ji1jNfb5bi8bWC2tQyuWwtCvRcYbrKiuLbXBEbtygCwgpvppX7SzSEaL5i86rpikyRiwzkxTXsRgc9EuXMnwL",
  "key28": "296AFWHLZ9whv1pJs4Bi172qBHeh9s7LMe9vAEzWokLSXpqSuLpfNqu8167AX84v6RvtPdHMbGW6p65Q77WLUE2P",
  "key29": "4DRKGLeF3E4BGta2bhKWcs6wzNMjBEu6fytwCYvDZcA24cdekaNHK6e66NSCArPAFmfDPHHK4xAc8Y1YBgALXgd2"
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
