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
    "3LLfavPSHWiyeL5qYQXqSpGMcZvMdFnnMpjrA74uEN8VjxENPqs8mucCUkL1GEchMsihdEeYGpLYqaVLddeoVAVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j6msEH7G2YR3v49EJ4k9NEphuAJm13yH5V2Ush1gLU6QepayMmbkUaFuqFxZD5gpJi1Kv11uJgW5gMzN6DwzsEq",
  "key1": "2dfKqEzGPWimzpxS5FtHoe6mTh8F5awVE43fM82STzi6e6uigBig74KF8AeuyicsVsZzHsepwYhcwLSsihVh4DdA",
  "key2": "2KWEHc8qYfi8d83PnkFMeXhApqXVgmxwhanSax228qufKCXhAvrD9q48HXMYZEiR4W2mj2EJNCCbzcpHXGLKbWdo",
  "key3": "3ffXtUfDaVE9Sm5HEDALrE7P428dAutvmiupJNEeDnVCxLxhwSNyXx8dbZZP7ZGEPJvuhQgSneP19xQDGeDjaPGx",
  "key4": "3ezpLGPZogxT9nK4imNEiShzgXhCQppnjREi42bFVpE5cqFhubotqSU6SP1EKPYftCVzkUynWLafUy9kv2z6zgBk",
  "key5": "5tckHaFXEmA7eZ2JFMAKriBQgqnqgk9PYzdkvWG37YKMNMeqBCmBq7r3S7T5rnQCLjjAaQCxnwmLSPCLZ1HfQRTW",
  "key6": "4Qii4hrxbxtW22QzuJzNd4Z9ANSQZ6TTCMZdM4WANt3o3Z2ZktLFUGA2MtNVPsMvHt183v4KeKRqthcn76Yj6pq2",
  "key7": "4fZ8G28qb8NkVw5P6hnkzbwqgbvT4vUTGn6mkJafz8m686EzC6tZrvC5uGF5WTtaNyTnP4L4J5rLrTZyRos3kmL5",
  "key8": "2XJoN9oUAR4aXKC3jwT2gGyWuWTNJfcqWsPQDt4ZyEX5sqziL95xKDZwwK7GC2RPidMTWr5eJjUim4X38M7TecKU",
  "key9": "5GtsaUzhVhi4dAP2eQAqwTZjNzQWaiWQebKyVnuMRML4muyghscZsxGgb6QmApBkCfdko9u6YdkMJXrGtVKR2QDL",
  "key10": "FRzKhX7uQiYchBkA4tAgtPowURYvhu5TjuJMHtBYK5TAauVUUWqX1DQokjZz8j8XHVGtpwaicgX59ujwvCFvESp",
  "key11": "2Jq65GZCmpM599VHtRBCxJc7qJPyGx5LMY2bPCiCqh91zCa8xr5CU4iL8FfsGDsSS8icuffipi6JVh4sPvNDSQri",
  "key12": "4Wrd5qZc1ePou1nmGu2LemyEe3pQGtewdJzJEpcDWRBFfr2SHHL4QDwD8yUsh342o4mvQFhtN9s8D7MTwoPjzoGj",
  "key13": "5MJmALmua39EvykMVEM3LYQiC5jopTAyYkrArPe6Ph2SNAZBVVCjuz5ibLFNdzZ5oQDi7c3FXVtAa1E2rASLMcR7",
  "key14": "2wZrc3CH6g6v2wYHzq3BaBAjmbyHRG36F9EJLpL9bTvE4qHAnAYWVuWcJGrXN5WgHmFDBWkmemqordFaH6g7Gj2e",
  "key15": "4e7uLLws6DYDjphKQFUq8GosYYozDsrNGNoddzQYZCXzCaJnTgdTY2eRJzUoWv7X98VacShXKSUP9LN7o7yB2NvE",
  "key16": "3sD26Kt34jiXz8SK72VRDtN19zXbybxpxBmdyFFCarLpzwzyDRDcti6c4JfG3gib6HFzDsdizoRm48pEpmDTGKHu",
  "key17": "5gHeYSnULK5dXw3KFcGVfn1rJAoD9HDzZSfK8qQneYoVakEcsXmotpSVv54MbFhDTgW3tSnxXKkMzFUKUsUMRL32",
  "key18": "3VAW5oLZd7Y47xgwDaSRJDhXg84yL4uRB7Gyv86XjR1GSK5V2ehpgniAxxfhhDqCsb15gPd7isFYUZuKjDx8kggu",
  "key19": "4Z3DVyQDLuJcWSmgnamVJRG6w1VXFcxx9oHeC9RwRoJ8q98npZsUBTWptz3uJjC4M1ZZkvcs1TDZT4fHqUVuppWp",
  "key20": "5FsDJKt9yVQC3NhzF8MxHDPQgxYaoApyhvozJp6qSQQ5BYqcw16zBhbxtjDwze48Xwr8wtCaW3DwyYM6dRsfUGyT",
  "key21": "29gxR9iJPm53mojsw5eF2s5BQnDAS6fEZCVabmNVNc8wBbUBTABRnhE1WjMEFBSdjEC8wykGtuxErg75yTDdZ14D",
  "key22": "4mSrK1LC2c3R3xyneXPj6ae53U5D94PxuSo9JiJNAh711jkcRDL8xUraVZyZRTLrAjWCeXApA6D9ycfCXcQGCAD2",
  "key23": "3Uvt5J6QFZw7VzJpvB561iwtCL56W7upf2teMcfHeVdneGeV3v56Mks8Lw9rEXY9SSsz7VdUXNJ1RRT6D3ZmbWDJ",
  "key24": "4SiRuGVhwbUuQ46WJAwUaAfwxjM9senGo3U6xzp53MK8Eax58DJNWfqeexDL1DjfomPdQzDUnTiUiASn9a14g1Yp",
  "key25": "2MbFpvQbj8e6MPepDgnmwj1SE8FtYGkpfvgb8x6kWPqLBYQJZeweBYtgVByz5cDaPbwrfqzUuHnKwtYHbu9NZ4pe",
  "key26": "4kEdcNGHeRWzsjPfMyu2vwgjwoCerusW9WvHCDFkuP9V4EwoDG4Sd7tnTc4SeJc7Zp8P2gh3hRCd8F5hzF1WRVPv",
  "key27": "2zsK2NcWHGXBcdtQNS5icKMfmBAG3mtzbH6XyZQ6AHoTmQgrTaUuviAH48Gq7urGNBcLbTQ7HWWNjXpa4xrdUfjU",
  "key28": "91bqg4MhVoifSqJMh5YvM9mP9iEgw5HJS1y3QKuRiDi9xE9Fe53VkyEdZK6cu9Wm4FNtuJeLQN58Fbtnb3FumWs",
  "key29": "4Jm97frz4hsQSBRCN7sppTY1ohZ26Rud5SQJD9tGK3ukqtrKEAofzyNXPCaB9JERkCpxDudCDv2W7tbwES1ySH8D",
  "key30": "4Q9dKXBeC1FpthKREz2F8mF15A11shSDsgoc84hvFNEM68edQSMpMHzszLcSQCiFk2XvZBxVhRGmuuSA6UNR45Jq",
  "key31": "4ZHVw3fDwYUFT7vdHG5LvwTMKBotnmpJsdgxsrN11WCmUC1MM8uGhnKCJ9vT72dM883wKTF8oqC1U7KzjRbgb9G",
  "key32": "5oSzhSb3D4GEEHRn9bc1yomjXZ7QkBjQa5c6NC6BHXfPreVZUG1dA8sYmbDsVpkEQQZJbZpBLvf9r3arsjWhWrPT",
  "key33": "3b8VSypQaGmGXE6mCJSKizYmNCCmfj7e2WSBDiGu9Jkdd3udRDCVq9YRaqDEtSdQvYXiMtdj5kHudoe7bxuB3ErQ",
  "key34": "4fbtT9nEXTikDzSZCNhv4t5Bb6Kj7BbamyAoRSwK16QGNyPApSveDZJq1SPoAA9KAccBjkHYBbUzeVsZDWZmV6sd"
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
