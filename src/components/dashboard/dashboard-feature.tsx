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
    "3sqyWAYXi9A1ZHrycZe3yK999Mcw7M2ffwgFz3ZwZ8FeJTxuU7R6ac95UocnG2Cu31rC8W5G5K97ddpDyNYS3BQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "487yLZeyYtB8JxtwNoUy7xsyYLp4DQTeCEfXirRcDa5dHUsf6eu25MT2Xoj6MrCz86m5PeWzJsKjH5L6DCpdnjgj",
  "key1": "44K4XYtfmRTV8JHjR9U53qNjyERXDZhJzknfNSMaeyev9Yvmk6GuwzFxhTiDMsYTa7BNEA8ZmAJt2dJwJ6kygv4V",
  "key2": "2ZGhTT4o2cHr7Yo1Y5n81Lr9PYukhBxbBv7bBdXgKV49JopFVFo6fv1unasNsnNctgQ8WxjS8AmAi2NxeAJpS7ek",
  "key3": "jHib3GbXMX5GhZMfy9MvuY8uuWFLX6ZdczjwqWHDcBUoeJkkv58qz8HftdTCxhvxV5Wb3P4EbnKm4B9fdd26e5T",
  "key4": "3zymHdeRueYr7FtMpproaTrtGTeGhFhuxr6MTqriBX34QeA1VhkBBFqGFHgrTPvMk1nBfw4yLV3CTV5gEvEAXUXE",
  "key5": "2UcCM7ZkPZuq8dy8xZ59x2t4Qjxui59idTEfoHyek2m8sj1HfoCrJSjKzdJizXRDBeHHBo5jVvWcVZYJV88kwUXS",
  "key6": "4Qi8HwD6fdJsuUPPxh2kSVz7Kph8MwfqrwLfnCDsU8m1iDGjvwGEdB3tZQ5VaR1Ao7vAXrHg6W7wARiQHdQtyE8x",
  "key7": "2gMQ83ThFVC5RJCiYk1pTqdE63Hz3pTZfYWzoPsB2pXxE87xA2TurB8tev2GQvFSUD1vASNvPSsy1AMh1No2TQMy",
  "key8": "3P8JuWwUPLyCoZ373U455XPHrLSrx523icGcbyWHtFsJMCqTtfgxy1VVNh9s74LjBNzocjxzmYz96KqQVfMvr969",
  "key9": "4gjLr6VhKtN9moRUzKuYeduKGa3NaAuHrUuJ2bVPWuT5XhHyQvoUC4Ft8uGwUCFnpG9iqMcqtmcV5acNdvRzCfw3",
  "key10": "5R2GDNLbwG2apiQUkhiQgFKvqynzue2BbjGMFvVmE4KJWFfdWvY3XLU4wZDuh5KtZEjxLg7zr8J99srCp2kj3cMX",
  "key11": "4KY1PMpdUPYMY9Q4jDNd7xaKs5cdAxNiKfFkV4CeZ8FHWca8dqEm63ZdxaKXMcFdoSTZxddVi1LWJ1jirt636zwh",
  "key12": "2R4jHTpK2FNCByHWMuuxgdHeDUW4B7n7rhn8rhhgUvW4s7nQc2jLKg8Jgvj5gLEBpKeCcD1pPL9HcPg3nRUY3tAc",
  "key13": "CGtCnX93LsLwu3Dcgh6c7DfqGLsAMJsofgMaAWKJmrdWZDMvWwtd9XHAPZrcki1EcThxGpKzm8zTjuxTWNNbZr8",
  "key14": "4RjjPu4ydBRxAVcRYxthH4jTj3vi9mkuUzsmyP7FJv1mvUNBEPN65F6K7g892UwJanSvm5YzWwuw1guySAhThWz9",
  "key15": "fyYqLeHQsJExBYCdbskDD41d1qFuATwGYmEpJCdSeuTT8rgj4JDnS3HHzdd4QwQURYhX1UzV839jsM54ikjx5GH",
  "key16": "4dUj3MSk94BxLrhx11YFb9mgaFdcd7q3EJ2K1LDLGTB2fKMN3A6oEcpxaevZWdbkM4xbtM6NUe9hPo5MRCuy3AoV",
  "key17": "2EE2djrdVHA3TyY6G2iGvY5cTeS7CSYsUassM9oSFwWxmkWtTAVPJARuVMrPULWeceUgS15Zna9cfxJHpGSBfSn7",
  "key18": "2QgqkuHwWoB7M6frLggVELgz3uuzmi9LpU2esGsVawcu2KVih5KeYgA2xTov9TS5xx5V58YrFJo89qkYEuzQeau9",
  "key19": "3EqTpAtrA3m5PJ5UsjdbfDXob9K4tGrbhaTJffb7X7ortN5QvNZGNbvQwxNkXbRYR51FUoFVs8gt2WHd7oh3NtqB",
  "key20": "37VyjSdCnG9cLuPy56u8Ffp9ym9tydzjG2yaSYKvwpqMtTHjj3XBoY7UGcxguP6SS24rM5gVYoeeQjNqBtAkDW85",
  "key21": "4KGRLYakwuBSaWmLR7LaMtv7LfHPAJJEJJQTGAwbALxQ6n1MBeVkhbrMMbAHfLxatAkdJmGWpPfpwgk89S6x4k8G",
  "key22": "2ddgeSBWfuFwuLW1znSVS5iNHnTdyaBiXLic3JoVAGuTFXUrB5rWjdYMCinnYzm1odKNzh9RbsVZvuxkPT6GrtWu",
  "key23": "79r8H1KpdCURAoC9R3Wvy2y1oc5Y9hkRGtzdL8XZrcjpC531fDm64SRjgckNzzGZKtyg4Z2vTgVuwzPrcQ7uQWw",
  "key24": "7dtXt2TteB9RqC7E3BdkQnWuaRD3nX23Dbr7AmzvVtf76fR5ZcFMqG6SiVHMFw9Z2t7h6UbNohm9eoozKo9cQTD",
  "key25": "2mRdisqjtLhnTLMGMKGujdtKh4vMPHaRCWwUKsg3X8rLovQLvfGGWfijbE76kNBAMuPzwBjTbtaGWbLzJvkKxvRG",
  "key26": "58GkGrpn9Q1Dq7EmNULQaXd8Yw76TSNiHZ9V6Bs4H8eviQvs6CQfEGfHgqj7HGRGZqejwADCgkbFqQE1vLDHJjzT",
  "key27": "ZMo5nYvWdHwWcQRcoDtCGPJbtCere1D5XWTA7HQp3jecNhbZRwgRpQLCdh3h3LkD545Bm9aoJtePsnHBdT6iLMb",
  "key28": "5zcpuHQLuNtbdz4GYscDvqgsAf6VHJtg9PZRcWRsZFjSkT69ZFkSNbVZHgTVhtqYVN53KLdVhAFVAveaYJ2Y8J1A",
  "key29": "5cfKL8D5xt2QXgLP3r83rmGokePNMB8sP9GR2CQnhfCG4n8XcyZRqzgSyAo6qkAesxSZpXmsG4Vs8v1YbShktjc5",
  "key30": "2mwaQgdhcWxWQhgvFxe6PUs6XjRdgvE6CDQkCcyJGUeDumHxLtrMk4nhXEtCovGM3w4bK4YL1gg9mGmZVWrMifmR",
  "key31": "3HALGnPKqmMCucPQwD3g3oJSu4nCuMkkbzLqKrnJQGvPdDopJKjggzKHNyqMov58Vz4Zqpvv5HwKPnxjQdSSFw7U",
  "key32": "o6xnNTu9sfQAqYiucpFEPZsXecVxzrx6p5HzekeQHD8zkPdz9MyqQg4bVt6YuFpGXYHdKWCJFgZf1V9eUVuoDHk",
  "key33": "2Ms1tjcFb8BGEorRxH2LCJGjTBVCZPUiRcM141naNkYkuyehkzLMLw4She1oTnyFsJLz81TYggsQwB9ptJC4jR4p",
  "key34": "5Ybbds6QYtT45jvE5553CeCy6ewLgd9Qj9tbBHj1kq38hYxFDtyEzyV5n1fLzjodY6P8Zi8iDFhKnosERrnA2VZb",
  "key35": "4QT8VXpizhaW3UareiHV87tmyiXNm2SQsemAvRRHPYBoUZGnHgAMHWsSfKyQzUqyRxnMKzpC6CAaz8La2mhEqdo5",
  "key36": "2eZQxpi9kSQtncKraHiWRS5zsr6DQma7cviqyJeveddKwPxgwUBshts3QjS4QMD8hZjV72z93BjbgBN939dESJBC",
  "key37": "WBTxP5cBafgKE1N47s3zrJbU9r82c3VeKcd6sMpDafCxJoqXqnNUx4CanaySjS1iUynYjfvpRFazRFyqwKby6dt",
  "key38": "2fNdjtEu1vkQ5TfBuNBpqtvrmDupKeHNMqhJmnuNKjyvPcnVCFs7pnVjSELDEioLWxKwF99nXoCEwGSbird7PHym"
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
