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
    "2DjKYtJFpEpCfb6tkHZfMYNXF18KHE7CHNMqCKGfhKQjbZDhB16yS1JbXcNUUCKsb6MjfHQP6LBHPrx7N728D5QH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s4VnRfqwXZMFd7YwoCK2BT1zjcpy61s8oDzBHvhrT48tRf8uhs9741JspVLd5THVWuhtxkMzHksLHpoCEPFrm6Q",
  "key1": "2dWQf36fK4s8MfGFVgAbbnPr3XB6PfofZLbMmQMGwiakVsZooZT3qtD4QpJgk9Sumjo3ynoRUYDxFa22WCnmeWo7",
  "key2": "3dHGxuAm425oLndReCg6tcnMSAe3CVexjjDPkSVkJUtiEVScSSea87RW6852A2CcAa42c9U5KRzoUBkR1EeATU5A",
  "key3": "53h56SN9nyXZhVVDRLQvWCJ5yZia8HjCiFHR9iapmjV8awe6Frwdy1bQT93Kne8rYxVc77KUJUXd3N69EHkDh4XK",
  "key4": "3cUAPviCHHC9DTcLWKg1VSh5rQ21S8whodBY5ZQXbdfgissSz7ZXVHYBupbJWzAbMYQwbfh7SjntGkTVpmgegoB7",
  "key5": "yNwpL3CEL3Pzk9cFDtyYPUmxHCyS9s28284V9ZhUPTXZnXjfvQMxaAg55vcQELMcpF742KFKZis6rJcAfrz5NZG",
  "key6": "5Hk53iLhREp7ToBBDpCCG1UKSKNGe1dvGBmYJRSupsVcsu7CngwHGbbMwUw2xpsUwBCHek4uRNRwvh7EYuG5XF2K",
  "key7": "2sJfsWpUSvwKYbKs4pwVh7dFZVnk94fWqUn6CUuAzs9XLQfy9oXKrvge7gcvJGZ5Ksu7AJAiFpDMhsmv7THLjFAG",
  "key8": "55EaKF9qXXdNfwZvH33mX1iw1kSr2x7tF7jafnakwzr1TnuCi6fWHegmzyzA8YPfbBYohTadcP83rmiWUxkptB6v",
  "key9": "2MLjiuvMuWKEDxNusmRyPm3erZHk88qRAncZcvXeQ1rT5bC7B5DeSn6EoSH7ftXaxfQXKFxUMM8fr1CMJ34vEtJM",
  "key10": "LDUEwK2BzBc7fvp8AtnaAno7sAnagsn4pbFW94VFFT82mhdACCpuNYwxP49PNBPzLwDueUx8bYsb2zkVo5H93yd",
  "key11": "2mNEpAjhF5Juvxpr3ZhMK8NDfJjCcP1XV9HvtQ5g4vuwyYDpmMrxaqv35fT8QLr5mJm1ShHtpv4wgoKb4DoHCpMZ",
  "key12": "5oT82u5bhgooQgvUGPCNor7vG9GwWHFVmCfA3UA8cgoFdCspZamJDqpfiaMiXEUBeRb9N5TxXpRHUbyuYfh9Ffax",
  "key13": "2DE5nGAWaL8TYMRDhcWcyYzjUWj5jo1U7x2bjzBXDeaJYx1RTo35qQvQGDFe5zyHP3dtWWjfGPnUYB39wRb6zxgT",
  "key14": "uBkpSnZho5jX9Ja2wssJYzeASxPiT7rxDiXLbZN7Xz3ViPkH9EDCZw24SCA7kfsCRCMjjNheATWau6ZeWJGnJvG",
  "key15": "65j2CouVhFgxDiGZPhHMSkM2qqs5GSbauPPsAsL2eE3khhdk5xLRowQMkU9dbM8MTxH2DR1Bfkva7FACSHiZHaPd",
  "key16": "5RnUvSZfdXupwJBE8DyWCJXhG7vsAuBvGnPrMvZ2n9RRmfcHce2yr6mSxmme6C4jvyexKY96QpKQptSL3GYd9zKf",
  "key17": "5ivAKmEGfNXdKNarwWDW461nmPomWstM3YiDGQAMVNh2eFE9wKRFABVzqzW34LErm1J3QzwrcFEtVe8krS3hzmJM",
  "key18": "4asN8ygdxrd9UBnZCMGUc3QrC79U29hPTteTSc8U5v31bUDqn9fgFjcGuzed4qYYwNr7K5XTDJxQzcuxDe97bmoy",
  "key19": "65MAdwZPaFqFivizpvNedAAHRgq22EuyF5udHbjJkBf1ULzF9cdwVQQM4vb5F2PH6ZVqimdkGdv61DzqkxfcHf7o",
  "key20": "3ZgfQfsHVYWj1B6Kgxp3HAmLgkAjCgLHfsLDqCWmU588teKCXgMDAsWFWQ9qy4gBx234kTvajLnsrTwJWwkRJLYo",
  "key21": "NErK57mubjKVXXiKdLBYD1VYZcgjMKYy82qT6zahNeXcGcNNWauAz57PVP8tWLDYszXf3mtPNeS1itHcDhptB5v",
  "key22": "4PgknCdigAVdYxdH61t8WnDGqdondVuDHpDMEdr9abbXif3o3LQbqE1245jg1cERVEnWZhzZDuH3GA8Jdit591kw",
  "key23": "2BKJBH9RP5WW93meuomHvtqkHZfqGwiHQCwX1JxTS5zFDKH4PWDq5dk4dhHdAETiZweHHnwJoJTC6Sj7sUP7wY4Y",
  "key24": "aEHHzCM9AjYxNxTH8vgW2BmyMkPTY5BDdAxRZbrtbWRps9vK6CfnSsrdwnvGaHNQ21jFs62jZW7vJDo2UpVMpAe",
  "key25": "5Wy1hr9j8NZE5itbJuWCt61KQv1oH8bXNzrUyURGsquQFejQ5fBWcgzJEr6HxVY7MiE249W4yk1n4PFuR5DzVp2n",
  "key26": "4Fa5PrLzDZspnohfdDPnzdcwtFDZRHiTYEH4YeFQcaWsq5zFbaxerUayr26LKnTtCk5G6ZBKYDg6PDXXUzXzWCFp",
  "key27": "2kxER8QF7GAJKJFnKx2uw7wU5k5XGqCvi1Dgh7ZHaF5u53CurQkdvLw6J6FLunBYYen2mB8PCKSuZ62b23X1B1XB",
  "key28": "2eddrV44jTitEEFmn3LcPuyPxHiJgvY95HVUMvxSCt34SCqAgokba18wpB9VWS74e5V6pqzyqXWfYpziTSrQDS6Y",
  "key29": "9U91fFyEotntLgsXezig1evvdz7BGG57vFqkbaUVK7tLXkdFdZw2pFbHUYEsy82Lq8SvGUMSs3AmU7ma1cNTmSv",
  "key30": "2M9Fdf6p5L4rRNtVwVdaraxNPJQ2wYvfgpQ5ar8jhZ26iKhJBf8q6dEKRRRwrjB9nguevZ96wSXa6KuSLnpPBtdg",
  "key31": "52yEN1uEYP1SEwpopzFEX6HsoNDMmcM67L3LiYmv4F3jgvRXdTXWvmwoR5PXrTqeaZXd8Ejqg21g8NykK5iBzWG1",
  "key32": "4sXaigr2T2R45bcV2o69WG7sQHem5qYjsvm2h4HXQLBHS4XRcevRFxgY3Ezq7caXUKHR4FSYiqJt8zMXo22u1NdS",
  "key33": "2btSxDszy6UWVG2hf9PPwgE7fy32Dyid54L56VDAES5gJrg9JdfHDTa3aD4Kg88jQAYm2dvje3oD8AgEYcEh4PAd",
  "key34": "3yZWxLEFQMjhzApv3EyZYmVqJoHg8RK6VqoAmv5HQiQkE8gKUbvLhjT3kRo6K5V7tt3nUgmWN3xAKFLhmJ9iWswG",
  "key35": "rNazeZPcvRKJ7C6Y8rEsbGVEbap7JtX7WJPyNuNgsoqyUBL6xqUo4df6hVikSVmKN6oU9CrkjQgir4LF7xwqn61",
  "key36": "3gEp9nAzZcqKiLaaHKZA8EMKckCxxzyU96KHy4Yz2JkRX4eobPc4tbsxiCihEZx7puFUW8mA8VM65oYnUgaUf9Ph",
  "key37": "43HtuzHMLjjYXRgtJTea8HF9koF3KjfX8nUR9JkwX55TvBPFcokEkfBUKLXPhznMVbrwjfiscm8zyE8ybLjGKQNP",
  "key38": "3NSxMRZ2oFoMe18gjRu7QrFV1mGmkvMiKMPL3Nbp1zxBALboDEbgzCFEt5EVCSD8bYMEPKx6qyn6CnfuB8ENrSPN",
  "key39": "2BEaimYkNzQ7JEbp9r5EBKuPsFWpf2V6HpYgWFU2ySyaKqY9aTqz2Uz5bZWq7Lb3SNcdEtb3iR37QJ9B4V6nnJYf",
  "key40": "3oWXzGSRveSUupoDbzMM8Eqv4JzrB4wuRokhLbtjrWQjPaqLKp7atsriiv1S3bKDaG2XAyG3z4DUHJDGTcWb4CGF",
  "key41": "HgFhjgeLB31BLH1m28u8RUjKnqEHEf8mwCa6UzCH1FCC3h9K91sh9CCzQftfKCBeo92vWYiXLzGrdAsfXUK4VXt"
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
