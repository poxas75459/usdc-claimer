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
    "4acX3YhTNK2nG7NhzSDCXiY3VRVXWiBQWEiJruL4Ah2UBJ4oXbXEr3c6LDrtUxdJFxDgBE5y5nzJXn6e9Bv8ep73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yeSp3Qkj1Xy1ATe5oYsJNTi6hJEJvc38BVC9BKTd8KnZwbEUNRpr2ae2HuY93u1doZTckR15ZShrLurFPpPmsxi",
  "key1": "4u3ZPxGissM7XtDPDgRdKubhR7Nt8q9cxc8b4maz68YVgDoBKrYN9B2kB68stT9jHp1N4UAS4XiA2p8w2WgKtKGA",
  "key2": "3PGQj2KUkqXRrKxT9taYqvwa63oxiazxgNgreF9QDNnE1an4pXLpNXiRdYCvZoGQVP9a7oT8dqV21fBJquf4p1DZ",
  "key3": "4tM6Zd7WduguNB8R1TS23DGYUBZYXqYHwqv3Wmb1Y4BnKT6BduHNbxEmGxNToesFofTVBvkWRWiqjKUfbaGnE2J7",
  "key4": "2NKmHFBrYQwhPJiL45Ng1xXtjnmWCQv9HkQ1K4VcbybEvCPcK2BCPUNT934HK93r6GtFuhNh1Ap85VGHk5vBxYSv",
  "key5": "3MTmaZS5a3DjT75pJkEYXb2R2YX6pz3Yexxc5jdS79svM9kTe83nRXqBsT76ARSt3iFcwcvwQGUMDKbdup3t1mrN",
  "key6": "3NRHEZhuLDhFBUeD2XrqkYiFfu1czu7qACbd2NKYGzjimzQLMesjfGNjTTWdB3bYczceQggXaxHXQLDHUzrGTZyn",
  "key7": "QNjDt8G3gYaWHaGiFU3PNQYXrZBvWVq72NHTFkipyZPy6uETCuCLkj1EjnEsnb96WX93RQ8B7w8GN4e6rU74ogS",
  "key8": "3i1ZG6F2dQR3JFbnskhtepxdTqz4mPm5z4ZpscZvySSnL8DZL97bnGVMEA6W8Cay7Y8HrECLEbakqwVF7AEWz2QU",
  "key9": "5i3DMofgrTJNX4mj2suLC8Pq9Bk4mdMRVGpx5Ln6NmeCfW17JQKtpfyHbtAgETLeXLspKQ1bKCcduoNRGaPiWnAN",
  "key10": "4jQMTbnSbhPyEgvEV1fgXwjVqjkNeX7jYnbR4hwvde33wwkwMqzevb17Hg5Tx5vKk1o9sc7JVgeAoGZTeX1LivAq",
  "key11": "2wbWfGNFy8a7yNGgTD8LejpqUzmzH5dQPneZzwKs4Nb1AzgyLoQgPbDYuifP3xWKnEfT8bFCPCmDT9aQB9NbBGN3",
  "key12": "3Hk1UBJB5bqgV9Faqa3DeAqnAB6z5ds8dCHesAVh9N9bQbxJKqxXpXueK2mHNKZiH1EZa94vnrPRCPJgx5UoNnE1",
  "key13": "3MSAHsMyJovkq25UUgJ3VVsVPUtFQzTDcxjjfEhm15ZS2HMycPv3cngtWmJ45bBg7fr6VenUo9m1Q8yhrJMDr1TH",
  "key14": "2sJZsvuBzzaGiX751iFXxnKXc7wa62UApwtXbHZ3QNVX6KH89f5HZcLXAriczeHUqsMYrMDAb9rkP3TpaQEFWAJZ",
  "key15": "5VDC4UwSHtodFBh3wySFocigkqw3gxtNnq3xtxpMNafbwUJTy8ncAo1tB9F4i8HNKfAKk7ke7VtXHcakEqnvuiZe",
  "key16": "5PhP1JP8ARgc4JhQzbhAYsj17Lonq2xXz1JrzjBwhyLYqkfFHTkn793vhPKYofhLLAz8GQqwWNYmtHtKS3nsmGHx",
  "key17": "3eFfnM94Kmh3oZoAZwzDM1LeLPCLiE1h6bVGHNs6o8jSUBmitddBkXSiBZMujfgoQPztZQ6JxrpJnTxC8vkzusoj",
  "key18": "5FXn9v5TjrpCdLUpxtF9xn8xmLjBjG1vz5wRpZJUNzA8F1nJQjT6Ku3wU4wS7enckvuoCJ97Xy8A7wAPjMuCXQXs",
  "key19": "5Fk76Ly52mnJvcieFh37zUJf8N3o3xcWW7eAD2pt7CPEETAXRBVgB4Y162644zthDrxCE2e2M92YEqz4T79benjQ",
  "key20": "4SoXwSDvykes9uNfYVFDWmi7to8gBEwq9kDbz1XAs6K4EEaLTsYUt41mQG7NzejXREGfoQRsoVKWcnigpeqoqZUD",
  "key21": "4Ld1qnCnXWf6nSyeD7ippE24fYxA3hmxd3nDkUZcij8yYCZZnjVLLyj1yu5GnpEXPHJ7AU7PmNaxMUfRYcNoo1Vo",
  "key22": "4Gnd7wet7ydbGDXQtc6wrYc4Y7Uqspc2R4daNHCj4CwES9jFRy2tMBAnUkimVLiF14WtMXmGQCX4BJjxSQ6oUPBX",
  "key23": "5kdMVeuqFvf1NFtxMxkiaST531PcG61qLAH9Fd44f9U3uPs3YFKEQtC9HfSc5C2br8btWNnFGCTCmsNXYRcisQyz",
  "key24": "2zvfRCBeGRyZMDQJAzRgHsxbuDqh58M9bAEKXEhbTcwu9Wm5ykozjEYXDYcJg2LCpHvNNNgoJ9LGjVAaHuHFFaAP",
  "key25": "25mwkeqTxAFxozXyd8sJu8eogCcoQVMygjKrpHBcGEN4igsoVri2Dq48boDNkes7Hbvek6r6cjVKyZgsKx2eeM1E",
  "key26": "4f4jB9Bd7ty7cH19ftCL9cMMUea1mj9kpoBRwUrvHJVNxnPvbfoL4cx57GSi7vo5XfnMHjbXo1Ca5F7Z5BrHCTSc",
  "key27": "3HJhdmUcu1aV8WfBmZjpraFnQZ64CavD9iaZtEz9gBb31Mn71praTSykC7tK3BQMbzBf8eWHeC5wqyJbkznQfnAP",
  "key28": "5t3HvB7KGcSYsSjHqpDheFY86SNjdyRY8ZZTnBiFMvFcPkqqjurtfgGhJyK6dvfCWKNt1D7FZxJcd8mJ7LaZHNah",
  "key29": "2hyRJ4mASXrArwmxhdEEMtiwiAsACZjo8jWpm5tvztsgYDqVexExKf5c6dc9pXEg9ykY5cFHEW28QiX69e5zmoXw",
  "key30": "3cpocnnHnLr4tTjbHqB18M6zXva7be5EriA7PqEWiLNJHQfJCv3FTyzuy4WeFto2pgRJDfYP7LxBHuAXYy8bKMtW",
  "key31": "25dJov9UW4r8pNESkS4BvYmRQdegHJjkfYApqNDoZCorwGeWd7abeTiyWVonth6J2MernFxhEJcoScFbj31Xy49A",
  "key32": "3jsBJJntaxtNTfFAEsZpVWUDHnw9jQSjzhp7bA78TED62jsS7SBi9eKaoH7HYHQdLVchYoiP2Hghn781htmNNwfX",
  "key33": "RNFViFjJdDqCL12KfDr2abdLtoDXDxpZymCwC6mXVT4cBESgp1qsuhPNaSn3GXpnze1GzbacaRjS1RzDF2GFpXo",
  "key34": "2f6YNaAdjxTH7nNVuc3pgUi4NmRZamJK5L4J6hq7rj6NTw82oZMdJ1iwCCjyz5S2d1pAhdNMKY1nV8WHA8Z2E56b"
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
