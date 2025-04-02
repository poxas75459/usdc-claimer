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
    "41VGs2T9W5tKHt5QuwxUy9e9V8cZ72m9oKo6bu8id1Q2kBwHEcH5sSFmM8m1j8hMUWpWLtJM6z5J8QSE4a5qtL1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QmdY2tXJrX8kXwTv59M6xa18w6tVKzgqrLR3JoAipNua43hUba887BWSKEtZkYjqsFrq7x147cG298vPTnHrNVX",
  "key1": "5qDo3eT7cC88S9T1iBh7otdXKsxDDDy1hnyZURWDCh5fnuontnC6R326Z8VvXDp2BdWWQfAqoUvFGEUKjbhtuxmp",
  "key2": "38ucv1pMGhjKNPBvwhNYMVLsoFe3LQVGhr1GYJneK84awKqSN4oT3rM17XFX1s9YbTA8MVCDsrmdntzgUkSeLxMF",
  "key3": "Md7pdsyYrwM11sSPp1kmMsgVAobyAetMabEqdxo8emkH9tYgf9rGHk3WTfhgqr7sy7rfa7rxUUQSFrLnEGr8REk",
  "key4": "AN8dsFAVSWPsWVdm4UgTxDctMMShKByJMjgEPetne63aoN3ktnVQDSBi8cGU73YbaqF7whrKzBESgxV6hQ8qiED",
  "key5": "4uwuwMkpW5SfbLvZ53q99S8jfDVWvokmin3Ut9P2yfRYaVi8Y6qzcrZLJfTRUNvgZiRrnPnu1KM9HwJxXxVryPwS",
  "key6": "4cqMZXHG4iwABoQHCi4cEPH4anasKoRA2zUaCaB31XARyZJZvUW4PgZvU9XmT3t44cabAqLS7RtKv5XvqEs3uweE",
  "key7": "5sNcvW8ps7xegLdcMPPTEvLdWirqpHJMtTxNdvDC3sPa1aRpWnsFqRAbTt7ciV4uds4KTee2JeuEXup9RSPSMcXz",
  "key8": "3T112qm627zKosXhEJoo6vqisZrev2MMVGCugXgvQb25KVnvGLcfPFddDztYJm5vDwuQEEaewn1KYQQWbYbiwjdu",
  "key9": "2oQEzMH74YYXizC6gmk7BHZwSrrRmMf6dGhNhUm5K2avcH5EypzzD6kiwgAdgqaQmafQdHt5NyKKU8fBvzQebaDf",
  "key10": "4NoBo3xM8qkrbkCDfsvRE9jifj4j9SYtc8duR6JEyxD4q6aC5bHUDYSsr39E4cnnhgxj5S9YUZPPC3PWNJAfDTmr",
  "key11": "3e4vn1i4zRMFgwjMZDha9ZgZbivYRPvKGoYzfQiQe2HJFCfW6p95SyPxjkZjJ8WG5U5sUMpHAnfZjXinoTk8GtJT",
  "key12": "2SmvFNgALKwv8nT9uGk8JdgQJG32cNwVqkZKcT8Ryj9rSVUE5ZbGoEMAZWSTLN1kHCyCQxxWWFSV7A2MeXcMQc3c",
  "key13": "3MMdgXAMyRUccYpgC1BKftVe4thTdSFBnu3FJqjdfoP7fzJmMWCjrA6NMfSqXPsLYHXEwxWzeJpRefPMgnGEmw2k",
  "key14": "4CAZz4VTQiXzcVP19Cy21r5jUH8Ni1K2r7QcAPo3MrYDCvEMi2sJiwg9C9MmxPALr1aBuPH5bFmaniXP4KbTKxSf",
  "key15": "3CTzySymL946hy8wGZwBfjW7xhWfn4pVS6Gst7SEVug4iRgzSBtW3ThK547G1aj1CUMf9jRVymhvvn5z4vYmeSPm",
  "key16": "4EMUreHVMXDYMTjaUJxJxm3spNkgHLofdfpaJHSbNdY8rhrHPyiJMGiWMmjqQGYxFfnXJFvF3HZnp2beFMXDX4UC",
  "key17": "t4AhFYujBTg4VoKAsRTvSA58ddvuQPFPbQ6PDHmqk6HrpkNBAMqZkwgqzEYf6EddybD64Xp2DM8KMWct6RXC18c",
  "key18": "4ToACbyS1GcYD1K3H1iKSJQakfDdgYMKzwakiHodGfjfH8rn8xTGmF9yhZqpTwNVzCYw8C4DFJPxuypJHNWxJkkK",
  "key19": "5ED4WeTghwzYMKoQ2agNzBwrFntuNJMAk6BzQThz2vHhK8LrC7CZbze7U12NidwcbqqfmFVeACHKrbVmjYbZuv3o",
  "key20": "2CKwuvgZPZxxMkHpidvknDcE3Tjm912xnFw7JE9PDY3FZMAVhugPHup7PUELDDkDSZnHf9J7C9VTC2Tr3MsidGZt",
  "key21": "4YpZ3sNovXwzJqDqEcPRJhL1rUftetXWbcqMQuBH3owABSgSzJ2z6B9VQj3a8TcKWKSyX5kSjcyFirinZp3RU3wy",
  "key22": "38K8zNn7WAZgc2zuUQBnnCBE2DtuCZs7SnDRq1imar4eATAW79wJmWgXY9H5dZJysakjnE4DeaevWvvvmXcAFJU2",
  "key23": "2tLMj5exHPy74dpR3VKg5gAq118vL7ykVcykSmhw2SjZru88vG5UDbVsbs5PHHmKtKL87KRWaJAXDkhHcvN3UrWX",
  "key24": "5xKY6o9cQHmueDeaFKUhTr6xcbyghLv7reguY6RvCrS2eLZXM9UL3N7wwbyhzr4jGj6aRruQv8RNvbVz4uBJ28f1",
  "key25": "36ekG6cnu3ZiM442VzFdfiVvuE33ycUNP2ieJo3PEhxajM7nyucH9nSKWTFhwNoWt3BNuBugV9MiNujyDfJvHxz7",
  "key26": "4UVEJ3CWnNNZv98fdkaNz9ja6G3NQucWUCRt6wHutXjpmERjfzrMe3Fia4nXCfrfrQUmPuGbYxr7DMoBW68vU4Fm",
  "key27": "4CvTRt6aHZvkiK2tDrr7MHrWKqD1BzdTwMWrQFLWmaNsSExEChhfhxkfu3iXjfovYwJX5LPR48esXiBLLG1dFnxr",
  "key28": "5bjVcpkkTyEX2mGFuy5EPomspJhQv1kEsdqhVxLcpyaV9kDWKEcWcgQj1nKz8Y6G7gTzMvW4r61fahwSTiBzdcBn",
  "key29": "5Vb3YmhYuyovQdL13ve4TPB3uAWw6a3rct657Fo7DxkRCabBtECuNhECr6RU5KmpbKSELnh8aGXAgjSwfEKz1Cu",
  "key30": "3xyEwFcuWpJqwverEYNF6astRqhUCzWXEpUjwB3eYnsL3NjKbSNJDmrkH324JKSExzCpkPvLpgdZ6CPccfoiLwE4",
  "key31": "3XpwxACuhMpvfLFCWtdmnjCjwgWYHDuWcKxr15H1y7ketDtFZLoYLAF69CnzX8y32NxHKxCkvCqdw6fxMU3FZpst",
  "key32": "k1VqHHsCwvLoKBpym6wWcTF9xsJrDET38NBrc4JtkmWRzCBsdocpphRdRqFPT2aE1ph2UP6QUCMayLhvK4xUe26",
  "key33": "4Ec5gGg6m1PywcYdhPck4C64v6vtvdc3txWT1pv7aEtrdNp39nZ47LbScMjVaXoYMgTdtvgJNwE3nygaibf11Tmb",
  "key34": "4BW3nsWeHPd4HcWevmE5sWEufADmpL8kdFGgZRR5RD8wmXi1NgwxHkLMo8Fad449G3TUpfeekSsnv78YYqWH3swL",
  "key35": "28C6igBeb8sm9a2JugwAaVGnDmBMh67uypcSUu5sVXDKy8uYssT5MBiiF6K5zFpFHo1ng2HfE9hH7AKh8xTCMbmF",
  "key36": "pMNmBDyyTbdwmZKx9QRQZADUEQDBgZXmvgKeDK8BhpzEoGhYK7oUpzhJhZCMyf9VhFvcQqSjLeXioEhhgbvkq4a",
  "key37": "4GAQ6RBx4PwvJ9ruWheP5A7W8tsfUEmTVjfax1fyxZukPtGQ66jjTj3GJFxWH8kRgcFkPQ8hEWEe3Bzc3jtjmsTR",
  "key38": "5VtPzM35hgSBMbkyR3bfNxbcmyKoPAuzGWYpw4bU9AaH94Ve4WjrBJ6ELKRnxFGuVFdNM9Jgy6BSmNnXdx9iby4B"
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
