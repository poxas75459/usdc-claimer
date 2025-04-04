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
    "ijcZW3HVj2JrKETdo7YnJTwV6C78NEdcon3UbyD1LqHr7e9afHabkbuKtPdgxt7oT8ViqKSEtFuk85Mi1KDfZou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NsJQ29wxrBtk1V4FZtu75uxsUMbGpKNb3Mn1jpTys2j5tVAF7Y2CKGiAPt6MTrZXtutgDZYn3RbQRBSWvz6t8Z1",
  "key1": "uEB5ecfmMdAsA16spPzUL1T3Wvm3eWVhdKCP46jjFqpf9NzZN66hHdcvoa2yVLtGmvQ2PpaNeKZGKA43i7KGUS8",
  "key2": "GAJx6s5vbJpvzrCFLKbnxqdxwRMFHbbyRajxnn4ySjcmC2H46wYhp4sTxt61KvS17fSjvx7SYZCj99XHnZR9VMz",
  "key3": "3SMqJsSCpZ5JPT4pGgw3dujuVP1fZDxGFJhsnVCjQ2UfGuNuxBRTu568caJWXW8SwBDpzbLzu3edfgqV1Moce5CR",
  "key4": "4H4Wi1ZhiDekoBoNUBgSZH1hSZDH2XBvGGo1uot3kEJuEn4DguvRJCoeybcAmQf2Q2DkGYU16DG92P3MC935MHKc",
  "key5": "4a1V6zXMj7mKVEmBdQHE23dTi1tovEHrsXGskWaYYP5gYse1kT6ETQhFj4nuh7VprgVx15if8xLYdtrim4vPfBJ9",
  "key6": "ZDGgJHE9uE6rPZ8Jjss2XaxkZd3vJhzhbV3Z2MDnzwhKQsmQ8ReDBmgMXtnXFR3LCCTMy1CgVCA5BGragYUYoDT",
  "key7": "2h8C6Zt94KaMpXH6Ne7szmgTqrW75RA5Q5S4YQtbbDf72RcLUB1mY5SZavmJCm6GotFEHpv3NhdT6Z2uA1HC2JuJ",
  "key8": "2nje7KsTGqgZduRg8UKMxXdwjKtXumWJeqUSjbW3xLRHEeaMrQPFSH9mAeLXYDSn9PkZ8iJ6umtCtupPWDJ3bGdG",
  "key9": "21JBT7JZ462CbCHTq7cp8pLzyQgGJLBJ87PTdMfBBHNyqrDkqg1tWKMso4YCWNTGsMJzTuLKKT8boRP6FpvV9y7q",
  "key10": "pBtNq4zytt6FHPmoRE6u5MbD2aeHc4gEWbc8KNt2SAPLAbkdGRdp242VvqHxkCYdrUsYniKdaW59CPu3QJVFUGG",
  "key11": "5k9pqEvD33Edbnu7s6EaQxNfF16zN9jqWGTpxYvCBAJzzzb5Bwgi1AUcPd5k49vCqv4Zyn3icVSgn6fqcni7Gmgf",
  "key12": "3AJQGTvMovXNC5Rc1v2MGH3UR1WPxjU2KeuDqQvmhQaMQC1VEUMpHS6PPfQM3puN1AK2Y9UzNBb6C3cM1ykPyoBu",
  "key13": "f68kxBDS2pdYPfufhWgFDcPhEmtSLoaEVbpwBtv8VPhfehP1sk3EucfuSJcecEUw4FiouyeXRLQVC27NbwyxYgH",
  "key14": "5mdRkDb6HChxQupLHxrtWztF9daa3ynMFv9mdACBjhG7Fe4R5WLDfGKA8jN6kBipoqgq4XmJ68Dyv5njZF7oDWTp",
  "key15": "3CmtQTtR4nLLuhWjjkFjrNTsetcLVHMSxPSk2gpd1NPhQaYkAFEVmQNRAG3ZfhzTCpQDfkQ5Ks2pszgaLLbXbD7w",
  "key16": "5219jf1ohiTCedxnKokXMaSFrYoEX88tAnTuNjX8EW4L7g2YGYUTmXeKp84YYLTdLhvAYnB3F7uxvEyypCb31y9A",
  "key17": "5bzu62CFV9ajhTe4EGVZUP73sphSDgAERem4JNHvNL3SkKqx46Zw7WVYJM1ymP8fjogJisg6dBDuZkm9NP3y8TVp",
  "key18": "2wUJc3M8YGhqWwXW6vs6RyLE1kTndwRnCR2rXCSzVHfqKDn3QxfQ4xuEYTXM3hNgKfxQ84wx7ZzE9SCvqN6uyUfA",
  "key19": "39NzUaLTixmyuC7RUfUhQJyyktCX9QiywZGHGCLsHAzmX3reduZwS2Gqr4SgCRiUceVs95PJErJkWVMuXPcXFw3t",
  "key20": "KuEushgjsVHMbZu2W29AxPF51ATDq8QTo1ijzcjZfLa8X1F9Mx3PhyZMj9txMBacmcGZd6StLxFQb1x58FgYWMi",
  "key21": "5TN92uu2SUHPvcqSbu4sq6VhccYd1vQ9Erqmk57DCsT6ZEyj6hDPToiwCZmRgKJgLRuKwz83DzXXDezQNZmzBsS2",
  "key22": "2jZUtjhi4D2sHwia13B9NiKz8Z4wPANe7CNbYd2jhiu4HcNL8L7QrDivNVd7DpxuMQtZhK2YewkD4P5WQW3PGi5t",
  "key23": "67ribQ6Y9YuyiWbfNAZrJfGy1ypLa7XZGUwvbzPv3kGJ7LrYEGoKUTpR7hbrUPdQtBmjLa7hfuWruZAu7gn31X3j",
  "key24": "5ZPZGZkx3rfXxqim76PtUiacV5Ku7uotM2mBoPR6LQ87peApwsQuFZDkCE3uht7C6hZrzMcW1JDdiM3FW1H1d9W3",
  "key25": "3654aLWPCs6UbcfchwHDFv8ZZwd9HVHhbWRMShZDmeRB8RQ5yctjgLFkqkwm7Q159oPxAzm59NmSKgZwfU3VyxEC",
  "key26": "3Lstwzu1k9UTMRLifz4CWDw71FFX4QjXE1r1jsAPsNHCQEiJfBWYJN5cWyX3XCZphgtsv3LwXSWDeARVJXiw8w1o",
  "key27": "4byL58BGGyrESCnFV9f7miGaT42YTjXoxugnwsVUBcxkQZppkRyxvPGiQMNvFcyb3EfmkaRkTGF5yGh8EhGDAziS",
  "key28": "3hpk5CtHkm6vzzERjcJCvjvMWTD3iKgd3YJz1HscPij8dJWpuDrALFyzHEVkci6d6qZ12V5z9GHTxnutzvf47pcy",
  "key29": "4KLUo5JyhmkBCMzMtMFCQKHXWT6gHGbJJgRdmPhjwrbk7MCQJb9hMrGK7zX5ko3ZyLWnDgZM5v4F4GULxuRXksti",
  "key30": "4EE5F4ESJ3c3cotFdQi1iW8aMi5YuUuXwDWLwScKh6yK9dnXwaexxiS6zYsADw2SVTUPgVrwv1pEXCYKMoQEx5Mv",
  "key31": "L6FW14wCaWXS7ZhAcwo6kYNYcDuXUMMCTCNPhUaWRbiET5RWcs4umZnHdJAbmdBA2vuY4uGv7RGxQdpDCCjvB61",
  "key32": "36sFo67KsxvT6K8iNU2pAyor4j9ePS292szstg555r6piDqsM1xKeR3FFET33zbmxA8FMSZoRVRC8sQNvVtMaxse",
  "key33": "3m8gw33pYuacLAV4Sqw8TbAdYvgvgpvaZzencHD5UjGvof7eX24a7uhNYDpMoiAcyk2vLpPkrrgxp11Ew6U3fsXt",
  "key34": "472VPzMb56QihwGWYUHeN5GciLHSje8b4zbiUzqSCYoyAWWcPGsGTrK5XwsCauH4DaVCkrcLSUqsUaYmQ8QLVMXd",
  "key35": "3yTYzY7oszvfkKm7fhb7xsrixy9tDGLTkvWCbvV498BUvavoHDqV6L5kbWs7yYpP9BByiJoXgJs4EL47P6ruWthG",
  "key36": "2pknm6165E7JMKnLebKMvU5s7xeUDgJb2onH5AtyBgmAzSZwZhkUGsjxugUmsru8FhFq2YPyn5HXqG9irFugE4ZZ",
  "key37": "3mgk4hHREKQjQowZD9BzkeSD8YY4E9rE65TF2D2pFpq9APSYscGq176GZzub37Q864AqnAbbZk1cbXMwMdJK1o3b",
  "key38": "5FxSXB9tyesfB9LqFQ6USfyKEYASFZy5p7xfkqEEpegzgFi1qLt9uWXMeY86PUvUTw8CwFzwLhfbBmJtCY4rbDB6"
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
