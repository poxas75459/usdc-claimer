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
    "3XBhP2xAWLWQyxGM9QXnMjdEgp4Uqi3t85BiRwZ7jE59DpjMJpTcpDcXK7cV3nWj2kAMW5bsPQPpPbPA3QwP5iEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SDyK4DtVbcUYatzFnu7ZQPC8JBC2R5MsoELtUHr3y7kHZjwq9LUw6a6sKrpw4paowqhVZdtve7noeJmKUjce1uE",
  "key1": "5F1X5d3F79KUPnuhY9hu227eEEQbA9JptQsrYCdFTCZBdvBDESK5mL5v5Y9XYnzcj9iVkHx6pcMwcTxjV15coKXW",
  "key2": "53W9abtDJVnD8HEitxcfqGEmj6yFpA6LTnHeYfXmGpnMFe9naUEY4qKAXHh8kiPedMfs1SEf6UZaXD8qhrZtKTAZ",
  "key3": "3Uyisfr62sZYxCUuu1EY2MFUQYEoMVy5tk9izW4smZkFvkcRoYccpMLRP7Vp7M2d8nF8tbzC8TvxBnTQsBfAZH8G",
  "key4": "4WAz83Xag5Wcp1YHur6Tj1SSWMEXHJDGuhhvp5tU7oCHXs8qqNQhzKsZ3XEag9s9hhg3fUvaAoNexsr9PpobUvkk",
  "key5": "51ZRwFafEGrtetPbgwCvEv93A6HJ9PwrPvpQd27aXoV8k3cmfE1XNqsELsb5Aef789fayLg9451c9xqomFYdujMb",
  "key6": "4FozaM13rPisU2hni881RvoyyFcV2D3RKJ2adGNRqxsYJ6hGAHme4tUvsUW3yhNS6vRDcfsXehTMYd4rEL5Asi7p",
  "key7": "2Tm8E4URZ8paLE7Mh6uYZLh7kxc5RzLjVaLZRhTDfpHivkv2biQPhwT6VURzvAwekYq5w8h6R7dZXB8VEVxG1VdT",
  "key8": "45z7vCJEcWhkX5FvZLwnyWKVuDWUbJjAEQ4f5CXbubwB7StZoDZunqC7mFtUaVDDytRLHAVbSbo4tTb5P6sbLtZL",
  "key9": "5MmF65xbPHTgJ8Z1RceNYLrAXikDH54Ai94rxLZAnGWtHyUug5hi3xtXsei5azjsi5HEbdN5Gmp3s17atscN81rV",
  "key10": "5aT1Lgi5KNHWi7u7VziCctuBBinLh8tZa6RbJ5vg6K9HnLtApCHdPHqdHsr3ZVeW7XzuMMCRjbSFv5Vbvi5cxgsT",
  "key11": "3mPht5CEZUAsHFFN6ffGGohJVdRCrJnaqCji9q9yFzaSG8YVsAk26BSUifd5iZdTZZydGZXtMTq57euJg8bKop4q",
  "key12": "h7XebyoN1pjWomuejRSnvYuqxEnYaZR1MQ964bYF2sSvo5M8LbmcYn1EfHr9pLvFamn41gsmo7cxmhryMF5gRkv",
  "key13": "4SsbnXwU5LD6frtqNhjLp5QFpsc79JsT2BVVQKehgaUf9ZeZmiJeBkD4pMuf12mEqHzfjWVcadFmTRvb4ZUUYKER",
  "key14": "41NgSAXTzkLL4VGvd8RmSFWCWB6RLRAUQxYSQfvNDY1jS8gu7vMQrgkAxBNEtJhHppvS7bbSHPZJfqUnA6bDkKP5",
  "key15": "xAGCNKayCL8WFn56Rzv4cv4CSg8LghBQ4XtB89LwxEKRUnyxofqcBeuTRtKuMpk6mNpUDGWnXX7eWFNGEx1yngE",
  "key16": "5dsEJxBLbvBXCzbBrqniPpkhLtLXfPmdD6qiJ5EVnjea3Xx7hdnVrMK1QGGx68T1tkiJrNKbNuRqrLYpKXpDBXtv",
  "key17": "hMXaZEpywR5hsLfzRAHGbsgjGeQQXK1XyQKTpWutnq55CPGYPE3iJgXKMjWT9i8HYT8Yj3RwE54UQCG2Se7ro1d",
  "key18": "4KpqC3ddFSKWhPV4iXUKnSNQfCkr8UX7kNpajTPJ9c38o1R9sA5nvdQqyxhiX6SgyD8x1bUMNvgNsxU3g75yHZYZ",
  "key19": "31yU8ier82wDx7YSwXdPf9henTZHq8uwvg8BWQeLMv982DJNBBHMiwbPuZhjepBEvtiQx7FjoG7Nz1fmQHtGa2XH",
  "key20": "2JVTZtQ9v6CHQkudVbAQntMo4tvsUVUNDJoVjQfXSbwPybHvG3FYBD85uX7Bkcjs61QDhi9cqr2dfUfKAGMuoWb7",
  "key21": "78DdLTkTMtwWLjVTuvnbn129bHXfGQnzHSY28gHAJYGvLDT2oA59d8FzRw51bEDtuD1Fs4TU85ySHJwAQyThqcd",
  "key22": "37JUMSSBAqvitF3mRhRdBpyVkaCErBKicsZCgzZ6Y5J8jtF88PqrxAFV94q4JXa3SSXFMQnMTwJeHCAh8drMfU5K",
  "key23": "RkFb49KSsroDho1oMTyqzZ24y597FwRPtiZ7x1Bsb3ah9sn7tBSc3YVumVCqmwecnxAtg7xbfGcUmBqMKDNEBG3",
  "key24": "4mcSn4NjxqeSZCdW8jyj68ymsPzFvr1FJSjyfix5MBsvFbjarjWCP6p7bq7XCdZyZwBHMGxvD8C787WgyBZrV5mA",
  "key25": "e5Bpk9hDUyvHNn7sRwAv77Jkrxp5PXSX9kTk8XeRpoP8YEPHxJF7bSTbfzJzmTGLJtv4Csmb9SmBWoxx1MPiXMB",
  "key26": "Z2QhuEmTpDVc1Pt8ALwTYLdcKxwf8Qco31NWHH54mgn8ZiUPqym5qn6iZu1k69DaDG1PtQdvpGYuDvEu65cVSNC",
  "key27": "3oQiT8dPerR5UCRXtZdTF8MpqX5jHQQtW5JVXJCHzw97oj13WE48wLyKD7fxvYsoGcZ45khkLkznyL8UVpiPpzLu",
  "key28": "3F8pxszwEop7MeMKAozJP97KvTXJJiSGwEkHhT1nvb8XPdbrQLtJf6Wcdk9GfgyGBBk7coyPGskye6hdaiWpJV65",
  "key29": "B8r2ZDWNzdcPNExzg8tc7Y87L7VDbaj7L5ztsNXuXhnhtppNqHTtid2Btr66oPnkUNgT5uhkiomkAnUcXQraEpd",
  "key30": "5ocARbin2eydgftHvjmRQNoKC9DUqxQ6KtmJWPJmYXXcofCN9yeZGHUsoCtdDeh5sULDYevaJWmUhMNcWWVXQg3q",
  "key31": "3N7ovkn8Kj289466Yzb43B94Yqz4c1ye9mqv6tQ8z5h6gR4hvAqtZbYcc7cYeTNfEosDmqzXSV4TTUs4dexLnG8X",
  "key32": "77VmZt4M5dxoJvG4KakrCtrx2Kfestb4dNEvC4YFvk7isQJYnG7brRFbvkj6V53CibGLBmYZMKa1oS1Jeva9xUz",
  "key33": "545b8veeX6Hsu6b2akfoTNtGJLdiUsC6B37g7tqmChWcacLYRy5iJXAhccTNZbvt3fhCpKkBFn1c4NGGB1eKfF8g",
  "key34": "4vjZPf2rzT8B4CD2pLXVvwW4HcbR53Tt8SG3Tx9roawgtRe2fLVaj1iHSwqDNiQfdMuj3m4K7NE3uT9yedvyMGPt",
  "key35": "3Ehqw1x7xgKhLKjD8rspRSMfLD33UCXyyAF1aYqsNTHPQABDMnV8L8vobauXxEFTTomhBY8TTkjt1rhzpJGsJQcr",
  "key36": "3XPYVZ1VP13ovDcCUayiVyPabYhARfQTNeKhL3xmzHCCCdbpm5FbFLgH9JmBpspQ1FsZvVv4RMRLvZiFH9p8prZh",
  "key37": "rSmJQDTfh6kueJPBbPft4nEz1eBjLJrkyzjqMeVkyQ8rA1PMsGQe6XpSMA7jTvDEqzNLShNFF3vopEq4M8jVaXb",
  "key38": "3ud5sBVXTt7marfAjCPyrMQ8nRATK9TNd9TZ2viPBvz74i8BmytpsNjREphsBMcUsGaBeHjNKJDYW33jZK3GAkck"
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
