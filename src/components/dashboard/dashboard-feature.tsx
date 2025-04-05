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
    "KJHxgDcJNb6NqJF33uacDHzoV6sAfkrfw6TrNEt23aF39ayDYTV6f6BuSepUYa8GvcLt5qqiuFirpaUTidnsQCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qNw4izYtEfy6XrwZrY5rG3AzAy7BTe5MnZUCW7Ftx7vtk5N3mK3iB8DbuqPoGHjhuPqGLb8PPkbNMU9REp87EqJ",
  "key1": "3sPDB6fxSS11Lw6wpAsJAXCoeM3RaH8ZCqqgEZ7tz53AREDXamvj3knxiNqj8dEiw3LiU1m1UR58uSnyb5dutu94",
  "key2": "4HY5BcK3bRKwzCzTHC4kZnciAgf98awaX2YcoR8Ef7kEUwnPsuSGreVLhiYvMtfbQayXGei9ygrp4b6NTbHd7dKj",
  "key3": "3VfQJaayD2UTAYNZiYH4Nz4sCriC2LCrzNsH6bxixyHiWYJK8uf5SzxzCFJ6TqdtSZQLbfmTw5JfgV9Mp2GKFqd6",
  "key4": "hjJu7CECejCwDus8Q5JH9DaTcLAPGXXzkMsBzRsvRfHm1jBvTfuZEn3DGQgQUzi7fzKgbJCUy6fifAimEKGfjnr",
  "key5": "zHsSNzsqVuXXrx8V1mXcQTpG33uuhB3ywgxt1dzaLoVp6F4GTKzZofKhvGqLtr8GpAthTiFPx6ejMYwjjg5gAtq",
  "key6": "aUaKoZJrc7W8UjvswDt3hoYVAKHucqXLf5WYwDMjs2T1X3x2JUDQrMGyqa5xAfNia7k4TBJ7EZ2LC31HFqAwpPn",
  "key7": "4MuQcASwjzFhHFws5SEM12LsexurxuWexNRE4zuqaAY5kuNheTCmx9xcQpJKxRDvGXiyN1aRt2HdGixCWugXsW5V",
  "key8": "2stkySSSULuxum6SN5dkA147A6i7HAxY3hzytcnqWqDXghgFvsREJLJVhGGco7Wdns5bsrP22JrSKULiaqRJxnAC",
  "key9": "5XKDuZH7wpV4oZqT8XfTbWCVKjfdVDruURKS76sZ2zNxddLwwNH14nTmnkYcKvRSb53EY1oja4cRoaQbRpphQyVn",
  "key10": "3YHw8mf4TMFBRhLetdx5zcHS3QucyfQHAuu8Gh1UAi9PrhHWs3kb4Az2EN8cLkLSnzUET3Xqyd9PGKy4UW2EzaZF",
  "key11": "4Hhvda5J7XhVb6qnvmZJyRbm2VroysZV43Qx1HZTtBr7mmM4QxQdu3PQJSbDiYe7rY8qR3tyfuUjwWwkHy7FZraB",
  "key12": "67PjkYLQrgRDuoiWoSTSrkE7U2d9BHuLkJrTYGGVKH3k2ub4n4s9kHoqF5GG5yJMQDFPx6U7ziXvRuJ9A1cx8FZ6",
  "key13": "ZxYBtR7Nap3FadonR1XiNk8erxDSFmd5VbrCpftAnVftHiKgat4Gv8zBf1AB7gzLknz1E8HbQfbek9ub5iJpaL5",
  "key14": "4B6nPkP42pcMvnefvRY9y3Uvhy2PBGFfUeF4hG6jBRxF5RgfEd9hYoZLNB29oDmDYBVm5qmoCrR37kLGg1A5wh7P",
  "key15": "2kD1xsj7qPyLL3SxBHZNoGA65VWzFhDXwV9F1yWfihoDHPPd6pT3Z5kYYFGKtGEbW8gREbTZKbJJ1fqTzRckabTp",
  "key16": "5h6sruZgbp1ses7oDyRY71dy6qTqMgz9jk9dw8XTD3XFzXYGFikyCf2uJy1FfkQJbUK4Vz9uCo2PdeFqWc2V6MxZ",
  "key17": "3jDYFcYizYXEPLbJQf1e1X7NKBuPWMUP3SZjHpW3PMTrX8kGHMk7frV6WKpz9GthHeAf893L7PAHWtPRqiERpGmH",
  "key18": "5Zg7P1mNka4QTwQYwDfGo1LVJjLjgvWVFYWxCM7cARmkvpV2EV7PMEdj1ZvQDjcHs2yVALQbYyiFmyTpPyea2FXQ",
  "key19": "5KwKkwgYjnkKZcqqLvizyPkrWXm4RFVAWd6HvKKuxX3gZWwxC6HMPqxW2jjbNEsC3MLng8fSRunKHQtQ28k9WYok",
  "key20": "3r3atbBVhEZ3wgJfZnVKQUJTb1AFZEMmrCuiBqcYG1EqCwyfEstyBEwBuhdKsC4sXfLMiCpYVp3jsUB4mmpooovr",
  "key21": "DuFJ35zqgcNTVCU6mjy1nUuwicbDAyKdD4im17ZD8sZNJ5dz3fj5EZ7ng8ju5Rbxx5pGPgteRQ82DTr3GWomx8p",
  "key22": "3Y37yq9F5Mod4aVJQNg8jV9d2bqJR76dPqnw6ofNHvvtPp3oWzAn83NvX5hT6C1G9e8hkWs58iunXAhKVten7r5q",
  "key23": "3gw47RKxaKwoo6GLcTdiyMeSCjEe7qKs34ynxd421jk8wuSAdV842gBv5gDcXZbjG5qEJqaiwmdoSTk352oEEryc",
  "key24": "4Fvvnm48gPaS9SoHdF7ZzGFHdX3JbeqjTriMVKsyLdCEbod32BEpSeHTtMEJ9F2tYwgofqtDSR3bQVH1PZ8Ym8fG",
  "key25": "bjgwT1JCkNr3c1nrV1k78xzGBkqbpmhc5ocVnRVnJhyzf5AfsoEE5C3kr4GGLn2sa294f8wuTxowEfBev6fjhvg",
  "key26": "3TnbP4uX12gSWkFK82FdJbUoVM4oM7mfG2qy5adKWjW2EGuMxegVz4XXxnpunmSXdEx1kCChyHMT5zGTvSrKaLrL",
  "key27": "4LvxvpusTT1h6HkTv4VJCdjwn7X36Pz9gpKBkXkWQc25rT9214eoBcpncw4ZqUYDDbK6WRhZfqR2cKQwDUdxdsVj",
  "key28": "568bv3Jaa8cVdSxZdG7Ve7qypD6oKRghbv9mqVnmET6afsrAxwwb9iZPDHTELLqWXYX4yVwDsRxxDwSYSiK5d9R1",
  "key29": "3ZvjwSteZNJWmEH5fQ6roEnwKnVAPxJ8BRdaQvYCaE5cwgzSBqmM6AD8atxsP5wiJA5Z3K8C7PbF4aPkuTVNi5Jc",
  "key30": "3FFr8dvQSnS6Jf9yLFMaFXaXyuWJ41fZWxqVZ7oRpRycCBcissPdYPu7iq68hxXEQDuYBQ6u8LiyWE8aFa3uoPwe",
  "key31": "39Sw3qcbcjw1ppAHApYWwe9Jwg2xE9PajYkmWkr5bY5mP1LEEtkDFQts686W2HLtt5tXXRiUnygCbY2VBFCNHSGy",
  "key32": "5d2nuriDiUNTXDTLHxyPqHR8SyZYRsjof6QVJkkechLQH7uVvSLSggk5FiAs769fHtdJ7y9t9WMszbV2mwYFBX7J",
  "key33": "3k6Y5L72wbMj6JG3fmKtRKuRWLExqJm9VKEEsX2NwArNxtBYNwdtESeffFcjWQ728TQpxdqt5YDyV41nJ3eXg79h",
  "key34": "HkeupMkUD1o7ZB2xbt1QRyuHhwpdtWm6THv5PtxvrDc95e211TyygYPAuzQUMFotZVv8K6v8LMpVyJHdEaL318r",
  "key35": "4SAaaGdHVt5REeHShiRF9XGnRfNP944cwdTRuxNHXGUhRm57H6sjKuxf49WUfDxFueUXYYaUp4BzK4vQZMTdUgpo",
  "key36": "21oiabyz9VHZawHJ3sEed1HUdq32WbLDFFHH6pqErBxwQTqCkR8CZDgM3M35spnCew6QdGoUZPrVFANpBj8b6xbw",
  "key37": "4i4WPwCoXcpsMK1To1RexHcLzfaHBTJHQY4GDmQSqfKHW5Fhsaah4qYBxBYgAVxREFaZP8FoRLJQMPc3vLmStfTv",
  "key38": "4qS1bYufes2FnSFUHzsybouUYZsKyzKFwsKL4y8nAzLE9VWtyAJu5tAbigGRoAxn2vHSTTx6eVBj9tSpGZNLUdS",
  "key39": "rdAKynBTxnzWi5jEUvinm7juGYYdojqJ6wiwZLqUBDtpMTq9YB9NxPFXzR4WNjn8DpWUiTuKXzNfX3LPBToCsKC",
  "key40": "2xgA7FufGGabE8wjDvX6wjUFWNwT9AJHP6N9oWEshHKjqBBSX4YLqNUjwKGDcpJvwNTpX2vBJQisehsNrKAGJBAU",
  "key41": "2P2got5o5y9m3H7xV5eh4RDEwWVeFRZjmy6vsDBY2Vs43oAWf1XP19rKL8KgrqKXhZgyMj4AhZEov3vT1WZwV77U",
  "key42": "4itt2JANdUeGtM3awdy74Myg2LRUKJY3WJdehHbqCLcs2b7nXPnQeqF5oinCgsfJecFsJL1MZgE5tUq9GUPbUfju",
  "key43": "3TwXCsrmP4NRYq8a2qyMeK1FBNHaQ1NYY7gD36z9QgNdx54jLZ9d9XwUe7oUNpNJcKggJ4NnwiJqeUz3iJMBdSmj",
  "key44": "5h63nyvuQo5MQQtxNgbzeHoSJLv1UBuXfu1huqDK9FfP1DDaEJUcPHR1cAJZgvzXiBwxoDWe6RtuU1YZpPCSow5b",
  "key45": "Gy6NRvLVZCpDvG2TNT1AYTi2XrtdJcLsrXZH3NihUgUL2eB6WBJ4WtdgrQFqreWeR6HFKQtQoCWGPG8yahcaeVg"
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
