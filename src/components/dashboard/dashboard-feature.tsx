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
    "3R8PXLrozbmnxx4iFP9DjXeLvo7jMvUETUK771sdetzSV78DVpxd2eE7j3KnEPLTkiJNHE7i591qQmnBpb2rJAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gZv2PyRDzYVxerH7Rq3xycHsJ74DHf9hnRPMzxMg6iDSzytQqQVYx5UGZ6krMMAgKr92hsEPD29nhvBWDZxYPMQ",
  "key1": "5zQH1dHbDJYUvEhJep4JnkLhYuH52dBqrResd9wfZYDHfNCNrkz3kxsjRV1BnMFfGqkSLoSAg7cc9SromMnq3BwE",
  "key2": "5sYQAd4nLRL7aetwhDyTznyNDdDz5DWCA5Z9vau5jaVbrGt3ZzumF7v2anUqVg1f1zNpkghrh4yRKhFfafUJZGF1",
  "key3": "4KfPq62ku7U8preeCybPceWE7fbdKH4PrTyjoLJRcYimuKpeBwEU3YaFj1w7Y4TGnS5qaFSsCqV5ko9T1QgRWKmu",
  "key4": "4VeTgjLtTVLMMeXrZDySgQszZNdE8BHUX3FVagZtL7wC38bDuCdc4WTVaj5NhmpDpd3rJ6PKRxdMd3MKQ7j9vZnW",
  "key5": "2Kqd2mFcyPDYiFtYXcHRdGxNqEYTsKcS5ee4mnHoTZsVGFjSqV8dq4bq7hiauftFH6oRYEPQ8LBZ2ujJ26C8WW7s",
  "key6": "38ni8PTem4UK7hHUpsmkfcgMn5AAu5UCpFeqYgUgUhzeLML8KhRwC7xyLUQhGSs25RdJVhPs5WNaJqarXrM6b9ot",
  "key7": "AttBk4zTW9XJwMCuAvYzDhctxWgaBhjUA5QQSP7oKjxYJU1DdjJW7kixaQsRyUyQc4k7BrC4wmVZXSvYgg5Viwf",
  "key8": "yNbo5uowbZX5dk1BSrs99i81z8kAi78CjjGbek7KRQwdWHmh7gSxmaZXkBn93ASAMKAqEH3xpDzHkwzoo1yVzVu",
  "key9": "JAHzqiugeeV6aPZGA9kkDyEmS75RmeBNXtdF7ptXgGkNUjwLrMsAL5KaSPz227bUPxXGtrtGmmMT8V7GPNq3AzF",
  "key10": "P6YrNtzDSXVnQFjNiBXkHZ89iyaDDhENBaXUYZ948n9E6kvE84Xx3NTqZFwooaugzaPtxWAP27ennJbtQWA6VD2",
  "key11": "2gnQmWf94Ct4PFDTDhKmVsCzSGy5MNgrvRsbSUv8z4SMzHW8TSG68SA2By12FMitYMbCsGy6RWagebyFJyJWcVyC",
  "key12": "1JaoVP4HbGAPNoZNfASfRPxeB9S4MSfT5aiDn83WXKxmoHRHpEuGrrAHQa2LMcH5YgZ5aNhwsFsMNnzJcpJVEvj",
  "key13": "c6qLSdWPiydRN9wYbP2YHvfYqnX1WTHkXuxHM7T3icUSnZJ7UL5QyQRNAU2Mwvrvpi24oSC2QoQe1hh3b9XJfPz",
  "key14": "4fy6ZicU428JJSp5tNz2VDwLSYKSMdbyVv3vEJ1VCb7vids21HcWCUMzVyRP22JFTKDsqQQ28ygbtNVP2LmWXxiJ",
  "key15": "JkG5PiigmRdLpGUxGE6YMkabSqVCXAn9PpM9TqhWyjswsdrndL44rrdcpNYpEAQr8vmXzsQxy2CPw5CyaCaFENK",
  "key16": "4GFRYkvbgXHmyjtr2MkUhGRdctqpSmaJuxiK7vSEz65botduTsVfmEcYMDVxz75HjwVLUA4K9q683piRMzuAgbFu",
  "key17": "EJid4jZWAJYJfCNfBQzR32zM4JRb4zBZWarDoAXq3dkzGiNC8Fz1hkf9UvnjZRFPqnEaPdYUK95VYpa2hx4wwxk",
  "key18": "45CGj7gJktH31nukmKWJjdKLtyYsrgxFLXWf48W94zRVzgTrREXiixR9EykHkuaocLQe5Cdb3Zsa5f766XVLc9pF",
  "key19": "5gSkemF4sXtRTDshW7JpUpR79D2EVwFy5tStSgYe6TneF42VHgUEuS61YUhJFkpoginkGkQWhQqX72McXsDrrhPz",
  "key20": "5TDCvjdDxTegKW86j786GjPfR6pm4gRzXUYopCseer5CVJmn4X9hd2B1W7nesdgRiM9m9B87Ce52rqv2cTxKkcau",
  "key21": "52ftHEfGDdHDWTLZ2iNLnKtB9d5x3gHMfut4n92QjGG9zJF3x8YWgTh3GTw7gKdxm2jCDqmzK7Atni2Kpm1444c9",
  "key22": "5M9GWvoeDnxjfNeVWmUrLopii3ShasE6BRkACwZEFRKJV7XVhoUTmYsJWaaZGwRo9WHEkwFTR7qcPnf3pcgzE5oW",
  "key23": "2SHRDJ2QvTw4bmsTCppn4sAwVKHhvi71tuGowRiP3bv6PE1R8jZpPpdCPprooLdW6N7YdVRFyJPxvZqicatDMwKK",
  "key24": "5q5H73N6qP9A2a3fGjHAtcsEFfNiaPtsR1SnFFeDgsbiB6RqG4HfmmmaC1d67Qd55VQ7TiDuTe8gw2TgTQDuZo3F",
  "key25": "5ozxZ19XtbfkD1exgttKKG6KUbccLQfvNoXqZVMk5Pb53tYN8C2ZbXx6dzxx9KMzAMR3mMR2oUz85ujEkbSAXZNq",
  "key26": "3oKf42mSRoRuAso7FsmYs5Ycim1oRNR54wa5xtDATQ4ihXcLPy4pHnr3Rf67NPT95Mqn7uknsrJM5CU7fmTu5rca",
  "key27": "4gXGYKCunq5evogUz2ZbUo1u7t4aJTPrRFDtwVjsEJAid2aj1qD6WuovAiRbxyM91LHJiyiokkYHvb4vcSH5KTNX",
  "key28": "3Buwxwtgyzy9pfo4aBWuSi6pj8fzKGECvKcAPirkKnPPiK3pC9UQP9ffpawFtsmhAGFWiJ64VCTiyYZDoDxwSEy2",
  "key29": "WKF2RegGeE5iDU76wFWKnrCC5aQFGWwdQkHWbU8jbMjQ3i3UCsCqpghz5nD9tXsM9nsH8UyR3oYi2d3LJMR78W9",
  "key30": "25x1WzeXQFuvVQLUVQJ8pJ3yejd4oGe6aw7FHxGBhEFUqRb2sSdMd4wJ8xbG2fWMgMa28kAkabv6YsN2fU2Kc3bQ",
  "key31": "39aKad4S6DR2pqVCWziXfmfMghhiHwWbZaqzokVZLJDBX8EDQLcTwZLgjeyVWi3a3zEgj7foof393XwxqFRPMS3E",
  "key32": "3TzHDCS3PJw3DYDai6jvi746eWeNtaWvrhzxuzk1JbRwxYyoPWCkyeJcXX3uwJ5M77GPHVscuxeqcSG17Vx62TPF",
  "key33": "5DbnyRQF5k6RjRvK9ZsXER1fdNmXFFybDMeo8Xk3aXaFbVREAcezxGMyB9ESUweVUYXqCoAHW1nc1KefMW6VKgvq",
  "key34": "3yorwAp2PHQNp3Qm1yes9RjeGW6BtgHKvH9TUFbNgfwLTXDHMfYHmWS2PJ7oG3ouDxRNTA8X8yG1TP7WtGFnQ4b6",
  "key35": "4JnhUgkj5TvXjqjag8bHqqqKECNURkPwKi8uoPq84UuwbtR49Gq8BqTH6kdYW1SJEkFtLWaCUPw57gC3Tj2VPpoP",
  "key36": "5tbqR4pTxWWAC51aAraWRqwQPy17RAEqsRZUtBRh5t3qKbtgN5No1JuQbR3q17YS8BGEjeeVZx71khokLG22Ufdx"
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
