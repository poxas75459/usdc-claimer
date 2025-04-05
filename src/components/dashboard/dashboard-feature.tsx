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
    "3kK8anzD8rUFfYTuqX1opuGU4kCwi6fxnjnEMjdga2mMMT9aTSAQYHxL8mJjWrGnV6DeWuiHFVHQ4sG9f8ssPG41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XuK33TGRJvNisjh1YNiquGT42QwVNPqPmDdWtZjpXMaV5iBh5ZbixXkT49RESR2ZhFtaouzwuymg63MLtfwphDC",
  "key1": "5295ncRT5Vah6QhEq7BMeWQThV8SmGATYLu4qPALKPnYkth4S3X7hWPcjUawyHtaotDTndb8udTUpLemAemy7FQz",
  "key2": "5F2b37nBbSCpNvbANcDpLMEVDLPnUPxjLUAzgXCM6XKaPzHBA3176YG9itQgvppUZiqtrcPewVkazxT9EV9Ej9sh",
  "key3": "2FkYgxLpHqG9uRUiMhpS6ftZ2FeoUz5iCwmZJfjeUBHaX3EEwotXCfHC99N7rxNBPRW6m8uh5NjvAJeKzZWMPXsn",
  "key4": "U6zKUmzmHkeU4fXFEQrwxcaJ3K3fiwVnBNToAN8cjvZASnt96zuVarA5Wfy585xvcGquZgey9aivZpNmWyK5sAu",
  "key5": "4VdRhRxPUdo23j7So8yrnRDaHKkGbVQxs8THR5aHHa9BqcygZB7ystN7YYtCh1cXw5nuWyJYpnZB5uTEyBaRqbj6",
  "key6": "LWm3Ad8mJQkPP9C4govYf1EVGkjroE5s9BvBKRuWWnZxg5vbsUw5T1x3sv7MZJANvTVxJNiFJ9fXcWGQE4niBUj",
  "key7": "jtFxUmsqEsPGBLV1P2C3h12exNRLvYwu8HmnudcAs2Dr13Cw6jfERViH4YB67niKefu6ycy7BYUBd81zo56Vj9C",
  "key8": "VNSGRx8TxsjtZZyJm4qUmbQhJ7dFrKKq3CnB5jVCteF4o2CJMnuMgdbCnHP7KaHgYEAsYco5KKM8UKMXyzm8CT4",
  "key9": "5UBrsfVjbRR7ueQEK1NthQzBSZuUjHqFRJLxWWkhA22Mrj8EFm3VcBpSCSoLKGDeNsZPx2avLdNS8nPoHn1PKyke",
  "key10": "5eMQszTz7h7Cv7SmJMBWxx9TKqQa8jh6GBccbusFb5wNy9pmQS7aVWvwZww9YvTKLjU5UC9XsLxVrYs9ycMKd5Ug",
  "key11": "42RbMBJyqjZcWSpWAZTSFWbKPhfh2F2GPF9rhUSYhYP4cSb3rRz3KabfaDfTGuX7ZF1oRwNnvpAGFazCtNHMHNTA",
  "key12": "ivainLxafPXLypEMrxAVSiGXwVjCjJHYUYCXvmo6t1rFaRt5WHwrkCpsQp65dupdxpWiPJqKPMLMSMbR6pnmfGJ",
  "key13": "5yZqvthixRPtMMUki4dX2niU6D3eLoppMVt3dQBEKbHUZh7Bf2pd8SHo9JzRcyagUmeuV3NALTt8UGzr9iDjdUS3",
  "key14": "2BXXTMgymPBwePFxo7RryevnBbHWkTNw366XcGEWebZvgcysrNvo7wLxQcdtRncYMxnZnWTsgUrw1HNXpSTihCH7",
  "key15": "TSHvmUQtyKAuF1wDUxUgFB71nmmGiU4HLU8VhgoGKnBQU94YVxQDCDYZTMqA7rMMv2NyGFMF77iz3M1aU3r6dzx",
  "key16": "24PZG2vpa6qB7z2dgvxi1Fb7jjvkFqBzh5vzkVv6h5MWVbsGE61R2sMqs4bJ1h93HWYHPUPP2JgXhiFbgMFjZLvB",
  "key17": "2GgRSmjW5eEqS7JGcy6jzJWUB41DuwwYtN2jXuZCgTn2QNZjsSB2TJW1Vv5sRm3zktHQXfdPEL5F2D7DrqQoyKVD",
  "key18": "4JqBk8C1KVejpv4kqjyefRmotBxp14HmqRuXKCj2n8JwAkdBVTM2C3UmNun6z2BpymW4cdaDS2hkycRRrTP936Rd",
  "key19": "61QSjkyM6EZtSJec8jouRexEtYccKwoNspBZJRp9WAM46x22mLq1zECDpey2eaLEh2pnsth5i4RwcvSLNWreGjCn",
  "key20": "1RDJfvpLYv7vyWUSMYmU3ieHVqHmJUZjyshHeqhTgGhEQNYVweLQGo6behAjfe28x7uWwcMAMUiuLEkRDRRSKaG",
  "key21": "z414Uh1k9xP8QxnV5wuZT58GBo2vAoXUNTrJ3npSuSqCWw2DB8fqmfH8Yxfn98X3SZsVjbM2FsMzsZrWxT7Roui",
  "key22": "5yEfwcZJGcFtXFHMoHpJbYGRN4xtBpXhgwaPbBLXtZu6XYm22XCjbA5CtnREsfkJCywZDEiZhkzgcdQHsCSqHvyb",
  "key23": "3YsKpRDPDct6FEEhtYb34FNEuhUmEZ9BoT2xVKBjCz2XoWLN1WK25YLk4NgVAsfURiJ95RE973Vhpe52PwNbGJEV",
  "key24": "285TRE1NXHnTvfdNd6wiJpUbWcBro293BvYgBdaKi3pfMft1UpANGyqTNreRNqLVPjZBQXZPd6vYJaPxNmE5djBy",
  "key25": "4AiSojRP5sh3oGyEKTxkFtsLpaioUdxqZtzPpMMxhMAGQXmiHG5CQkr8ZC9VF2gdXQtGeagV5Tv5QdBGPTh7bCxg",
  "key26": "3Hic86zs3TXCzrgaD8hQFocR1Zs5VEDQhgD1MG7hGEyoEMzaBhZU2wYF5CbKT7SYMQo5Bu8d5h679so98pjB8ENd",
  "key27": "5aGzQgfjGpWfHXiTN7ZsrvpAqSgK3AHixmJBkp7M5MZA75YyMLhVD2JK2B4vYif9QsN3vUg32RBX2o8oh9vHEeih",
  "key28": "3tExrmSM576Tim6QQ59nCJFXA9u7KTV8tj1j8iHQy3w6DtcbHiqKDfSTJ6UnJkuqArn9FP9XVL4ZSy5n445b8wSA",
  "key29": "5xHzbAqtoqpDZbuR6wMJQqhVHb2hmhFopTdwfhRnqtWTf1mEPe7N2W6Yv3iD67vzX2PpxWmuXB9mMKYav6XBnYJa",
  "key30": "uEswpmvjgaFsiRNsP9UQreUNRqNcDLhyYM7F3v9ijymVyrUekXnCQuQCcUYWKkbpjYVGYCqtsh7M9DRWN5UZhV6",
  "key31": "3Lygtm2Gych27TokfptG1biVsGpkoE6Zjoo19uYK11G2uJzhRbsbHkCmbAPE7yhQ3zqWN4iriiw39CNXwq7BBvKg",
  "key32": "4qiX3QpXdimLXRxWnQ9MnQamc8juZLGEq5Z7JDCnGJzMzXqxGvXArZrWzFdq5wJjYK2dn3zytsvWy7EnTNE7p38q",
  "key33": "VyuhQsEfEyokqfxezhkUiMtGJSYzqDnmrG56D4TMinWYCaxd439ziefJqgDmd5T1wxJaj9FXfbETDEWTSvCfXrZ",
  "key34": "5pPzDHTp7sM7YpVs4Q836tmEdb4o8hgWxbNFaFntf9ugNeeZsDLLM34ix9ubdBdfjxn9TanZsRZTwtcq9WKgpFEb",
  "key35": "4LVEfQLMcJpK3U23mjKQ1Hvw6TcLRs67GFK4z2qiskELc4AbtX16savgavyxcDVTnk5QX3aaiBHTwSd42QeLon5",
  "key36": "Cc3bNQLmu9tbxqPbpGBuibDs5NhqSzL9bAzvSSsuT2Nx6E774bnno89Lj6NxmWFauGCSY32Y3nwvEigYfx8EWmr",
  "key37": "oPEoghk1mbWqKNuw8sdEtGqBH9EmKzMDP8XVMHkhv5fvqzU7GaE2nRqMfzYUreX5UhvNDRkoBhXcKMM4AvjfkMb"
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
