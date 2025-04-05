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
    "5ECLKGHWpqmKCFGjjv1mstvsGNoQAvCMwWwGz6jQJdmpQ7wGt4qirmkQhMZ6oTrK2XTd57zXF9MGu5sCaKEfn3iN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CThmR52G8JVq4CY7LCDBkkFVhqWwCV9sdfLHwFmyrbNwjPueUxieDedwP73WkLChyeyZcBappz81JQSpDZyVqhm",
  "key1": "3L8v5RerkNd4CtFJ6SWgFiZbVbD3WpzHVzjUETXPsDeGVzeHTPfHZCGWxGRGxzsYVa8SAVvcj4mfkefWDHc2p5Df",
  "key2": "AsHtVnbDcgM1rPJDMN5wuPZtG2wae793SMxot4FEDjv9P4HwBQhpute5LACZWkhrH6SwgQsgqV1cKKzsCjXNRWz",
  "key3": "SvRNgudj35m4XKSKbNRpNWUbG5SJ14jj8Fn8wUEhY8YKsRVvNn2jnBTL285crY2BVuhHe2PTqSLzGavUu88iUwZ",
  "key4": "2boTsrxNsPbBrnCb6A9D1tp9ss1hxTMDaakLZz3mKXwukcDn7DytzkaMXJEgwUMwdQKT4YYpmcPTfQqDf9RVNYTE",
  "key5": "2kDGFMWtiNxX2YC9fwFaqREFKsg2tvpTc5hvsZeSsUN3twMFemaCBWHZkcnG522LRj1fi2cixCZzjxzPheqyqGNY",
  "key6": "F4Jj4s5iCN5qDgNtmkTwVsKnZXXxhmRERmE2BEW3eXoLGEw8gdvUF8HhsfGfXhmu2FyP8DkL2WRfV7Ffa4anV7A",
  "key7": "3S2BnaM2dEdBn8raMkmDPmBMrUESdpbV1zGtPNHvsAW8jgwL6vaCatfujThdXQSYewyFLTcQzBfVgWiVPnUWJRDe",
  "key8": "H6iyCJruTZqpBzHMjHzJ3drzmtxkDJqCGwNmCtfdzG5qaY3ahfhKA1aQQtLhoHkCxyBhY9axasK2Y5HMHxMYrWJ",
  "key9": "4DqUowcU6v6gJdkBHkwQSUdHQKdxC2Bq9CvhsEmjaDh2FP6Gyh7sjLH7MiMcXLS1PqZxzBt416aU9345ZD76A8s5",
  "key10": "6PfNTeCBzLeUCdGi7USHYM7oPQE8d8V74Ad14y86zSSwKQ9Cr9Jyaoxq2RikR2iCXchYy7mJatbLbEzts1oN9gd",
  "key11": "3xsgBbA22HaDiYYrbNmEVgxUuJaLYHov5s6Z7BtsuuqCPbDCxCcuakVmEFhUACXeVsipb4MARdWZDwuMKzUeqziz",
  "key12": "2M6NDdWLiyqJsKZaRf3H7KkfQZkh9zBQ1jx3fjvLbFp8smQJ9v2NGevtLjoCSV8svz6pPwV2TeTmvdtHKN2CPbKw",
  "key13": "3t1xhmWL8zP5uBZHL7xBt5xHTgE7DdodA7itCEiPQKPh6bs2fRN7nKP4NYa11hifSBVaC5bBrJcwbxVWtjADNQfh",
  "key14": "243XPL4hZ2KerMCLhBVYjvxWitN1Li1WvYp6NUJzqfP1nECmfkJaAyhvKzz53T8ada3wieKH4LmgtRfTX3ybv2Ha",
  "key15": "3MPo6P84rGAv5BmqrWgWo8dNZ1MZCcLJ5HGETVVhksUUB9ECmLXCbwSAKGHmnJx8kwr9k7G6nZG6mHT5Bemi4auF",
  "key16": "koBrmyRZcY6BX6HUPUQqYo2p2mGZy6c2bU6NmL6T4RQrHjqnUGy4YDYBNV8wdCCqp9rDt2CVx5MmJ2mdUAYsNWa",
  "key17": "TWrLF24JvVWVoPtitWsLDmbaaWjFCpa2mcSAzP8vVRzBqKHecdUqsdSXkJTriCNc2yefo4SPaBm79yo6Kfa3Ke7",
  "key18": "37sSz2HgWbAabaos6VaDKEuSgwPcBA6e9GXZvHn9e8MF8G4C5LdVhKBSPFyiyznRSKZtoA9ayybs3DJxF4iepVSa",
  "key19": "4xhbUuTCoxgx9jjUXRasHvfbcMj6LkKEGQMEye2t6LzzkQcAgqRquWR6bED8hdfdNFYRWcbGzSRH3d7c8FighuS4",
  "key20": "4rQxXKnUU2MLwNiryqLsYzZa1mWunmCfSaD4jJdhH7pW9XC8a3oU3GDsnyAAz7byn9Q29vF8y58TZc8YEmD2hE8k",
  "key21": "4ZKL5Q5CRkkupjs1bQwaUahBh5eN8ACRW2NVyxqKnAEVTmNK5hX5SUrKmVqnifNJ7HRwMEo448ho8saYb69tu35T",
  "key22": "3XcL86vC7BePoyieUq5Gz26FXFsj3PsBAvA5FHhA5WtuEyV6HTGhRNoCrEqHCujYApfWFqQmVdQY6QQsjBXJtMr6",
  "key23": "3ka6fTqiHakKhVsrSzMgn3d8esTXSp7VBCGeLdpqKxngdSWC4aRkjcWSr6r6kvFzVft4Ue53MrCQLjCi5Ngfs4jH",
  "key24": "4x9oNwUFeXmGGbpCYah23RC8TRbxn8SnEzUh3EXh22g7SveARQ9YRJwgYyrRhkk1PhW9nUpiFohPB2MQQ7LWfLMK",
  "key25": "g6cpNULFMhKZsiNAhqxHkqyRA41bAGhQGD9YnmLdEWD5pR8UvoedYhGB8ou4jbBtVMvwddsDy6xjYphjnhaekFt",
  "key26": "65Fm3zafi2DM499NTCqCyRW6XUtiutJ7vwcbvePLkYY6wYiarPVCu2cM9H8kHoa4LqFqaheqLrfB3yMc4uauzFYm",
  "key27": "2kfUKRHmyCanLeeMmZJxi7aqvJvPdytin5Wb83PCVPGJS778WQdVYYnDUHNhPYrC2uDRKopi4RYukuJYdZcAR1x2",
  "key28": "2WwCva9fEst4nU3uhaEwoqTwG9FFvgyzqGkuVRBM9m2g6WcKi2qXnr91dv4kLQinXZuEAsHRWuo69ywiL5DXspXj",
  "key29": "4n31NYNhP97tLjTSTjPaSwYgxnPmdJ4iLu8xB7m32bGL96oag89oeU5b5rmVHQPTiETfRfn9LZJoe6NBoymtccN5",
  "key30": "K2L68UMJKQXqPn3Pv6RobrCfYyW7iTtfKMm8Y2Ji9nSnUJHmH9tqcusu5EL67kxmf497K3PueRzNx37afgY1jRi",
  "key31": "V8A3GtBcHkbE29uFSsMjjSGEYF53G6LpAWuZYU29Yx21HEnpA1v5fQzFPuipP6coto4hiPgnwDXpF3dThe68eHf",
  "key32": "3UxsBNjPEkYJ7pdYJCovsjCzbFAJ1JkhJ52tvKQr5rqGj25w6dzRNVH7t6ugtMQfmsE5DTnoV1XLaRWgm4s2DRDu",
  "key33": "oe35QPoeKVt6aZsMCBk7vN223n8auQ9UkvLW7b3X1XjvacE64usCrK6EtKctd2gaDKUNwvES4GDmCybYtaRuRLo",
  "key34": "CnS2j4KuamFTCags5WQn4cGDggdH3mF8oCaoQfsVisLz45t5K5E7w813FLBvr8ycLhtpe9naeapmqeAXiGCSZHs",
  "key35": "2gCNkVpatyPBret1vzGYHhydCmyUt8HuMNLZv9CU32GVXbG7NLJc2whPeBX5BEx1Anxmq3Ds7DQXbn67Xc2iEvd2",
  "key36": "5VZekrjzjSoRq28ctWB9iU82vPZu68o19Jcn5aQFTJ9ToDfMqCCKKkqU5QCm12wi277H6h4LbgmkL2xkt8Wvcj7T",
  "key37": "28xLey4hF9R53cmkdKQWdMkEr8QhEvnhQcHNZoBa8aJyg7MdGxNeXtTAWUQqSjPcs15ckXrcA1X7STvDVQnEKJTN",
  "key38": "2hBsc5GQzyMEBw4S3bY9aRydnPMfbiuT3xxG5GKhGs7jc9mNx3y3f9xCLFLCEZBt3gxsdYbEkfMAwcZdChGirEUk",
  "key39": "FiC37HD8PDueDH9nNwDAhqKRt73CR1snZCEUE6uQDuZa8DsePAxYbqwbXVqGhhjFW38rzJoprESGujf7pYdDjrr",
  "key40": "55owbXpF7Zc1LztUeLYTwiABmvubV7jYHdn4fpwzjM5MKu8WsNBWsnBKBViML7dkc2KtcdrGsUc5b1FhyZtv9sRd",
  "key41": "5PiQYbxQDNER1CCL8WzbRJenKbDodD7d7f6KWmPAj7LpwJ1zKoYpGTmsZ1PT6z1r2RcAUNeZPgDk1MHxLN7NWhUQ",
  "key42": "3zBfqGSESWQh6MJotYMHiSbgSghFSLTrGbxsY3CJwe9Zz3rva2fecRuYDz2dm95dvV1XJ25SVauRmwarrXGL4oAe",
  "key43": "62P2yodQV7GYT86BB7hYzxWkw7TndvJFFVQJawEcC9LdLq6wJwrNFsBFh4kLGds3hUtybqd5ahkrzCDTX8SCYPTj"
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
