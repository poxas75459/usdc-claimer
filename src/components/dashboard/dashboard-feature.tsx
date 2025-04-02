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
    "63intgCCJpa5WJq2yKaFeDrWbEMv13dnKLSrxGGfypeg4cyTJkrHywcSiNLBHU8Cr7dDFxr2Q9qPGKvowve4qq9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mit7f4WKHNyTY9ZKxmfT1kxnKVtP7HDbFbcwLhAehRVxJNyCrAnKEA3mmB31sYJB1tGrmavG3qyyBddXRoA5chK",
  "key1": "ii4zzjZgV3465DMVuxc7dcdYMLsjpgFRQw1DkEwQCjWfbL3bfS58SSxtbkizQ1s2GuukNptHj6MRf23seMgk6bK",
  "key2": "5832eh259wRwLTC1Qxrr9Bvv5pY1m6iKc1hYXzhGUoDVVFFnuqxp6pVqu9Pc1ysKe1FuZ6Eu7ps4jSjXCRg9WZY8",
  "key3": "4xt6x9n2oxm7LnA3xgyxf1MGRdkYHBYeqdEED9sVJkZQXKakm278k5ydSChkxR29gwrYci1ZAsbaSe4jvcLB9pwK",
  "key4": "2s77gbWGnFhtEm6vAJcqShjA4pNE55KFWXbqiYVLWtbTouAYmRfFQr22Hj56GsJ1ZuRFwrur5e4DSnbtjrmhnU8o",
  "key5": "5UfzLtDjcdntnno6Bs3Zu7FdtDGv15Zq7XfWG6mHgndwaf7cPbGnTo3vEDf9u4uiv2fn47FoRaPCB6vifAQUi1Qd",
  "key6": "2DGJQfvXZ1VbM5svUZ3e4EmKQuwnG6RwavXXwmkA8KoTigErRSaaZH8PBACY32e98MNQXRKFDmA8bErqox7jnQ7E",
  "key7": "3wxYE8hxzBsDrUE1dScRQHhrFq9HWSGj3hzER7Mz6tRApbFPvjFHVTu2D2zLMydPHorVc8TgphkrWLvi7K6MpPFU",
  "key8": "5JEKwnXUqHWXXzypjRP9TfechYuP5LqqDfKj2tiuJFdBhKPuYfYzgpV8otzRrdfDd7VtaGzmifqzV1H4TQmzokz8",
  "key9": "4ZiwKTHCpVXfFhm9pvdXxeZmv89SdWfh25Jeo2fmFb6Qt7W9W3awy153pMbjKsUNDYQcCHJ3YhrgiWqe2qb7CzTb",
  "key10": "Gix9Ka3tqY4NGZaVggCPg3QZb7MW6GFshCdj2eLHNdnKnxQFCWjrffiNa7ggpuoBt7LEMDwoju96Bq4e3k9Z8HP",
  "key11": "5BDLB9YbKy3RfpJFptR83oodTgKWrijPmbNE1me7dCvdrD5C288x78thXLgrvGBr9U1JCzgioje4iP2v9oPqRz76",
  "key12": "4L3baPXg8CWYtG1ZHPDP4YbiR2UZ6btXfeogA32pJ7SCrjnyqLSu5gRzoJM5pztYzGCKP3FHRKRpZEBk78JFnzT6",
  "key13": "zzznWzwtEbXNpudtTu1KuPsKBUBFD7uQk5Wpg4zXHGMSwUhQ6jfk4pwLDbd5DgWjH4rDevY65AeEAihcYgJ9Ahs",
  "key14": "QnVWsWpC1CVLn5T8eJk29i4tb84fmnjb6pJ2KGBWrQ4tM5BUMhT7CmFBpdGvSp59ffGqXgaMBwHGPB7TvXjdzKg",
  "key15": "5Uv5Dk5NQtP58GWXCNUEY3ZyFhsnrW3AMR1s9LvYBbcGJXKGdPfewrtLaTY694noG8fSpytMUgZjKBRw7YDuE2R5",
  "key16": "42MC5NCE2pASTaq3w93YWWqpuvuhNeREcbFNqbu5uJCHBukT8uyfwmqV3Am5pXfa2xc4rysoSCESPuwzwUQpUA6Y",
  "key17": "2LRBQNK5Ew631psTuxaokV3azJYMmtaV2oF977UiueeATAMhpJSuG6ZudBbH4LihG7cNTdx937Mkxb33QKm4Quqq",
  "key18": "fxdUURcdEgBwtPfP1E8Q2Qjf4HLLio7hE3iX4F8JsgUdW41yEE1oWDbZ2wdCPqVSeHipXqf9qd9hhAewjCr4yAY",
  "key19": "fr6zdd6uSbebNSmm6CyhmECRhS2sDMN75Jzmm1wMvWraNGLcMJGwNNY6dxZi19DoDGKG45kZaxVMfjakFrkQCWk",
  "key20": "5hWrMJCdWrS4Y68LgywfB4Ci3pvMNVoQ1SgFSSiVt3XFmoXTS3d3PM9o7y5LsNWqvJy1XeMn6P2wzwLSAPL98s66",
  "key21": "3ehBzioWEo4veHLAZo4S5b5YKAttbydCUfzJjdUqHpn9iFWz2UTXUm82h2mJa7mqfc8hgvBn9YefEPY1ZfhhaKm4",
  "key22": "3DiNxrFEuwz7ox3zayxn8VtRnXAvq9Tcv2D7CbCsqhoKbVnc4U71D54QnxSqmpcvcj6o3KB87YkSNQ6mQKePvZnG",
  "key23": "zWtkof3Zi3kigqNaapFmthgY5dreFwMzqDbmjdY9mS5rxcHVyqngpNMpzSTdJZAPg8vo8REumibtPEmUD6QHAJx",
  "key24": "2xW9PH7hCDv5kpwxPLhJxP7Dkut328bM3RMnuVyEMkXHhx3MSw32mXGYTMfKTYvfgcrnwCySnATY9TUoq6xWoMsQ",
  "key25": "5od9DG1guVA7QM5gdw5ZUENfP6LqvdJAsRLV8DV6eyFhaooG78mo63xrNhom9aaFehiGNo3kwFRuC4QAC7majWDz",
  "key26": "2jTVPQhqwTnrTeUgvHjNd4Hv8B62r9veTsV8BDvxxNAKuYhKhkKUTTAgp1QAVb8WRN9UHwnPgjFW72rxbh6G7jC3",
  "key27": "2DVnQiZBLcqMvjGnqJWXwLK43HU2DVM7ggnJYP7sQWxrGLVz66sZ88keqkdZG3cdLQkbFyJWdxKepjr4R9s5bA4Z",
  "key28": "4cpLu5wcyP88VcoS2af2bfhU8Z18raHT5JdkdNPTJ5DHxbFL6YbRxPiFJ8JXQvyeg9wRtWwJx8LPdQChomRN7NFV",
  "key29": "4pvVfNqPi7mTdLhjmZZmJutLrFrv6M3uwGMXpHgnGPwzZLmoJKeGEMXWnfKrZmhHnYDVYEAwLxyU1PX9412LKHo3",
  "key30": "3kG6Nx6VHcApW48Bt1BEUaQMPd1sXi3A7DtZcvHpfiDhdYnZbuXG8igk8ZbY4K41FAapGHovrXEYC6aGRGUENDTE",
  "key31": "3PVZMevbRus6NXRwsWLvAHsLLGSVzaeT7pKunz8ces7DGpaxjdq4xmgaJmcto68fbzERNhto9hCUUxCSDiMWYKrW",
  "key32": "3XY1rSWbeGi8Tfa3cF84U31SECYXzD5B5v5Zp6LpKpvgfx895jCXzNKEKLJPHTbfL6JCWLESRk4sArCiRNWCHi7F",
  "key33": "5JB3cmmGq997WxMCumyjv3KNyBNEzab8M3e9oP4AdVCHJHyo1zRja5HtU3YYFSHqJffMWb1t1Dn1VMTQKB1ugpux",
  "key34": "4dyUEK2SJWqaFKddZbXvfc6wQKzDoAz8KD2wh8LsvEvuCraCdmFxqPFesg7UZDPV2Rgs9fBAbi8zPtkZp5PAKT2f",
  "key35": "3iTZ5cXEnWzh1YybitkuHVWtF7frpV5HgaFFaJiQktJWMoY6S5PkJSKgTR1gexUb2GiarXP94NqtekayNsr3whHc",
  "key36": "3rv79g7J1JPKAzXeLuyMTpv6zCWegUv6MhShsCc9A7EjNCZqHCkrTiWvKwCRXvw2sL7Poekc52FNHbsSTie5V7HA",
  "key37": "Lq1Jj8GmnVADHpZUmApsoQMZrDRhnDzNV5XDGXtL4es2EPex7YU8UFNRNt8MkXuTHXVz4JHFhLNpe62dqAxhzmn",
  "key38": "28vneVVTzWWThvBxPSEnyf7joEc8swM68B8ooTga9uFqgn2V9hqE3C6awqgJdiATtRoN5HRyMrmEXyckPhXVdfXb"
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
