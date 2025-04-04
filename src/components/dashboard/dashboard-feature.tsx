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
    "2cxJ15dVf5xtBTSU5epcCoX6d8HzN9LsXjcQ99megg69t6o6wJUZaE1dnoNMosD8NLTuU661RjGr2xBnBYudux9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2htAqDrnby9QMPcFKXWbRrLCUVme5ixdeqcKNvuJAKUirDzpju541K4wTXnPSeyPXWKpxmsVKgZgySZGtM9GTJkb",
  "key1": "4MSvDJeR1HtLxuKKxntaVtju6D3oSjhutA5heMikas2kGfnzkFEFWd4aH8irbCqoqYwcxKJ6vsjnBQoXfWWrxGbD",
  "key2": "bp4cnWz5AsEsLaaFmA8FBqfVTtguYv42rxhmyZu3YCNdP3MomKdmortZQcMMCkkqas43ggrxFNQirLp95fcqvKX",
  "key3": "5fqygsAAM7c9sz7oBroLpS87ok2gxxYF7iQR6UeoMPQ4sTQJv4MNbweKyx4nswdSrsqAGp16uRh5zdH9c5k8kNvF",
  "key4": "2kj1Aar18X5CMzj1MUU8RUZvPdy8JTrhdCZLejxec4JNDgNF9jrDLqsWZjfEK97JeezMgCSihYp5G6YwxyKTMcyH",
  "key5": "2rKxCAmEUYZJ4SCnzhbnfieYijeFCaJVmWCU8NuhFoieYTZ1YqALrmQ8LXdVCr5WBVfMRChTP4sdvkAD8HKPuMDo",
  "key6": "Ub1vUsNWLkrjPBDzprciNiZeacPb5GwYvwwyiaTPoWVgxiN8DWVLK7qPHvcw1esuKwuwHGYpNMDtgQY1duPd9eg",
  "key7": "2M1uAiwy5tG6cWwtDZHUwkUFpEEyoDTBN7xSPGM93TNGy5k6Gcosh8zkcWdj2ag2rnNEyPAPVnKkWSDfU1kS7AGz",
  "key8": "4A9TrqxY7ny5BBVckkPynwPUbV6ARwCU1fQr24seuvi5d9N2w1P5WQfgW9SCXgyK1V8y7fpbwaQ8qkHH44MHURgv",
  "key9": "2AWSyjYEDTKakUQCrYzSf22Juf5i2puLD3tGWwWNzVMmHDipXHr3TS2vngkWJb4YXMrQvyTWvwyPz7fywq5XL8t6",
  "key10": "5qWUya5vdyrcX34KdYQb2m7SSCuSEV8kZd2w1VNACi4LpVwUSNhP9DdNLiNh1PUL13vtVFPphDHk88netZwwn2fL",
  "key11": "4GcpRwfzquKGySZUrMFKBvfW1LfoJcUknGDSoSSjrKSFuTo1kZjQJGd4PvrCLnjH6QVZMt5nmWTkHQpEP796MAne",
  "key12": "oR1EVXCAbdVJmZ3Wf24hVQHXB7zkH1hFuGp5Ct2MSQY1caJW1GVCczub3JiwbVcrX4FV7tad3YLwQwECVUiPvuU",
  "key13": "Wr9iVsw6hCm6SEA554LkgVsNcrXwdcKScbHJFJRas3QrfoebypnhoFRvx4nTFSjxPwbJjSqFGCvT3yLo4BNrrWt",
  "key14": "4DWzG8FEV17qqYtQzCPHhZEgEM4LnLZGafUtNZ7RAx8iLq4TCMUJ7uuwFGVj8dXujRKsc3LgQzsJtzHTsUeiTmDH",
  "key15": "4oex9kYVdHtesuN6yp1ijEpNZkdHc55ZmvgVReYMdisuFHZMY89fPtpb9ryQezV7HfYucfB9MEtHEggQSawGqLGv",
  "key16": "46SXQvB9TqMHBn5icKHx7zszviiK4hz9bnkb9MbVYwMrhLkSqcTx6KUSmJxBQBbKNimDgTR8NBXmknwAc9s1FU2X",
  "key17": "4mbrQ3r6uyTzQUU9xSnb8mWgW8ums8RDuXTJaxarmaJ9gkx3UsfKZcCFPxVFTJFx5PF1G7LUe85MmiiNaBiCeD7L",
  "key18": "4GszQD1vLA8fCSFoaqnS8GHcV44ztcSytCXztLWGPA52txGRvauHPuF4MCwSTDG8tDC3vqsZAtzzg8FniZRwydeY",
  "key19": "4qCYNHrSr1ycQ2aQJ954XHuFQhvePsurN82MbzyWRCsUUsGcUAcGnPhipC2Y7pNjfvABgxX4rrkDSnfMDNDbscTR",
  "key20": "32fd42zm5ApUyiy9iQpQkWGUzRdMgRfiawLXZGipzSAhYuppk8f61BRP4knxjrKLVypvQoPdFPW2enupr4XSUdkL",
  "key21": "eLkdVyqF4BtDpggoUXDbSBrpgkm6ygDzd9VQrh7txb4cFUa7bKHXoET9TCXfLCaWmC3BJaYfN5Min47duTmiuh5",
  "key22": "4YYsH3cNgMNxNFvpKGgPvEuDUudNyoQChQKouA2tMEFAp4Q9rN2BD2VGT76jxTusuQqfFND6LwJcjuEZi2KappeR",
  "key23": "VGRfBiusZPJQSsTREDrTmDUQdX4aYuY24Gxca9heoUCnZJy8iFyZhDgA9hXxhHTZYz1w5stNrnQEgLU6gV1EM35",
  "key24": "2X8V22B4YktrinEGeyDqfhbrVK6FNpyS6dNxtpN5aceNGBx3erVWqm6e3uwj6DkPLVpihLM7XvPpMCFVoYMZAW8V",
  "key25": "wfcR5AztDK3mTQtQ7XcAat2UM9BuFNVrJsqLzEEu47rsoBDdip6vb7jhY5ohaJtsJnKUXjyF9tTe15Ma7F2eWsF",
  "key26": "5rEpV6mzpq1fgAuffG8YJzbEiNBxahS1LTWUgGGZVa9W3mqcZZrvEXWY3ZfResfNnxwz3KUV96kNa3AGQ3kZn25f",
  "key27": "4unFoJhXAFiwg7A2NkfLb3Ky8q4ebvzpBL5NKpQEtynKVo8oja3drSp7Y3diz5pPN6HPSaAzWZWDGjaWqtz8sEgb",
  "key28": "5jA9iGfGCLNBCDuUPtUH57bcDx1NCoavCwyka4gFywcA6UhKcfZ3CbjfB7umzWFyx9KEaygoaHLHF8apJqbVAKTx",
  "key29": "2WPuYjKsJzsc8fDmQXcvfiWJXt9PBswVn3Eg9tKhoB4WBva7WLt1XcDBNpooXGbBataoThSiAdLMUMonKv9kTfNJ",
  "key30": "44azYknhDfTJoGR1gWSAfL9724Z7KFZMx5oatjXkV8z1bMCKV3Q5j2GjhRyEZpjhYYpatJnVyz7j1yacwotpkYzG",
  "key31": "X77BVrRaRjzW6TSGkUsrxniAwC8NxNCgrrxsFZVPduBSqf62AwhHdHqKGqUqJfnp6BfyErascwcQ9ZiM3ZiFg4i",
  "key32": "5Pz3RibiXtvYJ1kjQtKBqMQcAWtRQH6Lm5DpKgtkbztgAckdzzdVUY52TXwUAnBQCMAPNMB6n714KvMye6jnfAM3",
  "key33": "2FTYercMnsmuQkpTTWWS9gyQw4JNrSfWEweupW7hC3dPJkdT83whfm8HkrQsxVYuVHbta6ThQHYRyLQwUqc8hqDH"
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
