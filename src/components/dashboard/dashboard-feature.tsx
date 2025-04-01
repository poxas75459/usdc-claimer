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
    "5pTJAAvz4UDjF8734QehhV9gqTTc7M4699LXWPCGNEnXJA3UypYm8kqeiJbftmU6fZN5VCkcKEo5GnjNA1uH2TYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bpA8NKUTn2U2DXSec28v8hM48n1Y9Hb4kUSyvTeDNbTaF99qHtSToULgW555pE1LCxpEPzZpsXmTH8u3uNLfyrJ",
  "key1": "W8UWpZagS9umxGgtiTBAgtyvZfsQU95uJ8NkH3AskBN6VMTFWZffgwEHyndz1u8xoYtAo3t3QiwJhS2fDd2bGb1",
  "key2": "2AhZF135qx6Y6CcXHoa3QBDFGPpSLmP5J6iNkP3TXUFpagxGpLnEQbSQ8GxWpBDYWxcAX9oWmxFXdtLQTxAzgpLd",
  "key3": "5xiuCiKweRdryAfQfD3PjaGVPHVbHUFdEdwy5LuBETCSqxoMqeCbqpvdoiXxTm6g68S1bShxU8FJg3KFvhUYhH8g",
  "key4": "5tHs7TxRhyEvoNjchTaeNpRHFZ2EK3xr3GwbUoNcPyN7TzEqHoHeQ3WNjAKguBFUkVoo1ckPz4GciHxjWjGBak8g",
  "key5": "3ua7PU3uSyRuHwZBfD66FwYx9AUBfA7meniXqx3z2RC9yLk45xT4a2vCnq4ghJYCZpX12XCZtkUvAYXv8ycBPtuK",
  "key6": "3MbWwgYQAjqA9rx46DH5bujLHQWaanRKohSm9CpER9oHSa1ZKd65GYC2KdH9hGzjwY71TAqpME5c2RomPeCzGyqp",
  "key7": "isFNzZ2DDArauCHuho6aKShE8bpKwHGAdH1gn4HfXXuYLn68Ma5Uuq3nF3YLv4QZ8mXrsFfxRg1rin4kyB46ShN",
  "key8": "4xeoxKGevaUDJuTmTNGmL3VDnSEqZh6CXw4vwzq6Fyrr1tnNXtfRKAdyZMGBNYGmdjdvfHMJEdkE1QzYEtQTEch7",
  "key9": "J8UzzEKYj9SHKND9YVUqdWP8BR4a2HseYL9pSvogfPSWupY8kK7kN9RSB7Rgx5xVunxnBJJPcS5mjKrBxn6RwSH",
  "key10": "4dtFCYdKrngGC311CTRSqchKwFxhavsrdrxQMxyE2XX8TJ8vSPo8A5TTKLQTGNsmwhCr7V2aHCoxyHqsVq3SpD5k",
  "key11": "VP2q3Sb7T6DMbKYn2sfZkmQev5CV699nK3Z1XvyQWdw6AobUNEewVNfMLZKitpiyhMwiYMcUEQT1YWyc85Zg8n1",
  "key12": "31SGA7yPSww3WoZKPWPMzsAqHmFoheKdJ93jE9aaf86nm4XyEgVWD4PSJCSdmrN5TJcxvMr712RzPteaJZNVJCmj",
  "key13": "2HH61X4Gxrib7Sw6AaA2VQi7eGztE7jp4nk2kGxnDmWqTS7LLNVe4ZK5juGQRNFscDnd2ZiSXVduL3BpF5WzR2fZ",
  "key14": "5wW2yB5epMwBcZZQmAwWWva451LBX8azko9cePvFLtsRwK5ziHzc2BmFhYgtsVJj4WovE2NhUy1deHezunnAvtPs",
  "key15": "34PnxoCjy5QAWTytjceLxexkkRz3yvfndET1tokHaNiQPPeYVFxdahGq7WAX7Ve8UXyRMYu4KkBCE6mLEmBPeefp",
  "key16": "xwsuF3qSvZeSWxinRRTaNjyUAefN761JmJh81ooFmFNaMBRkmjaxGhULMKFDxYtgeJiWiEMhDpKFotvorjXxVx6",
  "key17": "3Q2V6QLUvBXyLxBvau6i8hnCqXxWJvcyJEVUxSft464rDq8VRgyT8mQEjp4GkDTCFAqg3XMETo8qB7ebYxVYAmuJ",
  "key18": "2Wuf9bwE2rmDmwGBNmvHH1Le5USSoua6GB9oSsQru36J9ksyqHdkzEwdHbsWn1rHQFLrsfLE3QQEUnYjNuvEJVtT",
  "key19": "3WGKUQRVqb7cd1JH6frwFJzyAKLdtDvNyWYWkZ8vXTEsAFBMRDuv5BMdzRp3N1U3mrygq9j5Qi6upnvAzqWPDZWm",
  "key20": "2w5kBEoHyKT8PfY1er63y1SwHtuDH4Em96NNPqLYdftf9xzPWQKNV7dGM2boBhs9fqMEUmEgHLcFAEGUMxSxLRET",
  "key21": "5ePtEqFg2wa6jHf1dWsXr6uSg4KceyMsgwKS6mnM2Jzr2avwh1MbwC41QCHDHCnAWQx4tAoZ5hDFwhhUkPWkUABw",
  "key22": "35NKcaCwSpCMtVhLnyUKvR4Pm7eEXyKaP8Y4hPTvHL2TqN4pWYTKXGSCCmhE8NdbZnAkA9A2MynvWf7eDVje6VaY",
  "key23": "45LowcbdtLFN5NYCHBsYJ6ZdtpdVS2eazGEjq9p8Z1m7ndZKDQk3x92rm36F8Vyb8RdwPQT2KpTW8Rioj9HFdsSp",
  "key24": "4KKkmrETsnw8jk7xmzZ2jUBS6NHC37GZXpXPtZcLv63L7U428CQx1vZkfkzYK2mq49xWUaeD8vp1fixLctKdnm5Y",
  "key25": "3W9iRY4aQT6QNMqru9rwq6sqtrxFad1RcYpsydBBD7Aqzemhgd7cXjTfGMPHPeeDJRybJmjT2V31QpoEYQjoG2EK",
  "key26": "b3Q7zBjBds4PCAdyfjZDztG4vtVdubCTUnCy9FSq5pMK47tPNYybKE2z7wH2nwZb4oGKyV6DA6i6FnX77SJaNg8",
  "key27": "2SdbxtPxEdeHTRGoRDXKQuk8w19aDV8q7MqNVsBH7VxuT4K3GobdnZbqoXtDQnCBxWs7RRTXUo2Smefu7i8PEDQj",
  "key28": "4gVEW8Mu79jpkfeanB1BtZWie8TEd7XP1SNBsdqLpyX4jjsA4DcXtzEH7SppK7dghbfrPpscThZc1qxVgSyjbXZY",
  "key29": "3229HteraJdV8ZaynC6Bh6XwwVDvbz4bDyairy1Sjx4xFCLHUu4yK9hNQ9r1oA2E5zt3bZL9xJh9umxvuWSfcWZ",
  "key30": "3NY7seKPWK79p3dgEXmYCnSi1ua4jCThDmo7ve6BzNhr6ubH6NT2Ud5c8mSAxYdKodXbxqmvDxYEf1rMiBZDZjJZ",
  "key31": "TetK1PMNcuZfR1NP9KXkJg4Z35Kj1xxV8mPwZfi6hK1upfam47Fq6FWpMAmsPYFGZzYZ9DZTA5jzry6H6t84aVf",
  "key32": "nd2H6x8gvgZYpLZWVutq738eAetFKhgiAa1NNz3Qh9x8Zxv6i5WWawocfFGXuwcvHSKY4zLFbPgHdPQn2fnKzLn",
  "key33": "oJigLhCLkTttTaAuoEdfRLUvp7ekkRF9SwsRWp4FTR6USNjELMNos9s1jSM3V4qkiGcwAZhJ5jdvbLj18ZPsNnj"
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
