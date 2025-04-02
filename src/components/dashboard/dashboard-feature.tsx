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
    "4qg9Qg6TopeeH55WBd2DahV8pawCYMLNE45pGVrYvePF29M9BQcASrjVp7eTGQPTx7GzJaNYkuPLNPDu6sYL62aK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h5nxBLQfU9THpuu7QGFHF3jEFQRQsTQzRSs3qRfpa1Y71spwVBHV7j32HYzftfnNtN8eyMY7J9Dgf3hctMvtp9g",
  "key1": "5UPViUV7BSjPr3BzY3DctvdpFMLLUxjjEdeBPPHFU6gmxZrMjJcUqacdZeimCSZ4dJjPN36zWYmpuCMPMnVHHzbP",
  "key2": "o6GjQpS24YiXxuXWEWGctgZ5Bze3xTgWP4NzmELRDqGcg8shQbboeVvfFizwa48ns1F6S81ZsXJRr1Bp9obvaPQ",
  "key3": "e2rJ8akCkv43FyadssHRqrNWJ2qjaBBCawcro1DGqCewbjv4Hz17TEjjnKHg7JViRoL5U5HtznX5Y7UiAWA1Mu8",
  "key4": "37RSTGH1vCDXeyTkUeVDhhYozn9Xce5id3cnZuEusBwK6DTJAmdy3FYPvdzzKNxyHMHiJ4TLFiFtEzSWAsyrndrC",
  "key5": "myFTxtXrBmRsfBp9UGdo4riCP17NoPsP3NAp3VvrmTowSJxLgE2Le8t4NNjmZtjmFvpiVecjcN7znq9Tgfqxba8",
  "key6": "4TEmRDZYAZwhsAV8LUn2qD7kEkWmS8eJyLCJ1Gb8fQiquLVsDdt4qD3KUFgKqLK37jSm84c4cXRMn88kfrkAQ5sq",
  "key7": "2hftSDhxEBy4ohYjXWbh25ti9vBpRioozAHgNKdkvMWUzet27gHqUrspWYRRVryJWMaGas2zVNdQh5G8LJhsdDKw",
  "key8": "31SA2RrXzJELvQ92BCeCCxDi2qBTmhDfkqBCqP5xbXdnoKtkqFqic1mVUWGYwdEov3Hyo9J5LC6bGAuYA7NDM7Pu",
  "key9": "2T6pN1bx3WZr2MNkVZBKvzDjSMNEBmxNTszntJE4ojWqMMrof2vDW1X7CUAAhUS4Eo66UhoFjnKxWyBRUeitJkkr",
  "key10": "5VLiYrTvboiqUvfaqV7CE5VbL9h7V2SrJ2G75b6kV2y2DiiYLB7nCYbjFiyiNf8x3b1DUQ3C7x3u1BWrBxGMMkwM",
  "key11": "5zACjP3PcE3nNsJAxJVndaFCDBtmyqU5kcWZXPvTRDgkRsVDpFGkHEa3gWggPJ1tTB6X8fy6xiM8tfqV9uxBnaGX",
  "key12": "U5Q5Hidz9whPuz9LpWGhm4u3gmKvGdpLuwPak6bxwR1U2YA3ernBh5jSNUVFJc9fVtScvybqFZg4ZsUkVidQCgz",
  "key13": "4YH9piw8XmZYY5GWcp8xSrRWEdGvxtJgvQN8GSQPpfPCXJtYiHqjFYxWUZVjo9zuLaw8kWfGjikB4ri8feDnPdHD",
  "key14": "C3UcXoVJsBM9M8rDdbT7TLqz89s2Gp11CAjzsPR4SrT8Kc7vb3Scv2R433mXNawsocCTcm7FzbMEWG5zswJfUYP",
  "key15": "4MjrK9hTB6vSGbC3j5oBnswLTDRo49bLdQDADuyj2NC9ufEXgM8apQCwBrhSHFTfu4aECckR2bkZ8uHbN9nPYEqi",
  "key16": "3PSZbF2gX1tCkFhxK296QFFsnLvJCjB9D8StHL6nTTfCtQcchieZuhcpQcrCH81dYYUA1XaSnNU2VUYSksqo2329",
  "key17": "5mSEFnUMNHKQj81CdR3tEq1p7x7FUudZMf4VD19JiqeacSgFQc2dxzAaRuCKW4vbzGju3hsGVtGEsrgXDGEBduGf",
  "key18": "5uRuM118gPsfv6g3QBwmsA2Vx7XLnyxrHV4A2i8AAXhr1zuKWqMHd9H96SLg8wj2KcaR9As4LqegV8scno7Bpx23",
  "key19": "36anz2CamW9y7LdpY48QDimBaNfKKgK5JNsZVCgEBkdz6wD6pC9aWj6PKVgukiuQx7rTesVeZhXz9w1ZwLi9PCNb",
  "key20": "QoWyuzTz77Ua6ykHVFdwh93uM9YiUwm58dzLuBSTejwB37zsNmt9qTJ1QiePhsgT91c9HZCj3p69heJWLn3Vs31",
  "key21": "5n6QYgyeKoSyvFBitariWVL8jfXxnGja2pwe8hGbBGiZmpeNH6e6pTsA4a1un5vRghrNyTPRQ3MnwH9c3TjioZ6j",
  "key22": "5s5pZTBnHMCia8KVcJGmtX5r3X6VDD3khhgkHL1K9ezZZU9GqHBdyVaUYws8SAcrKAE4Z6Wgqp2R32YJG2RV6NcY",
  "key23": "2KrFUXPbAj5JQBTZbA3t8qanSVPBigvJKGi8VKiCKCjLtSMhPx8K3rUCpTvWyvJZP36HjdSijgrAxGPMFu6afyho",
  "key24": "5Xpxyyng7a2JwUBGpa4PD5SdMBdWLApDc4MM1WVGYCnbp1N6ebYBMuQaDCzKCj3HJ2vj7gT4YoW4Evh9vnEgMuhf",
  "key25": "3HPRQgiGYyTVLo62Uu1w81ZmGjHgwZT7RkQj7qqdFA1sJD46YytSVKfFZwrboy2JqnZrAwzqigkMjXt8sk2PWo6X",
  "key26": "3RqPSzt2AWjAVDZghJHTWX2TftVLYcb9tUwsFrt62i9URGjAixqbmfAjTbSPzMJuV5YVcow4Wvzim6uZwBfphQVe",
  "key27": "4kqB4unv9Cfg3WcrTfiLguCBGwwZfZhJHnmBvhTMcuHd6fRh9RUdFFWadBYuPW4Ye9ffuMTsG9UpmrCaK6TBhvCS",
  "key28": "5FBr3Xndvv3ppUtafUszmtk5Y7yrUS2wHNDjpY2SzCRs94A37yz5UiizAnbVWnoD5CwxiBPTxZG6RAKk28M27meK",
  "key29": "7supmFuSy318132Y8qTiJpCpHK93kTZ8hKF4vu6y4Md7de2nV62q8ePmERj99wA3xxJmEohN8sad4H9FidmvFxv",
  "key30": "3HhP28BQTgSeKT6cDvz7nfneMXGGEgmS9M7YqMgeJWehncWdjxJ7m6Bss5w2FMz9zU6fahS6uXXnVtPCRXtJbHN6",
  "key31": "3oWcJSu5uj5pAgdS7zXpcukEs2392baiRxSR4qVpVKMNvpAPe3T7xKgzxFPUDTYWXFNJZ5EcByUtQHdU8RMLp3JV",
  "key32": "2rq2kZ984VNky2KxXaoCZL9brEQUW3DAyfFe8v3uKRaWWHqNWcg9tFLDn9cc5j5G9Waj9PrUnPrf4vaF9JZpDA8T",
  "key33": "xw8K8mqmuswmSyyHkk9NC33eEwqmEZSZghVobuSRc4tjyRM3JLSWgNRzeS6qPF6xvyd62BkEkdgjiU5BVvTxBFL",
  "key34": "4ncCRKsY9gZFTUFsUftttrvgB3HovSesE86FzeVKRVEs2WWzTe4JVF3Y3o47Yn4tYtjJcRiB3P6xzgdk7vJ7G8nj",
  "key35": "nj3oR4whwHR53rLeZEdpKBtpV8rp9a3QdxVRtqup9ygjt5uAH3FSwEjqGvpxsurwhjXFXyofWhA4iNGiwiEoh8H",
  "key36": "2URdcTy4XPR2BAcPZFDYFNAMo6tU8G7FUFsp7qZVJpTZjTYdaEEhRXXkBvu2mbgYJ89QDGLYrX4onJKspvqtyTUQ",
  "key37": "26XBRZuYE5NQnzXv1L9RNekjxhGcMV6oLNWkyQeayKJEfeMsyyrqTif32ph5DFauHDdbPqPqRvwDqMfbzLCWuRBK",
  "key38": "6hyfNYRKnzCJLQZgzfBySijWYtnPGf3ZDE6pxzWueYAYPbKx6ykftwdKdSA4TXFHMYodhdzL3kNwjC7LPxzyvi8",
  "key39": "5oTkLV7meLoyvkBsxFck1jQoRmgDnwNLzcjgpugji89cviMvbJzCLKQkXbD2HJZc24ACMMXwztz7k9rxsEVK7WdM",
  "key40": "228FniH3j6YcdGMX8Ep6bj1e5HjF8kkEPCw1J6aX4zGsSinMsb3yVCzoNHVhJtE8RB3g6hT7R1gP9EqfzS2SAkdJ"
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
